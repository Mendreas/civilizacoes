// TIWANAKU AND CHAVÍN — full English content. Same structure and same image slots as the Portuguese version (dados.js).
// Dates are approximate (radiocarbon-calibrated); many are debated. BC/AD. Neither culture left a decipherable script: everything we know comes from archaeology, art and, later, colonial accounts.

const visao = [
  { caixa: 'In brief', texto: [
    'This page brings together two great religious and political traditions of the **pre-Inca Andes**, separated by more than a thousand years and hundreds of kilometres. **Chavín de Huántar**, in the northern Andes of Peru, was between c. 900 and 200 BC a pilgrimage sanctuary whose art, with jaguars, snakes and raptors, spread across much of Peru: archaeologists call it the **Early Horizon** or “Chavín Horizon”. **Tiwanaku**, beside **Lake Titicaca** at almost 3,850 m above sea level, in present-day Bolivia, was between c. AD 500 and 1000 the ceremonial capital of a state that dominated the altiplano and sent colonies to distant valleys.',
    'Neither used writing. They speak through **carved stone**: the **Lanzón** and the underground galleries of Chavín, where water and sound were part of the ritual; and the **Gateway of the Sun**, the pyramids and the monoliths of Tiwanaku, with a central figure that archaeologists call the **Staff God**. Both civilizations declined amid natural upheavals, droughts and shifts of power, and both left legacies that the Incas, much later, picked up and reinterpreted.'
  ] },
  { img: 'tch-mapa-andes', leg: 'Schematic map of the central Andes showing the areas of Chavín (northern Peru), Wari and Tiwanaku (Titicaca altiplano).' },
  { h: 'Where they were' },
  '**Chavín de Huántar** lies in the Peruvian region of **Ancash**, in the valley of the **Mosna** river, at about 3,150 m, on the eastern side of the Cordillera Blanca. Its position is strategic: the valley links the Pacific coast to the humid forests of the Amazon through mountain passes, and pilgrims and traders from both sides could meet there. The sanctuary stands where the Mosna meets the small **Wacheqsa** river, and water, as we shall see, was central to its architecture.',
  '**Tiwanaku** (also spelt Tiahuanaco, in Spanish) lies about 20 km from **Lake Titicaca**, on the Bolivian altiplano, at about 3,850 m: one of the highest capitals of the ancient world. Titicaca, with about 8,300 km², is the largest lake in South America by volume of water and is usually cited as the highest navigable lake in the world. Its milder microclimate, compared with the surrounding altiplano, made farming and the herding of llamas and alpacas possible, and both the Aymara and the Incas regarded it as a place where the world began.',
  { img: 'tch-lago-titicaca', leg: 'Lake Titicaca, on the altiplano between Peru and Bolivia.' },
  { img: 'tch-chavin-aerea', leg: 'Imagined reconstruction of the ceremonial centre of Chavín de Huántar, c. 500 BC (illustrative AI-generated image).' },
  { h: 'When they existed' },
  'The two civilizations were not contemporaries. **Chavín** belongs to the 1st millennium BC, has its roots in older Andean traditions (such as those of the north coast and of **Kotosh**) and ends around 200 BC. **Tiwanaku** began as a farming village near the start of our era, became a ceremonial centre over the following centuries and reached its peak between c. AD 500 and 1000. Between the two, other Andean cultures developed, which are mentioned below only in passing. Dates vary from author to author, and the chronology of Chavín has been revised several times.',
  { tabela: { cab: ['Phase', 'Approximate dates', 'What marks it'], linhas: [
    ['Antecedents', 'until c. 900 BC', 'Monumental culture on the coast (such as **Caral**, covered in another section) and temple traditions in the interior (Kotosh, Garagay); farming villages on the Titicaca altiplano (Chiripa)'],
    ['Chavín: Old Temple', 'c. 900 – 500 BC', 'First U-shaped buildings, galleries, the Lanzón; the phase called Urabarriu in Richard Burger’s chronology'],
    ['Chavín: New Temple', 'c. 500 – 200 BC', 'Expansion of the temple, the Black and White Portal, wider spread of the style; the Janabarriu phase'],
    ['Decline of Chavín', 'c. 200 BC', 'Gradual abandonment of the sanctuary; regional cultures emerge (Paracas, Nazca, Moche, Pukara)'],
    ['Regional cultures', 'c. 200 BC – AD 500', 'Paracas and Nazca on the south coast, Moche on the north coast, Pukara north of Titicaca'],
    ['Tiwanaku: formation', 'c. AD 100 – 500', 'Village and then ceremonial centre; first temples and monoliths'],
    ['Tiwanaku: peak', 'c. AD 500 – 1000', 'Monumental city, raised fields, llama caravans, colonies in distant valleys; relations with Wari'],
    ['Collapse', 'c. AD 1000 – 1100', 'Prolonged drought, abandonment of the capital; Aymara lordships and, later, Inca rule emerge']
  ] } },
  { img: 'tch-puerta-sol', leg: 'The Gateway of the Sun at Tiwanaku, carved from a single block of andesite.' },
  { h: 'Who were they?' },
  'We do not know what they called themselves. **Chavín** is the name of the modern site (probably from Quechua *chawin*, of debated meaning), and the culture is known by the style of its art, not as a named state. There is no clear evidence of a Chavín “empire”: it seems rather to have been a **network of communities** linked by a respected pilgrimage centre. **Tiwanaku** is a Spanish name of uncertain origin; in Aymara the place is sometimes called *taypiqala*, “the stone in the centre”. The language spoken at Tiwanaku is debated (Puquina and proto-Aymara have been proposed), so it is prudent not to assign it a people with a modern name.',
  { h: 'Why they matter' },
  { lista: [
    '**Religion and power without writing:** they show how authority is built with architecture, art, light, sound and pilgrimage, long before the Incas.',
    '**Unmistakable art:** the Chavín style (felines, caimans, snakes, faces that transform) and the iconography of Tiwanaku (the Staff God and his winged attendants) are among the most recognisable in the Americas.',
    '**High-altitude engineering:** drainage under temples, acoustic chambers, raised fields on the altiplano, llama caravans and the transport of blocks weighing tens of tonnes without wheels or heavy draught animals.',
    '**Some of the greatest archaeological sites of South America:** both are UNESCO World Heritage Sites (Chavín in 1985, Tiwanaku in 2000).',
    '**A lesson about climate:** the collapse of Tiwanaku is one of the most discussed case studies of the effect of drought on a high-altitude civilization.',
    '**A living subject:** the Aymara still celebrate the winter solstice at Tiwanaku, and the mountains and the lake remain sacred places.'
  ] },
  { img: 'tch-chavin-reconstrucao', leg: 'Conjectural reconstruction of the sanctuary of Chavín de Huántar, c. 400 BC. AI-generated illustration.' },
  { caixa: 'The Andes today', texto: 'The territory of Chavín belongs today to **Peru**, and that of Tiwanaku to **Bolivia**; the Lake Titicaca region is shared by the two countries. Chavín was added to the World Heritage list in **1985** and Tiwanaku in **2000**. The descendants of the Andean peoples, speakers of **Quechua** and **Aymara**, still live in these valleys and highlands, and several practices (water as a living being, coca, chicha, llama wool, terraced fields) have very old roots, although it is risky to link them directly to these civilizations.' }
];

const linha = [
  'This timeline follows the two civilizations and the neighbouring cultures that help to place them. Dates are approximate (radiocarbon-calibrated) and, since there is no writing, many are debated; where that is so, we say it.',
  { linha: [
    { d: 'c. 3000 – 2000 BC', t: 'The world before Chavín', x: 'Monumental centres already existed in the Andes: **Caral**, on the coast (covered in the section on the Olmecs and Caral), and temples of chambers with ritual hearths in the interior, such as the **Temple of the Crossed Hands** at **Kotosh** (c. 2000 BC, dating debated). In these traditions arose the idea of the sanctuary as a social and religious centre, with fire, offerings and a sacred U-shaped space.' },
    { d: 'c. 1500 BC', t: 'Chiripa and Titicaca', x: 'On the south side of the lake, the village of **Chiripa** has a sunken plaza surrounded by enclosures; it is one of the first communities of the altiplano with ceremonial architecture. The economy rested on the potato, quinoa and camelids. This Titicaca “Formative” is the remote background to Tiwanaku.' },
    { d: 'c. 1500 – 900 BC', t: 'First occupations at Chavín', x: 'The site of Chavín is occupied by a small settlement. There is still debate about the exact date when monumental building began, between c. 1200 and c. 900 BC depending on the author.' },
    { d: 'c. 900 BC', t: 'The Old Temple', x: 'The **Old Temple** of Chavín is built: a stone structure in the shape of a **U**, open to the east, with a sunken circular plaza and a network of interior galleries. At the centre, in a cross-shaped corridor, stands the **Lanzón**, a granite stela of c. 4.5 m. This is the beginning of the phase called **Urabarriu** (c. 900 – 500 BC).' },
    { d: 'c. 800 BC', t: 'Paracas, on the south coast', x: 'On the dry coast of Ica arises the **Paracas** culture, famous for the **embroidered mantles** that wrapped the multiple mummies of a large necropolis. Its pottery and textiles show contact with the Chavín style (that of the “Karwa” textiles is sometimes cited, with debated dating).' },
  ] },
  { img: 'tch-paracas-manto', leg: 'Funerary mantle of the Paracas culture, c. 250–100 BC, south coast of Peru (a neighbouring culture, later than Chavín).' },
  { linha: [
    { d: 'c. 500 BC', t: 'The New Temple and the peak', x: 'The sanctuary is extended with the **New Temple**, with a huge plaza and the **Black and White Portal**, of granite and limestone in two colours. This is the **Janabarriu** phase (c. 400 – 200 BC according to Burger), when the Chavín style appears in pottery, goldwork and textiles from very distant places: Kuntur Wasi (Cajamarca), Chongoyape (Lambayeque), Paracas and others. The population of the centre itself grows, to some thousands of people according to estimates, which are debated.' },
    { d: 'c. 500 – 200 BC', t: 'Chavín goldwork', x: 'Craftsmen work **gold** with advanced techniques (hammering, repoussé, soldering). Pieces with Chavín iconography have been found at **Chongoyape** (north coast) and at **Kuntur Wasi** (Cajamarca). They are among the oldest works of goldsmithing in the Americas.' },
  ] },
  { img: 'tch-oro-chongoyape', leg: 'Gold ornament in Chavín style, from Chongoyape, Lambayeque, Peru.' },
  { linha: [
    { d: 'c. 200 BC', t: 'The decline of Chavín', x: 'The sanctuary loses its influence and is gradually abandoned as a pilgrimage centre. The causes are debated: floods, landslides and earthquakes (common in the region), climate change, social tensions and the growth of other regional centres. There is no evidence of outside conquest; the most likely explanation is a combination of factors.' },
    { d: 'c. 200 BC – AD 200', t: 'Pukara and northern Titicaca', x: 'On the north side of the lake, **Pukara** is a large ceremonial centre, with sculptures in its own style. Around the lake the Yaya-Mama traditions and **Khonkho Wankane** also develop. These centres prepare the way for Tiwanaku.' },
    { d: 'c. 100 BC – AD 700', t: 'Nazca and Moche', x: 'On the south coast the **Nazca** flourish, with the desert geoglyphs and the ceremonial centre of **Cahuachi**; on the north coast the **Moche**, with adobe pyramids, portrait pottery and tombs such as that of the Lord of Sipán. They are later than Chavín and earlier than, or contemporary with, early Tiwanaku; they are not treated here in detail.' },
    { d: 'c. AD 100 – 500', t: 'Tiwanaku begins to grow', x: 'The settlement beside Titicaca changes from village to ceremonial centre. According to a statistical analysis of radiocarbon dates, the initial occupation lies around **AD 110**, with an uncertainty of several decades. Platforms, courtyards and the first monoliths appear.' },
    { d: 'c. AD 500', t: 'The monumental capital', x: 'The great buildings are built or enlarged: the **Akapana**, the **Kalasasaya**, the **Semi-Subterranean Temple**. The centre has a plan organised on axes, a belt of water (perhaps a moat) and a district of homes for craftsmen and elites. This is the period called **Tiwanaku IV**.' },
    { d: 'c. AD 600 – 1000', t: 'Tiwanaku and Wari', x: 'Further north, in the Ayacucho valley, the **Wari** state grows, the other great Andean power of the time. Tiwanaku and Wari share some iconography (the “Southern Andean Iconographic Series”) but have different forms of organisation, and relations between them are debated: rivalry, exchange or a shared frontier.' },
  ] },
  { img: 'tch-wari-tunica', leg: 'Tapestry tunic of the Wari culture, c. AD 600 – 1000, with iconography shared with Tiwanaku.' },
  { linha: [
    { d: 'c. AD 600 – 1000', t: 'The colonies of Moquegua', x: 'Tiwanaku establishes communities in low-altitude valleys such as **Moquegua**, in southern Peru, with their own cemeteries and temples (**Omo**, **Chen Chen**), and brings maize and other products of warm climates up to the altiplano. Nearby, the Wari centre of **Cerro Baúl**, on top of a rocky mesa, illustrates the meeting of the two cultures.' },
  ] },
  { img: 'tch-colonia-moquegua', leg: 'Conjectural reconstruction of a Tiwanaku colony in the Moquegua valley, c. AD 800. AI-generated illustration.' },
  { img: 'tch-cerro-baul', leg: 'Cerro Baúl, a Wari centre in the Moquegua valley, southern Peru.' },
  { linha: [
    { d: 'c. AD 700 – 800', t: 'The Gateway of the Sun and Pumapunku', x: 'Some of the most famous works of Tiwanaku were built or completed around this time: the **Gateway of the Sun** and **Pumapunku**, with stone blocks fitted with extreme precision. Construction of Pumapunku probably began earlier, c. AD 536–600 (radiocarbon dating), and the exact dating of the Gateway of the Sun is debated.' },
    { d: 'c. AD 800', t: 'The peak: Tiwanaku V', x: 'The city covers about 4 km², with an urban population estimated, cautiously, at between 10,000 and 20,000 people, and a much larger area of influence. The **raised fields** of the altiplano feed the population; **llama caravans** link the altiplano to Cochabamba, Moquegua and the Atacama.' },
    { d: 'c. AD 1000', t: 'The collapse', x: 'The capital is gradually abandoned between c. 1000 and c. 1100. Climate evidence (lake sediments and Andean ice) points to a prolonged **drought**, which lowered the level of Titicaca and the output of the raised fields. The erosion of political power, the breakdown of the cult and the loss of legitimacy of the elites are the other parts of the explanation, still debated.' },
    { d: 'c. AD 1100 – 1400', t: 'The Aymara lordships', x: 'On the altiplano small Aymara-speaking kingdoms arise, such as the **Colla** and the **Lupaqa**, which make Tiwanaku a place of memory and go on herding llamas and working the land.' },
    { d: '15th century AD', t: 'The Incas at Tiwanaku', x: 'The Incas conquer the altiplano and treat Tiwanaku as a sacred place. According to Inca legends, the creator **Viracocha** emerged from Lake Titicaca; Tiwanaku was seen as one of the cradles of the world. They reused the site as a sanctuary (colonial sources mention it), but they did not build it: they found it already in ruins.' },
    { d: '1549', t: 'Cieza de León at Tiwanaku', x: 'The Spanish chronicler **Pedro Cieza de León** visits Tiwanaku and writes one of the earliest known descriptions. He reports that local people said those buildings were older than the Incas. His chronicle is a valuable source, but his account mixes observation and legend.' },
  ] },
  { img: 'tch-squier-gravura', leg: 'Engraving of Tiwanaku in Squier’s *Peru: Incidents of Travel and Exploration in the Land of the Incas* (1877).' },
  { h: 'Rediscovery' },
  'Neither site was ever “lost”: local communities always knew where they were. The “rediscovery” is, as in other cases, a rediscovery for the academic world. At **Tiwanaku**, after Cieza de León (1549), it was mainly travellers and scholars of the 19th century, such as **Ephraim George Squier** (visit in 1863–65, book in 1877) and **Max Uhle** (1890s), who described and excavated it, while many stones were taken to build churches, houses and a railway line. Systematic excavation began in the 20th century, with **Wendell Bennett** (1932), **Carlos Ponce Sanginés** (1950s to 1990s) and, later, **Alan Kolata** and others. At **Chavín**, the naturalist **Antonio Raimondi** made known in the 19th century the stela that bears his name; **Julio C. Tello** studied the site from 1919, and other archaeologists (**Luis G. Lumbreras**, **Richard Burger**, **John Rick**) revolutionised knowledge in the following decades. In 1945 a flood and in 1970 an earthquake damaged parts of the site.'
];

const mapa = [
  'The maps of Chavín and Tiwanaku are not maps of walled cities: they are maps of **sanctuaries**, of valleys linked by mountain paths and of distant colonies. The main places are these.',
  { tabela: { cab: ['Place', 'Where (today)', 'When / who', 'Importance'], linhas: [
    ['Kotosh', 'Huánuco, Peru', 'c. 2000 BC', 'Temple of the Crossed Hands; antecedent of Andean sanctuaries'],
    ['Chavín de Huántar', 'Ancash, Peru', 'c. 900 – 200 BC', 'Pilgrimage sanctuary; Lanzón; World Heritage (1985)'],
    ['Kuntur Wasi', 'Cajamarca, Peru', 'c. 800 – 200 BC', 'Ceremonial centre with goldwork in Chavín style'],
    ['Chongoyape', 'Lambayeque, Peru', 'c. 500 – 200 BC', 'Gold treasures with Chavín iconography'],
    ['Paracas', 'Ica, Peru', 'c. 800 BC – AD 100', 'Embroidered funerary mantles; coastal context'],
    ['Pukara', 'Puno, Peru', 'c. 200 BC – AD 200', 'Centre of northern Titicaca; antecedent of Tiwanaku'],
    ['Chiripa', 'Southern Titicaca, Bolivia', 'c. 1500 BC – AD 100', 'Village with sunken plaza; Formative of the altiplano'],
    ['Tiwanaku', 'La Paz, Bolivia', 'c. AD 500 – 1000', 'Ceremonial capital; World Heritage (2000)'],
    ['Lukurmata', 'Near Tiwanaku, Bolivia', 'c. AD 500 – 1000', 'Secondary town beside the lake, linked to Tiwanaku'],
    ['Khonkho Wankane', 'Bolivian altiplano', 'c. 200 BC – AD 500', 'Ceremonial centre before the peak of Tiwanaku'],
    ['Isla del Sol and Isla de la Luna', 'Lake Titicaca, Bolivia', '8th – 16th century', 'Sacred islands, later also Inca'],
    ['Moquegua (Omo, Chen Chen)', 'Southern Peru', 'c. AD 600 – 1000', 'Tiwanaku colonies in low-altitude valleys'],
    ['Cerro Baúl', 'Moquegua, Peru', 'c. AD 600 – 1000', 'Wari centre with a chicha brewery; frontier with Tiwanaku'],
    ['Huari (Wari)', 'Ayacucho, Peru', 'c. AD 600 – 1000', 'Capital of the Wari state, rival or neighbour of Tiwanaku'],
    ['Cochabamba and Atacama', 'Bolivia and Chile', 'c. AD 500 – 1000', 'Valleys of maize and resources, linked by caravans']
  ] } },
  { h: 'Chavín de Huántar' },
  'The sanctuary occupies a terrace in the Mosna valley. The **Old Temple** is a stone building, **U**-shaped, with the opening facing east, towards where the river runs. The **New Temple** added a wing and a large platform. Between them lies a **sunken circular plaza**, about 20 m across, discovered in the 1970s and decorated with reliefs of masked figures in procession. The interior of the temple is a **labyrinth of galleries**, windowless, narrow and low, linked by stairs and ramps. They are kilometres of corridors, carefully designed for light, ventilation and drainage.',
  { img: 'tch-plaza-circular', leg: 'Sunken circular plaza of Chavín de Huántar.' },
  { img: 'tch-galeria-chavin', leg: 'Interior gallery at Chavín de Huántar, with stone walls.' },
  'At the centre of the Old Temple, in a cross-shaped gallery, stands the **Lanzón**. It is a granite stela about **4.5 m** tall, shaped like a lance or a great digging tool, carved with a figure with a **fanged mouth**, eyes turned upward, **claws** and hair of snakes: a being that mixes features of man, feline and serpent. The right hand is raised and the left lowered. The figure is set into the floor and passes through the ceiling of the gallery, where a channel may have been used to pour liquids, or for voices. Archaeologists think it was an **oracle**: pilgrims entered the gallery, and a voice, perhaps that of a hidden priest, spoke through it. This interpretation is plausible but not proven.',
  { img: 'tch-lanzon', leg: 'The Lanzón, a granite stela of c. 4.5 m, in the central gallery of the Old Temple of Chavín.' },
  'The outer walls of the Old Temple were decorated with **tenon heads**, stone heads fixed into the wall by a kind of peg. They show, in sequence, human faces that transform, with bulging eyes, running noses and fangs, into feline beings: a possible image of the **trance** brought on by psychoactive substances. Only one is still in its original place. The **Black and White Portal**, of the New Temple, has two columns, one of white granite and one of dark limestone, carved with figures of eagle-headed raptors, and turned the entrance into a staging of contrasts.',
  { img: 'tch-portal-blanco-negro', leg: 'The Black and White Portal of the New Temple of Chavín: columns of white granite and dark limestone.' },
  { img: 'tch-cabezas-clavas', leg: 'Stone tenon head, still in place, at Chavín de Huántar.' },
  { h: 'Tiwanaku' },
  'The ceremonial centre of Tiwanaku occupies a treeless plain, with the skyline of the snowy peaks of the Cordillera Real to the east. The “city” was divided into **enclosures** of platforms and courtyards, surrounded by canals. The main buildings are these.',
  { lista: [
    '**The Akapana:** a stepped pyramid about **257 × 197 m** at the base and 16.5 m high, in the shape of a “half Andean cross”, with a sunken court at the top and interior drainage channels that sent rainwater down the steps. It was probably conceived as a **sacred mountain** (*apu*), and excavations have found offerings and human remains there, of debated interpretation.',
    '**The Kalasasaya:** a large rectangular platform, c. 130 × 120 m, with a courtyard surrounded by stone pillars and reached by a monumental staircase. The **Ponce** and **Fraile** monoliths stand there, and in the north-west corner of the enclosure is the **Gateway of the Sun** (its present position is perhaps not the original). On the winter solstice (21 June) the Aymara gather here at sunrise to celebrate their New Year.',
    '**The Semi-Subterranean Temple:** a sunken square courtyard, about 28 m on a side, with walls covered in stone **tenon heads**, each with a different face: a “gallery” of peoples or ancestors.',
    '**Pumapunku** (“gate of the puma”): a T-shaped platform, c. 167 × 117 m, which was perhaps a dock or a temple. It has **blocks of red sandstone and andesite** with joints so precise that they look like pieces of a puzzle; some sandstone blocks weigh more than 100 tonnes. The blocks have notches into which metal clamps were poured to join them.',
  ] },
  { img: 'tch-tiwanaku-reconstrucao', leg: 'Conjectural reconstruction of the ceremonial centre of Tiwanaku, c. AD 800. AI-generated illustration.' },
  { img: 'tch-akapana', leg: 'The Akapana, the stepped pyramid of Tiwanaku.' },
  { img: 'tch-kalasasaya', leg: 'The courtyard of the Kalasasaya at Tiwanaku, with its walls of stone pillars.' },
  { img: 'tch-monolito-ponce', leg: 'The Ponce Monolith, in the sunken courtyard of the Kalasasaya at Tiwanaku.' },
  { img: 'tch-semisubterraneo', leg: 'Semi-Subterranean Temple of Tiwanaku, with stone tenon heads in the walls.' },
  { img: 'tch-pumapunku', leg: 'Sandstone blocks of Pumapunku, at Tiwanaku, with joints and notches of great precision.' },
  { caixa: 'Stone, andesite and sandstone', texto: 'The red sandstone of Pumapunku came from quarries about 10 km from Tiwanaku. The andesite, a harder volcanic rock, came from much further away, from the area of the **Copacabana** peninsula, about 90 km away, across the lake. **Totora reed rafts** (a kind of rush) and **sledges** may have been used to bring it, but little is known. There is no need to resort to fanciful explanations (such as “aliens” or a “lost civilization of 15,000 years ago”): this is organised labour, tools of stone and bronze, ropes and a great deal of manpower.' },
  { img: 'tch-isla-sol', leg: 'The Isla del Sol, in Lake Titicaca, a sacred place for Andean peoples.' },
  { h: 'Lake Titicaca' },
  'The lake is inseparable from Tiwanaku. It was a source of fish and birds, of rushes (the **totora**, used for rafts, roofs and even as food), of water for the fields and of symbolism: both the Aymara and the Incas say that the Sun and the first Inca (or the creator Viracocha) emerged from its waters or its islands. The islands of the **Sun** and of the **Moon** have temples and platforms associated with Tiwanaku and, later, with the Incas. The shores of the lake were dotted with towns and villages, such as **Lukurmata** and **Chiripa**.',
  { h: 'Beyond the altiplano: colonies and valleys' },
  'Tiwanaku had **colonies** and enclaves in lower-altitude valleys, where maize, coca and fruits of warmer climates could be grown: **Moquegua**, in southern Peru, **Cochabamba**, in Bolivia, and the **Atacama Desert**, in northern Chile. These places had cemeteries with objects in Tiwanaku style, their own pottery and temples. We do not know exactly what kind of control there was: in many cases it looks more like **trade and pilgrimage** than military rule.',
  { h: 'The paths' },
  'Neither Chavín nor Tiwanaku had paved roads like the Inca network. They did have **mountain paths** used by **llama caravans**, each animal carrying about 25 to 30 kg for days on end. They linked the altiplano and the coast, the eastern valleys and the Amazon. Along them passed obsidian (from sources such as Quispisisa), marine shells (such as *Strombus* and *Spondylus*), salt, wool, coca, maize, dried fish and **ideas**: iconography, ritual objects and beliefs.'
];

const sociedade = [
  { h: '1. Political organisation' },
  'Since there is no writing, the political organisation of both civilizations is inferred from architecture, burials and objects. **Chavín** does not seem to have been a state with an army and a capital: what we see is a **religious centre** run by priestly elites, who controlled access to the sacred and the redistribution of goods. The more the sanctuary grew, the more social differences grew too, visible in larger houses and in objects of gold and exotic materials.',
  'At **Tiwanaku** the scale is larger. There is an **elite** with access to prestige goods (fine pottery, goldwork, textiles), a ceremonial centre of enormous collective effort and a network of colonies. Some archaeologists speak of a **state** or even an “empire”; others prefer to speak of a **religious and political leadership with influence**, which grew through cultural attraction and trade and less through conquest. The central figure of Tiwanaku, on the Gateway of the Sun, has the look of a deity, but rulers appear as figures with **staffs** and prestige clothing, and we do not know their names.',
  { h: '2. Social classes' },
  { lista: [
    '**Priests and leaders:** at Chavín, the ritual specialists; at Tiwanaku, an elite with rich tombs and prestige clothing.',
    '**Specialised craftsmen:** sculptors, goldsmiths, potters and weavers, some working in workshops linked to the centre.',
    '**Farmers and herders:** the majority of the population, who cultivated and raised llamas, and who worked periodically on collective projects.',
    '**Traders and caravan drivers:** those who cared for the llamas and carried goods between regions.',
    '**Collective labour:** in the Andes, work for the community, later called *mit’a* by the Incas, and reciprocity (*ayni*) were the basis of the economy; something similar probably existed already then, although this is an inference.'
  ] },
  { h: '3. Religion' },
  'The religion of Chavín and that of Tiwanaku were not identical, but they share elements that specialists see in many Andean cultures: the **veneration of mountains** and water, the figure of a supernatural being mixing features of **feline, bird and serpent**, and **trance** as a way of contact with the sacred. At **Chavín** the sanctuary was a “machine” for impressing pilgrims: darkness, sounds, water running in the walls, light entering at chosen points, and perhaps substances that altered perception, such as the **San Pedro cactus**, which contains mescaline and appears in Chavín art (its use at the site is plausible but still debated). Pilgrims could consult the **oracle** and offer the temple objects from distant places.',
  { img: 'tch-peregrinos-lanzon', leg: 'Pilgrims before the Lanzón in the central gallery of Chavín, c. 400 BC. AI-generated illustration.' },
  { img: 'tch-xama-san-pedro', leg: 'Conjectural scene of a trance ritual at Chavín with San Pedro cactus, c. 500 BC. AI-generated illustration.' },
  { img: 'tch-obelisco-tello', leg: 'The Tello Obelisk, from Chavín: relief of caimans and snakes, c. 2.5 m.' },
  { img: 'tch-estela-raimondi', leg: 'The Raimondi Stela, granite, c. 2 m, from Chavín, in the National Museum of Archaeology, Anthropology and History of Peru, Lima.' },
  { img: 'tch-pututu', leg: 'Conch shell used as a trumpet (pututu), a very old Andean tradition.' },
  'At **Tiwanaku** the central figure is the **Staff God**, shown frontally, with a staff in each hand and tears at the eyes, surrounded by **winged attendants** with the heads of condors and of men; its most famous version is that of the **Gateway of the Sun**. The god may be linked to the Sun, rain or water (interpretation varies). The sanctuary was also the place of **rites with chicha**, of offerings of camelids and, according to some finds, of **sacrifices** (human and animal), of debated interpretation. The use of plants such as **vilca** (*Anadenanthera*), inhaled from tablets of wood and bone, is attested by objects from Tiwanaku and from the Atacama region.',
  { tabela: { cab: ['Figure / element', 'Appearance', 'Possible meaning (debated)'], linhas: [
    ['Lanzón (Chavín)', 'Figure with fangs, claws, snake hair; 4.5 m', 'Chief deity of the sanctuary; oracle; axis of the world'],
    ['Feline (jaguar, puma)', 'Fangs, spots, claws', 'Power, the world of forest and night; shape-shifting'],
    ['Caiman and snake', 'Scaly bodies, tongues and fangs', 'Water, origin, the underworld'],
    ['Raptor (eagle, harpy)', 'Hooked beaks, talons', 'The sky; the power of shamans'],
    ['Staff God (Tiwanaku)', 'Frontal figure, two staffs, tears', 'Solar or water deity; model for the elite'],
    ['Winged attendants', 'Figures in profile, with wings or condor heads', 'Messengers, helper spirits'],
    ['Puma and condor', 'Sacred animals; Pumapunku and sculptures', 'Worlds above and below; power'],
    ['Mountains and lake', 'Akapana, Illimani, Titicaca', 'Living beings (*apus*); source of water and life']
  ] } },
  { h: 'Water and sound' },
  'Archaeologists found that the galleries of Chavín had drainage channels through which water diverted from the nearby rivers ran under pressure, producing a **roar** heard throughout the temple, as if the building were “speaking”. Excavations in the 2000s found in one gallery, that of the **Caracolas** (conches), about twenty **shell trumpets** (*pututus*), made from *Strombus* shells brought from the equatorial Pacific. Acoustic studies showed that the rooms amplify certain sounds, and that the sound of a pututu can be heard outside the temple. The experience of entering the darkness, hearing water and trumpets, and seeing the Lanzón by the light of a single opening was certainly impressive.',
  { img: 'tch-galeria-agua-som', leg: 'Conjectural reconstruction of a ritual in a Chavín gallery, with running water and shell trumpets. AI-generated illustration.' },
  { h: '4. Economy' },
  'In the Andes the economy rested on **ecological complementarity**: at different altitudes different things grew (potato and quinoa on the altiplano, maize in the valleys, coca and fruit on the warm slopes), and communities sought access to several of them. **Chavín** concentrated that exchange in a sanctuary, to which came obsidian, shells and gold; **Tiwanaku** organised it on a larger scale, with **raised fields**, herds of llamas, caravans and colonies. There was no money and no markets like those of the Mediterranean; circulation worked through reciprocity, redistribution and barter.',
  { img: 'tch-caravana-lamas', leg: 'Llama caravan on the altiplano, c. AD 800. AI-generated illustration.' },
  { h: '5. Writing and communication' },
  'Neither used a known writing system. Communication was through **image**: the figures of Chavín have a style full of **visual puzzles**, in which the same drawing can be read in several ways (for example the Raimondi Stela, which can be “read” upside down and gives another figure). At Tiwanaku the same symbols recur in stone, pottery and textiles, with an almost heraldic discipline. Later, in the Andean world, the **khipus** (knotted cords) recorded numbers and perhaps other information; they were used by the Wari and the Incas, and we have no clear evidence that they existed at Chavín or Tiwanaku.',
  { h: '6. Home and family' },
  'Farmers’ houses were of **stone and adobe** (dried mud), with thatched roofs, grouped around family courtyards. At Chavín, around the centre, there were houses of stone and clay, with kitchen materials, workshops and storerooms. At Tiwanaku the houses of the elites were better built, and those of farmers in the surrounding villages were simple. Families raised guinea pigs (*cuy*) and llamas, and social organisation rested on **communities** and lineages (**ayllus**, a later term), with mutual obligations.',
  { img: 'tch-aldeia-altiplano', leg: 'Altiplano village with adobe and thatch houses, llamas and fields, c. AD 800. AI-generated illustration.' },
  { h: '7. Food' },
  'The staples were the **potato** (hundreds of varieties) and **quinoa** on the altiplano, and **maize** in the valleys. Potatoes were made into **chuño**, dehydrated by alternating night frost and daytime sun: it lasts for years and was perhaps the most important food invention of the altiplano. People also ate beans, **kañiwa**, **tarwi** (lupin), chillies, and the meat of **llama**, alpaca and **guinea pig**, as well as fish and birds from the lake. The social drink was **chicha**, maize beer, drunk at great celebrations; **keros**, drinking cups of pottery or wood, are one of the hallmarks of Tiwanaku art.',
  { img: 'tch-festa-chicha', leg: 'Celebration with chicha in a plaza at Tiwanaku, c. AD 800. AI-generated illustration.' },
  { img: 'tch-quero-tiwanaku', leg: 'Quero (ceremonial cup) of the Tiwanaku culture, for drinking chicha.' },
  { img: 'tch-incensario', leg: 'Ceramic feline-shaped incense burner, Tiwanaku (Metropolitan Museum of Art).' },
  { h: '8. Clothing' },
  '**Llama and alpaca wool** was the main material, and weaving is one of the most refined arts of the Andes. Men wore sleeveless **tunics** (*unku*) and head **bands**, women dresses and **mantles** fastened with metal pins (*tupus*). At Tiwanaku the elites wore four-cornered **hats** of cloth, tunics with tapestry patterns, ornaments of gold and copper, and nose and ear adornments. Textiles of Chavín and Tiwanaku have survived mainly in tombs in dry climates (such as those of Paracas and the Atacama).',
  { h: '9. Music, dance and games' },
  'The commonest instruments were **panpipes** (*zampoñas*), flutes of bone and clay, **drums**, **shell trumpets** (*pututus*) and **ocarinas**. At Chavín the pututus are part of the ritual; at Tiwanaku there are flutes of bird bone or llama bone, and dances and processions with masks are suggested by the art. **Games** and competitions are not well documented for these periods; shared food, drink and music were the centre of celebrations.',
  { h: '10. Science and knowledge' },
  'Andean peoples watched the sky closely: the **solstice** marked the farming calendar. At Tiwanaku the alignment of the Kalasasaya with the sunrise is studied as a possible observatory, although the theories of “extraordinary astronomy” of the early 20th century (by Arthur Posnansky) have been challenged. **Medicine** used plants (coca, vilca, herbs), and **trepanation**, surgery on the skull, is known in the Andes and was practised from pre-Inca times. **Agronomy** was of a high standard: potato varieties adapted to each altitude, crop rotation and preservation by dehydration.',
  { h: '11. Technology: raised fields and metalwork' },
  'On the altiplano, cold and floods limited farming. The people of Tiwanaku developed **raised fields** (*suka kollus*): strips of earth raised between water channels. The water in the channels stores heat by day and releases it at night, protecting crops from frost; the silt from the channels fertilises the fields. The archaeologist **Alan Kolata** argued that they were the basis of the Tiwanaku economy, and reconstruction experiments showed yields higher than those of ordinary fields; others, such as **Clark Erickson**, note that many fields have an earlier origin and that their extent and role are debated.',
  { img: 'tch-campos-elevados-esquema', leg: 'Diagram of the raised fields (*suka kollus*) of the altiplano. AI-generated illustration.' },
  'In **metalwork**, Chavín worked **gold** and **silver**, with advanced techniques of hammering, repoussé and soldering. Tiwanaku used **copper**, **bronze** (with arsenic and, later, with tin), gold and silver, and cast I-shaped metal clamps to join the stone blocks of Pumapunku. **Tools** of stone and bronze, fibre ropes and sledges were enough to work enormous blocks.',
  { img: 'tch-oficina-pedra', leg: 'Stonemasons working blocks of stone at Tiwanaku, c. AD 800. AI-generated illustration.' },
  { h: '12. Architecture and sculpture' },
  'At **Chavín** the stonework is fine, in regular blocks of granite and limestone, with galleries roofed in slabs. The sculpture is in low relief and very linear, with an aesthetic of **transformation** (the same being that is feline, bird and serpent). At **Tiwanaku** the sculpture is of **monoliths** of sandstone and andesite, in rigid frontal figures with arms held to the body, and the walls have **tenon heads** and pillars alternating with blocks. The architecture of Tiwanaku, with its axes and oriented platforms, is geometric and planned.',
  { h: '13. War' },
  'Neither Chavín nor Tiwanaku is known for military conquest. At **Chavín** there are no walls and few weapons; authority seems to have come from **religion**. At **Tiwanaku** the art shows figures with **trophy heads** and armed characters, and there is evidence of ritual violence, but expansion seems to have been more by **prestige and trade** than by war. After the collapse the situation changed: fortified villages (*pukaras*) appear on hilltops in the altiplano, which suggests a period of conflict.'
];

const personalidades = [
  'No one knows the names of the priests of Chavín or of the rulers of Tiwanaku, and inventing them would be false. The “personalities” on this page are the **scholars and travellers** who made these civilizations known to us.',
  { h: 'Pedro Cieza de León (c. 1520 – 1554)' },
  'A Spanish soldier and chronicler, he travelled the Andes and wrote the *Crónica del Perú*. He visited **Tiwanaku** in 1549 and left one of the oldest descriptions of the site, mentioning the great stones and statues and recording what local people told him. He is an indispensable source, but his accounts mix observation with legend.',
  { h: 'Antonio Raimondi (1824 – 1890)' },
  'An Italian naturalist settled in Peru, he explored the country for decades and made known the **Raimondi Stela** of Chavín, which now bears his name. He is one of the founding figures of Peruvian science.',
  { h: 'Ephraim George Squier (1821 – 1888)' },
  'An American diplomat and archaeologist, he visited **Tiwanaku** in the 1860s and published *Peru: Incidents of Travel and Exploration in the Land of the Incas* (1877), with engravings and plans that popularised the site. Today his interpretations are dated, but his drawings are still useful.',
  { h: 'Max Uhle (1856 – 1944)' },
  'A German archaeologist, he is one of the pioneers of Andean archaeology. He studied **Tiwanaku** in the 1890s (a work with Alphons Stübel, 1892) and proposed chronological sequences that became the basis for the study of the cultures of Peru.',
  { h: 'Julio C. Tello (1880 – 1947)' },
  'A Peruvian archaeologist of Quechua origin, he is regarded as the “father of Peruvian archaeology”. He studied **Chavín** from 1919 and argued that it was the “mother culture” of the Andes. That thesis is now abandoned (Chavín was one important culture among others), but his fieldwork and his defence of heritage were decisive.',
  { h: 'Arthur Posnansky (1873 – 1946)' },
  'An engineer of Austrian origin settled in Bolivia, he devoted decades to **Tiwanaku**, measured and drew the site and proposed, on the basis of astronomical alignments, an antiquity of thousands of years, an idea rejected by archaeologists. He is an important figure, but his theories are now considered mistaken.',
  { h: 'Wendell C. Bennett (1905 – 1953)' },
  'An American archaeologist, he carried out stratigraphic excavations at **Tiwanaku** in 1932 and established a chronological sequence. He found a monolith of c. 7 m that bears his name, the **Bennett Monolith**, now in the Lithic Museum of Tiwanaku.',
  { img: 'tch-monolito-bennett', leg: 'The Bennett Monolith, c. 7 m, in the museum at Tiwanaku.' },
  { h: 'Carlos Ponce Sanginés (1925 – 2005)' },
  'A Bolivian archaeologist, he directed the work at **Tiwanaku** from the 1950s and founded the Centre for Archaeological Research of Tiwanaku. He gave his name to one of the main monoliths. The reconstructions of buildings carried out under his direction are today criticised for having altered their original appearance.',
  { h: 'Luis Guillermo Lumbreras (b. 1936)' },
  'A Peruvian archaeologist, he directed excavations at **Chavín** in the 1960s and 1970s, discovered the circular plaza and proposed that the temple was the centre of a complex social organisation. He is one of the great names of Latin American archaeology.',
  { h: 'Richard Burger' },
  'An American archaeologist at Yale University, he studied **Chavín** for decades, proposed the chronology of phases (Urabarriu, Chakinani, Janabarriu) and showed, through obsidian analysis, the links between the sanctuary and distant regions.',
  { h: 'John Rick' },
  'An American archaeologist at Stanford University, he has directed the Chavín project since the mid-1990s; he mapped the galleries and their structures, and worked with acoustics specialists on the sound of the temple, including the shell trumpets.',
  { h: 'Alan Kolata and Clark Erickson' },
  'Kolata (University of Chicago) led, in the 1980s and 1990s, the study of the **raised fields** and the agriculture of Tiwanaku, and proposed a link between their output and the strength of the state. Erickson, of the University of Pennsylvania, studied raised fields on the altiplano and defended a different view. The debate between them is central to understanding the economy of the altiplano.'
];

const legado = [
  { h: 'What they left us' },
  { lista: [
    '**Influential artistic styles:** the Chavín style was one of the first “international” arts of the Americas, and the iconography of Tiwanaku was copied by the Wari and, later, in part by the Incas.',
    '**The idea of the pilgrimage sanctuary:** in the Andes, *huacas* (sacred places) and pilgrimages continued, and the Incas adopted them.',
    '**Agricultural techniques:** the preservation of the potato (chuño), raised fields and water management continue to be studied and, in some places, revived.',
    '**A stone tradition:** the masonry of Tiwanaku, with fitted blocks and metal clamps, predates the Incas.',
    '**Origin myths:** Titicaca as the place where the Sun and the first Inca originated went on being told long after the fall of Tiwanaku.'
  ] },
  { h: 'Art' },
  'Chavín art is made of **images that transform**: a human face that is also a feline, a snake that becomes hair. Artists used **duality** and **symmetry** to create figures that can be read in several ways. The art of Tiwanaku is more **geometric** and solemn, with frontal, repeated figures in stone, brightly coloured pottery (red, black, white and orange) and textiles. The **quero** with the face of the god, and the **incense burners** in the form of a feline, are among the best-known objects.',
  { h: 'Architecture: the temple and the platform' },
  'Chavín left a model of a temple with **galleries**, plazas and a U-shaped plan. Tiwanaku left a model of a **ceremonial city** with platforms and pyramids (Akapana), sunken courtyards, monoliths and stone gateways. Both treated water as an architectural element (drainage and channels), and neither used true arches or vaults.',
  { h: 'Why did they end? Two debates' },
  { lista: [
    '**Chavín (c. 200 BC):** a combination of **natural factors** (floods and earthquakes, with climate change), the growth of other centres and the loss of credit of the oracle. There is no evidence of conquest or of a single catastrophe.',
    '**Tiwanaku (c. 1000 – 1100):** climate research (Titicaca sediments, ice from the Quelccaya glacier) suggests a long **drought**, which lowered the level of the lake and reduced the output of the raised fields. Other researchers add the weakening of the elite and its colonies, and competition with the Wari. Both factors are debated.',
    '**Common lesson:** a civilization that relies on a belief system and on farming highly dependent on stable conditions becomes vulnerable when those conditions change.'
  ] },
  { h: 'Rediscovery' },
  'See the “Rediscovery” section of the timeline. In short: the sites were never forgotten by local communities; 19th-century explorers and 20th-century archaeologists brought them into science; and since 1985 (Chavín) and 2000 (Tiwanaku) they have been World Heritage sites, which protects them but also exposes them to tourism.',
  { img: 'tch-balsa-totora', leg: 'Totora reed raft on Lake Titicaca, c. AD 800. AI-generated illustration.' },
  { h: 'Where to visit' },
  { lista: [
    '**Chavín de Huántar (Peru):** the site, the underground galleries (some can be visited) and the **National Museum of Chavín**, at Chavín, opened in 2008. It lies at about 3,150 m: allow time to acclimatise. Reached from **Huaraz**, about three or four hours away.',
    '**National Museum of Archaeology, Anthropology and History of Peru (Lima):** the Raimondi Stela and other Chavín pieces.',
    '**Tiwanaku (Bolivia):** the site and the **Lithic Museum** and the Ceramic Museum, about 70 km from **La Paz**, with the Bennett Monolith. The altitude (c. 3,850 m) calls for care.',
    '**Lake Titicaca:** the Isla del Sol and the Isla de la Luna, from **Copacabana** (Bolivia); Puno and the floating islands of the **Uros** (Peru).',
    '**Museums of Lima, Cusco and La Paz** and the **Larco Museum** (Lima), with collections of Andean pottery and goldwork.'
  ] },
  { caixa: 'A note on legends', texto: 'Many popular theories (lost civilizations, advanced technologies, visits by aliens) exist about Tiwanaku and Pumapunku. **None has archaeological support**: the blocks were carved by human beings with tools of stone and metal, the quarries and tool marks are known, and radiocarbon dates place the site in our era. Serious archaeology is more interesting than the legends.' }
];

const quiz = [
  { p: 'In which region of Peru is Chavín de Huántar?', op: ['Ancash', 'Cusco', 'Arequipa', 'Puno'], certa: 0, exp: 'It lies in the valley of the Mosna river, in Ancash, at about 3,150 m.' },
  { p: 'Roughly between which dates did Chavín flourish?', op: ['c. 3000 – 2000 BC', 'c. 900 – 200 BC', 'c. AD 500 – 1000', 'c. AD 1200 – 1532'], certa: 1, exp: 'The sanctuary of Chavín had its heyday in the 1st millennium BC, before the end of the Early Horizon.' },
  { p: 'What is the Lanzón?', op: ['A water channel', 'A granite stela with a fanged and clawed figure', 'A type of wool', 'A stone drum'], certa: 1, exp: 'It is a stela of c. 4.5 m in the central gallery of the Old Temple, probably an oracle.' },
  { p: 'What were “tenon heads”?', op: ['Stone heads fixed into walls', 'Weapons of war', 'Coins', 'Gold masks'], certa: 0, exp: 'They were stone heads with a peg, fixed into the walls of Chavín and Tiwanaku.' },
  { p: 'What produced a “roar” in the galleries of Chavín?', op: ['The wind', 'Water channels running under pressure', 'Drums', 'Fire'], certa: 1, exp: 'Diverted water ran through channels in the interior, producing a loud and impressive sound.' },
  { p: 'Who studied Chavín from 1919 and is called the “father of Peruvian archaeology”?', op: ['Hiram Bingham', 'Julio C. Tello', 'Max Uhle', 'Arthur Posnansky'], certa: 1, exp: 'Julio C. Tello, of Quechua origin, argued that Chavín was the “mother culture” (a thesis now abandoned).' },
  { p: 'At roughly what altitude is Tiwanaku?', op: ['500 m', '1,500 m', '3,850 m', '6,000 m'], certa: 2, exp: 'The site lies at about 3,850 m, near Lake Titicaca.' },
  { p: 'Between which dates was Tiwanaku a powerful capital?', op: ['c. AD 500 – 1000', 'c. 900 – 200 BC', 'c. AD 1200 – 1500', 'c. 2000 – 1500 BC'], certa: 0, exp: 'Its peak is that of the period called Tiwanaku IV and V, between c. AD 500 and c. 1000.' },
  { p: 'What is the famous central figure of the Gateway of the Sun called?', op: ['Viracocha Inca', 'Staff God', 'Lord of Sipán', 'Pachamama'], certa: 1, exp: 'Archaeologists call it the Staff God, because it holds a staff in each hand.' },
  { p: 'What are “raised fields” (suka kollus)?', op: ['Stone terraces on mountains', 'Strips of raised earth between water channels', 'Hanging gardens', 'Battlefields'], certa: 1, exp: 'The channels protected crops from frost and fertilised the soil.' },
  { p: 'What were llama caravans used for?', op: ['War', 'Carrying goods between regions', 'Ploughing the land', 'Making sacrifices'], certa: 1, exp: 'Each llama carried c. 25 to 30 kg, linking the altiplano, valleys and coast.' },
  { p: 'Which neighbouring culture to the north, with its capital at Ayacucho, shared iconography with Tiwanaku?', op: ['Wari', 'Moche', 'Nazca', 'Inca'], certa: 0, exp: 'The Wari state was the other great Andean power of the time; its relations with Tiwanaku are debated.' },
  { p: 'What is the best-supported explanation for the collapse of Tiwanaku?', op: ['A single earthquake', 'A prolonged drought, among other factors', 'An Inca invasion', 'A plague epidemic'], certa: 1, exp: 'Sediment and ice data point to a drought that reduced the lake and farm output; the role of other factors is debated.' },
  { p: 'Who wrote one of the first descriptions of Tiwanaku, in 1549?', op: ['Pedro Cieza de León', 'Marco Polo', 'Henri Mouhot', 'Francisco Pizarro'], certa: 0, exp: 'The chronicler Pedro Cieza de León visited the place and recorded what local people told him.' },
  { p: 'In which years were Chavín and Tiwanaku inscribed on the UNESCO World Heritage list?', op: ['1972 and 1985', '1985 and 2000', '2000 and 2010', '1992 and 2008'], certa: 1, exp: 'Chavín in 1985 and Tiwanaku in 2000.' }
];

export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };
