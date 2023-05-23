const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./module-ej-dynamic.js");
    console.log(module);
    module.hello();
});

// SIRVE BASICAMENTE PARA QUE TU PAGINA WEB AL MOMENTO DE SER ABIERTA NO SE DEMORE TANTO EN CARGAR
// AL IMPORTAR LOS MODULOS SOLO SE CARGAN CUANDO EXISTE UN EVENTO EN ESTE CASO UNO DE CLICK