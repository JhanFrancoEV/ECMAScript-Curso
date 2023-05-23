import fetch from "node-fetch";

const response = await fetch("https://api.escuelajs.co/api/v1/products");
const products = await response.json();

export { products };

// SIRVE PARA LLAMAR LOS PRODUCTOS DE LA API, EL AWAIT ESPERA QUE SE HAYA RECIBIDO LOS ELEMENTOS SE HAYA 
// TRANSFORMADO EN OBJETO Y QUE RECIEN SE ENTREGUEN