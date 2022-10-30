const argv = require('yargs')
                .option('n', {
                    alias: "number",
                    type: "number",
                    demandOption: true,
                    describe: "Es la base de la tabla de multiplicar"
                })
                .option('l', {
                    alias: "listar",
                    type: "boolean",
                    demandOption: true,
                    default: false,
                    describe: "Muestra la tabla en consola"
                })
                .option('s', {
                    alias: "size",
                    type: "number",
                    demandOption: true,
                    default: 10,
                    describe: "Tamaño de los multiplos"
                })
                .check((argv, options) => {
                    if(isNaN(argv.n)){
                        throw "La variable number tiene que contener un número"
                    }
                    return true;
                })
                .argv;

module.exports = argv;