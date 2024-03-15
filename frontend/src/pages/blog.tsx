import { useParams } from "react-router-dom";
import { BlogView } from "../components/BlogView";
import { useBlog } from "../hooks"
import Appbar from "../components/AppBar";
import { BlogSkeleton } from "../components/BlogSkeleton";


export const Blog = () =>{
    const {id}=useParams();
    
    const {loading,blog} = useBlog({
        id: id || ""
    });

    if(loading || !blog){
        return <div>
            <Appbar />
            <div >
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            </div>
            
        </div>
    }
    
    return (
        <div>
            <BlogView data={blog}/>
        </div>
    )
}