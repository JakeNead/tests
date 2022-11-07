// Given a list of numbers find the only odd or even number

function findOutlier(int){
   return int.filter(n => n%2 === 0).length > int.filter(n => n%2 !== 0).length ? odd: even;
 }

 function findOutlier(int){
  let even = int.filter( n => n%2 === 0)
  let odd = int.filter(n => n%2 !== 0)
   return +(even.length > odd.length ? odd: even)
 }
 