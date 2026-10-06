# Roma — 9 páginas (instruções adicionais ao BRIEF_CIV.md)

LEIA PRIMEIRO `_modelo/BRIEF_CIV.md` (estrutura, regras de rigor, tipos de bloco, validação), depois `_modelo/BRIEF_EGITO.md` (mesmo modelo de várias páginas; siga o mesmo cabeçalho, nível de profundidade e regras de rigor) e o exemplo `egito/faraos/dados.js` + `dados-en.js`. As regras do Egito aplicam-se aqui, trocando «Egito» por «Roma».

## As 9 páginas (todas dentro de `roma/`)
| slug (pasta) | prefixo | tema |
|---|---|---|
| (raiz) `roma/` | rom- | Página-mãe: panorama de 753 a.C. a 476 d.C. e legado |
| `monarquia-republica` | rmr- | Fundação (mito e arqueologia), Monarquia, República até 264 a.C.: Conflito das Ordens, Leis das XII Tábuas, Guerras Latinas e Samnitas, Pirro |
| `republica-tardia` | rrt- | 264–27 a.C.: Guerras Púnicas, expansão no Mediterrâneo, Gracos, Mário e Sula, Pompeu, Espártaco, César, guerras civis, Actium |
| `alto-imperio` | rai- | 27 a.C.–192 d.C.: Augusto, Júlio-Cláudios, ano dos quatro imperadores, Flávios, Antoninos (apogeu sob Trajano), Pax Romana, províncias |
| `crise-dominato` | rcd- | 193–476 d.C.: Severos, Crise do século III, Diocleciano e Tetrarquia, Constantino, cristianização, divisão, invasões, queda do Ocidente (476) e o que se segue (Oriente continua: remeter para o futuro Império Bizantino) |
| `imperadores` | rim- | Imperadores e grandes figuras (políticos, generais, escritores) com biografias; tabela de imperadores |
| `exercito` | rex- | Exército e guerra: legiões, evolução (Reforma de Mário, Augusto, Diocleciano), organização, equipamento, táticas, cercos, marinha, fronteiras (limes), inimigos |
| `cidades-engenharia` | rce- | Roma e outras cidades, monumentos, engenharia: Fórum, Coliseu, Panteão, aquedutos, estradas, Pompeia e Herculano, Óstia, cidades das províncias (incluindo Hispânia/Lusitânia: Conímbriga, Mérida, Évora, Tróia (Setúbal)), betão, termas |
| `religiao-vida` | rrv- | Religião (deuses, rituais, mistérios, cristianismo), direito romano, língua latina, sociedade (classes, escravatura, mulheres, família), casa, comida, vestuário, educação, entretenimento (jogos, teatro, circo), medicina, escrita, economia e moeda |

IMAGENS md: `IMAGENS_ROMA.md` (raiz) e `IMAGENS_ROMA_<SLUG>.md` (slug em maiúsculas com _ , ex.: `IMAGENS_ROMA_ALTO_IMPERIO.md`). Cada página 36–40 imagens, cerca de 1/3 por criar com IA. Prompt do emblema só na página-mãe: círculo/medalhão estilo selo, **sem texto, sem SPQR escrito** (símbolos: águia legionária, fasces, louro, coluna, arco...), em tons de vermelho romano e ouro. As filhas escrevem «emblema: partilhado com a página-mãe».

## Cabeçalho do dados.js
Filhas:
```js
import EN from './dados-en.js';
import { GRUPO } from '../grupo.js';
export default { id: 'roma', cor: '#b5413a', emblema: '../../assets/img/roma.png', grupo: { ...GRUPO, aqui: '<slug>' },
  nome: {pt:'<título da tabela>', en:'<...>'}, periodo: {pt:'...', en:'...'}, visao:{pt:..., en: EN.visao}, ... };
```
Raiz (`roma/dados.js`, sobrescreve o esboço): `import { GRUPO } from './grupo.js'`, `emblema: '../assets/img/roma.png'`, `grupo: { ...GRUPO, aqui: '' }`, nome 'Roma'/'Rome', período '753 a.C. – 476 d.C.'. Copie o padrão exato de `egito/faraos/dados.js` (como importa EN, como compõe as secções). Estrutura final idêntica: 7 secções fixas (visao, linha, mapa, sociedade, personalidades, legado, quiz).
NÃO tocar em nada fora da sua pasta (nem `roma/grupo.js`, nem `shared/`, nem outras páginas).

## Adaptação das 7 secções
Siga a mesma lógica do Egito: épocas (páginas 1–4) como páginas cronológicas completas (visão, linha 20–28 entradas, mapa com cidades/batalhas/províncias, sociedade política/religião/economia/guerra/quotidiano da época, 10–15 personalidades, legado, quiz 15); temáticas (5–8) viram o tema em todas as secções (ex.: Exército: visão geral; linha = evolução militar; mapa = campos de batalha, fortalezas, limes; sociedade = organização, equipamento, táticas, disciplina, vida do legionário, marinha; personalidades = generais; legado; quiz). Página-mãe: panorama geral resumido que apresenta as outras 8 páginas e remete para elas.
Tamanhos mínimos: visão ≥ 15 blocos, linha 20–28 entradas, mapa ≥ 20, sociedade ≥ 35, personalidades 10–15 figuras (tabelas de imperadores/cônsules na secção adequada), legado ≥ 12, quiz 15.

## Rigor extra (Roma)
- Distinga SEMPRE tradição lendária (Rómulo e Remo, 753 a.C., os sete reis, Lucrécia) de arqueologia e história documentada; use «segundo a tradição»/«segundo Lívio».
- Datas: usar as convencionais (509 a.C. República, 27 a.C. Principado, 476 d.C.). Indique divergências (ex.: 476 como convenção; Orestes/Rómulo Augústulo; Júlio Nepos até 480).
- Números (população, efetivos de legiões, baixas) são estimativas: dê intervalos e fontes antigas com ressalva. Nada de citações inventadas; só atribua citações famosas se for seguro («Veni, vidi, vici» citado por Suetónio/Plutarco; «Alea iacta est» é tradição, a forma exata varia).
- Mitos modernos a evitar/assinalar: gladiadores sempre «Ave Caesar, morituri te salutant» (só atestado uma vez, Cláudio), polegar para baixo, vomitoria, cinto de castidade, Nero tocando lira a ver arder Roma (não há prova; incêndio 64 d.C.), «Queda de Roma» como evento único.
- Cristianismo: tratar com neutralidade histórica (Edito de Milão 313, Tessalónica 380).
- Hispânia/Portugal: inclua com rigor onde for pertinente (Lusitânia, Viriato, Augusta Emerita, Conímbriga, Pax Iulia/Beja, Olisipo/Lisboa = Felicitas Iulia, Bracara Augusta, Aeminium).
- Imagens: Wikimedia Commons (licença livre), ids `<prefixo>-<nome>`, legendas curtas e verdadeiras (museu e inventário só quando certos). Em EN use ’ tipográfico em strings com aspas simples; só `**negrito**`.
