import Character from '../Character'

export class Daemon extends Character {
    constructor(level, type){
        super(level, type)
        this.attack = 10
        this.defence = 10
        this.type = 'daemon'
    }
}