function sum(a, b) {
    return a + b;
  }
  module.exports = {sum , returnTargetIndex}

  function returnTargetIndex(arrayofInts, indexToCheck) {
    if (indexToCheck >= arrayofInts.length){
        return "Error"
    } 
    else {
        return arrayofInts[indexToCheck]
    }
    
  }

 // [1, 2, 3] array
 // [0, 1, 2] indices

// if (truthy) {
//   this will happen
// }
// if (falsey) {
//    this will NOT happen
// }

