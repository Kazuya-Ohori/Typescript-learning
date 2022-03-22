/** interface
  objectの型チェックが出来る
  なぜ使うのか？
  - 共通の機能を複数のクラスで持たせることが出来る
  - 特定の構造を持つ事を強制できる
  - 変数にどんなクラスが入っていてもinterfaceの内容を把握するだけで良い
 */
// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }
// interface Greetable {
//   readonly name: string;
//   greet(phrase: string): void;
// }
interface Named {
  readonly name?: string; //?をつけると任意optionalになる
  outputname?: string; //?をつけると任意optionalになる
}
interface Greetable extends Named {
  greet(phrase: string): void;
}
// type でも書き換えられる
// type Person = {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// };
class Person implements Greetable {
  name?: string;
  age = 30;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi");
    }
  }
}

let user1: Greetable;

// user1 = {
//   name: "Max",
//   age: 30,

//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

user1 = new Person();

user1.greet("Hello I am");

console.log(user1);

// 関数型としてのインターフェース
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
