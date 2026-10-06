// Navegação entre as 9 páginas do Egito. Cada dados.js faz: grupo: { ...GRUPO, aqui: '<slug>' } ('' = página-mãe).
export const GRUPO = {
  id: 'egito',
  titulo: { pt: 'Egito Antigo — páginas', en: 'Ancient Egypt — pages' },
  voltar: { pt: 'Voltar ao Egito', en: 'Back to Egypt' },
  itens: [
  { slug: '', nome: { pt: 'Egito Antigo (página-mãe)', en: 'Ancient Egypt (main page)' } },
  { slug: 'antigo-imperio', nome: { pt: 'Pré-dinástico e Reino Antigo', en: 'Predynastic and Old Kingdom' } },
  { slug: 'medio-imperio', nome: { pt: '1.º Intermédio e Reino Médio', en: 'First Intermediate and Middle Kingdom' } },
  { slug: 'novo-imperio', nome: { pt: '2.º Intermédio e Reino Novo', en: 'Second Intermediate and New Kingdom' } },
  { slug: 'epoca-tardia', nome: { pt: '3.º Intermédio e Época Tardia', en: 'Third Intermediate and Late Period' } },
  { slug: 'ptolomaicos-romanos', nome: { pt: 'Época Ptolemaica e Romana', en: 'Ptolemaic and Roman Egypt' } },
  { slug: 'faraos', nome: { pt: 'Os faraós', en: 'The pharaohs' } },
  { slug: 'monumentos', nome: { pt: 'Monumentos e sítios', en: 'Monuments and sites' } },
  { slug: 'deuses-vida', nome: { pt: 'Deuses, escrita e vida quotidiana', en: 'Gods, writing and daily life' } }
  ]
};
export default GRUPO;
