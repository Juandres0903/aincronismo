import fetch from 'node-fetch';
const API = 'https://domain-api-com'

async function fetchData(urlApi){
    const response = await fetch(urlApi)
    const data = await response.json()
    return data
}

const otraFuncion = async (urlApi) =>{
    try{
        const products = await fetchData(`${urlApi}/products`)
        const product = await fetchData(`${urlApi}/products/${products[0].id}`)
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`)

        console.log(products)
        console.log(product.title)
        console.log(category.name)
    }
    // catch (Error){
    //     console.error(Error);
    // }
    catch{
        throw new Error('API Not Found');
    }
}

otraFuncion(API)




