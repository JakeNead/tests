function Dog(firstName, size, rating) {
  this.firstName = firstName;
  this.size = size;
  this.rating = rating;
}

function sentence () {
  return `${this.firstName} has a ${this.size} bark`
}

const marty = Object.create(Dog);

marty.firstName = 'Marty';
marty.size = 'big';
marty.rating = '13/10';
marty.sentence = sentence();

const sentenceBoundToMarty = sentence.bind(marty)

console.log(sentenceBoundToMarty()); // Marty has a big bark



// const obj = {
//   sound: "beep beep"
// }

// function talk() {
//     console.log(this.sound)
// }
// const boromir = {
//   sound: 'One does not simply walk into mordor'
// }
// const talkBoundToBoromier = talk.bind(boromir)

// talkBoundToBoromier()
// talk()