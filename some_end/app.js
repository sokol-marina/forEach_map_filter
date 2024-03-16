const array = [1, 2, 3, 4, 5, 6];

function MySome(arr, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, arr)) return true; // returns o;y
  }
  return false;
}
MySome(array, function (n) {
  return n > 5;
});

function MyEvery(arr, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, arr)) return false;
  }
  return true;
}
MyEvery(array, function (n) {
  return n > 5;
});

function hasOddNumber(arr) {
  return arr.some(function (el) {
    return el % 2 !== 0;
  });
}

function hasAZero(num) {
  return num
    .toString()
    .split("")
    .some(function (el) {
      return el == "0";
    });
}

function hasOnlyOddNumbers(arr) {
  return arr.every(function (el) {
    return el % 2 !== 0;
  });
}
//hasNoDuplicates([1,2,3])

function hasNoDuplicates(arr) {
  return arr.every(function (val) {
    return arr.indexOf(val) === arr.lastIndexOf(val);
  });
}

function hasCertainKey(arr, key){
    return arr.every(function(el){
        return key in arr
    })
}

function hasCertainValue(arr, key, val){
    return arr.every(function (el){
return el[key] == val
    })
}