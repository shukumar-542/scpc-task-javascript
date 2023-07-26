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

  