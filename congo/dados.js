// REINO DO CONGO (KONGO) — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas aproximadas: a história kongo anterior ao contacto com os portugueses (c. 1483) assenta em tradição oral e em arqueologia, e é muito debatida. A partir do século XVI há cartas dos reis, relatos portugueses, italianos e holandeses. a.C./d.C.
// Imagens: cada {img:'id'} procura o ficheiro  congo/img/id.jpg  (ver IMAGENS_CONGO.md para a lista e os prompts).
// Nota de método: «Kongo» designa o reino e o povo (bakongo); «Congo» é a forma portuguesa tradicional, usada no título.

const visao = [
  { caixa: 'Em resumo', texto: [
    'O **Reino do Congo** (em quicongo, **Kongo dia Ntotila**) foi um dos maiores e mais bem organizados estados da África Central. Nasceu por volta de **1390**, nos planaltos a sul do baixo rio Congo, num território que hoje se reparte entre o **norte de Angola**, o oeste da **República Democrática do Congo**, a **República do Congo** e uma ponta do **Gabão**. A sua capital, **Mbanza Kongo**, ficava a cerca de 500 metros de altitude, longe da costa, e foi durante séculos o centro de um reino de províncias, de linhagens matrilineares e de um comércio ativo de tecidos de ráfia, cobre, ferro, sal e conchas-moeda.',
    'Em **1483**, o navegador português **Diogo Cão** chegou à foz do rio. Foi o início de uma relação inédita entre um reino africano e um reino europeu: troca de embaixadores, conversão do rei ao cristianismo (1491), escolas, um bispo kongo e uma correspondência diplomática entre iguais, pelo menos no discurso. Foi também o início de uma relação cada vez mais desigual, dominada pelo **tráfico de escravos**, que esvaziou regiões inteiras, alimentou guerras internas e acabou por minar o próprio reino. Depois da batalha de **Ambuíla (1665)** e de décadas de guerra civil, o Congo nunca recuperou a força de antes; ficou como uma realeza cada vez mais simbólica até ser extinta pelo domínio colonial português, em **1914**.'
  ] },
  { img: 'con-mapa-reino', leg: 'Mapa antigo do Reino do Congo e das regiões vizinhas, desenhado a partir de informações portuguesas (século XVII).' },
  { h: 'Onde ficava' },
  'O reino ocupava a região do **baixo Congo**, entre o oceano Atlântico a oeste e o rio **Kwango** a leste, e entre o rio Congo (ao norte) e o rio **Dande** ou o **Kwanza** (ao sul), com limites que variaram muito ao longo dos séculos. Era uma paisagem de planaltos ondulados, vales verdes, savana e floresta, atravessada por rios navegáveis só em troços e por duas estações bem marcadas, a das chuvas e a seca (*cacimbo*). O grande rio dava o nome ao reino e a quem o conhecia pela costa: para os portugueses, o «rio do Padrão» ou «rio Zaire» (a forma portuguesa do quicongo *nzadi*, «o rio que engole todos os rios»).',
  { img: 'con-rio-congo', leg: 'A ponte Marechal Mobutu sobre o rio Congo, junto a Matadi, no curso inferior do rio.' },
  'A capital, **Mbanza Kongo** (a «corte do Kongo»), situava-se num planalto no atual norte de Angola, na província do Zaire. Era o centro simbólico do reino, onde se escolhia e se coroava o rei, e onde os portugueses depois construíram a igreja de pedra, que deu à cidade o nome de **São Salvador do Congo**. Era também o ponto de encontro de caminhos que levavam ao porto de Mpinda (na foz do rio), ao grande mercado de **Mpumbu** (no Malebo Pool, onde hoje estão Kinshasa e Brazzaville) e às terras do interior.',
  { h: 'Quando existiu' },
  'A tradição oral conta que o reino foi fundado por um conquistador chamado **Lukeni lua Nimi**, e as datas arqueológicas e genealógicas apontam para o fim do século XIV. A cronologia a seguir é, para as fases mais antigas, uma aproximação; a partir de 1483 as fontes escritas dão datas bastante seguras.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Antes do reino', 'até c. 1390', 'Aldeias de agricultores de língua bantu, ferreiros e pequenos chefes (Mpemba Kasi, Mbata, Nsundi); circulação de cobre, sal e tecidos de ráfia'],
    ['Formação e expansão', 'c. 1390 – 1483', 'Lukeni lua Nimi e os seus sucessores unem as províncias; Mbanza Kongo torna-se capital; funcionários e tributos; o reino alarga-se'],
    ['Contacto com Portugal', '1483 – 1506/1509', 'Chegada de Diogo Cão; embaixadas; batismo de Nzinga a Nkuwu (1491) como D. João I'],
    ['Reino cristão e tráfico', '1506/1509 – 1568', 'Afonso I, escolas, bispo, cartas ao rei de Portugal; o tráfico de escravos cresce e cria conflitos'],
    ['Crises e restauro', '1568 – 1665', 'Invasão dos «Jaga» (1568); Luanda e o reino de Angola (1575); embaixada a Roma (1608); Garcia II e os holandeses; Ambuíla (1665)'],
    ['Guerra civil e fragmentação', '1665 – 1709', 'Capital abandonada; rivalidade entre casas reais; Kimpa Vita (1704–1706); regresso a Mbanza Kongo em 1709'],
    ['Declínio e fim', '1709 – 1914', 'Reis com poder limitado; fim do tráfico atlântico; domínio português crescente (1857–1859); Conferência de Berlim (1884–85); extinção da realeza em 1914']
  ] } },
  { h: 'Quem eram os bakongo?' },
  'Os **bakongo** (singular *mukongo*) são o povo de língua **quicongo** (*kikongo*), da grande família bantu. Hoje são milhões de pessoas em Angola, nas duas Repúblicas do Congo e na diáspora. A sua sociedade organizava-se em **clãs matrilineares** (*kanda*), em que a pertença e a herança passavam pela linha da mãe, e em aldeias governadas por chefes de linhagem. O reino não anulou essa estrutura: sobrepôs-lhe uma monarquia eletiva, com governadores de província e uma capital. Ao longo dos séculos, os bakongo trabalharam o ferro, o cobre e a ráfia, cultivaram mandioca (depois da chegada do milho e da mandioca americanos), inhame, banana e sorgo, e criaram uma das tradições artísticas mais reconhecidas de África.',
  { h: 'Porque importam' },
  { lista: [
    '**Um estado africano em diálogo com a Europa:** o Congo foi um dos primeiros reinos da África subsariana a trocar embaixadores com Portugal e com a Santa Sé, e a ter um bispo e padres africanos.',
    '**O custo do tráfico:** a história do Congo é um dos casos mais bem documentados de como o comércio de escravos para o Atlântico minou uma sociedade, e de como parte da elite local participou nele e dele tirou proveito, enquanto outros o combateram.',
    '**Cristianismo africano:** o catolicismo do Congo misturou-se com crenças locais durante séculos e deu origem a movimentos como o de Kimpa Vita; é um dos exemplos mais antigos de um cristianismo africano com forma própria.',
    '**Arte:** as figuras de poder *nkisi*, as esculturas funerárias, os crucifixos kongo e os têxteis de ráfia estão em museus de todo o mundo.',
    '**Política:** o rei era eleito entre candidatos de linhagens rivais, e os governadores tinham poder próprio; é um sistema de equilíbrios que ajuda a perceber as crises de sucessão.',
    '**Memória atual:** o nome «Congo» vive em dois países, num rio e numa bacia de floresta; o reino é um dos símbolos históricos mais fortes de Angola, da RDC e das comunidades bakongo.'
  ] },
  { img: 'con-mbanza-kongo-reconstrucao', leg: 'Reconstrução conjetural de Mbanza Kongo por volta de 1600. Ilustração gerada por IA.' },
  { caixa: 'O Congo hoje', texto: 'O antigo reino está dividido por três fronteiras modernas, fixadas na Conferência de Berlim (1884–85) e em tratados coloniais posteriores: **Angola** (província do Zaire e Cabinda), a **República Democrática do Congo** (Kongo Central) e a **República do Congo** (Brazzaville). Em **2017**, a UNESCO inscreveu «Mbanza Kongo, vestígios da capital do antigo Reino do Congo» na lista do Património Mundial, o primeiro sítio de Angola a entrar nela. A língua quicongo continua viva, e a história do reino é objeto de investigação ativa em Angola, em Portugal, na Europa e nos Estados Unidos.' }
];

const linha = [
  'Esta linha do tempo segue o reino desde a origem até ao fim da realeza. Para o período anterior a 1483 só temos tradições orais, recolhidas depois do contacto, e arqueologia; essas datas são muito aproximadas. As fontes escritas (cartas dos reis do Congo, relatos de portugueses, jesuítas, capuchinhos e holandeses) começam por volta de 1490 e são, em geral, escritas por europeus, pelo que têm de ser lidas com cautela.',
  { linha: [
    { d: 'c. séc. XIII – XIV', t: 'Antes do reino', x: 'Na região entre o baixo rio Congo e o Kwango vivem agricultores de língua bantu, organizados em chefaturas. Exploram o ferro e o cobre, e fabricam tecidos de ráfia. Há pequenos «reinos» como **Mpemba Kasi** (em volta do futuro Mbanza Kongo), **Mbata** e **Nsundi**. A arqueologia mostra povoamento denso do planalto desde pelo menos o século XIII.' },
    { d: 'c. 1390', t: 'Lukeni lua Nimi funda o reino', x: 'Segundo a tradição oral, **Lukeni lua Nimi**, filho de um chefe do reino de Bungu (na costa), atravessa o rio, derrota o chefe local de **Mpemba Kasi** e estabelece a sua corte em **Mbanza Kongo**. A história tem elementos de lenda (o casamento com a filha do chefe local, a «conquista do poder da terra»), e a data exata é debatida: muitos historiadores aceitam o fim do século XIV, outros o início do XV.' },
    { d: 'séc. XV', t: 'Expansão das províncias', x: 'Os sucessores de Lukeni juntam à capital as províncias de **Mbamba**, **Nsundi**, **Mbata**, **Mpangu**, **Soyo** e **Mpemba**, governadas por homens da confiança do rei ou por chefes locais que reconhecem a sua autoridade. Os tributos pagam-se em tecidos de ráfia, conchas-moeda (*nzimbu*), cobre, ferro e produtos agrícolas.' },
  ] },
  { img: 'con-lukeni-fundacao', leg: 'Cena conjetural da fundação do reino segundo a tradição oral. Ilustração gerada por IA.' },
  { img: 'con-diogo-cao-padrao', leg: 'Padrão de Diogo Cão no Cabo Negro (Angola), marco de pedra das viagens portuguesas da década de 1480.' },
  { linha: [
    { d: 'c. 1483', t: 'Diogo Cão chega ao rio', x: 'O navegador português **Diogo Cão**, em viagem de exploração da costa atlântica de África por ordem de D. João II, chega à foz do rio Congo e levanta um **padrão** (marco de pedra com as armas de Portugal). Os portugueses fazem contacto com chefes locais; Cão leva alguns congoleses para Lisboa, e regressa com eles numa segunda viagem (c. 1485–86). Os detalhes (datas, número de pessoas, se foram reféns ou convidados) são debatidos.' },
  ] },
  { img: 'con-recepcao-diogo-cao', leg: 'Cena conjetural do primeiro contacto entre portugueses e congoleses na costa, c. 1483. Ilustração gerada por IA.' },
  { img: 'con-afonso-i-gravura', leg: 'Afonso I (Mvemba a Nzinga) a ditar uma carta no seu palácio de Mbanza Kongo, c. 1520: cena imaginada, com traje que mistura elementos kongo e portugueses. Ilustração gerada por IA; não é um retrato.' },
  { linha: [
    { d: '1491', t: 'Batismo do rei Nzinga a Nkuwu', x: 'Uma missão portuguesa, com padres, artesãos e presentes, chega à foz do rio. O governador de **Soyo** é batizado em abril; a 3 de maio de 1491 é batizado o rei **Nzinga a Nkuwu**, que passa a chamar-se **João I**, juntamente com a sua família. O seu filho **Mvemba a Nzinga** recebe o nome de **Afonso**. A conversão terá tido motivos políticos (alianças, prestígio, técnicas) e religiosos, e o rei terá visto nos portugueses uma fonte de poder.' },
    { d: 'c. 1495', t: 'O rei abandona o cristianismo', x: 'Nzinga a Nkuwu afasta-se da nova religião, em parte porque a Igreja exigia a monogamia, incompatível com a política de alianças matrimoniais da nobreza. O filho Afonso, governador de Nsundi, mantém-se cristão e torna-se um dos defensores da fé entre os nobres.' },
    { d: 'c. 1506 – 1509', t: 'Afonso I chega ao poder', x: 'Depois da morte do pai, Afonso (**Afonso I**, Mvemba a Nzinga) vence em combate o meio-irmão **Mpanzu a Kitima**, que defendia a religião tradicional. A tradição, contada pelo próprio Afonso e por cronistas portugueses, fala de uma visão de Santiago e de uma cruz no céu que teria decidido a batalha; é um relato **lendário**, útil para perceber como o rei queria ser visto. A data é debatida (1506 ou 1509 nas fontes). Reina até c. 1542/43.' },
    { d: '1512', t: 'Regimento e embaixadas', x: 'Chega ao Congo uma missão portuguesa trazendo o chamado **Regimento** de D. Manuel I, um programa político e comercial que propunha ao rei congolês orientações sobre a corte, a justiça e a cobrança de impostos «à portuguesa». Afonso I aceita elementos dele, mas mantém o controlo do reino. Envia jovens nobres, entre eles o filho **Henrique**, para estudar em Lisboa.' },
    { d: 'c. 1516', t: 'Escola da corte', x: 'Segundo fontes portuguesas, a escola real de Mbanza Kongo chega a ter mais de mil alunos, filhos de nobres e de outros. Ensinam-se leitura, escrita, latim e doutrina cristã. Afonso I escreve ele próprio cartas em português aos reis de Portugal.' },
    { d: '1518', t: 'Primeiro bispo congolês', x: 'O filho de Afonso, **Henrique**, é sagrado bispo (titular de Útica) em Roma, com a aprovação do papa Leão X. Regressa ao Congo por volta de 1521 e morre c. 1531. É apontado como o primeiro bispo conhecido da África Central (antes dele houve bispos na Núbia e na Etiópia).' },
  ] },
  { img: 'con-escola-real', leg: 'Cena conjetural da escola da corte de Mbanza Kongo, c. 1516. Ilustração gerada por IA.' },
  { img: 'con-batismo-1491', leg: 'Cena conjetural do batismo do rei Nzinga a Nkuwu, 3 de maio de 1491. Ilustração gerada por IA.' },
  { img: 'con-embaixador-eckhout', leg: 'Homem africano pintado por Albert Eckhout (c. 1641), no Brasil holandês; a identificação com o Congo ou com Angola é discutida.' },
  { img: 'con-antonio-manuel-roma', leg: 'António Manuel (Nsaku ne Vunda), embaixador do Congo, no Vaticano em 1608: cena imaginada, com pormenores de traje e de guardas conjeturais. Ilustração gerada por IA; não é um retrato.' },
  { linha: [
    { d: '1526', t: 'A carta de Afonso I', x: 'Afonso I escreve a **D. João III** a denunciar que comerciantes portugueses (sobretudo de São Tomé) raptam pessoas livres e até nobres e familiares, e que o reino se «despovoa». Pede que se enviem apenas padres, professores e farmacêuticos, e que se controle o comércio. É um dos documentos mais importantes da história do tráfico de escravos. Os portugueses respondem com promessas e continuam a negociar com as províncias mais afastadas.' },
    { d: '1545 – 1561', t: 'Diogo I e os jesuítas', x: 'Depois da morte de Afonso I, e de uma curta sucessão (Pedro I), reina **Diogo I**. Em 1548 chega a primeira missão jesuíta. Diogo I tenta equilibrar a influência dos portugueses e dos padres, e as tensões com os comerciantes de São Tomé continuam.' },
    { d: '1568', t: 'Invasão dos «Jaga»', x: 'Um grupo guerreiro vindo do leste, conhecido nas fontes portuguesas como **Jaga** (ou Yaka; a identidade exata é debatida), invade o reino e saqueia Mbanza Kongo. O rei **Álvaro I** foge para uma ilha do rio e pede ajuda ao rei de Portugal. Uma expedição portuguesa chefiada por **Francisco de Gouveia Sottomaior** ajuda a restaurar o rei (1571). Em troca, o Congo fica mais dependente de Portugal.' },
    { d: '1575', t: 'Luanda e o reino de Angola', x: 'O português **Paulo Dias de Novais** funda **Luanda**, a sul do Congo, e começa a construir a colónia de Angola, apoiada em guerras contra o reino do Ndongo. O Congo perde o quase monopólio do contacto com Portugal e vê crescer um rival, que depressa se torna a grande fonte de escravos para o Brasil.' },
  ] },
  { linha: [
    { d: '1608', t: 'Embaixada a Roma', x: 'O rei **Álvaro II** envia **António Manuel (Nsaku ne Vunda)**, seu embaixador, ao papa **Paulo V**. Recebido em Roma com honras, morre na cidade em janeiro de 1608; está sepultado em Santa Maria Maior. O objetivo era obter bispos e padres sem passar por Portugal.' },
    { d: '1622 – 1624', t: 'Guerra com Angola e o primeiro livro em quicongo', x: 'O Congo e as forças portuguesas de Luanda entram em guerra por causa de comércio, de limites e de escravos (**Mbumbi**, 1622). A guerra mostra que Portugal já não considerava o Congo um parceiro de igual a igual. Em 1624 publica-se a *Doutrina Cristã* bilingue, português e quicongo, um dos primeiros livros impressos numa língua bantu.' },
    { d: '1641 – 1648', t: 'Garcia II e os holandeses', x: 'O rei **Garcia II** (Nkanga a Lukeni) alia-se aos holandeses, que ocupam **Luanda** (1641–1648), para travar a expansão portuguesa. A frota luso-brasileira de Salvador Correia de Sá retoma Luanda em 1648. Em 1645 chegam os primeiros **capuchinhos** italianos, que se instalam na corte.' },
  ] },
  { linha: [
    { d: '29 outubro 1665', t: 'Batalha de Ambuíla (Mbwila)', x: 'O rei **António I** (Nvita a Nkanga) entra em conflito com Portugal pelo controlo do território de Mbwila (Ambuíla) e envia um exército. Uma força portuguesa, comandada por **Luís Lopes de Sequeira**, com armas de fogo e aliados africanos, derrota-o. O rei é morto e a sua cabeça é levada. A coroa do Congo é perdida e não volta a ser disputada em paz.' },
    { d: '1665 – 1709', t: 'Guerra civil', x: 'Depois de Ambuíla, as linhagens reais (as casas **Kimpanzu** e **Kinlaza**, e depois outros ramos) disputam o trono. Mbanza Kongo é abandonada em 1678. O poder fragmenta-se em feudos, ou reinos concorrentes, e o tráfico de escravos aproveita-se das guerras para recrutar cativos.' },
    { d: '1704 – 1706', t: 'Kimpa Vita (Dona Beatriz)', x: 'Uma jovem nobre, **Beatriz Kimpa Vita**, afirma estar possuída por **Santo António de Pádua** e prega o regresso à capital, o fim da guerra e a restauração do reino. Diz que Jesus nasceu em Mbanza Kongo. Atrai milhares de seguidores (os **antonianos**) e inquieta o rei **Pedro IV** e os capuchinhos. É capturada e queimada como herege a 2 de julho de 1706.' },
    { d: '1709', t: 'Pedro IV regressa a Mbanza Kongo', x: 'O rei **Pedro IV** derrota os antonianos e os seus rivais e volta a ocupar a capital em fevereiro de 1709. O reino é reunificado em teoria, mas a sua força fica reduzida e o poder dos governadores provinciais continua grande.' },
  ] },
  { img: 'con-batalha-ambuila', leg: 'Cena conjetural da batalha de Ambuíla, 1665. Ilustração gerada por IA.' },
  { img: 'con-kimpa-vita-cena', leg: 'Cena conjetural da pregação de Kimpa Vita, c. 1705. Ilustração gerada por IA.' },
  { img: 'con-toni-malau', leg: 'Pequena figura de Santo António «Toni Malau», amuleto antoniano (século XVIII).' },
  { linha: [
    { d: 'séc. XVIII – XIX', t: 'Reino enfraquecido', x: 'Os reis de São Salvador, escolhidos entre as casas rivais, controlam pouco além da capital. O tráfico de escravos para o Brasil continua forte pelo litoral (portos de Loango, Cabinda, Ambriz e Boma) e passa pelas mãos de comerciantes africanos, portugueses, brasileiros e outros europeus. Portugal proíbe o tráfico em 1836, mas ele continua clandestino durante décadas.' },
    { d: '1857 – 1859', t: 'Portugal intervém na sucessão', x: 'Em 1857 morre o rei **Henrique II** e Portugal começa a intervir diretamente na escolha do rei. Em 1859, com apoio militar português, é coroado **Pedro V**, que jura **vassalagem** a Portugal, algo que nenhum rei do Congo tinha feito antes. A soberania do reino torna-se cada vez mais formal.' },
    { d: '1884 – 1885', t: 'Conferência de Berlim', x: 'As potências europeias dividem a bacia do Congo sem consultar os africanos. O antigo reino fica repartido entre Angola portuguesa, o «Estado Livre do Congo» (propriedade pessoal do rei Leopoldo II da Bélgica, depois Congo Belga) e o Congo Francês. O tratado de Simulambuco (1885) coloca Cabinda sob protetorado português.' },
    { d: '1914', t: 'Fim da realeza', x: 'Depois da revolta de **1913–1914**, liderada por **Tulante Álvaro Buta** contra o trabalho forçado e os impostos coloniais, o governo português extingue o reino e integra o território na colónia de Angola. O último rei reconhecido por Portugal, **Manuel III**, tinha reinado desde 1911. A linha de reis continua a ser reclamada por herdeiros, e o título tem hoje um papel cultural e simbólico.' }
  ] }
];

const mapa = [
  'O reino era um mosaico de **províncias**, de portos e de caminhos de comércio. Os lugares seguintes são os mais importantes. Os nomes mais antigos estão em quicongo; muitos têm hoje nomes portugueses, belgas ou franceses, e os sítios exatos de alguns são debatidos.',
  { tabela: { cab: ['Lugar', 'Onde (atual)', 'Quando / quem', 'Importância'], linhas: [
    ['Mbanza Kongo (São Salvador)', 'Província do Zaire, Angola', 'c. 1390 – 1914', 'Capital e centro simbólico; sede do rei, da corte e da igreja'],
    ['Mpinda', 'Foz do rio Congo (Soyo), Angola', 'Séc. XV – XVII', 'Principal porto do reino; chegada de portugueses e embarque de escravos'],
    ['Soyo', 'Norte de Angola', 'Séc. XV – XIX', 'Província à entrada do rio; chefe poderoso, por vezes quase independente'],
    ['Mpemba Kasi', 'Em redor de Mbanza Kongo', 'Antes de c. 1390', 'Pequeno reino conquistado por Lukeni lua Nimi'],
    ['Nsundi', 'Norte do reino, Angola e RDC', 'Séc. XV – XVII', 'Província da qual Afonso I era governador antes de ser rei'],
    ['Mbata', 'Sudeste do reino', 'Séc. XIV – XVII', 'Antigo reino anexado; fonte de guerreiros e funcionários'],
    ['Mbamba', 'Sul do reino, Angola', 'Séc. XV – XVII', 'Província militar na fronteira com o Ndongo; contacto com Luanda'],
    ['Mpangu', 'Interior, Angola', 'Séc. XV – XVII', 'Província do interior, na região do planalto central'],
    ['Mpumbu (Malebo Pool)', 'Entre Kinshasa e Brazzaville', 'Séc. XVI – XIX', 'Grande mercado do interior: ligava o reino ao alto rio'],
    ['Luanda', 'Costa de Angola', 'Fundada em 1575', 'Colónia portuguesa vizinha; origem da pressão sobre o Congo'],
    ['Loango, Cabinda e Ambriz', 'Costa a norte e a sul', 'Séc. XVI – XIX', 'Portos de embarque de escravos fora do controlo direto do rei']
  ] } },
  { img: 'con-mapa-pigafetta', leg: 'Mapa do reino do Congo na obra de Pigafetta e Lopes, 1591.' },
  { h: 'Mbanza Kongo: a capital' },
  '**Mbanza Kongo** ficava num planalto, com água e boas terras à volta, a uns 150 km da costa. Era mais um **conjunto de bairros** do que uma cidade de muralhas: o bairro do rei e da corte, o bairro dos nobres, a «cidade dos portugueses» (a partir do século XVI) e a vasta área de aldeias à volta. No século XVII, os viajantes falam de dezenas de milhares de habitantes, o que a tornava uma das maiores cidades da África Central, embora os números sejam estimativas. O lugar tinha também um valor religioso: junto à cidade havia árvores, nascentes e lugares sagrados ligados aos antepassados.',
  'Com o cristianismo, os portugueses construíram uma **igreja de pedra** (a futura catedral), um facto raro na África central e ocidental do século XVI, e a cidade ganhou o nome de **São Salvador**. No século XVII, as ruínas da catedral, das igrejas e das casas de pedra eram visíveis, e muitas ainda se veem hoje. Em 1678, a cidade foi abandonada durante a guerra civil e só foi retomada em 1709.',
  { h: 'Mpinda e o rio: o caminho para o mar' },
  'A costa era o ponto de contacto com os europeus. O porto de **Mpinda**, na foz do rio, era o ponto de chegada dos navios portugueses no século XVI. Daí os viajantes seguiam a pé ou em redes, durante dias, para Mbanza Kongo. O controlo deste porto, e depois dos que lhe sucederam, era vital para o rei e para os governadores, porque dele dependia o acesso a armas, a tecidos europeus, a vinho e, ao mesmo tempo, o escoamento de escravos.',
  { img: 'con-porto-mpinda', leg: 'Cena conjetural do porto de Mpinda, século XVI. Ilustração gerada por IA.' },
  { h: 'O mercado de Mpumbu e as rotas do interior' },
  'A leste, no **Malebo Pool**, o grande mercado de **Mpumbu** ligava o reino ao alto rio Congo e ao mundo dos Teke, dos Luba e de outros povos. Vinham de lá marfim, cobre, tecidos e, com o tempo, cativos. Os **pombeiros**, mercadores africanos itinerantes, percorriam estas rotas. O comércio fazia circular as **conchas nzimbu** (conchas de um pequeno molusco da ilha de Luanda), que serviam de moeda no reino.',
  { img: 'con-mercado-mpumbu', leg: 'Cena conjetural do mercado de Mpumbu, século XVII. Ilustração gerada por IA.' },
  { img: 'con-berlim-1885', leg: 'Caricatura de Leopoldo II e de outras potências imperiais na Conferência de Berlim, 1884–85.' },
  { h: 'Os vizinhos' },
  'O Congo não estava sozinho. A norte ficava o reino de **Loango**, também com costa e comércio; a sul, o **Ndongo** e o **Matamba** (governados, no século XVII, pela rainha **Njinga**, que resistiu aos portugueses). A leste ficavam os estados dos **Luba** (séc. XVI), **Lunda** (séc. XVII) e **Kuba** (séc. XVII), que o Congo conhecia pelo comércio. São histórias independentes, só tocadas aqui de passagem; o seu estudo exige capítulos próprios.',
  { h: 'A divisão do reino' },
  'No fim do século XIX, a Conferência de Berlim (1884–85) dividiu o território entre três potências coloniais. As fronteiras cortaram famílias, clãs e estradas, e criaram a base das atuais fronteiras de Angola, da RDC e da República do Congo.',
];

const sociedade = [
  { h: '1. Organização política' },
  'O rei, o **manicongo** (*mwene Kongo*, «senhor do Kongo»), era um monarca poderoso, mas **não absoluto**. Era escolhido por um **conselho de eleitores**, composto por dignitários da corte e das províncias, entre candidatos de linhagens nobres. Esta escolha eleitoral explica a frequência das guerras de sucessão. A herança passava pela linhagem matrilinear, mas o rei tinha de provar força e apoio.',
  'O território dividia-se em **províncias** (Mbamba, Nsundi, Mbata, Mpangu, Soyo, Mpemba), governadas por **governadores** nomeados pelo rei ou por chefes hereditários com grande autonomia. Cada província dividia-se em distritos e aldeias. Funcionários régios cobravam **tributos** em tecidos, conchas, marfim e produtos agrícolas, e aplicavam a justiça. O rei tinha também guarda pessoal, conselheiros e embaixadores. Depois de 1491, nobres aprenderam português e latim, e foram feitos títulos europeus: duques, marqueses, condes (por exemplo, o **conde de Soyo**), com funções africanas.',
  { img: 'con-corte-manicongo', leg: 'Cena conjetural da corte do manicongo, século XVI. Ilustração gerada por IA.' },
  { h: '2. Classes sociais' },
  { lista: [
    '**O rei e a corte:** o manicongo, as suas mulheres, os conselheiros e a nobreza de corte.',
    '**Nobres e governadores:** chefes de província e de linhagem; muitos recebiam títulos portugueses.',
    '**Funcionários e sacerdotes:** juízes, cobradores de tributos, ritualistas (*nganga*) e, depois de 1491, padres.',
    '**Camponeses e artesãos livres:** a grande maioria; agricultores, ferreiros, tecelões, oleiros, caçadores.',
    '**Escravos:** existiam antes da chegada dos portugueses; podiam ser prisioneiros de guerra, devedores ou condenados. Muitos eram integrados na família do dono, mas a escravatura atlântica transformou radicalmente o sistema.',
    '**Comerciantes e intermediários:** tinham uma posição cada vez mais forte, sobretudo no litoral e no interior.'
  ] },
  { h: '3. Religião' },
  'A religião tradicional bakongo dava importância a um **ser supremo** (**Nzambi Mpungu**), aos **antepassados** (*bakulu*), aos espíritos da natureza e aos **nkisi**, objetos ou entidades onde forças protetoras e curativas eram «guardadas» por um especialista (o *nganga*). A visão do mundo era a do **cosmograma kongo** (*dikenga*): um círculo com uma cruz, onde o Sol percorre os quatro momentos (nascimento, apogeu, morte, renascimento), e uma linha horizontal, o **Kalunga**, separa o mundo dos vivos do mundo dos mortos, associado à água. Esta visão facilitou a leitura local da cruz cristã.',
  { img: 'con-dikenga', leg: 'Esquema do cosmograma kongo (dikenga).' },
  'O **cristianismo** chegou em 1491. Os reis favoreceram-no, porque lhes dava ligações a Portugal e a Roma; mas o catolicismo congolês não foi uma cópia do europeu: a cruz, os santos e os sacramentos foram lidos com categorias locais, e a figura do santo (por exemplo, Santo António) aproximou-se de um *nkisi*. Houve padres africanos, igrejas, confrarias e uma Igreja local, com tensões constantes com padres portugueses e italianos. Foi neste terreno que surgiu o movimento de Kimpa Vita.',
  { tabela: { cab: ['Figura / conceito', 'Papel', 'Onde aparece'], linhas: [
    ['Nzambi Mpungu', 'Ser supremo e criador', 'Tradição oral; usado pelos missionários para «Deus»'],
    ['Bakulu', 'Antepassados protetores', 'Culto familiar; túmulos e cemitérios'],
    ['Nkisi (plural *minkisi*)', 'Objetos carregados com poder, para curar, proteger ou julgar', 'Figuras de madeira, cestos, recipientes'],
    ['Nganga', 'Especialista ritual: curandeiro, adivinho e juiz', 'Aldeias e corte'],
    ['Dikenga', 'Cosmograma: ciclo da vida e passagem entre mundos', 'Arte, rituais, símbolos'],
    ['Cruz (*nkangi kiditu*)', 'Símbolo cristão com leitura local', 'Crucifixos de latão ou madeira']
  ] } },
  { img: 'con-cruz-kongo', leg: 'Crucifixo kongo de latão, século XVII ou XVIII.' },
  { img: 'con-nkisi-nkondi', leg: 'Nkisi nkondi, figura de poder com pregos e lâminas, Kongo (museu).' },
  { h: '4. Economia' },
  'A base da economia era a **agricultura** (sorgo, inhame, banana, e, mais tarde, milho e mandioca americanos), a caça, a pesca no rio e a criação de pequenos animais. O **ferro** e o **cobre** eram trabalhados por ferreiros, que tinham um estatuto especial. Os **tecidos de ráfia** serviam de roupa, de tributo e de moeda. As **conchas nzimbu**, de um pequeno búzio da ilha de Luanda, foram a moeda do reino, controlada pelo rei até ao século XVII, quando a concorrência portuguesa e a inflação a arruinaram. O comércio levava cobre, sal, marfim, tecidos e, cada vez mais, pessoas.',
  { img: 'con-aldeia-kongo', leg: 'Cena conjetural de uma aldeia kongo com campos e casas de capim, século XVI. Ilustração gerada por IA.' },
  { img: 'con-navio-brookes', leg: 'Plano do navio negreiro Brookes, 1788, usado pelos abolicionistas (British Library).' },
  { h: '5. O tráfico de escravos' },
  'A escravatura existia no Congo antes de 1483, como em muitas sociedades do mundo, mas era de pequena escala e de integração familiar. Com a chegada dos portugueses, a **procura de mão de obra** para as plantações de açúcar de **São Tomé** e, a partir do século XVI, para o **Brasil**, criou um mercado que mudou tudo. O rei Afonso I e os seus sucessores participaram no comércio, vendendo prisioneiros de guerra, e tentaram regulá-lo; mas a procura crescente tornou-o incontrolável. Mercadores de São Tomé e de Luanda, e depois holandeses, franceses, ingleses e brasileiros, compraram cativos em todo o território, e muitos congoleses livres foram raptados.',
  'Os números são difíceis, e variam conforme as fontes. A base de dados internacional *Slave Voyages* estima que **mais de 5 milhões** de africanos embarcaram, entre os séculos XVI e XIX, na vasta região da **África Centro-Ocidental** (de Cabinda a Benguela), a maior região de partida do tráfico atlântico. Quantos vieram do reino do Congo propriamente dito é debatido, e a maioria dos cativos vinha cada vez mais do interior. O que é seguro é o efeito: despovoamento, guerras para obter cativos, insegurança e enfraquecimento do poder real.',
  { cit: 'Todos os dias os mercadores raptam os nossos nacionais, filhos da nossa terra, filhos dos nossos nobres e vassalos, e até gente da nossa família. [...] É tanta a corrupção e a depravação que o nosso país está a ficar completamente despovoado.', fonte: 'Afonso I do Congo, carta a D. João III, 6 de julho de 1526 (tradução livre, a partir da edição de A. Brásio, *Monumenta Missionaria Africana*)' },
  { caixa: 'Como ler este tema', texto: 'O tráfico foi obra de vários agentes: coroas europeias, comerciantes, intermediários africanos, e pessoas e famílias que o combateram. Não é «culpa africana» nem «culpa só europeia». O que a história mostra é como um sistema de enorme procura externa corrompeu os equilíbrios locais, e como os que o contestaram, como Afonso I, não tinham meios para o parar. As vítimas, milhões de pessoas com nome e história, são o centro do assunto.' },
  { h: '6. Escrita e línguas' },
  'O quicongo era uma língua **oral** até à chegada dos europeus; os reis comunicavam através de embaixadores, de provérbios e de uma retórica elaborada. Com a escola da corte, a nobreza passou a escrever em **português**, e há dezenas de cartas dos reis, algumas de grande valor histórico. Em 1624 surge o primeiro catecismo em quicongo. A tradição oral, os provérbios, os contos e os cantos mantiveram-se como memória do reino.',
  { h: '7. A casa e a aldeia' },
  'A casa tradicional era feita de **paus, capim e ráfia**, com telhado de duas águas, e muitas vezes rodeada de uma pequena cerca. As aldeias organizavam-se em torno de uma praça, com uma árvore e o espaço comum; cada linhagem tinha o seu bairro. Na capital, havia casas de pedra e de adobe dos portugueses e dos nobres cristãos.',
  { h: '8. Alimentação' },
  'A dieta baseava-se em **sorgo e milho miúdo**, **inhame**, **banana**, **feijões**, **óleo de palma** e **peixe**, com caça e carne de pequenos animais em ocasiões especiais. O **vinho de palma** era bebido em festas. A mandioca e o milho americanos foram introduzidos no século XVI e tornaram-se a base da alimentação.',
  { h: '9. Vestuário' },
  'O vestuário era feito de **tecidos de ráfia**: panos de cintura e de ombros, por vezes com padrões geométricos. Os nobres usavam chapéus de ráfia bordados (*mpu*), peles de animais e adornos de cobre e marfim; depois do contacto com os portugueses, apareceram tecidos europeus, veludos, chapéus e espadas.',
  { img: 'con-mpu-chapeu', leg: 'Chapéu de ráfia tecido (*mpu*), Kongo.' },
  { img: 'con-tecido-ratia', leg: 'Pano de ráfia kongo, séculos XVIII–XIX.' },
  { img: 'con-tecelagem-rafia', leg: 'Cena conjetural de tecelagem de ráfia numa aldeia kongo. Ilustração gerada por IA.' },
  { h: '10. Música e festas' },
  'A música usava **tambores**, **sinos de ferro duplos**, **xilofones**, o **arco musical** e o *sanza* (lamelofone). Havia danças ligadas a funerais, a casamentos, à investidura de chefes e a cerimónias dos *nkisi*. Os missionários falaram também do canto cristão e do órgão da catedral de São Salvador.',
  { h: '11. Ciência e tecnologia' },
  'Os bakongo tinham grande conhecimento de **plantas medicinais** e de técnicas de **metalurgia do ferro e do cobre**, com fornos de fole e moldes. O ferreiro era figura respeitada, quase sagrada. Os **tecidos de ráfia** exigiam técnicas avançadas de fibra. Os instrumentos de agricultura incluíam enxadas de ferro, machados e facas.',
  { img: 'con-ferreiro-kongo', leg: 'Cena conjetural de uma oficina de ferreiro kongo. Ilustração gerada por IA.' },
  { h: '12. Guerra' },
  'O exército era formado por **arqueiros**, **lanceiros** e guerreiros com **escudos de couro** e **espadas curtas**, comandados por governadores. A introdução de **armas de fogo** portuguesas, e depois a participação de aliados portugueses, mudou a guerra. O reino nunca teve um exército permanente comparável ao europeu e dependia de contingentes provinciais. O controlo das armas de fogo, nas mãos de portugueses e de comerciantes, foi um fator decisivo em Ambuíla.',
  { img: 'con-marfim-loango', leg: 'Presa de marfim esculpida de Loango, século XIX, com cenas do quotidiano.' },
  { img: 'con-cavazzi-gravura', leg: 'Ilustração do manuscrito de Cavazzi (c. 1668): o «peixe-mulher» (pesce donna) dos rios de Angola e do Congo.' },
  { img: 'con-mangaaka', leg: 'Nkisi nkondi Mangaaka, grande figura de poder do povo Yombe, Congo (Metropolitan Museum of Art).' },
  { img: 'con-pfemba', leg: 'Figura maternal (pfemba) do povo Kongo, República Democrática do Congo (Honolulu Museum of Art).' },
];

const personalidades = [
  'As fontes do Congo mostram sobretudo reis, nobres e missionários, porque foi quem escreveu ou foi descrito por escrito. A maioria dos congoleses, incluindo as mulheres e os cativos, deixou poucos registos diretos. As figuras seguintes são reais, exceto quando se diz o contrário.',
  { h: 'Lukeni lua Nimi (fundador, c. 1390) — tradição oral' },
  'O fundador do reino, segundo a tradição oral. Filho de um chefe da costa, terá conquistado Mpemba Kasi e fundado Mbanza Kongo. A sua figura mistura facto e lenda, e muitas versões o apresentam como um herói civilizador. É um personagem **semi-lendário**.',
  { h: 'Nzinga a Nkuwu — D. João I (reinou c. 1470 – 1509)' },
  'O rei que recebeu os portugueses e foi batizado em 1491. Procurou nos recém-chegados técnicas, prestígio e aliados, mas rejeitou a monogamia e abandonou o cristianismo por volta de 1495. Morreu em 1509 (data debatida).',
  { h: 'Nzinga a Nlaza — D. Leonor' },
  'Mãe de Afonso I e rainha. Batizada em 1491, foi decisiva no apoio ao filho na luta pelo poder, e ajudou a sustentar a nova religião entre as mulheres da corte. Mostra o peso das mulheres nobres na política do Congo.',
  { h: 'Afonso I — Mvemba a Nzinga (reinou c. 1506/1509 – c. 1542/43)' },
  'O mais importante rei do Congo. Cristão convicto, modernizou a corte e as escolas, escreveu a reis e a papas, e apoiou o filho Henrique como bispo. Foi ao mesmo tempo um conquistador, que participou em guerras e no comércio de cativos, e o primeiro a denunciar por escrito, em 1526, os horrores do tráfico. As suas cartas são das fontes mais ricas de toda a história da África subsariana.',
  { h: 'D. Henrique (m. c. 1531)' },
  'Filho de Afonso I, estudou em Lisboa e foi sagrado bispo em 1518 (titular de Útica), regressando ao Congo por volta de 1521. A sua carreira mostra o esforço do reino para ter clero próprio; morreu por volta de 1531.',
  { h: 'Diogo I (reinou 1545 – 1561)' },
  'Reinou depois de Afonso I e de Pedro I. Tentou equilibrar as influências portuguesas e jesuítas, recebeu a primeira missão da Companhia de Jesus (1548) e defendeu a autonomia do reino. A sua época foi de tensão crescente com os comerciantes de São Tomé.',
  { h: 'Álvaro I (reinou 1568 – 1587)' },
  'Rei que enfrentou a invasão dos «Jaga», fugiu da capital e pediu auxílio a Portugal. Restaurado com ajuda militar portuguesa (1571), reinou com cautela e ficou mais dependente do rei de Portugal.',
  { h: 'António Manuel — Nsaku ne Vunda (m. 1608)' },
  'Nobre congolês, embaixador do Congo junto do papa **Paulo V**. Fez uma longa viagem por Portugal e Espanha até Roma, onde foi recebido com grandes honras; morreu na cidade em 1608 e foi sepultado em Santa Maria Maior. É o símbolo da ambição diplomática do reino.',
  { h: 'Garcia II — Nkanga a Lukeni (reinou 1641 – 1661)' },
  'Rei hábil e longevo no poder, tentou reforçar o reino aliando-se aos holandeses contra os portugueses. Depois da sua morte, os conflitos de sucessão recomeçaram.',
  { h: 'António I — Nvita a Nkanga (reinou 1661 – 1665)' },
  'Rei morto na batalha de **Ambuíla**, em 1665, em luta contra uma força portuguesa. A sua morte desencadeou a guerra civil e é considerada o fim do Congo como grande potência.',
  { h: 'Beatriz Kimpa Vita (c. 1684 – 1706)' },
  'Jovem nobre, curandeira e profetisa. Afirmou ser possuída por Santo António e apelou à reunificação do reino e à regressão à capital. Os capuchinhos e o rei Pedro IV viram nela uma ameaça e queimaram-na por heresia, a 2 de julho de 1706. É hoje uma figura de identidade e de resistência no Congo e em Angola, e a sua história é objeto de livros, de peças de teatro e de estudos.',
  { h: 'Pedro IV (reinou c. 1696 – 1718)' },
  'Rei que reunificou o reino em 1709, depois de décadas de guerra civil, e voltou a ocupar a capital. Reinou com apoio dos capuchinhos e foi responsável pela execução de Kimpa Vita.',
  { h: 'Cavazzi e outros cronistas' },
  'O que sabemos do Congo vem em grande parte de **cronistas europeus**, como o padre italiano **Giovanni Antonio Cavazzi da Montecuccolo**, cujas ilustrações e relatos do século XVII são uma fonte preciosa, mas com o olhar de um missionário.',
];

const legado = [
  { h: 'O que o Congo deixou' },
  { lista: [
    '**Um modelo de diplomacia africana:** cartas, embaixadas e correspondência com Portugal, Roma e os Países Baixos.',
    '**A memória do tráfico:** a carta de 1526 de Afonso I é um dos textos mais citados sobre a escravatura atlântica.',
    '**Um cristianismo africano:** a Igreja do Congo, com padres, bispos e movimentos próprios, é uma das mais antigas da África subsariana.',
    '**Uma língua:** o quicongo, falado por milhões, e que deu origem a palavras e a tradições nas Américas (Brasil, Caraíbas, Estados Unidos).',
    '**A diáspora:** muitos cativos congoleses levaram para o Brasil, Cuba e outras regiões as suas crenças, as suas músicas e as suas palavras, e a sua marca está na cultura afro-brasileira e afro-caribenha.'
  ] },
  { h: 'Arte' },
  'A arte kongo é famosa pelas **figuras de poder (*nkisi*)**, esculturas de madeira que recebem substâncias ativas e, em alguns casos, pregos e lâminas, cada um para selar um juramento ou punir um crime. A figura *nkisi nkondi*, por exemplo, era «ativada» por um *nganga*. Há também **esculturas funerárias de pedra (*ntadi*)** de Mboma e Yombe, **estatuetas maternais (*phemba*)**, **crucifixos de latão**, **chapéus e panos de ráfia**, **marfins esculpidos** em Loango e **cestaria**.',
  { h: 'Arquitetura' },
  'A arquitetura kongo tradicional era de materiais perecíveis, o que explica a escassez de ruínas. Os edifícios de pedra de Mbanza Kongo (igrejas, a catedral) são resultado do contacto com Portugal. A UNESCO protege o conjunto, incluindo lugares sagrados tradicionais, como árvores e nascentes.',
  { h: 'Redescoberta' },
  'Durante o período colonial, o Congo foi estudado sobretudo por missionários e administradores. Desde os anos 1960–70, historiadores como **Jan Vansina**, **John Thornton** e **Anne Hilton**, e investigadores africanos, reconstruíram a sua história a partir de fontes portuguesas, italianas, holandesas e orais. As escavações recentes em Mbanza Kongo têm trazido novos dados sobre a cidade e a sua cronologia.',
  { h: 'Os vizinhos: Luba e Kuba, de relance' },
  'A África Central teve outras tradições artísticas e políticas poderosas. Os **Luba** criaram a *lukasa* (tabuleiro de memória) e os **Kuba**, famosos pelos seus tecidos de ráfia bordada, são vizinhos distantes do Congo. Fazem parte do mesmo mundo cultural, mas são histórias próprias.',
  { img: 'con-luba-lukasa', leg: 'Lukasa luba, tabuleiro de memória com contas e conchas.' },
  { img: 'con-kuba-tecido', leg: 'Pano de ráfia bordado do povo Kuba (RDC).' },
  { h: 'Onde visitar' },
  { lista: [
    '**Mbanza Kongo, Angola:** as ruínas e o museu dos reis do Congo, Património Mundial.',
    '**Museu Nacional de Antropologia, Luanda:** peças de arte kongo.',
    '**Museu Real da África Central (Tervuren, Bélgica):** uma das maiores coleções do mundo.',
    '**British Museum e Quai Branly (Paris), Metropolitan Museum (Nova Iorque):** esculturas e crucifixos.',
    '**Lisboa:** Arquivo Nacional da Torre do Tombo (cartas dos reis do Congo) e Sociedade de Geografia.',
    '**Santa Maria Maior, Roma:** memória de António Manuel.'
  ] },
  { caixa: 'Uma nota de cuidado', texto: 'A história do Congo é contada, em grande parte, por quem o dominou. Muitas das datas e dos números deste capítulo vêm de fontes portuguesas, italianas ou holandesas, e os historiadores continuam a discutir o que é facto, o que é interpretação e o que é lenda. Sempre que assim for, o texto di-lo.' }
];

const quiz = [
  { p: 'Quem, segundo a tradição oral, fundou o Reino do Congo por volta de 1390?', op: ['Nzinga a Nkuwu', 'Lukeni lua Nimi', 'Afonso I', 'Pedro IV'], certa: 1, exp: 'Lukeni lua Nimi é o fundador semi-lendário; a data exata é debatida.' },
  { p: 'Como se chamava a capital do reino?', op: ['Luanda', 'Mbanza Kongo', 'Mpinda', 'Loango'], certa: 1, exp: 'Mbanza Kongo, depois chamada São Salvador do Congo.' },
  { p: 'Que navegador português chegou à foz do rio Congo c. 1483?', op: ['Bartolomeu Dias', 'Vasco da Gama', 'Diogo Cão', 'Pedro Álvares Cabral'], certa: 2, exp: 'Diogo Cão ergueu um padrão e levou alguns congoleses para Lisboa.' },
  { p: 'Em que ano foi batizado o rei Nzinga a Nkuwu, como D. João I?', op: ['1391', '1491', '1591', '1691'], certa: 1, exp: 'Foi batizado a 3 de maio de 1491.' },
  { p: 'Que rei do Congo escreveu ao rei de Portugal, em 1526, a denunciar o tráfico de escravos?', op: ['Afonso I', 'Garcia II', 'Álvaro I', 'Pedro V'], certa: 0, exp: 'Afonso I disse a D. João III que o seu reino estava a ficar despovoado.' },
  { p: 'Quem foi o primeiro bispo congolês, sagrado em 1518?', op: ['António Manuel', 'D. Henrique', 'Diogo I', 'Pedro IV'], certa: 1, exp: 'Henrique, filho de Afonso I, foi bispo titular de Útica.' },
  { p: 'O que eram as conchas «nzimbu»?', op: ['Joias', 'Moeda do reino', 'Instrumentos musicais', 'Armas'], certa: 1, exp: 'Eram pequenas conchas da ilha de Luanda, usadas como moeda.' },
  { p: 'Que povo ou grupo invadiu o Congo em 1568?', op: ['Os Zulus', 'Os Jaga', 'Os mongóis', 'Os holandeses'], certa: 1, exp: 'Os «Jaga» saquearam a capital; a identidade exata é debatida.' },
  { p: 'Quem foi o embaixador do Congo recebido pelo papa Paulo V em 1608?', op: ['António Manuel (Nsaku ne Vunda)', 'Kimpa Vita', 'Garcia II', 'Mpanzu a Kitima'], certa: 0, exp: 'Morreu em Roma, em 1608, e está sepultado em Santa Maria Maior.' },
  { p: 'Que potência europeia, além de Portugal, ocupou Luanda em 1641–1648?', op: ['Inglaterra', 'França', 'Países Baixos', 'Espanha'], certa: 2, exp: 'Garcia II aliou-se aos holandeses contra Portugal.' },
  { p: 'O que aconteceu na batalha de Ambuíla, em 1665?', op: ['O Congo venceu Portugal', 'O rei António I foi morto', 'Mbanza Kongo foi fundada', 'O tráfico foi proibido'], certa: 1, exp: 'Uma força portuguesa derrotou o exército congolês; o rei morreu.' },
  { p: 'Quem foi Kimpa Vita?', op: ['Um rei', 'Uma profetisa que dizia ser possuída por Santo António', 'Um navegador', 'Uma rainha do Ndongo'], certa: 1, exp: 'Foi queimada como herege a 2 de julho de 1706.' },
  { p: 'O que é o «dikenga»?', op: ['Um tipo de tecido', 'O cosmograma kongo', 'Um instrumento', 'Um tratado'], certa: 1, exp: 'É um círculo com uma cruz que representa o ciclo da vida e a passagem entre mundos.' },
  { p: 'Em que ano a UNESCO inscreveu Mbanza Kongo no Património Mundial?', op: ['1992', '2005', '2017', '2023'], certa: 2, exp: 'Foi o primeiro sítio de Angola na lista.' },
  { p: 'Quando acabou formalmente a realeza do Congo?', op: ['1665', '1885', '1914', '1975'], certa: 2, exp: 'Depois da revolta de 1913–14, Portugal extinguiu o reino.' }
];

export default {
  id: 'congo',
  cor: '#a07a3a',
  emblema: '../assets/img/congo.png',
  nome:    { pt: 'Reino do Congo', en: 'Kingdom of Kongo' },
  periodo: { pt: 'c. 1390 – 1914', en: 'c. 1390 – 1914' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
