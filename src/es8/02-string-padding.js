const string = 'hello';

console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(10, 'hi'));

// EL padStart SIRVE PRINCIPALMENTE PARA RELLENAR LOS ESPACIOS QUE QUEDAN VACIOS
// POR EJEMPLO HELLO TIENE 5 LETRAS Y SI EN EL PARAMETRO CON NUMERO EN ESTE CASO 7 ES MAYOR A 5 LETRAS DEL HELLO
// SE RELLENARA CON EL 'hi', LAS 2 LETRAS QUE FALTAN, SI PONGO 10 EN EL PARAMETRO ME RELLENARA LAS 5 LETRAS
// hihih

// Y EL padEnd hace lo mismo pero en el final