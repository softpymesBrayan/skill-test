import { cleanConsole, createAll } from './data'

const companies = createAll()

cleanConsole(7, companies)

console.log('---- EXAMPLE 7 part 1 --- ', 'Put here your function')
console.log('---- EXAMPLE 7 part 2 --- ', 'Put here your function')
console.log('---- EXAMPLE 7 part 3 --- ', 'Put here your function')
console.log('---- EXAMPLE 7 part 4 --- ', 'Put here your function')
console.log('---- EXAMPLE 7 part 5 --- ', 'Put here your function')
console.log('---- EXAMPLE 7 part 6 --- ', 'Put here your function')
console.log('---- EXAMPLE 7 part 7 --- ', 'Put here your function')
console.log('---- EXAMPLE 7 part 8 --- ', 'Put here your function')
console.log('---- EXAMPLE 7 part 9 --- ', 'Put here your function')

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

/* Parte 1: Crear una función tomando como parámetro un "id" de "company" y
devolviendo el nombre de esta "company".

Parte 2: Crear una función tomando como parámetro un "id" de "company" y
quitando la "company" de la lista.

Parte 3: Crear una función tomando como parámetro un "id" de "company" y
permitiendo hacer un PATCH (como con una llamada HTTP) en todos los
atributos de esta "company" excepto en el atributo "users".

Parte 4: Crear una función tomando como parámetro un "id" de "company" y un
nuevo "user" cuyo el apelido es "Delgado", el nombre "Juan", de 35 años y
dueño de un carro. El nuevo "user" debe agregarse a la lista de "users" de este
"company" y tener un "id" generado automáticamente. La función también debe modificar
el atributo "usersLength" de "company".

Parte 5: Crear una función tomando como parámetro un "id" de "company" y
permitiendo hacer un PUT (como con una llamada HTTP) en esta "company" excepto
en el atributo "users".

Parte 6: Crear una función tomando como parámetro un "id" de "company" y un
"id" de "user". La función debe quitar este "user" de la lista de "users"
de "company" y cambiar el atributo "usersLength" de "company".

Parte 7: Crear una función tomando como parámetro un "id" de "company" y un
"id" de "user" que permite hacer un PATCH (como con una llamada HTTP) en este
"user".

Parte 8: Crear una función tomando como parámetro un "id" de "company" y un
"id" de "user" que permite hacer un PUT (como con una llamada HTTP) en este
"user".

Parte 9: Crear una función tomando como parámetro dos "id" de "company" y
un "id" de "user". La función debe permitir que el user sea transferido de la
primera "company" a la segunda "company". El atributo "usersLength" de cada
"company" debe actualizarse. */
