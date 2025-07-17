// criação da classe

class heroi {

    constructor (name,age,kind){

        this.name = name
        this.age = age
        this.kind = kind
        
    }
    // criação do método
    
    atacar () {

        let strike 
        if (this.kind === "guerreiro"){
            this.strike = "espada"
                
        }
        else if (this.kind === "Mago"){
            this.strike = "Magia"
            
        }
        else if (this.kind === "Monge"){
            this.strike = "Artes marciais"
            
        }
        else if (this.kind === "Ninja"){
            this.strike = "Shuriken"
        }
        else {
            strike = ""
        }
        console.log(`O ${this.name} atacou usando ${this.strike}!!!`)
    }
}
const heroi1 = new heroi("Rodox", 38, "Mago");
heroi1.atacar(); 



