// OLMECAS E CARAL — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Duas «civilizações-mãe» das Américas, tratadas lado a lado: Caral-Supe (Peru, c. 3000–1800 a.C.) e os Olmecas (Golfo do México, c. 1500–400 a.C.).
// Datas aproximadas; muito do que se diz sobre ambas é hipótese. a.C. = antes de Cristo. Ligações: Chavín de Huántar e Monte Albán (zapotecas) só como ponte.
// Imagens: cada {img:'id'} procura o ficheiro  olmecas-caral/img/id.jpg  (ver IMAGENS_OLMECAS_CARAL.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'Este capítulo junta duas civilizações que nunca se conheceram, mas que têm um papel parecido: são as mais antigas «civilizações-mãe» das Américas, uma nos Andes e outra na Mesoamérica. A primeira é **Caral-Supe**, no litoral norte-central do **Peru**, que construiu pirâmides, praças circulares e uma cidade há cerca de 4600 anos, sem cerâmica e provavelmente sem guerras. A segunda é a dos **Olmecas**, no sul do **México**, nas terras baixas do Golfo, famosos pelas **cabeças colossais** de basalto, pelo jade, pelo jogo de bola com borracha e pelos primeiros centros cerimoniais da Mesoamérica.',
    'Há uma enorme diferença de tempo entre elas: Caral é mais de mil anos mais antiga do que San Lorenzo, a primeira grande capital olmeca. E há uma ressalva importante: **sabe-se pouco** de ambas. Nenhuma deixou textos que se leiam, nem o nome com que se chamavam a si próprias («Caral» e «olmeca» são nomes que lhes demos nós, ou que lhes foram dados muito depois). O que segue assenta em escavações, em datações por radiocarbono e em interpretações, e as partes mais incertas estão assinaladas.'
  ] },
  { img: 'olm-mapa-caral-supe', leg: 'Mapa de localização de Caral e Áspero na costa peruana, com El Paraíso para referência; não é um mapa pormenorizado do vale do Supe.' },
  { img: 'olm-mapa-olmecas', leg: 'Mapa do coração olmeca, com San Lorenzo, La Venta e Tres Zapotes.' },
  { h: 'Onde ficavam' },
  { lista: [
    '**Caral-Supe (Peru):** o centro era o **vale do rio Supe**, a cerca de 180 km a norte de Lima e a pouco mais de 20 km do Pacífico, numa das costas mais áridas do planeta, cortada por vales que descem dos Andes. Os arqueólogos chamam à região **Norte Chico** («pequeno norte»). O sítio de **Caral** fica no interior do vale; **Áspero**, o porto de pesca, está na foz.',
    '**Olmecas (México):** o «coração» olmeca era uma faixa de terras baixas, quentes, húmidas e pantanosas, no sul dos atuais estados de **Veracruz** e **Tabasco**, junto ao Golfo do México. Era atravessada por rios largos, como o **Coatzacoalcos**, que serviam de vias de transporte, e terminava no norte nas montanhas vulcânicas de **Los Tuxtlas**, de onde vinha o basalto.'
  ] },
  { img: 'olm-caral-vista-aerea', leg: 'Vista panorâmica de Caral, Peru; fotografia terrestre, não aérea.' },
  { h: 'Quando existiram' },
  'As duas civilizações estão separadas por mais de um milénio, e o tempo de cada uma é discutido. Datas na «cronologia média» possível, sempre aproximadas.',
  { tabela: { cab: ['Civilização / fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Caral-Supe: primeiros monumentos', 'c. 3500 – 3000 a.C.', 'Plataformas e praças em sítios como Sechín Bajo e Huaricanga; datas ainda discutidas'],
    ['Caral-Supe: apogeu', 'c. 2600 – 2000 a.C.', 'Caral e outros centros do Supe, com pirâmides, praças circulares, algodão e pesca; sem cerâmica'],
    ['Caral-Supe: declínio e dispersão', 'c. 2000 – 1800 a.C. (e depois)', 'Caral é abandonada; outros sítios, como Vichama, continuam até c. 1500 a.C.'],
    ['Olmecas: antecedentes', 'c. 1800 – 1400 a.C.', 'Aldeias agrícolas no Golfo; bolas de borracha em El Manatí; primeiras ocupações de San Lorenzo'],
    ['Olmecas: San Lorenzo', 'c. 1400 / 1200 – 900 a.C.', 'Primeira grande capital; plataforma artificial, cabeças colossais, rede comercial vasta'],
    ['Olmecas: La Venta', 'c. 900 – 400 a.C.', 'Segundo grande centro; grande pirâmide, oferendas de jade e serpentina, altares e estelas'],
    ['Depois dos olmecas', 'c. 400 a.C. – século II d.C.', 'Tres Zapotes e a cultura «epi-olmeca»: primeiras datas no calendário da Contagem Longa e escrita ístmica']
  ] } },
  { img: 'olm-ia-esquema-cronologia', leg: 'Cronologia esquemática: Caral, c. 3000–1800 a.C., e Olmecas, c. 1500–400 a.C., na mesma escala temporal. Diagrama desenhado, não gerado por IA.' },
  { h: 'Quem eram?' },
  { h: 'Os povos de Caral' },
  'Não sabemos como se chamavam nem que língua falavam. Eram agricultores e pescadores que viviam em cidades pequenas, sem exército visível e sem cerâmica, mas capazes de erguer edifícios de pedra com dezenas de metros. A palavra «**Caral**» é o nome do sítio moderno. A arqueóloga peruana **Ruth Shady** chama-lhe «civilização de Caral» e acha que é a mais antiga das Américas; muitos colegas preferem «**tradição Caral-Supe**» ou «**Norte Chico**» e discutem se foi uma civilização no sentido pleno.',
  { h: 'Os olmecas' },
  '«Olmeca» vem do náuatle (a língua dos astecas) e quer dizer «gente da borracha» (*ōlli*, borracha). Foi o nome que os astecas deram a povos que viviam na mesma região, **dois mil anos depois**: aplicou-se por engano aos construtores muito mais antigos. Não sabemos como eles próprios se chamavam. Sobre a língua, há quem proponha uma língua do ramo **mixe-zoque**, falada ainda hoje por povos vizinhos, mas é uma hipótese: os olmecas não deixaram textos que se leiam.',
  { h: 'Porque importam' },
  { lista: [
    '**Cidades sem cerâmica:** Caral mostra que se pode construir monumentos enormes antes de se fazerem vasos de barro cozido e talvez antes de haver guerras ou impérios.',
    '**Uma «fábrica» de ideias:** em ambas aparecem, pela primeira vez nas suas regiões, plataformas cerimoniais, praças, uma religião organizada e trabalho coletivo em grande escala.',
    '**O debate «civilização-mãe»:** tanto os olmecas (Mesoamérica) como Chavín (Andes) foram chamados «cultura-mãe»; Caral e outros achados obrigam a repensar essa ideia.',
    '**O motivo da borracha, do jade e do jaguar:** símbolos que atravessam toda a Mesoamérica depois dos olmecas, de Teotihuacan aos maias e aos astecas.',
    '**Um aviso sobre as «origens»:** mostram como é frágil dizer «o mais antigo»: cada nova escavação ou datação pode mudar a resposta.'
  ] },
  { h: 'Hoje' },
  'Caral é **Património Mundial da UNESCO** desde 2009 e é visitável a uma manhã de viagem de Lima; o sítio continua a ser escavado e ameaçado por ocupações ilegais de terrenos. Dos olmecas, as cabeças colossais estão em museus de Xalapa, Villahermosa e da Cidade do México e em pequenos museus locais; em La Venta, San Lorenzo e Tres Zapotes ainda há muito por escavar, e em parte do coração olmeca as plataformas estão cobertas por canaviais, pastagens e refinarias.'
];

const linha = [
  'Esta linha do tempo põe lado a lado as duas civilizações. As datas são aproximadas; as mais antigas (Caral, antes de 2600 a.C.) e algumas olmecas (a origem da escrita, a data exata do fim) são as mais incertas.',
  { linha: [
    { d: 'c. 3500 a.C.', t: 'Primeiras construções monumentais no Peru', x: 'Em sítios do litoral norte-central, como **Sechín Bajo** (vale de Casma) e **Huaricanga** (vale de Fortaleza), aparecem plataformas e praças afundadas que alguns datam desta época. É mais antigo do que Caral e **discutido**: as datas dependem de poucas amostras.' },
    { d: 'c. 3000 a.C.', t: 'Começa a tradição Caral-Supe', x: 'Povoados com arquitetura de pedra surgem entre a costa e os vales: **Áspero**, na foz do Supe, e outros sítios, de pescadores e agricultores de algodão. As datas e a sequência exata continuam em estudo.' },
    { d: 'c. 2600 a.C.', t: 'As datas mais seguras de Caral', x: 'Cordas e **bolsas de junco (*shicra*)** do enchimento de edifícios de Caral deram datas de radiocarbono de cerca de **2627 a.C.**; em 2001 uma equipa com **Ruth Shady**, Jonathan Haas e Winifred Creamer publicou na revista *Science* uma série de datas entre c. 2600 e 2000 a.C. Há quem proponha construções ainda mais antigas, e é debatido.' },
    { d: 'c. 2500 a.C.', t: 'O apogeu de Caral', x: 'Edifica-se a **Pirámide Mayor** e a pirâmide do anfiteatro, as praças circulares afundadas e os bairros de casas. É a época em que se levantam as pirâmides do Egito (Gizé): são civilizações contemporâneas, sem qualquer contacto.' },
    { d: 'c. 2250 a.C.', t: 'Uma figura em cabaça', x: 'Numa cabaça gravada da região aparece uma figura de **«deus dos bastões»**, imagem que, séculos mais tarde, reaparece nos Andes (em Chavín). Se for mesmo a mesma entidade, a religião andina tem raízes de 4000 anos.' },
    { d: 'c. 2200 a.C.', t: 'Uma seca de séculos?', x: 'Uma hipótese recente, defendida por Ruth Shady e outros, liga o enfraquecimento da região a uma **seca prolongada** de há c. 4200 anos, um episódio climático que afetou várias partes do mundo. É **debatido**, e o fim de Caral pode ter tido mais de uma causa.' },
    { d: 'c. 2170 a.C.', t: 'As flautas de Caral', x: 'As **flautas de osso** do anfiteatro de Caral, achadas pela equipa de Shady, deram uma datação de radiocarbono de cerca de 2170 a.C. (com margem de erro grande). Estão entre os instrumentos musicais mais antigos das Américas.' },
    { d: 'c. 2000 a.C.', t: 'Caral é abandonada', x: 'Os edifícios deixam de ser remodelados e os últimos moradores partem. Os construtores **enterram** praças e templos sob pedras e terra, em gestos que parecem rituais de encerramento.' },
    { d: 'c. 1800 a.C.', t: 'A tradição dispersa-se', x: 'O fim da fase clássica de Caral-Supe coincide com mudanças de clima e de rios, e a população desloca-se para a costa e para norte. Em **Vichama** (vale de Huaura), ocupada entre c. 1800 e 1500 a.C., relevos de barro mostram figuras magras e rãs, que se interpretam como memória de fome e de pedidos de chuva.' },
    { d: 'c. 1750 a.C.', t: 'Primeiros povoados no Golfo', x: 'Em **San Lorenzo** (Veracruz) a ocupação mais antiga conhecida é da fase **Ojochí** (c. 1750 – 1550 a.C.): aldeias de agricultores, com cerâmica e milho. Ainda não há monumentos.' },
    { d: 'c. 1600 a.C.', t: 'As bolas de borracha de El Manatí', x: 'Numa nascente-pântano, **El Manatí**, ofereceram-se ao longo dos séculos objetos em madeira, **bolas de borracha** (cerca de uma dúzia, de c. 1600 a.C. ou mais antigas) e machados de pedra. É a prova mais antiga do uso ritual da borracha na Mesoamérica.' },
    { d: 'c. 1400 a.C.', t: 'O primeiro campo de jogo (fora do Golfo)', x: 'O campo de jogo de bola mais antigo conhecido, em **Paso de la Amada**, na costa do Pacífico (Chiapas), não é olmeca. Mostra que o jogo e a elite que o praticava surgiram em vários lugares da Mesoamérica, e que os olmecas não foram os únicos «inventores».' },
    { d: 'c. 1400 – 1200 a.C.', t: 'San Lorenzo cresce', x: 'Constrói-se o **planalto artificial**: terraços e aterros que exigiram enormes volumes de terra, e canais de pedra. Há vestígios de uma elite e de oficinas de pedra.' },
    { d: 'c. 1200 – 900 a.C.', t: 'O apogeu de San Lorenzo', x: 'É a maior cidade da Mesoamérica do seu tempo, com uma população que se estima em milhares. Esculpem-se as **cabeças colossais** e tronos de basalto trazidos de dezenas de quilómetros, e circulam jade, obsidiana e cerâmica de estilo olmeca por toda a Mesoamérica.' },
    { d: 'c. 1100 – 900 a.C.', t: 'O bloco de Cascajal', x: 'Uma placa de serpentina com **62 sinais** (28 diferentes) é, segundo alguns, a escrita mais antiga das Américas. Foi achada fora de contexto, é única, e continua por decifrar.' },
    { d: 'c. 1000 – 800 a.C.', t: 'Um vizinho maia monumental', x: 'Em **Aguada Fénix** (Tabasco), um enorme terrapleno com perto de 1,4 km de comprimento foi construído por volta desta época: mostra que também fora do coração olmeca havia grandes obras, e que a Mesoamérica da época era mais diversa do que se pensava.' },
    { d: 'c. 900 a.C.', t: 'San Lorenzo cai, La Venta sobe', x: 'Monumentos de San Lorenzo são **mutilados e enterrados** (revolta? conquista? rito?), e talvez o rio mude de curso. O poder passa para **La Venta**, mais a leste. Em simultâneo, nos Andes, **Chavín de Huántar** começa a erguer-se.' },
    { d: 'c. 850 – 700 a.C.', t: 'As cabeças e a pirâmide de La Venta', x: 'Esculpem-se as quatro cabeças colossais de La Venta e constrói-se a **Grande Pirâmide** (cerca de 34 m de altura e uns 100 000 m³ de aterro). Há oferendas de serpentina e de jade, e tumbas de colunas de basalto.' },
    { d: 'c. 650 a.C.', t: 'O objeto de San Andrés', x: 'Um objeto de cerâmica achado em San Andrés (Tabasco), possivelmente um selo, mostra uma ave, com volutas de fala e sinais que lembram os da escrita maia posterior. Para alguns é prova de escrita olmeca tardia; é **discutido**.' },
    { d: 'c. 600 a.C.', t: 'Escrita e calendário em Oaxaca', x: 'Em **San José Mogote** (Oaxaca), um relevo com um prisioneiro e o sinal «1 Terramoto» é uma das primeiras provas do **calendário de 260 dias** e de escrita, e é **zapoteca**, não olmeca.' },
    { d: 'c. 500 a.C.', t: 'Fundação de Monte Albán', x: 'Os zapotecas fundam **Monte Albán**, num cume do vale de Oaxaca. Os relevos dos **Danzantes**, com figuras de estilo antigo, mostram a ligação entre as culturas do Golfo e as de Oaxaca.' },
    { d: 'c. 400 a.C.', t: 'La Venta é abandonada', x: 'Entre 400 e 350 a.C. a população da parte oriental do coração olmeca cai drasticamente, provavelmente por **mudanças nos rios e no ambiente** (assoreamento, tectónica ou vulcanismo: debatido). A «cultura olmeca» como estilo termina.' },
    { d: '32 a.C.', t: 'A Estela C de Tres Zapotes', x: 'Uma estela de **Tres Zapotes** traz a data **7.16.6.16.18** da Contagem Longa, correspondente a **3 de setembro de 32 a.C.**: uma das datas mais antigas desse tipo (só superada pela Estela 2 de Chiapa de Corzo, de 36 a.C.), já na época **epi-olmeca**, séculos depois da queda de La Venta.' },
    { d: 'século II d.C.', t: 'Os últimos textos epi-olmecas', x: 'A **Estela de La Mojarra** (c. 156 d.C.) e a **Estatueta de Tuxtla** (c. 162 d.C.) têm textos na escrita ístmica, parcialmente decifrados. Marcam o fim da tradição olmeca, que se funde noutras culturas.' },
    { d: '1862', t: 'Primeiro registo de uma cabeça', x: 'Em 1862 é achada uma cabeça colossal perto de Tres Zapotes; o erudito mexicano **José Melgar y Serrano** publica uma descrição dela em 1869: é o primeiro registo científico de um objeto olmeca.' },
    { d: '1938 – 1946', t: 'Stirling e a Geografia Nacional', x: '**Matthew Stirling** escava em Tres Zapotes, Cerro de las Mesas e La Venta, e defende que os olmecas eram uma civilização muito antiga. Em 1942, **Alfonso Caso** chama-lhes «cultura-mãe» da Mesoamérica.' },
    { d: '1994 – 1996', t: 'Ruth Shady e o Projeto Caral', x: '**Ruth Shady Solís**, da Universidade de San Marcos, reconhece a escala de Caral a partir de 1994 (o sítio fora visto em 1948 por Paul Kosok, sem que se percebesse o seu alcance) e começa as escavações sistemáticas em meados da década. Em 2001 as datações de radiocarbono são publicadas.' },
    { d: '2006 – 2009', t: 'Cascajal e a UNESCO', x: 'Em 2006 a revista *Science* publica o **bloco de Cascajal**; em 2009 a **Cidade Sagrada de Caral-Supe** entra na lista do Património Mundial.' }
  ] },
  { img: 'olm-estela-c', leg: 'Fragmento superior da estela C de Tres Zapotes, com parte da inscrição de Contagem Longa cuja data completa equivale a 32 a.C.' },
  { img: 'olm-monte-alban', leg: 'Grande Praça de Monte Albán, Oaxaca.' }
];

const mapa = [
  'Estas duas civilizações não formaram impérios com fronteiras: eram redes de centros cerimoniais ligados por rios, costas e rotas de troca. A tabela mostra os sítios principais de cada uma, e as secções seguintes descrevem os mais importantes.',
  { h: 'Caral-Supe (Peru)' },
  { tabela: { cab: ['Sítio', 'Onde', 'Datas aproximadas', 'Para que ficou conhecido'], linhas: [
    ['Caral', 'Vale do Supe, 23 km da costa', 'c. 2600 – 2000 a.C.', 'Pirámide Mayor, anfiteatro, praças circulares; sítio principal; Património Mundial (2009)'],
    ['Áspero', 'Foz do Supe, costa', 'c. 3000 – 1800 a.C.', 'Porto de pesca e de comércio; cerca de 13 ha, com uns onze montes; oferendas e enterramentos'],
    ['Vichama', 'Végueta, vale de Huaura', 'c. 1800 – 1500 a.C.', 'Relevos de barro com figuras magras e rãs; marca o fim da fase clássica'],
    ['Peñico', 'Vale do Supe, interior', 'c. 1800 – 1500 a.C.', 'Centro mais tardio; aberto ao público em 2025'],
    ['Sechín Bajo', 'Vale de Casma', 'c. 3500 a.C. (discutido)', 'Praça circular e arquitetura muito antiga; é mais a norte'],
    ['Huaricanga', 'Vale de Fortaleza', 'c. 3500 a.C. (discutido)', 'Possível um dos monumentos mais antigos da região'],
    ['Bandurria', 'Costa de Huaura', 'c. 3000 a.C.', 'Povoado de pescadores com monumentos; também se disputa a prioridade a Caral']
  ] } },
  { img: 'olm-caral-piramide-mayor', leg: 'Pirâmide Maior de Caral.' },
  { h: 'Caral' },
  'O sítio de **Caral** ocupa mais de **60 hectares** no seu núcleo monumental (o conjunto estende-se por bem mais), numa plataforma sobre o vale. Divide-se em duas partes: a parte «alta», com **seis grandes complexos** (cada um com pirâmide, praça e edifícios à volta), e a «baixa», onde está a **pirâmide do anfiteatro**. A **Pirámide Mayor** tem uma base de cerca de **150 × 110 m** (algumas fontes dão 160 × 150 m) e sobe, consoante a fonte, **18 a 28 m**; tem escadas, pátios e muros de pedra, e foi sendo recoberta e ampliada. Estima-se que a cidade tivesse alguns milhares de habitantes, e o vale do Supe, no conjunto, talvez uns vinte mil. A paisagem é seca e desértica, e a irrigação feita a partir do rio Supe foi decisiva.',
  { img: 'olm-caral-praca-circular', leg: 'Praça circular afundada de Caral.' },
  { img: 'olm-ia-caral-cidade', leg: 'Reconstrução hipotética de Caral, c. 2500 a.C. Ilustração gerada por IA.' },
  { h: 'Áspero e a costa' },
  '**Áspero** ficava na foz do rio Supe e era uma comunidade de **pescadores e marisqueiros**. Os arqueólogos identificaram cerca de **onze montes** artificiais, com plataformas de pedra, em cerca de 13 hectares. Nos montes, chamados *huacas*, havia oferendas, figurinhas de barro não cozido e enterros, incluindo o de uma criança. Em 2016 anunciou-se o achado do corpo de uma mulher de elite, c. 2500 a.C. Áspero fornecia peixe e marisco (anchovas, sardinhas, mexilhões) e recebia, em troca, produtos agrícolas do interior, sobretudo o **algodão** que se usava nas redes de pesca.',
  { img: 'olm-aspero', leg: 'Sítio arqueológico de Áspero, junto à foz do Supe.' },
  { h: 'Vichama e o fim da fase clássica' },
  '**Vichama**, em Végueta (vale de Huaura), foi ocupada depois de Caral, entre c. 1800 e 1500 a.C. Tem uns dezasseis montes, com cinco pirâmides, e **relevos de barro** nas paredes com figuras humanas e com seres meio humanos, meio anfíbios, entre eles rãs, muitas vezes esqueléticas. A equipa de Shady interpreta-os como o registo de um período de seca e de fome e de pedidos de água; é uma leitura **plausível** e não a única.',
  { img: 'olm-vichama', leg: 'Sítio arqueológico de Vichama, Végueta.' },
  { h: 'Os olmecas (México)' },
  { tabela: { cab: ['Sítio', 'Onde', 'Datas aproximadas', 'Para que ficou conhecido'], linhas: [
    ['San Lorenzo', 'Veracruz, rio Coatzacoalcos', 'c. 1400 / 1200 – 900 a.C.', 'Primeira grande capital; planalto artificial; 10 das 17 cabeças colossais; canais de pedra'],
    ['La Venta', 'Tabasco, perto da costa', 'c. 900 – 400 a.C.', 'Grande Pirâmide; oferendas de jade e serpentina; 4 cabeças; altares'],
    ['Tres Zapotes', 'Veracruz, Los Tuxtlas', 'c. 900 a.C. – século X d.C.', 'Duas cabeças; Estela C (32 a.C.); centro «epi-olmeca»'],
    ['El Manatí', 'Nascente-pântano, Veracruz', 'c. 1600 – 1200 a.C.', 'Oferendas rituais; bolas de borracha'],
    ['Laguna de los Cerros', 'Veracruz', 'Formativo (datas discutidas)', 'Grande centro com monumentos de basalto, perto das fontes de pedra'],
    ['Chalcatzingo', 'Morelos, planalto central', 'c. 900 – 500 a.C. (auge c. 700 – 500)', 'Relevos rupestres de estilo olmeca; mostra a influência fora do Golfo'],
    ['San José Mogote / Monte Albán', 'Vale de Oaxaca', 'c. 1500 – 500 a.C. / c. 500 a.C. em diante', 'Aldeias e depois capital zapoteca; escrita e calendário antigos']
  ] } },
  { h: 'San Lorenzo' },
  'San Lorenzo é um **planalto de uns 50 metros de altura** sobre a planície, em parte natural e em parte moldado pelos homens, com terraços e muros e uma rede de **canais de pedra** enterrados que levavam água. O núcleo ocupa cerca de 55 hectares; todo o complexo, com as zonas à volta, é muito maior. Estima-se que o centro cerimonial tenha tido alguns milhares de pessoas e a zona à volta dez mil ou mais, com margem de erro. Foi aqui que se achou o maior número de monumentos: mais de uma centena de esculturas de pedra, entre elas **dez cabeças colossais**. Foi escavado por Matthew Stirling (1945), por **Michael Coe e Richard Diehl** (1966–68) e, desde a década de 1990, por **Ann Cyphers**.',
  { img: 'olm-ia-san-lorenzo', leg: 'Reconstrução hipotética de San Lorenzo, c. 1000 a.C. Ilustração gerada por IA.' },
  { h: 'La Venta' },
  'A mais de 80 km de San Lorenzo, e mais perto do mar, **La Venta** foi construída sobre uma ilha entre pântanos. No eixo norte-sul, orientado cerca de 8° a oeste do norte, estão os edifícios do «Complexo A», rodeados de colunas de basalto, e a **Grande Pirâmide** (Complexo C), com cerca de **34 m** de altura. Em estudos antigos tinha-se por um cone; hoje pensa-se que seria uma pirâmide retangular de lados em degraus, que a erosão arredondou. As oferendas enterradas incluem dezenas de depósitos separados, com **objetos de jade**, três grandes **mosaicos de blocos de serpentina** (cerca de 4,5 × 6 m, com até 485 blocos cada, enterrados sob camadas de barro) e um enorme depósito de serpentina de cerca de 50 toneladas. As cabeças e muitos monumentos foram levados para o **Parque-Museo La Venta**, em Villahermosa, por iniciativa do poeta **Carlos Pellicer**; a parte sul do sítio está hoje coberta por uma refinaria de petróleo.',
  { img: 'olm-la-venta-piramide', leg: 'Grande Pirâmide de La Venta, Complexo C.' },
  { img: 'olm-ia-la-venta', leg: 'Reconstrução hipotética de La Venta, c. 600 a.C.; a forma original da pirâmide é incerta. Ilustração gerada por IA.' },
  { h: 'Tres Zapotes' },
  'No sopé de Los Tuxtlas, **Tres Zapotes** foi o primeiro sítio olmeca a ser conhecido (a cabeça achada em 1862 e descrita por Melgar em 1869) e o mais longevo: continuou habitado por cerca de dois mil anos, bem depois da queda de La Venta, e tornou-se um centro «epi-olmeca», com estelas de datas e texto. Tem duas cabeças colossais, as mais pequenas (menos de 1,5 m de altura), e a famosa **Estela C**.',
  { img: 'olm-cabeca-tres-zapotes', leg: 'Cabeça colossal de Tres Zapotes, Monumento A.' },
  { h: 'As ligações: Chavín e Monte Albán' },
  'Para se perceber o contexto, convém olhar para duas outras culturas, sem as tratar como «filhas» das duas primeiras. **Chavín de Huántar**, nos Andes do centro-norte do Peru, a mais de 3000 m de altitude, foi um grande centro religioso entre c. 900 e 200 a.C., mais de mil anos depois de Caral. **Monte Albán**, no vale de Oaxaca (México), foi fundada pelos zapotecas por volta de 500 a.C., quando La Venta chegava ao fim, e tem relevos e glifos que mostram ligação, e diferença, com o mundo olmeca.',
  { h: 'As rotas' },
  { lista: [
    '**Caral-Supe:** o vale ligava a **costa** (peixe, marisco, sal) ao **interior** (algodão, feijão, abóbora, milho, fruta), e provavelmente à **serra** e à bacia amazónica por trilhos; é possível que houvesse objetos e conchas de longe, mas isso é debatido.',
    '**Olmecas:** os **rios** do Golfo (Coatzacoalcos, Tonalá, Papaloapan) eram as estradas: levavam o basalto de Los Tuxtlas, a cerâmica e o jade. O jade vinha sobretudo do **vale do Motagua**, na Guatemala, e a obsidiana de oficinas do planalto da Guatemala e do México central, a algumas centenas de quilómetros.',
    '**Sem contacto entre as duas:** não há qualquer prova de relações entre os Andes e a Mesoamérica nesta época, e o tempo de cada uma é muito diferente.'
  ] }
];

const sociedade = [
  'Este capítulo organiza-se por temas, e em cada tema separa **Caral-Supe** e os **Olmecas**. Quase tudo o que se diz sobre a vida das pessoas é **inferência** a partir de edifícios, esculturas, restos de comida e enterros. Onde existe uma lenda ou uma hipótese ousada, vem assinalada.',
  { h: '1. Organização política' },
  '**Caral-Supe.** Não se encontram armas, muralhas, queimadas, nem esqueletos mutilados: as cidades não parecem ter sido fortificadas. Os arqueólogos propõem que o poder assentava na **gestão do algodão, da água e do culto**: uma elite de sacerdotes-administradores organizava o trabalho coletivo, em troca de proteção religiosa e de redistribuição. Mas pode haver armas e guerra que não vemos, e há quem avise que «sem guerra» é uma conclusão frágil. Há quem aponte representações de armas em Sechín Bajo, mais a norte, o que complica o quadro.',
  '**Olmecas.** As cabeças colossais e os tronos de basalto sugerem **chefes poderosos**, ou governantes, com uma elite hereditária, mas não sabemos se havia reis, nem como se organizava o poder. San Lorenzo e La Venta seriam o centro de **chefados** poderosos, com redes de aliados e de vassalos. Quando San Lorenzo caiu, os monumentos foram deliberadamente desfeitos e enterrados: pode ter havido uma revolta, uma conquista ou um rito de «encerramento», e é tudo hipótese.',
  { img: 'olm-altar-4', leg: 'Altar 4 de La Venta.' },
  { h: '2. Classes sociais' },
  'Em ambas as civilizações as casas das elites são maiores e mais bem construídas, e as oferendas de luxo (jade, serpentina, conchas) mostram diferenças de riqueza. Em Caral, as casas de pedra dos privilegiados ficam perto dos centros cerimoniais, e as das famílias comuns, de cana e barro, nas zonas à volta. Nos olmecas, as casas de pedra e as grandes oficinas concentram-se nos centros, e as aldeias à volta eram de agricultores e pescadores.',
  { h: '3. Religião' },
  '**Caral-Supe.** O que se vê são **templos em plataforma**, praças circulares afundadas e fogueiras de oferendas: queimavam-se objetos nos edifícios, e os templos eram periodicamente remodelados e enterrados sob novas fases, um padrão que se repetiria nos Andes durante milénios. As figuras de «deus dos bastões» e as imagens de rãs, serpentes e aves, nas fases mais tardias, sugerem uma religião ligada à **água** e aos animais.',
  '**Olmecas.** O símbolo mais famoso é o chamado **«homem-jaguar»** (em inglês *were-jaguar*): figuras de boca descaída, com os cantos para baixo, e uma fenda no alto da cabeça, que misturam traços humanos e de jaguar. Um mito dizia talvez que uma mulher e um jaguar tinham gerado uma raça de seres míticos, mas esta é uma interpretação moderna e discutida; outros veem aqui bebés, deuses da chuva ou da fertilidade. Aparecem também uma **serpente emplumada**, um **monstro da terra**, o **milho** como deus e o **jade** como substância sagrada.',
  { img: 'olm-were-jaguar', leg: 'Pequena figura olmeca de jade interpretada como homem-jaguar, American Museum of Natural History, Nova Iorque.' },
  { tabela: { cab: ['Símbolo / divindade (nome moderno)', 'O que pode representar', 'Onde aparece'], linhas: [
    ['Homem-jaguar (*were-jaguar*)', 'Ligação entre humanos e jaguares; fertilidade, poder; interpretação discutida', 'Esculturas, altares, jades'],
    ['Serpente / «dragão» olmeca', 'Terra, água, o céu; ligada ao governante', 'Altares e relevos de La Venta'],
    ['Deus do milho (hipótese)', 'Fertilidade, alimento', 'Estatuetas e machados de jade'],
    ['Deus dos bastões', 'Figura divina de pé, com cetros; reaparece em Chavín', 'Cabaça da região de Caral (c. 2250 a.C.); depois nos Andes'],
    ['Rã / anfíbio', 'Água e chuva', 'Relevos de Vichama'],
    ['Condor, pelicano, macaco', 'Animais sagrados; aparecem nas flautas e nos relevos', 'Instrumentos e relevos de Caral e dos sítios vizinhos']
  ] } },
  { h: '4. Economia' },
  '**Caral-Supe.** O que mais chama a atenção é o papel do **algodão** (*Gossypium barbadense*): os agricultores do vale produziam-no para fazer **redes de pesca** e roupas, e trocavam-no pelo peixe e marisco da costa. A hipótese de **Michael Moseley** (1975), a das «bases marítimas da civilização andina», dizia que o peixe, sobretudo a anchova, sustentou as primeiras cidades. Estudos recentes mostram, porém, que a dieta tinha **mais plantas** do que se pensava (feijão, abóbora, batata-doce, fruta, **milho**), e que o peixe era apenas uma parte. O trabalho de construção usava as **bolsas *shicra***: sacos de junco cheios de pedras, que serviam de enchimento, com a vantagem de resistirem aos sismos.',
  { img: 'olm-ia-shicra-construcao', leg: 'Construção com sacos de fibras vegetais (shicra), Caral, c. 2500 a.C. Ilustração gerada por IA.' },
  '**Olmecas.** A base era o **milho**, o feijão, a abóbora e o peixe dos rios e das lagunas, apoiados nos solos aluviais, que davam colheitas abundantes. Nas aldeias, o milho era processado com **cal** (nixtamalização), técnica que o torna nutritivo e que depois se espalhou por toda a Mesoamérica; mas, para o tempo dos olmecas, há ainda debate. O comércio de longa distância levava **basalto** das montanhas, **jade** da Guatemala e **obsidiana** de centenas de quilómetros, e trazia **cerâmica de estilo olmeca** a regiões distantes. Um estudo de 2005 mostrou que parte da cerâmica de estilo olmeca achada em Oaxaca tinha sido feita com barro de San Lorenzo, provando contactos reais.',
  { img: 'olm-ia-aspero-pesca', leg: 'Reconstrução hipotética da pesca em Áspero, c. 2500 a.C. Ilustração gerada por IA.' },
  { h: '5. Escrita e registo' },
  '**Caral-Supe.** Não há escrita no sentido que damos à palavra. Mas Ruth Shady e outros anunciaram o achado de **cordéis com nós**, em Caral, que lhes parecem **quipus** primitivos, isto é, um sistema de registo por cordas como o que os incas usaram milénios depois. A **datação** (cerca de 4500 anos) e a interpretação são **discutidas**, e o achado continua único e por decifrar: pode ter sido contabilidade, calendário ou outra coisa.',
  { img: 'olm-quipu-inca', leg: 'Quipu inca, apresentado apenas para comparação com Caral.' },
  '**Olmecas.** Aqui há alguns sinais, mas poucos e debatidos. O **bloco de Cascajal** (c. 1000 – 900 a.C.), uma placa de serpentina com **62 sinais** (28 diferentes), foi achado por operários, fora de contexto, o que gerou dúvidas; análises de 2019 apoiaram a sua autenticidade, e está por decifrar. O **objeto de San Andrés** (c. 650 a.C.) mostra uma ave e sinais que podem ser escrita. Mais tarde, a cultura **epi-olmeca** usou a **escrita ístmica**, em La Mojarra e na Estatueta de Tuxtla, esta em parte decifrada. A **Contagem Longa** do calendário e o conceito de **zero** são por vezes atribuídos aos olmecas, mas as datas mais antigas conhecidas (c. 36 e 32 a.C.) são de **depois** do fim da cultura, e o calendário de 260 dias aparece primeiro em Oaxaca (zapotecas, c. 600 a.C.).',
  { img: 'olm-cascajal', leg: 'Réplica do bloco de Cascajal; os sinais e a sua interpretação são debatidos.' },
  { h: '6. Casa, família e vida diária' },
  '**Caral-Supe.** As casas eram de **quincha** (cana entrançada rebocada com barro) ou de pedra, com pátios, e as famílias dormiam em esteiras. Não havia vasos de cerâmica, e usavam-se **cabaças** como recipientes, panos de algodão e cestos de junco. Cozinhava-se assando nas brasas ou em pedras quentes.',
  { img: 'olm-ia-casa-caral', leg: 'Habitação de quincha em Caral, reconstrução hipotética. Ilustração gerada por IA.' },
  '**Olmecas.** As casas eram de madeira, cana e barro, com telhado de palha, em aldeias nas margens dos rios e sobre plataformas de barro. Há tumbas, mas em solos ácidos e húmidos os ossos desfazem-se, e sabemos menos do que gostaríamos. As mulheres e os homens aparecem nas esculturas com cabelo, tocados e adornos variados.',
  { h: '7. Alimentação' },
  '**Caral-Supe.** Peixe e marisco (anchovas, sardinhas, mexilhões, amêijoas), **abóbora**, **feijão**, **batata-doce**, **milho**, fruta (goiaba, **lúcuma**, pacay). Com o clima seco, os restos orgânicos conservam-se bem, e é por isso que os cientistas sabem tanto sobre o que comiam.',
  '**Olmecas.** **Milho** (em tortilhas e em bebidas), **feijão**, **abóbora**, **chili**, peixe, tartaruga e aves dos rios, veado e cão. O **cacau** aparece em fases olmecas ou pouco depois (as provas mais antigas são de c. 1900 a.C. na costa do Pacífico, em Paso de la Amada), mas a sua ligação aos olmecas é incerta.',
  { h: '8. Vestuário' },
  '**Caral-Supe.** Panos de **algodão** tecidos em teares simples, esteiras de junco, colares de contas e de conchas. Os tecidos conservaram-se menos do que os ossos, mas as cordas, os fios e as redes de algodão aparecem.',
  '**Olmecas.** As esculturas mostram tangas e capas, **tocados** variados (chapéus, capacetes, turbantes) e grandes **brincos** e colares, que também aparecem em jade nas tumbas. Algumas cabeças têm «capacetes» com adornos: podem ser proteções do jogo de bola, ou insígnias de governantes.',
  { h: '9. Música e jogos' },
  '**Caral-Supe.** Um dos achados mais surpreendentes é o das **flautas de osso**: trinta e duas, sobretudo de **ossos de pelicano**, algumas com figuras de aves e outros animais gravadas, e várias dezenas de cornetas de osso de veado e de lama, achadas junto ao anfiteatro; uma datação de radiocarbono dá cerca de 2170 a.C. É a prova de que havia música ritual, talvez cerimónias com cantos e dança.',
  { img: 'olm-caral-flautas', leg: 'Conjunto de flautas de Caral; o museu e a espécie de ave de cada peça não são identificados na fonte.' },
  { img: 'olm-caral-anfiteatro', leg: 'Pirâmide do Anfiteatro de Caral.' },
  { img: 'olm-ia-anfiteatro-cerimonia', leg: 'Cerimónia em Caral, c. 2200 a.C.; práticas e vestuário representados de forma conjectural. Ilustração gerada por IA.' },
  '**Olmecas.** O **jogo de bola** com **bola de borracha** é associado às civilizações da Mesoamérica. As provas mais antigas são as **bolas de borracha de El Manatí** (c. 1600 a.C.), e o campo de jogo mais antigo conhecido (Paso de la Amada, Pacífico) não é olmeca. Nos próprios sítios olmecas não se identificou um campo inequívoco. As esculturas de pessoas com cinturões e proteções de cabeça são frequentemente associadas ao jogo, mas a ligação é **debatida**.',
  { img: 'olm-ia-jogo-bola', leg: 'Jogo de bola olmeca, representação hipotética, c. 1200 a.C. Ilustração gerada por IA.' },
  { h: '10. Ciência e conhecimento' },
  '**Caral-Supe.** Há indícios de conhecimento prático de **engenharia sísmica** (as bolsas *shicra* e as paredes inclinadas), de **irrigação** em canais e de **astronomia**: algumas estruturas parecem orientadas segundo os solstícios, mas a ideia de que Caral era «um observatório» é uma hipótese discutida.',
  '**Olmecas.** O **calendário** e a numeração mesoamericanos começaram provavelmente na região, mas as datas mais antigas conhecidas são posteriores e vêm de zapotecas, epi-olmecas e vizinhos do istmo. O **Complexo A de La Venta** está orientado cerca de 8° a oeste do norte, e as oferendas de **espelhos de minério de ferro** (ilmenite, magnetite) sugerem um uso ritual do polimento. A descoberta mais importante, para a história da ciência, é a da **borracha**: os olmecas misturavam o látex de *Castilla elastica* com o suco da trepadeira *Ipomoea alba* e obtinham uma borracha de qualidade, método que foi redescoberto por estudos de 1999.',
  { img: 'olm-ia-borracha', leg: 'Preparação de borracha com látex e plantas, reconstrução hipotética. Ilustração gerada por IA.' },
  { h: '11. Tecnologia e construção' },
  '**Caral-Supe.** Edifícios de **pedra** (de pedreira e de seixos do rio) rebocados com barro, sobre aterros contidos pelas bolsas *shicra*, num ambiente de sismos frequentes. Sem metal, sem roda, sem cerâmica.',
  '**Olmecas.** O talento maior foi na **escultura em pedra**: basalto, serpentina, jade, tudo sem metal, com percutores de pedra, areia e abrasivos. Também construíram em **terra** (aterros e pirâmides de barro, como a de La Venta) e em **pedra** (canais de San Lorenzo, colunas de basalto). Faltam-nos descrições de como se fazia: a maior parte do que se diz do transporte e do trabalho é reconstrução.',
  { h: '12. Guerra' },
  '**Caral-Supe.** Aparentemente quase sem guerra, como se disse. Em Vichama, o ambiente é de fome e de rituais, e não de combate. **Olmecas.** Há figuras de prisioneiros e de homens armados e de cenas de dominação nos relevos (em Chalcatzingo e noutros sítios), mas o panorama é pouco claro. A mutilação e o enterramento deliberado dos monumentos de San Lorenzo c. 900 a.C. pode ser sinal de conflito interno ou externo, mas, como se disse, é só hipótese.'
];

const personalidades = [
  'Nenhum nome de governante, sacerdote ou artista de Caral ou dos olmecas chegou até nós: não há textos que o digam. As figuras seguintes são, por isso, sobretudo **investigadores** que redescobriram estas culturas e deram forma ao debate. Há também, no fim, os **governantes sem nome**, cujas feições talvez vejamos nas cabeças colossais.',
  { h: 'Ruth Shady Solís (n. 1946)' },
  'Arqueóloga peruana, da Universidade Nacional Maior de San Marcos, em Lima. Reconheceu a escala de Caral a partir de 1994 e dirige as escavações desde a segunda metade da década de 1990. Defende que Caral é a **civilização mais antiga das Américas** e dedicou a vida a estudar e a proteger o sítio, um combate que passa por ocupações ilegais de terrenos. Em 2001 publicou, com Haas e Creamer, a datação de Caral na revista *Science*; mais tarde teve uma disputa pública sobre a atribuição do mérito do trabalho. Dirige também as escavações em Vichama e Peñico.',
  { img: 'olm-ruth-shady', leg: 'Ruth Shady Solís, arqueóloga responsável pelas investigações em Caral.' },
  { h: 'Paul Kosok (1896 – 1959)' },
  'Historiador e explorador americano, conhecido pelo estudo das **linhas de Nazca**. Em 1948 visitou o vale do Supe e descreveu os grandes montes de Caral, mas não percebeu o seu alcance, e só meio século depois o sítio foi estudado como merecia.',
  { h: 'Julio C. Tello (1880 – 1947)' },
  'O «pai da arqueologia peruana». Escavou **Chavín de Huántar** e defendeu que esta cultura era a «cultura-matriz» dos Andes. A sua tese tem um paralelo na de Caso para os olmecas, e foi também revista quando se descobriram Caral e outras culturas mais antigas.',
  { h: 'Michael E. Moseley' },
  'Arqueólogo americano. Em 1975 propôs a hipótese das **«bases marítimas da civilização andina»**: que a pesca abundante do Pacífico, sobretudo a anchova, permitiu a formação das primeiras sociedades complexas. Foi muito discutida e continua a ser refinada à luz dos estudos de dieta.',
  { h: 'Jonathan Haas e Winifred Creamer' },
  'Arqueólogos americanos que, com Shady, publicaram em 2001 as primeiras datações de radiocarbono de Caral e que estudaram o Norte Chico durante anos. Defenderam que a região era mais ampla e mais densa do que se supunha, e sustentaram a hipótese do papel do algodão e da irrigação.',
  { h: 'José Melgar y Serrano (século XIX)' },
  'Naturalista e erudito mexicano. Estudou a cabeça colossal achada em 1862 perto de Tres Zapotes e publicou a sua descrição em 1869, num documento que é considerado o primeiro registo científico de uma peça olmeca. Pensou, erradamente, que representava uma pessoa de origem africana, ideia que hoje se rejeita.',
  { h: 'Matthew Stirling (1896 – 1975)' },
  'Arqueólogo americano. Entre 1938 e 1946, com apoio da National Geographic Society e do Smithsonian, escavou Tres Zapotes, La Venta e San Lorenzo, e foi o primeiro a defender que os olmecas formavam uma civilização muito antiga. Achou a metade inferior da **Estela C**, com a data de 32 a.C.',
  { h: 'Alfonso Caso (1896 – 1970)' },
  'Arqueólogo mexicano, escavou **Monte Albán** a partir de 1931 e definiu a sequência cerâmica de Oaxaca. Em 1942, num congresso, declarou os olmecas a **«cultura-mãe»** da Mesoamérica, uma frase que moldou durante décadas o debate.',
  { h: 'Miguel Covarrubias (1904 – 1957)' },
  'Artista e antropólogo mexicano. Estudou a **arte olmeca** e defendeu a origem olmeca de muitos símbolos mesoamericanos, em particular o jaguar. As suas ilustrações ajudaram a fixar a imagem popular da cultura.',
  { h: 'Michael D. Coe (1929 – 2019)' },
  'Arqueólogo americano, da Universidade de Yale. Dirigiu, com Richard Diehl, a escavação de **San Lorenzo** em 1966–68 e definiu as fases da ocupação. Escreveu livros influentes sobre os olmecas e os maias.',
  { h: 'Ann Cyphers' },
  'Arqueóloga da UNAM (México). Dirige desde 1990 o projeto de investigação em **San Lorenzo**, e mostrou a dimensão do planalto, dos canais e das oficinas, e a vida quotidiana das elites e dos comuns.',
  { h: 'Kent Flannery e Joyce Marcus' },
  'Arqueólogos americanos que estudaram **San José Mogote** (Oaxaca). Foram os principais defensores da ideia de que os olmecas eram uma **cultura «irmã»** e não «mãe»: o desenvolvimento das elites em Oaxaca, defendem, é independente, com trocas de bens e ideias entre iguais.',
  { h: 'Carlos Pellicer Cámara (1897 – 1977)' },
  'Poeta e museólogo mexicano, nascido em Tabasco. Nos anos 1950 salvou os monumentos de La Venta da destruição pela indústria petrolífera, levando-os para o **Parque-Museo La Venta**, em Villahermosa, que concebeu.',
  { h: 'Rebecca González Lauck' },
  'Arqueóloga mexicana (INAH). Dirigiu desde a década de 1980 o projeto de **La Venta**: mapeou o sítio e promoveu medidas de proteção.',
  { h: 'Os governantes sem nome' },
  'As **cabeças colossais** são tidas por **retratos de governantes** (cada cara é diferente, e os «capacetes» têm adornos próprios), e talvez alguns tenham sido talhados a partir de **tronos** reaproveitados, depois de morto o chefe. Em Caral, a ausência de retratos e de nomes torna as elites ainda mais anónimas. Honrar estas pessoas é lembrar que a história da humanidade foi escrita sobretudo por gente de quem nunca soubemos o nome.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**Caral-Supe:** a ideia de que se pode ter **cidade e monumentos sem cerâmica**; o modelo andino de **templo em plataforma** remodelado e enterrado; o trabalho coletivo e a **irrigação**; a possível origem dos **quipus**; as flautas de osso; a figura do **deus dos bastões**, que reaparece em Chavín e nos Andes.',
    '**Olmecas:** o **estilo** de esculturas monumentais em pedra; a ideia de **centro cerimonial** com praça e pirâmide; o **jade** como símbolo de poder; a **borracha** e o **jogo de bola**; símbolos religiosos (o jaguar, a serpente, o milho) que atravessam a Mesoamérica; e, para alguns, os primeiros passos da **escrita** e do **calendário** mesoamericanos.',
    '**Os dois debates:** quanto à «cultura-mãe» (olmecas e Chavín), a visão atual é de **várias culturas em contacto**, com influências em todos os sentidos, e o papel exato de cada uma está em aberto.'
  ] },
  { h: 'A «cultura-mãe» ou a «cultura-irmã»?' },
  'Em 1942, Alfonso Caso e outros defenderam que os olmecas tinham dado origem à Mesoamérica, e Julio Tello pensava o mesmo sobre Chavín nos Andes. Hoje a maior parte dos arqueólogos é mais prudente. Há argumentos **a favor da influência olmeca**: o estilo de arte e os símbolos aparecem por toda a Mesoamérica entre 1200 e 600 a.C., e em 2005 um estudo da cerâmica mostrou que peças olmecas de Oaxaca saíram de barro de San Lorenzo. E há argumentos **contra**: há cerâmica, aldeias, canais de irrigação e arquitetura mais antigos fora do Golfo (Pacífico de Chiapas, vale do México, Oaxaca), e a elite de Oaxaca desenvolveu-se por conta própria. Daí a ideia, de Flannery e Marcus, de **«culturas-irmãs»**, que trocavam bens e ideias.',
  'Nos Andes passa-se algo parecido: **Caral é mais de mil anos mais antiga do que Chavín**, e tem já templos em plataforma, praças afundadas e deuses de bastões, o que mostra que a ideia de uma só «cultura-matriz» é demasiado simples.',
  { img: 'olm-chavin-lanzon', leg: 'Lanzón de Chavín de Huántar.' },
  { img: 'olm-chavin-raimondi', leg: 'Estela de Raimondi, de Chavín.' },
  { img: 'olm-danzante', leg: 'Relevo Danzante 8, Monte Albán, Oaxaca.' },
  { h: 'Arte: o basalto e o jade' },
  'A arte olmeca é, antes de tudo, **escultura**. As maiores peças são as **cabeças colossais**: 17 foram encontradas (10 em San Lorenzo, 4 em La Venta, 2 em Tres Zapotes e 1 em Rancho La Cobata), com **entre cerca de 1,2 e 3,4 m** de altura e **de umas 6 a cerca de 40 toneladas**. As feições são realistas: nariz largo, lábios grossos, olhos, cada uma diferente, com capacetes. Há também **altares** (que talvez fossem tronos), estelas, **estatuetas de jade** e serpentina e **máscaras**. Pequenos **machados** de jade («celts») e figuras com feições de bebé são típicos.',
  { img: 'olm-cabeca-san-lorenzo', leg: 'Cabeça colossal n.º 1 de San Lorenzo, Museu de Antropologia de Xalapa.' },
  { img: 'olm-cabeca-la-venta', leg: 'Cabeça colossal de La Venta, Monumento 1.' },
  { img: 'olm-senhor-limas', leg: 'Senhor de Las Limas, Museu de Antropologia de Xalapa.' },
  { img: 'olm-oferenda-4', leg: 'Oferenda 4 de La Venta, Museu Nacional de Antropologia, Cidade do México.' },
  { img: 'olm-mascara-jade', leg: 'Máscara de jade olmeca de Veracruz, c. 800 a.C.' },
  { h: 'Como se transportaram as cabeças?' },
  'O basalto veio das encostas do vulcão **Cerro Cintepec**, em **Los Tuxtlas**, a algumas dezenas de quilómetros de San Lorenzo e a mais de 100 km de La Venta (as distâncias variam consoante a fonte); as de Tres Zapotes vêm do Cerro el Vigía, mais perto. Os blocos, de muitas toneladas, foram trazidos sem rodas nem animais de carga. Há duas hipóteses principais: **por água**, em grandes jangadas de troncos, ao longo dos rios e da costa, e **por terra**, arrastados em trenós, por rolos e cordas, por muitas pessoas. Qualquer das hipóteses exigiria **centenas de pessoas durante meses** por cada cabeça (as estimativas variam). É provável que os dois métodos se tenham combinado, e **não há provas diretas**, nem representações antigas do transporte.',
  { img: 'olm-ia-transporte-cabeca', leg: 'Transporte fluvial de basalto, c. 1000 a.C.; método conjectural. Ilustração gerada por IA.' },
  { img: 'olm-ia-escultor', leg: 'Escultores olmecas, c. 1000 a.C., reconstrução hipotética. Ilustração gerada por IA.' },
  { h: 'Arquitetura' },
  '**Caral-Supe:** pirâmides de **pedra** em degraus, escadas centrais, **praças circulares afundadas**, bairros de casas, tudo no mesmo eixo, e a técnica das **bolsas *shicra***. **Olmecas:** construções de **terra** e de argila, com **plataformas**, uma «praça» e um eixo, colunas de **basalto** e canais de pedra, mais uma Grande Pirâmide em La Venta. Em ambos os casos, o conceito de centro cerimonial com **eixo e praça** marca todas as culturas seguintes da região.',
  { h: 'Onde ver o que resta' },
  { lista: [
    '**Peru:** a **Zona Arqueológica de Caral** (Património Mundial da UNESCO, a cerca de 180 km a norte de Lima; visita de um dia), e, na região, **Áspero**, **Vichama** e **Peñico** (aberto em 2025). Em Lima, o **Museu Nacional de Arqueologia, Antropologia e História do Peru** guarda a Estela de Raimondi.',
    '**México:** o **Museu de Antropologia de Xalapa** (Veracruz) é o melhor lugar para ver várias cabeças colossais, o Señor de las Limas e peças de San Lorenzo; o **Parque-Museo La Venta**, em Villahermosa (Tabasco), tem cabeças, altares e estelas de La Venta ao ar livre; o **Museu Nacional de Antropologia**, na Cidade do México, tem as peças de jade e a Oferenda 4. Há pequenos museus em **San Lorenzo** e **Tres Zapotes**, e **Monte Albán** (Oaxaca) é Património Mundial desde 1987.'
  ] },
  { h: 'A redescoberta' },
  'Os olmecas estiveram «perdidos» durante dois mil anos. O nome só chegou com a cabeça de Tres Zapotes (achada em 1862) e a **ideia de uma civilização** com as escavações de Stirling (1938–46); o radiocarbono, na década de 1950, mostrou que eram muito mais antigos do que os maias clássicos. Caral foi vista por Kosok em 1948 e **só reconhecida** como cidade nos anos 1990, depois de **Ruth Shady**. O radiocarbono (2001) mostrou que era contemporânea das pirâmides do Egito; a UNESCO classificou-a em 2009. As descobertas continuam: LiDAR (varrimento a laser a partir do ar) tem revelado complexos desconhecidos, como o de **Aguada Fénix**, e novos sítios andinos têm sido abertos ao público.',
  { h: 'O que ainda não sabemos' },
  { lista: [
    'Como se chamavam estes povos, e que línguas falavam.',
    'Se Caral é **realmente** a cidade mais antiga das Américas (há sítios com datas ainda mais antigas), e se o quipu de Caral é mesmo um quipu.',
    'Se os olmecas inventaram a escrita e o calendário, ou se foram os zapotecas e outros.',
    'Quem eram os retratados nas cabeças colossais e como foram transportadas.',
    'Porque acabaram Caral (clima? rios? sismos?) e San Lorenzo e La Venta (rios? vulcões? revoltas?).'
  ] }
];

const quiz = [
  { p: 'Quem dirige desde a década de 1990 as escavações da civilização de Caral, no Peru?', op: ['Julio C. Tello', 'Ruth Shady', 'Paul Kosok', 'Michael Coe'], certa: 1, exp: 'Ruth Shady, arqueóloga peruana da Universidade de San Marcos, reconheceu a escala de Caral a partir de 1994 e lidera o projeto.' },
  { p: 'Aproximadamente quando floresceu Caral?', op: ['c. 6000 a.C.', 'c. 2600 – 2000 a.C.', 'c. 1000 a.C.', 'c. 500 d.C.'], certa: 1, exp: 'As datações de radiocarbono dão cerca de 2600 a 2000 a.C. para o auge de Caral, na época das pirâmides do Egito.' },
  { p: 'Qual destes elementos NÃO se encontra em Caral?', op: ['Pirâmides de pedra', 'Praças circulares afundadas', 'Cerâmica', 'Flautas de osso'], certa: 2, exp: 'Caral é uma sociedade «pré-cerâmica»: não fazia vasos de barro cozido.' },
  { p: 'De que eram feitas as flautas achadas em Caral?', op: ['Madeira', 'Osso (sobretudo de pelicano)', 'Barro cozido', 'Cobre'], certa: 1, exp: 'Foram achadas trinta e duas flautas de osso, a maior parte de pelicano, junto ao anfiteatro.' },
  { p: 'Para que servia o algodão no vale do Supe, segundo os arqueólogos?', op: ['Só para fazer roupa de luxo', 'Redes de pesca, trocadas por peixe da costa', 'Moeda de metal', 'Para combustível'], certa: 1, exp: 'O algodão do interior servia, entre outras coisas, para redes de pesca; os pescadores da costa davam peixe e marisco.' },
  { p: 'O que são as bolsas shicra?', op: ['Instrumentos musicais', 'Sacos de junco cheios de pedras, usados na construção', 'Os primeiros quipus', 'Barcos de pesca'], certa: 1, exp: 'As shicra eram sacos de junco que enchiam os aterros e ajudavam os edifícios a resistir aos sismos; também serviram para datar Caral.' },
  { p: 'Que significa «olmeca» no seu sentido original?', op: ['Povo do jaguar', 'Gente da borracha', 'Filhos do Sol', 'Senhores do milho'], certa: 1, exp: '«Olmeca» vem do náuatle e quer dizer «gente da borracha»; o nome foi dado por engano a povos muito mais antigos.' },
  { p: 'Qual foi a primeira grande capital olmeca?', op: ['La Venta', 'Tres Zapotes', 'San Lorenzo', 'Monte Albán'], certa: 2, exp: 'San Lorenzo foi a grande cidade da Mesoamérica c. 1200 – 900 a.C.; La Venta lhe sucedeu.' },
  { p: 'Quantas cabeças colossais olmecas se conhecem?', op: ['3', '9', '17', '40'], certa: 2, exp: 'Conhecem-se dezassete: 10 em San Lorenzo, 4 em La Venta, 2 em Tres Zapotes e 1 em Rancho La Cobata.' },
  { p: 'De onde vinha o basalto das cabeças colossais?', op: ['Das montanhas de Los Tuxtlas', 'Dos Andes', 'Do mar', 'Da Guatemala'], certa: 0, exp: 'O basalto era extraído em vulcões de Los Tuxtlas, a dezenas de quilómetros dos sítios, e transportado por água e/ou por terra.' },
  { p: 'O que é o «homem-jaguar» (were-jaguar)?', op: ['Um jogo de bola', 'Uma figura que mistura traços humanos e de jaguar', 'Um tipo de cerâmica', 'Um rei de La Venta'], certa: 1, exp: 'É a imagem típica da arte olmeca, de boca descaída e fenda na cabeça; o seu significado é discutido.' },
  { p: 'O que é o bloco de Cascajal?', op: ['Uma cabeça colossal', 'Uma placa de serpentina com 62 sinais, talvez a escrita mais antiga das Américas', 'Um quipu de Caral', 'Um mapa de La Venta'], certa: 1, exp: 'Foi achado em Veracruz e datado de c. 1000 – 900 a.C.; a sua leitura e o seu estatuto de «escrita» estão em debate.' },
  { p: 'Que data da Contagem Longa traz a Estela C de Tres Zapotes?', op: ['32 a.C.', '1000 a.C.', '500 d.C.', '1862 d.C.'], certa: 0, exp: 'A Estela C de Tres Zapotes dá 7.16.6.16.18, ou 3 de setembro de 32 a.C., já na época epi-olmeca.' },
  { p: 'Que debate separa Alfonso Caso de Flannery e Marcus?', op: ['Se Caral é mais antiga do que Chavín', 'Se os olmecas foram a «cultura-mãe» ou uma «cultura-irmã»', 'Se as cabeças são de pedra ou de barro', 'Se o jade veio da China'], certa: 1, exp: 'Caso chamou-lhes «cultura-mãe» em 1942; Flannery e Marcus defendem culturas «irmãs», em desenvolvimento paralelo.' },
  { p: 'Que cultura andina, c. 900 – 200 a.C., é famosa pelo Lanzón e pelo «deus dos bastões»?', op: ['Chavín de Huántar', 'Nazca', 'Mochica', 'Inca'], certa: 0, exp: 'Chavín de Huántar, nos Andes, foi um grande centro religioso mais de mil anos depois de Caral; é por isso discutível a ideia de «cultura-matriz».' }
];

export default {
  id: 'olmecas-caral',
  cor: '#4a8a4a',
  emblema: '../assets/img/olmecas-caral.png',
  nome:    { pt: 'Olmecas e Caral', en: 'Olmec and Caral' },
  periodo: { pt: 'c. 3000 a.C. – 400 a.C.', en: 'c. 3000 BC – 400 BC' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
