// Gera pesquisa-pt.json e pesquisa-en.json (índice de pesquisa de todo o conteúdo das páginas).
// Correr SEMPRE antes de publicar:  node _modelo/gerar_indice.mjs
import fs from 'fs'; import path from 'path'; import { pathToFileURL } from 'url';
const R = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SEC = ['visao', 'linha', 'mapa', 'sociedade', 'personalidades', 'legado', 'quiz'];
const sjs = []; (function walk(d) { for (const f of fs.readdirSync(d, { withFileTypes: true })) {
  if (f.name.startsWith('_') || f.name === 'node_modules' || f.name === 'vendor' || f.name === 'assets' || f.name === 'shared') continue;
  const p = path.join(d, f.name); if (f.isDirectory()) walk(p); else if (f.name === 'dados.js') sjs.push(p); } })(R);
const { CIVS } = await import(pathToFileURL(path.join(R, 'dados-civs.js')).href);
const limpa = s => String(s ?? '').replace(/\*\*?/g, '').replace(/\s+/g, ' ').trim();
const out = { pt: { p: [], r: [] }, en: { p: [], r: [] } };
function blocos(lista, sec, pi, L) {
  let h = '';
  const add = (x, hh) => { x = limpa(x); if (x) out[L].r.push([pi, sec, limpa(hh ?? h), x]); };
  for (const b of lista || []) {
    if (typeof b === 'string') add(b);
    else if (b.h) h = b.h;
    else if (b.lista) b.lista.forEach(x => add(x));
    else if (b.caixa) [].concat(b.texto).forEach(x => add(x, b.caixa));
    else if (b.cit) add(b.cit + (b.fonte ? ' — ' + b.fonte : ''));
    else if (b.tabela) { b.tabela.linhas.forEach(l => add(l.join(' · '))); }
    else if (b.linha) b.linha.forEach(e => add(`${e.d}: ${e.t}. ${e.x || ''}`, e.t));
    else if (b.img) add(b.leg, 'Imagem');
    else if (b.p && b.op) add(`${b.p} ${b.op.join(' / ')} ${b.exp || ''}`, 'Quiz');
  }
}
let n = 0;
for (const f of sjs.sort()) {
  let d; try { d = (await import(pathToFileURL(f).href)).default; } catch (e) { console.log('ignorado', path.relative(R, f), e.message.slice(0, 60)); continue; }
  if (!d || !d.nome) continue;
  const rel = path.relative(R, path.dirname(f)).split(path.sep).join('/');
  { const t = CIVS.find(c => c.id === rel.split('/')[0]); if (t && !t.pronta) continue; } // civilizações ainda não publicadas
  const url = '/' + (rel ? rel + '/' : '');
  const civ = CIVS.find(c => c.id === d.id);
  for (const L of ['pt', 'en']) {
    const pi = out[L].p.length;
    const nome = d.nome[L] || d.nome.pt, civN = civ ? civ.nome[L] : nome;
    out[L].p.push([civN === nome ? nome : `${civN} — ${nome}`, url]);
    for (const s of SEC) {
      const v = d[s] && (d[s][L] && d[s][L].length ? d[s][L] : d[s].pt);
      if (s === 'quiz') (v || []).forEach(q => out[L].r.push([pi, 'quiz', 'Quiz', limpa(`${q.p} ${q.op.join(' / ')} ${q.exp || ''}`)]));
      else blocos(v, s, pi, L);
    }
  }
  n++;
}
for (const L of ['pt', 'en']) { fs.writeFileSync(path.join(R, `pesquisa-${L}.json`), JSON.stringify(out[L])); }
console.log('páginas', n, '| registos', out.pt.r.length, '| tamanho pt', (fs.statSync(path.join(R, 'pesquisa-pt.json')).size / 1e6).toFixed(1) + ' MB');
