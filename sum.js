function sum(a, b) {
    return a + b;
  }
  module.exports = {sum , returnTargetIndex, removeTwos, removeEvenNums}

function returnTargetIndex(arrayofInts, indexToCheck) {
if (indexToCheck >= arrayofInts.length){
    return "Error"
} 
else {
    return arrayofInts[indexToCheck]
}

}

function removeTwos(arrayofInts) {
    // TODO remove all even numbers
    // Should we rename the function?
    // figuring even - mod % = 0
    // Should 0 be filtered out?
    // Do I need to update my test?
    return arrayofInts.filter(integer => integer !== 2)
}

function removeEvenNums(arrayofInts, checkOddOrEven) {
    if (checkOddOrEven == "odd") {

        return (arrayofInts.filter(integer => integer %2 !== 0 || integer === 0))
    }
    else if (checkOddOrEven == "even") {    

        return (arrayofInts.filter(integer => integer %2 == 0 && integer !== 0))
    }
}
    // else {
    //     return (filter.evens)
    // }
    
    

 // [1, 2, 3] array
 // [0, 1, 2] indices

// if (truthy) {
//   this will happen
// }
// if (falsey) {
//    this will NOT happen
// }

