function Game() {
  this._id = null;
  this.title = "";
  this.imageUrl = "";
  this.description = "";
}

function GameDetails() {
  this._id = null;
  this.title = "";
  this.releaseDate = null;
  this.genre = "";
  this.publisher = "";
  this.imageUrl = "";
  this.description = "";
}

var url =  "https://games-world.herokuapp.com";

GameDetails.prototype.fetchData = function(gameId) {
  var that = this;
  return $.ajax(url + "/games/" + gameId, {
    method: "GET",
    success: function(response) {
      var gameModel = new GameDetails();
      gameModel._id = response._id;
      gameModel.title = response.title;
      gameModel.releaseDate = response.releaseDate;
      gameModel.genre = response.genre;
      gameModel.publisher = response.publisher;
      gameModel.imageUrl = response.imageUrl;
      gameModel.description = response.description;
   },
    error: function(xhr) {
      alert("Something went wrong with fetching game details.");
    },
  })
}

GameDetails.prototype.createData = function(data) {
  var that = this;
  return $.ajax(url + "/games", {
    method: "POST",
    data:data,
    success: function(response) {
      console.log("Create game= ", response);
    },
    error: function(xhr) {
      alert("Something went wrong creating game");
    }
  })
}

GameDetails.prototype.updateData = function(gameId, data) {
  var that = this;
  return $.ajax(url + "/games/" + gameId, {
    method: "PUT",
    data: data,
    success: function(response) {
      alert("Game was successfully updated!");
      location.reload(true);
    },
    error: function(xhr) {
//      alert("Something went wrong updating game");
    }
  })
}                

