import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Monitor from './components/Monitor';
import Historial from './components/Historial';
import Configuracion from './components/Configuracion';
import ExportarDropdown from './components/ExportarDropdown';
import './main.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('archivo');

  return (
    <div>
      <Navbar setActiveTab={setActiveTab} />
      <main>
        {activeTab === 'archivo' && <div></div>}  {/* Eliminamos "Contenido de Archivo" */}
        {activeTab === 'ver' && <div></div>}       {/* Eliminamos "Contenido de Ver" */}
        {activeTab === 'configuracion' && <Configuracion setActiveTab={setActiveTab} />}
        {activeTab === 'ayuda' && <div>Ayuda</div>}
      </main>
      <div className="monitor-wrapper">
        <Monitor />
      </div>
      <div className="historial-wrapper">
        <Historial />
      </div>
      <div className="exportar-wrapper">
        <ExportarDropdown />
      </div>
    </div>
  );
};

export default App;
