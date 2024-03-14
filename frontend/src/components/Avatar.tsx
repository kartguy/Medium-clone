export const Avatar = ({name, size="small"}:{name:string, size?:string}) =>{

    return (
            <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-200 rounded-full ${size==="big" ? "h-12 w-12 text-lg" : "h-9 w-9 text-sm"}`}>
                <span className="font-medium text-black">{name[0].toUpperCase()}</span>
            </div>
    )
}