import { Link } from "react-router-dom";

const PopularItem = ({ card }) => {
    const { _id, name, price, photo } = card;


    return (
        <div className="mx-auto">
            <div className="flex flex-col h-[420px] shadow p-3">
                <div className="relative overflow-hidden">
                    <img className="h-60 w-[350px] transition duration-200 ease-in-out hover:scale-110" src={photo} alt="" />
                </div>
                <div className="m-3">
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="font-bold">Price: ${price}</p>
                </div>
                <div className="ml-3 mt-auto">
                    <Link to={`/details/${_id}`}><button className="btn w-full rounded-none bg-slate-950 text-white hover:text-black">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PopularItem;