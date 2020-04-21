import { cleanConsole, createAll } from './data'

const companies = createAll()

cleanConsole(1, companies)
console.log('---- EXAMPLE 1 --- ', 'Put here your function')

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

/* Crear una función tomando la variable "companies" como parámetro y reemplazando
todos los valores "undefined" en "usuarios" por un string vacío.
El nombre de cada "company" debe tener una letra mayúscula al principio, así como
el apellido y el nombre de cada "user".
Las "companies" deben ordenarse por su total de "user" (orden decreciente)
y los "users" de cada "company" deben aparecer en orden alfabético. */
