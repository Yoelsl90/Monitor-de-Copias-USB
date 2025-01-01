import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Monitor from './components/Monitor';
import Historial from './components/Historial';
import Configuracion from './components/Configuracion';
import ExportarDropdown from './components/ExportarDropdown';
import './main.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('monitor');

  return (
    <div>
      <Navbar setActiveTab={setActiveTab} />
      <main>
        {activeTab === 'monitor' && <Monitor />}
        {activeTab === 'historial' && <Historial />}
        {activeTab === 'configuracion' && <Configuracion setActiveTab={setActiveTab} />}
        {activeTab === 'ayuda' && <div>Ayuda</div>}
      </main>
      <div className="exportar-wrapper">
        <ExportarDropdown />
      </div>
    </div>
  );
};

export default App;
