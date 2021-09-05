const quotes = [
    {
        quote : "삶이 있는 한 희망은 있다.", author : "키케로"
    },
    {
        quote : "언제나 현재에 집중할 수 있다면 행복할 것이다..", author : "파울로 코엘료"
    },
    {
        quote : "우리를 향해 열린 문을 보지 못하게 된다.", author : "헬렌켈러"
    },
    {
        quote : "절대 어제를 후회하지 마라. 인생은 나 안에 있고 내일은 스스로 만드는 것이다.", author : "L.론허바드"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const arrayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = arrayQuote.quote;
author.innerText = arrayQuote.author;