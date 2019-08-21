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

  resolve(value) {
    const fn = this.fn;
    if (fn) {
      const next = fn(value);
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

(async () => {

  const file1 = await readFile('9-thenable.js').then(() => 5).then(() => 25); // Doesn`t work in old example
  console.log(file1);
  console.dir({ length: file1.length });

})();
