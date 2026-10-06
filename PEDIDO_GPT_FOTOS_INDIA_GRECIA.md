# Pedido ao GPT — fotos reais da Wikimedia Commons (Índia clássica e Grécia)

Projeto: site de história «Civilizações». Preciso de **fotografias e mapas reais**, com licença livre, da Wikimedia Commons. **Não** gerar imagens por IA nesta tarefa (as cenas de IA já estão feitas).

## O que fazer, para cada página abaixo
1. Para cada linha da tabela, procurar no Wikimedia Commons (commons.wikimedia.org) um ficheiro que corresponda ao «O que é». O termo de pesquisa é só uma sugestão.
2. Aceitar apenas licenças livres: domínio público, CC0, CC BY ou CC BY-SA. Recusar «fair use» e imagens sem licença clara. Preferir boa qualidade e sem marcas de água.
3. Descarregar a versão em até **1920 px** de largura (ou a original, se menor; sem ampliar). Guardar como JPG com o nome exato da coluna «Ficheiro».
4. Se não houver nenhuma imagem adequada, **não inventar nem substituir por algo diferente**: deixar essa imagem de fora e listá-la em `em_falta.md`.

## Formato da entrega (um ZIP por página, nome `<pasta>.zip`)
Dentro do zip, tudo debaixo da pasta da página (ex.: `india-classica/maurya/`):
- `img/<ficheiro>.jpg` (as imagens)
- `fontes.json`: lista com, por imagem: `ficheiro` (ex. `india-classica/maurya/img/imu-x.jpg`), `titulo_commons`, `autor`, `licenca`, `url_licenca`, `url` (página do Commons), `descricao_original`, `largura_original`, `altura_original`
- `legendas.json`: objeto `{ "<id sem .jpg>": {"pt": "...", "en": "...", "tipo": "Commons"} }`. A legenda descreve **o que a imagem realmente mostra** (1 frase em português de Portugal e 1 em inglês; sem inventar detalhes; indicar museu/local se for conhecido).
- `CREDITOS.md`: lista legível dos créditos (autor, licença, ligação)
- `em_falta.md`: imagens que não encontraste (pode ficar vazio)

Entregar os ZIPs um a um, ou todos juntos se a conversa permitir (16 páginas, ~26 fotos cada, no total 426 fotos). Se for demasiado de uma vez, fazer por grupos e avisar o que falta.

> Nota: o prefixo de cada página (`ind-`, `imu-`, …) já faz parte do nome do ficheiro.


---

## Índia clássica (principal)

Pasta do zip: `india-classica/`  ·  Prefixo: `ind-`  ·  26 imagens

| Ficheiro | O que é | Termo de pesquisa |
|---|---|---|
| ind-mapa-mahajanapadas.jpg | Mapa dos 16 Mahajanapadas, c. 500 a.C. | Mahajanapadas map |
| ind-mapa-maurya.jpg | Mapa do Império Máuria no tempo de Ashoka | Maurya Empire map Ashoka |
| ind-mapa-gupta.jpg | Mapa do Império Gupta, c. 400 d.C. | Gupta Empire map 400 CE |
| ind-mapa-comercio.jpg | Mapa das rotas comerciais do oceano Índico e da rota da Seda, sécs. I–II d.C. | Indian Ocean trade routes Periplus map |
| ind-sanchi-estupa.jpg | Grande Estupa de Sanchi | Great Stupa Sanchi |
| ind-sanchi-torana.jpg | Porta oriental (torana) do Estupa de Sanchi | Sanchi Stupa east gateway torana |
| ind-pilar-sarnath.jpg | Capitel dos quatro leões de Ashoka, Museu de Sarnath | Lion Capital of Ashoka Sarnath Museum |
| ind-edito-rocha.jpg | Édito de pedra de Ashoka em escrita brahmi | Major Rock Edict Ashoka Brahmi |
| ind-pataliputra-ruinas.jpg | Vestígios da sala de colunas máuria em Kumhrar, Patna | Kumhrar Patna Mauryan pillared hall |
| ind-bodh-gaya.jpg | Templo de Mahabodhi, Bodh Gaya | Mahabodhi Temple Bodh Gaya |
| ind-buda-mathura.jpg | Buda sentado em arenito vermelho, Mathura, período kushana | Seated Buddha Mathura Kushan red sandstone |
| ind-nalanda-ruinas.jpg | Ruínas do mosteiro de Nalanda | Nalanda ruins Bihar |
| ind-buda-gandhara.jpg | Buda de pé em estilo de Gandhara | Standing Buddha Gandhara |
| ind-moeda-kanishka.jpg | Moeda de ouro de Kanishka | Kanishka gold coin Kushan |
| ind-moeda-gupta.jpg | Moeda de ouro (dinar) gupta, Samudragupta ou Chandragupta II | Gupta gold dinar Samudragupta |
| ind-rigveda-ms.jpg | Manuscrito do Rigveda em devanágari | Rigveda manuscript Devanagari |
| ind-ramayana-ms.jpg | Folha ilustrada de um manuscrito do Ramayana | Ramayana manuscript illustrated folio |
| ind-moeda-romana.jpg | Moedas romanas de ouro (aurei) de Augusto, tipo encontrado em depósitos na Índia | Roman aureus Augustus hoard India |
| ind-karli.jpg | Salão (chaitya) da gruta de Karli | Karla Caves chaitya hall |
| ind-pilar-allahabad.jpg | Pilar de Allahabad (Prayagraj) com éditos de Ashoka e inscrição de Samudragupta | Allahabad Pillar Prayagraj Ashoka |
| ind-buda-gupta-sarnath.jpg | Buda a pregar, arenito, período Gupta, Museu de Sarnath | Buddha preaching Sarnath Gupta period |
| ind-ajanta-pintura.jpg | Pintura do Bodisatva Padmapani, Gruta 1 de Ajanta | Ajanta Cave 1 Padmapani painting |
| ind-ajanta-gruta.jpg | Vista geral das grutas de Ajanta | Ajanta Caves panorama |
| ind-deogarh.jpg | Templo de Dashavatara, Deogarh | Dashavatara Temple Deogarh |
| ind-pilar-ferro.jpg | Pilar de Ferro de Delhi, complexo Qutb | Iron Pillar of Delhi |
| ind-bakhshali.jpg | Folha do manuscrito de Bakhshali, Biblioteca Bodleian | Bakhshali manuscript Bodleian |

---

## Védica e Mahajanapadas

Pasta do zip: `india-classica/vedica-mahajanapadas/`  ·  Prefixo: `ive-`  ·  26 imagens

| Ficheiro | O que é | Termo de pesquisa |
|---|---|---|
| ive-mapa-mahajanapadas.jpg | Mapa dos 16 Mahajanapadas, c. 500 a.C. | Mahajanapadas map |
| ive-mapa-india-vedica.jpg | Mapa do norte da Índia no período védico (Rigveda e período védico tardio) | Vedic India map Rigvedic tribes |
| ive-pgw.jpg | Cerâmica cinzenta pintada (Painted Grey Ware) do Doab | Painted Grey Ware |
| ive-rigveda-ms.jpg | Manuscrito do Rigveda em escrita devanágari | Rigveda manuscript Devanagari |
| ive-moedas-punch.jpg | Moedas de prata com marcas de punção (karshapana), sécs. V–III a.C. | Punch-marked coins Magadha karshapana |
| ive-persepolis-indianos.jpg | Relevo da Apadana de Persépolis com a delegação indiana a levar tributo | Persepolis Apadana relief Indian delegation |
| ive-kharosthi-shahbazgarhi.jpg | Édito de Ashoka em kharosthi, Shahbazgarhi (escrita derivada do aramaico) | Shahbazgarhi rock edict Kharosthi |
| ive-mapa-nandas.jpg | Mapa do Império Nanda, c. 323 a.C. | Nanda Empire map |
| ive-mapa-alexandre.jpg | Mapa da campanha de Alexandre na Índia, 327–325 a.C. | Alexander the Great campaign India map Hydaspes |
| ive-rajgir-muralha.jpg | Muros ciclópicos de Rajgir (Rajagriha), Bihar | Cyclopean wall Rajgir |
| ive-vaishali-pilar.jpg | Pilar de Ashoka e estupa em Vaishali, Bihar | Ashoka pillar Vaishali Kolhua |
| ive-ganges-varanasi.jpg | O Ganges e os ghats de Varanasi | Varanasi ghats Ganges |
| ive-lumbini-pilar.jpg | Pilar de Ashoka em Lumbini, Nepal | Ashoka pillar Lumbini |
| ive-bodh-gaya.jpg | Templo de Mahabodhi, Bodh Gaya | Mahabodhi Temple Bodh Gaya |
| ive-kushinagar-ramabhar.jpg | Estupa de Ramabhar, Kushinagar | Ramabhar stupa Kushinagar |
| ive-jetavana-bharhut.jpg | Relevo de Bharhut: compra do Jetavana por Anathapindika | Bharhut Jetavana Anathapindika relief |
| ive-taxila-bhir.jpg | Vestígios do Bhir Mound, Taxila | Bhir Mound Taxila |
| ive-naqsh-rustam.jpg | Túmulo de Dario I em Naqsh-e Rustam (Irão) | Tomb of Darius I Naqsh-e Rustam |
| ive-daric.jpg | Dárico de ouro aqueménida (rei persa de arqueiro) | Achaemenid gold daric archer |
| ive-agnicayana.jpg | Ritual Agnicayana (altar de tijolos em forma de ave), Kerala, fotografia moderna | Agnicayana ritual Kerala |
| ive-upanishad-ms.jpg | Manuscrito de um Upanishad em escrita devanágari | Upanishad manuscript Devanagari |
| ive-ashtadhyayi-ms.jpg | Manuscrito do Ashtadhyayi de Panini | Ashtadhyayi Panini manuscript |
| ive-mahavira-jaina.jpg | Imagem de Mahavira (escultura jainista, época posterior) | Mahavira Jain sculpture |
| ive-ajatashatru-bharhut.jpg | Relevo de Bharhut: Ajatashatru a venerar o Buda | Ajatashatru Buddha Bharhut relief |
| ive-poro-decadracma.jpg | Decadracma de prata de Alexandre (elefantes e cavaleiro), ligado à vitória sobre Poro | Alexander Porus decadrachm elephant |
| ive-alexandre-herma.jpg | Herma de Azara (cópia de retrato de Alexandre atribuído a Lisipo), Louvre | Azara herm Alexander Louvre |

---

## Máuria

Pasta do zip: `india-classica/maurya/`  ·  Prefixo: `imu-`  ·  25 imagens

| Ficheiro | O que é | Termo de pesquisa |
|---|---|---|
| imu-mapa-maurya.jpg | Mapa do Império Máuria no tempo de Ashoka | Maurya Empire map Ashoka |
| imu-mapa-editos.jpg | Mapa dos locais de éditos de Ashoka | Edicts of Ashoka map |
| imu-pilar-sarnath.jpg | Capitel dos quatro leões de Sarnath, Museu de Sarnath | Lion Capital of Ashoka Sarnath Museum |
| imu-sanchi-estupa.jpg | Grande Estupa de Sanchi | Great Stupa Sanchi |
| imu-moeda-seleuco.jpg | Moeda de Seleuco I Nicator | Seleucus I Nicator coin |
| imu-dhauli-elefante.jpg | Elefante esculpido na rocha em Dhauli, Odisha | Dhauli elephant rock-cut |
| imu-mihintale.jpg | Mihintale, Sri Lanka | Mihintale Sri Lanka |
| imu-kumhrar.jpg | Ruínas da sala de colunas máuria em Kumhrar, Patna | Kumhrar Patna Mauryan pillared hall |
| imu-bulandibagh.jpg | Estacas de madeira da paliçada, Bulandibagh, Patna | Bulandibagh Pataliputra wooden palisade |
| imu-taxila-dharmarajika.jpg | Estupa de Dharmarajika, Taxila | Dharmarajika stupa Taxila |
| imu-sanchi-pilar.jpg | Pilar de Ashoka junto à porta sul de Sanchi | Ashoka pillar Sanchi |
| imu-lumbini-pilar.jpg | Pilar de Ashoka em Lumbini | Ashoka pillar Lumbini |
| imu-bodh-gaya.jpg | Templo de Mahabodhi, Bodh Gaya | Mahabodhi Temple Bodh Gaya |
| imu-barabar-sudama.jpg | Gruta de Sudama, Barabar | Sudama cave Barabar |
| imu-barabar-lomas.jpg | Fachada da gruta de Lomas Rishi, Barabar | Lomas Rishi cave Barabar |
| imu-arthashastra-ms.jpg | Manuscrito do Arthashastra | Arthashastra manuscript |
| imu-moeda-punch.jpg | Moeda de prata com marca de punção (karshapana) | Punch-marked coin Maurya karshapana |
| imu-brahmi-alfabeto.jpg | Quadro da escrita brahmi dos éditos de Ashoka | Ashoka Brahmi script chart |
| imu-edito-girnar.jpg | Rocha de Girnar com os Éditos de Pedra Maiores | Girnar Ashoka rock edicts |
| imu-edito-kandahar.jpg | Édito de Ashoka em grego, Kandahar | Kandahar Greek Edict of Ashoka |
| imu-didarganj.jpg | Yakshi de Didarganj, Museu de Patna | Didarganj Yakshi Patna Museum |
| imu-pilar-lauriya.jpg | Pilar de Lauriya-Nandangarh com leão | Lauriya Nandangarh Ashoka pillar lion |
| imu-pilar-rampurva.jpg | Capitel de touro de Rampurva | Rampurva bull capital |
| imu-allahabad-pilar.jpg | Pilar de Allahabad (Prayagraj) | Allahabad pillar Ashoka |
| imu-prinsep.jpg | Retrato de James Prinsep | James Prinsep portrait |

---

## Pós-Máuria

Pasta do zip: `india-classica/pos-maurya/`  ·  Prefixo: `ipm-`  ·  28 imagens

| Ficheiro | O que é | Termo de pesquisa |
|---|---|---|
| ipm-mapa-india-200.jpg | Mapa político do subcontinente c. 200 d.C. (Kushanas, Kshatrapas ocidentais, Satavahanas, reinos do sul) | Map of India 200 CE Kushan Satavahana Western Satraps |
| ipm-sanchi-torana.jpg | Porta (torana) do Grande Estupa de Sanchi, Madhya Pradesh (a porta sul, leste ou norte, à escolha) | Sanchi Stupa 1 Gateway torana |
| ipm-moeda-menandro.jpg | Moeda de prata (tetradracma ou dracma) de Menandro I com Atena Alkidemos no reverso | Menander I coin Athena Alkidemos silver |
| ipm-kanishka-estatua.jpg | Estátua sem cabeça de Kanishka, de Mat, Museu de Mathura | Statue of Kanishka Mathura Museum headless |
| ipm-moedas-romanas-india.jpg | Moedas romanas (áureos, denários) de tesouros achados na Índia (ex.: Museu Britânico ou Museu de Chennai) | Roman coins found in India aureus hoard |
| ipm-heliodoro-pilar.jpg | Pilar de Heliodoro, Vidisha (Besnagar), Madhya Pradesh | Heliodorus pillar Besnagar Vidisha |
| ipm-sirkap-taxila.jpg | Ruínas de Sirkap, Taxila, Paquistão | Sirkap Taxila ruins |
| ipm-taxila-dharmarajika.jpg | Estupa de Dharmarajika, Taxila | Dharmarajika Stupa Taxila |
| ipm-karli-chaitya.jpg | Interior do grande chaitya das grutas de Karli, Maharashtra | Karla Caves chaitya interior |
| ipm-amaravati-relevo.jpg | Relevo de calcário do estupa de Amaravati (Museu Britânico ou Museu Governamental de Chennai) | Amaravati stupa limestone relief British Museum |
| ipm-hathigumpha.jpg | Gruta de Hathigumpha com a inscrição de Kharavela, Udayagiri, Odisha | Hathigumpha inscription Udayagiri |
| ipm-peutinger-muziris.jpg | Pormenor da Tabula Peutingeriana com a Índia e o «Templum Augusti» junto de Muziris | Tabula Peutingeriana India Muziris Templum Augusti |
| ipm-arikamedu.jpg | Sítio arqueológico de Arikamedu, Puducherry (tanques de tinturaria, muros de tijolo) | Arikamedu archaeological site Puducherry |
| ipm-bharhut-medalhao.jpg | Medalhão da balaustrada de Bharhut com cena de Jataka (Museu Indiano, Calcutá) | Bharhut stupa railing medallion Indian Museum Kolkata |
| ipm-bharhut-yakshi.jpg | Yakshi Chulakoka Devata, balaustrada de Bharhut (Museu Indiano, Calcutá) | Chulakoka Devata Bharhut yakshi |
| ipm-buda-gandhara.jpg | Buda de pé em xisto, estilo de Gandhara (Museu Nacional de Tóquio ou Museu de Lahore) | Standing Buddha Gandhara schist |
| ipm-buda-mathura.jpg | Buda sentado em arenito vermelho, escola de Mathura, época kushana | Seated Buddha Mathura Kushan red sandstone |
| ipm-manuscrito-gandhari.jpg | Rolo de casca de bétula em kharosthi (Gandhari), Biblioteca Britânica | Gandhara Buddhist texts birch bark scroll British Library Kharosthi |
| ipm-moeda-kanishka-buda.jpg | Moeda de ouro de Kanishka com o Buda de pé e legenda BODDO | Kanishka gold coin Buddha BODDO |
| ipm-moeda-satavahana-navio.jpg | Moeda de chumbo de Yajna Sri Satakarni com navio de dois mastros | Satavahana coin ship Yajna Sri Satakarni lead |
| ipm-papiro-muziris.jpg | Papiro de Muziris (P.Vindob. G 40822), Biblioteca Nacional da Áustria, Viena | Muziris papyrus Vienna P.Vindob. G 40822 |
| ipm-begram-marfins.jpg | Placas de marfim indianas do tesouro de Begram (Museu Guimet, Paris, ou Museu de Cabul) | Begram ivories Guimet Museum |
| ipm-junagadh-rudradaman.jpg | Rochedo de Junagadh (Girnar) com a inscrição de Rudradaman I | Junagadh rock inscription Rudradaman Ashoka Girnar |
| ipm-sangam-manuscrito-palma.jpg | Manuscrito tâmil em folhas de palmeira (ex.: de Purananuru, Sangam) | Tamil palm leaf manuscript Sangam literature Purananuru |
| ipm-mathura-yakshi.jpg | Yakshi em arenito vermelho, Mathura, época kushana (Museu de Mathura ou Museu Indiano) | Mathura yakshi red sandstone Kushan |
| ipm-ajanta-gruta10.jpg | Pintura mural da Gruta 10 de Ajanta (séc. I a.C. – I d.C.) | Ajanta Cave 10 painting Chaddanta Jataka |
| ipm-kallanai.jpg | Dique de Kallanai (Grand Anicut), rio Kaveri, Tamil Nadu | Kallanai dam Grand Anicut Kaveri |
| ipm-pattanam.jpg | Escavação em Pattanam, Kerala (cais de tijolo, canoa), local proposto para Muziris | Pattanam excavation Muziris Kerala |

---

## Gupta e medieval

Pasta do zip: `india-classica/gupta-medieval/`  ·  Prefixo: `igm-`  ·  25 imagens

| Ficheiro | O que é | Termo de pesquisa |
|---|---|---|
| igm-mapa-gupta.jpg | Mapa do Império Gupta, c. 400 d.C., no tempo de Chandragupta II | Gupta Empire map 400 CE |
| igm-mapa-india-1000.jpg | Mapa político da Índia c. 1000 d.C. (Cholas, Chalukyas, Ghaznávidas, etc.) | India political map 1000 CE Chola Ghaznavid |
| igm-moeda-chandragupta-kumaradevi.jpg | Moeda de ouro gupta do tipo «Chandragupta e Kumaradevi» | Chandragupta I Kumaradevi gold coin |
| igm-moeda-samudragupta.jpg | Moeda de ouro de Samudragupta, tipo «tocador de vina» | Samudragupta lyrist gold coin |
| igm-moeda-chandragupta-ii.jpg | Moeda de ouro do tempo de Chandragupta II | Chandragupta II gold dinar |
| igm-udayagiri.jpg | Relevo de Vishnu como javali (Varaha), grutas de Udayagiri, Madhya Pradesh | Udayagiri Caves Varaha relief |
| igm-bhitargaon.jpg | Templo de tijolo de Bhitargaon, período Gupta | Bhitargaon temple Gupta brick |
| igm-aihole-durga.jpg | Templo de Durga, Aihole | Durga temple Aihole |
| igm-pattadakal.jpg | Conjunto de templos de Pattadakal | Pattadakal temples group |
| igm-mamallapuram-costa.jpg | Templo da Costa, Mamallapuram | Shore Temple Mahabalipuram |
| igm-mamallapuram-ratha.jpg | Pancha Rathas (cinco rathas), Mamallapuram | Pancha Rathas Mahabalipuram |
| igm-ellora-kailasa.jpg | Templo Kailasa, gruta 16, Ellora | Kailasa temple Ellora Cave 16 |
| igm-brihadisvara.jpg | Templo Brihadisvara, Thanjavur | Brihadisvara Temple Thanjavur |
| igm-gangaikonda.jpg | Templo de Gangaikonda Cholapuram | Gangaikonda Cholapuram temple |
| igm-nataraja.jpg | Bronze chola de Shiva Nataraja | Nataraja bronze Chola Shiva |
| igm-khajuraho.jpg | Templo Kandariya Mahadeva, Khajuraho | Kandariya Mahadeva Temple Khajuraho |
| igm-dilwara.jpg | Interior de um templo jainista de Dilwara, Mount Abu | Dilwara Temples interior Mount Abu |
| igm-modhera.jpg | Templo do Sol de Modhera com o reservatório | Modhera Sun Temple |
| igm-konark.jpg | Roda de pedra do templo do Sol de Konark | Konark Sun Temple wheel |
| igm-qutb-minar.jpg | Qutb Minar, Deli | Qutb Minar Delhi |
| igm-hampi-vittala.jpg | «Carro» de pedra do templo de Vittala, Hampi | Stone chariot Vittala Temple Hampi |
| igm-hampi-ruinas.jpg | Paisagem de ruínas de Hampi (Vijayanagara) | Hampi ruins panorama Matanga hill |
| igm-mahmud.jpg | Mahmud de Ghazni a receber o manto do califa, miniatura persa (Rashid al-Din) | Mahmud of Ghazni robe caliph al-Qadir miniature |
| igm-xuanzang.jpg | Xuanzang, pintura japonesa do período Kamakura (séc. XIV), Museu Nacional de Tóquio | Xuanzang Kamakura painting Tokyo National Museum |
| igm-vasco-gama.jpg | Retrato anónimo de Vasco da Gama, c. 1525 | Vasco da Gama anonymous portrait c. 1525 |

---

## Religiões e filosofia

Pasta do zip: `india-classica/religioes-filosofia/`  ·  Prefixo: `irf-`  ·  27 imagens

| Ficheiro | O que é | Termo de pesquisa |
|---|---|---|
| irf-varanasi-ghats.jpg | Os ghats de Varanasi (Ganges), vista ao amanhecer | Varanasi ghats Ganges sunrise |
| irf-mapa-budismo.jpg | Mapa da expansão do budismo a partir da Índia | Spread of Buddhism map |
| irf-rigveda-manuscrito.jpg | Manuscrito do Rigveda em escrita devanágari (cópia tardia) | Rigveda manuscript Devanagari |
| irf-nataraja-chola.jpg | Bronze Chola de Shiva Nataraja (sul da Índia, sécs. XI – XII) | Shiva Nataraja Chola bronze |
| irf-lumbini-pilar.jpg | Pilar de Ashoka em Lumbini, Nepal, com a inscrição (c. 249 a.C.) | Ashoka pillar Lumbini inscription |
| irf-bodh-gaya.jpg | Templo de Mahabodhi, Bodh Gaya (Bihar) | Mahabodhi Temple Bodh Gaya |
| irf-dhamek-stupa.jpg | Dhamek Stupa, Sarnath (c. 500 d.C.) | Dhamek Stupa Sarnath |
| irf-barabar-sudama.jpg | Gruta Sudama, colinas de Barabar (Bihar), escavada para os ajivikas | Sudama Cave Barabar Hills |
| irf-gomateshwara.jpg | Estátua de Gomateshwara (Bahubali), Shravanabelagola, c. 981 | Gomateshwara statue Shravanabelagola |
| irf-kailasa-ellora.jpg | Templo de Kailasa (Gruta 16), Ellora, séc. VIII | Kailasa Temple Ellora Cave 16 |
| irf-brihadisvara.jpg | Templo de Brihadisvara, Thanjavur (concluído em 1010) | Brihadisvara Temple Thanjavur |
| irf-cheraman.jpg | Mesquita de Cheraman Juma, Kodungallur (Kerala) | Cheraman Juma Masjid Kodungallur |
| irf-quwwat.jpg | Pátio e colunas da mesquita Quwwat-ul-Islam, complexo do Qutb, Deli (1193) | Quwwat-ul-Islam Mosque Qutb complex Delhi pillars |
| irf-pashupati.jpg | «Selo de Pashupati», Mohenjo-daro, Museu Nacional de Deli (a interpretação como «proto-Shiva» é debatida) | Pashupati seal Mohenjo-daro |
| irf-upanishad-manuscrito.jpg | Manuscrito sânscrito de uma Upanishad (cópia tardia; confirmar qual ao escolher a foto) | Upanishad manuscript Sanskrit |
| irf-heliodoro.jpg | Pilar de Heliodoro, Besnagar (Vidisha, Madhya Pradesh), c. 113 a.C. | Heliodorus pillar Besnagar |
| irf-elephanta.jpg | Sadashiva (Shiva de três faces), grutas de Elephanta (Maharashtra) | Sadashiva Elephanta Caves |
| irf-vishnu-deogarh.jpg | Vishnu Anantashayana, relevo do templo de Dashavatara, Deogarh, c. 500 d.C. | Vishnu Anantashayana Deogarh Dashavatara temple |
| irf-mahishasuramardini.jpg | Durga a vencer Mahishasura, relevo pallava, Mamallapuram, séc. VII | Mahishasuramardini relief Mamallapuram |
| irf-gita-manuscrito.jpg | Manuscrito sânscrito do Bhagavad Gita (devanágari; cópia tardia) | Bhagavad Gita manuscript Sanskrit |
| irf-ramayana-mewar.jpg | Ilustração do Ramayana de Mewar (c. 1650), Biblioteca Britânica: Rama, Sita e Lakshmana | Mewar Ramayana British Library Rama Sita Lakshmana |
| irf-buda-gandhara.jpg | Buda de pé, escola de Gandhara, sécs. I – II d.C. (escolher uma peça com museu identificado) | Standing Buddha Gandhara |
| irf-kalpasutra.jpg | Página ilustrada de um manuscrito jainista do Kalpa Sutra (Gujarat, séc. XV; confirmar museu e data ao escolher) | Kalpasutra manuscript Jain painting Mahavira |
| irf-xuanzang.jpg | Xuanzang a caminho da Índia, pintura japonesa do séc. XIV, Museu Nacional de Tóquio | Xuanzang Tokyo National Museum painting |
| irf-prambanan.jpg | Relevo do Ramayana no templo de Shiva, Prambanan (Java, séc. IX) | Prambanan Ramayana relief |
| irf-ajmer.jpg | Santuário (dargah) de Moinuddin Chishti, Ajmer (Rajastão) | Ajmer Sharif Dargah |
| irf-manusmriti-manuscrito.jpg | Manuscrito sânscrito da Manusmriti (cópia tardia; confirmar a identificação ao escolher a foto) | Manusmriti manuscript Sanskrit |

---

## Ciência e arte

Pasta do zip: `india-classica/ciencia-arte/`  ·  Prefixo: `ica-`  ·  28 imagens

| Ficheiro | O que é | Termo de pesquisa |
|---|---|---|
| ica-ajanta-pintura.jpg | Pintura do Bodisatva Padmapani, Gruta 1 de Ajanta | Ajanta Cave 1 Padmapani painting |
| ica-bakhshali.jpg | Folha do manuscrito de Bakhshali, Biblioteca Bodleian, Oxford | Bakhshali manuscript Bodleian folio |
| ica-pilar-ferro.jpg | Pilar de Ferro de Delhi, complexo de Qutb, Mehrauli | Iron Pillar of Delhi Qutb complex |
| ica-kailasa.jpg | Templo de Kailasa (Gruta 16), Ellora, vista geral | Kailasa Temple Ellora Cave 16 |
| ica-nataraja.jpg | Shiva Nataraja em bronze, época Chola (museu: confirmar ao escolher a foto) | Chola bronze Shiva Nataraja |
| ica-mapa-chola.jpg | Mapa do Império Chola no seu auge, c. 1030 d.C. | Chola Empire map 1030 |
| ica-sanchi-torana.jpg | Porta oriental (torana) do Grande Estupa de Sanchi | Sanchi Stupa 1 east gateway torana |
| ica-karli.jpg | Salão (chaitya) das grutas de Karli, Maharashtra | Karla Caves chaitya hall interior |
| ica-ajanta-gruta.jpg | Vista geral das grutas de Ajanta | Ajanta Caves panorama |
| ica-deogarh.jpg | Templo de Dashavatara, Deogarh | Dashavatara Temple Deogarh |
| ica-mahabalipuram.jpg | Templo da Costa (Shore Temple), Mahabalipuram | Shore Temple Mahabalipuram |
| ica-brihadisvara.jpg | Brihadisvara de Thanjavur, torre (vimana) | Brihadisvara Temple Thanjavur vimana |
| ica-khajuraho.jpg | Templos do grupo ocidental de Khajuraho | Khajuraho Western Group of Temples Kandariya Mahadeva |
| ica-konark.jpg | Roda de pedra do Templo do Sol de Konark | Konark Sun Temple wheel |
| ica-gwalior-zero.jpg | Inscrição do zero, templo de Chaturbhuj, Gwalior (876 d.C.) | Gwalior Chaturbhuj temple inscription zero 876 |
| ica-sushruta-ms.jpg | Folha de manuscrito da Sushruta Samhita (folha de palmeira) | Sushruta Samhita manuscript palm leaf |
| ica-bharhut.jpg | Relevo da balaustrada do estupa de Bharhut, Museu Indiano, Calcutá | Bharhut Stupa railing relief Indian Museum Kolkata |
| ica-buda-gandhara.jpg | Buda de pé, xisto, estilo de Gandhara | Standing Buddha Gandhara schist |
| ica-buda-mathura.jpg | Buda sentado em arenito vermelho de Mathura, período Kushana | Seated Buddha Mathura Kushan red sandstone |
| ica-buda-sarnath.jpg | Buda a pregar, arenito, época Gupta, Museu de Sarnath | Buddha preaching Sarnath Gupta period museum |
| ica-moeda-lirista.jpg | Moeda de ouro de Samudragupta do tipo «tocador de lira» (veena) | Samudragupta lyrist coin gold |
| ica-kalidasa-shakuntala.jpg | Pintura de Raja Ravi Varma, «Shakuntala» (1870), a olhar para Dushyanta | Raja Ravi Varma Shakuntala looking back Dushyanta |
| ica-aryabhata-estatua.jpg | Estátua moderna de Aryabhata no IUCAA, Pune (representação imaginada) | Aryabhata statue IUCAA Pune |
| ica-tiruvalluvar-estatua.jpg | Estátua de Tiruvalluvar, Kanyakumari (2000) | Thiruvalluvar Statue Kanyakumari |
| ica-panchatantra.jpg | Ilustração de um manuscrito árabe de Kalila e Dimna (séc. XIII), ex.: BnF | Kalila wa Dimna manuscript 13th century illustration |
| ica-pompeia-lakshmi.jpg | «Lakshmi de Pompeia», estatueta de marfim, Museu Arqueológico Nacional de Nápoles | Pompeii Lakshmi ivory statuette |
| ica-rani-ki-vav.jpg | Escadaria do poço escalonado Rani-ki-vav, Patan, Gujarate | Rani ki vav Patan stepwell |
| ica-hampi-vittala.jpg | «Carro de pedra» do templo de Vittala, Hampi | Stone chariot Vittala Temple Hampi |

---

## Sociedade e comércio

Pasta do zip: `india-classica/sociedade-comercio/`  ·  Prefixo: `isc-`  ·  25 imagens

| Ficheiro | O que é | Termo de pesquisa |
|---|---|---|
| isc-mapa-comercio.jpg | Mapa das rotas comerciais do oceano Índico e da rota da Seda, sécs. I–II d.C. | Indian Ocean trade routes Periplus map |
| isc-mapa-rota-seda.jpg | Mapa da rota da Seda, por terra e por mar | Silk Road map land and maritime routes |
| isc-arthashastra-ms.jpg | Manuscrito do Arthashastra de Kautilya (redescoberto em Mysore em 1905) | Arthashastra manuscript Kautilya |
| isc-bharhut-jetavana.jpg | Relevo de Bharhut com a compra do parque de Jeta por Anathapindika (moedas no chão), Museu Indiano, Calcutá | Bharhut Jetavana Anathapindika relief Indian Museum |
| isc-sanchi-torana.jpg | Porta (torana) do Grande Estupa de Sanchi (porta sul, com inscrição dos marfinistas de Vidisha) | Sanchi Stupa southern gateway torana |
| isc-muziris-papiro.jpg | O «papiro de Muziris» (Biblioteca Nacional da Áustria, P.Vindob. G 40822) | Muziris papyrus Vienna Hermapollon |
| isc-junagadh.jpg | Rocha de Junagadh (Girnar) com inscrições de Ashoka, Rudradaman e Skandagupta | Junagadh rock inscription Ashoka Rudradaman |
| isc-kandahar-edito.jpg | Édito bilingue (grego e aramaico) de Ashoka, Kandahar | Kandahar Bilingual Rock Inscription Ashoka |
| isc-taxila-dharmarajika.jpg | Estupa de Dharmarajika, Taxila (Paquistão) | Dharmarajika stupa Taxila |
| isc-taxila-sirkap.jpg | Ruínas da cidade de Sirkap, Taxila (ruas em quadrícula) | Sirkap Taxila ruins |
| isc-begram-marfim.jpg | Placa de marfim indiana do tesouro de Begram (escavações francesas de 1936–1940; achados repartidos entre o Museu Guimet e o Museu Nacional do Afeganistão, Cabul) | Begram ivory plaque |
| isc-nasik-pandavleni.jpg | Grutas budistas de Pandavleni, Nashik | Pandavleni Caves Nashik |
| isc-pattanam.jpg | Escavação de Pattanam (Kerala, a cerca de 30 km a norte de Kochi), sítio associado a Muziris (identificação debatida; alternativa tradicional: Kodungallur) | Pattanam excavation Muziris |
| isc-arikamedu.jpg | Arikamedu, perto de Pondicherry (sítio investigado desde os anos 1930 e escavado por Wheeler em 1945; ou cerâmica romana encontrada) | Arikamedu Pondicherry |
| isc-oc-eo.jpg | Vestígios ou objetos de Oc Eo (reino de Funan, delta do Mekong) | Oc Eo Funan archaeological site |
| isc-borobudur-navio.jpg | Relevo do navio de Borobudur (Java, c. 800 d.C.) | Borobudur ship relief |
| isc-peutinger.jpg | Segmento da Tábua de Peutinger com a Índia | Tabula Peutingeriana India segment |
| isc-nalanda-ruinas.jpg | Ruínas do mosteiro-universidade de Nalanda | Nalanda ruins Bihar |
| isc-mathura-yakshi.jpg | Figura feminina (yakshi) de pilar de balaustrada de Mathura, período kushana | Mathura railing pillar yakshi Kushan |
| isc-moeda-punch.jpg | Moedas de prata com marca de punção (karshapana) | Punch-marked coins karshapana |
| isc-moeda-satavahana.jpg | Moeda satavahana com navio de dois mastros (atribuída a Yajna Sri Satakarni ou a Vasishthiputra Pulumavi; c. séc. II d.C.) | Satavahana coin ship Yajna Sri Satakarni |
| isc-moeda-gupta.jpg | Dinar de ouro do período Gupta | Gupta gold dinar |
| isc-moeda-romana-india.jpg | Áureos (ouro) e denários (prata) romanos achados em depósitos no sul da Índia | Roman coins hoard South India |
| isc-ajanta-cena.jpg | Pintura de cena de corte e quotidiano, Ajanta, Gruta 17 | Ajanta Cave 17 painting |
| isc-kanishka-estatua.jpg | Estátua sem cabeça de Kanishka, Mathura (casaco, botas e espada) | Kanishka statue Mathura Museum |

---

## Grécia (principal)

Pasta do zip: `grecia/`  ·  Prefixo: `gre-`  ·  29 imagens

| Ficheiro | O que é | Termo de pesquisa |
|---|---|---|
| gre-mapa-egeu.jpg | Mapa do mundo grego / mar Egeu, período clássico | Map of Ancient Greece classical period |
| gre-acropole-atenas.jpg | Acrópole de Atenas, vista do Areópago, com o Parténon | Acropolis of Athens from Areopagus |
| gre-mapa-helenismo.jpg | Mapa dos reinos helenísticos, c. 240 a.C. | Map of Hellenistic kingdoms 240 BC |
| gre-cnossos-fresco-touros.jpg | Fresco minoico do salto ao touro, Cnossos; Museu de Heraclião | Bull-leaping fresco Knossos Heraklion Archaeological Museum |
| gre-mascara-agamemnon.jpg | «Máscara de Agamémnon», ouro, Micenas; Museu Arqueológico Nacional, Atenas | Mask of Agamemnon National Archaeological Museum Athens |
| gre-linear-b.jpg | Tabuinha em Linear B, Pilos; Museu Arqueológico Nacional, Atenas | Linear B tablet Pylos National Archaeological Museum Athens |
| gre-vaso-dipylon.jpg | Vaso geométrico do estilo de Dípilon, Atenas, c. 750 a.C. | Dipylon Master geometric krater National Archaeological Museum |
| gre-ostracon-temistocles.jpg | Ostraka com o nome de Temístocles; Museu da Ágora Antiga | Ostraka Themistocles Agora Museum |
| gre-pericles-busto.jpg | Busto de Péricles, cópia romana (Vaticano ou Museu Britânico) | Bust of Pericles Pio-Clementino Vatican |
| gre-mosaico-alexandre.jpg | Mosaico de Alexandre, Casa do Fauno, Pompeia; Museu de Nápoles | Alexander Mosaic Naples National Archaeological Museum |
| gre-mapa-colonizacao.jpg | Mapa da colonização grega, séculos VIII-VI a.C. | Map of Greek colonisation 8th-6th centuries BC |
| gre-micenas-porta-leoes.jpg | Porta dos Leões, Micenas | Lion Gate Mycenae |
| gre-delfos-tholos.jpg | Tholos de Delfos, santuário de Atena Pronaia | Tholos Delphi Athena Pronaia |
| gre-epidauro-teatro.jpg | Teatro de Epidauro | Theatre of Epidaurus |
| gre-kleroterion.jpg | Fragmento de kleroterion, máquina de sorteio; Museu da Ágora Antiga | Kleroterion Agora Museum Athens |
| gre-moeda-coruja.jpg | Tetradracma ateniense de prata, a «coruja» | Athenian tetradrachm owl coin |
| gre-papiro-euclides.jpg | Papiro de Oxirrinco (P.Oxy. 29), fragmento dos Elementos de Euclides | Oxyrhynchus papyrus Euclid Elements diagram |
| gre-antikythera.jpg | Fragmento principal do Mecanismo de Anticítera; Museu Arqueológico Nacional | Antikythera mechanism fragment A National Archaeological Museum |
| gre-ordens-arquitetura.jpg | Esquema das ordens dórica, jónica e coríntia | Greek architectural orders Doric Ionic Corinthian diagram |
| gre-simposio-vaso.jpg | Cena de simpósio em taça ática de figuras vermelhas, c. 480 a.C. | Symposium scene Attic red-figure kylix |
| gre-hoplita-capacete.jpg | Elmo coríntio de bronze, época arcaica | Corinthian helmet bronze |
| gre-trirreme-olympias.jpg | Trirreme Olympias, réplica de 1987 | Olympias trireme replica |
| gre-socrates-busto.jpg | Busto de Sócrates, cópia romana | Socrates bust Roman copy Louvre |
| gre-platao-busto.jpg | Busto de Platão, cópia romana | Plato bust Roman copy |
| gre-aristoteles-busto.jpg | Busto de Aristóteles, cópia romana | Aristotle bust Roman copy |
| gre-vitoria-samotracia.jpg | Vitória de Samotrácia (Nike), c. 190 a.C.; Louvre | Winged Victory of Samothrace Louvre |
| gre-laocoonte.jpg | Grupo escultórico do Laocoonte; Museus do Vaticano | Laocoon and His Sons Vatican Museums |
| gre-parthenon-hoje.jpg | Parténon, Acrópole de Atenas, com andaimes de restauro | Parthenon Athens scaffolding restoration |
| gre-escola-atenas-rafael.jpg | A Escola de Atenas, fresco de Rafael, 1509-1511 | School of Athens Raphael |

---

## Egeu e arcaica

Pasta do zip: `grecia/egeu-arcaica/`  ·  Prefixo: `gea-`  ·  26 imagens

| Ficheiro | O que é | Termo de pesquisa |
|---|---|---|
| gea-mapa-egeu-bronze.jpg | Mapa do Egeu na Idade do Bronze (Creta, Cíclades, centros micénicos) | Map of Bronze Age Aegean Mycenaean Minoan sites |
| gea-idolo-ciclades.jpg | Ídolo cicládico de braços cruzados, mármore, c. 2800–2300 a.C. | Cycladic figurine folded arm type |
| gea-mapa-colonias.jpg | Mapa das colónias gregas e fenícias, séculos VIII–VI a.C. | Map of Greek and Phoenician colonies 8th 6th century BC |
| gea-kouros-anavyssos.jpg | Kouros de Anavisos, c. 530 a.C., Museu Arqueológico Nacional, Atenas | Anavyssos Kouros National Archaeological Museum Athens |
| gea-festo-disco.jpg | Disco de Festo, c. 1700 a.C., Museu Arqueológico de Heraclião | Phaistos Disc Heraklion Archaeological Museum |
| gea-akrotiri-fresco.jpg | Fresco do «Pescador», Akrotiri, Tera | Akrotiri fisherman fresco Thera |
| gea-circulo-a.jpg | Círculo de Túmulos A, Micenas | Grave Circle A Mycenae |
| gea-linear-a.jpg | Tabuinha em Linear A, Hagia Triada, Museu de Heraclião | Linear A tablet Hagia Triada Heraklion |
| gea-centauro-lefkandi.jpg | Centauro de Lefkandi, terracota, c. 900 a.C., Museu de Erétria | Lefkandi Centaur Eretria Archaeological Museum |
| gea-nestor-taca.jpg | Taça de Nestor, Pitecusa, c. 740–720 a.C., Museu de Pitecusa (Ísquia) | Nestor's Cup Pithekoussai Ischia |
| gea-moeda-egina.jpg | Estáter de prata de Egina (tartaruga), séc. VI a.C. | Aegina silver stater turtle |
| gea-tiranicidas.jpg | Tiranicidas, cópia romana, Museu Arqueológico Nacional de Nápoles | Tyrannicides Harmodius Aristogeiton Naples National Archaeological Museum |
| gea-cnossos-palacio.jpg | Ruínas do palácio de Cnossos, Creta (reconstruções de Evans) | Knossos palace ruins Crete |
| gea-snake-goddess.jpg | «Deusa das serpentes», faiança, Cnossos, Museu de Heraclião | Snake Goddess figurine Knossos Heraklion Archaeological Museum |
| gea-tesouro-atreu.jpg | Interior do túmulo de cúpula «Tesouro de Atreu», Micenas | Treasury of Atreus interior Mycenae |
| gea-tirinto-muralha.jpg | Muralha ciclópica e galeria de Tirinto | Tiryns Cyclopean wall gallery |
| gea-pilos-palacio.jpg | Ruínas do «Palácio de Nestor», Pilos, Messénia | Palace of Nestor Pylos ruins |
| gea-troia-muralhas.jpg | Muralhas de Troia VI, Hisarlık | Troy VI walls Hisarlik |
| gea-olimpia-estadio.jpg | Pista do estádio de Olímpia | Olympia ancient stadium track |
| gea-paestum-templo.jpg | Templo de Hera I («Basílica»), Paestum | Paestum Temple of Hera I Basilica |
| gea-vaso-chigi.jpg | Vaso Chigi, proto-coríntio, c. 640 a.C., Villa Giulia, Roma | Chigi vase Villa Giulia hoplites |
| gea-francois-vaso.jpg | Vaso François, c. 570 a.C., Museu Arqueológico de Florença | François Vase Florence Archaeological Museum |
| gea-kore-peplos.jpg | Koré do Peplos, c. 530 a.C., Museu da Acrópole | Peplos Kore Acropolis Museum |
| gea-sifnios-friso.jpg | Friso do Tesouro dos Sifnios, c. 525 a.C., Museu de Delfos | Siphnian Treasury frieze Delphi Archaeological Museum |
| gea-homero-busto.jpg | Busto de Homero, cópia romana de original helenístico, Museu Britânico | Bust of Homer British Museum |
| gea-safo-alceu.jpg | Safo e Alceu, kálatos ático de figuras vermelhas, c. 470 a.C., Munique | Sappho and Alcaeus red-figure kalathos Munich Antikensammlungen |

---

## Clássica

Pasta do zip: `grecia/classica/`  ·  Prefixo: `gcl-`  ·  28 imagens

| Ficheiro | O que é | Termo de pesquisa |
|---|---|---|
| gcl-mapa-grecia-431.jpg | Mapa do mundo grego em 431 a.C., início da Guerra do Peloponeso, com as duas ligas | Map of Greece Peloponnesian War 431 BC alliances |
| gcl-mapa-liga-delos.jpg | Mapa do império ateniense / Liga de Delos e da Liga do Peloponeso, c. 431 a.C. | Delian League map 431 BC Athens Peloponnesian League |
| gcl-partenon-oeste.jpg | O Parténon visto de oeste, Acrópole de Atenas | Parthenon west facade Acropolis Athens |
| gcl-mapa-guerras-medicas.jpg | Mapa da segunda guerra Médica, 480–479 a.C. (Termópilas, Artemísio, Salamina, Plateias) | Map Second Persian invasion of Greece 480 479 BC |
| gcl-latomias-siracusa.jpg | Pedreiras (latomias) de Siracusa, Sicília (ex.: Latomia del Paradiso) | Latomia del Paradiso Syracuse |
| gcl-leao-queroneia.jpg | Leão de Queroneia, monumento sobre o túmulo dos tebanos, Beócia | Lion of Chaeronea |
| gcl-propileus.jpg | Os Propileus da Acrópole de Atenas | Propylaea Acropolis Athens |
| gcl-erecteion.jpg | O Erecteion com a Varanda das Cariátides | Erechtheion Caryatid Porch Acropolis |
| gcl-esparta-acropole.jpg | Acrópole de Esparta com o teatro romano, vista com o Taígeto | Sparta acropolis Roman theatre Taygetus |
| gcl-coluna-serpente.jpg | Coluna Serpentina (de Delfos) no Hipódromo de Istambul | Serpent Column Hippodrome Istanbul |
| gcl-maratona-soros.jpg | Soros, o túmulo dos atenienses em Maratona | Soros Marathon tumulus Athenians |
| gcl-termopilas-passo.jpg | Local das Termópilas, planície com o monte Eta ao fundo | Thermopylae pass landscape Mount Oeta |
| gcl-estreito-salamina.jpg | Estreito de Salamina, entre a ilha e a costa da Ática | Salamis strait view Attica |
| gcl-pnyx-bema.jpg | A tribuna (bema) da Pnyx, Atenas | Pnyx bema Athens |
| gcl-pinakia-juri.jpg | Bilhetes de bronze (pinakia) de jurados atenienses, séc. IV a.C. (Museu da Ágora Antiga) | Pinakia bronze juror tickets Agora Museum Athens |
| gcl-decadracma-siracusa.jpg | Decadracma de prata de Siracusa, c. 400 a.C., do gravador Euainetos | Syracuse decadrachm Euainetos |
| gcl-teatro-dioniso.jpg | Teatro de Dioniso, encosta sul da Acrópole | Theatre of Dionysus Athens |
| gcl-sofocles-estatua.jpg | Estátua de Sófocles, tipo «Latrão», Museus do Vaticano | Sophocles Lateran statue Vatican |
| gcl-frisa-partenon.jpg | Friso do Parténon, c. 443–437 a.C., pormenor com cavaleiros (confirmado: 56 blocos no Museu Britânico e 40 no Museu da Acrópole; indicar o museu do bloco escolhido) | Parthenon frieze horsemen |
| gcl-trirreme-lenormant.jpg | Relevo Lenormant, remadores de trirreme, c. 410–400 a.C., Museu da Acrópole | Lenormant relief trireme Acropolis Museum |
| gcl-estela-dexileos.jpg | Estela funerária de Dexileos, 394/3 a.C., Cerâmico, Atenas | Stele of Dexileos Kerameikos |
| gcl-temistocles-busto.jpg | Busto de Temístocles, cópia romana encontrada em Óstia (Museu de Óstia) | Themistocles bust Ostia |
| gcl-leonidas-monumento.jpg | Monumento a Leónidas nas Termópilas (1955) | Leonidas monument Thermopylae |
| gcl-tucidides-busto.jpg | Busto identificado como Tucídides, cópia romana (Royal Ontario Museum, Toronto; existe ficheiro Commons «Thucydides-bust-cutout ROM»; identificação tradicional) | Bust of Thucydides Royal Ontario Museum |
| gcl-alcibiades-busto.jpg | Busto de Alcibíades (identificação tradicional) sobre pilar de herma moderno, cópia romana de um original grego do século IV a.C., Museus Capitolinos, Palazzo dei Conservatori (confirmado) | Alcibiades bust Capitoline Museums |
| gcl-demostenes-estatua.jpg | Estátua de Demóstenes, cópia romana do bronze de Polieucto (há cópias na Ny Carlsberg Glyptotek e nos Museus do Vaticano; qualquer uma serve, indicar a escolhida) | Demosthenes statue Polyeuktos Roman copy |
| gcl-filipe-marfim.jpg | Cabeça de marfim da Tumba II de Vergina, tradicionalmente Filipe II (Museu dos Túmulos Reais de Egas) | Ivory head Philip II Vergina Aigai museum |
| gcl-marmores-elgin.jpg | Mármores do Parténon na Galeria Duveen, Museu Britânico | Parthenon Marbles Duveen Gallery British Museum |

---

## Helenismo

Pasta do zip: `grecia/helenismo/`  ·  Prefixo: `ghe-`  ·  25 imagens

| Ficheiro | O que é | Termo de pesquisa |
|---|---|---|
| ghe-mapa-imperio-alexandre.jpg | Mapa do império de Alexandre e do percurso das campanhas, 334-323 a.C. | Map of Alexander's empire campaigns 334-323 BC |
| ghe-mapa-diadocos-301.jpg | Mapa dos reinos dos Diádocos depois de Ipso, 301 a.C. | Map of Diadochi kingdoms 301 BC Ipsus |
| ghe-alexandre-azara.jpg | Hermes de Azara, cópia romana de retrato de Alexandre atribuído a Lisipo; Louvre | Azara herm Alexander the Great Louvre |
| ghe-mapa-reinos-200.jpg | Mapa do mundo helenístico c. 200 a.C. (Ptolemeus, Selêucidas, Antigónidas, Pérgamo, Bactriana) | Map of Hellenistic world 200 BC |
| ghe-vergina-larnax.jpg | Larnax de ouro com o «sol de Vergina», túmulo II; Museu dos Túmulos Reais de Egas | Golden larnax Vergina Sun Tomb II Aigai museum |
| ghe-pella-caca-leao.jpg | Mosaico de seixos da caça ao leão, Pela; Museu Arqueológico de Pela | Lion hunt mosaic Pella Archaeological Museum |
| ghe-pergamo-altar.jpg | Friso da Gigantomaquia do Grande Altar de Pérgamo; Pergamonmuseum, Berlim | Pergamon Altar Gigantomachy frieze Pergamonmuseum |
| ghe-delos-mosaico.jpg | Mosaico de Dioniso sobre uma pantera, Casa das Máscaras, Delos | Delos House of the Masks mosaic Dionysus panther |
| ghe-corinto-templo-apolo.jpg | Templo de Apolo, Corinto Antiga, séc. VI a.C. | Temple of Apollo Ancient Corinth |
| ghe-alexandre-sarcofago.jpg | «Sarcófago de Alexandre» (de Sídon); Museu Arqueológico de Istambul | Alexander Sarcophagus Istanbul Archaeology Museum |
| ghe-ptolemeu-moeda.jpg | Tetradracma de prata de Ptolemeu I Sóter (retrato e águia) | Tetradrachm Ptolemy I Soter silver coin |
| ghe-seleuco-moeda.jpg | Tetradracma de prata de Seleuco I Nicátor | Tetradrachm Seleucus I Nicator silver coin |
| ghe-lisimaco-moeda.jpg | Tetradracma de Lisímaco com Alexandre divinizado (cornos de Amon) | Lysimachus tetradrachm Alexander horn of Ammon Athena Nikephoros |
| ghe-pedra-roseta.jpg | Pedra de Roseta, decreto de Mênfis de 196 a.C.; Museu Britânico | Rosetta Stone British Museum |
| ghe-mosaico-nilo.jpg | Mosaico do Nilo de Palestrina (Preneste), c. 100 a.C. | Nile mosaic of Palestrina |
| ghe-estoa-atalo.jpg | Estoa de Átalo, Ágora de Atenas (reconstruída) | Stoa of Attalos Athens Agora |
| ghe-menandro-moeda.jpg | Tetradracma de prata de Menandro I (Atena Alcidemos, legenda grega e kharosthi) | Menander I Soter silver coin Athena Alkidemos |
| ghe-filipe-ii-moeda.jpg | Estáter de ouro de Filipe II (Apolo e biga) | Gold stater Philip II of Macedon Apollo chariot |
| ghe-cleopatra-busto.jpg | Busto de Cleópatra VII, Antikensammlung, Altes Museum, Berlim | Cleopatra VII bust Altes Museum Berlin |
| ghe-nike-samotracia.jpg | Vitória de Samotrácia; Louvre | Winged Victory of Samothrace Louvre |
| ghe-venus-milo.jpg | Vénus de Milo; Louvre | Venus de Milo Louvre |
| ghe-laocoonte.jpg | Grupo do Laocoonte; Museus do Vaticano (Pio-Clementino) | Laocoön and His Sons Vatican Museums |
| ghe-galata-moribundo.jpg | «Galata Moribundo», cópia romana; Museus Capitolinos | Dying Gaul Capitoline Museums |
| ghe-torre-ventos.jpg | Torre dos Ventos, Ágora Romana, Atenas | Tower of the Winds Athens |
| ghe-teatro-pergamo.jpg | Teatro helenístico de Pérgamo (Bergama) | Theatre of Pergamon Bergama |

---

## Filosofia e ciência

Pasta do zip: `grecia/filosofia-ciencia/`  ·  Prefixo: `gfc-`  ·  28 imagens

| Ficheiro | O que é | Termo de pesquisa |
|---|---|---|
| gfc-academia-mosaico.jpg | Mosaico de Pompeia com filósofos reunidos («Academia de Platão»); Museu Arqueológico Nacional de Nápoles | Plato Academy mosaic Pompeii Naples |
| gfc-antikythera.jpg | Fragmento principal do Mecanismo de Anticítera; Museu Arqueológico Nacional, Atenas | Antikythera mechanism Fragment A National Archaeological Museum Athens |
| gfc-aristarco-manuscrito.jpg | Diagrama do manuscrito Vaticano Gr. 204, obra de Aristarco sobre tamanhos e distâncias | Aristarchus of Samos Vaticanus Graecus 204 diagram |
| gfc-aristoteles-busto.jpg | Busto de Aristóteles, cópia romana; Palácio Altemps, Roma | Aristotle bust Palazzo Altemps |
| gfc-diogenes-waterhouse.jpg | Diógenes, pintura de J. W. Waterhouse, 1882; Galeria de Arte de Nova Gales do Sul | Diogenes Waterhouse 1882 |
| gfc-edipo-esfinge-vaso.jpg | Édipo e a Esfinge, taça ática, Pintor de Édipo; Museus do Vaticano | Oedipus and the Sphinx Oedipus Painter Vatican kylix |
| gfc-epicuro-busto.jpg | Busto de Epicuro, cópia romana; Museus Capitolinos | Epicurus bust Capitoline Museums |
| gfc-escola-atenas-rafael.jpg | A Escola de Atenas, fresco de Rafael, 1509-1511; Palácios do Vaticano | School of Athens Raphael |
| gfc-esquilo-busto.jpg | Busto de Ésquilo, cópia romana; Museus Capitolinos | Aeschylus bust Capitoline Museums |
| gfc-euclides-bodleian.jpg | Manuscrito bizantino dos Elementos, 888 d.C.; Biblioteca Bodleiana (MS D'Orville 301) | Euclid Elements Bodleian D'Orville 301 888 |
| gfc-herodoto-busto.jpg | Hermes duplo de Heródoto e Tucídides; Museu Arqueológico Nacional de Nápoles | Herm of Herodotus and Thucydides Naples National Archaeological Museum |
| gfc-hesiodo-mosaico.jpg | Mosaico de Hesíodo e a Musa, Tréveris; Rheinisches Landesmuseum | Hesiod and the Muse mosaic Trier |
| gfc-hipocrates-busto.jpg | Busto de Hipócrates, cópia romana; Museu de Óstia Antica | Hippocrates bust Ostia Antica museum |
| gfc-homero-busto.jpg | Busto de Homero, tipo helenístico, cópia romana; Museu Britânico | Bust of Homer British Museum |
| gfc-mascaras-mosaico.jpg | Mosaico com máscaras de teatro, Vila de Adriano; Museus Capitolinos | Theatre masks mosaic Hadrian's Villa Capitoline Museums |
| gfc-morte-socrates-david.jpg | A Morte de Sócrates, J.-L. David, 1787; Museu Metropolitano, Nova Iorque | Death of Socrates David Metropolitan Museum |
| gfc-palimpsesto-arquimedes.jpg | Página do Palimpsesto de Arquimedes; Museu de Arte Walters, Baltimore | Archimedes Palimpsest Walters Art Museum |
| gfc-papiro-constituicao-atenas.jpg | Papiro com a Constituição dos Atenienses; Biblioteca Britânica (Papiro 131) | Athenaion Politeia papyrus British Library |
| gfc-papiro-derveni.jpg | Papiro de Derveni; Museu Arqueológico de Salónica | Derveni papyrus Thessaloniki Archaeological Museum |
| gfc-papiro-euclides.jpg | Papiro de Oxirrinco P.Oxy. 29, fragmento dos Elementos de Euclides; Universidade da Pensilvânia | Oxyrhynchus papyrus 29 Euclid Elements |
| gfc-pitagoras-busto.jpg | Busto romano identificado como Pitágoras; Museus Capitolinos, Roma | Pythagoras bust Capitoline Museums |
| gfc-platao-busto.jpg | Busto de Platão, cópia romana do retrato atribuído a Silanion | Plato bust Silanion Glyptothek Munich |
| gfc-safo-vaso.jpg | Safo e Alceu, kalathos ático, Pintor de Brygos; Antikensammlungen, Munique | Sappho and Alcaeus Brygos Painter kalathos Munich |
| gfc-socrates-busto.jpg | Busto de Sócrates, cópia romana; Louvre | Socrates bust Louvre Roman copy |
| gfc-sofocles-laterano.jpg | Estátua de Sófocles (tipo Latrão); Museus do Vaticano | Sophocles Lateran statue Vatican Museums |
| gfc-teatro-dioniso.jpg | Teatro de Dioniso, encosta sul da Acrópole, Atenas | Theatre of Dionysus Athens |
| gfc-tucidides-busto.jpg | Busto de Tucídides, cópia romana; Holkham Hall | Thucydides bust Holkham Hall |
| gfc-venetus-a.jpg | Folha do Venetus A (Ilíada), século X; Biblioteca Marciana, Veneza | Venetus A Marcianus Graecus 454 Iliad |

---

## Arte e arquitetura

Pasta do zip: `grecia/arte-arquitetura/`  ·  Prefixo: `gaa-`  ·  27 imagens

| Ficheiro | O que é | Termo de pesquisa |
|---|---|---|
| gaa-partenon.jpg | O Parténon visto do lado oeste, Acrópole de Atenas | Parthenon west side Acropolis Athens |
| gaa-kouros-anavyssos.jpg | Kouros de Anavissos (Croisos), c. 530 a.C., Museu Arqueológico Nacional, Atenas | Kroisos Kouros Anavyssos National Archaeological Museum Athens |
| gaa-dipilon.jpg | Ânfora geométrica do Mestre do Dípilon, c. 750 a.C., Museu Arqueológico Nacional, Atenas | Dipylon amphora Geometric National Archaeological Museum Athens |
| gaa-vaso-francois.jpg | Vaso François, c. 570 a.C., Museu Arqueológico Nacional de Florença | François Vase Florence Museo Archeologico |
| gaa-auriga-delfos.jpg | Auriga de Delfos, bronze, c. 470 a.C., Museu Arqueológico de Delfos | Charioteer of Delphi bronze Delphi Archaeological Museum |
| gaa-estoa-atalo.jpg | Estoa de Átalo reconstruída, Ágora de Atenas | Stoa of Attalos Athens Agora reconstructed |
| gaa-epidauro.jpg | Teatro de Epidauro | Ancient Theatre of Epidaurus |
| gaa-paestum.jpg | Templos dóricos de Paestum (Hera I e II) | Paestum temples Hera Neptune Basilica |
| gaa-segesta.jpg | Templo dórico inacabado de Segesta, Sicília | Temple of Segesta Sicily |
| gaa-altar-pergamo.jpg | Grande Altar de Pérgamo reconstruído, Museu de Pérgamo, Berlim | Pergamon Altar Pergamon Museum Berlin |
| gaa-kore-peplos.jpg | Kore do Peplos, c. 530 a.C., Museu da Acrópole | Peplos Kore Acropolis Museum |
| gaa-bronzes-riace.jpg | Bronze de Riace A, Museu Nacional da Magna Grécia, Reggio Calabria | Riace bronzes Statue A Reggio Calabria |
| gaa-discobolo.jpg | Discóbolo de Míron, cópia romana (Lancellotti ou Townley) | Discobolus Myron Roman copy |
| gaa-panatenaica.jpg | Ânfora panatenaica de figuras negras com Atena, Museu Britânico | Panathenaic prize amphora black-figure British Museum |
| gaa-exekias.jpg | Ânfora de Exéquias: Aquiles e Ájax a jogar, Museus do Vaticano | Exekias amphora Achilles Ajax dice Vatican |
| gaa-torre-ventos.jpg | Torre dos Ventos, Atenas (Aerides), octogonal | Tower of the Winds Athens |
| gaa-friso-partenon.jpg | Placa do friso do Parténon com cavaleiros (Museu da Acrópole ou Museu Britânico) | Parthenon frieze horsemen Acropolis Museum |
| gaa-erecteion.jpg | Erecteion com o pórtico das cariátides, Acrópole | Erechtheion Caryatid Porch Acropolis |
| gaa-vergina.jpg | Rapto de Perséfone, pintura do Túmulo de Perséfone, Vergina | Tomb of Persephone Vergina fresco abduction of Persephone |
| gaa-alexandre-mosaico.jpg | Mosaico de Alexandre (Casa do Fauno, Pompeia), Museu Arqueológico Nacional de Nápoles | Alexander Mosaic Naples National Archaeological Museum |
| gaa-moeda-coruja.jpg | Tetradracma de prata de Atenas (coruja), século V a.C. | Athenian tetradrachm owl Athena |
| gaa-seikilos.jpg | Epitáfio de Seiquilos, Museu Nacional da Dinamarca | Seikilos epitaph National Museum of Denmark |
| gaa-doriforo.jpg | Doríforo de Policleto, cópia romana de Pompeia, Museu Arqueológico de Nápoles | Doryphoros Polykleitos Naples National Archaeological Museum |
| gaa-afrodite-cnido.jpg | Afrodite de Cnido, cópia romana tipo Colonna, Museus do Vaticano | Aphrodite of Knidos Colonna Vatican Museums |
| gaa-apoxiomeno.jpg | Apoxiómeno de Lísipo, cópia romana, Museus do Vaticano | Apoxyomenos Lysippos Vatican Museums |
| gaa-laocoonte.jpg | Grupo de Laocoonte e os filhos, Museus do Vaticano | Laocoön and His Sons Vatican Museums |
| gaa-vitoria-samotracia.jpg | Vitória de Samotrácia, Louvre | Winged Victory of Samothrace Louvre |

---

## Religião e vida

Pasta do zip: `grecia/religiao-vida/`  ·  Prefixo: `grv-`  ·  27 imagens

| Ficheiro | O que é | Termo de pesquisa |
|---|---|---|
| grv-zeus-artemision.jpg | Bronze de Zeus ou Posídon do cabo Artemísio, c. 460 a.C.; Museu Arqueológico Nacional, Atenas | Artemision Bronze Zeus or Poseidon National Archaeological Museum Athens |
| grv-friso-sifnios.jpg | Friso dos deuses do Tesouro dos Sifnianos, Delfos, c. 525 a.C.; Museu de Delfos | Siphnian Treasury frieze gods Delphi Archaeological Museum |
| grv-deusa-serpentes.jpg | Deusa das serpentes minoica, faiança, Cnossos; Museu de Heraclião | Snake Goddess Heraklion Archaeological Museum |
| grv-templo-hera-olimpia.jpg | Ruínas do templo de Hera, Olímpia | Temple of Hera Olympia |
| grv-serapis.jpg | Cabeça ou busto de Serápis (cópia romana de tipo helenístico) | Serapis bust Roman copy Bryaxis type |
| grv-delfos-templo.jpg | Ruínas do templo de Apolo, Delfos, com o Parnaso | Temple of Apollo Delphi ruins |
| grv-delfos-aurige.jpg | Auriga de Delfos, bronze, c. 470 a.C.; Museu de Delfos | Charioteer of Delphi |
| grv-olimpia-estadio.jpg | Estádio de Olímpia com a linha de partida em pedra | Olympia stadium starting line |
| grv-eleusis-ruinas.jpg | Ruínas do santuário de Elêusis (Telesterion) | Eleusis archaeological site Telesterion |
| grv-epidauro-tholos.jpg | Tholos do santuário de Asclépio, Epidauro | Tholos Epidaurus Asklepieion |
| grv-sacrificio-vaso.jpg | Cena de sacrifício num vaso ático de figuras vermelhas (altar, animal, participantes); anotar museu e inventário | Attic red-figure vase sacrifice scene altar |
| grv-panatenaica.jpg | Ânfora panatenaica de prémio com Atena entre duas colunas; British Museum | Panathenaic prize amphora Athena British Museum |
| grv-dioniso-exequias.jpg | Taça de Exéquias com Dioniso no barco, Munique | Exekias Dionysus cup Munich Antikensammlungen |
| grv-relevo-eleusis.jpg | Grande Relevo de Elêusis, c. 440–430 a.C.; Museu Arqueológico Nacional, Atenas | Great Eleusinian Relief National Archaeological Museum Athens |
| grv-pitia-taca.jpg | Taça de figuras vermelhas do Pintor de Codro com Egeu e a Pítia/Témis num tripé; Berlim (F 2538) | Aegeus Themis Delphi kylix Berlin Antikensammlung F 2538 |
| grv-dodona-tabuinha.jpg | Lâmina de chumbo oracular de Dodona com pergunta; Museu de Ioanina ou Museu Arqueológico Nacional de Atenas (verificar qual e acertar a legenda) | Dodona lead oracle tablet |
| grv-moeda-egina.jpg | Estáter de prata de Egina com tartaruga marinha | Aegina silver stater sea turtle |
| grv-estela-hegeso.jpg | Estela funerária de Hegeso, Cerâmico, c. 410–400 a.C.; Museu Arqueológico Nacional, Atenas | Stele of Hegeso National Archaeological Museum Athens |
| grv-tear-amasis.jpg | Lécito do Pintor de Amásis com mulheres a tecer lã; Metropolitan Museum | Amasis Painter lekythos women weaving Metropolitan Museum |
| grv-escola-douris.jpg | Taça escolar de Douris (mestres de música e de letras); Berlim (F 2285) | Douris school cup Berlin Antikensammlung |
| grv-teatro-dioniso.jpg | Teatro de Dioniso Eleutereu, encosta da Acrópole, Atenas | Theatre of Dionysus Athens |
| grv-asclepio-relevo.jpg | Relevo votivo a Asclépio com devotos, século IV a.C.; museu a anotar | Votive relief Asclepius worshippers |
| grv-hesiodo-moreau.jpg | «Hesíodo e a Musa», Gustave Moreau, 1891; Musée d’Orsay | Gustave Moreau Hesiod and the Muse |
| grv-hipocrates-busto.jpg | Busto de Hipócrates (retrato de tipo posterior, p. ex. Museu de Óstia ou Louvre) | Bust of Hippocrates |
| grv-chama-olimpica.jpg | Acendimento da chama olímpica no templo de Hera, Olímpia | Olympic flame lighting ceremony Olympia temple of Hera |
| grv-jogos-1896.jpg | Estádio Panatenaico nos Jogos Olímpicos de 1896 | 1896 Summer Olympics Panathenaic Stadium |
| grv-juramento-hipocrates.jpg | Juramento de Hipócrates em forma de cruz, manuscrito bizantino do séc. XII | Hippocratic Oath Byzantine manuscript cross 12th century |

---

## Guerra

Pasta do zip: `grecia/guerra/`  ·  Prefixo: `ggu-`  ·  26 imagens

| Ficheiro | O que é | Termo de pesquisa |
|---|---|---|
| ggu-vaso-chigi.jpg | Vaso Chigi (olpe proto-coríntio), c. 650–640 a.C., com a falange em marcha. Museu Nacional Etrusco de Villa Giulia, Roma | Chigi vase Villa Giulia |
| ggu-couraca-argos.jpg | Panóplia de Argos (couraça «de sino» e capacete), c. 720 a.C. Museu Arqueológico de Argos | Argos panoply bronze cuirass helmet |
| ggu-estela-aristion.jpg | Estela funerária de Aristion, de Aristocles, c. 510 a.C. Museu Arqueológico Nacional, Atenas | Stele of Aristion National Archaeological Museum Athens |
| ggu-elmo-corintio.jpg | Capacete de bronze de tipo coríntio, época arcaica (escolher um exemplar de museu identificado) | Corinthian helmet bronze Archaic |
| ggu-escudo-aspis.jpg | Revestimento de bronze de uma aspis hoplítica, dedicada em santuário (escolher um exemplar de museu identificado; evitar réplicas modernas) | Bronze hoplite shield facing aspis Olympia |
| ggu-egina-guerreiro.jpg | Guerreiro caído do frontão do templo de Afaia, Egina, c. 500–480 a.C. Gliptoteca de Munique | Aphaia temple pediment dying warrior Glyptothek Munich |
| ggu-peltasta-vaso.jpg | Peltasta trácio com pélte e dardos, em vaso ático do século V a.C. (confirmar a identificação ao escolher a foto) | Thracian peltast Attic vase |
| ggu-dexileos.jpg | Estela de Dexileos, cavaleiro morto em 394/3 a.C. Museu do Cerâmico, Atenas | Stele of Dexileos Kerameikos |
| ggu-friso-cavaleiros.jpg | Cavaleiros do friso do Parténon, c. 440 a.C. | Parthenon frieze horsemen |
| ggu-relevo-lenormant.jpg | Relevo Lenormant (remadores de um trirreme), c. 410 a.C. Museu da Acrópole, Atenas | Lenormant relief trireme Acropolis Museum |
| ggu-trirreme-olympias.jpg | Réplica *Olympias*, trirreme reconstruído em 1985–87, Marinha Helénica | Olympias trireme replica |
| ggu-leonidas-estatua.jpg | Monumento a Leónidas, Termópilas (1955) | Leonidas monument Thermopylae |
| ggu-termopilas.jpg | O desfiladeiro e a planície das Termópilas, vistos da colina de Kolonos | Thermopylae pass landscape Kolonos |
| ggu-maraton-soros.jpg | O Soros, túmulo dos atenienses mortos em Maratona | Marathon Soros tumulus Athenian dead |
| ggu-salamina-estreito.jpg | O estreito de Salamina, visto da costa | Salamis strait view |
| ggu-coluna-serpente.jpg | Coluna Serpentina no Hipódromo de Istambul (monumento de Plateias, trazido de Delfos) | Serpent Column Hippodrome Istanbul |
| ggu-muro-temistocles.jpg | Troço da muralha de Temístocles no Cerâmico, Atenas | Themistoclean wall Kerameikos |
| ggu-euralo-siracusa.jpg | Castelo Euríalo, Siracusa | Euryalus Castle Syracuse |
| ggu-queroneia-leao.jpg | Leão de Queroneia | Lion of Chaeronea |
| ggu-muralha-messene.jpg | Porta Arcádia e muralha de Messene | Messene Arcadian Gate walls |
| ggu-monumento-paulo-emilio.jpg | Pilar de Emílio Paulo, Delfos, com o friso de Pidna | Monument of Aemilius Paulus Delphi Pydna frieze |
| ggu-vergina-armas.jpg | Armas e peças de armadura do túmulo II de Vergina (Egas), atribuído a Filipe II. Museu Arqueológico de Egas | Vergina Tomb II Philip II armour greaves Aigai museum |
| ggu-mosaico-alexandre.jpg | Mosaico de Alexandre, da Casa do Fauno (Pompeia), c. 120–100 a.C., a partir de uma pintura helenística do final do séc. IV a.C. Museu Arqueológico Nacional, Nápoles | Alexander Mosaic Naples |
| ggu-sarcofago-alexandre.jpg | Sarcófago de Alexandre, de Sídon, final do séc. IV a.C. (c. 332–311) Museus Arqueológicos de Istambul | Alexander Sarcophagus Istanbul |
| ggu-moeda-alexandre.jpg | Tetradracma de prata em nome de Alexandre (Héracles/Zeus entronizado) | Alexander III tetradrachm Heracles Zeus |
| ggu-riace-guerreiro.jpg | Guerreiro A dos bronzes de Riace, c. 460–450 a.C. Museu Nacional da Magna Grécia, Reggio Calabria | Riace bronzes warrior A |