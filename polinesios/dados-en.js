// POLYNESIANS — full English content. Same structure and image ids as dados.js.
// Dates use the “middle chronology”; the chronology of the settlement of East Polynesia is debated (the “short chronology”, from radiocarbon, vs older dates). Oral traditions (Kupe, Hotu Matuʻa, Māui) are flagged as such.

const visao = [
  { caixa: 'In brief', texto: [
    'The **Polynesians** are the descendants of **Austronesian**-speaking navigators who, from about **1000 BC**, set out from the islands of **Tonga, Samoa** and Fiji and, over nearly two thousand years, settled the largest cultural area on Earth island by island: the **Polynesian Triangle**, more than **6,000 km** on each side, with its corners at **Hawaiʻi**, **Easter Island (Rapa Nui)** and **New Zealand (Aotearoa)**. They did it in **double-hulled** and **outrigger canoes**, with no compass, no sextant and no writing, guided by the **stars, the swells, the birds and the clouds**, and carrying plants, pigs, dogs and chickens to make a new home on every island.',
    'On each archipelago they developed societies of **hereditary chiefs** (*aliʻi* in Hawaiʻi, *ariʻi* in Tahiti, *rangatira* and *ariki* among the Māori), with religions of gods such as **Tāne, Tangaroa, Kū and Pele**, with the power of **mana** and the system of prohibitions called **tapu/kapu**, open-air temples (*marae*, *ahu*, *heiau*) and, on **Rapa Nui**, the famous **moai** statues. When Europeans arrived, in the 17th century and above all with **James Cook** (1769–1779), they met peoples who already knew the whole ocean and spoke related languages. Disease, violence and colonisation reduced many populations, but the cultures survived and, from 1976, with the voyage of the canoe **Hōkūle’a**, traditional navigation was recovered.'
  ] },
  { img: 'pol-mapa-triangulo', leg: 'The Polynesian Triangle, with its corners at Hawaiʻi, New Zealand (Aotearoa) and Easter Island (Rapa Nui).' },
  { img: 'pol-canoa-outrigger', leg: 'Hawaiian outrigger canoe (wa’a) teams preparing to race: the commonest craft of the Pacific islands.' },
  { h: 'Where they lived' },
  'Polynesia (“many islands”, in Greek) covers the **central and eastern Pacific**: on one side the archipelagos of **Tonga, Samoa, Tuvalu** and **Wallis and Futuna**, which make up West Polynesia; on the other those of **East Polynesia**, such as the **Cook Islands, the Society Islands** (Tahiti, Raiatea), the **Marquesas, Tuamotu, Mangareva** and the Austral Islands. At the corners of the triangle lie **Hawaiʻi** (north), **New Zealand** (southwest) and **Rapa Nui** (southeast), one of the most isolated inhabited islands in the world, about 3,500 km from the coast of Chile.',
  'Almost all of it is **sea**: the dry land makes up a tiny fraction of the triangle. There are high volcanic islands with fertile soil and rivers (Tahiti, Hawaiʻi) and coral **atolls**, poor in fresh water and land, where people lived on coconut, fish and what they planted with great care. Each island was a small world, and travel between worlds was, for centuries, the normal way of keeping up ties of family, trade and power. New Zealand is the exception: two large temperate islands with forests, mountains and a fauna of their own.',
  { h: 'When they lived' },
  'The chronology is **debated**, especially for East Polynesia. For decades very early dates were accepted (in the first millennium AD for the Marquesas and Hawaiʻi); since 2010, radiocarbon dating of short-lived samples (seeds, nut shells) suggests a “short chronology”: all of East Polynesia settled after c. **1000 AD**, and New Zealand around **1250–1300**. This is the most widely accepted reading today, but the discussion continues.',
  { tabela: { cab: ['Phase', 'Approximate dates', 'What marks it'], linhas: [
    ['Austronesians and Lapita', 'c. 3000 BC – 800 BC', 'Austronesian expansion from Taiwan; Lapita pottery in the Bismarck Archipelago (c. 1600 BC) and arrival in Fiji, Tonga and Samoa (c. 900–800 BC)'],
    ['West Polynesia', 'c. 800 BC – c. 1000 AD', 'In Tonga and Samoa the “Polynesian” culture takes shape: language, religion, chiefs; pottery disappears; the so-called “long pause” in voyaging (its length is debated)'],
    ['Expansion eastwards', 'c. 1000 – 1300 AD', 'In a few centuries the Society Islands, the Marquesas, Hawaiʻi, Rapa Nui and Aotearoa are settled; probable contacts with South America'],
    ['Chiefdoms and island states', 'c. 1300 – 1750', 'Great chiefdoms (Tonga, Hawaiʻi, Tahiti); monumental marae and ahu; moai on Rapa Nui; pā and iwi in Aotearoa'],
    ['European contact and colonisation', '1767/1769 – 19th c.', 'Cook; missionaries, whalers, disease and firearms; unification of Hawaiʻi (1810); Treaty of Waitangi (1840); annexations']
  ] } },
  { img: 'pol-lapita-ceramica', leg: 'Lapita pottery, decorated with stamped dentate motifs, c. 1000 BC; the archaeological trail of the first voyagers.' },
  { h: 'Who were the Polynesians?' },
  'The Polynesians speak languages of the **Polynesian** branch of the great **Austronesian** family, the most widespread in the world before European expansion (from Madagascar to Easter Island). Polynesian languages are so close that a Tahitian, a Hawaiian and a Māori recognise shared words: *mana*, *tapu*, *ariki*, *tangata*, *moana* (ocean). The remote origin lies in **Taiwan**, from where, around 3000 BC, Austronesian farmers spread through the Philippines and Indonesia and, later, into the Pacific.',
  'Genetics tells a more complex story than a simple linear migration: the first settlers of the remote Pacific had mostly “Asian” ancestry (related to Taiwan and the Philippines) and, over the centuries, mixed with **Papuan** populations from Melanesia (ancient-DNA studies from 2016 onwards). Hence the picture of the Polynesians as a population shaped by centuries of contact, not by a single wave. Another surprise: a 2020 study (*Nature*) found, in eastern island populations, a **Native American** contribution dated to c. 1200 AD, a sign of contact between the Pacific and the South American coast before Columbus (a group close to the Zenú of present-day Colombia).',
  { h: 'Why they matter' },
  { lista: [
    '**The greatest navigational feat of prehistory:** settling thousands of tiny islands in the largest ocean on Earth, without instruments.',
    '**A science of the sea without writing:** stars, swells, birds and clouds turned into a mental map, passed from master to apprentice.',
    '**Complex societies on islands:** chiefdoms, temples, intensive agriculture and aquaculture, with no metals and no pottery in the eastern islands.',
    '**Rapa Nui and the “ecocide” debate:** an isolated island that became a case study of society and environment, now being revised in the light of new evidence.',
    '**Words we speak:** *tattoo* (from Tahitian and Samoan *tatau*), *taboo* (from Tongan *tapu*), and *surf*, *ukulele* and *aloha* come from these cultures, or passed through them.',
    '**A living culture:** languages, dance, tattooing and navigation are today part of the identity of millions of people, from Hawaiʻi to New Zealand.'
  ] },
  { img: 'pol-moai-tongariki', leg: 'Moai of Ahu Tongariki, Rapa Nui; fifteen statues restored in the 1990s.' },
  { caixa: 'The Polynesians today', texto: 'Today Polynesians live in dozens of countries and territories: **New Zealand** (Māori and Samoan, Tongan and Cook Islander communities), **Hawaiʻi** (part of the United States since 1898/1959), **Tahiti** and **French Polynesia**, **Samoa** (independent since 1962, the first island state in the Pacific to be so), **Tonga** (a kingdom), the **Cook Islands**, **Niue**, **Tuvalu** and **Rapa Nui** (part of Chile). The **Māori language** has been official in New Zealand since 1987, and **Hawaiian** has been official in Hawaiʻi (with English) since 1978. Rising sea levels now threaten atoll nations such as Tuvalu, a new chapter in a story of centuries of bonds with the ocean.' }
];

const linha = [
  'This timeline follows the Polynesian peoples from their Austronesian origins to the present. The dates for the settlement of East Polynesia are **debated**, and the “traditions” (Kupe, Hotu Matuʻa, Māui) are oral accounts of symbolic and historical value, not secure dates.',
  { linha: [
    { d: 'c. 3000 – 2500 BC', t: 'The Austronesians leave Taiwan', x: 'Austronesian-speaking farmers and sailors, originating in Taiwan, begin to expand into the Philippines and island Southeast Asia. This is the remote starting point of the Polynesian languages.' },
    { d: 'c. 1600 BC', t: 'Lapita pottery', x: 'In the **Bismarck** Archipelago (Papua New Guinea) the **Lapita** culture appears, with seaside villages, pottery decorated with dentate motifs, shell fish-hooks and the first long-distance voyaging in the Pacific. The name comes from the site of Lapita, in New Caledonia.' },
    { d: 'c. 1000 – 800 BC', t: 'Fiji, Tonga and Samoa', x: 'The bearers of Lapita culture reach Fiji, **Tonga** (the site of Nukuleka, c. 900 BC) and **Samoa**, crossing more than 800 km of open sea. They are the first settlers of Polynesia.' },
  ] },
  { img: 'pol-lapita-aldeia', leg: 'A Lapita village on stilts in a lagoon, c. 1000 BC; imagined scene. AI-generated illustration.' },
  { linha: [
    { d: 'c. 800 BC – c. 1000 AD', t: 'The “long pause” and the birth of Polynesian culture', x: 'In Tonga and Samoa the traits later recognised throughout Polynesia take shape: the language, the system of chiefs, the *tapu*, the double-hulled canoe. Pottery disappears. For about a thousand years voyages eastwards almost stop, the so-called **long pause**, whose cause (winds, technology, demography) and length are debated.' },
    { d: 'c. 950 AD (tradition)', t: 'The first Tuʻi Tonga', x: 'Tongan tradition attributes to Aho’eitu, son of a god and an earthly woman, the beginning of the **Tuʻi Tonga** line, the “kings” of Tonga. The date is traditional; the influence of the Tongan chiefdom, however, is well attested in Samoa and neighbouring islands.' },
    { d: 'c. 1000 – 1100 AD', t: 'Expansion eastwards', x: 'Radiocarbon dating suggests the **Society Islands** were settled around **1025–1120**, and that from there, within a few generations, sailed those who reached the Marquesas, the Tuamotu, the Australs and Mangareva.' },
    { d: 'c. 1000 – 1250', t: 'Hawaiʻi', x: 'The Hawaiian archipelago is settled, probably from the Marquesas and the Society Islands. The most recent dates point to the 13th century; others to the 11th. Hawaiian tradition speaks of later arrivals from Tahiti (with the priest Paʻao), but this narrative is disputed.' },
    { d: 'c. 1150 – 1280', t: 'Rapa Nui', x: 'The small island of Rapa Nui, at the southeastern tip of the triangle, is settled, according to tradition, by **Hotu Matuʻa** and his companions, from a land to the west called Hiva. Archaeologically, the arrival lies between the 12th and 13th centuries.' },
  ] },
  { img: 'pol-moai-rano-raraku', leg: 'Unfinished moai on the slopes of the Rano Raraku volcano, the quarry where almost all the statues of Rapa Nui were carved.' },
  { linha: [
    { d: 'c. 1250 – 1300', t: 'Aotearoa: arrival in New Zealand', x: 'The last major habitable landmass in the world to be settled. The best dates point to **c. 1250–1300**; the settlers bring the *kūmara* (sweet potato), the yam and the dog. Māori tradition speaks of navigators such as **Kupe** and of several canoes (*waka*) from **Hawaiki**, the ancestral homeland.' },
  ] },
  { img: 'pol-chegada-aotearoa', leg: 'The first settlers arriving in Aotearoa in double-hulled canoes, c. 1250–1300; imagined scene. AI-generated illustration.' },
  { linha: [
    { d: 'c. 1200 – 1400', t: 'Contact with the Americas', x: 'DNA studies (2020, 2024) show that Native American and Polynesian populations mixed, in the eastern Pacific, sometime in the 13th–14th centuries. The **sweet potato**, a plant of American origin, was already in Polynesia before the Europeans. How contact happened (a Polynesian voyage, an American voyage, or both) is debated.' },
    { d: '14th – 15th c.', t: 'Extinction of the moa', x: 'In New Zealand the giant **moa** birds, hunted and deprived of their habitat, became extinct within a few generations of human arrival. It is one of the clearest examples of rapid extinction caused by humans on an island.' },
    { d: '14th – 17th c.', t: 'The heyday of the moai and the great marae', x: 'On Rapa Nui, hundreds of **moai** are carved and raised on platforms (*ahu*). On Raiatea, the **Taputapuatea** *marae* becomes a religious and political centre for a vast network of islands. In Tonga, great royal tombs (*langi*) and the **Haʻamonga ʻa Maui** trilithon are built.' },
    { d: '1642', t: 'Tasman in Aotearoa', x: 'The Dutchman **Abel Tasman** is the first European to sight New Zealand. An encounter with Māori, in what is now called Golden Bay, ends in violence, with four sailors killed.' },
    { d: '1722', t: 'Roggeveen on Rapa Nui', x: 'The Dutchman **Jacob Roggeveen** reaches the island on Easter Sunday, hence the name “Easter Island”. His accounts describe statues still standing and a small population.' },
    { d: '1769', t: 'Cook, Tupaia and New Zealand', x: 'After **Samuel Wallis** (1767) and **Bougainville** (1768), **James Cook**, on his first voyage, observes the transit of Venus in Tahiti (3 June 1769) and takes aboard **Tupaia**, a priest and navigator from Raiatea, who draws a chart of dozens of islands. In the following months Cook sails around and charts New Zealand.' },
  ] },
  { img: 'pol-cook-retrato', leg: 'Portrait of James Cook (1728–1779), painted by John Webber, c. 1776 (National Portrait Gallery, London).' },
  { linha: [
    { d: '1778 – 1779', t: 'Cook in Hawaiʻi and his death', x: 'Cook reaches Hawaiʻi in January 1778. He returns in January 1779 to **Kealakekua** Bay during the *Makahiki* festival, and is received with great ceremony. A dispute over a stolen boat degenerates, on 14 February 1779, into a skirmish in which Cook and four marines die.' },
  ] },
  { img: 'pol-morte-cook', leg: 'The death of Captain Cook at Kealakekua, 14 February 1779, painting by Johann Zoffany: the European version of the episode.' },
  { linha: [
    { d: '1795 – 1810', t: 'Kamehameha unifies Hawaiʻi', x: 'The chief **Kamehameha**, of the island of Hawaiʻi, conquers the islands with the help of firearms and European advisers, and founds the **Kingdom of Hawaiʻi** in 1810, when the ruler of Kauaʻi accepts his authority.' },
    { d: '1819', t: 'The abolition of the kapu in Hawaiʻi', x: 'After Kamehameha’s death, the dowager queen **Kaʻahumanu** and the new king Liholiho (Kamehameha II) publicly break the *kapu* system by eating together, men and women. Months later the first American missionaries arrive (1820).' },
    { d: '1840', t: 'The Treaty of Waitangi', x: 'More than forty Māori chiefs and the British Crown sign the **Treaty of Waitangi**. The English and Māori texts differ on central points (sovereignty and governance), and its meaning is still debated in New Zealand today.' },
    { d: '1862 – 1888', t: 'Rapa Nui: slave raids and annexation', x: 'In 1862–1863 Peruvian ships kidnap about 1,500 people from Rapa Nui, among them many chiefs and sages. The survivors return with disease. By 1877 only about **110** inhabitants remain. In 1888 the island is annexed by Chile.' },
    { d: '1893 – 1898', t: 'The end of the Kingdom of Hawaiʻi', x: 'Queen **Liliʻuokalani** is deposed in January 1893 by a coup backed by American residents and by United States troops. Hawaiʻi is annexed in 1898.' },
    { d: '1962', t: 'Samoan independence', x: 'Samoa becomes the first Pacific island state to regain independence, keeping the traditional system of chiefs (*matai*) in its government.' },
    { d: '1975 – 1976', t: 'Hōkūle’a: the rebirth of navigation', x: 'In Hawaiʻi, the Polynesian Voyaging Society builds the double-hulled canoe **Hōkūle’a** (1975). In 1976, with the Micronesian navigator **Mau Piailug**, she sails from Hawaiʻi to Tahiti, without instruments, in about 34 days, proving that deliberate navigation was possible. In 2014–2017 she circles the globe (*Mālama Honua*, “Caring for Island Earth”); in 2017, **Taputapuatea** is inscribed on the World Heritage List.' },
  ] },
  { h: 'Rediscovery and debate' },
  'For the West, Polynesia was “discovered” in the 18th century, but the debate over the origin of the Polynesians only became scientific in the 20th. The Norwegian explorer **Thor Heyerdahl** argued, with the *Kon-Tiki* raft expedition (1947), for a South American origin; genetics and linguistics contradicted this thesis (the languages are Austronesian), although in 2020 they confirmed an isolated contact with the Americas. In the 1950s the New Zealander **Andrew Sharp** claimed that the islands had been settled by accident, by drifting boats; computer simulations and the voyage of Hōkūle’a showed that the crossings were deliberate and planned.'
];

const mapa = [
  'The Polynesian map is a map of **archipelagos** joined by voyages. There were no cities as in the Mediterranean or Mesopotamia: the political units were **islands or groups of islands**, with scattered settlements and ceremonial centres. Local names are given in brackets. The dates of settlement of East Polynesia are approximate and debated.',
  { tabela: { cab: ['Archipelago', 'Location', 'Settlement (approx.)', 'Importance'], linhas: [
    ['Tonga (Tongatapu)', 'West Polynesia', 'c. 900 BC', 'Maritime chiefdom of the Tuʻi Tonga; *langi* tombs; Haʻamonga ʻa Maui trilithon'],
    ['Samoa (Savaiʻi, Upolu)', 'West Polynesia', 'c. 800 BC', 'System of *matai* (family chiefs); *fale* and *faʻa Samoa*; *pe’a* tattoo'],
    ['Society Islands (Tahiti, Raiatea)', 'East Polynesia', 'c. 1025–1120', 'Starting point of voyages east and north; marae of Taputapuatea'],
    ['Marquesas (Nuku Hiva, Hiva Oa)', 'East Polynesia', 'c. 1100 (debated)', 'Among the first islands settled in the east; art, tattooing and carved stone'],
    ['Cook Islands (Rarotonga)', 'East Polynesia', 'c. 1100–1200', 'Traditional departure point for Aotearoa, in some traditions'],
    ['Hawaiʻi', 'East Polynesia, north', 'c. 1000–1250 (debated)', 'Chiefdoms by island; *ahupuaʻa*; *heiau*; kingdom unified in 1810'],
    ['Rapa Nui (Easter Island)', 'East Polynesia, southeast', 'c. 1150–1280', 'The *moai* and *ahu*; *rongorongo* script; one of the most isolated inhabited islands in the world'],
    ['Aotearoa (New Zealand)', 'East Polynesia, southwest', 'c. 1250–1300', 'The Māori: *iwi*, *pā*, *wharenui*, *tā moko*; the moa and the *kūmara*']
  ] } },
  { h: 'Tonga and Samoa: the cradle' },
  'Tonga and Samoa are the cradle of Polynesian culture. On **Tongatapu**, Tonga’s main island, the proof of a state can still be seen: royal tombs in stepped pyramids (*langi*), at **Muʻa**, and the **Haʻamonga ʻa Maui**, a coral trilithon (two pillars and a lintel) attributed by tradition to the Tuʻi Tonga Tuʻitātui, c. 13th century. Between the 12th and 15th centuries the Tongan chiefdom extended its influence over neighbouring islands and even Samoa (the exact extent is debated). In **Samoa** political life rests on the family chiefs, the *matai*, gathered in council (*fono*), a system still in force.',
  { img: 'pol-haamonga', leg: 'Haʻamonga ʻa Maui, a coral trilithon on Tongatapu, Tonga, c. 13th century.' },
  { h: 'Tahiti, Raiatea and the Marquesas' },
  'The **Society Islands**, with Tahiti, are the centre of East Polynesia. On **Raiatea**, the **Taputapuatea** *marae* was, according to oral traditions, a place where chiefs from many islands met, and from which great voyages of settlement set out; it is a UNESCO World Heritage Site (2017). In the **Marquesas**, on Nuku Hiva and Hiva Oa, stone and wood were worked into statues (*tiki*), platforms and temples; tattooing was so elaborate that it covered almost the whole body.',
  { img: 'pol-taputapuatea', leg: 'The Taputapuatea marae, Raiatea, Society Islands; a UNESCO World Heritage Site since 2017.' },
  { h: 'Hawaiʻi' },
  'The Hawaiian archipelago (eight main islands) is the northernmost point of the triangle, about 3,900 km from the nearest continent. Each island had its own chiefs (*aliʻi*); the land was divided into strips, the **ahupuaʻa**, from the mountain summit to the reef, so that each community had access to timber, food and fish. The temples were the *heiau*, stone platforms with wooden statues. The island of Hawaiʻi has the volcano **Kīlauea**, home of the goddess **Pele**.',
  { img: 'pol-kilauea', leg: 'The Kīlauea volcano, Hawaiʻi, in a satellite image (Landsat mosaic): home of the goddess Pele in Hawaiian tradition.' },
  { h: 'Rapa Nui' },
  '**Rapa Nui** (Easter Island), with only about **164 km²**, lies more than **3,500 km** from mainland Chile. It was settled around the 12th–13th centuries and became famous for its nearly **thousand moai**, monolithic statues of volcanic stone carved at the **Rano Raraku** quarry and moved, sometimes several kilometres, to ceremonial platforms (*ahu*) near the coast. The moai probably represent important ancestors and, in general, face inland, watching over the communities. The site of **Orongo**, above the Rano Kau volcano, was the centre of the **Birdman** cult (*tangata manu*), an annual contest to collect the first egg of the sooty tern (its chronology, from about the 17th century, is debated).',
  { img: 'pol-ahu-akivi', leg: 'Ahu Akivi, with seven moai facing the sea, in the interior of Rapa Nui; the island is a World Heritage Site since 1995.' },
  { img: 'pol-orongo', leg: 'A Rapa Nui ceremony at Orongo, above the Rano Kau crater, Rapa Nui: the centre of the Birdman cult.' },
  { h: 'Aotearoa' },
  '**Aotearoa** (“land of the long white cloud”, in Māori tradition) is the largest landmass in Polynesia, with two main islands: the **North Island** (*Te Ika-a-Māui*, “the fish of Māui”) and the **South Island**. The Māori are organised into **iwi** (tribes), **hapū** (sub-tribes) and **whānau** (extended families). The landscape has hill forts (**pā**), terraces for growing the *kūmara* and **communal meeting houses** (*wharenui*) with carved wood. The Māori trace their origin to **Hawaiki**, and the idea of a “Great Fleet” of seven canoes, which many know, is a late synthesis, from the end of the 19th century, of several traditions, not a linear history.',
  { img: 'pol-casa-reuniao', leg: 'A Māori meeting house (wharenui) with a carved wooden façade; a place of gathering and memory for a community.' },
  { h: 'Routes and contacts' },
  'Navigation routes linked the archipelagos by crossings of **hundreds to thousands of kilometres**. The **Tahiti–Hawaiʻi** route (c. 4,400 km) is the most famous; so are **Raiatea–Aotearoa** (c. 4,000 km) and **Marquesas–Rapa Nui** (c. 3,500 km). They were preferably made with the **favourable winds** of the season, and for the return voyage people sailed against the wind (or waited for the season to change). There was trade between neighbouring islands in **basalt** (Pitcairn), **shells**, **tapa** and **mats**, and occasional long-distance voyages that archaeology can prove (for example, from the chemical origin of stone tools).',
  { img: 'pol-rotas-expansao', leg: 'The great routes of Polynesian expansion, from Tonga and Samoa east and south; illustrative diagram, generated by AI.' }
];

const sociedade = [
  { h: '1. Political organisation' },
  'Across Polynesia, societies were **hereditary chiefdoms**, with chiefs linked by genealogy to the gods. **Genealogy** (*whakapapa*, in Māori) was the basis of status: whoever descended from the eldest son of a line of chiefs had more **mana** (sacred power, prestige). The terms vary: *aliʻi* (Hawaiʻi), *ariʻi* (Tahiti), *ariki* (Cook Islands, Māori, Rapa Nui), *rangatira* (Māori), *matai* (Samoa), *tuʻi* (Tonga). But the variation is great: in Samoa and New Zealand power was more decentralised and based on consensus; in Tonga and Hawaiʻi the supreme chief had almost sacred power.',
  'In **Hawaiʻi** each island was a chiefdom with several ranks of chiefs, who sometimes fought one another; in **Tonga** the Tuʻi Tonga was a sacred figure who shared power with secular chiefs (from the 15th century, the Tuʻi Haʻatakalaua and later the Tuʻi Kanokupolu). The **Māori** were organised in *iwi* and *hapū*, without a king, until 1858 (the Māori King Movement) and colonial pressure.',
  { img: 'pol-ki-ku', leg: 'Feathered wooden statue of the god Kūkāʻilimoku, the war deity of Hawaiian chiefs, 18th century.' },
  { h: '2. Social classes' },
  { lista: [
    '**Chiefs (*aliʻi*, *ariki*, *rangatira*):** the ruling class, linked by genealogy to the gods; they presided over rituals and war, and controlled land and labour.',
    '**Priests and experts (*kahuna*, *tohunga*, *tahuʻa*):** specialists in ritual, medicine, canoe-building, navigation and tattooing; they could be of noble lineage or trained by masters.',
    '**Commoners (*makaʻāinana* in Hawaiʻi, *tūtūā* among the Māori):** farmers, fishers and craftspeople, who supported the chiefs with food and labour.',
    '**Captives and dependants:** present in some societies (*kauwā* in Hawaiʻi, *taurekareka* among the Māori); the exact nature and importance of this category are debated.'
  ] },
  { h: 'Women' },
  'The place of women varied. On many islands women of noble lineage could be **chiefs**, such as Queen **Kaʻahumanu** in Hawaiʻi or Queen **Pōmare IV** in Tahiti, and women had important roles in producing tapa and passing on genealogies. But *tapu* (or *kapu*) also imposed restrictions: in Hawaiʻi, women could not eat certain foods or eat with men, and the public abolition of this rule, in 1819, was a decisive moment.',
  { h: '3. Religion' },
  'Polynesian religion rests on two notions: **mana**, the sacred power that comes from the gods and that chiefs carry, and **tapu** (*kapu* in Hawaiʻi; the origin of our “taboo”), the set of prohibitions that protect mana and separate the sacred from the ordinary. Breaking a tapu could be punished by death. The gods varied from island to island, but there were shared figures: the **separation of Sky and Earth**, the **four great gods** (Kāne/Tāne, Kū/Tū, Lono/Rongo, Kanaloa/Tangaroa) and the demigod **Māui**.',
  { tabela: { cab: ['Deity (variants)', 'Domain', 'Where and how'], linhas: [
    ['Tāne / Kāne', 'Light, forest, creation of living things', 'Among the Māori he separates the primordial parents, Rangi (Sky) and Papa (Earth); in Hawaiʻi he is the god of life and fresh water'],
    ['Tangaroa / Kanaloa / Taʻaroa', 'Sea and creation', 'One of the principal gods across Polynesia; in Tahiti, in certain traditions, the supreme creator'],
    ['Tū / Kū / Tūmatauenga', 'War', 'God of war; in Hawaiʻi he received offerings in the chiefs’ heiau (including, in wartime, human sacrifices)'],
    ['Rongo / Lono', 'Agriculture, peace, rain', 'In Hawaiʻi, the *Makahiki*, a festival of harvest and peace (October to February), was dedicated to Lono'],
    ['Pele', 'Volcanoes and fire', 'Hawaiian goddess of volcanoes; she lives in Kīlauea; her legends explain lava flows and the formation of the islands'],
    ['Māui', 'Demigod and trickster', 'Fished the islands up from the sea floor with a hook, slowed the Sun and stole fire; a figure found across Polynesia'],
    ['Hine-nui-te-pō', 'Death', 'Māori; the “great lady of the night”; Māui died trying to conquer death, according to the legend'],
    ['Makemake', 'Creator (Rapa Nui)', 'The principal god of Rapa Nui; associated with the Birdman cult']
  ] } },
  { img: 'pol-marae-ritual', leg: 'A ceremony at a marae in the Society Islands, with priests, chiefs and offerings; imagined scene. AI-generated illustration.' },
  { img: 'pol-heiau-puukohola', leg: 'The consecration of the Puʻukoholā temple (heiau) on the island of Hawaiʻi in 1791: an imagined scene, with chiefs in feather cloaks, priests and wooden images (kiʻi). AI-generated illustration.' },
  'Temples were almost always **open-air** spaces: the **marae** (Tahiti, Cook Islands, Māori), the **heiau** (Hawaiʻi) and the **ahu** (Rapa Nui, where it means the platform of the moai) were stone enclosures with platforms, altars and statues. Rituals included offerings of food, dances and, on some islands (Tahiti, Hawaiʻi, the Marquesas), in times of crisis or war, **human sacrifice**: the practice is attested in European accounts (Cook witnessed one in Tahiti in 1777) and in local traditions, but its frequency varied and is hard to measure.',
  { h: '4. Economy' },
  'The economy rested on **agriculture**, **fishing** and exchange. The settlers brought in their canoes the so-called “**canoe plants**”: taro, yam, breadfruit, banana, sugar cane, coconut, paper mulberry (for tapa) and kava, as well as **pigs, dogs and chickens** (and, unintentionally, the Pacific rat). In colder New Zealand only the *kūmara* and a few yams survived, so hunting, fishing and gathering fern root played a larger part.',
  'In **Hawaiʻi** there was intensive agriculture, with **irrigated taro terraces** (*loʻi*) and stone **fishponds** (*loko iʻa*) that produced fish in great quantity; many are now being restored. Land belonged to the chiefs, who distributed it, and the *ahupuaʻa* system guaranteed each community access to all resources. There was no **money**, no metals and no wheel: exchange worked through gifts and redistribution, and through prestige circuits (mats and tapa in Samoa and Tonga).',
  { img: 'pol-ahupuaa', leg: 'A Hawaiian ahupuaʻa, from summit to coast: forest, taro terraces, village and fishpond by the sea; imagined diagram. AI-generated illustration.' },
  { h: '5. Writing and memory' },
  'Polynesia did not have widespread writing: cultural memory was **oral**, and its transmission a discipline of experts. **Genealogies** and stories were recited and sung in fixed verses; the **Kumulipo**, the Hawaiian creation chant, has more than two thousand lines. The Māori kept history in **carving** and in *whakapapa*; in Tahiti there were priests who memorised long lists of lineages. **Tattooing** and tapa designs also conveyed status and origin.',
  'The exception is **Rapa Nui**, where about **twenty-six** wooden objects are known, covered with lines of small signs: the **rongorongo** script. It has never been deciphered. Some researchers think it is a true writing system; others, a memory aid; and some debate whether it existed before contact with Europeans (the influence of a Spanish signing ceremony in 1770 is one hypothesis). It is one of the great unsolved mysteries in the history of writing.',
  { img: 'pol-rongorongo', leg: 'A wooden tablet with rongorongo script, Rapa Nui; never deciphered.' },
  { h: '6. Home and daily life' },
  'Houses varied greatly with climate. In **Samoa** and **Tonga** the traditional house (*fale*) is an oval or round structure with a thatched roof on posts, without walls, with blinds of palm leaf. In **Hawaiʻi** houses (*hale*) were of wood and grass (*pili*). On **Rapa Nui** families lived in **houses shaped like an upturned boat** (*hare paenga*), with a base of basalt stones. In **New Zealand**, houses for rain and cold had walls of branches and reeds; the chiefs’ communal houses had carved façades.',
  { img: 'pol-fale-casa', leg: 'A Samoan village with traditional fale, with thatched roofs and wooden posts, 18th century; imagined scene. AI-generated illustration.' },
  { h: '7. Food' },
  'The base was **starch**: taro (*kalo*, *taro*), yam, sweet potato, breadfruit, banana and coconut. People ate **fish**, shellfish and seaweed and, at feasts, pork and dog. The most characteristic dish was cooked in the **earth oven** (*umu* in Samoa and Tahiti, *imu* in Hawaiʻi, *hāngi* in New Zealand): heated stones in a pit, food wrapped in leaves and covered with earth. Cooked, pounded taro gave Hawaiian **poi**. The ceremonial drink was **kava** (*ʻawa*, *ʻava*), prepared from the root of a plant and shared in rituals, above all in Tonga, Samoa and Fiji.',
  { img: 'pol-umu-cena', leg: 'Preparing an earth oven (umu) on a Polynesian beach, with hot stones and banana leaves; imagined scene. AI-generated illustration.' },
  { h: '8. Clothing, ornaments and tattoos' },
  'Fabrics were of **tapa**, a beaten bark of the paper mulberry, decorated with printed patterns (*kapa* in Hawaiʻi, *siapo* in Samoa), and of **mats** of pandanus and flax. The Māori wore cloaks of **New Zealand flax** fibre (*kākahu*), sometimes with feathers. In Hawaiʻi chiefs wore **feather** cloaks and helmets (*ʻahuʻula*), made from thousands of feathers of red and yellow birds, a supreme sign of status.',
  { img: 'pol-tapa', leg: 'Tapa, a cloth of beaten bark, here a fragment attributed to Mauatua, Fletcher Christian’s Polynesian wife: a traditional technique across Polynesia.' },
  '**Tattooing** is one of the most important arts: the very word *tattoo* comes from Tahitian and Samoan **tatau**, recorded by Joseph Banks and Cook in 1769. Samoan men received the **peʻa** (from waist to knees), women the *malu*; in the Marquesas tattooing covered almost the whole body; the Māori made ***tā moko***, not by pricking but by **carving** with bone chisels, leaving grooves in the skin. The tattooed faces of Māori chiefs were unique and worked as signatures. It is a painful, ritual process with the meaning of identity, not mere decoration.',
  { img: 'pol-moko', leg: 'Portrait of a young Māori woman with tā moko on the chin, painted by Louis John Steele (19th century).' },
  { img: 'pol-hei-tiki', leg: 'Hei-tiki, a Māori pendant of pounamu (New Zealand jade), a symbol of lineage and prestige.' },
  { h: '9. Music, dance and games' },
  'Dance was a way of telling history: Hawaiian **hula**, Tahitian **ʻōteʻa**, Samoan **siva**, Māori **haka**. The last, now famous at rugby matches, was a dance of challenge and welcome, with shouts and gestures of strength. People used **drums** (*pahu* in Hawaiʻi, *tōʻere* in Tahiti), **nose flutes**, conch trumpets and plenty of sung music. The **ukulele** is a later invention: it was born in Hawaiʻi, in 1879, from a Portuguese instrument, the **cavaquinho**, brought by emigrants from Madeira.',
  'Games included **konane** (a Hawaiian board game similar to draughts), **ʻulu maika** (a kind of bowling with stone discs), canoe races and **surfing** (*heʻe nalu*), practised in Tahiti and Hawaiʻi by all classes, and described by Europeans in Cook’s time as a common and popular activity.',
  { h: '10. Science: navigating without instruments' },
  'Polynesian navigators (*tohunga* or *kāhuna kilo*) steered without a compass, without written maps and without a sextant, with an encyclopaedic knowledge memorised and passed from master to apprentice over years. Their methods, studied today by anthropologists and navigators, include:',
  { lista: [
    '**The stars:** the horizon was divided into “houses” where stars rise and set always at the same point: a mental **star compass** with about 32 points. The navigator followed a star near the horizon and, when it rose, moved on to the next.',
    '**The swells:** the long, regular waves of the ocean keep their direction for thousands of kilometres; the navigator feels them in the hull, even at night. Near an island, the swells bend and cross, which reveals land beyond the horizon.',
    '**The birds:** seabirds such as terns go out to fish in the morning and return to land at day’s end; following their flight, at dawn or dusk, points the way to the nearest island.',
    '**The clouds and the colour of the sea:** a cloud that stays still on the horizon may indicate an island, and the green reflection of a lagoon on the clouds reveals an atoll.',
    '**The Sun and the Moon:** the bearing at sunrise and sunset, and the estimate of distance from time and speed, kept in memory (“dead reckoning”).'
  ] },
  { img: 'pol-navegacao-estrelas', leg: 'Diagram of the “star compass”: the horizon divided into houses where stars rise and set; imagined illustration, generated by AI.' },
  'To record routes, the neighbouring Marshall Islands (in Micronesia, not Polynesia proper) used **charts made of sticks and shells**, and in the Society Islands priests kept lists of islands and bearings by heart. The priest **Tupaia**, whom Cook took from Tahiti in 1769, drew a chart of about **seventy-four islands** across more than 4,000 km; it is one of the most remarkable documents of Polynesian science.',
  { img: 'pol-tupaia-mapa', leg: 'The chart drawn by Tupaia in 1769, with islands of the central Pacific, British Library.' },
  { h: '11. Technology: canoes, stone and craft' },
  'The great Polynesian technology was the **canoe**. There were two main types: the **outrigger** (a single hull with a side beam for stability), for fishing and short trips, and the **double-hulled** canoe (*waʻa kaulua* in Hawaiʻi, *pahi* in Tahiti, *waka hourua* in New Zealand, *kalia* in Tonga), with two hulls joined by a platform, one or two crab-claw sails and room for **dozens of people, plants and animals**. The largest measured 20 metres or more. The hull was made of hollowed logs, lashed together with **coconut-fibre cord** (no nails or metal) and caulked with resin.',
  { img: 'pol-canoa-duplo-casco', leg: 'A double-hulled canoe with crew, cargo and plants, on an ocean voyage, c. 12th century; imagined scene. AI-generated illustration.' },
  'There were no metals or pottery in the eastern islands: people used **polished basalt adzes** (*toki*), **shell** and bone fish-hooks, nets and cords of **plant fibre**. **Basalt** from certain quarries (Pitcairn, Eiao in the Marquesas, Tutuila in Samoa) was traded over more than a thousand kilometres. The Māori worked **pounamu** (nephrite) into axes, weapons and pendants; Hawaiians made fish-hooks and nets so fine that some are still recovered. In Hawaiʻi, the hydraulic engineering of the **loʻi** and the sea fishponds was remarkable.',
  { h: '12. War' },
  'War was frequent, especially between rival chiefdoms: disputes over land, prestige and revenge. People fought with **clubs** (*patu*, *mere*), spears, slings and, in Hawaiʻi, with shark-tooth weapons and hand-to-hand combat. The Māori built **pā**, hilltop fortresses with palisades and ditches; the great war canoes (*waka taua*) could carry more than a hundred warriors. The double-hulled war canoes of Tahiti formed fleets of more than a hundred, as Cook saw in 1774.',
  { img: 'pol-pa-reconstrucao', leg: 'Reconstruction of a Māori pā, a hilltop fortress with palisades and terraces, 18th century; imagined scene. AI-generated illustration.' },
  { img: 'pol-waka-taua', leg: 'A waka taua, a large Māori war canoe, in the Diamond Jubilee pageant on the Thames (London, 2012).' },
  'There is archaeological evidence and European accounts of **ritual cannibalism** of enemies in some societies (Māori, Marquesas, Fiji), an act of war and ritual, not a daily practice; European accounts were sometimes exaggerated. The arrival of **firearms** changed everything: between 1807 and 1837 the **Musket Wars** in New Zealand, set off by the race for firearms, caused tens of thousands of deaths, and in Hawaiʻi Kamehameha used cannon and European advisers to unify the kingdom.',
  { h: '13. Rapa Nui and the “ecocide” debate' },
  'For years the most popular version (Jared Diamond’s, in the book *Collapse*, 2005) held that the people of Rapa Nui destroyed the palm forest to raise moai, caused famine and war and drove their society to collapse: an “ecocide”. Today the thesis is **strongly contested**. Archaeology shows that the forest was hit mainly by the **Polynesian rat**, brought in the canoes, which ate the palm seeds; researchers Terry Hunt and Carl Lipo proposed that the population was never huge and remained stable. In **2024**, an ancient-genome study published in *Nature* (Moreno-Mayar and colleagues, with 15 individuals) found no sign of a sudden population crash before European contact.',
  'What is well documented is the **catastrophe of the 19th century**: diseases brought by Europeans, the Peruvian slave raids of 1862–1863 and the deportation or death of many chiefs and sages reduced the population to about 110 people in 1877. This is the true “fall”. In dealing with Rapa Nui it is wise to avoid the simple idea of a society that “killed itself”. As for the transport of the moai, oral tradition says they “**walked**”: recent experiments show that a moai can be moved standing upright, rocked from side to side with ropes, so as to “walk”.'
];

const personalidades = [
  'The Polynesians left no written biographies: the oldest figures come from **oral traditions**, and the more recent ones from European accounts or family memories. Each figure below says whether it is legendary or historical.',
  { h: 'Māui (legend)' },
  'The cunning demigod of all Polynesia. In the legends, **Māui** fished the islands up from the sea floor with a hook made from an ancestor’s bone (the North Island of New Zealand, *Te Ika-a-Māui*, is “Māui’s fish”), slowed the Sun with rope snares so the day would be longer, and stole fire from the gods. He died, according to the Māori, while trying to enter the body of the goddess Hine-nui-te-pō to conquer death. He is a figure linking islands separated by thousands of kilometres.',
  { h: 'Hotu Matuʻa (tradition)' },
  'Founding chief of Rapa Nui, according to oral tradition collected in the 19th and 20th centuries. He is said to have set out from the land of **Hiva**, to the west, with two canoes, fleeing a war, and landed on the beach of Anakena. His sons would then have divided the island into territories. The link to a real person is debated, but the tradition is an important sign of how the island saw itself.',
  { h: 'Kupe (tradition)' },
  'A Māori navigator, according to oral tradition, who “discovered” Aotearoa from **Hawaiki**, chasing a giant octopus, Te Wheke-a-Muturangi. He is said to have named places and returned to tell what he had seen, prompting others to come. The date cannot be fixed, and the tradition has many versions, but it is central to Māori memory of the arrival.',
  { h: 'The Tuʻi Tonga (title, tradition from c. 950 AD)' },
  'The **Tuʻi Tonga** was the supreme chief of Tonga, considered a descendant of the god Tangaloa. Tradition credits Aho’eitu, son of a god and an earthly woman, with founding the line. Between the 12th and 15th centuries their chiefdom is said to have dominated several islands of the western Pacific, with tribute and influence; the concept of a “Tongan empire”, however, is debated. Their royal tombs and the Haʻamonga ʻa Maui trilithon are the material testimony.',
  { h: 'Tupaia (c. 1725 – 1770)' },
  'Priest (*tahuʻa*), navigator and diplomat from **Raiatea**, in the Society Islands. In 1769 he joined Cook’s *Endeavour*, served as interpreter and guide, and drew a chart of about 74 islands, from Rapa to Fiji, over more than 4,000 km. He died in Batavia (now Jakarta) at the end of 1770, of disease, before seeing Europe. His chart and his story were for a long time forgotten by Europeans, and are now much studied.',
  { h: 'Pōmare II (c. 1782 – 1821)' },
  'A chief of Tahiti who, with firearms bought from Europeans, defeated his rivals (battle of Feipī, 1815) and unified much of the island. He converted to Christianity in 1812–1815, and missionary influence on Tahitian society grew. His dynasty reigned until 1880, when Tahiti was annexed by France. He was succeeded by his son, and then by his daughter, **Pōmare IV**, who reigned from 1827 to 1877 and accepted the French protectorate in 1842.',
  { h: 'Kamehameha I (born between c. 1736 and c. 1761 – died 1819)' },
  'The chief who unified the Hawaiian islands. Born on the island of Hawaiʻi (the date of birth is uncertain), he became a leader with the help of allies, and used European guns and cannon. He conquered the islands between 1790 and 1795 and, in 1810, Kauaʻi and Niʻihau accepted his sovereignty. He had the Puʻukoholā *heiau* built, and created the *Māmalahoe Kānāwai*, the “Law of the Splintered Paddle”, which protects civilians. He died in 1819. His name means “the Lonely One”.',
  { img: 'pol-kamehameha-estatua', leg: 'Statue of Kamehameha I, in Honolulu (a copy of the original by Thomas Ridgeway Gould).' },
  { h: 'Kaʻahumanu (c. 1768 – 1832)' },
  'The most powerful of Kamehameha I’s wives and, after his death, **regent** (*kuhina nui*) of Hawaiʻi. In 1819, with the new king Liholiho, she broke the *kapu* system by eating publicly with men, and she converted to Christianity in 1825. For more than a decade she was the central figure of the kingdom and one of the most powerful women in Polynesia.',
  { h: 'Hongi Hika (c. 1772 – 1828)' },
  'A Māori war chief of the Ngāpuhi tribe. In 1820 he travelled to England, where he was received by King George IV and helped prepare a Māori grammar at Cambridge; on the voyage home he exchanged gifts for **muskets**. With them he launched campaigns that changed the balance of power on the North Island, in the **Musket Wars**. He died of a wound in 1828. A controversial figure: modernizer and conqueror.',
  { h: 'Te Rangi Hīroa / Peter Buck (c. 1877 – 1951)' },
  'Māori physician, politician and anthropologist (Ngāti Mutunga), director of the Bishop Museum in Honolulu. In the book *Vikings of the Sunrise* (1938) he argued that the Polynesians were deliberate navigators from Asia, not castaways, and used his Māori heritage to study the Pacific from within. He was one of the first Polynesian researchers with Western training, and a reference for modern studies.',
  { h: 'Mau Piailug (1932 – 2010)' },
  'Master navigator from Satawal, in the Caroline Islands (in Micronesia, not Polynesia), who kept traditional navigation alive. In 1976 he agreed to guide **Hōkūle’a** from Hawaiʻi to Tahiti, without instruments, and afterwards taught Hawaiians to recover the technique. He is considered the “father” of the Polynesian navigation renaissance.',
  { img: 'pol-mau-piailug', leg: 'Mau Piailug (1932–2010), master navigator of Satawal, during a Pwo navigation ceremony; he guided the Hōkūle’a in 1976.' },
  { img: 'pol-hula', leg: 'Hula dancers in a modern performance (Poipu, Kauai); the dance was suppressed by missionaries in the 19th century and revived under Kalākaua (1874–1891).' },
  { h: 'Nainoa Thompson (b. 1953)' },
  'A Hawaiian navigator, a pupil of Mau Piailug. In 1980 he sailed Hōkūle’a round trip between Hawaiʻi and Tahiti, without instruments, the first Hawaiian to do so in centuries. He heads the Polynesian Voyaging Society and led the **Mālama Honua** voyage (2014–2017), a circumnavigation of the planet with a message of ocean protection.'
];

const legado = [
  { h: 'What they left us' },
  { lista: [
    '**The art of navigating without instruments:** the “star compass” and the reading of swells, recovered in the 1970s and now taught in schools in Hawaiʻi and New Zealand.',
    '**Words:** *tattoo*, *taboo* (from Tongan *tapu*), *mana*, *aloha*, *kiwi* (the bird and, by extension, New Zealanders), *tiki*, *hula*, *ukulele*, *surf*.',
    '**Surfing, hula, haka, tā moko:** arts that survived colonisation and are now symbols of identity and of tourism.',
    '**Plants and animals:** the cultivation of taro, breadfruit, coconut and banana spread across the whole Pacific because of Polynesian canoes.',
    '**An idea of the island:** the notion of **ahupuaʻa** and of caring for land and sea as one system, now invoked in resource-management projects.',
    '**A model of colonising the unknown:** the settlement of Polynesia remains studied as the great case of human expansion by sea.'
  ] },
  { h: 'Art' },
  'Polynesian art is above all **sculpture** (wood and stone), **textile** (tapa, mats), **tattooing** and **ornament** (feathers, shells, jade). Sculptures of human figures, the **tiki**, represent ancestors and gods, and vary greatly: the figures of Rapa Nui are slender, those of the Marquesas square, those of the Māori covered in spirals. Māori **carving** in wood, bone and *pounamu* (like the **hei-tiki**) is tied to genealogy and identity. Hawaiian feather cloaks are among the most remarkable textile works in the world.',
  { h: 'Architecture' },
  'Without cities, Polynesian architecture is **ceremonial and domestic**: the stone **marae**, **heiau** and **ahu**; the *langi* and the trilithon of Tonga; the **communal houses** with Māori carving; the **pā fortresses**; the **upturned-boat houses** of Rapa Nui; and the stone **platforms** with great moai. The hydraulic engineering of Hawaiʻi’s *loʻi* and fishponds is also a form of landscape architecture.',
  { h: 'Rediscovery and recovery' },
  'Western science “discovered” Polynesia with Cook and the naturalists Joseph Banks and Georg Forster in the 18th century; the term “Polynesia” was coined in 1756 by Charles de Brosses, and Dumont d’Urville fixed in 1831 the division into Polynesia, Melanesia and Micronesia (a classification now criticised). In the 20th century archaeology, linguistics and genetics reconstructed the settlement. But the most important recovery was cultural: the **Hawaiian renaissance** of the 1970s, **Hōkūle’a**, the teaching of the Hawaiian and Māori languages, and the return of sacred objects and human remains by museums. The moai **Hoa Hakananai’a**, taken from Rapa Nui in 1868 and held in the British Museum, is the subject of a restitution request by the Rapa Nui community.',
  { img: 'pol-te-papa', leg: 'Double-hulled waka (catamaran) on display at the Te Papa Tongarewa museum in Wellington, New Zealand.' },
  { h: 'Where to visit' },
  { lista: [
    '**Rapa Nui National Park (Chile):** moai, Rano Raraku, Ahu Tongariki, Orongo; World Heritage Site (1995).',
    '**Taputapuatea (Raiatea, French Polynesia):** the most important marae of East Polynesia; World Heritage Site (2017).',
    '**Bishop Museum (Honolulu, Hawaiʻi):** the largest collection of art and history of Hawaiʻi and Polynesia.',
    '**Puʻukoholā Heiau and Puʻuhonua o Hōnaunau (Hawaiʻi):** Kamehameha’s temple and an ancient Hawaiian “place of refuge”.',
    '**Te Papa Tongarewa (Wellington) and Auckland Museum (New Zealand):** collections of Māori and Pacific art.',
    '**Tongatapu (Tonga):** the Haʻamonga ʻa Maui trilithon and the *langi* tombs of Muʻa.',
    '**Musée du Quai Branly (Paris) and the British Museum (London):** large collections of Polynesian objects.',
    '**In Portugal:** the link between the ukulele and the Madeiran cavaquinho (machete), taken to Hawaiʻi in 1879.'
  ] },
  { h: 'Image credits' },
  'Some images on this page are real photographs (Wikimedia Commons) and others are imagined scenes and reconstructions created with artificial intelligence; these are marked in the caption as “AI-generated illustration” and are not photographs of real objects.'
];

const quiz = [
  { p: 'To which language family do the Polynesian languages belong?', op: ['Indo-European', 'Austronesian', 'Papuan', 'Sino-Tibetan'], certa: 1, exp: 'They are Austronesian languages, a family that originated in Taiwan and spread from Madagascar to Easter Island.' },
  { p: 'Which archaeological culture marks the first navigators who reached Tonga and Samoa?', op: ['Lapita', 'Moche', 'Jōmon', 'Clovis'], certa: 0, exp: 'Lapita culture, with its dentate-stamped pottery, is the trail of the first settlers of Polynesia (c. 1000–800 BC).' },
  { p: 'What are the three corners of the Polynesian Triangle?', op: ['Hawaiʻi, Tahiti and Fiji', 'Hawaiʻi, Rapa Nui and New Zealand', 'Samoa, Tonga and Australia', 'The Philippines, Hawaiʻi and Chile'], certa: 1, exp: 'Hawaiʻi (north), Rapa Nui (southeast) and Aotearoa/New Zealand (southwest).' },
  { p: 'How did Polynesian navigators find their way?', op: ['With the magnetic compass', 'With the sextant', 'With stars, swells, birds and clouds', 'With maps written on papyrus'], certa: 2, exp: 'Without instruments, they used a mental star compass and the reading of swells, birds and clouds.' },
  { p: 'According to the most recent dating, when did the Polynesians generally reach New Zealand?', op: ['c. 1000 BC', 'c. 300 AD', 'c. 1250–1300 AD', 'c. 1600 AD'], certa: 2, exp: 'The radiocarbon-based “short chronology” points to c. 1250–1300 AD; older dates are disputed.' },
  { p: 'What is “tapu” (or “kapu”)?', op: ['A currency', 'A musical instrument', 'A system of sacred prohibitions, the origin of the word “taboo”', 'An island in the Pacific'], certa: 2, exp: 'Tapu protected mana, sacred power, and separated the sacred from the ordinary; the word “taboo” comes from Tongan tapu.' },
  { p: 'What kind of vessel was the Hawaiian “waʻa kaulua”?', op: ['A double-hulled canoe', 'A bamboo raft', 'A galley with oars', 'A dugout canoe without a sail'], certa: 0, exp: 'It is the double-hulled canoe, with a central platform, able to carry people, plants and animals on long voyages.' },
  { p: 'Who was Tupaia?', op: ['The first king of Hawaiʻi', 'A priest and navigator from Raiatea who sailed with Cook in 1769', 'An English missionary', 'The chief who unified Samoa'], certa: 1, exp: 'Tupaia drew a chart of dozens of islands and served as guide and interpreter on the voyage of the Endeavour.' },
  { p: 'Which never-deciphered script exists on Rapa Nui?', op: ['Linear B', 'Rongorongo', 'Quipu', 'Ogham'], certa: 1, exp: 'Rongorongo, on about twenty-six wooden objects, remains undeciphered.' },
  { p: 'What did a 2024 ancient-genome study of Rapa Nui, in the journal Nature, show?', op: ['That the island was settled by South Americans', 'That there was no sudden population crash before European contact', 'That the moai were made by extraterrestrials', 'That the population was 50,000 people'], certa: 1, exp: 'The data contradict the idea of an “ecocide” and a sudden collapse in the 17th century.' },
  { p: 'Who unified the Hawaiian islands into one kingdom in 1810?', op: ['Pōmare II', 'Hongi Hika', 'Kamehameha I', 'Liliʻuokalani'], certa: 2, exp: 'Kamehameha I conquered the islands and, in 1810, Kauaʻi and Niʻihau accepted his sovereignty.' },
  { p: 'In 1819, which public act by Kaʻahumanu and King Liholiho broke the kapu system in Hawaiʻi?', op: ['Eating together, men and women', 'Burning the heiau', 'Abdicating the throne', 'Banning fishing'], certa: 0, exp: 'By eating together in public they broke one of the great prohibitions, and the old religious order ceased to be enforced.' },
  { p: 'Where does the word “tattoo” come from?', op: ['Latin tattus', 'Arabic tatwij', 'Tahitian and Samoan tatau, recorded in 1769', 'English to tap'], certa: 2, exp: 'Banks and Cook heard “tatau” in Tahiti and took the word, as “tattow”, into English.' },
  { p: 'Which 1976 voyage proved that deliberate navigation between Hawaiʻi and Tahiti was possible?', op: ['Kon-Tiki', 'Hōkūle’a', 'Bounty', 'Endeavour'], certa: 1, exp: 'Hōkūle’a, with the navigator Mau Piailug, made the voyage without instruments in about 34 days.' },
  { p: 'From which Portuguese instrument does the Hawaiian ukulele derive?', op: ['The viola da terra', 'The cavaquinho (machete) brought from Madeira', 'The Portuguese guitar', 'The mandolin'], certa: 1, exp: 'Emigrants from Madeira took the machete to Hawaiʻi in 1879, and the ukulele was born from it.' }
];

export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };
