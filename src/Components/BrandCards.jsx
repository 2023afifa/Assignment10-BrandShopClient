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
            <div className="my-16">
                <h3 className="text-3xl text-center font-semibold mb-10">Brands</h3>
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