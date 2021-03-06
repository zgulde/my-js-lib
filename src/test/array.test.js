/*globals describe test expect*/

import {} from '../array';

describe('Array.prototype', () =>{
  describe('.first([n]) -- returns the first n elements', () => {
    test('[1, 2, 3].first() === 1', () => {
      expect([1, 2, 3].first()).toBe(1);
    });
    test('[1, 2, 3].first(1) === [1]', () => {
      expect([1, 2, 3].first(1)).toEqual([1]);
    });
    test('[1, 2, 3].first(2) === [1, 2]', () => {
      expect([1, 2, 3].first(2)).toEqual([1, 2]);
    });
    test('[1, 2, 3].first(100) === [1, 2, 3]', () => {
      expect([1, 2, 3].first(100)).toEqual([1, 2, 3]);
    });
    test('[].first() === undefined', () => {
      expect([].first()).toBeUndefined();
    });
    test('[].first(1) === []', () => {
      expect([].first(1)).toEqual([]);
    });
    test('[].first(10) === []', () => {
      expect([].first(10)).toEqual([]);
    });
  });

  describe('.rest() -- returns everything but the first element', () => {
    test('[1, 2, 3, 4, 5].rest() === [2, 3, 4, 5]', () => {
      expect([1, 2, 3, 4, 5].rest()).toEqual([2, 3, 4, 5]);
    });
    test('[1].rest() === []', () => {
      expect([1].rest()).toEqual([]);
    });
    test('[].rest() === []', () => {
      expect([].rest()).toEqual([]);
    });
  });

  describe('.last([n]) -- returns the last n elements', () => {
    test('[1, 2, 3, 4, 5].last() === 5', () => {
      expect([1, 2, 3, 4, 5].last()).toBe(5);
    });
    test('[1, 2, 3, 4, 5].last(1) === [5]', () => {
      expect([1, 2, 3, 4, 5].last(1)).toEqual([5]);
    });
    test('[1, 2, 3, 4, 5].last(2) === [4, 5]', () => {
      expect([1, 2, 3, 4, 5].last(2)).toEqual([4, 5]);
    });
    test('[1, 2, 3].last(100) === [1, 2, 3]', () => {
      expect([1, 2, 3].last(100)).toEqual([1, 2, 3]);
    });
    test('[].last() === undefined', () => {
      expect([].last()).toBeUndefined();
    });
    test('[].last(1) === [] -- [].last(100) === []', () => {
      expect([].last(1)).toEqual([]);
      expect([].last(10)).toEqual([]);
    });
  });

  describe('.sample([n]) -- returns n random elements', () => {
    test('returns a random element when passed no args', () => {
      let arr = [1, 2, 3, 4, 5];
      for (let i = 0; i < 100; i += 1) {
        expect(arr.includes(arr.sample())).toBe(true);
      }
    });
    test('returns an array of randomly selected items when passed a number', () => {
      let arr = [1, 2, 3, 4, 5];
      expect(arr.sample(1).length).toBe(1);
      expect(arr.sample(2).length).toBe(2);
      expect(arr.sample(10).length).toBe(10);
    });
  });

  describe('.chunk(n) -- breaks an array in n-sized chunks', () => {
    test('[1, 2, 3].chunk(1) === [[1], [2], [3]]', () => {
      expect([1, 2, 3].chunk(1)).toEqual([[1], [2], [3]]);
    });
    test('[1, 2, 3, 4, 5, 6].chunk(2) === [[1, 2], [3, 4], [5, 6]]', () => {
      let chunked = [1, 2, 3, 4, 5, 6].chunk(2);
      expect(chunked).toEqual([[1, 2], [3, 4], [5, 6]]);
    });
    test('[1, 2, 3, 4, 5, 6].chunk(5) === [[1, 2, 3, 4, 5], [6]]', () => {
      let chunked = [1, 2, 3, 4, 5, 6].chunk(5);
      expect(chunked).toEqual([[1, 2, 3, 4, 5], [6]]);
    });
    test('[1, 2, 3].chunk(4) === [[1, 2, 3]]', () => {
      expect([1, 2, 3].chunk(4)).toEqual([[1, 2, 3]]);
    });
  });

  describe('.unique() -- removes duplicate values', () => {
    test('[1, 2, 3, 1, 2, 3].unique() === [1, 2, 3]', () => {
      expect([1, 2, 3, 1, 2, 3].unique()).toEqual([1, 2, 3]);
    });
    test('[5, 7, 9].unique() === [5, 7, 9]', () => {
      expect([5, 7, 9].unique()).toEqual([5, 7, 9]);
    });
  });

  describe('.without(ele1[, ele2[, ...]]) -- removes element(s) from an array', () => {
    test('[1, 2, 3, 4, 5].without(3) === [1, 2, 4, 5]', () => {
      expect([1, 2, 3, 4, 5].without(3)).toEqual([1, 2, 4, 5]);
    });
    test('[1, 2, 3, 4, 5].without(2, 3, 4) === [1, 5]', () => {
      expect([1, 2, 3, 4, 5].without(2, 3, 4)).toEqual([1, 5]);
    });
    test('[1, 2, 3, 4, 5].without(200) === [1, 2, 3, 4, 5]', () => {
      expect([1, 2, 3, 4, 5].without(200)).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('.flatten() -- flattens an array', () => {
    test('[[1, 2], [3, 4], [5]].flatten() === [1, 2, 3, 4, 5]', () => {
      let flattened = [[1, 2], [3, 4], [5]].flatten();
      expect(flattened).toEqual([1, 2, 3, 4, 5]);
    });
    test('[[1, [2, [3, [4, [5]]]]]].flatten() === [1, 2, 3, 4, 5]', () => {
      let flattened = [[1, [2, [3, [4, [5]]]]]].flatten();
      expect(flattened).toEqual([1, 2, 3, 4, 5]);
    });
    test('[1, 2, 3, 4, 5].flatten() === [1, 2, 3, 4, 5]', () => {
      expect([1, 2, 3, 4, 5].flatten()).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('.dropIf(fn) -- the opposite of .filter()', () => {
    test('[1, 2, 3, 4, 5].dropIf(n => n === 1) === [2, 3, 4, 5]', () => {
      expect([1, 2, 3, 4, 5].dropIf(n => n === 1)).toEqual([2, 3, 4, 5]);
    });
    test('[1, 2, 3, 4, 5].dropIf((n, i) => n == 3 || i == 1) === [1, 4, 5]', () => {
      expect([1, 2, 3, 4, 5].dropIf((n, i) => n == 3 || i == 1)).toEqual([1, 4, 5]);
    });
  });

  describe('groupBy(keyFn) -- transform collection into a map', () => {
    test('[1, 2, 3, 4].groupBy(n => n % 2 == 0 ? "even" : "odd") === {odd: [1, 3], even: [2, 4]}', () => {

      expect(
        [1, 2, 3, 4].groupBy(n => n % 2 == 0 ? 'even' : 'odd')
      ).toEqual(
        {odd: [1, 3], even: [2, 4]}
      );

    });
  });

  describe('reduceBy(keyFn, reducingFn) -- group by, then transform each value', () => {
    test('[1, 2, 3, 4].reduceBy(n => n % 2 == 0 ? "even" : "odd", xs => xs.reduce((x, y) => x + y))', () => {
      expect(
        [1, 2, 3, 4].reduceBy(
          n => n % 2 == 0 ? 'even' : 'odd',
          xs => xs.reduce((x, y) => x + y)
        )
      ).toEqual(
        {odd: 4, even: 6}
      );
    });
  });

});
