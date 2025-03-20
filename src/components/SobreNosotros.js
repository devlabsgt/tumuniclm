import React from "react";
import { Divider, Card } from "antd";
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
        <Card bordered size="large">
          <h2 className="title-chart">Políticas Públicas</h2>

          <div className="bar-chart-wrapper">
            <PoliticasChart />
          </div>
        </Card>
        <Divider />

        {/* 🔥 TODAS LAS GRÁFICAS UNA BAJO LA OTRA PARA PRUEBA 🔥 */}
        <Card bordered size="large">
          <h2 className="title-chart">Infraestructura</h2>
          <div className="bar-chart-wrapper">
            <InfraestructuraChart />
          </div>
        </Card>
        <Divider />

        <Card bordered size="large">
          <h2 className="title-chart">Red Vial</h2>
          <div className="bar-chart-wrapper">
            <RedVialChart />
          </div>
        </Card>
        <Divider />

        <Card bordered size="large">
          <h2 className="title-chart">Servicios Públicos</h2>
          <div className="bar-chart-wrapper">
            <ServiciosChart />
          </div>
        </Card>
        <Divider />

        <Card bordered size="large">
          <h2 className="title-chart">Educación</h2>
          <div className="bar-chart-wrapper">
            <EducacionChart />
          </div>
        </Card>
        <Divider />

        <Card bordered size="large">
          <h2 className="title-chart">Desarrollo Económico</h2>
          <div className="bar-chart-wrapper">
            <DesarrolloChart />
          </div>
        </Card>
        <Divider />

        <Card bordered size="large">
          <h2 className="title-chart">Seguridad</h2>
          <div className="bar-chart-wrapper">
            <SeguridadChart />
          </div>
        </Card>
        <Divider />

        <Card bordered size="large">
          <h2 className="title-chart">Salud</h2>
          <div className="bar-chart-wrapper">
            <SaludChart />
          </div>
        </Card>
        <Divider />

        <Card bordered size="large">
          <h2 className="title-chart">Medio Ambiente</h2>
          <div className="bar-chart-wrapper">
            <MedioAmbienteChart />
          </div>
        </Card>
        <Divider />
      </FadeInOnScroll>

      <FadeInOnScroll offset={200}>
        <div>
          <Cvideo />
        </div>
      </FadeInOnScroll>

      <Divider />
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
