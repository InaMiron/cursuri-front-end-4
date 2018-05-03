window.onload = onHtmlLoaded;

function onHtmlLoaded() {
  getPosts(); 
}

function getPosts () {
  $.ajax('https://jsonplaceholder.typicode.com/posts', {
    success: function(response) {
      console.log("LIST =", response);
      
      for ( var i = 0; i < response.length; i ++) {
        var post = response[i];
        $.ajax('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments', {
          success: function(comments) {
            console.log("COMMENTS = ", comments);
            
          }
        })
      }
    }
  })
}