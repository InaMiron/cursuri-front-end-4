var a = 2;

function displayVariables (){
    var b = 3;
    
    c = 4;
  
    console.log("a inside function", a); //2
    console.log("b inside function", b); //3
    console.log("c inside function", c); //4
}

displayVariables();

console.log("a outside function", a); //2
console.log("b outside function",typeof b); // undefined
console.log("c outside function",c); // 4 pt ca l-am declarat global fara var

//---------------------------------------------------------------------------------

var x = 1; //global scope

function firstFunction () {
  var y = 2; //local scope into fisrtFunction
  
  function secondFunction () {
    var z = 3; //local scope into secondFunction
    console.log("second x = ", x); //1
    console.log("second y = ", y); //2
    console.log("second z = ", z); //3
    
    function thirdFunction (z) {
      z = 5; // not global
      console.log("third x = ", x); //1
      console.log("third y = ", y); //2
      console.log("third z = ", z); //5
    }
    thirdFunction(z); 
  }
  secondFunction();
  console.log("first x = ", x); //1
  console.log("first y = ", y); //2
  console.log("first z = ", typeof z); // undefined
}
firstFunction();

//---------------------------------------------------------------------------------

(function demoHoisting () {
  var a = 1000;
  console.log(a + " " + b);
  var b = 2000; // daca am comenta linia --> script.js:51 Uncaught ReferenceError
})(); //IIFE functie care se autoapeleaza

// this is identical with 
(function demoHoisting () {
  var a = 1000;
  var b;
  console.log(a + " " + b);
  b = 2000;
})();

// care e diferenta intre function expresion si function declaration cand vine vb de hoisting????? 
//=> function definition hoisting only occurs for function declarations, not function expressions (var x = function(){})




