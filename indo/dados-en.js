// INDUS VALLEY — full English content. Same structure and same image slots as the Portuguese version (dados.js).
// Dates are approximate (radiocarbon and conventional archaeological chronology). BC = before Christ. Much of what is said about this civilisation is interpretation: the text marks what is fact, what is hypothesis and what is unknown.

const visao = [
  { caixa: 'In brief', texto: [
    'The **Indus Valley Civilisation** (also called the **Harappan Civilisation**, after the first site excavated) was one of the three great urban civilisations of the Bronze Age, alongside Egypt and Mesopotamia. Between c. 2600 and 1900 BC (the “Mature” phase) it spread over an area of more than half a million square kilometres in what is now Pakistan, north-west India and north-east Afghanistan, with over a thousand known sites and cities of tens of thousands of people.',
    'It is known for **gridded planned cities**, baked-brick houses with bathrooms and **covered drains**, wells and reservoirs, **standardised weights and measures**, and thousands of small **stone seals** carrying a script that **nobody can read**. It is also known for what is not clearly found: palaces, temples, royal tombs, portraits of rulers. We do not know what they called themselves, what language they spoke, who ruled them, or exactly why the cities emptied. This text always separates what is known from what is supposed.'
  ] },
  { img: 'ido-mapa-regiao', leg: 'Map of Mature Indus civilisation sites, c. 2600–1900 BC, with approximate distribution.' },
  { h: 'Where it was' },
  'The heart of the civilisation lay across the **alluvial plain of the Indus** and its tributaries (the Punjab), and a second basin that is now almost dry, the **Ghaggar-Hakra**, in north-west India and the Pakistani Cholistan. It also had outposts on the Makran and Gujarat coasts and a trading station in northern Afghanistan (Shortugai, on the Oxus river, near the lapis lazuli mines). Mohenjo-daro and Harappa, the two best-known cities, are in Pakistan (Sindh and Punjab); Dholavira, Lothal, Rakhigarhi and Kalibangan are in India.',
  'The name “Indus” comes from the river (Sanskrit *Sindhu*, “river”), which also gave “India” and “Hindu”. The inhabitants left no legible name for themselves. Some Indian scholars prefer “Indus-Sarasvati civilisation”, because of the Ghaggar-Hakra, which some identify with the Sarasvati river of the Vedic hymns. That identification is debated and politically charged, and most of the scientific community uses “Indus” or “Harappan”.',
  { img: 'ido-mohenjo-panoramica', leg: 'Mohenjo-daro ruins with the citadel mound and later Buddhist stupa.' },
  { h: 'When it existed' },
  'Archaeologists divide the history of this civilisation into phases, with approximate dates and boundaries that vary from region to region. The chronology rests mostly on radiocarbon dating; exact dates are always debated.',
  { tabela: { cab: ['Phase', 'Approximate dates', 'What marks it'], linhas: [
    ['Prehistory (Mehrgarh)', 'c. 7000 – 3300 BC (start debated)', 'First farming villages in Balochistan, with wheat, barley and cattle; pottery, beads, long-distance trade'],
    ['Early Harappan (Ravi, Kot Diji)', 'c. 3300 – 2600 BC', 'Villages and the first fortified towns; signs on pottery that may herald writing; regional growth'],
    ['Mature Harappan (Integration)', 'c. 2600 – 1900 BC', 'Planned cities, seals, script, standard weights, trade with Mesopotamia (Meluhha)'],
    ['Late Harappan (Localisation)', 'c. 1900 – 1300 BC', 'Gradual abandonment of the large cities and of the script; more rural settlement and shifts east and south'],
    ['Afterwards', 'after c. 1300 BC', 'Regional Late Bronze Age and Iron Age cultures; cities return to India only in the 1st millennium BC']
  ] } },
  { img: 'ido-cidade-reconstrucao', leg: 'Hypothetical reconstruction of a Mature Harappan city, c. 2400 BC. AI-generated illustration.' },
  { h: 'Who were they?' },
  'We do not know what they called themselves, what language they spoke or where they came from. The idea that a foreign population brought the civilisation has no support: local development, from Mehrgarh and the villages of Balochistan and the Indus, is well documented. The language is unknown. The candidates proposed (a language of the Dravidian family, an Indo-Aryan language, a language of the Munda family, or a now-extinct language with no relatives) are hypotheses, none demonstrated. It is most likely that several languages were spoken across so vast an area.',
  'Ancient DNA analysis is still scarce. The most-cited study, from 2019, analysed a single skeleton from Rakhigarhi and found no ancestry from the Central Asian steppe (which reached the subcontinent only later); that is a clue, but one individual does not represent a whole civilisation.',
  { h: 'Why they matter' },
  { lista: [
    '**Urbanism and sanitation:** planned cities, with gridded streets, houses with bathrooms and covered drains, at a time when almost no other city in the world had anything comparable.',
    '**Standardisation:** bricks of constant proportions (4:2:1), uniform weights and measures over a gigantic area, without coins.',
    '**An undeciphered script:** one of the greatest mysteries of archaeology. About 5,000 short inscriptions exist, but no reading is accepted.',
    '**A society with no visible king:** with no clear palaces or monumental tombs, political organisation is still debated.',
    '**Long-distance trade:** carnelian beads, lapis lazuli, ivory and copper reached Mesopotamia and the Gulf, and Mesopotamia called this region **Meluhha**.',
    '**An unexplained disappearance:** the cities emptied some 4,000 years ago, for causes still under study, but which do not include a destructive invasion.'
  ] },
  { caixa: 'What we do not know', texto: 'We cannot read the script. We know no name of a king, a god or a city (the names “Harappa” and “Mohenjo-daro” are modern). We do not know whether there was one state, several, or none. We do not know what each religious symbol meant. We do not know exactly why the cities declined. Everything we know comes from ruins, objects, skeletons, plants and from Mesopotamian texts that speak of a distant land called Meluhha.' },
  { caixa: 'The Indus Valley today', texto: 'Most sites are in Pakistan and India. **Mohenjo-daro** has been a UNESCO World Heritage Site since 1980, and **Dholavira** since 2021. The Indus is still the axis of a whole country, but the ruins are threatened by soil salts, floods and poor restorations. Only a small part of each city has been excavated, and every campaign still brings surprises.' },
  { img: 'ido-mehrgarh-ruinas', leg: 'Mud-brick ruins at Mehrgarh, Balochistan.' }
];

const linha = [
  'This timeline follows the history of the Indus Valley, from the first villages to the modern era of its rediscovery. Dates are approximate, and the oldest are the most uncertain; where there is debate, it is said.',
  { linha: [
    { d: 'c. 7000 BC (debated)', t: 'Mehrgarh: the first farming villages', x: 'In Balochistan (Pakistan), by the Bolan Pass, the archaeologist **Jean-François Jarrige** discovered the site of **Mehrgarh** in 1974: mud-brick houses, granaries with compartments, cultivated wheat and barley, sheep, goats and cattle. The start is traditionally placed at c. 7000 BC; recent dating suggests later dates for the first layers, and the discussion continues. Whether agriculture here arose locally or came from the Near East is still debated, and the most likely answer is a mixture.' },
    { d: 'c. 5500 – 3500 BC', t: 'Pottery, beads and trade', x: 'At Mehrgarh appear pottery, **terracotta female figurines**, turquoise beads, lapis lazuli (from Badakhshan, in Afghanistan) and sea shells. In some adult teeth, 7,500 to 9,000 years old, there are **holes made with flint drills**, one of the oldest pieces of evidence for dentistry in the world (2006 study). Copper objects appear before 3500 BC.' }
  ] },
  { img: 'ido-mehrgarh-aldeia', leg: 'Hypothetical farming village of Mehrgarh type, c. 6000 BC. AI-generated illustration.' },
  { img: 'ido-mehrgarh-figurina', leg: 'Female terracotta figurine from Mehrgarh.' },
  { linha: [
    { d: 'c. 3300 BC', t: 'Ravi phase: Early Harappan begins', x: 'At Harappa and other Punjab sites appear larger villages, characteristic painted pottery and **signs on vessels** that some regard as the first steps of the Indus script.' },
    { d: 'c. 2900 BC', t: 'Kalibangan: plough and town plan', x: 'In Rajasthan, **Kalibangan** preserves a **ploughed field** with crossed furrows, considered one of the oldest in the world (c. 2800 BC), and the plan of a fortified town.' },
    { d: 'c. 2800 – 2600 BC', t: 'Kot Diji phase: fortified towns', x: 'In Sindh, at **Kot Diji**, **Amri** and other sites, towns appear with walls, brick houses and pottery patterns that repeat over great distances.' },
    { d: 'c. 2600 BC', t: 'The Mature phase begins', x: 'Within a few generations, the cities of **Mohenjo-daro** and **Harappa** grow into planned cities, with bricks of uniform size, drains and standard weights. Archaeologists debate whether this was a sudden change, perhaps decided by an elite, or a slow consolidation. **Mehrgarh** is abandoned in favour of **Nausharo**.' },
    { d: 'c. 2500 BC', t: 'Urban peak and first contacts with Ur', x: 'In the royal tombs of **Ur** (Mesopotamia, c. 2600–2500 BC) are found **carnelian beads** of Indian type, some etched with white patterns by a chemical process. It is among the first proofs of trade between the two regions.' },
    { d: 'c. 2400 – 2300 BC', t: 'Lothal and the ports', x: 'At **Lothal** (Gujarat) a small city appears with a **bead workshop** and a large brick tank called a “dock”. It is a centre of production and exchange with the coast and the interior.' },
    { d: 'c. 2334 – 2279 BC', t: 'Sargon and the ships of Meluhha', x: 'An inscription of **Sargon of Akkad** boasts that the ships of **Meluhha, Magan and Dilmun** moored at his quay. Most specialists identify **Meluhha** with the Indus Valley Civilisation (very likely, but not demonstrated by an inscription that says so).' }
  ] },
  { img: 'ido-selo-shuilishu', leg: 'Akkadian cylinder seal of Shu-ilishu, interpreter of Meluhha; Louvre AO 22310, historical reproduction.' },
  { linha: [
    { d: 'c. 2200 BC', t: 'The “4.2 kiloyear event” and the Meluhha interpreter', x: 'Around this time, climate records from several regions show a **weakening of the monsoon and a prolonged drought**. It is also roughly the era (c. 2200–2000 BC, dating debated) of a Mesopotamian cylinder seal on which an “interpreter of Meluhha”, called **Shu-ilishu**, shows that there were people from the Indus (or interpreters of its language) in Mesopotamia. The link between the drought and the Indus civilisation, which still flourished for 300 years, is debated.' },
    { d: 'c. 2120 BC', t: 'Gudea of Lagash and the merchants of Meluhha', x: 'King **Gudea** of Lagash writes that he brings carnelian and gold dust from the land of Meluhha for his temple; during the **Ur III** period there was near **Girsu** a “village of Meluhha” with people from that land.' },
    { d: 'c. 1900 BC', t: 'End of the Mature phase', x: 'The script, seals and standard weights disappear; many cities shrink or are abandoned. There was no single day of the fall: it was a process of centuries that varied from region to region.' },
    { d: 'c. 1900 – 1300 BC', t: 'Late Harappan', x: 'Regional cultures appear (such as “Cemetery H” at Harappa and the Jhukar culture in Sindh), with more villages and fewer cities, and shifts east (Ganges-Yamuna) and south (Gujarat). The traditions of pottery, beads and agriculture continue.' },
    { d: 'c. 1760 BC', t: 'End of direct trade with Mesopotamia', x: 'The last known mention of **Meluhha** in Mesopotamia dates from around now (direct trade had already declined since the Ur III period); contact continues only through **Dilmun** (Bahrain) and **Magan** (Oman). Later the name “Meluhha” comes to refer to Nubia and Egypt, a sign that the memory of the Indus had been lost.' },
    { d: 'c. 1700 BC', t: 'Mohenjo-daro is abandoned', x: 'The great city of Sindh had been in decline for centuries (run-down quarters, undrained sewers) and by now was abandoned. There is no destruction layer from war.' },
    { d: 'c. 1500 BC', t: 'Indo-Aryan languages in north-west India', x: 'Around this time, groups speaking Indo-Aryan, known to us from the hymns of the **Rigveda**, move through the north-west of the subcontinent. **The Indus civilisation had already declined**: the “Aryan invasion” that supposedly destroyed it is an abandoned idea (see “The decline”).' },
    { d: 'c. 1300 BC', t: 'End of the Late Harappan tradition', x: 'The last identifiable traces of Indus material culture disappear or transform, giving way to the Iron Age cultures of northern India.' }
  ] },
  { h: 'Rediscovery' },
  { linha: [
    { d: '1826 – 1875', t: 'Masson and Cunningham at Harappa', x: 'The adventurer **Charles Masson** visits the ruins of Harappa in the 1820s. In 1853 and 1856 **Alexander Cunningham** passes through, and in 1875 publishes a seal with a “bull” and unknown signs, without grasping its importance. Meanwhile, British engineers use the bricks of the ruins as ballast for the Lahore–Multan railway, destroying much of the city.' },
    { d: '1921 – 1922', t: 'Sahni at Harappa, Banerji at Mohenjo-daro', x: '**Daya Ram Sahni** begins the excavation of Harappa in 1920–21. **Rakhal Das Banerji** works at Mohenjo-daro between 1919 and 1923 and finds seals like those of Harappa beneath a Buddhist stupa.' },
    { d: '20 September 1924', t: 'Marshall announces it to the world', x: 'The Director-General of the Archaeological Survey of India, **John Marshall**, announces in the *Illustrated London News* a “long-forgotten civilisation”. In the following weeks Assyriologists such as Sayce, Gadd and Sidney Smith recognise similar seals in Mesopotamian excavations, and the Indus civilisation is dated to c. 2500 BC and linked to the known world.' },
    { d: '1946 – 1947', t: 'Wheeler digs Harappa and proposes the “invasion”', x: '**Mortimer Wheeler** excavates the defences of Harappa (1946) and in 1947 suggests that the Aryans of the Rigveda, which celebrates Indra as “destroyer of forts”, destroyed the cities. It was a hypothesis: the data never supported it, as we shall see.' },
    { d: '1964', t: 'Dales and the “mythical massacre”', x: 'The archaeologist **George Dales** publishes “The Mythical Massacre at Mohenjo-daro”, showing that the skeletons cited by Wheeler came from different periods, with no destruction layer and no signs of battle.' },
    { d: '1974 – 1986', t: 'Mehrgarh and the origins', x: 'The mission of **Jarrige** excavates Mehrgarh and changes the history of the Indus: the urban civilisation had roots in a long local tradition, going back to a very old agriculture (at least the 6th millennium BC).' },
    { d: '1990 – 2021', t: 'Dholavira, Rakhigarhi and UNESCO', x: '**R. S. Bisht** excavates Dholavira (1990–2005): its water reserves and the ten-sign signboard make it famous, and UNESCO lists it in 2021. At Rakhigarhi, **Vasant Shinde** publishes in 2019 the first DNA from a person of an Indus city.' }
  ] }
];

const mapa = [
  'The Indus civilisation is known from **a thousand-odd sites** of the Mature phase, of which only a small share has been excavated. There are five recognised large urban centres (**Harappa, Mohenjo-daro, Dholavira, Ganweriwala and Rakhigarhi**) and many medium cities, towns, villages, ports and trading stations. The ancient names of all of them are unknown; the ones we use are those of the modern villages beside the ruins.',
  { img: 'ido-mapa-cidades', leg: 'Map of major Indus civilisation sites.' },
  { tabela: { cab: ['Site', 'Where today', 'Dates / size', 'What it is known for'], linhas: [
    ['Mohenjo-daro', 'Sindh, Pakistan', 'c. 2500–1700 BC; 250–300 ha; perhaps 40,000 inhabitants (a weak estimate)', 'Great Bath, citadel, drains, hundreds of wells; Priest-King; “Pashupati” seal'],
    ['Harappa', 'Punjab, Pakistan', 'c. 3300–1300 BC; c. 150 ha; up to c. 23,000 inhabitants', 'The site that gave the civilisation its name; the large “granaries”; cemeteries R37 and H'],
    ['Dholavira', 'Gujarat, India', 'c. 2650–1900 BC; c. 47 ha', 'City in three parts; reservoir system; ten-sign signboard; UNESCO 2021'],
    ['Rakhigarhi', 'Haryana, India', 'c. 2600–1900 BC; 80 to 350 ha (debated)', 'Possibly the largest site; the 2019 DNA; excavations still under way'],
    ['Ganweriwala', 'Cholistan, Pakistan', 'Mature phase; unexcavated', 'Large centre in the dry Ghaggar-Hakra valley, known only from survey'],
    ['Lothal', 'Gujarat, India', 'c. 2400–1900 BC', 'Bead workshop; “dock” (debated); ivory scale'],
    ['Kalibangan', 'Rajasthan, India', 'c. 2900–2000 BC', 'Ploughed field of c. 2800 BC; fire altars (debated); gridded city'],
    ['Chanhudaro', 'Sindh, Pakistan', 'Mature phase', 'Craftsmen’s quarter: beads, seals, shell'],
    ['Shortugai', 'Afghanistan', 'Mature phase', 'Trading station beside the lapis lazuli mines']
  ] } },
  { h: 'Harappa' },
  'Located in Pakistani Punjab, beside an old bed of the river Ravi, **Harappa** is the city that gave the civilisation its name. It was occupied for over two thousand years, from the villages of the Ravi phase (c. 3300 BC) to the Late phase, and in the Mature phase it covered c. 150 hectares and perhaps held about 23,000 people. The site has several mounds: **AB** (the citadel, with public buildings), **E**, **F** and others. It was badly damaged in the 1850s, when the builders of the Lahore–Multan railway used its bricks as ballast.',
  'Finds include steatite seals, skeletons from two cemeteries (**R37**, of the Mature phase, and **H**, of the Late phase), workshops and a series of brick platforms that Wheeler called “granaries”. Since 1986 the **Harappa Archaeological Research Project** (directed by Richard Meadow and Jonathan Mark Kenoyer) has used modern methods, and its conclusion is that urban life was more complex and less “uniform” than was thought.',
  { img: 'ido-harappa-ruinas', leg: 'Baked-brick walls at Harappa.' },
  { h: 'Mohenjo-daro and the Great Bath' },
  'The modern name **Mohenjo-daro** means, in Sindhi, “mound of the dead” (the usual translation, but disputed); the ancient name is unknown. It was built c. 2500 BC and abandoned around 1700 BC. It has a **citadel** on a raised mound (c. 12 m high) and a **lower town** with straight streets. The city may have had tens of thousands of inhabitants, but that estimate is weak, because only part of the city has been excavated and the water table prevents digging the oldest layers.',
  'Its most famous monument is the **Great Bath**: a brick tank c. 12 m long, 7 m wide and 2.4 m deep, with stairs at both ends, lined with bitumen (asphalt) to make it watertight and surrounded by rooms and corridors. The name “Bath” is modern. It is natural to think of ritual bathing (as in later Indian temples), but **there is no proof**: it may have been a ceremonial tank, a public bath or something else. Beside it stands a large building of blocks that Wheeler called a “granary”, an interpretation that researchers such as Kenoyer doubt because no grain was found. Marshall called another building the “College of Priests”, with no proof of its function.',
  { img: 'ido-grande-banho', leg: 'The Great Bath at Mohenjo-daro.' },
  { img: 'ido-grande-banho-uso', leg: 'Hypothetical scene at the Great Bath of Mohenjo-daro, c. 2500 BC. AI-generated illustration.' },
  { h: 'Dholavira, the city of water' },
  'On **Khadir Bet**, an island in the Rann of Kutch (Gujarat), **Dholavira** was excavated by **R. S. Bisht** between 1990 and 2005 (the site had been identified by J. P. Joshi in 1967–68). It covered c. 47 hectares and had a unique plan: **citadel, middle town and lower town**, each with its own wall, in a design of geometric proportions. In an arid climate, with salt water all around, its inhabitants built about **sixteen reservoirs** cut into the rock or built of brick, linked by channels and by dams across two seasonal streams.',
  'At the north gate was found a **signboard** with **ten large Indus signs** (c. 37 cm high each, in gypsum on wood that has decayed), one of the longest and most visible inscriptions known. There is also a large rectangular open space called the “stadium” (the name is modern; the function, perhaps ceremonial, is unknown). It has been a UNESCO World Heritage Site since 2021.',
  { img: 'ido-dholavira-reservatorio', leg: 'Reservoir at Dholavira.' },
  { img: 'ido-dholavira-reconstrucao', leg: 'Hypothetical reconstruction of Dholavira, c. 2300 BC. AI-generated illustration.' },
  { h: 'Lothal and the “dock”' },
  'Excavated by **S. R. Rao** (Archaeological Survey of India) from 1955 to 1960, **Lothal** (Gujarat) is a small city but rich in objects: a **bead workshop** of carnelian and steatite, seals (including one of Persian Gulf type), and an **ivory scale** with divisions of c. 1.7 mm. Its large rectangular brick tank (c. 215 × 35 m) was interpreted by Rao as the **dock** of a port linked to the Sabarmati river. Other researchers (Leshnik, Yule) think it was an **irrigation reservoir**, because the entrance seems too narrow for ships; marine microfossils (foraminifera) in the sediments have been cited in favour of the dock, but the discussion is unsettled.',
  { img: 'ido-lothal-doca', leg: 'The brick basin at Lothal, traditionally interpreted as a dock; interpretation debated.' },
  { img: 'ido-lothal-reconstrucao', leg: 'Hypothetical boat and harbour activity at Lothal, c. 2300 BC; the dock interpretation is debated. AI-generated illustration.' },
  { h: 'Rakhigarhi and Kalibangan' },
  '**Rakhigarhi** (Haryana, c. 150 km north-west of Delhi) is described by the Archaeological Survey of India as the **largest site** of the civilisation, with 300 to 350 hectares in seven mounds. Many archaeologists reckon only 80 to 100 hectares for the Mature-phase city, and others think the mounds were separate clusters. Excavations led by Amarendra Nath (1997–2000), Vasant Shinde (2011–2016) and new teams (since 2021) found phases from pre-Harappan to Mature, dozens of burials, and the **2019 DNA**. Only a small part of the site has been excavated.',
  '**Kalibangan** (“black bangles”, in Hindi, from the terracotta bangles found there) lies beside the bed of the Ghaggar, in Rajasthan. It was identified as a Harappan site by Amalananda Ghosh (1953) and excavated by B. B. Lal and B. K. Thapar (1960–1969). It has a **ploughed field** with crossed furrows from the Early phase, a gridded city with citadel and lower town, and structures with ash pits that some call **fire altars** (others see ovens or domestic hearths).',
  { h: 'Other sites' },
  '**Ganweriwala**, in Cholistan, is one of the great centres but has never been excavated. **Chanhudaro**, in Sindh, had workshops for beads, shell and seals. **Shortugai**, in northern Afghanistan, looks like a Harappan trading station beside the lapis lazuli mines of Badakhshan. On the coasts of Makran and Gujarat there are small port settlements (such as Sutkagen-dor and Sotka-koh), and in Gujarat there are sites such as Surkotada and Kuntasi.',
  { h: 'A planned city' },
  'What most impresses in the large cities is the **plan**. At Mohenjo-daro and Harappa the main streets, 6 to 10 metres wide, cross almost at right angles, oriented roughly to the cardinal points; between them, narrow lanes. The city divides into two parts: the **citadel**, higher, with public buildings, and the **lower town**, of houses. The bricks, baked or unbaked, follow the proportion **4:2:1** (about 28 × 14 × 7 cm) throughout the civilisation, from Afghanistan to Gujarat. Who decided this plan and how it was imposed, we do not know.',
  { img: 'ido-planta-mohenjo', leg: 'Hypothetical isometric scheme of an Indus city; not a scaled archaeological plan. AI-generated illustration.' },
  { h: 'Water, wells and drains' },
  'Mohenjo-daro had **hundreds of wells** (more than 700 are estimated, perhaps one for every few houses), of brick with a round mouth. Many houses had a **bathroom** with a brick floor, connected by a clay pipe to **covered drains** that ran under the streets and carried the water to cesspits or to the river, with inspection openings for cleaning. It is one of the oldest and most elaborate sanitation systems of the ancient world. The houses turn their backs on the street (no windows facing out), which gave privacy and protection from heat and dust.',
  { img: 'ido-drenagem-mohenjo', leg: 'A street near the stupa mound at Mohenjo-daro; the photo does not identify a particular drain.' },
  { img: 'ido-poco-mohenjo', leg: 'Brick well at Mohenjo-daro.' },
  { h: 'The trade routes' },
  'The cities were linked by rivers, by land tracks and by sea routes. To the **north and west**: lapis lazuli from Badakhshan (Afghanistan), turquoise and copper from the Iranian plateau and Oman. To the **east and south**: copper from Rajasthan (Khetri), shells and carnelian from Gujarat, gold from southern India. By the **Persian Gulf**: contact with **Dilmun** (Bahrain), **Magan** (Oman) and Mesopotamia. Boats and ox carts carried the goods. What the Indus people received in return (wool, silver, tin, oils?) left few traces.',
  { img: 'ido-rotas-comercio', leg: 'Schematic map of indicative routes between the Indus, Persian Gulf and Mesopotamia; cartographic drawing without modern borders.' }
];

const sociedade = [
  { h: '1. Political organisation: an enigma' },
  'Who ruled the Indus? **We do not know.** There are no inscriptions that mention kings; no portraits of rulers; no palaces or royal tombs identified with certainty. The **uniformity** (the same bricks, weights, seals and plans over thousands of kilometres) suggests strong coordination, but how it was achieved is debated. The main hypotheses are:',
  { lista: [
    '**A single state**, with its capital at Mohenjo-daro or Harappa (the oldest idea, from Piggott and Wheeler);',
    '**Several states** or city-states, each with a centre (Mohenjo-daro, Harappa, Dholavira, Ganweriwala, Rakhigarhi);',
    '**An organisation without a king**, in which power was shared among merchants, lineage chiefs, priests and city councils;',
    '**A network of groups of craftsmen and merchants** who shared rules, without a political centre.'
  ] },
  { img: 'ido-selo-unicornio', leg: 'Indus steatite unicorn seal, Indian Museum, Kolkata.' },
  { caixa: 'And the weapons and palaces?', texto: 'It has been said that the Indus civilisation was “peaceful”. There are indeed few signs of **organised warfare**: few weapons (arrowheads, spears, copper or stone axes and maces exist, but in modest numbers), no battle scene in art and no destruction layer. But there are **walls, towers and gates** in almost every city (which may protect against floods, thieves, cattle or enemies) and **trauma** in some skeletons (at Harappa, for example). The prudent conclusion is that there was violence, but that war was not the centre of their public image. And the absence of palaces and temples may be a real absence or just our difficulty in recognising them: public buildings may lie among those the excavations have not yet reached.' },
  { h: '2. Social classes' },
  'We know little. From the houses (of widely varying size, but without the large gap seen in other civilisations), the craftsmen’s quarters, access to luxury objects and the scarce grave goods, there seem to have been **farmers, herders, specialised craftsmen (potters, bead-makers, metalworkers, shell-workers), merchants and an elite**, but with a less visible inequality than in Mesopotamia or Egypt. There is no proof of slavery, nor of castes (the idea that the Hindu caste system comes from the Indus is a projection, with no support in the data). Nor is there proof of the status of women: the terracotta figures are mostly female, but that says nothing about power.',
  { h: '3. Religion: what is seen and what is imagined' },
  'Without legible texts, religion is **the most speculative part**. No temple has been identified with certainty, no cult statue, no name of a god. What there are, are **symbols and figures**, which have often been interpreted in the light of later India, a risky comparison: tracing Indus symbols to Hinduism can mislead, because nearly 1,500 years separate the two.',
  { tabela: { cab: ['Figure or symbol', 'Where it appears', 'Proposed interpretations', 'Certainty'], linhas: [
    ['Seated horned figure (“Pashupati”)', 'Seal from Mohenjo-daro', 'Proto-Shiva (Marshall, 1931); buffalo god; human figure with headdress; shamanic ritual', 'Very low'],
    ['Female terracotta figures', 'Many sites, from Mehrgarh', '“Mother goddess” of fertility; toys; votive offerings; images of real women', 'Low'],
    ['The “unicorn” (one-horned animal)', 'A large share of the seals', 'Mythical animal; clan or totem; bull seen in profile; constellation', 'Unknown'],
    ['Tree (pipal) and figures among branches', 'Seals', 'Tree worship; spirits', 'Medium-low'],
    ['Humped bull (zebu)', 'Seals, figurines', 'Strength, wealth in cattle; sacred animal', 'Low'],
    ['Ring stones and conical stones', 'Mohenjo-daro', 'Marshall saw “linga” and “yoni”; many doubt it today', 'Very low'],
    ['Structures with ash pits (“fire altars”)', 'Kalibangan, Lothal', 'Fire rites; ovens or hearths', 'Low'],
    ['Great Bath', 'Mohenjo-daro', 'Ritual bathing', 'Hypothesis']
  ] } },
  { img: 'ido-selo-pashupati', leg: 'The so-called Pashupati seal, National Museum, New Delhi; interpretation debated.' },
  { img: 'ido-deusa-mae', leg: 'Female Indus terracotta figurine, Lahore Museum; the mother-goddess interpretation is uncertain.' },
  { h: 'Death' },
  'The dead were normally **buried**, laid out and with almost no offerings (a few vessels, bangles or copper mirrors), in cemeteries outside the city, such as **R37** at Harappa. Burials at Mohenjo-daro are almost unknown, which is a mystery (perhaps there was cremation or other rites that left no traces). In the Late phase, **Cemetery H** at Harappa has secondary burials in urns painted with peacocks and other motifs. There are no tombs with treasures as at Ur or in Egypt: the idea of a “civilisation without a cult of great dead” comes from this absence.',
  { img: 'ido-enterro', leg: 'Hypothetical burial in an Indus cemetery, c. 2400 BC. AI-generated illustration.' },
  { h: '4. Economy and agriculture' },
  'The economy rested on **two-season agriculture**: wheat, barley, peas, lentils, chickpeas and mustard in winter, and millets, sesame and **cotton** in summer (in some areas, rice). They kept **humped cattle (zebu), buffalo, sheep and goats**; there were dogs, and the horse is, at the least, rare (the supposed horse finds are much disputed). We do not know exactly how they irrigated: there are no clear irrigation canals, and river floods, reservoir water and monsoon rain sufficed in many places.',
  { img: 'ido-agricultura', leg: 'Hypothetical farming on the Indus plain, c. 2400 BC. AI-generated illustration.' },
  '**Craftsmanship** was of a high level and very specialised (see below). Trade was done mostly by **barter**, with standard weights and seals; **there are no coins** nor signs of money. Goods circulated by rivers, roads and by sea to Meluhha.',
  { img: 'ido-mercado', leg: 'Hypothetical market in an Indus city, c. 2400 BC. AI-generated illustration.' },
  { h: '5. Writing and seals: the great mystery' },
  'About **5,000 inscriptions** exist, almost all on **steatite seals** (small square plaques of 2 to 4 cm, with an animal and a few signs), but also on pottery, tablets, copper objects, bangles and tools. Between **400 and 600 different signs** are known (the figures vary depending on how variants are counted). The average inscription has **about five signs**, and the longest do not reach forty. The Dholavira signboard, with ten signs, is one of the longest in large format. The script was generally read **from right to left** (signs get crowded on the left when space runs out). About 90% of the inscriptions have been found at sites in Pakistan.',
  { img: 'ido-selos-escrita', leg: 'Indus seals and script signs, British Museum.' },
  { img: 'ido-dholavira-letreiro', leg: 'Modern graphic rendering of the ten signs from the Dholavira signboard.' },
  { h: 'Why it is not deciphered' },
  { lista: [
    '**The inscriptions are extremely short.** There are no long texts like the clay tablets of Mesopotamia: five signs are not enough to study grammar.',
    '**There are no bilingual texts.** There is no Indus “Rosetta”, that is, a text also written in a language we know.',
    '**The language is unknown.** Dravidian (the hypothesis of Parpola and Mahadevan, the most popular), Indo-Aryan, Munda, or an extinct language: none is proven.',
    '**It is not known whether it is writing in the full sense.** In 2004, Farmer, Sproat and Witzel argued that the signs would be symbols of families, gods or groups, without recording a spoken language. Others (such as Rao, Yadav and other authors) answer with statistical analyses showing regularities similar to those of languages. The debate continues.',
    '**Many false “decipherments”.** Dozens have been published, with no general acceptance. In 2025, the government of the Indian state of Tamil Nadu announced a prize of one million dollars for anyone who deciphers it convincingly.'
  ] },
  { h: '6. Home and family' },
  'Houses were of **baked brick**, with a **central courtyard** and rooms around it, and sometimes **two storeys**, with a brick staircase and a flat roof. They ranged from small two-room houses to large mansions. A bathroom and a well were common. About the **family** there is no direct evidence: we do not know whether marriages were arranged, how many people lived in each house or how property was inherited.',
  { img: 'ido-casa-indo', leg: 'Indus courtyard house; hypothetical reconstruction, c. 2400 BC. AI-generated illustration.' },
  { h: '7. Food' },
  'They ate **flatbread** (baked in clay ovens), cereal porridges, pulses, vegetables, fruits (dates, melons, grapes), **meat** of cattle, sheep and goat, **fish** (also dried) and fowl. Studies of starch grains at Farmana (Haryana) point to the use of **ginger, turmeric and garlic**, which suggests a spiced cuisine, though the subject is still debated. Dairy consumption is likely (perforated vessels may have served for curdling). No alcoholic drinks are known with certainty.',
  { h: '8. Clothing and jewellery' },
  'Textiles were of **cotton** (grown in the subcontinent since at least the 4th millennium BC: remains of thread and cloth have been found, for example, at Mohenjo-daro) and of wool. Figurines show simple clothes: cloths around the waist, skirts and mantles (that of the Priest-King has a trefoil pattern, with traces of red paint). Hairstyles were elaborate, with buns, braids and fan-shaped headdresses on female figures. Jewellery was a strong point: **necklaces, armlets, shell bangles, rings and headbands**, of carnelian, steatite, faience and gold, and **copper mirrors** and make-up sticks (kohl).',
  { img: 'ido-contas-cornalina', leg: 'Indus carnelian beads found at Susa, Louvre.' },
  { h: '9. Music and games' },
  'There are few traces of **music**: terracotta rattles and whistles (some in the shape of birds), and possibly drums, but no certain instrument. The bronze **Dancing Girl** suggests dance, but it is only a suggestion. There were **games**: cubic dice, pieces and boards, but the rules are unknown. Children had terracotta **toys** (animals with movable heads, dolls, ox carts and wheeled carts).',
  { img: 'ido-carrinho-boi', leg: 'Harappan terracotta figurines and toy models, including a cart, Brooklyn Museum, c. 2500 BC.' },
  { h: '10. Science, measures and medicine' },
  'The clearest proof of mathematical knowledge is the **weights**: cubes of **chert** in regular series (1, 2, 4, 8, 16, 32, 64, and then decimal multiples), with a unit of about 13.7 g (the most-cited value, with a margin). They are found at every site, from Lothal to Harappa. Length was measured with **rulers** of ivory and shell (at Lothal, the ivory scale has divisions of c. 1.7 mm) and the constant proportion of the bricks shows a system of measurement. There are no mathematical tablets or scientific texts, and we do not know how they counted. At **Mehrgarh** (7th–5th millennia BC) there is the oldest evidence of dentistry, with molars drilled by flint drills.',
  { img: 'ido-pesos', leg: 'Cubical Harappan stone weights, National Museum, New Delhi.' },
  { h: '11. Technology' },
  { lista: [
    '**Baked brick** fired in kilns above 1000 °C, in large quantities, with equal proportions throughout the civilisation.',
    '**Metals:** copper, bronze (with tin, arsenic and lead), lead, silver and gold; **lost-wax casting** (as in the Dancing Girl). Copper came mostly from Rajasthan and Oman.',
    '**Beads:** the most refined craft. **Carnelian** ones were heated, drilled with hard drills and, in some cases, etched with **white patterns** by chemical treatment; **steatite** ones were made by the thousand, very small, and fired to harden.',
    '**Faience** (glazed quartz paste), **shell**, ivory, and red pottery painted black, wheel-made.',
    '**Transport:** wheeled carts drawn by oxen (terracotta models; wheel ruts in streets), river and sea boats (shown on seals and models).',
    '**Water and sanitation:** wells, bathrooms, drains, reservoirs and dams (Dholavira).'
  ] },
  { img: 'ido-oficina-contas', leg: 'Carnelian bead workshop; hypothetical scene, c. 2300 BC. AI-generated illustration.' },
  { h: '12. Trade with Mesopotamia: Meluhha' },
  'The scribes of Mesopotamia, from Sargon (c. 2334 BC), speak of **Meluhha**, “the land from which” came carnelian, lapis lazuli, ivory, rare woods, gold and exotic animals. Most specialists identify **Meluhha with the Indus Valley**, because of the products and the finds. There are **Indus seals** at Ur, Kish, Susa, Babylon and Bahrain (a few dozen in all), Indian-type weights in the Gulf, **etched carnelian beads** in the tombs of Ur (c. 2600–2500 BC) and, at Lagash, a **“village of Meluhha”** in the time of Ur III. King Gudea (c. 2120 BC) says that the men of Meluhha came to his temple. Indus merchants travelled by **Dilmun** (Bahrain) and **Magan** (Oman), which served as staging posts. Direct trade declines from the Ur III period, and the last known mention of Meluhha is c. 1760 BC.',
  { img: 'ido-barco-meluhha', leg: 'Hypothetical arrival of a Meluhha ship in Mesopotamia, c. 2200 BC. AI-generated illustration.' }
];

const personalidades = [
  'The Indus civilisation **left us no name**: no king, no priest, no merchant. We have no Gilgamesh or Hammurabi. The “figures” that follow are therefore of two kinds: **the two most famous sculptures**, which seem to represent people (but without a name), and **the researchers who discovered and interpreted this civilisation**.',
  { h: 'The “Priest-King”' },
  'A steatite statuette of 17.5 cm, found at Mohenjo-daro in 1925–26 (K. N. Dikshit). It shows a bearded man with half-closed eyes, a band on his head, an armband and a mantle over the left shoulder, decorated with trefoils and circles that bore red paint. The name is modern: Mackay called it “priest”, Marshall “priest-king”, and Wheeler fixed “Priest-King”. **There is no proof** that he was a priest, a king or even a real man; they may be ancestors or lineage chiefs. It is in the National Museum of Pakistan, in Karachi.',
  { img: 'ido-sacerdote-rei', leg: 'The so-called Priest-King statuette from Mohenjo-daro; the title is conventional, not a verified identity.' },
  { h: 'The “Dancing Girl”' },
  'A bronze statuette of c. 10.5 cm, made by the lost-wax method and found at Mohenjo-daro in 1926. It shows a naked young woman, her left arm loaded with bangles, a necklace, her hair tied up and her right hand on her hip. We call her “Dancing Girl” because of the pose, but that is an impression: she may be a dancer, a cult figure or something else. She is in the National Museum in New Delhi, and some argue that she should be in Pakistan, like the Priest-King.',
  { img: 'ido-dancarina', leg: 'Bronze Dancing Girl from Mohenjo-daro, National Museum, New Delhi.' },
  { h: 'Charles Masson and Alexander Cunningham' },
  '**Charles Masson** (pseudonym of James Lewis, 1800–1853) was a deserter from the British army, then an explorer and collector; he visited Harappa in the 1820s and described the ruins. **Alexander Cunningham** (1814–1893), first Director-General of the Archaeological Survey of India, was at Harappa in 1853 and 1856 and, in 1875, published one of the Indus seals (with a bull and unread signs). He thought it was of later origin and did not realise it was a civilisation, but he was the first to publish a Harappan seal.',
  { h: 'Daya Ram Sahni and Rakhal Das Banerji' },
  '**Daya Ram Sahni** (1879–1939) excavated Harappa from 1920–21. **Rakhal Das Banerji** (1885–1930), an archaeologist from Bengal, visited Mohenjo-daro in 1919 and returned in 1922–23, in search of a Buddhist stupa, and found seals identical to those of Harappa. He was the link between the two cities, to which Marshall gave the public outcome. Only later was his role fully recognised.',
  { h: 'John Marshall' },
  'The English archaeologist **John Marshall** (1876–1958), Director-General of the Archaeological Survey of India (1902–1928), recognised the importance of the finds and announced the discovery in the *Illustrated London News* on 20 September 1924. He directed the excavation of Mohenjo-daro and published the great study of 1931. His reading of the “Pashupati” seal as “proto-Shiva” marked the study of Indus religion, but is now much contested.',
  { img: 'ido-marshall', leg: 'Commemorative image associated with archaeologist Sir John Marshall at Taxila Museum.' },
  { h: 'Ernest Mackay' },
  'The English archaeologist **Ernest Mackay** (1880–1943) directed the excavations of Mohenjo-daro in 1926–1931 and then those of Chanhudaro (1935–36). He found the “Pashupati” seal (1928–29) and the “Dancing Girl”. He was among the first to note the link between the Indus and Mesopotamia, and wrote the first book on “the Indus civilisation” for the general public (1935).',
  { h: 'Mortimer Wheeler' },
  'The English archaeologist **Mortimer Wheeler** (1890–1976), Director-General of the Archaeological Survey of India (1944–48), brought rigour to excavation by layers and dug at Harappa (1946). He was also the author of the “Aryan invasion” theory (1947), which **is now abandoned**: Dales and others showed that the skeletons did not come from a massacre. He remained, even so, the great populariser of this civilisation, and his 1953 book is a classic.',
  { img: 'ido-wheeler', leg: 'Sir Mortimer Wheeler, photograph.' },
  { h: 'George Dales' },
  'The American archaeologist **George F. Dales** (1927–1992) published in 1964 “The Mythical Massacre at Mohenjo-daro”, showing that the skeletons Wheeler had used for his hypothesis came from different layers, with no signs of destruction. He excavated Mohenjo-daro in 1964–65 and Balakot. His article is an example of how archaeology corrects its own ideas.',
  { h: 'Jean-François Jarrige' },
  'The French archaeologist **Jean-François Jarrige** directed the excavation of **Mehrgarh** from 1974, with his wife **Catherine Jarrige**. His discoveries showed that the Indus civilisation had deep local roots and that agriculture in the subcontinent was very old.',
  { h: 'Iravatham Mahadevan' },
  '**Iravatham Mahadevan** (1930–2018), an Indian civil servant and epigraphist, published in 1977 *The Indus Script: Texts, Concordance and Tables*, the reference catalogue of signs and inscriptions, and argued for a Dravidian reading of the script. He did not decipher it, but gave every scholar a working base.',
  { h: 'Jonathan Mark Kenoyer' },
  'The American archaeologist **Jonathan Mark Kenoyer**, of the University of Wisconsin–Madison, has co-directed the excavations at Harappa since 1986 and has studied how beads, seals, shell and metals were made. The current view of a varied urban society, with specialised craftsmen and trade networks, and with shared power, owes much to him.'
];

const legado = [
  { h: 'What they left us' },
  { lista: [
    '**Urbanism and sanitation:** the idea of a planned city, with sanitation for all, reappears only more than a thousand years later in other civilisations.',
    '**Standardisation:** bricks, weights and measures equal across a whole civilisation, without a visible imposition by a king.',
    '**Craftsmanship:** carnelian and steatite beads, faience, shell, copper and bronze, painted pottery. The agate and carnelian bead industry of **Khambhat** (Gujarat) is today a distant heir of this tradition.',
    '**Agriculture and animals:** cotton, the zebu, the buffalo and ploughing are part of the agricultural heritage of the subcontinent, and many everyday objects (ox carts, pots, toys) have direct descendants.',
    '**A fascinating enigma:** the unread script and the absence of kings continue to feed researchers, fiction and controversy.'
  ] },
  { caixa: 'Continuity or break?', texto: 'It is common to say that Indus symbols (seated figure, tree, bull, some stones) were the origin of Hinduism and other Indian traditions. It is **possible, but not proven**: the script cannot be read, Indus religion is not documented, and some 1,500 years passed before the first Indian texts. What can be said is that many material elements (agriculture, crafts, pottery forms) passed from the Indus civilisation to the following cultures, and that the population did not “disappear”.' },
  { h: 'Art' },
  'Indus art is, in general, **small and discreet**: steatite seals with animals engraved with great finesse (the “unicorn”, the humped bull, the elephant, the rhinoceros, the tiger), terracotta figurines, little stone sculpture (the “Priest-King”) and a few in bronze (the “Dancing Girl”), jewellery and pottery. What is missing is the monumental sculpture, the battle reliefs and the royal stelae so abundant in Mesopotamia and Egypt.',
  { h: 'Architecture' },
  'Indus architecture is **functional**: walls, courtyard houses, tanks, wells, reservoirs and drains, with no recognisable palaces or temples. The Great Bath and the reservoirs of Dholavira are the most prestigious works. At Dholavira there are also blocks of dressed stone (instead of brick) and monumental gates.',
  { h: 'The rediscovery of the Indus civilisation' },
  'The Indus civilisation was **forgotten for almost 4,000 years**: there is no memory of it in later Indian traditions, as far as we know. It was rediscovered little by little, between 1826 (Masson) and 1924 (Marshall), and then through the excavations of the Archaeological Survey of India and, after 1947, of Pakistani and Indian archaeologists and foreign teams. The Partition of India in 1947 left most of the large sites in Pakistan and led Indian archaeology to look for others (Kalibangan, Lothal, Dholavira, Rakhigarhi). The sculptures of Mohenjo-daro were divided between the two countries, and there is still debate about where the “Dancing Girl” should be.',
  { img: 'ido-escavacao', leg: 'Mohenjo-daro excavations in 1924; historical photograph, author unidentified in Commons.' },
  { img: 'ido-selo-ur', leg: 'Indus steatite seal, British Museum 1932,0308.1, bought in Baghdad; an Iraqi findspot is probable, but Ur is not established.' },
  { h: 'The decline: what is known and what is not' },
  'Around 1900 BC the large cities begin to lose population; the script, seals and standard weights disappear; links with Mesopotamia and the Gulf cease; life becomes more **rural and regional**. **There was no sudden fall and no destruction by war.** The main hypotheses are:',
  { lista: [
    '**Climate.** The monsoon weakens from c. 2200 BC (the “4.2 kiloyear event”), with prolonged droughts, shown by stalagmites and lake sediments. Flood agriculture, the basis of the cities, was put at risk, and the population probably moved to wetter areas, to the east and south.',
    '**Rivers.** The **Ghaggar-Hakra** (the Sarasvati, for some) seems to have been a monsoon-fed river rather than a glacier-fed one (Giosan et al., 2012), and it dried up, leaving the cities on its banks without water. There is still debate about whether the Sutlej and Yamuna changed course at the time; it is a debated and political topic. On the Indus, shifts of channel and floods may have hit Mohenjo-daro.',
    '**Trade.** The end of links with Mesopotamia (which was also changing) may have reduced the wealth of craftsmen and merchants.',
    '**Many causes.** Today most researchers think of a **combination of causes** (drought, rivers, fall in trade, social reorganisation) that acted differently in each region. Hypotheses of epidemics and of a political crisis have little proof.'
  ] },
  { caixa: 'The “Aryan invasion” is abandoned', texto: 'In 1947 Wheeler proposed that invading Aryans, cited in the Rigveda as destroyers of forts, had wiped out the Indus cities. **That hypothesis is abandoned** by archaeology: Dales (1964) showed that the skeletons of Mohenjo-daro were of different periods and that there is no layer of destruction, fire or battle; the cities declined over centuries, before any arrival of Indo-Aryan speakers. These groups probably reached north-west India **by gradual migrations**, after 2000 BC, and that subject (how and when Indo-Aryan arrived) is a different discussion and remains open, also politically charged in India and Pakistan.' },
  { h: 'Modern controversies' },
  { lista: [
    '**The name:** “Indus civilisation”, “Harappan” or “Indus-Sarasvati”: each choice has geographical and political implications.',
    '**The script:** is it a language or a system of symbols? It has been used both in scientific theses and in claims of identity.',
    '**Rakhigarhi:** how big was it, and what does the DNA of a single skeleton say about the origin of a people?',
    '**Migration or continuity:** the discussion of the arrival of Indo-Aryan mixes science and politics in several countries.',
    '**The “Dancing Girl” and heritage:** to whom do the finds divided in 1947 belong?',
    '**Conservation:** Mohenjo-daro suffers from soil salinisation, floods (such as those of 2010 and 2022 in Pakistan) and questionable restorations. The site, excavated without adequate protection, is at risk.'
  ] },
  { h: 'Where to visit' },
  { img: 'ido-dholavira-portao', leg: 'East Gate of Dholavira; substituted for the requested North Gate, which was not located with a verified free photograph.' },
  { caixa: 'To visit', texto: '**Mohenjo-daro** (Sindh, Pakistan; World Heritage) and **Harappa** (Punjab, Pakistan, with an on-site museum); **Dholavira** (Gujarat, India; World Heritage since 2021), **Lothal** (Gujarat, with a museum), **Kalibangan** (Rajasthan) and **Rakhigarhi** (Haryana). In museums: the **National Museum of Pakistan** (Karachi: Priest-King), the **National Museum, New Delhi** (Dancing Girl, seals), the **British Museum** (London: seals, beads and finds from Ur), and the **Louvre** (Paris: the Shu-ilishu seal).' }
];

const quiz = [
  { p: 'Which is the phase of greatest urban splendour of the Indus civilisation?', op: ['Early Harappan (c. 3300–2600 BC)', 'Mature Harappan (c. 2600–1900 BC)', 'Late Harappan (c. 1900–1300 BC)', 'Mehrgarh (c. 7000 BC)'], certa: 1, exp: 'The Mature phase had planned cities, seals, script and standard weights.' },
  { p: 'Who discovered the Neolithic site of Mehrgarh, in Balochistan?', op: ['Mortimer Wheeler', 'Alexander Cunningham', 'John Marshall', 'Jean-François Jarrige'], certa: 3, exp: 'Jarrige and his team began excavating Mehrgarh in 1974.' },
  { p: 'What is the name of the brick tank of Mohenjo-daro, c. 12 × 7 × 2.4 m?', op: ['The Great Bath', 'The College of Priests', 'The Stadium', 'The Great Granary'], certa: 0, exp: 'The name “Great Bath” is modern and its function (ritual or other) is not proven.' },
  { p: 'What was special about the water system of the Indus cities?', op: ['Stone aqueducts', 'Covered drains and bathrooms in the houses', '100 km irrigation canals', 'Bronze showers'], certa: 1, exp: 'Many houses had a bathroom linked to covered drains under the streets.' },
  { p: 'What is the usual proportion of Indus bricks?', op: ['5:3:1', '1:1:1', '2:1:1', '4:2:1'], certa: 3, exp: 'Bricks of c. 28 × 14 × 7 cm, in the proportion 4:2:1, across the whole civilisation.' },
  { p: 'What are the standard weights of the Indus?', op: ['Chert cubes in regular series', 'Gold balls', 'Copper discs', 'Silver coins'], certa: 0, exp: 'Series of 1, 2, 4, 8, 16, 32, 64…, and then decimal multiples, across the whole territory.' },
  { p: 'Roughly how many Indus inscriptions are known?', op: ['About 5,000', 'More than 100,000', 'About 50', 'About 500'], certa: 0, exp: 'About 5,000, almost all very short (an average of five signs).' },
  { p: 'Why has the Indus script not been deciphered?', op: ['Because all the material was lost', 'Because the inscriptions are short, there are no bilingual texts and the language is unknown', 'Because it is identical to cuneiform', 'Because it was deciphered but is kept secret'], certa: 1, exp: 'Without long texts or bilinguals, and without knowing the language, nothing can be confirmed.' },
  { p: 'What did Mesopotamian texts call the land identified with the Indus?', op: ['Punt', 'Dilmun', 'Magan', 'Meluhha'], certa: 3, exp: 'Meluhha supplied carnelian, lapis lazuli, ivory and woods.' },
  { p: 'Which Indus objects were found in the royal tombs of Ur?', op: ['Carnelian beads', 'Gold seals', 'Glass vessels', 'Iron swords'], certa: 0, exp: 'Indian-type carnelian beads, some etched with white patterns, at Ur, c. 2600–2500 BC.' },
  { p: 'What is known about the “Priest-King” of Mohenjo-daro?', op: ['He was certainly the king of the city', 'It is a statuette whose modern name does not prove whom it represents', 'It is a statue of Shiva', 'It is a modern copy'], certa: 1, exp: 'The name is a modern convention; we do not know whether he was a priest, a king or another figure.' },
  { p: 'How is the “Pashupati” seal interpreted today?', op: ['As a map', 'As a coin', 'As proof that the Indus worshipped Shiva', 'Very debatably: Marshall saw a “proto-Shiva”, but there are other readings'], certa: 3, exp: 'Marshall’s reading is contested; we have no text saying who the figure was.' },
  { p: 'What is the status of the “Aryan invasion” hypothesis as the cause of the end of the Indus?', op: ['It was confirmed by DNA', 'It is the accepted explanation', 'It is abandoned by archaeology', 'It was confirmed by Wheeler'], certa: 2, exp: 'Dales (1964) and others showed there is no destruction layer or massacre, and the cities declined earlier.' },
  { p: 'What is one of the main hypotheses for the decline of the Indus?', op: ['Climate change (weaker monsoon) and changes in the rivers', 'The Black Death', 'A war with Egypt', 'A single earthquake'], certa: 0, exp: 'The weakening of the monsoon, drought and changes in the rivers (Ghaggar-Hakra) are among the most studied causes, usually in combination.' },
  { p: 'Who announced the discovery of the Indus civilisation to the world in 1924?', op: ['John Marshall', 'Leonard Woolley', 'Mortimer Wheeler', 'Ernest Mackay'], certa: 0, exp: 'Marshall did so in the Illustrated London News on 20 September 1924.' }
];

export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };
