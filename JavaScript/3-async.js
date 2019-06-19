'use strict';

async function inc(a) {
  return a + 1;
}

const sum = async function(a, b) {
  return a + b;
};

const max = async (a, b) => (a > b ? a : b);

const avg = async (a, b) => {
  const s = await sum(a, b);
  return s / 2;
};

const obj = {
  name: 'Marcus Aurelius',
  async split(sep = ' ') {
    return this.name.split(sep);
  }
};

class Person {
  constructor(name) {
    this.name = name;
  }

  static async of(name) {
    return await new Person(name);
  }

  async split(sep = ' ') {
    return this.name.split(sep);
  }
}

const person = new Person('Marcus Aurelius');

(async () => {

  console.log('await inc(5) =', await inc(5));
  console.log('await sum(1, 3) =', await sum(1, 3));
  console.log('await max(8, 6) =', await max(8, 6));
  console.log('await avg(8, 6) =', await avg(8, 6));
  console.log('await obj.split() =', await obj.split());
  console.log('await person.split() =', await person.split());

})();
