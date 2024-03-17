// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function (num) {
//     return num % 2 === 0;
//   });
// }

const filterOutOdds = (...num) => num.filter((v) => v % 2 === 0);

//findMin
const findMin = (...nums) => Math.min(...nums)
//mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

//Slice and Dice
