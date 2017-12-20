# My JS Lib

[ ![Codeship Status for zgulde/my-js-lib](https://app.codeship.com/projects/fb6cb800-d9ff-0134-d6f9-3e892a3f83ae/status?branch=master)](https://app.codeship.com/projects/203554)

A bunch of extensions to the native javascript prototypes.

Mostly a project for my own learning, but who knows? Maybe someone will find it
useful.

[You can play with it in the browser here.](https://zgul.de/zgulde-lib)

## Setup

After cloning,

```
npm install
./install-hooks.sh
```

To install a pre-commit hook that runs the tests and lints the project.

## Development

Run tests

```
npm test
```

Build + minify

```
npm run build
```

## Usage

Documentation is built into the tests

    Array.prototype
      .first([n]) -- returns the first n elements
        ✓ [1, 2, 3].first() === 1 (2ms)
        ✓ [1, 2, 3].first(1) === [1] (1ms)
        ✓ [1, 2, 3].first(2) === [1, 2]
        ✓ [1, 2, 3].first(100) === [1, 2, 3]
        ✓ [].first() === undefined
        ✓ [].first(1) === []
        ✓ [].first(10) === []
      .rest() -- returns everything but the first element
        ✓ [1, 2, 3, 4, 5].rest() === [2, 3, 4, 5]
        ✓ [1].rest() === []
        ✓ [].rest() === [] (1ms)
      .last([n]) -- returns the last n elements
        ✓ [1, 2, 3, 4, 5].last() === 5
        ✓ [1, 2, 3, 4, 5].last(1) === [5]
        ✓ [1, 2, 3, 4, 5].last(2) === [4, 5]
        ✓ [1, 2, 3].last(100) === [1, 2, 3]
        ✓ [].last() === undefined
        ✓ [].last(1) === [] -- [].last(100) === [] (1ms)
      .sample([n]) -- returns n random elements
        ✓ returns a random element when passed no args (3ms)
        ✓ returns an array of randomly selected items when passed a number
      .chunk(n) -- breaks an array in n-sized chunks
        ✓ [1, 2, 3].chunk(1) === [[1], [2], [3]] (1ms)
        ✓ [1, 2, 3, 4, 5, 6].chunk(2) === [[1, 2], [3, 4], [5, 6]]
        ✓ [1, 2, 3, 4, 5, 6].chunk(5) === [[1, 2, 3, 4, 5], [6]]
        ✓ [1, 2, 3].chunk(4) === [[1, 2, 3]]
      .unique() -- removes duplicate values
        ✓ [1, 2, 3, 1, 2, 3].unique() === [1, 2, 3]
        ✓ [5, 7, 9].unique() === [5, 7, 9]
      .without(ele1[, ele2[, ...]]) -- removes element(s) from an array
        ✓ [1, 2, 3, 4, 5].without(3) === [1, 2, 4, 5]
        ✓ [1, 2, 3, 4, 5].without(2, 3, 4) === [1, 5] (1ms)
        ✓ [1, 2, 3, 4, 5].without(200) === [1, 2, 3, 4, 5]
      .flatten() -- flattens an array
        ✓ [[1, 2], [3, 4], [5]].flatten() === [1, 2, 3, 4, 5]
        ✓ [[1, [2, [3, [4, [5]]]]]].flatten() === [1, 2, 3, 4, 5]
        ✓ [1, 2, 3, 4, 5].flatten() === [1, 2, 3, 4, 5]
      .dropIf(fn) -- the opposite of .filter()
        ✓ [1, 2, 3, 4, 5].dropIf(n => n === 1) === [2, 3, 4, 5]
        ✓ [1, 2, 3, 4, 5].dropIf((n, i) => n == 3 || i == 1) === [1, 4, 5] (2ms)
      groupBy(keyFn) -- transform collection into a map
        ✓ [1, 2, 3, 4].groupBy(n => n % 2 == 0 ? "even" : "odd") === {odd: [1, 3], even: [2, 4]}
      reduceBy(keyFn, reducingFn) -- group by, then transform each value
        ✓ [1, 2, 3, 4].reduceBy(n => n % 2 == 0 ? "even" : "odd", xs => xs.reduce((x, y) => x + y)) (1ms)

    Number.prototype
      .isOdd() and .isEven()
        ✓ (57).isOdd() === true
        ✓ (42).isOdd() === false (1ms)
        ✓ (42).isEven() === true
        ✓ (57).isEven() === false
      .to(end[, step]) -- range function
        ✓ (10).to(1) === []
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
        ✓ (1).fizzbuzz() === 1
        ✓ (2).fizzbuzz() === 2 (2ms)
        ✓ (3).fizzbuzz() === "fizz"
        ✓ (4).fizzbuzz() === 4 (1ms)
        ✓ (5).fizzbuzz() === "buzz"
        ✓ (6).fizzbuzz() === "fizz"
        ✓ (7).fizzbuzz() === 7
        ✓ (8).fizzbuzz() === 8
        ✓ (9).fizzbuzz() === "fizz"
        ✓ (10).fizzbuzz() === "buzz"
        ✓ (11).fizzbuzz() === 11
        ✓ (12).fizzbuzz() === "fizz"
        ✓ (13).fizzbuzz() === 13 (1ms)
        ✓ (14).fizzbuzz() === 14
        ✓ (15).fizzbuzz() === "fizzbuzz"

    String.prototype
      .chars()
        ✓ "qwerty".chars() === ["q", "w", "e", "r", "t", "y"]
      .capitalize() -- uppercases the first letter
        ✓ "asdf".capitalize() === "Asdf" (1ms)
        ✓ "ABC".capitalize() === "ABC"
        ✓ "123abc".capitalize() === "123abc"
      .lines() -- splits a string by newlines
        ✓ "line one\nline two\nline three".lines() === ["line one", "line two", "line three"]
      .reverse() -- reverses a string
        ✓ "abc".reverse() === "cba"
      .without(str1[, str2[, ...]]) -- removes instances of given string(s)
        ✓ "abcabcabc".without("bc") === "aaa" (1ms)
        ✓ "mary had a little lamb, a little lamb, a little lamb".without("little", "lamb") === "mary had a  , a  , a  "
        ✓ "abc".without("d") === "abc"

To produce the above output yourself:

```
npm run test -- --verbose
```
