function findShort(s){
  let words = s.split(' ')
  let shortest = words[0].length
  for (let i=0; i<words.length; i++) {
    if (words[i].length<shortest) {
      shortest = words[i].length
    }
  }
  return shortest
}


console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
console.log(findShort("Let's travel abroad shall we"), 2);