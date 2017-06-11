/*globals describe test expect jest*/

import {} from '../number';

describe('Number.prototype', () => {
  describe('.isOdd() and .isEven()', () => {
    let evenNumber = 42;
    let oddNumber = 57;
    test(`(${oddNumber}).isOdd() === true`, () => {
      expect(oddNumber.isOdd()).toBe(true);
    });
    test(`(${evenNumber}).isOdd() === false`, () => {
      expect(evenNumber.isOdd()).toBe(false);
    });

    test(`(${evenNumber}).isEven() === true`, () => {
      expect(evenNumber.isEven()).toBe(true);
    });
    test(`(${oddNumber}).isEven() === false`, () => {
      expect(oddNumber.isEven()).toBe(false);
    });
  });

  describe('.to(end[, step]) -- range function', () => {
    test('(10).to(1) === []', () => {
      expect((10).to(1)).toEqual([]);
    });
    test('(5).to(5) === []', () => {
      expect((5).to(5)).toEqual([]);
    });
    test('(1).to(10) === [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
      expect((1).to(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    test('(-3).to(3) === [-3, -2, -1, 0, 1, 2]', () => {
      let range = (-3).to(3);
      expect(range).toEqual([-3, -2, -1, 0, 1, 2]);
    });
    test('(1).to(10, 2) === [1, 3, 5, 7, 9]', () => {
      let range = (1).to(10, 2);
      expect(range).toEqual([1, 3, 5, 7, 9]);
    });
    test('(1).to(5, 0) === []', () => {
      expect((1).to(5, 0)).toEqual([]);
    });
    test('(1).to(5, -1) === []', () => {
      expect((1).to(5, -1)).toEqual([]);
    });
    test('(1).to(5, 10) === [1]', () => {
      let range = (1).to(5, 10);
      expect(range).toEqual([1]);
    });
    test('(0).to(0.3, 0.1) === [0, 0.1, 0.2]', () => {
      expect((0).to(0.3, 0.1)).toEqual([0, 0.1, 0.2]);
    });
  });

  describe('.times(cb) -- repeatedly run a function', () => {
    test('(5).times(cb) -- cb is called 5 times', () => {
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

  describe('.fizzbuzz() -- do fizzbuzz for one number', () => {
    test('(1).fizzbuzz() === 1', () => expect((1).fizzbuzz()).toBe(1));
    test('(2).fizzbuzz() === 2', () => expect((2).fizzbuzz()).toBe(2));
    test('(3).fizzbuzz() === "fizz"', () => expect((3).fizzbuzz()).toBe('fizz'));
    test('(4).fizzbuzz() === 4', () => expect((4).fizzbuzz()).toBe(4));
    test('(5).fizzbuzz() === "buzz"', () => expect((5).fizzbuzz()).toBe('buzz'));
    test('(6).fizzbuzz() === "fizz"', () => expect((6).fizzbuzz()).toBe('fizz') );
    test('(7).fizzbuzz() === 7', () => expect((7).fizzbuzz()).toBe(7));
    test('(8).fizzbuzz() === 8', () => expect((8).fizzbuzz()).toBe(8));
    test('(9).fizzbuzz() === 9', () => expect((9).fizzbuzz()).toBe('fizz'));
    test('(10).fizzbuzz() === 10', () => expect((10).fizzbuzz()).toBe('buzz'));
    test('(11).fizzbuzz() === 11', () => expect((11).fizzbuzz()).toBe(11));
    test('(12).fizzbuzz() === 12', () => expect((12).fizzbuzz()).toBe('fizz'));
    test('(13).fizzbuzz() === 13', () => expect((13).fizzbuzz()).toBe(13));
    test('(14).fizzbuzz() === 14', () => expect((14).fizzbuzz()).toBe(14));
    test('(15).fizzbuzz() === 15', () => expect((15).fizzbuzz()).toBe('fizzbuzz'));
  });
});
