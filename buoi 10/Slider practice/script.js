let images = document.querySelectorAll(".slide");
let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");
let index = 0;

console.log(images);

//reset
function reset() {
  // Cách 1:
  //   images.forEach(function (item) {
  //     item.style.display = "none";
  //   });

  // Cách 2:
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
}

// start
function startSlide() {
  reset();
  images[0].style.display = "block";
}

// show right image
function rightImage() {
  reset();
  images[index + 1].style.display = "block";
  index++;
  // // Bằng với  index = index + 1;
  console.log(`index nummber : ${index}`);
}

// event
arrowRight.addEventListener("click", clickRight);

function clickRight() {
  if (index === images.length -1) {
    index = - 1;
  }
  rightImage();
}

// show left image
function leftImage() {
    reset();
    images[index - 1].style.display = "block";
    index--;
    // // Bằng với  index = index - 1;
    console.log(`index nummber : ${index}`);
  }
  

  // event
  arrowLeft.addEventListener("click", clickLeft);
  
  function clickLeft() {
    if (index === 0) {
        index = images.length;
    }
    leftImage();
  }

startSlide();

// // let image = document.querySelectorAll(".slide");
// // let arrowLeft = document.querySelector(".arrow-left");
// // let arrowRight = document.querySelector(".arrow-right");
// // let current = 0;
// function reset() {
//   images.forEach(function (item) {
//     item.style.display = "none";
//   });
//   //   for (let i = 0; i < images.length; i++) {
//   //     images[i].style.display = "none";
//   //   }
// }
// function startSlide() {
//   reset();
//   images[0].style.display = "block";
// }
// function slideLeft() {
//   reset();
//   images[index - 1].style.display = "block";
//   index = index - 1;
//   //   index--;
// }
// function slideRight() {
//   reset();
//   images[index + 1].style.display = "block";
//   index = index + 1;
//   //   index++
// }
// arrowLeft.addEventListener("click", function () {
//   if (index === 0) {
//     index = images.length;
//   }
//   slideLeft();
// });
// arrowRight.addEventListener("click", function () {
//   if (index === images.length - 1) {
//     index = -1;
//   }
//   slideRight();
// });
// startSlide();
