// src/pages/DashboardEtatCivil.jsx
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronDown, Bell, User, Eye, Download, Upload, Camera, FolderPlus, FileText, Archive, File, Edit } from "lucide-react";
import SidebarMenu from "../components/SidebarMenu";

export default function DashboardEtatCivil() {
  const { code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user || JSON.parse(user).service !== code) {
      navigate(`/login/${code}`);
    }
  }, [code, navigate]);

  const stats = [
    { label: "Documents totaux", value: "12,847", change: "+12%", color: "blue", icon: FileText },
    { label: "Documents ce mois", value: "1,234", change: "+8%", color: "green", icon: FileText },
    { label: "En attente de validation", value: "47", change: "-5%", color: "orange", icon: Upload },
    { label: "Archives créées", value: "3,892", change: "+15%", color: "purple", icon: Archive }
  ];

  const recentDocs = [
    {
      id: 1,
      name: "Acte de naissance - Fatou Ndiaye",
      size: "1.2 MB",
      author: "Par Agent État Civil",
      service: "État Civil",
      date: "11/11/2025",
      status: "En cours",
      statusColor: "bg-yellow-100 text-yellow-700"
    },
    {
      id: 2,
      name: "Certificat de mariage - Mamadou Ba",
      size: "0.8 MB",
      author: "Par Agent État Civil",
      service: "État Civil",
      date: "10/11/2025",
      status: "Validé",
      statusColor: "bg-green-100 text-green-700"
    },
    {
      id: 3,
      name: "Acte de décès - Aïssatou Cissé",
      size: "0.9 MB",
      author: "Par Agent État Civil",
      service: "État Civil",
      date: "09/11/2025",
      status: "Archivé",
      statusColor: "bg-purple-100 text-purple-700"
    },
    {
      id: 4,
      name: "Certificat de naissance - Ibrahima Sow",
      size: "1.1 MB",
      author: "Par Agent État Civil",
      service: "État Civil",
      date: "08/11/2025",
      status: "En cours",
      statusColor: "bg-yellow-100 text-yellow-700"
    }
  ];

  const handleEdit = (doc) => {
    if (doc.status === 'Validé' || doc.status === 'Archivé') {
      alert(`Document "${doc.name}" verrouillé (matrice des droits : modification interdite sur documents validés/archivés)`);
      return;
    }
    alert(`Modifier document "${doc.name}" - Statut : ${doc.status} (Modification autorisée)`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-md h-screen fixed flex flex-col">
        <div className="p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white text-xl">GEDA</div>
            <div>
              <p className="font-bold text-sm">Mairie de Ziguinchor</p>
              <p className="text-xs text-gray-500">Service: État Civil (S01)</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <a href="#" className="flex items-center gap-3 p-3 bg-blue-50 text-blue-700 rounded-lg font-medium">
            <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
            Tableau de bord
          </a>

          <SidebarMenu icon={<File className="w-5 h-5" />} label="Actes d'État Civil" items={["Actes de naissance", "Actes de mariage", "Actes de décès", "Certificats"]} />
          <SidebarMenu icon={<FolderPlus className="w-5 h-5" />} label="Registres" items={["Registre des naissances", "Registre des mariages", "Registre des décès"]} />
          <SidebarMenu icon={<FileText className="w-5 h-5" />} label="Mes Documents" items={["Documents récents", "Mes brouillons", "Documents partagés"]} />
          <SidebarMenu icon={<Upload className="w-5 h-5" />} label="Validation" items={["En attente", "Validés", "Historique"]} />
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 ml-64">
        <header className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
          <p className="text-sm text-gray-500">Système de Gestion Documentaire - Mairie de Ziguinchor</p>
          <div className="flex items-center gap-4">
            <button className="relative p-2">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">A</div>
              <div>
                <p className="text-sm font-medium">Agent Municipal</p>
                <p className="text-xs text-gray-500">État Civil</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </header>

        <main className="p-8">
          {/* STATS */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-500`} />
                </div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className={`text-xs mt-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} vs mois dernier
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* DOCUMENTS RÉCENTS */}
            <div className="col-span-2 bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Documents récents</h2>
                <a href="#" className="text-blue-600 text-sm font-medium">Voir tout</a>
              </div>

              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-600 border-b">
                    <th className="pb-3">DOCUMENT</th>
                    <th className="pb-3">SERVICE</th>
                    <th className="pb-3">DATE</th>
                    <th className="pb-3">STATUT</th>
                    <th className="pb-3">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {recentDocs.map((doc) => (
                    <tr key={doc.id} className="border-b">
                      <td className="py-4">
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-xs text-gray-500">{doc.size} • {doc.author}</p>
                      </td>
                      <td className="py-4 text-gray-700">{doc.service}</td>
                      <td className="py-4 text-gray-700">{doc.date}</td>
                      <td className="py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${doc.statusColor}`}>
                          {doc.status}
                        </span>
                      </td>
                      <td className="py-4">
                        <div className="flex gap-2">
                          <Edit 
                            className={`w-4 h-4 cursor-pointer ${doc.status === 'Validé' || doc.status === 'Archivé' ? 'text-gray-400' : 'text-blue-600'}`}
                            onClick={() => handleEdit(doc)}
                            title={doc.status === 'Validé' || doc.status === 'Archivé' ? 'Verrouillé (Règle S5)' : 'Modifier'}
                          />
                          <Eye className="w-4 h-4 text-gray-600 cursor-pointer" title="Voir" />
                          <Download className="w-4 h-4 text-gray-600 cursor-pointer" title="Télécharger" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ACTIONS RAPIDES */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold mb-4">Actions rapides</h3>
              <p className="text-sm text-gray-600 mb-6">Accès direct aux fonctions principales</p>

              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition">
                  <FileText className="w-5 h-5" />
                  <div className="text-left">
                    <p className="font-medium">Ajouter un document</p>
                    <p className="text-xs">Télécharger un nouveau document</p>
                  </div>
                  <ChevronDown className="w-4 h-4 ml-auto rotate-[-90]" />
                </button>

                <button className="w-full flex items-center gap-3 p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition">
                  <Camera className="w-5 h-5" />
                  <div className="text-left">
                    <p className="font-medium">Numériser</p>
                    <p className="text-xs">Scanner un document papier</p>
                  </div>
                  <ChevronDown className="w-4 h-4 ml-auto rotate-[-90]" />
                </button>

                <button className="w-full flex items-center gap-3 p-4 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition">
                  <FolderPlus className="w-5 h-5" />
                  <div className="text-left">
                    <p className="font-medium">Créer un dossier</p>
                    <p className="text-xs">Organiser les documents</p>
                  </div>
                  <ChevronDown className="w-4 h-4 ml-auto rotate-[-90]" />
                </button>

                <button className="w-full flex items-center gap-3 p-4 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition">
                  <FileText className="w-5 h-5" />
                  <div className="text-left">
                    <p className="font-medium">Rapport mensuel</p>
                    <p className="text-xs">Générer un rapport</p>
                  </div>
                  <ChevronDown className="w-4 h-4 ml-auto rotate-[-90]" />
                </button>

                <button className="w-full flex items-center gap-3 p-4 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition">
                  <Archive className="w-5 h-5" />
                  <div className="text-left">
                    <p className="font-medium">Archivage</p>
                    <p className="text-xs">Archiver des documents</p>
                  </div>
                  <ChevronDown className="w-4 h-4 ml-auto rotate-[-90]" />
                </button>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm font-medium text-blue-700 mb-1">Statistiques du jour</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Documents traités</span>
                    <span className="font-bold">24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Validations en attente</span>
                    <span className="font-bold text-orange-600">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Archives créées</span>
                    <span className="font-bold text-purple-600">12</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                Centre d’aide
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}