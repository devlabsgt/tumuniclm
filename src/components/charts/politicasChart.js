import React from "react";
import Charts from "./Charts";
import ImageCarousel from "./ImageCarousel"; // 🔹 Importamos el nuevo componente

const data = [
  {
    nombre: "Actividades Centrales",
    presupuestado: 7213200,
    ejecutado: 6878313.37,
  },
  { nombre: "Educación", presupuestado: 2728336, ejecutado: 3469049.68 },
  { nombre: "Red Vial", presupuestado: 9360300, ejecutado: 8697142.48 },
  {
    nombre: "Servicios Públicos",
    presupuestado: 1551664,
    ejecutado: 1914036.23,
  },
  { nombre: "Medio Ambiente", presupuestado: 2330200, ejecutado: 2917683.25 },
  {
    nombre: "Desarrollo Económico Local",
    presupuestado: 919300,
    ejecutado: 839866.54,
  },
  { nombre: "Seguridad", presupuestado: 946000, ejecutado: 991708.27 },
  { nombre: "Salud", presupuestado: 84500, ejecutado: 129575.82 },
  {
    nombre: "Obras de Infraestructura",
    presupuestado: 10918000,
    ejecutado: 7068092.67,
  },
  {
    nombre: "Asistencia Técnica DMP",
    presupuestado: 442000,
    ejecutado: 501877.8,
  },
  {
    nombre: "Préstamos y convenios de pago",
    presupuestado: 2080000,
    ejecutado: 1729422.6,
  },
];

const PoliticasChart = () => {
  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Charts
        description="Las <b>Políticas Públicas</b> a nivel municipal, son las <b>Acciones</b> del Gobierno Local, que tienen como propósito alcanzar <b>objetivos de interés público</b>, que permiten la solución de <b>conflictos y problemáticas</b> locales además de ser elementos que mejoran la <b>transparencia</b> de la gestión pública Municipal."
        data={data}
        chartFontSizeX={window.innerWidth < 768 ? 14 : 25}
        chartFontSizeY={window.innerWidth < 768 ? 14 : 16}
        chartHeight={window.innerWidth < 768 ? "500px" : "600px"}
        chartCanvasWidth={window.innerWidth < 768 ? "350px" : "200px"}
      />
      {/* 🔹 Llamamos al nuevo componente y le mandamos los números de inicio y fin */}
    </div>
  );
};

export default PoliticasChart;
