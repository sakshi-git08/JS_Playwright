//1. function declaration: in js we don't need to add any return type to method
function add(a, b) {
  return a + b;
}

console.log(add(5, 6)); //11

function print() {
  console.log("Hi JS!!");
}
print(); //Hi JS!!

//2. function expression: Anonymous function
const multiply = function (x, y) {
  return x * y;
};
//Here, multiply is a function name.

console.log(multiply(3, 7)); //21

//3. Arrow function expression:
const divide = (t1, t2) => t1 / t2;
console.log(divide(6, 3)); //2

//4. Function constructor: you need to write the last parameter first as it depends what you want to achieve with
//this method and what you need to provide here.
const substract = new Function("a", "b", "return a - b");
console.log(substract(10, 4)); //6

//5. IIFE: Immediately Invoked Function expression (self invoking)
(function () {
  console.log("server is up and running... on port 3000");
})();

//6. Generator Function : the function that returns an iterator object
//It uses : function* and yield keywords
function* generateNumberSequence() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const generator = generateNumberSequence();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

//7. Anonymous Function:
//no specific name
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(function (e) {
  //callback function
  return e * e;
});

console.log(squareNumbers); //[ 1, 4, 9, 16, 25 ]

//Another way
const squareNumber = numbers.map((e) => {
  //callback function
  return e * e;
});
console.log(squareNumber); //[ 1, 4, 9, 16, 25 ]

//8. Recursive Function: function which will call itself.
function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(4)); //24

//9. Higher Order function:
function addition(a, b) {
  return a + b;
}

function multiplication(a, b) {
  return a * b;
}

function operate(funcName, a, b) {
  return funcName(a, b);
}

const s = operate(addition, 4, 5);
console.log(s); //9

const s1 = operate(multiplication, 4, 5);
console.log(s1); //20
