export const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// Función que retorna los datos de provincias
export const obtenerPcias = async () => {
    await retrasar(1800);
    try {
        const consulta = await fetch('https://apis.datos.gob.ar/georef/api/provincias');
        const jsonResp = await consulta.json().then(resp=>resp.provincias);
        return jsonResp;
    } catch (error) {
        return error
    }
}

// Función que retorna los datos de departamentos
export const obtenerDptos = async () => {
    await retrasar(1391);
    try {
        const consulta = await fetch('https://apis.datos.gob.ar/georef/api/departamentos?max=529');
        const jsonResp = await consulta.json().then(resp=>resp.departamentos);
        return jsonResp;
    } catch (error) {
        return error
    }
}

// Función que retorna los datos de localidades
export const obtenerLocalidades = async () => {
    await retrasar(900);
    try {
        const consulta = await fetch('https://apis.datos.gob.ar/georef/api/localidades?max=4150');
        const jsonResp = await consulta.json().then(resp=>resp.localidades);
        return jsonResp;
    } catch (error) {
        return error
    }
}
