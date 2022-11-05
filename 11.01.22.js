// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// "iNPUT eXAMPLE"  ==> 'Example Input'
// You may assume the input only contain English alphabet and spaces.


// Takes 1 str, no numbers, no punct, case senvsitive, spaces
// Returns 1 str, reversed, cases switched. 

function caseSwitch(str){
    //Split string into array by word
  let arr = str.split(' ').reverse()
  
  //New array to store vals
    let arr2 = []
    //Loops through array of words
    for(i=0 ; i < arr.length; i++){
      //Splits each word
      arr2.push((arr[i].split('').map((x) => {
        return x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase();
      })).join(''))
    }
    return arr2.join(' ')
  }
  
  
  //Test
  console.log(caseSwitch("iNPUT eXAMPLE"), 'Example Input')
  console.log(caseSwitch("TEST"), 'test')
  console.log(caseSwitch("Womp Slomp"), 'sLOMP wOMP')