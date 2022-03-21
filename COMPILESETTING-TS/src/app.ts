// 絶対にbuttonの存在が保証されている場合のみ!を末尾につけても問題ない
const button = document.querySelector("button");

let userName = "Max"; // noUnusedLocalsでもglobal変数なのでエラーにならない
// function clickHandler(message: string, age: number) { // noUnusedParametersで使わない引数ageがエラー
function clickHandler(message: string) {
  // let userName = "Max"; // noUnusedLocalsでエラー
  console.log("Clicked " + message);
}

button?.addEventListener("click", clickHandler.bind(null, "Button!", 20));

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return undefined; // noImplicitReturns:何かを明示的に返さないとエラーになる。
}
