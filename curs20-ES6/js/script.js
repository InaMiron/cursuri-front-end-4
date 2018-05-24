//  variable hoisting
var isValid = true;
// isValid2 is not hoisted since it's declared using "let" keyword, so we're
// not able to use it before it is declared
let isValid2 = true;
// // Hoisting works exactly the same for functions also, we're able to call/invoke
// // a function before it is decalred in the code
// validate("");

// function validate(inputString) {
// 	// isValid is a global variable - defined outside the fn
// 	console.log(isValid); // o sa returneze true
// 	// HOISTING - error variable "hoisted" (moved at the beginning of the fn)
// 	// so the code will not throw an error but will print undefined
// 	console.log(error); // o sa returneze undefined
// 	if (inputString.length === 0) {
// 		isValid = false;
// 		var error = true;
// 		console.log("String is valid");
// 		console.log(isValid); // returneaza false
// 		console.log(error); // returneaza true
// 	}
// }


// validate("");


// console.log("From Global Scope");
// console.log(isValid);
// error variable is a local variable  declared in validate function, and it's accesible 
//only inside that function ( a variable is not Hoisted outside the function)
// console.log(error);

// ===================Refactor validate fn with let/constant==============================

// let  isValid2 = true;

// function validate(inputString) {
// 	cosole.log(isValid2);
// 	// This will throw a Refference Error since const/let declared variables are not hoisted - they can't be used before they are declared
// // 	console.log(error);
// 	if (inputString.length === 0) {
// 		const error = true;
// 		isValid2 = false;
// 		console.log("String is not valid");
// 		console.log(isValid2);
// 		console.log(error);
// 	}
// }

// console.log("From Global Scope");
// console.log(isValid2);

// ===============================Arrow Function============================================
 // refactor validate function with arror fn
const validate = inputString => {
		cosole.log(isValid2);
	// This will throw a Refference Error since const/let declared variables are not hoisted - they can't be used before they are declared
// 	console.log(error);
	if (inputString.length === 0) {
		const error = true;
		isValid2 = false;
		console.log("String is not valid");
		console.log(isValid2);
		console.log(error);
	}
}

//since validate is declared using "const" keyword, the variable in NOT
//hoisted so we're not able to call/invoke validate function before it is declared
//validate("");

//this in Arrow functions 
function expire() {
  this.isExpired = false;
  //arrow function is taking the surrounding scope and set it as "this".
  //so inside the setTimeout callback fn "this" refers to the object with
  //isExpired key set to false
  setTimeout(() => {
    this.isExpired = true;
  },4000);
  
 //"this" refers to "window"  object because setTimeout is a method
 //defined on "window" object interface
  
//   setTimeout(function() {
//     this.isExpired = true;
//   },4000);
  
  return this.isExpired;
}

const expire2 = expire.bind({});

console.log(expire2());

