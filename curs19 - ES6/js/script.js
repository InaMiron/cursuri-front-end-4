console.log("log 1");

var veryImportantPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
    console.log("log from setTimeout");
    resolve();
  }, 10000);
});

veryImportantPromise.then(function() {
  console.log("log from then function");
}).catch (function() {
  console.log("log from catch function");
});


var onClickPromise = new Promise(function(resolve, reject) {
  document.getElementById("submit").addEventListener("click", function() {
    resolve();
  });
  document.getElementById("cancel").addEventListener("click", function() {
    reject();
  });
});

onClickPromise.then(function() {
  console.log("Go cookies!");
}).catch(function() {
  console.log("No cookies for you");
})

function sum(a,b) { //a=5,si b=6 dupa ce setam atributele prin metoda bind;
  console.log(this); //initial e window, dupa ce se foloseste bind si se salveaza intr-o copie care se apeleaza this va deveni obicetul cu atr1:true;
  return a + b;
}
var sumCopy = sum.bind({atr1: true}, 5, 6);
sumCopy();
var r = sumCopy();
console.log(r);//pt a folosi suma a+b

//manipularea this-ului cu functiile call si apply (a se vedea pe MDN care e diferenta dintre cele doua)