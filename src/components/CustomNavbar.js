import React, { useState, useEffect } from "react";
import { MDBNavbar, MDBContainer } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import {
  faProjectDiagram,
  faHandPointer,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";

import {
  faBars,
  faPhoneAlt,
  faCameraRetro,
} from "@fortawesome/free-solid-svg-icons";
import { Drawer, Image, Button, Dropdown, Menu, Tooltip, Divider } from "antd";
import logoGob from "../img/sobreNosotros/letrasAzules.webp";
import Memoria from "../components/imagenesconlinks/ImagenesConLinks";
import { useNavigate } from "react-router-dom";

import "./CustomNavbar.css";

const CustomNavbar = () => {
  const navigate = useNavigate();

  const organigrama = "/img/memoria/75.webp";
  const misionvision = "/img/memoria/4.webp";

  const [bgColor, setBgColor] = useState("transparent");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const isTop = scrollTop === 0;
      setBgColor(isTop || scrollTop < 300 ? "transparent" : "light");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/+50247902524"
          className="dropdown-item"
        >
          <FontAwesomeIcon icon={faPhoneAlt} className="reception-icon" />
          Recepción: 4790 2524
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/+50255546476"
          className="dropdown-item"
        >
          <FontAwesomeIcon icon={faCameraRetro} className="camera-icon" />
          Comunicación Social: 5554 6476
        </a>
      ),
    },
  ];

  const menu1 = <Menu items={items} />;

  return (
    <MDBNavbar fixed="top" light={bgColor === "light"} bgColor={bgColor}>
      <MDBContainer fluid>
        <div className="navbar-content">
          <div className="left-section">
            {/* Contenedor de iconos y texto */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="social-icons">
                <a href="https://www.facebook.com/tumuniclm">
                  <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                </a>
                <a href="https://www.tiktok.com/@tumuniclm">
                  <FontAwesomeIcon icon={faTiktok} className="icon tk" />
                </a>
                <a href="https://www.instagram.com/tumuniclm?igsh=NWQ3dnZneGxmOThm">
                  <FontAwesomeIcon icon={faInstagram} className="icon ins" />
                </a>
                <a href="https://www.youtube.com/@tuMuniCLM">
                  <FontAwesomeIcon icon={faYoutube} className="icon yt" />
                </a>
              </div>
              {/* TEXTO DEBAJO DE LOS ICONOS */}
              <p
                style={{
                  fontSize: "12px",
                  color: "#000",
                  textAlign: "center",
                  margin: 0,
                }}
              >
                Haz click para ver nuestras redes sociales
              </p>
            </div>

            <Button
              type="link"
              onClick={() => navigate("/informacionpublica")}
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Información pública
            </Button>
          </div>
          <a onClick={toggleDrawer} className="menu-icon">
            <FontAwesomeIcon icon={faBars} />
          </a>
        </div>
      </MDBContainer>

      <Drawer
        title={
          <div style={{ textAlign: "center", width: "100%" }}>
            Menú informativo
          </div>
        }
        placement="right"
        onClose={toggleDrawer}
        visible={drawerOpen}
        zIndex={9999} // Asegura que el Drawer esté encima de todo
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1em",
          }}
        >
          <Image width={300} src={logoGob} />
        </div>

        <div
          className="opcionesNav"
          style={{
            width: "100%",
            marginTop: "1em",
          }}
        >
          <Dropdown
            overlay={menu1}
            placement="bottom"
            arrow={{
              pointAtCenter: true,
            }}
          >
            <Button type="primary" className="botonMenu">
              <FontAwesomeIcon icon={faWhatsapp} className="icon wh" />
              Contactános
            </Button>
          </Dropdown>

          <a href="https://forms.gle/ctLo7sjSrXkLsLud9">
            <Button block className="botonMenu">
              Línea de Reportes
            </Button>
          </a>
          <Tooltip title="Haz click aquí para ver el sitio">
            <Button
              block
              className="botonMenu"
              onClick={() => navigate("/informacionpublica")}
            >
              Información pública
            </Button>
          </Tooltip>
        </div>
        <Memoria />

        <Divider style={{ backgroundColor: "#00c8fa", height: "1px" }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // Centra horizontalmente
            gap: "0em", // Espacio entre el icono y el texto
            fontWeight: "bold",
            color: "#06c",
            fontSize: "1.5em", // Ajusta el tamaño según necesites
            textAlign: "center",
            width: "100%",
          }}
        >
          <span>Haz Click en las imágenes siguientes para conocer más</span>
          <FontAwesomeIcon icon={faHandPointer} />
        </div>

        <Divider style={{ backgroundColor: "#00c8fa", height: "1px" }} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // Centra horizontalmente
            gap: "0.5em", // Espacio entre el icono y el texto
            fontWeight: "bold",
            color: "#06c",
            fontSize: "1.5em", // Ajusta el tamaño según necesites
            textAlign: "center",
            width: "100%",
          }}
        >
          <FontAwesomeIcon icon={faBullseye} />
          <span>Misión y Visión</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1em",
          }}
        >
          <Image width={300} src={misionvision} />
        </div>

        <Divider style={{ backgroundColor: "#00c8fa", height: "1px" }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // Centra horizontalmente
            gap: "0.5em", // Espacio entre el icono y el texto
            fontWeight: "bold",
            color: "#06c",
            fontSize: "1.5em", // Ajusta el tamaño según necesites
            textAlign: "center",
            width: "100%",
          }}
        >
          <FontAwesomeIcon icon={faProjectDiagram} />
          <span>Organigrama Municipal</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1em",
          }}
        >
          <Image width={300} src={organigrama} />
        </div>

        <Divider style={{ backgroundColor: "#00c8fa", height: "1px" }} />
      </Drawer>
    </MDBNavbar>
  );
};

export default CustomNavbar;
