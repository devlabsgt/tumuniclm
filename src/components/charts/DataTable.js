import React from "react";

const DataTable = ({ data }) => {
  const sorted = [...data].sort((a, b) => b.ejecutado - a.ejecutado);
  const columnWidth = "150px"; // 🔧 Cambiá esto y verás el efecto

  const thStyle = {
    padding: 12,
    border: "1px solid #fff",
    background: "#06c",
    color: "#fff",
    fontWeight: "bold",
    width: columnWidth,
  };

  const tdStyle = {
    padding: 12,
    border: "1px solid #ddd",
    width: columnWidth,
    textAlign: "center",
    wordWrap: "break-word",
  };

  return (
    <div style={{ overflowX: "auto", marginTop: 16 }}>
      <table
        style={{
          borderCollapse: "collapse",
          fontSize: 16,
          width: "100%",
          tableLayout: "fixed", // 🔐 Hace que los widths se respeten
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
            ></th>
            {sorted.map((item, i) => (
              <th key={i} style={thStyle}>
                {item.nombre}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {["Presupuesto (Q)", "Ejecutado (Q)"].map((label, i) => (
            <tr key={i}>
              <td
                style={{
                  ...tdStyle,
                  textAlign: "left",
                  fontWeight: "bold",
                  background: "#f2f2f2",
                }}
              >
                {label}
              </td>
              {sorted.map((item, j) => (
                <td key={j} style={tdStyle}>
                  {item[i === 0 ? "presupuestado" : "ejecutado"].toLocaleString(
                    undefined,
                    {
                      minimumFractionDigits: 2,
                    }
                  )}
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
