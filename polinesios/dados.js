// POLINÉSIOS — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas na «cronologia média»; a cronologia do povoamento da Polinésia Oriental é debatida (cronologia «curta», por radiocarbono, vs. datas mais antigas). Tradições orais (Kupe, Hotu Matuʻa, Māui) são identificadas como tal. a.C./d.C.
// Imagens: cada {img:'id'} procura o ficheiro  polinesios/img/id.jpg  (ver IMAGENS_POLINESIOS.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'Os **polinésios** são os descendentes de navegadores de língua **austronésia** que, a partir de cerca de **1000 a.C.**, partiram das ilhas de **Tonga, Samoa** e Fiji e, ao longo de quase dois mil anos, foram povoando, ilha a ilha, o maior espaço cultural do planeta: o **Triângulo Polinésio**, com mais de **6000 km** de lado e vértices no **Havai**, na **Ilha de Páscoa (Rapa Nui)** e na **Nova Zelândia (Aotearoa)**. Fizeram-no em **canoas de duplo casco** e de **balancim**, sem bússola, sem sextante e sem escrita, guiando-se pelas **estrelas, pelas ondas, pelas aves e pelas nuvens**, e levando nos barcos plantas, porcos, cães e galinhas para criar uma nova casa em cada ilha.',
    'Em cada arquipélago desenvolveram sociedades de **chefes hereditários** (*ali’i* no Havai, *ariʻi* no Taiti, *rangatira* e *ariki* entre os Maoris), com religiões de deuses como **Tāne, Tangaroa, Kū e Pele**, com o poder do **mana** e o sistema de interditos do **tapu/kapu**, templos ao ar livre (*marae*, *ahu*, *heiau*) e, em **Rapa Nui**, as célebres estátuas **moai**. Quando os europeus chegaram, no século XVII e sobretudo com **James Cook** (1769–1779), encontraram povos que já conheciam todo o oceano e falavam línguas aparentadas entre si. Doenças, violência e colonização reduziram muitas populações, mas as culturas sobreviveram e, a partir de 1976, com a viagem da canoa **Hōkūle’a**, a navegação tradicional foi recuperada.'
  ] },
  { img: 'pol-mapa-triangulo', leg: 'O Triângulo Polinésio, com vértices no Havai, na Nova Zelândia (Aotearoa) e na Ilha de Páscoa (Rapa Nui).' },
  { img: 'pol-canoa-outrigger', leg: 'Equipas de canoa de balancim (wa’a) havaianas a preparar uma regata: a embarcação mais comum nas ilhas do Pacífico.' },
  { h: 'Onde viviam' },
  'A Polinésia («muitas ilhas», em grego) ocupa o **Pacífico central e oriental**: de um lado, os arquipélagos de **Tonga, Samoa, Tuvalu** e **Wallis e Futuna**, que formam a Polinésia Ocidental; do outro, os da **Polinésia Oriental**, como as **Ilhas Cook, as Ilhas da Sociedade** (Taiti, Raiatea), as **Marquesas, Tuamotu, Mangareva** e as ilhas Austrais. Nas pontas do triângulo estão o **Havai** (a norte), a **Nova Zelândia** (a sudoeste) e **Rapa Nui** (a sueste), a ilha habitada mais isolada do mundo, a cerca de 3500 km da costa do Chile.',
  'Quase tudo é **mar**: as terras emersas somam uma fração minúscula do triângulo. Há ilhas vulcânicas altas, com solos férteis e rios (Taiti, Havai), e **atóis** de coral, pobres em água doce e em terra, onde se vive do coco, do peixe e do que se planta com cuidado. Cada ilha é um pequeno mundo, e a viagem entre mundos foi, durante séculos, a forma normal de manter laços de família, de comércio e de poder. A Nova Zelândia é a exceção: duas grandes ilhas de clima temperado, com florestas, montanhas e fauna própria.',
  { h: 'Quando existiram' },
  'A cronologia é **debatida**, sobretudo para a Polinésia Oriental. Durante décadas aceitaram-se datas muito antigas (no primeiro milénio d.C., para as Marquesas e o Havai); desde 2010, a datação por radiocarbono de amostras de vida curta (sementes, cascas de frutos) sugere uma «cronologia curta»: toda a Polinésia Oriental povoada depois de c. **1000 d.C.**, e a Nova Zelândia por volta de **1250–1300**. É a leitura mais aceite hoje, mas continua em discussão.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Austronésios e Lapita', 'c. 3000 a.C. – 800 a.C.', 'Expansão austronésia a partir de Taiwan; cerâmica Lapita no arquipélago de Bismarck (c. 1600 a.C.) e chegada a Fiji, Tonga e Samoa (c. 900–800 a.C.)'],
    ['Polinésia Ocidental', 'c. 800 a.C. – c. 1000 d.C.', 'Em Tonga e Samoa forma-se a cultura «polinésia»: língua, religião, chefes; a cerâmica desaparece; a chamada «longa pausa» nas viagens (a sua duração é debatida)'],
    ['Expansão para leste', 'c. 1000 – 1300 d.C.', 'Em poucos séculos povoam-se as Ilhas da Sociedade, as Marquesas, o Havai, Rapa Nui e Aotearoa; contactos prováveis com a América do Sul'],
    ['Chefados e estados insulares', 'c. 1300 – 1750', 'Grandes chefados (Tonga, Havai, Taiti); marae e ahu monumentais; moai em Rapa Nui; pā e iwi em Aotearoa'],
    ['Contacto europeu e colonização', '1767/1769 – séc. XIX', 'Cook; missionários, baleeiros, doenças e armas de fogo; unificação do Havai (1810); Tratado de Waitangi (1840); anexações']
  ] } },
  { img: 'pol-lapita-ceramica', leg: 'Cerâmica Lapita, decorada com motivos dentados impressos, c. 1000 a.C.; é o rasto arqueológico dos primeiros navegadores.' },
  { h: 'Quem eram os polinésios?' },
  'Os polinésios falam línguas do ramo **polinésio** da grande família **austronésia**, a mais espalhada do mundo antes da expansão europeia (de Madagáscar à Ilha de Páscoa). As línguas polinésias são tão próximas que um taitiano, um havaiano e um maori reconhecem palavras comuns: *mana*, *tapu*, *ariki*, *tangata*, *moana* (oceano). A origem remota está em **Taiwan**, de onde, por volta de 3000 a.C., agricultores austronésios se expandiram pelas Filipinas e pela Indonésia e, mais tarde, pelo Pacífico.',
  'A genética conta uma história mais complexa do que as simples migrações lineares: os primeiros colonos do Pacífico remoto tinham sobretudo ascendência «asiática» (relacionada com Taiwan e as Filipinas) e, ao longo dos séculos, misturaram-se com populações **papuas** da Melanésia (estudos de ADN antigo de 2016 e seguintes). Daí a imagem dos polinésios como uma população resultante de séculos de contacto, e não de uma vaga única. Outro dado surpreendente: um estudo de 2020 (*Nature*) encontrou, em populações das ilhas orientais, um contributo **ameríndio** de c. 1200 d.C., sinal de contacto entre o Pacífico e a costa da América do Sul antes de Colombo (um grupo ameríndio próximo dos Zenú, da atual Colômbia).',
  { h: 'Porque importam' },
  { lista: [
    '**A maior façanha de navegação da pré-história:** povoar milhares de ilhas minúsculas no maior oceano do mundo, sem instrumentos.',
    '**Uma ciência do mar sem escrita:** estrelas, ondas, aves e nuvens transformados em mapa mental, transmitido de mestre a aprendiz.',
    '**Sociedades complexas em ilhas:** chefados, templos, agricultura intensiva e aquacultura, sem metais e sem cerâmica nas ilhas orientais.',
    '**Rapa Nui e o debate do «ecocídio»:** uma ilha isolada que se tornou um caso de estudo sobre sociedade e ambiente, hoje revisto à luz de novas provas.',
    '**Palavras que falamos:** *tatuagem* (do taitiano e samoano *tatau*), *tabu* (do tonguês *tapu*) e *surf*, *ukulele* e *aloha* vêm destas culturas, ou passaram por elas.',
    '**Uma cultura viva:** as línguas, a dança, a tatuagem e a navegação são hoje parte da identidade de milhões de pessoas, do Havai à Nova Zelândia.'
  ] },
  { img: 'pol-moai-tongariki', leg: 'Moai do Ahu Tongariki, Rapa Nui; quinze estátuas restauradas na década de 1990.' },
  { caixa: 'Os polinésios hoje', texto: 'Hoje há polinésios em dezenas de países e territórios: a **Nova Zelândia** (Maoris e comunidades samoana, tonguesa e das Ilhas Cook), o **Havai** (parte dos Estados Unidos desde 1898/1959), o **Taiti** e a **Polinésia Francesa**, **Samoa** (independente desde 1962, o primeiro Estado insular do Pacífico a sê-lo), **Tonga** (um reino), as **Ilhas Cook**, **Niue**, **Tuvalu** e **Rapa Nui** (parte do Chile). A **língua maori** é oficial na Nova Zelândia desde 1987, e o **havaiano** é oficial no Havai (com o inglês) desde 1978. A subida do nível do mar ameaça hoje países-atol como Tuvalu, um capítulo novo numa história de séculos de ligação ao oceano.' }
];

const linha = [
  'Esta linha do tempo segue os povos polinésios desde as origens austronésias até à época contemporânea. As datas do povoamento da Polinésia Oriental são **debatidas**, e as «tradições» (Kupe, Hotu Matuʻa, Māui) são relatos orais de valor simbólico e histórico, não datas seguras.',
  { linha: [
    { d: 'c. 3000 – 2500 a.C.', t: 'Os austronésios saem de Taiwan', x: 'Agricultores e navegadores de língua austronésia, com origem em Taiwan, começam a expandir-se para as Filipinas e para o sudeste asiático insular. É o ponto de partida remoto das línguas polinésias.' },
    { d: 'c. 1600 a.C.', t: 'A cerâmica Lapita', x: 'No arquipélago de **Bismarck** (Papua-Nova Guiné) surge a cultura **Lapita**, com aldeias à beira-mar, cerâmica decorada com motivos dentados, anzóis de concha e a primeira navegação a longa distância no Pacífico. O nome vem do sítio de Lapita, na Nova Caledónia.' },
    { d: 'c. 1000 – 800 a.C.', t: 'Fiji, Tonga e Samoa', x: 'Os portadores da cultura Lapita chegam a Fiji, **Tonga** (sítio de Nukuleka, c. 900 a.C.) e **Samoa**, saltando mais de 800 km de mar aberto. São os primeiros povoadores da Polinésia.' },
  ] },
  { img: 'pol-lapita-aldeia', leg: 'Aldeia Lapita sobre palafitas numa lagoa, c. 1000 a.C.; cena imaginada. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 800 a.C. – c. 1000 d.C.', t: 'A «longa pausa» e o nascimento da cultura polinésia', x: 'Em Tonga e Samoa formam-se os traços que depois se reconhecem em toda a Polinésia: a língua, o sistema de chefes, o *tapu*, a canoa de duplo casco. A cerâmica desaparece. Durante cerca de mil anos, as viagens para leste quase param, a chamada **longa pausa**, cuja causa (ventos, técnica, demografia) e duração são debatidas.' },
    { d: 'c. 950 d.C. (tradição)', t: 'O primeiro Tuʻi Tonga', x: 'A tradição tonguesa atribui a Aho’eitu, filho de um deus e de uma mulher, o início da linhagem dos **Tuʻi Tonga**, os «reis» de Tonga. A data é tradicional; a influência do chefado tonguês, esta sim, é bem atestada em Samoa e em ilhas vizinhas.' },
    { d: 'c. 1000 – 1100 d.C.', t: 'A expansão para leste', x: 'A datação por radiocarbono sugere que as **Ilhas da Sociedade** foram povoadas por volta de **1025–1120**, e que daí partiram, em poucas gerações, os navegadores que chegaram às Marquesas, às Tuamotu, às Austrais e a Mangareva.' },
    { d: 'c. 1000 – 1250', t: 'O Havai', x: 'O arquipélago do Havai é povoado, provavelmente a partir das Marquesas e das ilhas da Sociedade. As datações mais recentes apontam para o século XIII; outras, para o século XI. A tradição havaiana fala de chegadas posteriores do Taiti (com o sacerdote Paʻao), mas esta narrativa é discutida.' },
    { d: 'c. 1150 – 1280', t: 'Rapa Nui', x: 'A pequena ilha de Rapa Nui, na ponta sueste do triângulo, é povoada, segundo a tradição, por **Hotu Matuʻa** e os seus companheiros, vindos de uma terra a oeste chamada Hiva. Arqueologicamente, a chegada situa-se entre os séculos XII e XIII.' },
  ] },
  { img: 'pol-moai-rano-raraku', leg: 'Moai por acabar nas encostas do vulcão Rano Raraku, a pedreira onde se talharam quase todas as estátuas de Rapa Nui.' },
  { linha: [
    { d: 'c. 1250 – 1300', t: 'Aotearoa: a chegada à Nova Zelândia', x: 'A última grande massa de terra habitável do mundo a ser povoada. As melhores datações apontam para **c. 1250–1300**; os colonos trazem o *kūmara* (batata-doce), o inhame e o cão. A tradição maori fala de navegadores como **Kupe** e de várias canoas (*waka*) vindas de **Hawaiki**, a pátria ancestral.' },
  ] },
  { img: 'pol-chegada-aotearoa', leg: 'Os primeiros colonos a chegar a Aotearoa em canoas de duplo casco, c. 1250–1300; cena imaginada. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 1200 – 1400', t: 'Contacto com a América', x: 'Estudos de ADN (2020, 2024) mostram que populações ameríndias e polinésias se cruzaram, no Pacífico oriental, algures nos séculos XIII–XIV. A **batata-doce**, planta de origem americana, já estava na Polinésia antes dos europeus. A forma como o contacto se deu (viagem polinésia, viagem americana, ou ambas) é debatida.' },
    { d: 'séc. XIV – XV', t: 'Extinção da moa', x: 'Na Nova Zelândia, as grandes aves **moa**, caçadas e privadas do seu habitat, extinguem-se em poucas gerações depois da chegada dos humanos. É um dos exemplos mais claros de extinção rápida por ação humana numa ilha.' },
    { d: 'séc. XIV – XVII', t: 'O auge dos moai e dos grandes marae', x: 'Em Rapa Nui, centenas de **moai** são talhados e erguidos sobre plataformas (*ahu*). Em Raiatea, o *marae* de **Taputapuatea** torna-se um centro religioso e político de uma vasta rede de ilhas. Em Tonga, constroem-se grandes túmulos reais (*langi*) e o trilitão de **Haʻamonga ʻa Maui**.' },
    { d: '1642', t: 'Tasman em Aotearoa', x: 'O holandês **Abel Tasman** é o primeiro europeu a avistar a Nova Zelândia. Um encontro com os Maoris, na baía hoje chamada de Golden Bay, termina em violência, com quatro marinheiros mortos.' },
    { d: '1722', t: 'Roggeveen em Rapa Nui', x: 'O holandês **Jacob Roggeveen** chega à ilha no domingo de Páscoa, daí o nome «Ilha de Páscoa». Os seus relatos descrevem estátuas ainda de pé e uma população pequena.' },
    { d: '1769', t: 'Cook, Tupaia e a Nova Zelândia', x: 'Depois de **Samuel Wallis** (1767) e de **Bougainville** (1768), **James Cook**, na primeira viagem, observa o trânsito de Vénus no Taiti (3 de junho de 1769) e leva a bordo **Tupaia**, sacerdote e navegador de Raiatea, que desenha uma carta de dezenas de ilhas. Nos meses seguintes, Cook contorna e cartografa a Nova Zelândia.' },
  ] },
  { img: 'pol-cook-retrato', leg: 'Retrato de James Cook (1728–1779), pintado por John Webber, c. 1776 (National Portrait Gallery, Londres).' },
  { linha: [
    { d: '1778 – 1779', t: 'Cook no Havai e a sua morte', x: 'Cook chega ao Havai em janeiro de 1778. Regressa em janeiro de 1779 à baía de **Kealakekua** durante o festival do *Makahiki*, e é recebido com grande cerimónia. Uma disputa por um barco roubado degenera, a 14 de fevereiro de 1779, numa escaramuça em que Cook e quatro fuzileiros morrem.' },
  ] },
  { img: 'pol-morte-cook', leg: 'A morte do capitão Cook em Kealakekua, 14 de fevereiro de 1779, pintura de Johann Zoffany: versão europeia do episódio.' },
  { linha: [
    { d: '1795 – 1810', t: 'Kamehameha unifica o Havai', x: 'O chefe **Kamehameha**, da ilha do Havai, conquista as ilhas, com o auxílio de armas de fogo e de conselheiros europeus, e funda o **Reino do Havai** em 1810, quando o chefe de Kauaʻi aceita a sua autoridade.' },
    { d: '1819', t: 'A abolição do kapu no Havai', x: 'Morto Kamehameha, a rainha viúva **Kaʻahumanu** e o novo rei Liholiho (Kamehameha II) quebram publicamente o sistema do *kapu* ao comerem juntos, homens e mulheres. Meses depois chegam os primeiros missionários americanos (1820).' },
    { d: '1840', t: 'O Tratado de Waitangi', x: 'Mais de quarenta chefes maoris e a Coroa britânica assinam o **Tratado de Waitangi**. Os textos em inglês e em maori diferem em pontos centrais (soberania e governo), e o seu significado é, até hoje, discutido na Nova Zelândia.' },
    { d: '1862 – 1888', t: 'Rapa Nui: razias e anexação', x: 'Em 1862–1863, navios peruanos raptam cerca de 1500 pessoas de Rapa Nui, entre elas muitos chefes e sábios. Os sobreviventes voltam com doenças. Em 1877, restam cerca de **110** habitantes. Em 1888 a ilha é anexada pelo Chile.' },
    { d: '1893 – 1898', t: 'O fim do Reino do Havai', x: 'A rainha **Liliʻuokalani** é deposta em janeiro de 1893 por um golpe apoiado por residentes americanos e por tropas dos Estados Unidos. O Havai é anexado em 1898.' },
    { d: '1962', t: 'A independência de Samoa', x: 'Samoa torna-se o primeiro Estado insular do Pacífico a recuperar a independência, mantendo o sistema tradicional de chefes (*matai*) no seu governo.' },
    { d: '1975 – 1976', t: 'Hōkūle’a: o renascimento da navegação', x: 'No Havai, a Sociedade de Navegação Polinésia constrói a canoa de duplo casco **Hōkūle’a** (1975). Em 1976, com o navegador micronésio **Mau Piailug**, faz a viagem Havai–Taiti, sem instrumentos, em cerca de 30 dias, e prova que a navegação intencional era possível. Em 2014–2017, a canoa dá a volta ao mundo (*Mālama Honua*, «Cuidar da Terra»); em 2017, **Taputapuatea** é inscrito no Património Mundial.' },
  ] },
  { h: 'Redescoberta e debate' },
  'Para o Ocidente, a Polinésia foi «descoberta» no século XVIII, mas o debate sobre a origem dos polinésios só se tornou científico no século XX. O explorador norueguês **Thor Heyerdahl** defendeu, com a expedição da jangada *Kon-Tiki* (1947), uma origem sul-americana; a genética e a linguística contrariaram essa tese (as línguas são austronésias), embora tenham confirmado, em 2020, um contacto pontual com a América. Na década de 1950 o neozelandês **Andrew Sharp** sustentou que as ilhas tinham sido povoadas por acaso, por barcos à deriva; simulações de computador e a viagem da Hōkūle’a mostraram que as travessias foram intencionais e planeadas.'
];

const mapa = [
  'O mapa polinésio é um mapa de **arquipélagos** unidos por viagens. Não houve cidades como no Mediterrâneo ou na Mesopotâmia: as unidades políticas eram **ilhas ou grupos de ilhas**, com povoações dispersas e centros cerimoniais. Os nomes locais indicam-se entre parênteses. As datas de povoamento da Polinésia Oriental são aproximadas e debatidas.',
  { tabela: { cab: ['Arquipélago', 'Localização', 'Povoamento (aprox.)', 'Importância'], linhas: [
    ['Tonga (Tongatapu)', 'Polinésia Ocidental', 'c. 900 a.C.', 'Chefado marítimo dos Tuʻi Tonga; túmulos *langi*; trilitão de Haʻamonga ʻa Maui'],
    ['Samoa (Savaiʻi, Upolu)', 'Polinésia Ocidental', 'c. 800 a.C.', 'Sistema de *matai* (chefes de família); *fale* e *faʻa Samoa*; tatuagem *pe’a*'],
    ['Ilhas da Sociedade (Taiti, Raiatea)', 'Polinésia Oriental', 'c. 1025–1120', 'Ponto de partida de viagens para leste e norte; marae de Taputapuatea'],
    ['Marquesas (Nuku Hiva, Hiva Oa)', 'Polinésia Oriental', 'c. 1100 (debatido)', 'Entre as primeiras ilhas povoadas a leste; arte, tatuagem e pedra talhada'],
    ['Ilhas Cook (Rarotonga)', 'Polinésia Oriental', 'c. 1100–1200', 'Ponto de partida tradicional para Aotearoa, segundo algumas tradições'],
    ['Havai', 'Polinésia Oriental, norte', 'c. 1000–1250 (debatido)', 'Chefados por ilha; *ahupuaʻa*; *heiau*; reino unificado em 1810'],
    ['Rapa Nui (Ilha de Páscoa)', 'Polinésia Oriental, sueste', 'c. 1150–1280', 'Os *moai* e os *ahu*; a escrita *rongorongo*; a ilha mais isolada do mundo'],
    ['Aotearoa (Nova Zelândia)', 'Polinésia Oriental, sudoeste', 'c. 1250–1300', 'Os Maoris: *iwi*, *pā*, *wharenui*, *tā moko*; a moa e o *kūmara*']
  ] } },
  { h: 'Tonga e Samoa: o berço' },
  'Tonga e Samoa são o berço da cultura polinésia. Em **Tongatapu**, a ilha principal de Tonga, ainda se vê a prova de um Estado: túmulos reais em pirâmide de terraços (*langi*), em **Muʻa**, e o **Haʻamonga ʻa Maui**, um trilitão de coral (dois pilares e um lintel) atribuído, pela tradição, ao Tuʻi Tonga Tuʻitātui, c. século XIII. O chefado tonguês, entre os séculos XII e XV, terá estendido a sua influência por ilhas vizinhas e até Samoa (a extensão exata é discutida). Em **Samoa** a vida política assenta nos chefes de família, os *matai*, reunidos em conselho (*fono*), um sistema que continua em vigor.',
  { img: 'pol-haamonga', leg: 'Haʻamonga ʻa Maui, trilitão de coral em Tongatapu, Tonga, c. séc. XIII.' },
  { h: 'Taiti, Raiatea e as Marquesas' },
  'As **Ilhas da Sociedade**, com o Taiti, são o ponto central da Polinésia Oriental. Em **Raiatea**, o *marae* de **Taputapuatea** foi, segundo as tradições orais, um centro onde chefes de várias ilhas se reuniam, e de onde partiam grandes viagens de povoamento; é Património da UNESCO (2017). Nas **Marquesas**, em Nuku Hiva e Hiva Oa, a pedra e a madeira foram trabalhadas em estátuas (*tiki*), plataformas e templos; a tatuagem era tão elaborada que cobria quase todo o corpo.',
  { img: 'pol-taputapuatea', leg: 'O marae de Taputapuatea, Raiatea, Ilhas da Sociedade; Património Mundial da UNESCO desde 2017.' },
  { h: 'Havai' },
  'O arquipélago do Havai (oito ilhas principais) é o ponto mais setentrional do triângulo, a cerca de 3900 km do continente mais próximo. Cada ilha tinha os seus chefes (*aliʻi*); a terra dividia-se em faixas, as **ahupuaʻa**, do cume da montanha ao recife, para que cada comunidade tivesse acesso a madeira, alimentos e peixe. Os templos eram os *heiau*, plataformas de pedra com estátuas de madeira. A ilha do Havai tem o vulcão **Kīlauea**, a casa da deusa **Pele**.',
  { img: 'pol-kilauea', leg: 'O vulcão Kīlauea, no Havai, em imagem de satélite (mosaico Landsat): morada da deusa Pele na tradição havaiana.' },
  { h: 'Rapa Nui' },
  '**Rapa Nui** (Ilha de Páscoa), com apenas cerca de **164 km²**, está a mais de **3500 km** do Chile continental. Foi povoada por voltas dos séculos XII–XIII e ficou famosa pelos quase **mil moai**, estátuas monolíticas de pedra vulcânica talhadas na pedreira de **Rano Raraku** e transportadas por vezes por vários quilómetros para plataformas cerimoniais (*ahu*) à beira-mar. Os moai representam provavelmente antepassados importantes e olham, em geral, para o interior da terra, a proteger as comunidades. O sítio de **Orongo**, sobre o vulcão Rano Kau, foi o centro do culto do **Homem-Pássaro** (*tangata manu*), uma competição anual para recolher o primeiro ovo da andorinha-do-mar (a sua cronologia, a partir de c. século XVII, é debatida).',
  { img: 'pol-ahu-akivi', leg: 'Ahu Akivi, com sete moai voltados para o mar, no interior de Rapa Nui; a ilha é Património Mundial desde 1995.' },
  { img: 'pol-orongo', leg: 'Cerimónia rapanui em Orongo, sobre a cratera do Rano Kau, em Rapa Nui: o centro do culto do Homem-Pássaro.' },
  { h: 'Aotearoa' },
  '**Aotearoa** («terra da longa nuvem branca», na tradição maori) é a maior massa de terra da Polinésia, com duas ilhas principais: a **Ilha do Norte** (*Te Ika-a-Māui*, «o peixe de Māui») e a **Ilha do Sul**. Os Maoris organizam-se em **iwi** (tribos), **hapū** (subtribos) e **whānau** (famílias alargadas). A paisagem tem fortalezas de colina (**pā**), terraços para o cultivo do *kūmara* e as **casas comunitárias** (*wharenui*) com madeira entalhada. Os Maoris contam a sua origem a partir de **Hawaiki**, e a ideia de uma «Grande Frota» de sete canoas, que muitos conhecem, é uma síntese tardia, do final do século XIX, de várias tradições, e não história linear.',
  { img: 'pol-casa-reuniao', leg: 'Casa comunitária maori (wharenui), com a fachada entalhada de madeira; local de reunião e de memória de uma comunidade.' },
  { h: 'Rotas e contactos' },
  'As rotas de navegação ligavam os arquipélagos por travessias de **centenas a milhares de quilómetros**. A de **Taiti–Havai** (c. 4400 km) é a mais famosa; a de **Raiatea–Aotearoa** (c. 4000 km) e a de **Marquesas–Rapa Nui** (c. 3500 km) também. Faziam-se de preferência com **ventos favoráveis** de época e, para regressar, usava-se a viagem contra o vento (ou esperava-se a mudança de estação). Houve trocas entre ilhas vizinhas de **basalto** (Pitcairn), de **conchas**, de **tapa** e de **esteiras**, e viagens ocasionais de longa distância, que a arqueologia comprova (por exemplo, pela origem química de instrumentos de pedra).',
  { img: 'pol-rotas-expansao', leg: 'As grandes rotas de expansão dos polinésios, de Tonga e Samoa para leste e sul; esquema ilustrativo, gerado por IA.' }
];

const sociedade = [
  { h: '1. Organização política' },
  'Em toda a Polinésia as sociedades eram **chefados hereditários**, com chefes ligados por genealogia aos deuses. A **genealogia** (*whakapapa*, em maori) era a base do estatuto: quem descendia do filho mais velho de uma linhagem de chefes tinha mais **mana** (poder sagrado, prestígio). Os termos variam: *aliʻi* (Havai), *ariʻi* (Taiti), *ariki* (Cook, Maori, Rapa Nui), *rangatira* (Maori), *matai* (Samoa), *tuʻi* (Tonga). Mas a variação é grande: em Samoa e na Nova Zelândia o poder era mais descentralizado e baseado no consenso; em Tonga e no Havai, o chefe supremo tinha poder quase sagrado.',
  'No **Havai**, cada ilha era um chefado com vários níveis de chefes, que por vezes guerreavam entre si; em **Tonga**, o Tuʻi Tonga era uma figura sagrada, que partilhava o poder com chefes seculares (a partir do século XV, o Tuʻi Haʻatakalaua e depois o Tuʻi Kanokupolu). Os **Maoris** eram organizados em *iwi* e *hapū*, sem rei, até 1858 (o Movimento do Rei Maori) e a pressão colonial.',
  { img: 'pol-ki-ku', leg: 'Estátua de madeira com penas do deus Kūkāʻilimoku, a divindade da guerra dos chefes havaianos, séc. XVIII.' },
  { h: '2. Classes sociais' },
  { lista: [
    '**Chefes (*aliʻi*, *ariki*, *rangatira*):** a classe dominante, ligada por genealogia aos deuses; presidiam aos rituais e à guerra, e dispunham de terras e trabalho.',
    '**Sacerdotes e peritos (*kahuna*, *tohunga*, *tahuʻa*):** especialistas em ritual, medicina, construção de canoas, navegação e tatuagem; podiam ser de linhagem nobre ou treinados por mestres.',
    '**Gente comum (*makaʻāinana* no Havai, *tūtūā* entre os Maoris):** agricultores, pescadores e artesãos, que sustentavam os chefes com alimentos e trabalho.',
    '**Prisioneiros e dependentes:** existiam em algumas sociedades (*kauwā* no Havai, *taurekareka* entre os Maoris); a natureza e a importância exatas desta categoria são debatidas.'
  ] },
  { h: 'Mulheres' },
  'O lugar das mulheres variava. Em muitas ilhas as mulheres de linhagem nobre podiam ser **chefes**, como a rainha **Kaʻahumanu** no Havai ou a rainha **Pōmare IV** no Taiti, e as mulheres tinham papéis importantes na produção de tapa e na transmissão de genealogias. Mas o *tapu* (ou *kapu*) impunha também restrições: no Havai, as mulheres não podiam comer certos alimentos nem comer com os homens, e a abolição pública dessa regra, em 1819, foi um momento decisivo.',
  { h: '3. Religião' },
  'A religião polinésia assenta em duas noções: **mana**, o poder sagrado que vem dos deuses e de que os chefes são portadores, e **tapu** (*kapu* no Havai; é a origem do nosso «tabu»), o conjunto de interditos que protegem o mana e separam o sagrado do comum. Quebrar um tapu podia ser castigado com a morte. Os deuses variavam por ilha, mas havia figuras partilhadas: a **separação do Céu e da Terra**, os **quatro grandes deuses** (Kāne/Tāne, Kū/Tū, Lono/Rongo, Kanaloa/Tangaroa) e o semideus **Māui**.',
  { tabela: { cab: ['Divindade (variantes)', 'Domínio', 'Onde e como'], linhas: [
    ['Tāne / Kāne', 'Luz, floresta, criação dos seres vivos', 'Entre os Maoris, separa os pais primordiais, Rangi (Céu) e Papa (Terra); no Havai é o deus da vida e da água doce'],
    ['Tangaroa / Kanaloa / Taʻaroa', 'Mar e criação', 'Um dos principais deuses de toda a Polinésia; no Taiti é, em certas tradições, o criador supremo'],
    ['Tū / Kū / Tūmatauenga', 'Guerra', 'Deus da guerra; no Havai recebia sacrifícios nos heiau dos chefes (incluindo, em tempos de guerra, sacrifícios humanos)'],
    ['Rongo / Lono', 'Agricultura, paz, chuva', 'Em Havai, o *Makahiki*, festival de colheita e paz (outubro a fevereiro), era dedicado a Lono'],
    ['Pele', 'Vulcões e fogo', 'Deusa havaiana dos vulcões; vive no Kīlauea; as suas lendas explicam as lavas e a formação das ilhas'],
    ['Māui', 'Semideus e astuto', 'Pescou as ilhas do fundo do mar com um anzol, abrandou o Sol e roubou o fogo; figura de toda a Polinésia'],
    ['Hine-nui-te-pō', 'Morte', 'Maori; a «grande dama da noite»; Māui morreu ao tentar vencer a morte, segundo a lenda'],
    ['Makemake', 'Criador (Rapa Nui)', 'O principal deus de Rapa Nui; associado ao culto do Homem-Pássaro']
  ] } },
  { img: 'pol-marae-ritual', leg: 'Cerimónia num marae das Ilhas da Sociedade, com sacerdotes, chefes e oferendas; cena imaginada. Ilustração gerada por IA.' },
  'Os templos eram, quase sempre, espaços **ao ar livre**: o **marae** (Taiti, Cook, Maori), o **heiau** (Havai) e o **ahu** (Rapa Nui, onde designa a plataforma dos moai) eram recintos de pedra, com plataformas, altares e estátuas. Os rituais incluíam oferendas de comida, danças e, em algumas ilhas (Taiti, Havai, Marquesas), em tempos de crise ou de guerra, **sacrifícios humanos**: a prática está atestada em relatos de europeus (Cook assistiu a um no Taiti, em 1777) e em tradições locais, mas a sua frequência varia e é difícil de medir.',
  { h: '4. Economia' },
  'A economia assentava na **agricultura**, na **pesca** e na troca. Os colonos trouxeram nas canoas as chamadas «**plantas de canoa**»: taro, inhame, árvore-do-pão, banana, cana-de-açúcar, coco, amoreira-do-papel (para o tapa) e kava, além de **porcos, cães e galinhas** (e, sem querer, o rato do Pacífico). Na Nova Zelândia, mais fria, só o *kūmara* e alguns inhames sobreviveram, por isso a caça, a pesca e a recolha de raízes de feto tiveram um papel maior.',
  'No **Havai** havia uma agricultura intensiva, com **terraços irrigados de taro** (*loʻi*) e **viveiros de peixe** (*loko iʻa*) de pedra, que produziam peixe em grande quantidade; muitos estão ainda em recuperação. A terra pertencia aos chefes, que a distribuíam, e o sistema das *ahupuaʻa* garantia a cada comunidade acesso a todos os recursos. Não havia **moeda**, nem metais, nem roda: a troca fazia-se por dádivas e redistribuição, e por circuitos de prestígio (esteiras e tapa em Samoa e Tonga).',
  { img: 'pol-ahupuaa', leg: 'Uma ahupuaʻa havaiana, do cume à costa: floresta, terraços de taro, aldeia e viveiro de peixe junto ao mar; esquema imaginado. Ilustração gerada por IA.' },
  { h: '5. Escrita e memória' },
  'A Polinésia não teve escrita generalizada: a memória cultural era **oral**, e a sua transmissão, uma disciplina de peritos. As **genealogias** e as histórias eram recitadas e cantadas em versos fixos; o **Kumulipo**, o canto havaiano da criação, tem mais de dois mil versos. Os Maoris guardavam a história em **talha** e em *whakapapa*; no Taiti, havia sacerdotes que decoravam longas listas de linhagens. A **tatuagem** e o desenho dos tapa também comunicavam estatuto e origem.',
  'A exceção é **Rapa Nui**, onde se conhecem cerca de **vinte e seis** objetos de madeira cobertos por linhas de pequenos sinais, a escrita **rongorongo**. Nunca foi decifrada. Alguns investigadores pensam que é um sistema de escrita verdadeiro; outros, que é um auxiliar de memória; e há quem discuta se existia antes do contacto com os europeus (a influência de uma cerimónia de assinatura espanhola, em 1770, é uma hipótese). É um dos grandes mistérios por resolver da história da escrita.',
  { img: 'pol-rongorongo', leg: 'Tabuinha de madeira com escrita rongorongo, Rapa Nui; nunca foi decifrada.' },
  { h: '6. Casa e quotidiano' },
  'As casas variavam muito com o clima. Em **Samoa** e **Tonga** a casa tradicional (*fale*) é uma estrutura oval ou redonda, de teto de palha apoiado em colunas, sem paredes, com estores de folhas de palmeira. No **Havai**, as casas (*hale*) eram de madeira e erva (*pili*). Em **Rapa Nui** as famílias viviam em **casas em forma de barco invertido** (*hare paenga*), com uma base de pedras basálticas. Na **Nova Zelândia**, as casas de chuva e frio tinham paredes de ramos e juncos; as casas comunitárias dos chefes tinham o entalhe da fachada.',
  { img: 'pol-fale-casa', leg: 'Aldeia samoana com fale tradicionais, de teto de palha e colunas de madeira, séc. XVIII; cena imaginada. Ilustração gerada por IA.' },
  { h: '7. Alimentação' },
  'A base era o **amido**: taro (*kalo*, *taro*), inhame, batata-doce, fruta-pão, banana e coco. Comia-se **peixe**, marisco e algas, e, em festas, porco e cão. O prato mais característico era cozinhado no **forno de terra** (*umu* em Samoa e no Taiti, *imu* no Havai, *hāngi* na Nova Zelândia): pedras aquecidas numa cova, comida embrulhada em folhas e coberta de terra. O taro cozido e pisado dava o **poi** havaiano. A bebida cerimonial era a **kava** (*ʻawa*, *ʻava*), preparada a partir da raiz de uma planta e partilhada em rituais, sobretudo em Tonga, Samoa e Fiji.',
  { img: 'pol-umu-cena', leg: 'Preparação de um forno de terra (umu) numa praia polinésia, com pedras quentes e folhas de bananeira; cena imaginada. Ilustração gerada por IA.' },
  { h: '8. Vestuário, ornamentos e tatuagem' },
  'Os tecidos eram de **tapa**, uma casca batida da amoreira-do-papel, decorada com padrões estampados (*kapa* no Havai, *siapo* em Samoa), e de **esteiras** de pandano e linho. Os Maoris usavam capas de fibra de **linho-da-nova-zelândia** (*kākahu*), por vezes com penas. No Havai, os chefes vestiam mantos e capacetes de **penas** (*ʻahuʻula*), feitos com milhares de penas de aves, vermelhas e amarelas, um sinal máximo de estatuto.',
  { img: 'pol-tapa', leg: 'Tapa, tecido de casca batida, aqui um fragmento atribuído a Mauatua, a mulher polinésia de Fletcher Christian: técnica tradicional em toda a Polinésia.' },
  'A **tatuagem** é uma das artes mais importantes: a própria palavra *tattoo* vem do taitiano e do samoano **tatau**, registada por Joseph Banks e Cook em 1769. Os homens samoanos recebiam o **peʻa** (do ventre aos joelhos), as mulheres o *malu*; nas Marquesas, a tatuagem cobria quase todo o corpo; os Maoris faziam o ***tā moko***, não por picada, mas por **entalhe** com cinzéis de osso, deixando sulcos na pele. Os rostos tatuados de chefes maoris eram únicos e funcionavam como assinatura. É um processo doloroso, ritual e com significado de identidade; não é simples decoração.',
  { img: 'pol-moko', leg: 'Retrato de uma jovem maori com tā moko no queixo, pintado por Louis John Steele (séc. XIX).' },
  { img: 'pol-hei-tiki', leg: 'Hei-tiki, pendente maori de pounamu (jade da Nova Zelândia), símbolo de linhagem e de prestígio.' },
  { h: '9. Música, dança e jogos' },
  'A dança era uma forma de contar a história: o **hula** havaiano, a **ʻōteʻa** taitiana, a **siva** samoana, a **haka** maori. Esta última, hoje famosa nos jogos de râguebi, era uma dança de desafio e de boas-vindas, com gritos e gestos de força. Usavam-se **tambores** (*pahu* no Havai, *tōʻere* no Taiti), **flautas de nariz**, trombetas de concha e muita música cantada. O **ukulele** é uma invenção posterior: nasceu no Havai, em 1879, a partir de um instrumento português, o **cavaquinho**, trazido por emigrantes da Madeira.',
  'Nos jogos, havia **konane** (um jogo de tabuleiro havaiano semelhante às damas), **ʻulu maika** (uma espécie de bowling com discos de pedra), concursos de canoagem e o **surf** (*heʻe nalu*), praticado no Taiti e no Havai por todas as classes, e descrito por europeus da época de Cook como uma atividade comum e popular.',
  { h: '10. Ciência: a navegação sem instrumentos' },
  'Os navegadores polinésios (*tohunga* ou *kāhuna kilo*) guiavam-se sem bússola, sem mapas escritos e sem sextante, com um conhecimento enciclopédico memorizado e passado de mestre a aprendiz, durante anos. Os seus métodos, estudados hoje por antropólogos e navegadores, incluem:',
  { lista: [
    '**As estrelas:** o horizonte era dividido em «casas» onde estrelas nascem e se põem sempre no mesmo ponto: uma **bússola estelar** mental, com cerca de 32 pontos. O navegador seguia uma estrela perto do horizonte e, quando ela subia, passava à seguinte.',
    '**As ondas:** as vagas longas e regulares do oceano (*swells*) mantêm a direção durante milhares de quilómetros; o navegador sente-as no casco, mesmo de noite. Perto de uma ilha, as ondas dobram-se e cruzam-se, o que revela terra além do horizonte.',
    '**As aves:** aves marinhas como as andorinhas-do-mar saem para pescar de manhã e voltam à terra ao fim do dia; seguir o seu voo, ao amanhecer ou ao entardecer, aponta a direção da ilha mais próxima.',
    '**As nuvens e a cor do mar:** uma nuvem parada sobre o horizonte pode indicar uma ilha, e o reflexo verde de uma lagoa nas nuvens revela um atol.',
    '**O Sol e a Lua:** o rumo ao amanhecer e ao pôr do sol, e o cálculo de distância pelo tempo e pela velocidade, estimados de memória («navegação à estima»).'
  ] },
  { img: 'pol-navegacao-estrelas', leg: 'Esquema da «bússola estelar»: o horizonte dividido em casas, onde as estrelas nascem e se põem; ilustração imaginada, gerada por IA.' },
  'Para registar rotas, usavam **cartas feitas de varas e conchas** nas Ilhas Marshall (na Micronésia, vizinha, e não na Polinésia propriamente dita), e, nas Ilhas da Sociedade, os sacerdotes conservavam de cor listas de ilhas e rumos. O sacerdote **Tupaia**, que Cook levou do Taiti em 1769, desenhou uma carta de cerca de **setenta e quatro ilhas**, num espaço de mais de 4000 km; é um dos documentos mais notáveis da ciência polinésia.',
  { img: 'pol-tupaia-mapa', leg: 'A carta desenhada por Tupaia em 1769, com ilhas do Pacífico central, Biblioteca Britânica.' },
  { h: '11. Tecnologia: canoas, pedra e artesanato' },
  'A grande tecnologia polinésia foi a **canoa**. Havia dois tipos principais: a de **balancim** (um só casco, com uma viga lateral que estabiliza), para pesca e viagens curtas, e a de **duplo casco** (*waʻa kaulua* no Havai, *pahi* no Taiti, *waka hourua* na Nova Zelândia, *kalia* em Tonga), com dois cascos unidos por uma plataforma, uma ou duas velas em forma de garra de caranguejo e espaço para **dezenas de pessoas, plantas e animais**. As maiores medem 20 metros ou mais. O casco era feito de troncos escavados, juntados com **cordas de fibra de coco** (nenhum prego ou metal), calafetados com resina.',
  { img: 'pol-canoa-duplo-casco', leg: 'Canoa de duplo casco com tripulação, carga e plantas, em viagem no alto mar, c. séc. XII; cena imaginada. Ilustração gerada por IA.' },
  'Não havia metais nem cerâmica nas ilhas orientais: usavam-se **machados de basalto polido** (*toki*), anzóis de **concha** e de osso, redes, e cordas de **fibras vegetais**. As **pedras de basalto** de certas pedreiras (Pitcairn, Eiao nas Marquesas, Tutuila em Samoa) foram trocadas a mais de mil quilómetros. Os Maoris trabalharam o **pounamu** (nefrite) em machados, armas e pendentes; os havaianos fizeram anzóis e redes tão finos que ainda se recuperam. No Havai, a engenharia hidráulica dos **loʻi** e dos viveiros marinhos foi notável.',
  { h: '12. Guerra' },
  'A guerra era frequente, sobretudo entre chefados rivais: a disputa de terra, de prestígio e de vingança. Combatia-se com **clavas** (*patu*, *mere*), lanças, fundas e, no Havai, com armas de dentes de tubarão e lutas corpo a corpo. Os Maoris construíam **pā**, fortalezas em colinas com paliçadas e fossos; as grandes canoas de guerra (*waka taua*) podiam levar mais de cem guerreiros. As canoas de guerra de duplo casco do Taiti formavam frotas de mais de uma centena, como Cook viu em 1774.',
  { img: 'pol-pa-reconstrucao', leg: 'Reconstrução de um pā maori, fortaleza de colina com paliçadas e terraços, séc. XVIII; cena imaginada. Ilustração gerada por IA.' },
  { img: 'pol-waka-taua', leg: 'Waka taua, grande canoa de guerra maori, no desfile do Jubileu de Diamante no Tamisa (Londres, 2012).' },
  'Há provas arqueológicas e relatos europeus de **canibalismo ritual** de inimigos em algumas sociedades (Maoris, Marquesas, Fiji), um ato de guerra e de ritual, e não uma prática quotidiana; os relatos europeus foram por vezes exagerados. A chegada das **armas de fogo** mudou tudo: entre 1807 e 1837, as **guerras dos mosquetes** na Nova Zelândia, desencadeadas pela corrida às armas de fogo, causaram dezenas de milhares de mortes, e no Havai Kamehameha usou canhões e conselheiros europeus para unificar o reino.',
  { h: '13. Rapa Nui e o debate do «ecocídio»' },
  'Durante anos, a versão mais popular (de Jared Diamond, no livro *Colapso*, 2005) dizia que os habitantes de Rapa Nui destruíram a floresta de palmeiras para erguer moai, provocaram a fome e uma guerra e levaram a sociedade ao colapso: um «ecocídio». Hoje a tese está **fortemente contestada**. A arqueologia mostra que a floresta foi atingida, sobretudo, pelo **rato polinésio**, trazido nas canoas, que comia as sementes das palmeiras; os investigadores Terry Hunt e Carl Lipo propuseram que a população nunca foi enorme e se manteve estável. Em **2024**, um estudo de genomas antigos publicado na *Nature* (Moreno-Mayar e colegas, com 15 indivíduos) não encontrou sinais de uma quebra demográfica repentina antes do contacto europeu.',
  'O que está bem documentado é a **catástrofe do século XIX**: as doenças trazidas pelos europeus, as razias de escravos peruanos de 1862–1863 e a deportação ou a morte de muitos chefes e sábios reduziram a população a cerca de 110 pessoas em 1877. Esta é a verdadeira «queda». Ao tratar de Rapa Nui, convém evitar a ideia simples de uma sociedade que «se suicidou». Quanto ao transporte dos moai, a tradição oral diz que «**andaram**»: experiências recentes mostram que um moai pode ser deslocado mantido de pé, balançado de um lado para o outro com cordas, de forma a «andar».'
];

const personalidades = [
  'Os polinésios não deixaram biografias escritas: as figuras mais antigas vêm de **tradições orais**, e as mais recentes, de relatos europeus ou de memórias de famílias. Cada figura abaixo indica se é lendária ou histórica.',
  { h: 'Māui (lenda)' },
  'O semideus astuto de toda a Polinésia. Nas lendas, **Māui** pescou as ilhas do fundo do mar com um anzol feito de um osso de antepassada (a Ilha do Norte da Nova Zelândia, *Te Ika-a-Māui*, é o «peixe de Māui»), abrandou o Sol com laços de corda para o dia ser mais longo e roubou o fogo aos deuses. Morreu, segundo os Maoris, ao tentar entrar no corpo da deusa Hine-nui-te-pō para vencer a morte. É uma figura de ligação entre ilhas separadas por milhares de quilómetros.',
  { h: 'Hotu Matuʻa (tradição)' },
  'Chefe fundador de Rapa Nui, segundo a tradição oral recolhida no século XIX e XX. Terá partido da terra de **Hiva**, a oeste, com duas canoas, fugindo de uma guerra, e desembarcado na praia de Anakena. Os seus filhos teriam dividido a ilha em territórios. A ligação a uma pessoa real é discutida, mas a tradição é um sinal importante de como a ilha se via.',
  { h: 'Kupe (tradição)' },
  'Navegador maori, segundo a tradição oral, que terá «descoberto» Aotearoa a partir de **Hawaiki**, perseguindo um polvo gigante, Te Wheke-a-Muturangi. Terá dado nomes a lugares e regressado para contar o que viu, motivando a vinda de outros. A data é impossível de fixar, e a tradição tem muitas versões, mas é central na memória maori sobre a chegada.',
  { h: 'Os Tuʻi Tonga (título, tradição a partir de c. 950 d.C.)' },
  'O **Tuʻi Tonga** era o chefe supremo de Tonga, considerado descendente do deus Tangaloa. A tradição atribui a Aho’eitu, filho do deus e de uma mulher, a fundação da linhagem. Entre os séculos XII e XV, o chefado deles teria dominado várias ilhas do Pacífico ocidental, tributos e influência; o conceito de «império tonguês» é, porém, debatido. A sua tumba real e o trilitão de Haʻamonga ʻa Maui são o testemunho material.',
  { h: 'Tupaia (c. 1725 – 1770)' },
  'Sacerdote (*tahuʻa*), navegador e diplomata de **Raiatea**, nas Ilhas da Sociedade. Em 1769 juntou-se ao *Endeavour* de Cook, serviu de intérprete e guia e desenhou uma carta com cerca de 74 ilhas, de Rapa a Fiji, de uma extensão de mais de 4000 km. Morreu em Batávia (atual Jacarta), no fim de 1770, de doença, antes de ver a Europa. A sua carta e a sua história foram, durante muito tempo, esquecidas pelos europeus, e são hoje muito estudadas.',
  { h: 'Pōmare II (c. 1782 – 1821)' },
  'Chefe do Taiti que, com armas de fogo compradas aos europeus, venceu os rivais (batalha de Feipī, 1815) e unificou grande parte da ilha. Converteu-se ao cristianismo em 1812–1815, e a influência dos missionários na sociedade taitiana cresceu. A sua dinastia reinou até 1880, quando o Taiti foi anexado pela França. Foi sucedido pelo filho, e depois pela sua filha, **Pōmare IV**, que reinou de 1827 a 1877 e aceitou o protetorado francês em 1842.',
  { h: 'Kamehameha I (n. entre c. 1736 e c. 1761 – m. 1819)' },
  'O chefe que unificou as ilhas do Havai. Nascido na ilha do Havai (a data de nascimento é incerta), tornou-se líder com a ajuda de aliados, e usou armas e canhões europeus. Conquistou as ilhas, entre 1790 e 1795, e, em 1810, Kauaʻi e Niʻihau aceitaram a sua soberania. Mandou construir o *heiau* de Puʻukoholā, e criou a *Māmalahoe Kānāwai*, a «Lei do Remo Quebrado», que protege os civis. Morreu em 1819. O seu nome significa «o Solitário».',
  { img: 'pol-kamehameha-estatua', leg: 'Estátua de Kamehameha I, em Honolulu (cópia da original de Thomas Ridgeway Gould).' },
  { h: 'Kaʻahumanu (c. 1768 – 1832)' },
  'A mais poderosa das mulheres de Kamehameha I e, depois da sua morte, **regente** (*kuhina nui*) do Havai. Em 1819, com o novo rei Liholiho, rompeu o sistema do *kapu* ao comer publicamente com homens, e converteu-se ao cristianismo em 1825. Foi, durante mais de uma década, a figura central do reino e uma das mulheres mais poderosas da Polinésia.',
  { h: 'Hongi Hika (c. 1772 – 1828)' },
  'Chefe guerreiro maori da tribo Ngāpuhi. Em 1820 viajou a Inglaterra, onde foi recebido pelo rei Jorge IV e ajudou na elaboração de uma gramática maori em Cambridge; na viagem de regresso trocou presentes por **mosquetes**. Com eles, desencadeou campanhas que mudaram a balança de poder da Ilha do Norte, nas **guerras dos mosquetes**. Morreu de um ferimento em 1828. É uma figura controversa: modernizador e conquistador.',
  { h: 'Te Rangi Hīroa / Peter Buck (c. 1877 – 1951)' },
  'Médico, político e antropólogo maori (Ngāti Mutunga), diretor do Museu Bishop em Honolulu. No livro *Vikings of the Sunrise* (1938) defendeu que os polinésios eram navegadores deliberados vindos da Ásia, e não náufragos, e usou a sua herança maori para estudar o Pacífico por dentro. Foi um dos primeiros investigadores polinésios com formação ocidental, e uma referência para os estudos modernos.',
  { h: 'Mau Piailug (1932 – 2010)' },
  'Mestre navegador de Satawal, nas Ilhas Carolinas (na Micronésia, e não na Polinésia), que mantinha viva a navegação tradicional. Em 1976 aceitou guiar a **Hōkūle’a** do Havai ao Taiti, sem instrumentos, e ensinou depois os havaianos a recuperar a técnica. É considerado o «pai» do renascimento da navegação polinésia.',
  { img: 'pol-mau-piailug', leg: 'Mau Piailug (1932–2010), mestre navegador de Satawal, durante uma cerimónia de navegação Pwo; guiou a Hōkūle’a em 1976.' },
  { img: 'pol-hula', leg: 'Dançarinas de hula num espetáculo moderno (Poipu, Kauai); a dança foi suprimida por missionários no século XIX e recuperada no reinado de Kalākaua (1874–1891).' },
  { h: 'Nainoa Thompson (n. 1953)' },
  'Navegador havaiano, aluno de Mau Piailug. Em 1980 navegou a Hōkūle’a de ida e volta entre o Havai e o Taiti, sem instrumentos, o primeiro havaiano a fazê-lo em séculos. Preside à Sociedade de Navegação Polinésia e liderou a viagem **Mālama Honua** (2014–2017), uma circum-navegação do planeta com uma mensagem de proteção do oceano.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**A arte de navegar sem instrumentos:** a «bússola estelar» e a leitura das ondas, recuperadas nos anos 1970 e hoje ensinadas em escolas no Havai e na Nova Zelândia.',
    '**Palavras:** *tatuagem*, *tabu* (do tonguês *tapu*), *mana*, *aloha*, *kiwi* (a ave e, por extensão, os neozelandeses), *tiki*, *hula*, *ukulele*, *surf*.',
    '**O surf, o hula, a haka, o tā moko:** artes que sobreviveram à colonização e hoje são símbolos de identidade e de turismo.',
    '**Plantas e animais:** o cultivo do taro, da fruta-pão, do coco e da banana espalhou-se por todo o Pacífico por causa das canoas polinésias.',
    '**Uma ideia de ilha:** a noção de **ahupuaʻa** e de cuidar da terra e do mar como um sistema, hoje invocada em projetos de gestão de recursos.',
    '**Um modelo de colonização do desconhecido:** o povoamento da Polinésia continua a ser estudado como o grande caso de expansão humana por mar.'
  ] },
  { h: 'Arte' },
  'A arte polinésia é, sobretudo, **escultura** (madeira e pedra), **tecido** (tapa, esteiras), **tatuagem** e **ornamento** (penas, conchas, jade). As esculturas de figuras humanas, os **tiki**, representam antepassados e deuses, e variam muito: as figuras de Rapa Nui são esbeltas, as marquesanas quadradas, as maoris cobertas de espirais. A arte maori de **entalhe** em madeira, osso e *pounamu* (como o **hei-tiki**) liga-se à genealogia e à identidade. Os mantos de penas havaianos são das obras têxteis mais notáveis do mundo.',
  { h: 'Arquitetura' },
  'Sem cidades, a arquitetura polinésia é **cerimonial e doméstica**: os **marae**, **heiau** e **ahu** de pedra; os *langi* e o trilitão de Tonga; as **casas comunitárias** de entalhe maori; as **fortalezas pā**; as **casas de barco invertido** de Rapa Nui; e as **plataformas** de pedra com grandes moai. A engenharia hidráulica dos *loʻi* e dos viveiros de peixe do Havai também é uma forma de arquitetura da paisagem.',
  { h: 'A redescoberta e a recuperação' },
  'A ciência ocidental «descobriu» a Polinésia com Cook e os naturalistas Joseph Banks e Georg Forster, no século XVIII; o termo «Polinésia» foi criado em 1756 por Charles de Brosses, e Dumont d’Urville fixou em 1831 a divisão em Polinésia, Melanésia e Micronésia (uma classificação hoje criticada). No século XX, a arqueologia, a linguística e a genética reconstruíram o povoamento. Mas a recuperação mais importante foi cultural: o **renascimento havaiano** dos anos 1970, a **Hōkūle’a**, o ensino da língua havaiana e da língua maori, e a devolução de objetos sagrados e restos humanos por museus. O moai **Hoa Hakananai’a**, levado de Rapa Nui em 1868 e guardado no Museu Britânico, é objeto de um pedido de restituição pela comunidade de Rapa Nui.',
  { img: 'pol-te-papa', leg: 'Waka de casco duplo (catamarã) exposta no museu Te Papa Tongarewa, em Wellington, Nova Zelândia.' },
  { h: 'Onde visitar' },
  { lista: [
    '**Parque Nacional Rapa Nui (Chile):** moai, Rano Raraku, Ahu Tongariki, Orongo; Património Mundial (1995).',
    '**Taputapuatea (Raiatea, Polinésia Francesa):** o marae mais importante da Polinésia Oriental; Património Mundial (2017).',
    '**Museu Bishop (Honolulu, Havai):** a maior coleção de arte e de história do Havai e da Polinésia.',
    '**Puʻukoholā Heiau e Puʻuhonua o Hōnaunau (Havai):** templo de Kamehameha e antigo «lugar de refúgio» havaiano.',
    '**Te Papa Tongarewa (Wellington) e Museu de Auckland (Nova Zelândia):** coleções de arte maori e do Pacífico.',
    '**Tongatapu (Tonga):** o trilitão de Haʻamonga ʻa Maui e os túmulos *langi* de Muʻa.',
    '**Museu do Quai Branly (Paris) e Museu Britânico (Londres):** grandes coleções de objetos polinésios.',
    '**Em Portugal:** a ligação do ukulele ao cavaquinho (machete) madeirense, levado para o Havai em 1879.'
  ] },
  { h: 'Créditos das imagens' },
  'Algumas imagens desta página são fotografias reais (Wikimedia Commons) e outras são cenas e reconstruções imaginadas, criadas com inteligência artificial; estas estão identificadas na legenda como «Ilustração gerada por IA» e não são fotografias de objetos reais.'
];

const quiz = [
  { p: 'A que família de línguas pertencem as línguas polinésias?', op: ['Indo-europeia', 'Austronésia', 'Papua', 'Sino-tibetana'], certa: 1, exp: 'São línguas austronésias, uma família com origem em Taiwan que se espalhou de Madagáscar à Ilha de Páscoa.' },
  { p: 'Que cultura arqueológica marca os primeiros navegadores que chegaram a Tonga e a Samoa?', op: ['Lapita', 'Moche', 'Jomon', 'Clóvis'], certa: 0, exp: 'A cultura Lapita, com a sua cerâmica de motivos dentados, é o rasto dos primeiros povoadores da Polinésia (c. 1000–800 a.C.).' },
  { p: 'Quais são os três vértices do Triângulo Polinésio?', op: ['Havai, Taiti e Fiji', 'Havai, Rapa Nui e Nova Zelândia', 'Samoa, Tonga e Austrália', 'Filipinas, Havai e Chile'], certa: 1, exp: 'O Havai (norte), Rapa Nui (sueste) e Aotearoa/Nova Zelândia (sudoeste).' },
  { p: 'Como se orientavam os navegadores polinésios?', op: ['Com a bússola magnética', 'Com o sextante', 'Com estrelas, ondas, aves e nuvens', 'Com mapas escritos em papiro'], certa: 2, exp: 'Sem instrumentos, usavam uma bússola estelar mental e a leitura das vagas, das aves e das nuvens.' },
  { p: 'Quando se situa, de forma geral, a chegada dos polinésios à Nova Zelândia segundo as datações mais recentes?', op: ['c. 1000 a.C.', 'c. 300 d.C.', 'c. 1250–1300 d.C.', 'c. 1600 d.C.'], certa: 2, exp: 'A «cronologia curta» baseada em radiocarbono aponta para c. 1250–1300 d.C.; as datas mais antigas são discutidas.' },
  { p: 'O que é o «tapu» (ou «kapu»)?', op: ['Uma moeda', 'Um instrumento musical', 'Um sistema de interditos sagrados, origem da palavra «tabu»', 'Uma ilha do Pacífico'], certa: 2, exp: 'O tapu protegia o mana, o poder sagrado, e separava o sagrado do comum; a palavra «tabu» vem do tonguês tapu.' },
  { p: 'Que tipo de embarcação era a «waʻa kaulua» havaiana?', op: ['Uma canoa de duplo casco', 'Uma jangada de bambu', 'Um navio a remos', 'Uma canoa monóxila sem vela'], certa: 0, exp: 'É a canoa de duplo casco, com plataforma central, capaz de levar pessoas, plantas e animais em viagens longas.' },
  { p: 'Quem foi Tupaia?', op: ['O primeiro rei do Havai', 'Um sacerdote e navegador de Raiatea que embarcou com Cook em 1769', 'Um missionário inglês', 'O chefe que unificou Samoa'], certa: 1, exp: 'Tupaia desenhou uma carta de dezenas de ilhas e serviu de guia e intérprete na viagem do Endeavour.' },
  { p: 'Que escrita, nunca decifrada, existe em Rapa Nui?', op: ['Linear B', 'Rongorongo', 'Quipu', 'Ogham'], certa: 1, exp: 'O rongorongo, em cerca de vinte e seis objetos de madeira, continua por decifrar.' },
  { p: 'O que mostrou, em 2024, um estudo de genomas antigos de Rapa Nui, na revista Nature?', op: ['Que a ilha foi povoada por sul-americanos', 'Que não houve uma quebra demográfica repentina antes do contacto europeu', 'Que os moai foram feitos por extraterrestres', 'Que a população era de 50 000 pessoas'], certa: 1, exp: 'Os dados contrariam a ideia de um «ecocídio» e de um colapso súbito no século XVII.' },
  { p: 'Quem unificou as ilhas do Havai num reino em 1810?', op: ['Pōmare II', 'Hongi Hika', 'Kamehameha I', 'Liliʻuokalani'], certa: 2, exp: 'Kamehameha I conquistou as ilhas e, em 1810, Kauaʻi e Niʻihau aceitaram a sua soberania.' },
  { p: 'Em 1819, que ato público de Kaʻahumanu e do rei Liholiho quebrou o sistema do kapu no Havai?', op: ['Comer juntos, homens e mulheres', 'Queimar os heiau', 'Abdicar do trono', 'Proibir a pesca'], certa: 0, exp: 'Ao comerem juntos em público, quebraram um dos grandes interditos, e a ordem religiosa antiga deixou de ser aplicada.' },
  { p: 'De onde deriva a palavra «tatuagem»?', op: ['Do latim tattus', 'Do árabe tatwij', 'Do taitiano e samoano tatau, registada em 1769', 'Do inglês to tap'], certa: 2, exp: 'Banks e Cook ouviram «tatau» no Taiti e levaram a palavra, na forma «tattow», para inglês.' },
  { p: 'Qual foi a viagem de 1976 que provou que a navegação intencional entre o Havai e o Taiti era possível?', op: ['Kon-Tiki', 'Hōkūle’a', 'Bounty', 'Endeavour'], certa: 1, exp: 'A Hōkūle’a, com o navegador Mau Piailug, fez a viagem sem instrumentos em cerca de 30 dias.' },
  { p: 'De que instrumento português deriva o ukulele havaiano?', op: ['Da viola da terra', 'Do cavaquinho (machete) trazido da Madeira', 'Da guitarra portuguesa', 'Do bandolim'], certa: 1, exp: 'Emigrantes da Madeira levaram o machete para o Havai em 1879, e dele nasceu o ukulele.' }
];

export default {
  id: 'polinesios',
  cor: '#2a8a9a',
  emblema: '../assets/img/polinesios.png',
  nome:    { pt: 'Polinésios', en: 'Polynesians' },
  periodo: { pt: 'c. 1000 a.C. – séc. XIX', en: 'c. 1000 BC – 19th century' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
