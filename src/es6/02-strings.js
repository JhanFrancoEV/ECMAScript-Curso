let hello = 'hello';
let world = 'World';
let epicPhase = hello + ' ' + world + '!!'
console.log(epicPhase);
// NORMALMENTE SE CONCADENAN ASI LOS STRINGS

// TEMPLATE LITERALS
let epicPhase2 = `${hello} ${world}!!!`;
console.log(epicPhase2);
// Este te permite ahorrarte esos + ' ' + para que llegues y lo hagas con comillas francesas y ${variable}

//MULTI-LINE STRINGS
let lorem = 'Esto es un String\n ' + 'esto es otra linea';
console.log(lorem);
// PARA REALIZAR UN SALTO DE LINEA CON \n

// MULTI-LINE TEMPLATE LITERALS
let lorem2 = `Esta es una frase epica
La Continuacion abajo de esta frase es epica`;
console.log(lorem2);
// ESTA SIRVE PARA SOLO CON LAS COMILLAS FRANCESAS DAS UN SALTO DE LINEA Y SE IMPRIME DE LA MISMA FORMA EN 
// COMO LA VEMOS EN EL CODIGO