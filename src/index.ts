// let tableau: any[] = [0,"j", "2"];
// console.log(tableau);


// // DEBUT DU LEVEL 1
// // 1- En TypeScript, les types primitifs de données incluent les types suivants :

// // Exemple de string
// let message: string = 'Hello World !';
// console.log(message);

// // Exemple de number
// let nombre: number = 15;
// console.log(nombre);

// // Exemple de bolean
// let boolean: Boolean = true;
// console.log(boolean);

// // Exemple de Null
// let vide: null = null
// console.log(vide);

// // 2- Comment typer un tableau ?

// // Exemple d'un tableau de nombres
// let nombres: number[] = [1, 2, 3, 4, 5];
// console.log(nombres );

// // Exemple d'un tableau de chaînes de caractères
// let mots: string[] = ["Bonjour", "Monde"];
// console.log(mots);

// // Exemple d'un tableau mixte de nombres et de chaînes de caractères
// let mixte: (number | string)[] = [1, "deux", 3, "quatre"];
// console.log(mixte);

// // 3- le type `any` c'est quoi?
// //exemple d'utilisation du type any :
// let variable: any;

// variable = 10; // variable peut contenir un nombre
// console.log(variable);
// variable = "Bonjour"; // mais aussi une chaîne de caractères
// console.log(variable);
// variable = true; // voir même une valeur booléenne... en gros c'est un fourre tout lol
// console.log(variable);

// let variable2: any;

// variable2 = {
//   "prénom" : "Nicolas",
//   "Age" : 42,
//   "Ville" : "Pomponne"
// };
// console.log(variable2);

// // // 4- Comment typer le retour d'une fonction ainsi que le type de ses paramètres ?

// // // Typage du retour de la fonction :
// // function addition(a: number, b: number): number {
// //   return a + b;
// // }
// // console.log(addition(5,10));
// //Typage des paramètres de la fonction :
// function afficherMessage(nom: string, age: number): void {//la fonction afficherMessage prend deux paramètres : string et number. La fonction ne renvoie rien, d'où l'utilisation du type void.
//   console.log(`Bonjour, je m'appelle ${nom} et j'ai ${age} ans.`);
// }
// afficherMessage("carottes", 52);
// // FIN DU LEVEL 1

// // DEBUT DU LVL 2

// class Voiture {
//   marque: string;
//   annee: number;
//   carburant: string;
//   litres: number;

//   constructor(marque: string, annee: number, carburant: string, litres: number) {
//     this.marque = marque;
//     this.annee = annee;
//     this.carburant = carburant;
//     this.litres= litres;
//   }

//   demarrer() : void {
//     console.log(`La voiture ${this.marque}  de ${this.annee} démarre !`);
//   }

//   arreter() : void{
//     console.log(`La voiture ${this.marque} s'arrête !`);
//   }

//   panne() : void {
//     console.log(`la voiture ${this.marque} commence à caler, remettez ${this.litres} litres de ${this.carburant}`)
//   }
// }

// const maVoiture = new Voiture("Audi", 2002, "gazoil", 5);
// console.log(maVoiture.panne());

// console.log(maVoiture.marque);


// import { Jeanne } from "./hero";

class Hero {
   name: string;
   life : number;
   power : number;

  constructor(name: string, life: number, power : number) {
    this.name = name;
    this.life = life;
    this.power = power;
  }

  attack(opponent: Hero): number {
    
    return this.life = this.life-opponent.power;
    
  }

  isAlive(): boolean {
    
    return this.life > 0;
    }
}
const Hero1 = new Hero("Coco", 100000, 9570);
const Hero2= new Hero("Jeanne", 150000, 9899);
console.log(`joueur ${Hero2.name } à  ${Hero2.life} point de vie. Le joueur ${Hero1.name} a ${Hero1.life} point de vie`);
Hero2.isAlive();
console.log (`le joueur ${Hero2.name} est à ${Hero1.attack(Hero2)} point de vie`)


