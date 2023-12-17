import Navbar from "./Navbar";

const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const newProduct = { name, brand, type, price, description, rating, photo };
        console.log(newProduct);

        fetch("http://localhost:5000/brands", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#D2E0FB] py-10 px-10 lg:px-20 mx-3 lg:mx-20 my-10 rounded">
                <h3 className="text-2xl text-center font-bold my-5 text-red-950">Add Product</h3>
                <form onSubmit={handleAddProduct} className="mx-auto">
                    <div className="grid lg:grid-cols-2 gap-5">
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="name" placeholder="Enter product name" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Brand Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="brand" placeholder="Enter brand name" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Type</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="type" placeholder="Enter product type" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="price" placeholder="Enter price" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Short description</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="description" placeholder="Enter short description" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Rating</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="rating" placeholder="Enter product rating" className="input input-bordered w-full" />
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
                                <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Product" className="btn btn-block bg-[#8EACCD] mt-10" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;