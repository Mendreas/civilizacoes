// JAPÃO (até 1573) — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas aproximadas; os séculos mais antigos são os mais incertos. a.C. = antes de Cristo. O período Tokugawa e a era Meiji ficam para depois (ver nota no fim da linha do tempo).
// Imagens: cada {img:'id'} procura o ficheiro  japao/img/id.jpg  (ver IMAGENS_JAPAO.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'O **Japão** é um arquipélago de montanhas e mar no extremo leste da Ásia. Até 1573, a sua história passa por caçadores-recoletores que fizeram a cerâmica mais antiga conhecida (**Jōmon**), por agricultores de arroz e de metais (**Yayoi**), por reis enterrados em túmulos gigantes (**Kofun**), pela corte imperial de **Nara** e de **Quioto** (Heian), pelo mundo dos **samurais** e dos xóguns de Kamakura e dos Ashikaga, e por um século de guerras civis (**Sengoku**) que acabou com a unificação começada por Oda Nobunaga.',
    'Nesse caminho o Japão adotou da China a escrita, o budismo e o modelo de Estado, mas transformou tudo à sua maneira: inventou os **silabários kana**, escreveu o que muitos consideram o primeiro grande romance do mundo (o **Genji Monogatari**, de uma mulher, Murasaki Shikibu), criou uma classe guerreira que governou durante cerca de setecentos anos e uma estética (chá, jardins de pedra, teatro nō) que ainda hoje define a imagem do país. Em **1543** chegaram os primeiros portugueses, e é aí que esta página termina.'
  ] },
  { img: 'jap-mapa-regiao', leg: 'Mapa do arquipélago japonês e vizinhança' },
  { h: 'Onde ficava' },
  'O Japão é formado por mais de seis mil ilhas, mas o essencial da história até 1573 passa por quatro: **Honshū** (a maior, com Nara, Quioto, Kamakura), **Kyūshū** (a porta para a Coreia e a China), **Shikoku** e, ao norte, **Hokkaidō**, que era terra dos **Ainu** e só foi integrada muito mais tarde. O interior é montanhoso (cerca de três quartos do território), com poucas planícies, onde se concentrou o arroz e a população. O mar, com 200 km até à Coreia no ponto mais curto, isolou o país o suficiente para o deixar desenvolver-se à sua maneira, e abriu-o o suficiente para receber ideias, técnicas e pessoas do continente.',
  'O nome «Japão» não é japonês. Os japoneses chamam ao seu país **Nihon** ou **Nippon** («origem do Sol»), nome que aparece no século VII; antes disso os chineses falavam de **Wa**. A palavra «Japão» vem do chinês antigo, que Marco Polo deu como «Cipango», e chegou ao português através do malaio (*Jepang*). Os portugueses foram dos primeiros europeus a usá-la na forma que conhecemos.',
  { img: 'jap-monte-fuji', leg: 'Monte Fuji visto do lago Kawaguchi' },
  { h: 'Quando existiu' },
  'A história do Japão divide-se em «períodos» com nomes próprios, em geral dados pelos lugares do poder. Esta tabela segue as datas mais usadas pelos historiadores; as mais antigas são aproximadas.',
  { tabela: { cab: ['Período', 'Datas aproximadas', 'O que o marca'], linhas: [
    ['Jōmon', 'c. 14000 – 300 a.C.', 'Caçadores-recoletores semissedentários; cerâmica decorada com cordas; figuras de barro (dogū)'],
    ['Yayoi', 'c. 900 (ou 800) a.C. – c. 250 d.C.', 'Arroz irrigado, bronze e ferro vindos do continente; aldeias fortificadas; reinos de Wa'],
    ['Kofun', 'c. 250 – 538', 'Grandes túmulos em forma de buraco de fechadura; formação do Estado de Yamato'],
    ['Asuka', '538 – 710', 'Chegada do budismo, príncipe Shōtoku, reformas Taika, primeiras leis ao modelo chinês'],
    ['Nara', '710 – 794', 'Primeira capital permanente; Tōdai-ji e o Grande Buda; Kojiki, Nihon Shoki e Man’yōshū'],
    ['Heian', '794 – 1185', 'Capital em Heian-kyō (Quioto); regentes Fujiwara; kana, Genji Monogatari; nascimento dos samurais'],
    ['Kamakura', '1185 – 1333', 'Primeiro xogunato; invasões mongóis (1274, 1281); budismo zen e da Terra Pura'],
    ['Muromachi', '1336 – 1573', 'Xoguns Ashikaga; Kinkaku-ji, nō, chá; guerra de Ōnin (1467–1477) e era Sengoku; primeiros portugueses (1543)']
  ] } },
  { h: 'Quem eram os japoneses?' },
  'A população japonesa tem pelo menos duas grandes raízes. Os **Jōmon** viviam no arquipélago há milhares de anos; entre c. 900 e 300 a.C. chegaram da península coreana e do continente grupos de **agricultores Yayoi**, e os dois povos misturaram-se. Hoje os estudos genéticos mostram essa mistura, em proporções que variam de região para região, e a língua japonesa não tem parentesco comprovado com nenhuma outra (a hipótese coreana e a altaica são debatidas, a relação com o ryukyuano é certa). No norte, os **Ainu** formaram um povo à parte, com língua e cultura próprias.',
  { h: 'Porque importam' },
  { lista: [
    '**Cerâmica e sedentarismo sem agricultura:** a cerâmica Jōmon está entre as mais antigas do mundo e mostra uma sociedade complexa de caçadores-recoletores.',
    '**A monarquia mais longa:** a família imperial japonesa é a linhagem real contínua mais antiga do mundo, embora o seu poder real tenha sido muitas vezes simbólico.',
    '**Literatura:** o Genji Monogatari (c. 1010), de Murasaki Shikibu, e o Livro de Cabeceira de Sei Shōnagon são dos textos mais admirados da literatura mundial, escritos por mulheres numa língua própria, o japonês, e não em chinês.',
    '**Samurais e xogunato:** durante quase setecentos anos (1185–1868) o poder efetivo esteve com guerreiros, não com o imperador, um caso raro na história do mundo.',
    '**Estética e religião:** o xintoísmo, o budismo zen, o chá, os jardins e o teatro nō criaram uma sensibilidade (a beleza do simples e do passageiro) que se tornou marca do país.'
  ] },
  { caixa: 'O Japão hoje', texto: 'Muitos dos lugares desta história são Património Mundial da UNESCO: os **sítios Jōmon** do norte de Honshū e Hokkaidō (2021), os túmulos de **Mozu-Furuichi** (2019), o **Hōryū-ji** (1993), os monumentos da antiga **Nara** (1998) e da antiga **Quioto** (1994). Há museus nacionais em Tóquio, Quioto, Nara e Quiuxu, e a maior parte do que se descreve aqui pode ser visitada.' },
  { img: 'jap-genji-emaki', leg: 'Fragmento do capítulo Yadorigi do Genji Monogatari Emaki, século XII, Museu Tokugawa.' }
];

const linha = [
  'Esta linha do tempo segue os acontecimentos principais da história do Japão até 1573. As datas são aproximadas no início; as das crónicas japonesas (Kojiki, Nihon Shoki) para os tempos mais antigos são tradição, não história comprovada.',
  { linha: [
    { d: 'c. 14000 a.C. ou antes', t: 'A cerâmica mais antiga', x: 'No arquipélago aparecem recipientes de barro cozido, entre os mais antigos do mundo (a China e o Extremo Oriente russo têm datas comparáveis). São o início do período **Jōmon**, «marca de corda», nome do padrão que a cerâmica mais tarde recebeu. Os Jōmon caçavam, pescavam e recolhiam nozes e castanhas.' },
    { d: 'c. 3500 – 2000 a.C.', t: 'Sannai-Maruyama e as cerâmicas «de chama»', x: 'Em **Sannai-Maruyama** (Aomori) uma aldeia grande foi habitada durante mais de 1500 anos. No centro do Japão fazem-se vasos de bordos exuberantes, os «de chama», e figuras de barro, os **dogū**. Não sabemos exatamente para que serviam.' },
    { d: 'c. 900 – 800 a.C.', t: 'Chega o arroz de regadio', x: 'Do norte de Kyūshū espalha-se a **cultura Yayoi**: arrozais com água, bronze e ferro, teares, aldeias com valas e paliçadas. As datas são debatidas (os testes de radiocarbono recuaram o início em cerca de 500 anos, face à ideia antiga de c. 300 a.C.).' },
  ] },
  { img: 'jap-jomon-aldeia', leg: 'Aldeia Jōmon no norte de Honshu, c. 3000 a.C. Ilustração gerada por IA.' },
  { img: 'jap-jomon-vaso-chama', leg: 'Vaso Jōmon de estilo chama, Museu Nacional de Tóquio' },
  { img: 'jap-jomon-dogu', leg: 'Figura de barro dogū Jōmon' },
  { img: 'jap-yayoi-arrozal', leg: 'Aldeia Yayoi e arrozais no norte de Kyushu, c. 200 a.C. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 100 a.C. – 250 d.C.', t: 'Os «reinos de Wa»', x: 'Crónicas chinesas descrevem o Japão como terra de dezenas de pequenos reinos de **Wa**. Em 57 d.C., segundo o *Livro de Han Posterior*, o «rei de Na» recebeu um selo de ouro do imperador chinês: um selo desses foi achado em 1784, na ilha de Shikanoshima. **Yoshinogari** (Saga) é o sítio Yayoi mais completo, com muralha, valas e torres de vigia.' },
  ] },
  { img: 'jap-yoshinogari', leg: 'Aldeia Yayoi reconstruída de Yoshinogari' },
  { img: 'jap-dotaku', leg: 'Sino de bronze dōtaku Yayoi' },
  { linha: [
    { d: 'c. 239 d.C.', t: 'A rainha Himiko e Yamatai', x: 'O *Wei Zhi* (crónica chinesa do fim do século III) diz que um reino chamado **Yamatai** era governado pela rainha-xamã **Himiko**, que em 238/239 enviou embaixadores ao reino de Wei e recebeu o título de «rainha de Wa, amiga de Wei». Onde ficava Yamatai (Kyūshū ou região de Nara) é um dos debates mais antigos da história do Japão.' },
    { d: 'c. 250 – 538', t: 'Os grandes túmulos', x: 'No centro do Japão (Yamato) erguem-se túmulos monumentais em forma de **buraco de fechadura** (*zenpō-kōen-fun*). Estão rodeados de fossos e de **haniwa**, cilindros e figuras de barro. Marcam o poder de uma casta de reis e de chefes aliados: é o período **Kofun**, «túmulo antigo».' },
  ] },
  { img: 'jap-kofun-construcao', leg: 'Construção conjetural de um túmulo kofun no século V. Ilustração gerada por IA.' },
  { img: 'jap-daisen-kofun', leg: 'Vista aérea do Daisen Kofun, Sakai' },
  { img: 'jap-haniwa', leg: 'Haniwa de guerreiro, séculos V–VI' },
  { linha: [
    { d: 'c. 400 – 500', t: 'Escrita, ferro e imigrantes', x: 'Chegam da Coreia (Baekje, Silla, Gaya) artesãos, escribas e técnicas: ferraria, cavalos, cerâmica de torno (Sue), tecelagem, escrita chinesa. A tradição fala de um sábio, **Wani**, que teria trazido os *Analectos* de Confúcio; é lenda, mas o contacto é real. Num sabre de ferro de Inariyama (Saitama), datado de 471 ou 531, está o nome do rei **Wakatakeru**, provavelmente Yūryaku, o «Bu» das crónicas chinesas.' },
    { d: '538 / 552', t: 'O budismo entra', x: 'O rei de Baekje, na Coreia, envia ao Japão uma estátua de Buda e escrituras. A data é debatida (538 ou 552). A corte divide-se: os **Soga** querem aceitar o novo culto, os **Mononobe** e os **Nakatomi**, defensores dos deuses locais (kami), recusam. Os Soga vencem em 587.' },
    { d: '593 – 622', t: 'Suiko e o príncipe Shōtoku', x: 'A imperatriz **Suiko** reina com o seu sobrinho, o príncipe **Shōtoku** (574–622), como regente. Em 603 criam doze graus de corte, em 604 uma «constituição de dezassete artigos» (mais um código moral do que uma constituição) e em 607 enviam uma embaixada à China dos Sui. Funda-se o **Hōryū-ji**, em Nara.' },
    { d: '645', t: 'Reformas Taika', x: 'O príncipe Naka no Ōe e **Nakatomi no Kamatari** matam **Soga no Iruka** diante da imperatriz e derrubam a família Soga. Segue-se um programa de reformas ao modelo chinês: terras do Estado, recenseamento, impostos, províncias. Chamam-lhe «reformas Taika» (645–649); os historiadores discutem o que foi mesmo feito e o que foi escrito mais tarde.' },
    { d: '663 – 672', t: 'Derrota na Coreia e guerra civil', x: 'Em 663, na batalha de Baekgang (Hakusukinoe), o Japão e o seu aliado Baekje são vencidos por Silla e pela China Tang. Para se defender, constroem-se fortalezas em Kyūshū. Em 672 a guerra **Jinshin** opõe dois membros da família imperial; vence o imperador **Tenmu**, que reforça o poder do soberano.' },
    { d: '701 – 710', t: 'Código Taihō e a primeira capital permanente', x: 'O **Código Taihō** (701) fixa em lei o sistema chinês de ministérios e províncias. Em 710 a corte muda-se para **Heijō-kyō** (Nara), desenhada em quadrícula, como a capital Tang, Chang’an.' },
    { d: '712 e 720', t: 'Kojiki e Nihon Shoki', x: 'Escrevem-se as duas crónicas mais antigas do Japão. O **Kojiki** (712) e o **Nihon Shoki** (720) juntam mitos dos deuses e a história dos imperadores, e servem para dar legitimidade à linhagem imperial. Tratam as origens como história, mas os primeiros «imperadores» são lendários.' },
    { d: '735 – 752', t: 'A epidemia e o Grande Buda', x: 'Uma epidemia de varíola (735–737) mata talvez um quarto a um terço da população. O imperador **Shōmu** manda erguer em Nara o **Tōdai-ji** e uma enorme estátua de bronze do Buda Vairocana, inaugurada em 752, com monges de toda a Ásia.' },
  ] },
  { img: 'jap-todaiji', leg: 'Daibutsu-den do Tōdai-ji, Nara' },
  { img: 'jap-hyakumanto', leg: 'Oração impressa Hyakumantō Darani, c. 770, Metropolitan Museum (30.47a–c).' },
  { linha: [
    { d: '784 – 794', t: 'Nagaoka e Heian-kyō', x: 'O imperador **Kanmu** abandona Nara, onde os mosteiros tinham demasiado peso, e depois de tentar Nagaoka funda em 794 a nova capital, **Heian-kyō**, «capital da paz e da tranquilidade», a futura **Quioto**. Será a sede da corte durante mais de mil anos.' },
    { d: '804 – 806', t: 'Saichō e Kūkai na China', x: 'Dois monges viajam à China e voltam com novas escolas: **Saichō** (Tendai) e **Kūkai** (Shingon). Vão marcar o budismo japonês durante séculos.' },
    { d: 'c. 850 – 1068', t: 'A regência Fujiwara', x: 'A família **Fujiwara** casa as suas filhas com os imperadores e governa como **sesshō** (regente de imperador-menino) e **kanpaku** (regente de adulto). Em 858 Yoshifusa é o primeiro regente não imperial. O poder chega ao máximo com **Fujiwara no Michinaga** (966–1028).' },
    { d: 'c. 900 – 1000', t: 'Kana, Kokinshū e a literatura da corte', x: 'Surgem os silabários **hiragana** e **katakana**. Em 905 compila-se o *Kokinshū*, antologia de poemas; entre c. 1000 e c. 1010 escrevem-se o *Livro de Cabeceira* (Sei Shōnagon) e o *Genji Monogatari* (Murasaki Shikibu).' },
    { d: '901', t: 'Michizane no exílio', x: 'O sábio e ministro **Sugawara no Michizane** (845–903) é acusado pelos Fujiwara e exilado para Dazaifu, em Kyūshū, onde morre. Mais tarde, ao ocorrerem desgraças na corte, atribuem-se à sua ira; passa a ser venerado como o deus **Tenjin**, patrono dos estudos.' },
    { d: '939 – 1050', t: 'Os primeiros guerreiros', x: 'Nas províncias, famílias de **guerreiros a cavalo**, os bushi, ganham poder ao guardar terras e a combater revoltas, como a de **Taira no Masakado** (939). Ao longo do século XI as famílias **Minamoto** e **Taira** tornam-se os braços armados da corte.' },
    { d: '1053', t: 'O Salão da Fénix', x: 'Fujiwara no Yorimichi manda construir o **Byōdō-in**, em Uji: um palácio convertido em templo, com a figura do Buda Amida, ideal da «Terra Pura».' },
  ] },
  { img: 'jap-byodoin', leg: 'Hōō-dō do Byōdō-in, Uji' },
  { linha: [
    { d: '1180 – 1185', t: 'Guerra Genpei', x: 'Entre os **Taira**, que dominam a corte com Taira no Kiyomori, e os **Minamoto**, a guerra acaba na batalha naval de **Dan-no-ura** (1185), onde os Taira são destruídos e o jovem imperador Antoku se afoga com a avó. Esta história dá o *Heike Monogatari*, o grande poema épico dos samurais.' },
    { d: '1185 – 1192', t: 'Yoritomo e o primeiro xogunato', x: '**Minamoto no Yoritomo** (1147–1199), vencedor, instala o governo em **Kamakura**, longe da corte. Em 1192 recebe o título de **seii taishōgun** («general que submete os bárbaros»), abreviado em **xogum**. O seu governo, o **bakufu** («governo da tenda»), controla o exército e a justiça, enquanto a corte de Quioto continua a reinar.' },
    { d: '1203 – 1221', t: 'Os regentes Hōjō', x: 'Depois da morte de Yoritomo, a família da sua mulher, **Hōjō Masako**, toma o poder como regentes dos xoguns. Em 1221 derrotam a tentativa do imperador aposentado Go-Toba de recuperar o poder (guerra Jōkyū). Em 1232 publica-se o **Código Jōei** (Goseibai Shikimoku), a primeira lei para os guerreiros.' },
    { d: 'c. 1200 – 1253', t: 'Novos budismos', x: 'A fé popular da **Terra Pura** (Hōnen, Shinran), o **zen** (Eisai, Dōgen) e o movimento de **Nichiren** dão ao budismo caminhos mais simples. O Grande Buda de Kamakura, em bronze, é concluído c. 1252.' },
    { d: '1274 e 1281', t: 'As invasões mongóis', x: 'A dinastia **Yuan** de Kublai Khan manda duas frotas contra o Japão: em 1274 (c. 30 000 homens, a partir da Coreia, segundo as fontes) chegam a Hakata, vencem os primeiros combates, mas retiram; em 1281 duas grandes frotas (c. 140 000 homens no total, segundo as fontes; os números são debatidos) são atacadas e destruídas em parte por um **tufão**. Os japoneses tinham erguido uma muralha em Hakata.' },
  ] },
  { img: 'jap-mongol-rolo', leg: 'Rolo da invasão mongol, Mōko Shūrai Ekotoba' },
  { img: 'jap-tempestade-mongol', leg: 'Tufão sobre a frota invasora Yuan na baía de Hakata, 1281. Ilustração gerada por IA.' },
  { linha: [
    { d: '1333', t: 'Queda de Kamakura', x: 'As invasões deixaram os samurais sem butim para pagar a guerra, e o descontentamento cresce. O imperador **Go-Daigo** revolta-se; o general **Ashikaga Takauji** passa-se para o seu lado, e **Nitta Yoshisada** toma Kamakura. É o fim dos Hōjō. A «restauração Kenmu» de Go-Daigo dura pouco.' },
    { d: '1336 – 1392', t: 'Duas cortes', x: 'Takauji rompe com Go-Daigo, instala outro imperador em Quioto e funda o xogunato **Ashikaga**, ou **Muromachi**. Go-Daigo foge para as montanhas de Yoshino e forma-se uma «corte do Sul». As **Cortes do Norte e do Sul** só se reunificam em 1392, sob **Ashikaga Yoshimitsu**.' },
    { d: '1397 – 1408', t: 'Yoshimitsu e o Pavilhão Dourado', x: '**Yoshimitsu** constrói o **Kinkaku-ji** (1397), comércio com a China Ming (ele aceita o título de «rei do Japão» em 1402), protege o teatro nō. É o auge do xogunato Ashikaga.' },
    { d: 'c. 1400 – 1450', t: 'Zeami e o nō', x: '**Kan’ami** e o filho **Zeami** (c. 1363–c. 1443) transformam uma arte popular de dança e canto no teatro nō, com máscaras, uma estética de simplicidade e dezenas de textos que ainda se representam.' },
    { d: '1467 – 1477', t: 'Guerra de Ōnin', x: 'Uma disputa pela sucessão do xogum Yoshimasa e entre os poderosos Hosokawa e Yamana arrasa Quioto durante dez anos. O poder central deixa de funcionar. Começa a **era Sengoku** («dos Estados em guerra»), em que os senhores regionais, os **daimyō**, lutam entre si. É a época do *gekokujō*, «o de baixo derruba o de cima».' },
    { d: '1482 – 1490', t: 'Ginkaku-ji e o gosto Higashiyama', x: 'O xogum **Yoshimasa**, mais artista que governante, constrói o Pavilhão de Prata e rodeia-se de pintores, poetas e mestres de chá. É daqui que nasce muito do gosto «japonês» tradicional: tatami, painéis deslizantes, jardins de pedra, cerimónia do chá, arranjo de flores.' },
  ] },
  { img: 'jap-kinkakuji', leg: 'Kinkaku-ji, Quioto' },
  { linha: [
    { d: '1543', t: 'Os portugueses em Tanegashima', x: 'Por volta de 1543 (a data tradicional, discutida), um barco chinês com portugueses chega à ilha de **Tanegashima**, ao sul de Kyūshū. O senhor da ilha, **Tanegashima Tokitaka**, compra duas armas de fogo (arcabuzes) e manda copiá-las. Em poucas décadas o Japão passa a fabricar armas de fogo em grande escala, talvez mais do que qualquer país europeu.' },
    { d: '1549', t: 'Francisco Xavier em Kagoshima', x: 'O jesuíta **Francisco Xavier**, com o japonês **Anjirō** como guia, desembarca em Kagoshima. Fica dois anos, e deixa o início de uma comunidade cristã. O comércio e a missão (o chamado **comércio Nanban**, «dos bárbaros do sul») trazem prata, seda, armas e novas palavras.' },
    { d: '1560 – 1568', t: 'Nobunaga sobe', x: '**Oda Nobunaga** (1534–1582) vence o grande senhor Imagawa Yoshimoto em **Okehazama** (1560) e entra em Quioto em 1568 apoiado pelo xogum **Ashikaga Yoshiaki**.' },
    { d: '1573', t: 'Fim do xogunato Muromachi', x: 'Nobunaga expulsa Yoshiaki de Quioto. É o fim do xogunato Ashikaga, marcando o fim do período Muromachi. Nobunaga continua a guerra de unificação até 1582, quando morre no templo Honnō-ji, traído pelo seu general Akechi Mitsuhide.' },
  ] },
  { caixa: 'E depois de 1573?', texto: '**Toyotomi Hideyoshi** acaba a unificação (1590) e em 1592 e 1597 invade a Coreia sem sucesso. **Tokugawa Ieyasu** vence em Sekigahara (1600) e torna-se xogum em 1603, iniciando o **período Tokugawa (Edo)**, de paz e isolamento, até 1868, quando a **restauração Meiji** abre o Japão à modernização. Essas épocas ficam fora deste projeto, que se detém no tempo em que Portugal e o Japão se encontraram.' }
];

const mapa = [
  'O Japão antigo não tinha uma única cidade-estado, mas uma sucessão de capitais e de centros de poder que se foram deslocando pelo país. Estas são as principais, com o que as tornou importantes.',
  { tabela: { cab: ['Lugar', 'Período', 'Local hoje', 'Para que ficou conhecido'], linhas: [
    ['Yoshinogari', 'Yayoi', 'Saga, Kyūshū', 'Grande aldeia fortificada; imagem dos «reinos de Wa»'],
    ['Yamato / Asuka', 'Kofun – Asuka', 'Prefeitura de Nara', 'Sede dos reis e imperadores até 710; primeiros templos budistas'],
    ['Mozu-Furuichi', 'Kofun', 'Sakai e Habikino, Osaka', 'Grupo de túmulos monumentais, com o Daisen Kofun'],
    ['Heijō-kyō (Nara)', '710 – 784', 'Nara', 'Primeira capital permanente; Tōdai-ji, Shōsō-in'],
    ['Heian-kyō (Quioto)', '794 – 1868 (corte)', 'Quioto', 'Capital imperial durante mais de mil anos; literatura, templos, jardins'],
    ['Kamakura', '1185 – 1333', 'Prefeitura de Kanagawa', 'Sede do primeiro xogunato; Grande Buda'],
    ['Hakata (Fukuoka)', 'toda a época', 'Fukuoka, Kyūshū', 'Porto do comércio com a Coreia e a China; alvo das invasões mongóis'],
    ['Sakai e Hyōgo', 'Muromachi', 'Osaka e Kobe', 'Portos de mercadores ricos e autónomos'],
    ['Nagasaki', 'a partir de 1571', 'Nagasaki, Kyūshū', 'Porto aberto aos portugueses e aos jesuítas'],
    ['Shuri', 'Ryukyu', 'Naha, Okinawa', 'Capital do reino de Ryukyu, entre o Japão, a China e o Sudeste Asiático']
  ] } },
  { h: 'Nara: a primeira capital' },
  'Em 710 a corte mudou-se para **Heijō-kyō**, hoje Nara, com ruas em quadrícula, um palácio e dezenas de templos. Chegou a ter talvez 100 000 a 200 000 habitantes (as estimativas variam). Tinha mercados com moeda de cobre, uma universidade para formar funcionários e o **Tōdai-ji**. Muito do que sabemos do quotidiano vem de tabuinhas de madeira (*mokkan*) encontradas nas escavações, com pedidos, impostos e etiquetas de mercadorias.',
  { img: 'jap-heijokyo-vista', leg: 'Reconstrução conjetural de Heijō-kyō, Nara, no século VIII. Ilustração gerada por IA.' },
  { h: 'Quioto: a capital da paz' },
  'Fundada em 794 em local escolhido segundo princípios chineses (montanhas a norte, rios a leste e a oeste), **Heian-kyō** foi a capital imperial até à mudança da corte para Tóquio em 1868. Perdeu importância política quando o xogunato se instalou em Kamakura, mas continuou a ser o centro da corte, da cultura e da religião; voltou a ser sede do poder com os Ashikaga. O palácio e muitos bairros foram destruídos na guerra de Ōnin (1467–1477) e reconstruídos nas décadas seguintes.',
  { img: 'jap-corte-heian', leg: 'Damas da corte Heian, c. 1000. Ilustração gerada por IA.' },
  { h: 'Kamakura e o mundo dos samurais' },
  'Kamakura, na costa do Pacífico, rodeada de colinas por três lados, era fácil de defender. Yoritomo escolheu-a por ser uma terra da sua família e longe das intrigas da corte. Chegou a ter dezenas de milhares de habitantes, templos zen de grande prestígio e o Grande Buda de bronze.',
  { h: 'Hakata, Sakai e as rotas do mar' },
  'O Japão foi sempre ligado ao continente por rotas marítimas. **Hakata**, no norte de Kyūshū, era o porto de embarque para a Coreia e a China e o lugar de chegada de monges, comerciantes e (em 1274 e 1281) invasores. No século XV e XVI, **Sakai** ficou rica como porto de mercadores, autogovernada por conselhos, e foi um dos centros da cerimónia do chá. As frotas de piratas, os **wakō**, assaltavam as costas da Coreia e da China e comerciavam com ambas. Moedas de cobre chinesas, seda e porcelana entravam; saíam enxofre, cobre, espadas e, no século XVI, prata, de minas como **Iwami**, descobertas por volta de 1526.',
  { h: 'Os mundos à margem: Ainu e Ryukyu' },
  { img: 'jap-shuri', leg: 'Porta Hōshinmon do Castelo de Shuri reconstruído, Okinawa; fotografia de 2016.' },
  { caixa: 'Nota', texto: [
    '**Ainu.** No norte vivia o povo Ainu, com língua própria, caçadores, pescadores e recoletores, com uma religião de espíritos (*kamui*). Aparecem nas crónicas japonesas como **Emishi** (os povos do nordeste, que resistiram aos exércitos de Quioto até ao século IX) e depois como **Ezo**. A fronteira avançou para norte durante séculos, e por volta de 1600 o clã Matsumae passou a ter o monopólio do comércio com os Ainu.',
    '**Ryukyu.** O arquipélago de Okinawa foi unido em 1429 no **reino de Ryukyu**, com capital em **Shuri**, que enriqueceu no comércio entre a China, o Japão, a Coreia e o Sudeste Asiático e pagava tributo à China Ming. Só em 1609 foi invadido pelo clã Satsuma e só em 1879 anexado pelo Japão. Uma parte da população fala hoje línguas ryukyuanas, aparentadas com o japonês, mas distintas.'
  ] }
];

const sociedade = [
  { h: '1. Organização política' },
  'O Japão teve, ao mesmo tempo, **dois centros de poder**: o imperador e a corte, que reinavam, e (a partir de 1185) o xogum e os guerreiros, que governavam. Na época Yamato, o poder era uma aliança de clãs (**uji**) chefiados pelo rei. As reformas de Taika e o Código Taihō criaram um Estado ao modelo chinês, o **ritsuryō**: ministérios, províncias (*kuni*), registos de população e impostos. Mas, ao contrário da China, não havia exames de acesso: contavam o nascimento e a família.',
  { lista: [
    '**Corte Heian:** o imperador (*tennō*) reina, os Fujiwara governam como regentes. A terra vai passando para **propriedades privadas** (*shōen*), muitas isentas de impostos.',
    '**Xogunato Kamakura:** o xogum e os seus vassalos (**gokenin**) governam através de governadores militares (**shugo**) e administradores de terras (**jitō**), enquanto a corte mantém a legitimidade.',
    '**Xogunato Muromachi:** o xogum depende dos **shugo-daimyō**, que se tornam senhores quase independentes, até à guerra.',
    '**Era Sengoku:** os **daimyō** são senhores de território com exércitos próprios, castelos e leis locais. Alguns eram antigos criados que subiram por mérito ou traição.'
  ] },
  { img: 'jap-esquema-sociedade', leg: 'Esquema ilustrativo simplificado da ordem política do Japão medieval. Ilustração gerada por IA.' },
  { h: '2. Classes sociais' },
  { lista: [
    '**Imperador e família imperial:** descendentes, segundo a tradição, da deusa Amaterasu; sagrados, mas muitas vezes sem poder real.',
    '**Nobreza da corte (kuge):** os Fujiwara e outras famílias, em funções e cerimónias.',
    '**Guerreiros (bushi, samurai):** a partir de c. 1185, a classe dirigente efetiva. «Samurai» vem do verbo *saburau*, «servir».',
    '**Monges e sacerdotes:** alguns mosteiros (Enryaku-ji, Kōfuku-ji) tinham exércitos de **monges-guerreiros** (*sōhei*).',
    '**Camponeses:** a grande maioria; pagavam em arroz e trabalho. Nas aldeias organizaram-se, nos séculos XV e XVI, ligas de defesa e revoltas (*ikki*).',
    '**Artesãos e mercadores:** organizados em guildas (*za*) sob proteção de templos e nobres; ganharam peso em cidades como Sakai.',
    '**Párias:** grupos considerados «impuros» pelas suas ocupações (curtidores, coveiros), que sofriam discriminação.'
  ] },
  { caixa: 'A divisão em quatro classes', texto: 'A famosa ordem «guerreiro, camponês, artesão, mercador» (*shi-nō-kō-shō*) é da época **Tokugawa**, não do tempo de que falamos. Antes de 1573 as fronteiras eram mais difusas: havia camponeses que combatiam, samurais que lavravam e monges que pegavam em armas.' },
  { h: '3. Religião' },
  'A religião japonesa é uma convivência de duas grandes tradições, que não se opunham. O **xintoísmo** (*Shintō*, «caminho dos deuses») venera os **kami**, espíritos de montanhas, rios, árvores, antepassados e deuses, em santuários marcados por um portal (*torii*). O **budismo**, chegado no século VI, trouxe templos, escrituras, imagens e uma ideia de salvação. O sincretismo (*shinbutsu-shūgō*) fez que a maioria das pessoas rezasse em ambos.',
  { tabela: { cab: ['Divindade / figura', 'Domínio', 'Santuário ou culto'], linhas: [
    ['Izanagi e Izanami', 'Casal criador: geram as ilhas e os deuses', 'Mitos do Kojiki'],
    ['Amaterasu Ōmikami', 'Deusa do Sol; antepassada da família imperial', 'Santuário de Ise'],
    ['Susanoo', 'Deus das tempestades e do mar; irmão de Amaterasu', 'Izumo'],
    ['Ōkuninushi', 'Senhor da terra «de Izumo»', 'Izumo Taisha'],
    ['Hachiman', 'Deus da guerra, protetor dos Minamoto e dos samurais', 'Tsurugaoka Hachimangū, Kamakura'],
    ['Inari', 'Arroz, prosperidade e mercadores', 'Fushimi Inari, Quioto'],
    ['Buda Vairocana (Dainichi)', 'O Buda cósmico', 'Tōdai-ji, Nara'],
    ['Buda Amida', 'Buda da Terra Pura, ocidental', 'Byōdō-in; escolas Jōdo'],
    ['Kannon', 'Bodisatva da compaixão', 'Muitos templos']
  ] } },
  { img: 'jap-amaterasu', leg: 'Amaterasu sai da gruta, gravura de Utagawa Kunisada, 1856.' },
  { h: 'Mitologia: Kojiki e Nihon Shoki' },
  'O **Kojiki** («Registo de factos antigos», 712) e o **Nihon Shoki** (720) contam como o casal divino **Izanagi** e **Izanami** criou as ilhas. Da lavagem de Izanagi nasceram **Amaterasu** (Sol), **Tsukuyomi** (Lua) e **Susanoo** (tempestade). Amaterasu, ofendida, escondeu-se numa gruta e o mundo ficou às escuras, até que os deuses a atraíram com uma dança e um espelho. O neto dela, **Ninigi**, desceu à Terra com três tesouros (**espelho, espada e joia**, ainda hoje as insígnias imperiais), e o seu bisneto **Jimmu** terá sido o **primeiro imperador**, entronizado, segundo a tradição, em **660 a.C.** Isto é **lenda**: os historiadores não conseguem comprovar nenhum soberano antes de c. 500 d.C. com segurança, e as crónicas foram escritas para dar prestígio à corte.',
  { img: 'jap-kojiki', leg: 'Fac-símile de 1924–1925 do manuscrito Shinpuku-ji do Kojiki, copiado em 1371–1372.' },
  { lista: [
    '**Ise:** o santuário de Amaterasu, reconstruído de vinte em vinte anos (62.ª vez em 2013), numa ideia de renovação em que o edifício é «o mesmo» por ser sempre refeito.',
    '**Izumo:** um dos santuários mais antigos, associado a Ōkuninushi.',
    '**Pureza e festivais:** o xintoísmo dá importância à pureza ritual e a festivais sazonais (*matsuri*) ligados ao ciclo do arroz.'
  ] },
  { h: 'Os budismos' },
  'O budismo japonês divide-se em escolas. **Tendai** e **Shingon** (Heian) davam peso a rituais e à esperança de despertar. A **Terra Pura** (Hōnen, Shinran) pregava que repetir o nome do Buda Amida bastava para renascer no seu paraíso. O **zen** (Eisai, Dōgen), importado da China, valorizava a meditação (*zazen*) e foi muito apoiado pelos samurais. **Nichiren** (1222–1282) defendia a centralidade do *Sutra do Lótus*. O **Hōryū-ji** (c. 607), o **Tōdai-ji** (c. 752) e o **Byōdō-in** (1053) são marcos dessas fases.',
  { img: 'jap-horyuji', leg: 'Pagode e salão principal do Hōryū-ji' },
  { h: 'A vida depois da morte' },
  'O budismo trouxe a cremação, que se difundiu a partir do século VIII, e a crença na reencarnação. No xintoísmo a morte é «impura», e os funerais ficaram sobretudo a cargo dos monges budistas. Os túmulos Kofun, com câmaras de pedra e objetos para o outro mundo, mostram uma crença anterior de que o morto continuava a precisar de armas, espelhos e joias.',
  { h: '4. Economia e agricultura' },
  'O **arroz** foi a base da economia e a medida da riqueza: a produção de uma terra media-se em **koku** (c. 180 litros, a ração de um homem durante um ano). Impostos, rendas e salários pagavam-se em arroz. Outros produtos importantes: cereais de sequeiro, legumes, seda, linho, **cânhamo** e cavalos. A partir do século XII circulou moeda de cobre importada da China (dinastia Song). O comércio, o artesanato (cerâmica, lacas, espadas) e as cidades-porto cresceram nos séculos XIV–XVI. Em 1526–1533 abriram-se as minas de prata de **Iwami**, e em meados do século XVI o Japão era um dos grandes produtores de prata do mundo.',
  { h: '5. Escrita, kana e kanji' },
  'O Japão não tinha escrita própria. No século V (a partir da Coreia) adotou os **caracteres chineses** (*kanji*) e escrevia-se em chinês clássico (*kanbun*), a língua do governo e da religião. Mas o japonês, língua de estrutura muito diferente (polissilábica e com flexões), não se ajustava bem. Primeiro usaram-se caracteres só pelo som (*man’yōgana*, assim chamados por serem os do **Man’yōshū**, antologia de c. 759 com mais de 4500 poemas). Daí resultaram os dois silabários **kana**: o **hiragana**, arredondado, a partir de caracteres cursivos, usado pelas mulheres da corte (a «escrita de mulher», *onna-de*), e o **katakana**, angular, usado por monges. Hoje o japonês escreve-se com kanji + kana misturados.',
  { h: '6. Casa e família' },
  'No período Jōmon viviam-se em **casas semienterradas** de teto de colmo; no Yayoi apareceram celeiros elevados contra os roedores. A casa aristocrática Heian (*shinden-zukuri*) tinha pavilhões ligados por corredores, com divisórias de biombo e de cortinas de bambu. No período Muromachi desenvolve-se o estilo **shoin**, com **tatami** (esteiras de palha) por todo o chão, painéis deslizantes (*fusuma*, *shōji*) e um nicho decorativo (*tokonoma*), que é a base da casa japonesa tradicional.',
  'A família era de linhagem (*ie*). Na corte Heian, os casamentos eram frequentemente uxorilocais: o marido visitava a casa da mulher, e os filhos cresciam com a família materna. Entre os samurais, a sucessão passou a ser pelo filho mais velho (primogenitura) a partir do século XIV, com perda de direitos para as mulheres.',
  { h: '7. Alimentação' },
  'A base era o **arroz** (os pobres comiam muito também painço, cevada e trigo-mourisco), com **peixe**, algas, legumes, feijão de soja e conservas. A **soja** deu o **miso** e o **molho de soja**; o saké fazia-se de arroz. O budismo influenciou a **cozinha vegetariana** dos templos (*shōjin ryōri*), e em 675 o imperador Tenmu proibiu o consumo de certas carnes (vaca, cavalo, cão, macaco, galinha) durante a época agrícola. O **chá** foi trazido da China por monges, e Eisai escreveu um livro sobre os seus benefícios (*Kissa yōjōki*, c. 1211). O **sushi** primitivo era peixe fermentado em arroz, para conservar.',
  { h: '8. Vestuário' },
  'A corte Heian usava o **sokutai** (homens) e o **jūnihitoe** (mulheres), vestido de várias camadas de seda cujas cores combinadas diziam o gosto e a estação. Os guerreiros usavam o **hitatare** e o **hakama**, e armadura. Na Muromachi generaliza-se o **kosode**, uma túnica de mangas curtas, antepassada do quimono. A seda era luxo; os camponeses vestiam cânhamo e algodão (o algodão popularizou-se no século XVI).',
  { h: '9. Música, jogos e lazer' },
  { lista: [
    '**Gagaku:** música da corte, de origem chinesa e coreana, ainda hoje executada.',
    '**Biwa e koto:** alaúde e cítara; os monges cegos cantavam o *Heike Monogatari* ao som do biwa.',
    '**Shakuhachi:** flauta de bambu, associada mais tarde a monges zen.',
    '**Jogos:** *go* e *sugoroku* (jogo de tabuleiro com dados), concursos de poesia e de incenso (*kōdō*), *kemari* (bola de pontapé entre nobres) e tiro com arco a cavalo (*yabusame*).',
    '**Teatro:** nō (séc. XIV), kyōgen (farsas) e danças de santuário.'
  ] },
  { img: 'jap-no-mascara', leg: 'Máscara de nō Ko-omote' },
  { h: '10. Ciência e saber' },
  'O Japão importou da China a **astronomia, o calendário**, a medicina e a geomância (*onmyōdō*, cuja figura mais famosa é **Abe no Seimei**, 921–1005). A obra médica mais antiga conservada é o *Ishinpō* (984), de Tamba no Yasuyori, compilada de textos chineses. Os monges eram os principais eruditos, e os mosteiros guardavam bibliotecas. As primeiras impressões datam de c. 764–770 (os *Hyakumantō Darani*, encomendados pela imperatriz Shōtoku).',
  { h: '11. Tecnologia e artesanato' },
  'O Japão foi mestre em **madeira** (carpintaria sem pregos, com encaixes), **laca** (*maki-e*, laca com pó de ouro), **papel** (*washi*, desde o século VII), **cerâmica** e **metalurgia**. No tempo de Nobunaga houve fornos para produzir armas de fogo em massa e castelos de pedra com torres (Azuchi, 1576).',
  { h: '12. A espada e a guerra' },
  'Os guerreiros combatiam sobretudo com o **arco** (*yumi*), assimétrico e muito longo, disparado a cavalo, e só depois com a espada. A **espada curva** de lâmina simples (*tachi*, e depois a **katana**, usada na cintura com a lâmina para cima, a partir da Muromachi) aparece no século X. A lâmina é feita de **aço tamahagane**, forjado e dobrado muitas vezes, com um **temperamento diferencial** que dá um fio duro e um dorso flexível, e deixa uma linha ondulada (*hamon*). Uma boa espada era obra de um mestre e objeto sagrado.',
  { img: 'jap-forja-katana', leg: 'Ferreiro de espadas no período Kamakura. Ilustração gerada por IA.' },
  { img: 'jap-katana', leg: 'Katana com hamon visível' },
  { img: 'jap-samurai-arqueiro', leg: 'Samurai arqueiro a cavalo no período Kamakura. Ilustração gerada por IA.' },
  'Do século XIV ao XVI as batalhas passaram a ter **infantaria** (*ashigaru*, soldados ligeiros recrutados) com lanças. Em 1543 chegou a **espingarda de mecha** (arcabuz), e em 1575, em **Nagashino**, as tropas de Oda Nobunaga e Tokugawa Ieyasu derrotaram a cavalaria do clã Takeda com a ajuda de milhares de arcabuzes e de paliçadas. (A história de que os arcabuzeiros se revezavam em três filas é muito discutida.)',
  { img: 'jap-ashigaru-nagashino', leg: 'Ashigaru com arcabuzes em Nagashino, 1575 — exceção ao limite de 1573. Ilustração gerada por IA.' },
  { h: 'Bushidō: um conceito mais tardio' },
  { caixa: 'Mito e realidade', texto: [
    '**Mito:** os samurais viviam sempre segundo um código de honra e lealdade chamado «bushidō», desde tempos antigos.',
    '**Realidade:** a palavra *bushidō* (**«caminho do guerreiro»**) só se torna comum na época **Tokugawa** (século XVII), quando os samurais já eram sobretudo funcionários em tempo de paz e se escreviam tratados morais a explicar como deviam viver. A versão romântica e «eterna», que mistura confucionismo, zen e xintoísmo, popularizou-se em 1900 com o livro de **Nitobe Inazō** (*Bushido: The Soul of Japan*), escrito em inglês para o público ocidental, e foi depois usada pelo nacionalismo e pelo militarismo do século XX.',
    'Nos séculos XII a XVI os guerreiros tinham ideais, como o «caminho do arco e do cavalo» (*kyūba no michi*), a coragem, a lealdade ao senhor e o apreço pela fama. Mas as crónicas mostram também **traições, mudanças de campo, saques e crueldade**, e a lealdade era frequentemente uma negociação. O **seppuku** (suicídio ritual) existiu, mas era raro e só virou instituição mais tarde.'
  ] },
  { h: 'O mito do kamikaze' },
  { caixa: 'Mito e realidade', texto: [
    '**Mito:** em 1281 um «vento divino» (*kamikaze*) enviado pelos deuses salvou milagrosamente o Japão da invasão mongol.',
    '**Realidade:** houve mesmo um **tufão** que destruiu grande parte da frota Yuan em agosto de 1281, e os contemporâneos viram nele uma intervenção dos deuses; a palavra aparece nos textos da época. Mas os invasores já levavam semanas parados diante de Hakata, travados pela **muralha** e pela resistência dos samurais, com doenças e problemas de abastecimento, e muitos navios eram mal construídos à pressa. O papel de uma tempestade na retirada de **1274** é debatido. O mito nacional tornou-se famoso no século XX, e o nome foi retomado em 1944–45 para os pilotos suicidas.'
  ] },
  { h: '13. As mulheres' },
  'A condição das mulheres japonesas mudou muito. Entre os séculos VI e VIII reinaram **seis mulheres, em oito reinados** (Suiko, Kōgyoku/Saimei, Jitō, Genmei, Genshō, Kōken/Shōtoku), um número invulgar. Na **corte Heian** as damas, escondidas atrás de biombos, escreveram em kana a literatura mais importante da época: **Murasaki Shikibu**, **Sei Shōnagon**, a autora do *Kagerō Nikki*. Podiam herdar e possuir terras. Entre os guerreiros houve mulheres influentes, como **Hōjō Masako** (1157–1225), apelidada de «xoguna-monja», e figuras de lenda como **Tomoe Gozen**, que as crónicas descrevem como arqueira e guerreira (a sua existência histórica é discutida). Com o tempo, sobretudo desde o século XIV, a primogenitura masculina e a ideia de «dever» feminino foram reduzindo direitos.'
];

const personalidades = [
  'As crónicas japonesas dão-nos nomes e biografias, mas misturam facto e lenda, sobretudo nos tempos mais antigos. Estas são as figuras mais importantes até 1573.',
  { h: 'Himiko, rainha de Yamatai' },
  'Rainha-xamã de Yamatai, século III (não se conhecem datas exatas). Os textos chineses dizem que foi escolhida para acabar com uma guerra entre os reinos de Wa, que vivia fechada num palácio e se comunicava com o povo através do irmão, e que em 238/239 enviou embaixadores ao reino de Wei. Não aparece nas crónicas japonesas com este nome, e o local do seu reino é incerto. A sua história serve para lembrar que mulheres governaram desde o início.',
  { h: 'Príncipe Shōtoku (574–622)' },
  'Regente da imperatriz Suiko. As crónicas atribuem-lhe a «constituição de dezassete artigos» (604), os doze graus da corte, as embaixadas à China e a fundação do Hōryū-ji; no *Nihon Shoki* é quase um santo. Os historiadores modernos acham que o texto exagerou o seu papel, mas ele foi, de certeza, uma figura central da corte do seu tempo. Foi venerado como patrono do budismo japonês.',
  { img: 'jap-shotoku', leg: 'Retrato do príncipe Shōtoku, Coleção Imperial' },
  { h: 'Nakatomi no Kamatari (614–669)' },
  'Conselheiro, aliado do príncipe Naka no Ōe (futuro imperador Tenji) e figura central do golpe de 645 contra os Soga. Foi recompensado com o nome **Fujiwara**, que deu à mais poderosa família da corte nos séculos seguintes.',
  { h: 'Imperador Shōmu (701–756)' },
  'Imperador budista, casado com a imperatriz **Kōmyō**. Com uma epidemia a assolar o país, mandou erguer o **Tōdai-ji** e o Grande Buda como proteção do reino e de cada província (**kokubun-ji**). Abdicou em 749 e fez-se monge. Os seus objetos preciosos ficaram no **Shōsō-in**, um tesouro que se conserva desde então.',
  { h: 'Kūkai (774–835)' },
  'Monge e sábio, fundador da escola **Shingon**. Foi à China em 804 e voltou com novos textos e rituais. Fundou o mosteiro do Monte Kōya. Terá sido calígrafo, poeta e engenheiro, e a tradição popular atribui-lhe ainda muitas outras obras (entre elas, a invenção do hiragana, o que é pouco provável).',
  { h: 'Sugawara no Michizane (845–903)' },
  'Sábio, poeta e ministro de grande talento, de uma família de letrados. Opôs-se aos Fujiwara e foi exilado para Dazaifu (901), onde morreu. Depois da sua morte, desastres e mortes na corte foram atribuídos ao seu espírito vingativo; a corte reabilitou-o e foi deificado como **Tenjin**, deus da escrita e dos estudos. Ainda hoje os estudantes rezam-lhe nos exames.',
  { img: 'jap-michizane', leg: 'Retrato de Sugawara no Michizane por Yōgetsu, finais do século XV–inícios do XVI, Cleveland Museum of Art (2015.491).' },
  { h: 'Fujiwara no Michinaga (966–1028)' },
  'O mais poderoso dos regentes Fujiwara. Casou três filhas com imperadores e foi avô de três deles. Em 1018 terá declamado: «Este mundo, penso eu, é meu; como a lua cheia, nada lhe falta.» Protegeu escritoras como Murasaki Shikibu, e mandou construir templos.',
  { h: 'Murasaki Shikibu (c. 973 – c. 1014/1025)' },
  'Dama da corte da imperatriz Shōshi (filha de Michinaga) e autora do **Genji Monogatari** (c. 1010), longa história da vida e dos amores do «príncipe resplandecente» Genji, e dos seus descendentes. É considerado por muitos o primeiro grande romance da literatura mundial. O seu nome verdadeiro não se conhece («Murasaki» vem de uma personagem e «Shikibu» do cargo do pai). Deixou também um diário.',
  { img: 'jap-murasaki', leg: 'Retrato de Murasaki Shikibu por Tosa Mitsuoki, século XVII.' },
  { h: 'Sei Shōnagon (c. 966 – c. 1017/1025)' },
  'Dama da corte da imperatriz Teishi, rival da de Murasaki. O seu **Livro de Cabeceira** (*Makura no Sōshi*, c. 1000–1010) é uma coleção de listas, impressões e episódios, inteligente e cheia de humor («coisas que dão o coração a bater», «coisas desagradáveis»). Tornou-se o modelo do género literário *zuihitsu* («ao correr do pincel»).',
  { img: 'jap-sei-shonagon', leg: 'Sei Shōnagon por Kikuchi Yōsai, ilustração do Zenken Kojitsu, século XIX.' },
  { h: 'Minamoto no Yoritomo (1147–1199)' },
  'Filho de um chefe Minamoto derrotado, foi poupado na infância e exilado, e em 1180 revoltou-se contra os Taira. Mais político do que guerreiro (as batalhas foram travadas pelo irmão **Yoshitsune**, que ele depois perseguiu), criou em Kamakura o primeiro governo militar do Japão. Morreu em 1199, segundo a tradição de uma queda de cavalo.',
  { img: 'jap-yoritomo', leg: 'Retrato atribuído a Minamoto no Yoritomo, Jingo-ji' },
  { h: 'Hōjō Masako (1157–1225)' },
  'Mulher de Yoritomo e filha de Hōjō Tokimasa. Após a morte do marido, governou com o pai e o irmão, e foi tão influente que a chamaram «xoguna-monja» (*ama shōgun*). Mobilizou os vassalos de Kamakura na guerra Jōkyū (1221), com um discurso célebre.',
  { h: 'Hōjō Tokimune (1251–1284)' },
  'Regente do xogunato ainda muito jovem (1268), chefiou a defesa contra os mongóis. Recusou as exigências de Kublai Khan, mandou executar os seus enviados e preparou as defesas de Hakata. Morreu novo e adepto do zen.',
  { h: 'Ashikaga Yoshimitsu (1358–1408)' },
  'Terceiro xogum Ashikaga: reuniu as duas cortes (1392), controlou os senhores regionais, comerciou com a China Ming e fez do seu palácio de **Muromachi** o centro da cultura. Retirou-se em 1394 mas continuou a governar. Construiu o **Kinkaku-ji**.',
  { h: 'Zeami (c. 1363 – c. 1443)' },
  'Ator e dramaturgo do teatro **nō**. Escreveu cerca de 40 peças que ainda se representam e tratados sobre a arte do ator, em que fala da «flor» (*hana*) e do mistério (*yūgen*). Foi protegido por Yoshimitsu, mas caiu em desgraça com um xogum posterior e foi exilado na ilha de Sado.',
  { h: 'Oda Nobunaga (1534–1582)' },
  'Senhor de Owari, o primeiro dos «três unificadores». Venceu em Okehazama (1560) com uma força muito inferior, usou armas de fogo em massa, queimou o mosteiro do Monte Hiei (1571, com muitos mortos), aboliu monopólios comerciais e abriu-se aos jesuítas. Morreu em 1582 no Honnō-ji, traído por Akechi Mitsuhide. O seu vassalo **Toyotomi Hideyoshi** (c. 1537–1598), de origem humilde, completou a unificação, e **Tokugawa Ieyasu** (1543–1616) fundou depois o xogunato Edo.',
  { img: 'jap-nobunaga', leg: 'Retrato de Oda Nobunaga por Kanō Sōshū, 1583; original no Chōkō-ji.' }
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**Literatura:** o Genji Monogatari, o Livro de Cabeceira, o Heike Monogatari, a poesia waka e o haiku (que nasce do *renga* medieval).',
    '**Escrita:** o sistema misto de kanji e kana, que ainda é usado por mais de cem milhões de pessoas.',
    '**Governo:** a ideia de um poder partilhado entre uma monarquia simbólica e um governo militar, que explica muito da política japonesa posterior.',
    '**Estética:** a atenção ao efémero (*mono no aware*), à simplicidade rústica (*wabi*) e à beleza serena (*sabi*).',
    '**Budismo zen:** jardins secos, caligrafia, pintura a tinta (Sesshū), meditação.',
    '**Chá e arranjo de flores:** a cerimónia do chá (*chanoyu*) foi refinada por Murata Jukō e por **Sen no Rikyū** (1522–1591), que a levou à ideia de «ato de comunhão» entre anfitrião e convidado em cabana simples.'
  ] },
  { img: 'jap-ryoanji', leg: 'Jardim seco do Ryōan-ji' },
  { img: 'jap-sala-cha', leg: 'Reunião de chá no período Muromachi. Ilustração gerada por IA.' },
  { h: 'Arte' },
  'A arte japonesa vai do **barro** Jōmon e dos **haniwa** à **escultura budista** de Nara e Heian (como o Grande Buda e as obras de Unkei e Kaikei no século XIII), aos **rolos pintados** (*emakimono*), à **pintura a tinta** zen (Sesshū) e aos **biombos** dourados da era Sengoku. A laca e a espada eram também arte.',
  { h: 'Arquitetura' },
  'Os edifícios de madeira, de telhados curvos e beirais largos, adaptaram-se aos sismos e ao clima húmido. O **Hōryū-ji** é um dos edifícios de madeira mais antigos do mundo. O **Ise** renova-se de vinte em vinte anos. Os **castelos**, com torres altas e de pedra, apareceram no século XVI, e o de Azuchi (1576) foi o modelo.',
  { h: 'O encontro com o Ocidente' },
  'O encontro com os portugueses abriu o **comércio Nanban**. Os portugueses trouxeram o arcabuz, produtos europeus (relógios, tabaco, vidro), ideias científicas e o cristianismo, e fizeram de intermediários entre a China e o Japão: levavam seda chinesa e traziam prata japonesa. Levaram também laca e biombos. Do português ficaram palavras japonesas como **pan** (pão), **tempura** (a origem é discutida), **tabako**, **birōdo** (veludo), **kasutera** (bolo de Castela), **karuta** (carta de jogar) e **botan** (botão). Os jesuítas **Luís Fróis** e **João Rodrigues** escreveram obras valiosas sobre o Japão. Em 1571 abriu-se o porto de **Nagasaki**; em 1582 partiu a embaixada **Tenshō**, de quatro jovens japoneses que visitaram Lisboa, Madrid e Roma.',
  { img: 'jap-nau-tanegashima', leg: 'Nau portuguesa junto a Tanegashima: representação simbólica do contacto luso-japonês. A chegada de 1543 é associada a um junco. Ilustração gerada por IA.' },
  { img: 'jap-nanban-biombo', leg: 'Biombo Nanban atribuído a Kanō Dōmi: navio e comerciantes portugueses em Nagasaki, finais do século XVI–inícios do XVII.' },
  { img: 'jap-xavier', leg: 'Retrato japonês de Francisco Xavier, século XVII, Museu Municipal de Kobe.' },
  { h: 'A redescoberta e o debate' },
  'Os japoneses estudaram as suas crónicas antigas desde o período Edo, e a arqueologia moderna, sobretudo desde 1945, descobriu Yoshinogari, Sannai-Maruyama e as capitais antigas. Há ainda limites: os túmulos imperiais são geridos pela **Agência da Casa Imperial**, que só em anos recentes permitiu algumas pesquisas limitadas à volta deles, e o debate sobre as origens (Yamatai, o primeiro imperador) continua aberto.',
  { h: 'Onde visitar' },
  { lista: [
    '**Quioto:** Kinkaku-ji, Ginkaku-ji, Ryōan-ji, o Museu Nacional, os santuários e o antigo palácio.',
    '**Nara:** Tōdai-ji e o Grande Buda, Kōfuku-ji, Shōsō-in (exposição anual de outono), o Museu Nacional.',
    '**Hōryū-ji** (Ikaruga, perto de Nara), com os edifícios mais antigos.',
    '**Kamakura:** o Grande Buda, Tsurugaoka Hachimangū e templos zen.',
    '**Tóquio:** Museu Nacional (Jōmon, Yayoi, Kofun, espadas e armaduras).',
    '**Yoshinogari** (Saga) e **Sannai-Maruyama** (Aomori): sítios arqueológicos reconstituídos.',
    '**Daisen Kofun** (Sakai, Osaka) e os túmulos de Mozu-Furuichi.',
    '**Nagasaki e Tanegashima:** memória dos primeiros contactos com os portugueses.'
  ] }
];

const quiz = [
  { p: 'Qual é a característica mais famosa da cerâmica do período Jōmon?', op: ['É decorada com marcas de corda', 'É feita em torno rápido', 'É sempre branca e vidrada', 'É pintada com ouro'], certa: 0, exp: '«Jōmon» significa «marca de corda»: o nome vem das impressões de corda nos vasos. A cerâmica Jōmon é das mais antigas do mundo.' },
  { p: 'O que trouxe a cultura Yayoi ao Japão?', op: ['Pólvora e arcabuzes', 'Arroz de regadio, bronze e ferro', 'O budismo', 'A escrita kana'], certa: 1, exp: 'Vindos do continente (via Coreia), o arroz irrigado, o bronze e o ferro marcam o Yayoi, a partir de c. 900–800 a.C.' },
  { p: 'Que forma têm os grandes túmulos do período Kofun?', op: ['Pirâmide de degraus', 'Buraco de fechadura', 'Cúpula', 'Círculo de pedras'], certa: 1, exp: 'Os túmulos *zenpō-kōen-fun* têm uma parte quadrada e uma redonda, e estão rodeados de fossos. O Daisen Kofun mede c. 486 m.' },
  { p: 'Os mitos do Kojiki e do Nihon Shoki dizem que o primeiro imperador foi…', op: ['Nintoku', 'Shōtoku', 'Jimmu', 'Himiko'], certa: 2, exp: 'Jimmu é o primeiro imperador lendário, entronizado segundo a tradição em 660 a.C. Os historiadores não o consideram comprovado.' },
  { p: 'Quem foi o príncipe Shōtoku?', op: ['Regente da imperatriz Suiko e promotor do budismo', 'Primeiro xogum', 'Autor do Genji Monogatari', 'Um senhor da guerra Sengoku'], certa: 0, exp: 'Shōtoku (574–622) foi regente de Suiko; as crónicas atribuem-lhe a constituição de 17 artigos e o Hōryū-ji, embora o seu papel seja discutido.' },
  { p: 'Onde se ergueu o Grande Buda de bronze inaugurado em 752?', op: ['Kamakura', 'Quioto', 'Nara (Tōdai-ji)', 'Nagasaki'], certa: 2, exp: 'O Tōdai-ji, em Nara, mandado construir pelo imperador Shōmu. O Grande Buda de Kamakura é posterior (c. 1252).' },
  { p: 'Qual era o nome da capital fundada em 794, hoje Quioto?', op: ['Heijō-kyō', 'Heian-kyō', 'Edo', 'Kamakura'], certa: 1, exp: 'Heian-kyō, «capital da paz e da tranquilidade», onde se instalou o imperador Kanmu.' },
  { p: 'Quem escreveu o Genji Monogatari?', op: ['Sei Shōnagon', 'Hōjō Masako', 'Murasaki Shikibu', 'Himiko'], certa: 2, exp: 'Murasaki Shikibu, dama da corte, escreveu-o c. 1010. Sei Shōnagon escreveu o Livro de Cabeceira.' },
  { p: 'Como se chamam os dois silabários japoneses desenvolvidos a partir dos caracteres chineses?', op: ['Kanji e kanbun', 'Hiragana e katakana', 'Ainu e Ryukyu', 'Nō e kyōgen'], certa: 1, exp: 'O hiragana (usado pelas mulheres da corte) e o katakana (usado por monges) formam os kana. Os kanji são os próprios caracteres chineses.' },
  { p: 'Quem recebeu o título de xogum em 1192 e fundou o governo de Kamakura?', op: ['Taira no Kiyomori', 'Minamoto no Yoritomo', 'Ashikaga Takauji', 'Oda Nobunaga'], certa: 1, exp: 'Minamoto no Yoritomo, vencedor da guerra Genpei, criou o primeiro xogunato.' },
  { p: 'Em que anos os mongóis tentaram invadir o Japão?', op: ['1192 e 1221', '1274 e 1281', '1467 e 1477', '1543 e 1549'], certa: 1, exp: 'As duas tentativas da dinastia Yuan foram em 1274 e 1281. A segunda foi destruída em parte por um tufão.' },
  { p: 'O que é verdade sobre o «kamikaze» de 1281?', op: ['Foi um vento divino que explica tudo, e não houve combate', 'Houve um tufão, mas a defesa japonesa e as dificuldades dos invasores também contaram', 'Não houve nenhuma tempestade', 'Foi um corpo de pilotos suicidas'], certa: 1, exp: 'O tufão existiu e foi decisivo, mas a muralha de Hakata, a resistência e a logística também pesaram. A associação a pilotos é de 1944–45.' },
  { p: 'O «bushidō» como código eterno dos samurais é…', op: ['Um conceito antigo, do tempo de Yoritomo', 'Uma ideia sobretudo da época Tokugawa, popularizada depois', 'Uma invenção dos portugueses', 'Uma lei do Código Taihō'], certa: 1, exp: 'O termo difundiu-se no século XVII e foi popularizado em 1900 por Nitobe Inazō. Os guerreiros medievais tinham ideais, mas também muita traição e pragmatismo.' },
  { p: 'Que guerra devastou Quioto e abriu a era Sengoku?', op: ['Guerra Genpei', 'Guerra de Ōnin', 'Guerra Jinshin', 'Guerra Jōkyū'], certa: 1, exp: 'A guerra de Ōnin (1467–1477) destruiu grande parte de Quioto e fez desmoronar o poder central.' },
  { p: 'O que aconteceu em Tanegashima, c. 1543?', op: ['Os mongóis chegaram', 'Os portugueses introduziram as armas de fogo', 'Fundou-se Quioto', 'Nasceu o teatro nō'], certa: 1, exp: 'Os portugueses chegaram a Tanegashima c. 1543 e venderam arcabuzes, que os japoneses logo copiaram. Em 1549 chegou Francisco Xavier.' }
];

export default {
  id: 'japao',
  cor: '#c43a5a',
  emblema: '../assets/img/japao.png',
  nome:    { pt: 'Japão', en: 'Japan' },
  periodo: { pt: 'c. 14000 a.C. – 1573', en: 'c. 14000 BC – AD 1573' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
