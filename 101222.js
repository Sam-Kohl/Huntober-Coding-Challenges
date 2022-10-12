 // Function
// given URL as string, always will start with https
//Returns just domain name as string, original case of string

function getDomainName(url){
    //Replaces https://www. with nothing, returns new string.
  let str = url.replace('https://www.','')
  //Splits string by remaining '.' elements, returns first element
  return str.split('.')[0]
  

  
}



// Tests
console.log(getDomainName('https://www.google.com/'), 'google')
console.log(getDomainName('https://www.gamespot.com/articles/elden-ring-story-explained-a-complete-guide-to-what-youre-doing-in-the-game/1100-6504865/'), 'gamespot')
console.log(getDomainName('https://www.reddit.com/'), 'reddit')