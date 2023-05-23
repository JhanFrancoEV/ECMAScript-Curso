const otrasFunciones = () => {
    return new Promise((resolve, reject)=>{
        if (true) {
            resolve('hey!!');
        }
        else{
            reject('tamare');
        }
    })
}

otrasFunciones()
    .then(Response => console.log(Response))
    .then()
    .catch(err => console.log(err));

// BASICAMENTE SIRVE PARA SABER SI ALGO SE VA A EJECUTAR AHORA MAS RATO O NUNCA