// Kata One!

var x = 'Maximus';
var y = '';

// Goal: set the variable y as x, but in the reverse order, and with a capital letter only for the first letter
//Method 1
let messWithString = function(x) {
    let b = x
        .split('')
        .reverse('')
        .join('')
        .toLowerCase('');
    y = b[0].toUpperCase('') + b.substr(1); // if you want to the end, substr(1,x) you dont need to specify x
    console.log(y);
};
messWithString(x);

// Method 2
var x = 'MaxiMus';

function reverseCapStr(str) {
    let rev = '';

    for (let i = str.length - 1; i >= 0; i--) {
        if (i === str.length - 1) {
            rev += str[i].toUpperCase();
        } else {
            rev += str[i].toLowerCase();
        }
    }

    return rev;
}
reverseCapStr(x);
// Uncomment the following lines
// console.log(y); // => "Sumixam" (opposite of "Maximus")

//Kata Two!

// Level 1: Create an array with n elements, from 1 to n
// - Input: a number n (example: 5)
// - Output: an array with n elements, starting at 1 and finishing at n (example: [1,2,3,4,5])

// Method 1
function greatGrowingList(n) {
    let b = [];
    for (let i = 0; i < n; i++) {
        b.push(i + 1);
    }
    return b;
}
console.log(greatGrowingList(15));

// Level 2, Create an array with n elements, from 1 to 2**n
// - Input: a number n (example: 5)
// - Output: an array with elements, starting at 1 (=2**0) and finishing at 2**n (example: [1,2,4,8,16,32])
// Method 1
function growingPowerOf2List(n) {
    let c = [];
    for (let i = 0; i < 2 ** n; i++) {
        c.push(2 ** i);
    }
    return c;
}
console.log(growingPowerOf2List(3));

// Method 2
function growingPowerOf2List(n) {
    let arr = [];
    arr.push(1);
    greatGrowingList(n).forEach(function(num) {
        arr.push(2 ** num);
    });

    return arr;
}
