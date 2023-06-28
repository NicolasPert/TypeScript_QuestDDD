import {damage} from "./damage";



export class Jeanne {
  name : string;
  power : number;
  life : number;

constructeur (name : string, power : number, life : number) {
  this.name = name;
  this.power= power;
  life.life = life;
}

 touché() : number {
  console.log(`Vous avez été touché de ${this.dégats-this.life}`);
  return `vous avez perdu ${this.dégats} point de vie`;
 }

}