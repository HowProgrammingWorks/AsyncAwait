'use strict';

const fs = require('fs');

class Thenable {
  constructor() {
    this.thenHandler = null;
    this.next = null;
  }

  then(fn) {
    this.fn = fn;
    const next = new Thenable();
    this.next = next;
    return next;
  }

  async resolve(value) {
    const fn = this.fn;
    if (fn) {
      const next = await fn(value);
      if (this.next) {
        this.next.resolve(next);
      }
    }
  }
}

// Usage

const readFile = filename => {
  const thenable = new Thenable();
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    thenable.resolve(data);
  });
  return thenable;
};

const delay = fn => (...args) => {
  const thenable = new Thenable();
  setTimeout(thenable.resolve.bind(thenable), 1000, fn(...args));
  return thenable;
};

const fn = val => val;
const mul = val => val * 5;
const add = val => val + 2;

const fnDel = delay(fn);
const mulDel = delay(mul);
const addDel = delay(add);

(async () => {

  const file1 = await readFile('9-thenable.js');
  console.dir({ length: file1.length });

  const res = await fnDel(7).then(mulDel).then(add).then(addDel);
  console.log(res);

})();
