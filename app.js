const argv = require("./config/yargs").argv;
const por_hacer = require('./por-hacer/por-hacer');
const color = require('colors');


let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = por_hacer.crear(argv.descripcion)
        console.log('Crear una tarea por hacer:', tarea);
        break;

    case 'listar':
        let listado = por_hacer.listar();
        console.log('este es el listado', listado);
        for (const tarea of listado) {
            console.log('=========Por Hacer========'.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('=========================='.green);
        }
        break;

    case 'actualizar':
        let tareaXactualizar = por_hacer.actualizar(argv.descripcion, argv.completado);
        console.log(tareaXactualizar);
        break;

    case 'borrar':
        let tareaXborrar = por_hacer.borrar(argv.descripcion);
        console.log(tareaXborrar);
        break;

    default:
        console.log('Comando no es reconocido.');
        break;
}