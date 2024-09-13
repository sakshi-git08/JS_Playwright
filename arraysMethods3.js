//1. every(): each and every element in array pass for specific condition so return true.
let num = [1, 2, 3, 4, 5, 30];
let result = num.every((e) => e < 10);
console.log(result); //false

//2. some(): atleast one element in the array passes the specific condition
let number = [1, 2, , 3, 4, 5];
let check = number.some((e) => e % 2 === 0);
console.log(check); //true

//3. find(): it gives the first element / value at which the condition is passed or satisfied. If condition is not
//satisfied at all it will return undefined
let total = [1, 2, 3, 5, 9];
let fe = total.find((e) => e % 2 === 0);
console.log(fe); //2

//4. indexOf: if element is present it will return the index else it will return -1.
let fruits = ["apple", "mango", "litchi", "blueberry"];
let fruitIndex = fruits.indexOf("blueberry");
console.log(fruitIndex); //3

//5. lastIndexOf(): it gives the last element of that particular element in the array.
let fruit = ["apple", "mango", "litchi", "blueberry", "litchi"];
let lastLitchi = fruit.lastIndexOf("litchi");
console.log(lastLitchi); //4

//6. reverse():
let cars = ["Audi", "Lamberghini", "Punch", "Harrier", "Rolls Royce", "Jaguar"];
let reveresedCars = cars.reverse();
console.log(reveresedCars); //[ 'Jaguar', 'Rolls Royce', 'Harrier', 'Punch', 'Lamberghini', 'Audi' ]

//7. sort(): sorts the elements alphabetically
let products = ["macbook", "imac", "samsung", "canon", "123test", "Tshirt"];
let proSort = products.sort();
console.log(proSort); //[ 'canon', 'imac', 'macbook', 'samsung' ]
//[ '123test', 'canon', 'imac', 'macbook', 'samsung' ]
//[ '123test', 'Tshirt', 'canon', 'imac', 'macbook', 'samsung' ]
