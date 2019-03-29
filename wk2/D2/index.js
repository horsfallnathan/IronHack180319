const animals = [
    {
        feathers: true,
        mammal: false,
        size: 100,
        name: 'flamingo',
        sound: 'croak'
    },
    {
        feathers: false,
        mammal: true,
        size: 250,
        name: 'mr. dolphin',
        sound: 'iiiiiii'
    },
    {
        feathers: false,
        mammal: true,
        size: 20,
        name: 'Lana',
        sound: 'wuff'
    },
    {
        feathers: true,
        mammal: false,
        size: 15000,
        name: 'Reminator (T-Rex)',
        sound: 'mim'
    }
];

function displayAnimalProps(animalArray, propToDisplay) {
    animalArray.forEach(animal => {
        console.log(animal[propToDisplay]);
    });
}

displayAnimalProps(animals, 'name');

// function displayAnimalProps(animals, propToDisplay) {
//     let a = animals.forEach((el1) {
//         return element.propToDisplay;
//     });
//     return a;
// }

function makeSound() {
    console.log(`I'm ${this.name} and I'm ${this.size / 2}m big`);
    console.log(`${this.sound}${this.sound}`);
    console.log('');
}
makeSound.call(animals[0]);
makeSound.call(animals[1]);
makeSound.call(animals[2]);
makeSound.call(animals[3]);

// function reproduce(animalArr) {
//     if ()
// }
