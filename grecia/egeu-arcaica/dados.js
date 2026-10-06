// DO EGEU À ÉPOCA ARCAICA — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura e mesmos ids de imagem).
// Cronologia média, c. 3000 – 480 a.C. As datas da Idade do Bronze assentam em arqueologia e radiocarbono (e são discutidas); as da época arcaica assentam muitas vezes em tradições que os gregos fixaram séculos depois, e vêm marcadas com «c.» ou «segundo a tradição».
// Imagens: cada {img:'id'} procura o ficheiro  grecia/egeu-arcaica/img/id.jpg  (ver IMAGENS_GRECIA_EGEU_ARCAICA.md).
import EN from './dados-en.js';
import { GRUPO } from '../grupo.js';

const visao = [
  { caixa: 'Em resumo', texto: [
    'Esta página conta o **primeiro e mais longo capítulo** da história grega: cerca de dois mil e quinhentos anos, desde as ilhas **Cíclades** e os palácios de **Creta** na Idade do Bronze até às vésperas das Guerras Médicas, em 480 a.C. Nela cabem duas civilizações da Idade do Bronze, os **minoicos** (Creta) e os **micénicos** (continente), o **colapso** de c. 1200 a.C., uns séculos de empobrecimento e de reinvenção (a chamada **Idade Obscura**) e, por fim, o mundo da **época arcaica**, em que se formam as **póleis**, se cria o alfabeto, se escrevem os poemas de **Homero** e de **Hesíodo**, se fundam colónias de Marselha ao mar Negro, aparecem os **tiranos** e nascem os modelos políticos de **Esparta** e de **Atenas**.',
    'É uma história com poucos documentos e muita lenda. Os minoicos escreveram numa língua que ainda não sabemos ler; os micénicos deixaram só inventários; os poetas da época arcaica cantaram um passado heroico em que se misturam memória e invenção; e os próprios gregos escreveram a história desta época séculos mais tarde. Por isso a página distingue o mais possível o que é **arqueologia**, o que é **texto da época** e o que é **tradição lendária**.'
  ] },
  { img: 'gea-mapa-egeu-bronze', leg: 'Mapa do mar Egeu na Idade do Bronze, com Creta, as Cíclades e os principais centros micénicos.' },
  { h: 'Onde' },
  'O cenário é o **mar Egeu** e as terras que o rodeiam: a Grécia continental (a Ática, a Beócia, o Peloponeso), a grande ilha de **Creta** ao sul, o círculo das **Cíclades** (Naxos, Paros, Milos, Tera e outras), a ilha de **Eubeia** e a costa da atual Turquia, a **Jónia**. É um mundo de montanhas, de pequenas planícies e de mar sempre à vista, onde viajar de barco era mais fácil do que atravessar a terra. Na época arcaica, o espaço alarga-se: Sicília e sul de Itália, Líbia, Egito, sul de França, costas do mar Negro.',
  { img: 'gea-idolo-ciclades', leg: 'Ídolo cicládico de braços cruzados, em mármore, c. 2800–2300 a.C. As Cíclades foram o primeiro grande centro artístico do Egeu.' },
  { h: 'Quando' },
  'As datas são aproximadas. A Idade do Bronze é datada por cerâmica, radiocarbono e sincronismos com o Egito e o Próximo Oriente, e os especialistas discutem muitas delas; a época arcaica é datada por poucas inscrições, listas de vencedores e tradições posteriores.',
  { tabela: { cab: ['Período', 'Datas aproximadas', 'O que o marca'], linhas: [
    ['Bronze Antigo: Cíclades e Creta pré-palacial', 'c. 3200 – 1900 a.C.', 'Ídolos cicládicos de mármore; túmulos circulares na planície da Messara; metalurgia do bronze; primeiros contactos marítimos'],
    ['Minoico: período dos palácios', 'c. 1900 – 1450 a.C.', 'Palácios de Cnossos, Festo, Malia e Zakros; Linear A; comércio marítimo; erupção de Tera (século XVII ou XVI a.C.)'],
    ['Micénico', 'c. 1600 – 1100 a.C.', 'Túmulos de poço; palácios fortificados; Linear B (grego); presença em Creta e comércio no Mediterrâneo'],
    ['Colapso e Idade Obscura', 'c. 1200 – 800 a.C.', 'Destruição dos palácios; fim da escrita; ferro; migrações para a Jónia; cerâmica protogeométrica e geométrica'],
    ['Período arcaico', 'c. 800 – 480 a.C.', 'Alfabeto, Homero, póleis, colonização, hoplitas, tiranos, Esparta e Atenas; termina com a invasão persa de 480 a.C. (convenção)']
  ] } },
  { img: 'gea-mapa-colonias', leg: 'Mapa das colónias gregas e fenícias no Mediterrâneo e no mar Negro, séculos VIII–VI a.C.' },
  { h: 'Como sabemos' },
  'Para a Idade do Bronze temos sobretudo **ruínas**, **objetos** (cerâmica, ouro, frescos), **túmulos** e as **tabuinhas de argila** dos palácios micénicos, em Linear B. Para a Idade Obscura, quase só cerâmica e túmulos. Para a época arcaica há já **inscrições** (as mais antigas datam de meados do século VIII a.C.), **poemas** (Homero, Hesíodo, Arquíloco, Safo), **moedas** e uma arqueologia muito rica de santuários. Os **historiadores gregos** (Heródoto, Tucídides, Aristóteles na *Constituição de Atenas*, Plutarco) escreveram séculos depois, com as tradições que lhes chegaram, e é preciso lê-los com cautela.',
  { lista: [
    '**Linear A:** escrita dos minoicos; os sinais podem ler-se em parte, mas a língua não é conhecida, e o seu sentido continua por decifrar.',
    '**Linear B:** escrita silábica dos micénicos, decifrada em 1952 por **Michael Ventris**; é a forma mais antiga conhecida de grego, e só serve para contabilidade.',
    '**Poemas homéricos:** não são história, mas contêm memórias de épocas diferentes (Idade do Bronze, Idade Obscura, século VIII a.C.) misturadas.',
    '**Heródoto e Tucídides:** a primeira tentativa de contar o passado com critério; Tucídides abre a sua obra com um resumo da Grécia antiga, hoje designado «Arqueologia».'
  ] },
  { img: 'gea-kouros-anavyssos', leg: 'Kouros de Anavisos, mármore, c. 530 a.C., monumento funerário. Museu Arqueológico Nacional, Atenas.' },
  { h: 'Quem eram os gregos desta época' },
  'Os minoicos chamavam-se, ao que parece, a si próprios de outra forma que não sabemos; o nome «minoico» é uma invenção moderna. Os micénicos, pelo contrário, **falavam grego**, como sabemos desde 1952. Os gregos da época arcaica falavam dialetos diferentes (jónico, ático, dórico, eólico, arcádico-cipriota) e não tinham um Estado comum, mas partilhavam a língua, os deuses olímpicos, os santuários pan-helénicos (**Olímpia**, **Delfos**) e a distinção entre helenos e *bárbaros* (os que não falavam grego). Dividiam-se em **póleis**, que se consideravam cada uma soberana.',
  'A origem dos primeiros falantes de grego, o papel dos chamados «dórios» e a relação entre minoicos e micénicos são temas debatidos. Um estudo de ADN antigo publicado em 2017 (Lazaridis e outros) sugere que minoicos e micénicos tinham, no essencial, a mesma base genética, com os micénicos a mostrarem uma pequena componente adicional ligada às estepes; é um resultado importante mas ainda em discussão, e a genética não diz, por si só, que língua se falava.',
  { h: 'Porque importam' },
  { lista: [
    '**Cidade-Estado:** a pólis, com cidadãos e leis, foi o modelo político que os gregos exportaram por todo o Mediterrâneo.',
    '**Lei escrita e participação:** Drácon, Sólon e Clístenes dão os primeiros passos para a lei escrita, o governo do povo (*demokratia*) e a igualdade perante a lei (*isonomia*).',
    '**Alfabeto:** a escrita que usamos vem, por intermédio dos etruscos e de Roma, do alfabeto grego, criado por volta de 800–750 a.C.',
    '**Épica e lírica:** a *Ilíada*, a *Odisseia* e a poesia de Safo e de Arquíloco são a origem da literatura europeia.',
    '**Jogos e competição:** os Jogos Olímpicos e os outros jogos pan-helénicos nasceram nesta época.',
    '**Palavras:** «tirano», «ostracismo», «ciclópico», «labirinto», «odisseia» e «espartano» vêm desta história.'
  ] },
  { caixa: 'Esta página e a Grécia de hoje', texto: 'Os palácios minoicos de Creta (Cnossos, Festo, Malia, Zakros, Zominthos e Cídonia) foram inscritos em 2025 na lista do Património Mundial da UNESCO; Micenas e Tirinto estão na lista desde 1999, Olímpia desde 1989 e Delfos desde 1987. Em Atenas, o Museu Arqueológico Nacional guarda os tesouros de Micenas e as estátuas arcaicas, e o Museu de Heraclião, em Creta, os frescos e objetos minoicos.' },
  { h: 'Onde esta página termina' },
  'Esta página fecha por volta de **480 a.C.**, quando a invasão persa de Xerxes põe à prova as cidades gregas. A **época clássica** (480–323 a.C.), com as Guerras Médicas, a Atenas de Péricles e a Guerra do Peloponeso, tem página própria, tal como o helenismo, a filosofia, a arte, a religião e a guerra. A página-mãe, sobre a Grécia Antiga em geral, resume tudo.'
];

const linha = [
  'A linha do tempo vai do Bronze Antigo às vésperas das Guerras Médicas. As datas da Idade do Bronze são aproximadas e discutidas; as dos séculos VIII e VII a.C. são tradicionais; só a partir de c. 600 a.C. há datas relativamente seguras para os acontecimentos de Atenas.',
  { linha: [
    { d: 'c. 3200 – 2000 a.C.', t: 'As Cíclades e a Creta pré-palacial', x: 'Nas ilhas **Cíclades** (Naxos, Paros, Amorgos, Quéros) fazem-se estatuetas de mármore de linhas muito simples, as chamadas **estatuetas cicládicas**; em Creta, as comunidades da planície da **Messara** enterram os mortos em túmulos circulares coletivos, e a metalurgia do bronze espalha-se pelo Egeu. Os barcos ligam as ilhas entre si e à costa da Ásia Menor.' },
    { d: 'c. 1900 a.C.', t: 'Os primeiros palácios minoicos', x: 'Em Creta aparecem os grandes edifícios de **Cnossos**, **Festo** e **Malia**: complexos de salas, armazéns, oficinas e santuários em torno de um pátio central, onde se guardavam e distribuíam os produtos agrícolas. Usam-se um sistema de sinais hieroglíficos e, a partir de c. 1800 a.C., a escrita **Linear A**. Por volta de 1700 a.C. há destruições (sismos, provavelmente), seguidas de reconstruções ainda maiores.' }
  ] },
  { img: 'gea-festo-disco', leg: 'O Disco de Festo, argila cozida, c. 1700 a.C. (data discutida): sinais impressos com carimbos, em espiral; continua por decifrar. Museu Arqueológico de Heraclião.' },
  { linha: [
    { d: 'c. 1700 – 1450 a.C.', t: 'Os minoicos no auge', x: 'Os segundos palácios, mais ricos, têm frescos, canalizações e armazéns enormes. Os cretenses exportam azeite, vinho, cerâmica fina (a cerâmica de Kamares) e importam cobre, estanho, marfim e pedras. O comércio liga Creta ao Egito, ao Levante e às ilhas. Os autores gregos posteriores falaram de um poderoso rei **Minos** que dominava o mar (a «talassocracia» de Minos); a arqueologia confirma o poder marítimo mas não um império político.' },
    { d: 'c. 1630 – 1500 a.C.', t: 'A erupção de Tera', x: 'O vulcão da ilha de **Tera** (Santorini) explode e soterra a cidade minoica de **Akrotiri**, preservando-a sob as cinzas. A datação é discutida há décadas: as análises de radiocarbono apontam para o século XVII ou o início do XVI a.C., e a cerâmica e as comparações com o Egito sugerem c. 1550–1500 a.C.; as calibrações mais recentes aproximam os dois resultados, favorecendo o século XVI a.C. Não há consenso sobre o efeito desta erupção na civilização minoica.' }
  ] },
  { img: 'gea-akrotiri-fresco', leg: 'Fresco do «Pescador», de Akrotiri (Tera), preservado sob as cinzas da erupção, séculos XVII–XVI a.C.' },
  { linha: [
    { d: 'c. 1600 a.C.', t: 'Os túmulos de poço de Micenas', x: 'No continente, em **Micenas** (Argólida), os chefes locais são enterrados em covas fundas com **máscaras de ouro**, espadas, punhais ricamente incrustados e taças. É o início visível da civilização **micénica**, com contactos com Creta e o Egeu e um grande gosto pelo ouro e pela guerra.' }
  ] },
  { img: 'gea-circulo-a', leg: 'O Círculo de Túmulos A de Micenas, onde se encontraram túmulos de poço de c. 1600–1500 a.C., depois incluídos na cidadela.' },
  { linha: [
    { d: 'c. 1450 a.C.', t: 'Os micénicos em Creta', x: 'Os palácios minoicos (exceto Cnossos) são destruídos, quase todos por incêndio; em **Cnossos** passa a usar-se uma escrita adaptada ao grego, o **Linear B**, e a arte e a administração mostram influência do continente. Houve conquista micénica? A resposta é debatida; a datação precisa do fim do palácio de Cnossos também (entre c. 1450 e c. 1350 a.C. nas várias propostas).' },
    { d: 'c. 1400 – 1200 a.C.', t: 'O apogeu dos reinos micénicos', x: '**Micenas**, **Tirinto**, **Pilos**, **Tebas**, **Orcómeno** e outros centros são governados por um rei (*wanax*) e uma burocracia que anota tudo em Linear B. Constroem-se muralhas «ciclópicas», túmulos de cúpula (os *tholoi*) e estradas; a **Porta dos Leões** de Micenas é de c. 1250 a.C. Os micénicos comerciam com todo o Mediterrâneo oriental; um navio naufragado ao largo de Uluburun (Turquia), c. 1320 a.C., levava cobre, estanho, ouro, marfim e vasos de várias origens, incluindo micénicos. Textos hititas falam dos **Ahhiyawa**, que muitos historiadores ligam aos micénicos.' }
  ] },
  { img: 'gea-linear-a', leg: 'Tabuinha em Linear A, de Hagia Triada (Creta), c. 1450 a.C. Museu Arqueológico de Heraclião.' },
  { linha: [
    { d: 'c. 1200 – 1100 a.C.', t: 'O colapso', x: 'Em poucas décadas, os palácios micénicos são destruídos ou abandonados: **Pilos** arde (c. 1200–1180 a.C.), **Micenas** e **Tirinto** são danificadas, e com eles desaparece o Linear B. A população diminui, o comércio de longa distância quebra-se. Ao mesmo tempo, no Mediterrâneo oriental, o império **hitita** cai, **Ugarit** é destruída e o Egito de Ramessés III enfrenta os chamados «Povos do Mar» (c. 1177 a.C.). As causas são muito debatidas e provavelmente combinadas.' },
    { d: 'c. 1180 a.C.', t: 'Troia e a memória de Homero', x: 'Em Hisarlık, na costa noroeste da Turquia, a cidade chamada pelos arqueólogos **Troia VIIa** é destruída por incêndio e guerra, c. 1180 a.C. Pode ter inspirado, de longe, a tradição da **guerra de Troia**; não há prova disso, e o que Homero descreve (reis aqueus, grandes exércitos, deuses) é uma elaboração poética de séculos.' }
  ] },
  { img: 'gea-colapso', leg: 'Cena imaginada do abandono de um palácio micénico por volta de 1200 a.C., com fumo, famílias a partir e o palácio a arder; ilustração gerada por IA, sem pretensão de registo exato.' },
  { linha: [
    { d: 'c. 1050 – 900 a.C.', t: 'O ferro e as migrações', x: 'O **ferro** substitui o bronze, a cerâmica **protogeométrica** (decoração de círculos e semicírculos concêntricos) marca o regresso de uma certa ordem, e populações de língua grega atravessam o Egeu e fundam cidades na costa da Ásia Menor (a **Jónia**, a Eólida, a Dórida). Na tradição grega, foi também a época do «regresso dos Heráclidas» e da «invasão dória» do Peloponeso, uma explicação que a arqueologia não confirma como uma invasão única.' },
    { d: 'c. 950 a.C.', t: 'O «herói» de Lefkandi', x: 'Em **Lefkandi**, na ilha de Eubeia, um grande edifício de c. 10 por 45 m (o «Toumba»; as dimensões exatas são debatidas) serve de túmulo a um homem e a uma mulher, com cavalos sacrificados e objetos vindos do Chipre, do Egito e do Próximo Oriente. Mostra que, mesmo na «Idade Obscura», havia chefes ricos e contactos de longa distância. Uma estatueta de um centauro do mesmo local é uma das mais antigas esculturas gregas em terracota.' }
  ] },
  { img: 'gea-centauro-lefkandi', leg: 'O «Centauro de Lefkandi», terracota, c. 900 a.C. Museu Arqueológico de Erétria, Eubeia.' },
  { linha: [
    { d: 'c. 800 – 740 a.C.', t: 'O alfabeto grego', x: 'Os gregos adaptam o alfabeto **fenício**, usando alguns sinais de consoantes que o grego não precisa para representar as **vogais**. É o primeiro alfabeto com consoantes e vogais. As inscrições mais antigas (c. 770–740 a.C.) estão em vasos e já falam de poesia e de vinho: a do «vaso de Dípilon», de Atenas, e a da «taça de Nestor», de Pitecusa.' }
  ] },
  { img: 'gea-nestor-taca', leg: 'A «taça de Nestor», de Pitecusa (ilha de Ísquia, Itália), c. 740–720 a.C., com uma das mais antigas inscrições alfabéticas gregas. Museu Arqueológico de Pitecusa.' },
  { linha: [
    { d: '776 a.C. (tradição)', t: 'Os Jogos de Olímpia', x: 'Segundo a tradição, fixada séculos depois pelo historiador **Hípias de Élis**, o vencedor da corrida do estádio nos primeiros Jogos de **Olímpia** foi um tal **Corebo** de Élis, em 776 a.C. Os arqueólogos encontram oferendas no santuário desde o século X a.C. e provas de grandes jogos a partir de c. 700 a.C.' },
    { d: 'c. 750 – 700 a.C.', t: 'Homero e Hesíodo', x: 'Compõem-se (e depois põem-se por escrito) a **Ilíada** e a **Odisseia**, atribuídas a **Homero**, e a **Teogonia** e os **Trabalhos e Dias** de **Hesíodo**. A «questão homérica» (se houve um autor, como se compuseram, quando se escreveram) continua aberta.' },
    { d: 'c. 770 – 700 a.C.', t: 'A colonização começa', x: 'Eubeus fundam **Pitecusa** (c. 770), na ilha de Ísquia, e **Cumas** (c. 750), em Itália; os coríntios fundam **Siracusa** (c. 733) e os de Cálcis, **Naxos**, na Sicília (c. 734). Na mesma época, aqueus fundam Síbaris e Crotona, e os espartanos, Tarento (c. 706). Cada colónia é uma pólis independente.' }
  ] },
  { img: 'gea-colonia', leg: 'Cena imaginada da chegada de colonos gregos a uma costa do Mediterrâneo ocidental, no século VIII a.C., com o fundador (*oikistes*) a orientar o desembarque; ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 740 – 620 a.C.', t: 'Esparta e a Messénia', x: 'Segundo a tradição, os espartanos conquistam a vizinha **Messénia** em duas guerras (a primeira no fim do século VIII a.C., a segunda em meados do VII a.C., a que se liga o poeta **Tirteu**) e reduzem os messénios à condição de **hilotas**. A cronologia exata é incerta; o resultado é seguro: Esparta fica com um território enorme e uma população subjugada.' },
    { d: 'c. 700 – 650 a.C.', t: 'Hoplitas e trirremes', x: 'A guerra passa a ser feita por cidadãos armados com escudo redondo, couraça, elmo e lança, em **falange**. É discutido se a mudança foi rápida («revolução hoplítica») ou gradual, ao longo de um século. Em Corinto e em Samos constroem-se os primeiros navios de guerra de grande porte, e talvez as primeiras **trirremes**.' }
  ] },
  { img: 'gea-moeda-egina', leg: 'Estáter de prata de Egina, com uma tartaruga, século VI a.C. A moeda surge na Lídia c. 600 a.C.; Egina foi das primeiras cidades gregas a cunhá-la.' },
  { linha: [
    { d: 'c. 657 – 627 a.C.', t: 'Cípselo toma o poder em Corinto', x: 'O primeiro tirano de que temos relato claro, **Cípselo**, derruba a família aristocrática dos **Báquidas** e governa Corinto; o filho **Periandro** (c. 627–587) continua e leva a cidade ao auge. Seguem-se tiranos em Sícion, Mégara, Argos, Mitilene, Samos, Naxos, Atenas e noutras cidades.' },
    { d: 'c. 632 e 621 a.C.', t: 'Cílon e Drácon em Atenas', x: 'O nobre **Cílon**, vencedor olímpico, tenta tomar o poder em Atenas, c. 632 a.C. (a data é discutida) e falha; os seus seguidores são mortos no templo, o que deixa uma maldição sobre os Alcmeónidas. Em 621 a.C., **Drácon** redige as primeiras leis escritas da cidade, sobretudo sobre homicídio, tão severas que ficaram como sinónimo de rigor («draconiano»).' },
    { d: 'c. 600 a.C.', t: 'Moeda e Massália', x: 'Na **Lídia** (Ásia Menor) cunham-se as primeiras moedas, de eletro (liga de ouro e prata); cidades gregas como Egina copiam-nas em prata. Marinheiros de **Foceia** (Jónia) fundam **Massália** (Marselha), c. 600 a.C. Segundo Heródoto, um marinheiro de Samos, **Coleu**, chega ao reino de **Tartessos**, no sul da Península Ibérica, por volta do século VII a.C.; os foceenses visitam-no mais tarde.' },
    { d: 'c. 594 a.C.', t: 'As reformas de Sólon', x: 'Perante a crise social (camponeses endividados e reduzidos à servidão), o arconte **Sólon** perdoa dívidas, proíbe a escravização por dívidas, divide os cidadãos em quatro classes de rendimento e cria um conselho de 400 e um tribunal popular. Datas e pormenores vêm de fontes tardias e são debatidos.' },
    { d: 'c. 590 – 573 a.C.', t: 'Delfos e os Jogos pan-helénicos', x: 'Uma «guerra sagrada» (c. 590 a.C.) liberta o santuário de Delfos do controlo da cidade vizinha de Cirra; em 582 a.C. são reorganizados os **Jogos Píticos** (Delfos) e criados os **Jogos Ístmicos** (Corinto), e em 573 a.C. os **Jogos Nemeus**. Com Olímpia, formam o **circuito pan-helénico**.' }
  ] },
  { linha: [
    { d: 'c. 560 – 546 a.C.', t: 'Pisístrato e a Liga do Peloponeso', x: '**Pisístrato** toma o poder em Atenas três vezes (c. 561/560, c. 556 e, definitivamente, 546 a.C.) e governa com moderação e obras públicas. No Peloponeso, Esparta, depois de uma guerra com Tegeia, firma alianças com as cidades vizinhas (a futura **Liga do Peloponeso**) e passa a preferir alianças à conquista.' },
    { d: '546 – 540 a.C.', t: 'A Pérsia chega à Jónia', x: 'O rei persa **Ciro** derrota **Creso**, rei da Lídia (c. 546 a.C.), e as cidades gregas da Jónia passam para o domínio persa. Os habitantes de Foceia preferem partir a submeter-se e fundam colónias no Ocidente, incluindo Alália, na Córsega, onde combatem uma frota etrusca e cartaginesa (c. 540 a.C.).' }
  ] },
  { img: 'gea-tiranicidas', leg: 'Os «Tiranicidas», Harmódio e Aristogíton, cópia romana do grupo de Crítios e Nesiotes (477/6 a.C.). Museu Arqueológico Nacional de Nápoles.' },
  { linha: [
    { d: '514 – 510 a.C.', t: 'O fim da tirania em Atenas', x: 'Em 514 a.C., **Harmódio** e **Aristogíton** matam o tirano **Hiparco**, irmão de Hípias, durante as Grandes Panateneias; **Hípias** governa mais quatro anos, de forma cada vez mais dura, até ser expulso (510 a.C.), com apoio de uma força espartana do rei **Cleómenes I**. Os atenienses honraram depois os dois como «libertadores», embora o verdadeiro motivo do assassinato tenha sido, segundo Tucídides, pessoal.' },
    { d: '508/7 a.C.', t: 'Clístenes e a democracia', x: 'Depois de uma luta com **Iságoras** (apoiado por Esparta), **Clístenes** reorganiza Atenas em dez tribos, formadas por demos de três regiões, e cria o Conselho de 500. O povo reunido em assembleia passa a ter a palavra final. Os atenienses chamam a isto *isonomia* (igualdade perante a lei); a palavra *demokratia* aparece mais tarde.' },
    { d: '499 – 490 a.C.', t: 'A revolta da Jónia e Maratona', x: 'As cidades gregas da Ásia Menor revoltam-se contra os persas (499–494 a.C.), com um breve apoio de Atenas e de Erétria; a revolta é esmagada em **Lade** (494). Em 490 a.C., uma expedição persa de castigo é vencida pelos atenienses em **Maratona**. O que se segue (Termópilas, Salamina, Plateias) pertence à **época clássica**.' }
  ] }
];

const mapa = [
  'Os lugares desta época são de dois tipos: os **palácios da Idade do Bronze**, hoje ruínas, e as **cidades e santuários arcaicos**, algumas ainda de pé. A tabela reúne os mais importantes; as secções seguintes contam com mais pormenor os que melhor ajudam a perceber a história.',
  { tabela: { cab: ['Lugar', 'Região', 'Porque importa'], linhas: [
    ['Cnossos', 'Creta (norte)', 'Maior palácio minoico; mais tarde, centro micénico com tabuinhas em Linear B'],
    ['Festo', 'Creta (sul)', 'Segundo palácio de Creta; local de achado do Disco de Festo'],
    ['Malia e Zakros', 'Creta (norte e leste)', 'Palácios minoicos; Zakros foi um porto de comércio com o Oriente'],
    ['Akrotiri', 'Tera (Santorini)', 'Cidade minoica soterrada por uma erupção vulcânica; frescos preservados'],
    ['Micenas', 'Argólida (Peloponeso)', 'Cidadela e capital micénica; Porta dos Leões e túmulos reais'],
    ['Tirinto', 'Argólida', 'Fortaleza micénica com muralhas ciclópicas'],
    ['Pilos', 'Messénia', 'Palácio micénico com um arquivo de tabuinhas em Linear B, conservado pelo incêndio'],
    ['Troia (Hisarlık)', 'Costa da Turquia', 'Cidade com muitas camadas; ligada, pela tradição, à guerra de Homero'],
    ['Lefkandi e Erétria', 'Eubeia', 'Túmulo do «herói» (c. 950 a.C.); Cálcis e Erétria foram pioneiras da colonização'],
    ['Atenas', 'Ática', 'Da cidade de Pisístrato e de Clístenes nasce a democracia'],
    ['Esparta', 'Lacónia', 'Pólis dórica com dois reis; conquista da Messénia'],
    ['Corinto', 'Istmo', 'Cidade comerciante, tiranos Cipselidas, inventora da trirreme (segundo Tucídides), mãe de colónias'],
    ['Olímpia', 'Élida (Peloponeso)', 'Santuário de Zeus; Jogos Olímpicos (tradição: 776 a.C.)'],
    ['Delfos', 'Fócida', 'Santuário e oráculo de Apolo; consultado antes de fundar colónias'],
    ['Mileto, Éfeso e Samos', 'Jónia (Ásia Menor)', 'Berço dos primeiros filósofos; grandes templos; Samos de Polícrates'],
    ['Pitecusa e Cumas', 'Ísquia e Campânia (Itália)', 'As primeiras colónias gregas no Ocidente'],
    ['Siracusa e Naxos', 'Sicília', 'Colónias de Corinto e de Cálcis (c. 733/734 a.C.)'],
    ['Síbaris, Crotona e Tarento', 'Sul de Itália', 'Colónias aqueias e espartana; a «Magna Grécia»'],
    ['Massália (Marselha)', 'Sul de França', 'Colónia de Foceia (c. 600 a.C.); porta para o Ocidente celta e ibérico'],
    ['Cirene', 'Líbia', 'Colónia de Tera (c. 631 a.C.), fundada após consulta a Delfos'],
    ['Náucratis', 'Delta do Nilo (Egito)', 'Posto de comércio grego, ativo por volta de 620 a.C.'],
    ['Bizâncio e Olbia', 'Bósforo e mar Negro', 'Colónias de Mégara (c. 667/660 a.C.) e de Mileto']
  ] } },
  { h: 'Cnossos e os palácios de Creta' },
  '**Cnossos**, perto da atual Heraclião, foi o maior palácio minoico: uns 20 mil metros quadrados de salas, pátios, corredores, armazéns com grandes jarros de azeite e oficinas, à volta de um pátio central. Foi escavado pelo inglês **Arthur Evans** a partir de 1900, que lhe chamou «Palácio de Minos» e o reconstruiu em parte, com betão e cores muito discutidos hoje. Os minoicos de Cnossos escreviam em Linear A e, a partir de c. 1450 a.C. (data debatida; talvez só até c. 1350), os senhores do palácio escreviam em Linear B (grego). Já os gregos do século V a.C. associavam o lugar ao **Labirinto** do rei Minos e ao Minotauro, mas é lenda.',
  { img: 'gea-cnossos-palacio', leg: 'Ruínas do palácio de Cnossos, Creta, com reconstruções parciais feitas por Arthur Evans no início do século XX.' },
  { img: 'gea-minoicos-porto', leg: 'Cena imaginada de um porto minoico c. 1500 a.C., com barcos mercantes carregados de jarros de azeite e vinho e armazéns à beira-mar; pormenores são hipotéticos. Ilustração gerada por IA.' },
  { img: 'gea-snake-goddess', leg: 'A «deusa das serpentes», estatueta de faiança de Cnossos, c. 1600 a.C.; restaurada por Evans; se é uma deusa ou uma sacerdotisa, é debatido. Museu Arqueológico de Heraclião.' },
  '**Festo**, no sul, é de arquitetura semelhante e tem vista para a planície da Messara; **Malia** e **Zakros** completam o grupo. Os palácios não tinham muralhas, o que levou alguns autores a falar de uma sociedade «pacífica»; a ideia é hoje discutida (há armas, fortificações menores e sinais de violência). Os arqueólogos discutem também se eram palácios de reis, de sacerdotes ou de uma elite partilhada, já que não sabemos como os minoicos organizavam o poder.',
  { h: 'Akrotiri, a cidade das cinzas' },
  'Em **Akrotiri**, na ilha de Tera, o arqueólogo grego **Spyridon Marinatos** começou em 1967 a escavar uma cidade minoica soterrada pelas cinzas do vulcão. As casas de dois e três andares, com canalizações e frescos de pescadores, de macacos azuis e de navios, estão preservadas, em vários casos, a mais de um andar de altura. Não se encontraram corpos nem objetos de valor, o que sugere que os habitantes tiveram tempo de partir. Akrotiri não é Atlântida: a história do continente perdido vem de Platão, mais de mil anos depois, e liga-se a Tera só por especulação moderna.',
  { h: 'Micenas' },
  '**Micenas**, a cerca de 90 km (em linha reta) a sudoeste de Atenas, ergue-se numa colina entre montanhas. A cidadela foi rodeada, a partir de c. 1350 a.C., por muralhas de grandes blocos de calcário («ciclópicas», porque os gregos pensavam que só ciclopes as poderiam erguer); a **Porta dos Leões**, de c. 1250 a.C., é a entrada. Dentro ficava o palácio, com a sala principal (o *mégaron*), e o **Círculo de Túmulos A**, onde Schliemann encontrou em 1876 os túmulos de poço com ouro; fora da muralha, os grandes túmulos de cúpula, como o chamado «Tesouro de Atreu» (c. 1250 a.C.). Os nomes «Agamémnon» e «Atreu» vêm da lenda: não há prova de que algum rei com esse nome tenha vivido ali.',
  { img: 'gea-tesouro-atreu', leg: 'Interior do túmulo de cúpula (*tholos*) conhecido como «Tesouro de Atreu», Micenas, c. 1250 a.C.' },
  { img: 'gea-micenas-cidadela', leg: 'Reconstrução artística da cidadela de Micenas c. 1250 a.C., com a Porta dos Leões, o palácio no alto e as casas na encosta; pormenores são hipotéticos. Ilustração gerada por IA.' },
  { h: 'Tirinto e Pilos' },
  '**Tirinto**, perto de Nauplia, é a mais bem conservada fortaleza micénica: as suas muralhas de blocos de mais de uma tonelada têm galerias cobertas com falsa abóbada, que serviam de armazéns e de abrigos. **Pilos**, na Messénia, é o palácio onde o arqueólogo norte-americano **Carl Blegen** encontrou, a partir de 1939, cerca de mil tabuinhas e fragmentos em Linear B, cozidos involuntariamente pelo incêndio que destruiu o palácio c. 1200–1180 a.C. O palácio foi chamado «de Nestor», em referência ao rei de Pilos na *Ilíada*, mas a ligação é só convenção.',
  { img: 'gea-tirinto-muralha', leg: 'Muralha ciclópica de Tirinto, Argólida, com a galeria de falsa abóbada, c. 1300–1200 a.C.' },
  { img: 'gea-pilos-palacio', leg: 'Ruínas do chamado «Palácio de Nestor», em Pilos (Messénia), c. 1300–1200 a.C.' },
  { h: 'Troia' },
  '**Troia**, no monte de Hisarlık, perto do estreito dos Dardanelos, tem pelo menos nove camadas de ocupação. Escavada por Schliemann a partir de 1870, por Carl Blegen nos anos 1930 e por Manfred Korfmann e outros desde 1988, revelou uma grande cidade fortificada, com **Troia VI** (c. 1700–1300 a.C.) a ser a mais rica, e **Troia VIIa**, destruída c. 1180 a.C. Textos hititas citam um lugar chamado **Wilusa**, que muitos identificam com a *Ilios* de Homero; a guerra descrita nos poemas, essa, não pode ser confirmada.',
  { img: 'gea-troia-muralhas', leg: 'Muralhas de Troia (Hisarlık, Turquia), da fase de Troia VI, c. 1300 a.C. ou antes.' },
  { h: 'Atenas arcaica' },
  'A **Acrópole** de Atenas foi, na Idade do Bronze, um centro micénico fortificado, e depois, na época arcaica, o santuário de **Atena** e a sede dos poderes da cidade. Pisístrato e os filhos ergueram um templo e fontes, e organizaram as **Panateneias**; os persas destruíram tudo em 480 a.C., e depois dela o Parténon é o que conhecemos. Abaixo ficava a **Ágora**, a praça pública, que passa a ser o centro da vida política depois de Clístenes. A Ática, com cerca de 2 500 km², era um território grande para uma pólis.',
  { h: 'Esparta' },
  '**Esparta** era formada por quatro ou cinco aldeias nas margens do rio **Eurotas**, no vale entre os montes Taigeto e Parnon, sem muralhas. Dominava a Lacónia, onde viviam os **periecos**, e depois a Messénia, onde viviam os hilotas. A cidade antiga deixou poucos monumentos: o santuário de **Ártemis Órtia** e o de **Atena Calquioicos** («da Casa de Bronze»), na acrópole; o **Menelaion**, um santuário aos heróis Menelau e Helena, num outeiro próximo.',
  { h: 'Corinto' },
  '**Corinto**, no istmo que liga o Peloponeso ao resto da Grécia, tinha dois portos, o de Lequeon, no golfo de Corinto, e o de Cencreias, no Sarónico, e vivia de comércio e de cerâmica (a cerâmica coríntia foi a mais exportada do século VII a.C.). A família dos **Báquidas** governou-a até Cípselo; teve um **Diolkos**, uma rampa para arrastar navios pelo istmo, atribuído por tradição ao tirano Periandro (a arqueologia sugere c. 600 a.C.). Fundou Siracusa e Corcira, e o seu templo de Apolo (c. 540 a.C.) é um dos grandes templos dóricos arcaicos.',
  { h: 'Eubeia' },
  'A ilha de **Eubeia**, ao longo da costa da Ática, foi pioneira. As cidades de **Cálcis** e de **Erétria** foram as primeiras a enviar colonos para o Ocidente (Pitecusa, Cumas, Naxos e Régio) e a levar o alfabeto para o Ocidente. Segundo a tradição, as duas travaram, c. 700 a.C., a **guerra Lelantina** pela planície de Lelanto, em que se envolveram outras cidades; é um acontecimento obscuro, com datas incertas.',
  { h: 'A Jónia' },
  'Na costa ocidental da Ásia Menor, os gregos fundaram, na Idade Obscura, uma dúzia de cidades, que formaram uma liga religiosa em volta do santuário do Panionion. **Mileto** deu os primeiros filósofos (Tales, Anaximandro, Anaxímenes) e o historiador Hecateu e fundou dezenas de colónias no mar Negro; **Éfeso** tinha o grande templo de Ártemis (a primeira versão é do século VI a.C., financiada por Creso); **Samos**, com **Polícrates**, tinha a maior frota do Egeu, um grande templo de Hera (o Heraion) e o túnel de **Eupalino**, de c. 1 036 m, escavado a partir das duas extremidades para levar água à cidade; **Foceia** fundou Massália e Alália. Em 546 a.C. as cidades caíram, uma a uma, em poder dos persas.',
  { h: 'Olímpia e Delfos' },
  'Os dois grandes santuários pan-helénicos nasceram nesta época. **Olímpia**, no vale do Alfeu, recebia os Jogos em honra de Zeus; nos primeiros tempos, o espaço era só um altar, um bosque sagrado (a *Altis*) e uma pista de terra, sem as construções que vemos hoje (o templo de Hera é de c. 600 a.C., mas a maior parte data do século V a.C. e depois). **Delfos**, na encosta do monte Parnaso, recebia consultas ao oráculo de **Apolo**, e as cidades construíam ali «tesouros» (pequenos edifícios onde se guardavam as oferendas); o tesouro dos Sifnios (c. 525 a.C.), com o seu friso, é um dos mais belos. Cada cidade que consultava o oráculo antes de fundar uma colónia reforçava o prestígio do santuário.',
  { img: 'gea-olimpia-estadio', leg: 'A pista do estádio de Olímpia, na forma do século IV a.C.; no século VIII a.C. o espaço era mais simples, sem bancadas.' },
  { h: 'As colónias do Ocidente' },
  'A partir de c. 770 a.C., os gregos instalaram-se no sul de Itália e na Sicília, que os romanos chamaram **Magna Graecia** («Grande Grécia»). As colónias eram cidades gregas completas: **Siracusa** (c. 733 a.C.) tornou-se a maior; **Síbaris** (c. 720) tinha fama de luxo; **Crotona** (c. 710) deu a escola de **Pitágoras** e atletas famosos; **Tarento** (c. 706) é a única colónia espartana; **Posidónia** (Paestum), de c. 600 a.C., conserva três grandes templos dóricos arcaicos e clássicos. Mais a ocidente, **Massália** (c. 600 a.C.) comerciava com os gauleses e **Empório** (Empúries, c. 575 a.C., na Catalunha) foi fundada por foceenses de Massália. Não se conhecem colónias gregas no atual território português; o litoral atlântico era então frequentado por fenícios.',
  { img: 'gea-paestum-templo', leg: 'Templo de Hera I («Basílica»), Posidónia (Paestum), sul de Itália, c. 550 a.C., em estilo dórico arcaico.' },
  { h: 'O mar Negro e o Egito' },
  'A leste, as cidades da Jónia, sobretudo **Mileto**, fundaram dezenas de colónias no mar Negro: **Sinope**, **Olbia**, **Trapezunte**, e, antes, **Bizâncio** (c. 667/660 a.C., fundada por **Mégara**), que controlava o Bósforo. Forneciam cereais, peixe salgado, madeira e escravos. Ao sul, **Cirene**, na Líbia (c. 631 a.C.), e **Náucratis**, no delta do Nilo, onde o faraó Amásis (570–526 a.C.) concentrou o comércio grego, ligavam o mundo grego às riquezas do Egito. Mercenários gregos a serviço de **Psamético II** deixaram graffiti nas pernas do colosso de Abu Simbel (c. 591 a.C.).',
  { h: 'As rotas' },
  'Os gregos navegavam sobretudo de dia, de cabo em cabo, de abril a outubro. Três rotas dominaram esta época: a do **Egeu e do Levante**, para o Chipre, a Fenícia e o Egito; a do **Ocidente**, pelo estreito de Corinto e pelo golfo, até à Itália e à Sicília (Corinto e Corcira controlavam o caminho); e a do **mar Negro**, por Bizâncio. Em terra, as estradas eram caminhos de carros sem pavimento, e as rotas dos santuários, como a Via Sagrada de Elêusis a Atenas e as estradas de peregrinos para Delfos e Olímpia, uniam as cidades.'
];

const sociedade = [
  { h: '1. A sociedade minoica' },
  'Dos minoicos conhecemos o que as ruínas, os frescos e os objetos mostram, e quase nada do que pensavam: a escrita não foi decifrada. Os **palácios** funcionavam como centros de **armazenamento e redistribuição**: o campo entregava cereais, azeite, vinho e lã; o palácio guardava, pagava e registava os produtos em tabuinhas de Linear A. Em torno de cada palácio havia cidades com casas de pedra de vários andares, oficinas e bairros de artesãos. A sociedade parece ter sido dirigida por uma elite ligada ao culto e à administração; se havia um rei (o «rei-sacerdote» de Evans) é discutido.',
  'A **religião** parece ter girado em torno de uma ou mais **divindades femininas** (da natureza, dos animais, das montanhas), de santuários no cimo dos montes e em grutas (como a gruta de Ida), de símbolos como o **machado de dois gumes** (*labrys*), os «cornos de consagração», a árvore sagrada e a serpente. Os frescos mostram procissões, danças e o célebre **salto ao touro**, uma acrobacia ritual ou desportiva: se era um rito, um desporto ou ambos, não sabemos. O que se diz dos sacrifícios humanos em Anemospilia, perto de Cnossos (c. 1700 a.C.), é discutido.',
  { h: '2. A sociedade micénica' },
  'O reino micénico, ao contrário do minoico, está documentado por **tabuinhas de argila em Linear B**, escritas por escribas do palácio com inventários: ovelhas, linho, azeite, vasos, rações, armas, carros, mão de obra. Os textos mostram uma sociedade hierarquizada. No topo, o rei, *wanax*; logo abaixo, o *lawagetas* (talvez um chefe militar), os *hequetai* («companheiros»), e funcionários locais chamados *basileus* (a palavra que mais tarde passa a significar «rei»); depois, os artesãos, os camponeses (o *damos*, as comunidades locais) e os escravos (*doeroi*, homens e mulheres, muitos deles provavelmente prisioneiros ou estrangeiros). As mulheres aparecem como tecelãs, moleiras e sacerdotisas.',
  { img: 'gea-megaron-pilos', leg: 'Reconstrução artística do *mégaron* (sala do trono) do palácio de Pilos, c. 1250 a.C., com a lareira central, quatro colunas e frescos; pormenores são hipotéticos. Ilustração gerada por IA.' },
  'Os palácios eram bem defendidos. As tabuinhas de Pilos mencionam os **o-ka**, vigias ou postos de guarda, que patrulhavam a costa, e listas de remadores e de carros de guerra; os guerreiros usavam espadas de bronze, lanças, escudos em forma de 8 ou de torre, e **elmos de presas de javali**, como o descrito na *Ilíada*. A **armadura de Dendra** (c. 1400 a.C.), de placas de bronze, é uma das mais antigas do mundo. O carro de guerra, puxado por dois cavalos, tinha mais valor simbólico do que prático.',
  { h: 'A religião micénica' },
  'As tabuinhas de Linear B mostram que alguns **deuses gregos** já eram adorados no século XIII a.C., com nomes que reconhecemos, o que prova que a religião grega tem raízes na Idade do Bronze. Outros só aparecem mais tarde, ou com outro sentido.',
  { tabela: { cab: ['Nome em Linear B', 'Leitura', 'Notas'], linhas: [
    ['di-we', 'Zeus', 'Aparece em Cnossos e em Pilos, mas parece menos importante do que mais tarde'],
    ['e-ra', 'Hera', 'Surge em Pilos; mais tarde esposa de Zeus'],
    ['po-se-da-o', 'Posídon', 'Muito importante em Pilos, onde há grandes oferendas; Posídon pode ter sido o deus principal nesse palácio'],
    ['a-ta-na po-ti-ni-ja', '«Senhora Atena»', 'Em Cnossos; confirma o culto de Atena, mas a identificação com a deusa clássica é debatida'],
    ['e-ma-a2', 'Hermes', 'Atestado, por exemplo, em Pilos'],
    ['di-wo-nu-so', 'Dioniso', 'Aparece em tabuinhas de Pilos e de Khania (Creta); contradiz a ideia de um deus «recém-chegado»'],
    ['pa-ja-wo', 'Paian (Peão)', 'Nome de um deus médico; mais tarde epíteto de Apolo; o próprio Apolo não é atestado de forma segura']
  ] } },
  { h: '3. O colapso da Idade do Bronze' },
  'Por volta de 1200 a.C., quase todas as grandes potências do Mediterrâneo oriental colapsaram em poucas décadas: o império **hitita**, **Ugarit**, as cidades do Levante e, na Grécia, os palácios micénicos. Os historiadores propõem várias causas, que não se excluem:',
  { lista: [
    '**Invasões e «Povos do Mar»:** os egípcios falam de grupos de saqueadores do mar que atacaram o Egito, c. 1208 e c. 1177 a.C.; o papel real destes grupos na Grécia é incerto.',
    '**Sismos:** sequências de sismos (uma «tempestade sísmica») destruíram vários palácios, entre c. 1250 e 1200 a.C.; é uma explicação debatida.',
    '**Seca e mudança climática:** análises de pólen e de sedimentos mostram uma fase mais seca no Mediterrâneo oriental, c. 1200 a.C.',
    '**Revoltas e guerras entre reinos:** a dependência de um sistema palaciano muito centralizado tornou os reinos frágeis; os palácios eram o único centro do comércio de bronze.',
    '**Quebra do comércio:** o estanho vinha de muito longe, e a rotura das redes de comércio pode ter arrastado os palácios na queda.'
  ] },
  'A tradição grega falou de uma «invasão dória», com os **Heráclidas** a regressarem ao Peloponeso; a arqueologia não encontra uma invasão deste tipo, e os historiadores atuais veem nos dórios o resultado de migrações e de mudanças locais. A palavra «dórico» continua a designar o dialeto de Esparta, de Corinto e de Creta, e a ordem arquitetónica.',
  { h: '4. A Idade Obscura' },
  'Entre c. 1100 e c. 800 a.C., a população desceu, as aldeias eram pequenas, não havia escrita nem grandes edifícios, e os mortos eram enterrados com poucos objetos. Mas a época não foi só de queda. O **ferro**, mais abundante do que o bronze, tornou as armas e as ferramentas mais baratas; apareceram os **santuários** abertos em lugares como Olímpia, Delfos e Delos; e, em **Lefkandi**, famílias ricas enterraram os chefes com cavalos e ouro. Nas comunidades, um chefe (*basileus*), rodeado por guerreiros e por um conselho de anciãos, governava com uma autoridade limitada.',
  'Foi nesta época que nasceu o mundo descrito por **Homero**: sociedades de aristocratas que se tratam como iguais, trocam presentes e vivem pela honra (*timé*) e pela fama (*kleos*). A **hospitalidade** (*xenia*) era uma instituição sagrada, protegida por Zeus, que ligava famílias de cidades diferentes e dava uma rede de proteção a quem viajava.',
  { h: '5. A escrita e o alfabeto' },
  'Os gregos aprenderam o **alfabeto** com os **fenícios**, com quem comerciavam, provavelmente em lugares onde se encontravam, como Al Mina (Síria), Chipre e Eubeia. Os fenícios escreviam só consoantes; os gregos usaram sinais fenícios que não precisavam para representar as vogais (*alef* tornou-se *alfa*, o *he* tornou-se *épsilon*...) e criaram a primeira escrita com sinais para consoantes e vogais. O alfabeto tinha algumas dezenas de letras, e era mais fácil de aprender do que a escrita cuneiforme ou o Linear B.',
  'No início, cada região tinha a sua variante: os alfabetos de **Cálcis** (Eubeia), de **Corinto**, de **Atenas** e da **Jónia** diferiam em algumas letras e em sons. A variante eubeia, levada para Itália, deu origem ao alfabeto **etrusco** e, depois, ao **latino**; Atenas adotou oficialmente o alfabeto jónico em 403/2 a.C. A escrita ia da direita para a esquerda, ou em *bustrofedon* («como o boi ao lavrar»: uma linha num sentido, a seguinte no outro), e só depois ficou da esquerda para a direita.',
  { cit: 'A taça de Nestor era boa de beber; mas quem beber desta taça será logo tomado pelo desejo de Afrodite de belos cabelos.', fonte: 'Inscrição na taça de Pitecusa, c. 740–720 a.C., uma das mais antigas inscrições alfabéticas gregas; tradução livre' },
  { h: '6. Homero, Hesíodo e a poesia' },
  'A **Ilíada** conta 51 dias do décimo ano da guerra de Troia, a cólera de Aquiles e a morte de Heitor; a **Odisseia** conta o regresso de Ulisses, os seus perigos e a vingança em Ítaca. São poemas **orais** na origem: usavam fórmulas e epítetos fixos («Aquiles de pés velozes», «Aurora de dedos cor de rosa») que ajudavam o cantor (o *aedo*) a improvisar em versos de seis pés (o **hexâmetro**). Os estudos de **Milman Parry** e **Albert Lord** (século XX) estudaram cantores orais da ex-Jugoslávia e mostraram como funciona a composição oral por fórmulas, o que reforçou esta ideia. Quando e como foram postos por escrito é debatido (em geral, entre c. 750 e 650 a.C.). A língua de Homero é um grego artificial, misto de jónico e eólico, com palavras de várias épocas.',
  { img: 'gea-aedo-homero', leg: 'Cena imaginada de um aedo a cantar acompanhado de uma lira (*phorminx*) num salão de aristocratas, c. 750 a.C.; ilustração gerada por IA.' },
  '**Hesíodo**, da Beócia, compôs a **Teogonia** (a origem dos deuses, do Caos a Zeus) e os **Trabalhos e Dias** (conselhos de um camponês ao seu irmão Perses, com o mito das cinco idades da humanidade e um calendário agrícola). Diferente de Homero, fala de si e do seu mundo, e por isso é uma fonte para a vida dos camponeses. Na época arcaica surge também a **poesia lírica** (cantada com lira ou flauta, mais curta, sobre o amor, o vinho, a guerra e a política): **Arquíloco** (c. 680–640 a.C.), **Tirteu** (Esparta, séc. VII), **Álcman**, **Safo** e **Alceu** (Lesbos, c. 600), **Anacreonte**, **Teógnis** de Mégara, e depois **Simónides** e **Píndaro**.',
  { cit: 'Algum saio se orgulha do meu escudo, que larguei sem querer junto a um arbusto, uma arma sem defeito; mas salvei a vida. Que me importa o escudo? Que vá para o diabo; arranjarei outro, não pior.', fonte: 'Arquíloco de Paros, fragmento 5 (tradução livre, em prosa); soldado e poeta do século VII a.C., um dos poucos a admitir, em verso, que fugiu da batalha' },
  { h: '7. A pólis' },
  'A **pólis** surgiu entre os séculos IX e VII a.C. Na maioria dos casos, resultou da junção (*sinecismo*) de aldeias à volta de um lugar fortificado, a **acrópole**, e de um espaço público, a **ágora**, onde se reunia a comunidade. Incluía a cidade (*asty*) e o território à volta (*chora*), de que os cidadãos tiravam o sustento. Tinha leis próprias, calendário próprio, moeda (mais tarde), deuses protetores e um exército de cidadãos. Muitas regiões, no entanto, mantiveram a forma de **etnos** (um povo reunido em aldeias, sob chefes comuns), como a Élida, a Arcádia, a Tessália, a Etólia e a Macedónia.',
  'Segundo o levantamento do Centro de Estudos das Póleis de Copenhaga, havia cerca de **mil póleis** nos mundos grego e colonial na época arcaica e clássica. A maior parte tinha poucos milhares de habitantes e um território de algumas dezenas de quilómetros quadrados; Atenas, Esparta e Siracusa eram exceções. As cidades eram governadas inicialmente por **aristocratas** (*aristoi*, «os melhores»), famílias ricas que controlavam terra, cavalos e cultos, e que dirigiam a cidade por meio de magistrados anuais e de um conselho. Com o tempo, os cidadãos mais pobres exigiram um papel na política, e as leis passaram a ser escritas: a lei escrita mais antiga conhecida é de **Dreros**, em Creta (c. 650–600 a.C.).',
  { h: '8. Hoplitas e guerra' },
  'Entre c. 700 e 650 a.C., os cidadãos com meios para pagar o equipamento (o **hoplon**, um grande escudo redondo; o elmo, a couraça, as caneleiras, a lança e a espada) passaram a combater em **falange**, em fileiras cerradas. A tradição diz que isto mudou a política: o cidadão-soldado, e não o aristocrata a cavalo, passou a ser o defensor da cidade, e reclamou direitos. Na realidade, a mudança foi provavelmente mais lenta e há quem a situe no século VII ou no VI a.C.; o debate («revolução hoplítica») continua. O **vaso Chigi**, c. 640 a.C., é uma das mais antigas imagens de uma falange.',
  { img: 'gea-vaso-chigi', leg: 'O vaso Chigi, de cerâmica proto-coríntia, c. 640 a.C., com uma das mais antigas imagens de hoplitas em formação. Museu Nacional Etrusco de Villa Giulia, Roma.' },
  { img: 'gea-hoplita-arcaico', leg: 'Ilustração de um hoplita grego da época arcaica, c. 650 a.C., com elmo coríntio, couraça, caneleiras, escudo redondo e lança; reconstrução gerada por IA.' },
  'No mar, os gregos usaram primeiro as **pentecônteras** (50 remos) e, a partir de c. 700 a.C., as **trirremes**, que Tucídides diz terem sido inventadas em Corinto. A guerra entre cidades ia de conflitos fronteiriços sazonais, em que se destruíam culturas, às grandes guerras de conquista, como as da Messénia. Muitos gregos serviram também como **mercenários** fora do mundo grego, no Egito e na Lídia.',
  { h: '9. A colonização' },
  'Entre c. 770 e c. 550 a.C., centenas de cidades gregas enviaram colonos para outras margens do Mediterrâneo e do mar Negro. As causas variam: **falta de terra** para uma população em crescimento, **conflitos políticos** (os vencidos partiam), **comércio** (acesso a metais, cereais, madeira) e, nalguns casos, a vontade de uma cidade de controlar rotas. Cada colónia (*apoikia*, «casa longe de casa») era uma pólis independente, com laços de afeto e de culto com a cidade-mãe (a **metrópole**). A expedição era dirigida por um fundador (**oikistes**), nomeado pela metrópole, que escolhia o local, repartia a terra e ficava depois honrado como herói. O oráculo de **Delfos** era muitas vezes consultado.',
  { tabela: { cab: ['Colónia', 'Data tradicional', 'Fundadores'], linhas: [
    ['Pitecusa (Ísquia)', 'c. 770 a.C.', 'Eubeus de Cálcis e de Erétria'],
    ['Cumas (Campânia)', 'c. 750 a.C.', 'Eubeus de Pitecusa e de Cálcis'],
    ['Naxos (Sicília)', 'c. 734 a.C.', 'Colonos de Cálcis'],
    ['Siracusa (Sicília)', 'c. 733 a.C.', 'Colonos de Corinto, sob Arquias'],
    ['Síbaris e Crotona (Itália)', 'c. 720 e c. 710 a.C.', 'Aqueus do Peloponeso'],
    ['Tarento (Itália)', 'c. 706 a.C.', 'Os *Partenioi* de Esparta'],
    ['Bizâncio (Bósforo)', 'c. 667/660 a.C.', 'Mégara'],
    ['Cirene (Líbia)', 'c. 631 a.C.', 'Colonos de Tera, sob Bato'],
    ['Náucratis (Egito)', 'c. 620 a.C.', 'Várias cidades da Jónia, da Dórida e da Eólida'],
    ['Massália (França)', 'c. 600 a.C.', 'Foceenses da Jónia'],
    ['Empório (Espanha)', 'c. 575 a.C.', 'Foceenses de Massália']
  ] } },
  'Os colonos encontraram povos locais, com quem comerciaram, lutaram ou se misturaram: sículos, etruscos, citas, trácios, egípcios. Em muitas colónias, as primeiras gerações casaram com mulheres locais. O mundo grego deixou de ser só o do mar Egeu: Heródoto escreve que **Coleu** de Samos foi arrastado por uma tempestade até **Tartessos**, no sul da Península Ibérica, e voltou rico; e os foceenses fizeram amizade com o rei local, Argantónio. A presença grega na Ibéria foi, contudo, pequena e restrita ao litoral mediterrâneo.',
  { h: '10. Esparta arcaica' },
  'Esparta foi, até meados do século VI a.C., uma cidade como as outras: rica em poesia (**Tirteu**, **Álcman**), cerâmica e bronzes finos. A sua mudança deveu-se à conquista da **Messénia**. Para controlar uma população de **hilotas** muito mais numerosa do que os cidadãos, os espartanos organizaram uma sociedade de soldados: a tradição atribui a organização a **Licurgo**, um legislador provavelmente lendário, que teria trazido de Delfos uma «Grande Retra» (uma lei fundamental). O que sabemos com mais certeza é o seguinte:',
  { lista: [
    '**Diarquia:** dois reis, das famílias dos Ágidas e dos Euripôntidas, comandavam o exército.',
    '**Gerúsia:** conselho de 28 anciãos com mais de 60 anos, eleitos por aclamação, e os dois reis.',
    '**Éforos:** cinco magistrados anuais, com grande poder de fiscalizar os reis; segundo a tradição, instituídos no século VIII a.C., e poderosos a partir de meados do século VI a.C., com o éforo Quílon.',
    '**Apela:** assembleia de todos os cidadãos plenos, que aprovava ou rejeitava as propostas, aclamando.',
    '**Homoioi** («iguais»): cidadãos plenos que passavam pela **agogé** e pagavam a sua parte nas **refeições comuns** (*sissitia*); se não pagassem, perdiam a cidadania.',
    '**Periecos** («habitantes à volta»): livres, sem direitos políticos, que faziam comércio e ofícios na Lacónia.',
    '**Hilotas:** população rural servil de origem lacónia e messénia, que trabalhava a terra para os espartanos; uma vez por ano, os éforos declaravam-lhes guerra, para que matá-los não fosse sacrilégio; a *cripteia*, uma espécie de caça aos hilotas, tem natureza discutida.'
  ] },
  { img: 'gea-agoge-esparta', leg: 'Cena imaginada do treino de rapazes espartanos na *agogé*, junto ao rio Eurotas, c. 500 a.C.; reconstrução gerada por IA.' },
  'A **agogé**, o sistema de educação, começava aos sete anos: os rapazes viviam em grupos, aprendiam a ler, a cantar, a dançar e, sobretudo, a obedecer, a suportar a fome e a dor e a lutar. As **mulheres** espartanas exerciam-se fisicamente, podiam herdar e administrar propriedade, e, por viverem sem os maridos, muitas vezes geriam as terras. Na política externa, Esparta evitou durante muito tempo as expedições longas, por medo de uma revolta de hilotas, e preferiu as alianças à conquista. Por volta de 550 a.C., depois de falhar contra Tegeia, formou com os vizinhos a **Liga do Peloponeso**, uma aliança dirigida por Esparta.',
  { h: '11. Atenas arcaica' },
  'Atenas começou como um reino que, segundo a tradição, foi unificado pelo herói **Teseu**. Na época arcaica, a Ática (cerca de 2 500 km²) formava uma só pólis, governada por aristocratas, os **Eupátridas** («bem nascidos»), por meio de nove **arcontes** eleitos anualmente e do conselho do **Areópago**, composto por antigos arcontes. Os camponeses viviam sob pressão: muitos deviam parte da colheita a nobres (os *hectemoroi*, «sextos») e podiam ser vendidos como escravos por dívidas. As tensões eram altas quando **Drácon** escreveu as leis (621 a.C.) e **Sólon** foi chamado a reformar (c. 594 a.C.).',
  { img: 'gea-solon-agora', leg: 'Cena imaginada de Sólon, em Atenas, c. 594 a.C., a explicar as suas medidas a camponeses e a aristocratas na ágora; ilustração gerada por IA.' },
  { tabela: { cab: ['Classe de Sólon', 'Critério (c. 594 a.C.)', 'Acesso e funções'], linhas: [
    ['*Pentacosiomedimnoi*', '500 medidas anuais de produto agrícola ou mais', 'Cargos mais altos (arcontes, tesoureiros); comandam a cavalaria e navios'],
    ['*Hippeis* («cavaleiros»)', '300 a 500 medidas', 'Cargos; serviam na cavalaria'],
    ['*Zeugitai*', '200 a 300 medidas', 'Cargos menores; serviam como hoplitas'],
    ['*Thetes*', 'Menos de 200 medidas', 'Podiam votar na assembleia e nos tribunais; não tinham cargos; serviam como tropa ligeira e, mais tarde, na marinha']
  ] } },
  'As reformas de Sólon, segundo Aristóteles e Plutarco (que escrevem séculos depois), foram: a **seisachtheia** («sacudir o fardo»), que cancelou as dívidas e libertou os camponeses; a proibição de escravizar atenienses por dívidas e o regresso daqueles que tinham sido vendidos; a divisão em **quatro classes** de rendimento; a criação de um **conselho de 400** (cem por tribo); e a abertura de um **tribunal do povo** (a *Heliaia*) a que qualquer cidadão podia apelar. Não resolveu todos os conflitos: a cidade dividiu-se em três bandos (do litoral, da planície e da montanha) até Pisístrato tomar o poder.',
  { h: 'Os Pisistrátidas' },
  '**Pisístrato**, um nobre popular e general vitorioso, tomou o poder com ajuda dos camponeses da montanha. Segundo Heródoto, numa das primeiras vezes entrou em Atenas num carro com uma mulher alta, de armadura, vestida de **Atena**, com a cidade a acreditar que a deusa o trazia. Depois de dois exílios, regressou em 546 a.C. e ficou até morrer em 528/7 a.C. Governou a cidade com a lei de Sólon em vigor, mas com os seus parentes nos cargos; deu empréstimos aos camponeses, construiu fontes, estradas e templos, deu mais brilho às **Panateneias** e às festas de **Dioniso**, e a tradição diz que mandou fixar por escrito os poemas de Homero (a ideia é discutida). Atenas começou a cunhar moeda e a exportar cerâmica.',
  { img: 'gea-pisistrato-panateneias', leg: 'Cena imaginada de uma procissão das Panateneias na Atenas de Pisístrato, c. 530 a.C., com a Acrópole e o templo arcaico de Atena ao fundo; pormenores são hipotéticos. Ilustração gerada por IA.' },
  'Os filhos, **Hípias** e **Hiparco**, continuaram. Em 514 a.C., depois de uma ofensa pessoal, **Harmódio** e **Aristogíton** mataram Hiparco, e Hípias passou a governar com crueldade, até ser expulso em 510 a.C. com ajuda espartana. Veio então uma luta entre **Iságoras** (aristocrata, aliado de Esparta) e **Clístenes** (dos Alcmeónidas), que apelou ao povo.',
  { h: 'A reforma de Clístenes' },
  { lista: [
    'Dividiu a Ática em três regiões (cidade, costa e interior) e cerca de **140 demos** (aldeias e bairros), que se tornaram a base da cidadania: cada cidadão passou a ser identificado pelo seu demo, e não pela família.',
    'Agrupou os demos em **trittyes** (terços) e formou **dez tribos**, cada tribo com um terço da cidade, da costa e do interior, de modo a misturar interesses locais e a enfraquecer as velhas redes aristocráticas.',
    'Criou o **Conselho dos 500** (*Boulé*), com cinquenta membros de cada tribo, que preparava os assuntos para a **Assembleia** (*Ekklesia*).',
    'Deu à Assembleia a decisão final: assim nasceu a **isonomia**, a igualdade perante a lei, a base da democracia ateniense do século V a.C.',
    'O **ostracismo** é atribuído a Clístenes por Aristóteles, mas só foi usado pela primeira vez c. 487 a.C. A atribuição é debatida.'
  ] },
  { h: '12. Os tiranos' },
  'Em muitas cidades do século VII e VI a.C., um homem tomou o poder de forma irregular e governou sem ser rei: o **tirano** (palavra de origem estrangeira, talvez lídia). Não eram necessariamente cruéis; o termo só ganhou o sentido de «opressor» depois, com os filósofos e a democracia. A maior parte eram nobres ambiciosos, que se apoiaram em camponeses endividados, em hoplitas ou em artesãos contra a elite. Muitos fizeram obras públicas, promoveram o comércio, as artes e os cultos, e conseguiram a paz social; mas raramente a dinastia durava mais de duas gerações.',
  { tabela: { cab: ['Tirano', 'Cidade', 'Datas aproximadas'], linhas: [
    ['Cípselo e Periandro', 'Corinto', 'c. 657 – 587 a.C.'],
    ['Ortágoras e descendentes', 'Sícion', 'séculos VII–VI a.C. (cerca de um século)'],
    ['Teágenes', 'Mégara', 'século VII a.C.'],
    ['Fídon', 'Argos', 'século VII a.C. (datas muito discutidas)'],
    ['Pítaco (um «esimneta» eleito)', 'Mitilene', 'c. 590 – 580 a.C.'],
    ['Pisístrato e os filhos', 'Atenas', '561/0, 556, 546 – 510 a.C.'],
    ['Polícrates', 'Samos', 'c. 538 – 522 a.C.'],
    ['Fálaris', 'Acragas (Sicília)', 'c. 570 – 555 a.C.']
  ] } },
  { h: '13. Religião' },
  'A religião arcaica era **politeísta**, ritual e ligada à cidade. Os deuses, descritos por Homero e por Hesíodo, tinham forma humana e eram imortais, poderosos e caprichosos. A **Teogonia** de Hesíodo apresenta a sua origem: do Caos surgiu Gaia (a Terra), que gerou Urano (o Céu) e, com ele, os Titãs; **Zeus** derrotou o pai, Crono, e instaurou a ordem. O culto fazia-se no **altar**, ao ar livre, diante do templo, com **sacrifícios** de animais cuja carne era consumida num banquete comunitário, e **libações** de vinho. Não havia casta sacerdotal: os magistrados e as famílias aristocráticas exerciam os sacerdócios.',
  'O culto de **heróis** (mortos famosos, venerados nos seus túmulos, como os de Micenas) era importante, e há desde o século VIII a.C. oferendas junto de túmulos da Idade do Bronze. Os **oráculos**, o de **Delfos** em especial, davam respostas a cidades e a particulares. Em **Elêusis**, perto de Atenas, os **mistérios** de Deméter e Perséfone prometiam uma sorte melhor depois da morte aos iniciados; o *Hino Homérico a Deméter* (c. 600 a.C.) conta o mito. A partir do século VI a.C., movimentos como o **orfismo** e o **pitagorismo** propuseram a ideia de uma alma imortal, que renasce.',
  { h: '14. Os Jogos pan-helénicos' },
  'Olímpia, Delfos, o Istmo e Nemeia reuniam, cada um em ciclos regulares, atletas e espectadores de todo o mundo grego, e davam aos gregos a consciência de uma identidade comum. Havia uma **trégua sagrada** para viajar em segurança. Os vencedores recebiam apenas uma coroa, mas voltavam à sua cidade como heróis, com direito a estátuas e a refeições gratuitas.',
  { tabela: { cab: ['Jogos', 'Local e deus', 'Início (tradição)', 'Periodicidade', 'Prémio'], linhas: [
    ['Olímpicos', 'Olímpia, Zeus', '776 a.C.', 'De quatro em quatro anos', 'Coroa de oliveira selvagem'],
    ['Píticos', 'Delfos, Apolo', '582 a.C. (reorganização)', 'De quatro em quatro anos', 'Coroa de louro'],
    ['Ístmicos', 'Istmo de Corinto, Posídon', '582 a.C.', 'De dois em dois anos', 'Coroa de pinheiro (por vezes de aipo)'],
    ['Nemeus', 'Nemeia, Zeus', '573 a.C.', 'De dois em dois anos', 'Coroa de aipo selvagem']
  ] } },
  { img: 'gea-olimpia-776', leg: 'Cena imaginada dos Jogos de Olímpia nos seus primeiros tempos, c. 700 a.C., com a corrida em terra batida, o altar de Zeus e espectadores em pé; pormenores são hipotéticos. Ilustração gerada por IA.' },
  'Nos Jogos Olímpicos dos primeiros séculos só havia uma prova, a corrida do **estádio** (c. 192 m). Segundo a tradição, a prova do **diaulos** (duas vezes o estádio) foi introduzida em 724 a.C., a do **dolichos** (corrida de resistência) em 720, o **pentatlo** e a **luta** em 708, o **pugilato** em 688, a corrida de **carros** em 680 e o **pancrácio** em 648 a.C. Os atletas competiam nus, uma novidade que a tradição atribui ao século VIII a.C. e que os gregos consideravam típica deles; as mulheres casadas não podiam assistir.',
  { h: '15. Economia e moeda' },
  'A base era a **agricultura**: cereais (cevada, trigo), **vinha** e **oliveira**, num solo pobre. Hesíodo descreve a vida de um pequeno proprietário: arar, semear, colher, vindimar e evitar a navegação fora da estação. A população subiu muito entre 800 e 700 a.C., e criou a pressão que levou à colonização. As cidades trocavam vinho, azeite, cerâmica e metais por cereais, madeira e escravos. A cerâmica de Corinto dominou os mercados no século VII a.C., e a de Atenas no século VI a.C.',
  'A **moeda** foi inventada no reino da **Lídia** (Ásia Menor) por volta de 600 a.C., em eletro, e Creso mandou cunhar moedas de ouro e de prata. Egina, Corinto e Atenas começaram a cunhar prata no século VI a.C.; a «**coruja**» ateniense apareceu no fim do século VI a.C. A moeda facilitou os impostos, os salários e o comércio, mas as trocas continuaram a fazer-se muitas vezes sem ela. A escravatura de tipo «mercadoria» (comprada e vendida) aumentou na época arcaica, segundo a tradição a partir de Quios.',
  { h: '16. A vida quotidiana' },
  'A unidade básica era a **casa** (*oikos*): a família, os escravos e os bens. As casas da Idade Obscura eram de forma oval ou de ábside, de adobe e palha; as da época arcaica tornaram-se retangulares, com pátio interior. Os camponeses viviam em aldeias e iam todos os dias aos campos. O alimento base era o **pão ou as papas de cevada**, com azeitonas, queijo, figos e hortaliças; a carne só se comia nas festas e nos sacrifícios. Bebia-se **vinho** misturado com água.',
  'A roupa era simples. As mulheres usavam o **peplos**, de lã, preso nos ombros com fíbulas (alfinetes), ou o **quíton** jónico, de linho, mais fino. Os homens usavam o **quíton** e, por cima, o **himátion**. O **simpósio** (o banquete só para homens e depois do jantar, com vinho, música e poesia) tornou-se o grande espaço de convívio da aristocracia, e muita poesia lírica foi composta para ele. A educação era feita em casa e, para os rapazes, no ginásio e na palestra, com música, ginástica e poesia (Homero e Hesíodo).',
  { h: '17. Mulheres, escravos e estrangeiros' },
  { lista: [
    '**Mulheres:** não tinham direitos políticos, eram representadas por um tutor (*kyrios*) e a vida delas passava-se sobretudo em casa; mas cuidavam da casa, teciam, e podiam ser sacerdotisas com grande prestígio. Safo, de Lesbos, chefiou um círculo de mulheres e deixou poesia sobre amor e saudade; as mulheres espartanas tinham mais liberdade.',
    '**Escravos:** alguns eram prisioneiros de guerra, outros comprados a traficantes (muitos vinham do mar Negro e da Trácia), e trabalhavam em casas, campos e minas. Os hilotas eram uma categoria à parte.',
    '**Estrangeiros:** os que não pertenciam à pólis não tinham direitos políticos; em Atenas, a categoria de **meteco** (estrangeiro residente) só é clara no século V a.C.'
  ] },
  { h: '18. Arte e arquitetura' },
  'A arte grega, desta época, passa por quatro fases: o **estilo geométrico** (c. 900–700 a.C.), em que os vasos se cobrem de bandas de losangos, meandros e figuras estilizadas (os grandes vasos funerários de Atenas, do cemitério do Dípilon); o **orientalizante** (c. 720–600 a.C.), em que motivos do Egito e do Próximo Oriente (leões, esfinges, flores de lótus) chegam via comércio; o **estilo arcaico** de figuras negras (de Corinto e depois de Atenas, c. 700–500 a.C.) e, desde c. 530 a.C., o das **figuras vermelhas**, inventado em Atenas.',
  { img: 'gea-francois-vaso', leg: 'O vaso François, cratera ática de figuras negras, c. 570 a.C., assinada pelo pintor Clítias e pelo oleiro Ergótimos, com cenas de mitos. Museu Arqueológico Nacional de Florença.' },
  { img: 'gea-ceramica-oficina', leg: 'Cena imaginada de uma oficina de cerâmica em Atenas, c. 520 a.C., com um pintor a decorar um vaso de figuras vermelhas e outros a trabalhar o torno e o forno; ilustração gerada por IA.' },
  'Na **escultura**, os gregos adotaram, por influência do Egito, a estátua monumental de pedra, e criaram dois tipos: o **kouros** (rapaz nu, de pé, com a perna esquerda avançada, usado como túmulo ou oferenda) e a **koré** (rapariga vestida). Evoluem de formas rígidas, de c. 600 a.C., para corpos mais naturais, c. 500 a.C., com o famoso «sorriso arcaico». Foi também nesta época que se construíram os primeiros **templos de pedra**, com colunas em ordem **dórica** (Corinto, Corcira, Paestum) e **jónica** (Éfeso, Samos), e com esculturas nos frontões e nos frisos.',
  { img: 'gea-kore-peplos', leg: 'A «koré do peplos», mármore, c. 530 a.C., que mantém restos de pigmentos. Museu da Acrópole, Atenas.' },
  { img: 'gea-sifnios-friso', leg: 'Friso do Tesouro dos Sifnios, em Delfos, c. 525 a.C., com cenas da guerra de Troia e da batalha dos deuses e dos gigantes. Museu Arqueológico de Delfos.' },
  { h: '19. Os primeiros filósofos e cientistas' },
  'Na Jónia, a partir de c. 600 a.C., alguns homens começaram a perguntar de que é feito o mundo e como funciona, **sem recorrer a deuses**. **Tales** de Mileto disse que tudo vem da água; **Anaximandro** propôs um princípio sem limites (*apeiron*) e desenhou um mapa do mundo; **Anaxímenes** apontou o ar. **Pitágoras**, nascido em Samos e ativo em Crotona, ensinou a alma imortal e a importância dos números; **Xenófanes** criticou as histórias de deuses com corpo humano; **Heráclito** de Éfeso defendeu que tudo está em mudança constante. **Hecateu** de Mileto escreveu uma descrição do mundo conhecido, e uma das primeiras «histórias». Em Atenas, ainda não havia filósofos importantes (só após as Guerras Médicas).',
  { h: '20. Mitos, lendas e factos' },
  { caixa: 'O que é lenda e o que é facto', texto: [
    '**O Minotauro e o Labirinto.** São lenda, mas as grandes ruínas de Cnossos, a imagem do touro e o machado de dois gumes podem ter alimentado a tradição. Não há provas de que tenha existido um labirinto físico.',
    '**Os minoicos eram pacíficos.** É uma ideia de Evans e de autores posteriores. A ausência de grandes muralhas e a arte de temas festivos são verdadeiras, mas há armas, cidadelas e sinais de conflitos, e a violência não está excluída.',
    '**Atlântida e Tera.** A ideia de que a erupção de Tera está por trás do mito de Platão é uma hipótese moderna, não demonstrada: Platão conta uma história para a sua filosofia política, e situa-a no Atlântico.',
    '**Agamémnon e Troia.** Schliemann acreditou ter encontrado a «máscara de Agamémnon»; a máscara é três séculos anterior ao tempo em que se supõe a guerra de Troia.',
    '**A «invasão dória».** É uma explicação dos gregos, que a arqueologia não confirma como uma invasão.',
    '**Licurgo.** Não sabemos se foi uma pessoa real; a tradição é de séculos depois.',
    '**Homero «cego».** A tradição que dá ao poeta a cegueira pode vir do aedo cego Demódoco, na *Odisseia*, ou do *Hino a Apolo*; não há provas.',
    '**Os Jogos de 776 a.C.** A data foi calculada por Hípias de Élis, séculos depois; é uma convenção.',
    '**Drácon «escrevia com sangue».** A frase é uma pilhéria antiga (reportada por Plutarco) sobre as leis de homicídio; a lei de Drácon distinguia o homicídio voluntário do involuntário, e foi a única parte das suas leis que Sólon manteve.'
  ] }
];

const personalidades = [
  'Desta época conhecemos poucas pessoas com certeza. Muitos nomes (Licurgo, Homero) estão envoltos em lenda, e quase todas as datas anteriores a 600 a.C. são aproximadas. Aqui juntam-se os que descobriram a Idade do Bronze, os poetas e os políticos que moldaram o mundo arcaico.',
  { h: 'Arthur Evans (1851 – 1941)' },
  'Arqueólogo britânico, conservador do Museu Ashmolean, em Oxford. Comprou o terreno de Cnossos em 1900 e dirigiu as escavações durante mais de trinta anos, trazendo à luz o palácio, os frescos, as tabuinhas de Linear A e B. Foi ele quem chamou «minoica» à civilização, a partir do rei Minos. Mandou reconstruir partes do palácio, com betão e frescos restaurados pelo pintor Piet de Jong; as reconstruções, e a sua imagem de uma Creta pacífica e matriarcal, são hoje criticadas. Não aceitou que o Linear B fosse grego; a decifração de Ventris provou o contrário.',
  { h: 'Michael Ventris (1922 – 1956)' },
  'Arquiteto britânico, apaixonado por escritas antigas desde os 14 anos. Trabalhando em casa, com base nos estudos da norte-americana **Alice Kober** (que morreu em 1950, sem concluir a decifração) e nas tabuinhas publicadas, descobriu em 1952 que o Linear B escreve uma forma antiga de **grego**. Publicou o resultado em 1953 com o filólogo **John Chadwick**. Morreu num acidente de carro em 1956, com 34 anos. A decifração fez recuar a história escrita da língua grega em mais de meio milénio.',
  { h: 'Homero (data e vida incertas; séc. VIII a.C.?)' },
  'Poeta a quem a tradição atribui a **Ilíada** e a **Odisseia**. Os gregos antigos já discutiam se era da Jónia, de Quios ou de Esmirna, e acreditavam que era cego. Os estudiosos modernos discutem se foi uma só pessoa ou uma tradição de cantores, e se os dois poemas são da mesma mão; a maior parte situa a composição entre c. 750 e 650 a.C. Foi o «educador dos gregos» (Platão), e as suas obras eram decoradas por todos os rapazes.',
  { img: 'gea-homero-busto', leg: 'Busto de Homero, cópia romana de um original helenístico, séculos II–I a.C.; é um retrato imaginado, porque ninguém sabe como foi o poeta. Museu Britânico.' },
  { h: 'Hesíodo (c. 700 a.C.)' },
  'Poeta da Beócia, que vivia em Ascra, uma aldeia que, segundo ele, era «má no inverno, dura no verão, e nunca boa». Compôs a **Teogonia** e os **Trabalhos e Dias**, e é o primeiro poeta grego a falar de si: o pai tinha vindo da Eólia, ele guardava ovelhas no monte Hélicon quando as Musas lhe terão aparecido, e tinha uma disputa de herança com o irmão **Perses**. Diz que ganhou um tripé num concurso poético em Cálcis, na Eubeia. A sua obra dá a visão de um camponês e é uma fonte excecional da vida rural.',
  { h: 'Licurgo (data incerta)' },
  'Legislador de Esparta, a quem a tradição atribui a organização da cidade: os dois reis, os anciãos, a assembleia, a educação dos rapazes, as refeições comuns. Os antigos não se entendiam sobre quando viveu (entre os séculos IX e VII a.C.), e hoje muitos historiadores duvidam de que tenha existido como pessoa; a organização espartana parece obra de séculos. A fonte principal é a *Vida de Licurgo*, de Plutarco, escrita c. 100 d.C., quase mil anos depois.',
  { h: 'Cípselo (c. 657 – 627 a.C.) e Periandro (c. 627 – 587 a.C.)' },
  '**Cípselo** tomou o poder em Corinto derrubando os Báquidas e governou durante trinta anos, sem guarda pessoal, diz Aristóteles. O filho **Periandro** governou cerca de 40 anos, fundou colónias (Potideia, Apolónia), é-lhe atribuído o Diolkos, a rampa para arrastar barcos pelo istmo e foi uma das mais notáveis figuras do seu tempo, por vezes contado entre os «Sete Sábios». As fontes posteriores descrevem-no como cruel, e as histórias sobre a sua vida são difíceis de confirmar. A tirania caiu poucos anos depois da morte dele (c. 584 a.C.).',
  { h: 'Drácon (século VII a.C.)' },
  'Legislador de Atenas, que em 621 a.C. escreveu as primeiras leis da cidade, sobretudo sobre **homicídio**. Distinguiu o homicídio voluntário do involuntário e retirou a vingança das mãos das famílias, entregando o caso à cidade. Foi muito severo (a morte para muitos delitos), e por isso ficou como símbolo de rigor excessivo: «draconiano». Sólon revogou quase todas as suas leis, menos as de homicídio.',
  { h: 'Sólon (c. 640 – c. 560 a.C.)' },
  'Poeta, comerciante e político ateniense. Foi eleito arconte c. 594 a.C. com poderes para resolver a crise de dívidas: perdoou dívidas, proibiu a escravatura por dívidas, criou as quatro classes de rendimento e abriu os tribunais ao povo. Depois partiu em viagem por dez anos para evitar ser obrigado a alterar as leis. Conservámos fragmentos dos seus poemas políticos, em que defende a sua obra. É um dos «Sete Sábios»; o encontro com Creso, contado por Heródoto, é provavelmente lenda (as cronologias não batem certo).',
  { h: 'Pisístrato (c. 600 – 528/7 a.C.)' },
  'Nobre ateniense, general vitorioso contra Mégara, tomou o poder três vezes (c. 561/0, c. 556 e 546 a.C.). Segundo Heródoto, na segunda tentativa entrou em Atenas acompanhado de uma mulher disfarçada de Atena. Durante os 19 anos do último período governou bem: empréstimos a camponeses, obras públicas, festas, e uma política externa prudente; explorou minas na Trácia (o monte Pangeu) durante o exílio. Segundo Aristóteles, dizia-se que o seu governo era como a «idade de Crono», a idade de ouro; o regime dos filhos, porém, acabou em 510 a.C.',
  { h: 'Clístenes (c. 570 – depois de 508 a.C.)' },
  'Aristocrata da família dos **Alcmeónidas**, arconte em 525/4 a.C. (consta de uma inscrição), exilado pelos Pisistrátidas e depois aliado a Delfos para os derrubar. Em 508/7 a.C., derrotado por Iságoras (com apoio de Esparta), «tomou o povo como sócio» e, com o apoio popular, reorganizou a cidade em dez tribos e 140 demos, criou o Conselho dos 500, e fez da assembleia o centro da política. Nada se sabe da sua vida depois de 506 a.C. É o «pai da democracia ateniense».',
  { h: 'Safo de Lesbos (c. 630 – c. 570 a.C.)' },
  'Poetisa de Mitilene, na ilha de Lesbos, a mais famosa poetisa da Antiguidade (chamada por alguns «a décima Musa»). Compôs poemas líricos, cantados com lira, sobre o amor, a beleza, a saudade e os rituais de casamento, sobretudo para um círculo de jovens mulheres que viviam à sua volta. Dos nove livros que os antigos conheciam sobrevivem uma ode completa (a **Ode a Afrodite**) e fragmentos, que incluem poemas descobertos em papiros no século XXI. Os pormenores da sua vida (marido, filha, exílio na Sicília) vêm de fontes tardias e são incertos; a lenda de que se matou por amor é invenção posterior.',
  { img: 'gea-safo-alceu', leg: 'Safo e Alceu, de Lesbos, representados num *kálatos* ático de figuras vermelhas, c. 470 a.C. Staatliche Antikensammlungen, Munique.' },
  { h: 'Tales de Mileto (c. 624 – c. 546 a.C.)' },
  'Considerado por Aristóteles o primeiro filósofo, procurou explicar o mundo sem recorrer aos deuses, e disse que o princípio de tudo era a **água**. Segundo Heródoto previu um eclipse solar, que hoje se pensa ter sido o de 28 de maio de 585 a.C.; muitos historiadores duvidam de que tivesse capacidade de o prever. Tem fama de matemático (medir a altura das pirâmides pela sombra e, segundo a tradição, demonstrar propriedades dos triângulos e do círculo) e de homem prático; é incluído nos Sete Sábios. Nada escreveu que conheçamos.',
  { h: 'Pitágoras de Samos (c. 570 – c. 495 a.C.)' },
  'Nascido em Samos, fixou-se por volta de 530 a.C. em Crotona (sul de Itália), onde fundou uma comunidade que unia filosofia, religião, política e matemática. Ensinou a **imortalidade da alma** e a sua reencarnação, regras de vida (os *akousmata*) e o valor dos números nas harmonias musicais. A comunidade teve influência política e acabou por ser atacada. Nada escreveu; o «teorema de Pitágoras» já era conhecido na Babilónia e a sua demonstração é provavelmente posterior. Quase tudo o que se diz dele vem de fontes de séculos depois.',
  { h: 'Polícrates de Samos (c. 538 – 522 a.C.)' },
  'Tirano de Samos, tornou-se senhor do mar Egeu com uma frota de uns cem navios de guerra (penteconteras). Construiu o túnel de **Eupalino**, um porto e o grande templo de **Hera**, e protegeu poetas, como **Anacreonte**. Segundo Heródoto, o seu sucesso era tal que o faraó Amásis lhe aconselhou que se desfizesse de uma joia para conjurar o ciúme dos deuses. Foi atraído a Magnésia do Meandro por **Oroetes**, sátrapa persa de Sardes, e executado em 522 a.C.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**A pólis e a cidadania:** a ideia de que uma comunidade se governa por leis conhecidas e decididas em conjunto, e não apenas pela vontade de um chefe.',
    '**O alfabeto:** o alfabeto grego é o antepassado do latino, do cirílico, do copta e de outros; e a palavra «alfabeto» junta o nome das duas primeiras letras, *alfa* e *beta*.',
    '**A literatura:** os poemas de Homero e de Hesíodo, a lírica de Safo e de Arquíloco abriram a tradição literária europeia.',
    '**A lei escrita e a política:** Drácon, Sólon e Clístenes inauguram o debate sobre a justiça, a igualdade e a participação.',
    '**Os jogos:** os Jogos Olímpicos modernos (1896) são a sua herança direta; a palavra «atleta» é grega.',
    '**A colonização:** as colónias do Ocidente levaram a língua, os deuses e o alfabeto para a Itália e o sul de França, e os romanos aprenderam muita coisa com elas.',
    '**A filosofia e a ciência:** o pensamento jónico do século VI a.C. começou a explicar o mundo pela razão.'
  ] },
  { h: 'Palavras que vêm desta história' },
  { lista: [
    '**Tirano:** de *tyrannos*; na origem, apenas quem tomava o poder sem ser rei.',
    '**Ostracismo:** de *ostrakon*, caco de cerâmica, onde se escrevia o nome do exilado.',
    '**Ciclópico:** diz-se das muralhas de blocos enormes, como as de Micenas e de Tirinto, que os gregos julgavam obra de ciclopes.',
    '**Labirinto:** talvez de *labrys*, o machado de dois gumes, símbolo minoico; ligado ao palácio de Cnossos.',
    '**Odisseia:** passou a significar uma viagem longa e cheia de peripécias.',
    '**Draconiano:** severo em excesso, por causa de Drácon.',
    '**Espartano:** austero e disciplinado, por causa de Esparta.',
    '**Olímpico, atleta, estádio, pentatlo:** vêm dos Jogos de Olímpia.'
  ] },
  { h: 'Arte' },
  'As estátuas arcaicas, os kouroi e as korai, mostram o aparecimento do corpo humano como tema central da arte europeia. A cerâmica de figuras negras e vermelhas é uma das fontes principais sobre o que os gregos pensavam e faziam. Os frescos minoicos, as máscaras de ouro de Micenas e as estatuetas cicládicas, de formas tão simples, inspiraram artistas do século XX como Brancusi e Henry Moore.',
  { h: 'A redescoberta' },
  'Até ao século XIX, a Idade do Bronze grega era uma lenda. **Heinrich Schliemann** escavou Troia (1870) e Micenas (1876) e mostrou que os poemas de Homero tinham alguma base material, ainda que os seus métodos tenham destruído partes do sítio. **Arthur Evans** descobriu Cnossos em 1900, e a civilização minoica passou a existir na história. **Carl Blegen** encontrou o arquivo de Pilos em 1939. Em **1952**, **Michael Ventris** decifrou o Linear B. Em **1967**, **Spyridon Marinatos** começou a escavar Akrotiri, em Tera. Nas décadas de 1960 a 1980, as escavações de Lefkandi mostraram que a Idade Obscura não foi tão escura. Hoje, a análise de ADN antigo, a datação por radiocarbono e a arqueologia subaquática (como o naufrágio de Uluburun) continuam a mudar o quadro.',
  { h: 'O que continua em aberto' },
  { lista: [
    'Quando exatamente explodiu o vulcão de Tera, e quanto afetou os minoicos.',
    'Como se lê o Linear A e que língua falavam os minoicos.',
    'O que provocou o colapso de c. 1200 a.C. e porque a Grécia demorou séculos a recuperar.',
    'Se houve, ou não, uma guerra de Troia e que memória dela guardam os poemas de Homero.',
    'Como e quando se fixaram por escrito a *Ilíada* e a *Odisseia*, e se foi o mesmo poeta.',
    'Quando e como mudou a guerra grega com os hoplitas, e quanto isso mudou a política.',
    'Se Licurgo existiu e quando se formou o sistema espartano.'
  ] },
  { h: 'Onde visitar' },
  { lista: [
    '**Atenas:** Museu Arqueológico Nacional (estatuetas das Cíclades, tesouros de Micenas, a «Máscara de Agamémnon», kouroi e vasos geométricos), Museu da Acrópole (Koré do Peplos) e Museu da Ágora Antiga.',
    '**Creta:** palácio de Cnossos e Museu Arqueológico de Heraclião (frescos, o Disco de Festo, a «deusa das serpentes»), palácio de Festo e palácios de Malia e de Zakros.',
    '**Tera (Santorini):** o sítio de Akrotiri e o Museu de Pré-História de Tera.',
    '**Peloponeso:** Micenas (cidadela, Porta dos Leões, túmulos), Tirinto, o Palácio de Nestor em Pilos, Corinto antiga, Olímpia (com o seu museu) e o Museu de Esparta.',
    '**Delfos:** o santuário de Apolo e o museu, com o friso do Tesouro dos Sifnios.',
    '**Eubeia:** o Museu Arqueológico de Erétria, com o Centauro de Lefkandi.',
    '**Itália:** Paestum (templos de Hera e de Posídon), Siracusa, Selinunte e Agrigento, na Sicília, e o Museu de Pitecusa, em Ísquia.',
    '**Turquia:** Troia, Éfeso, Mileto e o Museu de Arqueologia Subaquática de Bodrum.',
    '**Em Lisboa:** o Museu Calouste Gulbenkian tem moedas e vasos gregos, incluindo vasos áticos.'
  ] },
  { h: 'Notas finais' },
  'As datas desta página são aproximadas, e muitas delas, sobretudo antes de c. 600 a.C., resultam de convenções ou de tradições posteriores. Em muitos casos, os especialistas ainda discutem. A história continua na página sobre a **Época Clássica**, a partir das Guerras Médicas; os temas da religião, da arte, da guerra e da filosofia têm páginas próprias, e a página-mãe dá o panorama geral.'
];

const quiz = [
  { p: 'Como se chama a civilização da Idade do Bronze que tinha Cnossos como principal palácio?', op: ['Micénica', 'Minoica', 'Cicládica', 'Hitita'], certa: 1, exp: 'Os minoicos, de Creta; o nome vem do rei lendário Minos e foi criado por Arthur Evans.' },
  { p: 'Quem decifrou o Linear B em 1952 e mostrou que escrevia grego?', op: ['Arthur Evans', 'Heinrich Schliemann', 'Michael Ventris', 'Carl Blegen'], certa: 2, exp: 'Michael Ventris, com contributos de Alice Kober e de John Chadwick.' },
  { p: 'Qual das seguintes afirmações sobre o Linear A é correta?', op: ['Foi decifrado por Ventris', 'Escreve grego micénico', 'Continua por decifrar quanto à língua', 'É um alfabeto fenício'], certa: 2, exp: 'O Linear A, dos minoicos, ainda não foi decifrado: a língua é desconhecida.' },
  { p: 'Que monumento marca a entrada principal da cidadela de Micenas?', op: ['O Tesouro de Atreu', 'A Porta dos Leões', 'O Parténon', 'O Tholos'], certa: 1, exp: 'A Porta dos Leões, de c. 1250 a.C., com o relevo de duas leoas.' },
  { p: 'O que aconteceu à civilização micénica por volta de 1200 a.C.?', op: ['Foi conquistada por Roma', 'Fundou colónias no mar Negro', 'Venceu os persas', 'Os palácios foram destruídos ou abandonados e a escrita Linear B desapareceu'], certa: 3, exp: 'O colapso da Idade do Bronze, de causas debatidas.' },
  { p: 'De que povo os gregos adaptaram o alfabeto, acrescentando sinais para as vogais?', op: ['Egípcios', 'Hititas', 'Fenícios', 'Persas'], certa: 2, exp: 'Os fenícios, c. 800 – 750 a.C.' },
  { p: 'Qual a data tradicional dos primeiros Jogos Olímpicos?', op: ['1200 a.C.', '776 a.C.', '594 a.C.', '490 a.C.'], certa: 1, exp: 'Data fixada séculos depois por Hípias de Élis.' },
  { p: 'O que era uma pólis?', op: ['Um santuário', 'Uma escrita', 'Uma cidade-Estado com território, leis e cidadãos', 'Uma moeda'], certa: 2, exp: 'A unidade política básica do mundo grego.' },
  { p: 'Qual era o papel do «oikistes» na colonização?', op: ['Chefe da expedição e fundador da colónia', 'Sacerdote de Delfos', 'Comandante dos hilotas', 'Cobrador de impostos'], certa: 0, exp: 'O fundador era nomeado pela cidade-mãe e honrado como herói.' },
  { p: 'Que cidade fundou Siracusa, na Sicília, c. 733 a.C.?', op: ['Atenas', 'Esparta', 'Tebas', 'Corinto'], certa: 3, exp: 'Corinto, sob Arquias.' },
  { p: 'Quem eram os hilotas, em Esparta?', op: ['Os reis', 'Os soldados profissionais', 'A população rural subjugada que trabalhava a terra para os espartanos', 'Os sacerdotes'], certa: 2, exp: 'Muitos eram messénios, conquistados nas guerras da Messénia.' },
  { p: 'Quem perdoou as dívidas e dividiu os cidadãos de Atenas em quatro classes de rendimento, c. 594 a.C.?', op: ['Drácon', 'Sólon', 'Pisístrato', 'Clístenes'], certa: 1, exp: 'Sólon, com a *seisachtheia* («sacudir o fardo»).' },
  { p: 'Por que razão a palavra «draconiano» designa uma lei muito severa?', op: ['Por causa das leis de Drácon, de 621 a.C.', 'Por causa do Minotauro', 'Por causa dos dragões de Esparta', 'Por causa de Pisístrato'], certa: 0, exp: 'Drácon escreveu as primeiras leis de Atenas, muito duras.' },
  { p: 'Qual das reformas pertence a Clístenes, em 508/7 a.C.?', op: ['O perdão das dívidas', 'A divisão da Ática em dez tribos e a criação do Conselho dos 500', 'A fundação da Academia', 'A construção do Parténon'], certa: 1, exp: 'Clístenes reorganizou a cidadania com base nos demos e nas tribos.' },
  { p: 'Qual é a afirmação correta sobre Homero?', op: ['Foi certamente um só poeta cego, de Atenas', 'Escreveu em Linear B', 'É um herói de Troia', 'A «questão homérica» discute se foi uma pessoa ou uma tradição, e como os poemas foram compostos'], certa: 3, exp: 'A tradição é antiga, mas o que sabemos sobre o poeta é incerto.' }
];

export default {
  id: 'grecia',
  cor: '#3a7ab8',
  emblema: '../../assets/img/grecia.png',
  grupo: { ...GRUPO, aqui: 'egeu-arcaica' },
  nome:    { pt: 'Do Egeu à Época Arcaica', en: 'From the Aegean to the Archaic Age' },
  periodo: { pt: 'c. 3000 – 480 a.C.', en: 'c. 3000 – 480 BC' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: legado, en: EN.legado },
  quiz:           { pt: quiz, en: EN.quiz }
};
