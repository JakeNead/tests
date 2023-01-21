function findOdd(a) {
  let count = 0;
  for (let i = 0; i <= a.length; i++) {
    count = 0;
    for (let j=0; j<= a.length; j++) {
      if (a[i] === a[j])
        count += 1;
        }
    if (count % 2 !== 0)
      return a[i]
  }
}
console.log(`${findOdd([7])} = 7`)

console.log(`${findOdd([0])} = 0`)
console.log(`${findOdd([0,1,0,1,0])} = 0`)
console.log(`${findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])} = 4`)