// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DashboardEtatCivil from "./pages/DashboardEtatCivil";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login/:code" element={<LoginPage />} />
        <Route path="/dashboard/:code" element={<DashboardEtatCivil />} />
      </Routes>
    </BrowserRouter>
  );
}