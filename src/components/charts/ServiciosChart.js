import React from "react";
import Charts from "./Charts";

const data = [
  { nombre: "Cementerio", presupuestado: 89500.0, ejecutado: 102961.13 },
  { nombre: "Mercado", presupuestado: 185400.0, ejecutado: 272244.5 },
  { nombre: "Agua potable", presupuestado: 489264.0, ejecutado: 722032.49 },
  { nombre: "Inst. Deportivas", presupuestado: 308500.0, ejecutado: 463420.7 },
  {
    nombre: "Alumbrado público",
    presupuestado: 344000.0,
    ejecutado: 308355.91,
  },
  { nombre: "Alcantarillado", presupuestado: 135000.0, ejecutado: 45021.5 },
];

const ServiciosChart = () => {
  return (
    <Charts
      description="La política de <b><span style='color: #06c;'>#ServiciosPúblicos🏛️</span></b> busca garantizar espacios y servicios esenciales para nuestra comunidad. Desde el mantenimiento del <b>agua potable</b> hasta la mejora del <b>alumbrado público</b>, trabajamos para que cada persona tenga acceso a un entorno <b>seguro</b>, <b>saludable</b> y <b>digno</b>."
      data={data}
    />
  );
};

export default ServiciosChart;
