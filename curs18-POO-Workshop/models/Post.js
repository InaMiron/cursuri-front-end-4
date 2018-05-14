function Post() {
  this.id = null;
  this.title = "";
  this.body = "";
  this.userId = null;
}

Post.prototype.fetchData = function(id) {
  var that = this;
  return $.ajax("https://jsonplaceholder.typicode.com/posts/" + id, {
    method:"GET",
    success: function(data) {
      that.id = data.id;
      that.title = data.title;
      that.body = data.body;
      that.userId = data.userId;
    },
    error: function() {
      alert("Something went wrong when fetching Post details")
    }
  })
}

function Comment() {
  this.id = null;
  this.postId = null;
  this.name = "";
  this.email = "";
  this.body = "";
}

function Comments() {
  this.comments = [];
}

Comments.prototype.fetchData = function (postId) {
  var that = this;
  return $.ajax('https://jsonplaceholder.typicode.com/posts/' + postId +'/comments', {
    method: 'GET',
    success: function(commentsData) {
      for(var i = 0; i < commentsData.length; i++) {
        var commentItem = commentsData[i];
        var commentModel = new Comment();
        commentModel.id = commentItem.id;
        commentModel.postId = commentItem.postId;
        commentModel.name = commentItem.name;
        commentModel.email = commentItem.email;
        commentModel.body = commentItem.body;
        that.comments.push(commentModel);
      }
    },
    error: function(xhr) {
      alert("Something went wrong when fetching posts");
    }
  });
}




