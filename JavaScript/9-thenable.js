'use strict';

const fs = require('node:fs');

class Thenable {
  constructor() {
    this.next = null;
    this.fn = null;
  }

  then(fn) {
    this.fn = fn;
    const next = new Thenable();
    this.next = next;
    return next;
  }

  resolve(value) {
    const fn = this.fn;
    if (fn) {
      const next = fn(value);
      if (next) {
        next.then((value) => {
          this.next.resolve(value);
        });
      }
    }
  }
}

// Usage

const readFile = (filename) => {
  const thenable = new Thenable();
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    thenable.resolve(data);
  });
  return thenable;
};

const main = async () => {
  const file1 = await readFile('9-thenable.js');
  console.dir({ length: file1.length });
};

main();
