import PersonajeStarWars from './PersonajeStarWars.js';

async function obtenerPersonaje(id) {
  try {
    const respuesta = await fetch(`https://swapi.dev/api/people/${id}/`);
    if (!respuesta.ok) throw new Error(`Error: ${respuesta.status}`);

    const { name, height, mass } = await respuesta.json();
    return new PersonajeStarWars(name, height, mass);
  } catch (error) {
    console.error('Hubo un problema con la solicitud a la API:', error);
  }
}

async function obtenerPersonajes(inicio) {
  const personajes = await Promise.all(
    Array.from({ length: 5 }, (_, i) => obtenerPersonaje(inicio + i))
  );

  personajes.forEach((personaje, index) => {
    if (personaje) {
      personaje.mostrarInformacion(inicio + index);
    } else {
      console.log('El personaje no se encontró.');
    }
  });
}

export { obtenerPersonaje, obtenerPersonajes };