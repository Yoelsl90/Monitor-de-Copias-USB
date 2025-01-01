import React, { useState } from 'react';
import './styles/Pagos.css';

const Pagos = () => {
  const [activePaymentType, setActivePaymentType] = useState('');
  const [defaultPaymentType, setDefaultPaymentType] = useState('gb');
  const [gbPricing, setGbPricing] = useState({
    video: 5,
    music: 10,
    photos: 5,
    others: 5,
    games: 50
  });
  const [rangePricing, setRangePricing] = useState([
    { from: 0.1, to: 1, price: 5 },
    { from: 1, to: 4, price: 20 },
    { from: 4, to: 8, price: 40 }
  ]);

  const handlePaymentTypeClick = (type) => {
    setActivePaymentType(type);
  };

  const handleGbPriceChange = (event) => {
    const { name, value } = event.target;
    setGbPricing({ ...gbPricing, [name]: parseFloat(value) });
  };

  const handleRangePriceChange = (index, field, value) => {
    const updatedRanges = rangePricing.map((range, i) => 
      i === index ? { ...range, [field]: parseFloat(value) } : range
    );
    setRangePricing(updatedRanges);
  };

  const handleDefaultPaymentTypeChange = (event) => {
    setDefaultPaymentType(event.target.value);
  };

  return (
    <div className="pagos">
      <h3>Tipos de Pago</h3>
      <ul className="payment-types">
        <li onClick={() => handlePaymentTypeClick('gb')}>Por GB</li>
        <li onClick={() => handlePaymentTypeClick('rango')}>Por Rango</li>
      </ul>
      <div className="default-payment-type">
        <label>
          Método de Pago Predeterminado:
          <select value={defaultPaymentType} onChange={handleDefaultPaymentTypeChange} className="custom-select">
            <option value="gb">Por GB</option>
            <option value="rango">Por Rango</option>
          </select>
        </label>
      </div>
      <div className="payment-methods">
        {activePaymentType === 'gb' && (
          <div>
            <h4>Métodos de Pago por GB</h4>
            <label>
              Video: $<input type="number" name="video" value={gbPricing.video} onChange={handleGbPriceChange} /> por GB
            </label>
            <label>
              Música: $<input type="number" name="music" value={gbPricing.music} onChange={handleGbPriceChange} /> por GB
            </label>
            <label>
              Fotos: $<input type="number" name="photos" value={gbPricing.photos} onChange={handleGbPriceChange} /> por GB
            </label>
            <label>
              Otros: $<input type="number" name="others" value={gbPricing.others} onChange={handleGbPriceChange} /> por GB
            </label>
            <label>
              Juegos: $<input type="number" name="games" value={gbPricing.games} onChange={handleGbPriceChange} /> por GB
            </label>
          </div>
        )}
        {activePaymentType === 'rango' && (
          <div>
            <h4>Métodos de Pago por Rango</h4>
            {rangePricing.map((range, index) => (
              <div key={index}>
                <label>
                  De <input type="number" value={range.from} onChange={(e) => handleRangePriceChange(index, 'from', e.target.value)} /> GB
                  a <input type="number" value={range.to} onChange={(e) => handleRangePriceChange(index, 'to', e.target.value)} /> GB:
                  $<input type="number" value={range.price} onChange={(e) => handleRangePriceChange(index, 'price', e.target.value)} />
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagos;
