import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AddCard from "./AddCard";

const AddCards = () => {
    const cards = useLoaderData();
    const { brand } = useParams();
    console.log(brand);
    const card = cards.find(card => card.brand === brand);
    console.log(card);

    return (
        <div>
            <h2 className="text-3xl text-center font-semibold my-10">Gucci</h2>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/5FzQB72/slider1-1.jpg" className="w-1/2 mx-auto" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/71Zfg59/slider1-2.jpg" className="w-1/2 mx-auto" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/gvQ4NLJ/slider1-3.jpg" className="w-1/2 mx-auto" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
            <div>
                {
                    // card.map(acard => <AddCard key={acard._id} acard={acard}></AddCard>)
                }
            </div>
        </div>
    );
};

export default AddCards;

// "Gucci" || "Luis Vuitton" || "Prada" || "Versace" || "Chanel" || "Dior"