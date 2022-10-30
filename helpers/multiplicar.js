const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (number, listar = false, multiplos) => {

    try {

        let salida = "";
        let consola = "";

        for (let index = 1; index <= multiplos; index++) {
            
            salida += `${number} x ${index} = ${number * index}\n`;
            consola += `${number} ${"x".green} ${index} ${"=".green} ${number * index}\n`;
        }

        if (listar) {
            console.log("=======================".green);
            console.log('      Tabla del:'.green, colors.blue(number));
            console.log("=======================".green);
            console.log(consola);
        }


        fs.writeFileSync(`./salida/tabla-${number}.txt`, salida)

        return (`tabla-${number}.txt`);

    } catch (err) {
        throw (err);
    }

    

}

module.exports = {
    crearArchivo
}