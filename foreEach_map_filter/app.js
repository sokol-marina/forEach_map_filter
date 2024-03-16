// forEach

//doubleValues

const nums = [1, 2, 3];

function doubleValues(arr) {
  let newArr = [];
  arr.forEach(function (val) {
    newArr.push(val * 2);
  });
  return newArr;
}
// onlyEvenValues FOREACH

function onlyEvenValues(arr) {
  const newArr = [];
  arr.forEach((val) => {
    if (val % 2 == 0) {
      newArr.push(val);
    }
  });
  return newArr;
}

// onlyEvenValues filter
function onlyEvenValuesFilter(arr) {
  return arr.filter(function (val) {
    if (val % 2 == 0) {
      return val;
    } else {
      return null;
    }
  });
}

//showFirstAndLast foreach

const strArr = ["colt", "matt", "tim", "test"];
function showFirstAndLast(arr) {
  const firstAndLastChars = [];
  let chars;
  strArr.forEach((val, inx) => {
    for (let i = 0; i < val.length; i++) {
      chars = val[0] + val[val.length - 1];
    }
    firstAndLastChars.push(chars);
  });
  return firstAndLastChars;
}

//showFirstAndLast map

function showFirstAndLastMap(arr) {
  //return arr.map(val => val[0] + val[val.length - 1])
  return arr.map(function (val) {
    return (val = val[0] + val[val.length - 1]);
  });
}
//addKeyAndValue
const employees = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];
const title = "title";
const value = "instructor";
function addKeyAndValue(arr, key, value) {
  return arr.map(function (arr) {
    arr[key] = value;
    return arr;
  });
}

//vowelCount
const str = "Elie"; // {e:2,i:1};

function vowelCount(str) {
  const vowels = "aeiou";
  const result = {};
  str = str.toLowerCase();
  str.split("").forEach((char) => {
    if (vowels.indexOf(char) !== -1) {
      if (result[char]) {
        result[char] += 1;
      } else {
        result[char] = 1; // Initialize with 1 if this is the first occurrence of the vowel
      }
    }
  });

  return result;
}
// map

function doubleValuesWithMap(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

//valTimesIndex

function valTimesIndex(arr) {
  return arr.map(function (value, index) {
    return value * index;
  });
}

function extractKey(arr) {
  return arr.map(function (val) {
    return (val = val.name);
  });
}

function extractFullName(arr) {
  return arr.map(function (val) {
    return val.first + " " + val.last;
  });
}

// filter

const arr = [
  { first: "Elie", last: "Schoppik" },
  { first: "Tim", last: "Garcia", isCatOwner: true },
  { first: "Matt", last: "Lane" },
  { first: "Colt", last: "Steele", isCatOwner: true },
];
const key = "isCatOwner";

function filterByValue(arr, key) {
  return arr.filter(function (val) {
    if (val[key] == true) {
      return val;
    } else {
      return null;
    }
  });
}
const elements = [1, 2, 3, 4, 5];

function find(arr, val) {
  return arr.filter(function (el) {
    return el == val ? el : undefined;
  });
}

const exp =  [{first: 'Elie', last:"Schoppik"},
{first: 'Tim', last:"Garcia", isCatOwner: true},
{first: 'att', last:"Lane"},
{first: 'Colt', last:"Steele", isCatOwner: true}]

const isCat = 'isCatOwner'
const cat = true

function findInObj(arr,key, value){
    return arr.find(function(el){
        return el[key] == value ? el: null
      
    })
}
function removeVowels(str){
str = str.toLowerCase().split('');
const vowels = "aeiou";
let arr =  str.filter(function(el){
    if (vowels.indexOf(el)!==0){
        return el
    }else{return null}
})
return arr.join('')
}
function doubleOddNumbers(arr){ 
    return arr .filter(function(val) {
      return val % 2 !== 0;
    }).map(function(val) {return val * 2;
    });
}
