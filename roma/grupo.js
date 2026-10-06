// Navegação entre as 9 páginas de Roma. Cada dados.js faz: grupo: { ...GRUPO, aqui: '<slug>' } ('' = página-mãe).
export const GRUPO = {
  id: 'roma',
  titulo: { pt: 'Roma — páginas', en: 'Rome — pages' },
  voltar: { pt: 'Voltar a Roma', en: 'Back to Rome' },
  itens: [
  { slug: '', nome: { pt: 'Roma (página-mãe)', en: 'Rome (main page)' } },
  { slug: 'monarquia-republica', nome: { pt: 'Monarquia e República Antiga', en: 'Monarchy and Early Republic' } },
  { slug: 'republica-tardia', nome: { pt: 'A República Tardia', en: 'The Late Republic' } },
  { slug: 'alto-imperio', nome: { pt: 'O Alto Império', en: 'The High Empire' } },
  { slug: 'crise-dominato', nome: { pt: 'Crise, Dominato e Queda', en: 'Crisis, Dominate and Fall' } },
  { slug: 'imperadores', nome: { pt: 'Imperadores e grandes figuras', en: 'Emperors and great figures' } },
  { slug: 'exercito', nome: { pt: 'Exército e guerra', en: 'Army and warfare' } },
  { slug: 'cidades-engenharia', nome: { pt: 'Cidades, monumentos e engenharia', en: 'Cities, monuments and engineering' } },
  { slug: 'religiao-vida', nome: { pt: 'Religião, direito e vida quotidiana', en: 'Religion, law and daily life' } }
  ]
};
export default GRUPO;
