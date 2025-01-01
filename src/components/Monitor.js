import React from 'react';
import './styles/Monitor.css';

const Monitor = () => {
  return (
    <div className="monitor-de-dispositivos">
      <h2>Monitor de Dispositivos</h2>
      <div className="buttons-container">
        <div className="tooltip">
          <button>Monitor</button>
          <span className="tooltiptext">Monitorea dispositivos en tiempo real</span>
        </div>
        <div className="tooltip">
          <button>Historial</button>
          <span className="tooltiptext">Ver el historial de dispositivos</span>
        </div>
      </div>
    </div>
  );
};

export default Monitor;
