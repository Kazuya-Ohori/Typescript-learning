// const add = (a: number, b: number) => {
//   return a + b;
// };

const add = (a: number, b: number = 1) => a + b;

const printOutput: (output: string | number) => void = (output) => {
  console.log(output);
};

printOutput(add(20));

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
  name: "Max",
  age: 30,
};

const copiedPerson = {
  ...person,
};

console.log(copiedPerson);
