// DAS ORIGENS AOS ZHOU E AOS REINOS COMBATENTES — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura, mesmos ids de imagem).
// Cronologia: as datas anteriores a 841 a.C. são aproximadas e, para o Neolítico, Erlitou e a dinastia Xia, debatidas; usa-se a datação do Projeto de Cronologia Xia–Shang–Zhou (queda dos Shang em 1046 a.C.) como convenção e assinalam-se as alternativas. Datas anuais seguras só a partir de 841 a.C. (Gonghe) e, para Lu, de 722 a.C. (Anais de Primavera e Outono).
// Imagens: cada {img:'id'} procura o ficheiro  china/origens-zhou/img/id.jpg  (ver IMAGENS_CHINA_ORIGENS_ZHOU.md).
import EN from './dados-en.js';
import CRED from './creditos.js';
import { GRUPO } from '../grupo.js';

const visao = [
  { caixa: 'Em resumo', texto: [
    'Esta página conta a história da China desde as **primeiras aldeias agrícolas** (c. 7000 a.C.) até à véspera da **unificação de 221 a.C.**: o Neolítico, a cultura de **Erlitou** e a dinastia **Xia** (que continua em debate), os reis **Shang** e os seus **ossos oraculares**, a dinastia **Zhou** com o seu **Mandato do Céu**, o mundo em desagregação das **Primaveras e Outonos**, os sete reinos em guerra permanente dos **Reinos Combatentes**, a explosão de ideias das **Cem Escolas** e as reformas de **Shang Yang** que fizeram de Qin o vencedor.',
    'É o período em que se formam quase todos os elementos duradouros da civilização chinesa: a **escrita**, o **bronze ritual**, o culto dos antepassados, a ideia de que o poder tem de ser **merecido**, a ética de Confúcio, o Daoísmo, o Legalismo, o ferro, a moeda, a besta e o Estado burocrático. Mistura-se com mitos: onde a tradição e a arqueologia divergem, indicamo-lo.'
  ] },
  { img: 'cor-mapa-neolitico', leg: 'Mapa das culturas do Neolítico Médio da China.' },
  { h: 'Onde e quando' },
  'O cenário principal é a **Planície Central** (*Zhongyuan*), no curso médio e inferior do **rio Amarelo** (Huang He) e dos seus afluentes **Wei** e **Luo**, uma região de solo de **loess** fácil de lavrar, mas sujeita a cheias terríveis. À volta dela, crescem outros centros: o vale do **Yangtzé** (arroz, jade, bronzes), a bacia do **Sichuan**, o litoral de Shandong e as estepes do norte. No fim do período, o centro de gravidade já se alargou a todo o território entre a Manchúria e o sul do Yangtzé.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Neolítico', 'c. 7000 – 2000 a.C.', 'Painço e arroz, cerâmica, aldeias e depois cidades muradas (Yangshao, Hongshan, Liangzhu, Longshan, Taosi)'],
    ['Erlitou («Xia»?)', 'c. 1750 – 1500 a.C.', 'Primeiro grande centro palaciano; bronzes em moldes de peças; liga à lendária Xia em debate'],
    ['Shang', 'c. 1600 – 1046 a.C.', 'Reis-sacerdotes; Zhengzhou e Anyang; ossos oraculares; bronzes rituais'],
    ['Zhou Ocidental', 'c. 1046 – 771 a.C.', 'Mandato do Céu; feudos (*fengjian*); capital em Fengjing/Haojing'],
    ['Primaveras e Outonos', '770 – c. 476 a.C.', 'Reis Zhou sem poder; hegemonias (*ba*); Confúcio; início do ferro'],
    ['Reinos Combatentes', 'c. 475 – 221 a.C.', 'Sete grandes Estados; exércitos de massas; Cem Escolas; reformas legalistas; Qin vence']
  ] } },
  { h: 'Das aldeias aos primeiros Estados' },
  'A agricultura nasceu na China de forma independente: por volta de **7000 a.C.**, em **Jiahu** (Henan, bacia do rio Huai) já se cultivava **arroz**, e no norte, em sítios como Cishan, o **painço**; no Yangtzé, a domesticação do arroz foi um processo longo, ainda debatido nos pormenores. A **cultura de Yangshao** (c. 5000 – 3000 a.C.), com aldeias como **Banpo**, usava cerâmica pintada e cultivava **painço**; a de **Hongshan**, no nordeste, deixou santuários e jades; **Liangzhu** (c. 3300 – 2300 a.C.), junto ao delta do Yangtzé, construiu uma enorme cidade com diques e canais e produziu milhares de jades rituais.',
  { img: 'cor-banpo-tigela', leg: 'Tigela pintada com rosto humano e peixes, cultura Yangshao, estilo Banpo; Museu da Capital, Pequim.' },
  'No terceiro milénio a.C., a cultura de **Longshan** (c. 3000 – 1900 a.C.) espalha-se pelo norte, com cidades de **terra batida** e cemitérios onde se vê já uma enorme desigualdade: **Taosi** (Shanxi, c. 2300 – 1900 a.C.), com cerca de 280 hectares, tem uma estrutura que alguns investigadores interpretam como um **observatório**, e **Shimao** (Shaanxi) tinha muralhas de pedra. Aqui nascem as chefias poderosas de que sairão os primeiros Estados.',
  { img: 'cor-longshan-gaobei', leg: 'Taça de pé alto em cerâmica negra de paredes finas, cultura Longshan; Museu de Shandong, Jinan.' },
  { img: 'cor-ai-aldeia-neolitica', leg: 'Aldeia neolítica Yangshao junto ao rio Amarelo, c. 4500 a.C. Ilustração gerada por IA.' },
  { h: 'Mito, tradição e história' },
  'Os chineses das épocas seguintes escreveram uma história contínua, mas as suas primeiras páginas são **tradição**: os Três Soberanos e os Cinco Imperadores (Huangdi, Yao, Shun), **Yu o Grande**, que teria domado as cheias, e a dinastia **Xia**. As principais fontes escritas são o *Shujing* («Livro dos Documentos»), o *Zuozhuan* («Comentário de Zuo»), o *Guoyu*, os *Anais de Bambu* e, sobretudo, o **Shiji** de **Sima Qian** (c. 100 a.C.), que dá uma lista de reis Xia e Shang. Para os **Shang** existem, desde 1899, textos contemporâneos (os ossos oraculares) que confirmam em grande parte a lista de reis de Sima Qian, o que dá confiança à tradição **a partir dessa época**; para os Xia não existe nenhuma inscrição contemporânea.',
  { h: 'O fio condutor' },
  'Ao longo de quase 2000 anos, a China passa de pequenas chefias a um sistema de Estados e, no fim, a um só império. Cinco ideias organizam esta página:',
  { lista: [
    '**Do culto dos antepassados ao poder justificado:** os Shang governam por serem os descendentes do deus Di e dos antepassados reais; os Zhou dizem que governam por **mandato do Céu**, que se pode perder.',
    '**Da família ao Estado:** o sistema de feudos Zhou baseava-se no parentesco; os Reinos Combatentes substituem-no por funcionários, impostos e exércitos de massas.',
    '**Da aristocracia ao mérito:** os guerreiros em carro, de sangue nobre, dão lugar à infantaria camponesa recrutada e premiada por mérito.',
    '**Do bronze ao ferro:** a fundição do ferro (desde cerca de 500 a.C.) muda a agricultura, as armas e a guerra.',
    '**Do ritual à filosofia:** a crise política provoca o debate das Cem Escolas sobre como governar e viver.'
  ] },
  { h: 'Porque importam' },
  { lista: [
    '**A escrita chinesa** mais antiga que se conhece (ossos oraculares, c. 1250 a.C.) é o antepassado direto da escrita de hoje.',
    '**O Mandato do Céu** foi invocado, para justificar ou condenar governantes, durante três mil anos.',
    '**Confúcio, Laozi, Mozi, Han Fei** moldaram a política, a ética e a arte do Extremo Oriente.',
    '**O Estado de Qin**, preparado neste período, criou o modelo de império centralizado que durou até 1912.',
    '**Os bronzes, jades e textos** deste período estão entre as obras mais notáveis da Antiguidade.'
  ] },
  { h: 'Hoje' },
  'Esta é a fase da história chinesa em que a arqueologia mais tem mudado o que sabíamos: os ossos oraculares (1899), o túmulo de **Fu Hao** (1976), os sinos de **Zeng** (1978), os manuscritos de bambu de **Guodian** (1993) e, desde 2019, **Liangzhu** (Património Mundial) e as novas fossas de **Sanxingdui** continuam a reescrever os capítulos iniciais. Os grandes textos da época, como os *Analectos* ou o *Daodejing*, continuam a ser lidos no mundo inteiro.'
];

const linha = [
  'Esta linha do tempo segue a história desde o Neolítico até à véspera de 221 a.C. As datas anteriores a 841 a.C. são aproximadas; para Xia, Shang e primeiros Zhou seguimos as datas do Projeto de Cronologia Xia–Shang–Zhou (1046 a.C. para a queda dos Shang), embora outros autores proponham valores diferentes. O que é lenda aparece assinalado.',
  { linha: [
    { d: 'c. 7000 a.C.', t: 'Jiahu: arroz, cerâmica e flautas de osso', x: 'Em Jiahu, Henan, há casas, cerâmica, arroz e **flautas de osso** com furos. Encontraram-se também sinais gravados em carapaças de tartaruga; a sua natureza é debatida, e não são uma escrita comprovada.' },
    { d: 'c. 5000 – 3000 a.C.', t: 'Yangshao', x: 'A cultura de **Yangshao** vive em aldeias, como **Banpo** (perto de Xi’an), de casas semienterradas, com cerâmica pintada e cultivo de painço. Longe, no nordeste, a cultura de Hongshan eleva santuários e talha jades.' },
    { d: 'c. 3300 – 2300 a.C.', t: 'Liangzhu: diques, arroz e jade', x: 'No sul, em Zhejiang, a cultura de **Liangzhu** constrói uma cidade com diques e canais e produz *cong* e *bi* de jade com o motivo de uma divindade com cabeça de animal. O seu sistema de diques e reservatórios foi datado de c. 3000 a.C.' },
    { d: 'c. 2300 – 1900 a.C.', t: 'Taosi e Shimao', x: 'No norte, cidades de **terra batida** e muralhas de pedra mostram uma elite poderosa. Em **Taosi** há um conjunto de plataformas que se supõe ter servido para observar o nascer do sol; alguns arqueólogos identificam o local com a capital do lendário **Yao** (hipótese, sem prova).' },
    { d: 'c. 1750 – 1500 a.C.', t: 'Erlitou', x: 'Em Yanshi, Henan, os arqueólogos escavaram um grande centro com **palácios sobre plataformas de terra batida**, oficinas de bronze e objetos de jade e turquesa. Muitos chineses vêem aqui a capital Xia; muitos estrangeiros dizem que, sem textos, não se pode ligar o sítio a nenhuma dinastia citada. Continua em debate.' },
    { d: 'c. 1600 a.C.', t: 'Os Shang e as cidades de Zhengzhou e Yanshi', x: 'Segundo a tradição, **Tang** derrota o tirano Jie e funda os **Shang**. Arqueologicamente, a cultura de **Erligang** (c. 1600 – 1400 a.C.) espalha-se do rio Amarelo ao Yangtzé, e **Zhengzhou** tem uma muralha de terra batida de cerca de 7 km.' },
    { d: 'c. 1300 – 1046 a.C.', t: 'Anyang (Yinxu), a última capital Shang', x: 'A tradição liga a mudança para Yin ao rei **Pan Geng**. Em **Yinxu**, perto de Anyang, há palácios, oficinas, uma necrópole real e os arquivos de ossos oraculares. A cidade foi a capital durante cerca de 250 anos.' },
    { d: 'c. 1250 – 1192 a.C.', t: 'Wu Ding e os ossos oraculares', x: 'O rei **Wu Ding** governa cerca de 59 anos (datas do Projeto de Cronologia) e deixa o maior conjunto de inscrições sobre ossos e carapaças: guerras, colheitas, doenças, partos, sonhos. Uma das suas consortes, **Fu Hao**, comandava exércitos.' },
    { d: 'c. 1046 a.C.', t: 'Muye: os Zhou vencem os Shang', x: 'O rei **Wu** de Zhou, aliado a outros povos, derrota o último rei Shang, **Di Xin**, em Muye. A data de 1046 a.C. é a do Projeto de Cronologia, e é a mais usada; outras propostas vão de 1122 a 1027 a.C. Segundo as tradições, Di Xin suicidou-se.' }
  ] },
  { img: 'cor-ai-muye', leg: 'Cena imaginada da batalha de Muye, c. 1046 a.C. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 1040 a.C.', t: 'O duque de Zhou e Chengzhou', x: 'À morte do rei Wu, o seu irmão, o **duque de Zhou**, é regente do jovem rei **Cheng**, esmaga uma revolta de príncipes e de remanescentes Shang e funda **Chengzhou** (Luoyang) como capital oriental. Os parentes do rei recebem os feudos.' },
    { d: 'c. 1038 a.C.', t: 'O vaso He zun', x: 'O vaso de bronze **He zun** regista que o rei Cheng estabelece a sua residência em Chengzhou, e contém a mais antiga expressão conhecida de **«Zhongguo»** (中國, «o centro»), como designação da região central do domínio Zhou.' },
    { d: '841 a.C.', t: 'Revolta dos «habitantes da capital» e regência de Gonghe', x: 'O rei **Li** é expulso depois de uma revolta; governa um regente (**Gonghe**). É a primeira data da história chinesa **que todos os historiadores aceitam**, e a partir dela há cronologia anual contínua.' },
    { d: '771 – 770 a.C.', t: 'Queda dos Zhou Ocidentais', x: 'O rei **You** morre em combate contra uma coligação de nobres e de povos *Quanrong*, e a capital Haojing é saqueada. O seu filho, **Ping**, transfere a corte para o leste (Luoyi). Começam os Zhou Orientais. Segundo a lenda, You perdeu a confiança dos nobres ao acender balizas de fogo só para divertir a concubina Bao Si; é uma história tardia, quase certamente romanceada.' },
    { d: '685 – 643 a.C.', t: 'O duque Huan de Qi, primeiro hegemon', x: 'Com o seu ministro **Guan Zhong**, o duque Huan lidera a coligação dos Estados «contra os bárbaros» e «em defesa do rei». Nasce a figura do **hegemon** (*ba*).' },
    { d: '632 a.C.', t: 'Chengpu', x: 'O duque **Wen de Jin** derrota o poderoso Estado de **Chu** e torna-se hegemon.' },
    { d: 'c. 551 – 479 a.C.', t: 'Confúcio', x: 'O mestre **Kongzi** ensina no Estado de Lu. A tradição dá-lhe 551 a.C. como data de nascimento (há quem proponha 552). A obra dos seus discípulos, os *Analectos*, é o melhor testemunho das suas ideias.' },
    { d: '513 a.C.', t: 'As leis escritas em ferro', x: 'O *Zuozhuan* regista que o Estado de **Jin** fundiu o seu código penal em **tripés de ferro**; antes, em 536 a.C., **Zi Chan**, de Zheng, tinha gravado leis em bronze. É uma das primeiras referências escritas à fundição de ferro.' },
    { d: '506 – 473 a.C.', t: 'Wu e Yue', x: 'Os Estados do sul entram na política do norte: Wu ataca Chu (506 a.C.), Yue derrota Wu, e o rei **Goujian** de Yue anexa-o em 473 a.C. Foi o último dos «hegemons» tradicionais.' },
    { d: '453 – 403 a.C.', t: 'A partição de Jin', x: 'Três famílias (Han, Zhao, Wei) dividem o grande Estado de Jin; em 403 a.C. o rei Zhou reconhece-as como Estados. Muitos historiadores marcam aqui o início dos Reinos Combatentes; outros preferem 475 a.C., a data de Sima Qian.' }
  ] },
  { linha: [
    { d: 'c. 400 – 350 a.C.', t: 'Reformas nos grandes Estados', x: 'Wei, com o ministro **Li Kui** (c. 400 a.C.), Chu, com **Wu Qi**, e outros adotam impostos, exércitos pagos e leis escritas. Em 386 a.C., a família Tian toma o poder em Qi.' },
    { d: '356 – 338 a.C.', t: 'Shang Yang em Qin', x: 'O reformador **Shang Yang** reorganiza o Estado de Qin em duas vagas (356 e 350 a.C.): leis iguais e públicas, responsabilidade coletiva, 20 graus de honra militar, condados administrados por funcionários, nova capital em **Xianyang**. Morre em 338 a.C.' }
  ] },
  { img: 'cor-ai-lei-shang-yang', leg: 'Divulgação das reformas de Shang Yang no Estado de Qin, c. 350 a.C. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 334 – 323 a.C.', t: 'Os senhores tornam-se «reis»', x: 'Os governantes de Wei e Qi (334 a.C.), Qin (325) e, em resposta, Han, Zhao e Yan (c. 323) adotam o título de **wang** («rei»), até então reservado ao soberano Zhou; Chu usava-o já desde c. 704 a.C. O rei Zhou torna-se um símbolo sem poder.' },
    { d: '316 a.C.', t: 'Qin conquista Shu e Ba', x: 'O rei de Qin anexa as bacias do **Sichuan**, ricas em arroz e sal. Será a retaguarda e a despensa do Estado.' },
    { d: '307 a.C.', t: 'A cavalaria do rei Wuling de Zhao', x: 'O rei **Wuling** de Zhao manda os seus soldados usarem calças e arco montado, ao estilo dos nómadas da estepe: uma reforma militar que cria a primeira cavalaria regular chinesa.' },
    { d: 'c. 256 a.C.', t: 'Dujiangyan', x: '**Li Bing**, governador de Shu para Qin, constrói o sistema de irrigação de Dujiangyan, no rio Min, que continua a funcionar.' },
    { d: '260 a.C.', t: 'Changping', x: 'Qin derrota Zhao em Changping, a maior batalha da época. Os números das fontes (centenas de milhares de mortos, 400 000 prisioneiros executados) são muito provavelmente exagerados.' },
    { d: '256 a.C.', t: 'Fim dos Zhou', x: 'Qin ocupa a pequena corte Zhou, que só tinha o território à volta de Luoyang. A dinastia mais longa da história chinesa termina sem ruído.' },
    { d: '246 – 221 a.C.', t: 'Ying Zheng e a conquista dos seis reinos', x: 'Com 13 anos, **Ying Zheng** sucede em Qin (246 a.C.) e governa por si desde 238. Qin vence **Han** (230 a.C.), **Zhao** (228), **Yan** (226, com o fim dos últimos restos do Estado em 222), **Wei** (225), **Chu** (223) e **Qi** (221). Este é o momento em que esta página acaba e a de Qin e Han começa.' }
  ] },
  { h: 'A redescoberta' },
  'Em **1899**, segundo a tradição, o erudito **Wang Yirong** reparou que os «ossos de dragão» vendidos como remédio tinham inscrições; em **1928 – 1937** a Academia Sinica escavou Anyang; em **1963**, o vaso **He zun** foi encontrado em Baoji; em **1965**, a espada de Goujian; em **1972**, as tiras de bambu da *Arte da Guerra* de Yinqueshan; em **1976**, o túmulo de **Fu Hao**; em **1978**, os sinos de **Zeng**; em **1986**, as fossas de **Sanxingdui**; em **1993**, os manuscritos de **Guodian**; em **2003 – 2004**, o observatório de **Taosi**; em **2019**, **Liangzhu** foi inscrita na lista do Património Mundial.'
];

const mapa = [
  'Não havia «capital» da China. Cada dinastia ou Estado tinha as suas; os sítios abaixo são os que melhor documentam o período. Quase todos ficam no corredor do rio Amarelo, entre as bacias do rio Wei (Shaanxi) e as planícies do leste (Henan, Shandong), mas o mapa alarga-se muito nos Reinos Combatentes.',
  { tabela: { cab: ['Local', 'Época', 'Onde fica hoje', 'Para que ficou conhecido'], linhas: [
    ['Jiahu', 'c. 7000 – 5700 a.C.', 'Wuyang, Henan', 'Aldeia com flautas de osso e sinais em carapaças'],
    ['Banpo', 'c. 4700 – 3600 a.C.', 'Xi’an, Shaanxi', 'Aldeia Yangshao de painço e cerâmica pintada'],
    ['Liangzhu', 'c. 3300 – 2300 a.C.', 'Hangzhou, Zhejiang', 'Cidade de jade e arroz; Património Mundial 2019'],
    ['Taosi', 'c. 2300 – 1900 a.C.', 'Xiangfen, Shanxi', 'Cidade de Longshan com observatório'],
    ['Erlitou', 'c. 1750 – 1500 a.C.', 'Yanshi, Henan', 'Primeiros palácios e bronzes; «Xia»?'],
    ['Zhengzhou', 'c. 1600 – 1400 a.C.', 'Zhengzhou, Henan', 'Grande cidade murada de Erligang (Shang)'],
    ['Yinxu (Anyang)', 'c. 1300 – 1046 a.C.', 'Anyang, Henan', 'Capital Shang; ossos oraculares; túmulo de Fu Hao'],
    ['Sanxingdui', 'c. 1200 – 1000 a.C.', 'Guanghan, Sichuan', 'Bronzes de estilo único'],
    ['Fengjing e Haojing', 'Zhou Ocidental', 'perto de Xi’an', 'Capitais dos Zhou'],
    ['Chengzhou/Luoyi', 'Zhou', 'Luoyang, Henan', 'Capital oriental; mais tarde capital do Zhou Oriental'],
    ['Linzi', 'Qi, c. séc. IX – III a.C.', 'Zibo, Shandong', 'Capital de Qi; Academia Jixia'],
    ['Qufu', 'Estado de Lu', 'Shandong', 'Terra de Confúcio'],
    ['Xinzheng, Handan, Daliang', 'Reinos Combatentes', 'Henan, Hebei', 'Capitais de Han, Zhao e Wei'],
    ['Xianyang', 'Qin, desde 350 a.C.', 'perto de Xi’an', 'Capital de Qin; de lá se unificou a China'],
    ['Ying', 'Chu', 'Jingzhou, Hubei', 'Capital de Chu até 278 a.C.']
  ] } },
  { h: 'Erlitou: o primeiro palácio' },
  'Em **Erlitou**, na bacia do rio Luo, os arqueólogos encontraram uma cidade com ruas, **palácios** sobre plataformas de terra batida (o maior com cerca de 100 m de lado), oficinas de **bronze**, de turquesa e de cerâmica, e túmulos de elite com objetos de jade e **turquesa**. A população terá chegado, no auge, a algumas dezenas de milhares de pessoas (estimativa). Os vasos de bronze são os mais antigos da China feitos em **moldes de peças**. Pode ter sido a capital da dinastia Xia, ou de um Estado anterior aos Shang sem nome conhecido.',
  { img: 'cor-erlitou-turquesa', leg: 'Objeto em forma de dragão feito de turquesa e sino de bronze, provenientes de Erlitou.' },
  { img: 'cor-ai-erlitou', leg: 'Reconstituição conjetural de um palácio de Erlitou, c. 1600 a.C. Ilustração gerada por IA.' },
  { h: 'Zhengzhou e Anyang: as cidades dos Shang' },
  'A cidade murada de **Zhengzhou**, de c. 1600 – 1400 a.C., tinha uma muralha de terra batida de cerca de 7 km e oficinas de bronze fora das muralhas. Os Shang mudaram de capital várias vezes; a última, a partir de c. 1300 a.C., foi **Yin**, hoje **Yinxu**, perto de Anyang. Escavado desde 1928, o sítio mostra um bairro de palácios e templos, oficinas de bronze, osso e jade, e, a noroeste, uma necrópole de **tumbas reais**, com sacrifícios humanos e de animais, carros e cavalos. Foi inscrito no Património Mundial em 2006.',
  { img: 'cor-zhengzhou-muralha', leg: 'Vestígio da muralha oriental de terra batida da cidade Shang de Zhengzhou.' },
  { img: 'cor-yinxu-palacio', leg: 'Fundações de um palácio Shang em Yinxu, Anyang, com marcadores modernos do sítio arqueológico.' },
  { h: 'Sanxingdui: outro mundo' },
  'Em Sichuan, a mais de 1000 km do rio Amarelo, a cultura de **Sanxingdui** enterrou, em fossas rituais, **máscaras** de bronze com olhos salientes, uma estátua de cerca de 2,6 m e uma «árvore sagrada» de bronze, além de marfim e jade. Não se encontrou escrita. Mostra que **a China antiga não foi apenas o rio Amarelo**: houve vários centros culturais com intercâmbios entre si.',
  { img: 'cor-sanxingdui-estatua', leg: 'Estátua de bronze de pé, Sanxingdui (Museu de Sanxingdui)' },
  { h: 'Os Zhou: capitais e feudos' },
  'Os Zhou começaram como povo do vale do rio Wei, e a sua capital foi o par de cidades **Fengjing** e **Haojing**, perto da atual Xi’an. Depois da vitória sobre os Shang, instalaram parentes e aliados em feudos por todo o território: **Lu** (para o duque de Zhou), **Qi** (para Jiang Ziya), **Jin**, **Yan**, **Wei**, e **Song** (os descendentes dos Shang). A segunda capital, **Chengzhou** (Luoyang), controlava a Planície Central.',
  { img: 'cor-mapa-zhou', leg: 'Mapa da planície do Norte da China no período dos Zhou Ocidentais, com Estados e sítios arqueológicos.' },
  { h: 'Os Estados das Primaveras e Outonos' },
  'As crónicas mencionam cerca de **148** Estados ao longo do período (muitos eram pequenas cidades-Estado com um senhor e um território à volta), dos quais cerca de 128 acabaram absorvidos pelos quatro maiores. Em dois séculos e meio, os maiores (**Jin, Qi, Chu, Qin**, mais tarde **Wu** e **Yue**) engoliram a maior parte dos outros. O mapa desta época mostra, no centro, os Estados «Huaxia» (Lu, Song, Zheng, Wei) rodeados de potências periféricas: Qin a oeste, Jin a norte, Chu a sul, Qi a leste.',
  { img: 'cor-mapa-primaveras', leg: 'Mapa dos Estados na transição das Primaveras e Outonos para os Reinos Combatentes, século V a.C.' },
  { h: 'Os sete reinos' },
  'Em c. 350 a.C., sobravam sete grandes Estados: **Qin** (oeste, vale do Wei), **Han, Wei e Zhao** (centro, herdeiros de Jin), **Qi** (leste, Shandong), **Yan** (nordeste, perto da atual Pequim) e **Chu** (sul, o maior, do Yangtzé ao Huai). Estados menores, como **Zhongshan**, **Song** e **Lu**, resistiram até serem engolidos.',
  { img: 'cor-mapa-combatentes', leg: 'Mapa dos Reinos Combatentes c. 260 a.C.' },
  { h: 'Cidades dos Reinos Combatentes' },
  'As capitais cresceram: **Linzi**, em Qi, tinha, segundo uma fonte tardia, 70 000 famílias (estimativa duvidosa), e uma Academia (**Jixia**) que recebia estudiosos de toda a parte. **Handan** (Zhao), **Daliang** (Wei) e **Ying** (Chu) eram centros comerciais. A população urbana era recrutada para a guerra e para pagar impostos, e os mercados, a moeda e os artesãos independentes multiplicaram-se.',
  { h: 'Canais, irrigação e muralhas' },
  'A guerra deu origem a grandes obras públicas. Os Estados cavaram **canais** para transporte e irrigação: o Hangou (486 a.C.), que ligou o Yangtzé ao rio Huai por ordem do rei de Wu, o Honggou (Wei, c. 360 a.C.), o **canal de Zheng Guo** (246 a.C.), que irrigou o vale do Wei, e o **Dujiangyan** (c. 256 a.C.), em Sichuan, que dividiu o rio Min sem barragem: o fluxo é repartido por um dique em forma de «focinho de peixe» e continua em uso. Os Estados do norte (Qi, Wei, Zhao, Yan, Qin) levantaram também **muralhas** de terra batida nas fronteiras; no futuro, algumas serão aproveitadas na Grande Muralha.',
  { img: 'cor-dujiangyan', leg: 'Dujiangyan, rio Min, Sichuan' }
];

const sociedade = [
  { h: '1. Os reis Shang e o poder' },
  'O rei **Shang** era, antes de tudo, o chefe do culto: era ele quem «falava» com os antepassados reais e com **Di**, o «Senhor do Alto», para que a colheita, a chuva e a guerra corressem bem. O reino era uma rede de **cidades** e territórios aliados ou vassalos em torno de uma capital, em vez de um Estado de fronteiras definidas; os nobres chefiavam exércitos de parentes e de camponeses. Os cargos faziam-se por parentesco, e as mulheres da casa real podiam ter terras, comandar e presidir a rituais, como **Fu Hao**.',
  { img: 'cor-ai-corte-shang', leg: 'Oferenda ritual numa corte Shang, c. 1200 a.C. Ilustração gerada por IA.' },
  { h: 'Ossos oraculares' },
  'Os Shang faziam perguntas aos antepassados e à natureza gravando-as em **omoplatas de boi** e **plastrões de tartaruga**. Aplicava-se um ponteiro quente em cavidades preparadas, o osso fendia-se, e o adivinho lia as fendas. O texto registava a pergunta («Vai chover nos próximos dez dias?»), por vezes a resposta e, mais raramente, o resultado. Já foram encontrados mais de **150 000** fragmentos, com cerca de **4000 a 4500** caracteres diferentes, dos quais só cerca de 1500 a 2000 foram decifrados com segurança. O sistema de escrita já é maduro, o que indica uma longa evolução anterior, de que não restam provas escritas (talvez em bambu ou madeira, que apodrecem).',
  { img: 'cor-osso-oracular', leg: 'Plastrão de tartaruga com inscrição oracular Shang' },
  { h: '2. Os Zhou: Mandato do Céu e feudos' },
  'Depois de vencerem os Shang, os Zhou tiveram de explicar porque um povo «menor» tinha derrubado a casa reinante. A resposta foi o **Mandato do Céu** (*Tianming*): o **Céu** (*Tian*), poder moral e impessoal, confere o direito de governar a quem tem **virtude** (*de*), e retira-o a quem governa mal. Os Shang, dizia-se, tinham perdido o mandato por excesso de bebida e de crueldade. A ideia está já nas inscrições dos bronzes e no *Shujing*. Foi mudando de uso ao longo de milénios: justificava revoltas vitoriosas, mas obrigava também os reis a governar bem.',
  'O sistema político, chamado **fengjian** (às vezes traduzido por «feudalismo», embora seja diferente do europeu), repartia o território por parentes e aliados do rei, que recebiam terras, o direito de governar e deviam serviço militar, tributo e presença nas cerimónias. A coesão assentava no **parentesco** (*zongfa*): o filho mais velho da esposa principal herdava o título, os outros formavam ramos secundários, e o culto dos antepassados ligava os clãs. Com o tempo, as linhagens afastaram-se do rei e começaram a competir.',
  { img: 'cor-ai-investidura', leg: 'Cerimónia imaginada de investidura de um senhor Zhou, c. 1000 a.C. Ilustração gerada por IA.' },
  { img: 'cor-he-zun', leg: 'Vaso ritual He zun, bronze dos Zhou Ocidentais iniciais; Museu dos Bronzes de Baoji.' },
  { h: '3. Classes sociais' },
  'A sociedade Zhou tinha cinco níveis principais. No topo, o **rei** (*tianzi*, «Filho do Céu») e os **senhores** (*zhuhou*); depois os **altos nobres** (*qing, dafu*), que ocupavam os cargos; os **shi**, nobres de baixa categoria, guerreiros e depois funcionários e eruditos; os **camponeses livres** (*shumin*), a grande maioria; e, abaixo, **servos e escravos**, vindos de dívidas, castigos ou prisioneiros de guerra. A distinção era marcada por privilégios rituais: o número de *ding* num funeral, o tipo de música, o de carro.',
  'Nas **Primaveras e Outonos** e nos **Reinos Combatentes**, esta hierarquia desfez-se: famílias de ministros usurparam os tronos (Jin, Qi), os **shi** passaram a viver do saber (conselheiros, professores, estrategas), e homens de origem modesta, como o diplomata **Su Qin**, ou generais promovidos por mérito, como **Bai Qi**, subiram nos cargos. Foram as classes comerciantes e artesãs que mais cresceram.',
  { h: '4. Família e mulheres' },
  'A família, patrilinear, era a unidade de cultos, de propriedade e de trabalho. O chefe de família comandava, e o culto dos antepassados, que só os descendentes masculinos faziam, dava importância ao filho. As mulheres entravam na família do marido, e o seu destino dependia de ligações políticas e do nascimento de herdeiros; nos Shang, algumas tiveram poder próprio (Fu Hao), e na época Zhou são numerosas as **princesas** que selam alianças. As fontes que descrevem os rituais familiares (*Yili, Liji*) são, em grande parte, **posteriores** e idealizam a época.',
  { h: '5. Religião: antepassados, Céu e espíritos' },
  'Na religião Shang, os mortos eram agentes poderosos: podiam trazer bênçãos e doenças, e por isso lhes faziam oferendas de comida, vinho e animais, e, nos casos mais solenes, **sacrifícios humanos**, sobretudo de prisioneiros de guerra. Os Zhou mantiveram o culto dos antepassados e deram menos importância ao sacrifício humano (embora tenha persistido em enterros de nobres durante séculos) e mais ao Céu, à moral e ao ritual. Havia também deuses da terra (*She*), dos rios, das montanhas, e o culto do rei ao Céu, nos solstícios.',
  { h: '6. Bronze: arte e poder' },
  'O **bronze** (cobre com estanho e chumbo) era o metal do poder e do ritual. Os artesãos chineses fundiam em **moldes de peças** de argila (o método de «cera perdida» só aparece na época das Primaveras e Outonos), o que permitia decorações densas de **taotie** (máscara de animal), dragões e padrões geométricos. Os tipos principais eram os de **comida** (*ding, li, gui*), de **vinho** (*jue, jia, zun, gu*) e de **água**. Os vasos serviam para oferendas e, quando eram grandes, mostravam poder: o **Houmuwu ding** (c. 1300 – 1100 a.C.), com cerca de **832 kg**, é o maior bronze antigo conhecido.',
  { img: 'cor-houmuwu-ding', leg: 'Houmuwu ding (Simuwu), Museu Nacional da China' },
  { img: 'cor-ai-fundicao-bronze', leg: 'Oficina de fundição de bronze por moldes seccionais em Yinxu, c. 1200 a.C. Ilustração gerada por IA.' },
  'No tempo dos Zhou, os bronzes passaram a ter **inscrições** longas, que registam nomeações, mercês, tratados e vitórias; são fontes históricas de primeira ordem. O vaso **Li gui** (c. 1046 a.C.) refere, segundo a leitura corrente, a vitória de Wu sobre os Shang, e o **He zun** (c. 1038 a.C.) a fundação de Chengzhou. Mais tarde, em Chu e Zeng, os bronzes passam a ser objetos de luxo: o **zun-pan** do marquês **Yi de Zeng** (c. 433 a.C.) é um dos exemplos mais refinados do método de cera perdida.',
  { img: 'cor-li-gui', leg: 'Vaso Li gui com inscrição sobre a vitória de Wu, Museu Nacional da China' },
  { img: 'cor-zunpan-zeng', leg: 'Zun-pan do marquês Yi de Zeng, Museu Provincial de Hubei' },
  { h: '7. Escrita e livros' },
  'A escrita é **logográfica**: cada carácter representa uma palavra ou sílaba, e muitos combinam um elemento de **sentido** com outro de **som**. Dos ossos oraculares (c. 1250 a.C.) passou-se à escrita em **bronze** dos Zhou e, nos Reinos Combatentes, às **formas regionais**, que Qin uniformizou depois de 221 a.C. Escrevia-se com pincel e tinta sobre **tiras de bambu** ou de madeira atadas com fio (o próprio carácter *ce*, «livro», desenha-as) e sobre **seda**. Entre as tiras de bambu mais antigas conservadas estão as do túmulo do marquês de Zeng (c. 433 a.C.).',
  { img: 'cor-guodian-bambu', leg: 'Tiras de bambu de Guodian, período dos Reinos Combatentes; Museu Provincial de Hubei.' },
  { img: 'cor-ai-escola-bambu', leg: 'Escriba do Estado de Chu a escrever em tiras de bambu, século IV a.C. Ilustração gerada por IA.' },
  'Os livros antigos mais importantes são o *Shijing* (**Livro das Odes**, 305 poemas, séculos XI – VI a.C.), o *Shujing* (**Documentos**), o *Yijing* (**Livro das Mutações**), os *Anais de Primavera e Outono* (Lu, 722 – 481 a.C.) e o *Zuozhuan*, a maior narrativa da época. A tradição atribui a Confúcio a edição de vários clássicos, mas **isso é debatido**. No sul, em Chu, desenvolveu-se uma poesia diferente, a dos ***Chuci*** («Cantos de Chu»), associada a **Qu Yuan**.',
  { h: '8. As Cem Escolas' },
  'A desordem política levou os «mestres» (*zi*) a pensar como se devia governar. O nome «Cem Escolas» é uma etiqueta posterior (dos historiadores Han), mas descreve bem uma época em que viajavam de corte em corte conselheiros de todas as ideias. As principais:',
  { tabela: { cab: ['Escola', 'Mestres', 'Ideia central'], linhas: [
    ['Confucionismo', 'Confúcio, Mêncio, Xunzi', 'Governar pelo exemplo moral e pelo ritual; piedade filial; educação'],
    ['Daoísmo', 'Laozi (tradicional), Zhuangzi', 'Seguir o **Dao** («o Caminho») natural; ação sem esforço (*wuwei*); desconfiança das regras'],
    ['Moísmo', 'Mozi e discípulos', 'Amor imparcial (*jian ai*), utilidade, oposição à guerra de agressão; defesa das cidades'],
    ['Legalismo', 'Shang Yang, Shen Buhai, Han Fei, Li Si', 'Leis (*fa*), técnicas (*shu*) e autoridade (*shi*) como base do Estado'],
    ['Escola da Guerra', 'Sun Tzu, Sun Bin', 'Vencer com planeamento e engano; evitar os cercos'],
    ['Yin-Yang', 'Zou Yan', 'O mundo como ciclo de forças opostas e de cinco fases'],
    ['Escola dos Nomes', 'Hui Shi, Gongsun Long', 'Lógica e paradoxos («um cavalo branco não é um cavalo»)'],
    ['Diplomatas', 'Su Qin, Zhang Yi', 'Alianças verticais e horizontais entre reinos'],
    ['Agricultores', 'Xu Xing', 'Todos, incluindo o rei, devem lavrar a terra']
  ] } },
  'Estas escolas competiram e influenciaram-se. Os **confucianos** e os **moístas** debatiam a justiça; os **daoístas** zombavam de ambos; os **legalistas** mostravam aos reis como ganhar. Na academia **Jixia**, em Qi, centenas de estudiosos eram sustentados pelo rei para discutir; Xunzi esteve entre os seus líderes. A página **Filosofia e religião** trata o tema em profundidade.',
  { h: '9. Economia: terra, ferro e moeda' },
  'A agricultura dominava. No norte, plantava-se **painço** e, mais tarde, **trigo**; no sul, **arroz**; usavam-se também soja, cânhamo e legumes. A partir de c. 500 a.C. o **ferro fundido** começou a ser usado em enxadas, relhas e machados: os chineses sabiam **fundir** o ferro (e não só forjá-lo), o que dava peças baratas e em série; só no fim do período se fez **aço**. O **arado puxado por bois**, a rega, o adubo e as rotações aumentaram a produção, e com ela a população e os exércitos.',
  { img: 'cor-ai-ferro', leg: 'Oficina de fundição de ferro num Estado dos Reinos Combatentes, século IV a.C. Ilustração gerada por IA.' },
  'No tempo dos Shang a moeda principal eram os **búzios** (cauri); no túmulo de Fu Hao havia mais de 6000. Nos Reinos Combatentes houve várias moedas de bronze: em forma de **pá** (*bu*, em Han, Wei e Zhao), de **faca** (*dao*, em Qi e Yan), de **búzio** (Chu) e as **redondas com buraco** (Qin e Zhou), de onde sairá a moeda de furo quadrado do império. O comércio de sal, de ferro, de seda e de laca enriqueceu mercadores; o Estado respondeu com **monopólios** e impostos sobre a terra e a população.',
  { img: 'cor-ai-campo', leg: 'Trabalho agrícola no Estado de Qin, século III a.C. Ilustração gerada por IA.' },
  { img: 'cor-moedas-pa-faca', leg: 'Moeda de bronze em forma de pá, Reinos Combatentes, Museu Nacional da China; a fotografia não inclui moedas em forma de faca.' },
  { h: '10. Medidas, leis e administração' },
  'Os Estados dos Reinos Combatentes criaram a administração moderna: **registo da população** e das terras, **impostos** em grão e trabalho, **distritos** (*xian*) e **comandâncias** (*jun*) governados por funcionários **nomeados e removíveis** pelo rei, e **códigos de leis** (os de Wei de **Li Kui**, c. 400 a.C., e os de Qin). Em 1975, em **Shuihudi**, foram achadas cerca de 1150 tiras de bambu de um funcionário de Qin (c. 217 a.C.) com leis e manuais de administração. Em Qin, **Shang Yang** mandou também padronizar medidas: o **sheng de Shang Yang** (344 a.C.), uma medida-padrão de volume, conserva-se em Xangai.',
  { img: 'cor-sheng-shang-yang', leg: 'Medida-padrão de volume (sheng) de Shang Yang, 344 a.C., Museu de Xangai' },
  { h: '11. Guerra: dos carros ao exército de massas' },
  'Na época **Shang** e **Zhou Ocidental**, a guerra era assunto da nobreza, que combatia em **carros de guerra** puxados por dois ou quatro cavalos (apareceram em Anyang, c. 1200 a.C., provavelmente vindos da estepe), com **lanças, machados-punhal** (*ge*) e arcos, acompanhados por infantaria de camponeses. Os exércitos tinham, segundo as fontes, milhares de homens; as cifras são pouco fiáveis. Nas **Primaveras e Outonos**, as batalhas eram curtas, com códigos de honra mais ou menos respeitados.',
  { img: 'cor-ai-carro', leg: 'Carro de guerra do período das Primaveras e Outonos, c. 600 a.C. Ilustração gerada por IA.' },
  'Nos **Reinos Combatentes**, tudo mudou. Os Estados recrutaram **camponeses** em massa (os exércitos de Qin, Chu ou Zhao podiam passar de 100 000 homens, mas as fontes antigas falam em muito mais), armados com **ferro** e com a **besta** de gatilho de bronze, mais eficaz do que o arco. A **cavalaria** (Zhao, 307 a.C.) substituiu o carro. As guerras eram longas e **cercos** de cidades muradas, com torres, aríetes e minas, tornaram-se comuns; o moísta **Mozi** e os seus discípulos eram especialistas em defender muralhas. As baixas, segundo as fontes, atingiram centenas de milhares, mas as cifras são exagero retórico.',
  { img: 'cor-ai-cavalaria', leg: 'Cavalaria do Estado de Zhao com equipamento de inspiração das estepes, c. 300 a.C. Ilustração gerada por IA.' },
  { img: 'cor-ai-cerco', leg: 'Cerco imaginado de uma cidade dos Reinos Combatentes, c. 280 a.C. Ilustração gerada por IA.' },
  { img: 'cor-espada-goujian', leg: 'Espada de Goujian, rei de Yue, Museu Provincial de Hubei' },
  { h: '12. Casa, comida e roupa' },
  'Os camponeses viviam em casas pequenas de **taipa** ou semienterradas, com telhado de palha, as elites em salões de madeira assentes em **plataformas de terra batida** (*hangtu*); só a partir dos Zhou Ocidentais surgem as **telhas** de barro, mais caras. A comida básica era o **painço** em papas, o **trigo** em grão cozido, o **arroz** no sul, com legumes, peixe e, nas festas, carne de porco, de boi, de carneiro e de cão. A bebida de cereal fermentada (**vinho**, *jiu*) ocupava lugar central em rituais e banquetes, ao ponto de os Zhou censurarem os Shang pelo seu excesso.',
  'A roupa era cruzada à frente (**yi**) e atada com cinto, em **cânhamo**, **ramie** e, para as elites, **seda**; o povo trazia peças simples, a elite vestia túnica e **saia** (*chang*), mais tarde peça única longa (*shenyi*). Em Zhao, em 307 a.C., o rei Wuling decretou o uso de **calças** e de roupa curta para os soldados (os chamados «trajes bárbaros», *hufu*). Usavam-se joias de **jade**, que se associava a virtude: «o cavalheiro compara a sua virtude ao jade».',
  { h: '13. Música, cultura e jogos' },
  'A música tinha função ritual e política. Os grandes conjuntos de **sinos de bronze** (*bianzhong*) e de **litofones** eram sinal de nobreza. No túmulo do marquês **Yi de Zeng** (c. 433 a.C., descoberto em 1977 – 1978) havia um conjunto de 64 sinos de bronze (mais um oferecido pelo rei de Chu), numa estrutura de madeira laqueada, além de litofones, **cítaras** (*qin, se*), flautas e **órgãos de boca** (*sheng*). Cada sino produz duas notas diferentes consoante o ponto onde se bate. Os jogos incluíam o **liubo** (um jogo de tabuleiro e dados) e, nos Reinos Combatentes, o **weiqi** (go) é mencionado nos *Analectos* e no *Zuozhuan*.',
  { h: '14. Ciência e saber' },
  'Os **ossos oraculares** já registam **eclipses** e uma contagem do tempo em ciclos de dez «troncos» e doze «ramos» (o ciclo de 60 dias). Os astrónomos dos Reinos Combatentes, como **Shi Shen** e **Gan De**, catalogaram estrelas; as crónicas registam a passagem do **cometa Halley** em 613 a.C. (identificação habitual). A matemática usava **varetas de contagem** e um sistema decimal já nos Shang. A medicina baseava-se na procura do equilíbrio entre **yin** e **yang**, e o *Huangdi Neijing* (obra reunida nos séculos finais da época e nos Han) descreve o qi e as agulhas; **Bian Que**, o mais antigo médico de nome conhecido (tradicional), é uma figura em parte lendária.',
  { h: '15. Cultura material e as últimas artes' },
  'Em **Chu**, a laca, a seda bordada e a escultura de madeira alcançaram um nível extraordinário; os túmulos de Hubei (**Zeng**, **Mashan**, **Baoshan**) são uma enciclopédia da arte do sul. O **jade** continuou a ser o material precioso (discos *bi*, tubos *cong*, pendentes), muitas vezes oferecido como presente diplomático. Nos Reinos Combatentes surgiram também espelhos de bronze, fivelas de cinto com incrustações e objetos influenciados pela arte das estepes.'
];

const personalidades = [
  'As figuras que se seguem são reais, salvo indicação em contrário. Quase tudo o que sabemos delas vem do *Shiji* de Sima Qian, do *Zuozhuan* e dos textos que lhes são atribuídos, escritos muitas vezes um século ou mais depois da sua morte. Quando há lenda ou dúvida, diz-se.',
  { h: 'Wu Ding e Fu Hao (c. 1250 a.C.)' },
  'O rei **Wu Ding** (reinado de cerca de 59 anos, segundo o Projeto de Cronologia) é o primeiro soberano chinês de quem existem textos contemporâneos em grande número. Consultou os antepassados sobre guerras contra os **Tufang** e outros vizinhos. A sua consorte **Fu Hao** aparece nos ossos oraculares a comandar exércitos e a presidir a rituais. O seu túmulo, intacto, descoberto em Anyang em 1976, continha mais de 460 bronzes, mais de 750 jades e mais de 6000 búzios, com **16 vítimas** de sacrifício.',
  { img: 'cor-fu-hao-coruja', leg: 'Zun em forma de coruja do túmulo de Fu Hao' },
  { h: 'Rei Wen, rei Wu e o duque de Zhou (séc. XI a.C.)' },
  'O **rei Wen** de Zhou, «o Rei Letrado», é pela tradição o criador da força da casa Zhou; o filho, o **rei Wu**, derrotou os Shang (c. 1046 a.C.). O irmão deste, **Dan, duque de Zhou**, foi regente do sobrinho Cheng, esmagou uma revolta e, segundo a tradição, criou os rituais e a organização do Estado. A sua figura serviu de modelo de ministro leal: Confúcio dizia sonhar com ele. Os pormenores dos feitos que lhe são atribuídos (a «criação dos ritos») são tradição posterior.',
  { h: 'Guan Zhong (m. 645 a.C.)' },
  'Primeiro-ministro de **Huan de Qi**. Segundo a tradição, reformou o exército, a fiscalidade e o comércio de sal e ferro, e fez de Qi o primeiro **hegemon**. O livro que leva o seu nome, o *Guanzi*, é uma compilação feita séculos depois, por vários autores.',
  { h: 'Confúcio (c. 551 – 479 a.C.)' },
  '**Kong Qiu**, o «Mestre Kong» (Kongzi), nasceu no Estado de Lu, de uma família nobre empobrecida. Foi professor, funcionário e conselheiro, e passou anos a viajar por várias cortes a oferecer ideias, sem grande sucesso. Defendia que o governo deve assentar na **virtude** do governante, no **ritual** (*li*), na **humanidade** (*ren*) e na **piedade filial** (*xiao*). Nada escreveu em seu nome: os *Analectos* foram recolhidos pelos discípulos e pelos discípulos destes, e a tradição de que editou os Clássicos é debatida.',
  { img: 'cor-confucio-wudaozi', leg: 'Confúcio, representação póstuma atribuída a Wu Daozi (Tang)' },
  { h: 'Sun Tzu e Sun Bin (séc. V – IV a.C.)' },
  '**Sun Wu**, o «Mestre Sun» (Sun Tzu), é o autor tradicional da *Arte da Guerra*, que a tradição liga ao reino de Wu. Os estudiosos duvidam da sua biografia e datam o texto dos Reinos Combatentes. Em 1972, em **Yinqueshan**, foram achadas tiras de bambu com dois textos: a *Arte da Guerra* de Sun Tzu e outro, atribuído a **Sun Bin**, que derrotou Wei em Maling (c. 341 a.C.), o que confirmou que se tratava de dois autores diferentes.',
  { h: 'Mozi (c. 470 – 391 a.C.)' },
  'Mestre de artesãos, fundou o **Moísmo**: pregava o **amor imparcial** (*jian ai*), que se deve estender a todos sem distinções de família, defendia a utilidade como critério de moral e condenava a **guerra de agressão**, embora ensinasse a defesa. Os seus discípulos formaram uma organização disciplinada e produziram os primeiros textos de lógica chineses. A escola desapareceu após os Qin, e só foi redescoberta pelos eruditos dos séculos XVIII e XIX.',
  { h: 'Laozi e Zhuangzi (tradicionalmente séc. VI e IV a.C.)' },
  '**Laozi** («o Velho Mestre») é, segundo Sima Qian, um arquivista de Zhou que escreveu o *Daodejing* ao partir para o Ocidente. A sua existência é **debatida**, e o texto foi compilado durante os Reinos Combatentes: os manuscritos de Guodian (c. 300 a.C.) mostram uma forma mais curta do livro. **Zhuangzi** (c. 369 – 286 a.C.) escreveu, com outros, uma coletânea de parábolas, como a do sonho da borboleta, onde se defende que as distinções entre vida e morte, certo e errado, são relativas.',
  { h: 'Mêncio (c. 372 – 289 a.C.)' },
  '**Meng Ke**, o discípulo (de segunda geração) mais influente de Confúcio, ensinou que a natureza humana é **boa** e que o governante que maltrata o povo perde o Mandato do Céu, podendo ser deposto. O livro com o seu nome narra conversas com reis de Liang e de Qi. Defendeu o sistema idealizado dos «campos em poço» (*jing tian*), cuja realidade histórica é duvidosa.',
  { img: 'cor-mencio', leg: 'Retrato póstumo de Mêncio, do álbum Retratos de Meio Corpo do Grande Sábio e dos Homens Virtuosos da Antiguidade; Museu Nacional do Palácio, Taipé.' },
  { h: 'Xunzi (c. 310 – c. 235 a.C.)' },
  'Confuciano de espírito realista, defendeu que a natureza humana é **má** (egoísta) e que só a educação e os rituais a modelam. Foi professor em **Jixia** e teve como alunos **Han Fei** e **Li Si**. O ensaio *Exortação ao Estudo* é um clássico da pedagogia chinesa.',
  { h: 'Shang Yang (c. 390 – 338 a.C.)' },
  'Nascido em Wey, serviu o duque **Xiao** de Qin (361 – 338 a.C.). As suas reformas (356 e 350 a.C.) criaram um Estado de camponeses-soldados, com responsabilidade coletiva entre vizinhos, **20 graus de honra militar**, fim dos privilégios de nascimento, impostos sobre o trabalho agrícola e condados administrados pelo rei. Segundo Sima Qian, para provar que a lei se cumpria, mandou oferecer prémios a quem mudasse um tronco de lugar. Com a morte do duque, os nobres, a quem tinha retirado privilégios, acusaram-no de traição; foi capturado e, segundo a tradição, esquartejado por carros (338 a.C.). As reformas ficaram.',
  { h: 'Rei Wuling de Zhao (r. 325 – 299 a.C.)' },
  'Em 307 a.C. mandou o exército de Zhao vestir-se e combater como os nómadas da estepe, com **calças** e **arco montado**, apesar da resistência dos nobres. Conquistou terras ao norte e levantou uma muralha. Abdicou em 299 a.C. e morreu em 295 a.C., num palácio cercado por uma revolta dos seus filhos (relato de Sima Qian).',
  { h: 'Qu Yuan (c. 340 – c. 278 a.C.)' },
  'Ministro e poeta de **Chu**, caiu em desgraça e foi exilado. A tradição diz que, ao saber da captura da capital Ying por Qin (278 a.C.), se afogou no rio Miluo. Atribuem-se-lhe poemas como o *Lisao* («Encontro com a dor»), nos *Chuci*. Os historiadores discutem quais lhe pertencem. O Festival do Barco-Dragão associa-se, por tradição, à sua morte.',
  { img: 'cor-qu-yuan', leg: 'Qu Yuan, de Chen Hongshou (séc. XVII)' },
  { h: 'Han Fei (c. 280 – 233 a.C.)' },
  'Príncipe do Estado de Han, aluno de Xunzi, juntou as ideias legalistas de Shang Yang (leis), Shen Buhai (técnicas de gestão dos ministros) e Shen Dao (autoridade) numa teoria única. Gago, escreveu em vez de falar. O rei de Qin, **Ying Zheng**, admirou os seus textos e tentou obtê-lo; em Qin, o seu antigo condiscípulo **Li Si**, por rivalidade, fez com que fosse preso, e Han Fei morreu na prisão (233 a.C.), segundo Sima Qian por veneno.',
  { h: 'Li Bing (séc. III a.C.)' },
  'Governador de Shu (Sichuan) para Qin, é associado pela tradição ao projeto de **Dujiangyan** (c. 256 a.C.), com que o rio Min foi dividido para irrigar a planície de Chengdu. Não se sabe quase nada sobre a sua vida, e a obra pode ter sido em parte iniciada por outros; mas o sistema, que se baseia em dividir e não em bloquear o rio, continua em uso.',
  { h: 'Ying Zheng, rei de Qin (259 – 210 a.C.)' },
  'Rei de Qin a partir de **246 a.C.** (com 13 anos), afastou o regente **Lü Buwei** e o intrigante Lao Ai (238 – 235 a.C.), e com os generais **Wang Jian** e **Wang Ben** e os conselheiros **Li Si** e **Wei Liao** conquistou os seis reinos rivais entre 230 e 221 a.C. Em 227 a.C. escapou a um atentado de **Jing Ke**, enviado por Yan. A sua vida como Primeiro Imperador, a partir de 221 a.C., é contada na página «Qin e Han: o primeiro império».'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**A escrita:** os caracteres chineses, que descendem das inscrições Shang, continuam em uso.',
    '**O Mandato do Céu:** a ideia de que o poder tem uma base moral, e de que se perde ao falhar, atravessou três mil anos de história chinesa.',
    '**Confúcio e os mestres:** o confucionismo, o daoísmo, o legalismo e o moísmo moldaram a política, a educação e as artes do Extremo Oriente.',
    '**O Estado burocrático:** distritos, registo da população, impostos, leis escritas e funcionários nomeados por mérito, criados nos Reinos Combatentes, são a base do império.',
    '**A economia do ferro:** a fundição do ferro e a agricultura intensiva sustentaram uma das maiores populações do mundo antigo.',
    '**A nação:** o sentimento de pertença à «Zhongguo» e à civilização *Huaxia* nasce aqui.'
  ] },
  { h: 'Arte' },
  'Os **bronzes** Shang e Zhou, com a sua mistura de rigor técnico e de simbolismo, são considerados as maiores obras de arte da Idade do Bronze. O **jade** manteve-se como material de prestígio durante milénios, e a **caligrafia**, que nasce com as inscrições em bronze e as tiras de bambu, tornou-se a primeira das artes chinesas. A poesia dos *Odes* e dos *Cantos de Chu* é a raiz de toda a literatura chinesa posterior.',
  { h: 'Arquitetura e urbanismo' },
  'Os edifícios eram de madeira sobre plataformas de terra batida, razão pela qual quase nada se conserva à superfície; a arqueologia reconstitui plantas de palácios e templos a partir de furos de pilares. A ideia de **cidade murada e quadrada**, com um eixo e uma planta ordenada (descrita no *Zhouli*), influenciou o planeamento das capitais posteriores, até Pequim.',
  { h: 'A receção moderna' },
  'No século XX, o movimento de **«dúvida da antiguidade»** (*Yigupai*, de Gu Jiegang) questionou a história dos Três Soberanos, dos Cinco Imperadores e dos Xia, e a descoberta dos ossos oraculares demonstrou que Sima Qian estava certo quanto aos Shang. Hoje, o **Projeto de Cronologia Xia–Shang–Zhou** (1996 – 2000) propõe datas para as três dinastias, e o projeto «Origens da Civilização Chinesa» procura ligar a arqueologia às lendas. A tensão entre ambos é um dos temas vivos da historiografia.',
  { h: 'Como sabemos o que sabemos' },
  { lista: [
    '**Ossos oraculares e bronzes inscritos:** textos contemporâneos (Shang e Zhou).',
    '**Textos transmitidos:** *Shujing*, *Zuozhuan*, *Shiji*, copiados e retocados ao longo dos séculos.',
    '**Textos escavados:** tiras de bambu e seda de túmulos (Guodian, Shuihudi, Yinqueshan, Zeng), sem edição posterior.',
    '**Arqueologia:** sítios, cemitérios, oficinas e restos de alimentos, que revelam o que os textos calam.'
  ] },
  { h: 'Onde visitar' },
  { lista: [
    '**Yinxu (Anyang)** e o **Museu do Yinxu**: o sítio da última capital Shang e o túmulo de Fu Hao.',
    '**Museu Nacional da China (Pequim)** e **Museu de Xangai**: bronzes Shang e Zhou, incluindo o Houmuwu ding.',
    '**Museu Provincial de Hubei (Wuhan)**: sinos e laca do marquês de Zeng, espada de Goujian.',
    '**Museu de Sanxingdui (Guanghan)**: máscaras e árvores de bronze.',
    '**Dujiangyan e Monte Qingcheng (Sichuan):** o sistema de rega, Património Mundial.',
    '**Qufu (Shandong):** o Templo, a Casa e o Cemitério de Confúcio, Património Mundial.',
    '**Liangzhu:** a cidade de jade, Património Mundial desde 2019.',
    '**Em Portugal:** o Museu do Oriente (Lisboa) e o Museu de Macau têm coleções de arte chinesa, sobretudo de épocas posteriores.'
  ] },
  { cit: 'O estudo não deve nunca parar. O gelo é feito de água, mas é mais frio do que a água.', fonte: 'Xunzi, «Exortação ao Estudo» (tradução livre)' }
];

const quiz = [
  { p: 'O que é um «osso oracular»?', op: ['Um amuleto de jade', 'Um instrumento musical de osso', 'Uma omoplata ou carapaça gravada e aquecida para consultar os antepassados', 'Um tipo de moeda'], certa: 2, exp: 'Os reis Shang faziam perguntas gravadas em ossos e carapaças, e liam as respostas nas fendas provocadas pelo calor.' },
  { p: 'Qual é o estatuto da dinastia Xia?', op: ['É tradicional; a ligação a Erlitou continua em debate', 'Está confirmada por inscrições contemporâneas', 'Foi fundada por Confúcio', 'É posterior aos Shang'], certa: 0, exp: 'Não há inscrições contemporâneas que a confirmem; Erlitou pode ser a sua capital ou um Estado sem nome.' },
  { p: 'Onde foi achado o túmulo intacto da consorte Fu Hao?', op: ['Em Xi’an', 'Em Qufu', 'Em Sanxingdui', 'Em Yinxu, Anyang'], certa: 3, exp: 'Foi descoberto em 1976 em Yinxu, e continha mais de 460 bronzes e cerca de 750 jades.' },
  { p: 'O que significava o «Mandato do Céu» para os Zhou?', op: ['O Céu dá e retira o direito de governar conforme a virtude do rei', 'Um imposto para o templo', 'O direito de herdar o trono', 'O calendário oficial'], certa: 0, exp: 'Foi a justificação da vitória dos Zhou sobre os Shang, em c. 1046 a.C.' },
  { p: 'Que vaso de bronze contém a mais antiga inscrição conhecida da expressão «Zhongguo»?', op: ['O Houmuwu ding', 'O Li gui', 'O He zun', 'O zun-pan de Zeng'], certa: 2, exp: 'O He zun, c. 1038 a.C., fala do rei Cheng a fundar a sua residência em Chengzhou, «no centro».' },
  { p: 'Qual é a data a partir da qual a cronologia chinesa é aceite como segura por todos?', op: ['1046 a.C.', '221 a.C.', '551 a.C.', '841 a.C.'], certa: 3, exp: '841 a.C., o início do regente Gonghe, é a primeira data em que há cronologia anual contínua.' },
  { p: 'Que acontecimento marca o início do período das Primaveras e Outonos (convenção)?', op: ['A morte de Confúcio', 'A queda do rei You e a mudança da corte Zhou para leste, em 771 – 770 a.C.', 'A unificação de Qin', 'A batalha de Muye'], certa: 1, exp: 'Os Zhou Orientais começam em 770 a.C. com a transferência para Luoyi.' },
  { p: 'Quem foi o primeiro «hegemon» da tradição?', op: ['O duque Huan de Qi', 'O rei Wuling de Zhao', 'Shang Yang', 'Ying Zheng'], certa: 0, exp: 'Com o ministro Guan Zhong, Huan de Qi liderou uma coligação de Estados em nome do rei (685 – 643 a.C.).' },
  { p: 'O que é o *Zuozhuan*?', op: ['Um tratado de guerra', 'Um manual de medicina', 'Uma narrativa histórica sobre o período das Primaveras e Outonos', 'Um livro de poemas'], certa: 2, exp: 'É a mais rica narrativa da época, associada aos Anais de Primavera e Outonos.' },
  { p: 'Qual destas escolas defendia que a natureza humana é boa?', op: ['O Legalismo', 'A Escola dos Nomes', 'O Moísmo', 'O Confucionismo de Mêncio'], certa: 3, exp: 'Mêncio defendia a bondade da natureza humana; Xunzi, a sua tendência para o mal.' },
  { p: 'O que defendia Mozi?', op: ['Leis duras', 'O amor imparcial e a oposição à guerra de agressão', 'A superioridade do ritual', 'O culto do Yin-Yang'], certa: 1, exp: '«Amor imparcial» (*jian ai*) e utilidade.' },
  { p: 'Quais foram as principais reformas de Shang Yang em Qin?', op: ['Leis iguais, 20 graus de mérito militar, condados e responsabilidade coletiva', 'Criar o exame imperial', 'Abolir o exército', 'Substituir o bronze pelo ferro'], certa: 0, exp: 'Em 356 e 350 a.C., fizeram de Qin um Estado de camponeses-soldados.' },
  { p: 'Que Estado criou a primeira cavalaria regular chinesa, em 307 a.C.?', op: ['Qin', 'Chu', 'Zhao', 'Qi'], certa: 2, exp: 'O rei Wuling de Zhao adotou as calças e o arco montado dos nómadas.' },
  { p: 'Qual é a melhor descrição do Dujiangyan?', op: ['Uma muralha do norte', 'Um sistema de irrigação no rio Min, em Sichuan, ainda em uso', 'Um palácio de Qin', 'Uma barragem do rio Amarelo'], certa: 1, exp: 'Obra atribuída a Li Bing, de c. 256 a.C.; divide o rio em vez de o bloquear.' },
  { p: 'Em que ano terminou a unificação de Qin, com a conquista de Qi?', op: ['256 a.C.', '246 a.C.', '221 a.C.', '202 a.C.'], certa: 2, exp: 'Em 221 a.C., Ying Zheng tornou-se Shi Huangdi, o «Primeiro Imperador».' }
];

export default {
  id: 'china',
  cor: '#b83a3a',
  emblema: '../../assets/img/china.png',
  grupo: { ...GRUPO, aqui: 'origens-zhou' },
  nome:    { pt: 'Das origens aos Zhou e aos Reinos Combatentes', en: 'From the origins to the Zhou and the Warring States' },
  periodo: { pt: 'c. 7000 – 221 a.C.', en: 'c. 7000 – 221 BC' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
