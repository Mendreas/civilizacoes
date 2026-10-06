// OS CELTAS — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura e mesmos ids de imagem).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Os «celtas» não foram um estado nem um «povo» único: o termo designa, com rigor, falantes de línguas celtas e, por extensão, as culturas materiais de Hallstatt e La Tène. Ver as secções «O que significa celta?» (visão) e «Os celtas existiram? Um debate» (legado).
// Datas aproximadas (cronologia média); «c.» e «debatido» assinalam incerteza. a.C./d.C.
// Imagens: cada {img:'id'} procura o ficheiro  celtas/img/id.jpg  (ver IMAGENS_CELTAS.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'Os **celtas** foram um conjunto de povos da Idade do Ferro europeia, ligados por línguas aparentadas (as **línguas celtas**) e, em parte, por uma cultura material e uma arte em comum. Nunca formaram um império nem um estado: eram dezenas de tribos independentes, por vezes aliadas, muitas vezes em guerra umas com as outras. Entre **c. 800 a.C.** e os séculos I–V d.C., encontramo-los desde a Irlanda e a Península Ibérica até à Boémia, ao vale do Pó e ao centro da atual Turquia.',
    'O seu «núcleo» arqueológico é a Europa central, onde se desenvolveram a **cultura de Hallstatt** (c. 800 – 450 a.C.), a das primeiras elites do ferro, e a **cultura de La Tène** (c. 450 – séc. I a.C.), a da arte de curvas e espirais e das grandes povoações fortificadas. Daí os celtas expandiram-se: tomaram o norte de Itália, saquearam Roma (c. 390 a.C.), atacaram Delfos (279 a.C.) e fundaram a **Galácia**, na Anatólia. Roma foi-os submetendo, da Itália à Gália (58–50 a.C.) e à Britânia (a partir de 43 d.C.). Mas a Irlanda nunca foi conquistada, e nas ilhas e na Bretanha as línguas e as tradições sobreviveram: **seis línguas celtas** ainda se falam hoje.'
  ] },
  { img: 'cel-mapa-expansao', leg: 'Mapa interpretativo da expansão celta, do núcleo da Europa central até à maior extensão, no século III a.C.' },
  { caixa: 'Atenção: «celta» não é uma palavra simples', texto: [
    'Quase tudo o que se diz sobre os celtas depende do sentido que se dá à palavra, e a discussão entre especialistas é viva. Convém distinguir três usos:',
    '**1. Linguístico (o mais sólido).** Os celtas são os falantes de línguas da família celta, um ramo do indo-europeu. Isto é um facto comprovado por inscrições e textos: o gaulês, o celtibérico, o irlandês antigo, o galês antigo pertencem à mesma família.',
    '**2. Arqueológico e artístico.** Chama-se «celta» à cultura material de Hallstatt e de La Tène, e à «arte celta» de espirais e entrelaçados. Mas uma cultura material não é um povo nem uma língua.',
    '**3. De identidade (o mais controverso).** Os antigos gregos chamavam-lhes **Keltoi** e **Galatai** e os romanos **Galli**; Júlio César diz que os gauleses se chamavam a si próprios «celtas». Mas nenhum autor antigo chama «celtas» aos habitantes da Britânia ou da Irlanda, e é duvidoso que os povos de Hallstatt, da Gália, da Irlanda e da Galácia se sentissem uma só gente. A ideia de uma «nação celta» é sobretudo uma construção dos séculos XVIII e XIX. Nesta página usa-se «celta» sobretudo no sentido 1 e 2, e assinala-se quando se passa a outro.'
  ] },
  { h: 'Onde ficavam' },
  'Não havia um território celta contínuo; havia **áreas** onde se falavam línguas celtas e se encontra uma cultura material de tipo Hallstatt ou La Tène, que mudaram muito ao longo de oito séculos.',
  { lista: [
    '**Europa central (o núcleo):** a Áustria, o sul da Alemanha, a Boémia, a Suíça e o leste de França, onde se situam Hallstatt, La Tène e as «sedes principescas» da primeira Idade do Ferro.',
    '**Gália:** a França atual, a Bélgica e partes da Suíça e da Alemanha ocidental, com dezenas de tribos (os Éduos, os Arvernos, os Helvécios, os Belgas e muitos outros).',
    '**Ilhas Britânicas:** a Britânia (as tribos «britónicas») e a Irlanda (de língua «goidélica»). Aqui a atribuição do rótulo «celta» é a mais discutida.',
    '**Península Ibérica:** os celtiberos no centro (Numância, Botorrita) e populações do norte e do oeste, incluindo o atual Portugal, cuja língua e cuja filiação celta são debatidas (ver o mapa e o legado).',
    '**Norte de Itália:** a Gália Cisalpina, ocupada pelos Boios, Ínsubros, Senones e outros a partir de c. 400 a.C.',
    '**Danúbio e Balcãs:** os Boios na Boémia (que lhe dá o nome), os Escordiscos, e os que invadiram a Grécia em 279 a.C.',
    '**Anatólia:** a **Galácia**, no centro da atual Turquia, onde três tribos celtas se instalaram em 278–277 a.C. e se mantiveram durante séculos.'
  ] },
  { img: 'cel-hallstatt-vista', leg: 'Hallstatt, no lago de Hallstätter See (Áustria); a necrópole e as minas de sal ficam nas encostas acima da povoação.' },
  { h: 'Quando existiram' },
  'As datas são aproximadas e, para as fases mais antigas, discutidas. Seguem-se as fases principais.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Antecedentes', 'c. 1300 – 800 a.C.', 'Idade do Bronze final: cultura dos Campos de Urnas na Europa central e Idade do Bronze «atlântica»; as raízes das línguas celtas são debatidas'],
    ['Hallstatt', 'c. 800 – 450 a.C.', 'Primeira Idade do Ferro; minas de sal; túmulos com carros e «sedes principescas» (Heuneburg, Vix, Hochdorf); comércio com os gregos e etruscos'],
    ['La Tène', 'c. 450 a.C. – séc. I a.C.', 'Arte de curvas; guerreiros com espada longa; migrações para Itália, Balcãs e Anatólia; mais tarde, grandes povoações fortificadas (oppida) e moeda'],
    ['Conquista romana', '222 a.C. – séc. I d.C.', 'Gália Cisalpina (séc. III–II a.C.); Península Ibérica (séc. III–I a.C.); Gália (58–50 a.C.); Galácia (25 a.C.); Britânia (a partir de 43 d.C.)'],
    ['Mundo galo-romano e romano-britânico', 'séc. I – V d.C.', 'Cidades romanas, latim, mas continuidade de nomes, cultos e línguas locais; o gaulês terá desaparecido entre os séculos V e VII (debatido)'],
    ['Sobrevivência insular', 'séc. V d.C. em diante', 'A Irlanda (nunca romana), a Escócia, o País de Gales, a Cornualha e a Bretanha mantêm línguas e literaturas celtas, agora cristãs']
  ] } },
  { img: 'cel-torque-snettisham', leg: 'Grande torque de Snettisham (Norfolk), de uma liga de ouro e prata, c. séc. I a.C., Museu Britânico.' },
  { h: 'Quem eram e de onde vieram?' },
  'Quando e onde nasceu a «língua celta» é debatido. A explicação mais antiga, do século XIX e do século XX, procurava a «pátria» dos celtas na Europa central (Hallstatt), de onde teriam saído em ondas de migração. Nas últimas décadas, **John Koch** e **Barry Cunliffe** defenderam a teoria do «celta do Oeste» (*Celtic from the West*): as línguas celtas teriam nascido ao longo da fachada atlântica, na Idade do Bronze, e espalhado daí para leste; apoiam-se sobretudo nas inscrições do sudoeste da Península Ibérica (a chamada língua «tartéssica»), mas muitos especialistas duvidam de que essas inscrições sejam celtas. Outros, como **Simon James** e **John Collis**, sublinham que as populações das ilhas eram muito diferentes das do continente e que o termo «celta» não lhes convém.',
  'O que se pode dizer com segurança é pouco, mas firme: a família celta é um ramo do indo-europeu; havia línguas celtas no continente (gaulês, celtibérico, lepôntico) já no século VI a.C. e depois nas ilhas; e as primeiras fontes gregas falam de **Keltoi** no interior da Europa ocidental, por volta de 500 a.C. O ADN antigo mostra que houve grandes migrações para a Britânia na Idade do Bronze (um estudo de 2022 fala de entradas entre c. 1300 e 800 a.C.), mas o ADN não nos diz que língua se falava: uma coisa é a ascendência de uma pessoa, outra a língua da sua mãe.',
  { h: 'Porque importam' },
  { lista: [
    '**A primeira Europa «bárbara» que conhecemos de dentro:** deixaram túmulos riquíssimos, cidades fortificadas, objetos de arte e centenas de inscrições, e não só o retrato, muitas vezes hostil, dos gregos e romanos.',
    '**Arte:** a arte de La Tène, com as suas curvas, espirais e rostos que se escondem nos padrões, é uma das grandes tradições artísticas da Europa antiga, e influenciou os manuscritos e as cruzes da Irlanda.',
    '**Engenharia do ferro:** os celtas foram grandes ferreiros, com espadas, cotas de malha, arados, rodas com aros de ferro e carros muito sofisticados.',
    '**O choque com Roma:** de Brenno a Vercingetorix e a Boudica, o confronto com Roma foi um dos grandes dramas da Antiguidade e moldou a Europa ocidental.',
    '**As línguas:** o irlandês, o galês, o bretão e o gaélico escocês mostram uma continuidade linguística de mais de dois mil anos.',
    '**A história de uma ideia:** como os «celtas» foram inventados e reinventados (pelos antigos, pelos eruditos dos séculos XVIII e XIX, pelos nacionalistas e pela cultura popular) é um bom exemplo de como lemos o passado.'
  ] },
  { caixa: 'Não eram celtas (confusões comuns)', texto: [
    '**Stonehenge, Newgrange e os dólmens** são muito anteriores aos celtas (Stonehenge atingiu a forma principal por volta de 2500 a.C.). **Os druidas não construíram Stonehenge**, e a ligação popular entre os dois é uma invenção dos séculos XVII e XVIII. **Os vikings** eram escandinavos, de língua germânica, tal como os **anglo-saxões**. E os **pictos** do nordeste da Escócia são um caso aberto: a sua língua é debatida e só parte do que escreveram se conhece.'
  ] },
  { img: 'cel-stonehenge', leg: 'Stonehenge (Inglaterra), na sua forma principal por volta de 2500 a.C.: muito anterior aos celtas da Idade do Ferro.' },
  { img: 'cel-mapa-linguas', leg: 'Mapa esquemático dos núcleos Hallstatt e La Tène e da expansão céltica, c. 800–50 a.C.' },
  { img: 'cel-espada-hallstatt', leg: 'Espadas de ferro de tipo Hallstatt C, séc. VII–VI a.C., no Museu de Wels (Alta Áustria).' },
  { caixa: 'Os celtas hoje', texto: 'Das línguas celtas ainda se falam seis: o **irlandês**, o **gaélico escocês** e o **manx** (o ramo «goidélico»), e o **galês**, o **córnico** e o **bretão** (o ramo «britónico»). O galês é o mais vivo (cerca de meio milhão de falantes) e o que está em melhor situação (a UNESCO classifica-o apenas como «vulnerável»). O manx perdeu o último falante nativo em 1974 e o córnico deixou de ser língua materna no século XVIII ou inícios do XIX, mas ambos foram revitalizados. As «nações celtas» modernas são a Irlanda, a Escócia, o País de Gales, a Cornualha, a Ilha de Man e a Bretanha; a Galiza e as Astúrias reivindicam uma herança celta cultural, mas já não falam nenhuma língua celta. Em Portugal, o legado é sobretudo arqueológico e toponímico (ver o legado).' }
];

const linha = [
  'A linha do tempo segue o que os arqueólogos e as fontes antigas nos dizem sobre os celtas, do Hallstatt à Idade Média. Recorde-se que quase tudo o que sabemos por escrito sobre os celtas continentais foi escrito por **gregos e romanos**, que eram rivais ou inimigos: é uma visão de fora. As datas são aproximadas.',
  { linha: [
    { d: 'c. 1300 – 800 a.C.', t: 'Antecedentes: Campos de Urnas e Bronze atlântico', x: 'Na Europa central, a cultura dos **Campos de Urnas** (os mortos são cremados e as cinzas guardadas em urnas) e, ao longo da costa atlântica, uma rede de trocas de bronze ligam regiões muito distantes. Onde e quando se falou pela primeira vez uma língua «proto-celta» é debatido: alguns procuram-no aqui, outros mais a oeste.' },
    { d: 'c. 800 a.C.', t: 'Começa Hallstatt', x: 'Com a difusão do **ferro**, surge a cultura de **Hallstatt** (nome de uma localidade austríaca). Os mineiros do sal de Hallstatt, na Áustria, enriquecem; os chefes são enterrados com espadas, carros de quatro rodas e belos vasos de bronze. A necrópole foi explorada a partir de **1846** por **Johann Georg Ramsauer**, que abriu cerca de mil sepulturas.' },
  ] },
  { img: 'cel-mineiros-sal', leg: 'Mineiros do sal de Hallstatt, c. 600 a.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'cel-hochdorf-kline', leg: 'A câmara funerária do «príncipe» de Hochdorf, c. 530 a.C., em reconstituição imaginada: o morto sobre o leito de bronze, com o caldeirão, os cornos de beber e o carro de quatro rodas. Ilustração gerada por IA.' },
  { linha: [
    { d: 'séc. VI a.C.', t: 'As primeiras inscrições celtas', x: 'A mais antiga escrita em língua celta conhecida é o **lepôntico**, escrito com um alfabeto de origem etrusca no norte da Itália (região dos lagos, em torno de Lugano e Como), a partir do século VI a.C. Na mesma altura, os **gregos de Foceia** fundam **Massália** (Marselha, c. 600 a.C.) e abrem uma porta de comércio com o interior da Gália.' },
    { d: 'c. 600 – 500 a.C.', t: 'As «sedes principescas»', x: 'Em colinas fortificadas como a **Heuneburg** (Alemanha), o **Mont Lassois** (França) ou o **Hohenasperg**, vivem chefes que importam vinho, cerâmica e bronze dos gregos e etruscos. Na Heuneburg, uma muralha de **tijolo cru** à maneira mediterrânea (c. 600 a.C.) é um caso notável de imitação, e as fontes gregas falam de uma cidade celta, **Pyrene**, junto à nascente do Danúbio (Heródoto), que alguns identificam com ela (debatido).' },
    { d: 'c. 530 a.C.', t: 'O túmulo de Hochdorf', x: 'Em Hochdorf (Alemanha), um chefe de cerca de 40 anos e 1,87 m é enterrado deitado num **leito de bronze**, com um caldeirão de c. 500 litros cheio de hidromel, um **torque de ouro**, sapatos revestidos de ouro e um carro. Foi encontrado intacto em **1977**. É um dos túmulos celtas mais ricos e mais completos.' },
  ] },
  { linha: [
    { d: 'c. 500 a.C.', t: 'Vix e os primeiros «celtas» escritos', x: 'No túmulo de uma mulher de elite em **Vix** (Borgonha) pôs-se uma enorme **cratera de bronze** grega ou do sul de Itália, de **1,64 m** e **208 kg**, com capacidade para cerca de **1100 litros**, ao lado de um torque de ouro. Por volta de 500 a.C., o geógrafo **Hecateu de Mileto** menciona os **Keltoi**, e **Heródoto**, meio século depois, diz que vivem à nascente do Danúbio e para lá das Colunas de Hércules (a sua geografia é confusa).' },
  ] },
  { img: 'cel-vix-krater', leg: 'Cratera de bronze do túmulo de Vix (c. 500 a.C.), com 1,64 m de altura; Museu de Châtillon-sur-Seine.' },
  { linha: [
    { d: 'c. 450 a.C.', t: 'Começa La Tène', x: 'Mudam os centros de poder e a arte: nasce a cultura de **La Tène**, nome de um sítio na margem do lago de Neuchâtel (Suíça), descoberto em **1857**, onde apareceram centenas de objetos de ferro e madeira (armas, ferramentas, restos de pontes). Dominam agora os túmulos de guerreiros com **espada longa**, lança e escudo, e uma arte de **curvas e espirais**.' },
    { d: 'c. 400 a.C. e depois', t: 'As migrações: a Itália', x: 'Grupos celtas atravessam os Alpes e instalam-se no vale do Pó: os **Ínsubros** (Mediolanum, Milão), os **Boios** (Felsina, Bolonha), os **Senones** (costa adriática) e outros. Segundo o historiador romano **Lívio**, a causa foi uma superpopulação na Gália e um rei, **Ambigato**, que teria mandado os sobrinhos **Belóveso** e **Segóveso** em busca de novas terras; a história é uma lenda tardia, mas reflete a memória romana de uma grande migração.' },
  ] },
  { img: 'cel-la-tene-sitio', leg: 'Local de La Tène, na margem do lago de Neuchâtel (Suíça), onde em 1857 apareceram centenas de objetos de ferro e madeira.' },
  { img: 'cel-migracao', leg: 'Grupo migrante gaulês com carros e gado, séc. IV–III a.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 390 a.C.', t: 'O saque de Roma', x: 'Os **Senones**, sob um chefe a que as fontes chamam **Brenno**, vencem os romanos na batalha do **Ália** e saqueiam Roma (a data tradicional é 390 a.C.; outros cálculos dão 387/386). Só o Capitólio resiste. Segundo Lívio, quando se pesou o resgate, Brenno juntou a espada à balança e disse *Vae victis* («ai dos vencidos»); a frase e o episódio dos gansos do Capitólio têm um sabor de lenda. O trauma marcou durante séculos a atitude romana perante os gauleses.' },
    { d: '279 a.C.', t: 'Delfos', x: 'Uma grande força celta, chefiada por outro **Brenno** (o nome pode ser um título; o seu significado é debatido), invade a Macedónia e a Grécia e ataca o santuário de **Delfos**. Segundo o grego **Pausânias**, os atacantes foram repelidos entre tempestade, frio e a resistência dos gregos; Brenno teria morrido de ferimentos ou por suicídio. Os gregos celebraram a vitória com a festa das **Sotérias**.' },
    { d: '278 – 277 a.C.', t: 'Nasce a Galácia', x: 'Segundo as fontes, cerca de vinte mil celtas passam à Ásia chamados pelo rei **Nicomedes I da Bitínia**, que os queria como mercenários. Dividem-se em três tribos, os **Tolistobogos**, os **Tectósages** e os **Trócmios**, e instalam-se no planalto central da Anatólia, que passará a chamar-se **Galácia**. Durante mais de um século, saqueiam as cidades gregas vizinhas e cobram tributo.' },
    { d: 'c. 232 a.C.', t: 'Átalo I derrota os gálatas', x: 'O rei **Átalo I de Pérgamo** vence os gálatas e obriga-os a ficar dentro de fronteiras. Mandou erigir em Pérgamo um grande monumento de bronze com guerreiros gauleses mortos e feridos, dos quais conhecemos cópias romanas em mármore, como o célebre **«Gaulês moribundo»**: um guerreiro nu, com torque ao pescoço, tratado com compaixão e dignidade invulgares.' },
  ] },
  { img: 'cel-saque-roma', leg: 'Os gauleses de Brenno em Roma, c. 390 a.C.; cena conjetural baseada no relato de Lívio. Ilustração gerada por IA.' },
  { img: 'cel-dying-gaul', leg: 'O «Gaulês moribundo», cópia romana de um original em bronze de Pérgamo (c. 230–220 a.C.), Museus Capitolinos, Roma.' },
  { linha: [
    { d: '225 – 222 a.C.', t: 'Telamon e a conquista da Cisalpina', x: 'Uma grande coligação de **Boios, Ínsubros e Gesatas** (estes últimos, mercenários que, segundo o historiador **Políbio**, lutavam nus) é destruída em **Telamon** (225 a.C.). Em 222 a.C., **Marcelo** vence os Ínsubros em Clastídio e o norte de Itália passa a ser território romano, a «Gália Cisalpina».' },
    { d: 'séc. II – I a.C.', t: 'Os oppida e a moeda', x: 'Na Gália e na Europa central surgem grandes povoações fortificadas, os **oppida** (**Manching**, **Bibracte**, **Závist**, entre outros), com artesãos, mercadores e moeda cunhada, muitas vezes inspirada nos estáteres de ouro de Filipe II da Macedónia. É a primeira vez que os celtas têm cidades. Em contacto com o mundo mediterrânico, aparecem também inscrições gaulesas em alfabeto grego e latino.' },
    { d: '133 a.C.', t: 'A queda de Numância', x: 'Na Península Ibérica, os romanos têm muitas dificuldades em submeter os celtiberos. A cidade de **Numância**, dos Arévacos, resiste a um longo cerco do general **Cipião Emiliano** e rende-se em 133 a.C. Seis anos antes, em 139 a.C., o lusitano **Viriato** tinha sido assassinado.' },
  ] },
  { img: 'cel-ancyra', leg: 'Templo de Augusto e Roma em Ancara (a antiga Ancira), nas paredes do qual se conserva o texto das *Res Gestae*; Ancira foi capital da Galácia romana.' },
  { linha: [
    { d: '58 – 50 a.C.', t: 'Júlio César na Gália', x: 'O procônsul **Júlio César** conquista a Gália em oito campanhas e escreve os seus *Comentários* (a *Guerra das Gálias*), o relato mais completo e a principal fonte, parcial e política, sobre os gauleses. Derrota os Helvécios (58), os Belgas (57), faz expedições à Britânia (55 e 54) e vence a grande revolta de 52.' },
    { d: '52 a.C.', t: 'Alésia', x: 'O chefe arverno **Vercingetorix**, que unira muitas tribos, é cercado em **Alésia** por duas linhas de fortificações romanas, uma interior e outra exterior, contra um exército gaulês de socorro. Rende-se. Foi levado para Roma, preso durante seis anos e executado depois do triunfo de César, em 46 a.C. Segundo Plutarco, houve um milhão de mortos e um milhão de escravos nas guerras de César, números que os historiadores consideram exagerados.' },
  ] },
  { img: 'cel-alesia', leg: 'Reconstituição das fortificações romanas de Alésia (52 a.C.), no MuséoParc Alésia.' },
  { linha: [
    { d: '25 a.C.', t: 'Província da Galácia', x: 'Quando morre o rei **Amintas**, a Galácia é anexada por Augusto e torna-se província romana, com capital em **Ancira** (Ancara). Os gálatas mantêm a sua língua gaulesa durante séculos: por volta de 387 d.C., **São Jerónimo**, que visitou Tréveris, diz que os gálatas falavam quase a mesma língua que os Tréveros.' },
    { d: '12 a.C.', t: 'O altar de Lugdunum', x: 'Em **Lugdunum** (Lyon) inaugura-se o altar de Roma e de Augusto, centro do culto imperial e da assembleia anual dos delegados das tribos da Gália. Mostra como as elites gaulesas passam a participar na ordem romana: em 48 d.C., o imperador **Cláudio**, nascido em Lyon, abre o Senado aos nobres gauleses.' },
    { d: '43 d.C.', t: 'Roma invade a Britânia', x: 'O imperador **Cláudio** envia quatro legiões. **Carataco**, dos Catuvelaunos, resiste até c. 51 d.C., e é entregue a Roma pela rainha dos Brigantes, **Cartimandua**. O sul da ilha torna-se a província romana da **Britannia**.' },
    { d: '60 – 61 d.C.', t: 'A revolta de Boudica', x: 'Quando o governador **Suetónio Paulino** estava a atacar os druidas de **Mona** (Anglesey), a rainha dos Icenos, **Boudica**, levanta-se contra os abusos romanos (segundo Tácito, o marido tinha deixado o reino em testamento ao imperador e às filhas, os romanos anexaram-no, e as filhas foram violadas e ela açoitada). Destrói **Camuloduno** (Colchester), **Londínio** e **Verulâmio**, mas é derrotada numa batalha final, e morre (doença ou veneno, segundo as fontes).' },
  ] },
  { img: 'cel-boudica', leg: 'Estátua de Boudica e das filhas, de Thomas Thornycroft (séc. XIX), Westminster, Londres: uma imagem vitoriana, não um retrato.' },
  { linha: [
    { d: '83 – 84 d.C.', t: 'Mons Graupius e as muralhas', x: 'O general **Agrícola** vence os caledónios em **Mons Graupius**, na Escócia (de local incerto), onde, segundo Tácito, o chefe **Calgaco** teria pronunciado o famoso discurso contra os romanos («fazem um deserto e chamam-lhe paz»). A fronteira acabará por fixar-se na **Muralha de Adriano** (começada em 122 d.C.). A Irlanda, que Agrícola pensou conquistar, nunca foi ocupada.' },
    { d: 'c. 410 – 450', t: 'Roma deixa a Britânia', x: 'As legiões saem da Britânia por volta de 410 d.C. Pequenos reinos britónicos continuam a existir em Gales, na Cornualha e no norte. Durante o século V e VI, muitos britónicos emigram para a **Armórica** (que passa a chamar-se **Bretanha**) e, em menor número, para a Galiza (a diocese de **Britonia**, cujo bispo **Maeloc** assina as atas do II Concílio de Braga, em 572).' },
    { d: 'séc. V', t: 'O cristianismo na Irlanda', x: 'O papa envia **Paládio** à Irlanda em 431 (segundo Próspero da Aquitânia). **São Patrício**, um bretão que fora raptado e escravizado na Irlanda, volta como missionário (datas debatidas, séc. V). Surgem mosteiros, que se tornam os grandes centros de cultura. As primeiras inscrições em **ogham** são desta altura (séc. IV–V d.C.).' },
    { d: '563 – 615', t: 'Os monges viajantes', x: '**Columba** (Colum Cille) funda o mosteiro de **Iona**, na Escócia, em 563; **Columbano** parte de Bangor, na Irlanda, c. 590, e funda **Luxeuil** e **Bobbio** (614). Os monges irlandeses levam livros, escolas e a escrita a grande parte da Europa.' },
    { d: 'c. 800', t: 'O Livro de Kells', x: 'Um manuscrito evangélico decorado com entrelaçados, animais e espirais é feito por monges (talvez em Iona e acabado em Kells, o ponto é debatido). Hoje guarda-se em **Dublin**.' },
  ] },
  { img: 'cel-ogham', leg: 'Pedra ogham (Irlanda), séc. V–VI d.C.: a escrita faz-se com entalhes na aresta da pedra.' },
  { linha: [
    { d: '1707 – 1792', t: 'Os celtas são «inventados»', x: 'O galês **Edward Lhuyd** (1707) mostra que o irlandês, o galês, o bretão e o córnico são de uma mesma família com o gaulês, e usa para ela a palavra «celta». O poeta escocês **James Macpherson** publica os supostos poemas de **Ossian** (1760–63), em parte forjados. Em 1792, **Iolo Morganwg** inventa o Gorsedd, uma cerimónia «druídica», no País de Gales. Nasce o **revivalismo celta**.' },
    { d: '1846 – 1994', t: 'A arqueologia moderna', x: 'Hallstatt (1846), La Tène (1857), Vix (1953), Hochdorf (1977) e **Glauberg** (1994, com uma estátua de guerreiro em arenito de c. 500 a.C.) revelam a riqueza das elites celtas e mudam a imagem que delas se tinha.' }
  ] },
  { h: 'Redescoberta' },
  'Os celtas nunca desapareceram da memória: os romanos escreveram sobre eles, os monges irlandeses copiaram as suas histórias e os eruditos do Renascimento procuraram-nos nos textos. A «redescoberta» científica começa no século XIX com Hallstatt e La Tène, e continua hoje com a arqueologia, a linguística (a decifração do celtibérico, p. ex.) e o ADN antigo. Mas o conceito de «celta» continua a ser disputado: ver «Os celtas existiram?» no legado.'
];

const mapa = [
  'Não há um «mapa celta» único: há uma série de regiões onde a arqueologia, a toponímia e as inscrições mostram línguas ou cultura de tipo celta. Os lugares principais são estes.',
  { tabela: { cab: ['Lugar', 'Onde (atual)', 'Quando / quem', 'Importância'], linhas: [
    ['Hallstatt', 'Alta Áustria', 'c. 800 – 450 a.C.', 'Minas de sal e necrópole; dá o nome à primeira Idade do Ferro'],
    ['Heuneburg', 'Baden-Württemberg, Alemanha', 'c. 600 – 500 a.C.', 'Sede principesca com muralha de tijolo cru; ligada ao comércio com Massália'],
    ['Hochdorf', 'Baden-Württemberg, Alemanha', 'c. 530 a.C.', 'Túmulo principesco intacto, com leito de bronze'],
    ['Mont Lassois / Vix', 'Borgonha, França', 'c. 500 a.C.', 'Sede principesca; túmulo da «Dama de Vix» com a enorme cratera'],
    ['La Tène', 'Neuchâtel, Suíça', 'c. 450 – 50 a.C.', 'Sítio que dá o nome à segunda Idade do Ferro; deposição de armas'],
    ['Manching', 'Baviera, Alemanha', 'séc. III – I a.C.', 'Um dos maiores oppida da Europa central, com cerca de 380 hectares'],
    ['Bibracte', 'Mont Beuvray, Borgonha', 'séc. II – I a.C.', 'Oppidum e capital dos Éduos; onde Vercingetorix foi proclamado chefe supremo'],
    ['Alésia', 'Alise-Sainte-Reine, Borgonha', '52 a.C.', 'Cerco final de Vercingetorix por César'],
    ['Tara e Navan Fort', 'Irlanda', 'Idade do Ferro e depois', 'Sítios cerimoniais de reis da Irlanda, na tradição'],
    ['Maiden Castle', 'Dorset, Inglaterra', 'séc. VI a.C. – 43 d.C.', 'Um dos maiores povoados fortificados («hillforts») da Britânia'],
    ['Citânia de Briteiros', 'Guimarães, Portugal', 'séc. IV a.C. – séc. I d.C. e depois', 'Grande povoado fortificado («castro») do noroeste peninsular'],
    ['Conímbriga', 'Condeixa-a-Nova, Portugal', 'Idade do Ferro; cidade romana', 'Nome com o sufixo céltico -briga («colina fortificada»)'],
    ['Numância', 'Soria, Espanha', 'Até 133 a.C.', 'Cidade dos celtiberos Arévacos, símbolo de resistência'],
    ['Botorrita (Contrebia Belaisca)', 'Saragoça, Espanha', 'séc. II – I a.C.', 'Bronzes com os mais longos textos celtibéricos'],
    ['Ancira, Pessinunte e Tavion', 'Ancara, Turquia', 'Desde 278 a.C.', 'Centros das três tribos da Galácia'],
    ['Mediolanum (Milão) e Felsina (Bolonha)', 'Norte de Itália', 'Desde c. 400 a.C.', 'Centros dos Ínsubros e dos Boios na Gália Cisalpina']
  ] } },
  { h: 'A Europa central: sal, ferro e poder' },
  'A região de **Hallstatt**, nos Alpes, é um bom ponto de partida. Havia ali minas de sal já na Idade do Bronze, e o sal, que conservava a carne e o peixe, foi a base da riqueza. Os mineiros trabalharam em galerias profundas durante séculos (o sal conservou até roupas de lã, sapatos de couro e ferramentas de madeira). A necrópole de Hallstatt mostra uma sociedade com muitas diferenças de riqueza.',
  'Mais a oeste, entre os séculos VII e V a.C., aparecem as **sedes principescas**: povoados fortificados em colinas, de onde um chefe controlava as rotas do comércio. A **Heuneburg**, junto ao Danúbio superior, e o **Mont Lassois**, junto ao Sena, são dos mais conhecidos. Os túmulos dos chefes e das suas famílias nas redondezas (**Hochdorf**, **Vix**, **Glauberg**) estão cheios de objetos importados e de torques, mas também de peças locais.',
  { img: 'cel-bibracte', leg: 'Mont Beuvray: o grande tanque de Bibracte, capital dos Éduos, durante as escavações de 1988.' },
  { h: 'A Gália e os oppida' },
  'Na Gália, os romanos descreveram dezenas de tribos: **Éduos**, **Arvernos**, **Sequanos**, **Helvécios**, **Belgas** (ao norte), **Aquitanos** (no sudoeste, de língua diferente, talvez ancestral do basco), entre outras. Muitas tinham um **oppidum**, uma povoação fortificada de grande área. As suas muralhas eram do tipo chamado **murus gallicus**, descrito por César: uma estrutura de troncos cruzados e pedras, com um paramento de pedra, que resistia bem aos aríetes. **Bibracte** (Mont Beuvray) tinha uma muralha de cinco quilómetros e foi a capital dos Éduos; depois da conquista foi substituída pela cidade romana de **Autun**, fundada por Augusto.',
  { img: 'cel-oppidum-reconstrucao', leg: 'Reconstituição conjetural de um oppidum gaulês com muralha de tipo murus gallicus, séc. I a.C. Ilustração gerada por IA.' },
  { h: 'As Ilhas Britânicas' },
  'Na Britânia, a Idade do Ferro foi uma época de **povoados fortificados** (**Maiden Castle**, **Danebury**), de casas redondas, de tribos (os Catuvelaunos, os Icenos, os Brigantes, os Durotriges) e, no sudeste, de relações com a Gália. Júlio César diz que os habitantes do litoral sul tinham vindo da Bélgica. Na **Irlanda**, a arqueologia mostra poucos povoados, mas sítios cerimoniais de grande escala, como **Tara** (Meath), **Navan Fort** (Armagh, a Emain Macha das lendas) e **Rathcroghan**, que as lendas posteriores ligam aos reis e aos heróis. O contacto direto com o mundo romano foi pequeno. A Irlanda tem, aliás, relativamente poucos objetos de «tipo La Tène» e a sua língua só é atestada por escrito a partir do século IV (ogham).',
  { img: 'cel-tara', leg: 'Colina de Tara (Co. Meath, Irlanda), sítio cerimonial e simbólico dos reis da Irlanda.' },
  { h: 'A Península Ibérica e Portugal' },
  'A Península foi um mosaico. No **centro**, os **celtiberos** (Arévacos, Lusões, Belos, Titos) falavam uma língua celta, o **celtibérico**, que conhecemos por mais de uma centena de inscrições; a mais importante, o **Bronze de Botorrita I** (descoberto em 1970), é um dos textos mais longos, escrito num alfabeto de origem ibérica, e ainda se estuda. Os romanos levaram quase dois séculos a submeter a Península (de 218 a.C. ao fim das guerras cantábricas, em 19 a.C.); o cerco de Numância, em 133 a.C., foi o ponto final da resistência celtibérica.',
  'No **noroeste** (Galiza, Minho, Trás-os-Montes) desenvolveu-se, a partir de c. 900 a.C., a **cultura castreja**, de povoados fortificados chamados **castros** ou **citânias** (**Briteiros**, **Sanfins**, **Terroso**, **Santa Luzia**, **Monte Mozinho**). Tinham casas redondas ou ovais de pedra, com um urbanismo muito característico. É uma cultura com características próprias, e saber se foi «celta» é muito debatido.',
  { img: 'cel-briteiros', leg: 'Citânia de Briteiros (Guimarães), povoado fortificado da cultura castreja, com casas reconstruídas.' },
  { img: 'cel-castro-lusitano', leg: 'Povoado castrejo do noroeste peninsular, c. séc. I a.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { caixa: 'Havia celtas em Portugal?', texto: [
    'A resposta honesta é «**em parte, e depende do que se entende por celta**». Eis o que se sabe.',
    '**O que é firme:** (1) Há inúmeros **topónimos de formação céltica**: o sufixo **-briga** («colina fortificada», «forte»), como em **Conímbriga**, **Mirobriga** (Santiago do Cacém), **Talábriga** e muitos outros. (2) **Plínio, o Velho,** e **Estrabão** falam de populações chamadas **Celtici** no sudoeste (Alentejo) e no noroeste (Galiza). (3) Muitos nomes de pessoas e de deuses das inscrições romanas do noroeste e do centro de Portugal (Bandua, Reve, Nabia) têm raízes que parecem indo-europeias e, para vários, celtas.',
    '**O que é debatido:** a **língua lusitana**, conhecida por poucas inscrições, entre elas a do **Cabeço das Fráguas** (Guarda), a de **Lamas de Moledo** (Viseu) e a de Arroyo de la Luz (Cáceres), todas aproximadamente do século I d.C. É indo-europeia, mas **a maioria dos linguistas não a considera celta**: conserva o *p* inicial (como na palavra *porcom*, «porco»), que as línguas celtas perderam. Também se discute a «língua do sudoeste», das **estelas do Sudoeste** do Algarve e do Baixo Alentejo (c. séc. VII – V a.C.), que Koch considera celta e outros não. **Heródoto**, no século V a.C., diz que os **Keltoi** viviam para lá das Colunas de Hércules, junto dos **Cinetes**, o povo mais ocidental da Europa, e há quem os situe no Algarve.',
    'Em suma: as populações do centro e do norte do que é hoje Portugal pertenciam a um mundo indo-europeu com muitos traços celtas, mas **não há provas claras de uma identidade «celta»** (os lusitanos e os galaicos não se chamam celtas em nenhuma fonte antiga, salvo os **Celtici**). Os romanos conquistaram o território entre 218 e 19 a.C.; **Viriato** (m. 139 a.C.), o chefe dos Lusitanos, é uma figura da resistência, de filiação cultural discutida.'
  ] },
  { img: 'cel-conimbriga', leg: 'Mosaico das ruínas de Conímbriga (Condeixa-a-Nova), cidade romana com um nome de formação céltica (-briga).' },
  { img: 'cel-numancia', leg: 'Fíbula em forma de cavalinho da necrópole celtibérica de Numância (Soria); a cidade resistiu aos romanos até 133 a.C.' },
  { h: 'Itália e a Galácia' },
  { lista: [
    '**Gália Cisalpina:** a partir de c. 400 a.C., Boios, Ínsubros, Senones e outros ocupam a planície do Pó. Fundaram ou conquistaram cidades como Milão (**Mediolanum**) e Bolonha (**Felsina**). Roma conquistou a região entre 225 e 191 a.C. e depois romanizou-a de tal modo que Virgílio e Catulo, nascidos ali, já são poetas latinos.',
    '**A Galácia:** as três tribos instalaram-se em torno de **Ancira** (Ancara, os Tectósages), **Pessinunte** (os Tolistobogos) e **Tavion** (os Trócmios). Segundo Estrabão, cada tribo se dividia em quatro «tetrarquias», e um conselho de 300 delegados reunia no **Drynemeton** («o santuário do carvalho»). Eram pastores, guerreiros e mercenários, que absorveram muitos traços helenísticos e frígios mas mantiveram o gaulês durante séculos. São Paulo escreveu-lhes a *Epístola aos Gálatas*.'
  ] },
  { h: 'As rotas e as trocas' },
  'O mundo celta era atravessado por **rotas comerciais**: o **sal** de Hallstatt e do Dürrnberg (Hallein), o **estanho** e o âmbar (do Báltico ao Mediterrâneo), o **ferro** do Nórico (a atual Estíria e a Caríntia), o **cobre**, o **vinho** e a cerâmica de Itália e da Grécia que entravam pelo vale do **Ródano** e do **Sena**, a partir de Massália. O historiador **Diodoro** diz (seguindo Posidónio) que, por uma ânfora de vinho, os gauleses davam um escravo. Os rios (Danúbio, Reno, Ródano, Loire, Sena) e as passagens alpinas foram as grandes autoestradas.'
];

const sociedade = [
  { h: '1. Organização política' },
  'Os celtas **não tinham um estado**. A unidade política era a **tribo** (em latim *civitas*, em irlandês *túath*), com o seu território, chefes e assembleia, aliada ou rival das vizinhas. Dentro da tribo havia nobres guerreiros, e o poder variava: no tempo de César, algumas tribos gaulesas (como os Éduos) tinham **magistrados eleitos** anualmente (o **vergobreto**), outras eram monarquias, e muitas tinham passado de reis a elites aristocráticas. Os chefes mais poderosos tinham **clientes**: homens que lhes juravam fidelidade e combatiam por eles.',
  'Na **Irlanda** a sociedade era dominada por reis de vários níveis (um «pequeno» rei de uma tribo, um «grande» rei de uma província, e o «rei supremo», mais teórico do que real) e por uma rede de obrigações descrita em tratados jurídicos medievais, as **leis brehon** (textos redigidos a partir do século VII e conservados em manuscritos mais tardios). Na **Galácia**, segundo Estrabão, cada tribo estava dividida em quatro tetrarquias, cada uma com um tetrarca, um juiz, um chefe militar e dois subchefes, e um conselho de 300 reunia-se no Drynemeton.',
  { h: '2. Classes sociais' },
  'César diz que na Gália só duas classes contavam: os **druidas** e os **cavaleiros** (*equites*), a nobreza militar. O povo (*plebs*) era tratado quase como escravo, endividado e dependente. Os historiadores desconfiam desta visão simplificada. Na Irlanda medieval havia reis, uma classe de sábios e artistas (**filid**, poetas, juristas, ferreiros, médicos), homens livres e dependentes. Havia também **escravos**, muitos feitos em guerra e vendidos ao mundo mediterrânico.',
  { img: 'cel-guerreiro-la-tene', leg: 'Guerreiro celta da fase de La Tène, séc. III a.C., com espada longa, escudo e torque; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '3. Religião' },
  'A religião celta é muito mal conhecida. Os celtas **não deixaram textos sagrados** e quase tudo vem de: (1) **relatos de gregos e romanos**, que os veem de fora e muitas vezes com hostilidade; (2) **inscrições e esculturas** da época romana, que identificam deuses locais com deuses romanos (**interpretatio romana**); (3) **mitos irlandeses e galeses escritos por monges cristãos** entre os séculos VII e XIV, muito depois e filtrados pelo cristianismo; (4) a **arqueologia** (santuários, depósitos de oferendas). Por isso, os «deuses celtas» dos livros populares são em grande parte reconstruções.',
  { tabela: { cab: ['Divindade', 'Papel provável', 'De onde vem a informação'], linhas: [
    ['Lugus', 'Deus de muitos talentos (artes, comércio, guerra); César compara-o a Mercúrio', 'Nome em Lugdunum (Lyon), na Hispânia (inscrição de Peñalba de Villastar) e, mais tarde, **Lugh** na Irlanda'],
    ['Taranis', 'Deus do trovão («trovão» em gaulês)', 'Poema de **Lucano** e altares romanos'],
    ['Teutates', '«Deus da tribo» (protetor); aparece em Lucano', 'Lucano; inscrições na Britânia'],
    ['Esus', 'Deus de função obscura; os comentadores tardios de Lucano dizem que lhe ofereciam homens pendurados de árvores', 'Lucano; Pilar dos Nautas (Paris)'],
    ['Cernunnos', 'Figura com hastes de veado, associada aos animais e à abundância', 'O nome só aparece com clareza numa inscrição (Paris); figuras com hastes, como a do caldeirão de Gundestrup, não têm nome'],
    ['Epona', 'Deusa dos cavalos, muito venerada entre os cavaleiros romanos', 'Inúmeras dedicatórias e esculturas em toda a Gália e Britânia'],
    ['Belenos', 'Deus ligado à luz e à cura', 'Inscrições em Aquileia, na Gália e na Britânia'],
    ['Sulis', 'Deusa das águas termais de Bath (*Aquae Sulis*), identificada com Minerva', 'Templo e tabuinhas de maldição em chumbo, em Bath'],
    ['Matres (Mães)', 'Grupos de três deusas ligadas à fertilidade e à proteção', 'Esculturas e altares na Gália, Germânia e Britânia'],
    ['Brigantia / Brígida', 'Deusa de uma tribo da Britânia (os Brigantes), e na Irlanda uma deusa e depois santa, de Kildare, com o dia 1 de fevereiro', 'Inscrições romanas; textos irlandeses medievais (a continuidade entre deusa e santa é debatida)'],
    ['Bandua, Reve, Nabia', 'Divindades locais do noroeste e do centro da Península Ibérica', 'Inscrições romanas em Portugal e na Galiza; a sua ligação com os celtas é debatida']
  ] } },
  { img: 'cel-pilier-nautes', leg: 'Pilar dos Nautas (Paris, início do séc. I d.C.), o testemunho mais claro do nome Cernunnos; Museu de Cluny, Paris.' },
  { img: 'cel-gundestrup', leg: 'Caldeirão de Gundestrup (Dinamarca), de prata, séc. II–I a.C.; de origem debatida (talvez feito na Trácia); Museu Nacional da Dinamarca.' },
  { h: 'Os druidas' },
  'Os **druidas** eram, segundo César (*Guerra das Gálias*, VI), a classe sacerdotal e intelectual da Gália: presidiam aos sacrifícios, ensinavam, julgavam as disputas e podiam excomungar. Segundo ele, o treino durava até vinte anos e fazia-se oralmente, pois **não era permitido pô-lo por escrito**. Acreditavam na imortalidade da alma. **Plínio, o Velho,** descreve uma cerimónia em que um druida, vestido de branco, corta com uma foice de ouro o **visco** de um carvalho (um dos poucos pormenores concretos, e muito citado). Em **Mona** (Anglesey), em 60 d.C., os druidas foram atacados pelos romanos, segundo Tácito.',
  'O problema é que **não temos nenhum texto escrito por um druida**. A maior parte do que se diz (os rituais em Stonehenge, a «sabedoria druídica», as vestes brancas) vem de Roma ou foi imaginada depois. O imperador **Cláudio** proibiu a sua religião. Na Irlanda, os druidas aparecem nas histórias medievais, mas já como figuras de feitiçaria, derrotados pelos santos cristãos.',
  { img: 'cel-druida-ritual', leg: 'Cerimónia de druidas num bosque, segundo as fontes clássicas; cena conjetural. Ilustração gerada por IA.' },
  { h: 'Sacrifícios, cabeças e lugares sagrados' },
  { lista: [
    '**Lugares:** os celtas veneravam **bosques** (*nemeton*, «lugar sagrado»), **rios, lagos e nascentes**, e ofereciam armas, joias e objetos. Em **Llyn Cerrig Bach** (Anglesey) encontraram-se, em 1942, dezenas de armas, uma corrente de escravos e peças de carros lançados a um lago entre c. 150 a.C. e 100 d.C.',
    '**O culto das cabeças:** os gregos e romanos (Posidónio, Diodoro, Estrabão) dizem que os guerreiros celtas cortavam as cabeças dos inimigos, penduravam-nas ao pescoço dos cavalos e conservavam-nas em óleo de cedro; Posidónio diz que o viu ele próprio. A arqueologia confirma o culto: em **Roquepertuse** e **Entremont** (sul da França) há pórticos com nichos para crânios, e há esculturas de cabeças em toda a área celta.',
    '**Sacrifícios humanos:** César e Estrabão falam de grandes figuras de vime onde se queimavam homens. Os historiadores discutem o quanto da história é propaganda romana, mas os sacrifícios humanos e animais são plausíveis e há indícios arqueológicos pontuais. As fontes romanas, que também tinham sacrifícios humanos em tempos recuados, ressaltam-nos para mostrar os gauleses como «bárbaros».',
    '**O calendário religioso:** as festas irlandesas medievais de **Samhain** (1 de novembro), **Imbolc**, **Beltane** e **Lughnasadh** dividem o ano em quatro, e o calendário de Coligny sugere um ano com divisões semelhantes. A ideia de que são festas celtas «antigas» é uma extrapolação razoável, mas nem sempre provada.'
  ] },
  { h: 'Mitos: as grandes histórias' },
  'As grandes narrativas celtas só foram postas por escrito na Idade Média, nas ilhas. Na Irlanda, dividem-se em «ciclos»: o **mitológico** (os **Tuatha Dé Danann**, os «povos da deusa Danu», que a tradição transformou em deuses e depois em fadas), o **do Ulster** (o herói **Cú Chulainn**, a rainha **Medb** e o grande conto *Táin Bó Cúailnge*, «O Roubo do Gado de Cooley»), o **feniano** (Fionn mac Cumhaill) e o dos reis. Em Gales, os *Mabinogion* (onze contos, copiados nos séculos XIV–XV, de matéria muito mais antiga) incluem personagens como Pwyll e Pryderi, e referências a Artur. Estas histórias refletem um mundo pagão, mas foram **escritas, escolhidas e retocadas por cristãos**, e não podem ler-se como um «livro sagrado» celta.',
  { h: '4. Economia' },
  'Os celtas eram sobretudo **agricultores e pastores**. Cultivavam trigo, cevada, aveia e centeio, em campos de arado, com **arados de ferro** e, na Gália, usavam uma máquina de ceifar puxada por animais (o *vallus*, descrito por Plínio). Criavam bois, ovelhas, cavalos e, em especial, **porcos** (o presunto e o toucinho gaulês eram exportados para Roma, diz Estrabão). Trabalhavam o **ferro** em grande escala, bem como o bronze, o ouro, o âmbar, o vidro e o coral.',
  'A **moeda** entra no mundo celta a partir do século IV–III a.C., em ouro, prata e bronze, muitas vezes por imitação dos estáteres de Filipe II e de Alexandre. As trocas faziam-se por rios e estradas, e havia **mercadores itálicos** e gregos em muitas povoações. Os celtas vendiam **sal**, ferro, peles, gado, escravos e lã; compravam vinho, azeite e objetos de luxo.',
  { img: 'cel-forja', leg: 'Ferreiro celta da Idade do Ferro, c. séc. II a.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '5. Escrita e língua' },
  'Os celtas valorizavam a **tradição oral**: os druidas e, mais tarde, os poetas irlandeses (**filid**) decoravam enormes textos. Mas não eram iletrados: os **helvécios** tinham registos em grego (César descobriu um acampamento com listas de homens em letras gregas), e conhecem-se **centenas de inscrições** em línguas celtas, escritas com alfabetos emprestados: o **etrusco** (lepôntico), o **grego** e o **latim** (gaulês), o **ibérico** (celtibérico) e, nas ilhas, o **ogham**, um alfabeto de traços à volta de uma linha que só aparece a partir do século IV d.C. Os textos mais longos são o **calendário de Coligny** e a **placa de chumbo de Larzac** (França, c. 100 d.C.), ambos em gaulês, e os **bronzes de Botorrita**, em celtibérico.',
  { tabela: { cab: ['Língua', 'Ramo', 'Onde / quando', 'Estado'], linhas: [
    ['Lepôntico', 'Celta continental', 'Norte da Itália, séc. VI – I a.C.', 'Extinta; a escrita celta mais antiga'],
    ['Gaulês', 'Celta continental', 'Gália, até ao séc. V–VI d.C.', 'Extinta; deixou palavras no francês, no português e no espanhol'],
    ['Celtibérico', 'Celta continental', 'Centro da Península Ibérica, séc. III – I a.C.', 'Extinta; conhecida por bronzes e cerâmicas'],
    ['Gálata', 'Celta continental', 'Anatólia, séc. III a.C. – pelo menos IV d.C.', 'Extinta; quase só nomes de pessoas'],
    ['Lusitano', 'Indo-europeu, mas não celta (para a maioria)', 'Centro de Portugal e Estremadura espanhola, séc. I d.C.', 'Extinta; poucas inscrições'],
    ['Irlandês, gaélico escocês, manx', 'Insular, goidélico', 'Irlanda, Escócia, Ilha de Man', 'Vivas (o manx, revitalizado)'],
    ['Galês, córnico, bretão', 'Insular, britónico', 'País de Gales, Cornualha, Bretanha', 'Vivas (o córnico, revitalizado)'],
    ['Picto', 'Debatido', 'Nordeste da Escócia, séc. III – IX d.C.', 'Extinta; talvez britónica, o ponto é discutido']
  ] } },
  { img: 'cel-coligny', leg: 'Fragmento do calendário de Coligny, em bronze e em gaulês, séc. II d.C.; Museu Galo-Romano de Lyon.' },
  { img: 'cel-botorrita', leg: 'Bronze de Botorrita III (c. 100 a.C.), com texto em celtibérico; Museu de Saragoça.' },
  { h: '6. Casa e família' },
  'Na Britânia e na Irlanda, a casa típica era a **casa redonda**, de paredes de vime e barro ou de pedra, com telhado cónico de colmo e uma lareira no centro. Na Gália e na Europa central havia também casas retangulares de madeira. No noroeste da Península, os castros tinham casas de pedra, redondas ou ovais, e muitos pátios. Os povoados incluíam celeiros, fossas de armazenamento e, nos oppida, bairros de artesãos.',
  'A família era alargada e dominada por pais e irmãos mais velhos, mas as **mulheres** tinham em muitas sociedades mais direitos do que em Roma: nas leis irlandesas medievais podiam ter propriedade, divorciar-se em certos casos e, nos relatos romanos, há rainhas guerreiras (**Boudica**, **Cartimandua**). Os filhos da nobreza eram frequentemente criados por outra família (o **fosterage** irlandês), uma forma de criar alianças. A **hospitalidade** era uma obrigação sagrada.',
  { img: 'cel-casa-redonda', leg: 'Povoado de casas redondas da Idade do Ferro na Britânia; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '7. Alimentação' },
  { lista: [
    '**Cereais:** pão, papas e cerveja de cevada ou de trigo. Os romanos citam a cerveja gaulesa (*cervesia*, palavra que está na origem do português «cerveja»).',
    '**Carne:** porco (o preferido), vaca, carneiro e caça, cozinhados em **caldeirões** ou assados em espetos. César diz que os bretões não comiam lebre, galinha nem ganso, por tabu religioso.',
    '**Lacticínios:** leite, queijo e manteiga (Estrabão diz que os bretões «não sabiam fazer queijo»; a arqueologia parece contrariá-lo).',
    '**Bebidas:** o **hidromel** (como em Hochdorf), a cerveja e, para as elites, o **vinho** importado, que segundo os escritores clássicos bebiam puro (os gregos misturavam-no com água e achavam isso bárbaro).',
    '**Banquetes:** Posidónio descreve banquetes em que o melhor pedaço de carne (a «porção do campeão») era disputado por guerreiros, por vezes com duelos. É uma imagem literária, mas ecoada nas histórias irlandesas.'
  ] },
  { img: 'cel-bardo-festim', leg: 'Bardo a cantar num banquete de chefe celta; cena conjetural. Ilustração gerada por IA.' },
  { h: '8. Vestuário' },
  'Os celtas usavam **calças** (as *braccae*), que os romanos achavam estranhas (a Gália Narbonense chegou a ser chamada *Gallia bracata*, «Gália de calças»), uma **túnica** e um **manto** preso ao ombro por uma **fíbula** (um alfinete de segurança). Os tecidos eram de lã, por vezes aos **quadrados** ou às riscas e de cores vivas: Diodoro fala de mantos «tingidos de mil cores». Em Hallstatt preservaram-se tecidos de lã axadrezados. Os guerreiros e as mulheres de elite usavam **torques** (colares rígidos de ouro, bronze ou prata), pulseiras e brincos; os homens usavam bigode e, segundo Diodoro, alguns embranqueciam o cabelo com cal e puxavam-no para trás. Em Telamon, os **Gesatas**, mercenários, lutaram nus, segundo Políbio.',
  { h: '9. Música, poesia e jogos' },
  'Os celtas tinham **bardos**, poetas que cantavam as façanhas dos chefes e dos antepassados (Posidónio descreve-os). Entre os instrumentos conhecem-se as **liras** (e, mais tarde, as **harpas**) e o **carnyx**, uma trombeta de bronze com a forma de um javali ou de um dragão, tocada em batalha para assustar o inimigo; achados como o de **Deskford** (Escócia) e o de **Tintignac** (França, 2004) permitiram reconstruir o seu som. Os jogos de tabuleiro (**fidchell**, na Irlanda, **gwyddbwyll** em Gales, de que só há prova a partir da Idade Média) e as corridas de carros eram comuns, bem como as lutas e as caçadas.',
  { h: '10. Ciência, calendário e medicina' },
  'O **calendário de Coligny** (descoberto em 1897 em Coligny, no leste de França; bronze, séc. II d.C.) é um calendário lunissolar de cinco anos, com meses de 29 ou 30 dias e um mês extra para acertar com o Sol, escrito em gaulês com letras latinas. Mostra um conhecimento astronómico notável e uma maneira própria de contar o tempo (em noites, segundo César). César diz que os druidas estudavam as estrelas, a natureza e os deuses, e **Plínio** que usavam plantas medicinais, mas estas afirmações são pouco documentadas. Um médico de Bordéus do séc. IV, **Marcelo**, incluiu no seu livro receitas com palavras gaulesas.',
  { h: '11. Tecnologia' },
  { lista: [
    '**Metalurgia do ferro:** os celtas foram mestres do ferro e do aço; as suas espadas eram longas e flexíveis, e os romanos louvaram os ferreiros do Nórico.',
    '**Cota de malha:** é provavelmente uma invenção celta (do século IV–III a.C.), adotada depois pelos romanos.',
    '**Carros e rodas:** do carro de quatro rodas de Hallstatt ao carro de guerra leve de duas rodas, de rodas com aros de ferro aquecidos e encaixados, uma técnica muito apurada.',
    '**Construção:** muralhas de madeira e pedra (o *murus gallicus*), pontes e estradas de madeira.',
    '**Outros:** a moeda cunhada, o sabão (segundo Plínio, de sebo e cinza de faia, inventado pelos gauleses), os barris de madeira e a máquina de ceifar. Muitas destas atribuições são feitas por autores romanos e algumas são discutidas.'
  ] },
  { img: 'cel-escudo-battersea', leg: 'Escudo de Battersea (rio Tamisa), em bronze com decoração em vidro vermelho, c. 350–50 a.C.; Museu Britânico.' },
  { img: 'cel-guerreiro-galaico', leg: 'Estátua de guerreiro galaico-lusitano de Boticas (Portugal), com escudo redondo.' },
  { h: '12. Guerra' },
  'A guerra era central para as elites celtas. Os romanos descrevem-nos como corajosos, mas desordenados: Políbio e Lívio falam de uma carga furiosa, de grandes espadas mal temperadas que se dobravam (em partes verdadeiro, mas talvez exagerado). A infantaria usava **lança, espada longa e escudo** oval ou retangular (e, nos mais ricos, capacete e cota de malha); os **cavaleiros**, ricos, eram tidos como os melhores do tempo, e foram recrutados para o exército romano. Os **carros de guerra**, usados na Itália e na Britânia, impressionaram César. Havia **mercenários** celtas por todo o Mediterrâneo (no Egito dos Ptolomeus, na Grécia, em Cartago). As cabeças-troféu e o ruído do **carnyx** completavam o efeito psicológico.',
  { h: '13. Morte e túmulos' },
  'Na primeira Idade do Ferro, os chefes eram enterrados sob **grandes tumuli** (túmulos de terra), com carros, armas, e vasos para um banquete no além (Hochdorf, Vix). Em La Tène, passam a ser sepultados em necrópoles planas, com espadas e, em certas regiões (como o Yorkshire, na Britânia), em carros desmontados. Na Gália do século II–I a.C., a **cremação** é comum. Os mais pobres deixaram poucos vestígios. A crença na imortalidade da alma, segundo César e Diodoro, explicaria a coragem na guerra, e alguns dizem que os celtas emprestavam dinheiro para ser pago no outro mundo (Valério Máximo), uma curiosidade que ninguém consegue verificar.'
];

const personalidades = [
  'Dos celtas continentais não sobreviveu nenhum texto escrito por eles, e conhecemos as suas figuras principais por gregos e romanos; das ilhas, as lendas são escritas muito depois. Por isso se assinala o que é história e o que é lenda.',
  { h: 'Brenno (séc. IV e III a.C.)' },
  'O nome é dado por fontes antigas a dois chefes: o dos **Senones**, que derrotou os romanos no Ália e saqueou Roma (c. 390 a.C.), e o que dirigiu a invasão da Grécia e o ataque a Delfos (279 a.C.). Talvez *Brennos* fosse um título, e não um nome; o ponto é debatido. As histórias que os romanos e gregos contam (a espada na balança, a morte em Delfos) misturam facto e lenda.',
  { h: 'Vercingetorix (c. 82 – 46 a.C.)' },
  'Chefe dos **Arvernos**, filho de um nobre que, segundo César, aspirava a ser rei e foi morto por isso. Em 52 a.C. conseguiu o que raramente acontecera: unir muitas tribos gaulesas contra Roma. Usou a política de «terra queimada» e venceu em **Gergóvia**, mas foi cercado em **Alésia** e rendeu-se. Foi exibido no triunfo de César, em 46 a.C., e executado. No século XIX, a França fez dele um herói nacional; a imagem tem pouco a ver com o homem real, de quem não temos retrato (só as moedas que se lhe atribuem).',
  { img: 'cel-vercingetorix', leg: 'Estátua de Vercingetorix por Aimé Millet (1865), Alise-Sainte-Reine: imagem romântica do séc. XIX, pois não existe retrato antigo.' },
  { h: 'Diviciaco (séc. I a.C.)' },
  'Nobre e druida dos **Éduos**, aliado de César no início da guerra das Gálias. **Cícero**, que o conheceu em Roma, diz que ele dominava a «ciência da natureza» e a adivinhação, e é uma das raras vezes em que um druida real aparece num texto de um contemporâneo. O seu irmão, **Dumnorix**, era rival e inimigo de Roma.',
  { h: 'Deiotaro (m. c. 40 a.C.)' },
  'Tetrarca e depois rei dos **Tolistobogos**, na Galácia. Aliou-se aos romanos, apoiou Pompeu na guerra civil, foi perdoado por César e defendido por Cícero (*Pro rege Deiotaro*, 45 a.C.). Mostra uma elite celta helenizada, que governa como um rei grego e fala a língua local.',
  { h: 'Viriato (m. 139 a.C.)' },
  'Chefe dos **Lusitanos**, pastor (ou caçador) que, segundo as fontes romanas, liderou entre 147 e 139 a.C. uma guerra de guerrilha contra Roma. Foi assassinado por três companheiros subornados por **Quinto Servílio Cepião**. É uma figura central da memória portuguesa, mas **os lusitanos nem sempre são tidos por celtas** (ver o mapa): era um chefe indígena da Península, de cultura e língua indo-europeias, e nenhuma fonte antiga lhe chama «celta».',
  { h: 'Carataco (m. depois de 51 d.C.)' },
  'Príncipe dos **Catuvelaunos**, filho de Cunobelino. Liderou a resistência contra a invasão de Cláudio durante quase uma década, e foi vencido em c. 51 d.C. Entregue a Roma pela rainha **Cartimandua**, foi levado a Roma, e, segundo **Tácito**, o seu discurso perante o imperador (que lhe poupou a vida) foi memorável.',
  { h: 'Cartimandua (séc. I d.C.)' },
  'Rainha dos **Brigantes**, na Britânia setentrional, aliada de Roma. Entregou Carataco aos romanos, o que lhe valeu o ódio de muitos. Divorciou-se do marido **Venúcio** para casar com o escudeiro dele, e foi expulsa em 69 d.C., sendo evacuada pelos romanos (Tácito).',
  { h: 'Boudica (m. 60 ou 61 d.C.)' },
  'Rainha dos **Icenos** (Norfolk). Depois da morte do marido, **Prasutago**, que deixara o reino em parte a Roma, os romanos anexaram-no e maltrataram a família. Ela levantou os Icenos, os Trinovantes e outros, e queimou Camuloduno, Londínio e Verulâmio, matando, segundo Tácito, cerca de 70 000 pessoas (número discutido). Foi derrotada; terá morrido por veneno ou doença. As fontes escritas são só romanas; a sua imagem moderna é sobretudo vitoriana.',
  { h: 'Posidónio (c. 135 – c. 51 a.C.)' },
  'Filósofo e historiador grego, de Apameia, que viajou pela Gália em c. 100 a.C. A sua obra perdeu-se, mas **Estrabão**, **Diodoro** e **Ateneu** copiaram-no, e é a fonte principal de muito do que se diz dos costumes celtas (banquetes, bardos, cabeças cortadas, druidas). Era um observador atento, mas via-os a partir de um quadro de ideias gregas sobre «bárbaros».',
  { h: 'Júlio César (100 – 44 a.C.)' },
  'O general conquistador da Gália é o autor da fonte mais completa sobre os celtas, os *Comentários à Guerra das Gálias*. É um texto notável e uma **obra de propaganda**: o autor tinha de justificar a guerra aos olhos de Roma. Contém dados valiosos (as tribos, os druidas, as muralhas), mas não pode ser lido como um relatório neutro.',
  { h: 'Medb e Cú Chulainn (lenda)' },
  '**Medb**, rainha de Connacht, e **Cú Chulainn**, jovem guerreiro de Ulster, são as figuras principais do *Táin Bó Cúailnge*, conto épico irlandês conservado em manuscritos medievais (o *Livro de Leinster*, c. século XII, e uma versão mais antiga no *Lebor na hUidre*). São **personagens lendárias**, não históricas; mas os textos refletem, com muita transformação, um mundo de guerreiros, carros e duelos.',
  { h: 'São Patrício (séc. V)' },
  'Bretão romanizado, raptado aos 16 anos por piratas irlandeses e escravizado na Irlanda, onde guardou rebanhos; fugiu e depois regressou como bispo missionário. Conhecem-se dois textos escritos por ele em latim, a *Confissão* e a *Carta a Coroticus*, entre os mais antigos documentos escritos ligados à Irlanda. As datas são debatidas (séc. V). A tradição que lhe atribui a expulsão das serpentes é lenda.',
  { h: 'Columba (c. 521 – 597) e Columbano (c. 543 – 615)' },
  '**Columba**, nobre irlandês, fundou Iona (563) e converteu parte dos pictos, segundo o biógrafo **Adomnán**. **Columbano** partiu de um mosteiro da Irlanda para a Gália e para a Itália, e fundou Luxeuil e Bobbio, onde morreu. Foram dos principais agentes da cultura insular e da «peregrinação por Cristo» que trouxe os monges irlandeses ao continente.',
  { h: 'Edward Lhuyd (1660 – 1709)' },
  'Naturalista e linguista galês, conservador do Museu Ashmolean, em Oxford. No seu *Archaeologia Britannica* (1707) mostrou, por comparação de vocabulário, que o galês, o córnico, o bretão, o irlandês e o gaélico escocês pertenciam a uma mesma família e chamou-lhe «celta». Foi o fundador da ideia de uma família linguística celta e, sem querer, de um conceito moderno de «celta» que depois cresceu para lá da linguística.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**As línguas celtas vivas:** o irlandês (língua nacional e primeira língua oficial da República da Irlanda), o galês (cerca de meio milhão de falantes), o gaélico escocês, o bretão, o córnico e o manx.',
    '**As literaturas:** os mitos e as epopeias irlandeses e galeses, uma das mais antigas literaturas vernáculas da Europa, e as lendas do rei **Artur**, que o ciclo galês e depois a literatura francesa e inglesa levaram a toda a Europa.',
    '**Os nomes de lugares:** *Paris* (dos **Parisii**), *Lyon* (*Lugdunum*), *Bélgica* (dos **Belgae**), *Boémia* (dos **Boii**), *Viena* (*Vindobona*), e os sufixos *-dunum* («fortaleza»), *-magus* («planície») e *-briga*.',
    '**Palavras:** no português, vêm do gaulês, via latim, por exemplo *carro*, *légua* e *cerveja* (segundo os dicionários etimológicos).',
    '**O cristianismo insular:** mosteiros, escolas, manuscritos e missionários irlandeses que, entre os séculos VI e IX, contribuíram para reconstruir a cultura latina da Europa. O Sínodo de **Whitby** (664) discutiu práticas insulares (a data da Páscoa, a tonsura) e escolheu o uso de Roma.',
    '**A imagem:** os «celtas» tornaram-se um símbolo identitário e cultural de várias nações e regiões, e uma marca popular.'
  ] },
  { h: 'Arte' },
  'A «**arte celta**» é, antes de mais, a arte de **La Tène**, a partir de c. 450 a.C.: curvas, espirais, **trísceles** (três braços em espiral), palmetas e folhagens estilizadas, rostos que parecem esconder-se nos padrões. Seguiu várias fases (o estilo «primitivo», o de **Waldalgesheim**, o «plástico», o estilo das espadas), da Europa central às Ilhas Britânicas. Os objetos mais célebres são **torques** de ouro (**Snettisham**), espelhos de bronze, escudos (**Battersea**), capacetes (**Waterloo**) e escultura de pedra (**Glauberg**, **Roquepertuse**).',
  'Depois da conquista romana, o estilo desaparece no continente, mas **sobrevive nas ilhas**: dá origem à chamada **arte insular** (séc. VII – IX d.C.), a dos manuscritos como o **Livro de Kells** e o *Livro de Durrow*, dos metais (o **Cálice de Ardagh** e o **Broche de Tara**) e das **cruzes de pedra** irlandesas, onde se misturam espirais de La Tène, entrelaçados germânicos e cenas bíblicas.',
  { img: 'cel-book-of-kells', leg: 'Página Chi Rho do Livro de Kells (c. 800), Trinity College, Dublin.' },
  { img: 'cel-cruz-monasterboice', leg: 'Cruz de Muiredach, em Monasterboice (Irlanda), c. séc. X.' },
  { img: 'cel-escriba-monge', leg: 'Monge copista num scriptorium insular, c. séc. VIII; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: 'Arquitetura' },
  'Os celtas não deixaram edifícios de pedra monumentais: construíram sobretudo em **madeira, terra e pedra seca**. O que ficou são **muralhas**, **fossos** e **plataformas** de povoados fortificados (oppida, hillforts, castros), túmulos (tumuli) e, nas ilhas cristãs, as **torres redondas**, os **oratórios** e as **cruzes** dos mosteiros. As grandes cidades que se associam aos celtas (Paris, Lyon, Milão, Viena, Ancara) foram, na prática, desenvolvidas pelos romanos.',
  { h: 'Os celtas existiram? Um debate' },
  'A pergunta é provocadora, mas séria: o que significa dizer que os celtas existiram? A resposta depende da definição, e os especialistas dividem-se.',
  { lista: [
    '**A posição «tradicional»:** os celtas eram um povo ou conjunto de povos da Idade do Ferro, com uma língua, uma cultura material (Hallstatt e La Tène) e crenças comuns, que se expandiram da Europa central. É a visão do século XIX e de boa parte do século XX.',
    '**A posição «crítica»** (**Simon James**, **John Collis** e outros, desde os anos 1990): os antigos usaram *Keltoi* e *Galatai* de forma vaga; os habitantes das Ilhas Britânicas nunca foram assim chamados na Antiguidade; as «culturas» arqueológicas não coincidem com línguas nem com identidades; a ideia de uma «nação celta» é uma invenção moderna (dos séculos XVII–XIX) e foi usada politicamente.',
    '**A posição «linguística»:** as línguas celtas existem e formam uma família sólida, por isso há **celtas no sentido de falantes de línguas celtas**. Não é uma ideia moderna: os falantes (e as inscrições) estão lá. Mas daí não se segue que se sentissem um povo.',
    '**A teoria do «celta do Oeste»** (**John Koch**, **Barry Cunliffe**): a língua celta pode ter nascido na fachada atlântica na Idade do Bronze, e não em Hallstatt. Divide a comunidade científica.'
  ] },
  'Um consenso razoável é este: **houve populações de línguas celtas, em muitas partes da Europa, com algumas práticas e símbolos comuns; mas não houve uma «nação celta» nem um «império celta».** E os nomes que hoje usamos (a arte «celta», as nações «celtas») são em parte invenções recentes, que nem por isso deixam de ter valor cultural.',
  { img: 'cel-gorsedd', leg: 'Cerimónia do Gorsedd, no Eisteddfod do País de Gales: uma tradição «druídica» inventada em 1792.' },
  { h: 'O revivalismo celta' },
  'A partir do século XVIII, a Europa redescobre os celtas. **Ossian** (Macpherson, 1760) inspira o romantismo; **Iolo Morganwg** inventa o Gorsedd (1792) e a ideia de uma sucessão de druidas até aos bardos galeses; no século XIX, a arqueologia, o nacionalismo irlandês e escocês e os movimentos de revitalização das línguas dão forma a um «**panceltismo**». Houve também usos e abusos: teorias raciais do século XIX que fizeram dos celtas uma «raça» (hoje rejeitadas pela ciência), e uma cultura popular em que **druidas**, **fadas**, **música «celta»** e **New Age** muitas vezes têm pouco a ver com os celtas históricos. Hoje o **Festival Interceltique de Lorient** (Bretanha, desde 1971) e as escolas de língua celta mostram a face mais sólida do fenómeno.',
  { h: 'A redescoberta arqueológica' },
  'A arqueologia dos celtas é recente: **Hallstatt** (1846), **La Tène** (1857), o **Caldeirão de Gundestrup** (1891), **Vix** (1953), **Hochdorf** (1977), **Glauberg** (1994). Na Península, o **Bronze de Botorrita** (1970) e as escavações de **Briteiros** (a partir de 1875, por **Francisco Martins Sarmento**) abriram a investigação. Hoje a arqueologia, o ADN antigo e a linguística quantitativa fazem avançar o debate, e as respostas mudam com cada descoberta.',
  { caixa: 'Para visitar', texto: 'Na **Áustria**, **Hallstatt** e as suas minas de sal. Na **Alemanha**, o **Keltenwelt am Glauberg** (Hessen) e o museu de **Hochdorf**. Em **França**, o **Museu de Châtillon-sur-Seine** (a cratera de Vix), o museu de **Bibracte** (Mont Beuvray) e o **MuséoParc Alésia**; na **Suíça**, o **Laténium**, em Neuchâtel. No **Reino Unido** e na **Irlanda**, o **Museu Britânico**, o **Museu Nacional da Irlanda** (Dublin) e o **Trinity College** (o Livro de Kells), além de **Tara** e dos mosteiros como **Glendalough** e **Monasterboice**. Em **Portugal**, a **Citânia de Briteiros** e o **Museu da Sociedade Martins Sarmento** (Guimarães), as **ruínas e o museu de Conímbriga** e o **Museu Nacional de Arqueologia** (Lisboa). Em **Espanha**, **Numância** (Soria) e o Museu de Saragoça (os bronzes de Botorrita).' }
];

const quiz = [
  { p: 'Em que sentido se pode falar, com mais rigor, de «celtas»?', op: ['Como um império governado a partir da Gália', 'Como falantes de línguas celtas, com culturas materiais aparentadas', 'Como uma raça com origem na Irlanda', 'Como os construtores de Stonehenge'], certa: 1, exp: 'O uso mais sólido do termo é linguístico: as línguas celtas formam uma família comprovada. Os celtas nunca foram um estado, e Stonehenge é muito anterior.' },
  { p: 'De que local austríaco a cultura da primeira Idade do Ferro celta toma o nome?', op: ['La Tène', 'Hallstatt', 'Alésia', 'Bibracte'], certa: 1, exp: 'A cultura de Hallstatt (c. 800 – 450 a.C.) deve o nome a uma povoação com minas de sal e uma grande necrópole, explorada desde 1846.' },
  { p: 'Que cultura se segue a Hallstatt, a partir de c. 450 a.C., conhecida pela arte de curvas e espirais?', op: ['Tartessos', 'La Tène', 'Los Millares', 'Villanova'], certa: 1, exp: 'La Tène, nome de um sítio na margem do lago de Neuchâtel, na Suíça, descoberto em 1857.' },
  { p: 'Que cidade foi saqueada pelos Senones, chefiados por Brenno, c. 390 a.C.?', op: ['Atenas', 'Cartago', 'Roma', 'Massália'], certa: 2, exp: 'Os gauleses venceram os romanos no Ália e saquearam Roma; só o Capitólio resistiu.' },
  { p: 'Quem comandou a resistência gaulesa cercada em Alésia, em 52 a.C.?', op: ['Boudica', 'Vercingetorix', 'Viriato', 'Carataco'], certa: 1, exp: 'O arverno Vercingetorix rendeu-se a César depois do cerco e foi executado em 46 a.C., depois do triunfo de César.' },
  { p: 'Que região da atual Turquia foi fundada por celtas em 278–277 a.C.?', op: ['A Frígia', 'A Capadócia', 'A Galácia', 'A Lícia'], certa: 2, exp: 'Os Tolistobogos, os Tectósages e os Trócmios instalaram-se no planalto central da Anatólia, a Galácia, onde São Paulo lhes escreveu uma carta.' },
  { p: 'Qual destas fontes, escrita por romanos, é a principal sobre a conquista da Gália?', op: ['As Metamorfoses, de Ovídio', 'A Guerra das Gálias, de Júlio César', 'A Eneida, de Virgílio', 'Os Anais, de Tácito'], certa: 1, exp: 'Os Comentários de César são a fonte mais completa, mas são uma obra de propaganda, escrita por um dos protagonistas.' },
  { p: 'O que eram os «druidas», segundo César?', op: ['Soldados de elite', 'Mercadores de sal', 'Uma classe de sacerdotes, juízes e sábios', 'Reis das tribos'], certa: 2, exp: 'César descreve-os como sacerdotes e educadores. Não sobreviveu nenhum texto escrito por um druida, por isso muito do que se diz deles é incerto.' },
  { p: 'O que são os «oppida»?', op: ['Torques de ouro', 'Grandes povoações fortificadas do fim da Idade do Ferro', 'Alfabetos celtas', 'Carros de guerra'], certa: 1, exp: 'Os oppida (Bibracte, Manching e outros) eram povoações fortificadas com artesãos, comércio e, por vezes, moeda.' },
  { p: 'O que se pôs no túmulo de uma mulher de elite em Vix, c. 500 a.C., e que impressiona pelo tamanho?', op: ['Uma espada de ferro de três metros', 'Uma enorme cratera de bronze, com cerca de 1100 litros', 'Uma estátua de ouro maciço', 'Um barco'], certa: 1, exp: 'A cratera de Vix mede 1,64 m, pesa 208 kg e foi importada do mundo grego ou do sul da Itália.' },
  { p: 'Para que serve o calendário de Coligny?', op: ['É um mapa das estradas da Gália', 'É um calendário lunissolar em gaulês, de cinco anos', 'É uma lista de reis irlandeses', 'É um tratado de medicina'], certa: 1, exp: 'Encontrado em 1897, em bronze, tem meses de 29 ou 30 dias e meses intercalares para acertar com o Sol; é do século II d.C.' },
  { p: 'Porque é debatido que a língua lusitana seja celta?', op: ['Porque não tem verbos', 'Porque conserva o p inicial, que as línguas celtas perderam', 'Porque foi escrita em ogham', 'Porque só existiu na Galácia'], certa: 1, exp: 'A inscrição de Cabeço das Fráguas tem a palavra porcom («porco»), com p inicial. A maioria dos linguistas considera o lusitano indo-europeu, mas não celta.' },
  { p: 'Qual destes países nunca foi conquistado pelos romanos?', op: ['A Gália', 'A Irlanda', 'A Britânia (sul)', 'A Galácia'], certa: 1, exp: 'Agrícola pensou conquistar a Irlanda, mas nunca o fez; é a razão por que as tradições célticas aí sobreviveram mais intactas.' },
  { p: 'Que língua celta ainda é falada hoje por cerca de meio milhão de pessoas e é a menos ameaçada, segundo a UNESCO?', op: ['O córnico', 'O manx', 'O galês', 'O gaulês'], certa: 2, exp: 'O galês, falado no País de Gales, é a língua celta com mais vitalidade.' },
  { p: 'Quem usou pela primeira vez a palavra «celta» para a família linguística das Ilhas Britânicas e da Bretanha, em 1707?', op: ['Júlio César', 'Edward Lhuyd', 'James Macpherson', 'Francisco Martins Sarmento'], certa: 1, exp: 'O galês Edward Lhuyd, no *Archaeologia Britannica* (1707), mostrou que o irlandês, o galês, o bretão e o córnico eram da família do gaulês.' }
];

export default {
  id: 'celtas',
  cor: '#3a7a5a',
  emblema: '../assets/img/celtas.png',
  nome:    { pt: 'Os Celtas', en: 'The Celts' },
  periodo: { pt: 'c. 800 a.C. – séc. V d.C. (com sobrevivência insular)', en: 'c. 800 BC – 5th century AD (with insular survival)' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
