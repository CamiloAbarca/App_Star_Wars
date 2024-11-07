function togglePersonajes(inicio, mostrar) {
    const contenedor = document.querySelector(`#bloque${Math.ceil(inicio / 5)} .personajes`);
    contenedor.style.display = mostrar ? 'flex' : 'none';
  }
  
  function inicializarEventos() {
    const botones = document.querySelectorAll('.timeline-item');
    botones.forEach((boton, index) => {
      const inicio = index * 5 + 1;
      boton.addEventListener('mouseover', () => togglePersonajes(inicio, true));
      boton.addEventListener('mouseout', () => togglePersonajes(inicio, false));
    });
  }
  
  export { togglePersonajes, inicializarEventos };