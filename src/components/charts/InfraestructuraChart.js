import React from "react";
import Charts from "./Charts";
import ImageCarousel from "./ImageCarousel"; // 🔹 Importamos el nuevo componente

const data = [
  { nombre: "Pozo Valeriano", presupuestado: 500.00, ejecutado: 31582.77 },
  { nombre: "Pozo Guacamayas", presupuestado: 200.00, ejecutado: 784665.00 },
  { nombre: "Calle y Drenaje La Loma", presupuestado: 250000.00, ejecutado: 149296.80 },
  { nombre: "Líneas Eléctricas Los Planes", presupuestado: 1600000.00, ejecutado: 0 },
  { nombre: "Líneas Eléctricas El Aguajal", presupuestado: 160000.00, ejecutado: 0 },
  { nombre: "Pavimento San Antonio", presupuestado: 442000.00, ejecutado: 0 },
  { nombre: "Gimnasio Municipal", presupuestado: 3120000.00, ejecutado: 1044130.18 },
  { nombre: "Puente Valle Arriba", presupuestado: 1300000.00, ejecutado: 2660814.94 },
];


const InfraestructuraChart = () => {
  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Charts
        description="La política de <b><span style='color: #06c;'>#Infraestructura🏗️</span></b> 
        permite mejorar la <b>calidad de vida</b> de nuestra comunidad. A través de obras que fortalecen nuestros servicios, 
        impulsan el desarrollo y crean oportunidades, construimos un entorno más <b>seguro</b>, <b>funcional</b> y <b>sostenible</b> para todos."
        data={data}
        chartFontSizeX={window.innerWidth < 768 ? 14 : 25}
        chartFontSizeY={window.innerWidth < 768 ? 14 : 16}
        chartHeight={window.innerWidth < 768 ? "500px" : "600px"}
        chartCanvasWidth={window.innerWidth < 768 ? "350px" : "200px"}
      />
      {/* 🔹 Llamamos al nuevo componente y le mandamos los números de inicio y fin */}
      <ImageCarousel start={54} end={64} />
    </div>
  );
};

export default InfraestructuraChart;
