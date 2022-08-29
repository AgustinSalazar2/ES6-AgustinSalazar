/* # Trabajando con Promesas

> 1. Transformar todas las funciones declarativas en funciones flecha.

> 2. Iplementar los métodos .then y .catch necesarios para manejar las respuestas exitosas y/o los errores al invocar las funciones.

> 3. Simplificar el código de las funciones.

> 4. Transformar la función **funcionCuatro()** en una función asíncrona con la palabra reservada __async__ e implementarla junto con **await**.
 */

// Promesa almacenada en una constante
const promesa = new Promise((resolve, reject)=>{
    (10 === 11)
        ?resolve('Los valores de promesa uno son iguales')
        :reject('Los valores de promesa dos son distintos');
});

promesa
.then(respuesta => console.log(respuesta))
.catch(err => console.log(err))



// Promesa dentro en una función.
const promesaDos = (provincia) => {
    return new Promise((resolve, reject)=> {
            ('Formosa' === provincia)
                ?resolve('Usted está ubicado en Formosa')
                :reject('Error al realizar la consulta')   
    });
}

promesaDos("Formosa")
.then(respuesta => console.log(respuesta))
.catch(err => console.log(err))



const promesaTres = (valorBooleano) => {
    return new Promise((resolve, reject)=> {
        (true === valorBooleano)
        ? resolve('Los valores de la promesa tres son iguales')
        : reject('Los valores de la promesa tres son distintos')
    }) 
}

promesaTres(true)
.then(resp => console.log(resp))
.catch(err => console.log(err))
        


const promesaCuatro = async (arguments) => {
    return (true === arguments)
                ? ('Los valores de la promesa cuatro son iguales')
                : ('Los valores de la promesa cuatro son distintos')
}

promesaCuatro(false)
.then(resp => console.log(resp))
.catch(err => console.log(err))