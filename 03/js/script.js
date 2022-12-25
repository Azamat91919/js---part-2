const rateEl = document.getElementById("rate");
const swapEl = document.getElementById("swap");
const currencyOneEl = document.getElementById("currency-one");
const currencyTwoEl = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");

let exchangeRates = {};

const mapExchangeRates = () => {
    return new Promise((resolive) => {
        fetch(`https://v6.exchangerate-api.com/v6/41b4541f3df8b629ff6e1018/latest/USD`)
        .then((res) => res.json())
        .then((data) => {
            let ratesRender = "";

            for(key in data.conversion_rates){
                ratesRender +=
                key === "USD"
                ? `<option selected value="${key}">${key}</option`
                :`<option value="${key}">${key}</option>`
            }
        })
    })
}

const getExchangeRates = () => {
    const currencyOne = currencyOneEl.value;
    
    fetch(
        `https://v6.exchangerate-api.com/v6/41b4541f3df8b629ff6e1018/latest/${currencyOne}`
        )
        .then((res) => res.json())
        .then((data) => {
            exchangeRates = { ...data.conversion_rates};
            calculateRates();
        });
    };

    const calculateRates = () => {
        const currencyTwo = currencyTwoEl.value;
        const rate = exchangeRates [currencyTwo];
        const resultCalculate = +amountOne.value * rate;
        amountTwo.value = resultCalculate.toFixed(2);
    };


    const swap = function (){
        let newCurrencyTwo = currencyOneEl.value;
        let newCurrencyOne = currencyTwoEl.value;
        currencyOneEl.value = newCurrencyOne
        currencyTwoEl.value = newCurrencyTwo 
        const newAmoint1 = amountOne.value
        const newAmoint2 = amountTwo.value
        amountOne.value = newAmoint2
        amountTwo.value = newAmoint1
    }
    
    getExchangeRates();
    
    amountOne.addEventListener("input", calculateRates);
    currencyOneEl.addEventListener("change", getExchangeRates);
    currencyTwoEl.addEventListener("change", calculateRates)
    swapEl.addEventListener("click",swap)