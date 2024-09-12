for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("---------------for...of---------------");
//for...of loop -> similar to for each loop
const array = [1, 2, 3, 4, 5];//0 to 4 => 5 elements
//instead of for(int i : array) in js we write for...of loop like this -> for(const e of array)
for (const e of array) {
    console.log(e);
}
console.log("----------------for---------------");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//5th index => undefined
console.log("---------------while----------------");
//while: 1 to 10
let p = 1;
while (p <= 10) {
    console.log(p);
    p++;
}
console.log("---------------while----------------");
let l = 2;
while (l <= 10) {
    console.log(l); //2 4 6 8 10
    l = l + 2;
}

console.log("---------------do - while----------------");

//do-while
let h = 1;
do {
    console.log(h); //1 2 3 4 ..... 10
    h++;
    //business logic goes here...
} while (h <= 10); //condition check here...

console.log("---------------break----------------");
//break
//1 to 100 : print the hi when you see multiplication of 5 and break
let num = 0;
while (num <= 100) {
    console.log(num);
    if (num % 5 == 0) { //% gives remainder
        console.log("hi");
        break;
    }
    num++;
}
console.log("---------------");
const browser = ["chrome", "firefox", "edge", "safari"];
for (const e of browser) {
    console.log(e);
    if (e == "safari") {
        console.log("launch safari");
        break;
    }
}
console.log("---------------");
//for...in loop on object:
//creating object:
const user = {
    name: "John Doe",
    age: 30,
    city: "New York City"

}

for (const key in user) {
    console.log(key + " : " + user[key]); //user[name], user[age], user[city] all these will be replaced by values
}

console.log("---------------");

const br = ["chrome", "firefox", "edge", "safari"];
for (const ele in br) {
    console.log(ele); // It will print 0 1 2 3 
}

console.log("---------------");

for (const el in br) {
    console.log(el + " : " + br[el]); // It will print chrome firefox edge safari
}