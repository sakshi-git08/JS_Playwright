function checkDayOfTheWeek(dayNumber) {
  let day;
  switch (dayNumber) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      console.log("Invalid day");
      break;
  }
  return day;
}

console.log(checkDayOfTheWeek(0)); //Sunday
console.log(checkDayOfTheWeek(3)); //Wednesday
console.log(checkDayOfTheWeek(6)); //Saturday
console.log(checkDayOfTheWeek(10));
//Invalid day
//undefined
//it will directly jump to that case and break out
//if break is not applied it will giver Invalid day Saturday -> when day = 0
//if break supplied with case 2 it will show Tuesday. -> when day = 0

console.log("#####################################");

let browser = "firefox";
switch (browser) {
  case "chrome":
    console.log("launch chrome");
    break;
  case "firefox":
    console.log("launch firefox");
    break;
  case "edge":
    console.log("launch edge");
    break;
  default:
    console.log("please pass the right browser...." + browser);
    break;
}
