import React from "react";
import { Layout, Row, Col, Typography, Space } from "antd";
import {
  EnvironmentOutlined,
  MailOutlined,
  WhatsAppOutlined,
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import Wave from "react-wavify";
import ContadorVisitas from "./ContadorVisitas/ContadorVisitas";

const { Footer: AntFooter } = Layout;
const { Title, Text, Link } = Typography;

const Footer = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          height: "10px",
          width: "100vw",
          padding: "0em",
          marginTop: "2em",
        }}
      >
        <Wave
          fill="#0cf"
          paused={false}
          style={{ position: "absolute", top: -50, left: -8, right: 0 }}
          options={{ height: 3, amplitude: 5, speed: 0.25, points: 5 }}
        />
        <Wave
          fill="#06c"
          paused={false}
          style={{ position: "absolute", top: -45, left: -8, right: 0 }}
          options={{ height: 3, amplitude: 20, speed: 0.1, points: 5 }}
        />
      </div>

      <AntFooter
        style={{
          backgroundColor: "#06c",
          color: "#fff",
          padding: "60px 30px 30px",
        }}
      >
        <Row gutter={[32, 32]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Title level={5} style={{ color: "#fff", fontSize: "3em" }}>
              Contáctanos
            </Title>
            <Text
              style={{ display: "block", color: "#fff", fontSize: "1.5em" }}
            >
              <EnvironmentOutlined /> Calle principal, en frente del parque
              central
            </Text>
            <Text style={{ display: "block", color: "#fff" }}>
              <WhatsAppOutlined />{" "}
              <Link
                href="https://wa.me/50247902524"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", fontSize: "1.5em" }}
              >
                +502 4790 2524
              </Link>
            </Text>
            <Text style={{ display: "block", color: "#fff" }}>
              <MailOutlined />{" "}
              <Link
                href="mailto:info@tumuniclm.com"
                style={{ color: "#fff", fontSize: "1.5em" }}
              >
                info@tumuniclm.com
              </Link>
            </Text>

            <Space size="middle" style={{ marginTop: 16 }}>
              <Link href="https://www.facebook.com/tumuniclm" target="_blank">
                <FacebookFilled style={{ fontSize: 50, color: "#fff" }} />
              </Link>
              <Link href="https://www.instagram.com" target="_blank">
                <InstagramFilled style={{ fontSize: 50, color: "#fff" }} />
              </Link>
              <Link href="https://www.youtube.com/@tuMuniCLM" target="_blank">
                <YoutubeFilled style={{ fontSize: 50, color: "#fff" }} />
              </Link>
            </Space>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Title level={5} style={{ color: "#fff", fontSize: "2em" }}>
              Horarios
            </Title>
            <Text style={{ display: "block", color: "#fff", fontSize: "2em" }}>
              Lunes - Viernes
            </Text>
            <Text
              strong
              style={{ display: "block", color: "#fff", fontSize: "2em" }}
            >
              08:00 am - 04:00 pm
            </Text>
            <Text
              style={{
                display: "block",
                color: "#fff",
                marginTop: 8,
                fontSize: "1.5em",
              }}
            >
              Sábado y Domingo
            </Text>
            <Text
              strong
              style={{ display: "block", color: "#fff", fontSize: "2em" }}
            >
              Cerrado
            </Text>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Title level={5} style={{ color: "#fff", fontSize: "2.5em" }}>
              Visitas
            </Title>
            <Text style={{ color: "#fff", fontSize: "1.5em" }}>
              Cuántas personas han visitado nuestro sitio web
            </Text>
            <div style={{ marginTop: 8 }}>
              <ContadorVisitas />
            </div>
          </Col>
        </Row>

        <div
          style={{
            textAlign: "center",
            marginTop: 40,
            backgroundColor: "#05b",
            padding: "1em",
          }}
        >
          <Text style={{ color: "#fff", display: "block", fontSize: "1.5em" }}>
            Todos los derechos reservados © Municipalidad de Concepción Las
            Minas
          </Text>
          <Text style={{ color: "#fff", display: "block", fontSize: "1.5em" }}>
            Diseñado y desarrollado por la Oficina de Comunicación Social de la
            Municipalidad de Concepción Las Minas
          </Text>
        </div>
      </AntFooter>
    </>
  );
};

export default Footer;
