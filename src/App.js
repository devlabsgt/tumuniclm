import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import CustomNavbar from "./components/CustomNavbar";
import Memoria from "./components/memoria2/Memoria";
import NotFound from "./components/notfound/NotFound";
import MenuInfo from "./components/informacionpublica/MenuInfo";
import WEBPview from "./components/webpview/WEBPview";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/memoria2025" element={<Memoria />} />
        <Route
          path="/chuctifer2026"
          element={<WEBPview basePath="/img/programa2026" totalPages={20} />}
        />
        <Route path="/informacionpublica" element={<MenuInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
