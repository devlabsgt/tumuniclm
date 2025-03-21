import React, { useRef } from "react";
import { Card, Image, Carousel, Button } from "antd";

const importImages = (start, end) => {
  return Array.from(
    { length: end - start + 1 },
    (_, i) => `/img/memoria/${start + i}.webp`
  );
};

const ImageCarousel = ({ start, end }) => {
  const images = importImages(start, end);
  const carouselRef = useRef(null); // 🔹 Referencia para controlar el carrusel

  // Funciones para los botones
  const goToPrev = () => carouselRef.current.prev();
  const goToNext = () => carouselRef.current.next();

  return (
    <div
      style={{ display: "flex", justifyContent: "center", maxWidth: "100%" }}
    >
      <Card
        title="Desliza para ver más o toca la imagen para ampliar 🤳"
        bodyStyle={{ padding: 0 }} // 🔹 Elimina el padding del Card.Body
        style={{
          width: "100%",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        {/* 🔹 Carousel con autoplay y botones de navegación */}
        <Carousel
          ref={carouselRef}
          autoplay
          autoplaySpeed={3000}
          dots={{ className: "custom-dots" }}
          effect="fade"
        >
          {images.map((src, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                src={src}
                alt={`Imagen ${index + start}`}
                height={window.innerWidth < 768 ? 400 : 700} // 🔥 Ajuste dinámico según la pantalla
                width="auto"
                style={{
                  borderRadius: "5px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </Carousel>

        {/* 🔹 Botones debajo de la imagen */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Button type="primary" onClick={goToPrev}>
            Anterior
          </Button>
          <Button type="primary" onClick={goToNext}>
            Siguiente
          </Button>
        </div>
      </Card>

      {/* 🔹 Estilos personalizados */}
      <style>
        {`
          .custom-dots li button {
            background: #06c !important;
          }
          .custom-dots li.slick-active button {
            background: #06c !important;
          }
        `}
      </style>
    </div>
  );
};

export default ImageCarousel;
