// IMPÉRIO MONGOL — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas aproximadas; a.C. = antes de Cristo. As datas do início da vida de Gengis Cã e muitos números (exércitos, mortos) são debatidos e vêm assinalados.
// Imagens: cada {img:'id'} procura o ficheiro  mongol/img/id.jpg  (ver IMAGENS_MONGOL.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'O **Império Mongol** foi o maior império de território contínuo da história: em 1206 um chefe das estepes, **Temüjin**, foi aclamado **Gengis Cã** («Cã Universal» ou «Cã Oceânico», a tradução é debatida) e, em pouco mais de meio século, os seus cavaleiros e os seus filhos e netos conquistaram terras do Pacífico à Hungria, da Sibéria ao Golfo Pérsico. No auge, por volta de 1270, o conjunto cobria mais de 20 milhões de km².',
    'Não foi um Estado estável. Depois da morte de Gengis (1227) o império passou a ser governado por sucessivos grandes cãs; a partir de 1260 dividiu-se, na prática, em **quatro canatos**: a dinastia **Yuan** na China, o **Ilcanato** na Pérsia, a **Horda de Ouro** na Rússia e na estepe do Cáspio, e o **canato de Chagatai** na Ásia Central. A «Pax Mongolica» deixou as rotas da Eurásia mais seguras do que em muitos séculos, mas as conquistas custaram dezenas de cidades destruídas e um número de mortos que os historiadores ainda discutem.'
  ] },
  { img: 'mon-mapa-imperio', leg: 'Mapa do Império Mongol em 1279: territórios diretamente governados em verde escuro; vassalos, tributários e áreas submetidas em verde claro. Limites aproximados.' },
  { h: 'Onde ficava' },
  'O coração do império era a **estepe da Mongólia**, uma vasta planície de erva, de rios e de montanhas entre a Sibéria, a China e o deserto de Gobi: um clima extremo, de invernos que chegam a –40 °C e verões curtos, onde só se vive bem com rebanhos em movimento. Aí nascem os rios **Onon**, **Kherlen** e **Tuul**, e fica o monte **Burkhan Khaldun**, sagrado para os mongóis. A capital imperial, **Karakorum**, ficava no vale do Orkhon, no centro da Mongólia atual.',
  'Daí, os mongóis estenderam-se para oeste pela estepe eurasiática até ao Danúbio, para sul até à China e ao Tibete, e para sudoeste até ao Irão, ao Iraque e à Anatólia. Ficaram de fora a Europa Ocidental (a que chegaram só os exploradores), o Egito (travados em 1260), o Japão e o Sudeste Asiático em geral (ataques falhados) e a Índia (incursões limitadas).',
  { img: 'mon-estepe', leg: 'Estepe da Mongólia' },
  { h: 'Quando existiu' },
  'O império nasceu em 1206 e acabou, enquanto grande potência, em 1368, quando os Yuan foram expulsos da China. Os outros canatos duraram mais, alguns até ao século XV e XVI. A tabela resume as fases, com datas aproximadas.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Antes dos mongóis', 'séc. III a.C. – séc. XII d.C.', 'Impérios nómadas da estepe: Xiongnu, turcos, uigures, khitans; os mongóis são uma confederação de clãs entre muitas'],
    ['Ascensão de Temüjin', 'c. 1162 – 1206', 'Infância difícil, alianças e guerras contra tártaros, keraítas e naimanos; kurultai de 1206'],
    ['Gengis Cã', '1206 – 1227', 'Organização do exército e das leis; conquista da China do Norte (Jin), de Khwarezm e da Pérsia oriental; morte em 1227'],
    ['Ögedei e Güyük', '1229 – 1248', 'Queda dos Jin (1234); Karakorum; invasão da Rus’ e da Europa Central (1237–1242)'],
    ['Möngke', '1251 – 1259', 'Último grande cã a controlar todo o império; Bagdade (1258) e campanha na China do Sul'],
    ['Divisão e Pax Mongolica', '1260 – c. 1350', 'Kublai funda a dinastia Yuan (1271); Ilcanato, Horda de Ouro, Chagatai; comércio e viagens pela Eurásia'],
    ['Declínio e fim', 'c. 1335 – 1368 (e depois)', 'Colapso do Ilcanato (1335); peste, revoltas; queda dos Yuan (1368); Tamerlão; a Horda de Ouro dura até c. 1502']
  ] } },
  { h: 'Quem eram os mongóis?' },
  'Os **mongóis** eram, no início do século XIII, uma das várias confederações tribais da estepe, de língua mongólica, e talvez 1 a 2 milhões de pessoas no total (o número é uma estimativa). Viviam do pastoreio de cavalos, ovelhas, cabras, bovinos e camelos, em tendas de feltro (**gers** ou yurts), e deslocavam-se com as estações. Cada família pertencia a um **clã** e cada clã a uma **tribo**; as lealdades eram pessoais e as guerras, os roubos de gado e os raptos eram frequentes.',
  'Gengis Cã mudou isto: dissolveu em boa parte as lealdades tribais e organizou os guerreiros em unidades decimais ligadas ao cã; o nome «mongol» passou a designar todos os que o serviam, mesmo que fossem turcos, tártaros ou keraítas. Mais tarde a elite imperial incluiu chineses, persas, uigures, muçulmanos da Ásia Central e europeus.',
  { img: 'mon-gengis-retrato', leg: 'Retrato póstumo de Gengis Cã, álbum Yuan, século XIV, Museu do Palácio Nacional, Taipé.' },
  { h: 'Porque importam' },
  { lista: [
    '**Dimensão:** nunca antes um poder tão extenso foi controlado a partir de uma só região e unido por um sistema postal (o **yam**) e por leis comuns.',
    '**Guerra:** o exército mongol, baseado em cavalaria ligeira, disciplina, informação e logística, foi um dos mais eficazes da história pré-industrial.',
    '**Comércio e ideias:** a Pax Mongolica ligou a China, a Pérsia e a Europa; viajaram pelas suas rotas Marco Polo, missionários, comerciantes, técnicos, e circulou papel-moeda, pólvora, medicina e astronomia.',
    '**Política:** moldaram a China (Yuan), a Rússia (Horda de Ouro, depois Moscovo), a Pérsia (Ilcanato) e a Ásia Central; reorganizaram fronteiras que ainda hoje se notam.',
    '**Memória:** para uns, destruidores de cidades e de populações; para outros, fundadores de uma ordem eurasiática. O debate é mais rico do que as duas imagens.'
  ] },
  { caixa: 'Mongólia hoje', texto: 'A **Mongólia** é um país independente, com cerca de 3,4 milhões de habitantes e capital em **Ulã Bator**. Uma parte significativa da população ainda vive do pastoreio nómada. A **Mongólia Interior** pertence à China e tem mais mongóis étnicos do que o país independente. Gengis Cã, que foi proibido como símbolo no período soviético, é hoje o grande símbolo nacional.' }
];

const linha = [
  { img: 'mon-kurultai-ia', leg: 'Kurultai de 1206 junto ao rio Onon; aclamação de Temüjin. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 209 a.C.', t: 'Os Xiongnu', x: 'Modun (Mete), cã dos **Xiongnu**, unifica as tribos da estepe e cria o primeiro grande império nómada, que durante séculos ameaça a China Han. Se eram ou não antepassados dos turcos ou dos mongóis é debatido. A Grande Muralha foi unida em parte por causa deles.' },
    { d: '552 d.C.', t: 'Os Göktürks', x: 'Os **turcos** (Göktürks) criam um império que vai da Mongólia ao mar Negro e deixam as inscrições do Orkhon, os mais antigos textos em língua turca (séc. VIII). A estepe passa a ter forte influência turca; muitos súbditos de Gengis serão turcos.' },
    { d: 'séc. X – XII', t: 'Khitans, Jurchens e clãs mongóis', x: 'Os **khitans** (dinastia Liao, 916–1125) e os **jurchens** (dinastia Jin, 1115–1234) dominam o norte da China. Na estepe, mongóis, tártaros, keraítas, naimanos e merkits disputam pastagens e prestígio.' },
    { d: 'c. 1162', t: 'Nasce Temüjin', x: 'Nasce **Temüjin**, filho de Yesügei, chefe dos Borjigin, e de Hö’elün. O ano é debatido (1155, 1162 e 1167 são propostos); a data de 1162 é a mais usada. Segundo a *História Secreta*, nasceu com um coágulo de sangue na mão, um presságio de poder (lenda).' },
    { d: 'c. 1171', t: 'Morte de Yesügei', x: 'O pai é envenenado por tártaros. A família fica abandonada pelo clã e vive da caça e da pesca; Temüjin mata um meio-irmão numa disputa, segundo a *História Secreta*.' },
    { d: 'c. 1180–1190', t: 'Börte e as alianças', x: 'Casa com **Börte**; ela é raptada pelos merkits e recuperada com a ajuda de **Toghrul** (cã dos keraítas) e do seu amigo de infância **Jamukha**. O primeiro filho, Jochi, nasce pouco depois, e a questão da sua paternidade pesará na sucessão.' },
    { d: 'c. 1190 – 1203', t: 'Rivalidades', x: 'Temüjin é aclamado cã de uma facção mongol e derrotado e vence várias vezes. Rompe com Jamukha e, em 1203, com os keraítas de Toghrul, que derrota.' },
    { d: '1204', t: 'Naimanos e escrita', x: 'Derrota os **naimanos**. Entre os prisioneiros está um escriba uigur, Tata-tonga; o alfabeto uigur é adaptado ao mongol e torna-se a primeira escrita mongol.' },
    { d: '1206', t: 'O kurultai do Onon', x: 'Numa assembleia (**kurultai**) junto ao rio Onon, os chefes aclamam Temüjin com o título de **Chinggis Khan** (Gengis Cã). Nasce o «Grande Estado Mongol» (Yeke Mongghol Ulus).' },
    { d: '1211 – 1215', t: 'Guerra contra os Jin', x: 'Gengis ataca o império **Jin**, do norte da China. Em 1215 toma **Zhongdu** (perto da atual Pequim); os Jin perdem o norte, mas resistem no sul do Rio Amarelo até 1234.' },
    { d: '1218 – 1221', t: 'Khwarezm', x: 'Depois do massacre de uma caravana mongol em **Otrar** (1218), Gengis invade o império do xá **Maomé II de Khwarezm**. Caem Bucara e Samarcanda (1220), Urgench, Merv, Nishapur e Herat (1221). O príncipe **Jalal al-Din** resiste e escapa para o Indo.' },
    { d: '1223', t: 'Batalha do Kalka', x: 'Os generais **Jebe** e **Subutai**, em reconhecimento pelo Cáucaso, derrotam o exército dos príncipes da Rus’ e dos cumanos na batalha do rio Kalka (atual Ucrânia).' },
    { d: '1227', t: 'Morte de Gengis Cã', x: 'Morre em agosto, durante a campanha contra os tanguts (Xia Ocidental), que é destruída. A causa da morte é desconhecida (doença, queda de cavalo, ferimento: há várias versões); o local do túmulo, também.' },
    { d: '1229 – 1234', t: 'Ögedei', x: 'O filho **Ögedei** é eleito grande cã (1229). Com a aliança da dinastia Song, conquista de vez os **Jin** em 1234. Constrói muralhas e palácios em **Karakorum** (c. 1235).' },
    { d: '1237 – 1240', t: 'A Rus’', x: '**Batu**, neto de Gengis, e Subutai conquistam as cidades da Rus’: Riazã (1237), Vladimir (1238) e **Kiev** (dezembro de 1240). Moscovo, então pequena, é saqueada em 1238; Novgorod escapa e submete-se.' },
    { d: '1241', t: 'Legnica e Mohi', x: 'A 9 de abril os mongóis derrotam os polacos e alemães em **Legnica**; a 11 de abril, o rei **Bela IV** da Hungria em **Mohi**. Em dezembro de 1241 morre Ögedei; em 1242 os mongóis retiram-se da Hungria. A razão é debatida (sucessão, falta de pastagens, perdas).' },
    { d: '1246 – 1248', t: 'Güyük', x: 'Güyük, filho de Ögedei, torna-se cã depois da regência da mãe, **Töregene**. Reina pouco tempo e morre em 1248. Em 1246 o frade franciscano **Giovanni da Pian del Carpine** assiste à entronização.' },
    { d: '1251', t: 'Möngke', x: 'Os filhos de Tolui, com o apoio de **Sorghaghtani Beki**, e de Batu, levam **Möngke** ao poder. A linhagem de Ögedei é afastada.' },
    { d: '1253 – 1255', t: 'Rubruck', x: 'O frade flamengo **Guilherme de Rubruck** visita Karakorum e descreve o palácio, a «árvore de prata» e o debate entre religiões organizado por Möngke (1254).' },
    { d: '1258', t: 'Queda de Bagdade', x: 'O exército de **Hulagu** cerca Bagdade de 29 de janeiro a 10 de fevereiro de 1258. O califa abássida al-Mustasim é executado. Os mortos são calculados entre algumas dezenas de milhares e um milhão, conforme as fontes, e os valores mais altos são rejeitados por muitos historiadores.' },
    { d: '1259', t: 'Morte de Möngke', x: 'Möngke morre durante a campanha na China do Sul. Hulagu retira parte do exército da Síria; começa a guerra civil entre os seus irmãos.' },
    { d: '1260', t: 'Ain Jalut', x: 'A 3 de setembro, o exército **mameluco** do Egito, de **Qutuz** e **Baybars**, derrota uma força mongol de Kitbuqa em **Ain Jalut** (Galileia). É uma das primeiras grandes derrotas dos mongóis em campo aberto e ajuda a fixar a fronteira da Síria.' },
    { d: '1260 – 1264', t: 'Kublai contra Ariq Böke', x: 'Dois irmãos proclamam-se grandes cãs. **Kublai** vence **Ariq Böke** (1264). O império já não tem um único chefe reconhecido por todos.' },
    { d: '1271', t: 'Yuan', x: 'Kublai adota o nome chinês **Yuan** para a dinastia (1271) e a partir de 1272 reina em Dadu (Pequim). Em 1271 a família Polo, de Veneza, parte em direção à China (segundo *O Livro das Maravilhas*).' },
    { d: '1274 e 1281', t: 'Japão', x: 'Duas expedições navais contra o Japão falham. Em 1281 um tufão destrói parte da frota; os japoneses chamaram-lhe mais tarde **kamikaze**, «vento divino». Os historiadores apontam também falhas de organização e a resistência samurai.' },
    { d: '1279', t: 'Fim dos Song', x: 'Os Yuan conquistam a China do Sul na batalha naval de Yamen. É a primeira vez que toda a China fica sob domínio estrangeiro.' },
    { d: '1295', t: 'Ghazan e o islão', x: 'No Ilcanato, o cã **Ghazan** converte-se ao islão e transforma-o em religião de Estado. Na Horda de Ouro, as conversões de Berke (anos 1250–60) e de Uzbeg (1313) são passos semelhantes.' },
    { d: '1346 – 1347', t: 'Caffa e a peste negra', x: 'Segundo o relato de Gabriele de’ Mussi, o cerco mongol de **Caffa** (Crimeia) em 1346 terá levado a peste à cidade. A origem da peste na Ásia Central e a sua difusão pelas rotas comerciais é provável, mas o papel dos mongóis é uma hipótese e não um facto estabelecido.' },
    { d: '1368', t: 'Queda dos Yuan', x: 'O rebelde **Zhu Yuanzhang** funda a dinastia **Ming** e conquista Dadu. O último imperador Yuan, **Toghon Temür**, foge para a estepe; os «Yuan do Norte» continuam a reclamar o título.' },
    { d: '1380 – 1502', t: 'Fim dos canatos', x: 'Moscovo derrota os mongóis em Kulikovo (1380), mas a Horda de Ouro volta a atacá-la em 1382. **Tamerlão** destrói a sua capital em 1395. A Horda de Ouro dispersa-se (a Grande Horda acaba em 1502); o Canato da Crimeia dura até 1783.' }
  ] }
,
  { img: 'mon-legnica', leg: 'Batalha de Legnica (1241), Códice de Hedwig (1353)' },
  { img: 'mon-kamikaze', leg: 'Invasão mongol do Japão, rolo de Takezaki Suenaga' }
];

const mapa = [
  'O império teve uma capital que mudou de lugar: a de Gengis era um acampamento móvel, a de Ögedei foi **Karakorum**, a de Kublai foi **Dadu**, e os outros canatos tinham os seus centros próprios. Além das cidades mongóis, o império herdou cidades antigas e muito ricas, e destruiu muitas delas.',
  { img: 'mon-mapa-canatos', leg: 'Os quatro canatos cerca de 1300: Horda de Ouro, Chagatai, Yuan e Ilcanato; limites aproximados.' },
  { tabela: { cab: ['Cidade', 'Canato / época', 'Local hoje', 'Para que ficou conhecida'], linhas: [
    ['Karakorum', 'Império, 1235 – 1260', 'Mongólia (vale do Orkhon)', 'Primeira capital imperial; palácio, «árvore de prata»; destruída pelos Ming em 1388'],
    ['Dadu (Khanbaliq)', 'Yuan, 1272 – 1368', 'Pequim, China', 'Capital de Kublai; a «cidade do cã» de Marco Polo (Cambaluc)'],
    ['Shangdu (Xanadu)', 'Yuan, 1256 – 1369', 'Mongólia Interior, China', 'Residência de verão de Kublai; ruínas na lista da UNESCO (2012)'],
    ['Sarai', 'Horda de Ouro', 'Baixo Volga, perto de Astracã, Rússia', 'Capital da Horda de Ouro; mercado de peles e escravos; arruinada por Tamerlão em 1395'],
    ['Tabriz', 'Ilcanato', 'Irão', 'Cidade comercial e capital de Ghazan e Öljeitü'],
    ['Soltaniyeh', 'Ilcanato, c. 1306 – 1335', 'Irão', 'Capital de Öljeitü; mausoléu com uma das maiores cúpulas de tijolo do mundo'],
    ['Maragha', 'Ilcanato', 'Irão', 'Observatório de Nasir al-Din Tusi, fundado em 1259'],
    ['Almaliq', 'Chagatai', 'Xinjiang, China', 'Capital do canato de Chagatai; cidade de comerciantes e missões cristãs'],
    ['Samarcanda e Bucara', 'Khwarezm, depois Chagatai', 'Uzbequistão', 'Destruídas em 1220 e reconstruídas; Bucara foi arrasada em grande parte'],
    ['Hangzhou', 'Yuan (ex-Song)', 'Zhejiang, China', 'A «Quinsai» de Marco Polo, uma das maiores cidades do mundo; entregou-se em 1276']
  ] } },
  { h: 'Karakorum' },
  'Karakorum (do turco-mongol «rocha negra») foi fundada por Gengis em 1220 como acampamento, e Ögedei mandou-a cercar de muralhas, c. 1235. Tinha um palácio, quarteirões de artesãos chineses e persas, templos budistas, uma mesquita e uma igreja. No palácio de **Möngke** havia uma **árvore de prata**, obra do ourives parisiense **Guillaume Boucher**, que despejava vinho, kumis e hidromel (relato de Rubruck).',
  { img: 'mon-karakorum-ia', leg: 'Karakorum na década de 1250; reconstrução hipotética. Ilustração gerada por IA.' },
  'Foi destruída em 1388 pelos Ming. Hoje restam alicerces, uma tartaruga de pedra e os materiais reutilizados no mosteiro de **Erdene Zuu** (1585). Faz parte da Paisagem Cultural do Vale do Orkhon (UNESCO, 2004).',
  { img: 'mon-karakorum-tartaruga', leg: 'Tartaruga de pedra de Karakorum' },
  { h: 'Shangdu, a «Xanadu»' },
  'Construída a partir de c. 1252–1256 por Kublai, ainda príncipe (sob direção de Liu Bingzhong), foi a sua residência de verão. Marco Polo descreveu o palácio e os jardins; o poeta inglês **Samuel Taylor Coleridge** imaginou-a em «Kubla Khan» (1816) como lugar de sonho. Hoje são ruínas de terra e muralhas, na Mongólia Interior.',
  { img: 'mon-shangdu', leg: 'Ruínas de Shangdu (Xanadu), Mongólia Interior' },
  { h: 'Dadu e a China dos Yuan' },
  'Dadu, a «Grande Capital», foi planeada por Liu Bingzhong e por colaboradores como o engenheiro **Yeheidie’er**, com obras iniciadas em c. 1264–1267 (as fontes variam). Era uma cidade em quadrícula, com palácios, observatórios, canais e armazéns de cereais. Foi a base de Pequim, que a dinastia Ming reconstruiu no mesmo local, com limites em parte diferentes.',
  { h: 'Sarai e a Horda de Ouro' },
  'A **Horda de Ouro** (nome posterior; os contemporâneos falavam do Ulus de Jochi) cobria a estepe do Cazaquistão ao Danúbio e dominou os príncipes russos durante cerca de dois séculos e meio. **Batu** fundou **Sarai** no baixo Volga (junto ao Akhtuba); uma tradição posterior atribui a Berke uma segunda cidade, Sarai Berke, mas os historiadores discutem se eram sítios distintos. Era uma cidade de tendas e de edifícios, de mercados, igrejas e mesquitas.',
  { img: 'mon-sarai-ia', leg: 'Sarai, capital da Horda de Ouro, século XIV; reconstrução hipotética. Ilustração gerada por IA.' },
  { h: 'Pérsia e o Ilcanato' },
  'O **Ilcanato** («canato subordinado», ao grande cã) foi fundado por Hulagu. Os seus cãs encomendaram observatórios, bibliotecas e mesquitas; **Ghazan** (1295–1304) fez reformas fiscais e **Öljeitü** mandou construir **Soltaniyeh**. O historiador **Rashid al-Din** escreveu para eles a *Jami al-tawarikh*, a primeira «história universal».',
  { img: 'mon-soltaniyeh', leg: 'Mausoléu de Öljeitü, Soltaniyeh, Irão' },
  { h: 'As rotas' },
  'O que ligava tudo era a rede de estradas e de postos. O comerciante que levava um **paiza** (tabuleta de salvo-conduto) podia viajar com proteção e alojamento. Os caminhos principais eram a **estepe**, de Karakorum ao mar Negro, as **rotas da seda** pelos oásis do Turquestão (Almaliq, Samarcanda, Tabriz) e, para os Yuan, o **mar**: o porto de Quanzhou, que Marco Polo e Ibn Battuta descrevem entre os maiores do mundo.',
  { img: 'mon-mapa-marco-polo', leg: 'Mapa das rotas de Marco Polo' },
  { img: 'mon-caravana-ia', leg: 'Caravana na Rota da Seda, século XIII. Ilustração gerada por IA.' },
  { cit: 'Uma donzela com uma peça de ouro na cabeça poderia viajar sem medo por todo o império.', fonte: 'Provérbio atribuído à Pax Mongolica; é tradição posterior, não uma fonte da época.' }
];

const sociedade = [
  { h: '1. Organização política' },
  'O poder pertencia ao **cã** da família de Gengis (os «Altan Urugh», a «família de ouro»). Os grandes assuntos (eleição do cã, guerras) decidiam-se num **kurultai**, assembleia dos príncipes e chefes militares. O império era visto como património da família: cada filho e neto recebia um **ulus** (apanágio) com pastagens e súbditos, o que explica a divisão posterior.',
  { img: 'mon-corte-yuan-ia', leg: 'Corte de Kublai Cã em Dadu, cerca de 1280; retrato imaginado. Ilustração gerada por IA.' },
  'A administração juntava mongóis e estrangeiros: chineses, uigures, persas, khitans. Cada região tinha governadores (**darughachi**) e recenseamentos; **Möngke** fez recensear o império para cobrar impostos e fornecer soldados. A guarda pessoal do cã, a **keshig**, era uma escola de comando.',
  { caixa: 'A Yassa (Grande Yasa)', texto: 'A «**Yassa**» ou «Jasagh» é o conjunto de ordens e leis atribuídas a Gengis Cã. Não chegou até nós como código escrito; o que sabemos vem de textos posteriores (persas, árabes), pelo que os historiadores discutem o que era realmente dele. Entre as regras atribuídas: proibição de roubo de gado e de rapto de mulheres, obrigação de ajuda mútua, respeito por todas as religiões e proteção dos mensageiros e embaixadores. O rigor dos castigos, incluindo a morte, é atestado nas fontes.' },
  { h: '2. O exército e as táticas' },
  'O exército mongol era sobretudo de **cavalaria ligeira**. Cada homem adulto era um possível guerreiro, e o exército de Gengis tinha cerca de 100 000 a 130 000 homens (estimativa). Estava organizado em unidades **decimais**: **arban** (10), **jaghun** (100), **mingghan** (1 000) e **tumen** (10 000), com chefes escolhidos por mérito. A disciplina era férrea, e cada soldado levava vários cavalos de reserva.',
  { img: 'mon-arco', leg: 'Arco atribuído ao exército mongol das invasões do Japão, conservado no santuário Ōyamazumi, Japão.' },
  { lista: [
    '**Arco compósito:** de madeira, corno e tendão, curto e potente, com alcance eficaz de algumas centenas de metros. O arqueiro disparava a galope; diz-se que o fazia no instante em que o cavalo tinha as quatro patas no ar.',
    '**Mobilidade:** cada guerreiro tinha 3 a 5 cavalos; os exércitos cobriam, segundo estimativas, 80 a 100 km por dia. Comiam e bebiam sem parar (carne seca, leite coalhado, e, em apuros, sangue de cavalo).',
    '**Retirada fingida:** fingiam fugir para atrair o inimigo para uma emboscada. Não era invenção deles, mas usavam-na com grande eficácia, como em Kalka e Mohi.',
    '**Caça em círculo (nerge):** o método de caçar cercando a presa servia de treino e de modelo para cercar exércitos.',
    '**Informação:** espiões, mercadores e prisioneiros forneciam notícias; antes de atacar já conheciam o território, as rivalidades e as fraquezas.',
    '**Terror:** o medo era uma arma. Uma cidade que se rendia era geralmente poupada (e pagava tributo); a que resistia arriscava o massacre.'
  ] },
  { img: 'mon-arqueiro-ia', leg: 'Arqueiro mongol a cavalo, século XIII. Ilustração gerada por IA.' },
  { img: 'mon-caca-nerge-ia', leg: 'Nerge, grande caça em círculo; interpretação histórica. Ilustração gerada por IA.' },
  'Os mongóis não conheciam, de início, a guerra de cerco. Aprenderam rapidamente com **engenheiros chineses, persas e muçulmanos**, que lhes forneceram catapultas, trabucos de contrapeso, escadas, minas e explosivos de pólvora. Em Bagdade, em 1258, eram dezenas de engenhos.',
  { img: 'mon-cerco-ia', leg: 'Cerco mongol, finais do século XIII; cena conjetural. Ilustração gerada por IA.' },
  { h: '3. O yam, o sistema postal' },
  'O **yam** era uma rede de postos de muda de cavalos, com alojamento e comida, a intervalos de cerca de um dia de viagem (Marco Polo fala de 40 km). Os mensageiros, que usavam um **paiza**, podiam percorrer mais de 200 km por dia em casos urgentes. Os súbditos eram obrigados a manter os postos, o que era um pesado encargo. Estava ao serviço do governo, mas também dos mercadores autorizados e dos embaixadores.',
  { img: 'mon-paiza', leg: 'Paiza de Abu Sa’id Bahadur Khan, Ilcanato; reprodução da peça em publicação de Abdollah Quchani.' },
  { img: 'mon-yam-ia', leg: 'Estação de muda de cavalos do sistema yam. Ilustração gerada por IA.' },
  { h: '4. Classes sociais e a mulher' },
  'A sociedade tinha a família de Gengis no topo; a seguir, os chefes militares (**noyan**) e seus companheiros, depois os pastores livres, os artesãos e os camponeses das terras conquistadas; por fim, os servos e escravos. Na China dos Yuan existia uma hierarquia oficial: mongóis, depois «povos de olhos coloridos» (**semu**: uigures, persas, turcos), depois chineses do norte, e por fim os chineses do sul.',
  { h: 'A mulher' },
  'As mulheres mongóis tinham mais autonomia do que as de muitas sociedades vizinhas: tratavam do gado, do acampamento e das carroças enquanto os homens combatiam, e podiam possuir bens e aconselhar o cã. As **esposas dos cãs** (khatun) tinham o seu próprio **ordo** (corte). Algumas governaram como regentes: **Töregene**, viúva de Ögedei, regeu o império de c. 1242 a 1246. Gengis sempre ouviu a mãe **Hö’elün** e a mulher **Börte**.',
  { img: 'mon-acampamento-ia', leg: 'Acampamento nómada mongol, século XIII. Ilustração gerada por IA.' },
  { h: '5. Religião' },
  'A religião tradicional era o **xamanismo** e o culto de **Tengri**, o «Céu Eterno» (Möngke Tengri, «Céu Eterno Azul»), ao lado de espíritos da terra, da água e das montanhas, e dos antepassados. Os **xamãs** (böge) faziam curas, adivinhação e rituais; o maior de todos, **Teb Tengri**, tentou rivalizar com Gengis e foi morto, com o consentimento do cã (relato da *História Secreta*).',
  { img: 'mon-xama', leg: 'Mulher xamã com tambor durante um rito em Ulã Bator, 2018; fotografia contemporânea.' },
  { tabela: { cab: ['Crença', 'Quem a seguia', 'Notas'], linhas: [
    ['Tengri e xamanismo', 'Maioria dos mongóis; turcos da estepe', 'Culto do Céu, da Terra, das montanhas e dos antepassados; sem templos'],
    ['Cristianismo nestoriano', 'Keraítas, naimanos, uigures; mulheres da elite como Sorghaghtani Beki', 'Igreja do Oriente; muitos clérigos isentos de impostos'],
    ['Budismo', 'Tibetanos, chineses, mongóis (sobretudo depois de Kublai)', 'Kublai protegeu o lama Phags-pa; o budismo tibetano vai-se tornar a religião principal na Mongólia no século XVI'],
    ['Islão', 'Pérsia, Ásia Central, Horda de Ouro, mongóis convertidos', 'Ghazan (1295), Berke, Uzbeg'],
    ['Taoísmo e confucionismo', 'China', 'O taoísta Qiu Chuji foi chamado por Gengis em 1222; a viagem foi descrita no *Changchun zhenren xiyouji*']
  ] } },
  { h: 'Tolerância religiosa' },
  'Os mongóis não impunham uma religião; os cãs ouviam todos, isentavam de impostos os clérigos e interessavam-se por debates. Em **1254**, o grande cã **Möngke** organizou em Karakorum um debate entre cristãos, muçulmanos e budistas, que o frade Guilherme de Rubruck descreveu. Esta tolerância tinha interesse político: manter a paz, ter os religiosos como aliados e rezar pela família imperial. Não impediu perseguições quando uma religião foi vista como rebelde. E, mais tarde, os cãs converteram-se ao islão ou ao budismo, conforme a região.',
  { h: '6. Economia e Pax Mongolica' },
  'A economia da estepe era de **pastoreio**: cavalos, ovelhas, cabras, vacas, camelos; o excedente (lã, peles, feltro, laticínios) trocava-se com os vizinhos agrícolas. As conquistas trouxeram **tributos** e artesãos deportados, e uma imensa rede comercial.',
  { lista: [
    '**Ortaq:** companhias de mercadores, muitas vezes muçulmanos e uigures, financiadas pela família imperial, que cobravam um lucro e partilhavam-no.',
    '**Papel-moeda:** Kublai emitiu notas (*chao*) em 1260, com garantia em prata e depois sem; houve inflação. Marco Polo ficou espantado com a ideia. Os Ilcãs de Tabriz tentaram imitá-la em 1294, com insucesso.',
    '**Segurança das rotas:** o yam, os postos de guarda e as leis mantiveram os caminhos relativamente seguros durante algumas décadas. Os impostos às mercadorias eram pesados, mas previsíveis.',
    '**Circulação de pessoas:** artesãos, médicos, astrónomos e missionários foram deslocados entre a China, a Pérsia e a Europa.'
  ] },
  { img: 'mon-papel-moeda', leg: 'Nota Yuan Zhiyuan de dois guan (1287), com matriz de impressão em madeira, Museu da Moeda de Tóquio; não é uma nota Zhongtong.' },
  { h: '7. Escrita e a História Secreta' },
  'Os mongóis não tinham escrita até 1204. Adaptaram o alfabeto **uigur**, escrito na vertical, que ainda se usa na Mongólia Interior. Em 1269 Kublai mandou o monge tibetano **Phags-pa** criar uma escrita nova, o **alfabeto Phags-pa**, para escrever todas as línguas do império; teve pouco sucesso. As cartas dos cãs eram escritas em mongol, persa, chinês e latim.',
  { img: 'mon-escrita-phagspa', leg: 'Edito de Yesün Temür, Dadu, 1328, em mongol médio escrito em Phags-pa.' },
  { caixa: 'A História Secreta dos Mongóis', texto: 'A **História Secreta dos Mongóis** (*Mongghol-un niucha tobchiyan*) é a mais antiga obra literária em mongol e a principal fonte sobre a juventude de Gengis. Foi escrita por um autor desconhecido em mongol, provavelmente para a família imperial, mas a data é debatida (propõem-se 1228, 1229, 1240, 1252 e 1264). O texto mongol original perdeu-se; chegou-nos numa versão transcrita em carateres chineses (início da dinastia Ming) e em partes numa crónica mongol do século XVII. Mistura factos, poesia e lenda, por isso deve ser lido com crítica.' },
  { img: 'mon-historia-secreta', leg: 'Página de uma reedição chinesa de 1908 da História Secreta dos Mongóis, com transcrição fonética e glosas; não é o manuscrito original.' },
  { h: '8. Casa nómada: o ger' },
  'A casa tradicional é o **ger** (em turco-persa, yurt): uma tenda circular com uma armação de **paredes de treliça** (khana) e **varas de teto** (uni) que se apoiam num aro central (**toono**), coberta de feltro de lã e atada com cordas. Monta-se e desmonta-se em cerca de uma hora e carrega-se em camelos ou carroças. A porta fica a sul, para o sol. O interior segue regras: o lado da honra é o do fundo (norte), o altar fica no fundo; o fogão ao centro, com o fumo a sair pelo aro; os homens à esquerda e as mulheres à direita (tradição).',
  { img: 'mon-ger', leg: 'Ger tradicional na Mongólia; fotografia contemporânea' },
  { img: 'mon-ger-interior-ia', leg: 'Interior de um ger mongol, século XIII; reconstrução cautelosa. Ilustração gerada por IA.' },
  { h: '9. Alimentação' },
  'A dieta era de **carne** (ovelha, cabra, cavalo, marmota) e **laticínios** (leite, queijo seco, coalhada, manteiga). O **kumis** (ou airag) é leite de égua fermentado, ligeiramente alcoólico (2 a 3%), a bebida de festa e de hospitalidade; os grãos e vegetais vinham dos vizinhos agrícolas. As carnes eram cozidas, assadas ou secas em tiras. Os guerreiros levavam queijo seco e carne seca, e bebiam leite de égua em viagem.',
  { img: 'mon-kumis', leg: 'Kumis (airag), leite de égua fermentado' },
  { h: '10. Vestuário' },
  'A peça principal era o **deel**, um casaco comprido de abas cruzadas, atado com um cinto de seda ou de couro, de lã, seda ou peles, adaptado ao frio. Usavam botas de feltro e couro, de ponta virada, e chapéus de feltro ou de pele. Os guerreiros usavam armadura de couro endurecido ou de placas pequenas (lamelar), e capacete de metal.',
  { h: '11. Música, jogos e festas' },
  'A música mongol inclui o **canto difónico** (khöömii), em que o cantor produz duas notas ao mesmo tempo, e o **morin khuur**, o violino de cabeça de cavalo, de duas cordas. As festas faziam-se em torno dos «três jogos de homens»: **luta**, **tiro com arco** e **corrida de cavalos**, que ainda hoje se disputam no festival **Naadam** (inscrito na lista da UNESCO em 2010).',
  { img: 'mon-naadam', leg: 'Luta mongol no Naadam; fotografia contemporânea' },
  { h: '12. Ciência' },
  'Os mongóis financiaram o saber dos povos conquistados. Em **Maragha**, **Nasir al-Din Tusi** dirigiu um observatório (1259) e produziu as tabelas astronómicas (*Zij-i Ilkhani*). Na China, Kublai chamou o astrónomo **Guo Shoujing**, que criou um calendário muito preciso (1280). **Rashid al-Din** reuniu uma enciclopédia histórica e médica, com ajuda de médicos chineses. O contacto entre a medicina chinesa e persa foi um dos resultados da Pax Mongolica.',
  { h: '13. Tecnologia' },
  { lista: [
    '**Armas de pólvora:** bombas e lanças de fogo chinesas foram usadas pelos Yuan, por exemplo no Japão; a difusão da pólvora para Oeste é provavelmente ligada ao tempo mongol, mas os mecanismos são debatidos.',
    '**Engenhos de cerco:** o trabuco de contrapeso chegou ao Médio Oriente e à Europa por esta altura.',
    '**Papel-moeda e imprensa:** os Ilcãs de Tabriz tentaram, em 1294, uma nota ao estilo chinês; a imprensa de blocos de madeira chegou à Pérsia.',
    '**Cartografia e viagens:** mapas e relatos, como os de Rashid al-Din e de Marco Polo, mudaram a ideia que a Europa tinha da Ásia.'
  ] },
  { h: '14. Guerra, massacres e rigor' },
  'A guerra mongol foi, para muitas cidades, catastrófica. Em **Merv** (1221), **Nishapur**, **Herat**, **Kiev** (1240), **Bagdade** (1258) e muitas outras, os habitantes foram mortos em grande número, os canais destruídos e as bibliotecas queimadas. Mas os números são **debatidos**: as fontes da época (persas, árabes, chinesas, russas) exageram muito (por exemplo, 1,3 milhões de mortos em Merv, segundo o cronista Juvaini; os historiadores modernos aceitam muito menos). Os cálculos modernos do total de mortos nas conquistas mongóis vão de **dezenas de milhões** (por vezes citados 40 milhões) a valores mais baixos; a estimativa é difícil porque os recenseamentos mudaram, e porque a fome e a peste também mataram.',
  'Também há contraexemplos: cidades que se renderam foram poupadas, como Hangzhou, em 1276 (já Zhongdu, a atual Pequim, rendeu-se em 1215 e foi mesmo assim saqueada). O que parece certo é que o terror era uma política deliberada, divulgada para que outras cidades se rendessem. Esta é uma das razões pelas quais a imagem dos mongóis varia entre «flagelo de Deus» (como os viam os europeus e muçulmanos) e «unificadores da Eurásia» (como alguns os veem hoje).',
  { caixa: 'Genética e memória', texto: 'Um estudo genético de 2003 (Zerjal e colegas) encontrou uma linhagem do cromossoma Y muito comum na Ásia (cerca de 8% dos homens da região estudada), cuja origem remonta ao tempo mongol. Sugeriu-se que viria de Gengis Cã ou de parentes masculinos próximos. É uma hipótese estatística, não uma prova; não identifica nenhum indivíduo.' }
];

const personalidades = [
  { h: 'Gengis Cã (Temüjin, c. 1162 – 1227)' },
  'Fundador do império. Nasceu numa família de chefes menores, perdeu o pai criança e subiu pela inteligência política e a crueldade: eliminou rivais, juntou aliados, dissolveu as lealdades de clã. Foi um estratega, um organizador e um líder carismático e brutal. Casou com **Börte** e teve quatro filhos principais (Jochi, Chagatai, Ögedei e Tolui). Morreu em 1227 e o local do seu túmulo é desconhecido; a tradição diz que foi enterrado em segredo, perto do Burkhan Khaldun.',
  { h: 'Hö’elün e Börte' },
  '**Hö’elün**, a mãe, criou sozinha os filhos depois da morte de Yesügei e é elogiada pela *História Secreta* pela sua energia. **Börte**, a mulher de Gengis, foi raptada e libertada, e tornou-se a sua esposa principal; os seus filhos foram os herdeiros do império.',
  { h: 'Jamukha (c. 1160 – 1206)' },
  'Amigo de infância («anda», irmão de sangue) e depois rival de Temüjin. Foi aclamado «Gur-Khan» pelos seus seguidores em 1201 e derrotado em 1204–1206. Foi entregue a Gengis por companheiros seus e, segundo a *História Secreta*, pediu para morrer sem derramamento de sangue.',
  { h: 'Subutai (1175 – 1248)' },
  'O maior general mongol, de origem humilde. Dirigiu campanhas na China, no Cáucaso, na Rus’ e na Europa central, e planeou Mohi (1241). Com Jebe, fez em 1221–1223 uma das grandes expedições de reconhecimento da história militar. Gengis chamou-lhe um dos seus «cães» de guerra.',
  { h: 'Ögedei (1186 – 1241)' },
  'Terceiro filho de Gengis, eleito grande cã em 1229. Completou a conquista dos Jin, criou Karakorum e o sistema do yam, e mandou invadir a Europa. Era conhecido pela sua generosidade e pelo gosto da bebida, de que, segundo as fontes, morreu. Foi sucedido pela viúva **Töregene**, regente até 1246.',
  { img: 'mon-ogodei', leg: 'Retrato póstumo de Ögedei, álbum Yuan, século XIV, Museu do Palácio Nacional, Taipé.' },
  { h: 'Sorghaghtani Beki (anos 1190 – 1252)' },
  'Princesa dos **keraítas**, cristã nestoriana, casada com **Tolui**, o filho mais novo de Gengis. Depois da morte do marido (1232), recusou casar de novo, mesmo por proposta da família do cã, e criou os quatro filhos, **Möngke, Kublai, Hulagu e Ariq Böke**, dando-lhes uma educação ampla, incluindo o contacto com chineses e muçulmanos. Sustentou e protegeu as religiões (cristãos, muçulmanos, budistas e taoístas) e foi elogiada pelos cronistas Rashid al-Din e Juvaini. A sua política levou os seus filhos ao poder em 1251. Quando morreu, em 1252, o seu filho Möngke era já grande cã.',
  { img: 'mon-mulheres-ia', leg: 'Mulheres mongóis a gerir um acampamento, século XIII. Ilustração gerada por IA.' },
  { h: 'Batu (c. 1205 – 1255)' },
  'Neto de Gengis, filho de Jochi, comandou a invasão da Rus’ e da Europa Central e fundou a **Horda de Ouro** (ou, mais exatamente, o ulus de Jochi). Foi o grande eleitor de Möngke e manteve uma autonomia efetiva do seu canato.',
  { h: 'Möngke (1209 – 1259)' },
  'Filho de Tolui e Sorghaghtani, grande cã desde 1251. Reorganizou as finanças e fez recensear o império, apoiou as ciências e as religiões, e promoveu as campanhas contra o Irão e a China do Sul. Morreu durante o cerco de Diaoyu, na China (1259), por doença ou ferimento; a sua morte iniciou a divisão do império.',
  { h: 'Kublai Cã (1215 – 1294)' },
  'Neto de Gengis e imperador Yuan desde 1271. Venceu o irmão Ariq Böke, conquistou a China do Sul (1279), tentou invadir o Japão, a Birmânia, o Vietname e Java, com sucesso pequeno, e fez de Dadu a capital. Foi um administrador hábil, protetor de artes e ciências, e de várias religiões. Marco Polo elogiou-o muito. Acusam-no também de ter «sinizado» e dividido o império.',
  { img: 'mon-kublai', leg: 'Retrato póstumo de Kublai Cã, atribuído a Anige (Araniko), cerca de 1294; álbum Yuan, Museu do Palácio Nacional, Taipé.' },
  { h: 'Hulagu (c. 1217 – 1265)' },
  'Irmão de Möngke e Kublai, fundador do **Ilcanato**. Conquistou os Assassinos (ismailitas) do Irão em 1256 e Bagdade em 1258, e destruiu a dinastia abássida. A sua mulher **Doquz Khatun**, cristã, protegeu as comunidades cristãs. Não esteve em Ain Jalut (1260), onde o seu general Kitbuqa foi derrotado, e passou o resto da vida em guerra com a Horda de Ouro.',
  { img: 'mon-hulagu', leg: 'Hulagu e Doquz Khatun, miniatura de Rashid al-Din' },
  { h: 'Marco Polo (1254 – 1324) e Ibn Battuta (1304 – 1368/69): uma nota' },
  '**Marco Polo**, mercador veneziano, terá ido à China entre 1271 e 1295, servido Kublai e ditado a sua viagem a Rustichello da Pisa (*O Livro das Maravilhas*, ou *Il Milione*). Alguns historiadores duvidam que tenha chegado à China (faltam nomes na documentação chinesa); a maioria aceita o essencial do relato, com exageros. **Ibn Battuta**, viajante marroquino, visitou a Horda de Ouro (c. 1332) e diz ter chegado à China, c. 1345; os historiadores aceitam grande parte do que descreveu da Ásia Central e da Índia, mas põem dúvidas ao trecho chinês. O que ambos têm em comum: viajaram numa Eurásia que a Pax Mongolica tornara mais acessível.',
  { img: 'mon-marco-polo', leg: 'Marco Polo parte de Constantinopla, frontispício do Livre des merveilles, BnF Français 2810, fol. 1r, século XV; identificação da página do Commons.' },
  { img: 'mon-ibn-battuta', leg: 'Ibn Battuta, ilustração imaginada do século XIX em Découverte de la Terre, de Jules Verne.' },
  { h: 'Tamerlão (Timur, 1336 – 1405): uma nota' },
  'Chefe turco-mongol da Ásia Central, nascido em Kesh (Uzbequistão). Fez-se senhor de Samarcanda e criou um império vasto, mas não se declarou cã: preferiu governar em nome de um cã fantoche, de linhagem de Gengis, e casou numa família dessa linhagem (chamava-se «Gurkani», genro). Derrotou a Horda de Ouro (1391 e 1395), saqueou Deli (1398) e derrotou o sultão otomano Bayezid em Ancara (1402). Reivindicou ser o herdeiro mongol, mas a sua política e a sua crueldade são próprias.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**O mapa político:** a Rússia moderna nasceu do domínio sobre a Horda de Ouro (Moscovo foi coletor de tributos dos cãs e depois herdeira); a China atual herdou a extensão territorial dos Yuan; e a Mongólia é o seu centro simbólico.',
    '**Dinastias:** os **Mogóis** da Índia (de Babur, descendente de Tamerlão e, por via materna, de Gengis) levaram o nome «mongol» para a Índia (1526–1857).',
    '**Rotas e comércio:** a Pax Mongolica abriu a Eurásia a comerciantes e missionários, e criou o contexto em que Marco Polo escreveu e a Europa descobriu o Oriente.',
    '**Ideias de administração:** papel-moeda, yam, recenseamentos, tolerância religiosa como política.',
    '**Peste negra:** os mesmos caminhos terão levado a peste da Ásia à Europa, a partir de c. 1346 (hipótese hoje bastante apoiada pela genética, mas o papel exato dos mongóis é incerto).'
  ] },
  { h: 'A queda e a peste' },
  'Entre 1330 e 1370 os canatos desfizeram-se: o Ilcanato desapareceu depois de 1335, a peste, as fomes e as rebeliões abalaram a China, e os Ming expulsaram os Yuan em 1368. Em 1347 a peste negra chega à Europa; antes (c. 1338–1339) há sepulturas com mortes de peste junto ao lago Issyk-Kul, na atual Quirguistão, e um estudo de ADN antigo (2022) sugere a origem da estirpe nesta região. O cerco de Caffa (1346) foi relatado por Gabriele de’ Mussi, que diz que os mongóis atiraram cadáveres para a cidade: o relato é de segunda mão e, mesmo que seja verdade, a peste teria chegado a Caffa pelas rotas comerciais de qualquer modo. É um capítulo debatido.',
  { img: 'mon-bagdad-1258', leg: 'Cerco de Bagdade (1258), miniatura do Jami al-Tawarikh de Rashid al-Din, cerca de 1430–1434, BnF Supplément persan 1113.' },
  { h: 'Tamerlão e o fim' },
  'Os últimos descendentes de Gengis perderam o poder aos poucos. Tamerlão, como se disse, destruiu a Horda de Ouro entre 1391 e 1395, e os seus filhos (os timúridas) dominaram a Ásia Central e a Pérsia durante mais um século; os Yuan do Norte resistiram na estepe até ao século XVII. O último canato descendente de Gengis, o da Crimeia, foi anexado pela Rússia em 1783.',
  { h: 'A Mongólia hoje' },
  'A **Mongólia** esteve sob domínio dos Qing da China até 1911, declarou a independência, tornou-se república socialista, aliada da URSS, em 1924, e adotou a democracia em **1990**. É um dos países com menor densidade populacional do mundo. A economia depende das minas de cobre, carvão e ouro e do pastoreio. A **Mongólia Interior** (China) tem mais de 4 milhões de mongóis étnicos, e há comunidades na Rússia (Buriácia, Calmúquia).',
  { img: 'mon-ulaanbaatar', leg: 'Praça Sukhbaatar, Ulã Bator' },
  { img: 'mon-estatua-gengis', leg: 'Estátua equestre de Gengis Cã, Tsonjin Boldog' },
  { h: 'Onde visitar' },
  { caixa: 'Para visitar', texto: 'Na **Mongólia**: o Museu Nacional de História da Mongólia e o Museu Gengis Cã, em **Ulã Bator**; o **Vale do Orkhon** com o mosteiro de **Erdene Zuu**, onde estava Karakorum; o complexo da estátua de Gengis; o **Parque Nacional de Gorkhi-Terelj**. Na China: as ruínas de **Shangdu**, perto de Duolun, e o Museu de Hohhot. No Irão: **Soltaniyeh**. Em Taipé, o **Museu do Palácio Nacional** tem os retratos dos grandes cãs. Convém confirmar horários e acessos antes de ir.' },
  { img: 'mon-erdene-zuu', leg: 'Mosteiro de Erdene Zuu' }
];

const quiz = [
  { p: 'Em que ano Temüjin foi proclamado Gengis Cã?', op: ['1162', '1206', '1227', '1260'], certa: 1, exp: 'No kurultai de 1206, junto ao rio Onon.' },
  { p: 'Qual é a unidade mongol de 10 000 homens?', op: ['Arban', 'Jaghun', 'Mingghan', 'Tumen'], certa: 3, exp: 'Arban (10), jaghun (100), mingghan (1 000) e tumen (10 000).' },
  { p: 'Como se chamava o sistema postal mongol?', op: ['Yam', 'Paiza', 'Ortaq', 'Keshig'], certa: 0, exp: 'O yam era a rede de postos de muda de cavalos.' },
  { p: 'Que acontecimento levou Gengis a atacar o império de Khwarezm?', op: ['A morte do pai', 'O massacre de uma caravana mongol em Otrar', 'A queda de Pequim', 'O desastre de Kalka'], certa: 1, exp: 'A caravana foi morta em Otrar, em 1218, e o xá recusou-se a dar satisfações.' },
  { p: 'Em que batalha de 1241 os mongóis derrotaram o rei Bela IV da Hungria?', op: ['Kalka', 'Mohi', 'Ain Jalut', 'Ancara'], certa: 1, exp: 'Mohi, a 11 de abril de 1241.' },
  { p: 'Quem comandou a conquista de Bagdade em 1258?', op: ['Batu', 'Kublai', 'Hulagu', 'Subutai'], certa: 2, exp: 'Hulagu, irmão de Möngke e de Kublai, fundador do Ilcanato.' },
  { p: 'Onde e quando os mamelucos derrotaram uma força mongol, em 1260?', op: ['Ain Jalut, 1260', 'Legnica, 1241', 'Yamen, 1279', 'Kulikovo, 1380'], certa: 0, exp: 'Em Ain Jalut, na Galileia, a 3 de setembro de 1260.' },
  { p: 'Qual dos quatro canatos foi a dinastia que governou a China?', op: ['Ilcanato', 'Horda de Ouro', 'Yuan', 'Chagatai'], certa: 2, exp: 'Kublai Cã fundou a dinastia Yuan em 1271.' },
  { p: 'Qual era a capital de verão de Kublai, a «Xanadu» de Coleridge?', op: ['Karakorum', 'Shangdu', 'Sarai', 'Soltaniyeh'], certa: 1, exp: 'Shangdu, na Mongólia Interior.' },
  { p: 'Quem foi a mãe de Möngke, Kublai e Hulagu?', op: ['Börte', 'Hö’elün', 'Töregene', 'Sorghaghtani Beki'], certa: 3, exp: 'Sorghaghtani Beki, princesa keraíta cristã, mulher de Tolui.' },
  { p: 'Que nome tem o «vento divino» que ajudou a salvar o Japão da invasão mongol?', op: ['Kamikaze', 'Shogun', 'Samurai', 'Ronin'], certa: 0, exp: 'Tufões destruíram parte das frotas em 1274 e, sobretudo, em 1281.' },
  { p: 'O que é a «História Secreta dos Mongóis»?', op: ['Um tratado militar chinês', 'Uma crónica mongola do século XIII sobre Gengis Cã', 'Um relato de Marco Polo', 'Uma lei de Kublai'], certa: 1, exp: 'É a mais antiga obra em mongol, de autor desconhecido; a sua data é debatida.' },
  { p: 'Que deus era venerado pelos mongóis tradicionais?', op: ['Marduk', 'Tengri, o Céu Eterno', 'Amon', 'Odin'], certa: 1, exp: 'Tengri, no âmbito do xamanismo mongol.' },
  { p: 'Qual é a bebida tradicional mongol, de leite de égua fermentado?', op: ['Chá preto', 'Kumis (airag)', 'Vodca', 'Sake'], certa: 1, exp: 'O kumis é ligeiramente alcoólico, bebido em festas e no dia a dia.' },
  { p: 'Quando caiu a dinastia Yuan na China?', op: ['1260', '1279', '1368', '1502'], certa: 2, exp: 'Em 1368, quando os Ming tomaram Dadu e Toghon Temür fugiu para a estepe.' }
];

export default {
  id: 'mongol',
  cor: '#4a6a8a',
  emblema: '../assets/img/mongol.png',
  nome:    { pt: 'Império Mongol', en: 'Mongol Empire' },
  periodo: { pt: '1206 – 1368', en: 'AD 1206 – 1368' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
