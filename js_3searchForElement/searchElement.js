//const title = document.getElementById("something"); //id가져오는 속성

//title.innerText="Got You";

//console.log(title.className);
//innerText를 변경할 수 없다는 error 발생
//title이 존재하지 않아 title 내부의 innerText를 호출하지말라는 이야기
// null 값이라서


const title =document.querySelector("hello h1"); //요소를 css방식으로 검색 가능하게 함
//div 안의 요소를 가져올 수 있게 하는 것 .을 써야 함 .div h1도 가능
//하지만 여러개의 같은 element가 있으면 맨 처음에 쓴 것만 가져옴
const title1 = document.querySelectorAll(".hello h1");
//전부 가져옴 -> 배열형태
console.log(title);
//console.log(title1);

const title2 = document.getElementsByClassName("hello");
//console.log(title);

const title3 = document.getElementsByTagName("h1");
//console.log(title3);