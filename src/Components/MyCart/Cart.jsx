import { MdDeleteOutline } from "react-icons/md";

const Cart = ({ index, card, handleDelete }) => {
    const { _id, name, price, type, description, rating, photo } = card;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-10 md:w-16 h-10 md:h-16">
                        <img src={photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td className="text-xs md:text-base">{name}</td>
            <td className="text-xs md:text-base">{type}</td>
            <td className="text-xs md:text-base">{price}</td>
            <td><MdDeleteOutline onClick={() => handleDelete(_id)} className="text-lg md:text-xl text-red-700" /></td>
        </tr>
    );
};

export default Cart;