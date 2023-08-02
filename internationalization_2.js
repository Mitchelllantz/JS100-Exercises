
let extractLanguage = (code) => {
  return code.split('_')[0];
}

let extractRegion = (code) => {
  return code.split('_')[1].slice(0, 2);
}
let greet = (language) => {
  switch(language){
    case 'en':
      console.log('Hi!');
      break;
    case 'fr':
      console.log('Salut!');
      break;
    case 'pt':
      console.log('Olá!');
      break;
    case 'de':
      console.log('Hallo!');
      break;
    case 'sv':
      console.log('Hej!');
      break;
    case 'af':
      console.log('Haai!');
      break;
  }
}
let localGreet = (locale) => {
  let language = extractLanguage(locale);
  if(language === 'en'){
    let region = extractRegion(locale);
    switch(region){
      case 'US':
        console.log("Hey!");
        break;
      case 'GB':
        console.log('Hello!');
        break;
      case 'AU':
        console.log('Howdy!');
        break;
  }
}
  else {
  greet(language);
  }
}



localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'
localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'