import Banner from "./Banner";
import BrandCards from "./BrandCards";
import Footer from "./Footer";
import Message from "./Message";
import Navbar from "./Navbar";
import Sale from "./Sale";


const Home = () => {
    return (
        <div>
            <div className="lg:w-[1350px] mx-auto">
                <Navbar></Navbar>
                <Banner></Banner>
                <BrandCards></BrandCards>
                <Sale></Sale>
                <Message></Message>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;