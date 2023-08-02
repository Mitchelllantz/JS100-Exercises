let extractLanguage = (code) => {
  return code.split('_')[1].slice(0, 2);
}


console.log(extractLanguage('en_US.UTF-8')); // 'en'
console.log(extractLanguage('en_GB.UTF-8')); // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'