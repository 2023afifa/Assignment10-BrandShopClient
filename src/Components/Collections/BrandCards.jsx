import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const BrandCards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("https://brand-server-nine.vercel.app/brandsName")
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div>
            <div className="mt-16">
                <h3 className="text-4xl font-semibold mb-3 ml-10">Collections</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4">
                    {
                        cards.map(card => <BrandCard key={card.id} card={card}></BrandCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandCards;