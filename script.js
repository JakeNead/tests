// Return the oldest person in an array of objects that inclucdes people without a death date

const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

const findTheOldest = function(people) {
  people.forEach(obj => {
    if (!('yearOfDeath' in obj)) {
    obj.yearOfDeath = new Date().getFullYear()
    }
  })
  let sorted = people.sort((a, b) => a.yearOfDeath - a.yearOfBirth > b.yearOfDeath-b.yearOfBirth ? -1: 1)
  return sorted[0]
}   

console.table(findTheOldest(people))