import React from "react";
import Slider from "react-slick";
import LazyLoad from "react-lazyload";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LandingPage.css";  // Importar el archivo CSS

// Función para cargar las imágenes dinámicamente
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context("../../../public/images/carousel", false, /\.(png|jpe?g|svg|webp)$/));

const LandingPage = () => {
  // Agrupar las imágenes de dos en dos
  const groupedImages = [];
  for (let i = 0; i < images.length; i += 2) {
    groupedImages.push([images[i], images[i + 1]]);
  }

  // Configuración del carrusel con movimiento manual y sin "centerMode"
  const settings = {
    dots: false,         // Sin puntos de navegación
    infinite: false,     // El carrusel no será infinito
    speed: 0,            // La velocidad ya no es relevante si está estático
    slidesToShow: 2,     // Muestra 2 imágenes a la vez
    slidesToScroll: 1,   // Desliza 1 imagen a la vez (aunque no se desplazará)
    cssEase: "linear",   // No será necesario si no se mueve
    autoplay: false,     // No se mueve automáticamente
    pauseOnHover: false, // No es necesario detenerse al pasar el cursor
    arrows: false,       // Sin flechas para no permitir navegación manual
  };

  return (
    <div className="container">
      {/* Agregar el nuevo componente Header

          <h1 className="header">Momentos Únicos, Recuerdos Eternos</h1>
          <p className="subText">
          Fotógrafa profesional apasionada por capturar la esencia de los momentos que marcan tu vida. Me especializo en bodas, cumpleaños, bautizos, graduaciones, así como en sesiones fotográficas individuales, de pareja y familiares. Mi objetivo es entregarte imágenes llenas de emoción y recuerdos que perduren para siempre.
          </p>
          <button className="button">Purchase Now</button>
          <button className="button">Explore Intro Video</button>
    */}
      <div className="carouselContainer">
        <Slider {...settings}>
          {groupedImages.map((group, index) => (
            <div className={`imageGroup ${index % 2 !== 0 ? "odd" : "even"}`} key={index}>

              {group.map((image, idx) => (
                <LazyLoad height={200} offset={100} key={idx}>
                  <img className="image" src={image} alt={`Slide ${index * 2 + idx}`} />
                </LazyLoad>
              ))}

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LandingPage;
