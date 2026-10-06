// GRÉCIA ANTIGA — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
import { GRUPO } from './grupo.js';
// Datas aproximadas, na «cronologia média». a.C. = antes de Cristo. Persas, Macedónios, Egito e Roma só de passagem; Bizâncio, Roma e a Pérsia terão páginas próprias.
// Imagens: cada {img:'id'} procura o ficheiro  grecia/img/id.jpg  (ver IMAGENS_GRECIA.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'A **Grécia Antiga** não foi um país, mas um mundo de centenas de pequenas cidades-Estado (as **póleis**) espalhadas pelo mar Egeu, pelo Mediterrâneo e pelo mar Negro, unidas pela mesma língua, pelos mesmos deuses e pelos mesmos jogos. Dos palácios dos **minoicos** e dos **micénicos**, na Idade do Bronze, passou-se às cidades da época arcaica e clássica, onde nasceram a **democracia**, a **filosofia**, o **teatro**, a **história** como disciplina e uma matemática feita de demonstrações.',
    'Atenas e Esparta venceram juntas os persas e combateram-se depois numa longa guerra; Tebas e a Macédia de **Filipe II** acabaram com a independência das cidades, e **Alexandre Magno** levou a língua e a cultura gregas até à Índia. No período helenístico, Alexandria, Pérgamo e Rodes foram centros de ciência e de arte, até Roma conquistar tudo, entre 146 e 30 a.C. Mas a Grécia, como disse um poeta romano, «cativa, cativou o seu feroz vencedor».'
  ] },
  { img: 'gre-mapa-egeu', leg: 'Mapa do mundo grego, com o mar Egeu, o continente, as ilhas e a costa da Ásia Menor, no período clássico.' },
  { h: 'Onde ficava' },
  'O coração do mundo grego era o **mar Egeu**: a Grécia continental (do Peloponeso à Macedónia), as ilhas (Creta, as Cíclades, o Dodecaneso) e a costa ocidental da atual Turquia, chamada **Jónia**. É uma terra de montanhas, com poucas planícies e quase nenhum rio navegável; nenhum ponto da Grécia fica a mais de uns 100 km do mar. Daí a vida virada para a navegação e para o comércio, e a divisão em pequenas comunidades isoladas por serras, cada uma com o seu território.',
  'Os gregos não ficaram só ali. Entre o século VIII e o século VI a.C., fundaram **colónias** no sul de Itália e na Sicília (a «Magna Grécia»), no sul de França (Massália, hoje Marselha), em Cirenaica (Líbia), no Egito (Náucratis), na costa do mar Negro e em muitas outras margens. Platão escreveu que os gregos viviam à volta do mar «como rãs à volta de um charco».',
  { img: 'gre-acropole-atenas', leg: 'A Acrópole de Atenas, vista do Areópago, com o Parténon no topo.' },
  { h: 'Quando existiu' },
  'A história grega costuma dividir-se em grandes períodos. As datas são aproximadas e as fronteiras entre eles, convencionais; o limite entre «minoico» e «micénico», por exemplo, ou o início do período arcaico, depende do critério de cada autor.',
  { tabela: { cab: ['Período', 'Datas aproximadas', 'O que o marca'], linhas: [
    ['Idade do Bronze: minoicos', 'c. 3000 – 1450 a.C.', 'Civilização de Creta; grandes palácios (Cnossos, Festo, Malia) desde c. 1900 a.C.; escrita Linear A, ainda por decifrar'],
    ['Idade do Bronze: micénicos', 'c. 1600 – 1100 a.C.', 'Reinos guerreiros do continente (Micenas, Tirinto, Pilos); escrita Linear B, a mais antiga forma de grego conhecida'],
    ['Idade das Trevas', 'c. 1100 – 800 a.C.', 'Queda dos palácios, perda da escrita, empobrecimento; ferro; formação das comunidades que darão as póleis'],
    ['Período arcaico', 'c. 800 – 480 a.C.', 'Alfabeto, Homero e Hesíodo, colonização, hoplitas, tiranos, Sólon e Clístenes'],
    ['Período clássico', '480 – 323 a.C.', 'Guerras com os persas, Atenas de Péricles, Guerra do Peloponeso, filosofia, teatro, ascensão da Macédia; termina com a morte de Alexandre'],
    ['Período helenístico', '323 – 31 a.C.', 'Reinos dos sucessores de Alexandre; Alexandria, Pérgamo, Rodes; ciência e arte «cosmopolitas»'],
    ['Domínio romano', '146 – 30 a.C. em diante', 'Corinto destruída em 146 a.C.; Grécia como província romana; fim do Egito ptolemaico depois de Actium, em 31/30 a.C.']
  ] } },
  { img: 'gre-mapa-helenismo', leg: 'Mapa dos reinos helenísticos, c. 240 a.C.: ptolemaico, selêucida, antigónida e outros.' },
  { h: 'Quem eram os gregos?' },
  'Os gregos chamavam-se a si próprios **helenos** e à sua terra **Hélade**; o nome «gregos» vem do latim *Graeci*. Eram povos de língua grega que, nos dialetos (jónico, ático, dório, eólico) e nos costumes, se distinguiam muito de cidade para cidade, mas que reconheciam uma origem e uma cultura comuns: o **santuário de Olímpia**, o **oráculo de Delfos**, os poemas de **Homero** e a distinção entre helenos e «bárbaros», isto é, os que não falavam grego (a palavra imita o som de uma língua incompreensível e só mais tarde ganhou sentido pejorativo).',
  'Antes dos gregos clássicos, o Egeu esteve nas mãos de dois povos da Idade do Bronze: os **minoicos**, em Creta, cuja língua ainda não sabemos ler, e os **micénicos**, no continente, que já falavam uma forma antiga de grego. Os micénicos tomaram Cnossos por volta de 1450 a.C. A origem exata dos primeiros falantes de grego e a relação com os povos «dóricos» do período seguinte são questões discutidas pelos especialistas.',
  { h: 'Porque importam' },
  { lista: [
    '**Política:** os gregos inventaram a ideia de que os cidadãos, e não um rei ou os deuses, decidem a lei em assembleia. A democracia ateniense foi limitada (excluía mulheres, escravos e estrangeiros) mas é a origem das palavras e de muitas das questões da política atual.',
    '**Pensamento:** a filosofia, a lógica, a ética, a ciência natural e a medicina baseada na observação começaram a ser praticadas como exercícios de razão, desde Tales (século VI a.C.) a Aristóteles.',
    '**Arte e literatura:** o teatro (tragédia e comédia), a poesia épica e lírica, a história, a escultura do corpo humano e as ordens da arquitetura dominam ainda a imagem do «clássico».',
    '**Ciência e matemática:** Pitágoras, Euclides, Arquimedes, Eratóstenes e Hipócrates deram à Europa e ao mundo islâmico uma base de raciocínio por demonstração.',
    '**Desporto:** os Jogos Olímpicos, com as suas regras e a trégua sagrada, são o antepassado direto dos Jogos modernos, retomados em Atenas em 1896.'
  ] },
  { caixa: 'A Grécia hoje', texto: 'A Acrópole de Atenas foi das primeiras inscrições gregas na lista do Património Mundial da UNESCO, em 1987. Delfos, Olímpia, Micenas, Epidauro, Delos e Vergina (o túmulo de Filipe II) são também Património Mundial. Mas a Grécia Antiga está em todo o lado: nas palavras («democracia», «filosofia», «teatro», «matemática»), nos nomes das letras do alfabeto e nas colunas dos edifícios públicos de muitas cidades.' }
];

const linha = [
  'Esta linha do tempo segue os acontecimentos principais da história grega, da Idade do Bronze à conquista romana. As datas são aproximadas na «cronologia média»; as mais antigas são as mais incertas, e as da época arcaica assentam em tradições que os próprios gregos fixaram séculos depois.',
  { linha: [
    { d: 'c. 1900 a.C.', t: 'Os primeiros palácios minoicos', x: 'Em Creta surgem os grandes complexos de **Cnossos**, **Festo** e **Malia**, centros de armazenamento, culto e administração. Os cretenses usam a escrita **Linear A** (por decifrar) e comerciam com o Egito, o Levante e as Cíclades. Os palácios são destruídos por volta de 1700 a.C., provavelmente por sismos, e reconstruídos.' },
    { d: 'c. 1600 a.C.', t: 'Os túmulos de poço de Micenas', x: 'No continente, os chefes de **Micenas** são sepultados com máscaras de ouro, espadas e taças, nos chamados «túmulos de poço». É o início da civilização micénica. Por esses anos dá-se também a erupção do vulcão de **Tera (Santorini)**, cuja data exata (entre c. 1630 e c. 1500 a.C.) ainda é discutida.' },
    { d: 'c. 1450 a.C.', t: 'Os micénicos em Creta', x: 'Os palácios minoicos são destruídos, quase todos por incêndio, e os micénicos controlam **Cnossos**, onde as tabuinhas passam a estar em **Linear B**, uma escrita adaptada à língua grega. Debate-se se foi uma conquista, uma tomada de poder pacífica ou o efeito de catástrofes naturais.' }
  ] },
  { img: 'gre-cnossos-fresco-touros', leg: 'Fresco minoico do «salto ao touro», de Cnossos, c. 1450 a.C. Museu Arqueológico de Heraclião, Creta.' },
  { linha: [
    { d: 'c. 1400 – 1200 a.C.', t: 'O apogeu micénico', x: 'Palácios fortificados em **Micenas**, **Tirinto**, **Pilos** e **Tebas** governam o continente, com escribas, exércitos, estradas e comércio no Mediterrâneo. Textos hititas falam de um povo, os **Ahhiyawa**, que muitos historiadores identificam com os aqueus de Homero, os micénicos; a identificação é debatida.' }
  ] },
  { img: 'gre-mascara-agamemnon', leg: 'A chamada «Máscara de Agamémnon», máscara funerária de ouro dos túmulos de poço de Micenas, c. século XVI a.C. Museu Arqueológico Nacional, Atenas.' },
  { img: 'gre-linear-b', leg: 'Tabuinha de argila em Linear B, do palácio de Pilos, c. 1200 a.C. Museu Arqueológico Nacional, Atenas.' },
  { linha: [
    { d: 'c. 1200 – 1100 a.C.', t: 'O colapso da Idade do Bronze', x: 'Os palácios micénicos são destruídos ou abandonados em poucas décadas, e com eles desaparece a escrita Linear B. As causas são discutidas (invasões, sismos, secas, revoltas, quebra do comércio entre vários impérios). A **guerra de Troia** pertence a esta época nas memórias dos poetas: a cidade de Troia VIIa foi destruída c. 1180 a.C., mas a ligação com os versos de Homero é incerta.' },
    { d: 'c. 1100 – 800 a.C.', t: 'A «Idade das Trevas»', x: 'Descida da população e do comércio, perda da escrita, mas também mudanças importantes: o **ferro** substitui o bronze, os grupos de pessoas migram para as ilhas e para a costa da Ásia Menor, e consolidam-se as famílias e os santuários que estarão na origem das póleis. Em **Lefkandi**, na Eubeia, um edifício e túmulos mostram que não houve só ruína.' },
    { d: 'c. 800 – 750 a.C.', t: 'O alfabeto grego', x: 'Os gregos adaptam o alfabeto fenício e acrescentam sinais para as **vogais**, criando o primeiro alfabeto completo da história. Os mais antigos exemplos conhecidos são inscrições em vasos, como a do «cântaro de Dípilon», de c. 740 a.C., encontrado em Atenas.' }
  ] },
  { img: 'gre-vaso-dipylon', leg: 'Vaso geométrico do estilo de Dípilon, Atenas, c. 750 a.C., da época dos primeiros exemplos de escrita alfabética grega. Museu Arqueológico Nacional, Atenas.' },
  { linha: [
    { d: '776 a.C.', t: 'Os primeiros Jogos Olímpicos', x: 'É a data tradicional, fixada pelos gregos séculos mais tarde, para os primeiros jogos em **Olímpia**, em honra de Zeus; os Jogos realizaram-se de quatro em quatro anos durante mais de mil anos. Os arqueólogos encontram atividade no santuário já no século X a.C.' },
    { d: 'c. 750 – 700 a.C.', t: 'Homero e Hesíodo', x: 'Põem-se por escrito (ou compõem-se) a **Ilíada** e a **Odisseia**, atribuídas a **Homero**, e a **Teogonia** e os **Trabalhos e Dias** de **Hesíodo**. A «questão homérica», sobre quem foram os autores e como foram compostos os poemas, continua em aberto.' },
    { d: 'c. 750 – 550 a.C.', t: 'Colonização', x: 'Com a terra e o pão escassos e a população a crescer, cidades como Corinto, Cálcis e Mileto enviam colonos. Fundam-se **Pitecusa** (c. 770), **Siracusa** (c. 734), **Cirene** (c. 630), **Bizâncio** (c. 660, data tradicional) e **Massália** (c. 600). Cada colónia é uma pólis independente.' },
    { d: 'c. 700 – 600 a.C.', t: 'Hoplitas e tiranos', x: 'A **falange de hoplitas**, formada por cidadãos com armadura de bronze, muda a guerra e dá poder político a uma classe média de proprietários. Em várias cidades aparecem **tiranos**, líderes que tomam o poder à força sem serem reis (o termo não tinha ainda o sentido pejorativo de hoje): Cípselo em Corinto (c. 657) é o primeiro conhecido.' },
    { d: 'c. 594 a.C.', t: 'As reformas de Sólon', x: 'Em Atenas, o arconte **Sólon** cancela as dívidas que escravizavam camponeses (a *seisachtheia*, «sacudir o fardo»), divide os cidadãos em classes de riqueza e abre os tribunais à participação popular.' },
    { d: '546 – 510 a.C.', t: 'Os tiranos de Atenas', x: '**Pisístrato** toma o poder (definitivamente em 546 a.C.) e governa com moderação: obras públicas, festas, segundo a tradição, Homero fixado por escrito para as Panateneias. Os filhos Hípias e Hiparco continuam; Hiparco é assassinado em 514 e Hípias é expulso em 510 a.C., com ajuda de Esparta.' },
    { d: '508/7 a.C.', t: 'Clístenes e a democracia', x: '**Clístenes** reorganiza Atenas em dez tribos de base territorial, formadas a partir dos **demos** (bairros e aldeias), cria a Boulé de 500 membros e dá ao povo reunido em assembleia o poder de decidir. Por volta de 487 a.C., a assembleia usa pela primeira vez o **ostracismo**, que exilava durante dez anos quem pusesse a cidade em perigo.' }
  ] },
  { img: 'gre-ostracon-temistocles', leg: 'Ostraka (cacos de cerâmica) com o nome de Temístocles, usados em votos de ostracismo em Atenas, década de 480 a.C. Museu da Ágora Antiga, Atenas.' },
  { linha: [
    { d: '499 – 494 a.C.', t: 'A revolta da Jónia', x: 'As cidades gregas da Ásia Menor revoltam-se contra o Império Persa, com um breve apoio de Atenas e de Erétria. A revolta é esmagada na batalha naval de **Lade** (494 a.C.) e Mileto é destruída. **Dario I** decide castigar Atenas.' },
    { d: '490 a.C.', t: 'Maratona', x: 'Uma força persa desembarca perto de **Maratona**. Cerca de 10 mil atenienses e alguns aliados de Plateias, sob **Milcíades**, vencem o exército persa em poucas horas, segundo Heródoto com 192 mortos atenienses contra 6400 persas.' }
  ] },
  { img: 'gre-maratona-cena', leg: 'Cena imaginada de hoplitas atenienses a avançar contra o exército persa em Maratona, 490 a.C.; ilustração gerada por IA, sem pretensão de registo exato.' },
  { linha: [
    { d: '480 – 479 a.C.', t: 'Termópilas, Salamina e Plateias', x: '**Xerxes** invade a Grécia com um enorme exército e uma frota. Nas **Termópilas** (verão de 480), o rei espartano **Leónidas** e cerca de 7 mil gregos detêm os persas durante três dias; uma parte fica e é aniquilada. Pouco depois, a frota grega, sob influência de **Temístocles**, vence em **Salamina** (setembro de 480). Em 479 a.C., o exército aliado, comandado por Esparta, vence na batalha de **Plateias**, e termina a invasão.' }
  ] },
  { img: 'gre-salamina-batalha', leg: 'Cena imaginada da batalha naval de Salamina, 480 a.C., com trirremes gregas contra os navios persas; ilustração gerada por IA.' },
  { linha: [
    { d: '478/7 a.C.', t: 'A Liga de Delos', x: 'Atenas forma com muitas cidades do Egeu uma aliança contra a Pérsia, com o tesouro guardado em Delos. Aos poucos, a Liga torna-se um **império ateniense**: os aliados pagam tributo e não podem sair.' },
    { d: 'c. 461 – 429 a.C.', t: 'A Atenas de Péricles', x: 'Com o general **Péricles** (que foi reeleito estratego durante décadas), Atenas atinge o apogeu: democracia alargada, obras da Acrópole (o **Parténon**, de 447 a 432 a.C.), teatro, escultura e pensamento. O Estado paga a quem serve como juiz e membro do conselho.' }
  ] },
  { img: 'gre-pericles-busto', leg: 'Busto de Péricles, cópia romana de um original grego de c. 430 a.C. Museus do Vaticano (outra cópia no Museu Britânico).' },
  { linha: [
    { d: '431 – 404 a.C.', t: 'A Guerra do Peloponeso', x: 'A rivalidade entre a **Liga de Delos**, liderada por Atenas, e a **Liga do Peloponeso**, liderada por Esparta, leva à guerra. Uma peste em Atenas (430–426 a.C.) mata Péricles (429). A expedição à Sicília (415–413) acaba em desastre. Esparta, com dinheiro persa, constrói uma frota e vence em **Egospótamos** (405). Atenas rende-se em 404 a.C.' },
    { d: '399 a.C.', t: 'A morte de Sócrates', x: 'Depois de um regime oligárquico (os «Trinta Tiranos», 404–403 a.C.) e da restauração da democracia, **Sócrates** é julgado por «impiedade» e por «corromper os jovens» e condenado à morte por cicuta.' },
    { d: '404 – 362 a.C.', t: 'Esparta e Tebas', x: 'Esparta domina a Grécia durante uma geração, mas é vencida pela Tebas de **Epaminondas** em **Leuctras** (371 a.C.). Messénia é libertada dos espartanos e a hegemonia tebana dura pouco: Epaminondas morre na batalha de Mantineia (362 a.C.).' },
    { d: '338 a.C.', t: 'Filipe II e Queroneia', x: 'O rei **Filipe II** da Macédia, que reformou o exército e conquistou a Trácia e a Tessália, vence Atenas e Tebas em **Queroneia**. Em 337 a.C. forma a Liga de Corinto, que o reconhece como chefe de uma campanha contra a Pérsia. É assassinado em 336 a.C.' },
    { d: '336 – 323 a.C.', t: 'Alexandre Magno', x: 'O filho, **Alexandre III**, com 20 anos, derrota os persas no Granico (334), em Isso (333) e em **Gaugamela** (331), conquista o Egito, a Mesopotâmia e a Pérsia, e chega ao rio Indo. Morre na Babilónia em junho de 323 a.C., com 32 anos; a causa é debatida.' }
  ] },
  { img: 'gre-mosaico-alexandre', leg: 'Mosaico de Alexandre, de Pompeia, c. 100 a.C., cópia romana de uma pintura grega do fim do século IV a.C. (a batalha de Isso ou de Gaugamela). Museu Arqueológico Nacional, Nápoles.' },
  { linha: [
    { d: '323 – 281 a.C.', t: 'Os Diádocos e os reinos helenísticos', x: 'Os generais de Alexandre (os **Diádocos**, «sucessores») dividem o império: os **Ptolemeus** no Egito, os **Selêucidas** na Ásia, os **Antigónidas** na Macedónia. Mais tarde surge o reino de **Pérgamo** (dos Atálidas). Alexandria torna-se a capital da ciência e do comércio; o Farol de Faros e o Colosso de Rodes, ambos do início do século III a.C., são contados entre as sete maravilhas.' },
    { d: '168 – 146 a.C.', t: 'Roma conquista a Grécia', x: 'Roma vence o rei da Macédia em **Pidna** (168 a.C.). Em 146 a.C., depois de uma revolta da Liga Aqueia, o cônsul **Múmio** destrói **Corinto**, e a Grécia passa a ser administrada por Roma. Em 86 a.C. Sila saqueia Atenas.' },
    { d: '31 – 30 a.C.', t: 'Actium e o fim do mundo helenístico', x: 'Octávio vence António e Cleópatra VII na batalha naval de **Actium** (31 a.C.). No ano seguinte, Alexandria cai e Cleópatra morre: termina o último reino helenístico, o dos Ptolemeus, e todo o Mediterrâneo grego fica no Império Romano. A cultura grega continuará viva, em grego, em Roma e depois em Bizâncio.' }
  ] }
];

const mapa = [
  'O mundo grego não tinha capital. Eis as cidades e os lugares que mais pesam na história, e o que ainda se vê neles.',
  { tabela: { cab: ['Lugar', 'Região', 'Porque importa'], linhas: [
    ['Cnossos', 'Creta', 'Maior palácio minoico; centro da civilização minoica e depois micénica'],
    ['Micenas', 'Argólida (Peloponeso)', 'Capital dos micénicos; Porta dos Leões e túmulos reais'],
    ['Atenas', 'Ática', 'Democracia, Acrópole, filosofia e teatro; potência naval do século V a.C.'],
    ['Esparta', 'Lacónia (Peloponeso)', 'Cidade-quartel; potência terrestre e rival de Atenas'],
    ['Tebas', 'Beócia', 'Potência militar com Epaminondas; destruída por Alexandre em 335 a.C.'],
    ['Corinto', 'Istmo de Corinto', 'Cidade comerciante e mãe de colónias; destruída por Roma em 146 a.C.'],
    ['Delfos', 'Fócida', 'Santuário e oráculo de Apolo, o «umbigo do mundo»'],
    ['Olímpia', 'Élida (Peloponeso)', 'Santuário de Zeus e sede dos Jogos Olímpicos'],
    ['Mileto e Éfeso', 'Jónia (Ásia Menor)', 'Berço da filosofia (Tales) e centros comerciais'],
    ['Siracusa', 'Sicília', 'Maior colónia grega; pátria de Arquimedes'],
    ['Alexandria', 'Egito', 'Capital dos Ptolemeus, com a Biblioteca, o Museu e o Farol'],
    ['Pérgamo', 'Ásia Menor', 'Capital dos Atálidas; biblioteca e Grande Altar'],
    ['Rodes', 'Dodecaneso', 'Potência marítima helenística; Colosso de Rodes']
  ] } },
  { img: 'gre-mapa-colonizacao', leg: 'Mapa da colonização grega entre os séculos VIII e VI a.C., do mar Negro a Marselha.' },
  { h: 'Cnossos, o palácio dos minoicos' },
  '**Cnossos**, na costa norte de Creta, perto da atual Heraclião, é o maior dos palácios minoicos: um conjunto de salas, pátios, corredores, armazéns e oficinas, construído em torno de um pátio central. As paredes tinham frescos de touros, golfinhos e procissões. As primeiras versões datam de c. 1900 a.C.; o palácio foi destruído e reconstruído mais de uma vez. O arqueólogo britânico **Arthur Evans** escavou-o a partir de 1900 e reconstruiu parte dele em betão, com cores e escolhas hoje muito discutidas.',
  'A associação com o **Labirinto** do mito (o rei Minos, o Minotauro, Teseu e Ariadne) é antiga entre os gregos, mas é uma lenda. A palavra «labirinto» pode vir de *labrys*, o machado de dois gumes, símbolo que aparece em Cnossos. Não se sabe como os minoicos chamavam ao seu próprio palácio nem a si mesmos: «minoico» é um nome moderno, inventado por Evans a partir de Minos.',
  { img: 'gre-cnossos-reconstrucao', leg: 'Reconstrução artística do palácio de Cnossos, em Creta, c. 1500 a.C., com pórticos de colunas vermelhas, frescos e o pátio central; pormenores de cores e andares são hipotéticos. Ilustração gerada por IA.' },
  { h: 'Micenas e os palácios do continente' },
  '**Micenas**, na Argólida, foi um reino rico, rodeado por uma muralha de grandes blocos de pedra (os gregos pensavam que só gigantes, os «ciclopes», as poderiam ter erguido). A entrada principal, a **Porta dos Leões**, com um relevo de duas leoas (ou leões) à volta de uma coluna, é de c. 1250 a.C. Fora da muralha ficam os grandes túmulos em forma de colmeia (*tholoi*), como o chamado «Tesouro de Atreu». Os túmulos reais, de c. 1600 a.C., foram escavados por **Heinrich Schliemann** em 1876, que acreditou ter encontrado o rei Agamémnon; a máscara de ouro que lhe deu o nome é na verdade três a quatro séculos mais antiga do que o tempo em que se supõe ter ocorrido a guerra de Troia.',
  'Outros palácios micénicos como **Tirinto** (com muros ciclópicos), **Pilos** (onde se encontraram arquivos em Linear B) e **Tebas** tinham a mesma organização: um *wanax* (rei) no centro e uma burocracia que anotava tudo, de ovelhas a vasos e rações de trabalhadores. A chamada «Troia de Homero» ficava na costa noroeste da Turquia, em Hisarlık, e foi escavada por Schliemann e depois por outros; tem muitas camadas, e qual delas é a «de Homero», se alguma, continua a ser discutido.',
  { img: 'gre-micenas-porta-leoes', leg: 'A Porta dos Leões, Micenas, Grécia, c. 1250 a.C.' },
  { h: 'Atenas' },
  '**Atenas** ergue-se à volta da **Acrópole**, uma rocha que se eleva a uns 150 metros acima do nível do mar, com um santuário desde a Idade do Bronze. Abaixo ficava a **Ágora**, a praça pública onde se fazia o comércio, a política e a justiça, com o Tribunal, o Conselho, os pórticos e os templos. A **Pnyx**, uma colina a oeste, acolhia a Assembleia. O porto do **Pireu**, ligado à cidade pelos «Muros Longos», tornou-a uma potência naval. Na Acrópole, depois de os persas a destruírem em 480 a.C., Péricles reergueu os templos: o **Parténon** (447–432 a.C.), os **Propileus**, o templo de **Atena Nice** e o **Erecteion**.',
  { img: 'gre-atenas-agora', leg: 'Reconstrução artística da Ágora de Atenas no século IV a.C., com a Stoa, o Tholos, o Templo de Hefesto no alto e a Acrópole ao fundo; pormenores e cores são hipotéticos. Ilustração gerada por IA.' },
  { h: 'Esparta' },
  '**Esparta** (ou Lacedemónia) não tinha muralhas nem grandes monumentos e estava dividida em aldeias no vale do Eurotas, ao sul do Peloponeso. A cidade ficou conhecida pela sua disciplina militar e pelo domínio dos **hilotas**, a população local reduzida à servidão. O que resta hoje da antiga Esparta é pouco, e por isso Tucídides escreveu que um futuro visitante não imaginaria o seu poder; a Esparta moderna cresceu ao lado.',
  { h: 'Tebas e Corinto' },
  '**Tebas**, na Beócia, é uma cidade mítica (Édipo, Antígona, Penteu) e foi, por uma geração, a primeira potência grega, com o seu «Batalhão Sagrado». **Corinto**, no istmo que liga o Peloponeso ao continente, tinha dois portos, no golfo de Corinto e no golfo Sarónico, e vivia do comércio e da cerâmica. Foi uma importante fundadora de colónias (Siracusa, Corcira) e foi arrasada por Múmio em 146 a.C.; Júlio César refundou-a como colónia romana.',
  { h: 'Delfos, Olímpia e os santuários' },
  'Os gregos não tinham um centro político, mas tinham centros sagrados que todos respeitavam. **Delfos**, no monte Parnaso, era o oráculo de **Apolo**, onde uma sacerdotisa, a **Pítia**, respondia a perguntas de cidades e indivíduos; a cidade que consultava o oráculo antes de fundar uma colónia, ou antes de uma guerra, juntava aos pedidos ricas oferendas, e Delfos acumulou tesouros enormes. **Olímpia**, no Peloponeso ocidental, acolhia o templo de **Zeus**, com a estátua gigante de ouro e marfim de Fídias, uma das sete maravilhas, e o estádio dos Jogos. Em **Epidauro**, o santuário de **Asclépio**, deus da medicina, tinha um teatro com cerca de 14 mil lugares e uma acústica famosa. **Delos**, ilha sagrada de Apolo, foi a sede do tesouro da Liga de Delos.',
  { img: 'gre-delfos-tholos', leg: 'O Tholos de Delfos, no santuário de Atena Pronaia, Grécia, c. 380 a.C.' },
  { img: 'gre-olimpia-jogos', leg: 'Reconstrução artística do estádio de Olímpia durante os Jogos, século IV a.C., com os atletas, os juízes e o templo de Zeus ao fundo; detalhes hipotéticos. Ilustração gerada por IA.' },
  { img: 'gre-epidauro-teatro', leg: 'O teatro de Epidauro, c. 340 a.C., Peloponeso, Grécia.' },
  { h: 'Alexandria, Pérgamo e Rodes' },
  '**Alexandria**, no delta do Nilo, foi fundada por Alexandre em 331 a.C. e tornou-se a capital dos Ptolemeus e a maior cidade do mundo helenístico. O **Museu** (um instituto de investigação) e a **Biblioteca** reuniam sábios de todo o Mediterrâneo; o **Farol de Faros**, c. 280 a.C., com mais de cem metros (as estimativas variam), guiava os navios; e a cidade era uma mistura de gregos, egípcios, judeus e outros. **Pérgamo**, na Ásia Menor, com os reis atálidas, tinha uma grande biblioteca e o **Grande Altar de Zeus**, hoje em Berlim. **Rodes** teve uma grande frota e foi cenário de um cerco em 305–304 a.C.; o Colosso de Rodes, uma estátua do deus Hélio de c. 30 metros, foi derrubado por um sismo cerca de 226 a.C.',
  { img: 'gre-alexandria-farol', leg: 'Reconstrução artística do porto de Alexandria no século III a.C., com o Farol de Faros e os edifícios do bairro real; as proporções do farol são hipotéticas. Ilustração gerada por IA.' },
  { h: 'As rotas' },
  'Os gregos viajavam de ilha em ilha, pelo mar, e raramente perdiam a terra de vista. As rotas principais eram a do **Egeu**, entre a Grécia e a Ásia Menor; a do **mar Negro**, de onde vinham cereais, peixe salgado, madeira e escravos, via o Bósforo e o Helesponto (ambos controlados por Bizâncio); a de **Itália e Sicília**, para o ocidente; e a do **Egito e do Levante**, para o sul e o oriente, pela qual chegavam o papiro, o trigo, o marfim e as especiarias. Em terra, a Via Real persa e, mais tarde, as estradas dos reinos helenísticos ligavam a Grécia à Mesopotâmia e à Bactriana.'
];

const sociedade = [
  { h: '1. Organização política' },
  'A unidade política da Grécia clássica era a **pólis** (pl. *póleis*), uma cidade com o seu território, as suas leis e o seu exército de cidadãos. Havia centenas, quase todas pequenas (a maioria com menos de 5 mil cidadãos). Atenas era uma exceção, com cerca de 30 a 40 mil cidadãos adultos do sexo masculino, segundo estimativas debatidas. Os gregos experimentaram quase todos os regimes: **monarquia**, **aristocracia** (governo dos «melhores»), **oligarquia** (de poucos), **tirania** (poder pessoal conquistado) e **democracia** («poder do povo»).',
  { tabela: { cab: ['', 'Atenas', 'Esparta'], linhas: [
    ['Regime', 'Democracia direta; assembleia de todos os cidadãos', 'Diarquia (dois reis) e governo misto'],
    ['Instituições', 'Assembleia (*Ekklesia*), Conselho de 500 (*Boulé*), tribunais populares, dez estrategos', 'Dois reis, 28 anciãos (*Gerousia*), cinco éforos, assembleia (*Apela*)'],
    ['Escolha dos cargos', 'Muitos por sorteio; os generais por eleição', 'Éforos eleitos, reis por herança'],
    ['Educação', 'Privada; ginásio e escolas', 'Pública e militar (a *agogé*)'],
    ['Economia', 'Comércio, mar, minas de prata do Láurio', 'Terras trabalhadas por hilotas'],
    ['Exército', 'Frota (trirremes) e hoplitas', 'Hoplitas profissionais (os «Espartíatas»)']
  ] } },
  'Em **Atenas**, todos os cidadãos podiam falar e votar na **Assembleia**, que se reunia umas quarenta vezes por ano na colina da Pnyx. O **Conselho** de 500, sorteado entre os cidadãos, preparava as decisões; os **tribunais populares** tinham júris de centenas de cidadãos escolhidos à sorte. Quase todos os cargos eram sorteados, com exceção dos **estrategos** (generais), eleitos. Quando a Assembleia achava que um homem era perigoso para a cidade, podia votar o **ostracismo**: escreviam-se nomes em cacos de cerâmica (*ostraka*), e quem tivesse a maioria (e pelo menos 6 mil votos, segundo a tradição) partia por dez anos.',
  { img: 'gre-assembleia-pnyx', leg: 'Cena imaginada de uma reunião da Assembleia ateniense na colina da Pnyx, século V a.C., com a Acrópole ao fundo; ilustração gerada por IA.' },
  { img: 'gre-kleroterion', leg: 'Fragmento de um *kleroterion*, a máquina de sorteio dos cidadãos para júris e cargos. Museu da Ágora Antiga, Atenas.' },
  'Em **Esparta**, o poder estava repartido por dois reis de duas famílias, um conselho de anciãos (a *Gerousia*, com 28 homens com mais de 60 anos mais os reis), cinco **éforos** eleitos todos os anos e uma assembleia que aprovava ou rejeitava propostas. A tradição atribuía a organização a um legislador, **Licurgo**, que pode ser lendário. A cidadania plena estava reservada aos **Espartíatas**, homens que passavam por toda a *agogé*, o sistema de educação militar iniciado aos sete anos, e que tinham de pagar a sua parte nas refeições comuns.',
  { h: '2. Classes sociais' },
  { lista: [
    '**Cidadãos:** em Atenas, homens livres com pai (e, desde 451 a.C., também mãe) atenienses. Só eles votavam, ocupavam cargos e possuíam terras.',
    '**Mulheres:** as mulheres atenienses eram cidadãs no sentido de pertencerem à comunidade religiosa, mas não votavam nem tinham propriedades próprias; estavam sempre sob a autoridade de um homem (o *kyrios*: pai, marido ou familiar). Participavam em festas e cultos, e algumas sacerdotisas tinham grande prestígio. Em Esparta tinham mais liberdade: educação física, direito de herdar e gerir terras.',
    '**Metecos:** estrangeiros livres residentes em Atenas, que pagavam um imposto especial, serviam no exército mas não tinham direitos políticos nem podiam possuir terras. Havia nesta classe grandes comerciantes, banqueiros, filósofos e artistas.',
    '**Escravos:** na Atenas clássica, talvez um quarto a um terço da população (as estimativas são muito incertas). Trabalhavam em casas, oficinas, nas minas de prata do Láurio (as piores condições) e como polícias do Estado. Podiam ser comprados, vendidos e libertados. Os **hilotas** de Esparta eram, em vez de escravos individuais, uma população subjugada que trabalhava a terra para os Espartíatas e se revoltava de vez em quando.',
    '**Periecos:** em Esparta, homens livres das cidades vizinhas que faziam o comércio e a artesania, sem direitos políticos mas com autonomia local.'
  ] },
  { h: '3. Religião' },
  'Os gregos eram **politeístas**. Os deuses do panteão olímpico, os **Doze Olímpicos**, viviam, segundo a tradição, no monte Olimpo e tinham aspeto, sentimentos e vícios humanos, mas eram imortais e poderosos. Cada cidade tinha um deus protetor: Atena em Atenas, Hera em Argos, Apolo em Delfos. A religião era feita de **rituais** (procissões, sacrifícios de animais seguidos de banquete, oferendas) mais do que de crenças e dogmas, e não havia clero organizado nem livro sagrado: os «textos» eram os poemas de Homero e de Hesíodo.',
  { tabela: { cab: ['Deus', 'Domínio', 'Notas'], linhas: [
    ['Zeus', 'Rei dos deuses, céu, trovão, justiça', 'Santuário em Olímpia; pai de muitos deuses e heróis'],
    ['Hera', 'Casamento e família', 'Esposa de Zeus; santuário principal em Argos e em Samos'],
    ['Posídon', 'Mar, sismos, cavalos', 'Rival de Atena em Atenas, segundo o mito'],
    ['Deméter', 'Cereais e agricultura', 'Mistérios de Elêusis, com a filha Perséfone'],
    ['Atena', 'Sabedoria, guerra estratégica, artesanato', 'Protetora de Atenas; Parténon'],
    ['Apolo', 'Luz, música, profecia, cura', 'Oráculo de Delfos'],
    ['Ártemis', 'Caça, natureza, Lua', 'Irmã gémea de Apolo; santuário em Éfeso'],
    ['Ares', 'Guerra', 'Menos venerado do que Atena'],
    ['Afrodite', 'Amor e beleza', 'Nasceu, segundo Hesíodo, da espuma do mar'],
    ['Hefesto', 'Fogo, forja', 'Deus dos artesãos; templo sobre a Ágora de Atenas'],
    ['Hermes', 'Mensageiro, comércio, viajantes', 'Guia dos mortos para o Hades'],
    ['Héstia (ou Dioniso)', 'Lareira (ou vinho, teatro)', 'Dioniso é o deus das festas em que nasceu o teatro']
  ] } },
  'Os gregos acreditavam que após a morte a alma (*psyché*) descia ao **Hades**, um reino sombrio de sombras; só alguns heróis iam para os Campos Elísios. Os **mistérios**, como os de Elêusis, celebrados perto de Atenas em honra de Deméter e Perséfone, prometiam aos iniciados uma sorte melhor depois da morte, e o que se fazia lá era secreto, tão secreto que ainda hoje só o conhecemos em parte.',
  { h: 'Os oráculos e Delfos' },
  'Antes de decisões importantes, os gregos consultavam **oráculos**. O mais famoso era o de **Delfos**: a Pítia, sentada num tripé no interior do templo de Apolo, respondia (por vezes de forma ambígua) a perguntas, e os sacerdotes transmitiam as respostas, frequentemente em verso. Segundo Heródoto, o rei Creso da Lídia perguntou se devia atacar a Pérsia e ouviu que, se o fizesse, «destruiria um grande império»; destruiu o seu. Sobre as inscrições à entrada do templo, a mais citada é a máxima «**Conhece-te a ti mesmo**», referida pelos autores antigos como estando no santuário.',
  { cit: 'Estrangeiro, vai dizer aos lacedemónios que aqui jazemos, obedientes às suas leis.', fonte: 'Epitáfio dos espartanos mortos nas Termópilas, atribuído ao poeta Simónides e citado por Heródoto (7.228); tradução livre' },
  { img: 'gre-pitia-delfos', leg: 'Cena imaginada da Pítia a dar uma resposta no templo de Apolo, em Delfos, c. 450 a.C.; pormenores do ritual e do espaço são hipotéticos. Ilustração gerada por IA.' },
  { h: 'Os Jogos Olímpicos' },
  'Os **Jogos Olímpicos** realizavam-se em **Olímpia**, de quatro em quatro anos, em honra de Zeus, com data tradicional de início em 776 a.C. Durante os Jogos havia uma **trégua sagrada** (*ekecheiria*) para os viajantes e os atletas atravessarem as fronteiras em segurança. Competiam homens livres que falassem grego, nus, e as provas incluíam a corrida do **estádio** (c. 192 m), o pentatlo, a luta, o pugilato, o *pankration* (uma mistura de luta e pugilato, com poucas regras) e as corridas de cavalos e de carros. O prémio era uma coroa de oliveira selvagem; o prestígio, enorme. As mulheres casadas não podiam assistir; havia outros jogos para raparigas, em honra de Hera. A tradição diz que os Jogos acabaram com o imperador Teodósio, em 393 d.C., mas a data é discutida.',
  { h: '4. Mitos, lendas e factos' },
  { caixa: 'O que é lenda e o que é facto', texto: [
    '**Os 300 de Esparta.** O número de 300 é histórico, mas só diz respeito aos espartiatas. Nas Termópilas estavam cerca de 7 mil gregos; a maioria retirou-se no último dia, e ficaram os 300 espartanos, cerca de 700 tespianos e cerca de 400 tebanos (os últimos, segundo Heródoto, de forma não completamente voluntária).',
    '**A corrida de Maratona.** Heródoto fala de um corredor, Fidípides, que correu de Atenas a Esparta (c. 240 km) para pedir ajuda antes da batalha. A história do soldado que correu de Maratona a Atenas e morreu ao dar a notícia é bastante posterior (Plutarco e Luciano) e é provavelmente lenda.',
    '**Os bebés espartanos.** Plutarco escreve que os bebés fracos eram lançados de um precipício, mas uma análise dos ossos encontrados no local, feita em 2007, só achou restos de adolescentes e adultos. Não se sabe se a prática existiu.',
    '**O Cavalo de Troia.** Não está na Ilíada, mas na Odisseia e noutros poemas; a arqueologia não confirma nada. A guerra de Troia pode ter tido por base conflitos reais, mas o episódio é lenda.',
    '**As estátuas brancas.** O mármore branco que vemos hoje tinha originalmente cores vivas (*policromia*): restos de pigmentos encontrados em muitas esculturas mostram figuras pintadas.',
    '**A democracia «para todos».** Não: em Atenas, as mulheres, os escravos, os metecos e os homens com menos de 18 anos não votavam, e só uma pequena parte da população (talvez 10 a 20%, em estimativas debatidas) tinha direitos políticos.',
    '**A Biblioteca de Alexandria.** Não foi destruída num único incêndio. Houve vários desastres (um fogo em 48 a.C., durante a guerra de César, e conflitos mais tarde) e um longo declínio do apoio régio; a data e as causas do fim são debatidas.',
    '**«Só sei que nada sei».** A frase é uma simplificação de Platão (*Apologia*, 21d), em que Sócrates diz que não julga saber o que não sabe.'
  ] },
  { h: '5. Economia' },
  'A base era a **agricultura**: cereais (cevada e trigo), **oliveira** (azeite, para comer, para iluminar e para o corpo) e **vinha** (vinho), a «trilogia mediterrânica». A terra era pobre e muitas cidades dependiam de **trigo importado** do mar Negro, da Sicília e do Egito. O comércio marítimo exportava vinho, azeite e cerâmica, e importava cereais, metais, madeira, escravos e produtos de luxo. As **minas de prata do Láurio**, na Ática, deram a Atenas a riqueza para construir a frota de Salamina. As cidades cunhavam **moeda** própria desde o século VII a.C. (a invenção da moeda é da Lídia); a mais conhecida é o **tetradracma ateniense**, a «coruja», com Atena num lado e a coruja no outro. A moeda foi aceite em todo o Mediterrâneo durante séculos. Havia cambistas e banqueiros (*trapezitai*) e empréstimos marítimos, em que um comerciante só pagava se o navio chegasse.',
  { img: 'gre-moeda-coruja', leg: 'Tetradracma de prata de Atenas, a «coruja», com Atena de um lado e a coruja do outro, século V a.C.' },
  { h: '6. Escrita, literatura e história' },
  'Os gregos usavam o **alfabeto**, derivado do fenício c. 800 a.C., com letras para as vogais e as consoantes, o que o tornou fácil de aprender (comparado com os sistemas anteriores). Daí vieram o alfabeto etrusco e latino, e mais tarde o cirílico. Antes dele, os micénicos usaram o **Linear B**, uma escrita silábica só para contabilidade. Escrevia-se em papiro, em pergaminho (inventado em Pérgamo, segundo a tradição, a que deve o nome) e em tabuinhas de cera. As obras eram copiadas à mão e recitadas em público.',
  'A literatura grega começou com a **epopeia** (Homero, Hesíodo), seguiu-se a **poesia lírica** (Safo, Álcman, Píndaro) e depois o **teatro**, a **história** e a **oratória** (Demóstenes). **Heródoto** (c. 484 – c. 425 a.C.), o «pai da história», escreveu as *Histórias*, sobre as guerras entre gregos e persas, com muitas narrativas e curiosidades pelo meio; **Tucídides** (c. 460 – c. 400 a.C.) contou a Guerra do Peloponeso com um método mais rigoroso, baseado em testemunhos que ele próprio verificava.',
  { h: '7. Teatro' },
  'O **teatro** nasceu em Atenas, nas festas de **Dioniso** (as Grandes Dionísias), a partir de cantos de um coro. No século V a.C. havia concursos de **tragédia** (as peças de **Ésquilo**, **Sófocles** e **Eurípides**, com temas de mitos, destino e justiça) e de **comédia** (**Aristófanes**, com sátira política). Os atores eram só homens, usavam máscaras e interpretavam vários papéis. O espetáculo era financiado por cidadãos ricos (a *coregia*) e assistido por milhares de pessoas, ao ar livre, em teatros escavados nas encostas, com excelente acústica.',
  { img: 'gre-teatro-representacao', leg: 'Cena imaginada de uma representação de tragédia no Teatro de Dioniso, em Atenas, século V a.C., com o coro, os atores mascarados e o público; pormenores do cenário são hipotéticos. Ilustração gerada por IA.' },
  { h: '8. Filosofia' },
  'A palavra «filosofia» quer dizer «amor da sabedoria». Os primeiros filósofos, da Jónia (**Tales de Mileto**, **Anaximandro**, **Anaxímenes**), procuraram explicações naturais para o mundo sem recorrer aos deuses. **Pitágoras** e os pitagóricos juntaram a matemática a ideias sobre a alma; **Heráclito** falou do devir e **Parménides** do ser. Em Atenas, os **sofistas** ensinavam a retórica por dinheiro. **Sócrates** (c. 470 – 399 a.C.) pôs a pergunta ética («como devemos viver?») no centro, perguntando e refutando sem escrever nada; **Platão** (c. 428 – 348 a.C.) fundou a **Academia** e escreveu diálogos sobre a justiça, o amor, o conhecimento e a política; **Aristóteles** (384 – 322 a.C.), seu aluno, fundou o **Liceu** e estudou lógica, biologia, física, ética, política e retórica. Depois vieram o **estoicismo** (Zenão), o **epicurismo** (Epicuro) e o **ceticismo**, que dominaram o mundo helenístico e romano.',
  { h: '9. Matemática, ciência e medicina' },
  'Os gregos transformaram a matemática numa ciência de **demonstrações**: não bastava verificar que algo funciona, era preciso provar porquê. **Tales** terá previsto um eclipse (c. 585 a.C.) e medido a altura das pirâmides pela sombra, segundo tradições posteriores. **Pitágoras** (c. 570 – c. 495 a.C.) e a sua escola estudaram os números e as proporções musicais; o teorema que tem o seu nome já era conhecido na Babilónia, e os pitagóricos terão contribuído para a sua demonstração, embora o papel de Pitágoras em si seja incerto. **Euclides** (c. 300 a.C., Alexandria) escreveu os **Elementos**, o manual de geometria mais influente da história, usado durante mais de dois mil anos. **Arquimedes** (c. 287 – 212 a.C.) calculou áreas, volumes e uma aproximação de π, e estudou alavancas e flutuação. **Eratóstenes** (c. 276 – 194 a.C.) mediu a circunferência da Terra com uma boa aproximação, usando a sombra em duas cidades do Egito; **Aristarco de Samos** propôs, c. 270 a.C., que a Terra gira em torno do Sol, mas a ideia não vingou; **Hiparco** (século II a.C.) fez um catálogo de estrelas e estudou a precessão.',
  { img: 'gre-papiro-euclides', leg: 'Fragmento de papiro de Oxirrinco com um diagrama dos *Elementos* de Euclides, c. 100 d.C. Universidade da Pensilvânia.' },
  'Na **medicina**, **Hipócrates de Cós** (c. 460 – c. 370 a.C.) e a sua escola defenderam que as doenças tinham causas naturais e não divinas, e que o médico devia observar o doente e registar a evolução. O conjunto de escritos que lhe é atribuído (o *Corpus Hipocrático*) foi escrito por vários autores. Em Alexandria, **Herófilo** e **Erasístrato** fizeram dissecações humanas, uma raridade na Antiguidade.',
  { img: 'gre-antikythera', leg: 'Fragmento principal do Mecanismo de Anticítera, c. século II a.C. – I a.C. Museu Arqueológico Nacional, Atenas.' },
  'O **Mecanismo de Anticítera**, encontrado em 1901 num naufrágio perto da ilha de Anticítera, é um aparelho de engrenagens de bronze que modelava o movimento do Sol e da Lua e prevenia eclipses. É a máquina mais complexa que conhecemos da Antiguidade; quem a fez e para quem continua a ser debatido.',
  { h: '10. Arte e arquitetura' },
  'A arquitetura grega assenta em três **ordens**: a **dórica** (colunas robustas, sem base, capitel simples; o Parténon), a **jónica** (colunas mais esbeltas, com volutas no capitel; o Erecteion) e a **coríntia** (capitel com folhas de acanto; muito usada em Roma e no helenismo). Os templos eram de pedra ou mármore, com colunas à volta de uma sala (*naos*) onde ficava a estátua do deus. O culto fazia-se no altar, fora do templo, ao ar livre. Os gregos corrigiam a vista com pequenas curvas no edifício (por exemplo, o piso do Parténon sobe suavemente ao centro): são os «refinamentos óticos».',
  { img: 'gre-ordens-arquitetura', leg: 'Esquema das três ordens da arquitetura grega: dórica, jónica e coríntia. (Imagem ilustrativa gerada por IA.)' },
  'Na **escultura**, passou-se das estátuas rígidas do período arcaico (os *kouroi*, jovens nus, e as *korai*, raparigas vestidas) para o realismo e o movimento do período clássico: **Policleto** definiu proporções ideais do corpo, **Fídias** fez as esculturas do Parténon e a estátua de Zeus em Olímpia, **Praxíteles** foi o primeiro a esculpir Afrodite nua em tamanho natural. No helenismo, a escultura ganhou mais emoção e drama (a *Vitória de Samotrácia*, o *Laocoonte*). A **cerâmica** pintada, de figuras negras e depois vermelhas, fornece-nos cenas de mitos e do quotidiano, e é uma das fontes mais ricas sobre a vida grega.',
  { h: '11. Casa e família' },
  'A **casa** (*oikos*), mais do que um edifício, era a unidade familiar e económica, com os pais, filhos, escravos e bens. As casas atenienses eram em geral de tijolo de adobe sobre alicerces de pedra, com poucas janelas para a rua e um **pátio** interior. Havia um espaço para os homens receberem convidados (*andron*) e outros espaços usados pelas mulheres. A divisão rígida entre «quarto das mulheres» (*gynaikonitis*) e o resto da casa, de que se fala muito, é discutida pelos arqueólogos: não se vê com clareza nas casas escavadas. O casamento era combinado entre as famílias; as raparigas casavam por volta dos 14 a 18 anos, com maridos mais velhos. O pai tinha o direito de decidir se aceitava o bebé na família.',
  { img: 'gre-casa-grega', leg: 'Vista em corte de uma casa ateniense do século IV a.C., com pátio, altar doméstico, sala dos homens e cozinha; reconstrução artística, com pormenores hipotéticos. Ilustração gerada por IA.' },
  { h: '12. Alimentação' },
  'A alimentação básica era **pão e papas de cevada** (*maza*), com azeitonas, queijo, figos, hortaliças, leguminosas e peixe, que se comia com mais frequência do que a carne. A **carne** (cabrito, porco, carneiro) só se comia nos sacrifícios e nas festas. O **vinho**, sempre misturado com água (beber vinho puro era considerado de bárbaros), acompanhava todas as refeições; o **mel** era o adoçante. O peixe seco ou salgado e o queijo de cabra eram correntes.',
  { h: '13. Vestuário' },
  'A roupa grega era simples, feita de peças de tecido de lã ou linho enroladas e presas ao corpo. Os homens usavam o **quíton** (túnica) e, por cima, o **himátion** (um manto); os viajantes e os soldados usavam a **clâmide**, mais curta. As mulheres usavam o **peplos** (de lã, preso nos ombros com fíbulas) ou o **quíton** jónico de linho, com cinto, e o himátion. Usavam-se sandálias, ou andava-se descalço. As mulheres usavam o cabelo longo, preso, e joias de ouro; os homens cabelo curto e, na época helenística, passaram a barbear-se, por influência de Alexandre.',
  { h: '14. O simpósio, o ginásio, a música e os jogos' },
  'O **simpósio** («beber juntos») era um banquete só para homens: depois da refeição, os convidados reclinados em divãs bebiam vinho misturado com água, ouviam música, recitavam poesia, discutiam política e filosofia e jogavam, por exemplo, o *kottabos* (atirar o vinho que sobrava na taça a um alvo). Podiam participar tocadoras de flauta e **heteras**, mulheres cultas e livres, de estatuto diferente das esposas. Platão e Xenofonte escreveram diálogos chamados *Banquete* ou *Simpósio*.',
  { img: 'gre-simposio-vaso', leg: 'Cena de simpósio numa taça ática de figuras vermelhas, c. 480 a.C.' },
  'O **ginásio** («lugar de nu») era o espaço público de treino físico dos rapazes e dos homens, com pistas, sala de luta e balneários; tornou-se também um lugar de ensino e de conversa: a Academia de Platão e o Liceu de Aristóteles eram ginásios. A ideia de um corpo saudável, uma mente educada e uma comunidade unida estava na base da educação grega (*paideia*).',
  { img: 'gre-ginasio', leg: 'Cena imaginada de um ginásio grego do século IV a.C., com atletas a treinar, mestres a ensinar e o pátio com colunas; pormenores são hipotéticos. Ilustração gerada por IA.' },
  'Na **música**, os instrumentos principais eram a **lira** e a **cítara** (de cordas) e o **aulos** (de sopro, com duas palhetas), em acompanhamentos de poesia, de procissões e do teatro. A música grega ficou escrita só em poucos fragmentos, e só em parte sabemos reconstruí-los. As crianças brincavam com bonecas, piões, arcos e ossinhos (*astragaloi*, usados como dados), e os adultos jogavam jogos de tabuleiro e dados.',
  { h: '15. Guerra' },
  'A guerra era uma realidade constante entre as cidades. A base do exército clássico era o **hoplita**, cidadão com meios para comprar o seu equipamento: um grande escudo redondo de madeira revestido de bronze (*hoplon* ou *aspis*), couraça, elmo, caneleiras (*cnémides*), uma lança de cerca de 2 a 2,5 m e uma espada curta; o conjunto pesava, segundo estimativas, cerca de 20 a 30 kg. Combatiam em **falange**, em fileiras cerradas de oito ou mais homens de profundidade, com os escudos sobrepostos: a força estava na coesão, mais do que na habilidade individual.',
  { img: 'gre-hoplita-capacete', leg: 'Elmo coríntio de bronze, época arcaica, com o capacete que cobria quase toda a cara.' },
  { img: 'gre-falange', leg: 'Cena imaginada de uma falange de hoplitas gregos em formação, c. 450 a.C., com escudos sobrepostos e lanças erguidas; equipamento representativo, não de uma batalha específica. Ilustração gerada por IA.' },
  'No mar, a arma era a **trirreme**, uma galera de uns 37 m de comprimento, com cerca de 170 remadores em três níveis e um esporão de bronze à proa para abalroar outros navios. Os remadores atenienses eram cidadãos pobres (os *thetes*), o que deu um peso político a esta classe. A **Olympias**, uma réplica construída na Grécia em 1987, mostrou nos testes que o navio era rápido e muito manobrável.',
  { img: 'gre-trirreme-olympias', leg: 'A trirreme Olympias, réplica moderna de uma trirreme ateniense (1987), Grécia.' },
  'Os macedónios de Filipe II e de Alexandre inovaram: a **falange macedónia**, com a **sarissa**, uma lança de uns 5 a 6 m, fixava o inimigo de frente, enquanto a cavalaria dos **Companheiros**, comandada pelo rei, atacava o flanco. No período helenístico apareceram máquinas de cerco (catapultas, torres, o «Tomador de Cidades» de Demétrio Poliorcetes) e elefantes de guerra, usados pelos selêucidas e pelos ptolemeus. Em 168 a.C., em Pidna, a legião romana, mais flexível, mostrou ser mais forte do que a falange.'
];

const personalidades = [
  'Alguns nomes, e muitas datas da época arcaica, assentam em tradições e não em documentos da época. Indica-se «c.» sempre que a data é aproximada.',
  { h: 'Homero (c. século VIII a.C.?)' },
  'Poeta a quem a tradição atribui a **Ilíada** (a cólera de Aquiles no décimo ano da guerra de Troia) e a **Odisseia** (o regresso de Ulisses a Ítaca). Os gregos acreditavam que era cego e natural da Jónia; os antigos já discutiam onde nasceu. Os estudiosos modernos debatem se foi uma só pessoa, se os poemas nasceram da tradição oral de muitos poetas e como se fixaram por escrito. Foi a base da educação grega.',
  { h: 'Sólon (c. 640 – c. 560 a.C.)' },
  'Poeta e arconte de Atenas c. 594 a.C., foi chamado a resolver uma crise social de dívidas e servidão. Perdoou dívidas, proibiu a escravatura por dívidas, dividiu os cidadãos por rendimento e abriu os tribunais ao povo. As leis foram em parte alteradas depois; as fontes sobre ele são mais tardias (Aristóteles e Plutarco), e alguns pormenores são incertos.',
  { h: 'Clístenes (c. 570 – c. 508 a.C.)' },
  'Aristocrata ateniense da família dos Alcmeónidas. Em 508/7 a.C. dividiu a Ática em dez tribos, cada uma com demos de três regiões (cidade, costa e interior), de forma a misturar famílias e interesses locais, e criou o Conselho de 500. É chamado o «pai da democracia ateniense».',
  { h: 'Leónidas I (c. 540 – 480 a.C.)' },
  'Rei de Esparta que comandou os gregos nas **Termópilas**. Sabendo que a posição ia ser contornada, manteve-se com os seus 300 espartanos e mais alguns milhares de gregos para atrasar o exército de Xerxes. Morreu, e o seu sacrifício ficou como símbolo de coragem. O corpo foi mutilado por ordem de Xerxes, segundo Heródoto. Existe uma estátua moderna dele em Esparta.',
  { h: 'Temístocles (c. 524 – c. 459 a.C.)' },
  'Político ateniense que convenceu a cidade a usar o dinheiro da prata do Láurio para construir uma frota de duzentas trirremes. Foi o grande arquiteto da vitória de **Salamina**. Mais tarde, ostracizado e acusado de colaborar com a Pérsia, fugiu e acabou a viver na corte persa, onde recebeu terras e cidades em Magnésia, na Ásia Menor.',
  { h: 'Péricles (c. 495 – 429 a.C.)' },
  'Estratego ateniense durante mais de duas décadas, orador de grande prestígio e protetor das artes. Ampliou a democracia (pagamento a juízes) e promoveu a construção do **Parténon** e de outros monumentos. Na Guerra do Peloponeso, optou por uma estratégia defensiva, que se revelou difícil quando a peste chegou à cidade apinhada de refugiados; morreu da peste em 429 a.C. Tucídides faz-lhe o elogio no célebre discurso fúnebre, de que só conhecemos a versão do historiador.',
  { h: 'Aspásia de Mileto (século V a.C.)' },
  'Natural de Mileto, vivia em Atenas e foi companheira de Péricles. Sendo estrangeira, não podia casar com um cidadão segundo a lei de 451 a.C. Era conhecida pela inteligência e pela conversa, e Platão e Plutarco falam de um salão de debates; as fontes são em parte caricaturas de comediantes, e o papel exato que teve é debatido. O filho que teve com Péricles, Péricles, o Jovem, foi feito cidadão ateniense por voto especial.',
  { h: 'Sócrates (c. 470 – 399 a.C.)' },
  'Filho de um escultor e de uma parteira, soldado em campanhas da Guerra do Peloponeso, passava os dias na Ágora a interrogar os atenienses sobre o que é a justiça, a coragem ou a virtude, mostrando que não tinham resposta clara. Não escreveu nada: conhecemo-lo pelos diálogos de Platão, pelas *Memoráveis* de Xenofonte e pela sátira de Aristófanes. Em 399 a.C. foi condenado por um júri de 501 cidadãos e bebeu cicuta, recusando fugir.',
  { img: 'gre-socrates-busto', leg: 'Busto de Sócrates, cópia romana de um original grego do século IV a.C.' },
  { h: 'Platão (c. 428 – 348 a.C.)' },
  'Aluno de Sócrates, fundou a **Academia** em Atenas (c. 387 a.C.), a primeira escola de ensino superior da tradição ocidental. Escreveu diálogos como a *República*, o *Banquete*, o *Fédon* e o *Fedro*, onde apresenta a teoria das **Formas** (ideias perfeitas de que o mundo visível é cópia), a imortalidade da alma e uma cidade ideal governada por filósofos. Viajou até Siracusa, onde tentou, sem êxito, educar um tirano.',
  { img: 'gre-platao-busto', leg: 'Busto de Platão, cópia romana de um original grego do século IV a.C.' },
  { h: 'Aristóteles (384 – 322 a.C.)' },
  'Nascido em Estagira, na Calcídica, foi aluno de Platão durante vinte anos, preceptor do jovem Alexandre na Macedónia e fundador do **Liceu** (c. 335 a.C.). Escreveu sobre lógica, física, biologia (estudou centenas de espécies), ética, política, poética e retórica. Muitos dos seus escritos que chegaram até nós são provavelmente notas de aulas. As suas ideias dominaram a ciência e a filosofia na Idade Média, no mundo islâmico e na Europa cristã, até ao século XVII.',
  { img: 'gre-aristoteles-busto', leg: 'Busto de Aristóteles, cópia romana de um original grego de c. 330 a.C.' },
  { h: 'Epaminondas (c. 418 – 362 a.C.)' },
  'General tebano que derrotou os espartanos em **Leuctras** (371 a.C.) com uma tática nova: concentrou as melhores tropas, em profundidade, na ala esquerda, para romper a parte mais forte do inimigo. Invadiu o Peloponeso, libertou a Messénia dos espartanos e ajudou a fundar Megalópolis. Morreu em Mantineia, em 362 a.C. A hegemonia de Tebas não lhe sobreviveu muito tempo.',
  { h: 'Filipe II da Macedónia (382 – 336 a.C.)' },
  'Rei desde 359 a.C., fez da Macédia, um reino de montanha com cavaleiros e pastores, a maior potência do mundo grego. Reorganizou o exército (a falange com a *sarissa*), explorou as minas de ouro do monte Pangeu, usou diplomacia, casamentos e suborno tanto quanto as armas. Venceu em Queroneia (338 a.C.) e foi assassinado em 336 a.C., em Egas, durante o casamento da filha, por um guarda-costas, Pausânias. Um túmulo descoberto em Vergina em 1977, com tesouros de ouro, é atribuído a ele por muitos especialistas, embora a identificação seja discutida.',
  { h: 'Alexandre Magno (356 – 323 a.C.)' },
  'Filho de Filipe II e de Olímpia, teve Aristóteles como mestre. Rei aos 20 anos, venceu o Império Persa em quatro anos, fundou muitas cidades (muitas com o nome Alexandria, em número debatido), chegou à Índia e só voltou atrás quando o exército se recusou a avançar. Morreu na Babilónia aos 32 anos, e a causa (doença, febre, envenenamento) é debatida. O seu império dividiu-se logo entre os generais, mas abriu o mundo grego ao Oriente e fez do grego uma língua comum de milhões de pessoas.',
  { h: 'Arquimedes (c. 287 – 212 a.C.)' },
  'Matemático e inventor de Siracusa. Descobriu como calcular a área do círculo e o volume da esfera, estudou a alavanca e o princípio da flutuação. A história do banho e do «Eureka!» é uma anedota tardia, contada por Vitrúvio. Segundo Plutarco, quando os romanos tomaram Siracusa, em 212 a.C., foi morto por um soldado que não o reconheceu. Os seus escritos chegaram à Idade Média em cópias, e um deles, o Palimpsesto de Arquimedes, foi copiado no século X e apagado para escrever um livro de orações; hoje é lido com técnicas modernas.',
  { h: 'Hipócrates de Cós (c. 460 – c. 370 a.C.)' },
  'O mais famoso médico da Grécia. Defendeu que as doenças têm causas naturais, ligadas à dieta, ao clima e ao modo de vida, e que o médico deve observar. O **Juramento de Hipócrates** é atribuído à sua escola, mas a autoria exata e a data são incertas; o texto atual evoluiu bastante ao longo dos séculos. Os médicos ainda recordam a máxima de que o primeiro dever é «não causar dano», frase que, de resto, é posterior a ele.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**Democracia e política:** a ideia de assembleia, de lei igual para todos (*isonomia*), de tribunal com júri e de responsabilidade dos governantes, e as palavras para as discutir (política, tirania, democracia, aristocracia).',
    '**Filosofia e ciência:** a lógica de Aristóteles, a dúvida de Sócrates, a matemática de Euclides e de Arquimedes, a medicina de Hipócrates, a geografia de Eratóstenes.',
    '**Literatura:** Homero, as tragédias de Ésquilo, Sófocles e Eurípides, as comédias de Aristófanes, a história de Heródoto e Tucídides, a poesia de Safo e Píndaro.',
    '**Alfabeto:** o nosso alfabeto latino vem do grego (via etruscos) e o cirílico foi baseado nele. Palavras como «biblioteca», «história», «geometria» e «atleta» são gregas.',
    '**Jogos Olímpicos:** retomados em 1896, em Atenas, por iniciativa do barão Pierre de Coubertin, com a corrida da maratona inspirada na lenda.',
    '**Arquitetura:** colunas e frontões nos tribunais, museus, bancos e parlamentos de todo o mundo.'
  ] },
  { h: 'Arte' },
  'Os gregos desenvolveram um ideal de beleza assente na proporção, na harmonia e no corpo humano, e quase todas as artes europeias posteriores (a romana, a do Renascimento, o neoclassicismo) se definiram a favor ou contra ele. Quase toda a pintura grega perdeu-se (restam a cerâmica pintada, alguns frescos e retratos do Egito romano); a escultura sobreviveu sobretudo através de **cópias romanas** em mármore de originais em bronze, entretanto fundidos.',
  { img: 'gre-vitoria-samotracia', leg: 'A Vitória de Samotrácia (Nike), c. 190 a.C. Museu do Louvre, Paris.' },
  { img: 'gre-laocoonte', leg: 'Grupo escultórico do Laocoonte, helenístico, c. século I a.C. – I d.C. (as datas são debatidas). Museus do Vaticano.' },
  { h: 'Arquitetura: o Parténon' },
  'O **Parténon**, dedicado a Atena Pártenos, é o edifício mais conhecido da Grécia. Foi construído entre 447 e 432 a.C. pelos arquitetos **Ictino** e **Calícrates**, com escultura de **Fídias** e dos seus colaboradores. Ao longo dos séculos foi igreja bizantina e mesquita; em 1687, durante uma guerra entre venezianos e otomanos, uma explosão de pólvora ali guardada destruiu grande parte da estrutura. Nos anos 1801–1812, o diplomata britânico **Lord Elgin** retirou grande parte das esculturas do friso e dos frontões, hoje no Museu Britânico; a Grécia exige a sua devolução, e o tema continua a ser debatido, enquanto o **Museu da Acrópole**, aberto em 2009, expõe o resto.',
  { img: 'gre-parthenon-hoje', leg: 'O Parténon, Acrópole de Atenas, com andaimes de restauro, 2020s.' },
  { h: 'A redescoberta da Grécia' },
  'Os romanos, a Igreja bizantina e o mundo islâmico guardaram e traduziram muitos autores gregos. No Renascimento, sábios bizantinos refugiados depois de 1453 levaram manuscritos gregos para a Itália. No século XVIII, **Johann Winckelmann** ajudou a fundar a história da arte com o estudo da escultura grega, e muitos viajantes visitaram as ruínas. A guerra de independência grega (1821–1829) tornou a Antiguidade um símbolo nacional. No século XIX e no XX, as escavações de **Schliemann** (Troia e Micenas), de **Evans** (Cnossos) e de muitos outros revelaram os minoicos e os micénicos, e em 1952 o arquiteto **Michael Ventris**, com John Chadwick, decifrou o **Linear B**, mostrando que os micénicos falavam grego.',
  { img: 'gre-escola-atenas-rafael', leg: 'A Escola de Atenas, fresco de Rafael, 1509–1511, com Platão e Aristóteles ao centro. Palácios do Vaticano.' },
  { cit: 'Graecia capta ferum victorem cepit.  («A Grécia, cativa, cativou o seu feroz vencedor.»)', fonte: 'Horácio, Epístolas, 2.1.156, sobre a influência da cultura grega em Roma' },
  { h: 'Onde visitar' },
  { lista: [
    '**Atenas:** a Acrópole, a Ágora Antiga e o seu museu, o Museu da Acrópole e o Museu Arqueológico Nacional (com a Máscara de Agamémnon, o Mecanismo de Anticítera e os achados de Micenas).',
    '**Creta:** o palácio de Cnossos e o Museu Arqueológico de Heraclião, com os frescos minoicos.',
    '**Peloponeso:** Micenas, Tirinto, Epidauro, Olímpia (com o seu museu) e a Esparta moderna, com o pequeno museu.',
    '**Delfos:** o santuário de Apolo, o Tholos e o museu.',
    '**Vergina:** o museu dos túmulos reais da Macedónia.',
    '**Fora da Grécia:** o Museu de Pérgamo, em Berlim (Grande Altar); o Louvre (Vitória de Samotrácia, Vénus de Milo); o Museu Britânico (esculturas do Parténon); os Museus do Vaticano; o Museu Arqueológico de Nápoles (Mosaico de Alexandre); o Museu Calouste Gulbenkian, em Lisboa, com uma coleção de arte grega, incluindo moedas e vasos.'
  ] },
  { h: 'Notas finais' },
  'Este texto simplifica uma história de quase três mil anos. As datas da Idade do Bronze e da época arcaica são aproximadas e muitas vezes discutidas, e a história dos «gregos» inclui também os períodos romano e bizantino, que terão páginas próprias.'
];

const quiz = [
  { p: 'Como se chamava a cidade-Estado grega?', op: ['Pólis', 'Acrópole', 'Ágora', 'Demos'], certa: 0, exp: 'A pólis era uma cidade com o seu território, as suas leis e o seu exército de cidadãos.' },
  { p: 'Qual foi a escrita dos micénicos, decifrada em 1952 por Michael Ventris?', op: ['Linear A', 'Linear B', 'Hieróglifos', 'Cuneiforme'], certa: 1, exp: 'O Linear B mostrou que os micénicos falavam uma forma antiga de grego. O Linear A, dos minoicos, continua por decifrar.' },
  { p: 'Quem fez as reformas de 508/7 a.C. que criaram a democracia em Atenas?', op: ['Sólon', 'Péricles', 'Clístenes', 'Pisístrato'], certa: 2, exp: 'Clístenes reorganizou os cidadãos em dez tribos e criou o Conselho de 500.' },
  { p: 'Em que batalha de 490 a.C. os atenienses venceram um exército persa?', op: ['Termópilas', 'Salamina', 'Plateias', 'Maratona'], certa: 3, exp: 'Maratona, sob o comando de Milcíades.' },
  { p: 'O que era o ostracismo em Atenas?', op: ['Uma festa religiosa', 'O exílio de dez anos votado em cacos de cerâmica', 'Um tipo de teatro', 'Um imposto'], certa: 1, exp: 'Quem fosse considerado perigoso para a cidade partia por dez anos, mas não perdia os bens.' },
  { p: 'Quem era o rei espartano que comandou os gregos nas Termópilas?', op: ['Leónidas', 'Temístocles', 'Pausânias', 'Epaminondas'], certa: 0, exp: 'Leónidas e os seus 300 espartanos, com milhares de aliados, atrasaram o exército de Xerxes em 480 a.C.' },
  { p: 'Que edifício foi construído na Acrópole de Atenas entre 447 e 432 a.C.?', op: ['O Erecteion', 'O Parténon', 'O templo de Zeus em Olímpia', 'O Tholos de Delfos'], certa: 1, exp: 'O Parténon, dedicado a Atena, é de Ictino e Calícrates, com escultura de Fídias.' },
  { p: 'Quem eram os hilotas?', op: ['Estrangeiros residentes em Atenas', 'Os sacerdotes de Delfos', 'A população subjugada que trabalhava a terra para Esparta', 'Os remadores das trirremes'], certa: 2, exp: 'Os hilotas de Esparta, sobretudo messénios, trabalhavam as terras dos espartíatas e revoltavam-se de vez em quando.' },
  { p: 'Quem foi o mestre de Alexandre Magno?', op: ['Platão', 'Sócrates', 'Aristóteles', 'Euclides'], certa: 2, exp: 'Aristóteles foi preceptor de Alexandre, na Macedónia, por volta de 343 a.C.' },
  { p: 'Quem escreveu os *Elementos*, o grande tratado de geometria?', op: ['Pitágoras', 'Euclides', 'Arquimedes', 'Eratóstenes'], certa: 1, exp: 'Euclides, em Alexandria, c. 300 a.C.' },
  { p: 'O que prometia a Pítia de Delfos?', op: ['Respostas de Apolo a perguntas dos consulentes', 'A vitória nos Jogos', 'Cura de doenças', 'Imortalidade'], certa: 0, exp: 'A Pítia era a sacerdotisa de Apolo e as suas respostas, muitas vezes ambíguas, eram consultadas antes de guerras e fundações de colónias.' },
  { p: 'Em que cidade do Egito foram construídos a Biblioteca e o Farol, no período helenístico?', op: ['Mênfis', 'Alexandria', 'Tebas', 'Náucratis'], certa: 1, exp: 'Alexandria, fundada por Alexandre em 331 a.C., foi a capital dos Ptolemeus.' },
  { p: 'Qual das afirmações sobre os 300 espartanos nas Termópilas é correta?', op: ['Estavam sozinhos', 'Estavam com cerca de 7 mil gregos, e a maioria retirou-se no fim', 'Venceram os persas', 'Eram todos hilotas'], certa: 1, exp: 'Os 300 são históricos, mas lutaram com outros gregos, e só alguns ficaram até ao fim.' },
  { p: 'Que cidade foi destruída por Roma em 146 a.C.?', op: ['Atenas', 'Esparta', 'Corinto', 'Tebas'], certa: 2, exp: 'Corinto foi destruída pelo cônsul Múmio, e a Grécia passou a ser província romana.' },
  { p: 'Qual a batalha naval de 31 a.C. que pôs fim ao último reino helenístico?', op: ['Salamina', 'Actium', 'Lade', 'Egospótamos'], certa: 1, exp: 'Em Actium, Octávio venceu António e Cleópatra VII; Alexandria caiu em 30 a.C.' }
];

export default {
  id: 'grecia',
  cor: '#3a7ab8',
  grupo: { ...GRUPO, aqui: '' },
  emblema: '../assets/img/grecia.png',
  nome:    { pt: 'Grécia Antiga', en: 'Ancient Greece' },
  periodo: { pt: 'c. 3000 a.C. – 30 a.C.', en: 'c. 3000 BC – 30 BC' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
