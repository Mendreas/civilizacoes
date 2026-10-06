// NOK CULTURE — full content in English. Same structure and image ids as dados.js (Portuguese).
// Nok is an ARCHAEOLOGICAL CULTURE, not a known state: no writing survives, and we do not know what they called themselves or what language they spoke.

const visao = [
  { caixa: 'In short', texto: [
    'The **Nok culture** flourished in central Nigeria from about **1500 BC to around the start of the Common Era**. It is best known for its **terracotta sculptures** (fired clay): large human heads and figures with triangular eyes, elaborate hairstyles and abundant jewellery. They are among the oldest large-scale figurative sculptures known in sub-Saharan Africa. The Nok were also among the first societies in the region to work **iron**.',
    'But one warning is essential: **the Nok left no writing**. We do not know what they called themselves, what language they spoke, who ruled them, or which gods or ancestors they honoured. «Nok» is the name of the village where archaeologists found the first pieces, not the name of a people. Almost everything said about Nok society is **interpretation** of objects, and this text says, wherever possible, what is fact, what is hypothesis and what we simply do not know.'
  ] },
  { img: 'nok-mapa-regiao', leg: 'Map of the approximate distribution of Nok culture in central Nigeria, with reference rivers and settlements (English labels).' },
  { h: 'Where it was' },
  'The Nok region lies in **central Nigeria**, in the belt of savanna and open woodland between the **Jos** plateau, the city of **Kaduna** and the area of **Abuja**, the country’s capital. The associated sites are scattered over a huge area, estimated at tens of thousands of square kilometres (some estimates compare it to the area of Portugal; in practice, archaeologists have mostly excavated one part of it). The landscape has a rainy season from April to October and roughly 1,100–1,500 mm of rain a year: enough water to grow cereals, trees for charcoal and rocks with iron ore.',
  { img: 'nok-paisagem-savana', leg: 'Harmattan horizon over a field near Katari, Kaduna State; a contemporary photograph of the regional landscape.' },
  { h: 'When it existed' },
  'For decades the Nok culture was thought to be more recent and shorter (c. 500 BC to AD 200). The Frankfurt University team, with radiocarbon and luminescence (OSL) dates from dozens of sites, showed that it is **considerably older**: it begins around **1500 BC**, and the sculptures only appear later, around **900 BC**. The end, around the start of our era, is still debated. The phases below follow the Frankfurt proposal.',
  { tabela: { cab: ['Phase', 'Approximate dates', 'What marks it'], linhas: [
    ['Early Nok', 'c. 1500 – 900 BC', 'First known farming villages in the region; pearl millet cultivation; characteristic pottery; no sculptural terracottas yet'],
    ['Middle Nok', 'c. 900 – 400 BC', 'Terracotta sculptures appear; many sites and a large population; iron working begins (c. 6th–5th century BC or earlier)'],
    ['Late Nok', 'c. 400 BC – c. AD 1', 'Fewer sites and fewer terracottas; iron furnaces such as those of Taruga; the culture disappears'],
    ['Afterwards', 'from c. AD 1', 'Populations with «totally different» pottery appear; the link with the Nok is uncertain']
  ] } },
  { img: 'nok-cabeca-louvre', leg: 'Nok terracotta figure (70.1998.11.1), showing its head and hairstyle, photographed at the Louvre, Paris.' },
  { h: 'Who were they?' },
  'We do not know. Their language is unknown: there are no texts or inscriptions. Some people propose that the Nok are ancestors of present-day peoples of the region (Yoruba, Jukun, Dakakari and others), but this is **a hypothesis without proof**. Bones for DNA studies are missing (the acid soil destroyed nearly all of them), texts are missing, and centuries of demonstrated continuity are missing. What we have are objects: terracottas, pottery, stone and iron tools, and plant remains.',
  { h: 'Why they matter' },
  { lista: [
    '**Sculpture:** Nok terracottas are among the oldest and most expressive figurative sculptures of sub-Saharan Africa. They show that artists there had a sophisticated tradition of their own, long before any European influence.',
    '**Iron:** the furnaces of Taruga and other sites feed the debate about whether ironworking was invented independently in sub-Saharan Africa.',
    '**Agriculture:** pearl millet was the staple of a society of settled farmers.',
    '**A lesson in method:** the Nok show how a society without writing is studied, through pottery, sediments, charcoal and seeds, and how looting destroys information that can never be recovered.'
  ] },
  { caixa: 'The Nok today', texto: 'Nok terracottas are now Nigerian heritage, protected by law: they may not leave the country. The **National Commission for Museums and Monuments** (NCMM) looks after them, and museums such as those in **Jos** and **Lagos** hold many. Some pieces left illegally, and three sculptures (Nok and Sokoto) were displayed in the Louvre in Paris in a controversial case told further on.' },
  { img: 'nok-figura-sentada', leg: 'Nok terracotta figure in a crouching pose, photographed at the Louvre, Paris.' }
];

const linha = [
  'This timeline mixes two stories: that of the Nok (known only through archaeology, with approximate dates) and that of their discovery and study (well documented, though details vary by source). Where there is doubt, the text says so.',
  { img: 'nok-museu-jos', leg: 'Jos Museum, Nigeria.' },
  { img: 'nok-figura-ajoelhada', leg: 'Kneeling Nok terracotta figure, Honolulu Museum of Art (8348.1).' },
  { linha: [
    { d: 'c. 2500 BC or earlier', t: 'Pearl millet is domesticated in the Sahel', x: 'Long before the Nok, peoples farther north, in the Sahel, begin to grow pearl millet (*Pennisetum glaucum*), a plant adapted to poor soils and little water (the dates of domestication are debated). By the time the Nok appear, this cereal already existed as a crop in West Africa.' },
    { d: 'c. 1500 BC', t: 'First Nok sites', x: 'Small settlements with characteristic pottery appear in central Nigeria. This is the start of **Early Nok**. They were villages of a few huts, probably dispersed. Pearl millet farming was already practised, and according to the Frankfurt archaeobotanists this is one of the earliest known farming complexes of the region.' },
    { d: 'c. 900 BC', t: 'The first terracottas', x: 'Around this date the fired-clay sculptures appear, marking the beginning of **Middle Nok**. We do not know why the culture began to model such elaborate human figures at this time, or whether the idea arose here or was inspired from elsewhere.' },
    { d: 'c. 900 – 400 BC', t: 'The peak: many sites, much production', x: 'This is the period with the most sites and the most terracottas. The pieces seem to belong to a style recognisable over a wide area, suggesting links between communities and perhaps travelling sculptors (a hypothesis of the Frankfurt team).' },
    { d: 'c. 8th – 6th century BC', t: 'Possible first ironworking', x: 'Some researchers suggest dates this early for the start of Nok iron, but the most solid direct evidence is later. This is one of the open questions.' },
    { d: 'c. 500 BC', t: 'Iron is certainly present', x: 'At the site of Intini, the Frankfurt project obtained radiocarbon dates between about **519 and 410 BC** associated with iron smelting (furnaces and slag). These are among the most secure dates for Nok iron.' },
    { d: 'c. 500 BC (Jemaa head)', t: 'The Jemaa head is dated', x: 'The famous **Jemaa head** was dated by thermoluminescence to c. 500 BC. The date is approximate, with a margin of uncertainty, and it was one of the first indications that this sculptural tradition was very old.' },
    { d: 'c. 400 BC', t: 'Late Nok begins', x: 'Terracotta production declines and fewer sites are known. Why, we do not know for sure. Hypotheses include soil exhaustion, climate change or other social changes that we cannot detect.' },
    { d: 'c. 4th – 3rd century BC', t: 'The furnaces of Taruga', x: 'At Taruga, in the Abuja region, iron furnaces were excavated with charcoal dated to the 4th–3rd century BC (one sample c. 280 BC). They are the most famous furnaces of the Nok world, even though iron existed at other Nok sites from earlier.' },
    { d: 'c. AD 1', t: 'The end of the Nok culture', x: 'Around the beginning of the Christian era, terracottas and the typical pottery **stop appearing**. In later sites we find populations with different pottery and other plants, such as fonio. Whether the Nok died out, migrated or transformed is a matter of debate (see the *Legacy* tab).' },
    { d: 'c. AD 200', t: 'The old date for the end', x: 'For decades, books said the Nok vanished around AD 200. The recent Frankfurt chronology points to an earlier date. The difference shows how data change.' },
    { d: 'c. 9th century AD', t: 'Igbo-Ukwu, another focus of Nigerian art', x: 'In south-eastern Nigeria, the site of Igbo-Ukwu yields bronzes of great refinement (c. 9th–10th century AD). There is no proof of a link with the Nok, who are separated from it by more than 800 years.' },
    { d: 'c. 12th – 15th century AD', t: 'Ife and Yoruba art', x: 'At Ife, in south-western Nigeria, naturalistic terracotta and brass heads flourish. The resemblance to Nok pieces struck the first scholars, but more than a thousand years separate the two traditions.' },
    { d: '1928', t: 'First terracotta recorded', x: 'According to the most-cited account, Colonel **Dent Young**, a partner in a mining firm, accidentally unearthed a small terracotta head (described as a monkey’s) some seven metres down in an alluvial tin mine near the village of Nok, and handed it to the Department of Mines museum in Jos. The piece’s importance was only understood later. Details vary by source.' },
    { d: '1943', t: 'The discovery: Nok and Jemaa', x: 'In the Nok region, next to the Jos Plateau, a tin-mine employee finds a terracotta head, the Jemaa head, and uses it as a scarecrow in a yam field. The British archaeologist **Bernard Fagg** sees it, notes its resemblance to earlier pieces and recognises its importance. Details of the discovery vary by source.' },
    { d: '1944 – 1950s', t: 'Fagg gathers the pieces and names the culture', x: 'Fagg collects nearly two hundred terracottas from whatever mining had turned over: pits, gravel, fields. He calls the whole the «Nok culture». Almost all the pieces come from disturbed contexts, with no information on the exact place, and this limited for decades what could be known.' },
    { d: '1952', t: 'Jos Museum', x: 'Fagg founds the Jos Museum, often described as the first public museum in Nigeria, where he keeps and displays the Nok pieces.' },
    { d: '1960s', t: 'Excavation of Taruga', x: 'Fagg excavates Taruga (work from 1961) and finds, in the same site, Nok terracottas and iron furnaces with dates of the 4th–3rd century BC. It is the first proof that the Nok worked iron.' },
    { d: '1960s – 1970s', t: 'The Nok–Ife hypothesis', x: 'Fagg, his brother William Fagg and Frank Willett argue that Nok art might lie at the origin of the art of Ife and Benin (in Nigeria). The hypothesis is elegant but **unproven**, because of the long gap in time between them.' },
    { d: '1979', t: 'The NCMM is created', x: 'Nigeria creates the National Commission for Museums and Monuments (NCMM), with power to regulate the sale and export of antiquities.' },
    { d: '1994 – 1995', t: 'The peak of looting', x: 'International demand leads to mass illegal digging: according to one account, about ten terracottas a day were being dug up. Looters destroy the contexts, and scientific information is lost for ever.' },
    { d: '1998 – 2002', t: 'The Louvre buys, Nigeria protests', x: 'France buys from a Brussels dealer three sculptures (two Nok and one Sokoto) for 2.5 million francs, and displays two of them in the Louvre’s Pavillon des Sessions (opened in April 2000). Nigeria contests the purchase, because the pieces were on the ICOM Red List. A 2002 agreement recognises Nigerian ownership and provides for a 25-year loan, renewable; the exact terms are little publicised.' },
    { d: 'c. 2005 – 2021', t: 'The Frankfurt Nok Project', x: 'A team from Goethe University Frankfurt, led by **Peter Breunig** and **Nicole Rupp**, systematically excavates dozens of sites (Janjala, Samun Dukiya, Ifana, Pangwari and others), funded by the German DFG. For the first time, the terracottas are studied in context.' },
    { d: '2013 – 2014', t: 'Exhibition in Frankfurt', x: 'The Liebieghaus in Frankfurt stages «Nok: Origin of African Sculpture», a major exhibition with Nigerian pieces and results of the project.' },
    { d: '2022', t: 'Archaeobotanical study', x: 'A study of charred plants from about 50 sites concludes that pearl millet makes up some 83% of Nok plant remains, and that charcoal shows no degradation of vegetation during the Nok period, which runs against one of the hypotheses for the end of the culture.' },
    { d: 'Today', t: 'A culture still to be deciphered', x: 'More than 90% of known sites have been looted. Even so, the Frankfurt project showed that many questions can be answered. The answers that exist are mostly partial.' }
  ] }
];

const mapa = [
  'The Nok had no cities that we know of, so this «map» is different from that of civilisations with capitals. The Nok lived in **small settlements** scattered across the savanna, with a few huts each. What we have are **archaeological sites**: places that yield pieces and information. These are the main ones.',
  { img: 'nok-mapa-sitios', leg: 'Schematic map of central Nigeria: Niger and Benue rivers, Jos Plateau and approximate positions of published Nok sites; circles indicate sites, hollow squares indicate Abuja, Kaduna and Jos as geographic references.' },
  { tabela: { cab: ['Site', 'Where (approx.)', 'Why it matters'], linhas: [
    ['Nok', 'Southern Kaduna State, next to the Jos Plateau', 'The village that gave the culture its name; the first terracottas turned up in tin mines in this area'],
    ['Jemaa', 'Southern Kaduna State', 'Origin of the Jemaa head, dated to c. 500 BC, a key piece of the discovery'],
    ['Taruga', 'Abuja region, central Nigeria', 'Iron furnaces and terracottas excavated by Bernard Fagg from 1961; dates of the 4th–3rd century BC'],
    ['Samun Dukiya', 'Nok area, central Nigeria', 'Site with many terracotta fragments, excavated by Angela Fagg and later by the Frankfurt project'],
    ['Janjala', 'Central Nigeria', 'A Frankfurt project site, with charred plants that help reveal diet'],
    ['Ifana', 'Central Nigeria', 'About twenty features with terracottas (possible graves), which led the team to propose a funerary function'],
    ['Pangwari', 'Central Nigeria', 'A site excavated by the Frankfurt project (pottery and chronology)'],
    ['Intini', 'Central Nigeria', 'Iron smelting dated to c. 519–410 BC'],
  ] } },
  { img: 'nok-planalto-jos', leg: 'Jos Plateau: a rocky hillside beside a road, photographed by Aart Rietveld (1970–1973).' },
  { h: 'Nok, Jemaa and the Jos Plateau' },
  'The Jos Plateau is rich in **tin**, and it was mining, in the 1920s–1940s, that brought the first terracottas to light. Miners used water jets to wash the earth and turned over sediments many centuries old. Out came heads, legs, arms and fragments, often with no information about the exact place. It was in this context, in the village of Nok and around Jemaa, that the culture received its name.',
  { img: 'nok-mineracao-estanho', leg: 'Open-cast tin mining in the Bukuru/Ropp area, Jos Plateau, c. 1930; ore sluice boxes.' },
  { h: 'Taruga and iron' },
  'At Taruga, Bernard Fagg found **thirteen iron furnaces** (the most-cited count) and slag, together with Nok terracottas, and obtained radiocarbon dates from the 4th–3rd century BC. Taruga remains the most-cited Nok iron site, but the Frankfurt archaeologists think iron existed at other Nok sites from earlier.',
  { img: 'nok-forno-ferro', leg: 'Interpretive cross-section of a bloomery iron-smelting furnace, c. 500–400 BC, with charcoal, ore, tuyères and bloom formation at the base; not a measured reconstruction of a specific furnace.' },
  { h: 'Samun Dukiya, Janjala, Ifana: the Frankfurt project' },
  'From 2005 the Frankfurt team excavated entire settlements, not only loose fragments. At **Ifana**, where they identified about twenty features with terracottas, the arrangement of the pieces suggested funerary contexts. **Janjala** and other sites yielded charred plants that show what people ate. At **Samun Dukiya** and elsewhere, many broken pieces were found, suggesting that breaking the sculptures was part of a ritual (see the *Society* tab). All were small sites, with a few huts, not cities.',
  { img: 'nok-escavacao', leg: 'Landscape and excavations at the Nok site of Ido: features, terracotta deposition and a vessel; a published research montage.' },
  { h: 'Rivers, savanna and routes' },
  'The Nok lived north of the confluence of the great **Niger** river and the **Benue**. We have no evidence of Nok trade routes like those of other civilisations. There are signs of pottery and terracotta styles shared over a wide area, suggesting regular contact between communities, but we know no cities, markets or goods. Iron ore, clay and wood for charcoal were available locally.',
  { img: 'nok-rio-benue', leg: 'Benue River looking southeast from Jimeta/Yola, Nigeria.' },
  { h: 'The museums' },
  'The Nok terracottas that can be seen in Nigeria are in museums such as the **Jos Museum** (founded by Fagg in 1952), the **National Museum in Lagos** and others of the NCMM. Outside the country, there are pieces in museums in the United Kingdom, Germany, France and the USA, some arrived legally, others not.',
  { img: 'nok-museu-lagos', leg: 'National Museum Lagos, Nigeria.' }
];

const sociedade = [
  'This is the chapter where it is most obvious that the Nok are an archaeological culture: about their society **almost everything is unknown**. In each section, the text says what the objects allow us to state, what is only hypothesis and what we simply do not know.',
  { caixa: 'A note on rigour', texto: 'There are no Nok texts. Almost all bones have vanished in acid soil. So we know no languages, names, kings, laws, gods or beliefs. Everything that follows about Nok thinking is **interpretation**.' },
  { h: 'Politics and social classes' },
  'We do not know whether there were kings, chiefs or councils. Houses and settlements seem small and scattered, with no known palaces, walls or monumental buildings, and there is no sign of a state. The sculptures, however, show people with many beads, bracelets, necklaces and elaborate hairstyles. This led some to see **elites** there: people of status, leaders or important ancestors. Others point out that the adornments may simply be an artistic style. Producing such large and elaborate pieces required specialists, and the Frankfurt team thinks some sculptors travelled between communities. Concluding that «social classes» existed without texts is risky.',
  { img: 'nok-cabeca-penteado', leg: 'Nok terracotta head with an elaborate hairstyle, Cleveland Museum of Art (1995.21).' },
  { h: 'The terracotta sculptures' },
  'The terracottas are the hallmark of the Nok. They were made **without a potter’s wheel**, from superimposed coils of clay, leaving the pieces hollow inside, then smoothed and carved in detail. The figures can be nearly life-size: some would have been over a metre tall, although most survive only in fragments. They generally have: **triangular or D-shaped eyes**, with a pierced pupil; a **broad nose**; an **open mouth**; **proportionally large heads**; **very elaborate hairstyles** (braids, buns, layered hair); and many **adornments** (necklaces, bracelets, armlets, anklets, bead skirts). There are standing, kneeling and **seated** figures, and also animals (for example elephants, snakes and monkeys) in smaller numbers.',
  { img: 'nok-olhos-triangulares', leg: 'Nok head with triangular eyes and pierced pupils, Honolulu Museum of Art (8349.1).' },
  { img: 'nok-figura-adornos', leg: 'Female Nok figure, Kuchamfa substyle, with necklaces and bracelets; photograph of a collection object.' },
  { img: 'nok-animal-terracota', leg: 'Zoomorphic terracotta sculpture attributed to Nok culture and identified as a giraffe by the source.' },
  { img: 'nok-oleiros-reconstrucao', leg: 'Hypothetical artistic reconstruction of Nok sculptors building a hollow terracotta head with clay coils, c. 500 BC. AI-generated illustration.' },
  { h: 'Are they the oldest of sub-Saharan Africa?' },
  'It is a much-repeated phrase and deserves care. What can be safely said is that Nok terracottas are among the **oldest large-scale figurative sculptures** known in **West and Central Africa**, and that they predate by over a thousand years other great traditions of the region (such as Ife). But «oldest in sub-Saharan Africa» depends on how it is defined: there is **rock art** and **small figures** far older, sculptures from **Nubia** and **Kush** (in the Nile valley, also south of Egypt), and smaller clay figures in the Lake Chad basin. Saying that they are the oldest **large-scale, fired-clay sculptures in West Africa** is more accurate.',
  { h: 'Religion and the function of the sculptures' },
  'Why were these sculptures made? Nobody knows for sure. There are three main hypotheses, which do not exclude one another:',
  { lista: [
    '**Ancestors and funerary rites.** The Frankfurt archaeologists found pieces deliberately broken and deposited near possible graves. This indicates they were used in **funerary rituals**, perhaps as images of ancestors or of the dead.',
    '**Representation of elites.** The adornments and the pose of the seated figures suggest people of status, but we do not know whether they are real individuals, social types or spiritual beings.',
    '**Link to iron.** For a long time a link between the sculptures and ironworking was proposed. Today it looks less likely, because iron appeared at least a few hundred years after the culture began.'
  ] },
  { tabela: { cab: ['Idea', 'Evidence', 'Degree of certainty'], linhas: [
    ['Funerary rituals', 'Fragments deliberately broken and deposited next to possible burials', 'Strong hypothesis, but only at some sites'],
    ['Ancestors', 'Individualised faces; a widespread custom in West Africa', 'Plausible, no direct proof'],
    ['Elites or chiefs', 'Adornments, hairstyles, seated pose', 'Possible; may also be just style'],
    ['Specific gods', 'No figure is identifiable as a deity', 'We know nothing']
  ] } },
  { img: 'nok-ritual-reconstrucao', leg: 'Artistic interpretation of a possible ritual deposition of terracotta fragments, c. 400 BC; a funerary meaning is a hypothesis, not a documented ceremony. AI-generated illustration.' },
  { h: 'Economy and agriculture' },
  'The staple was **pearl millet**, a hardy cereal that does well in poor soils. In a large study of charred plants, it makes up about 83% of plant remains from 50 sites (the authors allow that its consumption may also have had a ritual dimension). Also present, in much smaller quantity, are cowpea (under 0.2%) and wild tree fruits such as *Canarium schweinfurthii* and *Nauclea latifolia*. There were **grindstones** to grind the cereal. As for domestic animals and hunting, few remains survive, because acid soil destroys bone, and we cannot say with certainty what they raised. The Nok were probably **settled farmers** who supplemented their diet with gathering and hunting. Other plants, such as gourds, are not documented in the published archaeobotanical data.',
  { img: 'nok-milho-miudo', leg: 'Contemporary pearl millet (mahangu) field in northern Namibia; an example of the crop cultivated by Nok communities, not a Nok field.' },
  { h: 'Writing' },
  'There is no Nok writing. There are no signs, inscriptions, seals or tally marks. All we know comes from objects and material remains: it took archaeology to make them «speak». That is why the Nok culture is known as a **prehistoric or proto-historic** culture, in the sense that it left no documents.',
  { h: 'Houses and settlements' },
  'Nok sites are small: according to Breunig, «few huts on each site», suggesting dispersed farmsteads or small villages, not large towns. Houses would have been of perishable materials (wood, clay, thatch), so they left almost no traces, only post holes and stains in the soil. Pits and rubbish deposits were useful for studying pottery and plants.',
  { img: 'nok-aldeia-reconstrucao', leg: 'Hypothetical artistic reconstruction of a small Nok farming community, c. 800 BC, with huts, pearl millet, pottery and grinding stones. AI-generated illustration.' },
  { h: 'Material culture: pottery and stone' },
  'Nok **pottery** is very distinctive, with stamped and incised decoration in bands, and it is by pottery that archaeologists recognise the sites and the phase of the culture (it changed over 1,500 years). There are also **grindstones**, **polished stone axes**, stone beads and other personal objects. These pieces are the main chronological tool.',
  { img: 'nok-contas', leg: 'Egyptian Twenty-fifth Dynasty necklace with carnelian, glass and glazed beads, Auckland Museum (1926.225); a comparison of ancient African ornaments, not attributed to Nok culture.' },
  { img: 'nok-ceramica', leg: 'Fragment of a Nok ceramic vessel with several figures in half-relief; photograph of a collection object.' },
  { img: 'nok-machado-pedra', leg: 'Flaked and polished dolerite tools and other objects from Kamabai Rock Shelter, Sierra Leone, photographed in Freetown in 1968; a regional comparison, not attributed to Nok.' },
  { h: 'Technology: iron' },
  'The Nok are famous for **ironworking**. Iron was obtained by **reducing the ore** in clay furnaces, heated with wood charcoal to over 1,000 °C, and then forged. At Taruga, furnaces and slag were found, and at Nok sites tools and weapons have been recovered (spear points, bracelets, knives). There is a curious detail: they seem to have passed directly from stone to iron, **without a «Bronze Age»**. Iron was probably scarce, since stone tools stayed in use.',
  { img: 'nok-ferreiros-reconstrucao', leg: 'Hypothetical artistic reconstruction of Nok ironworkers smelting ore and extracting a bloom from a clay furnace, c. 400 BC. AI-generated illustration.' },
  { img: 'nok-ferro-objetos', leg: 'Illustration of hypothetical early iron objects — spear point, bracelet and blade — beside pottery sherds; not a representation of identified Nok finds. AI-generated illustration.' },
  { caixa: 'The debate: was iron invented in Africa?', texto: [
    'Ironworking appears in Western Asia (Anatolia) in the 2nd millennium BC. In Africa, there are two explanations for sub-Saharan metallurgy. **Diffusion** argues the technique came from the north, through Carthage or the kingdom of Meroe. **Independent invention** argues that sub-Saharan communities developed it on their own. The second gained strength because iron appears very early at several places (Nigeria, Niger, Cameroon, Rwanda, Tanzania) without passing through a copper or bronze stage, which is unusual. But **the dates of those sites are disputed**, and the question is not closed. The Nok are only one case in the debate.'
  ] },
  { h: 'Food, clothing and music' },
  '**Food** rested on pearl millet, in porridges or doughs made from ground cereal. As for **clothing**, the terracottas show people with necklaces, bracelets, anklets and bead skirts, but we do not know what fabrics they wore, since they do not survive. On **music and games**, there is no clear evidence: some figures have been read as musicians, but the interpretation is uncertain. It is a good example of how the image of a culture without texts is full of gaps.',
  { h: 'Science and war' },
  'We know nothing certain about Nok mathematics, astronomy or medicine. About **war**, too, little: iron spear points have been found, which could serve for hunting or fighting. There are no walls, fortresses or battle scenes. It would be a mistake to imagine them as a warlike people or as a peaceful one: we simply do not know.'
];

const personalidades = [
  'The Nok left no names. Everyone on this list is a **scholar** or a figure in the story of the discovery. The first entry is the only possible «portrait» of the Nok: the anonymous sculptors.',
  { h: 'The anonymous sculptors' },
  'Whoever made the Nok terracottas left no name. But the technique, the scale and the repetition of conventions (eyes, hairstyles) show that there were **trained artists**, who passed on a tradition over centuries. The Frankfurt team proposes that some of them were itinerant. That is what we know, and it is little.',
  { img: 'nok-cabeca-grande', leg: 'Nok terracotta head photographed in Lagos by Philip Gaunt, UNESCO archive; the source does not confirm its size or identify it as the Jemaa head.' },
  { h: 'Dent Young' },
  'British colonel and partner in a mining firm who, in 1928, according to the most-cited account, unearthed a small terracotta head in a tin mine near the village of Nok. It was the first piece recorded, but only years later, with Fagg, was its value understood. Details of the episode vary by source.',
  { h: 'Bernard Fagg (1915–1987)' },
  'British archaeologist, a colonial administration officer in Nigeria, and the central figure in the discovery of the Nok. In 1943 he saw the Jemaa head and grasped its importance, gathered nearly two hundred pieces and **named the culture**. He founded the **Jos Museum** in 1952 (often described as the first public museum in Nigeria), excavated **Taruga** in the 1960s and was later Curator of the Pitt Rivers Museum, Oxford (1963–1975). He defended a link between the Nok and Ife, a hypothesis that remained unproven.',
  { img: 'nok-fagg', leg: 'Bernard Fagg’s former compound in Nok village, Kaduna State, photographed in 2022.' },
  { h: 'Angela Fagg' },
  'An archaeologist connected to Bernard Fagg (sources differ on the family relationship), who excavated the site of Samun Dukiya, in the Nok area, and whose name appears in publications on the Nok. Details of her career and exact role are hard to confirm.',
  { h: 'William Fagg (1914–1992)' },
  'Bernard’s brother, a historian of African art and a curator at the British Museum. He noticed the resemblance between Nok art and that of Ife and Benin and helped to propose the idea of artistic continuity, which is now regarded with caution.',
  { h: 'Frank Willett (1925–2006)' },
  'British archaeologist who excavated at Ife and wrote about the relationship between the art of Ife and that of Nok. He contributed to the hypothesis that both belong to a great West African clay-sculpture tradition, a hypothesis later questioned because of the long gap in time.',
  { h: 'Ekpo Eyo (1931–2011)' },
  'Nigerian archaeologist who headed Nigeria’s Federal Department of Antiquities (1968–1979) and then the NCMM (until 1986), and was one of the strongest voices in defence of the country’s heritage against the looting and trafficking of pieces such as Nok terracottas.',
  { h: 'Peter Breunig' },
  'German archaeologist at Goethe University Frankfurt. Since the mid-2000s he has led the **Nok Project**, funded by the DFG. His work changed the chronology of the culture (it begins c. 1500 BC) and showed that serious data could be obtained even in a heavily looted region.',
  { img: 'nok-universidade-frankfurt', leg: 'IG Farben Building, Goethe University Frankfurt Westend campus.' },
  { h: 'Nicole Rupp' },
  'German archaeologist, field and research coordinator in the Frankfurt project, with work on the contexts of the terracottas and on chronology. With Breunig she published the synthesis that reorganised the phases of the culture.',
  { h: 'Katharina Neumann and Stefanie Kahlheber' },
  'Archaeobotanists of the project. They studied the charred plants showing that the Nok lived on pearl millet, and what charcoal reveals about vegetation and climate. Their work is our best source on diet and environment.',
  { h: 'The Nigerians in the field' },
  'Many Nigerian archaeologists, technicians and local communities did the excavation work, and the communities of the region kept, and sometimes reported, finds. Their names rarely reach the publications, and it is only fair to remember them.'
];

const legado = [
  { h: 'What they left' },
  'The Nok left **images**, and almost nothing else that can be read: terracottas, pottery, stone and iron tools, and the remains of crops. For art history they showed that large-scale figurative sculpture in West Africa is at least 2,500 years old. For the history of technology they show that iron was worked in the region very early. For archaeology they are the example of a complex society that existed **without writing**.',
  { img: 'nok-cabeca-jemaa', leg: 'Nok terracotta head at the Kimbell Art Museum; an alternative image, not identified as the Jemaa head.' },
  { h: 'Nok, Ife and the Igbo: a controversy' },
  'Three traditions of Nigerian art are usually compared: **Nok** (c. 900 BC – c. AD 1), **Igbo-Ukwu** (bronzes of the 9th–10th century AD) and **Ife** (naturalistic heads of the 12th–15th century AD). Fagg and others saw Nok as an ancestor of Ife, and some also propose ties between the Nok and present-day peoples (Yoruba, Jukun, Dakakari, Bassa). But there are serious problems: the gap between Nok and Ife is over **1,000 years**, with no secure intermediate pieces, and between Nok and Igbo-Ukwu there are over 800 years. A direct link to the Igbo has no support. The honest answer is: the resemblance is real, **continuity is a hypothesis**, and proof is missing.',
  { img: 'nok-ife-cabeca', leg: 'Brass head of an Ife king (Ooni), fourteenth or early fifteenth century, British Museum; an example of a tradition much later than Nok.' },
  { img: 'nok-igbo-ukwu', leg: 'Bronze ceremonial vessel shaped like a snail shell, Igbo-Ukwu, ninth century AD, National Museum Lagos; a tradition much later than Nok.' },
  { h: 'The disappearance' },
  'Around the start of our era, Nok terracottas and pottery **stop appearing**. Why? There are several hypotheses, and none is proven:',
  { lista: [
    '**Exhaustion of soils and trees.** Some researchers, including members of the Frankfurt team, proposed that intensive land use and the demand for charcoal wood, especially in Middle Nok, degraded the environment.',
    '**Climate change.** Drier spells may have forced people to move or change their way of life.',
    '**Social change.** The culture may have transformed: people stayed, but abandoned the production of sculptures and the pottery style.',
    '**Migrations.** Other peoples may have arrived in the region, bringing new habits and new plants.'
  ] },
  'There are counter-arguments: the 2022 archaeobotanical study found no sign of vegetation degradation during the Nok period. No explanation commands consensus, and the most prudent thing to say is: **the Nok vanish from the archaeological record, but we do not know whether the people vanished**. Some of their descendants probably stayed in the region.',
  { h: 'Looting and the defence of heritage' },
  'The fame of Nok terracottas has had an enormous cost. Since the 1970s, and above all in the 1990s, the international market paid well for Nok pieces, and **illegal digging** destroyed sites. According to one account, at the peak (1994–95) about ten pieces a day were being dug up. It is estimated that **over 90%** of known sites have been looted. Worse, a looting destroys the **context** (where it lay, with what), which is the most valuable information. To complicate matters, many pieces for sale are **fakes**, and thermoluminescence was used to authenticate them, but there were also fraudulent certificates.',
  'Nigeria protected the pieces by law (the **NCMM** was created in 1979 and regulates antiquities) and Nok terracottas appear on the **ICOM Red List** of African archaeological objects at risk, which warns museums and dealers about their illegal trade. The 1970 UNESCO Convention against the trafficking of cultural property was ratified by Nigeria in 1972 and by France in 1997.',
  { img: 'nok-red-list', leg: 'Introductory panel about Nok culture at the National Museum Nok, photographed in 2022; a heritage interpretation image used instead of the ICOM Red List cover.' },
  { h: 'The Louvre case' },
  'In 1998–99, the French state bought from a dealer in Brussels, for 2.5 million francs, three sculptures (two Nok and one from the Sokoto culture), intended for the **Pavillon des Sessions** of the Louvre, the space dedicated to the arts of Africa, Asia, Oceania and the Americas, opened in April 2000, where two of them were displayed. Nigeria protested because, in its argument, the pieces were on the ICOM Red List and their export was illegal. After public criticism, a 2002 agreement (Nigeria’s initial approval dates from 2000) recognised Nigeria as the owner and the pieces stayed in France on a **25-year loan, renewable**; the exact terms are little publicised and there are reports of later changes. The case shows the tension between the prestige of museums and the protection of heritage. According to some sources the pieces are now in the Musée du quai Branly – Jacques Chirac; their current location should be confirmed directly with the museums.',
  { img: 'nok-louvre-sessions', leg: 'Exterior view of the Pavillon des Sessions, Louvre, Paris, with La Rivière in the foreground; photograph from 2006.' },
  { h: 'Where to see Nok terracottas' },
  { lista: [
    '**Jos Museum** (Nigeria): the museum founded by Bernard Fagg, with a large collection.',
    '**National Museum, Lagos** (Nigeria): pieces and large-scale heads.',
    '**Paris** (Louvre and Musée du quai Branly): the pieces from the 1998 case; their current location and display should be confirmed.',
    '**Liebieghaus** (Frankfurt): hosted the 2013–2014 «Nok» exhibition and has associated research.',
    'Other museums, in the UK and the USA, hold pieces of varied origin: it is essential always to ask how they got there.'
  ] },
  { img: 'nok-liebieghaus', leg: 'Main entrance of the Liebieghaus sculpture museum in Frankfurt.' },
  { caixa: 'A lesson', texto: 'The Nok remind us that a civilisation does not need writing, cities or kings to leave an extraordinary body of work. They also remind us that what we do **not** know is as important as what we do, and that every looted piece is an answer lost for ever.' }
];

const quiz = [
  { p: 'Where was the Nok culture located?', op: ['In the Nile valley', 'In central Nigeria', 'In Egypt', 'In the western Sahel, in Mali'], certa: 1, exp: 'The Nok culture was in central Nigeria, between Jos, Kaduna and Abuja.' },
  { p: 'Where does the name «Nok» come from?', op: ['The name of a king', 'A Nigerian village where the first pieces turned up', 'A god', 'A river'], certa: 1, exp: 'Nok is the village’s name; we do not know what the Nok called themselves.' },
  { p: 'What are Nok terracottas?', op: ['Bronze sculptures', 'Fired-clay sculptures', 'Rock paintings', 'Wooden masks'], certa: 1, exp: 'Terracotta is fired clay; Nok figures were made by hand, from coils of clay.' },
  { p: 'Who recognised the importance of the pieces in 1943 and named the culture?', op: ['Leonard Woolley', 'Bernard Fagg', 'Howard Carter', 'Peter Breunig'], certa: 1, exp: 'Bernard Fagg, a British archaeologist in Nigeria, gathered about 200 pieces and called them Nok.' },
  { p: 'How did the first terracottas turn up?', op: ['In archaeologists’ excavations', 'In tin mines on the Jos Plateau', 'On the seabed', 'In a library'], certa: 1, exp: 'It was the work of tin miners that turned over the earth and brought the pieces to the surface.' },
  { p: 'What feature is typical of Nok heads?', op: ['Triangular eyes with pierced pupils', 'Gold crowns', 'A single braid', 'Long beards'], certa: 0, exp: 'Triangular or D-shaped eyes with pierced pupils are a stylistic hallmark, along with elaborate hairstyles.' },
  { p: 'According to the Frankfurt chronology, when does the Nok culture begin?', op: ['c. AD 500', 'c. 1500 BC', 'c. 3000 BC', 'c. 200 BC'], certa: 1, exp: 'The Frankfurt team showed the culture begins c. 1500 BC, and the terracottas only c. 900 BC.' },
  { p: 'What cereal was the staple of Nok food?', op: ['Wheat', 'Rice', 'Pearl millet', 'Barley'], certa: 2, exp: 'Pearl millet makes up the great majority of identified Nok plant remains.' },
  { p: 'Did the Nok leave writing?', op: ['Yes, cuneiform', 'Yes, hieroglyphs', 'No, no Nok writing is known', 'Yes, an alphabet of their own'], certa: 2, exp: 'There is no Nok writing; that is why their society and beliefs are so hard to reconstruct.' },
  { p: 'What was excavated at Taruga?', op: ['Iron furnaces and terracottas', 'A city wall', 'A library', 'A palace'], certa: 0, exp: 'Fagg excavated iron furnaces and Nok terracottas at Taruga in the 1960s.' },
  { p: 'What is the debate about iron in sub-Saharan Africa?', op: ['Whether it was brought by Portuguese ships', 'Whether it was invented independently or came from the north', 'Whether it was made of bronze', 'Whether it was only used for jewellery'], certa: 1, exp: 'It is debated whether ironworking was invented locally or spread from the north; the question remains open.' },
  { p: 'What is the strongest hypothesis for the function of the terracottas?', op: ['Children’s toys', 'Funerary rituals and ancestor cults', 'Money', 'War idols'], certa: 1, exp: 'There are deliberately broken fragments deposited next to possible graves, but the function is not proven.' },
  { p: 'What is the prudent position on the link between Nok and Ife?', op: ['It is proven in writing', 'It is a hypothesis: there is resemblance, but over a thousand years’ gap', 'The Nok founded Ife', 'They are the same culture'], certa: 1, exp: 'Fagg and Willett proposed the link, but the lack of proof and the time gap prevent certainty.' },
  { p: 'What problem has hit Nok sites since the 1990s?', op: ['Floods', 'Illegal digging and trafficking of pieces', 'Forest fires', 'Earthquakes'], certa: 1, exp: 'Over 90% of known sites have been looted, and the context of the pieces was lost.' },
  { p: 'What is known about the disappearance of the Nok?', op: ['They were wiped out by a war', 'They vanished from the archaeological record around the start of the era, but the causes are debated', 'They were conquered by Egypt', 'A volcanic eruption'], certa: 1, exp: 'Terracottas stop appearing c. AD 1, and the hypotheses (soils, climate, social change) remain debated.' }
];

export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };
