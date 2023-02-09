//  1+58+658+4+5+8+74+12+7+

function sumOfNumber(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum = sum + i;
    console.log(i, sum);
  }
  return sum;
}