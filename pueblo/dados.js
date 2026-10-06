// POVOS PUEBLO ANCESTRAIS — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas aproximadas, a partir da cronologia por anéis de árvores (dendrocronologia) e do radiocarbono; as «fases» (Basketmaker, Pueblo I–III) são uma classificação dos arqueólogos (Conferência de Pecos, 1927), não nomes que o povo desse tempo usasse. a.C./d.C.
// Imagens: cada {img:'id'} procura o ficheiro  pueblo/img/id.jpg  (ver IMAGENS_PUEBLO.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'Os **Povos Pueblo ancestrais** (em inglês, *Ancestral Pueblo peoples* ou *Ancestral Puebloans*) foram as comunidades agricultoras que, durante cerca de treze séculos, viveram na região dos **Quatro Cantos** (*Four Corners*), o ponto onde se encontram os atuais estados norte-americanos do **Novo México, Arizona, Utah e Colorado**. Em termos clássicos, a sua história corre desde o **Basketmaker** (c. 100 d.C., na cronologia tradicional; os arqueólogos recuam hoje as primeiras aldeias agrícolas muito mais atrás) até c. **1300 d.C.**, quando as grandes povoações do planalto do Colorado foram deixadas. Mas não é uma história que acabe aí: os seus descendentes vivem hoje nos **Pueblos** do Novo México e do Arizona, entre eles os **Hopi**, os **Zuni**, os **Acoma** e as povoações do **Rio Grande**.',
    'Cultivavam **milho, feijão e abóbora**, criaram **perus**, fizeram cestaria e cerâmica de grande beleza, e construíram em pedra e adobe aldeias de muitos andares, as «casas grandes» e as aldeias nas falésias. O seu momento de maior brilho foi o **Chaco Canyon** (c. 850 – 1140), com edifícios monumentais como o **Pueblo Bonito**, uma rede de **estradas** e alinhamentos com o Sol e a Lua; depois, no século XIII, vieram as povoações de **Mesa Verde**, escavadas nas falésias. Uma sequência de **secas** e de mudanças sociais levou as pessoas a mudarem-se para sul e para leste, em direção a rios e a nascentes mais seguros. Não «desapareceram»: **mudaram de sítio** e continuaram.'
  ] },
  { img: 'pue-mapa-sudoeste', leg: 'Habitações na falésia em Spruce Tree Point, Mesa Verde (Colorado): casas de pedra dos Pueblo ancestrais sob uma abóbada de arenito.' },
  { caixa: 'Um nome que se evita: «Anasazi»', texto: 'Durante todo o século XX, os livros chamaram a estes povos **«Anasazi»**. A palavra vem do **navajo** (*Anaasází*) e costuma traduzir-se por «antepassados dos inimigos» ou «antigos inimigos»; os Navajo chegaram à região séculos depois da partida dos construtores de Mesa Verde. Os descendentes (Hopi, Zuni e outros Pueblos) consideram o termo **ofensivo** e inadequado, porque lhes foi dado por um povo vizinho e não pela sua própria língua, e por isso a arqueologia atual prefere **«Ancestral Pueblo»** (ou «Pueblo ancestral»). Cada comunidade tem, aliás, os seus nomes próprios para os antepassados: os Hopi dizem *Hisatsinom*, «povo de há muito tempo». É por isso que neste projeto se usa «Ancestral Pueblo», e não «Anasazi».' },
  { h: 'Onde ficava' },
  'O território é o do **planalto do Colorado**: uma paisagem de **mesas** (planaltos de topo plano), de **canhões** profundos e de **semi-deserto**, a uma altitude de cerca de 1500 a 2300 m, com chuvas escassas e muito irregulares. Os rios principais são o **San Juan**, o **Colorado** e o **Rio Grande**, e os afluentes sazonais (*washes*) só correm depois das chuvas. Parece uma terra pouco amiga da agricultura, e é nisso que está o espanto: foi com **água de chuva e de escorrência**, com solos bem escolhidos e com muito conhecimento do clima que estas comunidades sustentaram milhares de pessoas.',
  'As regiões principais, tal como os arqueólogos as dividem, são três: o **Chaco** (bacia do San Juan, no noroeste do Novo México), o **Mesa Verde** (sudoeste do Colorado e Utah adjacente, a região do rio San Juan e do Mancos) e o **Kayenta** (nordeste do Arizona, com o Canyon de Chelly e as falésias de Betatakin e Keet Seel). A sul e a leste, mais tarde, o centro de gravidade deslocou-se para o **Little Colorado**, para os planaltos **Hopi** e **Zuni**, e para o **Rio Grande**.',
  { img: 'pue-canyon-chelly', leg: 'Canyon de Chelly, Arizona: paredes de arenito vermelho com casas de pedra de comunidades Pueblo ancestrais e, depois delas, navajo.' },
  { h: 'Quando existiu' },
  'A classificação usada pela maioria dos arqueólogos vem da **Conferência de Pecos** (1927) e divide a história em fases, de **Basketmaker** a **Pueblo**. As datas são aproximadas e variam de região para região, e são **convenções dos estudiosos**: nenhum Pueblo antigo se chamou a si próprio «Basketmaker» ou «Pueblo II». A data de c. 100 d.C. é a do início clássico do Basketmaker II; as descobertas posteriores mostram que o **milho** chegou ao sudoeste por volta de 2000 a.C. e que as comunidades de Basketmaker II já cultivavam e guardavam alimentos desde c. 1200 a.C. (a cronologia é debatida).',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Basketmaker II', 'c. 100 d.C. (início clássico; em muitas regiões, desde c. 1200 a.C.) – c. 500 d.C.', 'Caçadores-agricultores com milho e abóbora; cestaria fina; atlatl (propulsor de dardos); primeiras casas semi-enterradas; cistas de armazenamento'],
    ['Basketmaker III', 'c. 500 – 750 d.C.', 'Aldeias de casas semi-enterradas (*pit houses*); chegada do feijão; cerâmica; arco e flecha'],
    ['Pueblo I', 'c. 750 – 900 d.C.', 'Casas de superfície em fila, de adobe e de paus; as *pit houses* tornam-se kivas; grandes aldeias na região de Dolores e Cedar Mesa'],
    ['Pueblo II', 'c. 900 – 1150 d.C.', 'Idade da expansão chacoana: casas grandes, estradas, grandes kivas; alvenaria de pedra; comércio de turquesa, araras e cacau'],
    ['Pueblo III', 'c. 1150 – 1300 d.C.', 'Aldeias densas e defensivas, muitas nas falésias (Mesa Verde); secas; abandono da região dos Quatro Cantos'],
    ['Pueblo IV e Pueblos atuais', 'c. 1300 d.C. até hoje', 'Grandes povoações no Rio Grande, em Zuni, em Acoma e nas mesas Hopi; continuidade cultural e linguística até ao presente']
  ] } },
  { img: 'pue-pueblo-bonito-aerea', leg: 'Vista aérea do Pueblo Bonito, Chaco Canyon, Novo México: o maior dos grandes edifícios do Chaco, com a sua planta em «D».' },
  { h: 'Quem eram?' },
  'Não foi um povo único, nem um império: foram **muitas comunidades** de agricultores com uma cultura material semelhante (casas de pedra, cerâmica pintada a preto e branco, kivas) e, tudo indica, **línguas diferentes**. Os Pueblos atuais falam línguas de quatro famílias que não se entendem entre si: o **hopi** (família uto-asteca), o **zuni** (língua isolada), o **keres** (outra língua isolada) e as línguas **tanoanas** (tewa, tiwa, towa). Isto sugere que os seus antepassados falavam várias línguas, e que muitas comunidades se juntaram e separaram ao longo dos séculos.',
  'A arqueologia e as tradições orais dos Pueblos concordam num ponto essencial: os atuais Pueblos **descendem** das comunidades dos Quatro Cantos. Em 2017, um estudo de ADN antigo do Chaco (ver «Personalidades») confirmou também ligações genéticas entre os enterramentos do Pueblo Bonito e os Pueblos de hoje, entre eles o Pueblo de Picuris. Para os Hopi, os Zuni e os outros, os sítios antigos não são «ruínas de um povo extinto», mas **lugares de uma história de família**, ligados às migrações dos seus clãs.',
  { h: 'Porque importam' },
  { lista: [
    '**Agricultura em terra seca:** milho, feijão e abóbora cultivados com chuva, canais, pequenas barragens e socalcos, num dos ambientes mais exigentes da América do Norte.',
    '**Arquitetura:** o Pueblo Bonito, com pelo menos 650 salas, foi um dos maiores edifícios da América do Norte até ao século XIX; as aldeias nas falésias de Mesa Verde são das mais famosas do mundo.',
    '**Astronomia em pedra:** sítios como o Chaco, Chimney Rock e Fajada Butte têm alinhamentos com o Sol e com a Lua (com interpretações por vezes debatidas).',
    '**Redes a longas distâncias:** turquesa do Novo México, conchas do Pacífico e do golfo da Califórnia, araras e cacau do México, tudo chegou ao Chaco.',
    '**Uma história por contar de dentro:** a ciência e as tradições orais dos Pueblos complementam-se; a ideia de um «mistério dos desaparecidos» é um mito moderno.',
    '**Continuidade:** Acoma, Taos, Hopi e Zuni mostram que esta é também uma história viva, e não só uma história de ruínas.'
  ] },
  { img: 'pue-acoma', leg: 'Acoma Pueblo, o «Sky City» (cidade do céu), Novo México, sobre uma mesa de 112 m de altura: um dos lugares habitados há mais tempo nos Estados Unidos.' },
  { caixa: 'Os Pueblos hoje', texto: 'Existem hoje **19 pueblos reconhecidos no Novo México** (entre eles Acoma, Zuni, Taos, Santo Domingo, San Ildefonso, Santa Clara), as **aldeias Hopi** do Arizona e, mais a sul, o Pueblo Ysleta del Sul, no Texas. Falam as suas línguas, mantêm os seus calendários de festas e de danças e governam-se de forma própria. Os sítios do Chaco, de Mesa Verde e de outros lugares são, para muitos destes povos, **lugares sagrados** que se visitam com respeito; as regras de cada comunidade (por exemplo, sobre fotografias, danças ou recolha de objetos) devem ser seguidas.' }
];

const linha = [
  'Esta linha do tempo segue a história dos Pueblos ancestrais desde o milho e as primeiras casas semi-enterradas até aos Pueblos de hoje. As datas dos séculos IX a XIII assentam em **anéis de árvores** (dendrocronologia), que as fixam ao ano; as dos períodos mais antigos vêm do **radiocarbono** e têm margens maiores. As fases (Basketmaker, Pueblo I–III) são conceitos dos arqueólogos.',
  { linha: [
    { d: 'c. 2000 a.C.', t: 'O milho chega ao sudoeste', x: 'Vindo do México, onde foi domesticado a partir de uma erva selvagem (o teosinto), o **milho** aparece nos vales do sudoeste norte-americano por volta de 2000 a.C. e espalha-se pelo planalto do Colorado nos séculos seguintes (datas e rotas debatidas). É a base de tudo o que vem depois.' },
    { d: 'c. 1200 a.C. – 500 d.C.', t: 'Basketmaker II', x: 'Comunidades de caçadores-agricultores fazem **cestos** tão bem tecidos que chegam a guardar água, e **sandálias** de iúca; caçam com o **atlatl** (propulsor de dardos), guardam o grão em cistas escavadas na rocha e vivem em casas semi-enterradas. Pintam e gravam a rocha: algumas das figuras mais antigas dos cânions do Utah e do Arizona são desta época. A data clássica de «c. 100 d.C.» corresponde ao início desta fase na primeira classificação de 1927.' },
  ] },
  { img: 'pue-newspaper-rock', leg: 'Petroglifos em Newspaper Rock, Utah, gravados em épocas diferentes (entre outros, por povos Pueblo ancestrais).' },
  { linha: [
    { d: 'c. 500 – 750 d.C.', t: 'Basketmaker III: aldeias e cerâmica', x: 'Surgem **aldeias** de casas semi-enterradas (*pit houses*), as primeiras vasilhas de **cerâmica** (cinzentas, depois pintadas), o **arco e a flecha** e o **feijão**, que completa, com o milho e a abóbora, a trilogia alimentar. Os perus são criados, de início sobretudo por causa das penas. Em Shabik’eshchee, no Chaco, há uma aldeia deste tipo, com uma casa maior, talvez comunitária.' },
    { d: 'c. 750 – 900 d.C.', t: 'Pueblo I: o nascimento do «pueblo»', x: 'As casas passam a fazer-se à superfície, em **fila**, com paredes de paus e barro e depois de adobe e de pedra, e com uma depressão circular (a antiga *pit house*, agora **kiva**) à frente. Grandes aldeias aparecem, por exemplo, na região de Dolores (Colorado). Em partes do Mesa Verde a população cresce muito e mais tarde diminui, por razões que se ligam à seca.' },
    { d: 'c. 850 d.C.', t: 'Começa o Pueblo Bonito', x: 'No **Chaco Canyon** (Novo México), começa a construção de um grande edifício de pedra, em arco, que será o **Pueblo Bonito**. Vai crescer durante cerca de 300 anos, por fases, e tornar-se um dos maiores edifícios construídos na América do Norte antes do século XIX. Já havia aldeias no canhão desde o Basketmaker III; o que se vê agora é um salto de escala.' },
  ] },
  { img: 'pue-bonito-reconstrucao', leg: 'Reconstituição conjetural do Pueblo Bonito no século XI, com as suas fachadas curvas, terraços e kivas. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 900 – 1050 d.C.', t: 'Pueblo II e o florescimento do Chaco', x: 'A «era chacoana»: dezenas de **casas grandes** (*great houses*) no canhão, **grandes kivas**, **estradas** retilíneas que se estendem por dezenas de quilómetros e uma vasta área de «casas grandes periféricas» (*outliers*) com a mesma arquitetura. Em 2009, análises químicas encontraram vestígios de **cacau** em vasos cilíndricos do Pueblo Bonito: o cacau vinha de Mesoamérica, a mais de mil quilómetros.' },
    { d: 'c. 1000 – 1125 d.C.', t: 'O auge da construção', x: 'Entre cerca de 1000 e 1125 constrói-se o essencial dos edifícios do Chaco: **Pueblo Bonito**, **Chetro Ketl**, **Pueblo Alto**, **Kin Kletso**, **Pueblo del Arroyo**. Foram necessárias cerca de **200 000 árvores** (pinheiros e abetos), trazidas a pé, por homens e mulheres, de serras como as **Chuska**, a mais de 70 km (as vigas são hoje datadas por anéis). A população residente, segundo muitos autores, era bastante pequena, e a maioria das pessoas apareceria apenas em ocasiões de festa e de peregrinação (o tema é debatido).' },
    { d: 'c. 1076 d.C.', t: 'Chimney Rock', x: 'Em **Chimney Rock** (sul do Colorado) constrói-se, segundo os anéis das vigas, uma grande casa em cima de um morro, em frente de dois pilares de rocha. Por essa época ocorreu um **lunistício máximo** (extremo do ciclo lunar de 18,6 anos): vista da grande casa, a Lua nasce então entre os pilares. A coincidência tem sido apontada por vários estudiosos como intencional (debatido).' },
  ] },
  { linha: [
    { d: 'c. 1100 – 1125 d.C.', t: 'Aztec Ruins', x: 'A cerca de 90 km a norte do Chaco, no rio Animas, constrói-se um grande edifício que os colonos do século XIX, enganados, chamaram «Aztec» (nada tem a ver com os Astecas do México). Será, mais tarde (séculos XII e XIII), um centro importante do mundo Pueblo, com grandes kivas e uma **Grande Kiva** reconstruída no século XX.' },
    { d: 'c. 1130 – 1180 d.C.', t: 'Seca e fim do Chaco como centro', x: 'Os anéis das árvores mostram, a partir de c. 1130, uma **seca prolongada**, de cerca de meio século. A construção monumental no Chaco pára por volta de 1140 e, nas décadas seguintes, a população deixa o canhão, em direções diversas. A causa não terá sido só o clima: houve também mudanças políticas e religiosas, e movimentos para regiões com mais água (discutido).' },
    { d: 'c. 1150 – 1250 d.C.', t: 'Pueblo III: de Aztec a Mesa Verde', x: 'O centro de gravidade desloca-se para norte, para a região de **Mesa Verde**: as aldeias passam dos topos das mesas para **nichos** nas falésias (a partir de c. 1190) ou para grandes aldeias ao lado de nascentes (como **Sand Canyon**). As povoações concentram-se, os muros defensivos e as torres tornam-se frequentes.' },
    { d: 'c. 1190 – 1280 d.C.', t: 'As aldeias das falésias', x: 'Constroem-se **Cliff Palace** (cerca de 150 salas e 23 kivas), **Spruce Tree House**, **Balcony House** e centenas de outras habitações em falésia. Há também a **Sun Temple** e os edifícios em torre de **Hovenweep**. É o apogeu de Mesa Verde, e também o seu fim.' },
  ] },
  { img: 'pue-aztec', leg: 'Aztec Ruins, Novo México: a Casa Grande (West Ruin), com salas, kivas e grande kiva; nome dado, por engano, por colonos do século XIX.' },
  { linha: [
    { d: '1276 – 1299 d.C.', t: 'A «Grande Seca»', x: 'Uma seca de cerca de 24 anos (reconstituída pelos anéis de árvores) coincide com o abandono do planalto do Colorado. Por volta de **1280**, as aldeias de Mesa Verde esvaziam-se, e por **1300** quase toda a região dos Quatro Cantos fica sem povoações grandes. Há sinais de **conflitos** na segunda metade do século XIII (torres, muros, sítios queimados), e a fome e a violência terão feito parte da crise.' },
    { d: 'séc. XIV', t: 'Migração e novos Pueblos', x: 'As comunidades fixam-se a sul e a leste: nas mesas **Hopi**, em **Zuni**, em **Acoma**, ao longo do **Rio Grande** (onde nascem grandes povoações como Pecos e Taos). Surgem novas formas religiosas: o culto dos **katsinas** (espíritos dos antepassados e das nuvens), visível na pintura de kivas e na arte rupestre, ganha força (a cronologia e as origens são debatidas).' },
    { d: '1540', t: 'Chegam os espanhóis', x: 'A expedição de **Francisco Vázquez de Coronado** chega ao sudoeste à procura das «Sete Cidades de Cíbola», e encontra, em vez de ouro, as aldeias dos **Zuni**, a começar por Hawikuh. É o primeiro contacto prolongado entre Europeus e Pueblos. Em 1598 Juan de Oñate funda a colónia do Novo México, e em 1599 destrói a povoação de Acoma, depois de um confronto violento.' },
    { d: '1680', t: 'A Revolta dos Pueblos', x: 'Perante o trabalho forçado, a perseguição religiosa e a fome, os Pueblos revoltam-se em conjunto, sob a liderança de **Popé**, de San Juan Pueblo (hoje Ohkay Owingeh), e expulsam os espanhóis do Novo México. É considerada a revolta indígena mais bem-sucedida na América do Norte colonial. Os espanhóis regressam em 1692, em 1693 e depois, mas as comunidades conservam a sua religião e as suas línguas.' },
  ] },
  { img: 'pue-pueblo-revolt', leg: 'A Revolta dos Pueblos de 1680, em mural de Loren Mozley (1936), Albuquerque, Novo México.' },
  { img: 'pue-seca-migracao', leg: 'Famílias a deixar uma aldeia do planalto do Colorado, séc. XIII; reconstituição conjetural. Ilustração gerada por IA.' },
  { linha: [
    { d: '1849', t: 'Os primeiros registos científicos', x: 'O tenente **James H. Simpson**, do exército norte-americano, visita o Chaco Canyon durante uma expedição contra os Navajo e descreve as ruínas, com desenhos de Richard Kern. O interesse dos viajantes e dos colecionadores cresce, e muitos objetos são levados.' },
    { d: '1888', t: 'O Cliff Palace «descoberto»', x: 'Em 18 de dezembro, os vaqueiros **Richard Wetherill** e **Charles Mason** avistam o Cliff Palace, em Mesa Verde. Os Ute e os Navajo da região conheciam o local há muito tempo, e as famílias Pueblo nunca o esqueceram, mas a notícia desencadeia a escavação, e o saque, em larga escala.' },
    { d: '1896 – 1910', t: 'Wetherill no Chaco', x: 'A expedição **Hyde** escava o Pueblo Bonito de 1896 a 1900, sob a direção de Richard Wetherill, e leva milhares de objetos para museus. Wetherill morre assassinado em 1910, perto do Chaco. Em 1906, a **Lei das Antiguidades** (Antiquities Act) passa a proteger os sítios em terra federal, e o **Parque Nacional de Mesa Verde** é criado no mesmo ano; o Chaco Canyon torna-se monumento nacional em 1907.' },
    { d: '1921 – 1929', t: 'Judd, Pecos e os anéis das árvores', x: 'A **National Geographic Society** financia a escavação do Pueblo Bonito (Neil Judd, 1921–1927). Em 1927, a **Conferência de Pecos**, reunida por Alfred V. Kidder, propõe a classificação de Basketmaker a Pueblo. O astrónomo **Andrew E. Douglass**, com vigas recolhidas pelas expedições, data as ruínas pelos anéis das árvores e, em 1929, uma viga carbonizada de Show Low (Arizona) fecha a sequência: pela primeira vez, as ruínas do sudoeste têm datas ao ano.' },
    { d: '1977', t: 'O «punhal de sol»', x: 'A artista **Anna Sofaer** repara em Fajada Butte, no Chaco, em feixes de luz que, junto de duas espirais gravadas na rocha, marcam o solstício e o equinócio: o **Sun Dagger** (punhal de sol). As lajes de pedra que formavam o efeito moveram-se desde então e o local está fechado ao público para o proteger.' },
  ] },
  { img: 'pue-fajada-butte', leg: 'Fajada Butte, no Chaco Canyon, onde se encontra o Sun Dagger.' },
  { linha: [
    { d: '1978 – 1987', t: 'Património Mundial', x: 'Mesa Verde é inscrito na lista do Património Mundial da UNESCO em **1978**, e o **Chaco Culture** (com Aztec Ruins e outros sítios) em **1987**.' },
    { d: '1990', t: 'NAGPRA', x: 'A lei **NAGPRA** (Native American Graves Protection and Repatriation Act) obriga os museus norte-americanos a devolver restos humanos e objetos sagrados às comunidades descendentes, e muda a relação entre a arqueologia e os Pueblos.' },
    { d: '2017', t: 'ADN no Pueblo Bonito', x: 'Um estudo (Kennett e colegas, *Nature Communications*) conclui que **nove indivíduos** enterrados na «Sala 33» do Pueblo Bonito, entre c. 800 e 1130, partilhavam a mesma **linhagem materna** de ADN mitocondrial: um sinal de que um grupo familiar, ligado pelas mulheres, manteve o prestígio durante cerca de 330 anos.' },
    { d: '2023', t: 'Proteção da paisagem do Chaco', x: 'O governo dos Estados Unidos proíbe por **20 anos** a abertura de novas concessões de petróleo e gás em terrenos federais num raio de cerca de 16 km (10 milhas) em torno do Chaco Culture National Historical Park, depois de anos de pressão das comunidades Pueblo e Navajo.' }
  ] },
  { h: 'Redescoberta' },
  'Os Pueblos nunca perderam a memória destes lugares. A «redescoberta» foi a do mundo exterior: viajantes, soldados, vaqueiros e, a partir do final do século XIX, arqueólogos e saqueadores. Os trabalhos científicos, de Judd, Kidder, Douglass, Earl Morris e de muitos outros, acumularam uma enorme quantidade de dados; mas só nas últimas décadas se começou a escrever esta história **com** os Pueblos e não só **sobre** eles: com consultas às tribos, com tradições orais registadas nos centros culturais Pueblo, com a devolução de restos humanos e com a gestão partilhada de alguns sítios. Os Pueblos recusam a ideia de «civilização perdida»: dizem, simplesmente, «estamos aqui».'
];

const mapa = [
  'O mapa dos Pueblos ancestrais não tem capital nem fronteiras. Há **regiões culturais** (Chaco, Mesa Verde, Kayenta), centenas de aldeias e alguns **grandes centros** que atraíam gente de longe. Os sítios mais famosos estão hoje protegidos como parques e monumentos nacionais nos Estados Unidos, muitas vezes em terras que são também de reservas ou de comunidades Pueblo e Navajo.',
  { tabela: { cab: ['Sítio', 'Onde (atual)', 'Quando', 'Importância'], linhas: [
    ['Chaco Canyon (Pueblo Bonito, Chetro Ketl, Pueblo Alto…)', 'Noroeste do Novo México', 'c. 850 – 1140', 'Centro cerimonial, comercial e político do mundo chacoano; 15 grandes edifícios no canhão'],
    ['Aztec Ruins', 'Aztec, Novo México', 'c. 1100 – 1275', 'Grande casa no estilo chacoano; Grande Kiva reconstruída'],
    ['Salmon Ruins', 'Bloomfield, Novo México', 'c. 1090 – 1280', 'Casa grande chacoana junto ao San Juan, depois reocupada'],
    ['Mesa Verde (Cliff Palace, Spruce Tree House, Balcony House)', 'Sudoeste do Colorado', 'c. 550 – 1280', 'Mais de 5000 sítios, cerca de 600 habitações em falésia; Património Mundial (1978)'],
    ['Chimney Rock', 'Sul do Colorado', 'c. 1076 – 1093', 'Casa grande periférica ligada ao Chaco; alinhamentos lunares'],
    ['Hovenweep', 'Fronteira Utah – Colorado', 'c. 1150 – 1300', 'Torres de pedra de formas variadas junto a nascentes'],
    ['Canyon de Chelly, Betatakin e Keet Seel', 'Nordeste do Arizona', 'c. 200 – 1300', 'Aldeias em nichos de falésia na região Kayenta'],
    ['Cedar Mesa (Bears Ears)', 'Sudeste do Utah', 'c. 1200 a.C. – 1300 d.C.', 'Milhares de sítios, de Basketmaker a Pueblo III; paisagem sagrada para várias tribos'],
    ['Sand Canyon Pueblo', 'Sudoeste do Colorado', 'c. 1250 – 1280', 'Grande aldeia murada, dos últimos anos antes do abandono'],
    ['Acoma, Taos, Zuni, Hopi…', 'Novo México e Arizona', 'séc. XIII até hoje', 'Pueblos atuais; continuidade viva']
  ] } },
  { img: 'pue-mapa-chaco', leg: 'Ruínas no Chaco Canyon, Novo México (Património Mundial): paredes de arenito de grandes edifícios.' },
  { h: 'Chaco Canyon' },
  'O **Chaco Canyon** fica num vale seco e árido do noroeste do Novo México, sem árvores grandes e com apenas cerca de 22 cm de chuva por ano, e mesmo assim foi, durante cerca de três séculos (c. 850 – 1140), o centro do mundo Pueblo. Ao longo do canhão ergueram-se **15 grandes edifícios** de pedra: o **Pueblo Bonito** (com pelo menos 650 salas, em quatro andares, e em forma de «D», com uma grande praça e dezenas de kivas), o **Chetro Ketl**, o **Pueblo del Arroyo**, o **Una Vida**, o **Kin Kletso** e outros. Cada parede é de **núcleo e revestimento**: um miolo de entulho e barro entre duas faces de pedras cuidadosamente lavradas, desenhadas, ao que parece, a partir de um plano antes de se construir.',
  'A **Casa Rinconada**, a maior grande kiva do canhão, com cerca de 19 m de diâmetro, está fora das grandes casas. Na orla do vale, **Pueblo Alto** olha para o norte, para o início da **Grande Estrada do Norte**. A sul e a nascente erguem-se as mesas e, ao lado do canhão, **Fajada Butte**, onde está o Sun Dagger.',
  { img: 'pue-pueblo-bonito', leg: 'Ruínas do Pueblo Bonito, Chaco Canyon: paredes de pedra de várias fases de construção.' },
  { img: 'pue-chetro-ketl', leg: 'Chetro Ketl, grande edifício do Chaco Canyon, Novo México.' },
  { img: 'pue-casa-rinconada', leg: 'Casa Rinconada, a maior grande kiva do Chaco Canyon.' },
  { h: 'Estradas e «casas grandes» periféricas' },
  'O Chaco estava ligado ao exterior por uma **rede de estradas**, cavadas na terra ou no arenito, com cerca de **9 m de largura**, muito retilíneas e muitas vezes sem aparente utilidade prática, e por escadarias talhadas na rocha. A mais conhecida é a **Grande Estrada do Norte**, que corre cerca de **50 km** a partir de Pueblo Alto. Mais de **150 grandes casas periféricas** (*outliers*), com o mesmo estilo de pedra, estavam espalhadas pela bacia do San Juan, de Chimney Rock ao Colorado, e do Utah à serra de Zuni. As estradas serviram, talvez, para peregrinos, para procissões e para o transporte de bens (a sua função é debatida: algumas ligam-se a locais sem destino prático, o que sugere um papel simbólico).',
  { img: 'pue-chaco-estrada', leg: 'Uma estrada chacoana, com pessoas em procissão e a carregar vigas, c. 1075; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: 'Aztec Ruins' },
  '**Aztec Ruins**, junto ao rio Animas, a cerca de 90 km a norte do Chaco, foi construído a partir de c. 1100 por gente do Chaco e dos arredores, e depois ocupado por comunidades do norte, de Mesa Verde. A sua **Grande Kiva**, escavada por Earl Morris em 1921 e reconstruída nos anos 1930, é das poucas grandes kivas reconstruídas, e pode ser visitada. O nome é um erro: os colonos do século XIX julgaram que os construtores eram Astecas.',
  { img: 'pue-aztec-kiva', leg: 'Grande Kiva reconstruída em Aztec Ruins, Novo México.' },
  { h: 'Mesa Verde' },
  '**Mesa Verde** («mesa verde» em espanhol) é um planalto de arenito no sudoeste do Colorado, cortado por canhões. Foi habitado durante cerca de **setecentos anos**, e há ali mais de **5000 sítios**, dos quais cerca de **600 são habitações em falésia**. No século XIII, as pessoas passaram dos topos das mesas para os **nichos** na rocha, protegidos da chuva e do sol, e construíram em pedra, argamassa e madeira. **Cliff Palace**, o maior, tem cerca de **150 salas e 23 kivas**, e terá sido a casa de cerca de cem a cento e vinte e cinco pessoas (a população é uma estimativa). **Spruce Tree House**, com cerca de 130 salas, é uma das mais bem conservadas; **Balcony House**, de acesso por escadas e túneis, é das mais fáceis de defender.',
  { img: 'pue-cliff-palace', leg: 'Cliff Palace, Mesa Verde, Colorado, numa fotografia de 1891; foi construído sobretudo no século XIII.' },
  { img: 'pue-balcony-house', leg: 'Balcony House, Mesa Verde, com o seu acesso por escadas de madeira e túnel.' },
  { h: 'Hovenweep, Cedar Mesa e Kayenta' },
  '**Hovenweep**, na fronteira entre o Utah e o Colorado, tem torres de pedra de formas variadas (quadradas, redondas, em D), junto a nascentes e canhões: o nome é uma palavra ute, que significa «vale deserto». Em **Cedar Mesa** (sudeste do Utah) há milhares de sítios, da fase Basketmaker à Pueblo III, entre os quais cestos e sandálias que a aridez conservou. No **Canyon de Chelly**, no Arizona, e em **Betatakin** e **Keet Seel** (Navajo National Monument), as aldeias da região **Kayenta** estão em nichos de falésia, com as suas casas de pedra e vigas ainda visíveis.',
  { img: 'pue-hovenweep', leg: 'Torres de pedra de Hovenweep, na fronteira entre o Utah e o Colorado.' },
  { h: 'Rotas e comércio' },
  'Os Pueblos ancestrais eram agricultores, mas também **mercadores**, e os objetos que se encontram no Chaco viajaram longe. A **turquesa** (cerca de 200 000 peças já recolhidas no Chaco), extraída em minas como as de Cerrillos, no Novo México, era trabalhada em contas e mosaicos. As **conchas** vinham do golfo da Califórnia e do Pacífico, e eram transformadas em pulseiras e em trombetas. As **araras-vermelhas** (*Ara macao*) e os **sinos de cobre**, vindos do México, indicam contactos com o noroeste mexicano, e o já referido **cacau** mostra que os contactos chegavam ao sul de Mesoamérica. Estes contactos eram de pessoa para pessoa, de aldeia para aldeia: não há prova de um comércio organizado por um estado nem de uma ligação política com os grandes impérios mesoamericanos (a extensão dessas relações é debatida).',
  { img: 'pue-comercio-caravana', leg: 'Viajantes com cestos de turquesa, conchas e araras, a caminho do Chaco, séc. XI; reconstituição conjetural. Ilustração gerada por IA.' }
];

const sociedade = [
  { h: '1. Organização política' },
  'Não havia reis nem estados à maneira do Velho Mundo. As aldeias eram comunidades de **famílias e de clãs** que se dirigiam por conselhos, com funções religiosas e sociais partilhadas, como fazem hoje os Pueblos. No Chaco, porém, o esforço de construir edifícios monumentais, estradas e uma rede de mercadorias supõe uma **coordenação** que levanta uma questão antiga: quem dirigia? Os arqueólogos dividem-se. Há quem defenda que o Chaco foi um **centro de peregrinação e de festas**, um lugar ritual onde se juntavam gentes de muitos sítios; há quem veja nele uma **sociedade hierárquica**, com uma elite que controlava o prestígio, a turquesa e as araras; e há quem proponha modelos intermédios, como o de uma **«sociedade de casas»**, em que grupos familiares rivalizavam em prestígio.',
  'Os dados mais sólidos vêm dos enterramentos da **Sala 33** do Pueblo Bonito: 14 indivíduos enterrados com grandes quantidades de turquesa, conchas, flautas, cestos, e todos, dos que se analisaram, ligados a uma mesma linhagem materna durante séculos. Ou seja, houve algo semelhante a uma **elite hereditária**, ligada pelas mulheres. Mas o Chaco não parece ter deixado palácios, retratos de chefes nem guerras de conquista, e depois do seu fim a organização regressou a formas mais igualitárias e comunitárias, como as dos Pueblos atuais.',
  { img: 'pue-chaco-cerimonia', leg: 'Reunião cerimonial na praça do Pueblo Bonito, séc. XI; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '2. Classes e papéis sociais' },
  { lista: [
    '**Famílias de prestígio:** as ligadas à Sala 33 e a outros enterramentos ricos do Chaco.',
    '**Responsáveis cerimoniais:** guardiões dos ritos, do calendário e das kivas; entre os Pueblos de hoje, são sociedades religiosas (clãs, sociedades das kivas) com funções hereditárias ou escolhidas.',
    '**Agricultores:** a esmagadora maioria da população, que assegurava as colheitas, a armazenagem e a distribuição.',
    '**Artesãos:** ceramistas, tecelões, joalheiros de turquesa e de concha; muitos eram mulheres.',
    '**Construtores e transportadores:** quem trazia as vigas, cortava as pedras e levantava os edifícios, às vezes em grandes equipas.',
    '**Escravos ou cativos:** os dados arqueológicos são ambíguos e a presença de cativos é debatida.'
  ] },
  { h: 'Mulheres e clãs' },
  'Entre os Pueblos de hoje, a descendência é geralmente **matrilinear** (por via materna) e, em muitas comunidades, as **casas e as terras** pertencem às mulheres. Os dados do Pueblo Bonito (a linhagem materna da Sala 33) vão no mesmo sentido, embora a interpretação de uma estrutura antiga a partir de uma prática atual seja sempre prudente. As mulheres eram as principais ceramistas e eram, tudo indica, responsáveis pela moagem do milho e pela casa; os homens cuidavam sobretudo das colheitas, da caça e da tecelagem (as divisões variam).',
  { h: '3. Religião e visão do mundo' },
  'Aqui é preciso cuidado: **grande parte da religião Pueblo é privada** e não deve ser pesquisada nem divulgada fora das comunidades. O que se sabe, por arqueologia, arte rupestre e fontes públicas dos próprios Pueblos, é que a religião girava em torno da **chuva, do milho, do Sol e dos antepassados**, e que o mundo se concebia como um espaço de camadas, de onde os homens teriam **emergido** de um mundo inferior para este. Os rituais faziam-se nas **kivas**, nas praças e em lugares da paisagem.',
  { tabela: { cab: ['Elemento', 'Povo / contexto', 'Significado (em linhas gerais)'], linhas: [
    ['Sipapu', 'Hopi e outros', 'Pequena abertura no chão da kiva que simboliza o lugar de **emergência** do mundo anterior'],
    ['Kiva', 'Todos os Pueblos', 'Sala circular (ou retangular), geralmente subterrânea, para o ritual e para encontros das sociedades religiosas'],
    ['Katsinas (*kachinas*)', 'Hopi, Zuni, Rio Grande', 'Seres espirituais (muitas vezes antepassados e nuvens) que trazem a chuva; ganharam forma visível na arte desde c. 1300'],
    ['Awanyu', 'Tewa (Rio Grande)', 'Serpente de água cornuda, ligada à chuva e aos rios; aparece em arte rupestre e cerâmica'],
    ['Milho e chuva', 'Todos', 'O milho é sagrado e é mãe e alimento; as danças e orações pedem chuva e fertilidade'],
    ['Os pontos cardeais e o Sol', 'Todos', 'O ano ritual segue o Sol (solstícios) e orienta calendários e edifícios']
  ] } },
  { h: 'As kivas e o céu' },
  'A **kiva** é, entre os Pueblos de hoje, um espaço de oração, de ensino e de reuniões. As antigas kivas têm **banco** em redor, **lareira**, um canal de ventilação e o **sipapu**; as **grandes kivas** (como a Casa Rinconada, com 19 m, ou a de Aztec) acolhiam cerimónias de muita gente. Os alinhamentos com o Sol e a Lua foram objeto de muita investigação: em **Fajada Butte**, o Sun Dagger marcava solstícios e equinócios; no **Pueblo Bonito** e na **Casa Rinconada** têm-se proposto alinhamentos solares e lunares; em **Chimney Rock**, a Lua, no lunistício máximo (ciclo de 18,6 anos), nasce entre os dois pilares. Alguns destes alinhamentos são largamente aceites, outros são debatidos, e é preciso lembrar que a arquitetura segue também a forma do terreno.',
  { img: 'pue-chimney-lunar', leg: 'Observadores a seguir o nascer da Lua entre os pilares de Chimney Rock, c. 1076; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '4. Economia e agricultura' },
  'A economia assentava na **agricultura de sequeiro**: **milho** (muitas variedades, de cores diferentes), **feijão** e **abóbora**, e também algodão nas zonas mais quentes. Para cultivar com 20 a 40 cm de chuva por ano, as comunidades escolhiam campos junto à foz de cursos de água secos, construíam **pequenas barragens**, **socalcos**, **valas de derivação** e **jardins de pedras** (*grid gardens*). Em Mesa Verde havia **reservatórios** de água; no Chaco, **canais** que levavam a água de escorrência das mesas. Os grãos eram guardados em **celeiros** e em cistas, para os anos maus. A caça (veado, coelho, antílope) e a recolha (pinhões, iúca, ervas) completavam a dieta, e os **perus** eram criados em cercados.',
  { img: 'pue-campos-milho', leg: 'Campos de milho com socalcos e pequenas barragens de pedra, séc. XII; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'pue-milho', leg: 'Milho azul, uma das muitas variedades cultivadas nos Pueblos.' },
  { h: 'Comércio e bens de prestígio' },
  'O comércio de longa distância (ver «Rotas e comércio») fez circular **turquesa, conchas, araras e cobre**. No Pueblo Bonito foram encontrados dezenas de esqueletos de **araras** (em enterramentos e em salas), e as suas penas coloridas tinham uso cerimonial. As vasilhas cilíndricas com resíduos de teobromina (o composto do cacau) são o indício mais claro de contactos com o México.',
  { img: 'pue-arara', leg: 'Arara-vermelha (*Ara macao*), ave tropical, fotografada em Copán, Honduras: esqueletos desta ave foram encontrados no Pueblo Bonito.' },
  { h: '5. Escrita e comunicação' },
  'Os Pueblos ancestrais **não tinham escrita**. O conhecimento passava por **tradição oral**, por canto e por dança, e por **símbolos** gravados ou pintados na rocha (petroglifos e pictogramas): espirais, figuras humanas, animais, mãos, sinais de caça e de clã, imagens de katsinas. Os significados são, em grande parte, **conhecidos apenas pelos descendentes**; os arqueólogos que os «leem» sem os consultar arriscam-se a erros graves. As histórias dos clãs, dos locais e das migrações conservam-se, ainda hoje, na boca dos mais velhos.',
  { h: '6. Casa e família' },
  'A casa mudou ao longo dos séculos. No **Basketmaker** havia **pit houses**: um poço pouco fundo coberto por um telhado de vigas e barro, com lareira ao centro e uma abertura no teto, por onde se entrava com uma escada. Depois, no **Pueblo I**, passou a haver **casas de superfície** em fila, de paus e barro e depois de **adobe e pedra**, com a pit house antiga transformada em **kiva**. No **Pueblo II e III**, as casas são de pedra, em **blocos de várias salas**, por vezes com **três ou quatro andares** em degraus, entrando-se pelos **terraços** e por **escadas de mão**. As portas em «T» e as pequenas janelas guardam o calor e a segurança. Uma família ocupava tipicamente uma ou duas salas de habitação, mais uma de armazenamento.',
  { h: '7. Alimentação' },
  { lista: [
    '**Milho:** moído em **metates** (pedras de moer), em farinha para pão fino e papas; foi a base da dieta.',
    '**Feijão e abóbora:** completavam a dieta; as abóboras também serviam de recipiente.',
    '**Carne:** veado, coelho, antílope, perus (mais tarde, como alimento), e, aqui e ali, aves aquáticas.',
    '**Recolha:** pinhões, sementes de ervas, iúca, cactos e bagas.',
    '**Bebidas:** o cacau, no Chaco, em contexto de elite e de ritual; também infusões de ervas.',
    '**Cozinha:** potes de barro com decoração em «corrugado» (marcas de dedos em relevo), levados ao lume.'
  ] },
  { h: '8. Vestuário' },
  'Vestia-se com **algodão** (onde era cultivado ou trocado), **fibras de iúca e de casca de árvore** e **penas de peru**: com estas faziam-se **cobertores** de penas (tiras de couro envolvidas em penas e tecidas), muito quentes. As **sandálias** de iúca são frequentes nos achados. Ornamentavam-se com contas e pendentes de **turquesa**, conchas e azeviche (um tipo de carvão), e pintavam o corpo em ocasiões cerimoniais. Hoje, os trajes tradicionais dos Pueblos conservam, em tecidos de algodão, de lã e em cinturões, muito desta herança.',
  { h: '9. Cerâmica, cestaria e artes' },
  'A **cestaria** do Basketmaker já era de qualidade extrema, e a **cerâmica** apareceu por volta do século V. Primeiro, vasos cinzentos, depois **pintados a preto sobre branco**, com desenhos geométricos de grande precisão (linhas, triângulos, escadas, espirais), e **cerâmica corrugada** para cozinha. No Chaco e em Mesa Verde fizeram-se **canecas**, jarros e **tigelas** de muitas formas. A **cultura Mimbres**, vizinha a sul (sudoeste do Novo México, c. 1000 – 1130), é célebre pelas suas tigelas pretas sobre branco com **figuras de animais e de pessoas**, muitas vezes enterradas com os mortos, com um pequeno furo no fundo; não eram Pueblos ancestrais dos Quatro Cantos, mas são um exemplo da riqueza artística da região.',
  { img: 'pue-ceramista', leg: 'Ceramista Pueblo ancestral a moldar um vaso com rolos de barro, séc. XII; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'pue-cerami-mesa-verde', leg: 'Fragmento de cerâmica pintada a preto sobre branco, em Mesa Verde (estilo desta tradição, séc. XII–XIII).' },
  { img: 'pue-mimbres', leg: 'Tigela Mimbres, preto sobre branco, c. 1000–1130, sudoeste do Novo México (cultura vizinha).' },
  { h: '10. Música, jogos e festas' },
  'Há **flautas** de osso e de madeira, **chocalhos** de cabaça e de casco, **tambores**, **trombetas de concha** (do mar!) e **sinos de cobre** vindos do México. As danças ocupam um lugar central: acompanham o calendário agrícola e invocam a chuva, como nos dias de hoje. Havia também jogos de pernas, de bola e de dados de madeira e de osso. Em Wupatki (Arizona, cultura Sinagua, vizinha), há mesmo um campo de jogo de bola de estilo mesoamericano, sinal de influências do sul.',
  { h: '11. Ciência e conhecimento' },
  'O **calendário** agrícola e o **conhecimento do céu** foram fundamentais. Os Pueblos ancestrais observavam o Sol nos solstícios e equinócios, as fases e os ciclos da Lua, e provavelmente as estrelas, e alguns edifícios e gravuras estão relacionados com esses ciclos. Dominavam a **hidrologia local** (onde e como a chuva escorre), a **botânica** (seleção de sementes de milho adaptadas à seca) e a geologia da pedra. Hoje os **anéis das árvores** das vigas dos seus edifícios são o relógio mais fiel da arqueologia do sudoeste: foi a partir deles que A. E. Douglass fundou a dendrocronologia.',
  { h: '12. Tecnologia e construção' },
  'A **alvenaria** do Chaco e de Mesa Verde é notável: paredes de **núcleo e revestimento** (entulho e barro entre duas faces de pedras lavradas), de vários andares, argamassadas com barro. As **vigas** de pinheiro e abeto, cortadas com machados de pedra e arrastadas por muitos quilómetros, sustentavam tetos e terraços. A engenharia da **água** (valas, barragens, reservatórios) e das **estradas** exigiu muito planeamento. As ferramentas eram de **pedra, osso e madeira**; o **atlatl** foi substituído pelo **arco** a partir do século VI, e o **metal** quase não existia (só alguns sinos de cobre importados).',
  { img: 'pue-cliff-palace-vida', leg: 'Vida quotidiana numa aldeia de falésia, séc. XIII: moagem de milho, perus e crianças nos terraços; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '13. Guerra e conflito' },
  'Durante muito tempo imaginou-se os Pueblos ancestrais como um povo pacífico, e o **Chaco** não mostra, de facto, sinais evidentes de guerra. Mas a segunda metade do século XIII, no norte, é diferente: **aldeias muradas**, **torres**, acessos difíceis em falésias, **sítios incendiados**, e esqueletos com marcas de violência em alguns lugares (como em Castle Rock, no Colorado). A pressão por terra e água numa época de seca explica, em parte, esse clima de tensão. A violência foi, porém, **local e episódica**, e não uma guerra constante; os historiadores evitam as teorias sensacionalistas (de «canibalismo» em massa, por exemplo, que são raras, discutidas e não generalizáveis).'
];

const personalidades = [
  'Os Pueblos ancestrais não deixaram nomes escritos, e é isso que torna esta secção diferente das de outras civilizações. Os indivíduos que se conhecem são **anónimos** (os enterramentos, os ceramistas), ou figuras posteriores: dos Pueblos, que continuam a história, e dos estudiosos que a investigaram. As figuras abaixo vêm separadas por esse critério.',
  { h: 'A linhagem da Sala 33 (c. 800 – 1130)' },
  'No coração do **Pueblo Bonito**, na **Sala 33**, foram enterrados, ao longo de cerca de três séculos, pelo menos catorze indivíduos com ofertas de excecional riqueza: dezenas de milhares de peças de **turquesa**, conchas, flautas de osso, cestos e outros objetos cerimoniais. O ADN mitocondrial de **nove** deles, analisado em 2017, mostrou que todos pertenciam à **mesma linhagem materna**. Não sabemos como se chamavam; mas sabemos que a sua família, ligada pelas mulheres, manteve um estatuto elevado durante cerca de 330 anos.',
  { h: 'Os ceramistas e os escultores anónimos' },
  'Os cestos, as tigelas pintadas, as figuras de petroglifos e as contas de turquesa foram feitos por mãos que não deixaram nome. Alguns dos **estilos** e das **«mãos»** (padrões individuais de pincelada) são reconhecíveis pelos arqueólogos. Muitos dos ceramistas eram **mulheres**, como hoje nos Pueblos.',
  { h: 'Popé (c. 1630 – c. 1688)' },
  'Líder religioso do Pueblo de **San Juan** (hoje Ohkay Owingeh), organizou a **Revolta dos Pueblos de 1680**, que expulsou os espanhóis do Novo México durante doze anos. Era uma figura de resistência religiosa e política; o que se sabe dele vem sobretudo de fontes espanholas, e os pormenores da sua biografia são incertos. Uma estátua dele representa o Novo México no Capitólio dos Estados Unidos.',
  { h: 'James H. Simpson (1813 – 1883)' },
  'Oficial do exército norte-americano que, em 1849, descreveu pela primeira vez, para o mundo anglófono, as ruínas do **Chaco Canyon**, durante uma expedição aos Navajo. Os desenhos de **Richard Kern** que acompanham o seu relatório são os primeiros registos das ruínas.',
  { h: 'Richard Wetherill (1858 – 1910)' },
  'Criador de gado do Colorado, cuja família explorava Mesa Verde. Com Charles Mason avistou em 1888 o **Cliff Palace**, escavou ali e depois no **Chaco**, onde dirigiu a escavação do Pueblo Bonito para a expedição Hyde (1896–1900). A sua obra é tão valiosa como controversa: reuniu dados e popularizou o nome «Basketmaker», mas vendeu coleções e escavou sem métodos modernos. Foi morto em 1910, perto do Chaco.',
  { h: 'Neil Judd (1887 – 1976)' },
  'Arqueólogo da **National Geographic Society** que dirigiu a escavação do **Pueblo Bonito** (1921–1927), uma das primeiras escavações sistemáticas do sudoeste. Os seus trabalhos mudaram a forma de ver o Chaco, e foi com as vigas que recolheu que A. E. Douglass pôde datar o edifício.',
  { h: 'Andrew E. Douglass (1867 – 1962)' },
  'Astrónomo norte-americano que **fundou a dendrocronologia**, a datação por anéis de árvores. Em 1929, uma viga carbonizada recolhida em Show Low (Arizona) permitiu-lhe **ligar** a sequência de anéis moderna à das vigas antigas, e dar datas ao ano a Pueblo Bonito e a outras ruínas. Antes disso, os arqueólogos só tinham datas relativas.',
  { h: 'Alfred V. Kidder (1885 – 1963)' },
  'Arqueólogo que escavou **Pecos Pueblo** (Novo México) e organizou, em 1927, a **Conferência de Pecos**, onde se acordou a classificação que ainda hoje se usa (Basketmaker I–III, Pueblo I–III), e fez da estratigrafia o método do sudoeste.',
  { h: 'Earl H. Morris (1889 – 1956)' },
  'Arqueólogo que escavou **Aztec Ruins** (1916–1921) e outros sítios, incluindo Canyon del Muerto, e dirigiu a reconstrução da **Grande Kiva** de Aztec (1934). Os seus trabalhos revelaram o carácter chacoano do sítio e inspiraram muitas visitas.',
  { h: 'Anna Sofaer' },
  'Artista e investigadora norte-americana que, em **1977**, deu conta do efeito de luz do **Sun Dagger** em Fajada Butte, e que fundou o **Solstice Project**, para estudar a astronomia do Chaco, com o apoio de astrónomos. As suas teses (sobre alinhamentos solares e lunares e a geometria do Chaco) são muito influentes e debatidas.',
  { h: 'Maria Martinez (c. 1887 – 1980)' },
  'Ceramista do **San Ildefonso Pueblo**, no Novo México, que, com o marido Julian, redescobriu e aperfeiçoou a **cerâmica negra polida**, de superfície espelhada, com desenhos mate. As suas peças estão em museus de todo o mundo e mostram a **continuidade** de uma tradição artística de séculos.',
  { h: 'Joe S. Sando (1923 – 2014)' },
  'Historiador do **Pueblo de Jemez**, autor de *Pueblo Nations* (1992) e de outras obras sobre a história dos Pueblos, escrita do ponto de vista dos próprios Pueblos, incluindo a Revolta de 1680. É uma das vozes que mais contribuiu para a ideia de que a história dos Pueblos deve ser contada **a partir de dentro**.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**Comunidades vivas:** os Pueblos atuais, que continuam a viver em povoações de pedra e adobe, a cultivar milho, a falar as suas línguas e a manter as suas danças e calendários.',
    '**Agricultura de terra seca:** técnicas de seleção de sementes e de gestão da água que ainda hoje se estudam e se usam (o milho Hopi é cultivado sem rega).',
    '**Arquitetura:** o estilo «Pueblo» inspirou, no século XX, o **Pueblo Revival** do Novo México, em edifícios de adobe com vigas à vista (as *vigas*) e terraços.',
    '**Arte:** cerâmica, cestaria, joalharia em turquesa e prata (mais tarde), tecelagem e pintura continuam a ser artes muito vivas.',
    '**Uma lição de resiliência:** viver durante séculos em condições difíceis, adaptar-se às mudanças do clima e reconstruir a comunidade noutro sítio.',
    '**Paisagens sagradas:** o Chaco, Mesa Verde, Bears Ears e outros lugares continuam a ser sagrados para os povos descendentes.'
  ] },
  { h: 'Arte' },
  'A arte dos Pueblos ancestrais é sobretudo **funcional e simbólica**: cerâmica pintada com padrões geométricos, cestaria, joias de turquesa e de concha, e **arte rupestre** com espirais, mãos, figuras humanas e animais. A pintura mural nas kivas, mais tardia (séculos XIII–XV, por exemplo em Kuaua e em Awat’ovi), mostra figuras ligadas aos katsinas. A cerâmica de **Maria Martinez** e dos ceramistas de Acoma, de Zia, de Santa Clara e de Hopi, que se vende hoje em museus e galerias de todo o mundo, é uma continuidade direta dessa tradição.',
  { img: 'pue-taos', leg: 'Taos Pueblo, Novo México, habitado há cerca de mil anos, Património Mundial da UNESCO (1992).' },
  { img: 'pue-walpi', leg: 'Casa hopi em Walpi, Arizona, pintura de Carl Borg (1879–1947), fotografada; o sítio atual data do final do século XVII.' },
  { img: 'pue-zuni', leg: 'Diorama da vida numa aldeia de Zuni Pueblo, Novo México (Milwaukee Public Museum); Zuni é uma das maiores comunidades Pueblo.' },
  { h: 'Arquitetura' },
  'Os Pueblos ancestrais deixaram **blocos de habitação de vários andares**, com terraços e kivas, e **edifícios monumentais** como o Pueblo Bonito, que se mantiveram, em pé, quase um milénio sem manutenção. A sua influência é visível no **Pueblo Revival** do século XX, estilo que domina Santa Fé e Albuquerque, e no uso do adobe e das vigas como símbolo regional.',
  { h: '«Mistério» e «desaparecimento»: um mito' },
  'Nos livros e documentários antigos, os «Anasazi» aparecem como uma «civilização desaparecida». É um **erro**, por três razões. Primeiro, as pessoas não desapareceram: **migraram**, em geral de forma gradual e planeada, para regiões com mais água. Segundo, os seus descendentes **estão vivos**, e as suas tradições orais contam as migrações com os nomes dos clãs e dos locais. Terceiro, o abandono teve causas bem conhecidas pela arqueologia: seca, esgotamento da lenha e do solo, tensões sociais e, no Chaco, a perda de legitimidade do centro. A pergunta honesta é «porque mudaram os Pueblos ancestrais de lugar?», e as respostas estão nos anéis das árvores e nas histórias dos Pueblos.',
  { h: 'Debates em aberto' },
  { lista: [
    '**A função do Chaco:** centro de peregrinação, capital de uma elite ou algo intermédio?',
    '**A origem dos Pueblos atuais:** cada comunidade combina migrações de várias regiões, e a arqueologia só em parte reconstrói o percurso.',
    '**Os alinhamentos astronómicos:** o que foi planeado e o que é coincidência.',
    '**As causas do abandono:** clima, conflito, religião, política? Provavelmente tudo ao mesmo tempo.',
    '**Os contactos com o México:** que ideias e que pessoas circularam, e até onde.'
  ] },
  { h: 'A redescoberta' },
  'A «redescoberta» é, como se disse, a do mundo exterior. Os trabalhos de Simpson (1849), de Wetherill (1888), de Judd (1921–1927) e de Douglass (1929) foram etapas, e a **Lei das Antiguidades** (1906), o **NAGPRA** (1990) e as consultas com as tribos marcam a passagem de uma arqueologia **sobre** os Pueblos para uma feita **com** os Pueblos. Os Pueblos recusam o mito do «mistério» e lembram, com razão, que as suas histórias já contavam o que a ciência agora confirma.',
  { caixa: 'Onde visitar', texto: 'Nos Estados Unidos: **Chaco Culture National Historical Park** (Novo México; estrada de terra, sem serviços), **Mesa Verde National Park** (Colorado; as visitas a Cliff Palace e a Balcony House são guiadas), **Aztec Ruins National Monument** (Novo México), **Chimney Rock National Monument** (Colorado), **Hovenweep National Monument** (Utah/Colorado), **Canyon de Chelly** e **Navajo National Monument** (Arizona), **Bandelier National Monument** (Novo México, com ruínas dos séculos XII–XVI). Entre os Pueblos vivos, **Acoma Pueblo** e **Taos Pueblo** têm visitas guiadas; **Zuni** e os **Hopi** têm centros culturais e museus. Respeite sempre as regras locais (fotografias, zonas fechadas, dias de cerimónia). Em museus, o **Museu Nacional do Índio Americano** (Washington, D.C.), o **Museum of Indian Arts and Culture** (Santa Fé) e o **Museu Americano de História Natural** (Nova Iorque) têm coleções importantes.' }
];

const quiz = [
  { p: 'Que termo é hoje preferido a «Anasazi» pelos descendentes e pelos arqueólogos?', op: ['Maya', 'Ancestral Pueblo', 'Navajo', 'Apache'], certa: 1, exp: '«Anasazi» é uma palavra navajo, muitas vezes traduzida por «antepassados dos inimigos», e os Pueblos de hoje consideram-na inadequada.' },
  { p: 'Qual é a região onde se encontram os estados do Novo México, Arizona, Utah e Colorado?', op: ['Grandes Lagos', 'Quatro Cantos (Four Corners)', 'Costa do Pacífico', 'Vale do Mississípi'], certa: 1, exp: 'É o coração do território dos Pueblos ancestrais.' },
  { p: 'Que três plantas formaram a base da alimentação dos Pueblos ancestrais?', op: ['Trigo, cevada e centeio', 'Arroz, soja e batata', 'Milho, feijão e abóbora', 'Mandioca, banana e café'], certa: 2, exp: 'O milho veio do México por volta de 2000 a.C.; o feijão chegou mais tarde, no Basketmaker III.' },
  { p: 'Em que cânion do Novo México floresceu, entre c. 850 e 1140, o maior centro do mundo Pueblo ancestral?', op: ['Chaco Canyon', 'Grand Canyon', 'Canyon de Chelly', 'Bryce Canyon'], certa: 0, exp: 'O Chaco Canyon, com o Pueblo Bonito, o Chetro Ketl e outras casas grandes.' },
  { p: 'Quantas salas tem, pelo menos, o Pueblo Bonito?', op: ['Cerca de 20', 'Cerca de 100', 'Pelo menos 650', 'Mais de 10 000'], certa: 2, exp: 'É um edifício de quatro andares, em forma de «D», um dos maiores da América do Norte até ao século XIX.' },
  { p: 'O que é uma kiva?', op: ['Um tipo de milho', 'Uma sala (em geral circular e subterrânea) para o ritual e as reuniões', 'Uma ave sagrada', 'Uma arma de caça'], certa: 1, exp: 'A kiva descende das antigas casas semi-enterradas; o sipapu simboliza o lugar de emergência.' },
  { p: 'Para que serviu a «Grande Estrada do Norte», a partir de Pueblo Alto?', op: ['Era uma estrada com uns 50 km, retilínea; a sua função é debatida', 'Ligava o Chaco ao Atlântico', 'Servia para carros de rodas', 'Era uma muralha defensiva'], certa: 0, exp: 'As estradas chacoanas, de cerca de 9 m de largura, eram muito retilíneas, e há debate sobre o seu papel prático ou simbólico. Não havia rodas.' },
  { p: 'Que produto que veio do México foi identificado em vasos do Pueblo Bonito em 2009?', op: ['Café', 'Cacau', 'Tabaco', 'Açúcar'], certa: 1, exp: 'Análises químicas encontraram vestígios de teobromina em vasos cilíndricos, a mais de mil quilómetros da sua origem.' },
  { p: 'O que é o «Sun Dagger» de Fajada Butte?', op: ['Uma arma de pedra', 'Um efeito de luz que marcava solstícios e equinócios junto a espirais gravadas', 'Um templo', 'Um mapa da Lua'], certa: 1, exp: 'Foi descrito por Anna Sofaer em 1977; as lajes moveram-se desde então e o local está fechado ao público.' },
  { p: 'Que sítio de Mesa Verde tem cerca de 150 salas e 23 kivas?', op: ['Spruce Tree House', 'Cliff Palace', 'Balcony House', 'Sun Temple'], certa: 1, exp: 'O Cliff Palace, avistado em 1888 por Richard Wetherill e Charles Mason, foi construído sobretudo no século XIII.' },
  { p: 'Porque se chama «Aztec Ruins» ao sítio do Novo México?', op: ['Foi construído por Astecas', 'Os colonos do século XIX julgaram, por engano, que os construtores eram Astecas', 'Fica no México', 'Tem uma pirâmide'], certa: 1, exp: 'Os construtores eram Pueblos ancestrais; nada tem a ver com os Astecas do México.' },
  { p: 'O que mostram os anéis das árvores sobre o fim do século XIII?', op: ['Um período de chuvas excecionais', 'Uma seca de cerca de 24 anos (1276–1299), contemporânea do abandono da região', 'Uma erupção vulcânica', 'Nada de especial'], certa: 1, exp: 'A seca coincide com o abandono, mas o clima não explica tudo: houve também tensão social e conflito.' },
  { p: 'Para onde foram os Pueblos ancestrais depois do abandono dos Quatro Cantos?', op: ['Desapareceram sem deixar rasto', 'Para o Pacífico, de barco', 'Para sul e leste: Hopi, Zuni, Acoma e Rio Grande', 'Para o Canadá'], certa: 2, exp: 'Os Pueblos atuais descendem destas comunidades; as tradições orais registam as migrações dos clãs.' },
  { p: 'Quem liderou a Revolta dos Pueblos de 1680, que expulsou os espanhóis do Novo México?', op: ['Popé', 'Montezuma', 'Geronimo', 'Sitting Bull'], certa: 0, exp: 'Popé, de San Juan Pueblo (Ohkay Owingeh); os espanhóis regressaram em 1692.' },
  { p: 'O que descobriu o estudo de ADN de 2017 sobre os enterramentos da Sala 33 do Pueblo Bonito?', op: ['Que eram de origem europeia', 'Que vários indivíduos partilhavam a mesma linhagem materna durante cerca de 330 anos', 'Que eram todos homens sem parentesco', 'Que eram de origem asiática recente'], certa: 1, exp: 'Nove indivíduos analisados tinham o mesmo ADN mitocondrial: sinal de uma família de prestígio ligada pelas mulheres.' }
];

export default {
  id: 'pueblo',
  cor: '#c0703a',
  emblema: '../assets/img/pueblo.png',
  nome:    { pt: 'Povos Pueblo ancestrais', en: 'Ancestral Pueblo peoples' },
  periodo: { pt: 'c. 100 – 1300 d.C. (e Pueblos atuais)', en: 'c. AD 100 – 1300 (and today’s Pueblos)' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
