import { cleanConsole, createAll } from './data'

const companies = createAll()

cleanConsole(3, companies)
console.log('---- EXAMPLE 3 --- ', 'Put here your function')

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

/* Cree una función tomando la variable "companies" como parámetro y devolviendo
un booleano que valida que todos los nombres de las empresas y los atributos
"firstName" y "lastName" de "users" están en mayúsculas.
Debes probar la operación de esta función importando la función creada
en el "example-1.js". */
