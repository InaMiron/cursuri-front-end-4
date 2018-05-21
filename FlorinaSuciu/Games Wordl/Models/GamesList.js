function GamesList() {
  this.items = [];
}

var url =  "https://games-world.herokuapp.com";

GamesList.prototype.fetchData = function() {
  var that = this;
  return $.ajax(url + "/games", {
    method: "GET",
    success: function(response) {
      for(var i = 0; i < response.length; i++) {
        var gameItem = response[i];
        console.log(gameItem);
        var gameModel = new Game();
        gameModel._id = gameItem._id;
        gameModel.title = gameItem.title;
        gameModel.imageUrl = gameItem.imageUrl;
        gameModel.description = gameItem.description;
        that.items.push(gameModel);
      }
    },
    error: function() {
      console.log("Something went wrong when fetching games");
    }
  })
}