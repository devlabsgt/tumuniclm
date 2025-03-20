import React, { useState } from "react";
import { Image } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Cimg = ({ imageUrl, text }) => {
  const [visible, setVisible] = useState(false);

  const handleTextClick = () => {
    setVisible(true);
  };

  return (
    <>
      <style>
        {`
          .cimg-container {
            text-align: center;
            cursor: pointer;
          }

          .cimg-text {
            margin-top: 10px;
            font-size: 1.5em; /* Tamaño de texto para dispositivos móviles */
            margin-bottom: 1em;
            color: #02245b;
          }

          .cimg-subtext {
            font-size: 0.5em;
            color: #02245b;
          }

          .cimg-icon {
            font-size: 1.2em;
            margin-left: 5px;
            color: #06c;
;
          }

          @media screen and (min-width: 768px) {
            .cimg-text {
              font-size: 3.7em; /* Tamaño de texto para pantallas mayores a 768px */
            }
          }
        `}
      </style>

      <div className="cimg-container">
        <Image
          width={200}
          src={imageUrl}
          preview={{ visible, onVisibleChange: setVisible }}
          style={{ display: "none" }} // Ocultar la imagen original
        />
        <div onClick={handleTextClick} className="cimg-text">
          {text}{" "}
          <span className="cimg-subtext">
            <br />
            Haz Click aquí y en cada <SearchOutlined className="cimg-icon" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Cimg;
