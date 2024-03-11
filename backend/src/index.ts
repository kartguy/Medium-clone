import { Hono } from 'hono'
import userAPI from '../routes/user';
import blogAPI from '../routes/blog';
import { cors } from 'hono/cors'

const app = new Hono();

app.use('/api/*',cors())

app.get('/',(c)=>{
  return c.json({
    msg:"Hello from server"
  })
})

app.route('/api/v1/user',userAPI);
app.route('/api/v1/blog',blogAPI)


export default app;