window.onload = function() {
var currentPost = new Post();
var currentPostId = getUrlParameter("postId");
//console.log(currentPostId);
currentPost.fetchData(currentPostId).then(function() {
  //console.log(currentPost);
  var postDetailsContainer = document.getElementById("post-details");
  //create title HTML node and populate it with currentPostData
  var postTitleEl = document.createElement("h3");
  postTitleEl.innerHTML = currentPost.title;
  postDetailsContainer.appendChild(postTitleEl);
  //create body HTML node and populate it with currentPostData
  var postBodyEl = document.createElement("p");
  postBodyEl.innerHTML = currentPost.body;
  postDetailsContainer.appendChild(postBodyEl);
}).catch(function() {
  console.log("Something went wrong on Post Details View");
});
  
  var commentsList = new Comments();
  //console.log(commentsList);
  commentsList.fetchData(currentPostId).then(function() {
    for(var i = 0; i < commentsList.comments.length; i++) {
      //console.log(commentsList.comments[i]);
       var commentDetailsContainer = document.getElementById("comment-details");
       var commentName = document.createElement("h4");
       commentName.innerHTML = commentsList.comments[i].name;
       var commentEmail = document.createElement("h4");
       commentEmail.innerHTML = commentsList.comments[i].email;
       var commentBody = document.createElement("p");
       commentBody.innerHTML = commentsList.comments[i].body;
       commentDetailsContainer.appendChild(commentName);
       commentDetailsContainer.appendChild(commentEmail);
       commentDetailsContainer.appendChild(commentBody); 
    }
  })
  
  
/**
     * It retrieves a query (URL) parameter value
     * 
     * It expects you to send the parameter key(before '=')
     * **/
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

}
