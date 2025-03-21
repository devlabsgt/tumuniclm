import React from "react";
import Charts from "./Charts";
import ImageCarousel from "./ImageCarousel";

const data = [
  {
    nombre: "Apoyo a la salud y Farmacia",
    presupuestado: 84500.0,
    ejecutado: 129575.82,
  },
];

const SaludChart = () => {
  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Charts
        description="La política de <b><span style='color: #06c;'>#Salud🩺</span></b> busca fortalecer el bienestar de nuestra comunidad a través del <b>apoyo a la atención médica</b> y la mejora de los <b>servicios de salud</b>. Trabajamos para garantizar el acceso a una atención <b>digna</b> y <b>de calidad</b> para todos."
        data={data}
        chartFontSizeX={window.innerWidth < 768 ? 14 : 25}
        chartFontSizeY={window.innerWidth < 768 ? 14 : 16}
        chartHeight={window.innerWidth < 768 ? "500px" : "600px"}
        chartCanvasWidth={window.innerWidth < 768 ? "350px" : "200px"}
      />
      <ImageCarousel start={46} end={47} />
    </div>
  );
};

export default SaludChart;
