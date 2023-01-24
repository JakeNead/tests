function spongeBobCase (str) {
  result = ''
  for (let i = 0; i < str.length; i++) {
      if (i % 2 !== 0) {
        result += str[i]
    } else {
        result += String(str[i]).toUpperCase()
    }
  }
  return result
}


console.log(spongeBobCase('Elephant is very large'))
console.log(spongeBobCase(''))
console.log(spongeBobCase('hello'))
console.log(spongeBobCase('hello?????'))