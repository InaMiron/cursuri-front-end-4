 window.onload = function() {
   var currentGame = new GameDetails();
   var gameDetailsContainer = document.getElementById("gameDetailsContainer");
   var currentGameId = getUrlParameter("gameId");
   currentGame.fetchData(currentGameId).then(function(response) {
     //display game title
     var gameTitle = document.createElement("h3");
     gameTitle.innerHTML = response.title;
     gameDetailsContainer.appendChild(gameTitle);
     //display game image
     var gameImage = document.createElement("img");
     gameImage.setAttribute("src", response.imageUrl);
     gameDetailsContainer.appendChild(gameImage);
     //display game id
     var gameId = document.createElement("p");
     gameId.innerHTML = "Id: " + response._id;
     gameDetailsContainer.appendChild(gameId);
     //display game release date
     var gameReleaseDate = document.createElement("p");
     gameReleaseDate.innerHTML = "Release Date: " + response.releaseDate;
     gameDetailsContainer.appendChild(gameReleaseDate);
     //display game genre
     var gameGenre = document.createElement("p");
     gameGenre.innerHTML = "Genre: " + response.genre;
     gameDetailsContainer.appendChild(gameGenre);
     //display game publisher
     var gamePublisher = document.createElement("p");
     gamePublisher.innerHTML = "Publisher: " + response.publisher;
     gameDetailsContainer.appendChild(gamePublisher);
     //display game description
     var gameDescription = document.createElement("p");
     gameDescription.innerHTML = "Description: " + response.description;
     gameDetailsContainer.appendChild(gameDescription);
    // create edit button
    var editButton = document.createElement("button");
    editButton.classList.add("btn");
    editButton.classList.add("btn-danger"); 
    editButton.setAttribute("id", response._id);
    editButton.innerHTML = "Edit";
    gameDetailsContainer.appendChild(editButton);
    //edit info game
    editButton.addEventListener("click", function(event) {
      event.preventDefault();
      var form = document.getElementById("gameDetails");
      $(form).show();
      console.log(event.target);
      var editId = event.target.getAttribute("id");
      console.log(editId);
      document.querySelector("[name='title']").setAttribute("value", response.title);
      document.querySelector("[name='releaseDate']").setAttribute("value", response.releaseDate);
      document.querySelector("[name='genre']").setAttribute("value", response.genre);
      document.querySelector("[name='publisher']").setAttribute("value", response.publisher);
      document.querySelector("[name='imageUrl']").setAttribute("value", response.imageUrl);
      document.querySelector("[name='description']").innerHTML = response.description;
   });
   //update game
    var updateButton = document.querySelector("[name='update']");
    console.log(updateButton);
    var updateId = response._id;
    console.log(updateId);
    updateButton.addEventListener("click", function(event) {
      event.preventDefault();
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
       updateGame.updateData(updateId, data);
    });
  }).catch(function() {
     alert("Something went wrong on GameDetailsView");
   });
   
   function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
}                                              