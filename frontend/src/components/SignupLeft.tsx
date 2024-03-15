import { NavLink, useNavigate } from "react-router-dom";
import Input from "./Input";
import { useState } from "react";
import { signupType } from "@kartguy/common-app";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Left=()=>{
    const [postInputs,setPostInputs]= useState<signupType>({
        name:"",
        email:"",
        password:""
    })

    const navigate=useNavigate();

    async function sendRequest(){
        try {

            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,{
                data:{
                    email:postInputs.email ,
                    password:postInputs.password,
                    name:postInputs.name,
                }
            })
            // console.log(response.data);
            
            setTimeout(()=>{
                alert(response.data.msg);
            },100)

            if(response.data.token!=null){
                localStorage.setItem("token",response.data.token);
                navigate('/blogs')
            }
            
            
        } catch (e:any) {
            console.log(e.response.data);
            alert(e.response.data.msg)
        }   

    }
    
    return(
        <div className="h-screen flex items-center text-center ">
            <div>
                <div>
                    <h1 className="text-4xl font-bold px-10">Create an account</h1>
                </div>
                <div>
                    <h1 
                    className="text-md font-normal my-4 text-stone-500"> Already have an account? 
                    <NavLink to='/login' className="underline p-2" >Login</NavLink>
                    </h1>
                </div>
                
                <div className="mt-7">
                    
                    <div className="text-left">
                        <Input label="Username" 
                        placeholder="Enter your username" 
                        onChange={(e)=>{
                            setPostInputs({
                                ...postInputs,
                                name:e.target.value
                            })
                        }}
                        value="text"
                        />   
                    </div>

                    <div className="text-left">
                        <Input label="Email" 
                        placeholder="me@example.com"
                        value="email"
                        onChange={(e)=>{
                            setPostInputs({
                                ...postInputs,
                                email:e.target.value
                            })
                        }}
                        />
                    </div>

                    <div className="text-left">
                        <Input label="Password" 
                        value="password"
                        onChange={(e)=>{
                            setPostInputs({
                                ...postInputs,
                                password:e.target.value
                            })
                        }}

                        />
                    </div>

                    <div>
                        <button 
                        className="w-full h-10 bg-black text-white rounded-lg text-sm mt-2"
                        onClick={sendRequest}
                        >Sign Up</button>
                    </div>
                    
                </div>
                

            </div>
        </div>
    )
}

export default Left;