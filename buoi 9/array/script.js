// let array [];
// console.log(array);

// let fruit = [];
// console.log(fruit);

// fruit[0] = "apple";
// console.log (fruit);

// fruit[1] = "banana";
// console.log (fruit);

// fruit[5] = "mango";
// console.log (fruit);

// fruit[1] = "grape";
// console.log (fruit);

// fruit[3] = "melon";
// console.log (fruit);

// let number = [10, 20, 30, 40, 50];

// console.log(number);
// console.log(number[0]);
// console.log(number[3]);

// let arr = [
//   "banana",
//   "apple",
//   1,
//   2,
//   3,
//   true,
//   false,
//   { name: "Tae Hoon", age: 32, home: "Binh Thanh" },
// ];
// console.log(arr);

// let taehoon = {
//   name: "Tae Hoon",
//   age: 32,
//   home: "Binh Thanh",
// };

// let colors = ["red", "pink", "yellow"];

// colors.push("green");
// console.log(colors);
// // ["red","pink","yellow","green"];

// colors.push("black");
// console.log(colors);
// // ["red","pink","yellow","green","black"];

// // colors.unshift("yellow");
// // console.log(colors);

// colors.pop("pink");
// console.log(colors);

// colors.shift("green");
// console.log(colors);

// // ["red","pink","yellow","green"];
// colors.splice(1,2);
// console.log(colors);
// //--> ["red", "green"];

// // ["red","pink","yellow","green"];
// colors.splice(1,2, "orange");
// console.log(colors);
// //--> ["red", "orange", "green"];

// // ["red","pink","yellow","green"];
// colors.splice(1,0, "orange");
// console.log(colors);
// //--> ["red","pink","orange","yellow","green"];

// let nameList = ["Tae Hoon", "Trang", "Phuc", "Huy", "Hien"];
// // nameList.forEach(function (item) {
// //     console.log(`Hello ${item}, Nice to meet you`);
// // })

// let number = [1, 2, 3, 4, 5];
// let data2 = number.map(function (item) {
//     return item *3
// });
// console.log(data2);

// let nameList = ["Tae Hoon", "Trang", "Phuc", "Huy", "Hien"];
// let data3 = nameList.filter(function (item) {
//     return item.startsWith("H")
// });
// console.log(data3);

// let data4 = nameList2.filter(function (item) {
//   return item.age > 25;
// });
// console.log(data4);

// let data5 = nameList.some(function (item) {
//   return item.startsWith("T");
// });
// console.log(data5);

// let data6 = nameList.find(function (item) {
//   return item.startsWith("T");
// });
// console.log(data6);


// let data6 = nameList2.find(function (item) {
//   return item.startsWith("T");
// });
// console.log(data6);

// let nameList = ["Tae Hoon", "Trang", "Phuc", "Huy", "Hien"];

let nameList2 = [
  { name: "Tae Hoon", age: 32 },
  { name: "Trang", age: 20 },
  { name: "Phuc", age: 26 },
];

let data7 = nameList2.findIndex(function (item) {
  return item.name.startsWith("T");
});
console.log(data7);

// let data8 = nameList2.findIndex(function (item) {
//   return item.age > 20;
// });
// console.log(data8);

// let data8 = nameList2.findIndex(function (item) {
//   return item.age === 20;
// });
// console.log(data8);

// for(let i = 1; i <=10; i++) {
//   console.log(i);
// }
// i thứ 1 là biến bất kỳ bắt đầu 0 hoặc 1
// i thứ 2 là số lần muốn lặp lại
// i thứ 3 i++ (tăng) hoặc i-- (giảm)


// // In lên console những số dương
// for(let i = 1; i <=100; i++) {
//   if (i % 2 === 0) {
//   console.log(i);
//   }
// }
// // hoặc là 
// for(let i = 1; i < 51; i++) {
//   console.log(i*2)
// }

// // In lên console những số âm
// for(let i = 1; i <=100; i++) {
//   if (i % 2 === 1) {
//   console.log(i);
//   }
// }




