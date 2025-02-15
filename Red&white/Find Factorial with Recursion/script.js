function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1); // Recursive Call
}

function calculateFactorial() {
    let num = parseInt(document.getElementById("numInput").value);
    if (isNaN(num) || num < 0) {
        document.getElementById("result").innerText = "Please enter a non-negative number.";
    } else {
        document.getElementById("result").innerText = `Factorial of ${num} is ${factorial(num)}`;
    }
}