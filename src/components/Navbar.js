import React, { useState } from 'react';
import './styles/Navbar.css';

const Navbar = ({ setActiveTab }) => {
  const [showArchivoSubMenu, setShowArchivoSubMenu] = useState(false);
  const [showVerSubMenu, setShowVerSubMenu] = useState(false);
  const [showTemaSubMenu, setShowTemaSubMenu] = useState(false);
  const [showAyudaSubMenu, setShowAyudaSubMenu] = useState(false);
  const [showConfiguracionSubMenu, setShowConfiguracionSubMenu] = useState(false);

  const handleArchivoClick = () => {
    setShowArchivoSubMenu(!showArchivoSubMenu);
  };

  const handleVerClick = () => {
    setShowVerSubMenu(!showVerSubMenu);
  };

  const handleTemaClick = (event) => {
    event.stopPropagation();
    setShowTemaSubMenu(!showTemaSubMenu);
  };

  const handleAyudaClick = () => {
    setShowAyudaSubMenu(!showAyudaSubMenu);
  };

  const handleConfiguracionClick = () => {
    setShowConfiguracionSubMenu(!showConfiguracionSubMenu);
  };

  const handlePagosClick = () => {
    setActiveTab('pagos'); // Actualiza la sección activa a "pagos"
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li onClick={handleArchivoClick}>
          Archivo
          {showArchivoSubMenu && (
            <ul className="submenu">
              <li onClick={() => alert('Nuevo documento creado')}>Nuevo</li>
              <li onClick={() => alert('Aplicación cerrada')}>Cerrar</li>
            </ul>
          )}
        </li>
        <li onClick={handleVerClick}>
          Ver
          {showVerSubMenu && (
            <ul className="submenu">
              <li onClick={handleTemaClick}>
                Tema
                {showTemaSubMenu && (
                  <ul className="submenu nested">
                    <li onClick={() => alert('Tema Claro seleccionado')}>Claro</li>
                    <li onClick={() => alert('Tema Oscuro seleccionado')}>Oscuro</li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        <li onClick={handleConfiguracionClick}>
          Configuración
          {showConfiguracionSubMenu && (
            <ul className="submenu">
              <li onClick={handlePagosClick}>Pagos</li> {/* Añadir el evento onClick para pagos */}
              <li onClick={() => alert('Exportar seleccionado')}>Exportar</li>
              <li onClick={handleTemaClick}>
                Tema
                {showTemaSubMenu && (
                  <ul className="submenu nested">
                    <li onClick={() => alert('Tema Claro seleccionado')}>Claro</li>
                    <li onClick={() => alert('Tema Oscuro seleccionado')}>Oscuro</li>
                    <li onClick={() => alert('Tema Azul seleccionado')}>Azul</li>
                    <li onClick={() => alert('Tema Verde seleccionado')}>Verde</li>
                  </ul>
                )}
              </li>
              <li onClick={() => alert('Licencia seleccionada')}>Licencia</li>
            </ul>
          )}
        </li>
        <li onClick={handleAyudaClick}>
          Ayuda
          {showAyudaSubMenu && (
            <ul className="submenu">
              <li onClick={() => alert('Manual abierto')}>Manual</li>
              <li onClick={() => alert('Acerca de abierto')}>Acerca de</li>
            </ul>
          )}
        </li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Buscar..." />
        <select>
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
