import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Footer from "../Footer/Footer";
import "./Details.css";
import Swal from "sweetalert2";

const Details = () => {
    const { user } = useContext(AuthContext);
    const [product, setProduct] = useState(useLoaderData());
    const { _id, name, brand, type, price, description, rating, photo } = product;
    const [activeButton, setActiveButton] = useState('description');

    const handleActiveButton = (button) => {
        setActiveButton(button);
    };


    const handleAddCart = (photo, name, price) => {
        const username = user.displayName;
        const useremail = user.email;
        const userphoto = user.photoURL;

        const newProduct = { name, brand, type, price, description, rating, photo, username, useremail, userphoto };
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

    const handleUpdateProduct = event => {
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const updatedProduct = { name, brand, type, price, description, rating, photo };
        console.log(updatedProduct);

        fetch(`https://brand-server-nine.vercel.app/brands/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    setProduct(updatedProduct);
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center font-medium mt-20 mb-8">Product Details</h2>
            <div className="flex justify-center gap-8 flex-col lg:flex-row mb-10 mx-5 md:mx-10 lg:mx-0">
                <img src={photo} alt="" className="lg:w-2/5 lg:h-[450px] rounded p-5 border" />
                <div className="mt-10">
                    <p><span className="font-semibold text-3xl mb-2">{name} | </span> <span className="font-semibold text-xl">Type: {type}</span></p>
                    <p className="font-semibold text-xl">$ {price}</p>
                    <p className="font-semibold text-xl">{rating} ratings</p>
                    <div className="flex justify-between items-center">
                        <button onClick={() => handleAddCart(photo, name, price)} className="btn bg-black text-white rounded-sm my-8">Add To Cart</button>
                        <button className="btn text-black rounded-none" onClick={() => document.getElementById('my_modal_5').showModal()}>Edit</button>
                    </div>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-xl text-center">Update Product</h3>
                            <div className="modal-action">
                                <form onSubmit={handleUpdateProduct} className="mx-auto" method="dialog">
                                    <div className="grid lg:grid-cols-2 gap-5">
                                        <div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Name</span>
                                                </label>
                                                <label className="input-group">
                                                    <input type="text" name="name" defaultValue={name} placeholder="Enter product name" className="input rounded-none w-full" />
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Brand Name</span>
                                                </label>
                                                <label className="input-group">
                                                    <input type="text" name="brand" defaultValue={brand} placeholder="Enter brand name" className="input w-full" />
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Type</span>
                                                </label>
                                                <label className="input-group">
                                                    <input type="text" name="type" defaultValue={type} placeholder="Enter product type" className="input w-full" />
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Price</span>
                                                </label>
                                                <label className="input-group">
                                                    <input type="text" name="price" defaultValue={price} placeholder="Enter price" className="input w-full" />
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Short description</span>
                                                </label>
                                                <label className="input-group">
                                                    <input type="text" name="description" defaultValue={description} placeholder="Enter short description" className="input w-full" />
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Rating</span>
                                                </label>
                                                <label className="input-group">
                                                    <input type="text" name="rating" defaultValue={rating} placeholder="Enter product rating" className="input w-full" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold">Image</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input w-full" />
                                            </label>
                                        </div>
                                    </div>
                                    <input type="submit" value="Update Product" className="btn btn-block rounded-none bg-black text-white hover:text-black mt-10" />
                                </form>
                            </div>
                        </div>
                    </dialog>
                    <div>
                        <div className="flex justify-around  border-2 mb-5">

                            <button onClick={() => handleActiveButton('description')} className={activeButton === 'description' ? 'activebutton' : 'inactivebutton'}>Description</button>


                            <button onClick={() => handleActiveButton('deliveryReturn')} className={activeButton === 'deliveryReturn' ? 'activebutton' : 'inactivebutton'}>Delivery & Return Policy</button>

                        </div>
                        <div className="font-medium text-justify lg:max-w-xl">
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