// ASTECAS (MEXICAS) — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas na «cronologia média»; as anteriores à chegada dos espanhóis (1519) assentam sobretudo em tradições orais e crónicas escritas depois da conquista, por isso são aproximadas. a.C. = antes de Cristo.
// Imagens: cada {img:'id'} procura o ficheiro  astecas/img/id.jpg  (ver IMAGENS_ASTECAS.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'Os **astecas**, ou melhor, os **mexicas**, foram o povo de língua náuatle que, a partir de 1325 (data da tradição), construiu **Tenochtitlan** numa ilha do lago de Texcoco e, a partir de 1428, dominou o centro do México através de uma aliança de três cidades. Quando os espanhóis chegaram, em 1519, o seu império tributário estendia-se do Atlântico ao Pacífico, e a capital era uma das maiores cidades do mundo.',
    'Foram engenheiros de lagos, construtores de templos, poetas, comerciantes e guerreiros. Praticaram o **sacrifício humano** em larga escala, como parte de uma visão do mundo em que os deuses se tinham sacrificado para criar o universo e os humanos lhes deviam a mesma «dívida». Em 1521, Tenochtitlan caiu depois de um cerco de cerca de dois meses e meio, de uma epidemia de varíola e, sobretudo, da aliança de Hernán Cortés com milhares de guerreiros indígenas inimigos dos mexicas. Sobre as ruínas ergueu-se a atual **Cidade do México**.'
  ] },
  { img: 'ast-mapa-imperio', leg: 'Mapa da Tríplice Aliança em 1519.' },
  { h: 'Onde ficavam' },
  'O coração do mundo asteca era o **Vale do México**, uma bacia de altitude (cerca de 2240 m) rodeada de montanhas e vulcões, com uma cadeia de lagos pouco profundos, os maiores dos quais eram o **lago de Texcoco** (salgado) e os lagos de água doce de Xochimilco e Chalco. A capital, **Mexico-Tenochtitlan**, ocupava uma ilha do lago de Texcoco, ligada à terra por calçadas elevadas. O império propriamente dito estendia-se muito para lá do Vale: do Golfo do México ao Pacífico, e para sul até ao Soconusco, junto à fronteira atual da Guatemala.',
  'A palavra **«asteca»** deriva de **Aztlán**, o lugar de origem na tradição mexica (ver a linha do tempo). Os próprios mexicas chamavam-se **mexica** (ou **tenochca**, os de Tenochtitlan) e o seu estado era a «Tríplice Aliança» (em náuatle, *Ēxcān Tlahtōlōyān*). O nome «asteca» tornou-se corrente só no século XVIII e sobretudo no XIX, com historiadores como o jesuíta Francisco Javier Clavijero e depois Alexander von Humboldt. Nesta página usamos «astecas» e «mexicas» como sinónimos práticos, mas «mexicas» é o nome que eles usavam. A língua era o **náuatle**, da família uto-asteca.',
  { img: 'ast-codice-mendoza-fundacao', leg: 'Fundação de Tenochtitlan, Códice Mendoza, fólio 2r, Bodleian Library.' },
  { h: 'Quando existiram' },
  'Os mexicas chegaram ao Vale do México por volta de meados do século XIII, quando já havia ali cidades-estado poderosas. A sua ascensão foi rápida, em pouco mais de um século, e a queda foi brutal, em dois anos. As datas anteriores a 1427 são tradicionais e aproximadas.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Antecedentes e migração', 'c. 1100 – 1325', 'Migração a partir de Aztlán (tradição); chegada ao Vale, servidão em Culhuacan; fundação de Tenochtitlan em 1325 (data da tradição)'],
    ['Vassalos de Azcapotzalco', 'c. 1325 – 1427', 'Cidade pequena, tributária dos tepanecas; primeiros tlatoque (Acamapichtli, Huitzilihuitl, Chimalpopoca)'],
    ['A Tríplice Aliança', '1428 – 1473', 'Itzcoatl, Moctezuma I; vitória sobre Azcapotzalco, aliança com Texcoco e Tlacopan; expansão pelo centro do México'],
    ['O império', '1473 – 1519', 'Axayacatl, Tizoc, Ahuitzotl; conquista de Tlatelolco; Templo Mayor; Moctezuma II no auge do poder'],
    ['A conquista', '1519 – 1521', 'Chegada de Cortés; Moctezuma II, Cuitláhuac, Cuauhtémoc; queda de Tenochtitlan a 13 de agosto de 1521'],
    ['Depois da queda', 'a partir de 1521', 'Nova Espanha; a nobreza mexica colabora e é absorvida; os códices e crónicas indígenas e o náuatle sobrevivem']
  ] } },
  { h: 'Quem eram os mexicas?' },
  'Os mexicas eram um povo **nahua**, falante de náuatle, um de vários que partilhavam a língua e muitas tradições no centro do México. Eram, segundo a sua própria memória, **chichimecas**, isto é, gente do norte, de vida seminómada, que chegou tarde e pobre a um vale já cheio de cidades. O seu primeiro estatuto foi o de mercenários e vassalos. Só depois de 1428 se tornaram o poder dominante, e nessa altura reescreveram a própria história, apresentando-se como herdeiros dos toltecas e do povo escolhido do deus **Huitzilopochtli**. Convém, por isso, ler com cautela as crónicas: as que chegaram até nós foram escritas ou refeitas depois da conquista, por espanhóis e por indígenas cristianizados.',
  { img: 'ast-tenochtitlan-vista', leg: 'Vista conjetural de Tenochtitlan cerca de 1500, a partir da calçada de Tlacopan. Ilustração gerada por IA.' },
  { h: 'Porque importam' },
  { lista: [
    '**Uma das maiores cidades do mundo:** Tenochtitlan tinha talvez 200 000 habitantes (as estimativas vão de 140 000 a 250 000), comparável às maiores cidades da Europa de então, como Paris, Veneza ou Constantinopla, e muito bem abastecida de água e de mercados.',
    '**Engenharia e agricultura:** as chinampas, os diques, as calçadas e o aqueduto transformaram um lago num dos sistemas agrícolas mais produtivos do mundo.',
    '**Uma visão do mundo própria:** o calendário, a poesia («flor e canto»), os deuses e o sacrifício formam um sistema coerente que nos obriga a compreender uma civilização sem a reduzir a um estereótipo.',
    '**Um império de tipo próprio:** em vez de governar as províncias diretamente, a Tríplice Aliança cobrava tributo e deixava os governantes locais no lugar. Foi esse sistema, e o ressentimento que causou, que os espanhóis souberam explorar.',
    '**Um legado vivo:** milhões de pessoas falam hoje variantes do náuatle, e o México, o chocolate, o tomate e o abacate têm nomes de origem náuatle.'
  ] },
  { caixa: 'Cidade do México hoje', texto: 'O centro histórico da **Cidade do México**, onde se vê ao mesmo tempo a Catedral, o Palácio Nacional e as ruínas do **Templo Mayor**, assenta diretamente sobre o antigo recinto sagrado de Tenochtitlan. O Centro Histórico e Xochimilco (com as suas chinampas) são Património Mundial da UNESCO desde 1987.' },
  { img: 'ast-templo-mayor-ruinas', leg: 'Ruínas do Templo Mayor, Cidade do México, com a Catedral.' },
  { img: 'ast-cidade-mexico-hoje', leg: 'Zócalo e Centro Histórico da Cidade do México.' }
];

const linha = [
  'Esta linha do tempo segue os acontecimentos principais. Para os séculos anteriores a 1427, o que sabemos vem de tradições orais registadas depois da conquista; as datas são aproximadas e as histórias de origem misturam memória e mito. A partir do século XV, as crónicas e os códices são mais fiáveis, e a partir de 1519 temos também relatos de testemunhas.',
  { linha: [
    { d: 'c. 100 a.C. – 550 d.C.', t: 'Teotihuacan', x: 'A grande cidade do Vale do México, que chegou a ter mais de 100 000 habitantes, com a Pirâmide do Sol e a Calçada dos Mortos. Foi saqueada e incendiada por volta de 550 d.C. e foi-se esvaziando depois disso. Os mexicas encontraram as ruínas e chamaram-lhe **Teotihuacan**, «o lugar onde os deuses foram feitos»; não sabemos como se chamava a si mesma.' },
    { d: 'c. 900 – 1150', t: 'Os toltecas e Tula', x: 'Em **Tollan** (Tula, no atual estado de Hidalgo) floresceu um centro com grandes estátuas de guerreiros, os «Atlantes». Os mexicas e os seus vizinhos tinham os toltecas por mestres lendários de todas as artes («toltecáyotl»: a cultura tolteca). Quanto ao que era Tula realmente, e à sua relação com Chichén Itzá, os arqueólogos discutem.' },
    { d: 'c. 1150 – 1250', t: 'Os chichimecas chegam ao Vale', x: 'Depois da queda de Tula, grupos de caçadores-recoletores e de agricultores do norte, os **chichimecas**, entram no Vale do México e fundam cidades-estado, como Texcoco (os acolhuas) e Azcapotzalco (os tepanecas). A palavra tem tom de desprezo («bárbaros») para os que já eram citadinos, mas os mexicas reclamavam-na com orgulho.' },
  ] },
  { img: 'ast-teotihuacan', leg: 'Pirâmide do Sol e Calçada dos Mortos, Teotihuacan.' },
  { img: 'ast-aztlan-codice', leg: 'Partida de Aztlán, Códice Boturini, primeira página.' },
  { img: 'ast-migracao-ia', leg: 'Migração mexica no século XIII; cena imaginada inspirada na tradição histórica. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 1100 – 1250', t: 'A migração a partir de Aztlán (tradição)', x: 'Segundo a tradição, os mexicas saíram de **Aztlán**, «lugar das garças», uma ilha ou cidade mítica algures a norte, guiados pelo deus **Huitzilopochtli**, que os mandou chamar-se «mexicas». Durante gerações peregrinaram, parando em vários sítios. Aztlán nunca foi identificada; pode ser memória de uma migração real, ou uma origem mítica, e os historiadores não chegam a acordo.' },
    { d: 'c. 1250 – 1300', t: 'Chegada ao Vale e Chapultepec', x: 'Os mexicas chegam ao Vale e fixam-se na colina de **Chapultepec**, onde a terra já tinha dono. Foram expulsos por uma coligação de vizinhos e passaram a ser mercenários do senhor de **Culhuacan**, herdeiro de linhagem tolteca.' },
    { d: 'c. 1323', t: 'A rutura com Culhuacan', x: 'A tradição conta que o rei de Culhuacan, Achitometl, deu uma filha como esposa a um chefe mexica, e que os mexicas a sacrificaram e esfolaram para a transformar em deusa, o que provocou a sua expulsão. Os detalhes vêm de fontes tardias; o que é certo é que os mexicas acabaram por se retirar para uma ilha desabitada do lago, terra de ninguém.' },
    { d: '1325', t: 'Fundação de Tenochtitlan (data da tradição)', x: 'Na ilha, os mexicas viram o sinal que o seu deus lhes tinha prometido: uma **águia pousada num nopal** (um cato) a devorar uma serpente. A tradição situa o acontecimento em 1325 (o ano «2 Casa»). É esse o símbolo que está hoje na bandeira do México. A arqueologia não confirma a data exata, e o relato é, em parte, lenda de legitimação.' },
  ] },
  { img: 'ast-fundacao-ia', leg: 'Fundação lendária de Tenochtitlan em 1325; interpretação artística do motivo da águia e da serpente. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 1337', t: 'Tlatelolco', x: 'Segundo a tradição, um grupo mexica separa-se e funda **Tlatelolco**, numa ilhota vizinha. Durante mais de um século será uma cidade irmã e rival, famosa pelo seu mercado.' },
    { d: '1375', t: 'Acamapichtli, o primeiro tlatoani', x: 'Para ganhar prestígio, os mexicas escolhem como primeiro governante (**tlatoani**, «o que fala») **Acamapichtli**, filho de uma nobre de Culhuacan, ligada aos toltecas. Tenochtitlan paga tributo a Azcapotzalco, a cidade dos tepanecas, e combate ao seu serviço.' },
    { d: '1427 – 1428', t: 'A guerra contra Azcapotzalco', x: 'Morto o rei tepaneca Tezozomoc, o seu filho Maxtla toma o poder e a guerra rebenta. Tenochtitlan, agora governada por **Itzcoatl**, alia-se a **Nezahualcoyotl** de Texcoco, e depois a Tlacopan, e derrotam Azcapotzalco em 1428. Nasce a **Tríplice Aliança**: Tenochtitlan, Texcoco e Tlacopan, com o tributo dividido entre as três (Tlacopan com a parte menor).' },
    { d: '1440 – 1469', t: 'Moctezuma I e a expansão', x: 'Sob **Moctezuma I** (Ilhuicamina), o estado alarga-se para o sul e o leste, até ao Golfo. Constroem-se o dique de Nezahualcoyotl contra as cheias do lago, o aqueduto de Chapultepec e uma ampliação do Templo Mayor. As cidades vencidas pagam tributo regular.' },
    { d: 'c. 1450 – 1454', t: 'Seca e fome', x: 'Vários anos de geadas e de seca provocam fome grave no Vale, segundo as crónicas. A tradição liga a esta crise o início das **guerras floridas**, combates rituais contra vizinhos como Tlaxcala, e o aumento do sacrifício, para «alimentar» os deuses. A ligação é debatida.' },
    { d: '1469 – 1481', t: 'Axayacatl', x: 'O império continua a crescer. Em **1473**, Axayacatl conquista **Tlatelolco**, depois de um conflito com o seu governante Moquihuix, e a cidade irmã passa a ser administrada pelos mexicas, mantendo o mercado. Pouco depois (c. 1476–1479, as fontes divergem), um exército mexica é derrotado pelos **purépechas** (tarascos) do oeste, a maior derrota militar antes de 1519.' },
    { d: '1481 – 1486', t: 'Tizoc', x: 'Reinado curto e, segundo as crónicas, pouco glorioso: poucas conquistas. A **Pedra de Tizoc**, grande cilindro de pedra esculpido com cenas de vitória, evoca o seu tempo. Morreu em circunstâncias que os cronistas atribuem a uma conspiração, sem prova segura.' },
    { d: '1486 – 1502', t: 'Ahuitzotl', x: 'Grande conquistador: leva o domínio até ao Pacífico e ao **Soconusco**, na atual fronteira com a Guatemala. Amplia o Templo Mayor e, em **1487**, preside à sua consagração (ver sociedade). Foi também o governante das grandes obras de água, e de uma inundação de Tenochtitlan em 1499–1500.' },
    { d: '1502 – 1520', t: 'Moctezuma II', x: 'Sobrinho de Ahuitzotl, sacerdote e general, é eleito **tlatoani** em 1502. Centraliza o poder, reforça a hierarquia entre nobres e plebeus e continua as guerras. Em **1507**, a cerimónia do Fogo Novo, que marca o fim de um ciclo de 52 anos, é celebrada com pompa. Tlaxcala continua independente e hostil, rodeada de território mexica.' },
    { d: '1519', t: 'Cortés chega', x: 'Em abril, **Hernán Cortés** desembarca na costa do Golfo com uns 500 homens, cerca de 16 cavalos e alguns canhões. Faz alianças com os totonacas e, depois de combater, com os **tlaxcaltecas**. Em outubro, em **Cholula**, massacra milhares de pessoas. A 8 de novembro entra em Tenochtitlan, onde Moctezuma II o recebe.' },
    { d: '1520', t: 'Toxcatl, Moctezuma morre e a Noite Triste', x: 'Em maio, durante a festa de Toxcatl, **Pedro de Alvarado**, deixado no comando, ataca e mata muitos nobres desarmados no recinto sagrado. A cidade revolta-se e Moctezuma morre no fim de junho, em circunstâncias debatidas (os espanhóis acusam o seu povo; fontes indígenas acusam os espanhóis). Na noite de 30 de junho para 1 de julho, a «**Noite Triste**», os espanhóis fogem pela calçada e perdem centenas de homens e muito ouro.' },
  ] },
  { img: 'ast-encontro-lienzo', leg: 'Encontro de Cortés e Moctezuma, Lienzo de Tlaxcala.' },
  { linha: [
    { d: 'julho – dezembro de 1520', t: 'Cuitláhuac, a varíola e Cuauhtémoc', x: 'Depois da Noite Triste, **Cuitláhuac**, irmão de Moctezuma e líder da resistência, é eleito tlatoani. A **varíola**, trazida por um elemento da expedição de Narváez, espalha-se pelo Vale a partir de outubro, e Cuitláhuac morre pouco depois, provavelmente da doença. Sucede-lhe o jovem **Cuauhtémoc**.' },
    { d: '1521', t: 'O cerco e a queda', x: 'Cortés reorganiza-se em Tlaxcala, manda construir **13 bergantins** que são montados em Texcoco e lançados em abril. O cerco começa em maio, com dezenas de milhares de aliados indígenas. Depois de combates casa a casa, a fome e a doença, Cuauhtémoc é capturado a **13 de agosto de 1521**, quando Tlatelolco, o último reduto, cai.' },
  ] },
  { img: 'ast-cerco-pintura', leg: 'Cerco de Tenochtitlan: detalhe de uma pintura anónima de 1676–1700, Museu de América, Madrid.' },
  { linha: [
    { d: '1525', t: 'A morte de Cuauhtémoc', x: 'Levado por Cortés na expedição às Hibueras (Honduras), Cuauhtémoc é enforcado em 1525, acusado de conspirar. É hoje um herói nacional mexicano.' },
    { d: '1790', t: 'A Pedra do Sol e Coatlicue', x: 'Obras na Praça Maior (Zócalo) da Cidade do México trazem à luz a estátua de **Coatlicue** (agosto de 1790) e a **Pedra do Sol** (17 de dezembro de 1790), que redescobrem aos mexicanos e aos cientistas a sua herança pré-hispânica.' },
    { d: '1978 – hoje', t: 'O Templo Mayor', x: 'Em fevereiro de 1978, trabalhadores da companhia de eletricidade encontram, no centro da capital, o grande disco de pedra da deusa **Coyolxauhqui**, o que leva à escavação do **Templo Mayor**. Em 2015, escavações revelam o **Huey Tzompantli**, o grande altar de crânios, ainda hoje estudado.' }
  ] }
];

const mapa = [
  'O «mapa» dos astecas é, antes de tudo, o de uma cidade: uma ilha no centro de um lago, rodeada de outras cidades-estado que partilhavam a língua, os deuses e o calendário. A Tríplice Aliança estendia-se depois por dezenas de províncias, mas a vida política, religiosa e económica concentrava-se no Vale do México.',
  { tabela: { cab: ['Cidade', 'Quem', 'Local hoje', 'Para que ficou conhecida'], linhas: [
    ['Tenochtitlan', 'Mexicas (tenochcas)', 'Centro histórico da Cidade do México', 'Capital do império; Templo Mayor, palácios, calçadas, chinampas'],
    ['Tlatelolco', 'Mexicas (tlatelolcas)', 'Plaza de las Tres Culturas, Cidade do México', 'Grande mercado; cidade irmã, conquistada em 1473; último reduto em 1521'],
    ['Texcoco', 'Acolhuas', 'Texcoco, Estado do México', 'Capital cultural da Aliança; Nezahualcoyotl; bibliotecas e jardins'],
    ['Tlacopan', 'Tepanecas', 'Tacuba, Cidade do México', 'Terceiro membro da Aliança, com a menor parte do tributo'],
    ['Azcapotzalco', 'Tepanecas', 'Azcapotzalco, Cidade do México', 'Dominou o Vale até 1428; derrotada pela Aliança'],
    ['Culhuacan', 'Nahuas de linhagem tolteca', 'Iztapalapa, Cidade do México', 'Prestígio tolteca; berço dinástico dos governantes mexicas'],
    ['Xochimilco', 'Nahuas', 'Xochimilco, Cidade do México', 'Chinampas; celeiro da capital; conquistada no século XV'],
    ['Tula (Tollan)', 'Toltecas', 'Hidalgo', 'Antiga capital tolteca; os Atlantes'],
    ['Teotihuacan', 'Povo desconhecido', 'Estado do México', 'Cidade já em ruínas quando os mexicas a encontraram'],
    ['Tlaxcala', 'Tlaxcaltecas', 'Estado de Tlaxcala', 'Rival nunca conquistada; principal aliada de Cortés']
  ] } },
  { img: 'ast-mapa-nuremberga', leg: 'Mapa de Tenochtitlan e do golfo do México, Nuremberga, 1524.' },
  { h: 'A cidade de Tenochtitlan' },
  'A cidade foi construída numa ilha do lago de Texcoco e crescida por **aterros**. Em 1519, tinha perto de 200 000 habitantes (estimativas entre 140 000 e 250 000) e uma área de c. 8 a 13 km². Estava dividida em quatro grandes bairros, os **campan**, cortados por **canais** e por ruas de terra, e ligada à terra firme por três grandes **calçadas** com secções amovíveis, que podiam ser cortadas em caso de ataque: a de **Tepeyac**, a norte; a de **Iztapalapa**, a sul; e a de **Tlacopan**, a oeste. Um aqueduto duplo trazia água doce de **Chapultepec**. Quando os soldados espanhóis viram a cidade pela primeira vez, o cronista **Bernal Díaz del Castillo** comparou-a, anos depois, às cidades encantadas do romance de cavalaria *Amadís de Gaula*.',
  { img: 'ast-calzada-ia', leg: 'Calçada, ponte removível e aqueduto de Tenochtitlan, cerca de 1500; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: 'O recinto sagrado e o Templo Mayor' },
  'No centro ficava o **recinto sagrado**, um espaço quadrado de cerca de 400 a 500 m de lado, rodeado por uma muralha decorada com serpentes (*coatepantli*). Lá dentro havia mais de setenta edifícios: templos, escolas, o campo do jogo da bola, as plataformas das caveiras (*tzompantli*) e, ao centro, o **Templo Mayor** (*Huey Teocalli*). Era uma pirâmide de degraus com **dois santuários** no topo: o de **Huitzilopochtli**, deus da guerra e do Sol, e o de **Tlaloc**, deus da chuva. Foi ampliado em várias fases, com 45 m ou mais de altura na última (as estimativas variam). Em redor ficavam os palácios do tlatoani e as casas da nobreza. Os espanhóis arrasaram o recinto e aproveitaram pedra para a Catedral e as casas.',
  { h: 'Tlatelolco e o mercado' },
  'A ilha vizinha de **Tlatelolco**, depois de 1473 uma parte de Tenochtitlan, tinha o maior **mercado** da região (*tianquiztli*). Cortés escreveu que reunia cerca de 60 000 pessoas por dia, e Bernal Díaz falou de um mercado maior do que qualquer outro que conhecesse; os números são prováveis exageros, mas o espanto era real. Havia tudo: milho, feijão, chiles, perus, peixe, mantas de algodão, cacau, jade, plumas de quetzal, obsidiana, escravos, remédios, comida preparada. **Juízes** vigiavam preços, pesos e medidas.',
  { img: 'ast-mercado-ia', leg: 'Mercado de Tlatelolco cerca de 1500; cena imaginada. Ilustração gerada por IA.' },
  { img: 'ast-tlatelolco-ruinas', leg: 'Ruínas de Tlatelolco, Plaza de las Tres Culturas.' },
  { h: 'Chinampas: os jardins do lago' },
  'A comida de uma cidade tão grande vinha em grande parte das **chinampas** (de *chinamitl*, «cerca de canas»): parcelas retangulares de terra feitas no lago, com camadas de lama, plantas aquáticas e vegetação, fixas com estacas e salgueiros nas margens. Eram estreitas (talvez 2,5 a 5 m por 30 m), irrigadas pelos canais que as rodeavam e muito férteis: permitiam várias colheitas por ano. Ainda existem em **Xochimilco**, onde se cultivam flores e legumes e se passeia de barco.',
  { img: 'ast-chinampa-ia', leg: 'Cultivo em chinampas cerca de 1500; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'ast-xochimilco-chinampas', leg: 'Canais e chinampas de Xochimilco.' },
  { h: 'Água, diques e calçadas' },
  'O lago de Texcoco era salgado e sujeito a cheias. Sob Moctezuma I e Nezahualcoyotl, construiu-se um **dique** com mais de 10 km (o «albarradón de Nezahualcoyotl»), para separar a água doce da salgada e proteger a cidade, depois de uma grande inundação em 1449. Mais tarde, no tempo de Ahuitzotl, o desvio de uma nascente para o aqueduto provocou uma cheia desastrosa, em 1499–1500. Essa luta com a água, de que dependia a cidade, continuou pela Cidade do México colonial, que acabou por secar quase todos os lagos.',
  { h: 'As rotas' },
  'O império era ligado por **caminhos** e por **comerciantes**. Os **pochteca**, comerciantes de longa distância, partiam em caravanas para o Soconusco e a costa do Golfo e traziam cacau, jade, penas de quetzal, âmbar, conchas e peles de jaguar. Também faziam de espiões do império. Não havia animais de carga nem rodas para transporte: tudo era levado às costas por **carregadores** (*tlamemeh*), e a informação por corredores de posta. Tributo, mercadorias e soldados chegavam assim à capital.'
];

const sociedade = [
  { h: '1. Organização política' },
  'O estado mexica era uma **Tríplice Aliança** de três cidades-estado: Tenochtitlan, Texcoco e Tlacopan. Cada uma tinha o seu governante e governava o seu território; Tenochtitlan tornou-se a dominante. As cidades e províncias conquistadas conservavam, em geral, os seus governantes e costumes, desde que pagassem **tributo** e fornecessem soldados; os mexicas colocavam funcionários (*calpixque*) para cobrar o tributo, e raramente governavam diretamente. É um **império hegemónico** e não territorial, assente em ameaças e alianças, e por isso frágil.',
  'O governante era o **tlatoani** («o que fala»), eleito entre os homens da família real por um conselho de nobres, anciãos e sacerdotes. Ao lado dele, o **cihuacoatl** («mulher-serpente», título de um alto cargo masculino) tratava dos assuntos internos e substituía-o na ausência. O mais célebre foi **Tlacaelel**, conselheiro de vários tlatoque. Abaixo, vinham os generais, os juízes e os chefes dos **calpulli**.',
  { img: 'ast-guerreiro-aguia', leg: 'Guerreiro-águia em cerâmica, Casa das Águias, Museu do Templo Mayor.' },
  { h: '2. Classes sociais' },
  { tabela: { cab: ['Grupo', 'Quem', 'Posição'], linhas: [
    ['Tlatoani e família', 'O governante e os seus parentes', 'No topo; consideravam-se representantes dos deuses'],
    ['Pipiltin', 'Nobres (singular: *pilli*)', 'Cargos, terras, palácios e escola calmecac; leis mais severas para eles'],
    ['Macehualtin', 'Gente comum (singular: *macehualli*)', 'Camponeses, artesãos, soldados; organizados em calpulli; podiam subir pela guerra'],
    ['Pochteca', 'Comerciantes', 'Grupo próprio e rico, com privilégios e tribunais; discretos ao ostentar a riqueza'],
    ['Mayeque', 'Camponeses sem terra', 'Trabalhavam terras de nobres'],
    ['Tlacotin', 'Escravos (por dívida ou castigo)', 'Podiam ter bens e comprar a liberdade; os filhos nasciam livres']
  ] } },
  'A unidade básica era o **calpulli** (que significa «casa grande»): um bairro, ou grupo de famílias, com terra comum, templo e escola próprios, e chefes eleitos. Tenochtitlan tinha vários. A sociedade era hierárquica, mas **não rígida**: um plebeu valente que capturasse inimigos podia ser promovido a guerreiro de elite, com direito a usar certas roupas e a comer na casa do tlatoani. As leis eram severas; a embriaguez pública, por exemplo, era punida duramente em jovens.',
  { h: '3. Educação' },
  'Todos os rapazes iam à escola. Os filhos dos nobres frequentavam o **calmecac** («fileira de casas»), junto aos templos, onde aprendiam leitura de códices, calendário, astronomia, poesia, direito, história e as obrigações dos sacerdotes, com disciplina muito dura. Os restantes frequentavam o **telpochcalli** («casa dos jovens»), no calpulli, com formação militar e trabalho comunitário. As raparigas aprendiam em casa, com as mães (fiação, tecelagem, cozinha), e algumas serviam nos templos. Nas duas escolas havia também a **cuicacalli** («casa dos cantos»), onde se aprendiam danças e cantos sagrados.',
  { img: 'ast-mendoza-educacao', leg: 'Educação das crianças, Códice Mendoza, fólio 60r.' },
  { h: '4. Religião' },
  'A religião mexica era **politeísta** e muito organizada, com cerca de dezoito festas anuais de vinte dias, templos, sacerdotes e rituais para cada deus. Os mexicas incorporaram deuses de povos anteriores (toltecas, teotihuacanos) e dos vencidos. Acreditavam que o mundo tinha passado por **cinco «sóis»** (eras): os quatro primeiros foram destruídos por jaguares, vento, fogo e dilúvio; vivemos no **Quinto Sol**, que também terminará, por sismos, se os deuses não forem alimentados.',
  { tabela: { cab: ['Divindade', 'Domínio', 'Notas'], linhas: [
    ['Huitzilopochtli', 'Guerra, Sol, deus tutelar dos mexicas', '«Colibri da esquerda/do sul»; filho de Coatlicue; santuário no cimo do Templo Mayor'],
    ['Tlaloc', 'Chuva, trovão, fertilidade', 'Antigo deus do México central; o seu paraíso é o Tlalocan; santuário no Templo Mayor'],
    ['Quetzalcoatl', 'Serpente emplumada, vento, sabedoria, Vénus', 'Deus ligado a toltecas e a sacerdotes; criador dos humanos em alguns mitos'],
    ['Tezcatlipoca', '«Espelho fumegante»: noite, destino, feitiçaria', 'Rival de Quetzalcoatl nos mitos; um dos grandes deuses criadores'],
    ['Coatlicue', 'Deusa da terra, mãe de Huitzilopochtli', '«Saia de serpentes»; grande estátua achada em 1790'],
    ['Coyolxauhqui', 'Deusa lunar, filha de Coatlicue', 'Vencida pelo irmão; o disco no sopé do Templo Mayor representa-a esquartejada'],
    ['Xipe Totec', 'Renovação, primavera, ourivesaria', '«Nosso senhor esfolado»; festa em que os sacerdotes vestiam peles'],
    ['Xochiquetzal', 'Flores, beleza, amor, artes', 'Deusa de tecedeiras, artistas e cortesãs'],
    ['Mictlantecuhtli', 'Senhor do Mictlan, mundo dos mortos', 'Rege os mortos que não vão para os céus nem para o Tlalocan']
  ] } },
  { img: 'ast-coatlicue', leg: 'Estátua de Coatlicue, Museu Nacional de Antropologia.' },
  { h: 'O mito de Huitzilopochtli' },
  'Segundo o mito, **Coatlicue** engravidou ao guardar uma bola de penas. Os seus filhos, a deusa lunar **Coyolxauhqui** e os quatrocentos irmãos (as estrelas), quiseram matá-la por vergonha. No monte Coatepec, **Huitzilopochtli** nasceu já armado, matou Coyolxauhqui e dispersou os irmãos. Para os mexicas, o mito explicava a vitória diária do Sol sobre a Lua e as estrelas, e justificava a guerra como serviço ao Sol. O Templo Mayor era a «montanha» Coatepec, com o disco de Coyolxauhqui aos seus pés.',
  { img: 'ast-coyolxauhqui', leg: 'Disco de Coyolxauhqui, Museu do Templo Mayor.' },
  { h: 'A Pedra do Sol e o calendário' },
  'A **Pedra do Sol** é um monólito de basalto com cerca de 3,6 m de diâmetro e quase 25 toneladas, esculpido provavelmente no tempo de Moctezuma II (entre 1502 e 1521) e redescoberto em 1790. Convém uma nota sobre o nome: é muito conhecida como «**Calendário Asteca**», mas **não era um calendário** que se usasse para contar os dias. Usa símbolos do calendário (os 20 signos dos dias, os quatro «sóis» anteriores à volta do símbolo *Nahui Ollin*, «Quatro Movimento») numa composição **cosmológica e ritual**. A figura central é discutida (o Sol, Tonatiuh, ou a deusa da terra, Tlaltecuhtli), e alguns estudiosos pensam que serviu como altar ou recipiente de sacrifícios. O seu nome original não se conhece.',
  { img: 'ast-pedra-sol', leg: 'Pedra do Sol, Museu Nacional de Antropologia.' },
  { h: 'O sacrifício humano' },
  'O **sacrifício humano** foi uma parte central, real e bem documentada da religião mexica, e não uma invenção dos espanhóis. A razão que os mexicas davam era religiosa: os deuses tinham-se sacrificado para criar o mundo e o Sol, e os humanos deviam retribuir com sangue (*nextlahualli*, «pagamento da dívida»), para que o Sol continuasse a nascer. Os que morriam eram frequentemente prisioneiros de guerra, mas também escravos, e crianças oferecidas a Tlaloc. Alguns eram tratados como a imagem viva de um deus (*ixiptla*) durante meses antes de morrerem.',
  'A forma mais conhecida era a **extração do coração** sobre uma pedra, no cimo de um templo; havia muitas outras (flechamento, afogamento, combate gladiatório, esfolamento). Havia também muita **autoimolação** (sangrias com espinhos) e, nalgumas festas, partes dos corpos eram comidas ritualmente. As provas arqueológicas, entre elas os ossos de crianças nas oferendas do Templo Mayor e mais de 600 crânios do **Huey Tzompantli** (até 2020, incluindo mulheres e crianças), confirmam que o sacrifício era real e numeroso. O que **não sabemos** são os números: a consagração do Templo Mayor, em 1487, teria custado, segundo fontes posteriores à conquista, mais de 80 000 vidas em quatro dias, valor que quase todos os historiadores consideram exagerado (propõem-se de milhares a dezenas de milhares). Estimativas para um ano inteiro vão de poucos milhares a valores muito maiores, e não há acordo.',
  { caixa: 'Rigor e prudência', texto: 'Quase tudo o que sabemos vem de textos escritos por espanhóis ou por indígenas cristianizados **depois da conquista**, e os conquistadores tinham interesse em apresentar os mexicas como bárbaros. Os historiadores desconfiam, por isso, dos números, e consideram também que o sacrifício serviu para **intimidar** súbditos e rivais. Mas a prática em si é confirmada por escavações, pelas fontes indígenas (o Códice Florentino) e pelos relatos dos soldados. Compreender não é desculpar: é situar uma prática terrível dentro da visão do mundo que a sustentava.' },
  { img: 'ast-sacrificio-codice', leg: 'Representação de sacrifício num códice colonial, Códice Magliabechiano.' },
  { img: 'ast-tzompantli', leg: 'Tzompantli do edifício B do Templo Mayor, com relevos de crânios.' },
  { h: 'As guerras floridas' },
  'Em *xochiyaoyotl*, as «guerras floridas», a Tríplice Aliança combatia, por acordo, contra cidades vizinhas como **Tlaxcala**, **Huexotzinco** e **Cholula**, em batalhas marcadas, para capturar prisioneiros em vez de matar, e treinar os jovens. A origem e o objetivo são debatidos: segundo as crónicas, nasceram com a fome de 1450–1454; para alguns historiadores eram instrumentos políticos, para outros eram manobras de pressão para manter Tlaxcala fraca. Tlaxcala nunca foi conquistada, e foi essa a aliada decisiva de Cortés.',
  { img: 'ast-guerra-ia', leg: 'Guerreiros mexicas em combate cerca de 1500; cena imaginada, sem pormenores sangrentos. Ilustração gerada por IA.' },
  { h: '5. Economia e tributo' },
  'A base era a **agricultura**: milho, feijão, abóbora, chile, tomate, amaranto, chia, e cacto e agave. Faltavam animais de tração e o ferro; a energia era humana. O **tributo** das províncias, registado no **Códice Mendoza** (que lista 38 províncias), chegava à capital em grandes quantidades: mantas de algodão, trajes de guerra, milho e feijão, cacau, penas, jade, âmbar, ouro, ou guerreiros e escravos. Não havia moedas de metal; usavam-se como moeda **grãos de cacau**, mantas de algodão e pequenos machados de cobre. Houve até cacau falsificado, feito de massa, segundo Sahagún.',
  { img: 'ast-pochteca-ia', leg: 'Mercadores pochteca e carregadores tlamemeh, cerca de 1500; cena imaginada. Ilustração gerada por IA.' },
  { h: '6. Escrita, códices e língua' },
  'Os mexicas não tinham escrita alfabética nem silábica completa. Os **tlacuiloque** («os que pintam») registavam o essencial em **códices** de papel de amate ou de pele, dobrados como biombo, com pictogramas e símbolos: nomes, datas, conquistas, tributo. A leitura dependia da memória oral, e a poesia e a história eram aprendidas de cor. Muito pouco sobreviveu da época anterior à conquista; os documentos mais importantes foram pintados **depois** de 1521, para os espanhóis: o **Códice Mendoza** (c. 1541, encomendado pelo vice-rei Antonio de Mendoza para o imperador Carlos V; hoje na Bodleian Library, Oxford) e o **Códice Florentino** (c. 1545–1590), obra do frade **Bernardino de Sahagún** com estudiosos nahuas, escrita em náuatle e espanhol, com mais de 2000 imagens (Biblioteca Laurenciana, Florença). O livro 12 conta a conquista do ponto de vista indígena, de Tlatelolco.',
  { h: '7. Casa e família' },
  'As casas comuns eram de adobe, de um só piso, com teto plano e pátio; as dos nobres, de pedra, tinham vários quartos em volta de pátios e ficavam perto do centro. O casamento era arranjado, com cerimónias complexas. A **mulher** tinha estatuto sólido mas subordinado: gerava os filhos, tecia, cozinhava, vendia no mercado, e podia ser parteira, curandeira ou sacerdotisa. As que morriam de parto eram honradas como guerreiros e iam acompanhar o Sol. As famílias eram assistidas pelo calpulli.',
  { img: 'ast-casa-ia', leg: 'Vida quotidiana numa casa mexica cerca de 1500; cena imaginada. Ilustração gerada por IA.' },
  { h: '8. Alimentação e bebidas' },
  'A base era o **milho**: tortilhas (*tlaxcalli*), tamales, papas (*atole*). Comiam-se também feijão, abóbora, chile, tomate, abacate, cacto (nopal), amaranto, perus, patos, cães domesticados, peixe, **insetos**, ovos de moscas lacustres e bolos de **algas** do lago (*tecuitlatl*). A bebida alcoólica era o **pulque** (*octli*), do agave, cujo consumo era regulado: só os idosos e os doentes podiam beber à vontade. O **chocolate** (*xocolatl*) era uma bebida amarga e espumosa, de cacau, às vezes com chile, baunilha ou flores, reservada às elites, guerreiros e mercadores. Servia-se frio e batido.',
  { img: 'ast-cacau-ia', leg: 'Preparação de uma bebida de cacau numa casa nobre mexica, cerca de 1500; cena imaginada. Ilustração gerada por IA.' },
  { h: '9. Vestuário' },
  'Os homens usavam o **maxtlatl** (tanga) e o **tilmatli**, uma manta atada ao ombro; as mulheres, a saia (*cueitl*) e a blusa (*huipilli*). O que se vestia dizia o estatuto: o **algodão** era dos nobres, enquanto os plebeus usavam fibra de agave; as leis regulavam cores, comprimentos e joias. Os guerreiros distinguidos usavam trajes de **jaguar** e de **águia**, com penas, e os nobres, ornamentos de ouro, jade e turquesa. Os **amanteca**, artesãos de plumas, faziam obras notáveis.',
  { h: '10. Música, jogos e poesia' },
  'A música usava o tambor vertical **huehuetl**, o tambor de fenda **teponaztli**, flautas, ocarinas, búzios e chocalhos. A poesia era altamente valorizada: «**flor e canto**» (*in xochitl in cuicatl*) era a expressão para poesia e verdade. Os poemas atribuídos a Nezahualcoyotl meditam sobre a brevidade da vida. Jogava-se o **patolli**, jogo de tabuleiro com feijões como dados, e o **ullamaliztli**, o jogo da bola de borracha, que tinha também um sentido religioso. Havia apostas, e podiam perder-se fortunas.',
  { img: 'ast-jogo-bola-ia', leg: 'Jogo de bola ullamaliztli em Tenochtitlan, cerca de 1500; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '11. Ciência, calendário e medicina' },
  'O **calendário** combinava dois ciclos: o **xiuhpohualli**, de 365 dias (18 meses de 20 dias e 5 dias «vazios», *nemontemi*), e o **tonalpohualli**, de 260 dias (20 signos combinados com os números de 1 a 13), usado para adivinhação e para dar nomes. Os dois voltavam a coincidir de **52 em 52 anos**; no fim do ciclo, celebrava-se o **Fogo Novo** (a última vez foi em 1507), com medo de que o mundo acabasse. Os astrónomos observavam o Sol, Vénus e os eclipses. A numeração era de **base 20**: uma bandeira valia 20, uma pluma 400, uma bolsa 8000.',
  'Na medicina, os médicos (*ticitl*) usavam centenas de **plantas**, banhos de vapor (**temazcal**), massagens, e tratavam feridas e fraturas; misturavam, sem separar, empirismo e magia. O **Manuscrito Badiano** (1552), escrito pelo médico nahua **Martín de la Cruz** e traduzido para latim por Juan Badiano, descreve plantas medicinais mexicanas; esteve na Biblioteca Vaticana e foi devolvido ao México em 1990, onde se guarda hoje (Biblioteca Nacional de Antropologia e História). Moctezuma II mantinha **jardins botânicos** e um **jardim zoológico** que impressionaram os espanhóis.',
  { img: 'ast-badiano', leg: 'Página do Manuscrito Badiano com plantas medicinais.' },
  { h: '12. Tecnologia e construção' },
  'Sem roda para transporte, sem animais de carga e com pouco metal (usavam ouro, prata e algum cobre, mas não ferro), os mexicas fizeram muito com o que tinham: **obsidiana** para lâminas afiadíssimas, **pedra** esculpida com cinzéis de pedra, tijolo de adobe, **cal** para estuque, **ourivesaria** de cera perdida, **mosaicos** de turquesa e **plumagem**. As grandes obras hidráulicas e as chinampas eram o seu maior feito.',
  { img: 'ast-templo-mayor-ia', leg: 'Recinto sagrado e Templo Mayor de Tenochtitlan cerca de 1500; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '13. Guerra' },
  'O exército era formado por **homens comuns** convocados pelos calpulli, sob a direção de nobres e de guerreiros de elite (as ordens da **águia** e do **jaguar**). Combatiam com o **macuahuitl** (espada de madeira com lâminas de obsidiana), lanças, arcos, o **átlatl** (propulsor de dardos) e fundas; protegiam-se com escudos (*chimalli*) e com **armaduras** de algodão acolchoado (*ichcahuipilli*). Capturar vivo era mais valioso do que matar. Antes da guerra, enviavam-se embaixadores e exigia-se submissão; os vencidos tributavam. Os purépechas, a oeste, e Tlaxcala nunca foram vencidos.'
];

const personalidades = [
  'Dos mexicas conhecemos sobretudo os governantes, os nobres e os sacerdotes, porque foram eles que os cronistas registaram. Nada nos chegou da vida dos plebeus. As figuras seguintes são reais e documentadas; sempre que a tradição acrescenta lendas, assinala-se.',
  { h: 'Itzcoatl (tlatoani 1427 – 1440)' },
  'Quarto governante de Tenochtitlan. Foi sob o seu governo que os mexicas se libertaram dos tepanecas e fundaram a **Tríplice Aliança**. Segundo a tradição, mandou queimar os antigos livros que contavam uma história modesta dos mexicas, para os substituir por uma versão mais gloriosa; a história, contada por Sahagún e outros, é discutida e provavelmente exagerada.',
  { h: 'Tlacaelel (c. 1397 – 1487)' },
  'Sobrinho de Itzcoatl e **cihuacoatl** de vários tlatoque, é apresentado pelas crónicas como o grande arquiteto da ideologia imperial: o culto de Huitzilopochtli, o sacrifício como dever e as guerras floridas. Alguns historiadores desconfiam, porém, de que o seu papel tenha sido ampliado depois da sua morte por cronistas da sua família.',
  { h: 'Nezahualcoyotl (1402 – 1472)' },
  'Rei de Texcoco, filho de um rei destronado pelos tepanecas, que viveu exilado e regressou. Foi aliado decisivo de Itzcoatl. É lembrado como **poeta, jurista e engenheiro** (o dique, o jardim de Texcotzingo). Muitos poemas que lhe são atribuídos foram transmitidos por escrito já depois da conquista, por isso a autoria exata é incerta.',
  { img: 'ast-nezahualcoyotl', leg: 'Nezahualcoyotl, Códice Ixtlilxochitl.' },
  { h: 'Moctezuma I Ilhuicamina (1440 – 1469)' },
  'O quinto tlatoani, «o que atira ao céu». Alargou o domínio mexica ao sul e ao Golfo, e iniciou grandes obras, incluindo o aqueduto e o dique. Foi sob o seu governo que as guerras floridas ganharam a forma que conhecemos.',
  { h: 'Ahuitzotl (1486 – 1502)' },
  'O maior conquistador, que levou o império até ao Pacífico e ao Soconusco. Presidiu à consagração do Templo Mayor, em 1487. Segundo as crónicas, morreu em 1502 por causa de uma pancada na cabeça sofrida durante a cheia de 1500. Foi pai de **Cuauhtémoc**.',
  { h: 'Moctezuma II Xocoyotzin (1502 – 1520)' },
  'Sacerdote e general, governou o império no seu apogeu. Reforçou a hierarquia, centralizou a administração e fez grandes obras. A sua figura é muito controversa: durante muito tempo foi apresentado como um chefe indeciso que julgava Cortés um deus, o que os historiadores atuais **consideram um mito**, em grande parte criado depois da conquista. Estava entre duas pressões (os rivais do império e os recém-chegados) e escolheu receber e observar os espanhóis. Morreu em junho de 1520, em circunstâncias que as fontes contam de forma contraditória.',
  { img: 'ast-moctezuma-ii', leg: 'Moctezuma II, Códice Mendoza, fólio 15v.' },
  { h: 'Cuitláhuac (1520)' },
  'Irmão de Moctezuma II e senhor de Iztapalapa. Foi o chefe da resistência que expulsou os espanhóis na Noite Triste. Foi eleito tlatoani depois da Noite Triste e morreu pouco tempo depois, provavelmente de varíola (as fontes antigas não são explícitas sobre a causa), o que fez desaparecer o chefe mais decidido da defesa.',
  { h: 'Cuauhtémoc (c. 1496 – 1525)' },
  'O nome significa «águia que desce». Filho de Ahuitzotl e último tlatoani de Tenochtitlan, tinha pouco mais de vinte anos quando assumiu o poder, e liderou a defesa durante o cerco. Capturado a 13 de agosto de 1521, foi torturado para revelar o ouro e mais tarde enforcado por ordem de Cortés, em 1525. É hoje o símbolo da resistência indígena no México.',
  { img: 'ast-cuauhtemoc-monumento', leg: 'Monumento a Cuauhtémoc, Paseo de la Reforma.' },
  { h: 'Hernán Cortés (1485 – 1547)' },
  'Conquistador espanhol, nascido em Medellín (Extremadura). Foi hábil a negociar e a explorar as divisões entre os indígenas, desobedeceu às ordens do governador de Cuba e tornou-se capitão-geral da Nova Espanha. A sua vitória dependeu de aliados indígenas, da doença e de erros de cálculo dos mexicas. Foi também cruel, como no massacre de Cholula.',
  { h: 'Malintzin, «La Malinche» (c. 1500 – c. 1529)' },
  'Mulher nahua, de nome cristão **Marina**, entregue a Cortés em 1519 em Tabasco como escrava. Falava náuatle e maia, e foi **intérprete e conselheira** de Cortés durante a conquista, em cadeia com Gerónimo de Aguilar. Teve um filho com ele, Martín. É uma figura muito debatida: para uns, traidora; para outros, sobrevivente que usou o único poder que tinha. Os historiadores atuais tendem a vê-la como uma mulher de grande capacidade, sem escolha livre.',
  { img: 'ast-malinche-lienzo', leg: 'Malintzin a interpretar, Lienzo de Tlaxcala.' },
  { h: 'Xicohtencatl Axayacatl, o Jovem (m. 1521)' },
  'Chefe de guerra de Tlaxcala. Combateu primeiro Cortés e depois, aliado dele, o cerco de Tenochtitlan. Foi executado por Cortés em 1521, acusado de querer abandonar a aliança. Mostra como a conquista foi também uma **guerra entre indígenas**, que escolheram lados por razões próprias.',
  { h: 'Bernardino de Sahagún (c. 1499 – 1590)' },
  'Frade franciscano espanhol que chegou ao México em 1529. Durante décadas, com um grupo de estudiosos nahuas do Colégio de Santa Cruz de Tlatelolco (como **Antonio Valeriano**), entrevistou anciãos e compilou, em náuatle, uma enciclopédia da vida mexica: o **Códice Florentino**. É a fonte mais rica sobre os deuses, o quotidiano e a conquista. Tentou-se travar a obra em 1577, por ordem de Filipe II, mas sobreviveu.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**A cidade:** a Cidade do México, uma das maiores áreas urbanas do mundo, está sobre Tenochtitlan. O traçado do centro e muitos topónimos seguem o antigo.',
    '**A língua:** o **náuatle** é falado hoje por cerca de 1,6 a 1,7 milhões de pessoas no México, em muitas variantes, e é uma das línguas nacionais do país.',
    '**Palavras:** vieram do náuatle, passando pelo espanhol, palavras como **chocolate**, **tomate**, **abacate** (*ahuacatl*), **chili**, **coiote**, **tamal**, **chicle** e **México**.',
    '**Alimentos:** o milho, o feijão, o tomate, a abóbora, o chile, o cacau e o peru, hoje presentes em todo o mundo.',
    '**Símbolo nacional:** a águia sobre o nopal a devorar a serpente está na bandeira do México.',
    '**Cultura viva:** mercados, festas, medicina tradicional, chinampas e danças continuam, muitas vezes misturados com a tradição cristã e hispânica.'
  ] },
  { h: 'Arte' },
  'A arte mexica é, ao mesmo tempo, **monumental** e muito refinada: grandes esculturas em basalto e andesito (Coatlicue, a Pedra do Sol, a Pedra de Tizoc), cerâmica, **mosaicos de turquesa**, ourivesaria, plumagem e poesia. Quase todo o ouro foi fundido pelos conquistadores. Obras como a **serpente de duas cabeças** em mosaico de turquesa (Museu Britânico) e o **penacho de plumas** de Viena mostram o requinte de artesãos e de artistas.',
  { img: 'ast-serpente-turquesa', leg: 'Serpente de duas cabeças em mosaico de turquesa, Museu Britânico.' },
  { img: 'ast-penacho', leg: 'Penacho de plumas tradicionalmente associado a Moctezuma, Weltmuseum Wien.' },
  { h: 'Arquitetura' },
  'Os mexicas construíram pirâmides de **degraus** com templos gémeos no topo, palácios, escolas, campos de jogo da bola, calçadas, diques e aquedutos. O Templo Mayor teve cerca de sete fases de construção, cada uma por cima da anterior. Quase tudo foi demolido depois de 1521 e usado como material de construção; o que vemos hoje foi desenterrado desde 1978.',
  { h: 'A conquista: factos, mitos e debates' },
  'A conquista de 1519–1521 é um dos episódios mais contados e mais deformados da história. Alguns pontos para ler com cuidado:',
  { lista: [
    '**«Cortés tinha 500 homens contra um império»:** em parte verdade, mas ignora que os espanhóis foram acompanhados, nas fases decisivas, por **dezenas de milhares de aliados indígenas** (tlaxcaltecas, texcocanos, totonacas e outros), e que a varíola devastou a população de Tenochtitlan.',
    '**«Moctezuma pensou que Cortés era um deus»:** é uma narrativa que aparece em fontes depois da conquista e que muitos historiadores (por exemplo, Matthew Restall) consideram uma **construção posterior**; as fontes dos primeiros anos mostram um governante cauteloso e informado.',
    '**A varíola:** foi um fator importante, mas não o único; as estimativas da mortalidade variam muito.',
    '**«A cidade foi destruída pelos espanhóis»:** a cidade foi sitiada durante cerca de dois meses e meio e arrasada, em grande parte, durante o cerco e depois dele.'
  ] },
  { img: 'ast-florentino', leg: 'Batalha durante a conquista, Códice Florentino, livro 12, fólio 67r.' },
  { h: 'A redescoberta de Tenochtitlan' },
  'Durante séculos, a Cidade do México colonial e republicana ignorou as ruínas sob as suas ruas. A descoberta de **Coatlicue** e da **Pedra do Sol** em 1790 despertou o interesse; mas foi a descoberta de **Coyolxauhqui**, em 1978, que levou à escavação sistemática do Templo Mayor, dirigida por **Eduardo Matos Moctezuma**, com milhares de oferendas. O **Museu do Templo Mayor** abriu em 1987, e as escavações continuam: em 2015 apareceu o **Huey Tzompantli**.',
  { img: 'ast-bandeira', leg: 'Bandeira do México com o brasão.' },
  { caixa: 'Para visitar', texto: 'Na **Cidade do México**: o **Museu Nacional de Antropologia** (Pedra do Sol, Coatlicue, Pedra de Tizoc), o **Museu do Templo Mayor** e a zona arqueológica no Centro Histórico, e as ruínas de **Tlatelolco**. Em **Xochimilco**, as chinampas; a norte, **Teotihuacan** e **Tula**. Fora do México: o **Weltmuseum** de Viena (penacho), o **Museu Britânico** (mosaicos), o **Museu de América** (Madrid), a **Bodleian Library** (Códice Mendoza) e a **Biblioteca Laurenciana** (Códice Florentino).' },
  { img: 'ast-museu-antropologia', leg: 'Pátio do Museu Nacional de Antropologia, Cidade do México.' }
];

const quiz = [
  { p: 'Como se chamavam a si próprios os «astecas»?', op: ['Toltecas', 'Mexicas', 'Chichimecas', 'Olmecas'], certa: 1, exp: 'Os que chamamos astecas chamavam-se mexicas (ou tenochcas, os de Tenochtitlan). «Asteca» vem de Aztlán e popularizou-se mais tarde.' },
  { p: 'Segundo a tradição, em que ano foi fundada Tenochtitlan?', op: ['1325', '1519', '1428', '1200'], certa: 0, exp: 'A tradição situa a fundação em 1325. A arqueologia não confirma a data exata.' },
  { p: 'Qual era o sinal do local onde deviam fundar a cidade?', op: ['Um jaguar numa pirâmide', 'Uma águia pousada num nopal a devorar uma serpente', 'Um colibri num lago', 'Uma serpente emplumada'], certa: 1, exp: 'É o símbolo que hoje está na bandeira do México.' },
  { p: 'Quais eram as três cidades da Tríplice Aliança?', op: ['Tenochtitlan, Texcoco e Tlacopan', 'Tenochtitlan, Tula e Teotihuacan', 'Texcoco, Tlaxcala e Cholula', 'Tlatelolco, Culhuacan e Xochimilco'], certa: 0, exp: 'A Aliança nasceu em 1428, depois da vitória sobre Azcapotzalco.' },
  { p: 'O que eram as chinampas?', op: ['Mercados flutuantes', 'Templos de Tlaloc', 'Parcelas agrícolas feitas no lago', 'Escolas de nobres'], certa: 2, exp: 'Eram ilhas artificiais de cultivo, ainda visíveis em Xochimilco.' },
  { p: 'Quem eram os pipiltin?', op: ['Os comerciantes', 'Os nobres', 'Os escravos', 'Os sacerdotes do Sol'], certa: 1, exp: 'Os pipiltin eram os nobres; os plebeus eram os macehualtin.' },
  { p: 'Qual era a escola dos filhos dos nobres?', op: ['Telpochcalli', 'Cuicacalli', 'Calmecac', 'Tzompantli'], certa: 2, exp: 'O calmecac ensinava sacerdócio, escrita, astronomia e história. O telpochcalli era sobretudo para os plebeus.' },
  { p: 'Que santuários havia no cimo do Templo Mayor?', op: ['De Quetzalcoatl e de Tezcatlipoca', 'De Huitzilopochtli e de Tlaloc', 'De Coatlicue e de Xipe Totec', 'De Tlaloc e de Mictlantecuhtli'], certa: 1, exp: 'Um para o deus da guerra e do Sol, outro para o deus da chuva.' },
  { p: 'Porque é enganador chamar «Calendário Asteca» à Pedra do Sol?', op: ['Porque é falsa', 'Porque não era usada para contar os dias, mas era uma peça cosmológica e ritual', 'Porque é maia', 'Porque foi feita pelos espanhóis'], certa: 1, exp: 'Usa símbolos do calendário, mas não servia para marcar os dias.' },
  { p: 'Qual foi o último tlatoani de Tenochtitlan?', op: ['Moctezuma II', 'Cuitláhuac', 'Ahuitzotl', 'Cuauhtémoc'], certa: 3, exp: 'Cuauhtémoc foi capturado a 13 de agosto de 1521.' },
  { p: 'Que povo nunca foi conquistado pelos mexicas e foi a principal aliada de Cortés?', op: ['Os tlaxcaltecas', 'Os totonacas', 'Os mixtecas', 'Os maias'], certa: 0, exp: 'Tlaxcala, rodeada pelo território mexica, aliou-se aos espanhóis.' },
  { p: 'Sobre o número de sacrifícios humanos, o que dizem os historiadores?', op: ['Foi inventado pelos espanhóis', 'O sacrifício foi real, mas os números são muito debatidos', 'Só se sacrificavam animais', 'Há registos exatos de cada um'], certa: 1, exp: 'Há provas arqueológicas, mas as cifras das fontes (por exemplo, 80 400 em 1487) são tidas como exageradas.' },
  { p: 'O que foi a «Noite Triste» (1520)?', op: ['O eclipse que assustou Moctezuma', 'A fuga dos espanhóis de Tenochtitlan, com grandes perdas', 'A queda da cidade', 'A morte de Cuauhtémoc'], certa: 1, exp: 'Foi a retirada dos espanhóis na noite de 30 de junho para 1 de julho de 1520.' },
  { p: 'Quem foi a intérprete de Cortés, de língua náuatle e maia?', op: ['Xochiquetzal', 'Coyolxauhqui', 'Malintzin (La Malinche)', 'Coatlicue'], certa: 2, exp: 'Malintzin, Doña Marina, foi intérprete e conselheira de Cortés.' },
  { p: 'Qual destas palavras portuguesas tem origem no náuatle?', op: ['Azeite', 'Abacate', 'Alface', 'Laranja'], certa: 1, exp: 'Abacate vem de ahuacatl, via espanhol; chocolate e tomate também são de origem náuatle.' }
];

export default {
  id: 'astecas',
  cor: '#2f8a8a',
  emblema: '../assets/img/astecas.png',
  nome:    { pt: 'Astecas', en: 'Aztecs' },
  periodo: { pt: '1325 – 1521', en: 'AD 1325 – 1521' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
