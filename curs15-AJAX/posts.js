window.onload = onHtmlLoaded;

function onHtmlLoaded (){
  getPosts();
}
function getPosts() {
  $.ajax('https://jsonplaceholder.typicode.com/posts', { 
  method: 'GET',
  success: function(response) {
    console.log("Get post =", response);
    var html = '';
    for (var i = 0; i < response.length; i++) {
      var item = response[i];
      html += '<article>' + 
        '<h2>' + item.title + '</h2>' +
        '<p>' + item.body + '</p>' +
        '<button data-id="' + item.id + '">Edit</button><button>Delete</button>' +
      '</article>';  
    } 
    var elPosts = document.getElementById("list-posts");
    elPosts.innerHTML = html;
    
  }
});
}
