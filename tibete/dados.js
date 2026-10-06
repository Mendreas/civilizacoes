// TIBETE — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
// Datas na «cronologia média»; as mais antigas (séculos VII–IX) vêm de anais e inscrições tibetanas, de fontes chinesas da dinastia Tang e de manuscritos de Dunhuang, e as mais recuadas são tradicionais e debatidas. a.C./d.C.
// Nota de neutralidade: as relações entre o Tibete e a China são tratadas como história, apresentando as leituras das diferentes historiografias, sem tomar posição política sobre o presente.
// Imagens: cada {img:'id'} procura o ficheiro  tibete/img/id.jpg  (ver IMAGENS_TIBETE.md para a lista e os prompts).
import EN from './dados-en.js';
import CRED from './creditos.js';

const visao = [
  { caixa: 'Em resumo', texto: [
    'O **Tibete** é o grande planalto do centro da Ásia, a mais de 4000 metros de altitude, entre o Himalaia e os desertos da Ásia Central. Foi ali que, no século VII, os reis do vale de **Yarlung** unificaram as tribos e os pequenos reinos do planalto e criaram o **Império Tibetano** (c. 618–842), uma potência que, no seu auge, disputou a Ásia Central à China da dinastia **Tang**, aos Turcos e aos Árabes. O seu primeiro grande rei, **Songtsen Gampo**, é recordado como o fundador do estado, de Lhasa e da escrita tibetana; um dos seus sucessores, **Trisong Detsen**, como o rei que fundou o primeiro mosteiro budista, **Samye**.',
    'O império caiu em 842, depois do assassinato do rei Langdarma, mas o Tibete não desapareceu: reinventou-se como uma **civilização monástica**. Do século XI em diante, o budismo tibetano, em linhas de mestres e escolas (Nyingma, Kagyu, Sakya, mais tarde Gelug), organizou a vida do planalto. Os **Sakya** governaram o Tibete sob a proteção dos imperadores mongóis (a dinastia Yuan) no século XIII; os **Dalai Lamas**, da escola Gelug, tornaram-se chefes espirituais e, a partir de 1642, também políticos, com o **Quinto Dalai Lama** e a construção do **Palácio de Potala**. Este site conta essa história até ao século XVIII.'
  ] },
  { img: 'tib-mapa-imperio', leg: 'Mapa do Império Tibetano na sua maior extensão, séculos VIII–IX; as fronteiras são aproximadas e variaram muito.' },
  { h: 'Onde ficava' },
  'O Tibete histórico é o **planalto tibetano**, o mais alto e vasto do mundo: uma altitude média perto dos 4500 m, com montanhas, lagos salgados, estepes de erva rasa e vales profundos. A sul fica a muralha do **Himalaia** (com o Evereste, que os tibetanos chamam **Chomolungma**); a norte, o deserto do Taklamakan e as montanhas do Kunlun; a este, os desfiladeiros por onde correm os grandes rios da Ásia (o Yangtzé, o Mekong, o Salween). Daqui nascem também o **Yarlung Tsangpo** (que depois é o Brahmaputra), o Indo e o Sutlej. É por isso chamado, por vezes, a «torre de água» da Ásia.',
  'Os tibetanos viviam sobretudo em dois mundos: os **vales férteis do centro e do sul** (Yarlung, Lhasa, Shigatse), onde se cultivava cevada, e as **terras altas do norte e do oeste**, onde os **nómadas** criavam iaques, ovelhas e cabras. Ao longo da história, o território sob governo tibetano variou muito. As regiões de **Ü** e **Tsang** (centro) e **Kham** e **Amdo** (este) são tradicionalmente consideradas o espaço cultural tibetano, mas os limites políticos de cada período mudaram, e são debatidos.',
  { img: 'tib-planalto', leg: 'Imagem de satélite do planalto tibetano, com a sua multidão de lagos.' },
  { h: 'Quando existiu' },
  'A história do Tibete costuma dividir-se em **quatro grandes fases**: o império (séculos VII–IX), o tempo da fragmentação e da «segunda difusão» do budismo (séculos IX–XIII), o tempo das escolas e dos poderes regionais (séculos XIII–XVI) e o tempo dos Dalai Lamas (a partir do século XVII). As datas abaixo são aproximadas, e as mais antigas, as mais incertas.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Reinos antigos e Yarlung', 'até c. 618', 'Pequenos reinos e chefaturas do planalto; Zhangzhung no oeste (religião Bön); dinastia dos reis de Yarlung, em parte lendária'],
    ['Império Tibetano', 'c. 618 – 842', 'Songtsen Gampo, a escrita, Lhasa; expansão para a Ásia Central; Trisong Detsen e Samye; tratado de 821/822; Langdarma e o fim do império'],
    ['Era da fragmentação', '842 – c. 1000', 'Fim do poder central; príncipes e reinos regionais (como o de Guge, no oeste); o budismo sobrevive nas regiões periféricas'],
    ['Segunda difusão e escolas', 'c. 980 – 1240', 'Tradutores como Rinchen Zangpo; chegada de Atisha (1042); mestres Kagyu como Marpa e Milarepa; fundação de Sakya (1073)'],
    ['Os Sakya e os mongóis', 'c. 1244 – 1354', 'Sakya Pandita e Phagpa; relação com os Mongóis e a dinastia Yuan; administração dos Sakya sobre grande parte do Tibete central'],
    ['Phagmodrupa e Rinpung', '1354 – c. 1565', 'Changchub Gyaltsen; Tsongkhapa e a escola Gelug; mosteiros de Ganden, Drepung e Sera; rivalidades de príncipes e escolas'],
    ['Tsangpa e Dalai Lamas', 'c. 1565 – séc. XVIII', 'Título de Dalai Lama (1578); Güshi Khan e o Quinto Dalai Lama (1642); Potala; intervenção da dinastia Qing a partir de 1720']
  ] } },
  { img: 'tib-esquema-poderes', leg: 'Esquema desenhado das grandes fases do poder no Tibete, do império aos Dalai Lamas; a cronologia é simplificada. (Imagem ilustrativa gerada por IA.)' },
  { h: 'Quem eram os tibetanos?' },
  'Os **tibetanos** são o povo que fala as línguas e dialetos do tibetano, da família **tibeto-birmanesa**. Na sua própria língua chamam ao país **Bod** (o nome «Tibete» vem de formas em turco e em árabe, de origem debatida). Os seus antepassados eram caçadores, pastores e agricultores do planalto, e os antropólogos têm mostrado que se adaptaram genética e culturalmente, ao longo de milénios, à vida em altitude, com menos oxigénio. A língua tibetana escrita, formalizada no século VII, deu-lhes uma **identidade comum**, apesar da diversidade de dialetos e de poderes locais.',
  { h: 'Porque importam' },
  { lista: [
    '**Um império de altitude:** o Império Tibetano foi uma das grandes potências da Ásia dos séculos VII a IX, e as suas inscrições, anais e tratados mostram uma administração complexa.',
    '**O budismo tibetano:** uma das grandes tradições do budismo, com filosofia, rituais, arte e mosteiros próprios, que moldou o Tibete, a Mongólia e os Himalaias.',
    '**Uma civilização do livro:** das centenas de volumes do **Kangyur** e do **Tengyur** (o cânone budista) à tradução de milhares de textos do sânscrito, o tibetano preservou obras que se perderam na Índia.',
    '**Um sistema original de governo:** o poder transmitido por linhagens de **mestres reencarnados** (os *tulku*) e a união do poder espiritual e político nas mãos dos Dalai Lamas.',
    '**Arte e arquitetura:** os mosteiros-fortaleza, os *tanka* (pinturas sobre tecido), as mandalas, o Potala.',
    '**Medicina, astrologia e artes de contemplação:** tradições próprias, hoje estudadas e praticadas em todo o mundo.',
    '**Um laboratório da história:** as relações do Tibete com a China, com os mongóis, com a Índia e com o Nepal são um caso de estudo sobre poder, religião e fronteiras, e continuam a ser debatidas.'
  ] },
  { img: 'tib-potala-hoje', leg: 'Interior do Palácio de Potala, Lhasa.' },
  { img: 'tib-bandeiras-oracao', leg: 'Bandeiras de oração (lung ta) junto às escadas de Swayambhunath, Nepal; o costume é comum a todo o mundo tibetano.' },
  { caixa: 'O Tibete hoje', texto: 'O Tibete histórico é hoje administrado pela **República Popular da China**, em grande parte como **Região Autónoma do Tibete** (criada em 1965), a que se somam áreas tibetanas em províncias vizinhas (Qinghai, Sichuan, Gansu, Yunnan). Vivem na China mais de seis milhões de tibetanos. O 14.º Dalai Lama, **Tenzin Gyatso**, vive no exílio, na Índia, desde 1959, e há uma importante diáspora tibetana. As **leituras sobre a história do Tibete e das suas relações com a China** são diferentes consoante os autores e os governos, e estão resumidas, com as suas fontes, na secção «Legado». Este site conta a história, sem tomar posição política sobre o presente.' }
];

const linha = [
  'Esta linha do tempo segue os acontecimentos principais da história do Tibete até ao século XVIII. Muitas datas do primeiro período vêm dos **Anais Tibetanos Antigos** e das crónicas tibetanas, e de fontes chinesas da dinastia Tang; nem sempre coincidem. As crónicas tibetanas escritas séculos depois, como as de **Sakya** e as dos **Dalai Lamas**, misturam história e tradição religiosa. Onde há dúvida, é assinalado.',
  { linha: [
    { d: 'Tradição: séc. II a.C.; história: até c. 600 d.C.', t: 'Os reis de Yarlung', x: 'A tradição tibetana, escrita muitos séculos depois, começa a lista dos reis com **Nyatri Tsenpo**, que teria descido do céu para o vale de **Yarlung** (no sul do Tibete central), numa data tradicional do século II a.C. É lenda, e não história documentada. O que as fontes mais antigas permitem dizer é que, no século VI, um clã de chefes de Yarlung começou a unir os seus vizinhos, e que o Tibete central era então um conjunto de reinos e chefaturas, ao lado do reino de **Zhangzhung**, no oeste, onde se praticava a religião **Bön**.' },
    { d: 'c. 618 – 629', t: 'Namri Songtsen', x: 'O chefe de Yarlung **Namri Songtsen** conquista os vizinhos do Tibete central e envia uma primeira embaixada à China. Foi, segundo a tradição, envenenado por inimigos (c. 629), e o seu filho, ainda jovem, **Songtsen Gampo**, restabeleceu o poder da família.' },
    { d: 'c. 629 – 650', t: 'Songtsen Gampo', x: 'O verdadeiro fundador do império. Derrota os inimigos internos, muda a corte para **Lhasa** (o lugar então chamado *Rasa*; a data da mudança é debatida), submete o reino de **Zhangzhung** (c. 644–645) e envia embaixadas à China e ao Nepal. As datas do seu nascimento e reinado variam nas fontes (c. 604–650 é uma das indicações usadas).' },
    { d: 'c. 640', t: 'A escrita tibetana', x: 'Segundo a tradição, o rei enviou o ministro **Thonmi Sambhota** à Índia, para estudar a escrita e a gramática, e ele criou o alfabeto tibetano, adaptado de uma escrita indiana. A história de Thonmi é conhecida por fontes tardias, e há dúvidas sobre os pormenores. O que é seguro é que o alfabeto tibetano existia nos séculos VII–VIII e é de origem indiana.' },
    { d: '641', t: 'Os casamentos reais', x: 'Segundo as fontes tibetanas e chinesas, o rei casou com a princesa nepalesa **Bhrikuti** e com a princesa chinesa **Wencheng** (que chegou ao Tibete em 641). A tradição diz que cada uma trouxe uma imagem de Buda e que, para as acolher, foram erguidos o **Jokhang** e o **Ramoche**, em Lhasa. As fontes dos anais tibetanos antigos falam de Wencheng mais tarde e com menos pormenores; o papel exato das princesas no budismo nascente é debatido.' },
  ] },
  { img: 'tib-songtsen-gampo-estatua', leg: 'Estátua de Songtsen Gampo, Tibete' },
  { img: 'tib-tumulos-chongye', leg: 'Túmulos dos reis tibetanos, vale de Chongye (Qonggyai)' },
  { linha: [
    { d: 'c. 650', t: 'Morte de Songtsen Gampo', x: 'Segundo as crónicas, morreu c. 649 ou 650, ainda novo. Foi sepultado num grande túmulo no vale de **Chongye**, onde há cerca de uma dezena de grandes montes funerários dos reis do império; a atribuição de cada um a um rei é debatida. Os reis e os grandes do império eram enterrados com rituais pré-budistas, e só mais tarde as tradições budistas acentuaram a figura de Songtsen Gampo como «rei da lei».' },
    { d: '670', t: 'Dafeichuan', x: 'Os exércitos tibetanos derrotam um exército chinês da dinastia Tang no vale de **Dafei** (a localização exata é discutida), e passam a controlar as rotas do Tarim por décadas. O Tibete tornou-se uma das potências que disputavam a Rota da Seda, ao lado dos Tang, dos Turcos e, mais ao oeste, dos Árabes.' },
    { d: '710', t: 'A princesa Jincheng', x: 'Uma segunda princesa chinesa, **Jincheng**, casa com o rei **Tridé Tsuktsen** (Mes Ag-tshoms), então ainda uma criança, numa nova aliança, depois de décadas de guerra e de paz. Durante o seu tempo, o budismo ganha apoio na corte, mas a oposição de clãs da nobreza ligados aos cultos antigos continua forte.' },
    { d: 'c. 755 – 797', t: 'Trisong Detsen', x: 'O mais poderoso rei do império. É o rei que, segundo a tradição, **protege o budismo** e traz à corte o sábio indiano **Shantarakshita** e o mestre tântrico **Padmasambhava**. Sob o seu reinado, o império atinge a máxima extensão: do Tarim ao Nepal e às fronteiras do Sichuan e de Yunnan.' },
    { d: '763', t: 'Tomada de Chang’an', x: 'Aproveitando a enorme crise que a rebelião de **An Lushan** abriu na China, um exército tibetano **ocupa a capital Tang, Chang’an** (Xi’an), durante cerca de quinze dias, e instala por breve tempo um imperador fantoche. Foi o maior feito militar do império, mas não o conservaram.' },
    { d: 'c. 775 – 779', t: 'Samye', x: 'A construção do **mosteiro de Samye**, o primeiro grande mosteiro budista do Tibete, começou c. 775 e foi consagrado c. 779. A tradição diz que foi planeado como uma **mandala** em pedra, com o templo central a representar o monte Meru. Os primeiros monges tibetanos foram ordenados ali. O budismo tornou-se religião do estado, em grande parte contra a resistência de parte da nobreza.' },
  ] },
  { img: 'tib-exercito-imperial', leg: 'Cavaleiros do exército imperial tibetano, século VIII; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'tib-debate-samye', leg: 'O debate de Samye, c. 792–794, segundo a tradição; cena imaginada. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 792 – 794', t: 'O debate de Samye', x: 'Segundo as crónicas tibetanas posteriores, o rei promoveu um debate em Samye entre o monge indiano **Kamalashila** (defensor do caminho gradual) e um mestre chinês de Chan, **Hoshang Moheyan** (defensor da iluminação súbita). Segundo a tradição tibetana, venceu Kamalashila, e o Tibete seguiu o budismo indiano. Os historiadores discutem muito a historicidade, a data e o resultado, porque os manuscritos de Dunhuang dão visões diferentes.' },
    { d: 'c. 787 – 848', t: 'Dunhuang tibetana', x: 'Tropas tibetanas conquistam **Dunhuang**, oásis chave da Rota da Seda, c. 786–787 (a data exata é discutida), e governam-no até meados do século IX. Nas grutas de Dunhuang, seladas por volta do ano 1000 e abertas em 1900, ficaram centenas de **manuscritos em tibetano antigo**, incluindo os **Anais** e a Crónica do Tibete: a fonte mais antiga e mais rica sobre o império.' },
    { d: '815 – 838', t: 'Ralpachen', x: 'O rei **Ralpachen** (Tri Ralpachen) protege o budismo, ordena a tradução sistemática de textos e a fixação do vocabulário. Em **821/822**, o Tibete e a China Tang assinam um **tratado de paz**, cujo texto foi gravado em pilares de pedra, em tibetano e em chinês, em Lhasa, Chang’an e na fronteira. O pilar diante do Jokhang ainda existe.' },
    { d: '838 – 842', t: 'Langdarma e o fim do império', x: 'Depois da morte (ou assassinato) de Ralpachen, o seu irmão **Langdarma** (Ü Dumtsen) sobe ao trono e, segundo as crónicas tibetanas, perseguiu os mosteiros. Foi **assassinado em 842** por um monge, e o império dissolveu-se em guerras de sucessão entre os seus herdeiros. As fontes budistas posteriores pintam Langdarma como perseguidor, mas os historiadores notam que essas fontes são hostis e que a crise do império tinha causas políticas e económicas.' },
  ] },
  { img: 'tib-pilar-lhasa', leg: 'Pilar do tratado sino-tibetano, em frente do templo de Jokhang, Lhasa, inscrito em 821/822.' },
  { img: 'tib-dunhuang-manuscrito', leg: 'Fragmento de manuscrito tibetano de Dunhuang (o «Testamento de Ba»), séculos VIII–IX, British Library.' },
  { linha: [
    { d: '842 – c. 1000', t: 'A era da fragmentação', x: 'Sem poder central, o Tibete divide-se. Descendentes dos reis fundam reinos regionais, como o de **Guge-Purang**, no oeste. O budismo desaparece do centro, mas sobrevive em Kham e Amdo e no oeste. Os tibetanos chamam a este tempo «período da fragmentação» ou «período obscuro».' },
    { d: 'c. 958 – 1042', t: 'A segunda difusão do budismo', x: 'O rei de Guge envia jovens à Caxemira; o tradutor **Rinchen Zangpo** (958–1055) funda mosteiros e traduz textos. Em **1042**, o mestre indiano **Atisha** (c. 982–1054) chega ao oeste do Tibete e depois ao centro, e dá origem à escola **Kadam**. Mestres como **Marpa** e **Milarepa** estabelecem a linhagem **Kagyu**.' },
    { d: '1073', t: 'Fundação de Sakya', x: 'Khön Könchok Gyalpo funda o mosteiro de **Sakya** (c. 1073, a data varia entre 1071 e 1073 nas fontes), sede da família Khön e da escola **Sakya**, que dará ao Tibete os seus governantes do século XIII.' },
    { d: '1244 – 1247', t: 'Sakya Pandita e Godan', x: 'O príncipe mongol **Godan**, neto de Gengis Khan, convida **Sakya Pandita** para a sua corte (convite em 1244; o encontro dá-se c. 1247, na região de Liangzhou). O mestre sakya aceita a autoridade mongol sobre o Tibete e escreve cartas aos tibetanos a dizer-lhes para se submeterem. Foi o começo da ligação Sakya–Mongóis.' },
    { d: '1253 – 1280', t: 'Phagpa e Kublai Khan', x: 'O sobrinho de Sakya Pandita, **Phagpa** (1235–1280), conhece **Kublai Khan** em 1253. Em 1260 é nomeado **preceptor de estado** e depois preceptor imperial; em 1264 é criado o departamento que, renomeado em 1288, se chamou **Xuanzheng Yuan** («Departamento de Assuntos Budistas e Tibetanos»). Em 1269 Phagpa cria a **escrita ’phags-pa**, de uso oficial no império mongol. Os Sakya passam a governar o Tibete central com o apoio mongol.' },
  ] },
  { img: 'tib-sakya-mosteiro', leg: 'Tanka dos quatro mandalas de Vajravali (Tibete Central, ordem Sakya, mosteiro de Ngor).' },
  { img: 'tib-phagpa-kublai', leg: 'Sakya Pandita e Phagpa, mestres sakya do século XIII, em pintura tibetana; Phagpa foi o mestre espiritual de Kublai Khan.' },
  { linha: [
    { d: '1290 – 1354', t: 'O fim do poder Sakya', x: 'Em 1285–1290 uma revolta do mosteiro **Drikung** é esmagada pelas tropas Yuan, com apoio sakya. Com o enfraquecimento do império Yuan, o poder dos Sakya diminui. Em **1354**, o chefe **Changchub Gyaltsen**, do clã Phagmodrupa, toma o poder e funda uma dinastia que governa o Tibete central por mais de um século e pretende restabelecer o antigo prestígio do tempo dos reis.' },
    { d: '1357 – 1419', t: 'Tsongkhapa e os Gelug', x: 'Nasce **Tsongkhapa** (1357), reformador que insiste na disciplina monástica e no estudo. Os seus discípulos fundam **Ganden** (1409), **Drepung** (1416) e **Sera** (1419), grandes mosteiros-universidade, e, em 1447, **Tashilhunpo**. A escola formada é a **Gelug** («virtuosos»).' },
    { d: '1578', t: 'O título de Dalai Lama', x: 'O mongol **Altan Khan** concede o título de **Dalai Lama** («lama oceano», de *dalai*, mongol, «oceano») a **Sonam Gyatso**, líder da escola Gelug. Os dois antecessores, já falecidos, passaram a ser contados como o 1.º e o 2.º. Sonam Gyatso é, portanto, o 3.º Dalai Lama; o 4.º foi um mongol, bisneto de Altan Khan.' },
    { d: '1624', t: 'O jesuíta Andrade em Tsaparang', x: 'O padre jesuíta português **António de Andrade** (1580–1634) parte de Agra, na Índia, e chega a **Tsaparang**, capital do reino de **Guge**, no Tibete ocidental, em 1624. Foi dos primeiros europeus a descrever o Tibete. Em 1625 foi aberta uma missão. O reino de Guge caiu perante o Ladaque por volta de 1630 (data debatida), e a missão terminou nos anos seguintes.' },
  ] },
  { img: 'tib-andrade-tsaparang', leg: 'António de Andrade chega a Tsaparang, 1624; cena imaginada. Ilustração gerada por IA.' },
  { img: 'tib-quinto-dalai-lama', leg: 'O Quinto Dalai Lama, pintura tibetana' },
  { linha: [
    { d: '1642 – 1682', t: 'O Quinto Dalai Lama e o Ganden Phodrang', x: 'Em 1642, o chefe mongol **Güshi Khan**, que derrotou os rivais da escola Gelug, entrega o poder sobre o Tibete ao **Quinto Dalai Lama**, **Ngawang Lobsang Gyatso** (1617–1682). Nasce o governo chamado **Ganden Phodrang**, que durará até ao século XX. Em 1645 começa a reconstrução do **Potala**, sobre uma colina de Lhasa onde, segundo a tradição, estava o palácio de Songtsen Gampo. O Palácio Branco ficou pronto em 1648; o Palácio Vermelho só em 1694.' },
    { d: '1682 – 1706', t: 'Um segredo e um poeta', x: 'O Quinto Dalai Lama morre em 1682, mas o seu regente, **Desi Sangye Gyatso**, esconde a morte durante cerca de catorze anos, para terminar as obras do Potala (o segredo foi revelado em 1696–97). O 6.º Dalai Lama, **Tsangyang Gyatso** (1683–1706), foi um poeta que não aceitou a vida monástica, e morreu jovem em circunstâncias que ainda se discutem. O 7.º, **Kelzang Gyatso** (1708–1757), foi entronizado em Lhasa em 1720.' },
    { d: '1717 – 1751', t: 'Dzungares e Qing', x: 'Em 1717 um exército dos **Dzungares**, mongóis do oeste, ocupa Lhasa e é expulso em 1720 por um exército enviado pelo imperador **Kangxi** da dinastia **Qing**. A partir de 1727 os Qing mantêm em Lhasa dois representantes, os **ambans**; em 1751 o governo é reorganizado, com o Dalai Lama e um conselho, o **Kashag**. Como se interpreta esta relação é um dos pontos mais debatidos da história do Tibete (ver «Legado»).' }
  ] }
];

const mapa = [
  'O mapa do Tibete não é o de cidades como as da Mesopotâmia ou do Egito, mas o de **mosteiros, fortalezas e vales** ligados por caminhos de montanha. Os lugares principais são estes.',
  { tabela: { cab: ['Lugar', 'Onde (atual)', 'Quando / quem', 'Importância'], linhas: [
    ['Yarlung (Tsetang)', 'Sul do Tibete central', 'Até ao séc. IX', 'Berço da dinastia dos reis tibetanos; palácio de Yumbulakhang; túmulos de Chongye'],
    ['Lhasa', 'Vale do rio Kyichu', 'Desde Songtsen Gampo, séc. VII', 'Capital; Jokhang; Potala; hoje a maior cidade da região'],
    ['Samye', 'Vale do Yarlung Tsangpo', 'c. 775 – 779, Trisong Detsen', 'Primeiro mosteiro budista do Tibete'],
    ['Chongye', 'Perto de Tsetang', 'Séc. VII – IX', 'Túmulos dos reis do império'],
    ['Tsaparang e Tholing', 'Oeste do Tibete (reino de Guge)', 'Séc. X – XVII', 'Mosteiros com pinturas murais; missão jesuíta (1625)'],
    ['Sakya', 'Sul de Tsang', 'Fundado c. 1073', 'Sede da escola Sakya e dos seus governantes no séc. XIII'],
    ['Shigatse e Tashilhunpo', 'Tsang', 'Tashilhunpo, 1447', 'Segunda cidade do Tibete; sede dos Panchen Lamas'],
    ['Gyantse', 'Tsang', 'Séc. XV', 'Fortaleza e o Kumbum (templo-estupa de vários andares)'],
    ['Ganden, Drepung e Sera', 'Região de Lhasa', '1409, 1416, 1419', 'Os três grandes mosteiros da escola Gelug'],
    ['Monte Kailash e lago Manasarovar', 'Oeste do Tibete', 'Tradição pré-budista, budista e hindu', 'Montanha sagrada para budistas, hindus, jainistas e bönpos'],
    ['Dunhuang', 'Gansu (China)', 'Sob governo tibetano, c. 787 – 848', 'Oásis da Rota da Seda; manuscritos tibetanos'],
    ['Kham e Amdo', 'Leste do planalto', 'Regiões culturais tibetanas', 'Mosteiros, nómadas e as rotas com a China']
  ] } },
  { img: 'tib-lhasa-sec7', leg: 'Reconstituição conjetural de Lhasa no século VII, com o primeiro templo e o monte Marpori. Ilustração gerada por IA.' },
  { h: 'Lhasa e o Jokhang' },
  '**Lhasa** («lugar dos deuses», na tradução comum) é a capital desde Songtsen Gampo, e está a cerca de 3650 m de altitude. No seu centro fica o **Jokhang**, o templo mais sagrado do Tibete, fundado, segundo a tradição, no século VII para guardar a imagem de Buda trazida pela princesa Wencheng, o **Jowo Shakyamuni**. Nos séculos seguintes foi ampliado muitas vezes. À volta do templo corre o circuito de peregrinação, o **Barkhor**, que os fiéis percorrem no sentido dos ponteiros do relógio. O Jokhang foi inscrito pela UNESCO em 2000, como extensão do Património Mundial do Potala (1994).',
  { img: 'tib-jokhang', leg: 'Peixe monstruoso (ornamento) no telhado do templo de Jokhang, Lhasa.' },
  { img: 'tib-yumbulakhang', leg: 'Yumbulakhang, no vale de Yarlung, a «primeira» construção tradicional dos reis tibetanos.' },
  { h: 'O Potala' },
  'O **Palácio de Potala** ergue-se sobre a colina de **Marpori**, tem cerca de 115 m de altura e treze andares. Foi reconstruído a partir de 1645, às ordens do Quinto Dalai Lama: o **Palácio Branco** (residência e administração) ficou pronto em 1648 e o **Palácio Vermelho** (salas religiosas e túmulos de Dalai Lamas) foi concluído em 1694. Tem, segundo a tradição, cerca de mil salas. Foi a residência dos Dalai Lamas até 1959, e é hoje museu e Património Mundial da UNESCO.',
  { h: 'Yarlung e Chongye' },
  'O vale de **Yarlung**, no sul, é o berço da dinastia dos reis. O **Yumbulakhang**, uma pequena fortaleza num esporão rochoso, é considerado o primeiro palácio dos reis tibetanos (o edifício atual foi reconstruído). Ali perto, no vale de **Chongye**, ficam os grandes montes funerários dos reis do império.',
  { h: 'Samye' },
  '**Samye** foi construído como mandala em pedra: no centro, o templo principal (**Utse**) representa o monte Meru, rodeado por templos dos quatro continentes, dos sóis e das luas, e por um muro circular. A tradição liga o plano ao mosteiro indiano de Odantapuri (a ligação é debatida). Foi parcialmente destruído e reconstruído várias vezes ao longo da sua história.',
  { img: 'tib-samye', leg: 'Mosteiro de Samye' },
  { h: 'Os mosteiros-universidade Gelug' },
  { lista: [
    '**Ganden** (1409): fundado por Tsongkhapa, a cerca de 40 km de Lhasa; durante séculos o centro da escola Gelug.',
    '**Drepung** (1416): o maior dos mosteiros tibetanos; chegou a ter milhares de monges, e foi residência dos Dalai Lamas antes de o Potala ser reconstruído.',
    '**Sera** (1419): famoso pelos seus debates filosóficos entre monges, num jardim, com palmas e gestos rituais.',
    '**Tashilhunpo** (1447, Shigatse): sede dos **Panchen Lamas**, a segunda grande linhagem dos Gelug.'
  ] },
  { img: 'tib-ganden', leg: 'Mosteiro de Ganden, com alguns edifícios destruídos em 1959 que ainda se mantinham em ruína.' },
  { img: 'tib-drepung', leg: 'Mosteiro de Drepung, perto de Lhasa' },
  { img: 'tib-tashilhunpo', leg: 'Mosteiro de Tashilhunpo, Shigatse' },
  { h: 'Gyantse' },
  '**Gyantse** foi uma das principais cidades de Tsang no século XV. A sua fortaleza (o **dzong**) domina a cidade, e o **Kumbum**, concluído em 1427, é um templo-estupa de vários andares, com dezenas de capelas cobertas de pinturas murais, um dos grandes monumentos da arte tibetana.',
  { h: 'Tsaparang e o reino de Guge' },
  'No oeste, o reino de **Guge-Purang** foi fundado por descendentes dos reis do império depois de 842, e foi o centro da «segunda difusão» do budismo. As ruínas da sua capital, **Tsaparang**, numa escarpa de argila e rocha, e o vizinho mosteiro de **Tholing** conservam pinturas murais de inspiração indiana e caxemirense. Foi ali que, em 1624, chegou o jesuíta português **António de Andrade**.',
  { img: 'tib-tsaparang', leg: 'Ruínas de Tsaparang, antigo reino de Guge' },
  { h: 'O monte Kailash' },
  'O **Kailash**, a oeste, é uma montanha sagrada para vários credos: para os hindus, a casa de Shiva; para os budistas, a morada de Demchok; para os jainistas e para os seguidores do Bön, um lugar de origem. Os peregrinos fazem a volta da montanha (**kora**) em cerca de três dias, a uma altitude acima dos 5000 m.',
  { img: 'tib-kailash', leg: 'Monte Kailash, Tibete ocidental' },
  { h: 'Rotas e caminhos' },
  'O Tibete era atravessado por caminhos de **caravanas** que ligavam o planalto à Índia (pelos desfiladeiros do Himalaia), ao Nepal, à Ásia Central (as rotas do Tarim, a ligação a Dunhuang) e à China do Sudoeste, pela **Rota do Chá e dos Cavalos**, onde os tibetanos trocavam cavalos por chá (sobretudo desde a época Tang e Song). Eram viagens longas, de meses, em altitude, com iaques e mulas.'
];

const sociedade = [
  { h: '1. Organização política' },
  'No império, o rei (**tsenpo**, *btsan po*) era um soberano de origem **divina**: segundo a tradição, descendia dos deuses do céu, e o seu poder era sagrado. Governava com um conselho de **ministros** (*blon*), de clãs poderosos, chefiado pelo **Grande Ministro**, que tinha poder real, e com uma administração que fazia **recenseamentos** e cobrava impostos em grão, em corveias e em serviço militar. O território dividia-se em **divisões** (*ru*, literalmente «chifres») militares e administrativas. O império deixou **pilares inscritos** e anais, que mostram um estado organizado.',
  'Depois de 842, o Tibete passou a ter vários centros de poder, em que os **mosteiros** e as **famílias nobres** tinham o poder real. Sob os **Sakya** (século XIII) e os **Phagmodrupa** (1354 em diante), o governo estava dividido em **distritos** (*dzong*), governados por oficiais. A partir de 1642, o **Ganden Phodrang** juntou o poder espiritual e político nas mãos do Dalai Lama, com a ajuda de um **regente** (*desi*) e, mais tarde (1751), do **Kashag**, um conselho de ministros.',
  { img: 'tib-corte-songtsen', leg: 'Corte do rei Songtsen Gampo, século VII; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '2. Classes sociais' },
  { lista: [
    '**O rei e a família real:** no império, descendentes de uma linhagem tida por divina; mais tarde, os reis regionais e os príncipes.',
    '**Nobres e clãs ministeriais:** famílias de grandes proprietários, que forneciam ministros e generais; a sua rivalidade com a corte marcou a história do império.',
    '**Monges e lamas:** a partir do século XI, uma elite cada vez mais poderosa, com mosteiros proprietários de terras e de servos; os **lamas** e os **tulku** (mestres reencarnados) chefiavam as escolas.',
    '**Camponeses (servos e lavradores):** a maioria; trabalhavam a terra de nobres e mosteiros, a troco de parte da colheita e de serviço.',
    '**Nómadas (*drokpa*):** criadores de iaques e de ovelhas das terras altas, que vendiam lã, sal e manteiga.',
    '**Artesãos e comerciantes:** ferreiros, tecelões, pintores de tanka, caravaneiros, muitas vezes de grupos de menor estatuto.'
  ] },
  { h: '3. Religião' },
  'A religião antiga do Tibete incluía o culto dos **deuses da montanha e do céu**, dos espíritos locais, dos antepassados e dos reis, com rituais funerários e sacrifícios, e é associada à tradição **Bön**. O que era o Bön nos tempos do império e o que depois se chamou Bön, uma religião organizada com doutrina própria, é muito discutido. Do século VII ao IX o **budismo**, vindo da Índia, do Nepal e da Ásia Central, foi-se instalando, e a partir do século XI tornou-se a religião dominante, em diversas escolas.',
  { tabela: { cab: ['Escola ou tradição', 'Origem', 'Características'], linhas: [
    ['Bön', 'Anterior ao budismo (origem debatida); organizada como religião própria mais tarde', 'Tradição própria com mestres, mosteiros e textos; hoje reconhecida como uma das tradições religiosas do Tibete'],
    ['Nyingma («os antigos»)', 'Remonta à época imperial; Padmasambhava', 'Textos «tesouro» (*terma*), práticas de meditação como o Dzogchen'],
    ['Kadam', 'Atisha, séc. XI', 'Disciplina monástica e ética; originou depois a escola Gelug'],
    ['Kagyu («transmissão oral»)', 'Marpa e Milarepa, séc. XI–XII', 'Linhagens de mestres e discípulos; meditação; várias subescolas'],
    ['Sakya', 'Fundada em 1073; família Khön', 'Estudo e erudição; poder político no séc. XIII'],
    ['Gelug («virtuosos»)', 'Tsongkhapa, séc. XIV–XV', 'Disciplina e debate filosófico; escola dos Dalai Lamas e dos Panchen Lamas']
  ] } },
  { img: 'tib-padmasambhava-tanka', leg: 'Tanka com Guru Dragpur, uma forma irada de Padmasambhava.' },
  { h: 'Os lamas reencarnados' },
  'Uma das originalidades tibetanas é a sucessão por **reencarnação** (*tulku*): quando um grande lama morre, procuram-se, por sinais, sonhos e testes, uma criança que se acredita ser a sua renascença. A primeira linhagem desse tipo reconhecida pela tradição é a dos **Karmapas** (séc. XII–XIII), da escola Kagyu. Os **Dalai Lamas** são considerados manifestações do bodisatva da compaixão, **Avalokiteshvara** (Chenrezig); os **Panchen Lamas**, de Amitabha. A prática serviu também para resolver a sucessão em grandes mosteiros sem passar por herança familiar.',
  { h: 'A prática religiosa' },
  { lista: [
    '**Peregrinação e circum-ambulação (*kora*):** andar à volta de um templo ou de uma montanha, no sentido dos ponteiros do relógio.',
    '**Rodas de oração e bandeiras:** o mantra *Om mani padme hum*, associado a Avalokiteshvara, escrito em rodas, pedras e bandeiras, que os fiéis fazem girar ou deixam ao vento.',
    '**Mandalas:** diagramas sagrados de areia colorida ou pintados, usados em rituais e na meditação; a areia é depois desfeita.',
    '**Debate filosófico:** os monges Gelug treinam-se em debates públicos, com gestos rituais, que testam a compreensão da lógica budista.',
    '**Retiro e meditação:** períodos longos de estudo e prática, que podem durar anos, em mosteiros e eremitérios.'
  ] },
  { img: 'tib-mandala', leg: 'Monges Namgyal a preparar o mandala de Kalachakra, em areia colorida.' },
  { img: 'tib-debate-monastico', leg: 'Debate filosófico entre monges, num pátio de mosteiro Gelug; cena conjetural. Ilustração gerada por IA.' },
  { h: '4. Economia' },
  'A economia era **agropastoril**. Nos vales cultiva-se **cevada** (a base da alimentação), trigo, ervilhas e nabos; as colheitas são limitadas pela altitude e pelo frio. Nas terras altas criam-se **iaques**, ovelhas e cabras, de que se obtêm leite, manteiga, carne, lã e couro. Os mosteiros e os nobres eram grandes proprietários de terras, e recebiam parte da produção e de trabalho dos camponeses.',
  'O comércio era essencial: o Tibete exportava **sal**, lã, ouro em pó, almíscar e produtos medicinais, e importava **chá**, seda, cereais, joias, turquesas e corais. Nunca houve moeda cunhada no império, e durante séculos a troca fez-se por produtos (cevada, sal, chá em tijolo) e por prata e ouro pesados; moedas apareceram mais tarde, em parte por influência do Nepal. A **Rota do Chá e dos Cavalos** fez do chá em tijolo uma bebida central na vida tibetana.',
  { img: 'tib-caravana-cha', leg: 'Caravana de iaques e mulas com chá em tijolo, num desfiladeiro; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'tib-kangyur-manuscrito', leg: 'Pormenor de uma página de um Kangyur escrito a ouro (Butão), exemplo da tradição manuscrita tibetana.' },
  { h: '5. Escrita, língua e livros' },
  'O tibetano escreve-se com um alfabeto de **trinta consoantes** de origem indiana, criado no século VII (ver Thonmi Sambhota) e fixado no século IX por uma reforma da ortografia, que explica porque a escrita conserva sons que a língua falada já perdeu. Os textos mais antigos são os **Anais** e as **inscrições em pilares** do império, e os **manuscritos de Dunhuang**. Os tibetanos traduziram do sânscrito, do chinês e de outras línguas milhares de textos budistas, reunidos no **Kangyur** (as palavras de Buda) e no **Tengyur** (os comentários), com mais de trezentos volumes no total. Em 1269, o sakya Phagpa criou ainda uma escrita para os Mongóis, a **’phags-pa**.',
  { img: 'tib-phagpa-escrita', leg: 'Exemplo de escrita ’phags-pa, criada por Phagpa em 1269, num salvo-conduto (paiza) mongol.' },
  { h: '6. Casa e família' },
  'Nas aldeias, as casas eram de **pedra e de taipa** (terra batida), de dois ou três pisos, com **telhado plano** e janelas pequenas, muitas vezes pintadas de branco, com adornos de cor à volta das janelas. No piso de baixo ficavam os animais, no de cima a família e o altar doméstico. Os **nómadas** viviam em grandes **tendas de pelo de iaque preto** (*ba*), que se montam e desmontam com facilidade. A família podia ser muito diversa: nalgumas regiões praticava-se a **poliandria fraterna** (vários irmãos casados com a mesma mulher), que evitava dividir a terra, e noutras o casamento monogâmico. As mulheres tinham um papel importante na economia e no comércio.',
  { img: 'tib-aldeia-planalto', leg: 'Aldeia tibetana de casas de pedra com telhado plano, num vale de cevada; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'tib-tenda-nomada', leg: 'Tenda nómada de pelo de iaque, com rebanho de iaques; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '7. Alimentação' },
  { lista: [
    '**Tsampa:** farinha de cevada torrada, misturada com chá e manteiga, a base da alimentação desde há séculos.',
    '**Chá de manteiga (*po cha*):** chá em tijolo, com manteiga de iaque e sal, bebido várias vezes ao dia. O momento exato em que o chá chegou ao Tibete é debatido (entre os séculos VII e X).',
    '**Carne:** de iaque, ovelha e cabra, muitas vezes seca ao ar frio e ao vento; o consumo de peixe foi tradicionalmente raro em muitas regiões.',
    '**Laticínios:** manteiga, queijo seco, iogurte.',
    '**Chang:** cerveja de cevada, bebida nas festas.',
    '**Momos e sopas:** pastéis cozidos a vapor e sopas de massa (*thukpa*), hoje muito populares.'
  ] },
  { img: 'tib-cozinha-tsampa', leg: 'Cozinha tibetana: tsampa, chá de manteiga e uma lareira; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '8. Vestuário' },
  'O traje tradicional é a ***chuba***, um manto comprido de lã ou de pele, apertado à cintura com uma faixa, com uma manga que se pode largar quando aquece; nas terras altas, forrado de pele de ovelha. As mulheres casadas usavam o ***pangden***, avental às riscas. Usavam-se botas altas de feltro e de couro, chapéus de pele, e muitas **joias**: turquesa, coral, âmbar e contas **dzi**, de pedra, que se acreditava terem poderes protetores. Os monges vestem roupas de tom bordô e amarelo, de acordo com as regras monásticas.',
  { h: '9. Música, dança e jogos' },
  'A música tibetana é sobretudo **religiosa**: cantos de monges em tom muito grave, trompas compridas (***dungchen***), címbalos, tambores, conchas e oboés. As **danças cham**, com máscaras e trajes de seda, são cerimónias dos mosteiros em que os monges representam a luta contra as forças do mal, e são acompanhadas de música ritual. A **ópera tibetana** (*lhamo*) teria sido criada nos séculos XIV–XV por **Thangtong Gyalpo** (tradição). Entre os jogos havia **jogos de dados**, de tabuleiro e provas de tiro com arco e de cavalaria, ainda hoje presentes em festivais como o **Shoton** e o **Monlam**.',
  { img: 'tib-cham-danca', leg: 'Dança cham com máscaras, num mosteiro tibetano' },
  { h: '10. Medicina, astronomia e ciência' },
  'A **medicina tibetana** (*sowa rigpa*, «a ciência da cura») combina ideias do Ayurveda indiano, da medicina chinesa e do Tibete: assenta em três «humores» (vento, bílis e flegma), na observação da urina e do pulso, na dieta e em remédios de plantas e minerais. O seu texto de base, os **Quatro Tantras** (*Gyüshi*), é atribuído pela tradição ao médico **Yuthok Yonten Gonpo**; a versão que conhecemos é medieval. No século XVII, o regente **Desi Sangye Gyatso** escreveu o comentário *Berilo Azul* (c. 1688) e criou uma escola de medicina em Lhasa (1696). O **calendário** tibetano, de origem indiana e chinesa, é lunissolar, e conta os anos desde 1027 d.C., segundo a tradição do *Kalachakra*. A **astrologia** foi usada na escolha de datas de casamentos, funerais e viagens.',
  { h: '11. Tecnologia, arquitetura e engenharia' },
  'Os tibetanos eram mestres na construção em **pedra e terra**, em locais difíceis: fortalezas (*dzong*) sobre escarpas, mosteiros, e **pontes**. O mestre **Thangtong Gyalpo** (séc. XIV–XV) é recordado por construir **pontes suspensas de ferro** em vários rios do Tibete e do Butão, e alguns dos seus elos ainda existem. A **impressão em xilogravura** (blocos de madeira) difundiu-se a partir do século XIII, e os textos eram impressos nos grandes mosteiros. Os artistas fundiam **estátuas de bronze dourado** pela técnica da cera perdida, e pintavam **tanka** em tecido, com pigmentos minerais e ouro.',
  { img: 'tib-impressao-xilografia', leg: 'Impressão de textos com blocos de madeira num mosteiro tibetano; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'tib-tsongkhapa', leg: 'Tsongkhapa, estátua de bronze dourado em estilo sino-tibetano, séc. XIX.' },
  { h: '12. Guerra' },
  'No império, o exército era formado por **cavaleiros**, em armaduras de lâminas de ferro ou de couro, com capacete, lança, espada e arco, e por infantaria recrutada nas divisões do reino. As fontes chinesas descrevem os soldados tibetanos como muito resistentes, adaptados à altitude e aos longos movimentos. A **cavalaria** tibetana, com a superioridade dos cavalos de montanha, deu ao império a vantagem na Ásia Central. Mais tarde, a guerra no Tibete foi sobretudo de **fortalezas** e de mercenários, de nobres rivais, e de intervenções mongóis e chinesas, como a de Güshi Khan (1642) ou a dos Dzungares e dos Qing (1717–1720). Os mosteiros tinham por vezes os seus próprios monges armados e fortalezas.'
];

const personalidades = [
  'As fontes tibetanas antigas são raras, e muitas das figuras seguintes são conhecidas sobretudo por textos escritos séculos depois, que misturam história e lenda. O que é tradição está assinalado.',
  { h: 'Songtsen Gampo (c. 604 – c. 650)' },
  'O fundador do Império Tibetano. Unificou o planalto, mudou a corte para Lhasa e abriu o Tibete às ideias da Índia, do Nepal e da China. Segundo a tradição, enviou o seu ministro **Thonmi Sambhota** à Índia para criar a escrita tibetana. Para as crónicas budistas posteriores é o primeiro «rei da lei», um bodisatva; para os historiadores, as suas ligações com o budismo são menos claras, e o seu verdadeiro papel é a construção do estado.',
  { h: 'Wencheng e Bhrikuti' },
  '**Wencheng** (c. 625–680), princesa da dinastia Tang, casou com Songtsen Gampo e chegou ao Tibete em 641. **Bhrikuti**, princesa do Nepal, é também citada nas fontes tibetanas. A tradição atribui a ambas a introdução do budismo na corte, e as duas são veneradas no Tibete como emanações da deusa Tara (a chinesa Tara Branca, a nepalesa Tara Verde). Os historiadores notam que nem todos os pormenores estão provados.',
  { h: 'Trisong Detsen (c. 742 – c. 797)' },
  'O rei do auge do império. Conquistou a Ásia Central e Chang’an (763), e fez do budismo religião do estado. Fundou o mosteiro de Samye e fez traduzir textos da Índia. Para os tibetanos é o segundo dos «três reis da lei» (com Songtsen Gampo e Ralpachen).',
  { h: 'Shantarakshita e Padmasambhava' },
  '**Shantarakshita** (c. 725–788), mestre indiano da universidade de Nalanda, aconselhou o rei e ordenou os primeiros monges tibetanos. **Padmasambhava** («o nascido do lótus»), mestre tântrico do vale de Swat, é, segundo a tradição, quem submeteu os espíritos locais que impediam a construção de Samye. É venerado pelos Nyingma como o «Guru Rinpoche». As fontes históricas sobre ele são escassas e tardias, e a sua biografia é, em grande parte, tradição religiosa.',
  { h: 'Ralpachen (reinou 815 – 838)' },
  'Rei protetor do budismo, ordenou a revisão do vocabulário técnico e de muitas traduções, e assinou o tratado de 821/822 com a China. Segundo as crónicas, foi assassinado numa conspiração de nobres, e o irmão, Langdarma, tornou-se rei.',
  { h: 'Langdarma (reinou 838 – 842)' },
  'O último rei do império. As crónicas budistas tibetanas dizem que perseguiu os mosteiros e foi morto por um monge, **Lhalung Palgyi Dorje**, em 842. Os historiadores consideram que a imagem do «rei perseguidor» é exagerada, e que os conflitos entre a corte, os clãs e os mosteiros tiveram causas políticas e económicas.',
  { h: 'Atisha (c. 982 – 1054)' },
  'Mestre budista de Bengala, convidado a ir ao Tibete ocidental pelo rei de Guge. Chegou c. 1042 e ficou por mais de dez anos. O seu ensino da ética e da compaixão deu origem à escola **Kadam**, antepassada dos Gelug.',
  { h: 'Milarepa (c. 1052 – c. 1135)' },
  'O poeta-asceta mais conhecido do Tibete, discípulo de Marpa. A sua vida, contada numa biografia do século XV, inclui episódios de vingança e de arrependimento que levaram à vida de eremita; é difícil separar facto e lenda. Os seus «cantos» são lidos como grande poesia religiosa.',
  { h: 'Sakya Pandita (1182 – 1251)' },
  'Erudito e líder da escola Sakya, a quem se chamava **Pandita** («sábio»). Foi à corte de Godan, c. 1247, e deixou uma obra de lógica e de ética. A sua ida a Liangzhou, e as cartas para os tibetanos, são o ponto de partida do poder dos Sakya, e de uma relação com os mongóis que historiadores de diferentes tradições interpretam de formas diferentes.',
  { h: 'Phagpa (1235 – 1280)' },
  'Sobrinho de Sakya Pandita e preceptor de **Kublai Khan**. Recebeu o título de preceptor imperial e foi o criador da escrita ’phags-pa (1269). Governou o Tibete central, em nome dos Yuan, através de um sistema de funcionários locais, e morreu relativamente novo, aos 45 anos.',
  { h: 'Tsongkhapa (1357 – 1419)' },
  'Nascido em Amdo (na região de Tsongkha), reformador e escritor. Insistiu na disciplina monástica e no estudo da lógica, e escreveu o *Lamrim Chenmo* («Grande Exposição do Caminho Gradual»). Os seus discípulos fundaram Ganden, Drepung e Sera. É o fundador da escola Gelug.',
  { h: 'Thangtong Gyalpo (séc. XIV – XV)' },
  'Mestre budista, engenheiro, poeta e, segundo a tradição, criador da ópera tibetana. É conhecido como o construtor das **pontes de ferro** do Tibete. As datas da sua vida são incertas (a tradição dá-lhe mais de cem anos), mas o seu nome é recordado por pontes, balsas e conventos.',
  { h: 'O Quinto Dalai Lama (1617 – 1682)' },
  '**Ngawang Lobsang Gyatso**, o «Grande Quinto». Com o apoio de Güshi Khan uniu o poder político e religioso, iniciou a construção do Potala, e escreveu muito (história, poesia, autobiografia). Recebeu em 1652–53 uma visita à corte do imperador Qing **Shunzhi** em Pequim, cujo significado as tradições tibetana e chinesa interpretam de formas diferentes (ver «Legado»).',
  { h: 'O Sexto Dalai Lama (1683 – 1706)' },
  '**Tsangyang Gyatso** recusou a vida monástica e escreveu poemas de amor e de vida, ainda hoje muito populares no Tibete. Foi deposto em 1705–06 durante as disputas entre o regente Lhazang Khan e os seus opositores, e morreu a caminho de Pequim, em circunstâncias discutidas (a tradição tibetana fala de um destino misterioso).',
  { h: 'António de Andrade (1580 – 1634)' },
  'Jesuíta português, nascido em Oleiros. Partiu de Agra em 1624, disfarçado de peregrino hindu, e atravessou o Himalaia até Tsaparang, onde foi bem recebido pelo rei de Guge. Escreveu a *Novo Descobrimento do Gram Cathayo, ou Reinos de Tibet* (1626), um dos primeiros relatos europeus do Tibete. Morreu em Goa em 1634. É uma lembrança de que Portugal teve um papel na descoberta do Tibete pela Europa.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**O budismo tibetano:** uma tradição viva, com mosteiros, escolas e mestres no Tibete, na Índia, no Nepal, no Butão e, hoje, no mundo inteiro.',
    '**A língua e a escrita tibetanas:** usadas por milhões de pessoas e por uma enorme literatura em tibetano clássico.',
    '**O cânone:** o Kangyur e o Tengyur conservam obras que se perderam em sânscrito.',
    '**Os mosteiros e o Potala:** Património Mundial (o Potala, o Jokhang e o Norbulingka, em Lhasa), com milhares de obras de arte.',
    '**A medicina tibetana, os calendários e a astrologia.**',
    '**A instituição dos Dalai Lamas:** uma forma única de governo, com mais de quatro séculos de história.'
  ] },
  { h: 'Arte' },
  'A arte tibetana é, na sua maior parte, **religiosa**: pintura em tecido (**tanka**) e em murais, estátuas de bronze dourado, mandalas, máscaras, objetos rituais. Os artistas seguiam **regras de proporção** estritas para as figuras sagradas, e os estilos mudaram com as influências da Índia (Pala), do Nepal (os mestres newar foram muito procurados), da China e da Ásia Central. As **cores** têm significado simbólico, e os materiais, como o ouro e o lápis-lazúli moído, eram caros.',
  { h: 'Arquitetura' },
  'Os mosteiros são complexos de templos, salas de debate, celas e armazéns, muitos edificados em encostas. Os edifícios têm paredes inclinadas, de pedra e terra, telhados planos com frisos de arbustos secos (*beyma*) e telhados dourados nos templos. O **chörten** (estupa) e o **dzong** (fortaleza-mosteiro) são as formas mais características.',
  { img: 'tib-gyantse-kumbum', leg: 'O Kumbum de Gyantse' },
  { h: 'Tibete e China: leituras diferentes' },
  'As relações entre o Tibete e os estados que existiram no território da China são um dos temas mais **debatidos e politizados** da história da Ásia. Esta secção não procura decidir, apenas mostrar como as fontes e os historiadores leem cada período. Em geral, os historiadores concordam nos factos (os casamentos, as guerras, os tratados, as titulações), e divergem na **interpretação** do que significavam.',
  { tabela: { cab: ['Período', 'O que dizem as fontes', 'Leituras diferentes'], linhas: [
    ['Tang e império tibetano (séc. VII–IX)', 'Casamentos de princesas (641, 710); guerras e tomada de Chang’an (763); tratado de 821/822 entre dois estados, gravado em duas línguas', 'Muitos historiadores (por exemplo, Christopher Beckwith) veem dois impérios rivais e, no tratado, uma relação de iguais. A historiografia oficial chinesa vê nos casamentos o início de laços de parentesco e de integração entre «Han» e tibetanos. A historiografia tibetana vê um estado soberano.'],
    ['Os Sakya e a dinastia Yuan (séc. XIII–XIV)', 'Sakya Pandita e Phagpa ligados aos Mongóis; criação do departamento (1264; Xuanzheng Yuan desde 1288) que tratava de assuntos budistas e do Tibete; administração por oficiais', 'A historiografia oficial chinesa vê aqui o começo da incorporação do Tibete num estado chinês (Wang Jiawei e Nyima Gyaincain). Historiadores tibetanos (como Tsepon Shakabpa) e muitos autores ocidentais veem sobretudo uma relação entre um lama e um patrono mongol (*mchod yon*), anterior à conquista da China pelos Yuan em 1279, e discutem se o Tibete foi governado como uma província.'],
    ['Dinastia Ming (1368–1644)', 'Títulos conferidos a dignitários tibetanos; missões de tributo', 'Para uns, são provas de soberania sobre o Tibete; para outros, são rituais de corte e comércio sem controlo real, já que o Tibete era governado por Phagmodrupa e Tsangpa.'],
    ['Dinastia Qing (1644–1912)', 'Intervenção militar em 1720; ambans em Lhasa desde 1727; reorganização de 1751; urna dourada (1793)', 'Os autores divergem sobre se os Qing exerciam soberania, protetorado, ou uma relação de «patrono e sacerdote»; Melvyn Goldstein e Elliot Sperling, por exemplo, escreveram sobre estas diferenças, de formas nem sempre concordantes.']
  ] } },
  'O que é consensual é que o Tibete teve, em muitos períodos, um **governo próprio**, que manteve relações com os impérios vizinhos de formas muito diferentes ao longo de séculos, e que o vocabulário moderno (soberania, suserania, protetorado) se aplica mal aos conceitos de então. Para o século XX e o presente, o leitor deve consultar historiadores e fontes de várias origens.',
  { h: 'Porque terminou o império?' },
  'Os historiadores propõem várias causas, sem consenso:',
  { lista: [
    '**Rivalidades internas:** entre a corte, os clãs de ministros e as comunidades budistas, e a luta pela sucessão depois de Ralpachen.',
    '**Custos do império:** manter exércitos em regiões distantes, com recursos limitados do planalto.',
    '**Perda das rotas:** a retirada de Dunhuang e do Tarim, e o enfraquecimento dos Tang e dos Uigures, que mudaram o equilíbrio da Ásia Central.',
    '**Conflitos religiosos:** a narrativa tradicional atribui o fim a Langdarma e à perseguição, mas os historiadores consideram-na parcial e posterior.'
  ] },
  { h: 'Redescoberta e estudo' },
  'Os **Anais de Dunhuang**, encontrados em 1900 e levados por **Aurel Stein** (para Londres) e **Paul Pelliot** (para Paris) em 1907–08, são a fonte mais valiosa sobre o império. O jesuíta **Ippolito Desideri** viveu em Lhasa de 1716 a 1721 e escreveu o melhor relato europeu antigo. No século XX, o Tibete tornou-se tema de estudo de tibetólogos como **Giuseppe Tucci**, que estudou e fotografou Guge nos anos 1930, e de investigadores de várias nacionalidades.',
  { caixa: 'Para visitar', texto: 'O acesso ao Tibete é regulado pelo governo da China e exige autorizações especiais para estrangeiros, que mudam com o tempo; convém consultar as regras antes de planear. A altitude de Lhasa (3650 m) exige aclimatação de alguns dias. Fora do Tibete, tem coleções importantes de arte tibetana: o **Museu Guimet** (Paris), o **British Museum** e a **British Library** (manuscritos de Dunhuang), o **Metropolitan Museum** (Nova Iorque), o **Rubin Museum of Art** (Nova Iorque) e o **Museu Nacional de Arte Asiática de Berlim**. Em Portugal, o **Museu do Oriente** (Lisboa) e o **Museu Nacional de Etnologia** têm peças dos Himalaias.' }
];

const quiz = [
  { p: 'Qual foi o rei que, no século VII, fundou o Império Tibetano e mudou a corte para Lhasa?', op: ['Trisong Detsen', 'Songtsen Gampo', 'Ralpachen', 'Langdarma'], certa: 1, exp: 'Songtsen Gampo (c. 629 – 650) unificou o planalto e é recordado como fundador do estado tibetano.' },
  { p: 'Em que vale do sul do Tibete nasceu a dinastia dos reis do império?', op: ['Yarlung', 'Kham', 'Amdo', 'Zhangzhung'], certa: 0, exp: 'Os reis do império eram chefes do vale de Yarlung.' },
  { p: 'Segundo a tradição, quem foi enviado à Índia para criar a escrita tibetana?', op: ['Padmasambhava', 'Atisha', 'Thonmi Sambhota', 'Phagpa'], certa: 2, exp: 'A tradição atribui a criação do alfabeto a Thonmi Sambhota, ministro de Songtsen Gampo; os pormenores são discutidos.' },
  { p: 'Que capital da dinastia Tang foi ocupada por um exército tibetano em 763?', op: ['Luoyang', 'Chang’an', 'Pequim', 'Nanquim'], certa: 1, exp: 'Em 763, aproveitando a crise da rebelião de An Lushan, os tibetanos ocuparam Chang’an por cerca de quinze dias.' },
  { p: 'Qual foi o primeiro grande mosteiro budista do Tibete, fundado no tempo de Trisong Detsen?', op: ['Samye', 'Drepung', 'Sakya', 'Tashilhunpo'], certa: 0, exp: 'Samye foi iniciado c. 775 e consagrado c. 779.' },
  { p: 'Onde se encontrou, em 1900, um grande conjunto de manuscritos em tibetano antigo, incluindo os Anais do império?', op: ['Em Lhasa', 'Nas grutas de Dunhuang', 'Em Tsaparang', 'No Potala'], certa: 1, exp: 'Os manuscritos de Dunhuang, selados por volta do ano 1000, são a fonte mais rica sobre o império.' },
  { p: 'O que foi gravado em pilares de pedra em Lhasa em 821/822?', op: ['Um tratado de paz com a China Tang', 'As leis do Dalai Lama', 'O calendário tibetano', 'O alfabeto'], certa: 0, exp: 'O tratado, em tibetano e em chinês, foi gravado em pilares; o de Lhasa ainda existe diante do Jokhang.' },
  { p: 'Em que ano foi assassinado o rei Langdarma, o que levou à dissolução do império?', op: ['642', '742', '842', '942'], certa: 2, exp: 'A morte de Langdarma, em 842, abriu a «era da fragmentação».' },
  { p: 'Que mestre indiano chegou ao Tibete em 1042 e esteve na origem da escola Kadam?', op: ['Nagarjuna', 'Atisha', 'Shantarakshita', 'Kamalashila'], certa: 1, exp: 'Atisha chegou ao Tibete ocidental em 1042, a convite do rei de Guge.' },
  { p: 'Que escola tibetana governou o Tibete central no século XIII, sob o apoio mongol?', op: ['Gelug', 'Sakya', 'Nyingma', 'Bön'], certa: 1, exp: 'Os Sakya, com Sakya Pandita e Phagpa, tiveram o poder, em ligação com Godan e Kublai Khan.' },
  { p: 'Quem fundou a escola Gelug e o mosteiro de Ganden em 1409?', op: ['Milarepa', 'Sakya Pandita', 'Tsongkhapa', 'Songtsen Gampo'], certa: 2, exp: 'Tsongkhapa (1357–1419) fundou a escola dos «virtuosos», a dos Dalai Lamas.' },
  { p: 'Quem concedeu o título de «Dalai Lama» a Sonam Gyatso em 1578?', op: ['Altan Khan', 'Kublai Khan', 'Gengis Khan', 'O imperador Qing'], certa: 0, exp: 'O mongol Altan Khan deu o título (dalai, «oceano», em mongol) ao terceiro Dalai Lama.' },
  { p: 'Que jesuíta português chegou a Tsaparang, no Tibete ocidental, em 1624?', op: ['Francisco Xavier', 'António de Andrade', 'Matteo Ricci', 'Ippolito Desideri'], certa: 1, exp: 'António de Andrade foi dos primeiros europeus a descrever o Tibete. Desideri é italiano e chegou em 1716.' },
  { p: 'Qual dos palácios foi reconstruído a partir de 1645 sob o Quinto Dalai Lama?', op: ['Norbulingka', 'Yumbulakhang', 'Potala', 'Jokhang'], certa: 2, exp: 'O Palácio Branco do Potala ficou pronto em 1648 e o Vermelho em 1694.' },
  { p: 'Sobre as relações entre o Tibete e a China na dinastia Yuan, o que é correto dizer?', op: ['Todos os historiadores concordam sobre o seu significado', 'Há acordo sobre os factos, mas leituras diferentes sobre o seu significado político', 'Não há fontes', 'O Tibete nunca teve contacto com os Yuan'], certa: 1, exp: 'Os factos (Sakya, Xuanzheng Yuan) são conhecidos; a interpretação varia entre a historiografia chinesa, a tibetana e a ocidental.' }
];

export default {
  id: 'tibete',
  cor: '#a04a4a',
  emblema: '../assets/img/tibete.png',
  nome:    { pt: 'Tibete', en: 'Tibet' },
  periodo: { pt: 'c. 618 – séc. XVIII', en: 'c. AD 618 – 18th century' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
