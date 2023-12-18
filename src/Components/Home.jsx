import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import BrandCards from "./BrandCards";
import Footer from "./Footer";
import Message from "./Message";
import Navbar from "./Navbar/Navbar";
import Sale from "./Sale";
import NewArrivals from "./NewArrivals";


const Home = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if(theme === "dark"){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    const handleThemeSwich = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <div className="dark:bg-black">
            <div className="">
                <Navbar></Navbar>
                <Banner></Banner>
                {/* <div className="text-center mt-16">
                    <button onClick={handleThemeSwich} className="btn bg-black text-[#8EACCD]">Dark Mode</button>
                </div> */}
                <BrandCards></BrandCards>
                <Sale></Sale>
                <NewArrivals></NewArrivals>
                <Message></Message>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;