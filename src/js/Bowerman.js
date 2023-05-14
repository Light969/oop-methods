import Character from './Character.js';

export default class Bowerman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defense = 25;
  }
}

const bowerman = new Bowerman('Sergey', 'Bowerman');
console.log(bowerman);
