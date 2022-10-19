// Takes arr of whole numbers, never string, never negative
//Returns one whole number, average of all numbers in array

function getAverage(arr){
    //takes arr, uses reduce method to sum all numbers in arr, divides by length of arr. Returns value as number rounded down
      return Math.floor(arr.reduce((a,c) => a + c) / arr.length)
      
    }
    
    console.log(getAverage([2,2,2,2]),2)
    console.log(getAverage([1,2,3,4,5,]),3);
    console.log(getAverage([1,1,1,1,1,1,1,2]),1)