!function(){"use strict";class e{constructor(e,s){if(!("string"==typeof e&&e.length>=2&&e.length<=10))throw new Error("Имя должно быть строкой и содержать от 2х до 10 символов");if(this.name=e,"string"!=typeof s||"Bowerman"!==s&&"Swordsman"!==s&&"Magician"!==s&&"Daemon"!==s&&"Undead"!==s&&"Zombie"!==s)throw new Error("Тип героя должен быть: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie");this.type=s,this.health=100,this.level=1}levelUp(){if(0===this.health)throw new Error("нельзя повысить левел умершего");this.level+=1,this.health=100,this.attack*=1.2,this.defense*=1.2}damage(e){if(!(this.health>0))throw new Error("Персонаж мёртв");if(this.health-=e*(1-this.defense/100),this.health<=0)throw new Error("Персонаж мёртв")}}const s=new e("Mike","Zombie");console.log(s);class o extends e{constructor(e,s){super(e,s),this.attack=25,this.defense=25}}const t=new o("Sergey","Bowerman");console.log(t);const n=new e("Petya","Daemon");console.log(n);const l=new o("Sasha","Bowerman");console.log(l);const a=new class extends e{constructor(e,s){super(e,s),this.attack=10,this.defense=40}}("Dima","Daemon");console.log(a);const c=new class extends e{constructor(e,s){super(e,s),this.attack=10,this.defense=40}}("Lesya","Magician");console.log(c);const r=new class extends e{constructor(e,s){super(e,s),this.attack=40,this.defense=10}}("Masha","Swordsman");console.log(r);const h=new class extends e{constructor(e,s){super(e,s),this.attack=25,this.defense=25}}("Kolya","Undead");console.log(h);const i=new class extends e{constructor(e,s){super(e,s),this.attack=40,this.defense=10}}("Andrey","Zombie");console.log(i),l.levelUp(),console.log(l),r.levelUp(),console.log(r),c.levelUp(),console.log(c),h.levelUp(),console.log(h),i.levelUp(),console.log(i),a.levelUp(),console.log(a),l.damage(10),console.log(l)}();