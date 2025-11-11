// src/pages/AnalysisPage.jsx
import ServicesTable from "../components/ServicesTable";
import ActorsSection from "../components/ActorsSection";

export default function AnalysisPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 font-sans text-sm leading-relaxed">
      {/* Titre principal */}
      <header className="text-center mb-8">
        <h1 className="text-2xl font-bold uppercase">
          DOCUMENT : ANALYSE DES ACTEURS ET RELATIONS ENTRE SERVICES
        </h1>
        <p className="text-lg font-medium mt-2">
          Système de Gestion Électronique des Documents et Archives (GEDA)
        </p>
        <p className="text-base">Mairie de Ziguinchor</p>
        <hr className="mt-6 border-gray-400" />
      </header>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">1. CARTOGRAPHIE DES SERVICES MUNICIPAUX</h2>
        <ServicesTable />
      </section>

      {/* Section 2 */}
      <section>
        <ActorsSection />
      </section>
    </div>
  );
}