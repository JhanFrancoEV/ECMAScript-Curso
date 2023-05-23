function nuevoUsuario(nombre, edad, pais) {
    var nombre = nombre || 'Oscar';
    var edad = edad || 31;
    var pais = pais || 'Mexico';
    console.log(nombre, edad, pais);

    // || 'valores' son los valores por defecto que se le daran a los parametros para que se ejecute
    // la funcion cuando la llamemos aun si no ha recibido valores
}
nuevoUsuario();
nuevoUsuario('Jhan', 25, 'Chile');


function nuevoAlumno(nombre = 'Jhoel', edad = 21, pais = 'Chile') {
    console.log(nombre, edad, pais);
}
nuevoAlumno();
nuevoAlumno('Micael', 20 , 'Perú');

// Esto es basicamente lo mismo de arriba solo que es mas rapido y mas amigable tambien
// se asignan los valores por defecto cuando estamos poniendo los parametros