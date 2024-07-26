import Character from '../Character'

export class Vampire extends Character {
    constructor(level, type){
        super(level, type)
        this.attack = 25
        this.defence = 25
          this.type = 'vampire'
    }
}

const vampire = new Vampire(3)
console.log(vampire);