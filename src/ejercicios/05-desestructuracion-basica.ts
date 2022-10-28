//Desestructuración de objetos 
//nos permite crear constantes basadas en propiedades que vienen en un objeto 


interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles 
}

interface Detalles {
    autor: string,
    anio: number;
}

const reproductor: Reproductor ={
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}


//const autor = 'Fulano';

const { volumen, segundo, cancion, detalles /*detalles: { autor: autorDetalle }*/} = reproductor; //por ejemplo si teniamos una const con el valor de 'fulano nos iba a dar un error porque se iban a chocar los valores y no va a saber cual tomar, pero al tomar la propiedad autor y asignarle otra variable se soluciona, el problema de esto es que se vuelve mas dificil de leer, por eso es mejor escribir el codigo de aca abajo 

const { autor } = detalles;  //esta es una forma de desestructurar la propiedad autor o tambien lo podemos hacer en la misma linea que los demas 


console.log('El volumen actual es de: ',volumen);
console.log('El segundo actual de: ',segundo);
console.log('La cancion actual es: ',cancion);
console.log('El autor es: ',autor);



//DESESTRUCTURACIÓN DE ARREGLOS 

const dbz: string[] = ['goku','vegeta','trunks'];
const [ p1, p2, p3 ] = dbz;  //con esta const estamos asignando una const a cada posición del arreglo dbz 
//en el caso de que solo necesitemos una sola posicion como una const las demas posiciones las vamos a dejar sin nombre por ejemplo  const [ , , p3 ] y ahi vamos a poder utilizar la const p3 que es la tercera posición 


console.log('Personaje1: ', p1); 
console.log('Personaje: ', p2);
console.log('Personaje: ', dbz[2]);
// al hacer referencia a las constantes de cada posición evitamos el tener que hacer referencia a la posición como es el caso de dbz[2] porque ya lo aclaramos al principio 
