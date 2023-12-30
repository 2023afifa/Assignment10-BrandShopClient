import { MdDeleteOutline } from "react-icons/md";

const Cart = ({ index, card, handleDelete }) => {
    const { _id, name, price, type, description, rating, photo } = card;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                        <img src={photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{type}</td>
            <td>{price}</td>
            <td><MdDeleteOutline onClick={() => handleDelete(_id)} className="text-xl text-red-700" /></td>
        </tr>
    );
};

export default Cart;