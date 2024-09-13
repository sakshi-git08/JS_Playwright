//Declaration of an array:
let myArray = []; //An empty array

let lang = ["Java", "Python", "JavaScript"];
//1. push: adds the value at the end in teh array
lang.push("Ruby");
lang.push("HTML");
console.log(lang); //[ 'Java', 'Python', 'JavaScript', 'Ruby', 'HTML' ]

//2. pop: remove the last element from the array and returns that particular element
let numbers = [1, 2, 3, 4, 5]; //An array with numbers
numbers.pop();
console.log(numbers); //[ 1, 2, 3, 4 ]

//3. shift: removes the first element from the array and returns that particular element also.
let fruits = ["apple", "mango", "banana", "litchi"]; //An array with Strings
let firstFruit = fruits.shift();
console.log(firstFruit); //apple
console.log(fruits); //[ 'mango', 'banana', 'litchi' ]

//4. unshift: adds one or more elements to the beginning of the array and returns the new length of the array
let colors = ["red", "green", "black", "white"];
colors.unshift("blue");
console.log(colors); //[ 'blue', 'red', 'green', 'black', 'white' ]
console.log(colors.length); //5

//5. splice: it will allow you to add or remove specific element from the array.
let animal = ["dog", "cat", "bird", "fish"];
animal.splice(1, 1, "Penguin"); // remove cat and at that position only add penguin
console.log(animal); //[ 'dog', 'Penguin', 'bird', 'fish' ]
animal.splice(1, 2, "Penguin", "elephant");
console.log(animal); //[ 'dog', 'Penguin', 'elephant', 'fish' ]

//6. slice: It returns the new array from start index to the end where end index is not included.
let pop = [1, 2, 3, 4, 5];
let newPop = pop.slice(1, 4);
console.log(newPop); //[ 2, 3, 4 ]

//7. concat: combine two or more array and create new array
let fr = ["apple", "mango", "banana", "litchi"];
let veggies = ["tomato", "potato", "lady finger", "cabbage", "brinjal"];
let fruitsAndVeggies = fr.concat(veggies);
console.log(fruitsAndVeggies);
/*
[
  'apple',       'mango',
  'banana',      'litchi',
  'tomato',      'potato',
  'lady finger', 'cabbage',
  'brinjal'
]
  */

//8. indexOf: return the first index at which the element can be found in the array and return -1 if element is not present.
//in case of duplicates it will return index when it first occurred.
let phones = ["iphone", "lenovo", "motorola", "virtue", "samsung", "iphone"];
let motorolaIndex = phones.indexOf("motorola");
console.log(motorolaIndex); //2
let oneplusIndex = phones.indexOf("onePlusNord");
console.log(oneplusIndex); //-1

//2nd indexOf:
// let secondIphone = phones.indexOf("iphone", 1);
//OR
let secondIphone = phones.indexOf("iphone", phones.indexOf("iphone") + 1);
console.log(secondIphone);

//9. includes: it allows you to check whether particular value / element is present or not based on which it returns true / false
//Similar to contains.
let test = ["admin", "seller", "customer", "vendor"];
let flag = test.includes("seller", "sakshi");
console.log(flag); //true -> because of the value amongst these are present

//10. forEach:
let n = [1, 2, 3, 4, 5, 6, 7];
n.forEach((e) => {
  console.log(e * 2);
});
