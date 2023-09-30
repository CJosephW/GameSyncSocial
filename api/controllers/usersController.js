const crypto = require('crypto')
const helpers = require('../helpers')
userService = require('../services/usersServices')
const { v4: uuidv4 } = require('uuid');
const postgres = require("postgres")
console.log(process.env.HOST)

module.exports.createUser = async ({username, password}) => {
        
    const salt = helpers.generateSalt();
    const hashedPassword = helpers.hashPassword(password, salt);
    const uniqueUserId = "US" + uuidv4();

    const data = {
        userId: uniqueUserId,
        salt,
        hashedPassword,
        username
    };
    
    await userService.createUser(data);
}
