//ES6 classes are not hoisted
// const currentPost = new Post();
// console.log(currentPost);
class Post {
  constructor() {
    this.id = null;
    this.title = "";
    this.body = "";
    this.userId = null;
  }
  
//   constructor() {
//     console.log("bmn");
//   }
  
  //class/prototype methods
  fetchData(id) {
    return $.ajax("https://jsonplaceholder.typicode.com/posts/" + id, {
      method:"GET",
      success: (data) => {
        console.log(this);
        this.id = data.id;
        this.title = data.title;
        this.body = data.body;
        this.userId = data.userId;
      },
      error: () => {
        alert("Something went wrong when fetching Post details")
      }
    })
  }
  
  get getTitle() {
    return this.title.toUpperCase();
  }
  
  set bodySetter(bodyText) {
    if(bodyText) {
    this.body = bodyText;
    } else {
      this.body = "Lorem ipsum";
    }
  }
  
  static formatText(textToFormat) {
    return textToFormat + "...";
  }
}

const currentPost = new Post();
//call/invoke class method
currentPost.fetchData(4).then((response) => {
  console.log(response);
})
currentPost.title = "Some string";
currentPost.body = "hdgfhjhbn";
//call getters
console.log(currentPost.getTitle);
//call setter
currentPost.body = "Summer body";
console.log("Setter with text", currentPost.body);

currentPost.bodySetter = "";
console.log("Setter whitout text", currentPost.body);


console.log(currentPost.title);
console.log(currentPost);

//call static methods
const formattedText = Post.formatText(currentPost.body);
currentPost.body = formattedText;
console.log(currentPost.body);
console.log(formattedText);

//Class inheritance
class Animal {
  constructor() {
    this.name = "";
    this.age = 0;
    this.height = 0;
  }
  
  speak() {
    alert("Speaking like an animal");
  }
  
  eat() {
    console.log("Nom Nom!");
  }
}

class Dog extends Animal {
  constructor() {
    // needs to be invoke before using "this" in subclasses
    // It calls "constructor" fn from parent Class
    super();
    //class specific attributes
    this.breed = "";
  }
  
  playFetch() {
    console.log("I'm happy to play fetch");
  }
  //We are overwritting this method defined in parent class
  speak() {
    console.log("Speaking like a Dog.Ham!");
  }
}

const a = new Animal();
console.log(a);

const d = new Dog();
console.log(d);
//eat method is being invoked from parent class
d.eat();
//name attribute is being used from parent class
d.name;
//breed attribute is being used from subclass
d.breed;
//subclass specific method
d.playFetch();
// a.playFetch(); // playFetch is not defined in parent class

d.speak();
//a.speak();

//challenge
class App {
  constructor() {
    this.id = null;
    this.name = "";
    this.price = 0;
  }
  
  start() {
    console.log("Start");
  }
  
  stop() {
    console.log("Stop");
  }
}

class Game extends App {
  constructor() {
    super();
    this.score = 0;
    this.winners = [];
  }
  
  play() {
    console.log("Play");
  }
}
