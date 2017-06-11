# My JS Lib

[ ![Codeship Status for zgulde/my-js-lib](https://app.codeship.com/projects/fb6cb800-d9ff-0134-d6f9-3e892a3f83ae/status?branch=master)](https://app.codeship.com/projects/203554)

A bunch of extensions to the native javascript prototypes.

Mostly a project for my own learning, but who knows? Maybe someone will find it
useful.

## Using

After cloning,

```
npm install
```

Run tests

```
npm test
```

Build + minify

```
npm run build
```

## Documentation

Documentation is built into the tests

```
npm test -- --verbose
```

    Number.prototype
      .isOdd() and .isEven()
        ✓ (57).isOdd() === true (2ms)
        ✓ (42).isOdd() === false
        ✓ (42).isEven() === true (1ms)
        ✓ (57).isEven() === false
      .to(end[, step]) -- range function
        ✓ (10).to(1) === [] (1ms)
        ✓ (5).to(5) === []
        ✓ (1).to(10) === [1, 2, 3, 4, 5, 6, 7, 8, 9] (1ms)
        ✓ (-3).to(3) === [-3, -2, -1, 0, 1, 2]
        ✓ (1).to(10, 2) === [1, 3, 5, 7, 9]
        ✓ (1).to(5, 0) === []
        ✓ (1).to(5, -1) === []
        ✓ (1).to(5, 10) === [1]
        ✓ (0).to(0.3, 0.1) === [0, 0.1, 0.2]
      .times(cb) -- repeatedly run a function
        ✓ (5).times(cb) -- cb is called 5 times (1ms)
        ✓ passes the number of the iteration to the callback
      .fizzbuzz() -- do fizzbuzz for one number
        ✓ (1).fizzbuzz() === 1 (1ms)
        ✓ (2).fizzbuzz() === 2 (1ms)
        ✓ (3).fizzbuzz() === "fizz" (1ms)
        ✓ (4).fizzbuzz() === 4
        ✓ (5).fizzbuzz() === "buzz"
        ✓ (6).fizzbuzz() === "fizz"
        ✓ (7).fizzbuzz() === 7
        ✓ (8).fizzbuzz() === 8
        ✓ (9).fizzbuzz() === 9
        ✓ (10).fizzbuzz() === 10
        ✓ (11).fizzbuzz() === 11 (1ms)
        ✓ (12).fizzbuzz() === 12
        ✓ (13).fizzbuzz() === 13
        ✓ (14).fizzbuzz() === 14
        ✓ (15).fizzbuzz() === 15
    
    String.prototype
      .chars()
        ✓ turns a string into an array of characters (1ms)
      .capitalize() -- uppercases the first letter
        ✓ "asdf".capitalize() === "Asdf"
        ✓ "ABC".capitalize() === "ABC"
        ✓ "123abc".capitalize() === "123abc" (1ms)
      .lines() -- splits a string by newlines
        ✓ "line one\nline two\nline three".lines() === ["line one", "line two", "line three"]
      .reverse() -- reverses a string
        ✓ "abc".reverse() === "cba"
      .without(str1[, str2[, ...]]) -- removes instances of given string(s)
        ✓ "abcabcabc".without("bc") === "aaa" (1ms)
        ✓ "mary had a little lamb, a little lamb, a little lamb".without("little", "lamb") === "mary had a  , a  , a  "
        ✓ "abc".without("d") === "abc"
    
    Array.prototype
      .first([n]) -- returns the first n elements
        ✓ returns the first element of the array if no argument is passed
        ✓ returns an array with the first element if 1 is passed (1ms)
        ✓ returns the first two elements if 2 is passed
        ✓ works when passed a number greater than the array length (1ms)
        ✓ works with an empty array (1ms)
      .rest() -- returns everything but the first element
        ✓ [1, 2, 3, 4, 5].rest() === [2, 3, 4, 5]
        ✓ [1].rest() === [] (1ms)
        ✓ [].rest() === [] (6ms)
      .last([n]) -- returns the last n elements
        ✓ [1, 2, 3, 4, 5].last() === 5
        ✓ [1, 2, 3, 4, 5].last(1) === [5] (1ms)
        ✓ [1, 2, 3, 4, 5].last(2) === [4, 5]
        ✓ [1, 2, 3].last(100) === [1, 2, 3]
        ✓ [].last() === undefined
        ✓ [].last(1) === [] -- [].last(100) === []
      .sample([n]) -- returns n random elements
        ✓ returns a random element when passed no args (2ms)
        ✓ returns an array of randomly selected items when passed a number (1ms)
      .chunk(n) -- breaks an array in n-sized chunks
        ✓ [1, 2, 3].chunk(1) === [[1], [2], [3]]
        ✓ [1, 2, 3, 4, 5, 6].chunk(2) === [[1, 2], [3, 4], [5, 6]]
        ✓ [1, 2, 3, 4, 5, 6].chunk(5) === [[1, 2, 3, 4, 5], [6]]
        ✓ [1, 2, 3].chunk(4) === [[1, 2, 3]]
      .unique() -- removes duplicate values
        ✓ [1, 2, 3, 1, 2, 3].unique() === [1, 2, 3]
        ✓ [5, 7, 9].unique() === [5, 7, 9] (1ms)
      .without(ele1[, ele2[, ...]]) -- removes element(s) from an array
        ✓ [1, 2, 3, 4, 5].without(3) === [1, 2, 4, 5]
        ✓ [1, 2, 3, 4, 5].without(2, 3, 4) === [1, 5] (1ms)
        ✓ [1, 2, 3, 4, 5].without(200) === [1, 2, 3, 4, 5] (1ms)
      .flatten() -- flattens an array
        ✓ [[1, 2], [3, 4], [5]].flatten() === [1, 2, 3, 4, 5]
        ✓ [[1, [2, [3, [4, [5]]]]]].flatten() === [1, 2, 3, 4, 5] (1ms)
        ✓ [1, 2, 3, 4, 5].flatten() === [1, 2, 3, 4, 5] (1ms)
      .dropIf(fn) -- the opposite of .filter()
        ✓ [1, 2, 3, 4, 5].dropIf(n => n === 1) === [2, 3, 4, 5] (1ms)
        ✓ [1, 2, 3, 4, 5].dropIf((n, i) => n == 3 || i == 1) === [1, 4, 5]
