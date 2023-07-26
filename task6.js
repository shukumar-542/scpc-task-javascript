function generateRandomPass(len){
   
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()abcdefghijklmnopqrstuvwxyz123456789'
    let password = ''
    for(let i = 0; i<=len ; i ++ ){
        const randomNumber = Math.floor(Math.random() * char.length)
        password += char[randomNumber];
    }
    return password
}
 const result = generateRandomPass(8);
 console.log(result);



// function generateRandomPassword(length) {
//     const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
//     const numbers = '0123456789';
//     const specialCharacters = '@#$%^&*';
  
//     const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  
//     let password = '';
//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * allCharacters.length);
//       password += allCharacters[randomIndex];
//     }
  
//     return password;
//   }
  
//   console.log(generateRandomPassword(8))
  