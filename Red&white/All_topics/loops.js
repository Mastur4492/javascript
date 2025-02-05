//  1. Prime numbers within a given range
//👉 Find all prime numbers between two given numbers.

function isPrime(num){
    if(num <= 1){
        return false;
    }

    for(let i = 2; i<=Math.sqrt(num); i++){
        if(num%i == 0){
            return false;
        }
    }

    return true;
}


let start = 1;
let end = 20;

// let result = "";
let result = [];
let index = 0;
for(let i = start; i <= end; i++){

    if(isPrime(i)){
       result[index] = i;
       index++;
    }
}

console.log(result);
console.log(...result);


// Method : 2 //

// let num = 11;

// let count = 0;

// for(let i = 1; i <= 12; i++){
//     if(num%i == 0){
//         count++;
//     }
// }

// if(count == 2){
//     console.log("Prime Number!");
// }else{
//     console.log("Not Prime Number!");
// }


// function countfact(num){
//     let count = 0;
// for(let i = 1; i <= num; i++){
//     if(num%i == 0){
//         count++;
//     }
// }

// return count;
// }


// let start = 1;

// let end = 20;

// for(let i = start; i <= end; i++){

//     if(countfact(i) == 2){
//         console.log(i);
//     }

// }

