import { useState } from "react"
import Appbar from "../components/AppBar"
import { createPostType } from "@kartguy/common-app";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () =>{
    const [blogInput, setBlogInput]=useState<createPostType>({
        title:"",
        content:""
    });

    const navigate=useNavigate();
    if(localStorage.getItem('token')==null){
      navigate('/')
    }
    
    return (
        <div>
            <div>
                <Appbar />
            </div>
        
        <div className="flex justify-center">
            <div className="w-2/3 mt-16">
                <div>
                    <input 
                    onChange={(e)=>{
                        setBlogInput({
                            ...blogInput,
                            title:e.target.value
                        })
                    }}
                    className="block p-2.5 w-full h-10 text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Title..."></input>
                </div>
                
                <div className="mt-4">
                    <textarea 
                    onChange={(e)=>{
                        setBlogInput({
                            ...blogInput,
                            content:e.target.value
                        })
                    }}
                    id="message" className="block p-2.5 w-full h-44 text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                </div>

                <div className="mt-4">
                <button 
                onClick={async ()=>{
                    try {
                        let config = {
                            method: 'post',
                            maxBodyLength: Infinity,
                            url:`${BACKEND_URL}/api/v1/blog`,
                            headers: { 
                              'token': localStorage.getItem("token"), 
                              'Content-Type': 'application/json'
                            },
                            data:{
                                title:blogInput.title,
                                content:blogInput.content
                            }
                          };

                          const response= await axios.request(config);
                          console.log(response.data);
                          
                        
                        setTimeout(()=>{
                            alert("Blog published!")
                        },100)

                        navigate(`/blog/${response.data.id}`)
                        
                    } catch (error) {
                        
                    }
                }}
                type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-2">Publish post </button>   
                </div>
            </div>
        </div>

        </div>
    )
}