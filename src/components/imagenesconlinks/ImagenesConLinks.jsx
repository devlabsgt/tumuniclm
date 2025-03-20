import React from "react";
import { Divider } from "antd";

const images = [
 /* {
    src: "/img/carrusel/1.webp",
    link: "/chuctifer2025",
    text: "Haz click en la siguiente imagen para ver el Programa de la Feria 2025",
  },*/
  {
    src: "/img/carrusel/2.webp",
    link: "/memoria2024",
    text: "Haz click en la siguiente imagen para ver la Memoria de Labores 2024",
  },
];

const ImagenesConLinks = () => {
  return (
    <div style={{ textAlign: "center", paddingTop: "1em" }}>
      {images.map((image, index) => (
        <div key={index} style={{ marginBottom: "5em" }}>
          <p
            style={{
              fontSize: "1.5em",
              fontWeight: "bold",
              marginBottom: "1.5em",
              marginTop: "1.5em",
              color: "#06c",
            }}
          >
            {image.text}
          </p>
          <a href={image.link}>
            <img
              src={image.src}
              alt={`Imagen ${index + 1}`}
              style={{
                width: "100%", // Ocupa el 100% del ancho disponible
                maxWidth: "1000px", // Máximo de 1000px en pantallas grandes
                height: "auto",
                borderRadius: "5px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
              }}
            />
          </a>

          {/* Divider entre imágenes excepto después de la última */}
          {index < images.length - 1 && <Divider />}
        </div>
      ))}
    </div>
  );
};

export default ImagenesConLinks;
