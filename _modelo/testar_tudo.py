# Teste automático completo. Uso: python3 _modelo/testar_tudo.py [--todas] [filtro]
# Para cada página publicada: PT e EN, todas as abas, ecrã grande e telemóvel; regista erros de JS,
# pedidos falhados (404), imagens em falta e placeholders. Escreve o resumo no fim; sai com código 1 se houver falhas.
import sys, re, subprocess, time, json, os, glob
from playwright.sync_api import sync_playwright
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
todas = '--todas' in sys.argv
filtro = [a for a in sys.argv[1:] if not a.startswith('--')]
civs = open(R + '/dados-civs.js', encoding='utf8').read()
prontas = set(re.findall(r"id: '([^']+)'[^\n]*?pronta: true", civs)) if not todas else set(re.findall(r"id: '([^']+)'", civs))
pags = sorted(os.path.dirname(p)[len(R) + 1:] for p in glob.glob(R + '/**/dados.js', recursive=True)
              if '_modelo' not in p and 'node_modules' not in p)
pags = [p for p in pags if p.split('/')[0] in prontas and (not filtro or any(f in p for f in filtro))]
srv = subprocess.Popen(['python3', '-m', 'http.server', '8799'], cwd=R, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL); time.sleep(1)
falhas = []
def teste(b, url, nome, vp):
    pg = b.new_page(viewport=vp); er = []
    pg.on('pageerror', lambda e: er.append('JS: ' + str(e)[:120]))
    pg.on('response', lambda r: er.append(f'HTTP {r.status}: {r.url[-90:]}') if r.status >= 400 else None)
    pg.goto(url); pg.wait_for_timeout(600)
    n = pg.evaluate("document.querySelectorAll('#abas button').length")
    if n < 7: er.append(f'só {n} abas')
    im = 0
    for lang in ['pt', 'en']:
        pg.click('#l-' + lang); pg.wait_for_timeout(200)
        for i in range(n):
            pg.click(f'#abas button:nth-child({i+1})'); pg.wait_for_timeout(150)
            pg.evaluate("document.querySelectorAll('img').forEach(i=>i.loading='eager')"); pg.wait_for_timeout(500)
            bad = pg.evaluate("[...document.querySelectorAll('main img')].filter(i=>i.complete&&i.naturalWidth==0).length")
            fal = pg.evaluate("document.querySelectorAll('.img-falta').length")
            im += pg.evaluate("[...document.querySelectorAll('main img')].filter(i=>i.complete&&i.naturalWidth>0).length")
            if fal: er.append(f'{lang} aba {i+1}: {fal} placeholders')
            if bad: er.append(f'{lang} aba {i+1}: {bad} imagens partidas')
        if pg.evaluate("document.documentElement.scrollWidth > innerWidth + 2"): er.append(f'{lang}: scroll horizontal')
    pg.close(); return im, er
with sync_playwright() as pw:
    b = pw.chromium.launch()
    # globo
    pg = b.new_page(viewport={'width': 1000, 'height': 800}); er = []
    pg.on('pageerror', lambda e: er.append(str(e)[:120])); pg.on('response', lambda r: er.append(f'HTTP {r.status} {r.url[-80:]}') if r.status >= 400 else None)
    pg.goto('http://localhost:8799/'); pg.wait_for_timeout(2500)
    if er: falhas.append(('globo', er))
    print('globo', 'OK' if not er else er); pg.close()
    for p in pags:
        for tag, vp in [('pc', {'width': 1000, 'height': 900}), ('tel', {'width': 390, 'height': 800})]:
            try: im, er = teste(b, f'http://localhost:8799/{p}/', p, vp)
            except Exception as e: im, er = 0, ['ERRO: ' + str(e)[:150]]
            print(p, tag, 'imagens', im, 'OK' if not er else er[:4], flush=True)
            if er: falhas.append((p + ' ' + tag, er))
    b.close()
srv.kill()
print('\nFALHAS:', len(falhas))
for f in falhas: print(' -', f[0], f[1][:3])
sys.exit(1 if falhas else 0)
