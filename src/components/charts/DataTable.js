import React from "react";

const DataTable = ({ data }) => {
  const sorted = [...data].sort((a, b) => b.ejecutado - a.ejecutado);
  
  const totalPresupuestado = sorted.reduce((sum, item) => sum + item.presupuestado, 0);
  const totalEjecutado = sorted.reduce((sum, item) => sum + item.ejecutado, 0);
  const totalPorcentaje = totalPresupuestado > 0 ? (totalEjecutado / totalPresupuestado) * 100 : 0;

  const columnWidth = "120px"; 
  const thStyle = {
    padding: "6px 4px",
    border: "1px solid #ddd", 
    background: "#06c",
    color: "#fff",
    width: columnWidth,
    fontWeight: "bold",
    textAlign: "center",
  };

  const tdStyle = {
    padding: "6px 4px",
    border: "1px solid #ddd",
    width: columnWidth,
    textAlign: "center",
    wordWrap: "break-word",
  };

  return (
    <div style={{ overflowX: "auto", marginTop: 16, width: "100%" }}>
      <table
        style={{
          borderCollapse: "collapse",
          fontSize: 14,
          width: "fit-content",
          margin: "0 auto",
          tableLayout: "fixed", 
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                ...thStyle,
                background: "#f2f2f2",
                color: "#000",
                textAlign: "left",
              }}
            >
              Concepto
            </th>
            {sorted.map((item, i) => (
              <th key={i} style={thStyle}>
                {item.nombre}
              </th>
            ))}
            <th style={{ ...thStyle, backgroundColor: "#004a99" }}>
              TOTAL GENERAL
            </th>
          </tr>
        </thead>
        <tbody>
          {["Presupuesto (Q)", "Ejecutado (Q)", "Porcentaje (%)"].map((label, i) => (
            <tr key={i} style={{ fontWeight: i === 2 ? "bold" : "normal" }}>
              <td
                style={{
                  ...tdStyle,
                  textAlign: "left",
                  background: "#f2f2f2",
                }}
              >
                {label}
              </td>
              {sorted.map((item, j) => {
                const porcentaje = item.presupuestado > 0 ? (item.ejecutado / item.presupuestado) * 100 : 0;
                return (
                  <td key={j} style={tdStyle}>
                    {i === 0 && item.presupuestado.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    {i === 1 && item.ejecutado.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    {i === 2 && `${porcentaje.toFixed(2)}%`}
                  </td>
                );
              })}
              <td style={{ ...tdStyle, backgroundColor: "#f9f9f9" }}>
                {i === 0 && totalPresupuestado.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                {i === 1 && totalEjecutado.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                {i === 2 && `${totalPorcentaje.toFixed(2)}%`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;