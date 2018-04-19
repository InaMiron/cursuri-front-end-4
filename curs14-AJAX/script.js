$.ajax('https://jsonplaceholder.typicode.com/posts');

$.ajax('https://jsonplaceholder.typicode.com/posts', {
  success: function(response){
    console.log('Am primit lista de posts');
    console.log('Am primit lista de posts', response);
  }
});
  
$.ajax('https://jsonplaceholder.typicode.com/posts/3');
$.ajax('https://jsonplaceholder.typicode.com/posts/3', { method: 'GET' });