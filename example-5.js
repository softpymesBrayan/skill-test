import { cleanConsole, createAll } from './data'

const companies = createAll()

cleanConsole(5, companies)
console.log('---- EXAMPLE 5 --- ', 'Put here your function')

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

/* Use la función creada en el ejemplo 4 para crear una nueva función tomando
como parámetro la variable "companies" y devuelve un nuevo objeto con los
siguientes atributos:
    'size' => total de "users"
    'average' => edad promedio de "users"
    'hasCar' => total de "users" propietarios de un carro
    'averageWithCar' => edad promedio de los "users" con un carro */
