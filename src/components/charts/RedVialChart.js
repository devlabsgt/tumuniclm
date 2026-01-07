import React from "react";
import Charts from "./Charts";
import ImageCarousel from "./ImageCarousel";

const data = [
  {
    nombre: "Conservación de carreteras",
    presupuestado: 7360500.0,
    ejecutado: 7836798.66, 
  },
];

const RedvialChart = () => {
  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Charts
        description="La política de <b><span style='color: #06c;'>#RedVial</span></b> 
        es fundamental para garantizar la conectividad entre comunidades, 
        facilitando el transporte de personas y mercancías. 
        Con estas acciones, <b>viajamos más rápido y seguro</b> y además <b>cuidamos los vehículos</b>, fortaleciendo el <b>desarrollo económico</b> del municipio."
        data={data}
        chartFontSizeX={window.innerWidth < 768 ? 14 : 25}
        chartFontSizeY={window.innerWidth < 768 ? 14 : 16}
        chartHeight={window.innerWidth < 768 ? "500px" : "600px"}
        chartCanvasWidth={window.innerWidth < 768 ? "350px" : "200px"}
      />
      <ImageCarousel start={33} end={35} />
    </div>
  );
};

export default RedvialChart;