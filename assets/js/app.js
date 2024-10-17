
class Personaje {
  constructor(nombre, altura, masa) {
    this.nombre = nombre;
    this.altura = altura;
    this.masa = masa;
  }

  mostrarInformacion() {
    console.log('')
    console.log('Información del personaje:');
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Altura: ${this.altura} cm`);
    console.log(`Masa: ${this.masa} kg`);

  }
}

class PersonajeStarWars extends Personaje {
  constructor(nombre, altura, masa) {
    super(nombre, altura, masa);
  }
}

async function obtenerPersonaje(id) {
  try {
    const respuesta = await fetch(`https://swapi.dev/api/people/${id}/`);

    if (!respuesta.ok) {
      throw new Error('Error: ' + respuesta.status);
    }

    const personajeData = await respuesta.json();
    return new PersonajeStarWars(personajeData.name, personajeData.height, personajeData.mass);

  } catch (error) {
    console.error('Hubo un problema con la solicitud a la API:', error);
  }
}

async function obtenerPersonajes(inicio) {
  const partida = inicio
  const termino = parseInt(inicio) + 5
  const personaPromise = [];

  for (let i = partida; i < termino; i++) {
    personaPromise.push(obtenerPersonaje(i));
  }

  const personajes = await Promise.all(personaPromise);

  for (let i = 0; i < 5; i++) {
    const personajeSelected = personajes[i];

    if (personajeSelected) {
      personajeSelected.mostrarInformacion();
    } else {
      console.log('El personaje no se encontró.');
    }
  }
}

// Ejecutamos la función para obtener personajes
//obtenerPersonajes(1, 5);
//obtenerPersonajes(6, 10);
//obtenerPersonajes(11, 15);


//TODO: falta controlar "unknown" en parametros recibidos.