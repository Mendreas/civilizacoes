// GREAT ZIMBABWE — full content in English (same structure and image ids as dados.js).
// Dates are approximate and, where debated, flagged as such. BC/AD. The chronology of Great Zimbabwe rests on radiocarbon dates and imported pottery and is still being refined; no local written chronicles exist.

const visao = [
  { caixa: 'In brief', texto: [
    '**Great Zimbabwe** was the largest stone city of medieval sub-Saharan Africa: a capital that at its peak probably had **some 10,000 to 20,000 inhabitants** (an estimate), built on the plateau of what is now southern Zimbabwe, between the Limpopo and Zambezi rivers. Its granite walls, laid **without mortar** and up to 11 metres high, are the largest body of pre-colonial stone architecture south of the Sahara.',
    'It was the work of ancestors of today’s **Shona** people (in particular the Karanga branch), who prospered through cattle-keeping, metalworking and, above all, the **trade in gold and ivory** with the Swahili coast and, through it, with Arabia, Persia, India and China. After c. 1450 the centre lost importance and power moved to other states (Khami, Mutapa). When Europeans ‘discovered’ the ruins in the 19th century, many refused to believe they were African, an idea that archaeology refuted in the early 20th century.'
  ] },
  { img: 'zim-mapa-regiao', leg: 'Physical map of southern Africa marking Great Zimbabwe, Mapungubwe and Sofala; adapted from a map by Eric Gaba.' },
  { h: 'Where it was' },
  'Great Zimbabwe lies in **Masvingo** province, in south-eastern Zimbabwe, about **30 km** from the town of Masvingo and more than 1000 m above sea level. It is a plateau of rolling savanna, with granite rising in great domes, good grazing for cattle and rivers running to the Indian Ocean. The coast lies some 400–500 km to the east, and the natural route there follows the valleys of the Save and Buzi rivers to the port of **Sofala**, now in Mozambique.',
  'The plateau had two great riches: **gold** (thousands of ancient workings, now identified by prospectors and archaeologists) and **pasture** for cattle, the most important form of wealth. Between the Limpopo valley (to the south) and the Zambezi (to the north), the plateau was the centre of a stone-building tradition that left **hundreds of walled sites**, generally called ‘zimbabwes’.',
  { img: 'zim-cerco-grande', leg: 'Aerial view of the Great Enclosure, Great Zimbabwe.' },
  { h: 'The name' },
  'The word **zimbabwe** is Shona. The two most quoted explanations are **dzimba-dza-mabwe**, ‘houses of stone’ (in Karanga), and **dzimba-hwe**, ‘venerated houses’ (in Zezuru), a term applied to the residences of chiefs. Both appear in the books. What is certain is that the word meant the houses or courts of chiefs and that the plateau has many hundreds of such sites; Great Zimbabwe was simply the largest, and so is ‘the Great’. In 1980 the country took its name from the site.',
  { h: 'When it existed' },
  'There are no local written records. The chronology rests on **radiocarbon**, on stratigraphy and on imported objects of known date (Chinese pottery, glass, beads). A Bayesian study published in 2013 (Chirikure and colleagues) indicates that the stone walls began **around the end of the 12th or the start of the 13th century**, the peak came in the **14th and 15th centuries**, and occupation continued on a reduced scale until at least the 16th and probably the 17th century. Before that the site had been inhabited from early on by Iron Age farmers, but without the great walls.',
  { tabela: { cab: ['Phase', 'Approximate dates', 'What marks it'], linhas: [
    ['Iron Age roots', 'c. 3rd – 9th centuries', 'Bantu-speaking farmers (Gokomere and other traditions) settle the plateau; cattle, cereals, iron'],
    ['Precursors on the Limpopo', 'c. 900 – 1300', 'Schroda, K2 and Mapungubwe (South Africa/Botswana/Zimbabwe border area); Leopard’s Kopje in south-western Zimbabwe; trade in ivory and beads with the coast'],
    ['First occupation of Great Zimbabwe', 'c. 11th – 12th centuries', 'Settlement on the hilltop (the Acropolis), still without the great walls'],
    ['Heyday of Great Zimbabwe', 'c. 1200 – 1450', 'Stone walls, Great Enclosure, stone birds; gold and ivory to the coast; peak population in the 14th–15th centuries'],
    ['Decline of the centre', 'c. 1450 onwards', 'Political power shifts; a smaller occupation continues (16th–17th centuries, debated)'],
    ['Heirs', 'c. 1430 – 17th–19th centuries', 'Mutapa (north), the Torwa at Khami (south-west), later the Rozvi state; first contacts with the Portuguese']
  ] } },
  { img: 'zim-mapa-comercio', leg: 'Schematic map of trade corridors from the plateau to Sofala and across the Indian Ocean, c. 1400. Approximate routes. Digitally drawn map.' },
  { h: 'Who were they?' },
  'The builders of Great Zimbabwe were **Bantu-speaking Africans**, ancestors of today’s **Shona**, in particular the **Karanga**, who still live in the Masvingo region. This is the conclusion of **more than a century of archaeology**: the pottery, cattle, clay houses and religious and oral traditions of Great Zimbabwe continue directly from the Iron Age culture of the region, and not a single find demands a foreign origin. The names of its kings have not come down to us.',
  { h: 'Why they matter' },
  { lista: [
    '**Architecture:** curved granite walls, well laid and mortarless, among the largest ancient constructions in Africa south of the Sahara.',
    '**Global trade:** gold from the Zimbabwe plateau reached, through Sofala and Kilwa, markets in Arabia, India and the Mediterranean; Chinese pottery, Syrian glass and Indian beads have been found at Great Zimbabwe.',
    '**Identity:** the stone bird became the emblem of modern Zimbabwe; the site is at the centre of a debate about how the African past was denied and then recovered.',
    '**A lesson in method:** the case is one of the classic examples of how racial prejudice can distort science, and of how careful archaeological work corrects the error.',
    '**A medieval African state without writing:** it shows how the history of a society can be reconstructed without local documents, using archaeology, oral tradition and third-party sources.'
  ] },
  { caixa: 'Great Zimbabwe today', texto: '**Great Zimbabwe** (the *Great Zimbabwe National Monument*) has been a UNESCO World Heritage Site since **1986**. It can be visited from Masvingo, with a museum on site, and is a short distance from Lake Mutirikwi. The ruins fall into three zones: the **Acropolis** (the Hill Complex, on top of the hill), the **Great Enclosure** (in the valley) and the **Valley Ruins**.' }
];

const linha = [
  { linha: [
    { d: 'c. 3rd – 7th centuries', t: 'The first farmers on the plateau', x: 'Bantu-speaking communities of the so-called **Gokomere** tradition practise farming, cattle-keeping and iron metallurgy in the region. There is evidence of occupation on the hill of the future Great Zimbabwe, still without stone building.' },
    { d: 'c. 900', t: 'Schroda and the ivory trade', x: 'At **Schroda**, in the Limpopo valley, the Zhizo community prepares ivory and other goods to exchange for glass beads from the coast. It is one of the earliest signs of a link to the Indian Ocean trade.' },
    { d: 'c. 1000', t: 'K2 and Leopard’s Kopje', x: 'At **K2**, on the Limpopo, a village of farmers and herders grows, with some 1,500 inhabitants by 1200. In south-western Zimbabwe the **Leopard’s Kopje** culture (near Bulawayo) is another cattle-keeping tradition, which some authors link to the origin of later elites.' },
    { d: 'c. 11th – 12th centuries', t: 'Great Zimbabwe begins to grow', x: 'On the crest of the hill a settlement of clay houses is established, still without the walls. The earliest radiocarbon dates from the site fall around the 11th and 12th centuries; the exact values are debated.' },
    { d: 'c. 1220', t: 'The hill of Mapungubwe', x: 'At Mapungubwe an elite settles on top of the hill while ordinary people live below. The graves on top contain **gold**, among them the famous **gold-foil rhinoceros**, found in 1933. Population reaches c. 5,000 by 1250.' },
  ] },
  { img: 'zim-rinoceronte-ouro', leg: 'Golden rhinoceros of Mapungubwe, University of Pretoria.' },
  { img: 'zim-mapungubwe-ceptro', leg: 'Gold sceptre head from Mapungubwe; cropped from a comparative photograph of African objects.' },
  { linha: [
    { d: 'c. late 12th – early 13th century', t: 'The first stone walls of Great Zimbabwe', x: 'According to the 2013 Bayesian study, this is when the granite walls begin to rise. Great Zimbabwe then refines the technique over the following centuries.' },
    { d: 'c. 1300', t: 'Mapungubwe is abandoned', x: 'The Mapungubwe elite disappears and the hill is left empty. Proposed causes include cooling and drought (which harmed cattle and farming) and the shift of trade routes northwards, which benefited the Zimbabwe plateau. The exact causes are debated.' },
    { d: 'c. 1300 (debated)', t: 'Kilwa takes control of Sofala', x: 'According to the **Kilwa Chronicle** and other sources, Kilwa comes to control **Sofala**, the port through which the plateau’s gold left. The date is debated; estimates range from the 12th to the early 14th century.' },
    { d: 'c. 14th – 15th centuries', t: 'The peak', x: 'The **Great Enclosure** and most of the Valley walls are built. Great Zimbabwe probably has its largest population now. Imported objects arrive: **Chinese pottery** (celadon, Yuan and Ming dynasties), glass and beads, **copper coins from Kilwa** and Persian pottery.' },
  ] },
  { img: 'zim-porcelana-celadon', leg: 'Longquan celadon bowl, Southern Song dynasty, Benaki Museum; comparative example of Chinese export ceramics.' },
  { linha: [
    { d: 'c. 1430 – 1450 (tradition)', t: 'Mutota heads north', x: 'Shona oral tradition and Portuguese chroniclers say that a chief of Great Zimbabwe, **Mutota** (Nyatsimba Mutota), set out northwards in search of salt and new land, and founded the future state of **Mutapa**. The date and many details are uncertain, but the link between the two centres is accepted by many historians.' },
    { d: 'c. 1450', t: 'The centre loses power', x: 'Great Zimbabwe ceases to be the capital of the plateau; occupation shrinks but **does not end at once**. Proposed causes are exhaustion of pasture, firewood and soils for a large population, droughts, political disputes and the shift of the gold routes to the north and the Zambezi. No single explanation is accepted by everyone.' },
    { d: 'c. 1450', t: 'Khami and the Torwa', x: 'In the south-west of the plateau, near present-day Bulawayo, **Khami** grows as the capital of the state of **Butua** (the Torwa dynasty), which would last about two centuries. Its decorated walls and stone platforms are the clearest continuation of the Great Zimbabwe tradition.' },
    { d: 'c. 1450 – 1480', t: 'Matope expands Mutapa', x: 'Mutota’s son **Matope** extends Mutapa’s rule south and east, reaching close to the coast. The title **Mwenemutapa** (*mwene*, ‘lord’, and *mutapa*, ‘conquered lands’, by the usual explanation) comes to designate the rulers.' },
    { d: 'c. 1489 – 1490', t: 'Pêro da Covilhã and Sofala', x: 'The Portuguese **Pêro da Covilhã**, sent by King João II to gather information on the Eastern trade, is said by tradition to have reached **Sofala** along the coast and to have reported to Lisbon on the gold. The details of his journey are poorly known and part of the account comes from later sources.' },
    { d: '1505', t: 'The Portuguese at Sofala', x: 'A Portuguese fleet occupies Sofala and **Pêro de Anaia** builds a fortress there (1505–1506). The gold trade now has Portuguese intermediaries, who pay duties to the crown.' },
    { d: '1506', t: 'Diogo de Alcáçova describes the court', x: 'In a letter to King Manuel I, **Diogo de Alcáçova** describes Mutapa and its court, with houses ‘of stone and clay’ and large. It is one of the first Portuguese accounts of the interior; it speaks of the Mutapa court, not of Great Zimbabwe itself.' },
    { d: 'c. 1511', t: 'António Fernandes in the interior', x: 'The convict-exile **António Fernandes** travels in the interior and dictates to a clerk at Sofala (Gaspar Veloso) what he saw, including a fortress of the king of Mutapa made of stone ‘without mortar’. It is not certain that he visited Great Zimbabwe: some research suggests he did not.' },
    { d: 'c. 1531', t: 'Vicente Pegado and ‘Symbaoe’', x: 'The captain of Sofala, **Vicente Pegado**, describes a fortress of enormous stones, apparently without mortar, among the gold mines of the interior, and says the natives call it **Symbaoe**, ‘court’. It is the first written description that clearly refers to a ruin like Great Zimbabwe.' },
    { d: '1552', t: 'João de Barros writes about Symbaoe', x: 'In the first *Decade of Asia*, **João de Barros** (who never went to East Africa) describes Symbaoe from Muslim informants and Portuguese reports, and mentions an inscription no one could read. He admits not knowing who built it, and mentions the legend of the Queen of Sheba. A legend begins here that would last for centuries.' },
    { d: '1561 – 1572', t: 'Gonçalo da Silveira and the Barreto expedition', x: 'The Jesuit **Gonçalo da Silveira** baptises the Mwenemutapa and is killed by strangulation on 16 March 1561, on the court’s orders, partly through the influence of Muslim traders and of advisers who thought him a sorcerer. The episode was one of the pretexts for the expedition of **Francisco Barreto** (1569–1572), who tried to take control of Mutapa’s gold mines and failed, largely through disease.' },
    { d: '1629', t: 'The vassalage treaty', x: 'The Mwenemutapa **Mavura** signs a treaty making him a vassal of the king of Portugal, with trading and mining rights and freedom for missionaries. In practice Portuguese power in the interior stayed limited to trading fairs and the Zambezi *prazos*.' },
    { d: 'c. 1683 – 1684', t: 'Changamire Dombo', x: 'The chief **Changamire Dombo** destroys the power of the Torwa at Khami and expels the Portuguese from the plateau. The **Rozvi** state is founded and dominates the plateau until c. 1830.' },
    { d: '1871', t: 'Carl Mauch ‘discovers’ the ruins', x: 'The German geologist **Carl Mauch** visits Great Zimbabwe, guided by European hunters. Convinced it was the palace of the Queen of Sheba or the biblical kingdom of Ophir, his idea finds an echo in Europe.' },
    { d: '1891 – 1895', t: 'Bent, Rhodes and Rhodesia', x: 'The British explorer **Theodore Bent** excavates the site in 1891 and attributes it to ‘Semitic’ or Phoenician merchants. The territory, occupied by **Cecil Rhodes**’s British South Africa Company (Pioneer Column, 1890), comes to be called **Rhodesia**.' },
    { d: '1902 – 1904', t: 'The destruction of the layers', x: 'The ‘curator’ **Richard Hall**, looking for proof of a non-African origin, strips the archaeological layers from the ruins (in places up to about a metre of deposit), destroying much of the information for ever.' },
    { d: '1905 – 1929', t: 'The scientific refutation', x: 'The archaeologist **David Randall-MacIver** (1905) and then **Gertrude Caton-Thompson** (1929) excavate methodically and conclude that the ruins are **medieval and of African origin**, on the basis of stratigraphy, pottery, imported objects and comparison with the culture of the local peoples.' },
    { d: '1965 – 1980', t: 'Politics and archaeology', x: 'The Rhodesian regime (the Rhodesian Front, Ian Smith’s government, which declared unilateral independence in 1965) pressures museums and archaeologists not to present the African origin. The archaeologist **Peter Garlake**, who wrote *Great Zimbabwe* (1973), left the country at about that time. In **1980**, with independence, the country adopts the name Zimbabwe.' },
    { d: '1986 – 2013', t: 'Heritage and dating', x: 'Great Zimbabwe is inscribed on the UNESCO World Heritage List (1986), together with Khami. In 2013 the new Bayesian chronology establishes the sequence of wall-building.' }
  ] }
];

const mapa = [
  'Great Zimbabwe was not an isolated city: it was part of a network of **stone centres** on the plateau, **ports** on the coast and **mines** in the interior. The table gathers the main sites, from precursors to heirs. Dates are approximate.',
  { tabela: { cab: ['Site', 'Where', 'Approximate dates', 'Role'], linhas: [
    ['Schroda', 'Limpopo valley, South Africa', 'c. 900 – 1000', 'Zhizo settlement, trade in ivory and beads'],
    ['K2 and Mapungubwe', 'Limpopo valley, South Africa (near the Zimbabwe and Botswana borders)', 'c. 1000 – 1300', 'Often described as the first state in southern Africa, with an elite separate from the people; gold, glass, ivory; UNESCO 2003'],
    ['Leopard’s Kopje', 'South-western Zimbabwe, near Bulawayo', 'c. 900 – 1300', 'Cattle-keeping tradition, earlier than Khami'],
    ['Great Zimbabwe', 'Masvingo, Zimbabwe', 'c. 1000 – 1450 (occupation to c. 16th–17th)', 'Great centre of the plateau; Acropolis, Great Enclosure, Valley; UNESCO 1986'],
    ['Manyikeni', 'Gaza Province, Mozambique', 'c. 13th – 15th centuries', 'Stone site south-east of the plateau, near the route to the coast'],
    ['Khami', 'Near Bulawayo, Zimbabwe', 'c. 1450 – 1683', 'Capital of the Torwa; decorated stone platforms; UNESCO 1986'],
    ['Naletale and Danangombe', 'Western plateau, Zimbabwe', 'c. 17th – 18th centuries', 'Centres of the Rozvi state, heirs of Khami'],
    ['Chibuene and Sofala', 'Coast of Mozambique', 'c. 8th – 16th centuries', 'Ports through which the gold left; contacts with the Swahili world'],
    ['Kilwa Kisiwani', 'Island in Tanzania', 'c. 9th – 16th centuries', 'Great gold city; intermediary of the trade with Arabia and India'],
    ['Sena and Tete', 'Zambezi valley, Mozambique', 'from c. 1530', 'Portuguese settlements and gold fairs of Mutapa']
  ] } },
  { img: 'zim-mapa-sitios', leg: 'Schematic map of sites from different periods, c. 1200–1700: Mapungubwe (triangle), Great Zimbabwe (square), Khami (diamond), Manyikeni (circle) and Sofala (cross). Digitally drawn map.' },
  { h: 'Great Zimbabwe: three complexes' },
  'The site occupies a core of about **80 hectares**, and the dispersed city around it may have been much larger. It divides into three complexes: the **Acropolis**, the **Great Enclosure** and the **Valley**. The names come from the first European explorers and do not correspond to ancient functions, which are interpretations.',
  { h: 'The Acropolis (Hill Complex)' },
  'On top of a granite hill, some 80 m above the valley, the Acropolis is the oldest and most occupied part. The walls follow the natural granite blocks, creating enclosures, narrow passages and platforms. **The stone birds** were found here (mostly in the so-called Eastern Enclosure), along with objects such as beads and pottery fragments. The most common interpretation is that it was a **royal residence and a sacred place**, where chiefs lived and rituals were held; the view commands the valley.',
  { img: 'zim-acropole', leg: 'Walls of the Hill Complex, Great Zimbabwe.' },
  { img: 'zim-acropole-reconstrucao', leg: 'Great Zimbabwe Hill Complex, c. 1350; conjectural reconstruction. AI-generated illustration.' },
  { h: 'The Great Enclosure' },
  'It is the largest structure on the site and, according to the Metropolitan Museum, the largest ancient construction in sub-Saharan Africa. The outer wall is about **250 m** in circumference (252 m by one cited measurement), up to **11 m high** and about 5 m thick at the base. It is estimated to have required **hundreds of thousands of blocks** of granite, split by exploiting the rock’s natural flaking into slabs; none is joined with mortar, yet the courses are very regular and lean slightly inwards.',
  'Along the top of the outer wall runs a decorative **chevron frieze**. Inside there is a narrow **parallel passage**, the solid **conical tower** (about 9 m high and 5.5 m across at the base; measurements vary by source), small platforms and traces of clay houses. What it was for no one knows for sure: suggestions include the residence of a royal figure, of the king’s wives, a place for the initiation of young people and a meeting space. According to some sources, the traditional name **Imbahuru** would mean ‘great house’. It is important to say: **all these functions are hypotheses**.',
  { img: 'zim-torre-conica', leg: 'Conical tower in the Great Enclosure.' },
  { img: 'zim-muralha-granito', leg: 'Exterior granite wall of the Great Enclosure, Great Zimbabwe.' },
  { img: 'zim-cerco-reconstrucao', leg: 'Great Enclosure, c. 1400; conjectural reconstruction. AI-generated illustration.' },
  { h: 'The Valley' },
  'Between the Acropolis and the Great Enclosure the valley holds dozens of small enclosures and platforms of clay houses (the so-called Valley Ruins), where most of the population probably lived. Everyday objects were found here: **pottery, spindle whorls** for spinning cotton, traces of forging and smithing, **glass beads**, and also gold beads and signs of long-distance trade. At its peak the city is estimated to have had **10,000 to 20,000 inhabitants**, though the figures are only an estimate.',
  { img: 'zim-vale', leg: 'Valley Ruins, Great Zimbabwe.' },
  { h: 'Building technique' },
  { lista: [
    '**Stone:** granite, which the heat of the day and cold of the night cause to peel off in large slabs (exfoliation), making it easy to obtain regular blocks without heavy tools.',
    '**No mortar:** blocks rest on one another by weight and geometry; walls curve and are wider at the bottom.',
    '**Plans:** curved and oval enclosures, rather than right angles, linked by narrow passages.',
    '**Houses:** inside the enclosures, houses were of **daga** (clay on poles) with thatched roofs; there were no stone houses.',
    '**Timber:** wooden lintels over doorways, of which little survives because of 19th- and 20th-century destruction.'
  ] },
  { h: 'Khami and the other ‘zimbabwes’' },
  'After Great Zimbabwe the centre of stone building shifted to the south-west: **Khami** (c. 1450 – 1683) has walls decorated with patterns (chevron, chequerboard), high platforms and retaining walls. It was inscribed on the World Heritage List in 1986, like Great Zimbabwe. **Naletale** and **Danangombe** (also known as Dhlo-Dhlo) are later centres, linked to the Rozvi state.',
  { img: 'zim-khami-muros', leg: 'Stone walls of the main platform at Khami.' },
  { h: 'Sofala, the gold port' },
  'Sofala (Mozambique) lay at the mouth of the Buzi river and was the outlet for the plateau’s gold to the Indian Ocean. It was a Swahili settlement of timber, clay and, later, some stone houses, dependent on Kilwa. Ships arrived with the **monsoons**: they carried away gold, ivory and hides and brought cloth, beads, pottery and metals. In 1505 the Portuguese occupied it and built a fort.',
  { img: 'zim-sofala-porto', leg: 'Swahili port of Sofala, c. 1400; hypothetical reconstruction. AI-generated illustration.' },
  { h: 'The routes' },
  { lista: [
    '**Of gold:** from the plateau’s mines down the Save and Buzi valleys to Sofala; from there by sea to Kilwa, Yemen and India.',
    '**Of ivory and copper:** ivory came from all over the plateau and the Zambezi; copper, from deposits to the north and south, circulated in cross-shaped ingots.',
    '**Into the interior:** from Great Zimbabwe south towards the Limpopo, and north to the Zambezi, where Mutapa and later the Portuguese set up fairs.',
    '**Imports:** glass beads, cloth, Chinese and Persian pottery and Syrian glass reached the court, mostly as prestige goods.'
  ] }
];

const sociedade = [
  { h: '1. Political organisation' },
  'Everything said about the state of Great Zimbabwe is **reconstruction**: there are no local texts. According to archaeology there was an **elite** living on the Acropolis and in the Great Enclosure, and a larger population in the Valley. Power seems to have rested on a **sacred kingship**, with a chief who was also a mediator between the living and the ancestors, and who controlled cattle, long-distance trade and access to gold and ivory. Studies by Thomas Huffman and others link this organisation to the so-called **‘Central Cattle Pattern’**, a spatial structure common to many societies in the region.',
  'As for territorial limits, they were not those of a modern empire: Great Zimbabwe was the centre of a **network of chiefs** and of stone sites, not a state with fixed borders. The elite’s strength rested on **control of exchange**, not on conquering territory.',
  { img: 'zim-corte-rei', leg: 'Audience with a Shona chief, c. 1400; imagined scene. AI-generated illustration.' },
  { h: '2. Social classes' },
  'The distinction between **elite** and **commoners** is visible: objects of gold, copper and imports come mostly from the Great Enclosure and the Acropolis; spindle whorls and everyday pottery come from the Valley. There were probably specialists (smiths, potters, miners, merchants, diviners), but their exact organisation is unknown. Portuguese accounts of 16th-century Mutapa speak of nobles, ‘captains’ and **wives of the king** with political roles; **they should not be transposed without caution** to the 14th century.',
  { h: '3. Religion' },
  'The information comes from **Shona ethnography** (19th–20th centuries) and from archaeology, and applying it to the past is a hypothesis. Among the Shona, religion centres on **Mwari**, the supreme god, who communicates through **mediums** and through ancestral chiefs (*mhondoro*, spirits of dead chiefs who ‘inhabit’ lions), with shrines in the Matopo hills and rain-asking rituals. If Great Zimbabwe used these ideas, the king could have been the intermediary and the stone bird a symbol of that mediation.',
  { img: 'zim-ave-zimbabue', leg: 'Soapstone birds from Great Zimbabwe in a historical illustration published by J. Theodore Bent, 1892.' },
  { h: 'The stone birds (Zimbabwe Birds)' },
  '**Eight soapstone birds** were recovered, each on a pillar or monolith, mostly on the Acropolis. They are not all alike: some have **human features** (lips, toes), and the identification of the species (fish eagle, bateleur or other) is **debated**. For some they symbolise royal authority, for others the link between ancestors and the living. One of them, bought by Cecil Rhodes, went to Groote Schuur (Cape Town), where it remains; in 1981 South Africa returned four others to Zimbabwe. The bird now appears on Zimbabwe’s flag, coins and national emblem.',
  { h: '4. Economy' },
  { lista: [
    '**Cattle:** the main form of wealth and prestige; analysis of the bones suggests the elite ate better-quality meat (for example from young animals).',
    '**Farming:** sorghum, finger millet (*rapoko*), cowpeas, bambara groundnuts and gourds; there was **no** maize (it came from the Americas only in the 16th century or later).',
    '**Gold:** extracted from surface and small-shaft mines, and from alluvial deposits; sold on the coast for beads, cloth and pottery. The gold found at Great Zimbabwe is small in amount (most was looted), but it was the basis of wealth.',
    '**Ivory:** exported in large quantities, to India and China, where it was in great demand; ivory bracelets were also worn at court.',
    '**Copper and iron:** cross-shaped copper ingots; iron for hoes, spears and axes.',
    '**Textiles:** spindle whorls and local cotton, bark cloth and skins.'
  ] },
  { img: 'zim-gado-pastores', leg: 'Herders and Sanga cattle near Great Zimbabwe, c. 1400. AI-generated illustration.' },
  { img: 'zim-ouro-objetos', leg: 'Gold beads and jewellery attributed to Mapungubwe, displayed at the Museum of Gems and Jewellery, Cape Town.' },
  { img: 'zim-lingotes-cobre', leg: 'Katanga copper cross ingot; comparative Central African object displayed at the Casa de la Moneda, Madrid.' },
  { h: 'Trade with the coast and the world' },
  'Gold and ivory reached **Sofala**, from there **Kilwa** and other Swahili towns, and then the Arab and Indian world. In return came **glass beads** (many made in India), cotton cloth and **pottery**. At Great Zimbabwe have been found **Chinese celadon pottery** (Yuan and Ming dynasties), a **Persian** bowl, **Syrian glass** and a few **copper coins from Kilwa**. None of this proves that foreign merchants lived in the city: these were goods brought by Swahili intermediaries and kept by the elite as a mark of prestige.',
  { img: 'zim-contas-vidro', leg: 'Detail of a Timorese mutisalah necklace with Indo-Pacific bead traditions; comparative object, not a Great Zimbabwe find.' },
  { img: 'zim-moeda-kilwa', leg: 'Kilwa copper coin found at Great Zimbabwe; photograph by T. Huffman, BIEA/John Sutton archive.' },
  { img: 'zim-troca-mercadores', leg: 'Exchange between plateau and Swahili traders, c. 1400; imagined scene. AI-generated illustration.' },
  { h: '5. Writing' },
  'There was no writing at Great Zimbabwe: history was passed on by **oral tradition**, by poets and by genealogies of chiefs. The first texts about the region are **by outsiders**: the Arab geographers (for example Al-Masudi, in the 10th century, speaks of the gold of Sofala and its people), the Swahili chroniclers and, from the 16th century, the Portuguese. The absence of local writing is one reason why the origin of the ruins was so disputed.',
  { h: '6. Home and daily life' },
  'Houses were round, of **daga** (clay on poles) with thatched roofs, grouped in family enclosures, with granaries and cattle pens. Stone was for walls and platforms, not for living in. Life revolved around cattle, fields and extended families; women ground grain and cooked, men tended cattle and metals, and weightier decisions lay with the chiefs.',
  { img: 'zim-casa-daga', leg: 'Interior of a daga house, c. 1400; hypothetical reconstruction. AI-generated illustration.' },
  { img: 'zim-cidade-quotidiano', leg: 'Daily life in the valley at Great Zimbabwe, c. 1400. AI-generated illustration.' },
  { h: '7. Food' },
  'The base was **sorghum** and **millet**, in porridges (ancestors of today’s *sadza*, which is now made with maize, introduced later), with milk, beef, goat, game and fish, beans and vegetables. Cattle were kept more for prestige, milk and blood than for daily meat; big feasts included slaughter. Sorghum or millet beer was used in rituals.',
  { img: 'zim-mulher-cozinha', leg: 'Preparing sorghum porridge, c. 1400; imagined scene. AI-generated illustration.' },
  { h: '8. Clothing and adornment' },
  'Clay and stone spindle whorls show that **cotton** was spun, and **skins** and **bark cloth** were used too. The elite displayed **glass beads, ivory and copper bracelets, and gold wire and beads**. The exact look of the clothing is unknown, and later Portuguese accounts describe cloth coming from the coast for the chiefs of Mutapa.',
  { h: '9. Music and games' },
  'The **mbira** (an instrument of plucked metal tines) is today inseparable from Shona music and ceremonies with the ancestors; the exact antiquity of the mbira in medieval Zimbabwe is **debated**. There were also drums, singing, dance and board games of the **mancala** type, common across Africa, though with little direct evidence at the site.',
  { img: 'zim-mbira', leg: 'Shona mbira.' },
  { h: '10. Metallurgy and technology' },
  'Iron was smelted in **clay furnaces** with bellows and *tuyères* (clay pipes), and made into hoes, axes, spears and **double iron gongs**, an object of authority used in the region. Copper was smelted and cast into ingots. Gold was worked into foil, wire and beads. **Soapstone** was carved into birds, bowls and figures. Smiths had a special status.',
  { img: 'zim-ferreiro', leg: 'Shona ironworkers, c. 1400; hypothetical reconstruction. AI-generated illustration.' },
  { img: 'zim-gongo-ferro', leg: 'Double iron gong associated with the Ekpo society, Calabar, Nigeria; comparative example, not a Shona instrument.' },
  { h: '11. Gold mining' },
  'On the Zimbabwe plateau there are thousands of **ancient gold workings** (shallow pits and galleries following quartz veins), many of which were rediscovered by colonial prospectors in the 1890s and later reused by modern mines. The date of most is uncertain, and some are earlier than Great Zimbabwe.',
  { img: 'zim-minas-ouro', leg: 'Extracting and washing gold-bearing material, c. 1400; imagined scene. AI-generated illustration.' },
  { h: '12. War' },
  'There is no clear evidence of widespread warfare: **the walls of Great Zimbabwe do not look defensive** (they are too low on open sides, with many entrances), and serve more to delimit space, mark status and control access. Portuguese accounts of Mutapa describe armies of archers and of warriors with spears, shields and axes. For the Great Zimbabwe period, evidence of weapons is scarce.'
];

const personalidades = [
  'From Great Zimbabwe itself **no name** of a king or queen survives. The figures below are the heirs, the chroniclers, the archaeologists and those who turned this history into a political debate. Life dates, where they exist, are those accepted by historians.',
  { h: 'Mutota (Nyatsimba Mutota, 15th century)' },
  'A figure of oral tradition and of the chroniclers: the chief who, coming from Great Zimbabwe, is said to have set out north and founded Mutapa. Some historians debate whether he was a real person or a symbolic figure; the details (the search for salt, the date) are **uncertain**.',
  { h: 'Matope (Nyanhehwe, c. 1450 – 1480)' },
  'Mutota’s son and successor in tradition. He expanded Mutapa to the south and towards the coast, and, in tradition, is the great conqueror of Mutapa. The chronology of his reign is approximate.',
  { h: 'Pêro da Covilhã (c. 1450 – after 1520)' },
  'Traveller and spy of King João II, sent in 1487 to find the markets of the East. By tradition he was at Sofala c. 1489–1490 and informed Lisbon about the gold; the documentation on the journey is scarce, and some details come from later sources. He later stayed in Ethiopia, where he lived until his death.',
  { h: 'Vicente Pegado (captain of Sofala, 1530s)' },
  'Captain of the Portuguese fortress at Sofala; his account (c. 1531) is the first clear written description of a great stone ruin in the interior, which the natives called **Symbaoe**, ‘court’. He admits not knowing who built it.',
  { h: 'João de Barros (1496 – 1570)' },
  'Chronicler of Portuguese expansion; he wrote the *Decades of Asia* (the first in 1552). He never went to East Africa; he described Symbaoe from informants, and was **careful**: he said no one knew who had raised it and that Muslim merchants could not read an inscription, but he mentioned the legend of the Queen of Sheba. It was this record that centuries later fed the idea of a non-African origin.',
  { img: 'zim-barros', leg: 'João de Barros, Portuguese chronicler.' },
  { h: 'Gonçalo da Silveira (1526 – 1561)' },
  'Portuguese Jesuit, born in Almeirim, who reached Mutapa between the end of 1560 and early 1561 and baptised the king; he was strangled on 16 March 1561. His death led to a call for military intervention and to the Barreto expedition. He was regarded as a martyr by the Church.',
  { img: 'zim-silveira', leg: 'Gonçalo da Silveira in a historical engraving of his martyrdom by Adrien Melaer; cropped face.' },
  { h: 'Changamire Dombo (d. c. 1695)' },
  'Chief and founder of the Rozvi state, who defeated the Torwa of Khami and expelled the Portuguese from the plateau around 1683–1684. The dates of his reign are approximate. The Rozvi survived until the invasions of the 1830s.',
  { h: 'Carl Mauch (1837 – 1875)' },
  'German geologist and explorer who in 1871 visited Great Zimbabwe, guided by European hunters. Convinced it was a biblical palace (Sheba, Ophir), he contributed to the myth. He died in Germany in 1875.',
  { img: 'zim-mauch', leg: 'Carl Mauch, German geologist.' },
  { h: 'Theodore Bent (1852 – 1897)' },
  'British explorer and amateur archaeologist who excavated Great Zimbabwe in 1891, with the support of the British Association and the Royal Geographical Society. In *The Ruined Cities of Mashonaland* (1892) he attributed the ruins to ‘Semitic’ or Phoenician merchants, and his authority spread the theory.',
  { h: 'Cecil Rhodes (1853 – 1902)' },
  'British businessman and politician, founder of the British South Africa Company, which occupied the territory (1890) and gave it the name Rhodesia. His company supported the first explorations of the ruins, and he acquired one of the stone birds. His figure is now highly controversial.',
  { h: 'David Randall-MacIver (1873 – 1945)' },
  'British archaeologist who in 1905 excavated Great Zimbabwe on behalf of the British Association and concluded, from finds such as imported pottery and beads, that the origin was **African and medieval**. He published *Mediaeval Rhodesia* (1906) and was attacked by defenders of the ‘Phoenician’ theory.',
  { h: 'Gertrude Caton-Thompson (1888 – 1985)' },
  'British archaeologist. In 1929, at the request of the British Association, she returned to Great Zimbabwe and excavated it with stratigraphic rigour, confirming the **African and medieval** origin. Her book *The Zimbabwe Culture* (1931) became a reference, and she is considered one of the first women to gain prominence in African archaeology.',
  { img: 'zim-caton-thompson', leg: 'Inscription on a bench commemorating Gertrude Caton-Thompson and Dorothy de Navarro, Cambridge; replacement for the requested portrait.' },
  { h: 'Peter Garlake (1934 – 2011)' },
  'British archaeologist who worked in Rhodesia and wrote *Great Zimbabwe* (1973), reaffirming the African origin. Under pressure from Ian Smith’s regime, he left the country around 1970. He is the author of one of the great syntheses on the subject.'
];

const legado = [
  { h: 'What they left us' },
  { lista: [
    '**Architecture:** the largest ancient stone construction in sub-Saharan Africa, and a tradition of decorated walls that passed to Khami and other ‘zimbabwes’.',
    '**The stone bird:** a symbol of modern Zimbabwe, present on the flag (since 1980), on coins and in the national emblem.',
    '**A line of states:** from Mapungubwe to Great Zimbabwe, Khami, Mutapa and the Rozvi, the political history of southern Africa over some thousand years.',
    '**The name:** in 1980 Southern Rhodesia became Zimbabwe, in homage to the site.',
    '**An exemplary case:** the debate over the origin of the ruins is one of the great examples of how racial prejudice distorts science.'
  ] },
  { img: 'zim-bandeira', leg: 'Flag of Zimbabwe.' },
  { h: 'Art' },
  'The art of Great Zimbabwe consists of **soapstone sculpture** (the birds, but also figures and bowls), **decorated walls** with geometric patterns, **pottery** with incised decoration and **jewellery** of gold, copper and ivory. Imported objects, such as Chinese pottery, became part of court life.',
  { img: 'zim-ave-museu', leg: 'Decorative wooden bird inspired by the Zimbabwe Bird on a banister; not one of the original archaeological soapstone birds.' },
  { h: 'The colonial controversy' },
  'When Europeans saw the ruins, especially after **Carl Mauch (1871)** and the accounts of **Theodore Bent (1891)**, most refused to accept that Africans could have built them. They attributed them to the **Queen of Sheba, to Phoenicians, to Arabs**, to ‘a vanished white race’. The idea served politics: the colonisation of Rhodesia by **Cecil Rhodes**’s Company was easier to justify if Africans were seen as incapable of building a civilisation.',
  { img: 'zim-rhodes', leg: 'Cecil Rhodes.' },
  'The refutation was scientific. **Randall-MacIver (1905)** showed that the imported objects were medieval and the material culture African. **Gertrude Caton-Thompson (1929)** confirmed it with more rigorous excavations. Even so, the non-African-origin theory **persisted for decades**: the **Rhodesian Front** regime (1962 – 1979) pressured museums and archaeologists, and Garlake himself left the country. The name **Zimbabwe** was chosen by African nationalists in the 1960s (it is attributed to Michael Mawema, in 1960) and adopted in **1980**.',
  { h: 'A warning about the use of the name' },
  'The country chose the name of the site, and the bird became a national emblem. But **Great Zimbabwe** and **present-day Zimbabwe** are two different things: the first is a medieval society of c. 1200–1450, the second a modern state created in 1980, with more than a dozen peoples, among whom the Shona are the largest group. Even among the Shona, the site’s past is claimed by several groups, and the debates continue.',
  { h: 'The rediscovery, in brief' },
  { lista: [
    '**1552:** Barros publishes the first printed description of ‘Symbaoe’.',
    '**1871:** Mauch visits and raises the Sheba/Ophir hypothesis.',
    '**1891:** Bent excavates; **1902–1904:** Hall destroys archaeological layers.',
    '**1905 and 1929:** Randall-MacIver and Caton-Thompson prove the African origin.',
    '**1960s – 1970s:** Rhodesian politics tries to block the message; Garlake publishes *Great Zimbabwe* (1973).',
    '**1986:** UNESCO. **2013:** new Bayesian chronology (Chirikure and colleagues).'
  ] },
  { img: 'zim-mapungubwe-paisagem', leg: 'Mapungubwe Hill and the Limpopo landscape.' },
  { img: 'zim-mapa-mutapa', leg: 'Historical map of the kingdom of Monomotapa.' },
  { h: 'Where to visit' },
  { lista: [
    '**Great Zimbabwe (Masvingo, Zimbabwe):** the site and the local museum, with replicas and photographs.',
    '**Khami (near Bulawayo, Zimbabwe):** decorated walls and platforms, inscribed by UNESCO in the same year.',
    '**Mapungubwe (Limpopo, South Africa):** the national park and the University of Pretoria museum, which holds the gold rhinoceros.',
    '**Natural History Museum of Zimbabwe (Bulawayo)** and other regional museums.',
    '**Kilwa Kisiwani (Tanzania):** the Swahili city that sold the plateau’s gold.',
    '**Fortress of Sofala and Island of Mozambique:** traces of the Portuguese presence on the gold coast.'
  ] }
];

const quiz = [
  { p: 'What does the Shona word ‘dzimba-dza-mabwe’ mean, by one of the most quoted explanations?', op: ['Houses of stone', 'City of gold', 'Sacred river', 'Mountain of kings'], certa: 0, exp: 'It is one of the two usual explanations (the other is ‘venerated houses’); both senses are tied to the idea of a chief’s residence.' },
  { p: 'In what region is Great Zimbabwe?', op: ['The plateau between the Limpopo and the Zambezi', 'The coast of Mozambique', 'The Kalahari Desert', 'The Nile valley'], certa: 0, exp: 'It lies in Masvingo province, in south-eastern Zimbabwe today.' },
  { p: 'What technique characterises the walls of Great Zimbabwe?', op: ['Stone laid without mortar', 'Fired brick with lime', 'Limestone blocks with lead', 'Timber and straw'], certa: 0, exp: 'The granite blocks rest on one another, without any binder, in regular courses.' },
  { p: 'What is the largest structure on the site?', op: ['The Acropolis', 'The Great Enclosure', 'The Valley', 'The conical tower'], certa: 1, exp: 'The outer wall of the Great Enclosure is about 250 m in circumference and up to 11 m high.' },
  { p: 'How many soapstone birds were recovered at Great Zimbabwe?', op: ['Two', 'Eight', 'Thirty', 'Two hundred'], certa: 1, exp: 'Eight birds were recovered; the bird is now a national symbol of Zimbabwe.' },
  { p: 'What was the basis of Great Zimbabwe’s wealth, besides cattle?', op: ['Gold and ivory', 'Silk', 'Oil', 'Sea salt'], certa: 0, exp: 'The plateau’s gold and ivory were traded on the coast, via Sofala and Kilwa.' },
  { p: 'Which port sent the plateau’s gold to the Indian Ocean?', op: ['Mombasa', 'Sofala', 'Luanda', 'Zanzibar'], certa: 1, exp: 'Sofala, in present-day Mozambique, later controlled by Kilwa and, from 1505, by the Portuguese.' },
  { p: 'What imported object was found at Great Zimbabwe?', op: ['Chinese celadon pottery', 'Sèvres porcelain', 'Roman coins', 'Arabian horses'], certa: 0, exp: 'Chinese celadon, a Persian bowl, Syrian glass and Kilwa coins were found.' },
  { p: 'What was the relationship between Great Zimbabwe and Mapungubwe?', op: ['Mapungubwe was a precursor and the two partly overlapped', 'They were the same city', 'It was founded later, in 1500', 'They never met'], certa: 0, exp: 'Mapungubwe (c. 1220 – 1300) was a precursor on the Limpopo and coexisted with the early phases of Great Zimbabwe, before its peak.' },
  { p: 'Who described ‘Symbaoe’ in the first Decade of Asia (1552)?', op: ['Luís de Camões', 'João de Barros', 'Pêro de Anaia', 'Gaspar Veloso'], certa: 1, exp: 'Barros was never there; he relied on informants and admitted not knowing who built it.' },
  { p: 'Which German explorer ‘discovered’ the ruins in 1871 and thought they were Sheba’s or Ophir’s?', op: ['Carl Mauch', 'David Livingstone', 'Heinrich Barth', 'Theodore Bent'], certa: 0, exp: 'Carl Mauch visited in 1871; Bent, a Briton, excavated in 1891.' },
  { p: 'Who proved in 1905 and 1929 that the ruins were African and medieval?', op: ['Randall-MacIver and Caton-Thompson', 'Cecil Rhodes and Hall', 'Mauch and Bent', 'Livingstone and Stanley'], certa: 0, exp: 'The two archaeologists excavated methodically and concluded it was an African and medieval work.' },
  { p: 'Where did the chief Mutota, by tradition, migrate to, founding Mutapa?', op: ['North', 'To the sea', 'South, to the Cape', 'To Egypt'], certa: 0, exp: 'By tradition he set out north in search of salt and new land, c. 1430–1450; the details are uncertain.' },
  { p: 'Which state had its capital at Khami, in the south-west of the plateau?', op: ['The Torwa (Butua)', 'The Zulus', 'Mali', 'Axum'], certa: 0, exp: 'Khami was the Torwa capital from c. 1450 until its destruction around 1683.' },
  { p: 'In what year did the country take the name Zimbabwe?', op: ['1923', '1965', '1980', '1999'], certa: 2, exp: 'In 1980, with independence, Rhodesia became Zimbabwe; the name was proposed by nationalists in the 1960s.' }
];

export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };
