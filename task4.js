function findTargetValueAPos(arr,target){
   
    for(let i=0; i<arr.length; i++){
        if(arr[i] + arr[i + 1] === target){
            return  [i , i+1]
        }
    }
    
}
const result = findTargetValueAPos([1, 3, 6, 8, 11, 15], 9);
console.log(result);
