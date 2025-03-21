import React from "react";
import { Divider } from "antd";
import "./SobreNosotros.css";
import FadeInOnScroll from "./FadeInOnScroll";
import Cvideo from "./Cvideo";
import PoliticasChart from "./charts/politicasChart";
import InfraestructuraChart from "./charts/InfraestructuraChart";
import EducacionChart from "./charts/EducacionChart";
import RedVialChart from "./charts/RedVialChart";
import DesarrolloChart from "./charts/DesarrolloChart";
import ServiciosChart from "./charts/ServiciosChart";
import SeguridadChart from "./charts/SeguridadChart";
import SaludChart from "./charts/SaludChart";
import MedioAmbienteChart from "./charts/MedioAmbienteChart";
import ImageCarousel from "./charts/ImageCarousel";

const SobreNosotrosPage = () => {
  return (
    <div className="containerSN">
      <FadeInOnScroll offset={100}>
        <h1>Sobre Nosotros</h1>
        <h2>Estamos al servicio de nuestro Municipio</h2>
        <p>
          Servir a nuestro municipio es una responsabilidad que llevamos con
          orgullo y dedicación. Estamos comprometidos a mejorar la vida de
          nuestra población y hacer de Concepción Las Minas un hogar aún más
          maravilloso para todos.
          <br />
          <br />
          ¡Juntos construyendo un futuro brillante para nuestro Municipio!
        </p>
        <Divider />

        {/* 🔥 POLÍTICAS PÚBLICAS 🔥 */}
        <h2 className="title-chart">Políticas Públicas</h2>
        <div className="bar-chart-wrapper">
          <PoliticasChart />
        </div>
        <Divider />

        {/* 🔥 INFRAESTRUCTURA 🔥 */}
        <h2 className="title-chart">Infraestructura</h2>
        <div className="bar-chart-wrapper">
          <InfraestructuraChart />
        </div>
        <Divider />

        {/* 🔥 RED VIAL 🔥 */}
        <h2 className="title-chart">Red Vial</h2>
        <div className="bar-chart-wrapper">
          <RedVialChart />
        </div>
        <Divider />

        {/* 🔥 SERVICIOS PÚBLICOS 🔥 */}
        <h2 className="title-chart">Servicios Públicos</h2>
        <div className="bar-chart-wrapper">
          <ServiciosChart />
        </div>
        <Divider />

        {/* 🔥 EDUCACIÓN 🔥 */}
        <h2 className="title-chart">Educación</h2>
        <div className="bar-chart-wrapper">
          <EducacionChart />
        </div>
        <Divider />

        {/* 🔥 DESARROLLO ECONÓMICO 🔥 */}
        <h2 className="title-chart">Desarrollo Económico</h2>
        <div className="bar-chart-wrapper">
          <DesarrolloChart />
        </div>
        <Divider />

        {/* 🔥 SEGURIDAD 🔥 */}
        <h2 className="title-chart">Seguridad</h2>
        <div className="bar-chart-wrapper">
          <SeguridadChart />
        </div>
        <Divider />

        {/* 🔥 SALUD 🔥 */}
        <h2 className="title-chart">Salud</h2>
        <div className="bar-chart-wrapper">
          <SaludChart />
        </div>
        <Divider />

        {/* 🔥 MEDIO AMBIENTE 🔥 */}
        <h2 className="title-chart">Medio Ambiente</h2>
        <div className="bar-chart-wrapper">
          <MedioAmbienteChart />
        </div>
        <Divider />
      </FadeInOnScroll>

      <ImageCarousel start={65} end={73} />

      {/* 🔹 Video */}
      <FadeInOnScroll offset={200}>
        <div>
          <Cvideo />
        </div>
      </FadeInOnScroll>

      <Divider />

      {/* 🔹 Mensaje final */}
      <FadeInOnScroll offset={200}>
        <h2>¡ES UN HONOR SERVIRTE!</h2>
        <p>
          Nuestro objetivo principal es el <b>avance</b> de Concepción Las
          Minas, queremos expresar nuestro más sincero agradecimiento por
          permitirnos <b>servirte.</b>
        </p>
      </FadeInOnScroll>

      <Divider />
    </div>
  );
};

export default SobreNosotrosPage;
