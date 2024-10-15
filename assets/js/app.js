
class Person {

  constructor(nombre, peso, altura) {
    this.nombre = nombre;
    this.peso = peso;
    this.altura = altura;
  }
}

const persons = []
const appElement = document.getElementById('app');

for (var i = 1; i < 6; i++) {
  const personId = i;
  fetch(`https://swapi.dev/api/people/${personId}/`)
    .then(response => response.json())
    .then(data => {
      const person = new Person(data.name, data.mass, data.height);
      persons.push(person); // Agrega el nombre al arreglo
    })
    .catch(error => console.error('Error:', error));
}



const nameElement = document.getElementById('name');
const pesoElement = document.getElementById('peso');
const alturaElement = document.getElementById('altura');

//console.log(persons[1])

//ssnameElement.textContent = persons[0]

//nameElement.textContent = 


/*
class Person {

  constructor(nombre, peso, altura) {
      this.nombre = nombre;
      this.peso = peso;
      this.altura = altura;
  }
}

const a = []; // Inicializa un arreglo vacío para almacenar los nombres

const promises = []; // Inicializa un arreglo para almacenar las promesas

for (var i = 1; i < 6; i++) {
    const personId = i;
    const promise = fetch(`https://swapi.dev/api/people/${personId}/`)
  .then(response => response.json())
  .then(data =>{
    const person = new Person(data.name, data.mass, data.height);
    return person.nombre; // Retorna el nombre
  })
  .catch(error => console.error('Error:', error));
  promises.push(promise); // Agrega la promesa al arreglo
}

Promise.all(promises).then(nombres => {
  a = nombres; // Asigna el arreglo de nombres a la variable "a"
  console.log(a); // Imprime el arreglo de nombres
});
*/


