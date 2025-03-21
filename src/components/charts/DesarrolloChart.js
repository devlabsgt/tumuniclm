import React from "react";
import Charts from "./Charts";
import ImageCarousel from "./ImageCarousel";

const data = [
  { nombre: "Dotación 2023", presupuestado: 700000.0, ejecutado: 677524.0 },
  {
    nombre: "COINCEP",
    presupuestado: 219300.0,
    ejecutado: 162342.54,
  },
];

const DesarrolloChart = () => {
  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Charts
        description="La política de <b><span style='color: #06c;'>#DesarrolloEconómico📈</span></b> impulsa el crecimiento local a través de la <b>asistencia técnica</b> y la <b>dotación de insumos</b>. Estas acciones fortalecen el trabajo productivo y crean oportunidades para mejorar la economía de nuestra comunidad."
        data={data}
        chartFontSizeX={window.innerWidth < 768 ? 14 : 25}
        chartFontSizeY={window.innerWidth < 768 ? 14 : 16}
        chartHeight={window.innerWidth < 768 ? "500px" : "600px"}
        chartCanvasWidth={window.innerWidth < 768 ? "350px" : "200px"}
      />
      <ImageCarousel start={53} end={53} />
    </div>
  );
};

export default DesarrolloChart;
