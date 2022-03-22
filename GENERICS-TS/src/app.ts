/**
 * GENERICS
 */
// const names: Array<string> = []; // string[]と同じ
// names[0].split(" ");
/**
 * promise
 */
// const promise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve("yahho");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

/**
 * generic関数
 */
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// console.log(merge({ name: "Max" }, { age: 30 }));
const mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj.age);

interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText = "値がありません。";
  if (element.length > 0) {
    descriptionText = "値は" + element.length + "個です。";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("おつかれさまです。"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Max" }, "name");

/**
 * genericクラス
 */

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Data1");
textStorage.addItem("Data2");
textStorage.removeItem("Data1");
console.log(textStorage.getItems());
const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// const obj = { name: "Max" };
// objStorage.addItem(obj);
// objStorage.addItem({ name: "Manu" });
// objStorage.removeItem(obj);
// console.log(objStorage.getItems());

/**
 * generics utils
 */
// Partial
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// Readonly
const names: Readonly<string[]> = ["Max", "Anna"];
// names.push("Manu");
// names.pop();
