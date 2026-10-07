// COREIA — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas aproximadas; as mais antigas vêm de crónicas escritas séculos depois (Samguk Sagi, 1145; Samguk Yusa, c. 1280) e misturam lenda e história. a.C./d.C.
// Este dossiê termina em 1897, com a proclamação do Império Coreano; o século XX não entra.
// Imagens: cada {img:'id'} procura o ficheiro  coreia/img/id.jpg  (ver IMAGENS_COREIA.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'A **Coreia** é uma das civilizações mais antigas e contínuas da Ásia Oriental. Na península que se estende entre a China e o Japão, um povo com língua própria, o coreano, construiu reinos, uma escrita original e uma cultura que absorveu a influência chinesa sem nunca se dissolver nela. Este dossiê acompanha a sua história desde a lenda do fundador **Dangun** e do reino de **Gojoseon** até à proclamação do **Império Coreano**, em **1897**.',
    'A história divide-se em grandes blocos: os primeiros reinos e o Gojoseon; os **Três Reinos** (**Goguryeo**, **Baekje** e **Silla**), que disputaram a península durante séculos; a **Silla Unificada** (676 – 935), que a juntou; o **Goryeo** (918 – 1392), que deu o nome ao país e inventou a impressão com tipos móveis de metal; e o **Joseon** (1392 – 1897), uma das dinastias mais duradouras da Ásia Oriental, de **Sejong** e do alfabeto **hangul**, do almirante **Yi Sun-sin** e dos navios-tartaruga, e de um confucionismo que moldou a sociedade até ao fim.'
  ] },
  { img: 'cor-mapa-tres-reinos', leg: 'Mapa dos Três Reinos da Coreia (Goguryeo, Baekje e Silla), com a confederação de Gaya, no século V.' },
  { h: 'Onde ficava' },
  'A **península coreana** é uma saliência montanhosa, de cerca de 1000 km de comprimento, que desce da Manchúria para o sul, entre o **mar Amarelo** (a oeste), o **mar do Japão**, chamado **Mar do Leste** pelos coreanos (a leste), e o estreito da Coreia (a sul, em frente ao Japão). Cerca de 70 % do terreno é montanha, e os rios mais importantes são o **Han** (que atravessa Seul), o **Taedong** (Pyongyang), o **Nakdong** e o **Yalu** (Amnok em coreano), que marca hoje a fronteira com a China. As planícies de arroz estão sobretudo a oeste e a sul. Os invernos são rigorosos, os verões húmidos e de monção.',
  'Nos primeiros séculos, o território coreano estendia-se também pela **Manchúria** e pela península de Liaodong: o reino de Goguryeo, no seu apogeu, controlava grande parte da atual Coreia do Norte e do nordeste da China. A fronteira com a China, a norte, e o mar, a sul e a oeste, fizeram da península um corredor de ideias, de monges e de exércitos entre a China e o Japão.',
  { h: 'Quando existiu' },
  'As datas dos primeiros séculos são aproximadas e, para os reinos mais antigos, resultam de crónicas escritas muito depois dos acontecimentos. A partir do século IV d.C. a cronologia é bastante sólida.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Pré-história e Gojoseon', 'até c. 108 a.C.', 'Neolítico, Idade do Bronze e dólmenes; lenda de Dangun (2333 a.C. na tradição); Gojoseon histórico e Wiman Joseon; conquista pela dinastia Han chinesa em 108 a.C.'],
    ['Três Reinos', 'séc. I a.C. – 668 d.C.', 'Goguryeo, Baekje e Silla (datas de fundação tradicionais: 37, 18 e 57 a.C.); confederação de Gaya; chegada do budismo; guerras com a China'],
    ['Silla Unificada e Balhae', '676 – 935 (Balhae: 698 – 926)', 'Silla unifica a maior parte da península; idade de ouro do budismo; Balhae sucede a Goguryeo a norte'],
    ['Goryeo', '918 – 1392', 'Wang Geon; exames de funcionários; cerâmica celadon; Tripitaka Koreana; tipos móveis de metal; invasões mongóis'],
    ['Joseon', '1392 – 1897', 'Neoconfucionismo; Sejong e o hangul; invasões japonesas (1592–98); invasões manchus; reformas dos séculos XVIII e XIX; abertura forçada ao mundo'],
    ['Império Coreano', 'a partir de 1897', 'Proclamado por Gojong a 12 de outubro de 1897; os acontecimentos posteriores ficam fora deste dossiê']
  ] } },
  { img: 'cor-gyeongbokgung', leg: 'O palácio de Gyeongbokgung, em Seul, fundado em 1395 e reconstruído em 1865–68.' },
  { h: 'Quem eram os coreanos?' },
  'Os coreanos falam uma língua de origem debatida: o coreano é geralmente tratado como uma língua isolada, ou como parte de uma pequena família (as línguas coreânicas), e a sua ligação a outras famílias é discutida. Os povos que viveram na península na Antiguidade eram agricultores de arroz e de milho-miúdo, caçadores e guerreiros a cavalo, com uma forte tradição **xamânica**. A partir do século IV a.C., o ferro e as migrações vindas do norte transformaram as comunidades em estados.',
  'Desde os primeiros séculos d.C., as elites coreanas adotaram a **escrita chinesa**, a ideia de imperador, o confucionismo e o budismo, mas adaptaram-nos: criaram uma escrita auxiliar para o coreano (o **idu**), uma versão própria do budismo e, no século XV, um alfabeto totalmente original. Outra característica é a **continuidade**: a mesma língua, a mesma ideia de comunidade e muitos dos mesmos costumes (a comida, a casa aquecida pelo chão, o respeito pelos antepassados) atravessam mais de dois mil anos.',
  { h: 'Porque importam' },
  { lista: [
    '**O alfabeto hangul:** criado por Sejong e pelos seus eruditos (1443; promulgado em 1446), é um dos poucos alfabetos do mundo cuja data, autor e lógica são conhecidos, e a sua construção é considerada notavelmente científica.',
    '**Impressão com tipos móveis de metal:** os coreanos usavam-nos no século XIII, antes de Gutenberg; o **Jikji** (1377) é o mais antigo livro conservado impresso com este processo.',
    '**A Tripitaka Koreana:** 81 258 placas de madeira com todo o cânone budista, gravadas no século XIII, ainda guardadas em Haeinsa.',
    '**Arte e cerâmica:** os celadon do Goryeo, as porcelanas brancas do Joseon, as pinturas e a arte funerária de Goguryeo e de Silla.',
    '**A resistência:** de Goguryeo a derrotar os exércitos de Sui, ao almirante Yi Sun-sin a vencer a armada japonesa, a história coreana é a de um país pequeno entre vizinhos muito maiores que soube manter a sua identidade.',
    '**Uma sociedade confucionista:** o Joseon criou um dos sistemas mais longos de governo por letrados, com exames, arquivos e uma burocracia que deixou um registo diário contínuo durante quinhentos anos.'
  ] },
  { img: 'cor-porcelana-lua', leg: 'Jarra da lua em porcelana branca do período Joseon, século XVIII.' },
  { caixa: 'A Coreia hoje', texto: 'A península está hoje dividida em dois estados, a **Coreia do Sul** (capital Seul) e a **Coreia do Norte** (capital Pyongyang), e o nome «Coreia» vem de **Goryeo**, através dos comerciantes persas e árabes e dos viajantes europeus da Idade Média. Em coreano, o país chama-se **Hanguk** (a sul) ou **Joseon** (a norte). Os séculos XX e XXI ficam fora deste dossiê. Muitos dos monumentos aqui descritos (o palácio de Changdeokgung, Gyeongju, Haeinsa, Hwaseong, os túmulos reais) são Património Mundial da UNESCO.' }
];

const linha = [
  'Esta linha do tempo segue os acontecimentos principais da história coreana até 1897. Os séculos mais antigos têm poucas fontes e muitas lendas, e por isso o que é **lenda** e o que é **facto** é assinalado em cada entrada. A partir de c. 400 d.C. há inscrições e crónicas mais fiáveis; do século XV em diante há um dos maiores arquivos oficiais da Ásia.',
  { linha: [
    { d: 'c. 8000 – 300 a.C.', t: 'Pré-história', x: 'No **Neolítico** (cerâmica de impressões em pente, a cultura **Jeulmun**, c. 8000 – 1500 a.C.), as comunidades vivem da pesca e da caça. Durante o período **Mumun** (c. 1500 – 300 a.C.) generaliza-se o cultivo do arroz, surge o bronze e erguem-se milhares de **dólmenes**, túmulos de grandes pedras; a Coreia concentra uma grande parte dos dólmenes do mundo (cerca de 40 %, segundo estimativas). O ferro chega por volta do século IV a.C.' },
    { d: '2333 a.C. (lenda)', t: 'Dangun e Gojoseon', x: 'Segundo o **Samguk Yusa** (c. 1280), obra do monge **Iryeon**, **Hwanung**, filho do Senhor do Céu, desceu ao monte Taebaek; uma ursa tornou-se mulher (**Ungnyeo**) e deu à luz **Dangun Wanggeom**, que fundou **Gojoseon** («a Antiga Joseon») em 2333 a.C. É uma **lenda de origem**, não um facto datável, mas é o mito fundador da nação: o dia da fundação (**Gaecheon-jeol**) celebra-se a 3 de outubro.' },
  ] },
  { img: 'cor-dolmen-ganghwa', leg: 'Dólmen de Bugeun-ri, na ilha de Ganghwa, da Idade do Bronze.' },
  { img: 'cor-dangun-lenda', leg: 'Reconstrução artística da lenda de Dangun, de Hwanung e da ursa. (Imagem ilustrativa gerada por IA.)' },
  { linha: [
    { d: 'séc. IV – 108 a.C.', t: 'O Gojoseon histórico e a conquista Han', x: 'O **Gojoseon** aparece em textos chineses a partir do século IV a.C. (o seu território e a sua capital são debatidos: Liaoning ou Pyongyang). Por volta de **194 a.C.**, **Wiman**, um refugiado vindo do reino chinês de Yan, tomou o poder e fundou o chamado **Wiman Joseon**. Em **108 a.C.**, o imperador Wu da dinastia **Han** conquistou-o e criou quatro comandâncias; a de **Lelang** (perto de Pyongyang) durou mais de quatrocentos anos como centro de cultura chinesa na península, até ser tomada por Goguryeo em **313**.' },
  ] },
  { img: 'cor-bronze-gojoseon', leg: 'Adaga de bronze e espelho com desenhos geométricos finos, Idade do Bronze coreana, Museu Nacional da Coreia.' },
  { linha: [
    { d: '57 a.C. – 18 a.C. (tradição)', t: 'Os três reinos nascem na lenda', x: 'Segundo o **Samguk Sagi** (1145), obra do letrado **Kim Busik**, **Silla** foi fundado em 57 a.C. por **Park Hyeokgeose**, **Goguryeo** em 37 a.C. por **Jumong** (Dongmyeongseong) e **Baekje** em 18 a.C. por **Onjo**. Estas datas são **tradicionais**: os historiadores pensam que os três reinos só se consolidaram entre os séculos I e IV d.C., a partir de confederações de aldeias e chefes, e que Silla foi o último a tornar-se um estado centralizado.' },
    { d: '372 – 527', t: 'O budismo chega aos três reinos', x: 'O budismo foi oficialmente adotado em **Goguryeo em 372** (monge **Sundo**, vindo da China), em **Baekje em 384** (monge **Malananta**) e em **Silla em 527**, depois do martírio do funcionário **Yi Chadon** (a data e o episódio contêm elementos lendários). O budismo tornou-se a religião dos reis e deu origem a templos, pagodes e imagens.' },
    { d: '391 – 413', t: 'Gwanggaeto, o Grande', x: 'O rei **Gwanggaeto** de Goguryeo duplica o território, conquista terras na Manchúria e contra Baekje, e envia tropas contra Japão e Gaya. A sua **estela** (erguida em 414 pelo filho Jangsu, em Ji’an, na China) é a fonte principal sobre o reinado; a sua leitura de certos trechos sobre o Japão é muito debatida.' },
  ] },
  { img: 'cor-goguryeo-mural', leg: 'Mural de caça a cavalo num túmulo de Goguryeo, século V.' },
  { img: 'cor-estela-gwanggaeto', leg: 'Estela de Gwanggaeto, o Grande, em Ji’an (414).' },
  { linha: [
    { d: '427 – 475', t: 'Pyongyang capital; Baekje foge para sul', x: 'O rei **Jangsu** (r. 413 – 491) muda a capital de Goguryeo para **Pyongyang** em 427. Em **475** captura **Hanseong**, a capital de Baekje, e mata o rei Gaero; Baekje foge para **Ungjin** (Gongju) e, em 538, para **Sabi** (Buyeo).' },
    { d: '532 – 562', t: 'Gaya absorvida por Silla', x: 'A **confederação de Gaya** (pequenos estados de ferro e navegação, no vale do Nakdong) é absorvida por Silla: **Geumgwan Gaya** em 532 e **Dae Gaya** em 562. Gaya é célebre pelas suas armaduras e pelo **gayageum**, a cítara de doze cordas.' },
    { d: '538 – 552', t: 'Baekje e a sua rota marítima', x: 'Baekje, sob o rei **Seong** (r. 523 – 554), desenvolve cultura e comércio, e envia ao Japão monges, textos e uma estátua de Buda (a data tradicional é **552**; outras fontes propõem 538). A sua arte refinada chegou até ao Japão de Asuka.' },
  ] },
  { img: 'cor-incensario-baekje', leg: 'Incensário de bronze dourado de Baekje, século VII, Museu Nacional de Buyeo.' },
  { linha: [
    { d: '598 – 614', t: 'Goguryeo resiste à China de Sui', x: 'A dinastia chinesa **Sui** invade Goguryeo várias vezes. Em **612**, perante um exército que as fontes chinesas dizem ter mais de um milhão de homens (número certamente exagerado), o general **Eulji Mundeok** destrói uma coluna de ataque no rio **Salsu**. As derrotas contribuem para a queda da dinastia Sui em 618.' },
    { d: '632 – 647', t: 'A rainha Seondeok', x: 'Em Silla, a **rainha Seondeok** governa, a primeira das três rainhas reinantes de Silla (as outras são Jindeok, 647 – 654, e Jinseong, 887 – 897). Segundo a tradição, durante o seu reinado construiu-se o **Cheomseongdae**, o mais antigo observatório astronómico conservado da Ásia Oriental, e a torre de nove andares do templo **Hwangnyongsa**.' },
    { d: '645 – 668', t: 'Silla e Tang destroem Baekje e Goguryeo', x: 'Silla alia-se à China da dinastia **Tang**. A coligação derrota **Baekje** em **660** (o general **Gyebaek** morre com cinco mil homens em Hwangsanbeol; a capital cai) e **Goguryeo** em **668**, depois de décadas de guerra e de uma luta interna após a morte do poderoso **Yeon Gaesomun**. Um exército japonês enviado em socorro de Baekje foi derrotado em **Baekgang** (663).' },
    { d: '670 – 676', t: 'Silla expulsa a China', x: 'Os Tang pretendiam ficar com a península. Silla, sob o rei **Munmu**, combate-os e consegue, em **676**, expulsá-los da maior parte do território, a sul do rio Taedong. É a **Silla Unificada**: cerca de dois terços da península, mas não a Manchúria.' },
    { d: '698 – 926', t: 'Balhae', x: '**Dae Joyeong**, descrito como antigo general de Goguryeo (a sua origem é debatida), funda em **698** o reino de **Balhae** (Bohai), na Manchúria e no norte da península, reclamado como sucessor de Goguryeo. Durou até 926, quando os **khitan** o destruíram. Os historiadores coreanos falam de «Estados do Norte e do Sul».' },
    { d: '751', t: 'Bulguksa e Seokguram', x: 'Em Gyeongju, o ministro **Kim Daeseong** inicia a construção do templo de **Bulguksa** e da gruta de **Seokguram**, com o seu Buda de granito (concluídos c. 774). O **Sino do Rei Seongdeok** (771) é o maior sino coreano conservado. Uma impressão em xilogravura (a **Dharani Sutra de Luz Pura**), encontrada em 1966 numa pagoda do templo, é das mais antigas do mundo e terá sido feita antes de 751 (a data é debatida).' },
  ] },
  { img: 'cor-bulguksa', leg: 'Templo de Bulguksa, em Gyeongju, fundado em 751.' },
  { img: 'cor-tripitaka-haeinsa', leg: 'Placa de madeira da Tripitaka Koreana, em Haeinsa.' },
  { linha: [
    { d: '828 – 935', t: 'Jang Bogo e o fim de Silla', x: '**Jang Bogo** funda em 828 a base naval de **Cheonghaejin**, controlando o comércio entre a Coreia, a China e o Japão. Mais tarde, as rivalidades dos nobres e as revoltas camponesas fragmentam Silla nos «**Três Reinos Posteriores**» (892 – 936). O último rei de Silla, **Gyeongsun**, rende-se em **935**.' },
    { d: '918 – 936', t: 'Wang Geon funda o Goryeo', x: 'O chefe militar **Wang Geon**, de uma família de comerciantes marítimos de **Songak** (Kaesong), funda o **Goryeo** em 918, derrota o Baekje Posterior e unifica a península em **936**, reclamando-se herdeiro de Goguryeo. A sua política de conciliação com as elites de Silla e as suas dez injunções (**Hunyo Sipjo**) influenciaram o reino durante séculos.' },
    { d: '993 – 1019', t: 'Os khitan são travados', x: 'O império **Khitan** (Liao) invade o Goryeo três vezes. Em **993**, o diplomata **Seo Hui** convence os khitan a recuar quase sem batalha; em **1019**, o general **Gang Gam-chan** aniquila o exército invasor em **Gwiju** (Kuju). O Goryeo constrói uma longa muralha (a Cheolli Jangseong).' },
    { d: '1170 – 1259', t: 'Golpe militar e invasões mongóis', x: 'Em **1170**, oficiais militares tomam o poder numa revolta contra a elite civil; durante quase um século o rei é uma figura simbólica, enquanto a família **Choe** governa de facto. Os **mongóis** invadem seis vezes entre **1231 e 1259**; o governo refugia-se na ilha de **Ganghwa** (1232) e o país é devastado. Em 1259 o Goryeo submete-se e torna-se vassalo do império mongol (Yuan).' },
    { d: '1236 – 1251', t: 'A Tripitaka Koreana', x: 'Durante a guerra, os monges gravaram em **81 258** placas de madeira o cânone budista completo, como oração para que o Buda protegesse o país. Uma primeira edição, iniciada em 1011, ardeu em 1232; a de Ganghwa guarda-se desde o final do século XIV em **Haeinsa**.' },
  ] },
  { linha: [
    { d: '1377', t: 'O Jikji', x: 'No templo de **Heungdeoksa**, em **Cheongju**, imprime-se o **Jikji** (título abreviado de uma antologia dos ensinamentos dos grandes monges do Seon, o Zen coreano, compilada pelo monge **Baegun**). É o mais antigo livro conservado impresso com **tipos móveis de metal**, 78 anos antes da Bíblia de Gutenberg (c. 1455). Já em c. 1234 há notícia, numa fonte coreana, de uma edição impressa assim (perdida).' },
  ] },
  { img: 'cor-jikji', leg: 'Página do Jikji (1377), Biblioteca Nacional de França (exemplar do volume II).' },
  { linha: [
    { d: '1392', t: 'Yi Seong-gye funda o Joseon', x: 'O general **Yi Seong-gye** recusa-se a atacar a China Ming (**retirada de Wihwado**, 1388), volta com o exército, depõe o último rei do Goryeo e funda a **dinastia Joseon** (**1392**), com o título de **Taejo**. Em 1394 transfere a capital para **Hanyang** (a atual **Seul**); o seu principal conselheiro, o letrado neoconfuciano **Jeong Do-jeon**, desenha o novo Estado. O palácio de **Gyeongbokgung** é concluído em 1395.' },
    { d: '1443 – 1446', t: 'Sejong e o hangul', x: 'O rei **Sejong** (r. 1418 – 1450) manda criar um alfabeto para a língua coreana. Terminado em **1443** e promulgado em **1446** com o título **Hunminjeongeum** («Sons corretos para instruir o povo»), é o **hangul**. É a época de ouro do Joseon: invenções científicas, música, mapas, e o grupo de eruditos do **Jiphyeonjeon** (Salão dos Sábios).' },
  ] },
  { img: 'cor-hunminjeongeum', leg: 'Página do Hunminjeongeum (1446), exemplar Gansong, Tesouro Nacional da Coreia do Sul.' },
  { linha: [
    { d: '1592 – 1598', t: 'A guerra Imjin: a invasão japonesa', x: 'O senhor da guerra japonês **Toyotomi Hideyoshi** invade a Coreia em **1592**, com cerca de 150 000 homens, a caminho de conquistar a China. O exército coreano é batido em terra, mas a marinha de **Yi Sun-sin**, com os **navios-tartaruga**, vence sucessivas batalhas, cortando o abastecimento japonês (**Hansando**, 1592). Guerrilhas de civis e monges (os «exércitos justos») e a intervenção da China Ming (1593) equilibram a guerra. Uma segunda invasão em **1597** é travada, e o japonês retira-se após a morte de Hideyoshi, em 1598. Yi Sun-sin morre no último combate, em **Noryang**.' },
  ] },
  { img: 'cor-batalha-hansando', leg: 'Reconstrução artística da batalha de Hansando (1592): a formação «asa de garça» da frota coreana. (Imagem ilustrativa gerada por IA.)' },
  { linha: [
    { d: '1627 – 1637', t: 'As invasões manchus', x: 'Os **manchus** invadem a Coreia em **1627** e de novo em **1636**; o rei **Injo** refugia-se na fortaleza de **Namhansanseong** e, em janeiro de 1637, tem de se render e prestar homenagem ao novo imperador (humilhação de **Samjeondo**). O Joseon torna-se tributário da dinastia **Qing**, mas mantém a autonomia interna.' },
    { d: '1776 – 1800', t: 'Jeongjo e o renascimento do século XVIII', x: 'Os reis **Yeongjo** (1724 – 1776) e, sobretudo, **Jeongjo** (1776 – 1800) promovem reformas, a biblioteca real **Gyujanggak**, a escola de pensamento **Silhak** («ciência prática») e a arte realista de **Kim Hong-do** e **Shin Yun-bok**. Jeongjo constrói a fortaleza de **Hwaseong**, em Suwon (1794 – 1796).' },
    { d: '1863 – 1894', t: 'Daewongun, tratados e revolta Donghak', x: 'Durante a regência do **Heungseon Daewongun** (1863 – 1873), o país fecha-se aos estrangeiros, reprime os católicos (1866) e repele expedições francesas (1866) e norte-americanas (1871). O **Tratado de Ganghwa** (1876) obriga a abrir portos ao Japão, seguem-se tratados com os EUA (1882) e outras potências. A revolta camponesa **Donghak** (1894) é o rastilho da guerra sino-japonesa de 1894 – 1895.' },
    { d: '1895 – 1897', t: 'A rainha Min e o Império Coreano', x: 'A rainha **Min** (Myeongseong), que se opunha à influência japonesa, é assassinada por agentes japoneses a **8 de outubro de 1895**. O rei **Gojong** refugia-se na legação russa (1896 – 1897) e, a **12 de outubro de 1897**, proclama o **Império Coreano** (Daehan Jeguk), assumindo o título de imperador. É aqui que termina este dossiê.' },
  ] },
  { img: 'cor-gojong-retrato', leg: 'Retrato do imperador Gojong, final do século XIX.' }
];

const mapa = [
  'O mapa coreano é o de uma sucessão de capitais, muitas delas no mesmo vale: a capital muda com a dinastia, mas as montanhas, os rios e as fortalezas ficam. Os lugares principais são estes.',
  { tabela: { cab: ['Lugar', 'Onde (atual)', 'Quando / quem', 'Importância'], linhas: [
    ['Gungnae e Hwando', 'Ji’an, Jilin (China)', 'Goguryeo, séc. I – V', 'Primeiras capitais; estela de Gwanggaeto; túmulos com murais (Património Mundial)'],
    ['Pyongyang', 'Coreia do Norte', 'Goguryeo (de 427); Lelang antes', 'Capital de Goguryeo no apogeu; túmulos com murais'],
    ['Hanseong, Ungjin e Sabi', 'Seul; Gongju; Buyeo', 'Baekje, séc. I a.C. – 660', 'Capitais sucessivas; túmulo do rei Muryeong; Património Mundial'],
    ['Gyeongju (Seorabeol)', 'Sudeste da Coreia do Sul', 'Silla, 57 a.C. – 935', 'Capital de mil anos; Cheomseongdae, Bulguksa, Seokguram; «museu sem paredes»'],
    ['Gaegyeong (Kaesong)', 'Coreia do Norte', 'Goryeo, 918 – 1392', 'Capital do Goryeo; túmulos reais'],
    ['Ganghwa', 'Ilha a oeste de Seul', 'Capital em exílio, 1232 – 1270', 'Refúgio contra os mongóis; dólmenes; local de combates em 1866 e 1871'],
    ['Haeinsa', 'Monte Gaya, Hapcheon', 'Fundado em 802', 'Guarda a Tripitaka Koreana'],
    ['Hanyang (Seul)', 'Capital da Coreia do Sul', 'Joseon, 1394 – 1897', 'Capital do Joseon; palácios Gyeongbokgung e Changdeokgung; Jongmyo'],
    ['Hwaseong', 'Suwon', 'Jeongjo, 1794 – 1796', 'Fortaleza do século XVIII; Património Mundial'],
    ['Hahoe e Andong', 'Interior sudeste', 'Séc. XIV – XIX', 'Aldeias de yangban; Património Mundial'],
    ['Jeju', 'Ilha a sul', 'Reino de Tamna; Joseon', 'Ilha vulcânica, com tradições próprias; terra das mergulhadoras haenyeo']
  ] } },
  { img: 'cor-kangnido', leg: 'Mapa Kangnido (1402), mapa-múndi coreano, em cópia japonesa do século XVI; a imagem compara-o com o mapa de Fra Mauro.' },
  { h: 'Gyeongju: a capital de mil anos' },
  'Silla governou a partir de **Gyeongju** durante quase mil anos (57 a.C. – 935, segundo a tradição). O Samguk Yusa fala de 178 936 famílias na cidade no século IX (número de interpretação difícil), o que faria de Gyeongju uma das maiores cidades da Ásia Oriental. Os grandes **túmulos** em montículo do centro guardaram as famosas coroas de ouro. No lago artificial de **Anapji** o rei dava banquetes; o **Cheomseongdae**, em pedra, é tradicionalmente visto como um observatório do século VII.',
  { img: 'cor-gyeongju-reconstrucao', leg: 'Reconstrução artística de Gyeongju, capital de Silla, no século VIII. (Imagem ilustrativa gerada por IA.)' },
  { img: 'cor-cheomseongdae', leg: 'Cheomseongdae, observatório de Gyeongju (século VII).' },
  { h: 'Seul (Hanyang): a capital do Joseon' },
  'A cidade escolhida em **1394** por Taejo e Jeong Do-jeon seguia a **geomancia** (pungsu): montanhas ao fundo e dos lados, o rio **Han** à frente. Foi rodeada por uma muralha de cerca de 18 km, com quatro portas grandes e quatro pequenas. No centro ficavam o palácio principal de **Gyeongbokgung**, e o santuário **Jongmyo**, onde se prestava culto aos antepassados reais. O **Changdeokgung** (1405) foi a residência mais usada. Os palácios foram queimados em 1592 e reconstruídos; o Gyeongbokgung só voltou a levantar-se em 1865 – 1868.',
  { img: 'cor-jongmyo', leg: 'Jongmyo, santuário real dos antepassados dos reis do Joseon, em Seul.' },
  { h: 'Hwaseong, a fortaleza de Suwon' },
  'O rei Jeongjo construiu em 1794 – 1796 uma fortaleza com perto de 5,7 km de muralhas, desenhada com o apoio do letrado **Jeong Yak-yong**, que inventou um guindaste de roldanas para reduzir o esforço. Os custos e os trabalhadores (pagos, e não por corveia) foram registados num relatório detalhado, o **Hwaseong Seongyeok Uigwe**, que permitiu reconstruir a fortaleza mais tarde. É Património Mundial desde 1997.',
  { img: 'cor-hwaseong', leg: 'Muralha e torre da fortaleza de Hwaseong, em Suwon (1794–1796).' },
  { h: 'Aldeias e casas' },
  'Fora das capitais, a vida fazia-se em **aldeias** de clã, como **Hahoe** e **Yangdong**, de famílias de letrados, e nas casas tradicionais (**hanok**) de telhado de telha curva, com **ondol**, o aquecimento pelo chão. Em Seul, o bairro de **Bukchon** conserva muitos hanok.',
  { img: 'cor-hanok-bukchon', leg: 'Casas tradicionais (hanok) no bairro de Bukchon, em Seul.' },
  { h: 'As estradas e as rotas' },
  'O Joseon organizou um sistema de **estações de posta** e de **estradas** (seis estradas principais, segundo a classificação mais usual, saíam de Seul), com cavalos e correios, e de **sinais de fogo e fumo** (**bongsu**) que, de montanha em montanha, levavam a Seul as notícias das fronteiras. No mar, as rotas de cabotagem ligavam os portos do sul à capital pelo rio Han, e foi pelo mar Amarelo que Baekje e Silla comerciaram com a China e o Japão. As embaixadas coreanas (**tongsinsa**) iam ao Japão, e as embaixadas anuais a Pequim, com letrados e mercadores, traziam livros, remédios e ideias.'
];

const sociedade = [
  { h: '1. Organização política' },
  'Os reinos antigos eram governados por reis apoiados por conselhos de nobres. Em **Silla**, o rei era escolhido entre as famílias de «osso sagrado» e de «osso verdadeiro» (**sistema golpum**), e as grandes decisões saíam do conselho dos nobres (**Hwabaek**). O **Goryeo** copiou do sistema chinês o **exame de funcionários** (**gwageo**, 958) e uma burocracia, mas manteve muito poder nas grandes famílias. O **Joseon** foi mais longe: um estado **neoconfuciano**, com o rei no centro e a corte organizada em três órgãos de fiscalização, seis ministérios, um conselho de estado e uma secretaria real.',
  { caixa: 'Os Anais da Dinastia Joseon', texto: 'Os historiadores oficiais (**sagwan**) anotavam em segredo tudo o que o rei dizia e fazia, e nem o rei podia ler o que escreviam. Daí resultaram os **Anais da Dinastia Joseon** (**Sillok**), 1893 volumes que cobrem 472 anos, de 1392 a 1863 (do primeiro rei, Taejo, a Cheoljong), Memória do Mundo da UNESCO desde 1997. É um dos registos históricos contínuos mais extensos do mundo.' },
  { h: '2. Classes sociais' },
  'A sociedade coreana era hierárquica e hereditária. No **Joseon** havia quatro grupos principais: os **yangban** (letrados e oficiais, a elite, que podiam fazer os exames), os **jungin** («gente do meio»: intérpretes, médicos, técnicos), os **sangmin** (gente comum: camponeses, artesãos, comerciantes) e os **cheonmin** («gente baixa»: escravos domésticos, **nobi**, açougueiros, artistas, **baekjeong**). Os escravos eram uma parte importante da população (por vezes estimada em um terço, número debatido), e o estatuto de escravo passava, em geral, pela mãe. Em **Silla**, o sistema do **osso** (**golpum**) fixava, à nascença, os cargos a que cada família podia aspirar.',
  { img: 'cor-exame-gwageo', leg: 'Cena de um exame de funcionários (gwageo) no Joseon, reconstrução artística. (Imagem ilustrativa gerada por IA.)' },
  { h: '3. Religião e crenças' },
  'As religiões coreanas coexistem, sem uma excluir as outras.',
  { tabela: { cab: ['Tradição', 'Quando', 'O que é'], linhas: [
    ['Xamanismo', 'Desde a pré-história', 'As **mudang** (xamãs, quase sempre mulheres) comunicam com espíritos e antepassados em rituais (**gut**); continuou entre o povo, mesmo quando as elites o condenavam'],
    ['Budismo', 'Séc. IV – XIV (e depois)', 'Religião de Estado em Silla e no Goryeo; escolas **Hwaeom**, **Seon** (Zen) e a **Terra Pura**; os monges **Wonhyo** e **Uisang**, e depois **Jinul**'],
    ['Confucianismo e neoconfucionismo', 'Séc. IV em diante; Estado a partir de 1392', 'Ética de relações (pais e filhos, rei e súbditos, marido e mulher); ritos aos antepassados; escolas privadas (**seowon**)'],
    ['Daoísmo e geomancia', 'Séc. VII em diante', 'O **pungsu** (geomancia) orienta a escolha de capitais, túmulos e casas, segundo a forma das montanhas e dos rios'],
    ['Catolicismo', 'Séc. XVIII em diante', 'Introduzido por letrados que leram livros jesuítas vindos da China; reprimido em 1801, 1839 e 1866'],
    ['Donghak', '1860 em diante', '«Aprendizagem do Oriente», movimento fundado por **Choe Je-u**, que reúne elementos confucionistas, budistas, daoístas e xamânicos, e está na origem da revolta de 1894']
  ] } },
  { h: 'O budismo coreano' },
  'O budismo chegou no século IV e foi crucial: deu legitimidade aos reis, trouxe a arte e a arquitetura em pedra, e tornou-se uma força política. Em Silla, o monge **Wonhyo** (617 – 686) ensinou que a iluminação é para todos; **Uisang** fundou a escola Hwaeom; **Hyecho** viajou até à Índia (723 – 727) e deixou um relato, descoberto em Dunhuang em 1908. No Goryeo, o monge **Jinul** (1158 – 1210) renovou e consolidou a tradição **Seon** que ainda hoje domina o budismo coreano. Com o Joseon, o budismo foi marginalizado, os templos recuaram para as montanhas, e muitos monges lutaram contra os japoneses em 1592.',
  { h: '4. Economia' },
  'A base foi sempre a **agricultura**: o arroz (a sul e a oeste), o milho-miúdo, a cevada e o feijão-soja (a norte); a partir do século XVI chegaram o **milho**, o **tabaco** e a **malagueta**, e mais tarde a **batata-doce** (século XVIII) e a **batata**. O Estado cobrava o imposto sobre a terra (**jeonse**) em grão e exigia trabalho. No Goryeo e no Joseon desenvolveram-se as **minas**, a seda, o algodão (introduzido por Mun Ik-jeom no século XIV, segundo a tradição), o ginseng e o papel (**hanji**). O comércio exterior com a China foi sempre importante. Os mercados rurais de cinco em cinco dias (**jangsi**) multiplicaram-se no século XVIII.',
  { img: 'cor-baekje-mar', leg: 'Barcos de comércio de Baekje no mar Amarelo (reconstrução artística). (Imagem ilustrativa gerada por IA.)' },
  { img: 'cor-aldeia-joseon', leg: 'Uma aldeia do Joseon: casas de colmo e campos de arroz (reconstrução artística). (Imagem ilustrativa gerada por IA.)' },
  { img: 'cor-mercado-joseon', leg: 'Mercado do Joseon, século XVIII (reconstrução artística). (Imagem ilustrativa gerada por IA.)' },
  { h: '5. Escrita e língua' },
  'Durante mais de mil anos, as elites coreanas escreveram em **chinês clássico** (**hanja** em coreano). Para escrever o coreano, inventaram sistemas como o **idu** e o **hyangchal** (caracteres chineses usados pelo som ou pelo sentido), que eram complicados e pouco precisos. Em **1443**, o rei **Sejong** e os seus eruditos criaram o **hangul**, inicialmente com **28 letras** (hoje 24). As consoantes imitam a forma da boca e da língua ao falar, e as vogais combinam três símbolos (o céu, a terra e o ser humano). As letras escrevem-se em blocos silábicos. O Hunminjeongeum Haerye (1446) explica a lógica do sistema. Foi criticado pelos letrados, que preferiam o chinês, e foi usado sobretudo por mulheres e pelo povo, até ao século XIX, quando se tornou símbolo nacional.',
  { h: '6. Casa e família' },
  'A casa tradicional (**hanok**) tinha estrutura de madeira, paredes de barro e telhado de telha ou de colmo. A grande invenção é o **ondol**: a cozinha aquece uma rede de canais sob o chão da divisão, que irradia calor — uma técnica antiga (documentada desde Goguryeo), ainda em uso. No Joseon, a casa de um yangban dividia-se em espaço masculino (**sarangchae**) e feminino (**anchae**). A família era **patrilinear**: o nome passava pelo pai, a mulher mantinha o seu nome de família depois do casamento, e o filho mais velho herdava o culto dos antepassados (**jesa**). A influência confuciana tornou-se mais forte no Joseon do século XVII, com direitos de herança menores para filhas e mulheres.',
  { img: 'cor-ondol-esquema', leg: 'Esquema do ondol: o fogo aquece o chão por canais subterrâneos. (Imagem ilustrativa gerada por IA.)' },
  { h: '7. Alimentação' },
  'A refeição base é o **arroz** com sopa e vários acompanhamentos (**banchan**). Os coreanos conservam os legumes em sal e fermentação: o **kimchi** já existia nos tempos antigos, como legumes em salmoura, mas a versão **vermelha**, com malagueta, só se difundiu mais tarde (a malagueta veio da América, provavelmente via Japão, depois de 1592; as receitas com malagueta aparecem no século XVIII). Os molhos fermentados de soja (**jang**: **ganjang**, **doenjang**) são fundamentais, e a **gochujang** (pasta de malagueta) aparece em fontes dos séculos XVII e XVIII. Come-se também peixe, carne grelhada (**bulgogi**, de origem antiga, nome moderno), e bebe-se chá e vinho de arroz (**makgeolli**).',
  { h: '8. Vestuário' },
  'A roupa tradicional, o **hanbok**, tem uma jaqueta curta (**jeogori**) com calças (**baji**) para os homens, e uma saia ampla (**chima**) para as mulheres. Os murais de Goguryeo mostram casacos e calças já muito semelhantes. No Joseon, os letrados usavam um chapéu de crina preta, o **gat**, e um casaco comprido (**durumagi**); as cores eram reguladas por lei: o povo vestia branco e cores simples. A seda, o linho e o algodão eram os tecidos principais.',
  { h: '9. Música, dança e jogos' },
  'A música coreana inclui a música de corte (**aak**, de origem chinesa; **jeryeak**, música dos ritos do Jongmyo, ainda hoje tocada), a música popular e o **pansori** (narrativa cantada por um só intérprete, séculos XVII – XVIII). Dos instrumentos, o **gayageum** (cítara de doze cordas, da Gaya do século VI) e o **geomungo** (cítara de seis cordas, atribuída a Goguryeo) são os mais conhecidos. Entre os jogos, o **baduk** (Go) chegou cedo da China, o **janggi** (xadrez) e o **yut**, jogo de paus, são populares; o **ssireum** (luta) e o **neolttwigi** (balanço de tábua) eram divertimentos de festa. Os músicos de Joseon deixaram uma notação própria, a **Jeongganbo**, inventada por Sejong.',
  { img: 'cor-pintura-kim-hongdo', leg: 'Cena de quotidiano (ssireum) por Kim Hong-do, séculos XVIII–XIX.' },
  { h: '10. Ciência e tecnologia' },
  'O reinado de Sejong foi uma explosão de invenções. **Jang Yeong-sil**, de origem plebeia, que Sejong promoveu a funcionário, construiu, com outros técnicos, o relógio de água automático **Jagyeongnu** (1434), o **pluviómetro** (**cheugugi**, 1441, um dos primeiros do mundo com medições regulares), relógios de sol e esferas armilares. Em 1395 gravou-se o mapa estelar **Cheonsang Yeolcha Bunyajido**, e em **1402** produziu-se o mapa-múndi **Kangnido**. O **Chiljeongsan** (1442) reconciliou o calendário com a posição real do Sol e da Lua em Seul. O **Dongui Bogam** (1613), de **Heo Jun**, é um grande tratado de medicina, na Memória do Mundo desde 2009. A **pólvora** foi desenvolvida por **Choe Mu-seon** (1377), e o canhão e o carro de foguetes (**hwacha**) foram usados em guerra.',
  { img: 'cor-chugugi', leg: 'Réplicas de pluviómetros (cheugugi) do Joseon, no Jardim da Ciência Jang Yeong-sil, em Busan; o original é do século XV.' },
  { h: '11. Arquitetura e construção' },
  'A arquitetura coreana é de **madeira**, sem pregos, com consolas elaboradas sob os beirais e telhados de curvatura suave. Os templos foram colocados em montanhas, em harmonia com a paisagem. O que sobreviveu de mais antigo são sobretudo as obras em **pedra**: pagodes de granito (Silla), grutas (Seokguram) e fortalezas. O **Cheomseongdae**, **Bulguksa** e as muralhas de **Hwaseong** são exemplos de três épocas.',
  { img: 'cor-silla-coroa', leg: 'Coroa de ouro de Silla com pingentes de jade e folhas, século V–VI, Museu Nacional da Coreia.' },
  { h: '12. Cerâmica e metais' },
  'A Coreia é célebre pela cerâmica. No **Goryeo**, os oleiros fizeram os **celadon** (**cheongja**), de esmalte verde-jade, cuja cor o enviado chinês **Xu Jing** (1123) elogiou; por volta do século XII inventaram a técnica **sanggam**, em que se incrustam padrões em barro de outra cor. No **Joseon**, o gosto passou para a **buncheong** (cerâmica cinzenta, rústica) e para a **porcelana branca**, símbolo da pureza confuciana, e a azul e branca. Em ouro, Silla produziu coroas, brincos e cintos extraordinários.',
  { img: 'cor-celadon-goryeo', leg: 'Garrafa de celadon com incrustações (sanggam), Goryeo, século XII.' },
  { h: '13. Impressão' },
  'O papel chegou cedo à Coreia, e o **hanji**, feito de casca de amoreira, era famoso. A xilogravura é muito antiga (a *Dharani Sutra*, antes de 751). No Goryeo, a falta de livros e as guerras levaram a usar **tipos móveis** fundidos em metal: segundo uma nota de **Yi Gyu-bo** (1241), o *Sangjeong Gogeum Yemun* foi impresso assim em c. 1234, mas o livro perdeu-se. O **Jikji** (1377) é o mais antigo conservado. No Joseon, o rei Taejong criou uma oficina real (1403), e os tipos foram aperfeiçoados várias vezes. O processo coreano ficou sobretudo nas mãos do Estado e dos templos, e não teve o impacto social que a imprensa teve na Europa.',
  { img: 'cor-goryeo-tipografia', leg: 'Oficina de tipos móveis de metal no Goryeo (reconstrução artística). (Imagem ilustrativa gerada por IA.)' },
  { h: '14. Guerra' },
  'Goguryeo era uma potência militar: cavaleiros com armadura, arqueiros e uma rede de **fortalezas** de montanha (**sanseong**) que travou os exércitos chineses. Silla criou a elite jovem dos **hwarang** («jovens flores»), que unia treino militar, estudos e ética, e cujo código (**Cinco Preceitos**) é atribuído ao monge Wongwang. O Goryeo usou muralhas e, contra os mongóis, retirou para fortalezas e ilhas. No Joseon, a grande novidade foi a **marinha**: o **panokseon**, navio de guerra com plataforma de combate, e o **geobukseon**, o **navio-tartaruga**, de convés coberto, que Yi Sun-sin usou em 1592. Os arqueiros eram o núcleo do exército; as armas de fogo (arcabuzes, canhões) tornaram-se essenciais no século XVII.',
  { img: 'cor-guerreiros-goguryeo', leg: 'Cavaleiros de Goguryeo com armadura, séculos IV–V (reconstrução artística). (Imagem ilustrativa gerada por IA.)' },
  { img: 'cor-hwarang', leg: 'Jovens hwarang de Silla em treino (reconstrução artística). (Imagem ilustrativa gerada por IA.)' },
  { img: 'cor-geobukseon', leg: 'Reconstituição imaginada de um navio-tartaruga (geobukseon) de Yi Sun-sin, séc. XVI (imagem ilustrativa gerada por IA).' }
];

const personalidades = [
  'A história coreana conheceu reis, monges, generais e letrados. As figuras seguintes são reais; o que é lenda ou duvidoso está assinalado.',
  { h: 'Dangun (lenda)' },
  'O fundador mítico de Gojoseon, filho de Hwanung e de Ungnyeo. Não é um personagem histórico verificável, mas é a figura mais simbólica da identidade coreana, e a sua lenda foi recolhida pelo monge Iryeon no século XIII.',
  { h: 'Gwanggaeto, o Grande (374 – 413)' },
  'Rei de **Goguryeo** a partir de 391. Aos 18 anos subiu ao trono e, em pouco mais de vinte anos, conquistou territórios na Manchúria e na península. A sua estela, em Ji’an, com mais de 6 metros, descreve as campanhas. É o rei mais celebrado do período dos Três Reinos.',
  { h: 'Eulji Mundeok (séc. VII)' },
  'General de Goguryeo que, segundo a crónica, derrotou os Sui em Salsu (612) fingindo recuar para atrair o inimigo. Há poucas fontes diretas, e o relato tem elementos de lenda, mas a vitória foi real.',
  { h: 'Rainha Seondeok (r. 632 – 647)' },
  'Primeira mulher a reinar em Silla. Segundo a tradição, mandou construir o Cheomseongdae e o templo Hwangnyongsa, e enfrentou a pressão de Baekje e de Goguryeo ao procurar o apoio dos Tang.',
  { h: 'Kim Yushin (595 – 673)' },
  'General de Silla, de linhagem de Gaya, comandou os exércitos que derrotaram Baekje (660) e Goguryeo (668). É um herói nacional, mas a sua biografia no Samguk Sagi tem muitos traços épicos.',
  { h: 'Wonhyo (617 – 686)' },
  'Monge de Silla, filósofo e escritor prolífico, procurou unir as escolas do budismo e levou a doutrina ao povo. A tradição conta que, a caminho da China, bebeu água de uma poça numa gruta e compreendeu que «tudo é obra do espírito»; é uma lenda tardia.',
  { h: 'Jang Bogo (c. 790 – 846)' },
  'Comandante naval e comerciante de origem humilde, controlou o comércio no mar Amarelo a partir de Cheonghaejin e é recordado como o «rei dos mares». Foi assassinado depois de se envolver em disputas pela sucessão ao trono.',
  { h: 'Wang Geon (877 – 943)' },
  'Fundador do **Goryeo** (918). Conseguiu unificar a península depois do colapso de Silla através de alianças e de uma política de conciliação, e deixou instruções (as «Dez Injunções») aos seus sucessores.',
  { h: 'Jinul (1158 – 1210)' },
  'Monge **Seon** (Zen) que reformou o budismo coreano, pregou a união entre meditação e estudo dos textos e fundou a comunidade de Songgwangsa. Ainda é uma referência do budismo coreano.',
  { h: 'Choe Mu-seon (c. 1325 – 1395)' },
  'Cientista e oficial do Goryeo, aprendeu o processo de fazer **pólvora** com mercadores chineses e fundou o Gabinete de Artilharia (1377). Os seus canhões foram usados contra piratas **wokou**. (A data e as circunstâncias da aprendizagem vêm de relatos tardios.)',
  { h: 'Jeong Do-jeon (c. 1342 – 1398)' },
  'Letrado neoconfuciano e conselheiro de Yi Seong-gye, desenhou as instituições do Joseon, a capital e o código de leis. Foi morto na luta dinástica de 1398 pelo príncipe Yi Bangwon, depois Taejong.',
  { img: 'cor-hunmin-escrita', leg: 'Reconstrução artística: o rei Sejong com os eruditos do Jiphyeonjeon, a criar o hangul. (Imagem ilustrativa gerada por IA.)' },
  { h: 'Sejong, o Grande (1397 – 1450)' },
  'Quarto rei do Joseon (r. 1418 – 1450), é a figura mais admirada da história coreana. Apoiou a ciência, a música e a agricultura, e protegeu o **Jiphyeonjeon**, grupo de eruditos. O seu maior feito foi o hangul. Sofria de problemas de visão, e há debate sobre o quanto trabalhou sozinho no alfabeto ou com a ajuda dos eruditos (a tradição e o prefácio atribuem-lhe a criação).',
  { img: 'cor-sejong-estatua', leg: 'Estátua do rei Sejong, em Gwanghwamun, Seul.' },
  { h: 'Jang Yeong-sil (séc. XV)' },
  'Inventor de origem humilde, nascido numa família de escravos ou de artesãos (as fontes divergem), que Sejong promoveu a funcionário. Construiu relógios e instrumentos astronómicos. Foi punido em 1442 por uma carruagem real que se partiu, e desaparece dos registos: o fim da sua vida é desconhecido.',
  { h: 'Yi Sun-sin (1545 – 1598)' },
  'O maior herói naval da Coreia. Nas guerras Imjin, comandou a frota de Jeolla e, com o geobukseon e táticas engenhosas, venceu cerca de vinte e três combates sem perder um só navio, segundo a tradição (o número é debatido). Preso e torturado em 1597 depois de uma intriga, foi restituído ao comando e, com 13 navios (a tradição diz 12 e mais um), venceu em **Myeongnyang** a 26 de outubro de 1597 uma frota japonesa muito superior (as fontes dão números entre 130 e mais de 300 navios). Morreu em **Noryang**, em 1598, atingido por uma bala. Deixou um diário de guerra, o **Nanjung Ilgi**.',
  { img: 'cor-yi-sun-sin-estatua', leg: 'Estátua do almirante Yi Sun-sin, em Gwanghwamun, Seul.' },
  { h: 'Heo Jun (1539 – 1615)' },
  'Médico real que escreveu o **Dongui Bogam** («Tesouro da Medicina Oriental», 1613), com 25 volumes, com ênfase em prevenção e em plantas medicinais coreanas.',
  { h: 'Jeong Yak-yong (Dasan, 1762 – 1836)' },
  'Letrado do movimento **Silhak** e engenheiro de Hwaseong. Escreveu mais de quinhentos volumes sobre administração, direito, agricultura e medicina. Exilado durante dezoito anos, por causa das suas ligações ao catolicismo.',
  { h: 'Kim Hong-do (1745 – c. 1806)' },
  'Pintor da corte e retratista que ficou célebre pelas cenas de gente comum (lutadores, ferreiros, aldeões), de traço vivo e humor. Pintou também paisagens e retratos reais.',
  { h: 'A rainha Min (1851 – 1895)' },
  'Esposa do rei Gojong, procurou equilibrar a influência das grandes potências. Foi assassinada por agentes japoneses a 8 de outubro de 1895, no palácio de Gyeongbokgung.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**O hangul:** usado hoje por mais de 80 milhões de pessoas; o dia do hangul celebra-se a 9 de outubro na Coreia do Sul.',
    '**A impressão com tipos móveis:** o Jikji, na Biblioteca Nacional de França, e o conhecimento da técnica de fundição em bronze.',
    '**A Tripitaka Koreana:** o cânone budista mais completo e antigo em placas de madeira, Memória do Mundo da UNESCO (2007).',
    '**Os túmulos e os murais:** os murais de Goguryeo (Património Mundial desde 2004) e o túmulo do rei Muryeong são das fontes mais ricas sobre a vida antiga.',
    '**A cerâmica:** os celadon e as porcelanas brancas influenciaram a Ásia Oriental, e a deportação de oleiros coreanos para o Japão em 1592 – 1598 lançou a porcelana japonesa de Arita (a «guerra da cerâmica»).',
    '**O quotidiano:** o ondol, o kimchi, o hanbok e o culto dos antepassados continuam vivos.',
    '**A língua:** o coreano é falado por cerca de oitenta milhões de pessoas.'
  ] },
  { h: 'Arte' },
  'A arte coreana distingue-se por uma estética de naturalidade e de contenção: a **pintura de paisagem** do Joseon (Jeong Seon, 1676 – 1759, com os «verdadeiros panoramas» da Coreia), os **retratos**, as pinturas de gente comum de Kim Hong-do e Shin Yun-bok, e a **caligrafia**. A escultura budista de Silla, com o Buda de Seokguram, é das maiores da Ásia.',
  { img: 'cor-seokguram', leg: 'Interior do templo budista junto à gruta de Seokguram, Gyeongju (UNESCO); a gruta guarda um Buda de granito de c. 774.' },
  { h: 'Arquitetura' },
  'Os palácios do Joseon, os templos de montanha e as fortalezas são o melhor testemunho. Muita coisa foi destruída nas guerras: o Hwangnyongsa ardeu em 1238, nas invasões mongóis, e a parte de madeira do Bulguksa foi queimada na guerra de 1592 – 1598, tendo sido reconstruída mais tarde. O mais notável é a **atenção à paisagem**: a casa e o palácio encaixam nas montanhas.',
  { h: 'Os desafios da memória: o que sabemos e o que é debatido' },
  { lista: [
    '**Dangun e as datas fundadoras:** 2333 a.C., 57, 37 e 18 a.C. são datas das crónicas, não da arqueologia.',
    '**O território de Goguryeo e Balhae:** quem é «herdeiro» destes reinos é discutido entre a Coreia e a China, e tem implicações políticas. Os historiadores académicos tratam-nos como parte da história coreana e da história da Manchúria.',
    '**Mimana e Gaya:** a tese japonesa de que o Japão controlou Gaya (Mimana) é rejeitada pela maioria dos historiadores coreanos, e debatida.',
    '**O papel de Sejong no hangul:** foi obra coletiva ou de Sejong? A tradição diz que Sejong foi o autor principal.',
    '**O Jikji e Gutenberg:** são tecnologias independentes; não há prova de que uma tenha influenciado a outra.'
  ] },
  { h: 'A descoberta moderna' },
  'Muito do que sabemos vem de descobertas recentes: o **túmulo do rei Muryeong** (Baekje) foi achado em 1971, intacto, com mais de 2900 objetos; a **Dharani Sutra** foi descoberta em 1966; o **incensário de Baekje** foi encontrado em 1993, num tanque de madeira com água, junto à oficina do sítio do antigo templo de Neungsan-ri. O **Jikji** foi levado para França pelo diplomata **Victor Collin de Plancy** (comprado em Seul, no final do século XIX), e identificado pela bibliotecária **Park Byeong-seon** (1972), numa exposição em Paris.',
  { h: 'Onde visitar' },
  { lista: [
    '**Seul:** palácios de Gyeongbokgung e Changdeokgung, Jongmyo, Museu Nacional da Coreia, bairro de Bukchon.',
    '**Gyeongju:** Bulguksa, Seokguram, Cheomseongdae, Anapji e os túmulos (UNESCO, 2000).',
    '**Gongju e Buyeo:** túmulos e relíquias de Baekje (UNESCO, 2015).',
    '**Haeinsa:** a Tripitaka Koreana (UNESCO, 1995).',
    '**Suwon:** a fortaleza de Hwaseong (UNESCO, 1997).',
    '**Hahoe e Yangdong:** aldeias históricas (UNESCO, 2010).',
    '**Ilha de Ganghwa:** os dólmenes (UNESCO, 2000) e os fortes.',
    '**Fora da Coreia:** a estela de Gwanggaeto e os túmulos de Goguryeo, em Ji’an (China); o Jikji, na Biblioteca Nacional de França, em Paris, que o expõe só raramente.'
  ] }
];

const quiz = [
  { p: 'Segundo a lenda, quem fundou Gojoseon em 2333 a.C.?', op: ['Jumong', 'Dangun', 'Wang Geon', 'Yi Seong-gye'], certa: 1, exp: 'Dangun, filho de Hwanung e da ursa que virou mulher; é uma lenda recolhida no Samguk Yusa (c. 1280).' },
  { p: 'Quais eram os Três Reinos da Coreia?', op: ['Goguryeo, Baekje e Silla', 'Goryeo, Joseon e Silla', 'Gaya, Balhae e Joseon', 'Goguryeo, Goryeo e Joseon'], certa: 0, exp: 'Goguryeo (norte), Baekje (sudoeste) e Silla (sudeste), mais a confederação de Gaya.' },
  { p: 'Que rei de Goguryeo duplicou o território e tem uma grande estela em Ji’an?', op: ['Gwanggaeto', 'Sejong', 'Munmu', 'Gojong'], certa: 0, exp: 'Gwanggaeto, o Grande (r. 391 – 413); a estela foi erguida em 414.' },
  { p: 'Quem derrotou o exército Sui em Salsu, em 612?', op: ['Yi Sun-sin', 'Eulji Mundeok', 'Kim Yushin', 'Jang Bogo'], certa: 1, exp: 'O general de Goguryeo Eulji Mundeok, segundo a crónica.' },
  { p: 'Em que ano Silla unificou a maior parte da península depois de expulsar os Tang?', op: ['476', '660', '676', '918'], certa: 2, exp: 'Em 676; Baekje caíra em 660 e Goguryeo em 668.' },
  { p: 'Que monumento de Gyeongju é um dos mais antigos observatórios astronómicos conservados da Ásia Oriental?', op: ['Cheomseongdae', 'Hwaseong', 'Haeinsa', 'Anapji'], certa: 0, exp: 'O Cheomseongdae, atribuído ao reinado da rainha Seondeok (século VII).' },
  { p: 'O que é a Tripitaka Koreana?', op: ['Um mapa-múndi', 'Um cânone budista gravado em 81 258 placas de madeira', 'Um tratado de medicina', 'Uma crónica real'], certa: 1, exp: 'Gravada entre 1236 e 1251, guarda-se em Haeinsa.' },
  { p: 'Qual é o mais antigo livro conservado impresso com tipos móveis de metal?', op: ['A Bíblia de Gutenberg', 'O Jikji (1377)', 'O Hunminjeongeum', 'O Samguk Sagi'], certa: 1, exp: 'O Jikji foi impresso em Cheongju em 1377, quase oitenta anos antes da Bíblia de Gutenberg.' },
  { p: 'De onde vem o nome «Coreia»?', op: ['De Silla', 'De Goryeo', 'De Joseon', 'De Balhae'], certa: 1, exp: 'Goryeo (Koryo), nome que chegou ao Ocidente através de comerciantes persas e árabes e de viajantes europeus (Marco Polo escreveu «Cauli»).' },
  { p: 'Em que ano foi fundada a dinastia Joseon?', op: ['1259', '1392', '1443', '1592'], certa: 1, exp: 'Yi Seong-gye tornou-se rei em 1392, e a capital passou para Hanyang (Seul) em 1394.' },
  { p: 'Que rei promulgou o alfabeto hangul em 1446?', op: ['Taejo', 'Jeongjo', 'Sejong', 'Gojong'], certa: 2, exp: 'O rei Sejong e os eruditos do Jiphyeonjeon criaram o hangul em 1443 e o promulgaram em 1446.' },
  { p: 'O que era o geobukseon?', op: ['Um navio-tartaruga de convés coberto', 'Uma escrita', 'Uma fortaleza', 'Um tipo de cerâmica'], certa: 0, exp: 'O «navio-tartaruga» usado por Yi Sun-sin na guerra Imjin (1592 – 1598).' },
  { p: 'Em que batalha, em 1597, Yi Sun-sin venceu uma frota japonesa muito superior com 13 navios?', op: ['Hansando', 'Noryang', 'Myeongnyang', 'Salsu'], certa: 2, exp: 'Em Myeongnyang, a 26 de outubro de 1597 (os números dos navios japoneses são debatidos).' },
  { p: 'Qual era a classe de letrados e oficiais da sociedade Joseon?', op: ['Yangban', 'Hwarang', 'Nobi', 'Sangmin'], certa: 0, exp: 'Os yangban eram a elite que podia fazer os exames do gwageo.' },
  { p: 'O que aconteceu a 12 de outubro de 1897?', op: ['Foi proclamado o Império Coreano', 'Foi inventado o hangul', 'Yi Sun-sin morreu', 'Silla caiu'], certa: 0, exp: 'Gojong proclamou o Império Coreano (Daehan Jeguk) e assumiu o título de imperador.' }
];

export default {
  id: 'coreia',
  cor: '#4a7aa0',
  emblema: '../assets/img/coreia.png',
  nome:    { pt: 'Coreia', en: 'Korea' },
  periodo: { pt: 'até 1897', en: 'to AD 1897' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
