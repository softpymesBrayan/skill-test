import { cleanConsole, createAll } from './data'

const companies = createAll()

cleanConsole(6, companies)
console.log('---- EXAMPLE 6 --- ', 'Put here your function')

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

/* Cree una función tomando la variable "companies" como parámetro y devolviendo
un nuevo objeto cuyos atributos son la concatenación del apellido, nombre y
edad de cada "user". Cada atributo debe tener el valor de boolean "car".
Ver ejemplo a continuación. */

const example = {
  johnDoe32: true,
  BernardoMinet45: false,
  alinaChef23: true
}

console.log(example)
