window.onload = function() {
  var games = new GamesList();
  
  games.fetchData().then(function() {
    var container = document.getElementById("container");
    for(var i = 0; i < games.items.length; i++) {
      var item = games.items[i];
      //create and display item container
      var itemContainer = document.createElement("div");
      container.appendChild(itemContainer);
      itemContainer.style.border = "1px solid black";
      //create and display game title
      var itemTitle = document.createElement("a");
      itemTitle.innerHTML = item.title;
      itemContainer.appendChild(itemTitle);
      itemTitle.setAttribute("href", "http://cursuri-fsuciue1240.codeanyapp.com/FlorinaSuciu/Games%20Wordl/Pages/Game.html?gameId=" + item._id);
      itemTitle.setAttribute("target", "blank");
      //create and display game image
      var itemImage = document.createElement("img");
      itemImage.setAttribute("src", item.imageUrl);
      itemContainer.appendChild(itemImage);
      //create and display game image
      var itemDescription = document.createElement("p");
      itemDescription.innerHTML = item.description;
      itemContainer.appendChild(itemDescription);
      //create edit button
      var editButton = document.createElement("button");
      editButton.innerHTML = "Edit";
      itemContainer.appendChild(editButton);
      //create delete button
      var buttonDelete = document.createElement("button");
      buttonDelete.innerHTML = "Delete";
      itemContainer.appendChild(buttonDelete);
      //delete game
      buttonDelete.setAttribute("id", item._id);
      buttonDelete.addEventListener("click", function(event) {
        console.log(event.target);
        var id = event.target.getAttribute("id");
        console.log(id);
        games.deleteData(id);
        var containerDeleted = event.target.parentElement;
        container.removeChild(containerDeleted);
      });
    }
  }).catch(function() {
    console.log("Something went wrong on GamesListviews");
  })
  
  //create new game
  var createButton = document.querySelector("[type='submit']");
  createButton.addEventListener("click", function() {
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
  })
}