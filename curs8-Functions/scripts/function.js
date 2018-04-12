// functiile se numesc cu verbe iar variabilele cu substantive
var persons = [
  {
    name: "Ana",
    gender: "F",
    height: 1.6,
    weight: 60 
  },
  {
    name: "Ion",
    gender: "M",
    height: 1.8,
    weight: 180
  }
];

function printMessage () {
  console.log("My first function");
}
printMessage();

function print(message) {
  console.log(message);
}

print();

print("My first funtion with parameters");

function printUser (name, gender, weight, height) {
  var bmi = weight/ (height*height);
  if (bmi < 18.5) {
     console.log(name + "|" + gender + "|" + "BMI:" + bmi + "|" + "underweight");
  } else if (bmi < 25) {
    console.log(name + "|" + gender + "|" + "BMI:" + bmi + "|" + "normal");
  } else if (bmi < 30) {
    console.log(name + "|" + gender + "|" + "BMI:" + bmi + "|" + "overweight");
  } else {
    console.log(name + "|" + gender + "|" + "BMI:" + bmi + "|" + "obese");
  }
}

for(var i = 0; i < persons.length; i++) {
  printUser(persons[i].name, persons[i].gender, persons[i].weight, persons[i].height);
}

//printUser ("Ana", "F", 55, 1.60);
//printUser ("Ion", "M", 180, 1.80);

function computeSum (a, b) {
  console.log("sum", a+b);
  a = "My special number";
  console.log(a);
}
computeSum (2,3); //sum 5, My special number

var a = 2;
var b = 3;
computeSum (a,b); //sum 5, My special number

console.log(a); //2

//even if a is modified insinde the function, its value is not changed outside
//a is sent through value

function displayFullName (name) {
  console.log(name.first + " " + name.last);
  name.last = "Batman";
  console.log(name.last); //Batman
}

var nameObject  = {
  first: "Bruce",
  last: "Wayne",
}

displayFullName (nameObject); // Bruce Wayne, Batman
console.log(nameObject.last); //Batman 

//name is sent by reference
//if name is modified inside the function, the change are also visible
