const {sum, returnTargetIndex } = require('./sum');
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
})




