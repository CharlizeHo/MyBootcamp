// let l1 = "L1";

// function fn1() {
//     function fn2(){
//         function fn3(){
//             let l4 = "L4";
//             console.log(l1, l2, l3, l4)
//         }
//         let l3 = "L3";
//         console.log(l1, l2, l3);
//         fn3();
//     }

//     let l2 = "L2";
//     console.log(l1, l2);

//     fn2();
// }

// fn1();

// function addNumber(addNumberValue) {
//   function haha(add1Value) {
//     return addNumberValue + add1Value;
//   }
//   return haha;
// }

// let add1 = addNumber(1);
// console.log(add1(1));
// console.log(add1(2));

// let add2 = addNumber(2);
// console.log(add2(1));
// console.log(add2(2));

// let a = function (a, b) {
//   console.log(a, b);
// };

// a(2);

//
// function fullNumber(addNumberValue) {
//   function add1Value(addV3) {
//     return addNumberValue + addV3;
//   }
//   return add1Value;
// }

// let add3 = fullNumber(1);
// console.log(add3(3));

// ///
// function showName(firstName, lastName) {
//   let nameIntro = "Your name is:";
//   function fullName() {
//     return nameIntro + firstName + "" + lastName;
//   }
//   return fullName;
// }
// showName("Michael", "Jackson");

///
function celebrityName(firstName) {
  let nameIntro = "This is ";
  function lastName(theLastname) {
    return nameIntro + firstName + " " + theLastname;
  }
  return lastName;
}
let myName = celebrityName("Michael");
myName ("Jackson");

