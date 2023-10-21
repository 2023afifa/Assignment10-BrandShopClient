import { Link } from "react-router-dom";

const AddCard = ({ acard }) => {
    const { _id, name, brand, type, price, rating, photo } = acard;

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl w-2/3 mb-10">
                <figure className="lg:w-1/2"><img src={photo} alt="Album" className="w-2/3" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Type : {type}</p>
                    <p>Price : {price}</p>
                    <p>Rating : {rating}</p>
                    <div className="card-actions">
                        <Link to={`/${_id}`}><button className="btn bg-[#8EACCD] text-white">Details</button></Link>
                        <Link to={`/update/${_id}`}><button className="btn bg-[#8EACCD] text-white">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCard;