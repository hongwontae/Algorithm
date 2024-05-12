function addUpTo(n){
    let total = 0;
    for(let i =0; i<=n; i++){
        total =+i;
    }
    return total;
}

function adding(n){
    return n * (n+1)/2;
}


var t1 = performance.now()
addUpTo(100000000)
var t2 = performance.now();
console.log(t2-t1/1000 );