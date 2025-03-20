import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import PropTypes from "prop-types";
import "./CustomCarousel.css";

// Función para importar todas las imágenes desde un contexto
function importAllImages(r) {
  return r.keys().map(r);
}

// Predefinir contextos
const contexts = {
  carousel: require.context(
    "../img/carousel/",
    false,
    /\.(png|jpe?g|svg|webp)$/
  ),

  // Agrega más contextos aquí según sea necesario
};

const CustomCarousel = ({ imageFolderUrl }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let loadedImages = [];
    try {
      console.log(imageFolderUrl);

      // Usa el contexto basado en el prop proporcionado
      const context = contexts[imageFolderUrl];
      if (context) {
        loadedImages = importAllImages(context);
      } else {
        console.error(`No se encontró el contexto para: ${imageFolderUrl}`);
      }
    } catch (error) {
      console.error("Error al cargar imágenes: ", error);
    }
    setImages(loadedImages);
  }, [imageFolderUrl]);

  return (
    <Carousel controls={false}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            src={image}
            alt={`Slide ${index}`}
            className="carousel-image" // Asigna una clase a la imagen
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

CustomCarousel.propTypes = {
  imageFolderUrl: PropTypes.string.isRequired,
};

export default CustomCarousel;
