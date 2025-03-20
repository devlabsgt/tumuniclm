import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import CustomNavbar from "./components/CustomNavbar";
// import ProgramaFeria from "./components/programaferia/ProgramaFeria";
import Memoria from "./components/memoria2/Memoria";
import NotFound from "./components/notfound/NotFound"; // Importamos la página de error
import MenuInfo from "./components/informacionpublica/MenuInfo";
function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        {/* <Route path="/chuctifer2025" element={<ProgramaFeria />} /> */}
        <Route path="/memoria2024" element={<Memoria />} />
        <Route path="/informacionpublica" element={<MenuInfo />} />{" "}
        {/* Nueva Ruta */}
        <Route path="*" element={<NotFound />} /> {/* Ruta 404 */}
      </Routes>
    </Router>
  );
}

export default App;
