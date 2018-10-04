const argv = require('./config/yargs').argv;
const color = require('colors');

const { crearArchivo, Listar } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'Listar':
        // console.log('Listar');
        Listar(argv.base, argv.limite);
        break;
    case 'Crear':
        console.log('Crear ');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado ${archivo.red}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');

}
// let base = '9';

// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(argv2);