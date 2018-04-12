window.onload = onHtmlLoaded;
function onHtmlLoaded() {
  var validationElement1 = document.querySelector("input[name='firstName']");

  var validationElement2 = document.querySelector("input[name='lastName']");
  
  var form = document.querySelector("form");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    validation(validationElement1, validationElement2);
  }); 
}

function validation (firstName, lastName) {
  var firstNameValue = firstName.value;
  
  var lastNameValue = lastName.value;
  
  if (firstNameValue === "" && lastNameValue === "") {
    firstName.classList.add("redBorder");
    lastName.classList.add("redBorder");
    document.querySelector(".hidden").style.visibility = "visible";
    document.querySelector("div.hidden > p").innerHTML = "Please fill in your First and Last Name"
  } else if (firstNameValue === "" && lastNameValue !== "") {
    firstName.classList.add("redBorder");
    lastName.classList.remove("redBorder");
    console.log(lastNameValue);
    document.querySelector(".hidden").style.visibility = "visible";
    document.querySelector("div.hidden > p").innerHTML = "Please fill in your First Name," + " " + lastNameValue;
  } else if (firstNameValue !== "" && lastNameValue === "") {
    lastName.classList.add("redBorder");
    firstName.classList.remove("redBorder");
    console.log(firstNameValue);
    document.querySelector(".hidden").style.visibility = "visible";
    document.querySelector("div.hidden > p").innerHTML = "Please fill in your Last Name," + " " + firstNameValue;
  } else {
    firstName.classList.remove("redBorder");
    console.log(firstNameValue);
    lastName.classList.remove("redBorder");
    console.log(lastNameValue);
    document.querySelector(".hidden").style.visibility = "visible";
    document.querySelector("div.hidden > p").innerHTML = "Thank you for contacting us," + " " + firstNameValue;
  }
}