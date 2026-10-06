// FROM THE AEGEAN TO THE ARCHAIC AGE — full English content. Same structure and same image slots as the Portuguese version (dados.js).
// Middle chronology, c. 3000 – 480 BC. Bronze Age dates rest on archaeology and radiocarbon (and are debated); Archaic dates often rest on traditions the Greeks fixed centuries later and are marked «c.» or «according to tradition».

const visao = [
  { caixa: 'In brief', texto: [
    'This page tells the **first and longest chapter** of Greek history: about two thousand five hundred years, from the **Cycladic** islands and the palaces of **Crete** in the Bronze Age to the eve of the Persian Wars in 480 BC. It takes in two Bronze Age civilisations, the **Minoans** (Crete) and the **Mycenaeans** (mainland); the **collapse** of c. 1200 BC; a few centuries of impoverishment and reinvention (the so-called **Dark Age**); and finally the world of the **Archaic Age**, when the **poleis** took shape, the alphabet was created, the poems of **Homer** and **Hesiod** were composed, colonies were founded from Marseille to the Black Sea, **tyrants** appeared, and the political models of **Sparta** and **Athens** were born.',
    'It is a history with few documents and a great deal of legend. The Minoans wrote in a language we still cannot read; the Mycenaeans left only inventories; the poets of the Archaic Age sang of a heroic past in which memory and invention are mixed; and the Greeks themselves wrote the history of this period centuries later. This page therefore separates as far as possible **archaeology**, **contemporary texts** and **legendary tradition**.'
  ] },
  { img: 'gea-mapa-egeu-bronze', leg: 'Map of the Aegean in the Bronze Age, with Crete, the Cyclades and the main Mycenaean centres.' },
  { h: 'Where' },
  'The setting is the **Aegean Sea** and the lands around it: mainland Greece (Attica, Boeotia, the Peloponnese), the great island of **Crete** to the south, the circle of the **Cyclades** (Naxos, Paros, Melos, Thera and others), the island of **Euboea**, and the coast of present-day Turkey, **Ionia**. It is a world of mountains, small plains and a sea always in sight, where travelling by boat was easier than crossing the land. In the Archaic Age the space widens: Sicily and southern Italy, Libya, Egypt, southern France, the shores of the Black Sea.',
  { img: 'gea-idolo-ciclades', leg: 'Cycladic folded-arm figurine in marble, c. 2800–2300 BC. The Cyclades were the first great artistic centre of the Aegean.' },
  { h: 'When' },
  'The dates are approximate. The Bronze Age is dated by pottery, radiocarbon and synchronisms with Egypt and the Near East, and specialists dispute many of them; the Archaic Age is dated by a few inscriptions, victor lists and later traditions.',
  { tabela: { cab: ['Period', 'Approximate dates', 'What marks it'], linhas: [
    ['Early Bronze Age: Cyclades and pre-palatial Crete', 'c. 3200 – 1900 BC', 'Cycladic marble figurines; circular tombs on the Mesara plain; bronze metallurgy; first sea contacts'],
    ['Minoan: palace period', 'c. 1900 – 1450 BC', 'Palaces of Knossos, Phaistos, Malia and Zakros; Linear A; maritime trade; eruption of Thera (17th or 16th century BC)'],
    ['Mycenaean', 'c. 1600 – 1100 BC', 'Shaft graves; fortified palaces; Linear B (Greek); presence in Crete and trade across the Mediterranean'],
    ['Collapse and Dark Age', 'c. 1200 – 800 BC', 'Destruction of the palaces; loss of writing; iron; migrations to Ionia; Protogeometric and Geometric pottery'],
    ['Archaic Age', 'c. 800 – 480 BC', 'Alphabet, Homer, poleis, colonisation, hoplites, tyrants, Sparta and Athens; ends with the Persian invasion of 480 BC (by convention)']
  ] } },
  { img: 'gea-mapa-colonias', leg: 'Map of Greek and Phoenician colonies in the Mediterranean and the Black Sea, 8th–6th centuries BC.' },
  { h: 'How we know' },
  'For the Bronze Age we have mainly **ruins**, **objects** (pottery, gold, frescoes), **tombs** and the **clay tablets** of the Mycenaean palaces, in Linear B. For the Dark Age, almost only pottery and graves. For the Archaic Age there are already **inscriptions** (the earliest date from the mid-8th century BC), **poems** (Homer, Hesiod, Archilochus, Sappho), **coins** and a very rich archaeology of sanctuaries. The **Greek historians** (Herodotus, Thucydides, Aristotle in the *Constitution of Athens*, Plutarch) wrote centuries later, from the traditions that reached them, and must be read with caution.',
  { lista: [
    '**Linear A:** the script of the Minoans; the signs can be partly read aloud, but the language is unknown, and its meaning remains undeciphered.',
    '**Linear B:** the syllabic script of the Mycenaeans, deciphered in 1952 by **Michael Ventris**; it is the oldest known form of Greek, and was used only for accounting.',
    '**The Homeric poems:** not history, but they contain memories of different periods (Bronze Age, Dark Age, 8th century BC) mixed together.',
    '**Herodotus and Thucydides:** the first attempt to tell the past with method; Thucydides opens his work with a summary of early Greece, today called the «Archaeology».'
  ] },
  { img: 'gea-kouros-anavyssos', leg: 'Anavyssos Kouros, marble, c. 530 BC, a funerary monument. National Archaeological Museum, Athens.' },
  { h: 'Who the Greeks of this period were' },
  'The Minoans, it seems, called themselves something we do not know; the name «Minoan» is a modern invention. The Mycenaeans, by contrast, **spoke Greek**, as we have known since 1952. The Greeks of the Archaic Age spoke different dialects (Ionic, Attic, Doric, Aeolic, Arcado-Cypriot) and had no common state, but shared a language, the Olympian gods, the Panhellenic sanctuaries (**Olympia**, **Delphi**) and the distinction between Hellenes and *barbarians* (those who did not speak Greek). They were divided into **poleis**, each of which considered itself sovereign.',
  'The origin of the first Greek speakers, the role of the so-called «Dorians» and the relationship between Minoans and Mycenaeans are debated topics. A study of ancient DNA published in 2017 (Lazaridis and colleagues) suggests that Minoans and Mycenaeans had essentially the same genetic base, with the Mycenaeans showing a small extra component linked to the steppes; this is an important result but still under discussion, and genetics does not by itself say what language people spoke.',
  { h: 'Why they matter' },
  { lista: [
    '**The city-state:** the polis, with citizens and laws, was the political model the Greeks exported across the Mediterranean.',
    '**Written law and participation:** Draco, Solon and Cleisthenes take the first steps towards written law, rule by the people (*demokratia*) and equality before the law (*isonomia*).',
    '**The alphabet:** the script we use comes, through the Etruscans and Rome, from the Greek alphabet, created around 800–750 BC.',
    '**Epic and lyric:** the *Iliad*, the *Odyssey* and the poetry of Sappho and Archilochus are the origin of European literature.',
    '**Games and competition:** the Olympic Games and the other Panhellenic games were born in this period.',
    '**Words:** «tyrant», «ostracism», «cyclopean», «labyrinth», «odyssey» and «spartan» come from this history.'
  ] },
  { caixa: 'This page and Greece today', texto: 'The Minoan palaces of Crete (Knossos, Phaistos, Malia, Zakros, Zominthos and Kydonia) were inscribed on the UNESCO World Heritage List in 2025; Mycenae and Tiryns have been on it since 1999, Olympia since 1989 and Delphi since 1987. In Athens, the National Archaeological Museum holds the treasures of Mycenae and the Archaic statues, and the Heraklion Museum, in Crete, the Minoan frescoes and objects.' },
  { h: 'Where this page ends' },
  'This page closes around **480 BC**, when Xerxes’ Persian invasion puts the Greek cities to the test. The **Classical Age** (480–323 BC), with the Persian Wars, the Athens of Pericles and the Peloponnesian War, has its own page, as do Hellenism, philosophy, art, religion and warfare. The mother page, on Ancient Greece in general, summarises it all.'
];

const linha = [
  'The timeline runs from the Early Bronze Age to the eve of the Persian Wars. Bronze Age dates are approximate and debated; those of the 8th and 7th centuries BC are traditional; only from c. 600 BC are there relatively secure dates for events in Athens.',
  { linha: [
    { d: 'c. 3200 – 2000 BC', t: 'The Cyclades and pre-palatial Crete', x: 'On the **Cycladic** islands (Naxos, Paros, Amorgos, Keros) people make marble figurines of very simple lines, the so-called **Cycladic figurines**; in Crete, the communities of the **Mesara** plain bury their dead in circular communal tombs, and bronze metallurgy spreads through the Aegean. Boats link the islands to each other and to the coast of Asia Minor.' },
    { d: 'c. 1900 BC', t: 'The first Minoan palaces', x: 'In Crete the great buildings of **Knossos**, **Phaistos** and **Malia** appear: complexes of rooms, storerooms, workshops and shrines around a central court, where agricultural produce was stored and distributed. A system of hieroglyphic signs is in use and, from c. 1800 BC, the **Linear A** script. Around 1700 BC there are destructions (probably earthquakes), followed by rebuilding on an even larger scale.' }
  ] },
  { img: 'gea-festo-disco', leg: 'The Phaistos Disc, fired clay, c. 1700 BC (date debated): signs stamped in a spiral; still undeciphered. Heraklion Archaeological Museum.' },
  { linha: [
    { d: 'c. 1700 – 1450 BC', t: 'The Minoans at their height', x: 'The second palaces, richer, have frescoes, drainage and enormous storerooms. The Cretans export olive oil, wine, fine pottery (Kamares ware) and import copper, tin, ivory and stones. Trade links Crete to Egypt, the Levant and the islands. Later Greek authors spoke of a powerful king **Minos** who ruled the sea (the «thalassocracy» of Minos); archaeology confirms maritime power but not a political empire.' },
    { d: 'c. 1630 – 1500 BC', t: 'The eruption of Thera', x: 'The volcano on the island of **Thera** (Santorini) explodes and buries the Minoan town of **Akrotiri**, preserving it under ash. The date has been debated for decades: radiocarbon analyses point to the 17th or early 16th century BC, while pottery and comparisons with Egypt suggest c. 1550–1500 BC; the most recent calibrations bring the two closer, favouring the 16th century BC. There is no consensus on the effect of this eruption on Minoan civilisation.' }
  ] },
  { img: 'gea-akrotiri-fresco', leg: 'The «Fisherman» fresco from Akrotiri (Thera), preserved under the ash of the eruption, 17th–16th centuries BC.' },
  { linha: [
    { d: 'c. 1600 BC', t: 'The shaft graves of Mycenae', x: 'On the mainland, at **Mycenae** (Argolid), local chiefs are buried in deep pits with **gold masks**, swords, richly inlaid daggers and cups. This is the visible beginning of **Mycenaean** civilisation, with contacts with Crete and the Aegean and a great taste for gold and war.' }
  ] },
  { img: 'gea-circulo-a', leg: 'Grave Circle A at Mycenae, where shaft graves of c. 1600–1500 BC were found, later enclosed within the citadel.' },
  { linha: [
    { d: 'c. 1450 BC', t: 'The Mycenaeans in Crete', x: 'The Minoan palaces (except Knossos) are destroyed, almost all by fire; at **Knossos** a script adapted to Greek, **Linear B**, comes into use, and art and administration show influence from the mainland. Was there a Mycenaean conquest? The answer is debated; so is the precise date of the end of the palace of Knossos (between c. 1450 and c. 1350 BC in the various proposals).' },
    { d: 'c. 1400 – 1200 BC', t: 'The height of the Mycenaean kingdoms', x: '**Mycenae**, **Tiryns**, **Pylos**, **Thebes**, **Orchomenos** and other centres are ruled by a king (*wanax*) and a bureaucracy that records everything in Linear B. «Cyclopean» walls, beehive tombs (*tholoi*) and roads are built; the **Lion Gate** of Mycenae dates from c. 1250 BC. The Mycenaeans trade across the eastern Mediterranean; a ship wrecked off Uluburun (Turkey), c. 1320 BC, carried copper, tin, gold, ivory and vessels from many origins, including Mycenaean ones. Hittite texts speak of the **Ahhiyawa**, whom many historians link to the Mycenaeans.' }
  ] },
  { img: 'gea-linear-a', leg: 'Tablet in Linear A, from Hagia Triada (Crete), c. 1450 BC. Heraklion Archaeological Museum.' },
  { linha: [
    { d: 'c. 1200 – 1100 BC', t: 'The collapse', x: 'Within a few decades the Mycenaean palaces are destroyed or abandoned: **Pylos** burns (c. 1200–1180 BC), **Mycenae** and **Tiryns** are damaged, and with them Linear B disappears. Population falls, long-distance trade breaks down. At the same time, in the eastern Mediterranean, the **Hittite** empire falls, **Ugarit** is destroyed and Egypt of Ramesses III faces the so-called «Sea Peoples» (c. 1177 BC). The causes are much debated and probably combined.' },
    { d: 'c. 1180 BC', t: 'Troy and the memory of Homer', x: 'At Hisarlık, on the north-west coast of Turkey, the city that archaeologists call **Troy VIIa** is destroyed by fire and war, c. 1180 BC. It may have inspired, from afar, the tradition of the **Trojan War**; there is no proof of this, and what Homer describes (Achaean kings, great armies, gods) is a poetic elaboration of centuries.' }
  ] },
  { img: 'gea-colapso', leg: 'Imagined scene of the abandonment of a Mycenaean palace around 1200 BC, with smoke, families leaving and the palace in flames; AI-generated illustration, not a precise record.' },
  { linha: [
    { d: 'c. 1050 – 900 BC', t: 'Iron and migrations', x: '**Iron** replaces bronze, **Protogeometric** pottery (decorated with concentric circles and semicircles) marks the return of a certain order, and Greek-speaking populations cross the Aegean and found cities on the coast of Asia Minor (**Ionia**, Aeolis, Doris). In Greek tradition this was also the time of the «return of the Heraclids» and the «Dorian invasion» of the Peloponnese, an explanation that archaeology does not confirm as a single invasion.' },
    { d: 'c. 950 BC', t: 'The «hero» of Lefkandi', x: 'At **Lefkandi**, on the island of Euboea, a large building of about 10 by 45 m (the «Toumba»; the exact dimensions are debated) serves as the tomb of a man and a woman, with sacrificed horses and objects from Cyprus, Egypt and the Near East. It shows that even in the «Dark Age» there were rich chiefs and long-distance contacts. A centaur statuette from the same site is one of the oldest Greek terracotta sculptures.' }
  ] },
  { img: 'gea-centauro-lefkandi', leg: 'The «Centaur of Lefkandi», terracotta, c. 900 BC. Archaeological Museum of Eretria, Euboea.' },
  { linha: [
    { d: 'c. 800 – 740 BC', t: 'The Greek alphabet', x: 'The Greeks adapt the **Phoenician** alphabet, using some consonant signs that Greek does not need to represent **vowels**. It is the first alphabet with both consonants and vowels. The earliest inscriptions (c. 770–740 BC) are on vases and already speak of poetry and wine: the one on the «Dipylon vase» from Athens and the one on «Nestor’s cup» from Pithekoussai.' }
  ] },
  { img: 'gea-nestor-taca', leg: '«Nestor’s cup», from Pithekoussai (Ischia, Italy), c. 740–720 BC, with one of the oldest Greek alphabetic inscriptions. Pithecusae Archaeological Museum.' },
  { linha: [
    { d: '776 BC (tradition)', t: 'The Games at Olympia', x: 'According to tradition, fixed centuries later by the historian **Hippias of Elis**, the winner of the stadion race at the first Games at **Olympia** was a certain **Coroebus** of Elis, in 776 BC. Archaeologists find offerings at the sanctuary from the 10th century BC and evidence of major games from c. 700 BC.' },
    { d: 'c. 750 – 700 BC', t: 'Homer and Hesiod', x: 'The **Iliad** and the **Odyssey**, attributed to **Homer**, and the **Theogony** and **Works and Days** of **Hesiod**, are composed (and then written down). The «Homeric question» (whether there was one author, how they were composed, when they were written) remains open.' },
    { d: 'c. 770 – 700 BC', t: 'Colonisation begins', x: 'Euboeans found **Pithekoussai** (c. 770), on the island of Ischia, and **Cumae** (c. 750), in Italy; the Corinthians found **Syracuse** (c. 733) and the men of Chalcis found **Naxos** in Sicily (c. 734). In the same period Achaeans found Sybaris and Croton, and the Spartans found Taras (c. 706). Each colony is an independent polis.' }
  ] },
  { img: 'gea-colonia', leg: 'Imagined scene of Greek colonists arriving on a western Mediterranean shore in the 8th century BC, with the founder (*oikistes*) directing the landing; AI-generated illustration.' },
  { linha: [
    { d: 'c. 740 – 620 BC', t: 'Sparta and Messenia', x: 'According to tradition, the Spartans conquer neighbouring **Messenia** in two wars (the first at the end of the 8th century BC, the second in the middle of the 7th, linked to the poet **Tyrtaeus**) and reduce the Messenians to the status of **helots**. The exact chronology is uncertain; the result is secure: Sparta gains an enormous territory and a subjugated population.' },
    { d: 'c. 700 – 650 BC', t: 'Hoplites and triremes', x: 'Warfare comes to be fought by citizens armed with round shield, cuirass, helmet and spear, in **phalanx** formation. Whether the change was rapid («hoplite revolution») or gradual, over a century, is debated. In Corinth and Samos the first large warships are built, and perhaps the first **triremes**.' }
  ] },
  { img: 'gea-moeda-egina', leg: 'Silver stater of Aegina, with a turtle, 6th century BC. Coinage appears in Lydia c. 600 BC; Aegina was one of the first Greek cities to strike it.' },
  { linha: [
    { d: 'c. 657 – 627 BC', t: 'Cypselus takes power in Corinth', x: 'The first tyrant of whom we have a clear account, **Cypselus**, overthrows the aristocratic family of the **Bacchiads** and rules Corinth; his son **Periander** (c. 627–587) continues and brings the city to its height. Tyrants follow in Sicyon, Megara, Argos, Mytilene, Samos, Naxos, Athens and other cities.' },
    { d: 'c. 632 and 621 BC', t: 'Cylon and Draco in Athens', x: 'The nobleman **Cylon**, an Olympic victor, tries to seize power in Athens, c. 632 BC (the date is debated) and fails; his followers are killed in the temple, which leaves a curse on the Alcmaeonids. In 621 BC **Draco** drafts the city’s first written laws, mostly about homicide, so severe that they became a byword for harshness («draconian»).' },
    { d: 'c. 600 BC', t: 'Coinage and Massalia', x: 'In **Lydia** (Asia Minor) the first coins are struck, of electrum (an alloy of gold and silver); Greek cities such as Aegina copy them in silver. Sailors from **Phocaea** (Ionia) found **Massalia** (Marseille), c. 600 BC. According to Herodotus, a sailor from Samos, **Colaeus**, reaches the kingdom of **Tartessos**, in the south of the Iberian Peninsula, around the 7th century BC; the Phocaeans visit it later.' },
    { d: 'c. 594 BC', t: 'The reforms of Solon', x: 'Faced with a social crisis (indebted peasants reduced to servitude), the archon **Solon** cancels debts, bans enslavement for debt, divides citizens into four classes by income and creates a council of 400 and a popular court. Dates and details come from late sources and are debated.' },
    { d: 'c. 590 – 573 BC', t: 'Delphi and the Panhellenic Games', x: 'A «sacred war» (c. 590 BC) frees the sanctuary of Delphi from the control of the neighbouring city of Kirrha; in 582 BC the **Pythian Games** (Delphi) are reorganised and the **Isthmian Games** (Corinth) created, and in 573 BC the **Nemean Games**. With Olympia, they form the **Panhellenic circuit**.' }
  ] },
  { linha: [
    { d: 'c. 560 – 546 BC', t: 'Peisistratus and the Peloponnesian League', x: '**Peisistratus** takes power in Athens three times (c. 561/560, c. 556 and, for good, 546 BC) and governs with moderation and public works. In the Peloponnese, Sparta, after a war with Tegea, makes alliances with neighbouring cities (the future **Peloponnesian League**) and comes to prefer alliances to conquest.' },
    { d: '546 – 540 BC', t: 'Persia reaches Ionia', x: 'The Persian king **Cyrus** defeats **Croesus**, king of Lydia (c. 546 BC), and the Greek cities of Ionia come under Persian rule. The people of Phocaea prefer to leave rather than submit and found colonies in the West, including Alalia, in Corsica, where they fight an Etruscan and Carthaginian fleet (c. 540 BC).' }
  ] },
  { img: 'gea-tiranicidas', leg: 'The «Tyrannicides», Harmodius and Aristogeiton, Roman copy of the group by Kritios and Nesiotes (477/6 BC). National Archaeological Museum, Naples.' },
  { linha: [
    { d: '514 – 510 BC', t: 'The end of the tyranny in Athens', x: 'In 514 BC, **Harmodius** and **Aristogeiton** kill the tyrant **Hipparchus**, brother of Hippias, during the Great Panathenaea; **Hippias** rules four more years, ever more harshly, until he is expelled (510 BC), with the help of a Spartan force under King **Cleomenes I**. The Athenians later honoured the two as «liberators», although the real motive for the murder was, according to Thucydides, personal.' },
    { d: '508/7 BC', t: 'Cleisthenes and democracy', x: 'After a struggle with **Isagoras** (backed by Sparta), **Cleisthenes** reorganises Athens into ten tribes, made up of demes from three regions, and creates the Council of 500. The people gathered in assembly now have the final word. The Athenians called this *isonomia* (equality before the law); the word *demokratia* appears later.' },
    { d: '499 – 490 BC', t: 'The Ionian Revolt and Marathon', x: 'The Greek cities of Asia Minor revolt against the Persians (499–494 BC), with brief support from Athens and Eretria; the revolt is crushed at **Lade** (494). In 490 BC a Persian punitive expedition is defeated by the Athenians at **Marathon**. What follows (Thermopylae, Salamis, Plataea) belongs to the **Classical Age**.' }
  ] }
];

const mapa = [
  'The places of this period are of two kinds: the **Bronze Age palaces**, now ruins, and the **Archaic cities and sanctuaries**, some still standing. The table brings together the most important; the sections that follow tell in more detail those that best help to understand the history.',
  { tabela: { cab: ['Place', 'Region', 'Why it matters'], linhas: [
    ['Knossos', 'Crete (north)', 'Largest Minoan palace; later a Mycenaean centre with Linear B tablets'],
    ['Phaistos', 'Crete (south)', 'Second palace of Crete; findspot of the Phaistos Disc'],
    ['Malia and Zakros', 'Crete (north and east)', 'Minoan palaces; Zakros was a trading port with the East'],
    ['Akrotiri', 'Thera (Santorini)', 'Minoan town buried by a volcanic eruption; frescoes preserved'],
    ['Mycenae', 'Argolid (Peloponnese)', 'Citadel and Mycenaean capital; Lion Gate and royal tombs'],
    ['Tiryns', 'Argolid', 'Mycenaean fortress with Cyclopean walls'],
    ['Pylos', 'Messenia', 'Mycenaean palace with an archive of Linear B tablets, preserved by fire'],
    ['Troy (Hisarlık)', 'Turkish coast', 'City of many layers; linked by tradition to Homer’s war'],
    ['Lefkandi and Eretria', 'Euboea', 'Tomb of the «hero» (c. 950 BC); Chalcis and Eretria pioneered colonisation'],
    ['Athens', 'Attica', 'From the city of Peisistratus and Cleisthenes democracy is born'],
    ['Sparta', 'Laconia', 'Dorian polis with two kings; conquest of Messenia'],
    ['Corinth', 'Isthmus', 'Trading city, Cypselid tyrants, inventor of the trireme (according to Thucydides), mother of colonies'],
    ['Olympia', 'Elis (Peloponnese)', 'Sanctuary of Zeus; Olympic Games (tradition: 776 BC)'],
    ['Delphi', 'Phocis', 'Sanctuary and oracle of Apollo; consulted before founding colonies'],
    ['Miletus, Ephesus and Samos', 'Ionia (Asia Minor)', 'Cradle of the first philosophers; great temples; Samos of Polycrates'],
    ['Pithekoussai and Cumae', 'Ischia and Campania (Italy)', 'The first Greek colonies in the West'],
    ['Syracuse and Naxos', 'Sicily', 'Colonies of Corinth and of Chalcis (c. 733/734 BC)'],
    ['Sybaris, Croton and Taras', 'Southern Italy', 'Achaean and Spartan colonies; «Magna Graecia»'],
    ['Massalia (Marseille)', 'Southern France', 'Colony of Phocaea (c. 600 BC); gateway to the Celtic and Iberian West'],
    ['Cyrene', 'Libya', 'Colony of Thera (c. 631 BC), founded after consulting Delphi'],
    ['Naucratis', 'Nile Delta (Egypt)', 'Greek trading post, active around 620 BC'],
    ['Byzantium and Olbia', 'Bosphorus and Black Sea', 'Colonies of Megara (c. 667/660 BC) and of Miletus']
  ] } },
  { h: 'Knossos and the palaces of Crete' },
  '**Knossos**, near present-day Heraklion, was the largest Minoan palace: some 20,000 square metres of rooms, courts, corridors, storerooms with great oil jars and workshops, around a central court. It was excavated by the Englishman **Arthur Evans** from 1900, who called it the «Palace of Minos» and reconstructed it in part, with concrete and colours that are much debated today. The Minoans of Knossos wrote in Linear A and, from c. 1450 BC (a debated date; perhaps only c. 1350), the lords of the palace wrote in Linear B (Greek). The Greeks of the 5th century BC already linked the place to the **Labyrinth** of King Minos and the Minotaur, but that is legend.',
  { img: 'gea-cnossos-palacio', leg: 'Ruins of the palace of Knossos, Crete, with partial reconstructions made by Arthur Evans in the early 20th century.' },
  { img: 'gea-minoicos-porto', leg: 'Imagined scene of a Minoan harbour c. 1500 BC, with merchant ships loaded with jars of oil and wine and warehouses by the sea; details are hypothetical. AI-generated illustration.' },
  { img: 'gea-snake-goddess', leg: 'The «Snake Goddess», faience statuette from Knossos, c. 1600 BC; restored by Evans; whether she is a goddess or a priestess is debated. Heraklion Archaeological Museum.' },
  '**Phaistos**, in the south, has similar architecture and overlooks the Mesara plain; **Malia** and **Zakros** complete the group. The palaces had no walls, which led some authors to speak of a «peaceful» society; the idea is disputed today (there are weapons, minor fortifications and signs of violence). Archaeologists also debate whether they were palaces of kings, of priests or of a shared elite, since we do not know how the Minoans organised power.',
  { h: 'Akrotiri, the city of ashes' },
  'At **Akrotiri**, on the island of Thera, the Greek archaeologist **Spyridon Marinatos** began in 1967 to excavate a Minoan town buried by volcanic ash. Houses of two and three storeys, with drainage and frescoes of fishermen, blue monkeys and ships, are in several cases preserved to more than one storey. No bodies or valuables were found, which suggests the inhabitants had time to leave. Akrotiri is not Atlantis: the story of the lost continent comes from Plato, more than a thousand years later, and is linked to Thera only by modern speculation.',
  { h: 'Mycenae' },
  '**Mycenae**, about 90 km (in a straight line) south-west of Athens, rises on a hill between mountains. From c. 1350 BC the citadel was surrounded by walls of great limestone blocks («Cyclopean», because the Greeks thought only Cyclopes could have raised them); the **Lion Gate**, of c. 1250 BC, is the entrance. Inside stood the palace, with its main hall (the *megaron*), and **Grave Circle A**, where Schliemann found the shaft graves with gold in 1876; outside the walls are the great beehive tombs, such as the so-called «Treasury of Atreus» (c. 1250 BC). The names «Agamemnon» and «Atreus» come from legend: there is no proof that any king of that name lived there.',
  { img: 'gea-tesouro-atreu', leg: 'Interior of the beehive tomb (*tholos*) known as the «Treasury of Atreus», Mycenae, c. 1250 BC.' },
  { img: 'gea-micenas-cidadela', leg: 'Artistic reconstruction of the citadel of Mycenae c. 1250 BC, with the Lion Gate, the palace at the top and houses on the slope; details are hypothetical. AI-generated illustration.' },
  { h: 'Tiryns and Pylos' },
  '**Tiryns**, near Nauplia, is the best-preserved Mycenaean fortress: its walls of blocks weighing over a ton have covered galleries with corbelled vaults, which served as storerooms and shelters. **Pylos**, in Messenia, is the palace where the American archaeologist **Carl Blegen** found, from 1939, about a thousand tablets and fragments in Linear B, accidentally baked by the fire that destroyed the palace c. 1200–1180 BC. The palace was called «of Nestor», after the king of Pylos in the *Iliad*, but the link is only a convention.',
  { img: 'gea-tirinto-muralha', leg: 'Cyclopean wall of Tiryns, Argolid, with the corbel-vaulted gallery, c. 1300–1200 BC.' },
  { img: 'gea-pilos-palacio', leg: 'Ruins of the so-called «Palace of Nestor» at Pylos (Messenia), c. 1300–1200 BC.' },
  { h: 'Troy' },
  '**Troy**, on the mound of Hisarlık, near the Dardanelles, has at least nine layers of occupation. Excavated by Schliemann from 1870, by Carl Blegen in the 1930s and by Manfred Korfmann and others since 1988, it revealed a large fortified city, with **Troy VI** (c. 1700–1300 BC) the richest and **Troy VIIa** destroyed c. 1180 BC. Hittite texts mention a place called **Wilusa**, which many identify with Homer’s *Ilios*; the war described in the poems, however, cannot be confirmed.',
  { img: 'gea-troia-muralhas', leg: 'Walls of Troy (Hisarlık, Turkey), from the phase of Troy VI, c. 1300 BC or earlier.' },
  { h: 'Archaic Athens' },
  'The **Acropolis** of Athens was, in the Bronze Age, a fortified Mycenaean centre, and then, in the Archaic Age, the sanctuary of **Athena** and the seat of the city’s powers. Peisistratus and his sons raised a temple and fountains and organised the **Panathenaea**; the Persians destroyed everything in 480 BC, and after that came the Parthenon we know. Below lay the **Agora**, the public square, which becomes the centre of political life after Cleisthenes. Attica, with about 2,500 km², was a large territory for a polis.',
  { h: 'Sparta' },
  '**Sparta** was formed of four or five villages on the banks of the **Eurotas**, in the valley between the Taygetus and Parnon mountains, without walls. It dominated Laconia, where the **perioikoi** lived, and later Messenia, where the helots lived. The ancient city left few monuments: the sanctuary of **Artemis Orthia** and that of **Athena Chalkioikos** («of the Bronze House»), on the acropolis; the **Menelaion**, a shrine to the heroes Menelaus and Helen, on a nearby hill.',
  { h: 'Corinth' },
  '**Corinth**, on the isthmus that joins the Peloponnese to the rest of Greece, had two ports, Lechaion on the Corinthian Gulf and Kenchreai on the Saronic, and lived on trade and pottery (Corinthian pottery was the most exported of the 7th century BC). The family of the **Bacchiads** ruled it until Cypselus; it had a **Diolkos**, a ramp for dragging ships across the isthmus, traditionally attributed to the tyrant Periander (archaeology suggests c. 600 BC). It founded Syracuse and Corcyra, and its temple of Apollo (c. 540 BC) is one of the great Archaic Doric temples.',
  { h: 'Euboea' },
  'The island of **Euboea**, along the coast of Attica, was a pioneer. The cities of **Chalcis** and **Eretria** were the first to send colonists to the West (Pithekoussai, Cumae, Naxos and Rhegion) and to carry the alphabet to the West. According to tradition, the two fought, c. 700 BC, the **Lelantine War** over the Lelantine plain, in which other cities became involved; it is an obscure event, with uncertain dates.',
  { h: 'Ionia' },
  'On the western coast of Asia Minor the Greeks founded, in the Dark Age, a dozen cities, which formed a religious league around the sanctuary of the Panionion. **Miletus** gave the first philosophers (Thales, Anaximander, Anaximenes) and the historian Hecataeus, and founded dozens of colonies on the Black Sea; **Ephesus** had the great temple of Artemis (the first version is of the 6th century BC, financed by Croesus); **Samos**, under **Polycrates**, had the largest fleet in the Aegean, a great temple of Hera (the Heraion) and the tunnel of **Eupalinos**, c. 1,036 m long, dug from both ends to bring water to the city; **Phocaea** founded Massalia and Alalia. In 546 BC the cities fell, one by one, to the Persians.',
  { h: 'Olympia and Delphi' },
  'The two great Panhellenic sanctuaries were born in this period. **Olympia**, in the valley of the Alpheios, hosted the Games in honour of Zeus; in the early days the place was only an altar, a sacred grove (the *Altis*) and a dirt track, without the buildings we see today (the temple of Hera dates from c. 600 BC, but most date from the 5th century BC onwards). **Delphi**, on the slope of Mount Parnassus, received consultations of the oracle of **Apollo**, and cities built «treasuries» there (small buildings where offerings were kept); the treasury of the Siphnians (c. 525 BC), with its frieze, is one of the loveliest. Each city that consulted the oracle before founding a colony strengthened the sanctuary’s prestige.',
  { img: 'gea-olimpia-estadio', leg: 'The track of the stadium at Olympia, in its 4th-century BC form; in the 8th century BC the place was simpler, without stands.' },
  { h: 'The colonies of the West' },
  'From c. 770 BC the Greeks settled in southern Italy and Sicily, which the Romans called **Magna Graecia** («Great Greece»). The colonies were complete Greek cities: **Syracuse** (c. 733 BC) became the largest; **Sybaris** (c. 720) was famed for luxury; **Croton** (c. 710) produced the school of **Pythagoras** and famous athletes; **Taras** (c. 706) is the only Spartan colony; **Poseidonia** (Paestum), of c. 600 BC, preserves three great Doric temples, Archaic and Classical. Further west, **Massalia** (c. 600 BC) traded with the Gauls and **Emporion** (Empúries, c. 575 BC, in Catalonia) was founded by Phocaeans from Massalia. No Greek colonies are known in what is now Portuguese territory; the Atlantic coast was then visited by Phoenicians.',
  { img: 'gea-paestum-templo', leg: 'Temple of Hera I («Basilica»), Poseidonia (Paestum), southern Italy, c. 550 BC, in Archaic Doric style.' },
  { h: 'The Black Sea and Egypt' },
  'To the east, the cities of Ionia, above all **Miletus**, founded dozens of colonies on the Black Sea: **Sinope**, **Olbia**, **Trapezus**, and, earlier, **Byzantium** (c. 667/660 BC, founded by **Megara**), which controlled the Bosphorus. They supplied grain, salted fish, timber and slaves. To the south, **Cyrene**, in Libya (c. 631 BC), and **Naucratis**, in the Nile Delta, where the pharaoh Amasis (570–526 BC) concentrated Greek trade, linked the Greek world to the riches of Egypt. Greek mercenaries in the service of **Psamtik II** left graffiti on the legs of the colossus at Abu Simbel (c. 591 BC).',
  { h: 'The routes' },
  'The Greeks sailed mostly by day, from cape to cape, from April to October. Three routes dominated this period: that of the **Aegean and the Levant**, to Cyprus, Phoenicia and Egypt; that of the **West**, through the isthmus of Corinth and the gulf, to Italy and Sicily (Corinth and Corcyra controlled the way); and that of the **Black Sea**, through Byzantium. On land, the roads were unpaved cart tracks, and the pilgrim routes, such as the Sacred Way from Eleusis to Athens and the roads to Delphi and Olympia, united the cities.'
];

const sociedade = [
  { h: '1. Minoan society' },
  'Of the Minoans we know what the ruins, frescoes and objects show, and almost nothing of what they thought: their writing has not been deciphered. The **palaces** worked as centres of **storage and redistribution**: the countryside delivered grain, oil, wine and wool; the palace stored, paid out and recorded the goods on Linear A tablets. Around each palace there were towns with stone houses of several storeys, workshops and craftsmen’s quarters. Society seems to have been run by an elite tied to cult and administration; whether there was a king (Evans’s «priest-king») is debated.',
  '**Religion** seems to have centred on one or more **female deities** (of nature, animals, mountains), on shrines on mountain tops and in caves (such as the Idaean Cave), and on symbols such as the **double axe** (*labrys*), the «horns of consecration», the sacred tree and the snake. The frescoes show processions, dances and the famous **bull-leaping**, a ritual or sporting acrobatic feat: whether it was a rite, a sport or both, we do not know. What is said about human sacrifice at Anemospilia, near Knossos (c. 1700 BC), is disputed.',
  { h: '2. Mycenaean society' },
  'The Mycenaean kingdom, unlike the Minoan, is documented by **clay tablets in Linear B**, written by palace scribes with inventories: sheep, flax, oil, vessels, rations, weapons, chariots, labour. The texts show a hierarchical society. At the top, the king, the *wanax*; just below, the *lawagetas* (perhaps a military leader), the *hequetai* («followers»), and local officials called *basileus* (the word that later comes to mean «king»); then craftsmen, peasants (the *damos*, the local communities) and slaves (*doeroi*, men and women, many of them probably prisoners or foreigners). Women appear as weavers, grain-grinders and priestesses.',
  { img: 'gea-megaron-pilos', leg: 'Artistic reconstruction of the *megaron* (throne room) of the palace of Pylos, c. 1250 BC, with the central hearth, four columns and frescoes; details are hypothetical. AI-generated illustration.' },
  'The palaces were well defended. The Pylos tablets mention the **o-ka**, watchers or guard posts that patrolled the coast, and lists of rowers and war chariots; warriors used bronze swords, spears, figure-of-eight or tower shields, and **boar’s-tusk helmets**, like the one described in the *Iliad*. The **Dendra armour** (c. 1400 BC), of bronze plates, is one of the oldest in the world. The war chariot, drawn by two horses, had more symbolic than practical value.',
  { h: 'Mycenaean religion' },
  'The Linear B tablets show that some **Greek gods** were already worshipped in the 13th century BC, with names we recognise, which proves that Greek religion has roots in the Bronze Age. Others appear only later, or with another meaning.',
  { tabela: { cab: ['Name in Linear B', 'Reading', 'Notes'], linhas: [
    ['di-we', 'Zeus', 'Appears at Knossos and Pylos, but seems less important than later'],
    ['e-ra', 'Hera', 'Appears at Pylos; later the wife of Zeus'],
    ['po-se-da-o', 'Poseidon', 'Very important at Pylos, where there are great offerings; Poseidon may have been the chief god there'],
    ['a-ta-na po-ti-ni-ja', '«Lady Athena»', 'At Knossos; confirms a cult of Athena, but identification with the Classical goddess is debated'],
    ['e-ma-a2', 'Hermes', 'Attested, for example, at Pylos'],
    ['di-wo-nu-so', 'Dionysus', 'Appears on tablets from Pylos and Khania (Crete); contradicts the idea of a «newcomer» god'],
    ['pa-ja-wo', 'Paean (Paion)', 'Name of a healing god; later an epithet of Apollo; Apollo himself is not securely attested']
  ] } },
  { h: '3. The collapse of the Bronze Age' },
  'Around 1200 BC almost all the great powers of the eastern Mediterranean collapsed within a few decades: the **Hittite** empire, **Ugarit**, the cities of the Levant and, in Greece, the Mycenaean palaces. Historians propose several causes, which do not exclude one another:',
  { lista: [
    '**Invasions and «Sea Peoples»:** the Egyptians speak of groups of sea raiders who attacked Egypt, c. 1208 and c. 1177 BC; the real role of these groups in Greece is uncertain.',
    '**Earthquakes:** sequences of earthquakes (an «earthquake storm») destroyed several palaces between c. 1250 and 1200 BC; this explanation is debated.',
    '**Drought and climate change:** pollen and sediment analyses show a drier phase in the eastern Mediterranean c. 1200 BC.',
    '**Revolts and wars between kingdoms:** dependence on a highly centralised palace system made the kingdoms fragile; the palaces were the only centre of the bronze trade.',
    '**Breakdown of trade:** tin came from far away, and the rupture of trade networks may have dragged the palaces down.'
  ] },
  'Greek tradition spoke of a «Dorian invasion», with the **Heraclids** returning to the Peloponnese; archaeology finds no invasion of this kind, and current historians see in the Dorians the result of migrations and local changes. The word «Doric» still designates the dialect of Sparta, Corinth and Crete, and the architectural order.',
  { h: '4. The Dark Age' },
  'Between c. 1100 and c. 800 BC population fell, villages were small, there was no writing or great buildings, and the dead were buried with few objects. But the period was not only one of decline. **Iron**, more abundant than bronze, made weapons and tools cheaper; open-air **sanctuaries** appeared in places like Olympia, Delphi and Delos; and at **Lefkandi** rich families buried their chiefs with horses and gold. In the communities, a chief (*basileus*), surrounded by warriors and a council of elders, ruled with limited authority.',
  'It was in this period that the world described by **Homer** took shape: societies of aristocrats who treat each other as equals, exchange gifts and live for honour (*timé*) and fame (*kleos*). **Hospitality** (*xenia*) was a sacred institution, protected by Zeus, that linked families from different cities and gave a safety net to travellers.',
  { h: '5. Writing and the alphabet' },
  'The Greeks learned the **alphabet** from the **Phoenicians**, with whom they traded, probably in places where they met, such as Al Mina (Syria), Cyprus and Euboea. The Phoenicians wrote only consonants; the Greeks used Phoenician signs they did not need to represent vowels (*aleph* became *alpha*, *he* became *epsilon*...) and created the first script with signs for both consonants and vowels. The alphabet had a few dozen letters, and was easier to learn than cuneiform or Linear B.',
  'At first each region had its own variant: the alphabets of **Chalcis** (Euboea), **Corinth**, **Athens** and **Ionia** differed in some letters and sounds. The Euboean variant, taken to Italy, gave rise to the **Etruscan** alphabet and then to the **Latin**; Athens officially adopted the Ionic alphabet in 403/2 BC. Writing ran from right to left, or in *boustrophedon* («as the ox ploughs»: one line in one direction, the next in the other), and only later came to run left to right.',
  { cit: 'Nestor’s cup was good to drink from; but whoever drinks from this cup will at once be seized by desire for fair-crowned Aphrodite.', fonte: 'Inscription on the cup from Pithekoussai, c. 740–720 BC, one of the oldest Greek alphabetic inscriptions; free translation' },
  { h: '6. Homer, Hesiod and poetry' },
  'The **Iliad** covers 51 days of the tenth year of the Trojan War, the wrath of Achilles and the death of Hector; the **Odyssey** tells of Odysseus’ return, his perils and his vengeance in Ithaca. They are **oral** poems in origin: they used fixed formulas and epithets («swift-footed Achilles», «rosy-fingered Dawn») that helped the singer (the *aoidos*) to improvise in six-foot lines (the **hexameter**). The studies of **Milman Parry** and **Albert Lord** (20th century) examined oral singers in the former Yugoslavia and showed how oral composition by formulas works, which reinforced this idea. When and how the poems were put into writing is debated (generally between c. 750 and 650 BC). Homer’s language is an artificial Greek, a mixture of Ionic and Aeolic, with words from several periods.',
  { img: 'gea-aedo-homero', leg: 'Imagined scene of a bard singing to the accompaniment of a lyre (*phorminx*) in a hall of aristocrats, c. 750 BC; AI-generated illustration.' },
  '**Hesiod**, from Boeotia, composed the **Theogony** (the origin of the gods, from Chaos to Zeus) and **Works and Days** (a farmer’s advice to his brother Perses, with the myth of the five ages of mankind and an agricultural calendar). Unlike Homer, he speaks of himself and his world, and so is a source for the life of peasants. The Archaic Age also sees the rise of **lyric poetry** (sung to the lyre or flute, shorter, on love, wine, war and politics): **Archilochus** (c. 680–640 BC), **Tyrtaeus** (Sparta, 7th century), **Alcman**, **Sappho** and **Alcaeus** (Lesbos, c. 600), **Anacreon**, **Theognis** of Megara, and later **Simonides** and **Pindar**.',
  { cit: 'Some Saian exults in my shield, which I left, unwillingly, by a bush, a flawless piece of armour; but I saved my life. What do I care for that shield? To hell with it; I will get another, no worse.', fonte: 'Archilochus of Paros, fragment 5 (free prose translation); soldier and poet of the 7th century BC, one of the few to admit in verse that he fled from battle' },
  { h: '7. The polis' },
  'The **polis** emerged between the 9th and 7th centuries BC. In most cases it resulted from the joining (*synoikismos*) of villages around a fortified place, the **acropolis**, and a public space, the **agora**, where the community met. It included the town (*asty*) and the territory around it (*chora*), from which the citizens drew their living. It had its own laws, its own calendar, coinage (later), protecting gods and an army of citizens. Many regions, however, kept the form of the **ethnos** (a people gathered in villages, under common chiefs), such as Elis, Arcadia, Thessaly, Aetolia and Macedonia.',
  'According to the survey by the Copenhagen Polis Centre, there were about **a thousand poleis** in the Greek and colonial worlds in the Archaic and Classical periods. Most had a few thousand inhabitants and a territory of a few dozen square kilometres; Athens, Sparta and Syracuse were exceptions. Cities were at first governed by **aristocrats** (*aristoi*, «the best»), rich families who controlled land, horses and cults, and who ran the city through annual magistrates and a council. In time the poorer citizens demanded a role in politics, and laws came to be written down: the oldest known written law is from **Dreros**, in Crete (c. 650–600 BC).',
  { h: '8. Hoplites and war' },
  'Between c. 700 and 650 BC, citizens who could afford the equipment (the **hoplon**, a great round shield; helmet, cuirass, greaves, spear and sword) began to fight in **phalanx**, in close ranks. Tradition says this changed politics: the citizen-soldier, rather than the mounted aristocrat, became the defender of the city, and claimed rights. In reality the change was probably slower and some place it in the 7th or even the 6th century BC; the debate («hoplite revolution») continues. The **Chigi vase**, c. 640 BC, is one of the oldest images of a phalanx.',
  { img: 'gea-vaso-chigi', leg: 'The Chigi vase, Protocorinthian pottery, c. 640 BC, with one of the oldest images of hoplites in formation. National Etruscan Museum of Villa Giulia, Rome.' },
  { img: 'gea-hoplita-arcaico', leg: 'Illustration of an Archaic Greek hoplite, c. 650 BC, with Corinthian helmet, cuirass, greaves, round shield and spear; AI-generated reconstruction.' },
  'At sea, the Greeks first used **penteconters** (50 oars) and, from c. 700 BC, **triremes**, which Thucydides says were invented in Corinth. War between cities ranged from seasonal border conflicts, in which crops were destroyed, to great wars of conquest, like those in Messenia. Many Greeks also served as **mercenaries** outside the Greek world, in Egypt and Lydia.',
  { h: '9. Colonisation' },
  'Between c. 770 and c. 550 BC, hundreds of Greek cities sent colonists to other shores of the Mediterranean and the Black Sea. The causes vary: **lack of land** for a growing population, **political conflicts** (the defeated left), **trade** (access to metals, grain, timber) and, in some cases, a city’s wish to control routes. Each colony (*apoikia*, «home away from home») was an independent polis, with ties of affection and cult to the mother city (the **metropolis**). The expedition was led by a founder (**oikistes**), appointed by the metropolis, who chose the site, shared out the land and was afterwards honoured as a hero. The oracle of **Delphi** was often consulted.',
  { tabela: { cab: ['Colony', 'Traditional date', 'Founders'], linhas: [
    ['Pithekoussai (Ischia)', 'c. 770 BC', 'Euboeans from Chalcis and Eretria'],
    ['Cumae (Campania)', 'c. 750 BC', 'Euboeans from Pithekoussai and Chalcis'],
    ['Naxos (Sicily)', 'c. 734 BC', 'Colonists from Chalcis'],
    ['Syracuse (Sicily)', 'c. 733 BC', 'Colonists from Corinth, under Archias'],
    ['Sybaris and Croton (Italy)', 'c. 720 and c. 710 BC', 'Achaeans from the Peloponnese'],
    ['Taras (Italy)', 'c. 706 BC', 'The *Partheniai* of Sparta'],
    ['Byzantium (Bosphorus)', 'c. 667/660 BC', 'Megara'],
    ['Cyrene (Libya)', 'c. 631 BC', 'Colonists from Thera, under Battus'],
    ['Naucratis (Egypt)', 'c. 620 BC', 'Several cities of Ionia, Doris and Aeolis'],
    ['Massalia (France)', 'c. 600 BC', 'Phocaeans from Ionia'],
    ['Emporion (Spain)', 'c. 575 BC', 'Phocaeans from Massalia']
  ] } },
  'The colonists met local peoples, with whom they traded, fought or mixed: Sicels, Etruscans, Scythians, Thracians, Egyptians. In many colonies the first generations married local women. The Greek world ceased to be only that of the Aegean: Herodotus writes that **Colaeus** of Samos was driven by a storm to **Tartessos**, in the south of the Iberian Peninsula, and returned rich; and the Phocaeans made friends with the local king, Arganthonios. The Greek presence in Iberia was nevertheless small and restricted to the Mediterranean coast.',
  { h: '10. Archaic Sparta' },
  'Sparta was, until the mid-6th century BC, a city like the others: rich in poetry (**Tyrtaeus**, **Alcman**), pottery and fine bronzes. Its change was due to the conquest of **Messenia**. To control a population of **helots** much larger than the citizens, the Spartans organised a society of soldiers: tradition attributes the organisation to **Lycurgus**, a probably legendary lawgiver, who supposedly brought from Delphi a «Great Rhetra» (a fundamental law). What we know with more certainty is the following:',
  { lista: [
    '**Dyarchy:** two kings, of the Agiad and Eurypontid families, commanded the army.',
    '**Gerousia:** a council of 28 elders over 60, elected by acclamation, together with the two kings.',
    '**Ephors:** five annual magistrates, with great power to supervise the kings; according to tradition instituted in the 8th century BC, and powerful from the mid-6th century BC, with the ephor Chilon.',
    '**Apella:** assembly of all full citizens, which approved or rejected proposals by acclamation.',
    '**Homoioi** («equals»): full citizens who went through the **agoge** and paid their share of the **common meals** (*syssitia*); those who did not pay lost citizenship.',
    '**Perioikoi** («dwellers around»): free men without political rights, who did trade and crafts in Laconia.',
    '**Helots:** a servile rural population of Laconian and Messenian origin, who worked the land for the Spartans; once a year the ephors declared war on them, so that killing them would not be sacrilege; the *krypteia*, a kind of hunt of helots, is of debated nature.'
  ] },
  { img: 'gea-agoge-esparta', leg: 'Imagined scene of Spartan boys training in the *agoge*, beside the river Eurotas, c. 500 BC; AI-generated reconstruction.' },
  'The **agoge**, the education system, began at seven: boys lived in groups, learned to read, sing, dance and above all to obey, to endure hunger and pain, and to fight. Spartan **women** exercised physically, could inherit and manage property, and, because they lived without their husbands, often ran the estates. In foreign policy, Sparta for a long time avoided long expeditions, for fear of a helot revolt, and preferred alliances to conquest. Around 550 BC, after failing against Tegea, it formed with its neighbours the **Peloponnesian League**, an alliance led by Sparta.',
  { h: '11. Archaic Athens' },
  'Athens began as a kingdom which, according to tradition, was unified by the hero **Theseus**. In the Archaic Age Attica (about 2,500 km²) formed a single polis, governed by aristocrats, the **Eupatridae** («well-born»), through nine annually elected **archons** and the council of the **Areopagus**, made up of former archons. Peasants lived under pressure: many owed part of the harvest to nobles (the *hektemoroi*, «sixth-parters») and could be sold into slavery for debt. Tensions ran high when **Draco** wrote the laws (621 BC) and **Solon** was called on to reform (c. 594 BC).',
  { img: 'gea-solon-agora', leg: 'Imagined scene of Solon, in Athens, c. 594 BC, explaining his measures to peasants and aristocrats in the agora; AI-generated illustration.' },
  { tabela: { cab: ['Solon’s class', 'Criterion (c. 594 BC)', 'Access and duties'], linhas: [
    ['*Pentakosiomedimnoi*', '500 measures of farm produce a year or more', 'Highest offices (archons, treasurers); command cavalry and ships'],
    ['*Hippeis* («horsemen»)', '300 to 500 measures', 'Offices; served in the cavalry'],
    ['*Zeugitai*', '200 to 300 measures', 'Lesser offices; served as hoplites'],
    ['*Thetes*', 'Fewer than 200 measures', 'Could vote in the assembly and the courts; held no offices; served as light troops and, later, in the navy']
  ] } },
  'Solon’s reforms, according to Aristotle and Plutarch (who write centuries later), were: the **seisachtheia** («shaking off of burdens»), which cancelled debts and freed peasants; the ban on enslaving Athenians for debt and the return of those who had been sold; the division into **four classes** by income; the creation of a **council of 400** (a hundred per tribe); and the opening of a **people’s court** (the *Heliaia*) to which any citizen could appeal. He did not resolve all conflicts: the city split into three factions (of the coast, the plain and the hills) until Peisistratus seized power.',
  { h: 'The Peisistratids' },
  '**Peisistratus**, a popular noble and victorious general, took power with the help of the hill peasants. According to Herodotus, on one of the first occasions he entered Athens in a chariot with a tall woman in armour, dressed as **Athena**, and the city believed the goddess was bringing him back. After two exiles he returned in 546 BC and remained until his death in 528/7 BC. He governed the city with Solon’s laws in force, but with his relatives in office; he gave loans to peasants, built fountains, roads and temples, gave more splendour to the **Panathenaea** and the festivals of **Dionysus**, and tradition says he had Homer’s poems fixed in writing (the idea is debated). Athens began to strike coins and to export pottery.',
  { img: 'gea-pisistrato-panateneias', leg: 'Imagined scene of a Panathenaic procession in the Athens of Peisistratus, c. 530 BC, with the Acropolis and the Archaic temple of Athena in the background; details are hypothetical. AI-generated illustration.' },
  'His sons, **Hippias** and **Hipparchus**, continued. In 514 BC, after a personal insult, **Harmodius** and **Aristogeiton** killed Hipparchus, and Hippias came to rule with cruelty, until he was expelled in 510 BC with Spartan help. A struggle then followed between **Isagoras** (an aristocrat, ally of Sparta) and **Cleisthenes** (of the Alcmaeonids), who appealed to the people.',
  { h: 'The reform of Cleisthenes' },
  { lista: [
    'He divided Attica into three regions (city, coast and interior) and about **140 demes** (villages and neighbourhoods), which became the basis of citizenship: each citizen came to be identified by his deme, not his family.',
    'He grouped the demes into **trittyes** (thirds) and formed **ten tribes**, each tribe with a third from the city, the coast and the interior, so as to mix local interests and weaken the old aristocratic networks.',
    'He created the **Council of 500** (*Boule*), with fifty members from each tribe, which prepared business for the **Assembly** (*Ekklesia*).',
    'He gave the Assembly the final decision: thus was born **isonomia**, equality before the law, the basis of Athenian democracy in the 5th century BC.',
    '**Ostracism** is attributed to Cleisthenes by Aristotle, but was first used only c. 487 BC. The attribution is debated.'
  ] },
  { h: '12. The tyrants' },
  'In many cities of the 7th and 6th centuries BC a man seized power irregularly and ruled without being king: the **tyrant** (a word of foreign origin, perhaps Lydian). They were not necessarily cruel; the term acquired the sense of «oppressor» only later, with the philosophers and democracy. Most were ambitious nobles who relied on indebted peasants, hoplites or craftsmen against the elite. Many carried out public works and promoted trade, the arts and cults, and achieved social peace; but the dynasty seldom lasted more than two generations.',
  { tabela: { cab: ['Tyrant', 'City', 'Approximate dates'], linhas: [
    ['Cypselus and Periander', 'Corinth', 'c. 657 – 587 BC'],
    ['Orthagoras and descendants', 'Sicyon', '7th–6th centuries BC (about a century)'],
    ['Theagenes', 'Megara', '7th century BC'],
    ['Pheidon', 'Argos', '7th century BC (dates much debated)'],
    ['Pittacus (an elected «aesymnetes»)', 'Mytilene', 'c. 590 – 580 BC'],
    ['Peisistratus and his sons', 'Athens', '561/0, 556, 546 – 510 BC'],
    ['Polycrates', 'Samos', 'c. 538 – 522 BC'],
    ['Phalaris', 'Acragas (Sicily)', 'c. 570 – 555 BC']
  ] } },
  { h: '13. Religion' },
  'Archaic religion was **polytheistic**, ritual and tied to the city. The gods, described by Homer and Hesiod, had human form and were immortal, powerful and capricious. Hesiod’s **Theogony** presents their origin: from Chaos came Gaia (Earth), who bore Uranus (Sky) and, with him, the Titans; **Zeus** defeated his father, Cronus, and established order. Worship took place at the **altar**, in the open air, in front of the temple, with animal **sacrifices** whose meat was eaten in a communal feast, and wine **libations**. There was no priestly caste: magistrates and aristocratic families held the priesthoods.',
  'The cult of **heroes** (famous dead, venerated at their tombs, such as those at Mycenae) was important, and from the 8th century BC there are offerings at Bronze Age tombs. **Oracles**, that of **Delphi** especially, gave answers to cities and individuals. At **Eleusis**, near Athens, the **mysteries** of Demeter and Persephone promised initiates a better lot after death; the *Homeric Hymn to Demeter* (c. 600 BC) tells the myth. From the 6th century BC, movements such as **Orphism** and **Pythagoreanism** proposed the idea of an immortal soul that is reborn.',
  { h: '14. The Panhellenic Games' },
  'Olympia, Delphi, the Isthmus and Nemea brought together, each in regular cycles, athletes and spectators from the whole Greek world, and gave the Greeks a consciousness of common identity. There was a **sacred truce** to travel in safety. Victors received only a wreath, but returned to their city as heroes, with the right to statues and free meals.',
  { tabela: { cab: ['Games', 'Place and god', 'Start (tradition)', 'Frequency', 'Prize'], linhas: [
    ['Olympic', 'Olympia, Zeus', '776 BC', 'Every four years', 'Wild olive wreath'],
    ['Pythian', 'Delphi, Apollo', '582 BC (reorganisation)', 'Every four years', 'Laurel wreath'],
    ['Isthmian', 'Isthmus of Corinth, Poseidon', '582 BC', 'Every two years', 'Pine wreath (sometimes celery)'],
    ['Nemean', 'Nemea, Zeus', '573 BC', 'Every two years', 'Wild celery wreath']
  ] } },
  { img: 'gea-olimpia-776', leg: 'Imagined scene of the Games at Olympia in their early days, c. 700 BC, with the race on beaten earth, the altar of Zeus and spectators standing; details are hypothetical. AI-generated illustration.' },
  'In the Olympic Games of the first centuries there was only one event, the **stadion** race (c. 192 m). According to tradition the **diaulos** (twice the stadion) was introduced in 724 BC, the **dolichos** (endurance race) in 720, the **pentathlon** and **wrestling** in 708, **boxing** in 688, **chariot** racing in 680 and the **pankration** in 648 BC. Athletes competed naked, a novelty that tradition attributes to the 8th century BC and that the Greeks considered typically theirs; married women could not attend.',
  { h: '15. Economy and coinage' },
  'The base was **agriculture**: grain (barley, wheat), **vines** and **olives**, on poor soil. Hesiod describes the life of a small landowner: ploughing, sowing, reaping, harvesting grapes, and avoiding sailing out of season. Population rose greatly between 800 and 700 BC, creating the pressure that led to colonisation. Cities exchanged wine, oil, pottery and metals for grain, timber and slaves. Corinthian pottery dominated the markets in the 7th century BC, and Athenian in the 6th.',
  '**Coinage** was invented in the kingdom of **Lydia** (Asia Minor) around 600 BC, in electrum, and Croesus had gold and silver coins struck. Aegina, Corinth and Athens began striking silver in the 6th century BC; the Athenian «**owl**» appeared at the end of the 6th century BC. Coinage made taxes, wages and trade easier, but exchange often continued without it. «Chattel» slavery (bought and sold) increased in the Archaic Age, according to tradition starting from Chios.',
  { h: '16. Daily life' },
  'The basic unit was the **house** (*oikos*): the family, the slaves and the property. Dark Age houses were oval or apsidal, of mud brick and thatch; those of the Archaic Age became rectangular, with an inner courtyard. Peasants lived in villages and went to the fields every day. The staple food was **bread or barley porridge**, with olives, cheese, figs and vegetables; meat was eaten only at festivals and sacrifices. **Wine** was drunk mixed with water.',
  'Clothing was simple. Women wore the **peplos**, of wool, fastened at the shoulders with fibulae (pins), or the Ionic **chiton**, of linen, finer. Men wore the **chiton** and, over it, the **himation**. The **symposium** (the banquet for men only, after dinner, with wine, music and poetry) became the great arena of aristocratic sociability, and much lyric poetry was composed for it. Education was given at home and, for boys, in the gymnasium and the palaestra, with music, gymnastics and poetry (Homer and Hesiod).',
  { h: '17. Women, slaves and foreigners' },
  { lista: [
    '**Women:** had no political rights, were represented by a guardian (*kyrios*) and their lives were spent mostly at home; but they ran the household, wove, and could be priestesses of great prestige. Sappho, of Lesbos, headed a circle of women and left poetry about love and longing; Spartan women had more freedom.',
    '**Slaves:** some were prisoners of war, others bought from traders (many came from the Black Sea and Thrace), and worked in houses, fields and mines. The helots were a category apart.',
    '**Foreigners:** those who did not belong to the polis had no political rights; in Athens the category of **metic** (resident foreigner) becomes clear only in the 5th century BC.'
  ] },
  { h: '18. Art and architecture' },
  'Greek art of this period passes through four phases: the **Geometric style** (c. 900–700 BC), in which vases are covered with bands of lozenges, meanders and stylised figures (the great funerary vases of Athens, from the Dipylon cemetery); the **Orientalising** (c. 720–600 BC), in which motifs from Egypt and the Near East (lions, sphinxes, lotus flowers) arrive through trade; the **Archaic black-figure style** (from Corinth and then Athens, c. 700–500 BC) and, from c. 530 BC, the **red-figure** style, invented in Athens.',
  { img: 'gea-francois-vaso', leg: 'The François Vase, Attic black-figure krater, c. 570 BC, signed by the painter Kleitias and the potter Ergotimos, with scenes from myths. National Archaeological Museum, Florence.' },
  { img: 'gea-ceramica-oficina', leg: 'Imagined scene of a pottery workshop in Athens, c. 520 BC, with a painter decorating a red-figure vase and others working at the wheel and kiln; AI-generated illustration.' },
  'In **sculpture**, the Greeks adopted, under Egyptian influence, the monumental stone statue, and created two types: the **kouros** (a standing nude youth, left leg forward, used as a tomb or offering) and the **kore** (a clothed girl). They evolve from rigid forms, c. 600 BC, to more natural bodies, c. 500 BC, with the famous «Archaic smile». It was also in this period that the first **stone temples** were built, with columns in the **Doric** (Corinth, Corcyra, Paestum) and **Ionic** (Ephesus, Samos) orders, and with sculpture in the pediments and friezes.',
  { img: 'gea-kore-peplos', leg: 'The «Peplos Kore», marble, c. 530 BC, which retains traces of pigment. Acropolis Museum, Athens.' },
  { img: 'gea-sifnios-friso', leg: 'Frieze of the Siphnian Treasury, at Delphi, c. 525 BC, with scenes from the Trojan War and the battle of gods and giants. Delphi Archaeological Museum.' },
  { h: '19. The first philosophers and scientists' },
  'In Ionia, from c. 600 BC, some men began to ask what the world is made of and how it works, **without recourse to gods**. **Thales** of Miletus said everything comes from water; **Anaximander** proposed a boundless principle (the *apeiron*) and drew a map of the world; **Anaximenes** pointed to air. **Pythagoras**, born in Samos and active in Croton, taught the immortal soul and the importance of numbers; **Xenophanes** criticised stories of gods with human bodies; **Heraclitus** of Ephesus held that everything is in constant change. **Hecataeus** of Miletus wrote a description of the known world, and one of the first «histories». In Athens there were as yet no important philosophers (only after the Persian Wars).',
  { h: '20. Myths, legends and facts' },
  { caixa: 'What is legend and what is fact', texto: [
    '**The Minotaur and the Labyrinth.** They are legend, but the great ruins of Knossos, the image of the bull and the double axe may have fed the tradition. There is no proof that a physical labyrinth existed.',
    '**The Minoans were peaceful.** This is an idea of Evans and later authors. The absence of great walls and the festive themes of the art are true, but there are weapons, citadels and signs of conflict, and violence is not excluded.',
    '**Atlantis and Thera.** The idea that the eruption of Thera lies behind Plato’s myth is a modern hypothesis, not demonstrated: Plato tells a story for his political philosophy, and sets it in the Atlantic.',
    '**Agamemnon and Troy.** Schliemann believed he had found the «mask of Agamemnon»; the mask is three centuries older than the time when the Trojan War is supposed to have taken place.',
    '**The «Dorian invasion».** It is an explanation by the Greeks, which archaeology does not confirm as an invasion.',
    '**Lycurgus.** We do not know whether he was a real person; the tradition dates from centuries later.',
    '**«Blind» Homer.** The tradition giving the poet blindness may come from the blind bard Demodocus in the *Odyssey*, or from the *Hymn to Apollo*; there is no proof.',
    '**The Games of 776 BC.** The date was calculated by Hippias of Elis, centuries later; it is a convention.',
    '**Draco «wrote in blood».** The phrase is an old quip (reported by Plutarch) about the homicide laws; Draco’s law distinguished voluntary from involuntary homicide, and was the only part of his laws that Solon kept.'
  ] }
];

const personalidades = [
  'Of this period we know few people with certainty. Many names (Lycurgus, Homer) are wrapped in legend, and almost all dates before 600 BC are approximate. Here are gathered those who uncovered the Bronze Age, and the poets and politicians who shaped the Archaic world.',
  { h: 'Arthur Evans (1851 – 1941)' },
  'British archaeologist, Keeper of the Ashmolean Museum in Oxford. He bought the land at Knossos in 1900 and directed the excavations for more than thirty years, bringing to light the palace, the frescoes and the Linear A and B tablets. It was he who called the civilisation «Minoan», after King Minos. He had parts of the palace reconstructed, with concrete and frescoes restored by the painter Piet de Jong; the reconstructions, and his image of a peaceful, matriarchal Crete, are criticised today. He would not accept that Linear B was Greek; Ventris’s decipherment proved the opposite.',
  { h: 'Michael Ventris (1922 – 1956)' },
  'British architect, passionate about ancient scripts from the age of 14. Working at home, on the basis of the studies of the American **Alice Kober** (who died in 1950 before completing the decipherment) and the published tablets, he discovered in 1952 that Linear B writes an early form of **Greek**. He published the result in 1953 with the philologist **John Chadwick**. He died in a car accident in 1956, aged 34. The decipherment pushed back the written history of the Greek language by more than half a millennium.',
  { h: 'Homer (date and life uncertain; 8th century BC?)' },
  'Poet to whom tradition attributes the **Iliad** and the **Odyssey**. The ancient Greeks already debated whether he came from Ionia, Chios or Smyrna, and believed he was blind. Modern scholars debate whether he was one person or a tradition of singers, and whether the two poems are by the same hand; most place the composition between c. 750 and 650 BC. He was the «educator of the Greeks» (Plato), and his works were learned by heart by every boy.',
  { img: 'gea-homero-busto', leg: 'Bust of Homer, Roman copy of a Hellenistic original, 2nd–1st centuries BC; it is an imagined portrait, because no one knows what the poet looked like. British Museum.' },
  { h: 'Hesiod (c. 700 BC)' },
  'Poet from Boeotia, who lived in Ascra, a village which, he says, was «bad in winter, hard in summer, and never good». He composed the **Theogony** and **Works and Days**, and is the first Greek poet to speak of himself: his father had come from Aeolis, he was tending sheep on Mount Helicon when the Muses appeared to him, and he had an inheritance dispute with his brother **Perses**. He says he won a tripod in a poetry contest at Chalcis, in Euboea. His work gives a peasant’s view and is an exceptional source for rural life.',
  { h: 'Lycurgus (date uncertain)' },
  'Lawgiver of Sparta, to whom tradition attributes the organisation of the city: the two kings, the elders, the assembly, the education of boys, the common meals. The ancients did not agree on when he lived (between the 9th and 7th centuries BC), and today many historians doubt he existed as a person; the Spartan organisation seems the work of centuries. The main source is Plutarch’s *Life of Lycurgus*, written c. AD 100, almost a thousand years later.',
  { h: 'Cypselus (c. 657 – 627 BC) and Periander (c. 627 – 587 BC)' },
  '**Cypselus** took power in Corinth by overthrowing the Bacchiads and ruled for thirty years, without a personal guard, says Aristotle. His son **Periander** ruled about 40 years, founded colonies (Potidaea, Apollonia), is credited with the Diolkos, the ramp for dragging boats across the isthmus, and was one of the most notable figures of his time, sometimes counted among the «Seven Sages». Later sources describe him as cruel, and the stories about his life are hard to confirm. The tyranny fell a few years after his death (c. 584 BC).',
  { h: 'Draco (7th century BC)' },
  'Lawgiver of Athens, who in 621 BC wrote the city’s first laws, mostly about **homicide**. He distinguished voluntary from involuntary homicide and took vengeance out of the hands of the families, giving the case to the city. He was very severe (death for many offences), and so became a symbol of excessive harshness: «draconian». Solon repealed almost all his laws, except those on homicide.',
  { h: 'Solon (c. 640 – c. 560 BC)' },
  'Athenian poet, merchant and politician. He was elected archon c. 594 BC with powers to resolve the debt crisis: he cancelled debts, banned slavery for debt, created the four income classes and opened the courts to the people. He then left on a ten-year journey to avoid being forced to alter the laws. We have fragments of his political poems, in which he defends his work. He is one of the «Seven Sages»; the meeting with Croesus, told by Herodotus, is probably legend (the chronologies do not match).',
  { h: 'Peisistratus (c. 600 – 528/7 BC)' },
  'Athenian noble, victorious general against Megara, he took power three times (c. 561/0, c. 556 and 546 BC). According to Herodotus, on the second attempt he entered Athens accompanied by a woman disguised as Athena. During the 19 years of the last period he governed well: loans to peasants, public works, festivals, and a prudent foreign policy; he exploited mines in Thrace (Mount Pangaeus) during his exile. According to Aristotle, it was said that his rule was like the «age of Cronus», the golden age; the regime of his sons, however, ended in 510 BC.',
  { h: 'Cleisthenes (c. 570 – after 508 BC)' },
  'Aristocrat of the **Alcmaeonid** family, archon in 525/4 BC (it appears on an inscription), exiled by the Peisistratids and then allied with Delphi to overthrow them. In 508/7 BC, defeated by Isagoras (with Spartan support), he «took the people into partnership» and, with popular support, reorganised the city into ten tribes and 140 demes, created the Council of 500, and made the assembly the centre of politics. Nothing is known of his life after 506 BC. He is the «father of Athenian democracy».',
  { h: 'Sappho of Lesbos (c. 630 – c. 570 BC)' },
  'Poet of Mytilene, on the island of Lesbos, the most famous woman poet of antiquity (called by some «the tenth Muse»). She composed lyric poems, sung to the lyre, about love, beauty, longing and wedding rituals, mostly for a circle of young women who lived around her. Of the nine books the ancients knew, one complete ode survives (the **Ode to Aphrodite**) and fragments, including poems discovered on papyri in the 21st century. Details of her life (husband, daughter, exile in Sicily) come from late sources and are uncertain; the legend that she killed herself for love is a later invention.',
  { img: 'gea-safo-alceu', leg: 'Sappho and Alcaeus, of Lesbos, shown on an Attic red-figure *kalathos* (a basket-shaped vase), c. 470 BC. Staatliche Antikensammlungen, Munich.' },
  { h: 'Thales of Miletus (c. 624 – c. 546 BC)' },
  'Considered by Aristotle the first philosopher, he sought to explain the world without recourse to gods, and said the principle of all things was **water**. According to Herodotus he predicted a solar eclipse, now thought to be that of 28 May 585 BC; many historians doubt he was able to predict it. He has a reputation as a mathematician (measuring the height of the pyramids by their shadow and, according to tradition, proving properties of triangles and the circle) and as a practical man; he is counted among the Seven Sages. He wrote nothing that we know of.',
  { h: 'Pythagoras of Samos (c. 570 – c. 495 BC)' },
  'Born in Samos, he settled around 530 BC in Croton (southern Italy), where he founded a community that combined philosophy, religion, politics and mathematics. He taught the **immortality of the soul** and its reincarnation, rules of life (the *akousmata*) and the value of numbers in musical harmonies. The community had political influence and was eventually attacked. He wrote nothing; the «Pythagorean theorem» was already known in Babylon and its proof is probably later. Almost everything said about him comes from sources centuries later.',
  { h: 'Polycrates of Samos (c. 538 – 522 BC)' },
  'Tyrant of Samos, he became master of the Aegean with a fleet of some hundred warships (penteconters). He built the tunnel of **Eupalinos**, a harbour and the great temple of **Hera**, and protected poets such as **Anacreon**. According to Herodotus, his success was such that the pharaoh Amasis advised him to get rid of a jewel to ward off the gods’ jealousy. He was lured to Magnesia on the Maeander by **Oroetes**, the Persian satrap of Sardis, and executed in 522 BC.'
];

const legado = [
  { h: 'What they left us' },
  { lista: [
    '**The polis and citizenship:** the idea that a community governs itself by known laws, decided together, and not only by the will of a chief.',
    '**The alphabet:** the Greek alphabet is the ancestor of the Latin, Cyrillic, Coptic and others; and the word «alphabet» joins the names of the first two letters, *alpha* and *beta*.',
    '**Literature:** the poems of Homer and Hesiod, the lyric of Sappho and Archilochus opened the European literary tradition.',
    '**Written law and politics:** Draco, Solon and Cleisthenes inaugurate the debate on justice, equality and participation.',
    '**The games:** the modern Olympic Games (1896) are their direct heirs; the word «athlete» is Greek.',
    '**Colonisation:** the colonies of the West carried language, gods and alphabet to Italy and southern France, and the Romans learned a great deal from them.',
    '**Philosophy and science:** the Ionian thought of the 6th century BC began to explain the world by reason.'
  ] },
  { h: 'Words that come from this history' },
  { lista: [
    '**Tyrant:** from *tyrannos*; originally just someone who took power without being king.',
    '**Ostracism:** from *ostrakon*, a potsherd on which the name of the exile was written.',
    '**Cyclopean:** said of walls of enormous blocks, like those of Mycenae and Tiryns, which the Greeks thought the work of Cyclopes.',
    '**Labyrinth:** perhaps from *labrys*, the double axe, a Minoan symbol; linked to the palace of Knossos.',
    '**Odyssey:** came to mean a long journey full of adventures.',
    '**Draconian:** excessively severe, because of Draco.',
    '**Spartan:** austere and disciplined, because of Sparta.',
    '**Olympic, athlete, stadium, pentathlon:** come from the Games at Olympia.'
  ] },
  { h: 'Art' },
  'Archaic statues, the kouroi and korai, show the human body emerging as the central theme of European art. Black- and red-figure pottery is one of the main sources for what the Greeks thought and did. The Minoan frescoes, the gold masks of Mycenae and the Cycladic figurines, of such simple forms, inspired 20th-century artists such as Brancusi and Henry Moore.',
  { h: 'Rediscovery' },
  'Until the 19th century the Greek Bronze Age was a legend. **Heinrich Schliemann** excavated Troy (1870) and Mycenae (1876) and showed that Homer’s poems had some material basis, even if his methods destroyed parts of the site. **Arthur Evans** uncovered Knossos in 1900, and Minoan civilisation came to exist in history. **Carl Blegen** found the archive of Pylos in 1939. In **1952**, **Michael Ventris** deciphered Linear B. In **1967**, **Spyridon Marinatos** began excavating Akrotiri, on Thera. In the decades from 1960 to 1980, the excavations at Lefkandi showed that the Dark Age was not so dark. Today, ancient DNA analysis, radiocarbon dating and underwater archaeology (such as the Uluburun wreck) continue to change the picture.',
  { h: 'What remains open' },
  { lista: [
    'Exactly when the volcano of Thera erupted, and how much it affected the Minoans.',
    'How Linear A is read and what language the Minoans spoke.',
    'What caused the collapse of c. 1200 BC and why Greece took centuries to recover.',
    'Whether or not there was a Trojan War and what memory of it Homer’s poems keep.',
    'How and when the *Iliad* and the *Odyssey* were fixed in writing, and whether it was the same poet.',
    'When and how Greek warfare changed with the hoplites, and how much that changed politics.',
    'Whether Lycurgus existed and when the Spartan system took shape.'
  ] },
  { h: 'Where to visit' },
  { lista: [
    '**Athens:** National Archaeological Museum (Cycladic figurines, treasures of Mycenae, the «Mask of Agamemnon», kouroi and Geometric vases), Acropolis Museum (Peplos Kore) and the Museum of the Ancient Agora.',
    '**Crete:** palace of Knossos and Heraklion Archaeological Museum (frescoes, the Phaistos Disc, the «Snake Goddess»), the palace of Phaistos and the palaces of Malia and Zakros.',
    '**Thera (Santorini):** the site of Akrotiri and the Museum of Prehistoric Thera.',
    '**Peloponnese:** Mycenae (citadel, Lion Gate, tombs), Tiryns, the Palace of Nestor at Pylos, ancient Corinth, Olympia (with its museum) and the Museum of Sparta.',
    '**Delphi:** the sanctuary of Apollo and the museum, with the frieze of the Siphnian Treasury.',
    '**Euboea:** the Archaeological Museum of Eretria, with the Centaur of Lefkandi.',
    '**Italy:** Paestum (temples of Hera and Poseidon), Syracuse, Selinunte and Agrigento in Sicily, and the Museum of Pithekoussai on Ischia.',
    '**Turkey:** Troy, Ephesus, Miletus and the Museum of Underwater Archaeology in Bodrum.',
    '**In Lisbon:** the Calouste Gulbenkian Museum has Greek coins and vases, including Attic vases.'
  ] },
  { h: 'Final notes' },
  'The dates on this page are approximate, and many of them, above all before c. 600 BC, result from conventions or later traditions. In many cases specialists still dispute them. The story continues on the page on the **Classical Age**, from the Persian Wars onwards; the themes of religion, art, warfare and philosophy have their own pages, and the mother page gives the general overview.'
];

const quiz = [
  { p: 'What is the name of the Bronze Age civilisation whose main palace was Knossos?', op: ['Mycenaean', 'Minoan', 'Cycladic', 'Hittite'], certa: 1, exp: 'The Minoans, of Crete; the name comes from the legendary King Minos and was coined by Arthur Evans.' },
  { p: 'Who deciphered Linear B in 1952 and showed that it wrote Greek?', op: ['Arthur Evans', 'Heinrich Schliemann', 'Michael Ventris', 'Carl Blegen'], certa: 2, exp: 'Michael Ventris, with contributions from Alice Kober and John Chadwick.' },
  { p: 'Which of the following statements about Linear A is correct?', op: ['It was deciphered by Ventris', 'It writes Mycenaean Greek', 'Its language remains undeciphered', 'It is a Phoenician alphabet'], certa: 2, exp: 'Linear A, of the Minoans, has not been deciphered: the language is unknown.' },
  { p: 'What monument marks the main entrance to the citadel of Mycenae?', op: ['The Treasury of Atreus', 'The Lion Gate', 'The Parthenon', 'The Tholos'], certa: 1, exp: 'The Lion Gate, of c. 1250 BC, with the relief of two lionesses.' },
  { p: 'What happened to Mycenaean civilisation around 1200 BC?', op: ['It was conquered by Rome', 'It founded colonies on the Black Sea', 'It defeated the Persians', 'The palaces were destroyed or abandoned and the Linear B script disappeared'], certa: 3, exp: 'The collapse of the Bronze Age, of debated causes.' },
  { p: 'From which people did the Greeks adapt the alphabet, adding signs for vowels?', op: ['Egyptians', 'Hittites', 'Phoenicians', 'Persians'], certa: 2, exp: 'The Phoenicians, c. 800 – 750 BC.' },
  { p: 'What is the traditional date of the first Olympic Games?', op: ['1200 BC', '776 BC', '594 BC', '490 BC'], certa: 1, exp: 'A date fixed centuries later by Hippias of Elis.' },
  { p: 'What was a polis?', op: ['A sanctuary', 'A script', 'A city-state with territory, laws and citizens', 'A coin'], certa: 2, exp: 'The basic political unit of the Greek world.' },
  { p: 'What was the role of the «oikistes» in colonisation?', op: ['Leader of the expedition and founder of the colony', 'Priest of Delphi', 'Commander of the helots', 'Tax collector'], certa: 0, exp: 'The founder was appointed by the mother city and honoured as a hero.' },
  { p: 'Which city founded Syracuse, in Sicily, c. 733 BC?', op: ['Athens', 'Sparta', 'Thebes', 'Corinth'], certa: 3, exp: 'Corinth, under Archias.' },
  { p: 'Who were the helots in Sparta?', op: ['The kings', 'The professional soldiers', 'The subjugated rural population who worked the land for the Spartans', 'The priests'], certa: 2, exp: 'Many were Messenians, conquered in the Messenian wars.' },
  { p: 'Who cancelled debts and divided the citizens of Athens into four income classes, c. 594 BC?', op: ['Draco', 'Solon', 'Peisistratus', 'Cleisthenes'], certa: 1, exp: 'Solon, with the *seisachtheia* («shaking off of burdens»).' },
  { p: 'Why does the word «draconian» mean a very severe law?', op: ['Because of the laws of Draco, of 621 BC', 'Because of the Minotaur', 'Because of the dragons of Sparta', 'Because of Peisistratus'], certa: 0, exp: 'Draco wrote Athens’s first laws, very harsh.' },
  { p: 'Which reform belongs to Cleisthenes, in 508/7 BC?', op: ['The cancellation of debts', 'The division of Attica into ten tribes and the creation of the Council of 500', 'The foundation of the Academy', 'The building of the Parthenon'], certa: 1, exp: 'Cleisthenes reorganised citizenship on the basis of demes and tribes.' },
  { p: 'Which statement about Homer is correct?', op: ['He was certainly a single blind poet, from Athens', 'He wrote in Linear B', 'He is a hero of Troy', 'The «Homeric question» asks whether he was one person or a tradition, and how the poems were composed'], certa: 3, exp: 'The tradition is ancient, but what we know about the poet is uncertain.' }
];

export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };
