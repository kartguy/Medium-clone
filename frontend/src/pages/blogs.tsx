import BlogCard from "../components/BlogCard";
import Appbar from "../components/AppBar";
import { useBlogs } from "../hooks";


const Blogs = ()=>{

    const {loading,blogs} =useBlogs();

    if(loading){
      return <div>
        <div>
          <Appbar />
        </div>
        <div>
          loading...
        </div>
        
      </div>
    }

    return (

      <div>

        <div>
          <Appbar />
        </div>

      
        <div className="flex justify-center mt-8 ">
            <div className="max-w-2xl">
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