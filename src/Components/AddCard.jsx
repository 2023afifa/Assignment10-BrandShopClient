import { Link } from "react-router-dom";

const AddCard = ({ c }) => {
    const { _id, name, brand, type, price, rating, photo } = c;

    return (
        <div className="mx-auto">
            <div>
                <div>
                    <img className="w-[350px]" src={photo} alt="" />
                </div>
                <div>
                    <h3>{name}</h3>
                </div>
            </div>
            {/* <div className="card-actions">
                <Link to={`/${_id}`}><button className="btn bg-[#8EACCD] text-white">Details</button></Link>
                <Link to={`/update/${_id}`}><button className="btn bg-[#8EACCD] text-white">Update</button></Link>
            </div> */}
        </div>
    );
};

export default AddCard;