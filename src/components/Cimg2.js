import React, { useState } from "react";
import { Image } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Cimg2 = ({ imageUrl, text }) => {
  const [visible, setVisible] = useState(false);

  const handleTextClick = () => {
    setVisible(true);
  };

  return (
    <>
      <style>
        {`

          .ant-image{
          display: block!important;
          }

          .cimg2-container {
            cursor: pointer;
            margin: 0 0 1em 0!important;
          }

          .cimg2-text {
            font-size: 0.7em; /* Tamaño de texto para dispositivos móviles */
            color: #000;
          }

          .cimg2-subtext {
            font-size: 0.5em;
            color: black;
          }

          .cimg2-icon {
            font-size: 2em;
            color: #06c;
          }

          @media screen and (min-width: 768px) {
            .cimg2-text {
              font-size: 1em; /* Tamaño de texto para pantallas mayores a 768px */
            }
          }
        `}
      </style>

      <div className="cimg2-container">
        <Image
          width={200}
          src={imageUrl}
          preview={{ visible, onVisibleChange: setVisible }}
          style={{ display: "none" }} // Ocultar la imagen original
        />
        <div onClick={handleTextClick} className="cimg2-text">
          {text}{" "}
          <span className="cimg2-subtext">
            <SearchOutlined className="cimg2-icon" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Cimg2;
