// Navegação entre as 8 páginas de China. Cada dados.js faz: grupo: { ...GRUPO, aqui: '<slug>' } ('' = página-mãe).
export const GRUPO = {
  id: 'china',
  titulo: { pt: 'China — páginas', en: 'China — pages' },
  voltar: { pt: 'Voltar à China', en: 'Back to China' },
  itens: [
  { slug: '', nome: { pt: 'China (página-mãe)', en: 'China (main page)' } },
  { slug: 'origens-zhou', nome: { pt: 'Das origens aos Zhou e aos Reinos Combatentes', en: 'From the origins to the Zhou and the Warring States' } },
  { slug: 'qin-han', nome: { pt: 'Qin e Han: o primeiro império', en: 'Qin and Han: the first empire' } },
  { slug: 'divisao-tang', nome: { pt: 'Divisão, Sui e Tang', en: 'Division, Sui and Tang' } },
  { slug: 'song-yuan', nome: { pt: 'Song e Yuan', en: 'Song and Yuan' } },
  { slug: 'filosofia-religiao', nome: { pt: 'Filosofia e religião', en: 'Philosophy and religion' } },
  { slug: 'invencoes-arte', nome: { pt: 'Invenções, ciência e arte', en: 'Inventions, science and art' } },
  { slug: 'cidades-rota-seda', nome: { pt: 'Cidades, muralhas e Rota da Seda', en: 'Cities, walls and the Silk Road' } }
  ]
};
export default GRUPO;
