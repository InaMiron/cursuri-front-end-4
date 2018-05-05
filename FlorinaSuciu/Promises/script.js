window.onload = onHtmlLoaded;

function onHtmlLoaded() {
  getPosts(); 
}

function getPosts () {
  $.ajax("https://api.coinmarketcap.com/v2/ticker/")
  .then(callOnSuccess, callOnError)
  .then(valuesToArray)
  .then(sortArray)
  .then(display);
}

// Success
function callOnSuccess (response) {
  var items = response.data;
  console.log("Object Items =", items);
  return items;
}
  
// Error 
function callOnError(xhr) {
  container.innerHTML = "Error!";
}

// Transform object into array
function valuesToArray(items) {
    var result = [];
    for (var key in items) {
       if (items.hasOwnProperty(key)) {
           result.push(items[key]);
       }
    }
    return result;
}

// Sort array by rank key
function sortArray (result) {
    console.log("Array of Items =",result);
    var sortedArray = result.sort(function(a, b){return a.rank - b.rank});
    console.log("sortedArray =", sortedArray);
    return sortedArray;
}

// Access the first 3 objects
function display(sortedArray) {
    for(var i = 0; i < 3; i++) {
      var item = sortedArray[i];
      console.log("Item =", item);
      $.ajax("https://api.coinmarketcap.com/v2/ticker/" + item.id + "/?convert=EUR")
      .then(callOnArraySuccess);
    }
  }

// Populate container
function callOnArraySuccess (arrayResponse) {
  var arrayResponseObject = arrayResponse.data;
  var coinName = arrayResponseObject.name;
  var priceUsd = arrayResponseObject.quotes.USD.price;
  var priceEur = arrayResponseObject.quotes.EUR.price;
  console.log("RESPONSE =", arrayResponseObject);
  console.log("Name =", coinName);
  console.log("Price =", priceUsd + "USD", ";", priceEur + "EUR");
  var dynamicRowInfo = document.createElement("tr"); 
  dynamicRowInfo.innerHTML = "<td>" + coinName + "</td>" +
    "<td>" + priceUsd + "</td>" +
    "<td>" + priceEur + "</td>";
  var list = document.getElementById("infoBody");
  list.appendChild(dynamicRowInfo); 
}
