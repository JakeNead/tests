function order(words){
return words.split(' ').sort((a,b) => (a.split('').filter(Number)) - (b.split('').filter(Number))).join(' ')

}

// return words.split(' ').sort((x,y) => x.split('').filter(x => typeof(x)), y.split('').filter(y => typeof(y)))


console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order(""), "empty input should return empty string" )

