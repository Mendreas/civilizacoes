#!/usr/bin/env python3
"""Aplica um pacote de imagens (zip com <civ>/img, legendas.json, fontes.json, CREDITOS.md) a uma civilização.
Uso: python3 _modelo/aplicar_pacote.py <civ> <prefixo> <pacote.zip>"""
import sys,os,re,json,zipfile,shutil,glob,tempfile
from PIL import Image
civ,pref,zp=sys.argv[1:4]
R=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
tmp=tempfile.mkdtemp();zipfile.ZipFile(zp).extractall(tmp)
base=os.path.join(tmp,civ) if os.path.isdir(os.path.join(tmp,civ)) else tmp
os.makedirs(f'{R}/{civ}/img',exist_ok=True)
n=0
for f in glob.glob(base+'/img/*.jpg'):
    im=Image.open(f).convert('RGB');im.thumbnail((1600,1600));im.save(f'{R}/{civ}/img/'+os.path.basename(f),quality=80,optimize=True,progressive=True);n+=1
for fn in ['CREDITOS.md','fontes.json']:
    if os.path.exists(f'{base}/{fn}'): shutil.copy(f'{base}/{fn}',f'{R}/{civ}/{fn}')
if os.path.exists(base+'/legendas.json'): L=json.load(open(base+'/legendas.json'))
else:  # formato novo: legendas-pt.js / legendas-en.js (arrays com id + legenda) e manifesto.json
    def _arr(fn): t=open(base+'/'+fn,encoding='utf-8').read(); return json.loads(t[t.index('export default')+14:].strip().rstrip(';'))
    _pt={x['id']:x['legenda'] for x in _arr('legendas-pt.js')}; _en={x['id']:x['legenda'] for x in _arr('legendas-en.js')}
    L={i:{'pt':_pt[i],'en':_en.get(i,_pt[i])} for i in _pt}
if isinstance(L,list): L={(x.get('id') or x.get('ficheiro','')[:-4]):x for x in L}
q=lambda s:"'"+s.replace('\\','\\\\').replace("'","\\'")+"'"
for lang,fn in [('pt','dados.js'),('en','dados-en.js')]:
    p=f'{R}/{civ}/{fn}';s=open(p).read();c=0;miss=[]
    for i in re.findall(r"img: '(%s-[a-z0-9-]+)'"%pref,s):
        v=L.get(i+'.jpg') or L.get(i)
        if not v: miss.append(i);continue
        s,k=re.subn(r"(img: '%s', leg: )'(?:[^'\\]|\\.)*'"%re.escape(i),lambda m:m.group(1)+q(v[lang]),s);c+=k
    open(p,'w').write(s);print(fn,'legendas',c,'sem legenda',miss)
if not os.path.exists(f'{R}/{civ}/fontes.json') and os.path.exists(base+'/manifesto.json'):
    import urllib.parse
    M=json.load(open(base+'/manifesto.json'))
    F=[{'titulo':urllib.parse.unquote((x.get('fonte') or '').split('File:')[-1]) or x['id'],'autor':x.get('credito') or '','licenca':x.get('licenca') or ''} for x in M if x.get('tipo')=='commons']
    json.dump(F,open(f'{R}/{civ}/fontes.json','w'),ensure_ascii=False,indent=1)
F=json.load(open(f'{R}/{civ}/fontes.json'))
cl=lambda a:' / '.join(t.strip() for t in a.split('\n') if t.strip())
rows=[[re.sub(r'\.jpg$','',x.get('titulo') or x.get('titulo_commons') or x['id']),cl(x['autor']),x['licenca']] for x in F]
pt=[{'h':'Créditos das imagens'},'As fotografias e os mapas vêm da Wikimedia Commons. Foram redimensionados e convertidos para JPEG, sem alterar o conteúdo. As cenas «imaginadas» foram criadas com inteligência artificial.',{'tabela':{'cab':['Imagem (título no Commons)','Autor','Licença'],'linhas':rows}}]
en=[{'h':'Image credits'},'Photographs and maps come from Wikimedia Commons. They were resized and converted to JPEG, with no change to content. The “imagined” scenes were created with artificial intelligence.',{'tabela':{'cab':['Image (Commons title)','Author','Licence'],'linhas':rows}}]
open(f'{R}/{civ}/creditos.js','w').write('// Créditos das imagens (gerado a partir de fontes.json). Fica no fim da secção «Legado».\nexport default '+json.dumps({'pt':pt,'en':en},ensure_ascii=False,indent=1)+';\n')
p=f'{R}/{civ}/dados.js';s=open(p).read()
if 'creditos.js' not in s:
    s=s.replace("import EN from './dados-en.js';","import EN from './dados-en.js';\nimport CRED from './creditos.js';",1)
    s=re.sub(r"legado:(\s*)\{ pt: legado, en: EN\.legado \}",r"legado:\1{ pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] }",s)
    open(p,'w').write(s)
ids=set(re.findall(r"img: '(%s-[a-z0-9-]+)'"%pref,open(p).read()))
falta=sorted(i for i in ids if not os.path.exists(f'{R}/{civ}/img/{i}.jpg'))
print('imagens copiadas',n,'| slots',len(ids),'| em falta',falta)
# --- Emblema: se o zip trouxer assets/img/<civ>.png, recorta em círculo (384px), coloca e liga ao globo e à página ---
from PIL import ImageDraw, ImageChops
for cand in glob.glob(os.path.join(tmp,'**',civ+'.png'),recursive=True):
    im=Image.open(cand).convert('RGBA'); bb=im.getchannel('A').getbbox()
    if bb: im=im.crop(bb)
    im=im.resize((384,384),Image.LANCZOS)
    m=Image.new('L',(1536,1536),0); ImageDraw.Draw(m).ellipse((0,0,1535,1535),fill=255); m=m.resize((384,384),Image.LANCZOS)
    im.putalpha(ImageChops.multiply(im.getchannel('A'),m)); os.makedirs(f'{R}/assets/img',exist_ok=True); im.save(f'{R}/assets/img/{civ}.png',optimize=True)
    p=f'{R}/dados-civs.js'; s=open(p).read()
    if f"assets/img/{civ}.png" not in s:
        s=re.sub(r"(id: '%s',[^\n]*?cor: '#[0-9a-fA-F]+',)"%re.escape(civ),r"\1 img: 'assets/img/%s.png',"%civ,s,count=1); open(p,'w').write(s)
    print('emblema aplicado:',civ); break
else: print('sem emblema no zip')
