try {
    hello ();
} catch (error) {
    console.log(error);
}
// EN ESTE EL CATCH TE ARROJA EL ERROR COMO CONSOLA SIEMPRE , SIRVE PARA PODER MANEJARLO Y SABER DONDE ESTA 

try {
    onotherFn();
} catch {
    console.log("esto es un error")
}

// ESTE CATCH CON EL ERROR PERSONALIZADO NO ES MUY RECOMENDABLE YA QUE SOLO TE DIRA LO QUE PUSISTE EN EL LOG