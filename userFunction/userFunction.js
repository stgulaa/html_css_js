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


function Wizard(name, card, wand){
    this.name=name;
    this.card=card;
    this.wand=wand;
    this.magic= function(){ //메서드
        console.log("뭔가 대단해 엄청나 마법");
    }
}
const magicGirl = new Wizard('체리','크로우카드', '닭봉');
magicGirl.magic();