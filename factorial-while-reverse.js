function factorial(number){
    let num=number;
    let result=1;
    while(num>=1){
        result=result* num;
        num--;
    }
    return result;
}

const output= factorial(10);
console.log(output)


function print(a, b, c){
    return a+2;
    return a*b;
    return b*c+a;
  }
  console.log(print(1,2,3));