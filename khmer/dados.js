// IMPÉRIO KHMER — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas aproximadas; muitas datas khmer vêm de inscrições em pedra (em sânscrito e em khmer antigo), por vezes em era Shaka (somar 78 d.C.). a.C./d.C.
// Imagens: cada {img:'id'} procura o ficheiro  khmer/img/id.jpg  (ver IMAGENS_KHMER.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'O **Império Khmer** foi o reino que dominou grande parte do Sudeste Asiático continental entre os séculos IX e XV d.C. A partir da planície em redor do lago **Tonlé Sap**, no Camboja de hoje, os seus reis governaram territórios que chegaram a incluir partes da atual Tailândia, do Laos e do sul do Vietname. A sua capital, **Angkor**, foi uma das maiores cidades do mundo pré-industrial, e ainda hoje se ergue ali o **Angkor Wat**, o maior monumento religioso da Terra.',
    'O império nasceu em **802**, quando **Jayavarman II** se proclamou rei universal no planalto de Phnom Kulen. Cresceu com templos-montanha, enormes reservatórios de água (os **baray**) e uma agricultura de arroz muito produtiva; viveu o seu apogeu com **Suryavarman II** (Angkor Wat) e **Jayavarman VII** (Angkor Thom e o Bayon); e foi-se desfazendo, entre os séculos XIII e XV, com a pressão dos reinos tai, a mudança de religião e de rotas de comércio, e episódios de seca e de cheia. Em 1431 (data debatida) Angkor deixou de ser capital, mas nunca foi esquecida.'
  ] },
  { img: 'khm-mapa-imperio', leg: 'Mapa interpretativo do Império Khmer em 1203.' },
  { h: 'Onde ficava' },
  'O coração do império era a planície do **Tonlé Sap** («o grande lago de água doce»), alimentada pelo **Mekong**. Esse lago tem uma particularidade: na estação das chuvas o rio Tonlé Sap inverte o sentido da corrente, e o lago multiplica várias vezes a sua superfície, inundando as margens e deixando, quando as águas baixam, uma enorme riqueza de peixe e de solo fértil. Foi nessa planície, a norte do lago, aos pés de uma escarpa de arenito (o planalto de **Phnom Kulen**, de onde vinha a pedra), que nasceram as cidades khmer. A atual cidade de **Siem Reap** é a porta de entrada para as ruínas de Angkor.',
  'Nos séculos de maior poder, os reis khmer controlaram ou receberam tributo de regiões muito mais vastas: o vale médio do Mekong (até Vientiane, no Laos), o planalto de Khorat e o vale do Chao Phraya (na Tailândia atual), e o sul do Vietname, incluindo a antiga costa de Champa. Os limites exatos mudaram muitas vezes e são debatidos, porque este era um mundo de **mandalas**, círculos de poder em que um rei forte recebia a lealdade de chefes vizinhos, e não de fronteiras fixas.',
  { img: 'khm-angkor-wat-aerea', leg: 'Vista aérea do Angkor Wat com o fosso' },
  { h: 'Quando existiu' },
  'A história khmer costuma dividir-se em duas grandes fases: a **pré-angkoriana** (antes de 802) e a **angkoriana** (802 a 1431), seguida do período chamado **pós-angkoriano**. As datas abaixo são aproximadas e as mais antigas são as mais incertas.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Funan', 'c. séc. I – VI d.C.', 'Reino comercial do delta do Mekong, conhecido sobretudo por fontes chinesas e pelo porto de Oc Eo; forte influência da Índia'],
    ['Chenla (pré-angkoriano)', 'c. 550 – 802', 'Pequenos reinos khmer; inscrições em khmer antigo e em sânscrito; templos de tijolo (Sambor Prei Kuk); divisão do território debatida'],
    ['Fundação e Roluos', '802 – c. 889', 'Jayavarman II e o culto do deus-rei; Hariharalaya; Bakong; primeiro grande baray'],
    ['Primeira Angkor', 'c. 889 – 1080', 'Yasovarman e Yasodharapura; Koh Ker; Banteay Srei; Baphuon; o Baray Ocidental'],
    ['Apogeu', '1113 – 1218', 'Suryavarman II (Angkor Wat); guerra com os Chams (1177); Jayavarman VII, o budismo Mahayana e Angkor Thom'],
    ['Declínio', '1218 – 1431', 'Reação hindu e depois budismo Theravada; pressão tai (Sukhothai, Ayutthaya); relato de Zhou Daguan (1296–97); abandono de Angkor como capital'],
    ['Pós-angkoriano', 'após 1431', 'Capitais em Phnom Penh, Longvek e Oudong; Angkor Wat continua como santuário budista']
  ] } },
  { img: 'khm-apsara-relevo', leg: 'Apsaras esculpidas no Angkor Wat' },
  { h: 'Quem eram os khmer?' },
  'Os **khmer** são o povo que fala a língua khmer, da família austroasiática, uma das línguas com inscrições mais antigas do Sudeste Asiático continental (a mais antiga data de 611 d.C.). Hoje são cerca de nove décimos da população do Camboja. Os antepassados dos khmer cultivavam arroz e trabalhavam o bronze e o ferro muito antes dos primeiros reinos. Entre os séculos I e VI, comerciantes, sacerdotes e escribas vindos da Índia trouxeram o **sânscrito**, a religião hindu e budista e as ideias de realeza, que as elites locais adaptaram. Isto chama-se por vezes «indianização», mas os especialistas sublinham que foram os próprios governantes do Sudeste Asiático a escolher e a transformar o que vinha de fora.',
  { h: 'Porque importam' },
  { lista: [
    '**Arquitetura:** o Angkor Wat, o Bayon e as centenas de templos do parque arqueológico de Angkor estão entre as maiores obras de pedra do mundo, e o Angkor Wat é o símbolo nacional do Camboja.',
    '**Engenharia hidráulica:** canais, diques e reservatórios gigantescos regularam a água de uma região de monção, com estações secas e cheias violentas, durante séculos.',
    '**Uma cidade-paisagem:** os levantamentos por LiDAR (laser aéreo) mostraram que Angkor era uma enorme malha urbana de baixa densidade, com centenas de milhares de habitantes, muito maior do que se pensava.',
    '**Arte:** os baixos-relevos do Angkor Wat e do Bayon são uma das maiores galerias de pedra esculpida do mundo, com cenas da mitologia, da guerra e da vida de todos os dias.',
    '**Religião e política:** como se faz de um rei um deus, e como um reino passa do hinduísmo ao budismo Mahayana e depois ao budismo Theravada.',
    '**Uma lição de ambiente:** o destino de Angkor é um dos casos de estudo mais discutidos sobre a relação entre sociedade, água e clima.'
  ] },
  { img: 'khm-bayon-rostos', leg: 'Torres com rostos do Bayon' },
  { caixa: 'O Camboja hoje', texto: 'Angkor foi inscrita na lista do Património Mundial da UNESCO em **1992**. Recebe milhões de visitantes por ano, e a sua gestão (turismo, água subterrânea, restauro) é um desafio permanente. O **Reino do Camboja** é hoje um país de cerca de 17 milhões de habitantes, com capital em **Phnom Penh**; o Angkor Wat aparece na bandeira nacional. Os milhares de pessoas que vivem nas aldeias dentro do parque são, em muitos casos, descendentes dos agricultores que sempre ali viveram.' }
];

const linha = [
  'Esta linha do tempo segue os acontecimentos principais da história khmer. As datas são aproximadas; muitas vêm de inscrições (**estelas**) gravadas em sânscrito ou em khmer antigo, o que dá uma precisão rara para esta parte do mundo, mas há muitos pontos debatidos.',
  { linha: [
    { d: 'c. séc. I – III d.C.', t: 'Funan', x: 'No delta do Mekong surge o reino de **Funan**, o primeiro estado do Sudeste Asiático de que há notícia. Embaixadores chineses, como **Kang Tai** (c. 245), deixaram descrições. O porto de **Oc Eo** (hoje no Vietname) ligava o Índico ao mar da China; ali se encontrou até uma moeda romana do tempo de Antonino Pio (152 d.C.). Funan não é «khmer» no sentido estrito, mas a sua herança política e religiosa passou aos reinos seguintes.' },
    { d: 'c. 550', t: 'Chenla toma o poder', x: 'Os reis de **Chenla** (Zhenla nas fontes chinesas), entre os quais **Bhavavarman I** e **Citrasena** (Mahendravarman), vão absorvendo Funan e fundam reinos mais para o interior, num processo gradual e de datas incertas (c. 550 – 627). Os documentos mais antigos em khmer antigo (**611 d.C.**, em Angkor Borei) pertencem a este período.' },
    { d: 'c. 616 – 637', t: 'Isanavarman I', x: 'Constrói **Isanapura** (Sambor Prei Kuk), cidade com dezenas de templos de tijolo, dedicados sobretudo a Shiva. Os textos chineses falam de uma divisão posterior em «Chenla de Terra» e «Chenla de Água»; muitos historiadores desconfiam hoje dessa divisão e veem antes uma fragmentação em pequenos reinos.' },
  ] },
  { img: 'khm-oc-eo-funan', leg: 'Vishnu, Rama e Balarama de Phnom Da, período pré-angkoriano, Museu Nacional do Camboja.' },
  { img: 'khm-sambor-prei-kuk', leg: 'Templo de tijolo em Sambor Prei Kuk' },
  { linha: [
    { d: '802', t: 'Jayavarman II, rei dos reis', x: 'Segundo uma inscrição posterior (a de **Sdok Kak Thom**, de 1052), **Jayavarman II** regressou de «Java» (talvez Champa ou a Java dos Sailendras, o ponto é debatido), unificou os principais chefes e fez-se consagrar em **Mahendraparvata**, no planalto de Kulen, num rito conduzido por um brâmane. O rito proclamava a independência de Java e instituía o culto do **devaraja** («rei-deus» ou «senhor dos deuses»). A data de 802 é a que a tradição retém; o seu significado exato é discutido.' },
  ] },
  { img: 'khm-jayavarman-ii-cena', leg: 'Consagração conjetural de um rei khmer em Phnom Kulen, 802. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 850', t: 'Morte de Jayavarman II', x: 'O fundador morreu e recebeu o nome póstumo de **Paramesvara**. A cronologia exata do seu reinado (c. 802 a 835 ou 850) é incerta. Passou os seus últimos anos em **Hariharalaya**, na zona de Roluos, que foi capital até ao fim do século IX.' },
    { d: '877 – 889', t: 'Indravarman I e Roluos', x: 'Subiu ao trono em 877. Para garantir a água, mandou escavar o **Indratataka**, um enorme reservatório, e consagrou em 879 o templo de **Preah Ko**, dedicado aos antepassados. Em 881 consagrou o **Bakong**, o primeiro grande templo-montanha em arenito: uma pirâmide de cinco degraus.' },
  ] },
  { img: 'khm-hariharalaya-reconstrucao', leg: 'Reconstituição conjetural de Hariharalaya (Roluos), c. 880. Ilustração gerada por IA.' },
  { img: 'khm-bakong', leg: 'Templo Bakong, Roluos' },
  { linha: [
    { d: 'c. 889 – 910', t: 'Yasovarman I e Yasodharapura', x: 'Filho de Indravarman. Constrói o **Lolei** numa ilha do Indratataka e funda a nova capital, **Yasodharapura**, centrada na colina do **Phnom Bakheng**, e um reservatório ainda maior, o **Baray Oriental**. A «cidade de Yasovarman» manter-se-á como núcleo de Angkor durante séculos.' },
  ] },
  { img: 'khm-phnom-bakheng', leg: 'Templo-montanha de Phnom Bakheng' },
  { linha: [
    { d: '928 – 944', t: 'Koh Ker', x: 'Um rival, **Jayavarman IV**, muda a capital para **Koh Ker** (Lingapura), a cerca de 120 km a nordeste. Constrói ali uma pirâmide de sete degraus, o **Prasat Thom** (Prang), e muitos templos. Reinou até 941; o filho Harshavarman II governou ainda a partir de Koh Ker até 944, e depois o poder volta a Yasodharapura.' },
  ] },
  { img: 'khm-koh-ker', leg: 'Pirâmide de Prasat Thom, Koh Ker' },
  { linha: [
    { d: '944 – 968', t: 'Rajendravarman II', x: 'Regressa a Angkor, constrói o **Mebon Oriental** (953), no centro do Baray Oriental, e o **Pre Rup** (961), e prepara o terreno para **Banteay Srei**, consagrado em **967**, não por um rei mas por um brâmane de alto nível, **Yajnavaraha**, mestre do jovem rei Jayavarman V.' },
    { d: 'c. 1002 – 1050', t: 'Suryavarman I', x: 'Impõe-se depois de uma guerra civil. Expande o reino para o planalto de Khorat e para o vale do Chao Phraya, constrói o **Palácio Real** e o **Phimeanakas**, e o **Baray Ocidental** (com o Mebon Ocidental, uma ilha no centro), começado talvez no seu reinado e concluído depois. Era budista, mas manteve o culto hindu do rei; o seu reinado é um bom exemplo de convivência religiosa.' },
    { d: 'c. 1060', t: 'Baphuon', x: 'Constrói-se o **Baphuon**, um grande templo-montanha (tradicionalmente atribuído a Udayadityavarman II; alguns autores atribuem-no a Suryavarman I), e a **Phimai** (no atual nordeste da Tailândia) ganha importância como centro regional, com um templo de inspiração budista.' },
    { d: '1080', t: 'Nova dinastia', x: '**Jayavarman VI** toma o trono em Angkor (reinou até 1107), fundando uma dinastia originária da região de Mahidharapura, talvez ligada ao nordeste. É dessa linhagem que sairá **Suryavarman II**.' },
    { d: '1113 – c. 1150', t: 'Suryavarman II e o Angkor Wat', x: 'Sobe ao trono em 1113, depois de uma luta com um rival. Constrói o **Angkor Wat**, templo-mausoléu dedicado a **Vishnu**, durante algumas décadas, e **Beng Mealea**. Faz campanhas contra Champa e contra o Đại Việt (o Vietname do norte) com resultados desiguais, e envia uma embaixada à China em 1116. Morreu c. 1150, possivelmente em campanha (o ponto é debatido). Recebeu o nome póstumo **Paramavishnuloka**.' },
  ] },
  { img: 'khm-construcao-angkor-wat', leg: 'Construção conjetural do Angkor Wat, século XII. Ilustração gerada por IA.' },
  { linha: [
    { d: '1177', t: 'Os Chams saqueiam Angkor', x: 'Os Chams, de Champa, no atual Vietname central, sob o rei **Jaya Indravarman IV**, sobem o Mekong e o Tonlé Sap em barcos, tomam **Yasodharapura** e matam o rei **Tribhuvanadityavarman**. A ocupação dura quatro anos. Foi um trauma profundo para o reino.' },
    { d: '1181', t: 'Jayavarman VII', x: 'Um príncipe da casa real, **Jayavarman VII**, expulsa os Chams (segundo a tradição e os relevos do Bayon, numa batalha naval no Tonlé Sap) e é coroado em **1181**, já com cerca de 55 anos. Era budista Mahayana. Governou até c. 1218.' },
  ] },
  { img: 'khm-batalha-chams', leg: 'Relevo da batalha naval khmer-cham, Bayon' },
  { linha: [
    { d: '1186 – 1191', t: 'Ta Prohm e Preah Khan', x: 'Consagra o **Ta Prohm** (1186), em honra da mãe, e o **Preah Khan** (1191), em honra do pai. Funda hospitais, **«casas de repouso»** ao longo das estradas e reconstrói o reino. Nas inscrições de Ta Prohm diz-se que o templo sustentava mais de doze mil pessoas.' },
    { d: 'c. 1190 – 1220', t: 'Angkor Thom e o Bayon', x: 'Constrói a nova cidade murada de **Angkor Thom**, com cinco portas, e no centro o **Bayon**, o templo das torres com rostos. Constrói ainda **Banteay Chhmar** e **Neak Pean**. As campanhas contra Champa (1190–91 e ocupação até 1220) estendem o império ao seu máximo.' },
    { d: 'c. 1218', t: 'Morte de Jayavarman VII', x: 'Morre por volta dos 90 anos. Alguns historiadores pensam que o enorme esforço de construção esgotou o reino; outros veem nele o auge do poder.' },
    { d: 'c. 1243 – 1295', t: 'Jayavarman VIII', x: 'O reinado é marcado por uma **reação hindu (shivaita)**: imagens de Buda são picadas e removidas (por exemplo no Bayon e em Preah Khan) e vários templos voltam ao culto de Shiva. Em 1238 os tai, em **Sukhothai**, tornam-se independentes. Em 1283–85 o rei, perante os Mongóis, preferiu pagar tributo a Kublai Khan.' },
  ] },
  { img: 'khm-jayavarman-vii-cabeca', leg: 'Cabeça atribuída a Jayavarman VII, finais do século XII–inícios do XIII, Museu Guimet, Paris.' },
  { linha: [
    { d: '1296 – 1297', t: 'Zhou Daguan em Angkor', x: 'O diplomata chinês **Zhou Daguan** passa um ano na corte do rei **Indravarman III** (Srindravarman) e escreve, mais tarde (c. 1312, data incerta), *Os Costumes do Camboja*, o único relato escrito de Angkor por um observador do tempo. O rei Indravarman III reinou de 1295 a 1308 e foi o primeiro a promover o **budismo Theravada** (da escola pali).' },
    { d: '1327', t: 'Última inscrição em sânscrito', x: 'A última grande inscrição sânscrita de Angkor é de 1327. Com o budismo Theravada, o **pali** e o khmer ganham terreno; as grandes obras de pedra cessam.' },
    { d: '1431 (debatido)', t: 'Ayutthaya toma Angkor', x: 'Segundo as crónicas tais e khmer (de datas debatidas), o reino tai de **Ayutthaya** saqueou Angkor. O rei **Ponhea Yat** terá abandonado a cidade por Phnom Penh, onde se instalou a nova corte (a data tradicional é 1431–1434).' },
    { d: 'séc. XV – XVI', t: 'Depois de Angkor', x: 'A corte instala-se em Phnom Penh e depois em **Longvek** e **Oudong**. O Angkor Wat continua a ser visitado e cuidado como santuário budista. Um frade capuchinho português, **António da Madalena**, visita Angkor em **1586**, e o seu relato foi registado pelo cronista **Diogo do Couto**.' },
    { d: '1860', t: 'Henri Mouhot', x: 'O naturalista francês **Henri Mouhot** visita Angkor em janeiro de 1860 e o seu diário póstumo (1863–64) torna as ruínas famosas na Europa. Mas Angkor nunca fora «perdida»: os cambojanos, os monges e vários europeus já a conheciam.' },
    { d: '1907', t: 'Regresso de Angkor ao Camboja', x: 'Depois de décadas sob domínio do Sião, a região de Siem Reap passa para o protetorado francês do Camboja. Em 1908 nasce a **Conservação de Angkor**, ligada à Escola Francesa do Extremo Oriente (EFEO).' },
    { d: '1992', t: 'Património Mundial', x: 'Angkor é inscrita na lista da UNESCO (e, até 2004, na lista do património em perigo).' },
    { d: '2012 – 2015', t: 'LiDAR', x: 'Os levantamentos laser aéreos de **Damian Evans** e colegas (artigo de 2013) revelam cidades escondidas sob a floresta e a verdadeira extensão de Angkor.' }
  ] },
  { h: 'Redescoberta' },
  'A «redescoberta» de Angkor é um mito colonial: o Angkor Wat nunca foi abandonado, e a sua imagem estava presente na memória, nas peregrinações e nos relatos de portugueses, espanhóis e japoneses nos séculos XVI e XVII. O que mudou em 1860 foi a **publicidade** europeia, e depois a investigação científica.'
];

const mapa = [
  'O mapa khmer não é o de uma cidade, mas o de uma **rede**: uma capital espalhada por centenas de quilómetros quadrados e capitais regionais ligadas por estradas reais. Os lugares principais são estes.',
  { tabela: { cab: ['Lugar', 'Onde (atual)', 'Quando / quem', 'Importância'], linhas: [
    ['Oc Eo', 'Delta do Mekong, Vietname', 'Funan, séc. I – VI', 'Porto comercial; rotas entre a Índia e a China'],
    ['Sambor Prei Kuk (Isanapura)', 'Província de Kampong Thom, Camboja', 'Isanavarman I, séc. VII', 'Capital pré-angkoriana; templos de tijolo; Património Mundial'],
    ['Phnom Kulen (Mahendraparvata)', 'Norte de Siem Reap', '802 e séc. IX', 'Local da consagração de Jayavarman II; pedreiras de arenito'],
    ['Hariharalaya (Roluos)', 'Perto de Siem Reap', 'Séc. IX, Indravarman I', 'Primeira capital imperial; Preah Ko, Bakong, Lolei'],
    ['Yasodharapura / Angkor', 'Siem Reap', 'Séc. IX – XV', 'Capital durante a maior parte da história khmer'],
    ['Koh Ker (Lingapura)', 'Província de Preah Vihear', 'Jayavarman IV e Harshavarman II, 928–944', 'Capital provisória; pirâmide de sete degraus'],
    ['Angkor Wat', 'Siem Reap', 'Suryavarman II, séc. XII', 'Templo-mausoléu de Vishnu'],
    ['Angkor Thom e o Bayon', 'Siem Reap', 'Jayavarman VII, c. 1190–1220', 'Última grande capital murada'],
    ['Banteay Srei', 'A 25 km de Angkor', '967', 'Templo de arenito rosa, com relevos delicados'],
    ['Preah Vihear', 'Fronteira com a Tailândia', 'Séc. XI – XII', 'Santuário numa escarpa; Património Mundial'],
    ['Phimai', 'Nordeste da Tailândia', 'Séc. XI – XII', 'Capital regional e templo; ligada por estrada a Angkor'],
    ['Wat Phu', 'Sul do Laos', 'Séc. V – XIII', 'Santuário de montanha; Património Mundial'],
    ['Banteay Chhmar', 'Noroeste do Camboja', 'Jayavarman VII', 'Grande templo provincial, com relevos de batalhas'],
    ['Phnom Penh', 'Camboja', 'Capital depois de c. 1434', 'Capital do Camboja atual']
  ] } },
  { img: 'khm-mapa-angkor-sitio', leg: 'Mapa arqueológico histórico de Angkor, Service géographique de l’Indochine.' },
  { h: 'Angkor: uma cidade-paisagem' },
  '**Angkor** não foi uma cidade com um centro e muralhas, como Babilónia ou Roma: foi uma enorme malha de templos, aldeias, campos de arroz, canais e reservatórios, com várias «capitais» sucessivas dentro dela. Os levantamentos por **LiDAR** (laser aéreo que «vê» através das árvores) mostraram que a malha urbana ocupava mais de **mil quilómetros quadrados**, com milhares de montículos de casas, aterros, estradas e tanques. Estima-se que viveram ali centenas de milhares de pessoas no século XIII (as estimativas mais citadas vão de 700 mil a 900 mil e são muito debatidas), o que a torna uma das maiores cidades do mundo pré-industrial em área.',
  { img: 'khm-lidar-angkor', leg: 'Mapa arqueológico da região de Angkor, baseado no mapeamento LiDAR; Landauer et al., 2025, figura 2, base topográfica NASA SRTM. Não é uma imagem LiDAR do terreno.' },
  { h: 'Angkor Wat' },
  'O **Angkor Wat** («cidade-templo») foi construído por **Suryavarman II** no século XII como templo dedicado a **Vishnu** e, ao que tudo indica, como seu mausoléu. Ocupa cerca de **160 hectares**, cercados por um fosso de 190 m de largura, e a torre central tem cerca de **65 m**. A entrada principal é a **oeste**, a direção associada à morte, o que sustenta a ideia de mausoléu (o ponto é debatido). Representa o **monte Meru**, a montanha dos deuses da cosmologia hindu, com cinco torres em quincôncio, e as suas galerias estão cobertas de baixos-relevos. Foi sendo transformado em templo budista a partir do fim do século XIII e nunca deixou de ser usado.',
  { h: 'Angkor Thom e o Bayon' },
  '**Angkor Thom** («a grande cidade») foi construída por **Jayavarman VII** sobre a cidade anterior, num quadrado de cerca de 3 km de lado, com uma muralha e um fosso, e cinco portas (quatro nos pontos cardeais e a Porta da Vitória, junto à porta leste). A porta sul está rodeada de **gigantes que seguram uma serpente**, numa alusão ao Batimento do Oceano de Leite. No centro, o **Bayon** é um templo de dezenas de torres cobertas de grandes **rostos sorridentes**, cerca de duzentos ao todo. Quem representam é debatido: o bodisatva **Avalokiteshvara**, o próprio rei, ou ambos. Perto, o **Terraço dos Elefantes** e o **Terraço do Rei Leproso** eram palcos de cerimónias reais.',
  { img: 'khm-angkor-thom-porta', leg: 'Porta sul de Angkor Thom, com torre de rostos; os gigantes da ponte não são visíveis neste enquadramento.' },
  { img: 'khm-angkor-thom-reconstrucao', leg: 'Reconstituição aérea conjetural de Angkor Thom, c. 1200. Ilustração gerada por IA.' },
  { h: 'Banteay Srei' },
  'O **Banteay Srei** («cidadela das mulheres» ou «da beleza») é um templo pequeno, de **arenito rosa**, consagrado em **967**. O que o torna único é a qualidade dos relevos, com cenas do *Ramayana* e de outros mitos, esculpidos com um pormenor quase de ourivesaria. Segundo a inscrição, foi fundado por um brâmane, **Yajnavaraha**, e não por um rei. Foi das primeiras ruínas a serem restauradas pela técnica da **anastilose** (reconstituição das peças no lugar original), em 1931.',
  { img: 'khm-banteay-srei', leg: 'Relevos de arenito rosa, Banteay Srei' },
  { h: 'Ta Prohm' },
  '**Ta Prohm** foi consagrado em 1186 por **Jayavarman VII** em honra da mãe e identificado com a deusa da sabedoria *Prajnaparamita*. Uma estela conta que sustentava mais de 12 mil pessoas, com ouro, seda e pérolas. Foi propositadamente deixado, em grande parte, **como foi encontrado**, com raízes gigantes de figueiras-estranguladoras e de algodoeiros-de-seda (kapok) sobre os muros (a identificação das espécies é discutida); a imagem tornou-se um símbolo romântico das ruínas de Angkor.',
  { img: 'khm-ta-prohm', leg: 'Raízes de figueira sobre Ta Prohm' },
  { h: 'Preah Khan' },
  '**Preah Khan** («espada sagrada») foi consagrado em **1191** em honra do pai de Jayavarman VII, num local que a tradição liga à vitória sobre os Chams. Era ao mesmo tempo templo, mosteiro e centro de ensino, com milhares de servidores. Tem um corredor longo, alinhado a leste-oeste, e um invulgar edifício de dois andares com colunas redondas.',
  { img: 'khm-preah-khan', leg: 'Corredor/portal de Preah Khan' },
  { h: 'Beng Mealea' },
  '**Beng Mealea** («lago das flores de lótus»), a cerca de 40 km a leste de Angkor, é um templo do século XII, no estilo do Angkor Wat, com o mesmo plano mas sem restauro: está em grande parte coberto de vegetação e de pedras caídas. Mostra o aspeto que muitas ruínas khmer teriam tido para quem as redescobriu no século XIX.',
  { img: 'khm-beng-mealea', leg: 'Templo de Beng Mealea' },
  { h: 'Fora de Angkor' },
  { lista: [
    '**Koh Ker:** capital de Jayavarman IV e de Harshavarman II (928–944), a cerca de 120 km a nordeste, com uma pirâmide de sete degraus e muitas esculturas monumentais.',
    '**Phnom Kulen:** o planalto sagrado, onde se consagrou Jayavarman II, e de onde vinha o arenito. O LiDAR revelou ali a cidade de **Mahendraparvata**.',
    '**Preah Vihear, Phimai e Wat Phu:** santuários provinciais, ao longo das fronteiras de hoje, que mostram a extensão do império.',
    '**Banteay Chhmar:** templo-cidade de Jayavarman VII, no noroeste, com relevos de batalhas contra os Chams.'
  ] },
  { h: 'As estradas e as rotas' },
  'Os khmer tinham uma rede de **estradas reais**, elevadas, que ligavam Angkor a Phimai, a Preah Vihear e a Champa. Ao longo delas, **Jayavarman VII** instalou **121 casas de repouso** (segundo as inscrições), separadas por cerca de 15 km, segundo as estimativas. As mercadorias também viajavam pelo Tonlé Sap e pelo Mekong, e para o mar pela costa, ligando o império à China e ao Índico.'
];

const sociedade = [
  { h: '1. Organização política' },
  'O rei khmer era um **monarca absoluto e sagrado**. Na teoria política hindu era um **chakravartin**, «aquele que faz girar a roda», o soberano universal, e o seu culto pessoal era o do **devaraja**, o «rei-deus» (o sentido exato desta palavra é muito discutido: um culto do rei? um deus protetor do reino?). Cada rei construía o seu **templo-montanha** como centro do reino e, depois da morte, era identificado com um deus (Paramesvara, Paramavishnuloka). A sucessão não seguia uma regra fixa, e as guerras civis eram frequentes.',
  'O reino era dividido em **províncias** governadas por dignitários nomeados, e a corte tinha um corpo de conselheiros, ministros e sacerdotes (o **purohita**, capelão real, era muito influente). Os impostos pagavam-se em produtos (arroz, produtos da floresta) e em **trabalho**, e as inscrições registam também **doações de terras e de servidores** a templos, que funcionavam como grandes centros económicos. O rei recebia o tributo de chefes vizinhos num sistema de «mandalas».',
  { img: 'khm-procissao-real', leg: 'Procissão real conjetural em Angkor, século XII. Ilustração gerada por IA.' },
  { h: '2. Classes sociais' },
  { lista: [
    '**O rei e a família real:** tinha as suas mulheres, concubinas e uma vasta corte.',
    '**Brâmanes e sacerdotes:** conselheiros, astrólogos, sábios do sânscrito; algumas famílias serviram vários reis.',
    '**Nobres e funcionários:** governadores, chefes militares, administradores dos templos.',
    '**Camponeses livres:** a grande maioria, pagavam impostos e prestavam trabalho obrigatório.',
    '**Servidores dos templos:** pessoas entregues por doação a um templo, com as suas famílias, para trabalhar a terra e servir os deuses.',
    '**Escravos (*khnum*):** capturados em guerra, endividados ou dados como pagamento; segundo Zhou Daguan, muitos eram povos das montanhas.'
  ] },
  { h: '3. Religião' },
  'A religião khmer foi uma mistura de crenças locais (os espíritos dos antepassados, os *neak ta*, e os espíritos da terra), de **hinduísmo** (sobretudo o culto de **Shiva** e de **Vishnu**) e de **budismo**. Durante séculos, os dois cultos coexistiram na mesma corte, e muitos reis apoiaram vários.',
  { tabela: { cab: ['Figura', 'Papel', 'Onde aparece'], linhas: [
    ['Shiva', 'Deus supremo para a maioria dos reis até ao séc. XII; adorado sob a forma de **linga**', 'Bakong, Preah Ko, Banteay Srei, Phnom Bakheng'],
    ['Vishnu', 'Preservador do mundo; divindade principal do rei Suryavarman II', 'Angkor Wat (mausoléu de Vishnu)'],
    ['Harihara', 'Deus que une Shiva e Vishnu num só corpo', 'Hariharalaya (Roluos) e esculturas pré-angkorianas'],
    ['Brahma', 'Criador; terceiro da tríade', 'Esculturas e relevos'],
    ['Buda', 'Sob as formas Mahayana e depois Theravada', 'Bayon, Ta Prohm, Angkor Wat tardio'],
    ['Avalokiteshvara (Lokesvara)', 'Bodisatva da compaixão; associado a Jayavarman VII', 'Bayon (os rostos), Banteay Chhmar'],
    ['Prajnaparamita', 'Sabedoria perfeita (budismo Mahayana); a mãe de Jayavarman VII', 'Ta Prohm'],
    ['Naga', 'Serpente de várias cabeças, ligada à água e à fundação do reino', 'Balaustradas, pontes e calçadas por todo o império'],
    ['Garuda', 'Ave-sol, montada de Vishnu', 'Relevos e esculturas']
  ] } },
  { img: 'khm-kbal-spean', leg: 'Lingas gravadas no rio, Kbal Spean' },
  { h: 'O Batimento do Oceano de Leite' },
  'A cena mais famosa do Angkor Wat é o **Batimento do Oceano de Leite**, um relevo de cerca de **49 m** de comprimento, onde, segundo o mito hindu, deuses (*devas*) e demónios (*asuras*) puxam em sentidos opostos a serpente Vasuki, enrolada à montanha, para obter o néctar da imortalidade, o *amrita*. Vishnu, sob a forma de tartaruga, sustenta a montanha. O relevo cobre outros temas: o **Mahabharata** (a batalha de Kurukshetra), o **Ramayana**, o cortejo de Suryavarman II e as cenas do Céu e do Inferno.',
  { img: 'khm-churning-relevo', leg: 'Relevo do Batimento do Oceano de Leite, Angkor Wat' },
  { h: 'O budismo de Jayavarman VII' },
  'Jayavarman VII foi o primeiro grande rei khmer **budista Mahayana**. Inspirou-se na compaixão do bodisatva (o Bayon, os hospitais, as casas de repouso) e não renunciou à realeza sagrada: apresentava-se como um rei que dá a salvação aos seus súbditos. Depois da sua morte houve uma **reação hindu**, com a destruição de imagens budistas, e depois, a partir do fim do século XIII, o budismo **Theravada**, simples e monástico, que se difundiu entre o povo e é hoje a religião da maioria dos cambojanos.',
  { h: '4. Economia' },
  'A base de tudo era o **arroz**. Os khmer cultivavam **arroz de regadio** nos arrozais, aproveitando as cheias e os reservatórios, e alguns especialistas defendem que as colheitas eram muito abundantes (Zhou Daguan fala de três a quatro por ano, mas pode ser exagero). O **peixe** do Tonlé Sap, em enorme quantidade, era a principal proteína, preservado em pasta e em salga. Cultivava-se ainda palmeira de açúcar, bananas, cana, frutas e vegetais.',
  'O império trocava com a China e a Índia: exportava produtos da floresta (penas de martim-pescador, marfim, cera, resina, goma-gutta, benjoim, madeiras aromáticas) e importava seda, cerâmica, ferro, e metais preciosos. Os **mercados** eram dirigidos por mulheres, segundo Zhou Daguan. Não havia moeda cunhada: usava-se o arroz, o tecido e pequenas barras de prata e ouro.',
  { img: 'khm-aldeia-arroz', leg: 'Aldeia khmer e cultivo do arroz, século XII; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'khm-mercado-zhou', leg: 'Mercado de Angkor, c. 1296, inspirado no relato de Zhou Daguan; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '5. Escrita e língua' },
  'Os khmer escreviam em **sânscrito** (a língua sagrada e da corte) e em **khmer antigo** (a língua do povo e da administração), com uma escrita derivada da escrita **pallava**, do sul da Índia. Conhecem-se **mais de mil inscrições**, gravadas em pedra à entrada dos templos, que contam genealogias, doações, leis e feitos dos reis. Os livros comuns eram escritos em **folhas de palmeira** e em couro, e perderam-se, o que deixa um grande vazio na nossa informação sobre a vida diária. A escrita khmer moderna descende desta.',
  { h: '6. Casa e família' },
  'Nas aldeias, as casas eram de **madeira e bambu, com telhados de palha, assentes em estacas** (palafitas), por causa das cheias e dos animais. Só os templos e o palácio tinham telhado de telha ou de pedra, segundo Zhou Daguan. Os relevos do Bayon mostram esta vida de todos os dias: pescadores, caçadores, cozinheiros, jogadores de xadrez e lutas de galos. A família era alargada, e as mulheres tinham um papel económico forte.',
  { img: 'khm-casa-palafita', leg: 'Casa khmer sobre estacas, inspirada nos relevos do Bayon; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '7. Alimentação' },
  { lista: [
    '**Arroz** (e arroz glutinoso) como base de toda a refeição.',
    '**Peixe** fresco, seco ou fermentado (*prahok*, pasta de peixe que ainda hoje é muito usada); camarões, rãs e tartarugas.',
    '**Carnes:** porco, aves, veado; o boi era sobretudo animal de trabalho.',
    '**Frutos e vegetais:** banana, manga, lótus, palmeira de açúcar, abóbora; ervas e especiarias locais.',
    '**Bebida:** vinho de arroz e de palmeira, e chá trazido pelos chineses.'
  ] },
  { h: '8. Vestuário' },
  'Homens e mulheres, de todas as classes, usavam o **sampot**, um pano enrolado à cintura e passado entre as pernas, e deixavam o peito descoberto. As elites usavam sedas e algodões estampados, joias de ouro, brincos pesados e diademas; o rei vestia-se de ouro e pedraria. As **apsaras** dos relevos mostram penteados elaborados, colares e braceletes. Os pés andavam descalços e a cabeça descoberta.',
  { h: '9. Música, dança e jogos' },
  'A **dança** era parte do culto: o templo de Ta Prohm tinha mais de seiscentas dançarinas, segundo a estela. As **apsaras** dos relevos são hoje o símbolo da dança clássica cambojana. Os relevos mostram orquestras com harpas, tambores, flautas, címbalos e conchas. Entre os jogos havia **lutas de galos**, de porcos e de boxe, jogos de tabuleiro, e as festas de água, como a **Festa das Águas** de hoje.',
  { img: 'khm-danca-apsara', leg: 'Dançarinas e músicos num templo khmer, século XII; interpretação conjetural, não reprodução exata da dança antiga. Ilustração gerada por IA.' },
  { h: '10. Engenharia hidráulica: os baray' },
  'O clima do Camboja tem **chuvas de monção** entre maio e outubro e uma longa estação seca. Os khmer construíram um sistema que **armazenava, canalizava e distribuía a água**: enormes reservatórios retangulares, os **baray**, feitos com diques de terra, ligados por canais e por rios desviados. O **Baray Oriental** (c. 7 × 1,8 km) e o **Baray Ocidental** (c. 8 × 2,1 km) são os maiores. Há debate sobre a sua função: **irrigação** (a ideia clássica), **controlo de cheias**, **símbolo religioso** (o oceano cósmico à volta do monte Meru) ou tudo isto ao mesmo tempo. Estudos recentes sugerem que o sistema era muito engenhoso, mas também **frágil**, e que a sua gestão exigia muito trabalho.',
  { img: 'khm-esquema-baray', leg: 'Esquema simplificado e conjetural da gestão da água em Angkor; a relação entre baray e irrigação é debatida. Esquema desenhado.' },
  { img: 'khm-baray-ocidental', leg: 'Baray Ocidental e região de Angkor vistos da Estação Espacial Internacional; detalhe ampliado inserido na fotografia NASA.' },
  { h: '11. Arquitetura e construção' },
  'Os primeiros templos eram de **tijolo**; depois passou-se ao **arenito** (extraído em Phnom Kulen e transportado por canais e jangadas) e à **laterite** (para fundações e muros). Os khmer não conheciam o arco verdadeiro: usavam o **arco em falso** (as pedras avançam umas sobre as outras) e as pedras eram talhadas e juntas sem argamassa, por vezes com grampos. Os edifícios, com **galerias cobertas**, **torres em forma de lótus** e **templos-montanha**, representavam o cosmos hindu (o monte Meru e os oceanos). Os relevos eram esculpidos depois de os blocos estarem no lugar. O fornecimento de pedra e de mão de obra era enorme.',
  { h: '12. Bronze, cerâmica e metais' },
  'Os khmer foram grandes **fundidores de bronze**: estátuas de divindades (o **Vishnu reclinado** do Mebon Ocidental é um dos maiores exemplos), sinos, gongos, caixas, espelhos e adornos. Fundiam pela técnica da **cera perdida**. Fabricavam também **cerâmica de grés** vidrada, em fornos nos arredores de Angkor e no nordeste da Tailândia, e trabalhavam o ouro, a prata, o ferro e o cobre, para armas e utensílios.',
  { img: 'khm-oficina-bronze', leg: 'Fundição de bronze khmer, século XII; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'khm-bronze-vishnu', leg: 'Vishnu reclinado em bronze, Mebon Ocidental, Museu Nacional' },
  { h: '13. Ciência e medicina' },
  'O calendário era o hindu, com a era **Shaka** (que começa em 78 d.C.), e os templos tinham **alinhamentos astronómicos**: no Angkor Wat, por exemplo, o Sol nasce sobre a torre central no equinócio de março, a observação que muitos visitantes procuram (a intenção deliberada dos construtores é debatida). Em **medicina**, as inscrições de **Jayavarman VII** falam de **102 hospitais** (*arogyasala*) com médicos, enfermeiros, remédios e uma capela do **Buda da Medicina** (Bhaishajyaguru). Encontraram-se capelas de hospitais, mas as inscrições são a única prova do tamanho da rede, e os especialistas debatem o que realmente funcionou.',
  { img: 'khm-hospital-jayavarman', leg: 'Hospital da época de Jayavarman VII, c. 1200; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '14. Guerra' },
  'O exército khmer combinava **infantaria** (com lanças, espadas, arcos e escudos), **elefantes de guerra** (uma força de choque temida), cavalaria ligeira e **barcos**. Os relevos do Bayon e de Banteay Chhmar mostram combates contra os Chams, com **balistas** montadas em elefantes, lanças e barcos de remos. A guerra no Sudeste Asiático era também uma luta por **população**: os vencedores levavam prisioneiros, que trabalhavam como servidores dos templos ou como escravos.'
];

const personalidades = [
  'Os khmer deixaram os nomes dos reis em inscrições; sabemos muito menos das pessoas comuns. As figuras seguintes são reais, e o que é lenda está assinalado.',
  { h: 'Jayavarman II (reinou c. 802 – c. 835/850)' },
  'O fundador do Império Khmer. Segundo a inscrição de Sdok Kak Thom (1052), regressou de «Java», uniu os chefes locais e foi consagrado em Phnom Kulen. Pouco se sabe com certeza da sua vida; o resto vem de tradições posteriores, que o transformaram no pai fundador.',
  { h: 'Hiranyadama e Sivakaivalya' },
  'Segundo a inscrição de Sdok Kak Thom, o brâmane **Hiranyadama** ensinou o rito do devaraja a **Sivakaivalya**, primeiro sacerdote do culto, cuja família continuou a servir os reis durante séculos. Mostra o poder do clero na corte.',
  { h: 'Indravarman I (877 – 889)' },
  'Rei sem origem real clara que subiu ao trono por si próprio. Em dez anos construiu o Indratataka, Preah Ko e o Bakong, o programa que consolidou Roluos e a tradição do templo-montanha.',
  { h: 'Yasovarman I (c. 889 – 910)' },
  'Rei-poeta e construtor, deixou inscrições em sânscrito de grande qualidade. Fundou Yasodharapura e o Baray Oriental, e criou várias ermidas (*asrama*) para sábios.',
  { h: 'Suryavarman I (c. 1002 – 1050)' },
  'Rei budista que venceu uma guerra civil e expandiu o império para o planalto de Khorat. Apoiou tanto os cultos hindus como o budismo, e criou o juramento de fidelidade dos funcionários.',
  { h: 'Suryavarman II (1113 – c. 1150)' },
  'O construtor do Angkor Wat. Governou com mão firme, atacou Champa e o Đại Việt com resultados desiguais e enviou embaixadas à China. A sua imagem no relevo do cortejo, em majestade sobre um trono, é um dos retratos mais famosos da arte khmer.',
  { h: 'Jayavarman VII (c. 1125 – c. 1218)' },
  'O maior rei khmer. Era um príncipe que estava na campanha de Champa quando Angkor foi saqueada em 1177, em 1181 reconquistou a capital e subiu ao trono. Budista Mahayana, construiu hospitais, casas de repouso, Ta Prohm, Preah Khan, Angkor Thom e o Bayon, numa velocidade extraordinária. O seu reinado deixou o império no ponto mais alto, e talvez esgotado.',
  { h: 'Jayarajadevi e Indradevi' },
  'A primeira mulher de Jayavarman VII, **Jayarajadevi**, e a sua irmã, **Indradevi**, que a iniciou no budismo, foi professora na corte e, depois da morte de Jayarajadevi, casou com o rei, segundo a inscrição de Phimeanakas. Mostram que as mulheres da elite podiam ser eruditas e ter influência religiosa.',
  { h: 'Jayavarman VIII (c. 1243 – 1295)' },
  'Rei shivaíta, que presidiu à reação hindu: mandou picar imagens de Buda e remodelou templos. Preferiu pagar tributo aos Mongóis a lutar contra eles.',
  { h: 'Zhou Daguan (c. 1270 – meados do séc. XIV)' },
  'Diplomata chinês da dinastia Yuan, enviado à corte khmer com uma embaixada em 1296. Passou cerca de um ano em Angkor e, de regresso, escreveu *Zhenla fengtu ji* («Os Costumes do Camboja»), um texto curto, talvez incompleto: o único texto contemporâneo e de testemunha ocular sobre a vida em Angkor. Descreve o palácio, o rei, as mulheres, o mercado, as colheitas e as religiões. Algumas passagens (como a lenda da princesa-serpente de nove cabeças com quem o rei dormia de noite) são relato de ouvir dizer. Há tradução francesa de Paul Pelliot (1902, 1951) e inglesa de Peter Harris (2007).',
  { img: 'khm-zhou-daguan-cena', leg: 'Zhou Daguan a escrever em Angkor, c. 1297; retrato e cena imaginados. Ilustração gerada por IA.' },
  { h: 'Ponhea Yat (século XV)' },
  'O rei que, segundo as crónicas cambojanas, abandonou Angkor e fundou a nova capital em Phnom Penh (a cronologia exata é incerta). Marca o início do período pós-angkoriano.',
  { h: 'António da Madalena' },
  'Frade capuchinho português que visitou Angkor em 1586, e foi dos primeiros europeus a descrever o Angkor Wat. O seu relato foi registado pelo cronista Diogo do Couto. É uma lembrança de que a «descoberta» de Angkor por Mouhot em 1860 é uma ideia errada.',
  { h: 'Henri Mouhot (1826 – 1861)' },
  'Naturalista francês que visitou Angkor em 1860 e morreu de malária no Laos no ano seguinte. O seu diário, publicado após a sua morte, tornou Angkor famosa na Europa. Comparou o Angkor Wat aos melhores edifícios da Europa, mas reconheceu que os locais já o conheciam: é um erro dizer que o «descobriu».',
  { h: 'Damian Evans' },
  'Arqueólogo australiano, que desde 2012 dirige levantamentos LiDAR em Angkor e noutros locais do Camboja (a «Cambodian Archaeological LiDAR Initiative»). O seu artigo de 2013 revelou a verdadeira dimensão da cidade.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**Os monumentos de Angkor:** o maior conjunto de templos do mundo, Património Mundial da UNESCO desde 1992.',
    '**A língua e a escrita khmer:** falada por cerca de dezasseis milhões de pessoas; a escrita khmer moderna descende da pallava.',
    '**A dança clássica:** o balé real do Camboja, de bailarinas com trajes dourados, é o herdeiro das apsaras de Angkor, e foi inscrito pela UNESCO em 2008.',
    '**A água:** a ideia de que a prosperidade de um reino depende do controlo da água.',
    '**A religião:** o budismo Theravada, que se instalou depois do apogeu, é a base cultural do Camboja de hoje.',
    '**A bandeira:** o Angkor Wat está na bandeira do Camboja.'
  ] },
  { h: 'Arte' },
  'A arte khmer, em arenito, bronze e madeira, tem estilos reconhecíveis a que se dá o nome do local (**Preah Ko**, **Bakheng**, **Koh Ker**, **Banteay Srei**, **Baphuon**, **Angkor Wat**, **Bayon**). As esculturas têm uma serenidade e uma firmeza próprias, e os **rostos sorridentes** do período do Bayon são uma das imagens mais conhecidas da arte asiática. Os **lintéis** (as vergas das portas) esculpidos são uma assinatura da arte khmer.',
  { h: 'Arquitetura: o templo-montanha' },
  'O **templo-montanha** é a grande invenção arquitetónica khmer: uma pirâmide de terraços, cada vez mais pequenos, coroada por torres, que representa o **monte Meru**. Do Bakong ao Angkor Wat, a forma foi-se refinando, com galerias, fossos e pavilhões. Todos os edifícios eram orientados segundo os pontos cardeais.',
  { h: 'Porque caiu Angkor? Um debate' },
  'Não houve um único «fim». Angkor perdeu o estatuto de capital em 1431 (data debatida), mas continuou habitada. Os historiadores apontam várias causas, que provavelmente se combinaram:',
  { lista: [
    '**Guerra e pressão externa:** os reinos tai de Sukhothai e de Ayutthaya, que se tornaram fortes, e os Chams. É a explicação mais antiga, nas crónicas.',
    '**Clima:** estudos de anéis de árvores do Vietname (Buckley e colegas, 2010) mostram **secas prolongadas** (meados do século XIV e início do século XV), separadas por monções muito fortes, que podem ter danificado o sistema hidráulico.',
    '**Engenharia:** os baray e os canais foram danificados por cheias e por assoreamento, e o sistema ficou difícil de manter.',
    '**Religião e política:** o budismo Theravada afastou o povo do culto do rei-deus, e o custo de manter os templos pesava sobre a população.',
    '**Comércio:** a mudança das rotas marítimas para a costa e para o sul (e a importância do comércio com a China) tornou a baixa de Phnom Penh, junto ao Mekong, mais atrativa.'
  ] },
  'Nenhuma destas explicações é aceite por todos, e a tendência atual é falar de uma **transformação** e não de um «colapso».',
  { h: 'A redescoberta de Angkor' },
  'Como se viu, Angkor nunca foi esquecida. Mas **Henri Mouhot** (1860) tornou-a célebre na Europa, e depois a França, que dominou o Camboja de 1863 a 1953, criou a **Escola Francesa do Extremo Oriente** (EFEO), que inventariou, limpou e restaurou os monumentos, com nomes como **Henri Marchal**, **Maurice Glaize** e **Bernard-Philippe Groslier**. O **Baphuon**, desmontado peça a peça nos anos 1960, viu os planos perdidos durante a guerra e foi reconstruído de 1995 a 2011. Hoje trabalham em Angkor equipas de muitos países.',
  { img: 'khm-mouhot-gravura', leg: 'Gravura da colunata ocidental do Angkor Wat, Illustrated London News, 1868.' },
  { img: 'khm-baphuon-restauro', leg: 'Baphuon durante o restauro' },
  { caixa: 'Uma nota sobre o século XX', texto: 'Durante os anos de guerra e do regime do **Khmer Vermelho** (1975–1979), em que morreu, por perseguição, fome e trabalhos forçados, cerca de um a dois milhões de cambojanos (as estimativas variam), os arquivos, os técnicos e as equipas de conservação foram dispersos ou mortos. Angkor sofreu **abandono, saques e minas**, mas não foi destruída de propósito. O restauro recomeçou nos anos 1990.' },
  { img: 'khm-angkor-wat-nascer-sol', leg: 'Angkor Wat ao nascer do sol' },
  { caixa: 'Para visitar', texto: 'O **Parque Arqueológico de Angkor** (perto de Siem Reap) é visitável todo o ano; as horas melhores são o nascer do Sol (Angkor Wat) e o fim da tarde. Reserve vários dias: Angkor Wat, Angkor Thom e o Bayon, Ta Prohm, Banteay Srei, Preah Khan, Beng Mealea e Roluos. Fora de Angkor, vale a pena ver **Koh Ker** e **Sambor Prei Kuk**. O **Museu Nacional do Camboja**, em Phnom Penh, tem as melhores esculturas, e o **Museu Guimet**, em Paris, tem uma grande coleção khmer. Respeite o carácter religioso: vista roupa que cubra ombros e joelhos.' }
];

const quiz = [
  { p: 'Em que ano se considera que Jayavarman II fundou o Império Khmer?', op: ['602', '802', '1002', '1181'], certa: 1, exp: 'A consagração de Jayavarman II em Phnom Kulen, em 802, é a data tradicional do início do império.' },
  { p: 'Como se chama o grande lago do centro do Camboja, cuja inundação sazonal alimentou a civilização khmer?', op: ['Tonlé Sap', 'Lago Tai', 'Lago Baikal', 'Lago Inle'], certa: 0, exp: 'O Tonlé Sap, alimentado pelo Mekong, inverte o sentido da corrente na estação das chuvas.' },
  { p: 'Qual foi o reino comercial do delta do Mekong, anterior aos khmer, com o porto de Oc Eo?', op: ['Champa', 'Funan', 'Sukhothai', 'Pagan'], certa: 1, exp: 'Funan (c. séc. I – VI), conhecido sobretudo por fontes chinesas e pela arqueologia de Oc Eo.' },
  { p: 'Para que deus foi construído o Angkor Wat?', op: ['Shiva', 'Buda', 'Vishnu', 'Brahma'], certa: 2, exp: 'Suryavarman II dedicou o templo a Vishnu, no século XII.' },
  { p: 'Que rei khmer foi o grande construtor budista de Angkor Thom e do Bayon?', op: ['Jayavarman VII', 'Suryavarman II', 'Yasovarman I', 'Jayavarman VIII'], certa: 0, exp: 'Jayavarman VII (c. 1181 – 1218) era budista Mahayana.' },
  { p: 'Que povo saqueou Yasodharapura (Angkor) em 1177?', op: ['Os mongóis', 'Os chineses', 'Os chams', 'Os portugueses'], certa: 2, exp: 'Os Chams de Champa, sob Jaya Indravarman IV, subiram o Tonlé Sap de barco.' },
  { p: 'O que são os «baray»?', op: ['Estátuas de bronze', 'Grandes reservatórios de água', 'Escolas de monges', 'Barcos de guerra'], certa: 1, exp: 'Os baray eram grandes reservatórios retangulares, ligados por canais e diques.' },
  { p: 'Quem escreveu *Os Costumes do Camboja*, o único relato contemporâneo de Angkor?', op: ['Marco Polo', 'Zhou Daguan', 'Henri Mouhot', 'Diogo do Couto'], certa: 1, exp: 'Zhou Daguan, diplomata chinês, esteve em Angkor em 1296–97.' },
  { p: 'Que técnica de levantamento aéreo, usada desde 2012, revelou a verdadeira extensão de Angkor?', op: ['LiDAR', 'Radiocarbono', 'Fotografia de satélite apenas', 'Sonar'], certa: 0, exp: 'O LiDAR «vê» através da vegetação e mostrou uma malha urbana de mais de mil km².' },
  { p: 'Qual é o tema do mais famoso relevo do Angkor Wat?', op: ['A batalha de Gaugamela', 'O Batimento do Oceano de Leite', 'A Última Ceia', 'A caça ao leão'], certa: 1, exp: 'Deuses e demónios puxam a serpente Vasuki para obter o néctar da imortalidade.' },
  { p: 'Que templo de arenito rosa, consagrado em 967, é famoso pelos seus relevos delicados?', op: ['Bakong', 'Banteay Srei', 'Preah Vihear', 'Beng Mealea'], certa: 1, exp: 'Banteay Srei foi fundado por um brâmane, Yajnavaraha.' },
  { p: 'Quantos hospitais atribuem as inscrições a Jayavarman VII?', op: ['10', '52', '102', '502'], certa: 2, exp: 'As inscrições falam de 102 hospitais e 121 casas de repouso; o número real que funcionou é debatido.' },
  { p: 'Quando é que o francês Henri Mouhot visitou Angkor?', op: ['1560', '1760', '1860', '1960'], certa: 2, exp: 'Em 1860; mas Angkor nunca fora «perdida», e o frade português António da Madalena já lá estivera em 1586.' },
  { p: 'Que religião predomina hoje no Camboja, depois de os khmer deixarem o hinduísmo e o budismo Mahayana?', op: ['Budismo Theravada', 'Hinduísmo', 'Islamismo', 'Cristianismo'], certa: 0, exp: 'O budismo Theravada, de língua pali, impôs-se a partir do século XIII–XIV.' },
  { p: 'Qual das explicações para o declínio de Angkor tem apoio em anéis de árvores do Vietname?', op: ['Uma epidemia de peste', 'Secas prolongadas e monções fortes', 'Um terramoto', 'A queda de um meteorito'], certa: 1, exp: 'Buckley e colegas (2010) mostraram secas no século XIV e no início do século XV; o seu papel exato é debatido.' }
];

export default {
  id: 'khmer',
  cor: '#4a8a6a',
  emblema: '../assets/img/khmer.png',
  nome:    { pt: 'Império Khmer', en: 'Khmer Empire' },
  periodo: { pt: '802 – 1431', en: 'AD 802 – 1431' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
