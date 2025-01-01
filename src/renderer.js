import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './main.css';  // Importa los estilos globales

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
