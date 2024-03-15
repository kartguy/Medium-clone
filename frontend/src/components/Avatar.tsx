export const Avatar = ({name, size="small"}:{name:string, size?:string}) =>{

    return (
            <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-200 rounded-full ${size==="big" ? "h-10 w-10 text-md" : "h-7 w-7 text-sm"}`}>
                <span className="font-medium text-sm  text-black">{name[0].toUpperCase()}</span>
            </div>
    )
}