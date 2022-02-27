const Calculator = require('./calculator.js');

describe('200 and 100:', () => {
  it('add', () => {
    expect(Calculator.add(200, 100)).toBe(300);
  });

  it('subtract', () => {
    expect(Calculator.subtract(200, 100)).toBe(100);
  });

  it('divide', () => {
    expect(Calculator.divide(200, 100)).toBe(2);
  })

  it('multiply', () => {
    expect(Calculator.multiply(200, 100)).toBe(20000);
  })
})