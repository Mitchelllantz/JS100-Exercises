let catAge = (humanYears) => {
  let catYears = 0;
  if(humanYears === 1){
  catYears += 15;
  }
  else if(humanYears >= 2){
    catYears+=24;
    humanYears -= 2;
    catYears += (humanYears * 4);
  }
console.log(catYears);

}





catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32