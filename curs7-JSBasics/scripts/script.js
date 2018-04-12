// alert("My first alert from a different file!");

var x;
x = 2;
console.log(x);

// numbers

var age = 29;
console.log("My age is",age);

var price = 4.63; // not "4.63$" <- this is a string not a number
console.log("The price is", price, "$");

var fullName = "Melania Moldovan";
console.log("My name is", fullName);

var paragraph = "Line 1 \nLine 2"; // \n new line character escaping
console.log(paragraph);

var backslash = "variable with \\";
console.log (backslash);

var quotes = "\"This is a string inside quotes\""
console.log(quotes);

var differentQuotes = '"This is a string \' inside quotes"';
console.log(differentQuotes);

var isTrue = true;
var isFalse = false;  
console.log(isTrue, isFalse);

var nullValue = null;
console.log("Null value", nullValue);

var undefinedValue;
console.log("Undefined value", undefinedValue);

var x = 2;
console.log(x);
x = undefined;
console.log(x);

console.log(43 % 10); //3 restul impartirii lui 43 la 10

console.log(2 == "2"); //true
console.log(2 === "2"); //false - verifica valoarea si tipul 
console.log(2 === 2); //true

console.log(typeof 10); //number
console.log(typeof "text"); //string
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof myVariable); //undefined

console.log(typeof nullValue); //object
console.log(typeof nullVlaue === null); //false

var n = 10;
//var isPositive = n > 0 ? true : false; 
var isPositive = n > 0 ? 1 : 0; 
console.log ("is positive", isPositive); //1

var p = 1 + 1;
var q = p * 2;
console.log(p,q);

var fisrtName = "Chuck";
var lastName = "Norris";
var fullName = fisrtName + " " + lastName;
console.log("fullName", fullName); 

var names = ["Eugen", "Horea", "Levi", "Florina", "Sasha", "Mela"];
console.log(names.sort());
console.log("length", names.length);

var robot = {
  model: "TRX1000",
  color: "red", //console.log(robot.color);
  "full name": "Robot's name",
  //color:"blue", <- having duplicate keys in the same object is incorrect!
  walk: function() {
    console.log("robot is walking");
  }
}; 
console.log(robot.color);
robot.walk();
console.log("full name", robot["full name"]); //robot.full name is incorrect!

var color = "red"; //console.log(color);

if (color === "red") {
  console.log("red color");
} else {
  console.log("not red");
}

var email = "melaniamoldovan@scoalainformala.ro";
console.log(email.indexOf("@")); // afiseaza -1 daca @ nu exista si indexul elementului 
//indexOf verifica daca elementul respectiv exista oriunde
if (email.indexOf("@") > -1) {
    console.log("email correct");
    } else {
      console.log("email incorrect")
  }

var weather = "sunny";

switch (weather) {
  case "rainy" :
    console.log("Bring un umbrella!");
    break;
  case "sunny" :
    console.log("Dress lightly!");
    break;
  case "cloudy" :
    console.log("Go outside!");
     break;
  default:
    console.log("Unknown weather type!");
    break;
}

var i = 0;
while (i < 10) {
  console.log("number", i);
  i++; //i = i + 1
} 
console.log("while done!");

var j = 15;
do {
  console.log("j", j);
  j++;
} while (x < 10);
console.log("do while done!");

var numbers = [4, 6, 8, -2, 3]; 
for (var k = 0; k < numbers.length; k++) {
  console.log("position k", k);
  console.log("element at position k", numbers[k]); 
}






    







