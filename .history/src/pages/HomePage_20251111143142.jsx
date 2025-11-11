// src/pages/HomePage.jsx
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/mockData";  // ← DOIT ÊTRE ICI

const icons = ["🔍","💰","🏗️","👥","📢","⚙️","📋","🤝","⚖️","💻","📊","📜","📚"];
const bgColors = [
  "bg-blue-100 border-blue-500", "bg-green-100 border-green-500", "bg-orange-100 border-orange-500",
  "bg-purple-100 border-purple-500", "bg-pink-100 border-pink-500", "bg-yellow-100 border-yellow-500",
  "bg-indigo-100 border-indigo-500", "bg-teal-100 border-teal-500", "bg-red-100 border-red-500",
  "bg-cyan-100 border-cyan-500", "bg-emerald-100 border-emerald-500", "bg-gray-100 border-gray-500",
  "bg-amber-100 border-amber-500"
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="text-center py-8">
        <div className="w-20 h-20 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center text-white text-4xl shadow-lg">
          🏛️
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Système de Gestion Documentaire</h1>
        <p className="text-lg text-gray-600 mt-1">Mairie de Ziguinchor - Connexion par Service</p>
      </header>

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">Sélectionnez votre service</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.code} service={service} icon={icons[i]} bgColor={bgColors[i]} />
          ))}
        </div>
      </div>

      <footer className="mt-16 text-center text-sm text-gray-500 pb-6">
        © 2024 Mairie de Ziguinchor - Tous droits réservés
      </footer>
    </div>
  );
}