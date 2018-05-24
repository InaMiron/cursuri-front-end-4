 window.onload = function() {
   var currentGame = new GameDetails();
   var gameDetailsContainer = document.getElementById("gameDetailsContainer");
   var currentGameId = getUrlParameter("gameId");
   currentGame.fetchData(currentGameId).then(function(response) {
     //display game title
     var gameTitle = document.createElement("h3");
     gameTitle.innerHTML = response.title;
     gameDetailsContainer.appendChild(gameTitle);
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
     //display game image
     var gameImage = document.createElement("img");
     gameImage.setAttribute("src", response.imageUrl);
     gameDetailsContainer.appendChild(gameImage);
     //display game description
     var gameDescription = document.createElement("p");
     gameDescription.innerHTML = "Description: " + response.description;
     gameDetailsContainer.appendChild(gameDescription);
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