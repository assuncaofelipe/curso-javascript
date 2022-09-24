class celular {
    constructor(){
            this.cor = 'prata';
    } 
    ligar(){
        console.log('uma ligação');
        return 'ligando';
    }
}

let obj = new celular();
console.log(obj);
console.log(obj.ligar);