
interface body{
    content:string,
    by:string,
    designation:string
}

const Quote=({content,by,designation}:body)=>{

    return (
        <div className="h-screen flex items-center mx-24">

            <div className="font-sant">
                <p className="text-4xl font-bold">"{content}"</p>
                <h1 className="text-xl font-bold mt-5 ">{by}</h1>
                <h1 className="text-lg text-stone-500 " >{designation}</h1>
            </div>
        </div>
    )
}

export default Quote;