// MAIAS — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas aproximadas. a.C. = antes de Cristo. Os nomes maias seguem a ortografia moderna (com ’ para a oclusiva glotal). Os aztecas, os olmecas e Teotihuacan só aparecem de passagem.
// Imagens: cada {img:'id'} procura o ficheiro  maias/img/id.jpg  (ver IMAGENS_MAIAS.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'Os **maias** foram um conjunto de povos e de cidades-estado que, durante mais de três mil anos, viveram no sul do México, na Guatemala, no Belize e no oeste de Honduras e de El Salvador. Nunca formaram um império único: eram dezenas de reinos, com reis próprios, que se aliavam, comerciavam e guerreavam entre si. Partilhavam a língua-mãe, os deuses, o calendário e, sobretudo, uma **escrita** com mais de oitocentos sinais, a escrita mais plenamente desenvolvida da América pré-colombiana.',
    'Os seus feitos são impressionantes: pirâmides-templo e palácios de pedra calcária no meio da floresta tropical, uma astronomia de olho nu rigorosíssima, calendários de grande complexidade, um sistema de numeração com **zero** e uma arte de relevos, cerâmica pintada e murais. Alcançaram o auge no período **Clássico** (c. 250 – 900 d.C.), com cidades como Tikal, Calakmul, Copán e Palenque. A seguir ao «colapso» das cidades do sul, os maias do norte da península do Iucatão (Chichén Itzá, Uxmal, Mayapán, Tulum) continuaram a florescer até à chegada dos espanhóis.',
    '**Os maias não desapareceram.** Hoje vivem cerca de **seis milhões de pessoas** que falam uma das cerca de trinta línguas maias (como o k’iche’, o iucateco, o q’eqchi’ ou o mam), sobretudo na Guatemala e no México. O mistério da «civilização perdida» é um mito: o que acabou, no século IX, foi o poder de alguns reis e de algumas cidades, não o povo.'
  ] },
  { img: 'may-mapa-regiao', leg: 'Mapa dos sítios maias no Iucatão, Petén e Terras Altas, com cidades vizinhas; Jean-Luc Appriou, legenda em francês, síntese de vários períodos.' },
  { h: 'Onde ficava' },
  'A área maia ocupa cerca de **300 000 km²** (aproximadamente três vezes e meia o território de Portugal) e divide-se em três grandes zonas. As **Terras Baixas do sul**, no Petén (norte da Guatemala), no Belize e no sul do México, são cobertas de floresta tropical húmida e foram o coração do período Clássico. As **Terras Baixas do norte**, a península do Iucatão, são uma planície calcária seca e de mato baixo, sem rios à superfície: a água vem dos **cenotes**, poços naturais abertos no calcário. As **Terras Altas do sul**, na Guatemala e em Chiapas, são vulcânicas e frescas, com lagos, e deram obsidiana, jade e o centro dos povos k’iche’ e kaqchikel.',
  'A palavra «maia» é, em boa parte, um nome de fora: é provável que venha de **Mayapán**, a capital do norte nos últimos séculos antes da conquista. Os próprios povos tinham nomes próprios (yucatecos, k’iche’, mam, chol, tzeltal…) e ainda hoje se identificam sobretudo por eles. Os antigos reis chamavam-se a si mesmos *k’uhul ajaw*, «senhor divino» (de uma cidade em particular), e raramente usaram um nome comum para todo o povo.',
  { img: 'may-tikal-templo-i', leg: 'Templo I, Grande Jaguar, Grande Praça de Tikal' },
  { h: 'Quando existiram' },
  'A história maia estende-se por mais de três milénios, e as suas fases são definidas pelos arqueólogos (as datas são aproximadas).',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Pré-clássico', 'c. 2000 a.C. – 250 d.C.', 'Aldeias agrícolas; primeiras grandes plataformas (Ceibal, Aguada Fénix); Nakbé e El Mirador; murais de San Bartolo; primeira escrita'],
    ['Clássico Antigo', 'c. 250 – 600 d.C.', 'Aparecem os reis divinos e as datas da Contagem Longa; Tikal; chegada de Siyaj K’ak’ (378 d.C.); contacto com Teotihuacan'],
    ['Clássico Tardio', 'c. 600 – 800 d.C.', 'O auge: rivalidade Tikal–Calakmul, Palenque com Pakal, Copán, Yaxchilán; maior população'],
    ['Clássico Terminal', 'c. 800 – 950/1000 d.C.', 'O «colapso» das cidades do sul; últimas datas da Contagem Longa (909 d.C.); crescimento de Chichén Itzá e Uxmal no norte'],
    ['Pós-clássico', 'c. 950 – 1524 d.C.', 'Chichén Itzá, Mayapán, Tulum; cidades das Terras Altas (Q’umarkaj, Iximché); comércio marítimo'],
    ['Contacto e resistência', '1511 – 1697 d.C. (e depois)', 'Conquista espanhola; o reino itzá de Tayasal só cai em 1697; as revoltas continuam até ao século XX']
  ] } },
  { h: 'Quem eram os maias?' },
  'Os maias descendem de agricultores que, por volta de 2000 a.C., se fixaram em aldeias na costa do Pacífico, em Belize e no Petén. Falavam línguas aparentadas, derivadas de um antepassado comum, o **proto-maia**. Partilharam ideias, produtos e técnicas com os seus vizinhos de **Mesoamérica** (os olmecas, os zapotecas, Teotihuacan), mas a sua civilização é um desenvolvimento próprio. Nos textos dos reis, os maias são governados por famílias de «senhores divinos» que se diziam descendentes de deuses e antepassados.',
  { h: 'Porque importam' },
  { lista: [
    '**Escrita:** o sistema de escrita *logossilábico* (sinais que representam palavras e sílabas) mais completo do Novo Mundo, que permite ler a história política dos reis em inscrições de pedra, cerâmica e livros.',
    '**Tempo e matemática:** o **zero** como valor de posição, a numeração de base 20 e a Contagem Longa, uma forma de contar os dias a partir de uma data de origem, que lhes permitia datar com exatidão acontecimentos de milhares de anos.',
    '**Astronomia:** tabelas de Vénus, de eclipses e da Lua feitas só com observação do céu a olho nu e com precisão notável.',
    '**Arquitetura e arte:** cidades monumentais em plena floresta, relevos e estelas de retratos reais, cerâmica policromada, jade, murais.',
    '**Alimentação:** o milho (a *milpa*), o cacau e a baunilha, que o mundo todo usa hoje.',
    '**Resistência e continuidade:** a identidade e as línguas maias sobreviveram à conquista, à evangelização, à guerra civil e à discriminação, e voltaram a ter protagonismo na vida pública.'
  ] },
  { caixa: 'Os maias hoje', texto: 'Cerca de **seis milhões de pessoas** falam línguas maias, e muitas mais se identificam como maias. Na **Guatemala**, quase metade da população (cerca de 42% no Censo de 2018) identifica-se como maia, e o país reconhece oficialmente 21 línguas maias. As maiores são o **k’iche’** (c. um milhão de falantes), o **iucateco** e o **q’eqchi’** (cada um com cerca de 800 000) e o **mam** (c. 480 000). No México, o iucateco ainda se fala em todo o Iucatão. Muitas comunidades continuam a usar o calendário de 260 dias, a fazer a milpa, a tecer em teares de cintura e a celebrar cerimónias diante dos montes e das grutas. Os maias de hoje **não são «vestígios»**: são os herdeiros vivos desta civilização.' },
  { img: 'may-mulher-tecelagem', leg: 'Mulher maia a tecer em tear de cintura, Guatemala' }
];

const linha = [
  'Esta linha do tempo segue os acontecimentos principais da história maia, do Pré-clássico à conquista espanhola. As datas são aproximadas; os nomes dos reis seguem as leituras modernas das inscrições, que por vezes mudam à medida que a decifração avança.',
  { linha: [
    { d: 'c. 2000 – 1000 a.C.', t: 'As primeiras aldeias', x: 'Famílias de agricultores fixam-se na costa do Pacífico (Soconusco), em Belize e nas Terras Baixas, cultivam milho, feijão e abóbora, fazem cerâmica e começam a construir plataformas e casas de culto. Em Belize, o sítio de **Cuello** mostra uma ocupação muito antiga (c. 1200 a.C. ou antes).' },
    { d: 'c. 1000 – 800 a.C.', t: 'Ceibal e Aguada Fénix', x: 'Em **Ceibal** (Guatemala) e em **Aguada Fénix** (México) surgem plataformas monumentais. Aguada Fénix, descoberta por **LIDAR** em 2020, é um enorme platô artificial de cerca de 1,4 km de comprimento, sem pirâmides nem sinais de reis: pode ter sido construído por uma sociedade ainda pouco hierarquizada, o que desafia a ideia de que as grandes obras só surgem com reis.' },
    { d: 'c. 750 – 400 a.C.', t: 'Nakbé', x: '**Nakbé**, no norte do Petén, é uma das primeiras grandes cidades maias. Tem estruturas de dezenas de metros de altura, decoradas com enormes máscaras de estuque de divindades, e está ligada por uma calçada elevada (*sacbé*) a El Mirador, a 13 km.' }
  ] },
  { img: 'may-nakbe-reconstrucao', leg: 'Nakbé, c. 400 a.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 300 – 200 a.C.', t: 'San Bartolo e a primeira escrita', x: 'Em **San Bartolo** (Guatemala), uma sala escondida debaixo de uma pirâmide guarda os **murais** mais antigos conhecidos da arte maia, com o mito da criação do Deus do Milho. Numa camada ainda mais profunda, os arqueólogos encontraram sinais de escrita, entre os mais antigos da região, de c. 300 – 200 a.C. Os murais, descobertos em 2001 por William Saturno, foram feitos por volta de 100 a.C. (datas debatidas).' }
  ] },
  { img: 'may-san-bartolo-mural', leg: 'Réplica do mural de San Bartolo, Museu Miraflores, Cidade da Guatemala; não é fotografia da parede original.' },
  { linha: [
    { d: 'c. 300 a.C. – 150 d.C.', t: 'El Mirador, a primeira metrópole', x: '**El Mirador**, no norte do Petén, chega a cobrir cerca de 26 km² (o núcleo urbano) e tem as maiores estruturas do mundo maia, como a pirâmide **La Danta**, com cerca de 70 m de altura, que é uma das maiores do mundo em volume. Teve uma rede de calçadas elevadas e um poder que se sentia numa grande região. Era um centro de uma sociedade já com reis e com escrita.' }
  ] },
  { img: 'may-el-mirador-danta', leg: 'Complexo La Danta, El Mirador' },
  { linha: [
    { d: 'c. 150 d.C.', t: 'O abandono de El Mirador', x: 'Por volta de 150 d.C. as grandes cidades do Pré-clássico do norte do Petén, como El Mirador, são abandonadas. As causas são debatidas (mudança climática, esgotamento dos solos e dos recursos, guerra), e o fenómeno é por vezes chamado «o primeiro colapso maia». Outras cidades do sul, como Tikal, Uaxactún e Calakmul, mantêm-se e crescem.' },
    { d: '292 d.C.', t: 'Início do Clássico: a primeira estela datada de Tikal', x: 'A **Estela 29** de Tikal tem a data mais antiga conhecida da cidade, correspondente a 292 d.C. na Contagem Longa. É o sinal de que os reis divinos do Clássico (*k’uhul ajaw*) usam já os calendários, a escrita e os retratos de pedra para legitimar o poder.' },
    { d: '378 d.C.', t: 'Siyaj K’ak’ chega a Tikal', x: 'Segundo as inscrições, um chefe chamado **Siyaj K’ak’** («fogo nascido») chega a Tikal por volta de 16 de janeiro de 378, vindo do oeste. Por esses dias (a morte é datada de 14 de janeiro, segundo algumas leituras) morre o rei local, **Chak Tok Ich’aak I**, e pouco depois sobe ao trono **Yax Nuun Ayiin I**, filho (ou ligado à família) de um senhor de **Teotihuacan**, a grande cidade do planalto mexicano. Os historiadores discutem se foi uma conquista militar, uma intervenção política ou uma aliança dinástica.' }
  ] },
  { img: 'may-tikal-estela-31', leg: 'Estela 31 de Tikal, face com Siyaj Chan K’awiil II; fotografia de exposição em Tikal.' },
  { img: 'may-siyaj-kak-chegada', leg: 'Chegada de um grupo ligado a Teotihuacan a Tikal, 378; cena conjetural associada a Siyaj K’ak’, sem retrato documentado. Ilustração gerada por IA.' },
  { linha: [
    { d: '426 d.C.', t: 'A dinastia de Copán', x: 'No sudeste, em Copán (Honduras), um senhor chamado **K’inich Yax K’uk’ Mo’** («Grande Sol Quetzal-Arara») funda uma dinastia que durará quase quatrocentos anos e dezasseis reis. Análises de ossos e dentes mostram que viera de fora, possivelmente de Tikal ou das Terras Baixas do Petén (debatido).' },
    { d: '562 d.C.', t: 'Tikal derrotada', x: 'A cidade de **Caracol**, aliada de **Calakmul**, derrota Tikal em 562. A seguir, Tikal entra num «hiato» de cerca de 120 anos, sem monumentos datados, enquanto Calakmul e os seus aliados dominam as Terras Baixas.' },
    { d: '615 d.C.', t: 'Pakal sobe ao trono de Palenque', x: 'Com 12 anos, **K’inich Janaab Pakal** torna-se rei de Palenque, em Chiapas. Reinará 68 anos, um dos reinados mais longos da história, e transformará a cidade num centro de grandes edifícios e de textos.' },
    { d: '683 d.C.', t: 'Morre Pakal', x: 'Pakal morre com cerca de 80 anos e é sepultado no **Templo das Inscrições**, a pirâmide que tinha mandado construir. O túmulo só será encontrado em 1952.' },
    { d: '695 d.C.', t: 'Tikal vira a sorte', x: 'O rei de Tikal **Jasaw Chan K’awiil I** derrota Calakmul e captura o seu estandarte. A cidade volta a ser uma potência e inicia uma grande fase de construção (os Templos I e II).' },
    { d: '738 d.C.', t: 'O rei de Copán é capturado', x: 'O rei de Copán **Waxaklajuun Ub’aah K’awiil** («18 Coelho») é capturado e decapitado por **Quiriguá**, que fora sua vassala, sob o rei K’ak’ Tiliw Chan Yopaat. Copán entra em crise e recupera sob o rei seguinte.' }
  ] },
  { img: 'may-copan-escadaria', leg: 'Escadaria Hieroglífica de Copán' },
  { linha: [
    { d: 'c. 761 d.C.', t: 'A queda de Dos Pilas', x: 'O reino de **Dos Pilas**, fundado c. 630–650 por um príncipe de Tikal que passou para o lado de Calakmul, cai durante as guerras do Petexbatún, e a região mergulha em guerra e em fortificações. É um dos primeiros sinais de que o sistema de reinos estava a ruir.' },
    { d: 'c. 800 – 950 d.C.', t: 'O colapso do Clássico Terminal', x: 'As cidades das Terras Baixas do sul perdem os seus reis e a sua população, e deixam de erguer monumentos. As causas (seca prolongada, guerra, esgotamento ambiental, rutura do comércio, crise política) são debatidas e provavelmente combinaram-se. O colapso foi desigual, e o norte do Iucatão prosperou.' }
  ] },
  { img: 'may-colapso-selva', leg: 'Abandono de uma cidade maia das Terras Baixas meridionais, c. 900; interpretação conjetural, não o desaparecimento dos povos maias. Ilustração gerada por IA.' },
  { linha: [
    { d: '909 d.C.', t: 'A última data da Contagem Longa', x: 'A última data da Contagem Longa gravada num monumento das Terras Baixas, em **Tonina** (Chiapas), corresponde a 909 d.C. O hábito de gravar datas monumentais desaparece, mas o calendário e a escrita não.' },
    { d: 'c. 900 – 1100 d.C.', t: 'Chichén Itzá', x: '**Chichén Itzá**, no norte do Iucatão, torna-se a maior cidade da península. Tem o **Castelo** (a pirâmide de Kukulkán), o Grande Campo de Jogo de Bola e o Observatório. A cidade mistura tradições maias e influências de outras regiões do México (um tema muito debatido).' }
  ] },
  { img: 'may-chichen-itza-castillo', leg: 'El Castillo, Pirâmide de Kukulkán, Chichén Itzá' },
  { linha: [
    { d: 'c. 1220 – 1448 d.C.', t: 'Mayapán', x: 'Com o declínio de Chichén Itzá, **Mayapán** torna-se a capital de uma confederação que controla o norte do Iucatão durante cerca de dois séculos e meio. A cidade, murada, cai numa revolta, c. 1441 – 1448, e a península divide-se em pequenos estados rivais.' },
    { d: 'c. 1200 – 1500 d.C.', t: 'Tulum e o comércio marítimo', x: 'Na costa do Caribe, **Tulum** e outros portos muralhados, como Cozumel, integram uma rede de comércio de canoa que liga o Iucatão a Honduras. Foi um dos poucos sítios maias ainda habitados quando os espanhóis passaram, em 1518.' },
    { d: '1511 – 1519', t: 'Primeiros contactos', x: 'Em 1511 um navio espanhol naufraga perto do Iucatão, e dois sobreviventes, **Jerónimo de Aguilar** e **Gonzalo Guerrero**, vivem entre os maias. Entre 1517 e 1519, três expedições (a de Hernández de Córdoba, a de Grijalva e a de Cortés) exploram a costa. As doenças trazidas da Europa começam a espalhar-se à frente dos conquistadores.' },
    { d: '1524', t: 'Alvarado nas Terras Altas', x: '**Pedro de Alvarado**, com aliados mexicanos e kaqchikel, derrota os k’iche’ de Q’umarkaj nas Terras Altas da Guatemala. O chefe k’iche’ **Tecún Umán** é considerado herói nacional, embora os pormenores da sua morte sejam em boa parte tradição.' },
    { d: '1527 – 1547', t: 'A difícil conquista do Iucatão', x: 'Os **Montejo** (pai e filho) demoram duas décadas a submeter o norte do Iucatão, com muitos reveses. **Mérida** é fundada em 1542, e uma grande revolta em 1546 – 1547 é sufocada. Ao contrário do México central, os maias não tinham um centro de poder que, uma vez tomado, rendesse o resto.' },
    { d: '1562', t: 'Maní e o auto-de-fé de Landa', x: 'O frade franciscano **Diego de Landa** manda queimar em Maní dezenas de livros maias (códices) e milhares de imagens e objetos religiosos, e submete a tortura os que acusa de idolatria. Mais tarde escreveu o livro mais valioso sobre os maias do seu tempo. Do que se queimou apenas sobrevivem quatro códices.' },
    { d: '1697', t: 'Cai Tayasal, o último reino independente', x: 'Em março de 1697 (as fontes dão 10 ou 13 de março), o governador **Martín de Ursúa** ataca **Nojpetén** (Tayasal), a ilha-capital dos itzá no lago Petén Itzá, e conquista-a. É o último reino maia independente. Tinha resistido a quase dois séculos de cercos e de missionários.' }
  ] },
  { img: 'may-tayasal-flores', leg: 'Ilha de Flores, lago Petén Itzá, Nojpetén' },
  { linha: [
    { d: '1847 – 1901', t: 'A Guerra de Castas', x: 'Uma grande revolta dos maias do Iucatão contra os proprietários e o governo mexicano começa em 1847. Os rebeldes, os **cruzo’ob**, criam um estado próprio em torno de Chan Santa Cruz (hoje Felipe Carrillo Puerto), que resiste até 1901.' },
    { d: '1960 – 1996', t: 'A guerra civil da Guatemala', x: 'Durante 36 anos de conflito armado, o exército guatemalteco comete massacres, sobretudo nas comunidades maias das Terras Altas. A Comissão da Verdade (1999) estimou cerca de 200 000 mortos e desaparecidos, **mais de 80% deles maias**. Em 1992, a ativista k’iche’ **Rigoberta Menchú** recebe o Prémio Nobel da Paz.' }
  ] }
];

const mapa = [
  'Os maias nunca tiveram uma capital única. A «civilização maia» é a soma de dezenas de **cidades-estado**, cada uma com o seu rei, a sua praça e o seu território, às vezes em guerra, às vezes aliadas, ligadas por casamentos, tributos e comércio. Os arqueólogos identificam várias dezenas de reinos só no período Clássico. O LIDAR (varrimento laser aéreo) revelou, em 2018, mais de **60 000** estruturas numa área de 2100 km² no Petén, o que obriga a rever em alta as estimativas de população (talvez entre 7 e 11 milhões nas Terras Baixas centrais, um valor debatido).',
  { img: 'may-tikal-reconstrucao', leg: 'Grande Praça de Tikal, século VIII; reconstituição conjetural. Ilustração gerada por IA.' },
  { tabela: { cab: ['Cidade', 'Região / país hoje', 'Época de auge', 'Para que ficou conhecida'], linhas: [
    ['Tikal', 'Petén, Guatemala', 'c. 250 – 850 d.C.', 'Grande potência do Clássico; templos de 70 m; rival de Calakmul'],
    ['Calakmul', 'Campeche, México', 'c. 400 – 800 d.C.', 'Capital do reino de Kaan («das Serpentes»); 117 estelas'],
    ['Copán', 'Honduras', 'c. 426 – 822 d.C.', 'Escadaria Hieroglífica; arte escultórica em alto relevo'],
    ['Palenque', 'Chiapas, México', 'c. 600 – 800 d.C.', 'Pakal e o Templo das Inscrições; arquitetura leve e elegante'],
    ['Yaxchilán', 'Chiapas, México', 'c. 680 – 770 d.C.', 'Lintéis esculpidos, rituais de sangue; junto ao rio Usumacinta'],
    ['Caracol', 'Belize', 'c. 550 – 800 d.C.', 'Derrota Tikal em 562; Caana, a estrutura mais alta de Belize'],
    ['Dos Pilas', 'Petén, Guatemala', 'c. 630 – 761 d.C.', 'Reino fundado por um príncipe de Tikal, aliado de Calakmul'],
    ['Quiriguá', 'Guatemala', 'c. 730 – 810 d.C.', 'Estelas de 10 m; vence Copán em 738'],
    ['Chichén Itzá', 'Iucatão, México', 'c. 900 – 1100 d.C.', 'Castelo, Campo de Jogo de Bola, Cenote Sagrado'],
    ['Uxmal', 'Iucatão, México', 'c. 700 – 1000 d.C.', 'Estilo Puuc: fachadas de mosaico de pedra; Pirâmide do Adivinho'],
    ['Mayapán', 'Iucatão, México', 'c. 1220 – 1448 d.C.', 'Capital do norte nos últimos séculos, cidade murada'],
    ['Tulum', 'Quintana Roo, México', 'c. 1200 – 1500 d.C.', 'Porto muralhado sobre o mar das Caraíbas']
  ] } },
  { h: 'Tikal' },
  'Tikal, no Petén guatemalteco, foi uma das maiores e mais poderosas cidades do Clássico. O seu núcleo tem seis pirâmides-templo muito altas, ligadas por calçadas, e milhares de edifícios, num parque nacional e Património Mundial desde 1979. O **Templo I** (c. 47 m) foi construído como túmulo do rei Jasaw Chan K’awiil I, e o **Templo IV** (cerca de 70 m) é uma das estruturas mais altas da América antes da chegada dos europeus. O nome antigo da cidade era **Yax Mutal** ou Mutul, e o seu glifo-emblema é o de um «cabelo atado». A cidade teve acesso a água graças a grandes reservatórios, e a **Acrópole do Norte** guardava os túmulos dos reis.',
  { h: 'Calakmul' },
  'No sul do México, no meio da floresta, ficava **Calakmul**, a capital do reino de **Kaan** (a «Serpente»). Através de casamentos e de alianças (com Caracol, Dos Pilas, Naranjo, Yaxchilán…) construiu uma rede que rivalizou com Tikal durante um século e meio. Tem mais de 6000 estruturas e a **Estrutura II**, uma pirâmide de cerca de 45 m. Está numa reserva da biosfera e é Património Mundial (misto, cultural e natural).',
  { img: 'may-calakmul-estrutura-2', leg: 'Estrutura II de Calakmul' },
  { h: 'Palenque' },
  'Palenque ergue-se nos contrafortes das montanhas de Chiapas, sobre uma planície coberta de selva. A sua arquitetura é mais leve e esguia do que a de Tikal: tetos de «crista» decorada, e fachadas de estuque. O **Palácio** tem uma torre de observação, e há três templos reunidos no «Grupo das Cruzes». O **Templo das Inscrições**, com os textos mais longos, guardava o túmulo de Pakal. Foi redescoberta por exploradores no século XVIII e inscrita como Património Mundial em 1987.',
  { img: 'may-palenque-templo-inscricoes', leg: 'Templo das Inscrições, Palenque' },
  { h: 'Copán e Quiriguá' },
  'Em Honduras, junto à fronteira da Guatemala, **Copán** destaca-se pela escultura em altos relevos: as estelas dos reis parecem figuras quase de bulto. A **Escadaria Hieroglífica** tem cerca de 62 degraus e 2200 glifos que contam a história da dinastia. A 50 km, **Quiriguá**, que fora vassala de Copán, tem a maior estela maia, com cerca de 10 m de altura (10,6 m com a parte enterrada). Os dois reinos estão ligados pela guerra de 738.',
  { h: 'Caracol e o Petén oriental' },
  'Em Belize, **Caracol** (talvez o antigo Oxwitza’, «três colinas água») atingiu possivelmente entre 70 000 e 100 000 habitantes. A pirâmide **Caana** («Palácio do Céu») tem cerca de 43 m e continua a ser a construção mais alta de Belize. A cidade foi, com Calakmul, a vencedora de Tikal em 562 d.C.',
  { img: 'may-caracol-caana', leg: 'Caana, Caracol, Belize' },
  { h: 'Chichén Itzá' },
  'No norte do Iucatão, **Chichén Itzá** («na boca do poço dos itzá») é o sítio mais visitado do mundo maia e uma das Sete Maravilhas do Mundo Moderno (2007). O **Castelo** (a pirâmide de **Kukulkán**, a serpente emplumada) tem quatro escadarias de 91 degraus, o que, com o patamar do topo, dá 365. No equinócio, a sombra dos degraus forma no corrimão da escadaria norte uma «serpente» a descer: se foi intencional, é debatido. Há ainda o **Grande Campo de Jogo de Bola** (168 m, o maior da Mesoamérica), o **Observatório** (El Caracol), o Templo dos Guerreiros e o **Cenote Sagrado**, onde se lançavam oferendas.',
  { img: 'may-chichen-itza-reconstrucao', leg: 'Centro de Chichén Itzá, século XI; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: 'Uxmal e o Puuc' },
  'Na região de Puuc, no norte, as cidades como **Uxmal** e **Kabah** têm um estilo próprio: paredes lisas em baixo e fachadas de pequenos blocos de pedra encaixados, em mosaico, em cima, com máscaras do deus da chuva **Chaak**. A **Pirâmide do Adivinho** de Uxmal (c. 35 m) tem os cantos arredondados, e o **Quadrilátero das Freiras** e o **Palácio do Governador** são obras-primas da arquitetura maia. Uma calçada elevada (*sacbé*) ligava Uxmal a Kabah, a cerca de 18 km.',
  { img: 'may-uxmal-adivinho', leg: 'Pirâmide do Adivinho, Uxmal' },
  { h: 'Mayapán e Tulum' },
  'Depois de Chichén Itzá, **Mayapán** era uma cidade de cerca de 4 km², rodeada por uma muralha, onde viviam talvez 15 000 a 17 000 pessoas. Os seus edifícios imitam, em ponto pequeno, os de Chichén. **Tulum**, de pequena dimensão, é um porto muralhado sobre uma falésia, virado para o Caribe, com um templo principal chamado **El Castillo**, e pinturas murais de estilo regional. Quando os espanhóis a viram, em 1518, ainda era habitada.',
  { img: 'may-tulum', leg: 'El Castillo, Tulum; vista frontal, sem o circuito exterior das muralhas.' },
  { h: 'As rotas' },
  'Os maias não tinham animais de carga nem a roda para transporte, por isso carregavam tudo às costas ou de canoa. Pelos **rios** (o Usumacinta, o Pasión) e pela costa, navegavam canoas escavadas de troncos, que no Pós-clássico contornavam toda a península do Iucatão até Honduras. Em terra, os **sacbeob** («caminhos brancos», calçadas de pedra rebocada) ligavam as praças e as cidades, como o de Cobá a Yaxuná, com cerca de 100 km. Pelas rotas circulavam **sal, cacau, jade, obsidiana, penas de quetzal, algodão, cerâmica e mel**, e com eles as ideias e os deuses.'
];

const sociedade = [
  { h: '1. Organização política' },
  'Não houve um império maia, mas uma rede de **reinos independentes**, cada um chefiado por um **k’uhul ajaw** («senhor divino»). O rei era chefe militar, sacerdote principal e intermediário entre os homens e os deuses. Cabia-lhe realizar os rituais, que mantinham o cosmos em ordem, e ele era a imagem do **Deus do Milho** e dos antepassados. O poder passava, em regra, de pai para filho, mas também há rainhas que reinaram ou governaram como regentes (Lady Yohl Ik’nal em Palenque, c. 583 – 604; Lady Six Sky em Naranjo, c. 682).',
  'Os reinos formavam duas grandes alianças, que se enfrentavam sobretudo por procuração: a de **Tikal** e a de **Calakmul**. Os reinos pequenos eram **vassalos** dos grandes, pagavam tributo e davam princesas em casamento. Os textos falam de «senhores» e «vassalos» e de títulos como **ajaw** («senhor»), **sajal** (governador de província, nobre militar) e **aj k’uhun** (administrador, «guardião dos livros sagrados»).',
  { h: '2. Classes sociais' },
  'A sociedade era muito hierarquizada: no topo, a **família real** e a alta nobreza (*almehenoob*); depois os nobres menores, os **escribas**, os sacerdotes, os comerciantes e os artesãos especializados; abaixo, os **camponeses**, que eram a maioria; e, por último, os servos e os **escravos**, muitos dos quais prisioneiros de guerra ou pessoas que tinham dívidas. Os escribas e os artistas pertenciam muitas vezes a famílias nobres, e alguns assinavam as suas obras.',
  { img: 'may-escriba-cena', leg: 'Escriba maia do Clássico Tardio a pintar um códice; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '3. Religião' },
  'Para os maias, o universo era um conjunto de **três níveis**: o céu (com treze níveis e deuses), a terra e o **Xibalbá**, o mundo inferior (com nove níveis). No centro da Terra erguia-se uma **ceiba** sagrada, a árvore do mundo, que liga os três planos. As cavernas, os cenotes e as pirâmides eram portas para o outro mundo. O tempo era cíclico: os deuses criaram, destruíram e voltaram a criar o mundo várias vezes, e os humanos tinham a obrigação de alimentar os deuses com ritual e oferendas. Os principais deuses eram:',
  { tabela: { cab: ['Deus', 'Domínio', 'Nota'], linhas: [
    ['Itzamnaaj', 'Criador, céu, escrita e saber', 'Velho de nariz aquilino; padroeiro dos escribas'],
    ['K’inich Ajaw', 'Deus do Sol', 'Olhos grandes e dentes limados'],
    ['Ix Chel', 'Lua, medicina, parto', 'Nome do Pós-clássico; santuário em Cozumel'],
    ['Chaak', 'Chuva, trovão', 'Máscaras de nariz comprido nas fachadas do Puuc'],
    ['Deus do Milho (Hun Hunahpu)', 'Milho, renascimento', 'Jovem de cabeça alongada; símbolo da vida e do rei'],
    ['K’awiil', 'Relâmpago, linhagem real', 'Uma perna em forma de serpente; cetro dos reis'],
    ['Kukulkán / K’uk’ulkan', 'Serpente emplumada', 'Culto do Pós-clássico; Gucumatz entre os k’iche’'],
    ['Deuses do Xibalbá', 'Morte, doença', 'Os «Senhores da Morte»; derrotados no Popol Vuh']
  ] } },
  { h: 'O Popol Vuh' },
  'O **Popol Vuh** é o grande livro sagrado dos **k’iche’**, escrito em alfabeto latino em meados do século XVI, possivelmente a partir de um livro antigo em hieróglifos. A única cópia antiga foi feita pelo frade dominicano **Francisco Ximénez**, em Chichicastenango, no início do século XVIII, e está hoje na Newberry Library, em Chicago. Conta a criação do mundo: os deuses tentaram fazer pessoas de barro e de madeira, e só à terceira, com **milho**, conseguiram seres que os louvassem. A parte mais famosa são as aventuras dos **Gémeos Heróis, Hunahpú e Xbalanqué**, que descem ao Xibalbá, vencem os Senhores da Morte numa série de provas e, no fim, sobem ao céu como o Sol e a Lua.',
  { img: 'may-popol-vuh', leg: 'Primeira página do manuscrito do Popol Vuh, cópia de Francisco Ximénez, Newberry Library, Chicago.' },
  { h: '4. Sacrifício e autossacrifício' },
  'O ritual central da religião maia era a **oferenda de sangue**. Os deuses tinham dado o seu sangue para criar os homens, e os homens devolviam-no. Os reis e as rainhas **furavam a língua, as orelhas ou o corpo** com espinhos de raia e lâminas de obsidiana, deixando o sangue escorrer sobre papel de casca, que era depois queimado. Muitas vezes, durante estes rituais, entravam em transe e viam o que chamavam «serpente de visão», de que saíam antepassados e deuses. O **Lintel 24 de Yaxchilán** mostra Lady K’abal Xook a puxar uma corda de espinhos pela língua, diante do marido, o rei Itzamnaaj Bahlam II.',
  { img: 'may-yaxchilan-lintel-24', leg: 'Lintel 24 de Yaxchilán, Museu Britânico' },
  'O **sacrifício humano** também existiu, em geral de **prisioneiros de guerra**, sobretudo de reis e de nobres capturados, que podiam ser decapitados em rituais ou usados no jogo de bola. No Pós-clássico, em Chichén Itzá, há provas de oferendas humanas no **Cenote Sagrado**, e as análises dos ossos mostram que não eram só jovens mulheres, como diz a lenda, mas também homens, crianças e adultos. O sacrifício não era uma atividade quotidiana, e o seu peso foi provavelmente menor do que entre os astecas. Para os maias era uma **troca sagrada**, não crueldade gratuita, mas isto não apaga o sofrimento das vítimas.',
  { img: 'may-autossacrificio-cena', leg: 'Rito real de autossacrifício, inspirado nos relevos de Yaxchilán; reconstituição conjetural e não gráfica. Ilustração gerada por IA.' },
  { h: '5. O jogo de bola' },
  'O **jogo de bola** (em iucateco, *pitz*) era jogado em todo o território mesoamericano, e os maias praticavam-no há pelo menos três mil anos. Disputava-se num campo em forma de «I», com paredes inclinadas, entre duas equipas, com uma **bola de borracha maciça**, que se podia bater com as ancas, os joelhos e os antebraços (sem as mãos). Os jogadores usavam proteções de couro e uma cinta pesada em torno da cintura. Era ao mesmo tempo **desporto, espetáculo e ritual**: simbolizava a luta entre a luz e as trevas, e o Popol Vuh liga-o aos Gémeos Heróis. Em certas ocasiões, em jogos entre cidades, os cativos eram sacrificados no final. Nos relevos de Chichén Itzá, um jogador é decapitado, mas se é o vencedor ou o vencido é matéria de discussão.',
  { img: 'may-jogo-bola-chichen', leg: 'Grande Campo de Jogo de Bola, Chichén Itzá' },
  { img: 'may-jogo-bola-cena', leg: 'Jogo de bola maia no período Clássico; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '6. Economia e comércio' },
  'A economia assentava na **agricultura**, mas o comércio era intenso. Circulavam bens de **prestígio** (jade, penas de quetzal, conchas, obsidiana, cerâmica pintada) e de **uso comum** (sal, algodão, mel, cera, peixe seco, milho). Em muitas regiões, as **sementes de cacau** serviam como moeda. As grandes feiras faziam-se em dias fixos nas praças, e havia mercadores profissionais. Em Tikal identificou-se um provável mercado junto à Praça Este, e as análises químicas dos solos sugerem outro em Chunchucmil, uma cidade do noroeste do Iucatão ligada ao comércio com a costa.',
  { img: 'may-mercado-cena', leg: 'Mercado maia do Clássico Tardio; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: 'O cacau' },
  'O **cacau** era a bebida dos deuses e dos reis. Os maias torravam e moíam as sementes, misturavam-nas com água e, muitas vezes, com milho, chili e baunilha, e batiam o líquido de uma altura para fazer espuma. Era uma bebida **amarga e picante**, não doce. Nos vasos pintados do Clássico aparecem inscrições que dizem «para o cacau». Os vestígios mais antigos de cacau em recipientes maias remontam a c. 600 a.C., em Colha, Belize. Bebiam-no nos banquetes, nos casamentos e nos rituais, e aos mortos juntava-se cacau no túmulo.',
  { img: 'may-cacau-preparacao', leg: 'Preparação de uma bebida de cacau numa casa nobre maia; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '7. A escrita e a sua decifração' },
  'A escrita maia é **logossilábica**: combina sinais que valem palavras inteiras (logogramas) com sinais que valem sílabas. Tem cerca de **800 sinais**, agrupados em «blocos» (cada um é uma palavra ou frase) que se lêem em colunas duplas, da esquerda para a direita e de cima para baixo. As primeiras amostras são de c. 300 – 200 a.C., e a escrita foi usada durante mais de dois mil anos, em pedra, estuque, cerâmica, ossos, conchas e em **livros de casca de figueira** (códices), feitos por escribas. O objetivo era registar o calendário, a astronomia, a história dos reis, o ritual e o saber sagrado.',
  { img: 'may-codice-dresden', leg: 'Página 49 do Códice de Dresden; reprodução histórica em domínio público.' },
  'Só **quatro códices** sobreviveram à conquista, depois das queimas de Landa e de outros: o de **Dresden**, o de **Madrid**, o de **Paris** e o de **Grolier** (cuja autenticidade foi debatida, mas hoje é aceite pela maioria). O de Dresden tem 78 páginas e a famosa **Tabela de Vénus**.',
  { h: 'Como se decifrou' },
  'Durante séculos, ninguém sabia ler a escrita maia. Por volta de 1566, **Diego de Landa** pediu a um informante maia que escrevesse o «alfabeto», e este escreveu os sons das letras espanholas com glifos que correspondiam ao som do nome de cada letra, o que parecia confirmar que a escrita era um alfabeto, mas era um mal-entendido que atrasou tudo. No século XIX, o alemão **Ernst Förstemann** decifrou os números e o calendário do Códice de Dresden. Em 1952, o soviético **Yuri Knorozov** propôs que os sinais eram sílabas, e usou o «alfabeto» de Landa como chave. Foi muito criticado por **Eric Thompson**, o maior maianista da época, que achava a escrita não fonética. Em 1960, a americana **Tatiana Proskouriakoff** mostrou que as inscrições de Piedras Negras contavam a **história de reis reais**, com datas de nascimento, subida ao trono e morte. A partir dos anos 1970 e 1980, **Linda Schele**, **David Stuart**, **Floyd Lounsbury** e outros uniram as duas descobertas, e hoje a maior parte dos textos pode ser lida.',
  { h: '8. Os calendários' },
  'Os maias usavam vários ciclos de tempo ao mesmo tempo:',
  { lista: [
    '**Tzolk’in** (260 dias): resulta de combinar 20 nomes de dias com 13 números. Era o calendário sagrado, usado para os rituais, os nomes das pessoas e a adivinhação. **Ainda é usado hoje** por alguns povos maias da Guatemala.',
    '**Haab’** (365 dias): 18 meses de 20 dias, mais 5 dias finais perigosos (*Wayeb’*). Seguia o ano solar e as estações agrícolas.',
    '**Ronda Calendárica** (52 anos): os dois calendários só voltam a coincidir ao fim de 18 980 dias, cerca de 52 anos, e a data completa tinha valor de «nome» de um dia.',
    '**Contagem Longa:** conta os dias seguidos a partir de uma origem mítica, que corresponde a **11 de agosto de 3114 a.C.** (na correlação mais aceite). Usa unidades de 1 dia, 20 dias, 360 dias, 7200 dias (*k’atun*, cerca de 20 anos) e 144 000 dias (*b’ak’tun*, cerca de 394 anos). Permitia dar uma data única a um acontecimento.'
  ] },
  { img: 'may-calendario', leg: 'Modelo didático moderno da Ronda Calendárica, com glifos do Tzolk’in e do Haab’ em discos de papel.' },
  { caixa: '2012: um mito moderno', texto: 'A 21 de dezembro de 2012 acabou um ciclo de 13 *b’ak’tun* (a data **13.0.0.0.0**), e na altura espalhou-se a ideia de que os maias tinham previsto o «fim do mundo». É **falso**. Para os maias, a data era a mudança de um ciclo, como o odómetro de um carro quando passa dos 99 999 km, e o tempo seguia depois. Só um texto antigo (o Monumento 6 de Tortuguero) refere esta data, e não fala de catástrofe. Há inscrições que falam de datas de milhões de anos no futuro. Os maias de hoje celebraram 2012 como o início de uma nova era.' },
  { h: '9. Matemática e astronomia' },
  'A matemática maia usa **base 20** (vigesimal) e um sistema posicional, escrito em colunas, com apenas três símbolos: um **ponto** (1), uma **barra** (5) e uma **concha** (**zero**). O zero maia, usado como valor de posição, surge por volta do início do Clássico (e talvez antes), e é um dos poucos casos, na história, de invenção independente de um símbolo para o zero (os outros são o da Mesopotâmia, mais limitado, e o da Índia).',
  { img: 'may-numerais', leg: 'Numeração maia, pontos, barras e concha, 0 a 19' },
  'A **astronomia** era feita a olho nu, de templos e de «grupos E» (conjuntos arquitetónicos ligados ao movimento do Sol). Os sacerdotes registavam o Sol, a Lua, os planetas e os eclipses. A **Tabela de Vénus** do Códice de Dresden calcula o ciclo de Vénus em **584 dias** (o valor real é 583,92), com ajustes para corrigir o erro ao longo dos séculos. Em Copán, os escribas calcularam o mês lunar em cerca de 29,53 dias, o valor correto. O planeta Vénus era importante: as guerras eram muitas vezes planeadas em dias de aparecimento do planeta.',
  { h: '10. Agricultura e alimentação' },
  'A base da vida era o **milho**, de que os maias se sentiam feitos. Cultivavam-no na **milpa**, uma parcela onde se plantavam juntos o **milho, o feijão e a abóbora** (as «três irmãs»): o feijão fixa o azoto, a abóbora cobre o solo e o milho serve de apoio. A milpa fazia-se por **corte e queimada**, com pousio, e, onde era preciso, com **terraços, campos elevados e reservatórios**. Colhiam também o **chili**, o tomate, a mandioca, o abacate, o **ramón** (a árvore do pão, abundante no Petén), o cacau, a baunilha e o mel das abelhas sem ferrão. Criavam perus, cães e abelhas, e caçavam veado, pecari e peixe.',
  { img: 'may-milpa-cena', leg: 'Trabalho familiar numa milpa de milho, feijão e abóbora; reconstituição conjetural. Ilustração gerada por IA.' },
  'O milho era moído em **pedra de moer** (metate) e transformado em massa para **tortilhas**, **tamales** (massa cozida em folhas de milho ou de bananeira) e **atole** (uma bebida quente e espessa). A comida diária era muito simples; os banquetes das elites incluíam carne, cacau e bebidas fermentadas, como o *balché*, feito de mel e casca de árvore.',
  { h: '11. A casa e a vida quotidiana' },
  'A casa comum era uma **cabana** de paus entrelaçados, rebocada com barro, de planta oval ou retangular, com **teto de palha**, e ainda existem casas parecidas no Iucatão. As famílias agrupavam-se à volta de um pátio, com a cozinha, a horta e o pequeno altar dos antepassados. Os mortos eram muitas vezes enterrados **debaixo do chão da casa**. As casas das elites eram de pedra, com abóbadas e bancos de pedra. As crianças ajudavam desde cedo e as meninas aprendiam a tecer e a cozinhar. A família real vivia em **palácios**, de dezenas de salas à volta de pátios.',
  { img: 'may-casa-maia', leg: 'Habitação de uma família maia; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '12. Vestuário e aparência' },
  'O vestuário era de **algodão**, tecido em tear de cintura e decorado com bordados. Os homens usavam um pano em volta da cintura (o *ex*) e uma capa, e as mulheres uma saia comprida e uma blusa, o antepassado do **huipil** que as mulheres maias ainda vestem. As elites vestiam-se com **peles de jaguar**, penas de quetzal, colares e orelheiras de **jade**, e enormes toucados com os atributos dos deuses. Os maias **deformavam o crânio** das crianças com tábuas, limavam e incrustavam os dentes com jade, faziam tatuagens e pintavam o corpo. Considerava-se belo ter o nariz inclinado e a testa alongada, como o Deus do Milho.',
  { h: '13. Música, dança e arte' },
  'Os maias tocavam **tambores**, **chocalhos**, **flautas**, **ocarinas**, **trompetes de madeira** e **carapaças de tartaruga**. Os murais de **Bonampak** mostram uma orquestra, com músicos de máscaras, e há cerâmicas que reproduzem as danças. Faziam também **teatro** (o *Rabinal Achí*, um drama dançado k’iche’, ainda se representa e foi proclamado Obra-Prima do Património Oral e Imaterial da Humanidade pela UNESCO em 2005), poesia e canto. A arte incluía relevos em pedra, estuque, **cerâmica policromada** (os vasos de «códice», pintados por artistas-escribas), jade e murais.',
  { img: 'may-bonampak', leg: 'Réplica da sala 1 dos murais de Bonampak, músicos e nobres, Museu Nacional de Antropologia, Cidade do México.' },
  { h: '14. Tecnologia' },
  'Os maias não tinham **animais de tração**, nem a **roda** para transporte (conheciam-na em brinquedos de cerâmica), nem **metais** até ao Pós-clássico (c. 900 d.C.), quando vieram o cobre e o ouro da América Central. Usavam pedra, **sílex**, **obsidiana** (lâminas muito afiadas), osso e madeira. Faziam **cal** queimando calcário, para argamassa e estuque, e construíam **abóbadas falsas** (por aproximação de blocos). Eram engenheiros de água: reservatórios em Tikal, cisternas (*chultunes*) no norte e um sistema de canais em Palenque. Construíam **sacbeob** e fabricavam papel de casca de figueira (*amate*), coberto com cal para a escrita.',
  { h: '15. Guerra' },
  'A guerra era constante, e fazia parte do sistema político. As campanhas visavam muitas vezes capturar **reis e nobres** (para os sacrificar ou para humilhá-los) e obter tributo, mais do que conquistar território. Há também guerras de destruição, como a que acabou com Dos Pilas. Os guerreiros usavam **lanças**, propulsores de dardos (*atlatl*), **maças**, escudos, armaduras de algodão acolchoado e capacetes. Algumas cidades construíram **muralhas** e fossos. Nos anos finais do Clássico, a guerra aumentou muito, e é uma das causas apontadas para o colapso.'
];

const personalidades = [
  'Os textos maias permitem-nos conhecer os nomes e os atos de dezenas de reis e de algumas rainhas, o que é raro na história antiga. As figuras seguintes são reais, e os pormenores incertos estão assinalados. Os nomes são as leituras atuais, que podem mudar com o avanço da decifração.',
  { h: 'K’inich Janaab Pakal I, rei de Palenque (603 – 683 d.C.)' },
  'Subiu ao trono com 12 anos, em 615, por influência da mãe, **Lady Sak K’uk’**, e reinou 68 anos. Foi o grande construtor de Palenque (o Palácio, o Templo das Inscrições), e mandou escrever extensos textos sobre a sua dinastia e a sua ascendência divina. O seu túmulo foi descoberto em 1952 pelo arqueólogo mexicano **Alberto Ruz Lhuillier**, que, em 1948, notou uma laje com orifícios no chão do templo e a levantou, revelando uma escadaria cheia de entulho, que levou quatro anos a desobstruir. Na cripta estava um enorme **sarcófago de pedra** com a máscara de **jade** do rei. A tampa tem um relevo famoso, que as teorias de «astronautas antigos» interpretam como um foguetão, uma ideia sem qualquer base: mostra o rei a cair na boca do mundo inferior e a renascer como o Deus do Milho, junto da árvore do mundo.',
  { img: 'may-pakal-mascara', leg: 'Máscara funerária de jade de Pakal, Museu Nacional de Antropologia, Cidade do México' },
  { h: 'Itzamnaaj Bahlam II e Lady K’abal Xook, Yaxchilán (séc. VIII d.C.)' },
  'O rei **Itzamnaaj Bahlam II** (conhecido também como «Escudo Jaguar», numerado II ou III conforme os autores; c. 681 – 742) governou Yaxchilán durante mais de sessenta anos, e viveu até aos noventa e tal. A sua esposa, **Lady K’abal Xook**, aparece com ele nos famosos lintéis 24, 25 e 26, onde se vê um ritual de autossacrifício e uma «serpente de visão». O filho, **Yaxun Bahlam IV** (o «Pássaro Jaguar IV»), foi o grande rei que lhe sucedeu, após um interregno.',
  { h: 'Siyaj K’ak’, «Fogo Nascido» (séc. IV d.C.)' },
  'Chefe militar (ou emissário) que, segundo as inscrições, chegou a **El Perú-Waka’** em 378 e a **Tikal** poucos dias depois, e mudou a dinastia. Aparece em monumentos de várias cidades, o que sugere uma ação regional. É referido como «senhor» ligado a Teotihuacan, mas a sua origem exata e o seu papel são debatidos.',
  { h: 'K’inich Yax K’uk’ Mo’, fundador de Copán (séc. V d.C.)' },
  'Foi o primeiro rei de Copán, em 426, e o seu nome significa «Grande Sol Quetzal-Arara». Foi enterrado numa câmara debaixo do **Templo Rosalila**, que os arqueólogos encontraram intacto debaixo de outros templos, com as cores originais do estuque. O seu túmulo e os dos sucessores foram objeto de estudos com análise de isótopos.',
  { h: 'Waxaklajuun Ub’aah K’awiil, «18 Coelho» (695 – 738 d.C.)' },
  'O rei de Copán que mais se destacou na escultura monumental: encomendou as estelas mais ousadas, de relevo muito alto. Em 738 foi capturado e decapitado pelo rei de Quiriguá, de que fora senhor. A derrota foi uma crise grande para Copán, que, ainda assim, continuou com mais reis até c. 822.',
  { h: 'Jasaw Chan K’awiil I, rei de Tikal (682 – c. 734 d.C.)' },
  'Subiu ao trono quando Tikal estava sob a sombra de Calakmul. Em 695 derrotou o rei de Calakmul e relançou a cidade. Os seus sucessores continuaram as construções, e ele foi sepultado no **Templo I**, de que a Grande Praça ainda hoje se orgulha. A sua tumba (n.º 116) tinha jade, ossos esculpidos e vasos pintados.',
  { h: 'Yuknoom Ch’een II, «o Grande» (c. 636 – 686 d.C.)' },
  'Rei de Calakmul que levou o reino de Kaan ao auge. Atuou como um estratega: fez alianças, casou princesas e apoiou rebeliões contra Tikal. Calakmul chegou a ter dezenas de estelas com as suas vitórias.',
  { h: 'Lady Six Sky (Naranjo, séc. VII d.C.)' },
  'Princesa de Dos Pilas, **Wak Chanil Ajaw**, enviada em 682 para reerguer a dinastia de Naranjo, que estava em crise. Governou durante vários anos como regente do filho, **K’ahk’ Tiliw Chan Chaak**, e é um dos exemplos mais claros do poder político das mulheres maias.',
  { h: 'Ajaw Kan Ek’, o último rei itzá (c. 1697)' },
  'O chefe dos **itzá**, em Nojpetén (Tayasal), no lago Petén Itzá. Em 1525, um rei itzá com este título recebeu Hernán Cortés. Em 1697, quando o último rei, também chamado Kan Ek’ (o «Canek» dos espanhóis), foi derrotado por Martín de Ursúa, o último reino maia independente caiu. Algumas profecias do calendário (as de um «k’atun» em que os itzá seriam submetidos) parecem ter influenciado a decisão de se renderem.',
  { h: 'Diego de Landa (1524 – 1579)' },
  'Frade franciscano que chegou ao Iucatão em 1549. Manda queimar os livros maias e os ídolos, em Maní, em 1562, e interroga com tortura quem acusa de idolatria. Foi chamado a Espanha para ser julgado, e escreveu aí a *Relación de las cosas de Yucatán* (c. 1566), uma fonte valiosíssima sobre a vida e o calendário maias e que contém o «alfabeto» que, mal entendido, mais tarde ajudou Knorozov. Foi depois bispo de Iucatão. É uma figura contraditória: destruidor e preservador.',
  { img: 'may-landa-relacion', leg: 'Página da Relación de Landa com o «alfabeto» maia' },
  { h: 'Yuri Knorozov (1922 – 1999)' },
  'Linguista e etnógrafo soviético, nascido em Carcóvia (Kharkiv) e formado e a trabalhar em Leninegrado. Em 1952 publicou o artigo que mostrava que a escrita maia era em parte silábica, e em 1963 o livro *A Escrita dos Índios Maias*. Durante décadas foi atacado por Thompson e pelos maianistas ocidentais, e só visitou a Guatemala em 1990, onde foi homenageado. Mostrou que a escrita **era fonética**.',
  { img: 'may-knorozov', leg: 'Retrato ilustrado de Yuri Knorozov num selo russo de 2022; não é uma fotografia.' },
  { h: 'Tatiana Proskouriakoff (1909 – 1985)' },
  'Arquiteta e ilustradora russo-americana (nasceu em Tomsk, Sibéria), trabalhou na Carnegie Institution. Em 1960 mostrou que as estelas de Piedras Negras, em vez de falar de deuses, registavam acontecimentos da vida de **reis reais**, o que mudou a visão da história maia, de uma sociedade pacífica e conduzida por sacerdotes para uma de reis e guerras.',
  { img: 'may-proskouriakoff', leg: 'Retrato de Tatiana Proskouriakoff; fonte Char Solomon.' },
  { h: 'Linda Schele (1942 – 1998)' },
  'Epigrafista e historiadora de arte americana, da Universidade do Texas. Foi ela quem divulgou a decifração: com os seus **workshops de glifos**, em Austin, ensinou milhares de pessoas, incluindo maias que puderam ler os textos dos seus antepassados. Escreveu com David Freidel *A Forest of Kings* (1990), sobre os reis, e com Mary Miller *The Blood of Kings* (1986), sobre os rituais de sangue.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**A escrita decifrada:** é a única escrita da América antiga lida em grande parte, e permite-nos ouvir a voz de reis e escribas.',
    '**O zero e o calendário:** o conceito de zero e a Contagem Longa mostram uma matemática sofisticada e independente.',
    '**Alimentos:** o **milho**, o **cacau**, a baunilha, o abacate, o chili e o tomate chegaram à Europa a partir de Mesoamérica e mudaram a cozinha do mundo.',
    '**Línguas vivas:** cerca de **30 línguas maias**, faladas por mais de seis milhões de pessoas, com literatura, rádio, escolas bilingues e uma vitalidade que a história oficial tentou calar.',
    '**Tradições:** a tecelagem, as festas e os rituais da milpa, o Tzolk’in dos «guardiões do dia» (*ajq’ijab’*), os santuários nos montes e nas grutas, e obras como o *Popol Vuh* e o *Rabinal Achí*.',
    '**Os livros de Chilam Balam:** livros que os maias do Iucatão escreveram em maia, mas com letras latinas, no período colonial, com profecias, calendário e história.'
  ] },
  { h: 'Arte' },
  'A arte maia distingue-se pela **escultura em pedra** (estelas e altares com retratos reais), pelo **estuque** modelado, pelas **vasilhas policromadas** (com cenas do Xibalbá, da corte e dos deuses), pelo **jade** e pelos **murais** de San Bartolo, Bonampak e Calakmul. As pessoas representam-se com pormenor e individualidade, e alguns artistas assinavam as suas obras, com «o escultor» e o seu nome, o que é raro na Antiguidade.',
  { h: 'Arquitetura' },
  'A pirâmide maia é um **templo sobre a montanha sagrada**, muitas vezes também um túmulo real. Os maias não conheciam a abóbada de verdade, mas construíam **abóbadas falsas** (arco de mísula) e **cristas de telhado** muito altas. Os edifícios eram caiados ou pintados de vermelho, azul e outras cores, com estuque modelado. Hoje vemos a pedra nua, mas as cidades eram **policromas**. O **Templo Rosalila**, de Copán, é um bom exemplo: foi encontrado preservado debaixo de outro templo, com o estuque vermelho original.',
  { img: 'may-copan-rosalila', leg: 'Réplica colorida do Templo Rosalila, Museu de Escultura Maia, Copán' },
  { h: 'A redescoberta' },
  'As cidades maias nunca foram totalmente esquecidas pelos povos locais, mas o mundo exterior só as redescobriu no século XIX. O americano **John Lloyd Stephens** e o inglês **Frederick Catherwood** exploraram Copán, Palenque, Uxmal e outros sítios, e publicaram *Incidents of Travel in Central America, Chiapas and Yucatan* (1841), com os desenhos de Catherwood que tornaram as ruínas famosas. Depois, **Alfred Maudslay** fotografou e moldou os monumentos (1880s–1900s); a Carnegie Institution escavou Chichén Itzá e Uaxactún no início do século XX; **Sylvanus Morley** e **Eric Thompson** estudaram os calendários. Os murais de **Bonampak** foram divulgados em 1946.',
  'No século XXI, o **LIDAR** mudou tudo. Em 2018, o consórcio PACUNAM mostrou, no Petén, mais de 60 000 estruturas escondidas pela floresta, com calçadas, campos agrícolas e fortificações. Em 2020 revelou-se **Aguada Fénix**, e em 2024 uma cidade até então desconhecida, **Valeriana**, em Campeche. Cada novo varrimento obriga a rever o que se pensava da população e da organização maias.',
  { img: 'may-lidar-peten', leg: 'Relevo de ruínas maias na região de Uaxactun, Petén, obtido de dados LiDAR PACUNAM de 2016: inclinação e abertura positiva. Bundzel et al., 2020, figura 1.' },
  { h: 'A vitalidade maia hoje' },
  'Depois da conquista, os maias sofreram séculos de trabalho forçado, perda de terras e discriminação, e, na Guatemala, de um **genocídio** entre 1981 e 1983, segundo a Comissão da Verdade. A partir dos **Acordos de Paz de 1996**, o movimento maia ganhou voz: as línguas ensinam-se nas escolas, há academias das línguas maias, escritores, cineastas, músicos e políticos maias. **Rigoberta Menchú** (Nobel da Paz de 1992) é a mais conhecida. Quando visitar uma pirâmide, lembre-se de que os descendentes de quem a construiu vivem ali ao lado, e que muitos deles ainda realizam cerimónias nos locais.',
  { img: 'may-cenote-sagrado', leg: 'Cenote Sagrado de Chichén Itzá' },
  { caixa: 'Para visitar', texto: 'Os sítios mais importantes são **Tikal** (Guatemala), **Copán** (Honduras), **Palenque**, **Chichén Itzá**, **Uxmal** e **Calakmul** (México), todos Património Mundial. Quase todos são mais agradáveis de manhã cedo, antes do calor e dos grupos. Em **Chichén Itzá** já não é permitido subir ao Castelo. Para ver as peças originais, vá ao **Museu Nacional de Antropologia** (Cidade do México; a máscara de Pakal e a réplica da sua tumba), ao **Museo Popol Vuh** (Cidade da Guatemala), ao **Museu de Escultura Maia** (Copán) e, na Europa, ao **Museu Britânico** (lintéis de Yaxchilán) e à **Biblioteca SLUB** de Dresden (o Códice, em exposição de tempos a tempos). Convém confirmar horários e condições antes de ir.' }
];

const quiz = [
  { p: 'Onde viveram os antigos maias?', op: ['Nos Andes, no Peru', 'No sul do México, na Guatemala, no Belize e em partes de Honduras e El Salvador', 'No vale do Mississípi', 'Nas Caraíbas, só em ilhas'], certa: 1, exp: 'A área maia estende-se das Terras Baixas do Iucatão às Terras Altas da Guatemala.' },
  { p: 'Como se organizavam politicamente os maias do período Clássico?', op: ['Num único império com capital em Tikal', 'Em dezenas de cidades-estado com reis próprios', 'Em tribos sem líderes', 'Num reino governado de Chichén Itzá'], certa: 1, exp: 'Houve dezenas de reinos independentes, com alianças e rivalidades, e nunca um império único.' },
  { p: 'Quem chegou a Tikal em 378 d.C., segundo as inscrições?', op: ['Pakal', 'Siyaj K’ak’', 'Diego de Landa', 'Kukulkán'], certa: 1, exp: 'Siyaj K’ak’ chegou a Tikal em janeiro de 378, e o rei local morreu por esses dias. A ligação a Teotihuacan é debatida.' },
  { p: 'Quanto tempo reinou Pakal, rei de Palenque?', op: ['Cerca de 8 anos', 'Cerca de 20 anos', 'Cerca de 68 anos', 'Cerca de 120 anos'], certa: 2, exp: 'Reinou de 615 a 683, a partir dos 12 anos de idade.' },
  { p: 'O que se pode dizer sobre as teorias de «astronautas» no sarcófago de Pakal?', op: ['São confirmadas por arqueólogos', 'Não têm base: a tampa mostra o rei e o Deus do Milho e a árvore do mundo', 'Provam que Pakal era extraterrestre', 'Foram feitas pelos maias'], certa: 1, exp: 'A imagem é uma cena religiosa maia, do rei a renascer como o Deus do Milho junto da árvore do mundo.' },
  { p: 'Que tipo de escrita usavam os maias?', op: ['Um alfabeto de 26 letras', 'Logossilábica: sinais para palavras e sílabas', 'Apenas desenhos sem leitura', 'Cuneiforme'], certa: 1, exp: 'Combinava logogramas e sinais silábicos, com cerca de 800 sinais.' },
  { p: 'Quem, em 1952, propôs que a escrita maia era silábica, abrindo o caminho à decifração?', op: ['Yuri Knorozov', 'Eric Thompson', 'Sylvanus Morley', 'Diego de Landa'], certa: 0, exp: 'O linguista soviético Yuri Knorozov. Thompson opunha-se a esta ideia.' },
  { p: 'O que mostrou Tatiana Proskouriakoff em 1960?', op: ['Que os maias não sabiam escrever', 'Que as inscrições contavam a história de reis reais, com datas', 'Que o zero tinha sido inventado pelos maias', 'Que o Códice de Dresden era falso'], certa: 1, exp: 'Em Piedras Negras, as inscrições registam nascimentos, subidas ao trono e mortes de governantes.' },
  { p: 'Quantos dias tem o calendário sagrado Tzolk’in?', op: ['20', '260', '365', '584'], certa: 1, exp: 'O Tzolk’in combina 20 nomes de dias com 13 números: 260 dias. O Haab’ tem 365.' },
  { p: 'O que aconteceu em 21 de dezembro de 2012, segundo o calendário maia?', op: ['O fim do mundo', 'O fim de um ciclo de 13 b’ak’tun, e o início de outro', 'Um eclipse total', 'A queda de Chichén Itzá'], certa: 1, exp: 'Era a data 13.0.0.0.0 da Contagem Longa. Nenhum texto maia prevê um fim do mundo.' },
  { p: 'Qual era o símbolo do zero na numeração maia?', op: ['Um ponto', 'Uma barra', 'Uma concha', 'Um círculo vazio'], certa: 2, exp: 'O zero era escrito com uma concha. Um ponto vale 1 e uma barra vale 5.' },
  { p: 'O que é a milpa?', op: ['Um campo onde se cultivam juntos milho, feijão e abóbora', 'Um deus maia', 'Um tipo de pirâmide', 'Uma bebida de cacau'], certa: 0, exp: 'A milpa é a parcela agrícola tradicional, ainda usada hoje.' },
  { p: 'Qual foi o último reino maia independente a cair diante dos espanhóis?', op: ['Chichén Itzá, em 1250', 'Tulum, em 1518', 'Tayasal (Nojpetén), dos itzá, em 1697', 'Uxmal, em 1542'], certa: 2, exp: 'Martín de Ursúa conquistou Nojpetén em março de 1697.' },
  { p: 'Que livro maia foi redigido em k’iche’ e conta a criação do mundo e as aventuras dos Gémeos Heróis?', op: ['O Códice de Dresden', 'O Popol Vuh', 'A Relación de Landa', 'O Chilam Balam'], certa: 1, exp: 'O Popol Vuh, de que a cópia mais antiga é de Francisco Ximénez, está na Newberry Library.' },
  { p: 'Os maias desapareceram?', op: ['Sim, todos morreram no século IX', 'Sim, foram exterminados pelos espanhóis', 'Não: cerca de seis milhões falam línguas maias hoje', 'Não, mas só existem no México'], certa: 2, exp: 'O colapso do Clássico foi das cidades do sul e dos seus reis. Os povos maias continuam vivos, sobretudo na Guatemala e no México.' }
];

export default {
  id: 'maias',
  cor: '#3a9a6a',
  emblema: '../assets/img/maias.png',
  nome:    { pt: 'Maias', en: 'Maya' },
  periodo: { pt: 'c. 2000 a.C. – 1500 d.C.', en: 'c. 2000 BC – AD 1500' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
