
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

    const contenedor = document.querySelector(`#bloque${Math.ceil(id / 4)} .personajes`);
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

let personajesMostrados = true; // Variable para controlar la visibilidad

async function obtenerPersonajes(inicio) {
    const partida = inicio;
    const termino = parseInt(inicio) + 5;
    const personaPromise = [];

    for (let i = partida; i < termino; i++) {
        personaPromise.push(obtenerPersonaje(i));
    }

    const personajes = await Promise.all(personaPromise);

    // Mostrar información por defecto
    for (let i = 0; i < 5; i++) {
        const personajeSelected = personajes[i];
        if (personajeSelected) {
            personajeSelected.mostrarInformacion(inicio);
        } else {
            console.log('El personaje no se encontró.');
        }
    }
}

function togglePersonajes(inicio, mostrar) {
  const contenedor = document.querySelector(`#bloque${Math.ceil(inicio / 5)} .personajes`);
  contenedor.style.display = mostrar ? 'flex' : 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  obtenerPersonajes(1);
  obtenerPersonajes(6);
  obtenerPersonajes(12);

  // Ocultar todos los contenedores de personajes al cargar
  const contenedores = document.querySelectorAll('.personajes');
  contenedores.forEach(contenedor => {
      contenedor.style.display = 'none';
  });

  // Agregar eventos para los botones
  const botones = document.querySelectorAll('.timeline-item');
  botones.forEach((boton, index) => {
      const inicio = index * 5 + 1;
      boton.addEventListener('mouseover', () => togglePersonajes(inicio, true));
      boton.addEventListener('mouseout', () => togglePersonajes(inicio, false));
  });
});

function togglePersonajes(inicio, mostrar) {
  const contenedor = document.querySelector(`#bloque${Math.ceil(inicio / 5)} .personajes`);
  contenedor.style.display = mostrar ? 'flex' : 'none';
}