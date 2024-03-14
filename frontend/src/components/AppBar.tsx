import { NavLink } from "react-router-dom";
import { Avatar } from "./Avatar";


const Appbar =() =>{


    return (
        <div className="border-b flex justify-between px-20 py-3">
            <NavLink to={'/blogs'} >
            <div className="flex flex-col justify-center cursor-pointer mt-3">
                <h1 className="font-medium text-lg">Medium</h1>
            </div>
            </NavLink>
            
            <div className="flex justify-center items-center ">
                <div className="mt-2">
                    <NavLink to={'/publish'}>
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600">New</button>
                    </NavLink>
                </div>
                <div className="">
                    <Avatar size="big" name="kartik"/>
                </div>
            </div>
        </div>
    )
}

export default Appbar;