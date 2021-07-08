// const, let, var

const a = 5;
let b = 3;
var myname ="Harry Potter";
console.log("hi, "+ myname);
console.log(a+b);
a=3;
b =7;
myname = "cedric digory"
console.log(a-b);
console.log("hi, "+ myname);

//array
const buy = ["apple", "banana"];
buy.push("pizza");
console.log(buy);
console.log(buy[1]);

//objects
const player = {
    name = "cedric digory",
    point = 10,
    fat : true,
};
console.log(player);
console.log(player.name);
player.name = "harry";
console.log(player.name); // const는 수정 못하는데 객체 안의 값은 player의 값을 변경하는 거라서 가능함
player.domitory = "hofflepuff House"; //객체 내부 내용도 추가 가능

//function
function greeting(){
    console.log("hello");
}