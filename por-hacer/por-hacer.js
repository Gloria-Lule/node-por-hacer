const fs = require('fs');

let listadoXhacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoXhacer);
    fs.writeFile("./db/data.json", data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
    });
}

const cargarDB = () => {
    try {

        listadoXhacer = require("../db/data.json");

    } catch (error) {

        listadoXhacer = [];
    }

}

let crear = descripcion => {

    cargarDB();

    let tareaXhacer = {
        descripcion,
        completado: false
    }
    listadoXhacer.push(tareaXhacer);
    guardarDB();
    return listadoXhacer;
}

let listar = () => {
    cargarDB();
    return listadoXhacer;
}

let actualizar = (descripcion, completado) => {
    cargarDB();

    let index = listadoXhacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoXhacer[index].completado = completado;
        guardarDB();
        return `se actualizo el estado a completado = ${completado} correctamente`;
    } else {
        return 'no se actializo la tarea';
    }

}

let borrar = (descripcion) => {
    cargarDB();
    let index = listadoXhacer.findIndex(tarea => tarea.descripcion === descripcion);

    console.log(index);

    if (index >= 0) {
        listadoXhacer.splice(index);
        guardarDB();
        return `se borro la tarea = ${descripcion} correctamente`;
    } else {
        return "no se borro la tarea"
    }

}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}