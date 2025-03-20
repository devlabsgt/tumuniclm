import React from "react";
import Charts from "./Charts";

const data = [
  {
    nombre: "Conservación de carreteras de terracería",
    presupuestado: 9360300.0,
    ejecutado: 8697142.48,
  },
];

const RedvialChart = () => {
  return (
    <Charts
      description="La política de <b><span style='color: #06c;'>#RedVial🛣️</span></b> 
      es fundamental para garantizar la conectividad entre comunidades, 
      facilitando el transporte de personas y mercancías. 
      Con estas acciones, <b>viajamos más rápido y seguro</b> y además <b>cuidamos los vehículos</b>, fortaleciendo el <b>desarrollo económico</b> del municipio."
      data={data}
    />
  );
};

export default RedvialChart;
