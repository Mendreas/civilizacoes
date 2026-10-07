// KINGDOM OF KONGO — full content in English. Same structure and image ids as dados.js (Portuguese).
// Dates are approximate: Kongo history before contact with Portugal (c. 1483) rests on oral tradition and archaeology and is much debated. BC/AD.

const visao = [
  { caixa: 'In brief', texto: [
    'The **Kingdom of Kongo** (in Kikongo, **Kongo dia Ntotila**) was one of the largest and best-organised states of Central Africa. It emerged around **1390** on the plateaus south of the lower Congo River, in a territory now divided between **northern Angola**, the west of the **Democratic Republic of the Congo**, the **Republic of the Congo** and a corner of **Gabon**. Its capital, **Mbanza Kongo**, stood some 500 metres above sea level, far from the coast, and for centuries was the centre of a realm of provinces, matrilineal lineages and an active trade in raffia cloth, copper, iron, salt and shell money.',
    'In **1483** the Portuguese navigator **Diogo Cão** reached the river mouth. It was the start of an unprecedented relationship between an African and a European kingdom: ambassadors exchanged, the king’s conversion to Christianity (1491), schools, a Kongo bishop and diplomatic letters between supposed equals. It was also the start of an increasingly unequal relationship dominated by the **slave trade**, which emptied whole regions, fuelled internal wars and in the end undermined the kingdom itself. After the battle of **Mbwila (Ambuíla, 1665)** and decades of civil war, Kongo never recovered its former strength; it survived as an ever more symbolic monarchy until Portuguese colonial rule abolished it in **1914**.'
  ] },
  { img: 'con-mapa-reino', leg: 'Old map of the Kingdom of Kongo and neighbouring regions, drawn from Portuguese information (17th century).' },
  { h: 'Where it lay' },
  'The kingdom occupied the **lower Congo** region, between the Atlantic Ocean in the west and the **Kwango** river in the east, and between the Congo river (north) and the **Dande** or **Kwanza** (south), with limits that varied greatly over the centuries. It was a landscape of rolling plateaus, green valleys, savannah and forest, crossed by rivers navigable only in stretches and by two marked seasons, the rains and the dry season (*cacimbo*). The great river gave the kingdom its name to those who knew it from the coast: for the Portuguese it was the «river of the Padrão» or «Zaire» (the Portuguese form of Kikongo *nzadi*, «the river that swallows all rivers»).',
  { img: 'con-rio-congo', leg: 'The Marshal Mobutu Bridge over the Congo River near Matadi, on the lower course of the river.' },
  'The capital, **Mbanza Kongo** (the «court of Kongo»), stood on a plateau in what is now northern Angola, in Zaire province. It was the symbolic heart of the kingdom, where the king was chosen and crowned, and where the Portuguese later built the stone church that gave the city the name **São Salvador do Congo**. It was also the meeting point of roads leading to the port of Mpinda (at the river mouth), to the great market of **Mpumbu** (on Malebo Pool, where Kinshasa and Brazzaville now stand) and to the lands of the interior.',
  { h: 'When it existed' },
  'Oral tradition says the kingdom was founded by a conqueror named **Lukeni lua Nimi**, and archaeological and genealogical dates point to the late fourteenth century. The chronology below is, for the earliest phases, an approximation; from 1483 written sources give fairly secure dates.',
  { tabela: { cab: ['Phase', 'Approximate dates', 'What marks it'], linhas: [
    ['Before the kingdom', 'to c. 1390', 'Villages of Bantu-speaking farmers, ironworkers and small chiefs (Mpemba Kasi, Mbata, Nsundi); circulation of copper, salt and raffia cloth'],
    ['Formation and expansion', 'c. 1390 – 1483', 'Lukeni lua Nimi and his successors unite the provinces; Mbanza Kongo becomes capital; officials and tribute; the realm grows'],
    ['Contact with Portugal', '1483 – 1506/1509', 'Arrival of Diogo Cão; embassies; baptism of Nzinga a Nkuwu (1491) as João I'],
    ['Christian kingdom and the trade', '1506/1509 – 1568', 'Afonso I, schools, a bishop, letters to the king of Portugal; the slave trade grows and causes conflict'],
    ['Crises and recovery', '1568 – 1665', 'The «Jaga» invasion (1568); Luanda and the kingdom of Angola (1575); embassy to Rome (1608); Garcia II and the Dutch; Mbwila (1665)'],
    ['Civil war and fragmentation', '1665 – 1709', 'Capital abandoned; rivalry between royal houses; Kimpa Vita (1704–1706); return to Mbanza Kongo in 1709'],
    ['Decline and end', '1709 – 1914', 'Kings with limited power; end of the Atlantic trade; growing Portuguese control (1857–1859); Berlin Conference (1884–85); end of the monarchy in 1914']
  ] } },
  { h: 'Who were the Bakongo?' },
  'The **Bakongo** (singular *Mukongo*) are the **Kikongo**-speaking people, of the great Bantu family. Today they number millions in Angola, in the two Republics of Congo and in the diaspora. Their society was organised in **matrilineal clans** (*kanda*), in which membership and inheritance passed through the mother’s line, and in villages governed by lineage heads. The kingdom did not abolish this structure: it laid over it an elective monarchy, with provincial governors and a capital. Over the centuries the Bakongo worked iron, copper and raffia, grew sorghum, yams and bananas (and later American maize and cassava), and created one of the best-known artistic traditions of Africa.',
  { h: 'Why they matter' },
  { lista: [
    '**An African state in dialogue with Europe:** Kongo was one of the first sub-Saharan kingdoms to exchange ambassadors with Portugal and with the Holy See, and to have an African bishop and priests.',
    '**The cost of the trade:** the history of Kongo is one of the best-documented cases of how the Atlantic slave trade undermined a society, and of how part of the local elite took part in it and profited, while others fought it.',
    '**African Christianity:** Kongo Catholicism mixed with local beliefs for centuries and gave rise to movements such as that of Kimpa Vita; it is one of the oldest examples of an African Christianity with its own form.',
    '**Art:** *nkisi* power figures, funerary sculptures, Kongo crucifixes and raffia textiles are in museums around the world.',
    '**Politics:** the king was elected from candidates of rival lineages, and governors held power of their own; a system of balances that helps explain the succession crises.',
    '**Memory today:** the name «Congo» lives on in two countries, a river and a rainforest basin; the kingdom is one of the strongest historical symbols of Angola, the DRC and Bakongo communities.'
  ] },
  { img: 'con-mbanza-kongo-reconstrucao', leg: 'Conjectural reconstruction of Mbanza Kongo around 1600. AI-generated illustration.' },
  { caixa: 'Kongo today', texto: 'The old kingdom is divided by three modern borders, fixed at the Berlin Conference (1884–85) and in later colonial treaties: **Angola** (Zaire province and Cabinda), the **Democratic Republic of the Congo** (Kongo Central) and the **Republic of the Congo** (Brazzaville). In **2017** UNESCO inscribed «Mbanza Kongo, Vestiges of the Capital of the former Kingdom of Kongo» on the World Heritage List, the first site in Angola to be listed. The Kikongo language is still alive, and the kingdom’s history is a field of active research in Angola, Portugal, Europe and the United States.' }
];

const linha = [
  'This timeline follows the kingdom from its origin to the end of the monarchy. For the period before 1483 we have only oral traditions, collected after contact, and archaeology; those dates are very approximate. Written sources (letters from the kings of Kongo, accounts by Portuguese, Jesuits, Capuchins and Dutch) begin around 1490 and are mostly written by Europeans, so they must be read with care.',
  { linha: [
    { d: 'c. 13th – 14th c.', t: 'Before the kingdom', x: 'Between the lower Congo river and the Kwango live Bantu-speaking farmers organised in chiefdoms. They work iron and copper and make raffia cloth. There are small «kingdoms» such as **Mpemba Kasi** (around the future Mbanza Kongo), **Mbata** and **Nsundi**. Archaeology shows dense settlement of the plateau from at least the thirteenth century.' },
    { d: 'c. 1390', t: 'Lukeni lua Nimi founds the kingdom', x: 'According to oral tradition, **Lukeni lua Nimi**, son of a chief of the kingdom of Bungu (on the coast), crosses the river, defeats the local chief of **Mpemba Kasi** and sets up his court at **Mbanza Kongo**. The story has legendary elements (the marriage to the local chief’s daughter, the «conquest of the power of the land»), and the exact date is debated: many historians accept the late fourteenth century, others the early fifteenth.' },
    { d: '15th c.', t: 'Expansion of the provinces', x: 'Lukeni’s successors add to the capital the provinces of **Mbamba**, **Nsundi**, **Mbata**, **Mpangu**, **Soyo** and **Mpemba**, governed by men the king trusts or by local chiefs who recognise his authority. Tribute is paid in raffia cloth, shell money (*nzimbu*), copper, iron and farm produce.' },
  ] },
  { img: 'con-lukeni-fundacao', leg: 'Conjectural scene of the founding of the kingdom according to oral tradition. AI-generated illustration.' },
  { img: 'con-diogo-cao-padrao', leg: 'Padrão of Diogo Cão at Cabo Negro (Angola), stone marker of the Portuguese voyages of the 1480s.' },
  { linha: [
    { d: 'c. 1483', t: 'Diogo Cão reaches the river', x: 'The Portuguese navigator **Diogo Cão**, exploring the Atlantic coast of Africa on the orders of King João II, reaches the mouth of the Congo river and raises a **padrão** (a stone marker with Portugal’s arms). The Portuguese make contact with local chiefs; Cão takes some Kongo men to Lisbon, and returns with them on a second voyage (c. 1485–86). The details (dates, numbers, whether they were hostages or guests) are debated.' },
  ] },
  { img: 'con-recepcao-diogo-cao', leg: 'Conjectural scene of first contact between Portuguese and Kongo people on the coast, c. 1483. AI-generated illustration.' },
  { img: 'con-afonso-i-gravura', leg: 'Afonso I (Mvemba a Nzinga) dictating a letter in his palace at Mbanza Kongo, c. 1520: an imagined scene, with dress mixing Kongo and Portuguese elements. AI-generated illustration; not a portrait.' },
  { linha: [
    { d: '1491', t: 'Baptism of King Nzinga a Nkuwu', x: 'A Portuguese mission, with priests, craftsmen and gifts, arrives at the river mouth. The governor of **Soyo** is baptised in April; on 3 May 1491 King **Nzinga a Nkuwu** is baptised, taking the name **João I**, together with his family. His son **Mvemba a Nzinga** receives the name **Afonso**. The conversion probably had political motives (alliances, prestige, techniques) as well as religious ones, and the king probably saw in the Portuguese a source of power.' },
    { d: 'c. 1495', t: 'The king abandons Christianity', x: 'Nzinga a Nkuwu turns away from the new religion, partly because the Church demanded monogamy, which clashed with the nobility’s policy of marriage alliances. His son Afonso, governor of Nsundi, stays Christian and becomes one of the defenders of the faith among the nobles.' },
    { d: 'c. 1506 – 1509', t: 'Afonso I takes power', x: 'After his father’s death Afonso (**Afonso I**, Mvemba a Nzinga) defeats in battle his half-brother **Mpanzu a Kitima**, who defended the traditional religion. Tradition, told by Afonso himself and by Portuguese chroniclers, speaks of a vision of Saint James and a cross in the sky that decided the battle; this is a **legendary** account, useful for understanding how the king wished to be seen. The date is debated (1506 or 1509 in the sources). He reigns until c. 1542/43.' },
    { d: '1512', t: 'The Regimento and embassies', x: 'A Portuguese mission arrives in Kongo bringing the so-called **Regimento** of King Manuel I, a political and commercial programme that offered the Kongo king guidelines on the court, justice and tax collection «in the Portuguese way». Afonso I accepts parts of it but keeps control of the kingdom. He sends young nobles, among them his son **Henrique**, to study in Lisbon.' },
    { d: 'c. 1516', t: 'The court school', x: 'According to Portuguese sources, the royal school at Mbanza Kongo comes to have more than a thousand pupils, children of nobles and others. Reading, writing, Latin and Christian doctrine are taught. Afonso I himself writes letters in Portuguese to the kings of Portugal.' },
    { d: '1518', t: 'First Kongo bishop', x: 'Afonso’s son **Henrique** is consecrated bishop (titular bishop of Utica) in Rome, with the approval of Pope Leo X. He returns to Kongo around 1521 and dies c. 1531. He is regarded as the first known bishop from Central Africa (there had been bishops in Nubia and Ethiopia before him).' },
  ] },
  { img: 'con-escola-real', leg: 'Conjectural scene of the court school at Mbanza Kongo, c. 1516. AI-generated illustration.' },
  { img: 'con-batismo-1491', leg: 'Conjectural scene of the baptism of King Nzinga a Nkuwu, 3 May 1491. AI-generated illustration.' },
  { img: 'con-embaixador-eckhout', leg: 'African man painted by Albert Eckhout (c. 1641) in Dutch Brazil; identification with Kongo or Angola is debated.' },
  { img: 'con-antonio-manuel-roma', leg: 'Antonio Manuel (Nsaku ne Vunda), ambassador of Kongo, at the Vatican in 1608: an imagined scene, with conjectural details of dress and guards. AI-generated illustration; not a portrait.' },
  { linha: [
    { d: '1526', t: 'Afonso I’s letter', x: 'Afonso I writes to **King João III** denouncing that Portuguese traders (mostly from São Tomé) kidnap free people, even nobles and relatives, and that the kingdom is being «depopulated». He asks that only priests, teachers and apothecaries be sent, and that trade be controlled. It is one of the most important documents in the history of the slave trade. The Portuguese reply with promises and carry on trading with the more distant provinces.' },
    { d: '1545 – 1561', t: 'Diogo I and the Jesuits', x: 'After Afonso I’s death, and a short reign (Pedro I), **Diogo I** reigns. In 1548 the first Jesuit mission arrives. Diogo I tries to balance the influence of the Portuguese and the priests, and tensions with São Tomé traders continue.' },
    { d: '1568', t: 'The «Jaga» invasion', x: 'A warrior group from the east, known in Portuguese sources as the **Jaga** (or Yaka; their exact identity is debated), invades the kingdom and sacks Mbanza Kongo. King **Álvaro I** flees to an island in the river and asks the king of Portugal for help. A Portuguese expedition led by **Francisco de Gouveia Sottomaior** helps restore the king (1571). In return Kongo becomes more dependent on Portugal.' },
    { d: '1575', t: 'Luanda and the kingdom of Angola', x: 'The Portuguese **Paulo Dias de Novais** founds **Luanda**, south of Kongo, and starts building the colony of Angola on the back of wars against the kingdom of Ndongo. Kongo loses its near monopoly on contact with Portugal and sees a rival grow that soon becomes the main source of enslaved people for Brazil.' },
  ] },
  { linha: [
    { d: '1608', t: 'Embassy to Rome', x: 'King **Álvaro II** sends **António Manuel (Nsaku ne Vunda)**, his ambassador, to **Pope Paul V**. Received in Rome with honours, he dies in the city in January 1608; he is buried in Santa Maria Maggiore. The aim was to obtain bishops and priests without going through Portugal.' },
    { d: '1622 – 1624', t: 'War with Angola and the first book in Kikongo', x: 'Kongo and the Portuguese forces of Luanda go to war over trade, borders and captives (**Mbumbi**, 1622). The war shows that Portugal no longer treated Kongo as an equal partner. In 1624 a bilingual *Doutrina Cristã* (Christian Doctrine) is published in Portuguese and Kikongo, one of the first books printed in a Bantu language.' },
    { d: '1641 – 1648', t: 'Garcia II and the Dutch', x: 'King **Garcia II** (Nkanga a Lukeni) allies with the Dutch, who occupy **Luanda** (1641–1648), to check Portuguese expansion. The Luso-Brazilian fleet of Salvador Correia de Sá retakes Luanda in 1648. In 1645 the first Italian **Capuchins** arrive and settle at court.' },
  ] },
  { linha: [
    { d: '29 October 1665', t: 'Battle of Mbwila (Ambuíla)', x: 'King **António I** (Nvita a Nkanga) comes into conflict with Portugal over control of the territory of Mbwila (Ambuíla) and sends an army. A Portuguese force commanded by **Luís Lopes de Sequeira**, with firearms and African allies, defeats it. The king is killed and his head is taken. The Kongo crown is lost and is never again disputed peacefully.' },
    { d: '1665 – 1709', t: 'Civil war', x: 'After Mbwila the royal lineages (the **Kimpanzu** and **Kinlaza** houses, then other branches) fight over the throne. Mbanza Kongo is abandoned in 1678. Power fragments into rival fiefdoms, and the slave trade exploits the wars to recruit captives.' },
    { d: '1704 – 1706', t: 'Kimpa Vita (Dona Beatriz)', x: 'A young noblewoman, **Beatriz Kimpa Vita**, claims to be possessed by **Saint Anthony of Padua** and preaches a return to the capital, an end to war and the restoration of the kingdom. She says Jesus was born in Mbanza Kongo. She attracts thousands of followers (the **Antonians**) and worries King **Pedro IV** and the Capuchins. She is captured and burned as a heretic on 2 July 1706.' },
    { d: '1709', t: 'Pedro IV returns to Mbanza Kongo', x: 'King **Pedro IV** defeats the Antonians and his rivals and reoccupies the capital in February 1709. The kingdom is reunified in theory, but its strength is reduced and the power of provincial governors remains great.' },
  ] },
  { img: 'con-batalha-ambuila', leg: 'Conjectural scene of the battle of Mbwila, 1665. AI-generated illustration.' },
  { img: 'con-kimpa-vita-cena', leg: 'Conjectural scene of Kimpa Vita preaching, c. 1705. AI-generated illustration.' },
  { img: 'con-toni-malau', leg: 'Small figure of Saint Anthony «Toni Malau», an Antonian amulet (18th century).' },
  { linha: [
    { d: '18th – 19th c.', t: 'A weakened kingdom', x: 'The kings of São Salvador, chosen among rival houses, control little beyond the capital. The slave trade to Brazil stays strong along the coast (ports of Loango, Cabinda, Ambriz and Boma) and passes through the hands of African, Portuguese, Brazilian and other European traders. Portugal bans the trade in 1836, but it continues clandestinely for decades.' },
    { d: '1857 – 1859', t: 'Portugal intervenes in the succession', x: 'In 1857 King **Henrique II** dies and Portugal begins to intervene directly in the choice of king. In 1859, with Portuguese military support, **Pedro V** is crowned and swears **vassalage** to Portugal, something no king of Kongo had done before. The kingdom’s sovereignty becomes more and more formal.' },
    { d: '1884 – 1885', t: 'Berlin Conference', x: 'The European powers divide the Congo basin without consulting Africans. The old kingdom is split between Portuguese Angola, the «Congo Free State» (the personal property of King Leopold II of Belgium, later the Belgian Congo) and French Congo. The Treaty of Simulambuco (1885) places Cabinda under a Portuguese protectorate.' },
    { d: '1914', t: 'End of the monarchy', x: 'After the revolt of **1913–1914**, led by **Tulante Álvaro Buta** against forced labour and colonial taxes, the Portuguese government abolishes the kingdom and merges the territory into the colony of Angola. The last king recognised by Portugal, **Manuel III**, had reigned since 1911. The line of kings is still claimed by heirs, and the title has a cultural and symbolic role today.' }
  ] }
];

const mapa = [
  'The kingdom was a mosaic of **provinces**, ports and trade routes. The places below are the most important. The oldest names are in Kikongo; many now have Portuguese, Belgian or French names, and the exact sites of some are debated.',
  { tabela: { cab: ['Place', 'Where (today)', 'When / who', 'Importance'], linhas: [
    ['Mbanza Kongo (São Salvador)', 'Zaire province, Angola', 'c. 1390 – 1914', 'Capital and symbolic centre; seat of the king, the court and the church'],
    ['Mpinda', 'Mouth of the Congo river (Soyo), Angola', '15th – 17th c.', 'Main port of the kingdom; arrival of the Portuguese and embarkation of enslaved people'],
    ['Soyo', 'Northern Angola', '15th – 19th c.', 'Province at the river entrance; powerful ruler, at times almost independent'],
    ['Mpemba Kasi', 'Around Mbanza Kongo', 'Before c. 1390', 'Small kingdom conquered by Lukeni lua Nimi'],
    ['Nsundi', 'North of the kingdom, Angola and DRC', '15th – 17th c.', 'Province Afonso I governed before becoming king'],
    ['Mbata', 'Southeast of the kingdom', '14th – 17th c.', 'Former kingdom annexed; a source of warriors and officials'],
    ['Mbamba', 'South of the kingdom, Angola', '15th – 17th c.', 'Military province on the border with Ndongo; contact with Luanda'],
    ['Mpangu', 'Interior, Angola', '15th – 17th c.', 'Interior province on the central plateau'],
    ['Mpumbu (Malebo Pool)', 'Between Kinshasa and Brazzaville', '16th – 19th c.', 'Great inland market: linked the kingdom to the upper river'],
    ['Luanda', 'Coast of Angola', 'Founded 1575', 'Neighbouring Portuguese colony; origin of pressure on Kongo'],
    ['Loango, Cabinda and Ambriz', 'Coast north and south', '16th – 19th c.', 'Slave-trade ports outside the king’s direct control']
  ] } },
  { img: 'con-mapa-pigafetta', leg: 'Map of the kingdom of Kongo in the work of Pigafetta and Lopes, 1591.' },
  { img: 'con-ruinas-se', leg: 'AI-generated illustration: reconstruction of the Cathedral of São Salvador at Mbanza Kongo, capital of the Kingdom of Kongo, in the early 16th century.' },
  { h: 'Mbanza Kongo: the capital' },
  '**Mbanza Kongo** stood on a plateau, with water and good soil around, some 150 km from the coast. It was more a **group of districts** than a walled city: the quarter of the king and court, the quarter of the nobles, the «Portuguese town» (from the sixteenth century) and the vast area of villages around. In the seventeenth century travellers speak of tens of thousands of inhabitants, which made it one of the largest cities of Central Africa, though the figures are estimates. The place also had religious value: near the city were trees, springs and sacred places linked to the ancestors.',
  'With Christianity the Portuguese built a **stone church** (the future cathedral), a rarity in central and western Africa in the sixteenth century, and the city took the name **São Salvador**. In the seventeenth century the ruins of the cathedral, churches and stone houses were visible, and many can still be seen today. In 1678 the city was abandoned during the civil war and only retaken in 1709.',
  { h: 'Mpinda and the river: the road to the sea' },
  'The coast was the point of contact with Europeans. The port of **Mpinda**, at the river mouth, was where Portuguese ships arrived in the sixteenth century. From there travellers walked or were carried in hammocks for days to Mbanza Kongo. Control of this port, and later of those that followed it, was vital to the king and the governors, because it gave access to weapons, European cloth and wine and, at the same time, the outlet for enslaved people.',
  { img: 'con-porto-mpinda', leg: 'Conjectural scene of the port of Mpinda, 16th century. AI-generated illustration.' },
  { h: 'The Mpumbu market and the routes of the interior' },
  'To the east, on **Malebo Pool**, the great market of **Mpumbu** linked the kingdom to the upper Congo and to the world of the Teke, the Luba and other peoples. From there came ivory, copper, cloth and, over time, captives. The **pombeiros**, itinerant African traders, travelled these routes. Trade circulated the **nzimbu shells** (shells of a small mollusc from Luanda island), which served as money in the kingdom.',
  { img: 'con-mercado-mpumbu', leg: 'Conjectural scene of the Mpumbu market, 17th century. AI-generated illustration.' },
  { img: 'con-berlim-1885', leg: 'Cartoon of Leopold II and other imperial powers at the Berlin Conference, 1884–85.' },
  { h: 'The neighbours' },
  'Kongo was not alone. To the north lay the kingdom of **Loango**, also with a coast and trade; to the south **Ndongo** and **Matamba** (ruled in the seventeenth century by Queen **Njinga**, who resisted the Portuguese). To the east lay the states of the **Luba** (16th c.), **Lunda** (17th c.) and **Kuba** (17th c.), known to Kongo through trade. They are independent histories, touched on here only in passing; they deserve chapters of their own.',
  { h: 'The division of the kingdom' },
  'At the end of the nineteenth century the Berlin Conference (1884–85) divided the territory among three colonial powers. The borders cut across families, clans and roads, and created the basis of the present borders of Angola, the DRC and the Republic of the Congo.',
];

const sociedade = [
  { h: '1. Political organisation' },
  'The king, the **manikongo** (*mwene Kongo*, «lord of Kongo»), was a powerful monarch but **not an absolute one**. He was chosen by a **council of electors**, made up of court and provincial dignitaries, from candidates of noble lineages. This elective choice explains the frequency of succession wars. Inheritance passed through the matrilineal line, but the king had to prove strength and support.',
  'The territory was divided into **provinces** (Mbamba, Nsundi, Mbata, Mpangu, Soyo, Mpemba), governed by **governors** appointed by the king or by hereditary chiefs with great autonomy. Each province was divided into districts and villages. Royal officials collected **tribute** in cloth, shells, ivory and farm produce, and administered justice. The king also had a personal guard, counsellors and ambassadors. After 1491 nobles learned Portuguese and Latin, and European titles were adopted: dukes, marquises, counts (for example the **count of Soyo**), with African functions.',
  { img: 'con-corte-manicongo', leg: 'Conjectural scene of the manikongo’s court, 16th century. AI-generated illustration.' },
  { h: '2. Social classes' },
  { lista: [
    '**The king and the court:** the manikongo, his wives, counsellors and the court nobility.',
    '**Nobles and governors:** heads of provinces and lineages; many received Portuguese titles.',
    '**Officials and priests:** judges, tribute collectors, ritual specialists (*nganga*) and, after 1491, priests.',
    '**Free peasants and craftsmen:** the great majority; farmers, blacksmiths, weavers, potters, hunters.',
    '**Enslaved people:** they existed before the Portuguese arrived; they could be prisoners of war, debtors or convicts. Many were integrated into the owner’s family, but Atlantic slavery transformed the system radically.',
    '**Traders and intermediaries:** an increasingly strong position, especially on the coast and in the interior.'
  ] },
  { h: '3. Religion' },
  'Traditional Bakongo religion stressed a **supreme being** (**Nzambi Mpungu**), the **ancestors** (*bakulu*), nature spirits and the **nkisi**, objects or entities in which protective and healing forces were «held» by a specialist (the *nganga*). The worldview was that of the **Kongo cosmogram** (*dikenga*): a circle with a cross, where the Sun passes through four moments (birth, zenith, death, rebirth), and a horizontal line, the **Kalunga**, separates the world of the living from that of the dead, associated with water. This view made it easier to read the Christian cross in a local way.',
  { img: 'con-dikenga', leg: 'Diagram of the Kongo cosmogram (dikenga).' },
  '**Christianity** arrived in 1491. The kings favoured it because it gave them links with Portugal and Rome; but Kongo Catholicism was not a copy of the European one: the cross, the saints and the sacraments were read with local categories, and the figure of a saint (for example Saint Anthony) came close to an *nkisi*. There were African priests, churches, confraternities and a local Church, in constant tension with Portuguese and Italian priests. It was on this ground that Kimpa Vita’s movement arose.',
  { tabela: { cab: ['Figure / concept', 'Role', 'Where it appears'], linhas: [
    ['Nzambi Mpungu', 'Supreme being and creator', 'Oral tradition; used by missionaries for «God»'],
    ['Bakulu', 'Protective ancestors', 'Family cult; tombs and cemeteries'],
    ['Nkisi (plural *minkisi*)', 'Objects charged with power, to heal, protect or judge', 'Wooden figures, baskets, containers'],
    ['Nganga', 'Ritual specialist: healer, diviner and judge', 'Villages and court'],
    ['Dikenga', 'Cosmogram: the cycle of life and passage between worlds', 'Art, rituals, symbols'],
    ['Cross (*nkangi kiditu*)', 'Christian symbol with a local reading', 'Brass or wooden crucifixes']
  ] } },
  { img: 'con-cruz-kongo', leg: 'Kongo brass crucifix, 17th or 18th century.' },
  { img: 'con-nkisi-nkondi', leg: 'Nkisi nkondi, a power figure with nails and blades, Kongo (museum).' },
  { h: '4. Economy' },
  'The base of the economy was **agriculture** (sorghum, yams, bananas and, later, American maize and cassava), hunting, river fishing and small livestock. **Iron** and **copper** were worked by smiths, who had a special status. **Raffia cloth** served as clothing, tribute and money. **Nzimbu shells**, from a small cowry of Luanda island, were the kingdom’s currency, controlled by the king until the seventeenth century, when Portuguese competition and inflation ruined them. Trade carried copper, salt, ivory, cloth and, more and more, people.',
  { img: 'con-aldeia-kongo', leg: 'Conjectural scene of a Kongo village with fields and thatched houses, 16th century. AI-generated illustration.' },
  { img: 'con-navio-brookes', leg: 'Plan of the slave ship Brookes, 1788, used by abolitionists (British Library).' },
  { h: '5. The slave trade' },
  'Slavery existed in Kongo before 1483, as in many societies of the world, but it was small in scale and tied to the household. With the arrival of the Portuguese, the **demand for labour** for the sugar plantations of **São Tomé** and, from the sixteenth century, for **Brazil**, created a market that changed everything. King Afonso I and his successors took part in the trade, selling prisoners of war, and tried to regulate it; but growing demand made it uncontrollable. Traders from São Tomé and Luanda, and later Dutch, French, English and Brazilians, bought captives across the territory, and many free Kongo people were kidnapped.',
  'The numbers are hard to establish and vary by source. The international *Slave Voyages* database estimates that **more than 5 million** Africans embarked, between the sixteenth and nineteenth centuries, in the vast region of **West Central Africa** (from Cabinda to Benguela), the largest region of departure of the Atlantic trade. How many came from the kingdom of Kongo proper is debated, and most captives came more and more from the interior. What is certain is the effect: depopulation, wars to obtain captives, insecurity and the weakening of royal power.',
  { cit: 'Every day the traders kidnap our nationals, children of our country, children of our nobles and vassals, even people of our own family. [...] So great is the corruption and licentiousness that our country is being completely depopulated.', fonte: 'Afonso I of Kongo, letter to King João III, 6 July 1526 (free translation, based on the edition by A. Brásio, *Monumenta Missionaria Africana*)' },
  { caixa: 'How to read this subject', texto: 'The trade was the work of many actors: European crowns, merchants, African intermediaries, and the people and families who fought it. It is neither «African guilt» nor «only European guilt». What history shows is how a system of enormous external demand corrupted local balances, and how those who opposed it, like Afonso I, lacked the means to stop it. The victims, millions of people with names and histories, are the centre of the subject.' },
  { h: '6. Writing and languages' },
  'Kikongo was an **oral** language until the Europeans arrived; kings communicated through ambassadors, proverbs and elaborate rhetoric. With the court school the nobility began to write in **Portuguese**, and dozens of royal letters survive, some of great historical value. In 1624 the first catechism in Kikongo appeared. Oral tradition, proverbs, tales and songs remained the memory of the kingdom.',
  { h: '7. House and village' },
  'The traditional house was made of **poles, grass and raffia**, with a two-sided roof, often surrounded by a small fence. Villages were organised around a square, with a tree and the common space; each lineage had its own quarter. In the capital there were stone and adobe houses of the Portuguese and of Christian nobles.',
  { h: '8. Food' },
  'The diet was based on **sorghum and millet**, **yams**, **bananas**, **beans**, **palm oil** and **fish**, with game and small livestock meat on special occasions. **Palm wine** was drunk at festivals. Cassava and maize from the Americas were introduced in the sixteenth century and became the staple of the diet.',
  { h: '9. Clothing' },
  'Clothing was made of **raffia cloth**: waist and shoulder cloths, sometimes with geometric patterns. Nobles wore embroidered raffia caps (*mpu*), animal skins and copper and ivory ornaments; after contact with the Portuguese, European cloth, velvets, hats and swords appeared.',
  { img: 'con-mpu-chapeu', leg: 'Woven raffia cap (*mpu*), Kongo.' },
  { img: 'con-tecido-ratia', leg: 'Kongo raffia cloth, 18th–19th centuries.' },
  { img: 'con-tecelagem-rafia', leg: 'Conjectural scene of raffia weaving in a Kongo village. AI-generated illustration.' },
  { h: '10. Music and festivals' },
  'Music used **drums**, **double iron bells**, **xylophones**, the **musical bow** and the *sanza* (lamellophone). There were dances linked to funerals, weddings, the investiture of chiefs and *nkisi* ceremonies. Missionaries also mention Christian singing and the organ of the cathedral of São Salvador.',
  { h: '11. Science and technology' },
  'The Bakongo had great knowledge of **medicinal plants** and of **iron and copper metallurgy**, with bellows furnaces and moulds. The smith was a respected, almost sacred figure. **Raffia textiles** required advanced fibre techniques. Farming tools included iron hoes, axes and knives.',
  { img: 'con-ferreiro-kongo', leg: 'Conjectural scene of a Kongo blacksmith’s workshop. AI-generated illustration.' },
  { h: '12. War' },
  'The army was made up of **archers**, **spearmen** and warriors with **leather shields** and **short swords**, commanded by governors. The introduction of Portuguese **firearms**, and later the participation of Portuguese allies, changed warfare. The kingdom never had a standing army comparable to the European ones and relied on provincial contingents. Control of firearms, in the hands of Portuguese and traders, was a decisive factor at Mbwila.',
  { img: 'con-marfim-loango', leg: 'Carved ivory tusk from Loango, 19th century, with scenes of daily life.' },
  { img: 'con-cavazzi-gravura', leg: 'Illustration from Cavazzi’s manuscript (c. 1668): the «fish-woman» (pesce donna) of the rivers of Angola and Congo.' },
  { img: 'con-mangaaka', leg: 'Nkisi nkondi Mangaaka, a large power figure of the Yombe people, Congo (Metropolitan Museum of Art).' },
  { img: 'con-pfemba', leg: 'Maternity figure (pfemba) of the Kongo people, Democratic Republic of the Congo (Honolulu Museum of Art).' },
];

const personalidades = [
  'Kongo sources show mostly kings, nobles and missionaries, because they were the ones who wrote or were described in writing. Most Kongo people, including women and captives, left few direct records. The figures below are real, except where stated otherwise.',
  { h: 'Lukeni lua Nimi (founder, c. 1390) — oral tradition' },
  'The founder of the kingdom, according to oral tradition. Son of a coastal chief, he is said to have conquered Mpemba Kasi and founded Mbanza Kongo. His figure mixes fact and legend, and many versions present him as a civilising hero. He is a **semi-legendary** figure.',
  { h: 'Nzinga a Nkuwu — João I (reigned c. 1470 – 1509)' },
  'The king who received the Portuguese and was baptised in 1491. He sought from the newcomers techniques, prestige and allies, but rejected monogamy and abandoned Christianity around 1495. He died in 1509 (date debated).',
  { h: 'Nzinga a Nlaza — Dona Leonor' },
  'Mother of Afonso I and queen. Baptised in 1491, she was decisive in supporting her son in the struggle for power, and helped sustain the new religion among the women of the court. She shows the weight of noblewomen in Kongo politics.',
  { h: 'Afonso I — Mvemba a Nzinga (reigned c. 1506/1509 – c. 1542/43)' },
  'The most important king of Kongo. A convinced Christian, he modernised the court and schools, wrote to kings and popes, and backed his son Henrique as bishop. He was at once a conqueror who took part in wars and in the trade in captives, and the first to denounce in writing, in 1526, the horrors of the trade. His letters are among the richest sources in the whole history of sub-Saharan Africa.',
  { h: 'Dom Henrique (d. c. 1531)' },
  'Son of Afonso I, he studied in Lisbon and was consecrated bishop in 1518 (titular bishop of Utica), returning to Kongo around 1521. His career shows the kingdom’s effort to have its own clergy; he died around 1531.',
  { h: 'Diogo I (reigned 1545 – 1561)' },
  'He reigned after Afonso I and Pedro I. He tried to balance Portuguese and Jesuit influences, received the first mission of the Society of Jesus (1548) and defended the kingdom’s autonomy. His time was one of growing tension with São Tomé traders.',
  { h: 'Álvaro I (reigned 1568 – 1587)' },
  'The king who faced the «Jaga» invasion, fled the capital and asked Portugal for help. Restored with Portuguese military aid (1571), he reigned cautiously and became more dependent on the king of Portugal.',
  { h: 'António Manuel — Nsaku ne Vunda (d. 1608)' },
  'A Kongo noble, ambassador of Kongo to **Pope Paul V**. He made a long journey through Portugal and Spain to Rome, where he was received with great honours; he died in the city in 1608 and was buried in Santa Maria Maggiore. He is the symbol of the kingdom’s diplomatic ambition.',
  { h: 'Garcia II — Nkanga a Lukeni (reigned 1641 – 1661)' },
  'A skilful king with a long reign, he tried to strengthen the kingdom by allying with the Dutch against the Portuguese. After his death the succession conflicts began again.',
  { h: 'António I — Nvita a Nkanga (reigned 1661 – 1665)' },
  'The king killed at the battle of **Mbwila** in 1665, fighting a Portuguese force. His death set off the civil war and is regarded as the end of Kongo as a great power.',
  { h: 'Beatriz Kimpa Vita (c. 1684 – 1706)' },
  'A young noblewoman, healer and prophet. She claimed to be possessed by Saint Anthony and called for the reunification of the kingdom and a return to the capital. The Capuchins and King Pedro IV saw her as a threat and burned her for heresy on 2 July 1706. She is today a figure of identity and resistance in Congo and Angola, and her story is the subject of books, plays and studies.',
  { h: 'Pedro IV (reigned c. 1696 – 1718)' },
  'The king who reunified the kingdom in 1709, after decades of civil war, and reoccupied the capital. He reigned with the support of the Capuchins and was responsible for the execution of Kimpa Vita.',
  { h: 'Cavazzi and other chroniclers' },
  'What we know of Kongo comes in large part from **European chroniclers**, such as the Italian priest **Giovanni Antonio Cavazzi da Montecuccolo**, whose seventeenth-century illustrations and accounts are a precious source, but with a missionary’s eye.',
];

const legado = [
  { h: 'What Kongo left' },
  { lista: [
    '**A model of African diplomacy:** letters, embassies and correspondence with Portugal, Rome and the Netherlands.',
    '**The memory of the trade:** Afonso I’s 1526 letter is one of the most quoted texts on Atlantic slavery.',
    '**An African Christianity:** the Kongo Church, with priests, bishops and movements of its own, is one of the oldest in sub-Saharan Africa.',
    '**A language:** Kikongo, spoken by millions, which gave rise to words and traditions in the Americas (Brazil, the Caribbean, the United States).',
    '**The diaspora:** many Kongo captives took to Brazil, Cuba and other regions their beliefs, music and words, and their mark is on Afro-Brazilian and Afro-Caribbean culture.'
  ] },
  { h: 'Art' },
  'Kongo art is famous for its **power figures (*nkisi*)**, wooden sculptures that receive active substances and, in some cases, nails and blades, each one to seal an oath or punish a crime. The *nkisi nkondi* figure, for example, was «activated» by a *nganga*. There are also **stone funerary sculptures (*ntadi*)** from Mboma and Yombe, **maternity figures (*phemba*)**, **brass crucifixes**, **raffia caps and cloths**, **carved ivories** from Loango and **basketry**.',
  { h: 'Architecture' },
  'Traditional Kongo architecture used perishable materials, which explains the scarcity of ruins. The stone buildings of Mbanza Kongo (churches, the cathedral) result from contact with Portugal. UNESCO protects the whole site, including traditional sacred places such as trees and springs.',
  { h: 'Rediscovery' },
  'During the colonial period Kongo was studied mainly by missionaries and administrators. Since the 1960s–70s historians such as **Jan Vansina**, **John Thornton** and **Anne Hilton**, and African researchers, have reconstructed its history from Portuguese, Italian, Dutch and oral sources. Recent excavations at Mbanza Kongo have brought new data on the city and its chronology.',
  { h: 'The neighbours: Luba and Kuba, briefly' },
  'Central Africa had other powerful artistic and political traditions. The **Luba** created the *lukasa* (memory board) and the **Kuba**, famous for their embroidered raffia cloths, are distant neighbours of Kongo. They belong to the same cultural world, but they are histories of their own.',
  { img: 'con-luba-lukasa', leg: 'Luba lukasa, a memory board with beads and shells.' },
  { img: 'con-kuba-tecido', leg: 'Embroidered raffia cloth of the Kuba people (DRC).' },
  { h: 'Where to visit' },
  { lista: [
    '**Mbanza Kongo, Angola:** the ruins and the museum of the Kings of Kongo, a World Heritage Site.',
    '**National Museum of Anthropology, Luanda:** Kongo art pieces.',
    '**Royal Museum for Central Africa (Tervuren, Belgium):** one of the largest collections in the world.',
    '**British Museum, Quai Branly (Paris), Metropolitan Museum (New York):** sculptures and crucifixes.',
    '**Lisbon:** the Torre do Tombo National Archive (letters of the kings of Kongo) and the Sociedade de Geografia.',
    '**Santa Maria Maggiore, Rome:** the memorial of António Manuel.'
  ] },
  { caixa: 'A note of caution', texto: 'The history of Kongo is told, in large part, by those who dominated it. Many of the dates and figures in this chapter come from Portuguese, Italian or Dutch sources, and historians continue to debate what is fact, what is interpretation and what is legend. Wherever that is the case, the text says so.' }
];

const quiz = [
  { p: 'Who, according to oral tradition, founded the Kingdom of Kongo around 1390?', op: ['Nzinga a Nkuwu', 'Lukeni lua Nimi', 'Afonso I', 'Pedro IV'], certa: 1, exp: 'Lukeni lua Nimi is the semi-legendary founder; the exact date is debated.' },
  { p: 'What was the capital of the kingdom called?', op: ['Luanda', 'Mbanza Kongo', 'Mpinda', 'Loango'], certa: 1, exp: 'Mbanza Kongo, later called São Salvador do Congo.' },
  { p: 'Which Portuguese navigator reached the mouth of the Congo river c. 1483?', op: ['Bartolomeu Dias', 'Vasco da Gama', 'Diogo Cão', 'Pedro Álvares Cabral'], certa: 2, exp: 'Diogo Cão raised a padrão and took some Kongo men to Lisbon.' },
  { p: 'In what year was King Nzinga a Nkuwu baptised as João I?', op: ['1391', '1491', '1591', '1691'], certa: 1, exp: 'He was baptised on 3 May 1491.' },
  { p: 'Which king of Kongo wrote to the king of Portugal in 1526 denouncing the slave trade?', op: ['Afonso I', 'Garcia II', 'Álvaro I', 'Pedro V'], certa: 0, exp: 'Afonso I told João III that his kingdom was being depopulated.' },
  { p: 'Who was the first Kongo bishop, consecrated in 1518?', op: ['António Manuel', 'Dom Henrique', 'Diogo I', 'Pedro IV'], certa: 1, exp: 'Henrique, son of Afonso I, was titular bishop of Utica.' },
  { p: 'What were «nzimbu» shells?', op: ['Jewellery', 'The kingdom’s money', 'Musical instruments', 'Weapons'], certa: 1, exp: 'They were small shells from Luanda island, used as currency.' },
  { p: 'Which people or group invaded Kongo in 1568?', op: ['The Zulus', 'The Jaga', 'The Mongols', 'The Dutch'], certa: 1, exp: 'The «Jaga» sacked the capital; their exact identity is debated.' },
  { p: 'Who was the Kongo ambassador received by Pope Paul V in 1608?', op: ['António Manuel (Nsaku ne Vunda)', 'Kimpa Vita', 'Garcia II', 'Mpanzu a Kitima'], certa: 0, exp: 'He died in Rome in 1608 and is buried in Santa Maria Maggiore.' },
  { p: 'Which European power, besides Portugal, occupied Luanda in 1641–1648?', op: ['England', 'France', 'The Netherlands', 'Spain'], certa: 2, exp: 'Garcia II allied with the Dutch against Portugal.' },
  { p: 'What happened at the battle of Mbwila (Ambuíla) in 1665?', op: ['Kongo defeated Portugal', 'King António I was killed', 'Mbanza Kongo was founded', 'The slave trade was banned'], certa: 1, exp: 'A Portuguese force defeated the Kongo army; the king died.' },
  { p: 'Who was Kimpa Vita?', op: ['A king', 'A prophet who claimed to be possessed by Saint Anthony', 'A navigator', 'A queen of Ndongo'], certa: 1, exp: 'She was burned as a heretic on 2 July 1706.' },
  { p: 'What is the «dikenga»?', op: ['A type of cloth', 'The Kongo cosmogram', 'An instrument', 'A treaty'], certa: 1, exp: 'It is a circle with a cross representing the cycle of life and the passage between worlds.' },
  { p: 'In what year did UNESCO inscribe Mbanza Kongo as a World Heritage Site?', op: ['1992', '2005', '2017', '2023'], certa: 2, exp: 'It was the first site in Angola on the list.' },
  { p: 'When did the Kongo monarchy formally end?', op: ['1665', '1885', '1914', '1975'], certa: 2, exp: 'After the revolt of 1913–14, Portugal abolished the kingdom.' }
];

export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };
