import './css/style.css';
// import './js/app.js';
// import './js/Character.js';
import Character from './js/Character.js';

import Bowerman from './js/Bowerman.js';

import Daemon from './js/Daemon.js';

import Magician from './js/Magician.js';

import Swordsman from './js/Swordsman.js';

import Undead from './js/Undead.js';

import Zombie from './js/Zombie.js';

const person = new Character('Petya', 'Daemon');
console.log(person);
const bowerman = new Bowerman('Sasha', 'Bowerman');
console.log(bowerman);
const daemon = new Daemon('Dima', 'Daemon');
console.log(daemon);
const magician = new Magician('Lesya', 'Magician');
console.log(magician);
const swordsman = new Swordsman('Masha', 'Swordsman');
console.log(swordsman);
const undead = new Undead('Kolya', 'Undead');
console.log(undead);
const zombie = new Zombie('Andrey', 'Zombie');
console.log(zombie);

bowerman.levelUp();
console.log(bowerman);
swordsman.levelUp();
console.log(swordsman);
magician.levelUp();
console.log(magician);
undead.levelUp();
console.log(undead);
zombie.levelUp();
console.log(zombie);
daemon.levelUp();
console.log(daemon);

bowerman.damage(10);
console.log(bowerman);
