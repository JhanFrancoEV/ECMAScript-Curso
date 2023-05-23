var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);
// SE PUEDE REASIGNAR SIEMPRE

let fruit = 'apple';
fruit = 'orange';
console.log(fruit);
// NO HAY PROBLEMAS DE REASIGNAR A UN LET EN EL MISMO SCOPE


const animal = 'perro';
animal = 'gato';
console.log(animal);
// NO SE PUEDE REASIGNAR UNA CONSTANTE

const fruits = () => {
    if (true) {
        var fruit1 = 'Manzana';     //FUNCTION SCOPE   EL VAR FUNCIONA SIN PROBLEMAS
        let fruit2 = 'Pera';        // BLOCK SCOPE No lee la let porque existe solo dentro del scope fruits
        const fruit3 = 'Naranja';   // BLOCK SCOPE No lee la const porque existe slo dentro del scope fruits
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();

