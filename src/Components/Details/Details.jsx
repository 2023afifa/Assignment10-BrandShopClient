import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Footer from "../Footer/Footer";
import "./Details.css";

const Details = () => {
    const { user } = useContext(AuthContext);
    const product = useLoaderData();
    const { _id, name, brand, type, price, description, rating, photo } = product;

    const [activeButton, setActiveButton] = useState('description');

    const handleActiveButton = (button) => {
        setActiveButton(button);
    };


    const handleAddCart = (photo, name, price) => {
        const username = user.displayName;
        const useremail = user.email;
        const userphoto = user.photoURL;

        const newProduct = { photo, name, price, username, useremail, userphoto };
        console.log(newProduct);

        fetch("http://localhost:5000/cart", {
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
            <h2 className="text-3xl text-center font-medium mt-20 mb-8">Product Details</h2>
            <div className="flex justify-center gap-8 flex-col lg:flex-row mb-10">
                <img src={photo} alt="" className="lg:w-2/5 lg:h-[450px] rounded p-5 border" />
                <div className="mt-10">
                    <p><span className="font-semibold text-3xl mb-2">{name} | </span> <span className="font-semibold text-xl">Type: {type}</span></p>
                    <p className="font-semibold text-xl">$ {price}</p>
                    <p className="font-semibold text-xl">{rating} ratings</p>
                    <button onClick={() => handleAddCart(photo, name, price)} className="btn bg-black text-white rounded-sm my-8">Add To Cart</button>
                    <div>
                        <div className="flex justify-around  border-2 mb-5">

                            <button onClick={() => handleActiveButton('description')} className={activeButton === 'description' ? 'activebutton' : 'inactivebutton'}>Description</button>


                            <button onClick={() => handleActiveButton('deliveryReturn')} className={activeButton === 'deliveryReturn' ? 'activebutton' : 'inactivebutton'}>Delivery & Return Policy</button>

                        </div>
                        <div className="font-medium text-justify max-w-xl">
                            {activeButton === "description" && (
                                <div>
                                    <p>{description}</p>
                                </div>
                            )}
                            {activeButton === "deliveryReturn" && (
                                <div>
                                    <p>We strive to deliver your orders with speed and precision. You can track your order through our website to stay updated on its status. We want you to be completely satisfied with your purchase. If you are not happy with your order, you can return it within 3 days of receiving the item.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Details;