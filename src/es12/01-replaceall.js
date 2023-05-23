
const stringNormal = "JavaScript es un maravilloso lenguaje de  programacion";

const replacedString = stringNormal.replace("JavaScript", "TypeScript");

const stringConPersona = "Hola Oscar, ¿Como ha estado tu día?";
let persona = {nombre: 'Jhan'};

const replacedPersona = stringConPersona.replace("Oscar", `${persona.nombre}`);

console.log(replacedString);
console.log(replacedPersona);

// SIRVE PARA REEMPLAZAR PARTES DE LA CADENA DE TEXTO

// ALGO MALO DE REPLACE QUE SOLO CAMBIABA LA PRIMERA COINCIDENCIA QUE ENCONTRABA Y SOLO ESA CAMBIABA
// AHORA TAMBIEN EXISTE .replaceAll()
