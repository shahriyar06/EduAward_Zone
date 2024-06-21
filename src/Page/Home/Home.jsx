import { Helmet } from "react-helmet-async";
import Banner from "../../Component/Banner/Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>EduAward Zone | Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;