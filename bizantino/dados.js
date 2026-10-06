// IMPÉRIO BIZANTINO — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas na cronologia convencional; «c.» marca o aproximado e assinala-se o debatido. a.C./d.C.
// «Bizantino» é um nome moderno: os próprios habitantes chamavam-se Romanos (Rhomaioi) e ao Estado «Império dos Romanos».
// A Roma até 476 está na página «Crise, Dominato e Queda» (roma/crise-dominato); aqui liga-se sem repetir.
// Imagens: cada {img:'id'} procura o ficheiro  bizantino/img/id.jpg  (ver IMAGENS_BIZANTINO.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'O **Império Bizantino** é o nome que os historiadores modernos dão à metade oriental do Império Romano, que sobreviveu quase mil anos à queda do Ocidente (476) e acabou em **1453**, quando os otomanos de Maomé II tomaram **Constantinopla**. Os seus habitantes nunca se chamaram «bizantinos»: eram **Romanos** (em grego, *Rhomaioi*), e o seu Estado era o Império Romano, com um imperador (*basileus*), leis romanas e uma capital que era a «Nova Roma».',
    'Falava-se grego, rezava-se segundo o cristianismo ortodoxo e governava-se à romana. Foi um Estado que viveu de perdas e de recuperações: no tempo de **Justiniano** (527–565) reconquistou a Itália e o norte de África; no século VII perdeu para o Islão o Egito e a Síria e quase desapareceu; no século XI, com **Basílio II**, voltou a ser a maior potência do Mediterrâneo oriental; em 1204 foi saqueado por cruzados cristãos; e em 1453 caiu de vez. A sua história não é uma «decadência de mil anos», como o Iluminismo a pintou, mas uma história de resistência e de reinvenção.'
  ] },
  { img: 'biz-mapa-565', leg: 'Mapa do Império Bizantino em 565.' },
  { h: 'Onde ficava' },
  'O coração do Império foi sempre o espaço entre o **mar Egeu e o mar Negro**: os Balcãs do sul, a Grécia, a Anatólia (hoje a Turquia asiática) e o estreito do **Bósforo**, onde ficava Constantinopla, a atual **Istambul**. A cidade estava num ponto de ouro: controlava a passagem entre a Europa e a Ásia e entre o mar Negro e o Mediterrâneo, num promontório quase cercado de água e com uma baía abrigada, o Corno de Ouro. Era quase impossível de conquistar por mar e muito difícil por terra.',
  'Nos seus melhores momentos o Império chegou muito mais longe: a Itália, o sul da Hispânia, o norte de África, o Egito, a Síria, a Palestina, a Arménia e o sul dos Balcãs até ao Danúbio. Nos piores, resumia-se à capital e a pouco mais. Vale a pena guardar que as fronteiras foram sempre uma frente móvel, não uma linha.',
  { h: 'Quando existiu' },
  'A data de início é uma convenção. Alguns historiadores começam em **330**, com a inauguração de Constantinopla por Constantino; outros em **395**, quando Teodósio I morre e o Império fica dividido entre dois filhos; outros em **476**, com o fim do Império do Ocidente; e outros ainda em **c. 610**, com Heráclio, quando o grego substitui o latim na administração. Nenhuma destas datas assinalou, para quem vivia então, o nascimento de um Estado novo: para os contemporâneos, o Império era o mesmo. Aqui seguimos 330 – 1453.',
  { tabela: { cab: ['Fase', 'Datas', 'O que a marca'], linhas: [
    ['Roma cristã do Oriente', '330 – 518', 'Fundação de Constantinopla; Teodósio I e a divisão de 395; Calcedónia (451); o Ocidente cai em 476 e o Oriente resiste; muralhas de Teodósio II'],
    ['Era de Justiniano', '518 – 610', 'Justiniano e Teodora; Corpus Iuris Civilis; Santa Sofia; Revolta de Nika; reconquistas de Belisário e Narses; peste de 541–542; perda de grande parte de Itália para os lombardos'],
    ['Sobrevivência', '610 – 717', 'Heráclio vence os sassânidas (628) mas perde o Egito e a Síria para o Islão; cercos de Constantinopla (674–678 e 717–718); fogo grego; nascem os themas'],
    ['Iconoclastia e recuperação', '717 – 867', 'Leão III e a querela das imagens (c. 726/730–843); a imperatriz Irene; guerras com búlgaros e árabes; conversão dos eslavos; Fócio'],
    ['Dinastia macedónica', '867 – 1056', 'Apogeu militar e cultural; Nicéforo Focas, João Tzimisces e Basílio II (976–1025); batismo da Rus de Kiev; ruptura com Roma em 1054'],
    ['Crise e Comnenos', '1056 – 1204', 'Derrota de Manziquerta (1071); Aleixo I e as Cruzadas; Comnenos restauram o Império; 4.ª Cruzada e saque de 1204'],
    ['Império Latino e exílio', '1204 – 1261', 'Estados bizantinos sucessores em Niceia, no Epiro e em Trebizonda; Miguel VIII recupera Constantinopla em 1261'],
    ['Paleólogos', '1261 – 1453', 'Império pequeno e pobre mas culturalmente brilhante; guerras civis; avanço otomano; cerco e queda a 29 de maio de 1453']
  ] } },
  { img: 'biz-mapa-1025', leg: 'Mapa do Império Bizantino em 1025.' },
  { h: 'Quem eram os «bizantinos»?' },
  'O nome «Bizâncio» vem de uma antiga colónia grega, **Bizâncio**, onde Constantino fundou a sua cidade. O adjetivo «bizantino» só se tornou comum no século XVII, a partir do trabalho do humanista alemão **Hieronymus Wolf** (1557), que publicou os textos dessa época e lhe deu o nome. Os contemporâneos diziam *Basileia ton Rhomaion*, «Império dos Romanos». Até os turcos e árabes chamavam à região *Rum*, «Roma». Quem visse um camponês da Anatólia no século X e lhe perguntasse quem era, ouviria «romano».',
  'Era uma mistura. A língua era o **grego**, a religião o cristianismo **ortodoxo**, a lei vinha de **Roma** e a cultura de uma herança helenística que se renovava a cada geração. Dentro do Império havia gregos, arménios, sírios, eslavos, georgianos, vlacos, judeus e muitos outros. O que unia era a fé, o imperador e o sentimento de pertencer à civilização romana.',
  { h: 'Porque importam' },
  { lista: [
    '**Direito:** o *Corpus Iuris Civilis* de Justiniano reuniu e organizou o direito romano. Redescoberto na Itália medieval, está na base do direito civil de Portugal e de grande parte da Europa continental e da América Latina.',
    '**Os clássicos:** foram escribas bizantinos que copiaram, estudaram e guardaram Homero, Platão, Aristóteles, Euclides, Arquimedes e muitos outros. Sem eles, muito da Grécia Antiga teria desaparecido.',
    '**Arte e arquitetura:** a cúpula de Santa Sofia, os mosaicos dourados e os ícones criaram uma linguagem visual que ainda marca as igrejas ortodoxas e influenciou Veneza, Ravena e a Rússia.',
    '**Cristianismo oriental:** a Igreja ortodoxa nasceu e cresceu no Império; a sua separação de Roma (1054) é uma das divisões mais longas da história cristã.',
    '**Uma ponte e um escudo:** durante séculos, Constantinopla travou os avanços do Oriente sobre a Europa e, ao mesmo tempo, foi o ponto de contacto entre o Mediterrâneo, a Rússia e o Oriente muçulmano.',
    '**Eslavos e Balcãs:** missionários bizantinos criaram o alfabeto que deu origem ao cirílico; Bulgária, Sérvia e Rússia herdaram a fé, a escrita e a arte do Império.'
  ] },
  { caixa: 'Constantinopla hoje', texto: 'A cidade tem hoje o nome de **Istambul** (do grego *eis tin polin*, «para a cidade»). As muralhas de Teodósio ainda se veem; **Santa Sofia** é de novo uma mesquita desde 2020, depois de ter sido museu (1935–2020); a **Igreja de Cora** e o **Hipódromo** ainda se visitam. O centro histórico de Istambul faz parte do Património Mundial da UNESCO desde 1985.' },
  { img: 'biz-santa-sofia-exterior', leg: 'Exterior de Santa Sofia, Istambul.' },
  { img: 'biz-mapa-1450', leg: 'Mapa do Império Bizantino cerca de 1450.' }
];

const linha = [
  'Esta linha do tempo segue os acontecimentos principais da história bizantina, de 330 a 1453. As datas são as convencionais; quando as fontes divergem, assinala-se. Para a Roma anterior e para a queda do Ocidente em 476, veja a página «Crise, Dominato e Queda».',
  { linha: [
    { d: '11 de maio de 330', t: 'Inauguração de Constantinopla', x: 'O imperador **Constantino I** inaugura a «Nova Roma» no local da antiga **Bizâncio**, uma cidade grega fundada, segundo a tradição, no século VII a.C. Escolheu o sítio pela posição estratégica, e dotou-a de fórum, hipódromo, palácio e uma população que cresceu rapidamente com privilégios e distribuição de trigo.' },
  ] },
  { img: 'biz-mosaico-constantino-cidade', leg: 'Constantino e Justiniano com a Virgem, mosaico do vestíbulo de Santa Sofia.' },
  { linha: [
    { d: '380 – 395', t: 'Teodósio I e a divisão do Império', x: 'Em 380, o **Édito de Tessalónica** faz do cristianismo niceno a religião oficial. Teodósio I é o último imperador a reinar sobre o Império inteiro; ao morrer, em 395, deixa o Ocidente a Honório e o Oriente a Arcádio. A divisão era administrativa, mas, na prática, tornou-se definitiva.' },
    { d: '413 – 451', t: 'Teodósio II: muralhas, código e Calcedónia', x: 'As **Muralhas de Teodósio** (413), reforçadas depois de um terremoto em 447, protegem a cidade durante mil anos. O *Codex Theodosianus* (438) reúne as leis. Em 451, o **Concílio de Calcedónia** define a natureza de Cristo e cria uma fratura com as igrejas que a recusam (coptas, arménias e siríacas).' },
    { d: '476', t: 'Cai o Ocidente, o Oriente resiste', x: 'A deposição de Rómulo Augústulo por Odoacro põe fim ao Império do Ocidente. O imperador **Zenão**, em Constantinopla, fica como único imperador romano. Os reis germânicos do Ocidente passam a reconhecer, em princípio, a sua superioridade.' },
    { d: '527 – 565', t: 'Justiniano e Teodora', x: 'Um camponês ilírio que chega ao trono, e uma antiga atriz que se torna imperatriz. Juntos, reformam as leis, reconstroem a capital, protegem as artes e tentam reconstruir o Império de Roma.' },
    { d: 'janeiro de 532', t: 'A Revolta de Nika', x: 'No Hipódromo, as facções dos **Azuis** e dos **Verdes** unem-se contra o imperador, gritando *Nika!* («vitória!»). Parte da cidade arde, incluindo a segunda Santa Sofia. Segundo o historiador Procópio, Justiniano pensou em fugir, e foi **Teodora** que o convenceu a ficar. Belisário e Mundo entraram no Hipódromo e a repressão custou, segundo Procópio, cerca de **30 000** mortos, um número provavelmente exagerado.' },
  ] },
  { img: 'biz-nika-cena', leg: 'Revolta de Nika, 532; cena imaginada. Ilustração gerada por IA.' },
  { linha: [
    { d: '532 – 537', t: 'A nova Santa Sofia', x: 'Em menos de seis anos, os arquitetos **Antémio de Trales** e **Isidoro de Mileto** erguem uma igreja com uma cúpula de cerca de 31 a 33 m de diâmetro (consoante o eixo medido), inaugurada a 27 de dezembro de 537. A cúpula caiu parcialmente num terremoto em 558 e foi refeita, mais alta, em 562.' },
    { d: '529 – 534', t: 'O *Corpus Iuris Civilis*', x: 'Comissões de juristas, com **Triboniano** como figura central, reúnem o *Código* (529, revisto em 534), o *Digesto* (533, extratos dos grandes juristas) e as *Instituições* (manual para estudantes), a que se juntam as *Novelas*, as leis posteriores de Justiniano.' },
    { d: '533 – 554', t: 'As reconquistas', x: '**Belisário** vence os vândalos no norte de África (533–534) e, a partir de 535, ataca a Itália dos ostrogodos. A guerra gótica durou quase vinte anos, devastou o país, e foi concluída por **Narses**, vencedor em Busta Gallorum (552). Por volta de 552, Justiniano aproveita uma guerra civil visigoda para ocupar uma faixa do sudeste da Hispânia, a província de *Spania*.' },
    { d: '541 – 542', t: 'A peste de Justiniano', x: 'A primeira grande pandemia de peste bubónica de que há registo (a bactéria *Yersinia pestis* foi confirmada por análises de ADN antigo) chega ao Egito em 541 e a Constantinopla em 542. Procópio fala de milhares de mortos por dia; as estimativas modernas de mortalidade são muito debatidas. O próprio imperador adoeceu e recuperou. A população do Império e a capacidade de pagar o exército sofreram.' },
    { d: '602 – 628', t: 'Heráclio e a guerra com a Pérsia', x: 'Após o golpe de Focas (602), o rei sassânida **Cosroes II** invade o Império. Os persas tomam Antioquia (611), Jerusalém (614, com a Vera Cruz) e Alexandria (c. 619). Em 626, um cerco conjunto de persas e ávaros a Constantinopla falha. **Heráclio**, imperador desde 610, contra-ataca pelo Cáucaso e vence perto de Nínive (627). Cosroes é deposto e a paz é feita em 628.' },
  ] },
  { img: 'biz-solido-heraclio', leg: 'Sólido de ouro de Heráclio e Heráclio Constantino.' },
  { linha: [
    { d: '634 – 642', t: 'A perda para o Islão', x: 'Os exércitos árabes, unidos pela nova religião, derrotam os bizantinos no **Yarmuk** (636), tomam Jerusalém (c. 637/638) e Alexandria (641–642). Em menos de dez anos, o Império perde a Síria, a Palestina e o Egito, as suas províncias mais ricas. A Anatólia fica como núcleo do Estado e organiza-se em **themas**.' },
    { d: '674 – 678', t: 'O primeiro cerco árabe e o fogo grego', x: 'Segundo a cronologia tradicional (alguns historiadores propõem datas mais antigas, c. 667–669), a frota omíada ataca Constantinopla durante vários anos. A defesa é salva por uma arma nova, o **fogo grego**, um líquido incendiário lançado de sifões, que arde mesmo sobre a água; a tradição liga-o a um arquiteto sírio, Calínico, c. 672. O segredo da sua fórmula foi muito bem guardado e perdeu-se.' },
  ] },
  { img: 'biz-fogo-grego-skylitzes', leg: 'Fogo grego, miniatura da Crónica de Escilitzes, Madrid.' },
  { linha: [
    { d: '717 – 718', t: 'O segundo cerco árabe', x: 'O imperador **Leão III**, recém-coroado, resiste ao grande cerco de Maslama. Fome, inverno rigoroso, fogo grego e o apoio búlgaro (tradicionalmente atribuído ao cã Tervel) travam a ofensiva. O fracasso encerra a fase de grande expansão árabe sobre a Europa pelo leste.' },
    { d: 'c. 726/730 – 843', t: 'A iconoclastia', x: 'Leão III e os seus sucessores proíbem ou restringem o culto das imagens sagradas. As causas são debatidas: a pressão do Islão, derrotas militares lidas como castigo divino, ideias teológicas. Há perseguições, monges exilados, e um debate profundo sobre o que é uma imagem. Em 787, **Irene** convoca o Concílio de Niceia II, que restabelece os ícones; o imperador Leão V volta a proibi-los em 815; e a **11 de março de 843** a imperatriz Teodora, regente do filho, restaura-os definitivamente, o «Triunfo da Ortodoxia».' },
  ] },
  { img: 'biz-iconoclastia-chludov', leg: 'Iconoclastas a apagar um ícone de Cristo, Saltério de Chludov.' },
  { linha: [
    { d: '863 – 885', t: 'Cirilo, Metódio e os eslavos', x: 'Os irmãos **Cirilo e Metódio**, de Tessalónica, vão para a Morávia e traduzem a liturgia para eslavo, com um alfabeto novo, o glagolítico. Os seus discípulos levam esta obra à Bulgária, onde nasce o cirílico, no círculo de Preslav, hoje usado por centenas de milhões.' },
    { d: '867 – 1056', t: 'A dinastia macedónica', x: '**Basílio I**, um camponês que chega ao trono, funda uma dinastia que reina quase dois séculos. É a idade de ouro da cultura bizantina: sob **Leão VI** e **Constantino VII** compilam-se leis, manuais militares e enciclopédias; sob **Nicéforo II Focas** (963–969) e **João Tzimisces** (969–976), o Império recupera Creta, Chipre e Antioquia.' },
    { d: '976 – 1025', t: 'Basílio II', x: 'Após guerras civis e a derrota para os búlgaros em 986, **Basílio II** reorganiza o exército e conquista a Bulgária, em 1018, depois de uma guerra de mais de trinta anos. Ficou conhecido como o «Matador de Búlgaros». Segundo Escilitzes, em 1014 mandou cegar milhares de prisioneiros; o número (15 000) é provavelmente exagerado. Em 1025 morre como o imperador de maior prestígio em séculos.' },
  ] },
  { img: 'biz-basilio-ii-salterio', leg: 'Basílio II no seu Saltério, Biblioteca Marciana, Ms. gr. 17, fólio 3r.' },
  { linha: [
    { d: '988 / 989', t: 'A Rus converte-se', x: 'O príncipe **Vladimir de Kiev** casa com Ana, irmã de Basílio II, recebe o batismo ortodoxo e envia 6000 guerreiros para servir o imperador, origem da **Guarda Varegue**. A conversão (c. 988/989) liga a Rússia, a Ucrânia e a Bielorrússia ao mundo bizantino.' },
    { d: '16 de julho de 1054', t: 'O Cisma', x: 'Depois de uma disputa entre o cardeal **Humberto** (legado do papa) e o patriarca **Miguel Cerulário**, o primeiro deposita sobre o altar de Santa Sofia uma bula de excomunhão. Não foi uma rutura súbita nem total, e só com o tempo, e com a 4.ª Cruzada, o fosso se tornou definitivo. As excomunhões foram levantadas em 1965.' },
    { d: '26 de agosto de 1071', t: 'Manziquerta', x: 'O imperador **Romano IV Diógenes** é derrotado e capturado pelo sultão seljúcida **Alp Arslan**. A derrota em si foi menos decisiva do que as guerras civis que se lhe seguiram: nas décadas seguintes, os turcos ocupam grande parte da Anatólia. No mesmo ano, os normandos tomam Bari, o último reduto bizantino em Itália.' },
    { d: '1081 – 1180', t: 'Os Comnenos', x: '**Aleixo I Comneno** (1081–1118) salva o Estado dos normandos, dos pechenegues e dos turcos, e pede ajuda ao Ocidente, o que contribui para a **1.ª Cruzada** (1096–1099). A sua filha **Ana Comnena** escreverá a *Alexíada*. Seguem-se **João II** (1118–1143) e **Manuel I** (1143–1180), que sofre a derrota de Miriocéfalo contra os turcos em 1176.' },
    { d: '12 – 13 de abril de 1204', t: 'A 4.ª Cruzada e o saque', x: 'Os cruzados, desviados de Jerusalém por dívidas a Veneza e pela promessa de um pretendente bizantino, **Aleixo IV**, tomam Constantinopla e saqueiam-na durante três dias. Destroem igrejas e bibliotecas, levam relíquias e obras de arte (entre elas, os cavalos de bronze que hoje estão em Veneza) e matam milhares de habitantes. O papa Inocêncio III condenou a violência. A cidade nunca mais recuperou totalmente.' },
  ] },
  { img: 'biz-cruzada-delacroix', leg: 'A Entrada dos Cruzados em Constantinopla, Delacroix, Louvre.' },
  { img: 'biz-cavalos-sao-marcos', leg: 'Cavalos originais de São Marcos, expostos no museu da basílica, Veneza.' },
  { linha: [
    { d: '1204 – 1261', t: 'O Império Latino e os Estados sucessores', x: 'O cruzado **Balduíno de Flandres** torna-se «imperador latino», mas o seu domínio é frágil. Os bizantinos organizam-se em três estados: o **Império de Niceia** (Teodoro I Láscaris), o **Despotado do Epiro** e o **Império de Trebizonda**. Niceia revela-se o mais forte.' },
    { d: '25 de julho de 1261', t: 'Recuperação de Constantinopla', x: 'Um general de Niceia, **Aleixo Estratigopulo**, entra na cidade quase sem luta, quando o exército latino e a frota veneziana estavam ausentes. O imperador **Miguel VIII Paleólogo** funda a última dinastia bizantina.' },
    { d: '1261 – 1400', t: 'Os Paleólogos entre guerras civis e otomanos', x: 'Um Império pequeno e pobre, devastado por guerras civis (1321–1328 e 1341–1347), pela peste negra (1347) e pelo avanço sérvio e otomano. Os otomanos atravessam o Helesponto em 1354 e tomam Adrianopla (c. 1369). O Império passa a pagar tributo e a ser vassalo do sultão. Em 1439, o imperador **João VIII** aceita em Florença a união com Roma, que Constantinopla rejeita; a cruzada de socorro termina em desastre em **Varna** (1444).' },
    { d: '6 de abril – 29 de maio de 1453', t: 'O cerco e a queda de Constantinopla', x: 'O sultão **Maomé II**, de 21 anos, cerca a cidade com um exército que as fontes estimam entre 50 000 e 80 000 homens e uma artilharia pesada, entre eles o enorme canhão do engenheiro húngaro **Urbano**. Defendem-na cerca de 7000 homens, sob o imperador **Constantino XI Paleólogo**, ajudados por genoveses e outros estrangeiros, entre eles o capitão **Giovanni Giustiniani**. Uma corrente fecha o Corno de Ouro; os otomanos arrastam navios por terra para o contornar. O assalto final começa de madrugada a 29 de maio. Constantino XI morre a combater.' },
  ] },
  { img: 'biz-cerco-1453-cena', leg: 'Cerco de Constantinopla, 1453; reconstituição conjetural. Ilustração gerada por IA.' },
  { linha: [
    { d: '1453 – 1461', t: 'Depois da queda', x: 'Maomé II faz de Constantinopla a sua capital, converte Santa Sofia em mesquita e adota o título de «César de Roma» (*Kayser-i Rum*). Mistra, a última sede dos Paleólogos, cai em 1460, e Trebizonda, o último fragmento do mundo bizantino, em 1461. Em 1472, a sobrinha do último imperador, **Zoé (Sofia) Paleóloga**, casa com Ivan III de Moscovo, e mais tarde nasce a ideia de Moscovo como a «Terceira Roma».' }
  ] },
  { img: 'biz-mehmed-bellini', leg: 'Retrato de Maomé II, Gentile Bellini, National Gallery.' }
];

const mapa = [
  'Quase toda a história bizantina gira em torno de uma cidade, Constantinopla; as outras funcionam como portos, fortalezas, capitais regionais ou centros de peregrinação. Esta secção apresenta as principais cidades, a forma como o território mudou e as rotas que o ligavam ao mundo.',
  { h: 'Cidades principais' },
  { tabela: { cab: ['Cidade', 'Hoje', 'Papel'], linhas: [
    ['Constantinopla', 'Istambul, Turquia', 'Capital, residência do imperador e do patriarca, maior cidade da Europa cristã durante séculos'],
    ['Tessalónica', 'Salónica, Grécia', 'Segunda cidade do Império, grande porto e feira; cidade natal de Cirilo e Metódio'],
    ['Niceia', 'İznik, Turquia', 'Dois concílios (325 e 787); capital do Império de Niceia (1204–1261)'],
    ['Ravena', 'Itália', 'Capital do Ocidente a partir de 402, e depois do Exarcado bizantino (584–751); mosaicos'],
    ['Antioquia', 'Antakya, Turquia', 'Uma das maiores cidades do Oriente; perdida para os persas (540, 611) e para os árabes (637); reconquistada em 969'],
    ['Alexandria', 'Egito', 'Grande porto e centro de saber; perdida em 641–642'],
    ['Éfeso', 'Turquia', 'Concílio de 431; grande cidade da Anatólia ocidental'],
    ['Trebizonda', 'Trabzon, Turquia', 'Porto do mar Negro; capital de um império independente (1204–1461)'],
    ['Mistra', 'Perto de Esparta, Grécia', 'Capital do Despotado da Moreia, centro cultural no século XV']
  ] } },
  { img: 'biz-constantinopla-buondelmonti', leg: 'Mapa de Constantinopla no Liber Insularum Archipelagi de Buondelmonti, cópia anterior a 1430, BnF, fólio 37r.' },
  { h: 'Constantinopla' },
  'Constantinopla assentava num promontório triangular, com o Bósforo a leste, o Corno de Ouro a norte e o mar de Mármara a sul. Constantino terá copiado de Roma as **sete colinas**, e a cidade foi dividida em catorze regiões. A grande avenida, a **Mese**, ligava os fóruns, desde o Grande Palácio até às portas ocidentais. Na época de Justiniano teria entre 400 000 e 500 000 habitantes (a estimativa é muito incerta), antes de descer com a peste, as guerras e os cercos; no final, em 1453, teria muito menos, talvez 50 000.',
  { lista: [
    '**O Grande Palácio:** um complexo de pavilhões, jardins e salões ao lado do Hipódromo, onde viviam os imperadores, até que a corte se mudou para o palácio de Blaquernas, no século XII. A sala do trono, a Magnaura, tinha autómatos (leões mecânicos que rugiam, pássaros que cantavam) que impressionaram embaixadores.',
    '**O Hipódromo:** o grande estádio das corridas de carros, onde também se faziam cerimónias e revoltas. Estava decorado com monumentos de todo o mundo antigo: o **obelisco** de Tutmés III (trazido do Egito por Teodósio I), a **coluna das Serpentes** (vinda de Delfos) e os quatro **cavalos de bronze**.',
    '**Santa Sofia:** a «Grande Igreja», símbolo do Império e igreja do patriarca, onde se coroavam os imperadores.',
    '**Os santos Apóstolos:** a igreja onde foram sepultados Constantino e muitos imperadores. Foi demolida pelos otomanos.',
    '**As cisternas e o aqueduto:** a cidade não tinha rio, e dependia de aquedutos (o de Valente, século IV) e de cisternas enormes, como a **Cisterna Basílica** (c. 532), com 336 colunas.',
    '**As muralhas:** a **Muralha de Teodósio**, com mais de cinco quilómetros, de mar a mar, com fosso, muro exterior e muro interior, resistiu a avares, árabes, búlgaros e russos, e só foi ultrapassada pelos cruzados, em 1204, pelo lado do Corno de Ouro, e pelos otomanos, em 1453.'
  ] },
  { img: 'biz-constantinopla-reconstrucao', leg: 'Constantinopla cerca de 550; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'biz-hipodromo-obelisco', leg: 'Obelisco de Teodósio, coluna das Serpentes e Obelisco Murado; fotografia de James Robertson, cerca de 1854.' },
  { img: 'biz-muralhas-teodosio', leg: 'Muralhas de Teodósio II, Istambul.' },
  { img: 'biz-santa-sofia-537', leg: 'Santa Sofia em 537; reconstituição conjetural. Ilustração gerada por IA.' },
  { cit: 'A cúpula parece não assentar em alvenaria sólida, mas estar suspensa do céu por uma corrente de ouro.', fonte: 'Procópio de Cesareia, Os Edifícios, livro I (paráfrase em tradução livre)' },
  { h: 'Tessalónica, Niceia e Ravena' },
  '**Tessalónica** era a segunda cidade do Império, um grande porto e cidade-fortaleza do norte do Egeu, ponto de partida para a missão aos eslavos. A sua igreja de São Demétrio, patrono da cidade, é um dos grandes santuários bizantinos. Foi saqueada pelos sarracenos em 904 e pelos normandos em 1185.',
  '**Niceia** (hoje İznik), perto do mar de Mármara, é lembrada por dois concílios e pelo Credo que ainda se reza. Entre 1204 e 1261 foi a capital do Império no exílio: as suas muralhas resistiram ao Império Latino e foi de lá que partiu a reconquista de Constantinopla.',
  '**Ravena**, no norte da Itália, foi a capital do Império do Ocidente a partir de 402 e dos reis ostrogodos, e depois do exarca bizantino. Conserva alguns dos mosaicos mais perfeitos do mundo, incluindo a **igreja de São Vital**, consagrada em 547, em cujo presbitério estão os retratos de Justiniano e Teodora. O Exarcado caiu para os lombardos em 751.',
  { img: 'biz-ravena-sao-vital', leg: 'Exterior da basílica de São Vital, Ravena.' },
  { h: 'Trebizonda e Mistra' },
  '**Trebizonda**, no sudeste do mar Negro, foi o centro de um império fundado em 1204 por dois netos de um imperador Comneno, Aleixo e David. Resistiu até 1461, o último fragmento do mundo bizantino, graças ao comércio e à sua posição remota.',
  '**Mistra**, no Peloponeso, tornou-se a capital do **Despotado da Moreia** e teve, no século XV, uma vida cultural intensa, com o filósofo **Jorge Gemisto Pletão**, que ensinava Platão. Cedeu aos otomanos em 1460. As suas igrejas e palácios em ruínas são Património Mundial da UNESCO.',
  { h: 'Como o território mudou' },
  { tabela: { cab: ['Data', 'Extensão do Império'], linhas: [
    ['c. 395', 'Balcãs, Grécia, Anatólia, Síria, Palestina, Egito e Cirenaica'],
    ['565', 'Mais Itália, sul da Hispânia, norte de África e a Dalmácia: o Mediterrâneo quase inteiro'],
    ['c. 650', 'Sem Egito, Síria e Palestina; Anatólia, Constantinopla, Trácia, Sicília e partes de Itália e África'],
    ['c. 780', 'Anatólia, partes dos Balcãs e do sul de Itália; pressão búlgara e árabe'],
    ['1025', 'Anatólia, Bulgária, Grécia, Arménia ocidental, sul de Itália, Creta e Chipre'],
    ['1204', 'Constantinopla e boa parte do território passam a mãos latinas; três Estados sucessores'],
    ['c. 1350', 'Tessalónica, Mistra, ilhas, Trácia oriental e a capital'],
    ['c. 1450', 'Constantinopla e arredores, Mistra e algumas ilhas']
  ] } },
  { h: 'Rotas' },
  { lista: [
    '**O Mediterrâneo:** a frota ligava Constantinopla a Ravena, Cartago, Alexandria e Tessalónica; as cidades italianas (Amalfi, Veneza, Génova) tornaram-se parceiras comerciais e, depois, rivais.',
    '**A «rota dos Varegues aos Gregos»:** a via de rios que ligava o Báltico ao mar Negro, pelo Dnieper. Mercadores e guerreiros escandinavos (os varegues) e eslavos desciam até Constantinopla; muitos serviram o imperador.',
    '**A Via Egnácia:** a estrada romana de leste a oeste, do Adriático ao Bósforo, ainda usada na Idade Média.',
    '**A Rota da Seda:** a seda chegava por terra, e, desde c. 552, segundo Procópio, monges levaram ovos de bicho-da-seda para Constantinopla, escondidos em canas, iniciando uma indústria própria.',
    '**O mar Negro:** trigo, peixe, peles e escravos; as colónias de Quersoneso (Crimeia) e Trebizonda eram pontos-chave.'
  ] }
];

const sociedade = [
  'Esta secção descreve como se governava, se acreditava, se comerciava e se vivia no Império. Mil e cem anos são muito tempo: o que vale para o tempo de Justiniano nem sempre vale para o dos Paleólogos. Quando os números são estimativas, diz-se.',
  { h: 'O imperador e a corte' },
  'O chefe do Estado era o **imperador**, em grego *basileus* (título oficial a partir de c. 629, com Heráclio; antes, o título latino era *imperator*). Era considerado escolhido por Deus, mas **não havia lei de sucessão**: o poder passava, em teoria, por aclamação do exército, do Senado e do povo, e depois pela coroação pelo patriarca. Na prática, muitos imperadores subiram por golpe, e houve dinastias longas, como a de Heráclio, a dos Macedónios e a dos Paleólogos. Para impedir que um rival reinasse, mutilava-se-lhe o corpo (cegar, cortar o nariz), pois um imperador devia ser inteiro. Os filhos nascidos durante o reinado, num quarto forrado de púrpura, eram chamados **porfirogénitos**, «nascidos na púrpura», e tinham grande prestígio.',
  'A corte era um mundo de **cerimónias**, de títulos hierárquicos e de eunucos, que podiam ocupar altos postos (sobretudo cargos de confiança no palácio, porque, sem filhos, não fundavam dinastias). O *Livro das Cerimónias*, compilado sob Constantino VII (século X), descreve com detalhe a ordem dos desfiles, das audiências e das festas. A ideia era que a ordem na terra imitava a ordem do céu.',
  { img: 'biz-cerimonia-corte', leg: 'Cerimónia da corte cerca de 1000; cena imaginada. Ilustração gerada por IA.' },
  { h: 'O Estado: lei, administração e themas' },
  'O Império manteve um Estado forte, com impostos, burocratas e leis escritas. Em Constantinopla havia o **prefeito da cidade** (o *eparca*), que controlava o comércio, as corporações e os preços. O *Livro do Eparca* (c. 912) regula ofícios como notários, ourives, comerciantes de seda, padeiros e peixeiros.',
  'A partir do século VII, a Anatólia foi organizada em **themas**, grandes regiões militares e administrativas governadas por um *strategos* (general), que juntavam o comando das tropas locais, os soldados-camponeses com terra e a cobrança de impostos. A origem exata do sistema é debatida: terá surgido de forma gradual, durante as guerras do século VII. Mais tarde, foram subdivididos e depois enfraqueceram, com o desenvolvimento de exércitos profissionais e mercenários.',
  { img: 'biz-esquema-temas', leg: 'Esquema conceptual de um tema bizantino, século IX. Ilustração gerada por IA.' },
  { h: 'Azuis e Verdes: o Hipódromo' },
  'As corridas de carros eram a grande paixão de Constantinopla. Os cocheiros corriam por quatro equipas, ou **facções** (*demoi*): **Azuis**, **Verdes**, e as menos importantes, Brancos e Vermelhos. Cada uma tinha cocheiros, claques, músicos e apoiantes entre os poderosos. Os Azuis e os Verdes, em particular, tornaram-se organizações de bairro com carácter político e festivo, e o Hipódromo era um dos poucos locais onde o imperador via o povo e o povo gritava diante dele. Uma ideia popular, hoje contestada pelos historiadores, é a de que as facções correspondiam a posições teológicas fixas; não é assim tão simples.',
  { img: 'biz-hipodromo-corrida', leg: 'Corrida no Hipódromo, século VI; cena imaginada. Ilustração gerada por IA.' },
  { h: 'Classes sociais' },
  { lista: [
    '**A aristocracia:** os grandes proprietários, os *dynatoi* («poderosos»), e as famílias militares da Anatólia (Focas, Escleros, Comnenos) que disputaram o trono. Os imperadores macedónios tentaram limitar-lhes o poder para proteger os camponeses livres.',
    '**Os funcionários e o clero:** muitos eram homens de origem modesta, que subiam pelo estudo, pelo mérito e pelo favor do imperador.',
    '**Os camponeses livres:** a base do exército e dos impostos, pagavam ao Estado e prestavam serviço militar. Perder a terra para os poderosos era um risco constante.',
    '**Os comerciantes e artesãos:** organizados em corporações regulamentadas, em Constantinopla e em Tessalónica.',
    '**Os escravos:** existiam no campo e na casa, mas a escravatura nunca foi a base da economia. Sob a influência cristã, algumas leis protegeram-nos, mas não a aboliram.',
    '**As mulheres:** tinham direitos de herança e de propriedade, e algumas dirigiram o Estado: Teodora, Irene, Zoé, Teodora de Macedónia, e outras. A vida normal, porém, era recolhida, sobretudo nas famílias ricas.'
  ] },
  { h: 'A Igreja ortodoxa' },
  'A Igreja e o Estado estavam intimamente ligados: o imperador protegia a Igreja, convocava concílios e nomeava patriarcas, e o patriarca de Constantinopla coroava o imperador. Muitos historiadores falam de «cesaropapismo», mas a ideia é discutida: os patriarcas e os monges resistiram muitas vezes ao poder imperial. O imperador era leigo; não podia definir a doutrina, mas devia defendê-la.',
  'Os grandes debates teológicos tiveram sempre consequências políticas. Resumem-se na tabela.',
  { tabela: { cab: ['Controvérsia', 'Concílio / data', 'Questão'], linhas: [
    ['Arianismo', 'Niceia (325), Constantinopla (381)', 'Se o Filho é da mesma natureza do Pai; define-se o Credo niceno'],
    ['Nestorianismo', 'Éfeso (431)', 'Se Maria é «Mãe de Deus»; a Igreja do Oriente separa-se'],
    ['Monofisismo', 'Calcedónia (451)', 'As naturezas divina e humana de Cristo; coptas, arménios e siríacos não aceitam'],
    ['Monotelismo', 'Constantinopla III (680–681)', 'Uma só vontade em Cristo? Tentativa de Heráclio de reconciliar as igrejas'],
    ['Iconoclastia', 'Hieria (754) e Niceia II (787); 843', 'Se se podem venerar imagens sagradas'],
    ['Filioque e primado', 'Cisma de 1054', 'O Espírito Santo procede do Pai e do Filho? Que autoridade tem o papa?']
  ] } },
  { img: 'biz-icone-sinai', leg: 'Cristo Pantocrator, ícone do século VI, mosteiro de Santa Catarina.' },
  { img: 'biz-chora-anastasis', leg: 'Fresco da Anástase, igreja de Cora, Istambul.' },
  'A vida religiosa girava em torno dos **mosteiros**, que também eram centros de estudo, hospitais e asilos. O **Monte Atos**, na Grécia, tornou-se desde 963 (fundação da Grande Lavra) a «montanha sagrada» do monaquismo ortodoxo e continua a sê-lo. No século XIV, a corrente do **hesicasmo** (a oração do coração, com a repetição do nome de Jesus), defendida por São Gregório Palamas, marcou a espiritualidade.',
  { h: 'Economia' },
  'A moeda de ouro, o **sólido** (em grego, *nomisma*), criada por Constantino em c. 309/312, manteve o seu peso e pureza durante cerca de 700 anos, e circulava do Atlântico à Índia como a moeda mais fiável da época. Só no século XI foi desvalorizada, e Aleixo I reformou a moeda em 1092 (o *hyperpyron*).',
  { img: 'biz-solido-justiniano', leg: 'Sólido de ouro de Justiniano I.' },
  'A riqueza assentava na agricultura (trigo, azeite, vinho), no comércio e em indústrias de luxo. A **seda** foi um monopólio imperial durante séculos: as oficinas de Constantinopla produziam tecidos que só o Estado podia vender aos estrangeiros em certas qualidades. O Estado cobrava impostos sobre a terra e o comércio, e subsidiava o trigo da capital. No século XI, os imperadores concederam privilégios comerciais a **Veneza** (1082), que depois ganharia muito poder na cidade.',
  { img: 'biz-mercado', leg: 'Mercado de Constantinopla, século X; cena imaginada. Ilustração gerada por IA.' },
  { h: 'Língua, escrita e livros' },
  'Até ao século VI, o latim ainda era a língua da lei e do exército; o **grego** tornou-se a língua oficial no século VII. O grego da Igreja e da corte era muito conservador, e imitava o grego antigo, enquanto a língua falada mudava. Por isso, os textos escritos são mais próximos de Platão do que do povo. Os livros eram copiados à mão, em pergaminho, nos mosteiros e nas oficinas da capital. Por volta do século IX adotou-se a **minúscula**, uma escrita mais compacta e rápida, que permitiu copiar mais livros e salvou muitos textos antigos, transcritos da maiúscula.',
  { img: 'biz-scriptorium', leg: 'Scriptorium monástico, século X; cena imaginada. Ilustração gerada por IA.' },
  { h: 'A casa, a alimentação e o vestuário' },
  'As casas de Constantinopla eram de tijolo e pedra, com pátio interior, por vezes dois pisos, e nas famílias ricas, banhos e pórticos. Os pobres viviam em casas pequenas e em prédios de aluguer; os incêndios e os terremotos eram frequentes.',
  'A alimentação baseava-se no **pão**, no azeite, nas leguminosas (lentilhas, favas e grão), nos peixes e nos legumes. Bebia-se **vinho**, muitas vezes com resina (o antepassado do retsina grego). Comia-se queijo, carne de porco e de cordeiro, e usava-se um molho de peixe fermentado, o *garos*, herdado dos romanos. O calendário da Igreja impunha longos períodos de jejum (a Quaresma e outros), em que se evitavam a carne e os laticínios. Entre os doces, o mel era o grande adoçante; o açúcar era raro.',
  { img: 'biz-banquete', leg: 'Refeição numa casa abastada, século XI; cena imaginada. Ilustração gerada por IA.' },
  'O **vestuário** mostrava o estatuto social. A peça básica era a túnica, usada com um manto (a *clâmide*, para o imperador e a corte). O **roxo** (*porphyra*) era reservado ao imperador, e a seda tinha leis suntuárias. As mulheres usavam túnicas compridas e um véu, o *maphorion*, e a corte ostentava jóias e pedras preciosas. A moda foi sofrendo influências persas e depois ocidentais.',
  { h: 'Música, jogos e espetáculos' },
  'A música da Igreja era o **canto ortodoxo**, cantado sem instrumentos. Os hinos, como os de **Romano, o Melodista** (século VI), eram poesias longas. Na corte havia órgãos hidráulicos (*hydraulis*) em cerimónias, e instrumentos como a lira, o alaúde e a flauta no dia a dia. Entre os jogos e desportos estavam as **corridas de carros**, o **tzykanion**, um jogo de pólo a cavalo de origem persa jogado pela nobreza, e jogos de tabuleiro, como a *tabula* (antepassado do gamão), cuja famosa partida do imperador Zenão, c. 480, foi registada pelo historiador Agátias. Também havia mimos, teatro de rua e combates de animais, mas a Igreja os condenava.',
  { h: 'Ciência e ensino' },
  'O Império herdou o saber grego e ligou-se ao árabe. A **medicina** produziu manuais de grande influência (Oribásio, Paulo de Egina) e hospitais, os *xenones*; o **Pantocrator** (regulamento de 1136), fundado por João II e pela imperatriz Irene, tinha enfermarias e médicos pagos. Na **matemática e engenharia**, Antémio de Trales e Isidoro de Mileto, os arquitetos de Santa Sofia, eram também matemáticos. **João Filopono** (século VI) criticou a física de Aristóteles e propôs uma ideia de impulso. **Leão, o Matemático** (século IX), ensinou na escola do palácio da Magnaura, fundada por Bardas; astrolábios bizantinos foram preservados. A **química** aplicada deu o fogo grego.',
  { img: 'biz-hospital', leg: 'Hospital bizantino, século XII; cena imaginada. Ilustração gerada por IA.' },
  'A capital teve grandes bibliotecas e um ensino superior de gramática, retórica, filosofia e direito. **Fócio** (século IX) compilou a *Biblioteca*, resumos de cerca de 280 obras, muitas hoje perdidas. A *Suda*, no século X, é uma enciclopédia com mais de trinta mil entradas. Os eruditos bizantinos **copiaram, comentaram e resumiram** os clássicos, e foi dessas cópias que a Europa, mais tarde, recuperou grande parte da literatura grega.',
  { h: 'Tecnologia' },
  { lista: [
    '**Cúpulas e pendentes:** Santa Sofia mostra como assentar uma cúpula circular sobre uma base quadrada, com **pendentes**; o modelo da igreja de «cruz inscrita e cúpula» seria copiado de Kiev a Veneza.',
    '**Água:** aquedutos, cisternas e fontes para uma cidade sem rio.',
    '**Fogo grego:** lançado por sifões em navios e nas muralhas. A composição exata é desconhecida; o consenso atual é que continha petróleo bruto ou refinado com resinas.',
    '**Autómatos:** o trono da Magnaura, com leões que rugiam e pássaros mecânicos, é descrito pelo embaixador italiano Liutprando de Cremona, em 949.',
    '**Têxteis:** a seda e o tingimento com púrpura, um segredo de ofício.'
  ] },
  { h: 'A guerra' },
  'Com fronteiras longas e inimigos por todos os lados, os bizantinos fizeram da **diplomacia** a primeira arma: pagavam subsídios, casavam princesas, baptizavam príncipes e semeavam discórdia entre os adversários. Um manual do século X aconselha que, se possível, convém «mais vencer sem combate». Se era preciso combater, usavam-se exércitos profissionais, os *tagmata*, e o corpo de elite da cavalaria pesada, os **catafractas**, apoiados por arqueiros. Os manuais militares (o *Strategikon* de Maurício, os *Taktika* de Leão VI e o tratado de Nicéforo Focas) são dos mais completos da Idade Média.',
  { img: 'biz-dromon-fogo', leg: 'Dromon com fogo grego, século VIII; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'biz-fogo-grego-sifao', leg: 'Sifão de fogo grego: representação artística hipotética; mecanismo real desconhecido. Ilustração gerada por IA.' },
  'A marinha era a outra grande força. O **dromon**, galera de dois níveis de remos, com sifão de fogo grego na proa, dominou o Mediterrâneo oriental. A **Guarda Varegue**, de escandinavos e anglo-saxões, servia como guarda pessoal do imperador. A partir do século XI, o Império recorreu cada vez mais a mercenários, e a partir do século XIII a frota veneziana e genovesa substituiu a sua.',
  { img: 'biz-santa-sofia-interior', leg: 'Interior de Santa Sofia, Istambul.' }
];

const personalidades = [
  'Catorze figuras que marcaram a história do Império entre 330 e 1453: imperadores e imperatrizes, generais, um patriarca, dois historiadores e o sultão que o encerrou. Quando há lenda ou debate, diz-se.',
  { h: 'Constantino I (c. 272 – 337)' },
  'O primeiro imperador cristão (ou, pelo menos, o primeiro a favorecer o cristianismo; só foi batizado perto da morte). Vencedor da guerra civil em 312 e 324, convocou o **Concílio de Niceia** em 325 e inaugurou **Constantinopla** em 330. Para os bizantinos, foi o «igual aos apóstolos». As suas reformas monetárias (o sólido) duraram séculos.',
  { h: 'Teodósio I (347 – 395)' },
  'Imperador de 379 a 395, impôs a fé nicena (Édito de Tessalónica, 380) e proibiu, por leis sucessivas, os sacrifícios pagãos. Foi o último a governar o Império inteiro. Mandou erguer no Hipódromo o obelisco de Tutmés III, que ainda lá está. Deixou o Império dividido entre os dois filhos.',
  { h: 'Justiniano I (c. 482 – 565)' },
  'Nascido de camponeses na Ilíria, foi adotado por seu tio, o imperador Justino I, e reinou de 527 a 565. Falava latim como língua materna e sonhou restaurar o Império romano. Reuniu as leis no *Corpus Iuris Civilis*, ergueu Santa Sofia e reconquistou o norte de África e a Itália, mas deixou o Estado endividado, com guerras na Pérsia, nos Balcãs e uma peste. Procópio, que o serviu, escreveu tanto o elogio dos *Edifícios* como a *História Secreta*, um panfleto contra ele e Teodora.',
  { img: 'biz-justiniano-sao-vital', leg: 'Mosaico de Justiniano e do séquito, São Vital, Ravena.' },
  { h: 'Teodora (c. 500 – 548)' },
  'Filha de um tratador de ursos do Hipódromo e antiga atriz, casou com Justiniano por volta de 525 e foi uma conselheira de peso. Segundo Procópio, durante a Revolta de Nika, recusou-se a fugir, dizendo que a púrpura é uma boa mortalha. Reformou leis sobre o casamento e o divórcio, protegeu as mulheres, combateu o tráfico de raparigas e tutelou os monofisitas. A *História Secreta*, hostil, é uma fonte pouco fiável sobre a sua vida passada.',
  { img: 'biz-teodora-sao-vital', leg: 'Mosaico de Teodora e das damas, São Vital, Ravena.' },
  { h: 'Belisário (c. 505 – 565)' },
  'O general de Justiniano. Venceu os persas em Dara (530), reprimiu a Revolta de Nika, destruiu o reino vândalo em África (533–534) e tomou Roma e Ravena aos ostrogodos (536–540), com forças muito pequenas. Foi sempre visto com desconfiança na corte. **Narses**, um eunuco armeniano que passou de tesoureiro a general, concluiu a conquista da Itália em 552–553. A história de Belisário a mendigar cego é uma lenda tardia.',
  { h: 'Heráclio (c. 575 – 641)' },
  'Filho do exarca de África, derrubou o tirano Focas em 610, quando o Império estava quase perdido. Em 622–628, numa campanha audaciosa pelo Cáucaso, derrotou os persas e recuperou a Vera Cruz (restituída em Jerusalém em 629 ou 630). Mas, em poucos anos, perdeu a Síria e o Egito para os árabes. Por volta de 629 adotou o título grego de *basileus*, num Império em que o grego ganhava terreno ao latim.',
  { img: 'biz-pratos-david', leg: 'Prato com a batalha de David e Golias, prata, cerca de 629–630, Metropolitan Museum.' },
  { h: 'Leão III, o Isáurico (c. 685 – 741)' },
  'Soldado vindo da fronteira oriental, tomou o poder em 717 e derrotou o cerco árabe de 717–718. Reorganizou o Estado e as leis, e iniciou a iconoclastia, de datas debatidas (726 ou 730). Fundou uma dinastia que governou até 802.',
  { h: 'Irene (c. 752 – 803)' },
  'Imperatriz que governou primeiro como regente do filho e, depois, entre 797 e 802, como governante sozinha, a primeira mulher a governar sozinha o Império. Restabeleceu o culto das imagens no concílio de Niceia (787). Mandou cegar o filho Constantino VI, em 797, para se manter no poder. Foi derrubada em 802. No ano 800, o papa coroou Carlos Magno como imperador, o que alguns explicam pela vacância do trono em Constantinopla, uma interpretação debatida.',
  { h: 'Fócio (c. 815 – 893)' },
  'Um dos maiores eruditos do Império, foi patriarca de Constantinopla e entrou em conflito com o papa Nicolau I. Compilou a *Biblioteca*, ou *Mirobiblion*, com resumos e comentários de cerca de 280 livros, e apoiou a missão aos eslavos. É figura central do «primeiro humanismo bizantino».',
  { h: 'Basílio II (958 – 1025)' },
  'Imperador durante quase cinquenta anos (976–1025), dominou os grandes senhores, venceu duas rebeliões militares e conquistou a Bulgária (1018). Governou como um soldado: sem casar, sem luxos, com um tesouro cheio. Aliou-se a Vladimir de Kiev e criou a Guarda Varegue. Depois da sua morte, o Império, ainda no auge, entrou numa fase de instabilidade.',
  { img: 'biz-zoe-mosaico', leg: 'Mosaico de Zoé e Constantino IX Monómaco, Santa Sofia.' },
  { h: 'Miguel Pselo (1018 – c. 1078)' },
  'Erudito, filósofo, estadista e escritor, serviu como conselheiro de vários imperadores no século XI. A sua *Cronografia*, que narra os reinados de Basílio II a Miguel VII, é um dos grandes textos da literatura bizantina, cheio de retratos psicológicos e de intriga. Revalorizou Platão e a filosofia antiga, embora fosse também um homem de Igreja.',
  { h: 'Ana Comnena (1083 – c. 1153)' },
  'Filha do imperador Aleixo I, é considerada a primeira mulher historiadora importante. Acusada de conspirar contra o irmão João II (o seu envolvimento é debatido), retirou-se para um mosteiro e escreveu a **Alexíada**, uma biografia do pai em quinze livros (composta por volta de 1148). Descreve com pormenor a 1.ª Cruzada, vista de Constantinopla, e os «francos» que chegaram em 1096. Era também versada em medicina e filosofia.',
  { h: 'Constantino XI Paleólogo (1405 – 1453)' },
  'O último imperador. Déspota da Moreia antes de subir ao trono em 1449, tentou obter ajuda ocidental e aceitou a união das igrejas, sem sucesso. Em 1453, ficou na cidade cercada e morreu a combater, segundo a tradição, de espada na mão, sem insígnias; o corpo nunca foi identificado com certeza. Para os gregos, tornou-se um herói nacional, cercado de lendas.',
  { h: 'Maomé II (1432 – 1481)' },
  'O sultão otomano que tomou Constantinopla com 21 anos. Estudou línguas e história, falava grego e admirava Alexandre e César, e adotou o título de «César de Roma». Fez da cidade a sua capital, repovoou-a, protegeu o patriarca grego e a comunidade judaica, e mandou pintar-se por artistas italianos. Foi mecenas e conquistador, e a queda de 1453 deu-lhe, a ele e aos otomanos, o prestígio de um grande império.'
];

const legado = [
  'O Império Bizantino desapareceu em 1453, mas deixou marcas profundas na religião, no direito, na arte, na escrita e na memória de muitos povos.',
  { h: 'Direito' },
  'O *Corpus Iuris Civilis* chegou ao Ocidente medieval pela Itália, onde foi redescoberto e ensinado em **Bolonha** a partir do século XI. Daí passou às universidades europeias e moldou o direito civil de Portugal, de Espanha, de França, da Alemanha e das suas antigas colónias. Cada vez que um estudante de Direito aprende conceitos como «pessoa», «propriedade» ou «contrato», segue categorias que passaram por Justiniano.',
  { h: 'A preservação dos clássicos' },
  'A maior parte dos textos gregos antigos que conhecemos chegou-nos por manuscritos bizantinos, copiados e estudados em Constantinopla ou em mosteiros. Entre eles, o famoso **palimpsesto de Arquimedes**: uma cópia do século X de obras do sábio, apagada em 1229 por um monge para reutilizar o pergaminho num livro de orações, e recuperada nos nossos dias por técnicas de imagem.',
  { img: 'biz-palimpsesto-arquimedes', leg: 'Folha desdobrada do Palimpsesto de Arquimedes; imagem do projeto do Walters Museum.' },
  'Quando os otomanos avançaram, muitos eruditos fugiram para a Itália e levaram livros e ensino do grego: **Manuel Crisoloras** ensinou em Florença em 1397, o cardeal **Bessarião** legou a sua biblioteca a Veneza, e a imprensa de Aldo Manúcio publicou os clássicos gregos. Esta «ponte» é uma das origens do Renascimento italiano.',
  { h: 'Arte e arquitetura' },
  'A arte bizantina é uma arte religiosa e simbólica, com figuras frontais, olhos grandes e fundos de ouro, que pretende mostrar o divino e não a realidade. Os **mosaicos** de ouro e vidro cobriam as cúpulas e abóbadas; os **ícones** pintados em madeira acompanhavam o culto; as **iluminuras** decoravam os manuscritos; e os **marfins**, os esmaltes e a prata trabalhavam as relíquias e os objetos de culto. Nos séculos XIV e XV, o chamado **renascimento dos Paleólogos** (os frescos de Cora, os ícones de Teófanes, o Grego, e de Andrei Rublev, na Rússia) mostra uma arte mais expressiva e viva.',
  'Na arquitetura, as igrejas de **cúpula sobre planta de cruz inscrita**, com mosaicos e iconostase, foram o modelo para o mundo ortodoxo. O seu reflexo vê-se em **São Marcos de Veneza**, na **Santa Sofia de Kiev** e nas igrejas da Sérvia, da Bulgária e da Rússia. Também os otomanos copiaram Santa Sofia na grande tradição de mesquitas de Sinan.',
  { img: 'biz-kiev-santa-sofia', leg: 'Mosaico da Orante, catedral de Santa Sofia de Kiev.' },
  { h: 'Rússia, Balcãs e a «Terceira Roma»' },
  'A fé, a escrita e a arte bizantinas foram o alicerce da cultura de **Kiev**, da **Bulgária**, da **Sérvia** e da **Roménia**. O **cirílico**, criado no círculo dos discípulos de Cirilo e Metódio, é usado hoje por centenas de milhões de pessoas. A **águia bicéfala** dos Paleólogos foi adotada por Moscovo, pela Sérvia e pela Albânia. Depois de 1453, os monges russos defenderam que Moscovo era a «**Terceira Roma**» (a tese do monge Filoteu, c. 1510), e os czares viram-se herdeiros dos imperadores. O património bizantino sobreviveu também sob o domínio otomano, em torno do **Patriarcado Ecuménico**, que continua a ter sede em Istambul.',
  { img: 'biz-athos-lavra', leg: 'Igreja principal (katholikon) da Grande Lavra, Monte Atos.' },
  { h: 'O mito da «decadência»' },
  { caixa: 'Uma ideia a desfazer', texto: 'Autores do Iluminismo, como Gibbon e Voltaire, tomaram «bizantino» como sinónimo de corrupto, intriguista e decadente. Os historiadores de hoje, ao contrário, mostram um Estado de uma resistência excecional: sobreviveu a invasões, guerras civis, epidemias e à tomada da capital em 1204. É verdade que havia golpes, intrigas e crueldades, mas isso não era exclusivo de Bizâncio. A palavra «bizantino» continua a ser usada, em português, para dizer «complicado e inútil», e é injusta.' },
  { h: 'Onde visitar' },
  { lista: [
    '**Istambul (Turquia):** Santa Sofia, a Igreja de Cora (Kariye), as Muralhas de Teodósio, o Hipódromo, a Cisterna Basílica, os museus arqueológicos. Confirme os horários e as regras de visita, que mudaram nos últimos anos.',
    '**Ravena (Itália):** São Vital e Sant’Apollinare in Classe, com os mosaicos do século VI, Património Mundial.',
    '**Veneza (Itália):** a Basílica de São Marcos, com mosaicos, ícones e os cavalos de bronze.',
    '**Tessalónica e Mistra (Grécia):** igrejas bizantinas e a cidade-fantasma de Mistra, ambas Património Mundial; **Monte Atos** (acesso restrito a homens, com autorização) e **Meteora**.',
    '**Sinai (Egito):** o mosteiro de Santa Catarina, fundado por Justiniano, com os ícones mais antigos.',
    '**Kiev (Ucrânia):** a catedral de Santa Sofia, com mosaicos bizantinos do século XI.',
    '**Museus:** Museu Bizantino de Atenas, Louvre, Museu Britânico, Metropolitan Museum de Nova Iorque e Dumbarton Oaks (Washington).'
  ] }
];

const quiz = [
  { p: 'Como se chamavam a si próprios os habitantes do «Império Bizantino»?', op: ['Bizantinos', 'Gregos pagãos', 'Romanos (Rhomaioi)', 'Helenos'], certa: 2, exp: '«Bizantino» é um nome moderno; eles eram Romanos e o Estado era o Império Romano.' },
  { p: 'Em que ano foi inaugurada Constantinopla?', op: ['330', '395', '476', '527'], certa: 0, exp: 'Constantino inaugurou a «Nova Roma» a 11 de maio de 330.' },
  { p: 'Que revolta, em 532, quase derrubou Justiniano?', op: ['A revolta de Nika', 'A revolta dos Zelotas', 'A revolta de Espártaco', 'A revolta iconoclasta'], certa: 0, exp: 'Os Azuis e os Verdes uniram-se no Hipódromo, e o grito era «Nika!» (vitória).' },
  { p: 'Quem terá convencido Justiniano a não fugir durante a revolta?', op: ['Belisário', 'Teodora', 'Triboniano', 'Narses'], certa: 1, exp: 'Segundo Procópio, a imperatriz Teodora recusou fugir.' },
  { p: 'Que obra jurídica de Justiniano está na base do direito civil europeu?', op: ['Código de Hamurabi', 'Lei das XII Tábuas', 'Corpus Iuris Civilis', 'Código Napoleónico'], certa: 2, exp: 'O Corpus Iuris Civilis (529–534) reuniu o direito romano.' },
  { p: 'Que arma incendiária ajudou a salvar Constantinopla dos cercos árabes?', op: ['O fogo grego', 'O óleo fervente', 'A pólvora', 'O trabuco'], certa: 0, exp: 'O fogo grego, lançado de sifões, ardia mesmo sobre a água; a sua fórmula é desconhecida.' },
  { p: 'Que imperador venceu os persas em 628, mas viu o Egito e a Síria passarem para o Islão?', op: ['Justiniano', 'Basílio II', 'Constantino XI', 'Heráclio'], certa: 3, exp: 'Heráclio derrotou Cosroes II, mas os árabes conquistaram as províncias do Oriente entre 634 e 642.' },
  { p: 'O que foi a iconoclastia?', op: ['A proibição de imagens religiosas', 'Uma heresia sobre o Espírito Santo', 'Um concílio ecuménico', 'A queima de livros'], certa: 0, exp: 'Houve duas fases (c. 726/730–787 e 815–843), terminadas com o «Triunfo da Ortodoxia», em 843.' },
  { p: 'Que imperador conquistou a Bulgária em 1018 e ficou conhecido como «Matador de Búlgaros»?', op: ['Nicéforo Focas', 'Aleixo I', 'Basílio II', 'Justiniano'], certa: 2, exp: 'Basílio II (976–1025) levou o Império ao seu apogeu medieval.' },
  { p: 'Em que ano ocorreu o Cisma entre as Igrejas de Roma e de Constantinopla?', op: ['1054', '787', '1204', '1453'], certa: 0, exp: 'Em 1054, os legados do papa e o patriarca excomungaram-se; a separação foi gradual.' },
  { p: 'Que acontecimento de 1204 abalou profundamente o Império?', op: ['A invasão dos mongóis', 'O saque de Constantinopla pelos cruzados', 'A peste negra', 'A queda de Antioquia'], certa: 1, exp: 'A 4.ª Cruzada tomou e saqueou a cidade, que só foi recuperada em 1261.' },
  { p: 'Quem escreveu a «Alexíada», biografia de Aleixo I?', op: ['Procópio', 'Miguel Pselo', 'Fócio', 'Ana Comnena'], certa: 3, exp: 'Ana Comnena, filha do imperador, é a primeira mulher historiadora importante.' },
  { p: 'Quem derrotou os bizantinos em Manziquerta, em 1071?', op: ['Os turcos seljúcidas', 'Os normandos', 'Os búlgaros', 'Os venezianos'], certa: 0, exp: 'O sultão Alp Arslan capturou o imperador Romano IV Diógenes.' },
  { p: 'Quem foi o último imperador bizantino?', op: ['Miguel VIII', 'João VIII', 'Constantino XI Paleólogo', 'Maomé II'], certa: 2, exp: 'Constantino XI morreu a defender a cidade, a 29 de maio de 1453.' },
  { p: 'Que sultão conquistou Constantinopla em 1453, com 21 anos?', op: ['Maomé II', 'Solimão', 'Bajazeto I', 'Murad II'], certa: 0, exp: 'Maomé II tomou a cidade após um cerco de 53 dias e converteu Santa Sofia em mesquita.' }
];

export default {
  id: 'bizantino',
  cor: '#7a2f5a',
  emblema: '../assets/img/bizantino.png',
  nome:    { pt: 'Império Bizantino', en: 'Byzantine Empire' },
  periodo: { pt: '330 – 1453', en: 'AD 330 – 1453' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
