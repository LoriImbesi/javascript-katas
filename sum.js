function sum(a, b) {
    return a + b;
  }
  module.exports = {sum , returnTargetIndex, removeTwos, removeEvenNums, countWords, largestNumber, cheapVegetables, sumOfArray, cheaperThanTen}

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

function countWords(arrayOfWords) {
    let longest = 0
    arrayOfWords.forEach(str => {
        let wordCount = str.split(' ').length
        if (wordCount > longest){
            longest = wordCount
        }
    })
    return longest
}

function largestNumber(number) {
    // what numbers do we have
    // convert integer into string
    // break int in to array of strings
    // split them?
    // need to arrange them from largest to smallest

    return parseInt(number.toString().split('').sort((a, b) => {
       return b - a
    }).join(''))
}

function cheapVegetables(obj) {
    return Object.keys(obj).filter(key => obj[key] < 10)
}

function sumOfArray(strings) {
    return strings.reduce((accumStr, nextString) => {
        return accumStr + nextString
    }, "")
}

function cheaperThanTen(arrayOfObjs){
    return arrayOfObjs.filter(obj => obj["price"] < 10)
}

// accessing an array: [0] = first object
// arrayOfObjs[0["price"] < 10]
// take array of objects [ {price: 5}, {price: 32}, {price: 9}]
// into array, into object, key < 10
// filter for price less than 10
// check price key for less than 10
// filter creates new array



// return arrayOfCheapVeggies
    //let arrayOfCheapVeggies = Object.entries(obj)

// Differences between arrays and objects
// Arrays (or lists) are ordered - they have index value
// Arrays can have any amount of things in ANY order
// Objects have to have everything set in pairs of two   
// One key has one value  A : 2
// NO KEY or VALUE can exist without its pair
// Order is not defined in an object

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

