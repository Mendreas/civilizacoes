// Gera <title>, meta description, Open Graph, canonical, favicon, sitemap.xml, robots.txt e manifest.
// Uso: node _modelo/gerar_seo.mjs   (correr antes de cada publicação, depois de gerar_indice.mjs)
import fs from 'fs'; import path from 'path'; import { pathToFileURL } from 'url';
const RAIZ = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SITE = 'https://worldcivs.netlify.app';
const { CIVS } = await import(pathToFileURL(path.join(RAIZ, 'dados-civs.js')).href);
const prontas = new Set(CIVS.filter(c => c.pronta).map(c => c.id));
const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const limpar = s => String(s).replace(/\*+/g, '').replace(/\s+/g, ' ').trim();
const resumo = (d, lang) => {
  const v = (d.visao && d.visao[lang]) || [];
  const p = v.find(b => typeof b === 'string' && b.length > 60) || '';
  let t = limpar(p); if (t.length > 170) t = t.slice(0, 167).replace(/\s+\S*$/, '') + '…'; return t;
};
const pags = [];
(function andar(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory() || ['_modelo', 'vendor', 'assets', 'shared', 'node_modules', '.git', 'img', 'm'].includes(e.name)) continue;
    const p = path.join(dir, e.name);
    if (fs.existsSync(path.join(p, 'dados.js')) && fs.existsSync(path.join(p, 'index.html'))) pags.push(p);
    andar(p);
  }
})(RAIZ);
const urls = [SITE + '/'];
let n = 0;
for (const p of pags) {
  const rel = path.relative(RAIZ, p).split(path.sep).join('/');
  const topo = rel.split('/')[0];
  const d = (await import(pathToFileURL(path.join(p, 'dados.js')).href + '?v=' + Date.now())).default;
  const nome = d.nome.pt, periodo = d.periodo ? d.periodo.pt : '';
  const desc = resumo(d, 'pt') || `${nome}: história, sociedade, personalidades e legado.`;
  const url = `${SITE}/${rel}/`;
  const og = `${SITE}/assets/og.jpg`;
  const bloco = `<!--seo-->
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="article"><meta property="og:site_name" content="Civilizações">
<meta property="og:title" content="${esc(nome)} — Civilizações"><meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}"><meta property="og:image" content="${og}"><meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${'../'.repeat(rel.split('/').length)}assets/favicon.png"><link rel="manifest" href="${'../'.repeat(rel.split('/').length)}manifest.json">
<!--/seo-->`;
  let h = fs.readFileSync(path.join(p, 'index.html'), 'utf8');
  h = h.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(nome)}${periodo ? ' (' + esc(periodo) + ')' : ''} — Civilizações</title>`);
  h = h.replace(/<!--seo-->[\s\S]*?<!--\/seo-->\n?/, '');
  h = h.replace('</head>', bloco + '\n</head>');
  fs.writeFileSync(path.join(p, 'index.html'), h); n++;
  if (prontas.has(topo)) urls.push(url);
}
// página inicial
{
  const f = path.join(RAIZ, 'index.html'); let h = fs.readFileSync(f, 'utf8');
  const desc = `Globo 3D interativo com ${prontas.size} civilizações da história do mundo: cronologia, mapas, personalidades, quiz e imagens, em português e inglês.`;
  const bloco = `<!--seo-->
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${SITE}/">
<meta property="og:type" content="website"><meta property="og:site_name" content="Civilizações"><meta property="og:title" content="Civilizações — um globo da história do mundo">
<meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${SITE}/"><meta property="og:image" content="${SITE}/assets/og.jpg"><meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="assets/favicon.png"><link rel="apple-touch-icon" href="assets/icon-192.png"><link rel="manifest" href="manifest.json">
<!--/seo-->`;
  h = h.replace(/<!--seo-->[\s\S]*?<!--\/seo-->\n?/, '').replace('</head>', bloco + '\n</head>');
  fs.writeFileSync(f, h);
}
const hoje = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(RAIZ, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `<url><loc>${u}</loc><lastmod>${hoje}</lastmod></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(RAIZ, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
fs.writeFileSync(path.join(RAIZ, 'manifest.json'), JSON.stringify({ name: 'Civilizações', short_name: 'Civilizações', start_url: '/', display: 'standalone', background_color: '#05070d', theme_color: '#05070d', lang: 'pt', icons: [{ src: '/assets/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/assets/icon-512.png', sizes: '512x512', type: 'image/png' }] }, null, 1));
console.log('páginas', n, '| sitemap', urls.length);
