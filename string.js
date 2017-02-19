require('./array');

String.prototype.chars = function() {
  return this.split('');
};

String.prototype.capitalize = function() {
  return this[0].toUpperCase() + this.slice(1);
};

String.prototype.lines = function() {
  return this.split('\n');
};

String.prototype.reverse = function() {
  return this.chars().reverse().join('');
};

String.prototype.without = function(...strs) {
  let s = this.slice();
  strs.forEach(str => {
    while (s.includes(str)) {
      s = s.replace(str, '');
    }
  });
  return s;
};
