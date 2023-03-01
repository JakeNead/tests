// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


function uniqueInOrder(it) {
    const result = []
    let last
    
    for (let i = 0; i < it.length; i++) {
      if (it[i] !== last) {
        result.push(last = it[i])
      }
    }
    
    return result
  }
  console.log(uniqueInOrder([]))
  console.log(uniqueInOrder(['a','b','b','c', 'd', 'a', 'b']))
  console.log(uniqueInOrder([1,2,3,3,4,4,5]))
  console.log(uniqueInOrder('AAAABBBBBCCCCCAB'))

  