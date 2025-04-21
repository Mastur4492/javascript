// let arr = [4,5,6,3,2,1];

// function isSorted(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) {
//       return false;
//     }
//     return true;
//   }
// }

// console.log(isSorted(arr));


// function moveZeroes(arr) {
//   let nonZeroIndex = 0;

//   // Step 1: Move non-zero elements to the front
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[nonZeroIndex] = arr[i];
//       nonZeroIndex++;
//     }
//   }

//   // Step 2: Fill remaining positions with 0
//   for (let i = nonZeroIndex; i < arr.length; i++) {
//     arr[i] = 0;
//   }

//   return arr;
// }

// // Example
// console.log(moveZeroes([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]

let arr = [0,1,21,0,46,35]

function moveZeros(arr){
  let nonZeroIndex = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] !== 0){
        arr[nonZeroIndex] = arr[i];
        nonZeroIndex++;
    }

}

for(let i = nonZeroIndex; i<arr.length ; i++ ){
    arr[i] = 0;

}

return arr;

}

console.log(moveZeros(arr));