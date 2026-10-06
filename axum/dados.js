// REINO DE AXUM — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas aproximadas; a cronologia aksumita é muito debatida (os reis só se conhecem por moedas e inscrições). a.C. = antes de Cristo.
// Imagens: cada {img:'id'} procura o ficheiro  axum/img/id.jpg  (ver IMAGENS_AXUM.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'O **Reino de Axum** (ou Aksum) foi um poderoso Estado do Corno de África que, entre os séculos I e X d.C., dominou o norte da atual Etiópia e a Eritreia e controlou grande parte do comércio do mar Vermelho. Tinha porto próprio (**Adulis**), moeda própria em ouro, prata e bronze, uma escrita própria (o **ge’ez**) e monumentos que ainda hoje se erguem: as **estelas de Axum**, enormes monólitos de granito.',
    'No século IV, o rei **Ezana** tornou-se cristão (c. 330) e fez do seu reino um dos primeiros Estados cristãos do mundo. No século VI, o rei **Kaleb** atravessou o mar Vermelho e interveio no Iémen. Um profeta persa do século III, **Mani**, enumerou Axum entre os quatro grandes reinos do mundo, ao lado da Pérsia, de Roma e da China. Depois, o comércio mudou de rotas, o reino enfraqueceu e o centro do poder deslocou-se para o sul, mas a Igreja, a língua litúrgica e a tradição real de Axum continuaram vivas na Etiópia.'
  ] },
  { img: 'aks-mapa-regiao', leg: 'Mapa de orientação do Reino de Axum, sobre fronteiras e nomes atuais.' },
  { h: 'Onde ficava' },
  'O coração do reino ficava no **planalto de Tigré**, a cerca de 2100 m de altitude, no norte da atual **Etiópia**, com a capital, **Axum**, no cimo de um vale fértil. O território estendia-se para norte pela **Eritreia** e descia até ao mar Vermelho, onde ficava o porto de **Adulis**, junto da atual Zula. Nos séculos IV a VI, os reis aksumitas reclamaram também influência sobre a Núbia, sobre as terras dos Beja e, do outro lado do mar, sobre partes do sul da Arábia (atual Iémen).',
  'O nome «Axum» (Aksum, em ge’ez) não tem origem certa. A língua do reino era o **ge’ez**, semítico, parente do antigo sul-arábico, que viria a ser a língua litúrgica da Igreja etíope. Na vida comercial usava-se também o **grego**, a língua franca do comércio no Mediterrâneo oriental e no mar Vermelho.',
  { img: 'aks-estelas', leg: 'Campo das estelas do norte, Axum.' },
  { h: 'Quando existiu' },
  'Os historiadores dividem a história do reino em fases, com datas aproximadas e muito debatidas, porque se conhecem poucos textos e a lista dos reis assenta sobretudo nas moedas.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Proto-Axum (D’mt e depois)', 'c. séc. VIII a.C. – séc. I d.C.', 'Reino de D’mt, com forte influência sul-arábica (Sabá); templo de Yeha; depois, pequenos Estados no planalto'],
    ['Ascensão', 'c. séc. I – III d.C.', 'Axum torna-se capital; o *Periplus do Mar Eritreu* descreve Adulis e o rei Zoscales; primeiras moedas, com Endubis (c. 270 – 300)'],
    ['Apogeu', 'c. séc. IV – VI d.C.', 'Ezana, a conversão ao cristianismo e a campanha contra Cuxe; estelas; Kaleb e o Iémen'],
    ['Declínio', 'c. séc. VII – X d.C.', 'Perda de Adulis e do comércio do mar Vermelho; fim das moedas; o centro desloca-se para o sul'],
    ['Depois', 'c. séc. X em diante', 'Tradição da rainha Gudit; dinastia Zagwe (Lalibela); restauração «salomónica» em 1270 (nota: já fora do âmbito desta página)']
  ] } },
  { img: 'aks-mapa-imperio', leg: 'Mapa esquemático da extensão atribuída ao Reino de Axum no século VI, incluindo a intervenção no Iémen; limites aproximados.' },
  { h: 'Quem eram os aksumitas?' },
  'Os aksumitas eram um povo de língua semítica e de cultura africana: um povo do planalto, agricultor e comerciante, descendente de populações locais que, desde o I milénio a.C., tinham recebido imigrantes e influências do sul da Arábia, do outro lado do mar Vermelho. Da mistura nasceu uma cultura própria, com arquitetura, escrita e religião que não se confundem com nenhuma outra. Os reis usavam o título de **«rei dos reis»** (*negusa nagast*), porque dominavam outros reinos e povos subordinados.',
  { h: 'Porque importam' },
  { lista: [
    '**Comércio mundial:** Axum ligava o Egito romano e bizantino, a Núbia, a Arábia, a Pérsia e a Índia, trocando ouro, marfim e especiarias por vinho, tecidos e vidro.',
    '**Moeda própria:** foi o primeiro Estado da África subsariana a cunhar moeda, e as suas moedas encontram-se da Índia ao Egito.',
    '**Cristianismo:** a conversão de Ezana (c. 330) faz da Etiópia um dos mais antigos países cristãos; a Igreja ortodoxa etíope descende diretamente dela.',
    '**Escrita:** o ge’ez é uma das poucas escritas originais de África e deu origem às escritas atuais da Etiópia e da Eritreia.',
    '**Monumentos:** as estelas, os palácios e as tumbas de Axum são Património Mundial da UNESCO desde 1980.'
  ] },
  { caixa: 'Axum hoje', texto: 'Axum é hoje uma cidade pequena do Tigré, na Etiópia, e a cidade mais sagrada da Igreja etíope. Continua a ter estelas de pé, tumbas reais e uma igreja, **Nossa Senhora Maria de Sião**, que a tradição liga à Arca da Aliança. A região sofreu com a guerra de 2020-2022; antes de visitar, convém verificar a situação de segurança.' },
  { img: 'aks-cidade-reconstrucao', leg: 'Reconstituição conjetural da cidade de Axum no século V. Ilustração gerada por IA.' }
];

const linha = [
  'Esta linha do tempo segue os acontecimentos principais. Muitas datas aksumitas são aproximadas e debatidas, porque os reis são conhecidos sobretudo por moedas e inscrições; usa-se «c.» sempre que a data é incerta.',
  { linha: [
    { d: 'c. séc. VIII a.C.', t: 'O reino de D’mt', x: 'No planalto de Tigré e na Eritreia forma-se o reino de **D’mt**, com capital provável em **Yeha**. Inscrições em escrita sul-arábica e templos de tipo sabeu mostram a influência de Sabá, do outro lado do mar Vermelho. Há debate sobre se foram colonos arábicos ou elites locais que adotaram esses costumes.' },
    { d: 'c. 700 a.C.', t: 'O Grande Templo de Yeha', x: 'Construído em pedra aparelhada com rigor, o templo de **Yeha** é a construção etíope mais antiga ainda de pé, com paredes de cerca de 14 m. Estava ligada ao culto de **Almaqah**, deus sul-arábico.' },
    { d: 'c. séc. V a.C.', t: 'O fim de D’mt', x: 'O reino de D’mt desaparece, por razões pouco claras. Seguem-se séculos de pequenos Estados no planalto (período «pré-aksumita»), com cultura e comércio em crescimento.' },
    { d: 'c. séc. I d.C.', t: 'Axum ergue-se', x: 'Axum afirma-se como capital de um reino que controla o planalto e a rota para o mar. A data de fundação é debatida; as primeiras evidências arqueológicas de uma cidade importante são desta época.' },
    { d: 'c. 40 – 70 d.C.', t: 'O Periplus do Mar Eritreu', x: 'Um guia comercial grego, o *Periplus do Mar Eritreu*, descreve **Adulis** como porto de Axum e fala do rei **Zoscales**, «mesquinho nos negócios, mas íntegro e conhecedor de grego». A data do texto é debatida (entre o século I e o início do III).' },
    { d: 'c. séc. III', t: 'A inscrição de Adulis e as primeiras moedas', x: 'Uma inscrição grega copiada em Adulis (o *Monumentum Adulitanum*) fala de um rei que submeteu povos da Arábia e da Núbia. Por volta de 270 – 300, o rei **Endubis** cunha as primeiras moedas aksumitas, em ouro, prata e bronze.' },
    { d: 'c. 250 – 276', t: 'Mani e os «quatro reinos»', x: 'O profeta **Mani**, fundador do maniqueísmo (nascido na Babilónia), conta, segundo textos que o citam, que o mundo tinha quatro grandes reinos: a Babilónia/Pérsia, Roma, **Axum** e a China. É um sinal de como Axum era conhecida muito longe.' },
    { d: 'c. 320', t: 'Ezana sobe ao trono', x: 'O jovem **Ezana** torna-se rei, sob a regência da mãe. As suas inscrições, em ge’ez, grego e sabeu, são das fontes mais importantes do reino.' },
    { d: 'c. 330', t: 'Frumêncio e a conversão', x: 'O mercador cristão sírio **Frumêncio** (Abba Salama, em ge’ez), que fora educador do rei, é consagrado primeiro bispo de Axum por Atanásio de Alexandria. **Ezana** converte-se ao cristianismo. A data exata é debatida: situa-se entre c. 330 e 350.' },
    { d: 'c. 350', t: 'A campanha contra Cuxe', x: 'Uma inscrição de Ezana descreve uma campanha no vale do Nilo contra os **nobas** e Meroé. O reino de Cuxe estava já em declínio; Axum não o «destruiu» sozinho.' },
    { d: 'c. 356', t: 'A carta de Constâncio II', x: 'O imperador romano **Constâncio II** escreve a Ezana e ao irmão, pedindo-lhes que substituam Frumêncio por um bispo da sua corrente teológica. É o documento romano mais antigo sobre o cristianismo aksumita.' },
    { d: 'c. séc. IV', t: 'A moeda com a cruz', x: 'As moedas de Ezana, que mostravam o disco e o crescente (símbolos pagãos), passam a ter a **cruz**. É uma das provas mais claras da mudança de religião.' },
    { d: 'séc. IV – V', t: 'A Bíblia em ge’ez', x: 'O ge’ez passa a escrever-se com vogais (a escrita torna-se um **abugida**), e a Bíblia é traduzida para ge’ez. As datas são debatidas.' },
    { d: 'c. 480 – 500', t: 'Os Nove Santos', x: 'Monges vindos do mundo bizantino e do Próximo Oriente chegam ao reino e fundam mosteiros (um deles, **Debre Damo**). A tradição chama-lhes os **Nove Santos**. Espalham o monaquismo e as traduções.' },
    { d: 'c. 523', t: 'Perseguição em Najran', x: 'No Iémen, o rei judeu de Himiar, **Dhu Nuwas**, ataca a comunidade cristã de Najran. Os cristãos pedem ajuda a Bizâncio e a Axum.' },
    { d: 'c. 525', t: 'Kaleb atravessa o mar Vermelho', x: 'O rei **Kaleb** (Ella Asbeha) invade o Iémen com navios, segundo fontes bizantinas, e derrota Dhu Nuwas. A data (c. 520 – 530) é debatida.' },
    { d: 'c. 525', t: 'Cosmas em Adulis', x: 'O mercador e depois monge grego **Cosmas Indicopleustes** visita Adulis e copia inscrições, e mais tarde descreve o reino na sua *Topografia Cristã*, que é uma fonte preciosa.' },
    { d: 'c. 540 – 570', t: 'Abraha e o domínio do Iémen', x: 'O general **Abraha** toma o poder no Iémen e governa-o em nome de Axum, ou por conta própria. Uma inscrição sua refere a reparação da barragem de Marib. A tradição islâmica fala de uma expedição sua contra Meca no «ano do elefante» (c. 570); a data e o relato são debatidos.' },
    { d: 'c. 570 – 575', t: 'Os persas no Iémen', x: 'Os persas sassânidas expulsam os aksumitas do Iémen. Axum perde o domínio do sul da Arábia e a influência no mar Vermelho.' },
    { d: 'c. 615', t: 'A primeira hégira', x: 'Seguidores de **Maomé**, perseguidos em Meca, refugiam-se em Axum, junto do rei cristão (o **Negus**), segundo as fontes islâmicas. A tradição dá-lhe o nome de **Ashama ibn Abjar**, hoje associado a um rei chamado **Armah**. A identificação é debatida.' },
    { d: 'séc. VII', t: 'O fim das moedas', x: 'As últimas moedas de ouro aksumitas são cunhadas por volta de 630 – 650 (data debatida). A expansão árabe no Egito e no mar Vermelho corta as rotas comerciais.' },
    { d: 'séc. VII – VIII', t: 'Adulis decai', x: 'O porto de **Adulis** perde importância e é abandonado, e o reino volta-se para o interior. Estudam-se também causas ambientais, como secas e o desgaste dos solos.' },
    { d: 'séc. VIII – IX', t: 'O centro desloca-se para o sul', x: 'A corte e a população migram para o sul, para o planalto central. Axum mantém o prestígio de cidade da coroação e da Igreja.' },
    { d: 'c. 940 – 960 (tradição)', t: 'A rainha Gudit', x: 'A tradição etíope conta que uma rainha, **Gudit** (Yodit), queimou igrejas e matou reis em Axum. Os historiadores discutem se existiu, quando viveu e se foi uma governante pagã, judia ou de outra origem. Há sinais de uma crise e de destruição neste período, mas não se sabe a causa.' },
    { d: 'c. 1137 – 1270', t: 'Depois de Axum (nota)', x: 'A dinastia **Zagwe** governa a partir de Roha, mais tarde **Lalibela**, onde manda cavar na rocha as famosas igrejas. Em 1270, **Yekuno Amlak** inicia a dinastia «salomónica», que se diz descendente do rei Salomão e da rainha de Sabá, ligando-se a Axum. Isto já pertence ao Império Etíope.' }
  ] },
  { img: 'aks-yeha-templo', leg: 'Grande Templo de Yeha, cerca de 700 a.C.' },
  { img: 'aks-yeha-inscricao', leg: 'Blocos com inscrições sabeias de Yeha, na coleção junto à igreja de Abba Afse.' },
  { img: 'aks-moeda-endubis', leg: 'Moeda de ouro de Endubis, com a legenda grega ENDUBIS BASILEUS.' },
  { img: 'aks-pedra-ezana', leg: 'Pedra de Ezana, inscrição trilingue.' },
  { img: 'aks-frumencio', leg: 'Ezana escuta Frumêncio no século IV; cena imaginada. Ilustração gerada por IA.' },
  { img: 'aks-kaleb-travessia', leg: 'Travessia do mar Vermelho na campanha de Kaleb, cerca de 525; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'aks-marib', leg: 'Vestígios da antiga barragem de Marib, Iémen.' },
  { img: 'aks-cosmas', leg: 'Mapa do mundo numa cópia medieval da Topografia Cristã de Cosmas, Biblioteca Vaticana, Vat. gr. 699, fólio 40v.' }
];

const mapa = [
  'O reino de Axum era sobretudo um reino de planalto, com ligação ao mar. As cidades e os sítios arqueológicos principais estão hoje na Etiópia, na Eritreia e, em casos mais discutidos, no Iémen.',
  { tabela: { cab: ['Sítio', 'Local hoje', 'Para que ficou conhecido'], linhas: [
    ['Axum', 'Tigré, Etiópia', 'Capital; estelas, tumbas reais, palácios, igreja de Maria de Sião'],
    ['Adulis', 'Perto de Zula, Eritreia', 'Porto principal do reino; comércio com o Egito, a Arábia e a Índia'],
    ['Yeha', 'Tigré, Etiópia', 'Capital provável de D’mt; Grande Templo de c. 700 a.C.'],
    ['Matara', 'Eritreia', 'Cidade antiga do planalto, com o obelisco de Hawulti e ruínas aksumitas'],
    ['Qohaito', 'Eritreia', 'Cidade antiga do planalto, com uma barragem e templos'],
    ['Debre Damo', 'Tigré, Etiópia', 'Mosteiro no cimo de uma montanha, só acessível por corda; fundação ligada a Abuna Aregawi, um dos Nove Santos'],
    ['Lalibela', 'Amara, Etiópia', 'Igrejas escavadas na rocha, do tempo dos Zagwe (posterior a Axum; referida só como nota)']
  ] } },
  { h: 'Axum' },
  'A capital estava num vale, rodeada de montes, a mais de 2000 m de altitude. Tinha **estelas, tumbas, palácios, templos, bairros de casas e mercados**. A cidade tinha talvez dezenas de milhares de habitantes no apogeu, mas os números são muito incertos. Aqui coroavam-se os reis e aqui reside até hoje o coração religioso da Etiópia.',
  { img: 'aks-dungur', leg: 'Ruínas do palácio de Dungur, Axum.' },
  { img: 'aks-palacio', leg: 'Palácio aksumita inspirado em Dungur, século VI; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: 'Adulis e o mar Vermelho' },
  '**Adulis** era o porto de Axum, a cerca de 150 km do planalto por caminhos de montanha. Chegavam ali navios do Egito, da Arábia e da Índia. Exportava-se **marfim, ouro, casco de tartaruga, chifre de rinoceronte, obsidiana, escravos e animais**; importavam-se **tecidos finos, vidro, vinho, azeite, ferro e metais, especiarias**. A cidade foi visitada por Cosmas, que descreveu aí um trono de mármore e inscrições.',
  { img: 'aks-adulis', leg: 'Ruínas de Adulis, Eritreia.' },
  { img: 'aks-porto-adulis', leg: 'Porto de Adulis no século VI; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'aks-navio', leg: 'Navio mercante do mar Vermelho no século VI; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: 'As rotas' },
  { lista: [
    '**Mar Vermelho, para norte:** Adulis, os portos do Egito romano e bizantino e Alexandria. Daí chegavam o vinho, o azeite e o vidro.',
    '**Oceano Índico:** viagens, com as monções, até à Índia e ao Sri Lanka; Axum fazia de ponte entre o Mediterrâneo e o Oriente.',
    '**Nilo, para noroeste:** caravanas para a Núbia e Cuxe, ouro e marfim.',
    '**Arábia do Sul:** o outro lado do mar, perto (cerca de 30 km no ponto mais estreito, o estreito de Bab el-Mandeb), com laços de séculos.',
    '**Interior:** caminhos para o sul, para as terras do ouro e do marfim, onde Axum mandava buscar produtos através de intermediários.'
  ] },
  { img: 'aks-mercado', leg: 'Mercado de Axum no século V; cena imaginada. Ilustração gerada por IA.' },
  { h: 'Matara, Qohaito e Debre Damo' },
  '**Matara** e **Qohaito**, na Eritreia, mostram que o reino não era só Axum: eram cidades no planalto, com templos, tumbas e obras de água. **Debre Damo**, mosteiro inacessível a quem não suba pela corda, guarda uma das igrejas mais antigas da Etiópia, ligada aos Nove Santos.',
  { img: 'aks-matara', leg: 'Estela aksumita de Balaw Kalaw no sítio arqueológico de Matara (Metera), Eritreia.' },
  { img: 'aks-qohaito', leg: 'Paisagem e ruínas de Qohaito.' },
  { img: 'aks-debre-damo', leg: 'Edifício no mosteiro de Debre Damo, Tigray; fotografia de 2017.' }
];

const sociedade = [
  { h: '1. Organização política' },
  'O reino era uma **monarquia hereditária**. O rei, o «rei dos reis», governava com uma corte de nobres e chefes militares e com governadores nas regiões, e recebia **tributo** dos povos submetidos (por exemplo, os Beja e os reinos do Nilo). As inscrições de Ezana e de outros reis mostram que o rei se apresentava como protegido do seu deus e como senhor de muitos povos. A sucessão fazia-se normalmente entre membros da família real.',
  'Não há registos de leis ou de arquivos como na Mesopotâmia. Sabemos da organização do reino por **moedas, inscrições de reis, relatos estrangeiros** (o *Periplus*, Cosmas, fontes bizantinas e árabes) e arqueologia.',
  { cit: 'Que isto agrade ao povo.', fonte: 'Legenda grega de moedas do rei Ezana, na tradução habitual (século IV d.C.)' },
  { h: '2. Classes sociais' },
  { lista: [
    '**A família real e a nobreza:** reis, governadores, chefes militares, enterrados em tumbas monumentais.',
    '**Sacerdotes e, depois, clero cristão:** serviam os deuses e, mais tarde, a Igreja, e tinham grande prestígio.',
    '**Mercadores e artesãos:** viviam nas cidades e nos portos; trabalhavam o ferro, o ouro, o couro, a cerâmica e o vidro.',
    '**Camponeses e pastores:** a maioria da população, com agricultura de terraços e gado.',
    '**Escravos e prisioneiros de guerra:** existiam e eram também uma mercadoria de exportação.'
  ] },
  { h: '3. Religião' },
  'Antes de Ezana, a religião era **politeísta**, de tradição semítica, com ligações ao Sul da Arábia. O deus principal era **Mahrem**, ligado à guerra e ao rei; adoravam também **Astar** (deus do céu), **Beher** (mar) e **Medr** (terra). Os reis diziam-se filhos de Mahrem.',
  { tabela: { cab: ['Deus', 'Domínio', 'Notas'], linhas: [
    ['Astar', 'Céu', 'Parente do deus Athtar do sul da Arábia; símbolo: o disco e o crescente'],
    ['Mahrem', 'Guerra, protetor do rei', 'Os reis consideravam-se seus «filhos»; equiparado pelos gregos a Ares'],
    ['Beher', 'Mar', 'Referido em inscrições'],
    ['Medr', 'Terra', 'Referido em inscrições'],
    ['Almaqah', 'Deus lunar sul-arábico', 'Venerado em Yeha e em D’mt, antes de Axum']
  ] } },
  'Por volta de 330 a conversão de **Ezana** mudou o Estado. A nova fé espalhou-se primeiro pelas cidades e pela corte, e só devagar pelo campo. A igreja de Axum ficou ligada ao patriarcado copta de Alexandria, que enviava os bispos. No fim do século V, os **Nove Santos** reforçaram o monaquismo e as traduções.',
  { img: 'aks-cruz', leg: 'Cruz processional etíope em bronze, século XII, Walters Art Museum, 54.2889; tradição cristã posterior ao reino de Axum.' },
  { caixa: 'A Arca da Aliança (tradição)', texto: 'A igreja de **Nossa Senhora Maria de Sião**, em Axum, afirma guardar a **Arca da Aliança**, trazida de Jerusalém por **Menelik I**, o filho que a tradição dá ao rei Salomão e à rainha de Sabá (relato do *Kebra Nagast*, texto etíope do século XIV). **Isto é lenda e tradição religiosa:** nenhum investigador independente viu a Arca, e só um monge guardião pode entrar na capela.' },
  { h: '4. As estelas e a arquitetura' },
  'As **estelas de Axum** são monólitos de granito talhados em forma de edifícios de vários andares, com janelas, vigas e portas falsas. Marcavam as **tumbas** de reis e nobres, e algumas tinham um disco no cimo. Eram extraídas de pedreiras a cerca de 4 km, arrastadas e erguidas, com técnicas ainda debatidas.',
  { img: 'aks-estela-grande', leg: 'Grande Estela caída, Axum.' },
  { img: 'aks-estela-ezana', leg: 'Estela n.º 3, tradicionalmente chamada Estela do rei Ezana, Axum.' },
  { img: 'aks-obelisco-roma', leg: 'Obelisco de Axum na Piazza di Porta Capena, Roma, durante o desfile de 2 de junho de 2002.' },
  { img: 'aks-erguer-estela', leg: 'Transporte e preparação de uma estela em Axum, século IV; método hipotético. Ilustração gerada por IA.' },
  'As estelas ficam por cima de câmaras subterrâneas, de **tumbas reais**. A maior, a **Grande Estela**, caiu — talvez durante a construção, talvez depois — e ficou partida em pedaços. A **estela de Ezana** continua de pé.',
  { img: 'aks-tumba-porta', leg: 'Tumba da Falsa Porta, Axum.' },
  { img: 'aks-tumba-reconstrucao', leg: 'Corte ilustrativo de uma tumba real de Axum, século IV; reconstituição conjetural, não uma planta técnica. Ilustração gerada por IA.' },
  'A arquitetura aksumita usava **pedra aparelhada com madeira**, em camadas alternadas, numa técnica de «**cabeças de macaco**» (as pontas das vigas sobressaem na parede). Esse estilo está presente nos palácios, nas igrejas e, mais tarde, nas igrejas etíopes.',
  { img: 'aks-tronos', leg: 'Assento de coroação de Axum: gravura de John Greig segundo Henry Salt, publicada em 1809.' },
  { h: '5. Economia e moeda' },
  'A economia assentava na **agricultura** (cevada, trigo, sorgo, teff e outros cereais, com terraços e charruas puxadas por bois), na **criação de gado** e no **comércio**. O reino cobrava taxas nos portos e nas caravanas.',
  'Axum cunhou **moedas de ouro, prata e bronze**, com inscrições em **grego** (as de ouro, usadas no comércio internacional) e depois em ge’ez. Foi o primeiro Estado da África subsariana a fazê-lo, e as moedas aparecem no Egito, no Iémen e na Índia. As moedas de Ezana passaram do disco e crescente para a cruz.',
  { img: 'aks-moeda-ezana', leg: 'Moeda de ouro de Ezana com cruzes, Museu Britânico, 1921,0316.1.' },
  { img: 'aks-moeda-kaleb', leg: 'Moeda de prata de Kaleb, com bustos e cruzes; fotografia da Classical Numismatic Group.' },
  { h: '6. Escrita' },
  'O **ge’ez** escrevia-se primeiro com letras do alfabeto sul-arábico, só com consoantes. No século IV acrescentaram-se **sinais de vogais**, o que criou um **abugida**, em que cada sinal representa uma consoante e uma vogal. Esse sistema é a base das escritas atuais da Etiópia e da Eritreia (amárico, tigrínia). A primeira inscrição conhecida em ge’ez vocalizado é do tempo de Ezana.',
  { img: 'aks-geez-manuscrito', leg: 'Manuscrito etíope dos Milagres de Jesus, em ge’ez.' },
  { img: 'aks-escribas', leg: 'Escribas a copiar pergaminhos em Axum, século V; cena imaginada. Ilustração gerada por IA.' },
  { h: '7. A casa e o quotidiano' },
  'As casas das elites eram edifícios de vários andares de pedra e madeira, com pátios; as dos camponeses eram mais simples, de pedra ou barro. Comia-se **pão, papas e guisados de cereais**, com carne de boi, de ovelha e de cabra, mel e frutos. Bebia-se cerveja de cereais e hidromel. A cerâmica era feita em tornos e decorada, e usava-se também o vidro importado.',
  { img: 'aks-quotidiano', leg: 'Vida quotidiana numa casa aksumita, século V; cena imaginada. Ilustração gerada por IA.' },
  { img: 'aks-ceramica', leg: 'Cabeças antropomórficas de recipientes cerâmicos das escavações de Dungur, séculos VI–VIII; Museu Nacional da Etiópia.' },
  { h: '8. Vestuário' },
  'As pessoas vestiam-se com **panos de algodão e de lã**, tecidos no local, em mantos e túnicas. Os reis e os nobres usavam tecidos finos importados, joias de ouro, colares e pulseiras, e coroas. As imagens das moedas mostram os reis com coroa, com tecidos pesados e muitas vezes com um lenço.',
  { h: '9. Música, jogos e vida cultural' },
  'A tradição atribui a **Yared**, do século VI, a criação do canto litúrgico etíope; é lenda e história misturadas, mas a música da Igreja etíope descende, em parte, desse tempo. Havia tambores, sistros, trombetas e liras. Conhecem-se também jogos de tabuleiro, e as pedras com buracos para jogos em Axum são sinal disso.',
  { h: '10. Ciência e tecnologia' },
  { lista: [
    '**Metalurgia:** ferro, cobre e ouro, com técnicas locais; as moedas e as joias mostram um grande domínio.',
    '**Engenharia da pedra:** extração, transporte e erguimento de monólitos de centenas de toneladas.',
    '**Hidráulica:** barragens e reservatórios, como o de Qohaito, para guardar a água das chuvas.',
    '**Navegação:** os barcos do mar Vermelho, que dependiam das monções e do conhecimento dos ventos.'
  ] },
  { h: '11. Guerra' },
  'O exército era de **infantaria, com lanças, arcos e escudos**, com cavalaria e, pelo mar, uma frota capaz de transportar tropas até ao Iémen. Os reis registaram as suas campanhas em inscrições: contra os **Beja**, contra os **nobas**, e contra o Iémen. As fontes são sobretudo os próprios reis e os cronistas bizantinos, por isso os números de mortos e de prisioneiros devem ser lidos com cautela.'
];

const personalidades = [
  'Dos reis aksumitas só se conhecem alguns nomes, por moedas, inscrições e relatos estrangeiros. As figuras seguintes são reais, e as tradições que as rodeiam estão assinaladas como tal.',
  { h: 'Zoscales (c. séc. I d.C.)' },
  'Rei de Axum referido no *Periplus do Mar Eritreu*, descrito como conhecedor de grego e rigoroso nos negócios. Alguns historiadores tentam ligá-lo a um rei das listas tradicionais, sem consenso.',
  { h: 'Endubis (c. 270 – 300)' },
  'O primeiro rei de Axum a cunhar moeda, em ouro, prata e bronze. A sua moeda mostra o rei e inscrições gregas. O comércio de Axum passou a ter uma moeda própria.',
  { h: 'Ezana (c. 320 – 360)' },
  'O mais famoso rei de Axum. Subiu ao trono jovem, sob regência da mãe. Foi um chefe militar e um construtor, e deixou inscrições em ge’ez, grego e sabeu. Aderiu ao cristianismo c. 330 (a data é debatida), levou a cruz para as moedas, e fez campanha no Nilo contra os nobas. Na Igreja etíope é santo.',
  { h: 'Frumêncio (Abba Salama) (séc. IV)' },
  'Mercador sírio-cristão de Tiro, preso e levado para Axum com um irmão, **Edésio**. Tornou-se conselheiro do rei, e depois de pedir um bispo a Alexandria foi ele próprio consagrado por **Atanásio** como primeiro bispo de Axum. A história vem de Rufino, historiador do século IV-V, que a ouviu de Edésio. É chamado «Abba Salama», o «pai da paz».',
  { h: 'Mani (c. 216 – 274 ou 277)' },
  'Profeta persa, fundador do maniqueísmo. Segundo textos maniqueus, viu Axum como um dos quatro grandes reinos do mundo. Não visitou Axum: a referência mostra apenas a fama do reino.',
  { h: 'Cosmas Indicopleustes (séc. VI)' },
  'Mercador grego de Alexandria que se fez monge. Visitou Adulis c. 525 e copiou uma inscrição, o *Monumentum Adulitanum*. Escreveu a *Topografia Cristã*, com uma visão estranha do mundo (plano, como a tenda do Tabernáculo), mas com informações únicas sobre Axum.',
  { h: 'Kaleb (Ella Asbeha) (c. 510 – 540)' },
  'Rei de Axum conhecido por ter atravessado o mar Vermelho para combater o rei himiarita **Dhu Nuwas**, que perseguira os cristãos de Najran (c. 523). Foi apoiado por Bizâncio. Na Igreja etíope é santo; a tradição diz que no fim da vida se retirou para um mosteiro e entregou a coroa a Jerusalém (lenda).',
  { h: 'Abraha (séc. VI)' },
  'General aksumita que tomou o poder no Iémen e o governou até c. 570, reparando a barragem de Marib (inscrição). A tradição islâmica atribui-lhe a expedição contra Meca com elefantes. A autenticidade e a data do relato são debatidas.',
  { h: 'Os Nove Santos (c. 480 – 530, tradição)' },
  'Monges de origem bizantina ou síria que, segundo a tradição, fundaram mosteiros e traduziram a Bíblia: **Pantalêon, Garima, Afse, Guba, Aleph, Yem’ata, Likanos, Tsehma e Afe**, entre outros. **Abuna Aregawi** (Zemikael) é ligado a Debre Damo. Os seus nomes e datas vêm de tradições tardias.',
  { h: 'Yared (séc. VI, tradição)' },
  'Compositor e sacerdote a quem a tradição etíope atribui a invenção do canto litúrgico. Diz-se que ouviu três pássaros cantarem. É lenda e tradição, mas o seu nome é central na música da Igreja etíope.',
  { h: 'Armah (Ashama ibn Abjar) (início do séc. VII)' },
  'Rei que as fontes muçulmanas conhecem como **Ashama ibn Abjar**, o Negus que acolheu os primeiros muçulmanos fugidos de Meca (c. 615). A ligação a um rei de moedas chamado Armah é provável, mas debatida.',
  { h: 'Gudit (Yodit) (tradição)' },
  'Rainha de que se fala em tradições etíopes e em textos tardios. Teria destruído igrejas e reinado cerca de 40 anos, por volta de 960. A sua existência, a sua origem e a data são muito debatidas; pode representar uma crise real do século X.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**Cristianismo etíope:** Axum está na origem da Igreja ortodoxa etíope, uma das mais antigas do mundo, com os seus ritos, o ge’ez litúrgico e o calendário.',
    '**Escrita:** o abugida do ge’ez é a base das escritas da Etiópia e da Eritreia.',
    '**Moedas e comércio:** o primeiro Estado da África subsariana a ter moeda própria e a integrar-se no comércio do Índico.',
    '**Monumentos:** as estelas e as tumbas, uma das maiores realizações de engenharia em pedra do mundo antigo.',
    '**Tradição real:** os reis etíopes até ao século XX reclamaram ligação a Axum e à rainha de Sabá.'
  ] },
  { h: 'Arte e arquitetura' },
  'A arte aksumita é sobretudo **arquitetura, moeda e metalurgia**. Das igrejas aksumitas ficaram o plano de **basílica**, a técnica das vigas de madeira e muitos motivos que continuam nas igrejas etíopes. Os **Evangelhos de Garima** são um dos manuscritos cristãos mais antigos que se conhecem; os testes de radiocarbono dão uma data entre c. 330 e 650, mas são debatidos.',
  { img: 'aks-garima', leg: 'São Marcos Evangelista, iluminura dos Evangelhos de Garima.' },
  { img: 'aks-sao-sion', leg: 'Nova igreja de Nossa Senhora Maria de Sião, Axum, construção do século XX.' },
  { h: 'Redescoberta' },
  'Os europeus conheceram Axum através de viajantes portugueses do século XVI (como **Francisco Álvares**), que descreveram as estelas. Em 1893, o explorador britânico **Theodore Bent** escavou aí, e em 1906 a **expedição alemã** de Enno Littmann estudou as inscrições e as ruínas. Em 1937, o governo fascista italiano, após a ocupação, levou o **obelisco de Axum** para Roma. Foi devolvido em 2005 e reerguido em 2008. A UNESCO inscreveu Axum no Património Mundial em 1980.',
  { h: 'Onde visitar' },
  { lista: [
    '**Axum, Etiópia:** campo das estelas, museu arqueológico, igrejas, tumbas e o palácio de Dungur.',
    '**Yeha, Etiópia:** o Grande Templo, a nordeste de Axum.',
    '**Debre Damo e Abba Garima, Etiópia:** os mosteiros antigos.',
    '**Adulis, Matara e Qohaito, Eritreia:** sítios aksumitas, com acesso mais difícil.',
    '**Lalibela, Etiópia:** igrejas escavadas na rocha, de tempo posterior (Zagwe, séculos XII – XIII).',
    '**Museus:** o Museu Nacional da Etiópia, em Adis Abeba, e coleções de moedas no Museu Britânico e noutros.'
  ] },
  { img: 'aks-lalibela', leg: 'Igreja rupestre de São Jorge, Lalibela; património medieval posterior ao reino de Axum.' },
  { caixa: 'Nota sobre fontes e tradições', texto: 'Muita da história de Axum conhece-se por poucas fontes: as moedas, as inscrições de Ezana e de Kaleb, o *Periplus*, Cosmas e as crónicas bizantinas e árabes. As tradições etíopes (a Arca, o *Kebra Nagast*, Gudit, os Nove Santos) são importantes mas foram escritas muito depois dos factos. Neste texto estão assinaladas como **tradição** ou **lenda**; as datas «c.» são aproximadas e debatidas.' }
];

const quiz = [
  { p: 'Como se chamava o porto principal do Reino de Axum no mar Vermelho?', op: ['Alexandria', 'Adulis', 'Aden', 'Berenice'], certa: 1, exp: 'Adulis, perto da atual Zula, na Eritreia, era o grande porto do reino.' },
  { p: 'Que rei de Axum se converteu ao cristianismo por volta de 330?', op: ['Kaleb', 'Endubis', 'Ezana', 'Zoscales'], certa: 2, exp: 'Ezana converteu-se, e as suas moedas passaram a ter a cruz.' },
  { p: 'Quem foi o primeiro bispo de Axum?', op: ['Atanásio', 'Frumêncio (Abba Salama)', 'Cosmas', 'Yared'], certa: 1, exp: 'Frumêncio foi consagrado por Atanásio de Alexandria.' },
  { p: 'Que escrita deu origem às escritas modernas da Etiópia?', op: ['O hieróglifo', 'O cuneiforme', 'O ge’ez', 'O grego'], certa: 2, exp: 'O ge’ez, escrita semítica que ganhou vogais, é a base das escritas atuais.' },
  { p: 'O que são as estelas de Axum?', op: ['Torres de vigia', 'Monólitos de granito, ligados a tumbas', 'Colunas de templos gregos', 'Estátuas de reis'], certa: 1, exp: 'São monólitos de granito talhados como edifícios de vários andares, ligados a tumbas.' },
  { p: 'Qual era a altura aproximada do obelisco de Axum levado para Roma em 1937?', op: ['10 m', '24 m', '60 m', '100 m'], certa: 1, exp: 'Tinha cerca de 24 m e 160 toneladas. Voltou a Axum em 2005.' },
  { p: 'Que profeta incluiu Axum entre os quatro grandes reinos do mundo?', op: ['Mani', 'Maomé', 'Zaratustra', 'Buda'], certa: 0, exp: 'Segundo textos maniqueus, Mani indicava Axum entre os quatro reinos.' },
  { p: 'Que texto grego do século I descreve o porto de Adulis e o rei Zoscales?', op: ['A Ilíada', 'O Periplus do Mar Eritreu', 'A Topografia Cristã', 'A Geografia de Estrabão'], certa: 1, exp: 'O Periplus do Mar Eritreu é um guia comercial grego (a data exata é debatida).' },
  { p: 'Quem escreveu a «Topografia Cristã» depois de visitar Adulis?', op: ['Procópio', 'Cosmas Indicopleustes', 'Heródoto', 'Rufino'], certa: 1, exp: 'Cosmas visitou Adulis c. 525 e copiou inscrições.' },
  { p: 'Qual rei de Axum atravessou o mar Vermelho para intervir no Iémen, por volta de 525?', op: ['Ezana', 'Endubis', 'Kaleb', 'Armah'], certa: 2, exp: 'Kaleb combateu Dhu Nuwas, que perseguira os cristãos de Najran.' },
  { p: 'O que é o reino de D’mt?', op: ['Um reino do Sudão', 'Um reino anterior a Axum, com influência sul-arábica', 'Uma colónia grega', 'Um reino do Egito'], certa: 1, exp: 'D’mt (séculos VIII – V a.C.) teve capital provável em Yeha.' },
  { p: 'Quem eram os Nove Santos?', op: ['Reis de Axum', 'Monges que espalharam o monaquismo na Etiópia', 'Mercadores gregos', 'Generais de Kaleb'], certa: 1, exp: 'Segundo a tradição, vindos do Próximo Oriente, no fim do século V.' },
  { p: 'O que a tradição diz estar guardado na igreja de Maria de Sião, em Axum?', op: ['O Santo Graal', 'A Arca da Aliança', 'A coroa de Ezana', 'O trono da rainha de Sabá'], certa: 1, exp: 'É uma tradição religiosa: ninguém independente a viu.' },
  { p: 'Quando deixou Axum de cunhar moeda, aproximadamente?', op: ['Século II', 'Século IV', 'Século VII', 'Século XII'], certa: 2, exp: 'As últimas moedas são de c. 630 – 650, com o fim do comércio do mar Vermelho.' },
  { p: 'Quem foi a rainha Gudit?', op: ['Uma rainha histórica do Egito', 'Uma figura de tradição, ligada à destruição em Axum no século X', 'A mãe de Ezana', 'A rainha de Sabá'], certa: 1, exp: 'É uma figura da tradição etíope, de existência e datas debatidas.' }
];

export default {
  id: 'axum',
  cor: '#8a4a2f',
  emblema: '../assets/img/axum.png',
  nome:    { pt: 'Reino de Axum', en: 'Kingdom of Aksum' },
  periodo: { pt: 'c. 100 – 940', en: 'c. AD 100 – 940' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
