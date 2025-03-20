import React from "react";

const MapComponent = () => {
  return (
    <div>
      <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "400px" }}
        >
          <p className="fw-medium text-uppercase text-secondary mb-2 ">
            Nuestra Ubicación
          </p>
          <h1 className="display-5 mb-5">Ubicación</h1>
        </div>

        <iframe
          className="w-100"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.3967745159026!2d-89.45672343466474!3d14.522053728057578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f624d3d52890885%3A0xf4beba09512961ec!2sMunicipalidad%20de%20Concepci%C3%B3n%20Las%20Minas!5e0!3m2!1ses!2sgt!4v1681314354945!5m2!1ses!2sgt"
          frameBorder="0"
          style={{
            minHeight: "450px",
            border: "0",
            maxWidth: "100%",
            padding: "1em",
          }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default MapComponent;
