let removeLastChar = (string) => {
  let arr = string.split('');
  arr.pop();
  console.log(arr.join(''));
}




removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'