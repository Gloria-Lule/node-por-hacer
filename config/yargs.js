const descripcion = {

    demand: true,
    alias: 'd'
}

const completado = {
    alias: 'c',
    default: false
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza un elemento por hacer', {
        descripcion,
        completado
    })
    .command('listar', 'Lista las tareas creadas por hacer', {

    })
    .command('borrar', 'Borra una tarea solicitada', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}