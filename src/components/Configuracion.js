import React, { useState, useEffect, useRef } from 'react';
import Pagos from './Pagos';
import Tema from './Tema';
import ObtenerLicencia from './ObtenerLicencia';
import ActivarLicencia from './ActivarLicencia';
import './styles/Configuracion.css';

const Configuracion = ({ setActiveTab }) => {
  const [activeSubTab, setActiveSubTab] = useState('pagos');
  const [exportPath, setExportPath] = useState('');
  const configRef = useRef(null);

  const handleMouseEnter = (subTab) => {
    setActiveSubTab(subTab);
  };

  const handlePathChange = (event) => {
    setExportPath(event.target.value);
  };

  const handleClickOutside = (event) => {
    if (configRef.current && !configRef.current.contains(event.target)) {
      setActiveTab('');  // Devolver a la ventana principal al hacer clic fuera del menú
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="configuracion" ref={configRef}>
      <h2>Configuración</h2>
      <ul className="sub-menu">
        <li onMouseEnter={() => handleMouseEnter('pagos')}>Pagos</li>
        <li onMouseEnter={() => handleMouseEnter('exportar')}>Exportar</li>
        <li onMouseEnter={() => handleMouseEnter('tema')}>Tema</li>
        <li onMouseEnter={() => handleMouseEnter('licencia')}>Licencia</li>
      </ul>
      <div className="config-content">
        {activeSubTab === 'pagos' && <Pagos />}
        {activeSubTab === 'exportar' && (
          <div className="exportar-config">
            <h3>Exportar Configuración</h3>
            <label htmlFor="export-path">Ruta de Exportación:</label>
            <input 
              type="text" 
              id="export-path" 
              value={exportPath} 
              onChange={handlePathChange} 
              placeholder="Selecciona la ruta de exportación" 
            />
          </div>
        )}
        {activeSubTab === 'tema' && <Tema />}
        {activeSubTab === 'licencia' && (
          <div>
            <ObtenerLicencia />
            <ActivarLicencia />
          </div>
        )}
      </div>
    </div>
  );
};

export default Configuracion;
