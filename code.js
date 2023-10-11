//Gage Brown 

function fib(n) {
    if (n === 0) {
      return [0];
    } 
    else if (n === 1) {
      return [0, 1];
    } 
    else {
      const resultArr = fib(n - 1);
      resultArr.push(resultArr[resultArr.length - 1] + resultArr[resultArr.length - 2]);
      return resultArr;
    }
  }
