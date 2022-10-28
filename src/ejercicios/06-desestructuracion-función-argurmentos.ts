// DESESTRUCTURACION DE ARGUMENTOS DE UNA FUNCIÓN 

export interface Producto {
    desc: string;
    precio: number;
}


const telefono: Producto = {
    desc:'nokia A1',
    precio: 150
}

const tablet: Producto = {
    desc: 'IPad Air',
    precio: 350
}


export function calculaISV( productos: Producto[]) :[number,number]{

    let total = 0;

    productos.forEach( ({precio}) =>{
        total += precio;
    })

    return [total, total * 0.15]
}
// el Producto[] significa que va a ser una coleccion de este tipo de dato o interfaz 



const articulos = [telefono, tablet ];

const [total, isv] = calculaISV ( articulos);

console.log( 'ISV: ', isv);
console.log( 'total', total);



interface Caracteristicas {
    altura: number,
    peso: number
}

const laura: Caracteristicas = {
    altura: 1.69,
    peso: 59 
}

const fernando: Caracteristicas = {
    altura: 1.80,
    peso: 78
}


function analisisMedico( descripcion: Caracteristicas[]):[number, number] {
    let volumen = 0;

    descripcion.forEach(({peso}) =>{
        volumen += peso;
    }) 

    return [volumen * 2.205, 100];

}
//aclaramos con el :number de arriba que la función va a tener un return o regreso de tipo number 
// en vez de poner descripcio ponemos directamente la propiedad que queremos utilizar de la interfaz que en este caso es peso y en la parte de volumen += descripcio.peso solo ponemos volumen += peso 

const personas = [laura];

const [ pesoEnLibras , cien  ]= analisisMedico(personas);// en este caso estamos desestructurando el return de analisis medico por que es solamente un valor, si fueran dos valores tenemos que aclararlo en la devolución de la función al principio y cuando hacemos la desestructuración por ejemplo la const cien 
console.log( pesoEnLibras,'kgs');
console.log('peso estadounidense: ', pesoEnLibras ,'libras');
console.log(cien)