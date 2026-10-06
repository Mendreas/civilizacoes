// BYZANTINE EMPIRE — full content in English (same structure and image ids as dados.js).
// Dates follow the conventional chronology; «c.» marks approximate dates and debated points are flagged. BC/AD.
// «Byzantine» is a modern name: the people called themselves Romans (Rhomaioi).
// Rome up to 476 is on the page «Crisis, Dominate and Fall» (roma/crise-dominato); here we link up without repeating.

const visao = [
  { caixa: 'In brief', texto: [
    'The **Byzantine Empire** is the name modern historians give to the eastern half of the Roman Empire, which outlived the fall of the West (476) by almost a thousand years and ended in **1453**, when the Ottomans of Mehmed II took **Constantinople**. Its people never called themselves «Byzantines»: they were **Romans** (in Greek, *Rhomaioi*), and their state was the Roman Empire, with an emperor (*basileus*), Roman law and a capital that was the «New Rome».',
    'They spoke Greek, worshipped according to Orthodox Christianity and governed in the Roman way. It was a state that lived through losses and recoveries: under **Justinian** (527–565) it reconquered Italy and North Africa; in the seventh century it lost Egypt and Syria to Islam and nearly vanished; in the eleventh, under **Basil II**, it was again the greatest power of the eastern Mediterranean; in 1204 it was sacked by Christian crusaders; and in 1453 it fell for good. Its story is not a «thousand years of decline», as the Enlightenment painted it, but one of resistance and reinvention.'
  ] },
  { img: 'biz-mapa-565', leg: 'Map of the Byzantine Empire in 565.' },
  { h: 'Where it lay' },
  'The heart of the Empire was always the space between the **Aegean and the Black Sea**: the southern Balkans, Greece, Anatolia (today’s Asian Turkey) and the **Bosphorus** strait, where Constantinople, modern **Istanbul**, stood. The city had a golden position: it controlled the passage between Europe and Asia and between the Black Sea and the Mediterranean, on a promontory almost surrounded by water with a sheltered bay, the Golden Horn. It was almost impossible to take by sea and very hard by land.',
  'At its best the Empire reached much farther: Italy, southern Spain, North Africa, Egypt, Syria, Palestine, Armenia and the southern Balkans up to the Danube. At its worst it was little more than the capital. It is worth remembering that the frontiers were always a moving front, not a line.',
  { h: 'When it existed' },
  'The starting date is a convention. Some historians begin in **330**, with Constantine’s inauguration of Constantinople; others in **395**, when Theodosius I died and the Empire was divided between two sons; others in **476**, with the end of the Western Empire; and others in **c. 610**, with Heraclius, when Greek replaced Latin in the administration. None of these dates marked, for people living through them, the birth of a new state: for contemporaries the Empire was the same. Here we follow 330 – 1453.',
  { tabela: { cab: ['Phase', 'Dates', 'What marks it'], linhas: [
    ['Christian Rome of the East', '330 – 518', 'Founding of Constantinople; Theodosius I and the division of 395; Chalcedon (451); the West falls in 476 and the East survives; walls of Theodosius II'],
    ['Age of Justinian', '518 – 610', 'Justinian and Theodora; Corpus Iuris Civilis; Hagia Sophia; Nika Riot; reconquests of Belisarius and Narses; plague of 541–542; most of Italy lost to the Lombards'],
    ['Survival', '610 – 717', 'Heraclius defeats the Sasanians (628) but loses Egypt and Syria to Islam; sieges of Constantinople (674–678 and 717–718); Greek fire; the themes appear'],
    ['Iconoclasm and recovery', '717 – 867', 'Leo III and the quarrel over images (c. 726/730–843); Empress Irene; wars with Bulgars and Arabs; conversion of the Slavs; Photios'],
    ['Macedonian dynasty', '867 – 1056', 'Military and cultural peak; Nikephoros Phokas, John Tzimiskes and Basil II (976–1025); baptism of Kievan Rus; break with Rome in 1054'],
    ['Crisis and the Komnenoi', '1056 – 1204', 'Defeat at Manzikert (1071); Alexios I and the Crusades; the Komnenoi restore the Empire; Fourth Crusade and the sack of 1204'],
    ['Latin Empire and exile', '1204 – 1261', 'Byzantine successor states at Nicaea, Epirus and Trebizond; Michael VIII retakes Constantinople in 1261'],
    ['Palaiologan era', '1261 – 1453', 'Small, poor but culturally brilliant Empire; civil wars; Ottoman advance; siege and fall on 29 May 1453']
  ] } },
  { img: 'biz-mapa-1025', leg: 'Map of the Byzantine Empire in 1025.' },
  { h: 'Who were the «Byzantines»?' },
  'The name «Byzantium» comes from an ancient Greek colony, **Byzantion**, where Constantine founded his city. The adjective «Byzantine» only became common in the seventeenth century, following the work of the German humanist **Hieronymus Wolf** (1557), who published the texts of this age and gave it its name. Contemporaries said *Basileia ton Rhomaion*, «Empire of the Romans». Even Turks and Arabs called the region *Rum*, «Rome». Ask a peasant in tenth-century Anatolia who he was and he would answer «Roman».',
  'It was a mixture. The language was **Greek**, the religion **Orthodox** Christianity, the law came from **Rome** and the culture from a Hellenistic inheritance renewed with every generation. Within the Empire lived Greeks, Armenians, Syrians, Slavs, Georgians, Vlachs, Jews and many others. What united them was faith, the emperor and the sense of belonging to Roman civilisation.',
  { h: 'Why they matter' },
  { lista: [
    '**Law:** Justinian’s *Corpus Iuris Civilis* gathered and organised Roman law. Rediscovered in medieval Italy, it underlies the civil law of Portugal and of much of continental Europe and Latin America.',
    '**The classics:** it was Byzantine scribes who copied, studied and kept Homer, Plato, Aristotle, Euclid, Archimedes and many others. Without them much of ancient Greece would have vanished.',
    '**Art and architecture:** the dome of Hagia Sophia, the golden mosaics and the icons created a visual language that still marks Orthodox churches and influenced Venice, Ravenna and Russia.',
    '**Eastern Christianity:** the Orthodox Church was born and grew in the Empire; its separation from Rome (1054) is one of the longest divisions in Christian history.',
    '**A bridge and a shield:** for centuries Constantinople held back advances from the East into Europe and, at the same time, was the meeting point of the Mediterranean, Russia and the Muslim East.',
    '**Slavs and the Balkans:** Byzantine missionaries created the alphabet that gave rise to Cyrillic; Bulgaria, Serbia and Russia inherited the faith, the writing and the art of the Empire.'
  ] },
  { caixa: 'Constantinople today', texto: 'The city is now called **Istanbul** (from the Greek *eis tin polin*, «to the city»). The Theodosian Walls can still be seen; **Hagia Sophia** is a mosque again since 2020, after being a museum (1935–2020); the **Chora Church** and the **Hippodrome** can still be visited. Istanbul’s historic centre has been a UNESCO World Heritage Site since 1985.' },
  { img: 'biz-santa-sofia-exterior', leg: 'Exterior of Hagia Sophia, Istanbul.' },
  { img: 'biz-mapa-1450', leg: 'Map of the Byzantine Empire around 1450.' }
];

const linha = [
  'This timeline follows the main events of Byzantine history, from 330 to 1453. Dates are the conventional ones; where sources disagree, this is noted. For earlier Rome and the fall of the West in 476, see the page «Crisis, Dominate and Fall».',
  { linha: [
    { d: '11 May 330', t: 'Constantinople is inaugurated', x: 'Emperor **Constantine I** inaugurates the «New Rome» on the site of ancient **Byzantion**, a Greek city founded, according to tradition, in the seventh century BC. He chose the site for its strategic position and endowed it with a forum, a hippodrome, a palace and a population that grew quickly through privileges and grain distribution.' },
  ] },
  { img: 'biz-mosaico-constantino-cidade', leg: 'Constantine and Justinian with the Virgin, Hagia Sophia vestibule mosaic.' },
  { linha: [
    { d: '380 – 395', t: 'Theodosius I and the division of the Empire', x: 'In 380 the **Edict of Thessalonica** makes Nicene Christianity the official religion. Theodosius I is the last emperor to rule the whole Empire; at his death in 395 he leaves the West to Honorius and the East to Arcadius. The division was administrative, but in practice it became permanent.' },
    { d: '413 – 451', t: 'Theodosius II: walls, code and Chalcedon', x: 'The **Theodosian Walls** (413), reinforced after an earthquake in 447, protect the city for a thousand years. The *Codex Theodosianus* (438) collects the laws. In 451 the **Council of Chalcedon** defines the nature of Christ and opens a rift with the churches that reject it (Coptic, Armenian and Syriac).' },
    { d: '476', t: 'The West falls, the East holds', x: 'Odoacer’s deposition of Romulus Augustulus ends the Western Empire. Emperor **Zeno**, in Constantinople, remains the sole Roman emperor. The Germanic kings of the West recognise, in principle, his superiority.' },
    { d: '527 – 565', t: 'Justinian and Theodora', x: 'An Illyrian peasant who reaches the throne, and a former actress who becomes empress. Together they reform the laws, rebuild the capital, protect the arts and try to restore the Empire of Rome.' },
    { d: 'January 532', t: 'The Nika Riot', x: 'In the Hippodrome, the **Blue** and **Green** factions unite against the emperor, shouting *Nika!* («victory!»). Part of the city burns, including the second Hagia Sophia. According to the historian Procopius, Justinian thought of fleeing, and it was **Theodora** who persuaded him to stay. Belisarius and Mundus entered the Hippodrome and the repression cost, according to Procopius, some **30,000** lives, a figure probably exaggerated.' },
  ] },
  { img: 'biz-nika-cena', leg: 'Nika riot, 532; imagined scene. AI-generated illustration.' },
  { linha: [
    { d: '532 – 537', t: 'The new Hagia Sophia', x: 'In under six years the architects **Anthemius of Tralles** and **Isidore of Miletus** raise a church with a dome about 31–33 m across (depending on the axis measured), inaugurated on 27 December 537. The dome partly collapsed in an earthquake in 558 and was rebuilt, higher, in 562.' },
    { d: '529 – 534', t: 'The *Corpus Iuris Civilis*', x: 'Commissions of jurists, with **Tribonian** as the central figure, gather the *Code* (529, revised in 534), the *Digest* (533, extracts from the great jurists) and the *Institutes* (a student textbook), to which the *Novels*, Justinian’s later laws, are added.' },
    { d: '533 – 554', t: 'The reconquests', x: '**Belisarius** defeats the Vandals in North Africa (533–534) and, from 535, attacks Ostrogothic Italy. The Gothic War lasted almost twenty years, devastated the country and was finished by **Narses**, victor at Busta Gallorum (552). Around 552 Justinian exploits a Visigothic civil war to occupy a strip of south-eastern Spain, the province of *Spania*.' },
    { d: '541 – 542', t: 'The plague of Justinian', x: 'The first great bubonic plague pandemic on record (the bacterium *Yersinia pestis* has been confirmed by ancient DNA) reaches Egypt in 541 and Constantinople in 542. Procopius speaks of thousands dead a day; modern mortality estimates are much debated. The emperor himself fell ill and recovered. The population of the Empire and its ability to pay the army suffered.' },
    { d: '602 – 628', t: 'Heraclius and the war with Persia', x: 'After Phocas’s coup (602), the Sasanian king **Khosrow II** invades the Empire. The Persians take Antioch (611), Jerusalem (614, with the True Cross) and Alexandria (c. 619). In 626 a joint Persian and Avar siege of Constantinople fails. **Heraclius**, emperor since 610, counter-attacks through the Caucasus and wins near Nineveh (627). Khosrow is deposed and peace is made in 628.' },
  ] },
  { img: 'biz-solido-heraclio', leg: 'Gold solidus of Heraclius and Heraclius Constantine.' },
  { linha: [
    { d: '634 – 642', t: 'The loss to Islam', x: 'Arab armies, united by the new religion, defeat the Byzantines at the **Yarmuk** (636), take Jerusalem (c. 637/638) and Alexandria (641–642). In under ten years the Empire loses Syria, Palestine and Egypt, its richest provinces. Anatolia remains the core of the state and is organised into **themes**.' },
    { d: '674 – 678', t: 'The first Arab siege and Greek fire', x: 'According to the traditional chronology (some historians propose an earlier date, c. 667–669), the Umayyad fleet attacks Constantinople for several years. The defence is saved by a new weapon, **Greek fire**, an incendiary liquid launched from siphons that burns even on water; tradition links it to a Syrian architect, Kallinikos, c. 672. The secret of its formula was very well kept and was lost.' },
  ] },
  { img: 'biz-fogo-grego-skylitzes', leg: 'Greek fire, miniature from the Madrid Skylitzes.' },
  { linha: [
    { d: '717 – 718', t: 'The second Arab siege', x: 'Emperor **Leo III**, newly crowned, withstands Maslama’s great siege. Famine, a harsh winter, Greek fire and Bulgar support (traditionally credited to Khan Tervel) halt the offensive. The failure ends the phase of great Arab expansion into Europe from the east.' },
    { d: 'c. 726/730 – 843', t: 'Iconoclasm', x: 'Leo III and his successors ban or restrict the veneration of sacred images. The causes are debated: pressure from Islam, military defeats read as divine punishment, theological ideas. There are persecutions, monks sent into exile, and a deep debate about what an image is. In 787 **Irene** convenes the Council of Nicaea II, which restores icons; Emperor Leo V bans them again in 815; and on **11 March 843** Empress Theodora, regent for her son, restores them for good, the «Triumph of Orthodoxy».' },
  ] },
  { img: 'biz-iconoclastia-chludov', leg: 'Iconoclasts whitewashing an icon of Christ, Chludov Psalter.' },
  { linha: [
    { d: '863 – 885', t: 'Cyril, Methodius and the Slavs', x: 'The brothers **Cyril and Methodius**, from Thessalonica, go to Moravia and translate the liturgy into Slavonic, with a new alphabet, Glagolitic. Their disciples carry this work to Bulgaria, where Cyrillic arises, in the circle of Preslav, now used by hundreds of millions.' },
    { d: '867 – 1056', t: 'The Macedonian dynasty', x: '**Basil I**, a peasant who reaches the throne, founds a dynasty that reigns for almost two centuries. It is the golden age of Byzantine culture: under **Leo VI** and **Constantine VII** laws, military manuals and encyclopaedias are compiled; under **Nikephoros II Phokas** (963–969) and **John Tzimiskes** (969–976) the Empire recovers Crete, Cyprus and Antioch.' },
    { d: '976 – 1025', t: 'Basil II', x: 'After civil wars and a defeat by the Bulgars in 986, **Basil II** reorganises the army and conquers Bulgaria, in 1018, after a war of more than thirty years. He became known as the «Bulgar-Slayer». According to Skylitzes, in 1014 he had thousands of prisoners blinded; the figure (15,000) is probably exaggerated. In 1025 he dies as the emperor of greatest prestige in centuries.' },
  ] },
  { img: 'biz-basilio-ii-salterio', leg: 'Basil II in his Psalter, Biblioteca Marciana, Ms. gr. 17, folio 3r.' },
  { linha: [
    { d: '988 / 989', t: 'Rus converts', x: 'Prince **Vladimir of Kiev** marries Anna, sister of Basil II, receives Orthodox baptism and sends 6,000 warriors to serve the emperor, the origin of the **Varangian Guard**. The conversion (c. 988/989) ties Russia, Ukraine and Belarus to the Byzantine world.' },
    { d: '16 July 1054', t: 'The Schism', x: 'After a dispute between Cardinal **Humbert** (the pope’s legate) and Patriarch **Michael Cerularius**, the former lays a bull of excommunication on the altar of Hagia Sophia. It was neither a sudden nor a total break, and only with time, and with the Fourth Crusade, did the gulf become definitive. The excommunications were lifted in 1965.' },
    { d: '26 August 1071', t: 'Manzikert', x: 'Emperor **Romanos IV Diogenes** is defeated and captured by the Seljuk sultan **Alp Arslan**. The defeat itself was less decisive than the civil wars that followed: in the next decades the Turks occupy much of Anatolia. In the same year the Normans take Bari, the last Byzantine stronghold in Italy.' },
    { d: '1081 – 1180', t: 'The Komnenoi', x: '**Alexios I Komnenos** (1081–1118) saves the state from the Normans, Pechenegs and Turks, and asks the West for help, which contributes to the **First Crusade** (1096–1099). His daughter **Anna Komnene** will write the *Alexiad*. **John II** (1118–1143) and **Manuel I** (1143–1180) follow; the latter suffers the defeat of Myriokephalon against the Turks in 1176.' },
    { d: '12 – 13 April 1204', t: 'The Fourth Crusade and the sack', x: 'The crusaders, diverted from Jerusalem by debts to Venice and by the promise of a Byzantine pretender, **Alexios IV**, take Constantinople and sack it for three days. They destroy churches and libraries, carry off relics and works of art (among them the bronze horses now in Venice) and kill thousands of inhabitants. Pope Innocent III condemned the violence. The city never fully recovered.' },
  ] },
  { img: 'biz-cruzada-delacroix', leg: 'Entry of the Crusaders into Constantinople, Delacroix, Louvre.' },
  { img: 'biz-cavalos-sao-marcos', leg: 'Original Horses of Saint Mark, displayed in the basilica museum, Venice.' },
  { linha: [
    { d: '1204 – 1261', t: 'The Latin Empire and the successor states', x: 'The crusader **Baldwin of Flanders** becomes «Latin emperor», but his rule is fragile. The Byzantines organise themselves into three states: the **Empire of Nicaea** (Theodore I Laskaris), the **Despotate of Epirus** and the **Empire of Trebizond**. Nicaea proves the strongest.' },
    { d: '25 July 1261', t: 'Constantinople recovered', x: 'A Nicaean general, **Alexios Strategopoulos**, enters the city almost without a fight, while the Latin army and the Venetian fleet were away. Emperor **Michael VIII Palaiologos** founds the last Byzantine dynasty.' },
    { d: '1261 – 1400', t: 'The Palaiologoi between civil wars and Ottomans', x: 'A small, poor Empire, devastated by civil wars (1321–1328 and 1341–1347), by the Black Death (1347) and by the Serbian and Ottoman advance. The Ottomans cross the Hellespont in 1354 and take Adrianople (c. 1369). The Empire comes to pay tribute and to be a vassal of the sultan. In 1439 Emperor **John VIII** accepts union with Rome in Florence, which Constantinople rejects; the relief crusade ends in disaster at **Varna** (1444).' },
    { d: '6 April – 29 May 1453', t: 'The siege and fall of Constantinople', x: 'Sultan **Mehmed II**, aged 21, besieges the city with an army that sources put at between 50,000 and 80,000 men and heavy artillery, among it the enormous cannon of the Hungarian engineer **Urban**. About 7,000 men defend it, under Emperor **Constantine XI Palaiologos**, helped by Genoese and other foreigners, among them the captain **Giovanni Giustiniani**. A chain closes the Golden Horn; the Ottomans drag ships overland to get round it. The final assault begins before dawn on 29 May. Constantine XI dies fighting.' },
  ] },
  { img: 'biz-cerco-1453-cena', leg: 'Siege of Constantinople, 1453; conjectural reconstruction. AI-generated illustration.' },
  { linha: [
    { d: '1453 – 1461', t: 'After the fall', x: 'Mehmed II makes Constantinople his capital, converts Hagia Sophia into a mosque and adopts the title «Caesar of Rome» (*Kayser-i Rum*). Mistra, the last seat of the Palaiologoi, falls in 1460, and Trebizond, the last fragment of the Byzantine world, in 1461. In 1472 the niece of the last emperor, **Zoe (Sophia) Palaiologina**, marries Ivan III of Moscow, and later the idea of Moscow as the «Third Rome» is born.' }
  ] },
  { img: 'biz-mehmed-bellini', leg: 'Portrait of Mehmed II, Gentile Bellini, National Gallery.' }
];

const mapa = [
  'Almost all of Byzantine history revolves around one city, Constantinople; the others work as ports, fortresses, regional capitals or pilgrimage centres. This section presents the main cities, how the territory changed and the routes that linked it to the world.',
  { h: 'Main cities' },
  { tabela: { cab: ['City', 'Today', 'Role'], linhas: [
    ['Constantinople', 'Istanbul, Turkey', 'Capital, residence of the emperor and the patriarch, the largest city in Christian Europe for centuries'],
    ['Thessalonica', 'Thessaloniki, Greece', 'Second city of the Empire, great port and fair; birthplace of Cyril and Methodius'],
    ['Nicaea', 'İznik, Turkey', 'Two councils (325 and 787); capital of the Empire of Nicaea (1204–1261)'],
    ['Ravenna', 'Italy', 'Capital of the West from 402, then of the Byzantine Exarchate (584–751); mosaics'],
    ['Antioch', 'Antakya, Turkey', 'One of the greatest cities of the East; lost to the Persians (540, 611) and the Arabs (637); reconquered in 969'],
    ['Alexandria', 'Egypt', 'Great port and centre of learning; lost in 641–642'],
    ['Ephesus', 'Turkey', 'Council of 431; great city of western Anatolia'],
    ['Trebizond', 'Trabzon, Turkey', 'Black Sea port; capital of an independent empire (1204–1461)'],
    ['Mistra', 'Near Sparta, Greece', 'Capital of the Despotate of the Morea, cultural centre in the fifteenth century']
  ] } },
  { img: 'biz-constantinopla-buondelmonti', leg: 'Map of Constantinople in Buondelmonti’s Liber Insularum Archipelagi, copy before 1430, BnF, folio 37r.' },
  { h: 'Constantinople' },
  'Constantinople stood on a triangular promontory, with the Bosphorus to the east, the Golden Horn to the north and the Sea of Marmara to the south. Constantine is said to have copied Rome’s **seven hills**, and the city was divided into fourteen regions. The great avenue, the **Mese**, linked the forums, from the Great Palace to the western gates. In Justinian’s time it may have had between 400,000 and 500,000 inhabitants (the estimate is very uncertain), before falling with plague, wars and sieges; by 1453 it had far fewer, perhaps 50,000.',
  { lista: [
    '**The Great Palace:** a complex of pavilions, gardens and halls beside the Hippodrome, where the emperors lived until the court moved to the Blachernae Palace in the twelfth century. The throne room, the Magnaura, had automata (mechanical lions that roared, birds that sang) that impressed ambassadors.',
    '**The Hippodrome:** the great chariot-racing stadium, which also hosted ceremonies and revolts. It was decorated with monuments from all over the ancient world: the **obelisk** of Thutmose III (brought from Egypt by Theodosius I), the **Serpent Column** (from Delphi) and the four **bronze horses**.',
    '**Hagia Sophia:** the «Great Church», symbol of the Empire and church of the patriarch, where emperors were crowned.',
    '**The Holy Apostles:** the church where Constantine and many emperors were buried. It was demolished by the Ottomans.',
    '**Cisterns and aqueduct:** the city had no river and relied on aqueducts (the Aqueduct of Valens, fourth century) and huge cisterns, such as the **Basilica Cistern** (c. 532), with 336 columns.',
    '**The walls:** the **Theodosian Wall**, over five kilometres long, from sea to sea, with moat, outer wall and inner wall, withstood Avars, Arabs, Bulgars and Rus, and was only breached by the crusaders, in 1204, from the Golden Horn side, and by the Ottomans, in 1453.'
  ] },
  { img: 'biz-constantinopla-reconstrucao', leg: 'Constantinople around 550; conjectural reconstruction. AI-generated illustration.' },
  { img: 'biz-hipodromo-obelisco', leg: 'Obelisk of Theodosius, Serpent Column and Walled Obelisk; photograph by James Robertson, around 1854.' },
  { img: 'biz-muralhas-teodosio', leg: 'Theodosian Walls, Istanbul.' },
  { img: 'biz-santa-sofia-537', leg: 'Hagia Sophia in 537; conjectural reconstruction. AI-generated illustration.' },
  { cit: 'The dome seems not to rest on solid masonry, but to be suspended from heaven by a golden chain.', fonte: 'Procopius of Caesarea, Buildings, book I (paraphrase, free translation)' },
  { h: 'Thessalonica, Nicaea and Ravenna' },
  '**Thessalonica** was the second city of the Empire, a great port and fortress city of the northern Aegean, and the starting point of the mission to the Slavs. Its church of St Demetrios, patron of the city, is one of the great Byzantine shrines. It was sacked by the Saracens in 904 and by the Normans in 1185.',
  '**Nicaea** (today İznik), near the Sea of Marmara, is remembered for two councils and for the Creed still recited today. Between 1204 and 1261 it was the capital of the Empire in exile: its walls held out against the Latin Empire and the reconquest of Constantinople set out from there.',
  '**Ravenna**, in northern Italy, was the capital of the Western Empire from 402, then of the Ostrogothic kings, and then of the Byzantine exarch. It keeps some of the most perfect mosaics in the world, including the **church of San Vitale**, consecrated in 547, in whose sanctuary are the portraits of Justinian and Theodora. The Exarchate fell to the Lombards in 751.',
  { img: 'biz-ravena-sao-vital', leg: 'Exterior of San Vitale, Ravenna.' },
  { h: 'Trebizond and Mistra' },
  '**Trebizond**, on the south-eastern Black Sea, was the centre of an empire founded in 1204 by two grandsons of a Komnenian emperor, Alexios and David. It held out until 1461, the last fragment of the Byzantine world, thanks to trade and its remote position.',
  '**Mistra**, in the Peloponnese, became the capital of the **Despotate of the Morea** and had, in the fifteenth century, an intense cultural life, with the philosopher **George Gemistos Plethon**, who taught Plato. It yielded to the Ottomans in 1460. Its ruined churches and palaces are a UNESCO World Heritage Site.',
  { h: 'How the territory changed' },
  { tabela: { cab: ['Date', 'Extent of the Empire'], linhas: [
    ['c. 395', 'Balkans, Greece, Anatolia, Syria, Palestine, Egypt and Cyrenaica'],
    ['565', 'Plus Italy, southern Spain, North Africa and Dalmatia: almost the entire Mediterranean'],
    ['c. 650', 'Without Egypt, Syria and Palestine; Anatolia, Constantinople, Thrace, Sicily and parts of Italy and Africa'],
    ['c. 780', 'Anatolia, parts of the Balkans and of southern Italy; Bulgar and Arab pressure'],
    ['1025', 'Anatolia, Bulgaria, Greece, western Armenia, southern Italy, Crete and Cyprus'],
    ['1204', 'Constantinople and much of the territory pass into Latin hands; three successor states'],
    ['c. 1350', 'Thessalonica, Mistra, islands, eastern Thrace and the capital'],
    ['c. 1450', 'Constantinople and surroundings, Mistra and a few islands']
  ] } },
  { h: 'Routes' },
  { lista: [
    '**The Mediterranean:** the fleet linked Constantinople to Ravenna, Carthage, Alexandria and Thessalonica; the Italian cities (Amalfi, Venice, Genoa) became trading partners and later rivals.',
    '**The «route from the Varangians to the Greeks»:** the river road linking the Baltic to the Black Sea along the Dnieper. Scandinavian (Varangian) and Slavic merchants and warriors came down to Constantinople; many served the emperor.',
    '**The Via Egnatia:** the Roman east–west road, from the Adriatic to the Bosphorus, still used in the Middle Ages.',
    '**The Silk Road:** silk arrived overland, and from c. 552, according to Procopius, monks carried silkworm eggs to Constantinople hidden in canes, starting a native industry.',
    '**The Black Sea:** grain, fish, furs and slaves; the colonies of Cherson (Crimea) and Trebizond were key points.'
  ] }
];

const sociedade = [
  'This section describes how the Empire was governed, believed, traded and lived. Eleven hundred years is a long time: what holds for Justinian’s day does not always hold for the Palaiologoi. Where figures are estimates, this is said.',
  { h: 'The emperor and the court' },
  'The head of state was the **emperor**, in Greek *basileus* (the official title from c. 629, under Heraclius; before that the Latin title was *imperator*). He was regarded as chosen by God, but there was **no law of succession**: power passed, in theory, by acclamation of the army, the Senate and the people, and then by coronation by the patriarch. In practice many emperors rose by coup, and there were long dynasties, such as those of Heraclius, the Macedonians and the Palaiologoi. To stop a rival reigning, his body was mutilated (blinding, slitting the nose), because an emperor had to be whole. Children born during a reign, in a room lined with purple, were called **porphyrogennetoi**, «born in the purple», and had great prestige.',
  'The court was a world of **ceremony**, hierarchical titles and eunuchs, who could hold high posts (above all positions of trust in the palace, because, childless, they did not found dynasties). The *Book of Ceremonies*, compiled under Constantine VII (tenth century), describes in detail the order of processions, audiences and feasts. The idea was that order on earth imitated order in heaven.',
  { img: 'biz-cerimonia-corte', leg: 'Court ceremony around 1000; imagined scene. AI-generated illustration.' },
  { h: 'The state: law, administration and themes' },
  'The Empire kept a strong state, with taxes, bureaucrats and written laws. In Constantinople there was the **prefect of the city** (the *eparch*), who controlled trade, guilds and prices. The *Book of the Eparch* (c. 912) regulates trades such as notaries, goldsmiths, silk merchants, bakers and fishmongers.',
  'From the seventh century Anatolia was organised into **themes**, large military and administrative regions governed by a *strategos* (general), which combined command of the local troops, soldier-peasants with land, and tax collection. The exact origin of the system is debated: it probably emerged gradually during the wars of the seventh century. Later the themes were subdivided and then weakened, as professional and mercenary armies developed.',
  { img: 'biz-esquema-temas', leg: 'Conceptual illustration of a Byzantine theme, ninth century. AI-generated illustration.' },
  { h: 'Blues and Greens: the Hippodrome' },
  'Chariot racing was the great passion of Constantinople. Drivers raced for four teams, or **factions** (*demoi*): **Blues**, **Greens**, and the less important Whites and Reds. Each had drivers, fan clubs, musicians and supporters among the powerful. The Blues and Greens in particular became neighbourhood organisations with a political and festive character, and the Hippodrome was one of the few places where the emperor saw the people and the people shouted before him. A popular idea, now contested by historians, is that the factions matched fixed theological positions; it is not so simple.',
  { img: 'biz-hipodromo-corrida', leg: 'Hippodrome race, sixth century; imagined scene. AI-generated illustration.' },
  { h: 'Social classes' },
  { lista: [
    '**The aristocracy:** the great landowners, the *dynatoi* («the powerful»), and the military families of Anatolia (Phokas, Skleros, Komnenos) who contended for the throne. The Macedonian emperors tried to limit their power to protect the free peasants.',
    '**Officials and clergy:** many were men of modest origin, rising through study, merit and the emperor’s favour.',
    '**Free peasants:** the base of the army and of taxes, they paid the state and did military service. Losing their land to the powerful was a constant risk.',
    '**Merchants and artisans:** organised in regulated guilds, in Constantinople and Thessalonica.',
    '**Slaves:** they existed in the countryside and in households, but slavery was never the basis of the economy. Under Christian influence some laws protected them, but did not abolish it.',
    '**Women:** they had rights of inheritance and property, and some ran the state: Theodora, Irene, Zoe, Theodora of the Macedonian line, and others. Ordinary life, however, was secluded, above all in rich families.'
  ] },
  { h: 'The Orthodox Church' },
  'Church and state were closely bound: the emperor protected the Church, convened councils and appointed patriarchs, and the patriarch of Constantinople crowned the emperor. Many historians speak of «caesaropapism», but the idea is disputed: patriarchs and monks often resisted imperial power. The emperor was a layman; he could not define doctrine, but he had to defend it.',
  'The great theological debates always had political consequences. They are summed up in the table.',
  { tabela: { cab: ['Controversy', 'Council / date', 'Question'], linhas: [
    ['Arianism', 'Nicaea (325), Constantinople (381)', 'Whether the Son is of the same nature as the Father; the Nicene Creed is defined'],
    ['Nestorianism', 'Ephesus (431)', 'Whether Mary is «Mother of God»; the Church of the East separates'],
    ['Monophysitism', 'Chalcedon (451)', 'The divine and human natures of Christ; Copts, Armenians and Syriacs do not accept'],
    ['Monothelitism', 'Constantinople III (680–681)', 'A single will in Christ? Heraclius’s attempt to reconcile the churches'],
    ['Iconoclasm', 'Hieria (754) and Nicaea II (787); 843', 'Whether sacred images may be venerated'],
    ['Filioque and primacy', 'Schism of 1054', 'Does the Holy Spirit proceed from the Father and the Son? What authority does the pope have?']
  ] } },
  { img: 'biz-icone-sinai', leg: 'Christ Pantocrator, sixth-century icon, Saint Catherine’s Monastery.' },
  { img: 'biz-chora-anastasis', leg: 'Anastasis fresco, Chora Church, Istanbul.' },
  'Religious life revolved around **monasteries**, which were also centres of study, hospitals and almshouses. **Mount Athos**, in Greece, became from 963 (foundation of the Great Lavra) the «holy mountain» of Orthodox monasticism and still is. In the fourteenth century the movement of **hesychasm** (prayer of the heart, with repetition of the name of Jesus), defended by St Gregory Palamas, marked spirituality.',
  { h: 'Economy' },
  'The gold coin, the **solidus** (in Greek, *nomisma*), created by Constantine in c. 309/312, kept its weight and purity for about 700 years and circulated from the Atlantic to India as the most reliable coin of its time. Only in the eleventh century was it debased, and Alexios I reformed the coinage in 1092 (the *hyperpyron*).',
  { img: 'biz-solido-justiniano', leg: 'Gold solidus of Justinian I.' },
  'Wealth rested on agriculture (wheat, olive oil, wine), trade and luxury industries. **Silk** was an imperial monopoly for centuries: the workshops of Constantinople produced fabrics that only the state could sell to foreigners in certain qualities. The state taxed land and trade, and subsidised the capital’s grain. In the eleventh century the emperors granted trading privileges to **Venice** (1082), which would later gain great power in the city.',
  { img: 'biz-mercado', leg: 'Constantinople market, tenth century; imagined scene. AI-generated illustration.' },
  { h: 'Language, writing and books' },
  'Until the sixth century Latin was still the language of law and the army; **Greek** became the official language in the seventh. The Greek of the Church and the court was very conservative and imitated ancient Greek, while the spoken language changed. That is why written texts are closer to Plato than to the people. Books were copied by hand on parchment, in monasteries and in the capital’s workshops. Around the ninth century the **minuscule** was adopted, a more compact and faster script, which allowed more books to be copied and saved many ancient texts, transcribed from the capitals.',
  { img: 'biz-scriptorium', leg: 'Monastic scriptorium, tenth century; imagined scene. AI-generated illustration.' },
  { h: 'Home, food and clothing' },
  'Houses in Constantinople were of brick and stone, with an inner courtyard, sometimes two storeys, and in rich families, baths and porticoes. The poor lived in small houses and rented tenements; fires and earthquakes were frequent.',
  'Food was based on **bread**, olive oil, pulses (lentils, broad beans and chickpeas), fish and vegetables. People drank **wine**, often resinated (the ancestor of Greek retsina). They ate cheese, pork and lamb, and used a fermented fish sauce, *garos*, inherited from the Romans. The Church calendar imposed long fasting periods (Lent and others), when meat and dairy were avoided. Among sweets, honey was the great sweetener; sugar was rare.',
  { img: 'biz-banquete', leg: 'Meal in a wealthy household, eleventh century; imagined scene. AI-generated illustration.' },
  '**Clothing** showed social status. The basic garment was the tunic, worn with a cloak (the *chlamys*, for the emperor and the court). **Purple** (*porphyra*) was reserved for the emperor, and silk had sumptuary laws. Women wore long tunics and a veil, the *maphorion*, and the court displayed jewels and precious stones. Fashion was influenced first by Persia and later by the West.',
  { h: 'Music, games and spectacles' },
  'The music of the Church was **Orthodox chant**, sung without instruments. The hymns, such as those of **Romanos the Melodist** (sixth century), were long poems. At court there were hydraulic organs (*hydraulis*) in ceremonies, and instruments such as the lyre, lute and flute in daily life. Games and sports included **chariot races**, the **tzykanion**, a polo-like game on horseback of Persian origin played by the nobility, and board games such as *tabula* (ancestor of backgammon), whose famous game played by Emperor Zeno, c. 480, was recorded by the historian Agathias. There were also mimes, street theatre and animal fights, but the Church condemned them.',
  { h: 'Science and learning' },
  'The Empire inherited Greek learning and linked it to Arabic. **Medicine** produced manuals of great influence (Oribasius, Paul of Aegina) and hospitals, the *xenones*; the **Pantokrator** (charter of 1136), founded by John II and Empress Irene, had wards and paid doctors. In **mathematics and engineering**, Anthemius of Tralles and Isidore of Miletus, the architects of Hagia Sophia, were also mathematicians. **John Philoponus** (sixth century) criticised Aristotle’s physics and proposed an idea of impetus. **Leo the Mathematician** (ninth century) taught at the palace school of the Magnaura, founded by Bardas; Byzantine astrolabes have been preserved. Applied **chemistry** gave Greek fire.',
  { img: 'biz-hospital', leg: 'Byzantine hospital, twelfth century; imagined scene. AI-generated illustration.' },
  'The capital had great libraries and higher education in grammar, rhetoric, philosophy and law. **Photios** (ninth century) compiled the *Bibliotheca*, summaries of about 280 works, many now lost. The *Suda*, in the tenth century, is an encyclopaedia with over thirty thousand entries. Byzantine scholars **copied, commented on and summarised** the classics, and it was from these copies that Europe later recovered much of Greek literature.',
  { h: 'Technology' },
  { lista: [
    '**Domes and pendentives:** Hagia Sophia shows how to set a circular dome on a square base, with **pendentives**; the model of the «cross-in-square and dome» church would be copied from Kiev to Venice.',
    '**Water:** aqueducts, cisterns and fountains for a city without a river.',
    '**Greek fire:** launched by siphons on ships and on walls. The exact composition is unknown; the current consensus is that it contained crude or refined petroleum with resins.',
    '**Automata:** the Magnaura throne, with lions that roared and mechanical birds, is described by the Italian ambassador Liutprand of Cremona, in 949.',
    '**Textiles:** silk and purple dyeing, a trade secret.'
  ] },
  { h: 'War' },
  'With long frontiers and enemies on every side, the Byzantines made **diplomacy** their first weapon: they paid subsidies, married off princesses, baptised princes and sowed discord among adversaries. A tenth-century manual advises that, where possible, it is better to win without a fight. When fighting was needed, they used professional armies, the *tagmata*, and the elite corps of heavy cavalry, the **cataphracts**, supported by archers. The military manuals (Maurice’s *Strategikon*, Leo VI’s *Taktika* and the treatise of Nikephoros Phokas) are among the most complete of the Middle Ages.',
  { img: 'biz-dromon-fogo', leg: 'Dromon using Greek fire, eighth century; conjectural reconstruction. AI-generated illustration.' },
  { img: 'biz-fogo-grego-sifao', leg: 'Greek-fire siphon: hypothetical artistic representation; actual mechanism unknown. AI-generated illustration.' },
  'The navy was the other great force. The **dromon**, a galley with two banks of oars and a Greek-fire siphon at the bow, dominated the eastern Mediterranean. The **Varangian Guard**, of Scandinavians and Anglo-Saxons, served as the emperor’s personal guard. From the eleventh century the Empire relied more and more on mercenaries, and from the thirteenth the Venetian and Genoese fleets replaced its own.',
  { img: 'biz-santa-sofia-interior', leg: 'Interior of Hagia Sophia, Istanbul.' }
];

const personalidades = [
  'Fourteen figures who marked the history of the Empire between 330 and 1453: emperors and empresses, generals, a patriarch, two historians and the sultan who ended it. Where there is legend or debate, this is said.',
  { h: 'Constantine I (c. 272 – 337)' },
  'The first Christian emperor (or at least the first to favour Christianity; he was only baptised near his death). Winner of the civil wars of 312 and 324, he convened the **Council of Nicaea** in 325 and inaugurated **Constantinople** in 330. For the Byzantines he was «equal to the apostles». His monetary reforms (the solidus) lasted centuries.',
  { h: 'Theodosius I (347 – 395)' },
  'Emperor from 379 to 395, he imposed the Nicene faith (Edict of Thessalonica, 380) and banned, through successive laws, pagan sacrifices. He was the last to govern the whole Empire. He had the obelisk of Thutmose III set up in the Hippodrome, where it still stands. He left the Empire divided between his two sons.',
  { h: 'Justinian I (c. 482 – 565)' },
  'Born to peasants in Illyria, he was adopted by his uncle, Emperor Justin I, and reigned from 527 to 565. He spoke Latin as his mother tongue and dreamed of restoring the Roman Empire. He gathered the laws into the *Corpus Iuris Civilis*, raised Hagia Sophia and reconquered North Africa and Italy, but left the state in debt, with wars in Persia and the Balkans and a plague. Procopius, who served him, wrote both the praise of the *Buildings* and the *Secret History*, a pamphlet against him and Theodora.',
  { img: 'biz-justiniano-sao-vital', leg: 'Justinian and his retinue, San Vitale mosaic, Ravenna.' },
  { h: 'Theodora (c. 500 – 548)' },
  'Daughter of a bear-keeper at the Hippodrome and a former actress, she married Justinian around 525 and was a weighty adviser. According to Procopius, during the Nika Riot she refused to flee, saying that purple makes a fine burial shroud. She reformed laws on marriage and divorce, protected women, fought the trafficking of girls and shielded the Monophysites. The hostile *Secret History* is an unreliable source on her earlier life.',
  { img: 'biz-teodora-sao-vital', leg: 'Theodora and her attendants, San Vitale mosaic, Ravenna.' },
  { h: 'Belisarius (c. 505 – 565)' },
  'Justinian’s general. He beat the Persians at Dara (530), put down the Nika Riot, destroyed the Vandal kingdom in Africa (533–534) and took Rome and Ravenna from the Ostrogoths (536–540), with very small forces. He was always regarded with suspicion at court. **Narses**, an Armenian eunuch who rose from treasurer to general, completed the conquest of Italy in 552–553. The story of Belisarius begging, blind, is a late legend.',
  { h: 'Heraclius (c. 575 – 641)' },
  'Son of the exarch of Africa, he overthrew the tyrant Phocas in 610, when the Empire was nearly lost. In 622–628, in a bold campaign through the Caucasus, he defeated the Persians and recovered the True Cross (restored in Jerusalem in 629 or 630). But within a few years he lost Syria and Egypt to the Arabs. Around 629 he adopted the Greek title of *basileus*, in an Empire where Greek was gaining ground over Latin.',
  { img: 'biz-pratos-david', leg: 'Plate with the Battle of David and Goliath, silver, around 629–630, Metropolitan Museum.' },
  { h: 'Leo III the Isaurian (c. 685 – 741)' },
  'A soldier from the eastern frontier, he took power in 717 and defeated the Arab siege of 717–718. He reorganised the state and the laws, and began iconoclasm, with debated dates (726 or 730). He founded a dynasty that ruled until 802.',
  { h: 'Irene (c. 752 – 803)' },
  'An empress who ruled first as regent for her son and then, between 797 and 802, alone, the first woman to govern the Empire on her own. She restored the cult of images at the council of Nicaea (787). She had her son Constantine VI blinded, in 797, to stay in power. She was overthrown in 802. In the year 800 the pope crowned Charlemagne emperor, which some explain by the throne in Constantinople being vacant, a debated interpretation.',
  { h: 'Photios (c. 815 – 893)' },
  'One of the greatest scholars of the Empire, he was patriarch of Constantinople and clashed with Pope Nicholas I. He compiled the *Bibliotheca*, or *Myriobiblos*, with summaries and comments on about 280 books, and supported the mission to the Slavs. He is a central figure of the «first Byzantine humanism».',
  { h: 'Basil II (958 – 1025)' },
  'Emperor for almost fifty years (976–1025), he tamed the great lords, defeated two military rebellions and conquered Bulgaria (1018). He ruled like a soldier: unmarried, without luxury, with a full treasury. He allied with Vladimir of Kiev and created the Varangian Guard. After his death the Empire, still at its peak, entered a phase of instability.',
  { img: 'biz-zoe-mosaico', leg: 'Zoe and Constantine IX Monomachos mosaic, Hagia Sophia.' },
  { h: 'Michael Psellos (1018 – c. 1078)' },
  'A scholar, philosopher, statesman and writer, he served as adviser to several emperors in the eleventh century. His *Chronographia*, narrating the reigns from Basil II to Michael VII, is one of the great texts of Byzantine literature, full of psychological portraits and intrigue. He revived Plato and ancient philosophy, though he was also a man of the Church.',
  { h: 'Anna Komnene (1083 – c. 1153)' },
  'Daughter of Emperor Alexios I, she is considered the first important woman historian. Accused of plotting against her brother John II (her involvement is debated), she withdrew to a convent and wrote the **Alexiad**, a biography of her father in fifteen books (composed around 1148). She describes in detail the First Crusade, seen from Constantinople, and the «Franks» who arrived in 1096. She was also versed in medicine and philosophy.',
  { h: 'Constantine XI Palaiologos (1405 – 1453)' },
  'The last emperor. Despot of the Morea before taking the throne in 1449, he sought Western help and accepted the union of the churches, without success. In 1453 he stayed in the besieged city and died fighting, according to tradition sword in hand and without insignia; his body was never identified with certainty. For the Greeks he became a national hero, surrounded by legend.',
  { h: 'Mehmed II (1432 – 1481)' },
  'The Ottoman sultan who took Constantinople aged 21. He studied languages and history, spoke Greek and admired Alexander and Caesar, and adopted the title «Caesar of Rome». He made the city his capital, repopulated it, protected the Greek patriarch and the Jewish community, and had himself painted by Italian artists. A patron and a conqueror, the fall of 1453 gave him, and the Ottomans, the prestige of a great empire.'
];

const legado = [
  'The Byzantine Empire vanished in 1453, but it left deep marks on religion, law, art, writing and the memory of many peoples.',
  { h: 'Law' },
  'The *Corpus Iuris Civilis* reached the medieval West through Italy, where it was rediscovered and taught at **Bologna** from the eleventh century. From there it passed into the European universities and shaped the civil law of Portugal, Spain, France, Germany and their former colonies. Every time a law student learns concepts such as «person», «property» or «contract», they follow categories that passed through Justinian.',
  { h: 'Preserving the classics' },
  'Most of the ancient Greek texts we know reached us through Byzantine manuscripts, copied and studied in Constantinople or in monasteries. Among them is the famous **Archimedes Palimpsest**: a tenth-century copy of the sage’s works, erased in 1229 by a monk to reuse the parchment for a prayer book, and recovered in our own day by imaging techniques.',
  { img: 'biz-palimpsesto-arquimedes', leg: 'Unfolded sheet from the Archimedes Palimpsest; image from the Walters Museum project.' },
  'As the Ottomans advanced, many scholars fled to Italy, bringing books and the teaching of Greek: **Manuel Chrysoloras** taught in Florence in 1397, Cardinal **Bessarion** bequeathed his library to Venice, and Aldus Manutius’s press published the Greek classics. This «bridge» is one of the origins of the Italian Renaissance.',
  { h: 'Art and architecture' },
  'Byzantine art is religious and symbolic, with frontal figures, large eyes and gold backgrounds, meant to show the divine and not reality. **Mosaics** of gold and glass covered domes and vaults; **icons** painted on wood accompanied worship; **illuminations** decorated manuscripts; and **ivories**, enamels and silver adorned relics and liturgical objects. In the fourteenth and fifteenth centuries the so-called **Palaiologan renaissance** (the frescoes of Chora, the icons of Theophanes the Greek, and of Andrei Rublev in Russia) shows a more expressive and lively art.',
  'In architecture, churches with a **dome over a cross-in-square plan**, with mosaics and an iconostasis, were the model for the Orthodox world. Their echo can be seen in **St Mark’s in Venice**, in **St Sophia in Kiev** and in the churches of Serbia, Bulgaria and Russia. The Ottomans, too, copied Hagia Sophia in the great mosque tradition of Sinan.',
  { img: 'biz-kiev-santa-sofia', leg: 'Orans mosaic, Saint Sophia Cathedral, Kyiv.' },
  { h: 'Russia, the Balkans and the «Third Rome»' },
  'Byzantine faith, writing and art were the foundation of the culture of **Kiev**, **Bulgaria**, **Serbia** and **Romania**. **Cyrillic**, created in the circle of the disciples of Cyril and Methodius, is used today by hundreds of millions of people. The Palaiologan **double-headed eagle** was adopted by Moscow, Serbia and Albania. After 1453 Russian monks argued that Moscow was the «**Third Rome**» (the thesis of the monk Philotheus, c. 1510), and the tsars saw themselves as heirs of the emperors. Byzantine heritage also survived under Ottoman rule, around the **Ecumenical Patriarchate**, which is still based in Istanbul.',
  { img: 'biz-athos-lavra', leg: 'Main church (katholikon) of the Great Lavra, Mount Athos.' },
  { h: 'The myth of «decadence»' },
  { caixa: 'An idea to undo', texto: 'Enlightenment authors such as Gibbon and Voltaire took «Byzantine» as a synonym for corrupt, scheming and decadent. Historians today, on the contrary, show a state of exceptional resilience: it survived invasions, civil wars, epidemics and the capture of the capital in 1204. It is true that there were coups, intrigues and cruelties, but these were not unique to Byzantium. The word «byzantine» is still used, in English and in Portuguese, to mean «complicated and pointless», and it is unfair.' },
  { h: 'Where to visit' },
  { lista: [
    '**Istanbul (Turkey):** Hagia Sophia, the Chora Church (Kariye), the Theodosian Walls, the Hippodrome, the Basilica Cistern, the archaeological museums. Check opening hours and visiting rules, which have changed in recent years.',
    '**Ravenna (Italy):** San Vitale and Sant’Apollinare in Classe, with sixth-century mosaics, a World Heritage Site.',
    '**Venice (Italy):** St Mark’s Basilica, with mosaics, icons and the bronze horses.',
    '**Thessalonica and Mistra (Greece):** Byzantine churches and the ghost town of Mistra, both World Heritage Sites; **Mount Athos** (restricted to men, with permission) and **Meteora**.',
    '**Sinai (Egypt):** St Catherine’s Monastery, founded by Justinian, with the oldest icons.',
    '**Kiev (Ukraine):** St Sophia Cathedral, with eleventh-century Byzantine mosaics.',
    '**Museums:** Byzantine Museum of Athens, Louvre, British Museum, Metropolitan Museum of New York and Dumbarton Oaks (Washington).'
  ] }
];

const quiz = [
  { p: 'What did the inhabitants of the «Byzantine Empire» call themselves?', op: ['Byzantines', 'Pagan Greeks', 'Romans (Rhomaioi)', 'Hellenes'], certa: 2, exp: '«Byzantine» is a modern name; they were Romans and the state was the Roman Empire.' },
  { p: 'In what year was Constantinople inaugurated?', op: ['330', '395', '476', '527'], certa: 0, exp: 'Constantine inaugurated the «New Rome» on 11 May 330.' },
  { p: 'Which revolt, in 532, nearly toppled Justinian?', op: ['The Nika Riot', 'The Zealot revolt', 'The revolt of Spartacus', 'The iconoclast revolt'], certa: 0, exp: 'The Blues and Greens united in the Hippodrome, and the cry was «Nika!» (victory).' },
  { p: 'Who is said to have persuaded Justinian not to flee during the revolt?', op: ['Belisarius', 'Theodora', 'Tribonian', 'Narses'], certa: 1, exp: 'According to Procopius, Empress Theodora refused to flee.' },
  { p: 'Which legal work of Justinian underlies European civil law?', op: ['Code of Hammurabi', 'Law of the Twelve Tables', 'Corpus Iuris Civilis', 'Napoleonic Code'], certa: 2, exp: 'The Corpus Iuris Civilis (529–534) gathered Roman law.' },
  { p: 'Which incendiary weapon helped save Constantinople from the Arab sieges?', op: ['Greek fire', 'Boiling oil', 'Gunpowder', 'The trebuchet'], certa: 0, exp: 'Greek fire, launched from siphons, burned even on water; its formula is unknown.' },
  { p: 'Which emperor defeated the Persians in 628 but saw Egypt and Syria pass to Islam?', op: ['Justinian', 'Basil II', 'Constantine XI', 'Heraclius'], certa: 3, exp: 'Heraclius defeated Khosrow II, but the Arabs conquered the eastern provinces between 634 and 642.' },
  { p: 'What was iconoclasm?', op: ['The banning of religious images', 'A heresy about the Holy Spirit', 'An ecumenical council', 'The burning of books'], certa: 0, exp: 'There were two phases (c. 726/730–787 and 815–843), ended by the «Triumph of Orthodoxy» in 843.' },
  { p: 'Which emperor conquered Bulgaria in 1018 and was known as the «Bulgar-Slayer»?', op: ['Nikephoros Phokas', 'Alexios I', 'Basil II', 'Justinian'], certa: 2, exp: 'Basil II (976–1025) brought the Empire to its medieval peak.' },
  { p: 'In what year did the Schism between the Churches of Rome and Constantinople occur?', op: ['1054', '787', '1204', '1453'], certa: 0, exp: 'In 1054 the pope’s legates and the patriarch excommunicated each other; the separation was gradual.' },
  { p: 'Which event of 1204 shook the Empire deeply?', op: ['The Mongol invasion', 'The sack of Constantinople by the crusaders', 'The Black Death', 'The fall of Antioch'], certa: 1, exp: 'The Fourth Crusade took and sacked the city, which was only recovered in 1261.' },
  { p: 'Who wrote the «Alexiad», the biography of Alexios I?', op: ['Procopius', 'Michael Psellos', 'Photios', 'Anna Komnene'], certa: 3, exp: 'Anna Komnene, the emperor’s daughter, is the first important woman historian.' },
  { p: 'Who defeated the Byzantines at Manzikert in 1071?', op: ['The Seljuk Turks', 'The Normans', 'The Bulgars', 'The Venetians'], certa: 0, exp: 'Sultan Alp Arslan captured Emperor Romanos IV Diogenes.' },
  { p: 'Who was the last Byzantine emperor?', op: ['Michael VIII', 'John VIII', 'Constantine XI Palaiologos', 'Mehmed II'], certa: 2, exp: 'Constantine XI died defending the city on 29 May 1453.' },
  { p: 'Which sultan conquered Constantinople in 1453, aged 21?', op: ['Mehmed II', 'Suleiman', 'Bayezid I', 'Murad II'], certa: 0, exp: 'Mehmed II took the city after a 53-day siege and converted Hagia Sophia into a mosque.' }
];

export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };
