import React from "react";
import { useNavigate } from "react-router-dom";

const PDFview = ({ pdfUrl }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        paddingTop: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <button
        onClick={() => navigate("/")}
        style={{
          position: "absolute",
          top: "110px",
          left: "20px",
          backgroundColor: "#06c",
          color: "white",
          width: "45px",
          height: "45px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          zIndex: 10,
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>

      <div
        style={{
          width: "95%",
          maxWidth: "1400px",
          height: "calc(100vh - 140px)",
          overflow: "hidden",
          borderRadius: "8px",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          backgroundColor: "white",
        }}
      >
        <iframe
          src={`${pdfUrl}#view=Fit`}
          title="Visor PDF"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </div>
    </div>
  );
};

export default PDFview;
