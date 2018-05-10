var posts = new PostList();
posts.fetchData().then(function(){
  console.log(posts.items.length);
}).catch(function(){
  console.log("hope not");
})