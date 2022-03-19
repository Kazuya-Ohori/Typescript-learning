// Union型
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
// number
var combinedAges = combine(30, 26);
console.log(combinedAges);
// string
var combinedNames = combine("Max", "Anna");
console.log(combinedNames);
// Literal型
function combine2(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if(resultConversion === 'as-number') {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
}
// number
var combinedAges2 = combine2(30, 26, 'as-number');
console.log(combinedAges2);
// string number
var combinedStringAges = combine2('30', '26', 'as-number');
console.log(combinedStringAges);
// string
var combinedNames2 = combine2('Max', 'Anna', 'as-text');
console.log(combinedNames2);
function combine3(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
// number
var combinedAges3 = combine3(30, 26, 'as-number');
console.log(combinedAges3);
// string number
var combinedStringAges2 = combine3('30', '26', 'as-number');
console.log(combinedStringAges2);
// string
var combinedNames3 = combine3('Max', 'Anna', 'as-text');
console.log(combinedNames3);
