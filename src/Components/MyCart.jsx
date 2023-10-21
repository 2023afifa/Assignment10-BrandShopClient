import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { useState } from "react";

const MyCart = () => {
    const cards = useLoaderData();
    const [item, setItem] = useState(cards);

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center font-semibold my-10">My Cart</h2>
            <div className="">
                {
                    cards.map(card => <Cart key={card._id} card={card} item={item} setItem={setItem}></Cart>)
                }
            </div>
        </div>
    );
};

export default MyCart;