//Arrow functions are anonymous in nature which doesn't have any name.
//When you have one parameter there is no need to put brackets you can use without brackets as well.
const square = (num) => num * num;
console.log(square(5)); //25

//no params
const msg = () => "hello JS!!";
console.log(msg()); //hello JS!!

/*
const msg1 =  => "hello JS!!"; You can not write arrow function without any brackets.
console.log(msg1());
*/

const add = (a, b) => a + b;
console.log(add(4, 5)); //9

//creating object and fetching values using arrow function

const getFullName = (person) => `${person.firstName} ${person.lastName}`;
const person = {
  firstName: "Sakshi",
  lastName: "Aggarwal",
};

//``-> tild
const fullName = getFullName(person);
console.log(fullName);

const greet = (username = "guest", age = 0) =>
  `Hello, ${username}! you are ${age} years old`;
const g1 = greet();
console.log(g1); //Hello, guest! you are 0 years old

const g2 = greet("Tom", 56);
console.log(g2); //Hello, Tom! you are 56 years old

//rest parameters or varags...: using this kind of parameter you can provide multiple values just like an array
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3, 4, 4, 6, 8, 0)); //28

const browesrInfo = (browser = "chrome", ...details) => {
  console.log(`browser : ${browser}`);
  console.log("other details: " + details);
};

/*
browser : chrome
other details:
undefined
*/
console.log(browesrInfo());
/*
browser : firefox
other details: 115.11,mozilla,headless
undefined
*/
console.log(browesrInfo("firefox", "115.11", "mozilla", "headless"));

//max number using math
const maxValue = (a, b, c) => {
  return Math.max(a, b, c);
};

console.log(maxValue(50, 61, 10)); //61
