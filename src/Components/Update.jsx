import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Swal from "sweetalert2";

const Update = () => {
    const product = useLoaderData();
    const { _id, name, brand, type, price, description, rating, photo } = product;

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

        fetch(`https://brand-server-2rimsyl36-afifas-projects.vercel.app/brands/${_id}`, {
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
            <div className="bg-[#D2E0FB] py-10 px-10 lg:px-20 mx-3 lg:mx-20 my-10 rounded">
                <h3 className="text-2xl text-center font-bold my-5 text-red-950">Update Product</h3>
                <form onSubmit={handleUpdateProduct} className="mx-auto">
                    <div className="grid lg:grid-cols-2 gap-5">
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="name" defaultValue={name} placeholder="Enter product name" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Brand Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="brand" defaultValue={brand} placeholder="Enter brand name" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Type</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="type" defaultValue={type} placeholder="Enter product type" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="price" defaultValue={price} placeholder="Enter price" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Short description</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="description" defaultValue={description} placeholder="Enter short description" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Rating</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="rating" defaultValue={rating} placeholder="Enter product rating" className="input input-bordered w-full" />
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
                                <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Product" className="btn btn-block bg-[#8EACCD] mt-10" />
                </form>
            </div>
        </div>
    );
};

export default Update;