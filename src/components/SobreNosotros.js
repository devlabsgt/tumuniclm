import React, { lazy, Suspense } from "react";
import { Divider, Spin } from "antd";
import "./SobreNosotros.css";
import FadeInOnScroll from "./FadeInOnScroll";
import Cvideo from "./Cvideo";

// 🔹 Lazy load de todos los charts y del carrusel
const PoliticasChart = lazy(() => import("./charts/PoliticasChart"));
const InfraestructuraChart = lazy(() =>
  import("./charts/InfraestructuraChart")
);
const EducacionChart = lazy(() => import("./charts/EducacionChart"));
const RedVialChart = lazy(() => import("./charts/RedVialChart"));
const DesarrolloChart = lazy(() => import("./charts/DesarrolloChart"));
const ServiciosChart = lazy(() => import("./charts/ServiciosChart"));
const SeguridadChart = lazy(() => import("./charts/SeguridadChart"));
const SaludChart = lazy(() => import("./charts/SaludChart"));
const MedioAmbienteChart = lazy(() => import("./charts/MedioAmbienteChart"));
const ImageCarousel = lazy(() => import("./charts/ImageCarousel"));

// 🔹 Loader reutilizable
const Loader = ({ children }) => (
  <Suspense
    fallback={
      <Spin size="large" style={{ display: "block", margin: "2rem auto" }} />
    }
  >
    {children}
  </Suspense>
);

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

        <h2 className="title-chart">Políticas Públicas</h2>
        <div className="bar-chart-wrapper">
          <Loader>
            <PoliticasChart />
          </Loader>
        </div>
        <Divider />

        <h2 className="title-chart">Infraestructura</h2>
        <div className="bar-chart-wrapper">
          <Loader>
            <InfraestructuraChart />
          </Loader>
        </div>
        <Divider />

        <h2 className="title-chart">Red Vial</h2>
        <div className="bar-chart-wrapper">
          <Loader>
            <RedVialChart />
          </Loader>
        </div>
        <Divider />

        <h2 className="title-chart">Servicios Públicos</h2>
        <div className="bar-chart-wrapper">
          <Loader>
            <ServiciosChart />
          </Loader>
        </div>
        <Divider />

        <h2 className="title-chart">Educación</h2>
        <div className="bar-chart-wrapper">
          <Loader>
            <EducacionChart />
          </Loader>
        </div>
        <Divider />

        <h2 className="title-chart">Desarrollo Económico</h2>
        <div className="bar-chart-wrapper">
          <Loader>
            <DesarrolloChart />
          </Loader>
        </div>
        <Divider />

        <h2 className="title-chart">Seguridad</h2>
        <div className="bar-chart-wrapper">
          <Loader>
            <SeguridadChart />
          </Loader>
        </div>
        <Divider />

        <h2 className="title-chart">Salud</h2>
        <div className="bar-chart-wrapper">
          <Loader>
            <SaludChart />
          </Loader>
        </div>
        <Divider />

        <h2 className="title-chart">Medio Ambiente</h2>
        <div className="bar-chart-wrapper">
          <Loader>
            <MedioAmbienteChart />
          </Loader>
        </div>
        <Divider />
      </FadeInOnScroll>

      {/* 🔹 Carrusel de imágenes con lazy load también */}
      <Loader>
        <ImageCarousel start={65} end={73} />
      </Loader>

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
