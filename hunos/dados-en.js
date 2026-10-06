// HUNS — full English content. Same structure and same image slots as the Portuguese version (dados.js).
// Dates follow the “middle chronology”. Almost everything we know about the Huns comes from Roman and Gothic authors writing from the outside, often with fear or hostility; the Huns themselves left no texts. What is hypothesis or legend is flagged. AD.

const visao = [
  { caixa: 'In brief', texto: [
    'The **Huns** were a confederation of mounted-archer peoples who came from the steppes east of the **Volga**, appeared in Europe around **AD 370 – 376**, and within a century shook the Roman and Germanic worlds. First they pushed the **Alans** and the **Goths** towards the Danube, and so, without meaning to, set off the crisis that led to the Roman defeat at **Adrianople (378)**. In the 5th century, based in **Pannonia** (the plain of the Danube and the Tisza, in present-day Hungary), their chiefs began to collect **tribute in gold** from the Roman emperors, who paid to avoid war.',
    'The best-known moment was the reign of **Attila** (c. 434 – 453), first with his brother **Bleda** and then alone. Attila extracted ever larger sums of gold from the Eastern Roman Empire, devastated the Balkans (441 – 447), invaded **Gaul**, where he fought on the **Catalaunian Plains (451)** against the Roman general **Aetius** and the Visigoths, and then **Italy** (452). He died in **453**, on his wedding night; a year later, at the battle of the **Nedao (454)**, the subject peoples rebelled and his empire fell apart. The Huns never had writing, cities or a lasting state, but their name remained a synonym for fierce invaders, partly deservedly and partly because of the legends that attached to them.'
  ] },
  { img: 'hun-mapa-imperio', leg: 'Map of the Hunnic empire in Attila’s time (c. 450), from the plain of the Danube and the Tisza to the frontiers of the Roman Empire.' },
  { h: 'Where it was' },
  'The Huns came from the **Eurasian steppe**, the immense belt of grassland that runs from Mongolia to the Danube and where life rests on the horse, livestock and mobility. When they first appear in the sources, around 370, they are east of the Don and the Volga; a few years later they cross the Don, the Dnieper and the Dniester and reach the lower Danube. In the first decades of the 5th century their chiefs dominate the **Hungarian plain**, above all **Pannonia** (west of the Danube) and the lands between the Danube and the **Tisza**, where the steppe continues, in miniature, in the middle of Europe.',
  'In Attila’s time Hunnic power stretched, broadly, from the **Rhine** (through Germanic vassals) to the plains of present-day **Ukraine**, and from the Roman Danube to the shores of the Black Sea, but the exact limits were never defined: it was a rule over **peoples and chiefs**, not over a territory with borders. The centre was Attila’s court, somewhere between the Danube and the Tisza; its exact location has never been identified.',
  { img: 'hun-estepe', leg: 'The Eurasian steppe, the world from which the Hunnic horsemen came.' },
  { img: 'hun-hortobagy', leg: 'The Hungarian plain (Hortobágy): the “European” steppe where the Huns settled in the 5th century.' },
  { h: 'When they existed' },
  'The history of the Huns in Europe is short, about a century, but intense. The dates below are approximate and follow the usual chronology; the phases have conventional names, not names the Huns themselves used.',
  { tabela: { cab: ['Phase', 'Approximate dates', 'What marks it'], linhas: [
    ['Origins (debated)', 'before c. 370', 'Peoples of steppe horsemen east of the Volga; a link with the Xiongnu of Central Asia is a hypothesis, not a fact'],
    ['Arrival in Europe', 'c. 370 – 395', 'Defeat of the Alans and the Goths; the Goths ask for asylum in the Empire (376); Adrianople (378); raids into the Caucasus and across the Danube'],
    ['Scattered chiefs', 'c. 395 – 420', 'Several chiefs (Balamber, in tradition; Uldin) and bands serving Rome or against it; Huns as mercenaries'],
    ['Kings of Pannonia', 'c. 420 – 434', 'Octar and Rua; the Huns settle on the plain of the Danube and the Tisza and begin to collect tribute from Constantinople'],
    ['Attila and Bleda', '434 – 453', 'The height: Margus (435), the Balkans (441 – 447), Gaul and the Catalaunian Plains (451), Italy (452); Attila’s death (453)'],
    ['Collapse and dispersal', '454 – c. 469', 'The Nedao (454), revolt of the subject peoples; Attila’s sons fight over power; death of Dengizich (469)']
  ] } },
  { h: 'Who were the Huns?' },
  'We do not know for certain. The Huns **left no writing**, and their language is known only from a few names (*Attila*, *Bleda*, *Rua*, *Ellac*) whose origin is disputed: some look Germanic, others Turkic or Iranian, and there is no consensus about the language they spoke. Ancient authors describe them from outside, and with prejudice.',
  'The most widespread idea is that they descend from the **Xiongnu**, the confederation of nomadic peoples that dominated Mongolia and northern China from the 3rd century BC to the 1st century AD (and that Chinese sources describe). The hypothesis was launched in 1748 by the French scholar **Joseph de Guignes**, on the basis of similar names and chronology, and is still defended by some and rejected by others. It is a **hypothesis**, not a fact: between the Xiongnu, who vanish from Chinese sources in the 2nd century AD, and the Huns, who appear in Europe in the 4th, lies a gap of about two centuries with no documentation. **Genetics** helps a little but does not settle it: ancient-DNA studies published between 2018 and 2025 show that the Huns were a **mosaic of origins**, with elites who show Central and East Asian ancestry and many individuals of mostly European descent, and that some Hunnic elites are distantly related to Xiongnu elites; the picture is one of **mixing and mobility over generations**, not of a mass migration of a single people.',
  { img: 'hun-xiongnu-mapa', leg: 'Map of the Xiongnu empire (3rd century BC – 1st century AD), possible ancestors of the Huns according to a debated hypothesis.' },
  { h: 'Why they matter' },
  { lista: [
    '**Domino effect:** the arrival of the Huns pushed Alans and Goths into the Empire and contributed to the cycle of migrations and invasions that, in 476, ended the Western Roman Empire (one factor among many).',
    '**Attila:** one of the best-known names of Late Antiquity, and one of the few “barbarian” figures of whom we have a portrait from a direct witness, the diplomat **Priscus**.',
    '**Mounted warfare:** the composite bow and the mobility of the steppe showed again what cavalry could do against infantry armies.',
    '**The economy of tribute:** the Huns were above all an empire of **extortion**, living on Roman gold, a lesson in how a state can buy peace and be ruined by it.',
    '**Legend and memory:** from Attila came King Etzel of the *Nibelungs*, the “scourge of God”, and the idea of “hun” as an insult, and fact has to be separated from myth.',
    '**The question of origin:** who they were, where they came from, what they spoke, is one of the great open problems of Eurasian history.'
  ] },
  { img: 'hun-delacroix', leg: 'Attila and His Hordes Overrun Italy and the Arts, painting by Eugène Delacroix, c. 1843 – 1847, Palais Bourbon, Paris; the romantic, and partisan, image of the “barbarian”.' },
  { caixa: 'The Huns today', texto: 'There are no “Huns” today, and the Hungarians are **not direct descendants** of the Huns: they reached the plain of the Danube around 895 – 900, almost half a millennium after Attila. But the legend of Hunnic ancestry was cultivated in medieval Hungary (medieval Hungarian chronicles present Attila as an ancestor) and is still strong in popular culture. On the scientific side, ancient DNA and the excavation of tombs in Pannonia, with cauldrons, jewellery and deformed skulls, are changing what we know: the image of a “faceless horde” gives way to that of a complex society of diverse origins and great mobility.' }
];

const linha = [
  'This timeline runs from the debated origins on the steppes to the disappearance of the Huns as a political force. Almost all the dates come from **Roman and Gothic historians** (Ammianus Marcellinus, Priscus, Jordanes and chroniclers), who do not always agree; where there is doubt, it is said.',
  { linha: [
    { d: '3rd century BC – 2nd century AD', t: 'The Xiongnu (context, not Huns)', x: 'In the east, on the steppes of Mongolia, the **Xiongnu** form a powerful nomadic confederation, a rival of Han China. The northern branch falls apart in the mid-2nd century AD. For almost three centuries it has been thought that some of these peoples migrated west and gave rise to the Huns, but **there is no direct proof**: it is the most famous hypothesis and remains under debate.' },
    { d: '2nd century AD', t: 'Ptolemy’s “Khounoi”', x: 'The Greek geographer **Ptolemy** mentions a people called the *Khounoi* between the Baltic and the Black Sea, in eastern Europe. It is not certain that they are the same Huns, but it shows that the name was in circulation.' },
    { d: 'c. 311 – 313', t: 'A Sogdian letter', x: 'One of the Sogdian “Ancient Letters”, of c. 313, speaks of a people called the **Xwn** who took Luoyang and other Chinese cities. Some historians (such as **Étienne de la Vaissière**) see here the name of the Huns and a link to the Xiongnu; others do not. The matter remains open.' },
    { d: 'c. 370 – 375', t: 'The Huns cross the Volga and the Don', x: 'According to **Ammianus Marcellinus** (c. 390), a people “little known”, who lived beyond the marshes of the Sea of Azov, threw themselves upon the **Alans** (nomads who spoke an Iranian language) and defeated them, absorbing many. The historian gives a very hostile description of the newcomers.' },
  ] },
  { img: 'hun-chegada-europa', leg: 'Hunnic horsemen attacking an Alan camp on the steppe, c. 375; conjectural reconstruction. AI-generated illustration.' },
  { img: 'hun-amiano', leg: 'Ammianus Marcellinus (c. 330 – after 391), the Roman historian who left the first description of the Huns.' },
  { linha: [
    { d: 'c. 375 – 376', t: 'Fall of the Greuthungi kingdom', x: 'The Huns attack the kingdom of the **Greuthungi** (Ostrogoths), in present-day Ukraine. According to Ammianus, the old king **Ermanaric** killed himself in despair; according to **Jordanes** (6th century), who speaks of a Hunnic “king” **Balamber**, that chief defeated the Ostrogoths. How these two versions fit together, and whether Balamber existed at all, are disputed.' },
    { d: '376', t: 'The Goths on the Danube', x: 'The **Tervingi** (Visigoths), in flight, ask Emperor **Valens** for asylum and cross the Danube. Hunger, the corruption of Roman officials and a lack of organization lead to revolt. It is the start of a six-year conflict.' },
    { d: '9 August 378', t: 'Adrianople', x: 'Near **Adrianople**, in Thrace, the Roman army is destroyed by the Goths, and Emperor **Valens** dies. The Huns are not the protagonists of this battle, but they were its distant cause: without their pressure, the Goths would not have sought refuge in the Empire.' },
  ] },
  { img: 'hun-adrianopla', leg: 'The battle of Adrianople (378), in a modern depiction; the Huns were the distant cause of this Roman defeat.' },
  { linha: [
    { d: '395', t: 'Raid through the Caucasus', x: 'Hunnic bands cross the Caucasus and ravage Armenia and parts of Syria and Cappadocia, while others cross the frozen Danube. Authors such as **Jerome** and the poet **Claudian** testify to the fear they caused. The Empire, divided between the sons of Theodosius, hardly reacts.' },
    { d: '400 – 408', t: 'Uldin', x: 'The chief **Uldin**, who dominates the lower Danube, is the first well-documented Hunnic historical figure. In 400 he kills the rebel Gothic general **Gainas** and sends his head to the Romans in Constantinople. In 406 he helps **Stilicho** defeat **Radagaisus** near Fiesole. In 408 he invades Thrace, is repelled, and his warriors desert, bribed by Rome; Uldin escapes and vanishes from the sources.' },
    { d: 'c. 405 – 425', t: 'Huns in Roman service', x: 'Rome turns to the Huns as mercenaries. The young **Aetius**, a future Roman general, lives as a hostage among them; later he will use his Hunic friends to play politics in Italy and Gaul. The link creates an ambiguous relationship: the Huns are at once enemy and ally.' },
    { d: 'c. 422 – 433', t: 'Octar, Rua and Pannonia', x: 'Between c. 420 and 430, **Octar** and **Rua** (or *Ruga*, *Rugila*) are the main chiefs. In c. **422** the Huns raid Thrace, and Rome pays them 350 pounds of gold a year. Octar dies in c. **430**, in a campaign against the Burgundians. Around **433**, according to one tradition, Aetius cedes land in **Pannonia** to the Huns (the date and terms are disputed), which makes them direct neighbours of both halves of the Empire.' },
    { d: '434', t: 'Death of Rua; Attila and Bleda', x: 'Rua dies as he prepares a campaign against Constantinople; he is succeeded by his nephews **Bleda** and **Attila**, sons of his brother Mundzuk. They reign jointly: the exact division of command between them is unknown.' },
    { d: '435', t: 'Treaty of Margus', x: 'At **Margus** (near present-day Požarevac, Serbia), the envoys of Theodosius II accept the demands of Attila and Bleda: the annual tribute rises from **350 to 700 pounds of gold** (about 230 kg), Hunnic fugitives must be returned and the frontier markets are to stay open. It is the two kings’ first great diplomatic triumph.' },
    { d: '436 – 437', t: 'The end of the Burgundian kingdom of Worms', x: 'Aetius uses Hunnic mercenaries to destroy the kingdom of the **Burgundians** on the Rhine (c. 436 – 437); King **Gundicharius** dies. This episode, much distorted, will be the basis of the epic poem of the *Nibelungs*, centuries later.' },
  ] },
  { img: 'hun-nis', leg: 'The fortress of Niš, on the site of ancient Naissus, a city taken by the Huns in 441 – 443.' },
  { linha: [
    { d: '441 – 442', t: 'War in the Balkans', x: 'While the eastern army is busy in Sicily against the Vandals, Attila strikes. According to **Priscus**, the pretext was the bishop of **Margus**, who had supposedly crossed the river and desecrated royal Hunnic tombs. The cities of **Viminacium**, **Singidunum** (Belgrade) and **Sirmium** fall. A truce follows.' },
    { d: '443', t: 'Second campaign and new treaty', x: 'Attila takes **Ratiaria**, **Naissus**, **Serdica** (Sofia) and **Philippopolis** and comes close to Constantinople. The minister **Anatolius** negotiates peace: Rome pays **6,000 pounds of gold** in arrears and agrees to pay **2,100 pounds a year**, three times the previous amount.' },
    { d: 'c. 445', t: 'Attila eliminates Bleda', x: 'According to Roman sources (the *Chronicle* of **Marcellinus Comes**, 445), **Attila** has his brother killed and becomes sole king. The details are unclear: tradition and Priscus speak of a murder, and we do not know what really happened.' },
    { d: '447', t: 'The Utus, the earthquake and the walls', x: 'In 447 Attila attacks again: he defeats the general **Arnegisclus** by the river **Utus** (Vit), in Bulgaria, and reaches Thermopylae and the Chersonese (Gallipoli). Constantinople had just been shaken by an earthquake that brought down part of its walls; the prefect **Constantine** rebuilds them in about two months, and Attila does not attack the city. The peace of 448 forces Rome to evacuate a broad strip of territory south of the Danube, and to pay more.' },
  ] },
  { img: 'hun-muralhas-teodosianas', leg: 'The Theodosian Walls of Constantinople, rebuilt and strengthened after the earthquake of 447, when Attila threatened the city.' },
  { linha: [
    { d: '449', t: 'Priscus’s embassy', x: 'The diplomat and historian **Priscus of Panium** accompanies **Maximin**, envoy of Theodosius II, to Attila’s court, and describes what he saw: the king, simple and austere amid the luxury of his guests, the banquets, the wooden palace, the bards. It is the only direct portrait we have of Attila. The journey also served as cover for a plot to assassinate the king, hatched in Constantinople by the eunuch **Chrysaphius** (and which failed).' },
    { d: '450', t: 'Honoria, Marcian', x: 'The sister of the Western emperor, **Honoria**, is said to have sent Attila her ring, asking for help to escape a forced marriage; Attila claims her as his bride and half of the Western Empire as her dowry. In Constantinople, the new emperor **Marcian** (450) refuses to pay more tribute.' },
    { d: '451', t: 'The invasion of Gaul', x: 'Attila crosses the Rhine in spring, with an army that included many Germanic subjects (Ostrogoths, Gepids, Heruli and others). He sacks **Metz** (April) and besieges **Orléans**, but Aetius arrives in time, with a Roman army and allies, among them the **Visigoths** of King **Theodoric I**.' },
    { d: '20 June 451 (date disputed)', t: 'Battle of the Catalaunian Plains', x: 'Near **Troyes** (the exact site, *Locus Mauriacus*, is disputed), Attila, with the Huns and their allies, faces Aetius and Theodoric. Theodoric dies; his son **Thorismund** takes command. Jordanes says 165,000 men were killed, a number without credibility. Attila withdraws. The outcome is hard to classify: it is a **tactical draw**, but a strategic defeat for the king, who loses the initiative.' },
  ] },
  { img: 'hun-catalaunicos-mapa', leg: 'The Catalaunian Plains, in Champagne (France), where the battle of 451 was fought; the exact site is still disputed.' },
  { linha: [
    { d: '452', t: 'The invasion of Italy', x: 'Attila crosses the Julian Alps, takes **Aquileia** after a long siege and destroys it, then advances on **Milan** and **Pavia**. According to one tradition, refugees founded **Venice**, a legend rather than a fact. Near the river **Mincio**, a Roman embassy that included **Pope Leo I** meets Attila, who withdraws. The probable causes: hunger and disease in his army, lack of supplies, and Marcian’s troops attacking Pannonia.' },
  ] },
  { img: 'hun-aquileia-cerco', leg: 'Attila’s siege of Aquileia, 452; conjectural reconstruction. AI-generated illustration.' },
  { img: 'hun-leao-atila', leg: 'The meeting of Pope Leo I and Attila, fresco by Raphael and workshop, c. 1514, Vatican Stanze; the presence of St Peter and St Paul in the sky is a later tradition.' },
  { img: 'hun-galla-placidia', leg: 'Mausoleum of Galla Placidia, Ravenna: the court of Honoria and Valentinian III, whose sister, according to tradition, sent the ring to Attila.' },
  { linha: [
    { d: '453', t: 'Death of Attila', x: 'Attila dies, according to Priscus (quoted by Jordanes), on his wedding night with a young woman named **Ildico**, of a haemorrhage: he lay on his back, drunk, and choked on the blood of a nosebleed. Other versions speak of murder, but there is no proof; a natural cause is the most likely. Legend says he was buried in three coffins, of gold, silver and iron, and that the gravediggers were killed (Jordanes; there is **no archaeological evidence** for any of this).' },
  ] },
  { img: 'hun-funeral-atila', leg: 'Attila’s funeral according to Jordanes (a ring of horsemen, a silk tent); a reconstruction of a tradition, not of a find. AI-generated illustration.' },
  { linha: [
    { d: '454', t: 'The battle of the Nedao', x: 'Attila’s sons (**Ellac**, **Dengizich**, **Ernak**) fight over power, and the subject peoples rebel under the Gepid king **Ardaric**. On a river in Pannonia called the **Nedao** (its location is unknown), Ellac is killed and the Hunnic army defeated. The empire falls apart within months. In that same year Aetius is murdered by Emperor Valentinian III.' },
  ] },
  { img: 'hun-nedao', leg: 'The battle of the Nedao (454), in which the subject peoples defeated the Hunnic army; conjectural reconstruction. AI-generated illustration.' },
  { linha: [
    { d: 'c. 454 – 469', t: 'The last Huns', x: 'The surviving Hunnic groups fall back to the steppe north of the Black Sea. In **468 – 469**, **Dengizich** attacks the Eastern Empire, is killed, and his head is displayed in Constantinople. From then on the name “Huns” appears less and less, and the groups that survived mixed with other steppe peoples.' },
    { d: '476', t: 'The end of the Western Empire', x: 'Odoacer deposes **Romulus Augustulus**, son of **Orestes**, the Roman who had been Attila’s secretary. The Western Roman Empire ends; the Eastern Empire (Byzantium) continues. The Huns had already disappeared, but the crisis into which the West fell owed much to the years of Hunnic pressure.' }
  ] },
  { h: 'Rediscovery' },
  'In the Middle Ages the image of Attila split in two: the **monster** (the “scourge of God”, a divine punishment on a sinful world, in Latin texts) and the **king** of Germanic epic (Etzel in the *Nibelungs*; Atli in the Norse sagas). In medieval Hungary, chronicles (such as that of **Simon of Kéza**, c. 1283, and the *Illuminated Chronicle*, 14th century) made him an ancestor of the Hungarians. In the 18th century **Joseph de Guignes** linked the Huns to the Xiongnu, and in the 20th the Austrian **Otto Maenchen-Helfen** (*The World of the Huns*, published in 1973) produced the critical synthesis of sources and archaeology that is still the reference. Since 2018, **ancient-DNA** studies (Damgaard and colleagues; Maróti and colleagues, 2022; Gnecchi-Ruscone and colleagues, 2025) have yielded new, and unexpected, data on the origin and diversity of the Huns.'
];

const mapa = [
  'The Huns had **no known cities**: they lived in camps of wagons, tents and wooden houses, and moved with the pastures and with war. So the Hunnic “map” is made mostly of **Roman places they attacked** and areas they passed through. The table gathers the most important.',
  { tabela: { cab: ['Place', 'Where (today)', 'When', 'Importance'], linhas: [
    ['Hungarian plain / Pannonia', 'Hungary', 'c. 420 – 454', 'Centre of Hunnic power; Attila’s court between the Danube and the Tisza (exact location unknown)'],
    ['Margus', 'Near Požarevac, Serbia', '435; 441', 'Site of the treaty of 435; sacked in 441 after the affair of the bishop'],
    ['Singidunum', 'Belgrade, Serbia', '441', 'Roman fortress on the Danube, destroyed'],
    ['Viminacium', 'Kostolac, Serbia', '441', 'Capital of the province of Upper Moesia, destroyed'],
    ['Sirmium', 'Sremska Mitrovica, Serbia', '441 – 442', 'One of the capitals of the Empire in the 4th century; taken by the Huns'],
    ['Naissus', 'Niš, Serbia', '443', 'City devastated; Priscus describes the ruins and the abandoned sick'],
    ['Serdica and Philippopolis', 'Sofia and Plovdiv, Bulgaria', '443', 'Cities taken during the second campaign'],
    ['Utus', 'River Vit, Bulgaria', '447', 'Battle in which Arnegisclus is defeated'],
    ['Constantinople', 'Istanbul, Turkey', '447', 'Capital of the East, never taken; its walls stopped the Huns'],
    ['Metz and Orléans', 'France', '451', 'Metz sacked; Orléans besieged and saved by Aetius'],
    ['Catalaunian Plains', 'Champagne, France', '451', 'Great battle between Attila and Aetius with the Visigoths'],
    ['Aquileia', 'Friuli, Italy', '452', 'Great port of the Adriatic, destroyed'],
    ['Milan and Pavia', 'Lombardy, Italy', '452', 'Cities taken without great resistance']
  ] } },
  { img: 'hun-mapa-campanhas', leg: 'Diagram of Attila’s campaigns in the Balkans (441 – 447), Gaul (451) and Italy (452). AI-generated map. (Illustrative image generated by AI.)' },
  { h: 'Pannonia and Attila’s court' },
  '**Pannonia** was a Roman province, between the Danube and the Alps, which from c. 433 passed in part under Hunnic control. In its interior, on the great plain where the Danube and the **Tisza** run almost parallel, stood Attila’s **court**. Priscus, who was there in 449, describes a large settlement of **wooden houses**, with a palace of planed logs surrounded by a palisade, and a stone bathhouse built by a Roman prisoner. No one has yet found this “capital” with certainty: the most widespread hypothesis is that it lay between the Danube and the Tisza, east of the river.',
  { img: 'hun-panonia', leg: 'Map of the Roman province of Pannonia, where the Huns settled in the 5th century.' },
  { img: 'hun-aquincum', leg: 'Ruins of Aquincum (Budapest), a Roman city of Pannonia, near the territory dominated by the Huns.' },
  { h: 'The Balkans: gold and devastation' },
  'The campaigns of 441 – 447 devastated the Danube. Cities such as **Singidunum**, **Viminacium**, **Sirmium** and **Naissus** were taken with **siege engines** (rams and towers), which the Huns learned from the Romans, perhaps with the help of deserters or prisoners. Priscus, who passed through Naissus in 449, found the city almost deserted and the river banks still covered with the bones of the dead. But Constantinople, defended by its walls, was never taken.',
  { img: 'hun-danubio', leg: 'The Danube, the frontier between the Roman Empire and the “barbarian” world, and the axis of the Hunnic campaigns in the Balkans.' },
  { h: 'Gaul and Italy' },
  'In 451 Attila left Pannonia and crossed Germania to the **Rhine**. In April he sacked **Metz**; he went on to **Orléans**, which held out until Aetius arrived. The battle of the **Catalaunian Plains** decided the fate of the campaign. In 452 Attila turned to **Italy**: **Aquileia** was razed, and **Milan** and **Pavia** were taken. Instead of marching on Rome, the king withdrew.',
  { img: 'hun-aquileia', leg: 'Roman ruins at Aquileia, Italy, a great Adriatic city destroyed by Attila in 452.' },
  { h: 'Routes and relations' },
  'The Huns kept links with many worlds. To the south and west, Roman gold and goods; to the east, the steppe routes, with horses, furs and slaves; to the north, the Germanic princes who paid them tribute or gave them hostages. The **frontier markets** on the Danube, established at Margus (435) and regulated by treaty, were the meeting point between the two worlds.',
  { img: 'hun-acampamento', leg: 'A Hunnic camp of wagons and tents on the Hungarian plain, 5th century; conjectural reconstruction. AI-generated illustration.' }
];

const sociedade = [
  { h: '1. Political organization' },
  'The Huns were a **confederation of peoples and chiefs**, not a state. At the beginning, according to Ammianus, they **obeyed no king**, but “notables” who led bands of warriors. Only in the 5th century do kings appear (**Uldin**, **Octar** and **Rua**, **Attila** and **Bleda**), and they often ruled **in pairs**: two brothers or an uncle and nephew sharing power, a steppe tradition. Attila ended the sharing by eliminating Bleda.',
  'Attila’s power rested on three things: the **army** of Hunnic warriors, the **redistribution of gold** (which he received from Rome and handed out to his chiefs and followers to keep them loyal) and the **network of vassal kings**, among them Germanic chiefs such as the Gepid **Ardaric** and the Ostrogoth **Valamir**, who supplied him with troops. These very vassals were the ones who rebelled in 454. Attila also had **Roman** and Greek **secretaries**, and a chancery for the letters he wrote to the Empire. The most famous was **Orestes**, whose son would become the last emperor of the West.',
  { img: 'hun-corte-atila', leg: 'A banquet at Attila’s court, c. 449, following Priscus’s account; conjectural reconstruction. AI-generated illustration.' },
  { h: '2. Social classes' },
  { lista: [
    '**Chiefs and nobles:** the warrior elite, close to the king, who received gold and land, and whom Priscus calls *logades* (“chosen men”).',
    '**Free warriors:** horsemen who lived from livestock, war and plunder.',
    '**Subject peoples:** Goths, Gepids, Heruli, Alans, Suebi and others, who paid tribute and supplied soldiers, each with their own chiefs.',
    '**Dependent peasants and craftsmen:** the Huns did not practise much agriculture, but their subjects did; Priscus mentions fields of millet.',
    '**Slaves and captives:** Roman prisoners of war, ransomed for money or forced to work; some, like the Greek whom Priscus meets, preferred life among the Huns.'
  ] },
  { h: 'Women' },
  'We know little. Priscus met Attila’s principal wife, **Kreka** (*Hereca*), who received him at home with great ceremony, and notes that the king had many wives. Women of the elite had a significant role, and there are female tombs with gold jewellery, but there is no proof that they ruled. On the steppes it is usual for women to look after the livestock and wagons while the men fight.',
  { h: '3. Religion' },
  'Almost nothing is known, and the little that is known comes from outsiders. The Hunnic religion is thought to have been **shamanic** and tied to nature and the sky (perhaps to the figure of “Heaven” later called *Tengri* among the Turkic and Mongol peoples, a hypothesis). The Huns had no known temples. They had diviners: according to Jordanes, before the Gaul campaign Attila’s diviners examined the entrails and bones of animals; and many subjects were Christian (the Arian Goths) or pagan.',
  { tabela: { cab: ['Element', 'Source', 'Comment'], linhas: [
    ['Sword of Mars', 'Jordanes (from Priscus)', 'A shepherd is said to have found an ancient sword, which Attila took as a sign of world dominion; the sources link it to the Roman god of war, and it is a late **legend**'],
    ['Divination', 'Jordanes', 'Before the Gaul campaign (451), diviners examined the entrails and bones of animals and predicted a bad outcome'],
    ['Cult of sky and horse', 'Modern hypothesis', 'Comparison with other steppe peoples; **no direct evidence** for the Huns'],
    ['Funerals', 'Jordanes (Attila)', 'The body displayed in a silk tent, horsemen circling and singing, then a banquet (the ceremony is described by Priscus/Jordanes; the burial in three coffins is legend)'],
    ['Deposition of cauldrons', 'Archaeology', 'Bronze cauldrons found near water; perhaps used in rituals or funerals']
  ] } },
  { h: '4. Economy: tribute and plunder' },
  'The Hunnic economy had three pillars: **pastoralism** (horses, cattle, sheep), **war and plunder** and, above all in Attila’s time, **tribute in gold**. The numbers speak for themselves: from **350 pounds** a year (c. 422) to **700** (435) and then **2,100**, plus 6,000 in arrears (443). A Roman pound is about 327 g, so 2,100 pounds correspond to about **700 kg of gold a year**. The gold, minted as *solidi* (coins of 4.5 g), was taken to the court, where Attila redistributed it to his chiefs. This wealth kept loyalty; when it dried up, under Marcian, in 450, the system began to collapse.',
  { img: 'hun-solido-teodosio', leg: 'Gold solidus of Theodosius II, emperor of the East (408 – 450): coins like this financed Hunnic power.' },
  { img: 'hun-tributo', leg: 'Delivery of gold tribute to Hunnic envoys on the Danube, 5th century; conjectural reconstruction. AI-generated illustration.' },
  'There was also **trade**: in the frontier markets the Huns exchanged horses, cattle and slaves for cloth, wine, grain and weapons. By treaty the Romans were forbidden to sell weapons to the Huns, but in practice there was smuggling. Farming was done by subjects: Priscus mentions millet (for food) and a barley drink, *camos*, and one of honey, *medos*.',
  { h: '5. Writing and language' },
  'The Huns **did not write**. Their language was never recorded and remains an enigma: a few **names** are known (*Attila*, *Bleda*, *Uldin*, *Rua*) and some words quoted by Priscus and Jordanes (*medos*, *camos*, *strava*, the last a funeral banquet), but nothing that allows the language to be classified with certainty. Some names look Germanic (*Attila* would be a Gothic diminutive, “little father”, a debated idea), others Turkic or Iranian. It is possible that, at least among the elites, **Gothic** was spoken; Priscus says that many Huns also spoke **Latin** and **Gothic** (besides Hunnic), and that affairs of state with the Empire were handled in Latin or Greek by secretaries. The oral tradition, of songs, has vanished.',
  { img: 'hun-jordanes', leg: 'Jordanes, 6th-century Gothic historian, author of the *Getica*, which summarizes the lost works of Priscus and Cassiodorus on the Huns.' },
  { h: '6. Home and housing' },
  'The earliest Huns lived in **wagons** and **tents**: Ammianus says they lived “in their carts” and that wives and children travelled with the men. In Attila’s time the elite had **wooden houses and halls** (Priscus describes Attila’s great hall, of well-planed boards, with wooden palisades), but the whole was never a city. The archaeology of the Huns is **poor**: there are almost no settlements, and what we know comes from tombs, scattered finds and buried hoards.',
  { h: '7. Food' },
  { lista: [
    '**Meat and milk:** horse, sheep and beef, milk and dairy products; the image Ammianus gave, that they ate raw meat warmed under the saddle, is a **literary commonplace**, repeated for other steppe peoples, and not a fact.',
    '**Cereals:** Priscus mentions millet (the Huns ate it at Attila’s court) and bread for Roman guests.',
    '**Drinks:** *medos* (mead) and *camos* (a barley drink), served at banquets.',
    '**Banquet:** Attila ate meat from wooden plates, with wooden cups, while honoured guests ate from silver plates and cups; the message was that of an austere king amid luxury.',
    '**Hunting and fishing:** a supplement to the diet.'
  ] },
  { h: '8. Dress' },
  'Ammianus describes the Huns in fur caps, goatskin leggings, linen tunics and stitched field-mouse skins (a point on which he almost certainly exaggerates), and says they never changed clothes until they fell apart. The tombs show a richer picture for the elites: **gold**, **buckles**, **brooches** and **diadems** of gold and coloured glass, the “polychrome” fashion of 5th-century central Europe. There are also **bronze mirrors** in female tombs. Horsemen wore boots, trousers and close-fitting tunics, suited to life on horseback.',
  { img: 'hun-vestuario', leg: 'A Hunnic warrior and woman in 5th-century dress; conjectural reconstruction. AI-generated illustration.' },
  { h: '9. Music, bards and entertainment' },
  'At Attila’s court Priscus described singers (*bards*) who celebrated the king’s victories, and the guests, moved, wept or applauded; others amused the king with fools and jesters. Among them was the dwarf **Zerco**, of Moorish origin, a former jester of Bleda, whom Attila treated with irony and affection. It is one of the few intimate scenes we have of this court. The Huns also held horse races and war games.',
  { h: '10. Science, medicine and technology' },
  'The Huns left no treatises or observatories. What we know of their **technology** comes from objects: the **composite bow**, the metallurgy of **bronze** (cauldrons) and **gold**, the **wagon** and **saddlery**. Priscus and Ammianus show some practical learning: they adapted Roman **siege engines**, and Attila used captured Roman engineers. As for medicine, all we have is **cranial deformation**, a cultural custom.',
  { h: '11. Cranial deformation' },
  'One of the most characteristic traits of Hunnic archaeology is **artificial cranial deformation**: in childhood, while the skull is still soft, the head was bound with bandages or boards, and the result was an elongated skull. The custom, **much older than the Huns** and shared by other peoples (Alans, Sarmatians, Germanic groups and others), appears in many tombs of the **Carpathian Basin** in the 5th century. Ammianus and Jordanes say the Huns cut the cheeks of babies to prevent beards, and Sidonius Apollinaris describes flattened noses; these images come from hostile authors and should not be taken literally. A deformed skull in a grave **does not prove that the dead person was a Hun**, only that he or she followed a prestigious custom in that region.',
  { img: 'hun-craniano', leg: 'Skull with artificial deformation, a custom practised by several steppe and central European peoples in the 5th century.' },
  { h: '12. Cauldrons' },
  'Hunnic **bronze cauldrons** are one of the typical finds: large cast vessels, conical in shape with two handles, found from Siberia to Hungary, often near rivers and tombs. They could be used for cooking and banquets, but there seems also to have been a **ceremonial function**. They were made in steppe workshops and, it seems, also in Europe. They are the most “Hunnic” object there is, and, through their geographical spread, one of the indications of the Huns’ links with the Asian steppe.',
  { img: 'hun-caldeirao', leg: 'Bronze cauldron of Hunnic type, 4th – 5th century, found in the Carpathian Basin (Hungarian museum).' },
  { img: 'hun-oficina-caldeirao', leg: 'Casting a bronze cauldron in a steppe workshop, 5th century; conjectural reconstruction. AI-generated illustration.' },
  { h: '13. War' },
  'The strength of the Huns was **light cavalry of archers**. Their **composite bow**, made of wood, sinew and horn and reinforced with bone plates, was short, asymmetric and powerful: it allowed shooting from horseback at distances of several tens of metres. They used bronze or iron arrows with triangular heads, lassos and swords, and feigned retreat to draw the enemy on (a tactic common on the steppes). Ammianus says they attacked in scattered groups and arrived and left in an instant. They had little armour, unlike the Goths, and the stirrup, which only became widespread in Europe with the Avars, was probably not used by them.',
  { img: 'hun-arco-composto', leg: 'Composite bow of Asian type, modern reconstruction: the weapon that made the Huns fearsome mounted archers.' },
  { img: 'hun-cavaleiro-arqueiro', leg: 'A Hunnic mounted archer at the gallop, 5th century; conjectural reconstruction. AI-generated illustration.' },
  'Against fortified cities the Huns were at first weak, but they learned from the Romans to use **rams** and **siege towers**. Their greatest weakness was logistics: an army of tens of thousands of horses needs pasture, and this is partly why Attila’s campaign in Italy (with plague and hunger) ended. The most effective tool was **terror**: the reputation for cruelty (often exaggerated) led cities to surrender.',
  { img: 'hun-cataunicos-batalha', leg: 'The battle of the Catalaunian Plains (451), between Attila and Aetius with the Visigoths; conjectural reconstruction. AI-generated illustration.' }
];

const personalidades = [
  'Of the Huns we know mostly **names** and episodes, seen from outside, by Romans and Goths. Some figures are historical, others semi-legendary, and this is stated.',
  { h: 'Balamber (tradition: c. 370)' },
  'According to Jordanes, the first “king” of the Huns, who defeated the Ostrogoths. But Jordanes wrote two centuries later, and no contemporary source mentions him; the name may be a literary construction or that of a real chief. His existence is **disputed**.',
  { h: 'Uldin (c. 400 – 408)' },
  'The first well-documented Hunnic chief. He dominated the lower Danube, killed Gainas and sent his head to Constantinople (400), helped Stilicho against Radagaisus (406) and, in 408, invaded Thrace. According to Sozomen, he proudly told the Romans that he could conquer the whole world, as far as the sun rises, and he was betrayed by his own men. He is the example of how Hunnic politics depended on the bought loyalty of followers.',
  { h: 'Octar and Rua (c. 420 – 434)' },
  '**Octar** and his brother **Rua** (or *Rugila*) were kings together. Octar died in c. 430 in a war against the Burgundians; Rua, the uncle of Attila and Bleda, imposed tribute on Constantinople and died in 434, preparing a great campaign.',
  { h: 'Bleda (d. c. 445)' },
  'Attila’s brother and co-king until c. 445, when, according to the sources, he was killed on his brother’s orders. He left so little historical trace that it is hard to know what his role was; Priscus mentions his jester, the dwarf **Zerco**, who accompanied him to war.',
  { h: 'Attila (d. 453)' },
  'King of the Huns from 434 to 453. Priscus, who knew him, describes him as short, broad-chested, with a large head, small eyes, a thin beard and a proud bearing, and sober in his habits. He was a skilful politician: he knew how to exploit the Empire’s fears, surround himself with Roman secretaries and play on the rivalries between peoples. Christian authors saw him as a divine punishment; Germanic sources make him a king. What we know for certain is little, and comes from Priscus and Jordanes; the image of a “bloodthirsty barbarian” comes mostly from later authors.',
  { img: 'hun-atila-gravura', leg: 'Imaginary portrait of Attila, an engraving or painting of the modern era; no contemporary portrait survives.' },
  { h: 'Onegesius' },
  'Attila’s chief adviser, according to Priscus, and owner of a stone bathhouse. He was the second man of the court, to whom Attila entrusted relations with foreigners. He shows that the Hunnic court had an elite of aristocrats and counsellors, and not only of warriors.',
  { h: 'Kreka (Hereca)' },
  'Attila’s principal wife, whom Priscus visited. She received him with great ceremony, in rooms carpeted with felt rugs. She is one of the rare women of the Hunnic elite whose name we know.',
  { h: 'Ildico' },
  'The young woman Attila married in 453, and on the wedding night the king died. Her name (probably Germanic, *Hildico*) may have given rise to **Kriemhild** in the *Nibelungs*, and the motif of her story (the bride who kills her husband) is one of the most widespread legends, with no basis in the sources: Jordanes states that she was found weeping beside the body.',
  { h: 'Orestes and Edeco' },
  '**Orestes**, a Roman from Pannonia, was Attila’s secretary and an ambassador to Constantinople; his son, **Romulus Augustulus**, was the last Western Roman emperor (475 – 476). **Edeco**, a chief of Germanic (or Scythian) origin, was one of Attila’s commanders and, according to one hypothesis, the father of **Odoacer**; it was he who, on the embassy of 449, accepted, and then denounced, the plan to kill Attila. They illustrate how the Huns were a world of people of many origins.',
  { h: 'Aetius (c. 391 – 454)' },
  'Called “the last of the Romans”, Flavius **Aetius** was the general who stopped Attila. He spent his youth as a hostage among the Huns and used them, for twenty years, as mercenaries in his wars in Gaul. He defeated Attila at the Catalaunian Plains (451). He was murdered in 454 by the emperor Valentinian III himself, in Rome.',
  { h: 'Theodoric I (d. 451)' },
  'King of the Visigoths, ally of Aetius at the Catalaunian Plains, where he died. Jordanes tells that his body was found among the dead and honoured by his people with songs. He was succeeded by **Thorismund**.',
  { h: 'Leo I the Great (pope 440 – 461)' },
  'He headed the embassy that, in 452, met Attila by the Mincio. According to Prosper of Aquitaine, he was decisive; modern historians, however, consider that hunger, disease and Marcian’s threat weighed heavily. The much-painted scene gave the papacy new prestige.',
  { h: 'Priscus of Panium (c. 410 – after 472)' },
  'Diplomat and historian of Constantinople, author of a history of his own time in Greek, now lost and known only from fragments and from Jordanes. He is our best source on Attila, because he was at the court in 449 and wrote what he saw, with curiosity and without fury. It was he who left us the account of the banquet, the bards, the jester and the conversations with a Greek who had chosen to live among the Huns.',
  { h: 'Ardaric of the Gepids' },
  'King of the Gepids and loyal counsellor of Attila, who held him in high esteem, according to Jordanes. In 454 he led the revolt of the subject peoples that defeated Attila’s sons at the Nedao and ended Hunnic power.',
  { h: 'Ellac and Dengizich' },
  '**Ellac**, Attila’s eldest son, was killed at the Nedao (454). **Dengizich**, another son, attacked the Eastern Empire in 468 – 469 and died in combat, his head exposed in Constantinople, at the end of the Hunnic story in Europe.'
];

const legado = [
  { h: 'What they left us' },
  { lista: [
    '**The lesson of tribute:** Attila showed how far a chief who lives on threat can go, and how the Eastern Empire, rich and walled, survived by paying while the West fell apart.',
    '**Effect on Europe:** Hunnic pressure helped push Goths, Vandals, Burgundians and others into the Empire, contributing to the formation of the Germanic kingdoms that succeeded Rome.',
    '**Cavalry of archers:** the steppe tradition of composite bows and mobility passed to Avars, Magyars, Turks and Mongols.',
    '**Words and images:** “hun” and “vandal” became insults; *Attila* is still a very common given name in Hungary and Turkey.',
    '**An epic:** the *Nibelungenlied* and the Norse sagas kept the memory of Attila as a king, far from the image of a monster.'
  ] },
  { h: 'Art and archaeology' },
  'The Huns left no architecture or monumental art, and their material mark is discreet: **bronze cauldrons**, **mirrors**, **buckles**, **diadems** of gold and coloured glass, **arrowheads** and remains of bows, and tombs with **deformed skulls**. Among the most important finds are elite burials of the Carpathian Basin, such as that of Szeged-Nagyszentmiklós, of the 5th century. Most “Hunnic jewellery” in fact belongs to a **polychrome** fashion shared by Goths, Alans and Huns. That is why the **archaeology of the Huns is much debated**: it is rarely possible to say whether an object is “Hunnic” or merely of the period.',
  { img: 'hun-nibelungenlied', leg: 'Page of the *Nibelungenlied* (c. 1200), the German epic poem in which Attila appears as King Etzel.' },
  { h: 'Legend and fact' },
  { tabela: { cab: ['Popular idea', 'What the sources say', 'Assessment'], linhas: [
    ['“Scourge of God”', 'No contemporary source gives this title to Attila; it appears in Christian texts and medieval chronicles that see him as a divine punishment', '**Late legend**'],
    ['“Where Attila’s horse treads, the grass never grows again”', 'A popular saying attributed to Attila, with no ancient source', '**Legend**'],
    ['Attila found the “Sword of Mars”', 'Priscus/Jordanes tell of a shepherd finding a sword', '**Ancient tradition**, but of doubtful political interpretation'],
    ['Attila buried in three coffins of gold, silver and iron', 'Jordanes; gravediggers killed to keep the secret', '**Legend**: no tomb has ever been found'],
    ['Pope Leo saved Rome single-handed', 'Tradition links the withdrawal to Leo’s authority; Raphael painted St Peter and St Paul in the sky', '**Exaggeration**: hunger, disease and Marcian’s troops weighed in'],
    ['Attila was murdered by Ildico', 'Priscus and Jordanes: a haemorrhage during the night', '**Later legend**; a natural cause is the most likely'],
    ['The Hungarians descend from the Huns', 'Medieval Hungarian chronicles (Simon of Kéza, 13th century)', '**False as direct descent**; the Magyars arrived c. 895'],
    ['The Huns were only destroyers', 'Hostile Roman sources; Priscus shows a complex court', '**Oversimplification**: gold and diplomacy counted as much as war']
  ] } },
  { h: 'Attila in the Nibelungs' },
  'In the Middle Ages the memory of Attila was absorbed by Germanic epic. In the *Nibelungenlied* (c. 1200), **Etzel** is a generous, almost passive king, married to **Kriemhild**, and it is at his court that the final massacre of the Burgundians takes place, a distorted memory of the destruction of the Burgundian kingdom of Worms by Aetius and the Huns in 436 – 437. In the Norse sagas, **Atli** (*Atlakviða*) kills his brother-in-law Gunnar. It is a curious phenomenon: the most feared king of the 5th century became, centuries later, a character in chivalric poems.',
  { img: 'hun-chronicon-pictum', leg: 'Attila, king of the Huns, in the Hungarian *Illuminated Chronicle* (*Chronicon Pictum*, 14th century), which asserts the Hunnic ancestry of the Hungarians.' },
  { h: 'The fall of the Huns' },
  'Why did the empire disappear so quickly? Historians point to several reasons, which combine:',
  { lista: [
    '**Dependence on gold:** power rested on tribute; when Marcian refused it (450), the system was left without funds.',
    '**Defeats and setbacks:** the Catalaunian Plains (451) and the withdrawal from Italy (452) ruined Attila’s prestige.',
    '**Attila’s sudden death (453):** he left no single heir, and among his sons there was rivalry.',
    '**Revolt of the subjects:** the Gepids of Ardaric, Ostrogoths and others threw off the yoke in 454.',
    '**Structural weakness:** an empire of personal loyalties and chiefs, without institutions, hardly survived one king.'
  ] },
  'The Huns were not exterminated: those who remained mixed with other steppe and Danubian peoples. Some historians see them as ancestors of groups such as the **Bulgars** and the **Kutrigurs**, but this link is hypothetical.',
  { h: 'The rediscovery of the Huns' },
  'From the Renaissance to the 19th century the Huns were above all a literary and artistic theme: Raphael, Delacroix, Verdi (the opera *Attila*, 1846) and, in the 20th century, films. The popular image settled on a ruthless barbarian, and the First World War used the term “Huns” as propaganda against the Germans (the usage goes back to a speech by Kaiser Wilhelm II in 1900, who told soldiers sent to China to behave like the Huns). Scientific research, for its part, advanced with Maenchen-Helfen, then with the **archaeology of Pannonia** and, since 2018, with **ancient DNA**, which shows an empire of many origins.',
  { img: 'hun-xiongnu-bronze', leg: 'Ordos bronzes, from the steppe of northern China, of Xiongnu times: the metalworking tradition of the region from which the Huns are hypothetically thought to have come.' },
  { caixa: 'Where to see the Huns', texto: 'In **Hungary**: the **Hungarian National Museum** in Budapest has cauldrons, jewellery and finds from tombs of the Hunnic era; the **Aquincum Museum** shows Roman Pannonia. In **Italy**, **Aquileia** preserves its Roman ruins and its museum, and the **Vatican** holds Raphael’s fresco of Leo I and Attila. In **Istanbul**, the **Theodosian Walls**. The **British Museum** and the **Louvre** have objects from the steppe and Late Antiquity. In general, the best thing is to visit the Roman world into which the Huns burst.' }
];

const quiz = [
  { p: 'From what region did the Huns come to Europe, around 370?', op: ['From the steppes east of the Volga', 'From the Arabian desert', 'From the Alps', 'From the British Isles'], certa: 0, exp: 'According to Ammianus Marcellinus, they crossed the Volga and the Don and first attacked the Alans.' },
  { p: 'The relationship between the Huns and the Xiongnu of Central Asia is…', op: ['A proven fact', 'A debated hypothesis', 'A medieval invention', 'An absolute genetic certainty'], certa: 1, exp: 'It was proposed in the 18th century by Joseph de Guignes and is still under discussion: there is a gap of about two centuries with no documentation.' },
  { p: 'What was the immediate effect of the Huns’ arrival on the Goths?', op: ['It made them allies of Rome at once', 'The Goths expelled the Huns', 'The Goths asked for asylum in the Empire, in 376', 'The Goths vanished'], certa: 2, exp: 'Hunnic pressure led the Tervingi to cross the Danube in 376, and two years later they defeated the Romans at Adrianople.' },
  { p: 'Which Roman historian wrote the first description of the Huns?', op: ['Tacitus', 'Livy', 'Pliny the Elder', 'Ammianus Marcellinus'], certa: 3, exp: 'Ammianus Marcellinus, in book XXXI of his history, written around 390.' },
  { p: 'What was the main weapon of Hunnic warriors?', op: ['The catapult', 'The composite bow, used on horseback', 'The phalanx spear', 'The infantry gladius'], certa: 1, exp: 'The composite bow, short and powerful, made them formidable mounted archers.' },
  { p: 'In 435, the treaty of Margus raised the Eastern Empire’s annual tribute from 350 to…', op: ['100 pounds of gold', '700 pounds of gold', '10,000 pounds of gold', 'None, it fell to zero'], certa: 1, exp: 'It went to 700 pounds of gold a year, and in 443 it rose to 2,100, with 6,000 in arrears.' },
  { p: 'Who ruled the Huns with Attila until c. 445?', op: ['Aetius', 'Uldin', 'Bleda', 'Ardaric'], certa: 2, exp: 'Bleda, Attila’s brother, was co-king until he died, c. 445, apparently at his brother’s hands.' },
  { p: 'Who left us the direct testimony of Attila’s court, in 449?', op: ['The diplomat Priscus of Panium', 'The poet Virgil', 'Pope Leo I', 'The historian Herodotus'], certa: 0, exp: 'Priscus accompanied a Roman embassy and described the king, the wooden palace, the banquets and the bards.' },
  { p: 'What stopped Attila from taking Constantinople in 447?', op: ['The Colosseum', 'A fleet of triremes', 'Hadrian’s Wall', 'The Theodosian Walls, rebuilt after an earthquake'], certa: 3, exp: 'The prefect Constantine rebuilt the walls in about two months, and the city was never taken.' },
  { p: 'Where was the great battle between Attila and Aetius, with the Visigoths, fought in 451?', op: ['At Adrianople', 'On the Catalaunian Plains, in Gaul', 'At Rome', 'At the Nedao'], certa: 1, exp: 'It was a tactical draw, but Attila withdrew, and Theodoric I died. The exact site is disputed.' },
  { p: 'Who met Attila near the Mincio in 452?', op: ['Constantine', 'Julius Caesar', 'An embassy that included Pope Leo I', 'Theodosius II'], certa: 2, exp: 'Attila’s withdrawal had several causes: hunger, disease and Marcian’s troops; Leo’s role was exaggerated by tradition.' },
  { p: 'How, according to ancient sources, did Attila die in 453?', op: ['In battle', 'Poisoned by Aetius', 'Of a haemorrhage, on his wedding night', 'Of old age, at 90'], certa: 2, exp: 'Priscus and Jordanes speak of a nosebleed that choked him in his sleep; a natural cause is the most likely.' },
  { p: 'Which battle, in 454, made the Hunnic empire collapse?', op: ['The Nedao', 'Adrianople', 'Cumae', 'The Utus'], certa: 0, exp: 'At the Nedao, the subject peoples, led by the Gepid Ardaric, defeated the Huns, and Ellac died.' },
  { p: 'Which of these statements about cranial deformation is correct?', op: ['Only the Huns practised it', 'It was a custom of several peoples and does not by itself prove the dead person was a Hun', 'It was a punishment for criminals', 'It was invented by Attila'], certa: 1, exp: 'The Alans, Sarmatians and some Germanic groups also practised it; it is a prestige custom, much older than the Huns.' },
  { p: 'In which medieval work does Attila appear as King “Etzel”?', op: ['The Divine Comedy', 'The Song of Roland', 'The Nibelungenlied', 'Beowulf'], certa: 2, exp: 'In the Nibelungenlied (c. 1200), Etzel is a generous king married to Kriemhild; the story recalls, distorted, the destruction of the Burgundian kingdom in 436 – 437.' }
];

export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };
