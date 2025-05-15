import React from "react";
import Charts from "./Charts";
import ImageCarousel from "./ImageCarousel";

const data = [
  { nombre: "Primaria MINEDUC", presupuestado: 674000.00, ejecutado: 257260.72 },
  { nombre: "Preprimaria MINEDUC", presupuestado: 525000.00, ejecutado: 28920.14 },
  { nombre: "Básico MINEDUC", presupuestado: 425000.00, ejecutado: 51120.37 },
  { nombre: "Diversificado CMED", presupuestado: 590000.00, ejecutado: 236914.04 },
  { nombre: "Diversificado MINEDUC", presupuestado: 235000.00, ejecutado: 11456.39 },
  { nombre: "Parque Escuela", presupuestado: 95000.00, ejecutado: 24130.60 },
  { nombre: "Capacitación Educación", presupuestado: 490000.00, ejecutado: 168425.99 },
  { nombre: "Música y Arte", presupuestado: 450000.00, ejecutado: 126168.24 },
  { nombre: "Deportes Municipales", presupuestado: 451000.00, ejecutado: 149149.48 },
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
