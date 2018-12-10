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

(async () => {

  console.log('inc(5) =', await inc(5));
  console.log('sum(1, 3) =', await sum(1, 3));
  console.log('max(8, 6) =', await max(8, 6));
  console.log('avg(8, 6) =', await avg(8, 6));

})();
