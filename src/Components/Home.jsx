import Banner from "./Banner/Banner";
import BrandCards from "./Collections/BrandCards";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Sale from "../Components/Sale/Sale";
import NewArrivals from "./NewArrivals";


const Home = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <Banner></Banner>
                <BrandCards></BrandCards>
                <Sale></Sale>
                <NewArrivals></NewArrivals>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;