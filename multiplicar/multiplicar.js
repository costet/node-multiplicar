const fs = require('fs');
const color = require('colors');

crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`la base ingresada ${base} no es un nuemro `);
            return;
        }

        var resultado = 0;
        var resultado1 = '';
        for (let index = 1; index <= limite; index++) {
            resultado = base * index;
            resultado1 += `${base} * ${index} = ${resultado}\n`;
        }

        fs.writeFile(`tablas/tabla de multi-${base} al ${limite}.txt`, resultado1, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla - ${base} al ${limite}.txt`)

        });

    });
}

Listar = (base, limite) => {
    console.log(`=================`.green);
    console.log(`tabla de ${base}`.red);
    console.log(`=================`.green);
    var resultado = 0;
    var resultado1 = '';
    for (let index = 1; index <= limite; index++) {
        resultado = base * index;
        //  `${base} * ${index} = ${resultado}\n`;
        console.log(`${base} * ${index} = ${resultado}`.magenta);


    }
}

module.exports = {
    crearArchivo,
    Listar
}