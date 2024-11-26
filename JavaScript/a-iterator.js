'use strict';

const range = {
  start: 1,
  end: 10,
  [Symbol.asyncIterator]() {
    let value = this.start;
    return {
      next: () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              value,
              done: value++ === this.end + 1,
            });
          }, 0);
        }),
    };
  },
};

const main = async () => {
  console.dir({ range });
  for await (const number of range) {
    console.log(number);
  }
};

main();
