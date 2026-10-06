// Motor comum das páginas de civilização. Cada civilização só fornece o ficheiro dados.js.
// Blocos de conteúdo aceites (em cada secção, por idioma):
//   'texto'                         parágrafo (aceita **negrito**)
//   { h: 'Título' }                 subtítulo
//   { lista: [..], ord: true }      lista (ord = numerada)
//   { img: 'id', leg: 'legenda' }   imagem img/<id>.jpg|png|webp (se faltar, aparece uma ranhura a dizer qual é)
//   { caixa: 'Título', texto: '..' }  caixa de destaque
//   { cit: 'texto', fonte: '..' }   citação
//   { tabela: { cab: [..], linhas: [[..],..] } }
//   { linha: [{ d: 'data', t: 'título', x: 'texto' }, ..] }   linha do tempo vertical
import './zoom.js';
import { criarBotao, realcarNaPagina } from './pesquisa.js';

const SECCOES = [
  { id: 'visao',          pt: 'Visão geral',             en: 'Overview' },
  { id: 'linha',          pt: 'Linha do tempo',          en: 'Timeline' },
  { id: 'mapa',           pt: 'Mapa e cidades',          en: 'Map and cities' },
  { id: 'sociedade',      pt: 'Sociedade e quotidiano',  en: 'Society and daily life' },
  { id: 'personalidades', pt: 'Personalidades',          en: 'People' },
  { id: 'legado',         pt: 'Legado e monumentos',     en: 'Legacy and monuments' },
  { id: 'quiz',           pt: 'Quiz',                    en: 'Quiz' }
];
const TXT = {
  pt: { voltar: '← Voltar ao globo', globo: 'Globo', civ: 'Civilização', breve: 'Secção em construção.',
        semEn: 'Tradução para inglês em curso. A mostrar a versão em português.',
        falta: 'Imagem por colocar', ficheiro: 'Ficheiro', pont: 'Pontuação', certo: 'Certo!', errado: 'Errado.', refazer: 'Recomeçar', fim: 'Terminaste o quiz' },
  en: { voltar: '← Back to the globe', globo: 'Globe', civ: 'Civilization', breve: 'Section under construction.',
        semEn: 'English translation in progress. Showing the Portuguese version.',
        falta: 'Image to be added', ficheiro: 'File', pont: 'Score', certo: 'Correct!', errado: 'Wrong.', refazer: 'Restart', fim: 'Quiz finished' }
};

const el = (tag, cls, texto) => { const e = document.createElement(tag); if (cls) e.className = cls; if (texto != null) inline(e, texto); return e; };
// texto com **negrito**, sem innerHTML
function inline(e, texto) {
  String(texto).split('**').forEach((parte, i) => {
    if (!parte) return;
    if (i % 2) { const s = document.createElement('strong'); s.textContent = parte; e.appendChild(s); }
    else parte.split(/\*([^*\n]+)\*/).forEach((p2, j) => {   // *itálico*
      if (!p2) return;
      if (j % 2) { const m = document.createElement('em'); m.textContent = p2; e.appendChild(m); }
      else e.appendChild(document.createTextNode(p2));
    });
  });
}

export function iniciar(d) {
  let lang = 'pt';
  try { const g = localStorage.getItem('civ_lang'); if (g === 'pt' || g === 'en') lang = g; } catch (e) {}
  let seccao = 'visao';
  try { const h = location.hash.slice(1); if (SECCOES.some(s => s.id === h)) seccao = h; } catch (e) {}
  if (d.cor) document.documentElement.style.setProperty('--cor', d.cor);
  const $ = id => document.getElementById(id);

  // Pesquisa global (botão ao lado do idioma) e realce dos termos pesquisados
  { const topo = document.querySelector('.topo'), idi = topo && topo.querySelector('.idiomas');
    if (topo && idi) { const g = document.createElement('div'); g.style.cssText = 'display:flex;gap:8px;align-items:center';
      topo.insertBefore(g, idi); g.append(criarBotao(() => lang), idi); } }
  let realcar = true;

  function figura(b, t) {
    const f = el('figure', 'figura');
    const exts = ['jpg', 'png', 'webp']; let i = 0;
    const base = (d.imagens && d.imagens[b.img] && d.imagens[b.img].src) || null;
    const img = document.createElement('img');
    img.loading = 'lazy'; img.alt = b.leg || b.img;
    img.addEventListener('error', () => {
      if (img.hasAttribute('srcset')) { img.removeAttribute('srcset'); img.removeAttribute('sizes'); img.src = base || `img/${b.img}.${exts[i]}`; return; }
      if (!base && ++i < exts.length) { img.src = `img/${b.img}.${exts[i]}`; return; }
      const falta = el('div', 'img-falta');
      falta.append(el('strong', null, t.falta), el('span', null, b.leg || ''), el('code', null, `${t.ficheiro}: img/${b.img}.jpg`));
      img.replaceWith(falta);
    });
    img.decoding = 'async';
    img.src = base || `img/${b.img}.${exts[0]}`;
    if (!base) { // versão leve (800 px, webp) para ecrãs pequenos; a original serve o zoom
      img.dataset.full = img.src;
      img.srcset = `img/m/${b.img}.webp 800w, img/${b.img}.jpg 1600w`;
      img.sizes = '(max-width: 900px) 100vw, 860px';
    }
    f.appendChild(img);
    if (b.leg) f.appendChild(el('figcaption', null, b.leg));
    return f;
  }

  function bloco(b, t) {
    if (typeof b === 'string') return el('p', null, b);
    if (b.h) return el('h3', null, b.h);
    if (b.lista) { const l = el(b.ord ? 'ol' : 'ul'); b.lista.forEach(x => l.appendChild(el('li', null, x))); return l; }
    if (b.img) return figura(b, t);
    if (b.caixa) { const c = el('aside', 'caixa'); c.appendChild(el('strong', null, b.caixa)); [].concat(b.texto).forEach(x => c.appendChild(el('p', null, x))); return c; }
    if (b.cit) { const q = el('blockquote', null, b.cit); if (b.fonte) q.appendChild(el('cite', null, b.fonte)); return q; }
    if (b.tabela) {
      const w = el('div', 'tabela'), tb = document.createElement('table');
      const th = document.createElement('tr'); b.tabela.cab.forEach(c => th.appendChild(el('th', null, c)));
      const hd = document.createElement('thead'); hd.appendChild(th); tb.appendChild(hd);
      const bd = document.createElement('tbody');
      b.tabela.linhas.forEach(l => { const tr = document.createElement('tr'); l.forEach(c => tr.appendChild(el('td', null, c))); bd.appendChild(tr); });
      tb.appendChild(bd); w.appendChild(tb); return w;
    }
    if (b.linha) {
      const l = el('ol', 'tempo');
      b.linha.forEach(x => { const li = el('li'); if (x.img) { li.className = 'tempo-img'; li.appendChild(figura(x, t)); l.appendChild(li); return; } li.appendChild(el('span', 'data', x.d)); li.appendChild(el('strong', null, x.t)); if (x.x) li.appendChild(el('p', null, x.x)); l.appendChild(li); });
      return l;
    }
    return el('p', null, '');
  }

  function quiz(perguntas, t, painel) {
    let pontos = 0, respondidas = 0;
    const cab = el('div', 'quiz-pont');
    const atualizar = () => { cab.textContent = `${t.pont}: ${pontos} / ${perguntas.length}`; };
    atualizar(); painel.appendChild(cab);
    const fim = el('p', 'quiz-fim'); fim.style.display = 'none';
    perguntas.forEach((q, n) => {
      const c = el('div', 'pergunta'); c.appendChild(el('p', 'enunciado', `${n + 1}. ${q.p}`));
      const ops = el('div', 'opcoes'); const exp = el('p', 'explicacao'); exp.style.display = 'none';
      q.op.forEach((o, i) => {
        const b = el('button', null, o); b.type = 'button';
        b.addEventListener('click', () => {
          if (c.dataset.feito) return; c.dataset.feito = '1'; respondidas++;
          const botoes = ops.querySelectorAll('button'); botoes.forEach(x => x.disabled = true);
          botoes[q.certa].classList.add('certa');
          if (i === q.certa) pontos++; else b.classList.add('errada');
          exp.textContent = `${i === q.certa ? t.certo : t.errado} ${q.exp || ''}`; exp.style.display = 'block';
          atualizar();
          if (respondidas === perguntas.length) { fim.textContent = `${t.fim}: ${pontos} / ${perguntas.length}.`; fim.style.display = 'block'; }
        });
        ops.appendChild(b);
      });
      c.append(ops, exp); painel.appendChild(c);
    });
    painel.appendChild(fim);
    const r = el('button', 'refazer', t.refazer); r.type = 'button'; r.addEventListener('click', desenhar); painel.appendChild(r);
  }

  function desenhar() {
    const t = TXT[lang];
    document.documentElement.lang = lang;
    document.title = `${d.nome[lang]} · ${lang === 'pt' ? 'Civilizações' : 'Civilizations'}`;
    // Páginas agrupadas (ex.: Egito com várias páginas): d.grupo = { id, titulo:{pt,en}, voltar:{pt,en}, aqui:'slug' ('' = página-mãe), itens:[{slug, nome:{pt,en}}] }
    const g = d.grupo, filha = !!(g && g.aqui), sobe = filha ? '../' : '';
    if (filha) { $('voltar').textContent = '← ' + g.voltar[lang]; $('voltar').href = '../'; }
    else { $('voltar').textContent = t.voltar; $('voltar').href = `../?de=${encodeURIComponent(g ? g.id : d.id)}`; }
    document.querySelectorAll('.grupo').forEach(x => x.remove());
    if (g) {
      const nav = document.createElement('nav'); nav.className = 'grupo'; nav.setAttribute('aria-label', g.titulo[lang]);
      const tt = document.createElement('span'); tt.className = 'grupo-t'; tt.textContent = g.titulo[lang]; nav.appendChild(tt);
      const chip = (href, txt, atual) => { const a = document.createElement('a'); a.href = href; a.textContent = txt; if (atual) a.setAttribute('aria-current', 'page'); nav.appendChild(a); };
      g.itens.forEach(it => chip(sobe + (it.slug ? it.slug + '/' : (sobe ? '' : './')), it.nome[lang], it.slug === g.aqui));
      document.querySelector('.capa').after(nav);
    }
    $('etiqueta').textContent = t.civ;
    $('nome').textContent = d.nome[lang];
    $('periodo').textContent = d.periodo[lang];
    const em = $('emblema'); if (d.emblema) { em.src = d.emblema; em.alt = d.nome[lang]; em.style.display = 'block'; } else em.style.display = 'none';
    $('l-pt').setAttribute('aria-pressed', lang === 'pt');
    $('l-en').setAttribute('aria-pressed', lang === 'en');

    const abas = $('abas'); abas.innerHTML = '';
    for (const s of SECCOES) {
      const b = document.createElement('button');
      b.textContent = s[lang]; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', s.id === seccao);
      b.addEventListener('click', () => { seccao = s.id; history.replaceState(null, '', '#' + s.id); desenhar(); window.scrollTo({ top: 0 }); });
      abas.appendChild(b);
    }
    const ativa = abas.querySelector('[aria-selected="true"]');
    if (ativa) abas.scrollLeft = ativa.offsetLeft - (abas.clientWidth - ativa.offsetWidth) / 2;
    const sec = SECCOES.find(s => s.id === seccao);
    const dados = d[seccao] || {};
    let conteudo = dados[lang], aviso = false;
    if ((!conteudo || !conteudo.length) && lang === 'en' && dados.pt && dados.pt.length) { conteudo = dados.pt; aviso = true; }
    const painel = $('painel'); painel.innerHTML = '';
    painel.appendChild(el('h2', null, sec[lang]));
    if (aviso) painel.appendChild(el('p', 'aviso', t.semEn));
    if (Array.isArray(conteudo) && conteudo.length) {
      if (seccao === 'quiz') quiz(conteudo, t, painel);
      else conteudo.forEach(b => painel.appendChild(bloco(b, t)));
    } else painel.appendChild(el('p', 'breve', t.breve));
    if (realcar) { realcar = false; realcarNaPagina(painel); }
  }
  $('l-pt').addEventListener('click', () => { lang = 'pt'; try { localStorage.setItem('civ_lang', lang); } catch (e) {} desenhar(); });
  $('l-en').addEventListener('click', () => { lang = 'en'; try { localStorage.setItem('civ_lang', lang); } catch (e) {} desenhar(); });
  const cab = $('cabecalho');
  const medir = () => document.documentElement.style.setProperty('--alt-cab', cab.offsetHeight + 'px');
  window.addEventListener('resize', medir); medir();
  desenhar();
  medir();
}
