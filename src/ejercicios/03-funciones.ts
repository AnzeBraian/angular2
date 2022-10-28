
function sumar(a:number, b:number):number {
    return a + b;
}

const resultado = sumar(10, 20);

console.log(resultado);


const sumarFlecha = (a:number,b:number):number => {
    return a + b;
}


function multiplicar( numero:number, otroNumero?:number, base:number = 2 ):number {
    return numero * base;

} // el orden de los argumentos es que primero se escriben los argumentos obligatorios y luego los opcionales porque un argumento obligatorio no puede ir despues de una opcional porque nunca a va a llegar a ese argumento 
// en este ejemplo ponemos que si el argumento base no recibe ningun valor, va a ser el numero 2 por defecto gracias al signo = y el valor 

const resultado2 = multiplicar(5,10);

const resultado3 = multiplicar(5, 20, 10);


console.log(resultado2, resultado3); // en este caso el resultado va a ser 10 porque 5 va a ir al primer argumento y el 10 va a ir al segundo que es opcional y el tercero no recibe ninguno pero al ponerle por defecto el 2, en el return se va a multiplicar el 5 por el 2 

//si pusieramos tres valores cuando hacemos referencia a la función multiplicar ahi si va a tomar el valor que cargamos como es el resultado3



// FUNCIONES CON OBJETOS COMO ARGUMENTOS 

interface PersonajeLOR {
    nombre:string,
    pv: number,
    mostrarHp: () => void;

}//la interfaz lo que hace es asegurarse de que el objeto tenga las mismas propiedades que ella 

function curar(personaje: PersonajeLOR, curarX:number ):void {

    personaje.pv += curarX; 

    console.log(personaje);

} // esos dos puntos void nos avisan que no va a haber ninguna devolución (return)
//el += es lo mismo que personaje.pv + curarx

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log('puntos de vida: ', this.pv)
    }
}


curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();