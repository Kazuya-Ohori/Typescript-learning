// 交差型
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interfaceでも書ける
// interface ElevatedEmployee extends Admin, Employee {}
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

// 型ガード
type Combinable = string | number;
type Numeric = number | boolean;

type Unicersal = Combinable & Numeric;

/**
 * 関数オーヴァーロード
 */
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Hello", " Typescript");
result.split(" ");

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(emp);
  // if (typeof emp === "Employee") { // これは出来ない
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("StartDate: " + emp.startDate);
  }
}

printEmployeeInformation({ name: "Manu", startDate: new Date() });

class Car {
  drive() {
    console.log("運転中...");
  }
}

class Track {
  drive() {
    console.log("トラック運転中...");
  }

  loadCargo(amount: number) {
    console.log("荷物を載せています..." + amount);
  }
}

type Vehicle = Car | Track;

const v1 = new Car();
const v2 = new Track();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ("loadCargo" in vehicle) {
  if (vehicle instanceof Track) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// 判別可能なUnion型
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // if (animal instanceof Bird) {//instanceはjsにコンパイルされないのでこれはエラーになる
  // if ("flyingSpeed" in animal) { // これでも良いけどタイプミスとか起きる可能性がある
  //   console.log(animal.flyingSpeed);
  // }
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("移動速度: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

/**
 * 型キャスト
 */
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
// const userInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement;

// userInputElement.value = "こんにちは";

const userInputElement = document.getElementById("user-input");
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "こんにちは";
}

/**
 * インデックス型
 * 入力値にエラーのものだけ格納したい場合などに便利
 */
interface ErrorContainer {
  //{email: '正しいメールアドレスではありません。', username: 'ユーザ名に記号を含める事は出来ません'}
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "正しいメールアドレスではありません。",
  username: "ユーザ名に記号を含める事は出来ません",
};

/**
 * オプショナルチェイン
 */
const fetchedUserData = {
  id: "U1",
  name: "user1",
  job: {
    title: "Developer",
    description: "TypeScript",
  },
};

console.log(fetchedUserData?.job?.title);

/**
 * NULL合体演算子
 * もし変数の中身がnullかundefinedの時だけ右辺を代入する
 */
const userInput = "";
const storeData = userInput ?? "DEFAULT";
console.log(storeData);
