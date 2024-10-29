
class Personaje {
  constructor(nombre, altura, masa) {
    this.nombre = nombre;
    this.altura = altura;
    this.masa = masa;
  }

  mostrarInformacion(id) {
    let info = `<div class="content">
                <h3>Información del personaje:</h3>`;
    info += `<p>Nombre: ${this.nombre}</p>`;
    info += `<p>Altura: ${this.altura} cm Peso: ${this.masa === 'unknown' ? 'no disponible' : `${this.masa} kg`}</p>
            </div>`;

    const contenedor = document.querySelector(`#bloque${Math.ceil(id / 5)} .personajes`);
    contenedor.innerHTML += info;

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
      personajeSelected.mostrarInformacion(inicio);
    } else {
      console.log('El personaje no se encontró.');
    }
  }
}
