// Return true if the first argument passed ends with the second argument

function solution(str, ending){
  let second = String(ending.split(''))
  let first = String(str.split('').slice(-ending.length))

  return second === first
}

console.log(solution('abcde', 'cde')===true)
console.log(solution('abcde', 'abc')===false)
console.log(solution('test', 't')===true)
console.log(solution('aldkfjsdj', 'oasdihi')===false)