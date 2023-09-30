const sql = require('../db');

module.exports.createUser = async (data) => {

    try{
        const results = await sql`
        INSERT INTO game_sync_social.user_data (user_id, username, password_hash, password_salt, hash_algorithm)
        VALUES (${data.userId}, ${data.username}, ${data.hashedPassword}, ${data.salt}, 'SHA-256')
    `
    console.log(results);
    } catch(e) {
        console.log(e);
    }

}