/*globals describe test expect jest*/

import {} from '../number';

describe('Number.prototype', () => {
  describe('.isOdd() and .isEven()', () => {
    let evenNumber = 42;
    let oddNumber = 57;
    test(`isOdd is true for ${oddNumber}`, () => {
      expect(oddNumber.isOdd()).toBe(true);
    });
    test(`isOdd is false for ${evenNumber}`, () => {
      expect(evenNumber.isOdd()).toBe(false);
    });

    test(`isEven is true for ${evenNumber}`, () => {
      expect(evenNumber.isEven()).toBe(true);
    });
    test(`isEven is false for ${oddNumber}`, () => {
      expect(oddNumber.isEven()).toBe(false);
    });
  });

  describe('.to(end[, step]) -- range function', () => {
    test('returns an empty array when the end is less than the start', () => {
      expect((10).to(1)).toEqual([]);
    });
    test('a range from 5 to 5 is []', () => {
      expect((5).to(5)).toEqual([]);
    });
    test('creates a range from 1 to 10', () => {
      expect((1).to(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    test('creates a range from -3 to 3', () => {
      let range = (-3).to(3);
      expect(range).toEqual([-3, -2, -1, 0, 1, 2]);
    });
    test('creates a range from 1 to 10 by 2', () => {
      let range = (1).to(10, 2);
      expect(range).toEqual([1, 3, 5, 7, 9]);
    });
    test('rejects a step of 0', () => {
      expect((1).to(5, 0)).toEqual([]);
    });
    test('rejects a negative step', () => {
      expect((1).to(5, -1)).toEqual([]);
    });
    test('a range where the step is greater than the end is 1 element', () => {
      let range = (1).to(5, 10);
      expect(range).toEqual([1]);
    });
    test('creates a range from 0 to .3 by 0.1', () => {
      expect((0).to(0.3, 0.1)).toEqual([0, 0.1, 0.2]);
    });
  });

  describe('.times(cb)', () => {
    test('calls a callback x number of times', () => {
      let cb = jest.fn();
      (5).times(cb);
      expect(cb.mock.calls.length).toBe(5);
    });
    test('passes the number of the iteration to the callback', () => {
      let cb = jest.fn();
      (5).times(cb);
      expect(cb.mock.calls[0][0]).toBe(1);
      expect(cb.mock.calls[1][0]).toBe(2);
      expect(cb.mock.calls[2][0]).toBe(3);
      expect(cb.mock.calls[3][0]).toBe(4);
      expect(cb.mock.calls[4][0]).toBe(5);
    });
  });
});
