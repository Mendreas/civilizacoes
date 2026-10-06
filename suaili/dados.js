// CIDADES-ESTADO SUAÍLIS — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas aproximadas (d.C.). O período tratado é c. 800–1500; a chegada dos portugueses (1498–1509) é tratada apenas num epílogo curto.
// Imagens: cada {img:'id'} procura o ficheiro  suaili/img/id.jpg  (ver IMAGENS_SUAILI.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'As **cidades-estado suaílis** foram uma série de cidades comerciais independentes que, a partir do século VIII–IX, cresceram ao longo da costa oriental de África, da Somália meridional ao norte de Moçambique, e em ilhas como Lamu, Pate, Zanzibar, Mafia e Kilwa. Os seus habitantes falavam **suaíli** (kiswahili), uma língua bantu com muitos empréstimos do árabe, eram na maioria muçulmanos e viviam do mar: levavam ouro, marfim, ferro, madeira e escravos do interior africano através do oceano Índico e traziam de volta tecidos, contas de vidro, porcelana chinesa e cerâmica islâmica.',
    'Nunca formaram um Estado único. Cada cidade (Kilwa, Mombaça, Melinde, Lamu, Pate, Mogadíscio e dezenas de outras) tinha o seu governante, as suas mesquitas, as suas famílias de mercadores e a sua fortuna, e rivalizavam muitas vezes entre si. O que as unia era a língua, a religião, uma forma de construir em pedra de coral e um lugar partilhado no comércio das monções do oceano Índico.'
  ] },
  { img: 'sua-mapa-costa', leg: 'Mapa da costa suaíli destacada a verde no contexto da África atual; não delimita um império medieval.' },
  { h: 'Onde ficava' },
  'A costa suaíli estende-se por cerca de **3000 km** no oceano Índico ocidental, da costa do Benadir, na Somália (Mogadíscio, Brava), através do Quénia e da Tanzânia até ao norte de Moçambique (Sofala costuma ser tomada como limite sul do comércio), incluindo as Comores e a ponta norte de Madagáscar. As cidades ficavam em ilhas, penínsulas e fozes de rios, com um porto à frente e terras de cultivo atrás. O nome da costa vem do árabe **sawāḥil**, «as costas», plural de *sāḥil*.',
  'O clima é quente e húmido, com duas estações de chuva, e a faixa costeira é fértil. Mas a geografia que explica o mundo suaíli é a **monção**: durante parte do ano os ventos sopram de nordeste e levam os navios da Arábia, da Pérsia e da Índia para África; na outra parte sopram de sudoeste e levam-nos de volta. Esse «motor» regular e gratuito fez da costa parte de uma rede mundial.',
  { img: 'sua-lamu-cidade', leg: 'Cidade velha de Lamu, Quénia.' },
  { h: 'Quando existiu' },
  'O mundo suaíli não começou numa data só. Os historiadores descrevem um processo lento, em várias fases; as datas abaixo são aproximadas e as etapas sobrepõem-se.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Primeiras comunidades costeiras', 'c. 500 – 800 d.C.', 'Aldeias de agricultores, pescadores e ferreiros, em madeira, barro e palha; primeiros contactos com o oceano Índico (vidro e cerâmica do Golfo importados em pouca quantidade)'],
    ['Formação das cidades', 'c. 800 – 1000', 'Crescem Shanga, Manda, Unguja Ukuu e Kilwa; primeiras mesquitas de madeira; importações de cerâmica islâmica e chinesa; o islão espalha-se pela costa'],
    ['As primeiras cidades de pedra', 'c. 1000 – 1300', 'Mesquitas e casas de pedra de coral; moeda local (séculos XII–XIII); grandes mesquitas de Mogadíscio; ascensão de Kilwa'],
    ['Idade de ouro', 'c. 1300 – 1500', 'Kilwa e o ouro de Sofala; Husuni Kubwa e a Grande Mesquita; Songo Mnara e Gedi no auge; Ibn Battuta (c. 1331); túmulos de pilar; fase mais rica e cosmopolita'],
    ['Epílogo: chegam os portugueses', '1498 – 1509 (e depois)', 'Vasco da Gama (1498); saque de Kilwa e Mombaça (1505); as cidades suaílis perdem o controlo do comércio (ver o epílogo na Linha do tempo)']
  ] } },
  { img: 'sua-aldeia-inicial', leg: 'Aldeia costeira cerca de 800, com casas e mesquita de madeira e barro; reconstituição hipotética. Ilustração gerada por IA.' },
  { img: 'sua-kilwa-mesquita', leg: 'Ruínas da Grande Mesquita de Kilwa Kisiwani, Tanzânia.' },
  { h: 'De onde vieram? Uma questão debatida' },
  'Durante um século, a origem dos suaílis foi um campo de batalha. A velha história, contada pelos próprios suaílis nas crónicas e repetida por estudiosos europeus dos séculos XIX e início do XX, dizia que as cidades tinham sido fundadas por **príncipes persas de Xiraz** (os chamados **shirazi**), que teriam navegado até África e construído as cidades de pedra. Alguns autores coloniais foram mais longe e atribuíram tudo a «colonos» árabes ou persas, como se os africanos da costa fossem incapazes de criar uma civilização.',
  'A arqueologia deitou abaixo grande parte desse quadro. As escavações a partir dos anos 1960, e sobretudo as de Mark Horton em **Shanga** (anos 1980), mostraram que os primeiros habitantes eram **africanos**: agricultores e pescadores com cerâmica local, em casas de madeira e barro, que só aos poucos (ao longo de séculos) adotaram o islão, os bens importados e a construção em pedra. O arqueólogo queniano **Chapurukha Kusimba** sublinha as raízes africanas da indústria do ferro e da economia das cidades; o arqueólogo tanzaniano **Felix Chami** defende raízes africanas profundas e contactos com o oceano Índico muito antes do islão. A linguística aponta no mesmo sentido: o suaíli é uma língua bantu, e o seu vocabulário persa é pequeno e chegou sobretudo através do árabe.',
  { caixa: 'O que é debatido e o que não é', texto: [
    '**Assente:** os suaílis são, cultural e linguisticamente, um povo africano. A língua é bantu, os povoados mais antigos eram africanos e a arquitetura de pedra nasceu de materiais e saberes locais.',
    '**Debatido:** quanto e quando chegaram forasteiros. Um estudo de 2023 sobre ADN antigo de cerca de 80 pessoas medievais e do início da era moderna (publicado na *Nature*) concluiu que essas pessoas tinham sobretudo ascendência feminina africana e uma parte significativa de ascendência asiática (em grande parte persa) pela linha masculina, com a mistura datada de cerca do ano 1000. Isto sugere que pequenos grupos de homens persas e árabes se fixaram e casaram em famílias locais, o que pode explicar a tradição «shirazi». Mas não prova «colonização»: a cultura que daí resultou foi africana e muçulmana, e a história dos shirazi pode também ter sido uma forma de reivindicar prestígio e legitimidade.'
  ] },
  { h: 'A língua suaíli' },
  'O suaíli (kiswahili) é uma **língua bantu**, com a mesma gramática e vocabulário de base de outras línguas bantu da África Oriental, mas com muitos **empréstimos do árabe**, sobretudo para religião, comércio, leis e ideias abstratas (as estimativas da parte árabe variam), e alguns do persa e de línguas da Índia. Tem dialetos ao longo da costa: kiamu (Lamu), kimvita (Mombaça), kiunguja (a cidade de Zanzibar, base do suaíli padrão) e outros. No período deste capítulo foi escrito, quando o foi, em escrita árabe; os mais antigos manuscritos suaílis conhecidos são dos séculos XVII–XVIII. Hoje é falado por bem mais de 100 milhões de pessoas (as estimativas variam), é a língua franca da África Oriental e língua de trabalho da União Africana.',
  { h: 'Porque importam' },
  { lista: [
    '**Cidades sem império:** dezenas de cidades independentes, com uma língua e uma cultura comuns, enriqueceram pelo comércio e não pela conquista.',
    '**Uma ponte entre África e o oceano Índico:** os seus portos ligavam o ouro do Zimbabwe e o marfim do interior à Arábia, à Índia e à China.',
    '**Uma cultura genuinamente africana e muçulmana:** a civilização suaíli é um caso de estudo de como sociedades africanas acolheram influências externas e criaram algo novo.',
    '**Arquitetura:** as mesquitas, palácios, casas e túmulos de pilar em pedra de coral esculpida estão entre os edifícios mais originais da África medieval.',
    '**Uma língua global:** o suaíli é hoje uma das línguas africanas mais faladas.',
    '**Uma lição de história:** a discussão sobre as suas origens mostra como o preconceito colonial moldou (e deformou) o estudo da história africana.'
  ] },
  { caixa: 'A costa suaíli hoje', texto: 'As **Ruínas de Kilwa Kisiwani e Songo Mnara** (Tanzânia, 1981), a **cidade velha de Lamu** (Quénia, 2001), o **Forte Jesus, em Mombaça** (Quénia, 2011, uma obra portuguesa), as **Ruínas de Gedi** (Quénia, 2024) e a Ilha de Moçambique (1991) são Património Mundial da UNESCO. A cultura suaíli continua viva na costa, na língua, na cozinha, nas portas esculpidas, na poesia e nas mesquitas.' },
  { img: 'sua-cidade-reconstrucao', leg: 'Cidade de pedra suaíli cerca de 1400, vista do mar; reconstituição hipotética. Ilustração gerada por IA.' }
];

const linha = [
  'Esta linha do tempo segue os acontecimentos principais das cidades-estado suaílis. As datas anteriores a 1300 são aproximadas, e muitas «datas» vêm de crónicas posteriores e podem ser lendárias; isso é assinalado em cada entrada.',
  { linha: [
    { d: 'século I d.C.', t: 'Uma primeira menção: Azânia e Rapta', x: 'O *Périplo do Mar Eritreu*, um guia de navegação grego escrito por um mercador desconhecido do Egito romano (c. 40–70 d.C.), menciona a «Azânia» e um porto comercial chamado **Rapta**, com barcos cosidos e exportação de marfim e carapaça de tartaruga. Onde ficava Rapta é ainda **desconhecido e debatido** (algures na costa da atual Tanzânia). Mostra, pelo menos, que a costa já estava em contacto com o mundo.' },
    { d: 'c. 500 – 800', t: 'Aldeias africanas junto ao mar', x: 'As escavações em Zanzibar (Fukuchani), em Unguja Ukuu e noutros locais mostram comunidades fixas de agricultores, pescadores e ferreiros desde o século VI, o mais tardar, em madeira, barro e palha, com um pouco de cerâmica e vidro importados do Golfo Pérsico. Estas são as **raízes africanas** do mundo suaíli.' },
    { d: 'c. 700 – 800', t: 'Crescem Shanga, Manda e Unguja Ukuu', x: 'Em **Shanga** (ilha de Pate, Quénia) e **Manda**, como em Unguja Ukuu (Zanzibar), pequenos povoados tornam-se portos comerciais. As importações de cerâmica vidrada islâmica e de grés chinês mostram contacto com o Golfo e, indiretamente, com a China.' },
    { d: 'c. 800', t: 'As primeiras mesquitas', x: 'Em Shanga, Mark Horton encontrou uma sequência de mesquitas, a mais antiga de madeira, de cerca dos séculos VIII–IX (a datação exata é debatida). É dos mais antigos testemunhos do islão na costa a sul do Saara. O islão espalhou-se devagar, por via do comércio, e durante muito tempo conviveu com crenças mais antigas.' },
    { d: '869 – 883', t: 'A Revolta dos Zanj no Iraque', x: 'No sul do Iraque, milhares de escravos, chamados **Zanj** pelos árabes (um nome para a costa da África Oriental), revoltaram-se contra o califado abássida. A revolta mostra que já eram exportados escravos da África Oriental para o Golfo, mas numa escala muito menor do que nos séculos XVIII–XIX.' },
    { d: 'c. século X (tradição)', t: 'A lenda da fundação de Kilwa', x: 'A **Crónica de Kilwa** diz que um príncipe persa de Xiraz, **Ali ibn al-Hasan**, comprou a ilha de Kilwa ao chefe local (na lenda, pagando com tecido suficiente para a rodear) e fundou a dinastia depois chamada **Shirazi**. A data dada pela tradição (muitas vezes 957) não é fiável; a arqueologia mostra que a ilha já estava habitada e que a cidade cresceu sobretudo nos séculos XI–XII.' },
    { d: '1107', t: 'Uma inscrição em Kizimkazi', x: 'Uma inscrição em cúfico (escrita árabe antiga) na mesquita de Kizimkazi, no sul de Zanzibar, é lida como datada do ano 500 da Hégira (1107 d.C.). Está entre as mais antigas inscrições islâmicas datadas da costa.' },
    { d: 'c. séculos XI – XII', t: 'As primeiras cidades de pedra', x: 'Mesquitas e casas de pedra de coral começam a substituir a madeira e o barro em cidades como Kilwa, Shanga, Gedi e Mogadíscio. Constrói-se a primeira Grande Mesquita de Kilwa (a sala de oração norte). Gedi, no Quénia, é fundada por esta altura.' },
    { d: 'c. séculos XI – XIII (debatido)', t: 'Moeda na costa', x: 'Kilwa começa a cunhar moedas de cobre (e, mais tarde, também de prata), das primeiras cunhadas na África subsariana; Mogadíscio faz o mesmo mais tarde. A data das primeiras emissões é debatida (c. 1100 é uma estimativa corrente), e as mais antigas são atribuídas por alguns estudiosos a um governante de nome Ali ibn al-Hasan. Até então usavam-se búzios, contas e barras de ferro como meio de troca.' },
    { d: '1203 – 1204 (tradição)', t: 'Os Nabhani de Pate', x: 'A **Crónica de Pate** diz que Sulaiman ibn Sulaiman al-Nabhani, vindo da Arábia, chegou e casou com a família real local, fundando a dinastia Nabhani de Pate. Como no caso de Kilwa, a parte antiga da crónica é **lendária** e sem confirmação arqueológica.' },
    { d: '1269', t: 'A mesquita de Fakhr al-Din em Mogadíscio', x: 'Uma inscrição de estilo cúfico data a mesquita de Fakhr al-Din, em Mogadíscio, do ano 667 da Hégira (1269 d.C.), uma de várias grandes mesquitas que mostram a riqueza deste porto do norte.' },
    { d: 'c. 1277', t: 'A dinastia Mahdali toma Kilwa', x: 'Segundo a Crónica de Kilwa, a linha shirazi é substituída pelos **Mahdali**, sayyids («descendentes do Profeta») de origem iemenita. Sob eles, Kilwa atinge o auge.' },
    { d: 'c. 1300 (debatido)', t: 'Kilwa controla o ouro de Sofala', x: 'Kilwa assegura o controlo de **Sofala**, em Moçambique, o porto por onde saía o ouro do planalto do Zimbabwe. A data é debatida: a crónica sugere uma data mais antiga (século XII), enquanto outros estudiosos apontam para o século XIII ou inícios do XIV.' },
    { d: 'c. 1310 – 1333', t: 'Al-Hasan ibn Sulaiman constrói a grandeza de Kilwa', x: 'O sultão al-Hasan ibn Sulaiman, chamado **Abu’l-Mawahib** («pai das dádivas»), constrói o palácio de **Husuni Kubwa** e amplia a Grande Mesquita com uma extensão a sul e cúpulas. São os edifícios de pedra mais ambiciosos da costa medieval.' },
    { d: 'c. 1331', t: 'Ibn Battuta visita a costa', x: 'O viajante marroquino **Ibn Battuta** visita Mogadíscio, Mombaça e Kilwa. A data tradicional é 1331, mas a cronologia da sua viagem (c. 1330–1332) é debatida, tal como o facto de ter visto tudo o que descreve. Elogia Kilwa como uma das cidades mais belas e mais elegantemente construídas do mundo.' },
    { d: 'c. século XIV', t: 'Songo Mnara', x: 'Numa pequena ilha a sul de Kilwa, **Songo Mnara** é fundada como cidade de casas e mesquitas de pedra de coral, ocupada do século XIV ao XVI.' },
    { d: '1399', t: 'O túmulo datado de Gedi', x: 'O túmulo de pilar de Gedi, no Quénia, tem uma inscrição em árabe correspondente ao ano de 1399. Gedi atinge o auge nos séculos XV–XVI.' },
    { d: 'c. 1400 – 1425', t: 'Shanga é abandonada', x: 'Shanga, uma das cidades mais antigas, é abandonada. Não se sabe porquê; entre as hipóteses estão mudanças no abastecimento de água e a ascensão de portos rivais.' },
    { d: '1414 – c. 1419', t: 'A China e a costa suaíli (debatido)', x: 'Em 1414, uma girafa de Melinde (chegada por via de Bengala) chega à corte Ming. As fontes chinesas registam que frotas de **Zheng He** chegaram à costa da África Oriental (Mogadíscio, Brava e Melinde) nos anos seguintes. A porcelana chinesa é muito comum nos sítios suaílis, mas a **prova direta da visita de Zheng He é escassa**, e até onde foi para sul é debatido.' },
    { d: 'c. 1400 – 1500', t: 'O apogeu', x: 'Kilwa, Mombaça, Melinde, Pate, Lamu e Mogadíscio florescem. Casas de pedra com nichos para porcelana, túmulos de pilar, mesquitas e mercadores ricos caracterizam este período.' },
    { d: 'c. 1489 – 1490', t: 'Pêro da Covilhã na costa', x: 'O português Pêro da Covilhã, enviado por D. João II em 1487 para descobrir a rota e os mercados do Oriente, vai do Cairo à Índia e, segundo a tradição, regressa por Sofala, na costa da África Oriental, antes de voltar ao Cairo. Dá à coroa portuguesa as primeiras informações em primeira mão sobre o ouro e a rota das monções (os pormenores do seu itinerário são debatidos).' },
    { d: '1498', t: 'Chega Vasco da Gama', x: 'A armada de Vasco da Gama toca na Ilha de Moçambique (março), em Mombaça (abril, com receção hostil) e em Melinde (abril), onde o governante, rival de Mombaça, acolhe os portugueses e fornece um piloto para a travessia até à Índia. Foi erguido em Melinde um padrão de pedra (1498–99; a data varia).' },
    { d: '1500', t: 'Cabral', x: 'Pedro Álvares Cabral, a caminho da Índia, toca em Moçambique, tenta sem êxito fazer um tratado com Kilwa e é bem recebido em Melinde, onde embarca pilotos.' },
    { d: '1502', t: 'Da Gama impõe tributo a Kilwa', x: 'Numa segunda viagem, Vasco da Gama ameaça bombardear Kilwa, e o seu governante aceita pagar tributo anual a Portugal.' },
    { d: '1505', t: 'Saque de Kilwa e Mombaça', x: 'A 24 de julho de 1505 a armada do vice-rei **D. Francisco de Almeida** ataca Kilwa com cerca de 500 homens e saqueia-a, construindo depois um forte (Santiago). Em agosto toma e queima Mombaça. Nos anos seguintes (até c. 1515) os portugueses passam a dominar os principais portos da costa.' },
    { d: 'c. 1500', t: 'Fim do período deste capítulo', x: 'A idade de ouro das cidades-estado suaílis termina. O que se segue (fortes portugueses e controlo do comércio, expansão omanita no século XVII, sultanato de Zanzibar no século XIX) é história de outro período.' }
  ] },
  { h: 'Epílogo: depois de 1500 e a ligação portuguesa' },
  'A chegada dos portugueses em 1498–1509 marca o fim da independência e da prosperidade das cidades suaílis tal como eram, porque deixaram de poder comerciar livremente: os navios tinham de levar passes portugueses (*cartazes*) e pagar direitos, e o ouro de Sofala foi em grande parte desviado. Os portugueses abandonaram o forte de Kilwa em 1512 e o sultanato continuou, enfraquecido. Depois de uma longa permanência, em 1593–96 construíram o **Forte Jesus**, em Mombaça, projetado pelo engenheiro italiano Giovanni Battista Cairati, no tempo de Filipe I de Portugal (Filipe II de Espanha). Em 1698, após um longo cerco, forças de Omã tomaram o forte e a influência portuguesa na costa a norte de Moçambique ficou praticamente terminada (com um breve regresso em 1728–29).',
  'O encontro deixou marcas na língua suaíli. Segundo os dicionários etimológicos, palavras como **meza** (mesa), **mvinyo** (vinho), **bendera** (bandeira), **leso** (lenço), **pesa** (dinheiro, de *peso*) e **gereza** (prisão, de *igreja*, aparentemente porque uma igreja serviu de cadeia) vêm do português. Cronistas portugueses como João de Barros e Duarte Barbosa deixaram também algumas das primeiras descrições longas das cidades suaílis, em particular de Kilwa, Mombaça e Melinde, ainda que do ponto de vista dos conquistadores.',
  { img: 'sua-armada-1505', leg: 'Armada portuguesa ao largo de uma cidade suaíli em 1505; reconstituição artística. Ilustração gerada por IA.' },
  { img: 'sua-forte-kilwa', leg: 'Forte de Kilwa Kisiwani, a Gereza.' }
];

const mapa = [
  'As cidades-estado suaílis são uma cadeia de portos ao longo da costa, cada um com a sua história. Este mapa e esta tabela mostram as principais, de norte para sul. Note-se que as mais setentrionais (Mogadíscio e Brava) pertencem à costa somali, com língua e cultura próprias, mas partilham a rede comercial com as cidades suaílis, e muitos historiadores incluem-nas no mesmo mundo.',
  { img: 'sua-rotas-monsao', leg: 'Mapa esquemático das ligações sazonais do oceano Índico: verde-turquesa para a viagem à África Oriental no inverno boreal, ocre para o regresso no verão boreal. Setas de percurso indicativo, não de direção local do vento.' },
  { tabela: { cab: ['Cidade', 'Local hoje', 'Período', 'Para que ficou conhecida'], linhas: [
    ['Mogadíscio e Brava (Barawa)', 'Sul da Somália', 'c. séculos X – XVI', 'Portos do norte com moeda própria, tecidos e grandes mesquitas (Fakhr al-Din, 1269); Mogadíscio foi visitada por Ibn Battuta'],
    ['Shanga', 'Ilha de Pate, Quénia', 'c. séc. VIII – início do XV', 'Escavada por Horton: mostra a origem africana das cidades; mesquitas de madeira e de pedra'],
    ['Manda', 'Ilha de Manda, Quénia', 'c. séculos VIII – XV', 'Grande cidade com casas de pedra de coral e um muro marítimo; importações antigas'],
    ['Lamu', 'Ilha de Lamu, Quénia', 'c. séc. XIV – hoje', 'A cidade suaíli mais bem conservada; portas esculpidas; UNESCO 2001'],
    ['Pate', 'Ilha de Pate, Quénia', 'c. séc. XIII – XIX', 'Sultanato poderoso; Crónica de Pate; poesia'],
    ['Gedi', 'Perto de Melinde, Quénia', 'c. séc. XI/XII – meados do XVII', 'Cidade na floresta, com palácio, mesquitas e túmulo de pilar (1399); UNESCO 2024'],
    ['Melinde (Malindi)', 'Quénia', 'c. séc. XIV – hoje', 'Aliada dos portugueses em 1498; enviou uma girafa à China; o padrão de Vasco da Gama'],
    ['Mombaça', 'Quénia', 'c. séc. XII – hoje', 'Porto insular; hostil a Da Gama (1498); saqueada em 1505; Forte Jesus (UNESCO 2011)'],
    ['Zanzibar (Unguja Ukuu, Kizimkazi)', 'Zanzibar, Tanzânia', 'c. séc. VII – hoje', 'Porto comercial antigo; mesquita de Kizimkazi (inscrição de 1107)'],
    ['Mafia (Kisimani Mafia, Chole)', 'Ilha de Mafia, Tanzânia', 'c. séculos VIII – XVI', 'Cidades insulares próximas de Kilwa e sob a sua influência'],
    ['Kilwa Kisiwani', 'Tanzânia', 'c. séc. IX – XVI', 'A cidade mais rica: Grande Mesquita, Husuni Kubwa, moedas, ouro de Sofala; UNESCO 1981'],
    ['Songo Mnara', 'Tanzânia', 'c. séculos XIV – XVI', 'Cidade bem conservada de casas de pedra; UNESCO 1981'],
    ['Sofala', 'Moçambique', 'c. séculos X – XVI', 'Porto do ouro do planalto do Zimbabwe, dependência de Kilwa; forte português a partir de c. 1505–06']
  ] } },
  { h: 'Mogadíscio e o norte' },
  'Mogadíscio, no sul da Somália, era já um porto importante na Alta Idade Média e, nos séculos XIII–XIV, uma cidade grande e rica, com moeda própria, uma célebre indústria de tecidos (os *toob Benadir*, exportados para o Egito e outros destinos) e grandes mesquitas. A mesquita de Fakhr al-Din é de 1269. Ibn Battuta visitou-a c. 1331 e descreveu-a como uma cidade de enormes dimensões, com muitos mercadores ricos e um sultão que falava árabe e a língua local. A sua cultura somali difere da suaíli mais a sul, mas as ligações comerciais eram estreitas.',
  { img: 'sua-mogadiscio-mesquita', leg: 'Mesquita de Fakhr al-Din, Mogadíscio.' },
  { h: 'O arquipélago de Lamu: Shanga, Manda, Lamu e Pate' },
  'No norte do Quénia, o arquipélago de Lamu tem alguns dos sítios mais antigos e mais estudados. **Shanga**, na ilha de Pate, foi escavada por Mark Horton (anos 1980): foi fundada no século VIII, por agricultores e pescadores, e teve uma sequência de mesquitas; a sua cidade de pedra, com cerca de 185 estruturas de pedra (segundo as escavações), foi abandonada c. 1400–1425. **Manda**, numa ilha próxima, foi escavada por Neville Chittick nos anos 1960 e tinha grandes casas de pedra de coral e um muro marítimo. **Lamu** desenvolveu-se mais tarde (a cidade tem pelo menos 700 anos) e **Pate**, segundo a Crónica de Pate, foi governada pela dinastia Nabhani; os poetas de Pate produziram mais tarde as mais antigas grandes obras da literatura suaíli em escrita (séculos XVII–XVIII).',
  { img: 'sua-shanga-ruinas', leg: 'Ruínas na ilha de Pate, Quénia; a fonte não as identifica como Shanga.' },
  { img: 'sua-manda-ruinas', leg: 'Parede da mesquita nas ruínas de Takwa, ilha de Manda, Quénia.' },
  { h: 'Gedi e Melinde' },
  'Gedi, na floresta não longe de Melinde, foi fundada nos séculos XI–XII (o marcador de sepultura mais antigo foi datado por radiocarbono de 1041–1278) e floresceu nos séculos XV–XVI, com talvez 2500 habitantes numa cidade murada de cerca de 18 hectares. Tem uma Grande Mesquita, um palácio, casas, poços e um túmulo de pilar com data correspondente a 1399. As escavações encontraram moedas e celadon chineses, contas venezianas e cerâmicas islâmicas. Foi abandonada em meados do século XVII; as razões são debatidas (mudanças no abastecimento de água e insegurança estão entre as explicações sugeridas). **Melinde**, a norte, cresceu nos séculos XIV–XV e, como rival de Mombaça, acolheu Vasco da Gama em 1498.',
  { img: 'sua-gedi-ruinas', leg: 'Ruínas de Gedi, Quénia.' },
  { img: 'sua-gedi-tumulo', leg: 'Túmulo de pilar em Gedi.' },
  { h: 'Mombaça' },
  'Mombaça era um porto insular que Ibn Battuta descreveu c. 1331 como um lugar cujo povo era devoto, de rito xafiita, e cujas mesquitas, diz ele, eram sólidas construções de madeira. No século XV era já um grande rival de Melinde e de Kilwa. Em 1498 recebeu Vasco da Gama com desconfiança e em 1505 foi tomada e queimada pelos portugueses. O atual **Forte Jesus** (1593–96) é português.',
  { img: 'sua-mombaca-forte-jesus', leg: 'Forte Jesus, Mombaça (1593–1596).' },
  { h: 'Zanzibar e Mafia' },
  'Zanzibar (Unguja) foi um dos primeiros locais de comércio da costa: em **Unguja Ukuu**, as escavações encontraram cerâmica e vidro importados do Golfo e contas dos séculos VII–X, e em **Kizimkazi**, no sul da ilha, uma mesquita tem uma inscrição em cúfico lida como de 1107 (o edifício atual foi em grande parte reconstruído no século XVIII). A famosa Cidade de Pedra de Zanzibar, porém, é sobretudo do século XIX. A **ilha de Mafia**, com Kisimani Mafia e Chole, fazia parte do círculo de Kilwa e tinha edifícios e mesquitas de pedra de coral.',
  { img: 'sua-kizimkazi', leg: 'Mesquita de Kizimkazi, Zanzibar, associada a uma inscrição de 1107.' },
  { h: 'Kilwa Kisiwani, a cidade mais rica' },
  'Kilwa Kisiwani, numa pequena ilha ao largo do sul da Tanzânia, foi a cidade mais rica e poderosa do mundo suaíli nos séculos XIV–XV. A **Crónica de Kilwa**, que sobrevive em duas versões (uma árabe, o *Kitāb al-Sulwa*, e uma portuguesa, de João de Barros, publicada em 1552), conta como Ali ibn al-Hasan, de Xiraz, fundou a **dinastia Shirazi**; depois dela, a dinastia **Mahdali** chegou ao poder c. 1277. A crónica baseia-se na tradição oral e foi alterada para servir quem mandava, mas os estudos recentes de ADN parecem compatíveis com parte do seu núcleo (chegada de homens do outro lado do oceano que se misturaram com a população local).',
  'A cidade enriqueceu com o ouro de **Sofala**, que controlava, e com os impostos sobre todo o comércio que passava. Cunhou moeda própria (cobre e prata), e os seus mercadores negociavam com a Arábia, a Índia e a China. A **Grande Mesquita**, iniciada nos séculos XI–XII, foi ampliada no início do século XIV, sob al-Hasan ibn Sulaiman, com uma grande cúpula e abóbadas, uma façanha rara na África subsariana. A parte mais antiga da mesquita data do século XII (alguns autores recuam-na para o XI). Ali perto, ele construiu o palácio de **Husuni Kubwa** («a grande fortaleza»), numa falésia sobre o mar: cerca de cem salas e terraços em torno de pátios rebaixados, um grande pátio comercial com armazéns e uma piscina octogonal. O palácio parece ter ficado inacabado e ter sido abandonado pouco depois.',
  { cit: 'Kilwa é uma das cidades mais belas e mais elegantemente construídas do mundo.', fonte: 'Ibn Battuta, Rihla, sobre Kilwa (paráfrase do sentido; as traduções variam, por exemplo a de H. A. R. Gibb)' },
  { img: 'sua-kilwa-cupulas', leg: 'Arcos do interior da Grande Mesquita de Kilwa Kisiwani.' },
  { img: 'sua-husuni-kubwa', leg: 'Piscina octogonal nas ruínas do palácio de Husuni Kubwa, Kilwa.' },
  { img: 'sua-kilwa-reconstrucao', leg: 'Porto de Kilwa cerca de 1330, mesquita e palácio de Husuni Kubwa; reconstituição hipotética. Ilustração gerada por IA.' },
  { h: 'Songo Mnara' },
  'Numa pequena ilha a sul de Kilwa, Songo Mnara foi ocupada do século XIV ao XVI. Tem cinco ou seis mesquitas (a contagem varia), cemitérios e algumas dezenas de blocos de casas de pedra de coral, com pavimentos rebocados e nichos. As escavações dirigidas por Jeffrey Fleisher e Stephanie Wynne-Jones (desde 2009) mostram que pessoas de condição diferente, em casas de pedra e de terra, usavam bens importados semelhantes, e que as casas estavam abertas ao comércio.',
  { img: 'sua-songo-mnara', leg: 'Ruínas de Songo Mnara, Tanzânia.' },
  { h: 'Sofala e o Grande Zimbabwe' },
  'O ouro que enriqueceu Kilwa era extraído no interior (o planalto do Zimbabwe) e levado para a costa em **Sofala**, em Moçambique. No interior, a cidade de pedra do **Grande Zimbabwe** (c. séculos XI–XV) estava no centro deste comércio: entre os seus achados há celadon chinês e contas de vidro que chegaram pelos portos suaílis, e foram aí encontradas algumas moedas de Kilwa. Estas duas civilizações não partilhavam língua nem arquitetura, mas dependiam uma da outra.',
  { img: 'sua-great-zimbabwe', leg: 'Grande Recinto do Grande Zimbabwe.' },
  { h: 'As rotas marítimas' },
  'As rotas marítimas eram a linha de vida das cidades. De dezembro a março a **monção de nordeste** (*kaskazi*) trazia dhows da Arábia, da Pérsia e da Índia até África; de abril a setembro a **monção de sudoeste** (*kusi*) levava-os de volta. Uma viagem entre o Golfo e Kilwa podia assim fazer-se uma vez por ano, com uma estadia de alguns meses na costa. Os mercadores e armadores suaílis atuavam como intermediários: não controlavam o oceano Índico, mas estavam numa das suas encruzilhadas.'
];

const sociedade = [
  'Quase tudo o que sabemos da vida quotidiana na costa suaíli vem da arqueologia, de alguns viajantes e cronistas estrangeiros (Ibn Battuta, mais tarde os portugueses) e de tradições suaílis posteriores. Os suaílis escreveram pouco sobre si próprios neste período, por isso o que segue mistura prova e inferência cuidadosa, e di-lo onde há incerteza.',
  { h: '1. Organização política' },
  'Cada cidade era uma **cidade-estado** independente, governada por um governante (chamado *sultão*, *mfalme* ou outros títulos, conforme a cidade) com um conselho de famílias notáveis. Os governantes eram em geral escolhidos dentro de uma dinastia, como os Shirazi e Mahdali em Kilwa, ou os Nabhani em Pate, mas a sucessão era muitas vezes disputada, e o poder real estava por vezes nas mãos de vizires e mercadores poderosos, como o emir Muhammad Kiwabi em Kilwa no fim do século XV. Os governantes cobravam direitos alfandegários, cunhavam moeda em alguns locais, construíam mesquitas e palácios e atuavam como juízes juntamente com o *cádi* (juiz islâmico). Não havia exército permanente nem império: as relações entre cidades eram uma mistura de comércio, aliança, casamento e rivalidade. Kilwa era a mais forte, e algumas cidades (Mafia, Sofala) estavam sob a sua influência.',
  { h: '2. Classes sociais' },
  'A sociedade era hierarquizada. No topo estava o **patriciado**, os *waungwana* («livres» ou «civilizados»), proprietários, mercadores e armadores que viviam na cidade de pedra, reivindicavam ascendência árabe ou shirazi e mostravam o seu estatuto pelas casas, pelas roupas e pela generosidade. Abaixo estavam artesãos, marinheiros e pescadores livres, que viviam muitas vezes em casas de terra nos arredores da cidade de pedra, e os **escravos** (*watumwa*), na maioria vindos do interior, que trabalhavam como criados domésticos, na agricultura e como carregadores. Para lá da cidade viviam os povos do continente, como agricultores e caçadores, a quem os citadinos chamavam por vezes *washenzi* («bárbaros»), embora estivessem estreitamente ligados às cidades pelo comércio.',
  { caixa: 'E as mulheres?', texto: 'As provas são escassas. O ADN antigo sugere que muitos homens vindos de fora tomaram esposas locais, e que as pessoas estudadas descendiam sobretudo de mulheres africanas. Segundo a lei islâmica, as mulheres podiam herdar e possuir bens. A tradição suaíli posterior nomeia várias mulheres governantes e poetisas, mas para o período anterior a 1500 as fontes são silenciosas e muito é conjetura.' },
  { h: '3. Religião' },
  'Por volta dos séculos XI–XII, a maioria das pessoas das cidades de pedra era **muçulmana**, sobretudo **sunita** da escola **xafiita**; discute-se alguma presença inicial de outras tendências (como a ibadita). A conversão foi lenta, pelo exemplo e pelo comércio e não por conquista, e as crenças antigas, sobretudo em espíritos (*pepo* e *jini*), continuaram a par do islão, como hoje.',
  { tabela: { cab: ['Elemento', 'Papel'], linhas: [
    ['Mesquita de sexta-feira (*msikiti*)', 'O centro de cada cidade; de pedra de coral, com mihrab (nicho de oração) e um pátio para as abluções. As primeiras mesquitas eram de madeira.'],
    ['Cádi e homens de saber', 'Juízes e professores, que aplicavam a lei islâmica e dirigiam as escolas do Alcorão'],
    ['Xarifes e sayyids', 'Famílias que reivindicavam descendência do Profeta; muito respeitadas (como os Mahdali de Kilwa)'],
    ['Peregrinação e estudo', 'Alguns iam em peregrinação (*hajj*) ou estudavam na Arábia; vinham letrados da Arábia e do Iémen para ensinar'],
    ['Espíritos (*pepo*, *jini*)', 'Crenças em espíritos que causam doença ou boa sorte, com curandeiros e rituais, que sobreviveram sob o islão'],
    ['Mwaka Kogwa', 'Festa de Ano Novo celebrada em Makunduchi (Zanzibar), cujas origens (talvez o Nowruz persa?) são debatidas']
  ] } },
  { h: 'A vida depois da morte' },
  'Os muçulmanos eram enterrados de lado, voltados para Meca. Os homens ricos eram sepultados em túmulos de pedra, muitas vezes diante da mesquita; alguns deles (séculos XIV–XV) tinham um alto **pilar** a sair do túmulo (em suaíli *nguzo*), e alguns eram decorados com taças de porcelana chinesa importada encastradas no reboco. Os túmulos de pilar, encontrados em Gedi, Mnarani, Melinde e outros locais, estão entre os monumentos suaílis mais característicos. O seu propósito não é inteiramente compreendido: podem assinalar o estatuto do morto.',
  { img: 'sua-mnarani-pilar', leg: 'Ruínas da Grande Mesquita de Mnarani, Kilifi, Quénia; alternativa à fotografia de um túmulo de pilar.' },
  { img: 'sua-cerimonia-sexta', leg: 'Oração de sexta-feira numa mesquita suaíli cerca de 1350; cena imaginada. Ilustração gerada por IA.' },
  { h: '4. Economia e comércio' },
  'A economia das cidades assentava no **comércio**, com um pouco de pesca, agricultura e artesanato. A agricultura (sorgo, milhete, coco, bananas, arroz) alimentava as cidades, mas a riqueza vinha de vender bens do interior africano e comprar bens do mundo do oceano Índico.',
  { tabela: { cab: ['Exportações (de África)', 'Importações (para África)'], linhas: [
    ['Ouro (do Zimbabwe, via Sofala)', 'Tecidos de algodão e seda (Índia, Golfo)'],
    ['Marfim', 'Contas de vidro e de cornalina (Índia, Sudeste Asiático)'],
    ['Ferro e cobre', 'Porcelana e celadon chineses'],
    ['Postes de mangal (madeira de construção) para a Arábia', 'Cerâmicas vidradas do Golfo Pérsico e do Irão'],
    ['Carapaça de tartaruga, âmbar-cinzento, corno de rinoceronte, cristal de rocha', 'Vasos de vidro, perfumes, especiarias'],
    ['Escravos (em pequena escala até ao século XVIII)', 'Prata e, em alguns períodos, armas']
  ] } },
  'Os navios eram os **dhows**, embarcações de madeira com vela triangular (latina). Nesta costa havia também o *mtepe*, uma grande embarcação cujas tábuas não eram pregadas mas **cosidas com fibra de coco**, técnica já referida no *Périplo* do século I. Os direitos sobre as cargas eram cobrados no porto, e mercadores da Arábia, da Índia e da Pérsia viviam nas cidades durante meses à espera de que a monção mudasse.',
  { img: 'sua-dhow', leg: 'Dhow tradicional com vela latina, Lamu.' },
  { img: 'sua-mtepe', leg: 'Mtepe, embarcação cosida com fibra de coco, na praia de Zanzibar, cerca de 1890.' },
  { img: 'sua-mercado-cais', leg: 'Comércio no cais de um porto suaíli cerca de 1400; cena imaginada. Ilustração gerada por IA.' },
  { img: 'sua-porcelana', leg: 'Prato de celadon das oficinas de Longquan, China, dinastia Yuan, 1300–1400.' },
  { img: 'sua-contas', leg: 'Pormenor de um colar mutisalah de Timor com contas de tipo indo-pacífico: exemplo comparativo, não um achado da costa suaíli.' },
  { img: 'sua-moeda-kilwa', leg: 'Quiloa (Kilwa), gravura de Georg Braun e Franz Hogenberg, Civitates orbis terrarum, 1572; alternativa à moeda.' },
  { h: '5. Escrita, saber e história' },
  'A língua da religião, da lei e do comércio era o **árabe**, escrito em caracteres árabes; as moedas e as inscrições (como Kizimkazi 1107 e Mogadíscio 1269) estão em árabe. O suaíli era sobretudo falado, e a primeira poesia que temos escrita em suaíli (em caracteres árabes) é posterior (séculos XVII–XVIII), embora a poesia oral certamente existisse antes. A história das cidades era transmitida em crónicas que misturam facto e lenda: a **Crónica de Kilwa** e a **Crónica de Pate**, esta publicada em inglês por C. H. Stigand em 1913. As escolas do Alcorão ensinavam os rapazes a ler e a escrever, e os homens de saber (*ulema*) ensinavam direito e teologia.',
  { h: '6. Casa e família' },
  'A típica **casa de pedra** (*nyumba ya mawe*) era um bloco retangular de pedra de coral e argamassa de cal, normalmente de um ou dois pisos, sem janelas para a rua. No interior, uma sequência de salas compridas e estreitas (a largura limitada pelo vão das vigas de postes de mangal, os *boriti*) abria para um pátio; havia um alpendre com bancos (*baraza*) para receber visitas, uma latrina e um poço. Nas paredes rebocadas havia **nichos** (*zidaka*) onde se exibia porcelana importada. Os pobres viviam em casas de terra e palha, perto da cidade de pedra. As famílias eram grandes, com criados e escravos, e a casa era ao mesmo tempo lar e negócio, com armazéns para as mercadorias.',
  { img: 'sua-casa-interior', leg: 'Interior de uma casa de pedra coralina cerca de 1400; reconstituição hipotética. Ilustração gerada por IA.' },
  { img: 'sua-porta-lamu', leg: 'Porta de madeira esculpida de Lamu.' },
  { h: '7. Alimentação' },
  'A base da dieta eram os cereais (sorgo, milhete), mais tarde o arroz, com coco, bananas, citrinos, cana-de-açúcar e legumes, e **peixe e marisco** em abundância, além de cabra, galinha e vaca. As especiarias e o arroz eram importados. Muitos alimentos hoje típicos (milho, mandioca, malaguetas, caju, ananás) vieram da América e foram introduzidos pelos portugueses **depois de 1500**, pelo que não fazem parte deste capítulo. As refeições nas casas ricas serviam-se em cerâmicas importadas.',
  { h: '8. Vestuário e joias' },
  'As elites vestiam algodão e seda importados da Índia e do Golfo, e tecidos locais (Mogadíscio era famosa pelos seus têxteis); os homens usavam túnicas compridas e turbantes ou barretes, as mulheres tecidos enrolados e véus, embora os pormenores do vestuário antes de 1500 sejam mal conhecidos. Os ricos usavam **joias** de ouro e prata, contas de vidro e de cornalina, pulseiras, anéis e tornozeleiras; as contas estão entre os achados mais comuns. Ibn Battuta elogia a generosidade do sultão de Kilwa em dar presentes, que lhe valeu o epíteto *Abu’l-Mawahib*.',
  { h: '9. Música e jogos' },
  'A música baseava-se em tambores, trompas e outros instrumentos, com cantos e poesia. Ibn Battuta descreve o sultão de Mogadíscio escoltado por músicos com tambores e trombetas. A trompa suaíli mais conhecida, o **siwa**, de marfim ou latão, é um símbolo de chefia em Lamu e Pate e sobrevive de períodos posteriores. Um jogo encontrado em toda a África Oriental, o **bao** (mancala), jogava-se em tabuleiros que também aparecem gravados na pedra das ruínas suaílis; a datação dos tabuleiros mais antigos e a origem do jogo são debatidas.',
  { img: 'sua-siwa', leg: 'Trajes de casamento e músicos com siwas em Lamu, gravura baseada numa fotografia de John Kirk.' },
  { img: 'sua-bao', leg: 'Tabuleiro de bao, jogo de mancala da África Oriental.' },
  { h: '10. Ciência, navegação e medicina' },
  'Os pilotos suaílis usavam as estrelas e o calendário das monções, e partilhavam o saber dos navegadores árabes, persas e indianos. Roteiros árabes de Ahmad ibn Majid (fim do século XV) descrevem a costa da África Oriental. O **calendário** combinava o ano lunar islâmico com um ano solar para a agricultura e a navegação, e o Ano Novo (*Nairuzi*) é celebrado em alguns locais. A medicina combinava o saber islâmico com o conhecimento de ervas local e curandeiros; muito é mal documentado para este período.',
  { h: '11. Tecnologia' },
  { lista: [
    '**Construção em coral:** blocos de rocha de coral (recife morto) eram cortados e assentes em argamassa de cal, com coral fresco (*Porites*, macio) esculpido para mihrabs, portais e decoração de túmulos; a cal fazia-se queimando coral.',
    '**Abóbadas e cúpulas:** em Kilwa e noutros locais, abóbadas e cúpulas eram feitas de coral e argamassa, o que era raro na África a sul do Saara.',
    '**Metalurgia do ferro:** o ferro era fundido na costa e no interior, e exportado.',
    '**Construção naval:** dhows e barcos cosidos feitos com madeira local e fibra de coco.',
    '**Moeda e pesos:** a cunhagem de moedas de cobre e prata em Kilwa e Mogadíscio.',
    '**Contas e tecelagem:** fabrico de contas, escultura em marfim e tecelagem de algodão.'
  ] },
  { img: 'sua-coral-cantaria', leg: 'Cantaria de coral e preparação de cal para uma mesquita cerca de 1300; cena imaginada. Ilustração gerada por IA.' },
  { h: '12. Guerra' },
  'As cidades suaílis defendiam-se com muralhas (como em Gedi), com a sua posição insular e com arqueiros; não havia grandes exércitos. Os conflitos eram sobretudo entre cidades (por exemplo Mombaça contra Melinde) ou com os povos do continente. As suas armas eram arcos, lanças e espadas. Isto explica por que os portugueses, com navios armados de canhões, armaduras de aço e armas de fogo, os conseguiram vencer depressa em 1505, embora em Mombaça os defensores (segundo cronistas portugueses, com cerca de 1500 arqueiros do continente) tenham resistido com dureza.'
];

const personalidades = [
  'A maioria dos suaílis deste período não tem nome, e muitos governantes que conhecemos por crónicas são em parte lendários. Estas são as principais figuras, reais ou semilendárias, e os estudiosos que as investigam.',
  { h: 'Ali ibn al-Hasan, fundador da dinastia Shirazi de Kilwa' },
  'O fundador tradicional de Kilwa, que a crónica diz ter sido um príncipe de Xiraz chegado por mar com a família. Se existiu tal como descrito é **debatido**; moedas atribuídas a um governante com este nome sugerem que existiu um sultão Ali ibn al-Hasan real no século XII, mas a história da origem persa pode ser em parte uma lenda de legitimação.',
  { h: 'Al-Hasan ibn Sulaiman (Abu’l-Mawahib), sultão de Kilwa' },
  'Reinou c. 1310 – c. 1333, o mais conhecido dos sultões Mahdali. Ibn Battuta, que o conheceu, elogiou a sua humildade e generosidade (o título *Abu’l-Mawahib* significa «pai das dádivas»). É-lhe atribuído o palácio de Husuni Kubwa e a grande ampliação da Grande Mesquita, e conduziu a cidade no seu auge.',
  { h: 'Muhammad Kiwabi, emir de Kilwa' },
  'Um poderoso emir (chefe militar e «fazedor de reis») em Kilwa no fim do século XV, quando os sultões Mahdali eram fracos. Mostra como o poder real podia passar do sultão para os seus principais oficiais.',
  { h: 'Sulaiman ibn Sulaiman al-Nabhani, sultão de Pate' },
  'Na Crónica de Pate, o primeiro governante Nabhani de Pate, que se diz ter chegado da Arábia c. 1203–04 e casado na família governante local. A data e o relato são **tradicionais e incertos**.',
  { h: 'Fumo Liongo, o herói-poeta' },
  'Uma figura **lendária** da tradição suaíli, geralmente situada na costa norte (Pate, Shungwaya) e muitas vezes datada do fim da Idade Média, guerreiro e poeta em conflito com um governante. Poemas que lhe são atribuídos são contados e cantados, mas os historiadores não podem dizer se existiu nem quando viveu.',
  { h: 'Ibn Battuta, o viajante' },
  'Nascido em Tânger, Marrocos, em 1304, viajou cerca de 29 anos por África, Ásia e Europa, e ditou o seu relato (a *Rihla*) em 1355 ao letrado Ibn Juzayy. Por volta de 1331 (a data é debatida) visitou Mogadíscio, Mombaça e Kilwa. É o mais célebre testemunho ocular escrito do mundo suaíli antes dos portugueses, embora alguns estudiosos questionem os pormenores e a cronologia da sua viagem à África Oriental.',
  { img: 'sua-ibn-battuta', leg: 'Ibn Battuta no Egito, ilustração de Léon Benett, século XIX.' },
  { h: 'Zheng He, o almirante Ming' },
  'Um almirante eunuco chinês que comandou sete grandes expedições navais entre 1405 e 1433. Segundo fontes chinesas, algumas frotas chegaram à costa da África Oriental (Mogadíscio, Brava, Melinde). O tamanho dos seus navios é contestado, e até onde foi para sul é debatido. Em qualquer caso, a porcelana chinesa e as girafas africanas mostram que os dois mundos estavam em contacto.',
  { img: 'sua-girafa-ming', leg: 'Girafa com tratador, pintura chinesa do século XVI segundo o Museu de Arte da Filadélfia; evoca a girafa oferecida à corte Ming em 1414. A atribuição a Shen Du não é aceite como certa pelo museu.' },
  { img: 'sua-zheng-he', leg: 'Estátua moderna de Zheng He no templo Sam Po Kong, Semarang, Indonésia.' },
  { h: 'Vasco da Gama (c. 1460–1524)' },
  'O navegador português que em 1497–99 abriu a rota marítima para a Índia. Na costa da África Oriental parou em Moçambique, Mombaça (onde encontrou hostilidade) e Melinde (onde o governante o acolheu e lhe deu um piloto). Em 1502, numa segunda viagem, tornou Kilwa tributária de Portugal.',
  { img: 'sua-vasco-da-gama', leg: 'Retrato de um cavaleiro, dito Vasco da Gama, mestre português desconhecido, 1525–1550; Museu Nacional de Arte Antiga, Lisboa.' },
  { h: 'D. Francisco de Almeida (c. 1450–1510)' },
  'O primeiro vice-rei português da Índia (1505–09). Em 1505, a caminho da Índia, tomou Kilwa (24 de julho) e Mombaça (agosto). Construiu o forte de Santiago em Kilwa. Morreu em 1510 junto ao Cabo da Boa Esperança, morto por khoikhoi após um incidente, no regresso a Portugal.',
  { img: 'sua-almeida', leg: 'Retrato de D. Francisco de Almeida, autor desconhecido, após 1545; Museu Nacional de Arte Antiga, Lisboa.' },
  { h: 'Pêro da Covilhã' },
  'Espião e explorador português enviado por D. João II em 1487 para encontrar o reino cristão do Preste João e a rota das especiarias. Foi à Índia e, segundo a tradição, passou por Sofala, na costa da África Oriental, c. 1489–90, antes de voltar ao Cairo (os pormenores do itinerário são debatidos). Fixou-se mais tarde na Etiópia. Faz parte da pré-história portuguesa da rota marítima.',
  { h: 'Os investigadores modernos' },
  'A nossa imagem do mundo suaíli é obra de arqueólogos: **James Kirkman** (Gedi, a partir de 1948), **Neville Chittick** (Kilwa e Manda, anos 1950–60), **Mark Horton** (Shanga e Zanzibar, anos 1980), **Chapurukha Kusimba** (autor de *The Rise and Fall of Swahili States*, 1999), **Felix Chami** (costa e ilhas da Tanzânia) e, em Songo Mnara, **Jeffrey Fleisher** e **Stephanie Wynne-Jones** (desde 2009). Chittick, embora excelente escavador, interpretou a cultura como em grande parte persa, uma visão depois rejeitada pelos seus sucessores.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**Uma língua viva:** o suaíli, falado hoje por mais de 100 milhões de pessoas, a língua franca da África Oriental.',
    '**Um islão africano:** uma cultura costeira que fundiu elementos africanos, árabes, persas e indianos, e que continua viva.',
    '**Arquitetura de pedra:** as mais antigas cidades de pedra de coral da África a sul do Saara, com as suas mesquitas, palácios, casas e túmulos de pilar.',
    '**Um modelo de comércio sem conquista:** cidades que enriqueceram como intermediárias do oceano Índico.',
    '**Uma literatura:** a poesia suaíli (dos séculos XVII–XVIII nos manuscritos que sobrevivem) e as crónicas de Kilwa e Pate.',
    '**Uma lição sobre a história:** o debate sobre as suas origens mostra como o preconceito deformou o estudo de África.'
  ] },
  { h: 'Arte e artesanato' },
  'A arte suaíli é sobretudo arquitetónica e decorativa: coral e reboco esculpidos (mihrabs, nichos, túmulos), portas e mobiliário de madeira esculpida (sobretudo em Lamu, mais tarde), joias e trabalhos de contas, tecidos e cestaria, e a poesia e o canto da costa. A porcelana e o vidro importados faziam também parte da decoração da casa.',
  { h: 'Arquitetura: pedra de coral' },
  'Os construtores suaílis usavam **rocha de coral** e cal para erguer mesquitas com cúpulas e abóbadas, casas com pátios e nichos, palácios como Husuni Kubwa e altos túmulos de pilar. São formas originais, diferentes das da Arábia ou da Pérsia, e desenvolveram-se a partir de técnicas locais (como o uso de postes de mangal nos tetos).',
  { img: 'sua-ilha-mocambique', leg: 'Fortaleza de São Sebastião, Ilha de Moçambique.' },
  { h: 'A redescoberta do mundo suaíli' },
  'Viajantes e funcionários europeus descreveram as ruínas a partir do século XIX. **James Kirkman** iniciou a escavação científica de Gedi em 1948, **Neville Chittick** escavou Kilwa (1958–65) e Manda (anos 1960), e nos anos 1980 **Mark Horton** mostrou em Shanga que os primeiros habitantes eram africanos. Desde os anos 1990, estudiosos tanzanianos e quenianos (Chami, Kusimba e outros) e novos trabalhos em Songo Mnara mudaram de novo o quadro, e a investigação de ADN (2023) acrescentou um novo nível de prova. Até aos anos 1970, muitos livros apresentavam os suaílis como um povo «árabe» ou «persa»; hoje a perspetiva africana é a norma.',
  { h: 'Onde visitar' },
  { tabela: { cab: ['Local', 'País', 'Nota'], linhas: [
    ['Kilwa Kisiwani e Songo Mnara', 'Tanzânia', 'UNESCO 1981 (em Perigo 2004–2014): Grande Mesquita, Husuni Kubwa, forte Gereza; Songo Mnara de barco'],
    ['Cidade velha de Lamu', 'Quénia', 'UNESCO 2001: a cidade suaíli viva mais antiga; Museu de Lamu (trompas siwa, portas)'],
    ['Ruínas de Gedi', 'Quénia', 'UNESCO 2024: cidade em ruínas na floresta; túmulo de pilar'],
    ['Forte Jesus, Mombaça', 'Quénia', 'UNESCO 2011: forte português (1593–96), museu'],
    ['Melinde', 'Quénia', 'Padrão de Vasco da Gama; capela portuguesa'],
    ['Ilha de Moçambique', 'Moçambique', 'UNESCO 1991: fortaleza portuguesa de São Sebastião, antiga cidade suaíli'],
    ['Zanzibar (Kizimkazi, Unguja Ukuu)', 'Tanzânia', 'Mesquita de Kizimkazi (inscrição de 1107; edifício reconstruído no século XVIII); Cidade de Pedra (século XIX)'],
    ['Mogadíscio', 'Somália', 'Mesquita de Fakhr al-Din (1269); a situação de segurança limita as visitas']
  ] } }
];

const quiz = [
  { p: 'De onde vem o nome «suaíli»?', op: ['De uma palavra persa para «ilha»', 'Do árabe *sawāḥil*, «as costas»', 'Do nome de um rei de Kilwa', 'De uma palavra portuguesa para «marinheiros»'], certa: 1, exp: 'Suaíli vem do árabe sawāḥil, plural de sāḥil («costa»): «o povo das costas».' },
  { p: 'Que tipo de língua é o suaíli?', op: ['Uma língua semita, como o árabe', 'Uma língua indo-europeia', 'Uma língua bantu com muitos empréstimos árabes', 'Um crioulo de português'], certa: 2, exp: 'O suaíli é uma língua bantu; os empréstimos árabes são muitos, mas a gramática e o vocabulário de base são bantu.' },
  { p: 'O que dizia a lenda dos «shirazi» sobre a origem das cidades suaílis?', op: ['Que foram fundadas por marinheiros portugueses', 'Que foram fundadas por príncipes persas de Xiraz', 'Que foram fundadas por almirantes chineses', 'Que vieram do Grande Zimbabwe'], certa: 1, exp: 'A Crónica de Kilwa diz que um príncipe de Xiraz fundou a dinastia Shirazi. A arqueologia mostra que as cidades nasceram de comunidades africanas.' },
  { p: 'As escavações de que arqueólogo em Shanga (anos 1980) ajudaram a mostrar a origem africana das cidades suaílis?', op: ['Howard Carter', 'Mark Horton', 'Leonard Woolley', 'Heinrich Schliemann'], certa: 1, exp: 'As escavações de Mark Horton em Shanga, na ilha de Pate, encontraram colonos africanos que só aos poucos adotaram o islão e a construção em pedra.' },
  { p: 'Porque era tão importante a monção?', op: ['Tornava o mar calmo', 'Os seus ventos sazonais levavam os dhows a África e de volta', 'Regava as minas de ouro', 'Mantinha os piratas afastados'], certa: 1, exp: 'A monção de nordeste trazia os navios da Arábia e da Índia; a de sudoeste levava-os de volta.' },
  { p: 'Que material se usava nos edifícios de pedra das cidades suaílis?', op: ['Blocos de granito', 'Mármore', 'Rocha de coral e argamassa de cal', 'Tijolo cozido'], certa: 2, exp: 'Os construtores usavam rocha de coral cortada de recifes mortos, com cal feita queimando coral; o coral fresco era esculpido para pormenores.' },
  { p: 'Que cidade suaíli era a mais rica, graças ao ouro de Sofala?', op: ['Gedi', 'Kilwa Kisiwani', 'Lamu', 'Manda'], certa: 1, exp: 'Kilwa controlava Sofala, o porto do ouro do planalto do Zimbabwe, e cunhava moeda própria.' },
  { p: 'Quem construiu o palácio de Husuni Kubwa em Kilwa (século XIV)?', op: ['Vasco da Gama', 'O sultão al-Hasan ibn Sulaiman', 'Ibn Battuta', 'D. Francisco de Almeida'], certa: 1, exp: 'Husuni Kubwa, com a sua piscina octogonal e cerca de cem salas, é atribuído a al-Hasan ibn Sulaiman (c. 1310–1333).' },
  { p: 'Que viajante marroquino visitou Mogadíscio, Mombaça e Kilwa por volta de 1331?', op: ['Marco Polo', 'Ibn Khaldun', 'Ibn Battuta', 'Zheng He'], certa: 2, exp: 'Ibn Battuta descreveu Kilwa como uma das cidades mais belas e bem construídas do mundo.' },
  { p: 'O que é DEBATIDO sobre Zheng He e a costa suaíli?', op: ['Se a China produzia porcelana', 'Até onde navegaram as suas frotas pela costa africana', 'Se Mogadíscio existia', 'Se há girafas em África'], certa: 1, exp: 'As fontes chinesas sugerem visitas a Mogadíscio, Brava e Melinde, mas a prova direta é escassa e a extensão das suas viagens é debatida.' },
  { p: 'Que cidade suaíli acolheu Vasco da Gama em 1498 e lhe deu um piloto para a Índia?', op: ['Mombaça', 'Kilwa', 'Melinde', 'Songo Mnara'], certa: 2, exp: 'Melinde, rival de Mombaça, acolheu Da Gama; Mombaça tinha-o recebido com hostilidade.' },
  { p: 'O que aconteceu em Kilwa a 24 de julho de 1505?', op: ['Chegou Ibn Battuta', 'Começou a construção da Grande Mesquita', 'A armada de D. Francisco de Almeida atacou e saqueou a cidade', 'O sultão converteu-se ao cristianismo'], certa: 2, exp: 'Almeida, com cerca de 500 homens, tomou e saqueou Kilwa e construiu o Forte de Santiago.' },
  { p: 'Qual destas palavras suaílis vem do português?', op: ['*Meza* (mesa)', '*Maji* (água)', '*Jambo* (olá)', '*Baraza* (banco)'], certa: 0, exp: 'Meza vem do português mesa; outras são mvinyo (vinho), bendera (bandeira) e pesa (peso).' },
  { p: 'O Forte Jesus, em Mombaça, Património da UNESCO desde 2011, foi construído…', op: ['Pelos omanitas no século XVIII', 'Pelos portugueses em 1593–96', 'Pelos sultões suaílis no século XIV', 'Pelos britânicos no século XIX'], certa: 1, exp: 'Foi projetado por Giovanni Battista Cairati e construído pelos portugueses em 1593–96; os omanitas tomaram-no em 1698.' },
  { p: 'O que sugeriu o estudo de ADN de 2023 sobre pessoas enterradas em cidades suaílis medievais e do início da era moderna?', op: ['Que eram todas de origem persa', 'Que tinham sobretudo ascendência feminina africana e alguma ascendência masculina asiática (em grande parte persa)', 'Que não tinham ascendência africana', 'Que vinham da China'], certa: 1, exp: 'Os resultados sugerem uma mistura por volta do ano 1000, com imigrantes (sobretudo homens) a integrarem-se na sociedade africana. Não apoiam a ideia de «colonização».' }
];

export default {
  id: 'suaili',
  cor: '#2f9f8f',
  emblema: '../assets/img/suaili.png',
  nome:    { pt: 'Cidades-estado suaílis', en: 'Swahili city-states' },
  periodo: { pt: 'c. 800 – 1500', en: 'c. AD 800 – 1500' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
