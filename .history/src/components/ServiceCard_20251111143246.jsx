// src/components/ServiceCard.jsx
import { useNavigate } from "react-router-dom";

export default function ServiceCard({ service, icon, bgColor }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/login/${service.code}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`p-5 rounded-xl border-2 ${bgColor} shadow-md hover:shadow-xl transition-all cursor-pointer transform hover:scale-105`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="text-3xl">{icon}</div>
        <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-700 border">
          {service.code}
        </span>
      </div>
      <h3 className="font-bold text-gray-800 text-lg mb-1">{service.name}</h3>
      <p className="text-sm text-gray-600 mb-2 line-clamp-2">{service.missions}</p>
      <p className="text-xs text-gray-500 italic">{service.responsable}</p>
    </div>
  );
}