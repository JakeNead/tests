// Given two integers find the sum of all the integers between and including them. If they are the same return one of them. 

function getSum( a,b ) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return (max-min + 1)*(min + max) / 2
    }
  


console.log(getSum(3,3),3)
console.log(getSum(0,-1),-1)
console.log(getSum(0,1),1)
console.log(getSum(-2,7),25)