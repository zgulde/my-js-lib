/*globals describe test expect*/

import {} from '../string';

describe('String.prototype', () => {
  describe('.chars()', () => {
    test('turns a string into an array of characters', () => {
      expect('asdf'.chars()).toEqual(['a', 's', 'd', 'f']);
    });
  });

  describe('.capitalize() -- uppercases the first letter', () => {
    test('"asdf".capitalize() === "Asdf"', () => {
      expect('asdf'.capitalize()).toBe('Asdf');
    });
    test('"ABC".capitalize() === "ABC"', () => {
      expect('ABC'.capitalize()).toBe('ABC');
    });
    test('"123abc".capitalize() === "123abc"', () => {
      expect('123abc'.capitalize()).toBe('123abc');
    });
  });

  describe('.lines() -- splits a string by newlines', () => {
    test('"line one\\nline two\\nline three".lines() === ["line one", "line two", "line three"]', () => {
      let testString = 'line one\nline two\nline three';
      expect(testString.lines()).toEqual(['line one', 'line two', 'line three']);
    });
  });

  describe('.reverse() -- reverses a string', () => {
    test('"abc".reverse() === "cba"', () => {
      expect('abc'.reverse()).toBe('cba');
    });
  });

  describe('.without(str1[, str2[, ...]]) -- removes instances of given string(s)', () => {
    test('"abcabcabc".without("bc") === "aaa"', () => {
      expect('abcabcabc'.without('bc')).toBe('aaa');
    });
    test('"mary had a little lamb, a little lamb, a little lamb".without("little", "lamb") === "mary had a  , a  , a  "', () => {
      let s = 'mary had a little lamb, a little lamb, a little lamb';
      expect(s.without('little', 'lamb')).toBe('mary had a  , a  , a  ');
    });
    test('"abc".without("d") === "abc"', () => {
      expect('abc'.without('d')).toBe('abc');
    });
  });
});
