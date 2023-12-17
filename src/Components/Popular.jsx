import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import PopularItem from "./PopularItem";

const Popular = () => {
    const cards = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <div style={{ backgroundImage: 'url(https://i.ibb.co/hMbkpK8/glass4.jpg)' }}>
                <h2 className="font-medium text-5xl text-white text-center py-10">Our Most <span className="italic font-extrabold">Popular</span> and <span className="italic font-extrabold">Trending</span> Products</h2>
                <div className="grid lg:grid-cols-3 gap-10">
                    {
                        cards.map(card => <PopularItem key={card.id} card={card}></PopularItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Popular;