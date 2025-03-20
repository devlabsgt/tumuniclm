import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Spin, Image, Dropdown, Menu, Breadcrumb } from "antd";
import {
  FolderOutlined,
  FileOutlined,
  EyeOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import comentario10 from "../../img/informacionpublica/comentario10.webp";
import "./InformacionPublica.css"; // Importamos los estilos

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const ROOT_FOLDER_ID = process.env.REACT_APP_GD_OFICIO;

const InformacionPublica = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentFolder, setCurrentFolder] = useState(ROOT_FOLDER_ID);
  const [folderStack, setFolderStack] = useState([]); // Para breadcrumb

  useEffect(() => {
    const fetchFiles = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://www.googleapis.com/drive/v3/files?q='${currentFolder}'+in+parents&key=${API_KEY}&fields=files(id, name, mimeType, webViewLink)`
        );

        // Ordenar archivos por nombre de menor a mayor
        const sortedFiles = response.data.files.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        setFiles(sortedFiles);
      } catch (error) {
        console.error("Error al obtener archivos:", error);
      }
      setLoading(false);
    };

    fetchFiles();
  }, [currentFolder]);

  // Función para abrir una nueva carpeta
  const openFolder = (folderId, folderName) => {
    setFolderStack((prevStack) => [
      ...prevStack,
      { id: folderId, name: folderName },
    ]);
    setCurrentFolder(folderId);
  };

  // Función para navegar a una carpeta dentro del breadcrumb
  const goToFolder = (index) => {
    const newStack = folderStack.slice(0, index + 1);
    setFolderStack(newStack);
    setCurrentFolder(newStack[index].id);
  };

  const getFileMenu = (file) => (
    <Menu>
      <Menu.Item
        key="ver"
        icon={<EyeOutlined />}
        onClick={() => window.open(file.webViewLink, "_blank")}
      >
        Ver
      </Menu.Item>
      <Menu.Item
        key="descargar"
        icon={<DownloadOutlined />}
        onClick={() =>
          window.open(
            `https://drive.google.com/uc?id=${file.id}&export=download`,
            "_blank"
          )
        }
      >
        Descargar
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className="container">
        <div className="content">
          <h1 className="title">
            DECRETO NO. 57-2008 <br />
            <span>LEY DE ACCESO A LA INFORMACIÓN PÚBLICA</span>
          </h1>

          <p>
            <strong>Artículo 10. Información pública de oficio.</strong> Los
            Sujetos Obligados deberán mantener, actualizada y disponible, en
            todo momento, de acuerdo con sus funciones y a disposición de
            cualquier interesado, como mínimo, la siguiente información, que
            podrá ser consultada de manera directa o a través de los portales
            electrónicos de cada sujeto obligado.
          </p>
          <Image
            width="100%"
            style={{ height: "auto", objectFit: "contain" }}
            src={comentario10}
          />
        </div>

        {/* Sección de carpetas (DERECHA - Breadcrumb en lugar del título) */}
        <div className="folders">
          <div className="header">
            {/* 🔹 Breadcrumb dinámico en vez del título */}
            <Breadcrumb separator=" / " className="breadcrumb">
              <Breadcrumb.Item
                onClick={() => {
                  setFolderStack([]);
                  setCurrentFolder(ROOT_FOLDER_ID);
                }}
              >
                <span className="breadcrumb-link">DECRETO NO. 57-2008</span>
              </Breadcrumb.Item>
              {folderStack.map((folder, index) => (
                <Breadcrumb.Item
                  key={folder.id}
                  onClick={() => goToFolder(index)}
                >
                  <span className="breadcrumb-link">{folder.name}</span>
                </Breadcrumb.Item>
              ))}
            </Breadcrumb>
          </div>

          {loading ? (
            <Spin size="large" />
          ) : (
            <div className="folder-list">
              {files.map((file) =>
                file.mimeType === "application/vnd.google-apps.folder" ? (
                  <Card
                    key={file.id}
                    hoverable
                    className="folder-card"
                    onClick={() => openFolder(file.id, file.name)}
                  >
                    <FolderOutlined className="folder-icon" />
                    <span className="folder-text">{file.name}</span>
                  </Card>
                ) : (
                  <Dropdown
                    key={file.id}
                    overlay={getFileMenu(file)}
                    trigger={["click"]}
                  >
                    <Card hoverable className="folder-card">
                      <FileOutlined className="file-icon" />
                      <span className="folder-text">{file.name}</span>
                    </Card>
                  </Dropdown>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default InformacionPublica;
