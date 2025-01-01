import React from 'react';
import './styles/Exportar.css';

const Exportar = () => (
  <div className="exportar">
    <h3>Exportar Datos</h3>
    <button onClick={() => exportData('excel')}>Exportar a Excel</button>
    <button onClick={() => exportData('word')}>Exportar a Word</button>
  </div>
);

const exportData = (type) => {
  console.log(`Exportando datos a ${type}`);
};

export default Exportar;
