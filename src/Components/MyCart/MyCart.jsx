import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import Navbar from "../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";


const MyCart = () => {
    const cart = useLoaderData();
    const { user } = useContext(AuthContext);
    const personCart = cart.filter(c => c.useremail === user.email);
    const [item, setItem] = useState(personCart);

    const totalPrice = () => {
        let sum = 0;
        personCart.forEach(i => {
            sum += parseFloat(i.price);
        });
        return sum;
    };

    const total = totalPrice();

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(239 68 68)',
            cancelButtonColor: 'rgb(0 0 0)',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your cart has been deleted.',
                                'success'
                            )
                            const remaining = item.filter(i => i._id !== id);
                            setItem(remaining);
                        }
                    })
            }
        })
    }


    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center font-semibold mt-20 mb-10">My Cart</h2>
            {
                personCart.length === 0 ?
                    <>
                        <h3 className="text-center text-3xl text-gray-500 font-medium italic mb-20">Your Cart Is Empty</h3>
                    </>
                    :
                    <div className="mx-20 mb-20">
                        <h2 className="text-end text-xl font-medium mb-5">Total Price: ${total}</h2>
                        <div className="overflow-x-auto">
                            <table className="table table-fixed">
                                <thead>
                                    <tr>
                                        <th className="border-b">Serial no.</th>
                                        <th className="border-b">Image</th>
                                        <th className="border-b">Product Name</th>
                                        <th className="border-b">Type</th>
                                        <th className="border-b">Price</th>
                                        <th className="border-b">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        item.map((card, index) => <Cart key={card._id} index={index} card={card} handleDelete={handleDelete}></Cart>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
            <Footer></Footer>
        </div >
    );
};

export default MyCart;