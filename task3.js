function mostFrequentNumber(numbers){
    for(number of numbers){
        for(let i=1; i< numbers.length; i++){
            console.log('num',numbers[i]);
        }
    }
}
mostFrequentNumber( [3, 5, 2, 5, 3, 3, 1, 4, 5])



function mostFrequent(arr, n) {
    let maxcount = 0;
    let element_having_max_freq;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i] == arr[j])
                count++;
            }
        if (count > maxcount) {
            maxcount = count;
            
            element_having_max_freq = arr[i];
        }
    }
 
//    console.log(element_having_max_freq)
}
let arr = [40, 50, 30,50 ];
let n = arr.length;
mostFrequent(arr, n)