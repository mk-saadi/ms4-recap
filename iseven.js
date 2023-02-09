// "%" vagsesh

function isEven(number){
    const reminder=number%2;
    // console.log(reminder);
    // if (reminder===0){
    //     console.log('number is even');
    // }
    // else{
    //     console.log('number is odd');
    // }
    if (reminder===0){
        return true;
    }
    else {
        return false;
    }
}

const myNumber=isEven(155);
console.log(myNumber);

const herNumber=isEven(1566);
console.log(herNumber);


// alternate way

console.log(155%2);