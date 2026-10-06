// TEOTIHUACAN — full English content. Same structure and same image slots as the Portuguese version (dados.js).
// Note on rigour: Teotihuacan left no texts that we can read. Its original name, the language and ethnicity of its people, and the names of its local rulers are UNKNOWN. What we know comes from archaeology, art (above all murals), Maya inscriptions that mention it, and much later Aztec accounts. BC/AD.

const visao = [
  { caixa: 'In brief', texto: [
    '**Teotihuacan** was the first great city of the Americas and one of the largest in the world of its time. It stood in the **Valley of Mexico**, about 50 km north-east of present-day Mexico City, at over 2,300 m above sea level. Between the 1st century BC and the 6th century AD it grew from scattered villages into a planned metropolis of perhaps **100,000 people or more** (estimates range from about 100,000 to 200,000 and are debated), with a monumental avenue, giant pyramids and thousands of stone-and-lime houses.',
    'We do not know what the city called itself, what language its people spoke, or the name of a single one of its rulers. “Teotihuacan” is an **Aztec** name, given by people who lived a thousand years later and found the ruins already silent. Even so, the city’s influence reached **Monte Albán** (Oaxaca), the **Maya** cities (Tikal, Copán, Kaminaljuyu) and the Gulf coast. Around **AD 550** the ceremonial centre was partly burned and the city went into decline; by about 650–750 it was a shadow of what it had been.'
  ] },
  { img: 'teo-mapa-mesoamerica', leg: 'Map of Mesoamerica showing Teotihuacan and the regions it was in contact with.' },
  { h: 'Where it was' },
  'Teotihuacan lay in a small side valley of the **Valley of Mexico**, a high basin ringed by volcanoes and mountains, with lakes and springs. The site has plentiful **spring water**, fertile soil for maize and, nearby, deposits of **obsidian** (volcanic glass, the best “steel” of the Stone Age), above all the one at **Pachuca** to the north-east. These two advantages, water and obsidian, are among the reasons usually given for its success.',
  'At its height the city covered about **20 km²** (the protected archaeological zone is much larger). It was laid out on a **grid**, with a main axis, the **Avenue of the Dead**, skewed about 15.5° east of north, an orientation repeated in almost every building, whose exact reason (astronomical? a sacred mountain? the calendar?) is debated.',
  { img: 'teo-vista-aerea', leg: 'Aerial view of Teotihuacan, with the Avenue of the Dead and the Pyramid of the Moon in the background.' },
  { h: 'When it existed' },
  'The chronology of Teotihuacan rests on a sequence of pottery phases established by the archaeologist **René Millon** and his team, with names that are not Teotihuacan words but conventional labels. The dates are approximate, and some scholars propose adjustments based on radiocarbon dating.',
  { tabela: { cab: ['Phase', 'Approximate dates', 'What marks it'], linhas: [
    ['Patlachique', 'c. 100 BC – AD 1', 'A cluster of settlements; arrival of people from other parts of the valley, for debated reasons; start of planning'],
    ['Tzacualli', 'c. AD 1 – 150', 'A city already of tens of thousands; start of the great monuments (Pyramid of the Sun and Pyramid of the Moon, dates debated)'],
    ['Miccaotli', 'c. 150 – 200', 'Layout of the Avenue of the Dead; building of the Ciudadela and the Feathered Serpent Temple'],
    ['Tlamimilolpa', 'c. 200 – 350', 'Expansion of the city; the stone apartment compounds; neighbourhoods of foreigners (Oaxaca, Gulf coast)'],
    ['Xolalpan', 'c. 350 – 550', 'Peak: maximum population, murals, long-distance trade; contacts with the Maya cities (AD 378)'],
    ['Metepec', 'c. 550 – 650', 'Burning and destruction of buildings in the centre; loss of population'],
    ['Oxtotipac and after', 'c. 650 – 750', 'Reduced, scattered occupation; the city ceases to be a regional power']
  ] } },
  { h: 'Who were they?' },
  'Here is the hardest and most honest point: **we do not know**. Teotihuacan was a **multi-ethnic** city, with neighbourhoods of people from Oaxaca, the Gulf coast and other regions. But the language of the dominant group is unknown. Proposals include **Nahua** (the language of the Aztecs; a hypothesis that gives the name “Teotihuacan” a natural meaning, but which would mean the Nahuas were already there a thousand years earlier), **Otomi**, **Totonac**, **Mixe-Zoquean** and others, and none is proved. The Teotihuacanos themselves left no readable texts: they had signs and symbols, but nobody has shown that they formed a complete writing system. **Maya** inscriptions mention “people of” or “lords of” a place that some epigraphers read as **Puh**, “place of reeds” (a name similar to the Nahua “Tollan”), but the reading is disputed.',
  { h: 'Why they matter' },
  { lista: [
    '**The first metropolis of the Americas:** a planned city with streets, drainage, serial housing and an enormous ceremonial avenue, on a continent without horses, without transport wheels and without metal.',
    '**A society with no visible king:** there are no royal portraits, no confirmed royal tombs, and no texts naming rulers. Who ruled, and how, is one of the great open questions.',
    '**Mural art:** the murals of Teotihuacan, in reds, greens and blues, with gods, priests and animals, are among the most beautiful paintings of ancient America.',
    '**Trade and influence:** the city controlled obsidian and exported ideas, style and perhaps power as far as Guatemala.',
    '**An open mystery:** where it came from, who they were, why it burned: every year of excavation (such as the tunnel beneath the Feathered Serpent Temple) changes what we know.',
    '**The name “place of the gods”:** for the Aztecs it was where the gods gathered to create the Fifth Sun, the sun of their age. The city was already sacred and ancient to them.'
  ] },
  { img: 'teo-avenida-mortos', leg: 'The Avenue of the Dead seen from the Pyramid of the Moon; the Pyramid of the Sun in the background.' },
  { img: 'teo-piramide-lua', leg: 'Pyramid of the Moon and its plaza, Teotihuacan.' },
  { img: 'teo-cidade-reconstrucao', leg: 'Conjectural reconstruction of Teotihuacan, c. AD 450. AI-generated illustration.' },
  { caixa: 'Mexico today', texto: 'The archaeological zone of Teotihuacan was inscribed on the UNESCO World Heritage List in **1987** and is one of the most visited sites in Mexico, with over a million visitors a year. It lies in the municipality of San Juan Teotihuacán, in the State of Mexico. The pyramids and the avenue remain a place of ceremonies, above all at the March equinox, when many people go there to “charge up with the Sun’s energy” (a modern tradition with no demonstrated link to the ancient one).' }
];

const linha = [
  'This timeline follows what archaeology allows us to state. Because there are no Teotihuacan texts, **almost all dates are approximate** and rest on pottery, radiocarbon and, for contacts with the Maya, on **Maya** inscriptions. Aztec legends are marked as such.',
  { linha: [
    { d: 'c. 1000 – 100 BC', t: 'Before the city', x: 'The Valley of Mexico had farming villages and larger centres, such as **Cuicuilco** (in the south of the valley), with a circular pyramid. In the Teotihuacan valley there were only small settlements. Farming of maize, beans and squash already supported dense populations, which prepared the ground.' },
    { d: 'c. 100 BC', t: 'A gathering of people', x: 'A large settlement appears at the Teotihuacan site, to which tens of thousands of people from neighbouring regions move within a few generations. The causes are debated: pressure from volcanic eruptions in the region, the strength of the springs, the obsidian trade, a religious attraction, or the decisions of an elite that drew people by force. It is now thought that the eruption of **Xitle** is **later** than once believed (dates between c. AD 245 and c. 315 have been proposed) and so does not explain the foundation.' },
    { d: 'c. AD 1 – 150', t: 'Planning the city', x: 'The great grid layout begins, along with the first phases of the **Pyramid of the Sun** and the **Pyramid of the Moon** (dates debated: the first phases of the Moon go back to c. AD 100). There is huge collective labour: hundreds of thousands of cubic metres of earth and stone.' },
  ] },
  { img: 'teo-cuicuilco-xitle', leg: 'Conjectural reconstruction of the Xitle eruption (c. AD 250–300, date debated) and the settlements of the southern Valley of Mexico. AI-generated illustration.' },
  { img: 'teo-construcao-sol', leg: 'Conjectural construction of the Pyramid of the Sun, 1st–2nd centuries AD. AI-generated illustration.' },
  { linha: [
    { d: 'c. 150 – 200', t: 'Avenue of the Dead, Ciudadela and Feathered Serpent', x: 'The **Ciudadela** is built (a large compound about 400 m on a side, and not a fortress despite its Spanish name) and, inside it, the **Feathered Serpent Temple**. At its dedication, **more than two hundred people** were sacrificed and buried in pits, many with military adornments. It is the largest act of this kind known in the city.' },
    { d: 'c. 200 – 350', t: 'The metropolis', x: 'The population grows and the city spreads. The great stone **apartment compounds**, with courtyards and paintings, are built. Foreign neighbourhoods appear: the **Oaxaca barrio (Tlailotlacan)**, linked to the Zapotecs, and the so-called **Merchants’ Barrio**, with links to the Gulf coast.' },
    { d: 'c. 250 – 300 (debated)', t: 'Xitle and Cuicuilco', x: 'The eruption of **Xitle** covers the fields and ruins of Cuicuilco, in the south of the valley, with lava. Teotihuacan is left without a rival in the region, where it was already probably the largest city.' },
    { d: 'c. 300 – 400', t: 'The outside neighbourhoods', x: 'The **Oaxaca barrio** consolidates, with chamber tombs of Zapotec type and Oaxacan pottery; bone analyses show that many of those buried there were born elsewhere. At Monte Albán, the Zapotec capital, paintings and pottery in turn show contacts with Teotihuacan, in a two-way traffic.' },
    { d: 'AD 378', t: 'Arrival at Tikal', x: 'According to Maya inscriptions (above all the **stelae of Tikal**, studied by David Stuart, Simon Martin and others), a figure called **Siyaj K’ak’** (“Fire is Born”) reaches **El Perú-Waka** on 8 January and **Tikal** on 31 January, the same day the local king, **Chak Tok Ich’aak I**, dies. Siyaj K’ak’ came “from the west”, and the images associated with him (weapons, feathered headdresses, Tlaloc faces) are Teotihuacan. He is said to have been a general in the service of a lord of Teotihuacan called **Spearthrower Owl**. What this means, **military conquest, diplomatic intervention or political alliance**, is much debated.' },
    { d: '379', t: 'A new king in Tikal', x: '**Yax Nuun Ayiin I** (“First Crocodile”) takes the throne of Tikal, identified as the son of Spearthrower Owl. Later he was shown at Tikal in Teotihuacan dress. The pattern repeats at **Uaxactun** and other centres.' },
  ] },
  { img: 'teo-chegada-tikal', leg: 'Conjectural arrival of a Teotihuacan envoy at Tikal, AD 378. AI-generated illustration.' },
  { img: 'teo-estela31-tikal', leg: 'Stela 31 of Tikal, dedicated in AD 445, with figures in Teotihuacan style; Museo Sylvanus G. Morley, Tikal.' },
  { linha: [
    { d: 'c. 350 – 550', t: 'The peak', x: 'In the Xolalpan phase the city reaches its maximum population and wealth. The **murals** of Tepantitla, Tetitla and Atetelco are painted. Teotihuacan style appears in very distant places: **Kaminaljuyu** (Guatemala) and **Matacapan** (Veracruz). At **Copán**, in Honduras, the dynasty traditionally dated to c. 426 uses Teotihuacan iconography, but the origin of its founder is debated.' },
    { d: '445', t: 'Stela 31 of Tikal', x: 'King **Siyaj Chan K’awiil II** has Stela 31 erected; it commemorates his father Yax Nuun Ayiin I and shows, on the sides, that father flanked by warriors in Teotihuacan dress; on the front is Siyaj Chan K’awiil II himself. It is the clearest document on the links between the two cities, written 67 years after the events.' },
    { d: 'c. 535 – 536', t: 'Bad weather', x: 'Volcanic eruptions (whose location is debated) darken the sky over much of the northern hemisphere, causing droughts and famine. Some studies of children’s skeletons from Teotihuacan show signs of malnutrition at this time. The concrete effect on the city is debated.' },
    { d: 'c. 550', t: 'The fire', x: 'Several buildings along the **Avenue of the Dead** (the Feathered Serpent Temple, palaces and temples) are **burned**; images are smashed and fragmented. The destruction is concentrated on elite and cult buildings, and so the hypothesis now preferred by most archaeologists is an **internal revolt** or a political collapse rather than an outside invasion, although this is not proved.' },
  ] },
  { img: 'teo-queda-incendio', leg: 'Conjectural reconstruction of the burning of the ceremonial centre, c. AD 550. AI-generated illustration.' },
  { linha: [
    { d: 'c. 550 – 650', t: 'Metepec: a smaller city', x: 'The population shrinks a lot, but does not disappear: some areas remain inhabited and Teotihuacan pottery is still made. Centres in the valley and the region, such as **Xochicalco**, **Cholula** and **Cacaxtla**, gain importance.' },
    { d: 'c. 650 – 750', t: 'End of an era', x: 'Occupation shrinks to scattered groups. Some new inhabitants (the culture called **Coyotlatelco**) settle among the ruins. The city is no longer a regional power.' },
    { d: 'c. 900 – 1150', t: 'Tula and the Toltecs', x: 'The city of **Tula**, in the north of the valley, dominates the region. The Aztecs, centuries later, called all the great artists and builders of the past “Toltecs”, perhaps including the people of Teotihuacan.' },
    { d: '14th – 15th c.', t: 'The Aztecs visit the ruins', x: 'The **Mexica** (Aztecs) make pilgrimages to Teotihuacan, name the place and the pyramids (the “Sun” and the “Moon”, the “Avenue of the Dead”) and believe that the gods gathered there and **created the Fifth Sun**. This legend, preserved by Fray **Bernardino de Sahagún**, is an Aztec myth; it says nothing about the original city. Aztec offerings are found buried among the ruins.' },
    { d: 'c. 1675', t: 'Sigüenza y Góngora', x: 'The Mexican scholar **Carlos de Sigüenza y Góngora** visits and digs there, in the earliest modern explorations on record.' },
    { d: '1905 – 1910', t: 'Leopoldo Batres', x: 'The monuments inspector **Leopoldo Batres** cleans and restores the **Pyramid of the Sun** for the celebrations of the centenary of Mexican independence (1910). The restoration is much criticised today for its methods and excesses.' },
    { d: '1917 – 1922', t: 'Manuel Gamio', x: '**Manuel Gamio** directs a study of the Teotihuacan valley that joins archaeology, anthropology and society, and excavates the Ciudadela (1920s).' },
    { d: '1962 – 1973', t: 'The map of the city', x: 'The **Teotihuacan Mapping Project**, led by **René Millon**, records every building on the surface and produces the map of the city, with about two thousand apartment compounds. It was the starting point for much of what is now said about the city.' },
    { d: '1980 – 1982', t: 'The Feathered Serpent', x: 'Excavations led by **George Cowgill**, **Rubén Cabrera** and **Saburo Sugiyama** uncover the great collective graves beneath the Feathered Serpent Temple.' },
    { d: '1987', t: 'World Heritage', x: 'UNESCO inscribes the archaeological zone of Teotihuacan.' },
    { d: '1998 – 2004', t: 'The Pyramid of the Moon', x: 'Sugiyama and Cabrera explore the interior of the **Pyramid of the Moon** and find burials of sacrificed people, of important figures and of animals buried alive.' },
    { d: '2003 – 2017 and after', t: 'The tunnel', x: 'After heavy rains open a hole, **Sergio Gómez Chávez** discovers (2003) a passage of about **100 m**, sealed around AD 200, beneath the Feathered Serpent Temple. It contains chambers with **tens of thousands of objects**: shells, green stones, pyrite balls, and spheres and pools of **liquid mercury**. Research continues.' }
  ] },
  { h: 'Rediscovery' },
  'Teotihuacan was never entirely forgotten: it was known to the Aztecs and then to the Spaniards, who saw the pyramids as the work of giants. What changed in the 20th century was scientific archaeology. And the name “Teotihuacan”, that of the “place of the gods”, belongs to a city whose real name **we still do not know**.'
];

const mapa = [
  'Teotihuacan was a city on a **grid**, of about 20 km², divided into **quadrants** by the Avenue of the Dead (north-south) and a perpendicular avenue (east-west). The ceremonial centre lay at the crossing. The most important buildings are the following (the names are mostly Aztec or Spanish; the true names are lost).',
  { tabela: { cab: ['Place', 'What it is', 'Approximate dates', 'Importance'], linhas: [
    ['Avenue of the Dead', 'Main axis, c. 4 km long and 40 m wide', 'c. 150 – 350', 'Backbone of the city; name given by the Aztecs (they thought the mounds were tombs)'],
    ['Pyramid of the Sun', 'Largest building in the city (base c. 225 m; height c. 65 m)', 'c. 100 – 250 (debated)', 'About a million cubic metres of earth and stone; tunnel and cave beneath'],
    ['Pyramid of the Moon', 'Smaller pyramid (c. 45 m), at the end of the avenue', 'Seven phases, c. 100 – 450', 'Burials of sacrificed people; plaza with twelve platforms'],
    ['Ciudadela', 'Square compound c. 400 m on a side', 'c. 150 – 250', 'Palace or centre of power; Feathered Serpent Temple'],
    ['Feathered Serpent Temple', 'Six-level pyramid inside the Ciudadela', 'c. 200', 'Mass sacrifices; tunnel beneath'],
    ['Quetzalpapalotl Palace', 'Palace next to the Pyramid of the Moon', 'c. 450 – 500', 'Carved pillars with quetzal and butterfly'],
    ['Tepantitla, Tetitla, Atetelco, Zacuala', 'Elite apartment compounds with murals', 'c. 350 – 550', 'The best murals'],
    ['Oaxaca Barrio (Tlailotlacan)', 'Neighbourhood of people from Oaxaca, to the west', 'c. 300 – 550', 'Zapotec-type tombs; local Oaxacan pottery'],
    ['Merchants’ Barrio', 'Neighbourhood to the north-east with Gulf links', 'c. 300 – 550', 'Pottery from several regions; circular houses'],
    ['La Ventilla', 'Neighbourhood with workshops and apartment compounds', 'c. 200 – 550', 'Graphic signs found on walls']
  ] } },
  { img: 'teo-esquema-urbano', leg: 'Simplified diagram of the layout of Teotihuacan, with the Avenue of the Dead and the quadrants. Drawn diagram.' },
  { h: 'The Pyramid of the Sun' },
  'The **Pyramid of the Sun** is the largest building in the city and one of the largest in ancient America. It measures about **225 m** on a side and **65 m** in height (measurements vary, and before Batres’s restoration it may have been taller, with a temple on top). It is made of earth and stone, in five stages, and was covered in painted stucco. In **1971** a passage of some **100 m** was discovered leading to a **cave** under the pyramid; it is debated whether the cave is natural or artificial and whether it tied the place to the cult of water and of ancestors. The name “of the Sun” is Aztec and we do not know to whom it was dedicated.',
  { img: 'teo-piramide-sol', leg: 'Pyramid of the Sun, Teotihuacan' },
  { h: 'The Pyramid of the Moon and the Plaza of the Moon' },
  'At the northern end of the avenue, the **Pyramid of the Moon** was enlarged in **seven phases**. Inside, archaeologists found **burials of sacrificed people**, many with their hands tied behind their backs, and offerings of obsidian, shells, green stones and **animals** (pumas, wolves, eagles, snakes) buried alive in captivity, a sign of a ritual of power over the forces of nature. The plaza in front is ringed by platforms and temples.',
  { h: 'The Ciudadela and the Feathered Serpent' },
  'The **Ciudadela** is a vast compound with a central courtyard and temples around it. Its name is Spanish and misleading: it is not a military citadel but a ceremonial and political complex (perhaps a residence of the rulers, a debated point). Within it, the **Feathered Serpent Temple** has a façade covered in **sculpted heads** of feathered serpents and of another creature with a snout (sometimes read as the “war serpent” or as Tlaloc, an open question), alternating with shells, and it was painted in bright colours. Beneath it, excavations found **collective graves of sacrificed people**, mostly men with war regalia: a display of collective power and, perhaps, of the renewal of time.',
  { img: 'teo-ciudadela', leg: 'Ciudadela and Feathered Serpent Temple, Teotihuacan' },
  { img: 'teo-serpente-emplumada', leg: 'Façade of the Feathered Serpent Temple, with serpent heads in relief.' },
  { img: 'teo-esquema-tunel', leg: 'Simplified and conjectural diagram of the tunnel beneath the Feathered Serpent Temple, c. 100 m long. Drawn diagram.' },
  { h: 'The tunnel under the Feathered Serpent' },
  'The discovery of **2003** is one of the most important of recent decades. A tunnel of about **100 m**, **14–18 m deep**, was **sealed** around AD 200, probably on purpose. Inside, archaeologists found **chambers at the far end**, with thousands of objects: carved green stone, shells, seeds, pottery, balls of **pyrite** that gleam like small suns, and **liquid mercury** (a rare and dangerous substance) that perhaps simulated a lake of the underworld. The current interpretation is of a representation of the **underworld**. Some researchers think it may have been the tomb of a ruler; so far no body has been found to prove it.',
  { h: 'The Quetzalpapalotl Palace' },
  'Beside the Plaza of the Moon stands the **Quetzalpapalotl Palace** (“quetzal-butterfly”), restored in the 1960s, with a courtyard ringed by **carved pillars** of birds and butterflies, with traces of red paint. Beneath it lies the earlier **Palace of the Feathered Shells**. It was the residence of priests or elites.',
  { img: 'teo-quetzalpapalotl', leg: 'Courtyard of the Quetzalpapalotl Palace, Teotihuacan' },
  { h: 'Teotihuacan and the rest of Mesoamerica' },
  'The city kept contacts with very distant regions. The main ones are these:',
  { lista: [
    '**Oaxaca and Monte Albán:** the Zapotecs of **Monte Albán**, a thousand kilometres away, were a civilisation apart, and relations seem to have been **between equals**: exchange of gifts, envoys, and even a neighbourhood of people from Oaxaca in Teotihuacan. At Monte Albán, paintings and pottery from Teotihuacan are also found, but there is no proof of conquest.',
    '**The Maya:** the most famous relationship is that with **Tikal** (AD 378) and neighbouring centres (Uaxactun, Copán). The argument is between **conquest**, **an alliance of elites** and **prestige imitation**; most likely there was a bit of each.',
    '**Kaminaljuyu and Matacapan:** at Kaminaljuyu (today in Guatemala City) there are buildings and tombs in Teotihuacan style; Matacapan (Veracruz) has a complex that may have been a colony or trading post.',
    '**The Gulf and the West:** pottery, shells, cotton, cacao and feathers came from afar and were exchanged for obsidian and other goods.'
  ] },
  { img: 'teo-monte-alban', leg: 'Main Plaza of Monte Albán, the Zapotec capital, Oaxaca.' },
  { img: 'teo-tikal-templo', leg: 'Temple I and the Great Plaza, Tikal, Guatemala.' },
  { img: 'teo-bairro-oaxaca', leg: 'Conjectural reconstruction of the Oaxaca barrio (Tlailotlacan), Teotihuacan, 5th century AD. AI-generated illustration.' },
  { h: 'A map of power? The limits of influence' },
  'Caution is needed: Teotihuacan was **certainly not an empire** in the Roman sense. We know of no borders, tribute lists or provincial administration. Archaeologists debate whether it was an **expansionist state**, a **commercial power** or a **religious centre** whose fashion and prestige spread. In recent years the tendency is to speak of **networks of influence** and of different relations with each region.'
];

const sociedade = [
  { h: '1. Political organisation' },
  'This is the biggest question. In the Maya and Egyptian cities there are portraits of kings, tombs, inscriptions with names. In Teotihuacan **there is none of this** (or none identified with certainty). Two great theories: a **centralised government**, with an elite of priest-rulers, or a **collective** government, shared among several elite groups (nobles of the various houses, councils), which would explain the absence of individual portraits. Some see an evolution: personal power at the start, and more collective after the 3rd century.',
  'What is known is that the city was **planned** and required **enormous organisation**: collective labour, drainage, supply, urban order. The city also had soldiers (the art shows warriors with darts and shields), and human sacrifice tied to the building of temples was a way of asserting power.',
  { h: '2. Social classes' },
  { lista: [
    '**Elites:** priests, rulers and rich merchants; they lived in large, richly painted apartment compounds near the centre.',
    '**Specialist craftspeople:** obsidian, pottery, stone, painting, feathers; many worked in neighbourhoods or workshops by trade.',
    '**Farmers and labourers:** they cultivated the surrounding fields and came to work in the city.',
    '**Foreigners:** communities from Oaxaca, the Gulf and other regions, with their own customs (for example, their tombs).',
    '**The sacrificed:** warriors or captives, and perhaps people of the city itself, used in dedication rites.'
  ] },
  { h: '3. Housing: the apartment compounds' },
  'The great urban novelty of Teotihuacan was the **apartment compounds** (archaeologists call them that): about **2,000** square buildings of stone and lime, **with high walls and no windows onto the street**, a central courtyard with an altar and several houses and rooms around it, for **60 to 100 people** (related families or colleagues of a trade). The floors were of lime and the courtyards had **drainage** for rainwater. The richest had **murals**; the poorest had plain walls. The structure is unique in Mesoamerica and raises the question of whether it was **planned** by the authorities.',
  { img: 'teo-conjunto-habitacional', leg: 'Conjectural reconstruction of a Teotihuacan apartment compound, 5th century AD. AI-generated illustration.' },
  { img: 'teo-conjunto-tetitla', leg: 'Ruins of the Tetitla compound, Teotihuacan.' },
  { h: '4. Religion and gods' },
  'We have no texts, only images. Specialists (such as **Esther Pasztory**, **Karl Taube** and others) identify **recurring symbols** and give them provisional names. We do not know what they were called in Teotihuacan; the names used below come from the Aztecs, and the match is a hypothesis.',
  { tabela: { cab: ['Figure (study name)', 'Probable role', 'Where it appears'], linhas: [
    ['Great Goddess (sometimes “Spider Woman”)', 'Female deity linked to earth, water, fertility, creation, perhaps the city’s principal one', 'Murals of Tepantitla, monumental statue; Pyramid of the Moon'],
    ['Storm God (Tlaloc, Aztec name)', 'Rain, water, lightning, fertility; linked to war and sacrifice', 'Vessels, murals, Feathered Serpent Temple'],
    ['Feathered Serpent (Quetzalcoatl, Aztec name)', 'Power, renewal; linked to rule, sky and perhaps war', 'Feathered Serpent Temple'],
    ['War Serpent', 'Military symbol', 'Ciudadela; warrior decoration'],
    ['Netted Jaguar', 'Jaguar with a net of stars or water; linked to temples and rites', 'Murals of Tetitla and Techinantitla'],
    ['Old God (Huehueteotl)', 'God of fire, with a brazier on his back; one of the oldest in Mesoamerica', 'Braziers and sculptures'],
    ['Pulque God / Fat God', 'Linked to ritual intoxication (from agave) and abundance', 'Murals and ceramics'],
    ['The Flayed God (Xipe Totec, Aztec name)', 'Renewal of vegetation; sacrifice', 'Sculptures and figures']
  ] } },
  { img: 'teo-mural-tepantitla', leg: 'Mural of Tepantitla, traditionally called “Tlalocan” or “paradise of Tlaloc”, Teotihuacan.' },
  { img: 'teo-tlaloc-vaso', leg: 'Ceramic vessel with the figure of the storm god, Teotihuacan.' },
  { img: 'teo-braseiro', leg: 'Ceramic brazier (the so-called “theatre censer”) from Teotihuacan.' },
  { h: 'Sacrifice' },
  'Human sacrifice, associated with the dedication of great buildings, is a proven phenomenon in Teotihuacan (Feathered Serpent Temple, Pyramid of the Moon). In many cases the victims seem to have been **warriors** or **captives**, sacrificed by decapitation, heart extraction or other means, and buried with adornments. In addition, animals (pumas, eagles, snakes) were sacrificed and buried. The meaning of these acts, **politics, religion and cosmology mixed together**, is debated, and one should neither judge by present-day values nor take what is known of the Aztecs as a faithful mirror.',
  { img: 'teo-enterramento-serpente', leg: 'Conjectural reconstruction of a dedication burial beneath the Feathered Serpent Temple. AI-generated illustration.' },
  { h: '5. Mural painting' },
  'The **murals** of Teotihuacan are the best window onto its world. Painted on stucco, in **fresco** or tempera technique, with **red ochres**, **greens** and **blues** (and cinnabar red, a mercury mineral, among the elites), they show priests in procession, gods, animals and water scenes. The one at **Tepantitla** (“Tlalocan”) shows a water garden with figures swimming, playing and singing (the classic interpretation, by **Alfonso Caso**, is of a paradise of the rain god; today it is debated). At **Atetelco** there are coyotes and priests in red and black, and at **Tetitla** and **Techinantitla** the Great Goddess and jaguars appear.',
  { img: 'teo-mural-tetitla', leg: 'Mural painting at Tetitla, Teotihuacan' },
  { img: 'teo-mural-atetelco', leg: 'Mural painting at Atetelco, Teotihuacan' },
  { img: 'teo-jaguar-rede', leg: 'Mural painting of a netted jaguar, Teotihuacan' },
  { h: '6. Economy' },
  'The base was **agriculture**: **maize**, **beans**, **squash**, chillies, tomatoes, **amaranth**, prickly pear (nopal) and **agave** (maguey, from which pulque was made and fibres drawn). Supply relied on fields irrigated with canals and springs (and perhaps raised fields near the lake, debated). **Turkeys** and **dogs** were raised, and rabbits, deer and birds were hunted. There were no large livestock or draught animals, and no transport wheel.',
  'The great industry was **obsidian**: the city’s thousands of **workshops** produced blades, arrowheads, knives and ritual objects and exported them. The green obsidian of **Pachuca** was especially prized. Also made were pottery, **Thin Orange ware** (produced, according to most authors, in the Puebla region), figurines, objects of green stone, shells and hides. Merchants travelled in caravans of porters, and imported **cacao**, quetzal feathers, jade, cotton, shells and mica from distant regions.',
  { img: 'teo-mercado', leg: 'Conjectural reconstruction of a Teotihuacan market, 5th century AD. AI-generated illustration.' },
  { img: 'teo-oficina-obsidiana', leg: 'Conjectural reconstruction of a Teotihuacan obsidian workshop. AI-generated illustration.' },
  { img: 'teo-obsidiana', leg: 'Obsidian objects from Teotihuacan' },
  { img: 'teo-vaso-tripode', leg: 'Cylindrical tripod vessel, typical of Teotihuacan, with talud-tablero decoration.' },
  { img: 'teo-laranja-fino', leg: 'Thin Orange ware, produced in the Puebla region and traded with Teotihuacan.' },
  { h: '7. Writing, language and calendar' },
  'Teotihuacan has **no deciphered writing**. There are signs and symbols (painted on murals and ceramics, among them about thirty signs found at La Ventilla), and recent proposals (by epigraphers) about a possible writing or proto-writing, but **none has been confirmed**. The population used, like other Mesoamericans, a **260-day** calendar, and archaeologists have found **pecked crosses in circles** on floors and walls, perhaps tied to measurement, the calendar and the orientation of the city. The language is unknown (see “Who were they?”).',
  { h: '8. Food' },
  { lista: [
    '**Maize**, as **tortillas** and porridges, with the technique of **nixtamalisation** (cooking the maize in water with lime, which makes it more nutritious).',
    '**Beans, squash, chillies, tomato, amaranth, nopal.**',
    '**Turkeys, dogs, rabbits, deer**, fish and small animals; insects and larvae as a supplement.',
    '**Drinks:** **pulque** (fermented agave) and perhaps cacao, brought from the south.',
    '**Salt** and spices from the valley and the region.'
  ] },
  { img: 'teo-cozinha-milho', leg: 'Conjectural reconstruction of a Teotihuacan kitchen, with tortillas and nixtamal. AI-generated illustration.' },
  { h: '9. Clothing and adornment' },
  'The murals show men with **loincloths** and **capes** and women with **skirts** and a triangular garment over the shoulders (the *quechquemitl*); they were of cotton (traded) or agave fibre. Elites wore **huge feather headdresses**, green-stone ear spools, necklaces, bracelets and sandals. Warriors carried shields, darts and spear-throwers (atlatl), and martial dress with coyotes and serpents appears in the murals and at Tikal.',
  { h: '10. Music, dance and games' },
  'The murals show **priests singing** (with scrolls in front of the mouth, representing speech or song), **shell trumpets**, **flutes**, **drums**, **rattles** and **ceramic whistles**. No **ballgame** court like those of the Maya has been found within the city, although there are images that suggest it. The games and festivals of which we have any idea are ceremonial.',
  { h: '11. Science and technology' },
  { lista: [
    '**Talud-tablero architecture:** a vertical panel (tablero) over a sloping ramp (talud), the hallmark of Teotihuacan, later copied across Mesoamerica.',
    '**Lime and stucco:** the city used large quantities of burned lime for mortar, floors and stucco, with a heavy environmental impact (a lot of firewood).',
    '**Water and drainage:** canals, channelling of springs and rivers (such as the San Juan) and sewers in the apartment compounds.',
    '**Urbanism:** a grid layout with a single orientation.',
    '**Astronomy and calendar:** alignments and pecked crosses; a link to the Sun and to horizon observation, but without texts the astronomical readings are hypotheses.',
    '**No metal:** metallurgy reached Mesoamerica only later, from the west, and the city worked stone, bone and shell.'
  ] },
  { h: '12. War' },
  'Teotihuacan had no **walls**, which suggests confidence in its power, or the absence of nearby threats. But the **art of war** is present: warriors with **shields**, **darts**, **spear-throwers** and cotton armour, and the sacrifices of warriors. What the Maya cities tell us is that **warriors in Teotihuacan guise** were tied to changes of power. The real role of the army is debated.',
  { img: 'teo-mascara-pedra', leg: 'Stone mask in Teotihuacan style, National Museum of Anthropology, Mexico City.' }
];

const personalidades = [
  'Of Teotihuacan we know **no local name**. The figures below are those known from **Maya** sources (which speak of Teotihuacan), from **Aztecs and Spaniards** (who wrote centuries later) and from the **researchers** who revealed it. What is legend is marked.',
  { h: 'The anonymous rulers' },
  'We do not know the name, appearance or number of those who ruled. There are no portraits, thrones or identified royal tombs. It is the great absence of the city and one of the reasons why it is debated whether power was personal or collective.',
  { h: 'The Great Goddess' },
  'A central figure of the murals (for example at Tepantitla): a woman or goddess with a covered face and headdress, from whose hands water or riches flow. The art historian **Esther Pasztory** argued that she was the city’s principal deity, tied to water, earth and creation; the interpretation remains debated. We do not know her original name.',
  { h: 'Siyaj K’ak’ (“Fire is Born”)' },
  'A figure who, according to Maya inscriptions, reached **El Perú-Waka** and **Tikal** in January AD 378 “from the west”. The images associated with him are Teotihuacan. He was probably a general or envoy, but his status and role are debated. He was linked to changes of power at Tikal and Uaxactun.',
  { h: 'Spearthrower Owl' },
  'Conventional name (in Maya, *Atlatl Cauac*) of a figure whom Maya inscriptions call the **father of Yax Nuun Ayiin I** and a lord of Teotihuacan, or of a “house” of the city. Some see him as a **king** of the city; others think the name may designate a title or several people. He is depicted at Tikal and Uaxactun, and his real existence, like his power, is much debated.',
  { h: 'Yax Nuun Ayiin I (“First Crocodile”)' },
  'King of **Tikal** from AD 379, son of Spearthrower Owl according to the inscriptions. He was shown on Stela 31 in Teotihuacan dress and with a Tlaloc shield. His accession, a year after the death of the previous king, **Chak Tok Ich’aak I**, is the best-dated event in the relationship between the two cultures.',
  { h: 'Bernardino de Sahagún (c. 1499 – 1590)' },
  'Spanish Franciscan friar who, in Mexico, gathered from Aztec informants the **Florentine Codex**, an encyclopaedia of the Aztec world. It preserves the **legend of Teotihuacan**, where, at the beginning of the world, the gods **Nanahuatzin** and **Tecuciztecatl** threw themselves into the fire and became the Sun and the Moon. It is an **Aztec myth**, and not the history of Teotihuacan.',
  { h: 'Carlos de Sigüenza y Góngora (1645 – 1700)' },
  'Mexican scholar and scientist of the 17th century, one of the first to study the ruins and to dig there, c. 1675, searching for the origins of Mexico’s history.',
  { h: 'Leopoldo Batres (1852 – 1926)' },
  'Inspector-general of monuments of Mexico under Porfirio Díaz. He directed (1905–1910) the cleaning and restoration of the Pyramid of the Sun and the central axis, for the independence centenary. His interventions are now criticised as excessive and poorly documented, but they made the city known.',
  { h: 'Manuel Gamio (1883 – 1960)' },
  'Mexican anthropologist and archaeologist, a pupil of Franz Boas, who directed (1917–1922) a great study of the Teotihuacan valley that combined archaeology with the study of the present population and life of the valley. He excavated the **Ciudadela**. He is considered a founder of modern anthropology in Mexico.',
  { h: 'Alfonso Caso (1896 – 1970)' },
  'Mexican archaeologist, known for his work at Monte Albán. It was he who proposed reading the Tepantitla mural as the “**Tlalocan**”, paradise of the rain god, which became famous (and is now debated).',
  { h: 'Laurette Séjourné (1911 – 2003)' },
  'Franco-Mexican archaeologist and ethnologist. In the 1950s–60s she excavated the compounds of **Zacuala** and **Yayahuala** and described the **murals**. She advanced very bold religious interpretations, now criticised.',
  { h: 'Beatriz de la Fuente (1929 – 2005)' },
  'Mexican art historian, a specialist in pre-Hispanic art and **mural painting**. The Teotihuacan murals museum bears her name.',
  { h: 'René Millon' },
  'American archaeologist who directed, in the 1960s and 70s, the **Teotihuacan Mapping Project**: the systematic survey of the city that revealed the layout, the roughly two thousand apartment compounds and the population estimates. He established the phase chronology (Tzacualli, Miccaotli, etc.) still in use.',
  { h: 'George Cowgill, Saburo Sugiyama and Rubén Cabrera' },
  'Archaeologists who, from the 1980s, excavated the **Feathered Serpent Temple** (Cowgill, Sugiyama, Cabrera) and, in the 1990s–2000s, the **Pyramid of the Moon** (Sugiyama and Cabrera). Their discoveries of graves of sacrificed people changed the image of a “peaceful” Teotihuacan that was still current in the 1960s.',
  { h: 'Sergio Gómez Chávez' },
  'Mexican archaeologist who in 2003 discovered the tunnel beneath the Feathered Serpent Temple and has directed the “Tlalocan” project since. His excavations (from 2009) have gathered tens of thousands of objects.'
];

const legado = [
  { h: 'What they left us' },
  { lista: [
    '**The city itself:** the Avenue of the Dead, the pyramids of the Sun and the Moon and the Ciudadela, a UNESCO World Heritage Site since 1987.',
    '**The talud-tablero style:** it was imitated at Monte Albán, at Tikal, at Kaminaljuyu and in many other places.',
    '**Mural art:** a painting tradition that later influenced the art of Cacaxtla, of Xochicalco and of the Maya cities.',
    '**Obsidian and pottery:** objects found across Mesoamerica.',
    '**The gods:** the Great Goddess, the Storm God and the Feathered Serpent reappear, under other names, in later civilisations (Toltec, Maya, Aztec).',
    '**An idea of the city:** the first great planned city of the Americas, a reference of power, of the sacred and of urbanism for the peoples that followed.'
  ] },
  { h: 'Art' },
  'Teotihuacan art is **geometric, stylised and very disciplined**: stone masks with neutral faces and eyes of shell or obsidian, ceramic figures, tripod vessels and theatre censers, and above all **mural painting**. The **stone masks** (of andesite, basalt and other stones), perhaps used in funerals or as offerings, are its icon. Teotihuacan art shows little concern for individuality: there are no portraits, but types and symbols.',
  { img: 'teo-museu-sala', leg: 'Teotihuacan Hall of the National Museum of Anthropology, Mexico City.' },
  { h: 'Architecture: talud-tablero and ceremonial space' },
  'The **talud-tablero** (a ramp and a projecting panel, repeated in tiers) and the idea of a **ceremonial avenue** with aligned temples and pyramids are the great architectural hallmarks. The city has a sense of **order and repetition** (in contrast to the variety of the Maya cities), and this is one of its signatures.',
  { h: 'Why did it disappear? A debate' },
  'Teotihuacan did not “disappear”: it lost its ceremonial centre around **550** and its population dwindled over two centuries. What caused this is debated, and it is likely that several reasons coincided:',
  { lista: [
    '**Internal revolt:** the destruction concentrated on the temples and palaces of the Avenue of the Dead, with images deliberately smashed, suggests an attack on the elites or on the cult, from within the city.',
    '**External invasion:** this was the traditional explanation; it now has less support, because the damage does not look like that of a conquest (ordinary houses were spared).',
    '**Climate and famine:** the drought of the 530s (the link to volcanic eruptions is debated) and the signs of malnutrition in skeletons.',
    '**Inequality and exhaustion:** the weight of tribute, the pressure on firewood, water and soils (lime needed a lot of fuel) and a very unequal society.',
    '**Loss of networks:** the rise of new regional centres (Cholula, Xochicalco, Cacaxtla) and the decline of trade with the Gulf and the Maya.'
  ] },
  'None of these explanations is accepted by everyone, and today many speak of a **long process** rather than a sudden fall.',
  { h: 'The rediscovery of Teotihuacan' },
  'The city was never forgotten: **the Aztecs** visited it, and the Spaniards, after the conquest (1519–1521), described the pyramids. Scientific archaeology began in the 19th century and consolidated with **Batres** (1905–1910), **Gamio** (1917–1922), **Millon’s** map (1962–1973) and the excavations of the 1980s and of the tunnel (2003 onwards). Today new technologies (ground-penetrating radar, electrical resistivity tomography, isotope and DNA analyses) are changing what we know.',
  { img: 'teo-batres-restauro', leg: 'Pyramid of the Sun during Batres’s restoration, c. 1910, period photograph.' },
  { caixa: 'A note on the 20th century', texto: 'For a long time Teotihuacan was imagined as a **peaceful** city, governed by priests. The burials of sacrificed people and the warrior murals revealed by excavations from the 1980s on dispelled that idea. The site has also easily been tied to modern myths (extraterrestrials, lost civilisations). None of these has any archaeological basis: Teotihuacan was the work of people, with the means and ideas of their time.' },
  { caixa: 'Visiting', texto: 'The **Teotihuacan Archaeological Zone** lies about **50 km** north-east of Mexico City (buses leave from the Terminal Norte). Go early in the morning to avoid the heat and the crowds; bear in mind the altitude (over 2,000 m) and the lack of shade. In recent years climbing the pyramids has been **restricted**: check the rules before you go. Inside the site are the **Museo de la Cultura Teotihuacana** and the **Museo de los Murales Teotihuacanos “Beatriz de la Fuente”**. In Mexico City, the **Teotihuacan Hall** of the **National Museum of Anthropology** has the most important pieces. Outside Mexico, there are pieces in museums such as the **British Museum** and the **de Young** in San Francisco.' }
];

const quiz = [
  { p: 'Where was Teotihuacan?', op: ['In the Valley of Mexico', 'On the Yucatán peninsula', 'In the Nile valley', 'In the Andes'], certa: 0, exp: 'It stood in the Valley of Mexico, about 50 km north-east of present-day Mexico City.' },
  { p: 'Who gave the place the name “Teotihuacan”?', op: ['Its own inhabitants', 'The Aztecs, centuries later', 'The Spaniards', 'The Maya'], certa: 1, exp: 'It is an Aztec (Nahuatl) name, given to a city already in ruins; the original name is unknown.' },
  { p: 'What volcanic material was the basis of the city’s wealth?', op: ['Gold', 'Obsidian', 'Silver', 'Marble'], certa: 1, exp: 'The obsidian workshops and the trade in blades were the great industry; the green obsidian of Pachuca was highly prized.' },
  { p: 'What is the name given to the main axis of the city?', op: ['Sacred Way', 'Avenue of the Dead', 'Royal Road', 'Causeway of the Sun'], certa: 1, exp: 'The Aztecs called it the “Avenue of the Dead” because they thought the mounds were tombs.' },
  { p: 'What do we know about the language spoken in Teotihuacan?', op: ['It was Latin', 'It was Nahuatl, without doubt', 'It is unknown; there are several hypotheses', 'It was Maya'], certa: 2, exp: 'Nahua, Otomi, Totonac and Mixe-Zoquean have been proposed, but no hypothesis is demonstrated.' },
  { p: 'What is the largest building in Teotihuacan?', op: ['The Pyramid of the Sun', 'The Pyramid of the Moon', 'The Ciudadela', 'The Quetzalpapalotl Palace'], certa: 0, exp: 'The Pyramid of the Sun is about 225 m on a side and c. 65 m high.' },
  { p: 'In what year did Siyaj K’ak’, associated with Teotihuacan, arrive at Tikal?', op: ['AD 178', 'AD 378', 'AD 578', 'AD 778'], certa: 1, exp: 'According to Maya inscriptions he reached Tikal in January AD 378; the meaning of the event is debated.' },
  { p: 'What kind of housing was typical of the city?', op: ['Wooden houses on stilts', 'Stone-and-lime compounds around a courtyard', 'Tents', 'Caves'], certa: 1, exp: 'About 2,000 compounds, each holding 60–100 people, with high walls and a central courtyard.' },
  { p: 'What discovery was made in 2003 beneath the Feathered Serpent Temple?', op: ['A sealed tunnel with thousands of objects', 'A library of books', 'A royal tomb with a name', 'A submerged city'], certa: 0, exp: 'Sergio Gómez Chávez found a tunnel of about 100 m, sealed around AD 200, with objects and liquid mercury.' },
  { p: 'What building technique is a hallmark of Teotihuacan?', op: ['The true arch', 'Talud-tablero', 'The barrel vault', 'The dome'], certa: 1, exp: 'A vertical panel (tablero) over a ramp (talud), later copied in other regions.' },
  { p: 'Which Zapotec city of Oaxaca had relations with Teotihuacan?', op: ['Chichén Itzá', 'Monte Albán', 'Tula', 'Cholula'], certa: 1, exp: 'Teotihuacan had a neighbourhood of people from Oaxaca (Tlailotlacan), and Teotihuacan objects are found at Monte Albán.' },
  { p: 'What do the burials of sacrificed people found in the pyramids reveal?', op: ['That the city was entirely peaceful', 'That there was human sacrifice tied to dedicating temples', 'That the inhabitants were Christians', 'That there was no religion'], certa: 1, exp: 'The Feathered Serpent Temple and the Pyramid of the Moon contain graves of sacrificed people, which dispelled the image of a peaceful city.' },
  { p: 'Which explanation for the end of the ceremonial centre around 550 do many archaeologists now prefer?', op: ['An internal revolt or political collapse', 'A flood', 'A Roman invasion', 'A confirmed earthquake'], certa: 0, exp: 'The destruction concentrated on elite and cult buildings, suggesting an attack from within, although this is not proved.' },
  { p: 'Who directed the Teotihuacan Mapping Project, which mapped the city in the 1960s–70s?', op: ['Manuel Gamio', 'René Millon', 'Henri Mouhot', 'Leopoldo Batres'], certa: 1, exp: 'René Millon and his team recorded every building on the surface and established the phase chronology.' },
  { p: 'According to the Aztec myth, what happened at Teotihuacan?', op: ['The gods created the Fifth Sun', 'Tenochtitlan was founded', 'The Spaniards arrived', 'Writing was born'], certa: 0, exp: 'It is an Aztec myth, recorded by Sahagún; it is not the history of Teotihuacan.' }
];

export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };
