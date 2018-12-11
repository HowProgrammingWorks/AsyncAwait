'use strict';

console.log(Function);

const AsyncFunction = (async () => {}).constructor;
console.log(AsyncFunction);

const fn = () => {};
const afn = async () => {};

console.dir({
  fn: typeof fn,
  afn: typeof afn,
});

console.log(fn instanceof Function);
console.log(afn instanceof Function);
console.log(fn instanceof AsyncFunction);
console.log(afn instanceof AsyncFunction);

console.log(afn.__proto__.constructor);
console.log(afn.__proto__.__proto__.constructor);
console.log(afn.__proto__.__proto__.__proto__.constructor);

console.log();

console.log(Object.getPrototypeOf(afn).constructor);
console.log(
  Object.getPrototypeOf(
    Object.getPrototypeOf(afn)).constructor);
console.log(
  Object.getPrototypeOf(
    Object.getPrototypeOf(
      Object.getPrototypeOf(afn))).constructor);
