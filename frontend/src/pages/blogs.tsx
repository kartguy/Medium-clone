import BlogCard from "../components/BlogCard";
import Appbar from "../components/AppBar";
import { useBlogs } from "../hooks";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useNavigate } from "react-router-dom";


const Blogs = ()=>{

    const {loading,blogs} =useBlogs();
    const navigate=useNavigate();
    if(localStorage.getItem('token')==null){
      navigate('/')
    }
    if(loading){
      return <div>
        <div>
          <Appbar />
        </div>
        <div className="flex justify-center max-w-full">
        <div className="">
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
        </div>
        </div>
        
        
      </div>
    }

    return (

      <div>

        <div>
          <Appbar />
        </div>

      
        <div className="flex justify-center mt-8 ">
            <div className="max-w-xl">
                {blogs.map((blog:any)=>{
                    return <div>
                        <BlogCard 
                        id={blog.id}
                        author={blog.author.name || "Anonymous"}
                        publishedDate="Dec, 2023"
                        title={blog.title}
                        content={blog.content}
                            />
                    </div>
                })}   

            </div>

        </div>

      </div>
    )
}

export default Blogs;