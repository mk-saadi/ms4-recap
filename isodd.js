function leapYear(year){
    const reminder =year % 4;
    // if (reminder===0){
    //     console.log('it is a leap year', year);
    // }
    // else{
    //     console.log('not a leap year', year);
    // }
    if (reminder===0){
        return true;
    }
    else{
        return false
    }
}

const isItLeap =leapYear(2024);
console.log('is a leap year', isItLeap);
const notALeap =leapYear(2025);
console.log('not a leap year', notALeap);