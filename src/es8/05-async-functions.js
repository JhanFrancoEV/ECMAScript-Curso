const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve ("AsynC!!este seria el if (true)"), 2000)   //este seria como una condicional IF
        : reject(new Error("Error este seria else"));                   //Y este seria el else
    });
}

const anotherFn = async () => {
    const somethig = await fnAsync();
    console.log(somethig);
    console.log("Hello");
}
// SE MUESTRA ESTE BLOQUE PRIMERO PORQUE LA FUNCION ESTA ESPERANDO LA PROMESA
console.log("before"); 
anotherFn();
console.log("After");