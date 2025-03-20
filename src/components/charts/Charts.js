import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import "./politicasChart.css";

const Charts = ({ description, data }) => {
  const [fontSize, setFontSize] = useState(14);

  useEffect(() => {
    const adjustFontSize = () => {
      setFontSize(window.innerWidth < 768 ? 10 : 12);
    };

    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);
    return () => window.removeEventListener("resize", adjustFontSize);
  }, []);

  const totalPresupuestado = data.reduce(
    (sum, item) => sum + item.presupuestado,
    0
  );
  const totalEjecutado = data.reduce((sum, item) => sum + item.ejecutado, 0);
  const sortedData = [...data].sort((a, b) => b.ejecutado - a.ejecutado);

  const splitWordsIntoPairs = (text) => {
    const words = text.split(" ");
    return words.reduce((result, _, i) => {
      if (i % 2 === 0) result.push(words.slice(i, i + 2).join(" "));
      return result;
    }, []);
  };

  const chartData = {
    labels: sortedData.map((item) => splitWordsIntoPairs(item.nombre)),
    datasets: [
      {
        label: "Presupuestado",
        data: sortedData.map((item) => item.presupuestado),
        backgroundColor: "#06cc",
      },
      {
        label: "Ejecutado",
        data: sortedData.map((item) => item.ejecutado),
        backgroundColor: "#0cfc",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          font: { size: fontSize }, // 🔥 Aplica tamaño de fuente a las etiquetas en X
          autoSkip: false, // 🔥 Asegura que no se omitan etiquetas
          maxRotation: 0, // 🔥 Evita que se roten las etiquetas
          minRotation: 0,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: { size: fontSize }, // 🔥 Aplica tamaño de fuente en el eje Y
          callback: function (value) {
            return `Q${value.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`;
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: { size: fontSize }, // 🔥 Aplica tamaño de fuente a la leyenda
        },
      },
    },
  };

  return (
    <div className="container-chart">
      <p className="subtitle-chart">Año 2024</p>

      {/* Solo renderiza el HTML en la descripción */}
      <p
        className="politicasP"
        style={{ marginTop: "1em" }}
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <div className="header-chart">
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

      <div className="bar-chart-wrapper">
        <div className="bar-chart-container">
          <Bar data={chartData} options={options} />
        </div>
      </div>

      {/* ✅ Aquí reinsertamos las tablas correctamente */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th></th>
              {sortedData.map((item, index) => (
                <th key={index}>
                  {splitWordsIntoPairs(item.nombre).map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="left-align">
                <strong>Presupuesto (Q)</strong>
              </td>
              {sortedData.map((item, index) => (
                <td key={index}>
                  {item.presupuestado.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
              ))}
            </tr>
            <tr>
              <td className="left-align">
                <strong>Ejecutado (Q)</strong>
              </td>
              {sortedData.map((item, index) => (
                <td key={index}>
                  {item.ejecutado.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Charts;
