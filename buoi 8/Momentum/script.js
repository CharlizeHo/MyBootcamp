let time = document.querySelector(".time");
let greeting = document.querySelector(".greeting");
let myName = document.querySelector(".my-name");
let myFocus = document.querySelector(".my-focus");

function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  // output time
  // time.innerText = hour + ":" + minute + ":" + second;
  time.innerText = `${addZero(hour)}:${addZero(minute)}:${addZero(second)}`;
  setTimeout(showTime, 1000);
}

// add zero
function addZero(number) {
  return number < 10 ? "0" + number : number;

  //   Đây là cách dài hơn
  //   if (number < 10) {
  //     return "0" + number;
  //   } else {
  //     return number;
  //   }
}

// show image
function showBackground() {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = "url(./img/nature1.avif)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    greeting.innerText = "Good morning, ";
  } else if (hour < 18) {
    document.body.style.backgroundImage = "url(./img/nature2.avif)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    greeting.innerText = "Good afternoon, ";
  } else {
    document.body.style.backgroundImage = "url(./img/nature2.avif)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    greeting.innerText = "Good night, ";
  }
}

// get name
function getName() {
  if (localStorage.getItem("name") === null) {
    myName.innerText = "[Enter Name]";
  } else {
    myName.innerText = localStorage.getItem("name");
  }
}

// event
myName.addEventListener("keydown", setName);

// set name
function setName(event) {
  // console.log(event);
  if (event.key === "Enter") {
    localStorage.setItem("name", event.target.innerText);
    myName.blur();
    // myName.blur(); khi nhấn Enter sẽ thoát khỏi thanh input
  }
}

// my focus
function getMyFocus() {
  if (localStorage.getItem("do") === null) {
    myFocus.innerText = "";
  } else {
    myFocus.innerText = localStorage.getItem("do");
  }
}

myFocus.addEventListener("keydown", setMyFocus);

function setMyFocus(focus) {
  console.log(focus);
  if (focus.key === "Enter") {
    localStorage.setItem("do", focus.target.innerText);
    myFocus.blur();
  }
}

showTime();
showBackground();
getName();
getMyFocus();

function trang(x, y) {
  return x + y;
}

trang(10, 20); //agru doi so
