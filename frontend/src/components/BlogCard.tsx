

const BlogCard = () =>{

    return(
    <div>
        
        <div className="grid grid-cols-12">
            
            <div className="col-span-8">
                <div className="flex">
                    <div>
                        <h1 className="text-lg font-semibold">O</h1>
                    </div>

                    <div className="pl-2">
                        <h1 className="text-lg font-medium">Peter.V</h1>
                    </div>

                    <div className="pl-2">
                        <h1 className="text-stone-600 font-medium text-lg">Dec, 2023</h1>
                    </div>
                </div>

                <div className="py-2">
                    <div>
                        <h1 className="text-3xl font-bold py-2">To PM2, or not to PM2: Embracing Docker for Node.js</h1>
                        <p className="py-2 text-lg font-medium font-serif">What have you jio oio oio jpj a io oirtohrio toiahorit iaht  ohoirt hoiho ihaoir hoht ahrothaourth ohtou hroh orh aoihro haorh toa h</p>
                    </div>
                </div>

                <div className="py-4 flex justify-between mt-2">
                    
                    <div className="flex">
                        <div className=" bg-slate-100 px-2 rounded-xl">
                            <button className="font-medium ">Docker</button>
                        </div>

                        <div className="pl-3">
                            <h1>4 min read</h1>
                        </div>
                    </div>

                    <div className="flex">
                        <div>
                            <button>p</button>
                        </div>
                        <div>
                            <button className="mx-4">o</button>
                        </div>
                        
                        <div>
                            <button>p</button>
                        </div>
                        
                    </div>

                </div>
            </div>

            <div className="col-span-4 flex justify-center items-center" >
                <img src="" alt="No Image" />
            </div>

        </div>
        
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>
    </div>
    )
}

export default BlogCard;