// GHANA EMPIRE / WAGADU — full content in English. Same structure as dados.js (Portuguese).
// WARNING: almost everything known about ancient Ghana comes from second-hand Arabic texts, later oral traditions and limited archaeology. Debated points are flagged in the text.

const visao = [
  { caixa: 'In brief', texto: [
    '**Ghana** (also called **Wagadu** or **Ouagadou** in the Soninke language, and **Awkar** or **Aoukar** in some Arabic sources) was the first great state of West Africa of which we have any record. It stretched across the Sahel, the belt of savanna between the Sahara and the wetter lands to the south, in what is now south-eastern Mauritania and western Mali. It became famous, in the Arab world and in Europe, as the «land of gold»: its kings controlled the trade between the gold of the south and the salt of the desert, and were renowned for their wealth.',
    'Almost everything we know comes from **Arabic written sources at second hand** (authors who heard about Ghana from merchants and travellers, without ever going there), from Soninke **oral traditions** and from **archaeological excavations** that are still scarce. For that reason its dating, its extent, the exact site of its capital and its fall are all **debated**. This text flags it whenever that is the case.'
  ] },
  { caixa: 'Warning: this is not today’s Ghana', texto: [
    'The modern **Republic of Ghana** (capital Accra, on the Gulf of Guinea) **is not** the medieval Ghana Empire, and **does not occupy the same territory**: ancient Ghana lay some 700 to 800 km north-west of the present country’s borders (in a straight line from Koumbi Saleh), in a different region, a different climate and among different peoples.',
    'The name was chosen in **1957**, when the former British colony of the Gold Coast became independent under Kwame Nkrumah, to evoke the greatness of an African past. Little is known of any direct links between the two, and the idea that the peoples of modern Ghana (such as the Akan) descend from people of ancient Ghana is **much discussed** and unproven. When this text says «Ghana», it always means the medieval empire.'
  ] },
  { img: 'gan-mapa-imperio', leg: 'Interpretive map of the Ghana Empire (Wagadu) in the western Sahel; ancient boundaries are approximate.' },
  { h: 'Where it was' },
  'The core of Ghana lay in the region of **Aoukar** (or Awkar) and **Hodh**, in south-eastern **Mauritania**, extending into western **Mali**. It is a zone of semi-desert and dry savanna, with short summer rains and, at that time, considerably greener than today. To the north lay the Sahara, crossed by camel caravans; to the south, the wetter lands where gold was extracted (**Bambuk**, between the Senegal and Falémé rivers, and later **Bure**, around the upper Niger, today in Guinea).',
  'One important point: **Ghana did not directly control the gold mines**. The miners were peoples of the south, whom the sources treat as independent or as distant subjects. What Ghana controlled was **trade** and the routes, and that was enough to make it rich.',
  { img: 'gan-paisagem-sahel', leg: 'Dune landscape of Aoukar, Mauritania, in a contemporary photograph.' },
  { h: 'When it existed' },
  'The dates of Ghana are **debated**. The so-called «foundation date» (c. AD 300) comes from oral king lists and a later calculation, not from documents of the time. According to traditions collected in the seventeenth century by the Timbuktu chronicles (*Tarikh al-Sudan* and *Tarikh al-Fattash*), some versions speak of 44 kings (22 before and 22 after the Hijra, though the numbers vary between manuscripts), and the list is more symbolic than historical. The first reliable mention in an Arabic text dates from the 8th–9th century, and its fall as a great power from the 12th–13th. A cautious summary follows.',
  { tabela: { cab: ['Phase', 'Approximate dates', 'What marks it'], linhas: [
    ['Background (Tichitt culture)', 'c. 2000 – 300 BC', 'Herders and pearl-millet farmers at Dhar Tichitt; probable cultural ancestors of the Soninke (debated)'],
    ['Formation of Wagadu', 'c. AD 300 – 700', 'Soninke chiefdoms; arrival of the camel (3rd–4th century); first contacts with traders from the north. Very uncertain dating'],
    ['Height of Ghana', 'c. AD 700 – 1050', 'First Arabic mentions (al-Fazari, al-Ya’qubi, Ibn Hawqal); control of the gold and salt trade; rule over Aoudaghost (c. 990, debated)'],
    ['Tunka Manin and the Almoravids', 'c. AD 1050 – 1100', 'Al-Bakri’s description (1068); fall of Aoudaghost (1054–55); the 1076 crisis (debated); gradual Islamisation'],
    ['Decline and dispersal', 'c. 1100 – 1235', 'Loss of routes and gold; Sosso domination (c. 1203, debated); absorption by Mali after Kirina (c. 1235)']
  ] } },
  { img: 'gan-koumbi-saleh-hoje', leg: 'Plan of the archaeological site of Koumbi Saleh based on surveys in January 2007; replaces the general view of the ruins.' },
  { h: 'Where did they come from?' },
  'The founders of Ghana are the **Soninke** (also Sarakole, Sarakhole or Marka), a **Mande**-speaking people who still live in Senegal, Mali and Mauritania. Their own traditions say that the first king, **Dinga**, came «from the east» or from Egypt or the Middle East (a legend common to many peoples, to give themselves a prestigious past) and that, with his sons, he founded Wagadu. No archaeological evidence confirms that journey.',
  'A sounder hypothesis links the Soninke with the peoples of the **Tichitt culture** (c. 2000 – 300 BC), who lived in stone villages along the escarpments of southern Mauritania and grew pearl millet. As the Sahara dried, populations moved south. It is a well-accepted theory, but **not conclusive**.',
  { h: 'Why they matter' },
  { lista: [
    '**The first great state of West Africa** of which there is a record: it shows that the region had complex political organisation long before European contact.',
    '**Trans-Saharan trade:** it linked the forest and savanna to the Mediterranean; African gold supplied the coinage of much of the Muslim and medieval European world.',
    '**Oral tradition:** the memory of Ghana (Wagadu, Dinga, Bida) survived for centuries without local writing.',
    '**A model case of historical method:** it shows how a civilisation is debated when sources are few, second-hand and sometimes contradictory.',
    '**Forerunner of Mali and Songhai:** the later great Sudanic empires were built on the same system of routes and merchant kings.'
  ] },
  { caixa: 'Ghana today', texto: 'Koumbi Saleh (Mauritania) has been on UNESCO’s **Tentative List** since 2001, but is **not a World Heritage Site**. By contrast, the **Ancient Ksour of Ouadane, Chinguetti, Tichitt and Oualata** (caravan towns that inherited Ghana’s trade) were inscribed as World Heritage in 1996. Visiting the region requires attention to security and up-to-date official travel advice.' },
  { img: 'gan-oualata-rua', leg: 'Street in Oualata, Mauritania, in a contemporary photograph.' }
];

const linha = [
  'This timeline follows the main events in the history of Ghana. **Note:** almost all dates are approximate or debated; those that come from Arabic texts are more reliable than those from oral tradition.',
  { linha: [
    { d: 'c. 2000 – 300 BC', t: 'The Tichitt culture', x: 'In southern Mauritania, along the Dhar Tichitt escarpments, hundreds of stone villages are home to herders and pearl-millet farmers. The excavations of Patrick Munson (from the late 1960s) show a society with some social differentiation. Many researchers see here the ancestors of the Soninke, but **the link is a hypothesis**.' },
    { d: 'c. 250 BC – AD 400', t: 'Djenné-Djenno, the Niger context', x: 'In the inland Niger delta (today Mali), Djenné-Djenno grows as an urban centre with no visible king, with iron, rice and trade in beads and copper. It is not part of Ghana, but shows that the region already had **towns and trade networks** before any empire.' },
    { d: 'c. 3rd – 4th century AD', t: 'The camel reaches the western Sahara', x: 'The dromedary camel, brought from North Africa, makes the Sahara crossable with heavy loads. Regular trade routes between the Maghreb and the Niger were only truly established after this. The exact date of regular use is debated.' },
    { d: 'c. AD 300 (traditional)', t: 'Origin of Wagadu according to the king lists', x: 'This is the conventional date in many textbooks for the beginning of Ghana. It comes from king lists transmitted orally and written down centuries later. **No document or excavation confirms it**; it is best understood as a convention.' },
    { d: 'Legend', t: 'Dinga and Dyabe: Wagadu is born', x: 'According to Soninke tradition, the hero **Dinga** came from the east and had sons. After his death, the sons disputed power and Dyabe won and founded Wagadu. It is an **origin myth**, not proven history.' },
    { d: 'late 8th century', t: 'First mention: «the land of gold»', x: 'The Arab astronomer and geographer **al-Fazari** (late 8th century) refers to Ghana as the «land of gold». The original text is lost and reaches us quoted by later authors. Around 830, **al-Khwarizmi** also mentions Ghana.' },
    { d: 'c. 889 – 890', t: 'Al-Ya’qubi describes routes and kings', x: 'In the *Kitab al-Buldan*, **al-Ya’qubi** mentions the kingdom of Ghana and its relations with neighbouring kingdoms, and also refers to Aoudaghost.' },
    { d: 'c. 947', t: 'Al-Mas’udi and Ghana', x: 'The historian **al-Mas’udi** (c. 947) mentions Ghana among the African kingdoms and the abundance of gold, supporting the image of a rich kingdom.' },
    { d: 'c. 977 – 988', t: 'Ibn Hawqal: «the richest king in the world»', x: 'The traveller and geographer **Ibn Hawqal** describes the king of Ghana as the richest on the face of the earth, because of the gold he accumulated. He also says he saw at Aoudaghost a cheque (or debt note) for 42,000 dinars linked to a merchant of Sijilmasa, which shows the use of credit among merchants (the claim is his own and the sum striking, so it is read with caution).' },
    { d: 'c. 990', t: 'Ghana takes Aoudaghost (debated)', x: 'Some readings of Arabic texts say that the king of Ghana conquered Aoudaghost, a Sanhaja town, around 990 (or in the early 11th century), appointing a governor there. This reading is **debated**, because the sources are sparse and ambiguous.' },
    { d: '1054 – 1055', t: 'The Almoravids take Aoudaghost', x: 'The **Almoravids**, a military-religious movement that arose among the Sanhaja tribes of the Sahara, take Aoudaghost. The sack of the town is described by Arabic sources and marks the end of its prosperity (the town falls into decline and is eventually replaced by Oualata).' },
    { d: '1063', t: 'Tunka Manin takes the throne', x: 'According to al-Bakri, the king **Basi** dies and is succeeded by his nephew **Tunka Manin**, who rules until c. 1076. Succession through the sister’s son is one of the most curious details in the account.' },
    { d: '1067 – 1068', t: 'Al-Bakri writes the most famous description', x: 'From Córdoba, in al-Andalus, **al-Bakri** compiles the *Kitab al-Masalik wa-l-Mamalik* (Book of Routes and Kingdoms), which describes Ghana, the court, the towns and the taxes. **He never went to Ghana**: he relied on travellers’ reports and earlier texts.' },
    { d: '1076 (debated)', t: 'The Almoravid «conquest»: fact or legend?', x: 'The traditional account states that in 1076–77 the Almoravids conquered the capital of Ghana, causing its ruin. In 1982–83, **Dierk Conrad and Humphrey Fisher** argued that this «conquest» was a later interpretation, without firm basis in contemporary texts, and that Ghana converted to Islam and declined for other reasons. The debate **continues**.' },
    { d: '11th – 12th century', t: 'Islamisation and reorganisation of trade', x: 'Islam gains weight among the kingdom’s elite, and trade routes shift east and south. The gold of **Bure** gains importance relative to that of Bambuk. Ghana loses its monopoly.' },
    { d: 'c. 1100', t: 'The end of the height', x: 'In most syntheses, c. 1100 marks the end of Ghana’s period of greatest power. But **the town of Koumbi Saleh remained inhabited** until at least the 14th century, according to the excavations.' },
    { d: 'c. 1203 (debated)', t: 'The Sosso dominate the region', x: 'The **Sosso** kingdom of **Sumanguru Kanté** (Soumaoro) expands and, according to traditions and modern datings (c. 1203), takes the capital of Ghana and imposes tribute on the region. Soninke tradition attributes the decline to the death of Bida.' },
    { d: 'Legend', t: 'The death of Bida and the drought', x: 'According to the legend, the protective serpent **Bida** demanded a young woman in sacrifice every year. When a nobleman killed it to save the girl, the serpent left, and seven years of drought and famine followed; the gold vanished and the people dispersed. It is a **myth of foundation and fall**, not a historical event.' },
    { d: 'c. 1235 (debated)', t: 'Kirina: Sundiata defeats Sumanguru', x: 'Prince **Sundiata Keita** of Mali defeats Sumanguru at Kirina (the date c. 1235 is a modern convention). The kingdom of Mali becomes the new great power and absorbs what remains of Ghana. Ghana becomes a vassal of Mali.' },
    { d: '13th century', t: 'Oualata replaces Aoudaghost', x: 'Oualata becomes the main destination of the caravans from southern Morocco. It later becomes a town of scholars and trade, and in 1352 the Moroccan traveller **Ibn Battuta** passes through.' },
    { d: '14th century', t: 'Koumbi Saleh is abandoned', x: 'Excavations indicate that the town was occupied until the 14th century. After that it lies deserted, its ruins serving as shelter and quarry.' },
    { d: 'c. 1655', t: 'The Timbuktu chronicles record the memory of Ghana', x: 'The Timbuktu chroniclers (*Tarikh al-Sudan*, c. 1655, and *Tarikh al-Fattash*, written between the 16th and 18th centuries) include king lists of Ghana. They are local sources, but late, mixing history and legend.' },
    { d: '1914', t: 'Bonnel de Mézières reveals the ruins of Koumbi Saleh', x: 'The French colonial officer **Albert Bonnel de Mézières** brings the ruins of Koumbi Saleh to attention and proposes that they are the capital of Ghana.' },
    { d: '1949 – 1951', t: 'Excavations by Thomassey and Mauny', x: 'The French archaeologists **Paul Thomassey** and **Raymond Mauny** excavate at Koumbi Saleh: they uncover a stone town with a mosque, quarters and cemeteries, and propose 15,000 to 20,000 inhabitants for it (a debated estimate).' },
    { d: '1960 – 1976', t: 'Excavations at Tegdaoust (Aoudaghost)', x: 'French and Mauritanian teams (with **Jean Devisse**, **Robert Vernet** and **Denise Robert**) excavate at Tegdaoust, the site identified as Aoudaghost, and reveal a town rich in beads, pottery and glass.' },
    { d: '1975 – 1981', t: 'New excavations at Koumbi Saleh', x: 'The excavations of **Serge Robert** (1975–76) and **Sophie Berthier** (1980–81) re-examine the town and propose occupation dates (5th–14th century). They give grounds for doubting that Koumbi Saleh really is al-Bakri’s «Ghana»: **the king’s town has never been found**.' },
    { d: '1982 – 1983', t: 'Conrad and Fisher challenge the «conquest»', x: 'Dierk Conrad and Humphrey Fisher publish «The Conquest That Never Was» and question the idea of an Almoravid conquest of Ghana. The article changes the way the history of Ghana is told.' },
    { d: '1996 / 2001', t: 'UNESCO', x: 'In 1996, the Ksour of Ouadane, Chinguetti, Tichitt and Oualata are inscribed as World Heritage. In 2001, Koumbi Saleh and Tegdaoust enter the Tentative List.' }
  ] }
];

const mapa = [
  'Ghana was not a country with defined borders, but a **space of kingdoms, chiefdoms and routes** around a capital. This map shows the most important places. Many locations are **hypotheses**: no text of the time gives the name of the city with certainty, and the «king’s town» has not been found.',
  { img: 'gan-mapa-cidades', leg: 'Unlabelled geographic map of the western Sahel: circles at Koumbi Saleh, Tegdaoust/Aoudaghost, Oualata and Tichitt; gold areas at Bambuk and Bure. Sites have different chronologies; Tichitt and Oualata should not be read as documented 11th-century towns. Approximate positions and regions.' },
  { tabela: { cab: ['Place', 'Location today', 'Role', 'Known for'], linhas: [
    ['Koumbi Saleh', 'South-eastern Mauritania', 'Probable capital (debated)', 'Stone town with mosque and cemeteries; identified in 1914; occupied 5th–14th century'],
    ['Aoudaghost (Tegdaoust)', 'Southern Mauritania', 'Southern end of the northern routes', 'Trading town of the Sanhaja; rich descriptions by al-Bakri; taken by the Almoravids in 1054–55'],
    ['Oualata (Walata)', 'South-eastern Mauritania', 'Successor of Aoudaghost', 'Caravan town of learning and trade; World Heritage'],
    ['Tichitt (Dhar Tichitt)', 'Central-southern Mauritania', 'Background', 'Hundreds of stone villages of the 2nd and 1st millennia BC'],
    ['Djenné-Djenno', 'Niger delta, Mali', 'Context (not Ghana)', 'One of the oldest towns in West Africa, c. 250 BC – AD 1400'],
    ['Bambuk', 'Between the Senegal and the Falémé', 'Gold zone', 'Main source of alluvial gold in the early centuries'],
    ['Bure', 'Upper Niger, Guinea', 'Gold zone', 'Gains importance later, for Mali'],
    ['Taghaza and Awlil', 'Desert and coast', 'Salt sources', 'Rock salt in the desert (Taghaza) and sea salt (Awlil)']
  ] } },
  { h: 'Koumbi Saleh, the «capital»' },
  'Koumbi Saleh lies in south-eastern Mauritania, about 30 km from the border with Mali. The town occupied a hill some 15 m above the plain. The houses were of **schist and clay**, packed along narrow streets, with a wide avenue (about 12 m) running east–west. The **mosque** measured about 46 by 23 metres. Two large **cemeteries** lay outside the town, and one of them holds the so-called **Columns Tomb**, radiocarbon-dated only in 2015 (three skulls from the main chamber, who died between the late 11th and the 12th century). Mauny estimated 15,000 to 20,000 inhabitants, which is a lot for a town in the Sahara.',
  { img: 'gan-koumbi-saleh-ruinas', leg: 'Satellite view of part of the western necropolis of Koumbi Saleh, showing the density of funerary structures; replaces the photograph of houses.' },
  { img: 'gan-koumbi-mesquita', leg: 'Hypothetical artistic reconstruction of the mosque at Koumbi Saleh, with schist walls bound with clay and timber roofing; the image cannot verify the plan or dimensions. AI-generated illustration.' },
  { img: 'gan-tumulo-colunas', leg: 'Central mausoleum of the Column Tomb, Koumbi Saleh, photographed in 1914: the corner columns subsequently disappeared.' },
  { caixa: 'Is it really the capital of Ghana?', texto: [
    'Koumbi Saleh was identified with the capital of Ghana in 1914 by Bonnel de Mézières, mainly because of the name (*Kumbi* echoes «Ghana») and because it fits al-Bakri’s distances. But **no inscription** says «Ghana», the archaeological data show mainly a **Muslim merchant town** and, despite decades of searching, **the «king’s town» (al-Ghaba) has not turned up**.',
    'Some researchers propose that the capital moved several times or that the centre of the kingdom lay elsewhere. Others suggest that Koumbi Saleh is the merchants’ quarter. The question **remains open**.'
  ] },
  { h: 'Al-Bakri’s two towns' },
  'According to al-Bakri, the capital of Ghana consisted of **two towns**, about 10 km (6 miles) apart, with continuous habitation between them. One was the **Muslim town**, with **twelve mosques**, imams and scholars (one of them for Friday prayer). The other, **al-Ghaba** («the forest» or «the grove»), was the **king’s town**, surrounded by an enclosure of stone and by sacred groves, where the priests lived and where the palace, the domed huts and the tombs of the kings stood. According to al-Bakri, Muslims were barred from entering, except those who served the king.',
  { img: 'gan-duas-cidades', leg: 'Hypothetical interpretation of the two settlements described by al-Bakri in the 11th century: merchants’ town and royal enclosure; their location and relationship to Koumbi Saleh remain debated. AI-generated illustration.' },
  { h: 'Aoudaghost, the desert town' },
  'Aoudaghost, on the present site of **Tegdaoust**, lay north of Ghana, at the edge of the desert, and was the **southern terminus** of the routes from Sijilmasa (Morocco). Al-Bakri describes gardens, vegetable plots and **wheat watered from wells**, and merchants so rich that a single owner might have more than a thousand slaves (**his claim**, possibly exaggerated). Transactions were made in **gold**. It was taken by the Almoravids in 1054–55; by the 12th century, al-Idrisi already describes it as a small town with little water. Excavations (1960–1976) showed occupation from the 7th–9th century until the 15th century (final abandonment).',
  { img: 'gan-aoudaghost-ruinas', leg: 'Ruins of Tegdaoust, identified with Aoudaghost, Mauritania.' },
  { h: 'Oualata, the heir' },
  'When Aoudaghost declined, **Oualata** (Walata) became the main caravan terminus, between the 13th and 16th centuries. Its stone and clay houses, with painted doors and inner courtyards, and its tradition of manuscripts make it one of the great centres of the Sahel.',
  { img: 'gan-oualata-casas', leg: 'Decorated entrance of a house in Oualata, Mauritania, in a contemporary photograph.' },
  { h: 'Tichitt, before it all' },
  'Long before Ghana, the escarpments of Dhar Tichitt in southern Mauritania were occupied by **hundreds of stone villages** (about 500 according to the usual counts). Their inhabitants raised cattle and grew pearl millet. It is the **best candidate as forerunner** of the Soninke, but the link is debated.',
  { img: 'gan-tichitt-povoado', leg: 'Remains of stone walls in settlement v.72, Dhar Tichitt–Oualata, predating medieval Ghana.' },
  { h: 'Djenné-Djenno: a context' },
  'Djenné-Djenno, in the inland Niger delta, was occupied from c. **250 BC to AD 1400**. The archaeologists **Susan and Roderick McIntosh** showed, from 1977 on, that it was a town with no sign of centralised kingship, with **iron, rice and trade** in beads from very early on. It was not Ghana, but it helps us understand that the Sahel and the Niger had their own towns and trade networks before Islam.',
  { img: 'gan-djenne-djenno', leg: 'Headless terracotta figure from Djenné-Djenno, Mali, dated AD 900–1400, National Museum of Natural History, Washington; replaces the view of the mound.' },
  { h: 'The gold and salt routes' },
  'Camel caravans set out from **Sijilmasa** (Morocco) towards the south, crossed the desert for weeks and reached **Aoudaghost** and Ghana. They carried **salt, copper, textiles, beads, horses and luxury goods**. They returned with **gold, slaves, ivory and malagueta pepper**. There were routes east, to Egypt, and west, to the Atlantic (Awlil). Ghana lived by being in the middle.',
  { img: 'gan-rotas-transaarianas', leg: 'Schematic map of medieval trade connections between Sijilmasa and the Sahel. Dotted lines: indicative links, not surveyed itineraries; white: salt at Taghaza and the approximate coastal area of Awlil; gold: Bambuk and Bure. It combines references from different periods.' }
];

const sociedade = [
  { h: '1. Political organisation' },
  'In Arabic sources the king was called **«Ghana»**: the kingdom’s name comes from the **title** of the sovereign, which some traditions translate as «war chief». He was also called **Kaya Maghan** («lord of gold»). Since Soninke traditions call the country **Wagadu**, «Ghana» is a name given by outsiders.',
  'The empire was more a **confederation of kingdoms and chiefdoms** than a centralised state. According to al-Ya’qubi, the king held authority over vassal «kings» as far as the Niger valley. These sent tribute and **their sons to the king’s court**, a way of securing loyalty (al-Bakri mentions sons of vassal kings at the sovereign’s side).',
  { caixa: 'Succession through the nephew', texto: 'Al-Bakri writes that the king was **not succeeded by his son, but by his sister’s son**, because only through the mother’s side was descent certain. Matrilineal succession (the maternal nephew) is attested among several African peoples, but later Soninke traditions speak of succession through fathers or brothers. There is debate about what this means.' },
  { h: '2. Social classes' },
  { lista: [
    '**The king and the royal family:** the king combined political, religious and judicial authority; according to tradition the dynasty was that of the **Cissé** (or Tounkara).',
    '**Nobles and warriors:** heads of lineages and of vassal kingdoms, horsemen and archers.',
    '**Merchants:** Muslims from the north and south, and **Wangara** (traders of the south, linked to gold), who lived in a quarter of their own.',
    '**Farmers and herders:** the majority, producers of pearl millet, sorghum, cattle.',
    '**Craftsmen and blacksmiths:** specialised groups (iron, leather, textiles, pottery) with a special status, sometimes feared, in many Mande societies.',
    '**Griots (bards) and keepers of memory:** singers and oral historians, important for the memory of Ghana.',
    '**Enslaved people:** prisoners and people bought or captured, used for labour and traded north.'
  ] },
  { img: 'gan-corte-rei', leg: 'Audience with the king of Wagadu in the 11th century, an artistic interpretation inspired by al-Bakri’s account. AI-generated illustration.' },
  { h: 'The king’s court, according to al-Bakri' },
  'The most famous text on Ghana is al-Bakri’s description of the court (1068), written at second hand. It says the following:',
  { lista: [
    'When he gives audience to hear complaints, the king sits in a **pavilion**, surrounded by ten pages with shields and gold-hilted swords.',
    'On his right are the **sons of the vassal kings**, in showy clothes with **gold plaited into their hair**.',
    'At the door of the pavilion are **pedigree dogs** with **gold and silver collars** with bells.',
    'The audience is announced by a **drum** (*deba*), made from a hollowed log.',
    'Non-Muslim subjects approach **on their knees, sprinkling dust on their heads**; Muslims greet him by clapping their hands.',
    'The king adorns himself with **necklaces and bracelets** and wears a **tall gold cap**, wrapped in turbans of fine cotton.',
    'The **horses** wear cloths embroidered with gold.',
    'The king keeps for himself **all the gold nuggets**, leaving his subjects only the dust; a huge nugget served as a post to tether his horse.',
    'The interpreters, the treasurer and most ministers were **Muslims**.'
  ] },
  { caixa: 'How much is fact and how much exaggeration?', texto: 'Al-Bakri never went to Ghana. He used information from merchants and earlier writings (especially those of Muhammad al-Warraq, of the 10th century). His portrait is **vivid, but second-hand**: figures such as an army of 200,000 men, with more than 40,000 archers, should be read with caution. The existence of a rich and ritualised court is accepted, but the details cannot be verified.' },
  { h: '3. Religion' },
  'The dominant religion of Ghana was the **traditional Soninke religion**, with worship of ancestors, nature spirits and **sacred groves**. Al-Bakri, writing as a Muslim, speaks of «idolaters» and «sorcerers» and of **sacrifices** at the kings’ tombs. These were covered with wooden domes, and food and drink were placed beside the burials. The testimonies are biased, and it is hard to know what was really done.',
  { tabela: { cab: ['Element', 'Role', 'Source of the information'], linhas: [
    ['Bida', 'Protective serpent of Wagadu, linked to rains and gold', 'Soninke oral tradition; **legend**'],
    ['Dinga', 'Founding ancestor and hero', 'Oral tradition; **legend**'],
    ['Sacred groves (al-Ghaba)', 'Place of worship, home of the priests, tombs of the kings', 'Al-Bakri, 1068'],
    ['The king', 'Mediator between his subjects and the invisible forces', 'Al-Bakri; interpretation'],
    ['Islam', 'Religion of the merchants and, increasingly, of the court', 'Al-Bakri; archaeology (mosque of Koumbi Saleh)']
  ] } },
  { img: 'gan-ritual-bida', leg: 'Scene from the Soninke legend of Bida: a great serpent emerges from a well before a young woman; a mythological depiction. AI-generated illustration.' },
  { h: 'Islamisation' },
  'Islam reached Ghana through **merchants**, not by war: already in al-Bakri’s time there was a Muslim town with twelve mosques and Muslims in positions of trust. The king, however, continued to follow the traditional religion. When Ghana «converted», and how, is debated: some versions place the conversion around **1076**, others point to a slow process lasting centuries. The excavations at Koumbi Saleh show a large mosque and a Muslim town.',
  { h: 'The Almoravid «conquest»: what is known and what is debated' },
  'What seems secure: the **Almoravids**, from the Sahara, **took Aoudaghost in 1054–55** and preached Islam in the south. What is **not proven**: a **conquest of Ghana** in 1076–77. This is the traditional version, supported by Ibn Khaldun (14th century) and by traditions collected later.',
  'In 1982–83, **Dierk Conrad and Humphrey Fisher** argued that this «conquest» is largely a **later construction**: contemporary sources (such as al-Bakri) do not mention it, and archaeology shows no destruction at Koumbi Saleh at that time. Other historians (for example in the volume by **Levtzion and Hopkins**) prefer to keep some form of Almoravid pressure or influence, without a classic military conquest. The most prudent reading: **there was contact, pressure and Islamisation; a conquest that flattened Ghana is not likely**.',
  { h: '4. Economy' },
  'Ghana was rich because it stood in the **middle** of the trade between the gold of the south and the salt of the north. According to al-Bakri, merchants paid the king **1 gold dinar for each donkey-load of salt coming in** and **2 dinars for each going out**; copper was taxed at 5 mithqals, and other goods at 10. The king kept the nuggets, and his subjects could hold only gold dust, a way of stopping gold from losing value by becoming too plentiful.',
  { lista: [
    '**Exports:** gold, enslaved people, ivory, pepper and (later) kola nuts, hides.',
    '**Imports:** salt, copper, textiles, beads, horses, metal objects, luxury goods.',
    '**Agriculture:** pearl millet, sorghum, and at Aoudaghost wheat and vegetable plots.',
    '**Livestock:** cattle, sheep, goats; elite horses.',
    '**Tribute and monopolies:** transit and trade taxes, tribute from vassal kingdoms.'
  ] },
  { img: 'gan-ouro-pepitas', leg: 'Gold nuggets found in Arizona in 2006, with a coin for scale; an illustration of the material, with no archaeological connection to Wagadu.' },
  { img: 'gan-mina-ouro', leg: 'Artistic reconstruction of hand-washing alluvial gold in the Bambuk region, c. 11th century; replaces the photograph of present-day mining. AI-generated illustration.' },
  { img: 'gan-sal-caravana', leg: 'Arrival in Timbuktu of a caravan carrying salt from Taoudenni, a postcard by François-Edmond Fortier, early 20th century; a photograph later than medieval Ghana.' },
  { caixa: 'The «silent trade»', texto: 'Arab and European sources describe an exchange in which the salt sellers laid out their goods and withdrew; the gold miners left gold and also withdrew, and so on, without seeing each other, until both were satisfied. It is an account repeated for centuries, since Antiquity. **We do not know whether it was like this, or whether it existed in Ghana**: it may be partly a travellers’ stereotype.' },
  { h: 'The camel and the caravans' },
  'The **camel (dromedary)** reached the western Sahara in the first centuries AD and changed everything: it could go days without drinking and carry heavy loads. Caravans had hundreds or thousands of animals and travelled for weeks from well to well. The guides and camel owners were the **desert peoples** (Sanhaja and other Berbers), with whom Ghana traded and whom it sometimes opposed.',
  { img: 'gan-camelo', leg: 'Men with dromedaries in Chinguetti, Mauritania, in a contemporary photograph.' },
  { img: 'gan-caravana-ilustracao', leg: 'A dromedary caravan carrying salt and textiles arrives at an imagined Aoudaghost, 11th century. AI-generated illustration.' },
  { h: '5. Writing and sources' },
  'No local writing is known in Ghana. History was kept in memory, by **griots**. Arabic writing arrives with merchants and Muslim scholars, and excavations have found a few objects with Arabic inscriptions, but no local archive.',
  { lista: [
    '**Second-hand Arabic sources:** al-Fazari (late 8th century), al-Khwarizmi (c. 830), al-Ya’qubi (c. 889–890), al-Mas’udi (c. 947), Ibn Hawqal (c. 977–988), al-Bakri (1068), al-Idrisi (1154), Yaqut and Ibn Khaldun (13th–14th centuries).',
    '**Timbuktu chronicles:** *Tarikh al-Sudan* and *Tarikh al-Fattash* (16th–17th century, with later additions), with king lists of Ghana, of late date.',
    '**Soninke oral traditions:** the epic of Wagadu (which Frobenius called «Dausi», collected in the 20th century), the stories of Dinga and Bida.',
    '**Archaeology:** Koumbi Saleh, Tegdaoust, Tichitt, Djenné-Djenno.'
  ] },
  { img: 'gan-manuscrito-bakri', leg: 'Old manuscript in a library in Chinguetti, Mauritania; a documentary alternative, not identified as al-Bakri’s Book of Roads and Kingdoms.' },
  { h: '6. Home and family' },
  'At Koumbi Saleh, the houses were of **schist and clay**, with courtyards, small rooms and narrow streets. In the countryside there were **mud-brick huts** or thatched ones, in villages grouped by lineage. The family was extended and lineage carried great weight. The rituals of birth, marriage and death followed Soninke traditions, later mixed with Islamic practices.',
  { img: 'gan-casa-soninque', leg: 'Soninke village chief, with houses and plant roofing in the background, Kayes region, Mali, 1972.' },
  { h: '7. Food' },
  'The staple was **pearl millet** (cultivated since Tichitt) and **sorghum**, in porridges, cakes and beers, with milk, meat, river fish and vegetables. At Aoudaghost **wheat was grown and vegetable plots made** (al-Bakri). Dates and salt came from the desert. Elites ate meat more often and had imported products.',
  { h: '8. Clothing and jewellery' },
  'Fine cotton and dyed cloths were signs of wealth. Al-Bakri describes the kings and the sons of vassals with **gold in their hair** and **necklaces and bracelets**. Worked gold, glass and stone beads and copper ornaments were common among elites and merchants.',
  { h: '9. Music and games' },
  'Music was essential: the **deba drum** announced the king’s audiences, and **griots** sang genealogies and deeds. Instruments such as the balafon, harp-lutes and flutes are common in the Sahel, although **we do not know precisely which already existed in Ghana**. The kora, for example, belongs to the Mandinka tradition and is much later. Seed board games of the *mancala* type are common in Africa, but there is no specific proof for Ghana.',
  { img: 'gan-griot', leg: 'Griot Papa Susso plays the kora at Truman State University; a contemporary photograph of a musical tradition, not a depiction of the court of Wagadu.' },
  { h: '10. Knowledge, science and medicine' },
  'Ghana left no scientific texts. We know there was **practical knowledge**: agricultural calendar, observation of the weather, plant medicine, metallurgy and **weighing of gold**. Muslim scholars brought writing, Islamic law and astronomy. Much of what was local knowledge was lost because it was oral.',
  { h: '11. Technology' },
  { lista: [
    '**Iron:** forges and iron weapons; iron has been known in the region for more than two thousand years (Djenné-Djenno).',
    '**Building:** schist stone and clay, acacia wood (al-Bakri).',
    '**Wells and water:** essential at Aoudaghost and Koumbi Saleh.',
    '**Transport:** camels and donkeys; boats on the rivers of the south.',
    '**Goldsmithing and pottery:** gold and copper objects; local ceramics.'
  ] },
  { img: 'gan-ferreiro', leg: 'Dogon blacksmith in an open-air smithy in Sangha, Mali, 1989; a contemporary photograph.' },
  { img: 'gan-terracota-djenne', leg: 'Seated terracotta figure, Inland Niger Delta region, Djenné peoples, 13th century, Metropolitan Museum of Art, 1981.218.' },
  { h: '12. War' },
  'According to al-Bakri, the king could muster **200,000 men**, of whom more than 40,000 were archers (a figure very probably exaggerated). Ghana had elite **cavalry** and **archers** on foot, with bows and arrows, spears and iron swords. Its power rested more on alliances, tribute and deterrence than on campaigns of conquest. The great defeat the tradition kept was the one at the hands of the Sosso and then of Mali.',
  { img: 'gan-moeda-almoravida', leg: 'Gold dinar of Yusuf ibn Tashfin, minted at Aghmat, present-day Morocco, Almoravid period.' }
];

const personalidades = [
  'Few kings and figures of Ghana are known by name. **Note:** many names come from oral tradition or late Arabic sources, and some are legendary.',
  { h: 'Dinga and Dyabe (legend)' },
  'According to Soninke tradition, **Dinga** is the hero who came from the east and is the ancestor of the founders of Wagadu. Of his sons, **Dyabe** is said to have founded the kingdom. It is an **origin myth**, with no historical or archaeological confirmation.',
  { h: 'Bida, the protective serpent (legend)' },
  'The serpent **Bida** protected Wagadu and guaranteed rain and gold, in exchange for an annual sacrifice. Its death, in the legend, brought seven years of drought and the ruin of the kingdom. It is a **mythical** figure, but very revealing of traditional religion and the memory of Ghana.',
  { h: 'The Cissé and the «Kaya Maghan»' },
  'Kaya Maghan («lord of gold») is the title given to the king in tradition, and the dynasty is associated with the **Cissé**. The names of the first kings are **uncertain and often legendary**, in late lists.',
  { h: 'Basi (Bassi), king of Ghana' },
  'According to al-Bakri, **Basi** reigned in the middle of the 11th century and died in 1063, passing the throne to his nephew. The information is brief, and the identification may vary between translations.',
  { h: 'Tunka Manin, king of Ghana (c. 1063 – 1076)' },
  'He was the king of whom al-Bakri speaks: **«Tunka»** is a Soninke title (it may mean «king» or «chief») and **Manin** his name. According to the text, he governed with **a treasurer, interpreters and ministers who were Muslims**, in an opulent court linked with Islamic scholars. He is the best-described king of Ghana. His death (c. 1076) coincides with the debated episode of the «conquest».',
  { img: 'gan-tunka-manin', leg: 'Imagined portrait of Tunka Manin, king of Wagadu in the 11th century; his appearance is not documented by known portraits. AI-generated illustration.' },
  { h: 'Abdallah ibn Yasin, spiritual founder of the Almoravids' },
  'A theologian from the Maghreb (d. c. 1058–59), he was the **religious guide** of the Almoravid movement among the Sanhaja of the Sahara. The movement was born of a religious reform and became a military force. He was linked to the taking of Aoudaghost (1054–55), mentioned in the sources.',
  { img: 'gan-almoravidas', leg: 'Almoravid Sanhaja warriors with veils, shields and mounts, 11th century; an artistic interpretation. AI-generated illustration.' },
  { h: 'Abu Bakr ibn Umar, Almoravid leader' },
  'Leader of the Almoravids of the Sahara, he died in 1087. Tradition says it was he who led the «conquest» of Ghana in 1076–77, but that is precisely what **Conrad and Fisher** contest: the early sources do not say so.',
  { h: 'The Arab geographers and historians' },
  'Ghana exists for us thanks to **al-Fazari** (late 8th century, «land of gold»), **al-Khwarizmi** (c. 830), **al-Ya’qubi** (c. 889–890), **al-Mas’udi** (c. 947), **Ibn Hawqal** (c. 977–988) and **al-Bakri** (1014–1094). None of them was in Ghana. **Al-Bakri**, in Córdoba, wrote the most famous description, and **Ibn Hawqal** claims to have travelled through the Maghreb and the Sahara, which may bring him a little closer to the facts (even so, Ghana is described by hearsay).',
  { img: 'gan-al-bakri', leg: 'Imagined portrait of al-Bakri in an Andalusi library, 11th century; not a known historical likeness of the author. AI-generated illustration.' },
  { h: 'Sumanguru Kanté (Soumaoro)' },
  'King of the **Sosso** (kingdom of Kaniaga), he is a figure between history and legend: **blacksmith**, sorcerer and conqueror in Mande tradition, he defeated and dominated the region of Ghana in the early 13th century (c. 1203, debated) and was beaten by **Sundiata** at Kirina (c. 1235).',
  { h: 'Sundiata Keita, founder of Mali' },
  'The hero of the **Epic of Sundiata**, which the griot tradition keeps alive, he is the prince who, after exile, defeated Sumanguru at Kirina and founded the empire of **Mali**, which absorbed the heritage of Ghana. He was a real historical figure, but his portrait is largely **epic**. He died c. 1255.',
  { img: 'gan-sundiata', leg: 'Imagined portrait of Sundiata Keita, founder of the Mali Empire in the 13th century; not a reproduction of a statue or a known historical likeness. AI-generated illustration.' },
  { h: 'Gassire (Soninke epic)' },
  'The hero of the legend **Gassire’s Lute**, fixed in writing by Leo Frobenius in the 20th century, linked to Wagadu: the prince whose grief gave birth to song and poetry (the *Dausi*). He is a **literary and legendary** figure.',
  { h: 'Raymond Mauny and the archaeologists of Ghana' },
  '**Raymond Mauny** (1912–1994) was the great French scholar of medieval West Africa and excavated Koumbi Saleh with **Paul Thomassey** (1949–51). **Serge Robert**, **Sophie Berthier** and the team of **Jean Devisse** at Tegdaoust followed. **Susan and Roderick McIntosh** revolutionised knowledge of the Niger context at Djenné-Djenno. **Nehemia Levtzion**, **Dierk Conrad** and **Humphrey Fisher** are essential names in the discussion of the sources.'
];

const legado = [
  { h: 'What they left us' },
  { lista: [
    '**The model of the Sahelian merchant kingdom:** kings who ruled by controlling routes and tribute, followed by Mali and Songhai.',
    '**The fame of the «gold of the Sudan»:** the gold of the savannas drove Mediterranean trade for centuries and later motivated the Portuguese Atlantic voyages along the African coast.',
    '**Oral memory:** the epic of Wagadu, Dinga and Bida, still sung.',
    '**Today’s Soninke:** present in Mali, Senegal, Mauritania and The Gambia, with their language, their culture and a large diaspora, including in France.',
    '**A name:** modern Ghana took it in 1957, as a symbol of African dignity.'
  ] },
  { img: 'gan-gana-1957', leg: 'Crowd at the independence celebrations of modern Ghana, 1957, a frame from Ghana: A New Nation, Universal Newsreels; a different context from medieval Wagadu.' },
  { h: 'Art' },
  'Very little art survives from medieval Ghana. From the same regional context there are **terracotta statuettes** and objects of iron and copper, and a great tradition of music and oral poetry. The gold of Ghana lived on mainly in coins from other places.',
  { h: 'Architecture: Sahel stone and clay' },
  'The **schist and clay** houses and mosques of Koumbi Saleh, and later the towns of **Oualata, Chinguetti, Ouadane and Tichitt**, show the architecture of the desert: thick walls, inner courtyards, square minarets. This tradition continues in the mud-brick mosques of Mali, such as the one at Djenné.',
  { img: 'gan-ksour-chinguetti', leg: 'Buildings in Chinguetti, Mauritania, threatened by encroaching sand, in a contemporary photograph.' },
  { img: 'gan-manuscritos', leg: 'Page of a Timbuktu manuscript with astronomy and mathematics; a written tradition later than Wagadu’s heyday.' },
  { h: 'The rediscovery of Ghana' },
  { lista: [
    '**19th century:** Europeans such as the German **Heinrich Barth** (1850–55) collect information on the past of the Sudan.',
    '**1912:** the French administrator **Maurice Delafosse** publishes the first great synthesis of the region’s past (*Haut-Sénégal-Niger*), which fixed many dates and is now debated.',
    '**1914:** **Bonnel de Mézières** identifies Koumbi Saleh.',
    '**1949–51:** **Thomassey and Mauny** excavate.',
    '**1960–76:** excavations at Tegdaoust (Aoudaghost).',
    '**1973:** **Nehemia Levtzion** publishes *Ancient Ghana and Mali*; **1981:** Levtzion and Hopkins edit the *Corpus of Early Arabic Sources for West African History*.',
    '**1975–81:** Serge Robert and Sophie Berthier at Koumbi Saleh.',
    '**1982–83:** Conrad and Fisher challenge the «conquest».',
    '**2015:** first radiocarbon dating of the Columns Tomb (late 11th–12th century).'
  ] },
  { img: 'gan-escavacao', leg: 'Individual burial in the Column Tomb after surface cleaning in 2007, Koumbi Saleh; replaces the photograph of excavation at Djenné-Djenno.' },
  { h: 'Where to visit and see' },
  { lista: [
    '**Koumbi Saleh and Tegdaoust (Mauritania):** the archaeological sites. Access is difficult and security unstable: always consult official travel advice.',
    '**Oualata, Chinguetti, Ouadane and Tichitt (Mauritania):** World Heritage (1996).',
    '**Djenné and Djenné-Djenno (Mali):** World Heritage (1988).',
    '**National Museum of Mali (Bamako) and National Museum of Mauritania (Nouakchott).**',
    '**Musée du Quai Branly (Paris) and Metropolitan Museum (New York):** collections of art from Mali and the Sahel.'
  ] },
  { img: 'gan-koumbi-museu', leg: 'Epigraphic shale plate from Koumbi Saleh with religious formulae and geometric decoration, National Museum of Nouakchott.' }
];

const quiz = [
  { p: 'Is the medieval Ghana Empire the same territory as the present Republic of Ghana?', op: ['Yes, it is the same country', 'Yes, but only partly', 'No: it lay some 700–800 km to the north-west, in Mauritania and Mali', 'It lay in Egypt'], certa: 2, exp: 'Modern Ghana took the name in 1957, for symbolism. The empire lay in south-eastern Mauritania and western Mali.' },
  { p: 'What was the language of the people who founded Ghana?', op: ['Soninke (Mande)', 'Arabic', 'Swahili', 'Berber'], certa: 0, exp: 'The Soninke, speakers of a Mande language, are considered the founders of Wagadu.' },
  { p: 'Where does the name «Ghana» come from?', op: ['From the name of the capital', 'From a river', 'From the name of the desert', 'From the king’s title'], certa: 3, exp: 'According to Arabic sources, «Ghana» was the title of the sovereign, and came to designate the kingdom. The local name was Wagadu.' },
  { p: 'What was the basis of Ghana’s wealth?', op: ['Diamond mines', 'Control of the gold and salt trade', 'Fishing in the Atlantic', 'Silk production'], certa: 1, exp: 'Ghana lay between the gold of the south and the salt of the north and taxed that trade.' },
  { p: 'Did Ghana directly control the gold mines?', op: ['Yes, all of them', 'No: the mines belonged to peoples of the south; Ghana controlled trade', 'Only those of Bure', 'Only those of Egypt'], certa: 1, exp: 'The mines of Bambuk and Bure lay outside the core of Ghana. The king controlled trade and the nuggets delivered to him.' },
  { p: 'Which animal made regular trans-Saharan trade possible?', op: ['The horse', 'The elephant', 'The donkey', 'The camel'], certa: 3, exp: 'The dromedary camel reached the western Sahara in the 3rd–4th centuries and made long crossings possible.' },
  { p: 'Who wrote the most famous description of the court of Ghana in 1068, without ever having been there?', op: ['Ibn Battuta', 'Herodotus', 'Al-Bakri', 'Marco Polo'], certa: 2, exp: 'Al-Bakri, of Córdoba, compiled reports from merchants and earlier texts.' },
  { p: 'According to al-Bakri, who succeeded the king of Ghana?', op: ['The sister’s son (nephew)', 'The eldest son', 'The strongest warrior', 'The head of the merchants'], certa: 0, exp: 'Al-Bakri mentions succession through the sister’s son, but its meaning is debated.' },
  { p: 'What was special about the capital described by al-Bakri?', op: ['It was a great port', 'It stood on a volcano', 'It was two towns: the Muslims’ and the king’s', 'It was underground'], certa: 2, exp: 'There was the Muslim town, with twelve mosques, and the king’s, al-Ghaba, about 10 km away.' },
  { p: 'Which archaeological site is most associated with the capital of Ghana (although the identification is debated)?', op: ['Timbuktu', 'Koumbi Saleh', 'Djenné', 'Carthage'], certa: 1, exp: 'Koumbi Saleh, in Mauritania, was identified in 1914, but the king’s town has never been found.' },
  { p: 'What happened to Aoudaghost in 1054–55?', op: ['It was founded', 'It was destroyed by an earthquake', 'It was sold to Egypt', 'It was taken by the Almoravids'], certa: 3, exp: 'The Almoravids took the trading town, which then declined and was replaced by Oualata.' },
  { p: 'What did Conrad and Fisher argue in 1982–83?', op: ['That the Almoravid «conquest» of 1076 is very doubtful and late', 'That Ghana never existed', 'That Koumbi Saleh was a port', 'That Ghana was Christian'], certa: 0, exp: 'They argued that the conquest is a later construction, without basis in contemporary texts, and the debate continues.' },
  { p: 'Who defeated Sumanguru Kanté at Kirina (c. 1235)?', op: ['Tunka Manin', 'Sundiata Keita', 'Abu Bakr ibn Umar', 'Al-Bakri'], certa: 1, exp: 'Sundiata Keita defeated the Sosso and founded Mali, which absorbed what remained of Ghana.' },
  { p: 'According to Soninke legend, who was Bida?', op: ['A king of Ghana', 'A god of the sea', 'A protective serpent of Wagadu', 'A merchant'], certa: 2, exp: 'Bida was the serpent that guaranteed rain and gold. Its death brought drought and the end of the kingdom, according to the legend.' },
  { p: 'Which group of Mauritanian towns, heirs to the caravan trade, was inscribed by UNESCO in 1996?', op: ['Ksour of Ouadane, Chinguetti, Tichitt and Oualata', 'Pyramids of Giza', 'Ruins of Carthage', 'Timbuktu and Gao'], certa: 0, exp: 'The Ancient Ksour have been World Heritage since 1996. Koumbi Saleh is only on the Tentative List.' }
];

export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };
