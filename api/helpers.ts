import CryptoJS from 'crypto-js';

export function generateSalt () {
    return CryptoJS.lib.WordArray.random(16).toString();
}
export function hashPassword(password: string, salt: string) {

    // Combine the password and salt
    const saltedPassword = password + salt;

    // Hash the salt using SHA-256
    const hashedPassword = CryptoJS.SHA256(saltedPassword).toString();

    return hashedPassword;
    
}

