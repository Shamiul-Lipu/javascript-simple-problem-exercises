// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

function findMostFrequentElement(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
      console.log(obj);
    } else {
      obj[arr[i]] += 1;
    }
  }
  let max = 0;
  let maxKey = 0;
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      maxKey = key;
    }
  }
  return maxKey;
}

// console.log(findMostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]));
