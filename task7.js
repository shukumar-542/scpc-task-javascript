function romanToInteger(romanNumeral) {
    const romanNumeralsMap = {
      'I': 1,
      'V': 5,
      'X': 10,
    };
  
    let total = 0;
    let prevValue = 0;
  
    for (let i = romanNumeral.length - 1; i >= 0; i--) {
      const char = romanNumeral[i];
      const currentValue = romanNumeralsMap[char];
  
      if (currentValue >= prevValue) {
        total += currentValue;
      } else {
        total -= currentValue;
      }
  
      prevValue = currentValue;
    }
  
    return total;
  }
  
  const total  = romanToInteger("IV");
  console.log(total);

  