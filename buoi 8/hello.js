// document.querySelector('button').addEventListener('click',sayBye);
// document.querySelector('input').addEventListener('keyup',sayHello);

// function sayHello(){
//     alert("Hello")
// }

// function sayBye (){
//     console.log('Bye')
// }

// console.log(`"I'm your father"`)
// console.log(document.querySelectorAll)();

// let blackButton = document.querySelector("#black-btn");
// console.log(blackButton);

// blackButton.style.fontSize = "32px";

// let a;
// a = document.querySelector("h1").textContent;
// console.log(a);

// document.querySelector("h1").textContent = "Python";

// let btn = document.getElementById("btn");

// btn.addEventListener("click",changeMode);

// function changeMode() {
//     document.body.style.color = "white";
//     document.body.style.backgroundColor = "black";

// }

// // Adding data
// localStorage.setItem("age",25);

// // Reading data
// localStorage.getItem("key");

// // Removing data
// localStorage.remove("key");

// //Remove all
// localStorage.clear("key");

let btn = document.querySelector(".btn");
btn.addEventListener("click", changeText);

function changeText() {
  if (btn.textContent === "Dark") {
    btn.textContent = "Light";
    document.body.style.backgroundColor = "black";
  } else {
    btn.textContent = "Dark";
    document.body.style.backgroundColor = "white";
  }
}

let a = 70;

a >= 80 ? console.log("B") : console.log("F");

// if (a >= 90) {
//   console.log("A");
// } else if (a >= 80) {
//   console.log("B");
// } else if (a >= 30) {
//   console.log("D");
// } else {
//   console.log("F");
// }
