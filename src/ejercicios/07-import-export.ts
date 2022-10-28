// IMPORTACIONES Y EXPORTACIÓN

import { calculaISV, Producto } from "./06-desestructuracion-función-argurmentos";






const carritoCompras: Producto[] = [
    {
        desc: 'telefono 1',
        precio: 100
    },
    {
        desc: 'telefono 2',
        precio: 150
    }

];


const [total, isv ] = calculaISV(carritoCompras)

console.log( 'total', total);
console.log('ISV', isv );
// cuando vemos la consola vamos a ver impresiones del archivo del cual estamos importando la interfaz y la función  