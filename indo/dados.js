// VALE DO INDO — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas aproximadas (radiocarbono e cronologia convencional dos arqueólogos). a.C. = antes de Cristo. Muito do que se diz sobre esta civilização é interpretação: o texto assinala o que é facto, o que é hipótese e o que é desconhecido.
// Imagens: cada {img:'id'} procura o ficheiro  indo/img/id.jpg  (ver IMAGENS_INDO.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'A **civilização do Vale do Indo** (também chamada **civilização de Harappa**, do nome do primeiro sítio escavado) foi uma das três grandes civilizações urbanas da Idade do Bronze, a par do Egito e da Mesopotâmia. Entre c. 2600 e 1900 a.C. (fase «Madura») espalhou-se por uma área de mais de meio milhão de quilómetros quadrados no que é hoje o Paquistão, o noroeste da Índia e o nordeste do Afeganistão, com mais de mil sítios conhecidos e cidades de dezenas de milhares de habitantes.',
    'Distingue-se por cidades **planeadas em quadrícula**, casas de tijolo cozido com casa de banho e **esgotos cobertos**, poços e reservatórios, **pesos e medidas padronizados**, e por milhares de pequenos **selos de pedra** com uma escrita que **ninguém consegue ler**. Também se distingue por aquilo que não se encontra com clareza: palácios, templos, túmulos de reis, retratos de governantes. Não sabemos como se chamavam a si próprios, que língua falavam, quem os governava, nem ao certo porque as cidades se esvaziaram. Este texto separa sempre o que se sabe do que se supõe.'
  ] },
  { img: 'ido-mapa-regiao', leg: 'Mapa da civilização do Indo, com a extensão aproximada da fase Madura e os principais sítios.' },
  { h: 'Onde ficava' },
  'O coração da civilização estendia-se pela **planície aluvial do rio Indo** e dos seus afluentes (o Panjabe), e por uma segunda bacia hoje quase seca, a do **Ghaggar-Hakra**, no noroeste da Índia e no Cholistão paquistanês. Tinha ainda postos avançados na costa de Makran e do Gujarate, e um entreposto no norte do Afeganistão (Shortugai, junto ao rio Oxus, perto das minas de lápis-lazúli). Mohenjo-daro e Harappa, as duas cidades mais conhecidas, ficam no Paquistão (Sind e Panjabe); Dholavira, Lothal, Rakhigarhi e Kalibangan, na Índia.',
  'O nome «Indo» vem do rio (do sânscrito *Sindhu*, «rio»), que também deu «Índia» e «hindu». Os próprios habitantes não nos deixaram nome legível. Alguns investigadores indianos preferem «civilização Indo-Sarasvati», por causa do Ghaggar-Hakra, identificado por alguns com o rio Sarasvati dos hinos védicos. Essa identificação é debatida e tem carga política, e a maior parte da comunidade científica usa «Indo» ou «Harappa».',
  { img: 'ido-mohenjo-panoramica', leg: 'Ruínas de Mohenjo-daro (Sind, Paquistão), com o montículo da cidadela e, no topo, o estupa budista construído muito depois (período Kushan, c. século II d.C. ou mais tarde).' },
  { h: 'Quando existiu' },
  'Os arqueólogos dividem a história desta civilização em fases, com datas aproximadas e fronteiras que variam de região para região. A cronologia assenta sobretudo em datações por radiocarbono; as datas exatas são sempre debatidas.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Proto-história (Mehrgarh)', 'c. 7000 – 3300 a.C. (início debatido)', 'Primeiras aldeias agrícolas no Baluchistão, com trigo, cevada e gado; cerâmica, contas, comércio de longa distância'],
    ['Harappa Inicial (Ravi, Kot Diji)', 'c. 3300 – 2600 a.C.', 'Aldeias e primeiras vilas fortificadas; sinais em cerâmica que podem anunciar a escrita; crescimento regional'],
    ['Harappa Madura (Integração)', 'c. 2600 – 1900 a.C.', 'Cidades planeadas, selos, escrita, pesos padronizados, comércio com a Mesopotâmia (Meluhha)'],
    ['Harappa Tardia (Localização)', 'c. 1900 – 1300 a.C.', 'Abandono gradual das grandes cidades e da escrita; mais povoação rural e deslocação para leste e para sul'],
    ['Depois', 'depois de c. 1300 a.C.', 'Culturas regionais da Idade do Bronze Final e do Ferro; as cidades voltam à Índia só no I milénio a.C.']
  ] } },
  { img: 'ido-cidade-reconstrucao', leg: 'Reconstrução artística, vista de cima, de uma cidade da fase Madura, com cidadela elevada e quarteirões em quadrícula. Ilustração gerada por IA; baseada nas plantas conhecidas, os pormenores são hipotéticos.' },
  { h: 'Quem eram?' },
  'Não sabemos como se chamavam, que língua falavam nem de onde vinham. A ideia de que uma população estrangeira trouxe a civilização não tem apoio: o desenvolvimento local, desde Mehrgarh e as aldeias do Baluchistão e do Indo, está bem documentado. A língua é desconhecida. Os candidatos propostos (uma língua da família dravídica, uma língua indo-ariana, uma língua da família munda ou uma língua hoje extinta e sem parentes) são hipóteses, nenhuma demonstrada. O mais certo é que se falassem várias línguas numa área tão vasta.',
  'A análise de ADN antigo é ainda escassa. O estudo mais citado, de 2019, analisou um único esqueleto de Rakhigarhi e não encontrou ancestralidade das estepes da Ásia Central (que só chegou ao subcontinente mais tarde); isso é um indício, mas um só indivíduo não representa uma civilização inteira.',
  { h: 'Porque importam' },
  { lista: [
    '**Urbanismo e saneamento:** cidades planeadas, com ruas em quadrícula, casas com casa de banho e esgotos cobertos, numa época em que quase nenhuma outra cidade do mundo tinha algo comparável.',
    '**Padronização:** tijolos com proporções constantes (4:2:1), pesos e medidas uniformes numa área gigantesca, sem moedas.',
    '**Uma escrita por decifrar:** é um dos maiores mistérios da arqueologia. Existem cerca de 5000 inscrições curtas, mas nenhuma leitura é aceite.',
    '**Uma sociedade sem rei visível:** sem palácios nem túmulos monumentais claros, a organização política continua a ser debatida.',
    '**Comércio de longa distância:** contas de cornalina, lápis-lazúli, marfim e cobre chegaram à Mesopotâmia e ao Golfo, e a Mesopotâmia chamava a esta região **Meluhha**.',
    '**Um desaparecimento por explicar:** as cidades esvaziaram-se há cerca de 4000 anos, por causas que estão ainda em estudo, mas que não incluem uma invasão destruidora.'
  ] },
  { caixa: 'O que não sabemos', texto: 'Não lemos a escrita. Não conhecemos nenhum nome de rei, de deus ou de cidade (os nomes «Harappa» e «Mohenjo-daro» são modernos). Não sabemos se havia um estado único, vários ou nenhum. Não sabemos o que cada símbolo religioso significava. Não sabemos ao certo porque as cidades declinaram. Tudo o que sabemos vem de ruínas, objetos, esqueletos, plantas e de textos mesopotâmicos que falam de um país distante chamado Meluhha.' },
  { caixa: 'O Vale do Indo hoje', texto: 'A maior parte dos sítios está no Paquistão e na Índia. **Mohenjo-daro** é Património Mundial da UNESCO desde 1980, e **Dholavira** desde 2021. O Indo continua a ser o eixo de um país inteiro, mas as ruínas estão ameaçadas por sais do solo, cheias e restauros mal feitos. Escavou-se só uma pequena parte de cada cidade, e cada campanha continua a trazer surpresas.' },
  { img: 'ido-mehrgarh-ruinas', leg: 'Restos de casas de tijolo cru em Mehrgarh (Baluchistão, Paquistão), onde viveram agricultores desde, pelo menos, o VI milénio a.C.' }
];

const linha = [
  'Esta linha do tempo segue a história do Vale do Indo, desde as primeiras aldeias até à época moderna da sua redescoberta. As datas são aproximadas, e as mais antigas são as mais incertas; onde há debate, está dito.',
  { linha: [
    { d: 'c. 7000 a.C. (debatido)', t: 'Mehrgarh: as primeiras aldeias agrícolas', x: 'No Baluchistão (Paquistão), junto à passagem de Bolan, o arqueólogo **Jean-François Jarrige** descobriu em 1974 o sítio de **Mehrgarh**: casas de tijolo cru, celeiros de compartimentos, trigo e cevada cultivados, ovelhas, cabras e gado. O início é tradicionalmente situado em c. 7000 a.C.; datações recentes sugerem datas mais tardias para as primeiras camadas, e a discussão continua. Ainda se debate se a agricultura aqui nasceu localmente ou veio do Próximo Oriente, e a resposta mais provável é uma mistura.' },
    { d: 'c. 5500 – 3500 a.C.', t: 'Cerâmica, contas e comércio', x: 'Em Mehrgarh aparecem cerâmica, **figuras femininas de terracota**, contas de turquesa, lápis-lazúli (vindo do Badakhshan, no Afeganistão) e conchas do mar. Em alguns dentes de adultos, de há 7500 a 9000 anos, há **furos feitos com brocas de sílex**, uma das mais antigas evidências de dentisteria do mundo (estudo de 2006). Os objetos de cobre surgem antes de 3500 a.C.' }
  ] },
  { img: 'ido-mehrgarh-aldeia', leg: 'Reconstrução artística de uma aldeia agrícola do tipo de Mehrgarh, com casas de tijolo cru, celeiros e rebanhos. Ilustração gerada por IA; os pormenores são hipotéticos.' },
  { img: 'ido-mehrgarh-figurina', leg: 'Figura feminina de terracota de Mehrgarh, estilo dos períodos mais recentes do sítio (milénios V–III a.C.).' },
  { linha: [
    { d: 'c. 3300 a.C.', t: 'Fase Ravi: começa o Harappa Inicial', x: 'Em Harappa e noutros sítios do Panjabe surgem aldeias maiores, cerâmica pintada característica e **sinais em vasos** que alguns consideram os primeiros passos da escrita do Indo.' },
    { d: 'c. 2900 a.C.', t: 'Kalibangan: arado e planta urbana', x: 'No Rajastão, **Kalibangan** conserva um **campo lavrado** com sulcos cruzados, considerado dos mais antigos do mundo (c. 2800 a.C.), e uma planta de cidade fortificada.' },
    { d: 'c. 2800 – 2600 a.C.', t: 'Fase Kot Diji: vilas fortificadas', x: 'No Sind, em **Kot Diji**, **Amri** e outros sítios, surgem vilas com muralhas, casas de tijolo e padrões de cerâmica que se repetem a grandes distâncias.' },
    { d: 'c. 2600 a.C.', t: 'Começa a fase Madura', x: 'Em poucas gerações, as cidades de **Mohenjo-daro** e **Harappa** crescem como cidades planeadas, com tijolos de medidas uniformes, esgotos e pesos padronizados. Os arqueólogos discutem se foi uma mudança súbita, talvez decidida por uma elite, ou uma consolidação lenta. **Mehrgarh** é abandonada em favor de **Nausharo**.' },
    { d: 'c. 2500 a.C.', t: 'Auge urbano e primeiros contactos com Ur', x: 'Nos túmulos reais de **Ur** (Mesopotâmia, c. 2600–2500 a.C.) encontram-se **contas de cornalina** de tipo indiano, algumas gravadas com padrões brancos por um processo de ácido. É uma das primeiras provas do comércio entre as duas regiões.' },
    { d: 'c. 2400 – 2300 a.C.', t: 'Lothal e os portos', x: 'Em **Lothal** (Gujarate) surge uma pequena cidade com **oficina de contas** e um grande tanque de tijolo a que se chamou «doca». É um centro de produção e de troca com o litoral e o interior.' },
    { d: 'c. 2334 – 2279 a.C.', t: 'Sargão e os navios de Meluhha', x: 'Uma inscrição do rei **Sargão de Acad** gaba-se de que os navios de **Meluhha, Magan e Dilmun** atracavam no seu porto. A maior parte dos especialistas identifica **Meluhha** com a civilização do Indo (a ideia é muito provável, mas não é demonstrada por uma inscrição que o diga).' }
  ] },
  { img: 'ido-selo-shuilishu', leg: 'Selo cilíndrico acádio com a inscrição do tradutor de Meluhha Shu-ilishu (Louvre): prova escrita da presença de gente de Meluhha na Mesopotâmia, c. 2200–2000 a.C. (datação debatida).' },
  { linha: [
    { d: 'c. 2200 a.C.', t: 'O «evento de 4,2 mil anos» e o intérprete de Meluhha', x: 'Nesta altura, registos climáticos de várias regiões mostram um **enfraquecimento da monção e uma seca prolongada**. É também a época aproximada (c. 2200–2000 a.C., datação debatida) de um selo cilíndrico mesopotâmico em que um «intérprete de Meluhha», chamado **Shu-ilishu**, mostra que havia gente do Indo (ou intérpretes da sua língua) na Mesopotâmia. A relação entre a seca e a civilização do Indo, que ainda prosperou 300 anos, é debatida.' },
    { d: 'c. 2120 a.C.', t: 'Gudea de Lagash e os mercadores de Meluhha', x: 'O rei **Gudea** de Lagash escreve que traz da terra de Meluhha a cornalina e o ouro em pó para o seu templo; durante o período de **Ur III** existiu junto a **Girsu** uma «aldeia de Meluhha» com gente vinda dessa terra.' },
    { d: 'c. 1900 a.C.', t: 'Fim da fase Madura', x: 'A escrita, os selos e os pesos padronizados desaparecem; muitas cidades diminuem ou são abandonadas. Não houve um dia da queda: foi um processo de séculos e que variou de região para região.' },
    { d: 'c. 1900 – 1300 a.C.', t: 'Harappa Tardia', x: 'Surgem culturas regionais (como o «Cemitério H», em Harappa, e a cultura de Jhukar, no Sind), com mais aldeias e menos cidades, e com deslocações para leste (Ganges-Yamuna) e sul (Gujarate). As tradições de olaria, de contas e de agricultura continuam.' },
    { d: 'c. 1760 a.C.', t: 'Fim do comércio direto com a Mesopotâmia', x: 'A última menção conhecida de **Meluhha** na Mesopotâmia é desta altura (o comércio direto já diminuíra desde o período de Ur III); o contacto continua só através de **Dilmun** (Bahrein) e **Magan** (Omã). Mais tarde o nome «Meluhha» passa a designar a Núbia e o Egito, sinal de que a memória do Indo se tinha perdido.' },
    { d: 'c. 1700 a.C.', t: 'Mohenjo-daro está abandonada', x: 'A grande cidade do Sind estava em decadência havia séculos (bairros degradados, esgotos sem manutenção) e, por esta altura, foi abandonada. Não há camada de destruição por guerra.' },
    { d: 'c. 1500 a.C.', t: 'Línguas indo-arianas no noroeste da Índia', x: 'Por volta desta época, grupos que falavam indo-ariano, que conhecemos pelos hinos do **Rigveda**, circulam no noroeste do subcontinente. **A civilização do Indo já tinha declinado**: a «invasão ariana» que a teria destruído é uma ideia abandonada (ver «Declínio»).' },
    { d: 'c. 1300 a.C.', t: 'Fim da tradição Harappa Tardia', x: 'Os últimos vestígios identificáveis de cultura material do Indo desaparecem ou transformam-se, e dão lugar às culturas da Idade do Ferro do norte da Índia.' }
  ] },
  { h: 'Redescoberta' },
  { linha: [
    { d: '1826 – 1875', t: 'Masson e Cunningham em Harappa', x: 'O aventureiro **Charles Masson** visita as ruínas de Harappa na década de 1820. Em 1853 e 1856 passa lá **Alexander Cunningham**, e em 1875 publica um selo com um «touro» e sinais desconhecidos, sem perceber a sua importância. Entretanto, engenheiros ingleses usam os tijolos das ruínas como balastro da linha de caminho de ferro Lahore–Multan, destruindo grande parte da cidade.' },
    { d: '1921 – 1922', t: 'Sahni em Harappa, Banerji em Mohenjo-daro', x: '**Daya Ram Sahni** inicia a escavação de Harappa em 1920–21. **Rakhal Das Banerji** percorre Mohenjo-daro entre 1919 e 1923, e encontra selos semelhantes aos de Harappa debaixo de um estupa budista.' },
    { d: '20 de setembro de 1924', t: 'Marshall anuncia ao mundo', x: 'O diretor do Serviço Arqueológico da Índia, **John Marshall**, anuncia no jornal *Illustrated London News* uma «nova civilização». Nas semanas seguintes assiriólogos como Sayce, Gadd e Sidney Smith reconhecem selos semelhantes nas escavações mesopotâmicas, e a civilização do Indo fica datada de c. 2500 a.C. e ligada ao mundo conhecido.' },
    { d: '1946 – 1947', t: 'Wheeler escava Harappa e propõe a «invasão»', x: '**Mortimer Wheeler** escava as defesas de Harappa (1946) e, em 1947, sugere que os arianos do Rigveda, que celebra Indra como «destruidor de fortalezas», teriam destruído as cidades. Era uma hipótese: os dados nunca a sustentaram, como veremos.' },
    { d: '1964', t: 'Dales e o «massacre mítico»', x: 'O arqueólogo **George Dales** publica «O mítico massacre de Mohenjo-daro», mostrando que os esqueletos citados por Wheeler vinham de épocas diferentes, sem camada de destruição nem sinais de batalha.' },
    { d: '1974 – 1986', t: 'Mehrgarh e as origens', x: 'A missão de **Jarrige** escava Mehrgarh e muda a história do Indo: a civilização urbana tinha raízes numa longa tradição local, que remonta a uma agricultura muito antiga (de pelo menos o VI milénio a.C.)' },
    { d: '1990 – 2021', t: 'Dholavira, Rakhigarhi e a UNESCO', x: '**R. S. Bisht** escava Dholavira (1990–2005): as suas reservas de água e o letreiro de dez sinais tornam-na famosa, e é classificada pela UNESCO em 2021. Em Rakhigarhi, **Vasant Shinde** publica em 2019 o primeiro ADN de uma pessoa de uma cidade do Indo.' }
  ] }
];

const mapa = [
  'A civilização do Indo é conhecida por cerca de **mil e tal sítios** da fase Madura, dos quais só uma pequena parte foi escavada. Há cinco grandes centros urbanos reconhecidos (**Harappa, Mohenjo-daro, Dholavira, Ganweriwala e Rakhigarhi**) e muitas cidades médias, vilas, aldeias, portos e entrepostos. Os nomes antigos de todos eles são desconhecidos; os que usamos são os das aldeias modernas junto às ruínas.',
  { img: 'ido-mapa-cidades', leg: 'Principais sítios da civilização do Indo: Harappa, Mohenjo-daro, Dholavira, Lothal, Rakhigarhi, Kalibangan, Ganweriwala e outros.' },
  { tabela: { cab: ['Sítio', 'Local hoje', 'Datas / dimensão', 'Para que ficou conhecido'], linhas: [
    ['Mohenjo-daro', 'Sind, Paquistão', 'c. 2500–1700 a.C.; 250–300 ha; talvez 40 000 habitantes (estimativa frágil)', 'Grande Banho, cidadela, esgotos, centenas de poços; Sacerdote-Rei; selo «Pashupati»'],
    ['Harappa', 'Panjabe, Paquistão', 'c. 3300–1300 a.C.; c. 150 ha; até c. 23 000 habitantes', 'Sítio que deu o nome à civilização; os grandes «celeiros»; cemitérios R37 e H'],
    ['Dholavira', 'Gujarate, Índia', 'c. 2650–1900 a.C.; c. 47 ha', 'Cidade em três partes; sistema de reservatórios; letreiro de dez sinais; UNESCO 2021'],
    ['Rakhigarhi', 'Haryana, Índia', 'c. 2600–1900 a.C.; 80 a 350 ha (debatido)', 'Possível maior sítio; o ADN de 2019; escavações ainda a decorrer'],
    ['Ganweriwala', 'Cholistão, Paquistão', 'fase Madura; não escavado', 'Grande centro no vale seco do Ghaggar-Hakra, conhecido só por prospeção'],
    ['Lothal', 'Gujarate, Índia', 'c. 2400–1900 a.C.', 'Oficina de contas; «doca» (debatida); régua de marfim'],
    ['Kalibangan', 'Rajastão, Índia', 'c. 2900–2000 a.C.', 'Campo lavrado de c. 2800 a.C.; altares de fogo (debatidos); cidade em quadrícula'],
    ['Chanhudaro', 'Sind, Paquistão', 'fase Madura', 'Bairro de artesãos: contas, selos, conchas'],
    ['Shortugai', 'Afeganistão', 'fase Madura', 'Entreposto junto às minas de lápis-lazúli']
  ] } },
  { h: 'Harappa' },
  'Situada no Panjabe paquistanês, junto a um antigo leito do rio Ravi, **Harappa** é a cidade que deu o nome à civilização. Foi ocupada durante mais de dois mil anos, das aldeias da fase Ravi (c. 3300 a.C.) até à fase Tardia, e na fase Madura teria c. 150 hectares e talvez cerca de 23 000 habitantes. O sítio tem vários montículos: **AB** (a cidadela, com os edifícios públicos), **E**, **F** e outros. Foi muito danificado nos anos 1850, quando os construtores da linha de caminho de ferro Lahore–Multan usaram os seus tijolos como balastro.',
  'Entre os achados estão os selos de esteatite, esqueletos de dois cemitérios (o **R37**, da fase Madura, e o **H**, da fase Tardia), oficinas e uma série de plataformas de tijolo que Wheeler chamou «celeiros». Desde 1986, o **Harappa Archaeological Research Project** (dirigido por Richard Meadow e Jonathan Mark Kenoyer) usa métodos modernos, e a sua conclusão é que a vida urbana era mais complexa e menos «uniforme» do que se pensava.',
  { img: 'ido-harappa-ruinas', leg: 'Ruínas de Harappa (Panjabe, Paquistão): muros de tijolo cozido numa das áreas escavadas.' },
  { h: 'Mohenjo-daro e o Grande Banho' },
  'O nome moderno **Mohenjo-daro** significa, em sindi, «monte dos mortos» (tradução habitual, mas discutida); o nome antigo é desconhecido. Foi construída c. 2500 a.C. e abandonada por volta de 1700 a.C. Tem uma **cidadela** num montículo elevado (c. 12 m de altura) e uma **cidade baixa** com ruas retas. A cidade teve talvez dezenas de milhares de habitantes, mas essa estimativa é frágil, porque só parte da cidade foi escavada e o nível do lençol freático impede escavar as camadas mais antigas.',
  'O monumento mais célebre é o **Grande Banho**: um tanque de tijolo de c. 12 m de comprimento, 7 m de largura e 2,4 m de profundidade, com escadas nas duas pontas, revestido de betume (asfalto) para ser impermeável e rodeado de salas e de corredores. O nome «Banho» é moderno. É natural pensar em banhos rituais (como em templos indianos posteriores), mas **não há prova**: pode ter sido um tanque cerimonial, um balneário público ou outra coisa. Ao lado fica um grande edifício de blocos que Wheeler chamou «celeiro», interpretação que investigadores como Kenoyer põem em dúvida por não terem encontrado grão. Marshall deu o nome de «Colégio dos Sacerdotes» a outra construção, sem prova de qual era a sua função.',
  { img: 'ido-grande-banho', leg: 'O Grande Banho de Mohenjo-daro, c. 2500 a.C.: tanque de tijolo cozido, hoje sem água, com degraus em dois lados.' },
  { img: 'ido-grande-banho-uso', leg: 'Reconstrução imaginada de pessoas junto ao Grande Banho. Ilustração gerada por IA; a função do tanque (ritual, higiénica ou outra) é desconhecida e a cena é só uma hipótese.' },
  { h: 'Dholavira, a cidade da água' },
  'Em **Khadir Bet**, uma ilha no Rann de Kutch (Gujarate), **Dholavira** foi escavada por **R. S. Bisht** entre 1990 e 2005 (o sítio fora identificado por J. P. Joshi em 1967–68). Tinha c. 47 hectares e uma planta única: **cidadela, cidade média e cidade baixa**, cada uma com muralha, num desenho de proporções geométricas. Num clima árido e com água salgada à volta, os seus habitantes construíram cerca de **dezasseis reservatórios** talhados na rocha ou em tijolo, ligados por canais e por barragens em dois ribeiros sazonais.',
  'Na porta norte encontrou-se um **letreiro** com **dez grandes sinais** do Indo (c. 37 cm de altura cada, em gesso sobre madeira que desapareceu), uma das inscrições mais longas e mais visíveis conhecidas. Há ainda um grande espaço aberto retangular, chamado «estádio» (o nome é moderno; a função, talvez cerimonial, é desconhecida). É Património Mundial da UNESCO desde 2021.',
  { img: 'ido-dholavira-reservatorio', leg: 'Um dos reservatórios de Dholavira, escavados na rocha e usados para armazenar a água das chuvas, c. 2500 a.C.' },
  { img: 'ido-dholavira-reconstrucao', leg: 'Reconstrução imaginada de Dholavira, com a cidadela, os reservatórios e os muros. Ilustração gerada por IA; os alçados são hipotéticos.' },
  { h: 'Lothal e a «doca»' },
  'Escavada por **S. R. Rao** (Serviço Arqueológico da Índia) de 1955 a 1960, **Lothal** (Gujarate) é uma cidade pequena, mas rica em objetos: uma **oficina de contas** de cornalina e esteatite, selos (inclusive um de tipo do Golfo Pérsico), e uma **régua de marfim** com divisões de c. 1,7 mm. O seu grande tanque retangular de tijolo (c. 215 × 35 m) foi interpretado por Rao como **doca** de um porto ligado ao rio Sabarmati. Outros investigadores (Leshnik, Yule) acham que era um **reservatório de irrigação**, porque a entrada parece estreita demais para navios; microfósseis marinhos (foraminíferos) nos sedimentos foram invocados a favor da doca, mas a discussão está por fechar.',
  { img: 'ido-lothal-doca', leg: 'O grande tanque de tijolo de Lothal (Gujarate): doca ou reservatório? A interpretação continua em debate.' },
  { img: 'ido-lothal-reconstrucao', leg: 'Reconstrução imaginada de um barco carregado de contas e de mercadorias num cais de Lothal. Ilustração gerada por IA; a hipótese da doca é só uma das interpretações do tanque.' },
  { h: 'Rakhigarhi e Kalibangan' },
  '**Rakhigarhi** (Haryana, a c. 150 km a noroeste de Deli) é descrita pelo Serviço Arqueológico da Índia como o **maior sítio** da civilização, com 300 a 350 hectares em sete montículos. Muitos arqueólogos calculam só 80 a 100 hectares para a cidade da fase Madura, e outros pensam que os montículos eram aglomerados distintos. Escavações dirigidas por Amarendra Nath (1997–2000), Vasant Shinde (2011–2016) e novas equipas (desde 2021) encontraram fases desde a pré-Harappa até à fase Madura, dezenas de enterramentos, e o **ADN de 2019**. Só uma pequena parte do sítio foi escavada.',
  '**Kalibangan** («pulseiras pretas», em hindi, por causa das pulseiras de terracota encontradas) fica junto ao leito do Ghaggar, no Rajastão. Foi identificada como sítio Harappa por Amalananda Ghosh (1953) e escavada por B. B. Lal e B. K. Thapar (1960–1969). Tem um **campo lavrado** com sulcos cruzados da fase Inicial, uma cidade em quadrícula com cidadela e cidade baixa, e estruturas com fossas de cinzas que alguns chamam **altares de fogo** (outros veem fornos ou lareiras domésticas).',
  { h: 'Outros sítios' },
  '**Ganweriwala**, no Cholistão, é um dos grandes centros, mas nunca foi escavado. **Chanhudaro**, no Sind, tinha oficinas de contas, de conchas e de selos. **Shortugai**, no norte do Afeganistão, parece um entreposto harappiano junto às minas de lápis-lazúli do Badakhshan. Nas costas de Makran e do Gujarate há pequenas povoações portuárias (como Sutkagen-dor e Sotka-koh), e na região do Gujarate há sítios como Surkotada e Kuntasi.',
  { h: 'Uma cidade planeada' },
  'O que mais impressiona nas grandes cidades é o **plano**. Em Mohenjo-daro e Harappa, as ruas principais, de 6 a 10 metros de largura, cruzam-se quase em ângulo reto, orientadas aproximadamente para os pontos cardeais; entre elas, becos estreitos. A cidade divide-se em duas partes: a **cidadela**, mais alta, com edifícios públicos, e a **cidade baixa**, de casas. Os tijolos, cozidos ou crus, seguem a proporção **4:2:1** (cerca de 28 × 14 × 7 cm) em toda a civilização, desde o Afeganistão ao Gujarate. Quem decidiu este plano e como se impôs, não sabemos.',
  { img: 'ido-planta-mohenjo', leg: 'Esquema da planta de uma cidade do Indo: cidadela elevada, ruas em quadrícula, casas com pátio e esgotos. Ilustração gerada por IA; baseada nas plantas de Mohenjo-daro e Harappa, é um esquema geral, não uma planta exata.' },
  { h: 'Água, poços e esgotos' },
  'Mohenjo-daro tinha **centenas de poços** (se calcula mais de 700, talvez um por cada poucas casas) de tijolo, com a boca arredondada. Muitas casas tinham uma **casa de banho** com chão de tijolo, ligada por um tubo de barro a **esgotos cobertos** que corriam sob as ruas e levavam as águas a fossas ou ao rio, com bocas de visita para limpeza. É um dos sistemas de saneamento mais antigos e mais elaborados do mundo antigo. As casas voltam as costas à rua (sem janelas para fora), o que dava privacidade e protegia do calor e do pó.',
  { img: 'ido-drenagem-mohenjo', leg: 'Uma rua de Mohenjo-daro com o esgoto de tijolo, descoberto, ao lado das casas.' },
  { img: 'ido-poco-mohenjo', leg: 'Poço de tijolo em Mohenjo-daro; a cidade teve centenas de poços.' },
  { h: 'As rotas de comércio' },
  'As cidades estavam ligadas por rios e por caminhos de terra, e por vias marítimas. Para o **norte e o oeste**: lápis-lazúli do Badakhshan (Afeganistão), turquesa e cobre do planalto iraniano e de Omã. Para o **leste e o sul**: cobre do Rajastão (Khetri), conchas e cornalina do Gujarate, ouro do sul da Índia. Pelo **Golfo Pérsico**: o contacto com **Dilmun** (Bahrein), **Magan** (Omã) e a Mesopotâmia. Barcos e carros de bois transportavam as mercadorias. O que os indianos recebiam em troca (lã, prata, estanho, óleos?) deixou poucos vestígios.',
  { img: 'ido-rotas-comercio', leg: 'Esquema das rotas de comércio entre o vale do Indo, o Afeganistão, o Golfo Pérsico e a Mesopotâmia, c. 2300 a.C. Ilustração gerada por IA; esquemática, não é mapa arqueológico exato.' }
];

const sociedade = [
  { h: '1. Organização política: um enigma' },
  'Quem governava o Indo? **Não sabemos.** Não há inscrições que mencionem reis; não há retratos de governantes; não há palácios nem túmulos de reis identificados com certeza. A **uniformidade** (os mesmos tijolos, pesos, selos e plantas por milhares de quilómetros) sugere coordenação forte, mas o modo de a obter é discutido. As principais hipóteses são:',
  { lista: [
    '**Um estado único**, com capital em Mohenjo-daro ou Harappa (a ideia mais antiga, de Piggott e de Wheeler);',
    '**Vários estados** ou cidades-estado, cada um com um centro (Mohenjo-daro, Harappa, Dholavira, Ganweriwala, Rakhigarhi);',
    '**Uma organização sem rei**, em que o poder estava repartido entre comerciantes, chefes de linhagem, sacerdotes e conselhos das cidades;',
    '**Uma rede de grupos de artesãos e de comerciantes** que partilhavam regras, sem um centro político.'
  ] },
  { img: 'ido-selo-unicornio', leg: 'Selo de esteatite com o «unicórnio» e inscrição, Mohenjo-daro, c. 2500–2000 a.C. Os selos serviam para marcar mercadorias e, talvez, para identificar donos ou grupos.' },
  { caixa: 'E as armas e os palácios?', texto: 'Já se disse que a civilização do Indo era «pacífica». Há de facto poucos sinais de **guerra organizada**: poucas armas (pontas de seta, lanças, machados e maças de cobre ou de pedra existem, mas em número modesto), nenhuma cena de combate na arte e nenhuma camada de destruição. Mas há **muralhas, torres e portas** em quase todas as cidades (que podem proteger de cheias, ladrões, gado ou inimigos) e **traumatismos** em alguns esqueletos (em Harappa, por exemplo). A conclusão prudente é que houve violência, mas que a guerra não era o centro da sua imagem pública. E a ausência de palácios e de templos pode ser uma verdadeira ausência ou só uma dificuldade nossa em reconhecê-los: os edifícios públicos podem estar entre aqueles que as escavações ainda não alcançaram.' },
  { h: '2. Classes sociais' },
  'Sabemos pouco. Pelas casas (de dimensões muito variadas, mas sem uma grande diferença como a que há noutras civilizações), pelos bairros de artesãos, pelo acesso a objetos de luxo e pelas escassas oferendas funerárias, parece ter havido **agricultores, pastores, artesãos especializados (oleiros, contas, metal, conchas), comerciantes e uma elite**, mas uma desigualdade menos visível do que na Mesopotâmia ou no Egito. Não há provas de escravatura, nem de castas (a ideia de que o sistema de castas hindu vem do Indo é uma projeção, sem apoio nos dados). Também não há provas do estatuto das mulheres: as figuras de terracota são em maioria femininas, mas isso não diz nada sobre o poder.',
  { h: '3. Religião: o que se vê e o que se imagina' },
  'Sem textos legíveis, a religião é **a parte mais especulativa**. Não se identificou nenhum templo com certeza, nenhuma estátua de culto, nenhum nome de deus. O que há são **símbolos e figuras**, que se interpretaram muitas vezes à luz da Índia posterior, uma comparação perigosa: seguir a pista de símbolos do Indo até ao hinduísmo pode ser enganador, porque passaram quase 1500 anos entre os dois.',
  { tabela: { cab: ['Figura ou símbolo', 'Onde aparece', 'Interpretações propostas', 'Certeza'], linhas: [
    ['Figura sentada com cornos («Pashupati»)', 'Selo de Mohenjo-daro', 'Proto-Shiva (Marshall, 1931); deus-búfalo; figura humana com toucado; ritual xamânico', 'Muito baixa'],
    ['Figuras femininas de terracota', 'Muitos sítios, desde Mehrgarh', '«Deusa-mãe» da fertilidade; brinquedos; ex-votos; imagens de mulheres reais', 'Baixa'],
    ['O «unicórnio» (animal com um só corno)', 'Grande parte dos selos', 'Animal mítico; clã ou totem; touro visto de perfil; constelação', 'Desconhecido'],
    ['Árvore (pipal) e figuras entre ramos', 'Selos', 'Culto das árvores; espíritos', 'Média-baixa'],
    ['Touro de bossa (zebu)', 'Selos, estatuetas', 'Força, riqueza em gado; animal sagrado', 'Baixa'],
    ['Pedras anulares e cónicas', 'Mohenjo-daro', 'Marshall viu «linga» e «yoni»; hoje muitos duvidam', 'Muito baixa'],
    ['Estruturas com fossas de cinzas («altares de fogo»)', 'Kalibangan, Lothal', 'Ritos de fogo; fornos ou lareiras', 'Baixa'],
    ['Grande Banho', 'Mohenjo-daro', 'Banhos rituais', 'Hipótese']
  ] } },
  { img: 'ido-selo-pashupati', leg: 'O selo «Pashupati» (Mohenjo-daro, achado em 1928–29; Museu Nacional, Deli): figura sentada, com toucado de cornos, rodeada de animais. Marshall chamou-lhe «proto-Shiva»; essa leitura é muito contestada.' },
  { img: 'ido-deusa-mae', leg: 'Figura feminina de terracota do Indo, com colares e toucado elaborado. Muitas vezes chamadas «deusas-mães», mas a sua função é desconhecida.' },
  { h: 'A morte' },
  'Os mortos eram normalmente **enterrados**, deitados e quase sem oferendas (alguns vasos, pulseiras ou espelhos de cobre), em cemitérios fora da cidade, como o **R37** de Harappa. Os enterros em Mohenjo-daro são quase desconhecidos, e isso é um mistério (talvez houvesse cremação ou outros ritos que não deixaram vestígios). Na fase Tardia, o **Cemitério H** de Harappa tem enterros secundários em urnas pintadas com pavões e outros motivos. Não há tumbas com tesouros como em Ur ou no Egito: a ideia de uma «civilização sem culto dos grandes mortos» vem desta ausência.',
  { img: 'ido-enterro', leg: 'Reconstrução imaginada de um enterro numa necrópole do Indo: o corpo deitado, com vasos e pulseiras. Ilustração gerada por IA; os ritos de que temos prova são sobretudo os de inumação simples.' },
  { h: '4. Economia e agricultura' },
  'A economia assentava na **agricultura de duas estações**: trigo, cevada, ervilhas, lentilhas, grão-de-bico e mostarda no inverno, e milhos, sésamo e **algodão** no verão (em algumas zonas, arroz). Criavam-se **vacas de bossa (zebus), búfalos, ovelhas e cabras**; havia cães, e o cavalo é, no mínimo, raro (os supostos achados de cavalo são muito discutidos). Não sabemos ao certo como se irrigava: não há canais de irrigação claros, e as cheias dos rios, a água de reservatórios e a chuva de monção bastavam em muitos locais.',
  { img: 'ido-agricultura', leg: 'Reconstrução imaginada de uma cena agrícola: lavra com arado de madeira puxado por bois, junto a um rio. Ilustração gerada por IA; é um quadro hipotético, baseado no campo lavrado de Kalibangan e em estatuetas.' },
  'O **artesanato** era de alto nível e muito especializado (ver mais abaixo). O comércio era feito sobretudo por **troca**, com pesos padronizados e selos; **não há moedas** nem sinais de dinheiro. As mercadorias circulavam por rios, estradas e pelo mar até Meluhha.',
  { img: 'ido-mercado', leg: 'Reconstrução imaginada de um mercado de uma cidade do Indo, com cereais, cerâmica, contas e mercadores com balanças. Ilustração gerada por IA; baseada em achados, mas os pormenores (cores, tecidos, gestos) são hipotéticos.' },
  { h: '5. Escrita e selos: o grande mistério' },
  'Existem cerca de **5000 inscrições**, quase todas em **selos de esteatite** (pequenas placas de 2 a 4 cm, quadradas, com um animal e alguns sinais), mas também em cerâmica, tabuinhas, objetos de cobre, pulseiras e ferramentas. Conhecem-se **entre 400 e 600 sinais diferentes** (os números variam conforme se contam variantes). A inscrição média tem **cerca de cinco sinais**, e as mais longas não chegam a quarenta. O letreiro de Dholavira, com dez sinais, é uma das mais longas em grande formato. A escrita lia-se geralmente **da direita para a esquerda** (os sinais apertam-se à esquerda quando falta espaço). Cerca de 90% das inscrições foram encontradas em sítios do Paquistão.',
  { img: 'ido-selos-escrita', leg: 'Selos do Indo com sinais da escrita, Museu Britânico, Londres.' },
  { img: 'ido-dholavira-letreiro', leg: 'Reprodução do letreiro de dez sinais encontrado na porta norte de Dholavira (c. 2500 a.C.).' },
  { h: 'Porque não se decifra' },
  { lista: [
    '**As inscrições são curtíssimas.** Não há textos longos, como as tabuinhas da Mesopotâmia: cinco sinais não bastam para estudar a gramática.',
    '**Não há bilingues.** Não existe um «Rosetta» do Indo, ou seja, um texto também escrito numa língua que conheçamos.',
    '**A língua é desconhecida.** Dravídica (a hipótese de Parpola e de Mahadevan, a mais popular), indo-ariana, munda, ou uma língua extinta: nenhuma está provada.',
    '**Não se sabe se é escrita no sentido pleno.** Em 2004, Farmer, Sproat e Witzel defenderam que os sinais seriam símbolos de famílias, de deuses ou de grupos, sem fixarem uma língua falada. Outros (como Rao, Yadav e outros autores) respondem com análises estatísticas que mostram regularidades semelhantes às das línguas. O debate continua.',
    '**Muitas «decifrações» falsas.** Dezenas foram publicadas, sem aceitação geral. Em 2025, o governo do estado indiano de Tamil Nadu anunciou um prémio de um milhão de dólares para quem a decifrar de forma convincente.'
  ] },
  { h: '6. Casa e família' },
  'As casas eram de **tijolo cozido**, com **pátio central** e salas à volta, e por vezes **dois andares**, com escada de tijolo e telhado plano. Variavam de pequenas casas de duas salas a grandes mansões. A casa de banho e o poço eram comuns. Sobre a **família** não há provas diretas: não sabemos se os casamentos eram arranjados, quantas pessoas viviam em cada casa nem como se herdava.',
  { img: 'ido-casa-indo', leg: 'Reconstrução imaginada do pátio de uma casa de tijolo do Indo: família, forno, vasos e escada para o andar de cima. Ilustração gerada por IA; baseada nas plantas das casas, os móveis e as roupas são hipotéticos.' },
  { h: '7. Alimentação' },
  'Comia-se **pão achatado** (cozido em fornos de barro), papas de cereais, leguminosas, vegetais, frutos (tâmaras, melões, uvas), **carne** de vaca, de carneiro e de cabra, **peixe** (também seco) e aves. Estudos de grãos de amido em Farmana (Haryana) apontam para o uso de **gengibre, açafrão-da-Índia (cúrcuma) e alho**, o que sugere uma cozinha com especiarias, embora o tema seja ainda discutido. O consumo de lacticínios é provável (os vasos furados podem ter servido para coalhar). Não se conhecem bebidas alcoólicas com certeza.',
  { h: '8. Vestuário e joias' },
  'Os tecidos eram de **algodão** (cultivado no subcontinente desde, pelo menos, o IV milénio a.C.: restos de fio e de tecido encontraram-se, por exemplo, em Mohenjo-daro) e de lã. As estatuetas mostram roupas simples: panos à volta da cintura, saias e mantos (o do Sacerdote-Rei tem padrão de trevo, com restos de tinta vermelha). O penteado era elaborado, com carrapitos, tranças e toucados em leque nas figuras femininas. As joias eram o ponto forte: **colares, braceletes, pulseiras de conchas, anéis e fitas para a cabeça**, de cornalina, esteatite, faiança e ouro, e **espelhos de cobre** e bastonetes de maquilhagem (kohl).',
  { img: 'ido-contas-cornalina', leg: 'Contas de cornalina e outras pedras semipreciosas do Indo, algumas longas e perfuradas com grande habilidade.' },
  { h: '9. Música e jogos' },
  'Há poucos vestígios de **música**: chocalhos e assobios de terracota (alguns com forma de pássaro), e possivelmente tambores, mas nenhum instrumento certo. A **Dançarina** de bronze sugere dança, mas é só uma sugestão. Havia **jogos**: dados cúbicos, peças e tabuleiros, mas as regras são desconhecidas. As crianças tinham **brinquedos** de terracota (animais com cabeça móvel, bonecas, carros de bois e de rodas).',
  { img: 'ido-carrinho-boi', leg: 'Brinquedo de terracota: um carro de bois do Indo, com duas rodas e um boi, c. 2500 a.C.' },
  { h: '10. Ciência, medidas e medicina' },
  'A prova mais clara de conhecimento matemático são os **pesos**: cubos de **sílex (chert)** em séries regulares (1, 2, 4, 8, 16, 32, 64, e depois múltiplos decimais), com uma unidade de cerca de 13,7 g (valor mais citado, com margem). Estão em todos os sítios, de Lothal a Harappa. O comprimento era medido com **réguas** de marfim e de concha (em Lothal, a escala de marfim tem divisões de c. 1,7 mm) e a proporção constante dos tijolos mostra um sistema de medida. Não há tábuas de matemática nem textos científicos, e não sabemos como contavam. Em **Mehrgarh** (milénios VII–V a.C.) há as mais antigas provas de dentisteria, com molares furados por brocas de sílex.',
  { img: 'ido-pesos', leg: 'Pesos cúbicos de pedra do Indo, de várias dimensões, em série regular.' },
  { h: '11. Tecnologia' },
  { lista: [
    '**Tijolo cozido** em fornos a mais de 1000 °C, em grandes quantidades, com proporções iguais em toda a civilização.',
    '**Metais:** cobre, bronze (com estanho, arsénio e chumbo), chumbo, prata e ouro; **cera perdida** (como na Dançarina). O cobre vinha sobretudo do Rajastão e de Omã.',
    '**Contas:** o artesanato mais refinado. As de **cornalina** eram aquecidas, furadas com brocas duras e, em alguns casos, gravadas com **padrões brancos** por tratamento químico; as de **esteatite** eram feitas em milhares, muito pequenas, e cozidas para ficarem duras.',
    '**Faiança** (pasta de quartzo vidrada), **conchas**, marfim, e cerâmica vermelha pintada de preto, feita em torno.',
    '**Transporte:** carros de rodas puxados por bois (modelos de terracota; marcas de rodados em ruas), barcos fluviais e marítimos (representados em selos e modelos).',
    '**Água e saneamento:** poços, casas de banho, esgotos, reservatórios e barragens (Dholavira).'
  ] },
  { img: 'ido-oficina-contas', leg: 'Reconstrução imaginada de uma oficina de contas, com artesãos a furar e a polir cornalina. Ilustração gerada por IA; baseada nas oficinas de Chanhudaro e de Lothal, os gestos e as ferramentas são hipotéticos.' },
  { h: '12. Comércio com a Mesopotâmia: Meluhha' },
  'Os escribas da Mesopotâmia, desde Sargão (c. 2334 a.C.), falam de **Meluhha**, «a terra de onde vêm» a cornalina, o lápis-lazúli, o marfim, madeiras raras, o ouro e animais exóticos. A maioria dos especialistas identifica **Meluhha com o Vale do Indo**, por causa dos produtos e dos achados. Há **selos do Indo** em Ur, Kish, Susa, Babilónia e Bahrein (poucas dezenas ao todo), pesos de tipo indiano no Golfo, **contas de cornalina gravada** nos túmulos de Ur (c. 2600–2500 a.C.) e, em Lagash, uma **«aldeia de Meluhha»** no tempo de Ur III. O rei Gudea (c. 2120 a.C.) diz que os homens de Meluhha vinham ao seu templo. Os mercadores do Indo viajavam por **Dilmun** (Bahrein) e **Magan** (Omã), que serviam de escalas. O comércio direto diminui desde o período de Ur III, e a última menção conhecida de Meluhha é de c. 1760 a.C.',
  { img: 'ido-barco-meluhha', leg: 'Reconstrução imaginada de um barco de mercadores de Meluhha num cais mesopotâmico, c. 2200 a.C. Ilustração gerada por IA; baseada em modelos e selos, mas o aspeto dos barcos e das roupas é hipotético.' }
];

const personalidades = [
  'A civilização do Indo **não nos deixou nenhum nome**: nenhum rei, nenhum sacerdote, nenhum mercador. Não temos Gilgamesh nem Hamurabi. As «figuras» que se seguem são, por isso, de dois tipos: **as duas esculturas mais famosas**, que parecem representar pessoas (mas sem nome), e **os investigadores que descobriram e interpretaram esta civilização**.',
  { h: 'O «Sacerdote-Rei»' },
  'Estatueta de esteatite de 17,5 cm, encontrada em Mohenjo-daro em 1925–26 (K. N. Dikshit). Representa um homem barbado, de olhos semicerrados, com uma fita na cabeça, uma braçadeira e um manto sobre o ombro esquerdo, decorado com trevos e círculos que tinham tinta vermelha. O nome é moderno: Mackay chamou-lhe «sacerdote», Marshall «rei-sacerdote», e Wheeler fixou «Sacerdote-Rei». **Não há prova** de que fosse um sacerdote, um rei ou, sequer, um homem real; podem ser antepassados ou chefes de linhagem. Está no Museu Nacional do Paquistão, em Carachi.',
  { img: 'ido-sacerdote-rei', leg: 'O «Sacerdote-Rei» de Mohenjo-daro, esteatite, c. 2500 a.C. (Museu Nacional do Paquistão, Carachi).' },
  { h: 'A «Dançarina»' },
  'Estatueta de bronze de c. 10,5 cm, feita pelo método da cera perdida e encontrada em Mohenjo-daro em 1926. Mostra uma jovem nua, com o braço esquerdo carregado de pulseiras, um colar, o cabelo atado e a mão direita na anca. Chamamos-lhe «Dançarina» por causa da pose, mas isso é uma impressão: pode ser uma dançarina, uma figura de culto ou outra coisa. Está no Museu Nacional de Nova Deli, e há quem defenda que devia estar no Paquistão, como o Sacerdote-Rei.',
  { img: 'ido-dancarina', leg: 'A «Dançarina» de Mohenjo-daro, bronze, c. 2500 a.C. (Museu Nacional, Nova Deli).' },
  { h: 'Charles Masson e Alexander Cunningham' },
  '**Charles Masson** (pseudónimo de James Lewis, 1800–1853) foi um desertor do exército inglês, e depois explorador e colecionador; visitou Harappa na década de 1820 e descreveu as ruínas. **Alexander Cunningham** (1814–1893), primeiro diretor do Serviço Arqueológico da Índia, esteve em Harappa em 1853 e 1856 e, em 1875, publicou um dos selos do Indo (com um touro e sinais por ler). Pensou que fosse de origem posterior e não percebeu que era uma civilização, mas foi o primeiro a publicar um selo harappiano.',
  { h: 'Daya Ram Sahni e Rakhal Das Banerji' },
  '**Daya Ram Sahni** (1879–1939) escavou Harappa a partir de 1920–21. **Rakhal Das Banerji** (1885–1930), arqueólogo de Bengala, visitou Mohenjo-daro em 1919 e voltou em 1922–23, em busca de um estupa budista, e encontrou selos iguais aos de Harappa. Foi a ligação entre as duas cidades, a que Marshall deu o resultado público. Só mais tarde o seu papel foi plenamente reconhecido.',
  { h: 'John Marshall' },
  'O arqueólogo inglês **John Marshall** (1876–1958), diretor do Serviço Arqueológico da Índia (1902–1928), reconheceu a importância dos achados e anunciou a descoberta no *Illustrated London News* a 20 de setembro de 1924. Dirigiu a escavação de Mohenjo-daro e publicou o grande estudo de 1931. A sua leitura do selo «Pashupati» como «proto-Shiva» marcou o estudo da religião do Indo, mas é hoje muito contestada.',
  { img: 'ido-marshall', leg: 'Sir John Marshall (1876–1958), diretor do Serviço Arqueológico da Índia, que anunciou a descoberta da civilização do Indo em 1924.' },
  { h: 'Ernest Mackay' },
  'O arqueólogo inglês **Ernest Mackay** (1880–1943) dirigiu as escavações de Mohenjo-daro em 1926–1931 e depois as de Chanhudaro (1935–36). Encontrou o selo «Pashupati» (1928–29) e a «Dançarina». Foi dos primeiros a notar a ligação entre o Indo e a Mesopotâmia, e escreveu o primeiro livro sobre «a civilização do Indo» para o grande público (1935).',
  { h: 'Mortimer Wheeler' },
  'O arqueólogo inglês **Mortimer Wheeler** (1890–1976), diretor-geral do Serviço Arqueológico da Índia (1944–48), trouxe rigor à escavação por camadas e escavou Harappa (1946). Foi também o autor da teoria da «invasão ariana» (1947), que **hoje está abandonada**: Dales e outros mostraram que os esqueletos não vinham de um massacre. Ficou, mesmo assim, o grande divulgador desta civilização, e o seu livro de 1953 é um clássico.',
  { img: 'ido-wheeler', leg: 'Sir Mortimer Wheeler (1890–1976), que escavou Harappa e foi diretor-geral do Serviço Arqueológico da Índia.' },
  { h: 'George Dales' },
  'O arqueólogo americano **George F. Dales** (1927–1992) publicou em 1964 «O mítico massacre de Mohenjo-daro», onde mostrou que os esqueletos que Wheeler usara para a sua hipótese vinham de camadas diferentes, sem sinais de destruição. Escavou Mohenjo-daro em 1964–65 e Balakot. O seu artigo é um exemplo de como a arqueologia corrige as suas próprias ideias.',
  { h: 'Jean-François Jarrige' },
  'O arqueólogo francês **Jean-François Jarrige** dirigiu a escavação de **Mehrgarh** a partir de 1974, com a mulher **Catherine Jarrige**. As suas descobertas mostraram que a civilização do Indo tinha raízes locais profundas e que a agricultura no subcontinente era muito antiga.',
  { h: 'Iravatham Mahadevan' },
  '**Iravatham Mahadevan** (1930–2018), funcionário público indiano e epigrafista, publicou em 1977 *The Indus Script: Texts, Concordance and Tables*, o catálogo de referência de sinais e de inscrições, e defendeu uma leitura dravídica da escrita. Não a decifrou, mas deu a todos os estudiosos a base de trabalho.',
  { h: 'Jonathan Mark Kenoyer' },
  'O arqueólogo americano **Jonathan Mark Kenoyer**, da Universidade de Wisconsin–Madison, codirige desde 1986 as escavações de Harappa e estudou como se fabricavam contas, selos, conchas e metais. A ele se deve a visão atual de uma sociedade urbana variada, com artesãos especializados e redes de comércio, e com poder repartido.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**Urbanismo e saneamento:** a ideia de uma cidade planeada, com saneamento para todos, só reaparece mais de mil anos depois noutras civilizações.',
    '**Padronização:** tijolos, pesos e medidas iguais por toda uma civilização, sem imposição visível de um rei.',
    '**Artesanato:** contas de cornalina e de esteatite, faiança, conchas, cobre e bronze, cerâmica pintada. A indústria de contas de ágata e cornalina de **Khambhat** (Gujarate) é, hoje, herdeira longínqua desta tradição.',
    '**Agricultura e animais:** o algodão, o zebu, o búfalo e a lavra com arado fazem parte da herança agrícola do subcontinente, e muitos objetos do quotidiano (carros de bois, panelas, brinquedos) têm descendentes diretos.',
    '**Um enigma que fascina:** a escrita por ler e a ausência de reis continuam a alimentar investigadores, ficção e controvérsias.'
  ] },
  { caixa: 'Continuidade ou ruptura?', texto: 'É comum dizer-se que símbolos do Indo (figura sentada, árvore, touro, algumas pedras) foram a origem do hinduísmo e de outras tradições indianas. É **possível, mas não provado**: a escrita não se lê, a religião do Indo não está documentada, e passaram uns 1500 anos até aos primeiros textos indianos. O que se pode dizer é que muitos elementos materiais (agricultura, artesanato, formas de cerâmica) passaram da civilização do Indo para as culturas seguintes, e que a população não «desapareceu».' },
  { h: 'Arte' },
  'A arte do Indo é, em geral, **pequena e discreta**: selos de esteatite com animais gravados com grande finura (o «unicórnio», o touro de bossa, o elefante, o rinoceronte, o tigre), estatuetas de terracota, pouca escultura em pedra (o «Sacerdote-Rei») e algumas em bronze (a «Dançarina»), joias e cerâmica. Falta a escultura monumental, os relevos de batalhas e as estelas de reis que tanto abundam na Mesopotâmia e no Egito.',
  { h: 'Arquitetura' },
  'A arquitetura do Indo é **funcional**: muralhas, casas de pátio, tanques, poços, reservatórios e esgotos, sem palácios nem templos reconhecíveis. O Grande Banho e os reservatórios de Dholavira são as obras de maior prestígio. Em Dholavira há ainda blocos de pedra talhada (em vez de tijolo) e portas monumentais.',
  { h: 'A redescoberta da civilização do Indo' },
  'A civilização do Indo foi **esquecida durante quase 4000 anos**: não há memória dela nas tradições indianas posteriores, até onde se sabe. Foi redescoberta aos poucos, entre 1826 (Masson) e 1924 (Marshall), e depois com as escavações do Serviço Arqueológico da Índia e, após 1947, dos arqueólogos paquistaneses, indianos e de equipas estrangeiras. A partilha da Índia em 1947 deixou a maioria dos grandes sítios no Paquistão e levou a arqueologia indiana a procurar outros (Kalibangan, Lothal, Dholavira, Rakhigarhi). As esculturas de Mohenjo-daro foram divididas entre os dois países, e há ainda debate sobre onde devia estar a «Dançarina».',
  { img: 'ido-escavacao', leg: 'Escavação de Mohenjo-daro nos anos 1920–1930, em fotografia do Serviço Arqueológico da Índia.' },
  { img: 'ido-selo-ur', leg: 'Selo do tipo do Indo encontrado em Ur (Mesopotâmia), no Museu Britânico: prova material do contacto entre o Indo e a Suméria.' },
  { h: 'O declínio: o que se sabe e o que não se sabe' },
  'Por volta de 1900 a.C., as grandes cidades começam a perder população; a escrita, os selos e os pesos padronizados desaparecem; as ligações com a Mesopotâmia e o Golfo cessam; a vida passa a ser mais **rural e regional**. **Não houve queda súbita nem destruição por guerra.** As hipóteses principais são:',
  { lista: [
    '**Clima.** A monção enfraquece a partir de c. 2200 a.C. (o «evento de 4,2 mil anos»), com secas prolongadas, provadas por estalagmites e sedimentos de lagos. A agricultura das cheias, a base das cidades, ficou em risco, e a população terá ido para zonas mais húmidas, a leste e a sul.',
    '**Rios.** O **Ghaggar-Hakra** (Sarasvati, para alguns) parece ter sido um rio alimentado pela monção, e não por glaciares (Giosan et al., 2012), e foi secando, o que deixou sem água as cidades da sua margem. Há ainda debate sobre se os rios Sutlej e Yamuna mudaram de curso na época; é um tema debatido e político. No Indo, mudanças de leito e cheias podem ter atingido Mohenjo-daro.',
    '**Comércio.** O fim das ligações com a Mesopotâmia (que também mudava) pode ter reduzido a riqueza dos artesãos e dos mercadores.',
    '**Muitas causas.** Hoje, a maioria dos investigadores pensa numa **combinação de causas** (seca, rios, queda do comércio, reorganização social) que atuou de forma diferente em cada região. Hipóteses de epidemias e de uma crise política têm pouca prova.'
  ] },
  { caixa: 'A «invasão ariana» está abandonada', texto: 'Wheeler propôs em 1947 que arianos invasores, citados no Rigveda como destruidores de fortalezas, tinham aniquilado as cidades do Indo. **Essa hipótese está abandonada** pela arqueologia: Dales (1964) mostrou que os esqueletos de Mohenjo-daro eram de épocas diferentes e que não há camada de destruição, de incêndio ou de batalha; as cidades declinaram ao longo de séculos, antes de qualquer chegada de falantes de indo-ariano. Estes grupos terão chegado ao noroeste da Índia **por migrações graduais**, depois de 2000 a.C., e esse tema (como e quando chegou o indo-ariano) é uma discussão diferente e continua aberta, também com carga política na Índia e no Paquistão.' },
  { h: 'Controvérsias modernas' },
  { lista: [
    '**O nome:** «civilização do Indo», «de Harappa» ou «Indo-Sarasvati»: cada escolha tem implicações geográficas e políticas.',
    '**A escrita:** é uma linguagem ou um sistema de símbolos? Tem sido usada tanto em teses científicas como em reivindicações de identidade.',
    '**Rakhigarhi:** quão grande era, e o que diz o ADN de um único esqueleto sobre a origem de um povo?',
    '**Migração ou continuidade:** a discussão sobre a chegada do indo-ariano mistura ciência e política em vários países.',
    '**A «Dançarina» e o património:** a quem pertencem os achados divididos em 1947?',
    '**Conservação:** Mohenjo-daro sofre com a salinização do solo, as cheias (como as de 2010 e 2022 no Paquistão) e restauros discutíveis. O sítio, escavado sem proteção adequada, está em risco.'
  ] },
  { h: 'Onde visitar' },
  { img: 'ido-dholavira-portao', leg: 'A porta norte de Dholavira (Gujarate), onde se encontrou o letreiro de dez sinais.' },
  { caixa: 'Para visitar', texto: '**Mohenjo-daro** (Sind, Paquistão; Património Mundial) e **Harappa** (Panjabe, Paquistão, com museu no local); **Dholavira** (Gujarate, Índia; Património Mundial desde 2021), **Lothal** (Gujarate, com museu), **Kalibangan** (Rajastão) e **Rakhigarhi** (Haryana). Em museus: o **Museu Nacional do Paquistão** (Carachi: Sacerdote-Rei), o **Museu Nacional de Nova Deli** (Dançarina, selos), o **Museu Britânico** (Londres: selos, contas e achados de Ur), e o **Louvre** (Paris: o selo de Shu-ilishu).' }
];

const quiz = [
  { p: 'Qual é a fase de maior esplendor urbano da civilização do Indo?', op: ['Harappa Inicial (c. 3300–2600 a.C.)', 'Harappa Madura (c. 2600–1900 a.C.)', 'Harappa Tardia (c. 1900–1300 a.C.)', 'Mehrgarh (c. 7000 a.C.)'], certa: 1, exp: 'A fase Madura teve cidades planeadas, selos, escrita e pesos padronizados.' },
  { p: 'Quem descobriu o sítio neolítico de Mehrgarh, no Baluchistão?', op: ['Mortimer Wheeler', 'Alexander Cunningham', 'John Marshall', 'Jean-François Jarrige'], certa: 3, exp: 'Jarrige e a sua equipa começaram a escavar Mehrgarh em 1974.' },
  { p: 'Qual é o nome do tanque de tijolo de Mohenjo-daro, com c. 12 × 7 × 2,4 m?', op: ['O Grande Banho', 'O Colégio dos Sacerdotes', 'O Estádio', 'O Grande Celeiro'], certa: 0, exp: 'O nome «Grande Banho» é moderno e a função (ritual ou outra) não está provada.' },
  { p: 'O que tinha de especial o sistema de águas das cidades do Indo?', op: ['Aquedutos de pedra', 'Esgotos cobertos e casas de banho nas casas', 'Canais de irrigação de 100 km', 'Chuveiros de bronze'], certa: 1, exp: 'Muitas casas tinham casa de banho ligada a esgotos cobertos sob as ruas.' },
  { p: 'Qual a proporção habitual dos tijolos do Indo?', op: ['5:3:1', '1:1:1', '2:1:1', '4:2:1'], certa: 3, exp: 'Tijolos de c. 28 × 14 × 7 cm, na proporção 4:2:1, em toda a civilização.' },
  { p: 'O que são os pesos padronizados do Indo?', op: ['Cubos de sílex (chert) em séries regulares', 'Bolas de ouro', 'Discos de cobre', 'Moedas de prata'], certa: 0, exp: 'Séries de 1, 2, 4, 8, 16, 32, 64…, e depois múltiplos decimais, em todo o território.' },
  { p: 'Quantas inscrições do Indo se conhecem, aproximadamente?', op: ['Cerca de 5000', 'Mais de 100 000', 'Umas 50', 'Umas 500'], certa: 0, exp: 'São cerca de 5000, quase todas muito curtas (média de cinco sinais).' },
  { p: 'Porque não se decifrou a escrita do Indo?', op: ['Porque se perdeu todo o material', 'Porque as inscrições são curtas, não há bilingues e a língua é desconhecida', 'Porque é igual ao cuneiforme', 'Porque já foi decifrada mas é segredo'], certa: 1, exp: 'Sem textos longos nem bilingues, e sem conhecer a língua, nada se pode confirmar.' },
  { p: 'Como se chamava, nos textos mesopotâmicos, a terra que se identifica com o Indo?', op: ['Punt', 'Dilmun', 'Magan', 'Meluhha'], certa: 3, exp: 'Meluhha fornecia cornalina, lápis-lazúli, marfim e madeiras.' },
  { p: 'Que objetos do Indo se encontraram nos túmulos reais de Ur?', op: ['Contas de cornalina', 'Selos de ouro', 'Vasos de vidro', 'Espadas de ferro'], certa: 0, exp: 'Contas de cornalina de tipo indiano, algumas gravadas com padrões brancos, em Ur, c. 2600–2500 a.C.' },
  { p: 'O que se sabe do «Sacerdote-Rei» de Mohenjo-daro?', op: ['Foi o rei da cidade, com certeza', 'É uma estatueta cujo nome moderno não prova quem representa', 'É uma estátua de Shiva', 'É uma cópia moderna'], certa: 1, exp: 'O nome é uma convenção moderna; não sabemos se era um sacerdote, um rei ou outra figura.' },
  { p: 'Como se interpreta hoje o selo «Pashupati»?', op: ['Como um mapa', 'Como uma moeda', 'Como prova de que o Indo adorava Shiva', 'De forma muito discutida: Marshall viu um «proto-Shiva», mas há outras leituras'], certa: 3, exp: 'A leitura de Marshall é contestada; não temos texto que diga quem era a figura.' },
  { p: 'Qual a situação da hipótese da «invasão ariana» como causa do fim do Indo?', op: ['Foi confirmada pelo ADN', 'É a explicação aceite', 'Está abandonada pela arqueologia', 'Foi confirmada por Wheeler'], certa: 2, exp: 'Dales (1964) e outros mostraram que não há camada de destruição nem massacre, e as cidades declinaram antes.' },
  { p: 'Qual é uma das principais hipóteses para o declínio do Indo?', op: ['Mudança climática (monção mais fraca) e alteração dos rios', 'Peste negra', 'Uma guerra com o Egito', 'Um terramoto único'], certa: 0, exp: 'O enfraquecimento da monção, a seca e as mudanças nos rios (Ghaggar-Hakra) estão entre as causas mais estudadas, normalmente combinadas.' },
  { p: 'Quem anunciou a descoberta da civilização do Indo ao mundo, em 1924?', op: ['John Marshall', 'Leonard Woolley', 'Mortimer Wheeler', 'Ernest Mackay'], certa: 0, exp: 'Marshall fê-lo no Illustrated London News a 20 de setembro de 1924.' }
];

export default {
  id: 'indo',
  cor: '#c47a3a',
  emblema: '../assets/img/indo.png',
  nome:    { pt: 'Vale do Indo', en: 'Indus Valley' },
  periodo: { pt: 'c. 3300 a.C. – 1300 a.C.', en: 'c. 3300 BC – 1300 BC' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
