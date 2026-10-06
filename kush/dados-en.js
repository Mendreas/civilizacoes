// KUSH AND NUBIA — full English content. Same structure and same image slots as the Portuguese version (dados.js).
// Dates are approximate; Egypt uses the “middle chronology”. BC = before Christ. Many Nubian dates (especially of Meroitic kings) are debated and flagged as such.

const visao = [
  { caixa: 'In brief', texto: [
    '**Kush** was the name the Egyptians gave to the great African kingdom that grew up along the Nile between the first and sixth cataracts, in what is now southern Egypt and northern **Sudan**. The wider region, **Nubia**, saw some of the earliest complex societies in Africa. It was a neighbour, a trading partner, a target of conquest and, in the end, a conqueror of Egypt.',
    'The history of Kush has four great moments: the powerful **kingdom of Kerma** (c. 2500 – 1500 BC), which rivalled the pharaohs; the **Egyptian occupation** of the New Kingdom (c. 1500 – 1070 BC); the **kingdom of Napata**, whose kings, among them **Piye**, **Shabaka** and **Taharqa**, ruled Egypt as the 25th Dynasty (the so-called “Black Pharaohs”); and the **kingdom of Meroë** (c. 270 BC – c. AD 350), famous for iron, pyramids, a script of its own and warrior queens, the **kandakes**.'
  ] },
  { img: 'kus-mapa-nubia', leg: 'Map of Nubia and the Nile Valley with cataracts and sites' },
  { h: 'Where it was' },
  'The Nile crosses Nubia in a series of **six cataracts**, stretches of rapids and rocks that make navigation difficult. **Lower Nubia** lies between the first cataract (Aswan) and the second, today largely under Lake Nasser; **Upper Nubia** stretches from the second cataract southwards, and Kush, in its widest sense, reached the area where the Blue and White Niles meet (Khartoum) and the “Island of Meroë”, the land between the Nile and the Atbara. It is a region of desert, with a narrow strip of fertile land by the river and, further south, savannah with summer rains, which explains the importance of cattle and, later, of rain-fed farming and water reservoirs.',
  'The name **Kush** (Egyptian *Ksh*, Hebrew *Kush*) appears in Egyptian texts from the Middle Kingdom. The Greeks called the land **Ethiopia** (“burnt face”), a name that has nothing to do with present-day Ethiopia. The name **Nubia** is later and its origin is debated: it may come from the Egyptian word *nub*, “gold” (the region was very rich in gold), or from the **Noba** people mentioned by classical authors. The Egyptians also called Lower Nubia **Wawat**, and the whole region the “Land of the Bow” (*Ta-Seti*), because of its archers.',
  { img: 'kus-nilo-cataratas', leg: 'Nile cataract and granite rocks near Aswan' },
  { h: 'When it existed' },
  'The dates below are approximate and the chronology of some phases is debated.',
  { tabela: { cab: ['Phase', 'Approximate dates', 'What marks it'], linhas: [
    ['Prehistory and the A-Group', 'c. 8000 – 3000 BC', 'Herders, very early pottery, first chiefdoms in Lower Nubia (A-Group), in contact with Upper Egypt'],
    ['C-Group and early Kerma', 'c. 2500 – 1750 BC', 'Lower Nubian herders (C-Group) and a first kingdom at Kerma; Egyptian trading expeditions'],
    ['Kingdom of Kerma (Classic)', 'c. 1750 – 1500 BC', 'Strong kingdom with a city, a deffufa and royal tombs; rival of Egypt and ally of the Hyksos'],
    ['Egyptian rule', 'c. 1500 – 1070 BC', 'New Kingdom pharaohs conquer Nubia as far as Napata; temples, viceroys and gold'],
    ['Dark age', 'c. 1070 – 850 BC', 'Egypt loses Nubia; sources are scarce; local chiefdoms form'],
    ['Napata and the 25th Dynasty', 'c. 850 – 593 BC', 'Kingdom of Kush with its capital at Napata; Kushite kings rule Egypt (c. 744 – 656 BC)'],
    ['Late Napata → Meroë', 'c. 593 – 270 BC', 'Kings are still buried at Nuri; the court gradually shifts to Meroë'],
    ['Kingdom of Meroë', 'c. 270 BC – c. AD 350', 'Capital at Meroë; iron, pyramids, Meroitic script, kandakes; conflict with Rome in 25 – 22 BC'],
    ['Post-Meroitic and Christianisation', 'c. AD 350 – 650 and later', 'Fall of Meroë; kingdoms of Nobatia, Makuria and Alodia, Christianised in the 6th century']
  ] } },
  { h: 'Who were the Kushites?' },
  'The Kushites were African peoples of the Nile valley, with their own language, religion and customs, who over the centuries absorbed a great deal of Egyptian culture without ceasing to be distinct. They spoke languages that reach us poorly documented: the language of Meroë, **Meroitic**, is still not well understood and its linguistic family is debated (one hypothesis links it to the Eastern Sudanic branch of Nilo-Saharan, like today’s Nubian languages, but this is not proven). For a long time European archaeologists treated Kush as a mere “Egyptian colony” or a reflection of Egypt; today it is recognised as a civilisation with a history of its own.',
  { h: 'Why they matter' },
  { lista: [
    '**The African pharaohs:** for about a century the kings of Kush ruled Egypt, restored temples and the pyramid tradition, and faced the Assyrians.',
    '**More pyramids than Egypt:** the roughly 250 pyramids of Sudan, smaller and steeper, outnumber those of Egypt (counts vary).',
    '**Iron and trade:** Meroë was one of the great metalworking centres of the ancient world and a trading bridge between tropical Africa, Egypt and the Mediterranean.',
    '**Powerful queens:** the kandakes, such as **Amanirenas** and **Amanishakheto**, are rare in antiquity, and one of them went to war with Augustus.',
    '**A script of their own:** Meroitic is one of the few indigenous writing systems of ancient sub-Saharan Africa; it can be read (the sounds are known), but very little is understood.',
    '**A history still being recovered:** much of what we know is recent, and Sudanese archaeology is still revising everything.'
  ] },
  { caixa: 'Kush today', texto: 'The Kushite sites lie in **Sudan**, in Upper Egypt and in Egyptian Nubia. UNESCO World Heritage Sites include the **Pyramids of Meroë** (Island of Meroë, 2011), **Gebel Barkal and the sites of the Napatan region** (2003) and the **Nubian Monuments from Abu Simbel to Philae** (1979). Since April 2023 the war in Sudan has put museums and sites at risk; the situation changes quickly, so check the news before any trip.' },
  { img: 'kus-meroe-piramides', leg: 'Pyramids of Meroë’s North Cemetery, Sudan' }
];

const linha = [
  'This timeline follows the main events in the history of Kush and Nubia. Dates are approximate, and the oldest ones, like those of the Meroitic kings, are debated.',
  { linha: [
    { d: 'c. 8000 BC', t: 'Pottery and herders in Sudan', x: 'On the banks of the Nile, in the Khartoum region, communities of hunters, fishers and foragers make decorated pottery, **among the oldest in Africa**. Later, cattle herders develop complex rituals, such as the stone circles of **Nabta Playa**, in the desert west of Abu Simbel (c. 5000 BC).' },
  ] },
  { img: 'kus-cena-pastores-gado', leg: 'Lower Nubian cattle herders, c. 2000 BC; conjectural reconstruction. AI-generated illustration.' },
  { linha: [
    { d: 'c. 3800 – 3100 BC', t: 'The A-Group', x: 'In Lower Nubia, the “A-Group culture” shows chiefdoms with rich tombs, fine pottery and intense trade with Upper Egypt. The famous **Qustul incense burner** (Chicago) bears images reminiscent of Egyptian royal iconography: some see in it proof of an early Nubian kingship, but the reading is much debated.' },
    { d: 'c. 3100 – 3000 BC', t: 'Egypt unifies and the A-Group vanishes', x: 'With the formation of the pharaonic state, Lower Nubia loses population and the A-Group disappears from the archaeological record. A relief at **Gebel Sheikh Suleiman** (near the second cataract) shows an Egyptian campaign, perhaps from the time of the 1st Dynasty; the interpretation is debated.' },
    { d: 'c. 2500 BC', t: 'The kingdom of Kerma is born', x: 'At **Kerma**, near the third cataract, a chiefdom forms that will grow into a kingdom. Its early phase lasts until c. 2050 BC; the Classic phase runs from c. 1750 to 1500 BC. It is one of the first large cities of sub-Saharan Africa.' },
    { d: 'c. 2400 – 2250 BC', t: 'The merchants of the Old Kingdom', x: 'The Egyptian **Harkhuf**, governor of Aswan under Pepi II, makes several expeditions to Yam (probably in Upper Nubia), bringing back ebony, incense, skins and exotic animals. Meanwhile, in Lower Nubia, herders of the **C-Group** occupy the valley and trade with Egypt.' },
    { d: 'c. 1870 BC', t: 'The fortresses of Senusret III', x: 'In the Middle Kingdom the pharaoh **Senusret III** builds a chain of fortresses as far as **Semna** (second cataract) and, on a boundary stela, forbids Nubians to pass further north without permission. Egyptian texts call Kush “wretched Kush” and see it as a threat.' },
    { d: 'c. 1750 – 1550 BC', t: 'The peak of Kerma', x: 'Kerma, with its great **deffufa** (a mud-brick building), temple area and royal tombs with signs of human sacrifice, controls Nubia almost to the first cataract. When Egypt fragments, the kings of Kerma are in contact with the **Hyksos**, and a stela of the pharaoh **Kamose** (c. 1550 BC) says he intercepted a message from the Hyksos king to the “ruler of Kush”.' }
  ] },
  { img: 'kus-cena-funeral-kerma', leg: 'Royal funeral at Kerma, c. 1650 BC; conjectural interpretation. AI-generated illustration.' },
  { linha: [
    { d: 'c. 1500 BC', t: 'The pharaohs destroy Kerma', x: 'The 18th Dynasty pharaohs, **Ahmose**, **Amenhotep I** and above all **Thutmose I** (c. 1500 BC), conquer Nubia as far as the fourth cataract. Kerma is sacked, loses its status as capital, and the region is administered by a **“King’s Son of Kush”** (viceroy) based at Aniba.' },
    { d: 'c. 1450 – 1260 BC', t: 'Temples and gold in the New Kingdom', x: 'Egypt exploits the gold of the eastern desert and covers Nubia with temples: **Soleb** (Amenhotep III), **Jebel Barkal** (where Thutmose III marks the empire’s southern boundary at Napata) and, in the time of **Ramesses II** (c. 1264 – 1244 BC), **Abu Simbel**. Many Nubians adopt Egyptian customs, names and gods.' },
    { d: 'c. 1070 BC', t: 'Egypt loses Nubia', x: 'At the end of the New Kingdom Egypt breaks apart and no longer controls Kush. The next 200 years are poorly documented: what is known is that in the 9th century BC a local elite settles at **El-Kurru**, near Napata, and begins burying its dead in tumuli that will evolve into pyramids.' },
    { d: 'c. 760 BC', t: 'Kashta reaches Thebes', x: 'King **Kashta** extends Kushite power to Upper Egypt. His daughter **Amenirdis I** is adopted as “God’s Wife of Amun” at Thebes, an office of great political and religious power.' },
    { d: 'c. 728 – 725 BC', t: 'Piye’s campaign', x: 'King **Piye** marches north against a coalition of Delta princes led by **Tefnakht** of Sais. He takes Hermopolis and Memphis, is received at Heliopolis, and the princes submit. The campaign was recorded on the **Great Victory Stela**, found at Jebel Barkal. It marks the start of the 25th Dynasty (exact dates are debated).' }
  ] },
  { img: 'kus-piye-estela', leg: 'Victory Stela of Piye, reproduction published by Auguste Mariette in 1872; original in the Egyptian Museum, Cairo, JE 48862.' },
  { img: 'kus-cena-piye-menfis', leg: 'Piye and the Kushite army before Memphis, c. 728 BC; imagined likeness and conjectural reconstruction. AI-generated illustration.' },
  { linha: [
    { d: 'c. 721 – 707 BC', t: 'Shabaka unifies Egypt', x: '**Shabaka** settles at Memphis, rules the whole of Egypt and restores monuments. He had an ancient religious text copied onto a stone, the **Shabaka Stone**, now in the British Museum.' },
    { d: '701 BC (debated)', t: 'The Kushites and Assyria', x: 'The Assyrian king **Sennacherib** besieges Jerusalem, and the Bible (2 Kings 19) mentions an army of “Tirhakah king of Ethiopia [Kush]” coming to help. The chronology is disputed: Taharqa would then have been young and would only reign some years later.' },
    { d: '690 – 664 BC', t: 'Taharqa', x: '**Taharqa** reigns from Memphis, builds and restores at Karnak, Kawa and Jebel Barkal, and brings prosperity (generous Nile floods). Assyria, however, does not give up on Egypt.' }
  ] },
  { img: 'kus-taharqa-esfinge', leg: 'Sphinx of Taharqa from Kawa, British Museum' },
  { linha: [
    { d: '671 – 663 BC', t: 'The Assyrians invade Egypt', x: '**Esarhaddon** takes Memphis in 671 BC; in 664/663 BC **Ashurbanipal** drives out **Tantamani** and sacks Thebes. The Kushites withdraw, and in 656 BC **Psamtik I** reunifies Egypt, with a Saite power that ends up autonomous.' },
    { d: 'c. 593 BC', t: 'Psamtik II’s expedition', x: '**Psamtik II** invades Nubia with Egyptian troops and Greek, Carian and Phoenician mercenaries. The mercenaries carved their names on the colossi of **Abu Simbel**. The expedition probably reached Napata, and king **Aspelta** settles further south, perhaps at Meroë (the shift was gradual, and the reasons are debated).' },
    { d: 'c. 270 BC', t: 'Kings come to be buried at Meroë', x: 'Under **Arkamani** (Greek *Ergamenes*) royal burials move from Nuri to Meroë. A story in Diodorus Siculus says he massacred the priests of Napata who ruled over the kings; it is not known whether this is fact or legend.' },
    { d: '2nd c. BC – 1st c. AD (debated)', t: 'The first ruling queens', x: 'Traditionally **Shanakdakhete** (c. 170 BC) was named as the first woman to rule Meroë in her own right, but her dating has been revised to around the early 1st century AD and some scholars now give that primacy to **Nahirqo**; the question is open.' },
    { d: '25 – 22 BC', t: 'The war against Rome', x: 'The kandake **Amanirenas** attacks southern Roman Egypt, takes Syene, Elephantine and Philae, and carries off a bronze head of Augustus. The prefect **Petronius** responds, sacking Pselchis and Napata. Peace is negotiated at Samos in 21/20 BC, on good terms for Kush.' }
  ] },
  { img: 'kus-augusto-cabeca', leg: 'Bronze head of Augustus found at Meroë, British Museum' },
  { linha: [
    { d: 'c. AD 1 – 50', t: 'Natakamani and Amanitore', x: 'The rulers **Natakamani** and **Amanitore** reign in a time of great building: the Lion Temple at Naga, temples at Meroë and Jebel Barkal. It is held to be the high point of Meroë (dates are debated).' },
    { d: '3rd century AD', t: 'The crisis of Meroë', x: 'The kingdom weakens: trade routes shift, the desert peoples (**Blemmyes**) and western peoples (**Noba**) gain strength, and inscriptions dwindle. The last king known by name reigned in the 3rd century AD (debated).' },
    { d: 'c. AD 350', t: 'Axum and the end of Meroë', x: 'King **Ezana** of **Axum** (Ethiopia) campaigns in the Nile valley and records in his texts victories over the **Noba** and the **Kasu** (Kush). Axum’s exact role in the fall of Meroë is debated: the kingdom was already in decline, and the city was abandoned gradually.' }
  ] },
  { img: 'kus-axum-estelas', leg: 'Aksum stelae, Ethiopia' },
  { linha: [
    { d: 'c. AD 350 – 550', t: 'The tombs of Ballana and Qustul', x: 'In Lower Nubia, powerful chiefs are buried in great tumuli with rich imported objects, the so-called “post-Meroitic” or “X-Group” culture.' },
    { d: 'c. AD 540 – 580', t: 'Christianisation', x: 'Missionaries sent from Byzantium (the empress **Theodora** backed the mission of Julian, c. 543) convert the kingdoms of **Nobatia** (capital Faras), **Makuria** (capital Old Dongola) and **Alodia** (capital Soba). Makuria will resist the Arab armies and, in 651/652, sign the **Baqt** treaty with Egypt.' }
  ] }
];

const mapa = [
  'Kush was not a city but a territory with several capitals over the centuries, always along the Nile: **Kerma**, then **Napata** and finally **Meroë**. Besides these there were Egyptian towns in Nubia and later Christian capitals.',
  { tabela: { cab: ['Site', 'Location today', 'Period', 'Known for'], linhas: [
    ['Kerma and Doukki Gel', 'Sudan, third cataract', 'c. 2500 – 1500 BC', 'Capital of the first kingdom; deffufa; royal tombs; “eggshell” pottery'],
    ['Buhen and Semna', 'Lower Nubia (Lake Nasser)', 'Middle and New Kingdoms', 'Egyptian fortresses at the second cataract; now underwater or relocated'],
    ['Soleb', 'Sudan, third cataract', 'c. 1390 BC', 'Temple of Amenhotep III'],
    ['Napata and Jebel Barkal', 'Sudan, near Karima', '15th c. BC – 4th c. AD', 'Sacred mountain of Amun; religious capital of Kush; temples'],
    ['El-Kurru', 'Sudan, near Napata', '9th – 7th c. BC', 'Cemetery of the first Kushite kings, from Kashta to Shabaka'],
    ['Nuri', 'Sudan, near Napata', 'c. 664 – 310 BC', 'Pyramids of Taharqa and about twenty kings; the largest pyramid of Kush'],
    ['Kawa', 'Sudan, Dongola', '14th c. BC – 4th c. AD', 'Temples of Amun, among them that of Taharqa'],
    ['Meroë', 'Sudan, near Shendi', 'c. 800 BC – AD 350', 'Capital of the kingdom; royal city, iron, pyramids'],
    ['Naga', 'Sudan, Butana', '3rd c. BC – 4th c. AD', 'Lion Temple and Hathor Kiosk; Natakamani and Amanitore'],
    ['Musawwarat es-Sufra', 'Sudan, Butana', '3rd c. BC – 4th c. AD', 'The “Great Enclosure”; temple of Apedemak'],
    ['Abu Simbel', 'Egypt, Lake Nasser', 'c. 1264 BC', 'Temples of Ramesses II, relocated in 1964–68'],
    ['Faras (Pachoras)', 'Lower Nubia', '6th – 12th c. AD', 'Christian cathedral with wall paintings now in Warsaw and Khartoum'],
    ['Old Dongola', 'Sudan, middle Nile', '6th – 14th c. AD', 'Capital of Christian Makuria'],
    ['Soba', 'Sudan, near Khartoum', '6th – 16th c. AD', 'Capital of the Christian kingdom of Alodia']
  ] } },
  { h: 'Kerma' },
  'Kerma stands on a fertile plain south of the third cataract. The city had a western **deffufa**, a huge block of mud brick with a chapel on top that still stands about 18 m high, a great wall with towers, houses and workshops. To the east lay the cemetery with **tens of thousands of graves**, among them the royal tombs, covered by earth mounds up to about 90 m across, where the king was buried on a bed, surrounded by many people, possibly sacrificed, and by cattle. At **Doukki Gel**, a few kilometres away, Swiss archaeologists found a cache of monumental statues of Kushite kings of the 7th century BC.',
  { img: 'kus-deffufa-kerma', leg: 'Western Deffufa, Kerma, Sudan' },
  { img: 'kus-cena-kerma-cidade', leg: 'Conjectural reconstruction of Kerma, c. 1650 BC. AI-generated illustration.' },
  { img: 'kus-ceramica-kerma', leg: 'Classic Kerma black-topped beaker, Metropolitan Museum of Art.' },
  { img: 'kus-doukki-gel-estatuas', leg: 'Kushite royal statues from Doukki Gel, Kerma Museum' },
  { h: 'Napata and Jebel Barkal' },
  '**Jebel Barkal** is a sandstone mountain about 100 m high, with a rock pinnacle that the Egyptians saw as the shape of a **cobra** (uraeus) and identified with the birthplace of **Amun**. It was already a sacred place in the time of Thutmose III; at its foot grew **Napata**, with temples of Amun, Mut and Hathor rebuilt by the Kushite kings. Even after the capital moved south, the kings of Meroë were still crowned and consulted the oracle at Napata.',
  { img: 'kus-jebel-barkal', leg: 'Jebel Barkal mountain and pinnacle near Karima' },
  { img: 'kus-cena-napata-templos', leg: 'Napata and the temples of Jebel Barkal, c. 650 BC; conjectural reconstruction. AI-generated illustration.' },
  { h: 'El-Kurru and Nuri' },
  'The first Kushite kings were buried at **El-Kurru**, in stone tumuli that became pyramids with an underground chamber; **Piye** seems to have been the first with a pyramid. After Taharqa, the royal cemetery moved to **Nuri**, where his pyramid, the largest in Kush (about 50 m per side at the base), stands. Kushite pyramids differ from Egyptian ones: they are **much steeper and smaller**, with the burial chamber cut into the ground beneath, and have a small offering chapel against the east face.',
  { img: 'kus-el-kurru', leg: 'Royal cemetery of El-Kurru with ruined pyramids and tumuli' },
  { img: 'kus-nuri-piramides', leg: 'Pyramids of Nuri near the Nile' },
  { h: 'Meroë' },
  'The city of **Meroë** lay on the east bank of the Nile, between the river and the Atbara, in a region with summer rains. The **royal city** had the palace, the temple of Amun, workshop quarters and the so-called **Royal Bath** (function debated) with Hellenistic influences. The city was surrounded by enormous mounds of iron slag. A few kilometres away lie the three great cemeteries with about two hundred pyramids.',
  { img: 'kus-meroe-banhos-reais', leg: 'The so-called Royal Baths of Meroë' },
  { img: 'kus-cena-meroe-cidade', leg: 'Conjectural reconstruction of the royal city of Meroë, 1st century BC. AI-generated illustration.' },
  { h: 'Naga and Musawwarat es-Sufra' },
  'Further east, in the **Butana**, lie two temple complexes. **Naga** has the **Lion Temple** of **Apedemak**, with reliefs of Natakamani and Amanitore, and the **Hathor Kiosk**, in a mixed Egyptian, Greek and Roman style. **Musawwarat es-Sufra** has the **Great Enclosure**, a complex of ramps, courtyards and corridors with reliefs of elephants, whose function is still debated (temple, pilgrimage site, school?). Both show a very distinctive religion, in which the warrior lion-god plays a central role.',
  { img: 'kus-naga-leao', leg: 'Apedemak’s Lion Temple, on the left, and the kiosk at Naqa, Sudan.' },
  { img: 'kus-musawwarat', leg: 'Great Enclosure of Musawwarat es-Sufra' },
  { img: 'kus-soleb-templo', leg: 'Columns of Amenhotep III’s temple at Soleb' },
  { h: 'The routes' },
  'The **Nile** was the great highway, but the cataracts forced goods to be carried overland. Caravans crossed the **eastern desert** to the Red Sea and the **Nubian desert** (the Korosko–Abu Hamed route) to cut across the great bend of the river. By these paths came to Kush, and left it, gold, ivory, ebony, incense, skins, ostrich feathers, cattle and slaves, as well as imported wine, glass and bronze. To the south and south-west, the links to the Sahel and central Africa are still poorly known.'
];

const sociedade = [
  { h: '1. Political organisation' },
  'At **Kerma**, a powerful king ruled with an elite of warriors and priests. In the **kingdom of Napata**, the king was seen as the son of **Amun** and chosen by the god, through an oracle, from within the royal family: the “Election Stela of Aspelta” describes this ceremony (c. 600 – 580 BC). Succession often seems to have passed from brother to brother or to a nephew, although historians debate the rules. **Women of the royal family** carried great weight. At Meroë the **kandake** could be a reigning queen, a king’s mother or a co-ruler, and the title is known from Greek and Roman sources and from Meroitic texts (*kdke*).',
  { h: '2. Social classes' },
  'Written sources are scarce and the picture is incomplete. We can assume a royal and priestly elite, officials, warriors and craftsmen (smiths, potters, goldsmiths), farmers and herders, and people in servitude or slavery, many captured in war. The tombs of Meroë, differing in size and wealth, point to a clear hierarchy; there was also a provincial elite in Lower Nubia, whose governor (*pesto*, a Meroitic term) answered to the king.',
  { h: '3. Religion' },
  'Kushite religion was a mixture of Egyptian beliefs, adopted during and after the occupation, and local gods. **Amun** was the great state god, with an oracular cult at Napata and at Meroë. In the Meroitic period gods of their own gained ground, above all **Apedemak**, the warrior lion-god. It was a religion of temples and offerings, with festivals, processions and oracles.',
  { tabela: { cab: ['God', 'Domain', 'Where prominent'], linhas: [
    ['Amun (of Napata)', 'Supreme god, protector of the king; ram; gave power by oracle', 'Napata, Meroë, Kawa'],
    ['Apedemak', 'Lion-god, warrior, protector of the kingdom (god of Meroë)', 'Naga, Musawwarat, Meroë'],
    ['Sebiumeker', 'Creator and protector god, linked to Apedemak', 'Naga, Musawwarat'],
    ['Arensnuphis', 'Warrior and protector god, of Nubian origin', 'Philae, Musawwarat'],
    ['Mandulis', 'Sun god of Lower Nubia, of local origin', 'Kalabsha'],
    ['Isis and Osiris', 'Egyptian gods widely worshipped throughout Nubia; Isis had followers at Meroë', 'Philae, Meroë'],
    ['Hathor', 'Goddess of love, music and motherhood', 'Naga, Napata']
  ] } },
  { img: 'kus-esquema-piramide', leg: 'Simplified diagram of a Meroitic pyramid with a chapel and underground tomb; not a specific monument. Drawn diagram.' },
  { h: 'Death and pyramids' },
  'The kings and queens of Napata and Meroë were buried in **pyramids** that imitated Egyptian ones but, instead of chambers inside the structure, the chamber lay **underground**, reached by a stairway. The dead were laid on a wooden bed with jewellery and gold, pottery, and sometimes the most expensive objects of the Mediterranean. At **Kerma**, human sacrifice to accompany the king seems to have been practised (the interpretation is debated); in the Meroitic period there are signs that it was abandoned, which is also debated.',
  { h: '4. Economy and trade' },
  'The wealth of Kush rested on **gold** (from the eastern desert mines, above all Wadi Allaqi), **cattle**, tropical products (ivory, ebony, incense, skins, feathers) and its position as middleman between tropical Africa and the Mediterranean. At Meroë **iron** was added, with the region’s abundant wood, and cotton (ancient remains survive at Qasr Ibrim, from the Meroitic period). We know of no coinage of its own in circulation: trade was by barter, with weights, and with foreign coin when it arrived.',
  { h: '5. Iron and metalworking' },
  'Meroë has been called the “Birmingham of ancient Africa”, a phrase of the archaeologist A. H. Sayce around 1910 that is now seen as exaggerated. The enormous **slag heaps** beside the city show that iron was worked on a large scale, but recent studies debate whether it was a great export centre or mainly for local use, and when iron began (perhaps as early as the 6th century BC, with influence from Asia or Egypt; the origin is debated). **Gold**, **bronze**, copper and glass were also worked. Meroitic **pottery**, painted and of very high quality, is one of the most beautiful objects the region has left.',
  { img: 'kus-ferro-escorias', leg: 'Map of Meroe and Hamadab locating the studied slag mounds, Humphris and Scheibner, 2017, figure 1. Documentary substitute: this is not a photograph of the mounds.' },
  { img: 'kus-cena-forja-ferro', leg: 'Iron smelting and working at Meroë, 1st century BC; conjectural reconstruction. AI-generated illustration.' },
  { img: 'kus-ceramica-meroitica', leg: 'Painted Meroitic jar with human-headed frog, Ballana, 50 BC–AD 200, Institute for the Study of Ancient Cultures, Chicago.' },
  { h: '6. Writing' },
  'During the Egyptian occupation and at Napata people wrote in **Egyptian** (hieroglyphs). From the 3rd century BC, at Meroë, **Meroitic** appeared, in two forms: the **cursive** (everyday) and, somewhat later, the **hieroglyphic** (monumental). It is a system of **23 signs** working as an alphabet of syllables, with a word divider (:). The Englishman **Francis Griffith** deciphered the sound values in 1909–1911, so we can **read** the texts aloud, but since the language is poorly understood we grasp only names, titles and some formulas, not the longer texts.',
  { img: 'kus-escrita-meroitica', leg: 'Inscription in Meroitic hieroglyphic script' },
  { h: '7. Farming and water' },
  'Along the Nile people grew barley, wheat, sorghum, millet, pulses, date palms and cotton, with the river providing the annual flood. In the interior of the **Butana**, where it rains in summer, the Kushites built **hafirs**, large rainwater reservoirs, and later adopted the **saqiya** (ox-driven water wheel), which allowed production to grow. **Cattle** herding was always central, even more than in Egypt.',
  { img: 'kus-cena-sakia-rega', leg: 'Saqiya irrigation in the Meroitic period; conjectural mechanism and scene. AI-generated illustration.' },
  { h: '8. Home and family' },
  'Ordinary houses were made of **mud brick**, with a courtyard and a flat roof, and near the desert also of stone. At Kerma there were round houses, reminiscent of herders’ huts. Royal families and elites had palaces with wide halls, baths and gardens. Women had high social and legal standing compared with many other societies of antiquity, and there is evidence of inheritances and titles passing through the female line; the exact extent is debated.',
  { img: 'kus-cena-casa-nubia', leg: 'Nubian family home, 1st century AD; conjectural reconstruction. AI-generated illustration.' },
  { h: '9. Food' },
  'People ate **bread and cereal porridge** (sorghum, barley, millet), beef, goat and mutton, Nile fish, pulses, dates and desert fruits. Beer, made from cereals, was a daily drink. Milk was important, above all for herders. In tombs there are offerings of bread, meat and wine.',
  { h: '10. Clothing and adornment' },
  'People wore kilts or tunics of **linen** or **cotton**, and skins and leather. The Kushite kings of the 25th Dynasty wore a **close-fitting cap with two serpents** (uraei) on the brow, a distinctive trait, instead of one. The Kushites were famous for their **ornaments**: bracelets, archer’s rings, bead necklaces and pendants in gold and enamel, as the treasures of Meroë show.',
  { h: '11. Music, games and festivals' },
  'Images show the use of drums, harps and lyres, and dances at festivals. **Game boards** of Egyptian type have been found at Nubian sites, but the real rules are unknown. The great religious festivals, with offerings and processions, marked the calendar.',
  { h: '12. War' },
  'The Nubians were famous as **archers**: the Egyptians called them the “Land of the Bow”, and Nubian troops served in the Egyptian army (the **Medjay** were first soldiers and later police). The Kushites also prized **horses**, and Piye’s stela speaks of them with affection. In the Meroitic period **elephants** and lions are depicted in warlike contexts, although the use of elephants in battle is debated. Warriors used bows, spears, swords and shields; the archer is a symbol of power, and the kandakes appear with bows.',
  { img: 'kus-arqueiros-nubios', leg: 'Detail of Mesehti’s Nubian archers model, Asyut, Egyptian Museum, Cairo; historic photograph published by Borchardt.' },
  { h: '13. Architecture and technology' },
  'Kushite buildings combine the **Egyptian style** (pylons, columns, reliefs) with elements of their own: small pyramids, temples with lions, and Hellenistic and Roman influence in baths and kiosks. They used **mud brick** and **sandstone**. At Musawwarat and Naga there are reliefs of great quality. There were advanced techniques of **irrigation** and **smelting**.',
  { img: 'kus-natakamani-amanitore', leg: 'Natakamani and Amanitore on the pylon of the Lion Temple, Naqa; historic reproduction by Lepsius.' },
  { img: 'kus-cena-mercado-caravana', leg: 'Merchant caravan arriving at Meroë; conjectural reconstruction. AI-generated illustration.' }
];

const personalidades = [
  'Of the kings of Kush, some are known from inscriptions (Piye, Taharqa, Aspelta), others only from tumuli or from Greek and Roman mentions. The figures below are real; where there are doubts about dates or facts, we say so.',
  { h: 'Harkhuf, governor of Aswan (c. 2250 BC)' },
  'An Egyptian official of the Old Kingdom and explorer, he left a biography carved in his tomb at Aswan. He made expeditions to the land of **Yam**, to the south, and brought back ebony, incense, skins and animals. The letter that the young Pepi II wrote to him, delighted at the promise of a “dancing dwarf” brought from the south, is part of the inscription. It is one of the earliest testimonies of trade with Nubia.',
  { h: 'Huy, viceroy of Kush (c. 1330 BC)' },
  'In the time of **Tutankhamun**, Huy was “King’s Son of Kush” and governed Nubia. In his tomb at Thebes there are famous paintings of Nubians bringing tribute (gold, skins, cattle, animals), which show the wealth Egypt drew from the region and how it imagined its southern neighbours.',
  { h: 'Kashta and Amenirdis I (c. 760 BC)' },
  '**Kashta** is the first Kushite king we know to have held authority in Upper Egypt. His daughter, **Amenirdis I**, was adopted as God’s Wife of Amun at Thebes, giving the Kushite royal family enormous religious and economic power over southern Egypt. This marital and religious strategy paved the way for the conquest that followed.',
  { h: 'Piye (c. 744 – 714 BC)' },
  'The founder of the 25th Dynasty. His **Great Victory Stela** tells how he marched from Napata against the princes of the Delta, took cities and accepted the submission of local kings. He presents himself as a defender of Egyptian cult and **harsh on impiety**: the text says he was angrier about the horses of a defeated king starving than about the rebellion (paraphrase). He returned to Napata instead of governing Egypt, and was buried at El-Kurru.',
  { h: 'Shabaka (c. 721 – 707 BC)' },
  'Piye’s brother, he settled at Memphis and controlled all of Egypt. He restored temples and had an ancient text about the god Ptah and the creation of the world copied onto the **Shabaka Stone**, saying that the original papyrus had been eaten by worms. The stone is one of the most important Egyptian religious texts and is now in the British Museum.',
  { img: 'kus-pedra-shabaka', leg: 'Shabaka Stone, British Museum (EA 498)' },
  { h: 'Taharqa (690 – 664 BC)' },
  'The most famous of the Kushite kings. He ruled Egypt from his palace at Memphis, built and restored at Karnak, Kawa and Jebel Barkal, and enjoyed good Nile floods. He resisted the Assyrians twice, repelling the first invasion (674/673 BC) and losing Memphis in 671 BC. He is cited in the Bible as “Tirhakah”. He died in 664 BC and was buried at Nuri, in the largest pyramid of Kush.',
  { h: 'Tantamani (c. 664 – 656 BC)' },
  'Taharqa’s successor, probably his nephew (a son of Shabaka). He took Upper Egypt and reached Memphis, but **Ashurbanipal** responded and sacked Thebes. He was the last Kushite king of Egypt; afterwards the Kushites withdrew to Nubia and kept a link with Egypt through religion.',
  { h: 'Aspelta (c. 600 – 580 BC, dates debated)' },
  'The king to whom the **Election Stela** is attributed, which describes how the god Amun chose him, among his brothers, before the army. He reigned at the time of Psamtik II’s invasion (c. 593 BC) and is associated with a shift of the centre of power southwards. His enormous granite sarcophagus is in Boston.',
  { h: 'Shanakdakhete (dates debated)' },
  'A ruling queen of Meroë, known from the inscriptions and reliefs of Temple F at Naga. She was traditionally held to be the **first ruling queen** (c. 170 BC), but recent studies place her around the early 1st century AD, and some give the primacy to Nahirqo. Her dating, status and the reading of her name are debated. She belongs to a tradition of women in power at Meroë.',
  { h: 'Amanirenas (c. 40 – 10 BC, dates debated)' },
  'The kandake who faced **Rome**. According to **Strabo** she was “a manly woman, blind in one eye”, and led the attack on Roman Egypt in 25 BC. She took Syene, Elephantine and Philae, and carried off a bronze head of Augustus, which was buried under the steps of a temple at Meroë (where it was found in 1910). After the Roman response she negotiated peace in 21/20 BC and secured that no tribute be paid. She is one of the most cited figures of Kush.',
  { img: 'kus-cena-amanirenas', leg: 'Kandake Amanirenas, c. 25 BC; imagined likeness and symbolic scene, not a documented event. AI-generated illustration.' },
  { h: 'Amanishakheto (c. 10 BC – AD 1, dates debated)' },
  'A reigning queen, buried in a pyramid at Meroë. In 1834 the Italian treasure hunter **Giuseppe Ferlini** destroyed her pyramid and stole a treasure of gold and stone jewellery, now in Berlin and Munich, which shows Egyptian, Greek and Roman influence.',
  { img: 'kus-amanishakheto-joias', leg: 'Necklace from Amanishakheto’s treasure, Egyptian Museum, Berlin, inventory 22877.' },
  { h: 'Natakamani and Amanitore (1st century BC/AD)' },
  'Rulers who reigned together, at the peak of Meroitic building: the Lion Temple at Naga, the Temple of Amun at Meroë and restorations at Jebel Barkal and Kawa. They appear side by side in the reliefs at Naga, at the same size. Their work marks the high point of Meroitic art.',
  { h: 'Ezana of Axum (c. AD 320 – 360)' },
  'King of **Axum** (today Ethiopia and Eritrea), converted to Christianity. His inscriptions tell of a campaign against the **Noba** and the **Kasu** (Kush) around AD 350, but it is not certain that he destroyed Meroë: the kingdom was already in decline.',
  { h: 'Silko, king of Nobatia (5th or 6th century AD, debated)' },
  'A Nobatian chief who left a Greek inscription at the temple of Kalabsha, calling himself “king of all the Ethiopians” and victor over the Blemmyes. He represents the phase in which Nubia, after Meroë, reorganised itself into new kingdoms; the date and the degree of Christianisation are debated.'
];

const legado = [
  { h: 'What they left us' },
  { lista: [
    '**The idea of an African Egypt and of a Nubia with a history of its own:** the archaeology of the last 50 years has corrected the view of Kush as a mere copy of Egypt.',
    '**The pharaohs of Kush:** the 25th Dynasty revived cult, art and the pyramid tradition, and left works at Karnak and Kawa.',
    '**Nubian pyramids:** roughly 250, one of the great landmarks of Sudan.',
    '**Iron and metalworking, pottery and jewellery:** among the finest in ancient Africa.',
    '**Meroitic script:** one of the first African writing systems of their own.',
    '**Nubian Christianity:** for more than eight centuries, Christian kingdoms in Nubia, with an art of their own and a written language (Old Nubian).'
  ] },
  { h: 'Art' },
  'Kushite art has a style of its own, even when it adopts Egyptian forms: fuller-proportioned figures, round faces, the use of lions and elephants, reliefs with victory scenes, and pottery painted with plant and animal motifs. Meroitic jewellery fuses Egyptian, Hellenistic and local influences. In the Christian era, the **wall paintings of Faras** are among the great works of medieval African art.',
  { img: 'kus-faras-pintura', leg: 'Saint Anne, wall painting from Faras Cathedral, National Museum in Warsaw.' },
  { h: 'Architecture' },
  'From the brick of the Kerma deffufa to the sandstone temples of Naga and Musawwarat, Kushite architecture mixes Egyptian, local, Greek and Roman models. Nubian pyramids, with their very steep faces and a small chapel, became its best-known symbol.',
  { h: 'The rediscovery of Kush' },
  'The first European to describe Meroë was the Scot **James Bruce** (1772), and the pyramids were explored by the Frenchman **Frédéric Cailliaud** (1821) and the Prussian **Karl Lepsius** (1844). In 1834 **Ferlini** destroyed dozens of pyramids looking for gold. The American **George Reisner** (Harvard, from c. 1913) excavated Kerma, El-Kurru, Nuri and other sites, and the Englishman **John Garstang** excavated Meroë in 1909–1914. Reisner and many of his contemporaries thought Kushite civilisation was of foreign origin and inferior to Egypt’s, an idea now rejected. Since the 1970s a Swiss mission led by **Charles Bonnet** (and later by Matthieu Honegger) has excavated Kerma and Doukki Gel. The building of the **Aswan High Dam** led to a great international UNESCO campaign (1960 – 1980), which saved Abu Simbel and many other monuments and discovered hundreds of sites.',
  { img: 'kus-abu-simbel', leg: 'Façade of the Great Temple of Abu Simbel' },
  { caixa: 'Where to visit', texto: 'In **Sudan**: the National Museum in Khartoum, the Kerma Museum, Meroë, Jebel Barkal, Nuri, Naga and Musawwarat; **the security situation has been very unstable since 2023 and the National Museum has been looted, so check before going**. In **Egypt**: Abu Simbel, Philae, Kalabsha and the Nubia Museum in Aswan. In Europe: the **British Museum** (Shabaka Stone, Sphinx of Taharqa, head of Augustus), the **Egyptian Museum in Berlin** (jewellery of Amanishakheto), the **Museum of Fine Arts, Boston** (Reisner’s finds) and the **National Museum in Warsaw** (Faras paintings).' }
];

const quiz = [
  { p: 'What name did the ancient Egyptians give to the African kingdom to their south, on the Nile?', op: ['Punt', 'Kush', 'Axum', 'Libu'], certa: 1, exp: 'Kush is the Egyptian name for the Upper Nubian region; Punt was a distant land on the Red Sea.' },
  { p: 'Where was the first great capital of the kingdom of Kush, famous for its deffufa?', op: ['Meroë', 'Kerma', 'Napata', 'Axum'], certa: 1, exp: 'Kerma, by the third cataract, was a capital from c. 2500 to 1500 BC.' },
  { p: 'Which pharaoh destroyed Kerma and conquered Nubia around 1500 BC?', op: ['Ramesses II', 'Khufu', 'Thutmose I', 'Akhenaten'], certa: 2, exp: 'Thutmose I took the frontiers to the fourth cataract, and Nubia came under Egyptian administration.' },
  { p: 'Which sacred mountain at Napata was seen as the home of the god Amun?', op: ['Jebel Barkal', 'Mount Sinai', 'Kilimanjaro', 'Jebel Musa'], certa: 0, exp: 'Jebel Barkal has a pinnacle that the Egyptians saw as a cobra.' },
  { p: 'Which Kushite king began the conquest of Egypt in the 8th century BC?', op: ['Taharqa', 'Piye', 'Aspelta', 'Natakamani'], certa: 1, exp: 'Piye’s Victory Stela tells of the campaign as far as Memphis.' },
  { p: 'What was distinctive about the crown of the Kushite kings of the 25th Dynasty?', op: ['It had a single serpent', 'It had two serpents (uraei)', 'It was made of iron', 'It had a lion’s head'], certa: 1, exp: 'Two serpents on the brow are a distinguishing sign of those kings.' },
  { p: 'What is the name of the Kushite king the Bible mentions as “Tirhakah”?', op: ['Piye', 'Tantamani', 'Shabaka', 'Taharqa'], certa: 3, exp: 'Taharqa appears in 2 Kings 19 and Isaiah 37 as king of Kush.' },
  { p: 'Which empire drove the Kushites out of Egypt in the mid-7th century BC?', op: ['Hittites', 'Assyrians', 'Persians', 'Romans'], certa: 1, exp: 'Esarhaddon and Ashurbanipal invaded Egypt between 671 and 663 BC.' },
  { p: 'Where did the Kushite kings gradually shift their centre of power?', op: ['To Alexandria', 'To Meroë', 'To Axum', 'To Carthage'], certa: 1, exp: 'The shift was gradual, and from c. 270 BC the kings came to be buried at Meroë.' },
  { p: 'What was the title of the powerful queens of Meroë?', op: ['Pharaoh', 'Kandake', 'Satrap', 'Augusta'], certa: 1, exp: 'The title (kdke in Meroitic) gave “Candace” in Greek and Latin.' },
  { p: 'Which kandake faced the Romans in 25 – 22 BC?', op: ['Amanirenas', 'Hatshepsut', 'Cleopatra', 'Nefertiti'], certa: 0, exp: 'Amanirenas attacked southern Egypt and won a favourable peace at Samos.' },
  { p: 'What object of Augustus was found buried at Meroë?', op: ['A sword', 'A bronze head', 'A gold coin', 'A crown'], certa: 1, exp: 'The bronze head, taken at Philae or Syene, was buried under a temple stairway and is now in the British Museum.' },
  { p: 'How do the pyramids of Kush differ from those of Egypt?', op: ['They are much taller', 'They are steeper and smaller', 'They are made of volcanic rock', 'They have no burial chamber'], certa: 1, exp: 'They have very steep faces, a small offering chapel and an underground chamber.' },
  { p: 'What kind of script was created at Meroë?', op: ['Egyptian hieroglyphs', 'Cuneiform', 'Meroitic, with about 23 signs', 'Greek'], certa: 2, exp: 'Meroitic has been readable since Griffith (1909–1911), but the language is still poorly understood.' },
  { p: 'Which kingdom is cited as having defeated the Kasu and the Noba around AD 350?', op: ['Rome', 'Axum', 'Egypt', 'Persia'], certa: 1, exp: 'Ezana of Axum left inscriptions about that campaign, although his role in the fall of Meroë is debated.' }
];

export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };
