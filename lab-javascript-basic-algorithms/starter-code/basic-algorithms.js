// Names and Input

let hacker1 = "Antoni"
console.log(`The driver's name is ${hacker1}.`)

let hacker2 = "Nathan"
console.log(`The navigator's name is ${hacker2}.`)

//Conditionals

let hack1Length = hacker1.length
let hack2Length = hacker2.length

if(hack1Length > hack2Length) {
  console.log(`The Driver has the longest name, it has ${hack1Length} characters`)
}
  else if(hack2Length > hack1Length) {
  console.log(`Yo, the navigator goes first definitely`)
}
  else {
  console.log(`Wow, you both got equally long names, ${hack1Length} characters!!`)
  }


// Loops 

let hacker1Upper = hacker1.toUpperCase()
 console.log(hacker1Upper.split("").join(" "))

let hacker2Reverse = hacker2.split("").reverse().join("")
console.log(hacker2Reverse)

let hackers = [hacker1, hacker2]
hackers = (hackers.sort())
console.log(hackers)

if(hacker1 === hacker2) {
  console.log("What?! You both got the same name?")
}
else if(hackers[0] === hacker1) {
  console.log("The driver's name goes first")
}
else if(hackers[0] === hacker2) {
  console.log("Yo, the navigator goes first definitely")
}
// Bonus

// Palindrome

let input = "kay,ak".replace(/(?!\w|\s)./g, '')
let inputReverse = input.replace(/(?!\w|\s)./g, '').split('').reverse().join("")
console.log(inputReverse)
if (input === inputReverse) {
  console.log("Palin!")
}
else {
  console.log("No Palin!")
}

// Lorem ipsum generator

let loremStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar neque at nisi gravida tempus. Cras ipsum massa, sodales in porttitor nec, imperdiet nec urna. Sed volutpat dui lacinia dui ultricies, at pellentesque lectus posuere. Pellentesque vel ligula mollis, ornare nulla vitae, molestie ex. Aliquam justo eros, vestibulum id diam at, molestie ultricies arcu. Sed sed metus porttitor, rutrum arcu ac, venenatis lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce faucibus gravida nulla, sagittis fringilla tellus scelerisque sed. Suspendisse eu massa ligula. Phasellus consectetur quam dui, ut pretium felis malesuada non. Vestibulum sed ligula ultricies, facilisis neque dictum, consectetur ex. Donec molestie, nulla eu fermentum venenatis, ex enim tempor ante, ut porta urna arcu eu diam. Quisque vel iaculis ex. Sed venenatis, enim sit amet accumsan pharetra, metus ex consectetur nibh, in pulvinar nisl velit vel ipsum. Quisque pellentesque efficitur orci, in vehicula quam aliquet sed. Aenean suscipit fringilla velit in maximus. Mauris faucibus condimentum accumsan. Fusce ut facilisis libero. Aenean sit amet bibendum nisi. Fusce rutrum nibh in turpis sollicitudin condimentum. Duis quis velit quam. Maecenas bibendum quam orci, vitae fringilla risus luctus et. In mattis mattis pulvinar. Vestibulum tempus efficitur leo. Cras nec convallis lorem, sit amet consectetur dolor. Morbi sit amet semper ipsum, ut sodales ipsum. Donec a tortor in ligula volutpat accumsan. Curabitur porttitor at sapien vitae tempus. Curabitur eleifend interdum diam eget venenatis."

let loremArray = loremStr.split(" ")
console.log(loremArray.length)

let numOfTrue = 0
for (let i = 0; i < loremArray.length; i++) {
  if (loremArray[i].includes("et") === true)
    numOfTrue++;
}

console.log(numOfTrue)