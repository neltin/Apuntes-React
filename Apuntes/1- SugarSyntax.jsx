var celular = {
	ram: "4g",
	memoria: "64g",
	camara: "8mp"
}

var celular2 = {
	ram: "8g",
	camara: "16mp"
}

var celulares = {celular};

console.log(celulares);
//Objeto dentro de objeto
//{ celular: { ram: '4g', memoria: '64g', camara: '8mp' } }

/**
 * Propiedad: ... 
 * Descripcion: La variable permite sobreescribir objetos (solo le pasa su propiedades).
**/

var celulares2 = {...celular};
console.log(celulares2);
//{ ram: '4g', memoria: '64g', camara: '8mp' }

var celulares3 = {...celular, ...celular2};
console.log(celulares3);
//Cambio la camara
//{ ram: '8g', memoria: '64g', camara: '16mp' }

console.log("celular", celulares3);
//celular { ram: '8g', memoria: '64g', camara: '16mp' }


//Concatenacion de datos
let dato_1 = [1,2,3]; 
let dato_2 = ["a","b","c"];

var datos = {...dato_1, ...dato_2};
console.log("Datos", datos);

//Propiedades dinamicas (objeto dinamicos)

let id = 2;
let dato_3 = {nombre: "martin", ["rueda" + id ]: "nick"};
console.log(dato_3);

//Declaraciones de variables
const dato_4 = {nombre: "Martin", apellido: "Gauto"};

let nombre1 = dato_4.nombre;
let apellido1 = dato_4.apellido;

//Para simplificar
let {nombre, apellido} = dato_4;
console.log(nombre, apellido);


//Dato por defecto si no esta declarado
const dato_5 = {apellido3: "Gauto"};
let {nombre3= "Nelson", apellido3} = dato_5;
console.log(nombre3, apellido3);



