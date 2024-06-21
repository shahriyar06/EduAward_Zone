import { Typewriter } from "react-simple-typewriter";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slide } from "react-awesome-reveal";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";


const Banner = () => {
    const handleType = () => {
    }

    const handleDone = () => {
    }
    
    return (
        <div className='mb-10 h-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=' bg-cover bg-center min-h-screen' style={{ backgroundImage: "url('https://i.ibb.co/R4LG4jN/austin-distel-rxp-Th-Owu-Vg-E-unsplash.jpg')" }}>
                        <div className='bg-black min-h-screen bg-opacity-70'>
                            <Slide>
                                <div className='lg:pt-44 pt-36'>
                                    <h2 className='text-[#FFFFFF] text-center w-5/6 lg:w-4/6 mx-auto text-3xl lg:text-6xl font-bold lg:mt-10 mt-0' >Find The Right Job For You  <span className='text-[#D2093C]'><Typewriter
                                        words={['Right Away!!']}
                                        loop={30}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                        onLoopDone={handleDone}
                                        onType={handleType}
                                    /></span></h2>
                                    <p className='text-[#FFFFFF] text-center lg:w-9/12 w-10/12 mx-auto text-base lg:text-xl font-semibold mt-5'>Discover your dream career with ease! Browse through our curated job listings and apply seamlessly. Your next opportunity awaits.</p>
                                    <div className="text-center mt-16">
                                        <Link to='/alljobs' className="btn bg-[#34ffdd]">View All Scholarships</Link>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' bg-cover bg-center min-h-screen' style={{ backgroundImage: "url('https://i.ibb.co/KyZtH5Z/annie-spratt-h-Cb3l-IB8-L8-E-unsplash.jpg')" }}>
                        <div className='bg-black min-h-screen bg-opacity-60'>
                            <Slide>
                                <div className='pt-48'>
                                    <h2 className='text-[#FFFFFF] text-center w-5/6 lg:w-4/6 mx-auto text-3xl lg:text-6xl font-bold lg:mt-7 mt-0'>We always Support you to <span className='text-[#D2093C]'><Typewriter
                                        words={['Find A Job']}
                                        loop={30}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                        onLoopDone={handleDone}
                                        onType={handleType}
                                    /></span></h2>
                                    <p className='text-[#FFFFFF] text-center lg:w-9/12 w-10/12 mx-auto text-base lg:text-xl font-semibold mt-9'>Discover countless job opportunities tailored for you. We are dedicated to empowering your career journey with personalized support and seamless job applications.</p>
                                    <div className="text-center mt-16">
                                        <Link to='/alljobs' className="btn bg-[#34ffdd]">View All Scholarships</Link>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' bg-cover bg-center min-h-screen' style={{ backgroundImage: "url('https://i.ibb.co/bLnfGf4/candidates-waiting-job-interview.jpg')" }}>
                        <div className='bg-black min-h-screen bg-opacity-65'>
                            <Slide>
                                <div className='pt-44'>
                                    <h2 className='text-[#FFFFFF] text-center w-5/6 lg:w-4/6 mx-auto text-3xl lg:text-6xl font-bold lg:mt-7 mt-0'>Explore limitless job opportunities <span className='text-[#D2093C]'><Typewriter
                                        words={['Today!']}
                                        loop={30}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                        onLoopDone={handleDone}
                                        onType={handleType}
                                    /></span></h2>
                                    <p className='text-[#FFFFFF] text-center lg:w-9/12 w-10/12 mx-auto text-base lg:text-xl font-semibold mt-8'>Dive into endless career possibilities! Discover, apply, and unlock your dream job. Your next career move starts here. Explore now!</p>
                                    <div className="text-center mt-16">
                                        <Link to='/alljobs' className="btn bg-[#34ffdd]">View All Jobs</Link>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    );
};

export default Banner;