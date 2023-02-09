function getSumoOffArray(numbers){
    let sum=0;
    for(let i=0; i<numbers.length;i++){
        const index=i;
        const element=numbers[index];
        sum=sum+element;
        console.log(index, element, sum);
    }

}

// get odd numbers of an array

function getOddNumberOffArray(numbers){
    const oddNumber=[];
    for(let i=0; i<numbers.length;i++){
        const index=i;
        const element=numbers[index];
        
        if(element % 2 !== 0){
            // (element%2===0)-eita even number er jonno, (element%2 !==0)-eita odd number er jonno
            console.log(index, element);
            oddNumber.push(element);
        }
    }
    return oddNumber;

}

const myNumbers=[12, 54, 65, 99, 75, 33, 98, 53, 20];
const oddNumber=getOddNumberOffArray(myNumbers);
console.log(oddNumber);
getOddNumberOffArray(myNumbers)
getSumoOffArray(myNumbers);