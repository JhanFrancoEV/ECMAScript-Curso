// declarando una clase
class Usuario{};
// instanciando la clase
const nuevoUsuario = new Usuario();

// OTRO EJERCICIO

class Usuario {
    // metodos
    saludar(){
        return 'hello';
    }
};
// instancias de la clase
const jhan = new Usuario();
console.log(jhan.saludar());
const jhoel = new Usuario();
console.log(jhoel.saludar());


// OTRO EJERCICIO CONSTRUCTOR

//constructor
class Usuario {
    //Constructor
    constructor(){
        console.log('Nuevo Usuario');
    }
    saludar(){
        return 'hello';
    }
}


// OTRO EJERCICIO THIS

const david = new Usuario();

// this
class user {
    constructor(name){
        this.name = name;
    }
    // metodo
    speak(){
        return 'hello';
    }
    greeting(){
        return`${this.speak()} ${this.name}`
    }
}
const ana = new user ('Ana');
console.log(ana.greeting());



// OTRO EJERCICIO SETTER AND GETTERS 

class user {
    // constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // metodo
    speak(){
        return 'hello';
    }
    greeting(){
        return`${this.speak()} ${this.name}`
    }

    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const bebeloper = new user ('david', 15);
console.log(bebeloper.uAge);
console.log(bebeloper. uAge = 20);
