// ETRUSCANS — full English content. Same structure and same image slots as the Portuguese version (dados.js).
// Dates follow the “middle chronology”; many dates of early Rome are tradition handed down by late authors (Livy, Dionysius of Halicarnassus), not secure fact. BC/AD.

const visao = [
  { caixa: 'In brief', texto: [
    'The **Etruscans** were the people who, from about **900 BC** until Romanization in the 1st century BC, created the first great urban civilization of Italy, in the region the Romans called **Etruria**, which corresponds today largely to **Tuscany**, northern **Latium** and part of **Umbria**. They spoke a language that does not belong to the Indo-European family, wrote with an alphabet of Greek origin, and called themselves **Rasna** (or *Rasenna*). They never formed a single state: they were a **loose federation of city-states** (the most important were Veii, Caere, Tarquinia, Vulci, Clusium and Volterra), united by language, religion and business.',
    'They grew rich on the **iron** of the island of Elba and of Tuscany, on farming, and on sea trade with Greeks, Phoenicians and Carthaginians. At their height, in the 7th and 6th centuries BC, they dominated the Po plain to the north and Campania to the south, and **three of the seven traditional kings of Rome** are said to have been of Etruscan origin (the tradition is old, but the details are legendary). Then came defeats at sea, Gallic invasions and, above all, the pressure of **Rome**, which conquered the Etruscan cities one by one between 396 and 264 BC and granted them citizenship in 90–89 BC. The Etruscan language faded away in the time of Augustus and the following centuries, but much of what we associate with Rome, from religion to town planning, from writing to dress, passed through the Etruscans.'
  ] },
  { img: 'etr-mapa-etruria', leg: 'Map of Etruria and of Etruscan expansion into the Po plain and Campania.' },
  { h: 'Where it was' },
  'The heart of Etruria is the land between the river **Arno** to the north, the **Tiber** to the south and east, and the **Tyrrhenian Sea** to the west, a name that comes from *Tyrrhenoi*, the Greek word for the Etruscans. It is a landscape of hills of **tuff** (a volcanic rock that is easy to carve), fertile valleys and short rivers, with the **Metal-Bearing Hills** near the coast, rich in copper, lead, tin and iron, and the island of **Elba** just offshore. Almost all the cities arose on naturally defended plateaux a few kilometres from the sea, and many occupy the same site today and sometimes bear the same name: Tarquinia, Volterra, Arezzo, Perugia, Cortona, Orvieto.',
  'In the 6th century BC Etruscan influence went beyond those limits: to the **north** it reached the Po plain, with **Felsina** (Bologna), **Marzabotto**, **Spina** and **Mantua**; to the **south**, **Campania**, where **Capua** was the main Etruscan city; and **Rome** and Latium, where Etruscan culture left deep marks. The limits varied over the centuries, and the Etruscan presence in some places (Pompeii, for example) is debated.',
  { img: 'etr-pitigliano', leg: 'Tuff landscape in southern Tuscany: Pitigliano, on its cliff, in a region of sunken roads cut by the Etruscans.' },
  { h: 'When it existed' },
  'Etruscan chronology is divided by art styles and phases of power. The dates below are approximate, and it is hard to say where the Etruscans “begin”: many archaeologists consider the **Villanovan** culture (c. 900 BC) already Etruscan in its early form; others speak of “Etruscans” only from the 8th century.',
  { tabela: { cab: ['Phase', 'Approximate dates', 'What marks it'], linhas: [
    ['Villanovan', 'c. 900 – 720 BC', 'Large villages on plateaux; cremation; biconical urns; bronze and iron working; first contacts with the Greeks'],
    ['Orientalizing', 'c. 720 – 580 BC', 'Sudden wealth; princely tombs (Regolini-Galassi); writing; imports from the East; city-states are born'],
    ['Archaic (peak)', 'c. 580 – 480 BC', 'Expansion into the Po and Campania; Etruscan kings in Rome (tradition); temples, painted tombs, bucchero; Alalia (c. 540)'],
    ['Classical (retreat)', 'c. 480 – 300 BC', 'Defeat at Cumae (474); Gallic invasions; fall of Veii (396); wars with Rome'],
    ['Hellenistic and Romanization', 'c. 300 – 27 BC', 'Roman conquest; Etruscan cities allied and then absorbed; Roman citizenship (90–89); the language gives way to Latin']
  ] } },
  { img: 'etr-sarcofago-esposos', leg: 'Sarcophagus of the Spouses, terracotta from Caere, c. 520 BC, National Etruscan Museum of Villa Giulia, Rome.' },
  { h: 'Who were the Etruscans?' },
  'The Romans called them **Tusci** or **Etrusci**, the Greeks **Tyrrhenoi** (or *Tyrsenoi*), and they said **Rasna**. Their **language** is not Indo-European: it is related only to two others, **Raetic** (spoken in the Alps) and **Lemnian**, known from a 6th-century BC stele found on the Greek island of Lemnos; linguists call this group the “Tyrsenian family”. It is therefore an isolated language in the ancient Mediterranean world, which is why the origin of the Etruscans puzzled ancient authors.',
  'Herodotus (5th century BC) said the Etruscans came from **Lydia**, in Anatolia, led by a prince called Tyrrhenus after a famine. Dionysius of Halicarnassus (1st century BC) argued, on the contrary, that they were **autochthonous**, that is, always there. Modern archaeology mostly sides with Dionysius: Etruscan culture grows out of the local Villanovan culture without a break, and a major **ancient DNA** study (Posth and colleagues, *Science Advances*, 2021, with 82 individuals from central and southern Italy) showed that Iron Age Etruscans had the same genetic background as their Latin neighbours, with no sign of a recent migration from Anatolia. Why they kept a non-Indo-European language remains a mystery.',
  { h: 'Why they matter' },
  { lista: [
    '**The first urbanization of Italy:** planned cities with streets, drains and temples, centuries before Rome was a power.',
    '**Rome:** religious rites, insignia of power, temples, the triumph, the layout of cities and many Latin words passed through the Etruscans (the exact extent of each borrowing is sometimes debated).',
    '**Funerary art:** the tombs of Caere and Tarquinia, with their colourful frescoes, are among the best windows onto the life of an ancient people.',
    '**Metalwork and craft:** bronze-working, gold granulation jewellery and black *bucchero* ware are unmistakable hallmarks.',
    '**Language and writing:** about 13,000 inscriptions, but few long texts, and still no complete understanding, one of the great enigmas of Antiquity.',
    '**The role of women:** Etruscan women appear at banquets, in tombs and in inscriptions with a public place that shocked the Greeks.'
  ] },
  { img: 'etr-tumulo-leopardos', leg: 'Banquet in the Tomb of the Leopards, Tarquinia, c. 470 BC.' },
  { caixa: 'The Etruscans today', texto: 'The Etruscans remain a living cultural reference in Italy: **Tuscany** keeps the name of the *Tusci*, and Caere and Tarquinia, with their necropolises, have been on the **UNESCO** World Heritage list since **2004**. Etruscology keeps discovering: in 1964 the gold tablets of Pyrgi came to light and, in 1992, the *Tabula Cortonensis*. But we still have no book of Etruscan literature and no history written by an Etruscan: everything we know comes from tombs, objects, short inscriptions and Greek and Roman authors, who were not always impartial.' }
];

const linha = [
  'This timeline follows Etruscan history from the iron-age villages to absorption into Rome. For the 7th to 5th centuries BC, much of what we know about Rome comes from authors who wrote centuries later (Livy, Dionysius of Halicarnassus); “traditional” dates and names are therefore flagged.',
  { linha: [
    { d: 'c. 1100 – 900 BC', t: 'Proto-Villanovan', x: 'In the Late Bronze Age, communities of central and northern Italy cremate their dead and bury the ashes in urnfields. This is the local base from which Etruscan culture will emerge.' },
    { d: 'c. 900 BC', t: 'The Villanovan', x: 'The **Villanovan** culture appears, named after a find made in 1853 at Villanova, near Bologna. Ashes are kept in clay **biconical urns**, sometimes covered by a helmet; there are large villages on the plateaux of Veii, Tarquinia, Caere and Vulci, which will become the great Etruscan cities. Iron and bronze begin to be worked on a large scale.' },
  ] },
  { img: 'etr-villanoviano-urna', leg: 'Villanovan biconical urn, c. 9th–8th century BC, with a bowl-shaped lid.' },
  { linha: [
    { d: 'c. 775 – 740 BC', t: 'The Greeks arrive in Italy', x: 'Greek colonists from Euboea settle at **Pithekoussai** (the island of Ischia) and then at **Cumae**, on the Bay of Naples. Contacts with the Etruscans bring wine, vases, myths and, above all, **writing**: the Etruscan alphabet will derive from a variant of the Euboean Greek alphabet.' },
    { d: 'c. 700 BC', t: 'The first inscriptions', x: 'The first Etruscan inscriptions appear. An ivory writing tablet from **Marsiliana d’Albegna** (c. 700) carries the full alphabet, copied as a writing model. The language is attested from c. 700 BC to the 1st century AD.' },
  ] },
  { linha: [
    { d: 'c. 700 – 650 BC', t: 'The Orientalizing period and the princely tombs', x: 'Sudden wealth, coming from the metal trade, shows in tombs with gold, ivory, bronzes and objects from the East. The most famous is the **Regolini-Galassi tomb** (c. 650, Caere), discovered in **1836**, with a woman of high status and a great set of gold jewellery. At Palestrina (Praeneste), a Latin city very open to Etruscan influence, the Bernardini and Barberini tombs (c. 675 – 650) show the same wealth.' },
  ] },
  { img: 'etr-regolini-galassi', leg: 'Gold fibula from the Regolini-Galassi tomb, Caere, c. 650 BC, Vatican Museums.' },
  { linha: [
    { d: 'c. 650 – 600 BC', t: 'Hoplites and cities', x: 'The Etruscans adopt the **hoplite phalanx** (heavy infantry in close formation), in the Greek manner. City-states arise with streets, temples and walls; aristocracies, rich from iron and land, dominate. Etruscan, Greek and Phoenician merchants compete for the routes of the Tyrrhenian Sea.' },
    { d: 'c. 616 – 509 BC (tradition)', t: 'The Etruscan kings of Rome', x: 'According to Roman tradition, three of the seven kings of Rome had a link to Etruria: **Tarquinius Priscus** (616 – 579, son of a Greek émigré from Corinth, Demaratus, and husband of **Tanaquil**), **Servius Tullius** (578 – 535; at Vulci, the frescoes of the François Tomb show a hero “Macstrna”, whom the emperor Claudius identified with him) and **Tarquinius Superbus**, “the Proud” (535 – 509). Tradition credits them with the Cloaca Maxima, the Circus Maximus and the great temple of **Jupiter Capitolinus** (dedicated, according to tradition, in 509). What can be said is that the Rome of the 6th century BC was saturated with Etruscan influence; as for the names and dates, they are tradition, not secure history.' },
  ] },
  { img: 'etr-templo-capitolino-reconstrucao', leg: 'Conjectural reconstruction of a great Etruscan-style temple, like that of Jupiter Capitolinus in Rome, c. 500 BC. AI-generated illustration.' },
  { linha: [
    { d: 'c. 600 – 500 BC', t: 'Expansion and trade', x: '**Felsina** (Bologna), occupied since Villanovan times, becomes a great Etruscan city; Marzabotto and Spina are founded in the Po plain, and Capua is the Etruscan centre of Campania. Etruscan wine, in amphorae, reaches southern France and Sardinia, and the Etruscans import so much Attic pottery that a large part of what we know today came out of their tombs.' },
    { d: 'c. 540 – 535 BC', t: 'Battle of Alalia', x: 'A fleet from Caere and Carthage faces one of Phocaean colonists (Greeks from Anatolia) settled at Alalia, in Corsica. The Phocaeans win the fight but lose 40 of their 60 ships and abandon the island (a “Cadmean victory”). According to Herodotus, the Caerites killed the prisoners and were afterwards struck by misfortune, which led them to consult Delphi. The episode shows the Etruscan–Carthaginian alliance and the struggle for the Tyrrhenian Sea.' },
    { d: 'c. 520 – 500 BC', t: 'The peak', x: 'This is the golden age of Etruscan art: the **Sarcophagus of the Spouses** (c. 520), the painted tombs of Tarquinia (Tomb of the Augurs, of Hunting and Fishing), the terracotta statues of the Portonaccio sanctuary at Veii, attributed to the sculptor **Vulca**, among them the famous **Apollo of Veii**, and the sanctuary of **Pyrgi**, port of Caere, with the gold tablets dedicated by **Thefarie Velianas** (c. 500), in Etruscan and Phoenician.' },
  ] },
  { img: 'etr-apolo-veios', leg: 'Apollo of Veii, terracotta, c. 510–500 BC, from the Portonaccio sanctuary; National Etruscan Museum of Villa Giulia, Rome.' },
  { img: 'etr-tabuinhas-pirgos', leg: 'Gold tablet from Pyrgi with Etruscan inscription, c. 500 BC, National Etruscan Museum of Villa Giulia, Rome.' },
  { linha: [
    { d: '509 – c. 504 BC (tradition)', t: 'Porsenna and the end of the kings', x: 'According to tradition, Rome expels **Tarquinius Superbus** in 509 and founds the Republic. The king of Clusium, **Lars Porsenna**, tries to put the king back on the throne and besieges Rome (Roman tradition says he gave up, but some ancient authors, such as Tacitus, suggest the city was surrendered to him). Around 504, his son **Arruns** is defeated at **Aricia** by the Latins and the tyrant of Cumae, Aristodemus.' },
    { d: '474 BC', t: 'Naval battle of Cumae', x: 'The Etruscan fleet is shattered off Cumae by **Hieron I**, tyrant of Syracuse, who answers a request from the Cumaeans. It is a decisive blow to Etruscan sea power and the start of the retreat from Campania. Hieron dedicated at Olympia helmets taken from the Etruscans; one of them, with an inscription, is in the British Museum.' },
  ] },
  { img: 'etr-capacete-hieron', leg: 'Etruscan-type helmet dedicated at Olympia by Hieron of Syracuse after Cumae (474 BC), British Museum.' },
  { linha: [
    { d: '5th century BC', t: 'Painted tombs and crisis', x: 'At Tarquinia the most famous tombs are painted (**Tomb of the Leopards**, c. 470; **Tomb of the Triclinium**, c. 470): banquets, dances and music. But the cities of Etruria enter a phase of **rivalries** and loss of sea routes.' },
    { d: '396 BC (tradition)', t: 'Rome takes Veii', x: 'After a long war (tradition speaks of a ten-year siege, in the image of Troy), the Roman dictator **Camillus** conquers **Veii**, the Etruscan city closest to Rome, about 16 km away. Veii’s territory is annexed, which greatly enlarges Rome’s, and the population is sold or absorbed. The Romans carry off the statue of the goddess Uni (Juno), in a ceremony called *evocatio*. The story of the tunnel through which Camillus supposedly entered the city belongs to legend.' },
  ] },
  { img: 'etr-veios-cerco', leg: 'Conjectural reconstruction of the Roman siege of Veii, early 4th century BC. AI-generated illustration.' },
  { linha: [
    { d: 'c. 400 – 350 BC', t: 'The Gauls', x: 'Gallic peoples (the **Boii** and others) cross the Apennines, take the Po plain and extinguish the Etruscan cities there: **Marzabotto** is abandoned, **Felsina** becomes the Gaulish *Bononia*. Around 390 (the date is debated) the Gauls even sack Rome, and Etruria loses its richest northern world.' },
    { d: '384 BC', t: 'Sack of Pyrgi', x: 'Dionysius I, tyrant of Syracuse, attacks the Etruscan port of Pyrgi and plunders the sanctuary. It is another blow to the sea routes.' },
    { d: '358 – 351 BC', t: 'Rome against Tarquinia', x: 'War between Rome and **Tarquinia**; according to Livy, the Tarquinians then sacrificed 307 Roman prisoners, and the Romans retaliated. It ends in 351 with a forty-year truce. Caere is among the first cities to obtain a partial Roman citizenship.' },
    { d: '310 – 283 BC', t: 'Vadimo and Sentinum', x: 'In 310, near Lake **Vadimo**, the Romans defeat the Etruscans; in **295**, at Sentinum, a coalition of Samnites, Gauls, Umbrians and Etruscans is defeated; in 283, Lake Vadimo is once more the scene of an Etruscan and Gallic defeat.' },
    { d: '280 – 264 BC', t: 'Vulci and Volsinii', x: 'In **280**, the consul **Tiberius Coruncanius** triumphs over Vulci and Volsinii. In **264**, after a revolt of freed slaves, Rome takes **Volsinii** (Orvieto), sacks it (Pliny the Elder speaks of about 2,000 statues carried off) and moves the inhabitants to a new city by Lake Bolsena. The military conquest of Etruria is complete.' },
    { d: '205 BC', t: 'Allies of Rome', x: 'In the Second Punic War, the Etruscan cities are already allies of Rome. When **Scipio** prepares the expedition to Africa, according to Livy, Populonia supplies iron, Tarquinia sailcloth, and Arretium thousands of shields, helmets and weapons.' },
  ] },
  { linha: [
    { d: '2nd – 1st century BC', t: 'Hellenistic art and a fading language', x: 'Stone and terracotta urns are still made for aristocratic families, along with the **Piacenza Liver**, the bronze of the **Orator** (c. 100 BC) and long ritual texts such as the *Liber Linteus*. But Latin inscriptions multiply and the ruling class adopts Roman names and customs.' },
    { d: '90 – 89 BC', t: 'Roman citizenship', x: 'In the Social War, the Italian allies rebel for citizenship. The **Julian** (90) and **Plautia-Papiria** (89) laws grant it to the allies who had not revolted, among them Etruscans and Umbrians (the exact chronology is discussed); Etruria ceases to be a distinct political space. Latin gradually replaces Etruscan in public documents; Etruscan survives for a while in families and rites.' },
    { d: '82 – 79 BC', t: 'Sulla and the confiscations', x: 'In the civil war between Sulla and Marius, several Etruscan cities support Marius. After his victory, Sulla takes land from the defeated and settles veterans (at Arretium and Faesulae, for example); **Volterra** holds out under siege until 79. The Etruscan aristocracy loses wealth, and the landscape changes.' },
    { d: '44 BC', t: 'Spurinna and the Ides of March', x: 'The Etruscan haruspex **Spurinna** is said to have warned Julius Caesar of a danger that would last until the Ides of March (Suetonius). Roman tradition trusted, even at the end of the Republic, in the knowledge of the Etruscan diviners.' },
    { d: '41 – 40 BC', t: 'The Perusine War', x: 'Octavian besieges **Perusia** (Perugia), where Lucius Antonius held out, and the city is burned. It will be rebuilt as *Augusta Perusia*; the Etruscan **Porta Marzia**, with an inscription of Augustus, still stands.' },
    { d: '27 BC – c. 7 BC', t: 'Augustus and “Region VII”', x: 'Augustus reorganizes Italy into regions; Etruria becomes **Regio VII**. Romanization is complete, and the limit of this story is 27 BC, the year Octavian receives the title of Augustus.' },
    { d: '1st century AD', t: 'The language fades', x: 'The last Etruscan inscriptions date from the 1st century AD. The emperor **Claudius** (reigned 41 – 54) wrote in Greek a history of the Etruscans in twenty books, the *Tyrrhenika*, now lost. It was the last great effort to record a language that was dying out.' }
  ] },
  { h: 'Rediscovery' },
  'Interest in the Etruscans was reborn in the Renaissance: in 1553 the **Chimera** was found at Arezzo, and Grand Duke Cosimo I de’ Medici had it displayed as a trophy of his “Etruscan Tuscany”. In the 17th and 18th centuries, **Etruscheria** (the learned enthusiasm for the Etruscans) studied tombs and vases, often fancifully, and in 1727 founded the **Etruscan Academy** at Cortona. Scientific excavations began in the 19th century, with finds such as the Regolini-Galassi tomb (1836) and the François Tomb at Vulci (1857). In the 20th century, the Italian **Massimo Pallottino** founded modern Etruscology; in **1964**, the discovery of the Pyrgi tablets finally gave a bilingual Etruscan–Phoenician text.'
];

const mapa = [
  'The Etruscan map is that of a **league of cities**. Tradition, in Roman times, spoke of a **dodecapolis**, a league of twelve main cities, which met every year at the federal sanctuary of **Fanum Voltumnae**, near Volsinii (the exact location of the sanctuary is debated). The list of twelve varies according to the authors, but the most important cities are these. The names in brackets are the Etruscan ones, where known.',
  { tabela: { cab: ['City', 'Where (today)', 'When / who', 'Importance'], linhas: [
    ['Veii (Veia)', 'Near Rome, Latium', '9th c. – 396 BC', 'Closest to Rome; school of sculptors (Vulca); conquered by Camillus'],
    ['Cerveteri (Caere, Cisra)', 'Latium, near the sea', '8th c. – 1st c. BC', 'One of the richest cities; Banditaccia tombs; port of Pyrgi'],
    ['Tarquinia (Tarchna)', 'Latium, north', '8th – 4th c. BC', 'Mythical city, from which the Tarquins are said to have come; painted tombs'],
    ['Vulci (Velch)', 'Latium, north', '7th – 3rd c. BC', 'Bronzes and pottery; François Tomb; conquered in 280'],
    ['Volsinii (Velzna)', 'Orvieto, Umbria', '6th c. – 264 BC', 'Religious capital, near the Fanum Voltumnae; sacked in 264'],
    ['Clusium (Clevsin)', 'Chiusi, Tuscany', '7th c. – 1st c. BC', 'City of King Porsenna; urns and tombs'],
    ['Perusia (Pherse)', 'Perugia, Umbria', '6th c. – 40 BC', 'Fortified city, with the Porta Marzia and the Porta Augusta'],
    ['Volterra (Velathri)', 'Volterra, Tuscany', '7th c. – 79 BC', 'City of alabaster urns; Porta all’Arco'],
    ['Populonia (Pupluna)', 'Tuscan coast', '9th c. – 1st c. BC', 'Only Etruscan city on the coast, centre of smelting for Elban iron'],
    ['Vetulonia (Vatluna)', 'Tuscan coast', '8th – 6th c. BC', 'Princely tombs; linked to iron and copper'],
    ['Arezzo (Aritim)', 'Tuscany', '6th c. BC – 1st c. AD', 'Bronze Chimera; later, “Arretine” pottery'],
    ['Cortona (Curtun)', 'Tuscany', '7th c. – 1st c. BC', 'Tombs; *Tabula Cortonensis*; Etruscan Academy (1727)'],
    ['Marzabotto (Misa, name debated)', 'Near Bologna', 'c. 500 – 350 BC', 'City planned on a grid; abandoned after the Gauls'],
    ['Felsina (Bologna)', 'Emilia-Romagna', '6th – 4th c. BC', 'Etruscan centre in the Po plain, then Gaulish and Roman'],
    ['Spina', 'Po delta', '6th – 3rd c. BC', 'Adriatic port; trade with the Greeks'],
    ['Capua', 'Campania', '6th – 5th c. BC', 'Main Etruscan centre in the south']
  ] } },
  { img: 'etr-mapa-dodecapolis', leg: 'Map of the main cities of Etruria (the “dodecapolis”) and their territories.' },
  { h: 'Caere and the Banditaccia' },
  '**Caere** (modern Cerveteri, in Etruscan *Cisra*) was, in the 7th and 6th centuries BC, one of the richest cities of the western Mediterranean, thanks to the metal trade and the port of **Pyrgi**. Its necropolis, the **Banditaccia**, is a “city of the dead” of **tumuli** (mounds of earth over chambers cut in the tuff) lined up along streets, with tombs that reproduce the interiors of houses: beds, chairs, beamed ceilings, all in stone. It is a UNESCO site and one of the most impressive places in Etruria.',
  { img: 'etr-cerveteri-banditaccia', leg: 'Tumulus tombs of the Banditaccia necropolis, Cerveteri.' },
  { h: 'Tarquinia and the painted tombs' },
  '**Tarquinia** (*Tarchna*) has an enormous necropolis, **Monterozzi**, with about six thousand excavated tombs, of which about two hundred have wall paintings. They are one of the largest surviving bodies of ancient painting, and show banquets, hunts, dances, athletic games and scenes of the afterlife. The city also has the temple of the **Ara della Regina** (“Altar of the Queen”), from which come the **Winged Horses**, a terracotta plaque of the 4th century BC now in the Tarquinia museum.',
  { img: 'etr-tarquinia-cavalos-alados', leg: 'Terracotta winged horses from the temple of the Ara della Regina, Tarquinia, 4th century BC, National Museum of Tarquinia.' },
  { h: 'Veii, Vulci and Volterra' },
  '**Veii** lay a few kilometres from Rome, and the rivalry between the two explains the wars of the 5th century. In the Portonaccio sanctuary the terracotta Apollo was found. **Vulci** was a city of metalworkers and potters, whose tombs (such as the **François**) are among the richest. **Volterra** stands on a plateau 500 m high, with walls and a monumental **Porta all’Arco** (Etruscan in origin, 4th–3rd century BC, and heavily repaired since, with worn stone heads); its museum, the Guarnacci, has about six hundred funerary urns, many of them of alabaster.',
  { img: 'etr-volterra-porta-arco', leg: 'Porta all’Arco, Volterra, 4th–3rd century BC.' },
  { h: 'Marzabotto: a planned city' },
  '**Marzabotto**, beside the river Reno, was founded around 500 BC and has a **grid** layout (main and perpendicular streets, regular blocks, a water and drainage system), a plan the Greeks used and the Romans would later adopt. It was abandoned after the Gallic invasions, in the middle of the 4th century BC. Today it is an archaeological park.',
  { h: 'Populonia: the city of iron' },
  '**Populonia** (*Pupluna*) is the only Etruscan city built by the sea, on a promontory facing the island of Elba. Elban iron ore was smelted there, and the slag heaps, later reworked in modern times, even covered the necropolises. Iron was the great source of Etruscan wealth, and Populonia its gateway to the Tyrrhenian.',
  { img: 'etr-populonia', leg: 'Promontory of Populonia and the San Cerbone necropolis, Tuscany.' },
  { h: 'Routes and trade' },
  'The Etruscans were seafarers. Their ships, under oar and sail, sailed between the Tyrrhenian and the Adriatic, and the routes linked the ports of Etruria (Pyrgi, Gravisca, Populonia) to **Carthage**, **Sardinia**, **Corsica**, **Massalia (Marseille)**, southern France and **Greece**. They exported **iron**, **copper**, **bronze**, **wine** and **olive oil**; they imported Greek pottery, perfumes, ivory, gold, Baltic amber (by land routes across the Alps) and goods from Egypt and the East. The Greeks called them **pirates** (the *Homeric Hymn to Dionysus* tells how Tyrrhenian pirates were turned into dolphins), but the reputation has the tone of a rival; the activity was, first of all, trade.',
  { img: 'etr-rotas-comercio', leg: 'Simplified scheme of Etruscan trade routes in the western Mediterranean, 7th–5th centuries BC. AI-generated map.' },
  { img: 'etr-navio-etrusco', leg: 'Etruscan merchant ship, 6th century BC; conjectural reconstruction. AI-generated illustration.' }
];

const sociedade = [
  { h: '1. Political organization' },
  'Etruria was never a single kingdom: it was a set of independent **city-states**, each with its own territory, walls and rulers. In the earliest centuries power lay with **kings** (*lucumones*), supported by aristocracies of warriors and great landowners; later, most cities came to be governed by **annual magistrates** from aristocratic families (the title *zilath*, which can be translated as “senior magistrate”, appears in inscriptions). There are signs that powerful leaders could dominate a city, such as **Thefarie Velianas** of Caere (c. 500), whom the Phoenician text of the Pyrgi tablets calls “king over Caere”.',
  'The cities cooperated in the religious league, but rarely in a common policy, and that was a fatal weakness: the Romans could conquer them one by one. Each year the league met at the **Fanum Voltumnae**, for rites and games, and to decide, on grave occasions, on joint action.',
  { img: 'etr-tumulo-francois', leg: 'Wall-painting scene from the François Tomb, Vulci, 4th century BC: the warrior “Macstrna” frees a companion.' },
  { h: '2. Social classes' },
  { lista: [
    '**Aristocracy:** great families with a family name (gentilicium), land, mines and ships, who held power and left the richest tombs.',
    '**Priests and haruspices:** specialists in reading divine signs, highly respected, also in Rome.',
    '**Craftsmen, merchants and small landowners:** they worked metal, pottery, cloth and land, and grew rich on trade.',
    '**Dependent peasants and serfs:** they farmed the lands of the great; in some cities they were numerous, and revolts (like that of Volsinii, in 264) show social tensions.',
    '**Slaves:** mostly prisoners and purchases; little is known about their number.'
  ] },
  { h: 'The Etruscan woman' },
  'A particularity of the Etruscans that impressed Greek and Roman observers was the public place of **women**. Women had their own **personal name** (such as *Larthia* or *Ramtha*), and children could also be named after their mother, which is rare in the ancient world; they took part in **banquets**, reclining beside their husbands, attended shows and were portrayed as equals in tombs, of which the **Sarcophagus of the Spouses** is the famous example. The Greek historian Theopompus (4th century BC) wrote about them with shock and exaggeration, and his accusations of licentiousness must be read as hostile propaganda. This does not mean modern equality: political power remained in the hands of men.',
  { h: '3. Religion' },
  'Etruscan religion was deeply **ritual**: according to Livy, the Etruscans were “a people more devoted than any other to religious rites”. They believed that the gods communicated their will through signs (lightning, the flight of birds, the livers of animals), and that these had to be interpreted and the rites performed exactly. The body of rules was called the *Etrusca disciplina* and was recorded in sacred books (*libri haruspicini*, *fulgurales*, *rituales*), all lost.',
  { tabela: { cab: ['Etruscan deity', 'Greek/Roman equivalent', 'Role'], linhas: [
    ['Tinia', 'Zeus / Jupiter', 'King of the gods; lord of the thunderbolt'],
    ['Uni', 'Hera / Juno', 'Wife of Tinia; protector of cities and women'],
    ['Menrva', 'Athena / Minerva', 'Goddess of wisdom and war; with Tinia and Uni she formed the triad of the cities'],
    ['Aplu', 'Apollo', 'God of light and prophecy'],
    ['Turms', 'Hermes / Mercury', 'Messenger of the gods and guide of souls'],
    ['Fufluns', 'Dionysus / Bacchus', 'God of wine'],
    ['Turan', 'Aphrodite / Venus', 'Goddess of love'],
    ['Sethlans', 'Hephaestus / Vulcan', 'God of fire and the forge'],
    ['Laran', 'Ares / Mars', 'God of war'],
    ['Nethuns', 'Poseidon / Neptune', 'God of the sea and waters'],
    ['Aita and Phersipnai', 'Hades and Persephone', 'Lords of the world of the dead'],
    ['Charun and Vanth', '—', 'Figures of the afterlife who accompany the dead: the demon Charun, with a hammer, and the female figure Vanth']
  ] } },
  { img: 'etr-figado-piacenza', leg: 'Drawing of the bronze Liver of Piacenza, c. 100 BC, with names of deities engraved; the original is in the Civic Museum of Piacenza.' },
  { h: 'The haruspices and the liver' },
  'The **haruspex** examined the **liver of a sacrificed animal** (**hepatoscopy**) and read in its markings the will of the gods. The **Piacenza Liver**, a bronze model of a sheep’s liver divided into regions, each with the name of a god, perhaps served as a teaching manual. Legend said that the *disciplina* had been dictated to a ploughman of Tarquinia by **Tages**, a child-sage who rose from a furrow in the field, and, according to another tradition, by a nymph, **Vegoia**, who revealed the rules of boundaries. The Romans went on consulting Etruscan haruspices for centuries, and, according to Zosimus, even in AD 408 diviners from Etruria said they had driven Alaric away from Narni with lightning and offered to do the same at Rome.',
  { img: 'etr-aruspice-cena', leg: 'Etruscan haruspex examining a liver, c. 400 BC; conjectural reconstruction. AI-generated illustration.' },
  { h: 'The afterlife and the tombs' },
  'The Etruscans believed in life after death, gloomy or festive, and left in the tombs objects, food and **paintings** to accompany the dead. The tombs of the 6th and 5th centuries BC show cheerful banquets and games, and then, from the 4th century on, grimmer scenes, with the demons of the underworld. According to Roman authors, they had an idea of **cycles of time**: the Etruscan people were destined a limited number of “centuries” (ten), and the last would have begun in 44 BC, the year of Caesar’s death, according to one account (the interpretation is late and disputed).',
  { h: '4. Economy' },
  'The base was **agriculture** (cereals such as spelt, vines, olives, legumes, flax, livestock), **mining** and **metalworking**. The iron, copper and tin of Tuscany and Elba were worked at Populonia, Vetulonia and Vulci; bronze was worked on a large scale and exported, and **pottery**, **ivory** and **gold** completed the wealth. There were also systems of **land drainage**: the Etruscans dug a network of underground tunnels (*cuniculi*) to control water and dry out land, mainly in southern Etruria.',
  'Coinage came late: coins were minted in cities such as Populonia from the 5th–4th centuries BC, but for a long time trade was done by barter and metal bars.',
  { img: 'etr-cuniculos-esquema', leg: 'Scheme of a network of Etruscan drainage tunnels (cuniculi); conjectural interpretation. AI-generated diagram.' },
  { h: '5. Writing and language' },
  'The Etruscans wrote from **right to left**, in an alphabet derived from Euboean Greek. This alphabet later passed to Latin, which is why the letters we read descend, in part, from Etruscan ones. About **13,000 inscriptions** are known, almost all short (names on tombs, dedications). We can **read** Etruscan, because the letters are known, but only partly **understand** it: we know, for example, the numerals *thu, zal, ci, śa* (one to four) and many words of family and religion, but the grammar is unclear.',
  'Long texts are rare. The **Liber Linteus** (“linen book”), now in Zagreb, is a ritual calendar of about 1,200 legible words, written on linen strips that ended up, by a curious accident, wrapping an Egyptian mummy. The *Tabula Cortonensis* (found in 1992) has about 200 words and is apparently a contract about land. The Pyrgi tablets (c. 500) are a text in two languages with Phoenician, which helps greatly. No literary works survive, and Etruscan history written by Etruscans is lost.',
  { img: 'etr-liber-linteus', leg: 'Linen strips with Etruscan text (Liber Linteus), Archaeological Museum of Zagreb.' },
  { h: '6. House and family' },
  'The oldest houses were huts of wood and clay; later they became stone houses with **terracotta tile roofs** and a central space. At **Acquarossa**, near Viterbo, and at **Murlo** (Poggio Civitate), archaeologists excavated neighbourhoods and monumental buildings of the 7th and 6th centuries BC with terracotta decoration. The houses of the wealthy had an atrium and a courtyard, a model the Romans would take up (the **atrium** is sometimes called Etruscan; the link is plausible but debated). Aristocratic families used family names and kept the memory of their ancestors.',
  { img: 'etr-casa-etrusca', leg: 'Etruscan house of a well-off family, 6th century BC; conjectural reconstruction. AI-generated illustration.' },
  { h: '7. Food' },
  { lista: [
    '**Cereals:** bread, porridge and cakes of spelt, wheat and barley.',
    '**Wine:** produced in great quantity, drunk mixed with water and exported in amphorae; the Etruscans were famous for their banquets.',
    '**Olive oil and garden produce:** olives, legumes, fruit (figs, grapes), honey.',
    '**Meat and fish:** pork, mutton, game (boar, deer), poultry; fish and shellfish on the coast.',
    '**Cheese, eggs and milk:** livestock-keeping was important.',
    '**At table:** the wealthy ate reclining on **banqueting couches**, to the sound of music.'
  ] },
  { img: 'etr-tumulo-triclinio', leg: 'Banquet in the Tomb of the Triclinium, Tarquinia, c. 470 BC.' },
  { h: '8. Clothing' },
  'Men wore a short **tunic** and a semicircular cloak, the **tebenna**, regarded as the ancestor of the Roman **toga**. Women wore long tunics and cloaks, and elaborate hairstyles and **headdresses** (the *tutulus*, a conical hat). Shoes with upturned toes (**calcei repandi**) were typical. Etruscan gold **jewellery**, with the technique of **granulation** (tiny spheres of gold soldered on) and filigree, is among the finest of Antiquity.',
  { img: 'etr-ouro-granulado', leg: 'Etruscan gold breast plaque for a garment, with granulation, 7th–6th century BC (Walters Art Museum, Baltimore).' },
  { img: 'etr-familia-vestuario', leg: 'A couple and their children in Etruscan dress, c. 500 BC; conjectural reconstruction. AI-generated illustration.' },
  { h: '9. Music, dance and games' },
  'Music was everywhere: the **aulos** (double pipe) accompanied banquets, processions, games and even work (according to some Greek authors, slaves were even whipped to the sound of the pipe); the **lyre** and bronze wind instruments such as the trumpet were also used. Dances, **chariot** races and **boxing** matches appear in tomb paintings. The Romans received from the Etruscans **funeral games** and many spectacles, and Roman actors (*histriones*) bear a name of Etruscan origin; the direct link of gladiators with the Etruscans is debated, because many modern authors look for it rather in Campania.',
  { img: 'etr-tumulo-caca-pesca', leg: 'Painting from the Tomb of Hunting and Fishing, Tarquinia, c. 520 BC.' },
  { h: '10. Metalwork and the arts' },
  '**Bronze** was perhaps the greatest Etruscan art. They cast by the **lost-wax** technique statues, vessels, engraved **mirrors** (much prized, with scenes of myths), candelabra and weapons, and exported them all over the Mediterranean. *Bucchero*, a black, polished pottery with thin walls and elegant shapes, is the most typical ware (c. 675 – 500 BC). In sculpture, the Etruscans preferred **terracotta**, to decorate temples, and left portraits of the living and the dead of great realism.',
  { img: 'etr-espelho-bronze', leg: 'Etruscan bronze mirror engraved with a mythological scene, 4th century BC.' },
  { img: 'etr-bucchero', leg: 'Bucchero vessel in the shape of a rooster, Etruscan black pottery, 7th–6th century BC.' },
  { img: 'etr-oficina-bronze', leg: 'Etruscan bronze-casting workshop, 6th century BC; conjectural reconstruction. AI-generated illustration.' },
  { h: '11. Architecture and town planning' },
  'The Etruscans built with **wood, mudbrick and stone**. Their **temple**, which the Roman Vitruvius describes and which is called “Tuscan”, was a tall, broad building with a **podium** (platform), a stairway only at the front, a columned porch on the façade and three **cellae** (rooms) side by side, and a great roof with overhanging eaves decorated with coloured terracottas. The walls were of large blocks, and the arched gates are among the earliest in Italy (the **arch** was used by the Etruscans, though they did not invent it). Planned cities, like Marzabotto, oriented their streets by the cardinal points, for religious reasons, and the ritual of founding a city (tracing a furrow with a plough) was inherited by Rome.',
  { img: 'etr-templo-tuscanico', leg: 'Conjectural reconstruction of a Tuscan temple, 6th century BC. AI-generated illustration.' },
  { h: '12. Medicine and technology' },
  'The Etruscans had a reputation for knowledge of **medicine** and **thermal waters**, and gold dental prostheses are known, with teeth fixed to gold bands, from about the 7th century BC. In **technology**, hydraulics stands out (drainage, pipes and sewers, one of the legacies Rome took over, like the Cloaca Maxima, traditionally attributed to the Tarquins), along with iron metallurgy, navigation and road building.',
  { h: '13. War' },
  'The first Etruscan warriors fought in the Villanovan manner, with antennae swords and round shields; from the 7th century BC they adopted the **hoplite phalanx**, with helmet, cuirass, greaves, round shield and spear, and also used war **chariots**. They had a strong navy, of warships with rams, and helmets of “Etruscan” type (like that of Hieron) became famous. The Etruscans were good soldiers but poorly coordinated: the lack of a common command among the twelve cities and pressure on several fronts (Greeks, Carthaginians, Gauls and Romans) decided their fate.',
  { img: 'etr-batalha-hoplitas', leg: 'Etruscan hoplites in battle, 6th century BC; conjectural reconstruction. AI-generated illustration.' }
];

const personalidades = [
  'The Etruscans left mostly **names on tombs**; the “biographies” of kings and queens come from the Romans and Greeks, centuries later. The figures below are real or legendary, and this is stated.',
  { h: 'Tarquinius Priscus (tradition: reigned 616 – 579 BC)' },
  'Fifth king of Rome, according to tradition. The son of a Greek merchant from Corinth, **Demaratus**, who had settled at Tarquinia, he is said to have come to Rome with his wife Tanaquil and changed his name (from *Lucumo* to *Lucius Tarquinius*). Tradition credits him with the Cloaca Maxima, the Circus Maximus and the start of the temple of Jupiter Capitolinus. It is hard to separate the real king from the legendary one.',
  { h: 'Tanaquil' },
  'Wife of Tarquinius Priscus, presented by Livy as an Etruscan of great character and an expert in signs and prophecies. It was she, tradition says, who interpreted the omen of an eagle that took her husband’s cap and returned it, and who announced that Tarquinius would be king; later, she supported the rise of Servius Tullius. She is the figure the Romans used to illustrate the strength of Etruscan women, and she belongs as much to legend as to history.',
  { img: 'etr-tanaquil-cena', leg: 'Tarquinius and Tanaquil and the omen of the eagle, according to legend; imagined scene. AI-generated illustration.' },
  { h: 'Servius Tullius / Macstrna (tradition: 578 – 535 BC)' },
  'Sixth king of Rome. Roman historians made him the son of a slave woman; the emperor **Claudius**, in a speech of AD 48 engraved on a bronze tablet found at Lyon, said that he was, in the Etruscan tradition, **Macstrna**, a companion in adventures of an Etruscan noble, **Caile Vipinas**. The painting in the François Tomb at Vulci (4th century BC) shows a “Macstrna” freeing Caile Vipinas, which suggests that the identification is old. Roman tradition credits him with an army reform and a city wall, and we do not know how far these are facts.',
  { h: 'Tarquinius Superbus (tradition: 535 – 509 BC)' },
  'Last king of Rome, expelled in 509 BC according to tradition. His fall, attributed to his tyranny and to his son’s crime against Lucretia, is the legend of the founding of the Republic; what archaeology shows is that the Rome of his time was an important city, with great public works.',
  { h: 'Lars Porsenna of Clusium' },
  'Etruscan king of Clusium (late 6th century BC). Tradition says he besieged Rome to restore Tarquinius and that the young Mucius Scaevola, by burning his hand in the fire, so impressed him that he lifted the siege (legend). Pliny the Elder describes his fabulous labyrinth-tomb, with pyramids, which nobody has found (legend).',
  { h: 'Vulca of Veii' },
  'The most famous Etruscan sculptor and one of the few whose name tradition kept: according to Pliny the Elder, he was called to Rome to make the terracotta statue of **Jupiter** for the Capitoline temple. By similarity of style he is customarily credited with the group of statues from the Portonaccio sanctuary at Veii, including the **Apollo**, but the attribution is conjectural.',
  { h: 'Thefarie Velianas (c. 500 BC)' },
  'Ruler of Caere (Cerveteri), who had a sanctuary at Pyrgi dedicated to the goddess **Uni** (identified with the Phoenician **Astarte**), and the gold tablets that prove it, in Etruscan and Phoenician. He is one of the few Etruscans of whom we have a text in his own name, and it shows the collaboration between Caere and the Carthaginians.',
  { h: 'Aule Metele, the “Orator” (c. 100 BC)' },
  'An Etruscan of a well-off family, called *Aule Metele* in Etruscan (*Aulus Metellus* in Latin), known from the bronze statue that shows him in a toga with raised arm, in a speaker’s gesture, with an inscription in Etruscan. The statue, found in 1566 near Lake Trasimene, shows the final blend of Etruscan and Roman culture, and is in the Archaeological Museum of Florence.',
  { h: 'Spurinna' },
  'Etruscan haruspex of the time of Caesar. According to Suetonius, he warned Julius Caesar, in 44 BC, of a danger that would culminate on the Ides of March. The story reached us as an anecdote, but it illustrates the prestige of Etruscan diviners to the end of the Republic.',
  { h: 'Gaius Maecenas (c. 70 – 8 BC)' },
  'Friend and adviser of Augustus and **patron of poets** such as Horace and Virgil; his name became a synonym for “patron”. He came from a noble family of **Arezzo** (the *Cilnii*), who, according to Horace, descended from Etruscan kings. His name has become a common word in the West.',
  { h: 'Claudius (emperor, 10 BC – AD 54)' },
  'Roman emperor, interested in history and antiquities, he wrote in Greek the *Tyrrhenika*, a history of the Etruscans in twenty books, which is lost (Suetonius). It is thanks to his speech in the Senate that we know of the identification of Servius Tullius with Macstrna.',
  { h: 'Thomas Dempster (1579 – 1625)' },
  'Scottish scholar who wrote, for the Grand Duke of Tuscany, *De Etruria regali* (c. 1616 – 1619), published only in 1723 – 1724 and which launched the fashion of “Etruscheria”. His texts contain a lot of fantasy, but they brought interest in the Etruscans back.',
  { h: 'Massimo Pallottino (1909 – 1995)' },
  'Italian archaeologist, regarded as the founder of modern Etruscology. He argued that the Etruscans were a people formed in Italy itself, out of the Villanovan (the position that ancient DNA has come to support), and directed the excavation of **Pyrgi**, where, in 1964, the bilingual gold tablets were found.'
];

const legado = [
  { h: 'What they left us' },
  { lista: [
    '**The Latin alphabet:** the alphabet we read passed from the Greeks to the Etruscans and from them to the Romans.',
    '**Roman institutions and symbols:** according to ancient authors, the Etruscans passed to Rome the *fasces* (the bundle of rods of the lictors), the curule chair, the triumph and the toga; the origin of each is sometimes disputed, but the influence is widely accepted.',
    '**The art of reading signs:** Roman divination was largely inherited from the *Etrusca disciplina*.',
    '**Town planning and engineering:** planned cities, sewers, drainage and the architecture of the temple.',
    '**The Tuscan order:** the style of plain, unfluted column that the Renaissance called the “Tuscan order”, after Vitruvius.',
    '**Place names:** *Tuscany* comes from *Tusci*, the *Tyrrhenian* sea from *Tyrrhenoi*, and *Etruria* was kept in Italian cultural memory.'
  ] },
  { h: 'Art' },
  'Etruscan art is a mix of influences (from the East, Greece and Rome) and of its own style: the expressiveness of the figures, the taste for **portraiture**, movement and the link with the afterlife. Among the most famous works are the **Sarcophagus of the Spouses**, the **Chimera of Arezzo** (bronze of the 5th–4th century BC), the **Apollo of Veii**, the “**Evening Shadow**” (*Ombra della sera*, an elongated bronze from Volterra, 3rd century BC, reminiscent of Giacometti) and the bronze of the **Orator**. The celebrated **Capitoline Wolf**, symbol of Rome, was for a long time thought to be Etruscan, but its dating is now much debated (some studies suggest a medieval origin); only the twins were added in the Renaissance.',
  { img: 'etr-quimera-arezzo', leg: 'Chimera of Arezzo, bronze, c. 400 BC, National Archaeological Museum, Florence.' },
  { img: 'etr-arringatore', leg: 'Detail of the Etruscan inscription (Aule Metele) on the «Arringatore», bronze, c. 100 BC, National Archaeological Museum, Florence.' },
  { img: 'etr-sombra-da-tarde', leg: 'Votive bronze statuette, the “Evening Shadow” (Ombra della sera), Volterra, c. 3rd century BC, Guarnacci Museum.' },
  { h: 'Architecture' },
  'Almost everything they built to live in was of perishable materials, and so what remains are **tombs**, walls and foundations. The tombs of Caere and Tarquinia show house interiors in stone; the temples left bases and terracotta roofing. The shape of the Etruscan temple and of the arch influenced Roman architecture, and in the Renaissance architects revived the “Tuscan order”.',
  { h: 'Why did they disappear?' },
  'The Etruscans did not “disappear” suddenly: they were **absorbed**. Historians point to several reasons, which combine:',
  { lista: [
    '**Defeats at sea:** Alalia (c. 540) and Cumae (474) took from them control of the routes and of Campania.',
    '**Political division:** the cities never formed a state, and Rome beat them one by one.',
    '**Gallic invasions:** in the 4th century BC they destroyed the Etruscan cities of the north, the richest part.',
    '**Integration into Rome:** the Etruscan aristocracy was gradually co-opted, with Roman citizenship (90–89 BC) and mixed marriages, and the language yielded to Latin.',
    '**Genetics:** the 2021 study shows that the local population stayed in the region, and that the great upheaval came later, with the arrival of people from the eastern Mediterranean, in imperial times.'
  ] },
  'In other words, the people continued, but the **language** and the **political identity** dissolved into the Roman world.',
  { h: 'The rediscovery of the Etruscans' },
  'Etruscology was born with the Renaissance (the Chimera, 1553) and Etruscheria; it became scientific in the 19th and 20th centuries. An English writer, **D. H. Lawrence**, left in *Etruscan Places* (1932) a very personal visit to the tombs of Caere, Tarquinia, Vulci and Volterra, still famous today. Today, **archaeology**, **ancient DNA** and the analysis of inscriptions continue to change what we know.',
  { img: 'etr-museu-villa-giulia', leg: 'National Etruscan Museum of Villa Giulia, Rome.' },
  { caixa: 'Where to see the Etruscans', texto: 'In **Italy**: the **National Etruscan Museum of Villa Giulia**, in Rome (the best place to start); the **Gregorian Etruscan Museum**, in the Vatican; the **National Archaeological Museum of Florence** (the Chimera and the Orator); the **Guarnacci Museum**, in Volterra; the **National Museum of Tarquinia** (with the Winged Horses, and painted tombs that can be visited in the necropolis); and the necropolises of **Cerveteri** (Banditaccia) and **Tarquinia** (Monterozzi), both UNESCO World Heritage. Abroad: the **Louvre** and the **British Museum** have large collections, and the **Archaeological Museum of Zagreb** holds the *Liber Linteus*.' }
];

const quiz = [
  { p: 'What did the Etruscans call themselves?', op: ['Tusci', 'Rasna', 'Tyrrhenoi', 'Latini'], certa: 1, exp: 'Rasna (or Rasenna). Tusci was the Roman name and Tyrrhenoi the Greek one.' },
  { p: 'Which region of Italy corresponds in large part to ancient Etruria?', op: ['Tuscany', 'Sicily', 'Calabria', 'Lombardy'], certa: 0, exp: 'Tuscany keeps the name of the Tusci, together with northern Latium and part of Umbria.' },
  { p: 'Does the Etruscan language belong to the Indo-European family?', op: ['Yes, it is related to Latin', 'Yes, it is related to Greek', 'No, it is a non-Indo-European language', 'Nothing at all is known about it'], certa: 2, exp: 'It is an isolate, related only to Raetic and Lemnian (the Tyrsenian family).' },
  { p: 'According to Herodotus, where did the Etruscans come from?', op: ['From Carthage', 'From Egypt', 'From Gaul', 'From Lydia, in Anatolia'], certa: 3, exp: 'Herodotus says they came from Lydia; Dionysius of Halicarnassus argued they were autochthonous, which archaeology and ancient DNA support.' },
  { p: 'What did the 2021 ancient DNA study show about the origin of the Etruscans?', op: ['They came from Anatolia', 'They shared the genetic background of their Latin neighbours', 'They were of African origin', 'They were descended from Vikings'], certa: 1, exp: 'The study by Posth and colleagues (Science Advances, 2021) found no sign of a recent migration from Anatolia.' },
  { p: 'Which metal was the great source of Etruscan wealth, mined on Elba and in Tuscany?', op: ['Gold', 'Silver', 'Iron', 'Aluminium'], certa: 2, exp: 'Iron, smelted above all at Populonia, along with the copper, tin and lead of the Metal-Bearing Hills.' },
  { p: 'Which Etruscan city, less than 20 km from Rome, was conquered by Camillus in 396 BC (traditional date)?', op: ['Veii', 'Tarquinia', 'Clusium', 'Volterra'], certa: 0, exp: 'Veii, after a long war that tradition compares to the siege of Troy.' },
  { p: 'What are the “tumuli” of the Banditaccia, at Cerveteri?', op: ['Wooden temples', 'Theatres', 'Harbours', 'Mounds of earth over burial chambers cut in the tuff'], certa: 3, exp: 'They are tombs with chambers that reproduce house interiors, along the streets of a true “city of the dead”.' },
  { p: 'Who was the Etruscan sculptor of Veii whose name reached us through Pliny the Elder?', op: ['Phidias', 'Vulca', 'Polykleitos', 'Lysippos'], certa: 1, exp: 'Vulca, called to Rome to make the statue of Jupiter on the Capitol; the attribution of the Apollo of Veii is conjectural.' },
  { p: 'In which battle in 474 BC was the Etruscan fleet defeated by Hieron of Syracuse?', op: ['Salamis', 'Alalia', 'Cumae', 'Actium'], certa: 2, exp: 'The naval battle of Cumae marked the end of Etruscan sea power and the retreat from Campania.' },
  { p: 'What did a haruspex do?', op: ['Read the will of the gods, for example in the liver of sacrificed animals', 'Built temples', 'Commanded the fleet', 'Wrote the laws'], certa: 0, exp: 'Haruspicy, or hepatoscopy, was a central part of Etruscan religion and was adopted in Rome.' },
  { p: 'What particularity of the Etruscan woman shocked Greek authors?', op: ['She stayed shut up at home', 'She was always a priestess', 'She fought in battles', 'She took part in banquets beside her husband and had her own name'], certa: 3, exp: 'Unlike Greek women, she appears at banquets, in tombs and in inscriptions, with a name of her own.' },
  { p: 'Which Etruscan text, now in Zagreb, is a ritual calendar written on linen?', op: ['Tabula Cortonensis', 'Liber Linteus', 'Pyrgi tablets', 'Piacenza Liver'], certa: 1, exp: 'The Liber Linteus, of about 1,200 legible words, ended up wrapping an Egyptian mummy.' },
  { p: 'In 1964, which discovery at Pyrgi helped to decipher Etruscan?', op: ['A hoard of coins', 'An entire temple', 'Gold tablets with Etruscan and Phoenician text', 'A library of papyri'], certa: 2, exp: 'The Pyrgi tablets (c. 500 BC) are a bilingual Etruscan–Phoenician text.' },
  { p: 'Which Roman statesman, patron of Horace and Virgil, came from a noble family of Arezzo?', op: ['Maecenas', 'Cicero', 'Cato', 'Agrippa'], certa: 0, exp: 'Gaius Maecenas, of the Cilnii of Arezzo, gave his name to the word “maecenas” (patron of the arts).' }
];

export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };
