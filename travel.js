let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

let contains = (location, array) => {
let newArray = array.filter(element => element === location)
newArray.length > 0 ? console.log('true') : console.log('false');
}



contains('Barcelona', destinations); // true
contains('Nashville', destinations); // false