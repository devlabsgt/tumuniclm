import React from "react";
import Charts from "./Charts";
import ImageCarousel from "./ImageCarousel"; // 🔹 Importamos el nuevo componente

const data = [
  { nombre: "Pozo Valeriano", presupuestado: 31000, ejecutado: 683110.48 },
  {
    nombre: "Calle y drenaje La Loma",
    presupuestado: 454000,
    ejecutado: 304681.2,
  },
  {
    nombre: "Calle y drenaje Cabecera",
    presupuestado: 276000,
    ejecutado: 160993,
  },
  {
    nombre: "Escuela Monte Barroso",
    presupuestado: 87500,
    ejecutado: 311212.5,
  },
  {
    nombre: "Líneas eléctricas El Aguajal",
    presupuestado: 726000,
    ejecutado: 409171.6,
  },
  {
    nombre: "Parada de buses La Ermita",
    presupuestado: 254000,
    ejecutado: 253200,
  },
  {
    nombre: "Pavimento San Antonio",
    presupuestado: 2007000,
    ejecutado: 1818740,
  },
  {
    nombre: "Construcción Gimnasio",
    presupuestado: 4800000,
    ejecutado: 2400000,
  },
  {
    nombre: "Pozo El Solapado",
    presupuestado: 599995.06,
    ejecutado: 599995.06,
  },
  {
    nombre: "Escuela El Jícaro",
    presupuestado: 126988.83,
    ejecutado: 126988.83,
  },
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
