function print() {
  console.log("hi");
}

function print(name) {
  console.log("hi" + name);
}

function print(name, age) {
  console.log("hi " + name + " age " + age);
}

//calling:
print(); //hi undefined age undefined
//as per the last print method becuase it gets overridden by all other functions
//so it seems last one is executing.

print("Sakshi"); //hi Sakshi age undefined
//same method gets called again and again
//No matter what it will always use the last function even though u try to use print() after first function

//back-tick: use it whenever you want to use some special string or any regular expression based string
//run test cases on remote machine:
//browserName, browserVersion, remoteExecution
function displayBrowserInfo(browserName, browserVersion, remoteExecution) {
  if (
    typeof browserVersion === "number" &&
    typeof remoteExecution === "boolean"
  ) {
    console.log(
      `Browser: ${browserName}, 'version:' ${browserVersion}, 'remoteExe:' ${remoteExecution}`
    );
  } else if (typeof browserVersion === "number") {
    console.log(`Browser: ${browserName}, 'version:' ${browserVersion}`);
  } else {
    console.log(`Browser: ${browserName}`);
  }
}

displayBrowserInfo("chrome", 115, true);
displayBrowserInfo("chrome", 115);
displayBrowserInfo("firefox");
/*
Browser: chrome, 'version:' 115, 'remoteExe:' true
Browser: chrome, 'version:' 115
Browser: firefox
*/
