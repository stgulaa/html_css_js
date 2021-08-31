const form = document.querySelector("form");
const numberRange = document.querySelector("#rangeNumber");
const choosedNumer = document.querySelector("#number");
const progress = document.querySelector("#progress");
const outcome = document.querySelector("#outcome");

function clickBtn(event){
    event.preventDefault();
    const setNumberRange = numberRange.value;
    const setChoosedNumber = choosedNumer.value;
    const randomNum = Math.ceil(Math.random()*setNumberRange);
    /*console.log(randomNum);
    console.log(setChoosedNumber);
    console.log(setNumberRange);*/
    //비교하여 승패
    if(randomNum==setChoosedNumber){
        outcome.innerText = "you Win!"
    }
    else{
        outcome.innerText = "you Lose!"
    }
    //비교한 값 출력
    progress.innerText="You chose : " + setChoosedNumber+", the machine chose "+randomNum;
    
}

form.addEventListener("submit", clickBtn);