function solution(number){
  let output = 0
  for (let i=3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
    output += i
    }
  }
  return output
}

console.log(solution(10) === 23)
console.log(solution(27) === 168)
console.log(solution(645) === 96750)
console.log(solution(-38) === 0)