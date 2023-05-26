import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1'

function fetchData(urlApi){
    return fetch(urlApi);
}

// fetchData(`${API}/products`) //enddpoint
// .then(response => response.json())   // convertir la info que me llega a formato json
// .then(products =>{
//     console.log(products)   // puedo anidar cuantos .then considere nescesarios
// })
// .catch(error => console.log(error));


fetchData(`${API}/products`)
.then(response => response.json())
.then(products =>{
    //console.log(products)    //aca optenemos todos los productos
    return fetchData(`${API}/products/${products[4].id}`) //especificamos un producto
})
.then(response => response.json())
.then(product => {
    console.log(product.title) // nmostrar el titulo del producto obtenido
    return fetchData(`${API}/categories/${product.category.id}`)
})
.then(response => response.json())
.then(category=>{
    console.log(category.name);
})
.catch(err => console.log(err))