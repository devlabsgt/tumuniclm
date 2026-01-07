import React from "react";
import Charts from "./Charts";

const data = [
  {
    nombre: "Actividades Centrales",
    presupuestado: 7948800.0,
    ejecutado: 7470442.29,
  },
  {
    nombre: "Política Educativa",
    presupuestado: 3935000.0,
    ejecutado: 4082053.87,
  },
  {
    nombre: "Política Red Vial",
    presupuestado: 7360500.0,
    ejecutado: 7836798.66,
  },
  {
    nombre: "Política Desarrollo Económico Local",
    presupuestado: 2473000.0,
    ejecutado: 2463921.17,
  },
  {
    nombre: "Política de Servicios Públicos",
    presupuestado: 2001500.0,
    ejecutado: 1645049.39,
  },
  {
    nombre: "Política de Seguridad",
    presupuestado: 940000.0,
    ejecutado: 1015594.72,
  },
  {
    nombre: "Política de Salud",
    presupuestado: 140000.0,
    ejecutado: 135786.82,
  },
  {
    nombre: "Asistencia Técnica DMP",
    presupuestado: 574000.0,
    ejecutado: 311475.24,
  },
  {
    nombre: "Política de Medio Ambiente",
    presupuestado: 2997500.0,
    ejecutado: 2472261.9,
  },
  {
    nombre: "Obras de Infraestructura",
    presupuestado: 6872700.0,
    ejecutado: 11042467.57,
  },
  {
    nombre: "Préstamos y Convenios de Pago",
    presupuestado: 2922000.0,
    ejecutado: 3035611.72,
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
    </div>
  );
};

export default PoliticasChart;