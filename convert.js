// const myInches=1359;
// const myFeet=myInches/12;
// console.log(myFeet);

// const dataInches=144;
// const dataFeet=dataInches/12;
// console.log('data inches:', dataFeet);


function inchToFeet(inches){
    const feet= inches/12;
    return feet;

}
const dataInches=144;
const dataFeet=inchToFeet(dataInches);
console.log(dataFeet);

const nanoInches=163;
const nanoFeet=inchToFeet(nanoInches);
console.log(nanoFeet);