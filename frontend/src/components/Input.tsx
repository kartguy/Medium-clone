import { ChangeEvent } from "react";

interface inputType{
    label:string,
    placeholder?:string,
    value:string,
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void
}

const Input = ({label,onChange,placeholder,value}:inputType)=>{

    return(
        <div>
            <label className="text-md font-semibold">{label}</label>
            <input type={value} 
            className="  border border-gray-30 w-full h-10 rounded-lg my-2 p-2 text-md font-normal text-stone-600"
            placeholder={placeholder}
            onChange={onChange}
            />
        </div>
    )
}

export default Input;