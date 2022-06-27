module.exports = {
  makeObjectFromArrays,
  changeCase,
  getOddNums,
  arraysOfOddNumsOnly,
  lowerCaseToCapitalArrays,
  letterCounter,
  arrayAccum,
  arraysToObject,
};

function onlyOdds(arrayofInts) {
  return arrayofInts.filter((int) => int % 2 !== 0);
}

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

function lowerCaseToCapitalArrays(arrayOfLetterArrays) {
  return arrayOfLetterArrays.map((childarray) =>
    childarray.map((letter) => letter.toUpperCase())
  );
}

function letterCounter(arrayOfStringArrays) {
  return arrayOfStringArrays.reduce((outerAccum, innerArray) => {
    return outerAccum + arrayAccum(innerArray);
  }, 0);
}

function arrayAccum(arrayOfStrings) {
  return arrayOfStrings.reduce((accumulator, str) => {
    return accumulator + str.length;
  }, 0);
}

function arraysToObject(array1, array2) {
  const myObj = new Object();
  array1.forEach((foodItem, index) => {
    myObj[foodItem] = array2[index];
  });
  return myObj;
}

// array of arrays
// inner loop and outer loop
// print every other element

function multipleArrays(nestedArray) {
  nestedArray.forEach((array, outerIndex) => {
    array.forEach((element, innerIdx) => {
      console.log(element, "[" + outerIndex + "]", "[" + innerIdx + "]");
    });
  });
}

multipleArrays([
  ["stuff", "cheese", "things"],
  [1, 2, 3],
  ["fire", "oxygen", "fuel"],
]);
