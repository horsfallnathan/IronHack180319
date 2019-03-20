let myFunc = function(name,age,drink){
  console.log(`your name is ${name}, and you are ${age} years old, you like drinking ${drink}`)
}

let tvPrice = priceFunct(999, 30, 19, function(){
  console.log('Are we done yet?')
});
let suitcasePrice = priceFunct(249, 10, 0);

let priceFunct = function(price, discount, vat, callback) {
  console.log('start calculating')
  actualDiscount = (discount/100)*price;
  discountedPrice = price - actualDiscount;

  actualVat = (vat/100)*discountedPrice;
  finalPrice = (price - actualDiscount + actualVat);
  console.log('Finished calculating')
  if (callback) callback()
  return finalPrice
}


tvPrice = tvPrice.toFixed(2)
suitcasePrice = suitcasePrice.toFixed(2)

console.log(`tvPrice: ${tvPrice}`)
console.log(`suitcasePrice: ${suitcasePrice}`)

myFunc('Nathan',24,'Henny')

setInterval(function(){
  console.log('Hello World')
  },3000)

/// If you have a nested '!' in multiple arrays you can retrieve it by recurssion, shown below:
function extractEx(arr) {
  if (arr === '!') return arr // if the value is an exclamation mark return the value, if not return the 
  else return extractEx(arr[0])
}