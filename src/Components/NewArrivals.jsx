import { useEffect, useState } from "react";
import NewArrival from "./NewArrival";

const NewArrivals = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("newarrival.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className="mt-16">
                <h3 className="text-5xl text-[#1F4172] text-center font-semibold mb-6">
                    <span className="font-extrabold">Fresh </span>
                    <span className="italic">Finds </span>
                    <span className="font-extrabold">Unveiling </span><br />
                    <span className="font-extrabold">New </span>
                    <span className="italic">Arrivals </span></h3>
                <div className="grid lg:grid-cols-4 gap-10">
                    {
                        products.map(card => <NewArrival key={card.id} card={card}></NewArrival>)
                    }
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;