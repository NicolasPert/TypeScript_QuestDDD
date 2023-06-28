# Consignes

Tu vas devoir trouver les informations suivantes et les tester au fur et à mesure dans ton programme pour expérimenter et comprendre comment TypeScript pourra t'aider à écrire ton meilleur code !

## Level 1

- Quels sont les différents type primitives de données en TypeScript ?
  "Les primitives: string , number , et boolean"
  Le JavaScript possède trois primitives très communes : string , number , et boolean . Chacune d'entre elles a un type correspondant en TypeScript."
- Comment typer un tableau ?
  avec la primitives + []
- Quel est le type `any` ?
  sert a typer une variable dont on ne peut pas determiner son type

- Comment typer le retour d'une fonction ainsi que le type de ses paramètres ?

Vous pouvez spécifier le type de retour d'une fonction en ajoutant : type après la liste des paramètres. Voici un exemple :

```
function add(a: number, b: number): number {
  return a + b;
}
```

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Level 2

La visibilité des propriétés d'une classe définit l'accès et la portée de ces propriétés depuis d'autres parties du code. En TypeScript, il existe trois types de visibilité pour les propriétés d'une classe : public, private et protected.  
-Public c'est le niveau de visibilité par défaut. Les propriétés sont accèssible à partir de n'importe quelle partie du code.
-private : Les propriétés marquées comme private ne sont accessibles qu'à l'intérieur de la classe où elles sont déclarées. Elles ne peuvent pas être accédées ou modifiées en dehors de la classe.  
-protected : Les propriétés marquées comme protected sont similaires aux propriétés private, mais elles sont également accessibles dans les classes dérivées (sous-classes). Elles ne peuvent pas être accédées en dehors de la classe ou des classes dérivées.

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Level 3

- Comment faire pour diviser notre programme en différents fichiers ? (ex: une classe dans un fichier que j'importe dans un autre)
  le principe de diviser est celui de créer des fichiers de class séparé comportant la même famille.
  ex : un fichier Hero ou dedans j'aurais toutes mes classes de heros, un autre avec les armes de ces héros.

- Qu'est ce que l'héritage ?
  l'héritage est la liaison d'un classe dites parents sur une class dites enfant ex:
  on a une classe animal qui est la class parent et on aura la class chien qui sera la classe enfant.

- Comment appeler le constructeur d'une classe mère ?
  Pour appeler le constructeur d'une classe on utilise "super" suivi de sa propriété dans la classe parent.

- Comment appeler une méthode d'une classe mère ?

Pour appeler le constructeur d'une classe parent (classe mère) à partir d'une classe enfant (classe dérivée), vous pouvez utiliser le mot-clé super() dans le constructeur de la classe enfant. Cela permet d'exécuter le constructeur de la classe parent avant d'initialiser les propriétés spécifiques à la classe enfant.

- Qu'est ce que le polymorphism ?

Dans le polymorphisme dynamique, des objets de classes dérivées (enfants) peuvent être traités comme des objets de leur classe parent (ou d'une classe de base commune). Cela signifie que vous pouvez utiliser une référence de la classe parent pour accéder et manipuler des objets des classes dérivées, tout en utilisant les méthodes spécifiques à ces classes.
Ex : dans mon jeu de hero, je peut choisir entre 3 armes differentes (Axe,Sword,Spear). mon fichier hero est la classe parent et mes classes enfants inyterchangeable vont etre mes armes differentes.

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Boss level

Met en pratique le fruit de tes recherches à travers cet exercice en binôme !

### Partie 1 : Héros

La classe `Hero` permet de créer des objets possédant les propriétés suivantes :

    name : string
    power : number
    life : number

​Et les méthodes

    attack(opponent: Hero)
    isAlive()

​La méthode `attack` a un paramètre `opponent` (de type `Hero`). Il faut réduire le nombre (`life`) de `opponent` d'autant de dégats (`power`) de l'attaquant.

​
_Exemple : Si Joan attaque Leon, cela sera représenté par :_

    joan.attack(leon)

​La méthode `isAlive` devrait retourner `true` si le nombre de points de vie du héros est supérieur à zéro et `false` sinon.

Crée deux instances de `Hero` et vérifie que les méthodes `attack` et `isAlive` fonctionnent.

**Contrainte à ajouter** : il faut maintenant faire en sorte que les propriétés `name`, `power`, `life` soient privées. Tu vas devoir créer des méthodes permettant d'accéder à leur valeur et de modifier leur valeur.

### Partie 2 : Armes

​
Crée une classe `Weapon` avec la propriété suivante :

    name : string

Ajoute l'attribut `weapon` (de type `Weapon`) à la classe `Hero` sans modifier le constructeur (ainsi `weapon` n'est pas initialisé).

Crée trois classes `HeroAxe`, `HeroSword` et `HeroSpear` qui héritent de `Hero`.

Ces trois classes appellent le constructeur de leur parent et initialisent `weapon` avec des instances de la classe `Weapon` dont les noms seront `axe`, `sword` ou `spear` selon le cas.

Dans les classes `HeroAxe`, `HeroSword` et `HeroSpear`, redéfinisse la méthode `attack` pour prendre en compte les cas suivants :

- `HeroAxe` : si le type de `opponent` est `HeroSword`, multiplier `power` par deux
- `HeroSword` : si le type de `opponent` est `HeroSpear`, multiplier `power` par deux
- `HeroSpear` : si le type de `opponent` est `HeroAxe`, multiplier `power` par deux

​
Astuce : utilise le mot-clé `super` pour appeler la méthode `attack` de la classe parente.

Crée des instances des trois classes `HeroAxe`, `HeroSword` et `HeroSpear` et vérifie que leurs méthodes `attack` fonctionnent correctement.
​

### Partie 3 : Bataille

Crée une boucle qui fait que deux instances de sous-classes `Hero` s'affrontent (elles attaquent en même temps).

Quand au moins l'une d'entre elles est morte, afficher `{heroName} wins`. Si les deux sont morts, afficher `It's a draw`.

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

---

**_Bonus 1 : Les dégâts de l'arme_**

_Ajoute une propriété `damage` à la classe `Weapon` et fait en sorte qu'elle soit initialisée par le constructeur._

_Modifie la méthode `attack` de `Hero` afin que les dégâts soient calculés de la façon suivante : la puissance du héro `power` + les dégâts de l'arme `power`_

**_Bonus 2 : Interface graphique_**

_Réalise une interface graphique pour l'application (par exemple, avec un choix de héros et d'armes, et un visuel sur les dégâts infligés)_
