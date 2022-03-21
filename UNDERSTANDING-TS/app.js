// Unknown型　型がわからない時、anyだと全くチェックされないのでこちらの方がベター
var userInput;
var userName;
userInput = 5;
userInput = "Max";
//　これはエラーとなる
userName = userInput;
//　こうすればエラーにならない
if (typeof userInput === "string") {
    userName = userInput;
}
// never型 絶対に戻り値を返さないパターン
// 明示的にする事でわかりやすくなる。
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
// generateError("エラーが発生しました。", 500);
var result = generateError("エラーが発生しました。", 500);
console.log(result);
