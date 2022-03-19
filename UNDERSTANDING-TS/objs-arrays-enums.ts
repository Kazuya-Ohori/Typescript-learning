// Object型
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[]; // Array型
//   role: [number, string]; // Tuple型
// } = {
//   name: 'jhon',
//   age: 30,
//   hobbies: ['Sports','Cooking'], // Array型
//   role: [2, 'author'], // Tuple型
// };

// Tuple型
// person.role.push('admin'); // これはエラーにならないので注意　
// person.role[1] = 10; // これはエラーになる　
// person.role = [0, 'admin', 'user']; // これはエラーになる　

// Array型
// let favotiteActivities: string[];
// favotiteActivities = ['sports'];

// for(const hobby of person.hobbies){
//   console.log(hobby.toUpperCase());
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// Enum型
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: 'jhon',
  age: 30,
  hobbies: ['Sports','Cooking'], // Array型
  role: Role.ADMIN, // Tuple型
};

if(person.role === Role.ADMIN){
  console.log('管理ユーザー');
}





