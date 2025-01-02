import React, { useState } from 'react';
import './styles/Pagos.css';

const Pagos = ({ setActiveSection }) => {
  const [tipoPago, setTipoPago] = useState('porGb');
  const [precioPorGb, setPrecioPorGb] = useState({ video: '', musica: '', fotos: '', games: '', otros: '' });
  const [rangos, setRangos] = useState([{ min: '', max: '', precio: '' }]);

  const handleTipoPagoChange = (event) => {
    event.stopPropagation();
    setTipoPago(event.target.value);
  };

  const handlePrecioChange = (tipo, value) => {
    setPrecioPorGb({ ...precioPorGb, [tipo]: value });
  };

  const handleRangoChange = (index, field, value) => {
    const newRangos = [...rangos];
    newRangos[index][field] = value;
    setRangos(newRangos);
  };

  const agregarRango = () => {
    setRangos([...rangos, { min: '', max: '', precio: '' }]);
  };

  const eliminarRango = (index) => {
    const newRangos = rangos.filter((_, i) => i !== index);
    setRangos(newRangos);
  };

  const handleRegresar = () => {
    setActiveSection(null);
  };

  return (
    <div className="pagos-configuracion">
      <h2>Configuración de Pagos</h2>
      <button onClick={handleRegresar} className="regresar-btn">Regresar</button>
      <div className="tipo-pago">
        <label>
          <input type="radio" value="porGb" checked={tipoPago === 'porGb'} onChange={handleTipoPagoChange} />
          Pago por GB copiados
        </label>
        <label>
          <input type="radio" value="porRango" checked={tipoPago === 'porRango'} onChange={handleTipoPagoChange} />
          Por rango de GB
        </label>
      </div>

      {tipoPago === 'porGb' && (
        <div className="configuracion-gb">
          <h3>Configuración por GB copiados</h3>
          {['video', 'musica', 'fotos', 'games', 'otros'].map((tipo) => (
            <div key={tipo} className="configuracion-item">
              <label>{tipo.charAt(0).toUpperCase() + tipo.slice(1)}:</label>
              <input
                type="number"
                value={precioPorGb[tipo]}
                onChange={(e) => handlePrecioChange(tipo, e.target.value)}
                placeholder={`Precio por GB de ${tipo}`}
              />
            </div>
          ))}
        </div>
      )}

      {tipoPago === 'porRango' && (
        <div className="configuracion-rangos">
          <h3>Configuración por Rango de GB</h3>
          {rangos.map((rango, index) => (
            <div key={index} className="rango">
              <label>Min:</label>
              <input
                type="number"
                value={rango.min}
                onChange={(e) => handleRangoChange(index, 'min', e.target.value)}
                placeholder="GB mínimo"
              />
              <label>Max:</label>
              <input
                type="number"
                value={rango.max}
                onChange={(e) => handleRangoChange(index, 'max', e.target.value)}
                placeholder="GB máximo"
              />
              <label>Precio:</label>
              <input
                type="number"
                value={rango.precio}
                onChange={(e) => handleRangoChange(index, 'precio', e.target.value)}
                placeholder="Precio"
              />
              <button onClick={() => eliminarRango(index)}>Eliminar</button>
            </div>
          ))}
          <button onClick={agregarRango}>Agregar Rango</button>
        </div>
      )}
    </div>
  );
};

export default Pagos;
