
function* getId(array) {
    // Tu código aquí 👈
    var indice = 0;
    while (true)
      yield indice++;
  
}
  
  const id = getId(['gatito 1', 'gatito 2', 'gatito 3'])
  console.log(id.next().value);
  console.log(id.next().value);
  console.log(id.next().value);
  
  const idx = getId(['gatitomalo', 'gatitobueno', 'gatitoenojado', 'gatitofeliz'])
  id.next().value
  id.next().value
  id.next().value


  