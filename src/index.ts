class Hero {
  private _name: string;
  private _life: number;
  private _power: number;
  weapon!: Weapon;

  constructor(name: string, life: number, power: number) {
    this._name = name;
    this._life = life;
    this._power = power;
  }

  getpuissanceHero(): number {
    return this._power;
  }

  setpuissanceHero(newPH: number) {
    this._power = newPH;
  }

  getnomDuHero(): string {
    return this._name;
  }

  setnomDuHero(newName: string) {
    this._name = newName;
  }

  getvieDuHero(): number {
    return this._life;
  }

  setvieDuHero(newLife: number) {
    this._life = newLife;
  }

  attack(opponent: Hero): number {
    return (this._life = this._life - opponent._power);
  }

  isAlive(): boolean {
    if (this._life > 0) {
      return true;
    } else {
      return false;
    }
  }
}

/******************************************************************************************************
 * Chapitre 2
 *
 ******************************************************************************************************/

class Weapon {
  name: string;
  damage: number;

  constructor(arme: string, damage: any) {
    this.name = arme;
    this.damage = damage;
  }
}
class HeroAxe extends Hero {
  constructor(name: string, life: number, power: number, axe: Weapon) {
    super(name, life, power);
    this.weapon = axe;
  }
  attack(opponent: Hero): number {
    if (opponent instanceof HeroAxe) {
      if (this.weapon) {
        opponent.setvieDuHero(
          opponent.getvieDuHero() -
            this.getpuissanceHero() * 2 -
            this.weapon.damage
        );
      } else {

      }
    } else {
      super.attack(opponent);
    }
    return opponent.getvieDuHero();
  }
}

class HeroSword extends Hero {
  constructor(name: string, life: number, power: number, sword: Weapon) {
    super(name, life, power);
    this.weapon = sword;
  }
  attack(opponent: Hero): number {
    if (opponent instanceof HeroSword) {
      if (this.weapon) {
        opponent.setvieDuHero(
          opponent.getvieDuHero() -
            this.getpuissanceHero() * 2 -
            this.weapon.damage
        );
      } else {

      }
    } else {
      super.attack(opponent);
    }
    return opponent.getvieDuHero();
  }
}
class HeroSpear extends Hero {
  constructor(name: string, life: number, power: number, spear: Weapon) {
    super(name, life, power);
    this.weapon = spear;
  }
  attack(opponent: Hero): number {
    if (opponent instanceof HeroSpear) {
      if (this.weapon) {
        opponent.setvieDuHero(
          opponent.getvieDuHero() -
            this.getpuissanceHero() * 2 -
            this.weapon.damage
        );
      } else {
      
      }
    } else {
      super.attack(opponent);
    }
    return opponent.getvieDuHero();
  }
}

const axe = new Weapon("Axe", 10);
const Hero1 = new HeroAxe("Claire", 300, 35, axe);

const sword = new Weapon("Sword", 5);
const Hero2 = new HeroSword("Leon", 200, 22, sword);

const spear = new Weapon("Spear", 8);
const Hero3 = new HeroSpear("Bill", 250, 25, spear);

function Baston(Combattant1: Hero, Combattant2: Hero): void {
  let i = 0;
  while (Combattant1.isAlive() && Combattant2.isAlive()) {
    console.log("round" , i);
    Combattant1.attack(Combattant2);
    Combattant2.attack(Combattant1);
    i++;
    console.log(Combattant1.getvieDuHero(), Combattant2.getvieDuHero());
    if (!Combattant1.isAlive() && !Combattant2.isAlive()) {
      console.log(`Vous avez Perdu bande de nazes !`);
    } else if (!Combattant1.isAlive()) {
      console.log(`${Combattant2.getnomDuHero()} à remporté la victoire !`);
    } else if (!Combattant2.isAlive()) {
      console.log(`${Combattant1.getnomDuHero()} à remporté la victoire !`);
    }
    
  }
}
Baston(Hero3, Hero1);    
