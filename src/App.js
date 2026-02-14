import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import CustomNavbar from "./components/CustomNavbar";
import Memoria from "./components/memoria2/Memoria";
import NotFound from "./components/notfound/NotFound";
import MenuInfo from "./components/informacionpublica/MenuInfo";
import PDFview from "./components/pdfview/PDFview";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route
          path="/memoria2025"
          element={<PDFview pdfUrl="/memoria2025.pdf" />}
        />
        <Route
          path="/chuctifer2026"
          element={<PDFview pdfUrl="/ProgramaFeria2026.pdf" />}
        />
        <Route path="/informacionpublica" element={<MenuInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
