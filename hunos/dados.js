// HUNOS — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
// Datas na «cronologia média». Quase tudo o que sabemos dos Hunos vem de autores romanos e godos, que escreveram do lado de fora e, muitas vezes, com medo ou hostilidade; os próprios Hunos não deixaram textos. O que é hipótese ou lenda vem assinalado. d.C.
// Imagens: cada {img:'id'} procura o ficheiro  hunos/img/id.jpg  (ver IMAGENS_HUNOS.md para a lista e os prompts).

import EN from './dados-en.js';
import CRED from './creditos.js';

const visao = [
  { caixa: 'Em resumo', texto: [
    'Os **Hunos** foram uma confederação de povos de cavaleiros-arqueiros que, vinda das estepes a leste do rio **Volga**, apareceu na Europa por volta de **370 – 376 d.C.** e, num século, abalou o mundo romano e germânico. Primeiro empurraram para o Danúbio os **Alanos** e os **Godos**, e assim desencadearam, sem o quererem, a crise que levaria à derrota romana em **Adrianópolis (378)**. No século V, com base na **Panónia** (a planície do Danúbio e do Tisza, na atual Hungria), os seus chefes passaram a cobrar **tributo em ouro** aos imperadores romanos, que pagavam para evitar a guerra.',
    'O momento mais célebre foi o reinado de **Átila** (c. 434 – 453), primeiro com o irmão **Bleda** e depois sozinho. Átila arrancou ao Império Romano do Oriente quantias cada vez maiores de ouro, devastou os Balcãs (441 – 447), invadiu a **Gália**, onde lutou nos **Campos Cataláunicos (451)** contra o general romano **Aécio** e os Visigodos, e a **Itália** (452). Morreu em **453**, na noite de núpcias; um ano depois, na batalha do **Nedao (454)**, os povos súbditos revoltaram-se e o seu império desfez-se. Os Hunos nunca tiveram escrita, cidades nem estado duradouro, mas o seu nome ficou como sinónimo de invasor feroz, em parte por justiça e em parte pelas lendas que se lhes colaram.'
  ] },
  { img: 'hun-mapa-imperio', leg: 'Mapa do império huno no tempo de Átila (c. 450), da planície do Danúbio e do Tisza até às fronteiras do Império Romano.' },
  { h: 'Onde ficava' },
  'Os Hunos vieram da **estepe eurasiática**, a imensa faixa de pradaria que vai da Mongólia ao Danúbio e onde a vida assenta no cavalo, no gado e na mobilidade. Quando aparecem nas fontes, por volta de 370, estão a leste do Don e do Volga; poucos anos depois, ultrapassam o Don, o Dniepre e o Dniester e chegam ao baixo Danúbio. Nas primeiras décadas do século V, os seus chefes dominam a **planície húngara**, sobretudo a **Panónia** (a oeste do Danúbio) e as terras entre o Danúbio e o **Tisza**, onde a estepe continua, em ponto pequeno, no meio da Europa.',
  'No tempo de Átila, o poder huno ia, grosso modo, do **Reno** (através de vassalos germânicos) às planícies da atual **Ucrânia**, e do Danúbio romano às margens do mar Negro, mas os limites exatos nunca foram definidos: era um domínio sobre **povos e chefes**, não sobre um território com fronteiras. O centro era a corte de Átila, algures entre o Danúbio e o Tisza; a sua localização exata nunca foi identificada.',
  { img: 'hun-estepe', leg: 'Estepe eurasiática, o mundo de onde vieram os cavaleiros hunos.' },
  { img: 'hun-hortobagy', leg: 'A planície húngara de Hortobágy, uma «estepe» europeia: ambiente onde os Hunos se instalaram no século V (a ligação exata é debatida).' },
  { h: 'Quando existiram' },
  'A história dos Hunos na Europa é curta, cerca de um século, mas intensa. As datas abaixo são aproximadas e seguem a cronologia habitual; as fases têm nomes convencionais, não nomes que os Hunos usassem.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Origens (debatidas)', 'antes de c. 370', 'Povos de cavaleiros da estepe, a leste do Volga; ligação aos Xiongnu da Ásia Central é hipótese, não facto'],
    ['Chegada à Europa', 'c. 370 – 395', 'Derrota dos Alanos e dos Godos; os Godos pedem asilo no Império (376); Adrianópolis (378); incursões no Cáucaso e no Danúbio'],
    ['Chefes dispersos', 'c. 395 – 420', 'Vários chefes (Balamber, na tradição; Uldin) e bandos ao serviço de Roma ou contra ela; Hunos como mercenários'],
    ['Reis da Panónia', 'c. 420 – 434', 'Octar e Rua; os Hunos fixam-se na planície do Danúbio e do Tisza e passam a cobrar tributo a Constantinopla'],
    ['Átila e Bleda', '434 – 453', 'Apogeu: Margus (435), Balcãs (441 – 447), Gália e Campos Cataláunicos (451), Itália (452); morte de Átila (453)'],
    ['Colapso e dispersão', '454 – c. 469', 'Nedao (454), revolta dos súbditos; os filhos de Átila disputam o poder; morte de Dengizique (469)']
  ] } },
  { h: 'Quem eram os Hunos?' },
  'Não sabemos ao certo. Os Hunos **não deixaram escrita**, e a sua língua é conhecida apenas por alguns nomes (*Átila*, *Bleda*, *Rua*, *Ellac*) cuja origem se discute: alguns parecem germânicos, outros de origem turcomana ou iraniana, e não há consenso sobre a língua que falavam. Os autores antigos descrevem-nos de fora, e com preconceito.',
  'A ideia mais difundida é a de que descendem dos **Xiongnu**, a confederação de povos nómadas que dominou a Mongólia e o norte da China do século III a.C. ao século I d.C. (e que as fontes chinesas descrevem). A hipótese foi lançada em 1748 pelo erudito francês **Joseph de Guignes**, a partir da semelhança dos nomes e da cronologia, e continua a ser defendida por uns e rejeitada por outros. É uma **hipótese**, não um facto: entre os Xiongnu, que desaparecem das fontes chinesas no século II d.C., e os Hunos, que surgem na Europa no século IV, há um intervalo de cerca de dois séculos sem documentação. A **genética** ajuda um pouco, mas não resolve: estudos de ADN antigo publicados entre 2018 e 2025 mostram que os Hunos eram um **mosaico de origens**, com elites que apresentam ascendência da Ásia Central e do Leste da Ásia e muitos indivíduos de origem sobretudo europeia, e que alguns elites hunas têm parentesco distante com as elites dos Xiongnu; é um quadro de **mistura e mobilidade ao longo de gerações**, não de uma migração em massa de um povo único.',
  { img: 'hun-xiongnu-mapa', leg: 'Mapa do império dos Xiongnu (séc. III a.C. – séc. I d.C.), possíveis antepassados dos Hunos, segundo uma hipótese debatida.' },
  { h: 'Porque importam' },
  { lista: [
    '**Efeito dominó:** a chegada dos Hunos empurrou Alanos e Godos para o Império e contribuiu para o ciclo de migrações e invasões que, em 476, levou ao fim do Império Romano do Ocidente (um dos fatores, entre muitos).',
    '**Átila:** um dos nomes mais conhecidos da Antiguidade tardia, e uma das poucas figuras «bárbaras» de que temos o retrato de uma testemunha direta, o diplomata **Prisco**.',
    '**A guerra a cavalo:** o arco composto e a mobilidade da estepe voltaram a mostrar o que a cavalaria podia fazer contra exércitos de infantaria.',
    '**A economia do tributo:** os Hunos foram, antes de mais, um império de **extorsão**, que vivia do ouro romano, uma lição sobre como um estado pode comprar a paz e sair arruinado.',
    '**Lenda e memória:** de Átila nasceram o rei Etzel dos *Nibelungos*, o «flagelo de Deus» e a ideia de «huno» como insulto, e é preciso separar o que é facto do que é mito.',
    '**A pergunta sobre a origem:** quem eram, de onde vieram, o que falavam, é um dos grandes problemas abertos da história da Eurásia.'
  ] },
  { img: 'hun-delacroix', leg: 'Átila e as suas hordas pisam a Itália e as Artes: esboço de Eugène Delacroix para a biblioteca do Palais Bourbon, Paris (c. 1843 – 1847); a imagem romântica, e partidária, do «bárbaro».' },
  { caixa: 'Os Hunos hoje', texto: 'Não existem «Hunos» hoje, e os Húngaros **não são descendentes diretos** dos Hunos: chegaram à planície do Danúbio por volta de 895 – 900, quase meio milénio depois de Átila. Mas a lenda de uma ascendência huna foi cultivada na Hungria medieval (as crónicas medievais húngaras apresentam Átila como antepassado) e continua a ter força na cultura popular. Do lado científico, o ADN antigo e as escavações de túmulos da Panónia, com caldeirões, joias e crânios deformados, estão a mudar o que sabemos: a imagem de «horda sem rosto» dá lugar à de uma sociedade complexa, de origens diversas e de grande mobilidade.' }
];

const linha = [
  'Esta linha do tempo vai das origens debatidas, nas estepes, ao desaparecimento dos Hunos como força política. Quase todas as datas vêm de **historiadores romanos e godos** (Amiano Marcelino, Prisco, Jordanes e cronistas), que nem sempre concordam; quando há dúvida, diz-se.',
  { linha: [
    { d: 'séc. III a.C. – séc. II d.C.', t: 'Os Xiongnu (contexto, não Hunos)', x: 'A leste, nas estepes da Mongólia, os **Xiongnu** formam uma poderosa confederação nómada, rival da China dos Han. O ramo do norte desfaz-se em meados do século II d.C. Pensa-se há quase três séculos que parte destes povos terá migrado para oeste e originado os Hunos, mas **não há prova direta**: é a hipótese mais famosa e continua em debate.' },
    { d: 'séc. II d.C.', t: 'Os «Khounoi» de Ptolomeu', x: 'O geógrafo grego **Ptolomeu** menciona um povo chamado *Khounoi* entre o Báltico e o mar Negro, na Europa oriental. Não é certo que sejam os mesmos Hunos, mas mostra que o nome circulava.' },
    { d: 'c. 311 – 313', t: 'Uma carta sogdiana', x: 'Uma das «Cartas Antigas» sogdianas, de c. 313, fala de um povo chamado **Xwn** que tomou Luoyang e outras cidades chinesas. Alguns historiadores (como **Étienne de la Vaissière**) veem aqui o nome dos Hunos e uma ligação aos Xiongnu; outros não. O assunto continua em aberto.' },
    { d: 'c. 370 – 375', t: 'Os Hunos atravessam o Volga e o Don', x: 'Segundo **Amiano Marcelino** (c. 390), um povo «pouco conhecido», que vivia para lá dos pântanos do mar de Azov, lançou-se sobre os **Alanos** (nómadas de língua iraniana) e derrotou-os, integrando muitos deles. O historiador dá uma descrição, muito hostil, dos recém-chegados.' },
  ] },
  { img: 'hun-chegada-europa', leg: 'Cavaleiros hunos a atacar um acampamento alano na estepe, c. 375; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'hun-amiano', leg: 'Página de uma edição das obras de Amiano Marcelino (Augsburgo, 1533): Amiano (c. 330 – depois de 391) é o historiador romano que deixou a primeira descrição dos Hunos.' },
  { linha: [
    { d: 'c. 375 – 376', t: 'Queda do reino dos Greutungos', x: 'Os Hunos atacam o reino dos **Greutungos** (Ostrogodos), na atual Ucrânia. Segundo Amiano, o velho rei **Ermanarico** matou-se de desespero; segundo **Jordanes** (século VI), que fala de um «rei» huno **Balamber**, esse chefe terá derrotado os Ostrogodos. A ligação entre estas duas versões, e a existência do próprio Balamber, são discutidas.' },
    { d: '376', t: 'Os Godos no Danúbio', x: 'Os **Tervíngios** (Visigodos), em fuga, pedem asilo ao imperador **Valente** e atravessam o Danúbio. A fome, a corrupção dos oficiais romanos e a ausência de organização levam à revolta. É o começo de um conflito de seis anos.' },
    { d: '9 de agosto de 378', t: 'Adrianópolis', x: 'Perto de **Adrianópolis**, na Trácia, o exército romano é desfeito pelos Godos, e o imperador **Valente** morre. Os Hunos não são os protagonistas desta batalha, mas foram a sua causa distante: sem a pressão deles, os Godos não teriam pedido refúgio no Império.' },
  ] },
  { img: 'hun-adrianopla', leg: 'A batalha de Adrianópolis (378), em representação moderna; os Hunos foram a causa distante desta derrota romana.' },
  { linha: [
    { d: '395', t: 'Incursão pelo Cáucaso', x: 'Bandos hunos atravessam o Cáucaso e devastam a Arménia e partes da Síria e da Capadócia, ao mesmo tempo que outros cruzam o Danúbio gelado. Autores como **Jerónimo** e o poeta **Cláudio Claudiano** testemunham o medo que causaram. O Império, dividido entre os filhos de Teodósio, mal reage.' },
    { d: '400 – 408', t: 'Uldin', x: 'O chefe **Uldin**, que domina a zona do baixo Danúbio, é a primeira figura histórica huna bem documentada. Em 400, mata o general godo rebelde **Gainas** e envia a cabeça aos Romanos de Constantinopla. Em 406, ajuda **Estilicão** a derrotar **Radagaiso** perto de Fiésole. Em 408 invade a Trácia, é repelido, e os seus guerreiros desertam, subornados por Roma; Uldin escapa e desaparece das fontes.' },
    { d: 'c. 405 – 425', t: 'Hunos ao serviço de Roma', x: 'Roma recorre aos Hunos como mercenários. O jovem **Aécio**, futuro general romano, vive como refém entre eles; mais tarde usará os seus amigos hunos para fazer política na Itália e na Gália. A ligação cria uma relação ambígua: os Hunos são ao mesmo tempo inimigo e aliado.' },
    { d: 'c. 422 – 433', t: 'Octar, Rua e a Panónia', x: 'Entre c. 420 e 430, **Octar** e **Rua** (ou *Ruga*, *Rugila*) são os chefes principais. Em c. **422**, os Hunos atacam a Trácia, e Roma paga-lhes 350 libras de ouro por ano. Octar morre em c. **430**, numa campanha contra os Burgúndios. Por volta de **433**, segundo uma tradição, Aécio cede aos Hunos terras na **Panónia** (a data e as condições são discutidas), o que faz deles vizinhos diretos das duas metades do Império.' },
    { d: '434', t: 'Morte de Rua; Átila e Bleda', x: 'Rua morre quando preparava uma campanha contra Constantinopla; sucedem-lhe os sobrinhos **Bleda** e **Átila**, filhos de um irmão, Mundzuk. Reinam em conjunto: a divisão exata do comando entre os dois é desconhecida.' },
    { d: '435', t: 'Tratado de Margus', x: 'Em **Margus** (junto ao atual Požarevac, Sérvia), os enviados de Teodósio II aceitam as exigências de Átila e Bleda: o tributo anual sobe de **350 para 700 libras de ouro** (cerca de 230 kg), os fugitivos hunos têm de ser devolvidos e os mercados na fronteira ficam abertos. É o primeiro grande triunfo diplomático dos dois reis.' },
    { d: '436 – 437', t: 'O fim do reino burgúndio de Worms', x: 'Aécio usa mercenários hunos para destruir o reino dos **Burgúndios** no Reno (c. 436 – 437); o rei **Gundicário** morre. Este episódio, muito deformado, será a base do poema épico dos *Nibelungos*, séculos mais tarde.' },
  ] },
  { img: 'hun-nis', leg: 'A fortaleza de Niš, sobre o antigo local de Naissus, cidade tomada pelos Hunos em 441 – 443.' },
  { linha: [
    { d: '441 – 442', t: 'Guerra nos Balcãs', x: 'Quando o exército oriental está ocupado na Sicília, contra os Vândalos, Átila ataca. Segundo **Prisco**, o pretexto foi o bispo de **Margus**, que teria cruzado o rio e profanado túmulos reais hunos. As cidades de **Viminácio**, **Singiduno** (Belgrado) e **Sírmio** caem. Segue-se uma trégua.' },
    { d: '443', t: 'Segunda campanha e novo tratado', x: 'Átila toma **Ratiária**, **Naisso**, **Sérdica** (Sófia), **Filipópolis** e chega perto de Constantinopla. O ministro **Anatólio** negoceia a paz: Roma paga **6000 libras de ouro** de atrasados e passa a pagar **2100 libras por ano**, três vezes o valor anterior.' },
    { d: 'c. 445', t: 'Átila elimina Bleda', x: 'Segundo as fontes romanas (a *Crónica* de **Marcelino Comes**, 445), **Átila** manda matar o irmão e fica rei único. Os pormenores são pouco claros: a tradição e Prisco falam de um assassínio, e não sabemos o que realmente se passou.' },
    { d: '447', t: 'O Utus, o terramoto e as muralhas', x: 'Em 447, Átila volta a atacar: derrota o general **Arnegisclo** junto ao rio **Utus** (Vit), na Bulgária, e chega até às Termópilas e ao Quersoneso (Galípoli). Constantinopla acabara de ser abalada por um terramoto, que derrubou parte das muralhas; o prefeito **Constantino** reconstrói-as em cerca de dois meses, e Átila não ataca a cidade. A paz de 448 obriga Roma a evacuar uma larga faixa de território a sul do Danúbio, e a pagar mais.' },
  ] },
  { img: 'hun-muralhas-teodosianas', leg: 'Muralhas Teodosianas de Constantinopla, reconstruídas e reforçadas depois do terramoto de 447, quando Átila ameaçava a cidade.' },
  { linha: [
    { d: '449', t: 'A embaixada de Prisco', x: 'O diplomata e historiador **Prisco de Pânio** acompanha **Maximino**, enviado de Teodósio II, à corte de Átila, e descreve o que viu: o rei, simples e austero no meio do luxo dos convidados, os banquetes, o palácio de madeira, os bardos. É o único retrato direto que temos de Átila. A viagem serviu também de cobertura a um plano para assassinar o rei, forjado em Constantinopla pelo eunuco **Crisáfio** (e que falhou).' },
    { d: '450', t: 'Honória, Marciano', x: 'A irmã do imperador do Ocidente, **Honória**, terá enviado a Átila o seu anel, pedindo ajuda para escapar a um casamento forçado; Átila reclama-a como noiva e metade do Império do Ocidente como dote. Em Constantinopla, o novo imperador **Marciano** (450) recusa pagar mais tributo.' },
    { d: '451', t: 'A invasão da Gália', x: 'Átila cruza o Reno na primavera, com um exército que incluía muitos súbditos germânicos (Ostrogodos, Gépidas, Hérulos e outros). Saqueia **Metz** (abril), cerca **Orleães**, mas Aécio chega a tempo, com um exército romano e aliados, entre eles os **Visigodos** do rei **Teodorico I**.' },
    { d: '20 de junho de 451 (data discutida)', t: 'Batalha dos Campos Cataláunicos', x: 'Perto de **Troyes** (o local exato, *Locus Mauriacus*, é discutido), travam-se de um lado Átila, com os Hunos e os seus aliados, e do outro Aécio e Teodorico. Teodorico morre; o filho **Turismundo** herda o comando. Jordanes diz que morreram 165 000 homens, número sem credibilidade. Átila recua. O resultado é difícil de classificar: é um **empate tático**, mas uma derrota estratégica para o rei, que perde a iniciativa.' },
  ] },
  { img: 'hun-catalaunicos-mapa', leg: 'A batalha dos Campos Cataláunicos (451) numa miniatura medieval: a imagem mostra cavaleiros de armadura medieval, não o aspeto real da batalha; o local exato continua a ser discutido.' },
  { linha: [
    { d: '452', t: 'A invasão da Itália', x: 'Átila atravessa os Alpes Julianos, toma depois de um longo cerco **Aquileia**, destrói-a e avança sobre **Milão** e **Pavia**. Segundo uma tradição, os refugiados terão fundado **Veneza**, uma lenda mais do que um facto. Perto do rio **Míncio**, uma embaixada romana, em que se contava o **papa Leão I**, encontra Átila, que se retira. As causas prováveis: fome e doença no exército, a falta de provisões, e as tropas de Marciano a atacar a Panónia.' },
  ] },
  { img: 'hun-aquileia-cerco', leg: 'Cerco de Aquileia por Átila, 452; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'hun-leao-atila', leg: 'O encontro do papa Leão I com Átila, fresco de Rafael e oficina, c. 1514, Estâncias do Vaticano; a presença de S. Pedro e S. Paulo no céu é uma tradição tardia.' },
  { img: 'hun-galla-placidia', leg: 'Mosaicos do Mausoléu de Gala Placídia, em Ravena (séc. V), mãe de Valentiniano III e de Honória; segundo a tradição, Honória enviou o seu anel a Átila.' },
  { linha: [
    { d: '453', t: 'Morte de Átila', x: 'Átila morre, segundo Prisco (citado por Jordanes), na noite de núpcias com uma jovem de nome **Ildico**, de uma hemorragia: ficou deitado de costas, bêbado, e sufocou com o sangue de uma hemorragia nasal. Outras versões falam de assassinato, mas não há prova; a causa natural é a mais provável. A lenda diz que foi enterrado em três caixões, de ouro, prata e ferro, e que os coveiros foram mortos (Jordanes; **não há prova arqueológica** de nada disto).' },
  ] },
  { img: 'hun-funeral-atila', leg: 'O funeral de Átila segundo Jordanes (cortejo de cavaleiros em círculo, tenda de seda); reconstituição de uma tradição, não de um achado. Ilustração gerada por IA.' },
  { linha: [
    { d: '454', t: 'A batalha do Nedao', x: 'Os filhos de Átila (**Ellac**, **Dengizique**, **Ernaque**) disputam o poder, e os povos súbditos revoltam-se sob a chefia do rei gépida **Ardarico**. Num rio da Panónia chamado **Nedao** (a localização é desconhecida), Ellac é morto e o exército huno derrotado. O império desfaz-se em poucos meses. Nesse mesmo ano, Aécio é assassinado pelo imperador Valentiniano III.' },
  ] },
  { img: 'hun-nedao', leg: 'A batalha do Nedao (454), em que os povos súbditos derrotaram o exército huno; reconstituição conjetural. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 454 – 469', t: 'Os últimos Hunos', x: 'Os grupos hunos que restam recuam para a estepe a norte do mar Negro. Em **468 – 469**, **Dengizique** ataca o Império do Oriente, é morto e a sua cabeça é exibida em Constantinopla. A partir daí, o nome «Hunos» aparece cada vez menos, e os grupos que sobreviveram misturaram-se com outros povos da estepe.' },
    { d: '476', t: 'O fim do Império do Ocidente', x: 'Odoacro depõe **Rómulo Augústulo**, filho de **Orestes**, o romano que tinha sido secretário de Átila. O Império Romano do Ocidente acaba; o Império do Oriente (Bizâncio) continua. Os Hunos já tinham desaparecido, mas a crise em que o Ocidente caiu devia muito aos anos de pressão hunos.' }
  ] },
  { h: 'Redescoberta' },
  'Na Idade Média, a imagem de Átila dividiu-se em duas: o **monstro** («flagelo de Deus», castigo divino contra um mundo pecador, em textos latinos) e o **rei** da épica germânica (Etzel, nos *Nibelungos*; Atli, nas sagas nórdicas). Na Hungria medieval, as crónicas (como a de **Simão de Kéza**, c. 1283, e a *Crónica Iluminada*, século XIV) fizeram dele antepassado dos Húngaros. No século XVIII, **Joseph de Guignes** ligou os Hunos aos Xiongnu, e no século XX o austríaco **Otto Maenchen-Helfen** (*The World of the Huns*, publicado em 1973) fez a síntese crítica das fontes e da arqueologia, que ainda hoje é referência. Desde 2018, os estudos de **ADN antigo** (Damgaard e colegas; Maróti e colegas, 2022; Gnecchi-Ruscone e colegas, 2025) têm dado dados novos, e inesperados, sobre a origem e a diversidade dos Hunos.'
];

const mapa = [
  'Os Hunos **não tinham cidades** que se conheçam: viviam em acampamentos de carroças, tendas e casas de madeira, e mudavam com as pastagens e com a guerra. Por isso o «mapa» huno é feito sobretudo de **lugares romanos que atacaram** e de zonas por onde passaram. A tabela junta os mais importantes.',
  { tabela: { cab: ['Lugar', 'Onde (atual)', 'Quando', 'Importância'], linhas: [
    ['Planície húngara / Panónia', 'Hungria', 'c. 420 – 454', 'Centro do poder huno; corte de Átila entre o Danúbio e o Tisza (localização exata desconhecida)'],
    ['Margus', 'Perto de Požarevac, Sérvia', '435; 441', 'Local do tratado de 435; saqueada em 441 após o caso do bispo'],
    ['Singiduno', 'Belgrado, Sérvia', '441', 'Fortaleza romana no Danúbio, destruída'],
    ['Viminácio', 'Kostolac, Sérvia', '441', 'Capital da província da Mésia Superior, destruída'],
    ['Sírmio', 'Sremska Mitrovica, Sérvia', '441 – 442', 'Uma das capitais do Império no séc. IV; tomada pelos Hunos'],
    ['Naisso', 'Niš, Sérvia', '443', 'Cidade devastada; Prisco descreve as ruínas e os doentes abandonados'],
    ['Sérdica e Filipópolis', 'Sófia e Plovdiv, Bulgária', '443', 'Cidades tomadas durante a segunda campanha'],
    ['Utus', 'Rio Vit, Bulgária', '447', 'Batalha em que Arnegisclo é derrotado'],
    ['Constantinopla', 'Istambul, Turquia', '447', 'Capital do Oriente, nunca tomada; as suas muralhas travaram os Hunos'],
    ['Metz e Orleães', 'França', '451', 'Metz saqueada; Orleães cercada e salva por Aécio'],
    ['Campos Cataláunicos', 'Champanhe, França', '451', 'Grande batalha entre Átila e Aécio com os Visigodos'],
    ['Aquileia', 'Friul, Itália', '452', 'Grande porto do Adriático, destruída'],
    ['Milão e Pavia', 'Lombardia, Itália', '452', 'Cidades tomadas sem grande resistência']
  ] } },
  { img: 'hun-mapa-campanhas', leg: 'Esquema das campanhas de Átila nos Balcãs (441 – 447), na Gália (451) e na Itália (452). Mapa gerado por IA. (Imagem ilustrativa gerada por IA.)' },
  { h: 'A Panónia e a corte de Átila' },
  'A **Panónia** era uma província romana, entre o Danúbio e os Alpes, que, a partir de c. 433, passou em parte para o controlo dos Hunos. No seu interior, na grande planície onde o Danúbio e o **Tisza** correm quase paralelos, ficava a **corte** de Átila. Prisco, que lá esteve em 449, descreve uma grande povoação de **casas de madeira**, com um palácio de troncos aplainados cercado por uma paliçada; ali perto, o dignitário Onegésio tinha um balneário de pedra, construído por um prisioneiro romano. Ninguém encontrou ainda, com certeza, esta «capital»: a hipótese mais difundida é a de que estaria entre o Danúbio e o Tisza, a leste do rio.',
  { img: 'hun-panonia', leg: 'Mapa da Panónia e da Ilíria, de Abraão Ortélio (*Theatrum Orbis Terrarum*, 1606): a província romana onde os Hunos se instalaram no século V.' },
  { img: 'hun-aquincum', leg: 'Sistema de aquecimento por hipocausto em Aquincum (Budapeste), cidade romana da Panónia, perto do território dominado pelos Hunos.' },
  { h: 'Os Balcãs: o ouro e a devastação' },
  'As campanhas de 441 – 447 devastaram o Danúbio. Cidades como **Singiduno**, **Viminácio**, **Sírmio** e **Naisso** foram tomadas com **máquinas de cerco** (arietes e torres), que os Hunos aprenderam com os Romanos, talvez com a ajuda de desertores ou prisioneiros. Prisco, que passou por Naisso em 449, encontrou a cidade praticamente deserta e as margens do rio ainda cobertas de ossos dos mortos. Mas Constantinopla, defendida pelas suas muralhas, nunca foi tomada.',
  { img: 'hun-danubio', leg: 'O Danúbio, fronteira entre o Império Romano e o mundo «bárbaro», e eixo das campanhas hunas nos Balcãs.' },
  { h: 'A Gália e a Itália' },
  'Em 451, Átila saiu da Panónia e atravessou a Germânia até ao **Reno**. Em abril saqueou **Metz**; seguiu para **Orleães**, que resistiu até à chegada de Aécio. A batalha dos **Campos Cataláunicos** decidiu o destino da campanha. Em 452, Átila voltou-se para a **Itália**: **Aquileia** foi arrasada, e **Milão** e **Pavia** foram tomadas. Em vez de marchar sobre Roma, o rei retirou-se.',
  { img: 'hun-aquileia', leg: 'O rio Natissa em Aquileia (Itália), no sítio da grande cidade romana do Adriático destruída por Átila em 452.' },
  { h: 'Rotas e relações' },
  'Os Hunos mantinham ligações com muitos mundos. Para sul e oeste, o ouro e os produtos romanos; para leste, as rotas da estepe, com cavalos, peles e escravos; para o Norte, os príncipes germânicos que lhes pagavam tributo ou lhes davam reféns. As **feiras fronteiriças** no Danúbio, estabelecidas em Margus (435) e reguladas por tratado, eram o ponto de encontro entre os dois mundos.',
  { img: 'hun-acampamento', leg: 'Acampamento huno de carroças e tendas na planície húngara, séc. V; reconstituição conjetural. Ilustração gerada por IA.' }
];

const sociedade = [
  { h: '1. Organização política' },
  'Os Hunos eram uma **confederação de povos e de chefes**, e não um estado. No começo, segundo Amiano, **não obedeciam a um rei**, mas a «notáveis» que lideravam bandos de guerreiros. Só no século V aparecem reis (**Uldin**, **Octar** e **Rua**, **Átila** e **Bleda**), e muitas vezes governavam **em pares**: dois irmãos ou tios e sobrinhos a partilhar o poder, uma tradição das estepes. Átila acabou com a partilha ao eliminar Bleda.',
  'O poder de Átila apoiava-se em três coisas: o **exército** de guerreiros hunos, a **redistribuição do ouro** (que ele recebia de Roma e distribuía aos seus chefes e seguidores, para os manter fiéis) e a **rede de reis vassalos**, entre eles chefes germânicos como o gépida **Ardarico** e o ostrogodo **Valamiro**, que lhe forneciam tropas. Eram precisamente estes vassalos que se revoltaram em 454. Átila tinha também **secretários romanos** e gregos, e uma chancelaria para as cartas que escrevia ao Império. O mais célebre foi **Orestes**, cujo filho viria a ser o último imperador do Ocidente.',
  { img: 'hun-corte-atila', leg: 'Banquete na corte de Átila, c. 449, segundo o relato de Prisco; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '2. Classes sociais' },
  { lista: [
    '**Chefes e nobres:** a elite guerreira, próxima do rei, que recebia ouro e terras, e que Prisco chama *logades* («escolhidos»).',
    '**Guerreiros livres:** cavaleiros que viviam do gado, da guerra e da pilhagem.',
    '**Povos súbditos:** Godos, Gépidas, Hérulos, Alanos, Suevos e outros, que pagavam tributo e forneciam soldados, cada um com os seus chefes.',
    '**Camponeses e artesãos dependentes:** os Hunos não praticavam muito a agricultura, mas os seus súbditos sim; Prisco menciona campos de milho-painço.',
    '**Escravos e cativos:** prisioneiros de guerra romanos, resgatados por dinheiro ou obrigados a trabalhar; alguns, como o grego que Prisco encontra, preferem a vida entre os Hunos.'
  ] },
  { h: 'As mulheres' },
  'Sabemos pouco. Prisco encontrou a mulher principal de Átila, **Kreka** (*Hereca*), que o recebeu em casa com grande cerimónia, e refere que o rei tinha muitas esposas. As mulheres das elites tinham papel relevante, e há túmulos femininos com joias de ouro, mas não há provas de que fossem governantes. Nas estepes, é comum as mulheres cuidarem do gado e das carroças enquanto os homens guerreiam.',
  { h: '3. Religião' },
  'Quase nada se sabe, e o pouco que se sabe vem de outsiders. Pensa-se que a religião huna era de tipo **xamânico** e ligada à natureza e ao céu (talvez a figura do «Céu» que mais tarde se chama *Tengri* entre os povos turcos e mongóis, uma hipótese). Os Hunos não tinham templos conhecidos. Tinham adivinhos: segundo Jordanes, antes da campanha da Gália os adivinhos de Átila examinaram entranhas e ossos de animais; muitos súbditos eram cristãos (arianos, os Godos) ou pagãos.',
  { tabela: { cab: ['Elemento', 'Fonte', 'Observação'], linhas: [
    ['Espada de Marte', 'Jordanes (a partir de Prisco)', 'Um pastor teria encontrado uma espada antiga, que Átila tomou como sinal de domínio do mundo; as fontes ligam-na ao deus romano da guerra, e é uma **lenda** tardia'],
    ['Adivinhação', 'Jordanes', 'Antes da campanha da Gália (451), adivinhos examinaram entranhas e ossos de animais e previram um mau resultado'],
    ['Culto do céu e do cavalo', 'Hipótese moderna', 'Comparação com outros povos da estepe; **sem prova direta** para os Hunos'],
    ['Funerais', 'Jordanes (Átila)', 'O corpo exposto numa tenda de seda, cavaleiros em círculo a cantar e depois um banquete (a cerimónia é descrita por Prisco/Jordanes; o enterro em três caixões é lenda)'],
    ['Deposição de caldeirões', 'Arqueologia', 'Caldeirões de bronze encontrados perto da água; talvez usados em rituais ou funerais']
  ] } },
  { h: '4. Economia: o tributo e a pilhagem' },
  'A economia dos Hunos tinha três pilares: a **pastorícia** (cavalos, gado, ovelhas), a **guerra e a pilhagem** e, sobretudo no tempo de Átila, o **tributo em ouro**. Os números dizem tudo: de **350 libras** por ano (c. 422) passa-se a **700** (435) e depois a **2100**, mais 6000 de atrasados (443). Uma libra romana tem cerca de 327 g, de modo que 2100 libras correspondem a cerca de **700 kg de ouro por ano**. O ouro era fundido em *solidi* (moedas de 4,5 g) e levado para a corte, onde Átila o redistribuía aos seus chefes. Esta riqueza permitia manter a lealdade; quando secou, com Marciano, em 450, o sistema começou a ruir.',
  { img: 'hun-solido-teodosio', leg: 'Sólido de ouro de Teodósio II, imperador do Oriente (408 – 450): moedas como esta financiaram o poder huno.' },
  { img: 'hun-tributo', leg: 'Entrega de tributo em ouro a enviados hunos junto ao Danúbio, séc. V; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'hun-jordanes', leg: 'Um escriba a trabalhar à luz de uma vela: cena imaginada de como Jordanes, historiador godo do século VI, terá resumido a obra perdida de Cassiodoro e de Prisco na *Getica* (551). Não se conserva nenhum retrato dele. Ilustração gerada por IA.' },
  'Havia também **comércio**: nos mercados de fronteira, os Hunos trocavam cavalos, gado e escravos por tecidos, vinho, cereais e armas. Os romanos estavam proibidos, por tratado, de vender armas aos hunos, mas na prática havia contrabando. A agricultura era feita por súbditos: Prisco refere o milho-painço (para comer) e uma bebida de cevada, o *camos*, e uma de mel, o *medos*.',
  { h: '5. Escrita e língua' },
  'Os Hunos **não escreviam**. A sua língua nunca foi registada e continua a ser um enigma: conhecem-se alguns **nomes** (*Átila*, *Bleda*, *Uldin*, *Rua*) e algumas palavras citadas por Prisco e por Jordanes (*medos*, *camos*, *strava*, esta última um banquete funerário), mas nada que permita classificar a língua com segurança. Alguns nomes parecem germânicos (*Átila* seria um diminutivo gótico, «paizinho», ideia debatida), outros turcos ou iranianos. É possível que, pelo menos nas elites, se falasse **gótico**; Prisco diz que muitos Hunos falavam também **latim** e **gótico** (além do huno), e que os assuntos de estado com o Império eram tratados em latim ou grego por secretários. A tradição oral, dos cantos, desapareceu.',
  { h: '6. Casa e habitação' },
  'Os Hunos mais antigos viviam em **carroças** e **tendas**: Amiano diz que viviam «nos seus carros» e que a mulher e os filhos viajavam com os homens. No tempo de Átila, a elite tinha **casas e salões de madeira** (Prisco descreve o grande salão de Átila, de tábuas bem aplainadas e com paliçadas de madeira), mas o conjunto nunca foi uma cidade. A arqueologia dos Hunos é **pobre**: quase não há povoações, e o que conhecemos vem de túmulos, de achados dispersos e de tesouros enterrados.',
  { h: '7. Alimentação' },
  { lista: [
    '**Carne e leite:** carne de cavalo, de ovelha e de boi, leite e produtos lácteos; a imagem que Amiano deu, a de que comiam carne crua aquecida sob a sela, é um **tópico literário**, que se repete para outros povos da estepe, e não um facto.',
    '**Cereais:** Prisco refere o milho-painço (os Hunos comiam-no na corte de Átila) e pão para os hóspedes romanos.',
    '**Bebidas:** o *medos* (hidromel) e o *camos* (bebida de cevada), servidas em banquetes.',
    '**Banquete:** Átila comia carne em pratos de madeira, com copos de madeira, enquanto os convidados de honra comiam em pratos e copos de prata; a mensagem era a de um rei austero no meio do luxo.',
    '**Caça e pesca:** complemento da dieta.'
  ] },
  { h: '8. Vestuário' },
  'Amiano descreve os Hunos com chapéus de pele, calças de pele de cabra, túnicas de linho e peles de rato do campo cosidas (um ponto onde exagera, quase certamente), e diz que nunca mudavam de roupa até se desfazer. Os túmulos mostram um quadro mais rico para as elites: **ouro**, **fivelas**, **fíbulas** e **diademas** de ouro e vidro colorido, a moda «polícroma» da Europa central do século V. Também há **espelhos de bronze** nos túmulos femininos. Os cavaleiros usavam botas, calças e túnicas ajustadas, adequadas à vida a cavalo.',
  { img: 'hun-vestuario', leg: 'Guerreiro e mulher hunos em trajes do século V; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'hun-craniano', leg: 'Crânio com deformação artificial encontrado em Mozs, Hungria (c. século V), costume praticado por vários povos da estepe e da Europa central. Museu Nacional Húngaro.' },
  { h: '9. Música, bardos e entretenimento' },
  'Na corte de Átila, Prisco descreveu cantores (*bardos*) que celebravam as vitórias do rei, e os convidados, comovidos, choravam ou aplaudiam; outros divertiam o rei com loucos e bobos. Entre eles havia o anão **Zerco**, de origem mourisca, antigo bobo de Bleda, que Átila tratava com ironia e estima. É uma das poucas cenas íntimas que temos desta corte. Os Hunos praticavam também corridas de cavalos e jogos guerreiros.',
  { h: '10. Ciência, medicina e técnica' },
  'Os Hunos não deixaram tratados nem observatórios. O que sabemos da sua **técnica** vem dos objetos: o **arco composto**, a metalurgia do **bronze** (caldeirões) e do **ouro**, a **carroça** e a **selaria**. Prisco e Amiano mostram alguma cultura prática: adaptaram **máquinas de cerco** romanas, e Átila usou engenheiros romanos prisioneiros. Quanto à medicina, só temos a **deformação craniana**, um costume cultural.',
  { h: '11. Deformação craniana' },
  'Um dos traços mais característicos da arqueologia hunica é a **deformação craniana artificial**: na infância, enquanto o crânio ainda é mole, comprimia-se a cabeça com ligaduras ou tábuas, e o resultado era um crânio alongado. O costume, **muito mais antigo que os Hunos** e comum a outros povos (Alanos, Sármatas, grupos germânicos e outros), aparece em muitos túmulos da **bacia dos Cárpatos** do século V. Amiano e Jordanes dizem que os Hunos cortavam as faces dos bebés para impedir a barba, e Sidónio Apolinário descreve narizes achatados; estas imagens vêm de autores hostis e não devem ser tomadas à letra. Um crânio deformado numa sepultura **não prova que o morto fosse huno**, só que seguia um costume prestigiante nessa região.',
  { h: '12. Caldeirões' },
  'Os **caldeirões de bronze** hunos são um dos achados típicos: grandes recipientes fundidos, de formas cónicas e com duas asas, encontrados da Sibéria à Hungria, muitas vezes junto a rios e túmulos. Podiam servir para cozinhar e para banquetes, mas parece ter havido também uma **função cerimonial**. Foram feitos em oficinas da estepe e, ao que parece, também na Europa. São o objeto mais «huno» que há, e, pela dispersão geográfica, um dos indícios das ligações dos Hunos à estepe asiática.',
  { img: 'hun-caldeirao', leg: 'Caldeirão de bronze de tipo huno, séc. IV – V (cópia de 2006, Museu de Kazan): os originais encontram-se desde a estepe até à bacia dos Cárpatos.' },
  { img: 'hun-oficina-caldeirao', leg: 'Fundição de um caldeirão de bronze numa oficina da estepe, séc. V; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '13. Guerra' },
  'A força dos Hunos era a **cavalaria ligeira de arqueiros**. O seu **arco composto**, feito de madeira, tendão e corno e reforçado com placas de osso, era curto, assimétrico e potente: permitia disparar a cavalo a distâncias de várias dezenas de metros. Usavam flechas de bronze ou de ferro de ponta triangular, laços e espadas, e fingiam a retirada para atrair o inimigo (a tática, comum nas estepes). Amiano diz que atacavam em grupos dispersos e que chegavam e partiam num instante. Não tinham muita armadura, ao contrário dos Godos, e o estribo, que só se generalizaria na Europa com os Ávaros, provavelmente não era usado por eles.',
  { img: 'hun-arco-composto', leg: 'Arco composto reconstruído com placas de osso do séc. XII (Museu do Kremlin de Novgorod): o princípio de madeira, osso e tendão é o das armas dos cavaleiros da estepe, como os Hunos.' },
  { img: 'hun-cavaleiro-arqueiro', leg: 'Cavaleiro arqueiro huno a galope, séc. V; reconstituição conjetural. Ilustração gerada por IA.' },
  'Contra cidades fortificadas, os Hunos eram inicialmente fracos, mas aprenderam com os Romanos a usar **arietes** e **torres de cerco**. O seu maior ponto fraco era a logística: um exército de dezenas de milhares de cavalos precisa de pastagens, e foi por isso, em parte, que as campanhas de Átila na Itália (com pestilência e fome) terminaram. O recurso mais eficaz era o **terror**: a fama de crueldade (muitas vezes exagerada) levava cidades a render-se.',
  { img: 'hun-cataunicos-batalha', leg: 'A batalha dos Campos Cataláunicos (451), entre Átila e Aécio com os Visigodos; reconstituição conjetural. Ilustração gerada por IA.' }
];

const personalidades = [
  'Dos Hunos conhecemos sobretudo **nomes** e episódios, vistos de fora, por romanos e godos. Algumas figuras são históricas, outras semi-lendárias, e isso vem dito.',
  { h: 'Balamber (tradição: c. 370)' },
  'Segundo Jordanes, foi o primeiro «rei» dos Hunos e derrotou os Ostrogodos. Mas Jordanes escreveu dois séculos depois, e nenhuma fonte contemporânea o menciona; é possível que o nome seja uma construção literária ou o de um chefe real. A sua existência é **discutida**.',
  { h: 'Uldin (c. 400 – 408)' },
  'O primeiro chefe huno bem documentado. Dominou o baixo Danúbio, matou Gainas e enviou a sua cabeça a Constantinopla (400), ajudou Estilicão contra Radagaiso (406) e, em 408, invadiu a Trácia. Segundo Sozomeno, orgulhoso, disse aos Romanos que podia conquistar todo o mundo, até onde o sol se levanta, e foi traído pelos seus. É o exemplo de como a política huna dependia da lealdade, comprada, dos seguidores.',
  { h: 'Octar e Rua (c. 420 – 434)' },
  '**Octar** e o irmão **Rua** (ou *Rugila*) foram reis em conjunto. Octar morreu em c. 430 numa guerra contra os Burgúndios; Rua, o tio de Átila e de Bleda, impôs o tributo a Constantinopla e morreu em 434, a preparar uma grande campanha.',
  { h: 'Bleda (m. c. 445)' },
  'Irmão de Átila e co-rei até c. 445, quando, segundo as fontes, foi morto a mando do irmão. Tem tão pouco rasto histórico que é difícil saber qual era o seu papel; Prisco refere o seu bobo, o anão **Zerco**, que o acompanhava na guerra.',
  { h: 'Átila (m. 453)' },
  'O rei dos Hunos de 434 a 453. Prisco, que o conheceu, descreve-o baixo, de peito largo, cabeça grande, olhos pequenos, barba rala e andar altivo, e sóbrio nos hábitos. Era um hábil político: soube explorar os medos do Império, rodear-se de secretários romanos e jogar com as rivalidades entre os povos. Os autores cristãos viram-no como um castigo divino; as fontes germânicas fazem dele um rei. O que sabemos com certeza é pouco, e vem de Prisco e de Jordanes; a imagem de um «bárbaro sanguinário» vem sobretudo de autores posteriores.',
  { img: 'hun-atila-gravura', leg: 'Estátua de cera de Átila (Istambul): imagem popular moderna; nenhum retrato contemporâneo se conserva.' },
  { h: 'Onegésio' },
  'O principal conselheiro de Átila, segundo Prisco, e dono de um balneário de pedra. Era o segundo homem da corte, a quem Átila confiava as relações com os estrangeiros. Mostra que a corte huna tinha uma elite de aristocratas e conselheiros, e não só de guerreiros.',
  { h: 'Kreka (Hereca)' },
  'A mulher principal de Átila, que Prisco visitou. Recebeu-o com grande cerimónia, em salas forradas de tapetes de feltro. É uma das raras mulheres da elite huna de que sabemos o nome.',
  { h: 'Ildico' },
  'A jovem com quem Átila casou em 453, e na noite de núpcias o rei morreu. O seu nome (provavelmente germânico, *Hildico*) pode ter dado origem a **Kriemhild** nos *Nibelungos*, e o motivo da sua história (a noiva que mata o marido) é uma das lendas mais divulgadas, sem base nas fontes: Jordanes afirma que ela foi encontrada em prantos junto ao corpo.',
  { h: 'Orestes e Edecão' },
  '**Orestes**, um romano da Panónia, foi secretário de Átila e embaixador em Constantinopla; o filho, **Rómulo Augústulo**, foi o último imperador romano do Ocidente (475 – 476). **Edecão** (*Edeco*), um chefe de origem germânica (ou cita), foi um dos comandantes de Átila e pai de **Odoacro**, segundo uma hipótese; foi ele quem, na embaixada de 449, aceitou, e depois denunciou, o plano para matar Átila. Ilustram como os Hunos eram um mundo de gente de muitas origens.',
  { h: 'Aécio (c. 391 – 454)' },
  'Chamado «o último dos Romanos», Flávio **Aécio** foi o general que travou Átila. Passou a juventude como refém entre os Hunos e usou-os, durante vinte anos, como mercenários nas suas guerras na Gália. Venceu Átila nos Campos Cataláunicos (451). Foi assassinado em 454 pelo próprio imperador Valentiniano III, em Roma.',
  { h: 'Teodorico I (m. 451)' },
  'Rei dos Visigodos, aliado de Aécio nos Campos Cataláunicos, onde morreu. Jordanes conta que o corpo foi encontrado entre os mortos e honrado pelo seu povo com cantos. Foi sucedido por **Turismundo**.',
  { h: 'Leão I, o Grande (papa de 440 a 461)' },
  'Chefiou a embaixada que, em 452, encontrou Átila junto ao Míncio. Segundo Próspero de Aquitânia, foi decisivo; porém, os historiadores modernos consideram que a fome, a doença e a ameaça de Marciano tiveram um peso importante. A cena, muito pintada, dá ao papado um prestígio novo.',
  { h: 'Prisco de Pânio (c. 410 – depois de 472)' },
  'Diplomata e historiador de Constantinopla, autor de uma história do seu tempo em grego, hoje perdida e conhecida só por fragmentos e por Jordanes. É a nossa melhor fonte sobre Átila, porque esteve na corte em 449 e escreveu o que viu, com curiosidade e sem fúria. Foi ele quem nos deixou o relato do banquete, dos bardos, do bobo e das conversas com um grego que escolhera viver entre os Hunos.',
  { h: 'Ardarico dos Gépidas' },
  'Rei dos Gépidas e conselheiro leal de Átila, que o tratava com grande estima, segundo Jordanes. Em 454, dirigiu a revolta dos povos súbditos que derrotou os filhos de Átila no Nedao e pôs fim ao poder huno.',
  { h: 'Ellac e Dengizique' },
  '**Ellac**, o filho mais velho de Átila, foi morto no Nedao (454). **Dengizique**, outro filho, atacou o Império do Oriente em 468 – 469 e morreu em combate, com a cabeça exposta em Constantinopla, no fim da história huna na Europa.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**A lição do tributo:** Átila mostrou até onde pode ir um chefe que vive da ameaça, e como o Império do Oriente, rico e murado, sobreviveu pagando enquanto o Ocidente se desfazia.',
    '**Efeito sobre a Europa:** a pressão huna ajudou a empurrar Godos, Vândalos, Burgúndios e outros para o interior do Império, contribuindo para a formação dos reinos germânicos que sucederam a Roma.',
    '**A cavalaria de arqueiros:** a tradição da estepe, de arcos compostos e mobilidade, passou a Ávaros, Magiares, Turcos e Mongóis.',
    '**Palavras e imagens:** «huno» e «vândalo» ficaram como insultos; *Átila* é ainda um nome próprio muito usado na Hungria e na Turquia.',
    '**Uma epopeia:** o *Nibelungenlied* e as sagas nórdicas guardaram a memória de Átila como rei, longe da imagem de monstro.'
  ] },
  { h: 'Arte e arqueologia' },
  'Os Hunos não deixaram arquitetura nem arte monumental, e a sua marca material é discreta: **caldeirões de bronze**, **espelhos**, **fivelas**, **diademas** de ouro e vidro colorido, **flechas** e restos de arcos, e túmulos com **crânios deformados**. Entre os achados mais importantes estão sepulturas de elites da bacia dos Cárpatos, como a de Szeged-Nagyszéksós, do século V. A maior parte das «joias hunas» pertence, na realidade, a uma moda **polícroma** partilhada por Godos, Alanos e Hunos. Por isso a **arqueologia dos Hunos é muito debatida**: raramente é possível dizer se um objeto é «huno» ou apenas da época.',
  { img: 'hun-nibelungenlied', leg: 'Página do *Nibelungenlied* (c. 1200), poema épico alemão em que Átila aparece como o rei Etzel.' },
  { h: 'Lenda e facto' },
  { tabela: { cab: ['Ideia popular', 'O que dizem as fontes', 'Avaliação'], linhas: [
    ['«Flagelo de Deus»', 'Nenhuma fonte contemporânea dá este título a Átila; surge em textos cristãos e crónicas medievais, a ver nele um castigo divino', '**Lenda tardia**'],
    ['«Onde passa o cavalo de Átila, a erva não volta a crescer»', 'Dito popular atribuído a Átila, sem fonte antiga', '**Lenda**'],
    ['Átila encontrou a «Espada de Marte»', 'Prisco/Jordanes contam o achado de uma espada por um pastor', '**Tradição antiga**, mas de interpretação política duvidosa'],
    ['Átila enterrado em três caixões de ouro, prata e ferro', 'Jordanes; coveiros mortos para guardar o segredo', '**Lenda**: nunca se achou nenhum túmulo'],
    ['O papa Leão salvou Roma sozinho', 'A tradição liga a retirada à autoridade de Leão; Rafael pintou S. Pedro e S. Paulo no céu', '**Exagero**: fome, doença e as tropas de Marciano pesaram'],
    ['Átila foi assassinado por Ildico', 'Prisco e Jordanes: hemorragia durante a noite', '**Lenda posterior**; a causa natural é a mais provável'],
    ['Os Húngaros descendem dos Hunos', 'Crónicas húngaras medievais (Simão de Kéza, séc. XIII)', '**Falso como descendência direta**; os Magiares chegaram c. 895'],
    ['Os Hunos eram só destruidores', 'Fontes romanas hostis; Prisco mostra uma corte complexa', '**Simplificação**: o ouro e a diplomacia contaram tanto como a guerra']
  ] } },
  { h: 'Átila nos Nibelungos' },
  'A memória de Átila foi absorvida, na Idade Média, pela épica germânica. No *Nibelungenlied* (c. 1200), **Etzel** é um rei generoso, quase passivo, casado com **Kriemhild**, e é na sua corte que se dá o massacre final dos Burgúndios, uma lembrança deformada da destruição do reino burgúndio de Worms por Aécio e pelos Hunos em 436 – 437. Nas sagas nórdicas, **Atli** (*Atlakviða*) mata o cunhado Gunnar. É um fenómeno muito curioso: o rei mais temido do século V transformou-se, séculos depois, em personagem de poemas cavaleirescos.',
  { img: 'hun-chronicon-pictum', leg: 'Átila rei dos Hunos na *Crónica Iluminada* húngara (*Chronicon Pictum*, séc. XIV), em que se afirma a ascendência huna dos Húngaros.' },
  { h: 'A queda dos Hunos' },
  'Porque razão o império desapareceu tão depressa? Os historiadores apontam vários motivos, que se combinam:',
  { lista: [
    '**Dependência do ouro:** o poder assentava no tributo; quando Marciano o recusou (450), o sistema ficou sem fundos.',
    '**Derrotas e reveses:** os Campos Cataláunicos (451) e a retirada de Itália (452) arruinaram o prestígio de Átila.',
    '**Morte súbita de Átila (453):** não deixou herdeiro único e, entre os filhos, houve rivalidade.',
    '**Revolta dos súbditos:** os Gépidas de Ardarico, Ostrogodos e outros sacudiram o jugo em 454.',
    '**Fraqueza estrutural:** um império de lealdades pessoais e de chefes, sem instituições, sobrevivia mal a um rei.'
  ] },
  'Os Hunos não foram exterminados: os que ficaram misturaram-se com outros povos da estepe e do Danúbio. Alguns historiadores veem neles antepassados de grupos como os **Búlgaros** e os **Cutrigures**, mas esta ligação é hipotética.',
  { h: 'A redescoberta dos Hunos' },
  'Do Renascimento até ao século XIX, os Hunos foram sobretudo um tema literário e artístico: Rafael, Delacroix, Verdi (a ópera *Attila*, 1846) e, no século XX, os filmes. A imagem popular fixou-se num bárbaro implacável, e a Primeira Guerra Mundial usou o termo «Hunos» como propaganda contra os alemães (o uso vem de um discurso do Kaiser Guilherme II, em 1900, que pediu aos soldados enviados à China que se comportassem como os Hunos). A investigação científica, essa, avançou com Maenchen-Helfen, depois com a **arqueologia da Panónia** e, desde 2018, com o **ADN antigo**, que mostra um império de muitas origens.',
  { img: 'hun-xiongnu-bronze', leg: 'Placa de cinto de bronze com homens a lutar, região de Ordos (norte da China), séc. II – I a.C.: arte do tempo dos Xiongnu, de quem os Hunos, segundo uma hipótese debatida, descenderiam.' },
  { caixa: 'Onde ver os Hunos', texto: 'Na **Hungria**: o **Museu Nacional Húngaro**, em Budapeste, tem caldeirões, joias e achados de túmulos da época huna; o **Museu de Aquincum** mostra a Panónia romana. Em **Itália**, **Aquileia** conserva as ruínas romanas e o seu museu, e o **Vaticano** guarda o fresco de Rafael sobre Leão I e Átila. Em **Istambul**, as **Muralhas Teodosianas**. No **Museu Britânico** e no **Louvre** há objetos da estepe e da Antiguidade tardia. Em geral, o melhor é visitar o mundo romano em que os Hunos irromperam.' }
];

const quiz = [
  { p: 'De que região vieram os Hunos para a Europa, por volta de 370?', op: ['Das estepes a leste do Volga', 'Do deserto da Arábia', 'Dos Alpes', 'Das ilhas britânicas'], certa: 0, exp: 'Segundo Amiano Marcelino, atravessaram o Volga e o Don e atacaram primeiro os Alanos.' },
  { p: 'A relação entre os Hunos e os Xiongnu da Ásia Central é…', op: ['Um facto provado', 'Uma hipótese debatida', 'Uma invenção medieval', 'Uma certeza genética absoluta'], certa: 1, exp: 'Foi proposta no século XVIII por Joseph de Guignes, e continua em discussão: há um intervalo de cerca de dois séculos sem documentação.' },
  { p: 'Qual foi o efeito imediato da chegada dos Hunos aos Godos?', op: ['Fizeram-nos aliados de Roma de imediato', 'Os Godos expulsaram os Hunos', 'Os Godos pediram asilo no Império, em 376', 'Os Godos desapareceram'], certa: 2, exp: 'A pressão huna levou os Tervíngios a atravessar o Danúbio em 376, e dois anos depois derrotaram os Romanos em Adrianópolis.' },
  { p: 'Quem foi o historiador romano que escreveu a primeira descrição dos Hunos?', op: ['Tácito', 'Lívio', 'Plínio, o Velho', 'Amiano Marcelino'], certa: 3, exp: 'Amiano Marcelino, no livro XXXI da sua história, escrito por volta de 390.' },
  { p: 'Qual era a arma principal dos guerreiros hunos?', op: ['A catapulta', 'O arco composto, usado a cavalo', 'A lança de falange', 'O gládio de infantaria'], certa: 1, exp: 'O arco composto, curto e potente, tornava-os temíveis como cavaleiros-arqueiros.' },
  { p: 'Em 435, o tratado de Margus fez o tributo anual do Império do Oriente subir de 350 para…', op: ['100 libras de ouro', '700 libras de ouro', '10 000 libras de ouro', 'Nenhuma, passou a ser zero'], certa: 1, exp: 'Passou a 700 libras de ouro por ano, e em 443 subiu para 2100, com 6000 de atrasados.' },
  { p: 'Quem governou os Hunos com Átila até c. 445?', op: ['Aécio', 'Uldin', 'Bleda', 'Ardarico'], certa: 2, exp: 'Bleda, irmão de Átila, foi co-rei até morrer, c. 445, ao que parece às mãos do irmão.' },
  { p: 'Quem nos deixou o testemunho direto da corte de Átila, em 449?', op: ['O diplomata Prisco de Pânio', 'O poeta Virgílio', 'O papa Leão I', 'O historiador Heródoto'], certa: 0, exp: 'Prisco acompanhou uma embaixada romana e descreveu o rei, o palácio de madeira, os banquetes e os bardos.' },
  { p: 'Que obra impediu Átila de tomar Constantinopla em 447?', op: ['O Coliseu', 'Uma frota de trirremes', 'O Muro de Adriano', 'As muralhas Teodosianas, reconstruídas depois de um terramoto'], certa: 3, exp: 'O prefeito Constantino reconstruiu as muralhas em cerca de dois meses, e a cidade nunca foi tomada.' },
  { p: 'Onde se travou, em 451, a grande batalha entre Átila e Aécio, com os Visigodos?', op: ['Em Adrianópolis', 'Nos Campos Cataláunicos, na Gália', 'Em Roma', 'No Nedao'], certa: 1, exp: 'Foi um empate tático, mas Átila recuou, e Teodorico I morreu. O local exato é discutido.' },
  { p: 'Quem se encontrou com Átila perto do Míncio, em 452?', op: ['Constantino', 'Júlio César', 'Uma embaixada em que seguia o papa Leão I', 'Teodósio II'], certa: 2, exp: 'A retirada de Átila teve várias causas: a fome, a doença, e as tropas de Marciano; o papel de Leão foi exagerado pela tradição.' },
  { p: 'Como, segundo as fontes antigas, morreu Átila em 453?', op: ['Em batalha', 'Envenenado por Aécio', 'Numa hemorragia, na noite de núpcias', 'De velhice, aos 90 anos'], certa: 2, exp: 'Prisco e Jordanes falam de uma hemorragia nasal que o sufocou durante o sono; a causa natural é a mais provável.' },
  { p: 'Que batalha, em 454, fez desmoronar o império dos Hunos?', op: ['O Nedao', 'Adrianópolis', 'Cumas', 'Utus'], certa: 0, exp: 'No Nedao, os povos súbditos, dirigidos pelo gépida Ardarico, derrotaram os Hunos, e Ellac morreu.' },
  { p: 'Qual destas afirmações sobre a deformação craniana está certa?', op: ['Só os Hunos a praticavam', 'Era um costume de vários povos e não prova, por si só, que o morto fosse huno', 'Era um castigo para criminosos', 'Foi inventada por Átila'], certa: 1, exp: 'Os Alanos, os Sármatas e alguns grupos germânicos também a praticavam; é um costume de prestígio, muito anterior aos Hunos.' },
  { p: 'Em que obra medieval aparece Átila como o rei «Etzel»?', op: ['A Divina Comédia', 'A Canção de Rolando', 'O Nibelungenlied', 'O Beowulf'], certa: 2, exp: 'No Nibelungenlied (c. 1200), Etzel é um rei generoso, casado com Kriemhild; a história recorda, deformada, a destruição do reino burgúndio em 436 – 437.' }
];

export default {
  id: 'hunos',
  cor: '#6a4a3a',
  emblema: '../assets/img/hunos.png',
  nome:    { pt: 'Hunos', en: 'Huns' },
  periodo: { pt: 'c. 370 – 469 d.C.', en: 'c. AD 370 – 469' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
