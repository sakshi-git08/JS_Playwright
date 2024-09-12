function checkAge(age) {
  if (age >= 18) {
    console.log("You are old enough to vote.");
  } else {
    console.log("Sorry, your must be 18 or older to vote.");
  }
}
checkAge(10);
checkAge(19);
checkAge(0);

function checkNumber(number) {
  if (number > 0) {
    console.log("number is +ve");
  } else if (number < 0) {
    console.log("number is -ve");
  } else {
    console.log("zero number found!!");
  }
}

checkNumber(-9);
checkNumber(10);
checkNumber(0);

//nested if-else
function checkGrade(score) {
  let grade;
  if (score >= 90) {
    grade = "A";
  } else {
    if (score >= 80) {
      grade = "B";
    } else {
      if (score >= 70) {
        grade = "C";
      } else {
        grade = "D";
      }
    }
  }
  console.log(grade);
}
checkGrade(90);
checkGrade(75);
checkGrade(35);
checkGrade(100);
checkGrade(85);

// let browser = "chrome";
// if(browser == "chrome"){
//     console.log("launch chrome");
// }
// if(browser == "firefox"){
//     console.log("launch firefox");
// }
// if(browser == "edge"){
//     console.log("launch edge");
// }
// else{
//     console.log("please pass the right browser...")
// }
//in the above code we are just using else block once when if it fails on 3rd condition then it gets
//along with other matching conition. -> launch chrome
//please pass the right browser...

//we can handle this with if else-if conditions.

let browser = "firefox";
if (browser == "chrome") {
  console.log("launch chrome");
} else if (browser == "firefox") {
  console.log("launch firefox");
} else if (browser == "edge") {
  console.log("launch edge");
} else {
  console.log("please pass the right browser...");
}
//here also we still are checking each and every condition and then getting to result.
//we can improve this by using switch case where if particular condition matches then it works fine else
//default case.
