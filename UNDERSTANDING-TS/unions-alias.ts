// Union型
function combine(input1: number | string, input2: number | string) {
  let result;
  if(typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

// number
const combinedAges = combine(30, 26);
console.log(combinedAges);

// string
const combinedNames = combine("Max", "Anna");
console.log(combinedNames);

// Literal型
function combine2(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text'
) {
  let result;
  if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
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
const combinedAges2 = combine2(30, 26, 'as-number');
console.log(combinedAges2);
// string number
const combinedStringAges = combine2('30', '26', 'as-number');
console.log(combinedStringAges);
// string
const combinedNames2 = combine2('Max', 'Anna', 'as-text');
console.log(combinedNames2);

// Alias型
type Combinable = number | string;
type ConversionDescripter = 'as-number' | 'as-text';

function combine3(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescripter
) {
  let result;
  if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
// number
const combinedAges3 = combine3(30, 26, 'as-number');
console.log(combinedAges3);
// string number
const combinedStringAges2 = combine3('30', '26', 'as-number');
console.log(combinedStringAges2);
// string
const combinedNames3 = combine3('Max', 'Anna', 'as-text');
console.log(combinedNames3);
