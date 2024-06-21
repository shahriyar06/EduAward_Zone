import { Helmet } from "react-helmet-async";
import Banner from "../../Component/Banner/Banner";
import TopScholarship from "../../Component/TopScholarship/TopScholarship";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>EduAward Zone | Home</title>
            </Helmet>
            <Banner></Banner>
            <TopScholarship></TopScholarship>
        </div>
    );
};

export default Home;