// CALDEUS E NEOBABILÓNIOS — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas aproximadas, na «cronologia média». a.C. = antes de Cristo. Esta página foca-se nas tribos caldeias e na dinastia que delas ficou conhecida como «caldeia» (626–539 a.C.);
// a história geral de Babilónia (Hamurabi, cassitas, etc.) está na página «Babilónia».
// Imagens: cada {img:'id'} procura o ficheiro  caldeus/img/id.jpg  (ver IMAGENS_CALDEUS.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'Os **Caldeus** foram um conjunto de tribos de língua semita que, a partir do início do I milénio a.C., se instalaram no sul da Babilónia, nos pântanos e nas margens do Eufrates junto ao Golfo Pérsico. Durante mais de dois séculos foram a dor de cabeça da Assíria: os seus chefes, como **Merodaque-Baladan II**, tomaram Babilónia várias vezes e arrastaram os reis assírios para guerras que acabaram na destruição da cidade, em 689 a.C.',
    'Em 626 a.C., aproveitando a crise da Assíria, **Nabopolassar** fez-se rei de Babilónia e, com os medas, destruiu o império assírio. Os historiadores chamam-lhe **Império Neobabilónico** (ou «caldeu») ao que veio a seguir: **Nabucodonosor II**, a conquista de Jerusalém, o Exílio, a Porta de Ishtar, e por fim o enigmático **Nabonido**, derrubado por Ciro em 539 a.C. Foi um império de menos de noventa anos, mas deixou ao mundo a astronomia dos «caldeus», uma das imagens mais fortes da Bíblia e as ruínas de uma das cidades mais famosas da Antiguidade.'
  ] },
  { img: 'cal-mapa-oriente-600', leg: 'Mapa do Próximo Oriente por volta de 600 a.C., com os reinos neobabilónico, egípcio, medo e lídio.' },
  { h: 'Onde ficava' },
  'O território dos Caldeus era o **sul da Mesopotâmia**, nos pântanos e baixas do Eufrates e do Tigre, entre a região de Babilónia e o Golfo Pérsico (hoje o sul do Iraque). Os Assírios chamavam-lhe *Māt Kaldu*, «terra dos Caldeus». As tribos preferiam as zonas húmidas, cheias de canaviais, ilhas e canais, que um exército pesado mal conseguia atravessar; foi essa geografia que os protegeu tantas vezes dos Assírios.',
  { img: 'cal-pantanais-sul', leg: 'Pântanos da Mesopotâmia, no sul do Iraque: paisagem contemporânea.' },
  'Quando Nabopolassar e Nabucodonosor II se tornaram senhores de um império, o «centro» passou para **Babilónia**, a cidade no Eufrates onde se fixou a capital, e o poder estendeu-se do Golfo Pérsico ao Mediterrâneo: Síria, Fenícia, Judá e partes da Arábia, da Cilícia e do planalto iraniano.',
  { h: 'Quando existiu' },
  'As datas seguem a «cronologia média» e algumas são discutidas, sobretudo as das origens.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Chegada e fixação das tribos', 'c. 1000 – 850 a.C.', 'Grupos de língua semita instalam-se no sul da Babilónia; o momento exato da chegada e a origem são debatidos'],
    ['Primeira menção escrita', 'c. 852 a.C.', 'Anais do rei assírio Salmanasar III referem os «Kaldu» (Caldeus)'],
    ['Os chefes caldeus contra a Assíria', 'c. 850 – 626 a.C.', 'Mukin-zeri, Merodaque-Baladan II, as guerras com Sargão II e Senaquerib; Babilónia destruída em 689 a.C.'],
    ['Império Neobabilónico (dinastia «caldeia»)', '626 – 539 a.C.', 'Nabopolassar, Nabucodonosor II, Amel-Marduk, Neriglissar, Labashi-Marduk, Nabonido'],
    ['Depois de 539 a.C.', 'depois de 539 a.C.', 'Domínio persa; «caldeu» passa a significar astrónomo-astrólogo; Babilónia continua a produzir ciência e contratos até à época helenística']
  ] } },
  { img: 'cal-aldeia-caldeia', leg: 'Reconstituição hipotética de uma aldeia caldeia nos pântanos do sul da Babilónia, c. 700 a.C., com cabanas e barcos de caniço e tamareiras. Ilustração gerada por IA.' },
  { h: 'Quem eram os Caldeus?' },
  'Os Caldeus falavam uma língua semita ocidental, próxima do aramaico, e viviam organizados em **tribos ou «casas»** (*bītu*), cada uma com o nome de um antepassado: **Bit-Yakin** (a mais poderosa, na costa do Golfo), **Bit-Amukani** (no Eufrates, a sul de Babilónia), **Bit-Dakkuri** (à volta de Borsippa), entre outras. Cada casa era governada por um chefe, que os Assírios por vezes tratam como «rei». Tinham cidades fortificadas, palmeirais e gado, e adotaram desde cedo a língua, os deuses e os costumes da Babilónia, de que se sentiam herdeiros.',
  'Não eram, portanto, «nómadas de fora» que destruíam a civilização mesopotâmica: a maior parte tornou-se parte dela. Os Caldeus eram um dos vários grupos do sul (outros eram os **arameus**, como os Puqudu, e os próprios Babilónios das cidades), e o rótulo «caldeu» é usado de formas diferentes nas fontes. A origem das tribos, e a questão de saber se Nabopolassar e os seus sucessores eram mesmo de origem caldeia, continuam debatidas: nas suas próprias inscrições os reis neobabilónicos quase nunca se chamam «caldeus», e é sobretudo a tradição grega e bíblica que os apelida assim.',
  { h: 'Porque importam' },
  { lista: [
    '**Contra a Assíria:** foram os chefes caldeus que mantiveram aberta, durante um século, a resistência babilónica ao império mais poderoso do seu tempo.',
    '**Fim do império assírio:** Nabopolassar e os medas destruíram Nínive em 612 a.C., o acontecimento que mudou o mapa do Próximo Oriente.',
    '**O Exílio:** a conquista de Jerusalém e a deportação dos judeus para a Babilónia estão na base da formação de grande parte da Bíblia hebraica e da diáspora judaica.',
    '**A cidade:** a Porta de Ishtar, a Via Processional e o Etemenanki, ou «torre de Babel», pertencem a esta época.',
    '**Astronomia:** os Diários Astronómicos e os métodos matemáticos de previsão dos eclipses e dos planetas, de que deriva a palavra «caldeu» como sinónimo de astrólogo.',
    '**Arquivos:** as tabuinhas das famílias Egibi e Murashu e as dos exilados de Al-Yahudu mostram a vida económica e social como poucas épocas da Antiguidade.'
  ] },
  { img: 'cal-dragao-sirrush', leg: 'Dragão mušḫuššu em tijolo vidrado da Porta de Ishtar, Museu de Pérgamo, Berlim.' },
  { caixa: 'Os Caldeus hoje', texto: 'As ruínas de **Babilónia** fazem parte, desde 2019, da lista do Património Mundial da UNESCO. O nome «caldeu» sobrevive também por outras vias: nos textos da Bíblia e dos autores gregos e romanos como sinónimo de astrólogo, e no nome da **Igreja Católica Caldeia**, cristãos do Iraque que o usam desde a época moderna (séc. XV–XVI), sem relação étnica demonstrada com os Caldeus da Antiguidade.' },
  { img: 'cal-ruinas-unesco', leg: 'Ruínas de Babilónia, Iraque.' }
];

const linha = [
  'Datas aproximadas na «cronologia média». Para os reinados do Império Neobabilónico as datas são firmes (há crónicas, tabuinhas datadas e registos astronómicos); para as origens dos Caldeus são muito mais incertas.',
  { linha: [
    { d: 'c. 1000 – 850 a.C.', t: 'As tribos caldeias instalam-se no sul', x: 'Grupos de língua semita, os **Caldeus**, fixam-se nas terras baixas do sul da Babilónia, entre aldeias de arameus e cidades antigas. A data e o lugar de origem são debatidos.' },
    { d: 'c. 852 a.C.', t: 'Primeira menção escrita', x: 'Os anais do rei assírio **Salmanasar III** falam dos *Kaldu* e da terra de **Bit-Yakin**. A partir daí aparecem em quase todas as guerras assírias no sul.' },
    { d: 'c. 732 – 729 a.C.', t: 'Mukin-zeri, um rei caldeu em Babilónia', x: '**Nabu-mukin-zeri**, chefe da casa de **Bit-Amukani**, toma o trono de Babilónia. É deposto por **Tiglat-Pileser III**, que se coroa ele próprio rei de Babilónia em 729 a.C.' },
    { d: 'c. 721 – 710 a.C.', t: 'Merodaque-Baladan II rei de Babilónia', x: 'O chefe de Bit-Yakin, **Marduk-apla-iddina II**, a Bíblia chama-lhe Merodaque-Baladan, aproveita a morte de Salmanasar V para tomar Babilónia e reina durante cerca de doze anos, com apoio de **Elam**. Em 710 a.C. **Sargão II** invade o sul e expulsa-o; em 709 Sargão recebe a coroa de Babilónia.' },
  ] },
  { img: 'cal-kudurru-merodaque', leg: 'Kudurru de Merodaque-Baladan II (VA 2663), Museu do Antigo Oriente, Berlim.' },
  { linha: [
    { d: '703 a.C.', t: 'A segunda tentativa', x: 'Quando Sargão morre em combate (705), Merodaque-Baladan volta, toma Babilónia por poucos meses (703 a.C.), mas é derrotado por **Senaquerib** em **Kish**. O chefe foge para Elam, onde acabará por morrer. Segundo a Bíblia, enviou uma embaixada ao rei Ezequias de Judá, em data discutida.' },
  ] },
  { img: 'cal-prisma-sinaqueribe', leg: 'Prisma de Taylor de Senaqueribe, Museu Britânico.' },
  { linha: [
    { d: '694 – 689 a.C.', t: 'A guerra de Senaquerib contra o sul e Elam', x: 'Senaquerib atravessa o Golfo Pérsico com uma frota para atacar os Caldeus refugiados em Elam (694 a.C.). Os Elamitas respondem levando preso o filho do rei, nomeado rei de Babilónia, **Ashur-nadin-shumi** (que desaparece). Segue-se a batalha de **Halule** (691 a.C.), de resultado indeciso.' },
    { d: '689 a.C.', t: 'Senaquerib destrói Babilónia', x: 'Depois de um cerco de cerca de quinze meses, Senaquerib toma Babilónia, saqueia-a e, segundo os seus próprios anais, abre canais para a inundar. A violência contra a cidade do deus Marduk chocou até alguns Assírios. Até que ponto a destruição foi total é debatido: as escavações mostram menos estragos do que o rei descreve.' },
  ] },
  { img: 'cal-relevo-pantanos', leg: 'Pormenor de um relevo assírio de Nínive com um barco de caniço durante uma campanha nos pântanos do sul do Iraque, c. 640–620 a.C., Museu Britânico.' },
  { linha: [
    { d: '681 – 648 a.C.', t: 'Reconstrução e guerra civil', x: 'Senaquerib é assassinado pelos filhos (681 a.C.). **Esarhadão** reconstrói Babilónia; o seu filho **Assurbanípal** devolve-lhe a estátua de Marduk. Em 652–648 a.C. o irmão **Shamash-shum-ukin**, rei de Babilónia, revolta-se contra Assurbanípal; a guerra acaba em cerco, fome e fogo, e deixa a Assíria exausta.' },
    { d: '626 a.C.', t: 'Nabopolassar proclama-se rei', x: 'Depois de anos de agitação, **Nabopolassar**, que diz ter sido «filho de ninguém», é coroado rei de Babilónia em novembro de 626 a.C. A sua origem (caldeu? de Uruk?) é debatida. Inicia a chamada dinastia «caldeia», que em rigor acaba em 556 a.C.: Nabonido já não era da família.' },
    { d: '614 – 609 a.C.', t: 'Aliança com os medas; cai a Assíria', x: 'Os **medas** de Ciáxares tomam **Assur** (614 a.C.); aliam-se a Nabopolassar. Em **agosto de 612 a.C.** a coligação toma e arrasa **Nínive**, depois de três meses de cerco. O último rei assírio resiste em **Harran** até 610–609 a.C., com ajuda do Egito.' },
  ] },
  { img: 'cal-cerco-nineve', leg: 'Interpretação artística do cerco de Nínive por forças babilónicas e medas em 612 a.C. Ilustração gerada por IA.' },
  { linha: [
    { d: '605 a.C.', t: 'Carquemis', x: 'O príncipe **Nabucodonosor** derrota o exército egípcio do faraó **Neco II** em **Carquemis** e domina a Síria. Nabopolassar morre pouco depois (agosto) e o filho sobe ao trono como **Nabucodonosor II**.' },
    { d: '604 a.C.', t: 'Asquelon cai', x: 'Nabucodonosor toma e queima **Asquelon**, cidade filisteia; as escavações confirmam uma camada de destruição desta data.' },
    { d: '601 a.C.', t: 'Choque com o Egito', x: 'Uma batalha na fronteira do Egito, com grandes perdas dos dois lados, obriga o exército babilónico a recuar para recompor. O rei de Judá, **Jeoiaquim**, aproveita para se revoltar.' },
    { d: '597 a.C.', t: 'Primeira conquista de Jerusalém', x: 'A Crónica Babilónica regista que o rei «conquistou a cidade de Judá» a **2 de Adar** (16 de março de 597 a.C.), capturou o rei, **Joaquim** (Jeconias), que sucedera ao pai Jeoiaquim, e pôs lá outro, **Sedecias**. Leva o rei e um número debatido de deportados: a Bíblia dá números que variam entre cerca de 3.000 e 10.000.' },
  ] },
  { img: 'cal-cronica-nabucodonosor', leg: 'Crónica Babilónica BM 21946, relativa aos anos 605–594 a.C., Museu Britânico.' },
  { linha: [
    { d: '587 ou 586 a.C.', t: 'Destruição de Jerusalém', x: 'Depois de nova revolta, Nabucodonosor cerca Jerusalém durante cerca de dezoito meses, destrói a cidade e o **Primeiro Templo**, e deporta mais gente. A data (587 ou 586) é debatida, porque a crónica deste ano não se conservou. É o **Exílio da Babilónia**.' },
  ] },
  { img: 'cal-exilio-caminho', leg: 'Interpretação de famílias deportadas de Jerusalém a caminho da Babilónia, c. 597 a.C., atravessando a estepe síria sob escolta. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 585 – 573 a.C.', t: 'O cerco de Tiro', x: 'Segundo o historiador Flávio Josefo, que cita fontes mais antigas, Nabucodonosor cerca **Tiro** durante treze anos. A cidade-ilha não foi tomada à força e o fim do cerco parece ter sido uma submissão negociada; os pormenores são incertos.' },
    { d: 'c. 575 a.C.', t: 'A Porta de Ishtar', x: 'Em Babilónia, **Nabucodonosor II** completa a monumental porta revestida de tijolos vidrados azuis, com touros e dragões. Reconstrói palácios, muralhas, Esagila e o Etemenanki.' },
    { d: '568 – 567 a.C.', t: 'Campanha contra o Egito', x: 'Um fragmento de tabuinha refere uma expedição contra o faraó **Amásis** no 37.º ano de Nabucodonosor. Houve combate, mas não ocupação do Egito.' },
    { d: '562 a.C.', t: 'Morre Nabucodonosor II', x: 'Depois de 43 anos de reinado, o rei morre em outubro. Sobe ao trono o filho **Amel-Marduk** (o Evil-Merodaque da Bíblia), que, segundo o Livro dos Reis, liberta o rei Joaquim (Jeconias) da prisão.' },
    { d: '560 – 556 a.C.', t: 'Neriglissar e Labashi-Marduk', x: '**Neriglissar**, genro de Nabucodonosor, derruba Amel-Marduk e reina até 556 a.C. O filho, **Labashi-Marduk**, ainda jovem, é deposto ao fim de poucos meses.' },
    { d: '556 a.C.', t: 'Nabonido sobe ao trono', x: 'Um golpe de estado leva ao trono **Nabonido**, que não era de família real e era devoto do deus-Lua **Sin**, de Harran.' },
    { d: 'c. 553 – 543 a.C.', t: 'Nabonido em Teima', x: 'O rei parte para o oásis de **Teima**, na Arábia, e lá fica cerca de dez anos, deixando o filho **Belsazar** à frente do exército e da administração. A Crónica de Nabonido regista que, nesses anos, a festa do Akitu não se celebrou, um grave motivo de descontentamento. As razões da ausência são debatidas.' },
    { d: '550 a.C.', t: 'Ciro derrota os medas', x: '**Ciro II**, rei de Anshan, vence o rei dos medas e junta os dois reinos. Dentro de poucos anos é o senhor do planalto iraniano e da Anatólia.' },
    { d: '539 a.C.', t: 'Queda de Babilónia', x: 'Ciro derrota o exército babilónico em **Opis** (setembro/outubro) e Sippar rende-se; o general **Ugbaru** entra em Babilónia a 12 de outubro sem combate. O próprio Ciro entra a 29 de outubro. Termina a independência babilónica.' },
  ] },
  { img: 'cal-cronica-nabonido', leg: 'Crónica de Nabonido BM 35382, Museu Britânico.' },
  { img: 'cal-cilindro-ciro', leg: 'Cilindro de Ciro, Museu Britânico.' },
  { linha: [
    { d: 'c. 538 a.C. em diante', t: 'Os exilados e o novo império', x: 'Sob o domínio persa, os deportados judeus podem regressar a Jerusalém, segundo a Bíblia; muitos ficam na Babilónia e continuam a viver ali durante séculos.' },
    { d: '652 – 61 a.C.', t: 'Os Diários Astronómicos', x: 'A série das observações do céu e das notícias de cada mês, redigida em Babilónia durante cerca de seiscentos anos, vai até 61 a.C.' },
    { d: '1899 – 1917', t: 'Koldewey escava Babilónia', x: 'O arqueólogo alemão **Robert Koldewey** revela a cidade de Nabucodonosor II: palácios, Via Processional, Porta de Ishtar e as fundações do Etemenanki.' },
    { d: '2019', t: 'Património Mundial', x: 'As ruínas de Babilónia são inscritas na lista do Património Mundial da UNESCO.' }
  ] }
];

const mapa = [
  'O mapa dos Caldeus tem duas escalas: o **sul tribal** de onde saíram os seus chefes, e a **Babilónia imperial**, cidade e província do império de Nabucodonosor, no centro do mundo conhecido.',
  { tabela: { cab: ['Lugar', 'Onde / hoje', 'Para que ficou conhecido nesta história'], linhas: [
    ['Bit-Yakin', 'Costa do Golfo Pérsico, sul do Iraque', 'Casa tribal de Merodaque-Baladan II; refúgio nos pântanos; capital Dur-Yakin'],
    ['Bit-Amukani', 'Eufrates, a sul de Babilónia', 'Casa tribal de Mukin-zeri, que foi rei de Babilónia (c. 732–729 a.C.)'],
    ['Bit-Dakkuri', 'Região de Borsippa', 'Casa tribal que dominou o centro-sul da Babilónia'],
    ['Babilónia', 'Hilla, Iraque', 'Capital neobabilónica; Porta de Ishtar, Via Processional, Etemenanki, palácios'],
    ['Borsippa', 'Birs Nimrud, perto de Hilla', 'Cidade do deus Nabu e centro de astronomia'],
    ['Nínive', 'Mossul, Iraque', 'Capital assíria, tomada em 612 a.C.; Jardins de Senaquerib (hipótese de Dalley)'],
    ['Harran', 'Sul da Turquia', 'Última capital assíria (610–609 a.C.); cidade do deus Sin; terra de Nabonido e da mãe'],
    ['Carquemis', 'Fronteira Síria–Turquia', 'Batalha de 605 a.C. contra o Egito'],
    ['Jerusalém', 'Israel/Palestina', 'Tomada em 597 e destruída em 587/586 a.C.'],
    ['Tiro', 'Líbano', 'Cidade fenícia, cerco de c. 13 anos'],
    ['Teima', 'Noroeste da Arábia Saudita', 'Oásis onde viveu Nabonido durante cerca de dez anos'],
    ['Ur', 'Tell al-Muqayyar, Iraque', 'Cidade do deus Lua; zigurate restaurado por Nabonido; Ennigaldi-Nanna'],
    ['Opis', 'Perto de Bagdade', 'Batalha de 539 a.C. entre Ciro e Nabonido'],
    ['Nippur', 'Nuffar, Iraque', 'Arquivo da família Murashu (séc. V a.C.)']
  ] } },
  { img: 'cal-planta-babilonia', leg: 'Planta de Babilónia segundo as escavações de Robert Koldewey.' },
  { h: 'A Babilónia de Nabucodonosor' },
  'A cidade do século VI a.C. era enorme para a época, com duas muralhas concêntricas de tijolo, canais, pontes sobre o Eufrates e um bairro sagrado no centro. As escavações encontraram a **cidade interior** (com cerca de 4 km², dentro das muralhas) e traços de uma cidade exterior. Os números exagerados que o historiador grego Heródoto dá para as muralhas não resistem à arqueologia.',
  { img: 'cal-babilonia-reconstrucao', leg: 'Reconstituição artística hipotética de Babilónia, c. 570 a.C., com o Eufrates, a Porta de Ishtar, a Via Processional e o Etemenanki. A composição não é uma planta arqueológica. Ilustração gerada por IA.' },
  { h: 'A Via Processional e a Porta de Ishtar' },
  'A **Via Processional** (*Aibur-shabu*, «o inimigo não passa») levava ao recinto sagrado de Marduk e atravessava a **Porta de Ishtar**, a oitava porta da cidade. Era ladeada de muros de tijolo vidrado com leões, e na porta alternam touros de **Adad** e dragões **mušḫuššu** de **Marduk**, sobre fundo azul. Era por ali que passava a procissão do ano novo, a festa do Akitu.',
  { img: 'cal-leoes-via', leg: 'Leão de tijolo vidrado da Via Processional de Babilónia, Museu de Pérgamo.' },
  { h: 'Esagila e Etemenanki' },
  'No centro estava o recinto do deus **Marduk**: o templo **Esagila** e o zigurate **Etemenanki** («casa do fundamento do céu e da terra»). Escavações e uma tabuinha copiada em Uruk, o «Texto de Esagila», dão ao zigurate uma base quadrada de cerca de **91 m** de lado e cerca da mesma altura, em sete degraus; a altura vem do texto e não da arqueologia, por isso é incerta. Muitos estudiosos associam o Etemenanki à «torre de Babel» da Bíblia, uma ligação provável mas não comprovada.',
  { img: 'cal-etemenanki-modelo', leg: 'Modelo de reconstrução do Etemenanki no Museu de Pérgamo, Berlim.' },
  { img: 'cal-estela-torre-babel', leg: 'Cilindro de Nabucodonosor II com inscrição que comemora a reconstrução do Etemenanki, Metropolitan Museum of Art (86.11.284). Alternativa à estela da Coleção Schøyen.' },
  { h: 'Os palácios e os Jardins Suspensos: um debate' },
  'Nabucodonosor II construiu palácios do lado norte e do lado sul de Babilónia, e a tradição grega e o historiador babilónico Beroso, citado por Flávio Josefo, falam de **jardins em terraços** que ele teria mandado fazer para a mulher meda, **Amytis**. Mas nenhum texto cuneiforme de Babilónia os menciona, e as escavações não os encontraram, apesar de décadas de procura. A assiriologista **Stephanie Dalley** propôs em 2013 que os Jardins estavam em **Nínive** e foram obra de **Senaquerib**, com um sistema de aquedutos que existe de facto; é uma hipótese discutida e não consensual. Ver também a página «Babilónia».',
  { img: 'cal-jardins-nineve', leg: 'Relevo do banquete de Assurbanípal no jardim, Nínive, Museu Britânico.' },
  { h: 'Teima, o oásis do rei' },
  'Teima (Tayma), no noroeste da Arábia Saudita, era um oásis comercial onde o incenso e a mirra do sul da Arábia seguiam para norte. Nabonido ocupou-a e fez dela a sua residência durante cerca de dez anos. Inscrições e restos arqueológicos do século VI a.C. confirmam a sua presença.',
  { img: 'cal-teima-oasis', leg: 'Ruínas do palácio de Al-Hamra, Teima (Tayma), Arábia Saudita.' },
  { h: 'Ur, a cidade do deus Lua' },
  'Em Ur, Nabonido restaurou o zigurate do deus Lua Sin/Nanna e instalou ali a filha **Ennigaldi-Nanna** como sacerdotisa.',
  { img: 'cal-zigurate-ur', leg: 'Zigurate de Ur, Iraque.' },
  { h: 'As rotas' },
  { lista: [
    '**O Eufrates:** a grande estrada de Babilónia, ligava a cidade ao Golfo Pérsico, a sul, e à Síria, a norte.',
    '**A rota da Síria:** caminho dos exércitos até Carquemis, Hamat e à Palestina.',
    '**Teima e a Arábia:** rota do incenso entre o Iémen e o Mediterrâneo; Nabonido controlou uma parte.',
    '**O Golfo Pérsico:** comércio de pérolas, cobre e madeira com Dilmun (Bahrein) e outros portos.'
  ] }
];

const sociedade = [
  { h: '1. Política e administração' },
  'O império neobabilónico foi, acima de tudo, um **reino de um único rei**, apoiado em governadores de província, nos grandes templos e numa elite de famílias de escribas e comerciantes. Não tinha um aparelho tão pesado como o assírio, mas conseguia cobrar tributo e levantar tropas de um território imenso. A sucessão era frágil: dos seis reis, três (Neriglissar, Labashi-Marduk e Nabonido) chegaram ao trono ou perderam-no através de golpes de palácio. Os reis dependiam do apoio do clero, o que ajuda a explicar a crise de Nabonido.',
  { cit: 'Eu era filho de ninguém.', fonte: 'Nabopolassar, numa inscrição real (fórmula repetida em vários textos; tradução do acádio)' },
  'Uma prática central do império era a **deportação**: povos conquistados, como os judeus, eram colocados em terras da Babilónia, onde trabalhavam em agricultura e obras, tinham os seus chefes e conservavam a identidade. Era uma forma de enfraquecer as regiões revoltadas e de repovoar a Babilónia.',
  { h: '2. Classes sociais' },
  { lista: [
    '**O rei e a corte:** família real, altos funcionários e comandantes.',
    '**Os «filhos de Babilónia» (*mār bānê*):** cidadãos livres das cidades, proprietários, escribas, sacerdotes e mercadores. Formavam a elite.',
    '**Camponeses e arrendatários:** muitos trabalhavam terra de templos ou de grandes famílias.',
    '**Dependentes do templo (*širku*):** pessoas oferecidas ao deus, que trabalhavam para o templo e eram marcadas com o símbolo da divindade.',
    '**Escravos:** de guerra ou por dívida; podiam ser comprados, vendidos, alugados e, por vezes, alforriados.',
    '**Deportados:** como os judeus de Al-Yahudu, com estatuto especial, mas com direitos de contrato.'
  ] },
  { h: '3. Religião' },
  'A religião era politeísta e centrada nos **templos**, vistos como casas dos deuses, onde os sacerdotes alimentavam, vestiam e serviam as estátuas todos os dias. Em Babilónia reinava **Marduk**, em Borsippa **Nabu**, em Ur e Harran **Sin**, e a lista seguinte mostra os mais importantes nesta época.',
  { tabela: { cab: ['Deus / deusa', 'Domínio', 'Cidade principal'], linhas: [
    ['Marduk', 'Chefe dos deuses, protetor de Babilónia', 'Babilónia (Esagila)'],
    ['Nabu', 'Escrita, sabedoria, filho de Marduk', 'Borsippa (Ezida)'],
    ['Sin (Nanna)', 'Lua; adivinhação; tempo', 'Ur e Harran'],
    ['Shamash', 'Sol e justiça', 'Sippar e Larsa'],
    ['Ishtar', 'Amor e guerra', 'Babilónia e Uruk'],
    ['Adad', 'Tempestade e chuva', 'Vários; touro da Porta de Ishtar'],
    ['Nergal', 'Mundo dos mortos, peste, guerra', 'Kutha']
  ] } },
  { h: 'Sin contra Marduk: o conflito de Nabonido' },
  'Nabonido era devoto de **Sin**, o deus de Harran onde a mãe era devota. Nas suas inscrições dá a Sin títulos que eram de Marduk e reconstruiu o templo de Sin em Harran, o **Ehulhul**. Os textos de propaganda persas, como a **Crónica de Nabonido** e o **Relato em Verso**, acusam-no de ter desprezado Marduk, ignorado o Akitu e levado para Babilónia as estátuas de deuses de outras cidades. Os historiadores desconfiam deste retrato, porque ele foi escrito para justificar Ciro; mas mostra que houve uma tensão real. Um texto em aramaico dos Manuscritos do Mar Morto, a **Oração de Nabonido**, conta que o rei sofreu uma doença durante sete anos em Teima e foi curado por um judeu; muitos estudiosos pensam que esta tradição está por trás do episódio da loucura de Nabucodonosor no Livro de Daniel (que seria então uma lenda deslocada). É debatido.',
  { h: '4. Economia' },
  'A economia assentava na **agricultura irrigada** (cevada, tâmaras, sésamo), nos **templos** (grandes proprietários, com oficinas e rebanhos), no **comércio** e na **prata**, que servia de moeda de conta (o *shekel*). Os campos eram arrendados, e os empréstimos, normalmente a cerca de 20% ao ano, financiavam colheitas e viagens. Os arquivos privados são abundantes:',
  { lista: [
    '**A família Egibi (Babilónia):** uma casa de negócios ao longo de cinco ou seis gerações (séc. VII – V a.C.), com mais de mil tabuinhas. Emprestavam, compravam e vendiam terras, escravos e casas, e geriam dotes. Não eram propriamente um banco, mas hoje chamam-lhe por vezes «a casa bancária» de Babilónia.',
    '**A família Murashu (Nippur):** arquivo de mais de setecentas tabuinhas, c. 455–403 a.C., já do período persa. Arrendavam terras a pessoas ligadas à coroa e cobravam impostos em nome delas; mostram uma economia de continuidade entre os dois impérios.',
    '**O arquivo de Al-Yahudu:** cerca de 200 tabuinhas dos judeus exilados (ver abaixo).'
  ] },
  { img: 'cal-contrato-neobabilonico', leg: 'Tabuinha jurídica neobabilónica de Uruk, datada do 11.º ano de Nabopolassar (615 a.C.), Birmingham Museum and Art Gallery. Alternativa à tabuinha de contrato do Museu Britânico.' },
  { img: 'cal-casa-egibi', leg: 'Interpretação de uma casa comercial babilónica, c. 550 a.C., evocando a atividade de famílias como os Egibi; não representa um edifício identificado. Ilustração gerada por IA.' },
  { img: 'cal-tabuinha-murashu', leg: 'Fac-símile de uma tabuinha de arrendamento do arquivo Murashu, Nippur, século V a.C., exposto no Museu da Diáspora, Telavive; período aqueménida.' },
  { h: '5. Os judeus na Babilónia' },
  'A Bíblia fala de milhares de deportados «junto aos rios da Babilónia». As tabuinhas de **Al-Yahudu** («a cidade de Judá»), um povoado de deportados judeus, presumivelmente perto de Borsippa, dão uma imagem concreta: cerca de **200 documentos**, de 572 a 477 a.C. (a maioria do tempo de Dario I), mostram os judeus como agricultores, arrendatários, pagadores de impostos e contratantes, com nomes terminados em *-yahu*. Vivem como gente comum, integrados e organizados, e não como escravos. As tabuinhas vieram do mercado de antiguidades, sem origem arqueológica conhecida, e estão em coleções privadas, sobretudo a de David Sofer, o que as torna difíceis de estudar; foram publicadas em 2014 e 2022.',
  { cit: 'Junto aos rios da Babilónia nos sentámos e chorámos, lembrando-nos de Sião.', fonte: 'Salmo 137, início (tradução livre)' },
  { img: 'cal-tabuinha-al-yahudu', leg: 'Tabuinha de Al-Yahudu com referência ao nome da comunidade, Museu dos Países da Bíblia, Jerusalém.' },
  { img: 'cal-judeus-canal', leg: 'Interpretação de exilados judeus junto de um canal na Babilónia, c. 570 a.C., com trabalho agrícola e um escriba com rolo. Ilustração gerada por IA.' },
  'O Exílio foi decisivo: sem templo, as comunidades concentraram-se na escrita, na lei e na memória. Muitos estudiosos consideram que parte da Bíblia hebraica tomou forma nesta época, e que o exílio foi formador do judaísmo posterior; é uma hipótese amplamente aceite, mas os pormenores são discutidos. Muitos judeus ficaram na Babilónia durante séculos: a Babilónia viria a ser um dos grandes centros do judaísmo, e o Talmude Babilónico foi redigido ali, bem depois, c. séculos III–VI d.C.',
  { h: '6. Escrita, língua e Crónicas' },
  'A escrita cuneiforme em argila ainda era a principal em Babilónia, mas a língua do dia a dia estava a mudar: o **aramaico** tornava-se língua franca, escrito a tinta em couro ou papiro (que quase nunca sobrevive). Nos relevos assírios vêem-se já escribas lado a lado, um a escrever em argila e outro em couro.',
  'As **Crónicas Babilónicas** são pequenos textos de argila, de teor seco e objetivo, que registam ano a ano os acontecimentos principais: batalhas, mortes de reis, festas. Chegaram até nós as que contam a queda de Nínive (BM 21901), as campanhas de Nabucodonosor (BM 21946) e os últimos anos de Nabonido (BM 35382, a «Crónica de Nabonido»). São a base mais sólida de toda esta história, mais fiável do que a Bíblia e os autores gregos em datas e factos, embora cada um tenha as suas intenções.',
  { h: '7. Casa, família, alimentação e vestuário' },
  'As casas eram de tijolo de barro, com pátio central e quartos à volta, de um ou dois pisos, numa rua estreita; os mais ricos tinham casas grandes e os pobres cabanas de caniço. A família era patriarcal, e os casamentos eram arranjados com **dote** e contrato escrito; as mulheres podiam possuir bens e fazer contratos. A alimentação baseava-se em pão de cevada, cerveja, tâmaras, legumes, peixe e carne (sobretudo cordeiro) e azeite de sésamo. As roupas eram de lã e linho: túnicas franjadas, mantos, cintos e, para os homens, barba comprida e cabelo comprido, penteados em caracóis, como nas imagens assírias e babilónicas.',
  { h: '8. Ciência: o céu dos «caldeus»' },
  'A astronomia babilónica da época neobabilónica e posterior foi, até à Grécia, a mais avançada do mundo. Os astrónomos-escribas (*ṭupšar Enūma Anu Enlil*) observavam o céu de cima do zigurate e de outros edifícios, registando posições da Lua e dos planetas, eclipses, cometas e presságios.',
  { lista: [
    '**Diários Astronómicos:** a mais longa série de observações científicas da Antiguidade, de c. **652 a 61 a.C.** (a maior parte do que sobrevive é depois de 400 a.C.), com observações do céu mês a mês, o tempo, o nível do Eufrates, os preços de cevada, tâmaras e lã e notícias políticas. Centenas de tabuinhas e fragmentos, a maior parte no Museu Britânico.',
    '**Eclipses e o ciclo de Saros:** os astrónomos babilónicos descobriram que os eclipses se repetem num período de **223 meses lunares (cerca de 18 anos e 11 dias)**, e usaram-no para prever eclipses. O nome «Saros» é moderno, dado no século XVII, e vem de uma palavra mal interpretada; os Babilónios não o usavam.',
    '**Sistemas A e B:** dois métodos matemáticos para calcular a posição da Lua e dos planetas, em tabelas, sobretudo dos séculos IV–I a.C. Autores gregos e latinos citam dois astrónomos, Naburimannu e **Kidinnu**, e costuma ligar-se-lhes os sistemas A e B respetivamente, mas essa ligação é uma hipótese moderna, incerta.',
    '**O zodíaco e os horóscopos:** o zodíaco de doze signos de 30 graus fixou-se por volta do séc. V a.C. O horóscopo individual mais antigo conhecido, um nascimento de 410 a.C., é babilónico.',
    '**Influência:** os gregos Hiparco e Ptolomeu usaram observações de eclipses babilónicas, e a ciência helenística e depois árabe e europeia beneficiou desse arquivo.'
  ] },
  { img: 'cal-astronomo-ziggurate', leg: 'Interpretação de um escriba-astrónomo babilónico a observar o céu de um terraço elevado, c. 500 a.C., já durante o domínio persa. Ilustração gerada por IA.' },
  { img: 'cal-diario-astronomico', leg: 'Diário astronómico babilónico de 331–330 a.C. que regista acontecimentos ligados à batalha de Gaugamela, Museu Britânico (1880.0617.496); posterior ao Império Neobabilónico.' },
  { caixa: 'Porque se chama «caldeu» a um astrólogo?', texto: 'Depois do fim do império, a palavra «caldeu» deixou de designar uma tribo e passou a designar o **sacerdote-astrónomo de Babilónia**. Nos textos gregos e romanos (Cícero, Plínio) e no Livro de Daniel, «os caldeus» são os adivinhos e astrólogos. O sentido tardio é o do ofício e não o do povo: muitos «caldeus» da época helenística eram simplesmente escribas de Babilónia ou de Uruk.' },
  { h: '9. Tecnologia e construção' },
  'Os construtores de Babilónia faziam **tijolos de barro cozidos** e usavam **betume** como argamassa, que brotava em abundância no sul. A grande inovação visual foi o **tijolo vidrado**: modelado em relevo, vidrado a azul, amarelo e branco e cozido, montado em fiadas como num puzzle. Mantiveram e alargaram uma rede de canais, e Nabucodonosor II mandou construir uma grande linha de defesa entre o Tigre e o Eufrates, a que os Gregos chamavam a «Muralha Meda» (a função e a data exatas são discutidas).',
  { img: 'cal-oficina-tijolos', leg: 'Reconstituição de uma oficina de tijolos vidrados em Babilónia, c. 580 a.C., com artesãos, moldes e fornos. Ilustração gerada por IA.' },
  { img: 'cal-tijolos-vidrados', leg: 'Touro (auroque) de tijolo vidrado da Porta de Ishtar, Museu de Pérgamo.' },
  { h: '10. Guerra' },
  'O exército neobabilónico combinava infantaria com arqueiros, carros, cavalaria e máquinas de cerco, e tinha mais mobilidade do que peso. As campanhas faziam-se na primavera e no verão, e a política era a de **pilhar, deportar e instalar reis fiéis**. O sucesso militar dos primeiros reis foi grande, mas o império não conseguiu defender-se de Ciro: o regime estava enfraquecido por tensões internas, entre elas a de Nabonido com o clero; os persas venceram em Opis e entraram em Babilónia sem combate.'
];

const personalidades = [
  { h: 'Marduk-apla-iddina II, o Merodaque-Baladan (c. 721 – 703 a.C.)' },
  'Chefe da casa de Bit-Yakin e rei de Babilónia durante cerca de doze anos e por pouco tempo em 703 a.C. Aliado do Elam, resistiu a **Sargão II** e a **Senaquerib** e foi o maior símbolo da resistência caldeia. Morreu no exílio, em Elam. A Bíblia lembra-o numa embaixada ao rei Ezequias. Os seus descendentes continuaram a organizar revoltas.',
  { h: 'Senaquerib, rei da Assíria (704 – 681 a.C.)' },
  'O rei que destruiu Babilónia em 689 a.C. na sequência de anos de revoltas apoiadas por Elam e pelos chefes caldeus. Foi assassinado pelos filhos. O seu filho Esarhadão reconstruiu a cidade.',
  { h: 'Nabopolassar, fundador da dinastia (626 – 605 a.C.)' },
  'De origem discutida (caldeu, babilónico de Uruk?), chamou-se a si mesmo «filho de ninguém». Venceu os Assírios, aliou-se aos medas e destruiu Nínive. Morreu em agosto de 605 a.C., e o filho sucedeu-lhe sem oposição.',
  { h: 'Nabucodonosor II (605 – 562 a.C.)' },
  'Filho de Nabopolassar, dominou a Síria e a Palestina, tomou Jerusalém duas vezes (597 e 587/586 a.C.), sitiou Tiro e construiu Babilónia como nunca antes. Casou, segundo a tradição, com **Amytis**, princesa meda, para selar a aliança (este casamento é também discutido). Nas inscrições apresenta-se como piedoso servidor de Marduk. Na Bíblia é o destruidor de Jerusalém, e no Livro de Daniel aparece como um rei soberbo que perde a razão e vive como animal; esta narrativa é lendária e não tem apoio nos textos babilónicos.',
  { img: 'cal-inscricao-east-india', leg: 'Inscrição de Nabucodonosor II conhecida como East India House Inscription.' },
  { img: 'cal-blake-nabucodonosor', leg: '«Nabucodonosor», de William Blake, c. 1795, Tate Britain.' },
  { h: 'Amel-Marduk, o Evil-Merodaque (562 – 560 a.C.)' },
  'Filho e sucessor de Nabucodonosor. Reinou dois anos, até ser deposto por Neriglissar. O Livro dos Reis diz que, no seu primeiro ano, libertou o rei Joaquim (Jeconias) de Judá e lhe deu um lugar à mesa do rei, o que as tabuinhas de rações encontradas em Babilónia tornam credível. O nome «Evil-Merodaque» é a forma hebraica, deformada, de Amel-Marduk.',
  { h: 'Neriglissar e Labashi-Marduk (560 – 556 a.C.)' },
  '**Neriglissar** (Nergal-shar-usur) era um alto funcionário de origem aramaica (do clã dos Puqudu), genro de Nabucodonosor e geralmente identificado com o «Nergal-Sarezer» do Livro de Jeremias (identificação provável, não certa). Tomou o trono em 560 a.C., fez uma campanha vitoriosa na Cilícia, na Anatólia, e morreu em 556. O filho **Labashi-Marduk**, ainda jovem, reinou poucos meses antes de ser deposto, e a sua morte abriu caminho a Nabonido.',
  { h: 'Nabonido (556 – 539 a.C.)' },
  'O último rei. Filho de **Adda-guppi**, devota do deus Sin em Harran, que na sua autobiografia (Estela de Harran) diz ter vivido mais de cem anos. Reconstruiu o templo de Sin em Harran, partiu para Teima durante cerca de dez anos e escavou com atenção fundações de templos antigos: no seu Cilindro de Sippar conta que mandou procurar a pedra fundamental do rei Naram-Sin e calculou-lhe 3.200 anos, uma conta muito exagerada (a verdadeira diferença era de uns 1.700 anos). Por isso lhe chamam por vezes «o primeiro arqueólogo». A imagem negativa vem de textos persas; o seu destino depois de 539 é incerto (Beroso diz que foi poupado, enviado para a Carmânia).',
  { img: 'cal-estela-harran', leg: 'Estela de Adda-guppi, de Harran, Museu de Şanlıurfa.' },
  { img: 'cal-cilindro-nabonido', leg: 'Cilindro de argila de Nabonido, Museu Britânico.' },
  { img: 'cal-nabonido-teima', leg: 'Interpretação artística de Nabonido no oásis de Teima (Tayma), Arábia, c. 550 a.C.; o retrato e o cenário são hipotéticos. Ilustração gerada por IA.' },
  { h: 'Belsazar (Bel-shar-usur)' },
  'Filho mais velho de Nabonido. Nunca teve o título de rei nos textos babilónicos («filho do rei»), mas durante a ausência do pai governou e comandou o exército. É curioso que se jurasse pelo nome dos dois, o que mostra o seu poder. O Livro de Daniel apresenta-o como o último rei, num banquete em que uma mão escreve na parede, e morto na noite da queda da cidade. É uma narrativa bíblica, que não se confirma nas fontes babilónicas. O que parece ser verdade é que Belsazar existiu e teve um papel importante, o que muito tempo se pôs em dúvida.',
  { img: 'cal-festim-baltasar', leg: '«O Festim de Baltasar», de Rembrandt, National Gallery, Londres.' },
  { h: 'Ennigaldi-Nanna (Bel-shalti-Nannar), sacerdotisa de Ur' },
  'Filha de Nabonido, instalada como sacerdotisa (*entu*) do deus Lua em Ur, no antigo palácio das sacerdotisas, o *Giparu*. Nas escavações de Leonard Woolley (1920s), numa sala do palácio apareceram objetos antigos de várias épocas, com etiquetas de argila, e alguns estudiosos falam de «o primeiro museu do mundo». A interpretação é debatida, pois também pode ser um armazém do templo, mas é coerente com o gosto do pai pelo passado.',
  { img: 'cal-museu-ennigaldi', leg: 'Reconstituição hipotética de uma coleção de antiguidades no palácio das sacerdotisas de Ur, c. 540 a.C., evocando Ennigaldi-Nanna; o mobiliário e a disposição são imaginados. Ilustração gerada por IA.' },
  { h: 'Ciro II, o Grande (c. 559 – 530 a.C.)' },
  'Rei persa que conquistou Babilónia em 539 a.C. e se apresentou como libertador, escolhido por Marduk, no **Cilindro de Ciro**. O texto diz que devolveu estátuas de deuses aos templos e que deixou regressar as populações deslocadas, mas só fala de santuários da Mesopotâmia: não menciona Jerusalém nem os judeus. A leitura moderna do cilindro como «primeira declaração dos direitos humanos» é rejeitada pela maioria dos historiadores.',
  { cit: 'Eu sou Ciro, rei do mundo, grande rei, rei poderoso, rei da Babilónia, rei de Sumer e de Acad, rei dos quatro cantos do mundo.', fonte: 'Cilindro de Ciro (tradução portuguesa a partir de traduções modernas)' },
  { h: 'Beroso, sacerdote de Marduk (c. 290 a.C.)' },
  'Escreveu em grego a **Babyloniaca** para o rei Antíoco I. A obra perdeu-se, mas autores como Flávio Josefo citam-na e é por ele que sabemos o que a tradição dizia dos reis neobabilónicos, de Nabucodonosor e dos Jardins Suspensos. Os seus dados sobre os reis são úteis, mas há que lê-los com cautela.',
  { h: 'Naburimannu e Kidinnu, astrónomos' },
  'Astrónomos babilónicos de data incerta (c. séculos V–IV a.C.), citados por autores gregos e romanos. Costuma ligar-se Naburimannu ao Sistema A e Kidinnu ao Sistema B, os dois métodos matemáticos para prever a Lua e os planetas, mas os próprios sistemas não dão nome a autores, por isso a ligação é hipotética. Mostram-nos que, em Babilónia, o conhecimento vinha de escolas e de famílias de escribas e não de génios isolados.',
  { h: 'Robert Koldewey (1855 – 1925)' },
  'Arqueólogo e arquiteto alemão que dirigiu as escavações de Babilónia entre 1899 e 1917, pela Sociedade Oriental Alemã. Pelo seu método (reconhecer o tijolo cru nas paredes) foi pioneiro, e a sua planta da cidade ainda serve. As peças da Porta de Ishtar seguiram para Berlim, onde foi reconstruída.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**O Exílio e a Bíblia:** a memória da Babilónia, da torre de Babel e do exílio marcou a Bíblia, e daí a cultura ocidental («as águas de Babilónia», «Babel», a «prostituta de Babilónia»).',
    '**Astronomia e calendário:** os métodos matemáticos de previsão celeste e o uso do zodíaco chegaram à Grécia, ao mundo islâmico e à Europa.',
    '**Palavra «caldeu»:** a palavra «caldeu» e o sentido de «astrólogo» chegaram ao latim (*Chaldaei*) e a várias línguas. Já no séc. II d.C. circulavam os *Oráculos Caldaicos*, um texto de filosofia religiosa grega que se apresentava como sabedoria da Caldeia.',
    '**Documentos de vida real:** arquivos como Egibi, Murashu e Al-Yahudu dão voz a pessoas comuns.',
    '**Imagem de «cidade grandiosa»:** Babilónia ficou como símbolo da riqueza e da soberba, na Bíblia, na literatura e na música.'
  ] },
  { h: 'Arte e arquitetura' },
  'A arte neobabilónica ficou sobretudo na **arquitetura monumental e no tijolo vidrado**, com poucos relevos de pedra (o contrário da Assíria). A Porta de Ishtar e a Via Processional são a sua obra-prima, e os seus tons de azul e de dourado, e animais que parecem marchar, mostram como era a cidade para quem entrava nela. O gosto de Nabucodonosor pelo passado levou-o também a copiar os modelos de reis antigos.',
  { img: 'cal-porta-ishtar-pergamo', leg: 'Porta de Ishtar reconstruída no Museu de Pérgamo, Berlim.' },
  { h: 'A redescoberta' },
  { lista: [
    '**1811:** Claudius Rich, residente britânico em Bagdade, mede as ruínas de Babilónia.',
    '**1840s – 1880s:** Layard e Rassam escavam Nínive e Babilónia, e Rawlinson decifra o acádio; Rassam encontra o Cilindro de Ciro em 1879.',
    '**1899 – 1917:** Koldewey escava Babilónia; a Porta de Ishtar, reconstruída em Berlim, abre em 1930.',
    '**Século XX:** estudos das tabuinhas, Crónicas Babilónicas (edição de Grayson, 1975) e Diários Astronómicos (edição de Sachs e Hunger, a partir de 1988).',
    '**1980s:** o regime iraquiano reconstrói palácios e muralhas sobre as ruínas, sobretudo de Nabucodonosor, uma intervenção muito criticada pelos arqueólogos.',
    '**2003 – 2004:** a ocupação de Babilónia por forças militares estrangeiras causa danos que foram registados por especialistas do Museu Britânico.',
    '**2019:** Babilónia entra na lista do Património Mundial da UNESCO.'
  ] },
  { img: 'cal-koldewey', leg: 'Retrato de Robert Koldewey, arqueólogo responsável pelas escavações alemãs de Babilónia.' },
  { h: 'Onde visitar' },
  { lista: [
    '**Museu de Pérgamo, Berlim:** a Porta de Ishtar e a fachada do palácio de Nabucodonosor, reconstruídas.',
    '**Museu Britânico, Londres:** o Cilindro de Ciro, Crónicas Babilónicas, Diários Astronómicos, tabuinhas e relevos assírios.',
    '**Louvre, Paris:** relevos de tijolo vidrado e tabuinhas.',
    '**Museu Nacional do Iraque, Bagdade:** peças de Babilónia, Ur e Nínive.',
    '**Babilónia, Iraque:** o sítio arqueológico e o museu, aberto ao turismo.'
  ] },
  { img: 'cal-palacio-reconstruido', leg: 'Palácio de Nabucodonosor II parcialmente reconstruído em época moderna, Babilónia.' }
];

const quiz = [
  { p: 'Quem eram os Caldeus, no início do I milénio a.C.?', op: ['Um povo de marinheiros fenícios', 'Tribos semitas do sul da Babilónia', 'Exércitos do Egito', 'Os sacerdotes de Marduk'], certa: 1, exp: 'Eram tribos de língua semita, como Bit-Yakin e Bit-Amukani, instaladas nos pântanos e baixas do sul da Mesopotâmia.' },
  { p: 'Qual era a casa tribal caldeia de Merodaque-Baladan II?', op: ['Bit-Yakin', 'Bit-Dakkuri', 'Bit-Adini', 'Bit-Hilani'], certa: 0, exp: 'Marduk-apla-iddina II era chefe de Bit-Yakin, na costa do Golfo Pérsico.' },
  { p: 'Que rei assírio destruiu Babilónia em 689 a.C.?', op: ['Sargão II', 'Senaquerib', 'Assurbanípal', 'Tiglat-Pileser III'], certa: 1, exp: 'Senaquerib saqueou e arrasou a cidade, depois de cerca de quinze meses de cerco.' },
  { p: 'Em que ano foi Nabopolassar coroado rei de Babilónia?', op: ['721 a.C.', '689 a.C.', '626 a.C.', '539 a.C.'], certa: 2, exp: 'Em novembro de 626 a.C., aproveitando a crise na Assíria.' },
  { p: 'Que povo se aliou a Nabopolassar para destruir a Assíria?', op: ['Os persas', 'Os medas', 'Os gregos', 'Os hititas'], certa: 1, exp: 'Os medas de Ciáxares, que tomaram Assur em 614 a.C.; Nínive caiu em 612 a.C.' },
  { p: 'Que batalha, em 605 a.C., deu a Nabucodonosor o domínio da Síria?', op: ['Opis', 'Halule', 'Carquemis', 'Kish'], certa: 2, exp: 'Em Carquemis derrotou o exército do faraó Neco II.' },
  { p: 'Quando foi Jerusalém tomada pela primeira vez por Nabucodonosor?', op: ['605 a.C.', '597 a.C.', '587 a.C.', '539 a.C.'], certa: 1, exp: 'Em 597 a.C. (2 de Adar, 16 de março), segundo a Crónica Babilónica; a destruição do Templo foi em 587 ou 586 a.C.' },
  { p: 'Que cidade fenícia Nabucodonosor sitiou durante cerca de treze anos?', op: ['Sídon', 'Biblos', 'Tiro', 'Cartago'], certa: 2, exp: 'Tiro, cidade-ilha que não foi tomada à força.' },
  { p: 'Qual dos monumentos NÃO é do tempo de Nabucodonosor II?', op: ['Porta de Ishtar', 'Via Processional', 'Código de Hamurabi', 'Etemenanki, na sua forma final'], certa: 2, exp: 'O Código de Hamurabi é mais de mil anos anterior, do séc. XVIII a.C.' },
  { p: 'O que são as tabuinhas de Al-Yahudu?', op: ['Contratos de comércio persas', 'Documentos de judeus deportados na Babilónia', 'Cartas dos Faraós', 'Textos de astronomia'], certa: 1, exp: 'Cerca de 200 documentos de uma povoação de exilados judeus, de 572 a 477 a.C.' },
  { p: 'Onde viveu Nabonido durante cerca de dez anos?', op: ['Ur', 'Harran', 'Teima, na Arábia', 'Susa'], certa: 2, exp: 'No oásis de Teima, c. 553–543 a.C.; as razões são debatidas.' },
  { p: 'Quem era Belsazar, segundo os textos babilónicos?', op: ['Filho de Nabonido, que governava na sua ausência', 'Rei persa', 'Sacerdote de Marduk', 'General egípcio'], certa: 0, exp: 'Era «filho do rei» e administrava Babilónia. O banquete de Daniel 5 é uma narrativa bíblica não confirmada.' },
  { p: 'O que diz o Cilindro de Ciro, de forma geral?', op: ['Que Ciro destruiu Babilónia', 'Que Ciro foi escolhido por Marduk e restaurou templos', 'É um tratado com o Egito', 'É uma lista de impostos'], certa: 1, exp: 'Apresenta Ciro como libertador, escolhido por Marduk; a leitura como «carta dos direitos humanos» é contestada.' },
  { p: 'De que se compõem os Diários Astronómicos babilónicos?', op: ['Cartas de reis', 'Observações do céu, notícias, tempo e preços', 'Poemas de amor', 'Mapas de caminhos'], certa: 1, exp: 'Registam, de c. 652 a 61 a.C., a Lua, os planetas, o nível do rio, os preços e acontecimentos.' },
  { p: 'Quem escavou Babilónia entre 1899 e 1917?', op: ['Leonard Woolley', 'Robert Koldewey', 'Howard Carter', 'Hormuzd Rassam'], certa: 1, exp: 'Robert Koldewey, da Sociedade Oriental Alemã.' }
];

export default {
  id: 'caldeus',
  cor: '#3f6f9f',
  emblema: '../assets/img/caldeus.png',
  nome:    { pt: 'Caldeus e Neobabilónios', en: 'Chaldeans and Neo-Babylonians' },
  periodo: { pt: 'c. 900 a.C. – 539 a.C.', en: 'c. 900 BC – 539 BC' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
