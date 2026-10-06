# Índia — 8 páginas (instruções adicionais ao BRIEF_CIV.md)

LEIA PRIMEIRO `_modelo/BRIEF_CIV.md` (estrutura, regras de rigor, tipos de bloco, validação), depois `_modelo/BRIEF_ROMA.md` (mesmo modelo de várias páginas; siga o mesmo nível de profundidade, tamanhos mínimos e regras de rigor, trocando «Roma» por «Índia») e o exemplo `roma/imperadores/dados.js` + `dados-en.js`. A página-mãe `india-classica/dados.js` JÁ EXISTE e NÃO se altera; leia-a para não repetir o que lá está ao pormenor e para igualar o tom.

## As 8 páginas (todas dentro de `india-classica/`)
| slug | prefixo de imagens | tema |
|---|---|---|
| (raiz) `india-classica/` | ind- | JÁ EXISTE (não tocar). Panorama geral. |
| vedica-mahajanapadas | ive- | c. 1500–321 a.C.: tradição védica, Vedas e Upanishads, cidades do Ganges, 16 Mahajanapadas, Magadha (Bimbisara, Ajatashatru, Nandas), Buda e Mahavira, Pérsia (Dario no Indo), Alexandre no Punjab, Panini |
| maurya | imu- | 321–185 a.C.: Chandragupta, Chanakya/Arthashastra (autoria debatida), Megástenes, Bindusara, Ashoka (Kalinga, editos, budismo, pilares, stupa de Sanchi), administração, declínio, Pataliputra |
| pos-maurya | ipm- | c. 185 a.C.–320 d.C.: Shungas, Satavahanas, indo-gregos (Menandro), Citas e Partas, Kushanas (Kanishka, Gandhara, Mathura), Sangam no sul (Chera, Chola, Pandya), comércio com Roma (Arikamedu, Muziris), budismo Mahayana, Bharhut, Karli |
| gupta-medieval | igm- | 320–1500: Gupta (Chandragupta I, Samudragupta, Chandragupta II, Kalidasa, Fa-Xian), hunos, Harsha e Xuanzang, Pallavas e Chalukyas, Rashtrakutas, Cholas (Rajaraja, Rajendra, Thanjavur), Rajputs, invasões de Mahmud de Ghazni, Sultanato de Deli (1206), Vijayanagara (1336), contactos com Portugal só no fim (Vasco da Gama 1498) |
| religioes-filosofia | irf- | Religião védica, Hinduísmo (Shiva, Vishnu, Devi), Upanishads, Budismo (Buda, Mahayana/Theravada), Jainismo, Ajivika, Charvaka, seis escolas (darshanas), Bhagavad Gita, Ramayana e Mahabharata, Manusmriti, Shankara, bhakti, Islão na Índia (chegada) |
| ciencia-arte | ica- | Matemática (zero, sistema decimal, Aryabhata, Brahmagupta, Bhaskara), astronomia, medicina (Sushruta, Charaka), metalurgia (Pilar de Delhi), xadrez, Kama Sutra com cautela; arquitetura (stupas, Ajanta, Ellora, templos Gupta e Chola, Khajuraho), escultura (Gandhara, Mathura, Sarnath, bronzes Chola), teatro (Natyashastra), música e dança, literatura sânscrita e tâmil |
| sociedade-comercio | isc- | Varna e jati (com cuidado, evolução histórica), aldeia, agricultura, ofícios e guildas, mulheres, família, ashramas, casa, comida, vestuário, educação (Taxila, Nalanda), cidades, moeda, comércio terrestre e marítimo (Oceano Índico, Rota das Especiarias, Roma, Sudeste Asiático), escravatura, lei |

Cada filha já tem a pasta `india-classica/<slug>/` com `index.html` e `img/` (não mexer no index.html). `india-classica/grupo.js` já existe. Escreva APENAS na sua pasta: `dados.js`, `dados-en.js`, `IMAGENS_INDIA_CLASSICA_<SLUG_MAIÚSCULO_COM_UNDERSCORE>.md`.

## Cabeçalho do dados.js da filha
```js
import EN from './dados-en.js';
import { GRUPO } from '../grupo.js';
// ... const visao=[...], linha, mapa, sociedade, personalidades, legado, quiz ...
export default { id: 'india-classica', cor: '<cor da página-mãe: copie de india-classica/dados.js>', emblema: '../../assets/img/india-classica.png', grupo: { ...GRUPO, aqui: '<slug>' },
  nome: {pt:'<título>', en:'<title>'}, periodo: {pt:'...', en:'...'}, visao:{pt:visao, en:EN.visao}, linha:{pt:linha,en:EN.linha}, mapa:{pt:mapa,en:EN.mapa}, sociedade:{pt:sociedade,en:EN.sociedade}, personalidades:{pt:personalidades,en:EN.personalidades}, legado:{pt:legado,en:EN.legado}, quiz:{pt:quiz,en:EN.quiz} };
```
NÃO importe `creditos.js` (é gerado depois). `dados-en.js` faz `export default {visao, linha, mapa, sociedade, personalidades, legado, quiz}` (mesmos ids de imagem, mesma estrutura).

## Páginas cronológicas vs temáticas
Cronológicas: 7 secções fixas (visao ≥15 blocos, linha 20–28 entradas `{linha:[{d,t,x}]}`, mapa ≥20, sociedade ≥35, personalidades 10–15, legado ≥12, quiz 15) focadas no período. Temáticas: o tema em todas as secções (linha = evolução do tema; mapa = locais/sítios; sociedade = o núcleo do tema; personalidades = figuras do tema). 36–40 imagens por página ({img:'prefixo-nome', leg:'...'} dentro de blocos normais; NUNCA dentro de `linha:[...]`), cerca de 1/3 para criar com IA; os restantes de Wikimedia Commons (livre). Ids `<prefixo>-<nome>` únicos.

## Rigor
Use a web (WebSearch/WebFetch) para confirmar datas, nomes, números e cronologias dos factos que não tenha certeza; distinga lenda de história; indique debates; números como estimativas; nada de citações inventadas; legendas curtas e verdadeiras (museu só quando certo). Público adulto, tom de enciclopédia clara. Em EN use ’ tipográfico em strings com aspas simples; só `**negrito**` e `*itálico*`.

## Validação antes de terminar
`cd /home/claude/civilizacoes && node --check india-classica/<slug>/dados.js` não serve (imports); em vez disso corra: `node -e "import('./india-classica/<slug>/dados.js').then(m=>{const d=m.default;for(const s of ['visao','linha','mapa','sociedade','personalidades','legado','quiz'])console.log(s,d[s].pt.length,d[s].en.length)})"` (devem existir em PT e EN com o mesmo número de blocos de imagem; se falhar por tipo de módulo, copie para /tmp com package.json {"type":"module"}). Conte as imagens e confirme ids iguais em PT e EN. Responda no fim só com: nº de imagens, tamanhos das secções e pontos incertos.
