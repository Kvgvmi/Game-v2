export const WORLDS = [
  {
    id: 'antique',
    icon: '🏛️',
    name: 'Art Classique & Contemporain',
    roman: 'I',
    color: '#d4a853',
    bgGradient: 'radial-gradient(ellipse at 30% 40%, #2a1f0d 0%, #0d0905 100%)',
    description: 'L\'art classique cherche l\'harmonie et la perfection. L\'art contemporain explore la rupture et l\'expérimentation.',
    tip: 'Classique = règles, équilibre, beauté idéale. Contemporain = liberté, rupture, engagement personnel.',
    questions: [
      {
        art: {
          image: 'https://www.lejournaldesarts.fr/sites/lejournaldesarts/files/styles/libre_w468/public/2023-05/michel-ange-david-1501-galerie-academie-florence-copyright-photo-nan-palmero-2021-cc-by-2-0.jpg?h=1851c7f5&itok=OfY5TSTM',
          title: 'Le David',
          artist: 'Michel-Ange, Florence, 1504',
          period: 'Renaissance'
        },
        type: 'classif',
        question: 'Le David de Michel-Ange appartient à quel type d\'art ?',
        choices: ['Art Classique', 'Art Contemporain', 'Art Numérique', 'Art Abstrait'],
        correct: 0,
        explanation: 'Le David est un chef-d\'œuvre de la Renaissance : corps idéalisé, proportions parfaites, thème mythologique. Ce sont les caractéristiques de l\'art classique.',
      },
      {
        art: {
          image: 'https://www.lightzoomlumiere.fr/wp-content/uploads/2025/09/Van-Gogh-La-nuit-etoilee-nouvelle-edition-Atelier-des-Lumieres-Paris-France-Direction-artistique-Gianfranco-Iannuzzi-Copyright-Culturespaces-De-La-Motte-Rouge-Cyrille-1024x682.jpg',
          title: 'La Nuit Étoilée',
          artist: 'Vincent van Gogh, 1889',
          period: 'Post-Impressionnisme'
        },
        type: 'message',
        question: 'L\'art classique cherche avant tout…',
        choices: [
          'La rupture avec toutes les règles',
          'L\'harmonie, la beauté idéale et l\'ordre',
          'L\'expression personnelle sans limites',
          'L\'engagement politique uniquement'
        ],
        correct: 1,
        explanation: 'L\'art classique valorise l\'harmonie, la perfection des formes et la beauté idéale. Il suit des règles précises de proportion et de composition.',
      },
      {
        art: {
          image: 'https://www.wassilykandinsky.net/images/works/36.jpg',
          title: 'Composition 7',
          artist: 'Wassily Kandinsky, 1913',
          period: 'Art Contemporain'
        },
        type: 'culture',
        question: 'Cette peinture abstraite est un exemple d\'art…',
        choices: [
          'Classique — formes réalistes',
          'Contemporain — rupture avec les conventions',
          'Antique — inspiration grecque',
          'Religieux — thèmes sacrés'
        ],
        correct: 1,
        explanation: 'L\'art contemporain (depuis le XXe siècle) brise les règles établies. Il valorise la liberté d\'expression, l\'abstraction et l\'engagement personnel.',
      },
    ],
  },

  {
    id: 'classique',
    icon: '🌍',
    name: 'Culture Individuelle & Collective',
    roman: 'II',
    color: '#5b8dd9',
    bgGradient: 'radial-gradient(ellipse at 70% 30%, #0d1a2a 0%, #050d18 100%)',
    description: 'La culture se manifeste en deux dimensions : individuelle (autonomie, expression de soi) et collective (groupe, traditions, solidarité).',
    tip: 'Individuelle = initiative personnelle, compétition. Collective = harmonie du groupe, respect des traditions.',
    questions: [
      {
        art: {
          image: 'https://faireducinema.com/wp-content/uploads/2020/03/lf-e1584977813570-790x522.jpg',
          title: 'L\'artiste et son œuvre',
          artist: 'Expression personnelle',
          period: 'Culture Individuelle'
        },
        type: 'classif',
        question: '"L\'intérêt du groupe prime sur l\'intérêt individuel." C\'est une valeur de…',
        choices: ['Culture Individuelle', 'Culture Collective', 'L\'art numérique', 'La mondialisation'],
        correct: 1,
        explanation: 'La culture collective met le groupe avant l\'individu. Elle valorise la solidarité, l\'harmonie sociale et le respect des traditions partagées.',
      },
      {
        art: {
          image: 'https://lematin.ma/lematin/uploads/images/2024/07/06/324188.webp',
          title: 'Fête collective',
          artist: 'Traditions & célébrations',
          period: 'Culture Collective'
        },
        type: 'message',
        question: 'La culture individuelle valorise…',
        choices: [
          'La solidarité et l\'harmonie du groupe',
          'L\'expression de soi, l\'autonomie et la réussite personnelle',
          'Le respect des traditions ancestrales',
          'L\'obéissance à l\'autorité'
        ],
        correct: 1,
        explanation: 'La culture individuelle met l\'accent sur l\'autonomie, l\'expression personnelle et l\'originalité. Elle valorise la compétition et l\'initiative personnelle.',
      },
      {
    art: {
      image: 'https://www.impressions.art/medias/thumb/1037659/3a139bfba1998260ab89677f88be9f64/large',
      title: 'Valeurs culturelles',
      artist: 'Illustration éducative',
      period: 'Culture & société'
    },
    type: 'culture',
    question: 'Quelle valeur appartient à la culture collective ?',
    choices: [
      'Solidarité',
      'Compétition individuelle',
      'Réussite personnelle',
      'Travail seul'
    ],
    correct: 0,
    explanation: 'La culture collective valorise le groupe, la solidarité et la cohésion sociale. La culture individuelle met plus l’accent sur la réussite personnelle et l’autonomie.',
  },
    ],
  },

  {
    id: 'contemporain',
    icon: '💻',
    name: 'Art Numérique & Technologie',
    roman: 'III',
    color: '#b05bd9',
    bgGradient: 'radial-gradient(ellipse at 50% 60%, #1a0d1a 0%, #0a050d 100%)',
    description: 'L\'art numérique utilise les technologies numériques pour créer ou présenter des œuvres. Il ouvre de nouvelles formes d\'expression.',
    tip: '3 catégories : photographie numérique, médias générés par ordinateur (algorithmes, 3D), installations numériques (vidéo mapping).',
    questions: [
      {
        art: {
          image: 'https://www.heavym.net/wp-content/smush-webp/2021/07/danse-Arthur-M-et-Claire-B.jpeg.webp',
          title: 'Vidéo Mapping',
          artist: 'Projection numérique sur bâtiment',
          period: 'Art Numérique'
        },
        type: 'classif',
        question: 'Cette technique qui projette des images sur un bâtiment s\'appelle…',
        choices: ['La photographie argentique', 'Le vidéo mapping', 'La peinture murale', 'La sculpture 3D'],
        correct: 1,
        explanation: 'Le vidéo mapping projette des images par ordinateur sur des objets ou bâtiments pour les transformer en œuvres visuelles spectaculaires.',
      },
      {
        art: {
          image: 'https://trustmyscience.com/wp-content/uploads/2019/09/ordinateurs-chaos.jpeg',
          title: 'Art Algorithmique',
          artist: 'Généré par calculs mathématiques',
          period: 'Art Génératif'
        },
        type: 'message',
        question: 'Un artiste crée une œuvre entièrement grâce à des formules mathématiques et du code. C\'est de l\'art…',
        choices: ['Rupestre', 'Algorithmique', 'Classique', 'Islamique'],
        correct: 1,
        explanation: 'L\'art algorithmique est généré par des calculs mathématiques et des programmes informatiques. L\'intelligence artificielle en est l\'évolution la plus moderne.',
      },
      {
        art: {
          image: 'https://viitorcloud.com/wp-content/uploads/2021/05/How-Immersive-Technology-is-Changing-the-World-1-1.jpg',
          title: 'VR vs AR',
          artist: 'Technologies immersives',
          period: 'Distinction clé du cours'
        },
        type: 'culture',
        question: 'Quelle est la différence entre VR (réalité virtuelle) et AR (réalité augmentée) ?',
        choices: [
          'Aucune différence',
          'VR = environnement artificiel complet ; AR = éléments virtuels superposés au monde réel',
          'VR est gratuite, AR est payante',
          'VR est en 2D, AR est en 3D'
        ],
        correct: 1,
        explanation: 'La VR crée un monde artificiel complet (on est immergé dedans). L\'AR superpose des éléments virtuels dans le monde réel — c\'est la distinction clé du cours.',
      },
    ],
  },

  {
    id: 'maroc',
    icon: '🇲🇦',
    name: 'Culture & Art au Maroc',
    roman: 'IV',
    color: '#e8602a',
    bgGradient: 'radial-gradient(ellipse at 40% 50%, #1a0d05 0%, #0d0805 100%)',
    description: 'Le Maroc est un carrefour culturel unique entre l\'Afrique, l\'Europe et le monde arabe. Tradition et modernité s\'y rencontrent.',
    tip: 'Amazighs, zellige, musique gnaoua, architecture des médinas, Hassan Hajjaj — tradition et numérique se fusionnent.',
    questions: [
      {
        art: {
          image: 'https://sothebysrealty.ma/wp-content/webp-express/webp-images/uploads/2021/06/shutterstock_242269735-1920x1280.jpg.webp',
          title: 'Zellige marocain',
          artist: 'Médersa Bou Inania, Fès — XIVe siècle',
          period: 'Artisanat traditionnel'
        },
        type: 'classif',
        question: 'Le zellige est un exemple de quel type d\'art marocain ?',
        choices: ['Art numérique algorithmique', 'Artisanat traditionnel marocain', 'Peinture contemporaine', 'Performance artistique'],
        correct: 1,
        explanation: 'Le zellige est une mosaïque géométrique islamique, héritage de l\'influence arabo-andalouse. C\'est l\'un des arts traditionnels les plus emblématiques du Maroc.',
      },
      {
        art: {
          image: 'https://www.alksar.com/wp-content/uploads/2018/11/Koutoubia-Marrakech-aerial-view.jpg',
          title: 'Architecture marocaine',
          artist: 'Mosquée Koutoubia, Marrakech',
          period: 'Héritage arabo-islamique'
        },
        type: 'message',
        question: 'Les Amazighs, peuple autochtone du Maghreb, ont enrichi la culture marocaine à travers…',
        choices: [
          'Les gratte-ciels et l\'architecture moderne',
          'Leur artisanat, musique et traditions ancestrales',
          'La technologie numérique',
          'Le cinéma hollywoodien'
        ],
        correct: 1,
        explanation: 'Les Amazighs ont laissé une empreinte indélébile sur la culture marocaine : artisanat, musique et traditions millénaires transmises de génération en génération.',
      },
      {
        art: {
          image: 'https://assets.isu.pub/document-structure/200918082351-6f909e1015c6739aa92956bf773b73a2/v1/72ae3a7861055043cf362cbd6e1cdbee.jpg?width=720&quality=85%2C50',
          title: 'Hassan Hajjaj',
          artist: '"Le Andy Warhol de Marrakech"',
          period: 'Art contemporain marocain'
        },
        type: 'culture',
        question: 'Hassan Hajjaj est un artiste marocain connu pour…',
        choices: [
          'Peindre uniquement des paysages ruraux',
          'Mélanger tradition marocaine et culture pop mondiale',
          'Créer de l\'art exclusivement en réalité virtuelle',
          'Composer de la musique gnaoua'
        ],
        correct: 1,
        explanation: 'Hassan Hajjaj transforme des objets du quotidien marocain en œuvres iconiques. Il fusionne folklore, modernité et pop culture — un exemple de l\'art contemporain africain global.',
      },
    ],
  },

  {
    id: 'patrimoine',
    icon: '🏺',
    name: 'Numérisation du Patrimoine',
    roman: 'V',
    color: '#4aaa7a',
    bgGradient: 'radial-gradient(ellipse at 60% 30%, #051a10 0%, #020d08 100%)',
    description: 'La numérisation permet de conserver, valoriser et transmettre les héritages culturels aux générations futures.',
    tip: 'Scanner 3D, photogrammétrie, visites VR, numérisation de manuscrits, musées virtuels en ligne.',
    questions: [
      {
        art: {
          image: 'https://d3dkwn7op408kc.cloudfront.net/ckeditor_assets/2025/09/13/setareh-samandari-using-photogrammetry-realitycapture-v4.jpg',
          title: 'Photogrammétrie',
          artist: 'Création de modèles 3D par photos',
          period: 'Technique de numérisation'
        },
        type: 'classif',
        question: 'Pourquoi numériser un manuscrit ancien ?',
        choices: [
          'Pour le vendre aux enchères',
          'Pour créer une copie numérique consultable même si l\'original est détruit',
          'Pour interdire l\'accès au public',
          'Pour le remplacer par une version moderne'
        ],
        correct: 1,
        explanation: 'La numérisation protège le patrimoine à long terme. Si l\'objet physique est détruit par catastrophe ou détérioration, la copie numérique préserve la mémoire culturelle.',
      },
      {
        art: {
          image: 'https://ekmul.fr/wp-content/uploads/2025/07/Conservation-numerique-du-patrimoine-naturel-grace-au-scan-3D-haute-resolution-1024x768.webp',
          title: 'Patrimoine fragile',
          artist: 'Conservation numérique',
          period: 'Préservation'
        },
        type: 'message',
        question: 'La numérisation du patrimoine permet aussi de…',
        choices: [
          'Rendre le patrimoine inaccessible',
          'Démocratiser l\'accès : n\'importe qui dans le monde peut consulter les œuvres en ligne',
          'Remplacer les musées physiques',
          'Protéger uniquement les œuvres européennes'
        ],
        correct: 1,
        explanation: 'La numérisation démocratise l\'accès à la culture. Grâce aux archives en ligne, des millions de personnes peuvent découvrir le patrimoine sans se déplacer.',
      },
      {
        art: {
          image: 'https://atlasimmobilier.com/wp-content/uploads/2025/12/riad-marrakech-projet-cle-en-main-piscine-chauffee-28-1170x650.webp',
          title: 'Marrakech Médina',
          artist: 'Projet de numérisation 3D',
          period: 'Afrique & Maroc'
        },
        type: 'culture',
        question: 'Le projet "Marrakech Médina" est un exemple de…',
        choices: [
          'Construction de nouveaux bâtiments modernes',
          'Numérisation du patrimoine via modèles 3D et visites virtuelles',
          'Festival de musique électronique',
          'Exportation d\'œuvres vers l\'Europe'
        ],
        correct: 1,
        explanation: 'Le projet "Marrakech Médina" a numérisé les sites historiques de Marrakech via des modèles 3D et des visites virtuelles — exemple concret de préservation numérique du patrimoine marocain.',
      },
    ],
  },

 
]

export const POINTS = { fast: 150, medium: 100, slow: 60 }
export const TIMER_MAX = 20

export const RANKS = [
  { min: 0.85, badge: '🏆', label: "Grand Maître Culturel" },
  { min: 0.70, badge: '🎨', label: 'Critique Confirmé' },
  { min: 0.50, badge: '🖼️', label: 'Explorateur Averti' },
  { min: 0.30, badge: '🗺️', label: 'Voyageur Curieux' },
  { min: 0,    badge: '🌱', label: 'Apprenti Explorateur' },
]

export function getRank(score, totalQ) {
  const maxScore = totalQ * POINTS.fast
  const pct = maxScore > 0 ? score / maxScore : 0
  return RANKS.find(r => pct >= r.min) || RANKS[RANKS.length - 1]
}

export function getPoints(timeLeft) {
  if (timeLeft >= 14) return POINTS.fast
  if (timeLeft >= 7)  return POINTS.medium
  return POINTS.slow
}
