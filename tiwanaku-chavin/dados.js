// TIWANAKU E CHAVÍN — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas aproximadas, na cronologia mais usada pelos arqueólogos andinos (calibrada por radiocarbono); muitas são debatidas. a.C. = antes de Cristo. Nenhuma destas culturas deixou escrita decifrável: tudo o que se sabe vem da arqueologia, da arte e, mais tarde, de relatos coloniais.
// Imagens: cada {img:'id'} procura o ficheiro  tiwanaku-chavin/img/id.jpg  (ver IMAGENS_TIWANAKU_CHAVIN.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'Esta página junta duas grandes tradições religiosas e políticas dos **Andes pré-incaicos**, separadas por mais de mil anos e por centenas de quilómetros. **Chavín de Huántar**, nos Andes do norte do Peru, foi entre c. 900 e 200 a.C. um santuário de peregrinação cuja arte, com jaguares, serpentes e aves de rapina, se espalhou por grande parte do Peru: os arqueólogos chamam-lhe o **Horizonte Inicial** ou «Horizonte Chavín». **Tiwanaku**, junto ao **lago Titicaca**, a quase 3.850 m de altitude, no atual território da Bolívia, foi entre c. 500 e 1000 d.C. a capital cerimonial de um estado que dominou o altiplano e enviou colónias a vales distantes.',
    'Nenhuma das duas usava escrita. Falam através de **pedra esculpida**: o **Lanzón** e as galerias subterrâneas de Chavín, onde a água e o som faziam parte do ritual; e a **Porta do Sol**, as pirâmides e os monólitos de Tiwanaku, com uma figura central que os arqueólogos chamam o **Deus dos Bastões**. Ambas as civilizações tiveram um declínio ligado a abalos naturais, às secas e às mudanças de poder, e ambas deixaram heranças que os Incas, muito mais tarde, recolheram e reinterpretaram.'
  ] },
  { img: 'tch-mapa-andes', leg: 'Mapa esquemático dos Andes centrais com as áreas de Chavín (norte do Peru), Wari e Tiwanaku (altiplano do Titicaca).' },
  { h: 'Onde ficavam' },
  '**Chavín de Huántar** fica na região peruana de **Ancash**, no vale do rio **Mosna**, a cerca de 3.150 m de altitude, na vertente oriental da Cordilheira Branca. A localização é estratégica: o vale liga a costa do Pacífico às florestas húmidas da Amazónia, passando por passos de montanha, e os peregrinos e mercadores vindos de ambos os lados podiam ali encontrar-se. O santuário ergue-se na confluência do Mosna com o pequeno rio **Wacheqsa**, e a água, como se verá, foi um elemento central da sua arquitetura.',
  '**Tiwanaku** (também escrito Tiahuanaco, em espanhol) fica a cerca de 20 km do **lago Titicaca**, no altiplano boliviano, a cerca de 3.850 m de altitude: uma das capitais mais altas do mundo antigo. O Titicaca, com cerca de 8.300 km², é o maior lago da América do Sul pelo volume de água e costuma ser apontado como o lago navegável mais alto do mundo. O seu microclima, mais suave do que o do altiplano em redor, permitiu a agricultura e a criação de lamas e alpacas, e os Aymara e os Incas consideravam-no um lugar de origem do mundo.',
  { img: 'tch-lago-titicaca', leg: 'O lago Titicaca, no altiplano entre o Peru e a Bolívia.' },
  { img: 'tch-chavin-aerea', leg: 'Reconstituição imaginada do centro cerimonial de Chavín de Huántar, c. 500 a.C. (imagem ilustrativa gerada por IA).' },
  { h: 'Quando existiram' },
  'As duas civilizações não foram contemporâneas. **Chavín** pertence ao I milénio a.C., tem as suas raízes em tradições mais antigas dos Andes (como as da costa norte e as de **Kotosh**) e termina por volta de 200 a.C. **Tiwanaku** começou como aldeia agrícola perto do início da nossa era, tornou-se centro cerimonial nos séculos seguintes e atingiu o apogeu entre c. 500 e 1000 d.C. Entre uma e outra desenvolveram-se outras culturas andinas, de que se fala abaixo apenas de passagem. As datas variam de autor para autor e a cronologia de Chavín foi revista várias vezes.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Antecedentes', 'até c. 900 a.C.', 'Cultura monumental da costa (como **Caral**, tratada noutra secção) e tradições de templos no interior (Kotosh, Garagay); aldeias agrícolas no altiplano do Titicaca (Chiripa)'],
    ['Chavín: Templo Antigo', 'c. 900 – 500 a.C.', 'Primeiras construções em U, galerias, o Lanzón; fase chamada Urabarriu na cronologia de Richard Burger'],
    ['Chavín: Templo Novo', 'c. 500 – 200 a.C.', 'Ampliação do templo, Portal Preto e Branco, maior difusão do estilo; fase Janabarriu'],
    ['Declínio de Chavín', 'c. 200 a.C.', 'Abandono gradual do santuário; surgem culturas regionais (Paracas, Nazca, Moche, Pukara)'],
    ['Culturas regionais', 'c. 200 a.C. – 500 d.C.', 'Paracas e Nazca na costa sul, Moche na costa norte, Pukara no norte do Titicaca'],
    ['Tiwanaku: formação', 'c. 100 – 500 d.C.', 'Aldeia e depois centro cerimonial; primeiros templos e monólitos'],
    ['Tiwanaku: apogeu', 'c. 500 – 1000 d.C.', 'Cidade monumental, campos elevados, caravanas de lamas, colónias em vales distantes; relação com Wari'],
    ['Colapso', 'c. 1000 – 1100 d.C.', 'Seca prolongada, abandono da capital; surgem senhorios aimaras e, mais tarde, o domínio inca']
  ] } },
  { img: 'tch-puerta-sol', leg: 'A Porta do Sol, em Tiwanaku, esculpida num único bloco de andesito.' },
  { h: 'Quem eram?' },
  'Não sabemos como se chamavam a si próprios. **Chavín** é o nome do sítio atual (provavelmente do quéchua *chawin*, de sentido discutido), e a cultura é conhecida pelo estilo da sua arte, não por um estado com nome. Não há provas claras de um «império» chavín: parece ter sido, antes, uma **rede de comunidades** ligadas por um centro de peregrinação respeitado. **Tiwanaku** é um nome espanhol de origem incerta; em aimará o lugar é por vezes referido como *taypiqala*, «a pedra do centro». A língua falada em Tiwanaku é debatida (propõem-se o puquina e o proto-aimará), pelo que é prudente não lhe atribuir um povo com nome moderno.',
  { h: 'Porque importam' },
  { lista: [
    '**Religião e poder sem escrita:** mostram como se constrói autoridade com arquitetura, arte, luz, som e peregrinação, muito antes dos Incas.',
    '**Arte inconfundível:** o estilo chavín (felinos, caimões, serpentes, rostos que se transformam) e a iconografia de Tiwanaku (o Deus dos Bastões e os seus acompanhantes alados) são das mais reconhecíveis das Américas.',
    '**Engenharia de altitude:** drenagem sob templos, salas acústicas, campos elevados no altiplano, caravanas de lamas e o transporte de blocos de dezenas de toneladas sem rodas nem animais de carga pesados.',
    '**Alguns dos maiores sítios arqueológicos da América do Sul:** ambos são Património Mundial da UNESCO (Chavín em 1985, Tiwanaku em 2000).',
    '**Uma lição sobre o clima:** o colapso de Tiwanaku é um dos casos de estudo mais discutidos sobre o efeito da seca numa civilização de altitude.',
    '**Um tema vivo:** os Aimaras continuam a celebrar o solstício de inverno em Tiwanaku, e as montanhas e o lago continuam a ser lugares sagrados.'
  ] },
  { img: 'tch-chavin-reconstrucao', leg: 'Reconstrução conjetural do santuário de Chavín de Huántar, c. 400 a.C. Ilustração gerada por IA.' },
  { caixa: 'Os Andes hoje', texto: 'O território de Chavín pertence hoje ao **Peru**, e o de Tiwanaku à **Bolívia**; a região do lago Titicaca é partilhada pelos dois países. Chavín foi inscrito no Património Mundial em **1985** e Tiwanaku em **2000**. Os descendentes dos povos andinos, falantes de **quéchua** e de **aimará**, vivem ainda nestes vales e planaltos, e várias práticas (a água como entidade viva, a coca, a chicha, a lã de lama, os campos em terraços) têm raízes muito antigas, embora seja arriscado ligá-las diretamente a estas civilizações.' }
];

const linha = [
  'Esta linha do tempo segue as duas civilizações e as culturas vizinhas que ajudam a situá-las. As datas são aproximadas (calibradas por radiocarbono) e, como não há escrita, muitas são debatidas; onde isso acontece, diz-se.',
  { linha: [
    { d: 'c. 3000 – 2000 a.C.', t: 'O mundo antes de Chavín', x: 'Nos Andes já existiam centros monumentais: **Caral**, na costa (tratada na secção dos Olmecas e de Caral), e templos de câmaras com fogueiras rituais no interior, como o **Templo das Mãos Cruzadas**, em **Kotosh** (c. 2000 a.C., datação debatida). Nestas tradições nasceu a ideia de santuário como centro social e religioso, com fogo, oferendas e um espaço sagrado em forma de U.' },
    { d: 'c. 1500 a.C.', t: 'Chiripa e o Titicaca', x: 'No lado sul do lago, a aldeia de **Chiripa** tem uma praça afundada rodeada de recintos; é uma das primeiras comunidades do altiplano com arquitetura cerimonial. A economia baseava-se na batata, na quinoa e nos camelídeos. Este «Formativo» do Titicaca é o pano de fundo remoto de Tiwanaku.' },
    { d: 'c. 1500 – 900 a.C.', t: 'Primeiras ocupações em Chavín', x: 'O local de Chavín é ocupado por uma pequena povoação. Há ainda debate sobre a data exata do início das construções monumentais, entre c. 1200 e c. 900 a.C., conforme os autores.' },
    { d: 'c. 900 a.C.', t: 'O Templo Antigo', x: 'Constrói-se o **Templo Antigo** de Chavín: uma estrutura de pedra em forma de **U**, aberta a nascente, com uma praça circular afundada e uma rede de galerias interiores. No centro, num corredor em cruz, ergue-se o **Lanzón**, uma estela granítica de c. 4,5 m. É o início do que se chama a fase **Urabarriu** (c. 900 – 500 a.C.).' },
    { d: 'c. 800 a.C.', t: 'Paracas, na costa sul', x: 'Na costa seca de Ica surge a cultura **Paracas**, célebre pelos **mantos bordados** que envolviam as múltiplas múmias de uma grande necrópole. A sua cerâmica e os seus têxteis mostram contacto com o estilo chavín (o dos têxteis «Karwa» é por vezes citado, com datação debatida).' },
  ] },
  { img: 'tch-paracas-manto', leg: 'Manto funerário da cultura Paracas, c. 250–100 a.C., costa sul do Peru (cultura vizinha e posterior a Chavín).' },
  { linha: [
    { d: 'c. 500 a.C.', t: 'O Templo Novo e o apogeu', x: 'O santuário é ampliado com o **Templo Novo**, com uma enorme praça e o **Portal Preto e Branco**, de granito e calcário de duas cores. É a fase **Janabarriu** (c. 400 – 200 a.C. segundo Burger), em que o estilo chavín se vê em cerâmica, ourivesaria e têxteis de locais muito distantes: Kuntur Wasi (Cajamarca), Chongoyape (Lambayeque), Paracas e outros. A população do próprio centro cresce, de alguns milhares de pessoas, segundo as estimativas, que são debatidas.' },
    { d: 'c. 500 – 200 a.C.', t: 'A ourivesaria chavín', x: 'Artesãos trabalham o **ouro** com técnicas avançadas (martelagem, repuxado, soldadura). Peças com iconografia chavín foram encontradas em **Chongoyape** (costa norte) e em **Kuntur Wasi** (Cajamarca). São das mais antigas obras de ourivesaria do continente americano.' },
  ] },
  { img: 'tch-oro-chongoyape', leg: 'Adorno de ouro em estilo Chavín, de Chongoyape, Lambayeque, Peru.' },
  { linha: [
    { d: 'c. 200 a.C.', t: 'O declínio de Chavín', x: 'O santuário perde a sua influência e é gradualmente abandonado como centro de peregrinação. As causas são debatidas: inundações, aluviões e sismos (comuns na região), mudanças no clima, tensões sociais e o crescimento de outros centros regionais. Não há provas de uma conquista externa; a explicação mais provável é uma combinação de fatores.' },
    { d: 'c. 200 a.C. – 200 d.C.', t: 'Pukara e o norte do Titicaca', x: 'No lado norte do lago, **Pukara** é um grande centro cerimonial, com esculturas de estilo próprio. Em torno do lago desenvolvem-se também as tradições de Yaya-Mama e **Khonkho Wankane**. Estes centros preparam o caminho para Tiwanaku.' },
    { d: 'c. 100 a.C. – 700 d.C.', t: 'Nazca e Moche', x: 'Na costa sul prosperam os **Nazca**, com os geoglifos do deserto e o centro cerimonial de **Cahuachi**; na costa norte os **Moche**, com pirâmides de adobe, retratos de cerâmica e túmulos como o do Senhor de Sipán. São cronologicamente posteriores a Chavín e anteriores ou contemporâneas da primeira Tiwanaku; não são tratadas aqui em detalhe.' },
    { d: 'c. 100 – 500 d.C.', t: 'Tiwanaku começa a crescer', x: 'A povoação junto ao Titicaca passa de aldeia a centro cerimonial. Segundo uma análise estatística de datas de radiocarbono, a ocupação inicial situa-se por volta de **110 d.C.**, com incerteza de várias décadas. Começam as plataformas, os pátios e os primeiros monólitos.' },
    { d: 'c. 500 d.C.', t: 'A capital monumental', x: 'Constroem-se ou ampliam-se os grandes edifícios: o **Akapana**, o **Kalasasaya**, o **Templo Semissubterrâneo**. O centro tem uma planta organizada em eixos, uma cintura de água (talvez um fosso) e um bairro de residências de artesãos e de elites. É o período chamado **Tiwanaku IV**.' },
    { d: 'c. 600 – 1000 d.C.', t: 'Tiwanaku e Wari', x: 'Mais a norte, no vale de Ayacucho, cresce o estado **Wari**, o outro grande poder andino da época. Tiwanaku e Wari partilham alguma iconografia (a «série iconográfica do sul dos Andes»), mas têm formas diferentes de organização, e as relações entre ambos são debatidas: rivalidade, trocas ou fronteira partilhada.' },
  ] },
  { img: 'tch-wari-tunica', leg: 'Túnica em tapeçaria da cultura Wari, c. 600 – 1000 d.C., com iconografia partilhada com Tiwanaku.' },
  { linha: [
    { d: 'c. 600 – 1000 d.C.', t: 'As colónias de Moquegua', x: 'Tiwanaku estabelece comunidades em vales de baixa altitude, como **Moquegua**, no sul do Peru, com cemitérios e templos próprios (**Omo**, **Chen Chen**), e leva para o altiplano milho e outros produtos de climas quentes. Lá perto, o centro wari de **Cerro Baúl**, no topo de uma mesa rochosa, ilustra o encontro entre as duas culturas.' },
  ] },
  { img: 'tch-colonia-moquegua', leg: 'Reconstrução conjetural de uma colónia tiwanaku no vale de Moquegua, c. 800 d.C. Ilustração gerada por IA.' },
  { img: 'tch-cerro-baul', leg: 'Cerro Baúl, centro wari no vale de Moquegua, sul do Peru.' },
  { linha: [
    { d: 'c. 700 – 800 d.C.', t: 'A Porta do Sol e o Pumapunku', x: 'Datam deste período, aproximadamente, algumas das obras mais famosas de Tiwanaku: a **Porta do Sol** e o **Pumapunku**, com blocos de pedra ajustados com extrema precisão. A datação exata é debatida.' },
    { d: 'c. 800 d.C.', t: 'O apogeu: Tiwanaku V', x: 'A cidade ocupa cerca de 4 km², com uma população urbana estimada, com prudência, entre 10 000 e 20 000 pessoas, e uma área de influência muito maior. Os **campos elevados** do altiplano alimentam as populações; as **caravanas de lamas** ligam o altiplano a Cochabamba, a Moquegua e ao Atacama.' },
    { d: 'c. 1000 d.C.', t: 'O colapso', x: 'A capital é abandonada gradualmente, entre c. 1000 e c. 1100. As provas do clima (sedimentos do lago e gelo dos Andes) apontam para uma **seca** prolongada, que reduziu o nível do Titicaca e a produção dos campos elevados. A erosão do poder político, a quebra do culto e a perda de legitimidade das elites são as outras partes da explicação, ainda debatida.' },
    { d: 'c. 1100 – 1400 d.C.', t: 'Os senhorios aimaras', x: 'No altiplano surgem pequenos reinos de língua aimará, como os **Colla** e os **Lupaqa**, que fazem de Tiwanaku um lugar de memória e continuam a criar lamas e a cultivar a terra.' },
    { d: 'séc. XV d.C.', t: 'Os Incas em Tiwanaku', x: 'Os Incas conquistam o altiplano e tratam Tiwanaku como lugar sagrado. Segundo as lendas incas, o criador **Viracocha** teria saído do lago Titicaca; Tiwanaku era visto como um dos berços do mundo. Reutilizaram o local como santuário (as fontes coloniais referem-no), mas não o construíram: já o encontraram em ruínas.' },
    { d: '1549', t: 'Cieza de León em Tiwanaku', x: 'O cronista espanhol **Pedro Cieza de León** visita Tiwanaku e escreve uma das primeiras descrições conhecidas. Informa que os habitantes locais diziam que aqueles edifícios eram anteriores aos Incas. A sua crónica é uma fonte valiosa, mas o seu relato mistura observação e lendas.' },
  ] },
  { img: 'tch-squier-gravura', leg: 'Gravura de Tiwanaku na obra de Squier, *Peru: Incidents of Travel and Exploration in the Land of the Incas* (1877).' },
  { h: 'Redescoberta' },
  'Nenhum dos dois sítios foi alguma vez «perdido»: as comunidades locais sempre souberam onde estavam. A «redescoberta» é, como noutros casos, uma redescoberta para o mundo académico. Em **Tiwanaku**, depois de Cieza de León (1549), foram sobretudo viajantes e estudiosos do século XIX, como **Ephraim George Squier** (visita em 1863–65, livro em 1877) e **Max Uhle** (1890s), que a descreveram e a escavaram, enquanto muitas pedras foram retiradas para construir igrejas, casas e uma linha de caminho de ferro. A escavação sistemática começou no século XX, com **Wendell Bennett** (1932), **Carlos Ponce Sanginés** (1950s a 1990s) e, mais tarde, **Alan Kolata** e outros. Em **Chavín**, o naturalista **Antonio Raimondi** deu a conhecer a estela que tem o seu nome no século XIX; **Julio C. Tello** estudou o sítio a partir de 1919, e outros arqueólogos (**Luis G. Lumbreras**, **Richard Burger**, **John Rick**) revolucionaram o conhecimento nas décadas seguintes. Em 1945 um aluvião e em 1970 um sismo danificaram partes do sítio.'
];

const mapa = [
  'Os mapas de Chavín e de Tiwanaku não são mapas de cidades com muralhas: são mapas de **santuários**, de vales ligados por caminhos de montanha e de colónias distantes. Os lugares principais são estes.',
  { tabela: { cab: ['Lugar', 'Onde (atual)', 'Quando / quem', 'Importância'], linhas: [
    ['Kotosh', 'Huánuco, Peru', 'c. 2000 a.C.', 'Templo das Mãos Cruzadas; antecedente de santuários andinos'],
    ['Chavín de Huántar', 'Ancash, Peru', 'c. 900 – 200 a.C.', 'Santuário de peregrinação; Lanzón; Património Mundial (1985)'],
    ['Kuntur Wasi', 'Cajamarca, Peru', 'c. 800 – 200 a.C.', 'Centro cerimonial com ourivesaria de estilo chavín'],
    ['Chongoyape', 'Lambayeque, Peru', 'c. 500 – 200 a.C.', 'Tesouros de ouro com iconografia chavín'],
    ['Paracas', 'Ica, Peru', 'c. 800 a.C. – 100 d.C.', 'Mantos funerários bordados; contexto costeiro'],
    ['Pukara', 'Puno, Peru', 'c. 200 a.C. – 200 d.C.', 'Centro do norte do Titicaca; antecedente de Tiwanaku'],
    ['Chiripa', 'Sul do Titicaca, Bolívia', 'c. 1500 a.C. – 100 d.C.', 'Aldeia com praça afundada; Formativo do altiplano'],
    ['Tiwanaku', 'La Paz, Bolívia', 'c. 500 – 1000 d.C.', 'Capital cerimonial; Património Mundial (2000)'],
    ['Lukurmata', 'Perto de Tiwanaku, Bolívia', 'c. 500 – 1000 d.C.', 'Cidade secundária junto ao lago, ligada a Tiwanaku'],
    ['Khonkho Wankane', 'Altiplano boliviano', 'c. 200 a.C. – 500 d.C.', 'Centro cerimonial anterior ao apogeu de Tiwanaku'],
    ['Isla del Sol e Isla de la Luna', 'Lago Titicaca, Bolívia', 'Séc. VIII – XVI', 'Ilhas sagradas, depois também incas'],
    ['Moquegua (Omo, Chen Chen)', 'Sul do Peru', 'c. 600 – 1000 d.C.', 'Colónias tiwanaku em vales de baixa altitude'],
    ['Cerro Baúl', 'Moquegua, Peru', 'c. 600 – 1000 d.C.', 'Centro wari com fábrica de chicha; fronteira com Tiwanaku'],
    ['Huari (Wari)', 'Ayacucho, Peru', 'c. 600 – 1000 d.C.', 'Capital do estado wari, rival ou vizinho de Tiwanaku'],
    ['Cochabamba e Atacama', 'Bolívia e Chile', 'c. 500 – 1000 d.C.', 'Vales de milho e de recursos, ligados por caravanas']
  ] } },
  { h: 'Chavín de Huántar' },
  'O santuário ocupa um terraço no vale do Mosna. O **Templo Antigo** é um edifício de pedra, de planta em **U**, com a abertura virada a nascente, para onde corre o rio. O **Templo Novo** acrescentou-lhe uma ala e uma grande plataforma. Entre eles está uma **praça circular afundada**, com cerca de 20 m de diâmetro, descoberta nos anos 1970 e decorada com relevos de figuras mascaradas em procissão. O interior do templo é um **labirinto de galerias**, sem janelas, estreitos e baixos, ligadas por escadas e rampas. São quilómetros de corredores, cuidadosamente pensados para a luz, a ventilação e a drenagem.',
  { img: 'tch-plaza-circular', leg: 'Praça circular afundada de Chavín de Huántar.' },
  { img: 'tch-galeria-chavin', leg: 'Galeria interior de Chavín de Huántar, com paredes de pedra.' },
  'No centro do Templo Antigo, numa galeria em cruz, está o **Lanzón**. É uma estela granítica de cerca de **4,5 m** de altura, com a forma de uma lança ou de um grande instrumento de lavrar, esculpida com uma figura de **boca com presas**, olhos revirados para cima, **garras** e cabelo de serpentes: um ser que mistura traços de homem, de felino e de serpente. A mão direita está levantada e a esquerda baixada. A figura está encaixada no chão e atravessa o teto da galeria, onde um canal pode ter servido para derramar líquidos, ou para as vozes. Os arqueólogos pensam que era um **oráculo**: os peregrinos entravam na galeria, e uma voz, talvez a de um sacerdote escondido, falava por ele. Esta interpretação é plausível mas não demonstrada.',
  { img: 'tch-lanzon', leg: 'O Lanzón, estela de granito de c. 4,5 m, na galeria central do Templo Antigo de Chavín.' },
  'As paredes exteriores do Templo Antigo estavam decoradas com **cabeças-clavas**, cabeças de pedra encaixadas na parede por uma espécie de espigão. Mostram, em sequência, rostos humanos que se transformam, com olhos esbugalhados, nariz escorrendo e presas, em seres felinos: uma imagem possível do **transe** provocado por substâncias psicoativas. Apenas uma ainda está no lugar original. O **Portal Preto e Branco**, do Templo Novo, tem duas colunas, uma de granito branco e outra de calcário escuro, esculpidas com figuras de aves de rapina com cabeça de águia, e fazia da entrada uma encenação de contrastes.',
  { img: 'tch-portal-blanco-negro', leg: 'O Portal Preto e Branco do Templo Novo de Chavín: colunas de granito branco e de calcário escuro.' },
  { img: 'tch-cabezas-clavas', leg: 'Cabeça-clava de pedra, ainda no lugar, em Chavín de Huántar.' },
  { h: 'Tiwanaku' },
  'O centro cerimonial de Tiwanaku ocupa uma planície sem árvores, com o horizonte de picos nevados da Cordilheira Real a leste. A «cidade» era dividida em **recintos** de plataformas e pátios, rodeados por canais. Os principais edifícios são estes.',
  { lista: [
    '**O Akapana:** uma pirâmide escalonada de cerca de **200 m** de lado e de 16,5 m de altura, em forma de «meia cruz andina», com um pátio afundado no topo e canais interiores de drenagem, que faziam correr a água da chuva pelos degraus. Foi provavelmente imaginada como uma **montanha sagrada** (*apu*), e as escavações encontraram nela oferendas e restos humanos, de interpretação debatida.',
    '**O Kalasasaya:** uma grande plataforma retangular, de c. 130 × 120 m, com um pátio rodeado de pilares de pedra e acessível por uma escadaria monumental. Aí estão os monólitos **Ponce** e **Fraile**, e no canto noroeste do recinto fica a **Porta do Sol** (a sua posição atual não é, talvez, a original). No solstício de inverno (21 de junho) os Aimaras reúnem-se aqui ao nascer do Sol para celebrar o seu Ano Novo.',
    '**O Templo Semissubterrâneo:** um pátio quadrado afundado, de cerca de 28 m de lado, com paredes cobertas de **cabeças-clavas** de pedra, cada uma com um rosto diferente: uma «galeria» de povos ou de antepassados.',
    '**O Pumapunku** («porta do puma»): uma plataforma em forma de T, de c. 167 × 117 m, que era talvez um cais ou um templo. Tem **blocos de arenito vermelho e de andesito** com encaixes tão precisos que parecem peças de um puzzle; alguns blocos de arenito pesam mais de 100 toneladas. Os blocos têm entalhes, em que se vazavam grampos de metal para os unir.',
  ] },
  { img: 'tch-tiwanaku-reconstrucao', leg: 'Reconstrução conjetural do centro cerimonial de Tiwanaku, c. 800 d.C. Ilustração gerada por IA.' },
  { img: 'tch-akapana', leg: 'O Akapana, pirâmide escalonada de Tiwanaku.' },
  { img: 'tch-kalasasaya', leg: 'O pátio do Kalasasaya, em Tiwanaku, com as paredes de pilares de pedra.' },
  { img: 'tch-monolito-ponce', leg: 'O Monólito Ponce, no pátio afundado do Kalasasaya, em Tiwanaku.' },
  { img: 'tch-semisubterraneo', leg: 'Templo Semissubterrâneo de Tiwanaku, com as cabeças-clavas de pedra nas paredes.' },
  { img: 'tch-pumapunku', leg: 'Blocos de arenito do Pumapunku, em Tiwanaku, com encaixes e entalhes de grande precisão.' },
  { caixa: 'Pedra, andesito e arenito', texto: 'O arenito vermelho do Pumapunku vinha de pedreiras a cerca de 10 km de Tiwanaku. O andesito, uma rocha vulcânica mais dura, vinha de bem mais longe, da zona da península de **Copacabana**, a cerca de 90 km, do outro lado do lago. Para o trazer podem ter sido usadas **balsas de totora** (uma espécie de junco) e **trenós**, de que se sabe pouco. Não há necessidade de recorrer a explicações fantasiosas (como os «alienígenas» ou uma «civilização perdida de 15 000 anos»): trata-se de trabalho organizado, ferramentas de pedra e de bronze, cordas e muita mão de obra.' },
  { img: 'tch-isla-sol', leg: 'A Isla del Sol, no lago Titicaca, lugar sagrado para os povos andinos.' },
  { h: 'O lago Titicaca' },
  'O lago é parte inseparável de Tiwanaku. Era uma fonte de peixe e de aves, de juncos (a **totora**, usada para balsas, tetos e até como alimento), de água para os campos e de simbolismo: tanto os Aimaras como os Incas contam que o Sol e o primeiro Inca (ou o criador Viracocha) emergiram das suas águas ou das suas ilhas. As ilhas **del Sol** e **de la Luna** têm templos e plataformas associados a Tiwanaku e, depois, aos Incas. As margens do lago estavam salpicadas de cidades e aldeias, como **Lukurmata** e **Chiripa**.',
  { h: 'Fora do altiplano: colónias e vales' },
  'Tiwanaku tinha **colónias** e enclaves em vales de menor altitude, onde era possível cultivar milho, coca e frutos de climas mais quentes: **Moquegua**, no sul do Peru, **Cochabamba**, na Bolívia, e o **deserto do Atacama**, no norte do Chile. Esses lugares tinham cemitérios com objetos de estilo tiwanaku, cerâmica própria e templos. Não sabemos exatamente que tipo de controlo havia: em muitos casos, parece mais **comércio e peregrinação** do que domínio militar.',
  { h: 'Os caminhos' },
  'Nem Chavín nem Tiwanaku tinham estradas pavimentadas como a rede incaica. Havia, sim, **caminhos de montanha** usados por **caravanas de lamas**, que podiam transportar cerca de 25 a 30 kg cada, durante dias. Ligavam o altiplano e a costa, os vales do leste e a Amazónia. Por eles passavam obsidiana (de fontes como Quispisisa), conchas marinhas (como o *Strombus* e o *Spondylus*), sal, lã, coca, milho, peixe seco e **ideias**: iconografia, objetos rituais e crenças.'
];

const sociedade = [
  { h: '1. Organização política' },
  'Como não há escrita, a organização política de ambas as civilizações infere-se da arquitetura, das sepulturas e dos objetos. **Chavín** não parece ter sido um estado com exército e capital: o que se vê é um **centro religioso** dirigido por elites sacerdotais, que controlavam o acesso ao sagrado e a redistribuição de bens. Quanto mais o santuário crescia, mais cresciam também as diferenças sociais, visíveis em casas maiores e em objetos de ouro e de materiais exóticos.',
  'Em **Tiwanaku**, a escala é maior. Há uma **elite** com acesso a bens de prestígio (cerâmica fina, ourivesaria, têxteis), um centro cerimonial de enorme esforço coletivo e uma rede de colónias. Alguns arqueólogos falam de um **estado** ou mesmo de um «império», outros preferem falar de uma **liderança religiosa e política com influência**, que cresceu pela atração cultural e pelo comércio e menos pela conquista. A figura central de Tiwanaku, na Porta do Sol, tem o aspeto de uma divindade, mas os governantes aparecem sob a forma de figuras com **bastões** e com roupas de prestígio, e não sabemos os seus nomes.',
  { h: '2. Classes sociais' },
  { lista: [
    '**Sacerdotes e líderes:** em Chavín, os especialistas rituais; em Tiwanaku, uma elite com túmulos ricos e roupas de prestígio.',
    '**Artesãos especializados:** escultores, ourives, oleiros e tecelões, alguns a trabalhar em oficinas ligadas ao centro.',
    '**Camponeses e pastores:** a maioria da população, que cultivava e criava lamas, e que trabalhava periodicamente nas obras coletivas.',
    '**Mercadores e caravaneiros:** os que cuidavam das lamas e transportavam os bens entre regiões.',
    '**Trabalho coletivo:** nos Andes, o trabalho pela comunidade, mais tarde chamado *mit’a* pelos Incas, e a reciprocidade (*ayni*) eram a base da economia; é provável que algo semelhante existisse já então, embora seja uma inferência.'
  ] },
  { h: '3. Religião' },
  'A religião de Chavín e a de Tiwanaku não são idênticas, mas partilham elementos que os especialistas veem em muitas culturas andinas: a **veneração das montanhas** e da água, a figura de um ser sobrenatural que mistura traços de **felino, ave e serpente**, e o **transe** como forma de contacto com o sagrado. Em **Chavín**, o santuário era uma «máquina» para impressionar os peregrinos: escuridão, sons, água a correr nas paredes, luz que entrava em pontos escolhidos, e talvez substâncias que alteravam a perceção, como o **cacto San Pedro**, que contém mescalina e aparece representado na arte chavín (a sua utilização no sítio é plausível mas continua debatida). Os peregrinos podiam consultar o **oráculo** e oferecer ao templo objetos de lugares distantes.',
  { img: 'tch-peregrinos-lanzon', leg: 'Peregrinos perante o Lanzón na galeria central de Chavín, c. 400 a.C. Ilustração gerada por IA.' },
  { img: 'tch-xama-san-pedro', leg: 'Cena conjetural de um ritual de transe em Chavín com cacto San Pedro, c. 500 a.C. Ilustração gerada por IA.' },
  { img: 'tch-obelisco-tello', leg: 'O Obelisco Tello, de Chavín: relevo de caimões e de serpentes, c. 2,5 m.' },
  { img: 'tch-estela-raimondi', leg: 'A Estela Raimondi, granito, c. 2 m, de Chavín, no Museu Nacional de Arqueologia, Antropologia e História do Peru, Lima.' },
  { img: 'tch-pututu', leg: 'Búzio usado como trombeta (pututu), tradição andina com origem muito antiga.' },
  'Em **Tiwanaku**, a figura central é o **Deus dos Bastões**, de frente, com um bastão em cada mão e lágrimas nos olhos, rodeado por **atendentes alados** com cabeça de condor e de homem; a sua versão mais célebre é a da **Porta do Sol**. O deus pode estar ligado ao Sol, à chuva ou à água (a interpretação varia). O santuário era também o lugar de **ritos com chicha**, de oferendas com camelídeos e, segundo alguns achados, de **sacrifícios** (humanos e animais), de interpretação debatida. Os usos de plantas como a **vilca** (*Anadenanthera*), inalada em tabuletas de madeira e osso, são atestados por objetos de Tiwanaku e da região do Atacama.',
  { tabela: { cab: ['Figura / elemento', 'Aspeto', 'Possível significado (debatido)'], linhas: [
    ['Lanzón (Chavín)', 'Figura com presas, garras, cabelo de serpentes; 4,5 m', 'Divindade principal do santuário; oráculo; eixo do mundo'],
    ['Felino (jaguar, puma)', 'Presas, manchas, garras', 'Poder, o mundo da floresta e da noite; mudança de forma'],
    ['Caimão e serpente', 'Corpos cobertos de escamas, línguas e presas', 'Água, origem, o mundo inferior'],
    ['Ave de rapina (águia, harpia)', 'Bicos curvos, garras', 'O céu; o poder dos xamãs'],
    ['Deus dos Bastões (Tiwanaku)', 'Figura frontal, dois bastões, lágrimas', 'Divindade solar ou da água; modelo da elite'],
    ['Atendentes alados', 'Figuras de perfil, com asas ou cabeças de condor', 'Mensageiros, espíritos auxiliares'],
    ['Puma e condor', 'Animais sagrados; o Pumapunku e as esculturas', 'Mundo de cima e de baixo; poder'],
    ['Montanhas e lago', 'Akapana, Illimani, Titicaca', 'Entidades vivas (*apus*); origem da água e da vida']
  ] } },
  { h: 'A água e o som' },
  'Os arqueólogos descobriram que as galerias de Chavín tinham canais de drenagem por onde corria, sob pressão, a água desviada dos rios vizinhos, produzindo um **rugido** que se ouvia por todo o templo, como se o edifício «falasse». Escavações dos anos 2000 encontraram numa galeria, a das **Caracolas**, cerca de vinte **trombetas de búzio** (*pututus*), feitas com conchas de *Strombus* trazidas do oceano Pacífico equatorial. Estudos acústicos mostraram que as salas amplificam certos sons, e que o som de um pututu se ouve fora do templo. A experiência de entrar na escuridão, de ouvir água e trombetas, e de ver o Lanzón à luz de uma só abertura, era seguramente impressionante.',
  { img: 'tch-galeria-agua-som', leg: 'Reconstrução conjetural de um ritual numa galeria de Chavín, com água corrente e trombetas de búzio. Ilustração gerada por IA.' },
  { h: '4. Economia' },
  'Nos Andes, a economia assentava na **complementaridade ecológica**: em altitudes diferentes cresciam coisas diferentes (batata e quinoa no altiplano, milho nos vales, coca e frutos nas encostas quentes), e as comunidades procuravam aceder a várias delas. **Chavín** concentrou essa troca num santuário, ao qual chegavam obsidiana, conchas e ouro; **Tiwanaku** organizou-a numa escala maior, com **campos elevados**, rebanhos de lamas, caravanas e colónias. Não havia moeda nem mercados como os do Mediterrâneo; a circulação fazia-se por reciprocidade, redistribuição e troca.',
  { img: 'tch-caravana-lamas', leg: 'Caravana de lamas no altiplano, c. 800 d.C. Ilustração gerada por IA.' },
  { h: '5. Escrita e comunicação' },
  'Nenhuma das duas usou um sistema de escrita conhecido. A comunicação fazia-se pela **imagem**: as figuras de Chavín têm um estilo cheio de **jogos visuais**, em que o mesmo desenho se lê de várias formas (por exemplo, a Estela Raimondi, que se pode «ler» ao contrário e dá outra figura). Em Tiwanaku, os mesmos símbolos repetem-se em pedra, cerâmica e têxteis, com uma disciplina quase heráldica. Mais tarde, no mundo andino, os **quipos** (cordéis com nós) registaram números e talvez outras informações; foram usados pelos Wari e pelos Incas, e não temos provas claras de que existissem em Chavín ou em Tiwanaku.',
  { h: '6. Casa e família' },
  'As casas dos camponeses eram de **pedra e adobe** (barro seco), com telhados de palha, agrupadas em pátios familiares. Em Chavín, ao redor do centro, havia casas de pedra e de barro, com materiais de cozinha, oficinas e depósitos. Em Tiwanaku, as casas das elites eram mais cuidadas, e as dos camponeses, nas aldeias à volta, eram simples. As famílias criavam cobaias (*cuy*) e lamas, e a organização social assentava em **comunidades** e linhagens (**ayllus**, termo posterior), com obrigações mútuas.',
  { img: 'tch-aldeia-altiplano', leg: 'Aldeia do altiplano com casas de adobe e palha, lamas e campos, c. 800 d.C. Ilustração gerada por IA.' },
  { h: '7. Alimentação' },
  'A base eram a **batata** (centenas de variedades) e a **quinoa**, no altiplano, e o **milho** nos vales. Das batatas fazia-se o **chuño**, desidratado pela alternância de geada noturna e sol de dia: dura anos e foi talvez a invenção alimentar mais importante do altiplano. Comia-se também feijão, **kañiwa**, **tarwi** (tremoço), pimentos, e carne de **lama**, de alpaca e de **cobaia**, além de peixe e aves do lago. A bebida social era a **chicha**, cerveja de milho, bebida em grandes celebrações; os **keros**, copos de cerâmica ou de madeira, são uma das marcas da arte de Tiwanaku.',
  { img: 'tch-festa-chicha', leg: 'Celebração com chicha numa praça de Tiwanaku, c. 800 d.C. Ilustração gerada por IA.' },
  { img: 'tch-quero-tiwanaku', leg: 'Quero (copo cerimonial) da cultura Tiwanaku, para beber chicha.' },
  { h: '8. Vestuário' },
  'A **lã de lama e de alpaca** era o material principal, e a tecelagem é uma das artes mais refinadas dos Andes. Os homens usavam **túnicas** (*unku*) sem mangas e **faixas** na cabeça, as mulheres vestidos e **mantas** presas com alfinetes de metal (*tupus*). Em Tiwanaku, as elites usavam **chapéus de quatro pontas** de tecido, túnicas de padrões em tapeçaria, ornamentos de ouro e de cobre, e adornos de nariz e de orelhas. Têxteis de Chavín e de Tiwanaku sobreviveram sobretudo em túmulos de clima seco (como os de Paracas e do Atacama).',
  { h: '9. Música, dança e jogos' },
  'Os instrumentos mais comuns eram as **flautas de Pã** (*zampoñas*), as flautas de osso e de barro, os **tambores**, as **trombetas de búzio** (*pututus*) e as **ocarinas**. Em Chavín, os pututus fazem parte do ritual; em Tiwanaku, há flautas de osso de ave ou de lama, e as danças e os cortejos com máscaras são sugeridos pela arte. Os **jogos** e as competições não estão bem documentados para estes períodos; a comida, a bebida e a música em comum eram o centro das celebrações.',
  { h: '10. Ciência e conhecimento' },
  'Os povos andinos observavam o céu com atenção: o **solstício** marcava o calendário agrícola. Em Tiwanaku, o alinhamento do Kalasasaya com o nascer do Sol é estudado como um possível observatório, embora as teorias de «astronomia extraordinária» do início do século XX (de Arthur Posnansky) tenham sido contestadas. A **medicina** usava plantas (coca, vilca, ervas) e a **trepanação**, cirurgia ao crânio, é conhecida nos Andes, e pratica-se desde a época pré-Inca. A **agronomia** era de alto nível: variedades de batata adaptadas a cada altitude, rotação de culturas e conservação por desidratação.',
  { h: '11. Tecnologia: campos elevados e metalurgia' },
  'No altiplano, o frio e as inundações limitavam a agricultura. Os habitantes de Tiwanaku desenvolveram os **campos elevados** (*suka kollus*): faixas de terra levantadas entre canais de água. A água dos canais armazena calor durante o dia e liberta-o à noite, protegendo as culturas da geada; o lodo dos canais fertiliza os campos. O arqueólogo **Alan Kolata** defendeu que eram a base da economia de Tiwanaku, e experiências de reconstrução mostraram colheitas superiores às dos campos normais; outros, como **Clark Erickson**, notam que muitos campos têm origem anterior e que a sua extensão e papel são debatidos.',
  { img: 'tch-campos-elevados-esquema', leg: 'Esquema dos campos elevados (*suka kollus*) do altiplano. Ilustração gerada por IA.' },
  'Em **metalurgia**, Chavín trabalhou o **ouro** e a **prata**, com técnicas avançadas de martelagem, de repuxado e de soldadura. Tiwanaku usou o **cobre**, o **bronze** (com arsénio e, mais tarde, com estanho), o ouro e a prata, e fundiu grampos em forma de I, de metal, para unir os blocos de pedra do Pumapunku. As **ferramentas** de pedra e de bronze, as cordas de fibra e os trenós bastavam para trabalhar blocos enormes.',
  { img: 'tch-oficina-pedra', leg: 'Canteiros a trabalhar blocos de pedra em Tiwanaku, c. 800 d.C. Ilustração gerada por IA.' },
  { h: '12. Arquitetura e escultura' },
  'Em **Chavín**, a pedra é fina e trabalhada em blocos regulares de granito e calcário, com galerias de teto de lajes. A escultura é de relevo baixo e muito linear, com uma estética de **transformação** (o mesmo ser que é felino, ave e serpente). Em **Tiwanaku**, a escultura é de **monólitos** de arenito e de andesito, em figuras rígidas e frontais, com os braços junto ao corpo, e as paredes têm **cabeças-clavas** e pilares alternados com blocos. A arquitetura de Tiwanaku, com os eixos e as plataformas orientadas, é geométrica e planeada.',
  { h: '13. Guerra' },
  'Nem Chavín nem Tiwanaku são conhecidas por conquistas militares. Em **Chavín**, não há muralhas nem armas abundantes; a autoridade parece ter vindo da **religião**. Em **Tiwanaku**, a arte mostra figuras com **cabeças-troféu** e personagens armados, e há provas de violência ritual, mas a expansão parece ter sido mais por **prestígio e comércio** do que por guerra. Depois do colapso, a situação mudou: no altiplano surgem aldeias fortificadas (*pukaras*) em cumes, o que sugere um período de conflito.'
];

const personalidades = [
  'Ninguém conhece os nomes dos sacerdotes de Chavín nem dos governantes de Tiwanaku, e inventá-los seria falso. As «personalidades» desta página são os **estudiosos e viajantes** que nos deram a conhecer estas civilizações.',
  { h: 'Pedro Cieza de León (c. 1520 – 1554)' },
  'Soldado e cronista espanhol, percorreu os Andes e escreveu a *Crónica del Perú*. Visitou **Tiwanaku** em 1549 e deixou uma das mais antigas descrições do sítio, referindo as grandes pedras e as estátuas e registando o que os habitantes locais lhe diziam. É uma fonte indispensável, mas os seus relatos misturam observação com lendas.',
  { h: 'Antonio Raimondi (1824 – 1890)' },
  'Naturalista italiano radicado no Peru, explorou o país durante décadas, e deu a conhecer a **Estela Raimondi** de Chavín, que hoje tem o seu nome. É uma das figuras fundadoras da ciência peruana.',
  { h: 'Ephraim George Squier (1821 – 1888)' },
  'Diplomata e arqueólogo norte-americano, visitou **Tiwanaku** nos anos 1860 e publicou *Peru: Incidents of Travel and Exploration in the Land of the Incas* (1877), com gravuras e plantas que divulgaram o sítio. Hoje as suas interpretações são datadas, mas os seus desenhos ainda são úteis.',
  { h: 'Max Uhle (1856 – 1944)' },
  'Arqueólogo alemão, é um dos pioneiros da arqueologia andina. Estudou **Tiwanaku** na década de 1890 (obra com Alphons Stübel, 1892) e propôs sequências cronológicas que serviram de base ao estudo das culturas do Peru.',
  { h: 'Julio C. Tello (1880 – 1947)' },
  'Arqueólogo peruano, de origem quéchua, é considerado o «pai da arqueologia peruana». Estudou **Chavín** a partir de 1919 e defendeu que era a «cultura-mãe» dos Andes. Esta tese está hoje abandonada (Chavín foi uma das culturas importantes, entre outras), mas o seu trabalho de campo e a sua defesa do património foram decisivos.',
  { h: 'Arthur Posnansky (1873 – 1946)' },
  'Engenheiro de origem austríaca radicado na Bolívia, dedicou décadas a **Tiwanaku**, mediu e desenhou o sítio e propôs, com base em alinhamentos astronómicos, uma antiguidade de milhares de anos, ideia rejeitada pelos arqueólogos. É uma figura importante, mas as suas teorias são hoje consideradas erradas.',
  { h: 'Wendell C. Bennett (1905 – 1953)' },
  'Arqueólogo norte-americano, fez escavações estratificadas em **Tiwanaku** em 1932 e estabeleceu uma sequência cronológica. Encontrou um monólito de c. 7 m que ficou com o seu nome, o **Monólito Bennett**, hoje no Museu Lítico de Tiwanaku.',
  { img: 'tch-monolito-bennett', leg: 'O Monólito Bennett, c. 7 m, no museu de Tiwanaku.' },
  { h: 'Carlos Ponce Sanginés (1925 – 2005)' },
  'Arqueólogo boliviano, dirigiu os trabalhos de **Tiwanaku** a partir dos anos 1950 e fundou o Centro de Investigações Arqueológicas de Tiwanaku. Deu o seu nome a um dos monólitos principais. As reconstruções de edifícios realizadas sob a sua direção são hoje criticadas por terem alterado o aspeto original.',
  { h: 'Luis Guillermo Lumbreras (n. 1936)' },
  'Arqueólogo peruano, dirigiu escavações em **Chavín** nos anos 1960 e 1970, descobriu a praça circular e propôs que o templo era o centro de uma organização social complexa. É um dos maiores nomes da arqueologia latino-americana.',
  { h: 'Richard Burger' },
  'Arqueólogo norte-americano da Universidade de Yale, estudou **Chavín** durante décadas, propôs a cronologia das fases (Urabarriu, Chakinani, Janabarriu) e mostrou, com análises de obsidiana, as ligações do santuário a regiões distantes.',
  { h: 'John Rick' },
  'Arqueólogo norte-americano da Universidade de Stanford, dirige desde meados dos anos 1990 o projeto de Chavín; mapeou as galerias e as suas estruturas, e trabalhou com especialistas de acústica sobre o som no templo, incluindo as trombetas de búzio.',
  { h: 'Alan Kolata e Clark Erickson' },
  'Kolata (Universidade de Chicago) liderou, nos anos 1980 e 1990, o estudo dos **campos elevados** e da agricultura de Tiwanaku, e propôs uma ligação entre a sua produção e a força do estado. Erickson, da Universidade da Pensilvânia, estudou campos elevados no altiplano e defendeu uma visão diferente. O debate entre eles é central para compreender a economia do altiplano.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**Estilos artísticos influentes:** o estilo chavín foi uma das primeiras artes «internacionais» das Américas, e a iconografia de Tiwanaku foi copiada pelos Wari e, mais tarde, em parte, pelos Incas.',
    '**A ideia de santuário de peregrinação:** nos Andes, as *huacas* (lugares sagrados) e as peregrinações continuaram, e os Incas adotaram-nas.',
    '**Técnicas agrícolas:** a conservação da batata (o chuño), os campos elevados e a gestão da água continuam a ser estudados e, em alguns lugares, recuperados.',
    '**Uma tradição de pedra:** a cantaria de Tiwanaku, com blocos encaixados e grampos metálicos, é anterior aos Incas.',
    '**Mitos de origem:** o Titicaca como lugar de origem do Sol e do primeiro Inca continuou a ser contado muito depois da queda de Tiwanaku.'
  ] },
  { h: 'Arte' },
  'A arte chavín é feita de **imagens que se transformam**: um rosto humano que é também um felino, uma serpente que se torna cabelo. Os artistas usavam a **dualidade** e a **simetria** para criar figuras que se leem de várias maneiras. A arte de Tiwanaku é mais **geométrica** e solene, com figuras frontais e repetidas, em pedra, cerâmica de cores vivas (vermelho, preto, branco e laranja) e têxteis. O **quero** com o rosto do deus, e os **incensários** em forma de felino, estão entre os objetos mais conhecidos.',
  { h: 'Arquitetura: o templo e a plataforma' },
  'Chavín deixou um modelo de templo com **galerias**, praças e uma planta em U. Tiwanaku deixou um modelo de **cidade cerimonial** com plataformas e pirâmides (Akapana), pátios afundados, monólitos e portas de pedra. Ambos trabalharam a água como elemento arquitetónico (drenagem e canais), e nenhum usou arcos nem abóbadas verdadeiras.',
  { h: 'Porque terminaram? Dois debates' },
  { lista: [
    '**Chavín (c. 200 a.C.):** foi uma combinação de **fatores naturais** (aluviões e sismos, com mudanças do clima), de crescimento de outros centros e de perda de crédito do oráculo. Não há provas de conquista nem de uma catástrofe única.',
    '**Tiwanaku (c. 1000 – 1100):** as pesquisas sobre o clima (sedimentos do Titicaca, gelo do glaciar de Quelccaya) sugerem uma **seca** longa, que baixou o nível do lago e reduziu a produção dos campos elevados. Outros investigadores acrescentam o enfraquecimento da elite e das suas colónias, e a concorrência com os Wari. Ambos os fatores são debatidos.',
    '**Lição comum:** uma civilização que se apoia num sistema de crenças e numa agricultura muito dependente de condições estáveis fica vulnerável quando estas mudam.'
  ] },
  { h: 'A redescoberta' },
  'Ver a secção «Redescoberta» da linha do tempo. Em resumo: os sítios nunca foram esquecidos pelas comunidades locais; os exploradores do século XIX e os arqueólogos do século XX trouxeram-nos para a ciência; e desde 1985 (Chavín) e 2000 (Tiwanaku) são Património Mundial, o que os protege, mas também os expõe ao turismo.',
  { img: 'tch-balsa-totora', leg: 'Balsa de totora no lago Titicaca, c. 800 d.C. Ilustração gerada por IA.' },
  { h: 'Onde visitar' },
  { lista: [
    '**Chavín de Huántar (Peru):** o sítio, as galerias subterrâneas (algumas visitáveis) e o **Museu Nacional de Chavín**, em Chavín, inaugurado em 2008. Fica a cerca de 3.150 m de altitude: convém aclimatar-se. Acessível a partir de **Huaraz**, a umas três ou quatro horas.',
    '**Museo Nacional de Arqueología, Antropología e Historia del Perú (Lima):** a Estela Raimondi e outras peças chavín.',
    '**Tiwanaku (Bolívia):** o sítio e o **Museu Lítico** e o Museu Cerâmico, a cerca de 70 km de **La Paz**, com o Monólito Bennett. A altitude (c. 3.850 m) exige cuidado.',
    '**Lago Titicaca:** a Isla del Sol e a Isla de la Luna, a partir de **Copacabana** (Bolívia); Puno e as ilhas flutuantes dos **Uros** (Peru).',
    '**Museos de Lima, de Cusco e de La Paz** e o **Museu Larco** (Lima), com coleções de cerâmica e ourivesaria andinas.'
  ] },
  { caixa: 'Nota sobre as lendas', texto: 'Existem muitas teorias populares (civilizações perdidas, tecnologias avançadas, visitas de alienígenas) sobre Tiwanaku e o Pumapunku. **Nenhuma tem apoio** arqueológico: os blocos foram esculpidos por seres humanos com ferramentas de pedra e de metal, as pedreiras e as marcas de trabalho são conhecidas, e as datas de radiocarbono situam o sítio na nossa era. A arqueologia séria é mais interessante do que as lendas.' }
];

const quiz = [
  { p: 'Em que região do Peru fica Chavín de Huántar?', op: ['Ancash', 'Cusco', 'Arequipa', 'Puno'], certa: 0, exp: 'Fica no vale do rio Mosna, em Ancash, a cerca de 3.150 m de altitude.' },
  { p: 'Entre que datas floresceu Chavín, aproximadamente?', op: ['c. 3000 – 2000 a.C.', 'c. 900 – 200 a.C.', 'c. 500 – 1000 d.C.', 'c. 1200 – 1532 d.C.'], certa: 1, exp: 'O santuário de Chavín teve o seu auge no I milénio a.C., antes do fim do Horizonte Inicial.' },
  { p: 'O que é o Lanzón?', op: ['Um canal de água', 'Uma estela de granito com figura de presas e garras', 'Um tipo de lã', 'Um tambor de pedra'], certa: 1, exp: 'É uma estela de c. 4,5 m na galeria central do Templo Antigo, provavelmente um oráculo.' },
  { p: 'O que eram as «cabeças-clavas»?', op: ['Cabeças de pedra encaixadas nas paredes', 'Armas de guerra', 'Moedas', 'Máscaras de ouro'], certa: 0, exp: 'Eram cabeças de pedra com espigão, encaixadas nas paredes de Chavín e de Tiwanaku.' },
  { p: 'Que elemento produzia um «rugido» nas galerias de Chavín?', op: ['O vento', 'Canais de água a correr sob pressão', 'Tambores', 'O fogo'], certa: 1, exp: 'A água desviada corria por canais no interior, produzindo um som forte e impressionante.' },
  { p: 'Quem estudou Chavín a partir de 1919 e é chamado «pai da arqueologia peruana»?', op: ['Hiram Bingham', 'Julio C. Tello', 'Max Uhle', 'Arthur Posnansky'], certa: 1, exp: 'Julio C. Tello, de origem quéchua, defendeu que Chavín era a «cultura-mãe» (tese hoje abandonada).' },
  { p: 'A que altitude, aproximadamente, fica Tiwanaku?', op: ['500 m', '1.500 m', '3.850 m', '6.000 m'], certa: 2, exp: 'O sítio está a cerca de 3.850 m, perto do lago Titicaca.' },
  { p: 'Entre que datas foi Tiwanaku uma capital poderosa?', op: ['c. 500 – 1000 d.C.', 'c. 900 – 200 a.C.', 'c. 1200 – 1500 d.C.', 'c. 2000 – 1500 a.C.'], certa: 0, exp: 'O seu apogeu é o do período chamado Tiwanaku IV e V, entre c. 500 e c. 1000 d.C.' },
  { p: 'Como se chama a famosa figura central da Porta do Sol?', op: ['Viracocha Inca', 'Deus dos Bastões', 'Senhor de Sipán', 'Pachamama'], certa: 1, exp: 'Os arqueólogos chamam-lhe Deus dos Bastões, por segurar um bastão em cada mão.' },
  { p: 'O que são os «campos elevados» (suka kollus)?', op: ['Terraços de pedra nas montanhas', 'Faixas de terra levantadas entre canais de água', 'Jardins suspensos', 'Campos de batalha'], certa: 1, exp: 'Os canais protegiam as culturas da geada e fertilizavam o solo.' },
  { p: 'Para que serviam as caravanas de lamas?', op: ['Para a guerra', 'Para transportar bens entre regiões', 'Para arar a terra', 'Para fazer sacrifícios'], certa: 1, exp: 'Cada lama levava c. 25 a 30 kg, ligando altiplano, vales e costa.' },
  { p: 'Que cultura vizinha, a norte, partilhou iconografia com Tiwanaku e tinha capital em Ayacucho?', op: ['Wari', 'Moche', 'Nazca', 'Inca'], certa: 0, exp: 'O estado Wari era o outro grande poder andino da época; as suas relações com Tiwanaku são debatidas.' },
  { p: 'Qual é a explicação mais apoiada para o colapso de Tiwanaku?', op: ['Um terramoto único', 'Uma seca prolongada, entre outros fatores', 'Uma invasão dos Incas', 'Uma epidemia de peste'], certa: 1, exp: 'Dados de sedimentos e de gelo apontam para uma seca que reduziu o lago e a produção agrícola; o papel de outros fatores é debatido.' },
  { p: 'Quem escreveu uma das primeiras descrições de Tiwanaku, em 1549?', op: ['Pedro Cieza de León', 'Marco Polo', 'Henri Mouhot', 'Francisco Pizarro'], certa: 0, exp: 'O cronista Pedro Cieza de León visitou o local e registou o que os habitantes lhe diziam.' },
  { p: 'Em que anos foram Chavín e Tiwanaku inscritos no Património Mundial da UNESCO?', op: ['1972 e 1985', '1985 e 2000', '2000 e 2010', '1992 e 2008'], certa: 1, exp: 'Chavín em 1985 e Tiwanaku em 2000.' }
];

export default {
  id: 'tiwanaku-chavin',
  cor: '#7a6a9a',
  emblema: '../assets/img/tiwanaku-chavin.png',
  nome:    { pt: 'Tiwanaku e Chavín', en: 'Tiwanaku and Chavín' },
  periodo: { pt: 'c. 900 a.C. – 1000 d.C.', en: 'c. 900 BC – AD 1000' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
