import { BlogDataType } from "../hooks"
import Appbar from "./AppBar"
import { Avatar } from "./Avatar"

export const BlogView = ({ data }:{data:BlogDataType}) =>{
    
    return (
        <div>

            <div>
                <Appbar />
            </div>
        
        <div className="grid grid-cols-12">
            <div className="col-span-8 pt-16 pr-10 pl-24">
                <div>
                    <h1 className="text-6xl font-bold">{data.title}</h1>
                </div>
                <div className="py-4 text-xl font-normal text-slate-500 ">
                    <h1>Posted on August 24, 2023</h1>
                </div>
                <div className="text-xl font-normal">
                    <p>{data.content}</p>
                </div>
            </div>

            <div className="col-span-4 py-20">
                <div className="text-xl font-normal">
                    <h1>Author</h1>
                </div>
                <div className="flex py-4">
                    <div>
                        <Avatar name={data.author.name || "Anonymous" } size="big" />
                    </div>

                    <div className="text-4xl font-bold pl-5">
                        <h1>{data.author.name || "Anonymous" }</h1>
                    </div>
                </div>
            </div>
            
            </div>
        </div>
    )
}