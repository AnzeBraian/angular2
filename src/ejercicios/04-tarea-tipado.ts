

interface SuperHeroe {
    nombre: string,
    edad: number,
    direccion:Direccion,
    mostrarDireccion : () => string;
}// por ejemplo en propiedad de dirección estamos usando otra interfaz llamada Dirección y asi no mezclamos muchos datos 

interface Direccion {
    calle:string,
    pais:string,
    ciudad:string
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();

console.log(direccion);

console.log(superHeroe.direccion);
