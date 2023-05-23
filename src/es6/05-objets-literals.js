// enahced objets literals

function NuevoUsuario(usuario, edad, pais, id) {
    return{
        usuario: usuario,
        edad: edad,
        pais: pais,
        id: id
    }
}
console.log(NuevoUsuario('Jhan', 25, 'mx', 1));
// NORMALMENTE SE ASIGNA ASI

function NuevoUsuario(usuario, edad, pais, id) {
    return{
        usuario,
        edad,
        pais,
        id
    }
}
console.log(NuevoUsuario('Jhan', 25, 'mx', 1));

// PERO TAMBIEN Y MAS RAPIDO SE PUEDE HACER ASI NO ES NECESARIO REPETIRLAS