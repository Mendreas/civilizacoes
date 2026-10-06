// JAPAN (to AD 1573): full English content. Same structure and image ids as dados.js.
// Dates are approximate; the oldest are the most uncertain. The Tokugawa period and Meiji era are left for later (see the note at the end of the timeline).

const visao = [
  { caixa: 'In brief', texto: [
    '**Japan** is an archipelago of mountains and sea at the eastern edge of Asia. Down to 1573 its history runs from hunter-gatherers who made some of the oldest pottery known (**Jōmon**), through rice and metal farmers (**Yayoi**) and kings buried in giant tombs (**Kofun**), to the imperial courts of **Nara** and **Kyoto** (Heian), the world of the **samurai** and the shoguns of Kamakura and the Ashikaga, and a century of civil war (**Sengoku**) that ended with the unification begun by Oda Nobunaga.',
    'Along the way Japan took writing, Buddhism and the model of the state from China, but changed everything in its own way: it invented the **kana syllabaries**, produced what many consider the first great novel in the world (the **Tale of Genji**, by a woman, Murasaki Shikibu), created a warrior class that ruled for some seven hundred years, and shaped an aesthetic (tea, rock gardens, Noh theatre) that still defines the country’s image. In **1543** the first Portuguese arrived, and that is where this page stops.'
  ] },
  { img: 'jap-mapa-regiao', leg: 'Relief map of the Japanese archipelago and neighbouring regions' },
  { h: 'Where it lay' },
  'Japan is made up of more than six thousand islands, but most of the history down to 1573 happens on four: **Honshū** (the largest, with Nara, Kyoto and Kamakura), **Kyūshū** (the gateway to Korea and China), **Shikoku** and, in the north, **Hokkaidō**, home of the **Ainu**, which was integrated only much later. The interior is mountainous (about three quarters of the land), with few plains, where rice and the population were concentrated. The sea, about 200 km wide at its narrowest to Korea, isolated the country enough to let it develop in its own way, and opened it enough to receive ideas, techniques and people from the continent.',
  'The name “Japan” is not Japanese. The Japanese call their country **Nihon** or **Nippon** (“origin of the sun”), a name that appears in the 7th century; before that the Chinese spoke of **Wa**. The word “Japan” comes from an old Chinese form, which Marco Polo rendered as “Cipangu”, and reached Europe through Malay (*Jepang*). The Portuguese were among the first Europeans to use it in the form we know.',
  { img: 'jap-monte-fuji', leg: 'Mount Fuji seen from Lake Kawaguchi' },
  { h: 'When it existed' },
  'Japanese history is divided into “periods” with their own names, usually after the seats of power. This table follows the dates most used by historians; the oldest are approximate.',
  { tabela: { cab: ['Period', 'Approximate dates', 'What marks it'], linhas: [
    ['Jōmon', 'c. 14000 – 300 BC', 'Semi-sedentary hunter-gatherers; cord-marked pottery; clay figures (dogū)'],
    ['Yayoi', 'c. 900 (or 800) BC – c. AD 250', 'Irrigated rice, bronze and iron from the continent; fortified villages; kingdoms of Wa'],
    ['Kofun', 'c. AD 250 – 538', 'Great keyhole-shaped tombs; formation of the Yamato state'],
    ['Asuka', '538 – 710', 'Arrival of Buddhism, Prince Shōtoku, Taika reforms, first laws on the Chinese model'],
    ['Nara', '710 – 794', 'First permanent capital; Tōdai-ji and the Great Buddha; Kojiki, Nihon Shoki and Man’yōshū'],
    ['Heian', '794 – 1185', 'Capital at Heian-kyō (Kyoto); Fujiwara regents; kana, Tale of Genji; birth of the samurai'],
    ['Kamakura', '1185 – 1333', 'First shogunate; Mongol invasions (1274, 1281); Zen and Pure Land Buddhism'],
    ['Muromachi', '1336 – 1573', 'Ashikaga shoguns; Kinkaku-ji, Noh, tea; Ōnin War (1467–1477) and Sengoku era; first Portuguese (1543)']
  ] } },
  { h: 'Who were the Japanese?' },
  'The Japanese population has at least two major roots. The **Jōmon** had lived in the archipelago for thousands of years; between c. 900 and 300 BC groups of **Yayoi farmers** arrived from the Korean peninsula and the continent, and the two peoples mixed. Today genetic studies show this mixture, in proportions that vary from region to region, and the Japanese language has no proven relationship with any other (the Korean and Altaic hypotheses are debated; its relationship with Ryukyuan is certain). In the north, the **Ainu** formed a people apart, with their own language and culture.',
  { h: 'Why they matter' },
  { lista: [
    '**Pottery and settled life without farming:** Jōmon pottery is among the oldest in the world and shows a complex society of hunter-gatherers.',
    '**The longest monarchy:** the Japanese imperial family is the oldest continuous royal line in the world, though its real power was often symbolic.',
    '**Literature:** the Tale of Genji (c. 1010) by Murasaki Shikibu and the Pillow Book of Sei Shōnagon are among the most admired texts in world literature, written by women in their own language, Japanese, rather than in Chinese.',
    '**Samurai and shogunate:** for nearly seven hundred years (1185–1868) real power lay with warriors, not the emperor, a rare case in world history.',
    '**Aesthetics and religion:** Shinto, Zen Buddhism, tea, gardens and Noh created a sensibility (the beauty of the simple and the transient) that became the country’s hallmark.'
  ] },
  { caixa: 'Japan today', texto: 'Many places in this story are UNESCO World Heritage Sites: the **Jōmon sites** of northern Honshū and Hokkaidō (2021), the **Mozu-Furuichi** tombs (2019), **Hōryū-ji** (1993), the monuments of ancient **Nara** (1998) and ancient **Kyoto** (1994). There are national museums in Tokyo, Kyoto, Nara and Kyushu, and most of what is described here can be visited.' },
  { img: 'jap-genji-emaki', leg: 'Detail from the Yadorigi chapter of the Genji Monogatari Emaki, 12th century, Tokugawa Art Museum.' }
];

const linha = [
  'This timeline follows the main events of Japanese history to 1573. Dates are approximate at the beginning; those given by the Japanese chronicles (Kojiki, Nihon Shoki) for the earliest times are tradition, not proven history.',
  { linha: [
    { d: 'c. 14000 BC or earlier', t: 'The oldest pottery', x: 'In the archipelago, vessels of fired clay appear, among the oldest in the world (China and the Russian Far East have comparable dates). They mark the start of the **Jōmon** period, “cord marking”, the name of the pattern the pottery later received. The Jōmon hunted, fished and gathered nuts and chestnuts.' },
    { d: 'c. 3500 – 2000 BC', t: 'Sannai-Maruyama and “flame” pottery', x: 'At **Sannai-Maruyama** (Aomori) a large village was inhabited for more than 1,500 years. In central Japan people make vessels with exuberant rims, the “flame” type, and clay figures, the **dogū**. We do not know exactly what they were for.' },
    { d: 'c. 900 – 800 BC', t: 'Irrigated rice arrives', x: 'From northern Kyūshū the **Yayoi culture** spreads: flooded rice fields, bronze and iron, looms, villages with ditches and palisades. The dates are debated (radiocarbon tests pushed the start back by about 500 years from the old idea of c. 300 BC).' },
  ] },
  { img: 'jap-jomon-aldeia', leg: 'Jōmon village in northern Honshu, c. 3000 BC. AI-generated illustration.' },
  { img: 'jap-jomon-vaso-chama', leg: 'Flame-style Jōmon pottery vessel, Tokyo National Museum' },
  { img: 'jap-jomon-dogu', leg: 'Jōmon clay dogū figurine' },
  { img: 'jap-yayoi-arrozal', leg: 'Yayoi village and rice paddies in northern Kyushu, c. 200 BC. AI-generated illustration.' },
  { linha: [
    { d: 'c. 100 BC – AD 250', t: 'The “kingdoms of Wa”', x: 'Chinese chronicles describe Japan as a land of dozens of small kingdoms of **Wa**. In AD 57, according to the *Book of the Later Han*, the “king of Na” received a gold seal from the Chinese emperor: a seal of this kind was found in 1784 on the island of Shikanoshima. **Yoshinogari** (Saga) is the most complete Yayoi site, with a wall, ditches and watchtowers.' },
  ] },
  { img: 'jap-yoshinogari', leg: 'Reconstructed Yayoi dwellings at Yoshinogari' },
  { img: 'jap-dotaku', leg: 'Yayoi bronze dōtaku bell' },
  { linha: [
    { d: 'c. AD 239', t: 'Queen Himiko and Yamatai', x: 'The *Wei Zhi* (a Chinese chronicle from the late 3rd century) says that a kingdom called **Yamatai** was ruled by the shaman-queen **Himiko**, who in 238/239 sent ambassadors to the kingdom of Wei and received the title “queen of Wa, friend of Wei”. Where Yamatai lay (Kyūshū or the Nara region) is one of the oldest debates in Japanese history.' },
    { d: 'c. 250 – 538', t: 'The great tombs', x: 'In central Japan (Yamato) monumental **keyhole-shaped** tombs (*zenpō-kōen-fun*) are built. They are surrounded by moats and by **haniwa**, clay cylinders and figures. They mark the power of a caste of kings and allied chiefs: this is the **Kofun** period, “old tomb”.' },
  ] },
  { img: 'jap-kofun-construcao', leg: 'Conjectural construction of a fifth-century kofun tomb. AI-generated illustration.' },
  { img: 'jap-daisen-kofun', leg: 'Aerial view of Daisen Kofun, Sakai' },
  { img: 'jap-haniwa', leg: 'Haniwa warrior figurine, fifth–sixth centuries' },
  { linha: [
    { d: 'c. 400 – 500', t: 'Writing, iron and immigrants', x: 'From Korea (Baekje, Silla, Gaya) come craftsmen, scribes and techniques: ironworking, horses, wheel-thrown pottery (Sue ware), weaving, Chinese writing. Tradition speaks of a scholar, **Wani**, who supposedly brought the *Analects* of Confucius; that is legend, but the contact is real. An iron sword from Inariyama (Saitama), dated 471 or 531, carries the name of the king **Wakatakeru**, probably Yūryaku, the “Bu” of the Chinese chronicles.' },
    { d: '538 / 552', t: 'Buddhism enters', x: 'The king of Baekje, in Korea, sends Japan a Buddha statue and scriptures. The date is debated (538 or 552). The court splits: the **Soga** want to accept the new cult, while the **Mononobe** and the **Nakatomi**, defenders of the local gods (kami), refuse. The Soga win in 587.' },
    { d: '593 – 622', t: 'Suiko and Prince Shōtoku', x: 'Empress **Suiko** reigns with her nephew, Prince **Shōtoku** (574–622), as regent. In 603 they create twelve court ranks, in 604 a “seventeen-article constitution” (more a moral code than a constitution) and in 607 they send an embassy to Sui China. **Hōryū-ji** is founded, near Nara.' },
    { d: '645', t: 'The Taika Reforms', x: 'Prince Naka no Ōe and **Nakatomi no Kamatari** kill **Soga no Iruka** in front of the empress and overthrow the Soga family. A programme of reforms on the Chinese model follows: state land, census, taxes, provinces. They are called the “Taika reforms” (645–649); historians debate what was really done and what was written later.' },
    { d: '663 – 672', t: 'Defeat in Korea and civil war', x: 'In 663, at the battle of Baekgang (Hakusukinoe), Japan and its ally Baekje are beaten by Silla and Tang China. Fortresses are built in Kyūshū for defence. In 672 the **Jinshin** war pits two members of the imperial family against each other; Emperor **Tenmu** wins and strengthens the ruler’s power.' },
    { d: '701 – 710', t: 'The Taihō Code and the first permanent capital', x: 'The **Taihō Code** (701) sets the Chinese system of ministries and provinces in law. In 710 the court moves to **Heijō-kyō** (Nara), laid out on a grid like the Tang capital, Chang’an.' },
    { d: '712 and 720', t: 'Kojiki and Nihon Shoki', x: 'Japan’s two oldest chronicles are written. The **Kojiki** (712) and the **Nihon Shoki** (720) combine myths of the gods with the history of the emperors, and serve to give legitimacy to the imperial line. They treat origins as history, but the first “emperors” are legendary.' },
    { d: '735 – 752', t: 'The epidemic and the Great Buddha', x: 'A smallpox epidemic (735–737) kills perhaps a quarter to a third of the population. Emperor **Shōmu** orders **Tōdai-ji** and a huge bronze statue of the Buddha Vairocana to be built in Nara, inaugurated in 752 with monks from all over Asia.' },
  ] },
  { img: 'jap-todaiji', leg: 'Daibutsuden of Tōdai-ji, Nara' },
  { img: 'jap-hyakumanto', leg: 'Hyakumantō Darani printed prayer, c. 770, Metropolitan Museum (30.47a–c).' },
  { linha: [
    { d: '784 – 794', t: 'Nagaoka and Heian-kyō', x: 'Emperor **Kanmu** leaves Nara, where the monasteries had too much weight, and after trying Nagaoka founds in 794 the new capital, **Heian-kyō**, “capital of peace and tranquillity”, the future **Kyoto**. It will be the seat of the court for more than a thousand years.' },
    { d: '804 – 806', t: 'Saichō and Kūkai in China', x: 'Two monks travel to China and return with new schools: **Saichō** (Tendai) and **Kūkai** (Shingon). They will shape Japanese Buddhism for centuries.' },
    { d: 'c. 850 – 1068', t: 'The Fujiwara regency', x: 'The **Fujiwara** family marries its daughters to the emperors and governs as **sesshō** (regent of a child emperor) and **kanpaku** (regent of an adult). In 858 Yoshifusa is the first non-imperial regent. Power peaks with **Fujiwara no Michinaga** (966–1028).' },
    { d: 'c. 900 – 1000', t: 'Kana, Kokinshū and court literature', x: 'The **hiragana** and **katakana** syllabaries appear. In 905 the *Kokinshū* anthology of poems is compiled; between c. 1000 and c. 1010 the *Pillow Book* (Sei Shōnagon) and the *Tale of Genji* (Murasaki Shikibu) are written.' },
    { d: '901', t: 'Michizane in exile', x: 'The scholar and minister **Sugawara no Michizane** (845–903) is accused by the Fujiwara and exiled to Dazaifu, in Kyūshū, where he dies. Later, when misfortunes strike the court, they are blamed on his anger; he comes to be worshipped as the god **Tenjin**, patron of learning.' },
    { d: '939 – 1050', t: 'The first warriors', x: 'In the provinces, families of **mounted warriors**, the bushi, gain power by guarding estates and putting down revolts, such as that of **Taira no Masakado** (939). Through the 11th century the **Minamoto** and **Taira** families become the armed arm of the court.' },
    { d: '1053', t: 'The Phoenix Hall', x: 'Fujiwara no Yorimichi has the **Byōdō-in** built, in Uji: a palace turned into a temple, with the figure of the Buddha Amida, the ideal of the “Pure Land”.' },
  ] },
  { img: 'jap-byodoin', leg: 'Phoenix Hall of Byōdō-in, Uji' },
  { linha: [
    { d: '1180 – 1185', t: 'The Genpei War', x: 'Between the **Taira**, who dominate the court under Taira no Kiyomori, and the **Minamoto**, the war ends at the naval battle of **Dan-no-ura** (1185), where the Taira are destroyed and the child emperor Antoku drowns with his grandmother. This story gives us the *Tale of the Heike*, the great epic of the samurai.' },
    { d: '1185 – 1192', t: 'Yoritomo and the first shogunate', x: '**Minamoto no Yoritomo** (1147–1199), the victor, sets up his government in **Kamakura**, far from the court. In 1192 he receives the title **sei-i taishōgun** (“barbarian-subduing generalissimo”), shortened to **shogun**. His government, the **bakufu** (“tent government”), controls the army and justice, while the court of Kyoto continues to reign.' },
    { d: '1203 – 1221', t: 'The Hōjō regents', x: 'After Yoritomo’s death, the family of his wife, **Hōjō Masako**, takes power as regents of the shoguns. In 1221 they defeat the retired emperor Go-Toba’s attempt to recover power (the Jōkyū War). In 1232 the **Jōei Code** (Goseibai Shikimoku) is issued, the first law for warriors.' },
    { d: 'c. 1200 – 1253', t: 'New Buddhisms', x: 'The popular **Pure Land** faith (Hōnen, Shinran), **Zen** (Eisai, Dōgen) and the **Nichiren** movement give Buddhism simpler paths. The Great Buddha of Kamakura, in bronze, is completed c. 1252.' },
    { d: '1274 and 1281', t: 'The Mongol invasions', x: 'The **Yuan** dynasty of Kublai Khan sends two fleets against Japan: in 1274 (c. 30,000 men, from Korea, according to the sources) they reach Hakata, win the first fights, but withdraw; in 1281 two great fleets (c. 140,000 men in all, according to the sources; the figures are debated) are attacked and partly destroyed by a **typhoon**. The Japanese had built a wall at Hakata.' },
  ] },
  { img: 'jap-mongol-rolo', leg: 'Mongol invasion handscroll, Mōko Shūrai Ekotoba' },
  { img: 'jap-tempestade-mongol', leg: 'Typhoon striking the invading Yuan fleet off Hakata Bay, 1281. AI-generated illustration.' },
  { linha: [
    { d: '1333', t: 'The fall of Kamakura', x: 'The invasions left the samurai without booty to pay for the war, and discontent grows. Emperor **Go-Daigo** revolts; the general **Ashikaga Takauji** switches to his side, and **Nitta Yoshisada** takes Kamakura. It is the end of the Hōjō. Go-Daigo’s “Kenmu Restoration” is short-lived.' },
    { d: '1336 – 1392', t: 'Two courts', x: 'Takauji breaks with Go-Daigo, installs another emperor in Kyoto and founds the **Ashikaga**, or **Muromachi**, shogunate. Go-Daigo flees to the mountains of Yoshino and a “Southern court” forms. The **Northern and Southern Courts** are reunited only in 1392, under **Ashikaga Yoshimitsu**.' },
    { d: '1397 – 1408', t: 'Yoshimitsu and the Golden Pavilion', x: '**Yoshimitsu** builds **Kinkaku-ji** (1397), trades with Ming China (he accepts the title “king of Japan” in 1402) and patronizes Noh theatre. It is the peak of the Ashikaga shogunate.' },
    { d: 'c. 1400 – 1450', t: 'Zeami and Noh', x: '**Kan’ami** and his son **Zeami** (c. 1363–c. 1443) turn a popular art of dance and song into Noh theatre, with masks, an aesthetic of simplicity and dozens of texts still performed today.' },
    { d: '1467 – 1477', t: 'The Ōnin War', x: 'A dispute over the succession of Shogun Yoshimasa and between the powerful Hosokawa and Yamana razes Kyoto over ten years. Central power stops working. The **Sengoku era** (“Warring States”) begins, in which regional lords, the **daimyō**, fight each other. It is the age of *gekokujō*, “the low overthrow the high”.' },
    { d: '1482 – 1490', t: 'Ginkaku-ji and the Higashiyama taste', x: 'Shogun **Yoshimasa**, more artist than ruler, builds the Silver Pavilion and surrounds himself with painters, poets and tea masters. Much of the traditional “Japanese” taste is born here: tatami, sliding panels, rock gardens, the tea ceremony, flower arranging.' },
  ] },
  { img: 'jap-kinkakuji', leg: 'Kinkaku-ji, Kyoto' },
  { linha: [
    { d: '1543', t: 'The Portuguese at Tanegashima', x: 'Around 1543 (the traditional, debated date), a Chinese ship carrying Portuguese reaches the island of **Tanegashima**, south of Kyūshū. The island’s lord, **Tanegashima Tokitaka**, buys two firearms (arquebuses) and has them copied. Within a few decades Japan is producing firearms on a large scale, possibly more than any European country.' },
    { d: '1549', t: 'Francis Xavier at Kagoshima', x: 'The Jesuit **Francis Xavier**, with the Japanese **Anjirō** as guide, lands at Kagoshima. He stays two years and leaves the beginnings of a Christian community. Trade and mission (the so-called **Nanban trade**, of the “southern barbarians”) bring silver, silk, weapons and new words.' },
    { d: '1560 – 1568', t: 'Nobunaga rises', x: '**Oda Nobunaga** (1534–1582) defeats the great lord Imagawa Yoshimoto at **Okehazama** (1560) and enters Kyoto in 1568 backed by Shogun **Ashikaga Yoshiaki**.' },
    { d: '1573', t: 'End of the Muromachi shogunate', x: 'Nobunaga expels Yoshiaki from Kyoto. It is the end of the Ashikaga shogunate, marking the end of the Muromachi period. Nobunaga continues the war of unification until 1582, when he dies at Honnō-ji temple, betrayed by his general Akechi Mitsuhide.' },
  ] },
  { caixa: 'And after 1573?', texto: '**Toyotomi Hideyoshi** completes unification (1590) and in 1592 and 1597 invades Korea without success. **Tokugawa Ieyasu** wins at Sekigahara (1600) and becomes shogun in 1603, beginning the **Tokugawa (Edo) period**, of peace and isolation, until 1868, when the **Meiji Restoration** opens Japan to modernization. Those eras lie outside this project, which stops at the time when Portugal and Japan met.' }
];

const mapa = [
  'Early Japan did not have a single city-state, but a succession of capitals and centres of power that moved around the country. These are the main ones, with what made them important.',
  { tabela: { cab: ['Place', 'Period', 'Where today', 'What it is known for'], linhas: [
    ['Yoshinogari', 'Yayoi', 'Saga, Kyūshū', 'Large fortified village; image of the “kingdoms of Wa”'],
    ['Yamato / Asuka', 'Kofun – Asuka', 'Nara Prefecture', 'Seat of the kings and emperors until 710; first Buddhist temples'],
    ['Mozu-Furuichi', 'Kofun', 'Sakai and Habikino, Osaka', 'Group of monumental tombs, including the Daisen Kofun'],
    ['Heijō-kyō (Nara)', '710 – 784', 'Nara', 'First permanent capital; Tōdai-ji, Shōsō-in'],
    ['Heian-kyō (Kyoto)', '794 – 1868 (court)', 'Kyoto', 'Imperial capital for over a thousand years; literature, temples, gardens'],
    ['Kamakura', '1185 – 1333', 'Kanagawa Prefecture', 'Seat of the first shogunate; Great Buddha'],
    ['Hakata (Fukuoka)', 'throughout', 'Fukuoka, Kyūshū', 'Port of trade with Korea and China; target of the Mongol invasions'],
    ['Sakai and Hyōgo', 'Muromachi', 'Osaka and Kobe', 'Ports of rich, self-governing merchants'],
    ['Nagasaki', 'from 1571', 'Nagasaki, Kyūshū', 'Port opened to the Portuguese and the Jesuits'],
    ['Shuri', 'Ryukyu', 'Naha, Okinawa', 'Capital of the kingdom of Ryukyu, between Japan, China and Southeast Asia']
  ] } },
  { h: 'Nara: the first capital' },
  'In 710 the court moved to **Heijō-kyō**, today’s Nara, with streets on a grid, a palace and dozens of temples. It may have had about 100,000 to 200,000 inhabitants (estimates vary). It had markets with copper coins, a university to train officials and **Tōdai-ji**. Much of what we know of daily life comes from wooden tablets (*mokkan*) found in the excavations, bearing requests, taxes and labels on goods.',
  { img: 'jap-heijokyo-vista', leg: 'Conjectural reconstruction of Heijō-kyō, Nara, in the eighth century. AI-generated illustration.' },
  { h: 'Kyoto: the capital of peace' },
  'Founded in 794 on a site chosen by Chinese principles (mountains to the north, rivers east and west), **Heian-kyō** was the imperial capital until the court moved to Tokyo in 1868. It lost political importance when the shogunate settled in Kamakura, but remained the centre of the court, culture and religion; it became the seat of power again under the Ashikaga. The palace and many districts were destroyed in the Ōnin War (1467–1477) and rebuilt in the following decades.',
  { img: 'jap-corte-heian', leg: 'Women of the Heian court, c. 1000. AI-generated illustration.' },
  { h: 'Kamakura and the world of the samurai' },
  'Kamakura, on the Pacific coast, ringed by hills on three sides, was easy to defend. Yoritomo chose it because it was a land of his family and far from the intrigues of the court. It grew to tens of thousands of inhabitants, with prestigious Zen temples and the bronze Great Buddha.',
  { h: 'Hakata, Sakai and the sea routes' },
  'Japan was always linked to the continent by sea routes. **Hakata**, in northern Kyūshū, was the port of embarkation for Korea and China and the place of arrival of monks, traders and (in 1274 and 1281) invaders. In the 15th and 16th centuries **Sakai** grew rich as a merchant port, self-governed by councils, and was one of the centres of the tea ceremony. The pirate fleets, the **wakō**, raided the coasts of Korea and China and traded with both. Chinese copper coins, silk and porcelain came in; sulphur, copper, swords and, in the 16th century, silver went out, from mines such as **Iwami**, discovered around 1526.',
  { h: 'The worlds on the margin: Ainu and Ryukyu' },
  { img: 'jap-shuri', leg: 'Hōshinmon Gate of the reconstructed Shuri Castle, Okinawa; photograph taken in 2016.' },
  { caixa: 'Note', texto: [
    '**Ainu.** In the north lived the Ainu people, with their own language, hunters, fishers and gatherers, with a religion of spirits (*kamui*). They appear in Japanese chronicles as **Emishi** (the peoples of the northeast, who resisted the armies of Kyoto until the 9th century) and later as **Ezo**. The frontier advanced northward over centuries, and around 1600 the Matsumae clan came to hold a monopoly on trade with the Ainu.',
    '**Ryukyu.** The Okinawa archipelago was united in 1429 as the **kingdom of Ryukyu**, with its capital at **Shuri**, which grew rich on trade between China, Japan, Korea and Southeast Asia and paid tribute to Ming China. It was invaded by the Satsuma clan only in 1609 and annexed by Japan only in 1879. Part of the population today speaks Ryukyuan languages, related to Japanese but distinct.'
  ] }
];

const sociedade = [
  { h: '1. Political organization' },
  'Japan had, at the same time, **two centres of power**: the emperor and the court, who reigned, and (from 1185) the shogun and the warriors, who governed. In the Yamato era, power was an alliance of clans (**uji**) headed by the king. The Taika reforms and the Taihō Code created a state on the Chinese model, the **ritsuryō**: ministries, provinces (*kuni*), population registers and taxes. But, unlike China, there were no entrance examinations: birth and family counted.',
  { lista: [
    '**Heian court:** the emperor (*tennō*) reigns, the Fujiwara govern as regents. Land passes gradually into **private estates** (*shōen*), many tax-exempt.',
    '**Kamakura shogunate:** the shogun and his vassals (**gokenin**) govern through military governors (**shugo**) and land stewards (**jitō**), while the court keeps legitimacy.',
    '**Muromachi shogunate:** the shogun depends on the **shugo-daimyō**, who become almost independent lords, until war breaks out.',
    '**Sengoku era:** the **daimyō** are territorial lords with their own armies, castles and local laws. Some were former retainers who rose by merit or treachery.'
  ] },
  { img: 'jap-esquema-sociedade', leg: 'Simplified illustrative scheme of medieval Japan’s political order. AI-generated illustration.' },
  { h: '2. Social classes' },
  { lista: [
    '**Emperor and imperial family:** descended, according to tradition, from the goddess Amaterasu; sacred, but often without real power.',
    '**Court nobility (kuge):** the Fujiwara and other families, in offices and ceremonies.',
    '**Warriors (bushi, samurai):** from c. 1185, the effective ruling class. “Samurai” comes from the verb *saburau*, “to serve”.',
    '**Monks and priests:** some monasteries (Enryaku-ji, Kōfuku-ji) had armies of **warrior monks** (*sōhei*).',
    '**Peasants:** the great majority; they paid in rice and labour. In the villages, in the 15th and 16th centuries, leagues for defence and revolts (*ikki*) were organized.',
    '**Artisans and merchants:** organized in guilds (*za*) under the protection of temples and nobles; they gained weight in cities such as Sakai.',
    '**Outcasts:** groups considered “impure” because of their occupations (tanners, gravediggers), who suffered discrimination.'
  ] },
  { caixa: 'The four-class division', texto: 'The famous order “warrior, peasant, artisan, merchant” (*shi-nō-kō-shō*) belongs to the **Tokugawa** era, not the time we are discussing. Before 1573 the boundaries were blurrier: there were peasants who fought, samurai who farmed and monks who took up arms.' },
  { h: '3. Religion' },
  'Japanese religion is a coexistence of two great traditions, which were not opposed. **Shinto** (*Shintō*, “way of the gods”) venerates the **kami**, spirits of mountains, rivers, trees, ancestors and gods, in shrines marked by a gate (*torii*). **Buddhism**, which arrived in the 6th century, brought temples, scriptures, images and an idea of salvation. Syncretism (*shinbutsu-shūgō*) meant that most people prayed in both.',
  { tabela: { cab: ['Deity / figure', 'Domain', 'Shrine or cult'], linhas: [
    ['Izanagi and Izanami', 'Creator couple: they give birth to the islands and the gods', 'Myths of the Kojiki'],
    ['Amaterasu Ōmikami', 'Sun goddess; ancestor of the imperial family', 'Ise Shrine'],
    ['Susanoo', 'God of storms and the sea; brother of Amaterasu', 'Izumo'],
    ['Ōkuninushi', 'Lord of the land of “Izumo”', 'Izumo Taisha'],
    ['Hachiman', 'God of war, protector of the Minamoto and the samurai', 'Tsurugaoka Hachimangū, Kamakura'],
    ['Inari', 'Rice, prosperity and merchants', 'Fushimi Inari, Kyoto'],
    ['Buddha Vairocana (Dainichi)', 'The cosmic Buddha', 'Tōdai-ji, Nara'],
    ['Buddha Amida', 'Buddha of the Pure Land, in the west', 'Byōdō-in; Jōdo schools'],
    ['Kannon', 'Bodhisattva of compassion', 'Many temples']
  ] } },
  { img: 'jap-amaterasu', leg: 'Amaterasu emerging from the cave, print by Utagawa Kunisada, 1856.' },
  { h: 'Mythology: Kojiki and Nihon Shoki' },
  'The **Kojiki** (“Record of Ancient Matters”, 712) and the **Nihon Shoki** (720) tell how the divine couple **Izanagi** and **Izanami** created the islands. From Izanagi’s washing were born **Amaterasu** (Sun), **Tsukuyomi** (Moon) and **Susanoo** (storm). Amaterasu, offended, hid in a cave and the world went dark, until the gods lured her out with a dance and a mirror. Her grandson, **Ninigi**, descended to Earth with three treasures (**mirror, sword and jewel**, still the imperial regalia), and his great-grandson **Jimmu** is said to have been the **first emperor**, enthroned, according to tradition, in **660 BC**. This is **legend**: historians cannot confirm any ruler with certainty before c. AD 500, and the chronicles were written to give prestige to the court.',
  { img: 'jap-kojiki', leg: '1924–1925 facsimile of the Shinpuku-ji Kojiki manuscript, copied in 1371–1372.' },
  { lista: [
    '**Ise:** the shrine of Amaterasu, rebuilt every twenty years (the 62nd time in 2013), in an idea of renewal in which the building is “the same” because it is always remade.',
    '**Izumo:** one of the oldest shrines, associated with Ōkuninushi.',
    '**Purity and festivals:** Shinto gives importance to ritual purity and to seasonal festivals (*matsuri*) tied to the rice cycle.'
  ] },
  { h: 'The Buddhisms' },
  'Japanese Buddhism is divided into schools. **Tendai** and **Shingon** (Heian) stressed ritual and the hope of awakening. **Pure Land** (Hōnen, Shinran) preached that repeating the name of the Buddha Amida was enough to be reborn in his paradise. **Zen** (Eisai, Dōgen), imported from China, valued meditation (*zazen*) and was strongly supported by the samurai. **Nichiren** (1222–1282) defended the centrality of the *Lotus Sutra*. **Hōryū-ji** (c. 607), **Tōdai-ji** (c. 752) and **Byōdō-in** (1053) are landmarks of these phases.',
  { img: 'jap-horyuji', leg: 'Pagoda and main hall of Hōryū-ji' },
  { h: 'Life after death' },
  'Buddhism brought cremation, which spread from the 8th century, and the belief in reincarnation. In Shinto, death is “impure”, and funerals were mostly left to Buddhist monks. The Kofun tombs, with stone chambers and objects for the other world, show an earlier belief that the dead still needed weapons, mirrors and jewels.',
  { h: '4. Economy and agriculture' },
  '**Rice** was the base of the economy and the measure of wealth: the output of a piece of land was measured in **koku** (c. 180 litres, a man’s ration for a year). Taxes, rents and wages were paid in rice. Other important products: dry-field cereals, vegetables, silk, linen, **hemp** and horses. From the 12th century, copper coin imported from China (Song dynasty) circulated. Trade, crafts (pottery, lacquer, swords) and port cities grew in the 14th–16th centuries. In 1526–1533 the silver mines of **Iwami** opened, and by the mid-16th century Japan was one of the world’s great silver producers.',
  { h: '5. Writing, kana and kanji' },
  'Japan had no writing of its own. In the 5th century (from Korea) it adopted **Chinese characters** (*kanji*) and wrote in classical Chinese (*kanbun*), the language of government and religion. But Japanese, a language of very different structure (polysyllabic and inflected), did not fit well. First, characters were used for sound alone (*man’yōgana*, so called because they are those of the **Man’yōshū**, an anthology of c. 759 with more than 4,500 poems). From these came the two **kana** syllabaries: **hiragana**, rounded, from cursive characters, used by the women of the court (“women’s writing”, *onna-de*), and **katakana**, angular, used by monks. Today Japanese is written with kanji and kana mixed.',
  { h: '6. Home and family' },
  'In the Jōmon period people lived in **semi-subterranean houses** with thatched roofs; in the Yayoi, raised granaries appeared against rodents. The Heian aristocratic house (*shinden-zukuri*) had pavilions linked by corridors, with screen partitions and bamboo blinds. In the Muromachi period the **shoin** style developed, with **tatami** (straw mats) over the whole floor, sliding panels (*fusuma*, *shōji*) and a decorative alcove (*tokonoma*), which is the basis of the traditional Japanese house.',
  'The family was a line (*ie*). In the Heian court, marriages were often uxorilocal: the husband visited the wife’s house, and the children grew up with the mother’s family. Among the samurai, succession passed to the eldest son (primogeniture) from the 14th century, with a loss of rights for women.',
  { h: '7. Food' },
  'The base was **rice** (the poor also ate much millet, barley and buckwheat), with **fish**, seaweed, vegetables, soybeans and preserves. **Soy** gave **miso** and **soy sauce**; sake was made from rice. Buddhism influenced the **vegetarian cooking** of the temples (*shōjin ryōri*), and in 675 Emperor Tenmu banned the eating of certain meats (cattle, horse, dog, monkey, chicken) during the farming season. **Tea** was brought from China by monks, and Eisai wrote a book about its benefits (*Kissa yōjōki*, c. 1211). Early **sushi** was fish fermented in rice, to preserve it.',
  { h: '8. Clothing' },
  'The Heian court wore the **sokutai** (men) and the **jūnihitoe** (women), a robe of many silk layers whose combined colours told of taste and season. Warriors wore the **hitatare** and the **hakama**, and armour. In the Muromachi period the **kosode**, a short-sleeved tunic and ancestor of the kimono, becomes general. Silk was a luxury; peasants wore hemp and cotton (cotton became widespread in the 16th century).',
  { h: '9. Music, games and leisure' },
  { lista: [
    '**Gagaku:** court music of Chinese and Korean origin, still performed today.',
    '**Biwa and koto:** lute and zither; blind monks sang the *Tale of the Heike* to the biwa.',
    '**Shakuhachi:** bamboo flute, later associated with Zen monks.',
    '**Games:** *go* and *sugoroku* (a board game with dice), poetry and incense contests (*kōdō*), *kemari* (a kicking game among nobles) and mounted archery (*yabusame*).',
    '**Theatre:** Noh (14th century), kyōgen (farces) and shrine dances.'
  ] },
  { img: 'jap-no-mascara', leg: 'Ko-omote nō mask' },
  { h: '10. Science and learning' },
  'Japan imported from China **astronomy, the calendar**, medicine and geomancy (*onmyōdō*, whose most famous figure is **Abe no Seimei**, 921–1005). The oldest surviving medical work is the *Ishinpō* (984), by Tamba no Yasuyori, compiled from Chinese texts. Monks were the main scholars, and monasteries kept libraries. The first prints date from c. 764–770 (the *Hyakumantō Darani*, commissioned by Empress Shōtoku).',
  { h: '11. Technology and crafts' },
  'Japan was a master of **wood** (carpentry without nails, using joints), **lacquer** (*maki-e*, lacquer with gold dust), **paper** (*washi*, from the 7th century), **pottery** and **metalwork**. In Nobunaga’s time there were workshops to produce firearms in quantity and stone castles with towers (Azuchi, 1576).',
  { h: '12. The sword and war' },
  'Warriors fought mainly with the **bow** (*yumi*), asymmetrical and very long, shot from horseback, and only afterwards with the sword. The **curved single-edged sword** (*tachi*, and later the **katana**, worn at the waist with the blade up, from the Muromachi) appears in the 10th century. The blade is made of **tamahagane steel**, forged and folded many times, with a **differential hardening** that gives a hard edge and a flexible back, and leaves a wavy line (*hamon*). A good sword was the work of a master and a sacred object.',
  { img: 'jap-forja-katana', leg: 'Swordsmith in the Kamakura period. AI-generated illustration.' },
  { img: 'jap-katana', leg: 'Katana blade with visible hamon' },
  { img: 'jap-samurai-arqueiro', leg: 'Mounted samurai archer in the Kamakura period. AI-generated illustration.' },
  'From the 14th to the 16th century battles came to include **infantry** (*ashigaru*, light recruited soldiers) with spears. In 1543 the **matchlock musket** (arquebus) arrived, and in 1575, at **Nagashino**, the troops of Oda Nobunaga and Tokugawa Ieyasu defeated the cavalry of the Takeda clan with the help of thousands of arquebuses and palisades. (The story that the arquebusiers rotated in three ranks is much debated.)',
  { img: 'jap-ashigaru-nagashino', leg: 'Ashigaru musketeers at Nagashino, 1575 — an exception to the 1573 cutoff. AI-generated illustration.' },
  { h: 'Bushidō: a later concept' },
  { caixa: 'Myth and reality', texto: [
    '**Myth:** the samurai always lived by a code of honour and loyalty called “bushidō”, from ancient times.',
    '**Reality:** the word *bushidō* (**“way of the warrior”**) became common only in the **Tokugawa** era (17th century), when the samurai were mostly officials in peacetime and moral treatises were written to explain how they should live. The romantic, “eternal” version, mixing Confucianism, Zen and Shinto, was popularized in 1900 by the book of **Nitobe Inazō** (*Bushido: The Soul of Japan*), written in English for a Western audience, and was later used by nationalism and militarism in the 20th century.',
    'In the 12th to 16th centuries warriors had ideals, such as the “way of the bow and horse” (*kyūba no michi*), courage, loyalty to one’s lord and the pursuit of fame. But the chronicles also show **betrayals, switching sides, plunder and cruelty**, and loyalty was often a negotiation. **Seppuku** (ritual suicide) existed, but was rare and only became an institution later.'
  ] },
  { h: 'The kamikaze myth' },
  { caixa: 'Myth and reality', texto: [
    '**Myth:** in 1281 a “divine wind” (*kamikaze*) sent by the gods miraculously saved Japan from the Mongol invasion.',
    '**Reality:** there really was a **typhoon** that destroyed much of the Yuan fleet in August 1281, and contemporaries saw in it the intervention of the gods; the word appears in texts of the time. But the invaders had already been standing for weeks before Hakata, held up by the **wall** and the samurai’s resistance, with disease and supply problems, and many ships were poorly built in haste. The role of a storm in the withdrawal of **1274** is debated. The national myth became famous in the 20th century, and the name was taken up in 1944–45 for suicide pilots.'
  ] },
  { h: '13. Women' },
  'The condition of Japanese women changed greatly. Between the 6th and 8th centuries **six women reigned, in eight reigns** (Suiko, Kōgyoku/Saimei, Jitō, Genmei, Genshō, Kōken/Shōtoku), an unusual number. At the **Heian court** the ladies, hidden behind screens, wrote in kana the most important literature of the age: **Murasaki Shikibu**, **Sei Shōnagon**, the author of the *Kagerō Nikki*. They could inherit and own land. Among the warriors there were influential women, such as **Hōjō Masako** (1157–1225), nicknamed the “nun shogun”, and legendary figures such as **Tomoe Gozen**, whom the chronicles describe as an archer and warrior (her historical existence is debated). Over time, especially from the 14th century, male primogeniture and the idea of female “duty” gradually reduced rights.'
];

const personalidades = [
  'Japanese chronicles give us names and biographies, but they mix fact and legend, especially in the earliest times. These are the most important figures down to 1573.',
  { h: 'Himiko, queen of Yamatai' },
  'Shaman-queen of Yamatai, 3rd century (no exact dates are known). Chinese texts say she was chosen to end a war between the kingdoms of Wa, that she lived shut in a palace and communicated with the people through her brother, and that in 238/239 she sent ambassadors to the kingdom of Wei. She does not appear in the Japanese chronicles under this name, and the location of her kingdom is uncertain. Her story is a reminder that women ruled from the beginning.',
  { h: 'Prince Shōtoku (574–622)' },
  'Regent of Empress Suiko. The chronicles credit him with the “seventeen-article constitution” (604), the twelve court ranks, the embassies to China and the founding of Hōryū-ji; in the *Nihon Shoki* he is almost a saint. Modern historians think the text exaggerated his role, but he was certainly a central figure of the court of his time. He was venerated as the patron of Japanese Buddhism.',
  { img: 'jap-shotoku', leg: 'Portrait of Prince Shōtoku, Imperial Collection' },
  { h: 'Nakatomi no Kamatari (614–669)' },
  'Counsellor, ally of Prince Naka no Ōe (the future Emperor Tenji) and central figure in the coup of 645 against the Soga. He was rewarded with the name **Fujiwara**, which he gave to the most powerful family at court in the following centuries.',
  { h: 'Emperor Shōmu (701–756)' },
  'A Buddhist emperor, married to Empress **Kōmyō**. With an epidemic ravaging the country, he had **Tōdai-ji** and the Great Buddha built as protection for the realm and for every province (**kokubun-ji**). He abdicated in 749 and became a monk. His precious objects were kept in the **Shōsō-in**, a treasury preserved ever since.',
  { h: 'Kūkai (774–835)' },
  'Monk and scholar, founder of the **Shingon** school. He went to China in 804 and returned with new texts and rituals. He founded the monastery on Mount Kōya. He was reputedly a calligrapher, poet and engineer, and popular tradition credits him with many other works (among them, the invention of hiragana, which is unlikely).',
  { h: 'Sugawara no Michizane (845–903)' },
  'A scholar, poet and minister of great talent, from a family of men of letters. He opposed the Fujiwara and was exiled to Dazaifu (901), where he died. After his death, disasters and deaths at court were blamed on his vengeful spirit; the court rehabilitated him and he was deified as **Tenjin**, god of writing and learning. Students still pray to him before exams.',
  { img: 'jap-michizane', leg: 'Portrait of Sugawara no Michizane by Yōgetsu, late 15th–early 16th century, Cleveland Museum of Art (2015.491).' },
  { h: 'Fujiwara no Michinaga (966–1028)' },
  'The most powerful of the Fujiwara regents. He married three daughters to emperors and was grandfather of three. In 1018 he is said to have recited: “This world, I think, is mine; like the full moon, nothing is lacking.” He patronized writers such as Murasaki Shikibu, and had temples built.',
  { h: 'Murasaki Shikibu (c. 973 – c. 1014/1025)' },
  'Lady of the court of Empress Shōshi (Michinaga’s daughter) and author of the **Tale of Genji** (c. 1010), a long story of the life and loves of the “shining prince” Genji, and of his descendants. Many consider it the first great novel in world literature. Her real name is unknown (“Murasaki” comes from a character and “Shikibu” from her father’s office). She also left a diary.',
  { img: 'jap-murasaki', leg: 'Portrait of Murasaki Shikibu by Tosa Mitsuoki, 17th century.' },
  { h: 'Sei Shōnagon (c. 966 – c. 1017/1025)' },
  'Lady of the court of Empress Teishi, rival of Murasaki’s. Her **Pillow Book** (*Makura no Sōshi*, c. 1000–1010) is a collection of lists, impressions and episodes, clever and full of humour (“things that make the heart beat faster”, “hateful things”). It became the model for the literary genre *zuihitsu*, “following the brush”.',
  { img: 'jap-sei-shonagon', leg: 'Sei Shōnagon by Kikuchi Yōsai, illustration from Zenken Kojitsu, 19th century.' },
  { h: 'Minamoto no Yoritomo (1147–1199)' },
  'Son of a defeated Minamoto chief, he was spared as a boy and exiled, and in 1180 he rose against the Taira. More politician than warrior (the battles were fought by his brother **Yoshitsune**, whom he later hunted down), he created in Kamakura the first military government of Japan. He died in 1199, according to tradition from a fall from his horse.',
  { img: 'jap-yoritomo', leg: 'Portrait attributed to Minamoto no Yoritomo, Jingo-ji' },
  { h: 'Hōjō Masako (1157–1225)' },
  'Wife of Yoritomo and daughter of Hōjō Tokimasa. After her husband’s death she governed with her father and brother, and was so influential that she was called the “nun shogun” (*ama shōgun*). She rallied the vassals of Kamakura in the Jōkyū War (1221), with a celebrated speech.',
  { h: 'Hōjō Tokimune (1251–1284)' },
  'Regent of the shogunate while still very young (1268), he led the defence against the Mongols. He refused Kublai Khan’s demands, had his envoys executed and prepared the defences of Hakata. He died young and was a follower of Zen.',
  { h: 'Ashikaga Yoshimitsu (1358–1408)' },
  'Third Ashikaga shogun: he reunited the two courts (1392), controlled the regional lords, traded with Ming China and made his **Muromachi** palace the centre of culture. He retired in 1394 but went on governing. He built **Kinkaku-ji**.',
  { h: 'Zeami (c. 1363 – c. 1443)' },
  'Actor and playwright of **Noh** theatre. He wrote about 40 plays still performed and treatises on the actor’s art, in which he speaks of the “flower” (*hana*) and mystery (*yūgen*). He was protected by Yoshimitsu, but fell out of favour under a later shogun and was exiled to the island of Sado.',
  { h: 'Oda Nobunaga (1534–1582)' },
  'Lord of Owari, the first of the “three unifiers”. He won at Okehazama (1560) with a much smaller force, used firearms in mass, burned the monastery on Mount Hiei (1571, with many dead), abolished commercial monopolies and opened up to the Jesuits. He died in 1582 at Honnō-ji, betrayed by Akechi Mitsuhide. His vassal **Toyotomi Hideyoshi** (c. 1537–1598), of humble origin, completed unification, and **Tokugawa Ieyasu** (1543–1616) later founded the Edo shogunate.',
  { img: 'jap-nobunaga', leg: 'Portrait of Oda Nobunaga by Kanō Sōshū, 1583; original at Chōkō-ji.' }
];

const legado = [
  { h: 'What they left us' },
  { lista: [
    '**Literature:** the Tale of Genji, the Pillow Book, the Tale of the Heike, waka poetry and haiku (which grows out of medieval *renga*).',
    '**Writing:** the mixed system of kanji and kana, still used by more than a hundred million people.',
    '**Government:** the idea of power shared between a symbolic monarchy and a military government, which explains much of later Japanese politics.',
    '**Aesthetics:** attention to the ephemeral (*mono no aware*), rustic simplicity (*wabi*) and serene beauty (*sabi*).',
    '**Zen Buddhism:** dry gardens, calligraphy, ink painting (Sesshū), meditation.',
    '**Tea and flower arranging:** the tea ceremony (*chanoyu*) was refined by Murata Jukō and by **Sen no Rikyū** (1522–1591), who took it to the idea of an “act of communion” between host and guest in a simple hut.'
  ] },
  { img: 'jap-ryoanji', leg: 'Dry landscape garden at Ryōan-ji' },
  { img: 'jap-sala-cha', leg: 'Tea gathering in the Muromachi period. AI-generated illustration.' },
  { h: 'Art' },
  'Japanese art runs from Jōmon **clay** and **haniwa** to the **Buddhist sculpture** of Nara and Heian (such as the Great Buddha and the works of Unkei and Kaikei in the 13th century), to **painted scrolls** (*emakimono*), Zen **ink painting** (Sesshū) and the gilded **screens** of the Sengoku era. Lacquer and the sword were also art.',
  { h: 'Architecture' },
  'Wooden buildings, with curved roofs and broad eaves, adapted to earthquakes and the humid climate. **Hōryū-ji** is one of the oldest wooden buildings in the world. **Ise** is renewed every twenty years. **Castles**, with tall stone-based towers, appeared in the 16th century, and Azuchi (1576) was the model.',
  { h: 'The encounter with the West' },
  'The encounter with the Portuguese opened the **Nanban trade**. The Portuguese brought the arquebus, European goods (clocks, tobacco, glass), scientific ideas and Christianity, and acted as intermediaries between China and Japan: they carried Chinese silk and brought back Japanese silver. They also took away lacquer and screens. From Portuguese came Japanese words such as **pan** (bread), **tempura** (the origin is debated), **tabako**, **birōdo** (velvet), **kasutera** (Castile cake), **karuta** (playing card) and **botan** (button). The Jesuits **Luís Fróis** and **João Rodrigues** wrote valuable works on Japan. In 1571 the port of **Nagasaki** opened; in 1582 the **Tenshō** embassy set out, four young Japanese who visited Lisbon, Madrid and Rome.',
  { img: 'jap-nau-tanegashima', leg: 'Portuguese carrack off Tanegashima: symbolic depiction of Portuguese–Japanese contact. The 1543 arrival is associated with a junk. AI-generated illustration.' },
  { img: 'jap-nanban-biombo', leg: 'Nanban screen attributed to Kanō Dōmi: Portuguese ship and traders at Nagasaki, late 16th–early 17th century.' },
  { img: 'jap-xavier', leg: 'Japanese portrait of Francis Xavier, 17th century, Kobe City Museum.' },
  { h: 'Rediscovery and debate' },
  'The Japanese studied their ancient chronicles from the Edo period, and modern archaeology, especially since 1945, has uncovered Yoshinogari, Sannai-Maruyama and the ancient capitals. There are still limits: the imperial tombs are managed by the **Imperial Household Agency**, which only in recent years has allowed some limited research around them, and the debate on origins (Yamatai, the first emperor) remains open.',
  { h: 'Where to visit' },
  { lista: [
    '**Kyoto:** Kinkaku-ji, Ginkaku-ji, Ryōan-ji, the National Museum, the shrines and the old palace.',
    '**Nara:** Tōdai-ji and the Great Buddha, Kōfuku-ji, Shōsō-in (annual autumn exhibition), the National Museum.',
    '**Hōryū-ji** (Ikaruga, near Nara), with the oldest buildings.',
    '**Kamakura:** the Great Buddha, Tsurugaoka Hachimangū and Zen temples.',
    '**Tokyo:** National Museum (Jōmon, Yayoi, Kofun, swords and armour).',
    '**Yoshinogari** (Saga) and **Sannai-Maruyama** (Aomori): reconstructed archaeological sites.',
    '**Daisen Kofun** (Sakai, Osaka) and the Mozu-Furuichi tombs.',
    '**Nagasaki and Tanegashima:** memory of the first contacts with the Portuguese.'
  ] }
];

const quiz = [
  { p: 'What is the best-known feature of Jōmon-period pottery?', op: ['It is decorated with cord marks', 'It is made on a fast wheel', 'It is always white and glazed', 'It is painted with gold'], certa: 0, exp: '“Jōmon” means “cord marking”: the name comes from the cord impressions on the vessels. Jōmon pottery is among the oldest in the world.' },
  { p: 'What did the Yayoi culture bring to Japan?', op: ['Gunpowder and arquebuses', 'Irrigated rice, bronze and iron', 'Buddhism', 'The kana script'], certa: 1, exp: 'Coming from the continent (via Korea), irrigated rice, bronze and iron mark the Yayoi, from c. 900–800 BC.' },
  { p: 'What shape are the great tombs of the Kofun period?', op: ['Stepped pyramid', 'Keyhole', 'Dome', 'Stone circle'], certa: 1, exp: 'The *zenpō-kōen-fun* tombs have a square part and a round part, and are surrounded by moats. The Daisen Kofun measures c. 486 m.' },
  { p: 'The myths of the Kojiki and Nihon Shoki say that the first emperor was…', op: ['Nintoku', 'Shōtoku', 'Jimmu', 'Himiko'], certa: 2, exp: 'Jimmu is the legendary first emperor, enthroned according to tradition in 660 BC. Historians do not consider him proven.' },
  { p: 'Who was Prince Shōtoku?', op: ['Regent of Empress Suiko and promoter of Buddhism', 'The first shogun', 'Author of the Tale of Genji', 'A Sengoku warlord'], certa: 0, exp: 'Shōtoku (574–622) was Suiko’s regent; the chronicles credit him with the 17-article constitution and Hōryū-ji, although his role is debated.' },
  { p: 'Where was the bronze Great Buddha inaugurated in 752 raised?', op: ['Kamakura', 'Kyoto', 'Nara (Tōdai-ji)', 'Nagasaki'], certa: 2, exp: 'Tōdai-ji, in Nara, built by Emperor Shōmu. The Great Buddha of Kamakura is later (c. 1252).' },
  { p: 'What was the name of the capital founded in 794, today Kyoto?', op: ['Heijō-kyō', 'Heian-kyō', 'Edo', 'Kamakura'], certa: 1, exp: 'Heian-kyō, “capital of peace and tranquillity”, where Emperor Kanmu settled.' },
  { p: 'Who wrote the Tale of Genji?', op: ['Sei Shōnagon', 'Hōjō Masako', 'Murasaki Shikibu', 'Himiko'], certa: 2, exp: 'Murasaki Shikibu, a lady of the court, wrote it c. 1010. Sei Shōnagon wrote the Pillow Book.' },
  { p: 'What are the two Japanese syllabaries developed from Chinese characters called?', op: ['Kanji and kanbun', 'Hiragana and katakana', 'Ainu and Ryukyu', 'Noh and kyōgen'], certa: 1, exp: 'Hiragana (used by court women) and katakana (used by monks) make up the kana. Kanji are the Chinese characters themselves.' },
  { p: 'Who received the title of shogun in 1192 and founded the Kamakura government?', op: ['Taira no Kiyomori', 'Minamoto no Yoritomo', 'Ashikaga Takauji', 'Oda Nobunaga'], certa: 1, exp: 'Minamoto no Yoritomo, victor of the Genpei War, created the first shogunate.' },
  { p: 'In which years did the Mongols try to invade Japan?', op: ['1192 and 1221', '1274 and 1281', '1467 and 1477', '1543 and 1549'], certa: 1, exp: 'The two Yuan attempts were in 1274 and 1281. The second was partly destroyed by a typhoon.' },
  { p: 'What is true about the “kamikaze” of 1281?', op: ['It was a divine wind that explains everything, and there was no fighting', 'There was a typhoon, but Japanese defence and the invaders’ difficulties also counted', 'There was no storm at all', 'It was a corps of suicide pilots'], certa: 1, exp: 'The typhoon existed and was decisive, but the Hakata wall, the resistance and logistics also weighed. The association with pilots dates from 1944–45.' },
  { p: '“Bushidō” as an eternal code of the samurai is…', op: ['An ancient concept, from the time of Yoritomo', 'An idea mostly from the Tokugawa era, popularized later', 'An invention of the Portuguese', 'A law of the Taihō Code'], certa: 1, exp: 'The term spread in the 17th century and was popularized in 1900 by Nitobe Inazō. Medieval warriors had ideals, but also plenty of treachery and pragmatism.' },
  { p: 'Which war devastated Kyoto and opened the Sengoku era?', op: ['Genpei War', 'Ōnin War', 'Jinshin War', 'Jōkyū War'], certa: 1, exp: 'The Ōnin War (1467–1477) destroyed much of Kyoto and brought central power crashing down.' },
  { p: 'What happened at Tanegashima, c. 1543?', op: ['The Mongols arrived', 'The Portuguese introduced firearms', 'Kyoto was founded', 'Noh theatre was born'], certa: 1, exp: 'The Portuguese reached Tanegashima c. 1543 and sold arquebuses, which the Japanese soon copied. In 1549 Francis Xavier arrived.' }
];

export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };
