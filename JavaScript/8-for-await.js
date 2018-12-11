'use strict';

const fs = require('fs');

(async () => {
  const stream = fs.createReadStream('./8-for-await.js', 'utf8');
  for await (const chunk of stream) {
    console.log(chunk);
  }
})();
