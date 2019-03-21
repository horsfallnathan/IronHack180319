// Goal: Extract from a two dimensional array (with the same height and width), concat all the elements from the "second diagonal",
// starting from the top right corner to the bottom left corner
function concatSecondDiagonal(twoDimArray) {
    let finalString = '';

    for (let index = 0; index < twoDimArray.length; index++) {
        const nestedArr = twoDimArray[index];
        const char = nestedArr[nestedArr.length - 1 - index];
        finalString += char;
    }
    return finalString;
}

console.log(
    concatSecondDiagonal([
        ['a', 'z', 'x', 'C', 'v', 'B'],
        ['t', 'w', 'I', 'p', 'e', '7'],
        ['w', 'y', 'o', 'r', 'm', 'x'],
        ['q', 'U', 'l', 's', 'k', 'H'],
        ['A', 'i', 'G', 'Y', 'h', 'L'],
        ['n', 'f', 'd', 'W', 'z', 'a']
    ])
);
// ==> "Berlin"
