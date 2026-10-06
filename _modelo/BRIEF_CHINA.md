# China antiga — 8 páginas (instruções adicionais ao BRIEF_CIV.md)

LEIA PRIMEIRO `_modelo/BRIEF_CIV.md` (estrutura, regras de rigor, tipos de bloco, validação), depois `_modelo/BRIEF_ROMA.md` (mesmo modelo de várias páginas; siga o mesmo nível de profundidade, tamanhos mínimos e regras de rigor, trocando «Roma» por «China antiga») e o exemplo `roma/imperadores/dados.js` + `dados-en.js`. A página-mãe `china/dados.js` JÁ EXISTE e NÃO se altera; leia-a para não repetir o que lá está ao pormenor e para igualar o tom.

## As 8 páginas (todas dentro de `china/`)
| slug | prefixo de imagens | tema |
|---|---|---|
| (raiz) `china/` | chi- | JÁ EXISTE (não tocar). Panorama geral. |
| origens-zhou | cor- | Neolítico, Erlitou/Xia (debate), Shang (ossos oraculares, Anyang), Zhou (Mandato do Céu, feudalismo), Primaveras e Outonos, Reinos Combatentes, as Cem Escolas (resumo), reformas de Shang Yang, preparação da unificação |
| qin-han | cqh- | 221 a.C.–220 d.C.: Qin Shi Huang (unificação, Grande Muralha, Exército de Terracota, queima de livros), colapso, Han Ocidental (Gaozu, Wudi, Zhang Qian), Wang Mang, Han Oriental, Sima Qian, Cai Lun, Revolta dos Turbantes Amarelos, fim dos Han |
| divisao-tang | cdt- | 220–907: Três Reinos, Jin, Seis Dinastias, budismo, Sui (Grande Canal), Tang (Taizong, Wu Zetian, Xuanzong, An Lushan), Chang’an cosmopolita, poesia Tang, queda e Cinco Dinastias |
| song-yuan | csy- | 907–1368 (e Ming inicial até 1500 de passagem): Song do Norte e do Sul, Liao, Jin, Xia Ocidental, economia e cidades, Wang Anshi, neoconfucionismo, Yuan (Kublai Khan, Marco Polo com cautela), Ming (Zhu Yuanzhang, Zheng He, Cidade Proibida) até c. 1500 |
| filosofia-religiao | cfr- | Confúcio e Mêncio, Xunzi, Daoismo (Laozi, Zhuangzi), Legismo (Han Fei), Moísmo, Yin-Yang e Cinco Fases, Mandato do Céu, culto dos antepassados, budismo na China (chan/zen), neoconfucionismo, exames imperiais, I Ching, textos clássicos |
| invencoes-arte | cia- | Papel, imprensa (xilogravura e tipos móveis de Bi Sheng), pólvora, bússola, seda, porcelana, ferro fundido, astronomia, medicina (acupuntura com cautela), matemática, sismógrafo de Zhang Heng; bronzes rituais, jade, caligrafia, pintura de paisagem, poesia (Li Bai, Du Fu), música, cerâmica |
| cidades-rota-seda | ccs- | Cidades (Anyang, Chang’an, Luoyang, Kaifeng, Hangzhou, Pequim/Dadu), planeamento urbano, muralhas e Grande Muralha (Qin, Han, Ming), Grande Canal, Rota da Seda e comércio marítimo, Dunhuang, Xi’an, Quanzhou, quotidiano nas cidades, mercados, casas, comida, vestuário, moeda, correio |

Cada filha já tem a pasta `china/<slug>/` com `index.html` e `img/` (não mexer no index.html). `china/grupo.js` já existe. Escreva APENAS na sua pasta: `dados.js`, `dados-en.js`, `IMAGENS_CHINA_<SLUG_MAIÚSCULO_COM_UNDERSCORE>.md`.

## Cabeçalho do dados.js da filha
```js
import EN from './dados-en.js';
import { GRUPO } from '../grupo.js';
// ... const visao=[...], linha, mapa, sociedade, personalidades, legado, quiz ...
export default { id: 'china', cor: '<cor da página-mãe: copie de china/dados.js>', emblema: '../../assets/img/china.png', grupo: { ...GRUPO, aqui: '<slug>' },
  nome: {pt:'<título>', en:'<title>'}, periodo: {pt:'...', en:'...'}, visao:{pt:visao, en:EN.visao}, linha:{pt:linha,en:EN.linha}, mapa:{pt:mapa,en:EN.mapa}, sociedade:{pt:sociedade,en:EN.sociedade}, personalidades:{pt:personalidades,en:EN.personalidades}, legado:{pt:legado,en:EN.legado}, quiz:{pt:quiz,en:EN.quiz} };
```
NÃO importe `creditos.js` (é gerado depois). `dados-en.js` faz `export default {visao, linha, mapa, sociedade, personalidades, legado, quiz}` (mesmos ids de imagem, mesma estrutura).

## Páginas cronológicas vs temáticas
Cronológicas: 7 secções fixas (visao ≥15 blocos, linha 20–28 entradas `{linha:[{d,t,x}]}`, mapa ≥20, sociedade ≥35, personalidades 10–15, legado ≥12, quiz 15) focadas no período. Temáticas: o tema em todas as secções (linha = evolução do tema; mapa = locais/sítios; sociedade = o núcleo do tema; personalidades = figuras do tema). 36–40 imagens por página ({img:'prefixo-nome', leg:'...'} dentro de blocos normais; NUNCA dentro de `linha:[...]`), cerca de 1/3 para criar com IA; os restantes de Wikimedia Commons (livre). Ids `<prefixo>-<nome>` únicos.

## Rigor
Use a web (WebSearch/WebFetch) para confirmar datas, nomes, números e cronologias dos factos que não tenha certeza; distinga lenda de história; indique debates; números como estimativas; nada de citações inventadas; legendas curtas e verdadeiras (museu só quando certo). Público adulto, tom de enciclopédia clara. Em EN use ’ tipográfico em strings com aspas simples; só `**negrito**` e `*itálico*`.

## Validação antes de terminar
`cd /home/claude/civilizacoes && node --check china/<slug>/dados.js` não serve (imports); em vez disso corra: `node -e "import('./china/<slug>/dados.js').then(m=>{const d=m.default;for(const s of ['visao','linha','mapa','sociedade','personalidades','legado','quiz'])console.log(s,d[s].pt.length,d[s].en.length)})"` (devem existir em PT e EN com o mesmo número de blocos de imagem; se falhar por tipo de módulo, copie para /tmp com package.json {"type":"module"}). Conte as imagens e confirme ids iguais em PT e EN. Responda no fim só com: nº de imagens, tamanhos das secções e pontos incertos.
