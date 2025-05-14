import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import CustomNavbar from "./components/CustomNavbar";
// import ProgramaFeria from "./components/programaferia/ProgramaFeria";
import Memoria from "./components/memoria2/Memoria";
import NotFound from "./components/notfound/NotFound"; // Importamos la página de error
import MenuInfo from "./components/informacionpublica/MenuInfo";
import CanvaEmbed from "./components/canva/CanvaEmbed";
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
        <Route
          path="/test"
          element={
            <div className="p-4 mt-10">
              <h1 className="text-2xl font-bold mb-4">Programa Feria 2025</h1>
              <CanvaEmbed src="https://www.canva.com/design/DAF7T7AF8UQ/xASasssfCctgZobdoJqDng/view?embed" />
            </div>
          }
        />{" "}
        {/* Nueva Ruta */}
        <Route path="*" element={<NotFound />} /> {/* Ruta 404 */}
      </Routes>
    </Router>
  );
}

export default App;
