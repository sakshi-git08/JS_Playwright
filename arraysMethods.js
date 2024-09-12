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

//2. filter
let num = [2, 4, 6, 8, 10, 3, 5, 9];
let evenNum = num.filter((e) => e % 2 == 0);
console.log(evenNum); //[ 2, 4, 6, 8, 10 ]
