//Create a function that multiplies all numeric property values of an object by 2.


// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof key === 'number') {
      obj[key] *= 2
    }
  }
  return menu
}

console.log(multiplyNumeric(menu))