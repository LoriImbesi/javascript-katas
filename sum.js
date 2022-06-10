function sum(a, b) {
  return a + b;
}
module.exports = {
  sum,
  returnTargetIndex,
  removeTwos,
  removeEvenNums,
  countWords,
  largestNumber,
  cheapVegetables,
  sumOfArray,
  cheaperThanTen,
  onlyOdds,
  findOddValues,
  makeObjectFromArrays,
  changeCase,
  getOddNums,
  arraysOfOddNumsOnly,
};

function returnTargetIndex(arrayofInts, indexToCheck) {
  if (indexToCheck >= arrayofInts.length) {
    return "Error";
  } else {
    return arrayofInts[indexToCheck];
  }
}

function removeTwos(arrayofInts) {
  // TODO remove all even numbers
  // Should we rename the function?
  // figuring even - mod % = 0
  // Should 0 be filtered out?
  // Do I need to update my test?
  return arrayofInts.filter((integer) => integer !== 2);
}

function removeEvenNums(arrayofInts, checkOddOrEven) {
  if (checkOddOrEven == "odd") {
    return arrayofInts.filter((integer) => integer % 2 !== 0 || integer === 0);
  } else if (checkOddOrEven == "even") {
    return arrayofInts.filter((integer) => integer % 2 == 0 && integer !== 0);
  }
}

function countWords(arrayOfWords) {
  let longest = 0;
  arrayOfWords.forEach((str) => {
    let wordCount = str.split(" ").length;
    if (wordCount > longest) {
      longest = wordCount;
    }
  });
  return longest;
}

function largestNumber(number) {
  // what numbers do we have
  // convert integer into string
  // break int in to array of strings
  // split them?
  // need to arrange them from largest to smallest

  return parseInt(
    number
      .toString()
      .split("")
      .sort((a, b) => {
        return b - a;
      })
      .join("")
  );
}

function cheapVegetables(obj) {
  return Object.keys(obj).filter((key) => obj[key] < 10);
}

function sumOfArray(strings) {
  return strings.reduce((accumStr, nextString) => {
    return accumStr + nextString;
  }, "");
}

function cheaperThanTen(arrayOfObjs) {
  return arrayOfObjs.filter((obj) => obj["price"] < 10);
}

function onlyOdds(arrayofInts) {
  return arrayofInts.filter((int) => int % 2 !== 0);
}

function findOddValues(arrayOfObjs) {
  // let oddsOfFirstObject = onlyOdds(Object.values(arrayOfObjs[0]))
  // console.log(oddsOfFirstObject)
  // return oddsOfFirstObject
  return arrayOfObjs.map((obj) => onlyOdds(Object.values(obj)));
}
//[[3, 6, 5], [8, 2, 32], [11, 7, 9]]
//[[3, 5], [], [11, 7, 9]]

function makeObjectFromArrays(arrayOfFruit, arrayOfInts) {
  return arrayOfFruit, arrayOfInts;
}

// array of fruit need to now be keys
// array of ints need to now be values
// reduce - returns 1 thing
// Object.assign?

function changeCase(strToChange) {
  let casedArray = strToChange.split("").map((letter, index) => {
    if (index % 2 === 0) {
      return letter.toLowerCase();
    } else {
      return letter.toUpperCase();
    }
  });

  return casedArray.join("");
}

// letter needs to be lower or upper
// loop through string and look at every letter
// for, for each, .map, .filter
// string.split() puts string into array
// then need to loop over array
// upper lower upper lower
// function will call on an empty space

function getOddNums(arrayOfNums) {
  return arrayOfNums.filter((num) => num % 2 !== 0);
}

function arraysOfOddNumsOnly(arrayOfArrays) {
  return arrayOfArrays.map((array) => getOddNums(array));
}

// return arrays with odd numbers
// filter an array of arrays?
// make separate arrays first?

// Emergency plan for what to do when you don't know what to do:
// SET UP A TEST - the test will tell you what's needed - it's the
// roadmap

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
