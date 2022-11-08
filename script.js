// My first attempt at creating a function to check palindromes

const palindromes = function (string) {
  let str = string.toLowerCase().split('').filter(a => a.toUpperCase() !== a.toLowerCase())
  
  let start = 0
  let end = str.length -1
  
  for (let i=0; i<str.length; i++) {
    if (start >= end) {
      break
    } else if (str[start] !== str[end]) {
      return false
    }
    start++
    end--
    }
    return true
  }


  // this is a far better function
const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}