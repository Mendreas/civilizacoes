// PARTOS — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas na «cronologia média»; a história parta tem muitas datas debatidas (sobretudo antes de 57 a.C.), porque quase não restam fontes escritas pelos próprios partos: a maior parte do que sabemos vem de gregos, romanos e chineses, que eram vizinhos ou inimigos. a.C./d.C.
// Aquemênidas e Sassânidas (tratados na civilização Persa) só de passagem.
// Imagens: cada {img:'id'} procura o ficheiro  partos/img/id.jpg  (ver IMAGENS_PARTOS.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'Os **partos** foram o povo que, de cerca de **247 a.C.** a **224 d.C.**, construiu o segundo grande império iraniano depois dos Aqueménidas e o único rival de Roma que esta nunca conseguiu conquistar. A dinastia chamava-se **arsácida**, de **Arsaces I**, o chefe dos **parnos**, um povo de cavaleiros iranófonos vindos das estepes da Ásia Central, que se instalou na região de **Pártia**, no nordeste do atual Irão e no sul do Turquemenistão, então uma satrapia do império selêucida. A partir daí os arsácidas foram tomando o planalto iraniano, a Mesopotâmia e territórios que iam do **Eufrates** ao **Indo**, e os seus reis adotaram o título de **«Rei dos Reis»**.',
    'Governaram a partir de **Ctesifonte**, no Tigre, com um poder partilhado entre o rei, as grandes casas nobres e reinos vassalos, e sem uma administração tão centralizada como a persa. Lutavam com **arqueiros a cavalo** e **cavaleiros couraçados (catafractos)**, e em **Carras** (53 a.C.) destruíram um exército romano. Controlaram o troço central da **Rota da Seda**, cobrando portagens entre a China e o Mediterrâneo. Eram uma cultura de síntese: usavam o grego nas moedas e na diplomacia, mas foram deixando crescer a língua, a religião e as tradições iranianas. O império acabou quando um vassal do sul, **Ardashir I**, de Fars, derrotou o último rei arsácida e fundou o Império Sassânida, em **224 d.C.**'
  ] },
  { img: 'par-mapa-imperio', leg: 'Mapa do Império Parta (e do vizinho Império Cuchana), que na sua maior extensão, no séc. I a.C., ia aproximadamente do Eufrates ao Indo.' },
  { h: 'Onde ficava' },
  'O berço dos partos era a **Pártia**, uma região de planaltos e de oásis a sul das montanhas de Kopet Dag, que hoje é dividida entre o **nordeste do Irão** (Khorasan e Golestão) e o **sul do Turquemenistão**. É uma terra de cavalos: os antigos celebravam os cavalos «nisaianos», criados na planície de Nisa, perto da atual Ashgabat, como os melhores da Ásia. De lá o império cresceu para sul e para oeste, com o planalto iraniano (**Média** e **Fars**), a **Mesopotâmia** (o Tigre e o Eufrates), a **Arménia** como reino aliado ou disputado, e, a leste, **Margiana** (Merv), a **Báctria** e o **Seistão**, onde confinava com povos nómadas e depois com os kushans.',
  'As capitais mudaram com o tempo. **Hecatompylos** (identificada com Shahr-e Qumis, no Irão) foi uma das primeiras residências dos reis; **Nisa** era uma fortaleza real e centro religioso; **Ecbatana** (Hamadã) servia de residência de verão; e, a partir do séc. II a.C., **Ctesifonte** (junto à grande cidade helenística de **Selêucia do Tigre**) tornou-se, passo a passo, a capital de inverno e o centro do império. O poder dos arsácidas estava, de facto, onde estavam o rei e a sua corte, que se deslocava consoante as estações.',
  { img: 'par-ritao-nisa', leg: 'Ritão (taça para beber) de marfim de Nisa, séc. II a.C., com cena de inspiração helenística: um dos achados mais famosos do sítio; Turquemenistão.' },
  { img: 'par-dracma-arsacida', leg: 'Dracma de prata de Arsaces I (c. 247 – 217 a.C.), fundador da dinastia arsácida: o rei de perfil, com o chapéu de feltro de tipo cita, e no reverso um arqueiro sentado.' },
  { h: 'Quando existiu' },
  'A cronologia parta é uma das mais difíceis da Antiguidade. Os próprios partos contavam os anos a partir de **247 a.C.** (a «Era Arsácida»), mas os historiadores discutem o que essa data representa: a chegada de Arsaces à Pártia, a sua coroação ou outra coisa. Há quem proponha uma data um pouco posterior, perto de 238 a.C. Entre o fim do séc. II a.C. e 57 a.C. a sucessão dos reis é incerta, e os especialistas falam por vezes de uma «idade das trevas» partas, porque os textos faltam. As fases abaixo são aproximadas.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Origens', 'c. 247 – 171 a.C.', 'Arsaces I e os parnos tomam a Pártia; guerras com os Selêucidas; Antíoco III submete os partos (c. 209)'],
    ['Expansão', 'c. 171 – 91 a.C.', 'Mitridates I toma a Média e a Mesopotâmia (141); Mitridates II, «o Grande», restaura o império; primeiro contacto com a China e com Roma'],
    ['Conflito com Roma', 'c. 91 a.C. – 1 d.C.', 'Orodes II; Carras (53); Pacoro e Labieno; campanha de António (36); devolução das insígnias a Augusto (20)'],
    ['Maturidade e guerras romanas', 'c. 1 – 191 d.C.', 'Vologases I e a Arménia; Trajano (114–117), Vero (161–166); riqueza da Rota da Seda; cidades como Hatra e Dura-Europos'],
    ['Declínio e queda', 'c. 191 – 224 d.C.', 'Guerras civis arsácidas; Septímio Severo saqueia Ctesifonte (197); Caracala; Ardashir I vence em Hormozdgan (224)']
  ] } },
  { h: 'Quem eram os partos?' },
  'Os **parnos** eram um povo nómada de língua iraniana, ligado, segundo o geógrafo grego **Estrabão**, à confederação dos **dahas**, que vivia a leste do mar Cáspio. Ao ocuparem a Pártia, tornaram-se os «partos» para os gregos e para os romanos, nome que vem do persa antigo *Parthava*, designação da região. A sua língua, o **parta**, é uma língua iraniana do noroeste, parente (mas diferente) do persa, que é do sudoeste; veio a ter muita influência no arménio, que ainda hoje guarda muitas palavras de origem parta.',
  'Um problema de fontes: **não sobrevive nenhuma história escrita por um parto**. Temos moedas, inscrições curtas, milhares de **ostraca** (cacos de cerâmica com texto) de Nisa, documentos de Dura-Europos e os relatos de gregos, de romanos e de chineses, que escreveram sobre um adversário temido ou de um vizinho distante. Os romanos descrevem-nos às vezes com admiração, outras com desprezo («traiçoeiros», «efeminados»), e esses retratos dizem mais sobre Roma do que sobre os partos. A história que aqui se conta é, por isso, em muitos pontos, uma reconstrução.',
  { h: 'Porque importam' },
  { lista: [
    '**O rival de Roma:** durante quase três séculos, a Pártia foi a única grande potência vizinha de Roma. Os romanos venceram batalhas, tomaram Ctesifonte várias vezes, mas nunca conseguiram manter o território.',
    '**Uma nova forma de guerra:** a combinação de **arqueiros a cavalo** e de **cavalaria pesada** derrotou Crasso em Carras e inspirou o exército romano, bizantino e muitos outros.',
    '**A Rota da Seda:** os partos controlavam o troço central do caminho entre a China e o Mediterrâneo e viveram, em boa parte, do comércio e das portagens.',
    '**Uma ponte cultural:** misturaram elementos gregos, iranianos e mesopotâmicos, e foram intermediários entre a China, a Índia e Roma.',
    '**A arquitetura:** o **iwan** (uma grande sala abobadada, aberta numa das faces), que depois se tornaria um elemento central da arquitetura persa e islâmica, ganha forma neste período, em edifícios como os de Hatra e de Assur.',
    '**A herança iraniana:** os partos preservaram a tradição iraniana depois de Alexandre, e prepararam o terreno para os Sassânidas.'
  ] },
  { caixa: 'Os partos hoje', texto: 'Dos sítios partos, três merecem destaque: **Nisa**, no Turquemenistão, Património Mundial da **UNESCO** desde **2007** («Fortalezas Partas de Nisa»); **Hatra**, no norte do Iraque, Património Mundial desde **1985**, gravemente danificada em 2015; e **Ctesifonte**, no Iraque, cujo arco monumental (Taq Kasra) é sassânida mas que se ergue no sítio da capital parta. A expressão inglesa *parting shot* é, segundo os dicionários, uma deformação de *Parthian shot*, e a nossa «seta parta» guarda a mesma lembrança do disparo para trás dos arqueiros partas. Na identidade nacional do Irão, os partos têm menos lugar do que os Aqueménidas e os Sassânidas, mas os historiadores consideram-nos um elo fundamental.' }
];

const linha = [
  'Esta linha do tempo segue a história parta desde a satrapia selêucida até à queda diante de Ardashir. Para os séculos III e II a.C., muitas datas e até a ordem dos reis são incertas; as datas debatidas estão assinaladas.',
  { linha: [
    { d: 'c. 330 – 250 a.C.', t: 'A Pártia antes dos partos', x: 'A região da Pártia (a norte do planalto iraniano) faz parte do império aqueménida, é conquistada por **Alexandre Magno** (330 a.C.) e, depois da sua morte, passa para os **Selêucidas**. Por volta de meados do séc. III a.C., o sátrapa **Andrágoras** governava a Pártia e a Hircânia, e acabou por se tornar independente: há moedas com o seu nome.' },
    { d: 'c. 247 a.C.', t: 'Arsaces I e os parnos', x: 'O chefe dos **parnos**, **Arsaces**, invade a Pártia e mata Andrágoras, segundo as fontes antigas (Estrabão, Justino). Os arsácidas contarão os seus anos a partir de **247 a.C.**; porém, a data é debatida (há quem proponha c. 238 a.C.). Arsaces I é lembrado como o fundador da dinastia e do povo parto; a tradição liga-o a **Nisa**, que seria a sua primeira fortaleza real.' },
  ] },
  { img: 'par-arsaces-coroacao', leg: 'Cerimónia de Arsaces I com os seus nobres e cavaleiros, no nordeste do Irão, c. 247 a.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 209 a.C.', t: 'Antíoco III submete os partos', x: 'O rei selêucida **Antíoco III** marcha para o Leste, toma Hecatompylos e obriga o rei parto da época (**Arsaces II**, segundo a leitura mais comum) a aceitar a sua autoridade. É um recuo temporário: depois da derrota dos Selêucidas diante de Roma (Magnésia, 190 a.C.), os partos voltam a crescer.' },
    { d: 'c. 171 – 132 a.C.', t: 'Mitridates I, o grande conquistador', x: 'O reinado de **Mitridates I** é o início do império. Ocupa a **Média** e **Ecbatana** (c. 148 – 147 a.C.), toma **Selêucia do Tigre** (141) e a Babilónia, e depois **Susa** e as terras do Elam. Em Selêucia é recebido pela população grega e cunha moeda; os arsácidas passam a usar o título de **«Rei dos Reis»**, que remete para os reis aqueménidas.' },
    { d: 'c. 138 a.C.', t: 'O rei selêucida prisioneiro', x: 'O rei selêucida **Demétrio II** é derrotado e capturado pelos partos. Mitridates casa-o com a sua filha **Rodoguna** e mantém-no na corte durante anos, uma humilhação que simboliza o fim do domínio selêucida a leste do Eufrates.' },
    { d: '129 – 124 a.C.', t: 'Os selêucidas contra-atacam, os nómadas invadem', x: 'O último grande esforço selêucida, de **Antíoco VII**, recupera a Babilónia, mas é aniquilado em 129 a.C., na Média. Logo depois, povos nómadas vindos do Leste (saces e tocarianos) atacam as fronteiras orientais, e dois reis partos, **Fraates II** e **Artabano I**, morrem em combate (c. 128 e 124/123 a.C.).' },
    { d: 'c. 124/123 – 91 a.C.', t: 'Mitridates II, «o Grande»', x: 'Reocupa a Babilónia, vence os nómadas e conquista de novo a Média e o Elam; em 97 a.C. derrota o rei da Arménia, **Artavasdes I**, e leva o filho deste, **Tigranes**, como refém. É o rei que dá ao império a forma que terá durante dois séculos, e o título «Rei dos Reis» aparece de forma sistemática nas suas moedas.' },
    { d: 'c. 121 – 115 a.C.', t: 'Os embaixadores chineses', x: 'Uma delegação do imperador **Wu** da dinastia Han, ligada às viagens de **Zhang Qian** à Ásia Central, chega à corte parta; as fontes chinesas chamam à Pártia **Anxi** (talvez de «Arsaces»). Abrem-se relações regulares e o caminho que os europeus chamarão Rota da Seda. A data exata varia consoante as fontes.' },
  ] },
  { img: 'par-zhang-qian', leg: 'Zhang Qian parte para o Ocidente, pintura mural das grutas de Mogao, Dunhuang (China), época Tang.' },
  { linha: [
    { d: 'c. 96 – 92 a.C.', t: 'O primeiro encontro com Roma', x: 'Junto ao Eufrates, o magistrado romano **Sila** encontra-se com um embaixador parto, **Orobazo**. É o primeiro contacto entre as duas potências; é difícil dizer o que acordaram, e a tradição romana apresenta o episódio como uma humilhação parta, o que as fontes partas não confirmam.' },
  ] },
  { img: 'par-moeda-mitridates2', leg: 'Moeda de Mitridates II, «o Grande» (c. 124/123 – 91 a.C.), com o rei de perfil e o título «Rei dos Reis» em grego.' },
  { linha: [
    { d: 'c. 91 – 57 a.C.', t: 'Os anos obscuros', x: 'Seguem-se décadas de rivalidades entre pretendentes arsácidas, com datas e nomes incertos. A Arménia de **Tigranes II** cresce à custa dos partos e reconhece depois o poder romano de **Pompeu** (c. 66 a.C.). O rei parto **Fraates III** (c. 70 – 57 a.C.) é cortejado pelos dois lados e morre assassinado pelos filhos.' },
    { d: 'c. 57 a.C.', t: 'Orodes II chega ao poder', x: 'Com **Orodes II** (c. 57 – 38 a.C.), que chegou ao trono depois de uma guerra com o irmão, a cronologia torna-se muito mais fiável. Ctesifonte passa a ser a capital do império (c. 58 a.C., segundo uma leitura), mas o rei e a corte continuam a mudar de residência.' },
    { d: '9 de junho de 53 a.C.', t: 'A batalha de Carras', x: 'O general romano **Marco Licínio Crasso**, com cerca de **40 000 homens** (a maioria infantaria pesada), invade a Mesopotâmia e é desbaratado perto de **Carras** (hoje Harran, na Turquia) por **Surena**, general parto, com cerca de **10 000 cavaleiros**, entre eles mil catafractos e os restantes arqueiros a cavalo, apoiados por uma caravana de camelos com setas. Os arqueiros disparam sem parar, os romanos não conseguem alcançá-los. O filho de Crasso, **Públio**, morre; em seguida, durante uma conversação para tréguas, morre o próprio **Crasso**. Segundo Plutarco, cerca de 20 000 romanos morrem e 10 000 são presos. É uma das piores derrotas de Roma.' },
  ] },
  { img: 'par-carras', leg: 'Cena da batalha de Carras (53 a.C.): arqueiros e catafractos partas cercam a infantaria romana; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'par-harran', leg: 'Harran, no sudeste da Turquia, a antiga Carras: a planície onde se travou, em 53 a.C., a batalha entre Crasso e Surena.' },
  { linha: [
    { d: '53 a.C.', t: 'O banquete de Orodes', x: 'Plutarco conta que, quando a cabeça de Crasso chegou à corte arménia, onde Orodes II e o rei **Artavasdes** assistiam a uma tragédia grega de Eurípides, as *Bacantes*, o ator principal usou a cabeça como adereço, na cena em que Agave traz a cabeça de Penteu. A história é famosa e plausível (a corte parta apreciava o teatro grego), mas é uma anedota contada por um autor romano, e deve ser lida com cautela.' },
  ] },
  { img: 'par-bacantes', leg: 'O banquete de Orodes II e Artavasdes, com a cabeça de Crasso usada num espetáculo das Bacantes, segundo Plutarco; cena imaginada. Ilustração gerada por IA.' },
  { img: 'par-marco-antonio', leg: 'Busto de Marco António (Museu Arqueológico Nacional, Madrid), que invadiu a Pártia em 36 a.C.' },
  { linha: [
    { d: '51 – 38 a.C.', t: 'Os partos invadem a Síria', x: 'O príncipe **Pacoro I**, filho de Orodes, ataca a Síria romana em 51 a.C. e volta em força em 40 a.C., juntamente com o general romano rebelde **Labieno** (que apoiara Bruto e Cássio): ocupam a Síria e parte da Ásia Menor. Em **38 a.C.**, o general romano **Ventídio** vence e mata Pacoro em **Gindaro**, e os partos recuam. Orodes, abalado, abdica, e acaba morto, segundo as fontes romanas, às mãos do filho **Fraates IV**.' },
  ] },
  { linha: [
    { d: '36 a.C.', t: 'António contra Fraates IV', x: 'O triúnviro **Marco António** invade a Média Atropatene com cerca de 100 000 homens (aliados incluídos, segundo Plutarco), mas os partos, comandados por **Fraates IV** (c. 38 – 2 a.C.), destroem o comboio de máquinas de cerco perto de **Fraaspa** e a sua retaguarda; o aliado arménio, Artavasdes II, abandona-o. A retirada, no inverno, custa-lhe, segundo Plutarco, cerca de 24 000 homens (20 000 de infantaria e 4 000 de cavalaria). Foi a última grande tentativa romana contra a Pártia no tempo da República.' },
  ] },
  { img: 'par-fraaspa', leg: 'Cerco de Fraaspa (36 a.C.): cavaleiros partas atacam a coluna de máquinas de cerco romanas; reconstituição conjetural. Ilustração gerada por IA.' },
  { linha: [
    { d: '20 a.C.', t: 'A devolução das insígnias', x: 'Por um acordo com **Augusto**, Fraates IV devolve as **insígnias das legiões** perdidas em Carras e os prisioneiros que restavam, em troca de um filho seu que o usurpador Tiridates II tinha levado para Roma. Para os partos, foi um pequeno preço; Augusto fez disso uma grande vitória diplomática: mandou-a cunhar em moedas e representá-la na couraça da famosa estátua de **Prima Porta**.' },
  ] },
  { img: 'par-augusto-prima-porta', leg: 'Augusto de Prima Porta; no centro da couraça, um parto (identificação habitual) entrega a um romano uma insígnia, em alusão ao acordo de 20 a.C. (cópia em mármore de um original em bronze; Museus do Vaticano).' },
  { linha: [
    { d: 'c. 2 a.C. – 4 d.C.', t: 'Musa e Fraates V', x: 'Fraates IV tinha recebido de Augusto uma escrava italiana, **Musa**, que se tornou rainha e convenceu o rei a enviar os restantes filhos para Roma. O filho de ambos, **Fraates V** (Fraataces), assumiu o trono (c. 2 a.C.), reinando com a mãe, que aparece com ele nas moedas. A nobreza, que não aceitava um rei de sangue não arsácida, expulsou-os em 4 d.C. Segundo Flávio Josefo, o rei teria casado com a mãe, acusação que os historiadores consideram suspeita.' },
    { d: 'c. 10 – 38 d.C.', t: 'Artabano II', x: 'O rei **Artabano II**, apoiado pela nobreza, depõe **Vonones I**, um príncipe educado em Roma, de que os nobres partos desgostavam por ter «maneiras romanas». A crise mostra o poder da aristocracia, que fazia e desfazia reis.' },
    { d: 'c. 51 – 77/80 d.C.', t: 'Vologases I e a Arménia', x: 'O rei **Vologases I** instala o irmão **Tiridates** no trono da Arménia. Seguem-se uma guerra com Roma (58 – 63), em que o general **Córbulo** obtém vitórias e o seu sucessor **Peto** sofre uma derrota em **Rândeia** (62), e uma solução de compromisso: o rei da Arménia seria da família arsácida, mas receberia a coroa de Roma. Em **66 d.C.**, **Tiridates** viaja a Roma e é coroado por **Nero**. Vologases funda também uma nova cidade, **Vologasias**, perto de Ctesifonte.' },
  ] },
  { img: 'par-nero', leg: 'Busto de Nero, que coroou Tiridates como rei da Arménia, em Roma, em 66 d.C.' },
  { linha: [
    { d: '113 – 117 d.C.', t: 'Trajano chega ao Golfo', x: 'O imperador **Trajano** mata o candidato parto ao trono da Arménia (114) e transforma-a em província romana; em 115 – 116 invade a Mesopotâmia, toma **Ctesifonte** e **Selêucia**, e desce o Tigre até ao **Golfo Pérsico**, onde, segundo **Cássio Dio**, ao ver um navio a partir para a Índia, lamentou não ser jovem como Alexandre. É a maior expansão romana para leste. Revoltas nas cidades conquistadas e um cerco falhado a **Hatra** obrigam-no a recuar; morre em agosto de 117 e o seu sucessor **Adriano** devolve o território.' },
  ] },
  { img: 'par-trajano', leg: 'Cabeça atribuída ao imperador Trajano (Museu Arqueológico de Veneza), que chegou ao Golfo Pérsico em 116 d.C.' },
  { linha: [
    { d: '161 – 166 d.C.', t: 'Vero e Avídio Cássio', x: 'O rei **Vologases IV** invade a Arménia e a Síria romanas; Marco Aurélio envia o co-imperador **Lúcio Vero**, e o general **Avídio Cássio** invade a Mesopotâmia, destruindo parte de **Selêucia** e **Ctesifonte** (c. 164 – 165). Dura-Europos passa para Roma. As tropas regressam com uma epidemia (a «peste antonina», possivelmente varíola) que devasta o império romano.' },
  ] },
  { img: 'par-lucio-vero', leg: 'Busto de Lúcio Vero, co-imperador de Marco Aurélio, que dirigiu a guerra contra a Pártia em 161 – 166.' },
  { linha: [
    { d: '195 – 198 d.C.', t: 'Septímio Severo', x: 'O imperador **Septímio Severo** invade a Mesopotâmia, toma e saqueia **Ctesifonte** (197), escraviza milhares de pessoas e leva-lhe o tesouro, mas, tal como Trajano, falha o cerco de **Hatra** (c. 197 – 199, segundo as fontes). Fica com o título de *Parthicus Maximus*. A Mesopotâmia do norte fica em mãos romanas.' },
    { d: 'c. 208 – 224 d.C.', t: 'Guerra civil e Caracala', x: 'O rei **Vologases VI** e o irmão **Artabano IV** disputam o poder durante anos. Em 216, **Caracala** finge pedir a mão da filha de Artabano para invadir; ataca Arbela e viola os túmulos reais; é assassinado em 217. O seu sucessor Macrino perde em **Nísibis** (217) e paga uma grande indemnização. Mas Artabano IV, vitorioso, está exausto.' },
  ] },
  { img: 'par-caracala', leg: 'Busto de Caracala, que invadiu o território parto em 216 d.C.' },
  { linha: [
    { d: '28 de abril de 224 d.C.', t: 'Hormozdgan e o fim do império', x: 'No sul, **Ardashir**, rei local do Fars e descendente, segundo a tradição, de um sacerdote chamado Sasan, tinha-se revoltado e conquistado várias regiões. Em **Hormozdgan**, num local incerto (perto da atual Isfahan, segundo uma proposta), **derrota e mata Artabano IV**. Ardashir proclama-se «Rei dos Reis dos iranianos», e é coroado em Ctesifonte (a data exata é debatida: cerca de 226). **Vologases VI** ainda cunhou moeda na Selêucia até c. 228. Os nobres partos conservaram a influência, o que fez da mudança uma troca de dinastia mais do que uma ruptura.' },
  ] },
  { img: 'par-firuzabad', leg: 'Relevo rupestre de Ardashir I em Firuzabad, c. 225 – 240 d.C., que celebra a vitória sobre Artabano IV; Irão.' },
  { linha: [
    { d: 'depois de 224 d.C.', t: 'O fim, e depois do fim', x: 'Hatra, antes protegida pelos partos, cai diante dos Sassânidas em c. 240 – 241 d.C. Ramos arsácidas sobrevivem em **reinos vizinhos**: a dinastia **arsácida da Arménia** reinou até 428 d.C., e ramos da casa reinaram também na Ibéria (Geórgia) e na Albânia caucasiana. Uma parte da nobreza parta, como as casas **Suren** e **Karen**, serviu os novos reis.' },
  ] },
  { h: 'Redescoberta' },
  'A Pártia foi durante muito tempo uma «civilização esquecida»: faltavam textos partas, e os autores gregos e romanos tinham pouca simpatia por ela. O inglês **George Rawlinson** escreveu, em 1873, *The Sixth Great Oriental Monarchy*, a primeira grande história dos partos, baseada sobretudo em fontes clássicas e em moedas. O século XX trouxe a arqueologia: em **Dura-Europos**, na Síria, as escavações franco-americanas dos anos 1920 e 1930 encontraram templos, pinturas e documentos; em **Nisa**, uma expedição soviética, com trabalho desde meados do século, revelou fortes, salas de culto e dezenas de rítons de marfim e milhares de ostraca, e em **Hatra**, trabalhos iraquianos, a partir dos anos 1950, e depois também italianos, descobriram templos monumentais e esculturas. Em 2007 Nisa entrou na lista da UNESCO; em 2015 o autoproclamado Estado Islâmico destruiu parte de Hatra, um exemplo cruel do risco que correm estes sítios.'
];

const mapa = [
  'O mapa parto não tem uma capital única, como se viu: o poder estava onde o rei estava. O que se pode fazer é identificar os lugares onde a dinastia vivia, enterrava os seus mortos ou negociava com o mundo.',
  { tabela: { cab: ['Cidade', 'Onde (atual)', 'Papel no império', 'O que a distingue'], linhas: [
    ['Nisa (Mitridatkert)', 'Perto de Ashgabat, Turquemenistão', 'Fortaleza dos primeiros reis; centro religioso e de criação de cavalos', 'Rítons de marfim, ostraca, Sala Redonda e Casa Quadrada; Património Mundial (2007)'],
    ['Hecatompylos', 'Shahr-e Qumis, Irão (identificação aceite)', 'Capital dos primeiros reis; ponto de encontro de rotas', 'O nome grego significa «cem portas»'],
    ['Ecbatana (Hamadã)', 'Hamadã, Irão', 'Residência de verão; capital da Média', 'Antiga capital meda e aqueménida'],
    ['Ctesifonte', 'Perto de Bagdade, Iraque', 'Capital de inverno e de coroações', 'Gémea de Selêucia; mais tarde, capital sassânida'],
    ['Selêucia do Tigre', 'Perto de Bagdade, Iraque', 'Grande cidade helenística, tomada em 141 a.C.', 'Cidade grega de talvez 600 000 habitantes (número exagerado, segundo Plínio)'],
    ['Hatra', 'Norte do Iraque', 'Reino vassalo, árabe; cidade-fortaleza do deserto', 'Resistiu a Trajano e a Severo; templos com iwans; Património Mundial (1985)'],
    ['Dura-Europos', 'Síria, junto ao Eufrates', 'Colónia grega, parta a partir de c. 113 a.C.; romana de 165 d.C. a 256', 'Templos, sinagoga e pinturas; «Pompeia do deserto»'],
    ['Carácene (Charax Spasinu)', 'Sul do Iraque, junto ao Golfo', 'Reino vassalo e porto', 'Ponto de partida das rotas marítimas para a Índia'],
    ['Merv (Margiana)', 'Turquemenistão', 'Oásis do leste; cidade ao longo da Rota da Seda', 'Primeiros mosteiros budistas na região'],
    ['Vologasias', 'Perto de Ctesifonte, Iraque', 'Fundada por Vologases I (séc. I d.C.)', 'Cidade comercial rival de Selêucia'],
    ['Taxila e Sirkap', 'Paquistão', 'Capital indo-parta (séc. I d.C.)', 'Reino de Gondofares; não era parte do núcleo do império'],
    ['Palmira', 'Síria', 'Cidade-caravana, na fronteira entre Roma e a Pártia', 'Prosperou com o comércio entre o Eufrates e o Mediterrâneo']
  ] } },
  { h: 'Nisa e os primeiros reis' },
  '**Nisa**, a poucos quilómetros de Ashgabat, foi durante muito tempo tida por **primeira fortaleza dos arsácidas**: a tradição fala de um sítio ligado a Arsaces I, que Mitridates I terá renomeado **Mitridatkert** («fundação de Mitridates»). A «velha Nisa» é um grande tell (colina de ruínas) com muralhas, torres e edifícios de culto, entre eles a **Sala Redonda**, um grande espaço circular, e a **Casa Quadrada**; na «nova Nisa» ficava a cidade. Nos armazéns do tesouro encontraram-se dezenas de **rítons** de marfim, com cenas de inspiração grega e iraniana, e milhares de **ostraca** com contas de vinho e outros produtos, em língua parta e em escrita de origem aramaica. Houve quem pensasse que Nisa também era o lugar dos túmulos reais, mas isso nunca foi demonstrado: os arqueólogos discutem se era residência, templo ou mausoléu. A cidade foi abandonada depois de um sismo, cuja data se situa por volta do século I a.C.',
  { img: 'par-nisa-ruinas', leg: 'Ruínas da «velha Nisa», perto de Ashgabat, Turquemenistão; Património Mundial da UNESCO desde 2007.' },
  { img: 'par-nisa-reconstrucao', leg: 'Nisa no séc. II a.C.: muralhas de tijolo cru e torres sobre o tell, com o complexo da Sala Redonda; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: 'Ctesifonte e Selêucia do Tigre' },
  'No Tigre, a poucos quilómetros do sítio onde hoje está Bagdade, estavam duas cidades gémeas, cada uma na sua margem: **Selêucia do Tigre**, grande cidade grega fundada pelos Selêucidas por volta de 300 a.C., e **Ctesifonte**, que começou como acampamento do exército parto (c. 120 a.C.) e acabou por se tornar a capital de inverno e o lugar das **coroações**. Era uma zona de enorme riqueza, entre a Babilónia e a Rota da Seda, e os romanos tomaram-na ou saquearam-na **três vezes** durante o período parta (116, c. 164 – 165 e 197) sem a conseguirem manter. Aquilo que hoje se vê, o arco monumental do **Taq Kasra**, foi construído mais tarde, pelos Sassânidas (a data é debatida), mas ergue-se no mesmo lugar. Dos edifícios partas pouco resta à vista.',
  { img: 'par-ctesifonte', leg: 'Ctesifonte (Iraque): o grande arco do Taq Kasra é sassânida, mas ergue-se sobre o lugar da capital parta.' },
  { img: 'par-ctesifonte-reconstrucao', leg: 'Ctesifonte parta, séc. I d.C.: cidade de tijolo e de palmeiras junto ao Tigre, com Selêucia na outra margem; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: 'Hatra, a cidade do Sol' },
  '**Hatra**, no deserto do norte do Iraque, foi a capital de um pequeno reino árabe, vassalo dos partos, que prosperou entre o séc. I e o séc. III d.C. como cidade de caravanas e de peregrinação. Tinha uma muralha circular de cerca de 6 km e, no centro, um grande recinto sagrado com **templos** de grandes **iwans** abobadados, dedicados a **Shamash** (o deus Sol), a **Maran** («Nosso Senhor») e **Martan** («Nossa Senhora»). Resistiu a **Trajano** (c. 116/117) e a **Septímio Severo** (c. 197 – 199), com os seus arqueiros e o deserto sem água à volta, e só cedeu aos **Sassânidas** por volta de **240 – 241**. É um dos conjuntos mais bem conservados da arquitetura parta, e as suas esculturas de reis e de nobres, de frente e hieráticas, com trajes parta e inscrições em aramaico, são um retrato notável da elite local.',
  { img: 'par-hatra', leg: 'Grande iwan do templo de Hatra, norte do Iraque, séc. II d.C.; Património Mundial da UNESCO desde 1985.' },
  { img: 'par-hatra-reconstrucao', leg: 'Hatra no séc. II d.C.: a muralha circular, o recinto sagrado e os iwans, com caravanas à porta; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: 'Dura-Europos e Palmira' },
  '**Dura-Europos** foi fundada pelos Selêucidas, passou para os partos por volta de **113 a.C.** e ficou sob domínio romano em 165 d.C.; foi tomada pelos Sassânidas em 256 e abandonada. Por estar quase intacta sob a areia, deu aos arqueólogos templos de vários deuses, uma sinagoga com pinturas bíblicas e uma igreja cristã primitiva (as duas já da época romana) e centenas de papiros e pergaminhos; é fundamental para conhecer a cultura de fronteira. **Palmira**, no deserto sírio, era uma cidade de caravanas, que servia de intermediária entre o Eufrates (zona parta) e o Mediterrâneo (zona romana), e mostra a mistura de influências que a Rota da Seda atravessava.',
  { img: 'par-dura-europos', leg: 'Planta das escavações de Dura-Europos, cidade junto ao Eufrates (Síria), com os principais edifícios assinalados.' },
  { img: 'par-palmira', leg: 'O teatro romano de Palmira, no deserto sírio: cidade de caravanas na fronteira entre o mundo romano e o parto.' },
  { h: 'A Rota da Seda e as estradas do império' },
  'A grande via partida da China atravessava a Ásia Central, chegava a **Merv**, passava por **Hecatompylos**, subia a **Ecbatana**, descia a **Ctesifonte** e seguia para o Eufrates, onde a mercadoria passava para o lado romano por **Zeugma**, **Dura-Europos** ou **Palmira**. O percurso está descrito em **«As Estações Partas»**, uma espécie de guia de viagem do geógrafo **Isidoro de Carax** (c. séc. I a.C. – I d.C.), que enumera as paragens, com as distâncias, do Eufrates até à Aracósia (hoje Kandahar). Havia também uma **rota marítima**, a partir do porto de **Carax Espasinu**, no Golfo, em direção à Índia. Os partos não produziam a seda (vinha da China), mas controlavam o caminho e **cobravam portagens**, e, segundo os autores chineses, procuravam manter os intermediários de que viviam: o enviado chinês **Gan Ying**, em 97 d.C., teria sido convencido pelos partos a desistir de chegar a Roma por mar, dizendo-lhe que a travessia podia demorar até dois anos (episódio contado só pelas fontes chinesas).',
  { img: 'par-mapa-rota-seda', leg: 'Mapa da Rota da Seda, com o território parta no centro, entre a China e o Mediterrâneo.' },
  { img: 'par-caravana', leg: 'Uma caravana de comerciantes chega a Ctesifonte, séc. I d.C., com camelos, seda e especiarias; reconstituição conjetural. Ilustração gerada por IA.' }
];

const sociedade = [
  { h: '1. Organização política' },
  'O estado parto era uma **monarquia hereditária dentro da família arsácida**: só um arsácida podia ser rei. Mas o rei não era um monarca absoluto como o persa; segundo Estrabão, existia um **conselho de parentes do rei e de magos** (Estrabão fala de um *synedrion*), que podia depor o rei que não servisse; os historiadores modernos usam a palavra grega *megistanes* («os grandes») para os nobres que o integravam. As sucessões eram frequentes fontes de guerra civil, e vários reis (Vonones I, Fraates V) foram depostos por não agradarem à nobreza.',
  'O território dividia-se em **satrapias** (com sátrapas em menor número do que no império aqueménida) e em **reinos vassalos**, governados por dinastias locais: **Elímaida** (sudoeste do Irão), **Carácene** (sul do Iraque), **Média Atropatene**, **Adiabene**, **Osroena** (Edessa), a Pérsia de Fars (da família de Ardashir) e **Hatra**. Estes vassalos pagavam tributo e davam soldados, e aceitavam o título de «Rei dos Reis» do arsácida, mas tinham as suas moedas e os seus exércitos; é por isso que muitos historiadores falam de um sistema «feudal» (palavra discutível, por ser tirada da Europa medieval). A vantagem era a flexibilidade; o problema, a fraqueza, porque um vassal podia revoltar-se e criar um novo poder, como Ardashir.',
  { img: 'par-moeda-fraates4', leg: 'Tetradracma de Fraates IV (c. 38 – 2 a.C.), rei que derrotou Marco António e devolveu as insígnias de Carras; no reverso, a deusa Tique.' },
  { h: '2. Classes sociais' },
  { lista: [
    '**A família real e as grandes casas:** a nobreza era dominada por sete grandes casas (as fontes sassânidas falam de «sete grandes casas»), entre as quais os **Suren** (de onde saiu Surena, o vencedor de Carras) e os **Karen**, que possuíam terras, castelos e exércitos pessoais e sustentavam o rei, ou o derrubavam.',
    '**Os magos e outros sacerdotes:** de lugar importante na corte, também no conselho dos que escolhiam o rei.',
    '**Os cidadãos das cidades gregas:** como Selêucia, tinham os seus magistrados e o direito de eleger conselhos; os reis partos respeitavam a sua autonomia (e chamavam-se, em moedas, «amigos dos gregos», *philhellen*).',
    '**Mercadores e artesãos:** o comércio e as portagens eram a base da riqueza; entre os comerciantes havia gregos, arameus, judeus, sogdianos e árabes.',
    '**Comunidades judaicas da Babilónia:** numerosas e prósperas, em cidades como Nehardea e Nísibis, onde nasceu a tradição que originaria o Talmude babilónico (a Mesopotâmia parta era um dos grandes centros judaicos do mundo, como conta Flávio Josefo, que cita os irmãos **Anilai e Asinai**, chefes judeus de Nehardea).',
    '**Camponeses e escravos:** os camponeses formavam a maioria da população; a escravatura existia e as guerras forneciam prisioneiros.'
  ] },
  { h: 'As mulheres' },
  'As rainhas arsácidas aparecem nas moedas e nos textos mais do que no mundo grego, e algumas tiveram influência política, como **Musa**, mãe de Fraates V, que aparece com ele nas moedas. Mas o poder era dos homens; e a história de Musa foi usada pelos autores romanos (Josefo) para a desacreditar, o que nos obriga a ler com cuidado. As mulheres de famílias nobres seguiam, ao que parece, o estilo helenístico no vestuário e nas joias.',
  { img: 'par-principe-shami', leg: 'Estátua de bronze do «Príncipe de Shami», com roupa de nobre parto (casaco, calças e punhal), datação debatida, entre o séc. II a.C. e o séc. II d.C.; Museu Nacional do Irão, Teerão.' },
  { h: '3. Religião' },
  'A religião parta era uma mistura de **tradições iranianas**, **mesopotâmicas** e **gregas**. Os partos veneravam **Ahura Mazda**, **Mitra** e **Anahita**, entre outros; mas o que se sabe do **zoroastrismo** deste tempo é pouco: não há prova clara de uma «igreja» organizada nem de uma lista escrita de textos sagrados (a tradição sassânida tardia, no *Dēnkard*, diz que o rei Vologases I mandou recolher o *Avesta*, mas é uma tradição tardia e muito debatida). Os partos toleravam os cultos locais (babilónicos, gregos, judaicos e, mais tarde, cristãos e budistas), e os reis deixavam as cidades gregas honrarem os seus deuses. Uma característica própria é a **veneração dos antepassados reais**, com santuários dinásticos (talvez em Nisa).',
  { tabela: { cab: ['Divindade', 'Origem / equivalente', 'Papel'], linhas: [
    ['Ahura Mazda (Ohrmazd)', 'Iraniana', 'Deus supremo da luz e da ordem, para os que seguiam a tradição zoroástrica'],
    ['Mitra (Mihr)', 'Iraniana', 'Deus dos contratos, da luz e do juramento; vários reis partos se chamaram Mitridates, «dado por Mitra»'],
    ['Anahita', 'Iraniana; identificada com Ártemis e Atena', 'Deusa das águas e da fertilidade'],
    ['Verethragna (Bahram)', 'Iraniana; identificado com Héracles', 'Deus da vitória; o Héracles aparece em moedas e relevos'],
    ['Tir', 'Iraniana; identificado com Apolo ou Hermes', 'Deus-escrivão, ligado às estrelas e à chuva'],
    ['Shamash', 'Mesopotâmica (Hatra)', 'Deus Sol, patrono de Hatra'],
    ['Maran e Martan', 'Aramaica (Hatra)', 'Os «Senhor» e «Senhora» do grande templo'],
    ['Zeus, Apolo, Tique', 'Grega', 'Nas moedas e nos cultos das cidades gregas']
  ] } },
  { h: 'O além e o fogo' },
  'Os costumes funerários eram variados: enterravam-se corpos em jarros, em sarcófagos de cerâmica, em túmulos de tijolo e, em Nisa e noutros sítios, usavam-se ossuários. O rito zoroástrico de expor os corpos só se torna norma mais tarde, com os Sassânidas (a prática anterior é debatida), e os **templos de fogo** da época parta estão pouco documentados. O **budismo** chegou a partes do império (em Merv, nos primeiros séculos d.C.), e o monge parto **An Shigao** levou-o à China, no séc. II d.C.',
  { h: '4. Economia' },
  'A riqueza vinha da **agricultura** (irrigada na Mesopotâmia e nos oásis, com canais e **qanats**, os túneis que levam a água dos lençóis freáticos), da **criação de cavalos** e, sobretudo, do **comércio**. Os partos cobravam **portagens** às caravanas que atravessavam o território e faziam de intermediários entre a China (seda, especiarias, jade), a Índia (especiarias, marfim, pedras preciosas), a Arábia (incenso) e Roma (ouro e prata, vidro, vinho, linho). A moeda era a **dracma de prata**, de estilo grego (rei de perfil num lado e, no outro, o primeiro arsácida sentado com um arco, com legendas em grego); além disso as cidades e os vassalos cunhavam moeda de bronze. Os reis viviam das rendas das suas terras, dos tributos dos vassalos e destas portagens.',
  { h: '5. Escrita e língua' },
  'Os partos usavam o **grego**, o **aramaico** e a sua própria língua. O grego, herdado dos Selêucidas, aparece nas moedas, nas inscrições oficiais e na diplomacia. O **parta** escrevia-se com um alfabeto derivado do **aramaico**, usado também para o persa médio; tem uma curiosidade, os **aramaeogramas** (palavras aramaicas escritas, mas lidas em parta). Os **ostraca de Nisa** (mais de dois mil, com contas de vinho do séc. I a.C.) são a coleção mais importante; os **pergaminhos de Avroman** (documentos de venda de vinhas em grego e em parta) e os documentos de Dura-Europos completam o conjunto. A literatura oral, de **menestréis** (os *gōsān*), fez circular histórias e poemas, que seriam depois passados ao persa médio, como a *Árvore da Assíria* (*Draxt ī Asūrīg*), cujo núcleo se atribui à tradição parta (a ideia é discutida).',
  'Um sinal da sobrevivência da língua: quando o sassânida **Shapur I** mandou gravar a sua inscrição de vitória em **Naqsh-e Rustam**, em 262 d.C. (Kaʿba-ye Zardosht), usou três línguas, o persa médio, o **parta** e o grego, quase 40 anos depois da queda dos Arsácidas.',
  { img: 'par-kaba-zartosht', leg: 'Kaʿba-ye Zardosht, em Naqsh-e Rustam (Irão): a inscrição de Shapur I, de c. 262 d.C., está escrita em persa médio, em parta e em grego.' },
  { h: '6. Casa e cidade' },
  'As casas eram de **tijolo cru** (barro), com pátio central e salas à volta, como na Mesopotâmia, e muitas vezes com um **iwan**: um espaço abobadado, aberto no pátio, que servia de sala de receção e de refúgio do calor. As casas de Nisa, de Assur e de Hatra mostram a mesma ideia. Os palácios dos vassalos, como o de Assur, juntavam várias salas abobadadas à volta de um pátio. As decorações eram de **estuque** moldado, com motivos gregos (acantos, palmetas) e iranianos.',
  { h: '7. Alimentação' },
  { lista: [
    '**Cereais:** trigo e cevada, em pão e em papas; arroz mais a leste.',
    '**Vinho:** produzido e armazenado em grande quantidade (os ostraca de Nisa registam jarros de vinho) e bebido, à maneira grega, nos banquetes.',
    '**Tâmaras, figos, uvas, romãs e pistácios:** a fruta e os frutos secos eram a base da sobremesa; os romanos consideravam os frutos da Pártia exóticos.',
    '**Carne e caça:** carneiro, cabra e caça (veado, javali, onagro), além de peixe nos grandes rios.',
    '**Um «prato parto» em Roma:** o livro de receitas romano atribuído a Apício inclui uma receita de **frango à parta** (*pullum Parthicum*), com assa-fétida (uma resina picante do Irão), vinho e tâmaras, que mostra o gosto dos romanos pelos temperos vindos da Pártia.'
  ] },
  { img: 'par-banquete', leg: 'Banquete na corte parta: nobres reclinados, cantor e músico, com taças de vinho; séc. I a.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '8. Vestuário' },
  'O traje dos partos ficou famoso nas imagens: **calças largas**, **túnica comprida** (ou um casaco com mangas), **cinto**, botas e um **chapéu mole** ou um diadema real. Os **gregos e romanos** viam nas calças um sinal de «barbárie», porque usavam túnicas curtas, mas as calças eram, ao fim e ao cabo, práticas a cavalo, e vieram a ser adotadas pelos romanos. Os homens usavam cabelo comprido e barba; as mulheres, penteados e véus, de estilo helenístico, com colares, brincos e pulseiras de ouro, de pedras e de pérolas do Golfo. Os reis usavam **diademas** (a faixa real) e, mais tarde, **tiaras** altas.',
  { img: 'par-vestuario', leg: 'Nobre parto e a mulher, séc. I d.C.: casaco com cinto, calças, botas, diadema e véu; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '9. Música, dança e jogos' },
  'A música era importante nos banquetes e na vida de corte. Os **menestréis** (*gōsān*) cantavam as façanhas de reis e de heróis, e a tradição lírica persa herdou deles, ao que tudo indica, géneros e histórias. Os reis partas, apesar da sua herança nómada e guerreira, gostavam do **teatro grego**: segundo Plutarco, Orodes II e Artavasdes assistiam a uma tragédia de Eurípides na noite em que lhes chegou a cabeça de Crasso. A **caça** (a cavalo, com arco) era a grande atividade da elite, e há jogos de tabuleiro no mundo parta (o antepassado do gamão, o *nard*, é associado ao Irão, mas as fontes mais antigas são sassânidas).',
  { h: '10. Ciência e conhecimento' },
  'Os partos herdaram uma ciência rica, a da **Babilónia**. Os escribas babilónios continuaram a registar as observações astronómicas, em tabuinhas cuneiformes, até ao fim do séc. I a.C. (os últimos «Diários Astronómicos» datam de c. 60 a.C.). Em **Selêucia do Tigre**, no séc. II a.C., trabalhou o astrónomo **Seleuco de Selêucia**, que, segundo Plutarco, defendeu que a Terra gira em torno do Sol; a cidade passou para o domínio parta em 141 a.C. Os **jarros de Bagdade** (ou «pilha de Bagdade»), vasos de barro com um cilindro de cobre e uma barra de ferro, encontrados perto de Ctesifonte, são por vezes atribuídos a este período e apresentados como «pilhas elétricas», mas essa interpretação é muito discutida, e a maioria dos especialistas pensa que serviam para outra coisa (por exemplo, guardar rolos de papiro).',
  { h: '11. Guerra' },
  'O exército parto não era permanente: o rei convocava os **nobres**, que traziam os seus cavaleiros, e os vassalos, e juntava-se um exército de dezenas de milhares de homens, quase todos a cavalo. Havia duas armas:',
  { lista: [
    '**Os arqueiros a cavalo** (cavalaria ligeira): usavam um **arco compósito** curto e potente, de madeira, de corno e de tendão, e disparavam uma chuva de setas enquanto rodavam à volta do inimigo; o célebre **«tiro parta»** consistia em fingir fugir e disparar para trás, por cima da garupa.',
    '**Os catafractos** (cavalaria pesada): o cavaleiro e o cavalo cobertos de **couraça** de escamas ou de malha de metal, com uma lança comprida (o *kontos*), usada para a carga final contra uma infantaria já enfraquecida.'
  ] },
  'A tática era frustrar a infantaria romana, mais pesada, com setas à distância e depois carregar; em Carras, o transporte de milhares de setas por **camelos** garantiu o fornecimento de munições. A fraqueza dos partos era o **cerco** de cidades fortificadas (falharam diante das defesas de Roma na Síria e conseguiram pouco contra fortalezas), e a dependência da nobreza, que se podia recusar a servir por muito tempo ou dividir-se em guerras civis. Os cavalos de **Nisa** eram famosos, e a raça moderna **Akhal-Teke**, do Turquemenistão, é por vezes apresentada como descendente dos cavalos nisaianos (ligação plausível, mas indemonstrável).',
  { img: 'par-catafracto', leg: 'Um catafracto parto: cavaleiro e cavalo com couraça de escamas, lança comprida (kontos); séc. I a.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'par-tiro-parta', leg: 'O «tiro parta»: um arqueiro parto dispara para trás enquanto finge fugir; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'par-akhal-teke', leg: 'Cavalo Akhal-Teke, raça do Turquemenistão, por vezes ligada aos cavalos nisaianos dos partos (ligação debatida).' },
  { h: '12. Arte' },
  'A arte parta mistura Grécia e Irão. Os primeiros reis usam **modelos helenísticos** (rítons de marfim de Nisa, estátuas de mármore de tipo grego, inscrições em grego); depois ganham espaço **as formas iranianas e mesopotâmicas**. Uma característica nova é a **frontalidade**: as figuras olham de frente, para o espectador, e não para o objeto da ação, como nas esculturas de **Hatra** e nas pinturas de **Dura-Europos**, solução que mais tarde passaria para a arte bizantina e medieval. O famoso **bronze do Príncipe de Shami**, achado numa zona de montanha do sudoeste do Irão, mostra um nobre parto de calças e punhal, enquanto as esculturas de pedra de Hatra mostram deuses e reis com trajes ricamente decorados.',
  { img: 'par-hatra-estatua', leg: 'Estátua de Sanatruq, rei de Hatra, norte do Iraque (Museu do Iraque), séc. II d.C.: figura de frente, com traje parto.' },
  { h: '13. Os reinos indo-partos' },
  'A leste, no séc. I d.C., formou-se um reino de dinastia de origem parta no atual Paquistão e no noroeste da Índia, o dos **indo-partos**, fundado por **Gondofares** (c. 20 – 46 d.C., datas debatidas). Embora se tenham autonomizado do rei de Ctesifonte, mantiveram a cultura e o título «Rei dos Reis». Gondofares é também o rei que a tradição cristã associa ao apóstolo **Tomé**, nos *Atos de Tomé* (texto tardio, de valor histórico duvidoso).',
  { img: 'par-gondofares', leg: 'Moeda de Gondofares, fundador do reino indo-parto (séc. I d.C.), com legenda em grego.' }
];

const personalidades = [
  'Para os partos, temos sobretudo **nomes de reis e de generais** transmitidos por gregos e romanos, muitas vezes de forma hostil. As figuras abaixo são reais, mas as suas «biografias» devem ser lidas com a ressalva de que quase tudo vem de textos escritos por rivais.',
  { h: 'Arsaces I (meados do séc. III a.C.)' },
  'Chefe dos parnos e fundador da dinastia arsácida. Segundo as fontes antigas, invadiu a Pártia e matou o sátrapa seleucida Andrágoras, por volta de 247 a.C. (data debatida). O seu nome tornou-se um título: todos os reis partos se chamaram, em moeda, «Arsaces», e os chineses chamaram a Pártia «Anxi». É difícil separar o homem real da tradição.',
  { h: 'Mitridates I (c. 171 – 132 a.C.)' },
  'O verdadeiro criador do império. Conquistou a Média, a Mesopotâmia e Susa, tomou Selêucia em 141 a.C., derrotou e prendeu o rei selêucida Demétrio II, e usou o título de «Rei dos Reis». Os autores antigos comparam-no a Ciro. Morreu em 132 a.C., antes de terminar a luta contra os Selêucidas e os nómadas.',
  { h: 'Mitridates II, «o Grande» (c. 124/123 – 91 a.C.)' },
  'Restaurou o império depois das invasões nómadas, impôs um tributo à Arménia, abriu as relações com a China (c. 121 a.C.) e foi o primeiro rei parto a encontrar-se com um enviado de Roma (Sila, c. 96 – 92 a.C.). Terá governado perto de 33 anos, e as suas moedas mostram-no já como um grande monarca.',
  { h: 'Orodes II (c. 57 – 38 a.C.)' },
  'O rei do tempo de Carras. Chegou ao trono depois de uma guerra com o irmão (que acabou morto), venceu em 53 a.C. e, por ciúme ou receio, mandou executar o general Surena pouco depois (segundo as fontes romanas). Depois da morte do filho **Pacoro I**, em 38 a.C., abdicou e acabou morto pelo sucessor, segundo as fontes romanas. Plutarco conta-o a assistir às *Bacantes* com a cabeça de Crasso (anedota de fonte romana).',
  { h: 'Surena (séc. I a.C.)' },
  'O general que venceu Crasso em Carras (53 a.C.), com cerca de 10 000 cavaleiros. «Surena» é, em rigor, o título da casa nobre **Suren**, e não um nome próprio; Plutarco diz que era o segundo homem do reino, alto, de rosto belo, que viajava com mil camelos de bagagem e duzentas carruagens para as concubinas (relato de autor romano, provavelmente exagerado). Foi morto pelo seu rei pouco depois da vitória.',
  { h: 'Fraates IV (c. 38 – 2 a.C.)' },
  'Rei violento: mandou matar o pai, os irmãos e muitos nobres, segundo as fontes. Derrotou Marco António (36 a.C.) e fez em 20 a.C. um acordo com Augusto, devolvendo as insígnias de Carras. Entregou quatro filhos a Roma, como reféns, e acabou por ser morto pela mulher, Musa, e pelo filho (segundo Josefo).',
  { h: 'Musa (séc. I a.C. – séc. I d.C.)' },
  'Escrava italiana, dada por Augusto ao rei Fraates IV, tornou-se rainha. O filho **Fraates V** subiu ao trono com ela e aparece nas moedas como co-governante; foram expulsos pela nobreza em 4 d.C. É uma das poucas mulheres da Antiguidade cujo rosto aparece em moedas de um rei (a acusação de incesto, de Josefo, é vista com desconfiança).',
  { h: 'Vologases I (c. 51 – 77/80 d.C.)' },
  'Rei da época de Nero e de Vespasiano. Instalou o irmão Tiridates no trono da Arménia, e, depois de uma guerra com Roma, aceitou uma solução diplomática, que fez do rei arménio um vassalo coroado em Roma. Fundou **Vologasias**, perto de Ctesifonte, e as suas moedas passaram a mostrar o uso de letras partas ao lado do grego. A tradição sassânida liga-o à recolha do *Avesta* (tradição tardia).',
  { h: 'Gondofares (c. 20 – 46 d.C.)' },
  'Fundador do reino indo-parto, no Paquistão e no noroeste da Índia. As moedas e uma inscrição de Takht-i-Bahi dão o seu nome e as suas datas; a ligação com o apóstolo Tomé, nos *Atos de Tomé*, é lendária.',
  { h: 'An Shigao (séc. II d.C.)' },
  'Monge budista de origem parta (o «An» do seu nome chinês vem de *Anxi*, a Pártia; a tradição diz que era um príncipe que renunciou ao trono), que chegou a Luoyang, na China, por volta de **148 d.C.**, e traduziu dezenas de textos budistas para chinês: é um dos primeiros tradutores do budismo na China. É também prova de que os partos eram intermediários não só de mercadorias, mas de ideias.',
  { h: 'Artabano IV (c. 213 – 224 d.C.)' },
  'O último rei arsácida de que há registo. Venceu Macrino em Nísibis (217), mas foi derrotado e morto por Ardashir em Hormozdgan, em 224. As suas moedas e a sua derrota são o fecho do império.',
  { h: 'Ardashir I (c. 180 – 242 d.C.)' },
  'Rei do Fars que derrubou os arsácidas e fundou o Império Sassânida, que se apresentou como herdeiro dos Aqueménidas. A sua ascensão está contada na civilização Persa; aqui interessa sobretudo como o vassalo que pôs fim ao império parta.',
  { h: 'Cássio Dio (c. 164 – depois de 229 d.C.)' },
  'Senador e historiador romano, de origem grega, autor de uma *História Romana* em 80 livros, escrita em grego. É uma das nossas fontes principais para as guerras de Trajano, de Severo e de Caracala contra os partos, e narra, por exemplo, o momento em que Trajano chegou ao Golfo Pérsico. Escrevia como romano, e por isso o seu retrato dos partos tem a marca do seu tempo.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**A «seta parta» e a cavalaria pesada:** a combinação de arqueiros a cavalo e de cavaleiros couraçados influenciou os exércitos romano e bizantino, e a guerra a cavalo na Eurásia.',
    '**O iwan:** o grande salão abobadado, aberto de um lado, tornou-se um dos elementos mais característicos da arquitetura persa e, depois, islâmica (nas mesquitas e nos palácios).',
    '**Uma ponte entre a China e Roma:** os partos mantiveram aberta a Rota da Seda, e deixaram marca no budismo chinês (An Shigao), no vocabulário arménio e nas artes de toda a Ásia central.',
    '**A sobrevivência da identidade iraniana:** depois de Alexandre, os partos devolveram a um império de língua e de tradição iraniana a sua posição no Médio Oriente, e prepararam o terreno para os Sassânidas.',
    '**A dinastia que não acabou:** ramos arsácidas reinaram na Arménia até 428 d.C., na Ibéria e na Albânia caucasiana; uma parte da nobreza (Suren, Karen) continuou a ter peso na Pérsia sassânida.',
    '**Palavras e expressões:** «tiro parta» ou «seta parta» para uma observação final lançada à saída; *Anxi*, o nome chinês da Pártia, é uma das mais antigas referências chinesas a uma potência do Ocidente.'
  ] },
  { h: 'Arte' },
  'A arte parta é, durante muito tempo, desvalorizada: era vista como uma arte «de transição» entre a grega e a sassânida. Hoje reconhece-se-lhe a **frontalidade** das figuras, os relevos e esculturas de Hatra e a **estatuária de bronze** do Príncipe de Shami; os rítons de marfim de Nisa mostram a qualidade das oficinas de corte, e a joalharia, de ouro e de pedras, é rica. Há um estilo próprio de **estuque**, e na arte funerária, os sarcófagos de cerâmica vidrada, de cor verde-azulada, são típicos da Mesopotâmia parta.',
  { h: 'Arquitetura' },
  'A arquitetura parta, em **tijolo cru** e em **pedra e gesso**, desenvolveu o **iwan**, as **abóbadas** em tijolo e a combinação de pátio e salões, que os Sassânidas e os arquitetos islâmicos levaram mais longe. Em Hatra, os grandes iwans de pedra são dos exemplos mais antigos e melhor conservados, e em Nisa vê-se a ligação entre o urbanismo grego e a tradição iraniana. As ruínas partas sofreram, porém, muito com o tempo, com guerras e com o saque: em 2015 o chamado Estado Islâmico destruiu parte de Hatra.',
  { h: 'Porque desapareceram?' },
  'Os partos não foram conquistados por Roma: o império acabou **por dentro**. As causas apontadas pelos historiadores são várias:',
  { lista: [
    '**As guerras com Roma:** a Mesopotâmia foi saqueada várias vezes (116, 165, 197), o que custou riqueza e prestígio.',
    '**As guerras civis arsácidas:** os pretendentes ao trono, apoiados por casas nobres e por vassalos, enfraqueceram o rei, sobretudo entre c. 190 e 224.',
    '**A estrutura frouxa:** os vassalos, com as suas moedas e os seus exércitos, podiam tornar-se perigosos, e foi um deles, Ardashir, do Fars, que destruiu o rei.',
    '**Um novo projeto político:** os Sassânidas apresentaram-se como herdeiros dos Aqueménidas e como defensores da religião, com uma administração mais centralizada, o que lhes deu uma vantagem sobre uma nobreza dividida.',
    '**Continuidade:** a nobreza parta e uma parte das instituições continuaram, por isso a mudança foi mais uma troca de dinastia do que uma revolução.'
  ] },
  { h: 'Onde ver os partos' },
  { caixa: 'Onde ver os partos', texto: 'No **Turquemenistão**: **Nisa**, perto de Ashgabat, e o **Museu Nacional de Ashgabat**, com os rítons de marfim. No **Irão**: o **Museu Nacional do Irão**, em Teerão (com o Príncipe de Shami), e os sítios de **Hecatompylos** e de **Hamadã**. No **Iraque**: **Hatra** (a visita é difícil por razões de segurança) e as ruínas de **Ctesifonte** e de **Selêucia do Tigre**, perto de Bagdade; o **Museu do Iraque**, em Bagdade, tem esculturas de Hatra e de outros sítios partas. Na **Síria**: **Dura-Europos** e **Palmira**, ambos muito danificados pela guerra civil. Fora da região: o **Museu Britânico** (moedas e objetos), o **Louvre** e o **Museu do Hermitage**, em São Petersburgo. A **Biblioteca Nacional de França** guarda uma grande coleção de moedas partas.' }
];

const quiz = [
  { p: 'Como se chamava o povo de cavaleiros de que saiu o fundador da dinastia parta, Arsaces I?', op: ['Parnos', 'Medos', 'Citas reais', 'Persas'], certa: 0, exp: 'Os parnos, povo de língua iraniana ligado aos dahas, ocuparam a Pártia, a sul do mar Cáspio, e deram origem aos partos.' },
  { p: 'Quem governava a Pártia antes da chegada dos parnos, em c. 247 a.C.?', op: ['O império aqueménida', 'Roma', 'Os Selêucidas, através do sátrapa Andrágoras', 'Os Kushans'], certa: 2, exp: 'A Pártia era uma satrapia selêucida; o sátrapa Andrágoras, que se tornara independente, foi morto por Arsaces.' },
  { p: 'Que rei parto tomou Selêucia do Tigre, em 141 a.C., e usou o título de «Rei dos Reis»?', op: ['Orodes II', 'Mitridates I', 'Fraates IV', 'Vologases I'], certa: 1, exp: 'Mitridates I foi o grande conquistador que fez da Pártia um império, e prendeu o rei selêucida Demétrio II.' },
  { p: 'Em que batalha, em 53 a.C., os partos derrotaram o exército de Crasso?', op: ['Actium', 'Gindaro', 'Carras', 'Fraaspa'], certa: 2, exp: 'Em Carras, o general Surena destruiu o exército romano, com arqueiros a cavalo e catafractos.' },
  { p: 'O que é o «tiro parta»?', op: ['Um disparo para trás, a cavalo, fingindo fugir', 'Uma máquina de cerco', 'Uma lança de cavalaria', 'Um tributo pago a Roma'], certa: 0, exp: 'Os arqueiros a cavalo fingiam retirar e disparavam, por cima da garupa, contra os perseguidores.' },
  { p: 'Quem eram os catafractos?', op: ['Arqueiros a pé', 'Cavaleiros e cavalos com couraça completa', 'Mercadores da Rota da Seda', 'Sacerdotes dos templos de fogo'], certa: 1, exp: 'Eram a cavalaria pesada, com couraça de escamas ou de malha, armada com uma lança comprida (kontos).' },
  { p: 'Que rei parto devolveu a Augusto, em 20 a.C., as insígnias das legiões perdidas em Carras?', op: ['Fraates IV', 'Mitridates II', 'Artabano IV', 'Arsaces I'], certa: 0, exp: 'Fraates IV devolveu as insígnias; Augusto apresentou o facto como uma grande vitória e mandou-o gravar na couraça da estátua de Prima Porta.' },
  { p: 'Que imperador romano chegou ao Golfo Pérsico, em 116 d.C., depois de tomar Ctesifonte?', op: ['Nero', 'Adriano', 'Trajano', 'Caracala'], certa: 2, exp: 'Trajano; segundo Cássio Dio, lamentou não ser jovem como Alexandre. Mas o seu sucessor, Adriano, devolveu os territórios.' },
  { p: 'Que cidade do deserto iraquiano resistiu a Trajano e a Septímio Severo, graças aos seus arqueiros?', op: ['Hatra', 'Palmira', 'Dura-Europos', 'Nisa'], certa: 0, exp: 'Hatra, capital de um reino árabe vassalo, só caiu em c. 240 – 241, diante dos Sassânidas.' },
  { p: 'O que é um «iwan»?', op: ['Uma moeda parta', 'Uma espada curta', 'Um grande salão abobadado aberto de um lado', 'Um título nobre'], certa: 2, exp: 'O iwan ganha forma na arquitetura parta, em sítios como Hatra, e é depois um traço central da arquitetura persa e islâmica.' },
  { p: 'Qual é o sítio parta do Turquemenistão, Património Mundial da UNESCO desde 2007, onde se encontraram rítons de marfim?', op: ['Merv', 'Nisa', 'Ecbatana', 'Persépolis'], certa: 1, exp: 'Nisa, perto de Ashgabat, com a Sala Redonda, a Casa Quadrada, rítons de marfim e milhares de ostraca.' },
  { p: 'Que ligação os partos tinham com a Rota da Seda?', op: ['Fabricavam a seda', 'Controlavam o troço central e cobravam portagens', 'Proibiam o comércio com Roma', 'Só comerciavam por mar'], certa: 1, exp: 'Não produziam a seda, mas controlavam o caminho entre a China e o Mediterrâneo e viviam em parte das portagens.' },
  { p: 'Que língua, além do grego e do aramaico, usavam os partos?', op: ['Latim', 'Parta, uma língua iraniana do noroeste', 'Sânscrito', 'Egípcio antigo'], certa: 1, exp: 'O parta, escrito com um alfabeto derivado do aramaico, deixou rastros no arménio e foi usado ainda por Shapur I.' },
  { p: 'Quem foi An Shigao, que viveu no séc. II d.C.?', op: ['Um rei indo-parto', 'Um general romano', 'Um monge budista parto que traduziu textos para chinês', 'Um astrónomo babilónio'], certa: 2, exp: 'Era de origem parta (Anxi) e chegou a Luoyang por volta de 148 d.C. É um dos primeiros tradutores do budismo na China.' },
  { p: 'Quem derrotou o último rei parto, Artabano IV, em Hormozdgan, em 224 d.C.?', op: ['Ardashir I, do Fars', 'Septímio Severo', 'Trajano', 'Alexandre Magno'], certa: 0, exp: 'Ardashir I, rei vassalo do Fars, fundou o Império Sassânida.' }
];

export default {
  id: 'partos',
  cor: '#7a4a8a',
  emblema: '../assets/img/partos.png',
  nome:    { pt: 'Partos', en: 'Parthians' },
  periodo: { pt: 'c. 247 a.C. – 224 d.C.', en: 'c. 247 BC – AD 224' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
