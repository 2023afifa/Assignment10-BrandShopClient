import { Link } from "react-router-dom";

const BrandCard = ({ card }) => {
    const { id, brandName, brandImage } = card;

    return (
        <div>
            <Link>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img className="w-full h-60" src={brandImage} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{brandName}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BrandCard;