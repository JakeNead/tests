


function Hike (hikeName, state, distance, yds) {
  const hike = Object.create(Hike.prototype)
  hike.hikeName = hikeName 
  hike.state = state
  hike.distance = distance
  hike.yds = yds
  return hike
}

Hike.prototype.message = function () {
  return `${this.hikeName} is ${this.distance} miles long, rated class ${this.yds}, and located in the great state of ${this.state}`
}

const tableMountain = Hike('Table Mountain', 'Washington', 17, 1)

const barretSpur = Hike('Barret Spur', 'Oregon', 12, 2)

console.log(tableMountain.message())
console.log(tableMountain.message())
console.log(barretSpur.distance)
console.log(barretSpur.hikeName)