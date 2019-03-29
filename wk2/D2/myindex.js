// const animals = [
//     {
//         feathers: true,
//         mammal: false,
//         size: 100,
//         name: 'flamingo',
//         sound: 'croak',
//         makeSound,
//         reproduce,
//         survivalRate: 0.7,
//         offspring: 2
//     },
//     {
//         feathers: false,
//         mammal: true,
//         size: 250,
//         name: 'mr. dolphin',
//         sound: 'iiiiiii',
//         makeSound,
//         reproduce,
//         survivalRate: 0.4,
//         offspring: 2
//     },
//     {
//         feathers: false,
//         mammal: true,
//         size: 20,
//         name: 'Lana',
//         sound: 'wuff',
//         makeSound,
//         reproduce,
//         survivalRate: 0.9,
//         offspring: 2
//     },
//     {
//         feathers: true,
//         mammal: false,
//         size: 15000,
//         name: 'Reminator (T-Rex)',
//         sound: 'mim',
//         makeSound,
//         reproduce,
//         survivalRate: 0.2,
//         offspring: 2
//     }
// ];

// function displayAnimalProps(animalArray, propToDisplay) {
//     animalArray.forEach(animal => {
//         console.log(animal[propToDisplay]);
//     });
// }

// displayAnimalProps(animals, 'name');

// // function displayAnimalProps(animals, propToDisplay) {
// //     let a = animals.forEach((el1) {
// //         return element.propToDisplay;
// //     });
// //     return a;
// // }

// function makeSound() {
//     console.log(`I'm ${this.name} and I'm ${this.size / 2}m big`);
//     console.log(`${this.sound}${this.sound}`);
//     console.log('');
// }
// makeSound.call(animals[0]);
// makeSound.call(animals[1]);
// makeSound.call(animals[2]);
// makeSound.call(animals[3]);

// // let egg =

// // let baby =

// function reproduce(animalArr) {
//     animalArr.forEach(animal => {
//         if (this.mammal) {
//             console.log('egg');
//         } else {
//             console.log(`%c ________________________________________
// < mooooooooooooooooooooooooooooooooooooo >
//  ----------------------------------------
//         \\   ^__^
//          \\  (oo)\\_______
//             (__)\\       )\\/\\
//                 ||----w |
//                 ||     ||`);
//         }
//     });
// }
// reproduce(animals);
// /*
// 1. Create a variable offspring with a default value (outside)
// 2. Assign that value to the animal objects with the shorthand property notation.
// 3. Assign a property survival rate to each animal
// 4. On calling animal.reproduce() create a random number and check if the new offspring survives.
// 5. If the offspring doesnt survive, display a message
// 6. Increase the offspring count and.offspring

// */
// function offSpring(animals) {
//     animals.forEach(animal => {
//         animal['offspring'] = 4;
//         // console.log(animals)
//     });
// }
// offSpring(animals);

// // function randomSurvival() {
// //   let num = Math.random().toFixed(1)
// //   return num
// // }
// // randomSurvival()

// function checkSurvival(animals) {
//     animals.forEach(el => {
//         let num = Math.random().toFixed(1);
//         console.log(num);
//         if (el.survivalRate <= num) {
//             console.log(`unfortunately ${el.name}'s offspring doesnt survive'`);
//         } else {
//             console.log(`hurray ${el.name}'s offspring survives'`);
//             el.offspring += 1;
//             console.log('off-spring ' + el.offspring);
//         }
//     });
// }
// checkSurvival(animals);

// // Classes and Constructors

// //1
// class Building {
//     constructor() {
//         this.type = 'hut';
//         this.height = 150;
//         this.color = 'brown';
//     }
// }

// const firstBuilding = new Building();
// const secondBuilding = new Building();
// secondBuilding.color = 'green';

// firstBuilding.color = 'white';
// console.log('firstBuilding', firstBuilding, 'secondBuilding', secondBuilding);
// console.log(firstBuilding.height);

// // 2: This
// class Building {
//     constructor(color) {
//         this.type = 'hut';
//         this.height = 150;
//         if (color) {
//             this.color = color;
//         } else {
//             this.color = 'brown';
//         }
//     }
// }

// 1;
// const firstBuilding = new Building();
// const secondBuilding = new Building();
// secondBuilding.color = 'green';

// firstBuilding.color = 'white';
// console.log('firstBuilding', firstBuilding, 'secondBuilding', secondBuilding);
// console.log(firstBuilding.height);

let seconds = 10;
// setInterval(function(){
//   forEach
// })

setInterval(function() {
    let place = document.createElement('h1');
    for (let i = 10; i >= seconds; i--) {
        place.innerHTML = i;
        document.body.appendChild(place);
    }
}, 10);
