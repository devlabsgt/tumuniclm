import React from "react";
import Charts from "./Charts";
import ImageCarousel from "./ImageCarousel";

const data = [
  {
    nombre: "Ordenamiento vial y seguridad ciudadana",
    presupuestado: 946000.0,
    ejecutado: 991708.27,
  },
];

const SeguridadChart = () => {
  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Charts
        description="La política de <b><span style='color: #06c;'>#Seguridad🚔</span></b> busca fortalecer el <b>ordenamiento vial</b> y la <b>seguridad ciudadana</b> en nuestro municipio. A través de estas acciones, garantizamos una convivencia más <b>segura</b> y promovemos el bienestar de todos los ciudadanos."
        data={data}
        chartFontSizeX={window.innerWidth < 768 ? 14 : 25}
        chartFontSizeY={window.innerWidth < 768 ? 14 : 16}
        chartHeight={window.innerWidth < 768 ? "500px" : "600px"}
        chartCanvasWidth={window.innerWidth < 768 ? "350px" : "200px"}
      />
      <ImageCarousel start={42} end={45} />
    </div>
  );
};

export default SeguridadChart;
