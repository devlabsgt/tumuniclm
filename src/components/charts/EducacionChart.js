import React from "react";
import Charts from "./Charts";
import ImageCarousel from "./ImageCarousel";

const data = [
  { 
    nombre: "Primaria MINEDUC", 
    presupuestado: 674000.00, 
    ejecutado: 1198758.01 // Actualizado según CSV
  },
  { 
    nombre: "Preprimaria MINEDUC", 
    presupuestado: 525000.00, 
    ejecutado: 232534.59 // Actualizado según CSV
  },
  { 
    nombre: "Básico MINEDUC", 
    presupuestado: 425000.00, 
    ejecutado: 351796.92 // Actualizado según CSV
  },
  { 
    nombre: "Diversificado CMED", 
    presupuestado: 590000.00, 
    ejecutado: 637081.84 // Actualizado según CSV
  },
  { 
    nombre: "Diversificado MINEDUC", 
    presupuestado: 235000.00, 
    ejecutado: 54328.83 // Actualizado según CSV
  },
  { 
    nombre: "Parque Escuela", 
    presupuestado: 95000.00, 
    ejecutado: 72178.60 // Actualizado según CSV
  },
  { 
    nombre: "Capacitación Educación", 
    presupuestado: 490000.00, 
    ejecutado: 520243.29 // Actualizado según CSV
  },
  { 
    nombre: "Música y Arte", 
    presupuestado: 450000.00, 
    ejecutado: 483245.17 // Actualizado según CSV
  },
  { 
    nombre: "Deportes Municipales", 
    presupuestado: 451000.00, 
    ejecutado: 531886.62 // Actualizado según CSV
  },
];

const EducacionChart = () => {
  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Charts
        description="La política de <b><span style='color: #06c;'>#Educación📚</span></b> fortalece el desarrollo de nuestra comunidad al invertir en formación, cultura y deporte. A través del <b>apoyo a la educación</b> y la <b>capacitación</b>, impulsamos un futuro con más oportunidades y crecimiento para todos en <b>todos los niveles académicos, deportes, Música y arte.</b>"
        data={data}
        chartFontSizeX={window.innerWidth < 768 ? 14 : 25}
        chartFontSizeY={window.innerWidth < 768 ? 14 : 16}
        chartHeight={window.innerWidth < 768 ? "500px" : "600px"}
        chartCanvasWidth={window.innerWidth < 768 ? "350px" : "200px"}
      />
      <ImageCarousel start={27} end={32} />
    </div>
  );
};

export default EducacionChart;