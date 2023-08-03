

let repeat = (times, string) => {
let repeatedString = []
  for(let i = 1; i<=times; i++){
  repeatedString.push(string);
}
console.log(repeatedString.join(''));
}





repeat(3, 'ha'); // 'hahaha'