// Navegação entre as 8 páginas de Índia. Cada dados.js faz: grupo: { ...GRUPO, aqui: '<slug>' } ('' = página-mãe).
export const GRUPO = {
  id: 'india-classica',
  titulo: { pt: 'Índia — páginas', en: 'India — pages' },
  voltar: { pt: 'Voltar à Índia', en: 'Back to India' },
  itens: [
  { slug: '', nome: { pt: 'Índia (página-mãe)', en: 'India (main page)' } },
  { slug: 'vedica-mahajanapadas', nome: { pt: 'Da era védica aos Mahajanapadas', en: 'From the Vedic Age to the Mahajanapadas' } },
  { slug: 'maurya', nome: { pt: 'O Império Maurya e Ashoka', en: 'The Maurya Empire and Ashoka' } },
  { slug: 'pos-maurya', nome: { pt: 'Entre os Maurya e os Gupta', en: 'Between the Maurya and the Gupta' } },
  { slug: 'gupta-medieval', nome: { pt: 'Os Gupta e a Índia medieval até 1500', en: 'The Gupta and Medieval India to 1500' } },
  { slug: 'religioes-filosofia', nome: { pt: 'Religiões e filosofia', en: 'Religions and philosophy' } },
  { slug: 'ciencia-arte', nome: { pt: 'Ciência, matemática e arte', en: 'Science, mathematics and art' } },
  { slug: 'sociedade-comercio', nome: { pt: 'Sociedade, economia e comércio', en: 'Society, economy and trade' } }
  ]
};
export default GRUPO;
