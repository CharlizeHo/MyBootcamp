const key = "ca70d99428adeaf10afa82c2";

let currencyElement_1 = document.getElementById("currency-1");
let currencyElement_2 = document.getElementById("currency-2");
let amountElement_1 = document.getElementById("amount-1");
let amountElement_2 = document.getElementById("amount-2");
let rateElement = document.getElementById("rate");

// currency 1 & 2
currencyElement_1.addEventListener("change", exchange);
currencyElement_2.addEventListener("change", exchange);
// amount 1
amountElement_1.addEventListener("input", exchange);

// function currency 1
function exchange(event) {
  console.log(event);
  // console.log(event.target.value);
  //   let currency_1 = event.target.value;
  let currency_1 = currencyElement_1.value;
  let currency_2 = currencyElement_2.value;

  fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/${currency_1}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let rate = data.conversion_rates[currency_2];
      console.log(currency_2, rate);

      amountElement_2.value = amountElement_1.value * rate
      rateElement.innerText = `1 ${currency_1} = ${rate} ${currency_2}`;
    });
}

// button
button.addEventListener("click", swap);

function swap() {
    let box = currencyElement_1.value
    currencyElement_1.value = currencyElement_2.value;
    currencyElement_2.value = box;
    exchange();
}