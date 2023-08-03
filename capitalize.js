let capitalize = (string) => {
let stringArray = string.split(" ");
let newArray =[];
stringArray.forEach(function(string){
newArray.push(string[0].toUpperCase() + string.slice(1));

});
return newArray.join(" ");
  }

console.log(capitalize('launch school tech & talk'));