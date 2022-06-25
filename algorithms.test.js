const {
  sum,
  returnTargetIndex,
  removeTwos,
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
  lowerCaseToCapitalArrays,
  letterCounter,
  arrayAccum,
  arraysToObject,
} = require("./sum");
// only
// skip

// always use npm test

describe("sum test block", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds 2 + 2 to equal 4", () => {
    expect(sum(2, 2)).toBe(4);
  });

  test("adds 3 + 2 to equal 5", () => {
    expect(sum(3, 2)).toBe(5);
  });
});

describe("return last element from list", () => {
  test("should return 4 from array", () => {
    expect(returnTargetIndex([3, 2, 5, 4], 0)).toBe(3);
  });
  test("should return error", () => {
    expect(returnTargetIndex([3, 2, 5, 4], 4)).toBe("Error");
  });
});

describe("remove all instances of number 2 in array", () => {
  test("all 2s should be removed", () => {
    expect(removeTwos([3, 2, 5, 4])).toEqual([3, 5, 4]);
  });
});

describe("return the highest word count in an array", () => {
  test("return the highest word count in an array", () => {
    expect(
      countWords(["curious cat", "ball", "Aslan the lion", "garden"])
    ).toEqual(3);
  });

  test("return the highest word count in an array", () => {
    expect(countWords(["ball", "flowers in the garden"])).toEqual(4);
  });
});

describe("return the largest possible number", () => {
  test("1624 should become 6421", () => {
    expect(largestNumber(1624)).toEqual(6421);
  });
});

describe("cheap vegetables", () => {
  test("should return everything cheaper than 10", () => {
    expect(
      cheapVegetables({
        url: "localproduce.com",
        lettuce: 5,
        tomatoes: 2,
        asparagus: 1969,
      })
    ).toEqual(["lettuce", "tomatoes"]);
  });
});

describe("combine array of strings", () => {
  test("return the aggregate of strings", () => {
    expect(sumOfArray(["things", "cheese", "whiz"])).toEqual(
      "thingscheesewhiz"
    );
  });
});

describe("get items cheaper than 10", () => {
  test("filters items and return ids 3 and 4", () => {
    expect(
      cheaperThanTen([
        {
          id: 3,
          name: 6,
          price: 5,
        },
        {
          id: 8,
          name: 2,
          price: 32,
        },
        {
          id: 4,
          name: 7,
          price: 9,
        },
      ])
    ).toEqual([
      {
        id: 3,
        name: 6,
        price: 5,
      },
      {
        id: 4,
        name: 7,
        price: 9,
      },
    ]);
  });
});

// func that takes array of objs and returns
// array of objects; each obj will have same keys
// one of the keys = price will be an int
// return array that has all objs with price
//lower than 10;
// set a filter so you can only purchase items priced
// less than 10

describe("filter an array of ints and return only odds", () => {
  test("array should return 5, 9, 15", () => {
    expect(onlyOdds([2, 4, 5, 15, 9, 20])).toEqual([5, 15, 9]);
  });
});

describe("find the odd prices in the objects", () => {
  test("should return arrays of odd values [3, 5], [11, 7, 9]", () => {
    expect(
      findOddValues([
        {
          id: 3,
          name: 6,
          price: 5,
        },
        {
          id: 8,
          name: 2,
          price: 32,
        },
        {
          id: 11,
          name: 7,
          price: 9,
        },
      ])
    ).toEqual([[3, 5], [], [11, 7, 9]]);
  });

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
  });
});
