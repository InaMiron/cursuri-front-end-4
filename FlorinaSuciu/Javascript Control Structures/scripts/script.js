//Homework

//1.display in the console the numbers from 1 to 20

for (var z = 1; z <= 20; z++) {
  console.log(z);
}

//2.display in the console the odd numbers from 1 to 20

for (var odd = 1; odd <= 20; odd++) {
  if(odd % 2 !== 0) {
  console.log(odd);
  }
}

//3.compute the sum of the elements of an array and display it in the console

var arr = [2, 5, 60, -10, 20];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum  = sum + arr[i]; 
}
console.log("The sum is " + sum);   

//4.compute the maximum of the elements of an array and display it in the console

var numbers = [7, 2, 10];
if(numbers[0] > numbers[1]) {
    var max = numbers[0];
    if (max > numbers[2]) {
      console.log("The maximum element in the array is " + max);
    } else {
      max = numbers[2];
      console.log("The maximum element in the array is " + max);
    }
  } else {
    max = numbers[1];
    if (max < numbers[2]) {
      max = numbers[2];
      console.log("The maximum element in the array is " + max);
    } else {
      max = numbers[1];
      console.log("The maximum element in the array is " + max);
    }
  }


//5.compute how many times a certain element appears in an array

var repetitiveArr = [5, 9, 12, -26, 9, 0, -3, 9, 5];

  var element = 9;
  var count = 0;
  for (var i = 0; i < repetitiveArr.length; i++) {
    if ( repetitiveArr[i] === element) {
            count++;
    }
  }
  console.log(element + " apears " + count + " times in the array.");
  


   