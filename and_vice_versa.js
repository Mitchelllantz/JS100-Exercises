let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

let person = {};
for(let pairs = 0; pairs < nestedArray.length; pairs += 1){
  for(let property = 0; property < nestedArray[pairs].length; property += 2){
    person[nestedArray[pairs][property]] = nestedArray[pairs][property + 1];
  }
}

console.log(person);