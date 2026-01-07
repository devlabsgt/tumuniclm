import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import DataTable from "./DataTable";

const Charts = ({
  description,
  data,
  chartHeight = "500px",
}) => {
  const isMobile = window.innerWidth < 768;
  const fontSizeX = isMobile ? 10 : 14;
  const fontSizeY = isMobile ? 10 : 14;

  const sortedData = [...data].sort((a, b) => b.ejecutado - a.ejecutado);

  const totalPresupuestado = sortedData.reduce((sum, item) => sum + item.presupuestado, 0);
  const totalEjecutado = sortedData.reduce((sum, item) => sum + item.ejecutado, 0);

  // Cálculo del porcentaje
  const porcentajeTotal = totalPresupuestado > 0 
    ? (totalEjecutado / totalPresupuestado) * 100 
    : 0;

  const barWidth = 100;
  const chartCanvasWidth = `${sortedData.length * barWidth * 3}px`;

  const chartData = {
    labels: sortedData.map((item) => item.nombre),
    datasets: [
      {
        label: "Presupuestado",
        data: sortedData.map((item) => item.presupuestado),
        backgroundColor: "#06cc",
        barThickness: barWidth * 0.8,
      },
      {
        label: "Ejecutado",
        data: sortedData.map((item) => item.ejecutado),
        backgroundColor: "#0cfc",
        barThickness: barWidth * 0.8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { font: { size: fontSizeX }, autoSkip: false },
        categoryPercentage: 0.9,
        barPercentage: 0.8,
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: { size: fontSizeY },
          callback: (value) => `Q${value.toLocaleString()}`,
        },
      },
    },
    plugins: {
      legend: { labels: { font: { size: fontSizeX } } },
    },
  };

  return (
    <div style={{ width: "100%", margin: "0 auto", textAlign: "center" }}>
      <p style={{ marginTop: "1em", fontSize: "1em" }}>Año 2025</p>

      <p
        style={{ marginTop: "1em", fontSize: "1em", padding: "0 10px" }}
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5em", width: "100%" }}>
        <table style={{ borderCollapse: "collapse", border: "1px solid #ddd", fontSize: isMobile ? "0.85em" : "1.1em", boxShadow: "0px 2px 5px rgba(0,0,0,0.05)" }}>
          <thead>
            <tr style={{ backgroundColor: "#f8f9fa" }}>
              <th style={{ padding: "8px 20px", border: "1px solid #ddd", color: "#555" }}>Proyección total</th>
              <th style={{ padding: "8px 20px", border: "1px solid #ddd", color: "#555" }}>Total ejecutado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "12px 20px", border: "1px solid #ddd", fontWeight: "bold" }}>
                Q {totalPresupuestado.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </td>
              <td style={{ padding: "12px 20px", border: "1px solid #ddd", fontWeight: "bold" }}>
                Q {totalEjecutado.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                <span style={{ color: "#06c", marginLeft: "10px" }}>
                  ({porcentajeTotal.toFixed(2)}%)
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ width: "100%", overflowX: "auto", paddingBottom: "20px", marginTop: "1.5em" }}>
        <div style={{ width: chartCanvasWidth, height: chartHeight, minWidth: "600px", margin: "0 auto" }}>
          <Bar data={chartData} options={options} />
        </div>
      </div>

      <DataTable data={sortedData} />
    </div>
  );
};

export default Charts;