import { MdOutlinePhoneIphone, MdOutlineMailOutline, MdOutlineCopyright } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { FaPhoneAlt, FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#151515]">
            <div className="w-11/12 mx-auto p-6">
                <div className="mt-10 lg:grid lg:grid-cols-11 gap-9">
                    <div className="mb-8 lg:col-span-3">
                        <h1 className="text-[#FFFFFF] text-4xl font-bold mb-10">EduAward Zone</h1>
                        <p className="text-[#888] text-lg lg:text-xl lg:w-3/4">Effortlessly find and apply for university scholarships with our streamlined platform. Simplify the process, track your applications, and secure the funding you need for your academic journey.</p>
                    </div>
                    <div className="mb-8 lg:col-span-2">
                        <h1 className="text-[#b19777] text-lg text-center lg:text-left uppercase">Support </h1>
                        <hr className="border-[#888] mt-3 mb-5" />
                        <div className="flex items-center gap-1 text-lg">
                            <Link className="text-[#888] hover:text-[#b19777]">About Us</Link>
                        </div>
                        <div className="flex items-center gap-2 my-5">
                            <Link className="text-[#888] text-lg hover:text-[#b19777]">Help Center</Link>
                        </div>
                        <div className="flex items-center gap-2 text-lg">
                            <Link className="text-[#888] hover:text-[#b19777]">News</Link>
                        </div>
                        <div className="flex items-center gap-2 text-lg mt-5">
                            <Link className="text-[#888] hover:text-[#b19777] uppercase">faq</Link>
                        </div>
                        <div className="flex items-center gap-2 text-lg mt-5">
                            <Link className="text-[#888] hover:text-[#b19777]">Security</Link>
                        </div>
                        <div className="flex items-center gap-2 text-lg mt-5">
                            <Link className="text-[#888] hover:text-[#b19777]">Private Police</Link>
                        </div>
                    </div>
                    <div className="mb-8 lg:col-span-2">
                        <h1 className="text-[#b19777] text-lg text-center lg:text-left">CONTACT US </h1>
                        <hr className="border-[#888] mt-3 mb-5" />
                        <div className="flex items-center gap-1 text-lg">
                            <MdOutlinePhoneIphone className="text-[#b19777] text-xl"></MdOutlinePhoneIphone>
                            <h2 className="text-[#888] items-center flex"><GoPlus></GoPlus>880 1819 548214</h2>
                        </div>
                        <div className="flex items-center gap-2 my-5">
                            <FaPhoneAlt className="text-[#b19777]"></FaPhoneAlt>
                            <h2 className="text-[#888] items-center flex text-lg"><GoPlus></GoPlus>031 548 214</h2>
                        </div>
                        <div className="flex items-center gap-2 text-lg">
                            <MdOutlineMailOutline className="text-[#b19777] text-lg"></MdOutlineMailOutline>
                            <h2 className="text-[#888] items-center flex">awardzone@gmail.com</h2>
                        </div>
                        <div className="flex items-center gap-2 text-lg mt-5">
                            <MdOutlineMailOutline className="text-[#b19777] text-lg"></MdOutlineMailOutline>
                            <h2 className="text-[#888] items-center flex">eduaward@gmail.com</h2>
                        </div>
                    </div>
                    <div className="mb-8 lg:col-span-2">
                        <h1 className="text-[#b19777] text-lg text-center lg:text-left">VISIT</h1>
                        <hr className="border-[#888] mt-3 mb-5" />
                        <p className="text-[#888] text-lg">235/2 Rakib Tower,</p>
                        <p className="text-[#888] text-lg my-5">O. R. Nizam Road,</p><p className="text-[#888] text-lg">Chittagong,</p><p className="text-[#888] text-lg mt-5">Bangladesh .</p>
                    </div>
                    <div className="lg:col-span-2">
                        <h1 className="text-[#b19777] text-lg text-center lg:text-left">FOLLOW US</h1>
                        <hr className="border-[#888] mt-3 mb-5" />
                        <div className="flex gap-5 justify-center">
                            <div className="border-[#888] border-2 rounded-full p-3 w-11">
                                <Link to='https://www.facebook.com/'><FaFacebookF className="text-[#FFFFFF] hover:text-[#b19777]"></FaFacebookF></Link>
                            </div>
                            <div className="border-[#888] border-2 rounded-full p-3 w-11">
                                <Link to='https://www.instagram.com/'><FaInstagram className="text-[#FFFFFF] hover:text-[#b19777]"></FaInstagram></Link>
                            </div>
                            <div className="border-[#888] border-2 rounded-full p-3 w-11">
                                <Link to='https://bd.linkedin.com/'><FaLinkedinIn className="text-[#FFFFFF] hover:text-[#b19777]"></FaLinkedinIn></Link>
                            </div>
                            <div className="border-[#888] border-2 rounded-full p-3 w-11">
                                <Link to='https://x.com/?lang=en'><FaTwitter className="text-[#FFFFFF] hover:text-[#b19777]"></FaTwitter></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <hr className="border-[#888]" />
                    <div className="lg:flex justify-center gap-1 p-6">
                        <p className="flex items-center gap-1 text-[#bece8861] justify-center">Copyright <MdOutlineCopyright></MdOutlineCopyright> 2024 EduAward Zone.</p>
                        <p className="text-[#bece8861] text-center">All Rights Reserved. Made by MD Shahriyar Hossain Chowdhury.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;