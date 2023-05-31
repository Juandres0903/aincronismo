//Declaración de la función del Generador
function* gen(){
    yield 1;
    yield 2;
    yield 3;
}
//Expresión de la función Generadora
const g = gen();
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)


///////////////////////////////

function* iterate(array){
    for(let value of array){
        yield value
    }
}

const it = iterate(['oscar', 'omar','ana','lucia','juan']);
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)



/////////////////////////////////////
function* counterGenerator() {//creamos el generator //pero para ello usamos el 'functions'
    let i = 0
    while (true) {
      yield i
      i++
    }
  }
  
  var counter = counterGenerator()
  
  counter.next() // { value: 0, done: false }
  counter.next() // { value: 1, done: false }
  counter.next() // { value: 2, done: false }
 // hasta el infinito y más allá!