const { expect, it } = require('@jest/globals')
const stringCapitalize = require('./strings.js')

describe('Testing String Length', () => {
  test('Input must be above 1 character', () => {
    expect(() => {
      stringLength('');
    }).toThrow('String must be between 1 and 10 characters');
  })

  test('Input must be below 10 character', () => {
    expect(() => {
      stringLength('Hello World From Lagos');
    }).toThrow('String must be between 1 and 10 characters');
  })

  test('Character Count', () => {
    expect(stringLength('hello')).toBe(5);
  })
})

describe('Testing String Reverse', () => {
  test('String is reversed', () => {
    expect(stringReverse('hello')).toBe('olleh');
  })
})

describe('Testing Capitalize String', () => {
  it('Input must be of type string', () => {
    expect(() => {
      stringCapitalize(true);
    }).toThrow('String must be more than one character long');
  })

  it('Input must be longer than one character', () => {
    expect(() => {
      stringCapitalize('');
    }).toThrow('String must be more than one character long');
  })

  it('Testing String Transformation', () => {
    expect(toUpperCase('hello world')).toBe('Hello World');
  })
})