const {sum, returnTargetIndex, removeTwos, removeEvenNums} = require('./sum');
// only
// skip

// always use npm test


describe("sum test block", () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('adds 2 + 2 to equal 4', () => {
        expect(sum(2, 2)).toBe(4);
    });

    test('adds 3 + 2 to equal 5', () => {
        expect(sum(3, 2)).toBe(5);
    });
})


describe("return last element from list", () => {
    test('should return 4 from array', () => {
        expect(returnTargetIndex([3, 2, 5, 4], 0)).toBe(3)
    })
    test('should return error', () => {
        expect(returnTargetIndex([3, 2, 5, 4], 4)).toBe("Error")
    })
})

describe.skip("replace second element in array", () => {
    test('2 should replaced with 9', () => {
        expect(returnTargetIndex([3, 2, 5, 4], 0)).toBe([3, 9, 5, 4])
    })

})

describe("remove all instances of number 2 in array", () => {
    test('all 2s should be removed', () => {
        expect(removeTwos([3, 2, 5, 4])).toEqual([3, 5, 4])
    })

})

describe("remove all even numbers", () => {
    test('even numbers should be removed', () => {
        expect(removeEvenNums([3, 2, 5, 4])).toEqual([3, 5])
    })

})

describe("remove odd and even numbers and zero", () => {
    test('even numbers should be removed', () => {
        expect(removeEvenNums([3, 2, 5, 4, 0, 7], "odd")).toEqual([3, 5, 0, 7])
    })
        
    test('odd numbers and zeros should be removed', () => {
        expect(removeEvenNums([3, 2, 5, 4, 0, 7], "even")).toEqual([2, 4])
    })

})
