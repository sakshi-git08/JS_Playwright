//1. var : old way
//ES6 
//scope : var
//functionally / locally + global scope

var x = 10; // global scope
function test(){
    var y = 20; //local scope
}

console.log(x);

var pop = "hi js";
function rel(){
    var top = "hello js";
    console.log(top); //local variable can't be accessed as variable directly outside the method
}
rel();
/*trying to access top variable present in function rel without using function reference
ReferenceError: top is not defined
*/
//console.log(top);
console.log(pop);

//redeclaration of variable is allowed. It updates the variable value with the latest one.
var browser = "chrome";
var browser = "firefox"; //declaring and reinitializing
browser = "edge"; //reinitializing only
console.log(browser);

var g;
console.log(g); //undefined
g = "Sakshi";
console.log(g); //Sakshi

//issue with var : it changes the value and we won't be able to use previous value i.e. we don't use var in modern js.
var flag = "Hey Sakshi!!";
var t1 = 4;
if(t1 > 3){
    var flag = "hey tom";
}
console.log(flag); //hey tom 


//let:
//scope: block scoped
//{}
let m = "Hey Sakshi";
let time = 4;
if(time > 3){
    let msg = "How you doin'?"
    console.log(msg);//How you doin'?
}
// console.log(msg); msg is not defined -> trying to access outside the scope
console.log(m); //Hey Sakshi

//reinitializing let variable is not allowed although you can update the same variable with let
let len = 5;
//let len = 8; not allowed

len = 8;
console.log("length is : " + len); //length is : 8

let p;
console.log(p); //undefined

//const:
const mg = "Hi Sakshi";
//mg = "Hello Anju"; TypeError: Assignment to constant variable.
console.log(mg);

//const s; error 