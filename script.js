// Check to see if a string contains the same number of 'x's and 'o's

function XO(str) {
  let chars = str.toLowerCase().split('')
  return (chars.filter(x => x === 'x').length === chars.filter(x => x === 'o').length)
} 
  

console.log(XO('Xxoxo82o%'))