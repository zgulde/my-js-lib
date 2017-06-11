Array.prototype.dropIf = function(f) {
  return this.filter((e, i, a) => ! f(e, i , a));
};

Array.prototype.first = function(n) {
  return typeof n === 'undefined' ? this[0] : this.slice(0, n);
};

Array.prototype.rest = function() {
  return this.slice(1);
};

Array.prototype.last = function(n) {
  return typeof n === 'undefined' ? this[this.length - 1] : this.slice(- n);
};

Array.prototype.sample = function(n) {
  return typeof n === 'undefined'
    ? this[Math.floor(Math.random() * this.length)]
    : new Array(n).fill(null).map(() => this.sample());
};

Array.prototype.chunk = function(n) {
  return new Array(Math.ceil(this.length / n))
    .fill(null)
    .map((_, i) => this.slice(i * n, n * (i + 1)));
};

Array.prototype.unique = function() {
  return Array.from(new Set(this));
};

Array.prototype.without = function(...elements) {
  return this.dropIf(e => elements.includes(e));
};

Array.prototype.flatten = function() {
  return this.reduce((acc, val) => acc.concat(Array.isArray(val) ? val.flatten() : val), []);
};
