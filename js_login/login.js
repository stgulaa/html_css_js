const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
/*function btnclick(){
    //console.dir(loginInput);
    const username = loginInput.value;
    if(username===""){
        alert("이름을 적어주세요");
    }
    //else if(username.length < 9){
        //alert("글자수는 8글자 이하으로 해주세요");
    //}//html에서 require maxlength를 맞춰주는 것이 더 좋음
    else{
        console.log(username);
    }
}

loginButton.addEventListener("click", btnclick);
*/
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = `안녕하세요 ${username}님 환영합니다.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);