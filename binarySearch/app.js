function binarySearch(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIndex = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIndex];

    if (middleVal < val) {
      leftIdx = middleIndex + 1;
    } else if (middleVal > val) {
      rightIdx = middleIndex - 1;
    } else {
      return middleIndex;
    }
  }
  return -1;
}
function linearSearch(arr, val) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

// Testing the functions
let testArray = [1, 2, 3, 4, 5, 6, 16, 35];
console.log("Linear Search:", linearSearch(testArray, 35));
console.log("binary Search:", binarySearch(testArray, 35));
// ## **countZeroes**

function countZeroes(arr) {
  let low = 0;
  let high = arr.length - 1;

  // Function to find the first zero using binary search
  function findFirstZero(arr) {
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === 1) {
        low = mid + 1;
      } else if (mid === 0 || arr[mid - 1] === 1) {
        return mid;
      } else {
        high = mid - 1;
      }
    }
    return -1; // If no zero is found
  }

  const firstZeroIndex = findFirstZero(arr);
  if (firstZeroIndex === -1) {
    return 0; // No zeros in the array
  }
  return arr.length - firstZeroIndex;
}
console.log("countZeroes: ", countZeroes([1, 0, 0, 0, 0]));

function sortedFrequency(array, num) {
  // Helper function to find the first index of num
  function findFirstIndex(arr, num) {
      let low = 0;
      let high = arr.length - 1;
      while (low <= high) {
          let mid = Math.floor((low + high) / 2);
          if (arr[mid] < num) {
              low = mid + 1;
          } else if (arr[mid] > num || (mid > 0 && arr[mid - 1] === num)) {
              high = mid - 1;
          } else {
              return mid;
          }
      }
      return -1;
  }

  // Helper function to find the last index of num
  function findLastIndex(arr, num) {
      let low = 0;
      let high = arr.length - 1;
      while (low <= high) {
          let mid = Math.floor((low + high) / 2);
          if (arr[mid] > num) {
              high = mid - 1;
          } else if (arr[mid] < num || (mid < arr.length - 1 && arr[mid + 1] === num)) {
              low = mid + 1;
          } else {
              return mid;
          }
      }
      return -1;
  }

  // Using the helper functions to find first and last indices
  const firstIndex = findFirstIndex(array, num);
  if (firstIndex === -1) return -1;  // num is not found in the array
  const lastIndex = findLastIndex(array, num);
  return lastIndex - firstIndex + 1;
}
console.log("sortedFrequency: ", sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2));

function findRotationCount(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
      let mid = Math.floor((low + high) / 2);
      // Check if the middle element is the minimum
      if (mid > low && arr[mid] < arr[mid - 1]) {
          return mid;
      }
      // Check if the middle+1 element is the minimum
      if (mid < high && arr[mid + 1] < arr[mid]) {
          return mid + 1;
      }
      // Decide whether to go to the left half or the right half
      if (arr[mid] > arr[high]) {
          low = mid + 1;
      } else {
          high = mid - 1;
      }
  }
  return 0; // This case occurs if the array is not rotated at all
}
console.log("findRotationCount: ", findRotationCount([15, 18, 2, 3, 6, 12]));

function findFloor(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  let result = -1;

  while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === x) {
          return arr[mid];  // Direct match
      } else if (arr[mid] < x) {
          result = arr[mid];  // arr[mid] is a potential floor value
          low = mid + 1;
      } else {
          high = mid - 1;
      }
  }
  return result;  // result will be -1 if no floor is found
}

console.log("findFloor: ", findFloor([1,2,8,10,10,12,19], 9));