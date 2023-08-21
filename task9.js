const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);
const spread = (numbers) =>{
    const [a,b,...rest] = numbers
    console.log(numbers);
    console.log(a,b, rest);
}
spread([2,4,6,8,10])