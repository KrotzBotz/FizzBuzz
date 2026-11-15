// Fizz Buzz for the numbers 1 through 20
for (let number = 1; number <= 20; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
        // divisible by both 3 and 5
        console.log(number + " FizzBuzz");
    } else if (number % 3 === 0) {
        // divisible by 3 only
        console.log(number + " Fizz");
    } else if (number % 5 === 0) {
        // divisible by 5 only
        console.log(number + " Buzz");
    } else {
        // divisible by neither, so just print the number
        console.log(number);
    }
}
