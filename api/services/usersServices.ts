import sql from '.././db.js';
import * as helpers from '.././helpers.js' 
import { verifyLoginParams, UserData } from '../types/index';

export const createUser = async (data: UserData) => {

    try {
        const results = await sql`
            INSERT INTO game_sync_social.user_information 
            (user_id, username, password_hash, password_salt, hash_algorithm)
            VALUES (${data.userId}, ${data.username}, ${data.hashedPassword}, ${data.salt}, 246)
        `
        return {success: true}
    } catch (error: any) {
        if (error.code === '23505') { // PostgreSQL specific error code for unique constraint violation
           throw new Error('Username is already taken. Please choose a different username')
        }
    }
}
export const  verifyLogin = async ({username, password}: verifyLoginParams) => {
    try{
        const results = await sql`
        SELECT password_hash, password_salt FROM game_sync_social.user_information
        WHERE username = ${username} LIMIT 1
    `
    const providedHashedPassword = helpers.hashPassword(password, results[0].password_salt);

    if (providedHashedPassword === results[0].password_hash) {
        return {success: true}
    } else if(!results) {
        return {success: false, message: 'No user with this username exsits'}
    } else {
        return{success: false, message: 'Incorrect password'}
    }
    } catch (error) {
        throw error
    }
}