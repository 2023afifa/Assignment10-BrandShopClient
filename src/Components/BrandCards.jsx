import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const BrandCards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("brandname.json")
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div>
            <div className="mt-16">
                <h3 className="text-3xl text-[#1F4172] text-center font-semibold mb-6">Brands</h3>
                <div className="grid lg:grid-cols-3 gap-10">
                    {
                        cards.map(card => <BrandCard key={card.id} card={card}></BrandCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandCards;