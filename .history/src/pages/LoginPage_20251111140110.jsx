// src/pages/LoginPage.jsx
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { services } from "../data/mockData";

export default function LoginPage() {
  const { code } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const service = services.find(s => s.code === code);

  const handleLogin = (e) => {
    e.preventDefault();

    // SIMULATION API LARAVEL
    if (email === "etatcivil@zig.sn" && password === "123456") {
      localStorage.setItem("user", JSON.stringify({ service: code, email }));
      navigate(`/dashboard/${code}`);
    } else {
      setError("Identifiants incorrects");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl">
            🔍
          </div>
          <h1 className="text-2xl font-bold text-gray-800">{service?.name}</h1>
          <p className="text-gray-600">Connexion sécurisée</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="ex: agent@zig.sn"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Se connecter
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-6">
          Simulation : email: <code>etatcivil@zig.sn</code> | mdp: <code>123456</code>
        </p>
      </div>
    </div>
  );
}