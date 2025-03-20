import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"; // Asegúrate de importar el icono que deseas utilizar
import {
  faFacebook,
  faTiktok,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Wave from "react-wavify";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div style={{ position: "relative", height: "10px", width: "100vw" }}>
        <Wave
          fill="#0cf"
          paused={false}
          style={{ position: "absolute", top: -50, left: -8, right: 0 }}
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
          style={{ position: "absolute", top: -45, left: -8, right: 0 }}
          options={{
            height: 3,
            amplitude: 20,
            speed: 0.1,
            points: 5,
          }}
        />
      </div>

      <div
        className="container-fluid footer mt-5 py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container ">
          <div className="row g-5 justify-content-center">
            <div className="col-lg-3 col-md-6 ">
              <h5 className="text-white mb-4">Contáctanos</h5>
              <p className="mb-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-3" />
                Calle principal, en frente del parque central
              </p>
              <p className="mb-2">
                <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
                <a
                  href="https://wa.me/50247902524"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  +502 4790 2524
                </a>
              </p>

              <p className="mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                <a
                  href="mailto:info@tumuniclm.com"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  info@tumuniclm.com
                </a>
              </p>

              <div className="d-flex pt-3">
                <a
                  className="btn btn-square btn-primary rounded-circle me-2"
                  href="https://www.facebook.com/tumuniclm"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle me-2"
                  href="https://www.twitter.com"
                >
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle me-2"
                  href="https://www.linkedin.com"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle me-2"
                  href="https://www.youtube.com/@tuMuniCLM"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 ">
              <h5 className="text-white mb-4">Horarios</h5>
              <p className="mb-1">Lunes - Viernes</p>
              <h6 className="text-light">08:00 am - 04:00 pm</h6>
              <p className="mb-1">Sábado y Domingo</p>
              <h6 className="text-light">Cerrado</h6>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Novedades</h5>
              <p>
                Ingresa tu correo electrónico para recibir las más recientes
                noticias.
              </p>
              <div className="position-relative w-100">
                <input
                  className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Tú Correo"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white py-3 blue-background ">
        <p>
          Todos los derechos reservados &copy; Municipalidad de Concepción Las
          Minas
        </p>
        <p>
          Diseñado y desarrollado por la Oficina de Comunicación Social de la
          Municipalidad de Concepción Las Minas
        </p>
      </div>
    </>
  );
};

export default Footer;
