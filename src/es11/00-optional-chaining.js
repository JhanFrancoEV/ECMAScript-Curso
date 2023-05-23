const users = {
    gndx: {
        country: "MX"
    },
    ana: {
        country: "CO"
    }
}
console.log(users?.bebeloper?.country);

// ESTO SIRVE PARA QUE LA CONSOLA NO ARROJE ERROR Y LOS VALIDE DE IGUAL FORMA, COMO SI EXISTIERAN 
// ESTA PREGUNTANDO USERS EXISTE?. bebeloper EXITE?. COUNTRY DENTRO DE LA CONSTANTE USERS SIRVE PARA QUE EL FLUJO
// CONTINUE