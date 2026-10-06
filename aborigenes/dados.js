// ABORÍGENES AUSTRALIANOS — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Âmbito: do povoamento do continente (c. 65 000 – 50 000 anos atrás) até ao contacto colonial britânico em 1788, com uma nota final sobre a continuidade e a atualidade.
// Datas antigas dadas em «anos atrás» (AP); antes de c. 10 000 anos a diferença para a.C. (cerca de 2000 anos) é menor do que a incerteza das datações. Estas são culturas vivas: o texto usa o passado para o que é arqueologia e História, mas assinala sempre a continuidade.
// Imagens: cada {img:'id'} procura o ficheiro  aborigenes/img/id.jpg  (ver IMAGENS_ABORIGENES.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'Os **povos aborígenes australianos** são os habitantes originais do continente australiano, onde chegaram há **cerca de 65 000 anos** (data debatida: há quem prefira c. 50 000), ao fim de uma travessia de mar que foi uma das primeiras grandes viagens marítimas da humanidade. Formam uma das **culturas vivas mais antigas e contínuas do mundo**, em ligação ao mesmo território durante dezenas de milhares de anos.',
    'Não foram «um povo»: eram **centenas de nações** (cada uma com a sua língua, as suas leis e o seu território, chamado «País»), com cerca de **250 línguas** e talvez 600 dialetos em 1788. Viveram em todos os ambientes, do deserto à floresta tropical e aos Alpes australianos, e adaptaram-se a uma glaciação, à subida do mar e a uma megafauna que desapareceu. Deixaram uma das tradições de arte rupestre mais longas do planeta, uma ciência da paisagem e do fogo, sistemas de pesca de enguias e de peixe e uma tradição de lei, de canto e de «Sonho» (*Dreaming*) que liga as pessoas à terra. Este âmbito termina em **1788**, quando a Primeira Frota britânica chega a Sydney, mas a história não acaba aí: veja a nota final em «Legado».'
  ] },
  { caixa: 'Antes de ler: cuidados e palavras', texto: [
    '**Nomes.** «Aborígene» é um termo geral, criado por colonizadores, para centenas de povos diferentes. Muitas pessoas preferem o nome da sua própria nação (Gunditjmara, Yolngu, Noongar, Anangu, Eora e tantas outras) ou «Primeiros Povos» e «povos indígenas». Os **ilhéus do Estreito de Torres** (Torres Strait Islanders) são um povo **distinto**, de origem melanésia, e não são aborígenes; referimo-los porque partilham a história e o direito às terras.',
    '**Pessoas falecidas.** Em muitas comunidades aborígenes, sobretudo no norte e no centro, é pedido cuidado ao dizer o nome, ou ao mostrar imagens ou vozes, de uma pessoa que morreu recentemente. As páginas dos museus costumam trazer um aviso desse tipo. Aqui falamos de pessoas do passado distante ou de figuras históricas públicas, mas o aviso fica.',
    '**Saberes restritos.** Parte do conhecimento (histórias, cerimónias, locais) é reservada a pessoas determinadas, por género, idade ou iniciação. Por isso, este texto só refere o que as próprias comunidades e as instituições (como o AIATSIS) tornam público. Nada do que se descreve aqui é um segredo violado, e nada substitui a voz dos povos em causa.'
  ] },
  { img: 'abo-mapa-sahul', leg: 'Mapa da Sahul e da Sunda na última glaciação.' },
  { h: 'Onde ficava' },
  'O continente australiano tem cerca de 7,7 milhões de km² e inclui desertos vermelhos, savanas tropicais, florestas húmidas, montanhas nevadas, planícies de rios sazonais e uma costa de dezenas de milhares de quilómetros. Durante quase todo o tempo em que foi habitado, o mar estava mais baixo do que hoje e a Austrália, a **Nova Guiné** e a **Tasmânia** formavam um só continente, a **Sahul**. Só com a subida do mar, no fim da última glaciação, estas terras se separaram, entre c. 14 000 e c. 8 000 anos atrás.',
  'Quando os britânicos chegaram, em 1788, todo o continente estava ocupado e **gerido**: cada nação tinha o seu País, com fronteiras reconhecidas pelos vizinhos e marcadas na paisagem por locais, nascentes, árvores, rochas e histórias. Por isso o conceito britânico de «terra de ninguém» (*terra nullius*) estava errado em facto: não havia terra sem dono.',
  { img: 'abo-mapa-linguas', leg: 'Mapa esquemático das famílias linguísticas australianas; não representa fronteiras precisas entre todas as nações.' },
  { h: 'Quando existiu' },
  'A cronologia da Austrália indígena é a mais longa deste projeto. Dividimo-la, de forma aproximada, em fases. As datas anteriores a c. 40 000 anos são sempre debatidas.',
  { tabela: { cab: ['Fase', 'Datas aproximadas (anos atrás)', 'O que a marca'], linhas: [
    ['Chegada e povoamento', 'c. 65 000 – 40 000', 'Travessia do mar até à Sahul; Madjedbebe; ocupação de todo o continente; machados de pedra polida; extinção da megafauna'],
    ['Pleistoceno tardio e glaciação', 'c. 40 000 – 18 000', 'Mungo Lady e Mungo Man; arte rupestre antiga; clima árido e frio; ocupação dos desertos e das terras altas; pontas e moagem de sementes'],
    ['Subida do mar', 'c. 18 000 – 8 000', 'O mar sobe 120 metros; perdem-se grandes áreas de costa; a Tasmânia e a Nova Guiné separam-se; histórias de povos costeiros guardam esta memória'],
    ['Intensificação e regionalização', 'c. 8 000 – 400', 'Armadilhas de enguias em Budj Bim; ferramentas pequenas; chegada do dingo (c. 3500–4000 anos); arte Gwion, raio-X e outras; redes de troca de longa distância'],
    ['Contactos externos', 'c. 1700? – 1788', 'Macassarenses a pescar trepang no norte; navegadores holandeses (1606); Cook em 1770'],
    ['Fim do âmbito', '1788', 'Chegada da Primeira Frota britânica a Port Jackson (Sydney)']
  ] } },
  { h: 'Quem eram?' },
  'Os estudos genéticos de ADN antigo e atual, interpretados por equipas em que participaram comunidades aborígenes, indicam que os ancestrais dos povos aborígenes e dos papuas se separaram dos de outros humanos modernos de fora de África há cerca de 50 000 a 70 000 anos, e que as populações de diferentes regiões da Austrália se foram diferenciando durante dezenas de milhares de anos, com pouco contacto genético com o exterior até ao dingo e, depois, aos contactos do norte. É, por isso, uma das populações com uma história regional contínua mais longa que se conhece. Isto não torna ninguém «primitivo»: significa apenas um tempo muito longo de adaptação, de invenção e de cultura.',
  { img: 'abo-acampamento', leg: 'Acampamento familiar no norte da Austrália, há cerca de 5000 anos; cena conjetural. Ilustração gerada por IA.' },
  { h: 'Porque importam' },
  { lista: [
    '**Antiguidade e continuidade:** são a prova de que os humanos modernos se espalharam do continente africano para a Ásia e atravessaram o mar até à Sahul há mais de 50 000 anos, e de que as culturas podem durar enquanto se adaptam.',
    '**Arte:** a arte rupestre da Austrália inclui das mais antigas ainda visíveis do mundo e uma das tradições mais longas, ainda continuada em pintura contemporânea.',
    '**Conhecimento ecológico:** a gestão com fogo, a pesca, a colheita e a observação do céu mostram um saber profundo do território.',
    '**Lei e pertença:** a ideia de que a terra *pertence* às pessoas (e não as pessoas à terra) deu origem a sistemas jurídicos próprios e, mais tarde, ao reconhecimento do título nativo (*native title*).',
    '**Um desafio ao método:** ensinam o historiador a distinguir o que a arqueologia mostra do que a tradição oral guarda, sem pôr uma acima da outra.'
  ] },
  { h: 'Hoje' },
  'Os povos aborígenes e ilhéus do Estreito de Torres são hoje mais de **800 000 pessoas** (cerca de 3,8% da população australiana no censo de 2021). Muitas línguas sobreviveram: cerca de 120 ainda se falam, mas a maioria está em risco. O Uluru, Kakadu, Budj Bim, Willandra e Murujuga são hoje Património Mundial da UNESCO, geridos com os seus guardiões tradicionais. Uluru foi fechado à escalada em 2019, a pedido dos Anangu.',
  { img: 'abo-uluru', leg: 'Uluru visto da área pública de observação do pôr do sol.' }
];

const linha = [
  'Esta linha do tempo segue os acontecimentos principais da longa história dos povos aborígenes até 1788. Para os tempos mais antigos, as datas são de **arqueologia** e muitas são debatidas; as histórias dos próprios povos têm a sua cronologia própria, que não cabe numa tabela. Onde uma coincidência entre as duas é referida, vem assinalada como tradição.',
  { img: 'abo-travessia-sahul', leg: 'Travessia marítima hipotética rumo à Sahul, há cerca de 60 000 anos. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 65 000 – 50 000 anos atrás', t: 'A travessia e a chegada à Sahul', x: 'Humanos modernos vindos do Sudeste Asiático atravessam o mar, em várias travessias de dezenas de quilómetros, entre ilhas da zona de Wallacea, e chegam à Sahul. Ninguém sabe que barcos usaram (não se conservaram): pensa-se em jangadas de bambu ou canoas de casca. Foi uma das primeiras navegações de mar aberto da humanidade.' },
    { d: 'c. 65 000 anos atrás (debatido)', t: 'Madjedbebe, um dos abrigos mais antigos', x: 'No abrigo rochoso de **Madjedbebe**, em terras Mirarr (Arnhem Land), as escavações de 2012 e 2015 (equipa de Chris Clarkson) acharam ferramentas, ocre moído, machados de pedra polida e restos de comida em camadas datadas de **65 000 ± 6000 anos**. Outros arqueólogos defendem datas mais recentes (c. 50 000) e alegam perturbações do solo por térmitas. A data é muito discutida, mas o abrigo continua a ser um dos locais mais antigos conhecidos do continente (possivelmente o mais antigo).' }
  ] },
  { img: 'abo-madjedbebe', leg: 'Paisagem rochosa de Arnhem Land; alternativa ao abrigo de Madjedbebe.' },
  { linha: [
    { d: 'c. 49 000 anos atrás', t: 'O interior árido', x: 'Em **Warratyi**, nos montes Flinders (Austrália do Sul, terra Adnyamathanha), há ferramentas de osso e de pedra, ocre e restos de megafauna em camadas de cerca de 49 000 anos, a mais antiga ocupação conhecida de um ambiente árido na Austrália.' },
    { d: 'c. 49 000 – 44 000 anos atrás', t: 'Machados de pedra polida', x: 'No Kimberley (Carpenters Gap) e no norte surgem **machados de pedra com gume polido** e cabo de madeira, entre os mais antigos do mundo. Servem para cortar árvores, abrir casca e fazer canoas e utensílios.' },
    { d: 'c. 46 000 – 40 000 anos atrás', t: 'A megafauna desaparece', x: 'Desaparecem os grandes animais da Sahul, como o **diprotodonte** (parente gigante do vombate), o canguru de cara curta, a ave **Genyornis** e o lagarto *Varanus priscus* (megalânia). Se foi o clima, a caça ou a gestão do fogo, ou uma combinação, é um dos debates mais vivos da arqueologia australiana.' }
  ] },
  { img: 'abo-diprotodon', leg: 'Esqueleto de Diprotodon optatum em exposição no Western Australian Museum.' },
  { img: 'abo-megafauna-cena', leg: 'Diprotodon e Genyornis numa paisagem pleistocénica, há cerca de 50 000 anos; interpretação artística. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 42 000 – 40 000 anos atrás', t: 'Mungo Lady e Mungo Man', x: 'Nos lagos secos de **Willandra** (Nova Gales do Sul), um corpo de mulher é cremado e outro, de homem, é enterrado coberto de ocre. Ficaram conhecidos como **Mungo Lady** (descoberta em 1968) e **Mungo Man** (1974). São dos mais antigos rituais funerários conhecidos do mundo. Os restos foram devolvidos aos povos Mutthi Mutthi, Ngiyampaa e Paakantyi, guardiões tradicionais (a Mungo Lady em 1992, o Mungo Man em 2017). A datação da Mungo Lady é debatida.' }
  ] },
  { img: 'abo-lago-mungo', leg: 'Dunas Walls of China, lago Mungo, Willandra.' },
  { linha: [
    { d: 'c. 37 000 anos atrás', t: 'Erupção em Budj Bim', x: 'O vulcão **Budj Bim** (sudoeste de Vitória) entra em erupção (datação de c. 36 900 anos, com margem de 3000 anos). A lava cria os campos de basalto que, milhares de anos depois, os Gunditjmara usam nas suas armadilhas de enguias. Os Gunditjmara dizem que Budj Bim é um ser ancestral cuja forma se vê na paisagem. Se esta narrativa guarda a memória da erupção é uma hipótese discutida.' },
    { d: 'c. 30 000 anos atrás', t: 'Moagem de sementes', x: 'Em **Cuddie Springs** (Nova Gales do Sul) há pedras de moer com resíduos de sementes de cerca de 30 000 anos (datação debatida). A transformação de sementes de gramíneas em farinha é uma das técnicas de subsistência mais antigas conhecidas.' },
    { d: 'c. 26 000 – 19 000 anos atrás', t: 'O pico da glaciação', x: 'O clima fica frio e seco, os desertos avançam e o mar desce mais de 100 metros. Muitas regiões do interior são abandonadas ou usadas só em curtos períodos; as terras altas da Tasmânia e dos Alpes recebem gelo. As populações sobrevivem em refúgios com água e reorganizam o território.' }
  ] },
  { img: 'abo-paisagem-glacial', leg: 'Paisagem fria e seca da Austrália central, há cerca de 20 000 anos; reconstrução conjetural. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 20 000 anos atrás', t: 'Pegadas de Willandra', x: 'Junto ao lago Mungo ficaram impressas, na argila húmida, centenas de **pegadas de crianças, mulheres e homens**, descobertas em 2003 e analisadas de novo em 2020: um instantâneo de um grupo a caminhar, a caçar e a brincar no fim do Pleistoceno.' },
    { d: 'c. 12 000 anos atrás (debatido)', t: 'Pinturas do Kimberley', x: 'Datações de **ninhos de vespas** ligados a pinturas no Kimberley (estudos de 2020) sugerem que a maior parte das figuras finas, chamadas **Gwion Gwion** (ou Bradshaw), terá c. 12 000 anos; há estimativas entre c. 3000 e c. 17 000. Os Ngarinyin e outros povos consideram-nas suas.' },
    { d: 'c. 14 000 – 8000 anos atrás', t: 'O mar sobe', x: 'Com o fim da glaciação, o mar sobe c. 120 m e engole planícies costeiras e o istmo entre a Austrália e a Tasmânia (c. 12 000 anos atrás). **Dezenas de histórias** de povos costeiros, de Vitória, de Austrália do Sul e de Queensland, falam de terras que ficaram debaixo de água; um estudo de Nunn e Reid sustenta que parte delas pode guardar a memória real de há 7000 a 10 000 anos, mas esta interpretação é discutida.' }
  ] },
  { img: 'abo-esquema-nivel-mar', leg: 'Esquema da expansão e submersão da Sahul: cerca de 20 000 e 12 000 anos antes do presente, e costa atual (0). Desenho baseado em dados NOAA ETOPO1; limiares simplificados, sem modelação regional isostática.' },
  { linha: [
    { d: 'c. 10 000 anos atrás', t: 'Bumerangues de madeira muito antigos', x: 'Em **Wyrie Swamp** (Austrália do Sul) acharam-se bumerangues de madeira, conservados na turfa, com cerca de 10 000 anos. Eram armas de caça sem regresso, como a maior parte dos bumerangues australianos.' },
    { d: 'c. 6600 anos atrás (c. 4600 a.C.)', t: 'Armadilhas de enguias', x: 'Um dos sistemas de canais e de açudes de pedra de **Budj Bim** foi datado por carbono-14 em cerca de 6600 anos. Os Gunditjmara usam-nos para capturar a enguia de barbatana curta (*kooyang*), em aquacultura que se manteve até à época colonial e, por isso, lhes valeu o Património Mundial (2019).' },
    { d: 'c. 4000 – 3500 anos atrás (c. 2000 a.C.)', t: 'O dingo e as pontas pequenas', x: 'O **dingo**, descendente de cães domésticos asiáticos, chega com navegadores do Sudeste Asiático e espalha-se por todo o continente. Por esta altura aparece um novo conjunto de pequenas lâminas e pontas de pedra, a tradição das «ferramentas pequenas». Se uma coisa causou a outra, ou foram independentes, discute-se.' },
    { d: 'c. 1500 – 1000 anos atrás (c. 500 – 1000 d.C.)', t: 'O didjeridu no norte', x: 'Pinturas no Parque Nacional de Kakadu mostram o instrumento em uso há cerca de 1500 anos (ou menos de 1000, segundo outras leituras); o **didjeridu**, de Arnhem Land, é um instrumento do norte do continente.' },
    { d: 'c. 1700 (talvez antes)', t: 'Chegam os macassarenses', x: 'Pescadores de Macáçar (Sulawesi, hoje Indonésia) vêm todos os anos, com as monções, para recolher o **trepang** (pepino-do-mar) na costa norte, o *Marege* dos macassarenses, e fazem comércio, trabalho e casamentos com os povos Yolngu e outros. Quando começou é debatido: c. 1720 para a maior parte dos autores, mas há quem proponha mais cedo. O comércio continuou até 1907.' },
    { d: '1606', t: 'Janszoon e o «Duyfken»', x: 'O holandês **Willem Janszoon**, no navio *Duyfken*, percorre a costa oeste do cabo York: é o primeiro contacto europeu documentado com a Austrália. Houve confrontos, com mortes entre a tripulação. Ele não percebeu que era um continente novo.' }
  ] },
  { img: 'abo-duyfken', leg: 'Réplica do navio Duyfken.' },
  { linha: [
    { d: '1642 – 1688', t: 'Outros navegadores', x: 'Abel **Tasman** avista a Tasmânia em 1642, e William **Dampier** passa pela costa noroeste em 1688 e 1699. Poucos contactos, quase todos curtos e tensos. Nada muda ainda para as nações do continente.' },
    { d: '29 de abril de 1770', t: 'Cook em Botany Bay', x: 'James **Cook**, no *Endeavour*, desembarca em Botany Bay (Kurnell), em terra dos **Gweagal** (povo Dharawal). Dois homens Gweagal resistiram ao desembarque; os marinheiros dispararam e um deles ficou ferido. Nas semanas seguintes Cook e os seus naturalistas, **Joseph Banks** e **Daniel Solander**, recolhem centenas de plantas. Cook foi instruído a tomar posse das terras só com o «consentimento dos nativos», mas nunca pediu nem houve tratado.' }
  ] },
  { img: 'abo-botany-bay', leg: 'Landing of Captain Cook at Botany Bay, 1770, E. Phillips Fox, 1902.' },
  { img: 'abo-endeavour-baia', leg: 'Endeavour em Botany Bay, 29 de abril de 1770; cena imaginada vista da costa. Ilustração gerada por IA.' },
  { linha: [
    { d: '22 de agosto de 1770', t: 'A posse britânica', x: 'Na ilha Possession, no estreito de Torres, Cook declara a costa leste território da Coroa britânica, com o nome de **Nova Gales do Sul**. Ninguém consulta as pessoas que ali vivem.' },
    { d: '1779 – 1786', t: 'A decisão de colonizar', x: 'Depois da perda das colónias norte-americanas, a Grã-Bretanha procura um sítio para enviar condenados. Joseph Banks sugere Botany Bay em 1779; o governo decide em 1786.' },
    { d: '18 – 26 de janeiro de 1788', t: 'A Primeira Frota', x: 'Onze navios com cerca de 1400 pessoas, mais de 750 condenados, comandados por **Arthur Phillip**, chegam a Botany Bay (18–20 de janeiro) e mudam-se para Port Jackson, onde a 26 de janeiro erguem a bandeira em **Sydney Cove**, em terra dos **Eora** (Gadigal). Fim do âmbito deste projeto.' }
  ] },
  { img: 'abo-sydney-cove', leg: 'Sydney Cove, Port Jackson, em 1788; aguarela do diário de William Bradley.' },
  { linha: [
    { d: 'Direito: 1788 – 1992', t: 'A «terra de ninguém»', x: 'A Coroa tratou a Austrália como terra sem soberania nem propriedade indígena, aplicando o princípio chamado mais tarde *terra nullius*, sem tratados nem compra. Só em **1992**, no caso **Mabo**, o Supremo Tribunal australiano reconheceu que o título nativo já existia antes da colonização.' }
  ] }
];

const mapa = [
  'Os povos aborígenes não tinham cidades nem capitais, mas tinham **geografia**: cada nação ligava-se a um território com nomes, lugares sagrados, caminhos e recursos. Em vez de uma lista de cidades, apresentamos algumas regiões bem conhecidas e os seus povos. Os nomes dos povos e a ortografia variam, e as fronteiras eram negociadas e mais flexíveis do que as de um mapa.',
  { tabela: { cab: ['Região', 'Povos (exemplos)', 'Local hoje', 'Para que ficou conhecida'], linhas: [
    ['Terra de Arnhem e Kakadu', 'Yolngu, Bininj/Mungguy, Mirarr, Jawoyn', 'Território do Norte', 'Madjedbebe; arte rupestre de Ubirr e Nourlangie; macassarenses'],
    ['Kimberley', 'Ngarinyin, Wunambal, Worrorra', 'Austrália Ocidental', 'Pinturas Gwion Gwion; rotas de troca do nácar'],
    ['Murujuga (península de Burrup)', 'Ngarluma, Yindjibarndi, Mardudhunera e outros', 'Pilbara, Austrália Ocidental', 'Um milhão de gravuras; Património Mundial em 2025'],
    ['Deserto central', 'Anangu (Pitjantjatjara, Yankunytjatjara), Arrernte', 'Território do Norte e Austrália do Sul', 'Uluru e Kata Tjuta; conhecimento do deserto; histórias das Sete Irmãs'],
    ['Lagos de Willandra', 'Mutthi Mutthi, Ngiyampaa, Paakantyi', 'Nova Gales do Sul', 'Mungo Lady e Mungo Man; pegadas de c. 20 000 anos'],
    ['Murray-Darling', 'Ngarrindjeri, Yorta Yorta, Ngemba', 'Sudeste', 'Pesca, açudes de Brewarrina, canoas de casca de árvore'],
    ['Sudoeste de Vitória', 'Gunditjmara', 'Vitória', 'Budj Bim; aquacultura de enguias; cabanas de pedra'],
    ['Região de Sydney', 'Eora (Gadigal), Dharawal (Gweagal), Darug', 'Nova Gales do Sul', 'Locais de contacto em 1770 e em 1788'],
    ['Trópicos húmidos', 'Yidinji, Djabugay e outros (Bama)', 'Queensland', 'Florestas tropicais; preparação de nozes tóxicas; escudos e cestos'],
    ['Tasmânia', 'Palawa', 'Tasmânia', 'Isolada da Austrália desde c. 12 000 anos; cultura própria'],
    ['Estreito de Torres', 'Ilhéus do Estreito de Torres (Meriam, Kala Lagaw Ya, etc.)', 'Entre a Austrália e a Nova Guiné', 'Povo **distinto**, de origem melanésia; horticultura e navegação']
  ] } },
  { h: 'Arnhem Land e Kakadu' },
  'O norte tropical, com chuvas de monção e planícies de inundação, é onde está o abrigo de **Madjedbebe** e uma das maiores concentrações de arte rupestre do mundo. O **Parque Nacional de Kakadu**, inscrito pela UNESCO em 1981 (património natural e cultural), tem mais de 5000 locais de arte, e é gerido pelos proprietários tradicionais (Bininj/Mungguy) em conjunto com o governo. Os **Yolngu**, do nordeste, foram os que mais contactaram com os macassarenses e guardam essa memória em cantos e em palavras.',
  { img: 'abo-kakadu', leg: 'Paisagem do Parque Nacional de Kakadu.' },
  { h: 'Murujuga e o Noroeste' },
  'Em **Murujuga** (península de Burrup, Pilbara), as rochas escuras de dolerito estão cobertas por **cerca de um milhão de gravuras**, de que se calcula que algumas tenham mais de 40 000 anos, embora a datação seja difícil e debatida. Mostram animais (incluindo o tilacino, extinto no continente há milénios), pessoas, figuras geométricas e cenas de pesca. Em julho de 2025, a UNESCO inscreveu a **Paisagem Cultural de Murujuga**, onde povos Ngarluma, Yindjibarndi, Mardudhunera e outros são os guardiões. As gravuras estão ameaçadas por poluição industrial vizinha, o que gera um forte debate.',
  { img: 'abo-murujuga', leg: 'Petróglifos de Murujuga, península de Burrup.' },
  { h: 'O deserto e as terras de Uluru' },
  'O deserto central parece vazio mas foi sempre habitado. Os **Anangu** conhecem cada charco, cada nascente de rocha e cada sítio com plantas comestíveis, e organizam o território por **cantos** e **histórias** de seres ancestrais, ligadas às formas de rochas e às nascentes. O **Uluru** e o Kata Tjuta foram devolvidos em 1985 aos Anangu e arrendados ao parque nacional.',
  { h: 'Budj Bim, no sudoeste de Vitória' },
  'Nos campos de basalto que a lava de **Budj Bim** deixou, os **Gunditjmara** construíram, em milhares de anos, um sistema de canais, açudes e reservatórios para gerir a água e capturar enguias ao longo da época das cheias. Ao lado, ergueram cabanas com bases de pedra, o que sugere povoação mais estável do que se pensava. Em 2019, **Budj Bim** foi o primeiro local do Património Mundial na Austrália inscrito unicamente pelo seu valor aborígene.',
  { img: 'abo-budj-bim', leg: 'Lake Surprise, na cratera de Budj Bim / Monte Eccles, Victoria.' },
  { h: 'Os ilhéus do Estreito de Torres' },
  'O Estreito de Torres tem cerca de 270 ilhas entre a Austrália e a Nova Guiné. Os seus habitantes, os **ilhéus do Estreito de Torres**, são **um povo distinto**, de língua e cultura próprias, ligado à Melanésia: praticam horticultura, navegam em canoas e comerciam com a Nova Guiné e com o continente. Não são aborígenes, mas o seu destino cruzou-se com o dos Aborígenes na colonização e nos direitos à terra. O caso **Mabo** (1992) nasceu na ilha de Mer (Murray), por iniciativa de **Eddie Koiki Mabo**, um ilhéu meriam.',
  { img: 'abo-torres', leg: 'Mapa do estreito de Torres.' },
  { h: 'Rotas, trocas e encontros' },
  'As nações estavam ligadas por **redes de troca e de caminho** de milhares de quilómetros. O **nácar** (concha de pérola) do Kimberley era levado, de mão em mão, até ao deserto central. O **ocre** vermelho era extraído em minas como **Wilgie Mia** (Austrália Ocidental), exploradas há milénios. O estimulante suave **pituri** (feita de uma planta) viajava de Queensland ao deserto. Os **banquetes da bunya**, na serra Bunya, juntavam todos os anos povos de grandes distâncias para colher as nozes do pinheiro-bunya, com diplomacia, casamentos e cerimónias. Estas rotas coincidem, em parte, com os **caminhos dos cantos** (*songlines*), que se descrevem em «Sociedade».',
  { img: 'abo-comercio-troca', leg: 'Troca de conchas, ocre e ferramentas entre grupos, cerca de 1500; cena conjetural. Ilustração gerada por IA.' }
];

const sociedade = [
  { caixa: 'Arqueologia e tradição oral', texto: [
    'Este capítulo mistura dois tipos de conhecimento. O que se sabe por **arqueologia** (ferramentas, datações, ossos, pinturas) vem com datas. O que vem da **tradição oral** e da lei dos povos, como o Sonho, vem com o nome da fonte e é descrito como conhecimento vivo, não como lenda. Algumas histórias, como as da subida do mar, podem guardar memórias de acontecimentos muito antigos, mas isso é uma hipótese em discussão. Por isso o texto não as trata nem como «mitos» nem como «provas».'
  ] },
  { h: 'Organização política e lei' },
  'Não havia reis, impostos ou exércitos. Cada grupo local (um **clã** ou uma **família alargada**) tinha o seu País; vários grupos, ligados por língua, casamento e cerimónia, formavam a nação. A autoridade pertencia aos **anciãos**, homens e mulheres, com conhecimento da lei, das histórias e dos locais, e as decisões importantes eram tomadas por consenso, com reuniões, trocas e alianças. A **lei** (muitas vezes chamada *Law*) vem dos seres ancestrais e rege as relações entre as pessoas, o território, as plantas e os animais; quem vive no País tem o dever de o cuidar.',
  { h: 'Parentesco e família' },
  'O parentesco é a estrutura de tudo. Em muitas regiões, as pessoas pertencem a uma **metade** (moiety) ou a uma de quatro ou oito **secções** (os chamados «nomes de pele», *skin names*), que dizem com quem se pode casar e como se trata cada pessoa da comunidade. Cada indivíduo tem também um **totem** (um animal, uma planta ou um fenómeno), herdado da família, e responsabilidades para com ele. Por isso um estranho que chega a uma comunidade pode ser colocado, logo na primeira conversa, num lugar do sistema de parentesco.',
  { h: 'Línguas' },
  'Em 1788 falavam-se cerca de **250 línguas** distintas e talvez 600 dialetos. A maior parte das línguas do continente pertence à família **pama-nyungan**, que cobre quase todo o continente fora do norte; no norte há muitas famílias mais pequenas e muito diversas, de origem debatida. Quase todas as pessoas eram **multilingues**. Hoje cerca de 120 línguas ainda se falam, mas a maior parte está em risco, e há projetos de revitalização.',
  { h: 'O Sonho (Dreaming) e a religião' },
  { caixa: 'Um aviso importante', texto: [
    'O **Sonho** (*the Dreaming*, em inglês) não é «mitologia» no sentido de contos para entreter, nem «religião» à maneira das religiões do Mediterrâneo. É a forma como muitas nações descrevem a **origem e a lei do mundo**: seres ancestrais viajaram pelo território, e ao fazê-lo criaram rios, montanhas, animais e leis, e continuam presentes nos locais e nas pessoas. Não é só um passado: o antropólogo W. E. H. Stanner escreveu que é «todo o tempo», o **«everywhen»**. A palavra *Dreaming* é tradução, e há muitos nomes locais (*Jukurrpa* para os Warlpiri, *Tjukurpa* para os Anangu, *Ngarranggarni*, *Bugarrigarra* e outros).',
    'Parte do conhecimento é **restrito** a homens, a mulheres ou a pessoas iniciadas, e não se conta a quem não tem direito. O que se segue é só o que os próprios povos e as instituições tornam público.'
  ] },
  'Cada história pertence a um País e a uma família, e não se pode simplesmente trocar de lugar. As histórias explicam o mundo, mas também **ensinam a viver nele**: onde encontrar água, que comer, o que é proibido, como tratar os parentes. Transmitem-se em cantos, danças, pinturas e desenhos na areia.',
  { tabela: { cab: ['Ser ou tema', 'Onde', 'Do que fala (em termos públicos)'], linhas: [
    ['Serpente Arco-Íris (muitos nomes: *Ngalyod*, *Yurlunggur*, *Wagyl*, etc.)', 'Em grande parte do continente, com versões diferentes', 'Ser ligado à água, às nascentes e às estações; protege e pune. Não é a mesma figura em todo o lado'],
    ['Baiame', 'Kamilaroi, Wiradjuri e povos vizinhos, sudeste', 'Criador e doador da lei; a tradição Ngemba atribui-lhe os açudes de Brewarrina'],
    ['As Sete Irmãs', 'Do deserto central ao oeste e ao sul (muitos povos)', 'Um canto sobre sete irmãs perseguidas por um homem, que se transformam nas estrelas das Plêiades; percorre milhares de quilómetros'],
    ['Budj Bim', 'Gunditjmara, sudoeste de Vitória', 'Ser ancestral cuja forma é o vulcão; fala da lava e da paisagem'],
    ['O Emu no Céu', 'Kamilaroi e outros', 'Constelação formada pelas manchas escuras da Via Láctea; a sua posição indica quando os emus põem os ovos']
  ] } },
  { h: 'Os caminhos dos cantos (songlines)' },
  'Muitas histórias do Sonho seguem **trajetos** de seres ancestrais através do território, chamados em inglês *songlines* ou *dreaming tracks*. Cada trecho tem um **canto**, com versos que descrevem o que se encontra: montes, charcos, árvores, direções. Quem sabe o canto pode percorrer centenas de quilómetros sem se perder, e quem o canta *mantém* a paisagem. Os trajetos cruzam nações e funcionam também como **mapas, calendários e arquivos de leis**. O livro popular de Bruce Chatwin (1987) divulgou o termo, mas é criticado pela forma como o trata; para o conceito, consultem-se as vozes dos próprios povos.',
  { h: 'Arte rupestre e pintura' },
  'A Austrália tem uma das mais longas tradições de arte do mundo, de **pintura**, de **gravura** e de **desenho no chão**. Muitos locais continuaram a ser repintados por séculos ou milénios por quem era responsável por eles, por isso alguns «pertencem» a várias épocas. A datação é difícil: os arqueólogos usam camadas de solo com pigmento, ninhos de vespas por cima ou por baixo da tinta, ou escritos e estilos.',
  { img: 'abo-ubirr', leg: 'Galeria de pinturas rupestres de Ubirr, com peixes em estilo raio-X.' },
  { img: 'abo-nourlangie', leg: 'Pinturas rupestres na galeria pública de Burrungkuy / Nourlangie.' },
  { img: 'abo-gwion', leg: 'Pinturas Gwion Gwion perto de Big Mertens Falls, Parque Nacional de Mitchell River, Kimberley.' },
  { lista: [
    '**Kakadu e Terra de Arnhem:** a arte rupestre cobre dezenas de milhares de anos. Inclui figuras de animais naturalistas, figuras finas e dançantes, e o famoso estilo **raio-X**, dos últimos milénios, com os ossos e os órgãos do animal. Em locais como Ubirr e Burrunguy, os guardiões continuam a cuidar das pinturas.',
    '**Kimberley:** os **Gwion Gwion** (também chamados «Bradshaw», do nome de um colono) são figuras elegantes de pessoas, com adornos, e os **Wandjina** são figuras de seres ancestrais ligados à chuva, com grandes olhos, que os povos do Kimberley ainda hoje repintam: são cuidados e restritos, por isso não os descrevemos mais.',
    '**Murujuga:** gravuras (petróglifos) em rocha escura, de grande antiguidade, com animais, figuras humanas e geometria.',
    '**Pintura em casca de árvore:** em Arnhem Land, as cascas aplanadas são pintadas com ocres e argila branca, em padrões de malha e figuras; é uma tradição ainda viva.',
    '**Desenho na areia e pintura no corpo:** muito importantes, mas efémeros e quase impossíveis de conservar para a arqueologia.'
  ] },
  { img: 'abo-casca', leg: 'Wambiddyer anteater, pintura em casca de árvore de autor Kunwinjku não identificado; National Gallery of Australia.' },
  { h: 'Fogo e gestão da terra' },
  'Os povos aborígenes usaram o **fogo** de forma deliberada e regular para gerir a paisagem: queimadas pequenas e frias, em mosaico, na estação certa, para renovar a erva, atrair animais, abrir caminhos, reduzir os incêndios grandes e proteger zonas sensíveis. O arqueólogo **Rhys Jones** chamou-lhe, em 1969, *fire-stick farming*. O historiador **Bill Gammage** (2011) defendeu, em *The Biggest Estate on Earth*, que grande parte do «campo natural» que os colonos viram em 1788, com prados e matas abertas, era na verdade uma paisagem **cuidada**. Quão antigo e quão extenso foi esse uso é debatido; hoje, as «queimadas culturais» voltam a ser usadas em vários parques.',
  { img: 'abo-fogo-gestao', leg: 'Queimada de baixa intensidade em mosaico; interpretação artística da gestão da paisagem. Ilustração gerada por IA.' },
  { h: 'Economia, trocas e alimentação' },
  'Não havia moeda nem mercados. As pessoas deslocavam-se com as estações, e o alimento vinha da **caça, da pesca e da colheita**: cangurus, emus, peixe, marisco, tartarugas, lagartos, ovos, formigas e larvas (como as «witchetty grubs»), raízes (inhames), frutos (ameixa de Kakadu), sementes de gramíneas, nozes (bunya, cicas, depois de lixiviadas para tirar o veneno). As mulheres tinham o grosso da colheita; os homens, a caça maior, mas as tarefas variavam muito de região para região. A comida partilhava-se por regras de parentesco, e o que se **trocava** (conchas, ocre, ferramentas) criava ligações e obrigações.',
  { img: 'abo-colheita-sementes', leg: 'Moagem de sementes num acampamento; cena quotidiana imaginada. Ilustração gerada por IA.' },
  { img: 'abo-moagem', leg: 'Pedras de moagem e outros utensílios num antigo local de preparação de alimentos Martu; fotografia de Fiona Walsh, 1987.' },
  { lista: [
    '**Sementes:** de gramíneas e de acácias, moídas e cozidas em pequenos «pães» sobre as brasas.',
    '**Nozes tóxicas:** as cicas e outros frutos, que exigem lavagem em água corrente e fermentação para eliminar o veneno, o que mostra um saber químico aprofundado.',
    '**Fornos de terra:** pedras quentes e folhas, para cozinhar carne, raízes e peixe.',
    '**Bunya:** a safra do pinheiro-bunya, de três em três anos, no sudeste de Queensland, juntava centenas de pessoas.'
  ] },
  { h: 'O debate: caçadores-recolectores ou agricultores?' },
  { caixa: 'Dark Emu e o debate', texto: [
    'Em 2014, o escritor Bruce Pascoe publicou *Dark Emu*, em que defende que os povos aborígenes praticavam **agricultura e aquacultura** e viviam em casas e aldeias estáveis. Os historiadores concordam que os aborígenes **geriam** ativamente plantas, água e animais, e que houve sistemas muito sofisticados (como Budj Bim, os açudes de Brewarrina ou a colheita de inhames), mas discutem se isso é «agricultura» no sentido de semear e colher campos. Há também discussão sobre algumas das provas citadas por Pascoe e sobre a sua identidade. A expressão mais usada pelos investigadores é «**gestão da terra**» e «caçadores-recolectores sofisticados».'
  ] },
  { h: 'Pesca e aquacultura' },
  'Os povos costeiros e fluviais pescavam com **lanças, redes, linhas de anzol** (de concha, nas costas do sul) e **armadilhas de pedra**. Em **Budj Bim**, os Gunditjmara fizeram canais, açudes e cestos tecidos para guardar enguias, e outros povos construíram **armadilhas de maré**. Em **Brewarrina** (Nova Gales do Sul), o complexo de **açudes de pedra** no rio Barwon, o *Ngunnhu* (a que a tradição Ngemba chama «de Baiame»), reunia nações de toda a região em épocas de pesca e de cerimónia. A tradição fala de dezenas de milhares de anos; a datação arqueológica exata falta.',
  { img: 'abo-eel-traps', leg: 'Reconstituição conjetural dos canais e armadilhas de enguias Gunditjmara em paisagem de basalto. Ilustração gerada por IA.' },
  { img: 'abo-pesca-enguias', leg: 'Pesca de enguias em canais de basalto com armadilhas de cestos; reconstrução conjetural. Ilustração gerada por IA.' },
  { img: 'abo-brewarrina', leg: 'Açudes de pedra de Brewarrina, Ngunnhu.' },
  { h: 'Casas e abrigos' },
  'As habitações variavam com o clima e a estação. No deserto e na savana, usavam-se **quebra-ventos** de ramos e **cabanas** de ramos e casca (*wiltja*, *gunyah* ou *humpy*), que se faziam em pouco tempo. Em regiões chuvosas, como os trópicos e a Tasmânia, havia **cabanas de casca e ramos** mais sólidas, em forma de cúpula. Os **Gunditjmara** deixaram bases de pedra de cabanas circulares, o que sugere povoação mais estável. As cavernas e os abrigos eram usados como refúgio e para cerimónias.',
  { img: 'abo-casa-gunditjmara', leg: 'Habitações Gunditjmara junto a zonas húmidas no sudoeste de Victoria; reconstrução conjetural. Ilustração gerada por IA.' },
  { h: 'Vestuário e adornos' },
  'O clima da maior parte do continente dispensava roupas, e usava-se pouca coisa: cintos, bandas, avental, colares de conchas ou sementes, penas, **pintura do corpo** com ocre, argila e carvão. No sul e na Tasmânia, nas noites frias, usavam-se **mantos de pele de gambá** e de canguru, por vezes decorados com desenhos que contavam a história da pessoa. Os desenhos, as cicatrizes e as pinturas marcavam o clã, a idade e a cerimónia.',
  { h: 'Música, dança e jogos' },
  'O **canto**, a **dança** e a **música** estão ligados às histórias e à lei, e são sempre feitos no contexto certo. Os instrumentos mais comuns são os **paus de ritmo** (*clapsticks*), as palmas e os rombos. O **didjeridu** (nomes locais: *yiḏaki*, *mako*, e dezenas de outros) é de Arnhem Land e do norte, e é um tronco de eucalipto escavado por térmitas; tradicionalmente, o seu uso em cerimónias era reservado aos homens, mas isso varia de região para região. Os **corroborees** são encontros de canto e dança. Entre os jogos, havia **jogos com bola de pele** como o *marn grook* (Vitória); a ligação com o futebol australiano é discutida.',
  { img: 'abo-didgeridoo', leg: 'Didjeridu decorado em exposição no Musical Instrument Museum, Phoenix.' },
  { h: 'Ciência e conhecimento do céu' },
  'O conhecimento da natureza era sistemático e transmitido por histórias e cantos: calendários de estações baseados em plantas, animais e ventos (os Yolngu distinguem seis estações, outros povos cinco ou sete), etno-botânica, e uma **astronomia** rica. Os povos aborígenes usavam as estrelas e as **manchas escuras da Via Láctea** (como o Emu no Céu) como calendário, para dizer quando apanhar ovos, sementes e peixe. Algumas histórias de povos do norte explicam também as **marés** e os **eclipses**.',
  { h: 'Tecnologia e ferramentas' },
  'A tecnologia era, sobretudo, de **pedra, madeira, osso, fibra e resina**. Há ferramentas de pedra lascada e polida, **machados** de gume polido, **lâminas** e pontas pequenas coladas a cabos com **resina de spinifex** (uma gramínea do deserto), **tacos de madeira**, **redes**, **cestos**, **recipientes de casca e de pele** para água, **fios de cabelo e de fibra**, e **canoas** de casca de árvore. Estes objetos exigiam muito conhecimento de materiais e de fogo.',
  { img: 'abo-pedra-ferramentas', leg: 'Faca aborígene de pedra com cabo, coleção Wellcome.' },
  { img: 'abo-canoa', leg: 'Ilustração histórica de uma canoa de casca de árvore Kurnai, publicada em Native Tribes of South-East Australia.' },
  { h: 'Caça e armas: bumerangue e propulsor' },
  'As armas mais conhecidas são o **bumerangue** e o **propulsor** (*woomera*). Nem todos os bumerangues voltam: os **de regresso**, mais leves, eram usados para brincar, para caçar aves e como instrumento de música, e só se faziam em certas regiões; os **sem regresso** eram armas de caça e de combate, mais pesadas e retas. Os mais antigos bumerangues de madeira conhecidos na Austrália vêm de Wyrie Swamp (c. 10 000 anos). O **propulsor** é uma tábua com um gancho que aumenta o alcance e a força de uma lança; foi usado em quase todo o continente.',
  { img: 'abo-boomerang', leg: 'Bumerangues aborígenes em museu.' },
  { img: 'abo-propulsor', leg: 'Propulsores de lança aborígenes, woomera.' },
  { img: 'abo-caca-canguru', leg: 'Caçadores aproximam-se de cangurus com lanças e propulsores; cena conjetural. Ilustração gerada por IA.' },
  { h: 'Conflito e guerra' },
  'Havia **conflitos** entre grupos, por ofensas, por mortes, por mulheres, por locais, mas eram geralmente regulados por **regras**: duelos formais, combates ritualizados com poucas mortes, reparação (*payback*) e mediação de anciãos. A imagem de tribos em guerra constante é falsa, tal como a de um paraíso sem violência. A verdadeira violência em grande escala começaria depois de 1788, com a colonização, e está fora do âmbito deste capítulo.',
  { h: 'Contactos com o exterior' },
  'Antes de 1788, os contactos com o exterior foram **no norte**. Os **macassarenses**, vindos de Sulawesi nas monções, passavam meses nas costas de Arnhem Land e do Kimberley a apanhar e a secar trepang para o mercado chinês. Ficaram **tamarindeiros**, palavras, canoas, ferramentas de ferro e histórias em línguas e em arte rupestre (há pinturas de barcos a vela). Os povos Yolngu eram parceiros e, por vezes, rivais, não vítimas, e recebiam bens, trabalhavam nos barcos e até viajaram para Macáçar.',
  { img: 'abo-macassarenses', leg: 'Macassareses e Yolngu a trabalhar e trocar bens na costa norte, cerca de 1800; cena imaginada. Ilustração gerada por IA.' }
];

const personalidades = [
  'Antes de 1788 não há nomes de pessoas aborígenes nos documentos, pois não houve escrita. Há as histórias dos povos, que guardam outra memória, mas os nomes pessoais da época não se conservaram, ou são reservados às famílias. Em vez de inventar biografias, listamos **personagens da arqueologia e da História** associadas ao período. Em respeito pelas comunidades, os restos humanos de que se fala foram devolvidos aos guardiões tradicionais.',
  { h: 'Mungo Lady e Mungo Man (c. 42 000 – 40 000 anos atrás)' },
  'Nomes dados por arqueólogos aos restos de duas pessoas dos lagos de Willandra, uma mulher cremada e um homem enterrado com ocre. O nome verdadeiro delas perdeu-se. Foram durante décadas objeto de ciência e depois **devolvidos** aos guardiões tradicionais (1992 e 2017), que defendem que as pessoas do passado merecem o mesmo respeito que as de hoje. São lembrados com o cuidado que a sua comunidade pede.',
  { h: 'Jim Bowler (n. 1930)' },
  'Geólogo australiano que descobriu os restos de **Mungo Lady** (1968) e de **Mungo Man** (1974), nos lagos de Willandra, e demonstrou, pela geologia do lago, que o povoamento remontava a dezenas de milhares de anos. Foi decisivo para mudar a ideia de que os aborígenes seriam de ocupação recente.',
  { h: 'Rhys Jones (1941 – 2001)' },
  'Arqueólogo galês-australiano, criou o termo ***fire-stick farming*** (1969), em que descreveu o uso do fogo para gerir a paisagem, e estudou os aborígenes da Tasmânia. Mudou a forma de ver os povos caçadores-recolectores.',
  { h: 'W. E. H. Stanner (1905 – 1981)' },
  'Antropólogo australiano que escreveu sobre o Sonho (*The Dreaming*, 1953) e que cunhou a expressão **«everywhen»** para dizer que este tempo não passou. Foi também um crítico do que chamou o «grande silêncio» da historiografia australiana sobre os aborígenes (1968).',
  { h: 'Willem Janszoon (c. 1571 – depois de 1630)' },
  'Navegador holandês da Companhia das Índias Orientais. Em 1606, no *Duyfken*, percorreu a costa do cabo York: foi o primeiro contacto europeu documentado com a Austrália. Houve confrontos, e ele não percebeu que se tratava de um novo continente.',
  { h: 'James Cook (1728 – 1779)' },
  'Navegador e cartógrafo britânico. Em 1770 mapeou a costa leste da Austrália e tomou-a para a Coroa. Desembarcou em Botany Bay a 29 de abril de 1770, em terra dos **Gweagal**, e teve um contacto curto e tenso. As suas instruções falavam em obter o «consentimento dos nativos», o que nunca aconteceu.',
  { img: 'abo-cook', leg: 'James Cook, retrato de Nathaniel Dance, National Maritime Museum.' },
  { h: 'Joseph Banks (1743 – 1820)' },
  'Naturalista que acompanhou Cook, recolheu centenas de plantas em Botany Bay e, em 1779, recomendou ao Parlamento britânico a colonização de Botany Bay. Descreveu os habitantes pouco densos e sem agricultura, um argumento que ajudou a justificar a ocupação.',
  { h: 'Arthur Phillip (1738 – 1814)' },
  'Oficial naval, primeiro governador de Nova Gales do Sul, chefiou a Primeira Frota e fundou a colónia de Sydney em 1788. As instruções recebidas mandavam viver «em amizade» com os habitantes, mas ordenou também que alguns fossem capturados para aprender a sua língua.',
  { h: 'Arabanoo (? – 1789)' },
  'Homem do povo Eora (da zona de Manly), capturado em dezembro de 1788 por ordem de Phillip. Viveu com ele e ajudou os britânicos a compreender os Eora. Morreu de varíola em maio de 1789, a epidemia que devastou os povos de Sydney.',
  { h: 'Bennelong (c. 1764 – 1813)' },
  'Homem do povo Eora (Wangal), capturado em 1789 e depois ligado ao governador Phillip. Em 1792 foi a Inglaterra (diz-se que conheceu o rei Jorge III, mas não há prova direta). Voltou a Sydney em 1795, e viveu entre os dois mundos, com dificuldades. Os seus relatos são das poucas vozes eora dos primeiros anos. Foi uma figura entre dois mundos, hoje usada para falar da história dos Eora.',
  { img: 'abo-bennelong', leg: 'Bennelong, gravura de Samuel John Neele publicada em 1803; Museu Britânico.' },
  { h: 'Pemulwuy (c. 1750 – 1802)' },
  'Homem Bidjigal (do povo Darug, na região de Botany Bay), líder da resistência aborígene nos primeiros anos da colónia (a partir de 1790). Foi morto em 1802. Está fora do âmbito cronológico, mas é lembrado como símbolo de resistência.',
  { h: 'Eddie Koiki Mabo (1936 – 1992)' },
  'Ilhéu meriam de Mer (Murray Island), no Estreito de Torres, que lançou em 1982 o processo contra o estado de Queensland. A decisão do **Supremo Tribunal em 1992**, cinco meses depois da sua morte, reconheceu o **título nativo** e deitou por terra a ideia de *terra nullius*. Não é um aborígene, mas um ilhéu do Estreito de Torres, e a sua história é central para os dois povos.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**Uma cultura viva:** a continuidade, durante dezenas de milhares de anos, de lei, língua, canto e ligação ao País.',
    '**Arte:** uma das mais antigas e mais longas tradições de arte rupestre, hoje continuada na pintura de papel e de tela do deserto central e das comunidades de Arnhem Land. O movimento de **Papunya Tula** (1971) levou a pintura de pontos e círculos a museus de todo o mundo.',
    '**Ciência da paisagem:** o uso do fogo, a gestão de água e de peixe, o conhecimento de plantas e animais, e a observação do céu.',
    '**Direito:** o reconhecimento do **título nativo** (1992), a devolução de terras como Uluru (1985), e a repatriação de restos humanos de museus.',
    '**Palavras:** *canguru*, *koala*, *bumerangue*, *dingo*, *wombat* e muitas outras vieram de línguas aborígenes para o inglês e para outras línguas.'
  ] },
  { h: 'Arte e arquitetura' },
  'Não há templos nem cidades, mas há **arquitetura da paisagem**: os canais de Budj Bim, os açudes de Brewarrina, as cabanas de pedra dos Gunditjmara, os círculos de pedras e os caminhos. A arte é feita de **ocre, carvão, argila e gesso**: vermelhos, amarelos, brancos e pretos, entre os pigmentos mais antigos usados no mundo. A pintura contemporânea mantém a mesma ligação aos locais, com pontos, linhas e círculos que contam o País, sem mostrar o que não pode ser mostrado.',
  { h: 'Redescoberta e investigação' },
  'A ciência ocidental só reconheceu a antiguidade dos povos aborígenes na segunda metade do século XX. Até aos anos 1960, pensava-se que a ocupação do continente tinha poucos milhares de anos. A datação por **radiocarbono** e as escavações em Willandra (1968), em Madjedbebe (1973) e noutros locais mudaram tudo. Hoje, as investigações são feitas **com as comunidades**, que decidem o que se estuda e o que se mostra, e o AIATSIS (Instituto Australiano de Estudos Aborígenes e dos Ilhéus do Estreito de Torres) tem normas éticas próprias.',
  { h: 'Onde visitar e aprender' },
  { lista: [
    '**Parque Nacional de Kakadu** (Território do Norte): Ubirr, Burrunguy (Nourlangie) e Madjedbebe (visitas só com os guardiões).',
    '**Uluru-Kata Tjuta** (Território do Norte): centro cultural dos Anangu; a escalada está fechada desde 2019.',
    '**Budj Bim** (Vitória): centro cultural Tae Rak e percursos guiados pelos Gunditjmara.',
    '**Parque Nacional de Mungo** (Willandra Lakes, NSW): a duna das «Muralhas da China» (Walls of China) e visitas guiadas.',
    '**Murujuga** (Austrália Ocidental): gravuras, com o Murujuga Living Knowledge Centre.',
    '**Museus:** Museu Nacional da Austrália (Camberra), Museu da Austrália do Sul (Adelaide), Museu de Melbourne (Bunjilaka) e, na Europa, o Museu Britânico e o Musée du quai Branly (Paris). Alguns avisam que há imagens de pessoas falecidas.'
  ] },
  { h: 'Ao visitar: respeito' },
  { lista: [
    'Peça licença antes de fotografar pessoas, e não fotografe locais assinalados como restritos.',
    'Não pise nem toque nas pinturas e nas gravuras; fique nos percursos.',
    'Pergunte às comunidades e aos guias o que podem contar, e não insista no que não podem.',
    'Dê preferência a guias, visitas e centros culturais geridos pelos próprios povos.'
  ] },
  { caixa: 'Nota final: depois de 1788 e hoje', texto: [
    'A chegada da Primeira Frota foi o começo de uma **história de perdas e de resistência** que ficou fora do âmbito deste texto: epidemias (a varíola de 1789 atingiu duramente os Eora e povos vizinhos), perda de terras, violência, separação forçada de crianças das famílias (as «Gerações Roubadas», até aos anos 1970) e proibição de línguas e de cerimónias. Os povos aborígenes sobreviveram, resistiram e reconstruíram, e hoje são mais de 800 000 pessoas, com línguas, leis, artistas, cientistas, juristas, escritores e políticos que continuam o que começou há dezenas de milhares de anos.',
    'Os **ilhéus do Estreito de Torres** são um povo próprio, com a sua bandeira, línguas e história, e partilham com os aborígenes muitos direitos e lutas. Este texto usa o passado para descrever o que a arqueologia e a História mostram, mas **estes povos estão vivos**, e as suas vozes são a melhor fonte. Para saber mais, consulte o **AIATSIS** (aiatsis.gov.au), o Museu Nacional da Austrália e os sítios dos conselhos de terras e dos centros de arte das próprias comunidades.'
  ] }
];

const quiz = [
  { p: 'Há cerca de quanto tempo se estima que os humanos chegaram à Austrália?', op: ['Cerca de 5000 anos', 'Cerca de 20 000 anos', 'Entre 50 000 e 65 000 anos', 'Cerca de 200 000 anos'], certa: 2, exp: 'As datas de Madjedbebe apontam para 65 000 anos (debatido); outras leituras preferem c. 50 000. Em qualquer dos casos, são dezenas de milhares de anos.' },
  { p: 'Como se chamava o continente único que unia a Austrália, a Nova Guiné e a Tasmânia?', op: ['Gondwana', 'Sahul', 'Pangeia', 'Oceânia'], certa: 1, exp: 'A Sahul existiu enquanto o mar esteve mais baixo e separou-se com a subida do nível do mar no fim da glaciação.' },
  { p: 'Quantas línguas aborígenes, aproximadamente, se falavam em 1788?', op: ['Uma única', 'Cerca de 20', 'Cerca de 250', 'Mais de 2000'], certa: 2, exp: 'Falavam-se cerca de 250 línguas e talvez 600 dialetos. Hoje cerca de 120 ainda se falam, a maioria em risco.' },
  { p: 'O que é Madjedbebe?', op: ['Um vulcão em Vitória', 'Um abrigo rochoso de Arnhem Land com ocupação muito antiga', 'Uma lei dos Anangu', 'Um instrumento musical'], certa: 1, exp: 'É o abrigo onde as escavações indicaram ocupação há c. 65 000 anos, uma data debatida.' },
  { p: 'Que descoberta de c. 40 000 anos foi feita nos lagos de Willandra, em Mungo?', op: ['Uma pirâmide', 'Uma mulher cremada e um homem enterrado com ocre', 'Um navio', 'Um tesouro de ouro'], certa: 1, exp: 'Mungo Lady e Mungo Man, devolvidos aos guardiões tradicionais (1992 e 2017).' },
  { p: 'Que animais fazem parte da megafauna extinta da Sahul?', op: ['Diprotodonte e Genyornis', 'Mamute e rinoceronte-lanudo', 'Dinossauros', 'Tigre-de-dentes-de-sabre'], certa: 0, exp: 'O diprotodonte (parente gigante do vombate) e a ave Genyornis desapareceram entre c. 46 000 e 40 000 anos atrás.' },
  { p: 'O que é o «Sonho» (Dreaming) para muitos povos aborígenes?', op: ['Uma lenda infantil', 'Uma coleção de contos sem importância', 'A origem e a lei do mundo, que continua presente', 'Um calendário agrícola'], certa: 2, exp: 'Não é só mito: é lei, território e identidade, em vigor «em todo o tempo», o «everywhen» de Stanner.' },
  { p: 'O que são os «songlines»?', op: ['Estradas romanas', 'Trajetos de seres ancestrais, descritos em cantos, que ligam locais e funcionam como mapas', 'Moedas', 'Barcos de pesca'], certa: 1, exp: 'Cada trecho tem um canto com as indicações do que se encontra pelo caminho.' },
  { p: 'Qual foi o povo que construiu o sistema de aquacultura de enguias em Budj Bim, Património Mundial desde 2019?', op: ['Anangu', 'Yolngu', 'Gunditjmara', 'Noongar'], certa: 2, exp: 'Um dos sistemas foi datado em c. 6600 anos; os Gunditjmara continuam a ser guardiões do local.' },
  { p: 'O que quer dizer *fire-stick farming*?', op: ['Agricultura com arados', 'Gestão da paisagem com fogos pequenos e controlados', 'Uma técnica de pesca', 'Um jogo de crianças'], certa: 1, exp: 'O termo foi criado em 1969 por Rhys Jones; os debates continuam sobre o seu alcance.' },
  { p: 'De que região vem o didjeridu?', op: ['Tasmânia', 'Deserto central', 'Norte da Austrália, em especial Arnhem Land', 'Sudeste da Austrália'], certa: 2, exp: 'É um instrumento do norte do continente; nomes locais incluem yiḏaki e mako.' },
  { p: 'Quem visitava regularmente a costa norte da Austrália para recolher trepang?', op: ['Os portugueses', 'Os macassarenses de Sulawesi', 'Os japoneses', 'Os chineses de Cantão'], certa: 1, exp: 'Vinham com as monções e trocavam bens, palavras e técnicas com os Yolngu e outros povos, até 1907.' },
  { p: 'Quem desembarcou em Botany Bay em 29 de abril de 1770?', op: ['Willem Janszoon', 'Arthur Phillip', 'Abel Tasman', 'James Cook'], certa: 3, exp: 'Cook desembarcou em terra dos Gweagal (povo Dharawal).' },
  { p: 'Em que ano e onde chegou a Primeira Frota britânica, que marca o fim deste âmbito?', op: ['1606, cabo York', '1770, Botany Bay', '1788, Sydney Cove (Port Jackson)', '1901, Camberra'], certa: 2, exp: 'A 26 de janeiro de 1788, sob o comando de Arthur Phillip, em terra dos Eora.' },
  { p: 'Que decisão de 1992 reconheceu o título nativo e rejeitou a ideia de «terra de ninguém»?', op: ['O caso Mabo', 'A Declaração de Uluru', 'A lei da Federação', 'O Tratado de Sydney'], certa: 0, exp: 'O caso Mabo, iniciado pelo ilhéu Eddie Mabo, de Mer, no Estreito de Torres.' }
];

export default {
  id: 'aborigenes',
  cor: '#b8602f',
  emblema: '../assets/img/aborigenes.png',
  nome:    { pt: 'Aborígenes australianos', en: 'Aboriginal Australians' },
  periodo: { pt: 'c. 65 000 a.C. – 1788', en: 'c. 65,000 BC – AD 1788' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
