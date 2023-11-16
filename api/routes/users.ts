import Router from 'koa-router';
import Koa, { Context } from 'koa';
const router = new Router();
import * as usersController from '../controllers/usersController.js'
import { createUserParams, verifyLoginParams } from '../types/index';

router.get('/user', (req, res) => {

})

router.post('/user', async (ctx: Context) => {
    try {
        let body = ctx.request.body as createUserParams;
        let response = await usersController.createUser(body)
        ctx.body = response;
        ctx.status = 201
    } catch(error: any) {
        if (error.message.includes('Username is already taken')) {
            // Respond with a 409 Conflict status code and a user-friendly error message
            ctx.status = 409
            ctx.response.body = { success: false, message: error.message }
        }
    }
})
router.post('/login', async (ctx : Context) => {
    try {
        let body = ctx.request.body as verifyLoginParams;
        let response : any = await usersController.verifyLogin(body)
        if(response.success === true) {
            ctx.body = response;
            ctx.status = 200
            return;
        } else {
            ctx.body = response;
            ctx.status = 401
        }
    } catch(error: any) {
        if (error.message.includes('Username is already taken')) {
            // Respond with a 409 Conflict status code and a user-friendly error message
            ctx.body = { success: false, message: error.message };
            ctx.status = 500
        }
    }
})

export default router;