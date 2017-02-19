/*globals describe test expect*/

import {} from '../string';

describe('chars', () => {
  test('turns a string into an array of characters', () => {
    expect('asdf'.chars()).toEqual(['a', 's', 'd', 'f']);
  });
});

describe('capitalize', () => {
  test('makes the first character in the string uppercase', () => {
    expect('asdf'.capitalize()).toBe('Asdf');
  });
  test('does not affect already capitalized strings', () => {
    expect('ABC'.capitalize()).toBe('ABC');
  });
  test('does not affect numbers', () => {
    expect('123abc'.capitalize()).toBe('123abc');
  });
});

describe('lines', () => {
  test('splits a string by newlines', () => {
    let testString = 'line one\nline two\nline three';
    expect(testString.lines()).toEqual(['line one', 'line two', 'line three']);
  });
});

describe('reverse', () => {
  test('reverses a string', () => {
    expect('abc'.reverse()).toBe('cba');
  });
});

describe('without', () => {
  test('removes all instances of a given string', () => {
    expect('abcabcabc'.without('bc')).toBe('aaa');
  });
  test('removes all instances of multiple given strings', () => {
    let s = 'mary had a little lamb, a little lamb, a little lamb';
    expect(s.without('little', 'lamb')).toBe('mary had a  , a  , a  ');
  });
  test('does not affect a string that does not contain the passed value', () => {
    expect('abc'.without('d')).toBe('abc');
  });
});
