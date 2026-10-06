// Pesquisa em todo o conteúdo da app (índice gerado por _modelo/gerar_indice.mjs → /pesquisa-pt.json e /pesquisa-en.json).
const T = {
  pt: { titulo: 'Pesquisar', ph: 'Pesquisar em todas as civilizações…', fechar: 'Fechar', a_carregar: 'A carregar o índice…', nada: 'Nada encontrado.',
        dica: 'Escreve pelo menos 2 letras. Várias palavras: têm de aparecer todas no mesmo parágrafo.', res: n => n + (n === 1 ? ' resultado' : ' resultados'), mais: ' (mostrados os 80 melhores)', erro: 'Não consegui carregar o índice de pesquisa.',
        sec: { visao: 'Visão geral', linha: 'Linha do tempo', mapa: 'Mapa e cidades', sociedade: 'Sociedade', personalidades: 'Personalidades', legado: 'Legado', quiz: 'Quiz' } },
  en: { titulo: 'Search', ph: 'Search all civilizations…', fechar: 'Close', a_carregar: 'Loading index…', nada: 'Nothing found.',
        dica: 'Type at least 2 letters. Several words: all must appear in the same paragraph.', res: n => n + (n === 1 ? ' result' : ' results'), mais: ' (showing the best 80)', erro: 'Could not load the search index.',
        sec: { visao: 'Overview', linha: 'Timeline', mapa: 'Map and cities', sociedade: 'Society', personalidades: 'People', legado: 'Legacy', quiz: 'Quiz' } }
};
export const dobra = s => Array.from(String(s)).map(c => (c.normalize('NFD').replace(/[̀-ͯ]/g, '')[0] || c)).join('').toLowerCase();
const cache = {};
const carregar = L => cache[L] || (cache[L] = fetch(`/pesquisa-${L}.json`).then(r => { if (!r.ok) throw 0; return r.json(); }).then(j => {
  j.f = j.r.map(x => dobra(x[2]) + '\u0001' + dobra(x[3])); j.pf = j.p.map(x => dobra(x[0])); return j; }).catch(e => { delete cache[L]; throw e; }));

const CSS = `
.pq-btn{border:1px solid rgba(232,217,168,.45);background:rgba(5,7,13,.6);color:#e8d9a8;width:36px;height:36px;border-radius:50%;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;padding:0;flex:none;pointer-events:auto}
.pq-btn:hover{background:rgba(232,217,168,.2)}.pq-btn svg{width:18px;height:18px}
#pq-ov{position:fixed;inset:0;z-index:1000;background:rgba(5,7,13,.92);display:none;flex-direction:column;align-items:center;padding:calc(14px + env(safe-area-inset-top)) 12px 12px;color:#e9ecf4;font-family:-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}
#pq-ov.aberto{display:flex}
#pq-caixa{width:min(760px,100%);display:flex;gap:8px;align-items:center}
#pq-in{flex:1;font:inherit;font-size:17px;padding:12px 16px;border-radius:24px;border:1px solid rgba(232,217,168,.5);background:#131826;color:#fff;outline:none;min-width:0}
#pq-in:focus{border-color:#e8d9a8}
#pq-x{border:0;background:#e8d9a8;color:#1a1405;font:inherit;font-weight:700;border-radius:22px;padding:11px 16px;cursor:pointer}
#pq-info{width:min(760px,100%);font-size:13px;color:#a9b3c9;padding:8px 6px}
#pq-lista{width:min(760px,100%);overflow:auto;flex:1;display:flex;flex-direction:column;gap:8px;padding-bottom:20px}
.pq-r{display:block;text-decoration:none;color:inherit;background:#131826;border:1px solid rgba(232,217,168,.2);border-radius:12px;padding:10px 14px}
.pq-r:hover,.pq-r:focus{border-color:#e8d9a8;outline:none}
.pq-t{font-size:12px;color:#e8d9a8;font-weight:700;letter-spacing:.2px}.pq-t span{color:#a9b3c9;font-weight:400}
.pq-x{font-size:14.5px;line-height:1.5;margin-top:4px;color:#d7dcea}
.pq-x mark,.pq-t mark,.civ-hl{background:#e8d9a8;color:#1a1405;border-radius:3px;padding:0 1px}
`;
let ov, inp, lista, info, getLang = () => 'pt', timer, ultimo = '';

function montar() {
  if (ov) return;
  const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
  ov = document.createElement('div'); ov.id = 'pq-ov'; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true');
  ov.innerHTML = '<div id="pq-caixa"><input id="pq-in" type="search" autocomplete="off" enterkeyhint="search"><button id="pq-x" type="button"></button></div><div id="pq-info"></div><div id="pq-lista"></div>';
  document.body.appendChild(ov);
  inp = ov.querySelector('#pq-in'); lista = ov.querySelector('#pq-lista'); info = ov.querySelector('#pq-info');
  ov.querySelector('#pq-x').addEventListener('click', fechar);
  ov.addEventListener('click', e => { if (e.target === ov) fechar(); });
  ['pointerdown', 'wheel', 'touchstart', 'keydown'].forEach(ev => ov.addEventListener(ev, e => e.stopPropagation(), { passive: true }));
  inp.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(procurar, 130); });
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') { const a = lista.querySelector('a'); if (a) a.click(); } });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && ov.classList.contains('aberto')) fechar();
    else if (e.key === '/' && !ov.classList.contains('aberto') && !/^(INPUT|TEXTAREA)$/.test((document.activeElement || {}).tagName || '')) { e.preventDefault(); abrir(); }
  });
}
export function abrir() {
  montar(); const t = T[getLang()];
  inp.placeholder = t.ph; ov.querySelector('#pq-x').textContent = t.fechar; ov.setAttribute('aria-label', t.titulo);
  ov.classList.add('aberto'); info.textContent = t.dica; inp.focus(); inp.select();
  carregar(getLang()).catch(() => {}); if (inp.value.trim().length >= 2) procurar();
}
function fechar() { ov.classList.remove('aberto'); }
const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function realce(texto, toks) {   // devolve HTML com <mark>, indiferente a acentos/maiúsculas
  const f = dobra(texto), marca = new Array(texto.length).fill(false);
  for (const k of toks) { let i = f.indexOf(k); while (i >= 0) { for (let j = i; j < i + k.length; j++) marca[j] = true; i = f.indexOf(k, i + k.length); } }
  let h = '', abre = false;
  for (let i = 0; i < texto.length; i++) { if (marca[i] && !abre) { h += '<mark>'; abre = true; } if (!marca[i] && abre) { h += '</mark>'; abre = false; } h += esc(texto[i]); }
  return h + (abre ? '</mark>' : '');
}
function excerto(x, toks) {
  const f = dobra(x); let i = -1; for (const k of toks) { const p = f.indexOf(k); if (p >= 0 && (i < 0 || p < i)) i = p; }
  if (x.length <= 230) return x;
  const a = Math.max(0, (i < 0 ? 0 : i) - 70); return (a > 0 ? '…' : '') + x.slice(a, a + 230) + (a + 230 < x.length ? '…' : '');
}
async function procurar() {
  const L = getLang(), t = T[L], q = inp.value.trim(); ultimo = q;
  if (q.length < 2) { lista.innerHTML = ''; info.textContent = t.dica; return; }
  info.textContent = t.a_carregar; let J;
  try { J = await carregar(L); } catch (e) { info.textContent = t.erro; return; }
  if (q !== ultimo) return;
  const toks = dobra(q).split(/\s+/).filter(k => k.length > 0), frase = dobra(q);
  const hits = [];
  for (let i = 0; i < J.r.length; i++) {
    const f = J.f[i]; let ok = true, sc = 0;
    for (const k of toks) { const p = f.indexOf(k); if (p < 0) { ok = false; break; } sc += 1 + Math.min(3, f.split(k).length - 2) * .3; }
    if (!ok) continue;
    const r = J.r[i], cab = f.slice(0, f.indexOf('\u0001'));
    if (toks.length > 1 && f.includes(frase)) sc += 3;
    if (toks.every(k => cab.includes(k))) sc += 2.5;
    if (toks.every(k => J.pf[r[0]].includes(k))) sc += 2;
    hits.push([sc, i]);
  }
  hits.sort((a, b) => b[0] - a[0]);
  const top = hits.slice(0, 80);
  info.textContent = hits.length ? t.res(hits.length) + (hits.length > 80 ? t.mais : '') : t.nada;
  lista.innerHTML = '';
  for (const [, i] of top) {
    const [pi, sec, h, x] = J.r[i], [nome, url] = J.p[pi];
    const a = document.createElement('a'); a.className = 'pq-r';
    a.href = `${url}?q=${encodeURIComponent(q)}#${sec}`;
    a.innerHTML = `<div class="pq-t">${esc(nome)} <span>· ${esc(t.sec[sec] || sec)}${h && h !== 'Quiz' && h !== 'Imagem' ? ' · ' + realce(h, toks) : ''}</span></div><div class="pq-x">${realce(excerto(x, toks), toks)}</div>`;
    lista.appendChild(a);
  }
  lista.scrollTop = 0;
}
export function criarBotao(lang) {
  getLang = lang;
  const b = document.createElement('button'); b.type = 'button'; b.className = 'pq-btn'; b.setAttribute('aria-label', 'Pesquisar / Search');
  b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/></svg>';
  b.addEventListener('click', abrir); montar(); return b;
}
// Realça na página os termos pesquisados (?q=...) e vai ao primeiro.
export function realcarNaPagina(raiz) {
  let q = ''; try { q = new URLSearchParams(location.search).get('q') || ''; } catch (e) {}
  const toks = dobra(q).split(/\s+/).filter(Boolean); if (!toks.length) return;
  const nos = []; const w = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT);
  while (w.nextNode()) { if (!/^(SCRIPT|STYLE|MARK)$/.test(w.currentNode.parentNode.tagName)) nos.push(w.currentNode); }
  let primeiro = null;
  for (const n of nos) {
    const tx = n.nodeValue, f = dobra(tx); const marca = new Array(tx.length).fill(false); let alg = false;
    for (const k of toks) { let i = f.indexOf(k); while (i >= 0) { for (let j = i; j < i + k.length; j++) marca[j] = true; alg = true; i = f.indexOf(k, i + k.length); } }
    if (!alg) continue;
    const fr = document.createDocumentFragment(); let ini = 0;
    for (let i = 0; i <= tx.length; i++) {
      if (i === tx.length || marca[i] !== marca[ini]) {
        const s = tx.slice(ini, i);
        if (marca[ini]) { const m = document.createElement('mark'); m.className = 'civ-hl'; m.textContent = s; fr.appendChild(m); primeiro = primeiro || m; } else fr.appendChild(document.createTextNode(s));
        ini = i;
      }
    }
    n.parentNode.replaceChild(fr, n);
  }
  if (primeiro) setTimeout(() => primeiro.scrollIntoView({ block: 'center', behavior: 'smooth' }), 120);
}
