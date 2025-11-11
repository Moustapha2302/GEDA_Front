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
                <p className="text