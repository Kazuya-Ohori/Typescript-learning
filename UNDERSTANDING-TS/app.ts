// Unknown型　型がわからない時、anyだと全くチェックされないのでこちらの方がベター
let userInput: unknown;
let userName: string;

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
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

// generateError("エラーが発生しました。", 500);

const result = generateError("エラーが発生しました。", 500);
console.log(result);
