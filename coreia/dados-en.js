// KOREA — full English content. Same structure and same image slots as the Portuguese version (dados.js).
// Dates are approximate; the oldest come from chronicles written centuries later (Samguk Sagi, 1145; Samguk Yusa, c. 1280) and mix legend with history. BC/AD.
// This dossier ends in 1897, with the proclamation of the Korean Empire; the 20th century is not covered.

const visao = [
  { caixa: 'In brief', texto: [
    '**Korea** is one of the oldest and most continuous civilizations of East Asia. On the peninsula between China and Japan, a people with its own language, Korean, built kingdoms, an original script and a culture that absorbed Chinese influence without ever dissolving into it. This dossier follows its history from the legend of the founder **Dangun** and the kingdom of **Gojoseon** to the proclamation of the **Korean Empire** in **1897**.',
    'The story falls into great blocks: the first kingdoms and Gojoseon; the **Three Kingdoms** (**Goguryeo**, **Baekje** and **Silla**), which contested the peninsula for centuries; **Unified Silla** (676 – 935), which brought it together; **Goryeo** (918 – 1392), which gave the country its name and invented printing with movable metal type; and **Joseon** (1392 – 1897), one of the longest-lived dynasties in East Asia, the age of **Sejong** and the **hangul** alphabet, of Admiral **Yi Sun-sin** and the turtle ships, and of a Confucianism that shaped society to the end.'
  ] },
  { img: 'cor-mapa-tres-reinos', leg: 'Map of the Three Kingdoms of Korea (Goguryeo, Baekje and Silla), with the Gaya confederation, in the 5th century.' },
  { h: 'Where it was' },
  'The **Korean peninsula** is a mountainous projection, about 1,000 km long, running south from Manchuria between the **Yellow Sea** (to the west), the **Sea of Japan**, called the **East Sea** by Koreans (to the east), and the Korea Strait (to the south, facing Japan). About 70% of the land is mountain, and the most important rivers are the **Han** (which crosses Seoul), the **Taedong** (Pyongyang), the **Nakdong** and the **Yalu** (Amnok in Korean), which today marks the border with China. The rice plains lie mainly in the west and south. Winters are harsh; summers are humid and monsoonal.',
  'In the early centuries the Korean territory also stretched across **Manchuria** and the Liaodong peninsula: at its height the kingdom of Goguryeo controlled much of present-day North Korea and north-eastern China. The border with China to the north, and the sea to the south and west, made the peninsula a corridor of ideas, monks and armies between China and Japan.',
  { h: 'When it existed' },
  'The dates of the first centuries are approximate and, for the oldest kingdoms, derive from chronicles written long after the events. From the 4th century AD the chronology is fairly solid.',
  { tabela: { cab: ['Phase', 'Approximate dates', 'What marks it'], linhas: [
    ['Prehistory and Gojoseon', 'to c. 108 BC', 'Neolithic, Bronze Age and dolmens; the legend of Dangun (2333 BC in tradition); historical Gojoseon and Wiman Joseon; conquest by Han China in 108 BC'],
    ['Three Kingdoms', '1st c. BC – AD 668', 'Goguryeo, Baekje and Silla (traditional founding dates: 37, 18 and 57 BC); the Gaya confederation; arrival of Buddhism; wars with China'],
    ['Unified Silla and Balhae', '676 – 935 (Balhae: 698 – 926)', 'Silla unifies most of the peninsula; golden age of Buddhism; Balhae succeeds Goguryeo in the north'],
    ['Goryeo', '918 – 1392', 'Wang Geon; civil service examinations; celadon pottery; Tripitaka Koreana; movable metal type; Mongol invasions'],
    ['Joseon', '1392 – 1897', 'Neo-Confucianism; Sejong and hangul; Japanese invasions (1592–98); Manchu invasions; reforms of the 18th and 19th centuries; forced opening to the world'],
    ['Korean Empire', 'from 1897', 'Proclaimed by Gojong on 12 October 1897; later events lie outside this dossier']
  ] } },
  { img: 'cor-gyeongbokgung', leg: 'Gyeongbokgung Palace in Seoul, founded in 1395 and rebuilt in 1865–68.' },
  { h: 'Who were the Koreans?' },
  'Koreans speak a language of debated origin: Korean is usually treated as a language isolate, or as part of a small family (the Koreanic languages), and its link to other families is disputed. The peoples who lived on the peninsula in antiquity were rice and millet farmers, hunters and mounted warriors, with a strong **shamanic** tradition. From the 4th century BC, iron and migrations from the north turned communities into states.',
  'From the first centuries AD, Korean elites adopted **Chinese writing**, the idea of an emperor, Confucianism and Buddhism, but adapted them: they created an auxiliary script for Korean (**idu**), their own version of Buddhism and, in the 15th century, an entirely original alphabet. Another feature is **continuity**: the same language, the same sense of community and many of the same customs (the food, the floor-heated house, respect for ancestors) run through more than two thousand years.',
  { h: 'Why they matter' },
  { lista: [
    '**The hangul alphabet:** created by Sejong and his scholars (1443; promulgated in 1446), it is one of the few alphabets in the world whose date, author and logic are known, and its design is regarded as remarkably scientific.',
    '**Printing with movable metal type:** Koreans were using it in the 13th century, before Gutenberg; the **Jikji** (1377) is the oldest surviving book printed by this process.',
    '**The Tripitaka Koreana:** 81,258 woodblocks carrying the whole Buddhist canon, carved in the 13th century and still kept at Haeinsa.',
    '**Art and ceramics:** the celadons of Goryeo, the white porcelains of Joseon, the funerary art and paintings of Goguryeo and Silla.',
    '**Resistance:** from Goguryeo defeating the armies of Sui to Admiral Yi Sun-sin defeating the Japanese fleet, Korean history is that of a small country among far larger neighbours that kept its identity.',
    '**A Confucian society:** Joseon created one of the longest systems of government by scholars, with examinations, archives and a bureaucracy that left a continuous record for five hundred years.'
  ] },
  { img: 'cor-porcelana-lua', leg: 'White porcelain moon jar, Joseon period, 18th century.' },
  { caixa: 'Korea today', texto: 'The peninsula is now divided into two states, **South Korea** (capital Seoul) and **North Korea** (capital Pyongyang), and the name “Korea” comes from **Goryeo**, through Persian and Arab merchants and medieval European travellers. In Korean the country is called **Hanguk** (south) or **Joseon** (north). The 20th and 21st centuries lie outside this dossier. Many of the monuments described here (Changdeokgung Palace, Gyeongju, Haeinsa, Hwaseong, the royal tombs) are UNESCO World Heritage Sites.' }
];

const linha = [
  'This timeline follows the main events of Korean history up to 1897. The oldest centuries have few sources and many legends, so each entry marks what is **legend** and what is **fact**. From c. AD 400 there are more reliable inscriptions and chronicles; from the 15th century onward there is one of the largest official archives in Asia.',
  { linha: [
    { d: 'c. 8000 – 300 BC', t: 'Prehistory', x: 'In the **Neolithic** (comb-pattern pottery, the **Jeulmun** culture, c. 8000 – 1500 BC), communities lived by fishing and hunting. During the **Mumun** period (c. 1500 – 300 BC) rice growing spread, bronze appeared and thousands of **dolmens**, megalithic tombs, were raised; Korea holds a large share of the world’s dolmens (about 40%, by some estimates). Iron arrived around the 4th century BC.' },
    { d: '2333 BC (legend)', t: 'Dangun and Gojoseon', x: 'According to the **Samguk Yusa** (c. 1280), by the monk **Iryeon**, **Hwanung**, son of the Lord of Heaven, descended to Mount Taebaek; a she-bear became a woman (**Ungnyeo**) and bore **Dangun Wanggeom**, who founded **Gojoseon** (“Old Joseon”) in 2333 BC. This is an **origin legend**, not a datable fact, but it is the nation’s founding myth: Foundation Day (**Gaecheon-jeol**) is celebrated on 3 October.' },
  ] },
  { img: 'cor-dolmen-ganghwa', leg: 'Bugeun-ri dolmen on Ganghwa Island, Bronze Age.' },
  { img: 'cor-dangun-lenda', leg: 'Artistic reconstruction of the legend of Dangun, Hwanung and the bear. (Illustrative AI-generated image.)' },
  { linha: [
    { d: '4th c. – 108 BC', t: 'Historical Gojoseon and the Han conquest', x: '**Gojoseon** appears in Chinese texts from the 4th century BC (its territory and capital are debated: Liaoning or Pyongyang). Around **194 BC**, **Wiman**, a refugee from the Chinese kingdom of Yan, seized power and founded what is called **Wiman Joseon**. In **108 BC** Emperor Wu of the **Han** dynasty conquered it and set up four commanderies; that of **Lelang** (near Pyongyang) lasted more than four hundred years as a centre of Chinese culture on the peninsula, until Goguryeo took it in **313**.' },
  ] },
  { img: 'cor-bronze-gojoseon', leg: 'Bronze dagger and mirror with fine geometric patterns, Korean Bronze Age, National Museum of Korea.' },
  { linha: [
    { d: '57 BC – 18 BC (tradition)', t: 'The three kingdoms are born in legend', x: 'According to the **Samguk Sagi** (1145), by the scholar **Kim Busik**, **Silla** was founded in 57 BC by **Park Hyeokgeose**, **Goguryeo** in 37 BC by **Jumong** (Dongmyeongseong) and **Baekje** in 18 BC by **Onjo**. These dates are **traditional**: historians think the three kingdoms only consolidated between the 1st and 4th centuries AD, from confederations of villages and chiefs, and that Silla was the last to become a centralized state.' },
    { d: '372 – 527', t: 'Buddhism reaches the three kingdoms', x: 'Buddhism was officially adopted in **Goguryeo in 372** (the monk **Sundo**, from China), in **Baekje in 384** (the monk **Malananta**) and in **Silla in 527**, after the martyrdom of the official **Yi Chadon** (the date and the episode contain legendary elements). Buddhism became the religion of kings and gave rise to temples, pagodas and images.' },
    { d: '391 – 413', t: 'Gwanggaeto the Great', x: 'King **Gwanggaeto** of Goguryeo doubles the territory, conquers lands in Manchuria and against Baekje, and sends troops against Japan and Gaya. His **stele** (raised in 414 by his son Jangsu, at Ji’an in China) is the main source on the reign; how certain passages about Japan should be read is much debated.' },
  ] },
  { img: 'cor-goguryeo-mural', leg: 'Mural of a mounted hunt in a Goguryeo tomb, 5th century.' },
  { img: 'cor-estela-gwanggaeto', leg: 'Stele of Gwanggaeto the Great at Ji’an (414).' },
  { linha: [
    { d: '427 – 475', t: 'Pyongyang becomes capital; Baekje flees south', x: 'King **Jangsu** (r. 413 – 491) moves Goguryeo’s capital to **Pyongyang** in 427. In **475** he captures **Hanseong**, the Baekje capital, and kills King Gaero; Baekje flees to **Ungjin** (Gongju) and, in 538, to **Sabi** (Buyeo).' },
    { d: '532 – 562', t: 'Gaya absorbed by Silla', x: 'The **Gaya confederation** (small states of iron and seafaring in the Nakdong valley) is absorbed by Silla: **Geumgwan Gaya** in 532 and **Dae Gaya** in 562. Gaya is famous for its armour and for the **gayageum**, the twelve-string zither.' },
    { d: '538 – 552', t: 'Baekje and its sea route', x: 'Baekje, under King **Seong** (r. 523 – 554), develops culture and trade, and sends monks, texts and a statue of the Buddha to Japan (the traditional date is **552**; other sources propose 538). Its refined art reached as far as Asuka-period Japan.' },
  ] },
  { img: 'cor-incensario-baekje', leg: 'Gilt-bronze incense burner of Baekje, 7th century, Buyeo National Museum.' },
  { linha: [
    { d: '598 – 614', t: 'Goguryeo resists Sui China', x: 'The Chinese **Sui** dynasty invades Goguryeo several times. In **612**, facing an army that Chinese sources say numbered over a million men (certainly an exaggeration), the general **Eulji Mundeok** destroys an attacking column on the **Salsu** river. The defeats help bring down the Sui dynasty in 618.' },
    { d: '632 – 647', t: 'Queen Seondeok', x: 'In Silla, **Queen Seondeok** rules, the first of three reigning queens of Silla (the others are Jindeok, 647 – 654, and Jinseong, 887 – 897). According to tradition, the **Cheomseongdae**, the oldest surviving astronomical observatory in East Asia, and the nine-storey pagoda of **Hwangnyongsa** temple were built during her reign.' },
    { d: '645 – 668', t: 'Silla and Tang destroy Baekje and Goguryeo', x: 'Silla allies with **Tang** China. The coalition defeats **Baekje** in **660** (General **Gyebaek** dies with five thousand men at Hwangsanbeol; the capital falls) and **Goguryeo** in **668**, after decades of war and an internal struggle following the death of the powerful **Yeon Gaesomun**. A Japanese army sent to help Baekje was beaten at **Baekgang** (663).' },
    { d: '670 – 676', t: 'Silla expels China', x: 'The Tang meant to keep the peninsula. Silla, under King **Munmu**, fights them and by **676** drives them out of most of the territory south of the Taedong river. This is **Unified Silla**: about two thirds of the peninsula, but not Manchuria.' },
    { d: '698 – 926', t: 'Balhae', x: '**Dae Joyeong**, described as a former Goguryeo general (his origin is debated), founds the kingdom of **Balhae** (Bohai) in **698**, in Manchuria and the north of the peninsula, claimed as a successor to Goguryeo. It lasted until 926, when the **Khitan** destroyed it. Korean historians speak of “North and South States”.' },
    { d: '751', t: 'Bulguksa and Seokguram', x: 'In Gyeongju, the minister **Kim Daeseong** begins building **Bulguksa** temple and the **Seokguram** grotto, with its granite Buddha (completed c. 774). The **Divine Bell of King Seongdeok** (771) is the largest surviving bell in Korea. A woodblock print (the **Pure Light Dharani Sutra**), found in 1966 in a pagoda of the temple, is among the oldest in the world and was probably made before 751 (the date is debated).' },
  ] },
  { img: 'cor-bulguksa', leg: 'Bulguksa temple in Gyeongju, founded in 751.' },
  { img: 'cor-tripitaka-haeinsa', leg: 'Woodblock of the Tripitaka Koreana at Haeinsa.' },
  { linha: [
    { d: '828 – 935', t: 'Jang Bogo and the end of Silla', x: '**Jang Bogo** founds the naval base of **Cheonghaejin** in 828, controlling trade between Korea, China and Japan. Later, noble rivalries and peasant revolts break Silla into the “**Later Three Kingdoms**” (892 – 936). The last king of Silla, **Gyeongsun**, surrenders in **935**.' },
    { d: '918 – 936', t: 'Wang Geon founds Goryeo', x: 'The military leader **Wang Geon**, from a family of maritime merchants of **Songak** (Kaesong), founds **Goryeo** in 918, defeats Later Baekje and unifies the peninsula in **936**, claiming to be the heir of Goguryeo. His policy of conciliation with the Silla elites and his ten injunctions (**Hunyo Sipjo**) influenced the kingdom for centuries.' },
    { d: '993 – 1019', t: 'The Khitan are stopped', x: 'The **Khitan** (Liao) empire invades Goryeo three times. In **993** the diplomat **Seo Hui** persuades the Khitan to withdraw almost without a battle; in **1019** General **Gang Gam-chan** wipes out the invading army at **Gwiju** (Kuju). Goryeo builds a long wall (the Cheolli Jangseong).' },
    { d: '1170 – 1259', t: 'Military coup and Mongol invasions', x: 'In **1170** military officers seize power in a revolt against the civil elite; for nearly a century the king is a figurehead while the **Choe** family rules in fact. The **Mongols** invade six times between **1231 and 1259**; the government takes refuge on **Ganghwa** island (1232) and the country is devastated. In 1259 Goryeo submits and becomes a vassal of the Mongol (Yuan) empire.' },
    { d: '1236 – 1251', t: 'The Tripitaka Koreana', x: 'During the war, monks carved the complete Buddhist canon on **81,258** wooden blocks, as a prayer that the Buddha would protect the country. An earlier edition, begun in 1011, burned in 1232; the Ganghwa edition has been kept at **Haeinsa** since the late 14th century.' },
  ] },
  { linha: [
    { d: '1377', t: 'The Jikji', x: 'At **Heungdeoksa** temple in **Cheongju**, the **Jikji** is printed (the shortened title of an anthology of the teachings of great Seon, or Zen, masters, compiled by the monk **Baegun**). It is the oldest surviving book printed with **movable metal type**, 78 years before the Gutenberg Bible (c. 1455). A Korean source already records, around 1234, an edition printed this way (now lost).' },
  ] },
  { img: 'cor-jikji', leg: 'Page of the Jikji (1377), Bibliothèque nationale de France (volume II copy).' },
  { linha: [
    { d: '1392', t: 'Yi Seong-gye founds Joseon', x: 'General **Yi Seong-gye** refuses to attack Ming China (the **Wihwado retreat**, 1388), returns with the army, deposes the last king of Goryeo and founds the **Joseon dynasty** (**1392**), taking the title **Taejo**. In 1394 he moves the capital to **Hanyang** (modern **Seoul**); his chief adviser, the Neo-Confucian scholar **Jeong Do-jeon**, designs the new state. **Gyeongbokgung** Palace is completed in 1395.' },
    { d: '1443 – 1446', t: 'Sejong and hangul', x: 'King **Sejong** (r. 1418 – 1450) has an alphabet created for the Korean language. Finished in **1443** and promulgated in **1446** under the title **Hunminjeongeum** (“The Correct Sounds for the Instruction of the People”), it is **hangul**. This is Joseon’s golden age: scientific inventions, music, maps, and the scholars of the **Jiphyeonjeon** (Hall of Worthies).' },
  ] },
  { img: 'cor-hunminjeongeum', leg: 'Page of the Hunminjeongeum (1446), Gansong copy, National Treasure of South Korea.' },
  { linha: [
    { d: '1592 – 1598', t: 'The Imjin War: the Japanese invasion', x: 'The Japanese warlord **Toyotomi Hideyoshi** invades Korea in **1592** with about 150,000 men, on his way to conquer China. The Korean army is beaten on land, but the navy of **Yi Sun-sin**, with its **turtle ships**, wins successive battles, cutting Japanese supply lines (**Hansando**, 1592). Guerrillas of civilians and monks (the “righteous armies”) and the intervention of Ming China (1593) balance the war. A second invasion in **1597** is stopped, and the Japanese withdraw after Hideyoshi’s death in 1598. Yi Sun-sin dies in the last battle, at **Noryang**.' },
  ] },
  { img: 'cor-batalha-hansando', leg: 'Artistic reconstruction of the battle of Hansando (1592): the “crane wing” formation of the Korean fleet. (Illustrative AI-generated image.)' },
  { linha: [
    { d: '1627 – 1637', t: 'The Manchu invasions', x: 'The **Manchus** invade Korea in **1627** and again in **1636**; King **Injo** takes refuge in the fortress of **Namhansanseong** and, in January 1637, has to surrender and pay homage to the new emperor (the humiliation of **Samjeondo**). Joseon becomes a tributary of the **Qing** dynasty but keeps its internal autonomy.' },
    { d: '1776 – 1800', t: 'Jeongjo and the 18th-century renaissance', x: 'The kings **Yeongjo** (1724 – 1776) and, above all, **Jeongjo** (1776 – 1800) promote reforms, the royal library **Gyujanggak**, the **Silhak** school of thought (“practical learning”) and the realist art of **Kim Hong-do** and **Shin Yun-bok**. Jeongjo builds the fortress of **Hwaseong** at Suwon (1794 – 1796).' },
    { d: '1863 – 1894', t: 'Daewongun, treaties and the Donghak revolt', x: 'During the regency of the **Heungseon Daewongun** (1863 – 1873), the country closes itself to foreigners, represses Catholics (1866) and repels French (1866) and American (1871) expeditions. The **Treaty of Ganghwa** (1876) forces it to open ports to Japan, followed by treaties with the USA (1882) and other powers. The **Donghak** peasant revolt (1894) is the spark for the Sino-Japanese War of 1894 – 1895.' },
    { d: '1895 – 1897', t: 'Queen Min and the Korean Empire', x: 'Queen **Min** (Myeongseong), who opposed Japanese influence, is murdered by Japanese agents on **8 October 1895**. King **Gojong** takes refuge in the Russian legation (1896 – 1897) and, on **12 October 1897**, proclaims the **Korean Empire** (Daehan Jeguk), taking the title of emperor. This is where this dossier ends.' },
  ] },
  { img: 'cor-gojong-retrato', leg: 'Portrait of Emperor Gojong, late 19th century.' }
];

const mapa = [
  'The Korean map is that of a succession of capitals, many in the same valley: the capital changes with the dynasty, but the mountains, rivers and fortresses remain. The main places are these.',
  { tabela: { cab: ['Place', 'Where (today)', 'When / who', 'Importance'], linhas: [
    ['Gungnae and Hwando', 'Ji’an, Jilin (China)', 'Goguryeo, 1st – 5th c.', 'First capitals; Gwanggaeto’s stele; tombs with murals (World Heritage)'],
    ['Pyongyang', 'North Korea', 'Goguryeo (from 427); Lelang before', 'Goguryeo’s capital at its height; tombs with murals'],
    ['Hanseong, Ungjin and Sabi', 'Seoul; Gongju; Buyeo', 'Baekje, 1st c. BC – 660', 'Successive capitals; tomb of King Muryeong; World Heritage'],
    ['Gyeongju (Seorabeol)', 'South-east South Korea', 'Silla, 57 BC – 935', 'Thousand-year capital; Cheomseongdae, Bulguksa, Seokguram; a “museum without walls”'],
    ['Gaegyeong (Kaesong)', 'North Korea', 'Goryeo, 918 – 1392', 'Capital of Goryeo; royal tombs'],
    ['Ganghwa', 'Island west of Seoul', 'Capital in exile, 1232 – 1270', 'Refuge from the Mongols; dolmens; site of fighting in 1866 and 1871'],
    ['Haeinsa', 'Mount Gaya, Hapcheon', 'Founded in 802', 'Houses the Tripitaka Koreana'],
    ['Hanyang (Seoul)', 'Capital of South Korea', 'Joseon, 1394 – 1897', 'Capital of Joseon; Gyeongbokgung and Changdeokgung palaces; Jongmyo'],
    ['Hwaseong', 'Suwon', 'Jeongjo, 1794 – 1796', '18th-century fortress; World Heritage'],
    ['Hahoe and Andong', 'South-east interior', '14th – 19th c.', 'Yangban villages; World Heritage'],
    ['Jeju', 'Island to the south', 'Kingdom of Tamna; Joseon', 'Volcanic island with its own traditions; home of the haenyeo divers']
  ] } },
  { img: 'cor-kangnido', leg: 'The Kangnido map (1402), a Korean world map, in a 16th-century Japanese copy; the image compares it with the Fra Mauro map.' },
  { h: 'Gyeongju: the thousand-year capital' },
  'Silla ruled from **Gyeongju** for almost a thousand years (57 BC – 935, according to tradition). The Samguk Sagi speaks of 178,936 households in the city in the 9th century (a figure that is hard to interpret), which would make Gyeongju one of the largest cities of East Asia. The great mounded **tombs** in the centre yielded the famous gold crowns. On the artificial lake of **Anapji** the king held banquets; the stone **Cheomseongdae** is traditionally seen as a 7th-century observatory.',
  { img: 'cor-gyeongju-reconstrucao', leg: 'Artistic reconstruction of Gyeongju, capital of Silla, in the 8th century. (Illustrative AI-generated image.)' },
  { img: 'cor-cheomseongdae', leg: 'Cheomseongdae, observatory of Gyeongju (7th century).' },
  { h: 'Seoul (Hanyang): the capital of Joseon' },
  'The city chosen in **1394** by Taejo and Jeong Do-jeon followed **geomancy** (pungsu): mountains behind and to the sides, the **Han** river in front. It was ringed by a wall about 18 km long, with four great gates and four small ones. At the centre stood the main palace of **Gyeongbokgung** and the **Jongmyo** shrine, where the royal ancestors were worshipped. **Changdeokgung** (1405) was the most used residence. The palaces were burned in 1592 and rebuilt; Gyeongbokgung only rose again in 1865 – 1868.',
  { img: 'cor-jongmyo', leg: 'Jongmyo, royal shrine of the ancestors of the Joseon kings, in Seoul.' },
  { h: 'Hwaseong, the fortress of Suwon' },
  'In 1794 – 1796 King Jeongjo built a fortress with nearly 5.7 km of walls, designed with the help of the scholar **Jeong Yak-yong**, who invented a pulley crane to reduce the labour. The costs and the workers (paid, not conscripted) were recorded in a detailed report, the **Hwaseong Seongyeok Uigwe**, which later made it possible to rebuild the fortress. It has been a World Heritage Site since 1997.',
  { img: 'cor-hwaseong', leg: 'Wall and tower of the Hwaseong fortress in Suwon (1794–1796).' },
  { h: 'Villages and houses' },
  'Outside the capitals, life went on in clan **villages**, such as **Hahoe** and **Yangdong**, home to scholar families, and in traditional houses (**hanok**) with curved-tile roofs and **ondol**, floor heating. In Seoul the **Bukchon** district preserves many hanok.',
  { img: 'cor-hanok-bukchon', leg: 'Traditional houses (hanok) in the Bukchon district of Seoul.' },
  { h: 'Roads and routes' },
  'Joseon organized a system of **post stations** and **roads** (six main roads left Seoul), with horses and couriers, and of **fire and smoke signals** (**bongsu**) that carried news of the frontiers to Seoul from mountain to mountain. At sea, coastal routes linked the southern ports to the capital by way of the Han river, and it was across the Yellow Sea that Baekje and Silla traded with China and Japan. Korean embassies (**tongsinsa**) went to Japan, and annual embassies to Beijing, with scholars and merchants, brought back books, medicines and ideas.'
];

const sociedade = [
  { h: '1. Political organization' },
  'The ancient kingdoms were ruled by kings supported by councils of nobles. In **Silla** the king was chosen from the “sacred bone” and “true bone” families (the **golpum system**), and major decisions came from the council of nobles (**Hwabaek**). **Goryeo** copied from the Chinese system the **civil service examination** (**gwageo**, 958) and a bureaucracy, but kept much power with the great families. **Joseon** went further: a **Neo-Confucian** state, with the king at the centre and a court organized into three oversight bodies, six ministries, a state council and a royal secretariat.',
  { caixa: 'The Annals of the Joseon Dynasty', texto: 'The official historians (**sagwan**) secretly noted down everything the king said and did, and not even the king could read what they wrote. The result was the **Annals of the Joseon Dynasty** (**Sillok**), 1,893 volumes covering 472 years, from 1392 to 1863 (from the first king, Taejo, to Cheoljong), on UNESCO’s Memory of the World register since 1997. It is one of the longest continuous historical records in the world.' },
  { h: '2. Social classes' },
  'Korean society was hierarchical and hereditary. In **Joseon** there were four main groups: the **yangban** (scholars and officials, the elite, who could sit the examinations), the **jungin** (“middle people”: interpreters, physicians, technicians), the **sangmin** (commoners: farmers, artisans, merchants) and the **cheonmin** (“lowborn”: household slaves, **nobi**, butchers, entertainers, **baekjeong**). Slaves were an important part of the population (sometimes estimated at a third, a debated figure), and slave status generally passed through the mother. In **Silla**, the **bone-rank** system (**golpum**) fixed at birth the offices each family could aspire to.',
  { img: 'cor-exame-gwageo', leg: 'Scene of a civil service examination (gwageo) in Joseon, artistic reconstruction. (Illustrative AI-generated image.)' },
  { h: '3. Religion and beliefs' },
  'Korean religions coexist, without one excluding the others.',
  { tabela: { cab: ['Tradition', 'When', 'What it is'], linhas: [
    ['Shamanism', 'Since prehistory', 'The **mudang** (shamans, almost always women) communicate with spirits and ancestors in rituals (**gut**); it continued among the people even when the elites condemned it'],
    ['Buddhism', '4th – 14th c. (and after)', 'State religion in Silla and Goryeo; the **Hwaeom**, **Seon** (Zen) and **Pure Land** schools; the monks **Wonhyo** and **Uisang**, and later **Jinul**'],
    ['Confucianism and Neo-Confucianism', 'From the 4th c.; state doctrine from 1392', 'Ethics of relationships (parent and child, ruler and subject, husband and wife); rites to ancestors; private academies (**seowon**)'],
    ['Daoism and geomancy', 'From the 7th c.', '**Pungsu** (geomancy) guides the choice of capitals, tombs and houses, according to the shape of mountains and rivers'],
    ['Catholicism', 'From the 18th c.', 'Introduced by scholars who read Jesuit books from China; repressed in 1801, 1839 and 1866'],
    ['Donghak', 'From 1860', '“Eastern Learning”, a movement founded by **Choe Je-u**, combining Confucian, Buddhist, Daoist and shamanic elements, and the origin of the 1894 revolt']
  ] } },
  { h: 'Korean Buddhism' },
  'Buddhism arrived in the 4th century and was crucial: it gave legitimacy to kings, brought art and architecture in stone, and became a political force. In Silla the monk **Wonhyo** (617 – 686) taught that enlightenment is for everyone; **Uisang** founded the Hwaeom school; **Hyecho** travelled to India (723 – 727) and left an account, discovered at Dunhuang in 1908. In Goryeo, the monk **Jinul** (1158 – 1210) renewed and consolidated the **Seon** tradition that still dominates Korean Buddhism. Under Joseon, Buddhism was marginalized, temples withdrew to the mountains, and many monks fought the Japanese in 1592.',
  { h: '4. Economy' },
  'The basis was always **agriculture**: rice (in the south and west), millet, barley and soybeans (in the north); from the 16th century **maize**, **tobacco** and **chili peppers** arrived, and later the **sweet potato** (18th century) and the **potato**. The state collected a land tax (**jeonse**) in grain and demanded labour. In Goryeo and Joseon, **mining**, silk, cotton (introduced by Mun Ik-jeom in the 14th century, according to tradition), ginseng and paper (**hanji**) developed. Foreign trade with China was always important. Rural markets held every five days (**jangsi**) multiplied in the 18th century.',
  { img: 'cor-baekje-mar', leg: 'Baekje trading ships on the Yellow Sea (artistic reconstruction). (Illustrative AI-generated image.)' },
  { img: 'cor-aldeia-joseon', leg: 'A Joseon village: thatched houses and rice fields (artistic reconstruction). (Illustrative AI-generated image.)' },
  { img: 'cor-mercado-joseon', leg: 'A Joseon market, 18th century (artistic reconstruction). (Illustrative AI-generated image.)' },
  { h: '5. Writing and language' },
  'For more than a thousand years Korean elites wrote in **classical Chinese** (**hanja** in Korean). To write Korean they invented systems such as **idu** and **hyangchal** (Chinese characters used for sound or for meaning), which were complicated and imprecise. In **1443** King **Sejong** and his scholars created **hangul**, initially with **28 letters** (24 today). The consonants imitate the shape of the mouth and tongue when speaking, and the vowels combine three symbols (heaven, earth and the human being). The letters are written in syllable blocks. The Hunminjeongeum Haerye (1446) explains the logic of the system. It was criticized by scholars, who preferred Chinese, and was used mainly by women and ordinary people until the 19th century, when it became a national symbol.',
  { h: '6. House and family' },
  'The traditional house (**hanok**) had a wooden frame, mud walls and a tile or thatch roof. The great invention is the **ondol**: the kitchen fire heats a network of channels under the floor of the room, which radiates warmth — an ancient technique (documented since Goguryeo), still in use. In Joseon, a yangban house was divided into a men’s space (**sarangchae**) and a women’s space (**anchae**). The family was **patrilineal**: the name passed through the father, the wife kept her own family name after marriage, and the eldest son inherited the cult of the ancestors (**jesa**). Confucian influence grew stronger in 17th-century Joseon, with smaller inheritance rights for daughters and women.',
  { img: 'cor-ondol-esquema', leg: 'Diagram of the ondol: the fire heats the floor through underground channels. (Illustrative AI-generated image.)' },
  { h: '7. Food' },
  'The basic meal is **rice** with soup and several side dishes (**banchan**). Koreans preserve vegetables with salt and fermentation: **kimchi** already existed in ancient times as brined vegetables, but the **red** version, with chili pepper, spread only later (the chili came from the Americas, probably via Japan, after 1592; recipes with chili appear in the 18th century). Fermented soybean sauces (**jang**: **ganjang**, **doenjang**) are fundamental, and **gochujang** (chili paste) appears in sources of the 17th and 18th centuries. People also eat fish and grilled meat (**bulgogi**, of ancient origin, modern name), and drink tea and rice wine (**makgeolli**).',
  { h: '8. Clothing' },
  'Traditional dress, the **hanbok**, has a short jacket (**jeogori**) with trousers (**baji**) for men, and a wide skirt (**chima**) for women. The Goguryeo murals show coats and trousers already very similar. In Joseon, scholars wore a black horsehair hat, the **gat**, and a long coat (**durumagi**); colours were regulated by law: ordinary people wore white and plain colours. Silk, linen and cotton were the main fabrics.',
  { h: '9. Music, dance and games' },
  'Korean music includes court music (**aak**, of Chinese origin; **jeryeak**, the music of the Jongmyo rites, still played today), folk music and **pansori** (a story sung by a single performer, 17th – 18th centuries). Among the instruments, the **gayageum** (twelve-string zither, from 6th-century Gaya) and the **geomungo** (six-string zither, attributed to Goguryeo) are the best known. Among games, **baduk** (Go) came early from China, **janggi** (chess) and **yut**, a game of sticks, are popular; **ssireum** (wrestling) and **neolttwigi** (the plank seesaw) were festival pastimes. Joseon musicians left a notation of their own, the **Jeongganbo**, invented by Sejong.',
  { img: 'cor-pintura-kim-hongdo', leg: 'Scene of everyday life (ssireum) by Kim Hong-do, 18th – 19th centuries.' },
  { h: '10. Science and technology' },
  'Sejong’s reign was an explosion of inventions. **Jang Yeong-sil**, of plebeian origin, whom Sejong promoted to official, built, with other technicians, the automatic water clock **Jagyeongnu** (1434), the **rain gauge** (**cheugugi**, 1441, one of the first in the world with regular measurements), sundials and armillary spheres. In 1395 the star chart **Cheonsang Yeolcha Bunyajido** was carved, and in **1402** the world map **Kangnido** was produced. The **Chiljeongsan** (1442) reconciled the calendar with the real position of the Sun and Moon at Seoul. The **Dongui Bogam** (1613), by **Heo Jun**, is a great medical treatise, on the Memory of the World register since 2009. **Gunpowder** was developed by **Choe Mu-seon** (1377), and the cannon and the rocket cart (**hwacha**) were used in war.',
  { img: 'cor-chugugi', leg: 'Replica rain gauges (cheugugi) of the Joseon period, in the Jang Yeong-sil Science Garden, Busan; the original dates from the 15th century.' },
  { h: '11. Architecture and construction' },
  'Korean architecture is of **wood**, without nails, with elaborate brackets under the eaves and gently curving roofs. Temples were placed in mountains, in harmony with the landscape. The oldest survivals are mostly works in **stone**: granite pagodas (Silla), grottoes (Seokguram) and fortresses. **Cheomseongdae**, **Bulguksa** and the walls of **Hwaseong** are examples from three eras.',
  { img: 'cor-silla-coroa', leg: 'Gold crown of Silla with jade pendants and leaves, 5th – 6th century, National Museum of Korea.' },
  { h: '12. Ceramics and metals' },
  'Korea is famous for its ceramics. In **Goryeo**, potters made **celadon** (**cheongja**), with a jade-green glaze whose colour the Chinese envoy **Xu Jing** (1123) praised; around the 12th century they invented the **sanggam** technique, in which patterns are inlaid in clay of another colour. In **Joseon**, taste moved to **buncheong** (grey, rustic ware) and to **white porcelain**, a symbol of Confucian purity, and to blue-and-white. In gold, Silla produced extraordinary crowns, earrings and belts.',
  { img: 'cor-celadon-goryeo', leg: 'Celadon bottle with inlay (sanggam), Goryeo, 12th century.' },
  { h: '13. Printing' },
  'Paper reached Korea early, and **hanji**, made from mulberry bark, was famous. Woodblock printing is very old (the *Dharani Sutra*, before 751). In Goryeo, a shortage of books and the wars led to the use of **movable type** cast in metal: according to a note by **Yi Gyu-bo** (1241), the *Sangjeong Gogeum Yemun* was printed this way around 1234, but the book is lost. The **Jikji** (1377) is the oldest surviving. In Joseon, King Taejong set up a royal foundry (1403), and the type was improved several times. The Korean process stayed mostly in the hands of the state and the temples, and did not have the social impact that printing had in Europe.',
  { img: 'cor-goryeo-tipografia', leg: 'A movable metal type workshop in Goryeo (artistic reconstruction). (Illustrative AI-generated image.)' },
  { h: '14. War' },
  'Goguryeo was a military power: armoured horsemen, archers and a network of mountain **fortresses** (**sanseong**) that halted the Chinese armies. Silla created the young elite of the **hwarang** (“flowering youths”), which combined military training, study and ethics, and whose code (the **Five Precepts**) is attributed to the monk Wongwang. Goryeo used walls and, against the Mongols, withdrew to fortresses and islands. In Joseon the great novelty was the **navy**: the **panokseon**, a warship with a combat deck, and the **geobukseon**, the **turtle ship**, with a covered deck, which Yi Sun-sin used in 1592. Archers were the core of the army; firearms (arquebuses, cannon) became essential in the 17th century.',
  { img: 'cor-guerreiros-goguryeo', leg: 'Armoured Goguryeo horsemen, 4th – 5th centuries (artistic reconstruction). (Illustrative AI-generated image.)' },
  { img: 'cor-hwarang', leg: 'Young hwarang of Silla in training (artistic reconstruction). (Illustrative AI-generated image.)' },
  { img: 'cor-geobukseon', leg: 'Imagined reconstruction of one of Yi Sun-sin\'s turtle ships (geobukseon), 16th century (illustrative AI-generated image).' }
];

const personalidades = [
  'Korean history has known kings, monks, generals and scholars. The figures below are real; what is legend or doubtful is marked.',
  { h: 'Dangun (legend)' },
  'The mythical founder of Gojoseon, son of Hwanung and Ungnyeo. He is not a verifiable historical figure, but he is the most symbolic figure of Korean identity, and his legend was collected by the monk Iryeon in the 13th century.',
  { h: 'Gwanggaeto the Great (374 – 413)' },
  'King of **Goguryeo** from 391. He came to the throne at about 18 and, in a little over twenty years, conquered territory in Manchuria and on the peninsula. His stele at Ji’an, more than 6 metres high, describes the campaigns. He is the most celebrated king of the Three Kingdoms period.',
  { h: 'Eulji Mundeok (7th c.)' },
  'A Goguryeo general who, according to the chronicle, defeated the Sui at Salsu (612) by feigning retreat to lure the enemy on. There are few direct sources, and the account has legendary elements, but the victory was real.',
  { h: 'Queen Seondeok (r. 632 – 647)' },
  'The first woman to reign in Silla. According to tradition, she had Cheomseongdae and Hwangnyongsa temple built, and faced pressure from Baekje and Goguryeo by seeking Tang support.',
  { h: 'Kim Yushin (595 – 673)' },
  'A Silla general of Gaya descent who commanded the armies that defeated Baekje (660) and Goguryeo (668). He is a national hero, but his biography in the Samguk Sagi has many epic touches.',
  { h: 'Wonhyo (617 – 686)' },
  'A Silla monk, philosopher and prolific writer, he sought to unite the schools of Buddhism and took the doctrine to ordinary people. Tradition says that on the way to China he drank water from a puddle in a cave and understood that “everything is the work of the mind”; this is a late legend.',
  { h: 'Jang Bogo (c. 790 – 846)' },
  'A naval commander and merchant of humble origin, he controlled trade in the Yellow Sea from Cheonghaejin and is remembered as the “king of the seas”. He was murdered after becoming involved in disputes over the succession to the throne.',
  { h: 'Wang Geon (877 – 943)' },
  'Founder of **Goryeo** (918). He managed to unify the peninsula after the collapse of Silla through alliances and a policy of conciliation, and left instructions (the “Ten Injunctions”) for his successors.',
  { h: 'Jinul (1158 – 1210)' },
  'A **Seon** (Zen) monk who reformed Korean Buddhism, preached the union of meditation and the study of texts, and founded the Songgwangsa community. He remains a reference point of Korean Buddhism.',
  { h: 'Choe Mu-seon (c. 1325 – 1395)' },
  'A Goryeo scientist and official who learned to make **gunpowder** from Chinese merchants and founded the Office of Artillery (1377). His cannon were used against **wokou** pirates. (The date and the circumstances of the learning come from late accounts.)',
  { h: 'Jeong Do-jeon (c. 1342 – 1398)' },
  'A Neo-Confucian scholar and adviser to Yi Seong-gye, he designed the institutions of Joseon, the capital and the law code. He was killed in the dynastic struggle of 1398 by Prince Yi Bangwon, later Taejong.',
  { img: 'cor-hunmin-escrita', leg: 'Artistic reconstruction: King Sejong with the scholars of the Jiphyeonjeon, creating hangul. (Illustrative AI-generated image.)' },
  { h: 'Sejong the Great (1397 – 1450)' },
  'Fourth king of Joseon (r. 1418 – 1450), he is the most admired figure in Korean history. He supported science, music and agriculture, and protected the **Jiphyeonjeon**, a group of scholars. His greatest achievement was hangul. He suffered from poor eyesight, and there is debate about how much he worked on the alphabet alone or with the help of the scholars (tradition and the preface attribute its creation to him).',
  { img: 'cor-sejong-estatua', leg: 'Statue of King Sejong at Gwanghwamun, Seoul.' },
  { h: 'Jang Yeong-sil (15th c.)' },
  'An inventor of humble origin, born into a family of slaves or artisans (sources differ), whom Sejong promoted to official. He built clocks and astronomical instruments. He was punished in 1442 over a royal carriage that broke, and then vanishes from the records: the end of his life is unknown.',
  { h: 'Yi Sun-sin (1545 – 1598)' },
  'Korea’s greatest naval hero. In the Imjin wars he commanded the Jeolla fleet and, with the geobukseon and ingenious tactics, won some twenty-three engagements without losing a ship, according to tradition (the figure is debated). Arrested and tortured in 1597 after an intrigue, he was restored to command and, with 13 ships (tradition says 12 plus one), won at **Myeongnyang** on 26 October 1597 against a far superior Japanese fleet (sources give figures between 130 and more than 300 ships). He died at **Noryang** in 1598, hit by a bullet. He left a war diary, the **Nanjung Ilgi**.',
  { img: 'cor-yi-sun-sin-estatua', leg: 'Statue of Admiral Yi Sun-sin at Gwanghwamun, Seoul.' },
  { h: 'Heo Jun (1539 – 1615)' },
  'A royal physician who wrote the **Dongui Bogam** (“Treasured Mirror of Eastern Medicine”, 1613), in 25 volumes, with emphasis on prevention and on Korean medicinal plants.',
  { h: 'Jeong Yak-yong (Dasan, 1762 – 1836)' },
  'A scholar of the **Silhak** movement and engineer of Hwaseong. He wrote more than five hundred volumes on administration, law, agriculture and medicine. He was exiled for eighteen years because of his links with Catholicism.',
  { h: 'Kim Hong-do (1745 – c. 1806)' },
  'A court painter and portraitist who became famous for scenes of ordinary people (wrestlers, blacksmiths, villagers), lively in line and humour. He also painted landscapes and royal portraits.',
  { h: 'Queen Min (1851 – 1895)' },
  'Wife of King Gojong, she sought to balance the influence of the great powers. She was murdered by Japanese agents on 8 October 1895, in Gyeongbokgung Palace.'
];

const legado = [
  { h: 'What they left us' },
  { lista: [
    '**Hangul:** used today by more than 80 million people; Hangul Day is celebrated on 9 October in South Korea.',
    '**Printing with movable type:** the Jikji, in the Bibliothèque nationale de France, and the knowledge of bronze-casting technique.',
    '**The Tripitaka Koreana:** the most complete and oldest Buddhist canon on woodblocks, UNESCO Memory of the World (2007).',
    '**Tombs and murals:** the Goguryeo murals (World Heritage since 2004) and the tomb of King Muryeong are among the richest sources on ancient life.',
    '**Ceramics:** celadons and white porcelains influenced East Asia, and the deportation of Korean potters to Japan in 1592 – 1598 launched Japanese porcelain at Arita (the “ceramics war”).',
    '**Daily life:** the ondol, kimchi, the hanbok and the cult of ancestors are still alive.',
    '**The language:** Korean is spoken by about eighty million people.'
  ] },
  { h: 'Art' },
  'Korean art is distinguished by an aesthetic of naturalness and restraint: Joseon **landscape painting** (Jeong Seon, 1676 – 1759, with his “true views” of Korea), **portraits**, the paintings of ordinary people by Kim Hong-do and Shin Yun-bok, and **calligraphy**. The Buddhist sculpture of Silla, with the Buddha of Seokguram, is among the greatest in Asia.',
  { img: 'cor-seokguram', leg: 'Interior of the Buddhist temple beside the Seokguram Grotto, Gyeongju (UNESCO); the grotto holds a granite Buddha of c. AD 774.' },
  { h: 'Architecture' },
  'The Joseon palaces, mountain temples and fortresses are the best testimony. Much was destroyed in wars: Hwangnyongsa burned in 1238, in the Mongol invasions, and the wooden part of Bulguksa was burned in the war of 1592 – 1598 and rebuilt later. The most notable thing is the **attention to landscape**: house and palace fit into the mountains.',
  { h: 'The challenges of memory: what we know and what is debated' },
  { lista: [
    '**Dangun and the founding dates:** 2333 BC, and 57, 37 and 18 BC are dates from chronicles, not from archaeology.',
    '**The territory of Goguryeo and Balhae:** who is the “heir” of these kingdoms is argued between Korea and China, and has political implications. Academic historians treat them as part of both Korean history and the history of Manchuria.',
    '**Mimana and Gaya:** the Japanese thesis that Japan controlled Gaya (Mimana) is rejected by most Korean historians, and debated.',
    '**Sejong’s role in hangul:** was it collective work or Sejong’s? Tradition says Sejong was the main author.',
    '**The Jikji and Gutenberg:** they are independent technologies; there is no proof that one influenced the other.'
  ] },
  { h: 'Modern discovery' },
  'Much of what we know comes from recent discoveries: the **tomb of King Muryeong** (Baekje) was found in 1971, intact, with more than 2,900 objects; the **Dharani Sutra** was discovered in 1966; the **Baekje incense burner** was found in 1993, in a water tank of a workshop at the former temple site of Neungsan-ri. The **Jikji** was taken to France by the diplomat **Victor Collin de Plancy** (bought in Seoul, in the late 19th century), and identified by the librarian **Park Byeong-seon** (1972), at an exhibition in Paris.',
  { h: 'Where to visit' },
  { lista: [
    '**Seoul:** Gyeongbokgung and Changdeokgung palaces, Jongmyo, the National Museum of Korea, the Bukchon district.',
    '**Gyeongju:** Bulguksa, Seokguram, Cheomseongdae, Anapji and the tombs (UNESCO, 2000).',
    '**Gongju and Buyeo:** Baekje tombs and relics (UNESCO, 2015).',
    '**Haeinsa:** the Tripitaka Koreana (UNESCO, 1995).',
    '**Suwon:** the Hwaseong fortress (UNESCO, 1997).',
    '**Hahoe and Yangdong:** historic villages (UNESCO, 2010).',
    '**Ganghwa Island:** the dolmens (UNESCO, 2000) and the forts.',
    '**Outside Korea:** the stele of Gwanggaeto and the Goguryeo tombs at Ji’an (China); the Jikji, in the Bibliothèque nationale de France in Paris, which shows it only rarely.'
  ] }
];

const quiz = [
  { p: 'According to legend, who founded Gojoseon in 2333 BC?', op: ['Jumong', 'Dangun', 'Wang Geon', 'Yi Seong-gye'], certa: 1, exp: 'Dangun, son of Hwanung and the bear who became a woman; it is a legend recorded in the Samguk Yusa (c. 1280).' },
  { p: 'Which were the Three Kingdoms of Korea?', op: ['Goguryeo, Baekje and Silla', 'Goryeo, Joseon and Silla', 'Gaya, Balhae and Joseon', 'Goguryeo, Goryeo and Joseon'], certa: 0, exp: 'Goguryeo (north), Baekje (south-west) and Silla (south-east), plus the Gaya confederation.' },
  { p: 'Which king of Goguryeo doubled the territory and has a great stele at Ji’an?', op: ['Gwanggaeto', 'Sejong', 'Munmu', 'Gojong'], certa: 0, exp: 'Gwanggaeto the Great (r. 391 – 413); the stele was raised in 414.' },
  { p: 'Who defeated the Sui army at Salsu in 612?', op: ['Yi Sun-sin', 'Eulji Mundeok', 'Kim Yushin', 'Jang Bogo'], certa: 1, exp: 'The Goguryeo general Eulji Mundeok, according to the chronicle.' },
  { p: 'In what year did Silla unify most of the peninsula after expelling the Tang?', op: ['476', '660', '676', '918'], certa: 2, exp: 'In 676; Baekje had fallen in 660 and Goguryeo in 668.' },
  { p: 'Which monument in Gyeongju is one of the oldest surviving astronomical observatories in East Asia?', op: ['Cheomseongdae', 'Hwaseong', 'Haeinsa', 'Anapji'], certa: 0, exp: 'Cheomseongdae, attributed to the reign of Queen Seondeok (7th century).' },
  { p: 'What is the Tripitaka Koreana?', op: ['A world map', 'A Buddhist canon carved on 81,258 woodblocks', 'A medical treatise', 'A royal chronicle'], certa: 1, exp: 'Carved between 1236 and 1251, it is kept at Haeinsa.' },
  { p: 'Which is the oldest surviving book printed with movable metal type?', op: ['The Gutenberg Bible', 'The Jikji (1377)', 'The Hunminjeongeum', 'The Samguk Sagi'], certa: 1, exp: 'The Jikji was printed at Cheongju in 1377, almost eighty years before the Gutenberg Bible.' },
  { p: 'Where does the name “Korea” come from?', op: ['From Silla', 'From Goryeo', 'From Joseon', 'From Balhae'], certa: 1, exp: 'Goryeo (Koryo), a name that reached the West through Persian and Arab merchants and European travellers (Marco Polo wrote “Cauli”).' },
  { p: 'In what year was the Joseon dynasty founded?', op: ['1259', '1392', '1443', '1592'], certa: 1, exp: 'Yi Seong-gye became king in 1392, and the capital moved to Hanyang (Seoul) in 1394.' },
  { p: 'Which king promulgated the hangul alphabet in 1446?', op: ['Taejo', 'Jeongjo', 'Sejong', 'Gojong'], certa: 2, exp: 'King Sejong and the scholars of the Jiphyeonjeon created hangul in 1443 and promulgated it in 1446.' },
  { p: 'What was the geobukseon?', op: ['A covered-deck turtle ship', 'A script', 'A fortress', 'A type of pottery'], certa: 0, exp: 'The “turtle ship” used by Yi Sun-sin in the Imjin War (1592 – 1598).' },
  { p: 'In which battle in 1597 did Yi Sun-sin defeat a far superior Japanese fleet with 13 ships?', op: ['Hansando', 'Noryang', 'Myeongnyang', 'Salsu'], certa: 2, exp: 'At Myeongnyang, on 26 October 1597 (the numbers of Japanese ships are debated).' },
  { p: 'What was the class of scholars and officials in Joseon society?', op: ['Yangban', 'Hwarang', 'Nobi', 'Sangmin'], certa: 0, exp: 'The yangban were the elite who could sit the gwageo examinations.' },
  { p: 'What happened on 12 October 1897?', op: ['The Korean Empire was proclaimed', 'Hangul was invented', 'Yi Sun-sin died', 'Silla fell'], certa: 0, exp: 'Gojong proclaimed the Korean Empire (Daehan Jeguk) and took the title of emperor.' }
];

export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };
