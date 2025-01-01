import React, { useState, useRef, useEffect } from 'react';
import './styles/ExportarDropdown.css';

const ExportarDropdown = () => {
  const [active, setActive] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setActive(!active);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="exportar-dropdown" ref={dropdownRef}>
      <button onClick={handleToggle}>
        Exportar Datos
      </button>
      {active && (
        <div className="dropdown-options">
          <button onClick={() => alert('Exportar a Excel')}>Exportar a Excel</button>
          <button onClick={() => alert('Exportar a Word')}>Exportar a Word</button>
        </div>
      )}
    </div>
  );
};

export default ExportarDropdown;
