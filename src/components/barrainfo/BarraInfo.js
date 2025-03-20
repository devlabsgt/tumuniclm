import React from "react";
import { Row, Col, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const BarraInfo = ({ texto }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#06c",
        color: "white",
        padding: "1em 0 1em 0.25em",
        marginTop: "7em",
        position: "relative",
      }}
    >
      {/* 🔹 Botón de Volver en un Círculo con fondo blanco y flecha azul */}
      <Button
        shape="circle"
        icon={<ArrowLeftOutlined style={{ color: "#06c" }} />} // Flecha azul
        onClick={() => navigate("/")}
        style={{
          position: "absolute",
          left: "15px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "white", // Fondo blanco
          border: "none",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
          width: "40px",
          height: "40px",
          fontSize: "1.5em",
        }}
      />

      {/* 🔹 Row de Ant Design maneja el layout responsivo */}
      <Row
        justify="center"
        align="middle"
        gutter={[16, 16]}
        style={{
          textAlign: "center",
          paddingLeft: "5em",
        }}
      >
        {/* 🔹 Columna para el título */}
        <Col xs={24} md={14} style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "2em", fontWeight: "bold" }}>
            Municipalidad de Concepción Las Minas
          </h1>
          <h2 style={{ fontSize: "1.5em" }}>Departamento de Chiquimula</h2>
        </Col>

        {/* 🔹 Columna para el texto */}
        <Col xs={24} md={10} style={{ textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <p style={{ fontSize: "3em", margin: "0" }}>{texto}</p>
          </div>
        </Col>
      </Row>

      {/* 🔹 Media Query para alinear correctamente en pantallas grandes */}
      <style>
        {`
          @media (min-width: 1024px) {
            .ant-row {
              text-align: unset !important;
            }
            .ant-col-md-14 {
              text-align: left !important;
            }
            .ant-col-md-10 {
              text-align: right !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BarraInfo;
