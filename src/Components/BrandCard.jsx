const BrandCard = ({ card }) => {
    const { id, brandName, brandImage } = card;

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img className="w-full h-60" src={brandImage} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{brandName}</h2>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;