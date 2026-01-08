import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import DataTable from "./DataTable";

const Charts = ({
  description,
  data
}) => {
  const isMobile = window.innerWidth < 768;
  const fontSizeX = isMobile ? 10 : 14;
  const fontSizeY = isMobile ? 10 : 14;

  const sortedData = [...data].sort((a, b) => b.ejecutado - a.ejecutado);

  const barWidth = 55;
  const chartCanvasWidth = `${sortedData.length * barWidth * 2.5}px`;

  const formatLabel = (label) => {
    if (!label) return "";
    const words = label.split(" ");
    if (words.length <= 1) return label;
    const middle = Math.ceil(words.length / 2);
    const line1 = words.slice(0, middle).join(" ");
    const line2 = words.slice(middle).join(" ");
    return [line1, line2];
  };

  const chartData = {
    labels: sortedData.map((item) => formatLabel(item.nombre)),
    datasets: [
      {
        label: "Presupuestado",
        data: sortedData.map((item) => item.presupuestado),
        backgroundColor: "#06cc",
        barThickness: barWidth,
      },
      {
        label: "Ejecutado",
        data: sortedData.map((item) => item.ejecutado),
        backgroundColor: "#0cfc",
        barThickness: barWidth,
      },
    ],
  };

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: { 
        font: { 
          size: fontSizeX, 
        }, 
        autoSkip: false,
        color: "#000",
        maxRotation: 0,
        minRotation: 0,
      },
      categoryPercentage: 0.9,
      barPercentage: 1.0,
      grid: {
        display: false
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        font: { size: fontSizeY },
        color: "#000",
        callback: (value) => `Q${value.toLocaleString()}`,
      },
      grid: {
        color: "#e2e8f0",
      }
    },
  },
  plugins: {
    legend: { 
      position: 'top',
      labels: { 
        font: { 
          size: fontSizeX, 
          weight: "bold" 
        }, 
        color: "#000" 
      } 
    },
    tooltip: {
      padding: 12,
      titleFont: { size: 16 },
      bodyFont: { size: 14 },
      callbacks: {
        label: (context) => {
          let label = context.dataset.label || '';
          if (label) label += ': ';
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat('es-GT', { 
              style: 'currency', 
              currency: 'GTQ' 
            }).format(context.parsed.y);
          }
          return label;
        }
      }
    }
  },
};

  return (
    <div style={{ width: "100%", margin: "0 auto", textAlign: "center" }}>
      <div style={{ padding: "30px", backgroundColor: "white" }}>
        
        <p style={{ fontSize: "1.4em", fontWeight: "bold", color: "#333" }}>Año 2025</p>

        <p
          style={{ marginTop: "1em", fontSize: "1.1em", padding: "0 20px", color: "#555" }}
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <div style={{ width: "100%", overflowX: "auto", paddingBottom: "20px", marginTop: "2em" }}>
          <div style={{ width: chartCanvasWidth, height: "600px", minWidth: "600px", margin: "0 auto" }}>
            <Bar data={chartData} options={options} />
          </div>
        </div>

        <DataTable data={sortedData} />
      </div>
    </div>
  );
};

export default Charts;