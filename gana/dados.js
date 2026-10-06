// IMPÉRIO DO GANA / WAGADU — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas aproximadas. a.C. = antes de Cristo. ATENÇÃO: quase tudo o que se sabe do Gana vem de textos árabes escritos por gente que nunca lá foi, de tradições orais registadas séculos depois e de pouca arqueologia. Os pontos debatidos estão assinalados no texto.
// Imagens: cada {img:'id'} procura o ficheiro  gana/img/id.jpg  (ver IMAGENS_GANA.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'O **Gana** (também chamado **Wagadu** ou **Ouagadou** na língua soninquê, e **Awkar** ou **Aoukar** em algumas fontes árabes) foi o primeiro grande estado conhecido da África Ocidental. Estendia-se pelo Sahel, a faixa de savana entre o Saara e as terras húmidas do sul, no que é hoje o sudeste da Mauritânia e o oeste do Mali. Tornou-se célebre, no mundo árabe e na Europa, como a «terra do ouro»: os seus reis controlavam o comércio entre o ouro do sul e o sal do deserto, e ficaram famosos pela riqueza.',
    'Quase tudo o que sabemos vem de **fontes escritas árabes, de segunda mão** (autores que ouviram falar do Gana a mercadores e viajantes, sem lá terem estado), de **tradições orais** soninquês e de **escavações arqueológicas** ainda escassas. Por isso, a sua datação, a sua extensão, o lugar exato da capital e a sua queda são **debatidos**. Este texto assinala-o sempre que é o caso.'
  ] },
  { caixa: 'Atenção: não é o Gana de hoje', texto: [
    'A **República do Gana** atual (capital Acra, no Golfo da Guiné) **não é** o Império do Gana medieval, e **não ocupa o mesmo território**: o antigo Gana ficava a cerca de 700 a 800 km a noroeste das fronteiras do país atual (em linha reta, a partir de Koumbi Saleh), noutra região, noutro clima e entre outros povos.',
    'O nome foi escolhido em **1957**, quando a antiga colónia britânica da Costa do Ouro se tornou independente sob Kwame Nkrumah, para evocar a grandeza de um passado africano. Pouco se sabe de ligações diretas entre os dois, e a ideia de que os povos do Gana moderno (como os Acãs) descendem de gente do antigo Gana é **muito discutida** e não está provada. Quando este texto diz «Gana», refere-se sempre ao império medieval.'
  ] },
  { img: 'gan-mapa-imperio', leg: 'Mapa interpretativo do Império do Gana (Wagadu), no Sahel ocidental; os limites antigos são aproximados.' },
  { h: 'Onde ficava' },
  'O centro do Gana situava-se na região do **Aoukar** (ou Awkar) e do **Hodh**, no sudeste da atual **Mauritânia**, com extensão para o oeste do **Mali**. É uma zona de semideserto e savana seca, com chuvas curtas no verão e, nesta época, bastante mais verde do que hoje. A norte estava o Saara, atravessado por caravanas de camelos; a sul, as terras mais húmidas onde se extraía o ouro (**Bambuk**, entre os rios Senegal e Falémé, e mais tarde **Buré**, na zona do alto Níger, hoje Guiné).',
  'Uma coisa importante: **o Gana não controlava diretamente as minas de ouro**. Os mineiros eram povos do sul, que as fontes tratam como independentes ou como súbditos longínquos. O que o Gana controlava eram o **comércio** e as rotas, e isso bastava para enriquecer.',
  { img: 'gan-paisagem-sahel', leg: 'Paisagem dunar de Aoukar, Mauritânia, em fotografia contemporânea.' },
  { h: 'Quando existiu' },
  'As datas do Gana são **debatidas**. A chamada «data de fundação» (c. 300 d.C.) vem de listas de reis das tradições orais e de um cálculo posterior, não de documentos da época. Segundo tradições recolhidas no século XVII pelas crónicas de Tombuctu (*Tarikh al-Sudan* e *Tarikh al-Fattash*), há versões que falam de 44 reis (22 antes e 22 depois da Hégira, mas os números variam de manuscrito para manuscrito), e a lista tem um carácter mais simbólico do que histórico. A primeira menção segura em texto árabe é do século VIII–IX, e a sua queda como grande potência, no século XII–XIII. Aqui segue-se uma síntese prudente.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Antecedentes (cultura de Tichitt)', 'c. 2000 – 300 a.C.', 'Povos de pastores e agricultores de milho-miúdo no Dhar Tichitt; provável ancestral cultural dos Soninquês (debatido)'],
    ['Formação do Wagadu', 'c. 300 – 700 d.C.', 'Chefaturas soninquês; chegada do camelo (séc. III–IV); primeiros contactos com comerciantes do norte. Datação muito incerta'],
    ['Auge do Gana', 'c. 700 – 1050 d.C.', 'Primeiras menções árabes (al-Fazari, al-Ya’qubi, Ibn Hawqal); controlo do comércio do ouro e do sal; domínio de Aoudaghost (c. 990, debatido)'],
    ['Tunka Manin e os Almorávidas', 'c. 1050 – 1100 d.C.', 'Descrição de al-Bakri (1068); queda de Aoudaghost (1054–55); crise de 1076 (debatida); islamização progressiva'],
    ['Declínio e dispersão', 'c. 1100 – 1235', 'Perda de rotas e de ouro; domínio dos Sosso (c. 1203, debatido); absorção pelo Mali depois de Kirina (c. 1235)']
  ] } },
  { img: 'gan-koumbi-saleh-hoje', leg: 'Planta do sítio arqueológico de Koumbi Saleh, baseada nos levantamentos de janeiro de 2007; substitui a vista geral das ruínas.' },
  { h: 'De onde vieram?' },
  'Os fundadores do Gana são os **Soninquês** (também Sarakolés, Sarakholé ou Marka), um povo de língua **mandê** que ainda hoje vive no Senegal, no Mali e na Mauritânia. As suas próprias tradições contam que o primeiro rei, **Dinga**, veio «do leste» ou do Egito/Médio Oriente (uma lenda comum a muitos povos para dar um passado prestigioso) e que, com os seus filhos, fundou o Wagadu. Nenhuma prova arqueológica confirma essa viagem.',
  'Uma hipótese mais sólida liga os Soninquês aos povos da **cultura de Tichitt** (c. 2000 – 300 a.C.), que viveram em povoados de pedra nas escarpas do sul da Mauritânia e cultivaram milho-miúdo. Quando o Saara secou, as populações deslocaram-se para sul. É uma teoria bem aceite, mas **não definitiva**.',
  { h: 'Porque importam' },
  { lista: [
    '**Primeiro grande estado da África Ocidental** de que há registo: mostra que a região tinha organização política complexa muito antes do contacto europeu.',
    '**Comércio transaariano:** ligou a floresta e a savana ao Mediterrâneo; o ouro africano abasteceu a moeda de grande parte do mundo muçulmano e europeu medieval.',
    '**Tradição oral:** a memória do Gana (Wagadu, Dinga, Bida) sobreviveu séculos sem escrita local.',
    '**Um caso exemplar de método histórico:** mostra como se debate uma civilização com poucas fontes, de segunda mão e por vezes contraditórias.',
    '**Antecedente do Mali e do Songai:** os grandes impérios sudaneses seguintes assentaram no mesmo sistema de rotas e de reis-mercadores.'
  ] },
  { caixa: 'O Gana hoje', texto: 'Koumbi Saleh (Mauritânia) está na **Lista Indicativa** da UNESCO desde 2001, mas **não é Património Mundial**. Em contrapartida, os **Ksour Antigos de Ouadane, Chinguetti, Tichitt e Oualata** (povoados caravaneiros que herdaram o comércio do Gana) foram inscritos como Património Mundial em 1996. As visitas à região exigem cuidados de segurança e conselhos oficiais de viagem atualizados.' },
  { img: 'gan-oualata-rua', leg: 'Rua de Oualata, Mauritânia, em fotografia contemporânea.' }
];

const linha = [
  'Esta linha do tempo segue os acontecimentos principais da história do Gana. **Atenção:** quase todas as datas são aproximadas ou debatidas; as que vêm de textos árabes são mais fiáveis do que as da tradição oral.',
  { linha: [
    { d: 'c. 2000 – 300 a.C.', t: 'A cultura de Tichitt', x: 'No sul da Mauritânia, nas escarpas do Dhar Tichitt, vivem centenas de povoados de pedra, com pastores e agricultores de milho-miúdo. As escavações de Patrick Munson (a partir do final da década de 1960) mostram uma sociedade com alguma diferenciação social. Muitos investigadores veem aqui os antepassados dos Soninquês, mas **a ligação é uma hipótese**.' },
    { d: 'c. 250 a.C. – 400 d.C.', t: 'Djenné-Djenno, o contexto do Níger', x: 'No delta interior do Níger (hoje Mali), Djenné-Djenno cresce como centro urbano sem rei visível, com ferro, arroz e comércio de contas e cobre. Não faz parte do Gana, mas mostra que a região já tinha **cidades e redes de comércio** antes de qualquer império.' },
    { d: 'c. séc. III – IV d.C.', t: 'O camelo chega ao Saara ocidental', x: 'O camelo dromedário, trazido do Norte de África, torna o Saara atravessável com cargas pesadas. As rotas de comércio regulares entre o Magrebe e o Níger só se estabelecem verdadeiramente depois disto. A data exata do uso regular é debatida.' },
    { d: 'c. 300 d.C. (tradicional)', t: 'Origem do Wagadu segundo as listas de reis', x: 'É a data convencional em muitos manuais para o início do Gana. Provém de listas de reis transmitidas oralmente e escritas séculos depois. **Não há documento nem escavação que a confirme**; é melhor entendê-la como uma convenção.' },
    { d: 'Lenda', t: 'Dinga e Dyabe: nasce o Wagadu', x: 'Segundo a tradição soninquê, o herói **Dinga** veio do leste e teve filhos. Após a sua morte, os filhos disputaram o poder e Dyabe saiu vencedor e fundou o Wagadu. É um **mito de origem**, não história comprovada.' },
    { d: 'finais do séc. VIII', t: 'Primeira menção: «a terra do ouro»', x: 'O astrónomo e geógrafo árabe **al-Fazari** (finais do séc. VIII) refere-se ao Gana como a «terra do ouro». O texto original perdeu-se e chega-nos citado por autores posteriores. Por volta de 830, **al-Khwarizmi** também menciona o Gana.' },
    { d: 'c. 889 – 890', t: 'Al-Ya’qubi descreve rotas e reis', x: 'Em *Kitab al-Buldan*, **al-Ya’qubi** menciona o reino do Gana e as suas relações com os reinos vizinhos, e refere também Aoudaghost.' },
    { d: 'c. 947', t: 'Al-Mas’udi e o Gana', x: 'O historiador **al-Mas’udi** (c. 947) refere o Gana entre os reinos africanos e a abundância de ouro, apoiando a imagem de um reino rico.' },
    { d: 'c. 977 – 988', t: 'Ibn Hawqal: «o rei mais rico do mundo»', x: 'O viajante e geógrafo **Ibn Hawqal** descreve o rei do Gana como o mais rico da face da terra, pela quantidade de ouro que acumulava. Diz também ter visto em Aoudaghost um cheque (ou título de dívida) de 42 000 dinares ligado a um mercador de Sijilmassa, o que mostra o uso de crédito entre mercadores (o relato é dele e a quantia é impressionante, por isso lê-se com cautela).' },
    { d: 'c. 990', t: 'O Gana toma Aoudaghost (debatido)', x: 'Algumas leituras de textos árabes dizem que o rei do Gana conquistou Aoudaghost, cidade dos Sanhaja, por volta de 990 (ou no início do século XI), nomeando lá um governador. É uma leitura **debatida**, porque as fontes são parcas e ambíguas.' },
    { d: '1054 – 1055', t: 'Os Almorávidas tomam Aoudaghost', x: 'Os **Almorávidas**, um movimento militar-religioso saído das tribos Sanhaja do Saara, tomam Aoudaghost. O saque da cidade é descrito por fontes árabes e significa o fim da sua prosperidade (a cidade cai no decréscimo e acaba por ser substituída por Oualata).' },
    { d: '1063', t: 'Tunka Manin sobe ao trono', x: 'Segundo al-Bakri, o rei **Basi** morre e é sucedido pelo sobrinho **Tunka Manin**, que governa até c. 1076. A sucessão pelo filho da irmã é uma das informações mais curiosas do relato.' },
    { d: '1067 – 1068', t: 'Al-Bakri escreve a descrição mais célebre', x: 'De Córdova, no al-Andalus, **al-Bakri** compila o *Kitab al-Masalik wa-l-Mamalik* (Livro das Rotas e dos Reinos), que descreve o Gana, a corte, as cidades e os impostos. **Nunca esteve no Gana**: serviu-se de relatos de viajantes e de textos anteriores.' },
    { d: '1076 (debatido)', t: 'A «conquista» almorávida: facto ou lenda?', x: 'A tradição histórica afirma que, em 1076–77, os Almorávidas conquistaram a capital do Gana, causando a sua ruína. Em 1982–83, **Dierk Conrad e Humphrey Fisher** argumentaram que esta «conquista» foi uma interpretação tardia, sem base sólida nos textos contemporâneos, e que o Gana se converteu ao Islão e decaiu por outros motivos. O debate **continua**.' },
    { d: 'séc. XI – XII', t: 'Islamização e reorganização do comércio', x: 'O Islão ganha peso na elite do reino, e as rotas de comércio deslocam-se para leste e para sul. O ouro de **Buré** ganha importância em relação ao de Bambuk. O Gana perde o monopólio.' },
    { d: 'c. 1100', t: 'O fim do auge', x: 'Na maioria das sínteses, c. 1100 marca o fim do período de maior poder do Gana. Mas **a cidade de Koumbi Saleh continua habitada** até pelo menos ao século XIV, segundo as escavações.' },
    { d: 'c. 1203 (debatido)', t: 'Os Sosso dominam a região', x: 'O reino dos **Sosso**, de **Sumanguru Kanté** (Soumaoro), expande-se e, segundo tradições e datações modernas (c. 1203), toma a capital do Gana e impõe tributos à região. A tradição soninquê atribui o declínio à morte de Bida.' },
    { d: 'Lenda', t: 'A morte de Bida e a seca', x: 'Segundo a lenda, a serpente protetora **Bida** exigia todos os anos uma jovem em sacrifício. Quando um nobre a matou para salvar a jovem, a serpente foi-se embora, e seguiram-se sete anos de seca e de fome; o ouro desapareceu e a população dispersou-se. É um **mito de fundação e de queda**, não um acontecimento histórico.' },
    { d: 'c. 1235 (debatido)', t: 'Kirina: Sundiata derrota Sumanguru', x: 'O príncipe **Sundiata Keita**, do Mali, vence Sumanguru em Kirina (a data de c. 1235 é uma convenção moderna). O reino do Mali torna-se a nova grande potência e incorpora o que resta do Gana. O Gana passa a vassalo dos Mali.' },
    { d: 'séc. XIII', t: 'Oualata substitui Aoudaghost', x: 'Oualata torna-se o principal destino das caravanas do sul do Marrocos. Mais tarde torna-se cidade de sábios e de comércio e, em 1352, o viajante marroquino **Ibn Battuta** passa por lá.' },
    { d: 'séc. XIV', t: 'Koumbi Saleh é abandonada', x: 'As escavações indicam que a cidade foi ocupada até ao século XIV. A seguir, fica deserta, com as ruínas a servirem de abrigo e de pedreira.' },
    { d: 'c. 1655', t: 'As crónicas de Tombuctu recolhem a memória do Gana', x: 'Os cronistas de Tombuctu (*Tarikh al-Sudan*, c. 1655, e *Tarikh al-Fattash*, redigido entre os séculos XVI e XVIII) incluem listas de reis do Gana. São fontes locais, mas tardias, misturando história e lenda.' },
    { d: '1914', t: 'Bonnel de Mézières revela as ruínas de Koumbi Saleh', x: 'O oficial colonial francês **Albert Bonnel de Mézières** dá a conhecer as ruínas de Koumbi Saleh e propõe que sejam a capital do Gana.' },
    { d: '1949 – 1951', t: 'Escavações de Thomassey e Mauny', x: 'Os arqueólogos franceses **Paul Thomassey** e **Raymond Mauny** escavam em Koumbi Saleh: descobrem uma cidade de pedra com mesquita, bairros e cemitérios, e propõem para ela 15 000 a 20 000 habitantes (estimativa discutida).' },
    { d: '1960 – 1976', t: 'Escavações em Tegdaoust (Aoudaghost)', x: 'Equipas francesas e mauritanas (com **Jean Devisse**, **Robert Vernet** e **Denise Robert**) escavam em Tegdaoust, o sítio identificado como Aoudaghost, e mostram uma cidade rica em contas, cerâmica e vidro.' },
    { d: '1975 – 1981', t: 'Novas escavações em Koumbi Saleh', x: 'As escavações de **Serge Robert** (1975–76) e de **Sophie Berthier** (1980–81) reexaminam a cidade e propõem datas de ocupação (séc. V–XIV). Dão argumentos para duvidar de que Koumbi Saleh seja realmente o «Gana» de al-Bakri: **a cidade do rei nunca foi encontrada**.' },
    { d: '1982 – 1983', t: 'Conrad e Fisher contestam a «conquista»', x: 'Dierk Conrad e Humphrey Fisher publicam «The Conquest That Never Was» e põem em causa a ideia de uma conquista almorávida do Gana. O artigo muda a forma como a história do Gana é contada.' },
    { d: '1996 / 2001', t: 'UNESCO', x: 'Em 1996, os Ksour de Ouadane, Chinguetti, Tichitt e Oualata são inscritos como Património Mundial. Em 2001, Koumbi Saleh e Tegdaoust entram na Lista Indicativa.' }
  ] }
];

const mapa = [
  'O Gana não era um país de fronteiras definidas, mas um **espaço de reinos, chefaturas e rotas** em redor de uma capital. Este mapa mostra os lugares mais importantes. Muitas localizações são **hipóteses**: nenhum texto da época dá o nome da cidade com certeza, e a «cidade do rei» não foi encontrada.',
  { img: 'gan-mapa-cidades', leg: 'Mapa geográfico sem rótulos do Sahel ocidental: círculos em Koumbi Saleh, Tegdaoust/Aoudaghost, Oualata e Tichitt; zonas douradas de Bambuk e Bure. Os locais têm cronologias distintas; Tichitt e Oualata não devem ser lidas como cidades documentadas do século XI. Posições e zonas aproximadas.' },
  { tabela: { cab: ['Lugar', 'Local hoje', 'Papel', 'Para que ficou conhecido'], linhas: [
    ['Koumbi Saleh', 'Sudeste da Mauritânia', 'Provável capital (debatido)', 'Cidade de pedra com mesquita e cemitérios; identificada em 1914; ocupação séc. V–XIV'],
    ['Aoudaghost (Tegdaoust)', 'Sul da Mauritânia', 'Terminal das rotas do norte', 'Cidade comercial dos Sanhaja; ricas descrições de al-Bakri; tomada pelos Almorávidas em 1054–55'],
    ['Oualata (Walata)', 'Sudeste da Mauritânia', 'Sucessora de Aoudaghost', 'Cidade caravaneira, de saber e de comércio; Património Mundial'],
    ['Tichitt (Dhar Tichitt)', 'Centro-sul da Mauritânia', 'Antecedentes', 'Centenas de povoados de pedra do 2.º e 1.º milénios a.C.'],
    ['Djenné-Djenno', 'Delta do Níger, Mali', 'Contexto (não era Gana)', 'Uma das mais antigas cidades da África Ocidental, c. 250 a.C. – 1400 d.C.'],
    ['Bambuk', 'Entre o Senegal e o Falémé', 'Zona de ouro', 'Principal fonte de ouro aluvial nos primeiros séculos'],
    ['Buré', 'Alto Níger, Guiné', 'Zona de ouro', 'Ganha importância mais tarde, para o Mali'],
    ['Taghaza e Awlil', 'Deserto e costa', 'Fontes de sal', 'Sal de rocha no deserto (Taghaza) e sal marinho (Awlil)']
  ] } },
  { h: 'Koumbi Saleh, a «capital»' },
  'Koumbi Saleh está no sudeste da Mauritânia, a cerca de 30 km da fronteira com o Mali. A cidade ocupava uma colina cerca de 15 m acima da planície. As casas eram de **xisto e argila**, apertadas ao longo de ruas estreitas, com uma avenida larga (cerca de 12 m) de este a oeste. A **mesquita** media cerca de 46 por 23 metros. Dois grandes **cemitérios** ficavam fora da cidade, e um deles tem o chamado **Túmulo das Colunas**, datado por radiocarbono só em 2015 (três crânios da câmara principal, mortos entre o fim do século XI e o século XII). Mauny estimou 15 000 a 20 000 habitantes, o que é muito para uma cidade no Saara.',
  { img: 'gan-koumbi-saleh-ruinas', leg: 'Vista de satélite de parte da necrópole ocidental de Koumbi Saleh, mostrando a densidade das estruturas funerárias; substitui a fotografia das casas.' },
  { img: 'gan-koumbi-mesquita', leg: 'Reconstrução artística hipotética da mesquita de Koumbi Saleh, com muros de xisto ligado por argila e cobertura de madeira; a imagem não permite verificar a planta nem as dimensões. Ilustração gerada por IA.' },
  { img: 'gan-tumulo-colunas', leg: 'Mausoléu central do Túmulo das Colunas, Koumbi Saleh, fotografado em 1914: as colunas dos cantos desapareceram posteriormente.' },
  { caixa: 'Será mesmo a capital do Gana?', texto: [
    'Koumbi Saleh foi identificada com a capital do Gana em 1914 por Bonnel de Mézières, sobretudo pelo nome (*Kumbi* ressoa em «Gana») e porque encaixa nas distâncias de al-Bakri. Mas **nenhuma inscrição** diz «Gana», os dados arqueológicos mostram sobretudo uma **cidade muçulmana de mercadores** e, apesar de décadas de procura, **a «cidade do rei» (al-Ghaba) não apareceu**.',
    'Alguns investigadores propõem que a capital se tenha mudado várias vezes ou que o centro do reino fosse noutro lugar. Há quem sugira que Koumbi Saleh seja o bairro dos mercadores. A questão **continua aberta**.'
  ] },
  { h: 'As duas cidades de al-Bakri' },
  'Segundo al-Bakri, a capital do Gana eram **duas cidades**, com cerca de 10 km (6 milhas) de distância e povoamento contínuo entre elas. Uma era a **cidade dos muçulmanos**, com **doze mesquitas**, imãs e sábios (uma delas para a oração de sexta-feira). A outra, **al-Ghaba** («a floresta» ou «o bosque»), era a **cidade do rei**, rodeada por um recinto de pedra e por bosques sagrados, onde viviam os sacerdotes e onde estavam o palácio, as cabanas com cúpulas e os túmulos dos reis. Segundo al-Bakri, a entrada era vedada aos muçulmanos, exceto aos que serviam o rei.',
  { img: 'gan-duas-cidades', leg: 'Interpretação hipotética das duas povoações descritas por al-Bakri no século XI: cidade de mercadores e recinto real; a localização e relação com Koumbi Saleh permanecem debatidas. Ilustração gerada por IA.' },
  { h: 'Aoudaghost, a cidade do deserto' },
  'Aoudaghost, no atual sítio de **Tegdaoust**, ficava ao norte do Gana, no limite do deserto, e era o **terminal sul** das rotas vindas de Sijilmassa (Marrocos). Al-Bakri descreve jardins, hortas e **trigo regado com poços**, e mercadores tão ricos que um só dono podia ter mais de mil escravos (**é o seu relato**, possivelmente exagerado). As transações faziam-se em **ouro**. Foi tomada pelos Almorávidas em 1054–55; no século XII, al-Idrisi já a descreve como uma pequena cidade com pouca água. As escavações (1960–1976) mostraram ocupação desde os séculos VII–IX até ao século XV (abandono final).',
  { img: 'gan-aoudaghost-ruinas', leg: 'Ruínas de Tegdaoust, identificada com Aoudaghost, Mauritânia.' },
  { h: 'Oualata, a herdeira' },
  'Quando Aoudaghost declinou, **Oualata** (Walata) tornou-se o principal terminal das caravanas, entre os séculos XIII e XVI. As casas de pedra e de argila, com portas pintadas e pátios interiores, e a tradição de manuscritos fazem dela um dos grandes centros do Sahel.',
  { img: 'gan-oualata-casas', leg: 'Entrada decorada de uma casa em Oualata, Mauritânia, em fotografia contemporânea.' },
  { h: 'Tichitt, antes de tudo' },
  'Muito antes do Gana, as escarpas do Dhar Tichitt, no sul da Mauritânia, foram ocupadas por **centenas de povoados de pedra** (cerca de 500 segundo as contagens usuais). Os seus habitantes criavam gado e cultivavam milho-miúdo. É a **melhor candidata a antecedente** dos Soninquês, mas a ligação é debatida.',
  { img: 'gan-tichitt-povoado', leg: 'Vestígios de muros de pedra do povoado v.72, Dhar Tichitt–Oualata, anteriores ao Gana medieval.' },
  { h: 'Djenné-Djenno: um contexto' },
  'Djenné-Djenno, no delta interior do Níger, foi ocupada de c. **250 a.C. a 1400 d.C.**. Os arqueólogos **Susan e Roderick McIntosh** mostraram, a partir de 1977, que era uma cidade sem sinais de realeza centralizada, com **ferro, arroz e comércio** de contas desde muito cedo. Não era o Gana, mas ajuda a perceber que o Sahel e o Níger tinham cidades e redes comerciais próprias antes do Islão.',
  { img: 'gan-djenne-djenno', leg: 'Figura sem cabeça em terracota de Djenné-Djenno, Mali, datada de 900–1400 d.C., National Museum of Natural History, Washington; substitui a vista do montículo.' },
  { h: 'As rotas do ouro e do sal' },
  'As caravanas de camelos partiam de **Sijilmassa** (Marrocos) para o sul, atravessavam o deserto durante semanas e chegavam a **Aoudaghost** e ao Gana. Levavam **sal, cobre, tecidos, contas, cavalos e objetos de luxo**. Voltavam com **ouro, escravos, marfim e pimenta de Guiné**. Havia rotas para leste, até ao Egito, e para oeste, até ao Atlântico (Awlil). O Gana vivia de estar no meio.',
  { img: 'gan-rotas-transaarianas', leg: 'Mapa esquemático das ligações comerciais medievais entre Sijilmasa e o Sahel. Linhas pontilhadas: ligações indicativas, não itinerários levantados; branco: sal de Taghaza e zona costeira aproximada de Awlil; dourado: Bambuk e Bure. Combina referências de cronologias distintas.' }
];

const sociedade = [
  { h: '1. Organização política' },
  'O rei era chamado, nas fontes árabes, **«Gana»**: o nome do reino provém do **título** do soberano, que algumas tradições traduzem como «chefe de guerra». Chamavam-lhe também **Kaya Maghan** («senhor do ouro»). Como as tradições soninquês chamam ao país **Wagadu**, «Gana» é nome dado pelos de fora.',
  'O império era mais uma **confederação de reinos e chefaturas** do que um estado centralizado. Segundo al-Ya’qubi, o rei tinha sob a sua autoridade «reis» vassalos até ao vale do Níger. Estes enviavam tributos e **os filhos para a corte do rei**, uma forma de manter a lealdade (al-Bakri refere filhos de reis vassalos junto do soberano).',
  { caixa: 'A sucessão pelo sobrinho', texto: 'Al-Bakri escreve que o rei **não era sucedido pelo filho, mas pelo filho da irmã**, porque só do lado da mãe havia a certeza da linhagem. A forma matrilinear (sobrinho materno) está atestada em vários povos africanos, mas as tradições soninquês posteriores falam de sucessão pelos pais ou irmãos. Há debate sobre o que isto significa.' },
  { h: '2. Classes sociais' },
  { lista: [
    '**O rei e a família real:** o rei acumulava a autoridade política, religiosa e judicial; segundo a tradição, a dinastia era a dos **Cissé** (ou Tounkara).',
    '**Nobres e guerreiros:** chefes das linhagens e dos reinos vassalos, cavaleiros e arqueiros.',
    '**Mercadores:** muçulmanos do norte e do sul, e **Wangara** (comerciantes do sul, ligados ao ouro), que viviam num bairro próprio.',
    '**Camponeses e pastores:** a maioria, produtores de milho-miúdo, sorgo, gado.',
    '**Artesãos e ferreiros:** grupos especializados (ferro, couro, tecidos, cerâmica) com estatuto especial, por vezes temido, em muitas sociedades mandê.',
    '**Griots (bardos) e guardiões da memória:** cantores e historiadores orais, importantes para a memória do Gana.',
    '**Escravizados:** prisioneiros e pessoas compradas ou capturadas, usadas no trabalho e comerciadas para o norte.'
  ] },
  { img: 'gan-corte-rei', leg: 'Audiência do rei de Wagadu no século XI, interpretação artística inspirada no relato de al-Bakri. Ilustração gerada por IA.' },
  { h: 'A corte do rei, segundo al-Bakri' },
  'O texto mais célebre sobre o Gana é a descrição da corte por al-Bakri (1068), escrita em segunda mão. Diz o seguinte:',
  { lista: [
    'Quando dá audiência para ouvir queixas, o rei senta-se num **pavilhão**, rodeado por dez pajens com escudos e espadas de punho dourado.',
    'À sua direita estão os **filhos dos reis vassalos**, de roupas vistosas e **ouro entrançado nos cabelos**.',
    'À porta do pavilhão ficam **cães de raça**, com **colares de ouro e prata** com guizos.',
    'A audiência é anunciada por um **tambor** (*deba*), feito de um tronco escavado.',
    'Os súbditos não muçulmanos aproximam-se **de joelhos e deitando pó sobre a cabeça**; os muçulmanos aplaudem batendo palmas.',
    'O rei enfeita-se com **colares e braceletes** e usa um **barrete alto de ouro**, enrolado em turbantes de algodão fino.',
    'Os **cavalos** têm mantos bordados a ouro.',
    'O rei guarda para si **todas as pepitas de ouro**, deixando aos súbditos só o pó; uma pepita enorme servia de poste para atar o cavalo.',
    'Os intérpretes, o tesoureiro e a maioria dos ministros eram **muçulmanos**.'
  ] },
  { caixa: 'Quanto é facto e quanto é exagero?', texto: 'Al-Bakri nunca esteve no Gana. Usou informações de mercadores e escritos anteriores (em especial de Muhammad al-Warraq, do século X). O seu retrato é **vívido, mas de segunda mão**: números como um exército de 200 000 homens, com mais de 40 000 arqueiros, devem ser lidos com cuidado. A existência de uma corte rica e ritualizada é aceite, mas os pormenores não se podem comprovar.' },
  { h: '3. Religião' },
  'A religião dominante do Gana era a **religião tradicional soninquê**, com culto de antepassados, de espíritos da natureza e de **bosques sagrados**. Al-Bakri, que escrevia como muçulmano, fala de «idólatras» e de «feiticeiros» e de **sacrifícios** nos túmulos dos reis. Estes eram cobertos por cúpulas de madeira, e junto aos enterros punham-se alimentos e bebidas. Os testemunhos são tendenciosos, e é difícil saber o que era realmente feito.',
  { tabela: { cab: ['Elemento', 'Papel', 'Origem do dado'], linhas: [
    ['Bida', 'Serpente protetora do Wagadu, ligada às chuvas e ao ouro', 'Tradição oral soninquê; **lenda**'],
    ['Dinga', 'Antepassado fundador e herói', 'Tradição oral; **lenda**'],
    ['Bosques sagrados (al-Ghaba)', 'Lugar do culto, residência dos sacerdotes, túmulos dos reis', 'Al-Bakri, 1068'],
    ['O rei', 'Mediador entre os súbditos e as forças invisíveis', 'Al-Bakri; interpretação'],
    ['Islão', 'Religião dos mercadores e, cada vez mais, da corte', 'Al-Bakri; arqueologia (mesquita de Koumbi Saleh)']
  ] } },
  { img: 'gan-ritual-bida', leg: 'Cena da lenda soninquê de Bida: uma grande serpente emerge de um poço diante de uma jovem; representação mitológica. Ilustração gerada por IA.' },
  { h: 'Islamização' },
  'O Islão chegou ao Gana através dos **mercadores**, não pela guerra: já no tempo de al-Bakri, havia uma cidade muçulmana com doze mesquitas e muçulmanos em cargos de confiança. O rei, porém, continuava a seguir a religião tradicional. Quando o Gana «se converteu» e como é debatido: algumas versões põem a conversão em torno de **1076**, outras apontam um processo lento, de séculos. As escavações de Koumbi Saleh mostram uma mesquita grande e uma cidade muçulmana.',
  { h: 'A «conquista» almorávida: o que se sabe e o que se debate' },
  'O que parece seguro: os **Almorávidas**, do Saara, **tomaram Aoudaghost em 1054–55** e pregavam o Islão pelo sul. O que **não está provado**: uma **conquista do Gana** em 1076–77 (ou, como alguns dizem, 1076). Esta é a versão tradicional, apoiada em Ibn Khaldun (século XIV) e em tradições recolhidas mais tarde.',
  'Em 1982–83, **Dierk Conrad e Humphrey Fisher** argumentaram que esta «conquista» é, em grande parte, uma **construção tardia**: as fontes contemporâneas (como al-Bakri) não a mencionam, e a arqueologia não mostra destruição em Koumbi Saleh nessa altura. Outros historiadores (por exemplo, no volume de **Levtzion e Hopkins**) preferem manter alguma forma de pressão ou influência almorávida, sem uma conquista militar clássica. A leitura mais prudente: **houve contacto, pressão e islamização; uma conquista que arrasou o Gana não é provável**.',
  { h: '4. Economia' },
  'O Gana era rico porque estava no **meio** do comércio entre o ouro do sul e o sal do norte. Segundo al-Bakri, os mercadores pagavam ao rei **1 dinar de ouro por cada carga de burro com sal que entrava** e **2 dinares por cada uma que saía**; sobre o cobre cobrava-se 5 mithqals, e sobre outras mercadorias, 10. O rei guardava as pepitas, e os súbditos só podiam ter o pó de ouro, uma maneira de evitar que o ouro perdesse valor por ser abundante demais.',
  { lista: [
    '**Exportava:** ouro, escravizados, marfim, pimenta e noz-de-cola (a noz-de-cola mais tarde), couros.',
    '**Importava:** sal, cobre, tecidos, contas, cavalos, objetos de metal, produtos de luxo.',
    '**Agricultura:** milho-miúdo, sorgo, e em Aoudaghost trigo e hortas.',
    '**Pecuária:** gado, ovelhas, cabras; cavalos de elite.',
    '**Tributos e monopólios:** impostos de passagem e de comércio, tributos de reinos vassalos.'
  ] },
  { img: 'gan-ouro-pepitas', leg: 'Pepitas de ouro encontradas no Arizona em 2006, com moeda para escala; imagem da matéria-prima, sem ligação arqueológica a Wagadu.' },
  { img: 'gan-mina-ouro', leg: 'Reconstrução artística da lavagem manual de ouro aluvial na região de Bambuk, c. século XI; substitui a fotografia de mineração atual. Ilustração gerada por IA.' },
  { img: 'gan-sal-caravana', leg: 'Chegada a Tombuctu de uma caravana com sal de Taoudenni, postal de François-Edmond Fortier, início do século XX; fotografia posterior ao Gana medieval.' },
  { caixa: 'O «comércio mudo»', texto: 'Fontes árabes e europeias descrevem uma troca em que os vendedores de sal depunham as mercadorias e se afastavam; os mineiros de ouro deixavam o ouro e também se afastavam, e assim por diante, sem se verem, até ficarem satisfeitos. É um relato repetido durante séculos, desde a Antiguidade. **Não sabemos se era assim, nem se existiu no Gana**: pode ser em parte um estereótipo de viajantes.' },
  { h: 'O camelo e as caravanas' },
  'O **camelo (dromedário)** chegou ao Saara ocidental nos primeiros séculos d.C. e mudou tudo: aguentava dias sem beber e carregava pesos grandes. As caravanas tinham centenas ou milhares de animais e viajavam semanas de poço em poço. Os guias e os donos dos camelos eram os **povos do deserto** (Sanhaja e outros Berberes), com quem o Gana negociava e a quem por vezes se opunha.',
  { img: 'gan-camelo', leg: 'Homens com dromedários em Chinguetti, Mauritânia, em fotografia contemporânea.' },
  { img: 'gan-caravana-ilustracao', leg: 'Caravana de dromedários com sal e tecidos chega a uma Aoudaghost imaginada, século XI. Ilustração gerada por IA.' },
  { h: '5. Escrita e fontes' },
  'Não se conhece escrita local no Gana. A história foi guardada de memória, por **griots**. A escrita árabe aparece com os mercadores e os sábios muçulmanos, e as escavações encontraram alguns objetos com inscrição árabe, mas não um arquivo local.',
  { lista: [
    '**Fontes árabes de segunda mão:** al-Fazari (finais do séc. VIII), al-Khwarizmi (c. 830), al-Ya’qubi (c. 889–890), al-Mas’udi (c. 947), Ibn Hawqal (c. 977–988), al-Bakri (1068), al-Idrisi (1154), Yaqut e Ibn Khaldun (séculos XIII–XIV).',
    '**Crónicas de Tombuctu:** *Tarikh al-Sudan* e *Tarikh al-Fattash* (séc. XVI–XVII, com acrescentos posteriores), com listas de reis do Gana, de data tardia.',
    '**Tradições orais soninquês:** a epopeia do Wagadu (a que Frobenius chamou «Dausi», recolhida no séc. XX), as histórias de Dinga e de Bida.',
    '**Arqueologia:** Koumbi Saleh, Tegdaoust, Tichitt, Djenné-Djenno.'
  ] },
  { img: 'gan-manuscrito-bakri', leg: 'Manuscrito antigo numa biblioteca de Chinguetti, Mauritânia; alternativa documental, sem identificação como Livro das Rotas e dos Reinos de al-Bakri.' },
  { h: '6. Casa e família' },
  'Em Koumbi Saleh, as casas eram de **xisto e argila**, com pátios, divisões pequenas e ruas estreitas. No campo havia **cabanas de adobe** ou de colmo, em aldeias agrupadas por linhagem. A família era alargada e a linhagem tinha grande peso. Os rituais de nascimento, de casamento e de morte seguiam as tradições soninquês, mais tarde mescladas de práticas islâmicas.',
  { img: 'gan-casa-soninque', leg: 'Chefe de aldeia soninquê, com habitações e coberturas vegetais ao fundo, região de Kayes, Mali, 1972.' },
  { h: '7. Alimentação' },
  'A base era o **milho-miúdo** (cultivado desde Tichitt) e o **sorgo**, em papas, bolos e cervejas, com leite, carne, peixe do rio e hortícolas. Em Aoudaghost cultivava-se **trigo e produziam-se hortas** (al-Bakri). As tâmaras e o sal chegavam do deserto. As elites comiam carne mais vezes e tinham produtos importados.',
  { h: '8. Vestuário e joias' },
  'O algodão fino e os panos tingidos eram sinais de riqueza. Al-Bakri descreve os reis e os filhos de vassalos com **ouro nos cabelos** e **colares e braceletes**. O ouro trabalhado, as contas de vidro e de pedra e os adornos de cobre eram comuns nas elites e nos mercadores.',
  { h: '9. Música e jogos' },
  'A música era essencial: o **tambor deba** anunciava as audiências do rei, e os **griots** cantavam genealogias e feitos. Instrumentos como o balafom, as harpas-alaúdes e as flautas são comuns no Sahel, embora **não se saiba com rigor quais já existiam no Gana**. A kora, por exemplo, é de tradição mandinga e muito posterior. Jogos de tabuleiro com sementes, de tipo *mancala*, são comuns em África, mas não há prova específica para o Gana.',
  { img: 'gan-griot', leg: 'O griot Papa Susso toca kora na Truman State University; fotografia contemporânea de uma tradição musical, sem representar a corte de Wagadu.' },
  { h: '10. Conhecimento, ciência e medicina' },
  'O Gana não deixou textos científicos. Sabemos que havia **conhecimento prático**: calendário agrícola, observação do clima, medicina de plantas, metalurgia e **medição do ouro com pesos**. Os sábios muçulmanos trouxeram a escrita, o direito islâmico e a astronomia. Muito do que seria o saber local perdeu-se por ser oral.',
  { h: '11. Tecnologia' },
  { lista: [
    '**Ferro:** forjas e armas de ferro; o ferro é conhecido na região desde há mais de dois mil anos (Djenné-Djenno).',
    '**Construção:** pedra de xisto e argila, madeira de acácia (al-Bakri).',
    '**Poços e água:** essenciais em Aoudaghost e em Koumbi Saleh.',
    '**Transporte:** camelo e burros; barcos nos rios do sul.',
    '**Ourivesaria e olaria:** objetos de ouro e cobre; cerâmica local.'
  ] },
  { img: 'gan-ferreiro', leg: 'Ferreiro dogon numa forja ao ar livre em Sangha, Mali, 1989; fotografia contemporânea.' },
  { img: 'gan-terracota-djenne', leg: 'Figura sentada em terracota, região do Delta Interior do Níger, povo de Djenné, século XIII, Metropolitan Museum of Art, 1981.218.' },
  { h: '12. Guerra' },
  'Segundo al-Bakri, o rei podia reunir **200 000 homens**, dos quais mais de 40 000 arqueiros (número muito provavelmente exagerado). O Gana tinha **cavalaria** de elites e **arqueiros** a pé, com arcos e setas, lanças e espadas de ferro. O seu poder assentava mais em alianças, tributos e dissuasão do que em campanhas de conquista. A grande derrota que a tradição guardou foi a perante os Sosso e depois os Mali.',
  { img: 'gan-moeda-almoravida', leg: 'Dinar de ouro de Yusuf ibn Tashfin, cunhado em Aghmat, atual Marrocos, período almorávida.' }
];

const personalidades = [
  'Poucos reis e figuras do Gana são conhecidos pelo nome. **Atenção:** muitos nomes vêm da tradição oral ou de fontes árabes tardias, e alguns são lendários.',
  { h: 'Dinga e Dyabe (lenda)' },
  'Segundo a tradição soninquê, **Dinga** é o herói que veio do leste e é o antepassado dos fundadores do Wagadu. Dos seus filhos, **Dyabe** terá fundado o reino. É um **mito de origem**, sem confirmação histórica ou arqueológica.',
  { h: 'Bida, a serpente protetora (lenda)' },
  'A serpente **Bida** protegia o Wagadu e garantia chuva e ouro, em troca de um sacrifício anual. A sua morte, na lenda, trouxe sete anos de seca e a ruína do reino. É uma figura **mítica**, mas muito reveladora da religião tradicional e da memória do Gana.',
  { h: 'Os Cissé e o «Kaya Maghan»' },
  'Kaya Maghan («senhor do ouro») é o título dado ao rei na tradição, e a dinastia é associada aos **Cissé**. Os nomes dos primeiros reis são **incertos e muitas vezes lendários**, em listas tardias.',
  { h: 'Basi (Bassi), rei do Gana' },
  'Segundo al-Bakri, **Basi** reinava no meio do século XI e morreu em 1063, passando o trono ao sobrinho. As informações são curtas, e a identificação pode variar entre as traduções.',
  { h: 'Tunka Manin, rei do Gana (c. 1063 – 1076)' },
  'Era o rei de quem fala al-Bakri: **«Tunka»** é um título soninquê (pode significar «rei» ou «chefe») e **Manin** o seu nome. Governava, segundo o texto, com **um tesoureiro, intérpretes e ministros muçulmanos**, numa corte opulenta e em ligação com sábios islâmicos. É o rei mais bem descrito do Gana. A sua morte (c. 1076) coincide com o episódio debatido da «conquista».',
  { img: 'gan-tunka-manin', leg: 'Retrato imaginado de Tunka Manin, rei de Wagadu no século XI; a sua aparência não é documentada por retratos conhecidos. Ilustração gerada por IA.' },
  { h: 'Abdallah ibn Yasin, fundador espiritual dos Almorávidas' },
  'Teólogo do Magrebe (m. c. 1058–59), foi o **guia religioso** do movimento almorávida entre os Sanhaja do Saara. O movimento nasceu de uma reforma religiosa e transformou-se numa força militar. Esteve ligado à tomada de Aoudaghost (1054–55), de que se fala nas fontes.',
  { img: 'gan-almoravidas', leg: 'Guerreiros sanhaja almorávidas com véus, escudos e montadas, século XI; interpretação artística. Ilustração gerada por IA.' },
  { h: 'Abu Bakr ibn Umar, líder almorávida' },
  'Chefe dos Almorávidas do Saara, morreu em 1087. A tradição diz que foi ele quem comandou a «conquista» do Gana em 1076–77, mas isso é precisamente o que **Conrad e Fisher** contestam: as fontes antigas não o afirmam.',
  { h: 'Os geógrafos e historiadores árabes' },
  'O Gana existe para nós por causa de **al-Fazari** (finais do século VIII, «terra do ouro»), **al-Khwarizmi** (c. 830), **al-Ya’qubi** (c. 889–890), **al-Mas’udi** (c. 947), **Ibn Hawqal** (c. 977–988) e **al-Bakri** (1014–1094). Nenhum deles esteve no Gana. **Al-Bakri**, em Córdova, escreveu a descrição mais célebre, e **Ibn Hawqal** afirma ter viajado pelo Magrebe e pelo Saara, o que o pode tornar um pouco mais próximo dos factos (mesmo assim, o Gana é descrito de ouvido).',
  { img: 'gan-al-bakri', leg: 'Retrato imaginado de al-Bakri numa biblioteca andaluza, século XI; não é uma imagem histórica conhecida do autor. Ilustração gerada por IA.' },
  { h: 'Sumanguru Kanté (Soumaoro)' },
  'Rei dos **Sosso** (reino de Kaniaga), é uma figura entre história e lenda: **ferreiro**, feiticeiro e conquistador, na tradição mandinga, derrotou e dominou a região do Gana no início do século XIII (c. 1203, debatido) e foi vencido por **Sundiata** em Kirina (c. 1235).',
  { h: 'Sundiata Keita, fundador do Mali' },
  'O herói da **Epopeia de Sundiata**, que a tradição dos griots mantém viva, é o príncipe que, após exílio, derrotou Sumanguru em Kirina e fundou o império do **Mali**, que absorveu a herança do Gana. Foi um personagem histórico real, mas o seu retrato é em muito **épico**. Morreu c. 1255.',
  { img: 'gan-sundiata', leg: 'Retrato imaginado de Sundiata Keita, fundador do Império do Mali no século XIII; não reproduz uma estátua nem uma imagem histórica conhecida. Ilustração gerada por IA.' },
  { h: 'Gassire (epopeia soninquê)' },
  'O herói da lenda **Gassire e o seu alaúde**, fixada por Leo Frobenius no século XX, ligada ao Wagadu: o príncipe cuja dor deu nascimento ao canto e à poesia (a *Dausi*). É uma figura **literária e lendária**.',
  { h: 'Raymond Mauny e os arqueólogos do Gana' },
  '**Raymond Mauny** (1912–1994) foi o grande estudioso francês da África Ocidental medieval e escavou Koumbi Saleh com **Paul Thomassey** (1949–51). Depois vieram **Serge Robert**, **Sophie Berthier** e a equipa de **Jean Devisse** em Tegdaoust. **Susan e Roderick McIntosh** revolucionaram o conhecimento do contexto do Níger em Djenné-Djenno. **Nehemia Levtzion**, **Dierk Conrad** e **Humphrey Fisher** são nomes essenciais na discussão das fontes.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**O modelo de reino comerciante do Sahel:** reis que governam pelo controlo das rotas e do tributo, seguido pelo Mali e pelo Songai.',
    '**A fama do «ouro do Sudão»:** o ouro das savanas moveu o comércio mediterrânico durante séculos e, mais tarde, motivou as viagens atlânticas portuguesas ao longo da costa africana.',
    '**A memória oral:** a epopeia do Wagadu, Dinga e Bida, ainda cantada.',
    '**Os soninquês de hoje:** presentes no Mali, no Senegal, na Mauritânia e na Gâmbia, com a sua língua, a sua cultura e uma grande diáspora, incluindo em França.',
    '**Um nome:** o Gana moderno tomou-o em 1957, como símbolo de dignidade africana.'
  ] },
  { img: 'gan-gana-1957', leg: 'Multidão nas celebrações da independência do Gana moderno, 1957, fotograma de Ghana: A New Nation, Universal Newsreels; contexto distinto do Wagadu medieval.' },
  { h: 'Arte' },
  'Do Gana medieval sobreviveu muito pouca arte. Do mesmo contexto regional, há **estatuetas de terracota** e objetos de ferro e de cobre, e uma grande tradição de música e de poesia oral. O ouro do Gana viveu sobretudo em moedas de outros lugares.',
  { h: 'Arquitetura: pedra e argila do Sahel' },
  'As casas e mesquitas de **xisto e argila** de Koumbi Saleh, e mais tarde as cidades de **Oualata, Chinguetti, Ouadane e Tichitt**, mostram a arquitetura do deserto: paredes grossas, pátios interiores, minaretes quadrados. Esta tradição continua nas mesquitas de adobe do Mali, como a de Djenné.',
  { img: 'gan-ksour-chinguetti', leg: 'Edifícios de Chinguetti, Mauritânia, ameaçados pelo avanço da areia, em fotografia contemporânea.' },
  { img: 'gan-manuscritos', leg: 'Página de manuscrito de Tombuctu com astronomia e matemática; tradição escrita posterior ao auge de Wagadu.' },
  { h: 'A redescoberta do Gana' },
  { lista: [
    '**Século XIX:** europeus como o alemão **Heinrich Barth** (1850–55) recolhem informação sobre o passado do Sudão.',
    '**1912:** o administrador francês **Maurice Delafosse** publica a primeira grande síntese do passado da região (*Haut-Sénégal-Niger*), que fixou muitas datas e que hoje é discutida.',
    '**1914:** **Bonnel de Mézières** identifica Koumbi Saleh.',
    '**1949–51:** **Thomassey e Mauny** escavam.',
    '**1960–76:** escavações em Tegdaoust (Aoudaghost).',
    '**1973:** **Nehemia Levtzion** publica *Ancient Ghana and Mali*; **1981:** Levtzion e Hopkins editam o *Corpus of Early Arabic Sources for West African History*.',
    '**1975–81:** Serge Robert e Sophie Berthier em Koumbi Saleh.',
    '**1982–83:** Conrad e Fisher contestam a «conquista».',
    '**2015:** primeira datação por radiocarbono do Túmulo das Colunas (fim do séc. XI–XII).'
  ] },
  { img: 'gan-escavacao', leg: 'Sepultura individual do Túmulo das Colunas após limpeza superficial em 2007, Koumbi Saleh; substitui a fotografia de escavação em Djenné-Djenno.' },
  { h: 'Onde visitar e ver' },
  { lista: [
    '**Koumbi Saleh e Tegdaoust (Mauritânia):** os sítios arqueológicos. O acesso é difícil e a segurança instável: consulte sempre os conselhos oficiais de viagem.',
    '**Oualata, Chinguetti, Ouadane e Tichitt (Mauritânia):** Património Mundial (1996).',
    '**Djenné e Djenné-Djenno (Mali):** Património Mundial (1988).',
    '**Museu Nacional do Mali (Bamako) e Museu Nacional da Mauritânia (Nouakchott).**',
    '**Museu do Quai Branly (Paris) e Museu Metropolitano (Nova Iorque):** coleções de arte do Mali e do Sahel.'
  ] },
  { img: 'gan-koumbi-museu', leg: 'Placa epigráfica de xisto de Koumbi Saleh com fórmulas religiosas e decoração geométrica, Museu Nacional de Nouakchott.' }
];

const quiz = [
  { p: 'O Império do Gana medieval é o mesmo território que a República do Gana atual?', op: ['Sim, é o mesmo país', 'Sim, mas só parcialmente', 'Não: ficava a cerca de 700–800 km a noroeste, na Mauritânia e no Mali', 'Ficava no Egito'], certa: 2, exp: 'O Gana atual ficou com esse nome em 1957, por simbolismo. O império ficava no sudeste da Mauritânia e oeste do Mali.' },
  { p: 'Qual era a língua do povo fundador do Gana?', op: ['Soninquê (mandê)', 'Árabe', 'Suaíli', 'Berbere'], certa: 0, exp: 'Os Soninquês, de língua mandê, são considerados os fundadores do Wagadu.' },
  { p: 'De onde vem o nome «Gana»?', op: ['Do nome da capital', 'De um rio', 'Do nome do deserto', 'Do título do rei'], certa: 3, exp: 'Segundo as fontes árabes, «Gana» era o título do soberano, e passou a designar o reino. O nome local era Wagadu.' },
  { p: 'Qual era a base da riqueza do Gana?', op: ['Minas de diamantes', 'O controlo do comércio do ouro e do sal', 'A pesca no Atlântico', 'A produção de seda'], certa: 1, exp: 'O Gana ficava entre o ouro do sul e o sal do norte e cobrava impostos sobre esse comércio.' },
  { p: 'O Gana controlava diretamente as minas de ouro?', op: ['Sim, todas', 'Não: as minas eram de povos do sul; o Gana controlava o comércio', 'Só as de Buré', 'Só as do Egito'], certa: 1, exp: 'As minas de Bambuk e Buré ficavam fora do centro do Gana. O rei controlava o comércio e as pepitas que lhe eram entregues.' },
  { p: 'Que animal tornou possível o comércio transaariano regular?', op: ['O cavalo', 'O elefante', 'O burro', 'O camelo'], certa: 3, exp: 'O camelo dromedário chegou ao Saara ocidental nos séculos III–IV e permitiu travessias longas.' },
  { p: 'Quem escreveu em 1068 a descrição mais célebre da corte do Gana, sem lá ter estado?', op: ['Ibn Battuta', 'Heródoto', 'Al-Bakri', 'Marco Polo'], certa: 2, exp: 'Al-Bakri, de Córdova, compilou relatos de mercadores e textos anteriores.' },
  { p: 'Segundo al-Bakri, quem sucedia ao rei do Gana?', op: ['O filho da irmã (sobrinho)', 'O filho mais velho', 'O mais forte guerreiro', 'O chefe dos mercadores'], certa: 0, exp: 'Al-Bakri refere a sucessão pelo filho da irmã, mas o seu significado é debatido.' },
  { p: 'Que particularidade tinha a capital descrita por al-Bakri?', op: ['Era um grande porto', 'Estava num vulcão', 'Eram duas cidades: a dos muçulmanos e a do rei', 'Era subterrânea'], certa: 2, exp: 'Havia a cidade dos muçulmanos, com doze mesquitas, e a do rei, al-Ghaba, a cerca de 10 km.' },
  { p: 'Que sítio arqueológico é mais associado à capital do Gana (embora a identificação seja debatida)?', op: ['Tombuctu', 'Koumbi Saleh', 'Djenné', 'Carthago'], certa: 1, exp: 'Koumbi Saleh, na Mauritânia, foi identificada em 1914, mas a cidade do rei nunca foi encontrada.' },
  { p: 'O que aconteceu a Aoudaghost em 1054–55?', op: ['Foi fundada', 'Foi destruída por um terramoto', 'Foi vendida ao Egito', 'Foi tomada pelos Almorávidas'], certa: 3, exp: 'Os Almorávidas tomaram a cidade comercial, que depois declinou e foi substituída por Oualata.' },
  { p: 'O que defenderam Conrad e Fisher em 1982–83?', op: ['Que a «conquista» almorávida de 1076 é muito duvidosa e tardia', 'Que o Gana nunca existiu', 'Que Koumbi Saleh era um porto', 'Que o Gana era cristão'], certa: 0, exp: 'Argumentaram que a conquista é uma construção tardia, sem base nos textos contemporâneos, e o debate continua.' },
  { p: 'Quem derrotou Sumanguru Kanté, em Kirina (c. 1235)?', op: ['Tunka Manin', 'Sundiata Keita', 'Abu Bakr ibn Umar', 'Al-Bakri'], certa: 1, exp: 'Sundiata Keita venceu os Sosso e fundou o Mali, que incorporou o que restava do Gana.' },
  { p: 'Segundo a lenda soninquê, quem era Bida?', op: ['Um rei do Gana', 'Um deus do mar', 'Uma serpente protetora do Wagadu', 'Um mercador'], certa: 2, exp: 'Bida era a serpente que garantia chuva e ouro. A sua morte trouxe seca e fim do reino, segundo a lenda.' },
  { p: 'Que conjunto de povoados da Mauritânia foi inscrito pela UNESCO em 1996, herdeiro do comércio caravaneiro?', op: ['Ksour de Ouadane, Chinguetti, Tichitt e Oualata', 'Pirâmides de Gizé', 'Ruínas de Cartago', 'Tombuctu e Gao'], certa: 0, exp: 'Os Ksour antigos são Património Mundial desde 1996. Koumbi Saleh está apenas na Lista Indicativa.' }
];

export default {
  id: 'gana',
  cor: '#c9a23f',
  emblema: '../assets/img/gana.png',
  nome:    { pt: 'Império do Gana (Wagadu)', en: 'Ghana Empire (Wagadu)' },
  periodo: { pt: 'c. 300 – 1100', en: 'c. AD 300 – 1100' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
