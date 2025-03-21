import React from "react";
import Charts from "./Charts";
import ImageCarousel from "./ImageCarousel";

const data = [
  { nombre: "Capacitaciones", presupuestado: 394000.0, ejecutado: 530444.91 },
  { nombre: "Deportes", presupuestado: 392000.0, ejecutado: 474804.79 },
  { nombre: "Música y Arte", presupuestado: 394000.0, ejecutado: 382966.0 },
  { nombre: "MINEDUC", presupuestado: 1062336.0, ejecutado: 1543054.96 },
  { nombre: "CMED", presupuestado: 486000.0, ejecutado: 537779.02 },
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
