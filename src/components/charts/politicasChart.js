import React from "react";
import Charts from "./Charts";

const data = [
  {
    nombre: "Actividades Centrales",
    presupuestado: 7948800,
    ejecutado: 2697309.55,
  },
  {
    nombre: "Política Educativa",
    presupuestado: 3935000,
    ejecutado: 1053545.97,
  },
  {
    nombre: "Política Red Vial",
    presupuestado: 7360500,
    ejecutado: 1858295.08,
  },
  {
    nombre: "Política Desarrollo Económico Local",
    presupuestado: 2473000,
    ejecutado: 1490780.44,
  },
  {
    nombre: "Política de Servicios Públicos",
    presupuestado: 2001500,
    ejecutado: 414518.68,
  },
  {
    nombre: "Política de Seguridad",
    presupuestado: 940000,
    ejecutado: 312833.51,
  },
  {
    nombre: "Política de Salud",
    presupuestado: 140000,
    ejecutado: 37979.62,
  },
  {
    nombre: "Asistencia Técnica DMP",
    presupuestado: 574000,
    ejecutado: 77452.05,
  },
  {
    nombre: "Política de Medio Ambiente",
    presupuestado: 2997500,
    ejecutado: 886488.34,
  },
  {
    nombre: "Obras de Infraestructura",
    presupuestado: 6872700,
    ejecutado: 4670489.69,
  },
  {
    nombre: "Préstamos y Convenios de Pago",
    presupuestado: 2922000,
    ejecutado: 1033216.20,
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
