window.onload = function() {
  var games = new GamesList();
  games.fetchData().then(function() {
    var result = chunkArray(games.items, 4);
    //console.log(result);
    var container = document.querySelector(".container");
      for(var i = 0; i < result.length; i++) {
        var items = result[i];
        //console.log("Items=", items);
        var row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for(var j = 0; j < items.length; j++) {
          var item = items[j];
          var element = document.createElement("div");
          element.classList.add("col");
          row.appendChild(element);
          //create and display game image
          var itemImage = document.createElement("img");
          itemImage.setAttribute("src", item.imageUrl);
          element.appendChild(itemImage);
          //create and display game title
          var itemTitle = document.createElement("a");
          itemTitle.innerHTML = item.title;
          itemTitle.style.display = "block";
          itemTitle.setAttribute("href", "http://cursuri-fsuciue1240.codeanyapp.com/FlorinaSuciu/Games%20World/Pages/Game.html?gameId=" + item._id);
          itemTitle.setAttribute("target", "blank");
          element.appendChild(itemTitle);
          //create delete button
          var buttonDelete = document.createElement("button");
          buttonDelete.classList.add("btn");
          buttonDelete.classList.add("btn-danger");
          buttonDelete.setAttribute("id", item._id);
          buttonDelete.innerHTML = "Delete";
          element.appendChild(buttonDelete);
          //delete game
          buttonDelete.addEventListener("click", function(event) {
            console.log(event.target);
            var deleteId = event.target.getAttribute("id");
            console.log(deleteId);
            games.deleteData(deleteId);
            var containerDeleted = event.target.parentElement;
            var parent = containerDeleted.parentElement;
            console.log(containerDeleted);
            console.log(parent);
            parent.removeChild(containerDeleted);
          });
        }
     }
  }).catch(function() {
    alert("Something went wrong on GamesListviews");
  });
  
  //create new game
  var form = document.getElementById("gameDetails");
  document.getElementById("buttonCreate").addEventListener("click", function(event) {
    event.preventDefault();
    $(form).show();
  });
  
  var createButton = document.querySelector("[name='create']");
  createButton.addEventListener("click", function() {
    $(form).show();
    var title = document.querySelector("[name='title']").value;
    var releaseDate = document.querySelector("[name='releaseDate']").value;
    var genre = document.querySelector("[name='genre']").value;
    var publisher = document.querySelector("[name='publisher']").value;
    var imageUrl = document.querySelector("[name='imageUrl']").value;
    var description = document.querySelector("[name='description']").value;
    var data = {
      title : title,
      releaseDate : releaseDate,
      genre : genre,
      publisher : publisher,
      imageUrl : imageUrl,
      description : description,
    };
    var newGame = new GameDetails();
    newGame.createData(data);
  });
  
  //plit array into groups of 3 elements
  function chunkArray(myArray, chunk_size){
      var index = 0;
      var arrayLength = myArray.length;
      var tempArray = [];

      for (index = 0; index < arrayLength; index += chunk_size) {
          myChunk = myArray.slice(index, index+chunk_size);
          // Do something if you want with the group
          tempArray.push(myChunk);
      }

      return tempArray;
  }
}

