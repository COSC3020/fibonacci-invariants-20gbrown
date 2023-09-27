const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

function fibTest(n) {
    var fib_solns = [0, 1]; //intialize with [0,1]
    if(n <= 1) return fib_solns.slice(0, n + 1); //return the first n + 1 elements 
    //fib_solns[1] = 1;
    //if(n == 1) return fib_solns;
    for(var i = 2; i <= n; i++) fib_solns[i] =
        fib_solns[i-1] + fib_solns[i-2];
    return fib_solns;
}

const test = jsc.forall("nat", function (n) {
const computedFibonacci = fib(n);
const expectedFibonacci = fibTest(n);

if (computedFibonacci.length !== expectedFibonacci.length) {
  return false;
}

for (let i = 0; i < computedFibonacci.length; i++) {
  if (computedFibonacci[i] !== expectedFibonacci[i]) {
    return false;
  }
}

return true;
});

jsc.assert(test);

/*
const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

function fibTest(n) {
    var fib_solns = [0];
    if(n == 0) return fib_solns;
    fib_solns[1] = 1;
    if(n == 1) return fib_solns;
    for(var i = 2; i <= n; i++) fib_solns[i] =
        fib_solns[i-1] + fib_solns[i-2];
    return fib_solns;
}

const test =
    jsc.forall("nat", function(n) {
        return JSON.stringify(fib(n)) ==
            JSON.stringify(fibTest(n));
    });
jsc.assert(test);
*/
