// ETRUSCOS — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
// Datas na «cronologia média»; muitas datas da Roma arcaica são tradição transmitida por autores tardios (Lívio, Dionísio de Halicarnasso) e não factos seguros. a.C./d.C.
// Imagens: cada {img:'id'} procura o ficheiro  etruscos/img/id.jpg  (ver IMAGENS_ETRUSCOS.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'Os **etruscos** foram o povo que, desde cerca de **900 a.C.** até à romanização, no século I a.C.,, criou a primeira grande civilização urbana da Itália, na região a que os romanos chamaram **Etrúria** e que corresponde hoje, em grande parte, à **Toscana**, ao norte do **Lácio** e a uma parte da **Úmbria**. Falavam uma língua que não pertence à família indo-europeia, escreviam com um alfabeto de origem grega e chamavam-se a si próprios **rasna** (ou *rasenna*). Nunca formaram um estado único: eram uma **federação frouxa de cidades-estado** (as mais importantes foram Veios, Cerveteri, Tarquínia, Vulci, Clúsio e Volterra), unidas pela língua, pela religião e pelos negócios.',
    'Enriqueceram com o **ferro** da ilha de Elba e da Toscana, com a agricultura e com o comércio marítimo com gregos, fenícios e cartagineses. No auge, nos séculos VII e VI a.C., dominaram a planície do Pó a norte e a Campânia a sul, e **três dos sete reis tradicionais de Roma** terão sido de origem etrusca (a tradição é antiga, mas os pormenores são lendários). Depois vieram as derrotas no mar, as invasões gaulesas e, sobretudo, a pressão de **Roma**, que conquistou as cidades etruscas uma a uma entre 396 e 264 a.C. e lhes concedeu a cidadania em 90–89 a.C. A língua etrusca foi desaparecendo no tempo de Augusto e nos séculos seguintes, mas boa parte do que associamos a Roma, da religião ao urbanismo, da escrita ao vestuário, passou pelos etruscos.'
  ] },
  { img: 'etr-mapa-etruria', leg: 'Mapa da Etrúria e da expansão etrusca para a planície do Pó e a Campânia.' },
  { h: 'Onde ficava' },
  'O coração da Etrúria é o território entre o rio **Arno**, a norte, o **Tibre**, a sul e a leste, e o **mar Tirreno**, a oeste, um nome que vem de *Tyrrhenoi*, o termo grego para os etruscos. É uma paisagem de colinas de **tufo** (rocha vulcânica fácil de talhar), de vales férteis e de cursos de água curtos, com as **Colinas Metalíferas** perto da costa, ricas em cobre, chumbo, estanho e ferro, e a ilha de **Elba**, em frente. As cidades nasceram quase todas em planaltos naturalmente defendidos, a poucos quilómetros do mar, e muitas têm hoje o mesmo sítio e, por vezes, o mesmo nome: Tarquínia, Volterra, Arezzo, Perugia, Cortona, Orvieto.',
  'No século VI a.C. a influência etrusca ultrapassou esses limites: a **norte** estendeu-se à planície do Pó, com **Felsina** (Bolonha), **Marzabotto**, **Spina** e **Mântua**; a **sul**, à **Campânia**, onde **Cápua** foi a principal cidade etrusca; e a **Roma** e ao Lácio, onde a cultura etrusca deixou marcas profundas. Os limites variaram ao longo dos séculos e a presença etrusca em certos lugares (Pompeia, por exemplo) é debatida.',
  { img: 'etr-pitigliano', leg: 'Paisagem de tufo no sul da Toscana: Pitigliano, sobre o penhasco, numa região de vias escavadas pelos etruscos.' },
  { h: 'Quando existiu' },
  'A cronologia etrusca divide-se pelos estilos de arte e pelas fases de poder. As datas abaixo são aproximadas, e é difícil dizer onde «começam» os etruscos: muitos arqueólogos consideram que a cultura **villanoviana** (c. 900 a.C.) é já etrusca na sua forma inicial; outros só falam de «etruscos» a partir do século VIII.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Villanoviano', 'c. 900 – 720 a.C.', 'Aldeias grandes em planaltos; incineração; urnas biconhas; trabalho do bronze e do ferro; primeiros contactos com os gregos'],
    ['Orientalizante', 'c. 720 – 580 a.C.', 'Riqueza súbita; túmulos principescos (Regolini-Galassi); escrita; importações do Oriente; nascem as cidades-estado'],
    ['Arcaico (apogeu)', 'c. 580 – 480 a.C.', 'Expansão para o Pó e a Campânia; reis etruscos em Roma (tradição); templos, túmulos pintados, bucchero; Alalia (c. 540)'],
    ['Clássico (recuo)', 'c. 480 – 300 a.C.', 'Derrota em Cumas (474); invasões gaulesas; queda de Veios (396); guerras com Roma'],
    ['Helenístico e romanização', 'c. 300 – 27 a.C.', 'Conquista romana; cidades etruscas aliadas e depois integradas; cidadania romana (90–89); a língua dá lugar ao latim']
  ] } },
  { img: 'etr-sarcofago-esposos', leg: 'Sarcófago dos Esposos, terracota de Cerveteri, c. 520 a.C., Museu Nacional Etrusco de Villa Giulia, Roma.' },
  { h: 'Quem eram os etruscos?' },
  'Os romanos chamavam-lhes **Tusci** ou **Etrusci**, os gregos **Tyrrhenoi** (ou *Tyrsenoi*), e eles diziam **Rasna**. A sua **língua** não é indo-europeia: está relacionada apenas com duas outras, o **rético** (falado nos Alpes) e o **lemnio**, conhecido por uma estela do século VI a.C. encontrada na ilha grega de Lemnos; os linguistas chamam a este grupo «família tirrénica». É, por isso, uma língua isolada no mundo mediterrânico antigo, e foi por isso que a origem dos etruscos intrigou os autores antigos.',
  'Heródoto (século V a.C.) contava que os etruscos vinham da **Lídia**, na Anatólia, trazidos por um príncipe chamado Tirreno, depois de uma fome. Dionísio de Halicarnasso (século I a.C.) defendia, pelo contrário, que eram **autóctones**, ou seja, um povo sempre ali. A arqueologia moderna dá razão sobretudo a Dionísio: a cultura etrusca nasce da cultura villanoviana, local, sem ruptura, e um grande estudo de **ADN antigo** (Posth e colegas, *Science Advances*, 2021, com 82 indivíduos de toda a Itália central e do sul) mostrou que os etruscos da Idade do Ferro tinham a mesma origem genética que os seus vizinhos latinos, sem sinais de uma migração recente da Anatólia. Continua a ser um mistério por que razão mantiveram uma língua não indo-europeia.',
  { h: 'Porque importam' },
  { lista: [
    '**A primeira urbanização da Itália:** cidades planeadas, com ruas, esgotos e templos, séculos antes de Roma ser uma potência.',
    '**Roma:** ritos religiosos, insígnias do poder, templos, o triunfo, o desenho das cidades e muitas palavras latinas passaram pelos etruscos (o alcance exato de cada empréstimo é, por vezes, debatido).',
    '**Arte funerária:** os túmulos de Cerveteri e de Tarquínia, com os seus frescos coloridos, são das melhores janelas para a vida de um povo antigo.',
    '**Metalurgia e artesanato:** a bronzeira, a ourivesaria com granulado de ouro e o *bucchero* negro são marcas inconfundíveis.',
    '**A língua e a escrita:** cerca de 13 mil inscrições, mas poucos textos longos, e ainda sem uma compreensão total, um dos grandes enigmas da Antiguidade.',
    '**O papel das mulheres:** a mulher etrusca aparece nos banquetes, nos túmulos e nas inscrições com um lugar público que chocou os gregos.'
  ] },
  { img: 'etr-tumulo-leopardos', leg: 'Banquete na Túmulo dos Leopardos, Tarquínia, c. 470 a.C.' },
  { caixa: 'Os etruscos hoje', texto: 'Os etruscos são, em Itália, uma referência cultural viva: a **Toscana** conserva o nome dos *Tusci*, e Cerveteri e Tarquínia, com as suas necrópoles, estão na lista do Património Mundial da **UNESCO** desde **2004**. A etruscologia continua a descobrir: em 1964 apareceram as lâminas de ouro de Pirgos e, em 1992, a *Tabula Cortonensis*. Mas ainda não temos nenhum livro de literatura etrusca nem uma história escrita por um etrusco: tudo o que sabemos vem de túmulos, de objetos, de inscrições curtas e de autores gregos e romanos, nem sempre imparciais.' }
];

const linha = [
  'Esta linha do tempo segue a história etrusca desde as aldeias de ferro até à integração em Roma. Para os séculos VII a V a.C., muito do que se sabe sobre Roma vem de autores que escreveram séculos depois (Lívio, Dionísio de Halicarnasso); por isso, as datas e os nomes «tradicionais» estão assinalados.',
  { linha: [
    { d: 'c. 1100 – 900 a.C.', t: 'Proto-villanoviano', x: 'Na Idade do Bronze final, comunidades da Itália central e do norte queimam os mortos e enterram as cinzas em campos de urnas. É a base local de onde sairá a cultura etrusca.' },
    { d: 'c. 900 a.C.', t: 'O Villanoviano', x: 'Surge a cultura **villanoviana**, nome dado por um achado de 1853 em Villanova, perto de Bolonha. As cinzas são guardadas em **urnas biconhas** de barro, por vezes cobertas por um capacete; há grandes aldeias nos planaltos de Veios, Tarquínia, Cerveteri e Vulci, que se tornarão as grandes cidades etruscas. O ferro e o bronze começam a trabalhar-se em grande escala.' },
  ] },
  { img: 'etr-villanoviano-urna', leg: 'Urna villanoviana biconha, c. século IX–VIII a.C., com tampa em forma de tigela.' },
  { linha: [
    { d: 'c. 775 – 740 a.C.', t: 'Os gregos chegam à Itália', x: 'Colonos gregos da Eubeia instalam-se em **Pitecusa** (ilha de Ísquia) e depois em **Cumas**, na baía de Nápoles. Os contactos com os etruscos trazem vinho, vasos, mitos e, sobretudo, a **escrita**: o alfabeto etrusco derivará de uma variante do alfabeto grego eubeu.' },
    { d: 'c. 700 a.C.', t: 'As primeiras inscrições', x: 'Aparecem as primeiras inscrições etruscas. Uma tabuinha de marfim de **Marsiliana d’Albegna** (c. 700) traz o alfabeto completo, copiado como modelo de escrita. A língua está atestada de c. 700 a.C. ao século I d.C.' },
  ] },
  { img: 'etr-marsiliana-abecedario', leg: 'Tabuinha de escrita com o alfabeto, Marsiliana d’Albegna, c. 700 a.C., Museu Arqueológico Nacional de Florença.' },
  { linha: [
    { d: 'c. 700 – 650 a.C.', t: 'O período orientalizante e os túmulos principescos', x: 'Uma riqueza súbita, vinda do comércio de metais, vê-se em túmulos com ouro, marfim, bronzes e objetos do Oriente. O mais célebre é o **túmulo Regolini-Galassi** (c. 650, Cerveteri), descoberto em **1836**, com uma mulher de alto estatuto e um grande conjunto de joias de ouro. Em Palestrina (Preneste), cidade latina muito aberta à influência etrusca, os túmulos Bernardini e Barberini (c. 675 – 650) mostram a mesma riqueza.' },
  ] },
  { img: 'etr-regolini-galassi', leg: 'Fíbula de ouro do túmulo Regolini-Galassi, Cerveteri, c. 650 a.C., Museus do Vaticano.' },
  { linha: [
    { d: 'c. 650 – 600 a.C.', t: 'Hoplitas e cidades', x: 'Os etruscos adotam a **falange de hoplitas** (infantaria pesada em formação cerrada), à maneira grega. Nascem as cidades-estado com ruas, templos e muralhas; as aristocracias, ricas pelo ferro e pelas terras, dominam. Os mercadores etruscos, gregos e fenícios disputam as rotas do Tirreno.' },
    { d: 'c. 616 – 509 a.C. (tradição)', t: 'Os reis etruscos de Roma', x: 'Segundo a tradição romana, três dos sete reis de Roma tiveram ligação à Etrúria: **Tarquínio Prisco** (616 – 579, filho de um grego emigrado de Corinto, Demarato, e marido de **Tanaquil**), **Sérvio Túlio** (578 – 535; em Vulci, os frescos do túmulo François tratam de um herói «Macstrna», que o imperador Cláudio identificou com ele) e **Tarquínio, o Soberbo** (535 – 509). A tradição atribui-lhes a Cloaca Máxima, o Circo Máximo e o grande templo de **Júpiter Capitolino** (dedicado, segundo a tradição, em 509). O que se pode afirmar é que a Roma do século VI a.C. estava saturada de influência etrusca; quanto aos nomes e às datas, são tradição, não história segura.' },
  ] },
  { img: 'etr-templo-capitolino-reconstrucao', leg: 'Reconstituição conjetural de um grande templo de estilo etrusco, como o de Júpiter Capitolino, em Roma, c. 500 a.C. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 600 – 500 a.C.', t: 'Expansão e comércio', x: '**Felsina** (Bolonha), ocupada desde o Villanoviano, torna-se uma grande cidade etrusca; fundam-se Marzabotto e Spina na planície do Pó, e Cápua é o centro etrusco da Campânia. O vinho etrusco, em ânforas, chega ao sul de França e à Sardenha, e os etruscos importam tanta cerâmica ática que uma grande parte da que hoje conhecemos saiu dos seus túmulos.' },
    { d: 'c. 540 – 535 a.C.', t: 'Batalha de Alalia', x: 'Uma frota de Caere (Cerveteri) e de Cartago enfrenta a de colonos foceenses (gregos da Anatólia) estabelecidos em Alalia, na Córsega. Os focenses ganham o combate, mas perdem 40 dos 60 navios e abandonam a ilha (uma «vitória cadmeia»). Segundo Heródoto, os cerites mataram os prisioneiros e depois foram atingidos por uma desgraça, que os levou a consultar Delfos. O episódio mostra a aliança etrusco-cartaginesa e a disputa pelo Tirreno.' },
    { d: 'c. 520 – 500 a.C.', t: 'O apogeu', x: 'É a idade de ouro da arte etrusca: o **Sarcófago dos Esposos** (c. 520), os túmulos pintados de Tarquínia (Túmulo dos Augures, da Caça e da Pesca), as estátuas de terracota do santuário de Portonaccio em Veios, atribuídas ao escultor **Vulca**, entre elas o célebre **Apolo de Veios**, e o santuário de **Pirgos**, porto de Cerveteri, com as lâminas de ouro dedicadas por **Thefarie Velianas** (c. 500), em etrusco e em fenício.' },
  ] },
  { img: 'etr-apolo-veios', leg: 'Apolo de Veios, terracota, c. 510–500 a.C., do santuário de Portonaccio; Museu Nacional Etrusco de Villa Giulia, Roma.' },
  { img: 'etr-tabuinhas-pirgos', leg: 'Lâmina de ouro de Pirgos com inscrição etrusca, c. 500 a.C., Museu Nacional Etrusco de Villa Giulia, Roma.' },
  { linha: [
    { d: '509 – c. 504 a.C. (tradição)', t: 'Porsena e o fim dos reis', x: 'Segundo a tradição, Roma expulsa **Tarquínio, o Soberbo** em 509 e funda a República. O rei de Clúsio, **Lars Porsena**, tenta repor o rei no trono e cerca Roma (a tradição romana diz que desistiu, mas há autores antigos, como Tácito, que sugerem que a cidade lhe terá sido entregue). Em c. 504, o seu filho **Arrunte** é derrotado em **Arícia** por latinos e pelo tirano de Cumas, Aristodemo.' },
    { d: '474 a.C.', t: 'Batalha naval de Cumas', x: 'A frota etrusca é desbaratada ao largo de Cumas por **Hierão I**, tirano de Siracusa, que atende a um pedido dos cumanos. É um golpe decisivo contra o poder naval etrusco e o início do recuo na Campânia. Hierão dedicou em Olímpia capacetes tomados aos etruscos; um deles, com inscrição, está no Museu Britânico.' },
  ] },
  { img: 'etr-capacete-hieron', leg: 'Capacete de tipo etrusco dedicado em Olímpia por Hierão de Siracusa depois de Cumas (474 a.C.), Museu Britânico.' },
  { linha: [
    { d: 'séc. V a.C.', t: 'Túmulos pintados e crise', x: 'Em Tarquínia pintam-se os túmulos mais célebres (**Túmulo dos Leopardos**, c. 470; **Túmulo do Triclínio**, c. 470): banquetes, danças e música. Mas as cidades da Etrúria entram numa fase de **rivalidades** e de perda de rotas marítimas.' },
    { d: '396 a.C. (tradição)', t: 'Roma toma Veios', x: 'Depois de uma longa guerra (a tradição fala de um cerco de dez anos, à imagem de Troia), o ditador romano **Camilo** conquista **Veios**, a cidade etrusca mais próxima de Roma, a cerca de 16 km. O território de Veios é anexado, o que aumenta muito o de Roma, e a população é vendida ou integrada. Os romanos levam a estátua da deusa Uni (Juno), numa cerimónia chamada *evocatio*. A história do túnel por onde Camilo teria entrado na cidade pertence à lenda.' },
  ] },
  { img: 'etr-veios-cerco', leg: 'Reconstituição conjetural do cerco romano de Veios, início do século IV a.C. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 400 – 350 a.C.', t: 'Os gauleses', x: 'Povos gauleses (os **bóios** e outros) atravessam os Apeninos, tomam a planície do Pó e extinguem as cidades etruscas de lá: **Marzabotto** é abandonada, **Felsina** torna-se a gaulesa *Bononia*. Por volta de 390 (a data é debatida) os gauleses chegam a saquear Roma, e a Etrúria, a norte, perde o seu mundo mais rico.' },
    { d: '384 a.C.', t: 'Saque de Pirgos', x: 'Dionísio I, tirano de Siracusa, ataca o porto etrusco de Pirgos e saqueia o santuário. É mais um golpe nas rotas marítimas.' },
    { d: '358 – 351 a.C.', t: 'Roma contra Tarquínia', x: 'Guerra entre Roma e **Tarquínia**; segundo Lívio, os tarquínios sacrificaram então 307 prisioneiros romanos, e os romanos retaliaram. Termina em 351 com uma trégua de quarenta anos. Caere é das primeiras cidades a obter um estatuto de cidadania parcial de Roma.' },
    { d: '310 – 283 a.C.', t: 'Vadimão e Sentino', x: 'Em 310, junto ao lago **Vadimão**, os romanos vencem os etruscos; em **295**, em Sentino, uma coligação de samnitas, gauleses, úmbros e etruscos é derrotada; em 283, o lago Vadimão volta a ser palco de uma derrota etrusca e gaulesa.' },
    { d: '280 – 264 a.C.', t: 'Vulci e Volsínios', x: 'Em **280**, o cônsul **Tibério Coruncânio** triunfa sobre Vulci e Volsínios. Em **264**, depois de uma revolta de escravos libertos, Roma toma **Volsínios** (Orvieto), saqueia-a (Plínio, o Velho, fala de cerca de 2000 estátuas levadas) e transfere os habitantes para uma nova cidade junto ao lago de Bolsena. Está concluída a conquista militar da Etrúria.' },
    { d: '205 a.C.', t: 'Aliados de Roma', x: 'Na Segunda Guerra Púnica, as cidades etruscas são já aliadas de Roma. Quando **Cipião** prepara a expedição à África, segundo Lívio, Populónia fornece ferro, Tarquínia, pano de velas, e Arézio, milhares de escudos, capacetes e armas.' },
  ] },
  { linha: [
    { d: 'séc. II – I a.C.', t: 'Arte helenística e língua em declínio', x: 'Produzem-se ainda urnas de pedra e de terracota para as famílias aristocráticas, o **Fígado de Placência**, a bronzeira do **Arengador** (c. 100 a.C.) e longos textos rituais como o *Liber Linteus*. Mas as inscrições em latim aumentam e a classe dirigente adota o nome e os costumes romanos.' },
    { d: '90 – 89 a.C.', t: 'Cidadania romana', x: 'Na Guerra Social, os aliados itálicos revoltam-se pela cidadania. As leis **Júlia** (90) e **Plaucia-Papíria** (89) concedem-na aos aliados que não se tinham revoltado, entre eles etruscos e úmbros (a cronologia exata é discutida); a Etrúria deixa de ser um espaço político distinto. O latim substitui aos poucos o etrusco nos documentos públicos; o etrusco continua, por um tempo, nas famílias e nos ritos.' },
    { d: '82 – 79 a.C.', t: 'Sila e as confiscações', x: 'Na guerra civil entre Sila e Mário, várias cidades etruscas apoiam Mário. Depois da vitória, Sila toma terras aos vencidos e instala veteranos (em Arézio e em Fésulas, por exemplo); **Volterra** resiste a um cerco até 79. A aristocracia etrusca perde riqueza, e a paisagem muda.' },
    { d: '44 a.C.', t: 'Espurina e os Idos de Março', x: 'O harúspice etrusco **Espurina** terá avisado Júlio César de que um perigo o ameaçava até aos Idos de Março (Suetónio). A tradição romana confiava, mesmo no fim da República, no saber dos adivinhos etruscos.' },
    { d: '41 – 40 a.C.', t: 'Guerra de Perúsia', x: 'Otaviano cerca **Perúsia** (Perugia), onde Lúcio António resistia, e a cidade é incendiada. Será reconstruída como *Augusta Perusia*; a **Porta Marzia** etrusca, com uma inscrição de Augusto, ainda existe.' },
    { d: '27 a.C. – c. 7 a.C.', t: 'Augusto e a «Região VII»', x: 'Augusto reorganiza a Itália em regiões; a Etrúria torna-se a **Regio VII**. A romanização está concluída, e o limite desta nossa história é 27 a.C., ano em que Octaviano recebe o título de Augusto.' },
    { d: 'séc. I d.C.', t: 'A língua apaga-se', x: 'As últimas inscrições etruscas datam do século I d.C. O imperador **Cláudio** (reinou 41 – 54) escreveu em grego uma história dos etruscos em vinte livros, a *Tyrrhenika*, hoje perdida. É o último grande esforço para registar uma língua que se extinguia.' }
  ] },
  { h: 'Redescoberta' },
  'O interesse pelos etruscos renasceu no Renascimento: em 1553 descobriu-se em Arezzo a **Quimera**, e o grão-duque Cosme I de Médici mandou exibi-la como troféu da sua «Toscana etrusca». Nos séculos XVII e XVIII, a **Etrusqueria** (o entusiasmo erudito pelos etruscos) estudava túmulos e vasos, muitas vezes de forma fantasiosa, e criou em Cortona, em 1727, a **Academia Etrusca**. As escavações científicas começaram no século XIX, com achados como o túmulo Regolini-Galassi (1836) e o túmulo François, em Vulci (1857). No século XX, o italiano **Massimo Pallottino** fundou a etruscologia moderna; em **1964**, a descoberta das lâminas de Pirgos deu, finalmente, um texto bilingue etrusco-fenício.'
];

const mapa = [
  'O mapa etrusco é o de uma **liga de cidades**. A tradição, ao tempo dos romanos, falava de uma **dodecápole**, uma liga de doze cidades principais, que se reunia todos os anos no santuário federal de **Fanum Voltumnae**, perto de Volsínios (a localização exata do santuário é debatida). A lista de doze varia consoante os autores, mas as cidades mais importantes são estas. Os nomes entre parênteses são os etruscos, quando se conhecem.',
  { tabela: { cab: ['Cidade', 'Onde (atual)', 'Quando / quem', 'Importância'], linhas: [
    ['Veios (Veia)', 'Perto de Roma, Lácio', 'Séc. IX – 396 a.C.', 'A mais próxima de Roma; escola de escultores (Vulca); conquistada por Camilo'],
    ['Cerveteri (Caere, Cisra)', 'Lácio, perto do mar', 'Séc. VIII – I a.C.', 'Uma das cidades mais ricas; túmulos de Banditaccia; porto de Pirgos'],
    ['Tarquínia (Tarchna)', 'Lácio, norte', 'Séc. VIII – IV a.C.', 'Cidade mítica, de onde terão vindo os Tarquínios; túmulos pintados'],
    ['Vulci (Velch)', 'Lácio, norte', 'Séc. VII – III a.C.', 'Bronzes e cerâmica; túmulo François; conquistada em 280'],
    ['Volsínios (Velzna)', 'Orvieto, Úmbria', 'Séc. VI – 264 a.C.', 'Capital religiosa, perto do Fanum Voltumnae; saqueada em 264'],
    ['Clúsio (Clevsin)', 'Chiusi, Toscana', 'Séc. VII – I a.C.', 'Cidade do rei Porsena; urnas e túmulos'],
    ['Perúsia (Pherse)', 'Perugia, Úmbria', 'Séc. VI – 40 a.C.', 'Cidade fortificada, com a Porta Marzia e a Porta Augusta'],
    ['Volterra (Velathri)', 'Volterra, Toscana', 'Séc. VII – 79 a.C.', 'Cidade das urnas de alabastro; Porta all’Arco'],
    ['Populónia (Pupluna)', 'Costa da Toscana', 'Séc. IX – I a.C.', 'Única cidade etrusca na costa, centro de fundição de ferro de Elba'],
    ['Vetulónia (Vatluna)', 'Costa da Toscana', 'Séc. VIII – VI a.C.', 'Túmulos principescos; ligada ao ferro e ao cobre'],
    ['Arezzo (Aritim)', 'Toscana', 'Séc. VI a.C. – I d.C.', 'Quimera de bronze; mais tarde, cerâmica «aretina»'],
    ['Cortona (Curtun)', 'Toscana', 'Séc. VII – I a.C.', 'Túmulos; *Tabula Cortonensis*; Academia Etrusca (1727)'],
    ['Marzabotto (Misa, nome debatido)', 'Perto de Bolonha', 'c. 500 – 350 a.C.', 'Cidade planeada em quadrícula; destruída pelos gauleses'],
    ['Felsina (Bolonha)', 'Emília-Romanha', 'Séc. VI – IV a.C.', 'Centro etrusco na planície do Pó, depois gaulesa e romana'],
    ['Spina', 'Delta do Pó', 'Séc. VI – III a.C.', 'Porto do Adriático; comércio com os gregos'],
    ['Cápua (Capua)', 'Campânia', 'Séc. VI – V a.C.', 'Principal centro etrusco do sul']
  ] } },
  { img: 'etr-mapa-dodecapolis', leg: 'Mapa das cidades principais da Etrúria (a «dodecápole») e dos seus territórios.' },
  { h: 'Cerveteri e a Banditaccia' },
  '**Cerveteri** (*Caere*, em etrusco *Cisra*) foi, no século VII e VI a.C., uma das cidades mais ricas do Mediterrâneo ocidental, graças ao comércio de metais e ao porto de **Pirgos**. A sua necrópole, a **Banditaccia**, tem uma «cidade dos mortos» de **tumuli** (montes de terra sobre câmaras escavadas no tufo) alinhados em ruas, com túmulos que reproduzem o interior das casas: camas, cadeiras, tetos com vigas, tudo em pedra. É património da UNESCO e um dos lugares mais impressionantes da Etrúria.',
  { img: 'etr-cerveteri-banditaccia', leg: 'Túmulos em tumulus da necrópole da Banditaccia, Cerveteri.' },
  { h: 'Tarquínia e os túmulos pintados' },
  '**Tarquínia** (*Tarchna*) conta com uma enorme necrópole, **Monterozzi**, com cerca de seis mil túmulos escavados, dos quais cerca de duzentos têm pinturas nas paredes. São um dos maiores conjuntos de pintura antiga que se conservam, e mostram banquetes, caçadas, danças, jogos atléticos e cenas do além. A cidade tem também o templo da **Ara da Rainha** (*Ara della Regina*), de onde vêm os **Cavalos Alados**, uma placa de terracota do século IV a.C. que está hoje no Museu de Tarquínia.',
  { img: 'etr-tarquinia-cavalos-alados', leg: 'Cavalos alados em terracota do templo da Ara della Regina, Tarquínia, séc. IV a.C., Museu Nacional de Tarquínia.' },
  { h: 'Veios, Vulci e Volterra' },
  '**Veios** estava a poucos quilómetros de Roma, e a rivalidade entre as duas explica as guerras do século V. No santuário de Portonaccio encontrou-se o Apolo de terracota. **Vulci** foi uma cidade de metalurgistas e de ceramistas, cujos túmulos (como o **François**) são dos mais ricos. **Volterra** ergue-se num planalto de 500 m, com muralhas e uma monumental **Porta all’Arco** (de origem etrusca, séculos IV–III a.C., e depois muito reparada, com cabeças de pedra muito desgastadas); o seu museu, o Guarnacci, tem cerca de seiscentas urnas funerárias, muitas de alabastro.',
  { img: 'etr-volterra-porta-arco', leg: 'Porta all’Arco, Volterra, séc. IV–III a.C.' },
  { h: 'Marzabotto: uma cidade planeada' },
  '**Marzabotto**, junto ao rio Reno, foi fundada por volta de 500 a.C. e dispõe de um traçado em **quadrícula** (ruas principais e perpendiculares, quarteirões regulares, um sistema de águas e esgotos), um planeamento que os gregos usavam e que os romanos, mais tarde, adotarão. Foi abandonada depois das invasões gaulesas, em meados do século IV a.C. Hoje é um parque arqueológico.',
  { img: 'etr-marzabotto', leg: 'Ruínas do traçado urbano de Marzabotto, c. 500 a.C.' },
  { h: 'Populónia: a cidade do ferro' },
  '**Populónia** (*Pupluna*) é a única cidade etrusca construída à beira-mar, num promontório em frente da ilha de Elba. O minério de ferro de Elba era fundido ali, e os montes de escória, depois recuperados na época moderna, chegavam a cobrir as necrópoles. O ferro foi a grande fonte de riqueza da Etrúria, e Populónia, a sua porta para o Tirreno.',
  { img: 'etr-populonia', leg: 'Promontório de Populónia e necrópole de São Cerbone, Toscana.' },
  { h: 'Rotas e comércio' },
  'Os etruscos eram navegadores. Os seus barcos, de remos e de vela, circulavam entre o Tirreno e o Adriático, e as rotas ligavam os portos da Etrúria (Pirgos, Gravisca, Populónia) a **Cartago**, à **Sardenha**, à **Córsega**, a **Marselha**, ao sul de França e à **Grécia**. Exportavam **ferro**, **cobre**, **bronze**, **vinho** e **azeite**; importavam cerâmica grega, perfumes, marfim, ouro, âmbar do Báltico (por vias terrestres através dos Alpes) e produtos do Egito e do Oriente. Os gregos chamavam-lhes **piratas** (o *Hino Homérico a Dioniso* conta como piratas tirrenos foram transformados em golfinhos), mas a fama tem o tom do rival; a atividade era, antes de mais, comércio.',
  { img: 'etr-rotas-comercio', leg: 'Esquema simplificado das rotas comerciais etruscas no Mediterrâneo ocidental, séculos VII–V a.C. Mapa gerado por IA.' },
  { img: 'etr-navio-etrusco', leg: 'Navio mercante etrusco, séc. VI a.C.; reconstituição conjetural. Ilustração gerada por IA.' }
];

const sociedade = [
  { h: '1. Organização política' },
  'A Etrúria nunca foi um reino único: era um conjunto de **cidades-estado** independentes, cada uma com o seu território, as suas muralhas e os seus governantes. Nos séculos mais antigos, o poder era de **reis** (*lucumones*), apoiados por aristocracias de guerreiros e de grandes proprietários; mais tarde, a maior parte das cidades passou a ser governada por **magistrados anuais**, de famílias aristocráticas (o título *zilath*, que se pode traduzir por «magistrado superior», aparece nas inscrições). Há sinais de que chefes poderosos podiam dominar uma cidade, como **Thefarie Velianas**, de Caere (c. 500), a quem o texto fenício das lâminas de Pirgos chama «rei sobre Caere».',
  'As cidades colaboravam na liga religiosa, mas raramente numa política comum, e isso foi uma fraqueza fatal: os romanos puderam conquistá-las uma a uma. Cada ano, a liga reunia-se no **Fanum Voltumnae**, para ritos e jogos, e para decidir, em ocasiões graves, uma ação comum.',
  { img: 'etr-tumulo-francois', leg: 'Cena de pintura mural da Túmulo François, Vulci, séc. IV a.C.: o guerreiro «Macstrna» liberta um companheiro.' },
  { h: '2. Classes sociais' },
  { lista: [
    '**Aristocracia:** grandes famílias com nome de família (gentilício), terras, minas e navios, que dominaram o poder e deixaram os túmulos mais ricos.',
    '**Sacerdotes e harúspices:** especialistas na leitura dos sinais divinos, muito respeitados, também em Roma.',
    '**Artesãos, comerciantes e pequenos proprietários:** trabalhavam o metal, a cerâmica, o tecido e a terra, e enriqueceram com o comércio.',
    '**Camponeses dependentes e servos:** tratavam das terras dos grandes; em algumas cidades eram numerosos, e as revoltas (como a de Volsínios, em 264) mostram tensões sociais.',
    '**Escravos:** sobretudo prisioneiros e comprados; pouco se sabe do seu número.'
  ] },
  { h: 'A mulher etrusca' },
  'Uma particularidade etrusca que impressionou os observadores gregos e romanos foi o lugar público da **mulher**. As mulheres tinham **nome próprio** (como *Larthia* ou *Ramtha*) e e os filhos podiam ser designados também pelo nome da mãe, o que é raro no mundo antigo; participavam nos **banquetes** reclinadas ao lado do marido, assistiam a espetáculos e eram retratadas como iguais nos túmulos, de que o **Sarcófago dos Esposos** é o exemplo famoso. O historiador grego Teopompo (século IV a.C.) escreveu sobre elas com choque e com exagero, e as suas acusações de libertinagem têm de ser lidas como propaganda hostil. Isto não quer dizer igualdade moderna: o poder político continuava a ser dos homens.',
  { h: '3. Religião' },
  'A religião etrusca era profundamente **ritual**: segundo Lívio, os etruscos eram «um povo mais dedicado do que qualquer outro aos ritos religiosos». Acreditavam que os deuses comunicavam a sua vontade por sinais (relâmpagos, voo das aves, fígados dos animais), e que era preciso interpretá-los e cumprir os ritos com exatidão. O conjunto de regras chamava-se *Etrusca disciplina* e estava registado em livros sagrados (*libri haruspicini*, *fulgurales*, *rituales*), todos perdidos.',
  { tabela: { cab: ['Divindade etrusca', 'Equivalente grego/romano', 'Papel'], linhas: [
    ['Tinia', 'Zeus / Júpiter', 'Rei dos deuses; senhor do raio'],
    ['Uni', 'Hera / Juno', 'Esposa de Tinia; protetora das cidades e das mulheres'],
    ['Menrva', 'Atena / Minerva', 'Deusa da sabedoria e da guerra; com Tinia e Uni formava a tríade das cidades'],
    ['Aplu', 'Apolo', 'Deus da luz e da profecia'],
    ['Turms', 'Hermes / Mercúrio', 'Mensageiro dos deuses e guia das almas'],
    ['Fufluns', 'Dioniso / Baco', 'Deus do vinho'],
    ['Turan', 'Afrodite / Vénus', 'Deusa do amor'],
    ['Sethlans', 'Hefesto / Vulcano', 'Deus do fogo e da forja'],
    ['Laran', 'Ares / Marte', 'Deus da guerra'],
    ['Nethuns', 'Posídon / Neptuno', 'Deus do mar e das águas'],
    ['Aita e Phersipnai', 'Hades e Perséfone', 'Senhores do mundo dos mortos'],
    ['Charun e Vanth', '—', 'Figuras do além que acompanham os mortos: o demónio Charun, com um martelo, e a figura feminina Vanth']
  ] } },
  { img: 'etr-figado-piacenza', leg: 'Fígado de Placência, bronze, c. 100 a.C., com os nomes de divindades gravados, Museu Cívico de Placência.' },
  { h: 'Os harúspices e o fígado' },
  'O **harúspice** examinava o **fígado de um animal** sacrificado (**hepatoscopia**) e lia, nas suas marcas, a vontade dos deuses. O **Fígado de Placência**, um modelo de bronze de um fígado de carneiro dividido em regiões, cada uma com o nome de um deus, serviu talvez de manual de ensino. A lenda dizia que a *disciplina* tinha sido ditada a um lavrador de Tarquínia por **Tages**, um menino-sábio que saiu de um sulco do campo, e, segundo outra tradição, uma ninfa, **Vegoia**, que revelou as regras das fronteiras. Os romanos continuaram a consultar harúspices etruscos durante séculos, e, segundo Zósimo, ainda em 408 d.C. adivinhos da Etrúria disseram ter afastado Alarico de Narni com raios e ofereceram-se para o fazer em Roma.',
  { img: 'etr-aruspice-cena', leg: 'Harúspice etrusco a examinar um fígado, c. 400 a.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: 'O além e os túmulos' },
  'Os etruscos acreditavam numa vida depois da morte, sombria ou festiva, e deixaram nos túmulos objetos, alimentos e **pinturas** para acompanhar o morto. Os túmulos, no século VI e V a.C., mostram banquetes alegres e jogos, e depois, a partir do século IV, cenas mais sombrias, com os demónios do além. Segundo os autores romanos, tinham uma ideia de **ciclos de tempo**: ao povo etrusco estaria destinado um número limitado de «séculos» (dez), e o último teria começado em 44 a.C., ano da morte de César, segundo um relato (a interpretação é tardia e discutida).',
  { h: '4. Economia' },
  'A base era a **agricultura** (cereais como a espelta, vinha, oliveira, legumes, linho, gado), a **mineração** e a **metalurgia**. O ferro, o cobre e o estanho da Toscana e de Elba eram trabalhados em Populónia, Vetulónia e Vulci; o bronze era trabalhado em grande escala e exportado, e a **cerâmica**, o **marfim** e o **ouro** completavam a riqueza. Houve também sistemas de **drenagem** dos solos: os etruscos escavaram uma rede de túneis subterrâneos (*cuniculi*) para controlar a água e secar terras, sobretudo no sul da Etrúria.',
  'A moeda foi tardia: cunharam-se moedas em cidades como Populónia a partir dos séculos V–IV a.C., mas durante muito tempo o comércio fez-se por troca e por barras de metal.',
  { img: 'etr-cuniculos-esquema', leg: 'Esquema de uma rede de túneis de drenagem (cuniculi) etruscos; interpretação conjetural. Esquema gerado por IA.' },
  { h: '5. Escrita e língua' },
  'Os etruscos escreviam da **direita para a esquerda**, num alfabeto derivado do grego eubeu. Esse alfabeto passou depois para o latim, e é por isso que as letras que lemos descendem, em parte, das etruscas. Conhecem-se cerca de **13 mil inscrições**, quase todas curtas (nomes em túmulos, dedicatórias). Podemos **ler** o etrusco, porque as letras são conhecidas, mas só em parte o **compreendemos**: sabemos, por exemplo, os numerais *thu, zal, ci, śa* (de um a quatro) e muitas palavras de família e de religião, mas a gramática é pouco clara.',
  'Os textos longos são raros. O **Liber Linteus** («livro de linho»), hoje em Zagreb, é um calendário ritual de cerca de 1200 palavras legíveis, escrito em tiras de linho que acabaram, por um acaso curioso, a embrulhar uma múmia egípcia. A *Tabula Cortonensis* (descoberta em 1992) tem cerca de 200 palavras e é, aparentemente, um contrato sobre terras. As lâminas de Pirgos (c. 500) são um texto bilingue com o fenício, o que ajuda muito. Não restam obras de literatura, e a história etrusca, escrita por etruscos, perdeu-se.',
  { img: 'etr-liber-linteus', leg: 'Faixas de linho com texto etrusco (Liber Linteus), Museu Arqueológico de Zagreb.' },
  { h: '6. Casa e família' },
  'As casas mais antigas eram cabanas de madeira e de barro; depois passaram a ser casas de pedra, com **telhados de telha de terracota** e um espaço central. Em **Acquarossa**, perto de Viterbo, e em **Murlo** (Poggio Civitate), os arqueólogos escavaram bairros e palácios do século VII e VI a.C. com decoração de terracota. As casas dos ricos tinham um átrio e um pátio, um modelo que os romanos retomarão (o **átrio** é por vezes dito etrusco; a ligação é plausível mas debatida). As famílias aristocráticas usavam nomes de família e conservavam a memória dos antepassados.',
  { img: 'etr-casa-etrusca', leg: 'Casa etrusca de uma família abastada, séc. VI a.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '7. Alimentação' },
  { lista: [
    '**Cereais:** pão, papas e bolos de espelta, trigo e cevada.',
    '**Vinho:** produzido em grande quantidade, bebido misturado com água e exportado em ânforas; os etruscos eram famosos pelos banquetes.',
    '**Azeite e produtos da horta:** azeitonas, legumes, fruta (figos, uvas), mel.',
    '**Carne e peixe:** porco, carneiro, caça (javali, veado), aves; peixe e mariscos no litoral.',
    '**Queijo, ovos e leite:** a pecuária era importante.',
    '**Mesa:** os ricos comiam deitados, em **camas de banquete**, ao som de música.'
  ] },
  { img: 'etr-tumulo-triclinio', leg: 'Banquete na Túmulo do Triclínio, Tarquínia, c. 470 a.C.' },
  { h: '8. Vestuário' },
  'Os homens usavam uma **túnica** curta e um manto semicircular, a **tebenna**, que é considerada antepassada da **toga** romana. As mulheres vestiam túnicas compridas e mantos, e usavam penteados elaborados e **toucados** (o *tutulus*, um chapéu cónico). Os sapatos, de bico revirado (**calcei repandi**), eram típicos. A **joalharia** etrusca de ouro, com a técnica do **granulado** (pequeníssimas esferas de ouro soldadas) e da filigrana, é das mais finas da Antiguidade.',
  { img: 'etr-ouro-granulado', leg: 'Joia etrusca de ouro com granulado, séc. VII–VI a.C.' },
  { img: 'etr-familia-vestuario', leg: 'Casal e filhos em trajes etruscos, c. 500 a.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '9. Música, dança e jogos' },
  'A música era omnipresente: o **aulos** (flauta dupla) acompanhava banquetes, procissões, jogos e até o trabalho (segundo alguns autores gregos, até se chicoteavam escravos ao som da flauta); também se usavam a **lira** e instrumentos de sopro de bronze, como a trombeta. As danças e as corridas de **carros** e os combates de **pugilato** aparecem nas pinturas dos túmulos. Os romanos receberam dos etruscos os **jogos fúnebres** e muitos espetáculos, e os atores romanos (*histriones*) têm nome de origem etrusca; a ligação direta dos gladiadores com os etruscos é debatida, porque muitos autores modernos a procuram antes na Campânia.',
  { img: 'etr-tumulo-caca-pesca', leg: 'Pintura da Túmulo da Caça e da Pesca, Tarquínia, c. 520 a.C.' },
  { h: '10. Metalurgia e artes' },
  'O **bronze** foi talvez a maior arte etrusca. Fundiam pela técnica da **cera perdida** estátuas, vasos, **espelhos** gravados (muito apreciados, com cenas de mitos), candelabros e armas, e exportaram-nos para todo o Mediterrâneo. O *bucchero*, cerâmica negra e polida, com paredes finas e formas elegantes, é a cerâmica mais típica (c. 675 – 500 a.C.). Em escultura, os etruscos preferiram a **terracota**, para decorar templos, e deixaram retratos de vivos e de mortos de grande realismo.',
  { img: 'etr-espelho-bronze', leg: 'Espelho etrusco de bronze gravado com cena mitológica, séc. IV a.C.' },
  { img: 'etr-bucchero', leg: 'Vaso de bucchero, cerâmica negra etrusca, séc. VII–VI a.C.' },
  { img: 'etr-oficina-bronze', leg: 'Oficina etrusca de fundição de bronze, séc. VI a.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '11. Arquitetura e urbanismo' },
  'Os etruscos construíam com **madeira, tijolo cru e pedra**. O seu **templo**, que o romano Vitrúvio descreve e que se chama «tuscânico», era um edifício alto e largo, com **podium** (plataforma), uma escadaria só na frente, um pórtico de colunas na fachada e três **celas** (salas) lado a lado, e um grande telhado de beiral saliente decorado com terracotas coloridas. As muralhas eram de grandes blocos, e as portas, em arco, são das primeiras da Itália (o **arco** foi usado pelos etruscos, embora não o tenham inventado). As cidades planeadas, como Marzabotto, orientavam as ruas segundo os pontos cardeais, por razões religiosas, e o ritual de fundação da cidade (traçar um sulco com um arado) foi herdado por Roma.',
  { img: 'etr-templo-tuscanico', leg: 'Reconstituição conjetural de um templo tuscânico, séc. VI a.C. Ilustração gerada por IA.' },
  { h: '12. Medicina e técnica' },
  'Os etruscos tinham fama de saber de **medicina** e de **águas termais**, e conhecem-se próteses dentárias de ouro, com dentes presos a bandas de ouro, desde cerca do século VII a.C. Na **técnica**, sobressaem a hidráulica (drenagens, canalizações e esgotos, uma das heranças que Roma tomou, como a Cloaca Máxima, tradicionalmente atribuída aos Tarquínios), a metalurgia do ferro, a navegação e a construção de estradas.',
  { h: '13. Guerra' },
  'Os primeiros guerreiros etruscos combatiam à maneira villanoviana, com espadas de antenas e escudos redondos; a partir do século VII a.C., adotaram a **falange de hoplitas**, com capacete, couraça, grevas, escudo redondo e lança, e usaram **carros** de guerra. Tinham uma marinha forte, de navios de guerra com esporão, e os capacetes de tipo «etrusco» (como o de Hierão) ficaram famosos. Os etruscos eram bons soldados mas mal coordenados: a falta de um comando comum às doze cidades e a pressão em várias frentes (Gregos, Cartagineses, Gauleses e Romanos) decidiram o seu destino.',
  { img: 'etr-batalha-hoplitas', leg: 'Hoplitas etruscos em combate, séc. VI a.C.; reconstituição conjetural. Ilustração gerada por IA.' }
];

const personalidades = [
  'Os etruscos deixaram sobretudo **nomes em túmulos**; as «biografias» de reis e rainhas vêm dos romanos e dos gregos, séculos depois. As figuras abaixo são reais ou lendárias, e isso vem dito.',
  { h: 'Tarquínio Prisco (tradição: reinou 616 – 579 a.C.)' },
  'Quinto rei de Roma, segundo a tradição. Filho de um mercador grego de Corinto, **Demarato**, que se fixara em Tarquínia, teria chegado a Roma com a mulher Tanaquil e mudado o nome (de *Lucumo* para *Lucius Tarquinius*). A tradição atribui-lhe a Cloaca Máxima, o Circo Máximo e o início do templo de Júpiter Capitolino. É difícil separar o rei real do rei lendário.',
  { h: 'Tanaquil' },
  'Mulher de Tarquínio Prisco, apresentada por Lívio como uma etrusca de grande carácter e perita em sinais e profecias. Foi ela, diz a tradição, quem interpretou o presságio de uma águia que levou o chapéu do marido e o devolveu, e quem anunciou que Tarquínio seria rei; mais tarde, apoiou a subida de Sérvio Túlio. É a figura que os romanos usaram para ilustrar a força das mulheres etruscas, e que pertence tanto à lenda como à história.',
  { img: 'etr-tanaquil-cena', leg: 'Tarquínio e Tanaquil e o presságio da águia, segundo a lenda; cena imaginada. Ilustração gerada por IA.' },
  { h: 'Sérvio Túlio / Macstrna (tradição: 578 – 535 a.C.)' },
  'Sexto rei de Roma. Os historiadores romanos faziam dele filho de uma escrava; o imperador **Cláudio**, num discurso de 48 d.C. gravado numa tábua de bronze encontrada em Lião, disse que ele era, na tradição etrusca, **Macstrna**, um companheiro de aventuras de um nobre etrusco, **Caile Vipinas**. A pintura do túmulo François, em Vulci (séc. IV a.C.), mostra um «Macstrna» a libertar Caile Vipinas, o que sugere que a identificação é antiga. A tradição romana atribui-lhe uma reforma do exército e uma muralha, e não sabemos até que ponto são factos.',
  { h: 'Tarquínio, o Soberbo (tradição: 535 – 509 a.C.)' },
  'Último rei de Roma, expulso em 509 a.C. segundo a tradição. A sua queda, atribuída à sua tirania e ao crime do filho contra Lucrécia, é a lenda da fundação da República; o que a arqueologia mostra é que a Roma do seu tempo era uma cidade importante, de grandes obras públicas.',
  { h: 'Lars Porsena de Clúsio' },
  'Rei etrusco de Clúsio (finais do século VI a.C.). A tradição conta que cercou Roma para repor Tarquínio e que o jovem Múcio Cévola, ao queimar a mão no fogo, o impressionou ao ponto de levantar o cerco (lenda). Plínio, o Velho, descreve o seu fabuloso túmulo-labirinto, com pirâmides, que ninguém encontrou (lenda).',
  { h: 'Vulca de Veios' },
  'O escultor etrusco mais célebre e um dos poucos cujo nome a tradição guardou: segundo Plínio, o Velho, foi chamado a Roma para fazer a estátua de terracota de **Júpiter** do templo Capitolino. É costume atribuir-lhe, por semelhança de estilo, o grupo de estátuas do santuário de Portonaccio, em Veios, incluindo o **Apolo**, mas a atribuição é conjetural.',
  { h: 'Thefarie Velianas (c. 500 a.C.)' },
  'Governante de Caere (Cerveteri), que mandou dedicar à deusa **Uni** (identificada com a fenícia **Astarte**) um santuário em Pirgos, e as lâminas de ouro que o provam, em etrusco e em fenício. É um dos poucos etruscos de que temos um texto de próprio punho, e mostra a colaboração entre Caere e os cartagineses.',
  { h: 'Aule Metele, o «Arengador» (c. 100 a.C.)' },
  'Etrusco de família abastada, de nome *Aule Metele* em etrusco (*Aulus Metellus* em latim), conhecido pela estátua de bronze que o mostra de toga e braço levantado, num gesto de oratória, com inscrição em etrusco. A estátua, encontrada em 1566 perto do lago Trasimeno, mostra a mistura final de cultura etrusca e romana, e está no Museu Arqueológico de Florença.',
  { h: 'Espurina' },
  'Harúspice etrusco do tempo de César. Segundo Suetónio, avisou Júlio César, em 44 a.C., de um perigo que culminaria nos Idos de Março. A história chegou a nós como anedota, mas ilustra o prestígio dos adivinhos etruscos até ao fim da República.',
  { h: 'Caio Mecenas (c. 70 – 8 a.C.)' },
  'Amigo e conselheiro de Augusto e **protetor de poetas** como Horácio e Virgílio; o seu nome tornou-se sinónimo de «mecenas». Era de família nobre de **Arezzo** (os *Cilnii*), que, segundo Horácio, vinha de reis etruscos. O seu nome tornou-se, no Ocidente, uma palavra comum.',
  { h: 'Cláudio (imperador, 10 a.C. – 54 d.C.)' },
  'Imperador romano, interessado em história e antiguidades, escreveu em grego a *Tyrrhenika*, uma história dos etruscos em vinte livros, que se perdeu (Suetónio). É graças ao seu discurso no Senado que conhecemos a identificação de Sérvio Túlio com Macstrna.',
  { h: 'Thomas Dempster (1579 – 1625)' },
  'Erudito escocês que escreveu, para o grão-duque da Toscana, o *De Etruria regali* (c. 1616 – 1619), publicado apenas em 1723 – 1724 e que lançou a moda da «Etrusqueria». Os seus textos têm muita fantasia, mas fizeram regressar o interesse pelos etruscos.',
  { h: 'Massimo Pallottino (1909 – 1995)' },
  'Arqueólogo italiano, considerado o fundador da etruscologia moderna. Defendeu que os etruscos eram um povo formado na própria Itália, a partir do Villanoviano (a posição que o ADN antigo veio sustentar), e dirigiu a escavação de **Pirgos**, onde, em 1964, se encontraram as lâminas de ouro bilingues.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**O alfabeto latino:** o alfabeto em que lemos passou dos gregos aos etruscos e destes aos romanos.',
    '**Instituições e símbolos romanos:** segundo os autores antigos, os etruscos transmitiram a Roma o *fasces* (feixe de varas dos lictores), a cadeira curul, o triunfo e a toga; a origem de cada um é, por vezes, discutida, mas a influência é largamente aceite.',
    '**A arte de ler os sinais:** a adivinhação romana foi, em grande parte, herdada da *Etrusca disciplina*.',
    '**O urbanismo e a engenharia:** cidades planeadas, esgotos, drenagem e a arquitetura do templo.',
    '**A ordem toscana:** o estilo de coluna simples, sem caneluras, que o Renascimento chamou «ordem toscana» a partir de Vitrúvio.',
    '**Nomes de lugares:** *Toscana* vem de *Tusci*, o mar *Tirreno* de *Tyrrhenoi*, e a *Etrúria* guardou-se na memória cultural italiana.'
  ] },
  { h: 'Arte' },
  'A arte etrusca é uma mistura de influências (do Oriente, da Grécia, de Roma) e de estilo próprio: a expressividade das figuras, o gosto pelo **retrato**, o movimento e a ligação com o além. Entre as obras mais famosas estão o **Sarcófago dos Esposos**, a **Quimera de Arezzo** (bronze do séc. V–IV a.C.), o **Apolo de Veios**, a «**Sombra da Tarde**» (*Ombra della sera*, bronze alongado de Volterra, séc. III–II a.C., que lembra Giacometti) e a bronzeira do **Arengador**. A célebre **Loba Capitolina**, símbolo de Roma, foi durante muito tempo tida por etrusca, mas a sua datação é hoje muito debatida (alguns estudos sugerem uma origem medieval); só os gémeos foram acrescentados no Renascimento.',
  { img: 'etr-quimera-arezzo', leg: 'Quimera de Arezzo, bronze, c. 400 a.C., Museu Arqueológico Nacional de Florença.' },
  { img: 'etr-arringatore', leg: 'O «Arengador» (Aule Metele), bronze, c. 100 a.C., Museu Arqueológico Nacional de Florença.' },
  { img: 'etr-sombra-da-tarde', leg: 'Estatueta votiva de bronze, a «Sombra da Tarde» (Ombra della sera), Volterra, c. séc. III a.C., Museu Guarnacci.' },
  { h: 'Arquitetura' },
  'Quase tudo o que construíram para viver era de materiais perecíveis, e por isso o que resta são **túmulos**, muralhas e fundações. Os túmulos de Cerveteri e Tarquínia mostram, em pedra, interiores de casas; os templos deixaram bases e coberturas de terracota. A forma do templo etrusco e a do arco influenciaram a arquitetura romana, e, no Renascimento, os arquitetos recuperaram a «ordem toscana».',
  { h: 'Porque desapareceram?' },
  'Os etruscos não «desapareceram» de repente: foram **absorvidos**. Os historiadores apontam várias razões, que se combinam:',
  { lista: [
    '**Derrotas no mar:** Alalia (c. 540) e Cumas (474) tiraram-lhes o domínio das rotas e da Campânia.',
    '**Divisão política:** as cidades nunca formaram um estado, e Roma venceu-as uma a uma.',
    '**Invasões gaulesas:** no século IV a.C. destruíram as cidades etruscas do norte, a parte mais rica.',
    '**Integração em Roma:** a aristocracia etrusca foi sendo cooptada, com a cidadania romana (90–89 a.C.) e os casamentos mistos, e a língua cedeu ao latim.',
    '**A genética:** o estudo de 2021 mostra que a população local continuou na região, e que o grande abalo veio mais tarde, com a chegada de gente do Mediterrâneo oriental, no tempo do Império.'
  ] },
  'Ou seja, o povo continuou, mas a **língua** e a **identidade política** dissolveram-se no mundo romano.',
  { h: 'A redescoberta dos etruscos' },
  'A etruscologia nasceu com o Renascimento (a Quimera, 1553) e a Etrusqueria; tornou-se científica no século XIX e no XX. Um escritor inglês, **D. H. Lawrence**, deixou em *Etruscan Places* (1932) uma visita muito pessoal aos túmulos de Cerveteri, Tarquínia, Vulci e Volterra, ainda hoje célebre. Hoje, a **arqueologia**, o **ADN antigo** e a análise das inscrições continuam a mudar o que sabemos.',
  { img: 'etr-museu-villa-giulia', leg: 'Museu Nacional Etrusco de Villa Giulia, Roma.' },
  { caixa: 'Onde ver os etruscos', texto: 'Em **Itália**: o **Museu Nacional Etrusco de Villa Giulia**, em Roma (o melhor para começar); o **Museu Gregoriano Etrusco**, no Vaticano; o **Museu Arqueológico Nacional de Florença** (a Quimera e o Arengador); o **Museu Guarnacci**, em Volterra; o **Museu Nacional de Tarquínia** (com os Cavalos Alados e túmulos pintados, que se podem visitar na necrópole); e as necrópoles de **Cerveteri** (Banditaccia) e de **Tarquínia** (Monterozzi), ambas Património da UNESCO. No estrangeiro: o **Louvre** e o **Museu Britânico** têm grandes coleções, e o **Museu Arqueológico de Zagreb** guarda o *Liber Linteus*.' }
];

const quiz = [
  { p: 'Como se chamavam a si próprios os etruscos?', op: ['Tusci', 'Rasna', 'Tyrrhenoi', 'Latini'], certa: 1, exp: 'Rasna (ou Rasenna). Tusci era o nome romano e Tyrrhenoi o grego.' },
  { p: 'Que região de Itália corresponde, em boa parte, à antiga Etrúria?', op: ['Toscana', 'Sicília', 'Calábria', 'Lombardia'], certa: 0, exp: 'A Toscana guarda o nome dos Tusci, com o norte do Lácio e parte da Úmbria.' },
  { p: 'A língua etrusca pertence à família indo-europeia?', op: ['Sim, é parente do latim', 'Sim, é parente do grego', 'Não, é uma língua não indo-europeia', 'Ninguém sabe nada sobre ela'], certa: 2, exp: 'É uma língua isolada, relacionada apenas com o rético e o lemnio (família tirrénica).' },
  { p: 'Segundo Heródoto, de onde teriam vindo os etruscos?', op: ['De Cartago', 'Do Egito', 'Da Gália', 'Da Lídia, na Anatólia'], certa: 3, exp: 'Heródoto diz que vieram da Lídia; Dionísio de Halicarnasso defendia que eram autóctones, o que a arqueologia e o ADN antigo apoiam.' },
  { p: 'O que mostrou o estudo de ADN antigo de 2021 sobre a origem dos etruscos?', op: ['Eram vindos da Anatólia', 'Partilhavam a origem genética dos vizinhos latinos', 'Eram de origem africana', 'Eram descendentes de vikings'], certa: 1, exp: 'O estudo de Posth e colegas (Science Advances, 2021) não encontrou sinais de uma migração recente da Anatólia.' },
  { p: 'Que metal foi a grande fonte de riqueza da Etrúria, extraído na ilha de Elba e na Toscana?', op: ['Ouro', 'Prata', 'Ferro', 'Alumínio'], certa: 2, exp: 'O ferro, fundido sobretudo em Populónia, e o cobre, o estanho e o chumbo das Colinas Metalíferas.' },
  { p: 'Que cidade etrusca, a menos de 20 km de Roma, foi conquistada por Camilo em 396 a.C. (data tradicional)?', op: ['Veios', 'Tarquínia', 'Clúsio', 'Volterra'], certa: 0, exp: 'Veios, depois de uma longa guerra que a tradição compara ao cerco de Troia.' },
  { p: 'O que são os «tumuli» da Banditaccia, em Cerveteri?', op: ['Templos de madeira', 'Teatros', 'Portos', 'Montes de terra sobre câmaras funerárias escavadas no tufo'], certa: 3, exp: 'São túmulos com câmaras que reproduzem interiores de casas, em ruas de uma verdadeira «cidade dos mortos».' },
  { p: 'Quem foi o escultor etrusco de Veios, cujo nome nos chegou por Plínio, o Velho?', op: ['Fídias', 'Vulca', 'Policleto', 'Lisipo'], certa: 1, exp: 'Vulca, chamado a Roma para fazer a estátua de Júpiter do Capitólio; a atribuição do Apolo de Veios é conjetural.' },
  { p: 'Em que batalha, em 474 a.C., a frota etrusca foi derrotada por Hierão de Siracusa?', op: ['Salamina', 'Alalia', 'Cumas', 'Actium'], certa: 2, exp: 'A batalha naval de Cumas marcou o fim do poder naval etrusco e do domínio da Campânia.' },
  { p: 'O que fazia um harúspice?', op: ['Lia a vontade dos deuses, por exemplo no fígado de animais sacrificados', 'Construía templos', 'Comandava a frota', 'Escrevia as leis'], certa: 0, exp: 'A haruspicina, ou hepatoscopia, era uma peça central da religião etrusca e foi adotada em Roma.' },
  { p: 'Que particularidade da mulher etrusca chocou os autores gregos?', op: ['Ficava fechada em casa', 'Era sempre sacerdotisa', 'Combatia nas batalhas', 'Participava nos banquetes ao lado do marido e tinha nome próprio'], certa: 3, exp: 'Ao contrário das gregas, aparece em banquetes, nos túmulos e nas inscrições, com nome próprio.' },
  { p: 'Que texto etrusco, hoje em Zagreb, é um calendário ritual escrito em linho?', op: ['Tabula Cortonensis', 'Liber Linteus', 'Lâminas de Pirgos', 'Fígado de Placência'], certa: 1, exp: 'O Liber Linteus, de cerca de 1200 palavras legíveis, acabou a embrulhar uma múmia egípcia.' },
  { p: 'Em 1964, que descoberta em Pirgos ajudou a decifrar o etrusco?', op: ['Um tesouro de moedas', 'Um templo inteiro', 'Lâminas de ouro com texto etrusco e fenício', 'Uma biblioteca de papiros'], certa: 2, exp: 'As lâminas de Pirgos (c. 500 a.C.) são um texto bilingue etrusco-fenício.' },
  { p: 'Que político romano, protetor de Horácio e Virgílio, descendia de uma família nobre de Arezzo?', op: ['Mecenas', 'Cícero', 'Catão', 'Agripa'], certa: 0, exp: 'Caio Mecenas, dos Cilnii de Arezzo, deu origem à palavra «mecenas».' }
];

export default {
  id: 'etruscos',
  cor: '#8a5a3a',
  emblema: '../assets/img/etruscos.png',
  nome:    { pt: 'Etruscos', en: 'Etruscans' },
  periodo: { pt: 'c. 900 – 27 a.C.', en: 'c. 900 – 27 BC' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: legado, en: EN.legado },
  quiz:           { pt: quiz, en: EN.quiz }
};
