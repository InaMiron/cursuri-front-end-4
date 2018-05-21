//variable hoisting and function hoisting
var isValid = true;

//Hoisting works exactly the same for functions also. We're able to call/invoke
//a function before it is declared in the code
validate("");

function validate(inputString) {
  //isValid is a global variable - defined outside the function
  console.log(isValid); //true
  //HOISTING - error variable is "hoisted" (moved at the beginning of the fn)
  //so the code will not throw an error but it will print undefined
  console.log(error);   //undefined
  if(inputString.length === 0) {
    isValid = false;
    var error = true;
    console.log("String is not valid");
    console.log(isValid); //false
    console.log(error); //true
  }
}

console.log("From Global Scope");
console.log(isValid); //false
//error variable is a local variable declared in validate function, and it's accesible
//only inside that function (a variable is not hoisted outside the function)

//console.log(error);   //Uncaught ReferenceError: error is not defined
