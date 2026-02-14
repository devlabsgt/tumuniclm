import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const WEBPview = ({ basePath, totalPages }) => {
  const navigate = useNavigate();
  const imageRefs = useRef([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const generatedImages = Array.from(
      { length: totalPages },
      (_, i) => `${basePath}/${i + 1}.webp`,
    );
    setImages(generatedImages);
  }, [basePath, totalPages]);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1000px",
        margin: "auto",
        marginTop: "9em",
        padding: "20px",
      }}
    >
      {/* Botón volver */}
      <button
        onClick={() => navigate("/")}
        style={{
          position: "fixed",
          top: "5em",
          left: "1.2em",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "#06c",
          color: "#fff",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
          zIndex: 1000,
          opacity: 0.85,
        }}
      >
        ←
      </button>

      {/* Render progresivo de imágenes */}
      {images.map((src, index) => (
        <div
          key={index}
          ref={(el) => (imageRefs.current[index] = el)}
          style={{
            marginBottom: "25px",
            textAlign: "center",
          }}
        >
          <img
            src={src}
            alt={`Página ${index + 1}`}
            loading="lazy"
            decoding="async"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default WEBPview;
