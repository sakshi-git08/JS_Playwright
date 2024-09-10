function checkAge(age){
    if(age >= 18){
        console.log("You are old enough to vote.");
    }
    else{
        console.log("Sorry, your must be 18 or older to vote.");
    }
}
checkAge(10);
checkAge(19);
checkAge(0);

function checkNumber(number){
    if(number > 0){
        console.log("number is +ve");
    }else if(number < 0){
        console.log("number is -ve");
    }else{
        console.log("zero number found!!");
    }
}

checkNumber(-9);
checkNumber(10);
checkNumber(0);