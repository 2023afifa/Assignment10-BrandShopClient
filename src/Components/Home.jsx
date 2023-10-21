import { useEffect, useState } from "react";
import Banner from "./Banner";
import BrandCards from "./BrandCards";
import Footer from "./Footer";
import Message from "./Message";
import Navbar from "./Navbar";
import Sale from "./Sale";


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
            <div className="lg:w-[1350px] mx-auto">
                <Navbar></Navbar>
                <Banner></Banner>
                <div className="text-center mt-16">
                    <button onClick={handleThemeSwich} className="btn bg-black text-[#8EACCD]">Dark Mode</button>
                </div>
                <BrandCards></BrandCards>
                <Sale></Sale>
                <Message></Message>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;