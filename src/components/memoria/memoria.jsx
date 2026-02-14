import React from 'react';

const Memoria = () => {
  const pdfUrl = "/memoria2025.pdf?v=final";

  return (
    <div className="w-full h-[calc(100vh-64px)] bg-gray-100 flex justify-center">
      <iframe
        src={`${pdfUrl}#view=FitH`}
        className="w-full h-full border-none max-w-5xl shadow-lg"
        title="Memoria de Labores 2025"
      />
    </div>
  );
};

export default Memoria;