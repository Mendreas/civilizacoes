// KINGDOM OF AKSUM — full content in English (same structure and image ids as dados.js).
// Dates are approximate; Aksumite chronology is much debated (kings are known mainly from coins and inscriptions).

const visao = [
  { caixa: 'In brief', texto: [
    'The **Kingdom of Aksum** (or Axum) was a powerful state of the Horn of Africa that, between the 1st and 10th centuries AD, dominated what is now northern Ethiopia and Eritrea and controlled much of the Red Sea trade. It had its own port (**Adulis**), its own gold, silver and bronze coinage, its own script (**Ge’ez**) and monuments that still stand today: the **stelae of Aksum**, huge monoliths of granite.',
    'In the 4th century King **Ezana** became a Christian (c. 330) and made his kingdom one of the first Christian states in the world. In the 6th century King **Kaleb** crossed the Red Sea and intervened in Yemen. A Persian prophet of the 3rd century, **Mani**, listed Aksum among the four great kingdoms of the world, alongside Persia, Rome and China. Later, trade changed routes, the kingdom weakened and the centre of power moved south, but the Church, the liturgical language and the royal tradition of Aksum lived on in Ethiopia.'
  ] },
  { img: 'aks-mapa-regiao', leg: 'Orientation map of the Kingdom of Aksum, over present-day borders and names.' },
  { h: 'Where it was' },
  'The heart of the kingdom lay on the **Tigray plateau**, at about 2,100 m above sea level, in northern **Ethiopia**, with the capital, **Aksum**, at the head of a fertile valley. The territory stretched north into **Eritrea** and down to the Red Sea, where the port of **Adulis** stood, near today’s Zula. In the 4th to 6th centuries the Aksumite kings also claimed influence over Nubia, over the lands of the Beja and, across the sea, over parts of southern Arabia (present-day Yemen).',
  'The origin of the name “Aksum” (Aksum in Ge’ez) is uncertain. The language of the kingdom was **Ge’ez**, a Semitic language related to Old South Arabian, which would become the liturgical language of the Ethiopian Church. In trade, **Greek** was also used, the common language of commerce in the eastern Mediterranean and the Red Sea.',
  { img: 'aks-estelas', leg: 'Northern Stelae Park, Aksum.' },
  { h: 'When it existed' },
  'Historians divide the kingdom’s history into phases, with approximate and much-debated dates, because few texts survive and the list of kings rests mainly on coins.',
  { tabela: { cab: ['Phase', 'Approximate dates', 'What marks it'], linhas: [
    ['Proto-Aksum (D’mt and after)', 'c. 8th century BC – 1st century AD', 'Kingdom of D’mt, strongly influenced by South Arabia (Saba); temple of Yeha; then small states on the plateau'],
    ['Rise', 'c. 1st – 3rd century AD', 'Aksum becomes the capital; the *Periplus of the Erythraean Sea* describes Adulis and King Zoskales; first coins, under Endubis (c. 270 – 300)'],
    ['Peak', 'c. 4th – 6th century AD', 'Ezana, conversion to Christianity and the campaign against Kush; stelae; Kaleb and Yemen'],
    ['Decline', 'c. 7th – 10th century AD', 'Loss of Adulis and Red Sea trade; end of coinage; the centre moves south'],
    ['After', 'c. 10th century onward', 'Tradition of Queen Gudit; Zagwe dynasty (Lalibela); “Solomonic” restoration in 1270 (a note: already beyond the scope of this page)']
  ] } },
  { img: 'aks-mapa-imperio', leg: 'Schematic map of the extent attributed to the Kingdom of Aksum in the sixth century, including its intervention in Yemen; approximate boundaries.' },
  { h: 'Who were the Aksumites?' },
  'The Aksumites were a Semitic-speaking people of African culture: highland farmers and traders, descended from local populations who, since the 1st millennium BC, had received immigrants and influences from southern Arabia across the Red Sea. From this mixture grew a culture of its own, with architecture, script and religion that cannot be confused with any other. Their kings used the title **“king of kings”** (*negusa nagast*), because they ruled over other kingdoms and subject peoples.',
  { h: 'Why they matter' },
  { lista: [
    '**World trade:** Aksum linked Roman and Byzantine Egypt, Nubia, Arabia, Persia and India, exchanging gold, ivory and spices for wine, cloth and glass.',
    '**Its own coinage:** it was the first state of sub-Saharan Africa to mint coins, and its coins are found from India to Egypt.',
    '**Christianity:** the conversion of Ezana (c. 330) makes Ethiopia one of the oldest Christian countries; the Ethiopian Orthodox Church descends directly from it.',
    '**Writing:** Ge’ez is one of the few original scripts of Africa and gave rise to today’s scripts of Ethiopia and Eritrea.',
    '**Monuments:** the stelae, palaces and tombs of Aksum have been a UNESCO World Heritage Site since 1980.'
  ] },
  { caixa: 'Aksum today', texto: 'Aksum is today a small town of Tigray, Ethiopia, and the holiest city of the Ethiopian Church. It still has standing stelae, royal tombs and a church, **Our Lady Mary of Zion**, which tradition links to the Ark of the Covenant. The region suffered in the war of 2020-2022; before visiting, check the security situation.' },
  { img: 'aks-cidade-reconstrucao', leg: 'Conjectural reconstruction of Aksum in the fifth century. AI-generated illustration.' }
];

const linha = [
  'This timeline follows the main events. Many Aksumite dates are approximate and debated, because the kings are known mainly from coins and inscriptions; “c.” is used whenever a date is uncertain.',
  { linha: [
    { d: 'c. 8th century BC', t: 'The kingdom of D’mt', x: 'On the Tigray plateau and in Eritrea the kingdom of **D’mt** takes shape, probably with its capital at **Yeha**. Inscriptions in South Arabian script and temples of Sabaean type show the influence of Saba across the Red Sea. It is debated whether Arabian settlers or local elites adopted these customs.' },
    { d: 'c. 700 BC', t: 'The Great Temple of Yeha', x: 'Built of finely dressed stone, the temple of **Yeha** is the oldest standing building in Ethiopia, with walls about 14 m high. It was linked to the cult of **Almaqah**, a South Arabian god.' },
    { d: 'c. 5th century BC', t: 'The end of D’mt', x: 'The kingdom of D’mt disappears, for reasons that are unclear. Centuries of small states on the plateau follow (the “pre-Aksumite” period), with growing culture and trade.' },
    { d: 'c. 1st century AD', t: 'Aksum rises', x: 'Aksum asserts itself as the capital of a kingdom that controls the plateau and the route to the sea. The founding date is debated; the first archaeological evidence of an important city dates from this time.' },
    { d: 'c. AD 40 – 70', t: 'The Periplus of the Erythraean Sea', x: 'A Greek trade guide, the *Periplus of the Erythraean Sea*, describes **Adulis** as the port of Aksum and speaks of King **Zoskales**, “miserly in his ways and grasping for more, but otherwise noble and acquainted with Greek”. The date of the text is debated (between the 1st and early 3rd century).' },
    { d: 'c. 3rd century', t: 'The Adulis inscription and the first coins', x: 'A Greek inscription copied at Adulis (the *Monumentum Adulitanum*) speaks of a king who subdued peoples of Arabia and Nubia. Around 270 – 300 King **Endubis** strikes the first Aksumite coins, in gold, silver and bronze.' },
    { d: 'c. 250 – 276', t: 'Mani and the “four kingdoms”', x: 'The prophet **Mani**, founder of Manichaeism (born in Babylonia), is reported, in texts that quote him, to have said the world had four great kingdoms: Babylon/Persia, Rome, **Aksum** and China. It is a sign of how far Aksum’s fame travelled.' },
    { d: 'c. 320', t: 'Ezana takes the throne', x: 'The young **Ezana** becomes king, under his mother’s regency. His inscriptions, in Ge’ez, Greek and Sabaean, are among the most important sources for the kingdom.' },
    { d: 'c. 330', t: 'Frumentius and the conversion', x: 'The Syrian Christian merchant **Frumentius** (Abba Salama in Ge’ez), who had been the king’s tutor, is consecrated first bishop of Aksum by Athanasius of Alexandria. **Ezana** converts to Christianity. The exact date is debated: it falls between c. 330 and 350.' },
    { d: 'c. 350', t: 'The campaign against Kush', x: 'An inscription of Ezana describes a campaign in the Nile valley against the **Noba** and Meroë. The kingdom of Kush was already in decline; Aksum did not “destroy” it alone.' },
    { d: 'c. 356', t: 'The letter of Constantius II', x: 'The Roman emperor **Constantius II** writes to Ezana and his brother, asking them to replace Frumentius with a bishop of his own theological party. It is the oldest Roman document on Aksumite Christianity.' },
    { d: 'c. 4th century', t: 'The coin with the cross', x: 'Ezana’s coins, which showed the disc and crescent (pagan symbols), come to show the **cross**. It is one of the clearest proofs of the change of religion.' },
    { d: '4th – 5th century', t: 'The Bible in Ge’ez', x: 'Ge’ez comes to be written with vowels (the script becomes an **abugida**), and the Bible is translated into Ge’ez. The dates are debated.' },
    { d: 'c. 480 – 500', t: 'The Nine Saints', x: 'Monks from the Byzantine world and the Near East arrive in the kingdom and found monasteries (one of them **Debre Damo**). Tradition calls them the **Nine Saints**. They spread monasticism and translations.' },
    { d: 'c. 523', t: 'Persecution in Najran', x: 'In Yemen the Jewish king of Himyar, **Dhu Nuwas**, attacks the Christian community of Najran. The Christians ask Byzantium and Aksum for help.' },
    { d: 'c. 525', t: 'Kaleb crosses the Red Sea', x: 'King **Kaleb** (Ella Asbeha) invades Yemen with ships, according to Byzantine sources, and defeats Dhu Nuwas. The date (c. 520 – 530) is debated.' },
    { d: 'c. 525', t: 'Cosmas at Adulis', x: 'The Greek merchant and later monk **Cosmas Indicopleustes** visits Adulis and copies inscriptions, and later describes the kingdom in his *Christian Topography*, a precious source.' },
    { d: 'c. 540 – 570', t: 'Abraha and the rule of Yemen', x: 'The general **Abraha** seizes power in Yemen and governs it in the name of Aksum, or on his own account. An inscription of his records repairs to the Marib dam. Islamic tradition speaks of an expedition of his against Mecca in the “year of the elephant” (c. 570); the date and the account are debated.' },
    { d: 'c. 570 – 575', t: 'The Persians in Yemen', x: 'The Sasanian Persians drive the Aksumites out of Yemen. Aksum loses control of southern Arabia and its influence in the Red Sea.' },
    { d: 'c. 615', t: 'The first hijra', x: 'Followers of **Muhammad**, persecuted in Mecca, take refuge in Aksum with the Christian king (the **Negus**), according to Islamic sources. Tradition gives him the name **Ashama ibn Abjar**, today associated with a king called **Armah**. The identification is debated.' },
    { d: '7th century', t: 'The end of coinage', x: 'The last Aksumite gold coins are struck around 630 – 650 (the date is debated). Arab expansion in Egypt and the Red Sea cuts the trade routes.' },
    { d: '7th – 8th century', t: 'Adulis declines', x: 'The port of **Adulis** loses importance and is abandoned, and the kingdom turns inland. Environmental causes, such as droughts and soil exhaustion, are also studied.' },
    { d: '8th – 9th century', t: 'The centre moves south', x: 'The court and population migrate south, towards the central highlands. Aksum keeps its prestige as the city of coronation and of the Church.' },
    { d: 'c. 940 – 960 (tradition)', t: 'Queen Gudit', x: 'Ethiopian tradition tells that a queen, **Gudit** (Yodit), burned churches and killed kings in Aksum. Historians debate whether she existed, when she lived and whether she was a pagan, Jewish or other ruler. There are signs of crisis and destruction in this period, but the cause is unknown.' },
    { d: 'c. 1137 – 1270', t: 'After Aksum (a note)', x: 'The **Zagwe** dynasty rules from Roha, later **Lalibela**, where it has the famous churches cut into the rock. In 1270 **Yekuno Amlak** begins the “Solomonic” dynasty, which claims descent from King Solomon and the Queen of Sheba, linking itself to Aksum. This already belongs to the Ethiopian Empire.' }
  ] },
  { img: 'aks-yeha-templo', leg: 'Great Temple of Yeha, around 700 BC.' },
  { img: 'aks-yeha-inscricao', leg: 'Blocks with Sabaean inscriptions from Yeha, in the collection beside Abba Afse church.' },
  { img: 'aks-moeda-endubis', leg: 'Gold coin of Endubis, with the Greek legend ENDUBIS BASILEUS.' },
  { img: 'aks-pedra-ezana', leg: 'Ezana Stone, trilingual inscription.' },
  { img: 'aks-frumencio', leg: 'Ezana listens to Frumentius in the fourth century; imagined scene. AI-generated illustration.' },
  { img: 'aks-kaleb-travessia', leg: 'Red Sea crossing during Kaleb’s campaign, around 525; conjectural reconstruction. AI-generated illustration.' },
  { img: 'aks-marib', leg: 'Remains of the ancient Marib Dam, Yemen.' },
  { img: 'aks-cosmas', leg: 'World map in a medieval copy of Cosmas’s Christian Topography, Vatican Library, Vat. gr. 699, folio 40v.' }
];

const mapa = [
  'The kingdom of Aksum was above all a highland kingdom with a link to the sea. The main cities and archaeological sites are today in Ethiopia, Eritrea and, in more disputed cases, Yemen.',
  { tabela: { cab: ['Site', 'Location today', 'What it is known for'], linhas: [
    ['Aksum', 'Tigray, Ethiopia', 'Capital; stelae, royal tombs, palaces, church of Mary of Zion'],
    ['Adulis', 'Near Zula, Eritrea', 'Main port of the kingdom; trade with Egypt, Arabia and India'],
    ['Yeha', 'Tigray, Ethiopia', 'Probable capital of D’mt; Great Temple of c. 700 BC'],
    ['Matara', 'Eritrea', 'Ancient town of the plateau, with the Hawulti obelisk and Aksumite ruins'],
    ['Qohaito', 'Eritrea', 'Ancient town of the plateau, with a dam and temples'],
    ['Debre Damo', 'Tigray, Ethiopia', 'Monastery on a mountaintop, reached only by rope; founding linked to Abuna Aregawi, one of the Nine Saints'],
    ['Lalibela', 'Amhara, Ethiopia', 'Rock-cut churches, from the time of the Zagwe (later than Aksum; mentioned only as a note)']
  ] } },
  { h: 'Aksum' },
  'The capital lay in a valley, ringed by hills, more than 2,000 m above sea level. It had **stelae, tombs, palaces, temples, residential quarters and markets**. At its height the city perhaps had tens of thousands of inhabitants, but the figures are very uncertain. Kings were crowned here, and here to this day lies the religious heart of Ethiopia.',
  { img: 'aks-dungur', leg: 'Ruins of Dungur palace, Aksum.' },
  { img: 'aks-palacio', leg: 'Aksumite palace inspired by Dungur, sixth century; conjectural reconstruction. AI-generated illustration.' },
  { h: 'Adulis and the Red Sea' },
  '**Adulis** was the port of Aksum, some 150 km from the plateau by mountain paths. Ships arrived there from Egypt, Arabia and India. The exports were **ivory, gold, tortoiseshell, rhinoceros horn, obsidian, slaves and animals**; the imports were **fine cloth, glass, wine, olive oil, iron and metals, spices**. The city was visited by Cosmas, who described a marble throne and inscriptions there.',
  { img: 'aks-adulis', leg: 'Ruins of Adulis, Eritrea.' },
  { img: 'aks-porto-adulis', leg: 'Adulis harbour in the sixth century; conjectural reconstruction. AI-generated illustration.' },
  { img: 'aks-navio', leg: 'Red Sea merchant ship in the sixth century; conjectural reconstruction. AI-generated illustration.' },
  { h: 'The routes' },
  { lista: [
    '**Red Sea, northward:** Adulis, the ports of Roman and Byzantine Egypt and Alexandria. From there came wine, olive oil and glass.',
    '**Indian Ocean:** voyages, with the monsoons, as far as India and Sri Lanka; Aksum acted as a bridge between the Mediterranean and the East.',
    '**The Nile, northwest:** caravans to Nubia and Kush, gold and ivory.',
    '**South Arabia:** the other side of the sea, close by (about 30 km at the narrowest point, the Bab el-Mandeb strait), with ties of centuries.',
    '**The interior:** paths south, to the lands of gold and ivory, where Aksum had goods brought through middlemen.'
  ] },
  { img: 'aks-mercado', leg: 'Aksum market in the fifth century; imagined scene. AI-generated illustration.' },
  { h: 'Matara, Qohaito and Debre Damo' },
  '**Matara** and **Qohaito**, in Eritrea, show that the kingdom was not only Aksum: they were towns on the plateau, with temples, tombs and water works. **Debre Damo**, a monastery inaccessible to anyone who does not climb the rope, keeps one of the oldest churches in Ethiopia, linked to the Nine Saints.',
  { img: 'aks-matara', leg: 'Aksumite stele of Balaw Kalaw at the Matara (Metera) archaeological site, Eritrea.' },
  { img: 'aks-qohaito', leg: 'Landscape and ruins of Qohaito.' },
  { img: 'aks-debre-damo', leg: 'Building at Debre Damo monastery, Tigray; photograph from 2017.' }
];

const sociedade = [
  { h: '1. Political organisation' },
  'The kingdom was a **hereditary monarchy**. The king, the “king of kings”, ruled with a court of nobles and military chiefs and with governors in the regions, and received **tribute** from subject peoples (for example the Beja and the kingdoms of the Nile). The inscriptions of Ezana and other kings show the king presenting himself as protected by his god and as lord of many peoples. Succession normally passed among members of the royal family.',
  'There are no records of laws or archives as in Mesopotamia. We know of the organisation of the kingdom from **coins, royal inscriptions, foreign accounts** (the *Periplus*, Cosmas, Byzantine and Arab sources) and archaeology.',
  { cit: 'May this please the people.', fonte: 'Greek legend on coins of King Ezana, in the usual translation (4th century AD)' },
  { h: '2. Social classes' },
  { lista: [
    '**The royal family and nobility:** kings, governors and military chiefs, buried in monumental tombs.',
    '**Priests and, later, Christian clergy:** they served the gods and, later, the Church, and enjoyed great prestige.',
    '**Merchants and craftsmen:** they lived in the cities and ports; they worked iron, gold, leather, pottery and glass.',
    '**Peasants and herders:** the majority of the population, with terrace farming and livestock.',
    '**Slaves and prisoners of war:** they existed and were also an export commodity.'
  ] },
  { h: '3. Religion' },
  'Before Ezana the religion was **polytheistic**, of Semitic tradition, with links to South Arabia. The chief god was **Mahrem**, tied to war and the king; they also worshipped **Astar** (god of the sky), **Beher** (sea) and **Medr** (earth). The kings called themselves sons of Mahrem.',
  { tabela: { cab: ['God', 'Domain', 'Notes'], linhas: [
    ['Astar', 'Sky', 'Related to the South Arabian god Athtar; symbol: the disc and crescent'],
    ['Mahrem', 'War, protector of the king', 'Kings considered themselves his “sons”; equated by the Greeks with Ares'],
    ['Beher', 'Sea', 'Mentioned in inscriptions'],
    ['Medr', 'Earth', 'Mentioned in inscriptions'],
    ['Almaqah', 'South Arabian moon god', 'Worshipped at Yeha and in D’mt, before Aksum']
  ] } },
  'Around 330 the conversion of **Ezana** changed the state. The new faith spread first through the cities and the court, and only slowly in the countryside. The church of Aksum was tied to the Coptic patriarchate of Alexandria, which sent the bishops. At the end of the 5th century the **Nine Saints** strengthened monasticism and translations.',
  { img: 'aks-cruz', leg: 'Ethiopian bronze processional cross, twelfth century, Walters Art Museum, 54.2889; Christian tradition after the Kingdom of Aksum.' },
  { caixa: 'The Ark of the Covenant (tradition)', texto: 'The church of **Our Lady Mary of Zion**, in Aksum, claims to keep the **Ark of the Covenant**, brought from Jerusalem by **Menelik I**, the son tradition gives to King Solomon and the Queen of Sheba (an account in the *Kebra Nagast*, an Ethiopian text of the 14th century). **This is legend and religious tradition:** no independent researcher has seen the Ark, and only a guardian monk may enter the chapel.' },
  { h: '4. The stelae and architecture' },
  'The **stelae of Aksum** are granite monoliths carved in the form of multi-storey buildings, with windows, beams and false doors. They marked the **tombs** of kings and nobles, and some had a disc at the top. They were quarried about 4 km away, dragged and raised, by techniques still debated.',
  { img: 'aks-estela-grande', leg: 'Fallen Great Stele, Aksum.' },
  { img: 'aks-estela-ezana', leg: 'Stele no. 3, traditionally called King Ezana’s Stele, Aksum.' },
  { img: 'aks-obelisco-roma', leg: 'Obelisk of Aksum in Piazza di Porta Capena, Rome, during the parade of 2 June 2002.' },
  { img: 'aks-erguer-estela', leg: 'Transport and preparation of a stele in Aksum, fourth century; hypothetical method. AI-generated illustration.' },
  'The stelae stand above underground chambers, **royal tombs**. The largest, the **Great Stele**, fell — perhaps during construction, perhaps afterwards — and lies broken in pieces. The **stele of Ezana** still stands.',
  { img: 'aks-tumba-porta', leg: 'Tomb of the False Door, Aksum.' },
  { img: 'aks-tumba-reconstrucao', leg: 'Illustrative cutaway of an Aksum royal tomb, fourth century; conjectural reconstruction, not a technical plan. AI-generated illustration.' },
  'Aksumite architecture used **dressed stone with timber**, in alternating layers, in a technique known as “**monkey heads**” (the ends of the beams project from the wall). This style appears in the palaces, the churches and, later, in Ethiopian churches.',
  { img: 'aks-tronos', leg: 'Coronation seat at Aksum: engraving by John Greig after Henry Salt, published in 1809.' },
  { h: '5. Economy and coinage' },
  'The economy rested on **agriculture** (barley, wheat, sorghum, teff and other cereals, with terraces and ox-drawn ploughs), on **herding** and on **trade**. The kingdom levied dues at ports and on caravans.',
  'Aksum struck **gold, silver and bronze coins**, with inscriptions in **Greek** (the gold ones, used in international trade) and later in Ge’ez. It was the first state of sub-Saharan Africa to do so, and the coins turn up in Egypt, Yemen and India. Ezana’s coins changed from the disc and crescent to the cross.',
  { img: 'aks-moeda-ezana', leg: 'Gold coin of Ezana with crosses, British Museum, 1921,0316.1.' },
  { img: 'aks-moeda-kaleb', leg: 'Silver coin of Kaleb, with busts and crosses; photograph by Classical Numismatic Group.' },
  { h: '6. Writing' },
  '**Ge’ez** was first written with letters of the South Arabian alphabet, consonants only. In the 4th century **vowel signs** were added, creating an **abugida**, in which each sign stands for a consonant plus a vowel. This system is the basis of today’s scripts of Ethiopia and Eritrea (Amharic, Tigrinya). The first known inscription in vocalised Ge’ez dates from the time of Ezana.',
  { img: 'aks-geez-manuscrito', leg: 'Ethiopian manuscript of the Miracles of Jesus, in Ge’ez.' },
  { img: 'aks-escribas', leg: 'Scribes copying parchment manuscripts in Aksum, fifth century; imagined scene. AI-generated illustration.' },
  { h: '7. Home and daily life' },
  'The houses of the elite were multi-storey buildings of stone and timber, with courtyards; those of the peasants were simpler, of stone or mud. People ate **bread, porridge and cereal stews**, with beef, mutton and goat, honey and fruit. They drank grain beer and mead. Pottery was made on wheels and decorated, and imported glass was also used.',
  { img: 'aks-quotidiano', leg: 'Everyday life in an Aksumite house, fifth century; imagined scene. AI-generated illustration.' },
  { img: 'aks-ceramica', leg: 'Anthropomorphic heads from ceramic vessels excavated at Dungur, sixth–eighth centuries; National Museum of Ethiopia.' },
  { h: '8. Clothing' },
  'People dressed in **cotton and wool cloth**, woven locally, in cloaks and tunics. Kings and nobles wore imported fine fabrics, gold jewellery, necklaces and bracelets, and crowns. The images on the coins show the kings with a crown, in heavy fabrics and often with a headcloth.',
  { h: '9. Music, games and cultural life' },
  'Tradition credits **Yared**, of the 6th century, with creating Ethiopian liturgical chant; it is legend and history mixed, but the music of the Ethiopian Church descends in part from that time. There were drums, sistra, trumpets and lyres. Board games are also known, and the stones with cup-holes for games in Aksum are a sign of this.',
  { h: '10. Science and technology' },
  { lista: [
    '**Metallurgy:** iron, copper and gold, with local techniques; the coins and jewellery show great mastery.',
    '**Stone engineering:** quarrying, transport and raising of monoliths of hundreds of tonnes.',
    '**Hydraulics:** dams and reservoirs, such as the one at Qohaito, to store rainwater.',
    '**Navigation:** the boats of the Red Sea, which depended on the monsoons and knowledge of the winds.'
  ] },
  { h: '11. War' },
  'The army was **infantry, with spears, bows and shields**, with cavalry and, by sea, a fleet able to carry troops to Yemen. The kings recorded their campaigns in inscriptions: against the **Beja**, against the **Noba**, and against Yemen. The sources are mainly the kings themselves and the Byzantine chroniclers, so the figures for dead and prisoners should be read with caution.'
];

const personalidades = [
  'Of the Aksumite kings only a few names are known, from coins, inscriptions and foreign accounts. The figures below are real, and the traditions around them are marked as such.',
  { h: 'Zoskales (c. 1st century AD)' },
  'King of Aksum mentioned in the *Periplus of the Erythraean Sea*, described as knowing Greek and strict in business. Some historians try to link him to a king on the traditional lists, without consensus.',
  { h: 'Endubis (c. 270 – 300)' },
  'The first king of Aksum to strike coins, in gold, silver and bronze. His coin shows the king and Greek inscriptions. Aksum’s trade now had a currency of its own.',
  { h: 'Ezana (c. 320 – 360)' },
  'The most famous king of Aksum. He came to the throne young, under his mother’s regency. He was a military leader and a builder, and left inscriptions in Ge’ez, Greek and Sabaean. He embraced Christianity c. 330 (the date is debated), put the cross on the coins, and campaigned on the Nile against the Noba. In the Ethiopian Church he is a saint.',
  { h: 'Frumentius (Abba Salama) (4th century)' },
  'A Syrian Christian merchant from Tyre, captured and taken to Aksum with a brother, **Edesius**. He became the king’s adviser, and after asking Alexandria for a bishop he was himself consecrated by **Athanasius** as the first bishop of Aksum. The story comes from Rufinus, a historian of the 4th-5th century, who heard it from Edesius. He is called “Abba Salama”, the “father of peace”.',
  { h: 'Mani (c. 216 – 274 or 277)' },
  'Persian prophet, founder of Manichaeism. According to Manichaean texts, he saw Aksum as one of the four great kingdoms of the world. He did not visit Aksum: the reference only shows the fame of the kingdom.',
  { h: 'Cosmas Indicopleustes (6th century)' },
  'A Greek merchant of Alexandria who became a monk. He visited Adulis c. 525 and copied an inscription, the *Monumentum Adulitanum*. He wrote the *Christian Topography*, with a strange view of the world (flat, like the tent of the Tabernacle), but with unique information about Aksum.',
  { h: 'Kaleb (Ella Asbeha) (c. 510 – 540)' },
  'King of Aksum known for crossing the Red Sea to fight the Himyarite king **Dhu Nuwas**, who had persecuted the Christians of Najran (c. 523). He was backed by Byzantium. In the Ethiopian Church he is a saint; tradition says that at the end of his life he retired to a monastery and sent his crown to Jerusalem (legend).',
  { h: 'Abraha (6th century)' },
  'An Aksumite general who seized power in Yemen and ruled it until c. 570, repairing the Marib dam (inscription). Islamic tradition ascribes to him the expedition against Mecca with elephants. The authenticity and date of that account are debated.',
  { h: 'The Nine Saints (c. 480 – 530, tradition)' },
  'Monks of Byzantine or Syrian origin who, according to tradition, founded monasteries and translated the Bible: **Pantalewon, Garima, Aftse, Guba, Aleph, Yem’ata, Liqanos, Tsehma and Afe**, among others. **Abuna Aregawi** (Zemikael) is linked to Debre Damo. Their names and dates come from late traditions.',
  { h: 'Yared (6th century, tradition)' },
  'A composer and priest to whom Ethiopian tradition attributes the invention of liturgical chant. He is said to have listened to three birds singing. It is legend and tradition, but his name is central to the music of the Ethiopian Church.',
  { h: 'Armah (Ashama ibn Abjar) (early 7th century)' },
  'A king whom Muslim sources know as **Ashama ibn Abjar**, the Negus who welcomed the first Muslims fleeing Mecca (c. 615). The link with a coin king named Armah is probable, but debated.',
  { h: 'Gudit (Yodit) (tradition)' },
  'A queen spoken of in Ethiopian traditions and late texts. She is said to have destroyed churches and reigned about 40 years, around 960. Her existence, origin and date are much debated; she may represent a real crisis of the 10th century.'
];

const legado = [
  { h: 'What they left us' },
  { lista: [
    '**Ethiopian Christianity:** Aksum is at the origin of the Ethiopian Orthodox Church, one of the oldest in the world, with its rites, liturgical Ge’ez and calendar.',
    '**Writing:** the Ge’ez abugida is the basis of the scripts of Ethiopia and Eritrea.',
    '**Coinage and trade:** the first state of sub-Saharan Africa to have its own currency and to join Indian Ocean trade.',
    '**Monuments:** the stelae and tombs, one of the greatest stone-engineering achievements of the ancient world.',
    '**Royal tradition:** Ethiopian kings up to the 20th century claimed a link to Aksum and the Queen of Sheba.'
  ] },
  { h: 'Art and architecture' },
  'Aksumite art is above all **architecture, coinage and metalwork**. From Aksumite churches survive the **basilica** plan, the technique of timber beams and many motifs that continue in Ethiopian churches. The **Garima Gospels** are among the oldest Christian manuscripts known; radiocarbon tests give a date between c. 330 and 650, but they are debated.',
  { img: 'aks-garima', leg: 'Saint Mark the Evangelist, illumination from the Garima Gospels.' },
  { img: 'aks-sao-sion', leg: 'New Church of Our Lady Mary of Zion, Aksum, a twentieth-century building.' },
  { h: 'Rediscovery' },
  'Europeans learned of Aksum through Portuguese travellers of the 16th century (such as **Francisco Álvares**), who described the stelae. In 1893 the British explorer **Theodore Bent** excavated there, and in 1906 the **German expedition** of Enno Littmann studied the inscriptions and ruins. In 1937 the Italian fascist government, after the occupation, took the **obelisk of Aksum** to Rome. It was returned in 2005 and re-erected in 2008. UNESCO inscribed Aksum on the World Heritage List in 1980.',
  { h: 'Where to visit' },
  { lista: [
    '**Aksum, Ethiopia:** the stelae field, the archaeological museum, churches, tombs and the palace of Dungur.',
    '**Yeha, Ethiopia:** the Great Temple, to the northeast of Aksum.',
    '**Debre Damo and Abba Garima, Ethiopia:** the ancient monasteries.',
    '**Adulis, Matara and Qohaito, Eritrea:** Aksumite sites, with harder access.',
    '**Lalibela, Ethiopia:** rock-cut churches, of a later time (Zagwe, 12th – 13th centuries).',
    '**Museums:** the National Museum of Ethiopia, in Addis Ababa, and coin collections in the British Museum and elsewhere.'
  ] },
  { img: 'aks-lalibela', leg: 'Rock-hewn Church of Saint George, Lalibela; medieval heritage after the Kingdom of Aksum.' },
  { caixa: 'A note on sources and traditions', texto: 'Much of the history of Aksum is known from few sources: the coins, the inscriptions of Ezana and Kaleb, the *Periplus*, Cosmas and the Byzantine and Arab chronicles. Ethiopian traditions (the Ark, the *Kebra Nagast*, Gudit, the Nine Saints) are important but were written long after the events. In this text they are marked as **tradition** or **legend**; the “c.” dates are approximate and debated.' }
];

const quiz = [
  { p: 'What was the name of the main port of the Kingdom of Aksum on the Red Sea?', op: ['Alexandria', 'Adulis', 'Aden', 'Berenice'], certa: 1, exp: 'Adulis, near today’s Zula in Eritrea, was the kingdom’s great port.' },
  { p: 'Which king of Aksum converted to Christianity around 330?', op: ['Kaleb', 'Endubis', 'Ezana', 'Zoskales'], certa: 2, exp: 'Ezana converted, and his coins came to bear the cross.' },
  { p: 'Who was the first bishop of Aksum?', op: ['Athanasius', 'Frumentius (Abba Salama)', 'Cosmas', 'Yared'], certa: 1, exp: 'Frumentius was consecrated by Athanasius of Alexandria.' },
  { p: 'Which script gave rise to the modern scripts of Ethiopia?', op: ['Hieroglyphs', 'Cuneiform', 'Ge’ez', 'Greek'], certa: 2, exp: 'Ge’ez, a Semitic script that gained vowels, is the basis of today’s scripts.' },
  { p: 'What are the stelae of Aksum?', op: ['Watchtowers', 'Granite monoliths linked to tombs', 'Columns of Greek temples', 'Statues of kings'], certa: 1, exp: 'They are granite monoliths carved like multi-storey buildings, linked to tombs.' },
  { p: 'About how tall was the obelisk of Aksum taken to Rome in 1937?', op: ['10 m', '24 m', '60 m', '100 m'], certa: 1, exp: 'It was about 24 m tall and 160 tonnes. It returned to Aksum in 2005.' },
  { p: 'Which prophet included Aksum among the four great kingdoms of the world?', op: ['Mani', 'Muhammad', 'Zoroaster', 'Buddha'], certa: 0, exp: 'According to Manichaean texts, Mani named Aksum among the four kingdoms.' },
  { p: 'Which Greek text of the 1st century describes the port of Adulis and King Zoskales?', op: ['The Iliad', 'The Periplus of the Erythraean Sea', 'The Christian Topography', 'Strabo’s Geography'], certa: 1, exp: 'The Periplus of the Erythraean Sea is a Greek trade guide (its exact date is debated).' },
  { p: 'Who wrote the “Christian Topography” after visiting Adulis?', op: ['Procopius', 'Cosmas Indicopleustes', 'Herodotus', 'Rufinus'], certa: 1, exp: 'Cosmas visited Adulis c. 525 and copied inscriptions.' },
  { p: 'Which king of Aksum crossed the Red Sea to intervene in Yemen, around 525?', op: ['Ezana', 'Endubis', 'Kaleb', 'Armah'], certa: 2, exp: 'Kaleb fought Dhu Nuwas, who had persecuted the Christians of Najran.' },
  { p: 'What was the kingdom of D’mt?', op: ['A kingdom of Sudan', 'A kingdom before Aksum, with South Arabian influence', 'A Greek colony', 'A kingdom of Egypt'], certa: 1, exp: 'D’mt (8th – 5th centuries BC) probably had its capital at Yeha.' },
  { p: 'Who were the Nine Saints?', op: ['Kings of Aksum', 'Monks who spread monasticism in Ethiopia', 'Greek merchants', 'Generals of Kaleb'], certa: 1, exp: 'According to tradition, they came from the Near East at the end of the 5th century.' },
  { p: 'What does tradition say is kept in the church of Mary of Zion in Aksum?', op: ['The Holy Grail', 'The Ark of the Covenant', 'The crown of Ezana', 'The throne of the Queen of Sheba'], certa: 1, exp: 'It is a religious tradition: no independent person has seen it.' },
  { p: 'Roughly when did Aksum stop minting coins?', op: ['2nd century', '4th century', '7th century', '12th century'], certa: 2, exp: 'The last coins date from c. 630 – 650, with the end of Red Sea trade.' },
  { p: 'Who was Queen Gudit?', op: ['A historical queen of Egypt', 'A figure of tradition, linked to destruction in Aksum in the 10th century', 'The mother of Ezana', 'The Queen of Sheba'], certa: 1, exp: 'She is a figure of Ethiopian tradition, with debated existence and dates.' }
];

export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };
