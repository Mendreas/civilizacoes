# Grécia Antiga — 8 páginas (instruções adicionais ao BRIEF_CIV.md)

LEIA PRIMEIRO `_modelo/BRIEF_CIV.md` (estrutura, regras de rigor, tipos de bloco, validação), depois `_modelo/BRIEF_ROMA.md` (mesmo modelo de várias páginas; siga o mesmo nível de profundidade, tamanhos mínimos e regras de rigor, trocando «Roma» por «Grécia Antiga») e o exemplo `roma/imperadores/dados.js` + `dados-en.js`. A página-mãe `grecia/dados.js` JÁ EXISTE e NÃO se altera; leia-a para não repetir o que lá está ao pormenor e para igualar o tom.

## As 8 páginas (todas dentro de `grecia/`)
| slug | prefixo de imagens | tema |
|---|---|---|
| (raiz) `grecia/` | gre- | JÁ EXISTE (não tocar). Panorama geral. |
| egeu-arcaica | gea- | c. 3000–480 a.C.: Cíclades, Minoicos (Cnossos), Micénicos (Linear B, Troia/Homero com cautela), colapso c. 1200, Idade Obscura, Homero, alfabeto, póleis, colonização, tiranos, Esparta (Licurgo, Messénia), Atenas (Drácon, Sólon, Pisístrato, Clístenes), Jogos Olímpicos 776 |
| classica | gcl- | 480–323 a.C.: Guerras Médicas (Maratona, Termópilas, Salamina, Plateias), Liga de Delos, Péricles, democracia ateniense, Guerra do Peloponeso, Trinta Tiranos, hegemonia de Esparta e Tebas, Epaminondas, Filipe II até Queroneia |
| helenismo | ghe- | 359–30 a.C.: Filipe II, Alexandre Magno (campanhas, Gaugamela, Índia), Diádocos, reinos helenísticos (Ptolomeus, Selêucidas, Antigónidas, Átalo), Alexandria, Liga Aqueia, conquista romana (Corinto 146, Actium 31/Egito 30) |
| filosofia-ciencia | gfc- | Filosofia (pré-socráticos, Sócrates, Platão, Aristóteles, helenísticas), matemática e ciência (Euclides, Arquimedes, Eratóstenes, Hipócrates, Aristarco), história (Heródoto, Tucídides, Xenofonte), literatura (Homero, Hesíodo, Safo, Píndaro), teatro como literatura (Ésquilo, Sófocles, Eurípides, Aristófanes) |
| arte-arquitetura | gaa- | Escultura (kouroi, korai, estilo severo, Fídias, Praxíteles, Lísipo), cerâmica (figuras negras/vermelhas), ordens arquitetónicas, Acrópole/Partenon, templos (Delfos, Olímpia, Segesta/Paestum), teatros (Epidauro), ágora, pintura, moedas, música |
| religiao-vida | grv- | Deuses olímpicos, mitos, santuários, oráculos (Delfos), mistérios (Elêusis), rituais, Jogos Pan-helénicos, sociedade (cidadãos, metecos, escravos, mulheres), casa, comida, simpósio, vestuário, educação, ginásio, teatro, medicina, economia, moeda |
| guerra | ggu- | Hoplitas e falange, equipamento, Esparta, cavalaria/peltastas, trirremes e marinha ateniense, cercos, batalhas-chave, mercenários, falange macedónia e Alexandre, exército helenístico, armas de cerco, fortificações |

Cada filha já tem a pasta `grecia/<slug>/` com `index.html` e `img/` (não mexer no index.html). `grecia/grupo.js` já existe. Escreva APENAS na sua pasta: `dados.js`, `dados-en.js`, `IMAGENS_GRECIA_<SLUG_MAIÚSCULO_COM_UNDERSCORE>.md`.

## Cabeçalho do dados.js da filha
```js
import EN from './dados-en.js';
import { GRUPO } from '../grupo.js';
// ... const visao=[...], linha, mapa, sociedade, personalidades, legado, quiz ...
export default { id: 'grecia', cor: '<cor da página-mãe: copie de grecia/dados.js>', emblema: '../../assets/img/grecia.png', grupo: { ...GRUPO, aqui: '<slug>' },
  nome: {pt:'<título>', en:'<title>'}, periodo: {pt:'...', en:'...'}, visao:{pt:visao, en:EN.visao}, linha:{pt:linha,en:EN.linha}, mapa:{pt:mapa,en:EN.mapa}, sociedade:{pt:sociedade,en:EN.sociedade}, personalidades:{pt:personalidades,en:EN.personalidades}, legado:{pt:legado,en:EN.legado}, quiz:{pt:quiz,en:EN.quiz} };
```
NÃO importe `creditos.js` (é gerado depois). `dados-en.js` faz `export default {visao, linha, mapa, sociedade, personalidades, legado, quiz}` (mesmos ids de imagem, mesma estrutura).

## Páginas cronológicas vs temáticas
Cronológicas: 7 secções fixas (visao ≥15 blocos, linha 20–28 entradas `{linha:[{d,t,x}]}`, mapa ≥20, sociedade ≥35, personalidades 10–15, legado ≥12, quiz 15) focadas no período. Temáticas: o tema em todas as secções (linha = evolução do tema; mapa = locais/sítios; sociedade = o núcleo do tema; personalidades = figuras do tema). 36–40 imagens por página ({img:'prefixo-nome', leg:'...'} dentro de blocos normais; NUNCA dentro de `linha:[...]`), cerca de 1/3 para criar com IA; os restantes de Wikimedia Commons (livre). Ids `<prefixo>-<nome>` únicos.

## Rigor
Use a web (WebSearch/WebFetch) para confirmar datas, nomes, números e cronologias dos factos que não tenha certeza; distinga lenda de história; indique debates; números como estimativas; nada de citações inventadas; legendas curtas e verdadeiras (museu só quando certo). Público adulto, tom de enciclopédia clara. Em EN use ’ tipográfico em strings com aspas simples; só `**negrito**` e `*itálico*`.

## Validação antes de terminar
`cd /home/claude/civilizacoes && node --check grecia/<slug>/dados.js` não serve (imports); em vez disso corra: `node -e "import('./grecia/<slug>/dados.js').then(m=>{const d=m.default;for(const s of ['visao','linha','mapa','sociedade','personalidades','legado','quiz'])console.log(s,d[s].pt.length,d[s].en.length)})"` (devem existir em PT e EN com o mesmo número de blocos de imagem; se falhar por tipo de módulo, copie para /tmp com package.json {"type":"module"}). Conte as imagens e confirme ids iguais em PT e EN. Responda no fim só com: nº de imagens, tamanhos das secções e pontos incertos.
