// My first attempt at creating a function to check palindromes

const fibonacci = function(n) {
  let a = 0
  let b = 1
  if (n < 1) {
      return n
  } else {
      for (let i=0; i< +n; i++) {
        i % 2 === 0 ? b = a+b : a = a+b
      }
    return a > b ? a : b;
  }
};
console.log(fibonacci(4))
console.log(fibonacci(6))
console.log(fibonacci(25))


  // this is a far better function