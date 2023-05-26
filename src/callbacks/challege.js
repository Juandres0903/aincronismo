// instalacion de elemento nescesario para la ejecucion local del proyecto (no en el navegador) : npm i xmlhttprequest

const xmlhttprequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';
// funcion que permite recivir la URL (api) y la funcion callback
function fechData(urlApi, cb){
    let xhttp = new xmlhttprequest();

    xhttp.open('GET', urlApi, true); // funcion para abrir nuestro llamado a api, parametros -> tipo de llamado*, url que se pasa*, valor buleano para habilitar*
    xhttp.onreadystatechange = function(event){ // para escuchar los estados de la solicitud
        if(xhttp.readyState === 4){  //valores de los estados -> 0 = no se ha inicializado || 1 = loading || 2= cuando ya se ejecuto el valor de send || 3= interactuando con la solicitud || 4= completado la llamada
            if(xhttp.status === 200){ 
                cb(null, JSON.parse(xhttp.responseText)) // se va a obtener la informacion en texto, la trasformamos a objeto por que es asi como queremos trabajarla
            } else { // else para el manejo de errores en el caso del status del servidor
                const error = new Error('Error' + urlApi) 
                return cb(error, null);

            }
        }
    } 
    xhttp.send();

}

fechData(`${API}/products`,function(error1, data1){ //endpoint que trabajaremos sobre el Api que estamos usando y sobre el cual nos referimos arriba
    if(error1) return console.error(error1);
    fechData(`${API}/products/${data1[0].id}`, function(error2, data2){
        if(error2) return console.error(error2);
        fechData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){ // los signos de pregunta me evitan que lanze un error en caso de no encontrarse ese elemento
            if(error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        }); 
    });

});
