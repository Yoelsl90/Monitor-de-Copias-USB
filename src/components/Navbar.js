import React, { useState } from 'react';
import './styles/Navbar.css';

const Navbar = ({ setActiveTab }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('todos');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li onClick={() => setActiveTab('monitor')}>Monitor</li>
        <li onClick={() => setActiveTab('historial')}>Historial</li>
        <li onClick={() => setActiveTab('configuracion')}>Configuración</li>
        <li onClick={() => setActiveTab('ayuda')}>Ayuda</li>
      </ul>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Buscar..." 
          value={searchTerm} 
          onChange={handleSearchChange} 
        />
        <select value={filter} onChange={handleFilterChange}>
          <option value="todos">Todos</option>
          <option value="dia">Día</option>
          <option value="semana">Semana</option>
          <option value="mes">Mes</option>
          <option value="dispositivo">Dispositivo</option>
        </select>
        <button>Buscar</button>
      </div>
    </nav>
  );
};

export default Navbar;
