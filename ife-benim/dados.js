// IFÉ E BENIM — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas aproximadas. a.C. = antes de Cristo, d.C. = depois de Cristo. O projeto cobre até c. 1500 d.C.; o período posterior (contacto português, Benim de Esigie, expedição britânica de 1897, restituições) está num epílogo.
// Os iorubás e os edos não tinham escrita antes do contacto europeu: muita história vem de tradição oral, de arqueologia e de relatos de visitantes europeus. Cada ponto debatido está assinalado.
// Imagens: cada {img:'id'} procura o ficheiro  ife-benim/img/id.jpg  (ver IMAGENS_IFE_BENIM.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    '**Ilé-Ifé** (ou Ifé) e o **Reino do Benim** foram dois centros de poder e de arte da floresta tropical da África Ocidental, no que é hoje o sudoeste da **Nigéria**. Ifé é, para os iorubás, a cidade onde o mundo começou; entre c. 1000 e c. 1500 os seus artistas criaram cabeças de terracota e de latão de um naturalismo tão surpreendente que, quando chegaram à Europa, muitos não acreditaram que fossem africanas. O Benim, a sul e a leste, foi um reino de reis divinos (os **Oba**), com uma capital cercada por fossos e muralhas, uma guilda de fundidores ao serviço da corte e uma diplomacia que chegou a Lisboa no século XVI.',
    'Os dois estão ligados por tradições de realeza, por mitos de origem e, segundo a tradição do Benim, pela fundição do metal. A forma exata dessa ligação é **debatida**, e este capítulo explica porquê.'
  ] },
  { img: 'ife-mapa-regiao', leg: 'Mapa geográfico do sul da Nigéria com Ilé-Ifé e Benin City; costa e rios Natural Earth, com mapa dos povos iorubás da Wikimedia Commons em inserto.' },
  { h: 'Onde ficava' },
  'Ilé-Ifé fica no atual estado de Osun, no sudoeste da Nigéria, numa zona de floresta húmida de transição para a savana, a algumas centenas de quilómetros da costa. O nome costuma ser traduzido como «a casa da expansão» (Ilé, casa; Ifẹ̀, expansão ou propagação), ligado ao mito em que a terra se espalhou sobre a água. A **Cidade de Benim** (Benin City, no atual estado de Edo) fica cerca de 170 km a sudeste de Ifé, em linha reta, no território do povo **edo** (também chamado bini). **Atenção:** o Benim de que se fala aqui nada tem a ver com a atual República do Benim (antigo Daomé), que fica mais a oeste.',
  'A floresta tropical dava madeira, marfim, pimenta, óleo de palma e noz-de-cola; os rios e lagunas davam peixe e vias de transporte. O inhame era a base da alimentação. A mosca tsé-tsé dificultava a criação de cavalos, o que moldou a guerra e o transporte: a infantaria e as canoas contavam mais do que a cavalaria.',
  { img: 'ife-paisagem-floresta', leg: 'Floresta tropical no estado de Bayelsa, sul da Nigéria; fotografia contemporânea.' },
  { h: 'Quando existiram' },
  'Não há escrita local para estes séculos, por isso as datas vêm da arqueologia (radiocarbono e termoluminescência), de listas orais de reis e dos primeiros relatos europeus. As datas anteriores a c. 1450 são aproximadas e **debatidas**.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Ifé antiga', 'c. 800 – 1000 d.C.', 'Povoamento e crescimento urbano de Ifé; vidro e cerâmica (início exato e datação debatidos)'],
    ['Época clássica de Ifé', 'c. 1000 – 1400/1500 d.C.', 'Auge da cidade; esculturas de terracota, pedra e liga de cobre (a datação fina é debatida; ver Linha do tempo)'],
    ['Igodomigodo e os Ogiso', 'c. 900 – c. 1180 d.C. (tradição)', 'Primeiros governantes do futuro Benim, os «reis do céu» (Ogiso), conhecidos apenas por tradição oral; origem do reino'],
    ['Primeiros Oba', 'c. 1180 – 1440 d.C.', 'Eweka I e os primeiros Oba; reino ainda modesto, com chefes hereditários poderosos'],
    ['Ewuare e a expansão', 'c. 1440 – 1473 d.C.', 'Ewuare, o Grande: poder centralizado, cidade murada, conquistas, arte do metal'],
    ['Ozolua e Esigie', 'c. 1481 – c. 1550 d.C.', 'Contacto com os portugueses, expansão, rainha-mãe Idia (as datas exatas de Esigie são debatidas)'],
    ['Epílogo: depois de 1500', 'c. 1550 – 1897 d.C.', 'Comércio atlântico, guerras civis, resistência e, em 1897, a destruição da cidade pelos britânicos']
  ] } },
  { img: 'ife-cabeca-ife-bronze', leg: 'Cabeça real de latão de Ifé, descoberta em Wunmonije em 1938, fotografada no British Museum.' },
  { h: 'De onde vieram?' },
  'Os **iorubás** falam uma língua da família Níger-Congo. Os arqueólogos veem em Ifé uma evolução local de comunidades de aldeias da floresta, e não uma chegada de fora. Os **edos** (ou bini) falam outra língua da mesma grande família e a sua história começa, na tradição, com a região de **Igodomigodo**, governada pelos Ogiso. Ambos tinham em comum a vida urbana na floresta e a ideia de que o rei era um ser sagrado. A hipótese, dos tempos coloniais, de que a arte de Ifé fora feita por gregos ou por sobreviventes da Atlântida (Leo Frobenius, 1910) **não tem qualquer base** e foi desmentida: é um exemplo de como o preconceito atrasou o reconhecimento da arte africana.',
  { h: 'Porque importam' },
  { lista: [
    '**Arte:** as cabeças de Ifé e os bronzes do Benim estão entre as grandes obras de fundição a cera perdida de todo o mundo, na história da arte.',
    '**Cidade e Estado:** cidades grandes, planeadas, muralhadas, com monarquias sagradas e administração complexa, sem escrita.',
    '**Terraplenagem:** as muralhas e fossos do Benim são uma das maiores obras de terra anteriores à era das máquinas (ver Mapa).',
    '**Contacto entre África e Europa:** o Benim foi dos primeiros reinos africanos a trocar embaixadores e mercadorias com Portugal, em pé de relativa igualdade.',
    '**Memória e justiça:** a pilhagem de 1897 e as restituições atuais são um dos grandes debates mundiais sobre museus.'
  ] },
  { caixa: 'Ifé e o Benim hoje', texto: 'Ilé-Ifé continua a ser a cidade sagrada dos iorubás, com o seu **Ooni** (rei) e a Universidade Obafemi Awolowo. A Cidade de Benim é a capital do estado de Edo e a sede do **Oba do Benim**, hoje Ewuare II (desde 2016), descendente da dinastia fundada, segundo a tradição, por Eweka I. As corporações de fundidores ainda trabalham na Rua Igun, em Benim.' },
  { img: 'ife-oba-ewuare-ii', leg: 'Oba Ewuare II na festa de Igue, em fotografia contemporânea.' }
];

const linha = [
  'Esta linha do tempo vai até c. 1550. O período posterior vem num epílogo no fim. As datas anteriores a c. 1450 são aproximadas; as tradições orais estão assinaladas como tal.',
  { linha: [
    { d: 'c. 800 – 1000 d.C.', t: 'Ifé cresce como cidade', x: 'Escavações em Ifé mostram povoamento e urbanização crescente nos séculos IX–XI, com oficinas de vidro; os célebres **pavimentos de cacos de cerâmica** e quartzo dispostos em padrões nas ruas e pátios são, segundo vários autores, sobretudo dos séculos seguintes (datação debatida). Os arqueólogos discutem se a cidade surgiu antes (alguns indícios recuam séculos) ou nesta fase.' },
    { d: 'c. 850 d.C.', t: 'Igbo-Ukwu: um centro de bronze ao lado', x: 'No sudeste da Nigéria, em Igbo-Ukwu, artesãos fundem a cera perdida vasos e objetos rituais em bronze de grande complexidade (descobertos em 1938 e escavados por Thurstan Shaw em 1959–60). É **outro** foco de metalurgia, anterior ao auge de Ifé; a sua ligação direta a Ifé ou ao Benim é desconhecida. Aparece aqui apenas como contexto.' },
    { d: 'c. 900 d.C.', t: 'Os Ogiso de Igodomigodo', x: 'Segundo a tradição edo, a região foi governada por uma dinastia de reis chamados **Ogiso** («reis do céu»), de que se enumeram 31. Os primeiros são lendários; arqueologicamente, há sinais de povoamento organizado e de obras de terra a partir de c. 800–900 d.C. Muito é tradição, pouco é confirmado.' },
    { d: 'c. 800 – séc. XV d.C.', t: 'Construção das terraplenagens (Iya) do Benim', x: 'Valas e taludes de terra rodeiam aldeias e a cidade ao longo de séculos. O Livro Guinness dos Recordes dá-lhes o título de maior obra de terra anterior à era mecânica (estimativa de c. 16 000 km, associada ao arqueólogo Patrick Darling, que fez o levantamento a partir dos anos 1970; as datações por radiocarbono apontam para obras desde c. 800 d.C. até ao séc. XV). O número é uma **estimativa** discutida; ver Mapa.' },
    { d: 'séculos XI – XV d.C.', t: 'O vidro de Igbo Olokun', x: 'Num sítio junto a Ifé (Igbo Olokun) encontrou-se uma oficina de produção de contas de vidro, das mais antigas conhecidas na África Ocidental, em atividade entre os séculos XI e XV. As contas circulavam nas redes comerciais regionais.' },
    { d: 'c. 1000 – 1500 d.C.', t: 'A época dos artistas de Ifé', x: 'Surgem as esculturas de terracota, pedra e liga de cobre que fizeram a fama de Ifé. A datação fina é **debatida**: a maior parte das peças metálicas costuma situar-se entre c. 1100 e 1500, com muitas atribuídas aos séculos XIV–XV, mas há quem proponha cronologias mais curtas.' },
    { d: 'c. 1180 d.C.', t: 'Eweka I, primeiro Oba', x: 'A tradição do Benim conta que, depois da queda do último Ogiso (Owodo) e de uma crise política, os chefes pediram a Ifé um príncipe que restaurasse a ordem. Veio **Oranmiyan**, que não ficou; o seu filho **Eweka I**, nascido de uma mulher edo, foi o primeiro Oba. A data (séc. XII ou XIII) e a própria história são **debatidas**; ver o quadro adiante.' },
    { d: 'séc. XIII – XV d.C.', t: 'Oguola, Iguegha e o latão', x: 'A tradição conta que o Oba Oguola pediu a Ifé um mestre fundidor, **Iguegha**, e que este ensinou os edos a fundir o metal. Os historiadores da arte situam o começo do latão do Benim por volta de 1400; a tradição edo coloca Oguola mais cedo. A data e a escola de origem são **incertas**, mas a ligação técnica entre Ifé e Benim é aceite por muitos especialistas.' },
    { d: 'c. 1440 d.C.', t: 'Ewuare, o Grande, sobe ao trono', x: 'Depois de uma luta pelo poder que incluiu exílio e guerra civil, Ewuare (nascido Ogun) torna-se Oba. Reorganiza o Estado, reforça o poder real e dá origem à sucessão por filho mais velho (Edaiken, príncipe herdeiro).' },
    { d: 'c. 1440 – 1473 d.C.', t: 'A cidade de Ewuare', x: 'A tradição atribui-lhe o alargamento das **muralhas e fossos** da cidade, a abertura de grandes ruas, o palácio e a conquista de centenas de povoações (201, segundo a tradição). A arqueologia confirma obras no século XV. O reino torna-se um império regional.' },
    { d: 'séc. XV d.C.', t: 'Cabeças comemorativas e altares dos antepassados', x: 'Os fundidores da guilda **Igun Eronmwon** produzem cabeças de latão para os altares dos Oba falecidos. Os primeiros exemplares são finos e leves; depois ficam maiores e mais pesados. A tradição é contínua até 1897.' },
    { d: 'c. 1481 – 1504 d.C.', t: 'Ozolua, o conquistador', x: 'O Oba Ozolua, filho de Ewuare, expande o reino e consolida o comércio com os portugueses. A tradição lembra-o como grande guerreiro. A sua mulher é **Idia**, mãe de Esigie.' },
    { d: 'c. 1485 – 1486 d.C.', t: 'Chegam os portugueses', x: 'Navegadores portugueses chegam à costa do golfo da Guiné na década de 1470. Por volta de **1485–86**, **João Afonso de Aveiro** visita o Benim, e esta viagem é tomada como o início das relações regulares com Portugal. As datas variam um pouco entre as fontes.' },
    { d: 'séc. XVI d.C.', t: 'Manilhas, pimenta e latão', x: 'Os portugueses trazem **manilhas** (braceletes de latão e cobre), tecidos e contas, e levam marfim, pimenta e outros bens. Os historiadores pensam que parte do metal dos bronzes do Benim vem destas manilhas, sobretudo de origem alemã; a origem exata do metal é debatida. Segundo alguns historiadores, o Benim restringiu durante algum tempo a exportação de escravos do sexo masculino (**debatido**).' },
    { d: 'c. 1506 d.C.', t: 'O primeiro retrato escrito do Benim', x: 'O navegador e geógrafo português **Duarte Pacheco Pereira** descreve o reino e a cidade na sua obra «Esmeraldo de Situ Orbis» (início do séc. XVI), uma das primeiras descrições europeias do Benim.' },
    { d: 'c. 1504 – 1550 d.C.', t: 'Esigie e Idia', x: 'Esigie, filho de Ozolua, sobe ao trono com o apoio militar da mãe, **Idia**, contra o meio-irmão Arhuaran. É o primeiro Oba a criar o título de **Iyoba** (rainha-mãe) para ela. As datas exatas do seu reinado variam entre fontes (de c. 1504 a c. 1517 para o início).' },
    { d: 'c. 1514 – 1516 d.C.', t: 'Missionários portugueses no Benim', x: 'Missionários portugueses chegam à corte. Esigie aprende português e permite instrução cristã ao filho, mas as fontes divergem sobre a sua conversão. Pedem-lhe que adie a pregação enquanto prepara a guerra contra Idah. Os portugueses fornecem arcabuzeiros e outros apoios (o papel exato é debatido).' },
    { d: 'c. 1515 – 1517 d.C.', t: 'Guerra contra Idah (reino Igala)', x: 'O Benim vence o reino dos **Igala**, com Idia a ser lembrada pelo seu papel espiritual e político. A vitória é celebrada em arte, incluindo as máscaras de marfim da rainha-mãe.' }
  ] },
  { img: 'ife-igbo-ukwu-vaso', leg: 'Vaso cerimonial de bronze em forma de concha, Igbo-Ukwu, século IX, Museu Nacional de Lagos.' },
  { img: 'ife-mascara-obalufon', leg: 'Máscara de cobre atribuída a Obalufon II, Ifé, provavelmente séculos XII–XV.' },
  { img: 'ife-cabeca-terracota', leg: 'Cabeça de terracota de Ifé.' },
  { img: 'ife-placa-portugueses', leg: 'Placa de latão do Benim com portugueses.' },
  { img: 'ife-cabeca-oba-latao', leg: 'Cabeça comemorativa de latão de um Oba do Benim.' },
  { h: 'Epílogo: depois de 1500' },
  'O projeto «Civilizações» termina por volta de 1500, mas o Benim continuou a existir muito depois. Eis o essencial, em linhas gerais.',
  { linha: [
    { d: 'séc. XVI – XVII d.C.', t: 'As placas de latão da corte', x: 'Centenas de **placas retangulares** de latão revestem as colunas do palácio, com cenas de guerra, rituais, funcionários e portugueses. A sua datação exata é **debatida** (sobretudo séculos XVI–XVII).' },
    { d: 'c. 1668 d.C.', t: 'A descrição de Dapper', x: 'O holandês Olfert Dapper publica uma descrição do Benim baseada em relatos de viajantes: ruas largas, casas organizadas e um grande palácio. É um dos principais testemunhos europeus sobre a cidade antes da destruição.' },
    { d: 'finais do séc. XVII – séc. XVIII', t: 'Guerras civis e transformações', x: 'Depois de séculos de poder, o reino atravessa disputas de sucessão e guerras civis. Recupera mais tarde, mas perde parte da sua extensão. O comércio de escravos, de marfim e de óleo de palma marca o século XVIII e XIX.' },
    { d: '1897 d.C.', t: 'A expedição punitiva britânica', x: 'Em janeiro, uma delegação britânica liderada por **James Phillips** é atacada perto do Benim e quase toda morta. Em fevereiro, cerca de 1200 militares britânicos tomam a cidade (a 18) e o palácio arde pouco depois. O Oba **Ovonramwen**, que se entrega mais tarde nesse ano, é exilado para Calabar. Muitos milhares de objetos são saqueados (cerca de 2500 enviados para a Grã-Bretanha segundo números oficiais; as estimativas do total vão de c. 3000 a 5000 ou mais) e depois vendidos ou doados a museus.' },
    { d: '1910 – 1938 d.C.', t: 'Frobenius e a descoberta das cabeças de Ifé', x: 'Em 1910, o etnólogo alemão **Leo Frobenius** visita Ifé, vê a arte e propõe uma origem «atlante» ou grega, recusando crer que fosse africana. Em 1938, trabalhos no complexo **Wunmonije** descobrem cerca de 17 cabeças de liga de cobre. A autoria iorubá só seria aceite pelos especialistas nos anos seguintes.' },
    { d: '1948 – anos 1960', t: 'Reconhecimento e arqueologia de Ifé', x: 'Em 1948, uma exposição no Museu Britânico mostra as cabeças de Ifé ao público europeu e muda a perceção da arte africana. Nos anos 1950 e 1960, **Frank Willett** dirige escavações em Ifé, confirma a origem local das esculturas e propõe datações.' },
    { d: '2021 – 2022 d.C.', t: 'As restituições começam', x: 'Em outubro de 2021 a Universidade de Aberdeen e o Jesus College de Cambridge entregam uma cabeça de Oba e o galo de latão (okukor). Em 2022 o **Museu Horniman** (Londres) anuncia em agosto a devolução e transfere formalmente a propriedade em novembro; o **Smithsonian** devolve 29 peças (outubro); a **Alemanha** assina em julho uma declaração para restituir 1130 objetos e entrega os primeiros a 20 de dezembro. O **Museu Britânico**, com cerca de 900 peças, mantém-se à parte.' }
  ] }
];

const mapa = [
  'Ifé e o Benim eram menos uma rede de cidades-estado do que dois reinos centrados numa capital sagrada. Este mapa localiza os pontos principais; a seguir descreve-se cada um.',
  { img: 'ife-mapa-reinos', leg: 'Mapa sem rótulos do sul da Nigéria: estrela em Ifé, quadrado em Benin City e círculos em Oyo-Ile, Ijebu-Ode e Warri. Costa e rios geográficos; vegetação generalizada, sem fronteiras políticas reconstruídas.' },
  { tabela: { cab: ['Lugar', 'Reino ou povo', 'Local hoje', 'Para que ficou conhecido'], linhas: [
    ['Ilé-Ifé', 'Iorubá', 'Estado de Osun, Nigéria', 'Cidade sagrada e berço dos iorubás; cabeças de terracota e de latão; sede do Ooni'],
    ['Cidade de Benim', 'Edo', 'Estado de Edo, Nigéria', 'Capital do Reino do Benim; palácio; fossos e muralhas; guilda dos fundidores'],
    ['Igbo-Ukwu', 'Igbo', 'Estado de Anambra, Nigéria', 'Bronzes do séc. IX–X; reino de Nri (contexto)'],
    ['Oió (Old Oyo)', 'Iorubá', 'Estado de Oió, Nigéria', 'Poder iorubá posterior; cavalaria; império nos séc. XVII–XVIII (contexto)'],
    ['Idah', 'Igala', 'Estado de Kogi, Nigéria', 'Reino rival vencido por Esigie c. 1515'],
    ['Owo', 'Iorubá do nordeste', 'Estado de Ondo, Nigéria', 'Escultura de terracota e marfim; vizinho com influência dos dois lados'],
    ['Ughoton (Gwato)', 'Edo', 'Perto da costa, estado de Edo', 'Porto do Benim, onde os portugueses desembarcavam']
  ] } },
  { h: 'Ilé-Ifé, a cidade sagrada' },
  'Ifé não era uma capital imperial; era o centro religioso. Para os iorubás, é o lugar onde o mundo foi criado e onde nasceu a humanidade; a realeza da maior parte dos reinos iorubás (Oió, Ketu, Ijebu, Owo e outros) remonta a um príncipe de Ifé. Os arqueólogos encontraram uma cidade com quarteirões, oficinas, ruas com pavimentos de cacos de cerâmica e um palácio. O **Ooni** é ainda hoje a figura mais venerada do mundo iorubá.',
  { img: 'ife-ile-ife-vista', leg: 'Vista contemporânea de Ilé-Ifé.' },
  { img: 'ife-opa-oranmiyan', leg: 'Opa Oranmiyan, monólito de granito em Ifé.' },
  { h: 'Cidade de Benim' },
  'A cidade de Benim, capital do Oba, foi descrita pelos visitantes europeus do século XVI como grande e bem ordenada, com ruas largas e retilíneas, bairros de artesãos e um vasto **palácio** de pátios, galerias e colunas revestidas de placas de latão. Uma grande avenida dividia a cidade entre o setor do palácio e o dos ofícios. A cidade tinha **bairros por ofício**, como o dos fundidores de latão, a **Rua Igun**, que ainda existe. Os ofícios eram hereditários e organizados em guildas controladas pela corte.',
  { img: 'ife-benim-dapper', leg: 'Gravura de Benin City publicada por Dapper em 1668.' },
  { img: 'ife-benim-palacio', leg: 'Reconstrução artística hipotética do palácio de Benin City, c. 1600, com pilares revestidos de placas de latão. Ilustração gerada por IA.' },
  { h: 'As muralhas e os fossos (Iya)' },
  'A cidade era rodeada por fossos e taludes (em edo, **iya**) e, à volta dela, por uma rede de valas que cercavam aldeias e territórios. Alguns fossos eram muito profundos. O arqueólogo **Patrick Darling**, que fez o levantamento a partir dos anos 1970, estimou o comprimento total em cerca de **16 000 km**, e o Livro Guinness dos Recordes adotou-o como a **maior terraplenagem do mundo anterior à era mecânica**, com cerca de 150 milhões de metros cúbicos de terra movida (valor também estimado). É preciso cautela: essa cifra é uma **estimativa** sobre uma rede de milhares de troços locais e não uma muralha contínua; e o recorde é uma classificação do Guinness, não uma conclusão consensual da arqueologia. As datações por radiocarbono sugerem construção a partir de c. 800 d.C. e até ao século XV, com a muralha interior da cidade c. 1460 e obras atribuídas pela tradição a Ewuare. Segundo vários estudiosos, a função era sobretudo de **delimitação e proteção do território**, mais do que de defesa militar contínua.',
  { caixa: 'Maior do mundo? O que se pode dizer', texto: 'O recorde do Guinness refere-se ao **comprimento total** da rede (c. 16 000 km, estimativa de Darling). É uma estimativa para um sistema de milhares de troços e não uma muralha única; por isso, o mais prudente é dizer que o Benim tem **um dos maiores sistemas de terraplenagem anteriores à mecanização**.' },
  { img: 'ife-muralhas-fosso', leg: 'Vestígios de fosso e talude do Benim.' },
  { img: 'ife-muralhas-esquema', leg: 'Corte esquemático de um fosso e talude de terra: exterior à esquerda, interior do povoado à direita. Figura humana para comparação; sem dimensões medidas.' },
  { h: 'O comércio' },
  'O Benim exportava **marfim, pimenta, tecidos de algodão, óleo de palma e produtos de artesanato**. Importava **manilhas** de latão e de cobre, tecidos, contas, coral, sal e armas. Ifé ficava no cruzamento de rotas que levavam sal, contas de vidro, cobre e cola entre a floresta e a savana. O contacto marítimo com os portugueses, a partir de c. 1485, abriu uma nova rota pelo porto de Ughoton.',
  { img: 'ife-manilhas', leg: 'Manilhas de latão, usadas como moeda.' },
  { img: 'ife-benim-porto', leg: 'Interpretação artística da chegada de portugueses ao porto de Ughoton no fim do século XV. Ilustração gerada por IA.' }
];

const sociedade = [
  { h: '1. Organização política' },
  'O Benim era uma **monarquia sagrada**: o **Oba** era descendente de uma linhagem divina e simbolizava a unidade do povo. Governava com um conselho de chefes. Os **Uzama** eram os grandes chefes hereditários, antigos protagonistas da escolha de reis; depois de Ewuare, o poder real fortaleceu-se com os chefes nomeados do palácio e da cidade (**Eghaevbo n’Ore** e **Eghaevbo n’Ogbe**). A sucessão passou a ser de pai para o filho mais velho (o **Edaiken**). A **Iyoba**, mãe do Oba, tinha palácio próprio em Uselu e prestígio político: o título foi criado por Esigie para Idia. Nas aldeias, o chefe era o mais velho do povoado, o **Odionwere** (também grafado Edionwere).',
  'Ifé era diferente: o **Ooni** era o rei-sacerdote da cidade sagrada. A sua autoridade era sobretudo **religiosa**, e as grandes monarquias iorubás reconheciam-lhe a primazia ritual.',
  { img: 'ife-corte-oba', leg: 'Placa de latão com o Oba a cavalo e atendentes, povo Edo, Benim; Metropolitan Museum of Art.' },
  { h: '2. Classes sociais' },
  { lista: [
    '**O rei:** o Oba e o Ooni, sagrados, com insígnias de coral e marfim.',
    '**Grandes chefes e nobres:** Uzama e outros, com cargos no palácio e na cidade.',
    '**Artesãos de guilda:** fundidores, entalhadores de marfim e madeira, tecelões, ferreiros, em ofícios hereditários.',
    '**Agricultores e comerciantes:** a maioria, vivendo nas aldeias e nos mercados.',
    '**Cativos e servos:** a escravatura existia; os cativos de guerra trabalhavam para a corte e eram também vendidos.'
  ] },
  { h: '3. Religião' },
  'Os iorubás acreditavam num deus supremo, **Olodumare**, que se manifesta através de divindades (**orixás**). No mito de origem mais conhecido, Olodumare encarregou **Obatalá** de criar a terra; o mundo, porém, acabou por ser criado por **Odudua**. A crença na importância da cabeça (**ori**) como sede do destino é central e explica o valor dado às cabeças na arte. Os edos veneravam **Osanobua**, o criador, e uma série de divindades, entre as quais **Olokun** (a água e a riqueza) e **Ogun** (o ferro). Os Oba falecidos eram venerados em **altares dos antepassados**, no palácio, com cabeças de latão.',
  { tabela: { cab: ['Divindade', 'Povo', 'Domínio'], linhas: [
    ['Olodumare', 'Iorubá', 'Deus supremo, origem de tudo'],
    ['Obatalá', 'Iorubá', 'Criador dos corpos humanos; pureza; cor branca'],
    ['Odudua (Oduduwa)', 'Iorubá', 'Ancestral dos reis iorubás; fundador de Ifé segundo a tradição'],
    ['Orunmila (Ifá)', 'Iorubá', 'Sabedoria e adivinhação; sistema Ifá, com 256 figuras (odù)'],
    ['Ogun', 'Iorubá e edo', 'Ferro, guerra, ferreiros e fundidores'],
    ['Olokun', 'Iorubá e edo', 'Águas profundas, mar e riqueza; culto com cabeças'],
    ['Osanobua', 'Edo', 'Deus supremo criador'],
    ['Osun', 'Edo', 'Plantas medicinais e cura']
  ] } },
  { img: 'ife-altar-antepassados', leg: 'Altar dos antepassados no palácio real de Benin City, fotografia de Cyril Punch, maio de 1891.' },
  { h: '4. Economia' },
  'A base era a agricultura (inhame, mandioca mais tarde, palmeiras), a caça e a pesca. A corte controlava o comércio externo e as guildas. O marfim e a pimenta eram bens de exportação; o latão, de importação. As **manilhas** serviam de moeda. Os mercados eram o centro da vida de bairro; as mulheres dominavam muito do comércio local.',
  { h: '5. Escrita e memória' },
  'Nem Ifé nem o Benim tinham escrita própria. A história guardava-se na **tradição oral**, nos cantores da corte, nos altares e nas **placas de latão**, que funcionavam como arquivo visual da corte. Os iorubás tinham o **Ifá**, um grande corpus oral de versos memorizados pelos adivinhos. Com os portugueses, alguns membros da corte aprenderam a ler português.',
  { h: '6. Casa e cidade' },
  'As casas edo e iorubá eram de **terra batida** (tijolo cru), com telhado de palmas ou de colmo, organizadas em torno de **pátios com tanque** (o impluvium) para recolher a água da chuva. O palácio do Oba era um conjunto vasto de pátios. Em Ifé, os pavimentos de cacos de cerâmica decoravam ruas e pátios.',
  { img: 'ife-casa-edo', leg: 'Reconstrução artística de uma casa de pátio Edo/iorubá no século XV, com recolha de águas da chuva. Ilustração gerada por IA.' },
  { h: '7. Alimentação' },
  'Inhame pilado (hoje o *pounded yam*), óleo de palma, pimenta, feijão, peixe seco e de rio, carne de caça, noz-de-cola, vinho de palma. A pimenta (*Piper guineense*) foi um dos produtos que interessou aos portugueses. A noz-de-cola tinha valor social e ritual.',
  { h: '8. Vestuário e adorno' },
  'Os tecidos eram de algodão, tecidos em teares estreitos, em faixas cosidas. A corte usava **contas de coral** vermelho, que eram insígnia real, marfim e latão. Os Oba apresentam-se nas placas com colares de coral, saiotes decorados e coroas de contas. Em Ifé as esculturas mostram coroas de contas e penteados elaborados.',
  { img: 'ife-regalia-coral', leg: 'Contas e toucado de coral representados numa cabeça comemorativa de um Oba; substitui a fotografia das insígnias.' },
  { h: '9. Música, festa e jogos' },
  'A música tinha tambores, sinos duplos de ferro, chocalhos e **trompas de marfim**. As festas da corte, como o **Igue** (ligado a Ewuare), renovavam a proteção espiritual do Oba e do reino. Entre os iorubás, um dos jogos de tabuleiro mais populares era o **ayo** (da família do mancala).',
  { h: '10. Ciência e conhecimento' },
  'O **Ifá** é, ao mesmo tempo, religião, filosofia e método de decisão, com 256 figuras (odù) obtidas por combinações binárias de marcas. A medicina combinava plantas e rituais; **Osun**, entre os edos, era o deus ligado ao saber das plantas.',
  { h: '11. Tecnologia' },
  'Os fundidores de Ifé e do Benim dominavam a **fundição a cera perdida**: um modelo de cera coberto de argila, que ao ser aquecido derrete a cera e deixa um molde onde se verte o metal. As ligas eram latão (cobre e zinco), bronze e cobre quase puro. Ifé produzia também vidro, terracota e esculturas de pedra; os ferreiros trabalhavam ferro desde há muito.',
  { img: 'ife-fundicao', leg: 'Interpretação artística de fundidores do Benim numa oficina de fundição de latão pela técnica da cera perdida. Ilustração gerada por IA.' },
  { img: 'ife-igun-street', leg: 'Escultura do Benim fundida pela técnica da cera perdida, séculos XV–XVI, Louvre; substitui a fotografia de um fundidor da Rua Igun.' },
  { h: '12. Guerra' },
  'O exército do Benim era de infantaria, com lanças, espadas (*ada*), escudos e arcos, e canoas nos rios. Os guerreiros apareciam nas placas com capacetes, colares de coral e ornamentos. Depois de Ewuare, a conquista foi sistemática. Com os portugueses chegam as armas de fogo e, em 1515–17, arcabuzeiros acompanham campanhas, embora o papel exato seja debatido.',
  { img: 'ife-guerreiros-placa', leg: 'Placa de latão com chefe guerreiro do Benim, Metropolitan Museum of Art.' }
];

const personalidades = [
  'Nesta parte, a história e a tradição misturam-se. Marca-se com clareza o que é lenda e o que é conhecido.',
  { h: 'Odudua (Oduduwa), figura lendária' },
  'Figura central dos mitos iorubás: o ancestral dos reis, que desceu a Ifé e dali espalhou os seus descendentes. Segundo uma versão, Obatalá recebeu de Olodumare uma corrente, um galo e terra para criar o mundo, mas embriagou-se, e Odudua tomou o seu lugar e criou a terra, espalhando-a sobre a água com a ajuda do galo. É **tradição mítica**; se há um núcleo histórico, não se consegue provar.',
  { img: 'ife-criacao-mito', leg: 'Interpretação mitológica da criação de Ifé: Oduduwa, terra e um galo espalhando o solo sobre a água. Ilustração gerada por IA.' },
  { h: 'Obatalá, orixá' },
  'Divindade que molda os corpos humanos, associada à pureza e ao branco. O mito diz que, ao criar os humanos, se embriagou com vinho de palma e que os que moldou nessa altura saíram imperfeitos; por isso os seus devotos evitam o vinho de palma. Mito, não história.',
  { h: 'Oranmiyan' },
  'Príncipe lendário de Ifé, filho de Odudua. A tradição do Benim diz que foi convidado a restaurar a ordem depois dos Ogiso, mas desistiu de um povo «difícil» e partiu, deixando o filho Eweka I. A tradição iorubá diz que depois fundou Oió. **Debatido:** os historiadores duvidam de que seja uma só figura histórica; uma história alternativa de origem edo inverte a direção (ver quadro).',
  { caixa: 'Quem fundou a dinastia do Benim? Três versões', texto: [
    '**Tradição oficial do Benim e de Ifé:** os chefes pediram a Ifé um príncipe; veio Oranmiyan, que gerou Eweka I, primeiro Oba (c. 1180).',
    '**Tradição edo alternativa (mais recente e menos consensual):** o fundador foi Ekaladerhan, filho exilado do último Ogiso, que depois se tornou Odudua em Ifé; o seu filho voltou ao Benim. Alguns historiadores veem nesta versão uma **reelaboração recente**.',
    '**Historiadores:** reconhecem laços entre as dinastias de Ifé e do Benim, mas duvidam de que se possa provar uma fundação por um príncipe de Ifé. A ligação mais bem apoiada por evidência é **técnica e artística** (a fundição do latão).'
  ] },
  { h: 'Obalufon (Obalufon Alayemore)' },
  'Rei (Ooni) de Ifé em tradição, ligado à arte da fundição e à tecelagem, e identificado com a máscara de cobre e com a cabeça de latão de Ifé (hipótese de museus e historiadores). A identificação é **possível, não certa**. Os artesãos de Ifé veneravam-no como patrono dos fundidores.',
  { img: 'ife-obalufon-cabeca', leg: 'Cabeça de latão de um Ooni de Ifé; a fotografia não identifica o rei como Obalufon.' },
  { h: 'Eweka I' },
  'Primeiro Oba do Benim segundo a tradição, **c. 1180** (as datas variam do séc. XII ao XIII). Filho de Oranmiyan e de uma mulher edo (Erinmwide), é o fundador simbólico da dinastia que ainda reina. A tradição diz que o seu pai quis que o reino fosse governado por quem nascesse na terra.',
  { h: 'Oguola e Iguegha' },
  'Oguola é lembrado como um Oba que teria pedido a Ifé um mestre fundidor, **Iguegha**, que ensinou o ofício aos edos (o Museu Metropolitano de Nova Iorque situa a vinda c. 1400). Sem datação independente: **tradição** com provável fundo de verdade técnico.',
  { h: 'Ewuare, o Grande' },
  'Oba do Benim, **c. 1440 – 1473**, nascido Ogun. Reformou o Estado, reforçou o poder real e criou a cidade tal como os europeus a veriam: grandes ruas, muralhas e fossos e palácio. A tradição credita-lhe a conquista de **201** povoações. A sua figura mistura facto e epopeia, mas as reformas são consideradas históricas.',
  { img: 'ife-ewuare', leg: 'Retrato imaginado de Ewuare, o Grande, c. 1450; não reproduz uma imagem histórica conhecida. Ilustração gerada por IA.' },
  { h: 'Ozolua' },
  'Oba, c. 1481–1504, filho de Ewuare. Recebeu os primeiros comerciantes portugueses e é lembrado como grande guerreiro.',
  { h: 'Esigie' },
  'Oba, **c. 1504 – c. 1550** (o início é debatido, até c. 1517). Venceu Idah; recebeu os missionários portugueses; aprendeu português e manteve diplomacia com Lisboa. Criou o título de Iyoba para a mãe.',
  { h: 'Idia, a primeira Iyoba' },
  'Mãe de Esigie, mulher do Oba Ozolua. Segundo a tradição, levantou um exército para garantir o trono ao filho e teve papel na guerra contra Idah, com conhecimentos de medicina e magia. Esigie criou para ela o título de **Iyoba** e, segundo o Metropolitan, encomendou **máscaras de marfim** em sua honra, pendentes usados em cerimónias, com uma coroa de rostos de portugueses e de peixes-lama. Há várias máscaras deste tipo em museus (entre outros o Museu Britânico e o Metropolitan), e uma imagem de uma delas foi o símbolo do festival FESTAC de 1977.',
  { img: 'ife-mascara-idia', leg: 'Máscara pendente de marfim da Iyoba Idia, Metropolitan Museum of Art.' },
  { h: 'Ovonramwen (Overami)' },
  'Oba na altura da invasão britânica de 1897. Foi capturado, exilado para Calabar e morreu em 1914; o filho **Eweka II** foi instalado como Oba. Está fora do período principal, mas é a figura que fecha a história do reino antigo.',
  { img: 'ife-ovonramwen', leg: 'Oba Ovonramwen a bordo do H.M. Ivy a caminho do exílio em Calabar, fotografia de Jonathan Adagogo Green, 1897.' },
  { h: 'Leo Frobenius' },
  'Etnólogo alemão (1873–1938) que visitou Ifé em 1910. Deixou notas valiosas, mas explicou a arte pela fantasia da Atlântida, recusando reconhecer a capacidade dos africanos. **Julgamento histórico:** o seu mérito foi chamar a atenção; o seu erro é um aviso.',
  { h: 'Frank Willett' },
  'Arqueólogo britânico (1925–2006). Escavou em Ifé nos anos 1950 e 1960 e escreveu os primeiros trabalhos modernos sobre a arte de Ifé, demonstrando a sua origem iorubá local.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**As cabeças de Ifé:** um naturalismo raro, com rostos que parecem retratos. Mudaram a forma como o mundo vê a arte africana.',
    '**Os bronzes do Benim:** um arquivo de arte de corte, com placas, cabeças, sinos, esculturas de marfim e altares.',
    '**As muralhas do Benim:** o maior sistema de terraplenagem anterior à mecanização, uma obra coletiva de séculos.',
    '**A monarquia sagrada:** o Oba e o Ooni continuam como autoridades tradicionais na Nigéria.',
    '**O Ifá:** um sistema de adivinhação reconhecido pela UNESCO como Património Cultural Imaterial da Humanidade.',
    '**A diáspora:** as religiões de matriz iorubá (candomblé, santería e outras) chegaram às Américas com milhões de africanos escravizados; Ifé é a sua origem simbólica.'
  ] },
  { h: 'A arte' },
  'A **cabeça de latão de Ifé** tem cerca de 35 cm e pesa 5,1 kg, de liga de zinco e cobre, com linhas verticais finas na cara (escarificação, ou fios de um véu de contas: as interpretações variam) e furos em volta do cabelo e do queixo, provavelmente para fixar uma coroa, barba ou véu. Os artistas trabalharam também em **terracota** e **pedra**. Os retratos de terracota mostram homens e mulheres com expressões individuais.',
  { img: 'ife-cabeca-ife-museu', leg: 'Cabeça de Ifé fotografada no Kimbell Art Museum; substitui a vista de várias cabeças em exposição.' },
  { img: 'ife-oba-bronze-cabeca', leg: 'Cabeça comemorativa de um Oba do Benim, século XVI, Metropolitan Museum of Art; alternativa à peça tardia pedida.' },
  { h: 'A arquitetura' },
  'Os palácios e casas eram de terra e madeira, e o que sobrou foi destruído em 1897 ou em obras posteriores. O que dura são as **muralhas de terra** e os pavimentos de cacos de Ifé. As placas de latão mostram edifícios do palácio com torres encimadas por serpentes e pássaros.',
  { h: 'A redescoberta' },
  'A arte do Benim chegou à Europa em 1897 e teve impacto imediato: o etnólogo **Felix von Luschan** comparou os bronzes aos de Benvenuto Cellini, e alguns europeus chegaram a supor, sem fundamento, que a técnica fosse europeia. A arte de Ifé foi revelada ao mundo em 1938 e reconhecida como africana nos anos 1940. Em 1948, o Museu Britânico expôs-a em Londres.',
  { h: 'A pilhagem e a restituição' },
  'Em 1897 os britânicos saquearam o palácio, e as peças foram para museus e coleções privadas em Londres, Berlim, Viena, Oxford, Nova Iorque e muitas outras cidades. Hoje, as restituições avançam:',
  { lista: [
    '**2021:** a Universidade de Aberdeen (anúncio em março) e o Jesus College, de Cambridge (anúncio em outubro), restituem uma cabeça de um Oba e um galo de latão (okukor). O Metropolitan transfere duas placas em novembro.',
    '**2022:** o Museu Horniman anuncia em agosto a devolução de 72 objetos (transferência formal em novembro); o Smithsonian devolve 29 peças (outubro); a Alemanha assina em julho um acordo para restituir 1130 objetos e a 20 de dezembro entrega as primeiras peças.',
    '**Depois de 2022:** outros museus na Europa e nos EUA seguem o exemplo, e a discussão em torno do Museu Britânico continua.',
    '**Museu Britânico:** com cerca de 900 peças, é o maior detentor; defende que a lei de 1963 o impede de alienar a coleção. O debate continua.',
    '**Quem fica com as peças?** Discute-se se devem ficar com o Oba, com o governo do estado de Edo ou com a comissão federal de museus: é uma questão ainda não resolvida.'
  ] },
  { img: 'ife-restituicao-alemanha', leg: 'Bronze do Benim fotografado no Horniman Museum, imagem ilustrativa do tema da restituição; não mostra a entrega da Alemanha em 2022.' },
  { h: 'O Museu de Arte da África Ocidental do Edo (EMOWAA)' },
  'O **Edo Museum of West African Art (EMOWAA)** é um projeto de museu em Benim, desenhado pelo arquiteto David Adjaye, junto ao palácio do Oba, para acolher bronzes devolvidos e escavações arqueológicas. O projeto de Adjaye foi apresentado em novembro de 2020, e o ponto da situação atual deve ser consultado.',
  { img: 'ife-museu-edo', leg: 'Exposição do Bristol Museum sobre a discussão da restituição dos bronzes do Benim; alternativa documental, não imagem do projeto do Edo Museum.' },
  { h: 'Onde visitar' },
  { lista: [
    '**Museu Nacional de Ifé** (Ilé-Ifé): as cabeças de Ifé e a máscara de Obalufon.',
    '**Museu Nacional de Benim** (Benin City) e a **Rua Igun**: peças e oficinas de fundição.',
    '**Palácio do Oba**, em Benim, residência do Oba (visitas sujeitas a autorização).',
    '**Museu Britânico** (Londres): a maior coleção de bronzes do Benim.',
    '**Museu Etnológico de Berlim, Museu Metropolitano (Nova Iorque), Weltmuseum de Viena, Museu Pitt Rivers (Oxford)** e outros: coleções importantes, com restituições em curso.',
  ] },
  { img: 'ife-bronzes-museu', leg: 'Bronzes e placas do Benim na galeria 172 do Museum of Fine Arts, Boston, em fotografia histórica da exposição.' },
  { img: 'ife-festac', leg: 'Máscara associada ao símbolo do FESTAC 77, fotografada no CBAAC, Lagos; não é um desenho do logótipo.' }
];

const quiz = [
  { p: 'Para os iorubás, o que é Ilé-Ifé?', op: ['Uma colónia portuguesa', 'A cidade sagrada onde o mundo foi criado', 'A capital do reino do Daomé', 'Um porto no delta do Níger'], certa: 1, exp: 'Ifé é o berço mítico dos iorubás e o centro religioso do seu mundo, sede do Ooni.' },
  { p: 'O Benim de que fala este capítulo é:', op: ['A atual República do Benim', 'Um reino do Daomé', 'Um reino do Gana', 'O reino edo no sul da Nigéria, com capital em Benin City'], certa: 3, exp: 'É o reino edo da Nigéria. A atual República do Benim, antigo Daomé, é outra coisa.' },
  { p: 'Quem foi o alemão que, em 1910, atribuiu a arte de Ifé à Atlântida?', op: ['Heinrich Schliemann', 'Felix von Luschan', 'Frank Willett', 'Leo Frobenius'], certa: 3, exp: 'Leo Frobenius recusou crer que fosse arte africana e propôs uma origem atlante ou grega; a ideia é falsa.' },
  { p: 'Em que ano foram descobertas, no complexo Wunmonije, as cabeças de Ifé mais célebres?', op: ['1897', '1910', '1938', '1977'], certa: 2, exp: 'Em 1938, trabalhos de construção em Ifé revelaram 17 cabeças de liga de cobre.' },
  { p: 'Segundo a tradição do Benim, quem foi o primeiro Oba?', op: ['Ewuare', 'Eweka I', 'Esigie', 'Ozolua'], certa: 1, exp: 'Eweka I, filho de Oranmiyan de Ifé e de uma mulher edo, c. 1180 (data debatida).' },
  { p: 'Como se chamavam os reis que governaram antes dos Oba?', op: ['Ooni', 'Alaafin', 'Ogiso', 'Iyoba'], certa: 2, exp: 'Os Ogiso, «reis do céu», governaram Igodomigodo segundo a tradição oral.' },
  { p: 'Quem foi Ewuare, o Grande?', op: ['O primeiro Ooni de Ifé', 'O rei que expulsou os portugueses', 'O último Ogiso', 'O Oba que reformou o reino e alargou as muralhas, c. 1440'], certa: 3, exp: 'Ewuare reinou c. 1440–1473, reforçou o poder real e é associado à grande cidade murada.' },
  { p: 'O que são as «Iya» do Benim?', op: ['Máscaras de marfim', 'Fossos e muralhas de terra', 'Navios portugueses', 'Altares dos antepassados'], certa: 1, exp: 'Iya são os fossos e taludes que rodeavam a cidade e as aldeias.' },
  { p: 'O que dizem o Guinness e Patrick Darling sobre as terraplenagens do Benim?', op: ['Que seriam do século XIX', 'Que somariam cerca de 16 000 km, uma estimativa', 'Que eram só decorativas', 'Que ligavam o Benim a Roma'], certa: 1, exp: 'É uma estimativa discutida, para a rede total de valas, datadas de c. 800 d.C. ao séc. XV.' },
  { p: 'Como se chama a guilda dos fundidores de latão do Benim?', op: ['Igbo Olokun', 'Uzama', 'Ifá', 'Igun Eronmwon'], certa: 3, exp: 'A guilda Igun Eronmwon fundia para o Oba; os seus descendentes ainda trabalham na Rua Igun.' },
  { p: 'Que técnica usavam os fundidores de Ifé e do Benim?', op: ['Soldadura a gás', 'Forja a martelo', 'Fundição a cera perdida', 'Moldes de gesso'], certa: 2, exp: 'Fazia-se um modelo de cera, cobria-se de argila, derretia-se a cera e vertia-se o metal.' },
  { p: 'O que eram as manilhas, importantes no comércio com os portugueses?', op: ['Instrumentos musicais', 'Braceletes de latão e cobre usados como moeda e matéria-prima', 'Barcos', 'Tecidos finos'], certa: 1, exp: 'Os portugueses trouxeram manilhas, parte do metal dos bronzes do Benim.' },
  { p: 'Quem foi Idia?', op: ['Uma deusa iorubá', 'A rainha-mãe (Iyoba), mãe de Esigie, lembrada por máscaras de marfim', 'A mulher de Ewuare', 'Uma mercadora portuguesa'], certa: 1, exp: 'Idia, mãe do Oba Esigie, foi a primeira Iyoba; as máscaras de marfim com o seu rosto são célebres.' },
  { p: 'O que aconteceu ao Benim em 1897?', op: ['Foi aliado dos britânicos', 'Descobriu a América', 'Uma expedição punitiva britânica queimou a cidade e saqueou milhares de objetos', 'Fez um tratado com Lisboa'], certa: 2, exp: 'Depois de a missão de Phillips ser atacada em janeiro, os britânicos tomaram a cidade a 18 de fevereiro de 1897 e levaram os bronzes.' },
  { p: 'Qual destas é uma restituição recente de bronzes do Benim?', op: ['O Museu Britânico devolveu todas em 2021', 'Os EUA devolveram a cidade ao Oba', 'Nenhuma foi devolvida', 'O Smithsonian devolveu 29 peças em 2022'], certa: 3, exp: 'O Smithsonian e a Alemanha (acordo de 1130 peças) estão entre os que restituíram; o Museu Britânico mantém a coleção.' }
];

export default {
  id: 'ife-benim',
  cor: '#b8602f',
  emblema: '../assets/img/ife-benim.png',
  nome:    { pt: 'Ifé e Benim', en: 'Ife and Benin' },
  periodo: { pt: 'c. 1000 – 1897', en: 'c. AD 1000 – 1897' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
