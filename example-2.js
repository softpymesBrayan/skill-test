import { cleanConsole, createAll } from './data'

const companies = createAll()

cleanConsole(2, companies)
console.log('---- EXAMPLE 2 --- ', 'Put here your function')

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

/* Crear una función tomando como parámetro la variable "companies" y el
booleano "hasCar". Para cada "company" debe conservar solo
"users" cuyo valor de atributo "car" es igual al parámetro del
función "hasCar" y el atributo "usersLength" deben indicar el total de
"users" correspondientes al parámetro "hasCar". */
