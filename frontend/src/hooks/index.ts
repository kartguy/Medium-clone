import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios";

export interface BlogDataType{
  title:string,
  content:string,
  id:string,
  author:{
      name:string
  }
}


export const useBlogs = () =>{
    const [loading ,setLoading] =useState(true);
    const [blogs, setBlogs] =useState([])
    const token=localStorage.getItem("token")

    useEffect(()=>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${BACKEND_URL}/api/v1/blog/bulk`,
            headers: { 
              'token': token
            }
          };
          
          axios.request(config)
          .then((response) => {
            setBlogs(response.data)
            setLoading(false)
          })
          .catch((error) => {
            console.log(error);
          });

    },[])

    return{
        loading,
        blogs
    }
      
}

export const useBlog =({ id }: {id:string})=>{
  const [loading ,setLoading] =useState(true);
    const [blog, setBlog] =useState<BlogDataType>()
    const token=localStorage.getItem("token")

    useEffect(()=>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${BACKEND_URL}/api/v1/blog/${id}`,
            headers: { 
              'token': token
            }
          };
          
          axios.request(config)
          .then((response) => {
            setBlog(response.data.result)
            setLoading(false)
          })
          .catch((error) => {
            console.log(error);
          });

    },[])

    return{
        loading,
        blog
    }
}