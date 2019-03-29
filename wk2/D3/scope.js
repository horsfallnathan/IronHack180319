let a = 5;

// functions can also be called like this (use this just for testing)
(function() {
    let a = 6; //  inside the function the local variable overwrites the global variable
    console.log(a);
})();

console.log(a);
