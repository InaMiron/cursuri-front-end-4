var commentsList = document.getElementById("comments-list");
console.log(commentsList); //null


window.addEventListener("load",onHtmlLoaded);

function onHtmlLoaded (){
  
  //Finding elements on html
  var commentsList = document.getElementById("comments-list");
  console.log(commentsList); //the element
  
  console.log("comment items", 
             document.getElementsByClassName("comment-item"));
  
  console.log("comment items by tag",
             document.getElementsByTagName("section"));
  
  var commentItems = document.getElementsByTagName("section");
  console.log("first comment item", commentItems[0]);
  console.log("second comment item", commentItems[1]);
  
  console.log("first paragraph inside section",
             document.querySelector("section > p")); //se selecteaza la fel ca in css, returneaza primul element gasit care corespunde tipului de selector folosit
  
  console.log("first paragraph inside section",
             document.querySelectorAll("section > p")); //selecteaza toate elementele
  
  //Updating html elements
  var h1Array = document.getElementsByTagName("h1"); //returneaza o lista de elemente, respectiv un array
  console.log(h1Array[0]); //selectam elementul dorit cu ajutorul indexului din array
  
  var h1 = document.querySelector("h1");
  console.log(h1);
  
  console.log(h1Array.innerHTML);//undefined
  console.log(h1Array[0].innerHTML);//the actual content
  console.log(h1.innerHTML);//the actual content
  
  h1.innerHTML = "HS DOM Manipulation Modified";//modify content
  
  //get & set attributes
  var list = document.getElementById("comments-list");
  console.log("comments-list", list.id, list.getAttribute("id"));
  
  list.id = "commments-list-new-id";
  list.setAttribute("id", "comments-list-new"); //ultimul id setat va ramane 
  
  list.style.border = "solid 1px red";
  list.style.padding = "5px";
  
  //adding & removing DOM elements
  //creating an element
 var comment = document.createElement("section"); //create new section element
 comment.className = "comment-item"; //set the class on this element
 var commentClassList = comment.classList;
 commentClassList.add("second-comment-item");
 comment.innerHTML = "<h2>Ina</h2><p>Comment from Ina</p>";
  
  //Add it in the page
  list.appendChild(comment);
  
 var anaComment =  document.querySelector("section");//sau (".comment-item")
 list.removeChild(anaComment);

 console.log(comment.children); 
 console.log(comment.querySelector("p"));
  
 //events
 var submitButton = document.getElementById("btn-submit");
 submitButton.addEventListener("click",handleClick);
  
 function handleClick (event) {
   event.preventDefault(); //stops the default execution and executes the following lines
   console.log(event.target); //the element that was clicked
 }
}



  


