class Personaje {
    constructor(nombre, altura, masa) {
      this.nombre = nombre;
      this.altura = altura;
      this.masa = masa;
    }
  
    mostrarInformacion(id) {
      const contenedor = this.obtenerContenedor(id);
      contenedor.innerHTML += this.generarInformacion();
    }
  
    obtenerContenedor(id) {
      return document.querySelector(`#bloque${Math.ceil(id / 4)} .personajes`);
    }
  
    generarInformacion() {
      const masaTexto = this.masa === 'unknown' ? 'no disponible' : `${this.masa} kg`;
      return `
        <div class="content">
          <h3>Información del personaje:</h3>
          <p>Nombre: ${this.nombre}</p>
          <p>Altura: ${this.altura} cm Peso: ${masaTexto}</p>
        </div>`;
    }
  }
  
  export default Personaje;