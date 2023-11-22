//Array methods
//ko'pgina ma'lumotlarni tartiblangan to'plami
let arr = [1, 2, 3, 4, 5];

let array = ["Hello", "GeeksforGeeks", "JavaScript"];
array.push("React");
console.log(array); //[("Hello", "GeeksforGeeks", "JavaScript", "React")];

array = ["Hello", "GeeksforGeeks", "JavaScript"];
let lastElement = array.pop();
console.log(lastElement); //JavaScript
console.log(array); //  [("Hello", "GeeksforGeeks")];

array = ["Hello", "GeeksforGeeks", "JavaScript"];
let firstElement = array.shift();
console.log(firstElement); //Hello
console.log(array); //[("GeeksforGeeks", "JavaScript")];

array = ["Hello", "GeeksforGeeks", "JavaScript"];
array.unshift("React");
console.log(array); //[("React", "Hello", "GeeksforGeeks", "JavaScript")];

array = ["Hello", "GeeksforGeeks", "JavaScript"];
console.log(array.indexOf("GeeksforGeeks")); //1;

array = ["Hello", "GeeksforGeeks", "JavaScript"];
console.log(array.includes("GeeksforGeeks")); // true;
console.log(array.includes("React")); // false;

let firstArray = ["Hello", "GeeksforGeeks", "JavaScript"];
let secondArray = ["React"];
let newArray = firstArray.concat(secondArray);
console.log(firstArray); //["Hello", "GeeksforGeeks", "JavaScript"]
console.log(secondArray); //["React"]
console.log(newArray); //[("Hello", "GeeksforGeeks", "JavaScript", "React")];

array = ["Hello", "GeeksforGeeks", "JavaScript"];
array.forEach(function (element) {
  console.log(element); //1.Hello 2.GeeksforGeeks 3.JavaScript
});

array = ["Hello", "GeeksforGeeks", "JavaScript"];
console.log(array); //[ 'Hello', 'GeeksforGeeks', 'JavaScript' ]
array.sort();
console.log(array); //[ 'GeeksforGeeks', 'Hello', 'JavaScript' ]

let oldArray = [1, 2, 3, 4, 5];
console.log(oldArray); //[ 1, 2, 3, 4, 5 ]
let newArray1 = oldArray.map(function (element) {
  return element * 5;
});
console.log(newArray1); //[ 5, 10, 15, 20, 25 ]

oldArray = [1, 2, 3, 4, 5];
console.log(oldArray); //[ 1, 2, 3, 4, 5 ]
let sumOfElements = oldArray.reduce(function (accumulator, element) {
  return accumulator + element;
});
console.log(sumOfElements); //15

oldArray = [1, 2, 3, 4, 5];
console.log(oldArray); //[ 1, 2, 3, 4, 5 ]
let filteredArray = oldArray.filter(function (element) {
  return element % 2 === 0;
});
console.log(filteredArray); //[2,4]

arr = [1, 2, 3, 4, 5];
let findElement = arr.find(function (element) {
  return element > 4;
});
console.log(findElement); //5 shartga javob bergan 1-element

let findIndexValue = arr.findIndex(function (element) {
  return element >= 4;
});
console.log(findIndexValue); //3 shartga javob bergan 1-element indeksi

arr = [1, 2, 3, 4, 5];
let sliceArray = arr.slice(0, 2); //slice() asl massiv elementlariga ta'sir qilmasdan belgilangan miqdordagi elementlarni tanlayd
console.log("Slice Array: " + sliceArray); //Slice Array: 1,2

console.log("Original Array: " + arr); //Original Array: 1,2,3,4,5

let spliceArray = arr.splice(0, 2); //splice() esa tanlangan elementlarni asl massivning o'zidan olib tashlaydi.
console.log("Slice Array: " + spliceArray); //Slice Array: 1,2
console.log("Original Array: " + arr); //Original Array: 3,4,5

arr = [1, 2, 3, 4, 5];
let NumbersGreaterThanZero = arr.every(function (element) {
  return element > 0; //har bir elementi
});
let NumbersLessThanZero = arr.some(function (element) {
  return element < 0; //biror bir elementi
});
console.log(NumbersGreaterThanZero); //true
console.log(NumbersLessThanZero); //false

const elements = ["Fire", "Air", "Water"];
console.log(elements.join()); // expected output: "Fire,Air,Water"
console.log(elements.join("")); // expected output: "FireAirWater"
console.log(elements.join("-")); // expected output: "Fire-Air-Water"

//! Careful: reverse is destructive -- it changes the original array.
const array1 = ["one", "two", "three"];
console.log("array1:", array1); // expected output: "array1:" Array ["one", "two", "three"]
const reversed = array1.reverse();
console.log("reversed:", reversed); // expected output: "reversed:" Array ["three", "two", "one"]
console.log("array1:", array1); // expected output: "array1:" Array ["three", "two", "one"]

const array2 = [5, 12, 8, 130, 44];
let index = 2;
console.log(
  `Using an index of ${index} the item returned is ${array2.at(index)}`
);
// expected output: "Using an index of 2 the item returned is 8"
index = -2;
console.log(`Using an index of ${index} item returned is ${array2.at(index)}`);
// expected output: "Using an index of -2 item returned is 130"

/**


































*/
// let arrayy = [1, 2, 3, 4, 5];
// for (let i = 0; i < arrayy.length; i++) {
//   let k = 1;
//   for (let j = 0; j < arrayy.length; j++) k *= j;
//   arrayy[i] = k;
// }
// for (let i = 0; i < arrayy.length; i++) console.log(arrayy[i]);
/*
let kiritilganRaqam = 7;
let raqamlarSozlarda = [
  "nol",
  "bir",
  "ikki",
  "uch",
  "tort",
  "besh",
  "olti",
  "yetti",
  "sakkiz",
  "toqqiz",
];
console.log(raqamlarSozlarda[kiritilganRaqam]); */
// for (let i = 0; i < raqamlarSozlarda.length; i++) {
//   if (kiritilganRaqam === 0) {
//     console.log(raqamlarSozlarda[0]);
//   }
//   if (kiritilganRaqam === 1) {
//     console.log(raqamlarSozlarda[1]);
//   }
//   if (kiritilganRaqam === 2) {
//     console.log(raqamlarSozlarda[2]);
//   }
//   if (kiritilganRaqam === 3) {
//     console.log(raqamlarSozlarda[3]);
//   }
//   if (kiritilganRaqam === 4) {
//     console.log(raqamlarSozlarda[4]);
//   }
//   if (kiritilganRaqam === 5) {
//     console.log(raqamlarSozlarda[5]);
//   }
//   if (kiritilganRaqam === 6) {
//     console.log(raqamlarSozlarda[6]);
//   }
//   if (kiritilganRaqam === 7) {
//     console.log(raqamlarSozlarda[7]);
//   }
//   if (kiritilganRaqam === 8) {
//     console.log(raqamlarSozlarda[8]);
//   }
//   if (kiritilganRaqam === 9) {
//     console.log(raqamlarSozlarda[9]);
//   }
// }

// let kiritilganGap = "salom dunyo men darsdaman";
// console.log(kiritilganGap.split(" ").length);

let kiritilganSon = 10,
  hosilQilinganMassiv = [];
for (let i = 0; i < kiritilganSon; i++) {
  hosilQilinganMassiv[i] = i + 1;
}
console.log(hosilQilinganMassiv);
