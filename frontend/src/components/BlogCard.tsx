import { NavLink } from "react-router-dom";
import { Avatar } from "./Avatar";

interface blogCardProps{
    id:number,
    author:string,
    publishedDate:string,
    title:string,
    content:string
}

const BlogCard = ({author, publishedDate, title, content, id}:blogCardProps) =>{

    let c=Math.floor(Math.random()*7)+1;

    return(

        <NavLink to={`/blog/${id}`}>
    <div className="cursor-pointer">
        
        <div className="grid grid-cols-12">
            
            <div className="col-span-12">
                <div className="flex">
                    
                    <div>
                        <Avatar size="small" name={author}/>
                    </div> 

                    <div className="pl-2 pt-1">
                        <h1 className="text-sm font-medium">{author}</h1>
                    </div>

                    <div className="pl-2 pt-1">
                        <h1 className="text-stone-600 font-medium text-sm">• {publishedDate}</h1>
                    </div>
                </div>

                <div className="py-2">
                    <div>
                        <h1 className="text-2xl font-bold py-2">{title}</h1>
                        <p className="py-2 text-base font-medium font-serif">{content.slice(0,100)}...</p>
                    </div>
                </div>

                <div className="py-2 flex justify-between">
            
                    <div>
                        <h1 className="text-xs ">{c} min read</h1>
                    </div>
                    

                    <div className="flex justify-between w-18">
                        <div>
                            <button>•</button>
                        </div>
                        <div>
                            <button>•</button>
                        </div>
                        
                        <div>
                            <button>•</button>
                        </div>
                        
                    </div>

                </div>
            </div>

        </div>
        
        <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-300"></hr>
    </div>
    </NavLink>
    )
}

export default BlogCard;

