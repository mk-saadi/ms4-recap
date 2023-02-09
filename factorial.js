// multiply
// 10*9*8*7*6*5*4*3*2*1*

function factorial(number){
    let result=1;
    for(let i=1; i<=number; i++){
        result=result *i;
    }
    return result;
}

const result= factorial(30);
console.log(result)