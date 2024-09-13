//1. maps: it returns another array using callback function (=>)
let numbers = [1, 2, 3];
let doubledNumbers = numbers.map((e) => e * 2);
console.log(doubledNumbers); //[ 2, 4, 6 ]

//franheit to Celcius -> (F-32) * (5/9)
let franheit = [32, 89, 56, 45];
function fahToCelcius(fah) {
  return (fah - 32) * (5 / 9);
}
let celcius = franheit.map(fahToCelcius);
console.log(celcius); //[ 0, 31.666666666666668, 13.333333333333334, 7.222222222222222 ]

//2. filter: is used to filter the elements / data based on conditions.
let num = [2, 4, 6, 8, 10, 3, 5, 9];
let evenNum = num.filter((e) => e % 2 == 0);
console.log(evenNum); //[ 2, 4, 6, 8, 10 ]

let employee = [
  { name: "John", age: 30, gender: "male" },
  { name: "Peter", age: 35, gender: "male" },
  { name: "Rohan", age: 10, gender: "male" },
  { name: "Ragini", age: 40, gender: "female" },
  { name: "Mark", age: 67, gender: "male" },
  { name: "Shalini", age: 27, gender: "female" },
];

let femEmpOver30 = employee.filter((emp) => {
  return emp.gender === "female" && emp.age > 20;
});

console.log(femEmpOver30);
/*
[
  { name: 'Ragini', age: 40, gender: 'female' },
  { name: 'Shalini', age: 27, gender: 'female' }
]
*/

//3. reduce: it allows the array to be reduced to a single element
//acc is for summing up elements, while num is for iterating over numb[]
//0 states from where to start the initial value of acc just like for sum variable we initialise and keep it as 0
let numb = [1, 2, 3, 4, 5]; //15
let sum = numb.reduce((acc, num) => acc + num, 0);
//1st = 0 + 1 = 1
//2nd = 1 + 2 = 3
//3rd = 3 + 3 = 6
//4th = 6 + 4 = 10
//5th = 10 + 5 = 15
console.log(sum); //15

//max number in array
//top[0] is initial value this is given to max
let top = [10, 30, 2, 18, 89, 67, 48]; //89
let maxNum = top.reduce((max, num) => {
  if (num > max) {
    return num;
  } else {
    return max;
  }
}, top[0]);
console.log(maxNum);

//cart: name, price need to have totalAmount of all the purchase done
let cartItems = [
  { name: "Dress", price: 1500 },
  { name: "Hat", price: 500 },
  { name: "Kurti", price: 700 },
  { name: "Shoes", price: 1700 },
  { name: "Adidas t-shirt", price: 2300 },
];
//6700
let totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
console.log(totalAmount); //6700
