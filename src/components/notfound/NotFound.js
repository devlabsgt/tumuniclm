import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import logoGob from "../../img/sobreNosotros/letrasAzules.webp";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img
        src={logoGob}
        alt="Logo"
        style={{ width: "400px", marginBottom: "20px" }}
      />
      <Result
        status="404"
        title="ERROR"
        subTitle="Lo sentimos, la página que buscas no existe."
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            Volver al inicio
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
