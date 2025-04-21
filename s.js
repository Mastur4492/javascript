let arr = [4,5,6,3,2,1];

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
    return true;
  }
}

console.log(isSorted(arr));

