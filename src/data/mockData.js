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
      "Organisation de l'agenda documentaire du Maire",
      "Transmission des décisions"
    ]
  },
  {
    id: 4,
    name: "CHEF DE SERVICE (x13)",
    role: "Responsable opérationnel d'un service",
    service: "Chacun des 13 services",
    profile: "Gestionnaire niveau opérationnel",
    responsibilities: [
      "Validation des documents de son service",
      "Gestion de l'équipe d'agents",
      "Attribution des tâches documentaires",
      "Contrôle qualité des documents produits",
      "Statistiques et reporting de son service"
    ]
  },
  {
    id: 5,
    name: "AGENT MUNICIPAL (≈50-100 agents)",
    role: "Producteur/utilisateur de documents",
    service: "Réparti dans les 13 services",
    profile: "Utilisateur standard",
    responsibilities: [
      "Création de documents",
      "Modification de documents non validés",
      "Recherche et consultation de documents",
      "Demande de validation",
      "Suivi des dossiers"
    ]
  },
  {
    id: 6,
    name: "ARCHIVISTE MUNICIPAL",
    role: "Gestionnaire du cycle de vie documentaire",
    service: "Archives Municipales (S13)",
    profile: "Spécialiste archivage",
    responsibilities: [
      "Gestion du cycle de vie des documents",
      "Transfert vers archives intermédiaires/définitives",
      "Numérisation des archives papier",
      "Application des durées de conservation",
      "Élimination réglementaire des documents",
      "Conformité aux normes d'archivage"
    ]
  },
  {
    id: 7,
    name: "ADMINISTRATEUR SYSTÈME",
    role: "Gestionnaire technique de la plateforme",
    service: "Cellule Informatique (S10)",
    profile: "Super-administrateur",
    responsibilities: [
      "Gestion des utilisateurs et droits",
      "Configuration du système",
      "Paramétrage des workflows",
      "Maintenance technique",
      "Sauvegardes et restaurations",
      "Sécurité et logs système",
      "Support technique niveau 2"
    ]
  },
  {
    id: 8,
    name: "CONTRÔLEUR FINANCIER",
    role: "Validation des engagements financiers",
    service: "Finances (S02)",
    profile: "Validateur spécialisé",
    responsibilities: [
      "Validation des pièces comptables",
      "Contrôle des bons de commande",
      "Visa des marchés publics",
      "Accès aux documents financiers"
    ]
  },
  {
    id: 9,
    name: "JURISTE",
    role: "Conseil et validation juridique",
    service: "Cellule Juridique (S09)",
    profile: "Consultant spécialisé",
    responsibilities: [
      "Validation juridique des contrats",
      "Avis sur les délibérations",
      "Gestion des contentieux",
      "Consultation des dossiers sensibles"
    ]
  },
  {
    id: 10,
    name: "CITOYEN/PARTENAIRE EXTERNE",
    role: "Demandeur de documents publics",
    service: "Externe",
    profile: "Consultation limitée (future extension)",
    responsibilities: [
      "Demande de documents publics (état civil)",
      "Consultation délibérations publiques",
      "Suivi de dossiers personnels (urbanisme)",
      "(Module optionnel - phase 2)"
    ]
  }
];

export const relations = [
  { emitter: "Tous les services", receiver: "Secrétariat Général", type: "Rapports, notes, projets de délibération", workflow: "Validation coordination" },
  { emitter: "Secrétariat Général", receiver: "Cabinet du Maire", type: "Documents validés", workflow: "Signature finale" },
  { emitter: "Urbanisme", receiver: "Juridique", type: "Projets de permis, conventions", workflow: "Avis juridique" },
  { emitter: "Finances", receiver: "Tous les services", type: "Notifications budgétaires", workflow: "Information" },
  { emitter: "RH", receiver: "Finances", type: "États de paie, engagements", workflow: "Validation financière" },
  { emitter: "Services Techniques", receiver: "Finances", type: "Bons de commande, factures", workflow: "Validation financière" },
  { emitter: "Tous les services", receiver: "Archives", type: "Documents > 5 ans", workflow: "Archivage" },
  { emitter: "État Civil", receiver: "Citoyen", type: "Actes, certificats", workflow: "Délivrance" },
  { emitter: "Communication", receiver: "Tous les services", type: "Demandes d'information", workflow: "Collecte info" },
  { emitter: "DPCT", receiver: "Tous les services", type: "Plans, programmes", workflow: "Coordination projets" },
  { emitter: "Juridique", receiver: "Tous les services", type: "Avis, conseils juridiques", workflow: "Consultation" },
  { emitter: "Partenariat", receiver: "Cabinet + SG", type: "Conventions partenariat", workflow: "Validation haute" }
];

export const circuits = [
  { number: 1, name: "Document Standard", steps: "Agent → Chef de Service → Validation finale", examples: "note interne, compte-rendu de réunion" },
  { number: 2, name: "Document Important", steps: "Agent → Chef de Service → Secrétaire Général → Validation finale", examples: "rapport annuel, projet de programme" },
  { number: 3, name: "Document Stratégique", steps: "Agent → Chef de Service → Secrétaire Général → Maire", examples: "délibération, arrêté municipal, convention majeure" },
  { number: 4, name: "Document avec Avis Technique", steps: "Agent → Chef de Service → Service Consulté (Juridique/Finances) → Secrétaire Général → Maire", examples: "marché public, contrat, convention avec engagement financier" },
  { number: 5, name: "Document Multi-Services", steps: "Service Initiateur → Services Contributeurs (parallèle) → Secrétaire Général → Validation finale", examples: "projet transversal, plan communal" }
];

export const permissions = [
  { actor: "Maire", create: "✓", read: "✓", modify: "✓", delete: "✗", validate: "✓", archive: "✗", administer: "✗", scope: "Tous services" },
  { actor: "Secrétaire Général", create: "✓", read: "✓", modify: "✓", delete: "✗", validate: "✓", archive: "✗", administer: "✗", scope: "Tous services" },
  { actor: "Directeur Cabinet", create: "✓", read: "✓", modify: "✓", delete: "✗", validate: "✓", archive: "✗", administer: "✗", scope: "Cabinet + transversal" },
  { actor: "Chef de Service", create: "✓", read: "✓", modify: "✓", delete: "✓*", validate: "✓", archive: "✗", administer: "✗", scope: "Son service uniquement" },
  { actor: "Agent Municipal", create: "✓", read: "✓", modify: "✓**", delete: "✗", validate: "✗", archive: "✗", administer: "✗", scope: "Son service uniquement" },
  { actor: "Archiviste", create: "✗", read: "✓", modify: "✗", delete: "✗", validate: "✗", archive: "✓", administer: "✗", scope: "Tous services (lecture)" },
  { actor: "Admin Système", create: "✓", read: "✓", modify: "✓", delete: "✓", validate: "✗", archive: "✗", administer: "✓", scope: "Tous services" },
  { actor: "Contrôleur Financier", create: "✗", read: "✓", modify: "✗", delete: "✗", validate: "✓", archive: "✗", administer: "✗", scope: "Documents financiers" },
  { actor: "Juriste", create: "✗", read: "✓", modify: "✗", delete: "✗", validate: "✓***", archive: "✗", administer: "✗", scope: "Documents juridiques" }
];

export const permissionLegends = [
  "✓ = Droit accordé",
  "✗ = Droit refusé",
  "* = Suppression uniquement documents non validés de son service",
  "** = Modification uniquement ses propres documents non validés",
  "*** = Avis juridique (pas validation administrative)"
];

export const securityRules = [
  { rule: "S1", name: "Confidentialité RH", description: "Documents RH (contrats, dossiers agents) : accès limité à DRH, SG, Maire, Admin. Pas d'accès aux autres services" },
  { rule: "S2", name: "Confidentialité Finances", description: "Pièces comptables sensibles : accès limité au service Finances, Contrôleur, SG, Maire. Autres services : consultation uniquement de leur budget propre" },
  { rule: "S3", name: "Documents Publics", description: "Délibérations publiées : consultation publique (future extension). Actes d'état civil : accès contrôlé (concerné + services habilités)" },
  { rule: "S4", name: "Documents Juridiques Sensibles", description: "Contentieux en cours : accès limité (Juriste, SG, Maire, service concerné). Interdiction d'export sans autorisation" },
  { rule: "S5", name: "Modification et Versioning", description: "Document validé = verrouillé → seule nouvelle version possible. Document en cours de validation = modification interdite. Historique complet conservé (qui, quand, quoi)" }
];