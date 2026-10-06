// IFE AND BENIN — full content in English. Same structure and image ids as dados.js (Portuguese).
// Dates are approximate. The project covers up to c. AD 1500; later events (Portuguese contact, Benin under Esigie, the 1897 British expedition, restitutions) are in a short epilogue.
// Neither the Yoruba nor the Edo had writing before European contact: much of the history comes from oral tradition, archaeology and European visitors’ accounts. Debated points are flagged.

const visao = [
  { caixa: 'In brief', texto: [
    '**Ile-Ife** (or Ife) and the **Kingdom of Benin** were two centres of power and art in the tropical forest of West Africa, in what is now south-western **Nigeria**. For the Yoruba, Ife is the city where the world began; between c. 1000 and c. 1500 its artists made terracotta and brass heads of such startling naturalism that, when they reached Europe, many people refused to believe they were African. Benin, to the south-east, was a kingdom of divine kings (the **Oba**), with a capital ringed by ditches and walls, a guild of casters serving the court, and a diplomacy that reached Lisbon in the sixteenth century.',
    'The two are linked by traditions of kingship, by origin myths and, according to Benin tradition, by the casting of metal. The exact nature of that link is **debated**, and this chapter explains why.'
  ] },
  { img: 'ife-mapa-regiao', leg: 'Geographic map of southern Nigeria with Ile-Ife and Benin City; Natural Earth coast and rivers, with a Wikimedia Commons Yoruba peoples map inset.' },
  { h: 'Where it lay' },
  'Ile-Ife lies in today’s Osun State, in south-western Nigeria, in a zone of moist forest turning to savanna, some hundreds of kilometres from the coast. The name is usually translated as “the house of expansion” (Ile, house; Ifẹ̀, expansion or spreading), tied to the myth in which the earth spread out over the water. **Benin City** (in today’s Edo State) lies about 170 km south-east of Ife as the crow flies, in the land of the **Edo** people (also called the Bini). **Beware:** the Benin discussed here has nothing to do with the present-day Republic of Benin (formerly Dahomey), which lies further west.',
  'The rainforest provided timber, ivory, pepper, palm oil and kola nuts; rivers and lagoons provided fish and transport. The yam was the staple food. The tsetse fly made it hard to keep horses, which shaped war and transport: infantry and canoes counted for more than cavalry.',
  { img: 'ife-paisagem-floresta', leg: 'Tropical rainforest in Bayelsa State, southern Nigeria; a contemporary photograph.' },
  { h: 'When they existed' },
  'There is no local writing for these centuries, so dates come from archaeology (radiocarbon and thermoluminescence), from oral king lists and from the first European accounts. Dates before c. 1450 are approximate and **debated**.',
  { tabela: { cab: ['Phase', 'Approximate dates', 'What marks it'], linhas: [
    ['Early Ife', 'c. AD 800 – 1000', 'Settlement and urban growth at Ife; glass and pottery (exact start and dating debated)'],
    ['Ife’s classical age', 'c. AD 1000 – 1400/1500', 'The city’s peak; sculptures in terracotta, stone and copper alloy (fine dating is debated; see Timeline)'],
    ['Igodomigodo and the Ogiso', 'c. AD 900 – c. 1180 (tradition)', 'First rulers of the future Benin, the “kings of the sky” (Ogiso), known only through oral tradition; origin of the kingdom'],
    ['The first Oba', 'c. AD 1180 – 1440', 'Eweka I and the early Oba; a still modest kingdom with powerful hereditary chiefs'],
    ['Ewuare and expansion', 'c. AD 1440 – 1473', 'Ewuare the Great: centralised power, walled city, conquests, metal art'],
    ['Ozolua and Esigie', 'c. AD 1481 – c. 1550', 'Contact with the Portuguese, expansion, the queen mother Idia (exact dates of Esigie are debated)'],
    ['Epilogue: after 1500', 'c. AD 1550 – 1897', 'Atlantic trade, civil wars, resistance and, in 1897, the destruction of the city by the British']
  ] } },
  { img: 'ife-cabeca-ife-bronze', leg: 'Royal brass head from Ife, discovered at Wunmonije in 1938, photographed at the British Museum.' },
  { h: 'Where did they come from?' },
  'The **Yoruba** speak a language of the Niger-Congo family. Archaeologists see in Ife a local development from forest village communities, not an arrival from outside. The **Edo** (or Bini) speak another language of the same great family, and their history begins, in tradition, with the region of **Igodomigodo**, ruled by the Ogiso. Both shared urban life in the forest and the idea that the king was a sacred being. The colonial-era notion that Ife’s art was made by Greeks or by survivors of Atlantis (Leo Frobenius, 1910) has **no basis whatever** and has been refuted: it is an example of how prejudice delayed the recognition of African art.',
  { h: 'Why they matter' },
  { lista: [
    '**Art:** the Ife heads and the Benin bronzes are among the great lost-wax castings in the history of art anywhere in the world.',
    '**City and State:** large, planned, walled cities, with sacred monarchies and complex administration, without writing.',
    '**Earthworks:** the walls and ditches of Benin are among the largest earthworks of the pre-mechanical age (see Map).',
    '**Africa–Europe contact:** Benin was among the first African kingdoms to exchange envoys and goods with Portugal, on relatively equal terms.',
    '**Memory and justice:** the 1897 looting and today’s restitutions are one of the great world debates about museums.'
  ] },
  { caixa: 'Ife and Benin today', texto: 'Ile-Ife remains the sacred city of the Yoruba, with its **Ooni** (king) and Obafemi Awolowo University. Benin City is the capital of Edo State and the seat of the **Oba of Benin**, today Ewuare II (since 2016), a descendant of the dynasty founded, according to tradition, by Eweka I. Guilds of casters still work on Igun Street in Benin City.' },
  { img: 'ife-oba-ewuare-ii', leg: 'Oba Ewuare II at the Igue festival, in a contemporary photograph.' }
];

const linha = [
  'This timeline runs to c. 1550. The later period appears in an epilogue at the end. Dates before c. 1450 are approximate; oral traditions are marked as such.',
  { linha: [
    { d: 'c. AD 800 – 1000', t: 'Ife grows into a city', x: 'Excavations at Ife show settlement and growing urbanisation in the ninth to eleventh centuries, with glass workshops; the famous **potsherd pavements** and quartz laid in patterns in streets and courtyards are, according to several authors, mostly from the following centuries (dating debated). Archaeologists debate whether the city arose earlier (some evidence reaches back centuries) or in this phase.' },
    { d: 'c. AD 850', t: 'Igbo-Ukwu: a bronze centre nearby', x: 'In south-eastern Nigeria, at Igbo-Ukwu, craftsmen cast vessels and ritual objects of great complexity in bronze by the lost-wax method (found in 1938 and excavated by Thurstan Shaw in 1959–60). It is **another** centre of metallurgy, earlier than Ife’s peak; any direct link with Ife or Benin is unknown. It appears here only as context.' },
    { d: 'c. AD 900', t: 'The Ogiso of Igodomigodo', x: 'According to Edo tradition, the region was ruled by a dynasty of kings called **Ogiso** (“kings of the sky”), of whom 31 are listed. The first are legendary; archaeologically, there are signs of organised settlement and earthworks from c. AD 800–900. Much is tradition, little is confirmed.' },
    { d: 'c. AD 800 – fifteenth century', t: 'Building the earthworks (Iya) of Benin', x: 'Ditches and banks of earth ring villages and the city over centuries. The Guinness Book of Records gives them the title of largest earthwork of the pre-mechanical era (an estimate of c. 16,000 km associated with the archaeologist Patrick Darling, who surveyed the earthworks from the 1970s; radiocarbon dates point to works from c. AD 800 to the fifteenth century). The figure is a much-discussed **estimate**; see Map.' },
    { d: 'eleventh – fifteenth centuries AD', t: 'The glass of Igbo Olokun', x: 'At a site near Ife (Igbo Olokun) a glass-bead workshop was found, among the earliest known in West Africa, active between the eleventh and fifteenth centuries. The beads circulated in regional trade networks.' },
    { d: 'c. AD 1000 – 1500', t: 'The age of the Ife artists', x: 'The terracotta, stone and copper-alloy sculptures that made Ife famous appear. Fine dating is **debated**: most of the metal pieces are usually placed between c. 1100 and 1500, with many assigned to the fourteenth–fifteenth centuries, but some propose shorter chronologies.' },
    { d: 'c. AD 1180', t: 'Eweka I, first Oba', x: 'Benin tradition says that, after the fall of the last Ogiso (Owodo) and a political crisis, the chiefs asked Ife for a prince to restore order. **Oranmiyan** came, but did not stay; his son **Eweka I**, born of an Edo woman, became the first Oba. The date (twelfth or thirteenth century) and the story itself are **debated**; see the box below.' },
    { d: 'thirteenth – fifteenth centuries AD', t: 'Oguola, Iguegha and brass', x: 'Tradition says the Oba Oguola asked Ife for a master caster, **Iguegha**, who taught the Edo to cast metal. Art historians place the start of Benin brass-casting around 1400; Edo tradition puts Oguola earlier. The date and the school of origin are **uncertain**, but a technical link between Ife and Benin is accepted by many specialists.' },
    { d: 'c. AD 1440', t: 'Ewuare the Great takes the throne', x: 'After a power struggle that included exile and civil war, Ewuare (born Ogun) becomes Oba. He reorganises the State, strengthens royal power and introduces succession by the eldest son (the Edaiken, crown prince).' },
    { d: 'c. AD 1440 – 1473', t: 'Ewuare’s city', x: 'Tradition credits him with extending the city’s **walls and ditches**, opening great streets, building the palace and conquering hundreds of settlements (201, according to tradition). Archaeology confirms works in the fifteenth century. The kingdom becomes a regional empire.' },
    { d: 'fifteenth century AD', t: 'Commemorative heads and ancestor altars', x: 'Casters of the **Igun Eronmwon** guild make brass heads for the altars of dead Oba. The earliest examples are thin and light; later ones grow larger and heavier. The tradition continues unbroken until 1897.' },
    { d: 'c. AD 1481 – 1504', t: 'Ozolua the conqueror', x: 'The Oba Ozolua, son of Ewuare, expands the kingdom and consolidates trade with the Portuguese. Tradition remembers him as a great warrior. His wife is **Idia**, mother of Esigie.' },
    { d: 'c. AD 1485 – 1486', t: 'The Portuguese arrive', x: 'Portuguese navigators reach the coast of the Gulf of Guinea in the 1470s. Around **1485–86**, **João Afonso de Aveiro** visits Benin, and this voyage is taken as the start of regular relations with Portugal. Dates vary slightly between sources.' },
    { d: 'sixteenth century AD', t: 'Manillas, pepper and brass', x: 'The Portuguese bring **manillas** (brass and copper bracelets), cloth and beads, and take away ivory, pepper and other goods. Historians think part of the metal of the Benin bronzes comes from these manillas, mainly of German origin; the exact source of the metal is debated. According to some historians, Benin for a time restricted the export of male slaves (**debated**).' },
    { d: 'c. AD 1506', t: 'The first written portrait of Benin', x: 'The Portuguese navigator and geographer **Duarte Pacheco Pereira** describes the kingdom and the city in his work “Esmeraldo de Situ Orbis” (early sixteenth century), one of the first European descriptions of Benin.' },
    { d: 'c. AD 1504 – 1550', t: 'Esigie and Idia', x: 'Esigie, son of Ozolua, takes the throne with the military support of his mother, **Idia**, against his half-brother Arhuaran. He is the first Oba to create the title of **Iyoba** (queen mother), for her. The exact dates of his reign vary between sources (from c. 1504 to c. 1517 for the start).' },
    { d: 'c. AD 1514 – 1516', t: 'Portuguese missionaries in Benin', x: 'Portuguese missionaries reach the court. Esigie learns Portuguese and allows Christian instruction for his son, but sources disagree about his own conversion. He asks them to delay preaching while he prepares the war against Idah. The Portuguese supply arquebusiers and other help (their exact role is debated).' },
    { d: 'c. AD 1515 – 1517', t: 'War against Idah (the Igala kingdom)', x: 'Benin defeats the **Igala** kingdom, with Idia remembered for her spiritual and political role. The victory is celebrated in art, including the queen mother’s ivory masks.' }
  ] },
  { img: 'ife-igbo-ukwu-vaso', leg: 'Snail-shell-shaped bronze ceremonial vessel, Igbo-Ukwu, 9th century, National Museum, Lagos.' },
  { img: 'ife-mascara-obalufon', leg: 'Copper mask attributed to Obalufon II, Ife, probably 12th–15th centuries.' },
  { img: 'ife-cabeca-terracota', leg: 'Terracotta head from Ife.' },
  { img: 'ife-placa-portugueses', leg: 'Brass plaque from Benin depicting Portuguese people.' },
  { img: 'ife-cabeca-oba-latao', leg: 'Commemorative brass head of an Oba of Benin.' },
  { h: 'Epilogue: after 1500' },
  'The “Civilizations” project ends around 1500, but Benin went on long afterwards. Here are the essentials, in broad strokes.',
  { linha: [
    { d: 'sixteenth – seventeenth centuries AD', t: 'The court’s brass plaques', x: 'Hundreds of **rectangular brass plaques** cover the palace pillars, with scenes of war, ritual, officials and Portuguese. Their exact dating is **debated** (mostly sixteenth–seventeenth centuries).' },
    { d: 'c. AD 1668', t: 'Dapper’s description', x: 'The Dutchman Olfert Dapper publishes a description of Benin based on travellers’ reports: broad streets, orderly houses and a great palace. It is one of the main European testimonies about the city before its destruction.' },
    { d: 'late seventeenth – eighteenth centuries', t: 'Civil wars and change', x: 'After centuries of power, the kingdom goes through succession disputes and civil wars. It recovers later but loses part of its extent. The trade in slaves, ivory and palm oil marks the eighteenth and nineteenth centuries.' },
    { d: 'AD 1897', t: 'The British punitive expedition', x: 'In January, a British delegation led by **James Phillips** is attacked near Benin and almost all are killed. In February, about 1,200 British servicemen take the city (on the 18th) and the palace burns soon after. The Oba **Ovonramwen**, who surrenders later that year, is exiled to Calabar. Many thousands of objects are looted (about 2,500 sent to Britain according to official figures; estimates of the total range from c. 3,000 to 5,000 or more) and later sold or given to museums.' },
    { d: 'AD 1910 – 1938', t: 'Frobenius and the discovery of the Ife heads', x: 'In 1910, the German ethnologist **Leo Frobenius** visits Ife, sees the art and proposes an “Atlantean” or Greek origin, refusing to believe it was African. In 1938, works in the **Wunmonije** compound uncover about 17 copper-alloy heads. Specialists would accept Yoruba authorship only in the following years.' },
    { d: 'AD 1948 – 1960s', t: 'Recognition and the archaeology of Ife', x: 'In 1948, an exhibition at the British Museum shows the Ife heads to the European public and changes perceptions of African art. In the 1950s and 1960s, **Frank Willett** directs excavations at Ife, confirms the local origin of the sculptures and proposes dates.' },
    { d: 'AD 2021 – 2022', t: 'Restitutions begin', x: 'In October 2021 the University of Aberdeen and Jesus College, Cambridge hand over the head of an Oba and the brass cockerel (okukor). In 2022 the **Horniman Museum** (London) announces a return in August and formally transfers ownership in November; the **Smithsonian** returns 29 pieces (October); **Germany** signs a declaration in July to restitute 1,130 objects and hands over the first ones on 20 December. The **British Museum**, with about 900 pieces, stands apart.' }
  ] }
];

const mapa = [
  'Ife and Benin were less a network of city-states than two kingdoms centred on a sacred capital. This map locates the main places; each is described below.',
  { img: 'ife-mapa-reinos', leg: 'Unlabelled map of southern Nigeria: star at Ife, square at Benin City, circles at Oyo-Ile, Ijebu-Ode and Warri. Geographic coast and rivers; generalized vegetation, with no reconstructed political boundaries.' },
  { tabela: { cab: ['Place', 'Kingdom or people', 'Location today', 'Known for'], linhas: [
    ['Ile-Ife', 'Yoruba', 'Osun State, Nigeria', 'Sacred city and cradle of the Yoruba; terracotta and brass heads; seat of the Ooni'],
    ['Benin City', 'Edo', 'Edo State, Nigeria', 'Capital of the Kingdom of Benin; palace; ditches and walls; guild of casters'],
    ['Igbo-Ukwu', 'Igbo', 'Anambra State, Nigeria', 'Bronzes of the ninth–tenth century; kingdom of Nri (context)'],
    ['Oyo (Old Oyo)', 'Yoruba', 'Oyo State, Nigeria', 'Later Yoruba power; cavalry; empire in the seventeenth–eighteenth centuries (context)'],
    ['Idah', 'Igala', 'Kogi State, Nigeria', 'Rival kingdom defeated by Esigie c. 1515'],
    ['Owo', 'North-eastern Yoruba', 'Ondo State, Nigeria', 'Terracotta and ivory sculpture; a neighbour with influence from both sides'],
    ['Ughoton (Gwato)', 'Edo', 'Near the coast, Edo State', 'Port of Benin, where the Portuguese landed']
  ] } },
  { h: 'Ile-Ife, the sacred city' },
  'Ife was not an imperial capital; it was the religious centre. For the Yoruba it is the place where the world was created and where humankind was born; the kingship of most Yoruba kingdoms (Oyo, Ketu, Ijebu, Owo and others) traces back to a prince of Ife. Archaeologists have found a city with quarters, workshops, streets with potsherd pavements and a palace. The **Ooni** is still today the most revered figure in the Yoruba world.',
  { img: 'ife-ile-ife-vista', leg: 'Contemporary view of Ile-Ife.' },
  { img: 'ife-opa-oranmiyan', leg: 'Opa Oranmiyan, granite monolith at Ife.' },
  { h: 'Benin City' },
  'The city of Benin, capital of the Oba, was described by sixteenth-century European visitors as large and well ordered, with broad, straight streets, quarters of craftsmen and a vast **palace** of courtyards, galleries and pillars covered in brass plaques. A great avenue divided the city between the palace sector and the craft sector. The city had **quarters by trade**, such as that of the brass casters, **Igun Street**, which still exists. Trades were hereditary and organised into guilds controlled by the court.',
  { img: 'ife-benim-dapper', leg: 'Engraving of Benin City published by Dapper in 1668.' },
  { img: 'ife-benim-palacio', leg: 'Hypothetical artistic reconstruction of the palace of Benin City, c. 1600, with pillars covered in brass plaques. AI-generated illustration.' },
  { h: 'The walls and ditches (Iya)' },
  'The city was ringed by ditches and banks (in Edo, **iya**) and, around it, by a network of trenches enclosing villages and territories. Some ditches were very deep. The archaeologist **Patrick Darling**, who surveyed the earthworks from the 1970s, estimated the total length at about **16,000 km**, and the Guinness Book of Records adopted it as the **largest earthwork in the world before the mechanical age**, with about 150 million cubic metres of earth moved (also an estimate). Caution is needed: that figure is an **estimate** for a network of thousands of local stretches, not a single continuous wall; and the record is a Guinness ranking, not a consensus conclusion of archaeology. Radiocarbon dates suggest construction from c. AD 800 into the fifteenth century, with the inner city wall c. 1460 and works attributed by tradition to Ewuare. According to many scholars, the function was above all to **mark and protect territory**, rather than continuous military defence.',
  { caixa: 'Largest in the world? What can be said', texto: 'The Guinness record refers to the **total length** of the network (c. 16,000 km, Darling’s estimate). It is an estimate for a system of thousands of stretches and not a single wall; so the prudent thing is to say that Benin has **one of the largest earthwork systems of the pre-mechanical age**.' },
  { img: 'ife-muralhas-fosso', leg: 'Remains of Benin earthworks and moat.' },
  { img: 'ife-muralhas-esquema', leg: 'Schematic cross-section of an earthen ditch and bank: exterior on the left, settlement interior on the right. Human figure for comparison; no measured dimensions.' },
  { h: 'Trade' },
  'Benin exported **ivory, pepper, cotton cloth, palm oil and crafts**. It imported brass and copper **manillas**, cloth, beads, coral, salt and weapons. Ife stood at the crossing of routes carrying salt, glass beads, copper and kola between the forest and the savanna. Sea contact with the Portuguese, from c. 1485, opened a new route through the port of Ughoton.',
  { img: 'ife-manilhas', leg: 'Brass manillas used as currency.' },
  { img: 'ife-benim-porto', leg: 'Artistic interpretation of Portuguese arrivals at the port of Ughoton in the late 15th century. AI-generated illustration.' }
];

const sociedade = [
  { h: '1. Political organisation' },
  'Benin was a **sacred monarchy**: the **Oba** descended from a divine line and symbolised the unity of the people. He ruled with a council of chiefs. The **Uzama** were the great hereditary chiefs, old protagonists in choosing kings; after Ewuare, royal power grew stronger with chiefs appointed for the palace and the city (**Eghaevbo n’Ore** and **Eghaevbo n’Ogbe**). Succession passed from father to eldest son (the **Edaiken**). The **Iyoba**, mother of the Oba, had her own palace at Uselu and political prestige: the title was created by Esigie for Idia. In villages, the head was the eldest man of the community, the **Odionwere** (also spelled Edionwere).',
  'Ife was different: the **Ooni** was the priest-king of the sacred city. His authority was above all **religious**, and the great Yoruba monarchies acknowledged his ritual primacy.',
  { img: 'ife-corte-oba', leg: 'Brass plaque with an equestrian Oba and attendants, Edo peoples, Benin; Metropolitan Museum of Art.' },
  { h: '2. Social classes' },
  { lista: [
    '**The king:** the Oba and the Ooni, sacred, with insignia of coral and ivory.',
    '**Great chiefs and nobles:** Uzama and others, with posts in the palace and the city.',
    '**Guild craftsmen:** casters, ivory and wood carvers, weavers, smiths, in hereditary trades.',
    '**Farmers and traders:** the majority, living in villages and markets.',
    '**Captives and servants:** slavery existed; war captives worked for the court and were also sold.'
  ] },
  { h: '3. Religion' },
  'The Yoruba believed in a supreme god, **Olodumare**, who acts through divinities (**orishas**). In the best-known origin myth, Olodumare charged **Obatala** with creating the earth; the world, however, ended up being created by **Oduduwa**. Belief in the importance of the head (**ori**) as the seat of destiny is central and explains the value given to heads in art. The Edo venerated **Osanobua**, the creator, and a series of divinities, among them **Olokun** (water and wealth) and **Ogun** (iron). Dead Oba were venerated at **ancestor altars** in the palace, with brass heads.',
  { tabela: { cab: ['Divinity', 'People', 'Domain'], linhas: [
    ['Olodumare', 'Yoruba', 'Supreme god, origin of all things'],
    ['Obatala', 'Yoruba', 'Moulder of human bodies; purity; the colour white'],
    ['Oduduwa', 'Yoruba', 'Ancestor of Yoruba kings; founder of Ife according to tradition'],
    ['Orunmila (Ifa)', 'Yoruba', 'Wisdom and divination; the Ifa system, with 256 figures (odu)'],
    ['Ogun', 'Yoruba and Edo', 'Iron, war, smiths and casters'],
    ['Olokun', 'Yoruba and Edo', 'Deep waters, sea and wealth; cult with heads'],
    ['Osanobua', 'Edo', 'Supreme creator god'],
    ['Osun', 'Edo', 'Medicinal plants and healing']
  ] } },
  { img: 'ife-altar-antepassados', leg: 'Ancestral shrine in the royal palace of Benin City, photograph by Cyril Punch, May 1891.' },
  { h: '4. Economy' },
  'The base was agriculture (yams, later cassava, palms), hunting and fishing. The court controlled external trade and the guilds. Ivory and pepper were export goods; brass, an import. **Manillas** served as currency. Markets were the centre of neighbourhood life; women dominated much of the local trade.',
  { h: '5. Writing and memory' },
  'Neither Ife nor Benin had writing of their own. History was kept in **oral tradition**, in the court singers, in the altars and in the **brass plaques**, which worked as the court’s visual archive. The Yoruba had **Ifa**, a great oral corpus of verses memorised by diviners. With the Portuguese, some members of the court learned to read Portuguese.',
  { h: '6. House and city' },
  'Edo and Yoruba houses were of **rammed earth** (mud brick), with palm or thatch roofs, arranged around **courtyards with a basin** (the impluvium) to collect rainwater. The Oba’s palace was a vast set of courtyards. In Ife, potsherd pavements decorated streets and courtyards.',
  { img: 'ife-casa-edo', leg: 'Artistic reconstruction of a 15th-century Edo/Yoruba courtyard house with rainwater collection. AI-generated illustration.' },
  { h: '7. Food' },
  'Pounded yam, palm oil, pepper, beans, dried and river fish, game, kola nuts, palm wine. Pepper (*Piper guineense*) was one of the products that interested the Portuguese. The kola nut had social and ritual value.',
  { h: '8. Clothing and adornment' },
  'Textiles were cotton, woven on narrow looms, in strips sewn together. The court wore red **coral beads**, a royal insignia, along with ivory and brass. On the plaques the Oba appear with coral necklaces, decorated skirts and bead crowns. In Ife the sculptures show bead crowns and elaborate hairstyles.',
  { img: 'ife-regalia-coral', leg: 'Coral beads and headdress represented on a commemorative head of an Oba; replaces the photograph of regalia.' },
  { h: '9. Music, festivals and games' },
  'Music used drums, double iron bells, rattles and **ivory horns**. Court festivals such as the **Igue** (linked to Ewuare) renewed the spiritual protection of the Oba and the kingdom. Among the Yoruba, one of the most popular board games was **ayo** (of the mancala family).',
  { h: '10. Science and knowledge' },
  '**Ifa** is at once religion, philosophy and a method of decision-making, with 256 figures (odu) obtained by binary combinations of marks. Medicine combined plants and ritual; **Osun**, among the Edo, was the god linked to plant knowledge.',
  { h: '11. Technology' },
  'The casters of Ife and Benin mastered **lost-wax casting**: a wax model coated in clay which, when heated, melts the wax and leaves a mould into which the metal is poured. The alloys were brass (copper and zinc), bronze and almost pure copper. Ife also produced glass, terracotta and stone sculpture; smiths had worked iron for a long time.',
  { img: 'ife-fundicao', leg: 'Artistic interpretation of Benin casters in a lost-wax brass-casting workshop. AI-generated illustration.' },
  { img: 'ife-igun-street', leg: 'Benin sculpture cast using the lost-wax technique, 15th–16th centuries, Louvre; replaces the photograph of an Igun Street caster.' },
  { h: '12. War' },
  'Benin’s army was infantry, with spears, swords (*ada*), shields and bows, and canoes on the rivers. Warriors appear on the plaques with helmets, coral necklaces and ornaments. After Ewuare, conquest was systematic. With the Portuguese came firearms and, in 1515–17, arquebusiers accompanied campaigns, although their exact role is debated.',
  { img: 'ife-guerreiros-placa', leg: 'Brass plaque with a Benin warrior chief, Metropolitan Museum of Art.' }
];

const personalidades = [
  'In this part, history and tradition are intertwined. What is legend and what is known is marked clearly.',
  { h: 'Oduduwa, legendary figure' },
  'Central figure of Yoruba myths: the ancestor of the kings, who descended to Ife and from there scattered his descendants. In one version, Obatala received from Olodumare a chain, a cockerel and earth to create the world, but became drunk, and Oduduwa took his place and made the land, spreading it over the water with the help of the cockerel. This is **mythical tradition**; if there is a historical core, it cannot be proved.',
  { img: 'ife-criacao-mito', leg: 'Mythological interpretation of the creation of Ife: Oduduwa, earth and a cockerel spreading soil over water. AI-generated illustration.' },
  { h: 'Obatala, orisha' },
  'The divinity who moulds human bodies, associated with purity and the colour white. The myth says that, while creating humans, he got drunk on palm wine and the ones he moulded then came out imperfect; for that reason his devotees avoid palm wine. Myth, not history.',
  { h: 'Oranmiyan' },
  'Legendary prince of Ife, son of Oduduwa. Benin tradition says he was invited to restore order after the Ogiso, but gave up on a “difficult” people and left, leaving his son Eweka I. Yoruba tradition says he later founded Oyo. **Debated:** historians doubt that he is a single historical figure; an alternative Edo account of origin reverses the direction (see box).',
  { caixa: 'Who founded the Benin dynasty? Three versions', texto: [
    '**Official tradition of Benin and Ife:** the chiefs asked Ife for a prince; Oranmiyan came and fathered Eweka I, first Oba (c. 1180).',
    '**Alternative Edo tradition (more recent and less widely accepted):** the founder was Ekaladerhan, exiled son of the last Ogiso, who later became Oduduwa at Ife; his son returned to Benin. Some historians see in this version a **recent reworking**.',
    '**Historians:** they recognise ties between the dynasties of Ife and Benin, but doubt that a foundation by a prince of Ife can be proved. The link best supported by evidence is **technical and artistic** (the casting of brass).'
  ] },
  { h: 'Obalufon (Obalufon Alayemore)' },
  'A king (Ooni) of Ife in tradition, linked to the art of casting and to weaving, and identified with the copper mask and with the brass head of Ife (a hypothesis of museums and historians). The identification is **possible, not certain**. The craftsmen of Ife venerated him as patron of casters.',
  { img: 'ife-obalufon-cabeca', leg: 'Brass head of an Ooni of Ife; the photograph does not identify the ruler as Obalufon.' },
  { h: 'Eweka I' },
  'First Oba of Benin according to tradition, **c. 1180** (dates vary from the twelfth to the thirteenth century). Son of Oranmiyan and of an Edo woman (Erinmwide), he is the symbolic founder of the dynasty that still reigns. Tradition says his father wished the kingdom to be ruled by someone born in the land.',
  { h: 'Oguola and Iguegha' },
  'Oguola is remembered as an Oba who asked Ife for a master caster, **Iguegha**, who taught the craft to the Edo (the Metropolitan Museum of Art in New York places the arrival c. 1400). No independent dating: **tradition** with a likely technical basis of truth.',
  { h: 'Ewuare the Great' },
  'Oba of Benin, **c. 1440 – 1473**, born Ogun. He reformed the State, strengthened royal power and shaped the city as Europeans would see it: great streets, walls and ditches, and the palace. Tradition credits him with the conquest of **201** settlements. His figure mixes fact and epic, but the reforms are considered historical.',
  { img: 'ife-ewuare', leg: 'Imagined portrait of Ewuare the Great, c. 1450; not a reproduction of a known historical likeness. AI-generated illustration.' },
  { h: 'Ozolua' },
  'Oba, c. 1481–1504, son of Ewuare. He received the first Portuguese traders and is remembered as a great warrior.',
  { h: 'Esigie' },
  'Oba, **c. 1504 – c. 1550** (the start is debated, up to c. 1517). He defeated Idah; received the Portuguese missionaries; learned Portuguese and kept up diplomacy with Lisbon. He created the title of Iyoba for his mother.',
  { h: 'Idia, the first Iyoba' },
  'Mother of Esigie, wife of the Oba Ozolua. According to tradition, she raised an army to secure the throne for her son and played a part in the war against Idah, with knowledge of medicine and magic. Esigie created for her the title of **Iyoba** and, according to the Metropolitan Museum, commissioned **ivory masks** in her honour, pendants worn at ceremonies, with a crown of Portuguese faces and mudfish. Several such masks survive in museums (among others the British Museum and the Metropolitan), and an image of one was the emblem of the 1977 FESTAC festival.',
  { img: 'ife-mascara-idia', leg: 'Ivory pendant mask of Queen Mother Idia, Metropolitan Museum of Art.' },
  { h: 'Ovonramwen (Overami)' },
  'Oba at the time of the British invasion of 1897. He was captured, exiled to Calabar and died in 1914; his son **Eweka II** was installed as Oba. He lies outside the main period, but is the figure who closes the story of the old kingdom.',
  { img: 'ife-ovonramwen', leg: 'Oba Ovonramwen aboard H.M. Ivy on his way to exile in Calabar, photograph by Jonathan Adagogo Green, 1897.' },
  { h: 'Leo Frobenius' },
  'German ethnologist (1873–1938) who visited Ife in 1910. He left valuable notes, but explained the art through the fantasy of Atlantis, refusing to acknowledge the ability of Africans. **Historical judgement:** his merit was drawing attention; his mistake is a warning.',
  { h: 'Frank Willett' },
  'British archaeologist (1925–2006). He excavated at Ife in the 1950s and 1960s and wrote the first modern studies of Ife art, demonstrating its local Yoruba origin.'
];

const legado = [
  { h: 'What they left us' },
  { lista: [
    '**The Ife heads:** a rare naturalism, with faces that look like portraits. They changed how the world sees African art.',
    '**The Benin bronzes:** an archive of court art, with plaques, heads, bells, ivory carvings and altars.',
    '**The walls of Benin:** the largest earthwork system before mechanisation, a collective work of centuries.',
    '**Sacred monarchy:** the Oba and the Ooni continue as traditional authorities in Nigeria.',
    '**Ifa:** a divination system recognised by UNESCO as Intangible Cultural Heritage of Humanity.',
    '**The diaspora:** religions of Yoruba origin (Candomblé, Santería and others) reached the Americas with millions of enslaved Africans; Ife is their symbolic origin.'
  ] },
  { h: 'The art' },
  'The **brass head from Ife** is about 35 cm tall and weighs 5.1 kg, of a zinc-and-copper alloy, with fine vertical lines on the face (scarification, or the strands of a bead veil: interpretations vary) and holes around the hairline and chin, probably to fix a crown, beard or veil. The artists also worked in **terracotta** and **stone**. The terracotta portraits show men and women with individual expressions.',
  { img: 'ife-cabeca-ife-museu', leg: 'Ife head photographed at the Kimbell Art Museum; replaces the view of several heads in an exhibition.' },
  { img: 'ife-oba-bronze-cabeca', leg: 'Commemorative head of an Oba of Benin, 16th century, Metropolitan Museum of Art; an alternative to the requested later-period object.' },
  { h: 'The architecture' },
  'Palaces and houses were of earth and wood, and what survived was destroyed in 1897 or in later works. What lasts are the **earth walls** and Ife’s potsherd pavements. The brass plaques show palace buildings with towers topped by snakes and birds.',
  { h: 'Rediscovery' },
  'The art of Benin reached Europe in 1897 and had an immediate impact: the ethnologist **Felix von Luschan** compared the bronzes to those of Benvenuto Cellini, and some Europeans even supposed, without foundation, that the technique was European. The art of Ife was revealed to the world in 1938 and recognised as African in the 1940s. In 1948, the British Museum showed it in London.',
  { h: 'Looting and restitution' },
  'In 1897 the British looted the palace, and the pieces went to museums and private collections in London, Berlin, Vienna, Oxford, New York and many other cities. Today, restitutions are moving forward:',
  { lista: [
    '**2021:** the University of Aberdeen (announced in March) and Jesus College, Cambridge (announced in October) return the head of an Oba and a brass cockerel (okukor). The Metropolitan Museum transfers two plaques in November.',
    '**2022:** the Horniman Museum announces in August the return of 72 objects (formal transfer in November); the Smithsonian returns 29 pieces (October); Germany signs an agreement in July to restitute 1,130 objects, and on 20 December hands over the first pieces.',
    '**After 2022:** other museums in Europe and the USA follow the example, and the debate around the British Museum goes on.',
    '**British Museum:** with about 900 pieces, it is the largest holder; it argues that the 1963 law prevents it from disposing of the collection. The debate goes on.',
    '**Who keeps the pieces?** It is debated whether they should go to the Oba, to the government of Edo State or to the federal museums commission: a question still unresolved.'
  ] },
  { img: 'ife-restituicao-alemanha', leg: 'Benin bronze photographed at the Horniman Museum, an illustration of the restitution topic; it does not show Germany’s 2022 handover.' },
  { h: 'The Edo Museum of West African Art (EMOWAA)' },
  'The **Edo Museum of West African Art (EMOWAA)** is a museum project in Benin City, designed by the architect David Adjaye, next to the Oba’s palace, to house returned bronzes and archaeological excavations. Adjaye’s design was presented in November 2020, and the current state of progress should be checked.',
  { img: 'ife-museu-edo', leg: 'Bristol Museum display discussing restitution of the Benin bronzes; a documentary alternative, not an image of the Edo Museum project.' },
  { h: 'Where to visit' },
  { lista: [
    '**National Museum, Ife** (Ile-Ife): the Ife heads and the Obalufon mask.',
    '**National Museum, Benin City** and **Igun Street**: pieces and casting workshops.',
    '**The Oba’s Palace**, in Benin City, the Oba’s residence (visits subject to permission).',
    '**British Museum** (London): the largest collection of Benin bronzes.',
    '**Ethnological Museum of Berlin, Metropolitan Museum (New York), Weltmuseum Vienna, Pitt Rivers Museum (Oxford)** and others: important collections, with restitutions under way.'
  ] },
  { img: 'ife-bronzes-museu', leg: 'Benin bronzes and plaques in Gallery 172 of the Museum of Fine Arts, Boston, in a historical exhibition photograph.' },
  { img: 'ife-festac', leg: 'Mask associated with the symbol of FESTAC 77, photographed at CBAAC, Lagos; not a drawing of the logo.' }
];

const quiz = [
  { p: 'For the Yoruba, what is Ile-Ife?', op: ['A Portuguese colony', 'The sacred city where the world was created', 'The capital of the kingdom of Dahomey', 'A port in the Niger delta'], certa: 1, exp: 'Ife is the mythical cradle of the Yoruba and the religious centre of their world, seat of the Ooni.' },
  { p: 'The Benin discussed in this chapter is:', op: ['The present-day Republic of Benin', 'A kingdom of Dahomey', 'A kingdom of Ghana', 'The Edo kingdom in southern Nigeria, with its capital at Benin City'], certa: 3, exp: 'It is the Edo kingdom of Nigeria. The present-day Republic of Benin, formerly Dahomey, is something else.' },
  { p: 'Who was the German who, in 1910, attributed Ife’s art to Atlantis?', op: ['Heinrich Schliemann', 'Felix von Luschan', 'Frank Willett', 'Leo Frobenius'], certa: 3, exp: 'Leo Frobenius refused to believe it was African art and proposed an Atlantean or Greek origin; the idea is false.' },
  { p: 'In what year were the most famous Ife heads found in the Wunmonije compound?', op: ['1897', '1910', '1938', '1977'], certa: 2, exp: 'In 1938, building works at Ife uncovered about 17 copper-alloy heads.' },
  { p: 'According to Benin tradition, who was the first Oba?', op: ['Ewuare', 'Eweka I', 'Esigie', 'Ozolua'], certa: 1, exp: 'Eweka I, son of Oranmiyan of Ife and an Edo woman, c. 1180 (date debated).' },
  { p: 'What were the kings who ruled before the Oba called?', op: ['Ooni', 'Alaafin', 'Ogiso', 'Iyoba'], certa: 2, exp: 'The Ogiso, “kings of the sky”, ruled Igodomigodo according to oral tradition.' },
  { p: 'Who was Ewuare the Great?', op: ['The first Ooni of Ife', 'The king who expelled the Portuguese', 'The last Ogiso', 'The Oba who reformed the kingdom and extended the walls, c. 1440'], certa: 3, exp: 'Ewuare reigned c. 1440–1473, strengthened royal power and is associated with the great walled city.' },
  { p: 'What are the “Iya” of Benin?', op: ['Ivory masks', 'Earth ditches and walls', 'Portuguese ships', 'Ancestor altars'], certa: 1, exp: 'The Iya are the ditches and banks that ringed the city and the villages.' },
  { p: 'What do Guinness and Patrick Darling say about the earthworks of Benin?', op: ['That they date from the nineteenth century', 'That they total about 16,000 km, an estimate', 'That they were merely decorative', 'That they linked Benin to Rome'], certa: 1, exp: 'It is a much-discussed estimate for the whole network of ditches, dated c. AD 800 to the fifteenth century.' },
  { p: 'What is the guild of brass casters of Benin called?', op: ['Igbo Olokun', 'Uzama', 'Ifa', 'Igun Eronmwon'], certa: 3, exp: 'The Igun Eronmwon guild cast for the Oba; its descendants still work on Igun Street.' },
  { p: 'What technique did the casters of Ife and Benin use?', op: ['Gas welding', 'Hammer forging', 'Lost-wax casting', 'Plaster moulds'], certa: 2, exp: 'A wax model was made, coated in clay, the wax was melted out and the metal poured in.' },
  { p: 'What were manillas, important in trade with the Portuguese?', op: ['Musical instruments', 'Brass and copper bracelets used as currency and raw material', 'Boats', 'Fine cloths'], certa: 1, exp: 'The Portuguese brought manillas, part of the metal of the Benin bronzes.' },
  { p: 'Who was Idia?', op: ['A Yoruba goddess', 'The queen mother (Iyoba), mother of Esigie, remembered for ivory masks', 'The wife of Ewuare', 'A Portuguese merchant'], certa: 1, exp: 'Idia, mother of the Oba Esigie, was the first Iyoba; the ivory masks bearing her face are famous.' },
  { p: 'What happened to Benin in 1897?', op: ['It became an ally of the British', 'It discovered America', 'A British punitive expedition burned the city and looted thousands of objects', 'It made a treaty with Lisbon'], certa: 2, exp: 'After Phillips’s mission was attacked in January, the British took the city on 18 February 1897 and carried off the bronzes.' },
  { p: 'Which of these is a recent restitution of Benin bronzes?', op: ['The British Museum returned all in 2021', 'The USA returned the city to the Oba', 'None was returned', 'The Smithsonian returned 29 pieces in 2022'], certa: 3, exp: 'The Smithsonian and Germany (agreement for 1,130 pieces) are among those that restituted; the British Museum keeps its collection.' }
];

export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };
