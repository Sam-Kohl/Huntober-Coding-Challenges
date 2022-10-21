//Takes array of whole numbers, only numbers, only positive, never negative or string, never float.
//All numbers in array repeat twice except 2 numbers, which only repeat once. Nothing will repeat any more or any less.
//Returns Number, whole, which is sum of 2 numbers that only occur once

function repeats(arr){
    // Filters out elements that have a same first index and last index of value.
  let arr2 = arr.filter((x) => arr.indexOf(x)  === arr.lastIndexOf(x));
  // Returns the sum of array of filtered values
    return arr2.reduce((a,c) => a + c)
    
  }
  
  //
  console.log(repeats([4,5,7,5,4,8]),15)
  console.log(repeats([9, 10, 19, 13, 19, 13]),19)
  console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
  console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
  console.log(repeats([5, 10, 19, 13, 10, 13]),24)