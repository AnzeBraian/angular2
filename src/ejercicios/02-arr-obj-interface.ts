

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

let persona = 'fernando'; 
// si apoyamos el cursor en la variable persona no dice que su valor es del tipo string y no el valor en si porque este puede cambiar en un futuro

const personita = 'gerardo';
// cuando apoyamos el cursor en la variable const nos dice que es una variable con el valor 'gerardo' esto es porque no va a cambiar su valor una vez inicializado el const 


let habilidades: string[] = ['bash','counter','healing']; //para aclarar que tipo de dato se van a ser los valor tenemos que poner despues del nombre de la variable y antes del igual,   :el tipo de dato más el tipo de contenedor que le vamos a agregar(un array un objeto etc)


habilidades.push('true');
// cuando querramos agregar otro elemento al array habilidades va ser si o si un elemento del tipo string porque lo aclaramos cuando la incializamos 


// si queremos combinar elementos de diferentes tipos en un array debemos aclararlo cuando inicializamos el array, por ejemplo 

let contenedor: (string | boolean | number)[] = ['bash','counter',123,true];
// en este caso al ser varios tipos de datos que se pueden ingresar los juntamos entre parentesis   (tipo | tipo ) y por fuera el tipo de contenedor que en este caso es un array[] 

contenedor.push(false);
// en este caso nos va a dejar agregar un valor booleano porque ya lo aclaramos al principio 




// objeto literal 

interface Personaje {
    nombre: string,
    hp: number,
    habilidades:string[],
    puebloNatal?:string;  // el signo de interrogación al lado del nombre de la propiedad hace que esta propiedad sea opcional 
}
// Una interfaz no es mas que una serie de llaves para asegurar que el código sea como nosotros queramos 


const personaje: Personaje = {
    nombre: 'strider',
    hp: 100,
    habilidades: ['bash','counter','healing']
}

personaje.puebloNatal = 'pueblo paleta';

console.table(personaje);

// cuando lo veamos en la consola del navegador vamos a notar que esta todo codificado como si fuera solo javascript 
// las interfaces en js del navegador van a ser omitidas
