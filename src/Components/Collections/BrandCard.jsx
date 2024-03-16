import { Link } from "react-router-dom";

const BrandCard = ({ card }) => {
    const { id, brand, brandCover } = card;

    return (
        <div className="mx-2 my-3 relative group overflow-hidden">
            <Link to={`/brands/${brand}`}>
                <div className="relative w-96 mx-auto">
                    <figure><img className="w-96 h-[520px] mx-auto" src={brandCover} alt="" /></figure>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity">
                        <h4 className="text-4xl text-white absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">VIEW</h4>
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl text-center">{brand}</h2>
                </div>
            </Link>
        </div>
    );
};

export default BrandCard;