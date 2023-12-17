import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyCart = () => {
    const cards = useLoaderData();
    const [item, setItem] = useState(cards);

    const {user} = useContext(AuthContext);
    const personCards = cards.filter(c => c.useremail === user.email);


    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center font-semibold my-10">My Cart</h2>
            <div>
                {
                    personCards.map(card => <Cart key={card._id} card={card} item={item} setItem={setItem}></Cart>)
                }
            </div>
        </div>
    );
};

export default MyCart;