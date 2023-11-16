import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';
import * as helpers from '../helpers.js';
import * as userService from '../services/usersServices.js'
import { verifyLoginParams, createUserParams } from '../types/index';

export async function createUser({username, password}: createUserParams) {
    const salt = helpers.generateSalt();
    const hashedPassword = helpers.hashPassword(password, salt);
    const uniqueUserId = "US" + uuidv4();

    const data = {
        userId: uniqueUserId,
        salt,
        hashedPassword,
        username
    };
    
    const response =  await userService.createUser(data);
    return response
}
export async function verifyLogin ({username, password}: verifyLoginParams)  {
    return await userService.verifyLogin({username, password})
}
