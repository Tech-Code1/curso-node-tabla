const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
const colors = require('colors');


/* const [, , arg3= "number=5"] = process.argv
const [, number = 5] = arg3.split('=') */

crearArchivo(argv.n, argv.l, argv.s)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err=>  console.log(err))


