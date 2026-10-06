// AZTECS (MEXICA) — full English content. Same structure and image ids as dados.js (Portuguese).
// Dates follow the "middle chronology"; those before the Spanish arrival (1519) rest mostly on oral traditions and on chronicles written after the conquest, so they are approximate.

const visao = [
  { caixa: 'In brief', texto: [
    'The **Aztecs**, or more properly the **Mexica**, were the Nahuatl-speaking people who, from 1325 (the traditional date), built **Tenochtitlan** on an island in Lake Texcoco and, from 1428, dominated central Mexico through an alliance of three cities. When the Spaniards arrived in 1519, their tribute empire reached from the Atlantic to the Pacific, and their capital was one of the largest cities in the world.',
    'They were lake engineers, temple builders, poets, merchants and warriors. They practised **human sacrifice** on a large scale, as part of a worldview in which the gods had sacrificed themselves to create the universe and humans owed them the same "debt". In 1521 Tenochtitlan fell after a siege of about two and a half months, an epidemic of smallpox and, above all, the alliance of Hernán Cortés with thousands of indigenous warriors who were enemies of the Mexica. Modern **Mexico City** rose on its ruins.'
  ] },
  { img: 'ast-mapa-imperio', leg: 'Map of the Triple Alliance in 1519.' },
  { h: 'Where they lived' },
  'The heart of the Aztec world was the **Valley of Mexico**, a high basin (about 2,240 m) ringed by mountains and volcanoes, with a chain of shallow lakes, the largest of which were salty **Lake Texcoco** and the freshwater lakes of Xochimilco and Chalco. The capital, **Mexico-Tenochtitlan**, stood on an island in Lake Texcoco, joined to the shore by raised causeways. The empire itself reached far beyond the Valley: from the Gulf of Mexico to the Pacific, and south to the Soconusco, near today’s border with Guatemala.',
  'The word **"Aztec"** comes from **Aztlán**, the place of origin in Mexica tradition (see the timeline). The Mexica called themselves **Mexica** (or **Tenochca**, the people of Tenochtitlan), and their state was the "Triple Alliance" (in Nahuatl, *Ēxcān Tlahtōlōyān*). The name "Aztec" became common only in the 18th and especially the 19th century, through historians such as the Jesuit Francisco Javier Clavijero and later Alexander von Humboldt. Here we use "Aztecs" and "Mexica" as practical synonyms, but "Mexica" is the name they used. Their language was **Nahuatl**, of the Uto-Aztecan family.',
  { img: 'ast-codice-mendoza-fundacao', leg: 'Foundation of Tenochtitlan, Codex Mendoza, folio 2r, Bodleian Library.' },
  { h: 'When they existed' },
  'The Mexica reached the Valley of Mexico around the middle of the 13th century, when powerful city-states were already there. Their rise was fast, a little over a century, and their fall was brutal, in two years. Dates before 1427 are traditional and approximate.',
  { tabela: { cab: ['Phase', 'Approximate dates', 'What marks it'], linhas: [
    ['Background and migration', 'c. 1100 – 1325', 'Migration from Aztlán (tradition); arrival in the Valley, servitude at Culhuacan; founding of Tenochtitlan in 1325 (traditional date)'],
    ['Vassals of Azcapotzalco', 'c. 1325 – 1427', 'A small city paying tribute to the Tepanecs; first tlatoque (Acamapichtli, Huitzilihuitl, Chimalpopoca)'],
    ['The Triple Alliance', '1428 – 1473', 'Itzcoatl, Moctezuma I; victory over Azcapotzalco, alliance with Texcoco and Tlacopan; expansion across central Mexico'],
    ['The empire', '1473 – 1519', 'Axayacatl, Tizoc, Ahuitzotl; conquest of Tlatelolco; the Templo Mayor; Moctezuma II at the height of power'],
    ['The conquest', '1519 – 1521', 'Arrival of Cortés; Moctezuma II, Cuitláhuac, Cuauhtémoc; fall of Tenochtitlan on 13 August 1521'],
    ['After the fall', 'from 1521', 'New Spain; the Mexica nobility collaborates and is absorbed; indigenous codices, chronicles and Nahuatl survive']
  ] } },
  { h: 'Who were the Mexica?' },
  'The Mexica were a **Nahua** people, speakers of Nahuatl, one of several groups in central Mexico that shared a language and many traditions. By their own memory they were **Chichimecs**, that is, people from the north, semi-nomadic, who arrived late and poor in a valley already full of cities. Their first status was that of mercenaries and vassals. Only after 1428 did they become the dominant power, and at that point they rewrote their own history, presenting themselves as heirs of the Toltecs and the chosen people of the god **Huitzilopochtli**. The chronicles should therefore be read with care: those that reached us were written or reworked after the conquest, by Spaniards and by Christianised indigenous authors.',
  { img: 'ast-tenochtitlan-vista', leg: 'Conjectural view of Tenochtitlan around 1500 from the Tlacopan causeway. AI-generated illustration.' },
  { h: 'Why they matter' },
  { lista: [
    '**One of the largest cities in the world:** Tenochtitlan had perhaps 200,000 inhabitants (estimates range from 140,000 to 250,000), comparable to the largest cities of Europe at the time, such as Paris, Venice or Constantinople, and very well supplied with water and markets.',
    '**Engineering and farming:** the chinampas, dikes, causeways and aqueduct turned a lake into one of the most productive farming systems in the world.',
    '**A worldview of its own:** the calendar, the poetry ("flower and song"), the gods and sacrifice form a coherent system that obliges us to understand a civilisation without reducing it to a stereotype.',
    '**An empire of its own kind:** instead of governing provinces directly, the Triple Alliance collected tribute and left local rulers in place. That system, and the resentment it caused, is what the Spaniards knew how to exploit.',
    '**A living legacy:** millions of people today speak varieties of Nahuatl, and the words Mexico, chocolate, tomato and avocado come from Nahuatl.'
  ] },
  { caixa: 'Mexico City today', texto: 'The historic centre of **Mexico City**, where the Cathedral, the National Palace and the ruins of the **Templo Mayor** can be seen together, stands directly on the old sacred precinct of Tenochtitlan. The Historic Centre and Xochimilco (with its chinampas) have been a UNESCO World Heritage Site since 1987.' },
  { img: 'ast-templo-mayor-ruinas', leg: 'Templo Mayor ruins, Mexico City, with the Cathedral.' },
  { img: 'ast-cidade-mexico-hoje', leg: 'Zócalo and historic centre of Mexico City.' }
];

const linha = [
  'This timeline follows the main events. For the centuries before 1427, what we know comes from oral traditions written down after the conquest; dates are approximate and origin stories mix memory and myth. From the 15th century on, chronicles and codices are more reliable, and from 1519 we also have eyewitness accounts.',
  { linha: [
    { d: 'c. 100 BC – AD 550', t: 'Teotihuacan', x: 'The great city of the Valley of Mexico, which reached over 100,000 inhabitants, with the Pyramid of the Sun and the Avenue of the Dead. It was sacked and burned around AD 550 and gradually emptied after that. The Mexica found the ruins and called it **Teotihuacan**, "the place where the gods were made"; we do not know what the city called itself.' },
    { d: 'c. 900 – 1150', t: 'The Toltecs and Tula', x: 'At **Tollan** (Tula, in today’s state of Hidalgo) a centre flourished with great warrior statues, the "Atlantes". The Mexica and their neighbours saw the Toltecs as legendary masters of every art ("toltecáyotl": Toltec culture). What Tula really was, and its relation to Chichén Itzá, archaeologists still debate.' },
    { d: 'c. 1150 – 1250', t: 'The Chichimecs arrive in the Valley', x: 'After the fall of Tula, groups of hunter-gatherers and farmers from the north, the **Chichimecs**, enter the Valley of Mexico and found city-states such as Texcoco (the Acolhua) and Azcapotzalco (the Tepanecs). The word carries a tone of contempt ("barbarians") from those already living in cities, but the Mexica claimed it with pride.' },
  ] },
  { img: 'ast-teotihuacan', leg: 'Pyramid of the Sun and Avenue of the Dead, Teotihuacan.' },
  { img: 'ast-aztlan-codice', leg: 'Departure from Aztlán, Codex Boturini, first page.' },
  { img: 'ast-migracao-ia', leg: 'Mexica migration in the thirteenth century; imagined scene inspired by historical tradition. AI-generated illustration.' },
  { linha: [
    { d: 'c. 1100 – 1250', t: 'The migration from Aztlán (tradition)', x: 'According to tradition, the Mexica left **Aztlán**, "place of herons", a mythical island or city somewhere to the north, guided by the god **Huitzilopochtli**, who told them to call themselves "Mexica". For generations they wandered, stopping in various places. Aztlán has never been identified; it may be the memory of a real migration or a mythical origin, and historians do not agree.' },
    { d: 'c. 1250 – 1300', t: 'Arrival in the Valley and Chapultepec', x: 'The Mexica reach the Valley and settle on the hill of **Chapultepec**, where the land already had owners. They were driven out by a coalition of neighbours and became mercenaries of the lord of **Culhuacan**, heir to a Toltec lineage.' },
    { d: 'c. 1323', t: 'The break with Culhuacan', x: 'Tradition says that the king of Culhuacan, Achitometl, gave a daughter in marriage to a Mexica chief, and that the Mexica sacrificed and flayed her to turn her into a goddess, which led to their expulsion. The details come from late sources; what is certain is that the Mexica ended up withdrawing to an uninhabited island in the lake, a no-man’s-land.' },
    { d: '1325', t: 'Founding of Tenochtitlan (traditional date)', x: 'On the island the Mexica saw the sign their god had promised: an **eagle perched on a nopal** (a prickly pear cactus) devouring a serpent. Tradition places the event in 1325 (the year "2 House"). It is the symbol on Mexico’s flag today. Archaeology does not confirm the exact date, and the story is partly a legend of legitimation.' },
  ] },
  { img: 'ast-fundacao-ia', leg: 'Legendary founding of Tenochtitlan in 1325; artistic interpretation of the eagle and serpent motif. AI-generated illustration.' },
  { linha: [
    { d: 'c. 1337', t: 'Tlatelolco', x: 'According to tradition, a Mexica group splits off and founds **Tlatelolco** on a neighbouring islet. For over a century it will be a sister city and a rival, famous for its market.' },
    { d: '1375', t: 'Acamapichtli, the first tlatoani', x: 'To gain prestige, the Mexica choose as their first ruler (**tlatoani**, "the one who speaks") **Acamapichtli**, son of a noblewoman of Culhuacan linked to the Toltecs. Tenochtitlan pays tribute to Azcapotzalco, the city of the Tepanecs, and fights in its service.' },
    { d: '1427 – 1428', t: 'The war against Azcapotzalco', x: 'After the death of the Tepanec king Tezozomoc, his son Maxtla seizes power and war breaks out. Tenochtitlan, now ruled by **Itzcoatl**, allies with **Nezahualcoyotl** of Texcoco, and then with Tlacopan, and together they defeat Azcapotzalco in 1428. The **Triple Alliance** is born: Tenochtitlan, Texcoco and Tlacopan, with tribute divided among the three (Tlacopan with the smallest share).' },
    { d: '1440 – 1469', t: 'Moctezuma I and expansion', x: 'Under **Moctezuma I** (Ilhuicamina) the state spreads south and east, to the Gulf. The dike of Nezahualcoyotl against lake floods, the Chapultepec aqueduct and an enlargement of the Templo Mayor are built. Conquered cities pay regular tribute.' },
    { d: 'c. 1450 – 1454', t: 'Drought and famine', x: 'Several years of frost and drought cause a severe famine in the Valley, according to the chronicles. Tradition links to this crisis the beginning of the **flower wars**, ritual combats against neighbours such as Tlaxcala, and the increase in sacrifice, to "feed" the gods. The link is debated.' },
    { d: '1469 – 1481', t: 'Axayacatl', x: 'The empire keeps growing. In **1473** Axayacatl conquers **Tlatelolco**, after a conflict with its ruler Moquihuix, and the sister city comes under Mexica administration, keeping its market. Soon after (c. 1476–1479, sources differ) a Mexica army is defeated by the **Purépecha** (Tarascans) of the west, the greatest military defeat before 1519.' },
    { d: '1481 – 1486', t: 'Tizoc', x: 'A short reign and, according to the chronicles, not a glorious one: few conquests. The **Stone of Tizoc**, a large stone cylinder carved with scenes of victory, recalls his time. He died in circumstances that chroniclers attribute to a conspiracy, with no firm proof.' },
    { d: '1486 – 1502', t: 'Ahuitzotl', x: 'A great conqueror: he takes the empire to the Pacific and the **Soconusco**, on today’s Guatemalan border. He enlarges the Templo Mayor and in **1487** presides over its dedication (see society). He was also the ruler of the great water works, and of a flooding of Tenochtitlan in 1499–1500.' },
    { d: '1502 – 1520', t: 'Moctezuma II', x: 'Nephew of Ahuitzotl, a priest and general, he is elected **tlatoani** in 1502. He centralises power, strengthens the hierarchy between nobles and commoners and continues the wars. In **1507** the New Fire ceremony, marking the end of a 52-year cycle, is celebrated with pomp. Tlaxcala remains independent and hostile, surrounded by Mexica territory.' },
    { d: '1519', t: 'Cortés arrives', x: 'In April **Hernán Cortés** lands on the Gulf coast with about 500 men, some 16 horses and a few cannon. He makes alliances with the Totonacs and, after fighting them, with the **Tlaxcalans**. In October, at **Cholula**, he massacres thousands of people. On 8 November he enters Tenochtitlan, where Moctezuma II receives him.' },
    { d: '1520', t: 'Toxcatl, Moctezuma dies and the Sad Night', x: 'In May, during the festival of Toxcatl, **Pedro de Alvarado**, left in command, attacks and kills many unarmed nobles in the sacred precinct. The city rises and Moctezuma dies at the end of June, in disputed circumstances (the Spaniards blame his people; indigenous sources blame the Spaniards). On the night of 30 June to 1 July, the "**Sad Night**" (*Noche Triste*), the Spaniards flee along the causeway and lose hundreds of men and much gold.' },
  ] },
  { img: 'ast-encontro-lienzo', leg: 'Meeting of Cortés and Moctezuma, Lienzo de Tlaxcala.' },
  { linha: [
    { d: 'July – December 1520', t: 'Cuitláhuac, smallpox and Cuauhtémoc', x: 'After the Sad Night, **Cuitláhuac**, Moctezuma’s brother and leader of the resistance, is elected tlatoani. **Smallpox**, brought by a member of the Narváez expedition, spreads through the Valley from October, and Cuitláhuac dies soon after, probably of the disease. He is succeeded by the young **Cuauhtémoc**.' },
    { d: '1521', t: 'The siege and the fall', x: 'Cortés regroups in Tlaxcala and has **13 brigantines** built, assembled at Texcoco and launched in April. The siege begins in May, with tens of thousands of indigenous allies. After house-to-house fighting, hunger and disease, Cuauhtémoc is captured on **13 August 1521**, when Tlatelolco, the last stronghold, falls.' },
  ] },
  { img: 'ast-cerco-pintura', leg: 'Siege of Tenochtitlan: detail of an anonymous painting of 1676–1700, Museo de América, Madrid.' },
  { linha: [
    { d: '1525', t: 'The death of Cuauhtémoc', x: 'Taken by Cortés on the expedition to the Hibueras (Honduras), Cuauhtémoc is hanged in 1525, accused of conspiring. He is now a Mexican national hero.' },
    { d: '1790', t: 'The Sun Stone and Coatlicue', x: 'Works in the Plaza Mayor (Zócalo) of Mexico City bring to light the statue of **Coatlicue** (August 1790) and the **Sun Stone** (17 December 1790), which rediscover their pre-Hispanic heritage for Mexicans and scholars.' },
    { d: '1978 – today', t: 'The Templo Mayor', x: 'In February 1978 workers of the electricity company find, in the centre of the capital, the great stone disc of the goddess **Coyolxauhqui**, which leads to the excavation of the **Templo Mayor**. In 2015 excavations reveal the **Huey Tzompantli**, the great skull rack, still being studied.' }
  ] }
];

const mapa = [
  'The Aztecs’ "map" is, first of all, that of a city: an island in the middle of a lake, surrounded by other city-states that shared language, gods and calendar. The Triple Alliance then extended over dozens of provinces, but political, religious and economic life was concentrated in the Valley of Mexico.',
  { tabela: { cab: ['City', 'Who', 'Where today', 'What it is known for'], linhas: [
    ['Tenochtitlan', 'Mexica (Tenochca)', 'Historic centre of Mexico City', 'Capital of the empire; Templo Mayor, palaces, causeways, chinampas'],
    ['Tlatelolco', 'Mexica (Tlatelolca)', 'Plaza de las Tres Culturas, Mexico City', 'Great market; sister city, conquered in 1473; last stronghold in 1521'],
    ['Texcoco', 'Acolhua', 'Texcoco, State of Mexico', 'Cultural capital of the Alliance; Nezahualcoyotl; libraries and gardens'],
    ['Tlacopan', 'Tepanecs', 'Tacuba, Mexico City', 'Third member of the Alliance, with the smallest share of tribute'],
    ['Azcapotzalco', 'Tepanecs', 'Azcapotzalco, Mexico City', 'Dominated the Valley until 1428; defeated by the Alliance'],
    ['Culhuacan', 'Nahuas of Toltec lineage', 'Iztapalapa, Mexico City', 'Toltec prestige; dynastic cradle of the Mexica rulers'],
    ['Xochimilco', 'Nahuas', 'Xochimilco, Mexico City', 'Chinampas; the capital’s breadbasket; conquered in the 15th century'],
    ['Tula (Tollan)', 'Toltecs', 'Hidalgo', 'Old Toltec capital; the Atlantes'],
    ['Teotihuacan', 'Unknown people', 'State of Mexico', 'City already in ruins when the Mexica found it'],
    ['Tlaxcala', 'Tlaxcalans', 'State of Tlaxcala', 'Rival never conquered; Cortés’s main ally']
  ] } },
  { img: 'ast-mapa-nuremberga', leg: 'Map of Tenochtitlan and the Gulf of Mexico, Nuremberg, 1524.' },
  { h: 'The city of Tenochtitlan' },
  'The city was built on an island in Lake Texcoco and enlarged by **landfill**. In 1519 it had close to 200,000 inhabitants (estimates between 140,000 and 250,000) and an area of c. 8 to 13 km². It was divided into four great districts, the **campan**, cut by **canals** and by earthen streets, and joined to the mainland by three great **causeways** with removable sections that could be cut in case of attack: **Tepeyac** to the north, **Iztapalapa** to the south and **Tlacopan** to the west. A double aqueduct brought fresh water from **Chapultepec**. When the Spanish soldiers first saw the city, the chronicler **Bernal Díaz del Castillo** compared it, years later, to the enchanted cities of the chivalric romance *Amadís de Gaula*.',
  { img: 'ast-calzada-ia', leg: 'Tenochtitlan causeway, removable bridge and aqueduct around 1500; conjectural reconstruction. AI-generated illustration.' },
  { h: 'The sacred precinct and the Templo Mayor' },
  'At the centre stood the **sacred precinct**, a square space some 400 to 500 m on a side, enclosed by a wall decorated with serpents (*coatepantli*). Inside were more than seventy buildings: temples, schools, the ballcourt, the skull-rack platforms (*tzompantli*) and, at the centre, the **Templo Mayor** (*Huey Teocalli*). It was a stepped pyramid with **two shrines** on top: that of **Huitzilopochtli**, god of war and the Sun, and that of **Tlaloc**, god of rain. It was enlarged in several phases and reached 45 m or more in the last (estimates vary). Around it stood the palaces of the tlatoani and the houses of the nobility. The Spaniards razed the precinct and reused the stone for the Cathedral and houses.',
  { h: 'Tlatelolco and the market' },
  'The neighbouring island of **Tlatelolco**, after 1473 a part of Tenochtitlan, had the largest **market** of the region (*tianquiztli*). Cortés wrote that it gathered about 60,000 people a day, and Bernal Díaz said it was larger than any other he knew; the figures are probably exaggerated, but the amazement was real. There was everything: maize, beans, chillies, turkeys, fish, cotton cloaks, cacao, jade, quetzal feathers, obsidian, slaves, remedies, prepared food. **Judges** supervised prices, weights and measures.',
  { img: 'ast-mercado-ia', leg: 'Tlatelolco market around 1500; imagined scene. AI-generated illustration.' },
  { img: 'ast-tlatelolco-ruinas', leg: 'Tlatelolco ruins, Plaza de las Tres Culturas.' },
  { h: 'Chinampas: the gardens of the lake' },
  'The food for so large a city came largely from the **chinampas** (from *chinamitl*, "reed fence"): rectangular plots of land made in the lake, with layers of mud, water plants and vegetation, fixed with stakes and willows at the edges. They were narrow (perhaps 2.5 to 5 m by 30 m), irrigated by the canals around them and very fertile: they allowed several harvests a year. They still exist in **Xochimilco**, where flowers and vegetables are grown and people take boat trips.',
  { img: 'ast-chinampa-ia', leg: 'Chinampa cultivation around 1500; conjectural reconstruction. AI-generated illustration.' },
  { img: 'ast-xochimilco-chinampas', leg: 'Xochimilco canals and chinampas.' },
  { h: 'Water, dikes and causeways' },
  'Lake Texcoco was salty and prone to floods. Under Moctezuma I and Nezahualcoyotl a **dike** of more than 10 km was built (the "Nezahualcoyotl dike") to separate fresh water from salt water and protect the city, after a great flood in 1449. Later, under Ahuitzotl, the diversion of a spring into the aqueduct caused a disastrous flood in 1499–1500. That struggle with the water, on which the city depended, continued through colonial Mexico City, which ended up draining almost all the lakes.',
  { h: 'The routes' },
  'The empire was linked by **roads** and by **merchants**. The **pochteca**, long-distance traders, set out in caravans for the Soconusco and the Gulf coast and brought back cacao, jade, quetzal feathers, amber, shells and jaguar skins. They also acted as the empire’s spies. There were no pack animals and no wheels for transport: everything was carried on the back by **porters** (*tlamemeh*), and information by relay runners. Tribute, goods and soldiers thus reached the capital.'
];

const sociedade = [
  { h: '1. Political organisation' },
  'The Mexica state was a **Triple Alliance** of three city-states: Tenochtitlan, Texcoco and Tlacopan. Each had its own ruler and governed its own territory; Tenochtitlan became the dominant one. Conquered cities and provinces generally kept their rulers and customs, as long as they paid **tribute** and supplied soldiers; the Mexica placed officials (*calpixque*) to collect the tribute, and seldom governed directly. It is a **hegemonic** rather than territorial empire, based on threats and alliances, and therefore fragile.',
  'The ruler was the **tlatoani** ("the one who speaks"), elected from among the men of the royal family by a council of nobles, elders and priests. Beside him the **cihuacoatl** ("snake woman", the title of a high male office) handled internal affairs and replaced him in his absence. The most famous was **Tlacaelel**, adviser to several tlatoque. Below came the generals, the judges and the heads of the **calpulli**.',
  { img: 'ast-guerreiro-aguia', leg: 'Ceramic eagle warrior, House of Eagles, Templo Mayor Museum.' },
  { h: '2. Social classes' },
  { tabela: { cab: ['Group', 'Who', 'Position'], linhas: [
    ['Tlatoani and family', 'The ruler and his relatives', 'At the top; regarded as representatives of the gods'],
    ['Pipiltin', 'Nobles (singular: *pilli*)', 'Offices, lands, palaces and the calmecac school; harsher laws for them'],
    ['Macehualtin', 'Commoners (singular: *macehualli*)', 'Farmers, craftsmen, soldiers; organised in calpulli; could rise through war'],
    ['Pochteca', 'Merchants', 'A group of their own, rich, with privileges and courts; discreet about showing wealth'],
    ['Mayeque', 'Landless peasants', 'Worked the lands of nobles'],
    ['Tlacotin', 'Slaves (through debt or punishment)', 'Could own property and buy their freedom; children were born free']
  ] } },
  'The basic unit was the **calpulli** (meaning "big house"): a district, or group of families, with its own common land, temple and school, and elected leaders. Tenochtitlan had several. Society was hierarchical but **not rigid**: a brave commoner who captured enemies could be promoted to an elite warrior, with the right to wear certain clothes and to eat in the tlatoani’s house. Laws were harsh; public drunkenness, for example, was severely punished in the young.',
  { h: '3. Education' },
  'All boys went to school. The sons of nobles attended the **calmecac** ("row of houses"), beside the temples, where they learned to read codices, calendar, astronomy, poetry, law, history and the duties of priests, under very hard discipline. The rest attended the **telpochcalli** ("house of youth"), in the calpulli, with military training and community work. Girls learned at home from their mothers (spinning, weaving, cooking), and some served in the temples. In both schools there was also the **cuicacalli** ("house of song"), where sacred dances and songs were learned.',
  { img: 'ast-mendoza-educacao', leg: 'Education of children, Codex Mendoza, folio 60r.' },
  { h: '4. Religion' },
  'Mexica religion was **polytheistic** and highly organised, with about eighteen annual festivals of twenty days, temples, priests and rituals for each god. The Mexica incorporated gods from earlier peoples (Toltecs, Teotihuacanos) and from the conquered. They believed the world had passed through **five "suns"** (ages): the first four were destroyed by jaguars, wind, fire and flood; we live in the **Fifth Sun**, which will also end, by earthquakes, if the gods are not fed.',
  { tabela: { cab: ['Deity', 'Domain', 'Notes'], linhas: [
    ['Huitzilopochtli', 'War, Sun, patron god of the Mexica', '"Hummingbird of the left/of the south"; son of Coatlicue; shrine on top of the Templo Mayor'],
    ['Tlaloc', 'Rain, thunder, fertility', 'Ancient god of central Mexico; his paradise is Tlalocan; shrine at the Templo Mayor'],
    ['Quetzalcoatl', 'Feathered serpent, wind, wisdom, Venus', 'God linked to the Toltecs and to priests; creator of humans in some myths'],
    ['Tezcatlipoca', '"Smoking mirror": night, fate, sorcery', 'Rival of Quetzalcoatl in the myths; one of the great creator gods'],
    ['Coatlicue', 'Earth goddess, mother of Huitzilopochtli', '"Skirt of serpents"; great statue found in 1790'],
    ['Coyolxauhqui', 'Moon goddess, daughter of Coatlicue', 'Defeated by her brother; the disc at the foot of the Templo Mayor shows her dismembered'],
    ['Xipe Totec', 'Renewal, spring, goldsmithing', '"Our lord the flayed one"; festival in which priests wore skins'],
    ['Xochiquetzal', 'Flowers, beauty, love, the arts', 'Goddess of weavers, artists and courtesans'],
    ['Mictlantecuhtli', 'Lord of Mictlan, the world of the dead', 'Rules the dead who go neither to the heavens nor to Tlalocan']
  ] } },
  { img: 'ast-coatlicue', leg: 'Coatlicue statue, National Museum of Anthropology.' },
  { h: 'The myth of Huitzilopochtli' },
  'According to the myth, **Coatlicue** became pregnant after keeping a ball of feathers. Her children, the moon goddess **Coyolxauhqui** and the four hundred brothers (the stars), wanted to kill her out of shame. On Mount Coatepec, **Huitzilopochtli** was born fully armed, killed Coyolxauhqui and scattered his brothers. For the Mexica the myth explained the daily victory of the Sun over the Moon and the stars, and justified war as service to the Sun. The Templo Mayor was the "mountain" Coatepec, with the disc of Coyolxauhqui at its foot.',
  { img: 'ast-coyolxauhqui', leg: 'Coyolxauhqui stone, Templo Mayor Museum.' },
  { h: 'The Sun Stone and the calendar' },
  'The **Sun Stone** is a basalt monolith about 3.6 m across and almost 25 tonnes, probably carved in the time of Moctezuma II (between 1502 and 1521) and rediscovered in 1790. A note on the name: it is widely known as the "**Aztec Calendar**", but it **was not a calendar** used for counting days. It uses calendar symbols (the 20 day signs, the four earlier "suns" around the symbol *Nahui Ollin*, "Four Movement") in a **cosmological and ritual** composition. The central figure is disputed (the Sun, Tonatiuh, or the earth goddess Tlaltecuhtli), and some scholars think it served as an altar or a vessel for sacrifices. Its original name is not known.',
  { img: 'ast-pedra-sol', leg: 'Sun Stone, National Museum of Anthropology.' },
  { h: 'Human sacrifice' },
  '**Human sacrifice** was a central, real and well-documented part of Mexica religion, and not an invention of the Spaniards. The reason the Mexica gave was religious: the gods had sacrificed themselves to create the world and the Sun, and humans had to repay them with blood (*nextlahualli*, "payment of the debt"), so that the Sun would keep rising. Those who died were often prisoners of war, but also slaves, and children offered to Tlaloc. Some were treated as the living image of a god (*ixiptla*) for months before they died.',
  'The best-known form was the **removal of the heart** on a stone, at the top of a temple; there were many others (arrow sacrifice, drowning, gladiatorial combat, flaying). There was also a great deal of **self-sacrifice** (bloodletting with thorns) and, at some festivals, parts of the bodies were eaten ritually. The archaeological evidence, including the bones of children in the offerings of the Templo Mayor and more than 600 skulls from the **Huey Tzompantli** (up to 2020, including women and children), confirms that sacrifice was real and numerous. What we **do not know** is the numbers: the dedication of the Templo Mayor in 1487 would have cost, according to sources written after the conquest, more than 80,000 lives in four days, a figure almost all historians consider exaggerated (proposals range from thousands to tens of thousands). Estimates for a whole year range from a few thousand to far higher figures, and there is no agreement.',
  { caixa: 'Rigour and caution', texto: 'Almost everything we know comes from texts written by Spaniards or by Christianised indigenous authors **after the conquest**, and the conquerors had an interest in presenting the Mexica as barbarians. Historians therefore distrust the numbers, and also consider that sacrifice served to **intimidate** subjects and rivals. But the practice itself is confirmed by excavations, by indigenous sources (the Florentine Codex) and by the soldiers’ accounts. To understand is not to excuse: it is to place a terrible practice within the worldview that sustained it.' },
  { img: 'ast-sacrificio-codice', leg: 'Depiction of sacrifice in a colonial codex, Codex Magliabechiano.' },
  { img: 'ast-tzompantli', leg: 'Tzompantli of Building B at the Templo Mayor, with skull reliefs.' },
  { h: 'The flower wars' },
  'In *xochiyaoyotl*, the "flower wars", the Triple Alliance fought, by agreement, against neighbouring cities such as **Tlaxcala**, **Huexotzinco** and **Cholula**, in arranged battles, to capture prisoners instead of killing and to train the young. Their origin and purpose are debated: according to the chronicles they arose with the famine of 1450–1454; for some historians they were political instruments, for others manoeuvres of pressure to keep Tlaxcala weak. Tlaxcala was never conquered, and it was the decisive ally of Cortés.',
  { img: 'ast-guerra-ia', leg: 'Mexica warriors in battle around 1500; imagined scene without graphic detail. AI-generated illustration.' },
  { h: '5. Economy and tribute' },
  'The base was **agriculture**: maize, beans, squash, chilli, tomato, amaranth, chia, and cactus and agave. They lacked draught animals and iron; energy was human. The **tribute** of the provinces, recorded in the **Codex Mendoza** (which lists 38 provinces), reached the capital in great quantities: cotton cloaks, war costumes, maize and beans, cacao, feathers, jade, amber, gold, or warriors and slaves. There were no metal coins; **cacao beans**, cotton cloaks and small copper axes were used as money. There was even counterfeit cacao, made of dough, according to Sahagún.',
  { img: 'ast-pochteca-ia', leg: 'Pochteca merchants and tlamemeh porters around 1500; imagined scene. AI-generated illustration.' },
  { h: '6. Writing, codices and language' },
  'The Mexica had no alphabet and no full syllabic script. The **tlacuiloque** ("those who paint") recorded the essentials in **codices** of amate paper or skin, folded like a screen, with pictograms and symbols: names, dates, conquests, tribute. Reading depended on oral memory, and poetry and history were learned by heart. Very little survived from before the conquest; the most important documents were painted **after** 1521, for the Spaniards: the **Codex Mendoza** (c. 1541, commissioned by Viceroy Antonio de Mendoza for Emperor Charles V; today in the Bodleian Library, Oxford) and the **Florentine Codex** (c. 1545–1590), the work of the friar **Bernardino de Sahagún** with Nahua scholars, written in Nahuatl and Spanish, with more than 2,000 images (Laurentian Library, Florence). Book 12 tells the conquest from the indigenous point of view, from Tlatelolco.',
  { h: '7. House and family' },
  'Ordinary houses were of adobe, one storey, with a flat roof and a courtyard; those of nobles, of stone, had several rooms around courtyards and stood near the centre. Marriage was arranged, with elaborate ceremonies. **Women** had a solid but subordinate status: they bore children, wove, cooked, sold in the market, and could be midwives, healers or priestesses. Those who died in childbirth were honoured like warriors and went to accompany the Sun. Families were supported by the calpulli.',
  { img: 'ast-casa-ia', leg: 'Everyday life in a Mexica house around 1500; imagined scene. AI-generated illustration.' },
  { h: '8. Food and drink' },
  'The base was **maize**: tortillas (*tlaxcalli*), tamales, gruels (*atole*). They also ate beans, squash, chilli, tomato, avocado, cactus (nopal), amaranth, turkeys, ducks, domesticated dogs, fish, **insects**, lake-fly eggs and cakes of lake **algae** (*tecuitlatl*). The alcoholic drink was **pulque** (*octli*), from the agave, whose use was regulated: only the elderly and the sick could drink freely. **Chocolate** (*xocolatl*) was a bitter, frothy drink of cacao, sometimes with chilli, vanilla or flowers, reserved for elites, warriors and merchants. It was served cold and whisked.',
  { img: 'ast-cacau-ia', leg: 'Preparing a cacao drink in a Mexica noble house around 1500; imagined scene. AI-generated illustration.' },
  { h: '9. Clothing' },
  'Men wore the **maxtlatl** (loincloth) and the **tilmatli**, a cloak knotted at the shoulder; women, the skirt (*cueitl*) and the blouse (*huipilli*). What one wore showed rank: **cotton** was for nobles, while commoners used agave fibre; laws regulated colours, lengths and jewellery. Distinguished warriors wore **jaguar** and **eagle** costumes, with feathers, and nobles wore ornaments of gold, jade and turquoise. The **amanteca**, featherworkers, made remarkable pieces.',
  { h: '10. Music, games and poetry' },
  'Music used the upright drum **huehuetl**, the slit drum **teponaztli**, flutes, ocarinas, conch trumpets and rattles. Poetry was highly valued: "**flower and song**" (*in xochitl in cuicatl*) was the expression for poetry and truth. The poems attributed to Nezahualcoyotl meditate on the brevity of life. People played **patolli**, a board game with beans as dice, and **ullamaliztli**, the rubber-ball game, which also had a religious meaning. There was betting, and fortunes could be lost.',
  { img: 'ast-jogo-bola-ia', leg: 'Ullamaliztli ball game in Tenochtitlan around 1500; conjectural reconstruction. AI-generated illustration.' },
  { h: '11. Science, calendar and medicine' },
  'The **calendar** combined two cycles: the **xiuhpohualli**, of 365 days (18 months of 20 days and 5 "empty" days, *nemontemi*), and the **tonalpohualli**, of 260 days (20 signs combined with the numbers 1 to 13), used for divination and naming. The two coincided again every **52 years**; at the end of the cycle the **New Fire** was celebrated (the last time was in 1507), in fear that the world would end. Astronomers observed the Sun, Venus and eclipses. Counting was in **base 20**: a flag was 20, a feather 400, a bag 8,000.',
  'In medicine, physicians (*ticitl*) used hundreds of **plants**, steam baths (**temazcal**) and massage, and treated wounds and fractures; they mixed, without separating them, empirical knowledge and magic. The **Badianus Manuscript** (1552), written by the Nahua physician **Martín de la Cruz** and translated into Latin by Juan Badiano, describes Mexican medicinal plants; it was in the Vatican Library and was returned to Mexico in 1990, where it is kept today (National Library of Anthropology and History). Moctezuma II kept **botanical gardens** and a **zoo** that impressed the Spaniards.',
  { img: 'ast-badiano', leg: 'Page of the Badianus Manuscript showing medicinal plants.' },
  { h: '12. Technology and building' },
  'Without the wheel for transport, without pack animals and with little metal (they used gold, silver and some copper, but not iron), the Mexica did a great deal with what they had: **obsidian** for razor-sharp blades, **stone** carved with stone chisels, adobe brick, **lime** for stucco, lost-wax **goldsmithing**, turquoise **mosaics** and **featherwork**. The great hydraulic works and the chinampas were their greatest achievement.',
  { img: 'ast-templo-mayor-ia', leg: 'Sacred precinct and Templo Mayor of Tenochtitlan around 1500; conjectural reconstruction. AI-generated illustration.' },
  { h: '13. War' },
  'The army was made up of **ordinary men** called up by the calpulli, under the leadership of nobles and elite warriors (the orders of the **eagle** and the **jaguar**). They fought with the **macuahuitl** (a wooden sword with obsidian blades), spears, bows, the **atlatl** (dart thrower) and slings; they protected themselves with shields (*chimalli*) and padded cotton **armour** (*ichcahuipilli*). Capturing alive was more valuable than killing. Before war, ambassadors were sent and submission was demanded; the defeated paid tribute. The Purépecha, to the west, and Tlaxcala were never defeated.'
];

const personalidades = [
  'Of the Mexica we know mostly the rulers, nobles and priests, because they are the ones the chroniclers recorded. Nothing has reached us of the lives of commoners. The figures below are real and documented; where tradition adds legend, it is flagged.',
  { h: 'Itzcoatl (tlatoani 1427 – 1440)' },
  'Fourth ruler of Tenochtitlan. Under him the Mexica freed themselves from the Tepanecs and founded the **Triple Alliance**. According to tradition he had the old books burned that told a modest history of the Mexica, to replace them with a more glorious version; the story, told by Sahagún and others, is debated and probably exaggerated.',
  { h: 'Tlacaelel (c. 1397 – 1487)' },
  'Nephew of Itzcoatl and **cihuacoatl** to several tlatoque, he is presented by the chronicles as the great architect of imperial ideology: the cult of Huitzilopochtli, sacrifice as duty and the flower wars. Some historians suspect, however, that his role was enlarged after his death by chroniclers of his own family.',
  { h: 'Nezahualcoyotl (1402 – 1472)' },
  'King of Texcoco, son of a king deposed by the Tepanecs, who lived in exile and returned. He was a decisive ally of Itzcoatl. He is remembered as a **poet, jurist and engineer** (the dike, the garden of Texcotzingo). Many poems attributed to him were transmitted in writing only after the conquest, so the exact authorship is uncertain.',
  { img: 'ast-nezahualcoyotl', leg: 'Nezahualcoyotl, Codex Ixtlilxochitl.' },
  { h: 'Moctezuma I Ilhuicamina (1440 – 1469)' },
  'The fifth tlatoani, "the one who shoots at the sky". He extended Mexica rule to the south and the Gulf, and began great works, including the aqueduct and the dike. Under him the flower wars took the form we know.',
  { h: 'Ahuitzotl (1486 – 1502)' },
  'The greatest conqueror, who took the empire to the Pacific and the Soconusco. He presided over the dedication of the Templo Mayor in 1487. According to the chronicles he died in 1502 because of a blow to the head suffered during the flood of 1500. He was the father of **Cuauhtémoc**.',
  { h: 'Moctezuma II Xocoyotzin (1502 – 1520)' },
  'A priest and general, he ruled the empire at its height. He strengthened the hierarchy, centralised the administration and carried out great works. His figure is highly controversial: for a long time he was presented as an indecisive chief who thought Cortés was a god, which current historians **consider a myth**, largely created after the conquest. He was caught between two pressures (the empire’s rivals and the newcomers) and chose to receive and observe the Spaniards. He died in June 1520, in circumstances that the sources tell in contradictory ways.',
  { img: 'ast-moctezuma-ii', leg: 'Moctezuma II, Codex Mendoza, folio 15v.' },
  { h: 'Cuitláhuac (1520)' },
  'Brother of Moctezuma II and lord of Iztapalapa. He was the leader of the resistance that drove the Spaniards out on the Sad Night. He was elected tlatoani after the Sad Night and died soon afterwards, probably of smallpox (the early sources are not explicit about the cause), which removed the most determined leader of the defence.',
  { h: 'Cuauhtémoc (c. 1496 – 1525)' },
  'The name means "descending eagle". Son of Ahuitzotl and last tlatoani of Tenochtitlan, he was a little over twenty when he took power, and led the defence during the siege. Captured on 13 August 1521, he was tortured to reveal gold and later hanged on Cortés’s orders, in 1525. He is now the symbol of indigenous resistance in Mexico.',
  { img: 'ast-cuauhtemoc-monumento', leg: 'Cuauhtémoc monument, Paseo de la Reforma.' },
  { h: 'Hernán Cortés (1485 – 1547)' },
  'Spanish conquistador, born in Medellín (Extremadura). He was skilled at negotiating and at exploiting divisions among the indigenous peoples, disobeyed the orders of the governor of Cuba and became captain general of New Spain. His victory depended on indigenous allies, on disease and on Mexica miscalculations. He was also cruel, as in the massacre at Cholula.',
  { h: 'Malintzin, "La Malinche" (c. 1500 – c. 1529)' },
  'A Nahua woman, with the Christian name **Marina**, given to Cortés in 1519 in Tabasco as a slave. She spoke Nahuatl and Maya, and was Cortés’s **interpreter and adviser** during the conquest, in a chain with Gerónimo de Aguilar. She had a son with him, Martín. She is a highly debated figure: for some, a traitor; for others, a survivor who used the only power she had. Current historians tend to see her as a woman of great ability, without free choice.',
  { img: 'ast-malinche-lienzo', leg: 'Malintzin interpreting, Lienzo de Tlaxcala.' },
  { h: 'Xicohtencatl Axayacatl the Younger (d. 1521)' },
  'War leader of Tlaxcala. He first fought Cortés and later, as his ally, took part in the siege of Tenochtitlan. He was executed by Cortés in 1521, accused of wanting to abandon the alliance. He shows how the conquest was also a **war among indigenous peoples**, who chose sides for their own reasons.',
  { h: 'Bernardino de Sahagún (c. 1499 – 1590)' },
  'A Spanish Franciscan friar who arrived in Mexico in 1529. For decades, with a group of Nahua scholars of the College of Santa Cruz de Tlatelolco (such as **Antonio Valeriano**), he interviewed elders and compiled, in Nahuatl, an encyclopaedia of Mexica life: the **Florentine Codex**. It is the richest source on the gods, everyday life and the conquest. An attempt was made to stop the work in 1577, on the orders of Philip II, but it survived.'
];

const legado = [
  { h: 'What they left us' },
  { lista: [
    '**The city:** Mexico City, one of the largest urban areas in the world, stands on Tenochtitlan. The layout of the centre and many place names follow the old ones.',
    '**The language:** **Nahuatl** is spoken today by about 1.6 to 1.7 million people in Mexico, in many varieties, and is one of the country’s national languages.',
    '**Words:** words such as **chocolate**, **tomato**, **avocado** (*ahuacatl*), **chilli**, **coyote**, **tamale**, **chicle** and **Mexico** came from Nahuatl, through Spanish.',
    '**Foods:** maize, beans, tomato, squash, chilli, cacao and turkey, now found all over the world.',
    '**A national symbol:** the eagle on the nopal devouring the serpent is on the flag of Mexico.',
    '**Living culture:** markets, festivals, traditional medicine, chinampas and dances continue, often mixed with Christian and Hispanic tradition.'
  ] },
  { h: 'Art' },
  'Mexica art is at once **monumental** and very refined: great sculptures in basalt and andesite (Coatlicue, the Sun Stone, the Stone of Tizoc), pottery, **turquoise mosaics**, goldwork, featherwork and poetry. Almost all the gold was melted down by the conquerors. Works such as the **double-headed serpent** in turquoise mosaic (British Museum) and the **feather headdress** in Vienna show the refinement of craftsmen and artists.',
  { img: 'ast-serpente-turquesa', leg: 'Double-headed turquoise mosaic serpent, British Museum.' },
  { img: 'ast-penacho', leg: 'Feather headdress traditionally associated with Moctezuma, Weltmuseum Wien.' },
  { h: 'Architecture' },
  'The Mexica built **stepped** pyramids with twin temples on top, palaces, schools, ballcourts, causeways, dikes and aqueducts. The Templo Mayor went through about seven building phases, each over the previous one. Almost everything was demolished after 1521 and used as building material; what we see today has been unearthed since 1978.',
  { h: 'The conquest: facts, myths and debates' },
  'The conquest of 1519–1521 is one of the most retold and most distorted episodes in history. A few points to read with care:',
  { lista: [
    '**"Cortés had 500 men against an empire":** partly true, but it ignores that in the decisive phases the Spaniards were accompanied by **tens of thousands of indigenous allies** (Tlaxcalans, Texcocans, Totonacs and others), and that smallpox devastated the population of Tenochtitlan.',
    '**"Moctezuma thought Cortés was a god":** this is a narrative that appears in sources after the conquest and that many historians (for example Matthew Restall) consider a **later construction**; sources from the earliest years show a cautious, well-informed ruler.',
    '**Smallpox:** it was an important factor, but not the only one; mortality estimates vary widely.',
    '**"The city was destroyed by the Spaniards":** the city was besieged for about two and a half months and largely razed during the siege and after it.'
  ] },
  { img: 'ast-florentino', leg: 'Battle during the conquest, Florentine Codex, Book 12, folio 67r.' },
  { h: 'The rediscovery of Tenochtitlan' },
  'For centuries, colonial and republican Mexico City ignored the ruins beneath its streets. The discovery of **Coatlicue** and the **Sun Stone** in 1790 awakened interest; but it was the discovery of **Coyolxauhqui**, in 1978, that led to the systematic excavation of the Templo Mayor, directed by **Eduardo Matos Moctezuma**, with thousands of offerings. The **Templo Mayor Museum** opened in 1987, and excavations continue: in 2015 the **Huey Tzompantli** appeared.',
  { img: 'ast-bandeira', leg: 'Flag of Mexico with its coat of arms.' },
  { caixa: 'Where to visit', texto: 'In **Mexico City**: the **National Museum of Anthropology** (Sun Stone, Coatlicue, Stone of Tizoc), the **Templo Mayor Museum** and the archaeological zone in the Historic Centre, and the ruins of **Tlatelolco**. In **Xochimilco**, the chinampas; to the north, **Teotihuacan** and **Tula**. Outside Mexico: the **Weltmuseum** in Vienna (headdress), the **British Museum** (mosaics), the **Museum of the Americas** (Madrid), the **Bodleian Library** (Codex Mendoza) and the **Laurentian Library** (Florentine Codex).' },
  { img: 'ast-museu-antropologia', leg: 'Courtyard of the National Museum of Anthropology, Mexico City.' }
];

const quiz = [
  { p: 'What did the "Aztecs" call themselves?', op: ['Toltecs', 'Mexica', 'Chichimecs', 'Olmecs'], certa: 1, exp: 'The people we call Aztecs called themselves Mexica (or Tenochca, the people of Tenochtitlan). "Aztec" comes from Aztlán and became popular later.' },
  { p: 'According to tradition, in what year was Tenochtitlan founded?', op: ['1325', '1519', '1428', '1200'], certa: 0, exp: 'Tradition places the founding in 1325. Archaeology does not confirm the exact date.' },
  { p: 'What was the sign of the place where they were to found the city?', op: ['A jaguar on a pyramid', 'An eagle perched on a nopal devouring a serpent', 'A hummingbird on a lake', 'A feathered serpent'], certa: 1, exp: 'It is the symbol that is on the flag of Mexico today.' },
  { p: 'Which were the three cities of the Triple Alliance?', op: ['Tenochtitlan, Texcoco and Tlacopan', 'Tenochtitlan, Tula and Teotihuacan', 'Texcoco, Tlaxcala and Cholula', 'Tlatelolco, Culhuacan and Xochimilco'], certa: 0, exp: 'The Alliance was born in 1428, after the victory over Azcapotzalco.' },
  { p: 'What were chinampas?', op: ['Floating markets', 'Temples of Tlaloc', 'Farm plots built in the lake', 'Schools for nobles'], certa: 2, exp: 'They were artificial cultivation islands, still visible in Xochimilco.' },
  { p: 'Who were the pipiltin?', op: ['The merchants', 'The nobles', 'The slaves', 'The priests of the Sun'], certa: 1, exp: 'The pipiltin were the nobles; commoners were the macehualtin.' },
  { p: 'Which was the school of the sons of nobles?', op: ['Telpochcalli', 'Cuicacalli', 'Calmecac', 'Tzompantli'], certa: 2, exp: 'The calmecac taught priesthood, writing, astronomy and history. The telpochcalli was mostly for commoners.' },
  { p: 'Which shrines stood on top of the Templo Mayor?', op: ['Quetzalcoatl and Tezcatlipoca', 'Huitzilopochtli and Tlaloc', 'Coatlicue and Xipe Totec', 'Tlaloc and Mictlantecuhtli'], certa: 1, exp: 'One for the god of war and the Sun, the other for the god of rain.' },
  { p: 'Why is it misleading to call the Sun Stone the "Aztec Calendar"?', op: ['Because it is a fake', 'Because it was not used to count days, but was a cosmological and ritual piece', 'Because it is Maya', 'Because it was made by the Spaniards'], certa: 1, exp: 'It uses calendar symbols, but it did not serve to mark the days.' },
  { p: 'Who was the last tlatoani of Tenochtitlan?', op: ['Moctezuma II', 'Cuitláhuac', 'Ahuitzotl', 'Cuauhtémoc'], certa: 3, exp: 'Cuauhtémoc was captured on 13 August 1521.' },
  { p: 'Which people was never conquered by the Mexica and was Cortés’s main ally?', op: ['The Tlaxcalans', 'The Totonacs', 'The Mixtecs', 'The Maya'], certa: 0, exp: 'Tlaxcala, surrounded by Mexica territory, allied with the Spaniards.' },
  { p: 'What do historians say about the number of human sacrifices?', op: ['It was invented by the Spaniards', 'Sacrifice was real, but the numbers are much debated', 'Only animals were sacrificed', 'There are exact records of each one'], certa: 1, exp: 'There is archaeological proof, but the figures in the sources (for example 80,400 in 1487) are considered exaggerated.' },
  { p: 'What was the "Sad Night" (1520)?', op: ['The eclipse that frightened Moctezuma', 'The flight of the Spaniards from Tenochtitlan, with heavy losses', 'The fall of the city', 'The death of Cuauhtémoc'], certa: 1, exp: 'It was the Spanish retreat on the night of 30 June to 1 July 1520.' },
  { p: 'Who was Cortés’s interpreter, a speaker of Nahuatl and Maya?', op: ['Xochiquetzal', 'Coyolxauhqui', 'Malintzin (La Malinche)', 'Coatlicue'], certa: 2, exp: 'Malintzin, Doña Marina, was Cortés’s interpreter and adviser.' },
  { p: 'Which of these English words comes from Nahuatl?', op: ['Orange', 'Avocado', 'Lettuce', 'Olive'], certa: 1, exp: 'Avocado comes from ahuacatl, via Spanish; chocolate and tomato are also of Nahuatl origin.' }
];

export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };
