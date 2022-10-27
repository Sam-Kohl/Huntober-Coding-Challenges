// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// (1) string, letters, spaces, special characters, capitalization doesn't matter. 
// Return new (1) string. Consist of '(' if only intstance of character, or ')' if character appears multiple times.


function solve(str){
    //Splits string into array of each character
    let arr = str.toLowerCase().split('');
    //Checks if element first index diff than last, if so/not, returns "(" or ")"
    let arr2 = arr.map((x) => arr.indexOf(x) === arr.lastIndexOf(x) ? "(" : ")"
    );
    // Returns arr2 joined into 1 string
    return arr2.join('');
      
    }
    
    
    
    
    
    //Test 
    console.log(solve("din"), "(((")
    console.log(solve("recede"), "()()()")
    console.log(solve("Success"), ")())())")
    console.log(solve("(( @" ), "))((")
    