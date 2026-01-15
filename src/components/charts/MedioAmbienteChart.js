import React from "react";
import Charts from "./Charts";
import ImageCarousel from "./ImageCarousel";

const data = [
  { 
    nombre: "Reforestación", 
    presupuestado: 490000.00, 
    ejecutado: 403064.88 // Actualizado según CSV
  },
  { 
    nombre: "Huertos Mixtos", 
    presupuestado: 550000.00, 
    ejecutado: 225802.20 // Actualizado según CSV
  },
  { 
    nombre: "Recolección Desechos", 
    presupuestado: 1646500.00, 
    ejecutado: 1790226.88 // Actualizado según CSV
  },
  { 
    nombre: "Gestión Riesgo Desastres", 
    presupuestado: 75000.00, 
    ejecutado: 53167.94 // Actualizado según CSV
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
      <ImageCarousel start={69} end={73} />
    </div>
  );
};

export default MedioAmbienteChart;