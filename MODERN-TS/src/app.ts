// const add = (a: number, b: number) => {
//   return a + b;
// };

// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (output: string | number) => void = (output) => {
//   console.log(output);
// };

// printOutput(add(20));

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => {
    console.log(event);
  });
}

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...hobbies];

// activeHobbies.push(hobbies[0], hobbies[1]); // 面倒です。
// Spread演算子
activeHobbies.push(...hobbies); // →でも書ける　const activeHobbies = ["Hiking", ...hobbies];

const person = {
  firstName: "Max",
  age: 30,
};

const copiedPerson = {
  ...person,
};

console.log(copiedPerson);

// Rest Parameter
const add = (...numbers: number[]) => {
  let result = 0;
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);

console.log(addedNumbers);

// Destructuring = 分割代入
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

// 配列の分割代入
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);
// オブジェクトの分割代入
const { firstName, age } = person;
console.log(firstName, age);
const { firstName: userName, age: userAge } = person;
console.log(userName, userAge);
