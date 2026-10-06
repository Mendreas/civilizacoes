// INCAS — full English content. Same structure and same image slots as the Portuguese version (dados.js).
// Dates are approximate. For the Incas, the reign dates (1438, 1471, 1493, 1527) come mostly from Spanish chroniclers and are “traditional”: archaeology suggests the Inca state is somewhat older and that the dates are only indicative. BC = before Christ.

const visao = [
  { caixa: 'In brief', texto: [
    'The **Incas** built the largest empire in the Americas before Columbus and one of the largest in the world of their time. In under a hundred years (c. AD 1438 – 1533), from a small lordship around **Cusco** in the Peruvian Andes, they extended their rule over about 4,000 km, from southern Colombia to central Chile, over a population of perhaps ten million people. They called it **Tawantinsuyu**, “the four parts (together)”.',
    'They did it without money, without alphabetic writing, without iron, without the wheel for transport and without draught animals. Instead they had a state that organised labour in turns (the **mit’a**), full storehouses, a **road** network of about 30,000 km, a system of knotted cords, the **quipu**, for counting and (perhaps) recording more than numbers, and stone architecture so well fitted that it still withstands earthquakes. The empire was overthrown in a few years, in 1532–33, by a combination of civil war, epidemics and the arrival of the Spaniards of **Francisco Pizarro**. But the last Inca state held out in Vilcabamba until 1572.'
  ] },
  { img: 'inc-mapa-tawantinsuyu', leg: 'Map of the Inca Empire and its four suyus' },
  { h: 'Where it was' },
  'The empire stretched along the **Andes**, a narrow mountain band between the Pacific and the Amazon rainforest, and covered the territory of present-day **Peru**, almost all of **Ecuador**, western **Bolivia**, northern **Chile** and north-western **Argentina**, and southern **Colombia**. The capital, **Cusco**, at about 3,400 m above sea level, lay in the south of today’s Peru. It was a world of great contrasts: coastal deserts, fertile valleys, icy high plains, humid forests. Governing that diversity, in which people lived from very different things depending on altitude, was the Incas’ great challenge and the key to their organisation.',
  'The name **Inca** strictly meant the **ruler** (the *Sapa Inca*, “the unique Inca”) and the elite of the Cusco family. Historians also use it for the people and the state. Ordinary people called themselves by the name of their **ayllu** or their province. The official language of the empire was **Quechua** (*runasimi*, “the speech of the people”), which the Incas spread far beyond Cusco.',
  { img: 'inc-machu-picchu', leg: 'Machu Picchu with Huayna Picchu, Peru' },
  { h: 'When it existed' },
  'The Inca Empire is very recent compared with Egypt or Mesopotamia, and it is one of the few ancient civilisations that Europeans actually saw “in operation”. But beware: the dates of the Inca reigns come from oral accounts recorded by Spaniards after the conquest, and none is secure. The ones used here are the “traditional” ones.',
  { tabela: { cab: ['Phase', 'Approximate dates', 'What marks it'], linhas: [
    ['Early Andean cultures', 'c. 3000 BC – AD 1200', 'Caral, Chavín, Paracas and Nazca, Moche, Tiwanaku, Wari, Chimú: the cultural background of the Incas'],
    ['Lordship of Cusco', 'c. 1200 – 1438', 'A small local kingdom of Cusco, in conflict with its neighbours; kings partly legendary (Manco Cápac, Sinchi Roca, etc.)'],
    ['Pachacuti and the expansion', 'c. 1438 – 1471', 'Victory over the Chancas; rebuilding of Cusco; conquest of the central Andes; creation of Tawantinsuyu'],
    ['Topa Inca Yupanqui', 'c. 1471 – 1493', 'Fall of the Chimú kingdom; advance into Ecuador, southern Chile and the Amazon'],
    ['Huayna Cápac', 'c. 1493 – 1527', 'Greatest extent of the empire; epidemics; Quito becomes a secondary capital'],
    ['Civil war', 'c. 1527 – 1532', 'Huáscar against Atahualpa for the throne'],
    ['Spanish conquest', '1532 – 1533', 'Cajamarca; execution of Atahualpa; Pizarro enters Cusco'],
    ['Neo-Inca state of Vilcabamba', 'c. 1537 – 1572', 'Manco Inca and his successors resist in the jungle until the capture of Túpac Amaru I']
  ] } },
  { img: 'inc-mapa-antecedentes', leg: 'Map of Wari and Tiwanaku expansion, pre-Inca Andean states.' },
  { h: 'Who were the Incas?' },
  'The Incas spoke Quechua and, according to tradition, had lived since the 12th century in the Cusco valley. They were not the “inventors” of Andean techniques: farming terraces, canals, roads, textiles, metallurgy, calendars, the idea of reciprocity between communities, all of this came from earlier cultures, which the Incas knew how to **gather, expand and put at the service of a state**. It was this capacity for organisation, more than invention, that set them apart. Nor were they a uniform people: the empire brought together dozens of peoples with different languages and customs (Aymara, Chancas, Chimús, Cañaris, among others), some conquered by force, others by alliance and diplomacy.',
  { h: 'Why they matter' },
  { lista: [
    '**Organisation without money:** they governed millions of people with taxes paid in labour, state storehouses and redistribution, without money or state-run markets like those of other civilisations.',
    '**Andean engineering:** roads (*Qhapaq Ñan*), rope bridges, farming terraces, canals and stone walls that survive earthquakes.',
    '**Record-keeping without alphabetic writing:** the quipu is a unique system, and it is still debated whether it contains more than numbers.',
    '**Agriculture:** they domesticated, or perfected, the potato, Andean maize, quinoa and hundreds of other plants. The potato now feeds billions of people.',
    '**A meeting of two worlds:** the conquest of Peru was one of the decisive moments in the colonial history of the Americas and the world.'
  ] },
  { caixa: 'The Incas today', texto: 'The descendants of the peoples of Tawantinsuyu are today millions of people in Peru, Bolivia and Ecuador. **Quechua** is spoken by about 7 to 10 million people, and the customs of reciprocity (*ayni*), the veneration of **Pachamama** (Mother Earth) and Andean farming techniques remain alive. **Cusco** and **Machu Picchu** are UNESCO World Heritage Sites (1983), and the **Qhapaq Ñan** road network was inscribed in 2014 by six countries: Argentina, Bolivia, Chile, Colombia, Ecuador and Peru.' },
  { caixa: 'Myths to avoid', texto: [
    '**“Machu Picchu was a lost city”:** it was not forgotten. Local farmers knew it and cultivated its terraces; Hiram Bingham reached it in 1911, guided by a local resident, and made it known to the world.',
    '**“The Incas thought the Spaniards were gods”:** this is a myth constructed later. There are signs that some called them *wiraqocha* (a term of respect), but Atahualpa and his court made perfectly rational political and military decisions.',
    '**“It was a communist society or a paradise without hunger”:** it was a state with classes, with compulsory tribute in labour and with violence, even if organised with great efficiency.'
  ] }
];

const linha = [
  'This timeline follows the main events in the history of the Incas and of the cultures that preceded them. The dates of the Inca reigns are the “traditional” ones (from the chroniclers); the earliest are the most uncertain.',
  { linha: [
    { d: 'c. 2600 BC', t: 'Caral, one of the oldest cities in the Americas', x: 'In the Supe valley, on the coast of Peru, a society arises with monumental buildings, stone pyramids and plazas, before pottery and with few signs of warfare. It is the distant base of Andean civilisation. It became known mainly from the 1990s and 2000s (the radiocarbon dating published in 2001 was decisive), and the Peruvian archaeologist **Ruth Shady** led the excavations.' },
    { d: 'c. 900 – 200 BC', t: 'Chavín de Huántar', x: 'The ceremonial centre of **Chavín**, in the mountains of northern Peru, spreads over a vast region an art of felines, serpents and birds and a pilgrimage cult. Archaeologists call it the first cultural “horizon” of the Andes. Inside stood the **Lanzón**, a granite stela carved with a fanged figure.' },
  ] },
  { img: 'inc-chavin-lanzon', leg: 'Lanzón monolith at Chavín de Huántar' },
  { linha: [
    { d: 'c. 500 BC – AD 500', t: 'Paracas and Nazca', x: 'In the desert of southern Peru, the Nazca draw on the ground the famous **Nazca lines**, figures of animals and lines many kilometres long. They make polychrome pottery and underground water channels, the *puquios*. The Paracas, who preceded them, produced extraordinary textiles.' },
  ] },
  { img: 'inc-nazca-colibri', leg: 'Nazca hummingbird geoglyph' },
  { linha: [
    { d: 'c. AD 100 – 700', t: 'The Moche', x: 'On the northern coast of Peru, the Moche build adobe pyramids (**Huaca del Sol and Huaca de la Luna**), model vessels with realistic portraits and make gold and silver jewellery. The tomb of the **Lord of Sipán** (discovered in 1987) is one of the richest finds in American archaeology.' },
  ] },
  { img: 'inc-moche-vaso', leg: 'Moche portrait vessel, Museo Larco, Lima' },
  { linha: [
    { d: 'c. AD 500 – 1000', t: 'Tiwanaku', x: 'Beside **Lake Titicaca**, the city of **Tiwanaku** (today in Bolivia) raises stone temples, such as the Gate of the Sun, and dominates the high plain with raised-field agriculture. Its religion and art influence the whole region, including, later, the Incas.' },
  ] },
  { img: 'inc-tiwanaku-sol', leg: 'Gate of the Sun, Tiwanaku, Bolivia' },
  { linha: [
    { d: 'c. AD 600 – 1000', t: 'The Wari empire', x: 'From **Huari** (Ayacucho), the Wari organise the first expansionist state of the central Andes, with roads, administrative centres (such as Pikillacta, near Cusco) and terraces. Many of the ideas of administration and roads that the Incas used seem to come from them.' },
    { d: 'c. AD 900 – 1470', t: 'The Chimú kingdom', x: 'On the northern coast, the **Chimús** found the largest kingdom in Peru before the Incas, with its capital at **Chan Chan**, an enormous adobe city with walls decorated in relief. They were first-rate goldsmiths and hydraulic engineers.' },
  ] },
  { img: 'inc-chan-chan', leg: 'Decorated adobe walls at Chan Chan, Peru' },
  { linha: [
    { d: 'c. 1200 (tradition)', t: 'Manco Cápac and the founding of Cusco', x: 'According to legend, **Manco Cápac** and his sister and wife **Mama Ocllo**, children of the Sun (Inti), came out of Lake Titicaca or from a cave at Pacaritambo, and founded Cusco at the spot where a golden staff sank into the earth. It is an **origin myth** and not a historical fact, but it served to justify the royal family’s power. Cusco probably existed as a settlement by the 12th or 13th century.' },
  ] },
  { img: 'inc-manco-capac', leg: 'Manco Cápac and Mama Ocllo, legendary Inca founders. AI-generated illustration.' },
  { linha: [
    { d: 'c. 1200 – 1438', t: 'The lordship of Cusco', x: 'For two centuries Cusco is a small kingdom among many. Tradition gives it successive kings (Sinchi Roca, Lloque Yupanqui, Mayta Cápac, Inca Roca, among others), but their names and dates are uncertain, and historians debate how much is history and how much legend. The Incas widen their domain through marriages, alliances and some wars in the valley.' },
    { d: 'c. 1438', t: 'The war against the Chancas and Pachacuti', x: 'The **Chancas**, a rival people from Andahuaylas, attack Cusco. According to tradition, the reigning Inca, **Viracocha**, flees, and his son **Cusi Yupanqui** defends the city and wins. He then takes the name **Pachacuti** (“he who transforms the world”) and begins the expansion. Archaeologists debate the date and how much of the story is legend, but the victory over the Chancas traditionally marks the start of the empire.' },
  ] },
  { img: 'inc-expansao-chanca', leg: 'Imagined battle between Incas and Chancas, c. 1438. AI-generated illustration.' },
  { linha: [
    { d: 'c. 1440 – 1470', t: 'The creation of Tawantinsuyu', x: 'Pachacuti and his son conquer the region from Cusco to Lake Titicaca, the Mantaro valley and the central Andes. He rebuilds Cusco as the sacred capital, founds the **Coricancha**, organises the empire into four parts (suyus) and creates the system of labour tribute, roads and storehouses.' },
    { d: 'c. 1450', t: 'Machu Picchu', x: 'A royal estate of Pachacuti is built on a mountain ridge above the Urubamba river. Radiocarbon studies from 2021 indicate that the site was already occupied around **1420**, earlier than was thought. It served as a residence, a ceremonial centre and an agricultural unit for the royal family.' },
    { d: 'c. 1470', t: 'The fall of the Chimú kingdom', x: 'Prince **Topa Inca Yupanqui** conquers the Chimú kingdom, the last great rival on the northern coast, and takes goldsmiths and craftsmen to Cusco.' },
    { d: 'c. 1471 – 1493', t: 'Topa Inca Yupanqui reigns', x: 'As Inca, he advances north (Ecuador), south (as far as the Maule river in Chile, where he faces the Mapuche) and into the Amazon. According to tradition, he is the one who widened the empire the most.' },
    { d: 'c. 1493 – 1527', t: 'Huayna Cápac', x: 'He reigns during the empire’s greatest extent. He spends years in the north, in Ecuador, where he makes **Quito** a secondary capital. His son **Atahualpa** was linked to the north (his birthplace is debated), while in Cusco his son **Huáscar** remained.' },
    { d: 'c. 1524 – 1528', t: 'Epidemics and first contacts', x: 'Diseases brought from Europe (probably smallpox, though this is debated) spread across the Americas even before the conquistadors, and kill many people in the Andes. In 1526–28, on his second expedition, Pizarro explores the northern coast of Peru and reaches an Inca town (Tumbes).' },
    { d: 'c. 1527', t: 'Death of Huayna Cápac', x: 'The Inca dies in the north of the empire (at Quito or Tumipampa, according to the sources) of an illness, along with his designated heir (Ninan Cuyuchi), according to tradition. He left no clear successor, and the succession was left open.' },
    { d: 'c. 1529 – 1532', t: 'The civil war', x: '**Huáscar**, in Cusco, and **Atahualpa**, in Quito, dispute the throne. Atahualpa’s generals (**Quisquis** and **Chalcuchímac**) advance south and win in 1532, near Cusco; **Huáscar** is captured.' },
    { d: '16 November 1532', t: 'Cajamarca', x: 'Atahualpa, on his way to Cusco, meets **Francisco Pizarro** and about 168 Spaniards at **Cajamarca**. The Spaniards attack by surprise, kill thousands of the Inca’s attendants (with practically no losses) and capture him.' },
  ] },
  { img: 'inc-cajamarca', leg: 'Cajamarca, 16 November 1532, before the attack on Atahualpa. AI-generated illustration.' },
  { linha: [
    { d: '1532 – 1533', t: 'The ransom and execution of Atahualpa', x: 'Atahualpa offers to fill a room with gold (and two with silver) in exchange for his freedom, and the Incas bring, by estimate, about six tonnes of gold and twelve of silver, which the Spaniards melt down. Even so, Atahualpa is tried and executed on **26 July 1533**. According to tradition, the Inca accepts baptism to escape burning, and is strangled.' },
    { d: '15 November 1533', t: 'Pizarro enters Cusco', x: 'The Spaniards and their indigenous allies, enemies of Cusco, occupy the capital. They install **Manco Inca**, half-brother of Huáscar, as a puppet Inca, instead of his rival.' },
    { d: '1536 – 1537', t: 'The revolt of Manco Inca', x: 'Manco Inca rebels, besieges Cusco for months (the fighting centres on the fortress of **Sacsayhuamán**), and defeats the Spaniards at **Ollantaytambo** in early 1537. Unable to take Cusco, he withdraws to the mountains of **Vilcabamba**.' },
    { d: 'c. 1537 – 1572', t: 'The neo-Inca state of Vilcabamba', x: 'Manco Inca and his sons **Sayri Túpac**, **Titu Cusi** and **Túpac Amaru** govern a small Inca court in the jungle for thirty-five years. Manco is murdered in 1544 by Spaniards he had taken in as refugees.' },
    { d: '1572', t: 'The end: Túpac Amaru I', x: 'The viceroy **Francisco de Toledo** sends an expedition against Vilcabamba. **Túpac Amaru I** is captured and beheaded in Cusco on 24 September 1572. It is the end of the reigning Inca dynasty.' },
    { d: '1780', t: 'Túpac Amaru II', x: 'José Gabriel Condorcanqui, who claimed descent from the Incas, takes the name Túpac Amaru and leads a great rebellion against the Spanish authorities. He is executed in 1781. The Inca memory becomes a symbol of resistance.' },
    { d: '1911', t: 'Hiram Bingham at Machu Picchu', x: 'The American explorer **Hiram Bingham III**, of Yale, reaches Machu Picchu on 24 July 1911, guided by local farmers. His photographs in *National Geographic* make the site world-famous.' },
    { d: '1983', t: 'World Heritage', x: 'Cusco and Machu Picchu are listed by UNESCO. In 2014, so is the **Qhapaq Ñan** road network.' }
  ] }
];

const mapa = [
  'The empire of the Incas was organised around **Cusco**, the “navel of the world” (*qosqo* means “navel” in Quechua), and four great regions, the **suyus**, which radiated from the main square. Hence the name Tawantinsuyu.',
  { tabela: { cab: ['Suyu', 'Direction', 'Territory (approx.)', 'Notes'], linhas: [
    ['Chinchaysuyu', 'North-west', 'Coast and highlands of central and northern Peru; Ecuador; southern Colombia', 'The largest and most populous; included the Chimú kingdom and Quito'],
    ['Antisuyu', 'North-east', 'Eastern slopes of the Andes and the Amazon', 'Jungle and coca region; Machu Picchu lies in this direction'],
    ['Collasuyu', 'South-east', 'Titicaca high plain, Bolivia, northern Chile and north-west Argentina', 'The largest in area; silver and tin'],
    ['Cuntisuyu', 'South-west', 'Southern coast of Peru and Arequipa', 'The smallest of the four']
  ] } },
  { tabela: { cab: ['Place', 'Where', 'What it is known for'], linhas: [
    ['Cusco', 'Peru, 3,400 m', 'Capital; Coricancha, the Huacaypata plaza, the centre of the roads'],
    ['Sacsayhuamán', 'Near Cusco', 'Fortress-temple of giant stones; scene of the 1536 battle'],
    ['Ollantaytambo', 'Sacred Valley, Peru', 'Inca fortress and town; Manco Inca’s victory in 1537'],
    ['Pisac', 'Sacred Valley, Peru', 'Terraces, observatory and market; royal estate'],
    ['Machu Picchu', 'Urubamba valley, Peru', 'Royal estate of Pachacuti, c. 1450'],
    ['Moray', 'Sacred Valley, Peru', 'Circular terraces, a possible agricultural laboratory'],
    ['Cajamarca', 'Northern Peru', 'Where Atahualpa was captured in 1532'],
    ['Quito', 'Ecuador', 'Secondary capital of Huayna Cápac'],
    ['Pachacámac', 'Coast near Lima, Peru', 'Great coastal sanctuary and oracle, annexed by the Incas'],
    ['Huánuco Pampa', 'Central Andes, Peru', 'Administrative centre with hundreds of storehouses'],
    ['Ingapirca', 'Ecuador', 'Inca temple and fortress in Cañari territory'],
    ['Vilcabamba (Espíritu Pampa)', 'Jungle of Peru', 'Last refuge of the Incas, c. 1537–1572']
  ] } },
  { h: 'Cusco, the sacred capital' },
  'Cusco was divided into two halves, **Hanan** (upper) and **Hurin** (lower), and from the central square, the **Huacaypata**, the roads of the four suyus set out. It was the city of temples, palaces and dead Incas, and at the same time the centre of the world for the Incas. Pachacuti rebuilt it after the war against the Chancas: straight streets and water channels, stone buildings and an enormous square. It is popularly said that the plan of Cusco was in the shape of a **puma**, with Sacsayhuamán as the head, but this reading is **debated** and more symbolic than proven.',
  { img: 'inc-cusco-reconstrucao', leg: 'Conjectural reconstruction of Cusco, c. 1520. AI-generated illustration.' },
  { img: 'inc-coricancha', leg: 'Inca walls beneath the Santo Domingo convent, Coricancha, Cusco' },
  { h: 'The Coricancha, the temple of the Sun' },
  'The **Coricancha** (*Quri Kancha*, “the golden enclosure”) was the holiest temple of the empire, dedicated to **Inti**, the Sun, but with shrines to the Moon, the stars, thunder and the rainbow. According to the chroniclers, the interior walls were covered in gold plates and in a garden there were life-size gold images of plants and animals. The Spaniards melted everything down and built the **convent of Santo Domingo** on top. The earthquakes of 1650 and 1950 brought down much of the colonial construction and left the Inca walls intact.',
  { img: 'inc-templo-sol', leg: 'Imagined interior of an Inca Sun temple. AI-generated illustration.' },
  { h: 'Sacsayhuamán' },
  'The fortress-temple of **Sacsayhuamán**, above Cusco, has three enormous zigzag walls made of limestone blocks weighing many tens of tonnes, the largest more than a hundred. Its function is debated: fortress, temple, ceremonial site, or all three. In 1536 it was the centre of the fighting between the men of **Manco Inca** and the Spaniards: the Incas took it and the Spaniards retook it in an assault. Many of its stones were later removed to build colonial Cusco.',
  { img: 'inc-sacsayhuaman', leg: 'Zigzag walls of Sacsayhuamán' },
  { h: 'Ollantaytambo' },
  'In the Sacred Valley, **Ollantaytambo** had a town and a fortress, with terraces and a ceremonial enclosure of large blocks of **reddish porphyry** (the six monoliths of the “Temple of the Sun”), brought from a quarry on the other side of the valley. It was here that **Manco Inca** defeated **Hernando Pizarro** in early 1537: one of the few great Inca victories over the Spaniards. The town still keeps its Inca layout, with streets and water channels still in use.',
  { img: 'inc-ollantaytambo', leg: 'Ollantaytambo fortress and terraces' },
  { h: 'Machu Picchu' },
  'The **royal estate** that Pachacuti had built, c. 1450, at 2,430 m above sea level, had about 200 buildings, terraces, channels, temples (the Temple of the Sun, the Intihuatana) and an agricultural zone. It was a place for the Inca, his family and his court, and for ceremonies and cultivation; its permanent inhabitants were probably a few hundred. It was abandoned around the time of the conquest, and was never found by the Spaniards, which saved it from destruction. Its exact function is debated, and people speak of a royal retreat, a religious sanctuary and a link with the climate of the Antisuyu, but the consensus is that it was a **royal estate**.',
  { img: 'inc-machu-picchu-reconstrucao', leg: 'Reconstruction of Machu Picchu in use, c. 1500. AI-generated illustration.' },
  { h: 'Roads and bridges: the Qhapaq Ñan' },
  'The **Qhapaq Ñan** (“the main road”) was a network of roads of about **30,000 km**, with two great north–south lines (one along the coast and one through the mountains) and many branches. It crossed deserts, passes of more than 4,000 m and forests. It had stairways, drainage, retaining walls and **suspension rope bridges** over rivers. Every few kilometres there was a **tambo** (state inn and storehouse), and between them ran the **chasquis**, the couriers who passed oral messages and quipus along in relay. Each day the couriers could cover, according to widely cited estimates, more than 200 km, but this is probably optimistic. Only the state and its agents could use the main roads. The Incas did not use the wheel for transport: people went on foot and goods were carried by llamas.',
  { img: 'inc-qhapaq-nan', leg: 'Paved section of the Inca road system' },
  { img: 'inc-ponte-corda', leg: 'Q’eswachaka rope bridge' },
  'The **Q’eswachaka** bridge in Peru, about 30 m long, is rebuilt every year in June by Quechua communities, using the same technique of plaited grass fibres, and the tradition was inscribed by UNESCO as intangible heritage in 2013.',
  { h: 'Vilcabamba' },
  'The refuge of **Manco Inca**, after his defeat at Cusco, lay in the jungle, west of Machu Picchu. For 35 years it was the capital of a **neo-Inca state**, and from here attacks against the Spaniards were launched. The site of **Espíritu Pampa**, in the forest, was identified as the capital by Gene Savoy in 1964, and is today the site accepted by most researchers. Hiram Bingham had thought, in 1911, that Machu Picchu was Vilcabamba, an idea that proved wrong.',
  { img: 'inc-vilcabamba', leg: 'Ruins of Espíritu Pampa, Vilcabamba' },
  { h: 'Routes and trade' },
  'The Incas had no free trade like that of the Phoenicians or the Greeks. What circulated were **state goods**, such as maize, dried potatoes, textiles, weapons, coca, gold and spondylus (a red shell from Ecuador, highly valued in rites), and they moved along roads and storehouses under state control. Along the coasts and valleys, different communities exchanged products from different altitudes, following an ancient Andean logic that the Incas took advantage of.'
];

const sociedade = [
  { h: '1. Political organisation' },
  'The empire was governed by the **Sapa Inca**, considered a son of the Sun and a sacred figure, at once king, high priest and supreme commander. He married a sister, the **Qoya**, who was his principal wife; the heir was normally chosen from among the sons (not necessarily the eldest), which caused crises of succession. The Inca wore on his forehead a red fringe, the *mascaypacha*. When he died, his body was mummified and continued to “live”, with its own servants, lands and palace, within his family, the **panaca**; so each new Inca had to conquer new lands to support himself.',
  'Beneath the Inca, the empire was divided into four suyus, with governors (**apus**) from the royal family, and then into provinces and communities, with a system of **decimal organisation**: families were grouped into units of 10, 50, 100, 500, 1,000, 5,000 and 10,000 taxpayers, each with its own head. Local chiefs, the **curacas**, kept their posts if they were loyal and served as a link between the state and the communities. The sons of curacas were educated in Cusco, which taught them the Incas’ language and customs and also served as a form of hostage-taking.',
  { h: '2. Social classes' },
  'Society had well-defined classes. At the top, the Inca and his family (the **panacas** and the nobility of Cusco, the “orejones”, so called by the Spaniards because they wore large ear ornaments). Then the curacas, priests, generals and officials. The great majority were the **hatunrunas**, peasants organised in ayllus. The **yanakunas** were permanent servants, tied to the Inca or to nobles and not to a community. The **aqllas** (“chosen women”) were women removed from their communities and placed in special houses (the *aqllawasi*), where they wove and made chicha for the state, served in the temples or were given as wives to the Inca or as a reward to nobles. The **mitmaqs** were families forcibly moved from one region to another, to settle territories, watch over rebels or teach maize growing.',
  { h: '3. The ayllu, the mit’a and the economy without money' },
  'The base of society was the **ayllu**, a community of families bound by real or symbolic kinship, sharing land, herds and work. Its rule was **reciprocity** (*ayni*): whoever receives help returns help. The Incas took this tradition and turned it into a tax: each community owed the state a **labour turn**, the **mit’a**. This labour was used to farm state and Sun lands, build roads, temples and storehouses, serve in the army, make textiles, extract metals or carry goods. In return the state gave food, drink (chicha) and festivals, and kept reserve storehouses for years of famine.',
  { img: 'inc-mit-a', leg: 'Collective work during a mit’a labour turn. AI-generated illustration.' },
  'Land was divided into three: that of the **Sun** (for religion), of the **Inca** (for the state) and of the **community**. There was no money, and local trade was limited and without prices; the state redistributed products through the **qollqas** (storehouses), which could keep maize, dried potatoes and textiles for years. Fine textiles, more than gold, were the “currency” of prestige: the Inca gave them as favours to nobles and allies. This organisation was misunderstood by the Spaniards, who transformed it: the **mit’a of Potosí**, the forced recruitment of indigenous people for the silver mines in the colonial period, took the name but was far more brutal than the Inca mit’a.',
  { h: '4. Religion' },
  'Inca religion was a mixture of the official state cult, centred on the Sun and the Inca, and local beliefs, which the empire tolerated as long as the Sun was accepted. The Incas divided the cosmos into three worlds: **Hanan Pacha** (the upper world, of the gods), **Kay Pacha** (the world of life) and **Ukhu Pacha** (the inner world and that of the dead). Everything had a spirit, and nature was sacred: mountains (the **apus**), rivers, rocks, springs. Any sacred place or object was called a **huaca**, and in Cusco alone there were, according to the chronicler Bernabé Cobo, more than 300 huacas, linked by the imaginary lines called **ceques**, which radiated from the Coricancha.',
  { tabela: { cab: ['Deity', 'Domain', 'Notes'], linhas: [
    ['Inti', 'The Sun; ancestor of the Incas', 'The official god of the state; his temple was the Coricancha'],
    ['Viracocha', 'The creator (of people and the world)', 'Creator god, much venerated; the chroniclers’ accounts may have been influenced by Christianity'],
    ['Pachamama', 'Mother Earth', 'Still venerated in the Andes today, with offerings to the earth'],
    ['Mama Quilla', 'The Moon', 'Wife of the Sun; protector of women and the calendar'],
    ['Illapa', 'Thunder, lightning and rain', 'Very important for agriculture'],
    ['Mama Cocha', 'The sea and water', 'Venerated on the coast'],
    ['Pachacámac', 'Oracle god of the central coast', 'Annexed by the Incas, who kept his cult'],
    ['Supay', 'Spirit of the world below', 'Spanish missionaries identified him, wrongly, with the Devil']
  ] } },
  { img: 'inc-mumias', leg: 'Imagined procession with mummified Inca rulers in Cusco. AI-generated illustration.' },
  { h: 'Mummies and ancestors' },
  'The Incas mummified the bodies of their kings and many nobles. The mummies were kept in palaces, attended banquets, “spoke” through servants and were carried through the square of Cusco at festivals, with offerings of food and chicha. The dead were considered powerful intermediaries for the living. When the Spaniards banned the cult, families hid many mummies, and in 1559 the magistrate **Polo de Ondegardo** found several (others vanished for ever).',
  { h: 'Sacrifices and the capacocha' },
  'The most common sacrifice was of **llamas** and objects, with coca, chicha and textiles. There were also **human sacrifices**, but rare and limited to very solemn occasions: the enthronement of an Inca, great disasters, wars. The best known was the **capacocha** (*qhapaq hucha*), in which children and adolescents, chosen in the provinces for their physical perfection, were taken to Cusco and then sent to sacred mountains. There they were left, with rich offerings, in high-altitude chambers, where they would die of cold or by a blow. The bodies found in 1999 on the summit of the **Llullaillaco** volcano (6,700 m), on the border between Argentina and Chile, show a girl of about 15, a boy of 7 and a girl of 6, and were studied by the team of **Johan Reinhard**. For the Incas it was an honour, a link between humans and the gods; for us, it is hard to understand. It was a rare practice, and not “the everyday life” of the Incas.',
  { img: 'inc-llullaillaco', leg: 'Llullaillaco volcano, Andes' },
  { h: '5. Everyday life: house, family and food' },
  'The peasant family lived in a rectangular house of stone or adobe, with a thatched roof, a single room and a hearth on the floor; people slept on mats or on skins, and **cuyes** (guinea pigs) were raised inside the house, for eating. Marriage was generally between members of the same ayllu, and young people were married in a collective ceremony, organised by the state, when they came of age. Children worked from an early age, and the nobility studied in Cusco, with masters of quipu, history and language.',
  { img: 'inc-casa-inca', leg: 'Daily life of an Inca farming family. AI-generated illustration.' },
  'The base of the diet was the **potato** (hundreds of varieties), **maize** (above all in soups, as toasted grain and as **chicha**, maize beer), **quinoa**, oca, ulluco, beans, chilli pepper (*ají*) and the meat of **cuy**, llama and alpaca. To preserve potatoes they made **chuño**, by freezing and sun-drying, which keeps for years. Salted dried meat was called **ch’arki**, the word from which English gets “jerky”. **Coca** was chewed, with a little lime, in rituals and at work, and was a state good. Chicha was the drink of festivals, and the state offered it on public works.',
  { img: 'inc-batatas', leg: 'Andean potato varieties' },
  { h: '6. Clothing and textiles' },
  'Cloth was the most valuable good in the Andes, even more than gold. It was made from cotton (on the coast) and from the wool of llama, alpaca and **vicuña** (the finest, reserved for the Inca). Men wore a tunic (*unku*), a cloak and sandals; women, a dress (*aksu*) and a cloak (*lliclla*) fastened with metal pins (*tupus*). Nobles wore large ear ornaments and tunics with geometric designs, the **tocapus**, in which some researchers see a kind of visual language, an unproven hypothesis. Textiles were made by women, on a backstrap or a ground loom.',
  { img: 'inc-tunica', leg: 'Inca tunic with geometric patterns, c. 1400–1540, Cleveland Museum of Art (1957.136).' },
  { h: '7. Music, festivals and the calendar' },
  'Music used **flutes** (*quenas*), **panpipes** (*antaras*, *sikus*), drums (*tinyas*) and the shell trumpet, the *pututu*. There were songs and dances tied to farm work and to rituals. The calendar followed the Sun and the Moon, with months marked by agricultural and religious festivals. The most important was the **Inti Raymi**, the festival of the Sun, at the winter solstice (June in the southern hemisphere), with llama sacrifices, dances and a procession. Today, a theatrical representation of the Inti Raymi (created in 1944) is staged every year on 24 June at Sacsayhuamán.',
  { img: 'inc-inti-raymi', leg: 'Modern Inti Raymi performance at Sacsayhuamán' },
  { h: '8. Agriculture and engineering' },
  'The Andes are a hard land, and the farmers learned to use them. **Terraces** (*andenes*) made it possible to cultivate steep slopes, held back soil and water and corrected the climate. Canals carried water for kilometres. The tools were the **taclla** (a foot plough) and the hoe; there was no iron. At **Moray**, in the Sacred Valley, there are large circular depressions with terraces, where the temperature varies a great deal between the bottom and the top; the hypothesis that they served as a “laboratory” for adapting plants is popular but unproven.',
  { img: 'inc-moray', leg: 'Circular terraces of Moray' },
  { h: '9. Building in stone' },
  'The Incas are famous for their walls of **cut stones fitted without mortar**, so that not even a blade passes between the joints. The blocks, of andesite, limestone or diorite, were shaped with hard stones (hammerstones) and polished with sand. How they were transported and raised is a matter of debate: ramps, ropes, wooden rollers and many men. Buildings had **trapezoidal** doors and niches, walls leaning slightly inward and interlocked corners, which gives stability in earthquakes. The famous **twelve-angled stone**, on Hatunrumiyoc street in Cusco, is an example of this work. It was not magic or lost technology: it was the fruit of organised labour, simple tools and a great deal of experience.',
  { img: 'inc-pedra-doze-angulos', leg: 'Twelve-angled stone, Cusco' },
  { h: '10. The quipu: counting and, perhaps, writing' },
  'The Incas had no known alphabetic writing. They used the **quipu** (*khipu*, “knot”), a set of cotton or wool cords hanging from a main cord, with **knots** of various types and colours. Knots in groups recorded numbers in a **positional decimal system** (units, tens, hundreds), and the specialists, the **quipucamayocs**, used them to count people, goods, storehouses and taxes. More than a thousand quipus are known, most in museums. The most debated question: **do quipus also record words or stories?** The Spanish chroniclers said that quipus held history and laws, and the researcher **Gary Urton** (Harvard) argues that their system of colours, cords and knots worked as a binary code carrying a great deal of information. In 2017, **Sabine Hyland** proposed that some (colonial-era) quipus from the village of Collata, in Peru, record lineage names phonetically, a reading that is still discussed. No narrative quipu has been deciphered, and the question remains open.',
  { img: 'inc-quipu', leg: 'Inca quipu: cords and knots' },
  { h: '11. Medicine and knowledge' },
  'Inca medicine combined practical observation and ritual. They used plants (coca, for pain and fatigue at altitude), massage, bloodletting and **surgery**. The most famous is **trepanation**: a hole was opened in the skull, with a chisel or a knife of stone or bronze (*tumi*), to treat war injuries or, possibly, headaches or religious signs. Studies of skulls from the Inca period (by **John Verano**) indicate that **most patients survived**, with a survival rate that may have reached about 75 to 80 per cent, considerably higher than in earlier periods in the Andes. The **Kallawayas**, itinerant doctors from the southern Andes, remain today a tradition listed by UNESCO (2008).',
  { img: 'inc-trepanacao', leg: 'Trepanated skull from Chaquil, Soloco, Chachapoyas, Peru.' },
  { h: '12. Messages and roads: the chasquis' },
  'The empire worked only because **messages** arrived quickly. The **chasquis**, trained runners, were stationed in posts along the roads and passed the message from one to the next, in relay, by word or by quipu. According to the chroniclers, they carried news from Quito to Cusco in a few days (more likely about a week or more) and could bring fresh fish from the coast to the Inca’s table. They were not riders: the empire had no horses.',
  { img: 'inc-chasqui', leg: 'Chasqui on a mountain road. AI-generated illustration.' },
  { h: '13. War' },
  'The army, made up of recruits drawn from the communities by the mit’a and commanded by nobles from Cusco, was numerous and well supplied, thanks to the roads and storehouses. The weapons were **slings**, stone or bronze **maces**, spears, bolas and axes, with wooden shields and quilted cotton armour. The Incas preferred to conquer by **diplomacy, gifts and threat**, and used force only when necessary. Those who resisted were sometimes moved far away (mitmaqs), and their local gods were taken to Cusco as “hostages”. Against the Spaniards, in 1532, these weapons were of little effect: steel, horses, firearms and epidemics made the difference, and the Spaniards also had the support of many indigenous peoples, tired of Inca rule.'
];

const personalidades = [
  'Inca figures reach us through oral accounts and Spanish chroniclers, and not all dates and stories are secure. The ones that follow are real, and what is legend or tradition is marked.',
  { h: 'Manco Cápac (legendary)' },
  'The first Inca, according to tradition, founder of Cusco and son of the Sun. He is a figure of **origin myth**, and there is no certainty that he existed as a person. The story of his departure from Lake Titicaca (or Pacaritambo) has several versions.',
  { h: 'Pachacuti Inca Yupanqui (reigned c. 1438 – 1471)' },
  'The founder of the empire, traditionally. He defeated the Chancas, rebuilt Cusco, had Machu Picchu built and organised Tawantinsuyu and its system of tribute and roads. The name means “he who transforms the world”. Historians debate how much belongs to him and how much to his successors and predecessors, but he is a central figure.',
  { img: 'inc-pachacutec', leg: 'Pachacuti statue in Aguas Calientes' },
  { h: 'Topa Inca Yupanqui (reigned c. 1471 – 1493)' },
  'Son of Pachacuti. He led many of the campaigns, conquered the Chimú kingdom and took the empire to Ecuador, Chile and Bolivia. He is also said to have been a great administrator.',
  { h: 'Huayna Cápac (reigned c. 1493 – 1527)' },
  'Son of Topa Inca. He reigned during the empire’s greatest extent and spent long years in the north, on campaign. He died c. 1527 of an illness (perhaps smallpox, which is debated), without having settled the succession, opening the way to civil war.',
  { h: 'Huáscar (reigned c. 1527 – 1532)' },
  'Son of Huayna Cápac, Inca in Cusco. He lost the civil war against his half-brother and was captured. He was killed, according to tradition on Atahualpa’s orders, during the latter’s captivity, in 1532 or 1533.',
  { h: 'Atahualpa (c. 1500 – 1533)' },
  'Son of Huayna Cápac, linked to the north of the empire (Quito); his birthplace is debated. He defeated his brother in the civil war and was Inca in fact when he met Pizarro at Cajamarca in November 1532. Captured, he offered a ransom in gold and silver but was executed on 26 July 1533. He was a skilful commander, and his capture was a well-planned ambush rather than proof of “naivety”.',
  { img: 'inc-guaman-poma-atahualpa', leg: 'Atahualpa at Cajamarca, Guaman Poma drawing in the Nueva corónica, c. 1615.' },
  { img: 'inc-montero-atahualpa', leg: 'The Funeral of Atahualpa, Luis Montero, 1867' },
  { h: 'Francisco Pizarro (c. 1478 – 1541)' },
  'Spanish conquistador, born in Trujillo, in Extremadura, of a modest family. He led the expedition that captured Atahualpa and founded Lima in 1535. He was murdered in Lima in 1541 by supporters of Diego de Almagro, his former partner, with whom he had fallen out over possession of Cusco.',
  { h: 'Manco Inca (c. 1515 – 1544)' },
  'Son of Huayna Cápac, installed by the Spaniards as a puppet Inca in 1533. In 1536 he rebelled, besieged Cusco and withdrew to Vilcabamba, where he founded the neo-Inca state. He was killed by Spaniards to whom he had given shelter.',
  { img: 'inc-manco-inca', leg: 'Imagined portrait of Manco Inca, c. 1536. AI-generated illustration.' },
  { h: 'Túpac Amaru I (c. 1545 – 1572)' },
  'The last Inca of Vilcabamba. Captured in 1572 by the men of Viceroy Toledo, he was sentenced to death, despite the protests of many Spaniards, and beheaded in the square of Cusco. It marks the end of the Inca royal line.',
  { h: 'Mama Ocllo and the women of the royal house' },
  'Inca women did not occupy the throne, but the **qoyas** (queens) and the mamakunas had great prestige, and descent gave legitimacy. The figure of **Mama Ocllo**, as wife and sister of Manco Cápac, belongs to legend. Known royal noblewomen, such as **Chimpu Ocllo** (Isabel), mother of Inca Garcilaso, and **Cuxirimay Ocllo** (wife of the chronicler Juan de Betanzos) helped preserve Inca memory during the conquest.',
  { h: 'Inca Garcilaso de la Vega (1539 – 1616)' },
  'Born in Cusco, son of a Spanish captain and an Inca princess, **Chimpu Ocllo**. He moved to Spain at about 21 (c. 1560–61) and wrote the *Comentarios Reales de los Incas* (1609), the most famous work on Inca culture. It is a precious source, but written from memory, with an idealised view and decades of distance, and it must be read with care.',
  { h: 'Felipe Guaman Poma de Ayala (c. 1535 – c. 1616)' },
  'An indigenous noble who wrote and illustrated, c. 1615, a letter of more than a thousand pages to King Philip III, the *Nueva corónica y buen gobierno*, in which he describes Inca life and denounces colonial abuses. His 400 drawings are the best visual source on the Incas. The manuscript is in the Royal Library in Copenhagen.',
  { h: 'Hiram Bingham III (1875 – 1956)' },
  'A Yale professor and explorer. On 24 July 1911, guided by local farmers, he reached Machu Picchu and made it world-famous with his photographs and excavations (1912 and 1914–15). He took thousands of objects to Yale, which were only returned to Peru in the early 21st century. He made mistakes: he thought it was Vilcabamba, and his fame long hid those who already knew the site.'
];

const legado = [
  { h: 'What they left us' },
  { lista: [
    '**The potato and other plants:** the potato reached Europe in the 16th century and changed the world’s diet. Andean maize, quinoa, the tomato (of American origin), the chilli pepper and coca come from the same agricultural world.',
    '**Engineering:** many of the roads, terraces and canals are still in use, and the Q’eswachaka bridge survives. The Inca walls of Cusco withstood earthquakes that brought down colonial buildings.',
    '**Organisation:** the model of a state based on compulsory labour, redistribution and storehouses is one of the great experiments in administration in history.',
    '**Language:** Quechua, spoken by millions of people, and words that passed into English and other languages: *puma*, *condor*, *llama*, *pampa*, *guano*, *jerky*, *quinoa*, *coca*.',
    '**Living traditions:** reciprocity (*ayni*), the cult of Pachamama, Andean textiles and music, festivals such as the Inti Raymi and Qoyllur Rit’i.',
    '**Memory and identity:** the Incas are a symbol of indigenous pride in countries such as Peru and Bolivia, and the name of Túpac Amaru has been used in rebellions down to the present.'
  ] },
  { h: 'Art' },
  'Inca art was above all **functional and geometric**: pottery (such as the **aryballos**, a long-necked jar for chicha), **textiles** of complex patterns, painted **wooden vessels** (*keros*, ceremonial cups), small figures of gold, silver and shell. There was no great stone sculpture as in Egypt. Inca goldsmiths worked gold and silver with great mastery, but almost everything was melted down by the Spaniards, and the few objects that survive come from tombs and offerings.',
  { h: 'Architecture' },
  'Inca architecture is simple and monumental: rectangular forms, trapezoids, perfect stonework, buildings that converse with the landscape. The builders chose the site for its sacred charge, and used rocks and mountains in the composition. After the conquest, the Spaniards used the Inca walls as foundations for churches and houses, and the combination of the two is visible in Cusco, where churches stand on Inca foundations.',
  { h: 'The rediscovery of the Incas' },
  'The Spaniards destroyed a great deal, but they never forgot. The 16th-century chroniclers, such as **Cieza de León**, **Betanzos**, **Cobo** and **Inca Garcilaso**, left valuable accounts. In 1911, **Hiram Bingham** made Machu Picchu known to the world: *National Geographic* devoted an entire issue to it in 1913. Archaeologists of the 20th and 21st centuries, such as **John Rowe**, who established the chronology, and others, continued the work, and new discoveries (such as the 2021 radiocarbon studies) still change what is known.',
  { img: 'inc-bingham', leg: 'Hiram Bingham by the expedition tent at Machu Picchu, 1912; photograph by Ellwood C. Erdis.' },
  { img: 'inc-garcilaso', leg: 'Imagined portrait of Inca Garcilaso de la Vega, engraving by Carlos Penoso, 1879.' },
  { h: 'Quechua today' },
  'Quechua is the most widely spoken native language of the Americas, by 7 to 10 million people in Peru, Bolivia, Ecuador (where it is called *Kichwa*), Colombia, Chile and Argentina. It has several varieties, and it has been an official language in Peru since 1975. The seven-coloured flag seen in Cusco, often called the “Inca flag”, is a **modern** creation and did not exist in the time of the Incas.',
  { img: 'inc-quechua-hoje', leg: 'Quechua women weaving in Ollantaytambo, Sacred Valley.' },
  { caixa: 'Where to visit', texto: 'In **Cusco**, the **Coricancha** and the **Museo Inka**; around it, the **Sacred Valley** (Pisac, Ollantaytambo, Moray) and **Sacsayhuamán**. **Machu Picchu** has limited daily entries, with set times and circuits, and it is worth booking well in advance and checking the rules before going. Outside Peru, it is worth seeing the **Museo de Arqueología de Alta Montaña** in Salta (Argentina), with the children of Llullaillaco, the **Museo Larco** in Lima, and the **Museo Machu Picchu** (Casa Concha) in Cusco, with pieces returned by Yale. In Europe there are Inca collections in the British Museum and the Ethnological Museum in Berlin.' }
];

const quiz = [
  { p: 'What was the Incas’ empire called in their own language?', op: ['Tawantinsuyu', 'Qosqo', 'Pachamama', 'Runasimi'], certa: 0, exp: 'Tawantinsuyu means “the four parts (together)”, that is, the four suyus.' },
  { p: 'What was the capital of the Inca Empire?', op: ['Quito', 'Cusco', 'Cajamarca', 'Lima'], certa: 1, exp: 'Cusco, at about 3,400 m above sea level, was the “navel of the world”; Quito was a secondary capital.' },
  { p: 'Who traditionally began the expansion of the empire after defeating the Chancas, c. 1438?', op: ['Manco Cápac', 'Atahualpa', 'Pachacuti', 'Huáscar'], certa: 2, exp: 'Cusi Yupanqui took the name Pachacuti, “he who transforms the world”, after beating the Chancas.' },
  { p: 'What was the quipu essentially used for?', op: ['Painting murals', 'Counting and recording information with cords and knots', 'Playing music', 'Measuring distances'], certa: 1, exp: 'It was a system of knotted cords; it records numbers in base ten, and it is still debated whether it also records words.' },
  { p: 'What was the mit’a?', op: ['A gold coin', 'A rain god', 'A labour turn owed to the state', 'A road'], certa: 2, exp: 'The mit’a was a tax paid in rotating labour, in return for food, drink and protection.' },
  { p: 'Who disputed the throne in the Inca civil war of c. 1529–1532?', op: ['Manco Inca and Túpac Amaru', 'Huáscar and Atahualpa', 'Pachacuti and Viracocha', 'Pizarro and Almagro'], certa: 1, exp: 'The two sons of Huayna Cápac: Huáscar (Cusco) and Atahualpa (Quito).' },
  { p: 'Where was Atahualpa captured on 16 November 1532?', op: ['At Cusco', 'At Machu Picchu', 'At Cajamarca', 'At Quito'], certa: 2, exp: 'At Cajamarca, in northern Peru, by Francisco Pizarro and about 168 Spaniards.' },
  { p: 'When was Atahualpa executed?', op: ['26 July 1533', '16 November 1532', '24 September 1572', '24 July 1911'], certa: 0, exp: 'He was strangled on 26 July 1533, after accepting baptism.' },
  { p: 'Who built the royal estate of Machu Picchu, c. 1450?', op: ['Atahualpa', 'Pachacuti', 'Francisco Pizarro', 'Manco Inca'], certa: 1, exp: 'It was an estate of the Inca Pachacuti; 2021 studies point to occupation from c. 1420.' },
  { p: 'Who made Machu Picchu known to the world in 1911?', op: ['Francisco Pizarro', 'Gene Savoy', 'Hiram Bingham', 'Inca Garcilaso'], certa: 2, exp: 'Hiram Bingham, of Yale, arrived on 24 July 1911 guided by local farmers, who already knew the site.' },
  { p: 'What was the Inca road network called?', op: ['Qhapaq Ñan', 'Tambo Pampa', 'Ayllu', 'Chasqui'], certa: 0, exp: 'Qhapaq Ñan, “the main road”, of about 30,000 km, was inscribed by UNESCO in 2014.' },
  { p: 'What technique did the Incas use in their stone walls?', op: ['Lime mortar', 'Fitted stonework without mortar', 'Fired brick', 'Roman concrete'], certa: 1, exp: 'The blocks were cut and fitted with such precision that they needed no mortar.' },
  { p: 'Which was the official god of the Inca state, ancestor of the rulers?', op: ['Pachamama', 'Illapa', 'Inti, the Sun', 'Supay'], certa: 2, exp: 'Inti, the Sun, was the god of the state and ancestor of the royal family; his temple was the Coricancha.' },
  { p: 'When did the last Inca state, that of Vilcabamba, fall?', op: ['1533', '1536', '1572', '1780'], certa: 2, exp: 'In 1572 Túpac Amaru I was captured, and executed in Cusco on the viceroy Toledo’s orders.' },
  { p: 'Which of these statements is a myth?', op: ['The Incas used the quipu', 'Machu Picchu was a “lost” city, unknown to everyone', 'Quechua is spoken even today', 'The Incas grew potatoes on terraces'], certa: 1, exp: 'Local farmers knew Machu Picchu long before Bingham reached it in 1911.' }
];

export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };
