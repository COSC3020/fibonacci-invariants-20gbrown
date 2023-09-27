//Gage Brown 

function fib(n, arr = {}) {
    if ( n in arr) {
        return arr[n];
    }

    if (n === 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    else {
        const result = fib(n - 1, arr) + fib(n - 2, arr);//recursive call 
        arr[n] = result;
        return result;
    }
}
