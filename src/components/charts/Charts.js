import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import DataTable from "./DataTable";

const Charts = ({
  description,
  data,
  chartHeight = "500px",
}) => {
  // 🔹 Detectar si es móvil
  const isMobile = window.innerWidth < 768;
  const fontSizeX = isMobile ? 10 : 14;
  const fontSizeY = isMobile ? 10 : 14;

  // Ordenar datos por ejecución de mayor a menor
  const sortedData = [...data].sort((a, b) => b.ejecutado - a.ejecutado);

  // Calcular valores totales
  const totalPresupuestado = sortedData.reduce(
    (sum, item) => sum + item.presupuestado,
    0
  );
  const totalEjecutado = sortedData.reduce(
    (sum, item) => sum + item.ejecutado,
    0
  );

  // Definir un ancho uniforme para las barras
  const barWidth = 100; // 🔹 Ancho fijo por barra
  const chartCanvasWidth = `${sortedData.length * barWidth * 3}px`;

  const chartData = {
    labels: sortedData.map((item) => item.nombre),
    datasets: [
      {
        label: "Presupuestado",
        data: sortedData.map((item) => item.presupuestado),
        backgroundColor: "#06cc",
        barThickness: barWidth * 0.8, // 🔥 Control de grosor uniforme
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
        ticks: {
          font: { size: fontSizeX },
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
        },
        categoryPercentage: 0.9,
        barPercentage: 0.8,
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: { size: fontSizeY },
          callback: (value) =>
            `Q${value.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`,
        },
      },
    },
    plugins: {
      legend: { labels: { font: { size: fontSizeX } } },
    },
  };

  return (
    <div style={{ width: "100%", margin: "0 auto", textAlign: "center" }}>
      <p style={{ marginTop: "1em", fontSize: "1em" }}>1er. Cuatrimestre 2025</p>

      {/* Descripción */}
      <p
        style={{
          marginTop: "1em",
          fontSize: isMobile ? "1em" : "1em",
        }}
        dangerouslySetInnerHTML={{ __html: description }}
      />

      {/* Totales */}
      <div
        style={{
          marginTop: "1em",
          fontSize: isMobile ? "1em" : "1em",
          textAlign: "right",
          marginRight: "1em",
        }}
      >
        <p>
          <strong>Proyección total:</strong> <br />Q{" "}
          {totalPresupuestado.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
          <br />
          <strong>Total ejecutado:</strong> <br />Q{" "}
          {totalEjecutado.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>

      {/* 📌 Contenedor del gráfico con scroll horizontal */}
      <div style={{ width: "100%", overflowX: "auto", paddingBottom: "20px" }}>
        <div
          style={{
            width: chartCanvasWidth,
            height: chartHeight,
            minWidth: "600px",
            margin: "0 auto",
          }}
        >
          <Bar data={chartData} options={options} />
        </div>
      </div>

      {/* 📌 Tabla separada como componente */}
      <DataTable data={sortedData} />
    </div>
  );
};

export default Charts;
