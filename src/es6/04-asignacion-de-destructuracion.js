// Arrays desestructuracion

let fruits = ['Apple', 'Orange'];
let [a , b] = fruits;
console.log(a, fruits[1]);

//Objetos desectructuracion
let usuario = {nombreUsuario: 'Oscar', edad: 34};
let {nombreUsuario, edad} = usuario;
console.log(nombreUsuario, usuario.edad);

// SIRVE PARA TRABAJAR MAS RAPIDO CON LOS ELEMENTOS DEL ARRAY O DEL OBJETO

// SPREAD OPERATOR O Operador de propagación

let persona = {nombre: 'oscar', edad: 28};
let pais = 'Mexico';

let datosPersonales = {id: 1, ...persona, pais};
console.log(datosPersonales);

// Sirve para dar valores de elementos de un objeto como por 
// ejemplo persona que tiene nombre y edad con ...persona

function suma(numero, ...valores) {
    console.log(valores);
    console.log(numero + valores[0]);
    return numero + valores[0];
}

suma(1, 1, 2, 3);

// Sirve para darle varios elementos a valores y que apartir
// de eso realice una funcion
