class user {
    // constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
    // metodos
    #speak(){
        return 'hello';
    }
    greeting(){
        return`${this.speak()} ${this.name}`
    }

    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.age = n;
    }
        // PONIENDOLE EL GATO AL COMIENZO DEL METODO HACEMOS QUE EL METODO SEA PRIVADO, Y SOLO PUEDA SER LLAMADO
        // DENTRO DE LA MISMA CLASE
}

const bebeloper = new user ('david', 15);
console.log(bebeloper.uAge);
console.log(bebeloper. uAge = 20);