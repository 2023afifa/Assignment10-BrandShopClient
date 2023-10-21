import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const card = cards.find(card => card._id == id);

    const handleAddCart = ( photo, name, price) => {
        const newProduct = { photo, name, price };
        console.log(newProduct);

        fetch("https://brand-server-nine.vercel.app/cart", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast("Added to cart successfully");
                }
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center font-semibold my-10">Product Details</h2>
            <div className="flex flex-col lg:flex-row gap-6 mx-5 lg:mx-10">
                <img src={card.photo} alt="" className="lg:w-2/5 rounded-lg" />
                <div className="mt-10">
                    <p><span className="font-semibold text-lg">Product Name: </span>{card.name}</p>
                    <p><span className="font-semibold text-lg">Description: </span>{card.description}</p>
                    <p><span className="font-semibold text-lg">Type: </span>{card.type}</p>
                    <p><span className="font-semibold text-lg">Price: $</span>{card.price}</p>
                    <p><span className="font-semibold text-lg">Rating: </span>{card.rating}</p>
                    <button onClick={() => handleAddCart(card.photo, card.name, card.price)} className="btn bg-[#8EACCD] text-white mt-5">Add To Cart</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Details;