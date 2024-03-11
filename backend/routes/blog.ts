import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt';
import { creatPostInput, updatePostInput } from '@kartguy/common-app';

const blogAPI = new Hono<{
	Bindings: {
		DATABASE_URL: string,
        JWT_SECRET:string
	},
  Variables:{
    userId:string, 
    prisma:PrismaClient
  }
}>();

//middleware
blogAPI.use('/*', async (c, next) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    try {
      const token=c.req.header("token");
      
      const decodedPayload= await verify(`${token}`,c.env.JWT_SECRET);
      
      const userExists=await prisma.user.findUnique({
        where:{
          id:decodedPayload.userId
        }
      })
      
      if(userExists==null){
        c.status(403)
        return c.json({msg:"please login"})
      }

      c.set("userId",`${decodedPayload.userId}`)
      await next()
    } 
    catch (error) {
      return c.json({error: "Please login"})
    }
  })

//get all
blogAPI.get('/bulk', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const posts = await prisma.post.findMany({});

	return c.json(posts);
})

//get blog from id
blogAPI.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());

      const blogId = c.req.param('id');

      try {
        const result= await prisma.post.findFirst({
            where:{
                id:blogId
            }
        })

        c.status(200);
        return c.json({result})
      } 
      catch (error) {
        c.status(500)
        return c.json({error: "error while signing up"})
      }
})

//post blog
blogAPI.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());

    const userId=c.get("userId");

    const data=await c.req.json();
    const body=data.data;

    const{success}=creatPostInput.safeParse(body);

    if(!success){
      c.status(403)
      return c.json({
        msg:"Wrong input"
      })
    }

    try {
        const res= await prisma.post.create({
            data:{
                title:body.title,
                content:body.content,
                authorId:userId
            }
        })

        return c.json({
            msg:'blog created'
        })
        
    } 
    catch (error) {
        return c.json({error: "error while signing up"})
    }
})

//update blog
blogAPI.put('/', async (c) => {
	const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());

      const data=await c.req.json();
      const body=data.data;

      const{success}=updatePostInput.safeParse(body);

      if(!success){
        c.status(403)
        return c.json({
          msg:"Wrong input"
        })
      }

      try {
        const res=await prisma.post.update({
          where: {
            id: body.id
          },
          data: {
            title: body.title,
            content:body.content
        }
	    });

      // console.log(res);
      
      return c.json({
        msg:'blog updated'
      })
        
      } 
      catch (error) {
        return c.json({error: "error while signing up"})
      }
})

export default blogAPI;