const quotes = [
    {
        quote : "오직 너 말곤 두 눈을 가린 어둠 속에 갇혀버린 마음이", author : "불어온다 - 하이라이트"
    },
    {
        quote : "내 안의 호랑이", author : "호랑이 - Super M"
    },
    {
        quote : "찌질이 찌질이 머저리 겉절이", author : "빛나리 - 펜타곤"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const arrayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = arrayQuote.quote;
author.innerText = arrayQuote.author;