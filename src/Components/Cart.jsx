import Swal from "sweetalert2";

const Cart = ({ card, item, setItem }) => {
    const { _id, name, price, photo } = card;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#8EACCD',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${_id}`, {
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
                            const remaining = item.filter(i => i._id !== _id);
                            setItem(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl w-2/5 mx-auto mb-10">
                <figure className="w-1/2"><img src={photo} alt="" className="w-full h-full" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p><span className="font-bold">Price: </span>${price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn bg-[#8EACCD] text-white">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;