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
      const result = fn(value);
      const next = this.next;
      if (next.fn) {
        next.resolve(result);
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

const MINIFY_REGEX = new RegExp('\\s+', 'g');
const minify = (content) => content.replaceAll(MINIFY_REGEX, '');

const main = async () => {
  const file1 = await readFile('9-thenable.js').then(minify);
  console.dir({ length: file1.length });
};

main();
