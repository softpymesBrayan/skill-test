import { cleanConsole, createAll } from './data'

const companies = createAll()

cleanConsole(4, companies)
console.log('---- EXAMPLE 4 --- ', 'Put here your function')

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

/* Crear una función tomando como parámetro la variable "companies" y agrupando
todos los "users" de todas las "companies" en una sola tabla. Cada "user"
debe tener un nuevo atributo "company" que tenga como valor el nombre de la
dicha "company". Los "users" deben ordenarse de acuerdo con sus edad
(de mayor a menor). */
