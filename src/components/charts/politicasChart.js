import React from "react";
import Charts from "./Charts";

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
    <Charts
      description="Las <b>Políticas Públicas</b> a nivel municipal, son las <b>Acciones</b> del Gobierno Local, que tienen como propósito alcanzar <b>objetivos de interés público</b>, que permiten la solución de <b>conflictos y problemáticas</b> locales además de ser elementos que mejoran la <b>transparencia</b> de la gestión pública Municipal."
      data={data}
    />
  );
};

export default PoliticasChart;
