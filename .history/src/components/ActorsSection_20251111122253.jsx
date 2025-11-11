// src/components/ActorsSection.jsx
import { actors } from "../data/mockData";

export default function ActorsSection() {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-6">2. IDENTIFICATION DES ACTEURS</h2>
      <h3 className="text-lg font-bold mb-4">2.1 Typologie des Acteurs</h3>

      {actors.map((actor, index) => (
        <div key={actor.id} className="mb-8">
          <h4 className="text-base font-bold text-blue-800 mb-3">
            ACTEUR {index + 1} : {actor.name}
          </h4>
          <ul className="ml-6 space-y-1 text-sm">
            <li><strong>Rôle :</strong> {actor.role}</li>
            <li><strong>Service de rattachement :</strong> {actor.service}</li>
            <li><strong>Profil :</strong> {actor.profile}</li>
            <li className="mt-2">
              <strong>Responsabilités dans le GEDA :</strong>
              <ul className="ml-6 mt-1 list-disc space-y-1 text-gray-700">
                {actor.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}