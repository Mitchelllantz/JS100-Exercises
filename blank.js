let isBlank = (string) => {
if(string.trim().length !== 0){
  console.log("false");
  }
else{
  console.log("true");
  }

}




isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true