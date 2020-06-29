module.exports = factorial;
function factorial (n, result){
    if(n==0){
        return result;
    }
    else{
        return factorial(n-1, n*result);
    }
}

function factorialFunc (n){
    return factorial (n,1);
}

console.log(factorialFunc(5));