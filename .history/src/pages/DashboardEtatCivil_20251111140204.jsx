// src/pages/DashboardEtatCivil.jsx
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function DashboardEtatCivil() {
  const { code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user || JSON.parse(user).service !== code) {
      navigate(`/login/${code}`);
    }
  }, [code, navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="flex">
        <aside className="w-64 bg-white shadow-lg h-screen fixed">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white">🏛️</div>
              <div>
                <p className="font-bold text-sm">Mairie de Ziguinchor</p>
                <p className="text-xs text-gray-500">Service: État Civil</p>
              </div>
            </div>

            <nav className="space-y-2">
              <a href="#" className="flex items-center gap-3 p-3 bg-blue-50 text-blue-700 rounded-lg">
                <span>📊</span> Tableau de bord
              </a>
              <a href="#" className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
                <span>📄</span> Actes d'État Civil
              </a>
              <a href="#" className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
                <span>📋</span> Registres
              </a>
              <a href="#" className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
                <span>📁</span> Mes Documents
              </a>
              <a href="#" className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
                <span>🔍</span> Recherche
              </a>
              <a href="#" className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
                <span>✅</span> Validation
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-64 p-8 flex-1">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Tableau de bord - État Civil</h1>
            <div className="flex items-center gap-4">
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs">3</span>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">A</div>
                <span>Agent Municipal</span>
              </div>
            </div>
          </header>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-5 rounded-xl shadow">
              <p className="text-3xl font-bold">12,847</p>
              <p className="text-sm text-gray-600">Documents totaux</p>
              <p className="text-xs text-green-600">+12% vs mois dernier</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow">
              <p className="text-3xl font-bold">1,234</p>
              <p className="text-sm text-gray-600">Documents ce mois</p>
              <p className="text-xs text-green-600">+8% vs mois dernier</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow">
              <p className="text-3xl font-bold">47</p>
              <p className="text-sm text-gray-600">En attente de validation</p>
              <p className="text-xs text-red-600">-5% vs mois dernier</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow">
              <p className="text-3xl font-bold">3,892</p>
              <p className="text-sm text-gray-600">Archives créées</p>
              <p className="text-xs text-green-600">+15% vs mois dernier</p>
            </div>
          </div>

          {/* Documents récents */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Documents récents</h2>
              <a href="#" className="text-blue-600 text-sm">Voir tout</a>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-600 border-b">
                  <th className="pb-2">DOCUMENT</th>
                  <th className="pb-2">SERVICE</th>
                  <th className="pb-2">DATE</th>
                  <th className="pb-2">STATUT</th>
                  <th className="pb-2">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3">Délibération Conseil Municipal...</td>
                  <td>Secrétariat Général</td>
                  <td>15/12/2024</td>
                  <td><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Validé</span></td>
                  <td><span className="text-gray-400">👁️ 📄</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}