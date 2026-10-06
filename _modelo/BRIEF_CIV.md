# Como escrever uma civilização (instruções para quem escreve o conteúdo)

Referência obrigatória: leia `sumerios/dados.js` (português), `sumerios/dados-en.js` (inglês) e `shared/civ.js` (motor). O resultado deve ter a MESMA profundidade, estrutura e rigor dos Sumérios. O leitor é adulto, português (Portugal), não especialista; o autor do projeto é Paulo Leal.

## Ficheiros a criar (na pasta da civilização, ex.: `babilonia/`)
- `dados.js` — português (base). Começa com `import EN from './dados-en.js';`, define const visao, linha, mapa, sociedade, personalidades, legado, quiz e termina com `export default { id, cor, emblema, nome:{pt,en}, periodo:{pt,en}, visao:{pt:visao,en:EN.visao}, ... quiz:{pt:quiz,en:EN.quiz} }`. `emblema: '../assets/img/<id>.png'` (o emblema será fornecido depois; o motor trata a ausência).
- `dados-en.js` — inglês, mesma estrutura e mesmos ids de imagem; `export default { visao, linha, mapa, sociedade, personalidades, legado, quiz };` (tradução natural, não literal). Use ’ (tipográfico) em vez de apóstrofo reto dentro de strings entre aspas simples.
- `IMAGENS_<NOME>.md` — pedido de imagens (ver abaixo).
- `index.html` e a pasta `img/` já existem. NÃO tocar em mais nada (shared/, index.html da raiz, dados-civs.js, outras civilizações).

## Conteúdo (as 7 secções, tal como nos Sumérios)
visao (resumo em caixa, onde/quando com tabela de fases, porque importam, hoje), linha (linha do tempo com 20–28 entradas {d,t,x} + redescoberta se fizer sentido), mapa (cidades principais em tabela + subsecções por cidade, rotas), sociedade (política, classes, religião com tabela de deuses, economia, escrita, casa, alimentação, vestuário, música/jogos, ciência, tecnologia, guerra), personalidades (10–15 figuras com h + parágrafo), legado (o que deixaram, arte, arquitetura, redescoberta, onde visitar), quiz (15 perguntas {p, op:[4], certa:índice, exp}).
Tipos de bloco: string; {h:'título'}; {lista:[...], ord:true?}; {img:'id', leg:'legenda'}; {caixa:'Título', texto:'..' ou [..]}; {cit:'..', fonte:'..'}; {tabela:{cab:[..], linhas:[[..]]}}; {linha:[{d,t,x}]}. Negrito com **texto**; itálico com *texto*.

## Regras de rigor
- Verifique factos com WebSearch/WebFetch (fontes sérias: museus, Britannica, Oxford, Cambridge Ancient History, Wikipedia como ponto de partida). Datas na «cronologia média»; diga «c.» e assinale o que é debatido/incerto. Nunca invente nomes, datas ou citações. Se não tem certeza, diga que é debatido ou omita.
- Marque claramente lenda vs facto. Linguagem clara, sem jargão não explicado. Adulto: pode incluir guerra e religião com seriedade, sem sensacionalismo.
- Português europeu (acordo de 1990), a.C./d.C.; Inglês: BC/AD.
- Cada civilização é independente: pode referir as outras, mas sem depender delas.

## Imagens (~35–40 por civilização)
Cada `{img:'<prefixo>-<nome>'}` procura `<civ>/img/<id>.jpg`. Use um prefixo de 3 letras único da civilização (aca-, ela-, bab-, asi-). Espalhe as imagens pelas secções (como nos Sumérios, ~4–13 por secção). Legendas curtas e factuais, que sejam verdadeiras para a imagem pedida (descrevem o objeto, museu, data).
Em `IMAGENS_<NOME>.md`, duas tabelas:
1. **Da internet** (≈ 2/3): ficheiro (id.jpg), o que é (objeto/local, museu), termo de pesquisa exato para Wikimedia Commons (em inglês).
2. **Por criar com IA** (≈ 1/3, só quando não existe foto real: reconstruções, cenas do quotidiano, esquemas): ficheiro, e um prompt completo em inglês para gerador de imagens (cena, época, vestuário, arquitetura, luz, estilo «realistic historical illustration, 16:9, no text, no modern elements», rigor arqueológico).
3. No fim, **Emblema do globo**: um prompt para um emblema circular (medalhão) em fundo transparente, dourado/bronze sobre fundo escuro, com símbolo icónico da civilização, sem texto, e a cor sugerida.
Não crie nem descarregue imagens. Não use ficheiros que não existam.

## Validação
Antes de terminar: `node --input-type=module -e "import('/home/claude/civilizacoes/<civ>/dados.js').then(m=>{const d=m.default;for(const k of ['visao','linha','mapa','sociedade','personalidades','legado','quiz'])console.log(k,d[k].pt.length,d[k].en.length)})"` — pt e en devem ter o mesmo número de itens e as mesmas imagens (mesmos ids por ordem). Confirme também que todos os ids de imagem de dados.js constam em `IMAGENS_<NOME>.md`.
Resposta final: 5 linhas no máximo (o que fez, contagens, dúvidas factuais por confirmar).
