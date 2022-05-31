const {sum} = require('./tipCalc');


// Inputs: bill amount, tip rate
// Processes: calculate the tip
// Outputs: tip amount, total amount


// Inputs: 
    // bill amount: 10
    // tip rate: 15
// Expected result:
    // Tip: $1.50
    // Total: $11.50
// Actual result:

// Inputs: 
    // bill amount: 11.25
    // tip rate: 15
// Expected result:
    // Tip: $1.69
    // Total: $12.94
// Actual result:


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
