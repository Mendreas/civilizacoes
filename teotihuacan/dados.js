// TEOTIHUACAN — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
// Nota de rigor: Teotihuacan não deixou textos que saibamos ler. O nome original, a língua e a etnia dos habitantes, e os nomes dos governantes locais, são DESCONHECIDOS. O que sabemos vem da arqueologia, da arte (sobretudo murais), de inscrições maias que a mencionam e de relatos astecas muito posteriores. a.C./d.C.
// Imagens: cada {img:'id'} procura o ficheiro  teotihuacan/img/id.jpg  (ver IMAGENS_TEOTIHUACAN.md para a lista e os prompts).
import EN from './dados-en.js';
import CRED from './creditos.js';

const visao = [
  { caixa: 'Em resumo', texto: [
    '**Teotihuacan** foi uma das primeiras grandes cidades das Américas e uma das maiores do mundo no seu tempo. Ficava no **vale do México**, a cerca de 50 km a nordeste da atual Cidade do México, a mais de 2300 m de altitude. Entre o século I a.C. e o século VI d.C. passou de aldeias dispersas a uma metrópole planeada, de talvez **100 000 habitantes ou mais** (as estimativas vão de cerca de 100 000 a 200 000 e são debatidas), com uma avenida monumental, pirâmides gigantes e milhares de casas de pedra e cal.',
    'Não sabemos como a cidade se chamava a si própria, que língua falava a sua população, nem o nome de um único dos seus governantes. «Teotihuacan» é um nome **asteca**, dado por gente que viveu mil anos depois e que encontrou as ruínas já silenciosas. Mesmo assim, a influência da cidade chegou a **Monte Albán** (Oaxaca), às cidades **maias** (Tikal, Copán, Kaminaljuyu) e à costa do Golfo. Por volta de **550 d.C.** o centro cerimonial foi em parte queimado e a cidade entrou em declínio; por volta de 650–750 já era uma sombra do que fora.'
  ] },
  { img: 'teo-mapa-mesoamerica', leg: 'Mapa esquemático da Mesoamérica com Teotihuacan e as regiões com que manteve contacto (c. 100 a.C.–600 d.C.).' },
  { h: 'Onde ficava' },
  'Teotihuacan situava-se num pequeno vale lateral do **vale do México**, uma bacia alta, rodeada de vulcões e de montanhas, com lagos e nascentes. O sítio tem **água de nascente** abundante, solos férteis para o milho e, nas proximidades, jazidas de **obsidiana** (um vidro vulcânico, o melhor «aço» da Idade da Pedra), sobretudo a de **Pachuca**, a nordeste. Estas duas vantagens, água e obsidiana, estão entre as razões habitualmente apontadas para o seu sucesso.',
  'A cidade ocupava cerca de **20 km²** no seu auge (a área arqueológica protegida é muito maior). Foi traçada em **quadrícula**, com um eixo principal, a **Avenida dos Mortos**, desviado cerca de 15,5° para leste do norte, uma orientação que se repete em quase todos os edifícios e cuja razão exata (astronómica? ligada a uma montanha sagrada? ao calendário?) é debatida.',
  { img: 'teo-vista-aerea', leg: 'Reconstituição imaginada de Teotihuacan vista de cima, c. 450 d.C.: a Avenida dos Mortos, as pirâmides e os conjuntos residenciais (imagem ilustrativa gerada por IA).' },
  { h: 'Quando existiu' },
  'A cronologia de Teotihuacan assenta numa sequência de fases de cerâmica estabelecida pelo arqueólogo **René Millon** e pela sua equipa, com nomes que não são teotihuacanos, mas sim palavras convencionais. As datas são aproximadas e há quem proponha ajustes com base em datações por radiocarbono.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Patlachique', 'c. 100 a.C. – 1 d.C.', 'Aglomerado de povoações; chegada de populações de outras zonas do vale, por razões debatidas; início do planeamento'],
    ['Tzacualli', 'c. 1 – 150 d.C.', 'Cidade já com dezenas de milhares de pessoas; início dos grandes monumentos (Pirâmide do Sol e Pirâmide da Lua, em datas debatidas)'],
    ['Miccaotli', 'c. 150 – 200', 'Traçado da Avenida dos Mortos; construção da Ciudadela e do Templo da Serpente Emplumada'],
    ['Tlamimilolpa', 'c. 200 – 350', 'Expansão da cidade; os conjuntos habitacionais de pedra; bairros de estrangeiros (Oaxaca, Golfo)'],
    ['Xolalpan', 'c. 350 – 550', 'Apogeu: população máxima, murais, comércio de longa distância; contactos com as cidades maias (378 d.C.)'],
    ['Metepec', 'c. 550 – 650', 'Incêndio e destruição de edifícios do centro; perda de população'],
    ['Oxtotipac e depois', 'c. 650 – 750', 'Ocupação reduzida e dispersa; a cidade deixa de ser um poder regional']
  ] } },
  { h: 'Quem eram?' },
  'Aqui está o ponto mais difícil e mais honesto: **não sabemos**. Teotihuacan era uma cidade **multiétnica**, com bairros de gente vinda de Oaxaca, do Golfo e de outras regiões. Mas a língua do grupo dominante é desconhecida. Foram propostos o **nahua** (a língua dos astecas; uma hipótese que dá ao nome «Teotihuacan» um sentido natural, mas que implicaria que os nahuas já ali estavam há mil anos), o **otomi**, o **totonaco**, o **mixe-zoque** e outras, e nenhuma está provada. Os próprios teotihuacanos não deixaram textos legíveis: tinham sinais e símbolos, mas ninguém demonstrou que formassem uma escrita completa. As inscrições **maias** referem uma «gente de» ou «senhores de» um lugar que alguns epigrafistas leem como **Puh**, «lugar das canas» (um nome parecido com o «Tollan» nahua), mas a leitura é discutida.',
  { h: 'Porque importam' },
  { lista: [
    '**Uma das primeiras metrópoles das Américas:** uma cidade planeada, com ruas, drenagem, conjuntos de habitação em série e uma enorme avenida cerimonial, num continente sem cavalos, sem roda de transporte e sem metal.',
    '**Uma sociedade sem rei visível:** não há retratos de reis, nem túmulos reais confirmados, nem textos que nomeiem governantes. Quem mandava e como é uma das grandes questões abertas.',
    '**Arte mural:** os murais de Teotihuacan, vermelhos, verdes e azuis, com deuses, sacerdotes e animais, são das pinturas mais belas da América antiga.',
    '**Comércio e influência:** a cidade controlou a obsidiana e exportou ideias, estilo e talvez poder até à Guatemala.',
    '**Um mistério em aberto:** de onde veio, quem eram, porque ardeu: cada ano de escavação (como o túnel sob o Templo da Serpente Emplumada) muda o que sabemos.',
    '**O nome de «lugar dos deuses»:** para os astecas era onde os deuses se reuniram para criar o Quinto Sol, o Sol da sua era. A cidade já era sagrada e antiga para eles.'
  ] },
  { img: 'teo-avenida-mortos', leg: 'Avenida dos Mortos vista da Pirâmide da Lua; ao fundo, a Pirâmide do Sol.' },
  { img: 'teo-piramide-lua', leg: 'Pirâmide da Lua e a sua praça, Teotihuacan.' },
  { img: 'teo-cidade-reconstrucao', leg: 'Reconstituição conjetural de Teotihuacan, c. 450 d.C. Ilustração gerada por IA.' },
  { caixa: 'O México hoje', texto: 'A zona arqueológica de Teotihuacan foi inscrita no Património Mundial da UNESCO em **1987** e é um dos sítios mais visitados do México, com mais de um milhão de visitantes por ano. Fica no município de San Juan Teotihuacán, no Estado do México. As pirâmides e a avenida continuam a ser lugar de cerimónias, sobretudo no equinócio de março, quando muitas pessoas vão ali «carregar a energia do Sol» (uma tradição moderna, sem relação demonstrada com a antiga).' }
];

const linha = [
  'Esta linha do tempo segue o que a arqueologia permite afirmar. Como não há textos teotihuacanos, **quase todas as datas são aproximadas** e baseiam-se em cerâmica, radiocarbono e, para os contactos com os maias, nas inscrições **maias**. As lendas astecas estão marcadas como tal.',
  { linha: [
    { d: 'c. 1000 – 100 a.C.', t: 'Antes da cidade', x: 'O vale do México tinha aldeias agrícolas e centros maiores, como **Cuicuilco** (no sul do vale), com uma pirâmide circular. No vale de Teotihuacan havia apenas pequenas povoações. A agricultura de milho, feijão e abóbora já sustentava populações densas, o que preparou o terreno.' },
    { d: 'c. 100 a.C.', t: 'Reunião de gente', x: 'Surge um grande povoado no sítio de Teotihuacan, para onde se mudam em poucas gerações dezenas de milhares de pessoas das regiões vizinhas. As causas são debatidas: a pressão de erupções vulcânicas na região, a força das nascentes, o comércio da obsidiana, uma atração religiosa, ou decisões de uma elite que levou gente à força. Hoje pensa-se que a erupção do Xitle é **posterior** ao que se julgava (datas entre c. 245 e c. 315 d.C. foram propostas) e por isso não explica a fundação.' },
    { d: 'c. 1 – 150 d.C.', t: 'Planeamento da cidade', x: 'Começa o grande traçado em quadrícula e a construção das primeiras fases da **Pirâmide do Sol** e da **Pirâmide da Lua** (datas debatidas: as primeiras fases da Lua remontam a c. 100 d.C.). Há um maciço trabalho coletivo: centenas de milhares de metros cúbicos de terra e pedra.' },
  ] },
  { img: 'teo-cuicuilco-xitle', leg: 'Reconstituição conjetural da erupção do Xitle (c. 250–300 d.C., data debatida) e dos povoados do sul do vale do México. Ilustração gerada por IA.' },
  { img: 'teo-construcao-sol', leg: 'Construção conjetural da Pirâmide do Sol, séculos I–II d.C. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 150 – 200', t: 'Avenida dos Mortos, Ciudadela e Serpente Emplumada', x: 'Constrói-se a **Ciudadela** (um grande recinto, com cerca de 400 m de lado, e não uma fortaleza, apesar do nome espanhol) e, dentro dela, o **Templo da Serpente Emplumada**. Na dedicação, **mais de duzentas pessoas** foram sacrificadas e enterradas em fossas, muitas com adornos militares. Foi o maior ato deste género conhecido na cidade.' },
    { d: 'c. 200 – 350', t: 'A cidade-metrópole', x: 'A população cresce e a cidade espalha-se. Constroem-se os grandes **conjuntos habitacionais** de pedra, com pátios e pinturas. Aparecem bairros de estrangeiros: o **bairro de Oaxaca (Tlailotlacan)**, ligado aos zapotecas, e o chamado **Barrio dos Comerciantes**, com ligações à costa do Golfo.' },
    { d: 'c. 250 – 300 (debatido)', t: 'O Xitle e Cuicuilco', x: 'A erupção do **Xitle** cobre de lava os campos e as ruínas de Cuicuilco, no sul do vale. Teotihuacan fica sem rival na região, onde já seria a maior cidade.' },
    { d: 'c. 300 – 400', t: 'Os bairros de fora', x: 'O **bairro de Oaxaca** consolida-se, com túmulos de câmara de tipo zapoteca e cerâmica de Oaxaca; análises a ossos revelam que muitos dos que ali foram enterrados nasceram noutro sítio. Em Monte Albán, a capital zapoteca, aparecem por seu lado pinturas e cerâmica que mostram contactos com Teotihuacan, num trânsito de dois sentidos.' },
    { d: '378 d.C.', t: 'Chegada a Tikal', x: 'Segundo inscrições maias (sobretudo as **estelas de Tikal**, estudadas por David Stuart, Simon Martin e outros), um personagem chamado **Siyaj K’ak’** («Fogo Nasce») chega a **El Perú-Waka** a 8 de janeiro e a **Tikal** em meados de janeiro (as leituras apontam para 14–16 de janeiro), no mesmo dia em que morre o rei local, **Chak Tok Ich’aak I**. Siyaj K’ak’ vinha «do oeste», e as imagens que se lhe associam (armas, penachos, rostos de Tlaloc) são teotihuacanas. Teria sido um general a serviço de um senhor de Teotihuacan, chamado **Lançador-de-Lanças Coruja**. O que isto significa, **conquista militar, intervenção diplomática ou aliança política**, é muito discutido.' },
    { d: '379', t: 'Um novo rei em Tikal', x: 'Sobe ao trono de Tikal **Yax Nuun Ayiin I** («Primeiro Crocodilo»), identificado como filho do Lançador-de-Lanças Coruja. Mais tarde era representado em Tikal com vestes teotihuacanas. O modelo repete-se em **Uaxactun** e noutros centros.' },
  ] },
  { img: 'teo-chegada-tikal', leg: 'Chegada conjetural de um enviado teotihuacano a Tikal, 378 d.C. Ilustração gerada por IA.' },
  { img: 'teo-estela31-tikal', leg: 'Estela 31 de Tikal, dedicada em 445 d.C., com figuras ao estilo de Teotihuacan; Museo Sylvanus G. Morley, Tikal.' },
  { linha: [
    { d: 'c. 350 – 550', t: 'Apogeu', x: 'Na fase Xolalpan a cidade atinge o máximo de população e de riqueza. Pintam-se os **murais** de Tepantitla, Tetitla e Atetelco. O estilo de Teotihuacan aparece em lugares muito distantes: **Kaminaljuyu** (Guatemala) e **Matacapan** (Veracruz). Em **Copán**, nas Honduras, a dinastia que a tradição data de c. 426 usa iconografia de Teotihuacan, mas a origem do seu fundador é debatida.' },
    { d: '445', t: 'Estela 31 de Tikal', x: 'O rei **Siyaj Chan K’awiil II** manda erguer a Estela 31, que recorda o seu pai Yax Nuun Ayiin I e mostra, nos lados, esse pai ladeado por guerreiros com traje de Teotihuacan; na frente está o próprio Siyaj Chan K’awiil II. É o documento mais claro sobre as ligações entre as duas cidades, escrito 67 anos depois dos factos.' },
    { d: 'c. 535 – 536', t: 'Um mau clima', x: 'Erupções vulcânicas (cuja localização é debatida) escurecem o céu de grande parte do hemisfério norte, provocando secas e fome. Alguns estudos de esqueletos de crianças de Teotihuacan mostram sinais de má nutrição nesta altura. O efeito concreto na cidade é discutido.' },
    { d: 'c. 550', t: 'O incêndio', x: 'Vários edifícios da **Avenida dos Mortos** (o Templo da Serpente Emplumada, palácios e templos) são **queimados**; imagens são partidas e fragmentadas. A destruição concentra-se nos edifícios das elites e do culto, e por isso a hipótese hoje preferida pela maioria dos arqueólogos é uma **revolta interna** ou um colapso político, e não uma invasão de fora, embora não esteja demonstrado.' },
  ] },
  { img: 'teo-queda-incendio', leg: 'Reconstituição conjetural do incêndio do centro cerimonial, c. 550 d.C. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 550 – 650', t: 'Metepec: uma cidade mais pequena', x: 'A população diminui bastante, mas não desaparece: algumas zonas continuam habitadas e a cerâmica de Teotihuacan ainda se produz. Os centros do vale e da região, como **Xochicalco**, **Cholula** e **Cacaxtla**, ganham importância.' },
    { d: 'c. 650 – 750', t: 'Fim de uma era', x: 'A ocupação reduz-se a grupos dispersos. Alguns novos habitantes (a cultura chamada **Coyotlatelco**) instalam-se entre as ruínas. A cidade já não é um poder regional.' },
    { d: 'c. 900 – 1150', t: 'Tula e os toltecas', x: 'A cidade de **Tula**, no norte do vale, domina a região. Os astecas, séculos depois, chamaram «toltecas» a todos os grandes artistas e construtores do passado, incluindo, talvez, a gente de Teotihuacan.' },
    { d: 'séc. XIV – XV', t: 'Os astecas visitam as ruínas', x: 'Os **mexicas** (astecas) peregrinam a Teotihuacan, dão nome ao local e às pirâmides (o «Sol» e a «Lua», a «Avenida dos Mortos») e acreditam que ali os deuses se reuniram e **criaram o Quinto Sol**. Esta lenda, conservada por frei **Bernardino de Sahagún**, é um mito azteca; não diz nada sobre a cidade original. Encontram-se ofertas astecas enterradas entre as ruínas.' },
    { d: 'c. 1675', t: 'Sigüenza y Góngora', x: 'O erudito mexicano **Carlos de Sigüenza y Góngora** visita e escava ali, nas primeiras explorações modernas de que há notícia.' },
    { d: '1905 – 1910', t: 'Leopoldo Batres', x: 'O inspetor de monumentos **Leopoldo Batres** limpa e restaura a **Pirâmide do Sol** para as comemorações do centenário da independência do México (1910). O restauro é muito criticado hoje pelos métodos e pelos excessos.' },
    { d: '1917 – 1922', t: 'Manuel Gamio', x: '**Manuel Gamio** dirige um estudo do vale de Teotihuacan que junta arqueologia, antropologia e sociedade, e escava a Ciudadela (década de 1920).' },
    { d: '1962 – 1973', t: 'O mapa da cidade', x: 'O **Teotihuacan Mapping Project**, de **René Millon**, regista todos os edifícios à superfície e produz o mapa da cidade, com cerca de dois mil conjuntos habitacionais. Foi o ponto de partida de grande parte do que hoje se diz sobre a cidade.' },
    { d: '1980 – 1982', t: 'A Serpente Emplumada', x: 'Escavações dirigidas por **George Cowgill**, **Rubén Cabrera** e **Saburo Sugiyama** descobrem as grandes sepulturas coletivas sob o Templo da Serpente Emplumada.' },
    { d: '1987', t: 'Património Mundial', x: 'A UNESCO inscreve a zona arqueológica de Teotihuacan.' },
    { d: '1998 – 2004', t: 'A Pirâmide da Lua', x: 'Sugiyama e Cabrera exploram o interior da **Pirâmide da Lua** e encontram enterramentos de sacrificados, de personagens importantes e de animais enterrados vivos.' },
    { d: '2003 – 2017 e depois', t: 'O túnel', x: 'Depois de chuvas fortes abrirem um buraco, **Sergio Gómez Chávez** descobre (2003) uma passagem de cerca de **100 m**, selada por volta de 200 d.C., sob o Templo da Serpente Emplumada. Contém câmaras com **dezenas de milhares de objetos**: conchas, pedras verdes, bolas de pirite, e esferas e poças de **mercúrio líquido**. Investigação em curso.' }
  ] },
  { h: 'Redescoberta' },
  'Teotihuacan nunca foi totalmente esquecida: foi conhecida dos astecas e, depois, dos espanhóis, que viam as pirâmides como obra de gigantes. O que mudou com o século XX foi a arqueologia científica. E o nome «Teotihuacan», o do «lugar dos deuses», é de uma cidade que, ainda hoje, **não sabemos como se chamava**.'
];

const mapa = [
  'Teotihuacan era uma cidade em **quadrícula**, com cerca de 20 km², dividida em **quadrantes** pela Avenida dos Mortos (norte-sul) e por uma avenida perpendicular (este-oeste). O centro cerimonial ficava no cruzamento. Os edifícios mais importantes são os seguintes (os nomes são na maioria astecas ou espanhóis; os nomes verdadeiros perderam-se).',
  { tabela: { cab: ['Lugar', 'O que é', 'Datas aproximadas', 'Importância'], linhas: [
    ['Avenida dos Mortos', 'Eixo principal, c. 4 km de comprimento e 40 m de largura', 'c. 150 – 350', 'Espinha dorsal da cidade; nome dado pelos astecas (julgavam os montes túmulos)'],
    ['Pirâmide do Sol', 'Maior edifício da cidade (base c. 225 m; altura c. 65 m)', 'c. 100 – 250 (debatido)', 'Cerca de um milhão de metros cúbicos de terra e pedra; túnel e caverna por baixo'],
    ['Pirâmide da Lua', 'Pirâmide menor (c. 45 m), no fim da avenida', 'Sete fases, c. 100 – 450', 'Enterramentos de sacrificados; praça com doze plataformas'],
    ['Ciudadela', 'Recinto quadrado de c. 400 m de lado', 'c. 150 – 250', 'Palácio ou centro de poder; Templo da Serpente Emplumada'],
    ['Templo da Serpente Emplumada', 'Pirâmide de seis níveis, dentro da Ciudadela', 'c. 200', 'Sacrifícios maciços; túnel por baixo'],
    ['Palácio de Quetzalpapalotl', 'Palácio ao lado da Pirâmide da Lua', 'c. 450 – 500', 'Pilares esculpidos com quetzal e borboleta'],
    ['Tepantitla, Tetitla, Atetelco, Zacuala', 'Conjuntos de habitação de elite com murais', 'c. 350 – 550', 'Os melhores murais'],
    ['Bairro de Oaxaca (Tlailotlacan)', 'Bairro de gente de Oaxaca, a oeste', 'c. 300 – 550', 'Túmulos de tipo zapoteca; cerâmica local de Oaxaca'],
    ['Barrio dos Comerciantes', 'Bairro na periferia com ligações ao Golfo', 'c. 300 – 550', 'Cerâmica de várias regiões; casas circulares'],
    ['La Ventilla', 'Bairro com oficinas e conjuntos de habitação', 'c. 200 – 550', 'Sinais gráficos descobertos nos muros']
  ] } },
  { img: 'teo-esquema-urbano', leg: 'Esquema simplificado do traçado de Teotihuacan, com a Avenida dos Mortos e os quadrantes. Esquema desenhado. (Imagem ilustrativa gerada por IA.)' },
  { h: 'A Pirâmide do Sol' },
  'A **Pirâmide do Sol** é o maior edifício da cidade e um dos maiores da América antiga. Mede cerca de **225 m** de lado e **65 m** de altura (as medidas variam, e antes do restauro de Batres pode ter sido mais alta, com um templo no topo). É feita de terra e de pedra, em cinco corpos, e estava coberta de estuque pintado. Em **1971**, foi descoberta uma passagem, de uns **100 m**, que leva a uma **caverna** sob a pirâmide; discute-se se a caverna é natural ou artificial e se ligou o lugar ao culto da água e dos antepassados. O nome «do Sol» é dos astecas e não sabemos a quem era dedicada.',
  { img: 'teo-piramide-sol', leg: 'Pirâmide do Sol, Teotihuacan' },
  { h: 'A Pirâmide da Lua e a Praça da Lua' },
  'No extremo norte da avenida, a **Pirâmide da Lua** foi sendo ampliada em **sete fases**. Dentro dela, os arqueólogos encontraram **enterramentos de sacrificados**, muitos com as mãos atadas atrás das costas, e oferendas de obsidiana, conchas, pedras verdes e **animais** (pumas, lobos, águias, serpentes) enterrados vivos em cativeiro, sinal de um ritual de poder sobre as forças da natureza. A praça em frente é rodeada por plataformas e templos.',
  { h: 'A Ciudadela e a Serpente Emplumada' },
  'A **Ciudadela** é um vasto recinto com um pátio central e templos em redor. O seu nome é espanhol e engana: não é uma cidadela militar, mas um conjunto cerimonial e político (talvez uma residência dos governantes, o ponto é debatido). Dentro dela, o **Templo da Serpente Emplumada** tem a fachada coberta de **cabeças esculpidas** de serpente emplumada e de outro ser com focinho (por vezes interpretado como a «serpente da guerra» ou como Tlaloc, uma questão em aberto), alternando com conchas, e foi pintado de cores vivas. Por baixo, as escavações encontraram **sepulturas coletivas de sacrificados**, a maioria homens com adornos de guerra: uma demonstração de poder coletivo e, talvez, de renovação do tempo.',
  { img: 'teo-ciudadela', leg: 'Ciudadela e Templo da Serpente Emplumada, Teotihuacan' },
  { img: 'teo-serpente-emplumada', leg: 'Fachada do Templo da Serpente Emplumada, com cabeças de serpente em relevo.' },
  { img: 'teo-esquema-tunel', leg: 'Esquema simplificado e conjetural do túnel sob o Templo da Serpente Emplumada, c. 100 m de comprimento. Esquema desenhado. (Imagem ilustrativa gerada por IA.)' },
  { h: 'O túnel sob a Serpente Emplumada' },
  'A descoberta de **2003** é uma das mais importantes das últimas décadas. Um túnel de cerca de **100 m**, a **14–18 m de profundidade**, foi **selado** por volta de 200 d.C., provavelmente de propósito. No interior, os arqueólogos encontraram **câmaras ao fundo**, com milhares de objetos: pedra verde esculpida, conchas, sementes, cerâmica, bolas de **pirite** que brilham como pequenos sóis, e **mercúrio líquido** (um mineral raro e perigoso) que talvez simulasse um lago do mundo subterrâneo. A interpretação corrente é a de uma representação do **submundo**. Alguns investigadores pensam que poderia ter sido o túmulo de um governante; até agora não se encontrou um corpo que o prove.',
  { h: 'O Palácio de Quetzalpapalotl' },
  'Junto à Praça da Lua ergue-se o **Palácio de Quetzalpapalotl** («quetzal-borboleta»), restaurado nos anos 1960, com um pátio rodeado de **pilares esculpidos** de aves e de borboletas, com restos de pintura vermelha. Por baixo, está o **Palácio das Conchas Emplumadas**, mais antigo. Era residência de sacerdotes ou de elites.',
  { img: 'teo-quetzalpapalotl', leg: 'Pátio do Palácio de Quetzalpapalotl, Teotihuacan' },
  { h: 'Teotihuacan e o resto da Mesoamérica' },
  'A cidade manteve contactos com regiões muito distantes. Os principais são estes:',
  { lista: [
    '**Oaxaca e Monte Albán:** os zapotecas de **Monte Albán**, a cerca de 400 km de distância, são uma civilização à parte, e as relações parecem ter sido **entre iguais**: trocas de presentes, enviados, e até um bairro de gente de Oaxaca em Teotihuacan. Em Monte Albán encontram-se também pinturas e cerâmica de Teotihuacan, mas não há provas de conquista.',
    '**Os maias:** a relação mais famosa é a de **Tikal** (378 d.C.) e a dos centros vizinhos (Uaxactun, Copán). A discussão é entre **conquista**, **uma aliança de elites** e **imitação de prestígio**; o mais provável é que tenha havido um pouco de cada uma.',
    '**Kaminaljuyu e Matacapan:** em Kaminaljuyu (hoje na Cidade da Guatemala) há edifícios e túmulos ao estilo teotihuacano; Matacapan (Veracruz) tem um conjunto que pode ter sido uma colónia ou entreposto.',
    '**O Golfo e o Ocidente:** cerâmica, conchas, algodão, cacau e penas vinham de longe e eram trocados por obsidiana e outros artigos.'
  ] },
  { img: 'teo-monte-alban', leg: 'Plaza Principal de Monte Albán, a capital zapoteca, Oaxaca.' },
  { img: 'teo-tikal-templo', leg: 'Templo I e a Grande Praça, Tikal, Guatemala.' },
  { img: 'teo-bairro-oaxaca', leg: 'Reconstituição conjetural do bairro de Oaxaca (Tlailotlacan), Teotihuacan, séc. V d.C. Ilustração gerada por IA.' },
  { h: 'Um mapa de poder? Os limites da influência' },
  'Convém ter prudência: Teotihuacan **não foi, de certeza, um império** como o romano. Não conhecemos fronteiras, tributos nem administração provincial. Os arqueólogos discutem se foi um **Estado expansionista**, uma **potência comercial** ou um **centro religioso** cuja moda e prestígio se espalharam. Nos últimos anos a tendência é falar de **redes de influência** e de relações diferentes com cada região.'
];

const sociedade = [
  { h: '1. Organização política' },
  'Esta é a maior dúvida. Nas cidades maias e egípcias há retratos de reis, túmulos, inscrições com nomes. Em Teotihuacan **não há nada disso** (ou nada identificado com certeza). Duas grandes teorias: um **governo centralizado**, com uma elite de sacerdotes-governantes, ou um governo **coletivo**, partilhado por vários grupos de elite (nobres das várias casas, conselhos), que explicaria a ausência de retratos individuais. Há quem veja uma evolução: um poder pessoal no início, e mais coletivo depois do século III.',
  'O que se sabe é que a cidade foi **planeada** e que exigiu **organização enorme**: trabalho coletivo, drenagem, abastecimento, ordem urbana. A cidade também teve soldados (a arte mostra guerreiros com dardos e escudos), e o sacrifício humano ligado à construção dos templos era uma forma de afirmação do poder.',
  { h: '2. Classes sociais' },
  { lista: [
    '**Elites:** sacerdotes, governantes e comerciantes ricos; viviam em grandes conjuntos habitacionais ricamente pintados, perto do centro.',
    '**Artesãos especializados:** obsidiana, cerâmica, pedra, pintura, plumas; muitos trabalhavam em bairros ou oficinas por ofício.',
    '**Camponeses e trabalhadores:** cultivavam os campos à volta e vinham trabalhar para a cidade.',
    '**Estrangeiros:** comunidades de Oaxaca, do Golfo e de outras regiões, com os seus costumes próprios (por exemplo, os túmulos).',
    '**Os sacrificados:** guerreiros ou cativos, e talvez gente da própria cidade, usados nos ritos de dedicação.'
  ] },
  { h: '3. Habitação: os conjuntos de apartamentos' },
  'A grande novidade urbana de Teotihuacan foram os **conjuntos habitacionais** (os arqueólogos chamam-lhes «apartment compounds»): cerca de **2000** edifícios em quadrado, de pedra e cal, **com paredes altas e sem janelas para a rua**, um pátio central com altar e várias casas e quartos à volta, para **60 a 100 pessoas** (famílias aparentadas ou colegas de ofício). Os pavimentos eram em cal e os pátios tinham **drenagem** para as águas da chuva. Os mais ricos tinham **murais**; os pobres, paredes lisas. A estrutura é única na Mesoamérica e levanta a questão de saber se foi **planeada** pelas autoridades.',
  { img: 'teo-conjunto-habitacional', leg: 'Reconstituição conjetural de um conjunto habitacional de Teotihuacan, séc. V d.C. Ilustração gerada por IA.' },
  { img: 'teo-conjunto-tetitla', leg: 'Mural do «Jaguar de rede» em Tetitla, Teotihuacan (Dumbarton Oaks).' },
  { h: '4. Religião e deuses' },
  'Não temos textos, só imagens. Os especialistas (como **Esther Pasztory**, **Karl Taube** e outros) identificam **símbolos que se repetem** e dão-lhes nomes provisórios. Não sabemos como se chamavam em Teotihuacan; os nomes que se usam abaixo vêm dos astecas, e a correspondência é uma hipótese.',
  { tabela: { cab: ['Figura (nome de estudo)', 'Papel provável', 'Onde aparece'], linhas: [
    ['Grande Deusa (por vezes «Deusa-Aranha»)', 'Divindade feminina, ligada à terra, à água, à fertilidade, à criação, talvez a principal da cidade', 'Murais de Tepantitla, estátua monumental; Pirâmide da Lua'],
    ['Deus da Tempestade (Tlaloc, nome asteca)', 'Chuva, água, raios, fertilidade; ligado à guerra e ao sacrifício', 'Vasos, murais, Templo da Serpente Emplumada'],
    ['Serpente Emplumada (Quetzalcoatl, nome asteca)', 'Poder, renovação; ligada ao governo, ao céu e talvez à guerra', 'Templo da Serpente Emplumada'],
    ['Serpente da Guerra', 'Símbolo militar', 'Ciudadela; decoração de guerreiros'],
    ['Jaguar de rede («Netted Jaguar»)', 'Jaguar com rede de estrelas ou de água; ligado a templos e a ritos', 'Murais de Tetitla e Techinantitla'],
    ['Deus Velho (Huehueteotl)', 'Deus do fogo, com um braseiro nas costas; um dos mais antigos da Mesoamérica', 'Braseiros e esculturas'],
    ['Deus do Pulque / Deus Gordo', 'Ligados à embriaguez ritual (do agave) e à abundância', 'Murais e cerâmicas'],
    ['O Deus Esfolado (Xipe Totec, nome asteca)', 'Renovação da vegetação; sacrifício', 'Esculturas e figuras']
  ] } },
  { img: 'teo-mural-tepantitla', leg: 'Mural de Tepantitla, tradicionalmente chamado «Tlalocan» ou «paraíso de Tlaloc», Teotihuacan.' },
  { img: 'teo-tlaloc-vaso', leg: 'Vaso cerâmico com a figura do deus da tempestade, Teotihuacan.' },
  { img: 'teo-braseiro', leg: 'Adorno cerâmico de Teotihuacan, tipo de decoração usado em braseiros e vasos rituais.' },
  { h: 'O sacrifício' },
  'O sacrifício humano, associado à dedicação de grandes edifícios, é um fenómeno comprovado em Teotihuacan (Templo da Serpente Emplumada, Pirâmide da Lua). As vítimas parecem ter sido, em muitos casos, **guerreiros** ou **cativos**, sacrificados por decapitação, extração do coração ou outros meios, e enterrados com adornos. Além disso, sacrificaram-se e enterraram-se animais (pumas, águias, serpentes). O sentido destes atos, **política, religião e cosmologia misturadas**, é debatido, e não convém julgar com valores atuais nem tomar o que se sabe dos astecas como espelho fiel.',
  { img: 'teo-enterramento-serpente', leg: 'Reconstituição conjetural de um enterramento de dedicação sob o Templo da Serpente Emplumada. Ilustração gerada por IA.' },
  { h: '5. Pintura mural' },
  'Os **murais** de Teotihuacan são a melhor janela para o seu mundo. Pintados sobre estuque, em técnica de **fresco** ou de têmpera, com **ocres vermelhos**, **verdes** e **azuis** (e o vermelho de cinábrio, mineral de mercúrio, nas elites), mostram sacerdotes em procissão, deuses, animais e cenas de água. O de **Tepantitla** («Tlalocan») mostra um jardim de água, com figuras a nadar, jogar e cantar (a interpretação clássica, de **Alfonso Caso**, é a de um paraíso do deus da chuva; hoje é discutida). Em **Atetelco** há coiotes e sacerdotes de vermelho e preto, e em **Tetitla** e **Techinantitla** aparecem a Grande Deusa e jaguares.',
  { img: 'teo-mural-tetitla', leg: 'Pintura mural em Tetitla, Teotihuacan' },
  { img: 'teo-mural-atetelco', leg: 'Pintura mural em Atetelco, Teotihuacan' },
  { img: 'teo-jaguar-rede', leg: 'Mural de jaguar, Teotihuacan (fotografia de 1974).' },
  { h: '6. Economia' },
  'A base era a **agricultura**: **milho**, **feijão**, **abóbora**, pimentos, tomates, **amaranto**, nopais (cato) e o **agave** (o maguey, de que se fazia o pulque e se tiravam fibras). O abastecimento tinha por base campos irrigados com canais e nascentes (e talvez campos elevados perto do lago, debatido). Criavam-se **perus** e **cães**, e caçavam-se coelhos, veados e aves. Não havia gado grande nem animais de tração, nem roda de transporte.',
  'A grande indústria era a **obsidiana**: os milhares de **oficinas** da cidade produziam lâminas, pontas de seta, facas e objetos rituais e exportavam-nos. A obsidiana verde de **Pachuca** era especialmente apreciada. Fabricava-se também cerâmica, **cerâmica Laranja Fino** (produzida, segundo a maioria dos autores, na região de Puebla), figuras, objetos de pedra verde, conchas e peles. Os comerciantes viajavam em caravanas de carregadores, e importavam **cacau**, plumas de quetzal, jade, algodão, conchas e mica de regiões distantes.',
  { img: 'teo-mercado', leg: 'Reconstituição conjetural de um mercado de Teotihuacan, séc. V d.C. Ilustração gerada por IA.' },
  { img: 'teo-oficina-obsidiana', leg: 'Reconstituição conjetural de uma oficina de obsidiana de Teotihuacan. Ilustração gerada por IA.' },
  { img: 'teo-obsidiana', leg: 'Objetos de obsidiana de Teotihuacan' },
  { img: 'teo-vaso-tripode', leg: 'Vaso tripé antropomórfico de Teotihuacan, c. 200–500 d.C. (Museu de Arte do Condado de Los Angeles).' },
  { h: '7. Escrita, língua e calendário' },
  'Teotihuacan **não tem escrita decifrada**. Há sinais e símbolos (pintados em murais e cerâmicas, entre os quais cerca de trinta sinais descobertos em La Ventilla), e propostas recentes (de epigrafistas) sobre uma possível escrita ou protoescrita, mas **nenhuma foi confirmada**. A população usava, como outros mesoamericanos, um calendário de **260 dias**, e os arqueólogos têm descoberto **cruzes gravadas em círculos** no chão e nas paredes, talvez ligadas a medições, ao calendário e à orientação da cidade. A língua é desconhecida (ver «Quem eram?»).',
  { h: '8. Alimentação' },
  { lista: [
    '**Milho**, em **tortilhas** e papas, com a técnica da **nixtamalização** (cozer o milho em água com cal, que o torna mais nutritivo).',
    '**Feijão, abóbora, pimentos, tomate, amaranto, nopal.**',
    '**Perus, cães, coelhos, veados**, peixe e pequenos animais; insetos e larvas como complemento.',
    '**Bebidas:** o **pulque** (fermentado de agave) e talvez cacau, trazido do sul.',
    '**Sal** e especiarias do vale e da região.'
  ] },
  { img: 'teo-cozinha-milho', leg: 'Reconstituição conjetural de uma cozinha de Teotihuacan, com tortilhas e nixtamal. Ilustração gerada por IA.' },
  { h: '9. Vestuário e adornos' },
  'Os murais mostram homens com **tanga** e **capa** e mulheres com **saia** e uma peça triangular sobre os ombros (o *quechquemitl*); eram de algodão (de comércio) ou de fibra de agave. As elites usavam **toucados enormes de penas**, orelheiras de pedra verde, colares, pulseiras e sandálias. Os guerreiros levavam escudos, dardos e propulsores (átlatl), e as vestes marciais com coiotes e serpentes aparecem nos murais e em Tikal.',
  { h: '10. Música, dança e jogos' },
  'Os murais mostram **sacerdotes a cantar** (com volutas à frente da boca, que representam a fala ou o canto), **trombetas de concha**, **flautas**, **tambores**, **chocalhos** e **apitos de cerâmica**. Não se encontrou, dentro da cidade, nenhum campo do **jogo da bola** como os dos maias, embora existam imagens que o sugerem. Os jogos e festas de que há noção são cerimoniais.',
  { h: '11. Ciência e tecnologia' },
  { lista: [
    '**Arquitetura talud-tablero:** um painel vertical (tablero) sobre uma rampa inclinada (talud), a marca de Teotihuacan, que depois foi copiada por toda a Mesoamérica.',
    '**Cal e estuque:** a cidade usou grandes quantidades de cal queimada para argamassa, pavimentos e estuque, com um forte impacto ambiental (muita lenha).',
    '**Água e drenagem:** canais, canalização das nascentes e dos rios (como o San Juan) e esgotos nos conjuntos habitacionais.',
    '**Urbanismo:** um traçado em quadrícula com uma orientação única.',
    '**Astronomia e calendário:** orientações e cruzes gravadas; a ligação ao Sol e à observação do horizonte, mas sem textos, as leituras astronómicas são hipóteses.',
    '**Sem metal:** a metalurgia só chegou à Mesoamérica mais tarde, do ocidente, e a cidade trabalhava a pedra, o osso e a concha.'
  ] },
  { h: '12. Guerra' },
  'Teotihuacan não tinha **muralhas**, o que sugere confiança no seu poder, ou a ausência de ameaças próximas. Mas a **arte da guerra** está presente: guerreiros com **escudos**, **dardos**, **propulsores** e armaduras de algodão, e os sacrifícios de guerreiros. O que as cidades maias contam é que **guerreiros com o aspeto de Teotihuacan** estavam ligados a mudanças de poder. O papel real do exército é discutido.',
  { img: 'teo-mascara-pedra', leg: 'Máscara de pedra de estilo teotihuacano, de Malinaltepec (Guerrero).' }
];

const personalidades = [
  'De Teotihuacan não conhecemos **nenhum nome local**. As figuras abaixo são as que se conhecem de fontes **maias** (que falam de Teotihuacan), de **astecas e espanhóis** (que escreveram séculos depois) e dos **investigadores** que a revelaram. O que é lenda está assinalado.',
  { h: 'Os governantes anónimos' },
  'Não sabemos o nome, a aparência nem o número dos que governaram. Não há retratos, tronos nem sepulturas reais identificadas. É a grande ausência da cidade e uma das razões pelas quais se discute se o poder era pessoal ou coletivo.',
  { h: 'A Grande Deusa' },
  'Figura central dos murais (por exemplo, em Tepantitla): uma mulher ou deusa de rosto coberto, com toucado, de cujas mãos escorre água ou riqueza. A historiadora de arte **Esther Pasztory** defendeu que seria a principal divindade da cidade, ligada à água, à terra e à criação; a interpretação continua em discussão. Não sabemos o seu nome original.',
  { h: 'Siyaj K’ak’ («Fogo Nasce»)' },
  'Personagem que, segundo as inscrições maias, chegou a **El Perú-Waka** e a **Tikal** em janeiro de 378 d.C. «vindo do oeste». As imagens que lhe estão associadas são teotihuacanas. Terá sido um general ou enviado, mas o seu estatuto e o seu papel são debatidos. Esteve ligado a mudanças de poder em Tikal e Uaxactun.',
  { h: 'Lançador-de-Lanças Coruja (Spearthrower Owl)' },
  'Nome convencional (em inglês *Spearthrower Owl*, em maia *Atlatl Cauac*) de um personagem que as inscrições maias dizem ser **pai de Yax Nuun Ayiin I** e senhor de Teotihuacan, ou de uma «casa» da cidade. Há quem o veja como um **rei** da cidade; outros acham que o nome pode designar um título ou várias pessoas. Está representado em Tikal e Uaxactun, e a sua existência real, tal como o seu poder, é muito discutida.',
  { h: 'Yax Nuun Ayiin I («Primeiro Crocodilo»)' },
  'Rei de **Tikal** a partir de 379 d.C., filho de Lançador-de-Lanças Coruja segundo as inscrições. Foi representado na Estela 31 com roupas teotihuacanas e escudo de Tlaloc. A sua subida ao trono, um ano depois da morte do rei anterior, **Chak Tok Ich’aak I**, é o acontecimento mais bem datado da relação entre as duas culturas.',
  { h: 'Bernardino de Sahagún (c. 1499 – 1590)' },
  'Frade franciscano espanhol que, no México, recolheu junto de informadores astecas o **Códice Florentino**, uma enciclopédia do mundo asteca. Ali se conserva a **lenda de Teotihuacan**, onde, no início do mundo, os deuses **Nanahuatzin** e **Tecuciztécatl** se atiram para o fogo e se transformam no Sol e na Lua. É um **mito asteca**, e não história de Teotihuacan.',
  { h: 'Carlos de Sigüenza y Góngora (1645 – 1700)' },
  'Erudito e cientista mexicano do século XVII, um dos primeiros a estudar as ruínas e a escavar ali, c. 1675, procurando as origens da história do México.',
  { h: 'Leopoldo Batres (1852 – 1926)' },
  'Inspetor-geral de monumentos do México no tempo de Porfirio Díaz. Dirigiu (1905–1910) a limpeza e o restauro da Pirâmide do Sol e do eixo central, para a celebração do centenário da independência. As suas intervenções são hoje criticadas por excessivas e mal documentadas, mas tornaram a cidade conhecida.',
  { h: 'Manuel Gamio (1883 – 1960)' },
  'Antropólogo e arqueólogo mexicano, aluno de Franz Boas, dirigiu (1917–1922) um grande estudo do vale de Teotihuacan, que combinou arqueologia, estudo da população atual e da vida do vale. Escavou a **Ciudadela**. É considerado um fundador da antropologia moderna no México.',
  { h: 'Alfonso Caso (1896 – 1970)' },
  'Arqueólogo mexicano, conhecido pelo trabalho em Monte Albán. Foi ele que, no vale de Teotihuacan, propôs a leitura do mural de Tepantitla como o «**Tlalocan**», paraíso do deus da chuva, que ficou célebre (e hoje é discutida).',
  { h: 'Laurette Séjourné (1911 – 2003)' },
  'Arqueóloga e etnóloga franco-mexicana. Escavou nos anos 1950–60 os conjuntos de **Zacuala** e **Yayahuala** e descreveu os **murais**. Defendeu interpretações religiosas muito ousadas, hoje criticadas.',
  { h: 'Beatriz de la Fuente (1929 – 2005)' },
  'Historiadora de arte mexicana, especialista em arte pré-hispânica e em **pintura mural**. O museu dos murais de Teotihuacan tem o seu nome.',
  { h: 'René Millon' },
  'Arqueólogo norte-americano que dirigiu, nos anos 1960 e 70, o **Teotihuacan Mapping Project**: o levantamento sistemático da cidade que revelou o traçado, os cerca de dois mil conjuntos habitacionais e as estimativas de população. Estabeleceu a cronologia por fases (Tzacualli, Miccaotli, etc.) ainda em uso.',
  { h: 'George Cowgill, Saburo Sugiyama e Rubén Cabrera' },
  'Arqueólogos que, desde os anos 1980, escavaram o **Templo da Serpente Emplumada** (Cowgill, Sugiyama, Cabrera) e, nos anos 1990–2000, a **Pirâmide da Lua** (Sugiyama e Cabrera). As suas descobertas de sepulturas de sacrificados mudaram a imagem de uma Teotihuacan «pacífica», que ainda corria nos anos 1960.',
  { h: 'Sergio Gómez Chávez' },
  'Arqueólogo mexicano que, em 2003, descobriu o túnel sob o Templo da Serpente Emplumada e dirige o projeto «Tlalocan» desde então. As suas escavações (a partir de 2009) reuniram dezenas de milhares de objetos.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**A cidade em si:** a Avenida dos Mortos, as pirâmides do Sol e da Lua e a Ciudadela, Património Mundial da UNESCO desde 1987.',
    '**O estilo talud-tablero:** foi imitado em Monte Albán, em Tikal, em Kaminaljuyu e em muitos outros lugares.',
    '**A arte mural:** uma tradição de pintura que influenciou, depois, a arte de Cacaxtla, de Xochicalco e das cidades maias.',
    '**A obsidiana e a cerâmica:** objetos encontrados em toda a Mesoamérica.',
    '**Os deuses:** a Grande Deusa, o Deus da Tempestade e a Serpente Emplumada reaparecem, com outros nomes, em civilizações posteriores (Tolteca, Maia, Asteca).',
    '**Uma ideia de cidade:** uma das primeiras grandes cidades planeadas das Américas, referência de poder, de sagrado e de urbanismo para os povos que a sucederam.'
  ] },
  { h: 'Arte' },
  'A arte de Teotihuacan é **geométrica, estilizada e muito disciplinada**: máscaras de pedra de rosto neutro e olhos de concha ou de obsidiana, figuras de cerâmica, vasos de três pés e braseiros de teatro, e, sobretudo, a **pintura mural**. As **máscaras de pedra** (de andesito, basalto e outras pedras) usadas talvez em funerais ou como oferendas são o seu ícone. A arte de Teotihuacan tem pouca preocupação com a individualidade: não há retratos, mas tipos e símbolos.',
  { img: 'teo-museu-sala', leg: 'Escultura de Tlaloc na Sala Teotihuacan do Museu Nacional de Antropologia, Cidade do México.' },
  { h: 'Arquitetura: talud-tablero e espaço cerimonial' },
  'O **talud-tablero** (uma rampa e um painel saliente, repetidos em níveis) e a ideia de uma **avenida cerimonial** com templos e pirâmides alinhados são as grandes marcas arquitetónicas. A cidade tem um sentido de **ordem e de repetição** (em contraste com a variedade das cidades maias), e isso é uma das suas assinaturas.',
  { h: 'Porque desapareceu? Um debate' },
  'Teotihuacan não «desapareceu»: perdeu o seu centro cerimonial por volta de **550** e a sua população foi diminuindo ao longo de dois séculos. O que causou isto é discutido, e é provável que várias razões tenham coincidido:',
  { lista: [
    '**Revolta interna:** a destruição concentrada nos templos e palácios da Avenida dos Mortos, com imagens deliberadamente partidas, sugere um ataque contra as elites ou contra o culto, de dentro da cidade.',
    '**Invasão externa:** foi a explicação tradicional; hoje tem menos apoio, porque os danos não parecem os de uma conquista (as casas comuns foram poupadas).',
    '**Clima e fome:** a seca dos anos 530 (a ligação a erupções vulcânicas é debatida) e os sinais de má nutrição nos esqueletos.',
    '**Desigualdade e esgotamento:** o peso dos tributos, a pressão sobre a lenha, a água e os solos (a cal exigia muito combustível) e uma sociedade muito desigual.',
    '**Perda de redes:** a ascensão de novos centros regionais (Cholula, Xochicalco, Cacaxtla) e o declínio do comércio com o Golfo e com os maias.'
  ] },
  'Nenhuma destas explicações é aceite por todos, e hoje muitos falam de um **processo longo** e não de uma queda súbita.',
  { h: 'A redescoberta de Teotihuacan' },
  'A cidade nunca foi esquecida: **os astecas** visitavam-na, e os espanhóis, depois da conquista (1519–1521), descreveram as pirâmides. A arqueologia científica começou no século XIX e consolidou-se com **Batres** (1905–1910), **Gamio** (1917–1922), o mapa de **Millon** (1962–1973) e as escavações dos anos 1980 e do túnel (2003 em diante). Hoje as tecnologias novas (radar de penetração no solo, tomografia de resistividade elétrica, análises de isótopos e de ADN) estão a mudar o que sabemos.',
  { caixa: 'Uma nota sobre o século XX', texto: 'Durante muito tempo imaginou-se Teotihuacan como uma cidade **pacífica**, governada por sacerdotes. Os enterramentos de sacrificados e os murais de guerreiros, mostrados pelas escavações dos anos 1980 em diante, desfizeram essa ideia. Também se ligou com facilidade o local a mitos modernos (extraterrestres, civilizações perdidas). Nenhum deles tem fundamento arqueológico: Teotihuacan foi obra de pessoas, com os meios e as ideias do seu tempo.' },
  { caixa: 'Para visitar', texto: 'A **Zona Arqueológica de Teotihuacan** fica a cerca de **50 km** a nordeste da Cidade do México (autocarros saem do terminal Norte). Visite de manhã cedo, para evitar o calor e as multidões; tenha em conta a altitude (mais de 2000 m) e a falta de sombra. Em anos recentes a subida às pirâmides esteve **restringida**: confirme as regras antes de ir. Dentro do sítio estão o **Museo de la Cultura Teotihuacana** e o **Museo de los Murales Teotihuacanos «Beatriz de la Fuente»**. Na Cidade do México, a **Sala Teotihuacan** do **Museu Nacional de Antropologia** tem as peças mais importantes. Fora do México, há peças em museus como o **Museu Britânico** e o **de Young**, em São Francisco.' }
];

const quiz = [
  { p: 'Onde ficava Teotihuacan?', op: ['No vale do México', 'Na península do Iucatão', 'No vale do Nilo', 'Nos Andes'], certa: 0, exp: 'Ficava no vale do México, a cerca de 50 km a nordeste da atual Cidade do México.' },
  { p: 'Quem deu o nome «Teotihuacan» ao local?', op: ['Os próprios habitantes', 'Os astecas, séculos depois', 'Os espanhóis', 'Os maias'], certa: 1, exp: 'É um nome asteca (nahuatl), dado a uma cidade já em ruínas; o nome original é desconhecido.' },
  { p: 'Que mineral vulcânico foi a base da riqueza da cidade?', op: ['Ouro', 'Obsidiana', 'Prata', 'Mármore'], certa: 1, exp: 'As oficinas de obsidiana e o comércio das lâminas foram a grande indústria; a obsidiana verde de Pachuca era muito apreciada.' },
  { p: 'Qual é o nome dado ao eixo principal da cidade?', op: ['Via Sacra', 'Avenida dos Mortos', 'Estrada Real', 'Calçada do Sol'], certa: 1, exp: 'Os astecas chamaram-lhe «Avenida dos Mortos» por julgarem que os montes eram túmulos.' },
  { p: 'O que sabemos da língua falada em Teotihuacan?', op: ['Era o latim', 'Era o nahuatl, sem dúvida', 'É desconhecida; há várias hipóteses', 'Era o maia'], certa: 2, exp: 'Nahua, otomi, totonaco e mixe-zoque foram propostos, mas nenhuma hipótese está demonstrada.' },
  { p: 'Qual é o maior edifício de Teotihuacan?', op: ['A Pirâmide do Sol', 'A Pirâmide da Lua', 'A Ciudadela', 'O Palácio de Quetzalpapalotl'], certa: 0, exp: 'A Pirâmide do Sol tem cerca de 225 m de lado e c. 65 m de altura.' },
  { p: 'Em que ano chegou a Tikal o personagem Siyaj K’ak’, associado a Teotihuacan?', op: ['178 d.C.', '378 d.C.', '578 d.C.', '778 d.C.'], certa: 1, exp: 'Segundo as inscrições maias, chegou a Tikal em janeiro de 378 d.C.; o significado do acontecimento é debatido.' },
  { p: 'Que tipo de habitação era típico da cidade?', op: ['Casas de madeira sobre estacas', 'Conjuntos habitacionais de pedra e cal em volta de um pátio', 'Tendas', 'Cavernas'], certa: 1, exp: 'Cerca de 2000 conjuntos, cada um com 60–100 pessoas, com paredes altas e pátio central.' },
  { p: 'Que descoberta de 2003 foi feita sob o Templo da Serpente Emplumada?', op: ['Um túnel selado com milhares de objetos', 'Uma biblioteca de livros', 'Um túmulo real com nome', 'Uma cidade submersa'], certa: 0, exp: 'Sergio Gómez Chávez descobriu um túnel de cerca de 100 m, selado por volta de 200 d.C., com objetos e mercúrio líquido.' },
  { p: 'Que técnica de construção é marca de Teotihuacan?', op: ['O arco verdadeiro', 'O talud-tablero', 'A abóbada de berço', 'A cúpula'], certa: 1, exp: 'Um painel vertical (tablero) sobre uma rampa (talud), copiado depois noutras regiões.' },
  { p: 'Que cidade zapoteca, de Oaxaca, manteve relações com Teotihuacan?', op: ['Chichén Itzá', 'Monte Albán', 'Tula', 'Cholula'], certa: 1, exp: 'Em Teotihuacan havia um bairro de gente de Oaxaca (Tlailotlacan), e há objetos teotihuacanos em Monte Albán.' },
  { p: 'O que revelam os enterramentos de sacrificados encontrados nas pirâmides?', op: ['Que a cidade era totalmente pacífica', 'Que houve sacrifícios humanos ligados à dedicação dos templos', 'Que os habitantes eram cristãos', 'Que não havia religião'], certa: 1, exp: 'No Templo da Serpente Emplumada e na Pirâmide da Lua há sepulturas de sacrificados, o que desfez a imagem de uma cidade pacífica.' },
  { p: 'Que explicação para o fim do centro cerimonial por volta de 550 é hoje preferida por muitos arqueólogos?', op: ['Uma revolta ou colapso político interno', 'Uma inundação', 'Uma invasão romana', 'Um terramoto confirmado'], certa: 0, exp: 'A destruição concentrou-se nos edifícios das elites e do culto, o que sugere um ataque de dentro, embora não esteja demonstrado.' },
  { p: 'Quem dirigiu o Teotihuacan Mapping Project, que mapeou a cidade nos anos 1960–70?', op: ['Manuel Gamio', 'René Millon', 'Henri Mouhot', 'Leopoldo Batres'], certa: 1, exp: 'René Millon e a sua equipa registaram todos os edifícios à superfície e estabeleceram a cronologia por fases.' },
  { p: 'Para os astecas, o que aconteceu em Teotihuacan segundo o mito?', op: ['Os deuses criaram o Quinto Sol', 'Foi fundada Tenochtitlan', 'Chegaram os espanhóis', 'Nasceu a escrita'], certa: 0, exp: 'É um mito asteca, registado por Sahagún; não é história de Teotihuacan.' }
];

export default {
  id: 'teotihuacan',
  cor: '#b86a3a',
  emblema: '../assets/img/teotihuacan.png',
  nome:    { pt: 'Teotihuacan', en: 'Teotihuacan' },
  periodo: { pt: 'c. 100 a.C. – c. 550–650 d.C.', en: 'c. 100 BC – c. AD 550–650' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
