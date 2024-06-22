import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="">
            <div className="md:flex w-10/12 lg:w-9/12 md:w-11/12 mx-auto gap-10 items-center lg:mt-28 md:mt-52 mt-36">
                <div>
                    <img className="lg:w-[1600px] md:w-[1000px]" src="https://i.ibb.co/MB0WxG1/error.jpg" alt="" />
                </div>
                <div className="w-full md:h-[230px] lg:h-[500px] pl-9 items-center border-l-2 border-solid border-[#080808]">
                    <h1 className="lg:text-6xl md:text-3xl font-bold lg:mb-5 mb-2 lg:mt-32 mt-9">SORRY!</h1>
                    <h3 className="lg:text-3xl md:text-lg lg:mb-3 md:mb-1">The page you are looking for</h3>
                    <h3 className="lg:text-3xl md:text-lg lg:mb-5 mb-2">Was Not Found</h3>
                    <div className="">
                        <Link to='/' className="lg:text-4xl md:text-xl font-medium flex items-center"><IoIosArrowBack className="mr-1"/><span className="border-b-2 border-[#080808] mb-2"> GO HOME </span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;