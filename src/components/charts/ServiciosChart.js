import React from "react";
import Charts from "./Charts";
import ImageCarousel from "./ImageCarousel";

const data = [
  { nombre: "Sistema de Agua Potable", presupuestado: 769500.00, ejecutado: 139855.27 },
  { nombre: "Saneamiento Mercado Municipal", presupuestado: 252000.00, ejecutado: 61654.02 },
  { nombre: "Cementerio", presupuestado: 100000.00, ejecutado: 27400.70 },
  { nombre: "Alcantarillado", presupuestado: 100000.00, ejecutado: 8405.00 },
  { nombre: "Alumbrado Público", presupuestado: 415000.00, ejecutado: 68974.37 },
  { nombre: "Instalaciones Deportivas", presupuestado: 365000.00, ejecutado: 108229.32 },
];


const ServiciosChart = () => {
  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Charts
        description="La política de <b><span style='color: #06c;'>#ServiciosPúblicos🏛️</span></b> busca garantizar espacios y servicios esenciales para nuestra comunidad. Desde el mantenimiento del <b>agua potable</b> hasta la mejora del <b>alumbrado público</b>, trabajamos para que cada persona tenga acceso a un entorno <b>seguro</b>, <b>saludable</b> y <b>digno</b>."
        data={data}
        chartFontSizeX={window.innerWidth < 768 ? 14 : 25}
        chartFontSizeY={window.innerWidth < 768 ? 14 : 16}
        chartHeight={window.innerWidth < 768 ? "500px" : "600px"}
        chartCanvasWidth={window.innerWidth < 768 ? "350px" : "200px"}
      />
      <ImageCarousel start={36} end={41} />
    </div>
  );
};

export default ServiciosChart;
