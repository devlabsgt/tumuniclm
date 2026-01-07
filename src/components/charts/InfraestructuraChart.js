import React from "react";
import Charts from "./Charts";
import ImageCarousel from "./ImageCarousel";

const data = [
  { nombre: "Pozo Valeriano", presupuestado: 500.00, ejecutado: 31582.77 },
  { nombre: "Pozo Guacamayas", presupuestado: 200.00, ejecutado: 3924700.00 },
  { nombre: "Calle y Drenaje La Loma", presupuestado: 250000.00, ejecutado: 149296.80 },
  { nombre: "Líneas Eléctricas Los Planes", presupuestado: 1600000.00, ejecutado: 0.0 },
  { nombre: "Líneas Eléctricas El Aguajal", presupuestado: 160000.00, ejecutado: 0.0 },
  { nombre: "Pavimento San Antonio", presupuestado: 442000.00, ejecutado: 0.0 },
  { nombre: "Gimnasio Municipal", presupuestado: 3120000.00, ejecutado: 1722547.60 },
  { nombre: "Puente Valle Arriba", presupuestado: 1300000.00, ejecutado: 5116890.40 },
  // 🔹 Proyectos adicionales encontrados en el CSV para cuadrar el total:
  { nombre: "Agua Potable Aldea Dolores", presupuestado: 0.0, ejecutado: 89663.00 },
  { nombre: "Agua Potable La Canada", presupuestado: 0.0, ejecutado: 787.00 },
  { nombre: "Escuela Primaria Aldea Dolores", presupuestado: 0.0, ejecutado: 5000.00 },
  { nombre: "Camino Rural Las Cruces", presupuestado: 0.0, ejecutado: 1000.00 },
  { nombre: "Camino Rural Alambrados", presupuestado: 0.0, ejecutado: 1000.00 },
];

const InfraestructuraChart = () => {
  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Charts
        description="La política de <b><span style='color: #06c;'>#Infraestructura🏗️</span></b> permite mejorar la <b>calidad de vida</b> de nuestra comunidad. A través de obras que fortalecen nuestros servicios, impulsan el desarrollo y crean oportunidades."
        data={data}
        chartFontSizeX={window.innerWidth < 768 ? 14 : 25}
        chartFontSizeY={window.innerWidth < 768 ? 14 : 16}
        chartHeight={window.innerWidth < 768 ? "500px" : "600px"}
        chartCanvasWidth={window.innerWidth < 768 ? "350px" : "200px"}
      />
      <ImageCarousel start={54} end={64} />
    </div>
  );
};

export default InfraestructuraChart;