'use strict';

const DAY_OF_JUDGMENT = Date.now() + Math.floor(Math.random() * 5000);

class Coming {
  constructor() {
    return new Promise(resolve => setTimeout(() => {
      resolve(this);
    }, DAY_OF_JUDGMENT - Date.now()));
  }
}

(async () => {

  const secondComing = await new Coming();
  console.dir(secondComing);

})();
