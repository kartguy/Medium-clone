import { useParams } from "react-router-dom";
import { BlogView } from "../components/BlogView";
import { useBlog } from "../hooks"
import Appbar from "../components/AppBar";


export const Blog = () =>{
    const {id}=useParams();
    
    const {loading,blog} = useBlog({
        id: id || ""
    });

    if(loading){
        return <div>
            <Appbar />
            loading...
        </div>
    }
    
    return (
        <div>
            
            <BlogView data={blog}/>
        </div>
    )
}