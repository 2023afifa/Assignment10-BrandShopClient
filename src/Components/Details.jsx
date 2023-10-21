import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const card = cards.find(card => card._id == id);

    const handleAddCart = () => {
        toast("Add");
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center font-semibold my-10">Product Details</h2>
            <div className="flex gap-6 mx-10">
                <img src={card.photo} alt="" className="w-2/5 rounded-lg" />
                <div className="mt-10">
                    <p><span className="font-semibold text-lg">Product Name: </span>{card.name}</p>
                    <p><span className="font-semibold text-lg">Description: </span>{card.description}</p>
                    <p><span className="font-semibold text-lg">Type: </span>{card.type}</p>
                    <p><span className="font-semibold text-lg">Price: </span>{card.price}</p>
                    <p><span className="font-semibold text-lg">Rating: </span>{card.rating}</p>
                    <button onClick={handleAddCart} className="btn bg-[#8EACCD] text-white mt-5">Add To Cart</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Details;