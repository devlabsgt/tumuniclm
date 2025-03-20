import React from "react";
import Charts from "./Charts";

const data = [
  { nombre: "Dotación insumos", presupuestado: 700000.0, ejecutado: 677524.0 },
  {
    nombre: "Asistencia técnica (COINCEP)",
    presupuestado: 219300.0,
    ejecutado: 162342.54,
  },
];

const DesarrolloChart = () => {
  return (
    <Charts
      description="La política de <b><span style='color: #06c;'>#DesarrolloEconómico📈</span></b> impulsa el crecimiento local a través de la <b>asistencia técnica</b> y la <b>dotación de insumos</b>. Estas acciones fortalecen el trabajo productivo y crean oportunidades para mejorar la economía de nuestra comunidad."
      data={data}
    />
  );
};

export default DesarrolloChart;
