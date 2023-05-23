const regex = /\b(Apple)+\b/g;

const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.";


// se lee asi quiero que haga un match de fruit. matchAll con el regex de arriba en este caso apple
for (const match of fruit.matchAll(regex)) {
    console.log(match);
}

// MATCH ALL SIRVE PARA BUSCAR TODAS LAS COINCIDENCIAS O MATCH QUE HAY EN LAS VARIABLES EN ESTE CASO APPLE