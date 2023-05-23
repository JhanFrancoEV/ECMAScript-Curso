const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve2"));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response));

// ES MAS MENOS LA MISMA LOGICA DE allSettled (ES11 - 03) solo que cambia a ANY el allSettled
//LA DIFERENCIA SURGE ES QUE EL allSettled captura todas las promesas hayan fallado o resuelto (reject o resolve)
//Y ESTE SOLO CAPTURA EL PRIMERO QUE SE HA RESUELTO SATISFACTORIAMENTE Y LO ENTREGA