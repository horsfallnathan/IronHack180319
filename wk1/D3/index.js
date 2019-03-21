const myObj = {
    age: 25,
    name: 'hacker1',
    location: 'really?',
    hobbies: [{title: 'gym', days: ['Mon']},{title: 'motorcycle'}],
    cities: { lived: ['Freiburg','Stuttgart'], current: [Berlin]}
};

console.log(myObj);
console.log(myObj.name);


console.log(myObj.notThere); // when you try to access something not there --> you get undefined

// To check if an object has a property,
console.log(myObj.hasOwnProperty('notThere')); //A boolean which checks if the object contains that property

// This returns all the keys in the object
console.log(Object.keys(myObj))

// To check if an object has a property, using the function described above
console.log(Object.keys(myObj).includes('notThere'))

// To get the all the keys in the object
for(let key in myObj) {
    console.log(key)
}

// To get the values for all the keys in the object
for(let key in myObj) {
    console.log(myObj[key])
}

// Create a prompt and return the value of the key(which hopefully the user has asked us)
const interest = prompt('Just ask something')
console.log(myObj[interest])

// Shadow Map

let a = { students: ['Julia','Theresa']}