import React from "react";
import Charts from "./Charts";

const data = [
  { nombre: "Reforestación", presupuestado: 418000.0, ejecutado: 728537.34 },
  { nombre: "Forestación", presupuestado: 339200.0, ejecutado: 316554.87 },
  {
    nombre: "Recolección desechos sólidos",
    presupuestado: 1337000.0,
    ejecutado: 1872591.04,
  },
];

const MedioAmbienteChart = () => {
  return (
    <Charts
      description="La política de <b><span style='color: #06c;'>#MedioAmbiente🌿</span></b> protege nuestros recursos naturales a través de <b>reforestación</b>, <b>forestación</b> y <b>manejo adecuado de desechos</b>. Con estas acciones, promovemos un entorno <b>limpio</b>, <b>sostenible</b> y saludable para las futuras generaciones."
      data={data}
    />
  );
};

export default MedioAmbienteChart;
