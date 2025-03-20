import React from "react";
import Charts from "./Charts";

const data = [
  {
    nombre: "Apoyo a la salud y Farmacia",
    presupuestado: 84500.0,
    ejecutado: 129575.82,
  },
];

const SaludChart = () => {
  return (
    <Charts
      description="La política de <b><span style='color: #06c;'>#Salud🩺</span></b> busca fortalecer el bienestar de nuestra comunidad a través del <b>apoyo a la atención médica</b> y la mejora de los <b>servicios de salud</b>. Trabajamos para garantizar el acceso a una atención <b>digna</b> y <b>de calidad</b> para todos."
      data={data}
    />
  );
};

export default SaludChart;
