import React from "react";

const DataTable = ({
  data,
  tableFontSize = "1em",
  firstColumnWidth = "200px",
}) => {
  // Ordenar por mayor ejecución
  const sortedData = [...data].sort((a, b) => b.ejecutado - a.ejecutado);

  // Estilos generales
  const tableStyle = {
    fontSize: tableFontSize,
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "center",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
  };

  const cellStyle = {
    padding: "12px",
    border: "1px solid #ddd", // 🔹 Aplica borde en ambos ejes
  };

  const headerStyle = {
    ...cellStyle,
    backgroundColor: "#06c",
    color: "white",
    fontWeight: "600",
    fontSize: "1em",
    textTransform: "capitalize",
    border: "1px solid #ffffff", // 🔹 Mantiene separación limpia en encabezado
  };

  return (
    <div style={{ marginTop: "1em", overflowX: "auto", width: "100%" }}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...headerStyle, width: firstColumnWidth }}></th>
            {sortedData.map((item, index) => (
              <th key={index} style={headerStyle}>
                {item.nombre}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {["Presupuesto (Q)", "Ejecutado (Q)"].map((label, rowIndex) => (
            <tr
              key={rowIndex}
              style={{
                backgroundColor: rowIndex % 2 === 0 ? "#f9f9f9" : "#ffffff",
              }}
            >
              <td
                style={{
                  ...cellStyle,
                  textAlign: "left",
                  fontWeight: "bold",
                  width: firstColumnWidth,
                  backgroundColor: "#f2f2f2", // 🔹 Suaviza el diseño para los labels
                }}
              >
                {label}
              </td>
              {sortedData.map((item, index) => (
                <td key={index} style={cellStyle}>
                  {item[
                    rowIndex === 0 ? "presupuestado" : "ejecutado"
                  ].toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
