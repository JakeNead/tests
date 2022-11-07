//Change all but the last four numbers to '#'

function maskify(cc) {
  if (cc.length <= 4) {
    return cc;
  } else {
    for (let i=0; i<cc.length-4; i++) {
      cc = cc.replace(cc[i], '#')
    }
  }
  return cc
}

console.log(maskify('123'))
console.log(maskify('23985749864'))

//cleaner solution 

// function maskify(cc) {
//   return cc.slice(-4).padStart(cc.length, '#')
// }