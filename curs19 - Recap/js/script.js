function sum(a,b) { //a=5,si b=6 dupa ce setam atributele prin metoda bind;
  console.log(this); //initial e window, dupa ce se foloseste bind si se salveaza intr-o copie care se apeleaza this va deveni obicetul cu atr1:true;
  return a + b;
}
var sumCopy = sum.bind({atr1: true},5,6);
sumCopy();
//manipularea this-ului cu functiile call si apply (a se vedea pe MDN care e diferenta dintre cele doua)

/**
  Example 1 - Promise and setTimeout
**/
console.log('log 1');
// The Promise is being resolved only after 1 second (when setTimeout function is
//being invoked)
var veryImportantPromise = new Promise(function(resolve, reject){
    setTimeout(function() {
        // the code insinde this function will be executed only after 1000ms
        // because of setTimeout
        console.log("log from setTimeout");
        resolve();
    }, 1000);
});

veryImportantPromise.then(function() {
    // the code inside this function will be executed only when the Promise is resolved ( by invoking "resolve()")
    console.log("log from then function");
}).catch(function() {
   // the code inside this function will be executed only when the Promise is rejected ( by invoking "reject()")
    console.log("log from catch function");
});

/**
  Example 2 - Promise and user interaction with buttons
**/

// The Promise is being resolved/rejected only when user clicks a button
var onClickPromise = new Promise(function(resolve, reject){
    document.getElementById('submit').addEventListener("click", function() {
        // the code inside this function will be executed only when user clicks "submit" button
        resolve();
    });
    document.getElementById('cancel').addEventListener("click", function() {
       // the code inside this function will be executed only when user clicks "cancel" button
        reject();
    });
});

onClickPromise.then(function() {
  // the code inside this function will be executed only when the Promise is resolved ( by invoking "resolve()" on line 32)
    console.log("Go cookies!");
}).catch(function() {
  // the code inside this function will be executed only when the Promise is resolved ( by invoking "reject()" on line 36)
    console.log("No cookies for you");
});

/**
  Example 3 - Returning a value from a function.
  Use "return" keyword when you want to expose some value outside the current function.
  If we don't return a value explicitly from a function 'undefined' will be returned by default from all JS function, which is perfectly fine if we
  don't want to process the value computed in that function going forward
**/

function sum(a, b) {
 return a + b;
}
var rez = sum(3,4); // the returned value of 'sum' function will be saved in 'rez' variable which can be used in our code going forward
console.log(rez); // will print 7
console.log(sum(5,6)) // will print 11

var grandTotal = sum(5, 5) + 10; //grandTotal will be 20

// if we 'forget' to use return on sum function

function sum2(a, b) {
  a + b;
}
var rez = sum2(3,4); // rez will be undefined (default behavior if we don't use return)
console.log(rez); // will print undefined
console.log(sum2(5,6)) // will print undefined

var grandTotal = sum2(5, 5) + 10; //grand total will be NaN as JS is not able add 'undefined + 10'

// A good example of function where we don't need to use 'return';
function validateUser(userAge) {
  if (userAge < 18) {
    alert("Sorry! You don't have the minimum required age");
  }
}

var rezValidation = validateUser(16); // rezValidation is undefined , but that's not an issue since all we wanted to achieve here is to display an alert if user is under 18
// usually when the function that we're invoking doesn't return anything (returns undefined) we don't save the result on a variable as I did on the prev line. We're just 
// invoking the function like this:

validateUser(21);

/**
   Example 4 - Using 'bind' function
   Bind function is being used when we want a function to be invoked with a different context (this) than the default one
**/

function getFullName() {
  return this.firstName + ' ' + this.lastName;
}

var fullName = getFullName(); // fullName variable will have the value "undefined undefined"
// this is because by default 'this' inside getFullName function is being set to 'window' which does not have firstName and lastName properties

var user = {
  firstName: 'John',
  lastName: 'Doe'
};
var getFullNameCopy = getFullName.bind(user); // by doing this we're creating a copy of getFullName function which will always be invoked with 'user' object as context (as this)
var fullName2 = getFullNameCopy(); // fullName2 variable will have the value set to 'John Doe' since the copy fn was called with 'this' set to 'user' object
console.log(fullName);
console.log(fullName2);
