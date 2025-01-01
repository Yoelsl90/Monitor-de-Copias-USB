import React from 'react';
import './styles/ExportarPrincipal.css';

const ExportarPrincipal = () => (
  <div className="exportar-principal">
    <h3>Exportar Datos</h3>
    <button onClick={() => exportData('excel')}>Exportar a Excel</button>
    <button onClick={() => exportData('word')}>Exportar a Word</button>
  </div>
);

const exportData = (type) => {
  console.log(`Exportando datos a ${type}`);
};

export default ExportarPrincipal;
