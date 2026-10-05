export const features = [
  {
    id: 'questionnaires',
    title: 'Questionnaires sur mesure',
    description:
      'Créez des formulaires élégants avec un éditeur visuel. Questions ouvertes, choix multiples, notations et plus encore.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    accent: '#007BFF',
  },
  {
    id: 'qr',
    title: 'Partage instantané QR',
    description:
      'Générez automatiquement un lien et un QR code pour diffuser vos questionnaires partout, en un clic.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    accent: '#40E0D0',
  },
  {
    id: 'pipeline',
    title: 'Pipeline de réponses',
    description:
      'Suivez chaque réponse comme une carte : Nouvelle, En cours, Traité. Attribuez et priorisez en temps réel.',
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80',
    accent: '#7B1FA2',
  },
  {
    id: 'contacts',
    title: 'Gestion des contacts',
    description:
      'Fiches contact automatiques, historique des questionnaires et détection intelligente des doublons.',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
    accent: '#00C9FF',
  },
];

export const pipelineColumns = [
  {
    id: 'nouvelle',
    title: 'Nouvelle demande',
    color: '#007BFF',
    cards: [
      { id: 'c1', name: 'Camille Dupont', form: 'Satisfaction client Q1', time: 'Il y a 12 min' },
      { id: 'c2', name: 'Hugo Martin', form: 'Onboarding RH', time: 'Il y a 34 min' },
      { id: 'c3', name: 'Léa Bernard', form: 'Feedback événement', time: 'Il y a 1 h' },
    ],
  },
  {
    id: 'encours',
    title: 'En cours',
    color: '#FF9800',
    cards: [
      { id: 'c4', name: 'Noah Petit', form: 'Audit qualité', time: 'Attribué à Sophie' },
      { id: 'c5', name: 'Emma Roux', form: 'Satisfaction client Q1', time: 'Attribué à Marc' },
    ],
  },
  {
    id: 'traite',
    title: 'Traité',
    color: '#2E7D32',
    cards: [
      { id: 'c6', name: 'Lucas Moreau', form: 'NPS mensuel', time: 'Clos hier' },
      { id: 'c7', name: 'Chloé Blanc', form: 'Enquête produit', time: 'Clos il y a 2 j' },
      { id: 'c8', name: 'Adam Girard', form: 'Onboarding RH', time: 'Clos il y a 3 j' },
    ],
  },
];

export const stats = [
  { label: 'Questionnaires créés', value: '12 480', suffix: '+' },
  { label: 'Réponses collectées', value: '890 K', suffix: '' },
  { label: 'Taux de complétion', value: '94', suffix: '%' },
  { label: 'Équipes actives', value: '2 300', suffix: '+' },
];

export const contacts = [
  {
    id: 1,
    name: 'Camille Dupont',
    email: 'camille.dupont@exemple.fr',
    forms: 8,
    status: 'Actif',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
  {
    id: 2,
    name: 'Hugo Martin',
    email: 'hugo.martin@exemple.fr',
    forms: 5,
    status: 'Nouveau',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    id: 3,
    name: 'Léa Bernard',
    email: 'lea.bernard@exemple.fr',
    forms: 12,
    status: 'Actif',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  },
  {
    id: 4,
    name: 'Noah Petit',
    email: 'noah.petit@exemple.fr',
    forms: 3,
    status: 'Doublon détecté',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
  },
];

export const navLinks = [
  { label: 'Fonctionnalités', href: '#fonctionnalites' },
  { label: 'Pipeline', href: '#pipeline' },
  { label: 'Partage QR', href: '#qr' },
  { label: 'Contacts', href: '#contacts' },
];
