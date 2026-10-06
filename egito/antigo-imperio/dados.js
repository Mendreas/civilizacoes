// EGITO — PRÉ-DINÁSTICO E REINO ANTIGO — conteúdo em português. A versão inglesa está em dados-en.js (mesma estrutura e mesmos ids de imagem).
import EN from './dados-en.js';
import CRED from './creditos.js';
import { GRUPO } from '../grupo.js';
// Cronologia: datas convencionais das obras de referência em língua inglesa (Reino Antigo, Dinastias III–VI, c. 2686 – 2181 a.C.; Período Arcaico c. 3150 – 2686 a.C.). Hornung, Krauss e Warburton (2006) propõem datas algo mais recentes para o Reino Antigo; antes de c. 2000 a.C. todas as datas têm margem de erro de décadas ou mais. Por isso usamos «c.».
// Imagens: cada {img:'id'} procura o ficheiro  egito/antigo-imperio/img/id.jpg  (ver IMAGENS_EGITO_ANTIGO_IMPERIO.md).

const visao = [
  { caixa: 'Em resumo', texto: [
    'Esta página conta os primeiros quase três mil anos do Egito, desde as aldeias agrícolas do vale do Nilo (por volta de 5000 a.C.) até ao fim do **Reino Antigo** (c. 2181 a.C.). É o tempo em que se formou o primeiro grande Estado territorial da história: o rei **Narmer** (c. 3100 a.C.) aparece associado à unificação do Alto e do Baixo Egito, a escrita hieroglífica nasce, e a capital é fundada em **Mênfis**.',
    'No Reino Antigo propriamente dito, o Estado egípcio mobiliza milhares de pessoas, cobre o deserto de calcário e de granito com pedreiras e estradas, e constrói as **pirâmides**: o degrau de **Djoser** em Saqqara (c. 2670 a.C.), as três pirâmides de **Sneferu** e, em Gizé, as de **Quéops**, **Quéfren** e **Miquerinos**. É a era dos «construtores de pirâmides», dos primeiros textos religiosos da humanidade (os Textos das Pirâmides) e de uma administração tão eficaz que deixou registos em papiro com mais de 4500 anos.'
  ] },
  { img: 'eai-mapa-egito', leg: 'Mapa do Egito Antigo com o vale, o Delta e sítios de diferentes épocas dinásticas; não representa apenas o Reino Antigo.' },
  { h: 'Onde ficava' },
  'O Egito antigo era um longo oásis dentro do deserto: uma faixa estreita de terra negra, a **Kemet** («a Terra Negra»), de cada lado do Nilo, rodeada pela **Deshret**, «a Terra Vermelha», o deserto. O rio corre de sul para norte e, perto do atual Cairo, abre-se num leque de ramos, o **Delta**. Para os egípcios, o país tinha duas metades: o **Alto Egito** (o vale, a sul) e o **Baixo Egito** (o Delta, a norte). Esta ideia de «as Duas Terras» ficou no título dos reis durante três mil anos.',
  'O rio decidia tudo. Todos os anos, entre julho e outubro, o Nilo transbordava, depositava lodo fértil nos campos e retirava-se, deixando terra pronta para a sementeira. Não era preciso chover. Por isso o Egito produzia excedentes de cereais com pouco esforço, e era fácil governá-lo a partir de um ponto central: o rio servia de estrada, e um barco descia a corrente ou subia com o vento do norte.',
  { img: 'eai-colheita-nilo', leg: 'Colheita de trigo emmer junto ao Nilo, cerca de 2500 a.C.; cena imaginada do Reino Antigo. Ilustração gerada por IA.' },
  { h: 'Quando existiu' },
  'Os egiptólogos dividem a história do Egito em reinos e períodos intermédios, e organizam os reis em **31 dinastias** (um sistema herdado do sacerdote Manethon, do século III a.C.). Esta página cobre as seguintes fases, com datas aproximadas.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Neolítico', 'c. 5500 – 4400 a.C.', 'Primeiras aldeias agrícolas: Faium A e Merimde (Delta)'],
    ['Pré-dinástico antigo', 'c. 4400 – 3500 a.C.', 'Culturas badariana e Nacada I no Alto Egito; cobre e cerâmica de qualidade'],
    ['Pré-dinástico final (Nacada II – III)', 'c. 3500 – 3150 a.C.', 'Cidades-chefatura como Hieracômpolis; chefes poderosos; primeiros sinais de escrita'],
    ['Dinastia 0 e Período Arcaico (Dinastias I – II)', 'c. 3150 – 2686 a.C.', 'Narmer e a unificação; Mênfis; túmulos reais em Abidos; Estado e administração'],
    ['Reino Antigo (Dinastias III – VI)', 'c. 2686 – 2181 a.C.', 'Djoser e a pirâmide de degraus; Era das Pirâmides; Textos das Pirâmides; descentralização'],
    ['Fim do Reino Antigo (Dinastias VII – VIII)', 'c. 2181 – 2160 a.C.', 'Reis efémeros em Mênfis; muitos autores colocam-nos já no Primeiro Período Intermédio']
  ] } },
  { img: 'eai-giza-panorama', leg: 'As três pirâmides de Gizé vistas do deserto.' },
  { h: 'Quem eram os egípcios deste tempo?' },
  'Os egípcios do Reino Antigo descendiam de populações do vale do Nilo, do deserto oriental e ocidental (que se foi tornando árido ao longo do Neolítico) e do Delta, onde havia contactos com o Levante. Falavam o **egípcio antigo**, uma língua do ramo afro-asiático, e escreviam-no em hieróglifos. A cultura não era uniforme: o sul (Naqada, Hieracômpolis, Abidos) criou a realeza e o estilo artístico que se tornou «egípcio», e o norte (Merimde, Maadi) tinha costumes e cerâmicas próprias, absorvidos no Estado unificado.',
  { img: 'eai-aldeia-predinastica', leg: 'Aldeia da cultura Naqada junto ao Nilo, cerca de 3600 a.C.; reconstituição hipotética. Ilustração gerada por IA.' },
  'Estima-se que, no tempo das grandes pirâmides, o Egito tivesse entre um e dois milhões de habitantes, na sua grande maioria camponeses. Os números são muito incertos.',
  { h: 'Porque importam' },
  { lista: [
    '**O primeiro Estado territorial:** um só rei, uma só administração e uma só língua, de Elefantina ao Mediterrâneo, cerca de mil quilómetros de rio, c. 3100 a.C. Foi um dos primeiros Estados do mundo e durou, com interrupções, três mil anos.',
    '**A escrita:** os hieróglifos surgem por volta de 3300 – 3200 a.C. e, no Reino Antigo, já servem para a administração, as biografias, os hinos e os rituais.',
    '**A arquitetura de pedra:** Imhotep e os seus sucessores inventaram o edifício monumental em pedra talhada, e as pirâmides de Gizé foram as estruturas mais altas feitas pelo ser humano durante cerca de 3800 anos (até às catedrais medievais).',
    '**A ideia de realeza divina:** o rei como Hórus vivo, filho de Rá, responsável por manter a ordem do mundo (**ma’at**).',
    '**Os primeiros textos religiosos:** os Textos das Pirâmides (c. 2350 a.C.) são a coleção de escritos religiosos mais antiga que se conhece.',
    '**Os trabalhadores:** a escavação das suas aldeias e cemitérios mostrou que as pirâmides foram obra de egípcios organizados e bem alimentados, e não de «escravos».'
  ] },
  { caixa: 'O Egito do Reino Antigo hoje', texto: 'As pirâmides de **Mênfis e arredores** (de Gizé a Dahshur) foram inscritas na lista do Património Mundial da UNESCO em 1979. O **Grande Museu Egípcio**, ao lado de Gizé, abriu oficialmente em novembro de 2025 e reúne muitos dos objetos desta época. Esta página é só uma das nove páginas sobre o Egito; para as épocas seguintes, veja «1.º Intermédio e Reino Médio», «2.º Intermédio e Reino Novo» e as restantes.' }
];

const linha = [
  'Esta linha do tempo vai do Neolítico até ao fim do Reino Antigo. Antes de c. 2000 a.C. as datas são aproximadas e variam de autor para autor; seguimos as datas convencionais usadas nas obras de referência. A identificação dos primeiros reis é, em parte, debatida.',
  { linha: [
    { d: 'c. 5500 – 4400 a.C.', t: 'As primeiras aldeias agrícolas', x: 'No lago do **Faium** e em **Merimde Beni Salama** (Delta) vivem comunidades que cultivam trigo e cevada e criam gado, ovelhas e cabras, vindas de práticas agrícolas do Próximo Oriente. É o início da vida sedentária no Egito.' },
    { d: 'c. 4400 – 4000 a.C.', t: 'A cultura badariana', x: 'Em **Badari**, no Alto Egito, aparecem cerâmica fina de topo negro, objetos de marfim e cobre e túmulos que mostram os primeiros sinais de diferença social.' },
    { d: 'c. 4000 – 3500 a.C.', t: 'Nacada I', x: 'Povoações cada vez maiores no sul, com cerâmica de decoração branca sobre vermelho e comércio com o deserto e o Mar Vermelho (conchas, pedras duras).' },
    { d: 'c. 3500 – 3200 a.C.', t: 'Nacada II: os primeiros chefes', x: 'Em **Hieracômpolis** (Nekhen), **Nacada** e **Abidos** vivem chefes ricos, com túmulos grandes. Em Hieracômpolis, o «Túmulo 100» está decorado com cenas pintadas de barcos e de caça. Importam-se objetos e ideias da Mesopotâmia e do Levante.' },
    { d: 'c. 3320 – 3150 a.C.', t: 'Os primeiros sinais de escrita', x: 'No túmulo U-j de **Abidos**, de um chefe do Alto Egito, foram encontradas etiquetas de osso e de marfim com sinais gravados. É a evidência mais antiga de escrita no Egito, e uma das mais antigas do mundo (a sua leitura é debatida).' },
  ] },
  { img: 'eai-macehead-escorpiao', leg: 'Cabeça de maça do rei Escorpião, Ashmolean, Oxford.' },
  { linha: [
    { d: 'c. 3200 – 3100 a.C.', t: 'A Dinastia 0', x: 'Chamam-se «Dinastia 0» os chefes e reis do final do Pré-dinástico, como **Ka**, **Escorpião** e **Iri-Hor**, de que se conservam poucos nomes e objetos. Não se sabe como se ligavam entre si. As pequenas chefaturas do sul fundem-se num reino.' },
    { d: 'c. 3100 a.C.', t: 'Narmer e a «unificação»', x: 'O rei **Narmer** é representado na célebre **Paleta de Narmer** com a coroa branca do Alto Egito de um lado e a coroa vermelha do Baixo Egito do outro. A tradição posterior fala de um rei **Menés** que uniu o país; a sua identificação com Narmer (ou com o seu sucessor Hor-Aha) é debatida. A «unificação» foi, provavelmente, um processo de gerações, e não uma só batalha.' },
  ] },
  { img: 'eai-paleta-narmer', leg: 'Paleta de Narmer, Museu Egípcio, Cairo (JE 32169).' },
  { img: 'eai-unificacao-cena', leg: 'Cerimónia régia no tempo de Narmer, cerca de 3100 a.C., Hieracômpolis; cena imaginada. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 3100 – 2900 a.C.', t: 'Hor-Aha e a capital em Mênfis', x: 'Segundo a tradição, a cidade de **Mênfis** («as Muralhas Brancas») é fundada nesta época, na junção do vale com o Delta. Os reis da I Dinastia são sepultados em **Abidos**, nos túmulos de Umm el-Qaab, e os grandes dignitários em Saqqara.' },
    { d: 'c. 3000 – 2900 a.C.', t: 'Den e Merneith', x: 'A rainha **Merneith** parece ter governado como regente do filho **Den**, de que se conserva uma representação com a dupla coroa. Os reis da I Dinastia reinam sobre um Estado organizado, com funcionários, cobrança de impostos e expedições às minas do Sinai.' },
  ] },
  { img: 'eai-faca-gebel-el-arak', leg: 'Faca de Gebel el-Arak, Louvre.' },
  { img: 'eai-estela-djet', leg: 'Estela de Djet, Louvre.' },
  { linha: [
    { d: 'c. 2890 – 2686 a.C.', t: 'A II Dinastia', x: 'Período mal documentado. Os reis continuam a ser sepultados em Abidos ou em Saqqara. **Peribsen** usa o nome de **Seth** em lugar de Hórus, talvez por conflito interno; **Khasekhemwy**, o último rei, usa os dois deuses juntos e fecha o período, reunificando o país.' },
    { d: 'c. 2686 a.C.', t: 'Começa o Reino Antigo', x: 'A **III Dinastia** abre o Reino Antigo. Os primeiros reis, como Nebka e Sanakht, são mal conhecidos. Com **Djoser** o Egito entra numa época de grandes obras de pedra.' },
    { d: 'c. 2670 a.C.', t: 'Djoser e a pirâmide de degraus', x: 'O rei **Djoser** e o seu ministro **Imhotep** constroem, em Saqqara, um conjunto funerário inteiramente de pedra talhada, com uma pirâmide de seis degraus com cerca de 62 m de altura: o primeiro grande monumento em pedra do Egito.' },
  ] },
  { img: 'eai-estatua-djoser', leg: 'Estátua de Djoser do serdab, Museu Egípcio, Cairo.' },
  { img: 'eai-construcao-djoser', leg: 'Construção do complexo de Djoser, cerca de 2670 a.C.; reconstituição artística de métodos parcialmente incertos. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 2613 – 2589 a.C.', t: 'Sneferu, o grande construtor', x: 'O primeiro rei da **IV Dinastia** governa durante cerca de 24 anos. Constrói ou termina as pirâmides de **Meidum**, a **Curva** e a **Vermelha** (esta, a primeira pirâmide de faces lisas e com um ângulo uniforme), enviando expedições ao Líbano em busca de cedro e à Núbia.' },
    { d: 'c. 2589 – 2566 a.C.', t: 'Quéops e a Grande Pirâmide', x: 'O filho de Sneferu constrói em **Gizé** a Grande Pirâmide, com cerca de 146 m de altura original: a maior pirâmide do Egito. Do seu reinado resta pouco mais do que o monumento e uma estatueta de marfim com cerca de 7,5 cm.' },
    { d: 'c. 2560 a.C.', t: 'O diário de Merer', x: 'Papiros descobertos em **Wadi al-Jarf**, no Mar Vermelho (descoberta anunciada em 2013), contêm o diário do chefe de equipa **Merer**, que transportava blocos de calcário de Tura para Gizé para o revestimento da pirâmide de Quéops. São os papiros escritos mais antigos que se conhecem.' },
    { d: 'c. 2558 – 2504 a.C.', t: 'Quéfren e Miquerinos', x: '**Quéfren** (c. 2558 – 2532 a.C.) constrói a segunda pirâmide de Gizé, com o seu templo do vale; a **Esfinge** é-lhe habitualmente atribuída. **Miquerinos** (c. 2532 – 2504 a.C.) constrói a terceira, a mais pequena.' },
  ] },
  { linha: [
    { d: 'c. 2494 a.C.', t: 'Começa a V Dinastia', x: '**Userkaf** inaugura uma dinastia com ênfase no deus Sol **Rá**: constrói um templo solar e, a partir daí, os reis erguem templos do Sol, enquanto as suas pirâmides se tornam mais pequenas e de pior construção.' },
    { d: 'c. 2487 – 2475 a.C.', t: 'Sahure e as expedições marítimas', x: '**Sahure** constrói a sua pirâmide em **Abusir**. Os relevos do seu templo mostram navios do mar, e a expedição a **Punt**, uma terra de incenso e de resinas no sul do Mar Vermelho, é registada pela primeira vez.' },
    { d: 'c. 2414 – 2375 a.C.', t: 'Djedkare Isesi e a reforma administrativa', x: 'Num reinado longo, o rei reorganiza a administração. É o tempo do vizir **Ptahhotep**, a quem a tradição atribui as «Máximas». Os papiros de Abusir (os arquivos do templo de Neferirkare) testemunham uma burocracia sofisticada.' },
    { d: 'c. 2375 – 2345 a.C.', t: 'Unas e os Textos das Pirâmides', x: 'No interior da pirâmide de **Unas**, o último rei da dinastia, as paredes das câmaras subterrâneas são cobertas de hieróglifos: os **Textos das Pirâmides**, a coleção de textos religiosos mais antiga do mundo.' },
  ] },
  { img: 'eai-pedra-palermo', leg: 'Pedra de Palermo, Museu Arqueológico de Palermo.' },
  { linha: [
    { d: 'c. 2345 – 2181 a.C.', t: 'A VI Dinastia: Teti, Pepi I e Merenre', x: 'A dinastia começa com **Teti** (Manethon diz que foi assassinado pela guarda, o que não está confirmado). O vizir **Weni**, que serve três reis, conduz campanhas no Sinai e no Levante. Os governadores das províncias (os nomarcas) tornam-se cada vez mais poderosos e autónomos.' },
    { d: 'c. 2278 – 2214 a.C. (ou até c. 2184)', t: 'Pepi II, um dos reis mais duradouros', x: '**Pepi II** sobe ao trono com cerca de seis anos. As fontes antigas dão-lhe mais de noventa anos de reinado (daí o «até c. 2184»); os estudiosos duvidam, e muitos aceitam c. 64 anos. É um dos reinados mais longos da história do Egito, e o último do Reino Antigo com autoridade real forte.' },
    { d: 'c. 2200 – 2150 a.C.', t: 'Seca e colapso do poder central', x: 'Os registos geológicos indicam um período de seca em todo o Próximo Oriente (o «evento de 4,2 mil anos»), com cheias do Nilo fracas. Ao mesmo tempo, os cargos dos governadores tornam-se hereditários e o rei perde meios. A relação entre os dois fenómenos é debatida: a causa do colapso foi provavelmente política e climática.' },
    { d: 'c. 2181 – 2160 a.C.', t: 'As Dinastias VII e VIII', x: 'Reis efémeros reinam em Mênfis, dos quais o último, **Ibi**, constrói uma pequena pirâmide em Saqqara Sul, com Textos das Pirâmides. A tradição de Manethon fala de «70 reis em 70 dias», certamente um exagero. O poder central desaparece: segue-se o **Primeiro Período Intermédio** (ver a página «1.º Intermédio e Reino Médio»).' }
  ] }
];

const mapa = [
  'O Reino Antigo foi um Estado centrado na região de **Mênfis**, onde o Vale se abre no Delta. As grandes obras, pirâmides e templos, concentram-se numa faixa de poucas dezenas de quilómetros (de Abu Rawash a Dahshur, com Meidum mais a sul) ao longo da margem ocidental do Nilo, a «Terra dos Mortos». Pelo deserto e pelo rio estendiam-se as pedreiras, as minas, as estradas e os portos que sustentavam essa construção.',
  { tabela: { cab: ['Sítio', 'Região', 'Local hoje', 'Para que ficou conhecido'], linhas: [
    ['Mênfis (Ineb-hedj)', 'Baixo Egito (vértice do Delta)', 'Mit Rahina, perto do Cairo', 'Capital do Reino Antigo; templo de Ptah; residência real'],
    ['Saqqara', 'Baixo Egito', 'Sul do Cairo', 'Necrópole de Mênfis; pirâmide de degraus de Djoser; pirâmide de Unas; túmulos de dignitários'],
    ['Gizé', 'Baixo Egito', 'Planalto a oeste do Cairo', 'Pirâmides de Quéops, Quéfren e Miquerinos; Esfinge; aldeia dos trabalhadores'],
    ['Abusir', 'Baixo Egito', 'Perto de Saqqara', 'Pirâmides e templos solares da V Dinastia; papiros de Abusir'],
    ['Dahshur', 'Baixo Egito', 'Sul de Saqqara', 'Pirâmides Curva e Vermelha de Sneferu'],
    ['Meidum', 'Entrada do Faium', 'Cerca de 100 km a sul do Cairo', 'Pirâmide de Huni/Sneferu; túmulos com as estátuas de Rahotep e Nofret'],
    ['Abu Rawash', 'Baixo Egito', 'Norte de Gizé', 'Pirâmide de Djedefré, filho de Quéops'],
    ['Heliópolis (Iunu)', 'Baixo Egito', 'Norte do Cairo', 'Centro do culto de Rá; quase tudo desapareceu'],
    ['Abidos', 'Alto Egito', 'Perto de Sohag', 'Túmulos reais da I Dinastia (Umm el-Qaab); depois centro do culto de Osíris'],
    ['Hieracômpolis (Nekhen)', 'Alto Egito', 'Kom el-Ahmar', 'Capital pré-dinástica; Paleta de Narmer e cabeça de maça do Escorpião'],
    ['Nacada', 'Alto Egito', 'Perto de Luxor', 'Sítio que dá nome às culturas Nacada I – III'],
    ['Elefantina', 'Fronteira sul', 'Perto de Assuão', 'Fortaleza e porto da fronteira; partida das expedições para a Núbia; túmulos dos governadores (Qubbet el-Hawa)'],
    ['Wadi al-Jarf', 'Costa do Mar Vermelho', 'Perto de Zafarana', 'Porto mais antigo conhecido; papiros do diário de Merer'],
    ['Sinai (Wadi Maghareh)', 'Península do Sinai', 'Sudoeste do Sinai', 'Minas de cobre e de turquesa; inscrições dos reis do Reino Antigo'],
    ['Biblos (Kebny)', 'Fora do Egito', 'Jbeil, Líbano', 'Porto onde os egípcios obtinham cedro; contactos desde a I Dinastia'],
    ['Buhen', 'Núbia', 'Perto de Wadi Halfa, Sudão', 'Entreposto egípcio no Reino Antigo (cobre); só se conhece em parte']
  ] } },
  { h: 'Mênfis, a capital' },
  'Segundo a tradição, **Mênfis** foi fundada pelo rei Menés (ou Narmer) na junção entre o Alto e o Baixo Egito, c. 3100 a.C. O seu nome egípcio era **Ineb-hedj**, «as Muralhas Brancas»; o nome «Mênfis» vem de Men-nefer, o nome da pirâmide de Pepi I, que passou a designar a cidade. Foi a residência real quase continuamente durante o Reino Antigo e depois, e o seu deus era **Ptah**, o deus dos artesãos. Hoje quase nada resta: só alguns blocos, colossos e um museu ao ar livre na aldeia de Mit Rahina, porque os materiais foram reutilizados pela Cairo medieval. A cidade e os seus cemitérios foram inscritos na lista do Património Mundial.',
  { img: 'eai-menfis-reconstrucao', leg: 'Mênfis no Reino Antigo, cerca de 2500 a.C.; reconstituição conjetural de arquitetura pouco preservada. Ilustração gerada por IA.' },
  { h: 'Saqqara: a pirâmide de degraus' },
  'A necrópole de Mênfis, **Saqqara**, tem cemitérios desde a I Dinastia. O centro é a **pirâmide de Djoser**, c. 2670 a.C., rodeada por um recinto de calcário de 15 hectares, com cerca de 1680 nichos na muralha, um pátio para a festa **Heb-Sed**, falsas capelas e uma câmara funerária subterrânea. Nasceu como uma grande mastaba (um túmulo de planta retangular), sucessivamente alargada em seis degraus, até cerca de 62 m. As galerias subterrâneas têm mais de cinco quilómetros e, numa delas, painéis de faiança azul imitam esteiras de caniço. A pirâmide foi reaberta ao público em 2020, após restauro.',
  { img: 'eai-piramide-degraus', leg: 'Pirâmide de degraus de Djoser, Saqqara.' },
  { h: 'Meidum, Dahshur e as três pirâmides de Sneferu' },
  'Sneferu foi o primeiro grande experimentador. Em **Meidum**, uma pirâmide de degraus (começada por Huni ou por ele) foi transformada numa pirâmide de faces lisas, mas o revestimento externo ruiu, talvez já na Antiguidade, e hoje parece uma torre rodeada de escombros. Em **Dahshur**, a **Pirâmide Curva** muda de ângulo a meio (de cerca de 54° para 43°), provavelmente por problemas de estabilidade, e conserva grande parte do seu revestimento original de calcário. A **Pirâmide Vermelha**, com cerca de 105 m, é a primeira verdadeira pirâmide de faces lisas, num só ângulo (c. 43°).',
  { img: 'eai-piramide-curva', leg: 'Pirâmide Curva, Dahshur.' },
  { img: 'eai-piramide-vermelha', leg: 'Pirâmide Vermelha, Dahshur.' },
  { img: 'eai-piramide-meidum', leg: 'Pirâmide de Meidum.' },
  { h: 'Gizé' },
  'No planalto de **Gizé**, a oeste do Cairo, há três grandes pirâmides em linha: a de **Quéops** (c. 146 m originais; hoje 138 m), a de **Quéfren** (c. 143 m) e a de **Miquerinos** (c. 65 m), mais as pirâmides das rainhas, centenas de mastabas de dignitários e a **Esfinge**, esculpida no próprio calcário do planalto, com cerca de 73 m de comprimento e 20 m de altura. A pirâmide de Quéfren parece maior do que a de Quéops, mas só porque está sobre um terreno mais alto. Ao lado de cada uma há um templo funerário, uma calçada coberta e um templo do vale, junto ao Nilo. A cidade dos trabalhadores, **Heit el-Ghurab**, ficava a sul.',
  { img: 'eai-giza-reconstrucao', leg: 'Gizé no final da IV dinastia, cerca de 2500 a.C., após a construção da pirâmide de Miquerinos; reconstituição hipotética. Não representa o reinado de Quéfren. Ilustração gerada por IA.' },
  { img: 'eai-esfinge', leg: 'Grande Esfinge de Gizé com a pirâmide de Quéfren.' },
  { h: 'Abusir e Abu Rawash' },
  'A V Dinastia construiu em **Abusir**, a norte de Saqqara, as pirâmides de **Sahure**, **Neferirkare** e **Niuserre**, mais pequenas, com templos de colunas de granito em forma de palmeira, e sol-templos junto ao rio. Foi aí que se encontrou, em 1893, o arquivo de papiros do templo de Neferirkare. Em **Abu Rawash**, a norte de Gizé, está a pirâmide de **Djedefré**, filho de Quéops, muito arruinada, e que foi uma pedreira para as épocas seguintes.',
  { h: 'Hieracômpolis e Abidos' },
  'No sul, **Hieracômpolis** (Nekhen) foi a capital dos chefes pré-dinásticos e o local onde se encontraram a Paleta de Narmer e a cabeça de maça de Escorpião, no «Depósito Principal» do templo de Hórus. **Abidos** tem os túmulos dos primeiros reis, em **Umm el-Qaab**, a «mãe das vasilhas» (por causa dos fragmentos de cerâmica), e a gigantesca muralha de adobe de Khasekhemwy, a **Shunet el-Zebib**.',
  { h: 'Elefantina e Assuão' },
  'Na ilha de **Elefantina**, junto à primeira catarata, estava a fortaleza da fronteira sul, de onde partiam as expedições à Núbia. Os governadores locais, como **Harkhuf** e **Sabni**, foram sepultados em túmulos rupestres na margem oposta, em **Qubbet el-Hawa**, com as suas biografias gravadas na entrada. Os blocos de **granito** de Assuão, usados nas câmaras e nos sarcófagos, desciam o rio em barcaças.',
  { h: 'Sinai, Wadi al-Jarf e o Mar Vermelho' },
  'O cobre e a turquesa do **Sinai** (Wadi Maghareh) eram extraídos por expedições reais desde a III Dinastia. No Mar Vermelho, o porto de **Wadi al-Jarf** foi usado no reinado de Quéops como ponto de partida e de chegada das expedições ao Sinai, de onde vinha o cobre para o vale do Nilo. É o porto marítimo mais antigo conhecido, e os papiros de Merer foram encontrados numa galeria cavada junto ao porto.',
  { h: 'Rotas e vizinhos' },
  { lista: [
    '**O Nilo:** a «estrada» principal. Os barcos desciam com a corrente e subiam com o vento do norte; é por ele que chegavam o granito de Assuão e o calcário de Tura.',
    '**Para o Líbano:** por mar, até **Biblos**, em busca de cedro. A Pedra de Palermo regista, no reinado de Sneferu, a chegada de quarenta navios carregados de madeira.',
    '**Para a Núbia:** pelo Nilo, a sul de Elefantina, as caravanas traziam ouro, ébano, marfim e peles. **Harkhuf** fez quatro viagens ao território de **Yam**, a sul.',
    '**Para Punt:** por mar, desde o Mar Vermelho, em busca de incenso, resinas e ouro; documentada sobretudo no reinado de Sahure.',
    '**Para os oásis do Deserto Ocidental:** com a povoação do Reino Antigo em **Ain Asil**, no oásis de Dakhla, uma cidade de governadores.'
  ] },
  { caixa: 'Algumas cifras da Era das Pirâmides', texto: 'Pirâmide de Djoser: c. 62 m. Pirâmide Vermelha: c. 105 m. Quéops: c. 146 m (hoje 138 m). Quéfren: c. 143 m. Miquerinos: c. 65 m. Unas: c. 43 m. Pepi II: c. 52 m. Os números variam consoante a fonte, e as alturas originais são reconstruídas a partir do que resta.' }
];

const sociedade = [
  { h: '1. Organização política' },
  'O Egito do Reino Antigo era uma **monarquia divina**: o rei, o **faraó** (a palavra só se aplicou ao rei mais tarde, no Reino Novo; no Reino Antigo dizia-se **nesut**, «rei», ou **hem**, «majestade»), era o Hórus vivo e, a partir da IV Dinastia, o **filho de Rá**. Governava com um **vizir** (ou dois, um para cada metade do país), com chefes de departamento (tesouro, celeiros, trabalhos do rei, justiça) e com os filhos do rei, que nos reinados da IV Dinastia ocupavam os cargos mais altos.',
  'O país dividia-se em cerca de quarenta **nomos** (províncias), governados por **nomarcas**. No início, eram funcionários do rei, nomeados e transferidos; ao longo da VI Dinastia, o cargo passou a ser hereditário e os nomarcas ficaram ricos, com túmulos próprios nas suas províncias, em vez de serem sepultados junto ao rei. Esta descentralização foi uma das causas do colapso do Estado.',
  { h: '2. Classes sociais' },
  'A sociedade era uma pirâmide, no sentido literal: o rei no topo, seguido da família real (príncipes e rainhas, com grandes poderes) e dos altos dignitários, quase todos parentes do rei até ao fim da IV Dinastia; depois os **escribas** e os funcionários, os **sacerdotes**, os **artesãos** e os **soldados**, e, na base, a imensa maioria dos **camponeses**. Havia poucos escravos no sentido de propriedade pessoal (sobretudo prisioneiros estrangeiros e criados domésticos); a grande diferença era entre quem sabia escrever e quem não sabia.',
  { img: 'eai-rahotep-nofret', leg: 'Estátuas de Rahotep e Nofret, Museu Egípcio, Cairo.' },
  { img: 'eai-ka-aper', leg: 'Pormenor da estátua de madeira de Ka-aper (Sheikh el-Beled), Cairo.' },
  'As mulheres podiam possuir bens, herdar, vender, testemunhar em tribunal e ocupar cargos (sacerdotisas de Hathor, funcionárias, «inspetora das médicas»: o título de **Peseshet**, de c. 2500 a.C.). Nunca se tornaram vizires, e raramente governaram; a regência de rainhas como **Merneith** e **Ankhesenpepi II** foi exceção.',
  { h: '3. Religião' },
  'Os egípcios acreditavam num mundo ordenado, **ma’at** («a ordem justa»), que era preciso manter com rituais e boa conduta, e sobre o qual o rei velava. Tinham muitos deuses, com formas humanas, animais ou mistas, e as grandes cidades tinham o seu deus principal. As crenças variavam de local para local e mudaram ao longo do tempo; o que sabemos do Reino Antigo vem sobretudo dos túmulos e dos Textos das Pirâmides.',
  { tabela: { cab: ['Deus', 'Domínio', 'Centro de culto', 'Representação'], linhas: [
    ['Rá', 'Sol, criador; pai do rei', 'Heliópolis', 'Homem com cabeça de falcão e disco solar'],
    ['Ptah', 'Artesãos; criador pela palavra', 'Mênfis', 'Homem embalsamado, com barrete justo'],
    ['Hórus', 'Realeza, céu', 'Hieracômpolis, Edfu', 'Falcão, ou homem com cabeça de falcão'],
    ['Osíris', 'Morte, renascimento, rei morto', 'Busíris, depois Abidos', 'Homem coroado, de pele verde, mumificado'],
    ['Ísis', 'Magia, mãe de Hórus', 'Delta', 'Mulher com trono na cabeça'],
    ['Hathor', 'Amor, música, céu, mulheres', 'Dendera', 'Vaca, ou mulher com chifres e disco solar'],
    ['Anúbis', 'Embalsamamento, necrópoles', 'Assiute, Saqqara', 'Cão-chacal ou homem com cabeça de chacal'],
    ['Thoth', 'Escrita, sabedoria, lua', 'Hermópolis', 'Íbis, ou homem com cabeça de íbis'],
    ['Sokar', 'Deus da necrópole de Mênfis', 'Mênfis (Saqqara)', 'Falcão, ou homem com cabeça de falcão'],
    ['Neith', 'Caça, guerra, tecelagem', 'Sais', 'Mulher com um arco ou com a coroa vermelha'],
    ['Khnum', 'Cheias do Nilo, oleiro que molda os seres', 'Elefantina', 'Homem com cabeça de carneiro']
  ] } },
  'O **culto solar** ganha força na IV e na V Dinastias. Os reis passam a chamar-se «filhos de Rá», os do final da V Dinastia, como Niuserre, constroem enormes **templos do sol** com altares a céu aberto, e os Textos das Pirâmides tratam do destino do rei como o de uma viagem ao céu, onde se junta a Rá. A relação entre a religião solar de Heliópolis e o culto de Osíris, que aparece nos Textos das Pirâmides, é um dos pontos mais debatidos.',
  { img: 'eai-textos-piramides-unas', leg: 'Textos das Pirâmides na pirâmide de Unas.' },
  { h: '4. Os Textos das Pirâmides' },
  'Gravados em **Saqqara**, primeiro na pirâmide de **Unas** (c. 2350 a.C.) e depois nas de **Teti**, **Pepi I**, **Merenre** e **Pepi II**, e nas de três rainhas, estes textos reúnem, no conjunto, cerca de **760 fórmulas** (as «declarações»; a pirâmide de Unas tem 283), em egípcio antigo, escritas em colunas, sem ilustração. São feitiços, hinos e rituais para o rei morto subir ao céu, transformar-se em espírito (**akh**) e navegar com Rá. Foram descobertos por Gaston Maspero em 1880 – 1881 (primeiro na pirâmide de Pepi I, depois na de Unas). Séculos depois, a mesma tradição passaria para os caixões (Textos dos Sarcófagos) e para o Livro dos Mortos.',
  { h: '5. Economia e administração' },
  'A economia era **agrícola e redistributiva**. Os camponeses cultivavam cereais (trigo emmer, cevada), linho, vinha, legumes e criavam gado, e entregavam uma parte da colheita ao Estado e aos templos. Os funcionários contavam o gado de dois em dois anos (a «contagem do gado»), e os anos dos reinados eram, por vezes, designados com ela (por exemplo, o «ano da 13.ª contagem»). Não havia dinheiro cunhado: o valor medía-se em peso de cobre ou de cereais, e pagava-se em **rações** (pão, cerveja, carne, linho).',
  'O Estado enviava expedições para obter o que o vale não tinha: **cobre e turquesa** no Sinai, **cedro** no Líbano, **ouro, ébano e marfim** na Núbia, **incenso** em Punt, **granito** em Assuão, **calcário fino** em Tura, **alabastro** em Hatnub e **basalto** em Widan el-Faras, no Faium, de onde parte a estrada pavimentada mais antiga que se conhece. A «corveia» (trabalho sazonal devido ao Estado) mobilizava camponeses durante a cheia, quando não podiam trabalhar a terra.',
  { img: 'eai-barcos-nilo', leg: 'Transporte fluvial de calcário de Tura e granito de Assuão, cerca de 2560 a.C.; cena imaginada. O diário de Merer documenta o transporte de calcário, não esta carga mista específica. Ilustração gerada por IA.' },
  { h: '6. Escrita e documentos' },
  'Os **hieróglifos** («escrita sagrada» para os gregos; para os egípcios, «as palavras divinas») nasceram na fase final do Pré-dinástico e, na I Dinastia, já tinham centenas de sinais, que representam sons, ideias ou ajudam a ler uma palavra. A escrita **hierática**, mais rápida e cursiva, era usada em papiro. O papiro mais antigo conhecido, ainda sem escrita, foi encontrado no túmulo de Hemaka, em Saqqara (reinado de Den). Os papiros escritos mais antigos são os de **Wadi al-Jarf** (c. 2560 a.C.), com as contas e o diário de Merer, e os de **Abusir** (c. 2400 a.C.), com os registos de um templo.',
  { img: 'eai-papiro-merer', leg: 'Papiro administrativo de Abusir, Reino Antigo, fotografado numa exposição em Cleveland; alternativa documental, não é o diário de Merer.' },
  'As inscrições dos túmulos incluem as primeiras **autobiografias** da história: pessoas como **Metjen** (III ou IV Dinastia), **Weni** ou **Harkhuf** gravam a sua carreira e os seus feitos nas paredes, para serem lidos por quem passasse. A **Pedra de Palermo** (c. 2450 a.C.) é um dos **Anais Reais**, que registam por ano os acontecimentos mais importantes de cada reinado, incluindo a altura da cheia do Nilo.',
  { img: 'eai-escriba-sentado', leg: 'Escriba sentado, Saqqara, Louvre (E 3023).' },
  { h: '7. A casa' },
  'As casas eram de **tijolo de adobe** (lama e palha secas ao sol), com tetos de vigas de palmeira e telhados em terraço. As aldeias seguiam o rio, em pequenas elevações que a cheia não atingia. Uma casa de campo tinha poucas divisões, um pátio, um forno de pão e um silo. Os ricos tinham casas com jardim, tanque, colunas de madeira e mobiliário de cedro. As casas desapareceram quase todas, e conhecem-se melhor pelas maquetes de barro dos túmulos e pelas escavações em Heit el-Ghurab e em Ain Asil.',
  { img: 'eai-casa-quotidiano', leg: 'Interior de uma casa do Reino Antigo, cerca de 2400 a.C.; cena quotidiana imaginada. Ilustração gerada por IA.' },
  { h: '8. Alimentação' },
  'A base era o **pão** (de trigo emmer) e a **cerveja** (de cevada, grossa e pouco alcoólica, bebida por todos, incluindo crianças). Comia-se também cebola, alho, lentilhas, favas, pepinos, tâmaras, figos, peixe do Nilo e do Delta, aves e, entre os ricos, carne de vaca e de cabra. O vinho era produto de luxo. Os trabalhadores de Gizé tinham rações regulares de pão, cerveja e carne, como mostram os ossos de gado encontrados em Heit el-Ghurab. Adoçava-se com mel e tâmaras.',
  { h: '9. Vestuário e aparência' },
  'O vestuário era de **linho**. Os homens usavam um **saiote** (*shendyt*), comprido ou curto, e os ricos, saiotes de pregas finas. As mulheres vestiam um vestido de alças justo, até ao tornozelo. As crianças andavam nuas até à adolescência, com uma madeixa de cabelo ao lado (a «madeixa da juventude»). Muitos usavam **perucas** de cabelo humano ou de fibras, e todos os que podiam usavam **maquilhagem** (kohl para os olhos, com função também de proteger do sol), óleos, perfumes e joias de cobre, ouro, faiança, cornalina e turquesa. Andava-se descalço, ou de sandálias de papiro ou de couro.',
  { h: '10. Música, jogos e festas' },
  'Os relevos dos túmulos mostram músicos com **harpas, flautas, oboés duplos e palmas**, e dançarinos em grupos. O jogo de tabuleiro mais popular era o **senet** (30 casas) e o **mehen** («a serpente»), um tabuleiro circular, ambos presentes nos túmulos desde o Período Arcaico. Havia também o **jogo dos cães e chacais** (58 buracos). As festas ligavam-se ao ritmo da natureza e da religião: a cheia do Nilo, o ano novo e as festas dos deuses. Para o rei, a mais importante era a **Heb-Sed**, festa do jubileu, em que o rei corria diante dos deuses para renovar o seu poder.',
  { h: '11. Ciência e conhecimento' },
  { lista: [
    '**Calendário:** o ano civil tinha 365 dias, de 3 estações de 4 meses de 30 dias, mais 5 dias extra. As estações eram **Akhet** (cheia), **Peret** (crescimento) e **Shemu** (colheita). A ligação com o nascimento helíaco de **Sírio** (Sótis) na altura da cheia é muito discutida na origem. O calendário já era usado no Reino Antigo.',
    '**Medida:** o **côvado real** (c. 52,5 cm, dividido em 7 palmos de 4 dedos) era a unidade-base de comprimento. Os pedreiros do Reino Antigo mediam e alinhavam com precisão notável: a base da Grande Pirâmide tem uma diferença de apenas poucos centímetros entre os lados.',
    '**Orientação:** as pirâmides alinham com os pontos cardeais com erros de poucos minutos de arco; o método mais provável é o das estrelas ou o do Sol, mas não há certeza.',
    '**Matemática:** as noções de geometria usadas pelos construtores (declive, o *seked*) só se conhecem bem por papiros posteriores, como o Rhind (c. 1550 a.C.), copiado de textos mais antigos.',
    '**Medicina:** o título de «chefe dos dentistas e dos médicos do rei» pertencia a **Hesy-Ra** (III Dinastia). Os textos médicos conservados (Edwin Smith, Ebers) são do Reino Novo, mas o do Edwin Smith, sobre feridas, descreve conhecimentos que parecem ter origem no Reino Antigo; é uma hipótese comum, não confirmada.'
  ] },
  { h: '12. Tecnologia e construção' },
  'Os egípcios do Reino Antigo trabalhavam com ferramentas de **cobre** (escopros, serras, enxós), de **dolerite** (martelos de pedra) e de madeira, sem ferro e sem roldanas, e sem usar a roda para os blocos. Cortavam o calcário com serras e escopros; o granito, com bolas de dolerite e com abrasivos (areia de quartzo). Transportavam os blocos em **trenós de madeira**, em terreno humedecido, como mostra uma pintura posterior. Os blocos subiam por **rampas**; os restos de rampas e de postes de madeira na pedreira de **Hatnub** (IV Dinastia) sugerem rampas com degraus e declives de cerca de 20%. A forma exata como as pirâmides foram construídas ainda se debate.',
  { img: 'eai-transporte-pedra', leg: 'Transporte de um bloco num trenó em Gizé, cerca de 2550 a.C.; reconstituição artística. A aplicação de água é uma hipótese técnica ilustrada, não um episódio documentado nesta obra. Ilustração gerada por IA.' },
  { img: 'eai-grande-piramide', leg: 'Grande Pirâmide de Quéops.' },
  { caixa: 'Teorias que não têm base', texto: 'As pirâmides **não foram construídas por extraterrestres, nem por uma civilização perdida como a Atlântida**; foram construídas por egípcios, e conhecemos as suas aldeias, os cemitérios, os registos de trabalho e os papiros que descrevem o transporte da pedra. Também **não foram construídas por escravos**: o relato de **Heródoto** (séc. V a.C.) sobre 100 000 homens escravizados ao serviço de Quéops, escrito dois mil anos depois, é desmentido pelas escavações.' },
  { h: '13. Os construtores de Gizé' },
  'Em 1990, os cemitérios de trabalhadores a sul de Gizé revelaram túmulos simples, mas com pão, cerveja e boa assistência médica (há esqueletos com fraturas curadas e amputações bem tratadas). Mais a sul, a equipa de **Mark Lehner** (AERA) escavou uma aldeia, **Heit el-Ghurab**, com padarias, cervejarias, oficinas, dormitórios e peixe seco. As equipas de trabalho tinham nomes como «Amigos de Quéops» ou «Embriagados de Miquerinos», pintados em câmaras de descarga das pirâmides. As estimativas do número de trabalhadores vão de cerca de 10 000 a 30 000, em turnos; um núcleo permanente de especialistas era reforçado por camponeses durante a cheia.',
  { img: 'eai-heit-el-ghurab-cena', leg: 'Povoado de Heit el-Ghurab, cerca de 2500 a.C., inspirado nas escavações da AERA; reconstituição artística. A função das galerias é interpretativa; a cena de produção alimentar não comprova uma cervejaria escavada. Ilustração gerada por IA.' },
  { h: '14. Guerra e fronteiras' },
  'O Reino Antigo não tinha um exército permanente grande. As expedições militares eram campanhas pontuais, com recrutas reunidos para a ocasião, na **Núbia**, na **Líbia** e no **Sinai**. A autobiografia de **Weni**, no reinado de Pepi I, conta uma campanha contra os «habitantes das areias» (provavelmente beduínos do Sinai e do sul do Levante) com um exército que incluía núbios e líbios. Ele fala de cinco incursões. No sul, as relações com a Núbia foram, sobretudo, de comércio, com um posto avançado em **Buhen**.',
  { img: 'eai-caravana-nubia', leg: 'Caravana de regresso de Yam, cerca de 2250 a.C., inspirada nos relatos de Harkhuf; cena imaginada. A localização de Yam é incerta; o dançarino de baixa estatura é representado de modo conjetural. Ilustração gerada por IA.' },
  { h: '15. Morte e túmulos' },
  'O túmulo era uma «casa para a eternidade». Os dignitários eram sepultados em **mastabas** (túmulos retangulares de pedra ou adobe, do árabe «banco») com capelas decoradas, onde a família trazia oferendas. Cada túmulo tinha uma «**falsa porta**», por onde o espírito (**ka**) vinha receber o alimento, e um **serdab** com a estátua do dono. Os corpos eram preservados com **natrão** e **linho**; o mais antigo indício de evisceração é o da rainha Hetepheres I (IV Dinastia), de cujo túmulo se salvou uma arca com as vísceras. A mumificação completa só se desenvolveu mais tarde.',
  { img: 'eai-relevo-sahure', leg: 'Relevo de navios do complexo de Sahure, Abusir.' },
  { img: 'eai-abusir-reconstrucao', leg: 'Complexo funerário de Sahure em Abusir, cerca de 2480 a.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '16. Justiça e leis' },
  'Não se conhece nenhum «código de leis» do Reino Antigo. A justiça fazia-se por decisões do vizir, dos tribunais locais e dos funcionários, segundo a tradição e a ideia de ma’at. Alguns processos conhecem-se por inscrições: **Weni** conta que, num julgamento de uma conspiração no harém do rei, foi encarregado de ouvir o caso sozinho, sem outros juízes, e orgulha-se disso. Havia castigos físicos, multas e confisco de bens, e a pena de morte para crimes graves.'
];

const personalidades = [
  'As personagens do Reino Antigo conhecem-se por inscrições, estátuas e túmulos, e raramente por relatos longos. As biografias são, por isso, curtas e as datas são aproximadas; o que é tradição ou hipótese vai assinalado.',
  { h: 'Narmer (c. 3100 a.C.)' },
  'Rei do final do Pré-dinástico, ou da I Dinastia, conhecido sobretudo pela **Paleta de Narmer**, encontrada em Hieracômpolis (1897 – 1898, por J. E. Quibell e F. W. Green). A paleta mostra-o a bater num inimigo e depois com a coroa vermelha do Norte. Os egiptólogos discutem se ela regista a «unificação» do país ou se é uma imagem ritual do rei como vencedor da desordem. O nome de Narmer aparece em vasos de Abidos e na Palestina, o que indica influência territorial muito vasta.',
  { h: 'Merneith (c. 2950 a.C.)' },
  'Rainha da I Dinastia, esposa do rei Djet e mãe de Den, provavelmente regente durante a infância do filho. O seu túmulo, em Abidos, é do tipo dos túmulos reais, e o seu nome aparece em selos de barro (num deles, como «mãe do rei»); não consta das listas reais do Reino Novo. É um dos primeiros casos de mulher no poder; se foi «rainha-faraó» é debatido.',
  { h: 'Djoser (c. 2670 a.C.)' },
  'Rei da III Dinastia. O seu nome de Hórus era **Netjerikhet**; «Djoser» é a forma usada pelos escribas posteriores. O seu reinado terá durado cerca de duas décadas, o que é incerto; as datas variam muito consoante o autor (entre c. 2690 e c. 2630 a.C.; Shaw, 2000, propõe c. 2630 – 2611 a.C.). A pirâmide de degraus foi o seu maior legado. A **Estela da Fome**, uma inscrição do período ptolemaico, em Assuão, atribui-lhe o fim de uma fome de sete anos, mas é um texto muito posterior e considerado lendário.',
  { h: 'Imhotep (c. 2670 a.C.)' },
  'Ministro e arquiteto de Djoser; o seu nome e títulos aparecem num pedestal de estátua do rei, em Saqqara. É-lhe atribuída a invenção da construção em pedra talhada. Mais tarde foi venerado como sábio, escriba e médico, e deificado no período tardio; os gregos identificaram-no com **Asclépio**. O seu túmulo nunca foi encontrado, apesar de procurado em Saqqara.',
  { h: 'Sneferu (c. 2613 – 2589 a.C.)' },
  'Fundador da IV Dinastia, pai de Quéops. Construiu ou concluiu três pirâmides (Meidum, Curva e Vermelha) e, segundo a Pedra de Palermo, enviou quarenta navios a buscar cedro ao Líbano e fez campanhas na Núbia. Os egípcios recordaram-no como um rei bom, e o seu culto durou, pelo menos, até ao Reino Médio.',
  { h: 'Quéops, ou Khufu (c. 2589 – 2566 a.C.)' },
  'Filho de Sneferu e da rainha Hetepheres I, e construtor da Grande Pirâmide, a mais alta das pirâmides. Do seu reinado resta pouca informação escrita, e só uma estatueta de marfim de cerca de 7,5 cm que o representa, encontrada em Abidos. A Heródoto devemos a imagem de rei tirano, que não tem base nas fontes egípcias; o seu nome continuou a ser venerado nos tempos seguintes. O **barco de Quéops**, desmontado em 1954 de uma fossa junto à pirâmide, tinha cerca de 43 m.',
  { img: 'eai-barca-queops', leg: 'Barco funerário de Quéops reconstituído.' },
  { img: 'eai-estatueta-queops', leg: 'Estatueta de marfim de Quéops, Cairo.' },
  { h: 'Hemiunu (c. 2570 a.C.)' },
  'Vizir de Quéops, sobrinho do rei, e «diretor de todos os trabalhos do rei». É considerado por muitos o arquiteto da Grande Pirâmide, mas essa atribuição é uma dedução dos seus títulos. A sua mastaba, em Gizé, tinha uma estátua sua em calcário, hoje em Hildesheim.',
  { h: 'Quéfren, ou Khafre (c. 2558 – 2532 a.C.)' },
  'Filho de Quéops, construtor da segunda pirâmide de Gizé e, segundo a maioria dos egiptólogos, da Esfinge, cuja face teria o seu rosto. Das estátuas do seu templo do vale resta a de diorito que o mostra sentado, com o falcão Hórus atrás da cabeça. A ideia de que a Esfinge é muito mais antiga é uma teoria marginal, sem apoio dos arqueólogos.',
  { img: 'eai-estatua-khafre', leg: 'Pormenor da estátua de diorito de Quéfren, Cairo.' },
  { h: 'Miquerinos, ou Menkaure (c. 2532 – 2504 a.C.)' },
  'Neto de Quéops. A sua pirâmide é menos de metade da altura das duas vizinhas, mas tem as fiadas de baixo em granito. As estátuas do seu templo, incluindo o célebre grupo com a rainha, foram encontradas por George Reisner (1908 – 1910). O seu sucessor, Shepseskaf, não construiu pirâmide, mas uma grande mastaba em Saqqara Sul.',
  { img: 'eai-miquerinos-rainha', leg: 'Miquerinos e uma rainha, Museu de Belas-Artes de Boston.' },
  { h: 'Ankhhaf (c. 2540 a.C.)' },
  'Príncipe e vizir da IV Dinastia, sepultado numa grande mastaba em Gizé. O seu **busto** de calcário, encontrado por Reisner, é um dos exemplos mais famosos do retrato do Reino Antigo: o rosto parece individual e realista, e não idealizado. É o exemplo de que os dignitários da IV Dinastia, parentes do rei, tinham acesso a monumentos reais.',
  { img: 'eai-busto-ankhhaf', leg: 'Busto de Ankhhaf, Museu de Belas-Artes de Boston.' },
  { h: 'Ptahhotep (c. 2400 a.C.)' },
  'Vizir do rei Djedkare Isesi, da V Dinastia. A tradição atribui-lhe as **Máximas de Ptahhotep**, um dos mais antigos textos sapienciais, dirigidos ao filho, que aconselham humildade, justiça e domínio da palavra. A cópia mais completa (o papiro Prisse, na Biblioteca Nacional de França, em Paris) é do Reino Médio, e alguns estudiosos duvidam de que o texto, na forma em que o temos, seja do Reino Antigo.',
  { h: 'Weni, o Velho (c. 2330 – 2290 a.C.)' },
  'Funcionário que serviu **Teti**, **Pepi I** e **Merenre**. Começou como «guardião do tesouro» e chegou a juiz, comandante militar e governador do Alto Egito. A sua autobiografia, gravada num bloco em Abidos (hoje no Museu Egípcio, Cairo), conta que dirigiu um grande exército contra os «habitantes das areias», que encomendou blocos para a pirâmide do rei, e que abriu canais na primeira catarata. É um dos primeiros relatos militares da história egípcia, escrito por um cidadão que não era rei.',
  { h: 'Harkhuf (c. 2250 a.C.)' },
  'Governador do Alto Egito, ligado a Elefantina, e chefe de caravanas no reinado de Merenre e de Pepi II. Gravou na sua tumba, em Qubbet el-Hawa, o relato das suas quatro viagens a **Yam**, no sul. Inclui a carta do jovem **Pepi II**, então ainda uma criança, a pedir-lhe que lhe trouxesse vivo um «anão dançarino» que trazia de Yam, e promete-lhe honras pelo feito. É uma das cartas reais mais antigas conservadas.',
  { h: 'Pepi II, ou Neferkare (c. 2278 – 2214 a.C., talvez até c. 2184)' },
  'Subiu ao trono criança e reinou, segundo o Cânone de Turim e Manethon, mais de noventa anos; as inscrições contemporâneas só chegam ao 62.º ano, e a maioria dos egiptólogos aceita um reinado de cerca de 64 anos. A pirâmide, em Saqqara Sul, é pequena e com Textos das Pirâmides. No fim do seu reinado, o poder central enfraquecera, e os governadores já eram quase independentes. Manethon e Heródoto falam de uma rainha **Nitócris** que o teria sucedido e se teria vingado de assassinos do irmão; é, provavelmente, lenda, e a sua identificação com um rei do Cânone de Turim é debatida.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**O Estado e a administração:** a ideia de um governo central com funcionários, vizir, impostos e arquivos.',
    '**A arquitetura monumental:** a pirâmide e o templo de pedra, copiados ao longo de milénios e, mais tarde, imitados no mundo todo.',
    '**A escrita:** hieróglifos e hierático, com todo o seu uso na administração e na literatura.',
    '**Literatura:** as Máximas de Ptahhotep (atribuídas), as autobiografias e os Textos das Pirâmides, primeiros textos religiosos da humanidade.',
    '**A arte:** o retrato escultórico de rosto individual, o relevo narrativo, as convenções de proporção que durariam três mil anos.',
    '**Ideias sobre o além:** o ka, o julgamento, o renascimento, que influenciaram toda a religião egípcia e, indiretamente, outras tradições.'
  ] },
  { h: 'Arte' },
  'A arte do Reino Antigo definiu o «estilo egípcio»: a estátua de frente, rígida, com a perna esquerda ligeiramente à frente, em pedra dura; o relevo em registos horizontais, com figuras de perfil e olhos de frente; as cores convencionais (homens avermelhados, mulheres mais claras). Ao mesmo tempo, há uma tendência para o **realismo** nos retratos privados, como o busto de Ankhhaf, o Escriba Sentado e o Ka-aper. Os relevos dos túmulos de Saqqara, como o de Mereruka (VI Dinastia), mostram a vida diária: pesca, colheita, ofícios, jogos.',
  { h: 'Arquitetura: da mastaba à pirâmide' },
  'Em pouco mais de um século (de c. 2670 a c. 2560 a.C.), o Egito passou da mastaba à pirâmide de degraus, depois à pirâmide de faces lisas e, por fim, à Grande Pirâmide. Nenhuma outra civilização fez uma evolução tão rápida em tamanho. A pirâmide é uma versão em pedra da «colina primordial» e dos raios do Sol, e a sua forma liga o rei morto a Rá. Mais tarde, as pirâmides tornam-se mais pequenas, e a V Dinastia investe nos templos do sol.',
  { img: 'eai-abusir', leg: 'Pirâmides de Abusir.' },
  { h: 'A redescoberta' },
  'As pirâmides nunca estiveram esquecidas: foram visitadas por gregos e romanos, descritas por Heródoto (séc. V a.C.) e Diodoro, e incluídas pelos gregos nas «sete maravilhas» (a Grande Pirâmide é a única que ainda existe). Por volta de 820 – 832 d.C., o califa **al-Ma’mun** terá aberto o túnel que ainda hoje serve de entrada. A leitura dos hieróglifos só foi possível depois de **Champollion** (1822). Em 1880 – 1881, **Maspero** descobriu os Textos das Pirâmides; **Flinders Petrie** mediu Gizé em 1880 – 1882; **Reisner** escavou os cemitérios (1902 – 1942); **Ludwig Borchardt** escavou Abusir; **Jean-Philippe Lauer** restaurou o complexo de Djoser durante décadas; em 1954 foi descoberto o barco de Quéops; e em 2013, o diário de Merer.',
  { h: 'O Egito e a imaginação' },
  'Desde a Antiguidade as pirâmides inspiraram lendas: os árabes diziam que tinham sido construídas antes do dilúvio; na Idade Média, achava-se que eram os celeiros de José (a «lenda de José»); e a **egiptomania** moderna (desde Napoleão, em 1798) fez delas um símbolo universal. Hoje, as teorias de que foram feitas por extraterrestres ou por civilizações perdidas são pseudoarqueologia, sem fundamento: ignoram as provas dos trabalhadores, das pedreiras e dos papiros.',
  { h: 'Debates em aberto' },
  { lista: [
    '**Como se construíram as pirâmides:** as rampas retas, em espiral, internas ou mistas; ainda não há consenso.',
    '**A «unificação»:** foi um processo longo ou um episódio de Narmer? E quem é Menés?',
    '**A Esfinge:** a atribuição a Quéfren é a mais aceite, mas a datação exata não tem prova direta.',
    '**O fim do Reino Antigo:** a seca (o evento de 4,2 mil anos), o poder dos governadores e o longo reinado de Pepi II; o peso relativo de cada fator é debatido.',
    '**Cronologia:** as diferenças entre autores chegam a várias décadas; as datas desta página são convencionais.'
  ] },
  { h: 'Onde visitar' },
  { lista: [
    '**Gizé:** o planalto, com as três pirâmides e a Esfinge. O **Grande Museu Egípcio**, ao lado, reúne peças de todas as épocas, incluindo os barcos de Quéops.',
    '**Saqqara:** a pirâmide de degraus de Djoser, a pirâmide de Unas e os túmulos de Mereruka e de Ti.',
    '**Dahshur:** as pirâmides Curva e Vermelha, que se podem visitar por dentro, e muito menos visitadas do que as de Gizé.',
    '**Museu Egípcio, em Cairo:** a Paleta de Narmer, as estátuas de Djoser, de Quéfren, de Rahotep e Nofret, e o Ka-aper.',
    '**Museu do Louvre, em Paris:** o Escriba Sentado e a Faca de Gebel el-Arak. **Museu de Belas-Artes, em Boston:** o busto de Ankhhaf e o grupo de Miquerinos. **Museu Ashmolean, em Oxford:** a cabeça de maça de Escorpião.',
    '**Museu Arqueológico de Palermo:** o maior fragmento da Pedra de Palermo.'
  ] }
];

const quiz = [
  { p: 'Que nome davam os egípcios à terra fértil do vale do Nilo?', op: ['Deshret', 'Kemet', 'Punt', 'Ma’at'], certa: 1, exp: 'Kemet significa «a Terra Negra», por causa do lodo escuro deixado pela cheia; Deshret era «a Terra Vermelha», o deserto.' },
  { p: 'Que objeto, de c. 3100 a.C., é associado à unificação do Alto e do Baixo Egito?', op: ['A Pedra de Roseta', 'A Paleta de Narmer', 'A máscara de Tutankhamon', 'O Cânone de Turim'], certa: 1, exp: 'A Paleta de Narmer mostra o rei com a coroa branca e com a vermelha; a sua interpretação é debatida.' },
  { p: 'Qual era o nome egípcio da capital do Reino Antigo, hoje Mênfis?', op: ['Ineb-hedj (as Muralhas Brancas)', 'Waset', 'Iunu', 'Akhetaton'], certa: 0, exp: 'Ineb-hedj, «as Muralhas Brancas»; «Mênfis» vem de Men-nefer, nome da pirâmide de Pepi I.' },
  { p: 'Quem foi o ministro e arquiteto atribuído à pirâmide de degraus de Djoser?', op: ['Hemiunu', 'Imhotep', 'Ptahhotep', 'Weni'], certa: 1, exp: 'Imhotep serviu Djoser e foi mais tarde venerado como sábio e deus.' },
  { p: 'Que rei da IV Dinastia construiu três pirâmides (Meidum, Curva e Vermelha)?', op: ['Quéops', 'Sneferu', 'Miquerinos', 'Unas'], certa: 1, exp: 'Sneferu experimentou as formas até chegar à pirâmide de faces lisas, a Vermelha.' },
  { p: 'Qual era a altura original da Grande Pirâmide de Quéops?', op: ['Cerca de 62 m', 'Cerca de 100 m', 'Cerca de 146 m', 'Cerca de 200 m'], certa: 2, exp: 'Tinha cerca de 146,6 m; hoje, sem o topo e o revestimento, tem cerca de 138 m.' },
  { p: 'Quem construiu as pirâmides, segundo as escavações em Gizé?', op: ['Escravos hebreus', 'Extraterrestres', 'Trabalhadores egípcios organizados, alimentados e pagos em rações', 'Prisioneiros de guerra apenas'], certa: 2, exp: 'A aldeia de Heit el-Ghurab e os cemitérios mostram trabalhadores egípcios bem alimentados e tratados.' },
  { p: 'O que é o diário de Merer?', op: ['Um papiro com o relato do transporte de calcário para a Grande Pirâmide', 'Um poema de amor', 'Uma lista de reis', 'Um tratado médico'], certa: 0, exp: 'Encontrado em Wadi al-Jarf, c. 2560 a.C., é dos papiros escritos mais antigos que se conhecem.' },
  { p: 'Qual foi a primeira pirâmide com Textos das Pirâmides nas paredes?', op: ['A de Djoser', 'A de Quéops', 'A de Unas', 'A de Miquerinos'], certa: 2, exp: 'A de Unas, último rei da V Dinastia, c. 2350 a.C.' },
  { p: 'A Esfinge de Gizé é habitualmente atribuída a que rei?', op: ['Quéops', 'Quéfren', 'Djoser', 'Pepi II'], certa: 1, exp: 'A maioria dos egiptólogos atribui-a a Quéfren, c. 2550 a.C.' },
  { p: 'O que eram os nomarcas?', op: ['Sacerdotes de Rá', 'Governadores das províncias (nomos)', 'Chefes do exército', 'Escribas do rei'], certa: 1, exp: 'Os nomarcas governavam os nomos; na VI Dinastia, o cargo tornou-se hereditário e o rei perdeu poder.' },
  { p: 'Que festa real servia para renovar o poder do rei?', op: ['Opet', 'Heb-Sed', 'Wag', 'Khoiak'], certa: 1, exp: 'A Heb-Sed (jubileu) incluía uma corrida ritual do rei; o recinto de Djoser tem um pátio para ela.' },
  { p: 'Que rei da VI Dinastia teve um reinado muito longo, talvez de cerca de 64 anos (ou, segundo as fontes antigas, mais de 90)?', op: ['Teti', 'Pepi II', 'Unas', 'Khasekhemwy'], certa: 1, exp: 'Pepi II subiu ao trono criança; a duração do seu reinado é debatida.' },
  { p: 'Quem escreveu uma célebre autobiografia ao serviço de Teti, Pepi I e Merenre?', op: ['Weni', 'Imhotep', 'Ankhhaf', 'Hemiunu'], certa: 0, exp: 'Weni, funcionário e comandante, serviu três reis da VI Dinastia.' },
  { p: 'Que fator, além do poder dos governadores, é apontado para o fim do Reino Antigo?', op: ['Uma invasão romana', 'Uma seca que reduziu as cheias do Nilo', 'A erupção de um vulcão', 'A peste negra'], certa: 1, exp: 'Registos geológicos apontam uma seca por volta de 2200 a.C.; o peso desse fator é debatido.' }
];

export default {
  id: 'egito',
  cor: '#d9b44a',
  emblema: '../../assets/img/egito.png',
  grupo: { ...GRUPO, aqui: 'antigo-imperio' },
  nome:    { pt: 'Pré-dinástico e Reino Antigo', en: 'Predynastic and Old Kingdom' },
  periodo: { pt: 'c. 5000 – 2181 a.C.', en: 'c. 5000 – 2181 BC' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
