//typeof: used to tell what kind of variable or object it is.

let x = 30; //js is a interpreted language. The type of variable is decided at runtime.
console.log(typeof x); //number

x = "hello";
console.log(typeof x); //string

x = {
  name: "John",
};
console.log(typeof x); //object

let flag = true;
console.log(typeof flag); //boolean

let type = typeof flag;
console.log(type); //it return in the form of string

let color = ["red", "purple", "white", "off-white"];
console.log(typeof color); //object

const j = null;
console.log(typeof j); //object

let m;
console.log(typeof m); //undefined since the value is not being assigned here.

function print(name) {
  console.log("My name is : " + name);
}

console.log(typeof print); //function
