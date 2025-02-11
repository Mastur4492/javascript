function fact() {
    let num = document.getElementById("Input-num").value;
    let Answer = document.getElementById("Answer");
    
    // Convert input to number and validate
    num = parseInt(num);
    if (isNaN(num) || num < 0) {
        Answer.innerHTML = "Please enter a valid non-negative number";
        return;
    }
    
    // Handle base cases
    if (num === 0 || num === 1) {
        Answer.innerHTML = `The factorial of ${num} is 1`;
        return;
    }
    
    // Calculate factorial iteratively
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    
    Answer.innerHTML = `The factorial of ${num} is ${result}`;
}
