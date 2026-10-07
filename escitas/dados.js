// CITAS (ESCITAS) — conteúdo completo em português. A versão inglesa está em dados-en.js (mesma estrutura).
import EN from './dados-en.js';
import CRED from './creditos.js';
// Datas na «cronologia média». Quase tudo o que se sabe sobre a vida dos citas vem de duas fontes muito desiguais: os túmulos (kurgans), que são factos, e Heródoto (Livro IV das *Histórias*, c. 430 a.C.), que é uma fonte preciosa mas de segunda mão, e que mistura observação, boatos e lendas. Os citas não deixaram literatura própria. a.C./d.C.
// Imagens: cada {img:'id'} procura o ficheiro  escitas/img/id.jpg  (ver IMAGENS_ESCITAS.md para a lista e os prompts).

const visao = [
  { caixa: 'Em resumo', texto: [
    'Os **citas** (ou **escitas**; em grego *Skythai*, em persa *Saka*) foram um conjunto de povos **nómadas de língua iraniana** que dominaram a **estepe** entre o delta do Danúbio e o rio Don, no sul da atual Ucrânia e da Rússia, desde cerca do século VII até ao século III a.C., e cujos parentes e vizinhos, designados pelos persas como **sacas**, percorriam a estepe da Ásia Central até ao Altai. Foram dos primeiros povos a fazer da **cavalaria** e do **arco** a base do poder, e deixaram uma das mais notáveis artes em **ouro** do mundo antigo: animais enroscados, veados, panteras e grifos, trabalhados com um estilo inconfundível, o **estilo animal**.',
    'Nunca construíram cidades monumentais nem escreveram livros: o que sabemos deles vem dos **túmulos gigantes** (*kurgans*), das descrições gregas, sobretudo de **Heródoto**, e, mais tarde, das escavações. Derrotaram, segundo a tradição, o rei persa **Dario I** (c. 513 a.C.) sem uma única batalha decisiva, negociaram com as cidades gregas do mar Negro, tiveram reis célebres, como **Ateias**, e foram, por fim, empurrados pelos **sármatas** e destruídos ou absorvidos por godos, hunos e eslavos. Quase tudo o que se diz sobre eles tem de ser lido com cuidado: este texto assinala sempre o que é **facto** e o que é **lenda** ou relato tardio.'
  ] },
  { img: 'esc-mapa-citia', leg: 'Mapa da Cítia Menor (Dobruja), no litoral ocidental do mar Negro: uma das regiões a que os autores antigos chamaram «Cítia».' },
  { h: 'Onde ficava' },
  'O mundo cita é, antes de mais, uma **paisagem**: a grande **estepe euro-asiática**, uma faixa quase contínua de pradaria que vai do Danúbio à Mongólia, com poucas árvores, rios largos (Danúbio, Dniester, Bug, Dniepre, Don, Volga) e invernos duros. Era um território ideal para **cavalos**, rebanhos e carroças, e muito mau para cidades. A **Cítia** de Heródoto é o espaço entre o Danúbio e o Don, com o mar Negro e a península da **Crimeia** a sul; os arqueólogos chamam-lhe a «Cítia europeia».',
  'Mais a leste, na Ásia Central, o mesmo mundo de nómadas a cavalo estende-se pelo Cazaquistão e pelo Altai, e inclui o povo que os persas chamavam **Saka**, em todo o arco que vai do mar de Aral à Sibéria do sul. Estes grupos partilham tipo de túmulo, armas, arreios e arte, mas **não eram um único estado**: eram confederações de tribos e chefes, com línguas aparentadas e identidades próprias. Uma parte do debate académico gira à volta da pergunta «de onde vieram os primeiros?», e a resposta ainda é incerta (Sibéria do sul, Cazaquistão, estepe pôntica).',
  { img: 'esc-estepe', leg: 'Localização da estepe pôntica no mapa da Europa: pradaria quase sem árvores, entre o mar Negro e o Don.' },
  { h: 'Quando existiu' },
  'As datas dos citas dependem do que se chama «cita». Os arqueólogos distinguem a **cultura cita** (a que partilha a «tríade»: armas, arreios e arte animal) e os **citas históricos** (os de Heródoto, no mar Negro). Em termos gerais:',
  { tabela: { cab: ['Fase', 'Datas aproximadas', 'O que a marca'], linhas: [
    ['Origens e fase arcaica', 'c. 900 – 700 a.C.', 'Primeiros kurgans de chefes (Arzhan 1, Tuva, c. 800 a.C.); primeiros arreios, setas de bronze e animais em ouro'],
    ['Cítia no Próximo Oriente', 'c. 720 – 600 a.C. (tradição)', 'Citas aparecem nas fontes assírias; invasão da Média e do Levante, segundo Heródoto; domínio durante «28 anos» (tradição)'],
    ['Idade de ouro pôntica', 'c. 600 – 300 a.C.', 'Comércio com colónias gregas; kurgans reais (Kelermes, Solokha, Chertomlyk, Kul-Oba); campanha de Dario (c. 513); reino de Ateias (até 339)'],
    ['Cítia tardia na Crimeia', 'c. 300 a.C. – c. 260 d.C.', 'Pressão dos sármatas; reino de Skilouros (séc. II a.C.) com capital em Neápolis; destruído pelos godos'],
    ['Sacas e sármatas', 'c. 700 a.C. – c. 400 d.C.', 'Sacas no Altai e na Ásia Central (Pazyryk, Issyk); sármatas a substituir os citas na estepe; os indo-citas na Índia']
  ] } },
  { img: 'esc-pente-solokha', leg: 'Pente de ouro do kurgan de Solokha, c. 400 a.C., Hermitage, São Petersburgo: guerreiros citas em combate.' },
  { h: 'Quem eram os citas?' },
  'A língua dos citas era **iraniana** (um ramo do indo-europeu, parente do avéstico e do persa antigo), conhecida sobretudo por **nomes próprios** e por poucas palavras registadas por autores gregos. Heródoto (IV.6) diz que eles se chamavam a si próprios **Skolotoi**. Para os assírios eram os *Ishkuzai*; para os persas, os *Saka*; para os gregos, os *Skythai*.',
  'Eram um povo **misto**: as análises de **ADN antigo** mostram que os citas e os sacas não eram uma população biologicamente homogénea, mas várias, com ancestralidade da estepe da Idade do Bronze e contributos orientais mais fortes no leste. Heródoto dá três versões das suas origens, e nenhuma é documentável: uma lenda de um herói, **Targitau**, de quem desceram os citas, objetos de ouro caídos do céu (arado, jugo, machado e taça), e uma versão em que os citas foram empurrados para oeste pelos massagetas e atravessaram o rio Araxes (IV.5–12).',
  { h: 'Porque importam' },
  { lista: [
    '**O nomadismo equestre:** mostram como um povo sem cidades, mas com cavalos, rebanhos e arcos, pôde dominar um território imenso durante séculos.',
    '**Heródoto:** o seu Livro IV é o primeiro retrato etnográfico de um povo «bárbaro», com cenas célebres (o sangue, os escalpes, o cânhamo), e um bom exemplo dos limites de uma fonte grega.',
    '**O ouro e o estilo animal:** uma das grandes artes da Antiguidade, com ligação direta à joalharia posterior da Europa e da Ásia.',
    '**Os kurgans:** túmulos como o de Arzhan 2, com mais de 5 mil objetos de ouro, ou os da cultura de Pazyryk, onde o gelo conservou tecidos, madeira e até pele tatuada.',
    '**A guerra de Dario:** o episódio em que o maior império do seu tempo não conseguiu apanhar um inimigo que não se deixava apanhar.',
    '**As mulheres guerreiras:** a lenda das amazonas e a arqueologia dos túmulos de mulheres com armas.'
  ] },
  { img: 'esc-cavaleiro-estepe', leg: 'Cavaleiro cita a disparar com um arco composto, séc. V a.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { caixa: 'Os citas hoje', texto: 'Os citas desapareceram como povo, mas não da memória. O seu **ouro** é um símbolo nacional na **Ucrânia** e na **Rússia**, e foi até objeto de disputa judicial entre museus na sequência da anexação russa da Crimeia (2014). Os **osetas**, no Cáucaso, falam a única língua iraniana de origem estepária que sobreviveu, descendente da dos **alanos**, um ramo dos sármatas. No século XX, o poeta russo **Aleksandr Blok** escreveu um poema, *Os Citas* (1918), em que a Rússia se assume como um «cita» entre a Europa e a Ásia. E «cita» continua a servir, em várias línguas, para dizer «guerreiro da estepe».' }
];

const linha = [
  'Esta linha do tempo segue os citas e os seus parentes, os sacas e os sármatas, da Idade do Ferro à destruição do último reino cita na Crimeia. Sempre que uma data vem **apenas de Heródoto** ou de um autor tardio, vem assinalada como «tradição».',
  { linha: [
    { d: 'c. 900 – 800 a.C.', t: 'Os primeiros kurgans', x: 'Na região de **Tuva** (sul da Sibéria), o túmulo de **Arzhan 1**, um enorme kurgan circular de pedra e madeira com cerca de 110 m de diâmetro, escavado nos anos 1970 por Mikhail Gryaznov, é datado por radiocarbono de c. 800 a.C. Tem armas de bronze, arreios e peças com animais (cervo, javali, felino): a «tríade cita» já aparece. É o mais antigo túmulo deste tipo conhecido, mas a posição de Tuva como «berço» dos citas é debatida.' },
    { d: 'c. 720 – 650 a.C.', t: 'Cimérios e citas', x: 'Segundo Heródoto (IV.11–12), os citas, empurrados para oeste, tomaram a estepe aos **cimérios**, que fugiram para a Anatólia. Fontes assírias falam dos «*Ishkuzai*» (citas): o chefe **Ishpakaya** surge como adversário do rei **Asarhadon** (c. 679), e o rei **Bartatua** (o *Protótias* de Heródoto), aliado de Assíria, pediu em casamento uma filha do rei (c. 670). É a primeira vez que os citas aparecem em documentos escritos.' },
  ] },
  { img: 'esc-arzhan', leg: 'Vista da planície de Arzhan, em Tuva (sul da Sibéria), onde estão os kurgans de Arzhan, entre os mais antigos do mundo cita.' },
  { img: 'esc-olbia', leg: 'O mercado de Olbia, colónia grega no mar Negro, no século V a.C.: mercadores gregos a trocar ânforas com cavaleiros citas; cena imaginada (o templo é uma reconstituição conjetural). Ilustração gerada por IA.' },
  { linha: [
    { d: 'c. 650 – 600 a.C.', t: 'Arzhan 2 e a «Cítia asiática»', x: 'No vale de Tuva, o kurgan de **Arzhan 2** (escavado pela equipa russo-alemã de Konstantin Chugunov e Hermann Parzinger, em 2000–2004) guardava um casal real e dezasseis acompanhantes sacrificados, com cerca de **5700 objetos de ouro** (c. 20 kg), âmbar do Báltico e armas. A datação é c. 650–600 a.C. A riqueza mostra um poder já organizado.' },
    { d: 'c. 650 – 590 a.C. (tradição)', t: 'Os citas na Média e no Levante', x: 'Segundo Heródoto (I.103–106), os citas, liderados por **Madies**, filho de Protótias, dominaram a Ásia durante **28 anos**, invadiram a Média, chegaram à Palestina (até **Ascalon**) e foram contidos pelo faraó Psamético com presentes. Heródoto conta que **Ciaxares**, rei da Média, os embebedou num banquete e os matou (lenda ou exagero). Uma pequena presença cita no Próximo Oriente é provável; o domínio de 28 anos é, quase certamente, uma simplificação.' },
    { d: 'c. 650 – 500 a.C.', t: 'As colónias gregas e o comércio', x: 'Colonos gregos de **Mileto** fundam **Olbia** (c. 647, no estuário do Bug e do Dniepre) e **Panticapeu** (c. 600, em Kerch), e, mais tarde, **Quersoneso**, na Crimeia (422/421). Os gregos compram aos citas trigo, peles, escravos, peixe e mel, e vendem vinho, azeite, cerâmica e metais trabalhados. É aqui que nasce o **ouro greco-cita**.' },
  ] },
  { linha: [
    { d: 'séc. VI a.C.', t: 'Os kurgans de Kelermes', x: 'No Cáucaso do Norte, os kurgans de **Kelermes** (c. 600 – 550 a.C.), escavados a partir de 1903, revelaram um **espelho de ouro**, uma espada de bainha de ouro e uma **pantera** de ouro, num estilo que mistura temas assírios, gregos e das estepes: provam que a elite cita estava ligada a todo o Oriente.' },
    { d: 'c. 530 a.C. (tradição)', t: 'Tomíris e Ciro', x: 'Segundo Heródoto (I.205–214), o rei persa **Ciro, o Grande**, ao atacar os **massagetas**, povo aparentado dos sacas a leste do mar Cáspio, é derrotado e morto pela rainha **Tomíris**, que lhe teria metido a cabeça num odre de sangue. Heródoto reconhece que há outras versões (Xenofonte diz que Ciro morreu na cama), mas a de Tomíris é a mais célebre. A morte de Ciro em combate no Norte é plausível; o resto, lenda.' },
    { d: 'c. 513 a.C.', t: 'A campanha de Dario', x: 'O rei persa **Dario I** atravessa o Bósforo e o Danúbio (numa ponte de barcos, construída por Mandrocles de Samos) para castigar os citas. Segundo Heródoto (IV.83–142), os citas recuam, queimam as pastagens, tapam os poços e nunca aceitam batalha; o rei **Idantirso** manda a Dario um pássaro, um rato, uma rã e cinco setas, que o rei interpreta como sinal de rendição e o conselheiro Gobrias como ameaça. Dario regressa sem uma vitória clara. O **essencial é provável** (a campanha existiu, e o fracasso persa também), mas o pormenor da narrativa é de Heródoto.' },
  ] },
  { img: 'esc-tumulo-ciro', leg: 'Túmulo de Ciro, o Grande, em Pasárgada (Irão): o rei que, segundo Heródoto, morreu contra os massagetas, c. 530 a.C.' },
  { img: 'esc-campanha-dario', leg: 'A terra queimada: cavaleiros citas a recuar à frente do exército persa, c. 513 a.C.; cena conjetural. Ilustração gerada por IA.' },
  { img: 'esc-behistun', leg: 'Relevo e inscrição de Behistun (Irão), de Dario I, c. 520 a.C.: o último prisioneiro da fila, de chapéu pontiagudo, é o chefe saca Skunkha.' },
  { linha: [
    { d: 'séc. V a.C.', t: 'Heródoto visita a costa do Ponto', x: 'O historiador grego **Heródoto** visita provavelmente Olbia (c. 450 a.C.) e recolhe o que será o **Livro IV** das *Histórias*: tribos, rios, deuses, funerais e costumes citas. A sua informação vem de gregos de Olbia, de mercadores e de contactos locais, não de uma observação demorada; por isso mistura factos que a arqueologia confirmou com coisas fabulosas (homens-lobo, povos de pés de cabra).' },
    { d: 'c. 480 a.C.', t: 'O reino do Bósforo', x: 'No estreito de Kerch nasce o **reino do Bósforo**, estado de cidades gregas e de populações locais, com capital em Panticapeu, que durante séculos será o grande parceiro e vizinho dos citas, fornecendo trigo a Atenas. Os reis e chefes citas compram obras de ourives gregos.' },
    { d: 'séc. IV a.C.', t: 'O auge dos kurgans reais', x: 'Os grandes túmulos reais do baixo Dniepre: **Solokha** (c. 400, escavado em 1912–13), **Kul-Oba**, em Kerch (c. 350, aberto em 1830), **Chertomlyk** (c. 350 – 320, 1863) e **Tovsta Mohyla** (c. 350 – 300, escavado em 1971, com o **peitoral de ouro** hoje em Kiev). Estão cheios de ouro, de armas e de objetos feitos por gregos para clientes citas.' },
  ] },
  { img: 'esc-kul-oba-vaso', leg: 'Desenho do vaso de eletro de Kul-Oba (séc. IV a.C.): citas a tratar um dente, a esticar um arco e a ligar uma ferida; gravura moderna.' },
  { img: 'esc-pectoral-tovsta', leg: 'Peitoral de ouro de Tovsta Mohyla (Dnipropetrovsk), c. 350–300 a.C., Museu dos Tesouros Históricos da Ucrânia, Kiev.' },
  { linha: [
    { d: 'c. 340 – 339 a.C.', t: 'Ateias e Filipe II', x: 'O rei cita **Ateias**, já muito idoso (os autores falam de uns 90 anos), domina as terras entre o Dniepre e o Danúbio. Entra em conflito com **Filipe II da Macedónia**, que o derrota em 339 a.C., perto do Danúbio; Ateias morre em combate. Segundo o historiador romano Justino, Filipe levou 20 mil jovens cativos e outras tantas éguas de raça. É o fim da última grande monarquia cita da Europa.' },
    { d: 'c. 331 a.C.', t: 'O desastre de Zopírio', x: 'Zopírio, governador da Trácia por Alexandre Magno, ataca Olbia com um exército e é morto, com os seus homens, pelos citas, segundo Justino (a data, c. 331, varia). Em 329, Alexandre venceu os **sacas** (a que os gregos chamavam citas «do outro lado do Tanais») junto ao rio **Jaxartes** (Sir Daria).' },
    { d: 'séc. V – III a.C.', t: 'Pazyryk e os túmulos de gelo', x: 'No **Altai**, os kurgans de **Pazyryk** (escavados por Sergei Rudenko, 1929 e 1947–49) e do planalto de **Ukok** conservaram, com o gelo, tecidos, tapetes, madeira esculpida e **corpos tatuados**. Não são «citas» no sentido estrito, mas ilustram o mesmo mundo de nómadas a cavalo, e provam relações comerciais com a Pérsia e a China (sedas, bronzes).' },
  ] },
  { img: 'esc-pazyryk-tapete', leg: 'Reprodução de um tapete de Pazyryk (fabricante Megerian, Arménia): o original, c. séc. V–IV a.C., Hermitage, é o mais antigo tapete de nós que se conserva.' },
  { linha: [
    { d: 'séc. IV – III a.C.', t: 'O «Homem de Ouro» de Issyk', x: 'Perto de Almaty, no Cazaquistão, o kurgan de **Issyk** (escavado em 1969 por Kemal Akishev) guardava um jovem sepultado com um traje coberto de cerca de **quatro mil peças de ouro**, e um chapéu alto e pontiagudo, em linha com as representações persas dos sacas. É um dos símbolos nacionais do Cazaquistão (a identidade do morto, homem ou mulher, é debatida).' },
    { d: 'c. 300 – 200 a.C.', t: 'Chegam os sármatas', x: 'Os **sármatas**, nómadas de língua iraniana vindos de leste do Don, avançam para ocidente e ocupam a estepe pôntica. Os citas ficam reduzidos a um estado menor, na **Crimeia** e na Dobruja (Cítia Menor). Heródoto contava que os sármatas descendiam de amazonas e citas.' },
    { d: 'c. 200 – 110 a.C.', t: 'Skilouros e Neápolis', x: 'Na Crimeia (perto de Simferopol), a capital **Neápolis cita** é um centro fortificado, com casas de pedra e mausoléus, e os reis **Skilouros** e **Palakos** (séc. II a.C.) deixaram moedas e monumentos. Em c. 110 a.C., o general **Diofanto**, de Mitridates VI do Ponto, derrota os citas da Crimeia, que ficam sob domínio do Ponto.' },
  ] },
  { img: 'esc-issyk', leg: 'Réplica do toucado do «Homem de Ouro» de Issyk, Cazaquistão, séc. IV–III a.C.: o traje estava coberto de milhares de placas de ouro.' },
  { img: 'esc-neapolis', leg: 'Neápolis cita, perto de Simferopol, na Crimeia: capital dos últimos reis citas (séc. III a.C. – III d.C.).' },
  { img: 'esc-escilurus-relevo', leg: 'O rei cita Cílero e o feixe de varas (anedota de Plutarco): medalha gravada de época moderna.' },
  { linha: [
    { d: 'c. 175 d.C.', t: 'Sármatas no exército romano', x: 'Segundo Díon Cássio, o imperador **Marco Aurélio**, no fim das guerras marcomânicas, impôs aos sármatas **iáziges** que fornecessem 8 mil cavaleiros, dos quais 5500 foram enviados para a Britânia. É dos primeiros usos de cavalaria pesada da estepe no exército romano. Segundo uma hipótese controversa, estaria aqui uma das origens das lendas arturianas.' },
    { d: 'c. 250 – 260 d.C.', t: 'Os godos destroem Neápolis', x: 'Os **godos**, vindos do norte do mar Negro, tomam a Crimeia e incendeiam Neápolis cita, que não será reconstruída. Os últimos citas misturam-se com os recém-chegados e com os gregos do Bósforo. Nos anos 370, os **hunos** esmagam por fim os alanos e a estepe passa a outro povo.' },
    { d: 'séc. I a.C. – IV d.C.', t: 'Sacas na Índia', x: 'Povos de origem saca (os **indo-citas**) entram na Bactriana e no noroeste da Índia a partir de c. 150 a.C. O rei **Maues** (c. 85 a.C.) funda o primeiro estado indo-cita; os sátrapas ocidentais governam o Gujarate até cerca de 400 d.C. A «era saca» (78 d.C.), ainda usada no calendário nacional indiano, tem origem debatida.' }
  ] },
  { h: 'Redescoberta' },
  'O interesse moderno pelos citas começa com **Pedro, o Grande**, que recebeu, em 1715, ouro de túmulos siberianos (a «coleção siberiana»), o núcleo do atual acervo do **Hermitage**. No século XIX, as escavações de kurgans na Crimeia e no Dniepre (**Kul-Oba**, 1830; **Chertomlyk**, 1863) mostraram a riqueza real. No século XX, **Sergei Rudenko** (Pazyryk, anos 1940), **Boris Mozolevsky** (Tovsta Mohyla, 1971) e **Natalia Polosmak** (Ukok, 1993) abriram os túmulos de gelo e de ouro. No século XXI, as escavações germano-russas de **Arzhan 2** (2000–2004) e a genética estão a reescrever as origens do povo.'
];

const mapa = [
  'O «mapa» cita é, sobretudo, um mapa de **rios, de kurgans e de portos gregos**. Os citas não tinham grandes cidades, à exceção da fase final (Neápolis); eram os **gregos** que fundavam as cidades nas margens do mar Negro, e é através delas que o mundo cita aparece nas fontes. As principais são estas:',
  { tabela: { cab: ['Lugar', 'Onde (atual)', 'Quando', 'Importância'], linhas: [
    ['Arzhan', 'Tuva, sul da Sibéria (Rússia)', 'c. 800 e c. 650–600 a.C.', 'Dois kurgans reais: o mais antigo e o mais rico da cultura cita primitiva'],
    ['Kelermes', 'Cáucaso do Norte (Rússia)', 'c. 600 – 550 a.C.', 'Túmulos com ouro de grande riqueza; ligações ao Oriente'],
    ['Olbia', 'Mykolaiv, Ucrânia', 'c. 647 a.C. – séc. IV d.C.', 'Colónia grega de Mileto no estuário do Bug; porto onde Heródoto terá recolhido informação'],
    ['Panticapeu', 'Kerch, Crimeia', 'c. 600 a.C. – séc. IV d.C.', 'Capital do reino do Bósforo; exportava trigo; ourives gregos'],
    ['Quersoneso', 'Sebastopol, Crimeia', 'c. 422 a.C. – séc. XIV', 'Colónia grega no sudoeste da Crimeia, perto dos tauros'],
    ['Tanais', 'Foz do Don (Rússia)', 'séc. III a.C. – séc. V d.C.', 'Entreposto de gregos, citas e sármatas, na embocadura do Don'],
    ['Solokha, Chertomlyk e Tovsta Mohyla', 'Baixo Dniepre (Ucrânia)', 'séc. IV a.C.', 'Os grandes kurgans reais, com o ouro mais célebre'],
    ['Pazyryk e Ukok', 'Altai (Rússia, Cazaquistão)', 'séc. V – III a.C.', 'Túmulos de gelo, com tecidos, madeira, tapetes e corpos tatuados'],
    ['Issyk', 'Perto de Almaty, Cazaquistão', 'séc. IV – III a.C.', 'O «Homem de Ouro» dos sacas'],
    ['Neápolis cita', 'Simferopol, Crimeia', 'séc. III a.C. – c. 260 d.C.', 'Capital do último reino cita; mausoléus; muralhas']
  ] } },
  { h: 'A estepe e o Danúbio' },
  'O espaço cita tem uma geografia simples e dura: a **estepe** começa no Danúbio e vai, pelo norte do mar Negro, até ao Don e à Volga. Os rios correm de norte para sul e ajudaram a definir tribos (Heródoto fala dos rios Istro, Tiras, Hípanis, Borístenes, Panticapes, Hípaco, Gerro e Tanais, ou seja, Danúbio, Dniester, Bug, Dniepre e vários afluentes), enquanto as florestas ao norte e as montanhas do Cáucaso a sul limitavam a expansão. Ao longo dos rios espalharam-se os **kurgans**: montes de terra, por vezes com 20 m de altura, que ainda hoje pontuam a paisagem ucraniana.',
  { img: 'esc-estela-kurgan', leg: 'Estela de pedra de guerreiro numa estepe, de tipo «kamennaya baba»: as figuras de pedra acompanhavam os kurgans (séc. VI a.C. em diante, e mais tarde).' },
  { h: 'Olbia: o porto do trigo' },
  '**Olbia** (em grego, «a Afortunada») foi fundada por Mileto por volta de 647 a.C., numa península do estuário do Bug e do Dniepre. Tornou-se o principal ponto de contacto entre gregos e citas: os gregos traziam **vinho**, azeite, cerâmica e tecidos e levavam **trigo**, peles, peixe e escravos. Olbia pagava presentes e tributos aos reis citas, e Heródoto terá passado por ali. As ruínas estão perto de Parutyne, em Mykolaiv.',
  { h: 'O Bósforo e a Crimeia' },
  'No estreito de **Kerch**, **Panticapeu** foi a capital do **reino do Bósforo**, estado greco-cita que exportava **trigo** para Atenas. Nos kurgans à volta da cidade, os ricos enterravam-se com ouro feito por ourives gregos, como o vaso de **Kul-Oba**. Mais a sul, **Quersoneso** (hoje Sebastopol) foi uma colónia dórica, fundada c. 422 a.C. Do lado de dentro, as montanhas da Crimeia eram dos tauros e, depois, das últimas tribos citas.',
  { img: 'esc-panticapeu', leg: 'Panticapeu, hoje Kerch, na Crimeia: capital do reino do Bósforo, vista do monte Mitridates.' },
  { img: 'esc-quersoneso', leg: 'Ruínas de Quersoneso, colónia grega no sudoeste da Crimeia (Património Mundial da UNESCO).' },
  { h: 'Neápolis cita' },
  'A **Neápolis cita** («cidade nova»), perto de Simferopol, foi a capital do último reino cita, entre o século III a.C. e c. 260 d.C. É uma verdadeira **cidade fortificada**, com muralhas de pedra, casas, ofícios e dois mausoléus de nobres (um deles, c. 115 a.C., guardava o corpo de um rei, possivelmente **Skilouros**, com uma touca de ouro). Mostra uma sociedade já sedentária e muito helenizada, bem diferente dos nómadas de Heródoto.',
  { img: 'esc-neapolis-reconstrucao', leg: 'Neápolis cita no séc. II a.C., com muralhas, casas de pedra e mausoléu; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: 'O Altai e os sacas' },
  'No **Altai** e em **Tuva**, o gelo permanente dos kurgans conservou tecidos, madeira e corpos, algo que não se encontra na Ucrânia. É a região onde se encontram os mais antigos túmulos da cultura cita (**Arzhan**) e os que melhor se conservaram (**Pazyryk**, **Ukok**). A leste do mar de Aral, o **Issyk** e outros kurgans do Cazaquistão mostram a mesma tradição entre os sacas.',
  { img: 'esc-ukok', leg: 'Planalto de Ukok, no Altai: zona onde os kurgans de gelo conservaram corpos e tecidos (por exemplo, a «Princesa de Ukok»).' },
  { h: 'Rotas' },
  'Os citas serviam de **intermediários** entre os gregos do Ponto e os povos do norte, e entre a Europa e a Ásia. Havia uma rota do **Danúbio** ao **Don**, outra pela **estepe** até à Ásia Central, que antecipa a futura Rota da Seda, e uma rota fluvial para as florestas do norte. Heródoto (IV.21–24) descreve povos mais a norte, como os **Budinos** e os **Argipeus**, e, daí, uma «estrada» comercial até aos montes Urais. Pela estepe circulavam ouro, âmbar, peles, escravos, cavalos, bronze, vinho e, mais tarde, seda.'
];

const sociedade = [
  { h: '1. Organização política' },
  'Os citas eram uma **confederação de tribos** e não um estado burocrático. Heródoto (IV.20) distingue os **citas régios** (o grupo dominante, que se considerava senhor dos outros), os citas **nómadas** e os citas **lavradores**, que cultivavam os campos a norte do Mar Negro e vendiam cereais aos gregos. Os reis, tidos por descendentes do ouro caído do céu, tinham poder religioso e militar; em momentos de crise, como a invasão de Dario, Heródoto (IV.119–120) fala de uma assembleia de três reis (Idantirso, Escopásis e Taxacis) que organizam a defesa em conjunto.',
  'O poder baseava-se no **gado**, no **ouro**, nos laços de clã e, acima de tudo, na capacidade de levar guerreiros a cavalo. Segundo Heródoto (IV.68), o juramento mais solene era feito pela **lareira do rei**, e os adivinhos que se descobrisse terem jurado em falso eram mortos. Era um sistema móvel e flexível, e foi essa a sua força.',
  { img: 'esc-acampamento', leg: 'Acampamento cita de verão, com carroças cobertas de feltro e rebanhos; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '2. Classes sociais' },
  { lista: [
    '**Realeza e aristocracia guerreira:** reis e chefes de clã, enterrados em kurgans com ouro, armas e cavalos.',
    '**Guerreiros livres:** a maioria dos homens era cavaleiro-arqueiro, e tinha direito de participar nas assembleias.',
    '**Sacerdotes e adivinhos:** liam o futuro em feixes de varas de salgueiro (Heródoto, IV.67); Heródoto e Hipócrates descrevem ainda os *enarees*, homens que viviam como mulheres, uma descrição muito discutida.',
    '**Pastores, lavradores e artesãos:** os que cuidavam dos rebanhos, cultivavam os campos e trabalhavam o metal e o couro.',
    '**Escravos:** prisioneiros de guerra e comprados, vendidos também aos gregos; Heródoto (IV.2) diz que cegavam os escravos para mungir as éguas, o que é provavelmente um exagero.'
  ] },
  { h: 'A mulher cita e as amazonas' },
  'As mulheres citas tiveram um papel visível: **sacerdotisas**, rainhas, e em alguns túmulos, **guerreiras**. A lenda grega das **amazonas**, mulheres guerreiras filhas de Ares, liga-se aos citas: Heródoto (IV.110–117) conta que as amazonas, vencidas pelos gregos, foram capturadas, fugiram e casaram com jovens citas, dando origem aos **sármatas**, cujas mulheres «caçam a cavalo, vão à guerra e vestem a roupa dos homens», e não casam antes de matar um inimigo. Esta história é **lenda**. A arqueologia mostra, porém, que numa parte das sepulturas de mulheres da estepe, dos sármatas e dos primeiros nómadas (cerca de **20%**, segundo uma estimativa de Jeannine Davis-Kimball, discutida), há armas (setas, adagas, por vezes lanças). Isso não prova que combatessem em exércitos, mas sugere que algumas mulheres sabiam usar armas, e que o modelo das amazonas tem alguma base real.',
  { img: 'esc-guerreira', leg: 'Guerreira cita com arco e adaga, séc. IV a.C.; reconstituição baseada em sepulturas de mulheres com armas. Ilustração gerada por IA.' },
  { img: 'esc-amazonomaquia', leg: 'Amazonomaquia: combate entre gregos e amazonas, relevo de sarcófago grego. As amazonas eram representadas com trajes de tipo cita.' },
  { h: '3. Religião' },
  'Segundo Heródoto (IV.59), os citas veneravam sobretudo **Tabiti**, deusa do fogo e da lareira, a mais importante (que ele diz ser equivalente a Héstia), e depois **Papaios** (como Zeus), **Api** (a Terra), **Goitosiro** (Apolo), **Argimpasa** (Afrodite Urânia) e **Tagimasadas** (Posídon). Um deus da guerra era adorado sob a forma de uma **espada de ferro** (*akinakes*) fincada num monte de lenha, onde se sacrificavam cavalos, gado e, de cem em cem prisioneiros de guerra, um homem. As equivalências com os deuses gregos são de Heródoto e podem enganar.',
  { tabela: { cab: ['Divindade (segundo Heródoto)', 'Equivalente grego', 'Papel'], linhas: [
    ['Tabiti', 'Héstia', 'Deusa do fogo e da lareira; a mais venerada; ligada à realeza'],
    ['Papaios', 'Zeus', 'Pai dos deuses, esposo de Api'],
    ['Api', 'Gaia', 'A Terra'],
    ['Goitosiro', 'Apolo', 'Deus solar'],
    ['Argimpasa', 'Afrodite Urânia', 'Deusa celeste do amor'],
    ['Tagimasadas', 'Posídon', 'Deus das águas (dos rios?)'],
    ['Deus-espada', 'Ares', 'Deus da guerra, venerado sob a forma de uma espada de ferro']
  ] } },
  { h: 'O juramento de sangue, os escalpes e as taças de crânio' },
  'Heródoto descreve rituais que impressionaram (e escandalizaram) os gregos. No **juramento de sangue** (IV.70), as partes cortavam-se, deitavam sangue numa taça de vinho, molhavam nela uma espada, setas, um machado e um dardo, e bebiam-na. No campo de batalha, o guerreiro **escalpelava** o inimigo morto e usava o escalpe como troféu (IV.64), e, com o crânio dos mais odiados, fazia **taças** forradas a ouro (IV.65). Estes costumes são plausíveis (há crânios cortados em kurgans, e taças de crânio noutros povos da estepe), mas a descrição geral vem de um grego a falar de «bárbaros», com a sua dose de exagero.',
  { img: 'esc-juramento-sangue', leg: 'Juramento de sangue entre dois chefes citas, segundo Heródoto (IV.70); cena conjetural. Ilustração gerada por IA.' },
  { h: 'O cânhamo e a «sauna» cita' },
  'Heródoto (IV.73–75) descreve um ritual de purificação depois dos funerais: os citas montavam uma pequena **tenda de feltro** sobre três varas, punham lá dentro um recipiente com pedras ao rubro e deitavam-lhe **sementes de cânhamo**, que fumegavam: «os citas, ao respirar este vapor, gritam de prazer». A arqueologia confirmou o relato: nos kurgans de **Pazyryk** (Altai) encontraram-se **tripés de madeira** com cobertura de feltro, braseiros de bronze, pedras queimadas e sacos de couro com sementes de cânhamo. Os estudiosos discordam sobre se era só purificação ou também um rito de transe, e sobre a quantidade de substância psicoativa que o vapor continha; o uso ritual do cânhamo em si está bem demonstrado.',
  { img: 'esc-cannabis', leg: 'Planta de cânhamo (*Cannabis sativa*), de que os citas queimavam as sementes em rituais, segundo Heródoto e os achados de Pazyryk.' },
  { img: 'esc-sauna-cannabis', leg: 'Rito de vapor de cânhamo numa tenda de feltro, segundo Heródoto (IV.73–75); reconstituição conjetural. Ilustração gerada por IA.' },
  { h: 'A morte e o rei' },
  'O funeral de um rei era uma cerimónia enorme. Segundo Heródoto (IV.71–72), o corpo era **embalsamado** com cera e ervas aromáticas e levado em carro por todas as tribos, e cada uma sacrificava cavalos e cortava uma orelha ou parte do cabelo em luto. Por fim, sepultava-se o rei numa câmara de madeira, com uma concubina, o copeiro, o cozinheiro, o escudeiro, o mensageiro e **cavalos** estrangulados, e erguia-se um grande monte. Um ano depois, estrangulavam-se **cinquenta jovens** e cinquenta cavalos, que se empalhavam e punham de pé à volta do túmulo (também isto é conhecido apenas por Heródoto, mas os kurgans reais, com **Arzhan 2**, **Solokha** e **Chertomlyk**, confirmam os sacrifícios de acompanhantes e de cavalos).',
  { img: 'esc-funeral-real', leg: 'Funeral de um rei cita, com o corpo embalsamado e cavalos sacrificados, segundo Heródoto (IV.71–72); reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '4. Economia' },
  'A economia era mista: **pastoreio** (cavalos, ovelhas, gado, cabras), **agricultura** (os citas lavradores do Bug e do Dniepre cultivavam trigo e cevada), **caça** e **comércio** com os gregos. Os **cavalos** eram o bem mais precioso; as éguas davam leite e carne, e os machos serviam de montada e de sacrifício. O **trigo** do Dniepre, exportado pelo Bósforo, alimentou Atenas, e os citas receberam em troca **vinho**, cerâmica, tecidos e **ouro** trabalhado. A moeda foi rara: só os reis tardios, como Skilouros, deixaram emissões com o seu nome.',
  { h: '5. Escrita e língua' },
  'Os citas **não deixaram literatura**. A sua língua, **iraniana oriental**, só se conhece por nomes de pessoas, de tribos e de rios (por exemplo, Heródoto traduz *oior* «homem» e *pata* «matar», no nome das amazonas, *oiorpata*, «as matadoras de homens») e por algumas inscrições curtas em letras gregas. Usavam **tamgas** (marcas de clã, em forma de tridente ou de arco) para assinalar propriedade em objetos e em cavalos. A memória oral, em poemas e genealogias, perdeu-se, e a tradição sobre os citas foi quase toda escrita por gregos e persas. Por isso, um aviso útil: todos os «dados citas» sobre costumes e crenças são, em última análise, **a visão de um estrangeiro**.',
  { h: '6. Casa e quotidiano' },
  'A **carroça** foi a casa móvel por excelência: uma plataforma de madeira com rodas, coberta por uma tenda de **feltro** (Heródoto IV.46 diz que as mulheres e os filhos viviam nelas). Os homens a cavalo guiavam os rebanhos. Os citas lavradores e os da fase tardia viviam em aldeias e casas de pedra e tijolo. Nos acampamentos havia fogueiras, caldeirões de bronze e tendas, e um mundo de couro, feltro e lã.',
  { h: '7. Alimentação' },
  { lista: [
    '**Leite de égua** (e o seu derivado fermentado, o *kumis*): a bebida típica, para a qual os gregos acharam um nome, *hippace* (queijo de égua).',
    '**Carne:** de cavalo, ovelha e boi, cozinhada em caldeirões de bronze ou, segundo Heródoto (IV.61), dentro do **próprio estômago** do animal, aquecido com os ossos como combustível.',
    '**Cereais e papas:** cultivados pelos citas lavradores.',
    '**Vinho:** comprado aos gregos e bebido sem água, o que os gregos achavam bárbaro (beber «à moda cita» queria dizer beber em excesso).',
    '**Peixe e caça:** nos rios e nas margens.'
  ] },
  { h: '8. Vestuário' },
  'Os citas vestiam **calças** (uma novidade para gregos e romanos), túnicas de lã ou couro, casacos com decoração, botas macias e um **chapéu cónico** de feltro (o *kyrbasia* ou *bashlyk*). Os sacas de chapéu pontiagudo (*tigraxauda*) são representados nos relevos persas. As roupas das elites eram **cobertas de placas de ouro** cosidas ao tecido, como se vê em Issyk, Kul-Oba e Tovsta Mohyla. Em Pazyryk, o gelo conservou calças, botas de feltro, mantos de pele e meias com decoração.',
  { img: 'esc-persepolis-saka', leg: 'Relevo da escada do Apadana, em Persépolis (c. 500 a.C.): delegações do império; algumas têm sido identificadas como de sacas, de chapéu pontiagudo.' },
  { h: '9. Arte: o ouro e o estilo animal' },
  'O **estilo animal** cita é a assinatura da cultura: figuras de **veados**, **cavalos**, **panteras**, **grifos**, **aves de rapina** e animais enroscados, com os corpos torcidos e os membros dobrados, em ouro, bronze, madeira, couro e feltro. Servia para decorar arreios, armas, vasos, roupas e túmulos. Entre os melhores exemplos estão o **cervo de ouro** de Kostromskaya (c. 600 a.C., Hermitage), o **pente de Solokha**, o **peitoral de Tovsta Mohyla** e o **vaso de eletro de Kul-Oba**, trabalho de **ourives gregos** para clientes citas, com cenas realistas de citas, em que se vê o rosto, o cabelo, o vestuário e o arco.',
  { img: 'esc-cervo-ouro', leg: 'Cervo de ouro de estilo cita, séc. VII–VI a.C., achado em Tápiószentmárton (Hungria).' },
  { img: 'esc-ourives', leg: 'Ourives gregos de Panticapeu a trabalhar uma peça de ouro para um cliente cita, séc. IV a.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '10. Tatuagens, feltro e tapetes: Pazyryk' },
  'Em **Pazyryk** e **Ukok**, a combinação do clima e do gelo conservou tudo o que normalmente se perde: **tapetes**, feltros bordados, tecidos de seda chinesa, carros de madeira, selas, máscaras de cavalo e **corpos tatuados**. O tapete de Pazyryk (c. séc. V–IV a.C.) é o **mais antigo tapete de nós** que se conserva; a sua origem (persa, arménia ou da Ásia Central) é debatida. As **tatuagens** de homens e de mulheres (animais fantásticos, cervos, grifos e felinos, feitos com fuligem, aplicados com agulhas de osso) provam que a **arte animal** não era só dos objetos, mas também da pele: eram sinais de estatuto e, talvez, de proteção. A **«Princesa de Ukok»**, descoberta por **Natalia Polosmak** em 1993, tinha uns 25 anos, tatuagens nos ombros e nos braços, e foi sepultada com seis cavalos; o seu corpo foi, desde então, também um assunto político, e o povo altai reivindica o seu regresso à terra.',
  { img: 'esc-tatuagem-pazyryk', leg: 'Tatuador de Pazyryk a decorar o braço de um guerreiro com animais fantásticos; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: '11. Guerra' },
  'Os citas foram **cavaleiros e arqueiros**. O seu **arco composto** (de madeira, osso e tendão, curto e potente) era disparado a cavalo, e as setas, de **bronze trilobado**, saíam de uma aljava especial, o **gorytos**, que guardava também o arco. Usavam o **machado** (*sagaris*), a **espada curta** (*akinakes*), couraças de escamas e capacetes de bronze. Não tinham estribos (só chegarão mais tarde), mas conseguiam montar e manobrar com selas de feltro. Os gregos acreditavam que as setas eram **envenenadas**, e há alguma base nisto, embora os pormenores sejam discutidos.',
  'A sua **tática** era a do recuo e do desgaste: atacar de longe, retirar-se, queimar a terra, tapar os poços e deixar o inimigo morrer de fome e de sede, tal como Heródoto descreve (IV.120–127) com Dario. Os citas foram, por isso, **invencíveis na sua estepe**, e vulneráveis quando se tentava combatê-los de frente, como mostra o destino de Ateias.',
  { img: 'esc-arco-composto', leg: 'Arco composto reconstruído (Museu do Kremlin de Novgorod): arma de madeira, osso e tendão, de tipo estepário.' },
  { h: '12. Ciência e técnica' },
  'Os citas não deixaram ciência escrita, mas dominaram uma série de **técnicas**: a **doma e a criação de cavalos**, o **feltro**, a **metalurgia** (bronze fundido em moldes, ferro, ouro com filigrana e granulado), a **construção de carroças** e a **engenharia de túmulos**, com câmaras de madeira, falsos túmulos e saídas escondidas contra os ladrões (Arzhan 2). O grego **Anacársis** é, segundo a tradição, um sábio cita, e **Hipócrates** escreveu em *Ares, águas e lugares* um dos primeiros retratos médicos do corpo cita, atribuindo-lhe um carácter «mole» e húmido, explicado pelo clima e pelo hábito de andar a cavalo. É um texto de grande valor histórico, mas de ciência médica fraca.'
];

const personalidades = [
  'Quase nenhum cita nos deixou o seu nome por escrito: os nomes que se conhecem vêm de gregos e persas, e muitas das figuras abaixo vivem na fronteira entre a história e a lenda. As figuras reais e lendárias estão assinaladas.',
  { h: 'Heródoto de Halicarnasso (c. 484 – c. 425 a.C.)' },
  'O «pai da história» e a principal fonte sobre os citas. O seu **Livro IV** descreve o território, os rios, as tribos, os deuses, os funerais e a campanha de Dario. É preciso lê-lo com cuidado: usava informantes gregos, e tinha tendência para o espanto e para o pitoresco. Muito do que escreve foi confirmado pela arqueologia (o cânhamo, os sacrifícios nos funerais, as armas), e outras partes não passam de boatos.',
  { img: 'esc-herodoto', leg: 'Busto de Heródoto (Galeria Cameron, Tsarskoe Selo, Rússia).' },
  { h: 'Targitau (lenda)' },
  'Primeiro rei dos citas, segundo a lenda que Heródoto (IV.5) recolheu entre os citas do Ponto: filho de Zeus e da filha do rio Borístenes. Dele nasceram três filhos, **Lipoxais**, **Arpoxais** e **Colaxais**, e, quando caíram do céu um arado, um jugo, um machado e uma taça de ouro, só o mais novo conseguiu tocar-lhes sem que ardessem, tornando-se o rei. É uma lenda de fundação, sem valor histórico, mas que mostra que os citas ligavam a realeza ao ouro.',
  { h: 'Idantirso (c. 513 a.C.)' },
  'O rei cita que, segundo Heródoto, respondeu a Dario com um pássaro, um rato, uma rã e cinco setas, e à exigência de que lutasse ou se submetesse, declarou que só combateria pelos túmulos dos seus pais. O seu nome aparece sob forma iraniana (*Indathyrsos*). É provável que tenha existido como chefe, mas as palavras a ele atribuídas pertencem à narrativa de Heródoto.',
  { h: 'Dario I (c. 550 – 486 a.C.)' },
  'Rei dos persas e organizador do império aquemenida. A sua campanha na Cítia (c. 513 a.C.), a primeira expedição persa à Europa do Leste, é narrada por Heródoto como um fracasso, e a inscrição de **Behistun** mostra, por seu lado, **Skunkha**, o chefe saca capturado, como parte da celebração dos seus triunfos. É um bom exemplo de como as fontes podem divergir.',
  { h: 'Tomíris (lenda e história, séc. VI a.C.)' },
  'Rainha dos **massagetas**, povo a leste do mar Cáspio. Segundo Heródoto (I.205–214), recusou casar com Ciro e, depois de este lhe ter enganado o filho **Spargapises**, que se matou com vergonha, derrotou o rei persa e **mergulhou-lhe a cabeça num odre de sangue**, dizendo-lhe: «Eu avisei-te de que te saciaria de sangue». A morte de Ciro, c. 530 a.C., num combate no norte é provável; o episódio do odre é muito provavelmente uma lenda.',
  { img: 'esc-tomiris-cena', leg: 'Tomíris diante do corpo de Ciro, segundo Heródoto (I.214): cena lendária. Ilustração gerada por IA.' },
  { h: 'Anacársis (séc. VI a.C., tradição)' },
  'Príncipe cita, filho de uma grega, que terá visitado Atenas na época de **Sólon** e que alguns autores gregos colocam entre os **Sete Sábios**. Segundo Heródoto (IV.76), foi morto pelo irmão, o rei **Saulios**, quando regressou à Cítia e foi apanhado a fazer um rito grego a **Cíbele**. A historicidade da sua vida é discutida, mas o seu nome ficou como símbolo do «bárbaro sábio» da tradição grega.',
  { h: 'Escilas (séc. V a.C.)' },
  'Rei cita de mãe grega, que levava duas vidas: em Olbia, vestia-se à grega e seguia ritos gregos, e, na estepe, vivia como cita. Quando os seus súbditos descobriram, revoltaram-se, e foi decapitado (Heródoto, IV.78–80, c. 450). Mostra a tensão entre os dois mundos. Um anel de ouro com o nome *Skyles* em letras gregas, encontrado na Roménia, é por vezes associado a ele (a identificação é discutida).',
  { h: 'Ateias (m. 339 a.C.)' },
  'O mais célebre rei cita histórico: dominou a estepe entre o Dniepre e o Danúbio. Segundo Plutarco, disse que o relinchar do seu cavalo lhe agradava mais do que a flauta do músico Ismenias. Quando os dois reis se defrontaram, em 339 a.C., Ateias, de cerca de **90 anos**, morreu em combate. É a data mais segura da história cita.',
  { h: 'Madies (séc. VII a.C., tradição)' },
  'Rei cita, filho de Protótias (Bartatua) e figura central da tradição que os faz dominar a Ásia durante 28 anos. Segundo Heródoto, **Ciaxares** terá acabado com o poder cita ao embebedar e matar os chefes. A história é muito literária. O que se pode afirmar é que houve citas ativos na Média e na Anatólia no século VII a.C.',
  { h: 'Skilouros (séc. II a.C.)' },
  'Rei cita da Crimeia, de que Plutarco conta uma anedota: no leito de morte, deu uma flecha a cada um dos seus 80 filhos, e mostrou-lhes que um feixe de setas não se partia. É uma versão cita da fábula da união, sem prova histórica. O que é certo é que há moedas com o nome de Skilouros e um célebre relevo de Neápolis cita ligado ao seu reino.',
  { h: 'Sergei Rudenko (1885 – 1969)' },
  'Arqueólogo russo que escavou os kurgans de Pazyryk entre 1929 e 1949 e descobriu, no gelo, o tapete, os tecidos e os corpos tatuados. A sua monografia sobre a cultura dos nómadas do Altai (1953) é uma obra de referência.',
  { h: 'Natalia Polosmak (n. 1956)' },
  'Arqueóloga russa. Em 1993, na planície de Ukok, descobriu a **«Princesa de Ukok»**, uma mulher de c. 25 anos, tatuada, com um toucado de feltro de cerca de 90 cm. A sua equipa mostrou que os tecidos, as sedas e os objetos de madeira tinham ligações à China e à Pérsia.',
  { h: 'Hermann Parzinger (n. 1959)' },
  'Arqueólogo alemão que dirigiu, com Konstantin Chugunov, a escavação de **Arzhan 2** (2000–2004), um dos poucos grandes túmulos citas encontrados intactos, com 5700 objetos de ouro. É autor de trabalhos de síntese sobre o mundo dos citas e das estepes.',
  { h: 'Maues (c. 85 a.C.)' },
  'Rei saca que fundou o primeiro estado **indo-cita** no noroeste da Índia, na região de Taxila. As suas moedas, bilingues, com divindades gregas e indianas, são a principal fonte para este reino. Mostra que os sacas não ficaram só na estepe.',
  { img: 'esc-moeda-maues', leg: 'Moeda do rei indo-cita Maues (c. 85 a.C.), com legenda em grego e em kharosthi.' },
  { img: 'esc-kurgan', leg: 'Kurgans no sul da Ucrânia: montes funerários de terra, como os dos citas.' },
];

const legado = [
  { h: 'O que nos deixaram' },
  { lista: [
    '**O estilo animal:** a arte de figuras enroscadas e de animais torcidos influenciou as artes dos povos do Cáucaso, da Ásia Central, dos celtas (a arte de La Tène tem parecenças) e, mais tarde, dos povos germânicos e vikings; a ligação direta é, por vezes, discutida.',
    '**A cavalaria:** a ideia de usar cavalos como arma de guerra, e as armas e os arreios que a acompanham, foram passando para os sármatas, os partas, os hunos e os mongóis.',
    '**As calças e o casaco:** hoje, parte do guarda-roupa mundial; os gregos olhavam-nas como roupa de bárbaros.',
    '**O cânhamo:** os citas foram dos primeiros a usá-lo com finalidade ritual, e a ciência continua a estudar o uso.',
    '**A imagem do «bárbaro»:** a Cítia ficou na cultura ocidental como o arquétipo do povo guerreiro, livre e imprevisível, através de Heródoto e dos poetas.',
    '**A memória das amazonas:** a lenda, reforçada pelas descobertas de túmulos de mulheres armadas, alimenta ainda hoje a imaginação sobre mulheres guerreiras.'
  ] },
  { h: 'Arte' },
  'A arte cita divide-se em dois mundos que se tocam: a **arte animal da estepe**, mais abstrata e estilizada (placas de cavalos e cervos, enfeites de feltro e de madeira) e a **arte greco-cita**, mais naturalista, de ourives gregos (Kul-Oba, Solokha, Tovsta Mohyla, Chertomlyk) para a elite cita. O **peitoral de Tovsta Mohyla** (c. 350 – 300 a.C.), com cerca de 1,1 kg de ouro, tem três registos: no de baixo, animais de estepe em luta, no do meio, flores e aves, e no de cima, citas a coser uma pele, dois homens a cuidar de cavalos e vacas e ovelhas a serem mungidas (cenas do dia a dia, de uma delicadeza rara).',
  { h: 'Arquitetura' },
  'Os citas deixaram poucos edifícios, mas **monumentos de terra**: os **kurgans**, montes que podiam ter 20 m de altura, com câmaras de madeira ou de pedra, corredores, nichos e galerias. O Chertomlyk tem câmaras em forma de cruz; Arzhan 2, um conjunto de falsos túmulos. Em Neápolis cita, os mausoléus e as muralhas são já de tipo grego. Nas estepes, há ainda as **estelas de pedra** (*kamennye baby*), com figuras humanas, em parte ligadas a povos posteriores.',
  { h: 'O fim dos citas' },
  'Os citas não foram exterminados: foram **absorvidos**. A pressão dos **sármatas** (a partir do século III a.C.), da expansão do **Ponto** de Mitridates VI e dos **godos** (séc. III d.C.), e, finalmente, dos **hunos** (séc. IV d.C.), reduziu o seu território a nada. Os últimos citas misturaram-se com sármatas, godos, gregos e, mais tarde, eslavos. Os **alanos**, um ramo dos sármatas, andaram pela Europa até à Península Ibérica, onde, em 409, entraram com suevos e vândalos; os **osetas** do Cáucaso são hoje os seus herdeiros linguísticos.',
  { h: 'Os sármatas, os sucessores' },
  'Os **sármatas** (em grego, *Sauromatai* ou *Sarmatai*), nómadas de língua iraniana, são o grande povo que substitui os citas na estepe pôntica, a partir de c. 300 a.C. Entre eles destacam-se os **roxolanos**, os **iáziges** (que lutaram contra Roma no Danúbio) e os **alanos**. Usavam **cavalaria pesada**, com lança e couraça de escamas, de homem e de cavalo (os *catafractários*), e a sua tradição de mulheres guerreiras foi notada por autores gregos. Os romanos adotaram a sua cavalaria, e a ligação dos sármatas às lendas arturianas (hipótese de Scott Littleton e Linda Malcor, 1994) é uma teoria **muito discutida**.',
  { img: 'esc-sarmata-catafracta', leg: 'Cavaleiro sármata de cavalaria pesada (catafractário), séc. II d.C.; reconstituição conjetural. Ilustração gerada por IA.' },
  { h: 'A redescoberta' },
  'O ouro cita é, hoje, uma das grandes coleções de arte antiga: o **Hermitage** (São Petersburgo), o **Museu dos Tesouros Históricos da Ucrânia** (Kiev), os museus do Cazaquistão, de Tuva e do Altai. Em 2014, depois da anexação russa da Crimeia, um conjunto de peças de museus da Crimeia, que estavam em exposição num museu de Amesterdão, foi objeto de uma longa batalha judicial entre a Ucrânia e os museus da península. A ciência de hoje, com **radiocarbono**, ADN antigo e estudos de isótopos, vem refinando o que se julgava saber sobre os citas.',
  { caixa: 'Onde ver os citas', texto: 'No **Hermitage**, em São Petersburgo, a «Sala do Ouro» (Pazyryk, Solokha, Kul-Oba, Chertomlyk). No **Museu dos Tesouros Históricos da Ucrânia**, em Kiev, o peitoral de Tovsta Mohyla. No **Cazaquistão**, o «Homem de Ouro» de Issyk. No **Altai**, os museus de Gorno-Altaisk, com achados de Ukok e de Pazyryk. Na **Crimeia**, a Neápolis cita (Simferopol) e Quersoneso. No **Museu Britânico**, o tesouro do Oxus (aquemenida, com ecos da arte da estepe). Nos kurgans do Dniepre e de Tuva, o melhor é ver a **paisagem**.' }
];

const quiz = [
  { p: 'Como chamavam os persas aos citas e seus parentes da Ásia Central?', op: ['Skolotoi', 'Saka', 'Sarmatai', 'Tyrrhenoi'], certa: 1, exp: 'Os persas chamavam-lhes Saka; os gregos, Skythai; os assírios, Ishkuzai. Heródoto diz que eles próprios se chamavam Skolotoi.' },
  { p: 'A que família linguística pertencia a língua dos citas?', op: ['Semítica', 'Turca', 'Iraniana (indo-europeia)', 'Uralica'], certa: 2, exp: 'Era uma língua iraniana oriental, conhecida sobretudo por nomes próprios e por algumas palavras registadas pelos gregos.' },
  { p: 'Que historiador grego escreveu, no Livro IV das *Histórias*, a descrição mais célebre dos citas?', op: ['Tucídides', 'Xenofonte', 'Políbio', 'Heródoto'], certa: 3, exp: 'Heródoto, c. 430 a.C., a partir de informação recolhida sobretudo na costa do mar Negro, com a mistura de factos e lendas que isso implica.' },
  { p: 'Como se chamam os grandes túmulos de terra dos citas?', op: ['Pirâmides', 'Kurgans', 'Mastabas', 'Dolmens'], certa: 1, exp: 'Os kurgans, montes funerários de terra, por vezes com mais de 20 m de altura, contêm câmaras de madeira, ouro, armas e cavalos.' },
  { p: 'O que é o «estilo animal» cita?', op: ['Uma forma de pintar cavalos de corrida', 'Uma arte de figuras de animais estilizados, em ouro e outros materiais', 'Um tipo de música', 'Uma técnica de domar leões'], certa: 1, exp: 'Cervos, panteras, grifos e animais enroscados decoram armas, arreios e objetos de ouro, e são a marca da cultura cita.' },
  { p: 'O que fizeram os citas, segundo Heródoto, quando Dario I os invadiu, c. 513 a.C.?', op: ['Aceitaram a batalha e foram vencidos', 'Renderam-se logo', 'Recuaram, queimaram a terra e nunca aceitaram um combate decisivo', 'Pediram ajuda aos romanos'], certa: 2, exp: 'A tática do recuo e da terra queimada exauriu os persas, que regressaram sem uma vitória clara.' },
  { p: 'Qual foi o presente de Idantirso a Dario, segundo Heródoto?', op: ['Um pássaro, um rato, uma rã e cinco setas', 'Uma coroa de ouro', 'Um cavalo branco', 'Um barril de vinho'], certa: 0, exp: 'Dario viu nisto um sinal de rendição; o conselheiro Gobrias leu uma ameaça.' },
  { p: 'Quem derrotou e matou, segundo a tradição, o rei Ciro, o Grande, c. 530 a.C.?', op: ['O rei Ateias', 'Alexandre Magno', 'A rainha Tomíris dos massagetas', 'O rei Skilouros'], certa: 2, exp: 'É a versão de Heródoto; outros autores contam a morte de Ciro de outro modo. O episódio do odre de sangue é lenda.' },
  { p: 'Que rei cita morreu, com cerca de 90 anos, combatendo Filipe II da Macedónia em 339 a.C.?', op: ['Idantirso', 'Ateias', 'Escilas', 'Madies'], certa: 1, exp: 'Ateias, que dominava a estepe até ao Danúbio, foi derrotado e morto por Filipe, pai de Alexandre Magno.' },
  { p: 'O que se encontrou nos kurgans de Pazyryk, no Altai, que raramente se conserva?', op: ['Livros em papiro', 'Tecidos, tapetes, madeira e corpos tatuados, conservados no gelo', 'Esculturas de mármore', 'Moedas de prata'], certa: 1, exp: 'O gelo conservou o tapete de Pazyryk, feltros, selas e tatuagens de animais fantásticos.' },
  { p: 'O que fazia o ritual do cânhamo descrito por Heródoto?', op: ['Deitar sementes de cânhamo sobre pedras quentes, numa tenda de feltro, e respirar o vapor', 'Fazer cordas para os barcos', 'Cozer pão de cânhamo', 'Pintar o corpo com cânhamo'], certa: 0, exp: 'A arqueologia de Pazyryk confirmou os tripés, braseiros e sementes de cânhamo.' },
  { p: 'A lenda das amazonas, em Heródoto, liga-se a que povo, descendente dos citas e das amazonas?', op: ['Os etruscos', 'Os sármatas', 'Os hunos', 'Os egípcios'], certa: 1, exp: 'Heródoto diz que os sármatas descendem de amazonas e jovens citas. É uma lenda, mas há sepulturas de mulheres com armas na estepe.' },
  { p: 'Onde ficava a Neápolis cita, capital do último reino cita?', op: ['No Altai', 'Na Crimeia, perto de Simferopol', 'No Cazaquistão', 'Na Anatólia'], certa: 1, exp: 'Foi capital de Skilouros e de Palakos e foi destruída pelos godos por volta de 260 d.C.' },
  { p: 'Que povo, de língua iraniana, substituiu os citas na estepe pôntica a partir de c. 300 a.C.?', op: ['Os sármatas', 'Os vikings', 'Os gauleses', 'Os partos'], certa: 0, exp: 'Os sármatas (roxolanos, iáziges, alanos) avançaram do Don para oeste e ocuparam a estepe.' },
  { p: 'Que peça famosa de ouro, descoberta em 1971 na Ucrânia, mostra cenas do quotidiano cita?', op: ['A máscara de Agamémnon', 'O peitoral de Tovsta Mohyla', 'O Pente de Persépolis', 'O Tesouro de Priamo'], certa: 1, exp: 'O peitoral do kurgan de Tovsta Mohyla (c. 350–300 a.C.) está no Museu dos Tesouros Históricos da Ucrânia, em Kiev.' }
];

export default {
  id: 'escitas',
  cor: '#b89a3a',
  emblema: '../assets/img/escitas.png',
  nome:    { pt: 'Citas (Escitas)', en: 'Scythians' },
  periodo: { pt: 'c. 800 a.C. – c. 300 d.C.', en: 'c. 800 BC – c. AD 300' },
  visao:          { pt: visao, en: EN.visao },
  linha:          { pt: linha, en: EN.linha },
  mapa:           { pt: mapa, en: EN.mapa },
  sociedade:      { pt: sociedade, en: EN.sociedade },
  personalidades: { pt: personalidades, en: EN.personalidades },
  legado:         { pt: [...legado, ...CRED.pt], en: [...EN.legado, ...CRED.en] },
  quiz:           { pt: quiz, en: EN.quiz }
};
