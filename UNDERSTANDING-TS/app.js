function add(n1, n2) {
    return n1 + n2;
}
// 何も返さない関数のためvoid型となる
// ※TSが推論してくれるので実際に明示的に書く必要はない
function printResult(num) {
    console.log('Result: ' + num);
}
// let combineValues;　型を指定しないとnumberが入れてしまえる
// let combineValues: Function;　Functionの型指定だけだと違う関数も代入できてしまう。
var combineValues;
combineValues = add;
// combineValues = printResult; // 関数の型を指定したのでエラーとなる。
// combineValues = 5; // 型を指定しないとnumberが入れてしまえる
console.log(combineValues(5, 10));
printResult(add(5, 11));
// Callbackのパターン
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
