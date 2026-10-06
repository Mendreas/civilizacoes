// MALI E SONGHAI — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas aproximadas; muitas, sobretudo antes do século XIV, vêm da tradição oral (griots) e são convenções modernas. a.C. = antes de Cristo, d.C. = depois de Cristo.
// O Gana (civilização vizinha, anterior) tem página própria; aqui só se liga a ele.
// Imagens: cada {img:'id'} procura o ficheiro  mali-songhai/img/id.jpg  (ver IMAGENS_MALI_SONGHAI.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'O **Mali** e o **Songhai** foram os dois grandes impérios da África Ocidental que se sucederam ao Gana, entre o século XIII e o fim do século XVI. Ocupavam o **Sahel**, a faixa de savana a sul do Saara, e o curso do rio **Níger**, e viviam de um comércio que ligava o **ouro** das florestas do sul ao **sal** do deserto e às cidades do Norte de África e do Egito.',
    'O Mali nasceu por volta de **1235**, quando o príncipe **Sundiata Keita** venceu o rei Sosso Sumanguru na batalha de **Kirina**, e atingiu o auge com **Mansa Musa**, cuja peregrinação a Meca, em **1324–25**, tornou o ouro do Mali célebre do Cairo a Lisboa. O Songhai, cuja capital era **Gao**, cresceu à custa do Mali no século XV com **Sonni Ali** e atingiu o auge com **Askia Mohammed** (r. 1493–1528). Em **1591**, em **Tondibi**, um exército marroquino com armas de fogo destruiu o poder songhai. **Tombuctu** e **Djenné** foram, entre os dois, centros de comércio, de religião e de saber.'
  ] },
  { img: 'mal-mapa-mali', leg: 'Mapa do Império do Mali em 1337, com cidades, rios e rotas transaarianas; limites aproximados.' },
  { h: 'Onde ficava' },
  'O coração do Mali estava no **alto Níger**, na região do Mandé, hoje a fronteira entre o **Mali** e a **Guiné**, e estendia-se para oeste até ao Senegal e à Gâmbia e para leste até à curva do Níger. O Songhai tinha o centro na **curva do Níger** (em torno de **Gao**, **Tombuctu** e **Djenné**) e chegou a controlar uma faixa enorme do Sahel, do Atlântico ao território hoje do Níger e do norte da Nigéria. Estes impérios não eram países com fronteiras fixas, mas **redes de cidades, rotas e povos tributários** que mudavam com a força do rei.',
  { img: 'mal-niger-rio', leg: 'Gado a atravessar o rio Níger perto de Ségou, Mali.' },
  'Uma parte desse mundo é hoje deserto ou semideserto. No século XIV, porém, o Sahel era provavelmente mais húmido do que é hoje, com **savana**, pastos e campos de milho e arroz; o rio, cheio na estação das cheias, formava um **delta interior** fértil, uma das grandes zonas agrícolas da África.',
  { img: 'mal-sahara-dunas', leg: 'Dunas no deserto do Mali; fotografia ao nível do solo, resolução original de 800 px.' },
  { h: 'Quando existiram' },
  'As datas mais antigas vêm da **tradição oral** dos griots, só escrita muitos séculos depois, e por isso são aproximadas. A partir do século XIV há testemunhos escritos de viajantes árabes e, depois, as crónicas de Tombuctu.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Antes do Mali', 'até c. 1235', 'Gana em declínio; chefaturas mandê; domínio do Sosso de Sumanguru Kanté'],
    ['Mali de Sundiata', 'c. 1235 – c. 1255', 'Kirina; fundação do império; Carta de Kurukan Fuga (tradição oral)'],
    ['Mali de expansão', 'c. 1255 – 1312', 'Sucessores de Sundiata; domínio do ouro; Sakura expande o império para leste'],
    ['Auge do Mali', 'c. 1312 – 1360', 'Mansa Musa e a peregrinação de 1324–25; Tombuctu e Gao; Sulayman e a visita de Ibn Battuta'],
    ['Declínio do Mali', 'c. 1360 – c. 1500', 'Disputas dinásticas; perda de Tombuctu (1433) e Gao; o Mali fica reduzido ao Oeste'],
    ['Songhai de Sonni Ali', 'c. 1464 – 1492', 'Guerreiro do rio; conquista Tombuctu (1468) e Djenné (1473)'],
    ['Auge do Songhai', '1493 – c. 1591', 'Dinastia Askia: Askia Mohammed, reformas, saber em Tombuctu; Askia Daoud'],
    ['Queda', '1591 e depois', 'Batalha de Tondibi; ocupação marroquina; fragmentação em pequenos estados']
  ] } },
  { img: 'mal-mapa-songhai', leg: 'Mapa do Império Songhai, síntese cartográfica baseada em Michael A. Gomez (2018); limites aproximados.' },
  { h: 'Quem eram?' },
  'O Mali foi construído por povos de língua **mandê** (mandingas ou malinqué, soninquês e outros), com a dinastia **Keita** à frente. O Songhai foi construído por um povo de língua **songhai** (de origem ainda debatida), de pescadores e barqueiros do Níger (os **Sorko**), de agricultores e de cavaleiros, a que se juntaram muitos outros. Ambos eram **muçulmanos** em boa parte da elite, mas na vida da aldeia continuavam fortes as crenças e os rituais tradicionais. A fusão entre as duas heranças foi uma das características destes estados.',
  { h: 'Porque importam' },
  { lista: [
    '**Ouro e comércio:** o ouro do Mali e do Songhai alimentou a moeda de metade do Mediterrâneo; foi um dos motivos pelos quais os portugueses procuraram, no século XV, o caminho marítimo para o ouro africano.',
    '**Saber:** Tombuctu foi um dos grandes centros de estudo do mundo islâmico, com bibliotecas e **centenas de milhares de manuscritos** ainda hoje conservados.',
    '**Organização política:** impérios com administração de províncias, tributos, exército e justiça, e uma tradição, a da **Carta de Kurukan Fuga**, que a UNESCO reconheceu como património imaterial.',
    '**Arquitetura de adobe:** a Grande Mesquita de Djenné é considerada a maior construção de terra do mundo.',
    '**Voz e memória:** os **griots** guardaram a história, a música e a genealogia, e continuam a fazê-lo.'
  ] },
  { img: 'mal-djenne-mesquita', leg: 'Grande Mesquita de Djenné; edifício atual reconstruído em 1906–1907.' },
  { caixa: 'Mali e Songhai hoje', texto: 'Tombuctu e Djenné estão inscritas na lista do Património Mundial da UNESCO (1988), tal como o Túmulo dos Askia em Gao (2004). Nos últimos anos a região do norte do Mali foi palco de conflito armado e ameaça ao património (2012–13), o que torna a visita difícil e arriscada: convém verificar sempre as recomendações oficiais de viagem.' },
  { img: 'mal-djinguereber', leg: 'Mesquita de Djinguereber, Tombuctu.' }
];

const linha = [
  'Esta linha do tempo segue os acontecimentos principais do Mali e do Songhai. As datas anteriores a 1350 são **aproximadas** e vêm da tradição oral ou de cronistas que escreveram muito depois; as posteriores estão melhor documentadas, mas continuam debatidas em pormenores.',
  { linha: [
    { d: 'séculos VIII – XII', t: 'O mundo antes do Mali', x: 'O **Gana** (Wagadu) domina o comércio do ouro e do sal (ver a sua página). Em volta dele, no alto Níger, vivem chefaturas **mandê**, entre elas a dos **Keita**, em redor de Kangaba. Os primeiros relatos árabes do Mali falam de um reino pequeno e de reis que já se teriam convertido ao islão.' },
    { d: 'c. 1180 – 1235', t: 'O poder dos Sosso', x: 'O reino **Sosso** de **Sumanguru Kanté** domina o que resta do Gana e submete as chefaturas mandê; segundo a tradição, mata ou expulsa os filhos do rei de Kangaba. A data da tomada da capital do Gana, c. 1203, é debatida.' },
    { d: 'c. 1230', t: 'O exílio e o regresso de Sundiata', x: 'O príncipe **Sundiata** (também Mari Jata, «o leão do Mali»), filho de **Naré Maghan** e de **Sogolon Kedjou**, era, segundo a epopeia, um menino que não andava e que superou o desprezo. Exilado, forma uma aliança de clãs e regressa para enfrentar Sumanguru. **A epopeia é uma obra poética**: o seu retrato é em grande parte épico.' },
    { d: 'c. 1235', t: 'A batalha de Kirina', x: 'Em **Kirina**, perto do Níger, o exército aliado de Sundiata derrota Sumanguru, que desaparece (segundo a lenda, mágica e misteriosamente). A data de **c. 1235** é uma convenção moderna. A vitória cria o **Império do Mali**, que se vai estender dos territórios do Sosso à antiga zona do Gana.' }
  ] },
  { img: 'mal-sundiata', leg: 'Retrato imaginado de Sundiata Keita, século XIII. Ilustração gerada por IA.' },
  { img: 'mal-kirina', leg: 'Batalha de Kirina, c. 1235, reconstrução conjetural. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 1236 (tradição)', t: 'A Carta de Kurukan Fuga', x: 'Segundo a tradição oral, numa grande assembleia em **Kurukan Fuga** (a «planície de Kurukan») os chefes aclamam **Sundiata** mansa (rei) e fixam regras: partilha de funções entre clãs, respeito pela vida, proibição de maltratar os estrangeiros, limites à guerra e à escravatura entre os mandês. O texto foi transmitido oralmente e só foi **posto por escrito em 1998**, numa reunião de tradicionalistas e investigadores em Kankan (Guiné); a **antiguidade exata de cada artigo é debatida**.' }
  ] },
  { img: 'mal-kurukan-fuga', leg: 'Assembleia de Kurukan Fuga, reconstrução baseada na tradição oral. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 1235 – 1255', t: 'A capital e a expansão', x: 'O Mali conquista as zonas de ouro de **Bambuk** e de **Buré**, o que lhe dá o controlo da riqueza mais importante da região, e submete cidades do Sahel. A capital terá sido **Niani** (hoje na Guiné), embora a identificação seja debatida. **Sundiata** morre por volta de 1255; a tradição diz que se afogou no rio Sankarani, mas as versões são diversas.' }
  ] },
  { img: 'mal-kangaba-kamablon', leg: 'Kamablon, casa sagrada de Kangaba.' },
  { linha: [
    { d: 'c. 1255 – 1285', t: 'Sucessores de Sundiata', x: 'Reinam os filhos, entre eles **Mansa Uli** (Ali), que Ibn Khaldun diz ter feito a peregrinação a Meca. Seguem-se disputas pela sucessão. Ibn Khaldun, que colheu informações de pessoas ligadas ao Mali, guarda uma lista de reis; **não é possível confirmar todos os nomes e anos**.' },
    { d: 'c. 1285 – 1300', t: 'Sakura', x: 'Um antigo escravo da corte (ou liberto), **Sakura**, toma o trono e expande o império: para leste, até à região de **Gao**, e para o sul. Segundo Ibn Khaldun, morreu no regresso de uma peregrinação, na costa do mar Vermelho, em c. 1300; a sua carreira ilustra que um homem de origem humilde podia chegar a mansa.' },
    { d: 'c. 1310 – 1312', t: 'As viagens de Abu Bakr II pelo Atlântico? (debatido)', x: 'Segundo o relato que **Mansa Musa** fez no Cairo ao historiador al-Umari, o seu antecessor equipou uma frota para explorar o «mar» a oeste e nunca mais voltou, e foi por isso que ele próprio subiu ao trono. A existência desta expedição é **muito debatida** e não há provas arqueológicas de chegada à América.' },
    { d: 'c. 1312', t: 'Mansa Musa torna-se rei', x: 'Musa (conhecido na tradição songhai como **Kankan Musa**, «Musa, filho de Kanku») ascende ao trono do Mali. O ano exato é debatido (c. 1307–1312).' },
    { d: '1324 – 1325', t: 'A peregrinação a Meca', x: 'Mansa Musa parte do Mali com uma comitiva enorme, e distribui tanto ouro no **Cairo** que, segundo al-Umari (que lá esteve cerca de doze anos depois), o valor do ouro caiu na cidade durante anos. Os números de pessoas e de ouro dados pelas fontes variam muito e são provavelmente exagerados. Na volta traz sábios e juristas e, segundo se diz, o arquiteto **Abu Ishaq al-Sahili**, de Granada.' }
  ] },
  { img: 'mal-peregrinacao-cairo', leg: 'Peregrinação de Mansa Musa, 1324, caravana a atravessar o Saara. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 1325 – 1337', t: 'Gao e Tombuctu entram no Mali', x: 'O general **Sagmandia** conquista **Gao** para o Mali, e Tombuctu cresce com o apoio do rei. A tradição atribui a **Mansa Musa** (ou a al-Sahili) a mesquita de **Djinguereber** (tradicionalmente 1327) e outros edifícios. Musa morre por volta de 1337.' },
    { d: '1337 – 1341', t: 'Maghan I e os ataques mossi', x: 'O filho de Musa, **Maghan I**, reina poucos anos. Por volta de 1337 (data debatida), os **Mossi** do sul atacam Tombuctu, sinal de que o império é frágil nas margens.' },
    { d: '1341 – 1360', t: 'Mansa Sulayman', x: 'O irmão de Musa, **Sulayman**, restaura a ordem e reina até 1360. Esta época é a mais bem descrita por uma testemunha estrangeira: **Ibn Battuta**.' },
    { d: '1352 – 1353', t: 'Ibn Battuta no Mali', x: 'O viajante marroquino **Ibn Battuta** atravessa o Saara, passa por **Taghaza** (a cidade do sal) e **Walata**, chega à capital de Sulayman e regressa por Tombuctu e Gao. Elogia a segurança e a justiça do país, critica a avareza do rei e certos costumes que lhe parecem pouco conformes ao islão.' },
    { d: '1375', t: 'O Atlas Catalão', x: 'O cartógrafo maiorquino **Abraham Cresques** (ou a sua oficina) desenha no Atlas Catalão um rei africano de coroa e ceptro, com uma pepita de ouro na mão, identificado como **«Musse Melly»**, senhor dos «negros de Gineva» (Guiné ou Gana, a leitura é debatida). É a imagem mais famosa de Mansa Musa, embora seja uma **representação imaginada**.' }
  ] },
  { img: 'mal-atlas-catalao', leg: 'Musse Melly (Mansa Musa), Atlas Catalão de 1375, BnF.' },
  { linha: [
    { d: 'c. 1360 – 1433', t: 'O declínio do Mali', x: 'Disputas pelo trono e a pressão de **tuaregues**, **mossi** e dos povos vizinhos enfraquecem o poder do centro. Em **1433** os tuaregues tomam **Tombuctu**, e Gao liberta-se do domínio do Mali, em data debatida.' },
    { d: 'c. 1464', t: 'Sonni Ali sobe ao trono em Gao', x: 'O chefe **Sonni Ali** (também Sunni Ali Ber, «o Grande»), da dinastia Sonni de Gao, constrói em poucos anos um exército de cavalaria e uma frota no Níger. A principal fonte sobre ele, o **Tarikh al-Sudan**, escrita mais de um século depois por autores ligados à dinastia que o sucedeu, é **hostil** à sua memória.' },
    { d: '1468 e 1473', t: 'A conquista de Tombuctu e de Djenné', x: 'Sonni Ali toma **Tombuctu** em 1468 (e perseguiu, segundo as crónicas, parte dos sábios e dos tuaregues) e **Djenné** em 1473, depois de um longo cerco que as fontes dizem ter durado sete anos (**pormenor provavelmente exagerado**). O Songhai passa a dominar o Níger do Mali à curva do rio.' }
  ] },
  { img: 'mal-sonni-ali-cavalaria', leg: 'Sonni Ali e forças songhai no Níger, século XV; retrato imaginado. Ilustração gerada por IA.' },
  { linha: [
    { d: '1492 – 1493', t: 'Morte de Sonni Ali; Askia Mohammed', x: 'Sonni Ali morre em 1492, ao regressar de uma campanha (segundo a tradição, afogou-se). O filho, **Sonni Baru**, é derrubado em 1493 pelo general **Mohammed Ture**, que funda a **dinastia Askia** e reina como **Askia Mohammed** (também Askia o Grande) até 1528.' },
    { d: '1496 – 1497', t: 'A peregrinação de Askia Mohammed', x: 'O rei vai a Meca, onde, segundo as crónicas, o xerife o reconhece como **califa do Sudão**. Traz consigo prestígio e uma ideia de monarquia islâmica mais forte do que a de Sonni Ali, e manda construir o seu túmulo em Gao.' }
  ] },
  { img: 'mal-askia-mohammed', leg: 'Retrato imaginado de Askia Mohammed, início do século XVI. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 1510', t: 'Leão o Africano visita Tombuctu', x: 'O diplomata e viajante **al-Hasan al-Wazzan**, conhecido como **Leão o Africano**, visita Tombuctu e escreve, mais tarde, a **Descrição de África**, em que diz que no mercado de Tombuctu o livro era das mercadorias mais rentáveis.' },
    { d: '1528 – 1549', t: 'Declínio do reinado dos Askia', x: 'O velho **Askia Mohammed** é deposto pelo filho **Askia Musa** em 1528. Seguem-se golpes e revoltas, até que o neto **Askia Daoud** (r. c. 1549–1582) restaura a estabilidade e o prestígio.' },
    { d: 'c. 1534', t: 'Embaixada do Mali a Portugal', x: 'Segundo o cronista **João de Barros**, o **«Mandimansa»**, rei dos mandês, envia uma embaixada ao rei **D. João III**, pedindo ajuda contra os seus inimigos. A dimensão do Mali é então bem menor e o interesse comercial português, concentrado no ouro da Costa da Mina, já não passa por ele.' },
    { d: 'c. 1545 (debatido)', t: 'Songhai ataca a capital do Mali', x: 'Segundo o *Tarikh al-Sudan*, as tropas de Askia Daoud entram na capital mandê e saqueiam-na. O Mali sobrevive reduzido a pequeno estado do alto Níger e da Gâmbia até ao século XVII.' },
    { d: '1578 – 1590', t: 'Marrocos cobiça o ouro', x: 'O sultão saadiano **Ahmad al-Mansur** ocupa o oásis de **Taghaza** e prepara a conquista do Songhai. Compra armas de fogo, canhões e recruta um exército de mercenários europeus convertidos e de andaluzes, comandado por **Judar Pasha**.' },
    { d: '13 de março de 1591', t: 'A batalha de Tondibi', x: 'Perto de Gao, o exército do imperador **Askia Ishaq II**, muito mais numeroso mas quase sem armas de fogo, é derrotado pelos arcabuzeiros e canhões marroquinos. Segundo a tradição, a tentativa de lançar uma manada de gado contra o inimigo falhou. Os marroquinos ocupam **Gao**, **Tombuctu** e **Djenné**.' }
  ] },
  { img: 'mal-tondibi', leg: 'Batalha de Tondibi, 1591, reconstrução conjetural. Ilustração gerada por IA.' },
  { linha: [
    { d: '1593', t: 'A deportação dos sábios', x: 'Os marroquinos prendem os letrados de Tombuctu e deportam-nos para Marrocos, entre eles **Ahmed Baba**, um dos maiores juristas e escritores da região, que só poderia regressar em 1608. É o golpe final na vida intelectual da cidade.' },
    { d: 'após 1591', t: 'A fragmentação', x: 'O Songhai desfaz-se em pequenos estados; os **pashas** marroquinos governam a curva do Níger durante gerações e perdem o contacto com Marrocos. Do ouro prometido chegou muito menos do que o sultão queria. Mais tarde, outros povos (bambara, fula, tuaregues) disputam a região.' },
    { d: '1828 – 1853', t: 'A redescoberta europeia', x: 'Exploradores europeus chegam a Tombuctu (o francês René Caillié em 1828; o alemão **Heinrich Barth** em 1853, que encontrou o manuscrito da crónica Tarikh al-Sudan). A cidade, já decadente, não correspondia ao mito.' }
  ] }
];

const mapa = [
  'O Mali e o Songhai não tinham fronteiras fixas: eram **cidades, rios e rotas** ligados por reis, tributos e alianças. As localizações mais antigas são **hipóteses**, em particular a da capital do Mali.',
  { tabela: { cab: ['Lugar', 'Local hoje', 'Papel', 'Para que ficou conhecido'], linhas: [
    ['Kangaba', 'Sudoeste do Mali', 'Berço da dinastia Keita', 'Kamablon, a casa sagrada de renovação septenal'],
    ['Niani', 'Guiné, perto do Sankarani', 'Capital do Mali (debatido)', 'Associada a Sundiata; a identificação é discutida'],
    ['Kirina', 'Sul do Mali', 'Batalha (c. 1235)', 'Vitória de Sundiata sobre Sumanguru'],
    ['Walata', 'Sudeste da Mauritânia', 'Cidade caravaneira', 'Porta do Mali para quem vinha do Norte; ponto de passagem de Ibn Battuta'],
    ['Tombuctu', 'Mali, junto ao Níger', 'Cidade comercial e do saber', 'Mesquitas de Djinguereber, Sankoré e Sidi Yahya; manuscritos'],
    ['Djenné', 'Delta interior do Níger', 'Cidade comercial', 'Grande Mesquita de adobe; ligação ao ouro e ao arroz'],
    ['Gao', 'Mali, no Níger', 'Capital songhai', 'Túmulo dos Askia; centro de comércio e de poder'],
    ['Taghaza', 'Deserto do Mali norte', 'Mina de sal', 'Casas feitas de blocos de sal, segundo Ibn Battuta'],
    ['Bambuk e Buré', 'Senegal–Mali e Guiné', 'Zonas de ouro', 'Fonte do ouro do Mali'],
    ['Tondibi', 'Perto de Gao', 'Batalha (1591)', 'Vitória marroquina sobre os songhai'],
    ['Sijilmasa e Cairo', 'Marrocos e Egito', 'Terminais do comércio', 'Onde chegavam ouro e escravos; de onde vinham sal, cobre e livros']
  ] } },
  { h: 'Niani e Kangaba' },
  'A tradição diz que o rei **Sundiata** fez de **Niani** a capital, e o mapa dos manuais costuma situá-la na atual Guiné, na margem do rio Sankarani. Mas os viajantes árabes nunca deram o nome da capital com precisão, e as escavações em Niani encontraram vestígios de ocupação medieval **cuja ligação à capital imperial é discutida**. **Kangaba**, mais a norte, é a terra dos Keita e mantém-se um lugar sagrado, com o **Kamablon**, onde a tradição guarda a memória de Sundiata.',
  { h: 'Tombuctu' },
  'A cidade nasceu, segundo a tradição, como um acampamento sazonal de tuaregues junto ao Níger, por volta do século XII. Sob o Mali tornou-se um grande ponto de passagem entre o deserto e o rio e, sob os Askia, o centro de saber do Sudão ocidental. Tinha três grandes mesquitas, que são hoje Património Mundial.',
  { img: 'mal-sankore', leg: 'Mesquita de Sankoré, Tombuctu.' },
  { img: 'mal-sidi-yahya', leg: 'Mesquita de Sidi Yahya, Tombuctu.' },
  '**Djinguereber** (tradicionalmente 1327), **Sankoré** (a mais ligada ao ensino, reconstruída no século XVI) e **Sidi Yahya** (c. 1400) são de **adobe com traves de madeira**. Os estudantes aprendiam o Alcorão, a gramática, o direito malequita, a lógica e a astronomia com mestres que ensinavam em suas casas ou nas mesquitas; **não havia uma universidade como a europeia**, mas uma rede de professores e de bibliotecas particulares.',
  { img: 'mal-tombuctu-reconstrucao', leg: 'Tombuctu no século XVI, vista imaginada; o porto de Kabara surge à distância. Ilustração gerada por IA.' },
  { h: 'Djenné' },
  'Djenné fica no **delta interior do Níger**, rico em arroz, peixe e gado, e foi o elo entre o ouro do sul e as caravanas do deserto. A cidade atual foi fundada, segundo a tradição, por volta do século IX, junto à antiga **Djenné-Djenno** (ver a página do Gana), abandonada gradualmente até c. 1400. A **Grande Mesquita** tem origem medieval (a data é debatida), mas o edifício atual é de **1907**. A cada ano, no fim da estação das cheias, a população **refaz o reboco** da mesquita numa festa comunitária.',
  { img: 'mal-djenne-crepissagem', leg: 'Participantes a transportar cestos de barro na crepissagem da mesquita de Djenné; não se vê a aplicação do reboco nas paredes.' },
  { h: 'Gao' },
  'Gao era a capital do Songhai e, antes, um centro importante já sob o Mali. As escavações em **Gao Saney** encontraram estelas de mármore importadas do sul de Espanha (séculos XII–XIII, ligadas ao comércio com al-Andalus), o que mostra a antiguidade das ligações da cidade ao Mediterrâneo. O **Túmulo dos Askia**, uma pirâmide de adobe de cerca de 17 metros, foi construído, segundo a tradição, por **Askia Mohammed**, depois da peregrinação, e é o símbolo mais impressionante da cidade.',
  { img: 'mal-tumulo-askia', leg: 'Túmulo dos Askia, Gao.' },
  { img: 'mal-mercado-gao', leg: 'Mercado de Gao, século XVI, reconstrução conjetural. Ilustração gerada por IA.' },
  { h: 'As rotas do ouro, do sal e do rio' },
  'As rotas atravessavam o Saara de sul para norte (do Níger a **Sijilmasa**, em Marrocos, a Ghadames e a Tripoli e ao Cairo) e o Níger servia de «estrada» fluvial entre Djenné, Tombuctu e Gao, em canoas grandes. O ouro seguia para norte; o sal, o cobre, os tecidos, os cavalos, os livros e os búzios para sul. As caravanas de camelos, com centenas ou milhares de animais, demoravam semanas, e a água dos poços era a sua maior preocupação.',
  { img: 'mal-niger-pinaca', leg: 'Pinasse no rio Níger, Mali.' },
  { img: 'mal-tuaregues', leg: 'Homem tuaregue a preparar o fogo para o chá, norte do Mali; fotografia contemporânea.' }
];

const sociedade = [
  { h: '1. Organização política' },
  'O Mali e o Songhai eram **impérios de províncias**: o rei (**mansa** no Mali, **sonni** e depois **askia** no Songhai) governava o centro e confiava as províncias a governadores (**farba** no Mali, **fari** no Songhai), que cobravam tributo e forneciam soldados. O poder do rei assentava no controlo do ouro e das rotas, na lealdade das elites e no prestígio religioso.',
  { img: 'mal-mansa-musa-corte', leg: 'Audiência na corte de Mansa Musa, século XIV; representação imaginada. Ilustração gerada por IA.' },
  'Nas audiências, segundo **Ibn Battuta**, o mansa aparecia sentado sob uma árvore ou numa plataforma, com o povo a **cobrir-se de pó** em sinal de respeito, e os griots a recitar louvores. **Askia Mohammed** deu ao Songhai uma administração mais **centralizada**, com um exército profissional, funcionários especializados e juízes (**cádis**) nas cidades.',
  { h: '2. Classes sociais' },
  'A sociedade mandê era dividida em **grupos de nascimento**: os **horon** (nobres e livres, incluindo os clãs guerreiros e os agricultores), os **nyamakala** («artesãos de casta»: ferreiros, ourives, tecelões, couros e **griots**), e os **jon** (escravos). Os griots e os ferreiros tinham um estatuto particular, temido e respeitado. No Songhai havia também escravos de domínios agrícolas, trabalhadores do rei, e um grupo importante de **letrados** (os ulama).',
  { h: '3. Religião' },
  'O islão chegou à região por comerciantes e sábios do Norte de África e do Saara, a partir do século XI. Os reis do Mali e do Songhai eram **muçulmanos** e apoiavam as mesquitas, mas a **religião tradicional** continuou forte, sobretudo no campo, com cultos de antepassados, de espíritos da água e da terra, e sociedades iniciáticas. Cada rei equilibrava as duas.',
  { tabela: { cab: ['Elemento', 'Origem', 'Papel'], linhas: [
    ['Islão malequita', 'Norte de África, Egito', 'Direito, ensino, justiça, ligação ao mundo árabe'],
    ['Cultos de antepassados', 'Tradição mandê e songhai', 'Proteção da família e da terra'],
    ['Espíritos da água', 'Songhai (os Sorko, barqueiros do Níger)', 'Proteção do rio, da pesca e da navegação'],
    ['Sociedades iniciáticas', 'Mandê', 'Educação dos jovens, regras sociais e rituais'],
    ['Sufismo e xerifes', 'Maghreb', 'Prestígio de famílias de sábios em Tombuctu']
  ] } },
  'Muitas **perseguições** de que fala o *Tarikh al-Sudan* contra os letrados e contra os não-muçulmanos devem ser lidas à luz de quem as escreve: cronistas **muçulmanos** que escreviam para a dinastia seguinte.',
  { h: '4. Economia' },
  'A riqueza assentava no **comércio transaariano**. O ouro vinha de **Bambuk**, **Buré** e **Akan** (florestas do sul), o sal vinha de **Taghaza** (no norte) e depois de **Taoudenni**, e as caravanas levavam também cobre, tecidos, cavalos, livros e noz-de-cola. Os mercadores **Dyula** (ou Wangara) controlavam as rotas do sul. Como moeda, circulavam ouro em pó, barras de cobre, sal e **búzios** (conchas importadas do oceano Índico).',
  { img: 'mal-caravana-camelos', leg: 'Caravana de camelos no Saara marroquino; fotografia contemporânea, comparação das rotas transaarianas.' },
  { img: 'mal-sal-taoudenni', leg: 'Blocos de sal de Taoudenni descarregados no porto fluvial de Mopti, Mali.' },
  'O sal era tão valioso quanto o ouro, segundo uma tradição popular. É uma simplificação, mas ilustra que **no sul faltava sal** e que **no norte faltava ouro**. Os mercadores e os reis ganhavam com **impostos** sobre cada carga que passava.',
  { img: 'mal-pesos-ouro', leg: 'Pesos akan de latão para ouro em pó; objetos de comparação regional.' },
  { img: 'mal-buzios', leg: 'Búzios monetários (Monetaria moneta).' },
  { h: '5. Escrita e fontes' },
  'A escrita era **árabe**, usada pelos letrados, em cartas, contratos, direito e história. As fontes são de dois tipos: **viajantes e geógrafos árabes** (al-Umari, Ibn Battuta, Ibn Khaldun, Leão o Africano) e **crónicas locais** de Tombuctu, o **Tarikh al-Sudan** (de al-Sa’di, c. 1655) e o **Tarikh al-Fattash** (atribuído a Mahmud Kati e a descendentes). Os mandês tinham também a **tradição oral** dos griots. Cada tipo de fonte tem os seus **vieses**.',
  { img: 'mal-copista-manuscritos', leg: 'Copista de Tombuctu, século XVI, reconstrução conjetural. Ilustração gerada por IA.' },
  { h: '6. Casa e família' },
  'As casas eram de **adobe** (tijolos de terra e palha, **banco**), de planta quadrangular ou redonda, com terraços, pátios e telhados planos nas cidades, e de palha nas aldeias. A família era **alargada**, com poligamia nas elites. Os filhos pertenciam à linhagem do pai entre os mandês.',
  { img: 'mal-casa-adobe', leg: 'Casa de adobe em Djenné, século XIV, reconstrução conjetural. Ilustração gerada por IA.' },
  { h: '7. Alimentação' },
  'A base era o **milhete** e o **sorgo**, com o **arroz africano** do delta do Níger, o **fonio**, inhames e leguminosas. Comia-se peixe do rio, carne de vaca e de carneiro, leite, mel e frutos; usava-se **manteiga de karité** e folhas de baobabe. Ibn Battuta queixou-se de o rei lhe dar como presente um pão, carne frita em manteiga de karité e uma cabaça de leite azedo, o que mostra a modéstia de um presente oficial.',
  { h: '8. Vestuário e joias' },
  'O **algodão** fiado e tecido em tiras estreitas era o tecido de base, tingido com **índigo**; as elites usavam túnicas largas, turbantes e tecidos importados do Egito e do Magrebe. O **ouro** em joias e adornos distinguia os nobres e os reis.',
  { h: '9. Música e jogos' },
  'Os **griots** (*djeli*) eram os músicos, os historiadores e os conselheiros dos reis, e transmitiam a genealogia e as epopeias. Tocavam o **balafon** (xilofone de cabaças), tambores e instrumentos de corda; a **kora** (harpa-alaúde de 21 cordas) é típica da zona do Gâmbia-Senegal, e a sua antiguidade não está bem documentada. A epopeia de Sundiata, transmitida pela família **Kouyaté**, foi fixada por escrito no século XX.',
  { img: 'mal-griot', leg: 'Griot tuaregue Amano e familiares com um tehardent de três cordas, Tin Aicha, região de Tombuctu, Mali, 1996.' },
  { img: 'mal-kora', leg: 'Kora, instrumento musical.' },
  { img: 'mal-balafon', leg: 'Balafon, instrumento musical.' },
  { img: 'mal-djembe', leg: 'Djembe, tambor.' },
  'Segundo a tradição, o **Sosso-Bala**, um balafon de Sumanguru, ainda é conservado em Niagassola, na Guiné, e foi proclamado pela UNESCO património imaterial. Jogos de tabuleiro como o **mancala** (conhecido como *wari* ou *oware* na região) eram populares.',
  { h: '10. Conhecimento, ciência e medicina' },
  'O ensino era sobretudo **religioso e jurídico**, mas incluía gramática árabe, retórica, astronomia, matemática, medicina e lógica. Os **manuscritos de Tombuctu** (hoje centenas de milhares, de coleções de famílias) tratam também de comércio, astrologia, poesia e história local. Os médicos usavam **plantas** e conhecimentos transmitidos de pais para filhos.',
  { img: 'mal-terracota-djenne', leg: 'Figura sentada de terracota, povos de Djenné, século XIII, Metropolitan Museum of Art (1981.218).' },
  { h: '11. Tecnologia' },
  'Os ferreiros trabalhavam o **ferro** em fornos de argila e produziam enxadas, lanças e espadas. A **construção em terra** usava tijolos de adobe e traves de madeira (**toron**) que servem de andaime permanente. O **algodão**, o couro e o ouro eram trabalhados por artesãos especializados. As canoas de tronco e as embarcações a remo ligavam as cidades do Níger.',
  { h: '12. Guerra' },
  'O Mali tinha **cavalaria** de elite, **arqueiros** a pé e contingentes de cada província; al-Umari fala de um exército de dezenas de milhares de homens (**números provavelmente exagerados**). O Songhai de **Sonni Ali** usava canoas de guerra e cavalaria, e o de **Askia Mohammed** um exército **permanente**. Em 1591 a falta de armas de fogo deixou-os em desvantagem perante os arcabuzeiros marroquinos.'
];

const personalidades = [
  'Muitas destas figuras vêm da **tradição oral**; sempre que um facto é lenda ou está debatido, diz-se.',
  { h: 'Sundiata Keita (m. c. 1255)' },
  'Príncipe da dinastia Keita e herói da **Epopeia de Sundiata**. Personagem histórico, o seu retrato é em grande parte **épico**. Fundou o Império do Mali depois de vencer Sumanguru em Kirina (c. 1235). Está ligado à Carta de Kurukan Fuga, cuja antiguidade é debatida.',
  { h: 'Sumanguru Kanté' },
  'Rei dos Sosso, ferreiro e feiticeiro na tradição, derrotado em Kirina. Figura entre história e lenda; o seu balafon, o Sosso-Bala, é uma relíquia da tradição.',
  { h: 'Balla Fasséké (tradição)' },
  'O griot de Sundiata, na epopeia; fundador, segundo a tradição, da linhagem **Kouyaté** de djeli. É uma figura da **tradição oral**, não confirmada por fontes escritas contemporâneas.',
  { h: 'Mansa Musa (r. c. 1312 – c. 1337)' },
  'O mais famoso rei do Mali. Fez a peregrinação a Meca em 1324–25, trouxe sábios e arquitetos e apoiou Tombuctu. A ideia de que foi «o homem mais rico de sempre» é um **exagero popular** moderno: as fontes falam de uma riqueza enorme, mas não é possível medi-la.',
  { h: 'Abu Bakr II (Abubakari), «o rei dos mares»? (debatido)' },
  'Antecessor de Mansa Musa; segundo o relato de Musa a al-Umari, partiu com uma frota a explorar o oceano Atlântico e não voltou. É **muito debatido** e não há provas de que tenha chegado a outro continente.',
  { h: 'Sakura' },
  'Antigo escravo e depois mansa (c. 1285–1300), expandiu o império e morreu, segundo Ibn Khaldun, no regresso de Meca. Mostra a mobilidade social possível na corte do Mali.',
  { h: 'Mansa Sulayman e a rainha Qasa' },
  'Irmão de Mansa Musa, reinou de 1341 a 1360. Foi o rei visitado por Ibn Battuta. A sua mulher principal, **Qasa**, tinha prestígio na corte, segundo o viajante.',
  { h: 'Ibn Battuta (1304 – c. 1368/69)' },
  'Viajante e jurista de Tânger. A sua **Rihla** («Viagem») descreve o Mali em 1352–53: a corte, a segurança das estradas, a comida e os costumes. É a única descrição de uma testemunha ocular do Mali do século XIV.',
  { img: 'mal-ibn-battuta', leg: 'Ibn Battuta, ilustração do século XIX em Découverte de la Terre, de Jules Verne; retrato imaginado.' },
  { h: 'Ibn Khaldun (1332 – 1406)' },
  'Historiador e pensador de Tunes. Na **Muqaddima** e no *Kitab al-Ibar* guarda uma das listas dos reis do Mali, obtida com informantes do Cairo, e reflete sobre a ascensão e a queda dos impérios.',
  { img: 'mal-ibn-khaldun', leg: 'Estátua de Ibn Khaldun, Tunes.' },
  { h: 'Sonni Ali (r. c. 1464 – 1492)' },
  'Fundador do Songhai imperial, guerreiro do rio e da cavalaria, conquistador de Tombuctu e de Djenné. A imagem de tirano e de perseguidor vem de cronistas muçulmanos hostis; modernamente, é visto como um estratega e um construtor de estado.',
  { h: 'Askia Mohammed (r. 1493 – 1528)' },
  'Mohammed Ture, general que derrubou os Sonni, fez a peregrinação a Meca (1496–97) e fez do islão uma ideologia do estado. Reformou a administração e favoreceu os letrados. Terminou os seus dias cego e deposto.',
  { h: 'Askia Daoud (r. c. 1549 – 1582)' },
  'Neto de Askia Mohammed; reinado estável, em que a corte e Tombuctu atingiram o auge. Segundo os cronistas, recolhia livros e protegia os sábios.',
  { h: 'Ahmed Baba (1556 – 1627)' },
  'Letrado de Tombuctu, autor de muitas obras de direito e de biografia, deportado para Marrocos depois de 1591. Defendeu, em Marrakech, que a **escravização de muçulmanos livres** era ilegal. É hoje símbolo do saber de Tombuctu; o instituto de manuscritos da cidade tem o seu nome.',
  { h: 'Leão o Africano (al-Hasan al-Wazzan, c. 1494 – c. 1554)' },
  'Diplomata de Fez, capturado por corsários e levado para Roma, onde escreveu a **Descrição de África** (1550, impressa em Veneza). Descreve Tombuctu e o seu mercado de livros, c. 1510–13, mas alguns pormenores são discutidos.',
  { img: 'mal-leao-africano-livro', leg: 'Frontispício de A Geographical Historie of Africa, de Leão o Africano, tradução inglesa de John Pory, 1600 (página 11 da digitalização).' },
  { h: 'Judar Pasha' },
  'Comandante do exército marroquino em Tondibi (1591). De origem espanhola e convertido, usou a artilharia e os arcabuzeiros e governou a curva do Níger como primeiro pasha.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**Manuscritos:** centenas de milhares de documentos em Tombuctu e noutras cidades, sobre direito, ciência, poesia e história, ainda parcialmente por estudar.',
    '**Tradição oral:** a epopeia de Sundiata, as genealogias, a Carta de Kurukan Fuga, o Kamablon.',
    '**Arquitetura de adobe:** técnica de construção com terra e madeira, com festas coletivas de renovação.',
    '**Música:** o balafon, a kora, a tradição dos griots, que influenciou o blues, o jazz e a música popular do Mali (Salif Keita, Toumani Diabaté).',
    '**Modelos políticos:** a ideia de império de comércio com justiça, governadores e tributos.'
  ] },
  { h: 'Arte' },
  'A arte do delta do Níger incluiu **terracotas** de Djenné, objetos de ferro e de ouro, tecidos e instrumentos de música. As cabaças, o couro e o ferro eram trabalhados com grande qualidade; as máscaras e as figuras rituais pertencem à tradição de povos vizinhos, como os Dogon.',
  { h: 'Arquitetura: terra, água e madeira' },
  'O estilo **sudano-saheliano** usa adobe e vigas de madeira salientes para a manutenção. A Grande Mesquita de Djenné, as mesquitas de Tombuctu e o Túmulo dos Askia são os exemplos mais importantes. Exigem **manutenção anual** depois das chuvas, e a sua conservação é um esforço de toda a comunidade.',
  { h: 'A redescoberta' },
  'Os europeus procuravam Tombuctu desde o século XVIII e imaginavam-na uma cidade de ouro. O escocês **Gordon Laing** chegou lá em 1826 e foi morto pouco depois; **René Caillié** foi em 1828 e voltou vivo; **Heinrich Barth**, em 1853, ficou vários meses e reuniu informação sobre a história songhai. Só no século XX a história dos impérios foi estudada com métodos modernos, ligando fontes árabes, tradição oral e arqueologia.',
  { img: 'mal-manuscrito', leg: 'Manuscrito árabe de Tombuctu.' },
  { h: 'Os manuscritos em perigo' },
  'Em 2012–13, durante o conflito no norte do Mali, grupos armados ocuparam Tombuctu, destruíram mausoléus de santos e queimaram parte do **Instituto Ahmed Baba**. Muitos manuscritos tinham já sido **retirados em segredo** para Bamaco por bibliotecários e famílias, e a maior parte foi salva. Restauro e digitalização continuam.',
  { img: 'mal-instituto-ahmed-baba', leg: 'Centro de Documentação e Investigação Ahmed Baba (CEDRHAB), Tombuctu.' },
  { h: 'Onde visitar e ver' },
  { lista: [
    '**Mali (com cautela, segundo as recomendações oficiais):** Tombuctu, Djenné, Gao e o Túmulo dos Askia, o Museu Nacional em Bamaco, Kangaba.',
    '**Guiné:** o sítio de Niani e Niagassola, com o Sosso-Bala.',
    '**Paris:** Musée du quai Branly e Bibliothèque nationale de France (Atlas Catalão).',
    '**Nova Iorque:** The Metropolitan Museum of Art, com terracotas e arte do Mali.',
    '**Internet:** os manuscritos digitalizados de Tombuctu e os arquivos do Hill Museum & Manuscript Library.'
  ] },
  { caixa: 'Uma nota', texto: 'Esta página resume uma história **longa e debatida**. As datas mais antigas dependem da tradição oral, e as crónicas de Tombuctu foram escritas séculos depois. Onde há dúvida, o texto diz «c.», «debatido» ou «tradição».' }
];

const quiz = [
  { p: 'Em que batalha, c. 1235, Sundiata Keita derrotou Sumanguru e fundou o Mali?', op: ['Tondibi', 'Kirina', 'Gao', 'Djenné'], certa: 1, exp: 'Em Kirina, na tradição, Sundiata venceu o rei sosso Sumanguru; a data c. 1235 é uma convenção.' },
  { p: 'O que é a Carta de Kurukan Fuga?', op: ['Um tratado com Portugal', 'Um conjunto de regras da tradição oral mandê', 'Uma crónica de Tombuctu', 'Um mapa de Mansa Musa'], certa: 1, exp: 'É uma tradição oral, só posta por escrito em 1998; a antiguidade de cada artigo é debatida.' },
  { p: 'Quem fez a famosa peregrinação a Meca em 1324–25?', op: ['Sonni Ali', 'Askia Mohammed', 'Sundiata', 'Mansa Musa'], certa: 3, exp: 'Mansa Musa fez a peregrinação, passando pelo Cairo, onde distribuiu ouro.' },
  { p: 'O que são os griots?', op: ['Soldados da guarda real', 'Guardiões da tradição oral, músicos e conselheiros', 'Mercadores do sal', 'Escravos dos reis'], certa: 1, exp: 'Os griots (djeli) transmitem a história, a genealogia e a música mandê.' },
  { p: 'Qual destas é uma das grandes mesquitas de Tombuctu?', op: ['Djinguereber', 'Koutoubia', 'Hassan II', 'Santa Sofia'], certa: 0, exp: 'Djinguereber, com Sankoré e Sidi Yahya, são as três grandes mesquitas de Tombuctu.' },
  { p: 'De que material é feita a Grande Mesquita de Djenné?', op: ['Pedra calcária', 'Adobe (terra)', 'Mármore', 'Madeira'], certa: 1, exp: 'É de adobe, com reboco refeito todos os anos; o edifício atual é de 1907.' },
  { p: 'Que viajante marroquino visitou o Mali em 1352–53?', op: ['Ibn Khaldun', 'Leão o Africano', 'Ibn Battuta', 'Al-Bakri'], certa: 2, exp: 'Ibn Battuta visitou o Mali de Mansa Sulayman e escreveu a sua Rihla.' },
  { p: 'Qual era a mercadoria mais importante vinda do norte para o Sahel?', op: ['Sal', 'Porcelana', 'Vinho', 'Prata'], certa: 0, exp: 'O sal do deserto (Taghaza, depois Taoudenni) era trocado por ouro.' },
  { p: 'Quem derrubou a dinastia Sonni e fundou a dinastia Askia, em 1493?', op: ['Askia Daoud', 'Mohammed Ture', 'Sonni Baru', 'Ahmed Baba'], certa: 1, exp: 'O general Mohammed Ture tomou o poder e reinou como Askia Mohammed.' },
  { p: 'Qual era a capital do Songhai?', op: ['Niani', 'Walata', 'Gao', 'Taghaza'], certa: 2, exp: 'Gao era a capital songhai, onde está o Túmulo dos Askia.' },
  { p: 'Que cidade Sonni Ali conquistou em 1473, depois de um longo cerco?', op: ['Kirina', 'Djenné', 'Kangaba', 'Gao'], certa: 1, exp: 'Djenné caiu em 1473; as fontes falam de um cerco de sete anos, provavelmente exagerado.' },
  { p: 'O que aconteceu em Tondibi, em 1591?', op: ['Fundação do Mali', 'Vitória marroquina sobre o Songhai', 'Morte de Mansa Musa', 'Peregrinação de Askia'], certa: 1, exp: 'Os arcabuzeiros e canhões marroquinos derrotaram o exército de Askia Ishaq II.' },
  { p: 'Quem foi Ahmed Baba?', op: ['Um rei de Gao', 'Um letrado de Tombuctu deportado para Marrocos', 'Um mercador de sal', 'Um general marroquino'], certa: 1, exp: 'Foi um grande jurista e escritor de Tombuctu, deportado em 1593.' },
  { p: 'Qual é o instrumento musical dos griots com 21 cordas, típico da Gâmbia e do Senegal?', op: ['Kora', 'Djembe', 'Balafon', 'Flauta'], certa: 0, exp: 'A kora é uma harpa-alaúde de cabaça; o balafon é um xilofone e o djembe um tambor.' },
  { p: 'Que imagem de Mansa Musa é a mais famosa, de 1375?', op: ['Uma moeda', 'O Atlas Catalão', 'Uma estátua em Gao', 'Um mosaico em Meca'], certa: 1, exp: 'O Atlas Catalão representa «Musse Melly» com uma pepita de ouro; a imagem é imaginada.' }
];

export default {
  id: 'mali-songhai',
  cor: '#b88a2f',
  emblema: '../assets/img/mali-songhai.png',
  nome:    { pt: 'Mali e Songhai', en: 'Mali and Songhai' },
  periodo: { pt: '1235 – 1591', en: 'AD 1235 – 1591' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
