// INCAS — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas aproximadas. Para os Incas a cronologia dos reinados (1438, 1471, 1493, 1527) vem sobretudo de cronistas espanhóis e é «tradicional»: a arqueologia sugere que o Estado inca é um pouco mais antigo e que as datas são só indicativas. a.C. = antes de Cristo.
// Imagens: cada {img:'id'} procura o ficheiro  incas/img/id.jpg  (ver IMAGENS_INCAS.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'Os **Incas** construíram o maior império da América antes de Colombo e um dos maiores do mundo do seu tempo. Em menos de cem anos (c. 1438 – 1533), a partir de um pequeno senhorio à volta de **Cusco**, nos Andes do Peru, estenderam o seu domínio por cerca de 4000 km, do sul da Colômbia ao centro do Chile, com uma população de talvez dez milhões de pessoas. Chamavam-lhe **Tawantinsuyu**, «as quatro partes (juntas)».',
    'Fizeram-no sem moeda, sem escrita alfabética, sem ferro, sem roda para transporte e sem animais de tiro. Em vez disso tinham um Estado que organizava o trabalho em turnos (a **mit’a**), armazéns cheios, uma rede de **estradas** com cerca de 30 000 km, um sistema de cordas com nós, o **quipu**, para contar e (talvez) registar mais do que números, e uma arquitetura em pedra tão ajustada que ainda resiste aos sismos. O império foi derrubado em poucos anos, entre 1532 e 1533, por uma conjugação de guerra civil, epidemias e da chegada dos espanhóis de **Francisco Pizarro**. Mas o último Estado inca resistiu em Vilcabamba até 1572.'
  ] },
  { img: 'inc-mapa-tawantinsuyu', leg: 'Mapa do Império Inca e dos quatro suyus' },
  { h: 'Onde ficava' },
  'O império estendia-se ao longo da **cordilheira dos Andes**, uma faixa montanhosa estreita entre o Pacífico e a floresta amazónica, e cobria o território de hoje do **Peru**, quase todo o **Equador**, o oeste da **Bolívia**, o norte do **Chile** e do noroeste da **Argentina**, e o sul da **Colômbia**. A capital, **Cusco**, a cerca de 3400 m de altitude, ficava no sul do atual Peru. Era um mundo de grandes contrastes: desertos costeiros, vales férteis, altiplanos gelados, florestas húmidas. Governar essa diversidade, em que as pessoas viviam de coisas muito diferentes consoante a altitude, foi o grande desafio dos Incas e a chave da sua organização.',
  'O nome **Inca** designava, em sentido estrito, o **soberano** (o *Sapa Inca*, «o Inca único») e a elite da família de Cusco. Os historiadores usam-no também para o povo e o Estado. O povo comum chamava-se a si próprio pelo nome do seu **ayllu** ou da sua província. A língua oficial do império era o **quíchua** (*runasimi*, «a fala das pessoas»), que os Incas espalharam muito além de Cusco.',
  { img: 'inc-machu-picchu', leg: 'Vista de Machu Picchu com Huayna Picchu, Peru' },
  { h: 'Quando existiu' },
  'O império inca é muito recente quando comparado com o Egito ou a Mesopotâmia, e é uma das poucas civilizações antigas que os europeus chegaram a ver «em funcionamento». Mas atenção: as datas dos reinados incas vêm de relatos orais registados por espanhóis depois da conquista, e nenhuma é segura. As que se usam aqui são as «tradicionais».',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Culturas andinas antigas', 'c. 3000 a.C. – 1200 d.C.', 'Caral, Chavín, Paracas e Nazca, Moche, Tiwanaku, Wari, Chimú: os antecedentes culturais dos Incas'],
    ['Senhorio de Cusco', 'c. 1200 – 1438', 'Pequeno reino local de Cusco, em disputa com vizinhos; reis em parte lendários (Manco Cápac, Sinchi Roca, etc.)'],
    ['Pachacútec e a expansão', 'c. 1438 – 1471', 'Vitória sobre os chancas; reconstrução de Cusco; conquista do centro dos Andes; criação do Tawantinsuyu'],
    ['Túpac Inca Yupanqui', 'c. 1471 – 1493', 'Queda do reino Chimú; avanço para o Equador, o sul do Chile e a Amazónia'],
    ['Huayna Cápac', 'c. 1493 – 1527', 'Máxima extensão do império; epidemias; Quito torna-se capital secundária'],
    ['Guerra civil', 'c. 1527 – 1532', 'Huáscar contra Atahualpa pelo trono'],
    ['Conquista espanhola', '1532 – 1533', 'Cajamarca; execução de Atahualpa; Pizarro entra em Cusco'],
    ['Estado neo-inca de Vilcabamba', 'c. 1537 – 1572', 'Manco Inca e os seus sucessores resistem na selva até à captura de Túpac Amaru I']
  ] } },
  { img: 'inc-mapa-antecedentes', leg: 'Mapa da expansão de Wari e Tiwanaku, estados andinos pré-incas.' },
  { h: 'Quem eram os Incas?' },
  'Os Incas falavam quíchua e viviam desde o século XII, segundo a tradição, no vale de Cusco. Não eram os «inventores» das técnicas andinas: terraços de cultivo, canais, estradas, tecidos, metalurgia, calendários, a ideia de reciprocidade entre comunidades, tudo isto vinha de culturas anteriores, que os Incas souberam **reunir, ampliar e pôr ao serviço de um Estado**. Foi essa capacidade de organização, mais do que a invenção, o que os distinguiu. Também não eram um povo homogéneo: o império reuniu dezenas de povos, com línguas e costumes diferentes (aimarás, chancas, chimús, cañaris, entre outros), uns conquistados à força, outros por aliança e diplomacia.',
  { h: 'Porque importam' },
  { lista: [
    '**Organização sem moeda:** conseguiram governar milhões de pessoas com impostos pagos em trabalho, armazéns do Estado e redistribuição, sem dinheiro nem mercados controlados pelo Estado como os de outras civilizações.',
    '**Engenharia andina:** estradas (*Qhapaq Ñan*), pontes de corda, terraços agrícolas, canais e muros de pedra que resistem a sismos.',
    '**Registo sem escrita alfabética:** o quipu é um sistema único no mundo e ainda hoje se debate se contém mais do que números.',
    '**Agricultura:** domesticaram, ou aperfeiçoaram, a batata, o milho andino, a quinoa e centenas de outras plantas. A batata alimenta hoje milhares de milhões de pessoas.',
    '**Encontro de dois mundos:** a conquista do Peru foi um dos momentos decisivos da história colonial da América e do mundo.'
  ] },
  { caixa: 'Os Incas hoje', texto: 'Os descendentes dos povos do Tawantinsuyu são hoje milhões de pessoas no Peru, na Bolívia e no Equador. O **quíchua** é falado por cerca de 7 a 10 milhões de pessoas, e os costumes de reciprocidade (*ayni*), a veneração da **Pachamama** (a Mãe Terra) e as técnicas agrícolas andinas mantêm-se vivos. **Cusco** e **Machu Picchu** são Património Mundial da UNESCO (1983), e a rede de estradas **Qhapaq Ñan** foi inscrita em 2014 por seis países: Argentina, Bolívia, Chile, Colômbia, Equador e Peru.' },
  { caixa: 'Mitos a evitar', texto: [
    '**«Machu Picchu era uma cidade perdida»:** não estava esquecida. Camponeses locais conheciam-na e cultivavam os seus terraços; Hiram Bingham chegou lá em 1911, guiado por um habitante, e deu-a a conhecer ao mundo.',
    '**«Os Incas pensaram que os espanhóis eram deuses»:** é um mito construído depois. Há indicações de que alguns lhes chamaram *wiraqocha* (um termo de respeito), mas Atahualpa e a sua corte tomaram decisões políticas e militares perfeitamente racionais.',
    '**«Era uma sociedade comunista ou um paraíso sem fome»:** foi um Estado com classes, com tributo em trabalho obrigatório e com violência, ainda que organizado com muita eficiência.'
  ] }
];

const linha = [
  'Esta linha do tempo segue os acontecimentos principais da história dos Incas e das culturas que a precederam. As datas dos reinados incas são as «tradicionais» (a partir dos cronistas); as mais antigas são as mais incertas.',
  { linha: [
    { d: 'c. 2600 a.C.', t: 'Caral, uma das mais antigas cidades da América', x: 'No vale de Supe, na costa do Peru, nasce uma sociedade com edifícios monumentais, pirâmides de pedra e praças, antes da cerâmica e com poucos sinais de guerra. É a base distante da civilização andina. Tornou-se conhecida sobretudo a partir dos anos 1990 e 2000 (a datação por radiocarbono publicada em 2001 foi decisiva), e a arqueóloga peruana **Ruth Shady** liderou as escavações.' },
    { d: 'c. 900 – 200 a.C.', t: 'Chavín de Huántar', x: 'O centro cerimonial de **Chavín**, nas montanhas do norte do Peru, espalha por uma vasta região uma arte de felinos, serpentes e aves e um culto de peregrinação. Os arqueólogos chamam-lhe o primeiro «horizonte» cultural dos Andes. No seu interior ficava o **Lanzón**, uma estela de granito esculpida com uma figura de presas.' },
  ] },
  { img: 'inc-chavin-lanzon', leg: 'Lanzón de Chavín de Huántar' },
  { linha: [
    { d: 'c. 500 a.C. – 500 d.C.', t: 'Paracas e Nazca', x: 'No deserto do sul do Peru, os Nazca desenham no solo as famosas **linhas de Nazca**, figuras de animais e linhas de muitos quilómetros. Fazem cerâmica policromada e canais subterrâneos de água, os *puquios*. Os Paracas, que os precedem, produzem tecidos extraordinários.' },
  ] },
  { img: 'inc-nazca-colibri', leg: 'Geóglifo do colibri, Nazca' },
  { linha: [
    { d: 'c. 100 – 700 d.C.', t: 'Os Moche', x: 'Na costa norte do Peru, os Moche constroem pirâmides de adobe (**Huaca del Sol e da Lua**), modelam vasos com retratos realistas e fabricam joias de ouro e prata. O túmulo do **Senhor de Sipán** (descoberto em 1987) é um dos achados mais ricos da arqueologia americana.' },
  ] },
  { img: 'inc-moche-vaso', leg: 'Vaso-retrato moche, Museo Larco' },
  { linha: [
    { d: 'c. 500 – 1000 d.C.', t: 'Tiwanaku', x: 'Junto ao **lago Titicaca**, a cidade de **Tiwanaku** (hoje na Bolívia) ergue templos de pedra, como a Porta do Sol, e domina o altiplano com uma agricultura de campos elevados. A sua religião e a sua arte influenciam toda a região, incluindo, mais tarde, os Incas.' },
  ] },
  { img: 'inc-tiwanaku-sol', leg: 'Porta do Sol, Tiwanaku, Bolívia' },
  { linha: [
    { d: 'c. 600 – 1000 d.C.', t: 'O império Wari', x: 'A partir de **Huari** (Ayacucho), os Wari organizam o primeiro Estado expansionista dos Andes centrais, com estradas, centros administrativos (como Pikillacta, perto de Cusco) e terraços. Muitas das ideias de administração e de estradas que os Incas usaram parecem vir deles.' },
    { d: 'c. 900 – 1470', t: 'O reino Chimú', x: 'Na costa norte, os **Chimús** fundam o maior reino do Peru antes dos Incas, com capital em **Chan Chan**, uma enorme cidade de adobe com muros decorados com relevos. Eram ourives e engenheiros hidráulicos de primeira ordem.' },
  ] },
  { img: 'inc-chan-chan', leg: 'Muros decorados de Chan Chan' },
  { linha: [
    { d: 'c. 1200 (tradição)', t: 'Manco Cápac e a fundação de Cusco', x: 'Segundo a lenda, **Manco Cápac** e a sua irmã e esposa **Mama Ocllo**, filhos do Sol (Inti), saíram do lago Titicaca ou de uma gruta em Pacaritambo, e fundaram Cusco no sítio onde um bastão de ouro se enterrou na terra. É um **mito de origem** e não um facto histórico, mas serviu para justificar o poder da família real. Cusco existiria já como povoação por volta do século XII ou XIII.' },
  ] },
  { img: 'inc-manco-capac', leg: 'Manco Cápac e Mama Ocllo, fundadores lendários dos Incas. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 1200 – 1438', t: 'O senhorio de Cusco', x: 'Durante dois séculos Cusco é um pequeno reino entre muitos. A tradição dá-lhe sucessivos reis (Sinchi Roca, Lloque Yupanqui, Mayta Cápac, Inca Roca, entre outros), mas os seus nomes e datas são incertos, e os historiadores discutem quanto é história e quanto é lenda. Os Incas alargam o domínio por casamentos, alianças e algumas guerras no vale.' },
    { d: 'c. 1438', t: 'A guerra contra os chancas e Pachacútec', x: 'Os **chancas**, um povo rival de Andahuaylas, atacam Cusco. Segundo a tradição, o Inca reinante, **Viracocha**, foge, e o seu filho **Cusi Yupanqui** defende a cidade e vence. Toma então o nome de **Pachacútec** («o que muda o mundo») e inicia a expansão. Os arqueólogos discutem a data e quanto da história é lenda, mas a vitória sobre os chancas marca tradicionalmente o início do império.' },
  ] },
  { img: 'inc-expansao-chanca', leg: 'Batalha imaginada entre Incas e Chancas, c. 1438. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 1440 – 1470', t: 'A criação do Tawantinsuyu', x: 'Pachacútec e o seu filho conquistam a região de Cusco ao lago Titicaca, o vale do Mantaro e os Andes centrais. Reconstrói Cusco como capital sagrada, funda o **Coricancha**, organiza o império em quatro partes (suyus) e cria o sistema de tributo em trabalho, as estradas e os armazéns.' },
    { d: 'c. 1450', t: 'Machu Picchu', x: 'Uma propriedade real de Pachacútec é construída numa crista de montanha sobre o rio Urubamba. Estudos de radiocarbono de 2021 indicam que o local já era ocupado por volta de **1420**, mais cedo do que se julgava. Servia de residência, de centro cerimonial e de unidade agrícola da família real.' },
    { d: 'c. 1470', t: 'A queda do reino Chimú', x: 'O príncipe **Túpac Inca Yupanqui** conquista o reino Chimú, o último grande rival da costa norte, e leva ourives e artesãos para Cusco.' },
    { d: 'c. 1471 – 1493', t: 'Túpac Inca Yupanqui reina', x: 'Como Inca, avança para norte (Equador), para sul (até ao rio Maule, no Chile, onde enfrenta os mapuches) e para a Amazónia. Segundo a tradição, é o que mais alarga o império.' },
    { d: 'c. 1493 – 1527', t: 'Huayna Cápac', x: 'Reina durante a maior extensão do império. Passa anos no norte, no Equador, onde faz de **Quito** uma capital secundária. O seu filho **Atahualpa** esteve ligado ao norte (o local de nascimento é debatido), e em Cusco ficou o filho **Huáscar**.' },
    { d: 'c. 1524 – 1528', t: 'Epidemias e primeiros contactos', x: 'Doenças trazidas da Europa (provavelmente a varíola, mas há debate) espalham-se pela América antes mesmo dos conquistadores, e matam muita gente nos Andes. Em 1526–28, na sua segunda expedição, Pizarro explora a costa norte do Peru e chega a uma cidade inca (Tumbes).' },
    { d: 'c. 1527', t: 'Morte de Huayna Cápac', x: 'O Inca morre no norte do império (em Quito ou Tumipampa, segundo as fontes), de uma doença, com o seu herdeiro designado (Ninan Cuyuchi), segundo a tradição. Não deixou um sucessor claro, e a sucessão ficou aberta.' },
    { d: 'c. 1529 – 1532', t: 'A guerra civil', x: '**Huáscar**, em Cusco, e **Atahualpa**, em Quito, disputam o trono. Os generais de Atahualpa (**Quisquis** e **Chalcuchímac**) avançam para sul e vencem em 1532, perto de Cusco; **Huáscar** é capturado.' },
    { d: '16 de novembro de 1532', t: 'Cajamarca', x: 'Atahualpa, a caminho de Cusco, encontra-se em **Cajamarca** com **Francisco Pizarro** e cerca de 168 espanhóis. Os espanhóis atacam de surpresa, matam milhares de acompanhantes do Inca (praticamente sem baixas) e capturam-no.' },
  ] },
  { img: 'inc-cajamarca', leg: 'Cajamarca, 16 de novembro de 1532, antes do ataque a Atahualpa. Ilustração gerada por IA.' },
  { linha: [
    { d: '1532 – 1533', t: 'O resgate e a execução de Atahualpa', x: 'Atahualpa propõe encher uma sala de ouro (e duas de prata) em troca da liberdade, e os incas trazem, segundo as estimativas, cerca de seis toneladas de ouro e doze de prata, que os espanhóis fundem. Mesmo assim, Atahualpa é julgado e executado a **26 de julho de 1533**. Segundo a tradição, o Inca aceita o batismo para escapar à fogueira, e é estrangulado.' },
    { d: '15 de novembro de 1533', t: 'Pizarro entra em Cusco', x: 'Os espanhóis e os seus aliados indígenas, inimigos de Cusco, ocupam a capital. Instalam **Manco Inca**, meio-irmão de Huáscar, como Inca fantoche, em vez do seu rival.' },
    { d: '1536 – 1537', t: 'A revolta de Manco Inca', x: 'Manco Inca revolta-se, cerca Cusco durante meses (a luta passa pela fortaleza de **Sacsayhuamán**), e vence os espanhóis em **Ollantaytambo** no início de 1537. Sem conseguir tomar Cusco, retira-se para as montanhas de **Vilcabamba**.' },
    { d: 'c. 1537 – 1572', t: 'O Estado neo-inca de Vilcabamba', x: 'Manco Inca e os seus filhos **Sayri Túpac**, **Titu Cusi** e **Túpac Amaru** governam durante trinta e cinco anos uma pequena corte inca na selva. Manco é assassinado em 1544 por espanhóis que acolhera como refugiados.' },
    { d: '1572', t: 'O fim: Túpac Amaru I', x: 'O vice-rei **Francisco de Toledo** manda uma expedição contra Vilcabamba. **Túpac Amaru I** é capturado e decapitado em Cusco a 24 de setembro de 1572. É o fim da dinastia inca reinante.' },
    { d: '1780', t: 'Túpac Amaru II', x: 'José Gabriel Condorcanqui, que se dizia descendente dos Incas, adota o nome de Túpac Amaru e lidera uma grande rebelião contra as autoridades espanholas. É executado em 1781. A memória inca torna-se símbolo de resistência.' },
    { d: '1911', t: 'Hiram Bingham em Machu Picchu', x: 'O explorador norte-americano **Hiram Bingham III**, de Yale, chega a Machu Picchu a 24 de julho de 1911, guiado por camponeses locais. As suas fotografias na *National Geographic* tornam o sítio mundialmente famoso.' },
    { d: '1983', t: 'Património Mundial', x: 'Cusco e Machu Picchu são classificados pela UNESCO. Em 2014, a rede viária **Qhapaq Ñan** também.' }
  ] }
];

const mapa = [
  'O império dos Incas organizava-se em torno de **Cusco**, o «umbigo do mundo» (*qosqo* quer dizer «umbigo» em quíchua), e de quatro grandes regiões, os **suyus**, que partiam da praça principal. Daqui vinha o nome Tawantinsuyu.',
  { tabela: { cab: ['Suyu', 'Direção', 'Território (aprox.)', 'Notas'], linhas: [
    ['Chinchaysuyu', 'Noroeste', 'Costa e serra do Peru central e norte; Equador; sul da Colômbia', 'O maior e mais povoado; incluía o reino Chimú e Quito'],
    ['Antisuyu', 'Nordeste', 'Vertentes orientais dos Andes e a Amazónia', 'Região de selva e de coca; Machu Picchu fica nesta direção'],
    ['Collasuyu', 'Sudeste', 'Altiplano do Titicaca, Bolívia, norte do Chile e noroeste da Argentina', 'A parte mais extensa em território; prata e estanho'],
    ['Cuntisuyu', 'Sudoeste', 'Costa sul do Peru e Arequipa', 'O mais pequeno dos quatro']
  ] } },
  { tabela: { cab: ['Local', 'Onde', 'Para que ficou conhecido'], linhas: [
    ['Cusco', 'Peru, 3400 m', 'Capital; Coricancha, Plaza Huacaypata, o centro das estradas'],
    ['Sacsayhuamán', 'Perto de Cusco', 'Fortaleza-templo de pedras gigantes; palco da batalha de 1536'],
    ['Ollantaytambo', 'Vale Sagrado, Peru', 'Fortaleza e povoado inca; vitória de Manco Inca em 1537'],
    ['Pisac', 'Vale Sagrado, Peru', 'Terraços, observatório e mercado; propriedade real'],
    ['Machu Picchu', 'Vale do Urubamba, Peru', 'Propriedade real de Pachacútec, c. 1450'],
    ['Moray', 'Vale Sagrado, Peru', 'Terraços circulares, possível laboratório agrícola'],
    ['Cajamarca', 'Norte do Peru', 'Onde Atahualpa foi capturado em 1532'],
    ['Quito', 'Equador', 'Capital secundária de Huayna Cápac'],
    ['Pachacámac', 'Costa de Lima, Peru', 'Grande santuário e oráculo costeiro, anexado pelos Incas'],
    ['Huánuco Pampa', 'Andes centrais, Peru', 'Centro administrativo com centenas de armazéns'],
    ['Ingapirca', 'Equador', 'Templo e fortaleza incas no território dos cañaris'],
    ['Vilcabamba (Espíritu Pampa)', 'Selva do Peru', 'Último refúgio dos Incas, c. 1537–1572']
  ] } },
  { h: 'Cusco, a capital sagrada' },
  'Cusco estava dividida em duas metades, **Hanan** (a de cima) e **Hurin** (a de baixo), e a partir da praça central, a **Huacaypata**, partiam as estradas dos quatro suyus. Era a cidade dos templos, dos palácios e dos Incas mortos, e ao mesmo tempo o centro do mundo para os Incas. Pachacútec reconstruiu-a depois da guerra contra os chancas: ruas retas e canais de água, edifícios de pedra e uma praça enorme. É popular a ideia de que a planta de Cusco tinha a forma de um **puma**, com Sacsayhuamán como cabeça, mas essa leitura é **debatida** e mais simbólica do que comprovada.',
  { img: 'inc-cusco-reconstrucao', leg: 'Reconstrução conjetural de Cusco, c. 1520. Ilustração gerada por IA.' },
  { img: 'inc-coricancha', leg: 'Muros incas do Coricancha, Cusco' },
  { h: 'O Coricancha, o templo do Sol' },
  'O **Coricancha** (*Quri Kancha*, «o recinto de ouro») era o templo mais sagrado do império, dedicado a **Inti**, o Sol, mas com santuários para a Lua, as estrelas, o trovão e o arco-íris. Segundo os cronistas, as paredes interiores estavam revestidas por placas de ouro e havia, num jardim, imagens de plantas e animais em ouro de tamanho natural. Os espanhóis fundiram tudo e construíram em cima o **convento de Santo Domingo**. Os sismos de 1650 e de 1950 derrubaram boa parte da construção colonial, e deixaram intactos os muros incas.',
  { img: 'inc-templo-sol', leg: 'Interior imaginado de um templo inca do Sol. Ilustração gerada por IA.' },
  { h: 'Sacsayhuamán' },
  'A fortaleza-templo de **Sacsayhuamán**, sobre Cusco, tem três enormes muros em ziguezague, feitos com blocos de calcário que pesam muitas dezenas de toneladas, o maior com mais de cem. A função é debatida: fortaleza, templo, lugar de cerimónias, ou as três coisas. Em 1536 foi o centro da luta entre os homens de **Manco Inca** e os espanhóis: os Incas tomaram-na e foi retomada pelos espanhóis num assalto. Muitas das suas pedras foram depois retiradas para construir a Cusco colonial.',
  { img: 'inc-sacsayhuaman', leg: 'Muros em ziguezague de Sacsayhuamán' },
  { h: 'Ollantaytambo' },
  'No Vale Sagrado, **Ollantaytambo** tinha uma povoação e uma fortaleza, com terraços e um recinto cerimonial de grandes blocos de **pórfiro avermelhado** (os seis monólitos do «Templo do Sol»), trazidos de uma pedreira do outro lado do vale. Foi aqui que **Manco Inca** derrotou **Hernando Pizarro** no início de 1537: foi uma das poucas grandes vitórias incas sobre os espanhóis. A povoação ainda mantém a traça inca, com ruas e canais de água em uso.',
  { img: 'inc-ollantaytambo', leg: 'Fortaleza e terraços de Ollantaytambo' },
  { h: 'Machu Picchu' },
  'A **propriedade real** que Pachacútec mandou construir, c. 1450, a 2430 m de altitude, tinha cerca de 200 edifícios, terraços, canais, templos (o Templo do Sol, a Intihuatana) e uma zona agrícola. Era um lugar para o Inca, a sua família e a sua corte, e para cerimónias e cultivo; os seus habitantes permanentes seriam algumas centenas. Foi abandonada na altura da conquista, e nunca foi encontrada pelos espanhóis, o que a salvou de ser destruída. A sua função exata é debatida, e fala-se de um retiro real, de um santuário religioso e de uma ligação ao clima do Antisuyu, mas o consenso é que seria uma **propriedade real**.',
  { img: 'inc-machu-picchu-reconstrucao', leg: 'Reconstrução de Machu Picchu em uso, c. 1500. Ilustração gerada por IA.' },
  { h: 'Estradas e pontes: o Qhapaq Ñan' },
  'O **Qhapaq Ñan** («o caminho principal») era uma rede de estradas de cerca de **30 000 km**, com duas grandes linhas norte–sul (uma pela costa e outra pela montanha) e muitos ramais. Passava por desertos, passos de mais de 4000 m e florestas. Tinha escadarias, drenagens, muros de suporte e **pontes suspensas de corda** sobre os rios. A cada poucos quilómetros havia um **tambo** (estalagem e armazém do Estado), e entre eles corriam os **chasquis**, os correios que transmitiam mensagens orais e quipus em estafeta. A cada dia os correios podiam percorrer, segundo estimativas muito citadas, mais de 200 km, mas isso é provavelmente otimista. Só o Estado e os seus agentes podiam usar as estradas principais. Os Incas não usavam a roda como meio de transporte: andava-se a pé e carregava-se com lamas.',
  { img: 'inc-qhapaq-nan', leg: 'Troço empedrado da estrada inca' },
  { img: 'inc-ponte-corda', leg: 'Ponte de corda de Q’eswachaka' },
  'A ponte de **Q’eswachaka**, no Peru, com cerca de 30 m, é refeita todos os anos em junho por comunidades quíchuas, com a mesma técnica de fibras de erva trançadas, e a tradição foi inscrita pela UNESCO como património imaterial em 2013.',
  { h: 'Vilcabamba' },
  'O refúgio de **Manco Inca**, depois da derrota em Cusco, ficava na selva, a oeste de Machu Picchu. Durante 35 anos foi a capital de um **Estado neo-inca**, e daqui partiam ataques contra os espanhóis. O sítio de **Espíritu Pampa**, na floresta, foi identificado como a capital, por Gene Savoy, em 1964, e é hoje o local aceite pela maioria dos investigadores. Hiram Bingham tinha pensado, em 1911, que Machu Picchu era Vilcabamba, uma ideia que se revelou errada.',
  { img: 'inc-vilcabamba', leg: 'Ruínas de Espíritu Pampa, Vilcabamba' },
  { h: 'As rotas e o comércio' },
  'Os Incas não tinham comércio livre como o dos fenícios ou dos gregos. O que circulava eram **bens do Estado**, como o milho, as batatas desidratadas, os têxteis, as armas, a coca, o ouro e o spondylus (uma concha vermelha do Equador, muito valiosa em ritos), e circulava por estradas e armazéns controlados. Ao longo das costas e dos vales, comunidades diferentes trocavam produtos de altitudes diferentes, segundo uma antiga lógica andina, que os Incas aproveitaram.'
];

const sociedade = [
  { h: '1. Organização política' },
  'O império era governado pelo **Sapa Inca**, considerado filho do Sol e figura sagrada, ao mesmo tempo rei, sumo-sacerdote e comandante supremo. Casava com uma irmã, a **Qoya**, que era a sua esposa principal; o herdeiro era normalmente escolhido entre os filhos (não necessariamente o mais velho), o que gerava crises na sucessão. O Inca usava na testa uma franja vermelha, a *mascaypacha*. Quando morria, o corpo era mumificado e continuava a «viver», com servos, terras e palácio próprios, no seio da sua família, a **panaca**; por isso cada novo Inca tinha de conquistar novas terras para se sustentar.',
  'Abaixo do Inca, o império era dividido em quatro suyus, com governadores (**apus**) da família real, e depois em províncias e comunidades, com um sistema de **organização decimal**: as famílias eram agrupadas em unidades de 10, 50, 100, 500, 1000, 5000 e 10 000 contribuintes, cada uma com o seu chefe. Os chefes locais, os **curacas**, mantinham os seus cargos se fossem fiéis, e serviam de ligação entre o Estado e as comunidades. Os filhos dos curacas eram educados em Cusco, o que ensinava a língua e os costumes dos Incas, e funcionava como refém.',
  { h: '2. Classes sociais' },
  'A sociedade tinha classes bem definidas. No topo, o Inca e a sua família (os **panacas** e a nobreza de Cusco, os «orejones», assim chamados pelos espanhóis por usarem grandes brincos de orelha). Depois, os curacas, os sacerdotes, os generais e funcionários. A grande maioria eram os **hatunrunas**, camponeses organizados em ayllus. Os **yanakunas** eram servidores permanentes, ligados ao Inca ou a nobres e não a uma comunidade. As **aqllas** («mulheres escolhidas») eram mulheres retiradas das suas comunidades e instaladas em casas especiais (os *aqllawasi*), onde teciam e faziam chicha para o Estado, serviam nos templos ou eram oferecidas como esposas do Inca ou como recompensa a nobres. Os **mitmaqs** eram famílias deslocadas à força de uma região para outra, para povoar territórios, vigiar rebeldes ou ensinar o milho.',
  { h: '3. O ayllu, a mit’a e a economia sem moeda' },
  'A base da sociedade era o **ayllu**, uma comunidade de famílias ligadas por parentesco real ou simbólico, que partilhava terras, rebanhos e trabalho. A sua regra era a **reciprocidade** (*ayni*): quem recebe ajuda devolve ajuda. Os Incas aproveitaram esta tradição e transformaram-na num imposto: cada comunidade devia ao Estado um **turno de trabalho**, a **mit’a**. Esse trabalho servia para cultivar as terras do Estado e do Sol, construir estradas, templos e armazéns, servir no exército, fazer tecidos, extrair metais ou transportar bens. Em troca o Estado dava comida, bebida (chicha) e festas, e protegia os armazéns de reserva para anos de fome.',
  { img: 'inc-mit-a', leg: 'Trabalho coletivo numa prestação de mit’a. Ilustração gerada por IA.' },
  'As terras eram divididas em três: as do **Sol** (para a religião), as do **Inca** (para o Estado) e as da **comunidade**. Não havia moeda, e o comércio local era limitado e sem preços; o Estado redistribuía os produtos através dos **qollqas** (armazéns), que podiam guardar milho, batata desidratada e têxteis durante anos. Os têxteis finos, mais do que o ouro, eram a «moeda» de prestígio: o Inca oferecia-os como favor a nobres e aliados. Esta organização foi mal compreendida pelos espanhóis, que a transformaram: a **mit’a de Potosí**, o recrutamento forçado de indígenas para as minas de prata no período colonial, tomou o nome mas era muito mais brutal que a mit’a inca.',
  { h: '4. Religião' },
  'A religião inca era uma mistura de culto oficial do Estado, centrado no Sol e no Inca, e de crenças locais, que o império tolerava desde que se aceitasse o Sol. Os Incas dividiam o cosmos em três mundos: **Hanan Pacha** (o mundo de cima, dos deuses), **Kay Pacha** (o mundo da vida) e **Ukhu Pacha** (o mundo de dentro e dos mortos). Tudo tinha um espírito, e a natureza era sagrada: montanhas (os **apus**), rios, pedras, fontes. Chamava-se **huaca** a qualquer lugar ou objeto sagrado, e só em Cusco havia, segundo o cronista Bernabé Cobo, mais de 300 huacas, ligadas pelas linhas imaginárias dos **ceques**, que partiam do Coricancha.',
  { tabela: { cab: ['Divindade', 'Domínio', 'Notas'], linhas: [
    ['Inti', 'O Sol; antepassado dos Incas', 'O deus oficial do Estado; o seu templo era o Coricancha'],
    ['Viracocha', 'O criador (de pessoas e do mundo)', 'Deus criador, muito venerado; os relatos dos cronistas podem ter sido influenciados pelo cristianismo'],
    ['Pachamama', 'A Mãe Terra', 'Venerada ainda hoje nos Andes, com oferendas à terra'],
    ['Mama Quilla', 'A Lua', 'Esposa do Sol; protetora das mulheres e do calendário'],
    ['Illapa', 'O trovão, o raio e a chuva', 'Muito importante para a agricultura'],
    ['Mama Cocha', 'O mar e a água', 'Venerada na costa'],
    ['Pachacámac', 'Deus-oráculo da costa central', 'Anexado pelos Incas, que mantiveram o seu culto'],
    ['Supay', 'Espírito do mundo de baixo', 'Os missionários espanhóis identificaram-no, sem razão, com o Diabo']
  ] } },
  { img: 'inc-mumias', leg: 'Procissão imaginada com múmias de soberanos incas em Cusco. Ilustração gerada por IA.' },
  { h: 'Múmias e antepassados' },
  'Os Incas mumificavam os corpos dos seus reis e de muitos nobres. As múmias eram guardadas nos palácios, serviam banquetes, «conversavam» através de servos e eram levadas pela praça de Cusco em festas, com oferendas de comida e de chicha. Os defuntos eram considerados poderosos intermediários dos vivos. Quando os espanhóis proibiram o culto, as famílias esconderam muitas múmias, e em 1559 o magistrado **Polo de Ondegardo** encontrou várias (outras desapareceram para sempre).',
  { h: 'Os sacrifícios e a capacocha' },
  'O sacrifício mais comum era o de **lamas** e de objetos, com coca, chicha e tecidos. Também houve **sacrifícios humanos**, mas raros e limitados a ocasiões muito solenes: entronizações de um Inca, grandes desastres, guerras. O mais conhecido era a **capacocha** (*qhapaq hucha*), em que crianças e adolescentes, escolhidos nas províncias pela sua perfeição física, eram levados a Cusco e depois enviados a montanhas sagradas. Aí eram deixados, com ricas oferendas, em câmaras de alta altitude, onde morreriam de frio ou por golpe. Os corpos encontrados em 1999 no cume do vulcão **Llullaillaco** (6700 m), na fronteira entre a Argentina e o Chile, mostram uma menina de cerca de 15 anos, um menino de 7 e uma menina de 6, e foram estudados pela equipa de **Johan Reinhard**. Para os Incas era uma honra, uma ligação entre os humanos e os deuses; para nós, é difícil de entender. Era uma prática rara, e não «o dia a dia» dos Incas.',
  { img: 'inc-llullaillaco', leg: 'Vulcão Llullaillaco, Andes' },
  { h: '5. A vida de todos os dias: casa, família e alimentação' },
  'A família camponesa vivia numa casa retangular de pedra ou de adobe, com telhado de colmo, uma só divisão e um fogão no chão; dormia-se em esteiras ou em peles, e criavam-se **cuyes** (porquinhos-da-índia) dentro de casa, para comer. O casamento era geralmente entre membros do mesmo ayllu, e os jovens casavam-se numa cerimónia coletiva, organizada pelo Estado, ao atingirem a idade. As crianças trabalhavam desde cedo, e a nobreza estudava em Cusco, com mestres de quipu, de história e de língua.',
  { img: 'inc-casa-inca', leg: 'Quotidiano de uma família camponesa inca. Ilustração gerada por IA.' },
  'A base da alimentação era a **batata** (centenas de variedades), o **milho** (sobretudo em sopas, em grão tostado e em **chicha**, cerveja de milho), a **quinoa**, a oca, o ulluco, o feijão, o pimento (*ají*) e a carne de **cuy**, lama e alpaca. Para conservar as batatas faziam o **chuño**, por congelamento e secagem ao sol, que dura anos. A carne salgada e seca chamava-se **ch’arki**, palavra de que vem o nosso «charque». A **coca** era mascada, com um pouco de cal, nos rituais e no trabalho, e era um bem do Estado. A chicha era a bebida das festas, e o Estado oferecia-a nas obras públicas.',
  { img: 'inc-batatas', leg: 'Variedades de batatas andinas' },
  { h: '6. Vestuário e têxteis' },
  'O tecido era o bem mais valioso dos Andes, mais ainda do que o ouro. Fazia-se com algodão (na costa) e com a lã de lama, alpaca e **vicunha** (a mais fina, reservada ao Inca). Os homens usavam uma túnica (*unku*), um manto e sandálias; as mulheres, um vestido (*aksu*), um manto (*lliclla*) fixado com alfinetes de metal (*tupus*). Os nobres usavam grandes brincos de orelha e túnicas com desenhos geométricos, os **tocapus**, em que alguns investigadores veem uma espécie de linguagem visual, hipótese não provada. Os têxteis eram feitos por mulheres, em tear de cintura ou de pé.',
  { img: 'inc-tunica', leg: 'Túnica inca com padrões geométricos, c. 1400–1540, Cleveland Museum of Art (1957.136).' },
  { h: '7. Música, festas e calendário' },
  'A música usava **flautas** (*quenas*), **flautas de pã** (*antaras*, *sikus*), tambores (*tinyas*) e a trombeta de concha, o *pututu*. Havia canções e danças ligadas ao trabalho do campo e aos rituais. O calendário seguia o Sol e a Lua, com meses marcados por festas agrícolas e religiosas. A mais importante era o **Inti Raymi**, a festa do Sol, no solstício de inverno (junho no hemisfério sul), com sacrifícios de lamas, danças e uma procissão. Hoje, uma representação teatral do Inti Raymi (criada em 1944) é feita todos os anos a 24 de junho, em Sacsayhuamán.',
  { img: 'inc-inti-raymi', leg: 'Representação moderna do Inti Raymi em Sacsayhuamán' },
  { h: '8. Agricultura e engenharia' },
  'Os Andes são uma terra difícil, e os agricultores aprenderam a usá-los. Os **terraços** (*andenes*) permitiam cultivar encostas íngremes, retinham a terra e a água e corrigiam o clima. Os canais levavam a água ao longo de quilómetros. As ferramentas eram a **taclla** (um arado de pé) e a enxada; não havia ferro. Em **Moray**, no Vale Sagrado, há grandes depressões circulares com terraços, onde a temperatura varia muito entre o fundo e o topo; a hipótese de que servissem como «laboratório» de adaptação das plantas é popular mas não provada.',
  { img: 'inc-moray', leg: 'Terraços circulares de Moray' },
  { h: '9. Construção em pedra' },
  'Os Incas são famosos pelos seus muros de **pedras talhadas e encaixadas sem argamassa**, de modo que nem uma lâmina passa entre as juntas. Os blocos, de andesito, calcário ou diorito, eram talhados com pedras duras (martelos de pedra) e polidos com areia. Como se transportavam e se erguiam é matéria de debate: rampas, cordas, rolos de madeira e muitos homens. Os edifícios tinham portas e nichos **trapezoidais**, paredes ligeiramente inclinadas para dentro e cantos ligados, o que dá estabilidade nos sismos. A famosa **pedra dos doze ângulos**, na rua Hatunrumiyoc, em Cusco, é um exemplo desse trabalho. Não era magia nem tecnologia perdida: foi o fruto de trabalho organizado, ferramentas simples e muita experiência.',
  { img: 'inc-pedra-doze-angulos', leg: 'Pedra dos doze ângulos, Cusco' },
  { h: '10. O quipu: contar e, talvez, escrever' },
  'Os Incas não tinham escrita alfabética conhecida. Usavam o **quipu** (*khipu*, «nó»), um conjunto de cordas de algodão ou de lã penduradas de uma corda principal, com **nós** de vários tipos e cores. Os nós em grupos registavam números num **sistema decimal posicional** (unidades, dezenas, centenas), e os especialistas, os **quipucamayocs**, usavam-nos para contar pessoas, produtos, armazéns e impostos. Conhecem-se mais de mil quipus, a maioria em museus. A questão mais debatida: **os quipus também registam palavras ou histórias?** Os cronistas espanhóis diziam que os quipus guardavam história e leis, e o investigador **Gary Urton** (Harvard) defende que o seu sistema de cores, de fios e de nós funcionava como um código binário com muita informação. Em 2017, **Sabine Hyland** propôs que alguns quipus (de época colonial) da aldeia de Collata, no Peru, registam nomes de linhagens de modo fonético, uma leitura ainda discutida. Nenhum quipu narrativo foi decifrado, e a questão continua em aberto.',
  { img: 'inc-quipu', leg: 'Quipu inca: cordas e nós' },
  { h: '11. Medicina e conhecimento' },
  'A medicina inca juntava a observação prática e o ritual. Usavam plantas (coca, para as dores e a fadiga em altitude), massagens, sangrias e **cirurgias**. A mais famosa é a **trepanação**: abria-se um orifício no crânio, com um cinzel ou uma faca de pedra ou de bronze (*tumi*), para tratar lesões de guerra ou, possivelmente, dores de cabeça ou sinais religiosos. Estudos de crânios do tempo inca (de **John Verano**) indicam que a **maioria dos doentes sobrevivia**, com uma taxa de sobrevivência que terá chegado a cerca de 75 a 80 por cento, bastante superior à de períodos anteriores nos Andes. Os **callawayas**, médicos itinerantes do sul dos Andes, mantêm-se hoje como uma tradição classificada pela UNESCO (2008).',
  { img: 'inc-trepanacao', leg: 'Crânio trepanado de Chaquil, Soloco, Chachapoyas, Peru.' },
  { h: '12. Mensagens e estradas: os chasquis' },
  'O império só funcionava porque as **mensagens** chegavam depressa. Os **chasquis**, corredores treinados, estavam colocados em postos ao longo das estradas, e passavam a mensagem de um ao seguinte, em estafeta, por palavra ou por quipu. Segundo os cronistas, levavam notícias de Quito a Cusco em poucos dias (mais provavelmente cerca de uma semana ou mais) e podiam trazer peixe fresco da costa à mesa do Inca. Não eram cavaleiros: o império não tinha cavalos.',
  { img: 'inc-chasqui', leg: 'Chasqui numa estrada de montanha. Ilustração gerada por IA.' },
  { h: '13. Guerra' },
  'O exército, de recrutas tirados das comunidades pela mit’a e comandado por nobres de Cusco, era numeroso e bem abastecido, graças às estradas e aos armazéns. As armas eram **fundas**, **maças** de pedra ou bronze, lanças, boleadoras e machados, com escudos de madeira e armaduras acolchoadas de algodão. Os Incas preferiam conquistar por **diplomacia, presentes e ameaça**, e só usavam a força quando necessário. Quem resistia era por vezes deslocado para longe (mitmaqs), e os seus deuses locais eram levados para Cusco como «reféns». Contra os espanhóis, em 1532, essas armas eram pouco eficazes: o aço, os cavalos, as armas de fogo e as epidemias fizeram a diferença, e os espanhóis também contaram com o apoio de muitos povos indígenas, cansados do domínio inca.'
];

const personalidades = [
  'As figuras incas chegam-nos através de relatos orais e de cronistas espanhóis, e nem todas as datas e histórias são seguras. As que se seguem são reais, e o que é lenda ou tradição está assinalado.',
  { h: 'Manco Cápac (lendário)' },
  'O primeiro Inca, segundo a tradição, fundador de Cusco e filho do Sol. É uma figura de **mito de origem**, e não há certeza de que tenha existido como pessoa. A história da sua saída do lago Titicaca (ou de Pacaritambo) tem várias versões.',
  { h: 'Pachacútec Inca Yupanqui (reinou c. 1438 – 1471)' },
  'O fundador do império, tradicionalmente. Venceu os chancas, reconstruiu Cusco, mandou construir Machu Picchu e organizou o Tawantinsuyu e o seu sistema de tributo e de estradas. O nome significa «o que muda o mundo». Os historiadores discutem quanto lhe cabe a ele e quanto aos seus sucessores e antecessores, mas é uma figura central.',
  { img: 'inc-pachacutec', leg: 'Estátua de Pachacútec em Aguas Calientes' },
  { h: 'Túpac Inca Yupanqui (reinou c. 1471 – 1493)' },
  'Filho de Pachacútec. Comandou muitas das campanhas, conquistou o reino Chimú e levou o império ao Equador, ao Chile e à Bolívia. Teria sido também um grande administrador.',
  { h: 'Huayna Cápac (reinou c. 1493 – 1527)' },
  'Filho de Túpac Inca. Reinou durante a maior extensão do império e passou longos anos no norte, em campanha. Morreu c. 1527 de uma doença (talvez a varíola, o que é debatido), sem ter resolvido a sucessão, abrindo o caminho à guerra civil.',
  { h: 'Huáscar (reinou c. 1527 – 1532)' },
  'Filho de Huayna Cápac, Inca em Cusco. Perdeu a guerra civil contra o meio-irmão e foi capturado. Foi morto, segundo a tradição por ordem de Atahualpa durante o cativeiro deste, em 1532 ou 1533.',
  { h: 'Atahualpa (c. 1500 – 1533)' },
  'Filho de Huayna Cápac, ligado ao norte do império (Quito); o local de nascimento é debatido. Derrotou o irmão na guerra civil e era Inca de facto quando encontrou Pizarro em Cajamarca, em novembro de 1532. Capturado, ofereceu um resgate em ouro e prata, mas foi executado a 26 de julho de 1533. Era um comandante hábil, e a sua captura foi mais uma emboscada bem planeada do que uma prova de «ingenuidade».',
  { img: 'inc-guaman-poma-atahualpa', leg: 'Atahualpa em Cajamarca, desenho de Guaman Poma na Nueva corónica, c. 1615.' },
  { img: 'inc-montero-atahualpa', leg: 'Os Funerais de Atahualpa, Luis Montero, 1867' },
  { h: 'Francisco Pizarro (c. 1478 – 1541)' },
  'Conquistador espanhol, nascido em Trujillo, na Estremadura, de família modesta. Liderou a expedição que capturou Atahualpa e fundou Lima em 1535. Foi assassinado em Lima, em 1541, por partidários de Diego de Almagro, o seu antigo sócio, com quem se desentendeu pela posse de Cusco.',
  { h: 'Manco Inca (c. 1515 – 1544)' },
  'Filho de Huayna Cápac, instalado pelos espanhóis como Inca fantoche em 1533. Em 1536 revoltou-se, cercou Cusco e retirou-se para Vilcabamba, onde fundou o Estado neo-inca. Foi morto por espanhóis a quem tinha dado abrigo.',
  { img: 'inc-manco-inca', leg: 'Retrato imaginado de Manco Inca, c. 1536. Ilustração gerada por IA.' },
  { h: 'Túpac Amaru I (c. 1545 – 1572)' },
  'O último Inca de Vilcabamba. Capturado em 1572 pelos homens do vice-rei Toledo, foi condenado à morte, apesar do protesto de muitos espanhóis, e decapitado na praça de Cusco. Marca o fim da linhagem real inca.',
  { h: 'Mama Ocllo e as mulheres da casa real' },
  'As mulheres incas não ocupavam o trono, mas as **qoyas** (rainhas) e as mamakunas tinham grande prestígio, e a descendência dava a legitimidade. A figura de **Mama Ocllo**, como mulher e irmã de Manco Cápac, pertence à lenda. Mulheres nobres reais conhecidas, como **Chimpu Ocllo** (Isabel), mãe do Inca Garcilaso, e **Cuxirimay Ocllo** (esposa do cronista Juan de Betanzos) contribuíram para guardar a memória inca durante a conquista.',
  { h: 'Inca Garcilaso de la Vega (1539 – 1616)' },
  'Nascido em Cusco, filho de um capitão espanhol e de uma princesa inca, **Chimpu Ocllo**. Mudou-se para Espanha por volta dos 21 anos (c. 1560–61) e escreveu os *Comentarios Reales de los Incas* (1609), a obra mais famosa sobre a cultura inca. É uma fonte preciosa, mas escrita de memória, com um olhar idealizado e a distância de décadas, e deve ser lida com cuidado.',
  { h: 'Felipe Guaman Poma de Ayala (c. 1535 – c. 1616)' },
  'Nobre indígena que escreveu e ilustrou, c. 1615, uma carta de mais de mil páginas ao rei Filipe III, a *Nueva corónica y buen gobierno*, onde descreve a vida inca e denuncia os abusos coloniais. Os seus 400 desenhos são a melhor fonte visual sobre os Incas. O manuscrito encontra-se na Biblioteca Real de Copenhaga.',
  { h: 'Hiram Bingham III (1875 – 1956)' },
  'Professor de Yale e explorador. A 24 de julho de 1911, guiado por camponeses locais, chegou a Machu Picchu e tornou-a mundialmente conhecida com as suas fotografias e escavações (1912 e 1914–15). Levou milhares de objetos para Yale, que só foram devolvidos ao Peru no começo do século XXI. Cometeu erros: julgou que era Vilcabamba, e a sua fama escondeu, durante muito tempo, os que já conheciam o local.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**A batata e outras plantas:** a batata chegou à Europa no século XVI e mudou a alimentação do mundo. O milho andino, a quinoa, o tomate (com origem na América), o pimento e a coca vêm do mesmo mundo agrícola.',
    '**Engenharia:** muitas das estradas, terraços e canais ainda se usam, e a ponte de Q’eswachaka mantém-se. Os muros incas de Cusco resistiram a sismos que derrubaram edifícios coloniais.',
    '**Organização:** o modelo de Estado baseado em trabalho obrigatório, redistribuição e armazéns é uma das grandes experiências de administração da história.',
    '**Língua:** o quíchua, falado por milhões de pessoas, e palavras que vieram para o português e para outras línguas: *puma*, *condor*, *lama*, *pampa*, *guano*, *charque*, *quinoa*, *coca*, *mate*.',
    '**Tradições vivas:** a reciprocidade (*ayni*), o culto da Pachamama, os têxteis e a música andina, as festas como o Inti Raymi e o Qoyllur Rit’i.',
    '**Memória e identidade:** os Incas são símbolo do orgulho indígena em países como o Peru e a Bolívia, e o nome de Túpac Amaru foi usado em rebeliões até hoje.'
  ] },
  { h: 'Arte' },
  'A arte inca foi sobretudo **funcional e geométrica**: cerâmica (como o **aríbalo**, jarra de bico longo para chicha), **têxteis** de padrões complexos, **vasos de madeira** pintada (*keros*, copos cerimoniais), pequenas figuras de ouro, prata e conchas. Não houve uma grande escultura em pedra como no Egito. Os ourives incas trabalhavam o ouro e a prata com grande mestria, mas quase tudo foi fundido pelos espanhóis, e os poucos objetos que sobraram vêm de túmulos e de oferendas.',
  { h: 'Arquitetura' },
  'A arquitetura inca é simples e monumental: formas retangulares, trapézios, cantaria perfeita, edifícios que dialogam com a paisagem. Os arquitetos escolhiam o local pela sua carga sagrada, e usavam rochas e montanhas na composição. Depois da conquista, os espanhóis aproveitaram os muros incas como base de igrejas e casas, e a combinação dos dois é visível em Cusco, onde as igrejas têm alicerces incas.',
  { h: 'A redescoberta dos Incas' },
  'Os espanhóis destruíram muito, mas nunca esqueceram. Os cronistas do século XVI, como **Cieza de León**, **Betanzos**, **Cobo** e o **Inca Garcilaso**, deixaram relatos valiosos. Em 1911, **Hiram Bingham** deu a conhecer Machu Picchu ao mundo: a *National Geographic* dedicou-lhe um número inteiro em 1913. Os arqueólogos do século XX e XXI, como **John Rowe**, que estabeleceu a cronologia, e outros, continuaram o trabalho, e novas descobertas (como os estudos de radiocarbono de 2021) mudam ainda o que se sabe.',
  { img: 'inc-bingham', leg: 'Hiram Bingham junto à tenda da expedição em Machu Picchu, 1912; fotografia de Ellwood C. Erdis.' },
  { img: 'inc-garcilaso', leg: 'Retrato imaginado do Inca Garcilaso de la Vega, gravura de Carlos Penoso, 1879.' },
  { h: 'O quíchua hoje' },
  'O quíchua é a língua nativa mais falada da América, por 7 a 10 milhões de pessoas no Peru, na Bolívia, no Equador (onde se chama *kichwa*), na Colômbia, no Chile e na Argentina. Tem várias variantes, e é língua oficial no Peru desde 1975. A bandeira de sete cores que se vê em Cusco, muitas vezes chamada «bandeira inca», é uma criação **moderna** e não existiu no tempo dos Incas.',
  { img: 'inc-quechua-hoje', leg: 'Mulheres quíchuas a tecer em Ollantaytambo, Vale Sagrado.' },
  { caixa: 'Para visitar', texto: 'Em **Cusco**, o **Coricancha** e o **Museu Inka**; em redor, o **Vale Sagrado** (Pisac, Ollantaytambo, Moray) e **Sacsayhuamán**. **Machu Picchu** tem entradas limitadas por dia, com horários e circuitos definidos, e convém reservar com muita antecedência e confirmar as regras antes de ir. Fora do Peru, vale a pena ver o **Museo de Arqueología de Alta Montaña**, em Salta (Argentina), com as crianças de Llullaillaco, o **Museo Larco**, em Lima, e o **Museo Machu Picchu** (Casa Concha) em Cusco, com peças devolvidas por Yale. Na Europa há coleções incas no Museu Britânico e no Museu Etnológico de Berlim.' }
];

const quiz = [
  { p: 'Como se chamava o império dos Incas na sua língua?', op: ['Tawantinsuyu', 'Qosqo', 'Pachamama', 'Runasimi'], certa: 0, exp: 'Tawantinsuyu quer dizer «as quatro partes (juntas)», ou seja, os quatro suyus.' },
  { p: 'Qual era a capital do império inca?', op: ['Quito', 'Cusco', 'Cajamarca', 'Lima'], certa: 1, exp: 'Cusco, a cerca de 3400 m de altitude, era o «umbigo do mundo»; Quito foi capital secundária.' },
  { p: 'Quem tradicionalmente iniciou a expansão do império após derrotar os chancas, c. 1438?', op: ['Manco Cápac', 'Atahualpa', 'Pachacútec', 'Huáscar'], certa: 2, exp: 'Cusi Yupanqui tomou o nome de Pachacútec, «o que muda o mundo», depois de vencer os chancas.' },
  { p: 'Para que servia, em essência, o quipu?', op: ['Para pintar murais', 'Para contar e registar informação com cordas e nós', 'Para tocar música', 'Para medir distâncias'], certa: 1, exp: 'Era um sistema de cordas com nós; regista números em base decimal, e ainda se debate se também regista palavras.' },
  { p: 'O que era a mit’a?', op: ['Uma moeda de ouro', 'Um deus da chuva', 'Um turno de trabalho devido ao Estado', 'Uma estrada'], certa: 2, exp: 'A mit’a era um imposto pago em trabalho rotativo, em troca de comida, bebida e proteção.' },
  { p: 'Quem disputou o trono na guerra civil inca de c. 1529–1532?', op: ['Manco Inca e Túpac Amaru', 'Huáscar e Atahualpa', 'Pachacútec e Viracocha', 'Pizarro e Almagro'], certa: 1, exp: 'Os dois filhos de Huayna Cápac: Huáscar (Cusco) e Atahualpa (Quito).' },
  { p: 'Onde foi capturado Atahualpa, a 16 de novembro de 1532?', op: ['Em Cusco', 'Em Machu Picchu', 'Em Cajamarca', 'Em Quito'], certa: 2, exp: 'Em Cajamarca, no norte do Peru, por Francisco Pizarro e cerca de 168 espanhóis.' },
  { p: 'Quando foi executado Atahualpa?', op: ['26 de julho de 1533', '16 de novembro de 1532', '24 de setembro de 1572', '24 de julho de 1911'], certa: 0, exp: 'Foi estrangulado a 26 de julho de 1533, depois de aceitar o batismo.' },
  { p: 'Quem construiu, em c. 1450, a propriedade real de Machu Picchu?', op: ['Atahualpa', 'Pachacútec', 'Francisco Pizarro', 'Manco Inca'], certa: 1, exp: 'Foi uma propriedade do Inca Pachacútec; estudos de 2021 apontam ocupação desde c. 1420.' },
  { p: 'Quem deu Machu Picchu a conhecer ao mundo em 1911?', op: ['Francisco Pizarro', 'Gene Savoy', 'Hiram Bingham', 'Inca Garcilaso'], certa: 2, exp: 'Hiram Bingham, de Yale, chegou a 24 de julho de 1911 guiado por camponeses locais, que já conheciam o sítio.' },
  { p: 'Como se chamava a rede de estradas inca?', op: ['Qhapaq Ñan', 'Tambo Pampa', 'Ayllu', 'Chasqui'], certa: 0, exp: 'Qhapaq Ñan, «o caminho principal», com cerca de 30 000 km, foi inscrita pela UNESCO em 2014.' },
  { p: 'Que técnica os Incas usavam nos seus muros de pedra?', op: ['Argamassa de cal', 'Cantaria encaixada sem argamassa', 'Tijolo cozido', 'Betão romano'], certa: 1, exp: 'Os blocos eram talhados e encaixados com tal precisão que não precisavam de argamassa.' },
  { p: 'Qual era o deus oficial do Estado inca, antepassado dos soberanos?', op: ['Pachamama', 'Illapa', 'Inti, o Sol', 'Supay'], certa: 2, exp: 'Inti, o Sol, era o deus do Estado e antepassado da família real; o seu templo era o Coricancha.' },
  { p: 'Quando caiu o último Estado inca, o de Vilcabamba?', op: ['1533', '1536', '1572', '1780'], certa: 2, exp: 'Em 1572 foi capturado Túpac Amaru I, e executado em Cusco por ordem do vice-rei Toledo.' },
  { p: 'Qual destas afirmações é um mito?', op: ['Os Incas usavam o quipu', 'Machu Picchu era uma cidade «perdida», desconhecida de todos', 'O quíchua é falado ainda hoje', 'Os Incas cultivavam a batata em terraços'], certa: 1, exp: 'Camponeses locais conheciam Machu Picchu muito antes de Bingham chegar lá em 1911.' }
];

export default {
  id: 'incas',
  cor: '#a8553a',
  emblema: '../assets/img/incas.png',
  nome:    { pt: 'Incas', en: 'Incas' },
  periodo: { pt: '1438 – 1533', en: 'AD 1438 – 1533' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
