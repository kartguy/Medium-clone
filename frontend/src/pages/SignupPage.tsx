import Left from "../components/SignupLeft";
import Quote from "../components/Quote";


const Signup=()=>{
    return (
        <div className="lg:flex h-screen ">

            {/* left side */}
            
            <div className="md:w-full lg:w-1/2 flex justify-center px-36">
                <Left />
            </div>

            {/* right side */}

            <div className="bg-gray-100 md:w-full lg:w-1/2 flex justify-center">
                <Quote content="The customer service I received was exceptional. The support team went above and beyond to address my concerns." 
                by="Jules Winnfield" 
                designation="CEO Acme Inc"/>
            </div>
            
        </div>
    )
}

export default Signup;