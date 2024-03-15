import { NavLink, useNavigate } from "react-router-dom";
import Input from "./Input";
import { useState } from "react";
import { signinType } from "@kartguy/common-app";
import axios from "axios";
import { BACKEND_URL } from "../config";
const Right=()=>{
    const[postInputs,setPostInputs]=useState<signinType>({
        email:"",
        password:""
    })

    const navigate=useNavigate();

    async function sendRequest(){
        try {
            const res=await axios.post(`${BACKEND_URL}/api/v1/user/signin`,{
                data:{
                    email:postInputs.email,
                    password:postInputs.password
                }
            })
            
            setTimeout(()=>{
                alert(res.data.msg);
            },100)
        
            if(res.data.token!=null){
                localStorage.setItem("token",res.data.token);
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
                    <h1 className="text-4xl font-bold px-40">Log in</h1>
                </div>
                <div>
                    <h1 
                    className="text-md my-4 text-stone-500"> Don't have an account? 
                    <NavLink to='/' className="underline p-2" >Signup</NavLink>
                    </h1>
                </div>

                <div className="mt-7">
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
                        >Login</button>
                    </div>
                    
                </div>
                

            </div>
        </div>
    )
}

export default Right;