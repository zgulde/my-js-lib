Number.prototype.isEven = function() {
  return this % 2 === 0;
};

Number.prototype.isOdd = function() {
  return this % 2 !== 0;
};

Number.prototype.to = function(n, step = 1){
  if (step <= 0 || n < this ) { return []; }
  return new Array(Math.ceil((n - this) / step)).fill(null)
    .map((_, i) => this + (i * step));
};

Number.prototype.times = function(cb) {
  new Array(+this).fill(null).forEach((_, i) => cb(i + 1));
};

Number.prototype.fizzbuzz = function() {
  return [['fizz'][this % 3], ['buzz'][this % 5]].join('') || this;
};
