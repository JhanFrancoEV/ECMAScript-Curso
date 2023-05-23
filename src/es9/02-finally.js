const anotherFuncion = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("hey!!");
        } else {
            reject ( "whooooops!");
        }
    })
}

anotherFuncion()
.then(response => console.log(response))
.catch(err => console.log(err))
.finally(() => console.log("finally")); //ES IGUAL AL PROMISE SOLO QUE SE LE AGREGA EL FINALLY QUE LO QUE HACE ES
// QUE IMPRIMA ALGO AL TERMINAR LA FUNCION COMO POR EJEMPLO ESE FINALLY