import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

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

        fetch("https://brand-server-nine.vercel.app/brands", {
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
            <div className="hero py-24" style={{ backgroundImage: 'url(https://i.ibb.co/pfVkrhj/addproduct.jpg)' }}>
                <div className="bg-slate-50 py-10 px-10 lg:px-20" style={{ opacity: 1 }}>
                    <h3 className="text-2xl text-center font-semibold mb-5">Add Product</h3>
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
                        <div className="text-center">
                            <input type="submit" value="Add" className="btn bg-black text-white hover:text-black rounded-none px-10 mt-10" />
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddProduct;