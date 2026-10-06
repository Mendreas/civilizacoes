// KUSH E NÚBIA — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas aproximadas; para o Egito usa-se a «cronologia média». a.C. = antes de Cristo. Muitas datas núbias (sobretudo as de reis meroíticos) são debatidas e estão assinaladas como tal.
// Imagens: cada {img:'id'} procura o ficheiro  kush/img/id.jpg  (ver IMAGENS_KUSH.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    '**Kush** foi o nome dado pelos egípcios ao grande reino africano que se desenvolveu ao longo do Nilo, entre a primeira e a sexta cataratas, no que é hoje o sul do Egito e o norte do **Sudão**. A região mais ampla, a **Núbia**, viu nascer algumas das mais antigas sociedades complexas de África. Foi vizinha, parceira comercial, alvo de conquista e, por fim, conquistadora do Egito.',
    'A história de Kush tem quatro grandes momentos: o poderoso **reino de Kerma** (c. 2500 – 1500 a.C.), que rivalizou com os faraós; a **ocupação egípcia** do Império Novo (c. 1500 – 1070 a.C.); o **reino de Napata**, cujos reis, entre eles **Piye**, **Shabaka** e **Taharqa**, governaram o Egito como a 25.ª dinastia (os chamados «faraós negros»); e o **reino de Meroé** (c. 270 a.C. – c. 350 d.C.), famoso pelo ferro, pelas pirâmides, pela escrita própria e pelas rainhas guerreiras, as **candaces**.'
  ] },
  { img: 'kus-mapa-nubia', leg: 'Mapa da Núbia e do vale do Nilo com cataratas e sítios' },
  { h: 'Onde ficava' },
  'O Nilo atravessa a Núbia numa série de **seis cataratas**, troços de rápidos e rochas que dificultam a navegação. A **Baixa Núbia** fica entre a primeira catarata (Assuão) e a segunda, hoje em grande parte coberta pelo lago Nasser; a **Alta Núbia** estende-se da segunda catarata para sul, e Kush, no seu sentido mais amplo, chegou até à zona da confluência do Nilo Azul e do Nilo Branco (Cartum) e à «Ilha de Meroé», a terra entre o Nilo e o Atbara. É uma região de deserto, com uma faixa estreita de terra fértil junto ao rio e, mais a sul, savana com chuvas de verão, o que explica a importância do gado e, mais tarde, da agricultura de sequeiro e dos reservatórios de água.',
  'O nome **Kush** (egípcio *Ksh*, hebraico *Kush*) aparece em textos egípcios do Império Médio. Os gregos chamaram à terra **Etiópia** («rosto queimado», um nome que nada tem que ver com a Etiópia de hoje). O nome **Núbia** é mais tardio e a sua origem é debatida: pode vir da palavra egípcia *nub*, «ouro» (a região era riquíssima em ouro), ou do povo **Noba**, que os autores clássicos mencionam. Os egípcios chamavam também à Baixa Núbia **Wawat**, e ao conjunto «Terra do Arco» (*Ta-Seti*), por causa dos seus arqueiros.',
  { img: 'kus-nilo-cataratas', leg: 'O Nilo numa catarata, rochedos de granito, região de Assuão' },
  { h: 'Quando existiu' },
  'As datas abaixo são aproximadas e a cronologia de algumas fases é debatida.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Pré-história e Grupo A', 'c. 8000 – 3000 a.C.', 'Pastores, cerâmica muito antiga, primeiras chefias na Baixa Núbia (Grupo A), em contacto com o Alto Egito'],
    ['Grupo C e início de Kerma', 'c. 2500 – 1750 a.C.', 'Pastores da Baixa Núbia (Grupo C) e primeiro reino em Kerma; expedições comerciais egípcias'],
    ['Reino de Kerma (clássico)', 'c. 1750 – 1500 a.C.', 'Reino forte, com cidade, deffufa e túmulos reais; rival do Egito e aliado dos hicsos'],
    ['Domínio egípcio', 'c. 1500 – 1070 a.C.', 'Os faraós do Império Novo conquistam a Núbia até Napata; templos, vice-reis e ouro'],
    ['Período obscuro', 'c. 1070 – 850 a.C.', 'O Egito perde a Núbia; as fontes são escassas; formam-se chefias locais'],
    ['Napata e 25.ª dinastia', 'c. 850 – 593 a.C.', 'Reino de Kush com capital em Napata; reis kushitas governam o Egito (c. 744 – 656 a.C.)'],
    ['Napata tardia → Meroé', 'c. 593 – 270 a.C.', 'Os reis ainda são sepultados em Nuri; a corte desloca-se aos poucos para Meroé'],
    ['Reino de Meroé', 'c. 270 a.C. – c. 350 d.C.', 'Capital em Meroé; ferro, pirâmides, escrita meroítica, candaces; conflito com Roma em 25 – 22 a.C.'],
    ['Pós-meroítico e cristianização', 'c. 350 – 650 d.C. e depois', 'Queda de Meroé; reinos de Nobátia, Makuria e Alódia, cristianizados no século VI']
  ] } },
  { h: 'Quem eram os kushitas?' },
  'Os kushitas eram povos africanos do vale do Nilo, com língua, religião e costumes próprios, que ao longo dos séculos absorveram muito da cultura egípcia sem deixarem de ser distintos. Falavam línguas que nos chegam mal documentadas: a língua de Meroé, o **meroítico**, ainda não se compreende bem e a sua família linguística é debatida (uma hipótese liga-a às línguas nilo-saarianas orientais, como as línguas núbias de hoje, mas isso não está provado). Durante muito tempo os arqueólogos europeus trataram Kush como uma simples «colónia egípcia» ou um reflexo do Egito; hoje reconhece-se que foi uma civilização com história própria.',
  { h: 'Porque importam' },
  { lista: [
    '**Os faraós africanos:** durante cerca de um século os reis de Kush governaram o Egito, restauraram templos e a tradição das pirâmides, e enfrentaram os assírios.',
    '**Mais pirâmides do que o Egito:** as cerca de 250 pirâmides do Sudão, mais pequenas e inclinadas, ultrapassam em número as do Egito (as contagens variam).',
    '**Ferro e comércio:** Meroé foi um dos grandes centros metalúrgicos do mundo antigo e uma ponte comercial entre a África tropical, o Egito e o Mediterrâneo.',
    '**Rainhas poderosas:** as candaces, como **Amanirenas** e **Amanishakheto**, são raras na Antiguidade, e uma delas travou guerra com Augusto.',
    '**Escrita própria:** o meroítico é um dos poucos sistemas de escrita autóctones da África subsariana antiga; lê-se (os sons são conhecidos), mas muito pouco se entende.',
    '**Uma história por recuperar:** muito do que sabemos é recente, e a arqueologia sudanesa está ainda a rever tudo.'
  ] },
  { caixa: 'Kush hoje', texto: 'Os sítios kushitas estão no **Sudão**, no Alto Egito e na Núbia egípcia. São Património Mundial da UNESCO as **Pirâmides de Meroé** (Ilha de Meroé, 2011), **Gebel Barkal e os sítios da região de Napata** (2003) e os **Monumentos da Núbia, de Abu Simbel a Filas** (1979). Desde abril de 2023 a guerra no Sudão põe em risco museus e sítios; a situação muda depressa, por isso convém verificar as notícias antes de qualquer viagem.' },
  { img: 'kus-meroe-piramides', leg: 'Pirâmides do cemitério Norte de Meroé, Sudão' }
];

const linha = [
  'Esta linha do tempo segue os acontecimentos principais da história de Kush e da Núbia. As datas são aproximadas e as mais antigas, e as dos reis meroíticos, são debatidas.',
  { linha: [
    { d: 'c. 8000 a.C.', t: 'Cerâmica e pastores no Sudão', x: 'Nas margens do Nilo, na região de Cartum, surgem comunidades de caçadores, pescadores e recoletores que fazem cerâmica decorada, **entre as mais antigas de África**. Mais tarde, pastores de gado criam rituais complexos, como os círculos de pedra de **Nabta Playa**, no deserto a oeste de Abu Simbel (c. 5000 a.C.).' },
  ] },
  { img: 'kus-cena-pastores-gado', leg: 'Pastores da Baixa Núbia, c. 2000 a.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 3800 – 3100 a.C.', t: 'O Grupo A', x: 'Na Baixa Núbia, a «cultura do Grupo A» mostra chefias com ricos túmulos, cerâmica fina e comércio intenso com o Alto Egito. O célebre **queimador de incenso de Qustul** (Chicago) tem imagens que lembram a iconografia real egípcia: há quem veja nele a prova de uma realeza núbia antiga, mas a leitura é muito debatida.' },
    { d: 'c. 3100 – 3000 a.C.', t: 'O Egito unifica-se e o Grupo A desaparece', x: 'Com a formação do Estado faraónico, a Baixa Núbia perde população e o Grupo A desaparece dos registos arqueológicos. Um relevo em **Gebel Sheikh Suleiman** (perto da segunda catarata) mostra uma campanha egípcia, talvez do tempo da I dinastia; a interpretação é debatida.' },
    { d: 'c. 2500 a.C.', t: 'Nasce o reino de Kerma', x: 'Em **Kerma**, perto da terceira catarata, forma-se uma chefia que crescerá até ser um reino. O seu período inicial dura até c. 2050 a.C.; o clássico, de c. 1750 a 1500 a.C. É uma das primeiras cidades de grande dimensão da África subsariana.' },
    { d: 'c. 2400 – 2250 a.C.', t: 'Os mercadores do Reino Antigo', x: 'O egípcio **Harkhuf**, governador de Assuão no tempo de Pepi II, faz várias expedições a Yam (provavelmente na Alta Núbia), trazendo ébano, incenso, peles e animais exóticos. Entretanto, na Baixa Núbia, pastores do **Grupo C** ocupam o vale e comerciam com o Egito.' },
    { d: 'c. 1870 a.C.', t: 'As fortalezas de Sesóstris III', x: 'No Império Médio, o faraó **Sesóstris III** constrói uma cadeia de fortalezas até **Semna** (segunda catarata) e proíbe os núbios de passarem mais a norte sem autorização, numa estela fronteira. Os textos egípcios chamam a Kush o «miserável Kush» e veem-no como ameaça.' },
    { d: 'c. 1750 – 1550 a.C.', t: 'O auge de Kerma', x: 'Kerma, com a sua grande **deffufa** (edifício de tijolo de adobe), zona de templos e túmulos reais com indícios de sacrifícios humanos, controla a Núbia até perto da primeira catarata. Quando o Egito se fragmenta, os reis de Kerma estão em contacto com os **hicsos**, e uma estela do faraó **Kamose** (c. 1550 a.C.) diz que interceptou uma mensagem do rei hicso ao «chefe de Kush».' },
  ] },
  { img: 'kus-cena-funeral-kerma', leg: 'Funeral real em Kerma, c. 1650 a.C.; interpretação conjetural. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 1500 a.C.', t: 'Os faraós destroem Kerma', x: 'Os faraós da XVIII dinastia, **Ahmés**, **Amenhotep I** e sobretudo **Tutmés I** (c. 1500 a.C.), conquistam a Núbia até à quarta catarata. Kerma é saqueada, perde o estatuto de capital e a região passa a ser administrada por um **«Filho do Rei de Kush»** (vice-rei) com sede em Aniba.' },
    { d: 'c. 1450 – 1260 a.C.', t: 'Templos e ouro no Império Novo', x: 'O Egito explora o ouro do deserto oriental e cobre a Núbia de templos: **Soleb** (Amenhotep III), **Jebel Barkal** (onde Tutmés III marca a fronteira sul do império em Napata) e, no tempo de **Ramessés II** (c. 1264 – 1244 a.C.), **Abu Simbel**. Muitos núbios adotam costumes, nomes e deuses egípcios.' },
    { d: 'c. 1070 a.C.', t: 'O Egito perde a Núbia', x: 'No fim do Império Novo o Egito desagrega-se e deixa de controlar Kush. Os 200 anos seguintes são mal documentados: o que se sabe é que, no século IX a.C., uma elite local se estabelece em **El-Kurru**, perto de Napata, e começa a enterrar-se em tumulus que vão evoluir para pirâmides.' },
    { d: 'c. 760 a.C.', t: 'Kashta chega a Tebas', x: 'O rei **Kashta** estende o poder de Kush ao Alto Egito. A sua filha **Amenirdis I** é adotada como «Divina Adoradora de Amon» em Tebas, um cargo de grande poder político e religioso.' },
    { d: 'c. 728 – 725 a.C.', t: 'A campanha de Piye', x: 'O rei **Piye** marcha para norte contra uma coligação de príncipes do Delta liderada por **Tefnakht** de Sais. Toma Hermópolis e Mênfis, é recebido em Heliópolis e os príncipes submetem-se. A campanha ficou registada na **Grande Estela da Vitória**, encontrada em Jebel Barkal. É o início da 25.ª dinastia (as datas exatas são debatidas).' },
  ] },
  { img: 'kus-piye-estela', leg: 'Estela da Vitória de Piye, reprodução publicada por Auguste Mariette em 1872; original no Museu Egípcio do Cairo, JE 48862.' },
  { img: 'kus-cena-piye-menfis', leg: 'Piye e o exército kushita diante de Mênfis, c. 728 a.C.; retrato imaginado e reconstituição conjetural. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 721 – 707 a.C.', t: 'Shabaka unifica o Egito', x: '**Shabaka** instala-se em Mênfis, governa o Egito inteiro e restaura monumentos. Mandou copiar um antigo texto religioso numa pedra, a **Pedra de Shabaka**, hoje no Museu Britânico.' },
    { d: '701 a.C. (debatido)', t: 'Os kushitas e a Assíria', x: 'O rei assírio **Senaqueribe** cerca Jerusalém, e a Bíblia (2 Reis 19) menciona um exército de «Tirhaka, rei de Kush» que vem em auxílio. A cronologia é discutida: Taharqa seria então jovem e só reinaria alguns anos mais tarde.' },
    { d: '690 – 664 a.C.', t: 'Taharqa', x: '**Taharqa** reina em Mênfis, constrói e restaura em Karnak, Kawa e Jebel Barkal e traz prosperidade (Nilo generoso). A Assíria, porém, não desiste do Egito.' },
  ] },
  { img: 'kus-taharqa-esfinge', leg: 'Esfinge de Taharqa, de Kawa, Museu Britânico' },
  { linha: [
    { d: '671 – 663 a.C.', t: 'Os assírios invadem o Egito', x: '**Esar-Hadon** toma Mênfis em 671 a.C.; em 664/663 a.C., **Assurbanípal** expulsa **Tantamani** e saqueia Tebas. Os kushitas retiram-se, e em 656 a.C. **Psamético I** reunifica o Egito, com um poder de Saís que acaba por ser autónomo.' },
    { d: 'c. 593 a.C.', t: 'A expedição de Psamético II', x: '**Psamético II** invade a Núbia com tropas egípcias e mercenários gregos, caários e fenícios. Os mercenários gravaram o seu nome nos colossos de **Abu Simbel**. A expedição terá chegado até Napata, e o rei **Aspelta** fixa-se mais a sul, talvez em Meroé (a mudança foi gradual, e as razões são debatidas).' },
    { d: 'c. 270 a.C.', t: 'Os reis passam a ser sepultados em Meroé', x: 'Com **Arkamani** (grego *Ergamenes*), os enterros reais passam de Nuri para Meroé. Uma história de Diodoro Sículo diz que ele massacrou os sacerdotes de Napata que mandavam em reis; não se sabe se é facto ou lenda.' },
    { d: 'séc. II a.C. – I d.C. (debatido)', t: 'As primeiras rainhas governantes', x: 'Tradicionalmente apontava-se **Shanakdakhete** (c. 170 a.C.) como a primeira mulher a governar Meroé por direito próprio, mas a sua datação foi revista para o início do século I d.C. e alguns autores atribuem hoje essa primazia a **Nahirqo**; a questão está em aberto.' },
    { d: '25 – 22 a.C.', t: 'A guerra contra Roma', x: 'A candace **Amanirenas** ataca o sul do Egito romano, toma Siena, Elefantina e Filas e leva uma cabeça de bronze de Augusto. O prefeito **Petrónio** responde, saqueia Pselquis e Napata. A paz é negociada em Samos, em 21/20 a.C., com condições boas para Kush.' },
  ] },
  { img: 'kus-augusto-cabeca', leg: 'Cabeça de bronze de Augusto encontrada em Meroé, Museu Britânico' },
  { linha: [
    { d: 'c. 1 – 50 d.C.', t: 'Natakamani e Amanitore', x: 'Os reis **Natakamani** e **Amanitore** reinam numa época de grande construção: o Templo do Leão de Naga, templos em Meroé e Jebel Barkal. Seria o auge de Meroé (as datas são debatidas).' },
    { d: 'século III d.C.', t: 'A crise de Meroé', x: 'O reino enfraquece: as rotas comerciais mudam, os povos do deserto (**blémios**) e do oeste (**noba**) ganham força e as inscrições escasseiam. O último rei conhecido pelo nome reinou no século III d.C. (debatido).' },
    { d: 'c. 350 d.C.', t: 'Axum e o fim de Meroé', x: 'O rei **Ezana** de **Axum** (Etiópia) faz uma campanha no vale do Nilo e regista nos seus textos vitórias sobre os **noba** e os **kasu** (Kush). O papel exato de Axum na queda de Meroé é debatido: o reino já estava em declínio, e a cidade foi abandonada aos poucos.' },
  ] },
  { img: 'kus-axum-estelas', leg: 'Estelas de Axum, Etiópia' },
  { linha: [
    { d: 'c. 350 – 550 d.C.', t: 'Os túmulos de Ballana e Qustul', x: 'Na Baixa Núbia, chefes poderosos são sepultados em grandes tumulus com ricos objetos importados, a chamada cultura «pós-meroítica» ou do «Grupo X».' },
    { d: 'c. 540 – 580 d.C.', t: 'A cristianização', x: 'Missionários enviados de Bizâncio (a imperatriz **Teodora** apoiou a missão de Julião, c. 543) convertem os reinos da **Nobátia** (capital Faras), **Makuria** (capital Dongola Velha) e **Alódia** (capital Soba). A Makuria resistirá aos exércitos árabes e, em 651/652, assina com o Egito o tratado do **Baqt**.' }
  ] }
];

const mapa = [
  'Kush não foi uma cidade, mas um território com várias capitais ao longo dos séculos, sempre junto ao Nilo: **Kerma**, depois **Napata** e, por fim, **Meroé**. Fora destas, houve cidades egípcias na Núbia e capitais cristãs mais tardias.',
  { tabela: { cab: ['Sítio', 'Local hoje', 'Época', 'Para que ficou conhecido'], linhas: [
    ['Kerma e Doukki Gel', 'Sudão, terceira catarata', 'c. 2500 – 1500 a.C.', 'Capital do primeiro reino; deffufa; túmulos reais; cerâmica «casca de ovo»'],
    ['Buhen e Semna', 'Baixa Núbia (lago Nasser)', 'Império Médio e Novo', 'Fortalezas egípcias à segunda catarata; hoje debaixo de água ou deslocadas'],
    ['Soleb', 'Sudão, terceira catarata', 'c. 1390 a.C.', 'Templo de Amenhotep III'],
    ['Napata e Jebel Barkal', 'Sudão, perto de Karima', 'séc. XV a.C. – IV d.C.', 'Montanha sagrada de Amon; capital religiosa de Kush; templos'],
    ['El-Kurru', 'Sudão, perto de Napata', 'séc. IX – VII a.C.', 'Cemitério dos primeiros reis kushitas, de Kashta a Shabaka'],
    ['Nuri', 'Sudão, perto de Napata', 'c. 664 – 310 a.C.', 'Pirâmides de Taharqa e de cerca de vinte reis; a maior pirâmide de Kush'],
    ['Kawa', 'Sudão, Dongola', 'séc. XIV a.C. – IV d.C.', 'Templos de Amon, entre eles o de Taharqa'],
    ['Meroé', 'Sudão, perto de Shendi', 'c. 800 a.C. – 350 d.C.', 'Capital do reino; cidade real, ferro, pirâmides'],
    ['Naga', 'Sudão, Butana', 'séc. III a.C. – IV d.C.', 'Templo do Leão e Quiosque de Hathor; Natakamani e Amanitore'],
    ['Musawwarat es-Sufra', 'Sudão, Butana', 'séc. III a.C. – IV d.C.', 'O «Grande Recinto»; templo de Apedemak'],
    ['Abu Simbel', 'Egito, lago Nasser', 'c. 1264 a.C.', 'Templos de Ramessés II, deslocados em 1964–68'],
    ['Faras (Pachoras)', 'Baixa Núbia', 'séc. VI – XII d.C.', 'Catedral cristã com as pinturas murais hoje em Varsóvia e Cartum'],
    ['Dongola Velha', 'Sudão, Nilo médio', 'séc. VI – XIV d.C.', 'Capital da Makuria cristã'],
    ['Soba', 'Sudão, perto de Cartum', 'séc. VI – XVI d.C.', 'Capital do reino cristão de Alódia']
  ] } },
  { h: 'Kerma' },
  'Kerma ergue-se numa planície fértil, a sul da terceira catarata. A cidade tinha uma **deffufa** ocidental, enorme bloco de tijolo com uma capela no topo e que ainda tem cerca de 18 m de altura, uma grande muralha com torres, casas e oficinas. A leste ficava o cemitério com **dezenas de milhares de sepulturas**, entre elas os túmulos reais, cobertos por montes de terra de até cerca de 90 m de diâmetro e onde o rei era sepultado sobre uma cama, rodeado por muitas pessoas, possivelmente sacrificadas, e por gado. Em **Doukki Gel**, a poucos quilómetros, os arqueólogos suíços encontraram um depósito de estátuas monumentais de reis kushitas do século VII a.C.',
  { img: 'kus-deffufa-kerma', leg: 'A Deffufa Ocidental de Kerma, Sudão' },
  { img: 'kus-cena-kerma-cidade', leg: 'Reconstituição conjetural da cidade de Kerma, c. 1650 a.C. Ilustração gerada por IA.' },
  { img: 'kus-ceramica-kerma', leg: 'Taça de Kerma Clássico, boca preta, Metropolitan Museum of Art.' },
  { img: 'kus-doukki-gel-estatuas', leg: 'Estátuas de reis kushitas de Doukki Gel, Museu de Kerma' },
  { h: 'Napata e Jebel Barkal' },
  'A **Jebel Barkal** é uma montanha de arenito de cerca de 100 m, com um pináculo de rocha que os egípcios viam como a forma de uma **cobra** (uraeus) e identificavam com o lugar de nascimento de **Amon**. Já no tempo de Tutmés III era um local sagrado; a seus pés cresceu **Napata**, com templos de Amon, de Mut e de Hathor reconstruídos pelos reis kushitas. Mesmo depois de a capital se mudar para sul, os reis de Meroé continuaram a ser coroados e a consultar o oráculo de Napata.',
  { img: 'kus-jebel-barkal', leg: 'A montanha de Jebel Barkal com o pináculo, perto de Karima' },
  { img: 'kus-cena-napata-templos', leg: 'Napata e os templos de Jebel Barkal, c. 650 a.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: 'El-Kurru e Nuri' },
  'Os primeiros reis kushitas foram sepultados em **El-Kurru**, em tumulus de pedra que passaram a pirâmides e com uma câmara subterrânea; **Piye** terá sido o primeiro com pirâmide. Depois de Taharqa, o cemitério real passou para **Nuri**, onde se encontra a sua pirâmide, a maior de Kush (c. 50 m de lado na base). As pirâmides kushitas diferem das egípcias: são **muito mais inclinadas e menores**, com a câmara funerária escavada no chão por baixo, e têm uma pequena capela de oferendas junto à face leste.',
  { img: 'kus-el-kurru', leg: 'Cemitério real de El-Kurru, tumulus e pirâmides em ruína' },
  { img: 'kus-nuri-piramides', leg: 'Pirâmides de Nuri, junto ao Nilo' },
  { h: 'Meroé' },
  'A cidade de **Meroé** ficava na margem leste do Nilo, entre o rio e o Atbara, numa região com chuvas de verão. A **cidade real** tinha o palácio, o templo de Amon, os bairros de oficinas e o chamado **Banho Real** (de função debatida) com influências helenísticas. A cidade estava rodeada de enormes montes de escória de ferro. A poucos quilómetros, ficam os três grandes cemitérios com cerca de duzentas pirâmides.',
  { img: 'kus-meroe-banhos-reais', leg: 'Os chamados Banhos Reais de Meroé' },
  { img: 'kus-cena-meroe-cidade', leg: 'Reconstituição conjetural da cidade real de Meroé, século I a.C. Ilustração gerada por IA.' },
  { h: 'Naga e Musawwarat es-Sufra' },
  'Mais a leste, na região da **Butana**, ficam dois complexos de templos. **Naga** tem o **Templo do Leão** de **Apedemak**, com relevos de Natakamani e Amanitore, e o **Quiosque de Hathor**, de estilo misto egípcio, grego e romano. **Musawwarat es-Sufra** tem o **Grande Recinto**, um conjunto de rampas, pátios e corredores com relevos de elefantes, cuja função continua a ser debatida (templo, local de peregrinação, escola?). Ambos são sinais de uma religião muito própria, em que o deus-leão guerreiro tem papel central.',
  { img: 'kus-naga-leao', leg: 'Templo do Leão de Apedemak, à esquerda, e quiosque de Naga, Sudão.' },
  { img: 'kus-musawwarat', leg: 'O Grande Recinto de Musawwarat es-Sufra' },
  { img: 'kus-soleb-templo', leg: 'Colunas do templo de Amenhotep III em Soleb' },
  { h: 'As rotas' },
  'O **Nilo** era a grande via, mas as cataratas obrigavam a transportar mercadorias por terra. As caravanas atravessavam o **deserto oriental** até ao mar Vermelho e o **deserto núbio** (rota Korosko–Abu Hamed) para cortar a grande curva do rio. Por estes caminhos chegavam a Kush e saíam dela ouro, marfim, ébano, incenso, peles, penas de avestruz, gado e escravos, além de vinho, vidro e bronze importados. Para sul e sudoeste, as ligações ao Sahel e à África central continuam mal conhecidas.'
];

const sociedade = [
  { h: '1. Organização política' },
  'Em **Kerma**, um rei poderoso governava com uma elite de guerreiros e sacerdotes. No **reino de Napata**, o rei era visto como filho de **Amon** e escolhido pelo deus, através de um oráculo, dentro da família real: a «Estela da Eleição de Aspelta» descreve esta cerimónia (c. 600 – 580 a.C.). A sucessão parece ter passado muitas vezes de irmão para irmão ou para um sobrinho, embora os historiadores debatam as regras. As **mulheres da família real** tinham grande peso. Em Meroé, a **candace** podia ser rainha reinante, mãe do rei ou corregente, e o título é conhecido em fontes gregas e romanas e em textos meroíticos (*kdke*).',
  { h: '2. Classes sociais' },
  'As fontes escritas são escassas e a imagem é incompleta. Podemos supor uma elite real e sacerdotal, funcionários, guerreiros e artesãos (ferreiros, oleiros, ourives), camponeses e pastores, e pessoas em servidão ou escravatura, muitas capturadas em guerra. Os túmulos de Meroé, com diferentes tamanhos e riqueza, indicam uma hierarquia nítida; havia também uma elite provincial na Baixa Núbia, cujo governador (*pesto*, termo meroítico) respondia ao rei.',
  { h: '3. Religião' },
  'A religião kushita foi uma mistura de crenças egípcias, adotadas durante e depois da ocupação, e deuses locais. **Amon** era o grande deus do Estado, com um culto oracular em Napata e em Meroé. No tempo de Meroé, ganharam espaço divindades próprias, sobretudo **Apedemak**, o deus-leão guerreiro. Era uma religião de templos e de oferendas, com festas, procissões e oráculos.',
  { tabela: { cab: ['Deus', 'Domínio', 'Onde se destacava'], linhas: [
    ['Amon (de Napata)', 'Deus supremo, protetor do rei; carneiro; dava o poder por oráculo', 'Napata, Meroé, Kawa'],
    ['Apedemak', 'Deus-leão, guerreiro, protetor do reino (deus de Meroé)', 'Naga, Musawwarat, Meroé'],
    ['Sebiumeker', 'Deus criador e protetor, ligado a Apedemak', 'Naga, Musawwarat'],
    ['Arensnuphis', 'Deus guerreiro e protetor, de origem núbia', 'Filas, Musawwarat'],
    ['Mandulis', 'Deus solar da Baixa Núbia, de origem local', 'Kalabsha'],
    ['Ísis e Osíris', 'Deuses egípcios de grande culto em toda a Núbia; Ísis tinha seguidores em Meroé', 'Filas, Meroé'],
    ['Hathor', 'Deusa do amor, da música e da maternidade', 'Naga, Napata']
  ] } },
  { img: 'kus-esquema-piramide', leg: 'Esquema simplificado de uma pirâmide meroítica com capela e sepultura subterrânea; não reproduz um monumento específico. Esquema desenhado.' },
  { h: 'Morte e pirâmides' },
  'Os reis e as rainhas de Napata e Meroé eram sepultados em **pirâmides** que imitavam as egípcias e, em vez de câmaras dentro do edifício, a câmara ficava **debaixo da terra**, com acesso por uma escada. O defunto era deitado numa cama de madeira, com jóias e ouro, cerâmica, e por vezes vinha com os objetos mais caros do Mediterrâneo. Em **Kerma**, terá havido sacrifícios humanos para acompanhar o rei (a interpretação é debatida); no período meroítico há indícios de que a prática foi abandonada, o que também é debatido.',
  { h: '4. Economia e comércio' },
  'A riqueza de Kush assentou no **ouro** (das minas do deserto oriental, sobretudo de Wadi Allaqi), no **gado**, nos produtos tropicais (marfim, ébano, incenso, peles, penas) e na posição de intermediário entre a África tropical e o Mediterrâneo. Em Meroé juntou-se o **ferro**, com a abundante madeira da região, e o algodão (há restos antigos em Qasr Ibrim, no período meroítico). Não conhecemos moeda própria em circulação: o comércio fazia-se por troca, com pesos, e com moeda estrangeira quando chegava.',
  { h: '5. Ferro e metalurgia' },
  'Já houve quem chamasse a Meroé a «Birmingham da África antiga», uma frase do arqueólogo A. H. Sayce, por volta de 1910, que hoje se vê como exagerada. Os enormes **montes de escória** junto à cidade mostram que o ferro era trabalhado em escala, mas os estudos recentes debatem se foi um grande centro de exportação ou sobretudo para uso local, e quando o ferro começou (talvez já no século VI a.C., com influência da Ásia ou do Egito; a origem é debatida). Também se trabalharam o **ouro**, o **bronze**, o cobre e o vidro. A **cerâmica** meroítica, pintada e de grande qualidade, é um dos objetos mais bonitos que a região deixou.',
  { img: 'kus-ferro-escorias', leg: 'Mapa de Meroé e Hamadab com a localização dos montes de escória estudados, Humphris e Scheibner, 2017, figura 1. Substituição documental: não é uma fotografia dos montes.' },
  { img: 'kus-cena-forja-ferro', leg: 'Redução e trabalho do ferro em Meroé, século I a.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { img: 'kus-ceramica-meroitica', leg: 'Vaso meroítico pintado com rã de cabeça humana, Ballana, 50 a.C.–200 d.C., Institute for the Study of Ancient Cultures, Chicago.' },
  { h: '6. Escrita' },
  'Durante a ocupação egípcia e em Napata escrevia-se em **egípcio** (hieróglifos). A partir do século III a.C., em Meroé, surgiu o **meroítico**, com duas formas: a **cursiva** (do quotidiano) e, um pouco mais tarde, a **hieroglífica** (monumental). É um sistema de **23 sinais** que funciona como alfabeto de sílabas, com um separador de palavras (:). O inglês **Francis Griffith** decifrou os valores sonoros em 1909–1911, por isso podemos **ler** os textos em voz alta, mas como a língua é pouco compreendida só entendemos nomes, títulos e algumas fórmulas, e não os textos longos.',
  { img: 'kus-escrita-meroitica', leg: 'Inscrição em escrita meroítica hieroglífica' },
  { h: '7. Agricultura e água' },
  'Junto ao Nilo cultivavam-se cevada, trigo, sorgo, milho-miúdo, leguminosas, tamareiras e algodão, com o rio a assegurar a cheia anual. No interior da **Butana**, onde chove no verão, os kushitas construíram **hafirs**, grandes reservatórios de água da chuva, e mais tarde adotaram a **sakia** (roda de água movida por bois), o que permitiu aumentar a produção. A pecuária de **gado** foi sempre central, mais ainda que no Egito.',
  { img: 'kus-cena-sakia-rega', leg: 'Rega com saqiya na época meroítica; mecanismo e cena conjeturais. Ilustração gerada por IA.' },
  { h: '8. Casa e família' },
  'As casas comuns eram feitas de **tijolo de adobe**, com pátio e telhado plano, e junto ao deserto também com pedra. Em Kerma havia casas redondas, que lembram as cabanas dos pastores. As famílias reais e as elites tinham palácios com salas largas, banhos e jardins. As mulheres tinham estatuto social e jurídico elevado em comparação com o de muitas outras sociedades da Antiguidade, e há notícia de heranças e títulos que passavam por via feminina; o alcance exato é debatido.',
  { img: 'kus-cena-casa-nubia', leg: 'Casa de uma família núbia, século I d.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '9. Alimentação' },
  'Comia-se **pão e papas de cereais** (sorgo, cevada, milho-miúdo), carne de vaca, de cabra e de carneiro, peixe do Nilo, leguminosas, tâmaras e frutos do deserto. A cerveja, feita de cereais, foi bebida quotidiana. O leite era importante, sobretudo para os pastores. Nos túmulos há oferendas de pão, carne e vinho.',
  { h: '10. Vestuário e adorno' },
  'As pessoas vestiam saiotes ou túnicas de **linho** ou **algodão**, e peles e couros. Os reis kushitas da 25.ª dinastia usavam uma **touca justa com duas serpentes** (uraei) na testa, que é um traço distintivo, em vez de uma só. Os kushitas eram famosos pelos **adornos**: braceletes, anéis de arqueiro, colares de contas e pingentes em ouro e esmalte, como mostram os tesouros de Meroé.',
  { h: '11. Música, jogos e festas' },
  'Pelas imagens sabe-se do uso de tambores, harpas e liras, e de danças em festivais. Têm-se encontrado **tabuleiros de jogo** de tipo egípcio em sítios núbios, mas as regras reais são desconhecidas. As grandes festas religiosas, com oferendas e procissões, marcavam o calendário.',
  { h: '12. Guerra' },
  'Os núbios eram famosos como **arqueiros**: os egípcios chamavam-lhes «Terra do Arco», e as tropas núbias serviram no exército egípcio (os **medjay** foram primeiro soldados e mais tarde polícia). Os kushitas também apreciavam os **cavalos**, e a estela de Piye fala deles com carinho. No período meroítico representam-se **elefantes** e leões em contextos guerreiros, embora o uso de elefantes em batalha seja debatido. Os guerreiros usavam arcos, lanças, espadas e escudos; a arqueira é um símbolo de poder, e as candaces aparecem com arco.',
  { img: 'kus-arqueiros-nubios', leg: 'Detalhe do modelo de arqueiros núbios de Mesehti, Assiut, Museu Egípcio do Cairo; fotografia histórica publicada por Borchardt.' },
  { h: '13. Arquitetura e tecnologia' },
  'Os edifícios kushitas combinam o **estilo egípcio** (pilones, colunas, relevos) com elementos próprios: pirâmides pequenas, templos com leões, e a influência helenística e romana nos banhos e quiosques. Usavam **tijolo de adobe** e **arenito**. Em Musawwarat e Naga há relevos de grande qualidade. Havia técnicas avançadas de **irrigação** e de **fundição**.',
  { img: 'kus-natakamani-amanitore', leg: 'Natakamani e Amanitore no pilone do Templo do Leão, Naga; reprodução histórica de Lepsius.' },
  { img: 'kus-cena-mercado-caravana', leg: 'Caravana mercantil a chegar a Meroé; reconstituição conjetural. Ilustração gerada por IA.' }
];

const personalidades = [
  'Dos reis de Kush, alguns são conhecidos por inscrições (Piye, Taharqa, Aspelta), outros apenas por tumulus ou por menções gregas e romanas. As figuras a seguir são reais; quando há dúvidas sobre datas ou factos, dizemo-lo.',
  { h: 'Harkhuf, governador de Assuão (c. 2250 a.C.)' },
  'Funcionário egípcio do Reino Antigo e explorador, deixou em Assuão uma biografia gravada no seu túmulo. Fez expedições à terra de **Yam**, a sul, e trouxe ébano, incenso, peles e animais. A carta que o jovem Pepi II lhe escreveu, entusiasmado com a promessa de um «anão dançarino» trazido do sul, está na inscrição. É um dos primeiros testemunhos do comércio com a Núbia.',
  { h: 'Huy, vice-rei de Kush (c. 1330 a.C.)' },
  'No tempo de **Tutankhamon**, Huy foi «Filho do Rei de Kush» e governou a Núbia. No seu túmulo, em Tebas, há pinturas famosas de núbios a trazer tributo (ouro, peles, gado, animais), que mostram a riqueza que o Egito retirava da região e a forma como imaginava os seus vizinhos do sul.',
  { h: 'Kashta e Amenirdis I (c. 760 a.C.)' },
  '**Kashta** é o primeiro rei kushita que conhecemos a ter autoridade no Alto Egito. A filha, **Amenirdis I**, foi adotada como Divina Adoradora de Amon em Tebas, o que dava à família real kushita um poder religioso e económico enorme sobre o sul do Egito. Esta estratégia matrimonial e religiosa abriu caminho à conquista seguinte.',
  { h: 'Piye (c. 744 – 714 a.C.)' },
  'O fundador da 25.ª dinastia. A sua **Grande Estela da Vitória** conta como marchou de Napata contra os príncipes do Delta, tomou cidades e aceitou a submissão de reis locais. Apresenta-se como defensor do culto egípcio e **severo com a impiedade**: o texto diz que se irritou mais com os cavalos de um rei vencido, morrendo de fome, do que com a rebelião (paráfrase). Voltou a Napata em vez de governar o Egito, e foi sepultado em El-Kurru.',
  { h: 'Shabaka (c. 721 – 707 a.C.)' },
  'Irmão de Piye, instala-se em Mênfis e controla todo o Egito. Restaura templos e mandou copiar na **Pedra de Shabaka** um antigo texto sobre o deus Ptah e a criação do mundo, que dizia estar em papiro comido por vermes. A pedra é um dos textos religiosos egípcios mais importantes e hoje está no Museu Britânico.',
  { img: 'kus-pedra-shabaka', leg: 'A Pedra de Shabaka, Museu Britânico (EA 498)' },
  { h: 'Taharqa (690 – 664 a.C.)' },
  'O mais célebre dos reis kushitas. Governou o Egito do seu palácio em Mênfis, construiu e restaurou em Karnak, Kawa e Jebel Barkal, e teve boas cheias do Nilo. Resistiu duas vezes aos assírios, repelindo a primeira invasão (674/673 a.C.) e perdendo Mênfis em 671 a.C. Está citado na Bíblia como «Tirhaka». Morreu em 664 a.C. e foi sepultado em Nuri, na maior pirâmide de Kush.',
  { h: 'Tantamani (c. 664 – 656 a.C.)' },
  'Sucessor de Taharqa, provavelmente seu sobrinho (filho de Shabaka). Tomou o Egito do sul e chegou a Mênfis, mas **Assurbanípal** respondeu e saqueou Tebas. Foi o último rei kushita do Egito; a seguir, os kushitas recuaram para a Núbia e mantiveram uma ligação ao Egito pela religião.',
  { h: 'Aspelta (c. 600 – 580 a.C., datas debatidas)' },
  'O rei a quem se atribui a **Estela da Eleição**, que descreve como o deus Amon o escolheu, entre os irmãos, perante o exército. Reinou na época da invasão de Psamético II (c. 593 a.C.) e é associado a uma deslocação do centro de poder para sul. O seu enorme sarcófago de granito está em Boston.',
  { h: 'Shanakdakhete (datas debatidas)' },
  'Rainha reinante de Meroé, conhecida pelas inscrições e relevos do Templo F de Naga. Foi tradicionalmente tida como a **primeira rainha reinante** (c. 170 a.C.), mas estudos recentes situam-na por volta do início do século I d.C., e há quem atribua a primazia a Nahirqo. A datação, o estatuto e a leitura do nome são debatidos. Faz parte de uma tradição de mulheres no poder em Meroé.',
  { h: 'Amanirenas (c. 40 – 10 a.C., datas debatidas)' },
  'A candace que enfrentou **Roma**. Segundo **Estrabão**, era «uma mulher viril e cega de um olho», e liderou o ataque contra o Egito romano em 25 a.C. Tomou Siena, Elefantina e Filas, e levou uma cabeça de bronze de Augusto, que enterrou sob a escadaria de um templo em Meroé (onde foi achada em 1910). Depois da resposta romana, negociou a paz em 21/20 a.C. e conseguiu que não fosse pago tributo. É uma das figuras mais citadas de Kush.',
  { img: 'kus-cena-amanirenas', leg: 'A kandake Amanirenas, c. 25 a.C.; retrato imaginado e cena simbólica, não um acontecimento documentado. Ilustração gerada por IA.' },
  { h: 'Amanishakheto (c. 10 a.C. – 1 d.C., datas debatidas)' },
  'Rainha reinante, sepultada numa pirâmide em Meroé. Em 1834, o caçador de tesouros italiano **Giuseppe Ferlini** destruiu a sua pirâmide e roubou um tesouro de joias de ouro e pedras, hoje em Berlim e Munique, que mostram a influência egípcia, grega e romana.',
  { img: 'kus-amanishakheto-joias', leg: 'Colar do tesouro de Amanishakheto, Museu Egípcio de Berlim, inv. 22877.' },
  { h: 'Natakamani e Amanitore (século I a.C./I d.C.)' },
  'Reis que reinaram em conjunto, no auge da construção meroítica: o Templo do Leão de Naga, o Templo de Amon em Meroé e restaurações em Jebel Barkal e Kawa. Aparecem lado a lado nos relevos de Naga, com o mesmo tamanho. O trabalho deles marca o ponto alto da arte meroítica.',
  { h: 'Ezana de Axum (c. 320 – 360 d.C.)' },
  'Rei de **Axum** (hoje Etiópia e Eritreia), convertido ao cristianismo. As suas inscrições contam uma campanha contra os **noba** e os **kasu** (Kush), em torno de 350 d.C., mas não é certo que tenha destruído Meroé: o reino já estava em declínio.',
  { h: 'Silko, rei da Nobátia (século V ou VI d.C., debatido)' },
  'Chefe da Nobátia que deixou uma inscrição grega no templo de Kalabsha, em que se diz «rei de todos os etíopes» e vencedor dos blémios. Representa a fase em que a Núbia, depois de Meroé, se reorganiza em novos reinos, e a data e o grau de cristianização são debatidos.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**A ideia de um Egito africano e de uma Núbia com história própria:** a arqueologia dos últimos 50 anos corrigiu a visão que via Kush como mera cópia do Egito.',
    '**Os faraós de Kush:** a 25.ª dinastia reavivou o culto, a arte e a tradição das pirâmides, e deixou obras em Karnak e Kawa.',
    '**Pirâmides núbias:** cerca de 250, que são um dos grandes marcos do Sudão.',
    '**Ferro e metalurgia, cerâmica e joias:** da melhor qualidade na África antiga.',
    '**Escrita meroítica:** um dos primeiros alfabetos africanos próprios.',
    '**Cristianismo núbio:** durante mais de oito séculos, reinos cristãos na Núbia, com uma arte própria e uma língua escrita (o núbio antigo).'
  ] },
  { h: 'Arte' },
  'A arte kushita tem um estilo próprio, mesmo quando adota formas egípcias: figuras de proporções mais cheias, rostos redondos, uso de leões e elefantes, relevos com cenas de vitória, e cerâmica pintada com motivos vegetais e animais. A joalharia meroítica funde influências egípcias, helenísticas e locais. Na época cristã, as **pinturas murais de Faras** estão entre as grandes obras da arte medieval africana.',
  { img: 'kus-faras-pintura', leg: 'Santa Ana, pintura mural da catedral de Faras, Museu Nacional de Varsóvia.' },
  { h: 'Arquitetura' },
  'Do tijolo da deffufa de Kerma aos templos de arenito de Naga e Musawwarat, a arquitetura kushita é uma mistura de modelos egípcios, locais, gregos e romanos. As pirâmides núbias, com as suas faces muito inclinadas e uma pequena capela, tornaram-se o símbolo mais reconhecido.',
  { h: 'A redescoberta de Kush' },
  'O primeiro europeu a descrever Meroé foi o escocês **James Bruce** (1772), e as pirâmides foram exploradas pelo francês **Frédéric Cailliaud** (1821) e pelo prussiano **Karl Lepsius** (1844). Em 1834, **Ferlini** destruiu dezenas de pirâmides à procura de ouro. O americano **George Reisner** (Harvard, a partir de c. 1913) escavou Kerma, El-Kurru, Nuri e outros sítios, e o inglês **John Garstang** escavou Meroé em 1909–1914. Reisner e muitos contemporâneos achavam que a civilização kushita era de origem estrangeira e inferior à egípcia, uma ideia hoje rejeitada. Desde a década de 1970, uma missão suíça dirigida por **Charles Bonnet** (e depois por Matthieu Honegger) tem escavado Kerma e Doukki Gel. A construção da **barragem de Assuão** levou a uma grande campanha internacional da UNESCO (1960 – 1980), que salvou Abu Simbel e muitos outros monumentos e descobriu centenas de sítios.',
  { img: 'kus-abu-simbel', leg: 'Fachada do Grande Templo de Abu Simbel' },
  { caixa: 'Para visitar', texto: 'No **Sudão**, o Museu Nacional de Cartum, o Museu de Kerma, Meroé, Jebel Barkal, Nuri, Naga e Musawwarat; **a situação de segurança é muito instável desde 2023 e o Museu Nacional foi saqueado, por isso convém verificar antes**. No **Egito**, Abu Simbel, Filas, Kalabsha e o Museu da Núbia em Assuão. Na Europa: o **Museu Britânico** (Pedra de Shabaka, Esfinge de Taharqa, cabeça de Augusto), o **Museu Egípcio de Berlim** (joias de Amanishakheto), o **Museum of Fine Arts de Boston** (achados de Reisner) e o **Museu Nacional de Varsóvia** (pinturas de Faras).' }
];

const quiz = [
  { p: 'Que nome davam os antigos egípcios ao reino africano a sul, no Nilo?', op: ['Punt', 'Kush', 'Axum', 'Libu'], certa: 1, exp: 'Kush é o nome egípcio da região da Alta Núbia; Punt era uma terra distante, no mar Vermelho.' },
  { p: 'Onde ficava a primeira grande capital do reino de Kush, famosa pela sua deffufa?', op: ['Meroé', 'Kerma', 'Napata', 'Axum'], certa: 1, exp: 'Kerma, junto à terceira catarata, foi capital de c. 2500 a 1500 a.C.' },
  { p: 'Que faraó destruiu Kerma e conquistou a Núbia, por volta de 1500 a.C.?', op: ['Ramessés II', 'Khufu', 'Tutmés I', 'Akhenaton'], certa: 2, exp: 'Tutmés I levou as fronteiras até à quarta catarata, e a Núbia ficou sob administração egípcia.' },
  { p: 'Que montanha sagrada de Napata era vista como a casa do deus Amon?', op: ['Jebel Barkal', 'Monte Sinai', 'Kilimanjaro', 'Jebel Musa'], certa: 0, exp: 'Jebel Barkal tem um pináculo que os egípcios viam como uma cobra.' },
  { p: 'Que rei kushita iniciou a conquista do Egito no século VIII a.C.?', op: ['Taharqa', 'Piye', 'Aspelta', 'Natakamani'], certa: 1, exp: 'A Estela da Vitória de Piye conta a campanha até Mênfis.' },
  { p: 'Que particularidade tinha a coroa dos reis kushitas da 25.ª dinastia?', op: ['Tinha uma só serpente', 'Tinha duas serpentes (uraei)', 'Era de ferro', 'Tinha uma cabeça de leão'], certa: 1, exp: 'Duas serpentes na testa são um sinal distintivo desses reis.' },
  { p: 'Como se chama o rei kushita que a Bíblia menciona como «Tirhaka»?', op: ['Piye', 'Tantamani', 'Shabaka', 'Taharqa'], certa: 3, exp: 'Taharqa aparece em 2 Reis 19 e Isaías 37 como rei de Kush.' },
  { p: 'Que império expulsou os kushitas do Egito, em meados do século VII a.C.?', op: ['Hititas', 'Assírios', 'Persas', 'Romanos'], certa: 1, exp: 'Esar-Hadon e Assurbanípal invadiram o Egito entre 671 e 663 a.C.' },
  { p: 'Para onde os reis kushitas deslocaram, com o tempo, o seu centro de poder?', op: ['Para Alexandria', 'Para Meroé', 'Para Axum', 'Para Cartago'], certa: 1, exp: 'A deslocação foi gradual, e a partir de c. 270 a.C. os reis passaram a ser sepultados em Meroé.' },
  { p: 'Como se chamava o título das rainhas poderosas de Meroé?', op: ['Faraó', 'Candace', 'Satrapa', 'Augusta'], certa: 1, exp: 'O título (kdke em meroítico) deu «candace» em grego e latim.' },
  { p: 'Que candace enfrentou os romanos em 25 – 22 a.C.?', op: ['Amanirenas', 'Hatshepsut', 'Cleópatra', 'Nefertiti'], certa: 0, exp: 'Amanirenas atacou o sul do Egito e conseguiu uma paz favorável em Samos.' },
  { p: 'Que objeto de Augusto foi encontrado enterrado em Meroé?', op: ['Uma espada', 'Uma cabeça de bronze', 'Uma moeda de ouro', 'Uma coroa'], certa: 1, exp: 'A cabeça de bronze, tomada em Filas ou Siena, foi enterrada sob a escada de um templo e está hoje no Museu Britânico.' },
  { p: 'Que particularidade têm as pirâmides de Kush em relação às do Egito?', op: ['São muito mais altas', 'São mais inclinadas e menores', 'São de pedra vulcânica', 'Não têm câmara funerária'], certa: 1, exp: 'Têm faces muito inclinadas, pequena capela de oferendas e câmara subterrânea.' },
  { p: 'Que tipo de escrita foi criada em Meroé?', op: ['Hieróglifos egípcios', 'Cuneiforme', 'Meroítica, com cerca de 23 sinais', 'Grego'], certa: 2, exp: 'O meroítico lê-se desde Griffith (1909–1911), mas a língua continua mal compreendida.' },
  { p: 'Que reino é citado como tendo derrotado os kasu e os noba, por volta de 350 d.C.?', op: ['Roma', 'Axum', 'Egito', 'Pérsia'], certa: 1, exp: 'Ezana de Axum deixou inscrições com essa campanha, embora o seu papel na queda de Meroé seja debatido.' }
];

export default {
  id: 'kush',
  cor: '#8a7a2f',
  emblema: '../assets/img/kush.png',
  nome:    { pt: 'Kush e Núbia', en: 'Kush and Nubia' },
  periodo: { pt: 'c. 3500 a.C. – 350 d.C.', en: 'c. 3500 BC – AD 350' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
