import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt';
import {signupInput,signinInput} from "@kartguy/common-app"

const userAPI=new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET:string
	}
}>();

//signup
userAPI.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body=await c.req.json();

    const{success}=signupInput.safeParse(body);

    if(!success){ 
      c.status(403)
      return c.json({
        msg:"Wrong input"
      })
    }
  
    const userExists= await prisma.user.findUnique({
      where:{
        email: body.email
      }
    })
  
    if(userExists!=null){
      return c.json({
        msg:"User already exists"
      })
    }
    
    else{
      try {
        const res= await prisma.user.create({
          data:{
            email:body.email,
            password:body.password,
            name:body.name
          },
          select:{
            id:true
          }
        })  
  
        const payload={
          userId:res.id
        }
  
        const token=await sign(payload,c.env.JWT_SECRET);
    
        return c.json({
          msg:"Signup Successful",
          token:token
        })
      } 
      catch (error) {
        return c.json({error: "error while signing up"})
      } 
    }
  })
  
  //Signin
  userAPI.post('/signin', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body=await c.req.json();

    const {success} =signinInput.safeParse(body);

    if(!success){
      c.status(403)
      return c.json({
        msg:"Wrong input"
      })
    }
  
    try {
      const res= await prisma.user.findUnique({
        where:{
          email:body.email
        },
        select:{
          id:true,
          password:true
        }
      })
  
      if(res==null){
        return c.json({msg:"User not found"})
      }
  
      if(res.password!=body.password){
        return c.json({msg:"Incorrect Password"})
      }
  
      const payload={
        userId:res.id
      }
      
      const token=await sign(payload,c.env.JWT_SECRET);
  
      return c.json({
        msg:"Signin Successful",
        token:token
      })
      
    } 
    catch (error) {
      console.log(error);
      return c.json({error: "error while signing in"})
    }
  
  })

  export default userAPI;