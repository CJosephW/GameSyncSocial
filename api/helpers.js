const crypto = require('crypto-js');

module.exports.generateSalt = () =>{
    return crypto.lib.WordArray.random(16);
}
module.exports.hashPassword = (password, salt) => {

    // Combine the password and salt
    const saltedPassword = password + salt.toString(crypto.enc.Base64);

    // Hash the salt using SHA-256
    const hashedPassword = crypto.SHA256(saltedPassword);

    return hashedPassword;
    
}

