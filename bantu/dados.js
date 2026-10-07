// POVOS BANTU (EXPANSÃO BANTU) — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Nota de método: «bantu» designa uma família de LÍNGUAS (e, por extensão, os povos que as falam), não uma «raça» nem um estado. Não há um «império bantu»: é a história de uma expansão de línguas, de agricultores, de criadores de gado e de ferreiros, ao longo de milhares de anos. Quase tudo o que sabemos vem da linguística comparada, da arqueologia e, mais recentemente, da genética; as datas são aproximadas e muito debatidas. a.C./d.C.
// Imagens: cada {img:'id'} procura o ficheiro  bantu/img/id.jpg  (ver IMAGENS_BANTU.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'Os **povos bantu** não foram um estado nem um império: foram o resultado de uma das maiores expansões humanas da história de África. A partir de uma região de origem situada, segundo a maioria dos especialistas, no **sudoeste dos Camarões e no leste da Nigéria** (a zona dos *Grassfields* e do rio Cross), comunidades que falavam línguas aparentadas, e que juntavam a pesca, a agricultura, a olaria e, mais tarde, o **ferro**, espalharam-se ao longo de milénios pela África equatorial, oriental e austral. Hoje há **entre cerca de 440 e 680 línguas bantu** (o número depende de como se distingue língua de dialeto), faladas por mais de **350 milhões de pessoas**, perto de um terço da população africana.',
    'O processo foi **lento, irregular e feito de muitos movimentos pequenos**, e não uma «migração» única de um povo em marcha: houve famílias que avançaram, grupos que ficaram, casamentos e trocas com os caçadores-recoletores e com agricultores já instalados, línguas que se adotaram e línguas que se perderam. A cronologia, as rotas e as causas continuam a ser **debatidas** entre linguistas, arqueólogos e geneticistas, e este capítulo diz sempre quando se trata de hipótese. O que ninguém discute é o resultado: as línguas bantu são a herança comum de grande parte de África, do Camarões ao Quénia e daí até ao Cabo, e as civilizações que estudamos noutras páginas deste projeto (**Congo**, **Grande Zimbabué**, **costa suaíli**) nasceram de populações de língua bantu.'
  ] },
  { img: 'ban-mapa-expansao', leg: 'Mapa esquemático da expansão bantu; as rotas e as datas são hipóteses e variam de autor para autor.' },
  { img: 'ban-camaroes-monte', leg: 'O monte Camarões (Fako), vulcão no sudoeste dos Camarões, na região geral onde se situa a origem das línguas bantu.' },
  { h: 'Onde ficava' },
  'Não há uma «terra bantu» fixa: o espaço histórico é toda a metade sul do continente. O **berço** (a região onde se terá falado o proto-bantu, a língua-mãe reconstruída pelos linguistas) situa-se na fronteira entre o **sudeste da Nigéria** e o **sudoeste dos Camarões**: planaltos de pastagens e floresta, com vales férteis e vulcões, cortados por rios que correm para o golfo da Guiné e, mais a sul, para o Congo. A localização exata é uma hipótese, apoiada no facto de ser ali que se encontram os ramos mais antigos e diversos da família a que o bantu pertence.',
  'A partir daí, o mapa da expansão tem duas grandes massas: a **floresta equatorial** da bacia do Congo (Gabão, Congo, República Democrática do Congo), e as **savanas e matas de miombo** da África oriental e austral, atravessadas por lagos, rios e planaltos. Houve ainda uma terceira dimensão, a do tempo: muitas das regiões onde hoje se fala bantu só foram atingidas ao fim de séculos, e algumas (o Quénia litoral, o Natal, o vale do Limpopo) só nos primeiros séculos da nossa era.',
  { h: 'Quando existiu' },
  'Pelas estimativas linguísticas, o proto-bantu começou a distinguir-se das línguas vizinhas há **cerca de 6000 a 4000 anos** (c. 4000 – 2000 a.C., conforme o estudo); as primeiras dispersões e o ferro mais seguro vêm a partir do 1.º milénio a.C.; e a expansão principal estende-se, grosso modo, até ao 1.º milénio d.C. O limite final deste capítulo é c. 1000 d.C., mas o «legado» chega, claro, aos nossos dias. As datas abaixo são aproximadas, e várias delas (sobretudo as mais antigas) são hipóteses.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Origens', 'c. 3000 – 1000 a.C.', 'Proto-bantu no sudoeste dos Camarões e leste da Nigéria; pesca, inhame, palmeira-de-dendê, olaria; primeiras dispersões (muito discretas na arqueologia)'],
    ['Ferro e primeiras dispersões', 'c. 1000 a.C. – 0', 'Ferro na África ocidental e central (Nok, em contexto, e outros focos); aldeias na floresta; Urewe nos Grandes Lagos (c. 500 a.C.)'],
    ['Expansão principal', 'c. 500 a.C. – 500 d.C.', 'Corredor de savana, Grandes Lagos, costa oriental (Kwale), África austral (c. 200 – 400 d.C.); ferro e, em muitas regiões, cereais e gado'],
    ['Consolidação', 'c. 500 – 1000 d.C.', 'Colapso demográfico na floresta (c. 400 – 600); diversificação regional; chefaturas e comércio com o Índico; Idade do Ferro Tardia'],
    ['Estados e legado', 'c. 1000 d.C. em diante', 'Mapungubwe e, com página própria, Grande Zimbabué, Congo e cidades-estado suaílis; línguas e culturas bantu atuais']
  ] } },
  { img: 'ban-esquema-rotas', leg: 'Esquema simplificado das duas grandes rotas da expansão bantu, pela floresta equatorial e pelas savanas do leste e do sul. Mapa gerado por IA. (Imagem ilustrativa gerada por IA.)' },
  { h: 'Quem eram os povos bantu?' },
  'A palavra **bantu** foi proposta em meados do século XIX pelo filólogo alemão **Wilhelm Bleek**, que reparou que muitas línguas da África meridional formavam o plural das pessoas com o prefixo *ba-* sobre uma raiz *-ntu*, «pessoa»: *ba-ntu*, «as pessoas». É, portanto, um **termo linguístico**: falar uma língua bantu não faz de ninguém membro de uma «raça» ou de um «povo» único. Os falantes de línguas bantu têm histórias, ancestralidades, religiões e organizações políticas muito diferentes: de caçadores da floresta que falam bantu a reis de savana, de pescadores do litoral a criadores de gado do planalto.',
  'Em termos de **parentesco linguístico**, o bantu é um subgrupo gigantesco da família **Níger-Congo** (a maior família linguística do mundo em número de línguas), mais precisamente do ramo **Benue-Congo**, e dentro dele da zona **bantoide**, de que fazem parte línguas ainda faladas no Camarões e na Nigéria. Isto quer dizer que as línguas bantu são **primas** de línguas como o ioruba, o igbo ou o efik, com quem partilham uma origem remota, e não do árabe nem do amárico, do hauçá ou das línguas khoe e san (os «cliques» de algumas línguas bantu austrais, como o zulu e o xhosa, foram emprestados dessas últimas).',
  { img: 'ban-mapa-niger-congo', leg: 'Mapa das línguas Níger-Congo; a subfamília bantu é o ramo que se estende do Camarões ao sul do continente.' },
  { h: 'Porque importam' },
  { lista: [
    '**A maior dispersão linguística de África:** línguas aparentadas, do suaíli ao zulu, do quicongo ao shona, que se falam em cerca de 30 países.',
    '**A difusão do ferro e da agricultura:** as comunidades bantu levaram (ou adotaram e difundiram) o ferro, a olaria, culturas e criação de animais a zonas vastas; foi uma das grandes revoluções da economia africana.',
    '**Um laboratório para a ciência:** poucos casos na história humana permitem cruzar tão bem **linguística, arqueologia e genética**, e discutir como se espalha uma língua e quem a leva.',
    '**Base de grandes estados:** o Congo, o Grande Zimbabué, Mapungubwe, os reinos dos Grandes Lagos, as cidades suaílis e outros nasceram de sociedades de língua bantu.',
    '**Uma lição de rigor:** o tema foi muitas vezes tratado com preconceito (ver abaixo), e o estudo moderno mostra como é diferente a história real, mais complexa, mais lenta e mais pacífica do que se imaginava.',
    '**Uma herança viva:** línguas, ritmos, provérbios e palavras que chegaram também às Américas e ao português, sobretudo pelo tráfico atlântico de escravos.'
  ] },
  { img: 'ban-aldeia-floresta', leg: 'Aldeia de agricultores e pescadores numa clareira da floresta equatorial, c. 500 a.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { caixa: 'Os bantu hoje', texto: 'As línguas bantu são faladas em quase toda a África subequatorial, em países como a **República Democrática do Congo**, **Angola**, **Moçambique**, **Tanzânia**, **Quénia**, **Uganda**, **Zâmbia**, **Zimbabué**, **África do Sul**, **Gabão**, **Camarões**, entre muitos outros. O **suaíli**, o **lingala**, o **zulu**, o **xhosa**, o **shona**, o **quicongo**, o **quimbundo**, o **umbundo**, o **chewa**, o **quiniaruanda** e o **ganda** são só algumas das línguas maiores. Em português, há muitas palavras de origem bantu (sobretudo do quimbundo e do quicongo), como *fubá*, *caçula*, *quitanda* ou *quilombo*. O termo «bantu» tem, em certos contextos (sobretudo na África do Sul), uma carga histórica pesada; ver a «nota de cuidado» no fim.' }
];

const linha = [
  'Esta linha do tempo segue a expansão desde a região de origem até à Idade do Ferro Tardia. Não há reis nem batalhas datadas: as datas vêm de **radiocarbono** (sobretudo de carvões e sementes), de **cerâmicas** e de **estimativas linguísticas**, com margens de erro de séculos. Quando se trata de hipótese ou de resultado discutido, o texto di-lo. Os últimos pontos remetem para civilizações que têm páginas próprias.',
  { linha: [
    { d: 'c. 6000 a.C. e antes', t: 'Shum Laka e as línguas Níger-Congo', x: 'A família **Níger-Congo** é muito antiga (há estimativas de cerca de 10 000 anos, debatidas) e tem os seus ramos mais diversos na África ocidental. No abrigo rochoso de **Shum Laka**, nos Grassfields dos Camarões, há ocupação humana durante dezenas de milhares de anos e **cerâmica** com milénios de antiguidade. Em 2020, o ADN de quatro crianças ali enterradas (c. 8000 e c. 3000 anos atrás) mostrou que eram de uma população **não ancestral** dos falantes de bantu atuais: o berço geográfico das línguas não é, pois, o berço genético de todos os que as falam.' },
    { d: 'c. 4000 – 2000 a.C. (estimativa)', t: 'Nasce o proto-bantu', x: 'As árvores genealógicas de línguas construídas com métodos estatísticos (**Grollemund** e colegas, 2015; **Koile** e colegas, 2022) situam a raiz da família bantu há cerca de **6000 a 4000 anos** (as estimativas variam de estudo para estudo), na zona de fronteira entre o **sudeste da Nigéria** e o **sudoeste dos Camarões**. O vocabulário que os linguistas conseguem reconstruir mostra pesca, canoas, **inhame**, **feijão-frade**, **amendoim-bambara**, **cabras**, olaria e a **palmeira-de-dendê**: sociedades de aldeia, com recolha, pesca e cultivos ainda pequenos.' },
    { d: 'c. 2000 a.C. (proposta controversa)', t: 'Ferro «muito» antigo?', x: 'Alguns autores propõem datas de ferro de c. 2000 a.C. em **Lejja** (Nigéria) e em **Oboui** (República Centro-Africana). A maior parte dos arqueólogos tem dúvidas sobre essas datas (por causa da possível contaminação das amostras de carvão e da ligação duvidosa entre amostra e fundição). O consenso mais comum aceita ferro seguro a partir de c. **800 – 500 a.C.** em várias zonas da África ocidental e central. Se foi invenção local ou se chegou do norte é também debatido.' },
    { d: 'c. 1000 – 400 a.C. (debatido)', t: 'Bananas em Nkang?', x: 'Em **Nkang**, no Camarões central, foram identificados **fitólitos** (microfósseis vegetais) de banana numa camada atribuída a este período. Se a identificação e a datação estão certas, a banana, uma planta de origem asiática, estaria em África já no 1.º milénio a.C. Mas as duas coisas são **contestadas**: há quem pense que os fitólitos descem de camadas mais recentes, e não há consenso. Seja como for, a banana tornou-se, mais tarde, um alimento central em grande parte da África equatorial e dos Grandes Lagos.' },
    { d: 'c. 600 a.C.', t: 'Colonos nos rios da floresta', x: 'Em sítios do Camarões e do Gabão aparecem comunidades com **cerâmica**, grandes lâminas e machados polidos, pelo menos desde c. 600 a.C., ao longo dos rios que descem para o Congo e para o Atlântico. Os povoados são pequenos e espalhados, e a arqueologia da floresta é difícil (solos ácidos, vegetação densa, poucas escavações), por isso **o início da expansão é a parte menos conhecida**.' },
  ] },
  { img: 'ban-canoa-rio', leg: 'Canoas a descer um rio da floresta equatorial; reconstituição conjetural. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 800 – 500 a.C.', t: 'O ferro, e a cultura Nok (contexto)', x: 'No centro da Nigéria, a cultura **Nok** (c. 1500 a.C. – 1 d.C.; ver a página da **Cultura Nok**) produziu as mais antigas esculturas de terracota da África subsariana e conheceu a **metalurgia do ferro**. Fica a várias centenas de quilómetros a norte da região de origem das línguas bantu, e a língua falada pelos Nok é desconhecida. **Não há prova de uma ligação direta** entre os Nok e os falantes de bantu; o que se pode dizer é que, na mesma altura e na mesma região da África, vários grupos adotavam o ferro, e que foi neste ambiente que o ferro começou a chegar às comunidades da floresta.' },
  ] },
  { img: 'ban-nok-cabeca', leg: 'Escultura de terracota da cultura Nok, Nigéria (c. 900 a.C. – c. 200 d.C.; a datação de cada peça é incerta). Aqui, só como contexto.' },
  { linha: [
    { d: 'c. 600 – 500 a.C.', t: 'Urewe e o ferro dos Grandes Lagos', x: 'Na região do **lago Vitória** (Tanzânia, Uganda, Ruanda, Burundi, leste do Congo) surge a **tradição Urewe**: cerâmica decorada com fossetas e linhas concêntricas, aldeias de agricultores e criadores de gado, e **fornos de ferro** de argila, em forma de cone sobre uma bacia, por vezes decorados. As comunidades de Urewe falavam uma língua bantu antiga, o proto-bantu dos Grandes Lagos. A tradição dura até c. 500 d.C. e, em alguns sítios, muito mais.' },
    { d: 'c. 500 a.C. – 500 d.C.', t: 'Os fornos de ferro de Buhaya', x: 'Na região de **Buhaya**, a oeste do lago Vitória (Tanzânia), os arqueólogos **Peter Schmidt** e **Donald Avery** estudaram, nos anos 1970, fornos de argila que, segundo eles, chegavam a temperaturas elevadas, com ar pré-aquecido, e produziam **aço de carbono**. A interpretação é discutida, e há quem a considere exagerada, mas o conjunto mostra uma metalurgia desenvolvida e original, muito antes do contacto com a Europa.' },
  ] },
  { img: 'ban-forno-ferro', leg: 'Fundição de ferro num forno de argila, Grandes Lagos, c. 300 a.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'ban-bloomery', leg: 'Tipos de fornos africanos de redução direta do ferro, do Burquina Faso à África do Sul (esquema moderno).' },
  { linha: [
    { d: 'c. 500 – 0 a.C.', t: 'A floresta abre-se: o corredor de savana', x: 'Dados de pólen e de sedimentos de lagos sugerem que, c. **2500 a 2000 anos atrás**, a floresta equatorial sofreu uma perturbação, com a abertura de uma faixa de savana (o chamado **Intervalo do Sangha**, entre o Camarões e o Congo). A hipótese de **Koen Bostoen** e colegas (2015) é que esta faixa de savana facilitou a passagem de populações para sul e para leste. Mas os estudos genéticos e linguísticos mais recentes (Koile, 2022; Fortes-Lima, 2024) sugerem que a floresta foi atravessada **primeiro**, e as savanas só depois. A discussão está aberta.' },
    { d: 'c. 300 a.C. – 500 d.C.', t: 'Encontros com os caçadores-recoletores', x: 'Em todo o percurso, os agricultores de língua bantu encontraram **caçadores-recoletores** (na floresta, os povos hoje chamados Twa, Aka, Baka e Mbuti; na savana, ancestrais de grupos khoe e san). Em muitas regiões houve convivência de séculos, trocas de mel, carne, ferro e cerâmica, casamentos e adoção de palavras. A genética mostra misturas, sobretudo de **mulheres** dos grupos locais com homens bantu, e as línguas, empréstimos (os cliques das línguas nguni são o exemplo mais conhecido). A ideia de que os bantu «varreram» os caçadores é, em grande parte, um **mito**.' },
  ] },
  { img: 'ban-encontro-cacadores', leg: 'Encontro entre agricultores de língua bantu e caçadores-recoletores, c. 100 d.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { linha: [
    { d: 'séc. I – IV d.C.', t: 'Zâmbia, Malawi e o interior', x: 'Comunidades de ferro e cerâmica «do 1.º milénio» (da chamada tradição **Chifumbaze**, na terminologia do arqueólogo David Phillipson) aparecem na Zâmbia, no Malawi e nas terras entre o Zambeze e o Limpopo. O sítio de **Kalambo Falls**, na fronteira da Zâmbia com a Tanzânia, tem uma sequência arqueológica de centenas de milhares de anos, que inclui estes agricultores do ferro.' },
  ] },
  { img: 'ban-kalambo', leg: 'As cataratas de Kalambo, na fronteira entre a Zâmbia e a Tanzânia; o sítio tem uma das mais longas sequências arqueológicas de África, incluindo níveis da Idade do Ferro.' },
  { linha: [
    { d: 'c. séc. II d.C.', t: 'A costa oriental: Kwale e Matola', x: 'Na costa do Quénia, da Tanzânia e de Moçambique espalha-se uma cerâmica de tipo **Kwale** e **Matola**, ligada a comunidades de agricultores e ferreiros de língua bantu, que seguiram a faixa litoral para sul. O avanço foi rápido: bastaram, segundo alguns estudos, **menos de mil anos** para que falantes do ramo oriental chegassem ao sul do continente.' },
    { d: 'c. 200 – 400 d.C.', t: 'O sul: Natal e Limpopo', x: 'Cerâmicas da tradição Kwale aparecem em sítios do **KwaZulu-Natal** (África do Sul) por volta de **200 – 300 d.C.**, e a tradição **Kalundu** (c. 400 d.C.) estende-se ao interior. Os primeiros agricultores do ferro ocupam sobretudo zonas húmidas e de solos bons, junto à costa e nos vales dos rios. Dizer, como se fez durante décadas na África do Sul, que os bantu chegaram «ao mesmo tempo» que os brancos é, portanto, falso: a presença bantu na região tem mais de 1500 anos.' },
    { d: 'séc. III – VII d.C.', t: 'O planalto do Zimbabué', x: 'No planalto entre o Zambeze e o Limpopo, comunidades da tradição **Gokomere** praticam agricultura, criação de gado e metalurgia do ferro. É o terreno em que, séculos mais tarde, nascerão Mapungubwe e o Grande Zimbabué (ver a página do **Grande Zimbabué**).' },
    { d: 'c. 400 – 600 d.C.', t: 'Colapso na floresta equatorial', x: 'Um estudo de 2021 (**Seidensticker** e colegas), baseado em centenas de datas de radiocarbono do oeste da África Central, aponta uma **forte quebra da atividade humana** na floresta entre c. **400 e 600 d.C.**, seguida de cerca de 400 anos de ocupação mínima, até uma recuperação c. 1000 d.C. Segundo os autores, as primeiras comunidades de agricultores do ferro terão em grande parte desaparecido, e as populações atuais descenderiam de **grupos que chegaram depois**. As causas (epidemia? alteração do clima? as duas?) são discutidas, e a interpretação é muito debatida.' },
    { d: 'c. 500 – 700 d.C. (datação debatida)', t: 'As cabeças de Lydenburg', x: 'Em 1957 foram descobertas em **Lydenburg** (Mpumalanga, África do Sul) sete cabeças de **terracota**, ocas, com cerca de 25 a 38 cm de altura, associadas a uma comunidade de agricultores do ferro. Datam, grosso modo, do século VI-VII d.C. A sua função é discutida; uma hipótese é que serviam em rituais de iniciação. São das esculturas mais antigas da África austral e mostram uma arte própria já nas primeiras comunidades do sul.' },
    { d: 'séc. VII – X d.C.', t: 'A Idade do Ferro Tardia', x: 'A cerâmica e as formas de vida diversificam-se por região. Em muitas zonas ganham peso os **cereais** (sorgo e milheto) e o **gado**, e surgem **chefaturas** maiores. No Botsuana, **Toutswe** e **Bosutswe** (a partir de c. 700 d.C.) são centros com gado e estruturas de pedra. O comércio com a costa do Índico aumenta: contas de vidro, tecidos e marfim.' },
    { d: 'séc. VIII – XV d.C.', t: 'Cidades suaílis (referência cruzada)', x: 'Ao longo da costa oriental, comunidades de língua bantu em contacto intenso com comerciantes do Índico formam as cidades da **costa suaíli** (Kilwa, Mombaça, Lamu, Zanzibar e outras). O suaíli é uma língua bantu, com muitas palavras emprestadas do árabe. Tem página própria: ver **Cidades-Estado Suaílis**.' },
    { d: 'c. 1000 – 1300 d.C.', t: 'K2 e Mapungubwe', x: 'No vale do Limpopo, a aldeia de **K2** e depois a colina de **Mapungubwe** (c. 1220 – 1290) revelam uma elite de língua bantu com ouro, marfim e contas de vidro vindas do Índico. Entre as peças mais conhecidas está o **rinoceronte de ouro**, encontrado em 1933. Este sítio é tratado também na página do **Grande Zimbabué**.' },
  ] },
  { img: 'ban-mapungubwe', leg: 'Mapungubwe, no vale do Limpopo (África do Sul): exposição sobre o sítio, centro de uma elite de falantes bantu, c. 1220 – 1290 (Património Mundial, 2003).' },
  { linha: [
    { d: 'séc. XI – XV d.C.', t: 'O Grande Zimbabué (referência cruzada)', x: 'No planalto do Zimbabué, uma sociedade de língua bantu (antepassados dos Shona) ergue as grandes muralhas de granito do Grande Zimbabué. Tem página própria: ver **Grande Zimbabué**.' },
    { d: 'c. 1390 d.C.', t: 'O Reino do Congo (referência cruzada)', x: 'Na bacia do baixo rio Congo, a tradição situa a fundação de um reino por Lukeni lua Nimi. É um dos estados bantu mais bem documentados, com contacto com Portugal a partir de c. 1483. Tem página própria: ver **Reino do Congo**.' },
    { d: 'séc. XVI – XIX d.C.', t: 'A história continua', x: 'Depois do ano 1000, as sociedades de língua bantu criaram reinos, impérios e cidades de todos os tamanhos, desde o Buganda até ao Zulu. A **região da África Centro-Ocidental** foi, entre os séculos XVI e XIX, a maior fonte de africanos escravizados enviados para as Américas, e as línguas e culturas bantu chegaram assim ao Brasil, a Cuba e a outras regiões. O limite deste capítulo é, contudo, a viragem do milénio.' }
  ] },
  { h: 'Redescoberta' },
  'A ideia de «bantu» como unidade de língua nasceu no século XIX, quando **Wilhelm Bleek** (1857 – 1862) mostrou a regularidade das línguas da África meridional, e **Carl Meinhof** (1899) lhe deu uma gramática comparada. No século XX, **Malcolm Guthrie** (1948; 1967 – 1971) classificou as línguas em zonas com letras (A a S) e reconstruiu palavras do proto-bantu; **Joseph Greenberg** (1955, 1963) mostrou que o berço estava no Camarões e na Nigéria, e não, como Guthrie pensara, no sul do Congo. Em 1966, o historiador **Roland Oliver** ligou a difusão do bantu à difusão do ferro. Nas décadas de 1960 a 1990, **Jan Vansina**, **David Phillipson**, **Christopher Ehret** e outros fundiram língua e arqueologia numa história única da expansão.',
  'Desde 2015, a **genética** e os métodos estatísticos mudaram o debate: as árvores de línguas de **Grollemund** e colegas (2015) e de **Koile** e colegas (2022), o ADN antigo de **Shum Laka** (2020), o estudo de **Seidensticker** e colegas (2021) sobre a floresta e o grande estudo genético de **Fortes-Lima** e colegas (2024, 1763 participantes, dos quais 1526 falantes de bantu de 147 populações) apertaram as cronologias e puseram em causa várias ideias antigas. A história da expansão é hoje uma das áreas mais ativas da pré-história africana.'
];

const mapa = [
  'O mapa bantu não tem cidades como o dos Sumérios ou dos Etruscos, e sim **regiões, rios e sítios arqueológicos**. A tabela reúne os mais importantes para entender a expansão. As localizações são as dos países atuais, e as datas são aproximadas.',
  { tabela: { cab: ['Lugar', 'Onde (atual)', 'Quando', 'Importância'], linhas: [
    ['Grassfields e Shum Laka', 'Oeste dos Camarões', 'Ocupação de dezenas de milhares de anos; c. 3000 a.C. em diante', 'Região vizinha do berço das línguas bantu; abrigo com ADN antigo (2020)'],
    ['Cross River e planalto de Obudu', 'Sudeste da Nigéria', 'Pelo menos desde c. 3000 a.C.', 'Outra zona proposta para o berço; línguas bantoides ainda hoje'],
    ['Nkang', 'Camarões central', 'c. 1000 – 400 a.C. (datas debatidas)', 'Fitólitos de banana em debate; fossas com cerâmica e restos de dendê'],
    ['Rio Sangha e Ngoko', 'Camarões, Congo, RCA', 'c. 600 a.C. em diante', 'Corredor entre a floresta e a savana; primeiras aldeias de agricultores do ferro'],
    ['Gabão litoral e Ogooué', 'Gabão', 'c. 600 a.C. em diante', 'Cerâmica, machados polidos e palmeiras; ligação à costa atlântica'],
    ['Bacia do Congo central', 'RD do Congo', 'c. 500 a.C. – 600 d.C., e depois c. 1000 d.C.', 'Ocupação, colapso e nova ocupação (Seidensticker, 2021)'],
    ['Lago Vitória / Urewe', 'Tanzânia, Uganda, Ruanda, Burundi', 'c. 600 a.C. – 500 d.C.', 'Centro da tradição Urewe: ferro, cerâmica decorada, gado e cereais'],
    ['Kalambo Falls', 'Zâmbia / Tanzânia', 'Sequência de centenas de milhares de anos; Idade do Ferro no 1.º milénio d.C.', 'Uma das mais longas sequências arqueológicas da África'],
    ['Costa de Kwale e Matola', 'Quénia, Tanzânia e Moçambique', 'c. séc. II d.C. em diante', 'Primeiros agricultores do ferro do litoral oriental'],
    ['Natal e vale do Limpopo', 'África do Sul', 'c. 200 – 400 d.C. em diante', 'Primeira fronteira meridional da expansão'],
    ['Planalto do Zimbabué', 'Zimbabué', 'séc. III – XV d.C.', 'Gokomere, depois Grande Zimbabué (ver página própria)'],
    ['Mapungubwe e K2', 'Limpopo, África do Sul', 'c. 1000 – 1300 d.C.', 'Elite de língua bantu com ouro e comércio do Índico'],
    ['Mbanza Kongo', 'Norte de Angola', 'c. 1390 d.C. em diante', 'Capital do Reino do Congo (ver página própria)'],
    ['Kilwa Kisiwani', 'Ilha da Tanzânia', 'séc. IX – XVI d.C.', 'Cidade suaíli; ligação ao Índico (ver página própria)']
  ] } },
  { h: 'A origem: Camarões e Nigéria oriental' },
  'A hipótese dominante coloca o berço no **sudoeste dos Camarões e no sudeste da Nigéria**, uma região de planaltos de pastos (os **Grassfields**), de floresta, de vulcões e de rios, e uma das de maior diversidade linguística do mundo. Os argumentos vêm da própria língua: as línguas mais próximas do bantu (as «bantoides») concentram-se ali, e os ramos mais antigos da família bantu também. O abrigo de **Shum Laka** mostra que a região era habitada há muito tempo por caçadores-recoletores e oleiros, mas, como vimos, o ADN de lá não é o dos falantes bantu atuais, o que lembra que **língua, cultura e genes não coincidem**.',
  { h: 'A rota ocidental: a floresta equatorial' },
  'Uma parte dos falantes de bantu seguiu para sul pela **floresta tropical** do Gabão, do Congo e da República Democrática do Congo, usando como estradas os grandes **rios** (Sangha, Ogooué, Congo, Kasai) e as suas margens, onde havia luz e solo bom. Faziam clareiras para as suas aldeias e para os campos de inhame e de bananas, pescavam, colhiam **dendê** e **frutos da floresta** (como o *Canarium*) e mantinham contactos com os caçadores-recoletores. A ocupação da floresta foi lenta e muito irregular, e, como se viu, houve uma crise grave de c. 400 – 600 d.C.',
  { img: 'ban-rio-congo', leg: 'O rio Congo em Kinshasa, a grande via de circulação da floresta equatorial.' },
  { img: 'ban-floresta-equatorial', leg: 'Imagem de satélite do rio Congo e da floresta equatorial da sua bacia (Envisat, 2009).' },
  { img: 'ban-lago-vitoria', leg: 'Barcos e embarcadouros no lago Vitória, em Kisumu (Quénia); o lago foi o centro da tradição Urewe.' },
  { h: 'A rota oriental: lagos, savanas e costa' },
  'O outro grande ramo, o «oriental», aparece a leste da floresta: no **lago Vitória**, no **Kivu**, no **Tanganica**, na Zâmbia e, depois, na costa do Índico. Aqui as comunidades juntaram ao ferro e à olaria os **cereais (sorgo, milheto)** e o **gado**, que terão obtido, em parte, de vizinhos de outras famílias linguísticas (nilo-saarianos e cuxitas), numa mistura que explica a diversidade das línguas dos Grandes Lagos. A partir daí, a expansão desceu a costa oriental e entrou na África austral.',
  { img: 'ban-miombo', leg: 'Mapa da ecorregião das matas húmidas de miombo da África Zambeziana central, um tipo de savana arborizada que cobre grande parte da África central e austral.' },
  { h: 'O sul: Zambeze, Limpopo e planalto' },
  'A expansão chegou à África austral no início da nossa era. As comunidades seguiram os **vales dos rios** (Zambeze, Limpopo, Save) e a faixa húmida da costa oriental até ao Natal, e subiram depois ao planalto interior, onde o gado e os cereais permitiram uma ocupação densa. Nas zonas mais secas do Kalahari, a agricultura não era possível e os caçadores-recoletores san continuaram a viver durante muito tempo, em contacto com os criadores de gado vizinhos.',
  { img: 'ban-victoria-falls', leg: 'O Zambeze nas cataratas Vitória (Zâmbia e Zimbabué): um dos grandes rios que serviram de via e de fronteira natural na África austral.' },
  { img: 'ban-aldeia-savana', leg: 'Aldeia de agricultores e criadores de gado na savana da África austral, c. 600 d.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: 'As rotas em debate' },
  'Como foi, afinal, a expansão? Há três grandes famílias de provas, e nem sempre concordam. A tabela resume o estado da discussão.',
  { tabela: { cab: ['Questão', 'Linguística', 'Arqueologia', 'Genética'], linhas: [
    ['Onde nasceu?', 'Sudoeste dos Camarões e sudeste da Nigéria, sem dúvidas sérias', 'Pouca arqueologia de aldeias nessa fase; Shum Laka como contexto', 'ADN de Shum Laka mostra que os antigos habitantes não são antepassados diretos dos bantu atuais'],
    ['Rotas', 'Divisão cedo entre um ramo ocidental e um oriental (Grollemund, 2015)', 'Corredor de savana (Bostoen, 2015) ou travessia da floresta primeiro', 'Estudo de 2024: serial-founder, primeiro pela floresta, depois a leste e a sul'],
    ['Ritmo', 'Árvores de línguas sugerem dispersão rápida em alguns troços', 'Chegada ao sul c. 200 – 300 d.C.; colapso na floresta c. 400 – 600 d.C.', 'Datas de mistura com populações locais crescem com a distância à origem, o que sugere um ritmo mais ou menos constante'],
    ['Causas', 'Vocabulário reconstruído de agricultura, ferro e olaria; a língua espalhou-se com quem a falava', 'Clima (corredor de savana), ferro, cereais e gado, e crescimento populacional', 'Misturas com caçadores-recoletores, sobretudo por via feminina'],
    ['«Ondas»', 'Uma língua pode ter-se espalhado várias vezes', 'Spread-over-spread: depois do colapso c. 400 – 600, novas vagas c. 1000 d.C.', 'Zâmbia e RD Congo como zonas de encontro entre os ramos oriental e ocidental']
  ] } },
  { caixa: 'O que está em aberto', texto: 'Há acordo geral em três pontos: o berço fica no Camarões e na Nigéria; houve dois grandes ramos (ocidental e oriental); e a expansão foi **gradual**, com misturas. A discussão está na ordem dos passos (floresta ou savana primeiro?), na **velocidade**, no papel do **clima** (a abertura da floresta c. 2500 anos atrás) e do **ferro**, e no que significou o colapso de c. 400 – 600 d.C. Quem lê só um artigo ouve sempre uma versão mais certa do que a que existe.' },
  { h: 'Rotas e comércio' },
  'As comunidades bantu não viviam isoladas. Circulavam entre as aldeias o **sal** (de salinas e de cinzas de plantas), o **ferro** (enxadas, pontas de lança e machados), o **cobre** (do Katanga e do Zambeze), a **cerâmica**, o **peixe seco**, o **óleo de palma**, o **marfim** e as **peles**. Com o tempo, as redes ligaram o interior aos portos do **Índico**: contas de vidro, tecidos e cerâmica chegavam à África austral a partir de c. 700 – 900 d.C., e ouro e marfim saíam para a costa. Estas redes ajudam a explicar o nascimento de chefaturas e de reinos.',
  { img: 'ban-comercio-sal', leg: 'Trocas de sal, enxadas de ferro e cobre entre aldeias, c. 700 d.C.; reconstituição conjetural. Ilustração gerada por IA.' }
];

const sociedade = [
  { h: '1. Organização política' },
  'Nas primeiras fases, a sociedade bantu parece ter sido de **aldeias pequenas** ligadas por **linhagens**, isto é, grupos de parentes que descendem de um antepassado comum, por linha materna (matrilinear) ou paterna (patrilinear), conforme a região. As aldeias eram governadas por **chefes de linhagem** e conselhos de anciãos, com autoridade limitada, assente no prestígio, na eloquência e na capacidade de redistribuir bens. Os «homens grandes» (*big men*) das antropologias africanas ganhavam poder ao juntar seguidores, esposas e gado.',
  'A partir da **Idade do Ferro Tardia** (séc. VII – X d.C. em diante), em zonas de gado e de comércio, aparecem **chefaturas** maiores, com chefes hereditários, tributos e centros cerimoniais (Toutswe, Mapungubwe e, mais tarde, o Grande Zimbabué e o Reino do Congo). Em muitos casos o chefe tinha também um papel **sagrado**, de intermediário com os antepassados e com a chuva. Mas nada disto era universal: muitas sociedades bantu viveram séculos sem rei, governadas por conselhos de linhagem e de aldeia.',
  { img: 'ban-assembleia-chefe', leg: 'Assembleia de um chefe de linhagem e dos anciãos sob uma grande árvore; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '2. Classes sociais' },
  { lista: [
    '**Chefes e anciãos:** autoridade política, ritual e judicial, normalmente homens de linhagens importantes.',
    '**Ferreiros:** ofício de grande prestígio, por vezes cercado de tabus; em muitas sociedades, ligados ao poder político e aos antepassados.',
    '**Agricultores e criadores de gado:** a grande maioria. A divisão do trabalho variava: em muitas sociedades as mulheres tratavam das culturas, os homens, do gado e do desbaste de terras.',
    '**Especialistas rituais:** curandeiros, adivinhos, fazedores de chuva, oleiros (frequentemente mulheres), tecelões e músicos.',
    '**Caçadores-recoletores vizinhos:** parceiros de troca, por vezes clientes ou vizinhos desiguais, por vezes aliados; a relação variou muito e não deve ser simplificada.',
    '**Dependentes e cativos:** existiu escravatura e servidão por dívida em várias sociedades bantu antes do tráfico atlântico, normalmente em pequena escala; as fontes são quase todas posteriores, e não se pode afirmar nada de seguro para a fase mais antiga.'
  ] },
  { h: '3. Religião' },
  'Não há textos nem templos de que se possa falar: o que se sabe da religião das primeiras comunidades vem da **linguística** (palavras reconstruídas para espírito, antepassado, curandeiro), da **arqueologia** (sepulturas, objetos rituais, a cabeça de Lydenburg) e, com grande cautela, da **etnografia** dos povos bantu dos últimos séculos. O que se repete em muitas sociedades é um mundo de **antepassados** que continuam a proteger ou punir os vivos, um **ser supremo** distante, **espíritos** da terra e da água, o poder da **chuva**, a **iniciação** dos jovens e a **adivinhação** e a **cura** a cargo de especialistas.',
  { tabela: { cab: ['Termo (língua atual)', 'Povo ou língua', 'Significado'], linhas: [
    ['Nzambi (Mpungu)', 'Kongo (quicongo)', 'Ser supremo e criador'],
    ['Mulungu', 'Chewa, Yao e outros (Malawi, Tanzânia)', 'Ser supremo; também força do mundo'],
    ['Leza', 'Bemba, Tonga, Lozi (Zâmbia)', 'Ser supremo associado à chuva e ao céu'],
    ['Mwari', 'Shona (Zimbabué)', 'Ser supremo; ligado ao culto da chuva'],
    ['Unkulunkulu', 'Zulu, Ndebele (nguni)', '«O muito grande», o primeiro ancestral e criador'],
    ['Modimo', 'Sotho, Tswana', 'Ser supremo, termo muito antigo na região'],
    ['Mungu', 'Suaíli', 'Deus; palavra comum a várias línguas bantu']
  ] } },
  { caixa: 'Aviso de leitura', texto: 'Esta tabela reúne termos **registados** nos últimos séculos, que podem ter parentes em palavras muito mais antigas. Não prova que os primeiros bantu tivessem estas crenças exatas, mas mostra que a ideia de um ser supremo distante e de antepassados ativos tem uma profundidade grande na região.' },
  { h: '4. Economia' },
  'Os primeiros bantu viviam de uma **economia mista**: pesca em rios e lagos, caça, recoleção (dendê, frutos, mel), pequenos cultivos de **inhame** e leguminosas, e cabras. Com o tempo, e conforme as regiões, a mistura mudou. Na floresta, o centro de gravidade manteve-se no **inhame**, na **banana**, na **palmeira-de-dendê** e no peixe. Na savana e nos planaltos do leste e do sul, ganharam peso os **cereais (sorgo e milheto)**, as leguminosas e o **gado**, cabras e ovelhas. O sistema agrícola era a **agricultura itinerante**: queimava-se e desbravava-se um campo, cultivava-se alguns anos e movia-se a aldeia ou o campo quando a terra cansava, o que explica, em parte, o ritmo da expansão.',
  { img: 'ban-campo-cultivo', leg: 'Mulheres a preparar um campo de cultivo itinerante, com enxadas de ferro; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'ban-inhame', leg: 'Tubérculos de inhame, base alimentar da floresta e da savana do oeste africano.' },
  { img: 'ban-palmeira-dende', leg: 'Frutos da palmeira-de-dendê (*Elaeis guineensis*), fonte de óleo e de vinho de palma (fotografia no Equador).' },
  { img: 'ban-banana', leg: 'Plantação mista de café e bananeiras no Uganda; a bananeira, de origem asiática, chegou a África em data debatida.' },
  { img: 'ban-sorgo', leg: 'Campo de sorgo (fotografado nas Filipinas), cereal domesticado nas savanas africanas a norte do equador.' },
  { img: 'ban-milheto', leg: 'Milheto-pérola, cereal das savanas e do Sael, resistente à seca.' },
  { img: 'ban-ankole', leg: 'Gado de Ankole, de grandes cornos, criado na região dos Grandes Lagos (Uganda, Ruanda e Burundi).' },
  'O **comércio** a curta e a longa distância completava a economia (ver «Rotas e comércio»). As formas de riqueza eram o gado, o ferro, o cobre e as pessoas (parentes, dependentes), e não o dinheiro tal como o concebemos. No Reino do Congo, por exemplo, a moeda eram conchas e tecidos de ráfia (ver a página do **Congo**).',
  { h: '5. Línguas e escrita' },
  'As línguas bantu são **aglutinantes**: juntam prefixos e sufixos a uma raiz para formar palavras e frases. As sílabas são, em geral, abertas (consoante mais vogal: *ma-ta-ba-la*), o que lhes dá um som muito característico, e a maioria tem **tons** (a altura da voz distingue significados). A característica mais marcante é o sistema de **classes nominais**: todos os nomes pertencem a uma «classe», marcada por um **prefixo**, e as palavras que se ligam ao nome (adjetivos, verbos, pronomes) **concordam** com ela. Em muitas línguas há de 10 a 20 classes, geralmente em pares singular/plural.',
  { img: 'ban-bleek', leg: 'Túmulo de Wilhelm Bleek (1827 – 1875), no cemitério de Wynberg, Cidade do Cabo: filólogo alemão que propôs o termo «bantu» para este grupo de línguas.' },
  { tabela: { cab: ['Classe (par)', 'Prefixos (suaíli)', 'Sentido típico', 'Exemplo (suaíli)'], linhas: [
    ['1 / 2', 'm- / wa-', 'Pessoas', 'mtu / watu, «pessoa / pessoas»'],
    ['3 / 4', 'm- / mi-', 'Árvores, plantas, coisas «vivas»', 'mti / miti, «árvore / árvores»'],
    ['5 / 6', 'ji-, Ø / ma-', 'Frutos, coisas grandes, plurais coletivos', 'jina / majina, «nome / nomes»'],
    ['7 / 8', 'ki- / vi-', 'Objetos, instrumentos, línguas', 'kitabu / vitabu, «livro / livros»'],
    ['9 / 10', 'N- / N-', 'Animais e coisas diversas', 'nyumba / nyumba, «casa / casas»'],
    ['11 / 10', 'u- / N-', 'Coisas alongadas, abstratos', 'ukuta / kuta, «parede / paredes»'],
    ['14', 'u-', 'Qualidades e ideias abstratas', 'uhuru, «liberdade»'],
    ['15', 'ku-', 'Infinitivos', 'kula, «comer»']
  ] } },
  'Veja-se a **concordância** numa frase suaíli: *Mtoto mdogo amelala* («a criança pequena adormeceu») e *Watoto wadogo wamelala* («as crianças pequenas adormeceram»): o prefixo *m-/wa-* repete-se no nome, no adjetivo e no verbo. A palavra «pessoa» é bem a base do nome da família, como se vê comparando várias línguas:',
  { tabela: { cab: ['Língua', 'Singular', 'Plural'], linhas: [
    ['Suaíli', 'mtu', 'watu'],
    ['Zulu', 'umuntu', 'abantu'],
    ['Quicongo', 'muntu', 'bantu'],
    ['Shona', 'munhu', 'vanhu'],
    ['Chewa', 'munthu', 'anthu'],
    ['Lingala', 'moto', 'bato'],
    ['Tswana', 'motho', 'batho']
  ] } },
  { cit: 'Umuntu ngumuntu ngabantu.', fonte: 'Provérbio nguni (zulu e xhosa), muito citado como «uma pessoa é uma pessoa através de outras pessoas»; é a base da ideia de *ubuntu*, que no século XX ganhou usos filosóficos e políticos' },
  { caixa: 'Filologia comparada: como se «reconstrói» uma língua sem textos', texto: 'Ninguém sabe como se falava o proto-bantu: nunca foi escrito. Os linguistas comparam palavras de centenas de línguas atuais, identificam **correspondências regulares** de sons (por exemplo, a raiz *-ntu* aparece em todas, com variações previsíveis nos prefixos) e reconstroem, por inferência, uma «língua-mãe». Os métodos modernos, emprestados da biologia, desenham **árvores genealógicas** de línguas e estimam quando e onde se separaram. O vocabulário reconstruído, de plantas, animais e ferramentas, dá pistas sobre o modo de vida, mas só conta o que se **perdeu** ou **herdou**; não prova que todos os falantes fizessem tudo isso.' },
  'Quanto à **escrita**, os povos bantu usaram durante milénios a **tradição oral** (genealogias, provérbios, contos, cantos), sinais e marcas (como os tabuleiros de memória dos Luba, ver a página do Congo) e, mais tarde, escritas de origem externa: o **alfabeto árabe** (o suaíli foi escrito em *ajami* durante séculos) e o alfabeto latino pela mão dos missionários. Uma exceção notável fica na região de origem: o rei **Njoya**, dos Bamum, nos Camarões, inventou por volta de 1896 uma escrita própria; mas o bamum é uma língua bantoide dos Grassfields, aparentada com o bantu, e não bantu no sentido estrito.',
  { h: '6. Casa e aldeia' },
  'As aldeias eram pequenas: de algumas famílias a umas centenas de pessoas. As casas, redondas ou retangulares, eram de **paus, barro e capim**, com telhado de colmo; o barro cozido do chão (*daga*) e dos fornos é o que mais resta para os arqueólogos. Havia **celeiros** elevados, **cercas** de gado, **fornos** de ferro e de cerâmica nas margens, e **lixeiras**, de que se tiram sementes e ossos. Nas savanas do sul, as aldeias de gado giravam à volta de um **curral** central; na floresta, as casas faziam-se em torno de uma praça, com árvores de sombra.',
  { h: '7. Alimentação' },
  { lista: [
    '**Raízes e tubérculos:** inhame (de origem africana) e, mais tarde, taro; a **mandioca** só chegou à África da América no século XVI.',
    '**Bananas e plátanos:** a base na floresta e nos Grandes Lagos, mas a sua chegada é discutida.',
    '**Cereais:** sorgo e milheto, em papas e em cerveja; o **milho** só chegou da América depois de 1500, e as papas de milho que hoje se comem (*ugali*, *nshima*, *sadza*, *pap*) são **recentes**.',
    '**Leguminosas:** feijão-frade e amendoim-bambara.',
    '**Palmeira-de-dendê:** óleo de palma, vinho de palma e frutos de *Canarium* na floresta.',
    '**Carne, peixe, mel:** pesca nos rios e lagos, caça e criação (cabras, ovelhas, gado); leite e coalhada, onde havia gado.'
  ] },
  { h: '8. Vestuário e adornos' },
  'Poucos têxteis se conservam. Pelos relatos e pela etnografia, vestia-se pele, **casca de árvore batida** (*tapa*; no Uganda, ainda hoje), **fibras de ráfia** na bacia do Congo e algodão onde havia. Os adornos incluíam **contas** de casca de ovo de avestruz e de conchas, depois contas de vidro vindas do Índico, pulseiras de **ferro** e de **cobre**, penteados e **escarificações** (cortes decorativos na pele). A cerâmica era decorada com impressões de pente, de cordas e de fossetas, e os arqueólogos usam estes estilos para distinguir as comunidades.',
  { h: '9. Música, dança e jogos' },
  'A música é um dos traços mais fortes da herança bantu. Os instrumentos mais comuns eram os **tambores**, os **chocalhos**, os **sinos de ferro**, os **xilofones** e os **lamelofones** (como a **mbira**, com lâminas de metal que se dedilham). As músicas organizam-se em **ritmos sobrepostos** (polirritmia), em padrões de resposta entre solista e coro, e em danças ligadas a ciclos agrícolas, a funerais e à iniciação. Os **xilofones de Moçambique** (*timbila*, dos Chopi) são Património Imaterial da UNESCO. A idade exata de cada instrumento é incerta; os mais antigos documentados em contexto datam de séculos recentes.',
  { img: 'ban-mbira', leg: 'Esquema das lâminas de uma mbira, lamelofone tradicional da região do Zimbabué (cada cor corresponde a uma nota).' },
  'Os **jogos de semeadura** (tipo *mancala*, como o *bao* da África oriental) são comuns entre muitos povos bantu; a sua antiguidade, porém, é debatida.',
  { h: '10. Metalurgia, olaria e técnica' },
  'O **ferro** é a técnica que mais define a imagem tradicional dos bantu. Fazia-se por **redução direta**: o minério e o carvão de madeira eram aquecidos num forno de argila (de chaminé), com ar soprado por **foles** e por **tubos de argila** (*tuyères*), até se formar uma massa porosa de ferro (a *bloom*), que se batia depois na forja para tirar a escória. Os produtos eram **enxadas**, **machados**, **facas**, pontas de **lança** e de **flecha**, e adornos. O ofício estava cheio de **ritos**: muitas sociedades associavam a fundição ao nascimento e à fertilidade, com regras sexuais e tabus para o ferreiro e o forno, e liam a forja como uma metáfora do poder.',
  { img: 'ban-ferreiro', leg: 'Ferreiro bantu a forjar uma enxada, com foles de pele, c. 300 d.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  'Quanto ao papel militar do ferro, é de desconfiar da ideia de que o ferro deu aos bantu uma vantagem decisiva sobre os caçadores: estudos recentes lembram que, na floresta, o primeiro cultivo foi tão **pequeno** que dificilmente pesou, e que a vantagem do ferro, mais do que militar, foi **agrícola**: enxadas e machados permitem abrir campos e cultivar mais. A **olaria** foi o outro grande ofício, em geral das mulheres, e a cerâmica é o principal meio de datação e de identificação das comunidades.',
  { img: 'ban-ceramista', leg: 'Oleira a modelar um pote com decoração de fossetas, c. 500 a.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '11. Ciência e saber ecológico' },
  'As comunidades bantu desenvolveram um **saber** profundo do meio: ciclos de chuva e de cheia, solos, plantas **medicinais** e alimentares, pesca e navegação em rios (canoas escavadas em troncos), a fundição e as características de dezenas de plantas e de animais. Este conhecimento passava de geração em geração por via oral e por aprendizagem, e continua a ser a base de muita medicina e agricultura tradicional.',
  { h: '12. Guerra e conflito' },
  'Não se encontram, nas fases antigas, provas de grandes batalhas nem de exércitos: as sociedades eram pequenas, as aldeias dispersas, e o modelo mais provável é o de **grupos que se separam** quando a terra, a pesca ou as disputas de linhagem o aconselham. Houve, claro, razias, vinganças e guerras entre chefes, sobretudo depois do aparecimento de chefaturas maiores, com **arcos**, **lanças** e **escudos**. A «expansão» foi, antes, um processo de **ocupação** e de **mistura**, e não de conquista militar. Mais uma razão para desconfiar da imagem das «hordas» bantu.'
];

const personalidades = [
  'Dos pioneiros da expansão, ninguém sabe o nome: viveram milhares de anos antes de qualquer registo escrito. As figuras desta página são, por isso, sobretudo **estudiosos** que reconstruíram a sua história, mais uma figura lendária das tradições orais e dois «retratos coletivos» das pessoas anónimas que fizeram essa história.',
  { h: 'Wilhelm Bleek (1827 – 1875)' },
  'Filólogo alemão que se instalou na Cidade do Cabo, e que, nos anos 1850 – 1860, mostrou a regularidade das línguas da África meridional e propôs o termo **bantu**. A sua *Gramática Comparada das Línguas da África do Sul* (1862 – 1869) é a base da disciplina. É também recordado pelo trabalho de recolha de contos e de língua dos **/Xam** (um povo san), com Lucy Lloyd.',
  { h: 'Carl Meinhof (1857 – 1944)' },
  'Missionário e linguista alemão, autor do *Grundriss einer Lautlehre der Bantusprachen* (1899), a primeira grande reconstrução comparada. É uma figura **ambígua**: o seu trabalho filológico é válido, mas defendeu uma teoria «hamítica», que atribuía a «raças superiores» muitos feitos africanos, hoje rejeitada.',
  { h: 'Malcolm Guthrie (1903 – 1972)' },
  'Linguista britânico, da Escola de Estudos Orientais e Africanos (SOAS), em Londres. A sua classificação em **zonas com letras** (A a S, em que cada língua tem um código, como S42 para o zulu) e o *Comparative Bantu* (1967 – 1971) continuam a ser usados como referência. A sua hipótese de um berço no sul do Congo foi depois abandonada.',
  { h: 'Joseph Greenberg (1915 – 2001)' },
  'Linguista norte-americano que, em 1955 e 1963, reclassificou as línguas africanas em quatro famílias e agrupou o bantu no Níger-Congo, mostrando que o berço estava entre a Nigéria e os Camarões. As suas propostas mais amplas são discutidas, mas esta ideia central foi confirmada.',
  { h: 'Roland Oliver (1923 – 2014)' },
  'Historiador britânico de África. Em 1966, no artigo «O problema da expansão bantu», juntou a linguística e a arqueologia e defendeu que a difusão do **ferro** e a das línguas bantu estavam ligadas. A ideia foi muito influente, e é hoje vista com mais cautela.',
  { h: 'Jan Vansina (1929 – 2017)' },
  'Historiador belga e um dos fundadores da **história oral** africana. Estudou o Congo, escreveu *Paths in the Rainforests* (1990) e, em 1995, propôs uma nova leitura linguística da expansão. Insistiu em estudar sociedades de floresta e em distinguir bem o que se sabe do que se supõe.',
  { h: 'David Phillipson (n. 1942)' },
  'Arqueólogo britânico, professor em Cambridge e especialista em África oriental e central. Estudou a Idade do Ferro Antiga e propôs o termo **Chifumbaze** para o conjunto de culturas de agricultores do ferro do sul e do leste da África. O seu manual *African Archaeology* é uma referência.',
  { h: 'Christopher Ehret (n. 1941)' },
  'Historiador e linguista norte-americano, da Universidade da Califórnia (Los Angeles). Trabalhou muito sobre o vocabulário agrícola e pastoril das línguas africanas e defendeu o papel do contacto entre bantu e povos de outras famílias (nilo-saarianos e cuxitas) na difusão dos cereais e do gado. Algumas das suas datações são contestadas.',
  { h: 'Peter Schmidt e os fornos de Buhaya' },
  'Arqueólogo norte-americano que estudou, nos anos 1970, a metalurgia do ferro dos Haya, na Tanzânia, e, com Donald Avery, propôs que os fornos antigos da região atingiam temperaturas e produziam aços que se julgavam impossíveis. Mesmo discutida, a investigação mudou a imagem da metalurgia africana.',
  { h: 'Koen Bostoen' },
  'Linguista belga, da Universidade de Gante, que coordenou o projeto **BantuFirst**. Ligou a linguística, a arqueologia e as alterações climáticas na tese do corredor de savana (2015) e é uma das vozes mais ativas do debate atual.',
  { h: 'Kintu (lenda)' },
  'Na tradição oral do **Buganda** (hoje Uganda), Kintu é o primeiro homem e o fundador da linhagem dos reis, que chegou ao país com uma vaca e se casou com Nambi, filha do deus do céu. Pertence à **lenda**, e não à história, e foi recolhida por escrito só no século XX; mostra, porém, como as sociedades bantu da região dos lagos pensavam as suas origens.',
  { h: 'Os ferreiros e as oleiras (retrato coletivo)' },
  'Nos sítios arqueológicos a metalurgia e a cerâmica falam de pessoas anónimas: ferreiros que aprenderam a tirar ferro do minério, oleiras que decoraram potes com fossetas e linhas, e todos os pais e mães que, durante milénios, passaram a técnica e a língua aos filhos. Mereciam mais do que uma nota de rodapé: são, no fundo, os verdadeiros autores da expansão.',
  { h: 'As artistas de Chongoni (retrato coletivo)' },
  'As pinturas rupestres brancas de Chongoni, no Malawi, foram feitas, segundo as tradições orais, sobretudo por **mulheres** chewa em rituais de iniciação feminina. Não sabemos nenhum nome, mas sabemos que a arte esteve nas mãos de mulheres.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**Uma grande família de línguas:** o suaíli, o zulu, o shona, o quicongo e centenas de outras, de que se falam hoje cerca de 440 a 680 (conforme os critérios), por mais de 350 milhões de pessoas.',
    '**Ferro e agricultura em metade do continente:** técnicas, ferramentas e plantas que formaram a base de reinos e de cidades.',
    '**Uma enorme herança cultural:** música polirrítmica, provérbios, contos, tradições de iniciação, ideias de comunidade (como o *ubuntu*) e uma relação com os antepassados.',
    '**Base de estados e cidades:** o Congo, o Grande Zimbabué, Mapungubwe, os reinos dos Grandes Lagos e as cidades suaílis nasceram desta herança.',
    '**A diáspora atlântica:** milhões de pessoas de língua bantu, sobretudo da África Centro-Ocidental, foram levadas à força para as Américas, e deixaram línguas, ritmos e religiões no Brasil, em Cuba e noutros lugares (o *candomblé* de Angola, o samba e a capoeira têm raízes e palavras bantu, de forma discutida e misturada com outras heranças africanas).',
    '**Palavras no português:** *fubá*, *caçula*, *quitanda*, *quilombo* e muitas outras, vindas sobretudo do quimbundo e do quicongo.'
  ] },
  { h: 'Arte rupestre' },
  'A arte rupestre da África central e austral conta-se entre as maiores do mundo, mas **não é só dos bantu**. Em muitos abrigos há camadas de épocas e de autores diferentes: as pinturas **vermelhas** mais antigas são, em geral, de **caçadores-recoletores** (Twa, San), e as **brancas**, mais recentes, de **agricultores** de língua bantu. O exemplo clássico é **Chongoni**, no Malawi: 127 sítios, Património Mundial (2006), com pinturas vermelhas dos caçadores Twa e pinturas brancas dos agricultores Chewa, ligadas à **iniciação** das raparigas e ao culto da chuva, e ainda hoje usadas em cerimónias. Na região central de África há outros estilos, como a chamada «arte esquemática», de círculos, linhas e figuras abstratas.',
  { img: 'ban-chongoni', leg: 'Pinturas rupestres de Chongoni, Malawi (Património Mundial, 2006).' },
  { img: 'ban-tsodilo', leg: 'As colinas de Tsodilo, no Botsuana, com milhares de pinturas rupestres, sobretudo obra de caçadores-recoletores san; exemplo da diversidade da arte rupestre africana.' },
  { img: 'ban-pintor-rupestre', leg: 'Uma pintora a decorar um abrigo rochoso com argila branca, c. 1500 d.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: 'Arquitetura' },
  'A arquitetura da expansão é feita de materiais perecíveis (madeira, barro, capim), pelo que o que sobrou são sobretudo **pavimentos de barro cozido**, fossos, fornos e **muros de pedra** das fases posteriores. A grande tradição de **construção em pedra seca** da África austral (Mapungubwe, Grande Zimbabué, Khami) pertence a sociedades de língua bantu da Idade do Ferro Tardia, e vem descrita nas páginas respetivas. As ruínas do Grande Zimbabué foram atribuídas durante décadas a fenícios ou à rainha de Sabá por quem recusava admitir uma origem africana, uma ideia falsa, desmentida pela arqueologia.',
  { img: 'ban-great-zimbabwe', leg: 'Muralhas do Grande Zimbabué (séculos XI – XV); ver a página própria.' },
  { h: 'Referências cruzadas' },
  'Três grandes histórias nascidas desta herança têm página própria neste projeto, e não se repetem aqui: o **Grande Zimbabué** (planalto do Zimbabué; o ouro, a pedra e o Índico), o **Reino do Congo** (o baixo Congo, o contacto com Portugal e o tráfico) e as **Cidades-Estado Suaílis** (a costa oriental, entre o Índico e o interior). A **Cultura Nok**, no centro da Nigéria, tem também página própria, mas é só um contexto: não há prova de ligação direta aos falantes de bantu.',
  { img: 'ban-mbanza-kongo', leg: 'Gravura da capital do Reino do Congo, Mbanza Kongo (São Salvador), em 1668; ver a página própria.' },
  { img: 'ban-kilwa', leg: 'Ruínas de Kilwa Kisiwani, Tanzânia, cidade suaíli medieval (Património Mundial); ver a página própria.' },
  { h: 'Música e dança' },
  'O legado musical é, talvez, o mais vivo: os ritmos sobrepostos e as respostas entre solista e coro, os tambores, os xilofones e as mbiras estão no coração de muita música africana e, por via da diáspora, do jazz, do samba, da rumba e de outros estilos americanos. As ligações são reais, mas complexas, e não se podem reduzir a uma só origem.',
  { h: 'Os debates por resolver' },
  { lista: [
    '**A rota:** floresta primeiro, ou corredor de savana? (ver «As rotas em debate»).',
    '**O ritmo:** uma expansão contínua, ou várias «ondas» com colapsos pelo meio?',
    '**As causas:** clima, ferro, cereais e gado, crescimento populacional? Provavelmente uma combinação, diferente em cada região.',
    '**O papel das línguas:** porque se fala bantu em regiões onde parte importante da ancestralidade vem de outros povos? Uma língua pode espalhar-se de modo diferente dos genes.',
    '**O ferro:** invenção local, ou difusão do norte? E de quando datam os primeiros fornos?',
    '**O que aconteceu ao «colapso» de c. 400 – 600 d.C.?** Epidemia, clima, ou limites da agricultura?'
  ] },
  { h: 'Redescoberta, em resumo' },
  'O estudo científico começou no século XIX com **Bleek**, passou pela linguística de **Meinhof**, de **Guthrie** e de **Greenberg**, e pela história e arqueologia de **Oliver**, **Vansina** e **Phillipson**, e entrou em 2015 numa fase nova com a genética e os métodos estatísticos. Hoje, a cooperação entre universidades africanas, europeias e americanas multiplica os dados, e a história da expansão reescreve-se de poucos em poucos anos.',
  { h: 'Onde visitar' },
  { lista: [
    '**Chongoni, Malawi:** a arte rupestre, Património Mundial.',
    '**Kalambo Falls, Zâmbia e Tanzânia:** a sequência arqueológica e as cataratas.',
    '**Grande Zimbabué, Zimbabué:** as muralhas de pedra, Património Mundial.',
    '**Mapungubwe, África do Sul:** a colina e o museu da Universidade de Pretória (rinoceronte de ouro).',
    '**Museu Real da África Central (Tervuren, Bélgica):** uma das maiores coleções de África central.',
    '**Iziko South African Museum, Cidade do Cabo:** peças da Idade do Ferro, como as cabeças de Lydenburg.',
    '**Museus nacionais da Tanzânia, do Quénia, do Malawi e da Zâmbia:** coleções de arqueologia da Idade do Ferro.'
  ] },
  { caixa: 'Uma nota de cuidado: palavras e preconceitos', texto: [
    '**«Bantu» é uma palavra de língua, não de «raça».** Na África do Sul do **apartheid**, o regime usou-a como etiqueta racial e administrativa: a *Bantu Authorities Act* (1951), a *Bantu Education Act* (1953), os «bantustões» (territórios para onde os africanos negros eram remetidos, a partir de 1959). Por isso, em contextos sul-africanos, chamar «bantu» a uma pessoa é ofensivo. Neste capítulo, a palavra refere-se só a **línguas** e aos povos que as falam.',
    '**«Migração» ou «expansão»?** A palavra «migração» sugere um povo que parte em massa; o que os dados mostram é um processo gradual, de muitos grupos e de muitas gerações, com mistura. Por isso se prefere «expansão».',
    '**«Invasores»:** durante décadas, na África do Sul e noutros lugares, a ideia de que os bantu eram «invasores» tão recentes como os colonos europeus foi usada politicamente. É falsa: os bantu estão na região há mais de 1500 anos, e os colonos europeus, apenas desde o século XVII.',
    '**A «hipótese hamítica»:** a teoria racista de que os feitos africanos eram obra de «raças» vindas de fora (egípcias, fenícias, «hamitas») caracterizou boa parte do pensamento europeu sobre África até meados do século XX, e é rejeitada pela ciência.',
    '**«Pigmeus» e «bosquímanos»:** termos antigos, muitas vezes depreciativos. Usam-se aqui os nomes dos próprios povos (Twa, Aka, Baka, Mbuti; khoe e san).'
  ] }
];

const quiz = [
  { p: 'Onde se situa, segundo a maioria dos especialistas, o berço das línguas bantu?', op: ['No vale do Nilo', 'No sul de África, perto do Cabo', 'No planalto etíope', 'No sudoeste dos Camarões e sudeste da Nigéria'], certa: 3, exp: 'É a região da fronteira entre o leste da Nigéria e o oeste dos Camarões, onde se concentram os ramos mais antigos da família.' },
  { p: 'O que significa a raiz *-ntu* em *ba-ntu*?', op: ['Pessoa', 'Terra', 'Rio', 'Chefe'], certa: 0, exp: '*Ba-ntu* é «as pessoas»; o termo foi proposto por Wilhelm Bleek no século XIX.' },
  { p: '«Bantu» designa, em rigor:', op: ['Uma raça africana', 'Um único reino antigo', 'Uma família de línguas e, por extensão, os povos que as falam', 'Um império da Idade do Ferro'], certa: 2, exp: 'É um termo linguístico. Foi usado de forma racial no apartheid, o que explica a carga negativa em África do Sul.' },
  { p: 'Quantas línguas bantu existem, aproximadamente?', op: ['Cerca de 20', 'Cerca de 100', 'Entre 440 e 680, conforme os critérios', 'Mais de 5000'], certa: 2, exp: 'O número depende de como se distingue língua de dialeto.' },
  { p: 'Qual destas é uma língua bantu?', op: ['Hauçá', 'Amárico', 'Zulu', 'Ioruba'], certa: 2, exp: 'O zulu é bantu. O hauçá e o amárico são afro-asiáticos; o ioruba é Níger-Congo, mas não bantu.' },
  { p: 'O que é o sistema de «classes nominais»?', op: ['Uma divisão em classes sociais', 'Nomes agrupados em classes marcadas por prefixos, com concordância na frase', 'Uma escala de tons musicais', 'Um tipo de escrita'], certa: 1, exp: 'Em *mtu / watu* e *kitabu / vitabu*, os prefixos mudam com a classe, e as outras palavras concordam.' },
  { p: 'O que mostrou o ADN antigo das crianças de Shum Laka (Camarões, 2020)?', op: ['Eram antepassados diretos de todos os bantu', 'Eram de origem europeia', 'Não havia material para análise', 'Não descendiam da população ancestral dos bantu atuais'], certa: 3, exp: 'O berço das línguas não é, portanto, o berço genético de todos os falantes.' },
  { p: 'A tradição Urewe, c. 600 a.C. – 500 d.C., situa-se:', op: ['Em torno do lago Vitória, nos Grandes Lagos', 'No delta do Nilo', 'No Kalahari', 'Na costa atlântica de Angola'], certa: 0, exp: 'Urewe tem cerâmica de fossetas e fornos de ferro de argila na região dos Grandes Lagos.' },
  { p: 'O que é o «Intervalo do Sangha»?', op: ['Um rio da África austral', 'Uma abertura de savana na floresta equatorial, por volta de 2500 anos atrás', 'Um reino bantu', 'Uma língua do Gabão'], certa: 1, exp: 'Bostoen e colegas (2015) propuseram que esta faixa de savana facilitou a passagem para sul. Estudos posteriores, como o de Koile (2022), sugerem a floresta como primeira via.' },
  { p: 'Os bantu chegaram à África do Sul aproximadamente:', op: ['No século XVII, com os colonos europeus', 'No século XIX', 'Por volta de 200 – 400 d.C.', 'Há 100 000 anos'], certa: 2, exp: 'Cerâmicas de tipo Kwale aparecem no Natal c. 200 – 300 d.C.; a ideia de uma chegada recente é falsa.' },
  { p: 'O que revelou o estudo de Seidensticker e colegas (2021)?', op: ['Uma forte quebra da atividade humana na floresta c. 400 – 600 d.C.', 'Um enorme crescimento da população na floresta em 400 d.C.', 'A invenção do ferro no Congo', 'A origem da banana'], certa: 0, exp: 'Cerca de 74% de queda do indicador de atividade, seguida de séculos de baixa ocupação, até c. 1000 d.C.' },
  { p: 'A cultura Nok, da Nigéria, é, para efeitos deste tema:', op: ['A prova de que os bantu inventaram o ferro', 'A capital de um império bantu', 'Uma cultura do sul de África', 'Um contexto, sem ligação direta demonstrada com os bantu'], certa: 3, exp: 'Os Nok tiveram ferro e terracotas, mas a sua língua é desconhecida e não há prova de ligação direta.' },
  { p: 'Quem é, tradicionalmente, o responsável pela classificação em zonas (A a S) das línguas bantu?', op: ['Joseph Greenberg', 'Malcolm Guthrie', 'Jan Vansina', 'David Phillipson'], certa: 1, exp: 'Guthrie, no seu *Comparative Bantu* (1967 – 1971); Greenberg propôs o berço no Camarões e na Nigéria.' },
  { p: 'Em Chongoni (Malawi, Património Mundial 2006), quem pintou os desenhos brancos?', op: ['Os caçadores Twa, há dezenas de milhares de anos', 'Exploradores portugueses', 'Agricultores Chewa, ligados à iniciação e à chuva', 'Os Fenícios'], certa: 2, exp: 'As pinturas vermelhas são atribuídas aos caçadores Twa; as brancas, a agricultores Chewa.' },
  { p: 'Qual destas afirmações sobre os caçadores-recoletores e os bantu é mais exata?', op: ['Houve contactos de séculos, trocas, casamentos e mistura genética, sobretudo por via feminina', 'Os bantu exterminaram todos os caçadores-recoletores', 'Os caçadores-recoletores ensinaram os bantu a escrever', 'Nunca se encontraram'], certa: 0, exp: 'A genética e as línguas mostram misturas; a ideia de «varrimento» é um mito.' }
];

export default {
  id: 'bantu',
  cor: '#5a8a3a',
  emblema: '../assets/img/bantu.png',
  nome:    { pt: 'Povos Bantu (expansão bantu)', en: 'Bantu Peoples (the Bantu Expansion)' },
  periodo: { pt: 'c. 3000 a.C. – c. 1000 d.C.', en: 'c. 3000 BC – c. AD 1000' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
