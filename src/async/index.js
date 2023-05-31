const fnAsync = () =>{
    return new Promise((resolve, reject) => {
        (true)  //if ternario
            ?setTimeout(()=> resolve('async'),2000)  // si la expresion es positiva
            :reject(new Error('Error!'))   // de ser negativa
    })
}


const otraFuncion = async () =>{
    const algo = await fnAsync();
    console.log(algo)
    console.log('hello')
}

console.log('before')
otraFuncion()
console.log('after')