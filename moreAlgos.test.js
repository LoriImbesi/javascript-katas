const {
  makeObjectFromArrays,
  changeCase,
  getOddNums,
  arraysOfOddNumsOnly,
  lowerCaseToCapitalArrays,
  letterCounter,
  arrayAccum,
  arraysToObject,
} = require("./sum");
// only
// skip

// always use npm test

// describe("create object from two arrays", () => {
//     test('object should show fruits and numbers matched in object', () => {
//         expect(makeObjectFromArrays(["oranges", "bananas", "coconuts"],
//             [5, 8, 39])).toEqual({"oranges": 5, "bananas": 8, "coconuts": 39})
//     })

// })

describe("taking a string and mixing the case", () => {
  test('"Abc" should return "aBc" ', () => {
    expect(changeCase("Abc")).toEqual("aBc");
  });
});

describe("take an array of numbers and return an array of odd numbers", () => {
  test("[2, 3, 4, 7, 9] should return [3, 7, 9]", () => {
    expect(getOddNums([2, 3, 4, 7, 9])).toEqual([3, 7, 9]);
  });
});

describe("take an array of arrays of integers", () => {
  test("[[1, 2, 3], [4, 5, 6], [7, 8, 9]]should return array of arrays, only odd elements", () => {
    expect(
      arraysOfOddNumsOnly([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual([[1, 3], [5], [7, 9]]);
  });
});

describe("take an array of arrays of letters", () => {
  test("each array should have all elements capitalized", () => {
    expect(
      lowerCaseToCapitalArrays([
        ["a", "b", "c"],
        ["d", "e", "f"],
      ])
    ).toEqual([
      ["A", "B", "C"],
      ["D", "E", "F"],
    ]);
  });
});

describe("take an array of arrays of strings", () => {
  test("count the accumulation of letters of all arrays", () => {
    expect(
      letterCounter([
        ["sister", "cheese"],
        ["blue", "dog"],
        ["golf balls", "cheddar"],
      ])
    ).toEqual(36);
  });
});

describe("take array of strings", () => {
  test("accumulation of letters of array should be 7", () => {
    expect(arrayAccum(["blue", "dog"])).toEqual(7);
  });
});

describe("two arrays to one object", () => {
  test("first array are keys, second array are values", () => {
    expect(arraysToObject(["apples", "cheese", "bread"], [1, 4, 7])).toEqual({
      apples: 1,
      cheese: 4,
      bread: 7,
    });
  });

  //   describe("two arrays to one object", () => {
  //     test("first array are keys, second array are values", () => {
  //       expect(arraysToObject(["apples", "cheese", "bread"], [1, 4, 7])).toEqual({
  //         apples: 1,
  //         cheese: 4,
  //         bread: 7,
  //       });
  //     });

  // [["stuff", "cheese", "things"], [1, 2, 3], ["fire", "oxygen", "fuel"]]

  // function that takes array of arrays that iterates through sub arrays
  //and print every other element
});
