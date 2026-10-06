// KHMER EMPIRE — full English content. Same structure and same image slots as the Portuguese version (dados.js).
// Dates are approximate; many Khmer dates come from stone inscriptions (in Sanskrit and Old Khmer), sometimes in the Shaka era (add 78 for AD). BC/AD.

const visao = [
  { caixa: 'In brief', texto: [
    'The **Khmer Empire** was the kingdom that dominated much of mainland Southeast Asia between the 9th and 15th centuries AD. From the plain around the **Tonlé Sap** lake, in present-day Cambodia, its kings ruled territories that at times included parts of modern Thailand, Laos and southern Vietnam. Its capital, **Angkor**, was one of the largest cities of the pre-industrial world, and **Angkor Wat**, the largest religious monument on Earth, still stands there.',
    'The empire was born in **802**, when **Jayavarman II** proclaimed himself universal king on the Phnom Kulen plateau. It grew with temple-mountains, enormous water reservoirs (the **barays**) and highly productive rice farming; it reached its peak under **Suryavarman II** (Angkor Wat) and **Jayavarman VII** (Angkor Thom and the Bayon); and it faded between the 13th and 15th centuries under pressure from the Tai kingdoms, changes of religion and trade routes, and episodes of drought and flood. In 1431 (a debated date) Angkor ceased to be the capital, but it was never forgotten.'
  ] },
  { img: 'khm-mapa-imperio', leg: 'Interpretive map of the Khmer Empire in 1203.' },
  { h: 'Where it was' },
  'The heart of the empire was the plain of the **Tonlé Sap** (“the great freshwater lake”), fed by the **Mekong**. This lake is unusual: in the rainy season the Tonlé Sap river reverses its flow and the lake grows several times larger, flooding its banks and leaving, when the waters fall, an enormous wealth of fish and fertile soil. It was on that plain, north of the lake, at the foot of a sandstone escarpment (the **Phnom Kulen** plateau, source of the stone), that the Khmer cities arose. The modern town of **Siem Reap** is the gateway to the ruins of Angkor.',
  'In the centuries of greatest power, Khmer kings controlled or received tribute from far wider regions: the middle Mekong valley (as far as Vientiane, in Laos), the Khorat plateau and the Chao Phraya valley (in present-day Thailand), and southern Vietnam, including the old coast of Champa. The exact limits changed many times and are debated, because this was a world of **mandalas**, circles of power in which a strong king received the loyalty of neighbouring chiefs, rather than a world of fixed borders.',
  { img: 'khm-angkor-wat-aerea', leg: 'Aerial view of Angkor Wat and its moat' },
  { h: 'When it existed' },
  'Khmer history is usually divided into two great phases: the **pre-Angkorian** (before 802) and the **Angkorian** (802 to 1431), followed by the so-called **post-Angkorian** period. The dates below are approximate, and the oldest are the most uncertain.',
  { tabela: { cab: ['Phase', 'Approximate dates', 'What marks it'], linhas: [
    ['Funan', 'c. 1st – 6th century AD', 'Trading kingdom of the Mekong delta, known mainly from Chinese sources and the port of Oc Eo; strong Indian influence'],
    ['Chenla (pre-Angkorian)', 'c. 550 – 802', 'Small Khmer kingdoms; inscriptions in Old Khmer and Sanskrit; brick temples (Sambor Prei Kuk); how the territory was divided is debated'],
    ['Foundation and Roluos', '802 – c. 889', 'Jayavarman II and the cult of the god-king; Hariharalaya; the Bakong; the first great baray'],
    ['First Angkor', 'c. 889 – 1080', 'Yasovarman and Yasodharapura; Koh Ker; Banteay Srei; the Baphuon; the West Baray'],
    ['Apogee', '1113 – 1218', 'Suryavarman II (Angkor Wat); war with the Chams (1177); Jayavarman VII, Mahayana Buddhism and Angkor Thom'],
    ['Decline', '1218 – 1431', 'Hindu reaction and then Theravada Buddhism; Tai pressure (Sukhothai, Ayutthaya); Zhou Daguan’s account (1296–97); abandonment of Angkor as capital'],
    ['Post-Angkorian', 'after 1431', 'Capitals at Phnom Penh, Longvek and Oudong; Angkor Wat continues as a Buddhist sanctuary']
  ] } },
  { img: 'khm-apsara-relevo', leg: 'Carved apsaras at Angkor Wat' },
  { h: 'Who were the Khmer?' },
  'The **Khmer** are the people who speak the Khmer language, of the Austroasiatic family, one of the languages with the oldest inscriptions in mainland Southeast Asia (the oldest dates from AD 611). Today they make up about nine tenths of Cambodia’s population. The ancestors of the Khmer grew rice and worked bronze and iron long before the first kingdoms. Between the 1st and 6th centuries, merchants, priests and scribes from India brought **Sanskrit**, the Hindu and Buddhist religions and ideas of kingship, which local elites adapted. This is sometimes called “Indianization”, but specialists stress that it was Southeast Asian rulers themselves who chose and transformed what came from abroad.',
  { h: 'Why they matter' },
  { lista: [
    '**Architecture:** Angkor Wat, the Bayon and the hundreds of temples of the Angkor archaeological park are among the greatest stone works in the world, and Angkor Wat is the national symbol of Cambodia.',
    '**Hydraulic engineering:** canals, embankments and huge reservoirs regulated the water of a monsoon region, with dry seasons and violent floods, for centuries.',
    '**A landscape city:** LiDAR (aerial laser) surveys showed that Angkor was an enormous low-density urban network with hundreds of thousands of inhabitants, far larger than once thought.',
    '**Art:** the bas-reliefs of Angkor Wat and the Bayon are one of the greatest galleries of carved stone in the world, with scenes of mythology, war and everyday life.',
    '**Religion and politics:** how a king is made a god, and how a kingdom passes from Hinduism to Mahayana Buddhism and then to Theravada Buddhism.',
    '**A lesson about the environment:** the fate of Angkor is one of the most discussed case studies of the relationship between society, water and climate.'
  ] },
  { img: 'khm-bayon-rostos', leg: 'Bayon face towers' },
  { caixa: 'Cambodia today', texto: 'Angkor was inscribed on the UNESCO World Heritage List in **1992**. It receives millions of visitors a year, and its management (tourism, groundwater, restoration) is a constant challenge. The **Kingdom of Cambodia** is today a country of about 17 million people, with its capital at **Phnom Penh**; Angkor Wat appears on the national flag. Many of the people who live in the villages inside the park are descendants of farmers who have always lived there.' }
];

const linha = [
  'This timeline follows the main events of Khmer history. The dates are approximate; many come from inscriptions (**steles**) carved in Sanskrit or Old Khmer, which gives a precision rare for this part of the world, but many points are debated.',
  { linha: [
    { d: 'c. 1st – 3rd century AD', t: 'Funan', x: 'In the Mekong delta the kingdom of **Funan** appears, the first state of Southeast Asia of which we have record. Chinese envoys such as **Kang Tai** (c. 245) left descriptions. The port of **Oc Eo** (now in Vietnam) linked the Indian Ocean to the China Sea; a Roman coin from the time of Antoninus Pius (AD 152) was even found there. Funan is not “Khmer” in the strict sense, but its political and religious heritage passed to the kingdoms that followed.' },
    { d: 'c. 550', t: 'Chenla takes power', x: 'The kings of **Chenla** (Zhenla in Chinese sources), among them **Bhavavarman I** and **Citrasena** (Mahendravarman), gradually absorb Funan and found kingdoms further inland, in a slow process of uncertain dates (c. 550 – 627). The oldest documents in Old Khmer (**AD 611**, at Angkor Borei) belong to this period.' },
    { d: 'c. 616 – 637', t: 'Isanavarman I', x: 'Builds **Isanapura** (Sambor Prei Kuk), a city with dozens of brick temples, dedicated mostly to Shiva. Chinese texts speak of a later division into “Land Chenla” and “Water Chenla”; many historians now doubt this division and see instead a fragmentation into small kingdoms.' },
  ] },
  { img: 'khm-oc-eo-funan', leg: 'Vishnu, Rama and Balarama from Phnom Da, pre-Angkorian period, National Museum of Cambodia.' },
  { img: 'khm-sambor-prei-kuk', leg: 'Brick temple at Sambor Prei Kuk' },
  { linha: [
    { d: '802', t: 'Jayavarman II, king of kings', x: 'According to a later inscription (that of **Sdok Kak Thom**, of 1052), **Jayavarman II** returned from “Java” (perhaps Champa or the Java of the Sailendras; the point is debated), united the main chiefs and had himself consecrated at **Mahendraparvata**, on the Kulen plateau, in a rite conducted by a Brahmin. The rite proclaimed independence from Java and established the cult of the **devaraja** (“god-king” or “lord of the gods”). The date 802 is the one tradition retains; its exact meaning is discussed.' },
  ] },
  { img: 'khm-jayavarman-ii-cena', leg: 'Conjectural consecration of a Khmer king at Phnom Kulen, AD 802. AI-generated illustration.' },
  { linha: [
    { d: 'c. 850', t: 'Death of Jayavarman II', x: 'The founder died and received the posthumous name **Paramesvara**. The exact chronology of his reign (c. 802 to 835 or 850) is uncertain. He spent his last years at **Hariharalaya**, in the Roluos area, which remained the capital until the end of the 9th century.' },
    { d: '877 – 889', t: 'Indravarman I and Roluos', x: 'He took the throne in 877. To secure water, he had the **Indratataka**, an enormous reservoir, dug, and in 879 he consecrated the temple of **Preah Ko**, dedicated to the ancestors. In 881 he consecrated the **Bakong**, the first great temple-mountain in sandstone: a five-tiered pyramid.' },
  ] },
  { img: 'khm-hariharalaya-reconstrucao', leg: 'Conjectural reconstruction of Hariharalaya (Roluos), c. AD 880. AI-generated illustration.' },
  { img: 'khm-bakong', leg: 'Bakong temple, Roluos' },
  { linha: [
    { d: 'c. 889 – 910', t: 'Yasovarman I and Yasodharapura', x: 'Son of Indravarman. He builds the **Lolei** on an island in the Indratataka and founds the new capital, **Yasodharapura**, centred on the hill of **Phnom Bakheng**, and an even bigger reservoir, the **Eastern Baray**. “Yasovarman’s city” will remain the core of Angkor for centuries.' },
  ] },
  { img: 'khm-phnom-bakheng', leg: 'Phnom Bakheng temple mountain' },
  { linha: [
    { d: '928 – 944', t: 'Koh Ker', x: 'A rival, **Jayavarman IV**, moves the capital to **Koh Ker** (Lingapura), about 120 km to the north-east. There he builds a seven-tiered pyramid, the **Prasat Thom** (Prang), and many temples. He reigned until 941; his son Harshavarman II still ruled from Koh Ker until 944, and then power returns to Yasodharapura.' },
  ] },
  { img: 'khm-koh-ker', leg: 'Prasat Thom pyramid, Koh Ker' },
  { linha: [
    { d: '944 – 968', t: 'Rajendravarman II', x: 'Returns to Angkor, builds the **Eastern Mebon** (953), at the centre of the Eastern Baray, and **Pre Rup** (961), and prepares the ground for **Banteay Srei**, consecrated in **967**, not by a king but by a high-ranking Brahmin, **Yajnavaraha**, teacher of the young king Jayavarman V.' },
    { d: 'c. 1002 – 1050', t: 'Suryavarman I', x: 'Prevails after a civil war. He expands the kingdom into the Khorat plateau and the Chao Phraya valley, builds the **Royal Palace** and the **Phimeanakas**, and the **West Baray** (with the West Mebon, an island at its centre), begun perhaps in his reign and finished later. He was a Buddhist, but kept the Hindu cult of the king; his reign is a good example of religious coexistence.' },
    { d: 'c. 1060', t: 'Baphuon', x: 'The **Baphuon**, a great temple-mountain, is built (traditionally attributed to Udayadityavarman II; some scholars give it to Suryavarman I), and **Phimai** (in present-day north-eastern Thailand) gains importance as a regional centre, with a temple of Buddhist inspiration.' },
    { d: '1080', t: 'A new dynasty', x: '**Jayavarman VI** takes the throne at Angkor (reigned until 1107), founding a dynasty from the region of Mahidharapura, perhaps linked to the north-east. It is from this line that **Suryavarman II** will come.' },
    { d: '1113 – c. 1150', t: 'Suryavarman II and Angkor Wat', x: 'He takes the throne in 1113, after a struggle with a rival. He builds **Angkor Wat**, a temple-mausoleum dedicated to **Vishnu**, over some decades, and **Beng Mealea**. He campaigns against Champa and against Đại Việt (northern Vietnam) with mixed results, and sends an embassy to China in 1116. He died c. 1150, possibly on campaign (the point is debated). He received the posthumous name **Paramavishnuloka**.' },
  ] },
  { img: 'khm-construcao-angkor-wat', leg: 'Conjectural construction scene at Angkor Wat, 12th century. AI-generated illustration.' },
  { linha: [
    { d: '1177', t: 'The Chams sack Angkor', x: 'The Chams of Champa, in present-day central Vietnam, under king **Jaya Indravarman IV**, sail up the Mekong and the Tonlé Sap in boats, take **Yasodharapura** and kill king **Tribhuvanadityavarman**. The occupation lasts four years. It was a deep trauma for the kingdom.' },
    { d: '1181', t: 'Jayavarman VII', x: 'A prince of the royal house, **Jayavarman VII**, drives out the Chams (according to tradition and the Bayon reliefs, in a naval battle on the Tonlé Sap) and is crowned in **1181**, already about 55 years old. He was a Mahayana Buddhist. He ruled until c. 1218.' },
  ] },
  { img: 'khm-batalha-chams', leg: 'Khmer–Cham naval battle relief, Bayon' },
  { linha: [
    { d: '1186 – 1191', t: 'Ta Prohm and Preah Khan', x: 'He consecrates **Ta Prohm** (1186), in honour of his mother, and **Preah Khan** (1191), in honour of his father. He founds hospitals and **“rest houses”** along the roads, and rebuilds the kingdom. The Ta Prohm inscription says the temple supported more than twelve thousand people.' },
    { d: 'c. 1190 – 1220', t: 'Angkor Thom and the Bayon', x: 'He builds the new walled city of **Angkor Thom**, with five gates, and at its centre the **Bayon**, the temple of the face towers. He also builds **Banteay Chhmar** and **Neak Pean**. The campaigns against Champa (1190–91 and the occupation until 1220) extend the empire to its maximum.' },
    { d: 'c. 1218', t: 'Death of Jayavarman VII', x: 'He dies at about 90. Some historians think the enormous building effort exhausted the kingdom; others see in it the height of power.' },
    { d: 'c. 1243 – 1295', t: 'Jayavarman VIII', x: 'The reign is marked by a **Hindu (Shaivite) reaction**: images of the Buddha are chiselled off and removed (for example at the Bayon and Preah Khan) and several temples return to the cult of Shiva. In 1238 the Tai, at **Sukhothai**, become independent. In 1283–85 the king, facing the Mongols, preferred to pay tribute to Kublai Khan.' },
  ] },
  { img: 'khm-jayavarman-vii-cabeca', leg: 'Head attributed to Jayavarman VII, late 12th–early 13th century, Musée Guimet, Paris.' },
  { linha: [
    { d: '1296 – 1297', t: 'Zhou Daguan at Angkor', x: 'The Chinese diplomat **Zhou Daguan** spends a year at the court of king **Indravarman III** (Srindravarman) and writes, later (c. 1312, date uncertain), *The Customs of Cambodia*, the only written account of Angkor by an observer of the time. Indravarman III reigned from 1295 to 1308 and was the first to promote **Theravada Buddhism** (of the Pali school).' },
    { d: '1327', t: 'Last Sanskrit inscription', x: 'The last great Sanskrit inscription at Angkor dates from 1327. With Theravada Buddhism, **Pali** and Khmer gain ground; the great stone works cease.' },
    { d: '1431 (debated)', t: 'Ayutthaya takes Angkor', x: 'According to Tai and Khmer chronicles (of debated dates), the Tai kingdom of **Ayutthaya** sacked Angkor. King **Ponhea Yat** is said to have left the city for Phnom Penh, where the new court was set up (the traditional date is 1431–1434).' },
    { d: '15th – 16th century', t: 'After Angkor', x: 'The court settles at Phnom Penh and then at **Longvek** and **Oudong**. Angkor Wat continues to be visited and cared for as a Buddhist sanctuary. A Portuguese Capuchin friar, **António da Madalena**, visits Angkor in **1586**, and his account was recorded by the chronicler **Diogo do Couto**.' },
    { d: '1860', t: 'Henri Mouhot', x: 'The French naturalist **Henri Mouhot** visits Angkor in January 1860 and his posthumous diary (1863–64) makes the ruins famous in Europe. But Angkor had never been “lost”: Cambodians, monks and several Europeans already knew it.' },
    { d: '1907', t: 'Angkor returns to Cambodia', x: 'After decades under Siamese rule, the Siem Reap region passes to the French protectorate of Cambodia. In 1908 the **Angkor Conservation** is born, linked to the École française d’Extrême-Orient (EFEO).' },
    { d: '1992', t: 'World Heritage', x: 'Angkor is inscribed on the UNESCO list (and, until 2004, on the list of heritage in danger).' },
    { d: '2012 – 2015', t: 'LiDAR', x: 'Aerial laser surveys by **Damian Evans** and colleagues (paper of 2013) reveal cities hidden under the forest and the true extent of Angkor.' }
  ] },
  { h: 'Rediscovery' },
  'The “rediscovery” of Angkor is a colonial myth: Angkor Wat was never abandoned, and its image was present in memory, in pilgrimages and in the accounts of Portuguese, Spaniards and Japanese in the 16th and 17th centuries. What changed in 1860 was European **publicity**, and then scientific research.'
];

const mapa = [
  'The Khmer map is not that of a city but of a **network**: a capital spread over hundreds of square kilometres and regional capitals linked by royal roads. These are the main places.',
  { tabela: { cab: ['Place', 'Where (today)', 'When / who', 'Importance'], linhas: [
    ['Oc Eo', 'Mekong delta, Vietnam', 'Funan, 1st – 6th century', 'Trading port; routes between India and China'],
    ['Sambor Prei Kuk (Isanapura)', 'Kampong Thom province, Cambodia', 'Isanavarman I, 7th century', 'Pre-Angkorian capital; brick temples; World Heritage site'],
    ['Phnom Kulen (Mahendraparvata)', 'North of Siem Reap', '802 and 9th century', 'Site of Jayavarman II’s consecration; sandstone quarries'],
    ['Hariharalaya (Roluos)', 'Near Siem Reap', '9th century, Indravarman I', 'First imperial capital; Preah Ko, Bakong, Lolei'],
    ['Yasodharapura / Angkor', 'Siem Reap', '9th – 15th century', 'Capital for most of Khmer history'],
    ['Koh Ker (Lingapura)', 'Preah Vihear province', 'Jayavarman IV and Harshavarman II, 928–944', 'Temporary capital; seven-tiered pyramid'],
    ['Angkor Wat', 'Siem Reap', 'Suryavarman II, 12th century', 'Temple-mausoleum of Vishnu'],
    ['Angkor Thom and the Bayon', 'Siem Reap', 'Jayavarman VII, c. 1190–1220', 'Last great walled capital'],
    ['Banteay Srei', '25 km from Angkor', '967', 'Pink sandstone temple with delicate reliefs'],
    ['Preah Vihear', 'Border with Thailand', '11th – 12th century', 'Sanctuary on a cliff; World Heritage site'],
    ['Phimai', 'North-east Thailand', '11th – 12th century', 'Regional capital and temple; linked to Angkor by road'],
    ['Wat Phu', 'Southern Laos', '5th – 13th century', 'Mountain sanctuary; World Heritage site'],
    ['Banteay Chhmar', 'North-west Cambodia', 'Jayavarman VII', 'Great provincial temple, with battle reliefs'],
    ['Phnom Penh', 'Cambodia', 'Capital after c. 1434', 'Capital of present-day Cambodia']
  ] } },
  { img: 'khm-mapa-angkor-sitio', leg: 'Historic archaeological map of Angkor, Service géographique de l’Indochine.' },
  { h: 'Angkor: a landscape city' },
  '**Angkor** was not a city with a centre and walls, like Babylon or Rome: it was an enormous network of temples, villages, rice fields, canals and reservoirs, with several successive “capitals” inside it. **LiDAR** surveys (aerial laser that “sees” through trees) showed that the urban network covered more than **a thousand square kilometres**, with thousands of house mounds, embankments, roads and ponds. Hundreds of thousands of people are estimated to have lived there in the 13th century (the most quoted estimates run from 700,000 to 900,000 and are much debated), which makes it one of the largest cities of the pre-industrial world by area.',
  { img: 'khm-lidar-angkor', leg: 'Archaeological map of the Angkor region based on LiDAR mapping; Landauer et al., 2025, figure 2, NASA SRTM topographic base. This is not a LiDAR terrain image.' },
  { h: 'Angkor Wat' },
  '**Angkor Wat** (“city-temple”) was built by **Suryavarman II** in the 12th century as a temple dedicated to **Vishnu** and, it seems, as his mausoleum. It covers about **160 hectares**, surrounded by a moat 190 m wide, and the central tower is about **65 m** high. The main entrance faces **west**, the direction associated with death, which supports the mausoleum idea (the point is debated). It represents **Mount Meru**, the mountain of the gods in Hindu cosmology, with five towers in a quincunx, and its galleries are covered with bas-reliefs. It was gradually turned into a Buddhist temple from the late 13th century and has never ceased to be used.',
  { h: 'Angkor Thom and the Bayon' },
  '**Angkor Thom** (“the great city”) was built by **Jayavarman VII** over the earlier city, in a square about 3 km on a side, with a wall and a moat, and five gates (four at the cardinal points plus the Victory Gate, beside the east gate). The south gate is flanked by **giants holding a serpent**, an allusion to the Churning of the Ocean of Milk. At the centre, the **Bayon** is a temple of dozens of towers covered with great **smiling faces**, about two hundred in all. Whom they represent is debated: the bodhisattva **Avalokiteshvara**, the king himself, or both. Nearby, the **Terrace of the Elephants** and the **Terrace of the Leper King** were stages for royal ceremonies.',
  { img: 'khm-angkor-thom-porta', leg: 'South gate of Angkor Thom with its face tower; the bridge giants are outside this frame.' },
  { img: 'khm-angkor-thom-reconstrucao', leg: 'Conjectural aerial reconstruction of Angkor Thom, c. AD 1200. AI-generated illustration.' },
  { h: 'Banteay Srei' },
  '**Banteay Srei** (“citadel of the women” or “of beauty”) is a small temple of **pink sandstone**, consecrated in **967**. What makes it unique is the quality of its reliefs, with scenes from the *Ramayana* and other myths, carved with an almost goldsmith’s detail. According to the inscription, it was founded by a Brahmin, **Yajnavaraha**, and not by a king. It was among the first ruins restored by the technique of **anastylosis** (reassembling the pieces in their original place), in 1931.',
  { img: 'khm-banteay-srei', leg: 'Pink sandstone reliefs at Banteay Srei' },
  { h: 'Ta Prohm' },
  '**Ta Prohm** was consecrated in 1186 by **Jayavarman VII** in honour of his mother and identified with the goddess of wisdom *Prajnaparamita*. A stele says it supported more than 12,000 people, with gold, silk and pearls. It was deliberately left, in large part, **as it was found**, with giant roots of strangler figs and silk-cotton (kapok) trees over its walls (the species identification is debated); the image has become a romantic symbol of the ruins of Angkor.',
  { img: 'khm-ta-prohm', leg: 'Tree roots over Ta Prohm' },
  { h: 'Preah Khan' },
  '**Preah Khan** (“sacred sword”) was consecrated in **1191** in honour of Jayavarman VII’s father, on a site that tradition links to the victory over the Chams. It was at once a temple, a monastery and a centre of learning, with thousands of servants. It has a long east–west corridor and an unusual two-storey building with round columns.',
  { img: 'khm-preah-khan', leg: 'Corridor or portal at Preah Khan' },
  { h: 'Beng Mealea' },
  '**Beng Mealea** (“lotus pond”), about 40 km east of Angkor, is a 12th-century temple in the style of Angkor Wat, with the same plan but unrestored: it is largely covered with vegetation and fallen stones. It shows what many Khmer ruins must have looked like to those who rediscovered them in the 19th century.',
  { img: 'khm-beng-mealea', leg: 'Beng Mealea temple' },
  { h: 'Beyond Angkor' },
  { lista: [
    '**Koh Ker:** capital of Jayavarman IV and Harshavarman II (928–944), about 120 km to the north-east, with a seven-tiered pyramid and many monumental sculptures.',
    '**Phnom Kulen:** the sacred plateau, where Jayavarman II was consecrated and from which the sandstone came. LiDAR revealed the city of **Mahendraparvata** there.',
    '**Preah Vihear, Phimai and Wat Phu:** provincial sanctuaries, along today’s borders, which show the extent of the empire.',
    '**Banteay Chhmar:** temple-city of Jayavarman VII, in the north-west, with reliefs of battles against the Chams.'
  ] },
  { h: 'Roads and routes' },
  'The Khmer had a network of raised **royal roads** linking Angkor to Phimai, Preah Vihear and Champa. Along them **Jayavarman VII** set up **121 rest houses** (according to the inscriptions), about 15 km apart by some estimates. Goods also travelled along the Tonlé Sap and the Mekong, and to the sea along the coast, linking the empire to China and the Indian Ocean.'
];

const sociedade = [
  { h: '1. Political organization' },
  'The Khmer king was an **absolute and sacred monarch**. In Hindu political theory he was a **chakravartin**, “he who turns the wheel”, the universal ruler, and his personal cult was that of the **devaraja**, the “god-king” (the exact meaning of this word is much discussed: a cult of the king? a god protecting the kingdom?). Each king built his own **temple-mountain** as the centre of the realm and, after death, was identified with a god (Paramesvara, Paramavishnuloka). Succession followed no fixed rule, and civil wars were frequent.',
  'The kingdom was divided into **provinces** governed by appointed dignitaries, and the court had a body of counsellors, ministers and priests (the **purohita**, royal chaplain, was very influential). Taxes were paid in produce (rice, forest products) and in **labour**, and inscriptions also record **grants of land and servants** to temples, which functioned as great economic centres. The king received tribute from neighbouring chiefs in a “mandala” system.',
  { img: 'khm-procissao-real', leg: 'Conjectural royal procession at Angkor, 12th century. AI-generated illustration.' },
  { h: '2. Social classes' },
  { lista: [
    '**The king and royal family:** he had his wives, concubines and a vast court.',
    '**Brahmins and priests:** counsellors, astrologers, scholars of Sanskrit; some families served several kings.',
    '**Nobles and officials:** governors, military chiefs, temple administrators.',
    '**Free peasants:** the vast majority, who paid taxes and performed compulsory labour.',
    '**Temple servants:** people given to a temple, with their families, to work the land and serve the gods.',
    '**Slaves (*khnum*):** captured in war, in debt or given as payment; according to Zhou Daguan, many were hill peoples.'
  ] },
  { h: '3. Religion' },
  'Khmer religion was a mixture of local beliefs (ancestor spirits, the *neak ta*, and spirits of the land), **Hinduism** (above all the cult of **Shiva** and **Vishnu**) and **Buddhism**. For centuries the cults coexisted at the same court, and many kings supported several.',
  { tabela: { cab: ['Figure', 'Role', 'Where it appears'], linhas: [
    ['Shiva', 'Supreme god for most kings until the 12th century; worshipped in the form of the **linga**', 'Bakong, Preah Ko, Banteay Srei, Phnom Bakheng'],
    ['Vishnu', 'Preserver of the world; the main deity of king Suryavarman II', 'Angkor Wat (mausoleum of Vishnu)'],
    ['Harihara', 'God who unites Shiva and Vishnu in a single body', 'Hariharalaya (Roluos) and pre-Angkorian sculptures'],
    ['Brahma', 'Creator; third of the triad', 'Sculptures and reliefs'],
    ['Buddha', 'In Mahayana and later Theravada forms', 'Bayon, Ta Prohm, later Angkor Wat'],
    ['Avalokiteshvara (Lokesvara)', 'Bodhisattva of compassion; associated with Jayavarman VII', 'Bayon (the faces), Banteay Chhmar'],
    ['Prajnaparamita', 'Perfect wisdom (Mahayana Buddhism); the mother of Jayavarman VII', 'Ta Prohm'],
    ['Naga', 'Many-headed serpent, tied to water and the founding of the kingdom', 'Balustrades, bridges and causeways throughout the empire'],
    ['Garuda', 'Sun-bird, mount of Vishnu', 'Reliefs and sculptures']
  ] } },
  { img: 'khm-kbal-spean', leg: 'Lingas carved in the riverbed, Kbal Spean' },
  { h: 'The Churning of the Ocean of Milk' },
  'The most famous scene at Angkor Wat is the **Churning of the Ocean of Milk**, a relief about **49 m** long, where, according to the Hindu myth, gods (*devas*) and demons (*asuras*) pull in opposite directions on the serpent Vasuki, coiled round a mountain, to obtain the nectar of immortality, the *amrita*. Vishnu, as a tortoise, supports the mountain. The reliefs cover other themes: the **Mahabharata** (the battle of Kurukshetra), the **Ramayana**, the procession of Suryavarman II and scenes of Heaven and Hell.',
  { img: 'khm-churning-relevo', leg: 'Churning of the Ocean of Milk relief, Angkor Wat' },
  { h: 'The Buddhism of Jayavarman VII' },
  'Jayavarman VII was the first great **Mahayana Buddhist** Khmer king. He drew on the compassion of the bodhisattva (the Bayon, the hospitals, the rest houses) and did not give up sacred kingship: he presented himself as a king who gives salvation to his subjects. After his death there was a **Hindu reaction**, with the destruction of Buddhist images, and then, from the end of the 13th century, **Theravada** Buddhism, simple and monastic, which spread among the people and is today the religion of most Cambodians.',
  { h: '4. Economy' },
  'The basis of everything was **rice**. The Khmer grew **irrigated rice** in paddy fields, using floods and reservoirs, and some specialists argue that harvests were very abundant (Zhou Daguan speaks of three to four a year, but this may be exaggeration). The **fish** of the Tonlé Sap, in enormous quantity, were the main protein, preserved as paste and salted. They also grew sugar palm, bananas, cane, fruit and vegetables.',
  'The empire traded with China and India: it exported forest products (kingfisher feathers, ivory, wax, resin, gamboge, benzoin, aromatic woods) and imported silk, ceramics, iron and precious metals. The **markets** were run by women, according to Zhou Daguan. There was no minted coinage: rice, cloth and small bars of silver and gold were used.',
  { img: 'khm-aldeia-arroz', leg: 'Khmer village and rice cultivation, 12th century; conjectural reconstruction. AI-generated illustration.' },
  { img: 'khm-mercado-zhou', leg: 'Angkor market, c. AD 1296, inspired by Zhou Daguan’s account; conjectural reconstruction. AI-generated illustration.' },
  { h: '5. Writing and language' },
  'The Khmer wrote in **Sanskrit** (the sacred and court language) and in **Old Khmer** (the language of the people and of administration), in a script derived from the **Pallava** script of southern India. **More than a thousand inscriptions** are known, carved in stone at the entrances of temples, telling of genealogies, grants, laws and the deeds of kings. Ordinary books were written on **palm leaves** and leather, and have been lost, which leaves a great gap in our information about daily life. Modern Khmer script descends from this one.',
  { h: '6. Home and family' },
  'In the villages, houses were of **wood and bamboo, with thatched roofs, raised on stilts**, because of floods and animals. Only temples and the palace had tiled or stone roofs, according to Zhou Daguan. The reliefs of the Bayon show this daily life: fishermen, hunters, cooks, chess players and cockfights. The family was extended, and women had a strong economic role.',
  { img: 'khm-casa-palafita', leg: 'Khmer stilt house inspired by Bayon reliefs; conjectural reconstruction. AI-generated illustration.' },
  { h: '7. Food' },
  { lista: [
    '**Rice** (and glutinous rice) as the basis of every meal.',
    '**Fish** fresh, dried or fermented (*prahok*, a fish paste still widely used today); shrimps, frogs and turtles.',
    '**Meat:** pork, poultry, deer; cattle were mainly work animals.',
    '**Fruit and vegetables:** banana, mango, lotus, sugar palm, gourd; local herbs and spices.',
    '**Drink:** rice and palm wine, and tea brought by the Chinese.'
  ] },
  { h: '8. Clothing' },
  'Men and women of all classes wore the **sampot**, a cloth wrapped round the waist and passed between the legs, and left the chest bare. Elites wore silks and printed cottons, gold jewellery, heavy earrings and diadems; the king dressed in gold and gems. The **apsaras** of the reliefs show elaborate hairstyles, necklaces and bracelets. People went barefoot and bareheaded.',
  { h: '9. Music, dance and games' },
  '**Dance** was part of worship: the temple of Ta Prohm had more than six hundred dancers, according to its stele. The **apsaras** of the reliefs are today the symbol of Cambodian classical dance. The reliefs show orchestras with harps, drums, flutes, cymbals and conches. Games included **cockfights**, pig fights and boxing, board games, and water festivals, like today’s **Water Festival**.',
  { img: 'khm-danca-apsara', leg: 'Dancers and musicians in a Khmer temple, 12th century; conjectural interpretation, not an exact reproduction of ancient dance. AI-generated illustration.' },
  { h: '10. Hydraulic engineering: the barays' },
  'Cambodia’s climate has **monsoon rains** between May and October and a long dry season. The Khmer built a system that **stored, channelled and distributed water**: enormous rectangular reservoirs, the **barays**, made with earth embankments, linked by canals and diverted rivers. The **Eastern Baray** (c. 7 × 1.8 km) and the **Western Baray** (c. 8 × 2.1 km) are the largest. Their function is debated: **irrigation** (the classic idea), **flood control**, a **religious symbol** (the cosmic ocean around Mount Meru) or all of these at once. Recent studies suggest that the system was very ingenious, but also **fragile**, and that managing it demanded a great deal of labour.',
  { img: 'khm-esquema-baray', leg: 'Simplified conjectural illustration of Angkor water management; the relationship between baray and irrigation is debated. Drawn diagram.' },
  { img: 'khm-baray-ocidental', leg: 'West Baray and the Angkor region seen from the International Space Station; enlarged detail inset in the NASA photograph.' },
  { h: '11. Architecture and construction' },
  'The earliest temples were of **brick**; later came **sandstone** (quarried at Phnom Kulen and moved by canals and rafts) and **laterite** (for foundations and walls). The Khmer did not know the true arch: they used the **corbelled arch** (stones project one over another), and the stones were cut and fitted without mortar, sometimes with clamps. The buildings, with **covered galleries**, **lotus-shaped towers** and **temple-mountains**, represented the Hindu cosmos (Mount Meru and the oceans). The reliefs were carved after the blocks were in place. The supply of stone and labour was enormous.',
  { h: '12. Bronze, ceramics and metals' },
  'The Khmer were great **bronze founders**: statues of deities (the **reclining Vishnu** of the West Mebon is one of the greatest examples), bells, gongs, boxes, mirrors and ornaments. They cast by the **lost-wax** technique. They also made glazed **stoneware** in kilns around Angkor and in north-eastern Thailand, and worked gold, silver, iron and copper, for weapons and tools.',
  { img: 'khm-oficina-bronze', leg: 'Khmer bronze foundry, 12th century; conjectural reconstruction. AI-generated illustration.' },
  { img: 'khm-bronze-vishnu', leg: 'Reclining bronze Vishnu from West Mebon, National Museum' },
  { h: '13. Science and medicine' },
  'The calendar was the Hindu one, with the **Shaka** era (which begins in AD 78), and temples had **astronomical alignments**: at Angkor Wat, for example, the Sun rises over the central tower at the March equinox, the observation many visitors seek (whether the builders intended this is debated). In **medicine**, the inscriptions of **Jayavarman VII** speak of **102 hospitals** (*arogyasala*) with doctors, nurses, medicines and a chapel of the **Medicine Buddha** (Bhaishajyaguru). Hospital chapels have been found, but the inscriptions are the only evidence of the size of the network, and specialists debate what actually functioned.',
  { img: 'khm-hospital-jayavarman', leg: 'Hospital in the time of Jayavarman VII, c. AD 1200; conjectural reconstruction. AI-generated illustration.' },
  { h: '14. War' },
  'The Khmer army combined **infantry** (with spears, swords, bows and shields), **war elephants** (a feared shock force), light cavalry and **boats**. The reliefs of the Bayon and Banteay Chhmar show combat against the Chams, with **ballistae** mounted on elephants, spears and rowing boats. War in Southeast Asia was also a struggle for **population**: victors carried off prisoners, who worked as temple servants or as slaves.'
];

const personalidades = [
  'The Khmer left the names of their kings in inscriptions; we know much less of ordinary people. The following figures are real, and what is legend is marked.',
  { h: 'Jayavarman II (reigned c. 802 – c. 835/850)' },
  'The founder of the Khmer Empire. According to the Sdok Kak Thom inscription (1052), he returned from “Java”, united the local chiefs and was consecrated on Phnom Kulen. Little is known for certain of his life; the rest comes from later traditions, which made him the founding father.',
  { h: 'Hiranyadama and Sivakaivalya' },
  'According to the Sdok Kak Thom inscription, the Brahmin **Hiranyadama** taught the rite of the devaraja to **Sivakaivalya**, first priest of the cult, whose family went on serving the kings for centuries. It shows the power of the clergy at court.',
  { h: 'Indravarman I (877 – 889)' },
  'A king of no clear royal origin who rose to the throne by his own efforts. In ten years he built the Indratataka, Preah Ko and the Bakong, the programme that consolidated Roluos and the tradition of the temple-mountain.',
  { h: 'Yasovarman I (c. 889 – 910)' },
  'Poet-king and builder, he left Sanskrit inscriptions of great quality. He founded Yasodharapura and the Eastern Baray, and created several hermitages (*asrama*) for scholars.',
  { h: 'Suryavarman I (c. 1002 – 1050)' },
  'A Buddhist king who won a civil war and expanded the empire into the Khorat plateau. He supported Hindu cults as well as Buddhism, and instituted the oath of allegiance of officials.',
  { h: 'Suryavarman II (1113 – c. 1150)' },
  'The builder of Angkor Wat. He ruled with a firm hand, attacked Champa and Đại Việt with mixed results and sent embassies to China. His image in the procession relief, in majesty on a throne, is one of the most famous portraits of Khmer art.',
  { h: 'Jayavarman VII (c. 1125 – c. 1218)' },
  'The greatest Khmer king. He was a prince on campaign in Champa when Angkor was sacked in 1177; in 1181 he reconquered the capital and took the throne. A Mahayana Buddhist, he built hospitals, rest houses, Ta Prohm, Preah Khan, Angkor Thom and the Bayon, at an extraordinary speed. His reign left the empire at its highest point, and perhaps exhausted.',
  { h: 'Jayarajadevi and Indradevi' },
  'The first wife of Jayavarman VII, **Jayarajadevi**, and her sister, **Indradevi**, who taught her Buddhism, was a teacher at court and, after Jayarajadevi’s death, married the king, according to the Phimeanakas inscription. They show that women of the elite could be scholars and have religious influence.',
  { h: 'Jayavarman VIII (c. 1243 – 1295)' },
  'A Shaivite king who presided over the Hindu reaction: he had images of the Buddha chipped away and remodelled temples. He preferred to pay tribute to the Mongols rather than fight them.',
  { h: 'Zhou Daguan (c. 1270 – mid-14th century)' },
  'Chinese diplomat of the Yuan dynasty, sent to the Khmer court with an embassy in 1296. He spent about a year at Angkor and, on his return, wrote *Zhenla fengtu ji* (“The Customs of Cambodia”), a short text, perhaps incomplete: the only contemporary eyewitness text on life at Angkor. He describes the palace, the king, the women, the market, the harvests and the religions. Some passages (such as the legend of the nine-headed serpent princess with whom the king slept at night) are hearsay. There is a French translation by Paul Pelliot (1902, 1951) and an English one by Peter Harris (2007).',
  { img: 'khm-zhou-daguan-cena', leg: 'Zhou Daguan writing at Angkor, c. AD 1297; imagined likeness and scene. AI-generated illustration.' },
  { h: 'Ponhea Yat (15th century)' },
  'The king who, according to Cambodian chronicles, abandoned Angkor and founded the new capital at Phnom Penh (the exact chronology is uncertain). He marks the beginning of the post-Angkorian period.',
  { h: 'António da Madalena' },
  'A Portuguese Capuchin friar who visited Angkor in 1586 and was among the first Europeans to describe Angkor Wat. His account was recorded by the chronicler Diogo do Couto. It is a reminder that the “discovery” of Angkor by Mouhot in 1860 is a mistaken idea.',
  { h: 'Henri Mouhot (1826 – 1861)' },
  'French naturalist who visited Angkor in 1860 and died of malaria in Laos the following year. His diary, published after his death, made Angkor famous in Europe. He compared Angkor Wat to the finest buildings of Europe, but acknowledged that locals already knew it: it is wrong to say he “discovered” it.',
  { h: 'Damian Evans' },
  'Australian archaeologist who since 2012 has led LiDAR surveys at Angkor and elsewhere in Cambodia (the “Cambodian Archaeological LiDAR Initiative”). His 2013 paper revealed the true size of the city.'
];

const legado = [
  { h: 'What they left us' },
  { lista: [
    '**The monuments of Angkor:** the largest temple complex in the world, a UNESCO World Heritage site since 1992.',
    '**The Khmer language and script:** spoken by about sixteen million people; modern Khmer script descends from Pallava.',
    '**Classical dance:** the Royal Ballet of Cambodia, with dancers in golden costumes, is heir to the apsaras of Angkor, and was inscribed by UNESCO in 2008.',
    '**Water:** the idea that a kingdom’s prosperity depends on control of water.',
    '**Religion:** Theravada Buddhism, which settled in after the apogee, is the cultural basis of Cambodia today.',
    '**The flag:** Angkor Wat is on the flag of Cambodia.'
  ] },
  { h: 'Art' },
  'Khmer art, in sandstone, bronze and wood, has recognizable styles named after places (**Preah Ko**, **Bakheng**, **Koh Ker**, **Banteay Srei**, **Baphuon**, **Angkor Wat**, **Bayon**). The sculptures have a serenity and firmness of their own, and the **smiling faces** of the Bayon period are among the best-known images of Asian art. The carved **lintels** (the beams over doorways) are a signature of Khmer art.',
  { h: 'Architecture: the temple-mountain' },
  'The **temple-mountain** is the great Khmer architectural invention: a pyramid of terraces, each smaller than the last, crowned with towers, representing **Mount Meru**. From the Bakong to Angkor Wat the form was refined, with galleries, moats and pavilions. All the buildings were oriented to the cardinal points.',
  { h: 'Why did Angkor fall? A debate' },
  'There was no single “end”. Angkor lost its status as capital in 1431 (a debated date), but remained inhabited. Historians point to several causes, which probably combined:',
  { lista: [
    '**War and outside pressure:** the Tai kingdoms of Sukhothai and Ayutthaya, which grew strong, and the Chams. This is the oldest explanation, in the chronicles.',
    '**Climate:** tree-ring studies from Vietnam (Buckley and colleagues, 2010) show **prolonged droughts** (mid-14th and early 15th centuries), separated by very strong monsoons, which may have damaged the hydraulic system.',
    '**Engineering:** the barays and canals were damaged by floods and silting, and the system became hard to maintain.',
    '**Religion and politics:** Theravada Buddhism drew the people away from the cult of the god-king, and the cost of maintaining the temples weighed on the population.',
    '**Trade:** the shift of maritime routes to the coast and the south (and the importance of trade with China) made the Phnom Penh area, beside the Mekong, more attractive.'
  ] },
  'None of these explanations is accepted by everyone, and the current trend is to speak of a **transformation** rather than a “collapse”.',
  { h: 'The rediscovery of Angkor' },
  'As we have seen, Angkor was never forgotten. But **Henri Mouhot** (1860) made it famous in Europe, and then France, which dominated Cambodia from 1863 to 1953, created the **École française d’Extrême-Orient** (EFEO), which inventoried, cleared and restored the monuments, with names such as **Henri Marchal**, **Maurice Glaize** and **Bernard-Philippe Groslier**. The **Baphuon**, dismantled piece by piece in the 1960s, had its plans lost during the war and was rebuilt from 1995 to 2011. Today teams from many countries work at Angkor.',
  { img: 'khm-mouhot-gravura', leg: 'Engraving of Angkor Wat’s western colonnade, Illustrated London News, 1868.' },
  { img: 'khm-baphuon-restauro', leg: 'Baphuon during restoration' },
  { caixa: 'A note on the 20th century', texto: 'During the years of war and the **Khmer Rouge** regime (1975–1979), in which about one to two million Cambodians died through persecution, famine and forced labour (estimates vary), the archives, technicians and conservation teams were scattered or killed. Angkor suffered **neglect, looting and mines**, but was not destroyed on purpose. Restoration resumed in the 1990s.' },
  { img: 'khm-angkor-wat-nascer-sol', leg: 'Angkor Wat at sunrise' },
  { caixa: 'Visiting', texto: 'The **Angkor Archaeological Park** (near Siem Reap) can be visited all year; the best times are sunrise (Angkor Wat) and late afternoon. Allow several days: Angkor Wat, Angkor Thom and the Bayon, Ta Prohm, Banteay Srei, Preah Khan, Beng Mealea and Roluos. Beyond Angkor, **Koh Ker** and **Sambor Prei Kuk** are worth seeing. The **National Museum of Cambodia**, in Phnom Penh, has the finest sculptures, and the **Guimet Museum** in Paris has a large Khmer collection. Respect the religious character: wear clothes that cover shoulders and knees.' }
];

const quiz = [
  { p: 'In what year is Jayavarman II considered to have founded the Khmer Empire?', op: ['602', '802', '1002', '1181'], certa: 1, exp: 'The consecration of Jayavarman II on Phnom Kulen, in 802, is the traditional date for the start of the empire.' },
  { p: 'What is the great lake of central Cambodia, whose seasonal flooding fed Khmer civilization?', op: ['Tonlé Sap', 'Lake Tai', 'Lake Baikal', 'Inle Lake'], certa: 0, exp: 'The Tonlé Sap, fed by the Mekong, reverses its flow in the rainy season.' },
  { p: 'Which trading kingdom of the Mekong delta, before the Khmer, had the port of Oc Eo?', op: ['Champa', 'Funan', 'Sukhothai', 'Pagan'], certa: 1, exp: 'Funan (c. 1st – 6th century), known mainly from Chinese sources and the archaeology of Oc Eo.' },
  { p: 'For which god was Angkor Wat built?', op: ['Shiva', 'Buddha', 'Vishnu', 'Brahma'], certa: 2, exp: 'Suryavarman II dedicated the temple to Vishnu, in the 12th century.' },
  { p: 'Which Khmer king was the great Buddhist builder of Angkor Thom and the Bayon?', op: ['Jayavarman VII', 'Suryavarman II', 'Yasovarman I', 'Jayavarman VIII'], certa: 0, exp: 'Jayavarman VII (c. 1181 – 1218) was a Mahayana Buddhist.' },
  { p: 'Which people sacked Yasodharapura (Angkor) in 1177?', op: ['The Mongols', 'The Chinese', 'The Chams', 'The Portuguese'], certa: 2, exp: 'The Chams of Champa, under Jaya Indravarman IV, sailed up the Tonlé Sap.' },
  { p: 'What are the “barays”?', op: ['Bronze statues', 'Large water reservoirs', 'Monks’ schools', 'Warships'], certa: 1, exp: 'The barays were large rectangular reservoirs, linked by canals and embankments.' },
  { p: 'Who wrote *The Customs of Cambodia*, the only contemporary account of Angkor?', op: ['Marco Polo', 'Zhou Daguan', 'Henri Mouhot', 'Diogo do Couto'], certa: 1, exp: 'Zhou Daguan, a Chinese diplomat, was at Angkor in 1296–97.' },
  { p: 'Which aerial survey technique, used since 2012, revealed the true extent of Angkor?', op: ['LiDAR', 'Radiocarbon', 'Satellite photography alone', 'Sonar'], certa: 0, exp: 'LiDAR “sees” through vegetation and showed an urban network of more than 1,000 km².' },
  { p: 'What is the subject of the most famous relief at Angkor Wat?', op: ['The battle of Gaugamela', 'The Churning of the Ocean of Milk', 'The Last Supper', 'The lion hunt'], certa: 1, exp: 'Gods and demons pull the serpent Vasuki to obtain the nectar of immortality.' },
  { p: 'Which pink sandstone temple, consecrated in 967, is famous for its delicate reliefs?', op: ['Bakong', 'Banteay Srei', 'Preah Vihear', 'Beng Mealea'], certa: 1, exp: 'Banteay Srei was founded by a Brahmin, Yajnavaraha.' },
  { p: 'How many hospitals do the inscriptions attribute to Jayavarman VII?', op: ['10', '52', '102', '502'], certa: 2, exp: 'The inscriptions speak of 102 hospitals and 121 rest houses; the real number that functioned is debated.' },
  { p: 'When did the Frenchman Henri Mouhot visit Angkor?', op: ['1560', '1760', '1860', '1960'], certa: 2, exp: 'In 1860; but Angkor had never been “lost”, and the Portuguese friar António da Madalena had been there in 1586.' },
  { p: 'Which religion predominates in Cambodia today, after the Khmer left Hinduism and Mahayana Buddhism?', op: ['Theravada Buddhism', 'Hinduism', 'Islam', 'Christianity'], certa: 0, exp: 'Pali-language Theravada Buddhism took hold from the 13th–14th century.' },
  { p: 'Which explanation for the decline of Angkor has support from tree rings in Vietnam?', op: ['A plague epidemic', 'Prolonged droughts and strong monsoons', 'An earthquake', 'A meteorite impact'], certa: 1, exp: 'Buckley and colleagues (2010) showed droughts in the 14th and early 15th centuries; their exact role is debated.' }
];

export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };
