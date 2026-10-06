// ABORIGINAL AUSTRALIANS — full English content. Same structure and same image slots as the Portuguese version (dados.js).
// Scope: from the settlement of the continent (c. 65,000–50,000 years ago) to British colonial contact in 1788, with a closing note on continuity and the present day.
// Old dates are given as “years ago” (BP); before c. 10,000 years ago the difference from BC (about 2,000 years) is smaller than the uncertainty of the dating.

const visao = [
  { caixa: 'In brief', texto: [
    '**Aboriginal Australian peoples** are the original inhabitants of the Australian continent, which they reached **about 65,000 years ago** (a debated date: some prefer c. 50,000), after a sea crossing that was one of the first great maritime voyages in human history. They form one of the **oldest continuous living cultures in the world**, tied to the same territory for tens of thousands of years.',
    'They were not “one people”: they were **hundreds of nations**, each with its own language, laws and territory (called “Country”), speaking about **250 languages** and perhaps 600 dialects in 1788. They lived in every environment, from desert to rainforest and the Australian Alps, and adapted to an ice age, to rising seas and to the disappearance of the megafauna. They left one of the longest-running rock art traditions on the planet, a science of landscape and fire, systems for farming eels and trapping fish, and a tradition of law, song and the **Dreaming** that binds people to land. This account stops in **1788**, when the British First Fleet reached Sydney, but the story does not end there: see the closing note in “Legacy”.'
  ] },
  { caixa: 'Before you read: care and words', texto: [
    '**Names.** “Aboriginal” is a general term, coined by colonisers, for hundreds of different peoples. Many people prefer the name of their own nation (Gunditjmara, Yolngu, Noongar, Anangu, Eora and many more) or “First Peoples” and “Indigenous peoples”. **Torres Strait Islanders** are a **distinct** people, of Melanesian origin, and are not Aboriginal; they are mentioned here because they share history and land rights.',
    '**People who have died.** In many Aboriginal communities, especially in the north and centre, care is asked when saying the name of, or showing images or voices of, a person who has recently died. Museum pages often carry such a warning. Here we speak of people from the distant past or of public historical figures, but the warning stands.',
    '**Restricted knowledge.** Part of the knowledge (stories, ceremonies, places) is reserved for particular people, by gender, age or initiation. This text therefore mentions only what the communities themselves and institutions (such as AIATSIS) make public. Nothing described here is a broken secret, and nothing replaces the voices of the peoples concerned.'
  ] },
  { img: 'abo-mapa-sahul', leg: 'Map of Sahul and Sunda during the last glaciation.' },
  { h: 'Where it was' },
  'The Australian continent covers about 7.7 million km² and includes red deserts, tropical savannas, rainforests, snowy mountains, seasonal river plains and a coastline tens of thousands of kilometres long. For almost all the time it has been inhabited, the sea was lower than today and Australia, **New Guinea** and **Tasmania** formed a single continent, **Sahul**. Only with the sea-level rise at the end of the last ice age did these lands separate, between c. 14,000 and c. 8,000 years ago.',
  'When the British arrived in 1788, the whole continent was occupied and **managed**: each nation had its own Country, with boundaries recognised by neighbours and marked in the landscape by sites, springs, trees, rocks and stories. This is why the British idea of “land belonging to no one” (*terra nullius*) was wrong in fact: there was no land without owners.',
  { img: 'abo-mapa-linguas', leg: 'Schematic map of Australian language families; it does not show precise boundaries between all nations.' },
  { h: 'When it existed' },
  'The chronology of Indigenous Australia is the longest in this project. We divide it, roughly, into phases. Dates earlier than c. 40,000 years ago are always debated.',
  { tabela: { cab: ['Phase', 'Approximate dates (years ago)', 'What marks it'], linhas: [
    ['Arrival and settlement', 'c. 65,000 – 40,000', 'Sea crossing to Sahul; Madjedbebe; occupation of the whole continent; ground-edge stone axes; extinction of the megafauna'],
    ['Late Pleistocene and ice age', 'c. 40,000 – 18,000', 'Mungo Lady and Mungo Man; early rock art; cold, dry climate; occupation of deserts and highlands; small points and seed grinding'],
    ['Rising seas', 'c. 18,000 – 8,000', 'The sea rises 120 metres; large coastal areas are lost; Tasmania and New Guinea separate; stories of coastal peoples may keep a memory of this'],
    ['Intensification and regionalisation', 'c. 8,000 – 400', 'Eel traps at Budj Bim; small tools; arrival of the dingo (c. 3,500–4,000 years ago); Gwion, X-ray and other art styles; long-distance trade networks'],
    ['Outside contacts', 'c. AD 1700? – 1788', 'Makassans fishing for trepang in the north; Dutch navigators (1606); Cook in 1770'],
    ['End of scope', '1788', 'Arrival of the British First Fleet at Port Jackson (Sydney)']
  ] } },
  { h: 'Who were they?' },
  'Genetic studies of ancient and present-day DNA, interpreted by teams that included Aboriginal communities, suggest that the ancestors of Aboriginal peoples and Papuans separated from other modern humans outside Africa some 50,000 to 70,000 years ago, and that populations in different parts of Australia diverged over tens of thousands of years, with little genetic contact from outside until the dingo and, later, the northern contacts. This makes them one of the populations with the longest known continuous regional history. It does not make anyone “primitive”: it means only a very long time of adaptation, invention and culture.',
  { img: 'abo-acampamento', leg: 'Family camp in northern Australia, around 5,000 years ago; conjectural scene. AI-generated illustration.' },
  { h: 'Why they matter' },
  { lista: [
    '**Antiquity and continuity:** they are proof that modern humans spread out of Africa into Asia and crossed the sea to Sahul more than 50,000 years ago, and that cultures can last while they adapt.',
    '**Art:** Australian rock art includes some of the oldest still visible in the world and one of the longest traditions, still continued in contemporary painting.',
    '**Ecological knowledge:** fire management, fishing, gathering and sky-watching show a deep knowledge of the land.',
    '**Law and belonging:** the idea that land *owns* people (not people the land) gave rise to their own legal systems and, later, to the recognition of native title.',
    '**A lesson in method:** they teach the historian to tell what archaeology shows from what oral tradition keeps, without placing one above the other.'
  ] },
  { h: 'Today' },
  'Aboriginal and Torres Strait Islander peoples today number more than **800,000 people** (about 3.8% of the Australian population in the 2021 census). Many languages have survived: about 120 are still spoken, but most are endangered. Uluru, Kakadu, Budj Bim, Willandra and Murujuga are World Heritage sites, managed with their traditional custodians. Uluru was closed to climbing in 2019, at the request of the Anangu.',
  { img: 'abo-uluru', leg: 'Uluru viewed from the public sunset viewing area.' }
];

const linha = [
  'This timeline follows the main events in the long history of Aboriginal peoples up to 1788. For the earliest times the dates come from **archaeology** and many are debated; the peoples’ own stories have their own chronology, which does not fit in a table. Where a coincidence between the two is mentioned, it is flagged as tradition.',
  { img: 'abo-travessia-sahul', leg: 'Hypothetical sea crossing towards Sahul, around 60,000 years ago. AI-generated illustration.' },
  { linha: [
    { d: 'c. 65,000 – 50,000 years ago', t: 'The crossing and arrival in Sahul', x: 'Modern humans from Southeast Asia cross the sea, in several crossings of tens of kilometres between islands in the Wallacea region, and reach Sahul. No one knows what craft they used (none survives): bamboo rafts or bark canoes are suspected. It was one of the first open-sea voyages in human history.' },
    { d: 'c. 65,000 years ago (debated)', t: 'Madjedbebe, one of the oldest shelters', x: 'In the rock shelter of **Madjedbebe**, on Mirarr land (Arnhem Land), the 2012 and 2015 excavations (Chris Clarkson’s team) found tools, ground ochre, ground-edge stone axes and food remains in layers dated to **65,000 ± 6,000 years**. Other archaeologists argue for more recent dates (c. 50,000) and point to soil disturbance by termites. The date is much discussed, but the shelter remains one of the oldest known sites on the continent (possibly the oldest).' }
  ] },
  { img: 'abo-madjedbebe', leg: 'Rocky Arnhem Land landscape; an alternative to Madjedbebe shelter.' },
  { linha: [
    { d: 'c. 49,000 years ago', t: 'The arid interior', x: 'At **Warratyi**, in the Flinders Ranges (South Australia, Adnyamathanha country), there are bone and stone tools, ochre and megafauna remains in layers about 49,000 years old, the oldest known occupation of an arid environment in Australia.' },
    { d: 'c. 49,000 – 44,000 years ago', t: 'Ground-edge stone axes', x: 'In the Kimberley (Carpenters Gap) and the north appear **stone axes with ground edges** and wooden handles, among the oldest in the world. They are used to cut trees, strip bark and make canoes and tools.' },
    { d: 'c. 46,000 – 40,000 years ago', t: 'The megafauna disappears', x: 'The great animals of Sahul vanish, such as the **diprotodon** (a giant relative of the wombat), the short-faced kangaroo, the bird **Genyornis** and the giant lizard *Varanus priscus* (megalania). Whether the cause was climate, hunting or fire management, or a combination, is one of the liveliest debates in Australian archaeology.' }
  ] },
  { img: 'abo-diprotodon', leg: 'Diprotodon optatum skeleton on display at the Western Australian Museum.' },
  { img: 'abo-megafauna-cena', leg: 'Diprotodon and Genyornis in a Pleistocene landscape, around 50,000 years ago; artistic interpretation. AI-generated illustration.' },
  { linha: [
    { d: 'c. 42,000 – 40,000 years ago', t: 'Mungo Lady and Mungo Man', x: 'At the dry **Willandra** lakes (New South Wales), a woman’s body is cremated and a man’s is buried covered in ochre. They became known as **Mungo Lady** (found in 1968) and **Mungo Man** (1974). They are among the oldest known funerary rites in the world. The remains were returned to the Mutthi Mutthi, Ngiyampaa and Paakantyi peoples, the traditional custodians (Mungo Lady in 1992, Mungo Man in 2017). The dating of Mungo Lady is debated.' }
  ] },
  { img: 'abo-lago-mungo', leg: 'Walls of China dunes, Lake Mungo, Willandra.' },
  { linha: [
    { d: 'c. 37,000 years ago', t: 'Eruption at Budj Bim', x: 'The volcano **Budj Bim** (south-west Victoria) erupts (dated to c. 36,900 years, with a margin of 3,000 years). The lava creates the basalt fields that, thousands of years later, the Gunditjmara use for their eel traps. The Gunditjmara say that Budj Bim is an ancestral being whose form can be seen in the landscape. Whether this account keeps the memory of the eruption is a debated hypothesis.' },
    { d: 'c. 30,000 years ago', t: 'Seed grinding', x: 'At **Cuddie Springs** (New South Wales) there are grindstones with seed residues about 30,000 years old (dating debated). Turning grass seeds into flour is one of the oldest known subsistence techniques.' },
    { d: 'c. 26,000 – 19,000 years ago', t: 'The height of the ice age', x: 'The climate turns cold and dry, deserts expand and the sea falls by more than 100 metres. Many interior regions are abandoned or used only briefly; the highlands of Tasmania and the Alps are covered by ice. Populations survive in refuges with water and reorganise their territory.' }
  ] },
  { img: 'abo-paisagem-glacial', leg: 'Cold, dry central Australian landscape, around 20,000 years ago; conjectural reconstruction. AI-generated illustration.' },
  { linha: [
    { d: 'c. 20,000 years ago', t: 'Willandra footprints', x: 'Beside Lake Mungo, hundreds of **footprints of children, women and men** were left in wet clay, discovered in 2003 and analysed again in 2020: a snapshot of a group walking, hunting and playing at the end of the Pleistocene.' },
    { d: 'c. 12,000 years ago (debated)', t: 'Paintings of the Kimberley', x: 'Dating of **wasp nests** attached to paintings in the Kimberley (2020 studies) suggests that most of the slender figures called **Gwion Gwion** (or Bradshaw) are c. 12,000 years old; estimates range from c. 3,000 to c. 17,000. The Ngarinyin and other peoples regard them as their own.' },
    { d: 'c. 14,000 – 8,000 years ago', t: 'The sea rises', x: 'With the end of the ice age, the sea rises c. 120 m and swallows coastal plains and the land bridge between Australia and Tasmania (c. 12,000 years ago). **Dozens of stories** of coastal peoples, from Victoria, South Australia and Queensland, speak of lands that went under water; a study by Nunn and Reid argues that some may keep real memory of events 7,000 to 10,000 years ago, but this interpretation is debated.' }
  ] },
  { img: 'abo-esquema-nivel-mar', leg: 'Schematic expansion and inundation of Sahul: approximately 20,000 and 12,000 years before present, and the present coast (0). Drawn from NOAA ETOPO1 data; simplified thresholds without regional isostatic modelling.' },
  { linha: [
    { d: 'c. 10,000 years ago', t: 'Very old wooden boomerangs', x: 'At **Wyrie Swamp** (South Australia), wooden boomerangs preserved in peat were found, about 10,000 years old. They were non-returning hunting weapons, like most Australian boomerangs.' },
    { d: 'c. 6,600 years ago (c. 4600 BC)', t: 'Eel traps', x: 'One of the systems of stone channels and weirs at **Budj Bim** was carbon-dated to about 6,600 years ago. The Gunditjmara use them to catch the short-finned eel (*kooyang*), in aquaculture that lasted into colonial times and which earned the site World Heritage status (2019).' },
    { d: 'c. 4,000 – 3,500 years ago (c. 2000 BC)', t: 'The dingo and small points', x: 'The **dingo**, descended from Asian domestic dogs, arrives with Southeast Asian seafarers and spreads across the continent. Around this time a new set of small stone blades and points appears, the “small tool tradition”. Whether one caused the other, or they were independent, is debated.' },
    { d: 'c. 1,500 – 1,000 years ago (c. AD 500 – 1000)', t: 'The didjeridu in the north', x: 'Paintings in Kakadu National Park show the instrument in use about 1,500 years ago (or less than 1,000, on other readings); the **didjeridu**, from Arnhem Land, is an instrument of the north of the continent.' },
    { d: 'c. 1700 (perhaps earlier)', t: 'The Makassans arrive', x: 'Fishermen from Makassar (Sulawesi, now Indonesia) come every year, with the monsoon, to gather **trepang** (sea cucumber) on the north coast, which they called *Marege*, and trade, work and intermarry with the Yolngu and other peoples. When it began is debated: c. 1720 for most authors, but some propose earlier. The trade continued until 1907.' },
    { d: '1606', t: 'Janszoon and the Duyfken', x: 'The Dutchman **Willem Janszoon**, in the ship *Duyfken*, charts the west coast of Cape York: the first documented European contact with Australia. There were clashes, with deaths among the crew. He did not realise it was a new continent.' }
  ] },
  { img: 'abo-duyfken', leg: 'Replica of the ship Duyfken.' },
  { linha: [
    { d: '1642 – 1688', t: 'Other navigators', x: 'Abel **Tasman** sights Tasmania in 1642, and William **Dampier** passes along the north-west coast in 1688 and 1699. Few contacts, almost all brief and tense. Nothing yet changes for the nations of the continent.' },
    { d: '29 April 1770', t: 'Cook at Botany Bay', x: 'James **Cook**, in the *Endeavour*, lands at Botany Bay (Kurnell), on the land of the **Gweagal** (a Dharawal people). Two Gweagal men resisted the landing; the sailors fired and one was wounded. In the following weeks Cook and his naturalists, **Joseph Banks** and **Daniel Solander**, collect hundreds of plants. Cook was instructed to take possession of land only with the “consent of the natives”, but he never asked and there was no treaty.' }
  ] },
  { img: 'abo-botany-bay', leg: 'Landing of Captain Cook at Botany Bay, 1770, E. Phillips Fox, 1902.' },
  { img: 'abo-endeavour-baia', leg: 'Endeavour at Botany Bay, 29 April 1770; imagined scene viewed from the shore. AI-generated illustration.' },
  { linha: [
    { d: '22 August 1770', t: 'The British claim', x: 'On Possession Island, in the Torres Strait, Cook declares the east coast British Crown territory, under the name **New South Wales**. No one consults the people who live there.' },
    { d: '1779 – 1786', t: 'The decision to colonise', x: 'After the loss of the American colonies, Britain looks for a place to send convicts. Joseph Banks suggests Botany Bay in 1779; the government decides in 1786.' },
    { d: '18 – 26 January 1788', t: 'The First Fleet', x: 'Eleven ships with about 1,400 people, more than 750 of them convicts, commanded by **Arthur Phillip**, reach Botany Bay (18–20 January) and move to Port Jackson, where on 26 January they raise the flag at **Sydney Cove**, on the land of the **Eora** (Gadigal). End of this project’s scope.' }
  ] },
  { img: 'abo-sydney-cove', leg: 'Sydney Cove, Port Jackson, in 1788; watercolour from William Bradley’s journal.' },
  { linha: [
    { d: 'Law: 1788 – 1992', t: 'The “land of no one”', x: 'The Crown treated Australia as land without Indigenous sovereignty or ownership, applying the principle later called *terra nullius*, with no treaties and no purchase. Only in **1992**, in the **Mabo** case, did the High Court of Australia recognise that native title already existed before colonisation.' }
  ] }
];

const mapa = [
  'Aboriginal peoples had no cities or capitals, but they had **geography**: each nation was tied to a territory with names, sacred places, paths and resources. Instead of a list of cities, we present some well-known regions and their peoples. People’s names and spellings vary, and boundaries were negotiated and more flexible than those on a map.',
  { tabela: { cab: ['Region', 'Peoples (examples)', 'Place today', 'What it is known for'], linhas: [
    ['Arnhem Land and Kakadu', 'Yolngu, Bininj/Mungguy, Mirarr, Jawoyn', 'Northern Territory', 'Madjedbebe; rock art of Ubirr and Nourlangie; Makassans'],
    ['Kimberley', 'Ngarinyin, Wunambal, Worrorra', 'Western Australia', 'Gwion Gwion paintings; pearl-shell trade routes'],
    ['Murujuga (Burrup Peninsula)', 'Ngarluma, Yindjibarndi, Mardudhunera and others', 'Pilbara, Western Australia', 'A million engravings; World Heritage in 2025'],
    ['Central desert', 'Anangu (Pitjantjatjara, Yankunytjatjara), Arrernte', 'Northern Territory and South Australia', 'Uluru and Kata Tjuta; desert knowledge; Seven Sisters stories'],
    ['Willandra Lakes', 'Mutthi Mutthi, Ngiyampaa, Paakantyi', 'New South Wales', 'Mungo Lady and Mungo Man; c. 20,000-year-old footprints'],
    ['Murray-Darling', 'Ngarrindjeri, Yorta Yorta, Ngemba', 'South-east', 'Fishing, Brewarrina weirs, bark canoes'],
    ['South-west Victoria', 'Gunditjmara', 'Victoria', 'Budj Bim; eel aquaculture; stone huts'],
    ['Sydney region', 'Eora (Gadigal), Dharawal (Gweagal), Darug', 'New South Wales', 'Contact sites of 1770 and 1788'],
    ['Wet Tropics', 'Yidinji, Djabugay and others (Bama)', 'Queensland', 'Rainforests; preparation of toxic nuts; shields and baskets'],
    ['Tasmania', 'Palawa', 'Tasmania', 'Cut off from Australia since c. 12,000 years ago; own culture'],
    ['Torres Strait', 'Torres Strait Islanders (Meriam, Kala Lagaw Ya, etc.)', 'Between Australia and New Guinea', 'A **distinct** people, of Melanesian origin; horticulture and seafaring']
  ] } },
  { h: 'Arnhem Land and Kakadu' },
  'The tropical north, with monsoon rains and floodplains, is home to the shelter of **Madjedbebe** and one of the greatest concentrations of rock art in the world. **Kakadu National Park**, inscribed by UNESCO in 1981 (natural and cultural heritage), has more than 5,000 art sites and is managed by the traditional owners (Bininj/Mungguy) together with the government. The **Yolngu** of the north-east were those with the most contact with the Makassans and keep that memory in songs and in words.',
  { img: 'abo-kakadu', leg: 'Landscape of Kakadu National Park.' },
  { h: 'Murujuga and the North-West' },
  'At **Murujuga** (Burrup Peninsula, Pilbara), the dark dolerite rocks are covered by **about a million engravings**, some of which are estimated to be more than 40,000 years old, though dating is difficult and debated. They show animals (including the thylacine, extinct on the mainland for millennia), people, geometric figures and fishing scenes. In July 2025 UNESCO inscribed the **Murujuga Cultural Landscape**, where the Ngarluma, Yindjibarndi, Mardudhunera and other peoples are the custodians. The engravings are threatened by neighbouring industrial pollution, which fuels a strong debate.',
  { img: 'abo-murujuga', leg: 'Murujuga petroglyphs, Burrup Peninsula.' },
  { h: 'The desert and the lands of Uluru' },
  'The central desert looks empty but has always been inhabited. The **Anangu** know every waterhole, every rock spring and every site with edible plants, and organise the land by **songs** and **stories** of ancestral beings, tied to the shapes of rocks and to springs. **Uluru** and Kata Tjuta were handed back to the Anangu in 1985 and leased to the national park.',
  { h: 'Budj Bim, in south-west Victoria' },
  'In the basalt fields left by the lava of **Budj Bim**, the **Gunditjmara** built, over thousands of years, a system of channels, weirs and ponds to manage water and catch eels through the flood season. Alongside, they built huts with stone bases, which suggests more settled living than was once thought. In 2019, **Budj Bim** became the first World Heritage site in Australia inscribed solely for its Aboriginal values.',
  { img: 'abo-budj-bim', leg: 'Lake Surprise in the Budj Bim / Mount Eccles crater, Victoria.' },
  { h: 'The Torres Strait Islanders' },
  'The Torres Strait has about 270 islands between Australia and New Guinea. Its inhabitants, the **Torres Strait Islanders**, are **a distinct people**, with their own languages and culture, linked to Melanesia: they practise horticulture, sail in canoes and trade with New Guinea and the mainland. They are not Aboriginal, but their fate has crossed that of Aboriginal peoples in colonisation and in land rights. The **Mabo** case (1992) began on the island of Mer (Murray), brought by **Eddie Koiki Mabo**, a Meriam man.',
  { img: 'abo-torres', leg: 'Map of Torres Strait.' },
  { h: 'Routes, trade and meetings' },
  'The nations were linked by **networks of trade and paths** thousands of kilometres long. **Pearl shell** from the Kimberley was carried, hand to hand, to the central desert. Red **ochre** was dug from mines such as **Wilgie Mia** (Western Australia), worked for millennia. The mild stimulant **pituri** (made from a plant) travelled from Queensland to the desert. The **bunya feasts**, in the Bunya Mountains, brought together peoples from great distances every few years to harvest the nuts of the bunya pine, with diplomacy, marriages and ceremonies. These routes partly coincide with the **songlines**, described in “Society”.',
  { img: 'abo-comercio-troca', leg: 'Exchange of shells, ochre and tools between groups, around 1500; conjectural scene. AI-generated illustration.' }
];

const sociedade = [
  { caixa: 'Archaeology and oral tradition', texto: [
    'This chapter mixes two kinds of knowledge. What is known from **archaeology** (tools, dating, bones, paintings) comes with dates. What comes from the peoples’ **oral tradition** and law, such as the Dreaming, comes with its source and is described as living knowledge, not as legend. Some stories, such as those of sea-level rise, may keep memories of very ancient events, but that is a hypothesis under discussion. So the text treats them neither as “myths” nor as “proof”.'
  ] },
  { h: 'Political organisation and law' },
  'There were no kings, taxes or armies. Each local group (a **clan** or an **extended family**) had its own Country; several groups, linked by language, marriage and ceremony, formed the nation. Authority belonged to **elders**, men and women, with knowledge of law, stories and places, and important decisions were taken by consensus, through meetings, exchanges and alliances. The **Law** comes from the ancestral beings and governs relations between people, land, plants and animals; whoever lives on Country has a duty to care for it.',
  { h: 'Kinship and family' },
  'Kinship is the structure of everything. In many regions people belong to a **moiety** or to one of four or eight **sections** (the so-called “skin names”), which say whom one may marry and how to treat each person in the community. Each individual also has a **totem** (an animal, a plant or a phenomenon), inherited from the family, with responsibilities towards it. So a stranger arriving in a community may be placed, in the very first conversation, in a position within the kinship system.',
  { h: 'Languages' },
  'In 1788 about **250 distinct languages** and perhaps 600 dialects were spoken. Most of the languages belong to the **Pama-Nyungan** family, which covers almost all of the continent outside the north; in the north there are many smaller and very diverse families, of debated origin. Almost everyone was **multilingual**. Today about 120 languages are still spoken, but most are endangered, and there are revitalisation projects.',
  { h: 'The Dreaming and religion' },
  { caixa: 'An important warning', texto: [
    'The **Dreaming** is not “mythology” in the sense of entertaining tales, nor “religion” in the manner of Mediterranean religions. It is how many nations describe the **origin and law of the world**: ancestral beings travelled across the land, and in doing so created rivers, mountains, animals and laws, and remain present in places and people. It is not only a past: the anthropologist W. E. H. Stanner wrote that it is “all time”, the **“everywhen”**. The word *Dreaming* is a translation, and there are many local names (*Jukurrpa* for the Warlpiri, *Tjukurpa* for the Anangu, *Ngarranggarni*, *Bugarrigarra* and others).',
    'Part of the knowledge is **restricted** to men, to women or to initiated people, and is not told to those without the right to it. What follows is only what the peoples themselves and institutions make public.'
  ] },
  'Each story belongs to a Country and a family, and cannot simply be moved from place to place. Stories explain the world, but also **teach how to live in it**: where to find water, what to eat, what is forbidden, how to treat relatives. They are passed on in songs, dances, paintings and drawings in the sand.',
  { tabela: { cab: ['Being or theme', 'Where', 'What it is about (in public terms)'], linhas: [
    ['Rainbow Serpent (many names: *Ngalyod*, *Yurlunggur*, *Wagyl*, etc.)', 'Across much of the continent, with different versions', 'A being linked to water, springs and the seasons; protects and punishes. It is not the same figure everywhere'],
    ['Baiame', 'Kamilaroi, Wiradjuri and neighbouring peoples, south-east', 'Creator and giver of law; Ngemba tradition attributes the Brewarrina weirs to him'],
    ['The Seven Sisters', 'From the central desert to the west and south (many peoples)', 'A song about seven sisters pursued by a man, who become the stars of the Pleiades; it runs for thousands of kilometres'],
    ['Budj Bim', 'Gunditjmara, south-west Victoria', 'Ancestral being whose form is the volcano; speaks of lava and the landscape'],
    ['The Emu in the Sky', 'Kamilaroi and others', 'Constellation formed by the dark patches of the Milky Way; its position tells when emus lay their eggs']
  ] } },
  { h: 'Songlines' },
  'Many Dreaming stories follow the **routes** of ancestral beings across the land, called in English *songlines* or *dreaming tracks*. Each stretch has a **song**, with verses describing what is found there: hills, waterholes, trees, directions. Someone who knows the song can walk hundreds of kilometres without getting lost, and whoever sings it *maintains* the landscape. The routes cross nations and also work as **maps, calendars and archives of law**. Bruce Chatwin’s popular book (1987) spread the term but is criticised for how it handles it; for the concept, consult the voices of the peoples themselves.',
  { h: 'Rock art and painting' },
  'Australia has one of the longest art traditions in the world, of **painting**, **engraving** and **drawing on the ground**. Many sites were repainted for centuries or millennia by those responsible for them, so some “belong” to several periods. Dating is hard: archaeologists use soil layers containing pigment, wasp nests above or below the paint, or styles and subjects.',
  { img: 'abo-ubirr', leg: 'Ubirr rock art gallery, including X-ray-style fish paintings.' },
  { img: 'abo-nourlangie', leg: 'Rock paintings in the public gallery at Burrungkuy / Nourlangie.' },
  { img: 'abo-gwion', leg: 'Gwion Gwion paintings near Big Mertens Falls, Mitchell River National Park, Kimberley.' },
  { lista: [
    '**Kakadu and Arnhem Land:** the rock art spans tens of thousands of years. It includes naturalistic animal figures, slender dancing figures, and the famous **X-ray** style, of the last millennia, with the animal’s bones and organs. At sites such as Ubirr and Burrunguy, custodians continue to look after the paintings.',
    '**Kimberley:** the **Gwion Gwion** (also called “Bradshaw”, after a settler) are elegant figures of people with adornments, and the **Wandjina** are figures of ancestral beings linked to rain, with large eyes, which Kimberley peoples still repaint today: they are cared for and restricted, so we do not describe them further.',
    '**Murujuga:** engravings (petroglyphs) in dark rock, of great antiquity, with animals, human figures and geometry.',
    '**Bark painting:** in Arnhem Land, flattened bark is painted with ochres and white clay, in cross-hatched patterns and figures; it is a living tradition.',
    '**Sand drawing and body painting:** very important, but ephemeral and almost impossible for archaeology to preserve.'
  ] },
  { img: 'abo-casca', leg: 'Wambiddyer anteater, bark painting by an unidentified Kunwinjku artist; National Gallery of Australia.' },
  { h: 'Fire and land management' },
  'Aboriginal peoples used **fire** deliberately and regularly to manage the landscape: small, cool burns, in a mosaic, in the right season, to renew grass, attract animals, open paths, reduce large fires and protect sensitive areas. The archaeologist **Rhys Jones** called it, in 1969, *fire-stick farming*. The historian **Bill Gammage** (2011) argued in *The Biggest Estate on Earth* that much of the “natural countryside” the settlers saw in 1788, with grasslands and open woodland, was in fact a **tended** landscape. How old and how extensive this use was is debated; today, “cultural burning” is being used again in several parks.',
  { img: 'abo-fogo-gestao', leg: 'Low-intensity mosaic burning; artistic interpretation of landscape management. AI-generated illustration.' },
  { h: 'Economy, trade and food' },
  'There was no money or markets. People moved with the seasons, and food came from **hunting, fishing and gathering**: kangaroos, emus, fish, shellfish, turtles, lizards, eggs, ants and grubs (such as witchetty grubs), roots (yams), fruit (Kakadu plum), grass seeds, nuts (bunya, cycads, after leaching to remove the poison). Women did most of the gathering and men the larger hunting, but tasks varied greatly from region to region. Food was shared by kinship rules, and what was **exchanged** (shells, ochre, tools) created links and obligations.',
  { img: 'abo-colheita-sementes', leg: 'Grinding seeds in a camp; imagined everyday scene. AI-generated illustration.' },
  { img: 'abo-moagem', leg: 'Grinding stones and other utensils at a former Martu food preparation place; photograph by Fiona Walsh, 1987.' },
  { lista: [
    '**Seeds:** of grasses and acacias, ground and cooked as small “breads” on the embers.',
    '**Toxic nuts:** cycads and other fruits, which require washing in running water and fermentation to remove the poison, showing deep chemical knowledge.',
    '**Earth ovens:** hot stones and leaves, for cooking meat, roots and fish.',
    '**Bunya:** the harvest of the bunya pine, every three years, in south-east Queensland, brought together hundreds of people.'
  ] },
  { h: 'The debate: hunter-gatherers or farmers?' },
  { caixa: 'Dark Emu and the debate', texto: [
    'In 2014 the writer Bruce Pascoe published *Dark Emu*, arguing that Aboriginal peoples practised **agriculture and aquaculture** and lived in houses and settled villages. Historians agree that Aboriginal peoples actively **managed** plants, water and animals, and that there were very sophisticated systems (such as Budj Bim, the Brewarrina weirs or yam harvesting), but they debate whether this is “agriculture” in the sense of sowing and harvesting fields. There is also discussion of some of the evidence cited by Pascoe and of his identity. The expression most used by researchers is “**land management**” and “sophisticated hunter-gatherers”.'
  ] },
  { h: 'Fishing and aquaculture' },
  'Coastal and river peoples fished with **spears, nets, hook-and-line** (of shell, on southern coasts) and **stone traps**. At **Budj Bim**, the Gunditjmara made channels, weirs and woven baskets to hold eels, and other peoples built **tidal traps**. At **Brewarrina** (New South Wales), the complex of **stone weirs** on the Barwon River, the *Ngunnhu* (which Ngemba tradition calls “Baiame’s”), brought together nations from across the region in fishing and ceremonial seasons. Tradition speaks of tens of thousands of years; the exact archaeological dating is lacking.',
  { img: 'abo-eel-traps', leg: 'Conjectural reconstruction of Gunditjmara eel channels and traps in a basalt landscape. AI-generated illustration.' },
  { img: 'abo-pesca-enguias', leg: 'Eel fishing in basalt channels with basket traps; conjectural reconstruction. AI-generated illustration.' },
  { img: 'abo-brewarrina', leg: 'Brewarrina stone fish traps, Ngunnhu.' },
  { h: 'Houses and shelters' },
  'Dwellings varied with climate and season. In the desert and savanna people used **windbreaks** of branches and **shelters** of branches and bark (*wiltja*, *gunyah* or *humpy*), made in little time. In rainy regions, such as the tropics and Tasmania, there were sturdier dome-shaped **huts of bark and branches**. The **Gunditjmara** left stone bases of round huts, which suggests more settled living. Caves and shelters were used as refuges and for ceremonies.',
  { img: 'abo-casa-gunditjmara', leg: 'Gunditjmara dwellings beside wetlands in southwestern Victoria; conjectural reconstruction. AI-generated illustration.' },
  { h: 'Clothing and ornaments' },
  'The climate of most of the continent made clothes unnecessary, and little was worn: belts, bands, aprons, necklaces of shells or seeds, feathers, and **body painting** with ochre, clay and charcoal. In the south and in Tasmania, on cold nights, **possum-skin** and kangaroo-skin cloaks were worn, sometimes decorated with designs that told the person’s story. Designs, scars and paintings marked clan, age and ceremony.',
  { h: 'Music, dance and games' },
  '**Song**, **dance** and **music** are tied to stories and law, and are always performed in the right context. The most common instruments are **clapsticks**, hand-clapping and bullroarers. The **didjeridu** (local names: *yiḏaki*, *mako*, and dozens of others) comes from Arnhem Land and the north, and is a eucalyptus trunk hollowed out by termites; traditionally its use in ceremonies was reserved for men, but this varies from region to region. **Corroborees** are gatherings of song and dance. Among games there were **skin-ball games** such as *marn grook* (Victoria); the link with Australian football is debated.',
  { img: 'abo-didgeridoo', leg: 'Decorated didjeridu on display at the Musical Instrument Museum, Phoenix.' },
  { h: 'Science and knowledge of the sky' },
  'Knowledge of nature was systematic and passed on through stories and songs: season calendars based on plants, animals and winds (the Yolngu distinguish six seasons, other peoples five or seven), ethnobotany, and a rich **astronomy**. Aboriginal peoples used the stars and the **dark patches of the Milky Way** (such as the Emu in the Sky) as a calendar, to tell when to gather eggs, seeds and fish. Some stories of northern peoples also explain the **tides** and **eclipses**.',
  { h: 'Technology and tools' },
  'Technology was mainly of **stone, wood, bone, fibre and resin**. There are flaked and ground stone tools, **axes** with ground edges, small **blades** and points glued to handles with **spinifex resin** (a desert grass), **wooden clubs**, **nets**, **baskets**, **bark and skin containers** for water, **hair and fibre string**, and bark **canoes**. These objects required great knowledge of materials and fire.',
  { img: 'abo-pedra-ferramentas', leg: 'Aboriginal stone knife with a handle, Wellcome collection.' },
  { img: 'abo-canoa', leg: 'Historical illustration of a Kurnai bark canoe, published in Native Tribes of South-East Australia.' },
  { h: 'Hunting and weapons: boomerang and spear-thrower' },
  'The best-known weapons are the **boomerang** and the **spear-thrower** (*woomera*). Not all boomerangs come back: **returning** ones, lighter, were used for play, for hunting birds and as musical instruments, and were made only in certain regions; **non-returning** ones were hunting and fighting weapons, heavier and straighter. The oldest known wooden boomerangs in Australia come from Wyrie Swamp (c. 10,000 years). The **spear-thrower** is a board with a hook that increases the range and force of a spear; it was used across almost the whole continent.',
  { img: 'abo-boomerang', leg: 'Aboriginal boomerangs in a museum.' },
  { img: 'abo-propulsor', leg: 'Aboriginal spear throwers, woomera.' },
  { img: 'abo-caca-canguru', leg: 'Hunters approaching kangaroos with spears and spear throwers; conjectural scene. AI-generated illustration.' },
  { h: 'Conflict and war' },
  'There were **conflicts** between groups, over offences, deaths, women, places, but they were generally governed by **rules**: formal duels, ritualised combat with few deaths, reparation (*payback*) and mediation by elders. The image of tribes in constant war is false, just as is that of a paradise without violence. Real large-scale violence would come after 1788, with colonisation, and lies outside the scope of this chapter.',
  { h: 'Contacts with the outside' },
  'Before 1788, contacts with the outside were **in the north**. The **Makassans**, coming from Sulawesi with the monsoons, spent months on the coasts of Arnhem Land and the Kimberley gathering and drying trepang for the Chinese market. They left **tamarind trees**, words, canoes, iron tools and stories in languages and in rock art (there are paintings of sailing boats). The Yolngu were partners and sometimes rivals, not victims, and received goods, worked on the boats and even travelled to Makassar.',
  { img: 'abo-macassarenses', leg: 'Makassans and Yolngu working and exchanging goods on the northern coast, around 1800; imagined scene. AI-generated illustration.' }
];

const personalidades = [
  'Before 1788 there are no names of Aboriginal people in documents, since there was no writing. There are the peoples’ stories, which keep another memory, but the personal names of the time have not survived, or are reserved to families. Instead of inventing biographies, we list **figures of archaeology and history** associated with the period. Out of respect for the communities, the human remains discussed have been returned to the traditional custodians.',
  { h: 'Mungo Lady and Mungo Man (c. 42,000 – 40,000 years ago)' },
  'Names given by archaeologists to the remains of two people from the Willandra Lakes, a cremated woman and a man buried with ochre. Their real names are lost. For decades they were objects of science and were later **returned** to the traditional custodians (1992 and 2017), who hold that people of the past deserve the same respect as those of today. They are remembered with the care their community asks.',
  { h: 'Jim Bowler (b. 1930)' },
  'Australian geologist who found the remains of **Mungo Lady** (1968) and **Mungo Man** (1974) at the Willandra Lakes, and showed, through the geology of the lake, that settlement went back tens of thousands of years. He was decisive in overturning the idea that Aboriginal occupation was recent.',
  { h: 'Rhys Jones (1941 – 2001)' },
  'Welsh-Australian archaeologist who coined the term ***fire-stick farming*** (1969), describing the use of fire to manage the landscape, and who studied the Aboriginal people of Tasmania. He changed how hunter-gatherer peoples were seen.',
  { h: 'W. E. H. Stanner (1905 – 1981)' },
  'Australian anthropologist who wrote about the Dreaming (*The Dreaming*, 1953) and coined the expression **“everywhen”** to say that this time has not passed. He was also a critic of what he called the “great Australian silence” of historiography about Aboriginal people (1968).',
  { h: 'Willem Janszoon (c. 1571 – after 1630)' },
  'Dutch navigator of the East India Company. In 1606, in the *Duyfken*, he sailed along the coast of Cape York: the first documented European contact with Australia. There were clashes, and he did not realise it was a new continent.',
  { h: 'James Cook (1728 – 1779)' },
  'British navigator and cartographer. In 1770 he charted the east coast of Australia and claimed it for the Crown. He landed at Botany Bay on 29 April 1770, on the land of the **Gweagal**, and had a short, tense contact. His instructions spoke of obtaining the “consent of the natives”, which never happened.',
  { img: 'abo-cook', leg: 'James Cook, portrait by Nathaniel Dance, National Maritime Museum.' },
  { h: 'Joseph Banks (1743 – 1820)' },
  'Naturalist who accompanied Cook, collected hundreds of plants at Botany Bay and, in 1779, recommended the colonisation of Botany Bay to the British Parliament. He described the inhabitants as sparse and without agriculture, an argument that helped justify the occupation.',
  { h: 'Arthur Phillip (1738 – 1814)' },
  'Naval officer, first governor of New South Wales, led the First Fleet and founded the Sydney colony in 1788. His instructions told him to live “in amity” with the inhabitants, but he also ordered some to be captured in order to learn their language.',
  { h: 'Arabanoo (? – 1789)' },
  'A man of the Eora people (from the Manly area), captured in December 1788 on Phillip’s orders. He lived with him and helped the British understand the Eora. He died of smallpox in May 1789, in the epidemic that devastated the peoples of Sydney.',
  { h: 'Bennelong (c. 1764 – 1813)' },
  'A man of the Eora people (Wangal), captured in 1789 and later close to Governor Phillip. In 1792 he went to England (he is said to have met King George III, but there is no direct evidence). He returned to Sydney in 1795, and lived between the two worlds, with difficulty. His accounts are among the few Eora voices of the early years. He was a figure between two worlds, used today to speak of Eora history.',
  { img: 'abo-bennelong', leg: 'Bennelong, print by Samuel John Neele published in 1803; British Museum.' },
  { h: 'Pemulwuy (c. 1750 – 1802)' },
  'A Bidjigal man (of the Darug people, in the Botany Bay region), leader of Aboriginal resistance in the colony’s first years (from 1790). He was killed in 1802. He lies outside the chronological scope, but is remembered as a symbol of resistance.',
  { h: 'Eddie Koiki Mabo (1936 – 1992)' },
  'A Meriam islander from Mer (Murray Island), in the Torres Strait, who in 1982 began the case against the state of Queensland. The **High Court decision of 1992**, five months after his death, recognised **native title** and overturned the idea of *terra nullius*. He was not Aboriginal but a Torres Strait Islander, and his story is central to both peoples.'
];

const legado = [
  { h: 'What they left us' },
  { lista: [
    '**A living culture:** the continuity, over tens of thousands of years, of law, language, song and connection to Country.',
    '**Art:** one of the oldest and longest rock art traditions, today continued in paper and canvas painting of the central desert and Arnhem Land communities. The **Papunya Tula** movement (1971) took dot-and-circle painting to museums around the world.',
    '**Science of the landscape:** the use of fire, the management of water and fish, knowledge of plants and animals, and observation of the sky.',
    '**Law:** recognition of **native title** (1992), the return of lands such as Uluru (1985), and the repatriation of human remains from museums.',
    '**Words:** *kangaroo*, *koala*, *boomerang*, *dingo*, *wombat* and many others came from Aboriginal languages into English and other languages.'
  ] },
  { h: 'Art and architecture' },
  'There are no temples or cities, but there is **architecture of the landscape**: the channels of Budj Bim, the weirs of Brewarrina, the Gunditjmara stone huts, stone circles and paths. Art is made of **ochre, charcoal, clay and gypsum**: reds, yellows, whites and blacks, among the oldest pigments used in the world. Contemporary painting keeps the same bond with places, with dots, lines and circles that tell the Country, without showing what may not be shown.',
  { h: 'Rediscovery and research' },
  'Western science recognised the antiquity of Aboriginal peoples only in the second half of the 20th century. Until the 1960s, it was thought that occupation of the continent was only a few thousand years old. **Radiocarbon** dating and the excavations at Willandra (1968), Madjedbebe (1973) and elsewhere changed everything. Today, research is done **with the communities**, who decide what is studied and what is shown, and AIATSIS (the Australian Institute of Aboriginal and Torres Strait Islander Studies) has its own ethical guidelines.',
  { h: 'Where to visit and learn' },
  { lista: [
    '**Kakadu National Park** (Northern Territory): Ubirr, Burrunguy (Nourlangie) and Madjedbebe (visits only with the custodians).',
    '**Uluru-Kata Tjuta** (Northern Territory): the Anangu cultural centre; the climb has been closed since 2019.',
    '**Budj Bim** (Victoria): the Tae Rak centre and tours guided by the Gunditjmara.',
    '**Mungo National Park** (Willandra Lakes, NSW): the “Walls of China” dune and guided visits.',
    '**Murujuga** (Western Australia): engravings, with the Murujuga Living Knowledge Centre.',
    '**Museums:** National Museum of Australia (Canberra), South Australian Museum (Adelaide), Melbourne Museum (Bunjilaka) and, in Europe, the British Museum and the Musée du quai Branly (Paris). Some warn that there are images of people who have died.'
  ] },
  { h: 'When visiting: respect' },
  { lista: [
    'Ask permission before photographing people, and do not photograph sites marked as restricted.',
    'Do not step on or touch paintings and engravings; stay on the paths.',
    'Ask communities and guides what they can tell, and do not press for what they cannot.',
    'Prefer guides, tours and cultural centres run by the peoples themselves.'
  ] },
  { caixa: 'Closing note: after 1788 and today', texto: [
    'The arrival of the First Fleet was the beginning of a **history of loss and resistance** that lies outside the scope of this text: epidemics (the smallpox of 1789 hit the Eora and neighbouring peoples hard), loss of land, violence, forced removal of children from families (the “Stolen Generations”, until the 1970s) and bans on languages and ceremonies. Aboriginal peoples survived, resisted and rebuilt, and today number more than 800,000 people, with languages, laws, artists, scientists, lawyers, writers and politicians who carry on what began tens of thousands of years ago.',
    '**Torres Strait Islanders** are a people of their own, with their own flag, languages and history, and share with Aboriginal peoples many rights and struggles. This text uses the past tense to describe what archaeology and history show, but **these peoples are alive**, and their voices are the best source. To learn more, consult **AIATSIS** (aiatsis.gov.au), the National Museum of Australia and the websites of land councils and art centres run by the communities themselves.'
  ] }
];

const quiz = [
  { p: 'About how long ago is it estimated that humans reached Australia?', op: ['About 5,000 years', 'About 20,000 years', 'Between 50,000 and 65,000 years', 'About 200,000 years'], certa: 2, exp: 'The Madjedbebe dates point to 65,000 years (debated); other readings prefer c. 50,000. Either way, tens of thousands of years.' },
  { p: 'What was the single continent that joined Australia, New Guinea and Tasmania called?', op: ['Gondwana', 'Sahul', 'Pangaea', 'Oceania'], certa: 1, exp: 'Sahul existed while the sea was lower and split apart with sea-level rise at the end of the ice age.' },
  { p: 'Roughly how many Aboriginal languages were spoken in 1788?', op: ['Just one', 'About 20', 'About 250', 'More than 2,000'], certa: 2, exp: 'About 250 languages and perhaps 600 dialects were spoken. Today about 120 are still spoken, most of them endangered.' },
  { p: 'What is Madjedbebe?', op: ['A volcano in Victoria', 'A rock shelter in Arnhem Land with very ancient occupation', 'A law of the Anangu', 'A musical instrument'], certa: 1, exp: 'It is the shelter where excavations indicated occupation c. 65,000 years ago, a debated date.' },
  { p: 'What discovery of c. 40,000 years ago was made at the Willandra Lakes, at Mungo?', op: ['A pyramid', 'A cremated woman and a man buried with ochre', 'A ship', 'A hoard of gold'], certa: 1, exp: 'Mungo Lady and Mungo Man, returned to the traditional custodians (1992 and 2017).' },
  { p: 'Which animals were part of the extinct megafauna of Sahul?', op: ['Diprotodon and Genyornis', 'Mammoth and woolly rhinoceros', 'Dinosaurs', 'Sabre-toothed tiger'], certa: 0, exp: 'The diprotodon (a giant relative of the wombat) and the bird Genyornis vanished between c. 46,000 and 40,000 years ago.' },
  { p: 'What is the “Dreaming” for many Aboriginal peoples?', op: ['A children’s legend', 'A collection of unimportant tales', 'The origin and law of the world, still present', 'An agricultural calendar'], certa: 2, exp: 'It is not just myth: it is law, land and identity, in force “all time”, Stanner’s “everywhen”.' },
  { p: 'What are “songlines”?', op: ['Roman roads', 'Routes of ancestral beings, described in songs, that link places and work as maps', 'Coins', 'Fishing boats'], certa: 1, exp: 'Each stretch has a song with directions for what is found along the way.' },
  { p: 'Which people built the eel aquaculture system at Budj Bim, World Heritage since 2019?', op: ['Anangu', 'Yolngu', 'Gunditjmara', 'Noongar'], certa: 2, exp: 'One system was dated to c. 6,600 years ago; the Gunditjmara remain the site’s custodians.' },
  { p: 'What does *fire-stick farming* mean?', op: ['Farming with ploughs', 'Managing the landscape with small, controlled fires', 'A fishing technique', 'A children’s game'], certa: 1, exp: 'The term was coined in 1969 by Rhys Jones; debates continue over its scope.' },
  { p: 'Which region does the didjeridu come from?', op: ['Tasmania', 'The central desert', 'Northern Australia, especially Arnhem Land', 'South-eastern Australia'], certa: 2, exp: 'It is an instrument of the north of the continent; local names include yiḏaki and mako.' },
  { p: 'Who regularly visited the northern coast of Australia to gather trepang?', op: ['The Portuguese', 'The Makassans from Sulawesi', 'The Japanese', 'The Chinese from Canton'], certa: 1, exp: 'They came with the monsoons and exchanged goods, words and techniques with the Yolngu and other peoples, until 1907.' },
  { p: 'Who landed at Botany Bay on 29 April 1770?', op: ['Willem Janszoon', 'Arthur Phillip', 'Abel Tasman', 'James Cook'], certa: 3, exp: 'Cook landed on the land of the Gweagal (a Dharawal people).' },
  { p: 'In what year and where did the British First Fleet arrive, marking the end of this scope?', op: ['1606, Cape York', '1770, Botany Bay', '1788, Sydney Cove (Port Jackson)', '1901, Canberra'], certa: 2, exp: 'On 26 January 1788, under Arthur Phillip, on the land of the Eora.' },
  { p: 'Which 1992 decision recognised native title and rejected the idea of “land of no one”?', op: ['The Mabo case', 'The Uluru Statement', 'The Federation Act', 'The Treaty of Sydney'], certa: 0, exp: 'The Mabo case, begun by Eddie Mabo, a Torres Strait Islander from Mer.' }
];

export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };
