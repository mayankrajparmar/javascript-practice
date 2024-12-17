const data = [2, [2, 5, 6], 3, [1, 2], 84, 3];

// for array sort method
function sorting(data) {
  const arr = [];
  debugger;
  for (let i = 0; i < data.length; i++) {
    // console.log(i);
    if (arr.length == 0) {
      arr.push(data[i]);
    } else
      for (let j = 0; j < arr.length; j++) {
        // if
        if (data[i] > arr[j] && arr.length - 1 == j) {
          arr.push(data[i]);
          // if data[i] is greater than arr[j] but arr.length-1 is equal to j+1
        } else if (data[i] > arr[j] && data[i] <= arr[j + 1]) {
          arr.splice(j + 1, 0, data[i]);
        } else if (data[i] < arr[j] && j == 0) {
          arr.unshift(data[i]);
        }
      }
  }
  return arr;
}

console.log(sorting(data));

//for array flat method

function flatArr(data) {
  let arr = [];
  debugger;
  for (let i = 0; i < data.length; i++) {
    if (Array.isArray(data[i])) {
      for (let j = 0; j < data[i].length; j++) {
        arr.push(data[i][j]);
      }
    } else arr.push(data[i]);
  }
  return arr;
}

console.log(flatArr(data));
