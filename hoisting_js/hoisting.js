var a = 100;
a =200;
console.log(a);

var b;
var b="simple"
console.log(b);
b='not simple';

let c =200;
// let c ="안녕";
console.log(c);
// 재선언 시 오류 발생

const d = "졸려";
console.log(d);
// d ="좀 배고프기도";
// console.log(d); -> const는 값 변경 안됨

// const e;
// e=100;
// console.log(e);
// const는 값 바로 할당해야함

for(let i=0;i<3;i++){
    // let let_sum = 0;
    // let_sum+=i; -> 블록 스코프이기 때문에 오류 발생 -> const도 동일

    var var_sum =0;
    var_sum+=i;
}

//console.log(let_sum);
console.log(var_sum);