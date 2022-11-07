function isValidWalk(walk) {
  let x = 0
  let y = 0

  if (walk.length < 10 || walk.length > 10) {
    return false
  } else {
    for (let i=0; i<walk.length; i++) {
      console.log(`${[i]}) x - ${x}, y -  ${y}`)
      if (walk[i] ==='n') {
        y++; 
    } else if (walk[i] ==='s') {
        y--;   
    } else if (walk[i] ==='e') {
        x--;   
    } else if (walk[i] ==='w') {
        x++; 
    }
  }
}
return (x === 0 && y === 0)

}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))

// Cleaner version

function isValidWalk(walk) {
  const north = walk.filter(item => { return item === "n" }).length;
  const south = walk.filter(item => { return item === "s" }).length;
  const east = walk.filter(item => { return item === "e" }).length;
  const west = walk.filter(item => { return item === "w" }).length;
  
  return walk.length === 10 && north === south && east === west;
}