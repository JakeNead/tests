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

// Cleaner version

function isValidWalk(walk) {
  const n = walk.filter(item => {item === "n" }).length;
  const s = walk.filter(item => {item === "s" }).length;
  const e = walk.filter(item => {item === "e" }).length;
  const w = walk.filter(item => {item === "w" }).length;
  
  return walk.length === 10 && n === s && e === w;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))