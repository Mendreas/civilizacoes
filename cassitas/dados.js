// CASSITAS — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas aproximadas, na «cronologia média». a.C. = antes de Cristo. A documentação cassita é pobre e muito debatida: onde há dúvida, o texto di-lo.
// Imagens: cada {img:'id'} procura o ficheiro  cassitas/img/id.jpg  (ver IMAGENS_CASSITAS.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'Os **Cassitas** (em acádio *Kaššû*) eram um povo de língua própria, vindo provavelmente dos montes Zagros, que governou a **Babilónia durante cerca de 440 anos** (c. 1595 – 1155 a.C.), a dinastia mais longa que a cidade conheceu. Chamavam ao seu reino **Karduniash**. Num mundo de reinos que caíam e se refaziam em poucas gerações, a Babilónia cassita foi um Estado estável, uma das «grandes potências» do Bronze Final, tratada de «irmã» pelos faraós do Egito e pelos reis hititas.',
    'É uma civilização pouco conhecida e por isso mesmo fascinante: os reis cassitas **adotaram a língua, a religião e a escrita babilónicas** e quase nada escreveram na sua própria língua. Ficaram os seus tijolos, os seus **kudurrus** (pedras de doação de terras), os seus selos, os seus palácios de Dur-Kurigalzu e as suas cartas diplomáticas. Foi também neste período que os escribas babilónicos compilaram e fixaram boa parte da literatura que herdámos; a versão-padrão da Epopeia de Gilgamesh é atribuída ao fim do período cassita ou ao que se lhe seguiu (data debatida).'
  ] },
  { caixa: 'Aviso sobre as fontes', texto: 'A Babilónia cassita deixou **poucos textos narrativos** (quase não há crónicas ou relatos de campanhas escritos pelos próprios reis) e as listas de reis divergem. Muita da história que se conta vem de cartas, de arquivos administrativos (sobretudo de Nipur) e de textos de vizinhos, como o Egito, a Assíria e Hatti. Por isso, ao longo desta página, o que é **debatido ou incerto** vem assinalado.' },
  { img: 'cas-mapa-regiao', leg: 'Mapa do Próximo Oriente c. 1400 a.C., com Babilónia cassita, Egito, Mitani, Hatti e Assíria.' },
  { h: 'Onde ficava' },
  'O reino cassita ocupava a **Baixa Mesopotâmia e a região central do Iraque atual**, entre o Tigre e o Eufrates: da zona de Nipur e Babilónia, pelo norte até perto de Bagdade (onde ficou a cidade real de **Dur-Kurigalzu**), até às cidades do sul como Ur, Uruk e Larsa, e para sudeste até junto do Golfo Pérsico. Não era um território com fronteiras fixas: variava com as guerras com o **Elão** (a leste), a **Assíria** (a norte) e, mais ao longe, o Egito, Mitani e Hatti.',
  'O nome do reino, **Karduniash** (também escrito Karanduniash), aparece nos textos cassitas e nas cartas de Amarna. A etimologia do nome é incerta. A sua mais antiga atestação conhecida é numa inscrição do rei Karaindash. Era o nome com que o reino se apresentava ao mundo, ao lado de títulos como «rei da Babilónia, rei de Sumer e Acad».',
  { img: 'cas-zagros-paisagem', leg: 'Paisagem dos montes Zagros, Irão.' },
  { h: 'Quando existiu' },
  'As datas seguem a «cronologia média», a mais usada. O **início** da dinastia é incerto: 1595 a.C. é a data do saque hitita de Babilónia, e ninguém sabe ao certo quem governou a cidade logo a seguir; alguns autores situam a consolidação cassita em torno de 1531 a.C. A lista de reis babilónica dá à dinastia 576 anos, mas esse total inclui reis anteriores ao controlo efetivo de Babilónia e não pode ser aceite à letra. O **fim**, c. 1155 a.C., é bem mais seguro.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Antes do poder', 'séc. XVIII – XVII a.C.', 'Cassitas aparecem na Babilónia como soldados e trabalhadores; primeiro registo explícito c. 1741 a.C.; o fundador tradicional, Gandash, c. 1729 a.C. (debatido)'],
    ['Instalação', 'c. 1595 – 1450 a.C.', 'Depois do saque hitita, os reis cassitas ocupam Babilónia; Agum II e a estátua de Marduk; luta contra a dinastia do País do Mar'],
    ['Consolidação', 'c. 1450 – 1400 a.C.', 'Karaindash; primeiros contactos com o Egito e fronteira com a Assíria; templo de Inanna em Uruk'],
    ['Apogeu', 'c. 1400 – 1250 a.C.', 'Kurigalzu I e Dur-Kurigalzu; cartas de Amarna; Burna-Buriash II; Kurigalzu II; clube das grandes potências'],
    ['Declínio', 'c. 1250 – 1155 a.C.', 'Pressão da Assíria (Tukulti-Ninurta I conquista a Babilónia c. 1225 a.C.) e do Elão'],
    ['Queda', 'c. 1158 – 1155 a.C.', 'Invasão elamita de Shutruk-Nahhunte e do filho Kutir-Nahhunte; fim da dinastia'],
    ['Depois', 'séc. XII a.C. em diante', 'II Dinastia de Isin e Nabucodonosor I; os Cassitas ficam nas montanhas, mais tarde conhecidos como Cosseus']
  ] } },
  { h: 'De onde vieram?' },
  'A resposta honesta é: **não se sabe bem**. Os historiadores indicam como origem provável os **montes Zagros** (no oeste do Irão atual), mas alguns avisam que esta ideia pode estar errada. Os primeiros indícios de gente com nomes cassitas na Babilónia datam do século XVIII a.C.: um ano de reinado de **Samsu-iluna**, filho de Hamurabi, é chamado «ano em que venceu o exército dos Cassitas» (c. 1741 a.C.). Antes disso, já existem pessoas com nomes cassitas em registos de Larsa. Não parece ter havido uma invasão em massa, mas uma infiltração gradual: grupos que entravam como trabalhadores agrícolas, mercenários e soldados, e que se foram organizando em clãs.',
  { h: 'A língua cassita: um mistério' },
  'A língua cassita é uma **língua isolada**: não é semita (como o acádio), nem indo-europeia, nem sumérica. Algumas propostas ligam-na ao grupo hurro-urartiano, mas sem consenso. Quase nada sobrevive: **nomes de pessoas e de deuses**, uma pequena lista de palavras (muitas ligadas a cavalos, carros e cores, em listas de vocabulário escritas por escribas babilónicos), e poucas frases. Nunca houve literatura cassita escrita. Alguns reis tinham ainda nomes de aspeto indo-europeu, o que levou a discutir se existiria uma pequena elite de origem indo-ariana; a ideia é possível mas muito debatida.',
  { h: 'Porque importam' },
  { lista: [
    '**Estabilidade:** quase meio milénio de uma só dinastia na Mesopotâmia, algo raríssimo.',
    '**Diplomacia:** a Babilónia cassita foi uma das grandes potências do «clube» do Bronze Final, em contacto com o Egito, Hatti, Mitani e a Assíria, e o acádio era a língua comum.',
    '**Cultura:** conservaram e organizaram a tradição literária babilónica, e o seu período é a base da «Mesopotâmia canónica» que a Assíria depois herdou.',
    '**Pedras de doação:** inventaram ou popularizaram os kudurrus, fonte fundamental de direito, religião e arte.',
    '**Cavalo e carro:** a ligação dos Cassitas aos cavalos deixou marca na língua e na imagem que os vizinhos faziam deles.',
    '**A queda:** a invasão elamita levou para Susa obras-primas como o Código de Hamurabi, que lá foi redescoberto em 1901 – 1902.'
  ] },
  { caixa: 'Os Cassitas hoje', texto: 'O que resta é sobretudo **Dur-Kurigalzu (Aqar Quf)**, perto de Bagdade, com o grande zigurate que ainda se vê de longe, e os museus que guardam os seus kudurrus e tijolos: o **Louvre**, o **Museu Britânico**, o **Museu de Pérgamo** (Berlim) e o **Museu Nacional do Iraque**. O sítio sofre de infiltrações, urbanização e saque, e é objeto, desde 2022, de missões internacionais de levantamento e conservação.' },
  { img: 'cas-aqar-quf-ziggurat', leg: 'Zigurate de Dur-Kurigalzu, em Aqar Quf, Iraque.' },
  { img: 'cas-kudurru-simbolos', leg: 'Kudurru cassita com símbolos dos deuses.' }
];

const linha = [
  'Esta linha do tempo segue os acontecimentos principais da Babilónia cassita. As datas são aproximadas, sobretudo as mais antigas, e vários episódios são **debatidos** (indicado em cada caso).',
  { linha: [
    { d: 'c. 1770 – 1741 a.C.', t: 'Os Cassitas aparecem na Babilónia', x: 'Um registo de Larsa (c. 1770 a.C.) tem a mais antiga pessoa conhecida com nome cassita. Em c. 1741 a.C., Samsu-iluna, filho de Hamurabi, comemora a derrota de um exército cassita. Eram então vizinhos incómodos e ao mesmo tempo mão de obra e soldados.' },
    { d: 'c. 1729 a.C. (tradicional)', t: 'Gandash, o primeiro rei', x: 'A lista de reis da Babilónia abre a dinastia cassita com **Gandash**. Duvida-se que ele tenha reinado em Babilónia e não apenas sobre os Cassitas; a data é tradicional, não confirmada.' },
    { d: '1595 a.C.', t: 'O saque hitita de Babilónia', x: 'O rei hitita **Mursili I** conquista e saqueia Babilónia, pondo fim à dinastia de Hamurabi, e regressa à Anatólia levando, segundo tradição posterior, as estátuas de Marduk e da sua esposa Zarpanitum. Segue-se um período obscuro, em que os Cassitas tomam o poder (c. 1595 – 1531 a.C.).' },
    { d: 'séc. XVI a.C. (debatido)', t: 'Agum II e o regresso de Marduk', x: 'O rei **Agum II** (Agum-kakrime) declara numa inscrição ter recuperado de Hana as estátuas de Marduk e Zarpanitum e reinstalado os deuses em Babilónia. O texto é conhecido por cópias posteriores (séc. VII a.C.); a historicidade é discutida, embora estudos recentes a defendam.' },
    { d: 'séc. XV a.C. (debatido)', t: 'A luta com a dinastia do País do Mar', x: 'No sul, no litoral do Golfo, subsistia uma dinastia rival, a do «País do Mar». As fontes atribuem a sua eliminação a reis cassitas do século XV a.C., como Ulamburiash e Agum III. Os pormenores são incertos.' },
    { d: 'c. 1415 a.C.', t: 'Karaindash e o templo de Inanna em Uruk', x: 'O rei Karaindash manda construir em Uruk um templo de Inanna com uma fachada de **tijolos moldados** representando deuses e deusas com vasos de água. Foi a obra de arte arquitetónica mais característica do período. Karaindash estabelece também a fronteira com a Assíria e talvez tenha enviado presentes ao Egito.' },
    { d: 'c. 1390 a.C.', t: 'Kurigalzu I funda Dur-Kurigalzu', x: 'Kurigalzu I, que reinou até c. 1375 a.C., funda a cidade fortificada de Dur-Kurigalzu («fortaleza de Kurigalzu»), em Aqar Quf, perto de Bagdade, e reconstrói templos em Ur, Nipur e outras cidades. Durante muito tempo atribuiu-se a fundação ao rei de igual nome, Kurigalzu II; a distinção é ainda discutida.' },
    { d: '1374 – 1360 a.C.', t: 'Kadashman-Enlil I e o faraó Amenhotep III', x: 'Começa a correspondência com o Egito conservada em Amarna: cartas em acádio em que os dois reis se tratam por «irmão», trocam presentes e negoceiam casamentos. O faraó recusa casar uma princesa egípcia com o rei babilónico; negociam-se casamentos com princesas babilónicas.' },
    { d: '1359 – 1333 a.C.', t: 'Burna-Buriash II', x: 'Reina 27 anos e escreve ao faraó **Akhenaton**, queixando-se do ouro, de mercadores mortos em Canaã e das visitas de enviados assírios ao Egito, que ele considera seus vassalos. Casa-se com uma filha do rei assírio Ashur-uballit I (segundo as fontes assírias) e talvez tenha casado uma filha com o rei hitita Suppiluliuma I.' },
    { d: '1333 a.C.', t: 'Golpe de Estado e intervenção assíria', x: 'O filho e sucessor de Burna-Buriash, Kara-hardash (segundo algumas fontes, neto do rei assírio), é morto numa revolta do exército cassita. O usurpador Nazi-Bugash é derrubado por Ashur-uballit I, que coloca no trono Kurigalzu II.' },
    { d: '1332 – 1308 a.C.', t: 'Kurigalzu II', x: 'Longo reinado de recuperação, com construções em Dur-Kurigalzu (a atribuição de obras entre os dois Kurigalzu é debatida) e conflitos com o Elão e a Assíria.' },
    { d: 'séc. XIII a.C.', t: 'A Assíria cresce, a Babilónia defende-se', x: 'Segundo fontes assírias, reis como Adad-nirari I vencem reis cassitas e empurram a fronteira para sul (visão unilateral). Nas cartas de Hattusa, os reis hititas escrevem a Kadashman-Turgu e a Kadashman-Enlil II, com queixas de estatuto e propostas de aliança. A Babilónia continua a ser tratada como grande potência.' },
    { d: 'c. 1225 a.C.', t: 'Tukulti-Ninurta I conquista a Babilónia', x: 'O rei assírio derrota **Kashtiliash IV**, leva-o prisioneiro e rouba a estátua de Marduk. Intitula-se «rei de Sumer e Acad». É um golpe sem paralelo: pela primeira vez um assírio governa a Baixa Mesopotâmia. As crónicas dão-lhe vários anos de domínio (o número exato, c. 7, é discutido).' },
    { d: 'c. 1217 a.C.', t: 'A dinastia cassita regressa', x: 'Uma revolta babilónica expulsa os Assírios e instala **Adad-shuma-usur** (c. 1216 – 1187 a.C.). Tukulti-Ninurta é assassinado pelos próprios filhos c. 1207 a.C. A Babilónia sai enfraquecida.' },
    { d: 'c. 1186 – 1172 a.C.', t: 'Meli-Shipak II', x: 'É dos reis mais bem documentados em kudurrus. Um deles, o mais famoso, mostra o rei a apresentar a filha à deusa Nanaya.' },
    { d: 'c. 1158 a.C.', t: 'Shutruk-Nahhunte invade a Babilónia', x: 'O rei de Elam ataca a Babilónia; um pretexto possível (debatido) foi a deposição de um rei cassita ligado à sua família. Saqueia cidades como Sippar e Eshnunna e leva para Susa monumentos antigos: entre os despojos atribuídos aos Elamitas (a Shutruk-Nahhunte em particular) estão a **estela de vitória de Naram-Sin**, o **Código de Hamurabi** e o **obelisco de Manishtushu**.' },
    { d: 'c. 1157 – 1155 a.C.', t: 'O último rei: Enlil-nadin-ahi', x: 'Enlil-nadin-ahi reina dois anos. Em 1155 a.C. o filho de Shutruk-Nahhunte, **Kutir-Nahhunte**, conquista Babilónia e a dinastia acaba. Uma crónica assíria posterior diz que o rei foi levado para o Elão (fonte pouco fiável). Segundo a tradição, o elamita leva a estátua de Marduk.' },
    { d: 'c. 1125 – 1104 a.C. (datas debatidas)', t: 'Nabucodonosor I traz Marduk de volta', x: 'Rei da II Dinastia de Isin, derrota os Elamitas (batalha junto ao rio Ulaya, no calor do verão) e recupera a estátua de Marduk. A tradição pode ter sido embelezada mais tarde (debatido). É por esta altura que alguns estudiosos (entre eles W. G. Lambert) situam a composição do *Enuma Elish*, o poema em que Marduk vence Tiamat.' },
    { d: 'séc. XII – IV a.C.', t: 'Os Cassitas nas montanhas', x: 'Depois da queda, os Cassitas ficam nos Zagros, e os gregos chamam-lhes **Cosseus** (*Kossaioi*). Resistem aos Persas, e Alexandre Magno combate-os numa campanha de inverno (c. 324 – 323 a.C.).' },
    { d: '1887', t: 'As cartas de Amarna', x: 'Camponeses egípcios encontram em Amarna centenas de tabuinhas de argila. As cartas de Babilónia (EA 1 a 14) tornam-se a principal fonte sobre a diplomacia cassita.' },
    { d: '1889 – 1900', t: 'Nipur', x: 'A Universidade da Pensilvânia escava Nipur e recupera milhares de textos cassitas (arquivos do templo e administrativos).' },
    { d: '1901 – 1902', t: 'O Código de Hamurabi em Susa', x: 'A missão francesa dirigida por Jacques de Morgan encontra em Susa os fragmentos da estela do Código de Hamurabi, levada para lá no séc. XII a.C. pelos Elamitas.' },
    { d: '1942 – 1945', t: 'Dur-Kurigalzu', x: 'Taha Baqir e Seton Lloyd escavam Aqar Quf e encontram o palácio, os templos e as pinturas murais.' }
  ] },
  { img: 'cas-hattusa-porta', leg: 'Porta dos Leões de Hattusa, Turquia.' },
  { img: 'cas-amarna-tabuinha', leg: 'Carta de Amarna de Shipti-Ba’al de Laquis ao rei do Egito, século XIV a.C.; Museu Britânico.' },
  { img: 'cas-tukulti-altar', leg: 'Altar de Tukulti-Ninurta I, com o rei representado de pé e ajoelhado, Berlim.' },
  { img: 'cas-estela-naram-sin', leg: 'Estela da Vitória de Naram-Sin, período acádio, encontrada em Susa; Louvre. Peça anterior ao período cassita.' },
  { img: 'cas-codigo-hammurabi', leg: 'Estela do Código de Hamurabi, período paleobabilónico, Louvre; anterior à dinastia cassita.' },
  { img: 'cas-nabucodonosor-kudurru', leg: 'Kudurru de Ritti-Marduk do reinado de Nabucodonosor I, c. 1125–1104 a.C., de Sipar; Museu Britânico. Período posterior à dinastia cassita.' }
];

const mapa = [
  'A Babilónia cassita assentava em cidades antigas, algumas já milenares, que os reis cassitas cuidaram como bons «herdeiros». Babilónia era a capital religiosa, e **Dur-Kurigalzu** tornou-se a cidade real do norte. **Nipur**, sede de Enlil, era a cidade que mais documentos nos deixou.',
  { img: 'cas-mapa-grandes-potencias', leg: 'Mapa das grandes potências no período das cartas de Amarna.' },
  { tabela: { cab: ['Cidade', 'Deus principal', 'Local hoje', 'Papel no período cassita'], linhas: [
    ['Babilónia', 'Marduk', 'Hillah, Iraque', 'Capital e centro religioso; Marduk absorvido no panteão cassita'],
    ['Dur-Kurigalzu', 'Enlil, Ninlil, Ninurta (templos)', 'Aqar Quf, a oeste de Bagdade', 'Cidade real fortificada; palácios e zigurate; fundada c. 1390 a.C.'],
    ['Nipur', 'Enlil', 'Nuffar, centro do Iraque', 'Centro religioso; governador próprio (*šandabakku*); milhares de textos'],
    ['Uruk', 'Inanna', 'Warka', 'Templo de Karaindash com fachada de tijolos moldados'],
    ['Ur', 'Nanna', 'Tell el-Muqayyar', 'Reconstruções cassitas de templos'],
    ['Sippar', 'Shamash', 'Abu Habba', 'Provável local de origem do Código de Hamurabi, levado depois para Susa (saque elamita)'],
    ['Susa', 'Inshushinak', 'Shush, Irão', 'Capital elamita: recebe os despojos da Babilónia no séc. XII a.C.'],
    ['Dilbat', 'Urash', 'Tell Deylam', 'Cidade com arquivos do período']
  ] } },
  { h: 'Babilónia, capital religiosa' },
  'Babilónia continuou a ser a cidade de **Marduk**. Os reis cassitas fizeram dela sede do poder e adotaram o título de «rei da Babilónia». Pouco se vê hoje desta camada: o nível freático e as ruínas do tempo de Nabucodonosor II, séculos depois, escondem a cidade cassita, e por isso conhecemos mal o seu aspeto. Os textos mostram que Esagila, o templo de Marduk, continuava a ser o centro do culto. Na linguagem dos Cassitas a cidade chamava-se Karanduniash.',
  { img: 'cas-babilonia-ruinas', leg: 'Babilónia, Iraque: ruínas e reconstruções modernas em tijolo, realizadas no século XX.' },
  { h: 'Dur-Kurigalzu, a cidade real' },
  'Fundada por **Kurigalzu I** c. 1390 a.C. (a atribuição a Kurigalzu II foi durante muito tempo comum), cobria cerca de 225 hectares e continha, segundo a escavação, uns nove templos, três palácios e bairros de habitação. O grande **zigurate** de tijolo, de base com cerca de 69 × 67 m, ainda se eleva a mais de 50 m e servia de ponto de referência para quem viajava na planície. As paredes de alguns edifícios tinham pinturas murais em vermelho, azul-cobalto, amarelo, branco e preto, com procissões de figuras humanas e motivos geométricos.',
  { img: 'cas-dur-kurigalzu-reconstrucao', leg: 'Reconstrução artística de Dur-Kurigalzu, c. 1350 a.C., com zigurate, palácio e canais. Ilustração gerada por IA.' },
  { img: 'cas-dur-kurigalzu-pintura', leg: 'Gonzo de porta em pedra do palácio de Dur-Kurigalzu, com inscrição que menciona Kurigalzu, século XIV a.C.; Museu de Sulaymaniyah. Alternativa à pintura mural.' },
  { h: 'Nipur, a cidade de Enlil' },
  'Nipur já era o centro religioso da Suméria e manteve esse papel. Depois de uma fase de abandono sob os reis babilónicos anteriores, os Cassitas **restauraram o Ekur**, o templo de Enlil (Kurigalzu I construiu ali o Ekurigibarra; Kadashman-Enlil I e outros reis fizeram obras). A cidade foi governada por um alto funcionário, o ***šandabakku***. Os arquivos de Nipur, com milhares de tabuinhas, mostram uma administração organizada: distribuição de cevada, gado, animais de tiro, impostos. Atingiu cerca de 130 hectares. Em meados do século XII a.C., com a mudança de curso do Eufrates, a cidade entrou em declínio.',
  { img: 'cas-nippur-ruinas', leg: 'Restos do zigurate de Nipur, Iraque, com o abrigo construído pelos arqueólogos no século XIX visível no topo.' },
  { h: 'Uruk, Ur e as cidades do sul' },
  'No sul, os reis cassitas reconstruíram ou embelezaram templos de cidades de tradição suméria. A obra mais conhecida está em **Uruk**: um templo de Inanna do rei Karaindash, de fachada de «tijolos moldados» em relevo (c. 1415 a.C.). Em **Ur**, os Cassitas fizeram restauros do templo (as inscrições são de Kurigalzu).',
  { h: 'Susa, o destino do saque' },
  'Susa era a capital dos reis do Elão, a leste. Já Kurigalzu I a teria atacado (debatido), mas no século XII a.C. o movimento inverteu-se: foi para Susa que Shutruk-Nahhunte levou os monumentos da Babilónia. Foi ali que, entre 1897 e 1902, os arqueólogos franceses os descobriram.',
  { img: 'cas-susa-ruinas', leg: 'Ruínas de Susa, Irão, com o castelo construído pela missão arqueológica francesa no final do século XIX ao fundo.' },
  { h: 'Rotas e vizinhos' },
  'A Babilónia cassita ficava no cruzamento de rotas de **cavalos** (vindos do norte e do leste), de **lápis-lazúli** e outras pedras (do Afeganistão, pelo Irão), de **cobre e estanho**, e de **ouro** (do Egito, o produto mais pedido nas cartas). O Eufrates e o Tigre eram as grandes vias para o Golfo e para a Síria. A fronteira com a Assíria, a norte, foi sempre motivo de disputa e de tratados, desde o de Karaindash com Ashur-bel-nisheshu (c. 1400 a.C.).'
];

const sociedade = [
  { h: '1. Organização política' },
  'O rei cassita era, ao mesmo tempo, **rei da Babilónia**, **rei de Sumer e Acad** e **rei dos Cassitas**: usava os títulos babilónicos tradicionais e conservava o estatuto de chefe de um povo. Cassitas e Babilónios não se separavam em castas: a elite cassita e os escribas e sacerdotes babilónicos formavam a administração. As províncias eram governadas por funcionários (*šaknu*), e o de Nipur, o *šandabakku*, tinha estatuto especial. O poder assentava numa rede de clãs e de «casas» (em acádio, *bītu*), com chefes fortemente ligados ao rei.',
  'Os reis garantiam a lealdade dos grandes oferecendo **terras isentas de impostos**, registadas em kudurrus. A sucessão era dinástica e, na maior parte do período, estável, embora tenha havido golpes (como o de 1333 a.C.).',
  { img: 'cas-palacio-corte', leg: 'Interpretação artística de uma audiência na corte cassita, c. 1300 a.C. Ilustração gerada por IA.' },
  { h: '2. Classes sociais' },
  { lista: [
    '**Rei e família real:** os reis casavam com filhas de reis estrangeiros e as princesas cassitas tinham papel diplomático.',
    '**Elite cassita e altos funcionários:** governadores, chefes militares e proprietários que recebiam terras por doação real.',
    '**Sacerdotes e escribas:** famílias babilónicas, guardiãs do saber e dos templos.',
    '**Homens livres:** camponeses, artesãos, mercadores.',
    '**Dependentes e escravos:** trabalhadores do templo e do palácio, e prisioneiros de guerra ou devedores.'
  ] },
  { h: '3. Religião' },
  'Os Cassitas tinham os seus próprios deuses, mas aceitaram os deuses babilónicos, e os reis restauraram templos de Enlil, Marduk, Inanna e outros. Os principais deuses cassitas eram:',
  { tabela: { cab: ['Deus', 'Domínio (o que se sabe)', 'Notas'], linhas: [
    ['Shuqamuna e Shumaliya', 'Deuses protetores da realeza cassita', 'Distintos dos deuses babilónicos; mais tarde identificados com divindades babilónicas'],
    ['Harbe', 'Chefe do panteão cassita, comparado a Enlil', 'Nome ainda debatido na leitura'],
        ['Buriash e Maruttash', 'Associados a tempestade e guerra', 'Aparecem em nomes de reis (Burna-Buriash, Nazi-Maruttash); alguns estudiosos veem aqui paralelos indo-arianos, hipótese muito discutida'],
    ['Surias', 'Sol?', 'Também interpretado, de forma discutível, como indo-ariano']
  ] } },
  'Em Babilónia, **Marduk** continuou a crescer em importância e a ser identificado com os deuses locais. Os Cassitas respeitavam e dotavam os grandes santuários. O culto cassita em si deixou poucos textos próprios, e por isso a sua religião nos é pouco conhecida.',
  { h: '4. Economia e agricultura' },
  'A economia continuava a ser agrícola: cevada, tâmaras, linho, ovelhas e gado, com canais de irrigação mantidos pelos governantes. As terras eram dadas em **doação aos favoritos** por meio de kudurrus. Segundo uma estimativa, os terrenos doados teriam em média cerca de 250 hectares. O comércio externo trazia cobre, estanho, lápis-lazúli e cavalos, e exportava produtos de luxo; o ouro vinha do Egito, em troca de presentes. As trocas entre grandes reis eram também trocas de presentes e de «prestígio».',
  { h: 'Kudurrus, as pedras de doação' },
  'Os **kudurrus** (de *kudurru*, «fronteira») são estelas de pedra em que o rei registava uma doação de terra a um favorito, descrevia os limites e **amaldiçoava quem a violasse**. O texto era acompanhado dos **símbolos dos deuses** (a estrela de Ishtar, a lua, o sol, a serpente, o escorpião, a tiara de Enlil, entre outros). Eram guardados nos templos, e o beneficiário recebia cópias em argila. A prática começa no período cassita e prolonga-se até c. 700 a.C. Para além de terras, alguns kudurrus registam vitórias militares, isenções de impostos ou rendimentos de templos, o que os torna uma fonte preciosa.',
  { img: 'cas-meli-shipak-nanaya', leg: 'Kudurru de Meli-Shipak: o rei apresenta a filha à deusa Nanaya, século XII a.C.; Louvre, Sb 23.' },
  { img: 'cas-cerimonia-terra', leg: 'Cena reconstruída de uma concessão de terras com kudurru, c. 1200 a.C., num recinto de templo. Ilustração gerada por IA.' },
  { h: '5. Escrita, escribas e escolas' },
  'O cassita praticamente **não se escrevia**: a língua das cartas, dos contratos e da administração foi o acádio (variante «médio-babilónica»), e o sumério continuou a ser língua erudita. Como o acádio era a língua da diplomacia em todo o Próximo Oriente (das cartas de Amarna aos arquivos hititas), os escribas babilónicos eram muito procurados. Foi um período de **trabalho de compilação e padronização**: os textos antigos foram reunidos, copiados e organizados em séries canónicas, sobretudo de presságios, hinos, listas e poemas.',
  { img: 'cas-escriba-nippur', leg: 'Cena reconstruída de um escriba e aprendiz num arquivo de Nipur, c. 1250 a.C. Ilustração gerada por IA.' },
  { h: 'Literatura: Gilgamesh e Enuma Elish' },
  'A versão-padrão da **Epopeia de Gilgamesh**, em doze tabuinhas, é atribuída ao escriba **Sîn-lēqi-unninni**. A data é debatida: os estudiosos situam-na entre 1300 e 1000 a.C., ou seja, no fim do período cassita ou logo a seguir. As cópias que temos vêm da biblioteca de Assurbanípal em Nínive, do século VII a.C. O poema da criação **Enuma Elish**, em que Marduk vence Tiamat e se torna rei dos deuses, foi talvez composto na Babilónia do fim do II milénio. Uma teoria influente (Lambert) liga-o ao reinado de Nabucodonosor I; outros defendem uma data cassita, e uma minoria propõe uma origem mais antiga. É um dos grandes debates do período.',
  { img: 'cas-gilgamesh-tab11', leg: 'Tabuinha XI da Epopeia de Gilgamesh (Dilúvio), cópia neo-assíria do século VII a.C., de Nínive; Museu Britânico.' },
  { img: 'cas-enuma-elish-tab', leg: 'Fragmento K.3473 do Enuma Elish, cópia neo-assíria do século VII a.C., de Nínive; Museu Britânico.' },
  { h: 'O sistema de datas' },
  'Na Babilónia de Hamurabi, cada ano tinha um nome, dado a um acontecimento. No período cassita passou a usar-se a **contagem dos anos de reinado**: «ano 4 de Shagarakti-Shuriash», por exemplo. É a base da cronologia que hoje usamos, mas as listas de reis e as sincronias com outros reinos têm falhas, e daí a existência de várias cronologias (alta, média, baixa).',
  { h: '6. Casa e família' },
  'As casas eram de **tijolo de argila**, com pátio central, como nas cidades babilónicas anteriores. Sobre a vida privada dos Cassitas, os documentos são escassos; sabemos de contratos de casamento, de dotes e de adoção em arquivos de Nipur. As mulheres podiam possuir bens, e as filhas dos reis desempenhavam papel diplomático nas alianças com o Egito, Hatti e a Assíria.',
  { img: 'cas-casa-cassita', leg: 'Reconstrução do quotidiano numa casa babilónica do período cassita, c. 1300 a.C. Ilustração gerada por IA.' },
  { h: '7. Alimentação' },
  'Os dados diretos são poucos. A base da dieta era provavelmente a mesma de toda a Mesopotâmia: **pão e papas de cevada**, legumes (lentilhas, grão, cebola, alho), tâmaras, peixe, queijo e carne de carneiro e de cabra. A **cerveja** era a bebida comum e o vinho uma bebida de elite, importada. Em Nipur, os textos administrativos registam rações de cevada e de óleo para trabalhadores.',
  { h: '8. Vestuário' },
  'Os kudurrus, os selos e as pinturas de Dur-Kurigalzu mostram figuras com **túnicas longas** e, nos reis e nos deuses, mantos com franjas e toucados altos (o que é comum nas imagens de toda a Mesopotâmia). O que distinguia os Cassitas dos Babilónios no vestuário é desconhecido. Os reis eram representados barbudos, com o cabelo comprido, à maneira babilónica.',
  { h: '9. Música, jogos e lazer' },
  'Há textos de Nipur, do Bronze Final, sobre **afinação de liras**, que mostram uma teoria musical já elaborada (a interpretação é debatida). Os **jogos de tabuleiro** (como o Jogo Real de Ur) continuaram a ser jogados na região. A caça e a corrida de carros eram, tudo indica, lazeres da elite.',
  { h: '10. Ciência e conhecimento' },
  'Foi nesta época que se organizou a grande coleção de **presságios** (observação dos céus, do fígado dos animais, de acontecimentos), a base da astronomia e da adivinhação babilónicas, mesmo que a edição canónica seja talvez posterior. Há, em arquivos como o de Nipur, textos de medicina, listas de plantas e de pedras, e problemas de cálculo escolares. Os dados cassitas diretos de matemática e astronomia são, no entanto, escassos.',
  { h: '11. Tecnologia e artes' },
  { lista: [
    '**Tijolo moldado e tijolo cozido:** a fachada do templo de Inanna em Uruk usava cerca de 500 tijolos cozidos moldados em relevo; os tijolos de construção traziam muitas vezes o nome do rei, carimbado.',
    '**Vidro:** a produção de vidro ganha importância no Próximo Oriente do Bronze Final (a partir de meados do II milénio a.C.). Há vidro em sítios cassitas, e a Mesopotâmia deixou mais tarde tabuinhas com receitas, mas a atribuição de qual oficina fez o quê (cassita, mitânica, egípcia) é debatida.',
    '**Selos cilíndricos:** os selos cassitas costumam ter **longas inscrições** de orações e o nome do dono, com poucas figuras (uma divindade, um símbolo). Eram de pedra dura, vidro ou argila.',
    '**Cerâmica:** taças e copos com pés, taças de parede ondulada, de formas simples e fabrico corrente.',
    '**Metalurgia e pedra:** estátuas e vasos de pedra e metais importados.'
  ] },
  { img: 'cas-selo-cilindrico', leg: 'Selo cilíndrico e impressão de Uballissu-Marduk, tesoureiro da corte de Kurigalzu II, século XIV a.C.; Museu Britânico.' },
  { img: 'cas-tijolo-carimbado', leg: 'Tijolo com inscrição dedicatória do rei cassita Adad-shuma-usur, de Nipur; Metropolitan Museum of Art.' },
  { img: 'cas-uruk-fachada', leg: 'Fachada do templo de Inanna em Uruk, de Karaindash, Berlim.' },
  { img: 'cas-ceramica', leg: 'Copo trípode cassita de Babilónia, em azul egípcio (material sintético à base de silicato de cálcio e cobre), Louvre, AO 4079. Alternativa à cerâmica comum.' },
  { img: 'cas-vidro-bronze-tardio', leg: 'Vaso de vidro egípcio do Império Novo, c. 1295–1070 a.C.; Metropolitan Museum of Art, 23.6.1. Comparação do Bronze Final, não uma peça mesopotâmica.' },
  { img: 'cas-oficina-vidro', leg: 'Interpretação artística do fabrico de um vaso de vidro sobre núcleo no Bronze Final, c. 1400 a.C. Ilustração gerada por IA.' },
  { h: '12. O cavalo e o carro' },
  'O cavalo era conhecido na Mesopotâmia desde o fim do III milénio a.C., mas só no Bronze Final se tornou comum como animal de **tração de carros de guerra e de prestígio**. Aos Cassitas associa-se de forma especial o cavalo: uma parte do pouco vocabulário cassita conhecido é técnico (cavalos, carros, cores). A ideia antiga de que foram eles a trazer o cavalo para a Babilónia é hoje posta de parte, porque o animal já existia; o seu papel exato (criadores, treinadores, comerciantes) é incerto. Cavalos e carros aparecem entre os presentes trocados pelos reis.',
  { img: 'cas-carro-batalha', leg: 'Reconstrução de um carro de guerra do período cassita, c. 1350 a.C., com condutor e arqueiro. Ilustração gerada por IA.' },
  { img: 'cas-cavalos-estabulo', leg: 'Interpretação artística de cavalos e tratadores num estábulo real cassita, c. 1300 a.C. Ilustração gerada por IA.' },
  { h: '13. A guerra' },
  'Os exércitos cassitas combinavam a infantaria tradicional (lanceiros e arqueiros) com a **carraria**, que usava carros ligeiros de dois cavalos. A guerra fazia-se sobretudo nas fronteiras: com o **Elão**, a leste, e com a **Assíria**, a norte. Muitos conflitos eram resolvidos com tratados de fronteira e casamentos. O fim do reino veio de uma guerra de pilhagem e conquista do Elão, que arrasou cidades e levou os troféus para Susa.',
  { h: 'O «clube das grandes potências»' },
  'Os historiadores chamam por vezes «clube das grandes potências» ao grupo de reinos que, no séc. XIV a.C., se tratavam como iguais: **Egito, Babilónia, Mitani, Hatti** e, mais tarde, a **Assíria** (Alashiya, Chipre, também escreve). Os reis chamavam-se «irmão», enviavam **presentes** e **enviados**, e selavam alianças com **casamentos diplomáticos**. As cartas de Amarna mostram como isto funcionava na prática, com as suas vaidades: os reis babilónicos queixam-se de ouro de menos, de mensageiros retidos durante anos, de uma escolta de apenas cinco carros e de falta de notícias do faraó quando um deles adoeceu.',
  { img: 'cas-mensageiros-amarna', leg: 'Cena reconstruída de enviados babilónicos na corte egípcia de Akhetaten, c. 1350 a.C. Ilustração gerada por IA.' }
];

const personalidades = [
  'Os reis cassitas deixaram nomes, inscrições, kudurrus e cartas, mas poucos relatos pessoais. Estes são os mais importantes, com a indicação do que é seguro e do que é debatido.',
  { h: 'Gandash, o fundador tradicional' },
  'A lista de reis babilónica abre com ele a dinastia cassita (c. 1729 a.C.). É possível que tenha sido apenas chefe de um grupo cassita e que o poder em Babilónia só tenha vindo mais tarde. Os dados são escassos.',
  { h: 'Agum II (Agum-kakrime)' },
  'Rei do séc. XVI a.C. Numa inscrição conhecida por cópias posteriores declara-se «rei dos Cassitas e dos Acádios» e conta como recuperou de Hana as estátuas de Marduk e Zarpanitum, levadas pelos Hititas, e as repôs no Esagila. A historicidade é debatida; muitos estudos recentes inclinam-se para a aceitar, mas o texto também serve de propaganda do culto de Marduk.',
  { h: 'Karaindash' },
  'Rei do séc. XV a.C. (as datas exatas variam com a cronologia). Mandou construir o templo de Inanna em Uruk com a célebre fachada de tijolos moldados, definiu a fronteira com a Assíria (com Ashur-bel-nisheshu) e é lembrado por Burna-Buriash II como o primeiro a ter relações amigáveis com o Egito. Uma inscrição sua contém a mais antiga atestação conhecida do nome Karduniash.',
  { h: 'Kurigalzu I' },
  'Rei até c. 1375 a.C., fundador de **Dur-Kurigalzu** e construtor em várias cidades. As fontes dizem que venceu o rei elamita Hurbatila e tomou Susa (debatido). As suas inscrições estão em sumério e acádio. Não deve ser confundido com Kurigalzu II, e os historiadores ainda discutem obras de um e do outro.',
  { img: 'cas-kurigalzu-estatua', leg: 'Cabeça masculina de terracota pintada do palácio de Dur-Kurigalzu, atribuída ao reinado de Marduk-apla-iddina I, século XII a.C.; Museu do Iraque. Alternativa à estátua de Kurigalzu.' },
  { h: 'Kadashman-Enlil I' },
  'Reinou de c. 1374 a 1360 a.C. É o autor das primeiras cartas de Amarna da Babilónia. Pediu em casamento uma princesa egípcia, e o faraó Amenhotep III respondeu que nenhuma filha de rei do Egito fora dada em casamento a estrangeiros. Acabou por enviar uma das suas filhas ao Egito, em troca de ouro. Fez obras em Nipur.',
  { h: 'Burna-Buriash II' },
  'Reinou 27 anos (c. 1359 – 1333 a.C.). Escreveu cartas ao faraó Akhenaton e a outros, com queixas sobre ouro, mensageiros e mercadores assassinados em Canaã. Insistiu em que os Assírios eram seus súbditos. Casou-se com uma filha de Ashur-uballit I (segundo as fontes assírias) e provavelmente casou outra filha com Suppiluliuma I de Hatti. Foi um rei de enorme prestígio internacional.',
  { img: 'cas-burna-buriash-carta', leg: 'Carta de Burna-Buriash II ao faraó egípcio (EA 9), século XIV a.C., de Amarna; Museu Britânico, BM 29785.' },
  { h: 'Kurigalzu II' },
  'Colocado no trono por Ashur-uballit I em 1333 a.C. depois do golpe contra o sucessor de Burna-Buriash II, reinou cerca de 24 anos (c. 1332 – 1308 a.C.), consolidou o Estado e é associado às obras de Dur-Kurigalzu. Combateu o Elão e a Assíria.',
  { h: 'Kashtiliash IV' },
  'Reinou c. 1232 – 1225 a.C. Foi derrotado por Tukulti-Ninurta I da Assíria, levado em cadeias para Assur e a Babilónia sofreu o saque do Esagila. Para os Assírios foi um triunfo; para os Babilónios, um sacrilégio, e a dinastia cassita só conseguiu recuperar o trono anos depois.',
  { h: 'Tukulti-Ninurta I, o conquistador assírio' },
  'Rei da Assíria (c. 1243 – 1207 a.C.), vencedor dos Hititas em Nihriya, conquistou Babilónia c. 1225 a.C. e levou a estátua de Marduk. O **Épico de Tukulti-Ninurta** celebra a campanha e culpa os Babilónios de terem quebrado juramentos. Construiu uma nova capital, Kar-Tukulti-Ninurta, e foi assassinado pelos filhos.',
  { img: 'cas-tukulti-altar', leg: 'Altar de Tukulti-Ninurta I, com o rei representado de pé e ajoelhado, Berlim.' },
  { h: 'Meli-Shipak II' },
  'Rei c. 1186 – 1172 a.C. Do seu reinado resta o kudurru do Louvre em que apresenta a filha à deusa Nanaya e doa terras ao filho Marduk-apla-iddina. Alguns historiadores veem na sua casa, ligada por casamento à de Shutruk-Nahhunte, o pretexto da invasão elamita (debatido).',
  { h: 'Shutruk-Nahhunte, rei de Elam' },
  'Reinou c. 1184 – 1155 a.C., fundador da dinastia dos Shutrukidas. Invadiu a Babilónia em c. 1158 a.C. e levou para Susa monumentos de reis antigos, entre os quais a estela de Naram-Sin. Numa inscrição que acrescentou à estela de Naram-Sin, apresenta-se como filho de Hallutush-Inshushinak e rei de Anshan e de Susa, e diz que a levou para o Elão, dedicando-a ao deus Inshushinak.',
  { h: 'Enlil-nadin-ahi, o último rei cassita' },
  'Reinou c. 1157 – 1155 a.C. Um golpe elamita de Kutir-Nahhunte tirou-lhe o trono. Segundo uma crónica assíria, foi levado para o Elão; a fonte é pouco fiável, mas a derrota e o fim da dinastia são certos.',
  { h: 'Nabucodonosor I, o vingador' },
  'Rei da II Dinastia de Isin (c. 1125 – 1104 a.C., datas debatidas). Venceu o rei elamita Hulteludish-Inshushinak num combate no calor do verão e recuperou a estátua de Marduk. Os seus kudurrus celebram esta vitória. O Marduk que então regressa tornou-se o chefe dos deuses babilónicos. O relato pode conter exagero posterior.',
  { img: 'cas-nabucodonosor-kudurru', leg: 'Kudurru de Ritti-Marduk do reinado de Nabucodonosor I, c. 1125–1104 a.C., de Sipar; Museu Britânico. Período posterior à dinastia cassita.' },
  { h: 'Sîn-lēqi-unninni, o escriba' },
  'Escriba tradicionalmente apontado como o compilador da versão-padrão da **Epopeia de Gilgamesh**. Os textos não dizem quando viveu: a data da obra varia entre os séculos XIII e X a.C. Não sabemos nada ao certo sobre ele.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**Continuidade e estabilidade:** quase cinco séculos de poder numa só dinastia, sem rutura da cultura babilónica.',
    '**Preservação do saber:** a compilação e fixação de textos que depois a Assíria e a Babilónia tardia herdaram e levaram até à biblioteca de Assurbanípal.',
    '**Os kudurrus:** forma própria de documentar direito, propriedade, maldições e símbolos divinos.',
    '**Diplomacia entre iguais:** o modelo das cartas de Amarna, com casamentos, presentes e a fórmula do «irmão».',
    '**Dur-Kurigalzu:** um dos poucos grandes sítios do Bronze Final no Iraque, com zigurate e palácio.',
    '**Arquitetura em relevo:** os tijolos moldados de Uruk, técnica que reaparece, em maior escala, na Babilónia do séc. VI a.C. (a Porta de Ishtar).'
  ] },
  { h: 'Arte' },
  'A arte cassita é sobretudo **sóbria e religiosa**: kudurrus com símbolos divinos, selos de inscrição longa e pouca figura, tijolos moldados, pinturas murais geométricas, estátuas reais de pedra dura e cerâmica de formas simples. Não tem a exuberância narrativa dos Assírios nem das grandes cortes do Egito, mas tem uma identidade própria.',
  { h: 'A queda e os despojos' },
  'Algumas obras-primas de épocas anteriores chegaram-nos **porque os Elamitas as roubaram**: tendo sido levadas para Susa, ficaram ali enterradas até serem encontradas no final do século XIX. A **estela de vitória de Naram-Sin**, o **Código de Hamurabi** e o **obelisco de Manishtushu** (todos hoje no Louvre) fizeram essa viagem. É uma ironia: o saque preservou-as.',
  { img: 'cas-queda-susa', leg: 'Cena hipotética de monumentos saqueados de uma cidade babilónica por forças elamitas no século XII a.C.; não representa um ataque a Susa. Ilustração gerada por IA.' },
  { img: 'cas-obelisco-manishtushu', leg: 'Obelisco de Manishtushu, período acádio, encontrado em Susa; Louvre. Peça anterior ao período cassita.' },
  { img: 'cas-estatua-marduk-procissao', leg: 'Interpretação artística do regresso da estátua de Marduk a Babilónia; não documenta uma procissão específica. Ilustração gerada por IA.' },
  { h: 'Os Cassitas depois da queda' },
  'Depois de 1155 a.C., os Cassitas desaparecem como poder, mas não como povo: voltam aos Zagros e os gregos, séculos depois, falam dos **Cosseus**, montanheses famosos pelos assaltos a quem atravessava as montanhas. Alexandre Magno submete-os em 324 – 323 a.C. A sua língua desapareceu sem deixar descendentes conhecidos.',
  { h: 'A redescoberta dos Cassitas' },
  { linha: [
    { d: '1887', t: 'Cartas de Amarna', x: 'Novos textos mostram a Babilónia cassita como grande potência em correspondência com o Egito.' },
    { d: '1889 – 1900', t: 'Penn em Nipur', x: 'As escavações da Universidade da Pensilvânia, dirigidas por John Punnett Peters e depois outros, dão milhares de tabuinhas cassitas.' },
    { d: '1897 – 1902', t: 'Susa', x: 'A missão francesa de Jacques de Morgan encontra os despojos da Babilónia, entre eles o Código de Hamurabi.' },
    { d: '1930s', t: 'Uruk', x: 'Escavações alemãs encontram a fachada de tijolos moldados do templo de Karaindash, em parte levada para Berlim.' },
    { d: '1942 – 1945', t: 'Dur-Kurigalzu', x: 'Taha Baqir e Seton Lloyd escavam o palácio, os templos e o zigurate de Aqar Quf.' },
    { d: '2003', t: 'Saque no Iraque', x: 'O saque do Museu do Iraque atinge as coleções; em Uruk, parte da fachada guardada em Bagdade perde-se.' },
    { d: '2022', t: 'Conservação de Dur-Kurigalzu', x: 'Uma missão ítalo-iraquiana inicia o levantamento sistemático do sítio, ameaçado por infiltrações de água, urbanização e saques; seguem-se projetos de conservação.' }
  ] },
  { img: 'cas-penn-nippur', leg: 'Escavações do templo de Nipur, fotografadas por John Henry Haynes em 1893; missão da Universidade da Pensilvânia.' },
  { img: 'cas-museu-iraque', leg: 'Entrada do Museu do Iraque, Bagdade, com uma estátua de Nabu diante da fachada.' },
  { caixa: 'Para visitar', texto: 'No **Louvre** (Paris): o Código de Hamurabi, a estela de Naram-Sin, o obelisco de Manishtushu e kudurrus cassitas, como o de Meli-Shipak II. No **Museu Britânico** (Londres): kudurrus e cartas de Amarna. No **Museu de Pérgamo** (Berlim): a fachada de tijolos moldados de Uruk, o altar de Tukulti-Ninurta I e as cartas de Amarna. Em Bagdade: o **Museu Nacional do Iraque** e, a cerca de 30 km, **Dur-Kurigalzu (Aqar Quf)**, onde o zigurate ainda se avista de longe (a visita depende das condições de segurança).' }
];

const quiz = [
  { p: 'Como chamavam os Cassitas ao seu reino da Babilónia?', op: ['Akkad', 'Karduniash', 'Ashur', 'Elam'], certa: 1, exp: 'O reino cassita chamava-se Karduniash (também Karanduniash), nome que aparece nas cartas de Amarna.' },
  { p: 'Quanto tempo, aproximadamente, durou a dinastia cassita na Babilónia?', op: ['Cerca de 50 anos', 'Cerca de 150 anos', 'Cerca de 440 anos', 'Cerca de 1000 anos'], certa: 2, exp: 'De c. 1595 a 1155 a.C., a mais longa dinastia da Babilónia (as listas de reis dão números mais altos, por sobreposições).' },
  { p: 'A que família pertence a língua cassita?', op: ['Semita', 'Indo-europeia', 'É uma língua isolada, sem família conhecida', 'Egípcia'], certa: 2, exp: 'É uma língua isolada; algumas propostas ligam-na ao hurro-urartiano, mas sem consenso.' },
  { p: 'De onde provavelmente vieram os Cassitas?', op: ['Dos montes Zagros', 'Do Egito', 'Da Anatólia', 'Do Golfo Pérsico'], certa: 0, exp: 'A maioria dos historiadores aponta os Zagros, embora se assinale que é uma hipótese e não uma certeza.' },
  { p: 'Que cidade fundou Kurigalzu I, perto da atual Bagdade?', op: ['Nipur', 'Ur', 'Dur-Kurigalzu', 'Susa'], certa: 2, exp: 'Dur-Kurigalzu (Aqar Quf), «fortaleza de Kurigalzu», c. 1390 a.C.; a atribuição a Kurigalzu II foi durante muito tempo comum.' },
  { p: 'O que é um kudurru?', op: ['Um tipo de carro de guerra', 'Uma estela de pedra que registava doações de terra e amaldiçoava quem as violasse', 'Um deus cassita', 'Uma moeda'], certa: 1, exp: 'Os kudurrus registavam doações de terras, com símbolos dos deuses e maldições contra quem as violasse.' },
  { p: 'Quem recuperou, segundo uma inscrição, a estátua de Marduk levada pelos Hititas?', op: ['Agum II', 'Burna-Buriash II', 'Tukulti-Ninurta I', 'Shutruk-Nahhunte'], certa: 0, exp: 'Agum II (Agum-kakrime) afirma tê-lo feito, mas a historicidade do episódio é debatida.' },
  { p: 'Que rei hitita saqueou Babilónia em 1595 a.C., abrindo caminho aos Cassitas?', op: ['Suppiluliuma I', 'Mursili I', 'Hattusili III', 'Muwatalli II'], certa: 1, exp: 'Mursili I saqueou Babilónia em 1595 a.C. (cronologia média), pondo fim à dinastia de Hamurabi.' },
  { p: 'Onde se encontraram as cartas entre os reis da Babilónia e o faraó?', op: ['Em Nipur', 'Em Amarna, no Egito', 'Em Susa', 'Em Hattusa'], certa: 1, exp: 'As cartas de Amarna foram achadas em 1887 em Amarna (Akhetaton), no Egito.' },
  { p: 'Que língua se usava na diplomacia entre as grandes potências do Bronze Final?', op: ['Egípcio', 'Cassita', 'Acádio', 'Hitita'], certa: 2, exp: 'O acádio era a língua comum da diplomacia, mesmo quando nenhum dos reis o tinha como língua materna.' },
  { p: 'De que se queixava Burna-Buriash II ao faraó?', op: ['Que o Nilo secara', 'Do ouro de menos, de mercadores mortos e de enviados assírios no Egito', 'Que lhe tinham pedido tributo', 'Da falta de cavalos'], certa: 1, exp: 'As cartas de Burna-Buriash II falam de ouro insuficiente, de mercadores mortos em Canaã e de Assírios que ele via como vassalos.' },
  { p: 'Que rei assírio conquistou Babilónia c. 1225 a.C. e levou a estátua de Marduk?', op: ['Ashur-uballit I', 'Sargão II', 'Tukulti-Ninurta I', 'Assurbanípal'], certa: 2, exp: 'Tukulti-Ninurta I derrotou Kashtiliash IV e intitulou-se rei de Sumer e Acad.' },
  { p: 'Quem pôs fim à dinastia cassita c. 1155 a.C.?', op: ['Os Egípcios', 'Os Elamitas', 'Os Medos', 'Os Gregos'], certa: 1, exp: 'Shutruk-Nahhunte invadiu em c. 1158 a.C. e o filho Kutir-Nahhunte conquistou Babilónia c. 1155 a.C.' },
  { p: 'Que obra famosa foi levada para Susa pelos Elamitas e encontrada ali em 1901 – 1902?', op: ['O Estandarte de Ur', 'O Código de Hamurabi', 'A Porta de Ishtar', 'A Epopeia de Gilgamesh'], certa: 1, exp: 'A estela do Código de Hamurabi, provavelmente de Sippar, foi saqueada e achada em Susa pela missão de Jacques de Morgan; está hoje no Louvre.' },
  { p: 'Quem recuperou a estátua de Marduk do Elão depois da queda cassita?', op: ['Kurigalzu II', 'Nabucodonosor I', 'Agum II', 'Meli-Shipak II'], certa: 1, exp: 'Nabucodonosor I, da II Dinastia de Isin, que derrotou os Elamitas; o episódio pode ter sido embelezado depois.' }
];

export default {
  id: 'cassitas',
  cor: '#7f5f9f',
  emblema: '../assets/img/cassitas.png',
  nome:    { pt: 'Cassitas', en: 'Kassites' },
  periodo: { pt: 'c. 1595 a.C. – 1155 a.C.', en: 'c. 1595 BC – 1155 BC' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
