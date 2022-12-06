let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

// console.log(new Date("Tue Nov 22 2022 11:00:00"))

// let today = new Date();
// let otherTime = new Date ("Jan 1 2023 00:00:00");
// // let otherTime = new Date ("Jan 01 2023 00:00:00");
// let diff = (otherTime - today)/1000;
// console.log(diff);

function countdown() {
  let today = new Date();
  let currentYear = today.getFullYear();
  let newYear = new Date(`Jan 1 ${currentYear + 1} 00:00:00`);
  let diff = (newYear - today) / 1000;
  //   console.log(diff);
  let d = Math.floor(diff / (60 * 60 * 24));
  let h = Math.floor(diff / 60 / 60) % 24;
  let m = Math.floor((diff / 60) % 60);
  let s = Math.floor(diff % 60);

//   console.log(d, h, m, s);

  minutes.innerText = `${addZero(m)}`;
  seconds.innerText = `${addZero(s)}`;
  days.innerText = `${addZero(d)}`;
  hours.innerText = `${addZero(h)}`;

  setTimeout(countdown, 1000);
}
countdown();
function addZero(number) {
  return number < 10 ? "0" + number : number;
}

// Tự làm (coi lại phần toán)
// let diff = otherTime - today;
// console.log(diff);
// function countdown(){
//     let day = Math.floor(diff / (1000 * 60 * 60 * 24));
//     let hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let min = Math.floor((diff % (1000*60*60))/(1000*60));
//     let sec = Math.floor((diff % (1000*60)/1000));
//     minutes.innerText = `${addZero(min)}`;
//     seconds.innerText = `${addZero(sec)}`;
//     days.innerText = day;
//     hours.innerText = hour;
// }
// countdown();

// function addZero(number){
//   return number < 10 ? "0" + number : number;
// }
