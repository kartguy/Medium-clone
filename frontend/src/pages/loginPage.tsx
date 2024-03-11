import Right from "../components/LoginLeft";
import Quote from "../components/Quote";

const Login = ()=>{

    return (
        <div className="lg:flex ">

            <div className="md:w-full lg:w-1/2 flex justify-center lg:">
                <Right />
            </div>

            <div className="bg-gray-100 md:w-full lg:w-1/2 flex justify-center">
                <Quote content="I was thoroughly impressed with the outstanding customer service provided. The support team demonstrated an unparalleled commitment to resolving any issues promptly and effectively."
                 by="Elon Musk"
                 designation="CEO, Tesla Inc"
                 />
            </div>
            
        </div>
    )
}

export default Login;