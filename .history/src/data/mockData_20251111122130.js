// src/data/mockData.js
export const services = [
  { code: "S01", name: "État Civil", responsable: "Chef Service État Civil", missions: "Actes de naissance, mariage, décès, certifications" },
  { code: "S02", name: "Finances", responsable: "Directeur Financier", missions: "Budget, comptabilité, pièces comptables" },
  { code: "S03", name: "Urbanisme", responsable: "Directeur Urbanisme", missions: "Permis de construire, plans d'occupation, autorisations" },
  { code: "S04", name: "Ressources Humaines", responsable: "DRH", missions: "Dossiers agents, contrats, carrières, paie" },
  { code: "S05", name: "Communication", responsable: "Chef Communication", missions: "Communiqués, rapports publics, relations presse" },
  { code: "S06", name: "Services Techniques Communaux", responsable: "Directeur STC", missions: "Travaux, maintenance, marchés publics" },
  { code: "S07", name: "Direction Planification & Compétences Transférées", responsable: "Directeur DPCT", missions: "Plans de développement, projets transférés" },
  { code: "S08", name: "Cellule Partenariat & Coopération Décentralisée", responsable: "Responsable CPCD", missions: "Conventions, partenariats, coopération" },
  { code: "S09", name: "Cellule Juridique & Contentieux", responsable: "Chef Cellule Juridique", missions: "Contrats, litiges, conseil juridique" },
  { code: "S10", name: "Cellule Informatique", responsable: "Responsable SI", missions: "Infrastructure IT, support technique" },
  { code: "S11", name: "Secrétariat Général", responsable: "Secrétaire Général", missions: "Coordination générale, validation documents" },
  { code: "S12", name: "Cabinet du Maire", responsable: "Directeur de Cabinet", missions: "Courriers maire, décisions stratégiques" },
  { code: "S13", name: "Archives Municipales", responsable: "Archiviste Municipal", missions: "Conservation, archivage définitif" }
];

export const actors = [
  {
    id: 1,
    name: "MAIRE",
    role: "Autorité suprême, décideur final",
    service: "Cabinet du Maire (S12)",
    profile: "Administrateur niveau stratégique",
    responsibilities: [
      "Validation finale des documents stratégiques (délibérations, arrêtés municipaux)",
      "Consultation de tous les documents municipaux",
      "Accès aux tableaux de bord stratégiques",
      "Signature électronique des actes importants"
    ]
  },
  {
    id: 2,
    name: "SECRÉTAIRE GÉNÉRAL",
    role: "Coordonnateur administratif",
    service: "Secrétariat Général (S11)",
    profile: "Administrateur niveau tactique",
    responsibilities: [
      "Validation des documents avant transmission au Maire",
      "Coordination inter-services",
      "Supervision du workflow documentaire",
      "Gestion des urgences administratives",
      "Accès transversal à tous les services"
    ]
  },
  {
    id: 3,
    name: "DIRECTEUR DE CABINET",
    role: "Interface entre le Maire et les services",
    service: "Cabinet du Maire (S12)",
    profile: "Gestionnaire niveau stratégique",
    responsibilities: [
      "Gestion du courrier du Maire",
      "Préparation des dossiers pour validation",
      "Organisation de l’agenda documentaire du Maire",
      "Transmission des décisions"
    ]
  }
];