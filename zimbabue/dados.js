// GRANDE ZIMBABUÉ — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas aproximadas e, onde são debatidas, assinaladas como tal. a.C./d.C. A cronologia do Grande Zimbabué assenta em datações por radiocarbono e em cerâmica importada, e está em revisão; as crónicas locais escritas não existem.
// Imagens: cada {img:'id'} procura o ficheiro  zimbabue/img/id.jpg  (ver IMAGENS_ZIMBABUE.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'O **Grande Zimbabué** foi a maior cidade de pedra da África subsariana medieval: uma capital que, no auge, terá tido **cerca de 10 000 a 20 000 habitantes** (estimativa), erguida no planalto do sul do atual Zimbabué, entre os rios Limpopo e Zambeze. As suas muralhas de granito, assentes **sem argamassa** e com até 11 metros de altura, são o maior conjunto de arquitetura de pedra anterior à colonização a sul do Sara.',
    'Foi obra de antepassados dos atuais **shona** (em particular do ramo karanga), que prosperaram com a criação de gado, a metalurgia e, sobretudo, o **comércio do ouro e do marfim** com a costa suaíli e, através dela, com a Arábia, a Pérsia, a Índia e a China. Depois de c. 1450 o centro perdeu importância, e o poder deslocou-se para outros Estados (Khami, Mutapa). Quando os europeus ‘descobriram’ as ruínas, no século XIX, muitos recusaram-se a acreditar que fossem africanas, uma ideia que a arqueologia refutou no início do século XX.'
  ] },
  { img: 'zim-mapa-regiao', leg: 'Mapa físico da África austral, com o Grande Zimbabué, Mapungubwe e Sofala assinalados; adaptação de uma base de Eric Gaba.' },
  { h: 'Onde ficava' },
  'O Grande Zimbabué fica na província de **Masvingo**, no sudeste do Zimbabué atual, a cerca de **30 km** da cidade de Masvingo e a mais de 1000 m de altitude. É um planalto de savana ondulada, com granito aflorando em grandes cúpulas, boa pastagem para gado e rios que correm para o oceano Índico. A costa fica a cerca de 400–500 km para leste, e o caminho natural até lá segue os vales dos rios Save e Buzi até ao porto de **Sofala**, hoje em Moçambique.',
  'O planalto tinha duas grandes riquezas: **ouro** (milhares de antigas minas, hoje identificadas por prospetores e arqueólogos) e **pastagens** para o gado, que era a forma de riqueza mais importante. Entre os vales do Limpopo (a sul) e do Zambeze (a norte), o planalto foi o centro de uma tradição de construção em pedra que deixou **centenas de sítios** com muralhas, em geral chamados ‘zimbabwes’.',
  { img: 'zim-cerco-grande', leg: 'Vista aérea do Cerco Grande, Grande Zimbabué.' },
  { h: 'O nome' },
  'A palavra **zimbabwe** é shona. As duas explicações mais citadas são **dzimba-dza-mabwe**, ‘casas de pedra’ (em karanga), e **dzimba-hwe**, ‘casas veneradas’ (em zezuru), um termo aplicado às residências dos chefes. Ambas aparecem nos livros. O que é seguro é que a palavra designava as casas ou cortes dos chefes e que o planalto tem muitas centenas de sítios do género; o do Grande Zimbabué foi apenas o maior, e por isso é ‘o Grande’. Em 1980 o país tomou o nome do sítio.',
  { h: 'Quando existiu' },
  'Não há registos escritos locais. A cronologia assenta em **radiocarbono**, em estratigrafia e em objetos importados de datação conhecida (cerâmica chinesa, vidro, contas). Um estudo bayesiano publicado em 2013 (Chirikure e colegas) aponta que as muralhas de pedra começaram **por volta do final do século XII ou início do XIII**, o auge foi nos **séculos XIV e XV**, e a ocupação continuou em escala reduzida pelo menos até ao século XVI e provavelmente ao XVII. Antes disso, o local foi habitado desde cedo por agricultores da Idade do Ferro, mas sem as grandes muralhas.',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Raízes da Idade do Ferro', 'c. séculos III – IX', 'Agricultores de língua bantu (tradição Gokomere e outras) instalam-se no planalto; gado, cereais, ferro'],
    ['Precursores no Limpopo', 'c. 900 – 1300', 'Schroda, K2 e Mapungubwe (África do Sul/Botsuana/Zimbabué); Leopard’s Kopje, no sudoeste do Zimbabué; comércio de marfim e contas com a costa'],
    ['Primeira ocupação do Grande Zimbabué', 'c. séculos XI – XII', 'Povoado no cabeço da colina (Acrópole), ainda sem as grandes muralhas'],
    ['Apogeu do Grande Zimbabué', 'c. 1200 – 1450', 'Muralhas de pedra, Cerco Grande, aves de pedra; ouro e marfim para a costa; população máxima nos séculos XIV–XV'],
    ['Declínio do centro', 'c. 1450 em diante', 'O poder político desloca-se; ocupação mais pequena continua (séculos XVI–XVII, debatido)'],
    ['Herdeiros', 'c. 1430 – séculos XVII–XIX', 'Mutapa (norte), Torwa em Khami (sudoeste), mais tarde o Estado Rozvi; primeiros contactos com os portugueses']
  ] } },
  { img: 'zim-mapa-comercio', leg: 'Mapa esquemático dos corredores de comércio do planalto até Sofala e do oceano Índico, c. 1400. Rotas aproximadas. Mapa desenhado digitalmente.' },
  { h: 'Quem eram?' },
  'Os construtores do Grande Zimbabué eram **africanos de língua bantu**, antepassados dos atuais **shona**, em particular dos **karanga**, que hoje vivem na região de Masvingo. Esta é a conclusão de **mais de um século de arqueologia**: a cerâmica, o gado, as casas de barro e as tradições orais e religiosas de Great Zimbabwe são continuação direta da cultura da Idade do Ferro da região, e não há um único achado que exija uma origem estrangeira. Os nomes dos seus reis não chegaram até nós.',
  { h: 'Porque importam' },
  { lista: [
    '**Arquitetura:** muralhas de granito curvas, bem assentadas e sem argamassa, que são das maiores construções antigas de África a sul do Sara.',
    '**Comércio mundial:** o ouro do planalto do Zimbabué chegou, através de Sofala e Kilwa, a mercados da Arábia, da Índia e do Mediterrâneo; no Grande Zimbabué encontraram-se cerâmica chinesa, vidro sírio e contas indianas.',
    '**Identidade:** a ave de pedra tornou-se o emblema do Zimbabué moderno; o sítio está no centro de um debate sobre como o passado africano foi negado e depois recuperado.',
    '**Uma lição de método:** o caso é um dos exemplos clássicos de como o preconceito racial pode distorcer a ciência, e de como o trabalho arqueológico cuidadoso corrige o erro.',
    '**Um Estado africano medieval sem escrita:** mostra como se pode reconstruir a história de uma sociedade sem documentos locais, com arqueologia, oralidade e fontes de terceiros.'
  ] },
  { caixa: 'O Grande Zimbabué hoje', texto: 'O **Grande Zimbabué** (*Great Zimbabwe National Monument*) é Património Mundial da UNESCO desde **1986**. Pode visitar-se a partir de Masvingo, com um museu no local; está a pouca distância do lago Mutirikwi. As ruínas são divididas em três zonas: a **Acrópole** (no cimo da colina), o **Cerco Grande** (no vale) e as ruínas do **Vale**.' }
];

const linha = [
  { linha: [
    { d: 'c. séculos III – VII', t: 'Primeiros agricultores no planalto', x: 'Comunidades de língua bantu, da chamada tradição **Gokomere**, praticam agricultura, criação de gado e metalurgia do ferro na região. Há vestígios de ocupação na colina do futuro Grande Zimbabué, ainda sem construção em pedra.' },
    { d: 'c. 900', t: 'Schroda e o comércio de marfim', x: 'Em **Schroda**, no vale do Limpopo, a comunidade zhizo prepara marfim e outras mercadorias para trocar por contas de vidro vindas da costa. É um dos primeiros sinais da ligação ao comércio do oceano Índico.' },
    { d: 'c. 1000', t: 'K2 e Leopard’s Kopje', x: 'Em **K2**, no Limpopo, cresce uma aldeia agrícola e de pastores, com cerca de 1500 habitantes por 1200. No sudoeste do atual Zimbabué, a cultura de **Leopard’s Kopje** (perto de Bulawayo) é outra tradição de criadores de gado, que alguns autores associam à origem de elites posteriores.' },
    { d: 'c. séculos XI – XII', t: 'O Grande Zimbabué começa a crescer', x: 'No cume da colina estabelece-se um povoado de casas de barro, ainda sem as muralhas. As datas mais antigas de radiocarbono do local situam-se por volta dos séculos XI e XII; os valores exatos são debatidos.' },
    { d: 'c. 1220', t: 'A colina de Mapungubwe', x: 'Em Mapungubwe, uma elite instala-se no cimo da colina, enquanto o povo comum vive em baixo. As sepulturas do cimo contêm **ouro**, entre elas a famosa figura de **rinoceronte em folha de ouro**, descoberta em 1933. A população chega a c. 5000 por 1250.' },
  ] },
  { img: 'zim-rinoceronte-ouro', leg: 'Rinoceronte de ouro de Mapungubwe, Universidade de Pretória.' },
  { img: 'zim-mapungubwe-ceptro', leg: 'Cabeça de ceptro de ouro de Mapungubwe; recorte de uma fotografia comparativa de objetos africanos.' },
  { linha: [
    { d: 'c. final do séc. XII – início do XIII', t: 'As primeiras muralhas de pedra do Grande Zimbabué', x: 'Segundo o estudo bayesiano de 2013, é nesta altura que começam a erguer-se as muralhas de granito.' },
    { d: 'c. 1300', t: 'Mapungubwe é abandonada', x: 'A elite de Mapungubwe desaparece e a colina fica vazia. Entre as causas propostas contam-se o arrefecimento e a seca (o que prejudicava o gado e a agricultura) e a deslocação das rotas comerciais para norte, o que beneficiou o planalto do Zimbabué. As causas exatas são debatidas.' },
    { d: 'c. 1300 (debatido)', t: 'Kilwa assume o controlo de Sofala', x: 'Segundo a **Crónica de Kilwa** e outras fontes, Kilwa passa a controlar **Sofala**, o porto por onde saía o ouro do planalto. A data é debatida; as estimativas vão do século XII ao início do XIV.' },
    { d: 'c. séculos XIV – XV', t: 'O auge', x: 'Constroem-se o **Cerco Grande** e a maior parte dos muros do Vale. O Grande Zimbabué terá então a sua máxima população. Chegam objetos importados: **cerâmica chinesa** (celadon, dinastias Yuan e Ming), vidro e contas, **moedas de cobre de Kilwa** e cerâmica persa.' },
  ] },
  { img: 'zim-porcelana-celadon', leg: 'Taça celadon de Longquan, dinastia Song do Sul, Museu Benaki; exemplo comparativo de cerâmica chinesa de exportação.' },
  { linha: [
    { d: 'c. 1430 – 1450 (tradição)', t: 'Mutota parte para norte', x: 'A tradição oral shona e os cronistas portugueses dizem que um chefe do Grande Zimbabué, **Mutota** (Nyatsimba Mutota), partiu para norte em busca de sal e de novas terras, e fundou o futuro Estado de **Mutapa**. A data e muitos pormenores são incertos, mas a ligação entre os dois centros é aceite por muitos historiadores.' },
    { d: 'c. 1450', t: 'O centro perde o poder', x: 'O Grande Zimbabué deixa de ser a capital do planalto; a ocupação reduz-se mas **não termina de imediato**. As causas propostas são esgotamento de pastagens, lenha e solos para uma população grande, secas, disputas políticas e a deslocação das rotas do ouro para norte e para o Zambeze. Nenhuma explicação, sozinha, é aceite por todos.' },
    { d: 'c. 1450', t: 'Khami e os Torwa', x: 'No sudoeste do planalto, perto da atual Bulawayo, cresce **Khami**, capital do Estado de **Butua** (dinastia Torwa), que perduraria cerca de dois séculos. Os seus muros decorados e as suas plataformas de pedra são a continuação mais clara da tradição do Grande Zimbabué.' },
    { d: 'c. 1450 – 1480', t: 'Matope expande o Mutapa', x: 'O filho de Mutota, **Matope**, alarga o domínio do Mutapa para sul e para leste, chegando perto da costa. O título de **Mwenemutapa** (*mwene*, ‘senhor’, e *mutapa*, ‘terras conquistadas’, segundo a explicação habitual) passa a designar os soberanos.' },
    { d: 'c. 1489 – 1490', t: 'Pêro da Covilhã e Sofala', x: 'O português **Pêro da Covilhã**, enviado por D. João II para obter informações sobre o comércio do Oriente, terá chegado a **Sofala** pela costa, segundo a tradição, e informado Lisboa sobre o ouro. Os pormenores da sua viagem são pouco conhecidos e parte dos relatos vem de fontes posteriores.' },
    { d: '1505', t: 'Os portugueses em Sofala', x: 'Uma armada portuguesa ocupa Sofala e **Pêro de Anaia** constrói ali uma fortaleza (1505–1506). O comércio do ouro passa a ter intermediários portugueses, a pagar direitos à coroa.' },
    { d: '1506', t: 'Diogo de Alcáçova descreve a corte', x: 'Numa carta a D. Manuel I, **Diogo de Alcáçova** descreve o Mutapa e a sua corte, com casas ‘de pedra e barro’ e grandes. É um dos primeiros relatos portugueses do interior; fala da corte do Mutapa, e não do Grande Zimbabué em si.' },
    { d: 'c. 1511', t: 'António Fernandes no interior', x: 'O ‘degredado’ **António Fernandes** percorre o interior e dita a um escrivão de Sofala (Gaspar Veloso) o que viu, incluindo uma fortaleza do rei do Mutapa feita de pedra ‘sem argamassa’. Não é seguro que tenha visitado o Grande Zimbabué: parte da investigação sugere que não.' },
    { d: 'c. 1531', t: 'Vicente Pegado e o ‘Symbaoe’', x: 'O capitão de Sofala **Vicente Pegado** descreve uma fortaleza de pedras enormes, aparentemente sem argamassa, entre as minas de ouro do interior, e diz que os nativos lhe chamam **Symbaoe**, ‘corte’. É a primeira descrição escrita que se refere claramente a uma ruína como a do Grande Zimbabué.' },
    { d: '1552', t: 'João de Barros escreve sobre Symbaoe', x: 'Na primeira *Década da Ásia*, **João de Barros** (que nunca esteve na África Oriental) descreve Symbaoe com base em informantes muçulmanos e relatos portugueses, e fala de uma inscrição que ninguém sabia ler. Admite não saber quem a construiu, e fala da lenda da rainha de Sabá. Nasce aqui uma lenda que duraria séculos.' },
    { d: '1561 – 1572', t: 'Gonçalo da Silveira e a expedição de Barreto', x: 'O jesuíta **Gonçalo da Silveira** baptiza o Mwenemutapa e é morto por estrangulamento, a 16 de março de 1561, por ordem da corte, em parte por influência de comerciantes muçulmanos e de conselheiros que o consideravam feiticeiro. O episódio foi um dos pretextos para a expedição de **Francisco Barreto** (1569–1572), que tentou controlar as minas de ouro do Mutapa e falhou, em grande parte por doença.' },
    { d: '1629', t: 'O tratado de vassalagem', x: 'O Mwenemutapa **Mavura** assina um tratado que o torna vassalo do rei de Portugal, com direitos comerciais e mineiros e liberdade para os missionários. Na prática, o poder português no interior ficou limitado a feiras e aos *prazos* do Zambeze.' },
    { d: 'c. 1683 – 1684', t: 'Changamire Dombo', x: 'O chefe **Changamire Dombo** destrói o poder dos Torwa em Khami e expulsa os portugueses do planalto. Funda-se o Estado **Rozvi**, que domina o planalto até c. 1830.' },
    { d: '1871', t: 'Carl Mauch ‘descobre’ as ruínas', x: 'O geólogo alemão **Carl Mauch** visita o Grande Zimbabué, guiado por caçadores europeus. Convencido de que se tratava do palácio da rainha de Sabá ou do reino bíblico de Ofir, a sua ideia ganha eco na Europa.' },
    { d: '1891 – 1895', t: 'Bent, Rhodes e a Rodésia', x: 'O explorador britânico **Theodore Bent** escava o local em 1891 e atribui-o a mercadores ‘semitas’ ou fenícios. O território, ocupado pela Companhia Britânica da África do Sul de **Cecil Rhodes** (Coluna Pioneira, 1890), passa a chamar-se **Rodésia**.' },
    { d: '1902 – 1904', t: 'A destruição dos estratos', x: 'O ‘curador’ **Richard Hall**, procurando provas de uma origem não africana, remove as camadas arqueológicas das ruínas (por vezes cerca de um metro de depósitos), destruindo grande parte da informação para sempre.' },
    { d: '1905 – 1929', t: 'A refutação científica', x: 'O arqueólogo **David Randall-MacIver** (1905) e depois **Gertrude Caton-Thompson** (1929) escavam com método e concluem que as ruínas são **medievais e de origem africana**, com base em estratigrafia, cerâmica, objetos importados e comparação com a cultura dos atuais povos locais.' },
    { d: '1965 – 1980', t: 'Política e arqueologia', x: 'O regime da Rodésia (Frente Rodesiana, governo de Ian Smith, que declarou a independência unilateral em 1965) pressiona museus e arqueólogos a não apresentar a origem africana. O arqueólogo **Peter Garlake**, que escreveu *Great Zimbabwe* (1973), deixou o país nessa época. Em **1980**, com a independência, o país adota o nome Zimbabué.' },
    { d: '1986 – 2013', t: 'Património e datação', x: 'O Grande Zimbabué é inscrito na lista do Património Mundial da UNESCO (1986), junto com Khami. Em 2013, a nova cronologia bayesiana estabelece a sequência da construção das muralhas.' }
  ] }
];

const mapa = [
  'O Grande Zimbabué não era uma cidade isolada: fazia parte de uma rede de **centros de pedra** no planalto, de **portos** na costa e de **minas** no interior. A tabela reúne os principais sítios, dos precursores aos herdeiros. As datas são aproximadas.',
  { tabela: { cab: ['Sítio', 'Onde', 'Datas aproximadas', 'Papel'], linhas: [
    ['Schroda', 'Vale do Limpopo, África do Sul', 'c. 900 – 1000', 'Povoado zhizo, comércio de marfim e contas'],
    ['K2 e Mapungubwe', 'Vale do Limpopo, África do Sul (junto à fronteira com o Zimbabué e a Botsuana)', 'c. 1000 – 1300', 'Frequentemente descrito como o primeiro Estado do sul de África, com elite separada do povo; ouro, vidro, marfim; UNESCO 2003'],
    ['Leopard’s Kopje', 'Sudoeste do Zimbabué, perto de Bulawayo', 'c. 900 – 1300', 'Tradição de criadores de gado, anterior a Khami'],
    ['Grande Zimbabué', 'Masvingo, Zimbabué', 'c. 1000 – 1450 (ocupação até c. XVI–XVII)', 'Grande centro do planalto; Acrópole, Cerco Grande, Vale; UNESCO 1986'],
    ['Manyikeni', 'Província de Gaza, Moçambique', 'c. séculos XIII – XV', 'Sítio de pedra a sudeste do planalto, perto da rota para a costa'],
    ['Khami', 'Perto de Bulawayo, Zimbabué', 'c. 1450 – 1683', 'Capital dos Torwa; plataformas de pedra decoradas; UNESCO 1986'],
    ['Naletale e Danangombe', 'Planalto ocidental, Zimbabué', 'c. séculos XVII – XVIII', 'Centros do Estado Rozvi, herdeiros de Khami'],
    ['Chibuene e Sofala', 'Costa de Moçambique', 'c. séculos VIII – XVI', 'Portos de saída do ouro; contactos com o mundo suaíli'],
    ['Kilwa Kisiwani', 'Ilha da Tanzânia', 'c. séculos IX – XVI', 'Grande cidade do ouro; intermediária do comércio com a Arábia e a Índia'],
    ['Sena e Tete', 'Vale do Zambeze, Moçambique', 'a partir de c. 1530', 'Povoações portuguesas e feiras do ouro do Mutapa']
  ] } },
  { img: 'zim-mapa-sitios', leg: 'Mapa esquemático de sítios de diferentes períodos, c. 1200–1700: Mapungubwe (triângulo), Grande Zimbabué (quadrado), Khami (losango), Manyikeni (círculo) e Sofala (cruz). Mapa desenhado digitalmente.' },
  { h: 'O Grande Zimbabué: três conjuntos' },
  'O sítio ocupa um núcleo de cerca de **80 hectares**, e a cidade dispersa em volta pode ter sido muito maior. Divide-se em três conjuntos: a **Acrópole**, o **Cerco Grande** e o **Vale**. Os nomes são dos primeiros exploradores europeus e não correspondem às funções antigas, que são interpretações.',
  { h: 'A Acrópole (Hill Complex)' },
  'No cimo de uma colina de granito, a cerca de 80 m acima do vale, a Acrópole é a parte mais antiga e mais ocupada. Os muros seguem os blocos naturais de granito, criando recintos, passagens estreitas e plataformas. Aqui foram encontradas **as aves de pedra** (a maioria no chamado Cerco Oriental) e objetos como contas e fragmentos de cerâmica. A interpretação mais corrente é que era uma **residência real e um lugar sagrado**, onde viveriam os chefes e se fariam rituais; a vista domina o vale.',
  { img: 'zim-acropole', leg: 'Muros da Acrópole (Hill Complex), Grande Zimbabué.' },
  { img: 'zim-acropole-reconstrucao', leg: 'Acrópole do Grande Zimbabué, c. 1350; reconstrução conjectural. Ilustração gerada por IA.' },
  { h: 'O Cerco Grande (Great Enclosure)' },
  'É a maior estrutura do sítio e, segundo o Metropolitan Museum, a maior construção antiga da África subsariana. O muro exterior tem cerca de **250 m** de perímetro (252 m, segundo uma medição citada), até **11 m de altura** e espessura de cerca de 5 m na base. Calcula-se que tenha exigido **centenas de milhares de blocos** de granito, cortados aproveitando a desagregação natural da rocha em placas; nenhum liga-se com argamassa, mas as fiadas são muito regulares e inclinam-se ligeiramente para dentro.',
  'No topo do muro exterior corre um **friso em espinha (chevron)**, decorativo. Dentro há um estreito **corredor paralelo**, a **torre cónica** maciça (com cerca de 9 m de altura e 5,5 m de diâmetro na base; as medidas variam consoante a fonte), pequenas plataformas e vestígios de casas de barro. Para que serviu ninguém sabe ao certo: foi sugerida a residência de uma figura real, de esposas do rei, um local de iniciação de jovens e um espaço de reunião. Segundo algumas fontes, o nome tradicional **Imbahuru** significaria ‘casa grande’. Importa dizer: **todas estas funções são hipóteses**.',
  { img: 'zim-torre-conica', leg: 'Torre cónica no Cerco Grande.' },
  { img: 'zim-muralha-granito', leg: 'Muralha exterior de granito do Cerco Grande, Grande Zimbabué.' },
  { img: 'zim-cerco-reconstrucao', leg: 'Cerco Grande, c. 1400; reconstrução conjectural. Ilustração gerada por IA.' },
  { h: 'O Vale' },
  'Entre a Acrópole e o Cerco Grande, o vale tem dezenas de pequenos recintos e de plataformas de casas de barro (as chamadas ruínas do Vale), onde viveria a maior parte da população. Aqui encontraram-se objetos de uso corrente: **cerâmica, fusos** para fiar algodão, restos de forja e de ferreiros, **contas de vidro**, e também contas de ouro e vestígios de comércio de longa distância. Estima-se que a cidade tenha tido no apogeu **10 000 a 20 000 habitantes**, embora os números sejam uma estimativa.',
  { img: 'zim-vale', leg: 'Ruínas do Vale, Grande Zimbabué.' },
  { h: 'A técnica de construção' },
  { lista: [
    '**Pedra:** granito, que o calor do dia e o frio da noite fazem soltar em grandes placas (esfoliação), o que facilita a obtenção de blocos regulares sem ferramentas pesadas.',
    '**Sem argamassa:** os blocos assentam uns nos outros por peso e por geometria; os muros curvam-se e são mais largos em baixo.',
    '**Plantas:** recintos curvos e ovais, em vez de ângulos retos, ligados por passagens estreitas.',
    '**Casas:** dentro dos recintos, as casas eram de **daga** (barro e estacas) com cobertura de colmo; as casas de pedra não existiam.',
    '**Madeira:** vergas de madeira sobre as portas, de que sobraram poucas por causa das destruições do século XIX e XX.'
  ] },
  { h: 'Khami e os outros ‘zimbabwes’' },
  'Depois do Grande Zimbabué, o centro da construção de pedra deslocou-se para o sudoeste: **Khami** (c. 1450 – 1683) tem muros decorados com padrões (espinha, xadrez), plataformas altas e muros de contenção. Foi inscrita na lista do Património Mundial em 1986, tal como o Grande Zimbabué. **Naletale** e **Danangombe** (também conhecida como Dhlo-Dhlo) são centros posteriores, ligados ao Estado Rozvi.',
  { img: 'zim-khami-muros', leg: 'Muros de pedra da plataforma principal de Khami.' },
  { h: 'Sofala, o porto do ouro' },
  'Sofala (Moçambique) estava na foz do rio Buzi e era a saída do ouro do planalto para o oceano Índico. Era uma povoação suaíli de casas de madeira, barro e, mais tarde, algumas de pedra, dependente de Kilwa. Os navios chegavam com as **monções**: levavam ouro, marfim e peles e traziam tecidos, contas, cerâmica e metais. Em 1505 os portugueses ocuparam-no e construíram um forte.',
  { img: 'zim-sofala-porto', leg: 'Porto suaíli de Sofala, c. 1400; reconstrução hipotética. Ilustração gerada por IA.' },
  { h: 'As rotas' },
  { lista: [
    '**Do ouro:** das minas do planalto aos vales do Save e do Buzi até Sofala; de lá, por barco até Kilwa, ao Iémen e à Índia.',
    '**Do marfim e do cobre:** o marfim vinha de todo o planalto e do Zambeze; o cobre, de jazidas a norte e a sul, circulava em lingotes em forma de cruz.',
    '**Para o interior:** do Grande Zimbabué para o sul, em direção ao Limpopo, e para o Zambeze, a norte, onde o Mutapa e depois os portugueses instalaram feiras.',
    '**Importações:** contas de vidro, tecidos, cerâmica chinesa e persa e vidro sírio chegaram à corte, sobretudo como bens de prestígio.'
  ] }
];

const sociedade = [
  { h: '1. Organização política' },
  'Tudo o que se diz do Estado do Grande Zimbabué é **reconstrução**: não há textos locais. Segundo a arqueologia, existia uma **elite** que vivia na Acrópole e no Cerco Grande, e uma população maior no Vale. O poder parece ter assentado numa **realeza sagrada**, com um chefe que era também mediador entre os vivos e os antepassados, e que controlava o gado, o comércio de longa distância e o acesso ao ouro e ao marfim. Os estudos de Thomas Huffman e outros ligam esta organização ao chamado **‘padrão central do gado’**, uma estrutura espacial comum a muitas sociedades da região.',
  'Quanto aos limites territoriais, não eram os de um império moderno: o Grande Zimbabué foi o centro de uma **rede de chefes** e de sítios de pedra, e não um Estado com fronteiras fixas. A força da elite assentava no **controlo das trocas**, não na conquista de territórios.',
  { img: 'zim-corte-rei', leg: 'Audiência de um chefe shona, c. 1400; cena imaginada. Ilustração gerada por IA.' },
  { h: '2. Classes sociais' },
  'A distinção entre **elite** e **população comum** é visível: os objetos de ouro, de cobre e importados vêm sobretudo do Cerco Grande e da Acrópole; os fusos e a cerâmica quotidiana vêm do Vale. É provável que houvesse especialistas (ferreiros, oleiros, mineiros, mercadores, adivinhos), mas a sua organização exata é desconhecida. Os relatos portugueses do século XVI sobre o Mutapa falam de nobres, de ‘capitães’ e de **mulheres do rei** com papéis políticos; **não devem ser transpostos sem cautela** para o século XIV.',
  { h: '3. Religião' },
  'A informação vem da **etnografia shona** (séculos XIX–XX) e da arqueologia, e a sua aplicação ao passado é uma hipótese. Entre os shona, a religião gira em torno de **Mwari**, o deus supremo, que se comunica por **médiuns** e por antepassados chefes (*mhondoro*, espíritos de chefes mortos que ‘habitam’ leões), com santuários no Matopo e rituais de pedido de chuva. Se o Grande Zimbabué usou estas ideias, o rei poderia ser o intermediário e a ave de pedra um símbolo dessa mediação.',
  { img: 'zim-ave-zimbabue', leg: 'Aves de esteatite do Grande Zimbabué em ilustração histórica publicada por J. Theodore Bent, 1892.' },
  { h: 'As aves de pedra (Zimbabwe Birds)' },
  'Foram recuperadas **oito aves esculpidas em esteatite** (pedra-sabão), cada uma sobre um pilar ou monólito, sobretudo na Acrópole. Não são todas iguais: algumas têm **traços humanos** (lábios, dedos), e a identificação da espécie (águia-pesqueira, bateleur ou outra) é **debatida**. Para uns, simbolizam a autoridade real, para outros o elo entre os antepassados e os vivos. Uma delas, comprada por Cecil Rhodes, ficou em Groote Schuur (Cidade do Cabo), onde permanece; em 1981 a África do Sul devolveu ao Zimbabué outras quatro. A ave aparece hoje na bandeira, nas moedas e no emblema nacional do Zimbabué.',
  { h: '4. Economia' },
  { lista: [
    '**Gado:** a principal forma de riqueza e de prestígio; a análise dos ossos sugere que a elite consumia carne de melhor qualidade (por exemplo, de animais jovens).',
    '**Agricultura:** sorgo, milhete (*rapoko*), feijão-frade, amendoim-bambara e cabaças; **não** havia milho (chegou da América só no século XVI ou depois).',
    '**Ouro:** extraído em minas de superfície e de pequeno poço, e em aluviões; era vendido na costa por contas, tecidos e cerâmica. O ouro encontrado no Grande Zimbabué é pouco (a maioria foi pilhada), mas era a base da riqueza.',
    '**Marfim:** exportado em grandes quantidades, para a Índia e a China, onde era muito procurado; os braceletes de marfim eram também usados na corte.',
    '**Cobre e ferro:** lingotes de cobre em forma de cruz; ferro para enxadas, lanças e machados.',
    '**Têxteis:** fusos e algodão local, pano de casca e peles.'
  ] },
  { img: 'zim-gado-pastores', leg: 'Pastores e gado Sanga junto do Grande Zimbabué, c. 1400. Ilustração gerada por IA.' },
  { img: 'zim-ouro-objetos', leg: 'Contas e joias de ouro atribuídas a Mapungubwe, expostas no Museum of Gems and Jewellery, Cidade do Cabo.' },
  { img: 'zim-lingotes-cobre', leg: 'Lingote de cobre em cruz de Katanga; peça comparativa da África central, exposta na Casa de la Moneda, Madrid.' },
  { h: 'O comércio com a costa e com o mundo' },
  'O ouro e o marfim chegavam a **Sofala**, de lá a **Kilwa** e a outras cidades suaílis, e depois ao mundo árabe e indiano. Em troca vinham **contas de vidro** (muitas feitas na Índia), tecidos de algodão e **cerâmica**. No Grande Zimbabué encontraram-se **cerâmica celadon chinesa** (dinastias Yuan e Ming), uma taça **persa**, **vidro sírio** e algumas **moedas de cobre de Kilwa**. Nada disto prova que mercadores estrangeiros vivessem na cidade: eram bens trazidos pelos intermediários suaílis, e guardados pela elite como sinal de prestígio.',
  { img: 'zim-contas-vidro', leg: 'Pormenor de um colar mutisalah de Timor com contas de tradição indo-pacífica; peça comparativa, não um achado do Grande Zimbabué.' },
  { img: 'zim-moeda-kilwa', leg: 'Moeda de cobre de Kilwa encontrada no Grande Zimbabué; fotografia de T. Huffman, arquivo BIEA/John Sutton.' },
  { img: 'zim-troca-mercadores', leg: 'Troca entre mercadores do planalto e mercadores suaílis, c. 1400; cena imaginada. Ilustração gerada por IA.' },
  { h: '5. Escrita' },
  'Não existia escrita no Grande Zimbabué: a história era transmitida pela **tradição oral**, por poetas e por genealogias de chefes. Os primeiros textos sobre a região são **de terceiros**: os geógrafos árabes (por exemplo Al-Masudi, no século X, fala do ouro de Sofala e do seu povo), os cronistas suaílis e, desde o século XVI, os portugueses. A ausência de escrita local é uma das razões por que a origem das ruínas foi tão discutida.',
  { h: '6. Casa e vida quotidiana' },
  'As casas eram circulares, de **daga** (barro sobre estacas) e com telhados de colmo, agrupadas em recintos familiares, com celeiros e cercados de gado. A pedra era para muros e plataformas, não para habitar. A vida girava em torno do gado, dos campos e das famílias alargadas; as mulheres moíam o grão e cozinhavam, os homens cuidavam do gado e dos metais, e as decisões de maior peso estavam nas mãos dos chefes.',
  { img: 'zim-casa-daga', leg: 'Interior de uma casa de daga, c. 1400; reconstrução hipotética. Ilustração gerada por IA.' },
  { img: 'zim-cidade-quotidiano', leg: 'Vida quotidiana no Vale do Grande Zimbabué, c. 1400. Ilustração gerada por IA.' },
  { h: '7. Alimentação' },
  'A base era o **sorgo** e o **milhete**, em papas (os antepassados da atual *sadza*, que hoje se faz com milho, introduzido mais tarde), com leite, carne de vaca, de cabra, caça e peixe, feijões e hortaliças. O gado era mais para prestígio, leite e sangue do que para carne diária; as grandes festas incluíam o abate. Cerveja de sorgo ou de milhete era usada nos rituais.',
  { img: 'zim-mulher-cozinha', leg: 'Preparação de papas de sorgo, c. 1400; cena imaginada. Ilustração gerada por IA.' },
  { h: '8. Vestuário e adornos' },
  'Os fusos de barro e de pedra mostram que se fiava **algodão**, e usavam-se também **peles** e **pano de casca**. A elite exibia **contas de vidro, braceletes de marfim e de cobre, e fios e contas de ouro**. A aparência exata das roupas é desconhecida, e os relatos portugueses posteriores descrevem tecidos vindos da costa para os chefes do Mutapa.',
  { h: '9. Música e jogos' },
  'A **mbira** (instrumento de lâminas metálicas dedilhadas) é hoje inseparável da música shona e das cerimónias com os antepassados; a antiguidade exata da mbira no Zimbabué medieval é **debatida**. Havia também tambores, canto, dança e jogos de tabuleiro do tipo **mancala**, comuns em toda a África, mas com poucas provas diretas no sítio.',
  { img: 'zim-mbira', leg: 'Mbira dos shona.' },
  { h: '10. Metalurgia e tecnologia' },
  'O ferro era fundido em **fornos de argila** com foles e *tuyères* (tubos de barro), e transformado em enxadas, machados, lanças e **gongos duplos de ferro**, um objeto de autoridade usado na região. O cobre era fundido e vazado em lingotes. O ouro era trabalhado em folha, fio e contas. A **esteatite** era esculpida em aves, tigelas e figuras. Os ferreiros tinham um estatuto especial.',
  { img: 'zim-ferreiro', leg: 'Trabalho de ferreiros shona, c. 1400; reconstrução hipotética. Ilustração gerada por IA.' },
  { img: 'zim-gongo-ferro', leg: 'Gongo duplo de ferro associado à sociedade Ekpo, Calabar, Nigéria; exemplo comparativo, não um instrumento shona.' },
  { h: '11. Mineração de ouro' },
  'No planalto do Zimbabué há milhares de **antigas minas de ouro** (poços e galerias pouco profundos, seguindo os filões de quartzo), muitas das quais foram reencontradas pelos prospetores coloniais dos anos 1890 e depois reaproveitadas pelas minas modernas. A data da maior parte é incerta, e algumas são anteriores ao Grande Zimbabué.',
  { img: 'zim-minas-ouro', leg: 'Extração e lavagem de material aurífero, c. 1400; cena imaginada. Ilustração gerada por IA.' },
  { h: '12. Guerra' },
  'Não há provas claras de guerra generalizada: **os muros do Grande Zimbabué não parecem defensivos** (são demasiado baixos nos lados abertos, com muitos acessos), e servem mais para delimitar espaço, marcar estatuto e controlar o acesso. Os relatos portugueses do Mutapa descrevem exércitos de arqueiros e de guerreiros com lanças, escudos e machados. Para o período do Grande Zimbabué, a evidência de armas é escassa.'
];

const personalidades = [
  'Do Grande Zimbabué em si **não sobreviveu nenhum nome** de rei ou de rainha. As figuras abaixo são os herdeiros, os cronistas, os arqueólogos e os que fizeram desta história um debate político. As datas de vida, quando existem, são as aceites pelos historiadores.',
  { h: 'Mutota (Nyatsimba Mutota, séc. XV)' },
  'Figura da tradição oral e dos cronistas: o chefe que, vindo do Grande Zimbabué, terá partido para norte e fundado o Mutapa. Alguns historiadores discutem se foi uma pessoa concreta ou uma figura simbólica; os pormenores (a procura de sal, a data) são **incertos**.',
  { h: 'Matope (Nyanhehwe, c. 1450 – 1480)' },
  'Filho e sucessor de Mutota na tradição. Expandiu o Mutapa para sul e para o litoral, e, na tradição, é o grande conquistador do Mutapa. A cronologia do seu reinado é aproximada.',
  { h: 'Pêro da Covilhã (c. 1450 – depois de 1520)' },
  'Viajante e espião de D. João II, enviado em 1487 para descobrir os mercados do Oriente. Segundo a tradição, esteve em Sofala c. 1489–1490 e informou Lisboa sobre o ouro; a documentação sobre a viagem é escassa, e alguns pormenores vêm de fontes posteriores. Ficou depois na Etiópia, onde viveu até à morte.',
  { h: 'Vicente Pegado (capitão de Sofala, década de 1530)' },
  'Capitão da fortaleza portuguesa de Sofala; o seu relato (c. 1531) é a primeira descrição escrita clara de uma grande ruína de pedra no interior, que os nativos lhe chamavam **Symbaoe**, ‘corte’. Admite não saber quem a construiu.',
  { h: 'João de Barros (1496 – 1570)' },
  'Cronista da expansão portuguesa; escreveu as *Décadas da Ásia* (a primeira em 1552). Nunca esteve na África Oriental; descreveu Symbaoe com base em informantes, e foi **cuidadoso**: disse que ninguém sabia quem a erguera e que os mercadores muçulmanos não conseguiam ler uma inscrição, mas referiu a lenda da rainha de Sabá. Foi esse registo que séculos depois alimentou a ideia de uma origem não africana.',
  { img: 'zim-barros', leg: 'João de Barros, cronista português.' },
  { h: 'Gonçalo da Silveira (1526 – 1561)' },
  'Jesuíta português, nascido em Almeirim, que chegou ao Mutapa entre o fim de 1560 e o início de 1561 e batizou o rei; foi estrangulado em 16 de março de 1561. A sua morte levou a um pedido de intervenção militar e à expedição de Barreto. Foi considerado mártir pela Igreja.',
  { img: 'zim-silveira', leg: 'Gonçalo da Silveira em gravura histórica sobre o seu martírio, de Adrien Melaer; recorte do rosto.' },
  { h: 'Changamire Dombo (m. c. 1695)' },
  'Chefe e fundador do Estado Rozvi, que derrotou os Torwa de Khami e expulsou os portugueses do planalto por volta de 1683–1684. As datas do seu reinado são aproximadas. O Rozvi sobreviveu até às invasões dos anos 1830.',
  { h: 'Carl Mauch (1837 – 1875)' },
  'Geólogo e explorador alemão que, em 1871, visitou o Grande Zimbabué guiado por caçadores europeus. Convencido de se tratar de um palácio bíblico (Sabá, Ofir), contribuiu para o mito. Morreu na Alemanha, em 1875.',
  { img: 'zim-mauch', leg: 'Carl Mauch, geólogo alemão.' },
  { h: 'Theodore Bent (1852 – 1897)' },
  'Explorador e arqueólogo amador britânico que escavou o Grande Zimbabué em 1891, com apoio da Associação Britânica e da Royal Geographical Society. Em *The Ruined Cities of Mashonaland* (1892) atribuiu as ruínas a mercadores ‘semitas’ ou fenícios, e a sua autoridade difundiu a teoria.',
  { h: 'Cecil Rhodes (1853 – 1902)' },
  'Empresário e político britânico, fundador da Companhia Britânica da África do Sul, que ocupou o território (1890) e lhe deu o nome de Rodésia. A sua companhia apoiou as primeiras explorações das ruínas, e ele adquiriu uma das aves de pedra. A sua figura é hoje muito controversa.',
  { h: 'David Randall-MacIver (1873 – 1945)' },
  'Arqueólogo britânico que, em 1905, escavou o Grande Zimbabué por conta da Associação Britânica e concluiu, com base em achados como cerâmica e contas importadas, que a origem era **africana e medieval**. Publicou *Mediaeval Rhodesia* (1906) e foi atacado pelos defensores da teoria ‘fenícia’.',
  { h: 'Gertrude Caton-Thompson (1888 – 1985)' },
  'Arqueóloga britânica. Em 1929, a pedido da Associação Britânica, voltou ao Grande Zimbabué e escavou-o com rigor estratigráfico, confirmando a origem **africana e medieval**. O seu livro *The Zimbabwe Culture* (1931) tornou-se uma referência, e é considerada uma das primeiras mulheres a ter destaque na arqueologia africana.',
  { img: 'zim-caton-thompson', leg: 'Inscrição num banco em memória de Gertrude Caton-Thompson e Dorothy de Navarro, Cambridge; substitui o retrato pedido.' },
  { h: 'Peter Garlake (1934 – 2011)' },
  'Arqueólogo britânico que trabalhou na Rodésia e escreveu *Great Zimbabwe* (1973), reafirmando a origem africana. Pressionado pelo regime de Ian Smith, deixou o país por volta de 1970. É autor de uma das grandes sínteses sobre o assunto.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**Arquitetura:** a maior construção antiga de pedra da África subsariana, e uma tradição de muros decorados que passou a Khami e outros ‘zimbabwes’.',
    '**A ave de pedra:** símbolo do Zimbabué moderno, presente na bandeira (desde 1980), nas moedas e no emblema nacional.',
    '**Uma linha de Estados:** do Mapungubwe ao Grande Zimbabué, a Khami, ao Mutapa e ao Rozvi, a história política do sul da África durante cerca de mil anos.',
    '**O nome:** em 1980, a Rodésia do Sul passou a chamar-se Zimbabué, em homenagem ao sítio.',
    '**Um caso exemplar:** o debate sobre a origem das ruínas é um dos grandes exemplos de como o preconceito racial deturpa a ciência.'
  ] },
  { img: 'zim-bandeira', leg: 'Bandeira do Zimbabué.' },
  { h: 'Arte' },
  'A arte do Grande Zimbabué é feita de **escultura em esteatite** (as aves, mas também figuras e tigelas), **muros decorados** com padrões geométricos, **cerâmica** com incisões e **joalharia** de ouro, cobre e marfim. Os objetos importados, como a cerâmica chinesa, tornaram-se parte da vida da corte.',
  { img: 'zim-ave-museu', leg: 'Ave decorativa de madeira inspirada na Ave do Zimbabué, num corrimão; não é uma das peças arqueológicas originais de esteatite.' },
  { h: 'A controvérsia colonial' },
  'Quando os europeus viram as ruínas, em especial a partir de **Carl Mauch (1871)** e dos relatos de **Theodore Bent (1891)**, a maior parte recusou-se a aceitar que africanos as tivessem construído. Atribuíram-nas à **rainha de Sabá, a fenícios, a árabes**, a ‘uma raça branca desaparecida’. A ideia servia a política: a colonização da Rodésia pela Companhia de **Cecil Rhodes** era mais fácil de justificar se os africanos fossem vistos como incapazes de construir uma civilização.',
  { img: 'zim-rhodes', leg: 'Cecil Rhodes.' },
  'A refutação foi científica. **Randall-MacIver (1905)** mostrou que os objetos importados eram medievais e a cultura material era africana. **Gertrude Caton-Thompson (1929)** confirmou-o com escavações mais rigorosas. Mesmo assim, a teoria da origem não africana **persistiu por décadas**: o regime da **Frente Rodesiana** (1962 – 1979) pressionou museus e arqueólogos, e o próprio Garlake saiu do país. O nome **Zimbabué** foi escolhido pelos nacionalistas africanos nos anos 1960 (é atribuído a Michael Mawema, em 1960) e adotado em **1980**.',
  { h: 'Aviso sobre o uso do nome' },
  'O país escolheu o nome do sítio, e a ave tornou-se emblema nacional. Mas o **Grande Zimbabué** e o **Zimbabué atual** são duas coisas distintas: o primeiro é uma sociedade medieval de c. 1200–1450, o segundo um Estado moderno criado em 1980, com mais de uma dezena de povos, onde os shona são o grupo maior. Mesmo entre os shona, o passado do sítio é reclamado por vários grupos, e os debates continuam.',
  { h: 'A redescoberta, em resumo' },
  { lista: [
    '**1552:** Barros publica a primeira descrição impressa de ‘Symbaoe’.',
    '**1871:** Mauch visita e levanta a hipótese de Sabá/Ofir.',
    '**1891:** Bent escava; **1902–1904:** Hall destrói camadas arqueológicas.',
    '**1905 e 1929:** Randall-MacIver e Caton-Thompson provam a origem africana.',
    '**1960s – 1970s:** a política rodesiana tenta travar a mensagem; Garlake publica *Great Zimbabwe* (1973).',
    '**1986:** UNESCO. **2013:** nova cronologia bayesiana (Chirikure e colegas).'
  ] },
  { img: 'zim-mapungubwe-paisagem', leg: 'Colina de Mapungubwe e paisagem do Limpopo.' },
  { img: 'zim-mapa-mutapa', leg: 'Mapa antigo do reino de Monomotapa.' },
  { h: 'Onde visitar' },
  { lista: [
    '**Grande Zimbabué (Masvingo, Zimbabué):** o sítio e o museu local, com réplicas e fotografias.',
    '**Khami (perto de Bulawayo, Zimbabué):** muros decorados e plataformas, no mesmo ano de inscrição pela UNESCO.',
    '**Mapungubwe (Limpopo, África do Sul):** o parque nacional e o museu da Universidade de Pretória, que guarda o rinoceronte de ouro.',
    '**Museu Nacional de História Natural do Zimbabué (Bulawayo)** e outros museus regionais.',
    '**Kilwa Kisiwani (Tanzânia):** a cidade suaíli que vendia o ouro do planalto.',
    '**Fortaleza de Sofala e Ilha de Moçambique:** os vestígios da presença portuguesa na costa do ouro.'
  ] }
];

const quiz = [
  { p: 'Que significa, segundo uma das explicações mais citadas, a palavra shona ‘dzimba-dza-mabwe’?', op: ['Casas de pedra', 'Cidade do ouro', 'Rio sagrado', 'Montanha dos reis'], certa: 0, exp: 'É uma das duas explicações habituais (a outra é ‘casas veneradas’); os dois sentidos andam ligados à ideia de residência de chefes.' },
  { p: 'Em que região fica o Grande Zimbabué?', op: ['Planalto entre o Limpopo e o Zambeze', 'Costa de Moçambique', 'Deserto do Calaári', 'Vale do Nilo'], certa: 0, exp: 'Fica na província de Masvingo, no sudeste do Zimbabué atual.' },
  { p: 'Que técnica caracteriza as muralhas do Grande Zimbabué?', op: ['Pedra assente sem argamassa', 'Tijolo cozido com cal', 'Blocos de calcário com chumbo', 'Madeira e palha'], certa: 0, exp: 'Os blocos de granito assentam uns nos outros, sem qualquer ligante, em fiadas regulares.' },
  { p: 'Qual é a maior estrutura do sítio?', op: ['A Acrópole', 'O Cerco Grande (Great Enclosure)', 'O Vale', 'A torre cónica'], certa: 1, exp: 'O muro exterior do Cerco Grande tem cerca de 250 m de perímetro e até 11 m de altura.' },
  { p: 'Quantas aves de esteatite foram recuperadas no Grande Zimbabué?', op: ['Duas', 'Oito', 'Trinta', 'Duzentas'], certa: 1, exp: 'Foram recuperadas oito aves; a ave é hoje símbolo nacional do Zimbabué.' },
  { p: 'Qual foi a base da riqueza do Grande Zimbabué, além do gado?', op: ['O ouro e o marfim', 'A seda', 'O petróleo', 'O sal do mar'], certa: 0, exp: 'O ouro do planalto e o marfim eram trocados na costa, via Sofala e Kilwa.' },
  { p: 'Que porto escoava o ouro do planalto para o oceano Índico?', op: ['Mombaça', 'Sofala', 'Luanda', 'Zanzibar'], certa: 1, exp: 'Sofala, no atual Moçambique, depois controlada por Kilwa e, a partir de 1505, pelos portugueses.' },
  { p: 'Que objeto importado foi encontrado no Grande Zimbabué?', op: ['Cerâmica chinesa (celadon)', 'Porcelana de Sèvres', 'Moedas romanas', 'Cavalos árabes'], certa: 0, exp: 'Encontraram-se celadon chinês, uma taça persa, vidro sírio e moedas de Kilwa.' },
  { p: 'Qual era a relação entre o Grande Zimbabué e Mapungubwe?', op: ['Mapungubwe foi um precursor e as duas existiram em parte ao mesmo tempo', 'Eram a mesma cidade', 'Foi fundada depois, em 1500', 'Nunca se encontraram'], certa: 0, exp: 'Mapungubwe (c. 1220 – 1300) foi um precursor no Limpopo e coexistiu com as primeiras fases do Grande Zimbabué, antes do seu auge.' },
  { p: 'Quem descreveu o ‘Symbaoe’ na primeira Década da Ásia (1552)?', op: ['Luís de Camões', 'João de Barros', 'Pêro de Anaia', 'Gaspar Veloso'], certa: 1, exp: 'Barros nunca esteve lá; baseou-se em informantes e admitiu ignorar quem a construiu.' },
  { p: 'Que explorador alemão ‘descobriu’ as ruínas em 1871 e pensou que fossem de Sabá ou Ofir?', op: ['Carl Mauch', 'David Livingstone', 'Heinrich Barth', 'Theodore Bent'], certa: 0, exp: 'Carl Mauch visitou-as em 1871; Bent, britânico, escavou em 1891.' },
  { p: 'Quem provou em 1905 e 1929 que as ruínas eram africanas e medievais?', op: ['Randall-MacIver e Caton-Thompson', 'Cecil Rhodes e Hall', 'Mauch e Bent', 'Livingstone e Stanley'], certa: 0, exp: 'Os dois arqueólogos escavaram com método e concluíram que se tratava de uma obra africana e medieval.' },
  { p: 'Para onde terá migrado o chefe Mutota, segundo a tradição, fundando o Mutapa?', op: ['Para norte', 'Para o mar', 'Para sul, até ao Cabo', 'Para o Egito'], certa: 0, exp: 'Segundo a tradição, partiu para norte em busca de sal e de novas terras, c. 1430–1450; os pormenores são incertos.' },
  { p: 'Que Estado tinha a capital em Khami, no sudoeste do planalto?', op: ['Os Torwa (Butua)', 'Os Zulus', 'O Mali', 'Axum'], certa: 0, exp: 'Khami foi a capital dos Torwa de c. 1450 até à destruição, por volta de 1683.' },
  { p: 'Em que ano o país tomou o nome Zimbabué?', op: ['1923', '1965', '1980', '1999'], certa: 2, exp: 'Em 1980, com a independência, a Rodésia passou a chamar-se Zimbabué; o nome foi proposto por nacionalistas nos anos 1960.' }
];

export default {
  id: 'zimbabue',
  cor: '#8a6a4a',
  emblema: '../assets/img/zimbabue.png',
  nome:    { pt: 'Grande Zimbabué', en: 'Great Zimbabwe' },
  periodo: { pt: 'c. 900 – 1450', en: 'c. AD 900 – 1450' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
