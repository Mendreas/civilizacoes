// Modelo de dados de uma civilização. Copiar a pasta _modelo, mudar o nome da pasta para o id da civilização
// e preencher. Cada secção é uma lista de parágrafos em português e inglês; se faltar, aparece "em construção".
export default {
  id: 'modelo',                       // tem de ser igual ao nome da pasta e ao id em dados-civs.js
  cor: '#c9a24b',
  nome:    { pt: 'Nome da civilização', en: 'Civilization name' },
  periodo: { pt: 'c. 0 – 0',            en: 'c. 0 – 0' },
  visao:   { pt: ['Texto em português.'], en: ['Text in English.'] }
  // linha, mapa, sociedade, personalidades, legado, quiz: mesmo formato { pt: [...], en: [...] }
};
