const numberRange = document.querySelector("input #rangeNumber");
const choosedNumer = document.querySelector("input #number");
const play = document.querySelector("input #play");

function clickBtn(){
    preventDefault();
    //numberRange 범위값, chooseNumber 값 가져오기
    //비교하기
    //비교한 값 출력
    //승패 알리기
}

play.addEventListener("click", clickBtn);

/*
0에서 사용자가 지정한 숫자까지의 범위에서 랜덤 한 숫자를 찾으세요.(범위는 0 이상 입력값 이하가 됩니다.)
범위에는 음수가 포함될 수 없습니다.
실시간으로 범위 값을 업데이트해야 합니다.
유저가 숫자를 선택한 후에 게임을 플레이할 수 있습니다.
유저에게 게임의 승패를 알려야 합니다.*/