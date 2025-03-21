import React from "react";
import Charts from "./Charts";
import ImageCarousel from "./ImageCarousel";

const data = [
  { nombre: "Reforestación", presupuestado: 418000.0, ejecutado: 728537.34 },
  { nombre: "Forestación", presupuestado: 339200.0, ejecutado: 316554.87 },
  {
    nombre: "Recolección desechos sólidos",
    presupuestado: 1337000.0,
    ejecutado: 1872591.04,
  },
];

const MedioAmbienteChart = () => {
  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Charts
        description="La política de <b><span style='color: #06c;'>#MedioAmbiente🌿</span></b> protege nuestros recursos naturales a través de <b>reforestación</b>, <b>forestación</b> y <b>manejo adecuado de desechos</b>. Con estas acciones, promovemos un entorno <b>limpio</b>, <b>sostenible</b> y saludable para las futuras generaciones."
        data={data}
        chartFontSizeX={window.innerWidth < 768 ? 14 : 25}
        chartFontSizeY={window.innerWidth < 768 ? 14 : 16}
        chartHeight={window.innerWidth < 768 ? "500px" : "600px"}
        chartCanvasWidth={window.innerWidth < 768 ? "350px" : "200px"}
      />
      <ImageCarousel start={48} end={52} />
    </div>
  );
};

export default MedioAmbienteChart;
