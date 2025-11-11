// src/components/ServicesTable.jsx
import { services } from "../data/mockData";

export default function ServicesTable() {
  return (
    <div className="mb-10">
      <h3 className="text-lg font-bold mb-3">1.1 Services Identifiés</h3>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-gray-400">
            <th className="text-left font-bold py-2">Code</th>
            <th className="text-left font-bold py-2">Service</th>
            <th className="text-left font-bold py-2">Responsable</th>
            <th className="text-left font-bold py-2">Missions Principales</th>
          </tr>
        </thead>
        <tbody>
          {services.map((s) => (
            <tr key={s.code} className="border-b border-gray-300">
              <td className="py-2 font-mono">{s.code}</td>
              <td className="py-2">{s.name}</td>
              <td className="py-2">{s.responsable}</td>
              <td className="py-2 text-gray-700">{s.missions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}