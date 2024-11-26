'use strict';

// Task: optimize `total` call with default value 0 (as in example)
// to have one-line solution - 1 line instead of 5 lines
// (call and default value in one line)

// Do not change code before usage block

const total = async (items) => {
  let result = 0;
  for (const item of items) {
    if (item.price < 0) {
      throw new Error('Negative price is not allowed');
    }
    result += item.price;
  }
  return result;
};

const electronics = [
  { name: 'Laptop', price: -1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

// Usage block: change just following code

const main = async () => {
  let money = 0;
  try {
    money = await total(electronics);
  } catch {
    console.log('catched');
  }
  console.log({ money });
};

main();
