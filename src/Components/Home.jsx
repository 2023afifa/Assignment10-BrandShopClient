import Banner from "./Banner";
import BrandCards from "./BrandCards";
import Navbar from "./Navbar";
import Sale from "./Sale";

const Home = () => {
    return (
        <div>
            <div className="lg:w-[1350px] mx-auto my-5">
                <Navbar></Navbar>
                <Banner></Banner>
                <BrandCards></BrandCards>
                <Sale></Sale>
            </div>
        </div>
    );
};

export default Home;