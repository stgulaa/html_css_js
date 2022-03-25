function User(name, age){
    this.name=name;
    this.age=age;
    this.sayName = function(){
        console.log(this.name);
    }
}

let user1 = new User('mike', 30);
let user2 = new User('tom',15);
user1.sayName();