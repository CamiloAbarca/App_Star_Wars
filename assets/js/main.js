import { obtenerPersonajes } from './api.js';
import { inicializarEventos } from './eventos.js';

document.addEventListener('DOMContentLoaded', () => {
  [1, 6, 12].forEach(obtenerPersonajes);
  document.querySelectorAll('.personajes').forEach(contenedor => contenedor.style.display = 'none');
  inicializarEventos();
});