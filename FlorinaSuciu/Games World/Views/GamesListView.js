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
      itemTitle.setAttribute("href", "http://cursuri-fsuciue1240.codeanyapp.com/FlorinaSuciu/Games%20World/Pages/Game.html?gameId=" + item._id);
      itemTitle.setAttribute("target", "blank");
      //create and display game image
      var itemImage = document.createElement("img");
      itemImage.setAttribute("src", item.imageUrl);
      itemContainer.appendChild(itemImage);
      //create and display game description
      var itemDescription = document.createElement("p");
      itemDescription.innerHTML = item.description;
      itemContainer.appendChild(itemDescription);
      //create edit button
      var editButton = document.createElement("button");
      editButton.setAttribute("id", item._id);
      editButton.innerHTML = "Edit";
      itemContainer.appendChild(editButton);
      //edit info game
      editButton.addEventListener("click", function(event) {
        console.log(event.target);
        var editId = event.target.getAttribute("id");
        console.log(editId);
        var response = new GameDetails();
        response.fetchData(editId).then(function(responseData) {
          console.log(responseData);
          document.querySelector("[name='title']").setAttribute("value", responseData.title);
          document.querySelector("[name='releaseDate']").setAttribute("value", responseData.releaseDate);
          document.querySelector("[name='genre']").setAttribute("value", responseData.genre);
          document.querySelector("[name='publisher']").setAttribute("value", responseData.publisher);
          document.querySelector("[name='imageUrl']").setAttribute("value", responseData.imageUrl);
          document.querySelector("[name='description']").innerHTML = responseData.description;
          //update game
          var updateButton = document.querySelector("[name='update']");
          console.log(updateButton);
          var updateId = responseData._id;
          console.log(updateId);
          updateButton.addEventListener("click", function() {
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
             var updateGame = new GameDetails();
             updateGame.updateData(updateId, data).then(() => {
               alert("Updated!");
             }).catch((err) => {
               console.log(err);
             });
          });
        }).catch(function(xhr) {
          alert("Something went wrong on GamesListViews when updating game");
        }) 
      });
      
      //create delete button
      var buttonDelete = document.createElement("button");
      buttonDelete.setAttribute("id", item._id);
      buttonDelete.innerHTML = "Delete";
      itemContainer.appendChild(buttonDelete);
      //delete game
      buttonDelete.addEventListener("click", function(event) {
        console.log(event.target);
        var deleteId = event.target.getAttribute("id");
        console.log(deleteId);
        games.deleteData(deleteId);
        var containerDeleted = event.target.parentElement;
        container.removeChild(containerDeleted);
      });
    }
  }).catch(function() {
    alert("Something went wrong on GamesListviews");
  });
  
  //create new game
  var createButton = document.querySelector("[name='create']");
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
  });
}