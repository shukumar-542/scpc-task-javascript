function mostFrequentNumber(numbers){
    let maxCount = 0;
    let maxNumber;
    for (let i = 0; i < numbers.length; i++) {
        let count = 0;
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] == numbers[j])
                count++;
        }
        if (count > maxCount) {
            maxCount = count;
            maxNumber = numbers[i];

        }
    }
 
    console.log(maxNumber)
        
    
}
mostFrequentNumber( [3, 5, 2, 5, 3, 3, 1, 4, 5]);


