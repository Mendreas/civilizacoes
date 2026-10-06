// MAYA — full content in English. Same structure and image ids as dados.js.
// Dates are approximate. Maya names follow modern spelling (with ’ for the glottal stop).

const visao = [
  { caixa: 'In brief', texto: [
    'The **Maya** were a group of peoples and city-states who for more than three thousand years lived in southern Mexico, Guatemala, Belize and western Honduras and El Salvador. They never formed a single empire: there were dozens of kingdoms, each with its own king, that allied, traded and fought with one another. They shared a parent language, their gods, a calendar and, above all, a **writing system** of more than eight hundred signs, the most fully developed script of pre-Columbian America.',
    'Their achievements are remarkable: temple-pyramids and limestone palaces in the middle of tropical forest, very precise naked-eye astronomy, complex calendars, a number system with **zero**, and an art of reliefs, painted pottery and murals. They reached their height in the **Classic** period (c. AD 250 – 900), with cities such as Tikal, Calakmul, Copán and Palenque. After the “collapse” of the southern cities, the Maya of the northern Yucatán Peninsula (Chichén Itzá, Uxmal, Mayapán, Tulum) continued to flourish until the Spaniards arrived.',
    '**The Maya did not disappear.** Today about **six million people** speak one of some thirty Mayan languages (such as K’iche’, Yucatec, Q’eqchi’ or Mam), above all in Guatemala and Mexico. The mystery of the “lost civilization” is a myth: what ended in the ninth century was the power of some kings and some cities, not the people.'
  ] },
  { img: 'may-mapa-regiao', leg: 'Map of Maya sites in Yucatan, Petén and the Highlands, with neighbouring cities; Jean-Luc Appriou, French labels, synthesis of several periods.' },
  { h: 'Where they lived' },
  'The Maya area covers about **300,000 km²** (more than three times the size of Portugal) and falls into three main zones. The **Southern Lowlands**, in the Petén (northern Guatemala), Belize and southern Mexico, are covered by humid tropical forest and were the heart of the Classic period. The **Northern Lowlands**, the Yucatán Peninsula, are a dry limestone plain of low scrub with no surface rivers: water comes from **cenotes**, natural sinkholes in the limestone. The **Southern Highlands**, in Guatemala and Chiapas, are volcanic and cool, with lakes, and supplied obsidian and jade; they were the home of the K’iche’ and Kaqchikel peoples.',
  'The word “Maya” is partly an outsiders’ name: it probably comes from **Mayapán**, the northern capital in the last centuries before the conquest. The peoples themselves had their own names (Yucatec, K’iche’, Mam, Ch’ol, Tzeltal…), and most still identify by them today. The ancient kings called themselves *k’uhul ajaw*, “divine lord” (of one particular city), and rarely used a common name for all the people.',
  { img: 'may-tikal-templo-i', leg: 'Temple I, Great Jaguar, Tikal’s Great Plaza' },
  { h: 'When they lived' },
  'Maya history spans more than three millennia, and its phases are defined by archaeologists (dates are approximate).',
  { tabela: { cab: ['Phase', 'Approximate dates', 'What defines it'], linhas: [
    ['Preclassic', 'c. 2000 BC – AD 250', 'Farming villages; first great platforms (Ceibal, Aguada Fénix); Nakbé and El Mirador; the San Bartolo murals; earliest writing'],
    ['Early Classic', 'c. AD 250 – 600', 'Divine kings and Long Count dates appear; Tikal; arrival of Siyaj K’ak’ (AD 378); contact with Teotihuacan'],
    ['Late Classic', 'c. AD 600 – 800', 'The peak: the Tikal–Calakmul rivalry, Palenque under Pakal, Copán, Yaxchilán; largest population'],
    ['Terminal Classic', 'c. AD 800 – 950/1000', 'The “collapse” of the southern cities; the last Long Count dates (AD 909); Chichén Itzá and Uxmal rise in the north'],
    ['Postclassic', 'c. AD 950 – 1524', 'Chichén Itzá, Mayapán, Tulum; Highland cities (Q’umarkaj, Iximché); maritime trade'],
    ['Contact and resistance', 'AD 1511 – 1697 (and after)', 'Spanish conquest; the Itza kingdom of Tayasal falls only in 1697; revolts continue into the twentieth century']
  ] } },
  { h: 'Who were the Maya?' },
  'The Maya descend from farmers who settled in villages on the Pacific coast, in Belize and in the Petén around 2000 BC. They spoke related languages derived from a common ancestor, **Proto-Mayan**. They shared ideas, goods and techniques with their **Mesoamerican** neighbours (the Olmec, the Zapotec, Teotihuacan), but their civilization is its own development. In the kings’ texts, the Maya are ruled by families of “divine lords” who claimed descent from gods and ancestors.',
  { h: 'Why they matter' },
  { lista: [
    '**Writing:** the most complete *logosyllabic* script (signs for words and for syllables) of the New World, which lets us read the political history of kings in inscriptions on stone, pottery and books.',
    '**Time and mathematics:** **zero** as a place value, base-20 numbers, and the Long Count, a way of counting days from a fixed origin that allowed them to date events with precision across thousands of years.',
    '**Astronomy:** tables of Venus, of eclipses and of the Moon, made by naked-eye observation with remarkable accuracy.',
    '**Architecture and art:** monumental cities in the middle of the forest, reliefs and stelae with royal portraits, polychrome pottery, jade, murals.',
    '**Food:** maize (the *milpa*), cacao and vanilla, which the whole world uses today.',
    '**Resistance and continuity:** Maya identity and languages survived conquest, evangelization, civil war and discrimination, and have returned to public life.'
  ] },
  { caixa: 'The Maya today', texto: 'About **six million people** speak Mayan languages, and many more identify as Maya. In **Guatemala**, nearly half the population (about 42% in the 2018 census) identifies as Maya, and the country officially recognizes 21 Mayan languages. The largest are **K’iche’** (about a million speakers), **Yucatec** and **Q’eqchi’** (about 800,000 each) and **Mam** (about 480,000). In Mexico, Yucatec is still spoken throughout the Yucatán. Many communities still use the 260-day calendar, farm the milpa, weave on backstrap looms and hold ceremonies before mountains and caves. Today’s Maya are **not “remnants”**: they are the living heirs of this civilization.' },
  { img: 'may-mulher-tecelagem', leg: 'Maya woman weaving on a backstrap loom, Guatemala' }
];

const linha = [
  'This timeline follows the main events of Maya history, from the Preclassic to the Spanish conquest. Dates are approximate; kings’ names follow modern readings of the inscriptions, which sometimes change as decipherment advances.',
  { linha: [
    { d: 'c. 2000 – 1000 BC', t: 'The first villages', x: 'Farming families settle on the Pacific coast (Soconusco), in Belize and in the Lowlands, grow maize, beans and squash, make pottery and begin to build platforms and ritual houses. In Belize, the site of **Cuello** shows very early occupation (c. 1200 BC or earlier).' },
    { d: 'c. 1000 – 800 BC', t: 'Ceibal and Aguada Fénix', x: 'Monumental platforms appear at **Ceibal** (Guatemala) and **Aguada Fénix** (Mexico). Aguada Fénix, found by **LIDAR** in 2020, is an enormous artificial plateau about 1.4 km long, with no pyramids and no sign of kings: it may have been built by a society with little hierarchy, which challenges the idea that great works only arise with kings.' },
    { d: 'c. 750 – 400 BC', t: 'Nakbé', x: '**Nakbé**, in the northern Petén, is one of the first great Maya cities. It has structures dozens of metres high, decorated with huge stucco masks of deities, and is joined by a raised causeway (*sacbé*) to El Mirador, 13 km away.' }
  ] },
  { img: 'may-nakbe-reconstrucao', leg: 'Nakbé, c. 400 BC; conjectural reconstruction. AI-generated illustration.' },
  { linha: [
    { d: 'c. 300 – 200 BC', t: 'San Bartolo and the earliest writing', x: 'At **San Bartolo** (Guatemala), a hidden room beneath a pyramid holds the oldest known **murals** of Maya art, with the myth of the creation of the Maize God. In a still deeper layer, archaeologists found signs of writing, among the oldest in the region, from c. 300 – 200 BC. The murals, discovered in 2001 by William Saturno, were painted around 100 BC (dates debated).' }
  ] },
  { img: 'may-san-bartolo-mural', leg: 'Replica of the San Bartolo mural, Miraflores Museum, Guatemala City; not a photograph of the original wall.' },
  { linha: [
    { d: 'c. 300 BC – AD 150', t: 'El Mirador, the first metropolis', x: '**El Mirador**, in the northern Petén, grows to cover about 26 km² (the urban core) and has the largest structures of the Maya world, such as the **La Danta** pyramid, about 70 m high and one of the largest in the world by volume. It had a network of raised causeways and influence over a wide region. It was the centre of a society already with kings and writing.' }
  ] },
  { img: 'may-el-mirador-danta', leg: 'La Danta complex, El Mirador' },
  { linha: [
    { d: 'c. AD 150', t: 'The abandonment of El Mirador', x: 'Around AD 150 the great Preclassic cities of the northern Petén, such as El Mirador, are abandoned. The causes are debated (climate change, exhaustion of soils and resources, warfare), and the event is sometimes called “the first Maya collapse”. Other southern cities, such as Tikal, Uaxactún and Calakmul, persist and grow.' },
    { d: 'AD 292', t: 'Start of the Classic: Tikal’s first dated stela', x: '**Stela 29** at Tikal bears the earliest known date of the city, equal to AD 292 in the Long Count. It is a sign that the divine kings of the Classic (*k’uhul ajaw*) were already using calendars, writing and stone portraits to legitimize power.' },
    { d: 'AD 378', t: 'Siyaj K’ak’ arrives at Tikal', x: 'According to the inscriptions, a leader named **Siyaj K’ak’** (“Fire Born”) reaches Tikal around 16 January 378, coming from the west. Around the same days (his death is dated to 14 January in some readings) the local king, **Chak Tok Ich’aak I**, dies, and soon afterwards **Yax Nuun Ayiin I** takes the throne, a son (or relative) of a lord of **Teotihuacan**, the great city of the Mexican plateau. Historians debate whether this was a military conquest, a political intervention or a dynastic alliance.' }
  ] },
  { img: 'may-tikal-estela-31', leg: 'Tikal Stela 31, face depicting Siyaj Chan K’awiil II; photograph of its display at Tikal.' },
  { img: 'may-siyaj-kak-chegada', leg: 'Arrival of a group associated with Teotihuacan at Tikal, AD 378; conjectural scene associated with Siyaj K’ak’, with no documented likeness. AI-generated illustration.' },
  { linha: [
    { d: 'AD 426', t: 'The dynasty of Copán', x: 'In the southeast, at Copán (Honduras), a lord named **K’inich Yax K’uk’ Mo’** (“Great Sun First Quetzal Macaw”) founds a dynasty that will last almost four hundred years and sixteen kings. Analyses of bones and teeth show he came from elsewhere, possibly Tikal or the Petén Lowlands (debated).' },
    { d: 'AD 562', t: 'Tikal defeated', x: 'The city of **Caracol**, allied with **Calakmul**, defeats Tikal in 562. Tikal then enters a “hiatus” of about 120 years with no dated monuments, while Calakmul and its allies dominate the Lowlands.' },
    { d: 'AD 615', t: 'Pakal takes the throne of Palenque', x: 'At age 12, **K’inich Janaab Pakal** becomes king of Palenque, in Chiapas. He will reign 68 years, one of the longest reigns in history, and will turn the city into a centre of great buildings and texts.' },
    { d: 'AD 683', t: 'Pakal dies', x: 'Pakal dies at about age 80 and is buried in the **Temple of the Inscriptions**, the pyramid he had built. The tomb will not be found until 1952.' },
    { d: 'AD 695', t: 'Tikal turns the tide', x: 'The king of Tikal, **Jasaw Chan K’awiil I**, defeats Calakmul and captures its standard. The city is a power again and begins a great phase of building (Temples I and II).' },
    { d: 'AD 738', t: 'The king of Copán is captured', x: 'The king of Copán, **Waxaklajuun Ub’aah K’awiil** (“18 Rabbit”), is captured and beheaded by **Quiriguá**, which had been his vassal, under King K’ak’ Tiliw Chan Yopaat. Copán falls into crisis and recovers under the next king.' }
  ] },
  { img: 'may-copan-escadaria', leg: 'Copán’s Hieroglyphic Stairway' },
  { linha: [
    { d: 'c. AD 761', t: 'The fall of Dos Pilas', x: 'The kingdom of **Dos Pilas**, founded c. 630–650 by a Tikal prince who switched to Calakmul’s side, falls during the Petexbatún wars, and the region sinks into war and fortification. It is one of the first signs that the system of kingdoms was breaking down.' },
    { d: 'c. AD 800 – 950', t: 'The Terminal Classic collapse', x: 'The cities of the southern Lowlands lose their kings and their population and stop raising monuments. The causes (prolonged drought, warfare, environmental exhaustion, disrupted trade, political crisis) are debated and probably combined. The collapse was uneven, and the northern Yucatán prospered.' }
  ] },
  { img: 'may-colapso-selva', leg: 'Abandonment of a southern Lowland Maya city, c. AD 900; conjectural interpretation, not the disappearance of Maya peoples. AI-generated illustration.' },
  { linha: [
    { d: 'AD 909', t: 'The last Long Count date', x: 'The last Long Count date carved on a Lowland monument, at **Toniná** (Chiapas), corresponds to AD 909. The habit of carving monumental dates fades, but the calendar and writing do not.' },
    { d: 'c. AD 900 – 1100', t: 'Chichén Itzá', x: '**Chichén Itzá**, in the northern Yucatán, becomes the largest city of the peninsula. It has the **Castillo** (the pyramid of Kukulkán), the Great Ball Court and the Observatory. The city mixes Maya traditions with influences from other parts of Mexico (a much-debated subject).' }
  ] },
  { img: 'may-chichen-itza-castillo', leg: 'El Castillo, Pyramid of Kukulkan, Chichén Itzá' },
  { linha: [
    { d: 'c. AD 1220 – 1448', t: 'Mayapán', x: 'With the decline of Chichén Itzá, **Mayapán** becomes the capital of a confederation that controls the northern Yucatán for about two and a half centuries. The walled city falls in a revolt, c. 1441 – 1448, and the peninsula splits into small rival states.' },
    { d: 'c. AD 1200 – 1500', t: 'Tulum and maritime trade', x: 'On the Caribbean coast, **Tulum** and other walled ports, such as Cozumel, are part of a canoe-trade network linking the Yucatán to Honduras. It was one of the few Maya sites still inhabited when the Spaniards sailed past in 1518.' },
    { d: 'AD 1511 – 1519', t: 'First contacts', x: 'In 1511 a Spanish ship is wrecked near the Yucatán, and two survivors, **Jerónimo de Aguilar** and **Gonzalo Guerrero**, live among the Maya. Between 1517 and 1519, three expeditions (those of Hernández de Córdoba, Grijalva and Cortés) explore the coast. Diseases brought from Europe begin to spread ahead of the conquerors.' },
    { d: 'AD 1524', t: 'Alvarado in the Highlands', x: '**Pedro de Alvarado**, with Mexican and Kaqchikel allies, defeats the K’iche’ of Q’umarkaj in the Guatemalan Highlands. The K’iche’ leader **Tecún Umán** is regarded as a national hero, although the details of his death are largely tradition.' },
    { d: 'AD 1527 – 1547', t: 'The difficult conquest of the Yucatán', x: 'The **Montejos** (father and son) take two decades to subdue the northern Yucatán, with many setbacks. **Mérida** is founded in 1542, and a great revolt in 1546 – 1547 is put down. Unlike central Mexico, the Maya had no single centre of power whose capture would make the rest surrender.' },
    { d: 'AD 1562', t: 'Maní and Landa’s auto-da-fé', x: 'The Franciscan friar **Diego de Landa** has dozens of Maya books (codices) and thousands of religious images and objects burned at Maní, and tortures those he accuses of idolatry. He later wrote the most valuable book on the Maya of his time. Of what was burned, only four codices survive.' },
    { d: 'AD 1697', t: 'Tayasal falls, the last independent kingdom', x: 'In March 1697 (sources give 10 or 13 March), the governor **Martín de Ursúa** attacks **Nojpetén** (Tayasal), the island capital of the Itza on Lake Petén Itzá, and takes it. It is the last independent Maya kingdom. It had resisted nearly two centuries of sieges and missionaries.' }
  ] },
  { img: 'may-tayasal-flores', leg: 'Flores island, Lake Petén Itzá, Nojpetén' },
  { linha: [
    { d: 'AD 1847 – 1901', t: 'The Caste War', x: 'A great revolt of the Yucatán Maya against landowners and the Mexican government begins in 1847. The rebels, the **cruzo’ob**, set up their own state around Chan Santa Cruz (today Felipe Carrillo Puerto), which holds out until 1901.' },
    { d: 'AD 1960 – 1996', t: 'The Guatemalan civil war', x: 'During 36 years of armed conflict, the Guatemalan army commits massacres, above all in Maya communities of the Highlands. The Truth Commission (1999) estimated about 200,000 dead and disappeared, **more than 80% of them Maya**. In 1992 the K’iche’ activist **Rigoberta Menchú** receives the Nobel Peace Prize.' }
  ] }
];

const mapa = [
  'The Maya never had a single capital. The “Maya civilization” is the sum of dozens of **city-states**, each with its own king, plaza and territory, sometimes at war and sometimes allied, joined by marriages, tribute and trade. Archaeologists identify several dozen kingdoms in the Classic period alone. LIDAR (airborne laser scanning) revealed in 2018 more than **60,000** structures in an area of 2,100 km² in the Petén, which forces upward revisions of population estimates (perhaps 7 to 11 million in the central Lowlands, a debated figure).',
  { img: 'may-tikal-reconstrucao', leg: 'Tikal’s Great Plaza, 8th century; conjectural reconstruction. AI-generated illustration.' },
  { tabela: { cab: ['City', 'Region / country today', 'Peak', 'Known for'], linhas: [
    ['Tikal', 'Petén, Guatemala', 'c. AD 250 – 850', 'Great Classic power; 70 m temples; rival of Calakmul'],
    ['Calakmul', 'Campeche, Mexico', 'c. AD 400 – 800', 'Capital of the Kaan (“Snake”) kingdom; 117 stelae'],
    ['Copán', 'Honduras', 'c. AD 426 – 822', 'Hieroglyphic Stairway; high-relief sculpture'],
    ['Palenque', 'Chiapas, Mexico', 'c. AD 600 – 800', 'Pakal and the Temple of the Inscriptions; light, elegant architecture'],
    ['Yaxchilán', 'Chiapas, Mexico', 'c. AD 680 – 770', 'Carved lintels, blood rituals; beside the Usumacinta River'],
    ['Caracol', 'Belize', 'c. AD 550 – 800', 'Defeats Tikal in 562; Caana, the tallest structure in Belize'],
    ['Dos Pilas', 'Petén, Guatemala', 'c. AD 630 – 761', 'Kingdom founded by a Tikal prince, ally of Calakmul'],
    ['Quiriguá', 'Guatemala', 'c. AD 730 – 810', '10 m stelae; defeats Copán in 738'],
    ['Chichén Itzá', 'Yucatán, Mexico', 'c. AD 900 – 1100', 'Castillo, Ball Court, Sacred Cenote'],
    ['Uxmal', 'Yucatán, Mexico', 'c. AD 700 – 1000', 'Puuc style: stone-mosaic façades; Pyramid of the Magician'],
    ['Mayapán', 'Yucatán, Mexico', 'c. AD 1220 – 1448', 'Capital of the north in the last centuries; walled city'],
    ['Tulum', 'Quintana Roo, Mexico', 'c. AD 1200 – 1500', 'Walled port on the Caribbean Sea']
  ] } },
  { h: 'Tikal' },
  'Tikal, in the Guatemalan Petén, was one of the largest and most powerful cities of the Classic. Its core has six very tall temple-pyramids linked by causeways, and thousands of buildings, in a national park and World Heritage Site since 1979. **Temple I** (c. 47 m) was built as the tomb of King Jasaw Chan K’awiil I, and **Temple IV** (about 70 m) is one of the tallest structures in the Americas before the Europeans arrived. The city’s ancient name was **Yax Mutal** or Mutul, and its emblem glyph is a “tied hair knot”. The city secured water through large reservoirs, and the **North Acropolis** housed the kings’ tombs.',
  { h: 'Calakmul' },
  'In southern Mexico, in the middle of the forest, stood **Calakmul**, the capital of the **Kaan** (“Snake”) kingdom. Through marriages and alliances (with Caracol, Dos Pilas, Naranjo, Yaxchilán…) it built a network that rivalled Tikal for a century and a half. It has more than 6,000 structures and **Structure II**, a pyramid about 45 m high. It lies in a biosphere reserve and is a World Heritage Site (mixed, cultural and natural).',
  { img: 'may-calakmul-estrutura-2', leg: 'Calakmul Structure II' },
  { h: 'Palenque' },
  'Palenque rises on the foothills of the Chiapas mountains above a plain of jungle. Its architecture is lighter and slimmer than Tikal’s: decorated roof “combs” and stucco façades. The **Palace** has an observation tower, and three temples stand together in the “Group of the Crosses”. The **Temple of the Inscriptions**, with the longest texts, held Pakal’s tomb. It was rediscovered by explorers in the eighteenth century and inscribed as a World Heritage Site in 1987.',
  { img: 'may-palenque-templo-inscricoes', leg: 'Temple of the Inscriptions, Palenque' },
  { h: 'Copán and Quiriguá' },
  'In Honduras, near the Guatemalan border, **Copán** stands out for its high-relief sculpture: the kings’ stelae look almost like figures in the round. The **Hieroglyphic Stairway** has about 62 steps and 2,200 glyphs that tell the history of the dynasty. Fifty kilometres away, **Quiriguá**, once a vassal of Copán, has the tallest Maya stela, about 10 m high (10.6 m including the buried part). The two kingdoms are linked by the war of 738.',
  { h: 'Caracol and the eastern Petén' },
  'In Belize, **Caracol** (perhaps the ancient Oxwitza’, “Three Hill Water”) possibly reached between 70,000 and 100,000 inhabitants. The **Caana** pyramid (“Sky Place”) is about 43 m high and is still the tallest construction in Belize. With Calakmul, the city was the victor over Tikal in AD 562.',
  { img: 'may-caracol-caana', leg: 'Caana, Caracol, Belize' },
  { h: 'Chichén Itzá' },
  'In the northern Yucatán, **Chichén Itzá** (“at the mouth of the well of the Itza”) is the most visited site of the Maya world and one of the New Seven Wonders of the World (2007). The **Castillo** (the pyramid of **Kukulkán**, the feathered serpent) has four stairways of 91 steps each, which with the top platform makes 365. At the equinox, the shadow of the steps forms a “serpent” descending the north balustrade; whether this was intentional is debated. There is also the **Great Ball Court** (168 m, the largest in Mesoamerica), the **Observatory** (El Caracol), the Temple of the Warriors and the **Sacred Cenote**, where offerings were thrown.',
  { img: 'may-chichen-itza-reconstrucao', leg: 'Chichén Itzá centre, 11th century; conjectural reconstruction. AI-generated illustration.' },
  { h: 'Uxmal and the Puuc' },
  'In the Puuc region of the north, cities such as **Uxmal** and **Kabah** have a style of their own: smooth walls below and façades of small fitted stone blocks, in mosaic, above, with masks of the rain god **Chaak**. The **Pyramid of the Magician** at Uxmal (c. 35 m) has rounded corners, and the **Nunnery Quadrangle** and the **Governor’s Palace** are masterpieces of Maya architecture. A raised causeway (*sacbé*) linked Uxmal to Kabah, about 18 km away.',
  { img: 'may-uxmal-adivinho', leg: 'Pyramid of the Magician, Uxmal' },
  { h: 'Mayapán and Tulum' },
  'After Chichén Itzá, **Mayapán** was a city of about 4 km², ringed by a wall, where perhaps 15,000 to 17,000 people lived. Its buildings imitate, in miniature, those of Chichén. **Tulum**, small, is a walled port on a cliff facing the Caribbean, with a main temple called **El Castillo** and mural paintings in a regional style. When the Spaniards saw it in 1518, it was still inhabited.',
  { img: 'may-tulum', leg: 'El Castillo, Tulum; frontal view, without the outer circuit of walls.' },
  { h: 'The routes' },
  'The Maya had no pack animals and no wheeled transport, so they carried everything on their backs or by canoe. On the **rivers** (the Usumacinta, the Pasión) and along the coast, they paddled dugout canoes, which in the Postclassic rounded the whole Yucatán Peninsula as far as Honduras. On land, **sacbeob** (“white roads”, causeways of plastered stone) linked plazas and cities, such as the one from Cobá to Yaxuná, about 100 km long. Along the routes travelled **salt, cacao, jade, obsidian, quetzal feathers, cotton, pottery and honey**, and with them ideas and gods.'
];

const sociedade = [
  { h: '1. Political organization' },
  'There was no Maya empire, but a network of **independent kingdoms**, each headed by a **k’uhul ajaw** (“divine lord”). The king was war leader, chief priest and intermediary between humans and gods. He had to perform the rituals that kept the cosmos in order, and he was the image of the **Maize God** and of the ancestors. Power usually passed from father to son, but there are also queens who ruled or governed as regents (Lady Yohl Ik’nal at Palenque, c. 583 – 604; Lady Six Sky at Naranjo, c. 682).',
  'The kingdoms formed two great alliances, which fought each other largely by proxy: that of **Tikal** and that of **Calakmul**. Small kingdoms were **vassals** of the large ones, paid tribute and gave princesses in marriage. The texts speak of “lords” and “vassals” and of titles such as **ajaw** (“lord”), **sajal** (provincial governor, military noble) and **aj k’uhun** (administrator, “keeper of the sacred books”).',
  { h: '2. Social classes' },
  'Society was highly hierarchical: at the top the **royal family** and the high nobility (*almehenoob*); then lesser nobles, **scribes**, priests, merchants and specialized craftsmen; below them the **farmers**, who were the majority; and lastly servants and **slaves**, many of them prisoners of war or people in debt. Scribes and artists often belonged to noble families, and some signed their works.',
  { img: 'may-escriba-cena', leg: 'Late Classic Maya scribe painting a codex; conjectural reconstruction. AI-generated illustration.' },
  { h: '3. Religion' },
  'For the Maya the universe had **three levels**: the sky (with thirteen layers and gods), the earth and **Xibalbá**, the underworld (with nine levels). At the centre of the earth stood a sacred **ceiba**, the world tree, joining the three planes. Caves, cenotes and pyramids were doors to the other world. Time was cyclical: the gods had created, destroyed and re-created the world several times, and humans had the duty to feed the gods with ritual and offerings. The main gods were:',
  { tabela: { cab: ['God', 'Domain', 'Note'], linhas: [
    ['Itzamnaaj', 'Creator, sky, writing and learning', 'Old man with an aquiline nose; patron of scribes'],
    ['K’inich Ajaw', 'Sun god', 'Large eyes and filed teeth'],
    ['Ix Chel', 'Moon, medicine, childbirth', 'Postclassic name; shrine on Cozumel'],
    ['Chaak', 'Rain, thunder', 'Long-nosed masks on Puuc façades'],
    ['Maize God (Hun Hunahpu)', 'Maize, rebirth', 'Youth with an elongated head; symbol of life and of the king'],
    ['K’awiil', 'Lightning, royal lineage', 'One leg shaped like a serpent; sceptre of kings'],
    ['Kukulkán / K’uk’ulkan', 'Feathered serpent', 'Postclassic cult; Gucumatz among the K’iche’'],
    ['Gods of Xibalbá', 'Death, disease', 'The “Lords of Death”; defeated in the Popol Vuh']
  ] } },
  { h: 'The Popol Vuh' },
  'The **Popol Vuh** is the great sacred book of the **K’iche’**, written in the Latin alphabet in the mid-sixteenth century, possibly from an older hieroglyphic book. The only early copy was made by the Dominican friar **Francisco Ximénez** at Chichicastenango in the early eighteenth century, and is now in the Newberry Library in Chicago. It tells the creation of the world: the gods tried to make people of clay and of wood, and only on the third attempt, with **maize**, did they make beings who would praise them. The most famous part is the adventures of the **Hero Twins, Hunahpú and Xbalanqué**, who descend to Xibalbá, defeat the Lords of Death in a series of trials and at the end rise to the sky as the Sun and the Moon.',
  { img: 'may-popol-vuh', leg: 'First page of the Popol Vuh manuscript, Francisco Ximénez copy, Newberry Library, Chicago.' },
  { h: '4. Sacrifice and self-sacrifice' },
  'The central ritual of Maya religion was the **offering of blood**. The gods had given their blood to create humans, and humans gave it back. Kings and queens **pierced their tongues, ears or bodies** with stingray spines and obsidian blades, letting the blood drip onto bark paper, which was then burned. Often, during these rituals, they entered a trance and saw what they called the “vision serpent”, from which ancestors and gods emerged. **Lintel 24 at Yaxchilán** shows Lady K’abal Xook pulling a thorn-studded cord through her tongue, in front of her husband, King Itzamnaaj Bahlam II.',
  { img: 'may-yaxchilan-lintel-24', leg: 'Yaxchilán Lintel 24, British Museum' },
  '**Human sacrifice** also existed, generally of **prisoners of war**, above all captured kings and nobles, who could be beheaded in rituals or used in the ball game. In the Postclassic, at Chichén Itzá, there is evidence of human offerings in the **Sacred Cenote**, and analyses of the bones show they were not only young women, as the legend says, but also men, children and adults. Sacrifice was not a daily activity, and its weight was probably smaller than among the Aztecs. For the Maya it was a **sacred exchange**, not gratuitous cruelty, but that does not erase the victims’ suffering.',
  { img: 'may-autossacrificio-cena', leg: 'Royal bloodletting rite inspired by Yaxchilán reliefs; conjectural, non-graphic reconstruction. AI-generated illustration.' },
  { h: '5. The ball game' },
  'The **ball game** (in Yucatec, *pitz*) was played throughout Mesoamerica, and the Maya had played it for at least three thousand years. It was played on an I-shaped court with sloping walls, between two teams, with a **solid rubber ball** that could be struck with the hips, knees and forearms (not the hands). Players wore leather protection and a heavy belt around the waist. It was at once **sport, spectacle and ritual**: it symbolized the struggle between light and darkness, and the Popol Vuh links it to the Hero Twins. On certain occasions, in games between cities, captives were sacrificed at the end. In the reliefs at Chichén Itzá, a player is beheaded, but whether he is the winner or the loser is a matter of debate.',
  { img: 'may-jogo-bola-chichen', leg: 'Great Ball Court, Chichén Itzá' },
  { img: 'may-jogo-bola-cena', leg: 'Classic-period Maya ball game; conjectural reconstruction. AI-generated illustration.' },
  { h: '6. Economy and trade' },
  'The economy rested on **agriculture**, but trade was intense. **Prestige** goods (jade, quetzal feathers, shells, obsidian, painted pottery) and **everyday** goods (salt, cotton, honey, wax, dried fish, maize) circulated. In many regions **cacao beans** served as currency. Great markets were held on fixed days in the plazas, and there were professional merchants. At Tikal a probable market has been identified beside the East Plaza, and chemical analyses of soils suggest another at Chunchucmil, a city in the north-west Yucatán tied to trade with the coast.',
  { img: 'may-mercado-cena', leg: 'Late Classic Maya market; conjectural reconstruction. AI-generated illustration.' },
  { h: 'Cacao' },
  '**Cacao** was the drink of gods and kings. The Maya roasted and ground the seeds, mixed them with water and often with maize, chilli and vanilla, and poured the liquid from a height to make foam. It was a **bitter, spicy** drink, not a sweet one. On painted Classic vessels there are inscriptions that read “for cacao”. The earliest traces of cacao in Maya vessels date to c. 600 BC, at Colha, Belize. They drank it at feasts, weddings and rituals, and cacao was placed in tombs with the dead.',
  { img: 'may-cacau-preparacao', leg: 'Preparation of a cacao drink in a Maya noble house; conjectural reconstruction. AI-generated illustration.' },
  { h: '7. Writing and its decipherment' },
  'Maya writing is **logosyllabic**: it combines signs that stand for whole words (logograms) with signs that stand for syllables. It has about **800 signs**, grouped in “blocks” (each a word or phrase) read in double columns, left to right and top to bottom. The earliest examples are from c. 300 – 200 BC, and the script was used for over two thousand years, on stone, stucco, pottery, bone, shell and in **fig-bark books** (codices) made by scribes. Its purpose was to record the calendar, astronomy, the history of kings, ritual and sacred knowledge.',
  { img: 'may-codice-dresden', leg: 'Page 49 of the Dresden Codex; public-domain historic reproduction.' },
  'Only **four codices** survived the conquest, after the burnings by Landa and others: those of **Dresden**, **Madrid**, **Paris** and **Grolier** (whose authenticity was debated but is now accepted by most). The Dresden Codex has 78 pages and the famous **Venus Table**.',
  { h: 'How it was deciphered' },
  'For centuries nobody could read Maya writing. Around 1566, **Diego de Landa** asked a Maya informant to write out the “alphabet”, and he wrote the sounds of the Spanish letters with glyphs matching the sound of each letter’s name, which seemed to confirm the script was an alphabet, but it was a misunderstanding that delayed everything. In the nineteenth century the German **Ernst Förstemann** deciphered the numbers and calendar of the Dresden Codex. In 1952 the Soviet scholar **Yuri Knorozov** proposed that the signs were syllables, using Landa’s “alphabet” as a key. He was heavily criticized by **Eric Thompson**, the leading Mayanist of the day, who thought the script was not phonetic. In 1960 the American **Tatiana Proskouriakoff** showed that the inscriptions of Piedras Negras told the **history of real kings**, with dates of birth, accession and death. From the 1970s and 1980s, **Linda Schele**, **David Stuart**, **Floyd Lounsbury** and others joined the two discoveries, and today most texts can be read.',
  { h: '8. The calendars' },
  'The Maya used several cycles of time at once:',
  { lista: [
    '**Tzolk’in** (260 days): the result of combining 20 day names with 13 numbers. It was the sacred calendar, used for rituals, personal names and divination. **It is still used today** by some Maya peoples of Guatemala.',
    '**Haab’** (365 days): 18 months of 20 days, plus 5 dangerous final days (*Wayeb’*). It followed the solar year and the farming seasons.',
    '**Calendar Round** (52 years): the two calendars only coincide again after 18,980 days, about 52 years, and the full date acted as the “name” of a day.',
    '**Long Count:** counts days continuously from a mythical origin that corresponds to **11 August 3114 BC** (in the most accepted correlation). It uses units of 1 day, 20 days, 360 days, 7,200 days (*k’atun*, about 20 years) and 144,000 days (*b’ak’tun*, about 394 years). It allowed a single date to be given to an event.'
  ] },
  { img: 'may-calendario', leg: 'Modern educational Calendar Round model, with Tzolk’in and Haab’ glyphs on paper discs.' },
  { caixa: '2012: a modern myth', texto: 'On 21 December 2012 a cycle of 13 *b’ak’tun* ended (the date **13.0.0.0.0**), and at the time the idea spread that the Maya had predicted the “end of the world”. This is **false**. For the Maya, the date was the turn of a cycle, like a car’s odometer passing 99,999 km, and time carried on afterwards. Only one ancient text (Tortuguero Monument 6) mentions this date, and it does not speak of catastrophe. Other inscriptions speak of dates millions of years in the future. The Maya of today celebrated 2012 as the start of a new era.' },
  { h: '9. Mathematics and astronomy' },
  'Maya mathematics uses **base 20** (vigesimal) and a positional system, written in columns, with only three symbols: a **dot** (1), a **bar** (5) and a **shell** (**zero**). The Maya zero, used as a place value, appears around the start of the Classic (and perhaps earlier), and is one of the few cases in history of independent invention of a symbol for zero (the others are the more limited one of Mesopotamia and that of India).',
  { img: 'may-numerais', leg: 'Maya numerals, dots, bars and shell, 0–19' },
  '**Astronomy** was done by the naked eye, from temples and from “E-Groups” (architectural complexes tied to the Sun’s movement). Priests recorded the Sun, Moon, planets and eclipses. The **Venus Table** of the Dresden Codex calculates the Venus cycle as **584 days** (the true value is 583.92), with adjustments to correct the error over the centuries. At Copán, scribes calculated the lunar month at about 29.53 days, the correct value. The planet Venus was important: wars were often planned for days when the planet appeared.',
  { h: '10. Agriculture and food' },
  'The basis of life was **maize**, which the Maya felt they were made of. They grew it in the **milpa**, a plot where **maize, beans and squash** (the “three sisters”) were planted together: beans fix nitrogen, squash covers the soil and maize serves as a support. The milpa was made by **slash-and-burn**, with fallow periods, and where necessary with **terraces, raised fields and reservoirs**. They also grew **chilli**, tomato, manioc, avocado, **ramón** (the breadnut tree, abundant in the Petén), cacao, vanilla and stingless-bee honey. They raised turkeys, dogs and bees, and hunted deer, peccary and fish.',
  { img: 'may-milpa-cena', leg: 'Family work in a milpa of maize, beans and squash; conjectural reconstruction. AI-generated illustration.' },
  'Maize was ground on a **grinding stone** (metate) and made into dough for **tortillas**, **tamales** (dough steamed in maize or banana leaves) and **atole** (a thick hot drink). Daily food was very simple; elite feasts included meat, cacao and fermented drinks such as *balché*, made from honey and tree bark.',
  { h: '11. Home and everyday life' },
  'The common house was a **hut** of interwoven poles, plastered with mud, oval or rectangular, with a **thatched roof**, and similar houses still exist in the Yucatán. Families grouped around a patio, with the kitchen, garden and a small altar to the ancestors. The dead were often buried **under the house floor**. Elite houses were of stone, with vaults and stone benches. Children helped from an early age, and girls learned to weave and cook. The royal family lived in **palaces**, with dozens of rooms around courtyards.',
  { img: 'may-casa-maia', leg: 'Maya family household; conjectural reconstruction. AI-generated illustration.' },
  { h: '12. Clothing and appearance' },
  'Clothing was of **cotton**, woven on a backstrap loom and decorated with embroidery. Men wore a loincloth (the *ex*) and a cape, and women a long skirt and a blouse, the ancestor of the **huipil** Maya women still wear. Elites dressed in **jaguar skins**, quetzal feathers, necklaces and **jade** ear ornaments, and huge headdresses with the attributes of the gods. The Maya **deformed the skulls** of infants with boards, filed and inlaid teeth with jade, tattooed and painted the body. A sloping nose and an elongated forehead, like the Maize God’s, were considered beautiful.',
  { h: '13. Music, dance and art' },
  'The Maya played **drums**, **rattles**, **flutes**, **ocarinas**, **wooden trumpets** and **turtle shells**. The murals of **Bonampak** show an orchestra, with musicians in masks, and there are ceramics that reproduce dances. They also had **theatre** (the *Rabinal Achí*, a K’iche’ dance-drama, is still performed and was proclaimed a UNESCO Masterpiece of the Oral and Intangible Heritage of Humanity in 2005), poetry and song. Art included stone reliefs, stucco, **polychrome pottery** (the “codex-style” vases painted by artist-scribes), jade and murals.',
  { img: 'may-bonampak', leg: 'Replica of Room 1 of the Bonampak murals, musicians and nobles, National Museum of Anthropology, Mexico City.' },
  { h: '14. Technology' },
  'The Maya had no **draft animals**, no **wheel** for transport (they knew it in ceramic toys), and no **metals** until the Postclassic (c. AD 900), when copper and gold arrived from Central America. They used stone, **flint**, **obsidian** (very sharp blades), bone and wood. They made **lime** by burning limestone, for mortar and stucco, and built **corbel vaults** (by bringing blocks closer together). They were water engineers: reservoirs at Tikal, cisterns (*chultunes*) in the north and a canal system at Palenque. They built **sacbeob** and made fig-bark paper (*amate*), coated with lime for writing.',
  { h: '15. Warfare' },
  'War was constant and part of the political system. Campaigns often aimed to capture **kings and nobles** (to sacrifice or humiliate them) and to obtain tribute, more than to conquer territory. There were also wars of destruction, such as the one that ended Dos Pilas. Warriors used **spears**, spear-throwers (*atlatl*), **clubs**, shields, quilted cotton armour and helmets. Some cities built **walls** and ditches. In the last years of the Classic, war increased greatly, and it is one of the causes proposed for the collapse.'
];

const personalidades = [
  'Maya texts let us know the names and deeds of dozens of kings and some queens, which is rare in ancient history. The figures below are real, and uncertain details are flagged. The names are current readings, which may change as decipherment advances.',
  { h: 'K’inich Janaab Pakal I, king of Palenque (AD 603 – 683)' },
  'He took the throne at age 12, in 615, through the influence of his mother, **Lady Sak K’uk’**, and reigned 68 years. He was the great builder of Palenque (the Palace, the Temple of the Inscriptions) and had long texts written about his dynasty and divine ancestry. His tomb was discovered in 1952 by the Mexican archaeologist **Alberto Ruz Lhuillier**, who in 1948 noticed a slab with holes in the floor of the temple and lifted it, revealing a stairway full of rubble that took four years to clear. In the crypt lay an enormous **stone sarcophagus** with the king’s **jade** mask. Its lid has a famous relief which “ancient astronaut” theories interpret as a rocket, an idea with no basis: it shows the king falling into the mouth of the underworld and being reborn as the Maize God, beside the world tree.',
  { img: 'may-pakal-mascara', leg: 'Pakal’s jade funerary mask, National Museum of Anthropology, Mexico City' },
  { h: 'Itzamnaaj Bahlam II and Lady K’abal Xook, Yaxchilán (8th century AD)' },
  'King **Itzamnaaj Bahlam II** (also known as “Shield Jaguar”, numbered II or III depending on the author; c. 681 – 742) governed Yaxchilán for over sixty years, and lived into his nineties. His wife, **Lady K’abal Xook**, appears with him on the famous lintels 24, 25 and 26, which show a self-sacrifice ritual and a “vision serpent”. Their son, **Yaxun Bahlam IV** (“Bird Jaguar IV”), was the great king who succeeded him after an interregnum.',
  { h: 'Siyaj K’ak’, “Fire Born” (4th century AD)' },
  'A military leader (or emissary) who, according to the inscriptions, reached **El Perú-Waka’** in 378 and **Tikal** a few days later, and changed the dynasty. He appears on monuments in several cities, which suggests regional action. He is called a “lord” linked to Teotihuacan, but his exact origin and role are debated.',
  { h: 'K’inich Yax K’uk’ Mo’, founder of Copán (5th century AD)' },
  'He was the first king of Copán, in 426, and his name means “Great Sun First Quetzal Macaw”. He was buried in a chamber beneath the **Rosalila Temple**, which archaeologists found intact beneath later temples, with the original stucco colours. His tomb and those of his successors have been the subject of isotope studies.',
  { h: 'Waxaklajuun Ub’aah K’awiil, “18 Rabbit” (AD 695 – 738)' },
  'The king of Copán who most stood out in monumental sculpture: he commissioned the boldest stelae, in very high relief. In 738 he was captured and beheaded by the king of Quiriguá, whose overlord he had been. The defeat was a great crisis for Copán, which nevertheless went on under further kings until c. 822.',
  { h: 'Jasaw Chan K’awiil I, king of Tikal (AD 682 – c. 734)' },
  'He took the throne when Tikal lay in Calakmul’s shadow. In 695 he defeated the king of Calakmul and revived the city. His successors continued the building, and he was buried in **Temple I**, of which the Great Plaza is still proud. His tomb (no. 116) held jade, carved bones and painted vessels.',
  { h: 'Yuknoom Ch’een II, “the Great” (c. AD 636 – 686)' },
  'King of Calakmul who took the Kaan kingdom to its height. He acted as a strategist: he made alliances, married off princesses and backed rebellions against Tikal. Calakmul came to have dozens of stelae recording his victories.',
  { h: 'Lady Six Sky (Naranjo, 7th century AD)' },
  'A princess of Dos Pilas, **Wak Chanil Ajaw**, sent in 682 to rebuild the dynasty of Naranjo, which was in crisis. She governed for several years as regent for her son, **K’ahk’ Tiliw Chan Chaak**, and is one of the clearest examples of the political power of Maya women.',
  { h: 'Ajaw Kan Ek’, the last Itza king (c. 1697)' },
  'The leader of the **Itza** at Nojpetén (Tayasal), on Lake Petén Itzá. In 1525 an Itza king with this title received Hernán Cortés. In 1697, when the last king, also called Kan Ek’ (the Spaniards’ “Canek”), was defeated by Martín de Ursúa, the last independent Maya kingdom fell. Some calendar prophecies (those of a *k’atun* in which the Itza would be subdued) seem to have influenced the decision to surrender.',
  { h: 'Diego de Landa (1524 – 1579)' },
  'A Franciscan friar who reached the Yucatán in 1549. He had Maya books and idols burned at Maní in 1562 and interrogated under torture those he accused of idolatry. He was called to Spain to be tried, and wrote there the *Relación de las cosas de Yucatán* (c. 1566), an invaluable source on Maya life and calendar, which contains the “alphabet” that, though misunderstood, later helped Knorozov. He was afterwards bishop of the Yucatán. He is a contradictory figure: destroyer and preserver.',
  { img: 'may-landa-relacion', leg: 'Page from Landa’s Relación with the Maya “alphabet”' },
  { h: 'Yuri Knorozov (1922 – 1999)' },
  'A Soviet linguist and ethnographer, born in Kharkiv and trained and working in Leningrad. In 1952 he published the article showing that Maya writing was partly syllabic, and in 1963 the book *The Writing of the Maya Indians*. For decades he was attacked by Thompson and by Western Mayanists, and he only visited Guatemala in 1990, where he was honoured. He showed that the script **was phonetic**.',
  { img: 'may-knorozov', leg: 'Illustrated portrait of Yuri Knorozov on a 2022 Russian postage stamp; not a photograph.' },
  { h: 'Tatiana Proskouriakoff (1909 – 1985)' },
  'A Russian-American architect and illustrator (born in Tomsk, Siberia), she worked at the Carnegie Institution. In 1960 she showed that the stelae of Piedras Negras, rather than speaking of gods, recorded events in the lives of **real kings**, which changed the view of Maya history from a peaceful, priest-led society to one of kings and wars.',
  { img: 'may-proskouriakoff', leg: 'Portrait of Tatiana Proskouriakoff; source Char Solomon.' },
  { h: 'Linda Schele (1942 – 1998)' },
  'An American epigrapher and art historian at the University of Texas. It was she who popularized the decipherment: with her **glyph workshops** in Austin she taught thousands of people, including Maya who could read the texts of their ancestors. She wrote with David Freidel *A Forest of Kings* (1990), on the kings, and with Mary Miller *The Blood of Kings* (1986), on the blood rituals.'
];

const legado = [
  { h: 'What they left us' },
  { lista: [
    '**A deciphered script:** it is the only writing of ancient America read in large part, and it lets us hear the voices of kings and scribes.',
    '**Zero and the calendar:** the concept of zero and the Long Count show a sophisticated and independent mathematics.',
    '**Foods:** **maize**, **cacao**, vanilla, avocado, chilli and tomato reached Europe from Mesoamerica and changed the world’s cooking.',
    '**Living languages:** about **30 Mayan languages**, spoken by more than six million people, with literature, radio, bilingual schools and a vitality that official history tried to silence.',
    '**Traditions:** weaving, milpa festivals and rituals, the Tzolk’in of the “day keepers” (*ajq’ijab’*), shrines on mountains and in caves, and works such as the *Popol Vuh* and the *Rabinal Achí*.',
    '**The Books of Chilam Balam:** books that the Yucatán Maya wrote in Maya, but in Latin letters, in the colonial period, with prophecies, calendar and history.'
  ] },
  { h: 'Art' },
  'Maya art is distinguished by its **stone sculpture** (stelae and altars with royal portraits), modelled **stucco**, **polychrome vessels** (with scenes of Xibalbá, the court and the gods), **jade**, and the **murals** of San Bartolo, Bonampak and Calakmul. People are depicted with detail and individuality, and some artists signed their works, with “the sculptor” and their name, which is rare in antiquity.',
  { h: 'Architecture' },
  'The Maya pyramid is a **temple on a sacred mountain**, often also a royal tomb. The Maya did not know the true arch, but built **corbel vaults** and very tall **roof combs**. Buildings were whitewashed or painted red, blue and other colours, with modelled stucco. Today we see bare stone, but the cities were **polychrome**. The **Rosalila Temple** at Copán is a good example: it was found preserved beneath another temple, with its original red stucco.',
  { img: 'may-copan-rosalila', leg: 'Coloured replica of the Rosalila Temple, Maya Sculpture Museum, Copán' },
  { h: 'The rediscovery' },
  'Maya cities were never entirely forgotten by local peoples, but the outside world only rediscovered them in the nineteenth century. The American **John Lloyd Stephens** and the Englishman **Frederick Catherwood** explored Copán, Palenque, Uxmal and other sites and published *Incidents of Travel in Central America, Chiapas and Yucatan* (1841), with the Catherwood drawings that made the ruins famous. Then **Alfred Maudslay** photographed and cast the monuments (1880s–1900s); the Carnegie Institution excavated Chichén Itzá and Uaxactún in the early twentieth century; **Sylvanus Morley** and **Eric Thompson** studied the calendars. The **Bonampak** murals became known in 1946.',
  'In the twenty-first century, **LIDAR** changed everything. In 2018 the PACUNAM consortium revealed, in the Petén, more than 60,000 structures hidden by the forest, with causeways, farm fields and fortifications. In 2020 **Aguada Fénix** was revealed, and in 2024 a previously unknown city, **Valeriana**, in Campeche. Each new survey forces a rethink of what was believed about Maya population and organization.',
  { img: 'may-lidar-peten', leg: 'Relief of Maya ruins in the Uaxactun region, Petén, derived from 2016 PACUNAM LiDAR data: slope and positive openness. Bundzel et al., 2020, figure 1.' },
  { h: 'Maya vitality today' },
  'After the conquest, the Maya suffered centuries of forced labour, loss of land and discrimination, and, in Guatemala, a **genocide** between 1981 and 1983, according to the Truth Commission. Since the **1996 Peace Accords**, the Maya movement has found a voice: the languages are taught in schools, there are Maya language academies, and Maya writers, filmmakers, musicians and politicians. **Rigoberta Menchú** (Nobel Peace Prize 1992) is the best known. When you visit a pyramid, remember that the descendants of those who built it live next door, and that many of them still hold ceremonies at the sites.',
  { img: 'may-cenote-sagrado', leg: 'Sacred Cenote, Chichén Itzá' },
  { caixa: 'To visit', texto: 'The most important sites are **Tikal** (Guatemala), **Copán** (Honduras), **Palenque**, **Chichén Itzá**, **Uxmal** and **Calakmul** (Mexico), all World Heritage Sites. Almost all are pleasanter early in the morning, before the heat and the tour groups. At **Chichén Itzá** climbing the Castillo is no longer allowed. To see original pieces, go to the **National Museum of Anthropology** (Mexico City; Pakal’s mask and the replica of his tomb), the **Museo Popol Vuh** (Guatemala City), the **Museum of Maya Sculpture** (Copán) and, in Europe, the **British Museum** (Yaxchilán lintels) and the **SLUB library** in Dresden (the Codex, displayed from time to time). Check opening times and conditions before you go.' }
];

const quiz = [
  { p: 'Where did the ancient Maya live?', op: ['In the Andes, in Peru', 'In southern Mexico, Guatemala, Belize and parts of Honduras and El Salvador', 'In the Mississippi valley', 'In the Caribbean, only on islands'], certa: 1, exp: 'The Maya area stretches from the Yucatán Lowlands to the Guatemalan Highlands.' },
  { p: 'How were the Classic-period Maya organized politically?', op: ['In a single empire with its capital at Tikal', 'In dozens of city-states with their own kings', 'In tribes without leaders', 'In a kingdom ruled from Chichén Itzá'], certa: 1, exp: 'There were dozens of independent kingdoms, with alliances and rivalries, and never a single empire.' },
  { p: 'Who arrived at Tikal in AD 378, according to the inscriptions?', op: ['Pakal', 'Siyaj K’ak’', 'Diego de Landa', 'Kukulkán'], certa: 1, exp: 'Siyaj K’ak’ reached Tikal in January 378, and the local king died around those days. The link with Teotihuacan is debated.' },
  { p: 'How long did Pakal, king of Palenque, reign?', op: ['About 8 years', 'About 20 years', 'About 68 years', 'About 120 years'], certa: 2, exp: 'He reigned from 615 to 683, from the age of 12.' },
  { p: 'What can be said of the “ancient astronaut” theories about Pakal’s sarcophagus?', op: ['They are confirmed by archaeologists', 'They have no basis: the lid shows the king, the Maize God and the world tree', 'They prove Pakal was an extraterrestrial', 'They were made up by the Maya'], certa: 1, exp: 'The image is a Maya religious scene, of the king being reborn as the Maize God beside the world tree.' },
  { p: 'What kind of writing did the Maya use?', op: ['An alphabet of 26 letters', 'Logosyllabic: signs for words and syllables', 'Only pictures with no reading', 'Cuneiform'], certa: 1, exp: 'It combined logograms and syllabic signs, with about 800 signs.' },
  { p: 'Who, in 1952, proposed that Maya writing was syllabic, opening the way to decipherment?', op: ['Yuri Knorozov', 'Eric Thompson', 'Sylvanus Morley', 'Diego de Landa'], certa: 0, exp: 'The Soviet linguist Yuri Knorozov. Thompson opposed the idea.' },
  { p: 'What did Tatiana Proskouriakoff show in 1960?', op: ['That the Maya could not write', 'That the inscriptions told the history of real kings, with dates', 'That the Maya invented zero', 'That the Dresden Codex was a fake'], certa: 1, exp: 'At Piedras Negras, the inscriptions record births, accessions and deaths of rulers.' },
  { p: 'How many days does the sacred Tzolk’in calendar have?', op: ['20', '260', '365', '584'], certa: 1, exp: 'The Tzolk’in combines 20 day names with 13 numbers: 260 days. The Haab’ has 365.' },
  { p: 'What happened on 21 December 2012, according to the Maya calendar?', op: ['The end of the world', 'The end of a cycle of 13 b’ak’tun, and the start of another', 'A total eclipse', 'The fall of Chichén Itzá'], certa: 1, exp: 'It was the date 13.0.0.0.0 of the Long Count. No Maya text predicts an end of the world.' },
  { p: 'What was the symbol for zero in Maya numerals?', op: ['A dot', 'A bar', 'A shell', 'An empty circle'], certa: 2, exp: 'Zero was written with a shell. A dot is 1 and a bar is 5.' },
  { p: 'What is the milpa?', op: ['A field where maize, beans and squash are grown together', 'A Maya god', 'A type of pyramid', 'A cacao drink'], certa: 0, exp: 'The milpa is the traditional farming plot, still used today.' },
  { p: 'Which was the last independent Maya kingdom to fall to the Spaniards?', op: ['Chichén Itzá, in 1250', 'Tulum, in 1518', 'Tayasal (Nojpetén), of the Itza, in 1697', 'Uxmal, in 1542'], certa: 2, exp: 'Martín de Ursúa took Nojpetén in March 1697.' },
  { p: 'Which Maya book, written in K’iche’, tells of the creation of the world and the adventures of the Hero Twins?', op: ['The Dresden Codex', 'The Popol Vuh', 'Landa’s Relación', 'The Chilam Balam'], certa: 1, exp: 'The Popol Vuh, whose earliest copy is by Francisco Ximénez, is in the Newberry Library.' },
  { p: 'Did the Maya disappear?', op: ['Yes, they all died in the 9th century', 'Yes, they were exterminated by the Spaniards', 'No: about six million speak Mayan languages today', 'No, but they only exist in Mexico'], certa: 2, exp: 'The Classic collapse was of the southern cities and their kings. Maya peoples are still alive, above all in Guatemala and Mexico.' }
];

export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };
