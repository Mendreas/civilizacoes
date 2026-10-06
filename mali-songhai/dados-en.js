// MALI AND SONGHAI — full English content. Same structure and same image slots as the Portuguese version (dados.js).
// Dates are approximate; many, especially before the 14th century, come from oral tradition (griots) and are modern conventions. BC = before Christ, AD = anno Domini.

const visao = [
  { caixa: 'In brief', texto: [
    '**Mali** and **Songhai** were the two great West African empires that followed Ghana, between the 13th and the end of the 16th century. They occupied the **Sahel**, the savanna belt south of the Sahara, and the course of the **Niger** river, and lived on a trade that linked the **gold** of the southern forests to the **salt** of the desert and to the cities of North Africa and Egypt.',
    'Mali was born around **1235**, when the prince **Sundiata Keita** defeated the Sosso king Sumanguru at the battle of **Kirina**, and reached its height with **Mansa Musa**, whose pilgrimage to Mecca in **1324–25** made Mali’s gold famous from Cairo to Lisbon. Songhai, with its capital at **Gao**, grew at Mali’s expense in the 15th century under **Sonni Ali** and peaked under **Askia Mohammed** (r. 1493–1528). In **1591**, at **Tondibi**, a Moroccan army with firearms destroyed Songhai power. **Timbuktu** and **Djenné** were, through both empires, centres of trade, religion and learning.'
  ] },
  { img: 'mal-mapa-mali', leg: 'Map of the Mali Empire in 1337, with cities, rivers and trans-Saharan routes; approximate boundaries.' },
  { h: 'Where it was' },
  'The heart of Mali lay on the **upper Niger**, in the Manding region, today the border between **Mali** and **Guinea**, and it stretched west to Senegal and the Gambia and east to the bend of the Niger. Songhai was centred on the **bend of the Niger** (around **Gao**, **Timbuktu** and **Djenné**) and came to control an enormous strip of the Sahel, from the Atlantic to what is now Niger and northern Nigeria. These empires were not countries with fixed borders but **networks of cities, routes and tributary peoples** that shifted with the strength of the king.',
  { img: 'mal-niger-rio', leg: 'Cattle crossing the Niger River near Ségou, Mali.' },
  'Part of that world is now desert or semi-desert. In the 14th century, however, the Sahel was probably wetter than today, with **savanna**, pasture and fields of millet and rice; the river, in flood season, formed a fertile **inland delta**, one of the great farming zones of Africa.',
  { img: 'mal-sahara-dunas', leg: 'Dunes in Mali’s desert; ground-level photograph, original width 800 px.' },
  { h: 'When they existed' },
  'The earliest dates come from the **oral tradition** of the griots, written down only many centuries later, so they are approximate. From the 14th century there are written accounts by Arab travellers and, later, the chronicles of Timbuktu.',
  { tabela: { cab: ['Phase', 'Approximate dates', 'What marks it'], linhas: [
    ['Before Mali', 'to c. 1235', 'Ghana in decline; Manding chiefdoms; domination by Sumanguru Kanté’s Sosso'],
    ['Sundiata’s Mali', 'c. 1235 – c. 1255', 'Kirina; founding of the empire; Kurukan Fuga Charter (oral tradition)'],
    ['Expanding Mali', 'c. 1255 – 1312', 'Sundiata’s successors; control of gold; Sakura expands the empire eastward'],
    ['Height of Mali', 'c. 1312 – 1360', 'Mansa Musa and the 1324–25 pilgrimage; Timbuktu and Gao; Sulayman and Ibn Battuta’s visit'],
    ['Decline of Mali', 'c. 1360 – c. 1500', 'Dynastic disputes; loss of Timbuktu (1433) and Gao; Mali shrinks to the west'],
    ['Sonni Ali’s Songhai', 'c. 1464 – 1492', 'River warrior; conquers Timbuktu (1468) and Djenné (1473)'],
    ['Height of Songhai', '1493 – c. 1591', 'Askia dynasty: Askia Mohammed, reforms, learning in Timbuktu; Askia Daoud'],
    ['Fall', '1591 and after', 'Battle of Tondibi; Moroccan occupation; fragmentation into small states']
  ] } },
  { img: 'mal-mapa-songhai', leg: 'Map of the Songhai Empire, cartographic synthesis based on Michael A. Gomez (2018); approximate boundaries.' },
  { h: 'Who were they?' },
  'Mali was built by **Mande**-speaking peoples (Mandinka or Malinke, Soninke and others), led by the **Keita** dynasty. Songhai was built by a **Songhai**-speaking people (of a still-debated origin), made up of fishermen and boatmen of the Niger (the **Sorko**), farmers and horsemen, joined by many others. Both were **Muslim** in much of their elite, but in village life traditional beliefs and rituals remained strong. The blending of the two heritages was one of the features of these states.',
  { h: 'Why they matter' },
  { lista: [
    '**Gold and trade:** the gold of Mali and Songhai fed the coinage of half the Mediterranean; it was one of the reasons the Portuguese sought, in the 15th century, a sea route to African gold.',
    '**Learning:** Timbuktu was one of the great centres of study of the Islamic world, with libraries and **hundreds of thousands of manuscripts** still preserved today.',
    '**Political organisation:** empires with provincial administration, tribute, army and justice, and a tradition, the **Kurukan Fuga Charter**, which UNESCO recognised as intangible heritage.',
    '**Adobe architecture:** the Great Mosque of Djenné is considered the largest earthen building in the world.',
    '**Voice and memory:** the **griots** kept history, music and genealogy, and still do.'
  ] },
  { img: 'mal-djenne-mesquita', leg: 'Great Mosque of Djenné; present building reconstructed in 1906–1907.' },
  { caixa: 'Mali and Songhai today', texto: 'Timbuktu and Djenné are on the UNESCO World Heritage List (1988), as is the Tomb of Askia in Gao (2004). In recent years northern Mali has been the scene of armed conflict and threats to heritage (2012–13), which makes visiting difficult and risky: always check official travel advice.' },
  { img: 'mal-djinguereber', leg: 'Djinguereber Mosque, Timbuktu.' }
];

const linha = [
  'This timeline follows the main events of Mali and Songhai. Dates before 1350 are **approximate** and come from oral tradition or from chroniclers who wrote much later; later ones are better documented but still debated in detail.',
  { linha: [
    { d: '8th – 12th centuries', t: 'The world before Mali', x: '**Ghana** (Wagadu) dominates the gold and salt trade (see its page). Around it, on the upper Niger, live **Manding** chiefdoms, among them that of the **Keita**, around Kangaba. The earliest Arab accounts of Mali speak of a small kingdom and of kings who had already converted to Islam.' },
    { d: 'c. 1180 – 1235', t: 'The power of the Sosso', x: 'The **Sosso** kingdom of **Sumanguru Kanté** dominates what remains of Ghana and subjugates the Manding chiefdoms; according to tradition he kills or drives out the sons of the king of Kangaba. The date of the capture of Ghana’s capital, c. 1203, is debated.' },
    { d: 'c. 1230', t: 'Sundiata’s exile and return', x: 'The prince **Sundiata** (also Mari Jata, “the lion of Mali”), son of **Naré Maghan** and **Sogolon Kedjou**, was, in the epic, a boy who could not walk and who overcame contempt. Exiled, he forms an alliance of clans and returns to face Sumanguru. **The epic is a poetic work**: its portrait is largely epic.' },
    { d: 'c. 1235', t: 'The battle of Kirina', x: 'At **Kirina**, near the Niger, Sundiata’s allied army defeats Sumanguru, who vanishes (in legend, magically and mysteriously). The date of **c. 1235** is a modern convention. The victory creates the **Mali Empire**, which will stretch from the Sosso lands to the old zone of Ghana.' }
  ] },
  { img: 'mal-sundiata', leg: 'Imagined portrait of Sundiata Keita, 13th century. AI-generated illustration.' },
  { img: 'mal-kirina', leg: 'Battle of Kirina, c. 1235, conjectural reconstruction. AI-generated illustration.' },
  { linha: [
    { d: 'c. 1236 (tradition)', t: 'The Kurukan Fuga Charter', x: 'According to oral tradition, at a great assembly at **Kurukan Fuga** (the “plain of Kurukan”) the chiefs acclaim **Sundiata** mansa (king) and lay down rules: sharing of roles among clans, respect for life, a ban on mistreating strangers, limits on war and on enslavement among the Mande. The text was passed down orally and was **only written down in 1998**, at a meeting of traditionalists and researchers in Kankan (Guinea); the **exact age of each article is debated**.' }
  ] },
  { img: 'mal-kurukan-fuga', leg: 'Kurukan Fuga assembly, reconstruction based on oral tradition. AI-generated illustration.' },
  { linha: [
    { d: 'c. 1235 – 1255', t: 'The capital and the expansion', x: 'Mali conquers the gold zones of **Bambuk** and **Buré**, which gives it control of the region’s most important wealth, and subjects Sahel cities. The capital is said to have been **Niani** (today in Guinea), although the identification is debated. **Sundiata** dies around 1255; tradition says he drowned in the Sankarani river, but versions differ.' }
  ] },
  { img: 'mal-kangaba-kamablon', leg: 'Kamablon, sacred house of Kangaba.' },
  { linha: [
    { d: 'c. 1255 – 1285', t: 'Sundiata’s successors', x: 'His sons reign, among them **Mansa Uli** (Ali), whom Ibn Khaldun says made the pilgrimage to Mecca. Succession disputes follow. Ibn Khaldun, who gathered information from people linked to Mali, preserves a list of kings; **not every name and year can be confirmed**.' },
    { d: 'c. 1285 – 1300', t: 'Sakura', x: 'A former slave of the court (or freedman), **Sakura**, seizes the throne and expands the empire: east, to the region of **Gao**, and south. According to Ibn Khaldun he died on the way back from a pilgrimage, on the Red Sea coast, c. 1300; his career shows that a man of humble origin could become mansa.' },
    { d: 'c. 1310 – 1312', t: 'Abu Bakr II’s Atlantic voyages? (debated)', x: 'According to the account **Mansa Musa** gave in Cairo to the historian al-Umari, his predecessor fitted out a fleet to explore the “sea” to the west and never returned, which is why Musa himself took the throne. The existence of this expedition is **hotly debated** and there is no archaeological proof of any arrival in America.' },
    { d: 'c. 1312', t: 'Mansa Musa becomes king', x: 'Musa (known in Songhai tradition as **Kankan Musa**, “Musa, son of Kanku”) ascends the throne of Mali. The exact year is debated (c. 1307–1312).' },
    { d: '1324 – 1325', t: 'The pilgrimage to Mecca', x: 'Mansa Musa leaves Mali with an enormous retinue and hands out so much gold in **Cairo** that, according to al-Umari (who was there about twelve years later), the value of gold in the city fell for years. The figures for people and gold given by the sources vary widely and are probably exaggerated. On the way back he brings scholars and jurists and, it is said, the architect **Abu Ishaq al-Sahili** of Granada.' }
  ] },
  { img: 'mal-peregrinacao-cairo', leg: 'Mansa Musa’s pilgrimage, 1324, caravan crossing the Sahara. AI-generated illustration.' },
  { linha: [
    { d: 'c. 1325 – 1337', t: 'Gao and Timbuktu join Mali', x: 'The general **Sagmandia** conquers **Gao** for Mali, and Timbuktu grows with the king’s support. Tradition attributes to **Mansa Musa** (or to al-Sahili) the **Djinguereber** mosque (traditionally 1327) and other buildings. Musa dies around 1337.' },
    { d: '1337 – 1341', t: 'Maghan I and the Mossi raids', x: 'Musa’s son, **Maghan I**, reigns a few years. Around 1337 (date debated), the **Mossi** of the south attack Timbuktu, a sign that the empire is fragile at its edges.' },
    { d: '1341 – 1360', t: 'Mansa Sulayman', x: 'Musa’s brother, **Sulayman**, restores order and reigns until 1360. This period is the best described by a foreign eyewitness: **Ibn Battuta**.' },
    { d: '1352 – 1353', t: 'Ibn Battuta in Mali', x: 'The Moroccan traveller **Ibn Battuta** crosses the Sahara, passes **Taghaza** (the salt town) and **Walata**, reaches Sulayman’s capital and returns by way of Timbuktu and Gao. He praises the country’s security and justice, criticises the king’s stinginess and certain customs that seem to him not in keeping with Islam.' },
    { d: '1375', t: 'The Catalan Atlas', x: 'The Majorcan cartographer **Abraham Cresques** (or his workshop) draws in the Catalan Atlas an African king with crown and sceptre, holding a gold nugget, identified as **“Musse Melly”**, lord of the “blacks of Gineva” (Guinea or Ghana; the reading is debated). It is the most famous image of Mansa Musa, although it is an **imagined representation**.' }
  ] },
  { img: 'mal-atlas-catalao', leg: 'Musse Melly (Mansa Musa), 1375 Catalan Atlas, BnF.' },
  { linha: [
    { d: 'c. 1360 – 1433', t: 'The decline of Mali', x: 'Fights over the throne and pressure from **Tuareg**, **Mossi** and neighbouring peoples weaken the centre. In **1433** the Tuareg take **Timbuktu**, and Gao frees itself from Mali’s rule, at a debated date.' },
    { d: 'c. 1464', t: 'Sonni Ali takes the throne in Gao', x: 'The chief **Sonni Ali** (also Sunni Ali Ber, “the Great”), of the Sonni dynasty of Gao, builds in a few years a cavalry army and a fleet on the Niger. The main source on him, the **Tarikh al-Sudan**, written over a century later by authors tied to the dynasty that succeeded him, is **hostile** to his memory.' },
    { d: '1468 and 1473', t: 'The conquest of Timbuktu and Djenné', x: 'Sonni Ali takes **Timbuktu** in 1468 (and, the chronicles say, persecuted part of the scholars and the Tuareg) and **Djenné** in 1473, after a long siege the sources say lasted seven years (**a detail probably exaggerated**). Songhai now dominates the Niger from Mali to the river bend.' }
  ] },
  { img: 'mal-sonni-ali-cavalaria', leg: 'Sonni Ali and Songhai forces on the Niger, 15th century; imagined likeness. AI-generated illustration.' },
  { linha: [
    { d: '1492 – 1493', t: 'Death of Sonni Ali; Askia Mohammed', x: 'Sonni Ali dies in 1492 on his return from a campaign (according to tradition, he drowned). His son, **Sonni Baru**, is overthrown in 1493 by the general **Mohammed Ture**, who founds the **Askia dynasty** and reigns as **Askia Mohammed** (also Askia the Great) until 1528.' },
    { d: '1496 – 1497', t: 'Askia Mohammed’s pilgrimage', x: 'The king goes to Mecca, where, the chronicles say, the sharif recognises him as **caliph of the Sudan**. He brings back prestige and an idea of Islamic monarchy stronger than Sonni Ali’s, and has his tomb built in Gao.' }
  ] },
  { img: 'mal-askia-mohammed', leg: 'Imagined portrait of Askia Muhammad, early 16th century. AI-generated illustration.' },
  { linha: [
    { d: 'c. 1510', t: 'Leo Africanus visits Timbuktu', x: 'The diplomat and traveller **al-Hasan al-Wazzan**, known as **Leo Africanus**, visits Timbuktu and later writes the **Description of Africa**, in which he says that in Timbuktu’s market the book was among the most profitable goods.' },
    { d: '1528 – 1549', t: 'Troubled years of the Askias', x: 'The old **Askia Mohammed** is deposed by his son **Askia Musa** in 1528. Coups and revolts follow, until his grandson **Askia Daoud** (r. c. 1549–1582) restores stability and prestige.' },
    { d: 'c. 1534', t: 'Mali’s embassy to Portugal', x: 'According to the chronicler **João de Barros**, the **“Mandimansa”**, king of the Mande, sends an embassy to King **John III** of Portugal, asking for help against his enemies. Mali is by then much smaller and Portuguese commercial interest, centred on the gold of the Mina coast, no longer passes through it.' },
    { d: 'c. 1545 (debated)', t: 'Songhai attacks Mali’s capital', x: 'According to the *Tarikh al-Sudan*, Askia Daoud’s troops enter the Mande capital and sack it. Mali survives, reduced to a small state of the upper Niger and the Gambia, into the 17th century.' },
    { d: '1578 – 1590', t: 'Morocco covets the gold', x: 'The Saadian sultan **Ahmad al-Mansur** occupies the **Taghaza** oasis and prepares the conquest of Songhai. He buys firearms and cannon and recruits an army of converted Europeans and Andalusians, commanded by **Judar Pasha**.' },
    { d: '13 March 1591', t: 'The battle of Tondibi', x: 'Near Gao, the army of the emperor **Askia Ishaq II**, far more numerous but almost without firearms, is beaten by Moroccan arquebusiers and cannon. According to tradition, an attempt to stampede a herd of cattle against the enemy failed. The Moroccans occupy **Gao**, **Timbuktu** and **Djenné**.' }
  ] },
  { img: 'mal-tondibi', leg: 'Battle of Tondibi, 1591, conjectural reconstruction. AI-generated illustration.' },
  { linha: [
    { d: '1593', t: 'The deportation of the scholars', x: 'The Moroccans arrest the scholars of Timbuktu and deport them to Morocco, among them **Ahmed Baba**, one of the region’s greatest jurists and writers, who could only return in 1608. It is the final blow to the city’s intellectual life.' },
    { d: 'after 1591', t: 'Fragmentation', x: 'Songhai breaks up into small states; Moroccan **pashas** govern the Niger bend for generations and lose contact with Morocco. Much less gold arrived than the sultan wanted. Later, other peoples (Bambara, Fulani, Tuareg) contest the region.' },
    { d: '1828 – 1853', t: 'European rediscovery', x: 'European explorers reach Timbuktu (the Frenchman René Caillié in 1828; the German **Heinrich Barth** in 1853, who found the manuscript of the Tarikh al-Sudan chronicle). The city, already in decline, did not match the myth.' }
  ] }
];

const mapa = [
  'Mali and Songhai had no fixed borders: they were **cities, rivers and routes** bound together by kings, tribute and alliances. The oldest locations are **hypotheses**, in particular that of Mali’s capital.',
  { tabela: { cab: ['Place', 'Location today', 'Role', 'Known for'], linhas: [
    ['Kangaba', 'Southwest Mali', 'Cradle of the Keita dynasty', 'Kamablon, the sacred house renewed every seven years'],
    ['Niani', 'Guinea, near the Sankarani', 'Capital of Mali (debated)', 'Linked to Sundiata; the identification is disputed'],
    ['Kirina', 'South Mali', 'Battle (c. 1235)', 'Sundiata’s victory over Sumanguru'],
    ['Walata', 'Southeast Mauritania', 'Caravan town', 'Mali’s gateway for those coming from the north; Ibn Battuta passed through'],
    ['Timbuktu', 'Mali, on the Niger', 'Commercial and learned city', 'Mosques of Djinguereber, Sankoré and Sidi Yahya; manuscripts'],
    ['Djenné', 'Inland Niger delta', 'Commercial city', 'Adobe Great Mosque; link to gold and rice'],
    ['Gao', 'Mali, on the Niger', 'Songhai capital', 'Tomb of Askia; centre of trade and power'],
    ['Taghaza', 'Desert of northern Mali', 'Salt mine', 'Houses made of salt blocks, according to Ibn Battuta'],
    ['Bambuk and Buré', 'Senegal–Mali and Guinea', 'Gold zones', 'Source of Mali’s gold'],
    ['Tondibi', 'Near Gao', 'Battle (1591)', 'Moroccan victory over the Songhai'],
    ['Sijilmasa and Cairo', 'Morocco and Egypt', 'Termini of the trade', 'Where gold and slaves arrived; whence came salt, copper and books']
  ] } },
  { h: 'Niani and Kangaba' },
  'Tradition says that king **Sundiata** made **Niani** the capital, and the map in textbooks usually places it in present-day Guinea, on the bank of the Sankarani river. But Arab travellers never named the capital precisely, and excavations at Niani found traces of medieval occupation **whose link to the imperial capital is disputed**. **Kangaba**, further north, is the land of the Keita and remains a sacred place, with the **Kamablon**, where tradition keeps the memory of Sundiata.',
  { h: 'Timbuktu' },
  'The city began, according to tradition, as a seasonal Tuareg camp beside the Niger, around the 12th century. Under Mali it became a major stopping point between desert and river and, under the Askias, the centre of learning of the western Sudan. It had three great mosques, today World Heritage.',
  { img: 'mal-sankore', leg: 'Sankore Mosque, Timbuktu.' },
  { img: 'mal-sidi-yahya', leg: 'Sidi Yahya Mosque, Timbuktu.' },
  '**Djinguereber** (traditionally 1327), **Sankoré** (the one most tied to teaching, rebuilt in the 16th century) and **Sidi Yahya** (c. 1400) are of **adobe with timber beams**. Students learned the Quran, grammar, Maliki law, logic and astronomy from masters who taught in their homes or in the mosques; **there was no university like the European one**, but a network of teachers and private libraries.',
  { img: 'mal-tombuctu-reconstrucao', leg: 'Timbuktu in the 16th century, imagined view; the port of Kabara is shown in the distance. AI-generated illustration.' },
  { h: 'Djenné' },
  'Djenné lies in the **inland Niger delta**, rich in rice, fish and cattle, and was the link between the gold of the south and the desert caravans. The present town was founded, according to tradition, around the 9th century, beside the older **Djenné-Djenno** (see the Ghana page), gradually abandoned by c. 1400. The **Great Mosque** has medieval origins (the date is debated), but the present building dates from **1907**. Each year, at the end of the flood season, the population **re-plasters** the mosque in a communal festival.',
  { img: 'mal-djenne-crepissagem', leg: 'Participants carrying baskets of mud during the replastering festival at Djenné mosque; plaster application on the walls is not shown.' },
  { h: 'Gao' },
  'Gao was the Songhai capital and, earlier, an important centre already under Mali. Excavations at **Gao Saney** found marble stelae imported from southern Spain (12th–13th centuries, tied to trade with al-Andalus), showing the antiquity of the city’s links with the Mediterranean. The **Tomb of Askia**, an adobe pyramid about 17 metres high, was built, according to tradition, by **Askia Mohammed** after his pilgrimage, and is the city’s most impressive symbol.',
  { img: 'mal-tumulo-askia', leg: 'Tomb of Askia, Gao.' },
  { img: 'mal-mercado-gao', leg: 'Gao market, 16th century, conjectural reconstruction. AI-generated illustration.' },
  { h: 'The routes of gold, salt and river' },
  'The routes crossed the Sahara from south to north (from the Niger to **Sijilmasa** in Morocco, to Ghadames, Tripoli and Cairo) and the Niger served as a river “road” between Djenné, Timbuktu and Gao, in large canoes. Gold went north; salt, copper, cloth, horses, books and cowries went south. Camel caravans, with hundreds or thousands of animals, took weeks, and the water of the wells was their greatest worry.',
  { img: 'mal-niger-pinaca', leg: 'Pinasse on the Niger River, Mali.' },
  { img: 'mal-tuaregues', leg: 'Tuareg man preparing a fire for tea, northern Mali; contemporary photograph.' }
];

const sociedade = [
  { h: '1. Political organisation' },
  'Mali and Songhai were **empires of provinces**: the king (**mansa** in Mali, **sonni** and later **askia** in Songhai) ruled the centre and entrusted the provinces to governors (**farba** in Mali, **fari** in Songhai), who collected tribute and supplied soldiers. The king’s power rested on control of gold and routes, the loyalty of the elites and religious prestige.',
  { img: 'mal-mansa-musa-corte', leg: 'Audience at Mansa Musa’s court, 14th century; imagined depiction. AI-generated illustration.' },
  'At audiences, according to **Ibn Battuta**, the mansa appeared seated under a tree or on a platform, with the people **covering themselves in dust** as a sign of respect and the griots reciting praises. **Askia Mohammed** gave Songhai a more **centralised** administration, with a professional army, specialised officials and judges (**qadis**) in the cities.',
  { h: '2. Social classes' },
  'Mande society was divided into **birth groups**: the **horon** (nobles and free people, including warrior clans and farmers), the **nyamakala** (“craft castes”: smiths, goldsmiths, weavers, leatherworkers and **griots**), and the **jon** (slaves). Griots and smiths had a particular status, feared and respected. In Songhai there were also slaves on agricultural estates, workers of the king, and an important group of **scholars** (the ulama).',
  { h: '3. Religion' },
  'Islam reached the region through merchants and scholars from North Africa and the Sahara, from the 11th century. The kings of Mali and Songhai were **Muslims** and supported the mosques, but **traditional religion** remained strong, especially in the countryside, with cults of ancestors and of water and earth spirits, and initiation societies. Each king balanced the two.',
  { tabela: { cab: ['Element', 'Origin', 'Role'], linhas: [
    ['Maliki Islam', 'North Africa, Egypt', 'Law, teaching, justice, link to the Arab world'],
    ['Ancestor cults', 'Mande and Songhai tradition', 'Protection of family and land'],
    ['Water spirits', 'Songhai (the Sorko, boatmen of the Niger)', 'Protection of the river, fishing and navigation'],
    ['Initiation societies', 'Mande', 'Education of the young, social rules and rituals'],
    ['Sufism and sharifs', 'Maghreb', 'Prestige of families of scholars in Timbuktu']
  ] } },
  'Many of the **persecutions** of scholars and non-Muslims that the *Tarikh al-Sudan* describes must be read in the light of who wrote them: **Muslim** chroniclers writing for the dynasty that followed.',
  { h: '4. Economy' },
  'Wealth rested on **trans-Saharan trade**. Gold came from **Bambuk**, **Buré** and **Akan** (southern forests), salt came from **Taghaza** (in the north) and later **Taoudenni**, and the caravans also carried copper, cloth, horses, books and kola nuts. **Dyula** (or Wangara) merchants controlled the southern routes. As money, gold dust, copper bars, salt and **cowries** (shells imported from the Indian Ocean) circulated.',
  { img: 'mal-caravana-camelos', leg: 'Camel caravan in the Moroccan Sahara; contemporary photograph illustrating trans-Saharan routes.' },
  { img: 'mal-sal-taoudenni', leg: 'Salt blocks from Taoudenni unloaded at the river port of Mopti, Mali.' },
  'Salt was as valuable as gold, says a popular tradition. It is a simplification, but it shows that **the south lacked salt** and **the north lacked gold**. Merchants and kings earned from **taxes** on every load that passed.',
  { img: 'mal-pesos-ouro', leg: 'Akan brass weights for gold dust; objects for regional comparison.' },
  { img: 'mal-buzios', leg: 'Money cowries (Monetaria moneta).' },
  { h: '5. Writing and sources' },
  'The script was **Arabic**, used by scholars, in letters, contracts, law and history. The sources are of two kinds: **Arab travellers and geographers** (al-Umari, Ibn Battuta, Ibn Khaldun, Leo Africanus) and **local chronicles** of Timbuktu, the **Tarikh al-Sudan** (by al-Sa’di, c. 1655) and the **Tarikh al-Fattash** (attributed to Mahmud Kati and to descendants). The Mande also had the **oral tradition** of the griots. Each type of source has its own **biases**.',
  { img: 'mal-copista-manuscritos', leg: 'Timbuktu copyist, 16th century, conjectural reconstruction. AI-generated illustration.' },
  { h: '6. Home and family' },
  'Houses were of **adobe** (earth and straw bricks, **banco**), square or round in plan, with terraces, courtyards and flat roofs in the towns, and thatch in the villages. The family was **extended**, with polygyny among the elites. Among the Mande, children belonged to the father’s lineage.',
  { img: 'mal-casa-adobe', leg: 'Adobe house in Djenné, 14th century, conjectural reconstruction. AI-generated illustration.' },
  { h: '7. Food' },
  'The staples were **millet** and **sorghum**, with the **African rice** of the Niger delta, **fonio**, yams and legumes. People ate river fish, beef and mutton, milk, honey and fruit; they used **shea butter** and baobab leaves. Ibn Battuta complained that the king gave him as a gift a loaf, meat fried in shea butter and a gourd of sour milk, which shows how modest an official gift could be.',
  { h: '8. Clothing and jewellery' },
  '**Cotton**, spun and woven into narrow strips, was the basic cloth, dyed with **indigo**; the elites wore wide tunics, turbans and cloth imported from Egypt and the Maghreb. **Gold** in jewellery and ornaments marked out nobles and kings.',
  { h: '9. Music and games' },
  'The **griots** (*djeli*) were the musicians, historians and counsellors of kings, and passed on genealogy and epics. They played the **balafon** (gourd xylophone), drums and stringed instruments; the **kora** (21-string harp-lute) is typical of the Gambia–Senegal area, and its antiquity is not well documented. The epic of Sundiata, passed on by the **Kouyaté** family, was set down in writing in the 20th century.',
  { img: 'mal-griot', leg: 'Tuareg griot Amano and family with a three-string tehardent, Tin Aicha, Timbuktu region, Mali, 1996.' },
  { img: 'mal-kora', leg: 'Kora, musical instrument.' },
  { img: 'mal-balafon', leg: 'Balafon, musical instrument.' },
  { img: 'mal-djembe', leg: 'Djembe drum.' },
  'According to tradition, the **Sosso-Bala**, a balafon of Sumanguru, is still kept at Niagassola in Guinea, and was proclaimed by UNESCO as intangible heritage. Board games like **mancala** (known as *wari* or *oware* in the region) were popular.',
  { h: '10. Knowledge, science and medicine' },
  'Teaching was mainly **religious and legal**, but included Arabic grammar, rhetoric, astronomy, mathematics, medicine and logic. The **manuscripts of Timbuktu** (now hundreds of thousands, from family collections) also deal with trade, astrology, poetry and local history. Doctors used **plants** and knowledge passed from parents to children.',
  { img: 'mal-terracota-djenne', leg: 'Seated terracotta figure, Djenné peoples, 13th century, Metropolitan Museum of Art (1981.218).' },
  { h: '11. Technology' },
  'Smiths worked **iron** in clay furnaces and made hoes, spears and swords. **Earth construction** used adobe bricks and timber beams (**toron**) that serve as permanent scaffolding. **Cotton**, leather and gold were worked by specialised craftsmen. Dugout canoes and paddled boats linked the cities of the Niger.',
  { h: '12. War' },
  'Mali had elite **cavalry**, **archers** on foot and contingents from each province; al-Umari speaks of an army of tens of thousands of men (**numbers probably exaggerated**). The Songhai of **Sonni Ali** used war canoes and cavalry, and that of **Askia Mohammed** a **standing** army. In 1591 the lack of firearms left them at a disadvantage against the Moroccan arquebusiers.'
];

const personalidades = [
  'Many of these figures come from **oral tradition**; whenever a fact is legend or debated, it says so.',
  { h: 'Sundiata Keita (d. c. 1255)' },
  'Prince of the Keita dynasty and hero of the **Epic of Sundiata**. A historical figure, his portrait is largely **epic**. He founded the Mali Empire after defeating Sumanguru at Kirina (c. 1235). He is tied to the Kurukan Fuga Charter, whose age is debated.',
  { h: 'Sumanguru Kanté' },
  'King of the Sosso, smith and sorcerer in tradition, defeated at Kirina. A figure between history and legend; his balafon, the Sosso-Bala, is a relic of the tradition.',
  { h: 'Balla Fasséké (tradition)' },
  'Sundiata’s griot in the epic; founder, according to tradition, of the **Kouyaté** line of djeli. He is a figure of **oral tradition**, not confirmed by contemporary written sources.',
  { h: 'Mansa Musa (r. c. 1312 – c. 1337)' },
  'The most famous king of Mali. He made the pilgrimage to Mecca in 1324–25, brought back scholars and architects and supported Timbuktu. The idea that he was “the richest man ever” is a modern **popular exaggeration**: the sources speak of enormous wealth, but it cannot be measured.',
  { h: 'Abu Bakr II (Abubakari), “the king of the seas”? (debated)' },
  'Predecessor of Mansa Musa; according to Musa’s account to al-Umari, he set out with a fleet to explore the Atlantic and did not return. It is **hotly debated** and there is no proof that he reached another continent.',
  { h: 'Sakura' },
  'A former slave and later mansa (c. 1285–1300), he expanded the empire and died, according to Ibn Khaldun, on the way back from Mecca. He shows the social mobility possible at the court of Mali.',
  { h: 'Mansa Sulayman and Queen Qasa' },
  'Brother of Mansa Musa, he reigned from 1341 to 1360. He was the king visited by Ibn Battuta. His principal wife, **Qasa**, had standing at court, according to the traveller.',
  { h: 'Ibn Battuta (1304 – c. 1368/69)' },
  'Traveller and jurist from Tangier. His **Rihla** (“Journey”) describes Mali in 1352–53: the court, the safety of the roads, the food and the customs. It is the only eyewitness description of 14th-century Mali.',
  { img: 'mal-ibn-battuta', leg: 'Ibn Battuta, 19th-century illustration in Jules Verne’s Découverte de la Terre; imagined likeness.' },
  { h: 'Ibn Khaldun (1332 – 1406)' },
  'Historian and thinker from Tunis. In the **Muqaddimah** and the *Kitab al-Ibar* he preserves one of the lists of the kings of Mali, obtained from informants in Cairo, and reflects on the rise and fall of empires.',
  { img: 'mal-ibn-khaldun', leg: 'Statue of Ibn Khaldun, Tunis.' },
  { h: 'Sonni Ali (r. c. 1464 – 1492)' },
  'Founder of imperial Songhai, a warrior of the river and of the cavalry, conqueror of Timbuktu and Djenné. The image of a tyrant and persecutor comes from hostile Muslim chroniclers; modern scholarship sees him as a strategist and state-builder.',
  { h: 'Askia Mohammed (r. 1493 – 1528)' },
  'Mohammed Ture, a general who overthrew the Sonni, made the pilgrimage to Mecca (1496–97) and made Islam an ideology of the state. He reformed the administration and favoured scholars. He ended his days blind and deposed.',
  { h: 'Askia Daoud (r. c. 1549 – 1582)' },
  'Grandson of Askia Mohammed; a stable reign in which the court and Timbuktu reached their height. According to the chroniclers, he collected books and protected scholars.',
  { h: 'Ahmed Baba (1556 – 1627)' },
  'Scholar of Timbuktu, author of many works of law and biography, deported to Morocco after 1591. In Marrakech he argued that the **enslavement of free Muslims** was illegal. He is today a symbol of Timbuktu’s learning; the city’s manuscript institute bears his name.',
  { h: 'Leo Africanus (al-Hasan al-Wazzan, c. 1494 – c. 1554)' },
  'Diplomat from Fez, captured by corsairs and taken to Rome, where he wrote the **Description of Africa** (1550, printed in Venice). He describes Timbuktu and its book market, c. 1510–13, but some details are disputed.',
  { img: 'mal-leao-africano-livro', leg: 'Title page of Leo Africanus’s A Geographical Historie of Africa, English translation by John Pory, 1600 (scan page 11).' },
  { h: 'Judar Pasha' },
  'Commander of the Moroccan army at Tondibi (1591). Of Spanish origin and a convert, he used artillery and arquebusiers and governed the Niger bend as its first pasha.'
];

const legado = [
  { h: 'What they left us' },
  { lista: [
    '**Manuscripts:** hundreds of thousands of documents in Timbuktu and other cities, on law, science, poetry and history, still partly unstudied.',
    '**Oral tradition:** the epic of Sundiata, the genealogies, the Kurukan Fuga Charter, the Kamablon.',
    '**Adobe architecture:** a building technique of earth and timber, with collective renewal festivals.',
    '**Music:** the balafon, the kora, the griot tradition, which influenced blues, jazz and the popular music of Mali (Salif Keita, Toumani Diabaté).',
    '**Political models:** the idea of a trading empire with justice, governors and tribute.'
  ] },
  { h: 'Art' },
  'The art of the Niger delta included **terracottas** from Djenné, objects of iron and gold, textiles and musical instruments. Gourds, leather and iron were worked with great skill; masks and ritual figures belong to the tradition of neighbouring peoples, such as the Dogon.',
  { h: 'Architecture: earth, water and timber' },
  'The **Sudano-Sahelian** style uses adobe and protruding timber beams for maintenance. The Great Mosque of Djenné, the mosques of Timbuktu and the Tomb of Askia are the most important examples. They need **annual upkeep** after the rains, and their conservation is an effort of the whole community.',
  { h: 'The rediscovery' },
  'Europeans had been looking for Timbuktu since the 18th century and imagined it a city of gold. The Scot **Gordon Laing** reached it in 1826 and was killed soon after; **René Caillié** went in 1828 and came back alive; **Heinrich Barth**, in 1853, stayed several months and collected information on Songhai history. Only in the 20th century was the history of the empires studied with modern methods, combining Arab sources, oral tradition and archaeology.',
  { img: 'mal-manuscrito', leg: 'Arabic manuscript from Timbuktu.' },
  { h: 'The manuscripts in danger' },
  'In 2012–13, during the conflict in northern Mali, armed groups occupied Timbuktu, destroyed shrines of saints and burned part of the **Ahmed Baba Institute**. Many manuscripts had already been **secretly removed** to Bamako by librarians and families, and most were saved. Restoration and digitisation continue.',
  { img: 'mal-instituto-ahmed-baba', leg: 'Ahmed Baba Documentation and Research Centre (CEDRHAB), Timbuktu.' },
  { h: 'Where to visit and see' },
  { lista: [
    '**Mali (with caution, following official advice):** Timbuktu, Djenné, Gao and the Tomb of Askia, the National Museum in Bamako, Kangaba.',
    '**Guinea:** the site of Niani and Niagassola, with the Sosso-Bala.',
    '**Paris:** Musée du quai Branly and the Bibliothèque nationale de France (Catalan Atlas).',
    '**New York:** The Metropolitan Museum of Art, with terracottas and art from Mali.',
    '**Online:** the digitised manuscripts of Timbuktu and the archives of the Hill Museum & Manuscript Library.'
  ] },
  { caixa: 'A note', texto: 'This page summarises a **long and debated** history. The earliest dates depend on oral tradition, and the chronicles of Timbuktu were written centuries later. Where there is doubt, the text says “c.”, “debated” or “tradition”.' }
];

const quiz = [
  { p: 'In which battle, c. 1235, did Sundiata Keita defeat Sumanguru and found Mali?', op: ['Tondibi', 'Kirina', 'Gao', 'Djenné'], certa: 1, exp: 'At Kirina, in tradition, Sundiata beat the Sosso king Sumanguru; the date c. 1235 is a convention.' },
  { p: 'What is the Kurukan Fuga Charter?', op: ['A treaty with Portugal', 'A set of rules from Mande oral tradition', 'A chronicle of Timbuktu', 'A map of Mansa Musa'], certa: 1, exp: 'It is an oral tradition, only written down in 1998; the age of each article is debated.' },
  { p: 'Who made the famous pilgrimage to Mecca in 1324–25?', op: ['Sonni Ali', 'Askia Mohammed', 'Sundiata', 'Mansa Musa'], certa: 3, exp: 'Mansa Musa made the pilgrimage, passing through Cairo, where he handed out gold.' },
  { p: 'What are griots?', op: ['Soldiers of the royal guard', 'Keepers of oral tradition, musicians and counsellors', 'Salt merchants', 'Slaves of the kings'], certa: 1, exp: 'Griots (djeli) pass on Manding history, genealogy and music.' },
  { p: 'Which of these is one of the great mosques of Timbuktu?', op: ['Djinguereber', 'Koutoubia', 'Hassan II', 'Hagia Sophia'], certa: 0, exp: 'Djinguereber, with Sankoré and Sidi Yahya, are the three great mosques of Timbuktu.' },
  { p: 'What is the Great Mosque of Djenné made of?', op: ['Limestone', 'Adobe (earth)', 'Marble', 'Wood'], certa: 1, exp: 'It is of adobe, re-plastered every year; the present building dates from 1907.' },
  { p: 'Which Moroccan traveller visited Mali in 1352–53?', op: ['Ibn Khaldun', 'Leo Africanus', 'Ibn Battuta', 'Al-Bakri'], certa: 2, exp: 'Ibn Battuta visited the Mali of Mansa Sulayman and wrote his Rihla.' },
  { p: 'What was the most important commodity coming from the north into the Sahel?', op: ['Salt', 'Porcelain', 'Wine', 'Silver'], certa: 0, exp: 'Desert salt (Taghaza, later Taoudenni) was traded for gold.' },
  { p: 'Who overthrew the Sonni dynasty and founded the Askia dynasty in 1493?', op: ['Askia Daoud', 'Mohammed Ture', 'Sonni Baru', 'Ahmed Baba'], certa: 1, exp: 'The general Mohammed Ture seized power and reigned as Askia Mohammed.' },
  { p: 'What was the capital of Songhai?', op: ['Niani', 'Walata', 'Gao', 'Taghaza'], certa: 2, exp: 'Gao was the Songhai capital, where the Tomb of Askia stands.' },
  { p: 'Which city did Sonni Ali conquer in 1473, after a long siege?', op: ['Kirina', 'Djenné', 'Kangaba', 'Gao'], certa: 1, exp: 'Djenné fell in 1473; the sources speak of a seven-year siege, probably exaggerated.' },
  { p: 'What happened at Tondibi in 1591?', op: ['Founding of Mali', 'A Moroccan victory over Songhai', 'Death of Mansa Musa', 'Askia’s pilgrimage'], certa: 1, exp: 'Moroccan arquebusiers and cannon defeated the army of Askia Ishaq II.' },
  { p: 'Who was Ahmed Baba?', op: ['A king of Gao', 'A scholar of Timbuktu deported to Morocco', 'A salt merchant', 'A Moroccan general'], certa: 1, exp: 'He was a great jurist and writer of Timbuktu, deported in 1593.' },
  { p: 'Which 21-string instrument of the griots is typical of the Gambia and Senegal?', op: ['Kora', 'Djembe', 'Balafon', 'Flute'], certa: 0, exp: 'The kora is a gourd harp-lute; the balafon is a xylophone and the djembe a drum.' },
  { p: 'Which image of Mansa Musa, from 1375, is the most famous?', op: ['A coin', 'The Catalan Atlas', 'A statue in Gao', 'A mosaic in Mecca'], certa: 1, exp: 'The Catalan Atlas shows “Musse Melly” with a gold nugget; the image is imagined.' }
];

export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };
