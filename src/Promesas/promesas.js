
// las promesas son elementos asincronos en los cuales enviaremos funciones que pueden pasar al instante, mas tarde o nunca
// las promesas tienen tres estados -pendiente | -cumplido | - rechazada

// Pendiente pending → Una promesa inicia en este estado: no cumplida, no rechazada:
//  Una promesa inicialmente está pendiente.

// Cumplida fulfilled → Significa que la operación se completó satisfactoriamente, .then(va => …)
// Cuando llamamos a resolve entonces la promesa pasa a estar resuelta.
// Cuando una promesa se resuelve entonces se ejecuta la función que pasamos al método .then
// Rechazada rejected → significa que la operación falló, .catch(err => …)
// Si llamamos a reject pasa a estar rechazada (obtenemos un error que nos va a indicar la razón del rechazo).
// Si la promesa es rechazada entonces se ejecuta la función que pasamos a .catch

const promise = new Promise(function(resolve,reject){
    resolve('todo correcto parcero')
})


// ///////////////////////////////////////

const vacas = 7;
const countcows = new Promise(function(resolve,reject){
    if(vacas > 10){
        resolve(`We have ${vacas} cows on the farm`)
    } else{
        reject ('there is no cows on the farm')
    }
})

countcows.then((result) =>{  // estoy haciendo uso de una array function
    console.log(result)
}).catch((error)=>{   // el catch es el que se va a encargar de mostrar el mensaje de error de o de reject de la promesa
    console.log(error)
}).finally(()=>{
    console.log('finally')
})


// reto

function delay(time, message){
    const miPromesa = new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve(message)
        }, time);
    })
    return miPromesa;
}

delay(2000, "holi").then((message) => console.log(message))


