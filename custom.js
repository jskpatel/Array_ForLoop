"use strict";

// let arrLength = prompt("Enter Array Length");
let arrLength = 15;
console.log("Array Length -> ", arrLength);
var arr = [];
for (let i = 0; i < arrLength; i++) {
  arr[i] = i + 1;
}
console.log([...arr]);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// console.log(arr);

// let start = prompt("Enter start point");
let start = 7;
console.log("start -> ", start);

let arrBeforeStart = arr.slice(0, start);
console.log(arrBeforeStart);

let arrAfterStart = arr.slice(start);
console.log(arrAfterStart);

// let frequency = prompt("Enter frequency point");
let frequency = 2;
console.log("frequency -> ", frequency);
frequency++;

var newArr = [];
for (let i = 0; i < arrAfterStart.length; i++) {
  if (i % frequency === 0) {
    arrAfterStart.splice(i, 0, "frequency");
  }
  newArr[i] = arrAfterStart[i];
}

console.log("Frequency added in array-> ", [...newArr]);

arrBeforeStart.push(...newArr);

console.log("Final Array -> ", arrBeforeStart);
