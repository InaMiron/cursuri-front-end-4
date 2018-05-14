window.onload = function() {
  var posts = new PostList();
  posts.fetchData().then(function(){
    //console.log(posts.items.length);
    var containerEl = document.getElementById("container");
    for(var i = 0; i < posts.items.length; i++) {
      var postEl = document.createElement("a");
      postEl.setAttribute("href", "http://cursuri-fsuciue1240.codeanyapp.com/curs18-POO-Workshop/pages/postDetails.html?postId=" + posts.items[i].id);
      //opens a new page
      postEl.setAttribute("target", "blank");
      postEl.innerHTML = posts.items[i].title;
      containerEl.appendChild(postEl);
    }
  }).catch(function(){
    console.log("hope not");
  });
}