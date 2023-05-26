function suma(num1,num2){
    return num1 + num2;
}

// la funcion callbac puede tener cualquier otro nombre

function calc(num1,num2, callback){
    return callback(num1,num2)
}

// impportante que al momento de invocar la funcion suma se haga sin (), pues esto la llamaria directamente y generaria un error
console.log(calc(2,2,suma))

///////////////////////////////////////////
// este es un ejemplo con una funcion anonima
setTimeout(function () {
    console.log("hello")
}, 2000)

//////////////////////////////////////


function saludo(name){
    console.log(`hola ${name}`)
}

// para invocarla ongo la funcion, posteriormente el tiempo de timeout y luego los argumentos que recive la funcion

setTimeout(saludo, 2000, 'oscar')


for (let i = 1; i <= 10; i++) {
    console.log(`¡Hola persona ${i}! \u{1F44B}`);
  }