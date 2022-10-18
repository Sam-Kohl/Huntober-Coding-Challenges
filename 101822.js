// takes Array of int both in string form and number form
// No negative, always whole numbers, no floats
// Returns sum of array as if all vals were numbers

function sumMix(arr){
    // loops through arr, turns all elements to numbers, returns new arr
      let arr2 = arr.map((x) => Number(x))
      // returns arr2 which contains only numbers sum
      return arr2.reduce((a,c) => a + c)
      
      
    }
    
    
    // Tests
    console.log(sumMix([9, 3, '7', '3']), 22);
    console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
    console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 