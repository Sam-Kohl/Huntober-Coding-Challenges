// Takes 1 array of numbers, whole, + and -, never string
//Takes 1 whole number as an arguement
//Array never empty, will contain at least number even numbers
//Returns array of given number of last even elements in array

function lastEvens(arr,num){
    // Filters out evens into new array
      let arr2 = arr.filter((x) => x % 2 === 0);
      //Returns sliced array of evens by given number, starting from end of array.
      return arr2.slice(-num)
    
      
      
    }
    
    //Test
    console.log(lastEvens([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8])
    console.log(lastEvens([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26])
    console.log(lastEvens([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6])