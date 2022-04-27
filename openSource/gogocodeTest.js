const code = `
  const moment = require('moment');
  var a = 1;
  const b = 2;
  function log (x, y = 'World') {
    console.log('a')
    console.log(a, x, y);
  }

  log(a, b)
`;

const $ = require('gogocode');
// const AST = $(code);

// $(code).replace('a', 'c');

let code2 =  $(code).replace(`a`, `c`)

console.log(code2.generate());