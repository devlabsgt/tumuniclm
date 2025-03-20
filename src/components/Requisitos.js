import React from "react";
import { Tabs, Table, Collapse, Divider, Button, Tooltip } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "./Requisitos.css";

const { TabPane } = Tabs;
const { Panel } = Collapse;

const Requisitos = () => {
  const dataSource = [
    {
      key: "1",
      requisito: "Fotografía del Árbol que se va a talar",
    },
    {
      key: "2",
      requisito: "Fotocopia DPI vigente",
    },
    // Puedes agregar más requisitos aquí si es necesario
  ];

  const Ugam1 = [
    {
      key: "1",
      requisito: "Fotografía del Árbol que se va a talar",
    },
    {
      key: "2",
      requisito: "Original y fotocopia DPI vigente",
    },
    {
      key: "3",
      requisito: "Pago por cada árbol Q 25.00",
    },
  ];

  const Ugam2 = [
    {
      key: "1",
      requisito: "Original y Fotocopia de DPI Vigente ",
    },
    {
      key: "2",
      requisito:
        "Original y fotocopia de Tarjeta de Circulación del Vehículo que se utilizará",
    },
    {
      key: "3",
      requisito: "Pago de arbitrio Q 15.00",
    },
  ];

  const Ugam3 = [
    {
      key: "1",
      requisito: "Original y Fotocopia de DPI Vigente ",
    },
    {
      key: "2",
      requisito: "Contrato de Manzanaje del año anterior",
    },
    {
      key: "3",
      requisito:
        "Recibo que conste el último pago de contrato de arrendamiento",
    },
    {
      key: "4",
      requisito:
        "Boleto de Ornato (Se exceptúan las personas mayores de 65 años)",
    },
    {
      key: "5",
      requisito: "Pago de solvencia municipal Q25.00",
    },
  ];

  const Tes1 = [
    {
      key: "1",
      requisito1: "Ingresos (Q)",
      requisito2: "Pago (Q)",
    },
    {
      key: "2",
      requisito1: "De 500.01 a 3,000.00",
      requisito2: "10.00",
    },
    {
      key: "2",
      requisito1: "De 3,000.01 a 6,000.00",
      requisito2: "50.00",
    },
    {
      key: "2",
      requisito1: "De 6,000.01 a 9,000.00",
      requisito2: "75.00",
    },
    {
      key: "2",
      requisito1: "De 9,000.01 a 12,000.00",
      requisito2: "100.00",
    },
    {
      key: "2",
      requisito1: "De 12,000.01 en adelante",
      requisito2: "150.00",
    },
  ];

  const Tes2 = [
    {
      key: "1",
      requisito1: "Requisitos de inscripción",
      requisito2: "Fotocopia de escritura de propiedad y DPI",
    },

    {
      key: "2",
      requisito1: "Pago General",
      requisito2: "Q 20.00 Mensual ",
    },
  ];

  const Tes3 = [
    {
      key: "1",
      requisito1: "Requisitos de inscripción",
      requisito2: "Fotocopia de DPI",
    },
    {
      key: "2",
      requisito1: "Pago Casco Urbano",
      requisito2: "Q 20.00 Mensual ",
    },
    {
      key: "3",
      requisito1: "Pago Área Rural",
      requisito2: "Q 12.00 Mensual ",
    },
  ];
  const Tes4 = [
    {
      key: "1",
      requisito1:
        "Requisitos de inscripción de pago de IUSI o actualización de datos",
    },
    {
      key: "2",
      requisito1: "Fotocopia de Escritura de propiedad",
    },
    {
      key: "3",
      requisito1: "Fotocopia de Escritura de DPI",
    },
  ];
  /*
  const Sec1 = [
    {
      key: "1",
      requisito: (
        <div>
          <p>
            Memorial dirigido al Concejo Municipal que se presenta a secretaría
            y debe tener:<br></br>
          </p>
          <ul>
            <li>
              Nombres y apellidos, nacionalidad, edad, estado civil, profesión y
              oficio, dirección, domicilio fiscal y telefono del propietario,
              acompañando copia del DPI. En caso de ser persona jurídica, deberá
              acompañar certificación reciente del Registro de Personas
              Jurídicas del Ministerio de Gobernación y del documento que
              acredita la representación legal.
            </li>
            <li>
              Actividad Económica del Establecimiento (industria, Comercio,
              Servicios)
            </li>
            <li>
              Actividad principal del establecimiento(Abarrotería, Farmacia,
              Zapatería, Barbería, etc.)
            </li>
            <li>Nombre del establecimiento</li>
            <li>Fecha de inicio de operaciones.</li>
            <li>Dirección donde ejercerá su actividad.</li>
          </ul>
        </div>
      ),
    },
    {
      key: "2",
      requisito: "Fotografías del establecimiento comercial",
    },
    {
      key: "3",
      requisito: "Fotocopia del DPI del solicitante",
    },
    {
      key: "4",
      requisito: "Pagar Derecho de inscripción en tesorería Q.50.00",
    },
    {
      key: "5",
      requisito: "Fotocopia del boleto de ornato del solicitante",
    },
    {
      key: "6",
      requisito:
        "Constancia de estar inscrito en el servicio de recolección de basura",
    },
    {
      key: "7",
      requisito: "Solvencia Municipal del mes en el que se realiza el trámite",
    },
    {
      key: "8",
      requisito:
        "Fotocopia del último recibo del pago del IUSI, del lugar donde se encuentra el establecimiento comercial",
    },
    {
      key: "9",
      requisito: "Registrar el rótulo del negocio (Si fuera necesario)",
    },
    {
      key: "10",
      requisito: "Fotocopia de RTU",
    },
  ];*/

  const Sec2 = [
    {
      key: "1",
      requisito: (
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          className="botonMenu"
        >
          <a href="https://drive.google.com/drive/folders/1Pa0MI7SpwKdSDmeeNdZfk7oesNTVMMfh?usp=sharing">
            Ver Requisitos
          </a>
        </Button>
      ),
    },
  ];

  return (
    <div className="centered-tabs-container">
      <div className="titulo">
        <h2>Requisitos para Trámites de servicios</h2>
      </div>
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="Tesorería" key="1">
          <Collapse accordion>
            <Panel header="Boleto de Ornato" key="1">
              <Table
                dataSource={Tes1}
                pagination={false}
                showHeader={false}
                size="large"
                bordered
                columns={[
                  {
                    title: "Requisito",
                    dataIndex: "requisito1",
                    key: "requisito1",
                    width: "70%",
                  },
                  {
                    title: "Requisito",
                    dataIndex: "requisito2",
                    key: "requisito2",
                    width: "30%",
                  },
                ]}
              />
            </Panel>
            <Panel header="Agua" key="2">
              <Table
                dataSource={Tes2}
                pagination={false}
                showHeader={false}
                size="large"
                bordered
                columns={[
                  {
                    title: "Requisito",
                    dataIndex: "requisito1",
                    key: "requisito1",
                    width: "50%",
                    fontSize: "10em",
                  },
                  {
                    title: "Requisito",
                    dataIndex: "requisito2",
                    key: "requisito2",
                    width: "50%",
                  },
                ]}
              />
            </Panel>
            <Panel header="Recolección de basura" key="3">
              <Table
                dataSource={Tes3}
                pagination={false}
                showHeader={false}
                size="large"
                bordered
                columns={[
                  {
                    title: "Requisito",
                    dataIndex: "requisito1",
                    key: "requisito1",
                    width: "50%",
                  },
                  {
                    title: "Requisito",
                    dataIndex: "requisito2",
                    key: "requisito2",
                    width: "50%",
                  },
                ]}
              />
            </Panel>
            <Panel header="Inscripción de IUSI" key="4">
              <Table
                dataSource={Tes4}
                pagination={false}
                showHeader={false}
                size="large"
                bordered
                columns={[
                  {
                    title: "Requisito",
                    dataIndex: "requisito1",
                    key: "requisito1",
                  },
                ]}
              />
            </Panel>
          </Collapse>
        </TabPane>
        <TabPane tab="Servicios Públicos" key="2">
          <Collapse accordion>
            <Panel header="Ver todos los requisitos" key="2">
              <Table
                dataSource={Sec2}
                pagination={false}
                showHeader={false}
                size="large"
                bordered
                columns={[
                  {
                    dataIndex: "requisito",
                    key: "requisito",
                  },
                ]}
              />
            </Panel>
          </Collapse>
        </TabPane>
        <TabPane
          tab={
            <Tooltip title="Unidad de Gestión Ambiental Municipal">
              UGAM
            </Tooltip>
          }
          key="3"
        >
          <Collapse accordion>
            <Panel header="Requisitos para Permiso de Tala de Árboles" key="1">
              <Table
                dataSource={Ugam1}
                pagination={false}
                showHeader={false}
                size="large"
                bordered
                columns={[
                  {
                    dataIndex: "requisito",
                    key: "requisito",
                  },
                ]}
              />
            </Panel>
            <Panel
              header="Requisitos para Permiso de Traslado de Madera"
              key="2"
            >
              <Table
                dataSource={Ugam2}
                pagination={false}
                showHeader={false}
                size="large"
                bordered
                columns={[
                  {
                    dataIndex: "requisito",
                    key: "requisito",
                  },
                ]}
              />
            </Panel>
            <Panel
              header="Requisitos para Renovación de Contrato de Manzanaje Municipal"
              key="3"
            >
              <Table
                dataSource={Ugam3}
                pagination={false}
                showHeader={false}
                size="large"
                bordered
                columns={[
                  {
                    dataIndex: "requisito",
                    key: "requisito",
                  },
                ]}
              />
            </Panel>
          </Collapse>
        </TabPane>
      </Tabs>
      <Divider />
    </div>
  );
};

export default Requisitos;
