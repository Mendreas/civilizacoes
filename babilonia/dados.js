// BABILÓNIA — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas aproximadas, na «cronologia média». a.C. = antes de Cristo. Acádios e Sumérios só de passagem; os cassitas e os assírios terão páginas próprias.
// Imagens: cada {img:'id'} procura o ficheiro  babilonia/img/id.jpg  (ver IMAGENS_BABILONIA.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    '**Babilónia** foi uma das grandes cidades da Antiguidade e o centro de um reino, e depois de um império, no coração da Mesopotâmia (hoje o Iraque central). Brilhou duas vezes: no tempo de **Hamurabi** (século XVIII a.C.), o rei do famoso Código de leis, e no tempo de **Nabucodonosor II** (século VI a.C.), o rei da Porta de Ishtar, da torre de Babel e do exílio dos judeus.',
    'Entre as duas épocas passaram séculos de domínio ou de ameaça de estrangeiros (hititas, cassitas, elamitas, assírios), em que a cidade perdeu várias vezes o poder político mas nunca o prestígio: era a cidade do deus **Marduk**, a capital religiosa e intelectual do sul mesopotâmico. Os escribas e astrónomos babilónicos legaram-nos a matemática de base 60, os registos astronómicos mais longos da Antiguidade e uma literatura que influenciou a Bíblia.'
  ] },
  { img: 'bab-mapa-regiao', leg: 'Mapa da Babilónia, do Elam e das regiões vizinhas, no início do II milénio a.C.' },
  { h: 'Onde ficava' },
  'Babilónia ficava na margem do **Eufrates**, cerca de 85 km a sul da atual Bagdade, perto da cidade iraquiana de Hilla. Era o ponto em que os dois grandes rios mais se aproximam, no centro da planície aluvial, entre a Assíria (a norte) e a Suméria (a sul). Essa posição, em cima de uma das rotas fluviais e caravaneiras mais movimentadas do Próximo Oriente, ajuda a explicar a sua riqueza.',
  'O nome vem do acádio **Bāb-ilim**, «porta do deus» (ou «dos deuses»), e os escribas escreviam-no em sumério como KÁ.DINGIR.RA. Em hebraico a palavra soou como **Bavel** («Babel»), e a Bíblia fez dela um jogo de palavras com o verbo «confundir». O nome da região, **Babilónia**, passou depois a designar todo o sul mesopotâmico, a antiga Suméria e Acad. A língua de Babilónia era o **acádio** (dialeto babilónico), uma língua semita escrita em cuneiforme, a língua dos antigos acádios, em formas mais tardias.',
  { img: 'bab-ruinas-babilonia', leg: 'Ruínas de Babilónia, Iraque, com reconstruções modernas parciais.' },
  { h: 'Quando existiu' },
  'Babilónia é mencionada pela primeira vez em textos de cerca de 2300 a.C., como uma cidade pequena e sem importância. A sua história divide-se em grandes fases, com datas aproximadas na «cronologia média».',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Cidade antiga', 'c. 2300 – 1894 a.C.', 'Pequena cidade do período acádio e de Ur III; chegada dos amoritas, povo semita ocidental, ao sul mesopotâmico'],
    ['I Dinastia (paleobabilónica)', 'c. 1894 – 1595 a.C.', 'Dinastia amorita; Hamurabi unifica o sul e o Código de leis; o reino cai para os hititas'],
    ['Período cassita', 'c. 1595 – 1155 a.C.', 'Dinastia cassita, a mais longa de Babilónia; diplomacia e correspondência com o Egito; Dur-Kurigalzu'],
    ['Dinastias intermédias', 'c. 1155 – 1000 a.C.', 'Domínio elamita e II Dinastia de Isin; Nabucodonosor I recupera a estátua de Marduk'],
    ['Domínio arameu e assírio', 'c. 1000 – 626 a.C.', 'Tribos arameias e caldeias; Babilónia fica na órbita da Assíria, com revoltas e destruição em 689 a.C.'],
    ['Império Neobabilónico (caldeu)', '626 – 539 a.C.', 'Nabopolassar destrói a Assíria; Nabucodonosor II; Exílio; Nabonido; queda para Ciro'],
    ['Depois da queda', '539 a.C. – século I d.C.', 'Domínio persa, Alexandre, selêucidas e partas; a cidade esvazia-se; último texto cuneiforme datado de 75 d.C.']
  ] } },
  { img: 'bab-mapa-imperio-hamurabi', leg: 'Mapa da extensão aproximada do reino de Hamurabi, c. 1750 a.C.' },
  { h: 'Quem eram os babilónios?' },
  'Os babilónios não eram «um povo» no sentido de uma origem única. Os primeiros reis eram **amoritas**, semitas vindos do oeste (do deserto sírio), que se instalaram nas cidades do sul depois do colapso de Ur III, por volta de 2000 a.C., e adotaram a escrita, a religião e a cultura dos sumérios e dos acádios. Mais tarde reinaram **cassitas** (vindos das montanhas do Zagros) e, no período neobabilónico, **caldeus**, tribos de língua semita instaladas no extremo sul. Mas a cultura que todos assumiram era a mesma: a de uma Mesopotâmia que se via como herdeira de Sumer e de Acad, e Babilónia como a sua cidade sagrada.',
  { h: 'Porque importam' },
  { lista: [
    '**Lei:** o Código de Hamurabi é o mais completo código jurídico da Mesopotâmia que chegou até nós, e uma das fontes da ideia de que a justiça se escreve e se afixa.',
    '**Matemática e astronomia:** a base 60, as tábuas de cálculo, a «aproximação» de √2 e os registos do céu feitos durante séculos (os Diários Astronómicos) estão na origem da ciência posterior, incluindo a grega.',
    '**Literatura e religião:** o Enuma Elish, as listas, os hinos e as lamentações; e foi na Babilónia que os judeus exilados deram forma a muitos textos da Bíblia hebraica.',
    '**Arquitetura e imaginário:** a Porta de Ishtar, o zigurate Etemenanki (a «torre de Babel») e os Jardins Suspensos (um dos mistérios mais discutidos da arqueologia) moldaram a imagem da cidade grandiosa e orgulhosa.',
    '**Cidade multicultural:** judeus, arameus, egípcios, persas, gregos e outros viveram em Babilónia, que foi durante séculos uma das maiores cidades do mundo.'
  ] },
  { caixa: 'Babilónia hoje', texto: 'As ruínas de **Babilónia** foram inscritas na lista do Património Mundial da UNESCO em 2019. Estão a cerca de 85 km de Bagdade e visitam-se, mas apenas uma pequena parte da cidade foi escavada, e as reconstruções feitas nos anos 1980 sob Saddam Hussein são criticadas pelos arqueólogos.' },
  { img: 'bab-porta-ishtar-berlim', leg: 'Reconstrução museológica da Porta de Ishtar. Museu de Pérgamo, Berlim.' }
];

const linha = [
  'Esta linha do tempo segue os acontecimentos principais da história de Babilónia. As datas são aproximadas na «cronologia média»; os séculos mais antigos são os mais incertos.',
  { linha: [
    { d: 'c. 2300 a.C.', t: 'A primeira menção da cidade', x: 'Textos do tempo dos reis de Acad mencionam **Babilónia** (Bāb-ilim) como uma pequena cidade com templos. Pouco se sabe dela: os níveis mais antigos estão debaixo do lençol de água, e quase nada foi escavado.' },
    { d: 'c. 2000 a.C.', t: 'Chegam os amoritas', x: 'Com o colapso de Ur III, grupos de língua semita ocidental, os **amoritas**, instalam-se nas cidades da Mesopotâmia e criam pequenos reinos em Isin, Larsa, Babilónia e outras.' },
    { d: 'c. 1894 a.C.', t: 'Sumu-abum funda a I Dinastia', x: 'O chefe amorita **Sumu-abum** toma Babilónia e começa a dinastia que durará cerca de trezentos anos. Os primeiros reis são pequenos senhores locais, entre rivais mais fortes.' },
    { d: 'c. 1792 a.C.', t: 'Hamurabi sobe ao trono', x: 'Quando **Hamurabi** herda o trono do pai Sin-muballit, Babilónia é apenas um dos reinos em disputa, ao lado de Larsa, Eshnunna, Elam e da Assíria de Shamshi-Adad. Os primeiros trinta anos do seu reinado são de diplomacia e de pequenas campanhas.' },
  ] },
  { img: 'bab-hamurabi-estela-cena', leg: 'Cena imaginada de instalação de uma estela de leis em Babilónia, c. 1750 a.C.; não representa um acontecimento documentado. Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 1763 – 1761 a.C.', t: 'Hamurabi derrota os rivais', x: 'Em poucos anos, Hamurabi vence **Larsa** (o rei Rim-Sin), submete **Eshnunna** e depois **Mari**, antiga aliada, de que mandou deitar abaixo as muralhas. Fica senhor de grande parte da Mesopotâmia, do Golfo Pérsico ao médio Eufrates (a Assíria continua independente), e adota o título de «rei de Sumer e Acad».' },
    { d: 'c. 1755 – 1750 a.C.', t: 'O Código de Hamurabi', x: 'Perto do fim do reinado, mandou gravar o seu código de leis numa estela de pedra, com um prólogo em que se apresenta como pastor e rei de justiça. A data exata da estela é discutida. **Hamurabi** morre em c. 1750 a.C.' },
    { d: 'c. 1749 – 1712 a.C.', t: 'Samsu-iluna e as revoltas', x: 'O filho **Samsu-iluna** enfrenta a revolta de todo o sul, liderada por um novo Rim-Sin, e acaba por perder a região mais a sul, que forma o «País do Mar» (uma dinastia independente nos pântanos). Pelo mesmo tempo aparecem os primeiros **cassitas**.' },
    { d: 'c. 1700 – 1595 a.C.', t: 'O reino encolhe', x: 'Os reis seguintes (Abi-eshuh, Ammi-ditana, Ammi-saduqa e Samsu-ditana) governam um estado reduzido à volta de Babilónia. Do tempo de Ammi-saduqa vem a «tábua de Vénus», um dos textos astronómicos mais antigos.' },
    { d: 'c. 1595 a.C.', t: 'Os hititas saqueiam Babilónia', x: 'O rei hitita **Mursili I** desce pelo Eufrates desde a Anatólia, saqueia Babilónia e leva a estátua de Marduk. Não fica para governar e regressa a casa, onde é assassinado. É o fim da I Dinastia, com **Samsu-ditana**. A tradição diz que a estátua de Marduk só voltou mais tarde, sob os cassitas.' },
    { d: 'c. 1595 – 1155 a.C.', t: 'A Babilónia cassita', x: 'Os **cassitas**, de origem montanhesa, ocupam o vazio e governam quase **quatrocentos anos**, a dinastia mais longa da história de Babilónia. Mantêm a língua, a religião e as leis do país.' },
  ] },
  { img: 'bab-kudurru', leg: 'Kudurru cassita com símbolos divinos: monumento de registo de uma concessão de terras. Louvre.' },
  { linha: [
    { d: 'c. 1400 – 1350 a.C.', t: 'Diplomacia e Dur-Kurigalzu', x: 'O rei **Kurigalzu I** funda uma cidade-fortaleza, **Dur-Kurigalzu**. Reis como Burna-Buriash II trocam cartas, ouro e princesas com os faraós do Egito, nas chamadas **cartas de Amarna**; o acádio babilónico é a língua diplomática da Idade do Bronze Final.' },
  ] },
  { img: 'bab-dur-kurigalzu', leg: 'Zigurate de Dur-Kurigalzu (Aqar Quf), perto de Bagdade, Iraque.' },
  { linha: [
    { d: 'c. 1225 a.C.', t: 'A Assíria conquista Babilónia', x: 'O rei assírio **Tukulti-Ninurta I** toma Babilónia e leva a estátua de Marduk. É o primeiro grande choque entre as duas potências, que se vão disputar durante séculos.' },
    { d: 'c. 1155 a.C.', t: 'Os elamitas põem fim aos cassitas', x: 'Os reis de Elam, vindos de Susa, invadem a Mesopotâmia, derrubam a dinastia cassita e levam, entre outras peças, a **estátua de Marduk** e a estela do Código de Hamurabi, que só será encontrada em Susa em 1901.' },
    { d: 'c. 1125 – 1104 a.C.', t: 'Nabucodonosor I vinga a cidade', x: 'O rei **Nabucodonosor I**, da II Dinastia de Isin, derrota os elamitas, saqueia Susa e traz de volta a estátua de Marduk. O deus passa a ser plenamente o chefe do panteão, e alguns estudiosos pensam que é desta época o poema **Enuma Elish** (a data é muito discutida).' },
    { d: 'c. 1000 – 750 a.C.', t: 'Séculos de instabilidade', x: 'Tribos de **arameus** e de **caldeus** ocupam o campo, as cidades perdem peso e Babilónia tem reis fracos. A Assíria cresce a norte.' },
    { d: '729 – 627 a.C.', t: 'Babilónia sob a Assíria', x: '**Tiglat-Pileser III** coroa-se rei de Babilónia em 729 a.C. O caldeu **Merodaque-Baladan** revolta-se várias vezes. Em **689 a.C.** o rei assírio **Senaquerib** destrói a cidade, e os sucessores (primeiro o filho **Esarhadão**) reconstroem-na. Em 652–648 a.C. há uma guerra civil entre o rei assírio Assurbanípal e o seu irmão, rei de Babilónia.' },
  ] },
  { img: 'bab-cronica-queda-ninive', leg: 'Crónica Babilónica da queda de Nínive, BM 21901. Museu Britânico.' },
  { linha: [
    { d: '626 a.C.', t: 'Nabopolassar proclama-se rei', x: 'Aproveitando as guerras de sucessão na Assíria, **Nabopolassar**, um senhor de origem discutida, é coroado rei de Babilónia em novembro de 626 a.C. e funda o Império Neobabilónico.' },
    { d: '614 – 609 a.C.', t: 'Cai a Assíria', x: 'Aliado aos medas, Nabopolassar conquista **Assur** (614 a.C.), **Nínive** (612 a.C.) e depois Harran (610–609 a.C.), pondo fim ao império assírio.' },
    { d: '605 a.C.', t: 'Batalha de Carquemis', x: 'O príncipe herdeiro **Nabucodonosor** derrota o exército egípcio do faraó Neco II em Carquemis (hoje no sul da Turquia) e domina a Síria. Nesse ano morre o pai e ele torna-se **Nabucodonosor II**, rei durante 43 anos.' },
    { d: '597 e 587/586 a.C.', t: 'Jerusalém e o Exílio', x: 'Em 597 a.C. Nabucodonosor toma Jerusalém e leva o rei Joaquim e milhares de pessoas para a Babilónia. Depois de uma segunda revolta, destrói a cidade e o **Primeiro Templo** em 587 ou 586 a.C. (a data é debatida) e deporta mais gente. É o **Exílio de Babilónia**.' },
  ] },
  { img: 'bab-racoes-joaquim', leg: 'Tabuinha de rações de Babilónia que menciona Joaquim, rei de Judá. Museu do Antigo Oriente, Berlim.' },
  { linha: [
    { d: 'c. 600 – 562 a.C.', t: 'A cidade de Nabucodonosor', x: 'Com o tributo do império, **Nabucodonosor II** reconstrói a cidade em grande escala: palácios, as muralhas, a **Via Processional**, a **Porta de Ishtar** (c. 575 a.C.) e o zigurate **Etemenanki**. É também neste reinado que a tradição coloca os **Jardins Suspensos**.' },
  ] },
  { img: 'bab-tijolo-nabucodonosor', leg: 'Tijolo estampado com inscrição de Nabucodonosor II.' },
  { linha: [
    { d: '562 – 556 a.C.', t: 'Reis em rápida sucessão', x: 'Depois de Nabucodonosor, três reis (**Amel-Marduk**, **Neriglissar** e **Labashi-Marduk**) reinam em poucos anos, entre golpes de palácio. O primeiro libertou, segundo a Bíblia, o rei Joaquim da prisão.' },
    { d: '556 a.C.', t: 'Nabonido, o rei que ficou longe', x: '**Nabonido** sobe ao trono, é devoto do deus-Lua Sin e muda-se durante cerca de dez anos para o oásis de **Teima**, na Arábia, deixando o filho **Belsazar** a governar a Babilónia. O clero de Marduk e a elite ficam descontentes.' },
    { d: '539 a.C.', t: 'Ciro conquista Babilónia', x: 'O rei persa **Ciro II** vence o exército babilónico em **Opis**, em outubro, e Babilónia rende-se, sem grande luta, a 12 de outubro. O próprio Ciro entra a 29. Termina assim a independência de Babilónia. A história de Belsazar e do banquete é narrada no Livro de Daniel, mas é uma tradição bíblica, não um facto confirmado.' },
  ] },
  { img: 'bab-cilindro-ciro', leg: 'Cilindro de Ciro, inscrição em acádio babilónico, após a conquista persa de Babilónia. Museu Britânico.' },
  { linha: [
  ] },
  { img: 'bab-queda-babilonia', leg: 'Interpretação artística da entrada de soldados persas em Babilónia, em 539 a.C.; percurso, arquitetura e vestuário conjeturais. Ilustração gerada por IA.' },
  { linha: [
    { d: '522 – 484 a.C.', t: 'Revoltas contra os persas', x: 'Babilónia revolta-se várias vezes, e o rei Xerxes reprime-a em 484 a.C. Alguns templos são danificados, mas o alcance dos estragos é debatido. A cidade continua a ser capital de uma satrapia persa.' },
    { d: '323 – 305 a.C.', t: 'Alexandre e os selêucidas', x: '**Alexandre Magno** morre em Babilónia, em junho de 323 a.C. O general **Seleuco** funda por volta de 305 a.C. uma nova capital, **Selêucia do Tigre**, e a população de Babilónia vai-se mudando para lá.' },
    { d: '75 d.C.', t: 'O último texto cuneiforme', x: 'O mais recente texto cuneiforme datado que se conhece, um almanaque astronómico, vem de Babilónia, do ano de 75 d.C. A escrita de mais de três mil anos extingue-se.' },
    { d: '1899 – 1917', t: 'As escavações alemãs', x: 'O arqueólogo alemão **Robert Koldewey** escava Babilónia durante 18 anos e revela a planta da cidade de Nabucodonosor: a Porta de Ishtar, a Via Processional e as fundações do Etemenanki. Em **1901–1902** a estela de Hamurabi é descoberta em Susa (Irão).' }
  ] }
];

const mapa = [
  'A Babilónia dos livros de História não é só uma cidade: é uma região, o sul da Mesopotâmia, com um conjunto de cidades antigas que partilhavam a língua, os deuses e a escrita. A «Babilónia» da I Dinastia, da cassita e da neobabilónica tinha fronteiras diferentes em cada época.',
  { img: 'bab-mapa-neobabilonico', leg: 'Mapa da extensão aproximada do Império Neobabilónico, século VI a.C.' },
  { tabela: { cab: ['Cidade', 'Deus protetor', 'Local hoje', 'Para que ficou conhecida'], linhas: [
    ['Babilónia', 'Marduk', 'Hilla, Iraque', 'Capital; Código de Hamurabi, Porta de Ishtar, Etemenanki, Jardins Suspensos (debate)'],
    ['Borsippa', 'Nabu', 'Birs Nimrud, perto de Hilla', 'Cidade «irmã» de Babilónia, do deus da escrita; zigurate Ezida'],
    ['Sippar', 'Shamash', 'Tell Abu Habbah, Iraque', 'Cidade do deus Sol; mosteiro das sacerdotisas naditu; arquivos de contratos'],
    ['Kish', 'Zababa', 'Tell Uhaimir, Iraque', 'Cidade antiga, depois subordinada a Babilónia'],
    ['Nippur', 'Enlil', 'Nuffar, Iraque', 'Centro religioso e escolar; as escolas de escribas e o templo do Ekur'],
    ['Uruk', 'Inanna / Ishtar e Anu', 'Warka, Iraque', 'Cidade antiga, onde houve astrónomos até à época helenística'],
    ['Ur', 'Nanna (Sin)', 'Tell al-Muqayyar, Iraque', 'Cidade da Lua; Nabonido e a filha Ennigaldi-Nanna'],
    ['Larsa', 'Shamash', 'Tell as-Senkereh, Iraque', 'Rival do sul de Babilónia até 1763 a.C.'],
    ['Dur-Kurigalzu', 'Enlil', 'Aqar Quf, perto de Bagdade', 'Capital cassita, fundada por Kurigalzu I'],
    ['Eshnunna', 'Tishpak', 'Tell Asmar, Iraque', 'Reino rival no leste do Tigre; leis anteriores às de Hamurabi'],
    ['Mari', 'Dagan e Ishtar', 'Tell Hariri, Síria', 'Cidade do médio Eufrates, destruída por Hamurabi; arquivo de dezenas de milhares de tabuinhas']
  ] } },
  { h: 'A cidade da Babilónia' },
  'A cidade era cortada a meio pelo **Eufrates**: a cidade interior, com muralhas duplas, ficava na margem leste, e uma ponte ligava-a a um bairro na margem oeste. Era rodeada por fossos e por canais de água do rio. Heródoto, o historiador grego que descreve a cidade no século V a.C. (não é seguro que a tenha visitado), fala de muralhas tão largas que um carro podia correr por cima, mas as suas medidas são claramente exageradas. Era uma cidade enorme, com ruas em quadrícula, casas apinhadas e oito grandes portas, dedicadas a diferentes deuses.',
  { img: 'bab-planta-babilonia', leg: 'Planta de Babilónia publicada por Robert Koldewey, com partes reconstituídas.' },
  { h: 'A Via Processional e a Porta de Ishtar' },
  'Do norte da cidade partia a **Via Processional**, uma rua pavimentada com lajes, ao longo da zona mais sagrada, ladeada de muros cobertos de leões vidrados, símbolo de Ishtar. Era por ali que, no festival do Ano Novo, a estátua de Marduk saía do templo. A rua passava pela **Porta de Ishtar**, a mais monumental das oito portas, revestida de tijolos vidrados azuis, com fiadas de **touros** (do deus Adad) e de **dragões** (o *mušḫuššu*, de Marduk).',
  { img: 'bab-via-processional-leoes', leg: 'Leão em tijolo esmaltado da Via Processional de Babilónia.' },
  { h: 'Esagila e Etemenanki' },
  'No centro da cidade ficava o **Esagila**, o grande templo de Marduk, e ao seu lado o **Etemenanki**, «casa do fundamento do céu e da terra», o zigurate de sete andares. As fontes antigas dão-lhe cerca de 90 m de altura e de lado, o que faria dele um dos edifícios mais altos do mundo antigo; é o que se chama **torre de Babel**. Só restam as fundações.',
  { h: 'O Palácio e os Jardins' },
  'Nabucodonosor II ergueu um grande **Palácio do Sul** e, mais a norte, um palácio de verão. É junto ao Palácio do Sul que Koldewey encontrou uma construção de abóbadas que identificou, sem provas, com os Jardins Suspensos. Hoje a maior parte dos investigadores rejeita essa identificação. Ver mais na secção «Legado».',
  { img: 'bab-reconstrucao-cidade', leg: 'Reconstrução artística da cidade de Babilónia no séc. VI a.C., com o Eufrates, a Via Processional, o Etemenanki e as muralhas.' },
  { h: 'Borsippa, a cidade «irmã»' },
  'A cerca de 17 km a sul de Babilónia, **Borsippa** era a cidade de **Nabu**, filho de Marduk e deus da escrita. Todos os anos, no festival do Ano Novo, a estátua de Nabu vinha de visita a Marduk. O zigurate de Borsippa (**Birs Nimrud**) ainda se vê de longe na planície.',
  { img: 'bab-borsippa', leg: 'Ruínas do zigurate de Borsippa (Birs Nimrud), Iraque.' },
  { h: 'O Leão de Babilónia' },
  'Nas ruínas está ainda uma estátua de basalto de um **leão** sobre uma figura humana deitada, descrita pela primeira vez em 1817 (Claudius Rich). Foi atribuída ao tempo de Nabucodonosor II, mas hoje muitos especialistas veem nela uma obra de origem hitita; a data exata, a origem e o significado (o poder do rei ou da deusa Ishtar) continuam debatidos.',
  { img: 'bab-leao-babilonia', leg: 'Estátua do Leão de Babilónia, no sítio arqueológico.' },
  { h: 'As rotas' },
  'Babilónia vivia do rio e do deserto. Pelo **Eufrates** subiam e desciam barcos e, ao longo das margens, caravanas de burros e, mais tarde, de camelos, ligavam-na a **Mari** e à Síria, ao norte, e ao **Golfo Pérsico** e a Dilmun (o Barém), ao sul. A leste, as estradas para o Tigre levavam a **Elam** e ao planalto iraniano, de onde vinham o estanho e as pedras. A norte ficava a Assíria. No século VI a.C. as caravanas chegavam aos oásis da Arábia (**Teima**) e ao Mediterrâneo. O estanho, o cobre, a madeira de cedro, o ouro, a prata e as pedras semipreciosas, como o lápis-lazúli, chegavam de fora, e saíam têxteis, cevada, tâmaras, azeite de gergelim e cerâmica.'
];

const sociedade = [
  { h: '1. Organização política' },
  'Durante a maior parte da sua história Babilónia foi uma **monarquia hereditária**. O rei era o representante dos deuses na Terra, o «pastor» do seu povo, juiz supremo e chefe do exército, mas não era um deus (como o faraó do Egito). No tempo de Hamurabi, o reino era dirigido por **governadores** e por funcionários de confiança, ligados ao rei por cartas: conservam-se muitas das suas cartas, onde ele decide pequenas questões de canais, de impostos e de gado. Os templos e as grandes famílias de comerciantes tinham muito poder.',
  { cit: 'Para que o forte não oprima o fraco, para dar justiça à viúva e ao órfão.', fonte: 'Do epílogo do Código de Hamurabi (paráfrase da fórmula usada pelo próprio rei, c. 1750 a.C.)' },
  { h: '2. O Código de Hamurabi' },
  'O **Código de Hamurabi** é uma estela de diorito negro com cerca de 2,25 m de altura. No topo, uma imagem mostra o rei diante do deus Sol, **Shamash**, que lhe estende o bastão e o anel (símbolos do poder). Por baixo, em cuneiforme acádio, há um prólogo, **cerca de 280 leis** e um epílogo. Não é um «código» no sentido moderno: não cobre todos os casos e parece reunir decisões exemplares. Não foi o primeiro: já antes o tinham feito Ur-Nammu de Ur, Lipit-Ishtar de Isin e o reino de Eshnunna.',
  { img: 'bab-estela-hamurabi', leg: 'Estela do Código de Hamurabi, c. 1750 a.C. Louvre.' },
  { img: 'bab-estela-hamurabi-topo', leg: 'Topo da estela do Código de Hamurabi: o rei diante de Shamash. Louvre.' },
  'As leis tratam de **comércio, contratos, família, propriedade, ofícios, escravos e crimes**. Têm penas muitas vezes duras, que dependem da classe social das pessoas envolvidas. É famosa a lei do **talião**:',
  { cit: 'Se um homem cegar o olho de outro homem, cegar-se-á o seu olho.', fonte: 'Código de Hamurabi, lei 196' },
  { lista: [
    '**Prova:** quem acusar outro de um crime grave e não o provar é punido com a pena que o acusado teria sofrido (lei 1). Havia ainda a **ordália do rio** para casos de feitiçaria e de adultério.',
    '**Construtores:** se uma casa mal construída desabar e matar o dono, o construtor é morto (lei 229).',
    '**Médicos:** havia tabelas de honorários e penas para o cirurgião que causasse a morte ou a cegueira do doente.',
    '**Preços e salários:** estão fixados em lei os ganhos dos barqueiros, dos ceifeiros e dos pedreiros.',
    '**Família:** os casamentos eram contratos escritos; a mulher tinha direito ao dote e podia pedir o divórcio em certos casos.'
  ] },
  { h: '3. Classes sociais' },
  'O Código distingue três grupos: o **awīlum** (homem livre, de pleno direito), o **muškēnum** (um homem livre de estatuto mais baixo, muitas vezes ligado ao palácio) e o **wardum** (o escravo). A ofensa a um awīlum custava mais do que a um muškēnum, e a um escravo ainda menos. A escravatura era comum, resultante de guerra, de dívidas ou de nascimento, mas o escravo podia ter bens, casar com uma pessoa livre e comprar a sua liberdade. Havia ainda comerciantes (*tamkārum*), artesãos, agricultores, soldados e escribas.',
  { h: '4. Religião' },
  'Os babilónios herdaram o panteão sumério-acádio e deram-lhe novos nomes e novas hierarquias. O seu deus-cidade, **Marduk**, subiu ao topo, e por volta de 1100 a.C. era já o chefe dos deuses. Cada cidade tinha o seu deus protetor, e cada deus a sua estátua, no templo, que era «vestida», «alimentada» e levada em procissão.',
  { tabela: { cab: ['Deus', 'Domínio', 'Cidade'], linhas: [
    ['Marduk', 'Rei dos deuses, protetor de Babilónia; símbolo: o dragão *mušḫuššu* e a pá', 'Babilónia'],
    ['Nabu', 'Escrita, sabedoria; filho de Marduk', 'Borsippa'],
    ['Ishtar (Inanna)', 'Amor, guerra, planeta Vénus', 'Uruk, Babilónia e outras'],
    ['Shamash', 'Sol, justiça', 'Sippar e Larsa'],
    ['Sin (Nanna)', 'Lua', 'Ur e Harran'],
    ['Adad', 'Tempestade, chuva', 'várias'],
    ['Ea (Enki)', 'Água doce, sabedoria, magia; pai de Marduk', 'Eridu'],
    ['Nergal', 'Guerra, peste, mundo dos mortos', 'Kutha'],
    ['Tiamat', 'Oceano primordial; monstro vencido por Marduk no Enuma Elish', '—']
  ] } },
  { img: 'bab-marduk-dragao', leg: 'Marduk e o dragão mušḫuššu: desenho publicado em 1903 a partir de um selo de Marduk-zakir-shumi I, século IX a.C.; alternativa documental ao selo neobabilónico.' },
  { h: 'O Enuma Elish' },
  'O **Enuma Elish** («Quando no alto…», as palavras de abertura) é o poema da criação babilónico, em sete tabuinhas. Conta como o mundo nasceu de duas águas, **Apsu** (doce) e **Tiamat** (salgada), como os deuses novos fizeram tanto barulho que Apsu os quis destruir, e como **Marduk** derrotou Tiamat, dividiu o seu corpo em céu e terra e criou os homens, do sangue de um deus rebelde, para servirem os deuses. Os deuses fizeram então de Marduk rei e deram-lhe cinquenta nomes. É um poema político e religioso: justifica a primazia de Marduk e de Babilónia. A data da composição é debatida (talvez c. 1100 a.C.).',
  { cit: 'Quando no alto o céu ainda não tinha nome...', fonte: 'Enuma Elish, tabuinha I (primeiro verso, em tradução livre)' },
  { img: 'bab-enuma-elish', leg: 'Tabuinha do Enuma Elish, poema babilónico da criação. Museu Britânico.' },
  { h: 'A festa do Akitu' },
  'No início do ano, em abril (mês de Nisan), celebrava-se o **Akitu**, a maior festa de Babilónia, durante **doze dias**. No quarto dia lia-se o Enuma Elish. O rei ia ao templo e o sumo-sacerdote tirava-lhe as insígnias, esbofeteava-o e fazia-o ajoelhar-se perante a estátua de Marduk, e ele jurava que não tinha faltado ao povo: só então lhe devolviam o poder, para mais um ano. As estátuas dos deuses das outras cidades vinham em barco a Babilónia e a de Marduk saía em procissão pela Via Processional até à «Casa do Akitu», fora das muralhas. Sem o rei na festa, o ano não era legítimo.',
  { img: 'bab-akitu', leg: 'Reconstrução artística de uma procissão do festival de Ano Novo Akitu em Babilónia, c. 580 a.C.; pormenores rituais conjeturais. Ilustração gerada por IA.' },
  { h: 'A vida depois da morte' },
  'Os mortos iam para o **Mundo Inferior** (*Irkalla*), um lugar sombrio sob a terra, governado por **Ereshkigal** e por Nergal, onde se comia pó e argila. Os vivos tinham de dar comida e água aos mortos, e muitas casas tinham sepulturas por baixo do chão, com oferendas.',
  { h: '5. Economia' },
  'A economia assentava na **agricultura de irrigação**: cevada, trigo, tâmaras, legumes e linho, e nos rebanhos de ovelhas (lã) e de gado. Os campos eram do palácio, dos templos e de particulares, trabalhados por agricultores livres e por rendeiros. A prata, pesada em **siclos** e **minas**, servia de dinheiro (1 mina = 60 siclos, c. 500 g) e não havia moedas cunhadas até à chegada dos persas. Havia **bancos** familiares: no século VI a.C., os Egibi, de Babilónia, emprestavam dinheiro e compravam terras, e no século V a.C. os Murashu, de Nippur. Os contratos eram escritos em tabuinhas, com testemunhas e selos.',
  { img: 'bab-mercado', leg: 'Reconstrução artística de um mercado junto ao Eufrates em Babilónia, c. 600 a.C., com prata pesada, cereais, tecidos e escribas. Ilustração gerada por IA.' },
  { h: '6. Escrita, escribas e escolas' },
  'A língua escrita era o **acádio** em cuneiforme, e o **sumério** era ensinado como língua erudita, como o latim na Europa. A escola chamava-se *edubba* («casa das tabuinhas») e formava os escribas, que copiavam listas de sinais, contas e textos clássicos. Havia também **cartas**, contratos e arquivos privados, e bibliotecas nos templos. No período neobabilónico, o **aramaico**, escrito com um alfabeto de 22 letras, em papiro e couro, tornou-se cada vez mais a língua falada.',
  { img: 'bab-escola-edubba', leg: 'Cena imaginada de uma escola de escribas paleobabilónica, c. 1750 a.C., com exercícios em tabuinhas de argila. Ilustração gerada por IA.' },
  { img: 'bab-tabuinha-escolar', leg: 'Tabuinha escolar paleobabilónica com um provérbio: versão do mestre, com a cópia do aluno no verso. Museu Britânico, BM 104096.' },
  { h: '7. Casa e família' },
  'As casas eram de tijolo de barro, de um ou dois andares, com um **pátio central** ao redor do qual se arrumavam as divisões, de portas viradas para dentro. O telhado servia para dormir no verão. A família era **patriarcal**: o pai mandava, mas a mulher podia ter bens, fazer contratos e ir a tribunal. Havia mulheres de grande importância, como as **sacerdotisas naditu** de Sippar, que viviam num recinto fechado ao serviço de Shamash, não casavam, geriam terras e emprestavam dinheiro. Os mortos eram enterrados muitas vezes por baixo da casa.',
  { img: 'bab-casa-babilonica', leg: 'Vista em corte de uma casa paleobabilónica com pátio, c. 1700 a.C.; reconstrução artística do espaço doméstico. Ilustração gerada por IA.' },
  { img: 'bab-ea-nasir', leg: 'Carta de reclamação a Ea-nasir sobre cobre, c. 1750 a.C. Museu Britânico.' },
  { h: '8. Alimentação' },
  'A base era a **cevada**, em pão e papas, e a **cerveja**, bebida de todos. Comia-se também cebola, alho, alho-porro, lentilhas, grão, peixe, carne de carneiro e de cabra, aves, ovos, queijo e tâmaras, que também davam açúcar. O azeite era de gergelim. Três tabuinhas paleobabilónicas, hoje na Universidade de Yale, guardam as receitas escritas mais antigas do mundo (c. 1750 a.C.): guisados, caldos de carne e de aves com cebola, alho-porro e especiarias. O vinho vinha das montanhas e era caro.',
  { img: 'bab-tabuinha-culinaria', leg: 'Tabuinha de receitas paleobabilónicas YBC 4644. Yale.' },
  { h: '9. Vestuário' },
  'A roupa era de **lã** e de linho. Os homens vestiam uma túnica até aos joelhos, ou um saiote; as mulheres uma túnica comprida, com um xale. No período neobabilónico a moda era de túnicas compridas, franjadas, com cinto e chapéu. Os babilónios usavam barba, bem cuidada e frisada, e cabelo comprido. Os selos cilíndricos, os joalheiros e os cosméticos (olhos pintados com kohl) eram comuns.',
  { h: '10. Música, jogos e festas' },
  'Havia **liras, harpas, flautas, tambores e címbalos**, tocados em templos, palácios e festas. Algumas tabuinhas guardam o que parece ser a teoria musical mais antiga conhecida (escalas de sete notas), mas a sua interpretação é discutida. Jogavam o **Jogo Real de Ur**, de 20 casas, e outros de tabuleiro; uma tabuinha do ano de 177 a.C., de Babilónia, escrita por um escriba chamado Itti-Marduk-balatu, até explica as regras. Havia ainda lutas e jogos de bola.',
  { h: '11. Matemática' },
  'Os babilónios usavam um sistema **sexagesimal** (base 60), com valor de posição, que ainda está nas horas, nos minutos e nos 360 graus do círculo. Resolviam equações de segundo grau, calculavam raízes quadradas, juros compostos e áreas e volumes, em tabuinhas escolares de c. 1800 a.C. Não tinham um símbolo para o zero no início: apenas um espaço, e só mais tarde (séc. IV a.C.) um sinal de posição vazia.',
  { img: 'bab-plimpton-322', leg: 'Tabuinha matemática paleobabilónica Plimpton 322. Universidade de Columbia.' },
  'A tabuinha **Plimpton 322**, de c. 1800 a.C., tem uma tabela de números que formam triplos pitagóricos, o que mostra que se conhecia a relação do teorema de Pitágoras mais de mil anos antes de Pitágoras. A sua função (escolar, tabela trigonométrica ou outra) é muito discutida. Outra tabuinha, a **YBC 7289** (Yale), mostra um quadrado com as diagonais e o valor de √2 com seis casas decimais corretas, aproximadamente 1,41421296.',
  { img: 'bab-ybc-7289', leg: 'Tabuinha YBC 7289 com uma aproximação da raiz quadrada de 2. Yale.' },
  { h: '12. Astronomia e calendário' },
  'Os babilónios observaram o céu durante séculos, por razões religiosas: os astros eram sinais dos deuses, e os **presságios** (*Enuma Anu Enlil*, uma coleção de cerca de 70 tabuinhas) tentavam prever o futuro dos reis. A tabuinha de Vénus de Ammi-saduqa (séc. XVII a.C.) regista o aparecimento do planeta durante 21 anos. A coleção **MUL.APIN** (c. 1000 a.C. ou mais antiga) lista estrelas, constelações e planetas.',
  { img: 'bab-tabuinha-venus', leg: 'Tábua de Vénus de Ammi-saduqa: cópia neoassíria de observações babilónicas. Museu Britânico.' },
  'Os **Diários Astronómicos** (c. 652 – 61 a.C.) são o registo contínuo mais longo da Antiguidade: noite a noite, os escribas do templo anotavam a posição da Lua e dos planetas, o tempo, o nível do rio, o preço da cevada e os acontecimentos políticos. Aí está o cometa Halley, em 164 e em 87 a.C. A partir deles, descobriram os ciclos dos **eclipses** (um ciclo de c. 18 anos) e dos planetas, fizeram previsões matemáticas e criaram o **zodíaco** de 12 signos (c. 400 a.C.). O calendário era **lunissolar**, de 12 meses lunares, com um mês extra para acertar com o Sol, e desde c. 500 a.C. com um ciclo regular de 19 anos.',
  { img: 'bab-diario-astronomico', leg: 'Diário Astronómico de Babilónia, 331–330 a.C. Museu Britânico.' },
  { img: 'bab-observatorio', leg: 'Cena imaginada de observações astronómicas em Babilónia, c. 500 a.C.; a localização numa esplanada de zigurate é conjetural. Ilustração gerada por IA.' },
  { h: '13. Mapa-múndi e medicina' },
  'O **Mapa-múndi babilónico** (*Imago Mundi*) é uma tabuinha de argila, hoje no Museu Britânico, encontrada em Sippar. É uma cópia do século VI a.C. de um modelo mais antigo e mostra o mundo como um disco, com Babilónia ao centro, rodeada por um oceano («o rio amargo») e por regiões triangulares lá fora (até oito), mais além do oceano. O texto fala de lugares míticos.',
  { img: 'bab-mapa-mundi', leg: 'Mapa-múndi babilónico (Imago Mundi), c. século VI a.C. Museu Britânico.' },
  'A medicina era dividida entre o **asû** (médico, que usava ervas e pomadas) e o **āšipu** (exorcista, que fazia rituais). O *Manual de Diagnóstico* (c. 1050 a.C., de Esagil-kin-apli, de Borsippa) é um dos textos médicos mais antigos que seguem um método: observar os sintomas, fazer um diagnóstico e prever o resultado.',
  { h: '14. Tecnologia e construção' },
  'As cidades eram construídas com **tijolo cru e cozido**, ligados com **betume** natural, que vinha de Hit, no Eufrates. Os tijolos vidrados da Porta de Ishtar eram cozidos em fornos e cobertos com um vidrado azul de cobre e cobalto. Usavam também a **roda**, o arado, os **canais** de irrigação, as represas, os barcos de couro e de caniço, os relógios de água e os relógios de sol (*gnómon*).',
  { img: 'bab-oficina-tijolos', leg: 'Reconstrução artística de uma oficina de tijolos esmaltados de Babilónia, c. 580 a.C., com relevos de animais distribuídos por vários tijolos. Ilustração gerada por IA.' },
  { h: '15. Guerra' },
  'O exército babilónico tinha **infantaria** com lanças, escudos e arcos, **carros de guerra** e, com os cassitas, **cavalaria** (o cavalo torna-se comum na Mesopotâmia na época cassita). O exército neobabilónico, de Nabucodonosor, combinava recrutas do reino com mercenários e contingentes de povos vassalos. Cercava as cidades com rampas e aríetes: a conquista de Jerusalém e o cerco de **Tiro** (treze anos, a partir de 586 a.C., sem vitória clara) são os mais famosos. Os reis de Babilónia deportavam populações, como fizeram os assírios.',
  { img: 'bab-exercito', leg: 'Interpretação artística de soldados neobabilónicos, c. 600 a.C., com lanceiros, escudos de vime e um carro de guerra; equipamento e estandartes conjeturais. Ilustração gerada por IA.' }
];

const personalidades = [
  'Nos textos babilónicos, a memória dos reis é muito desigual: de alguns só se conservam os nomes, de outros há cartas e inscrições. As figuras seguintes são reais, e as histórias que as rodeiam estão assinaladas como tradição quando não são confirmadas.',
  { h: 'Hamurabi, rei de Babilónia (c. 1792 – 1750 a.C.)' },
  'O sexto rei da I Dinastia. Chamava-se **Ammu-rapi**, nome amorita. Herdou um pequeno reino e, em trinta anos de diplomacia e de guerra, tornou-se senhor de grande parte da Mesopotâmia. Controlava tudo por cartas, preocupava-se com os canais e com a justiça, e mandou gravar o seu código na estela. Era um administrador, mais do que um conquistador, e a sua obra não lhe sobreviveu muito tempo.',
  { h: 'Samsu-iluna (c. 1749 – 1712 a.C.)' },
  'Filho e sucessor de Hamurabi. Enfrentou a grande revolta do sul e perdeu essa região para a dinastia do País do Mar. Foi com ele que Babilónia deixou de ser uma potência. Em seu tempo, os primeiros cassitas aparecem nos textos.',
  { h: 'Mursili I, rei dos hititas (c. 1620 – 1590 a.C.)' },
  'O rei hitita que atravessou a Síria e desceu o Eufrates até Babilónia em c. 1595 a.C., pôs fim à I Dinastia e voltou a casa com os despojos, incluindo a estátua de Marduk. Foi assassinado ao regressar. Não era babilónio, mas a sua campanha mudou a história da cidade.',
  { h: 'Burna-Buriash II, rei cassita (c. 1359 – 1333 a.C.)' },
  'Rei da Babilónia cassita, contemporâneo do faraó Aquenáton (e dos seus sucessores imediatos). As **cartas de Amarna** guardam a sua correspondência com o faraó, onde se queixa de que o ouro enviado era pouco e discute casamentos entre as famílias reais. Mostram uma Babilónia respeitada entre as grandes potências do mundo.',
  { h: 'Nabucodonosor I, rei de Isin e de Babilónia (c. 1125 – 1104 a.C.)' },
  'O maior rei da II Dinastia de Isin. Derrotou os elamitas junto ao rio Ulai, saqueou Susa e recuperou a estátua de Marduk, que os elamitas tinham levado. A sua vitória é lembrada em textos religiosos e foi uma fonte de orgulho nacional. Não confundir com Nabucodonosor II.',
  { h: 'Merodaque-Baladan II (reinou 721 – 710 e 703 a.C.)' },
  'Chefe caldeu (do clã Bit-Yakin) que se fez rei de Babilónia e resistiu aos reis assírios Sargão II e Senaquerib durante anos, aliando-se a Elam. É lembrado na Bíblia, que fala de uma embaixada sua ao rei Ezequias de Judá. Acabou por fugir para Elam. Um marco (kudurru) com a sua imagem está no Museu de Berlim.',
  { img: 'bab-merodaque-baladan', leg: 'Kudurru de Merodaque-Baladan II. Museu do Antigo Oriente, Berlim.' },
  { h: 'Nabopolassar, fundador do Império Neobabilónico (626 – 605 a.C.)' },
  'Um senhor de origem discutida (talvez caldeu, talvez de Uruk) que, em 626 a.C., aproveitou a crise da Assíria para se fazer rei. Venceu os assírios, aliou-se aos medas e destruiu Nínive em 612 a.C. Morreu em 605 a.C., e o seu filho completou a obra.',
  { h: 'Nabucodonosor II (reinou 605 – 562 a.C.)' },
  'O maior rei do Império Neobabilónico. Venceu o Egito em Carquemis, conquistou a Síria e a Palestina, destruiu Jerusalém e deportou os seus habitantes. Foi o grande construtor de Babilónia: o seu nome está em milhões de tijolos. A tradição diz que casou com **Amytis**, princesa meda, e que os Jardins Suspensos foram um presente para ela, mas isto vem de fontes tardias e não está confirmado. A Bíblia (Livro de Daniel) conta que enlouqueceu e viveu como um animal; trata-se de uma lenda, que talvez reflita a história de Nabonido.',
  { h: 'Nabonido (556 – 539 a.C.)' },
  'O último rei independente. Não era de família real e subiu ao trono depois de um golpe de estado. Era devoto do deus Lua, **Sin**, de Harran, onde a mãe, **Adda-guppi**, era sacerdotisa, e isso criou conflitos com os sacerdotes de Marduk. Durante cerca de dez anos viveu no oásis de **Teima**, na Arábia, por razões que se discutem (comércio, religião ou política). Interessava-se pelo passado: mandou procurar e escavar templos antigos, e por isso chamam-lhe por vezes «o primeiro arqueólogo». A imagem negativa que temos dele vem em boa parte de textos escritos depois da conquista persa, ao serviço de Ciro.',
  { img: 'bab-nabonido-estela', leg: 'Estela de Nabónido com símbolos da Lua, do Sol e de Ishtar. Museu Britânico.' },
  { h: 'Belsazar (Bel-shar-usur)' },
  'Filho mais velho de Nabonido. Enquanto o pai estava em Teima, comandou o exército e governou em Babilónia, mas nunca foi rei oficial: os textos babilónicos chamam-lhe «filho do rei». É mais conhecido pelo Livro de Daniel, que o apresenta como rei, num **banquete** em que uma mão misteriosa escreve na parede («mene, mene, tekel, parsin»), e que é morto na noite da conquista da cidade. É uma narrativa bíblica, não confirmada por fontes babilónicas.',
  { h: 'Ennigaldi-Nanna, sacerdotisa de Ur' },
  'Filha de Nabonido e sacerdotisa do deus Lua em Ur. Nas escavações de Leonard Woolley, numa sala do seu palácio, apareceram objetos antigos com etiquetas de argila, o que levou a chamar-lhe a sala «o primeiro museu do mundo». Esta interpretação é debatida, mas mostra o interesse da família real pelo passado.',
  { h: 'Beroso (c. 290 a.C.)' },
  'Sacerdote de Marduk, em Babilónia, que escreveu em grego uma **História da Babilónia** (*Babyloniaca*) para o rei selêucida Antíoco I. A obra perdeu-se, mas alguns trechos foram transmitidos por autores posteriores, como o historiador judeu Flávio Josefo. É nele que se baseia a ligação entre Nabucodonosor e os Jardins Suspensos.',
  { h: 'Kidinnu (Cidenas, séc. IV a.C.)' },
  'Astrónomo babilónico (a cidade de origem é incerta), a quem a tradição grega atribui um dos dois sistemas matemáticos que os babilónios usavam para prever a posição da Lua e dos planetas (o «Sistema B»). Pouco se sabe da sua vida, e o seu papel real nesse sistema é incerto: as tabuinhas do Sistema B não o nomeiam como autor e o método pode ser anterior.',
  { h: 'Ciro II, o Grande, rei da Pérsia (c. 559 – 530 a.C.)' },
  'Fundador do Império Persa. Conquistou Babilónia em 539 a.C., com pouca violência, e apresentou-se como libertador, escolhido por Marduk. No **Cilindro de Ciro** diz que mandou devolver estátuas aos seus templos e que deixou os povos deportados regressarem. A Bíblia conta que deixou os judeus voltar a Jerusalém. A ideia moderna de que o cilindro é uma «carta dos direitos humanos» é contestada pelos historiadores.'
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**Medidas do tempo e do círculo:** a hora de 60 minutos, o minuto de 60 segundos e o círculo de 360 graus vêm do sistema sexagesimal babilónico.',
    '**Astronomia:** os Diários Astronómicos, os ciclos dos eclipses e o zodíaco, que passaram à Grécia e, por ela, a toda a ciência europeia e árabe.',
    '**Direito:** a ideia de leis escritas e públicas, com preços e penas fixados, que se vê no Código de Hamurabi.',
    '**Literatura:** o Enuma Elish, as lamentações, a literatura sapiencial e a «Teodiceia babilónica», um diálogo sobre o sofrimento do justo.',
    '**Bíblia e religião:** o Exílio de Babilónia (c. 597 – 538 a.C.) foi o momento em que muitos textos da Bíblia hebraica foram reunidos e editados. Mais tarde o **Talmude de Babilónia** (séc. III a VI d.C.) foi redigido por comunidades judaicas do Iraque.',
    '**Imaginário:** a «torre de Babel», os Jardins Suspensos, a «Babilónia» como cidade do luxo e do pecado (no Apocalipse) e a canção *Rivers of Babylon* (1970, The Melodians; versão famosa dos Boney M, 1978), sobre o Salmo 137.'
  ] },
  { cit: 'Junto aos rios de Babilónia, ali nos sentámos e chorámos, lembrando-nos de Sião.', fonte: 'Salmo 137, 1 (tradução livre)' },
  { h: 'Arte' },
  'A arte babilónica é conhecida sobretudo por **tijolos vidrados**, por **relevos** (os leões da Via Processional), pelas estelas e pelos **marcos kudurru** cassitas, e pelos **selos cilíndricos**. Não houve uma grande escultura em pedra como na Assíria ou no Egito, porque a pedra era escassa; houve em contrapartida a cor.',
  { h: 'Arquitetura: o zigurate e os tijolos vidrados' },
  'O zigurate babilónico, o **Etemenanki**, tinha sete andares, e a sua fama deu origem à história da **torre de Babel**, no Livro do Génesis. A tradição bíblica pode refletir um zigurate de Babilónia, e as dimensões e os pormenores são os das fontes cuneiformes. A Porta de Ishtar, de tijolo vidrado azul, é o símbolo da cidade.',
  { img: 'bab-etemenanki', leg: 'Reconstrução hipotética do Etemenanki e do recinto de Esagila em Babilónia, século VI a.C.; níveis, cores e pormenores arquitetónicos conjeturais. Ilustração gerada por IA.' },
  { img: 'bab-torre-babel-bruegel', leg: 'A Torre de Babel, Pieter Bruegel, o Velho, 1563. Kunsthistorisches Museum, Viena; interpretação renascentista.' },
  { h: 'Os Jardins Suspensos: um debate' },
  'Os **Jardins Suspensos de Babilónia** estão na lista das Sete Maravilhas do Mundo Antigo. Os autores gregos e romanos que os descrevem (Beroso, Diodoro, Estrabão) escreveram séculos depois, e não há **nenhuma referência** a eles nos textos babilónicos conhecidos, nem nas inscrições de Nabucodonosor, que descrevem outras obras com detalhe. Também Heródoto, que descreve Babilónia, não os menciona. Há três possibilidades:',
  { lista: [
    'Existiram em Babilónia, como diz a tradição, e ainda não foram encontrados (Koldewey julgou ter achado as suas fundações, mas a maioria rejeita isso).',
    'Eram na verdade em **Nínive**, na Assíria, onde o rei Senaquerib construiu jardins com um grande sistema de aquedutos (hipótese defendida pela assiriologa **Stephanie Dalley**, de Oxford).',
    'Nunca existiram como foram descritos, e são uma lenda construída com elementos reais, de um jardim ou terraço verdejante do palácio.'
  ] },
  'Não há consenso, e por isso este é um dos mistérios mais discutidos da arqueologia.',
  { img: 'bab-jardins-suspensos-heemskerck', leg: 'Os Jardins Suspensos: gravura de Philips Galle segundo Maarten van Heemskerck, século XVI; interpretação renascentista.' },
  { img: 'bab-jardins-suspensos', leg: 'Jardins Suspensos segundo a tradição clássica: reconstrução inteiramente especulativa, sem localização ou forma arqueologicamente comprovadas. Ilustração gerada por IA.' },
  { h: 'A redescoberta de Babilónia' },
  'O local de Babilónia nunca foi esquecido: viajantes europeus, como o italiano **Pietro della Valle** (1616), visitaram e trouxeram tijolos. As primeiras escavações sérias foram as de **Claudius Rich** (1811), de **Hormuzd Rassam** (que encontrou o Cilindro de Ciro em 1879) e, sobretudo, as da Sociedade Oriental Alemã, dirigidas por **Robert Koldewey** (1899 – 1917), que levaram a Porta de Ishtar para Berlim. A leitura do cuneiforme acádio, no século XIX, a partir da inscrição trilingue de **Behistun** (Rawlinson), abriu o acesso às centenas de milhares de tabuinhas. A estela de Hamurabi foi achada em **Susa**, em 1901, pela missão de Jacques de Morgan.',
  { img: 'bab-koldewey', leg: 'Robert Koldewey diante do depósito das escavações em Babilónia; fotografia histórica.' },
  { caixa: 'Para visitar', texto: 'O **Museu de Pérgamo** (Berlim) tem a Porta de Ishtar, mas está fechado para obras desde outubro de 2023, com reabertura anunciada para 2027 e a ala da Porta de Ishtar possivelmente ainda fechada depois disso, por isso convém confirmar antes de ir. O **Louvre** (Paris) guarda a estela de Hamurabi. O **Museu Britânico** (Londres) tem o Cilindro de Ciro, o Mapa-múndi e muitas tabuinhas. Há painéis de tijolo vidrado também em Istambul e no Metropolitan (Nova Iorque). No Iraque, o **Museu Nacional** (Bagdade) e as ruínas de **Babilónia**, Património Mundial desde 2019.' }
];

const quiz = [
  { p: 'Onde ficava a cidade de Babilónia?', op: ['No vale do Nilo', 'No planalto da Anatólia', 'Na costa do Mediterrâneo', 'Na margem do Eufrates, no atual Iraque'], certa: 3, exp: 'Ficava no Eufrates, a cerca de 85 km a sul de Bagdade.' },
  { p: 'Que significa o nome «Babilónia» em acádio?', op: ['Porta do deus', 'Cidade dos reis', 'Terra entre os rios', 'Casa do céu'], certa: 0, exp: 'Bāb-ilim quer dizer «porta do deus».' },
  { p: 'Qual era o deus protetor de Babilónia?', op: ['Enlil', 'Shamash', 'Marduk', 'Nanna'], certa: 2, exp: 'Marduk, que no Enuma Elish vence Tiamat e se torna o rei dos deuses.' },
  { p: 'Quem foi o rei da I Dinastia que mandou gravar o famoso código de leis?', op: ['Sargão', 'Nabucodonosor II', 'Hamurabi', 'Ciro'], certa: 2, exp: 'Hamurabi reinou c. 1792–1750 a.C.' },
  { p: 'Onde foi encontrada a estela do Código de Hamurabi em 1901–1902?', op: ['Em Babilónia', 'Em Nínive', 'Em Susa, no Irão', 'Em Ur'], certa: 2, exp: 'Fora levada para Susa pelos elamitas, c. 1155 a.C., e lá a encontrou a missão francesa.' },
  { p: 'Quem pôs fim à I Dinastia de Babilónia, em c. 1595 a.C.?', op: ['Os egípcios', 'Os persas', 'Os gregos', 'Os hititas, com Mursili I'], certa: 3, exp: 'Mursili I saqueou Babilónia e voltou à Anatólia.' },
  { p: 'Que povo reinou em Babilónia durante quase 400 anos a seguir à I Dinastia?', op: ['Os caldeus', 'Os amoritas', 'Os cassitas', 'Os medas'], certa: 2, exp: 'Os cassitas, de origem montanhesa, governaram c. 1595–1155 a.C.' },
  { p: 'Qual é o poema babilónico da criação, que se lia na festa do Ano Novo?', op: ['Epopeia de Gilgamesh', 'Hino a Inanna', 'Atrahasis', 'Enuma Elish'], certa: 3, exp: 'O Enuma Elish era lido no Akitu e justifica a primazia de Marduk.' },
  { p: 'Quem fundou o Império Neobabilónico em 626 a.C.?', op: ['Nabucodonosor II', 'Nabonido', 'Nabopolassar', 'Hamurabi'], certa: 2, exp: 'Nabopolassar proclamou-se rei e, com os medas, destruiu Nínive em 612 a.C.' },
  { p: 'Que cidade destruiu Nabucodonosor II em 587 ou 586 a.C., levando muitos habitantes para Babilónia?', op: ['Tiro', 'Nínive', 'Jerusalém', 'Mênfis'], certa: 2, exp: 'A destruição de Jerusalém e do Primeiro Templo deu início ao Exílio de Babilónia.' },
  { p: 'Que monumento, de tijolos vidrados azuis, foi reconstruído em Berlim?', op: ['A Porta de Ishtar', 'O Código de Hamurabi', 'O Etemenanki', 'O Leão de Babilónia'], certa: 0, exp: 'A Porta de Ishtar, c. 575 a.C., está no Museu de Pérgamo.' },
  { p: 'Qual é a situação dos Jardins Suspensos da Babilónia?', op: ['Foram escavados e confirmados', 'Estão ainda de pé', 'A sua existência em Babilónia é debatida', 'Foram construídos pelos romanos'], certa: 2, exp: 'Não há referência a eles nas fontes babilónicas, e há quem os situe em Nínive.' },
  { p: 'Quem governava Babilónia quando Nabonido estava em Teima?', op: ['Belsazar, seu filho', 'Ciro', 'Nabucodonosor', 'Hamurabi'], certa: 0, exp: 'Belsazar comandou o exército e governou, mas nunca foi rei oficial.' },
  { p: 'Que rei persa conquistou Babilónia em 539 a.C.?', op: ['Dario I', 'Xerxes', 'Ciro II', 'Cambises'], certa: 2, exp: 'Ciro entrou na cidade em outubro de 539 a.C. e o Cilindro de Ciro, que o menciona, está no Museu Britânico.' },
  { p: 'Que sistema numérico dos babilónios ainda usamos para as horas e os ângulos?', op: ['Base 10', 'Base 12', 'Base 20', 'Base 60'], certa: 3, exp: 'A base 60 está na hora de 60 minutos e no círculo de 360 graus.' }
];

export default {
  id: 'babilonia',
  cor: '#2f6aa8',
  emblema: '../assets/img/babilonia.png',
  nome:    { pt: 'Babilónia', en: 'Babylon' },
  periodo: { pt: 'c. 1894 a.C. – 539 a.C.', en: 'c. 1894 BC – 539 BC' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
