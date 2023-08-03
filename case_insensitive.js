let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

let caseInsensitive = (one, two) => {
  if(one.toLowerCase() === two.toLowerCase()){
    console.log("Same");
  }
  else {
    console.log("Differenrt");
    }
}

caseInsensitive(string1, string2);
caseInsensitive(string2, string3);
caseInsensitive(string1, string3);