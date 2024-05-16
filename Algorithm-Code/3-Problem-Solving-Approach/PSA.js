function strFunction(str = ''){
    let charObj = {};

    for(let i=0; i<str.length; i++){
        let char = str[i].toUpperCase()
        if(charObj[char]>0){
            charObj[char]++;
        } else {
            charObj[char] = 1;
        }
    };
    return charObj;
}

let a = strFunction('Hello');
console.log(a);