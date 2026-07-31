import { Divider } from "antd";
import { useState } from "react";
import { Parallax } from "react-parallax";
import Wave from "react-wavify";
import "./HomePage.css";
//importacion imagenes
import parimg from "../img/sobreNosotros/sillon.webp";
//importacion componentes
import Clima from "../components/Clima";
import CustomNavbar from "../components/CustomNavbar";
import MapComponent from "../components/MapComponent";
import Requisitos from "../components/Requisitos";
import SobreNosotros from "../components/SobreNosotros";
import Footer from "../components/footer";
import Memoria from "../components/imagenesconlinks/ImagenesConLinks";

function HomePage() {
  const [activeComponent, setActiveComponent] = useState("principal");

  // Establecer el alto del header para teléfonos y PCs
  const headerHeightMobile = 700; // Altura para teléfono móvil
  const headerHeightDesktop = 825; // Altura para PC

  // Determinar el alto del header según el ancho de la ventana
  const headerHeight =
    window.innerWidth < 768 ? headerHeightMobile : headerHeightDesktop;

  const renderContent = () => {
    switch (activeComponent) {
      default:
        return (
          <>
            {/*
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/+50247902524"
              className="dropdown-item"
            >
              <CustomCarousel imageFolderUrl="carousel" />
            </a>
            <Divider />

            */}

            <Memoria />
            <Divider />
            <SobreNosotros />
            <Requisitos />
            <Clima />
            <MapComponent />
          </>
        );
    }
  };

  return (
    <>
      <div className="card">
        <Parallax bgImage={parimg} strength={200}>
          <div
            className="header"
            style={{
              height: headerHeight, // Establecer el alto dinámicamente
            }}
          >
            <div className="parallax-content">
              <h1 className="parallax-text">¡Hoy! Concepción Avanza</h1>
              <h2>
                Gobierno Municipal
                <br />
                2024-2028
              </h2>
              <CustomNavbar />
            </div>
          </div>
          <div style={{ position: "relative", height: "20px" }}>
            <Wave
              fill="#0cf"
              paused={false}
              style={{ position: "absolute", top: -50, left: 0, right: 0 }}
              options={{
                height: 5,
                amplitude: 5,
                speed: 0.25,
                points: 5,
              }}
            />
            <Wave
              fill="#06c"
              paused={false}
              style={{ position: "absolute", top: -45, left: 0, right: 0 }}
              options={{
                height: 3,
                amplitude: 20,
                speed: 0.1,
                points: 5,
              }}
            />
            <Wave
              fill="#fff"
              paused={false}
              style={{ position: "absolute", top: 0, left: 0, right: 0 }}
              options={{
                height: 5,
                amplitude: 1,
                speed: 0.25,
                points: 3,
              }}
            />
          </div>
        </Parallax>

        <div className="body">
          {renderContent()}
          {/* <FloatButton.Group>
            <FloatButton
              onClick={() => setActiveComponent("principal")}
              icon="🏠"
              tooltip="Principal"
            />
            <FloatButton
              onClick={() => setActiveComponent("alcaldia")}
              icon="🏛️"
              tooltip="Alcaldía"
            />
            <FloatButton
              onClick={() => setActiveComponent("organigrama")}
              icon="📊"
              tooltip="Organigrama"
            />
            <FloatButton
              onClick={() => setActiveComponent("misionVision")}
              icon="🎯"
              tooltip="Misión y Visión"
            />
            <FloatButton
              onClick={() => setActiveComponent("dependencias")}
              icon="🏢"
              tooltip="Dependencias"
            />
          </FloatButton.Group> */}
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
