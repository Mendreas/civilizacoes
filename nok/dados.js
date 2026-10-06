// CULTURA NOK — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Os Nok são uma CULTURA ARQUEOLÓGICA, não um estado conhecido: não deixaram escrita, não sabemos como se chamavam a si mesmos nem que língua falavam.
// «Nok» é o nome da aldeia nigeriana onde se encontraram as primeiras peças. Datas aproximadas (cronologia de radiocarbono calibrado e OSL; a. C. = antes de Cristo).
// Imagens: cada {img:'id'} procura o ficheiro  nok/img/id.jpg  (ver IMAGENS_NOK.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'A **cultura Nok** floresceu na Nigéria central, entre cerca de **1500 a.C. e o início da nossa era**. É conhecida sobretudo pelas suas **esculturas de terracota** (barro cozido), cabeças e figuras humanas de grande formato, com olhos triangulares, penteados elaborados e muitos adornos. Estão entre as mais antigas esculturas figurativas de grande dimensão conhecidas na África a sul do Saara. Foi também uma das primeiras sociedades da região a trabalhar o **ferro**.',
    'Mas há uma advertência essencial: **os Nok não deixaram escrita**. Não sabemos como se chamavam, que língua falavam, quem os governava nem em que deuses ou antepassados acreditavam. «Nok» é o nome da aldeia onde os arqueólogos encontraram as primeiras peças, não o nome do povo. Quase tudo o que se diz sobre a sociedade Nok é **interpretação** de objetos, e este texto diz, sempre que possível, o que é facto, o que é hipótese e o que simplesmente ignoramos.'
  ] },
  { img: 'nok-mapa-regiao', leg: 'Mapa da distribuição aproximada da cultura Nok, na Nigéria central, com rios e localidades de referência (legendas em inglês).' },
  { h: 'Onde ficava' },
  'A região Nok situa-se na **Nigéria central**, na faixa de savana e floresta aberta entre os planaltos de **Jos**, a cidade de **Kaduna** e a zona de **Abuja**, a capital do país. As peças e os sítios associados distribuem-se por uma área enorme, estimada em dezenas de milhares de km² (algumas estimativas comparam-na à área de Portugal; na prática, os arqueólogos escavaram sobretudo uma parte desta zona). A paisagem tem uma estação das chuvas de abril a outubro e cerca de 1100 a 1500 mm de precipitação anual: terra com água suficiente para cultivar cereais, árvores para carvão e rochas com minério de ferro.',
  { img: 'nok-paisagem-savana', leg: 'Horizonte durante o harmatão num campo perto de Katari, estado de Kaduna; fotografia contemporânea da paisagem regional.' },
  { h: 'Quando existiu' },
  'Durante décadas pensou-se que a cultura Nok era mais recente e curta (c. 500 a.C. a 200 d.C.). A equipa da Universidade de Frankfurt, com datações de radiocarbono e de luminescência (OSL) em dezenas de sítios, mostrou que a cultura é **bastante mais antiga**: começa por volta de **1500 a.C.**, e as esculturas só aparecem mais tarde, por volta de **900 a.C.** O fim, por volta do início da nossa era, continua a ser discutido. As fases abaixo seguem a proposta de Frankfurt.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Nok Antigo', 'c. 1500 – 900 a.C.', 'Primeiras aldeias agrícolas conhecidas na região; cultivo de milho-miúdo; olaria característica; ainda sem terracotas escultóricas'],
    ['Nok Médio', 'c. 900 – 400 a.C.', 'Surgem as esculturas de terracota; muitos sítios e muita população; início do trabalho do ferro (c. séc. VI–V a.C. ou antes)'],
    ['Nok Tardio', 'c. 400 a.C. – c. 1 d.C.', 'Menos sítios e menos terracotas; fornos de ferro como os de Taruga; a cultura desaparece'],
    ['Depois', 'a partir de c. 1 d.C.', 'Surgem populações com cerâmica «totalmente diferente»; a ligação com os Nok é incerta']
  ] } },
  { img: 'nok-cabeca-louvre', leg: 'Figura Nok de terracota (70.1998.11.1), com a cabeça e o penteado visíveis, fotografada no Louvre, Paris.' },
  { h: 'Quem eram?' },
  'Não sabemos. A língua deles é desconhecida: não há textos nem inscrições. Algumas pessoas propõem que os Nok são antepassados de povos atuais da região (iorubás, jukuns, dakakaris e outros), mas é **uma hipótese sem prova**. Faltam ossos para estudos de ADN (o solo ácido destruiu quase todos), faltam textos, e faltam séculos de continuidade demonstrada. O que temos são objetos: terracotas, cerâmica, ferramentas de pedra e de ferro, e restos de plantas.',
  { h: 'Porque importam' },
  { lista: [
    '**Escultura:** as terracotas Nok são das esculturas figurativas mais antigas e mais expressivas de África a sul do Saara. Mostram que havia ali artistas com uma tradição própria, sofisticada e muito anterior a qualquer influência europeia.',
    '**Ferro:** os fornos de Taruga e de outros sítios entram no debate sobre se o trabalho do ferro foi inventado de forma independente na África subsariana.',
    '**Agricultura:** o milho-miúdo (pearl millet) foi a base da alimentação de uma sociedade de agricultores sedentários.',
    '**Lição de método:** os Nok mostram como se estuda uma sociedade sem escrita, com cerâmica, sedimentos, carvão e sementes, e como a pilhagem destrói informação que nunca mais se recupera.'
  ] },
  { caixa: 'Os Nok hoje', texto: 'As terracotas Nok são hoje património da Nigéria, protegido por lei: não podem sair do país. A **Comissão Nacional de Museus e Monumentos** (NCMM) gere-as, e museus como os de **Jos** e de **Lagos** guardam muitas. Algumas peças saíram ilegalmente, e três esculturas (Nok e Sokoto) estiveram no Louvre, em Paris, num caso polémico que se conta mais à frente.' },
  { img: 'nok-figura-sentada', leg: 'Figura Nok de terracota em posição agachada, fotografada no Louvre, Paris.' }
];

const linha = [
  'Esta linha do tempo mistura duas histórias: a dos Nok (conhecida só pela arqueologia, com datas aproximadas) e a da sua descoberta e estudo (bem documentada, mas com pormenores que variam conforme a fonte). Onde há dúvida, o texto assinala-a.',
  { img: 'nok-museu-jos', leg: 'Museu de Jos, Nigéria.' },
  { img: 'nok-figura-ajoelhada', leg: 'Figura Nok ajoelhada de terracota, Honolulu Museum of Art (8348.1).' },
  { linha: [
    { d: 'c. 2500 a.C. ou antes', t: 'O milho-miúdo é domesticado no Sael', x: 'Muito antes dos Nok, povos mais a norte, na zona do Sael, começam a cultivar o milho-miúdo (*Pennisetum glaucum*), uma planta adaptada a solos pobres e a pouca água (as datas da domesticação são debatidas). Quando os Nok aparecem, esse cereal já existia como cultura agrícola na região de África Ocidental.' },
    { d: 'c. 1500 a.C.', t: 'Primeiros sítios Nok', x: 'Aparecem pequenos povoados com uma olaria característica na Nigéria central. É o início do **Nok Antigo**. Eram aldeias de poucas cabanas, provavelmente dispersas. Já havia agricultura de milho-miúdo, e este é, segundo os arqueobotânicos de Frankfurt, um dos mais antigos complexos agrícolas conhecidos da região.' },
    { d: 'c. 900 a.C.', t: 'As primeiras terracotas', x: 'Por volta desta data surgem as esculturas de barro cozido, o que marca o início do **Nok Médio**. Não se sabe porque a cultura passou a modelar figuras humanas tão elaboradas nesta altura, nem se a ideia nasceu aqui ou foi inspirada noutros sítios.' },
    { d: 'c. 900 – 400 a.C.', t: 'O auge: muitos sítios, muita produção', x: 'É o período com mais sítios e mais terracotas. Pelas marcas deixadas, as peças parecem fazer parte de um estilo reconhecível numa grande área, o que sugere ligação entre comunidades e talvez escultores que viajavam (hipótese da equipa de Frankfurt).' },
    { d: 'c. séc. VIII – VI a.C.', t: 'Possíveis primeiros trabalhos em ferro', x: 'Alguns investigadores sugerem datas tão antigas como estas para o início do ferro Nok, mas as provas diretas mais sólidas são mais tardias. Esta é uma das questões em aberto.' },
    { d: 'c. 500 a.C.', t: 'O ferro está certamente presente', x: 'No sítio de Intini, o projeto de Frankfurt obteve datações de radiocarbono entre cerca de **519 e 410 a.C.** associadas à metalurgia do ferro (fornos e escória). São das datas mais seguras para o ferro Nok.' },
    { d: 'c. 500 a.C. (cabeça de Jemaa)', t: 'A cabeça de Jemaa é datada', x: 'A célebre **cabeça de Jemaa** foi datada, por termoluminescência, de c. 500 a.C. A data é aproximada, com margem de incerteza, e foi uma das primeiras indicações de que esta tradição escultórica era muito antiga.' },
    { d: 'c. 400 a.C.', t: 'Começa o Nok Tardio', x: 'A produção de terracotas diminui, e há menos sítios conhecidos. Porquê, não se sabe ao certo. As hipóteses incluem esgotamento do solo, mudança de clima ou outras mudanças sociais que não detetamos.' },
    { d: 'c. séc. IV – III a.C.', t: 'Os fornos de Taruga', x: 'Em Taruga, na região de Abuja, foram escavados fornos de ferro com carvão datado do séc. IV–III a.C. (uma amostra c. 280 a.C.). São os fornos mais famosos do mundo Nok, apesar de o ferro existir noutros sítios Nok desde mais cedo.' },
    { d: 'c. 1 d.C.', t: 'O fim da cultura Nok', x: 'Por volta do início da era cristã, as terracotas e a olaria típica **deixam de aparecer**. Nos sítios seguintes encontram-se populações com cerâmica diferente e outras plantas, como o fonio. Se os Nok morreram, migraram ou se transformaram, é matéria de debate (ver o separador *Legado*).' },
    { d: 'c. 200 d.C.', t: 'Datação antiga do fim', x: 'Durante décadas, os livros diziam que os Nok desapareceram por volta de 200 d.C. A cronologia recente de Frankfurt aponta para uma data mais cedo. A diferença mostra como os dados mudam.' },
    { d: 'c. séc. IX d.C.', t: 'Igbo-Ukwu, outro foco de arte nigeriana', x: 'No sudeste da Nigéria, o sítio de Igbo-Ukwu produz bronzes de grande refinamento (c. séc. IX–X d.C.). Não há prova de ligação aos Nok, separados por mais de 800 anos.' },
    { d: 'c. séc. XII – XV d.C.', t: 'Ifé e a arte iorubá', x: 'Em Ifé, no sudoeste da Nigéria, florescem as cabeças naturalistas de terracota e de latão. A semelhança com as peças Nok impressionou os primeiros estudiosos, mas há mais de mil anos de intervalo entre as duas tradições.' },
    { d: '1928', t: 'Primeira terracota registada', x: 'Segundo o relato mais citado, o coronel **Dent Young**, sócio de uma empresa mineira, desenterrou por acaso, a cerca de sete metros de profundidade numa mina de estanho aluvial perto da aldeia de Nok, uma pequena cabeça de terracota (descrita como de macaco) e entregou-a ao museu do Departamento de Minas, em Jos. A importância da peça só foi compreendida mais tarde. Os pormenores variam conforme a fonte.' },
    { d: '1943', t: 'A descoberta: Nok e Jemaa', x: 'Na região de Nok, junto ao Planalto de Jos, um empregado de uma mina de estanho encontra uma cabeça de terracota, a cabeça de Jemaa, e usa-a como espantalho num campo de inhame. O arqueólogo britânico **Bernard Fagg** vê-a, nota a semelhança com as peças anteriores e reconhece a sua importância. Os pormenores da descoberta variam conforme a fonte.' },
    { d: '1944 – anos 1950', t: 'Fagg reúne as peças e dá nome à cultura', x: 'Fagg recolhe perto de duas centenas de terracotas em tudo o que a mineração revolvia: poços, gravilha, campos. Chama «cultura Nok» ao conjunto. Quase todas as peças vêm de contextos revolvidos, sem informação do local exato, e isso limitou durante décadas o que se podia saber.' },
    { d: '1952', t: 'Museu de Jos', x: 'Fagg funda o Museu de Jos, muitas vezes descrito como o primeiro museu público da Nigéria, onde guarda e mostra as peças Nok.' },
    { d: 'Anos 1960', t: 'Escavação de Taruga', x: 'Fagg escava Taruga (trabalhos a partir de 1961) e encontra, no mesmo sítio, terracotas Nok e fornos de ferro com datas do séc. IV–III a.C. É a primeira prova de que os Nok trabalhavam o ferro.' },
    { d: '1960s – 1970s', t: 'A hipótese Nok – Ifé', x: 'Fagg, o irmão William Fagg e Frank Willett defendem que a arte Nok estaria na origem da arte de Ifé e do Benim (na Nigéria). A hipótese é elegante mas **não provada**, por causa do longo intervalo de tempo entre ambas.' },
    { d: '1979', t: 'Cria-se a NCMM', x: 'A Nigéria cria a Comissão Nacional de Museus e Monumentos (NCMM), com poder para regular a venda e a exportação de antiguidades.' },
    { d: '1994 – 1995', t: 'O pico da pilhagem', x: 'A procura internacional leva a escavações ilegais em massa: segundo um relato, desenterravam-se cerca de dez terracotas por dia. Os saqueadores destroem os contextos, e a informação científica perde-se para sempre.' },
    { d: '1998 – 2002', t: 'O Louvre compra, a Nigéria protesta', x: 'A França compra, a um negociante de Bruxelas, três esculturas (duas Nok e uma de Sokoto) por 2,5 milhões de francos, e expõe duas delas no Pavillon des Sessions do Louvre (aberto em abril de 2000). A Nigéria contesta, porque as peças constavam da Lista Vermelha do ICOM. Um acordo de 2002 reconhece a propriedade nigeriana e prevê um empréstimo de 25 anos, renovável; os termos exatos são pouco divulgados.' },
    { d: 'c. 2005 – 2021', t: 'O Projeto Nok de Frankfurt', x: 'Uma equipa da Universidade Goethe de Frankfurt, liderada por **Peter Breunig** e **Nicole Rupp**, escava sistematicamente dezenas de sítios (Janjala, Samun Dukiya, Ifana, Pangwari e outros), com financiamento da fundação alemã DFG. Pela primeira vez, as terracotas são estudadas no seu contexto.' },
    { d: '2013 – 2014', t: 'Exposição em Frankfurt', x: 'O Liebieghaus, em Frankfurt, mostra «Nok: origens da escultura africana», uma grande exposição com peças nigerianas e resultados do projeto.' },
    { d: '2022', t: 'Estudo arqueobotânico', x: 'Um estudo de plantas carbonizadas de cerca de 50 sítios conclui que o milho-miúdo constitui cerca de 83% dos restos vegetais Nok. E que o carvão não mostra degradação da vegetação durante o período Nok, o que contraria uma das hipóteses para o fim da cultura.' },
    { d: 'Hoje', t: 'Uma cultura ainda por decifrar', x: 'Mais de 90% dos sítios conhecidos foram pilhados. Apesar disso, o projeto de Frankfurt mostrou que muitas perguntas se podem responder. As respostas que existem são, na maioria, parciais.' }
  ] }
];

const mapa = [
  'Os Nok não tinham cidades que conheçamos, e por isso este «mapa» é diferente do das civilizações com capitais. Os Nok viveram em **pequenos povoados** espalhados pela savana, com poucas cabanas cada um. O que temos são **sítios arqueológicos**: locais de onde vêm peças e informação. Estes são os principais.',
  { img: 'nok-mapa-sitios', leg: 'Mapa esquemático da Nigéria central: Níger e Benué, Planalto de Jos e posições aproximadas de sítios Nok publicados; círculos para sítios, quadrados vazios para Abuja, Kaduna e Jos como referências geográficas.' },
  { tabela: { cab: ['Sítio', 'Onde (aprox.)', 'Porque é importante'], linhas: [
    ['Nok', 'Sul do Estado de Kaduna, junto ao Planalto de Jos', 'Aldeia que deu nome à cultura; as primeiras terracotas apareceram em minas de estanho nesta zona'],
    ['Jemaa', 'Sul do Estado de Kaduna', 'Origem da cabeça de Jemaa, datada de c. 500 a.C., peça-chave da descoberta'],
    ['Taruga', 'Região de Abuja, Nigéria central', 'Fornos de ferro e terracotas escavados por Bernard Fagg a partir de 1961; datas do séc. IV–III a.C.'],
    ['Samun Dukiya', 'Zona de Nok, Nigéria central', 'Sítio com muitos fragmentos de terracota, escavado por Angela Fagg e mais tarde pelo projeto de Frankfurt'],
    ['Janjala', 'Nigéria central', 'Sítio do projeto de Frankfurt, com plantas carbonizadas que ajudam a conhecer a alimentação'],
    ['Ifana', 'Nigéria central', 'Cerca de vinte estruturas com terracotas (possíveis sepulturas), que levaram a equipa a propor uma função funerária'],
    ['Pangwari', 'Nigéria central', 'Sítio escavado pelo projeto de Frankfurt (cerâmica e cronologia)'],
    ['Intini', 'Nigéria central', 'Metalurgia do ferro datada entre c. 519 e 410 a.C.'],
  ] } },
  { img: 'nok-planalto-jos', leg: 'Planalto de Jos: encosta rochosa junto a uma estrada, fotografia de Aart Rietveld (1970–1973).' },
  { h: 'Nok, Jemaa e o Planalto de Jos' },
  'O Planalto de Jos é rico em **estanho**, e foi a mineração, nos anos 1920–1940, que fez surgir as primeiras terracotas. Os mineiros usavam jatos de água para lavar a terra e revolviam sedimentos de muitos séculos. Daí saíram cabeças, pernas, braços e fragmentos, muitas vezes sem informação sobre o local exato. Foi neste contexto, na aldeia de Nok e nos arredores de Jemaa, que a cultura recebeu o nome.',
  { img: 'nok-mineracao-estanho', leg: 'Mineração de estanho a céu aberto na área de Bukuru/Ropp, Planalto de Jos, c. 1930; caixas de lavagem do minério.' },
  { h: 'Taruga e o ferro' },
  'Em Taruga, Bernard Fagg encontrou **treze fornos de ferro** (a contagem mais citada) e escória, juntamente com terracotas Nok, e obteve datas de radiocarbono do século IV–III a.C. Taruga continua a ser o sítio de ferro Nok mais citado, mas os arqueólogos de Frankfurt acham que o ferro existia noutros sítios Nok desde mais cedo.',
  { img: 'nok-forno-ferro', leg: 'Esquema interpretativo em corte de um forno de redução direta de ferro, c. 500–400 a.C., com carvão, minério, tubeiras e formação da lupa de ferro no fundo; sem corresponder a um forno medido específico.' },
  { h: 'Samun Dukiya, Janjala, Ifana: o projeto de Frankfurt' },
  'A partir de 2005, a equipa de Frankfurt escavou povoados inteiros, e não só fragmentos soltos. Em **Ifana**, onde identificaram cerca de vinte estruturas com terracotas, a disposição das peças levou a pensar em contextos funerários. **Janjala** e outros sítios forneceram plantas carbonizadas que mostram o que se comia. Em **Samun Dukiya** e noutros locais, encontraram-se muitas peças partidas, o que sugere que partir as esculturas fazia parte de um ritual (ver o separador *Sociedade*). Todos eram sítios pequenos, com poucas cabanas, e não cidades.',
  { img: 'nok-escavacao', leg: 'Paisagem e escavações no sítio Nok de Ido: estruturas, deposição de terracotas e recipiente; montagem publicada pelo projeto de investigação.' },
  { h: 'Rios, savana e rotas' },
  'Os Nok viviam a norte da confluência do grande rio **Níger** com o rio **Benué**. Não temos provas de rotas comerciais Nok como as de outras civilizações. Há sinais de estilos de olaria e de terracota partilhados numa área extensa, o que sugere contactos regulares entre comunidades, mas não conhecemos cidades, mercados nem mercadorias. O minério de ferro, o barro e a madeira para carvão estavam disponíveis localmente.',
  { img: 'nok-rio-benue', leg: 'Rio Benué visto para sudeste a partir de Jimeta/Yola, Nigéria.' },
  { h: 'Os museus' },
  'As terracotas Nok que se podem ver na Nigéria estão em museus como o **Museu de Jos** (fundado por Fagg em 1952), o **Museu Nacional de Lagos** e outros da NCMM. Fora do país, há peças em museus do Reino Unido, da Alemanha, da França e dos EUA, algumas vindas de forma legal, outras não.',
  { img: 'nok-museu-lagos', leg: 'Museu Nacional de Lagos, Nigéria.' }
];

const sociedade = [
  'Este é o capítulo onde mais se nota que os Nok são uma cultura arqueológica: sobre a sociedade deles **quase tudo é desconhecido**. Em cada secção, o texto diz o que os objetos permitem afirmar, o que é só hipótese e o que simplesmente não sabemos.',
  { caixa: 'Aviso de rigor', texto: 'Não existem textos Nok. Quase todos os ossos desapareceram em solo ácido. Por isso, não conhecemos línguas, nomes, reis, leis, deuses nem crenças. Tudo o que se segue sobre o pensamento dos Nok é **interpretação**.' },
  { h: 'Política e classes sociais' },
  'Não sabemos se houve reis, chefes ou conselhos. As casas e os povoados parecem pequenos e dispersos, sem palácios, muralhas ou edifícios monumentais conhecidos, e não há sinal de um estado. As esculturas, porém, mostram pessoas com muitas contas, pulseiras, colares e penteados trabalhados. Isso levou alguns a ver ali **elites**, pessoas de estatuto, líderes ou antepassados importantes. Mas outros lembram que os adornos podem ser apenas um estilo artístico. A produção de peças tão grandes e elaboradas exigiu especialistas, e a equipa de Frankfurt pensa que alguns escultores viajariam entre comunidades. Concluir que existiam «classes sociais» sem textos é arriscado.',
  { img: 'nok-cabeca-penteado', leg: 'Cabeça Nok de terracota com penteado elaborado, Cleveland Museum of Art (1995.21).' },
  { h: 'As esculturas de terracota' },
  'As terracotas são a marca dos Nok. Eram feitas **sem roda de oleiro**, com rolos de barro sobrepostos, deixando as peças ocas por dentro, e depois alisadas e esculpidas com detalhe. As figuras podem ser quase do tamanho natural: algumas teriam mais de um metro de altura, embora a maior parte esteja só em fragmentos. Têm, em geral: **olhos triangulares ou em forma de D**, com a pupila furada; **nariz largo**; **boca aberta**; **cabeças proporcionalmente grandes**; **penteados muito elaborados** (tranças, carrapitos, cabelo em camadas); e muitos **adornos** (colares, pulseiras, braceletes, tornozeleiras, tangas de contas). Há figuras de pé, ajoelhadas e **sentadas**, e há também animais (por exemplo, elefantes, serpentes e macacos) em menor número.',
  { img: 'nok-olhos-triangulares', leg: 'Cabeça Nok com olhos triangulares e pupilas perfuradas, Honolulu Museum of Art (8349.1).' },
  { img: 'nok-figura-adornos', leg: 'Figura feminina Nok, subestilo Kuchamfa, com colares e pulseiras; fotografia de uma peça de coleção.' },
  { img: 'nok-animal-terracota', leg: 'Escultura zoomórfica de terracota atribuída à cultura Nok e identificada como girafa na fonte.' },
  { img: 'nok-oleiros-reconstrucao', leg: 'Reconstrução artística hipotética de escultores Nok a modelar uma cabeça oca de terracota por rolos de argila, c. 500 a.C. Ilustração gerada por IA.' },
  { h: 'Serão as mais antigas da África subsariana?' },
  'É uma frase muito repetida e merece cuidado. O que se pode afirmar com segurança é que as terracotas Nok estão entre as **mais antigas esculturas figurativas de grande formato** conhecidas na **África Ocidental e Central**, e que são anteriores em mais de mil anos a outras grandes tradições da região (como Ifé). Mas «mais antiga da África subsariana» depende de como se define: existem **arte rupestre** e **pequenas figuras** muito mais antigas, esculturas da **Núbia** e de **Cuxe** (no vale do Nilo, também a sul do Egito), e figuras de barro mais pequenas na bacia do Chade. Dizer que são as mais antigas **de grande formato e em barro cozido na África Ocidental** é mais exato.',
  { h: 'Religião e função das esculturas' },
  'Porque se fizeram estas esculturas? Ninguém sabe ao certo. Há três grandes hipóteses, que não se excluem:',
  { lista: [
    '**Antepassados e ritos funerários.** Os arqueólogos de Frankfurt encontraram peças partidas deliberadamente e depositadas perto de possíveis sepulturas. Isto indica que eram usadas em **rituais funerários**, talvez como imagens de antepassados ou de pessoas falecidas.',
    '**Representação de elites.** Os adornos e a posição das figuras sentadas sugerem pessoas de estatuto, mas não se sabe se são indivíduos reais, tipos sociais ou seres espirituais.',
    '**Ligação ao ferro.** Durante muito tempo propôs-se uma ligação entre as esculturas e o trabalho do ferro. Hoje parece menos provável, porque o ferro apareceu pelo menos algumas centenas de anos depois do início da cultura.'
  ] },
  { tabela: { cab: ['Ideia', 'Evidência', 'Grau de certeza'], linhas: [
    ['Rituais funerários', 'Fragmentos deliberadamente partidos e depositados junto a possíveis enterros', 'Hipótese forte, mas só em alguns sítios'],
    ['Antepassados', 'Rostos individualizados; costume muito difundido na África Ocidental', 'Plausível, sem prova direta'],
    ['Elites ou chefes', 'Adornos, penteados, posição sentada', 'Possível; também pode ser só estilo'],
    ['Deuses específicos', 'Nenhuma figura é identificável como divindade', 'Nada sabemos']
  ] } },
  { img: 'nok-ritual-reconstrucao', leg: 'Interpretação artística de uma possível deposição ritual de fragmentos de terracota, c. 400 a.C.; o significado funerário é uma hipótese, não uma cerimónia documentada. Ilustração gerada por IA.' },
  { h: 'Economia e agricultura' },
  'A base da alimentação era o **milho-miúdo** (*pearl millet*), cereal resistente que se dá bem em solos pobres. Num grande estudo de plantas carbonizadas, representa cerca de 83% dos restos vegetais de 50 sítios (os autores admitem que o seu consumo tivesse também uma dimensão ritual). Aparecem também, em muito menor quantidade, o feijão-frade (menos de 0,2%) e frutos de árvores silvestres, como *Canarium schweinfurthii* e *Nauclea latifolia*. Havia **mós** para moer o cereal. Quanto a animais domésticos e à caça, há poucos restos, porque o solo ácido destrói os ossos, e não podemos dizer com certeza o que criavam. Os Nok seriam **agricultores sedentários** que complementavam a dieta com recolecção e caça. Outras plantas, como as cabaças, não estão documentadas nos dados arqueobotânicos publicados.',
  { img: 'nok-milho-miudo', leg: 'Campo contemporâneo de milho-miúdo (mahangu) no norte da Namíbia; exemplo da espécie cultivada pelas comunidades Nok, sem representar um campo Nok.' },
  { h: 'Escrita' },
  'Não há escrita Nok. Não existem sinais, inscrições, selos nem marcas de contas. Tudo o que sabemos vem de objetos e de restos materiais: foi preciso a arqueologia para os «ouvir». Por isso a cultura Nok é conhecida como uma cultura **pré-histórica ou proto-histórica**, no sentido de que não deixou documentos.',
  { h: 'Casas e povoados' },
  'Os sítios Nok são pequenos: segundo Breunig, «poucas cabanas em cada sítio», o que sugere quintas dispersas ou pequenas aldeias, e não grandes povoações. As casas seriam de materiais perecíveis (madeira, barro, palha), por isso quase não deixaram vestígios, apenas buracos de postes e manchas no solo. Fossas e depósitos de lixo foram úteis para estudar a cerâmica e as plantas.',
  { img: 'nok-aldeia-reconstrucao', leg: 'Reconstrução artística hipotética de uma pequena comunidade agrícola Nok, c. 800 a.C., com cabanas, milho-miúdo, cerâmica e mós. Ilustração gerada por IA.' },
  { h: 'Cultura material: cerâmica e pedra' },
  'A **cerâmica** Nok é muito característica, com decoração impressa e incisa em bandas, e é por ela que os arqueólogos reconhecem os sítios e a fase da cultura (mudou ao longo de 1500 anos). Há também **mós**, **machados de pedra polida**, contas de pedra e outros objetos pessoais. Estas peças são a principal ferramenta cronológica.',
  { img: 'nok-contas', leg: 'Colar egípcio da XXV dinastia com contas de cornalina, vidro e material vidrado, Auckland Museum (1926.225); comparação de adornos africanos antigos, sem atribuição à cultura Nok.' },
  { img: 'nok-ceramica', leg: 'Fragmento de um recipiente Nok de cerâmica com várias figuras em meio-relevo; fotografia de uma peça de coleção.' },
  { img: 'nok-machado-pedra', leg: 'Instrumentos de dolerito talhados e polidos e outros objetos do abrigo de Kamabai, Serra Leoa, fotografados em Freetown em 1968; comparação regional, sem atribuição a Nok.' },
  { h: 'Tecnologia: o ferro' },
  'Os Nok são famosos pelo **trabalho do ferro**. O ferro era obtido por **redução do minério** em fornos de argila, aquecidos com carvão de madeira a mais de 1000 °C, e depois forjado. Em Taruga encontraram-se fornos e escória, e em sítios Nok recuperaram-se ferramentas e armas (pontas de lança, pulseiras, facas). Há um pormenor curioso: parecem ter passado diretamente da pedra para o ferro, **sem uma «Idade do Bronze»**. O ferro era, provavelmente, escasso, pois as ferramentas de pedra continuaram em uso.',
  { img: 'nok-ferreiros-reconstrucao', leg: 'Reconstrução artística hipotética de trabalhadores Nok a reduzir minério e a retirar uma lupa de ferro de um forno de argila, c. 400 a.C. Ilustração gerada por IA.' },
  { img: 'nok-ferro-objetos', leg: 'Ilustração de objetos hipotéticos de ferro antigo — ponta de lança, pulseira e lâmina — junto a fragmentos cerâmicos; não representa achados Nok identificados. Ilustração gerada por IA.' },
  { caixa: 'O debate: o ferro foi inventado em África?', texto: [
    'O trabalho do ferro surge na Ásia Ocidental (Anatólia) ainda no 2.º milénio a.C. Em África, há duas explicações para a metalurgia subsariana. A **difusão** defende que a técnica veio do norte, por Cartago ou pelo reino de Meroé. A **invenção independente** defende que as comunidades subsarianas a desenvolveram sozinhas. A segunda ganhou força porque o ferro apareceu muito cedo em vários locais (Nigéria, Níger, Camarões, Ruanda, Tanzânia) sem passar por uma fase de cobre ou bronze, o que é invulgar. Mas **as datas desses sítios são discutidas**, e a questão não está encerrada. Os Nok são só um dos casos do debate.'
  ] },
  { h: 'Alimentação, vestuário e música' },
  'A **alimentação** assentava no milho-miúdo, em papas ou massas feitas com cereal moído. Quanto ao **vestuário**, as terracotas mostram pessoas com colares, pulseiras, tornozeleiras e tangas de contas, mas não sabemos que tecidos usavam, porque não se conservam. Sobre **música e jogos**, não há provas claras: algumas figuras foram lidas como músicos, mas a interpretação é incerta. É um bom exemplo de como a imagem de uma cultura sem textos está cheia de lacunas.',
  { h: 'Ciência e guerra' },
  'Não sabemos nada de seguro sobre matemática, astronomia ou medicina Nok. Sobre a **guerra**, também pouco: encontraram-se pontas de lança de ferro, que podiam servir para caça ou combate. Não há muralhas, fortalezas nem cenas de batalha. Seria um erro imaginá-los como um povo guerreiro ou como um povo pacífico: simplesmente, não o sabemos.'
];

const personalidades = [
  'Os Nok não deixaram nomes. Todas as pessoas desta lista são **estudiosos** ou intervenientes na história da descoberta. A primeira entrada é o único «retrato» possível dos Nok: os escultores anónimos.',
  { h: 'Os escultores anónimos' },
  'Quem fez as terracotas Nok não deixou nome. Mas a técnica, a escala e a repetição de convenções (olhos, penteados) mostram que havia **artistas com formação**, que transmitiam uma tradição durante séculos. A equipa de Frankfurt propõe que alguns deles eram itinerantes. É o que sabemos, e é pouco.',
  { img: 'nok-cabeca-grande', leg: 'Cabeça Nok de terracota fotografada em Lagos por Philip Gaunt, arquivo UNESCO; a fonte não confirma a dimensão da peça nem a sua identificação como cabeça de Jemaa.' },
  { h: 'Dent Young' },
  'Coronel britânico e sócio de uma empresa mineira que, em 1928, segundo o relato mais citado, desenterrou uma pequena cabeça de terracota numa mina de estanho perto da aldeia de Nok. Foi a primeira peça registada, mas só anos depois, com Fagg, se compreendeu o seu valor. Os pormenores do episódio variam conforme a fonte.',
  { h: 'Bernard Fagg (1915–1987)' },
  'Arqueólogo britânico, funcionário da administração colonial na Nigéria, e figura central da descoberta dos Nok. Em 1943 viu a cabeça de Jemaa e percebeu a sua importância, reuniu perto de duzentas peças e **deu nome à cultura**. Fundou o **Museu de Jos** em 1952 (muitas vezes descrito como o primeiro museu público da Nigéria), escavou **Taruga** nos anos 1960 e foi depois conservador do Pitt Rivers Museum, em Oxford (1963–1975). Defendeu a ligação entre os Nok e Ifé, hipótese que não ficou provada.',
  { img: 'nok-fagg', leg: 'Antiga residência de Bernard Fagg na aldeia de Nok, estado de Kaduna, fotografada em 2022.' },
  { h: 'Angela Fagg' },
  'Arqueóloga ligada a Bernard Fagg (as fontes divergem quanto ao parentesco), que escavou o sítio de Samun Dukiya, na zona de Nok, e cujo nome aparece em publicações sobre os Nok. É difícil confirmar pormenores do seu percurso e do seu papel exatos.',
  { h: 'William Fagg (1914–1992)' },
  'Irmão de Bernard, historiador de arte africana e conservador do Museu Britânico. Notou a semelhança entre a arte Nok e as de Ifé e do Benim e ajudou a propor a ideia de continuidade artística, que hoje se vê com cautela.',
  { h: 'Frank Willett (1925–2006)' },
  'Arqueólogo britânico que escavou em Ifé e escreveu sobre a relação da arte de Ifé com a de Nok. Contribuiu para a hipótese de que ambas fazem parte de uma grande tradição da escultura em barro da África Ocidental, hipótese depois posta em dúvida pelo grande intervalo de tempo.',
  { h: 'Ekpo Eyo (1931–2011)' },
  'Arqueólogo nigeriano, dirigiu o Departamento Federal de Antiguidades da Nigéria (1968–1979) e depois a NCMM (até 1986), e foi uma das vozes mais fortes em defesa do património do país contra o saque e o tráfico de peças como as terracotas Nok.',
  { h: 'Peter Breunig' },
  'Arqueólogo alemão da Universidade Goethe de Frankfurt. Lidera, desde meados dos anos 2000, o **Projeto Nok**, com financiamento da DFG. O seu trabalho mudou a cronologia da cultura (começa c. 1500 a.C.) e mostrou que se podiam obter dados sérios mesmo numa região muito pilhada.',
  { img: 'nok-universidade-frankfurt', leg: 'Edifício IG Farben, campus Westend da Universidade Goethe de Frankfurt.' },
  { h: 'Nicole Rupp' },
  'Arqueóloga alemã, coordenadora de campo e de investigação no projeto de Frankfurt, com trabalho sobre os contextos das terracotas e a cronologia. Publicou, com Breunig, a síntese que reorganizou as fases da cultura.',
  { h: 'Katharina Neumann e Stefanie Kahlheber' },
  'Arqueobotânicas do projeto. Estudaram as plantas carbonizadas que mostram que os Nok viviam do milho-miúdo, e o que o carvão revela sobre a vegetação e o clima. O seu trabalho é a nossa melhor fonte sobre a alimentação e o ambiente.',
  { h: 'Os nigerianos do terreno' },
  'Muitos arqueólogos, técnicos e comunidades locais nigerianos fizeram o trabalho de escavação, e as comunidades da região guardaram, e por vezes denunciaram, achados. Os nomes raramente chegam às publicações, e é justo lembrá-los.'
];

const legado = [
  { h: 'O que deixaram' },
  'Os Nok deixaram **imagens**, e quase nada mais que se possa ler: terracotas, cerâmica, ferramentas de pedra e de ferro, e restos de cultivos. Para a história da arte, mostraram que a escultura figurativa de grande formato na África Ocidental tem pelo menos 2500 anos. Para a história da tecnologia, mostram que o ferro foi trabalhado na região muito cedo. Para a arqueologia, são o exemplo de uma sociedade complexa que existiu **sem escrita**.',
  { img: 'nok-cabeca-jemaa', leg: 'Cabeça Nok de terracota do Kimbell Art Museum; imagem alternativa, sem identificação como a cabeça de Jemaa.' },
  { h: 'Nok, Ifé e os Igbo: uma polémica' },
  'Há três tradições de arte nigeriana que se costumam comparar: a **Nok** (c. 900 a.C. – c. 1 d.C.), a **Igbo-Ukwu** (bronzes do séc. IX–X d.C.) e a de **Ifé** (cabeças naturalistas do séc. XII–XV d.C.). Fagg e outros viram Nok como ancestral de Ifé, e há quem proponha também laços entre os Nok e povos atuais (iorubás, jukuns, dakakaris, bassas). Mas há problemas sérios: o intervalo entre Nok e Ifé é de mais de **1000 anos**, sem peças intermédias seguras, e entre Nok e Igbo-Ukwu há mais de 800 anos. A ligação direta aos Igbo não tem apoio. A resposta honesta é: a semelhança é real, a **continuidade é uma hipótese**, e a prova falta.',
  { img: 'nok-ife-cabeca', leg: 'Cabeça de latão de um rei de Ifé (Ooni), séc. XIV ou início do XV, British Museum; exemplo de uma tradição muito posterior a Nok.' },
  { img: 'nok-igbo-ukwu', leg: 'Vaso cerimonial de bronze em forma de concha de caracol, Igbo-Ukwu, séc. IX d.C., Museu Nacional de Lagos; tradição muito posterior a Nok.' },
  { h: 'O desaparecimento' },
  'Por volta do início da nossa era, as terracotas e a cerâmica Nok **deixam de aparecer**. Porquê? Há várias hipóteses, e nenhuma está provada:',
  { lista: [
    '**Esgotamento dos solos e das árvores.** Alguns investigadores, incluindo membros da equipa de Frankfurt, propuseram que o uso intensivo da terra e a procura de madeira para carvão, sobretudo no Nok Médio, degradaram o ambiente.',
    '**Mudança de clima.** Períodos mais secos podem ter forçado as pessoas a mudar de local ou de modo de vida.',
    '**Mudança social.** A cultura pode ter-se transformado: as pessoas ficaram, mas abandonaram a produção das esculturas e o estilo de cerâmica.',
    '**Migrações.** Outros povos podem ter chegado à região, trazendo novos hábitos e novas plantas.'
  ] },
  'Há contra-argumentos: o estudo arqueobotânico de 2022 não encontrou sinais de degradação da vegetação durante o período Nok. Nenhuma explicação reúne consenso, e a mais prudente é dizer: **os Nok desaparecem do registo arqueológico, mas não sabemos se as pessoas desapareceram**. Provavelmente, alguns dos seus descendentes continuaram na região.',
  { h: 'O saque e a defesa do património' },
  'A fama das terracotas Nok teve um custo enorme. Desde os anos 1970, e sobretudo nos anos 1990, o mercado internacional pagava bem por peças Nok, e **escavações ilegais** destruíram os sítios. Segundo um relato, no auge (1994–95) desenterravam-se cerca de dez peças por dia. Estima-se que **mais de 90%** dos sítios conhecidos foram saqueados. Pior: um saque destrói o **contexto** (onde estava, com quê), que é a informação mais valiosa. Para complicar, muitas peças à venda são **falsas**, e a termoluminescência foi usada para autenticar, mas também houve certificados fraudulentos.',
  'A Nigéria protegeu as peças por lei (a **NCMM** foi criada em 1979 e regula as antiguidades) e as terracotas Nok constam da **Lista Vermelha do ICOM** de objetos arqueológicos africanos em perigo, que alerta museus e comerciantes para o seu comércio ilegal. A Convenção da UNESCO de 1970 contra o tráfico de bens culturais foi ratificada pela Nigéria em 1972 e pela França em 1997.',
  { img: 'nok-red-list', leg: 'Painel de introdução à cultura Nok no Museu Nacional de Nok, fotografado em 2022; imagem de divulgação do património, em alternativa à capa da Lista Vermelha do ICOM.' },
  { h: 'O caso do Louvre' },
  'Em 1998–99, o Estado francês comprou a um negociante de Bruxelas, por 2,5 milhões de francos, três esculturas (duas Nok e uma da cultura de Sokoto), destinadas ao **Pavillon des Sessions** do Louvre, o espaço dedicado às artes de África, Ásia, Oceânia e Américas, inaugurado em abril de 2000, onde duas delas foram expostas. A Nigéria protestou, porque, segundo o seu argumento, as peças constavam da Lista Vermelha do ICOM e a sua exportação era ilegal. Depois de críticas públicas, um acordo de 2002 (a aprovação nigeriana inicial é de 2000) reconheceu a Nigéria como proprietária e as peças ficaram em França num **empréstimo de 25 anos, renovável**; os termos exatos são pouco divulgados e há relatos de alterações posteriores. O caso mostra a tensão entre o prestígio dos museus e a proteção do património. Segundo algumas fontes, as peças estão hoje no Musée du quai Branly – Jacques Chirac; a localização atual deve ser confirmada diretamente com os museus.',
  { img: 'nok-louvre-sessions', leg: 'Vista exterior do Pavillon des Sessions, Louvre, Paris, com a escultura La Rivière em primeiro plano; fotografia de 2006.' },
  { h: 'Onde ver terracotas Nok' },
  { lista: [
    '**Museu de Jos** (Nigéria): o museu fundado por Bernard Fagg, com grande coleção.',
    '**Museu Nacional de Lagos** (Nigéria): peças e cabeças de grande formato.',
    '**Paris** (Louvre e Musée du quai Branly): as peças do caso de 1998; a localização e a exposição atuais devem ser confirmadas.',
    '**Liebieghaus** (Frankfurt): acolheu a exposição «Nok» de 2013–2014 e tem investigação associada.',
    'Outros museus, no Reino Unido e nos EUA, têm peças de origem variada: é essencial perguntar-se sempre como chegaram lá.'
  ] },
  { img: 'nok-liebieghaus', leg: 'Entrada principal do Liebieghaus, museu de escultura em Frankfurt.' },
  { caixa: 'Uma lição', texto: 'Os Nok lembram que uma civilização não precisa de escrita, cidades ou reis para deixar uma obra extraordinária. Também lembram que o que **não** sabemos é tão importante como o que sabemos, e que cada peça saqueada é uma resposta que se perde para sempre.' }
];

const quiz = [
  { p: 'Onde ficava a cultura Nok?', op: ['No vale do Nilo', 'Na Nigéria central', 'No Egito', 'No Sael ocidental, no Mali'], certa: 1, exp: 'A cultura Nok situava-se na Nigéria central, entre Jos, Kaduna e Abuja.' },
  { p: 'De onde vem o nome «Nok»?', op: ['Do nome de um rei', 'De uma aldeia nigeriana onde apareceram as primeiras peças', 'De um deus', 'De um rio'], certa: 1, exp: 'Nok é o nome da aldeia; não sabemos como os próprios Nok se chamavam.' },
  { p: 'O que são as terracotas Nok?', op: ['Esculturas em bronze', 'Esculturas em barro cozido', 'Pinturas em rocha', 'Máscaras de madeira'], certa: 1, exp: 'Terracota é barro cozido; as figuras Nok eram feitas à mão, com rolos de barro.' },
  { p: 'Quem reconheceu a importância das peças em 1943 e deu nome à cultura?', op: ['Leonard Woolley', 'Bernard Fagg', 'Howard Carter', 'Peter Breunig'], certa: 1, exp: 'Bernard Fagg, arqueólogo britânico na Nigéria, reuniu cerca de 200 peças e chamou-lhes Nok.' },
  { p: 'Como apareceram as primeiras terracotas?', op: ['Em escavações de arqueólogos', 'Em minas de estanho, no Planalto de Jos', 'No fundo do mar', 'Numa biblioteca'], certa: 1, exp: 'Foi o trabalho dos mineiros de estanho que revolveu a terra e trouxe as peças à superfície.' },
  { p: 'Que traço é típico das cabeças Nok?', op: ['Olhos triangulares com pupila furada', 'Coroas de ouro', 'Uma só trança', 'Barbas longas'], certa: 0, exp: 'Os olhos triangulares ou em D, de pupila perfurada, são marca de estilo, com penteados elaborados.' },
  { p: 'Segundo a cronologia de Frankfurt, quando começa a cultura Nok?', op: ['c. 500 d.C.', 'c. 1500 a.C.', 'c. 3000 a.C.', 'c. 200 a.C.'], certa: 1, exp: 'A equipa de Frankfurt mostrou que a cultura começa c. 1500 a.C., e as terracotas só c. 900 a.C.' },
  { p: 'Que cereal era a base da alimentação Nok?', op: ['Trigo', 'Arroz', 'Milho-miúdo (pearl millet)', 'Cevada'], certa: 2, exp: 'O milho-miúdo constitui a grande maioria dos restos vegetais Nok identificados.' },
  { p: 'Os Nok deixaram escrita?', op: ['Sim, cuneiforme', 'Sim, hieróglifos', 'Não, não se conhece escrita Nok', 'Sim, um alfabeto próprio'], certa: 2, exp: 'Não há escrita Nok; por isso a sociedade e as crenças são tão difíceis de reconstruir.' },
  { p: 'O que se escavou em Taruga?', op: ['Fornos de ferro e terracotas', 'Uma muralha', 'Uma biblioteca', 'Um palácio'], certa: 0, exp: 'Fagg escavou fornos de ferro e terracotas Nok em Taruga, nos anos 1960.' },
  { p: 'Qual é o debate sobre o ferro na África subsariana?', op: ['Se foi trazido por navios portugueses', 'Se foi inventado de forma independente ou veio do norte', 'Se era feito de bronze', 'Se era só usado em joias'], certa: 1, exp: 'Discute-se se a metalurgia do ferro foi inventada localmente ou difundida do norte; a questão continua em aberto.' },
  { p: 'Qual é a hipótese mais forte para a função das terracotas?', op: ['Brinquedos de crianças', 'Rituais funerários e culto de antepassados', 'Moeda', 'Ídolos de guerra'], certa: 1, exp: 'Há fragmentos partidos de propósito e depositados junto a possíveis sepulturas, mas a função não está provada.' },
  { p: 'Qual é a posição prudente sobre a ligação entre Nok e Ifé?', op: ['Está provada por escrito', 'É uma hipótese: há semelhança, mas mais de mil anos de intervalo', 'Os Nok fundaram Ifé', 'São a mesma cultura'], certa: 1, exp: 'Fagg e Willett propuseram a ligação, mas a falta de provas e o intervalo de tempo impedem certezas.' },
  { p: 'Que problema atingiu os sítios Nok a partir dos anos 1990?', op: ['Inundações', 'Escavações ilegais e tráfico de peças', 'Incêndios de floresta', 'Terramotos'], certa: 1, exp: 'Mais de 90% dos sítios conhecidos foram saqueados, e o contexto das peças perdeu-se.' },
  { p: 'O que se sabe sobre o desaparecimento dos Nok?', op: ['Foram exterminados por uma guerra', 'Desapareceram do registo arqueológico por volta do início da era, mas as causas são debatidas', 'Foram dominados pelo Egito', 'Foi uma erupção vulcânica'], certa: 1, exp: 'As terracotas deixam de aparecer c. 1 d.C., e as hipóteses (solos, clima, mudança social) continuam em debate.' }
];

export default {
  id: 'nok',
  cor: '#8f6f3f',
  emblema: '../assets/img/nok.png',
  nome:    { pt: 'Cultura Nok', en: 'Nok Culture' },
  periodo: { pt: 'c. 1500 a.C. – c. 1 d.C.', en: 'c. 1500 BC – c. AD 1' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
