import React, { useEffect } from "react";

const Clima = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "weatherwidget-io-js";
    script.src = "https://weatherwidget.io/js/widget.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <style>
        {`
          .weatherwidget-io {
            height: 350px; /* Ajusta la altura según sea necesario */
            font-size: 4em; /* Ajusta el tamaño de la fuente para agrandar el contenido */
          }

          @media screen and (min-width: 768px) {
            .weatherwidget-io {
              height: 500px; /* Ajusta la altura para pantallas más grandes */
              font-size: 5em; /* Ajusta el tamaño de la fuente para pantallas más grandes */
            }
          }
        `}
      </style>

      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/14d52n89d46/concepcion-las-minas/"
        data-label_1="Clima de"
        data-label_2="Concepción Las Minas"
        data-font="Arial"
        data-icons="Climacons Animated"
        data-theme="weather_one"
        style={{ borderRadius: "10px", margin: "1em" }}
      >
        Clima de Concepción Las Minas
      </a>
    </>
  );
};

export default Clima;
