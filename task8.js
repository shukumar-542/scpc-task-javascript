function secondSmall(numbers){
   const sortArray = numbers.sort()
   let number = sortArray[1];
   return number
}
const result = secondSmall([5,6,7,9]);
console.log(result);