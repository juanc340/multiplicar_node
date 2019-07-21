//requiereds
const colors = require('colors');
const argv = require('./config/yargs.js').argv;

const { crearArchivo, listar_tabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];
console.log(argv);
switch (comando) {
    case 'listar':
        listar_tabla(argv.b, argv.l);


        break;
    case 'crear':
        crearArchivo(argv.b, argv.l)
            .then(archivo => console.log(`Archivo creado:${archivo}`))
            .catch(e => console.log(e));


        break;

    default:
        console.log('no es un comando valido');


        break;
}



/*
let parametro = argv[2];
let base = parametro.split('=')[1];*/