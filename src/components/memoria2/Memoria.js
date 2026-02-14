"use client";

import { useState, useEffect, useRef } from "react";
import { Button, Dropdown, Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faHome,
  faChartLine,
  faMoneyBillWave,
  faHandsHelping,
  faGraduationCap,
  faRoad,
  faBuilding,
  faShieldAlt,
  faHeartbeat,
  faTree,
  faCity,
  faBullseye,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import "react-lazy-load-image-component/src/effects/blur.css";

// 🔥 Nueva función para generar automáticamente todas las imágenes disponibles en `public/img/memoria/`
const importAllImages = () => {
  const totalImages = 113; // Ajusta este número a la cantidad de imágenes reales

  return Array.from(
    { length: totalImages },
    (_, i) => `/img/memoria/${i + 1}-2025.webp`//CAMBIAR EL ANIO si es nuevo
  );
};

const Memoria = () => {
  const [images, setImages] = useState([]);
  const imageRefs = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    setImages(importAllImages()); // Cargar imágenes desde /public/img/memoria/

    // Detectar tamaño de pantalla y actualizar el estado
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToImage = (pageNumber) => {
    const index = pageNumber - 1;
    if (imageRefs.current[index]) {
      imageRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  // 📌 Menú con submenús adaptado
  const menu = (
    <Menu
      style={{
        width: "220px",
        fontSize: "1.2em",
      }}
    >
      <Menu.Item
        key="inicio"
        onClick={() => scrollToImage(1)}
        style={{ padding: "12px" }}
      >
        <FontAwesomeIcon icon={faHome} style={{ marginRight: "1em" }} />
        Inicio
      </Menu.Item>

      <Menu.Item
        key="visionMision"
        onClick={() => scrollToImage(4)}
        style={{ padding: "12px" }}
      >
        <FontAwesomeIcon icon={faBullseye} style={{ marginRight: "1em" }} />
        Visión y Misión
      </Menu.Item>

      <Menu.Item
        key="ingresos"
        onClick={() => scrollToImage(5)}
        style={{ padding: "12px" }}
      >
        <FontAwesomeIcon
          icon={faMoneyBillWave}
          style={{ marginRight: "1em" }}
        />
        Ingresos Municipales
      </Menu.Item>
      <Menu.Item
        key="inversión"
        onClick={() => scrollToImage(6)}
        style={{ padding: "12px" }}
      >
        <FontAwesomeIcon icon={faChartLine} style={{ marginRight: "1em" }} />
        Inversión en Póliticas
      </Menu.Item>
      {/* Submenú de Políticas Públicas */}
      <Menu.SubMenu
        key="politicas"
        title={
          <>
            <FontAwesomeIcon
              icon={faHandsHelping}
              style={{ marginRight: "1em" }}
            />
            Políticas Públicas
          </>
        }
      >
        <Menu.Item
          key="politica1"
          onClick={() => scrollToImage(9)}
          style={{ padding: "12px" }}
        >
          <FontAwesomeIcon
            icon={faGraduationCap}
            style={{ marginRight: "1em" }}
          />
          Educación
        </Menu.Item>
        <Menu.Item
          key="politica2"
          onClick={() => scrollToImage(27)}
          style={{ padding: "12px" }}
        >
          <FontAwesomeIcon icon={faRoad} style={{ marginRight: "1em" }} />
          Red Vial
        </Menu.Item>

        <Menu.Item
          key="politica3"
          onClick={() => scrollToImage(50)}
          style={{ padding: "12px" }}
        >
          <FontAwesomeIcon icon={faBuilding} style={{ marginRight: "1em" }} />
          Servicios Públicos
        </Menu.Item>

        <Menu.Item
          key="politica4"
          onClick={() => scrollToImage(59)}
          style={{ padding: "12px" }}
        >
          <FontAwesomeIcon icon={faShieldAlt} style={{ marginRight: "1em" }} />
          Seguridad
        </Menu.Item>

        <Menu.Item
          key="politica5"
          onClick={() => scrollToImage(64)}
          style={{ padding: "12px" }}
        >
          <FontAwesomeIcon icon={faHeartbeat} style={{ marginRight: "1em" }} />
          Salud
        </Menu.Item>
        <Menu.Item
          key="politica6"
          onClick={() => scrollToImage(69)}
          style={{ padding: "12px" }}
        >
          <FontAwesomeIcon icon={faTree} style={{ marginRight: "1em" }} />
          Medio Ambiente
        </Menu.Item>
        <Menu.Item
          key="politica7"
          onClick={() => scrollToImage(74)}
          style={{ padding: "12px" }}
        >
          <FontAwesomeIcon icon={faChartLine} style={{ marginRight: "1em" }} />
          Desarrollo Económico
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.Item
        key="infraestructura"
        onClick={() => scrollToImage(77)}
        style={{ padding: "12px" }}
      >
        <FontAwesomeIcon icon={faCity} style={{ marginRight: "1em" }} />
        Obras
      </Menu.Item>

      <Menu.Item
        key="actividades"
        onClick={() => scrollToImage(93)}
        style={{ padding: "12px" }}
      >
        <FontAwesomeIcon icon={faCamera} style={{ marginRight: "1em" }} />
        Actividades Sociales
      </Menu.Item>

      <Menu.Item
        key="egresos"
        onClick={() => scrollToImage(112)}
        style={{ padding: "12px" }}
      >
        <FontAwesomeIcon
          icon={faMoneyBillWave}
          style={{ marginRight: "1em" }}
        />
        Egresos Municipales
      </Menu.Item>
    </Menu>
  );

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1000px",
        margin: "auto",
        marginTop: "9em",
        padding: "20px",
      }}
    >
      {/* 🔹 Botón "Atrás" flotante */}
      <Button
        type="primary"
        shape="circle"
        onClick={() => (window.location.href = "/")}
        style={{
          position: "fixed",
          top: "5em",
          left: isMobile ? "1.2em" : "5em",
          width: "50px",
          height: "50px",
          fontSize: "20px",
          backgroundColor: "#06c",
          opacity: "0.8",
          color: "#fff",
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </Button>

      {images.map((src, index) => (
        <div
          key={index}
          ref={(el) => (imageRefs.current[index] = el)}
          style={{ marginBottom: "20px", textAlign: "center" }}
        >
          <img
            src={src}
            alt={`Memoria ${index + 1}`}
            style={{
              display: "block",
              width: "100%",
              maxWidth: "1000px",
              height: "auto",
              margin: "auto",
              borderRadius: "5px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      ))}

      <Dropdown
        overlay={menu}
        trigger={["click"]}
        placement="bottomCenter" // Se despliega hacia abajo alineado a la derecha
        overlayStyle={{
          minWidth: "220px",
          fontSize: "1.2em",
        }}
      >
        <Button
          type="primary"
          style={{
            position: "fixed",
            top: isMobile ? "7.2em" : "6.2em",
            right: isMobile ? "1em" : "5em", // Mantiene la posición flotante a la derecha
            width: isMobile ? "100px" : "160px",
            height: isMobile ? "40px" : "60px",
            fontSize: isMobile ? "0.9em" : "1em",
            backgroundColor: "#06c",
            opacity: "0.8",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            zIndex: 1000, // Asegura que esté por encima de otros elementos
          }}
        >
          Menú
        </Button>
      </Dropdown>
    </div>
  );
};

export default Memoria;
