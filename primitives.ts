let str = '1';

let num = 1;

let isSmth = true;

str = 0;

num = '1';

isSmth = null;

// ts prevents us from assigning mismatching types

num = parseInt('1', 10);
num = NaN; // typeof NaN === 'number'

if (!Number.isNaN(num)) {
  // do stuff safely
}

const returnsUndefined = () => () => {};

isSmth = !!returnsUndefined(); // converts to boolean
