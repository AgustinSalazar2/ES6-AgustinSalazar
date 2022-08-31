/* # Promesas en Javascript

## Consignas:

> 1. Transformar todas las funciones declarativas en funciones flecha.

> 2. Transformar las funciones en asíncronas con la palabra __async__.

> 3. Colocar la url correcta del método fetch teniendo en cuenta el nombre de la función que la contiene.

> 4. Luego de realizar el método fetch, implementar el método ".json()" sobre los datos obtenidos.

>5. Implementar **await** sobre todos los procesos asíncronos como consultas a la base de datos, conversión de formato json, etc.

> 6. Selecconar las funciones _*retrasar*_, _*obtenerPcias*_, _*obtenerDptos*_, _*obtenerLocalidades*_, luego cortarlas y pegarlas en el archivo funciones-exportadas que se encuentra en la carpeta _*libs*_.

> 7. Utilizar la palabra reservada **export** para exportar las funciones y que puedan ser utilizadas desde el archivo __app.js__. Pueden exportarlas una por una o como un solo objeto.

> 8. Implementar bloques try catch para el manejo de errores. 
*/


const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// Función que retorna los datos de provincias
const obtenerPcias = async () => {
    await retrasar(1800);
    const consulta = await fetch('https://apis.datos.gob.ar/georef/api/provincias');
    return consulta;
}

// Función que retorna los datos de departamentos
const obtenerDptos = async () => {
    await retrasar(1391);

    const consulta = await fetch('https://apis.datos.gob.ar/georef/api/departamentos');
    return consulta;
}

// Función que retorna los datos de localidades
const obtenerLocalidades = async () => {
    await retrasar(900);

    const consulta = await fetch('https://apis.datos.gob.ar/georef/api/localidades');
    return consulta;
}



// Funcion para obtener todos los datos
const consultarDatos = async () => {
    const provincias = await obtenerPcias().then(resp=>resp.json());
    const dptos = await obtenerDptos().then(resp=>resp.json());
    const localidades = await obtenerLocalidades().then(resp=>resp.json());

    console.log(provincias.provincias);
    console.log(dptos.departamentos);
    console.log(localidades.localidades);
}
consultarDatos();
