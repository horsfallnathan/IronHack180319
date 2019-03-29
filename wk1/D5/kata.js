// Function that logs a string

function logFunc(str) {
    console.log(str);
}

// Function that takes in a number, n and outputs n*2

function mult2Func(n) {
    console.log(n * 2);
}

mult2Func(2);

// Function that takes in two numbers, one base and one exponent and returns the exponentiation

function expFunc(n, e) {
    console.log(n ** e);
}

expFunc(5, 3);

// Function that takes in an array and logs every element
// method 1

function strFunc(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
strFunc(['A', 'B', 'V']);

// method 2

function str2Func(array) {
    array.forEach(element => {
        console.log(element);
    });
}
str2Func(['A', 'B', 'V']);

// Function that takes in an array of characters and returns a string of those characters

// function playFunc(array) {
//     let a = array.join('');
//     a = a.toLowerCase();
//     let b = [];
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] % 2 === 0) {
//             b.push(a[i].toUpperCase());
//         } else {
//             b.push(a[i]);
//         }
//     }
//     console.log(b);
// }
// playFunc(['B', 'e', 'R', 'L', 'i', 'N']);

// method

// function arr2Str(array) {
//     return array.map((el, i) => (i % 2 === 0 ? el.toUpperCase() : el.toLowerCase())).join('');
// }

// console.log(arr2Str(['B', 'e', 'R', 'L', 'i', 'N']));

// // A function that takes 1 array of strings and returns the sum of the strings lengths added to the array length

// function sumLengths(array) {
//     return array.reduce((acc, value) => acc + value.length, arr.length);
// }

// console.log();

// function listOfNumbers(n) {
//     let a = [];
//     for (let i = 1; i < n.length; i++) {
//         a.push(i);
//     }
//     return a;
// }
// console.log('question 1:', listOfNumbers(5));

// // For the number n, the function returns an array of numbers from n until 1
// function reversedListOfNumbers(n) {
//     return n.reverse();
// }
// console.log('question 2:', reversedListOfNumbers(5) == [5, 4, 3, 2, 1]);

let n = 5;
for (let i = 1; i < n.length; i++) {
    console.log(i);
}
// question 0

// If number n is odd return the string “odd”, otherwise return “even”.
function evenOrOdd(n) {
    if (n % 2 === 0) {
        return 'even';
    } else {
        return 'false';
    }
}
console.log('question 0:', evenOrOdd(5) == 'odd');

// question 1

// For the number n, the function returns an array of numbers until n
function listOfNumbers(n) {
    let a = [];
    for (let i = 1; i < n + 1; i++) {
        a.push(i);
    }
    return a;
}
console.log('question 1:', listOfNumbers(5));
// == [1, 2, 3, 4, 5])

// question 2

// For the number n, the function returns an array of numbers from n until 1
function reversedListOfNumbers(n) {
    let b = [];
    let b2 = [];
    for (let i = 1; i < n + 1; i++) {
        b.push(i);
    }
    b2.push(b.reverse());
    return b2[0];
}
console.log('question 2:', reversedListOfNumbers(5));
// == [5, 4, 3, 2, 1])

// question 3
//
// This function is like the function in question 1, except you double the numbers
function doubleTheNumbers(n) {
    let a = [];
    for (let i = 1; i < n + 1; i++) {
        a.push(i * 2);
    }
    return a;
}
console.log('question 3:', doubleTheNumbers(5));
// == [2, 4, 6, 8, 10])

// question 4

// This function sums the numbers in the array if they are positive
// For example, for the input [5, 5, -700, 5] positiveSum outputs: 15
function positiveSum(arr) {
    for (let i = 0; i < arr.length; i++) {
        let a = 0;
        if (arr[i] > 0) {
            a += arr[i];
        }
        return a;
    }
}
console.log('question 4:', positiveSum([5, 5, -700, 5]));
// == 15)

// question 5

// The function returns the first four items in the parameter
function firstFourItems(arr) {
    return arr.splice(0, 4);
}
console.log(
    'question 5:',
    firstFourItems(['So What', 'Freddie Freeloader', 'Blue in Green', 'All Blues', 'Flamenco Sketches'])
);
// == ["So What", "Freddie Freeloader", "Blue in Green", "All Blues"])

// question 6

// The function removes the nth item from an array
function removeNthItem(arr, n) {
    arr.pop(n);
    return arr;
}
console.log(
    'question 6:',
    removeNthItem(['The Rolling Stones', 'The Stone Roses', 'The Spice Girls', 'Radiohead'], 2)
);
// == ["The Rolling Stones", "The Stone Roses", "Radiohead"])

// question 7

// Makes every item in the array lowercase
function lowercaseAllItems(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].toLowerCase(''));
    }
    return newArr;
}
console.log('question 7:', lowercaseAllItems(['Building', 'Steam', 'With', 'A', 'Grain', 'Of', 'Salt']));
// == ["building", "steam", "with", "a", "grain", "of", "salt"])

// question 8

// Makes some really annoying capitalisation.
// See the example
function badCapitalisation(str) {
    // YOUR CODE HERE
}
console.log('question 8:', badCapitalisation('Pink Floyd'));
// == "pInK FlOyD")

// question 9
//
// Returns every third item in the array, starting from the 0th.
function everyThirdItem(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 3) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(
    'question 9:',
    everyThirdItem([
        'Whether',
        'Tis',
        'Nobler',
        'In',
        'The',
        'Mind',
        'To',
        'Suffer',
        'The',
        'Slings',
        'And',
        'Arrows',
        'Of',
        'Outrageous',
        'Fortune'
    ])
);
// == ["Whether", "In", "To", "Slings", "Of"])
