// ELAM — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas aproximadas, na «cronologia média». a.C. = antes de Cristo. Elam é uma civilização mal conhecida: muitas datas, localizações e interpretações são debatidas e vêm assinaladas como tal.
// Imagens: cada {img:'id'} procura o ficheiro  elam/img/id.jpg  (ver IMAGENS_ELAM.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    '**Elam** foi uma das mais antigas civilizações do mundo e a grande vizinha oriental da Mesopotâmia. Ocupou o sudoeste do atual Irão, com duas capitais históricas: **Susa**, na planície, e **Anshan**, nas montanhas. Durante mais de dois mil anos esteve ligada às cidades mesopotâmicas pela guerra, pelo comércio e pelo casamento. Teve uma das primeiras escritas do mundo, a **proto-elamita**, que ainda ninguém consegue ler, uma língua própria que não se parece com nenhuma outra conhecida e uma religião com deuses muito diferentes dos mesopotâmicos.',
    'Os elamitas não deixaram crónicas que cheguem até nós. A maior parte do que sabemos vem de textos dos seus vizinhos e inimigos, sumérios, acádios, babilónios e assírios, e de escavações que ainda deixam muitas perguntas por responder. Este é um dos temas desta página: **Elam é uma civilização grande e pouco conhecida**, e em muitos pontos os especialistas discordam.'
  ] },
  { img: 'ela-mapa-regiao', leg: 'Mapa moderno de localização aproximada de Elam entre a Mesopotâmia e o planalto iraniano; legendas em francês.' },
  { h: 'Onde ficava' },
  'O território elamita tinha dois mundos muito diferentes. A oeste, junto à Mesopotâmia, ficava a **Susiana** (a atual província do Cuzistão, no Irão): uma planície quente e fértil, regada pelos rios **Karkheh, Dez e Karun**, que desciam dos montes Zagros. Era uma prolongação natural da planície mesopotâmica, e a sua capital era **Susa**. A leste e a norte, nos Zagros, havia vales altos e frescos, com bosques, pastagens e passagens de montanha. A região de **Anshan**, no atual Fars, a oeste de Persépolis, era o centro das terras altas.',
  'Os elamitas chamavam à sua terra **Haltamti** (por vezes escrito Hatamti). O nome «Elam» vem da forma acádia *Elamtu* e passou, através da Bíblia, para as línguas europeias. Os sumérios escreviam o nome com o sinal que significa «alto» (NIM), uma referência ao planalto que ficava acima da planície. Um ponto debatido é se Elam foi sempre um estado único com capital em Susa ou, em muitas épocas, uma **confederação** de reinos e chefaturas, de planície e de montanha, com um soberano reconhecido como chefe. A segunda hipótese é hoje a mais aceite para várias épocas, mas a documentação é curta.',
  { img: 'ela-vaso-susa', leg: 'Copo de cerâmica pintada com íbex, Susa I, c. 4200–3800 a.C. Louvre.' },
  { h: 'Quando existiu' },
  'A história de Elam é longa e as divisões entre períodos não são consensuais, em parte porque os textos de algumas épocas faltam. Segue-se uma divisão habitual, na «cronologia média».',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Antes de Elam (Susa I e II)', 'c. 4200 – 3100 a.C.', 'Susa fundada como centro com plataforma monumental; cerâmica pintada; forte influência de Uruk na fase seguinte'],
    ['Proto-elamita', 'c. 3100 – 2700 a.C.', 'Escrita proto-elamita (ainda por decifrar); cultura espalhada de Susa a Anshan e ao planalto'],
    ['Elamita antigo', 'c. 2700 – 1500 a.C.', 'Dinastias de Awan, Simashki e Sukkalmah; contacto intenso com Sumérios, Acádios e Babilónios; elamita linear'],
    ['Elamita médio', 'c. 1500 – 1100 a.C.', 'Apogeu: Untash-Napirisha e Chogha Zanbil; Shutruk-Nahhunte e a campanha contra Babilónia'],
    ['Neo-elamita', 'c. 1100 – 539 a.C.', 'Séculos obscuros e depois guerras com a Assíria; destruição de Susa por Assurbanípal em 647 a.C.; integração no império persa']
  ] } },
  { h: 'Quem eram?' },
  'O elamita é uma **língua isolada**: não está claramente ligada a nenhuma outra família de línguas conhecida. Foi proposta uma ligação às línguas dravídicas da Índia («elamo-dravídico»), mas essa hipótese é rejeitada pela grande maioria dos especialistas. Não era língua semítica, como o acádio, nem indo-europeia, como o persa. Os elamitas **não eram persas**: os persas, de língua indo-iraniana, só chegaram ao sudoeste do Irão a partir de c. 1000 a.C. (a cronologia da chegada é debatida), e foram eles que acabaram por herdar a terra e a cultura elamitas.',
  { img: 'ela-tabuinha-protoelamita', leg: 'Tabuinha proto-elamita de Susa, c. 3100–2900 a.C. Louvre.' },
  { h: 'O que é pouco conhecido e debatido' },
  { lista: [
    '**A escrita proto-elamita** (c. 3100–2900 a.C.) **não foi decifrada.** Compreendem-se sobretudo os números e alguns sinais de objetos, mas não a língua.',
    '**O elamita linear** foi proposto como decifrado em 2022 por uma equipa franco-iraniana, e muitos aceitam as leituras, mas outros mantêm reservas.',
    '**A localização de várias cidades**, como Awan e Simashki, é desconhecida.',
    '**O sistema de sucessão ao trono**, em que parece ter havido herança entre irmãos ou do tio para o sobrinho filho da irmã, é muito discutido.',
    '**A ligação com Jiroft e Marhashi,** a leste, é uma hipótese, não uma certeza.',
    '**A sua história depois de 1000 a.C.** assenta em poucos textos nativos e quase sempre em relatos assírios, que são propaganda de guerra.'
  ] },
  { h: 'Porque importam' },
  { lista: [
    '**Escrita independente:** Elam teve uma das mais antigas escritas do mundo, criada talvez por influência da Mesopotâmia, mas com sinais próprios.',
    '**Ponte entre mundos:** esteve entre a Mesopotâmia, o planalto iraniano e o Golfo, e controlou rotas de metais, pedras e madeira.',
    '**Grande rival da Mesopotâmia:** saqueou Ur em 2004 a.C. e levou para Susa troféus como a estela de Naram-Sin e, provavelmente, o Código de Hamurabi.',
    '**Mulheres com poder:** as fontes elamitas mostram rainhas e herdeiras com um papel mais visível do que na Mesopotâmia.',
    '**Berço do império persa:** os reis persas de Anshan herdaram a terra, o elamita foi língua administrativa do império, e Susa foi capital aqueménida.',
    '**Chogha Zanbil:** o zigurate melhor conservado fora da Mesopotâmia e o primeiro sítio iraniano inscrito pela UNESCO (1979).'
  ] },
  { caixa: 'Elam hoje', texto: 'As ruínas de **Susa** (inscrita na UNESCO em 2015) e de **Chogha Zanbil** (1979) ficam no sudoeste do Irão, na província do Cuzistão. A cidade moderna de **Shush** ergue-se ao lado do antigo monte de Susa. Os grandes tesouros elamitas estão em museus de Paris e de Teerão.' },
  { img: 'ela-chogha-zanbil', leg: 'Zigurate de Chogha Zanbil, antiga Dur-Untash, Irão; vista atual.' }
];

const linha = [
  'Esta linha do tempo segue os acontecimentos principais da história elamita. As datas são aproximadas, e para várias épocas há mais de uma cronologia em uso. Quando algo é debatido, diz-se.',
  { linha: [
    { d: 'c. 4200 a.C.', t: 'Susa é fundada', x: 'No monte de Susa, junto ao rio Shavur, nasce uma povoação que em poucos séculos terá uma enorme **plataforma** de tijolo e um cemitério com milhares de sepulturas, de onde vêm cerâmicas pintadas de grande beleza. Ocupações menores já existiam na região antes.' },
    { d: 'c. 3800 – 3100 a.C.', t: 'Susa e a influência de Uruk', x: 'Em Susa aparecem selos, tabuinhas com sinais numéricos e objetos de estilo mesopotâmico. Os arqueólogos discutem se foi uma colónia de Uruk, uma influência cultural ou uma elite local que adotou modas do sul.' },
    { d: 'c. 3100 – 2900 a.C.', t: 'A escrita proto-elamita', x: 'Em Susa, escribas registam cereais, animais, têxteis e rações em tabuinhas com sinais próprios, **diferentes dos de Uruk**. Foram publicadas mais de 1400 tabuinhas de Susa e muitas outras de sítios do planalto. A língua desta escrita é desconhecida e **não foi decifrada**.' },
    { d: 'c. 2900 – 2700 a.C.', t: 'A escrita desaparece', x: 'O proto-elamita deixa de ser usado, e durante séculos não há textos em Elam, ou há muito poucos. Porque desapareceu é uma pergunta aberta: pode ter sido uma crise política, uma mudança de elite ou uma escrita presa a uma administração que acabou.' },
    { d: 'c. 2700 – 2600 a.C.', t: 'Elam nas fontes sumérias', x: 'Textos mesopotâmicos posteriores falam de guerras com Elam desde as primeiras dinastias, e a Lista Suméria dos Reis diz que **Enmebaragesi de Kish** venceu Elam. Esta tradição é tardia e em parte lendária, mas mostra que Elam era um vizinho conhecido desde muito cedo.' },
    { d: 'c. 2600 – 2100 a.C.', t: 'A dinastia de Awan', x: 'Uma lista de reis encontrada em Susa nomeia **doze reis de Awan**, o primeiro estado elamita de que se conhece a história. **Não se sabe onde ficava Awan** (hipóteses: nos Zagros, na zona de Ilam ou do Luristão, ou perto de Susa). Os nomes aparecem em listas e inscrições tardias, e a cronologia desta dinastia é incerta.' },
    { d: 'c. 2300 – 2200 a.C.', t: 'Acad domina Susa', x: 'Os reis de Acad, Sargão, Rimush e Manishtushu, conquistam Susa e Anshan e impõem o **acádio** como língua administrativa. O Elam é governado durante um tempo por governadores acádios, mas os reis locais não desaparecem.' },
    { d: 'c. 2250 a.C.', t: 'O tratado de Naram-Sin com Hita de Awan', x: 'O rei acádio Naram-Sin e o rei elamita Hita fazem um tratado escrito em **elamita cuneiforme**, o mais antigo texto longo conhecido nesta língua. Invoca os deuses de Elam, o que mostra a vontade de dar força religiosa ao acordo.' },
    { d: 'c. 2200 – 2100 a.C.', t: 'Elamita linear e Puzur-Inshushinak', x: 'Puzur-Inshushinak, governador de Susa sob Acad, torna-se rei independente, expande o domínio elamita e manda gravar inscrições em **elamita linear**, uma escrita diferente da cuneiforme. Esta escrita desapareceu pouco depois e só em 2022 foi proposta uma decifração, ainda discutida.' },
    { d: 'c. 2100 – 2020 a.C.', t: 'Ur III controla Susa', x: 'Os reis de Ur, Ur-Nammu e Shulgi, dominam Susa e a Susiana. Shulgi dá **filhas em casamento a governantes de Anshan e de Marhashi**, uma política de alianças em vez de pura conquista.' },
    { d: 'c. 2004 a.C.', t: 'Elam saqueia Ur', x: 'Uma coligação elamita, ligada ao rei de Simashki **Kindattu**, ataca e destrói Ur. O rei Ibbi-Sin é levado prisioneiro para Elam, e a estátua do deus Nanna é levada para Elam. É o fim da Terceira Dinastia de Ur.' },
    { d: 'c. 1900 – 1500 a.C.', t: 'A dinastia dos Sukkalmah', x: 'Os reis do Elamita antigo usam o título de **sukkalmah**, «grande regente», e governam com dois outros «regentes» (sukkal), um de Elam e outro de Susa, muitas vezes seus irmãos ou filhos. O início da dinastia é datado c. 1900 a.C., ou um pouco antes, consoante os autores. Os textos desta época são numerosos mas pouco claros.' },
    { d: 'c. 1835 – 1763 a.C.', t: 'Elamitas em Larsa e a guerra com Hamurabi', x: 'O chefe de origem elamita **Kudur-Mabuk** coloca os filhos no trono de Larsa, entre eles **Rim-Sin I**, que reinou mais de 60 anos. O sukkalmah **Siwe-palar-huppak** foi tratado com grande respeito na correspondência de Mari. Hamurabi da Babilónia derrota a coligação elamita e Larsa por volta de 1764–1763 a.C.' },
    { d: 'c. 1500 – 1400 a.C.', t: 'O início do Elamita médio', x: 'Uma nova dinastia, a dos **Kidinuidas**, e depois os Igehalkidas, reorganizam o reino. Os reis começam a usar o título de «rei de Anshan e de Susa», o que mostra a união das duas partes de Elam. Em Haft Tepe, perto de Susa, a antiga Kabnak conserva túmulos e oficinas de grande interesse.' },
    { d: 'c. 1340 – 1300 a.C.', t: 'Untash-Napirisha e Dur-Untash', x: 'O rei **Untash-Napirisha** funda a cidade sagrada de **Dur-Untash**, hoje Chogha Zanbil, com um grande zigurate e cerca de vinte templos aos deuses de Elam. As datas são debatidas (alguns situam-no mais tarde, no séc. XIII a.C.).' },
    { d: 'c. 1158 – 1155 a.C.', t: 'Shutruk-Nahhunte ataca Babilónia', x: '**Shutruk-Nahhunte**, que casou com uma filha do rei cassita da Babilónia, invade a Mesopotâmia, saqueia cidades e leva para Susa monumentos antigos, entre eles a **estela de Naram-Sin** e, ao que se crê, o **Código de Hamurabi**. O seu filho **Kutir-Nahhunte** põe fim à dinastia cassita de Babilónia e leva a estátua do deus Marduk.' },
    { d: 'c. 1150 – 1120 a.C.', t: 'Shilhak-Inshushinak I, o último grande rei', x: 'Shilhak-Inshushinak amplia o domínio elamita para o leste da Mesopotâmia e restaura muitos templos, em Susa e noutros locais. Deixa inscrições e o célebre modelo de bronze chamado **Sit-shamshi**. É o fim do apogeu de Elam.' },
    { d: 'c. 1110 a.C.', t: 'Nabucodonosor I vinga a Babilónia', x: 'O rei babilónico Nabucodonosor I invade Elam e vence o rei elamita junto ao rio Ulai. A tradição diz que recuperou a estátua de Marduk. A data e os pormenores são debatidos.' },
    { d: 'c. 1100 – 770 a.C.', t: 'Séculos obscuros', x: 'Quase não há textos elamitas durante este longo período, e os especialistas falam de uma «idade das trevas» elamita. Não é claro se Elam se desfez em reinos mais pequenos ou se foi uma simples falta de fontes. Em termos arqueológicos, a vida continua.' },
    { d: '720 a.C.', t: 'Elam apoia a Babilónia contra a Assíria', x: 'Elam e o rei babilónico Marduk-apla-iddina II enfrentam o rei assírio Sargão II em Der. Cada lado reivindica a vitória. A partir daqui, Elam será o principal aliado de quem se revolta contra a Assíria.' },
    { d: '691 a.C.', t: 'A batalha de Halule', x: 'Elamitas e babilónios enfrentam o rei assírio Senaqueribe em Halule. Os dois lados dizem ter ganho. Em 689 a.C. Senaqueribe destrói a Babilónia, o que enfraquece os aliados de Elam.' },
    { d: '653 a.C.', t: 'Til-Tuba: Teumman é morto', x: 'O rei elamita **Teumman** é vencido e morto por Assurbanípal junto ao rio Ulai, na batalha de Til-Tuba. A sua cabeça é levada para Nínive e aparece nos relevos do palácio, onde é exibida num jardim.' },
    { d: '647 a.C.', t: 'Assurbanípal destrói Susa', x: 'Depois de guerras civis em Elam, o rei assírio saqueia Susa, leva estátuas de deuses, ouro e prata, destrói o zigurate e, segundo o seu próprio relato, **profana os túmulos dos reis**. A data é por vezes dada como 646 a.C. Esta destruição é descrita pelos assírios, e não temos relato elamita.' },
    { d: 'c. 640 – 600 a.C.', t: 'Persas em Anshan', x: 'O reino de Elam fica fragmentado. Em Anshan, os persas, comandados pelos antepassados de Ciro, o Grande, começam a ocupar o lugar dos elamitas. Um «Kurash» de Parsumash terá enviado o filho à corte assíria (c. 646 a.C.); se é o avô de Ciro II, é debatido.' },
    { d: '539 a.C.', t: 'Elam no império persa', x: 'Ciro II, que se intitula «rei de Anshan», conquista a Babilónia. Elam passa a ser uma das terras do império aqueménida, e Susa uma das suas capitais. O elamita mantém-se como língua administrativa.' },
    { d: 'c. 521 – 486 a.C.', t: 'Darius I e Susa', x: 'Darius I reconstrói Susa com um grande palácio e uma apadana, e manda gravar o relato da sua subida ao trono, em Behistun, em **persa antigo, elamita e babilónico**. Este documento trilingue permitiu decifrar o cuneiforme.' },
    { d: 'c. 330 a.C. em diante', t: 'O fim do elamita escrito', x: 'Depois de Alexandre, o elamita desaparece como língua escrita. A região de Susa continua a ser importante e, mais tarde, um reino local, **Elimaida**, mantém o nome de Elam até ao séc. III d.C.' }
  ] },
  { img: 'ela-linear-elamita', leg: 'Inscrição em elamita linear, de Susa. Louvre.' },
  { img: 'ela-estela-naramsin', leg: 'Estela acádia da Vitória de Naram-Sin, levada para Susa na Antiguidade. Louvre.' },
  { img: 'ela-codigo-hamurabi', leg: 'Estela do Código de Hamurabi, levada para Susa como despojo; obra babilónica. Louvre.' },
  { img: 'ela-obelisco-manishtushu', leg: 'Obelisco acádio de Manishtushu, encontrado em Susa. Louvre.' },
  { img: 'ela-ulai-relevo', leg: 'Relevo assírio da batalha de Til-Tuba, junto ao rio Ulai, proveniente de Nínive. Museu Britânico.' },
  { img: 'ela-teumman-jardim', leg: 'Banquete de Assurbanípal no jardim; a cabeça de Teumman aparece suspensa numa árvore. Relevo assírio de Nínive, Museu Britânico.' }
];

const mapa = [
  'Elam não era uma rede de cidades-estado como a Suméria. Era um território com dois centros, **Susa** (planície) e **Anshan** (montanha), e muitas povoações menores. Algumas das cidades mais importantes ainda não foram localizadas.',
  { img: 'ela-mapa-cidades', leg: 'Mapa de locais elamitas, incluindo Susa, Chogha Zanbil e Tell-e Malyan (Anshan); legendas em francês.' },
  { tabela: { cab: ['Cidade', 'Região', 'Local hoje', 'Para que ficou conhecida'], linhas: [
    ['Susa', 'Susiana (planície)', 'Shush, Cuzistão', 'Capital de Elam; o seu monte guarda mais de 6000 anos de história; tesouro dos troféus mesopotâmicos; capital aqueménida'],
    ['Anshan', 'Fars (montanha)', 'Tal-e Malyan', 'Centro das terras altas; capital em muitas épocas; terra dos primeiros reis persas'],
    ['Dur-Untash', 'Susiana', 'Chogha Zanbil', 'Cidade sagrada de Untash-Napirisha, com o grande zigurate'],
    ['Awan', 'Desconhecida', 'Desconhecido', 'Primeira dinastia elamita; localização ainda não identificada'],
    ['Simashki', 'Montanha, desconhecida', 'Debatida', 'Dinastia que saqueou Ur; localização debatida, talvez no norte'],
    ['Madaktu', 'Susiana', 'Debatida', 'Capital neo-elamita, junto ao rio Ulai, atacada por Assurbanípal'],
    ['Hidalu', 'Montanha', 'Debatida', 'Cidade de montanha das épocas neo-elamitas; refúgio de reis'],
    ['Haft Tepe (Kabnak)', 'Susiana', 'Perto de Shush', 'Cidade do Elamita médio, com túmulos, oficinas e tabuinhas'],
    ['Liyan', 'Costa do Golfo', 'Região de Bushehr', 'Porto elamita no Golfo, ligado ao culto da deusa Kiririsha']
  ] } },
  { h: 'Susa' },
  'Susa foi fundada c. 4200 a.C. e foi habitada, com interrupções, durante mais de seis milénios. O monte tem várias partes: a **Acrópole**, com templos e uma enorme plataforma, o **Apadana**, o palácio de Darius, e a **Cidade Real**. Era um centro de culto do deus **Inshushinak**, «senhor de Susa». Na época elamita média, os reis levaram para lá os troféus de guerra. Nas escavações francesas, a Acrópole foi muito escavada, mas as zonas baixas continuam pouco conhecidas.',
  { img: 'ela-susa-ruinas', leg: 'Ruínas do sítio arqueológico de Susa (Shush), Irão. Ao fundo, o castelo construído pela missão arqueológica francesa no final do século XIX.' },
  { h: 'Anshan, o coração das terras altas' },
  'Anshan é identificada com **Tal-e Malyan**, um grande monte numa planície do Fars, escavado cientificamente a partir de 1971 (equipas americanas) e identificado como Anshan em 1973. Foi um dos maiores centros do planalto c. 3400–2800 a.C., com tabuinhas proto-elamitas. Mais tarde foi capital de reis elamitas. No séc. VII a.C. era governada pelos antepassados dos reis persas, que tomaram o título de «rei de Anshan». A relação exata entre os elamitas e os persas de Anshan é uma das grandes questões da história desta região.',
  { img: 'ela-anshan-malyan', leg: 'Cerâmica de Tal-e Malyan (Anshan), de estilo Kaftari, c. 2200–1600 a.C.; fotografia de exposição. Alternativa à vista do montículo.' },
  { h: 'Dur-Untash (Chogha Zanbil)' },
  'Untash-Napirisha construiu esta cidade a cerca de 30–40 km de Susa, c. 1340–1300 a.C., como centro religioso para todos os deuses do reino. Tinha três muralhas concêntricas, templos, palácios e um zigurate de cinco níveis. A base do zigurate media cerca de **105 m de lado**, e a altura original seria de cerca de 50 m (sobram cerca de 25 m). Foi abandonada na época neo-elamita, e a tradição diz que Assurbanípal a destruiu. O seu nome moderno, «monte do cesto», é recente.',
  { img: 'ela-zanbil-aerea', leg: 'Planta do complexo de Dur-Untash (Chogha Zanbil), mostrando os recintos e edifícios; alternativa documental à fotografia aérea.' },
  { h: 'Jiroft e Marhashi, de passagem' },
  'A leste de Elam, na província de Kerman, **Jiroft** tornou-se célebre a partir de 2001, depois de cheias terem revelado túmulos com grande número de **vasos de clorite** decorados, c. 2500 a.C. Alguns especialistas ligam esta cultura ao reino de **Marhashi** (Warahshe), nomeado em textos mesopotâmicos, mas não há consenso, e as tentativas de a ligar à lendária **Aratta** dos mitos sumérios são muito especulativas. O que sabemos é que a região trocava objetos de pedra com Susa e com a Mesopotâmia.',
  { img: 'ela-jiroft-vaso', leg: 'Vaso de clorite de estilo Jiroft, do sudeste do Irão; contexto cultural distinto do Elam histórico.' },
  { h: 'Os rochedos de Kul-e Farah' },
  'No vale de Izeh, nas montanhas, os rochedos de **Kul-e Farah** têm relevos esculpidos na época neo-elamita (c. séc. VII–VI a.C., datação debatida), com cenas de culto e músicos, além de inscrições em elamita. Uma delas nomeia **Hanni, filho de Tahhi**, «príncipe» de Ayapir (região de Izeh) e vassalo de um rei elamita, que deixou uma longa inscrição em elamita cuneiforme. São das poucas imagens feitas pelos próprios elamitas da época neo-elamita.',
  { img: 'ela-kul-e-farah', leg: 'Relevos rupestres de Kul-e Farah, no vale de Izeh, Irão.' },
  { h: 'As rotas de comércio' },
  'Elam ficava no cruzamento de caminhos entre a Mesopotâmia, que precisava de pedra, madeira e metais, e as montanhas e o Golfo, que os tinham. A rota que ligava Susa a Anshan e ao planalto central permitia trazer **estanho, cobre, prata, lápis-lazúli, clorite, esteatite e madeira**. Para o Golfo, os elamitas usavam o porto de Liyan, e para o leste, rotas até Tepe Yahya e Shahr-i Sokhta, que levavam ao Afeganistão e ao vale do Indo. Qual era o papel dos elamitas, de intermediários ou de controladores deste comércio, é debatido.',
  { img: 'ela-rotas-comercio', leg: 'Reconstrução de uma caravana de burros a atravessar os Zagros com mercadorias, c. 1800 a.C. Ilustração gerada por IA.' }
];

const sociedade = [
  { h: '1. Organização política' },
  'A estrutura política de Elam mudou muito ao longo de dois mil anos. Nas fases antigas há um **rei de Awan** e, depois, **reis de Simashki**; na época dos **sukkalmah** o poder é partilhado por vários «regentes» da mesma família; no Elamita médio, o rei intitula-se **«rei de Anshan e de Susa»**. Os especialistas debatem se Elam era um estado centralizado ou uma **confederação** de territórios com um soberano mais forte que os outros.',
  'Um traço muito discutido é o do **sistema de sucessão**. Em muitas épocas, o poder passou de um **irmão** para outro, e vários reis dizem nas inscrições que são «filho da irmã» do rei anterior. Alguns estudiosos viram nisto uma herança pela linha da mãe; outros, uma sucessão entre **tio e sobrinho**, ou apenas uma forma de legitimar o rei por via feminina. A questão é muito debatida e depende de poucos textos. O que parece claro é que **o parentesco pela mãe e pela irmã do rei contava muito**.',
  { img: 'ela-selo-susa', leg: 'Selo cilíndrico de Susa III, período proto-elamita, c. 3150–2800 a.C., e impressão moderna. Louvre, Sb 1484.' },
  { h: '2. Classes sociais' },
  { lista: [
    '**Reis e a sua família alargada:** inclui irmãos, sobrinhos, filhos e as rainhas, com enorme poder.',
    '**Sacerdotes e sacerdotisas:** cuidam dos templos e dos cultos, e podem ser da família real.',
    '**Funcionários e escribas:** administram os campos, os armazéns e os arquivos.',
    '**Camponeses, artesãos e pastores:** a maioria da população, ligados aos campos da planície e aos rebanhos da montanha.',
    '**Soldados e arqueiros:** os arqueiros elamitas eram famosos entre os vizinhos.',
    '**Escravos e dependentes:** sobretudo prisioneiros de guerra; o seu estatuto é pouco conhecido.'
  ] },
  { h: '3. Religião' },
  'A religião elamita era **politeísta**, e os deuses tinham nomes e funções muito diferentes dos mesopotâmicos, embora houvesse influências mútuas. O panteão mudou com o tempo e com a região: na planície, o deus de Susa era o mais importante, e nas montanhas, outros. As fontes dão muitos nomes, mas explicam pouco sobre os mitos. Os principais eram:',
  { tabela: { cab: ['Divindade', 'Domínio', 'Notas'], linhas: [
    ['Inshushinak', '«Senhor de Susa»; protetor do reino; juiz dos mortos', 'Deus principal de Susa; os reis oferecem-lhe templos, e os textos chamam-lhe «senhor dos mortos»'],
    ['Napirisha', '«O grande deus»', 'Um dos deuses principais; em Chogha Zanbil tinha templo, com Inshushinak, no topo do zigurate'],
    ['Kiririsha', '«A grande deusa»; mãe', 'Deusa muito venerada, em especial na região de Liyan e na época média'],
    ['Pinikir', 'Grande deusa', 'Em épocas antigas foi a deusa mais importante; mais tarde, Kiririsha tem mais destaque'],
    ['Humban', 'Chefe dos deuses nas épocas tardias', 'O seu nome faz parte de muitos nomes de reis neo-elamitas, como Humban-Haltash'],
    ['Nahhunte', 'Sol e justiça', 'Deus solar, também no nome de reis (Shutruk-Nahhunte, Kutir-Nahhunte)']
  ] } },
  'Os elamitas construíam templos, mas também faziam cultos ao ar livre: os textos assírios falam de **bosques sagrados** onde nenhum estrangeiro entrara, e que foram queimados em 647 a.C. Os deuses recebiam oferendas de comida, bebida e animais. Um rito conhecido é o do **nascer do sol**, ligado ao modelo de bronze chamado Sit-shamshi, mas a sua interpretação é debatida. Os reis diziam que reinavam por vontade dos deuses.',
  { img: 'ela-sit-shamshi', leg: 'Modelo ritual em bronze Sit-shamshi, encontrado em Susa. Louvre.' },
  { img: 'ela-templo-ritual', leg: 'Cena imaginada de oferendas diante de um templo de Inshushinak em Susa, c. 1200 a.C.; arquitetura e cerimónia conjeturais. Ilustração gerada por IA.' },
  { h: 'A vida depois da morte' },
  'Pouco se sabe com certeza. Inshushinak é chamado «senhor dos mortos», e Kiririsha aparece ligada ao mundo subterrâneo, mas os textos não descrevem um além-vida com pormenor. Os túmulos de Susa, de Haft Tepe e de outros locais mostram sepulturas com cerâmica, joias e armas, e os reis tinham túmulos monumentais. Uma frase de Assurbanípal diz que profanou os túmulos dos reis elamitas, o que mostra que eram lugares com grande valor religioso.',
  { h: '4. Economia e agricultura' },
  'Na planície de Susa, a agricultura de irrigação era a base: cevada, trigo, tâmaras, legumes e linho. Nas montanhas, criavam-se **ovelhas, cabras e gado**, e as montanhas forneciam madeira e pedra. O reino ganhava com o comércio e com os impostos sobre as caravanas. Havia **oficinas** de metal e de cerâmica, e Susa era um centro de produção e de armazenamento. Os templos tinham campos, rebanhos e oficinas. Nos textos de Susa, os pagamentos são feitos em cevada e prata.',
  { img: 'ela-mercado-susa', leg: 'Reconstrução artística de um mercado de Susa, com cereais, tâmaras, cerâmica, metais e um escriba, c. 1500 a.C. Ilustração gerada por IA.' },
  { h: '5. Escrita e línguas' },
  'Elam teve **três escritas**, o que é raro: a **proto-elamita** (c. 3100–2900 a.C., não decifrada), o **elamita linear** (c. 2300–1850 a.C., com uma proposta de decifração em 2022, ainda discutida) e o **elamita cuneiforme**, adaptado da escrita da Mesopotâmia, usado desde c. 2300 a.C. até depois de 330 a.C. Só o último está bem compreendido. A língua é um isolado linguístico, e o seu vocabulário é conhecido em parte por listas e por textos bilingues.',
  'O elamita cuneiforme tornou-se, na época persa, uma das línguas do império. Dos arquivos de **Persépolis** (509–493 a.C.) vêm dezenas de milhares de tabuinhas e fragmentos, a maior parte em elamita, sobre rações, viagens e impostos. Isto mostra que a administração persa ainda funcionava com escribas elamitas.',
  { img: 'ela-tabuinha-elamita', leg: 'Tabuinhas e fragmentos do arquivo das fortificações de Persépolis, época aqueménida, em estudo no ISAC da Universidade de Chicago; o arquivo contém sobretudo textos em elamita.' },
  { h: '6. Mulheres, família e sucessão' },
  'Elam é conhecido por dar às mulheres um papel visível. Documentos de Susa mostram que, no 2.º milénio a.C., as **filhas podiam herdar** e as viúvas tinham direitos sobre os bens. Algumas rainhas deixaram inscrições e estátuas, como **Napir-Asu**. A importância do parentesco pela mãe e pela irmã nas inscrições reais levou à ideia, muito debatida, de uma sucessão ou legitimidade por via feminina.',
  'Sabemos também que os reis casavam com mulheres da própria família. Os textos referem **casamentos entre irmãos e meio-irmãos** e, no caso de uma rainha, **Nahhunte-utu**, casamentos sucessivos com dois reis da mesma família. A interpretação é debatida: pode ser uma regra de herança, uma estratégia para manter o poder, ou uma leitura exagerada de poucos documentos. Em relação às mulheres comuns, a informação é escassa.',
  { img: 'ela-casa-elamita', leg: 'Reconstrução artística do pátio de uma casa familiar de Susa, c. 1500 a.C. Ilustração gerada por IA.' },
  { caixa: 'Napir-Asu, a rainha de bronze', texto: 'A **estátua de Napir-Asu**, esposa de Untash-Napirisha (c. 1300 a.C., Louvre), tem 1,29 m e quase 1750 kg. Tem um núcleo de bronze revestido por uma carapaça de cobre, e o corpo está coberto por um vestido bordado. A inscrição, em elamita, amaldiçoa quem a danificar. A cabeça e parte do ombro esquerdo perderam-se, mas o resto sobreviveu.' },
  { h: '7. Alimentação' },
  'Comia-se **pão e papas de cevada e de trigo**, legumes, cebola, tâmaras, queijo e carne de ovelha, cabra e gado. Havia peixe nos rios. A **cerveja** e o vinho eram conhecidos. Nas regiões altas, comiam-se frutos secos e caça. Os textos de Susa registam rações para os trabalhadores. Os pormenores da cozinha elamita são pouco conhecidos, e muito do que se diz é deduzido da cozinha mesopotâmica.',
  { img: 'ela-banquete', leg: 'Cena imaginada de uma refeição familiar elamita, com pão, tâmaras, lentilhas e cerveja, c. 1300 a.C. Ilustração gerada por IA.' },
  { h: '8. Vestuário e joias' },
  'Nos relevos e nas estátuas, os homens aparecem com túnicas de franjas, **faixas na cabeça** e cabelo comprido; os soldados elamitas dos relevos assírios têm túnicas curtas e faixas. As mulheres, como Napir-Asu, usam vestidos compridos de padrões bordados. Os elamitas faziam joias de ouro, prata, lápis-lazúli e cornalina, e contas de **faiança e vidro**. Os selos eram também ornamentos.',
  { img: 'ela-vestuario', leg: 'Interpretação artística do vestuário de um homem e de uma mulher elamitas, c. 1300 a.C., inspirada em representações antigas; padrões e cores conjeturais. Ilustração gerada por IA.' },
  { h: '9. Música' },
  'Um relevo assírio mostra **músicos elamitas** com harpas, tambores e flautas a saírem de uma cidade elamita para receber os vencedores assírios, o que dá uma ideia da música da corte. Os instrumentos de corda eram muito usados. Pouco mais se sabe sobre jogos e festas; as fontes elamitas são pobres neste tema.',
  { h: '10. Ciência e conhecimento' },
  'Os elamitas usaram a ciência da Mesopotâmia. Em Susa foram achadas **tabuinhas matemáticas** do período paleobabilónico (início do 2.º milénio a.C.), em acádio, com problemas de geometria e de álgebra. O Elam teve escribas que copiavam textos de adivinhação e de medicina da Babilónia. Não se conhece uma ciência elamita independente, o que pode ser só falta de fontes.',
  { h: '11. Tecnologia e arte' },
  { lista: [
    '**Metalurgia:** bronze fundido em grande escala, como a estátua de Napir-Asu; trabalho de ouro e prata.',
    '**Arquitetura de tijolo:** zigurates, palácios e templos com tijolo cozido, às vezes esmaltado, com inscrições.',
    '**Faiança e vidro:** em Chogha Zanbil foram encontrados objetos de vidro e tijolos vidrados.',
    '**Escrita própria:** três sistemas de escrita, dos quais dois são originais.',
    '**Relevos rupestres:** esculpidos na rocha, nas montanhas.',
    '**Irrigação:** canais na Susiana, como na Mesopotâmia.'
  ] },
  { h: '12. A guerra' },
  'Os elamitas eram conhecidos como **arqueiros**: a Bíblia fala do «arco de Elam» e dos arqueiros elamitas. Tinham também carros de guerra, cavalaria e infantaria com lanças. Os relevos assírios mostram exércitos elamitas com túnicas curtas, arcos e lanças, a defenderem rios e cidades. A guerra com a Mesopotâmia foi quase constante, e a prática de levar as estátuas dos deuses inimigos era comum a ambos os lados.',
  { img: 'ela-guerreiros', leg: 'Reprodução histórica do relevo assírio da batalha do Ulai, com soldados elamitas e carros de guerra; publicada em 1903.' }
];

const personalidades = [
  'Os reis elamitas são conhecidos sobretudo por inscrições e por textos dos seus inimigos, por isso os retratos são muitas vezes incompletos. Estas são algumas das figuras mais importantes.',
  { h: 'Hita, rei de Awan' },
  'Rei de Awan, c. 2250 a.C. (a data é aproximada). Fez um **tratado com Naram-Sin de Acad**, escrito em elamita cuneiforme, o mais antigo texto longo conhecido nesta língua.',
  { h: 'Puzur-Inshushinak (Kutik-Inshushinak)' },
  'Governador de Susa sob Acad e depois rei, c. 2200–2100 a.C. Mandou escrever em **elamita linear** e em acádio, e expandiu o território. Foi, ao que parece, o último rei de Awan. Foi vencido pelos reis de Ur, mas como e quando é debatido. A sua estátua e as suas inscrições estão no Louvre.',
  { img: 'ela-puzur-inshushinak', leg: 'Parte inferior de uma estátua sentada de Puzur-Inshushinak, de Susa. Louvre.' },
  { h: 'Kindattu, rei de Simashki' },
  'Rei da dinastia de Simashki, c. 2004 a.C. A tradição mesopotâmica atribui-lhe, ou à sua coligação, a destruição de **Ur**. Ibbi-Sin, o último rei de Ur III, foi levado prisioneiro, o que é recordado na «Lamentação sobre a destruição de Ur».',
  { h: 'Kudur-Mabuk e Rim-Sin' },
  'Kudur-Mabuk foi um chefe de origem elamita, c. 1830 a.C., que tomou o controlo de Larsa e colocou os filhos no trono. **Rim-Sin I** reinou mais de 60 anos e foi derrotado por Hamurabi em 1763 a.C. Não é claro se Kudur-Mabuk agia por conta própria ou em nome dos sukkalmah de Elam.',
  { h: 'Siwe-palar-huppak, sukkalmah' },
  'Sukkalmah no séc. XVIII a.C. Foi um dos soberanos mais poderosos do seu tempo, e os reis vizinhos tratavam-no com enorme respeito, como se vê nas cartas de Mari. Dirigiu a poderosa campanha elamita na Mesopotâmia, que terminou com a vitória de uma coligação liderada por Hamurabi.',
  { h: 'Untash-Napirisha, o construtor' },
  'Rei do Elamita médio, c. 1340–1300 a.C. (para alguns, mais tarde). Fundou **Dur-Untash** (Chogha Zanbil) e deixou inscrições em dezenas de templos e edifícios. Casou com **Napir-Asu**, que pode ter sido uma princesa cassita, filha de Burna-Buriash II, embora isso seja discutido.',
  { img: 'ela-untash-napirisha', leg: 'Estela de Untash-Napirisha, de Susa. Louvre.' },
  { h: 'Napir-Asu, a rainha' },
  'Esposa de Untash-Napirisha. A **estátua de bronze** que lhe foi dedicada, com uma maldição gravada contra quem a danificasse, é um dos grandes objetos da arte do Próximo Oriente. É a prova mais famosa da posição das mulheres reais em Elam.',
  { img: 'ela-napir-asu', leg: 'Estátua em liga de cobre da rainha Napir-Asu. Louvre.' },
  { h: 'Shutruk-Nahhunte I' },
  'Rei c. 1184–1155 a.C. e fundador da dinastia dos Shutrukidas. Invadiu a Babilónia em 1158 a.C., possivelmente para vingar o sogro, o rei cassita Meli-Shipak II, e levou para Susa a **estela de Naram-Sin**, e, ao que parece, também o **obelisco de Manishtushu** e a estela do **Código de Hamurabi** (estas duas atribuições são hipóteses). Gravou na estela de Naram-Sin uma inscrição em elamita em que diz ter destruído Sippar e levado a estela para Elam. Estes troféus foram achados em Susa entre 1898 e 1902.',
  { h: 'Kutir-Nahhunte III' },
  'Filho de Shutruk-Nahhunte, reinou c. 1155–1150 a.C. Conquistou a Babilónia e pôs fim à dinastia cassita. Levou a estátua do deus **Marduk** para Elam, um ato de enorme peso simbólico. A estátua foi, segundo a tradição, recuperada mais tarde por Nabucodonosor I.',
  { h: 'Shilhak-Inshushinak I' },
  'Rei c. 1150–1120 a.C. Foi o último grande rei do Elamita médio: ampliou o território, restaurou templos e deixou muitas inscrições. É a ele que se atribui o **Sit-shamshi**. A seguir, o poder elamita declina.',
  { h: 'Nahhunte-utu, a rainha' },
  'Rainha da dinastia dos Shutrukidas, c. século XII a.C. Aparece nas inscrições como esposa sucessiva de dois reis da mesma família. Para alguns estudiosos, mostra que o direito ao trono podia passar pelas mulheres. A interpretação é debatida, e o caso baseia-se em poucos textos.',
  { h: 'Teumman, rei de Elam' },
  'Rei c. 664–653 a.C. Subiu ao trono depois de uma luta pelo poder e foi vencido pelos assírios na batalha de **Til-Tuba**, em 653 a.C. A sua morte aparece em relevos de Nínive, e a sua cabeça foi exibida num jardim. Só o conhecemos pelo relato assírio.',
  { h: 'Humban-Haltash III, o último rei' },
  'Último rei independente de Elam (c. 648–647 a.C.; as datas variam). Reinava quando Assurbanípal destruiu Susa e foi capturado pelos assírios; o que lhe aconteceu depois não se sabe. O reino não sobreviveu a esta derrota.',
  { h: 'Ciro II, rei de Anshan' },
  'Fundador do império persa, c. 559–530 a.C. Intitulava-se «rei de Anshan» no Cilindro de Ciro e dizia descender de Teispes, de uma linha de reis de Anshan. Conquistou a Babilónia em 539 a.C. e integrou Elam no império. A relação entre a sua família e os antigos elamitas é um dos temas que mais interessam aos especialistas.',
  { img: 'ela-cilindro-ciro', leg: 'Cilindro de Ciro, inscrição em acádio babilónico; época aqueménida. Museu Britânico.' }
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**Uma escrita original:** o proto-elamita e o elamita linear mostram que a escrita foi inventada em mais de um sítio, ou pelo menos reinventada.',
    '**A língua:** o elamita é um dos poucos isolados linguísticos do mundo antigo, e a sua herança vive em nomes de lugares do Irão.',
    '**A ponte para os persas:** os reis persas herdaram de Elam a administração, o título de «rei de Anshan», a escrita cuneiforme e as práticas de arquivo.',
    '**O zigurate de Chogha Zanbil:** o monumento mais bem preservado deste tipo fora da Mesopotâmia.',
    '**A arte em bronze:** a estátua de Napir-Asu e o Sit-shamshi são obras-primas.',
    '**Os troféus de Susa:** sem o saque de Shutruk-Nahhunte, talvez não tivéssemos o Código de Hamurabi inteiro.',
    '**O nome «Cuzistão»:** vem do persa *Khuzestan*, «terra dos Khuz», forma que deriva do antigo persa *Hūjiya* («Elam», «elamita»), possivelmente de um nome elamita da região, e **Susa** continua a ser Shush.'
  ] },
  { img: 'ela-apadana-susa', leg: 'Ruínas do palácio de Dario I em Susa; época aqueménida.' },
  { h: 'Arte' },
  'A arte elamita mistura traços mesopotâmicos com os seus: a cerâmica pintada de **Susa I**, os selos, as estátuas de **bronze**, os **relevos rupestres** de Izeh e a **faiança e o vidro** de Chogha Zanbil. Muitas peças só chegaram até nós porque foram levadas para Susa como troféus. O **Friso dos Arqueiros** de Susa, em tijolo vidrado, é obra da época persa, mas assenta numa tradição artesanal local.',
  { img: 'ela-friso-arqueiros', leg: 'Friso dos Arqueiros em tijolo esmaltado, do palácio aqueménida de Susa. Louvre.' },
  { h: 'Arquitetura: o zigurate elamita' },
  'O zigurate de Dur-Untash difere dos mesopotâmicos: tinha **cinco níveis**, com escadarias abobadadas no interior, e no topo ficava o templo de Napirisha e de Inshushinak. Os tijolos tinham inscrições votivas. Em volta, três recintos concêntricos separavam o espaço sagrado do resto. Era uma cidade de culto, mais do que uma cidade para viver.',
  { h: 'Elam e a Bíblia' },
  'Elam aparece na Bíblia como terra de **Elam, filho de Sem** (Génesis 10) e como inimigo e aliado de povos do Próximo Oriente. O Livro de **Daniel** e o de **Ester** passam-se em Susa (a «Shushan» bíblica). Em Génesis 14 fala-se de um rei elamita, **Quedorlaomer**, mas não se conhece nenhum rei elamita histórico com este nome, e a ligação com a história é debatida.',
  { h: 'A redescoberta de Elam' },
  { linha: [
    { d: '1844 – 1855', t: 'Decifrar o elamita', x: 'A inscrição trilingue de Behistun, copiada por Rawlinson, tem uma versão em elamita. Westergaard (1844) e Norris (1855) estudaram-na e publicaram as primeiras análises da língua.' },
    { d: '1851 – 1852', t: 'Loftus em Susa', x: 'William Loftus identifica o monte de Susa e faz as primeiras escavações.' },
    { d: '1884 – 1886', t: 'Os Dieulafoy', x: 'Marcel e Jane Dieulafoy escavam o palácio persa de Susa e levam para Paris os frisos de tijolo esmaltado.' },
    { d: '1897 – 1912', t: 'A missão de Jacques de Morgan', x: 'Escavações francesas em grande escala em Susa encontram a estela de Naram-Sin (1898), o Código de Hamurabi (1901–1902) e o Sit-shamshi (1904–1905). O padre Vincent Scheil traduz o código.' },
    { d: '1935 – 1962', t: 'Chogha Zanbil', x: 'O zigurate é identificado em 1935 por prospetores de petróleo e escavado por Roman Ghirshman, de 1951 a 1962.' },
    { d: '1971 – 1978', t: 'Tal-e Malyan', x: 'Escavações americanas (William Sumner) em Tal-e Malyan; a identificação com Anshan é confirmada em 1973 e aparecem tabuinhas proto-elamitas.' },
    { d: '1979', t: 'Património Mundial', x: 'Chogha Zanbil é o primeiro sítio iraniano inscrito pela UNESCO. Susa é inscrita em 2015.' },
    { d: '2001', t: 'Jiroft', x: 'Cheias do rio Halil revelam túmulos com vasos de clorite. O saque de peças e as discussões sobre a sua origem tornaram-se famosos.' },
    { d: '2022', t: 'Uma proposta de decifração do elamita linear', x: 'François Desset e uma equipa franco-iraniana e europeia anunciam uma decifração do elamita linear a partir de vasos de prata. Muitos especialistas aceitam grande parte das leituras, mas há críticas, e a validação continua.' }
  ] },
  { img: 'ela-behistun', leg: 'Inscrição de Behistun em persa antigo, elamita e acádio babilónico, século VI a.C. Irão.' },
  { img: 'ela-de-morgan', leg: 'Jacques de Morgan (1857–1924), arqueólogo e diretor de escavações em Susa.' },
  { img: 'ela-reconstrucao-zanbil', leg: 'Reconstrução artística de Dur-Untash (Chogha Zanbil), c. 1300 a.C., com zigurate e recintos murados; pormenores conjeturais. Ilustração gerada por IA.' },
  { img: 'ela-reconstrucao-susa', leg: 'Reconstrução hipotética da acrópole de Susa na época médio-elamita, c. 1200 a.C.; não representa um plano arqueológico comprovado. Ilustração gerada por IA.' },
  { caixa: 'Para visitar', texto: 'O **Louvre** (Paris), no Departamento de Antiguidades Orientais, tem a maior coleção elamita do mundo, com o Código de Hamurabi, a estátua de Napir-Asu e o Friso dos Arqueiros. O **Museu Nacional do Irão** (Teerão), o **British Museum** (Londres, com os relevos assírios) e o museu de Shush têm também peças importantes. No local, podem visitar-se **Chogha Zanbil** e **Susa**, no sudoeste do Irão.' }
];

const quiz = [
  { p: 'Onde ficava Elam?', op: ['No vale do Nilo', 'No sudoeste do atual Irão', 'No sul da Mesopotâmia, entre os dois rios', 'Na costa do Mediterrâneo'], certa: 1, exp: 'Elam ocupava o sudoeste do Irão, da planície de Susa às montanhas de Anshan.' },
  { p: 'Quais eram as duas capitais históricas de Elam?', op: ['Ur e Uruk', 'Susa e Anshan', 'Nínive e Assur', 'Persépolis e Ecbátana'], certa: 1, exp: 'Susa, na planície, e Anshan, nas montanhas do Fars.' },
  { p: 'O que acontece com a escrita proto-elamita?', op: ['Foi decifrada em 1900', 'Não foi decifrada', 'É igual à cuneiforme', 'É igual aos hieróglifos'], certa: 1, exp: 'Conhecem-se os números e alguns sinais, mas a língua do proto-elamita continua desconhecida.' },
  { p: 'A que família pertence a língua elamita?', op: ['Semítica', 'Indo-europeia', 'É um isolado linguístico', 'Egípcia'], certa: 2, exp: 'O elamita não tem parentes comprovados. A ligação aos dravídicos é rejeitada pela maioria.' },
  { p: 'Quem destruiu Ur c. 2004 a.C., levando preso o rei Ibbi-Sin?', op: ['Os acádios', 'Os elamitas', 'Os hititas', 'Os egípcios'], certa: 1, exp: 'Uma coligação elamita, ligada a Simashki, saqueou Ur e levou o rei para Elam.' },
  { p: 'Quem construiu Dur-Untash (Chogha Zanbil)?', op: ['Hamurabi', 'Shutruk-Nahhunte', 'Untash-Napirisha', 'Assurbanípal'], certa: 2, exp: 'Untash-Napirisha, c. 1340–1300 a.C. (datas debatidas), fundou a cidade sagrada.' },
  { p: 'Que famoso texto de leis foi levado para Susa por um rei elamita?', op: ['O Código de Ur-Nammu', 'A Lei de Moisés', 'O Código de Hamurabi', 'As Leis de Manu'], certa: 2, exp: 'A estela do Código de Hamurabi foi, provavelmente, levada para Susa no séc. XII a.C. (hipótese) e achada em 1901–1902.' },
  { p: 'Quem gravou o seu nome na estela da Vitória de Naram-Sin?', op: ['Kutir-Nahhunte', 'Shutruk-Nahhunte', 'Ciro II', 'Darius I'], certa: 1, exp: 'Shutruk-Nahhunte levou a estela de Sippar para Susa e inscreveu o seu nome em elamita.' },
  { p: 'Quem era Inshushinak?', op: ['O deus de Susa, juiz dos mortos', 'Um rei de Awan', 'Um escriba', 'Um rio sagrado'], certa: 0, exp: 'Inshushinak, «senhor de Susa», era o principal deus da cidade e ligado aos mortos.' },
  { p: 'Que rainha tem uma estátua de bronze de 1750 kg, no Louvre?', op: ['Puabi', 'Enheduana', 'Napir-Asu', 'Nahhunte-utu'], certa: 2, exp: 'A estátua de Napir-Asu, esposa de Untash-Napirisha, c. 1300 a.C., tem uma maldição inscrita.' },
  { p: 'O que se debate sobre a sucessão ao trono elamita?', op: ['Se havia reis', 'Se o poder podia passar pela linha feminina, entre irmãos ou do tio ao sobrinho', 'Se as mulheres eram escravas', 'Se os reis eram eleitos todos os anos'], certa: 1, exp: 'Muitos reis dizem ser «filho da irmã» do anterior. A interpretação é debatida.' },
  { p: 'Quem destruiu Susa em 647 a.C.?', op: ['Ciro II', 'Alexandre', 'Assurbanípal da Assíria', 'Hamurabi'], certa: 2, exp: 'Assurbanípal saqueou Susa e, segundo o seu relato, profanou os túmulos dos reis.' },
  { p: 'Que título usou Ciro II ao conquistar a Babilónia?', op: ['Rei de Susa', 'Rei de Anshan', 'Rei de Elam', 'Faraó'], certa: 1, exp: 'No Cilindro de Ciro, ele intitula-se «rei de Anshan». Anshan era a antiga capital elamita das montanhas.' },
  { p: 'Que língua de Elam era usada na administração persa, em Persépolis?', op: ['Acádio', 'Grego', 'Elamita', 'Aramaico'], certa: 2, exp: 'A maior parte das tabuinhas de Persépolis está em elamita cuneiforme.' },
  { p: 'Porque é debatida a ligação entre Jiroft e Marhashi?', op: ['Porque nunca houve escavações', 'Porque não há consenso sobre onde ficava Marhashi', 'Porque Jiroft fica na Índia', 'Porque Marhashi era elamita sem dúvida'], certa: 1, exp: 'Marhashi aparece em textos mesopotâmicos, mas a sua localização é discutida. Jiroft é uma hipótese.' }
];

export default {
  id: 'elam',
  cor: '#a0522d',
  emblema: '../assets/img/elam.png',
  nome:    { pt: 'Elam', en: 'Elam' },
  periodo: { pt: 'c. 2700 a.C. – 539 a.C.', en: 'c. 2700 BC – 539 BC' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
