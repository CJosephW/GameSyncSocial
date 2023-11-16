import Koa from 'koa';
import bodyParser from 'koa-bodyparser'; // Import the middleware
import userRoutes from './routes/users.js';

const app = new Koa();

app.use(bodyParser({enableTypes: ['json']}))
app.use(userRoutes.routes());


app.listen(3000);