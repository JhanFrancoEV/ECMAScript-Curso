// flat
const array = [1,1,2,3,4, [1,3,5,6,[1,2,4]]];
console.log(array.flat(2));

// sirve para imprimir el array en forma de matriz

// flatmap
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v *2]));

// EL OUTPUT DE ESTA MUESTRA EL 1 ADEMAS DE EL RESULTADO DEL 1X2 QUE SERIA 2 Y ASI SUCESIVAMENTE 2, 2x2 = 4,...