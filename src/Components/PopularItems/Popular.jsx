import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import PopularItem from "./PopularItem";
import { useEffect, useState } from "react";


const Popular = () => {
    const cards = useLoaderData();
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://brand-server-nine.vercel.app/brands")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const popularItems = items.filter(item =>
        cards.some(card => item.name === card.name)
    );
    console.log(popularItems);

    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-20">
                <div style={{ backgroundImage: 'url(https://i.ibb.co/94GddTF/popular2.jpg)' }}>
                    <h2 className="font-medium text-5xl text-center py-10">Our Most <span className="italic font-extrabold">Popular</span> Products</h2>
                    <div className="grid lg:grid-cols-3 gap-10 pb-20">
                        {
                            popularItems.map(card => <PopularItem key={card.id} card={card}></PopularItem>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;