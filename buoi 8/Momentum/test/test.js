let time = document.querySelector(".time");
let greeting = document.querySelector(".greeting");
let myName = document.querySelector(".my-name");
let myFocus = document.querySelector(".my-focus");

function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  //   output time
  //   time.innerTEXT = hour + ":" + minute + ":" + second;
  time.innerText = `${hour}:${addZero(minute)}:${addZero(second)}`;
  setTimeout(showTime, 1000);
}
// add zero
function addZero(min) {
  // return min < 10 ? '0' + min : min ;
  if (min < 10) {
    return "0" + min;
  } else {
    return min;
  }
}

function showBackground() {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = "url(/img/nature1.avif)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    greeting.innerText = "Good morning, ";
  } else if (hour < 18) {
    document.body.style.backgroundImage = "url(/img/nature2.avif)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    greeting.innerText = "Good afternoon, ";
  } else {
    document.body.style.backgroundImage = "url(/img/nature3.avif)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    greeting.innerText = "Good night, ";
  }
}

// // get name
function getName() {
  if (localStorage.getItem("name") === null) {
    myName.innerText = "[Enter Name]";
  } else {
    myName.innerText = localStorage.getItem("name");
  }
}

myName.addEventListener("keydown", setName);


// // setName
function setName(event) {
  // console.log(event);
  if (event.key === "Enter") {
    localStorage.setItem("name", event.target.innerText);
    myName.blur();
  } else {
    localStorage.setItem("name", event.target.innerText);
  }
}
function setName(event) {
  if (event.key === "Enter") {
    localStorage.setItem("name", event.target.innerText);
    myName.blur();
  } else {
    localStorage.setItem("name", event.target.innerText);
  }
}
showTime();
showBackground();
getName();
