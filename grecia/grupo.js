// Navegação entre as 8 páginas de Grécia. Cada dados.js faz: grupo: { ...GRUPO, aqui: '<slug>' } ('' = página-mãe).
export const GRUPO = {
  id: 'grecia',
  titulo: { pt: 'Grécia — páginas', en: 'Greece — pages' },
  voltar: { pt: 'Voltar à Grécia', en: 'Back to Greece' },
  itens: [
  { slug: '', nome: { pt: 'Grécia (página-mãe)', en: 'Greece (main page)' } },
  { slug: 'egeu-arcaica', nome: { pt: 'Do Egeu à Época Arcaica', en: 'From the Aegean to the Archaic Age' } },
  { slug: 'classica', nome: { pt: 'A Época Clássica', en: 'The Classical Age' } },
  { slug: 'helenismo', nome: { pt: 'Alexandre e o Helenismo', en: 'Alexander and the Hellenistic World' } },
  { slug: 'filosofia-ciencia', nome: { pt: 'Filosofia, ciência e literatura', en: 'Philosophy, science and literature' } },
  { slug: 'arte-arquitetura', nome: { pt: 'Arte e arquitetura', en: 'Art and architecture' } },
  { slug: 'religiao-vida', nome: { pt: 'Religião, jogos e vida quotidiana', en: 'Religion, games and daily life' } },
  { slug: 'guerra', nome: { pt: 'Guerra e marinha', en: 'Warfare and the navy' } }
  ]
};
export default GRUPO;
