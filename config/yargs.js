const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {

        alias: 'l',
        default: 10
    }
}



const argv = require('yargs')
    .command('Listar', 'Imprime la tabla de multiplicar', opciones)
    .command('Crear', 'Genera  la tabla de multiplicar', opciones)
    .help()
    .argv;


module.exports = {
    argv
}