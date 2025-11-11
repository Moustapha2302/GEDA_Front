// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnalysisPage from "./pages/AnalysisPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnalysisPage />} />
      </Routes>
    </BrowserRouter>
  );
}