'use strict';

// Task: optimize `fileExists` function to one-liner
// Do not change "Usage" section, edit just "Implementation"

const fs = require('node:fs');

// Implementation

const fileExists = async (name) => {
  try {
    await fs.promises.access(name);
    return true;
  } catch {
    return false;
  }
};

// Usage

(async () => {
  const name = 'file-name.ext';
  const exists = await fileExists(name);
  console.log({ name, exists });
})();

(async () => {
  const name = '5-exists-problem.js';
  const exists = await fileExists(name);
  console.log({ name, exists });
})();
