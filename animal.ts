interface Type {
    typeName: string;
    biome: string;
    reservoir: boolean;
    requiredArea: number;
    mealType: string;
    type: "predator" | "herbivore";
  }

interface Animal extends Type {
    name: string;
    age: number;
    amountOfFood: number;
 }

interface Settlement {
    animals:Animal[],
    biome: string;
    reservoir: boolean;
    space: number;
    animalType:  "predator" | "herbivore";
}

let wolf : Animal={
    name: 'Coni',
    age: 10,
    amountOfFood: 15,
    typeName: 'wolf',
    biome: 'forest',
    reservoir: false,
    requiredArea: 15,
    mealType: 'meat',
    type: 'predator'
}

let wolfCage: Settlement={
    animals:[],
    biome: 'forest',
    reservoir: false,
    space: 100,
    animalType: 'predator'
}

function selectedAnimal (X:Animal,Y:Settlement){
    if(X.type===Y.animalType && X.biome===Y.biome && X.reservoir===Y.reservoir&& X.requiredArea<=Y.space){
        Y.animals.push(X);
        console.log('the animal will be live in this cage');
    }   else{
        console.log("the animal willn't live in this cage");
    }
    console.log(Y.animals);
}
selectedAnimal(wolf, wolfCage)