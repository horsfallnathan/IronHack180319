// const charArr = ['a', 'b', 'c'];
// charArr.forEach(function(el, i, arr) {
//     console.log(i);
//     console.log(el.toUpperCase());
//     return el.toUpperCase();
// });

const charArr2 = ['Berlin', 'Bangkok', 'Beijing'];
const Ag = charArr2.map(function(el, i, arr) {
    return el[0];
});
console.log(Ag);

numArr = [2, 4, 5];
const newNum = numArr.map(function(el, i, arr) {
    return 2 ** el;
});
console.log(newNum);

numArr = [2, 4, 5];
const newNum2 = numArr.map((el, i, arr) => 2 ** el);
console.log(newNum2);

//Find:

// let findArr = [1, 15, 27.8, 4];
// const even = findArr.find(function(el, i, arr) {
//     return el % 2 === 0;
// });
// console.log(even);

let findArr = [1, 15, 27.8, 4];
const even = findArr.find(el => el % 2 === 0);
console.log(even);

//filter
let filterArr = [1, 2, 3, 4, 5];
const evenNum = filterArr.filter(function(el, i, arr) {
    if (el % 2 === 0) {
        return true;
    }
});
console.log(evenNum);

//

const cities = [
    {
        name: 'Los Angeles',
        country: 'U.S.'
    },
    {
        name: 'Toronto',
        country: 'Canada'
    },
    {
        name: 'Montreal',
        country: 'Canada'
    },
    {
        name: 'Ciudad de Mexico',
        country: 'Mexico'
    },
    {
        name: 'Miami',
        country: 'U.S.'
    },
    {
        name: 'New York',
        country: 'U.S.'
    },
    {
        name: 'Tijuana',
        country: 'Mexico'
    },
    {
        name: 'Vancouver',
        country: 'Canada'
    }
];

const citiesCan = cities
    .filter(function(el, i, cities) {
        return el.country === 'Canada';
    })
    .map(el => {
        return el.name;
    });
// citiesCan2 = citiesCan.map(el => el.name);
console.log(citiesCan);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even1 = nums.filter(function(el, i, nums) {
    return el % 2 === 0;
});
const odd1 = nums.filter(function(el, i, nums) {
    return el % 2 !== 0;
});
console.log(even1.concat(odd1));

// Method 2

nums.sort((a, b) => {
    if (a % 2 === b % 2) return 0;
    else if (a % 2 < b % 2) return -1;
    else return 1;
});

console.log(nums);

// Tenary
/*
Syntax:
condition ? true : false
*/

const a6 = 2 > 3 ? 'yeah!' : 'nay:(';

console.log(a6);

// Reassigning the value in a key in an object in an array :)
test = [{ a: 'rioi', b: 'ghi' }, 'hehgh'];

test[0].a = 'ghu';

console.log(test);

arrayy = ['22h 45min'];
arrayy.slice(0, 'h');

console.log(arrayy);
