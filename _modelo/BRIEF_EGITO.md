# Egito Antigo — 9 páginas (instruções adicionais ao BRIEF_CIV.md)

LEIA PRIMEIRO `_modelo/BRIEF_CIV.md` (estrutura, regras de rigor, tipos de bloco, validação) e o exemplo `babilonia/dados.js` + `babilonia/dados-en.js`. Tudo o que lá está vale aqui, com as diferenças abaixo.

## As 9 páginas (todas dentro de `egito/`)
| slug (pasta) | prefixo de imagens | tema |
|---|---|---|
| (raiz) `egito/` | egi- | Página-mãe: panorama dos ~3000 anos |
| `antigo-imperio` | eai- | Pré-dinástico, Unificação, Dinastias 0–8 (Reino Antigo): c. 5000–2181 a.C. |
| `medio-imperio` | emi- | 1.º Intermédio e Reino Médio: c. 2181–1650 a.C. |
| `novo-imperio` | eni- | 2.º Intermédio (Hicsos) e Reino Novo: c. 1650–1069 a.C. |
| `epoca-tardia` | eti- | 3.º Intermédio e Época Tardia (Líbios, Núbios/25.ª, Saítas, Persas, últimos nativos): c. 1069–332 a.C. |
| `ptolomaicos-romanos` | epr- | Alexandre, Ptolemeus, Cleópatra VII, Egito romano e bizantino até 641 (cinquenta anos do Egito cristão, Copta): 332 a.C.– c. 641 d.C. |
| `faraos` | efa- | Os faraós: realeza, titulatura, coroas, tabela das 31 dinastias, biografias |
| `monumentos` | emo- | Monumentos e sítios |
| `deuses-vida` | ede- | Religião, escrita, ciência e vida quotidiana |

## Ficheiros por página (na pasta da página)
`dados.js` (PT), `dados-en.js` (EN), `IMAGENS_EGITO_<SLUG>.md` (ex.: `IMAGENS_EGITO_ANTIGO_IMPERIO.md`; a raiz usa `IMAGENS_EGITO.md`). `index.html` e `img/` JÁ existem; NÃO tocar em nada fora da sua pasta (nem em `egito/grupo.js`, `shared/`, outras páginas, `dados-civs.js`).

### Cabeçalho do dados.js (obrigatório, senão a navegação não funciona)
Páginas filhas (`antigo-imperio`… `deuses-vida`):
```js
import EN from './dados-en.js';
import { GRUPO } from '../grupo.js';
...
export default {
  id: 'egito', cor: '#d9b44a',
  emblema: '../../assets/img/egito.png',
  grupo: { ...GRUPO, aqui: '<slug>' },
  nome: { pt: '<título da página>', en: '<...>' },   // use os títulos da tabela em grupo.js
  periodo: { pt: '...', en: '...' },
  visao: { pt: visao, en: EN.visao }, ... quiz: ...
};
```
Página-mãe (`egito/dados.js`): `import { GRUPO } from './grupo.js';`, `emblema: '../assets/img/egito.png'`, `grupo: { ...GRUPO, aqui: '' }`, nome 'Egito Antigo'/'Ancient Egypt'.

## Como adaptar as 7 secções fixas (visao, linha, mapa, sociedade, personalidades, legado, quiz)
Os títulos das abas não mudam; adapte o CONTEÚDO ao tema da página. Cada página tem a mesma profundidade de uma civilização completa (visao ≥ 15 blocos, linha 20–28 entradas, mapa ≥ 20, sociedade ≥ 35, personalidades 10–15 figuras, legado ≥ 12, quiz 15, 30–40 imagens, ~2/3 da internet e ~1/3 por criar com IA).
- **Épocas (5 páginas):** como as outras civilizações: visão (resumo, quando/onde, porque importa, hoje), linha detalhada da época, mapa (cidades e sítios da época), sociedade (política, religião, economia, escrita, quotidiano, guerra, tecnologia, arte), personalidades, legado (monumentos e redescoberta), quiz.
- **Página-mãe:** panorama geral (visão), linha dos 3000 anos (resumida, ~25 entradas), mapa do Nilo (regiões, nomes, cidades), sociedade geral resumida, 12–15 personalidades principais, legado e egiptomania, quiz geral. Deve apresentar as outras 8 páginas e remeter para elas («veja a página …»), sem repetir os detalhes.
- **Os faraós:** visão (o que era o faraó, divindade, Hórus, ma'at); linha (cronologia das dinastias, com os reinados mais importantes); mapa (capitais e residências: Mênfis, Tebas, Amarna, Pi-Ramessés, Tânis, Sais, Alexandria, e necrópoles reais); sociedade (titulatura e os 5 nomes, coroas e insígnias, cerimónias: Heb-Sed, coroação, harém, sucessão, corregência, damnatio memoriae, tabela das 31 dinastias por período); personalidades (25–30 faraós e rainhas importantes, cada um com parágrafo: Narmer, Djoser, Snefru, Quéops, Quéfren, Miquerinos, Pepi II, Mentuhotep II, Sesóstris III, Amenemhat III, Sobekneferu, Ahmés I, Hatshepsut, Tutmés III, Amenófis III, Akhenaton, Nefertiti, Tutankhamon, Horemheb, Seti I, Ramsés II, Nefertari, Ramsés III, Xeshonq I, Taharqa, Psamético I, Nectanebo II, Ptolemeu I, Cleópatra VII…); legado (múmias reais, cache de Deir el-Bahari, projeto de DNA Tutankhamon, lista de reis: Palermo, Turim, Abidos, Manethon). Cuidado: a cronologia de dinastias deve seguir uma cronologia citada (indique qual: ex. Shaw 2000 / Hornung et al. 2006) e assinalar divergências.
- **Monumentos e sítios:** visão (panorama); linha (cronologia de construção: Saqqara 2670, Gizé, Karnak, Abu Simbel…); mapa (sítios por região: Baixo Egito, Médio, Alto Egito, Núbia, Oásis, Sinai/Mar Vermelho; cada sítio com subtítulo e parágrafo); sociedade (como se construía: pedreiras, rampas, ferramentas, trabalhadores — aldeia de Deir el-Medina, Heit el-Ghurab, obras e salários, astronomia e orientação, tipos: mastabas, pirâmides, templos, obeliscos, túmulos rupestres); personalidades (construtores e descobridores: Imhotep, Hemiunu, Senenmut, Amenhotep filho de Hapu, Ineni, Champollion, Belzoni, Mariette, Petrie, Carter, Hawass…); legado (UNESCO, conservação, Grande Museu Egípcio, Abu Simbel salvo pela UNESCO nos anos 1960, turismo, polémicas); quiz.
- **Deuses, escrita e vida quotidiana:** visão (como viviam e acreditavam); linha (evolução da escrita, religião, rituais funerários); mapa (cidades de culto e templos de cada deus: Heliópolis, Mênfis, Tebas, Abidos, Dendera, Edfu, Filas, Elefantina); sociedade (religião: tabela de deuses; mito de Osíris; Livro dos Mortos, Textos das Pirâmides e dos Sarcófagos; mumificação passo a passo; juízo de Osíris; escrita: hieróglifos, hierático, demótico, copta, Pedra de Roseta; escribas e escolas; medicina (papiros Ebers, Edwin Smith), matemática, astronomia e calendário; casa, comida, cerveja, vestuário, perucas, cosmética, jogos (senet), música, crianças, mulheres, leis e justiça, comércio, agricultura e cheias do Nilo, animais sagrados); personalidades (sacerdotes, escribas, médicos, artistas: Imhotep, Ptahhotep, Kha e Merit, Hori, Kaemwaset, Peseshet (médica), Ankhhaf, Thutmose escultor, Djehuty, Iuny…) — se faltar gente, inclua também os estudiosos (Champollion, Young); legado (decifração dos hieróglifos 1822, egiptomania, Ocidente, palavras herdadas, influência na Bíblia e na Grécia — com rigor); quiz.

## Rigor extra (Egito é muito disputado)
- Cronologia: escolha UMA (Shaw 2000 ou Hornung–Krauss–Warburton 2006) e diga qual; datas antes do Reino Médio com «c.». Nunca invente nomes de reis, datas, números, citações ou identificações de múmias. Debate real (Ahmés I vs Kamose, corregência Akhenaton–Smenkhkare, tumba KV55, tumba de Nefertiti, idade de Nefertiti, pirâmides «construídas por escravos» — NÃO: trabalhadores pagos, mito de Heródoto/Êxodo, teorias marginais/pseudoarqueologia: diga que não têm base) deve ser assinalado.
- Não apresente a Bíblia como fonte histórica do Egito sem ressalva.
- Para as imagens: Wikimedia Commons / museus com licença livre; ids no formato `<prefixo>-<nome>`; legendas curtas e verdadeiras para o objeto/sítio (museu e inventário, quando conhecidos).
- Em EN, use ’ tipográfico dentro de strings com aspas simples; só `**negrito**` é suportado (sem itálico com asterisco).
- IMAGENS md: tabelas «Da internet», «Por criar com IA» e, no fim, o prompt do emblema só na página-mãe (as filhas partilham o emblema da página-mãe; escreva «emblema: partilhado com a página-mãe»).
