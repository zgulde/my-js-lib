/*globals describe test expect*/

import {} from '../array';

describe('first', () => {
  test('returns the first element of the array if no argument is passed', () => {
    expect([1, 2, 3].first()).toBe(1);
  });
  test('returns an array with the first element if 1 is passed', () => {
    expect([1, 2, 3].first(1)).toEqual([1]);
  });
  test('returns the first two elements if 2 is passed', () => {
    expect([1, 2, 3].first(2)).toEqual([1, 2]);
  });
  test('works when passed a number greater than the array length', () => {
    expect([1, 2, 3].first(100)).toEqual([1, 2, 3]);
  });
  test('works with an empty array', () => {
    expect([].first()).toBeUndefined();
    expect([].first(1)).toEqual([]);
    expect([].first(10)).toEqual([]);
  });
});

describe('rest', () => {
  test('returns everything but the first element', () => {
    expect([1, 2, 3, 4, 5].rest()).toEqual([2, 3, 4, 5]);
  });
  test('an array w/ one element returns an empty array', () => {
    expect([1].rest()).toEqual([]);
  });
  test('works on an empty array', () => {
    expect([].rest()).toEqual([]);
  });
});

describe('last', () => {
  test('returns the last element of the array when no argument is passed', () => {
    expect([1, 2, 3, 4, 5].last()).toBe(5);
  });
  test('returns an array with the last element when 1 is passed', () => {
    expect([1, 2, 3, 4, 5].last(1)).toEqual([5]);
  });
  test('returns the last two elements when 2 is passed', () => {
    expect([1, 2, 3, 4, 5].last(2)).toEqual([4, 5]);
  });
  test('works when passed a number greater than the array length', () => {
    expect([1, 2, 3].last(100)).toEqual([1, 2, 3]);
  });
  test('works with an empty array', () => {
    expect([].last()).toBeUndefined();
    expect([].last(1)).toEqual([]);
    expect([].last(10)).toEqual([]);
  });
});

describe('sample', () => {
  test('returns a random element when passed no args', () => {
    let arr = [1, 2, 3, 4, 5];
    for(let i = 0; i < 100; i += 1) {
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

describe('chunk', () => {
  test('breaks the array into chunks whose size is based on the argument', () => {
    expect([1, 2, 3].chunk(1)).toEqual([[1], [2], [3]]);
  });
  test('an array of 6 elemnts is broken into 3 chunks when 2 is passed', () => {
    let chunked = [1, 2, 3, 4, 5, 6].chunk(2);
    expect(chunked).toEqual([[1, 2], [3, 4], [5, 6]]);
  });
  test('works when the array length is not evenly divisible by the chunk size', () => {
    let chunked = [1, 2, 3, 4, 5, 6].chunk(5);
    expect(chunked).toEqual([[1, 2, 3, 4, 5], [6]]);
  });
  test('works when the chunk size is greater than the array length', () => {
    expect([1, 2, 3].chunk(4)).toEqual([[1, 2, 3]]);
  });
});

describe('unique', () => {
  test('removes duplicate values', () => {
    expect([1, 2, 3, 1, 2, 3].unique()).toEqual([1, 2, 3]);
  });
  test('does not change an array with already unique values', () => {
    expect([5, 7, 9].unique()).toEqual([5, 7, 9]);
  });
});

describe('uniqueWithCount', () => {
  
});

describe('without', () => {
  test('removes a given element from the array', () => {
    expect([1, 2, 3, 4, 5].without(3)).toEqual([1, 2, 4, 5]);
  });
  test('removes multiple given elements from the array', () => {
    expect([1, 2, 3, 4, 5].without(2, 3, 4)).toEqual([1, 5]);
  });
  test('does not change the array if the given value is not in it', () => {
    expect([1, 2, 3, 4, 5].without(200)).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('flatten', () => {
  test('flattens a two-d array', () => {
    let flattened = [[1, 2], [3, 4], [5]].flatten();
    expect(flattened).toEqual([1, 2, 3, 4, 5]);
  });
  test('flattens a multi-dimensional array', () => {
    let flattened = [[1, [2, [3, [4, [5]]]]]].flatten();
    expect(flattened).toEqual([1, 2, 3, 4, 5]);
  });
  test('does not affect an already flattened array', () => {
    expect([1, 2, 3, 4, 5].flatten()).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('dropIf', () => {
  test('works with elements', () => {
    expect([1, 2, 3, 4, 5].dropIf(n => n === 1)).toEqual([2, 3, 4, 5]);
  });
  test('works with elements and indices', () => {
    expect(
      [1, 2, 3, 4, 5].dropIf((n, i) => n == 3 || i == 1)
    ).toEqual(
      [1, 4, 5]
    );
  });
});

