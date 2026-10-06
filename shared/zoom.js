// Ampliação de imagens: ao tocar numa figura abre uma janela com zoom (roda do rato, pinça, duplo toque/clique, botões, arrastar).
const TXT = {
  pt: { fechar: 'Fechar', mais: 'Aproximar', menos: 'Afastar', repor: 'Tamanho original', dica: 'Pinça ou roda do rato para aproximar · arrasta para mover · duplo toque para ampliar' },
  en: { fechar: 'Close', mais: 'Zoom in', menos: 'Zoom out', repor: 'Fit to screen', dica: 'Pinch or scroll to zoom · drag to move · double-tap to zoom' }
};
const S_MAX = 6;
let caixa = null, img, leg, dica, s = 1, x = 0, y = 0, ponteiros = new Map(), dist0 = 0, s0 = 1, moveu = false, aberta = false, foco = null;

function el(tag, cls, txt) { const e = document.createElement(tag); if (cls) e.className = cls; if (txt) e.textContent = txt; return e; }
const lim = (v, a, b) => Math.min(b, Math.max(a, v));
const t = () => TXT[document.documentElement.lang === 'en' ? 'en' : 'pt'];

function aplicar() {
  // não deixa a imagem sair do ecrã
  const w = img.clientWidth * s, h = img.clientHeight * s, W = caixa.clientWidth, H = caixa.clientHeight;
  const mx = Math.max(0, (w - W) / 2) + 40, my = Math.max(0, (h - H) / 2) + 40;
  x = lim(x, -mx, mx); y = lim(y, -my, my);
  img.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
  img.style.cursor = s > 1 ? 'grab' : 'zoom-in';
}
// zoom em torno de um ponto do ecrã (cx, cy)
function zoomPara(ns, cx, cy) {
  ns = lim(ns, 1, S_MAX);
  const r = img.getBoundingClientRect(), ox = r.left + r.width / 2, oy = r.top + r.height / 2, k = ns / s;
  x += (cx - ox) * (1 - k); y += (cy - oy) * (1 - k); s = ns;
  if (s === 1) { x = 0; y = 0; }
  aplicar();
}
const centro = () => [caixa.clientWidth / 2, caixa.clientHeight / 2];

function criar() {
  caixa = el('div', 'zoom-caixa'); caixa.setAttribute('role', 'dialog'); caixa.setAttribute('aria-modal', 'true'); caixa.hidden = true;
  img = el('img', 'zoom-img'); img.draggable = false; img.alt = '';
  leg = el('p', 'zoom-leg'); dica = el('p', 'zoom-dica');
  const barra = el('div', 'zoom-barra');
  const b = (txt, cls, fn) => { const k = el('button', cls, txt); k.type = 'button'; k.addEventListener('click', e => { e.stopPropagation(); fn(); }); barra.appendChild(k); return k; };
  b.call(null, '−', 'zoom-menos', () => { const [cx, cy] = centro(); zoomPara(s / 1.5, cx, cy); });
  b.call(null, '1:1', 'zoom-repor', () => { s = 1; x = 0; y = 0; aplicar(); });
  b.call(null, '+', 'zoom-mais', () => { const [cx, cy] = centro(); zoomPara(s * 1.5, cx, cy); });
  const fechar = el('button', 'zoom-fechar', '×'); fechar.type = 'button'; fechar.addEventListener('click', e => { e.stopPropagation(); fecha(); });
  caixa.append(img, leg, dica, barra, fechar);
  document.body.appendChild(caixa);

  caixa.addEventListener('wheel', e => { e.preventDefault(); zoomPara(s * Math.exp(-e.deltaY * 0.002), e.clientX, e.clientY); }, { passive: false });
  caixa.addEventListener('pointerdown', e => {
    if (e.target.closest('button')) return;
    ponteiros.set(e.pointerId, { x: e.clientX, y: e.clientY }); moveu = false;
    try { caixa.setPointerCapture(e.pointerId); } catch (_) {}
    if (ponteiros.size === 2) { const [a, c] = [...ponteiros.values()]; dist0 = Math.hypot(a.x - c.x, a.y - c.y); s0 = s; moveu = true; }
  });
  caixa.addEventListener('pointermove', e => {
    const p = ponteiros.get(e.pointerId); if (!p) return;
    const dx = e.clientX - p.x, dy = e.clientY - p.y; p.x = e.clientX; p.y = e.clientY;
    if (ponteiros.size === 2) {
      const [a, c] = [...ponteiros.values()], d = Math.hypot(a.x - c.x, a.y - c.y);
      if (dist0 > 0) zoomPara(s0 * d / dist0, (a.x + c.x) / 2, (a.y + c.y) / 2);
    } else if (s > 1) { x += dx; y += dy; moveu = moveu || Math.hypot(dx, dy) > 1; aplicar(); }
  });
  const fimP = e => {
    if (!ponteiros.has(e.pointerId)) return;
    ponteiros.delete(e.pointerId); if (ponteiros.size < 2) dist0 = 0;
    // toque no fundo (fora da imagem) fecha
    if (ponteiros.size === 0 && !moveu && e.target === caixa) fecha();
  };
  caixa.addEventListener('pointerup', fimP); caixa.addEventListener('pointercancel', fimP);
  img.addEventListener('dblclick', e => { e.preventDefault(); if (s > 1) { s = 1; x = 0; y = 0; aplicar(); } else zoomPara(2.5, e.clientX, e.clientY); });
  window.addEventListener('keydown', e => {
    if (!aberta) return;
    if (e.key === 'Escape') fecha();
    else if (e.key === '+' || e.key === '=') { const [cx, cy] = centro(); zoomPara(s * 1.5, cx, cy); }
    else if (e.key === '-') { const [cx, cy] = centro(); zoomPara(s / 1.5, cx, cy); }
    else if (e.key === '0') { s = 1; x = 0; y = 0; aplicar(); }
    else if (e.key === 'Tab') { e.preventDefault(); caixa.querySelector('.zoom-fechar').focus(); }
  });
  window.addEventListener('resize', () => { if (aberta) aplicar(); });
}

function abre(origem) {
  if (!caixa) criar();
  const tx = t();
  caixa.querySelector('.zoom-fechar').setAttribute('aria-label', tx.fechar);
  caixa.querySelector('.zoom-menos').setAttribute('aria-label', tx.menos);
  caixa.querySelector('.zoom-mais').setAttribute('aria-label', tx.mais);
  caixa.querySelector('.zoom-repor').setAttribute('aria-label', tx.repor);
  const fig = origem.closest('figure'), c = fig && fig.querySelector('figcaption');
  img.src = origem.currentSrc || origem.src; img.alt = origem.alt || '';
  leg.textContent = c ? c.textContent : ''; leg.hidden = !c; dica.textContent = tx.dica;
  s = 1; x = 0; y = 0; img.style.transform = ''; ponteiros.clear();
  foco = document.activeElement; caixa.hidden = false; aberta = true;
  document.documentElement.classList.add('zoom-aberto');
  aplicar(); caixa.querySelector('.zoom-fechar').focus();
  setTimeout(() => { dica.classList.add('fora'); }, 3500); dica.classList.remove('fora');
}
function fecha() {
  if (!aberta) return; aberta = false; caixa.hidden = true; img.removeAttribute('src');
  document.documentElement.classList.remove('zoom-aberto');
  if (foco && foco.focus) try { foco.focus(); } catch (_) {}
}

document.addEventListener('click', e => {
  const i = e.target.closest && e.target.closest('.figura img');
  if (i) abre(i);
});
// acessibilidade: figuras focáveis por teclado
new MutationObserver(() => {
  document.querySelectorAll('.figura img:not([tabindex])').forEach(i => { i.tabIndex = 0; i.setAttribute('role', 'button'); i.addEventListener('keydown', ev => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); abre(i); } }); });
}).observe(document.documentElement, { childList: true, subtree: true });
