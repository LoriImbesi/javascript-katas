const {sum, returnTargetIndex, removeTwos, countWords} = require('./sum');
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

describe("remove all instances of number 2 in array", () => {
    test('all 2s should be removed', () => {
        expect(removeTwos([3, 2, 5, 4])).toEqual([3, 5, 4])
    })

})


describe("return the highest word count in an array", () => {
    test('return the highest word count in an array', () => {
        expect(countWords(['curious cat', 'ball', 'Aslan the lion', 'garden'])).toEqual(3)
    })

    test('return the highest word count in an array', () => {
        expect(countWords(['ball', 'flowers in the garden'])).toEqual(4)
    })

})