import React from "react";
import Charts from "./Charts";

const data = [
  {
    nombre: "Ordenamiento vial y seguridad ciudadana",
    presupuestado: 946000.0,
    ejecutado: 991708.27,
  },
];

const SeguridadChart = () => {
  return (
    <Charts
      description="La política de <b><span style='color: #06c;'>#Seguridad🚔</span></b> busca fortalecer el <b>ordenamiento vial</b> y la <b>seguridad ciudadana</b> en nuestro municipio. A través de estas acciones, garantizamos una convivencia más <b>segura</b> y promovemos el bienestar de todos los ciudadanos."
      data={data}
    />
  );
};

export default SeguridadChart;
