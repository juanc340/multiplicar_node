const fs = require('fs');
var colors = require('colors');

let listar_tabla = (base, limite = 10) => {

    for (let i = 0; i <= limite; i++) {
        console.log(`${i}*${base} = ${i*base}`);


    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un numero');
            return;

        }
        let data = '';


        for (let i = 0; i <= limite; i++) {
            data += `${i}*${base} = ${i*base} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`.green);
            }
        });

    });
}
module.exports = {
    crearArchivo,
    listar_tabla
}