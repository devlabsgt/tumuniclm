"use client";

import { useState, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";
import "react-lazy-load-image-component/src/effects/blur.css";

// Definir los botones con su nombre y la página a la que saltarán
const buttonConfig = [
  { label: "Inicio", page: 1 },
  {
    label: (
      <>
        Lunes 24
        <br />
        Día de la Virgen
      </>
    ),
    page: 5,
  },

  {
    label: (
      <>
        Martes 25
        <br />
        Inauguración
      </>
    ),
    page: 6,
  },
  {
    label: (
      <>
        Miércoles 26
        <br />
        Deportistas
      </>
    ),
    page: 7,
  },
  {
    label: (
      <>
        Jueves 27
        <br />
        Cooperativista
      </>
    ),
    page: 8,
  },
  {
    label: (
      <>
        Viernes 28
        <br />
        Magisterio
      </>
    ),
    page: 9,
  },
  {
    label: (
      <>
        Sábado 01
        <br />
        Ausentes
      </>
    ),
    page: 10,
  },
  {
    label: (
      <>
        Domingo 02
        <br />
        Ganaderos
      </>
    ),
    page: 11,
  },
];

// 🔥 Nueva función para generar automáticamente todas las imágenes disponibles en `public/img/programa/`
const importAllImages = () => {
  const totalImages = 50; // Ajusta este número a la cantidad de imágenes reales

  return Array.from(
    { length: totalImages },
    (_, i) => `/img/programa2026/${i + 1}.webp`,
  );
};

const ProgramaFeria = () => {
  const [images, setImages] = useState([]);
  const imageRefs = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    setImages(importAllImages()); // Cargar imágenes desde /public/img/programa2026/

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

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        margin: "auto",
        marginTop: "7em",
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
          top: "3.5em",
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
          <LazyLoadImage
            src={src}
            alt={`Programa ${index + 1}`}
            effect="blur"
            style={{
              display: "block",
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              margin: "auto",
              borderRadius: "5px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      ))}
      {/* Contenedor del botón "Menú" y los botones flotantes alineados a la derecha */}
      <div
        style={{
          position: "fixed",
          top: "4.4em", // 🔹 El botón "Menú" sigue arriba
          right: isMobile ? "1em" : "5em", // 🔹 Ubicación en escritorio y móvil
          display: "flex",
          flexDirection: "column", // 🔥 Asegura que los botones desplegados salgan abajo
          alignItems: "flex-end",
          zIndex: 1000,
        }}
      >
        {/* Botón Principal con Transparencia */}
        <Button
          type="primary"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            width: "140px",
            height: "50px",
            backgroundColor: "#06c",
            opacity: "0.8",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "16px",
            textAlign: "center",
            border: "none",
            marginBottom: "8px", // 🔥 Espaciado entre el botón y los elementos desplegados
          }}
        >
          Menú
        </Button>

        {/* Botones desplegables cuando el menú está abierto */}
        {menuOpen &&
          buttonConfig.map(({ label, page }, index) => (
            <Button
              key={index}
              onClick={() => {
                scrollToImage(page);
                setMenuOpen(false); // 🔥 Cierra el menú después de hacer clic
              }}
              style={{
                width: "140px",
                height: "50px",
                marginBottom: "8px", // 🔥 Espaciado entre botones
                textAlign: "center",
              }}
            >
              {label}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default ProgramaFeria;
