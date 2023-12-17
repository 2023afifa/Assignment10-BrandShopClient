const PopularItem = ({ card }) => {
    const { id, name, price, photo } = card;

    return (
        <div>
            <div className="card w-96 glass mx-auto">
                <figure><img className="h-96 w-72" src={photo} alt="car!" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">{name}</h2>
                    <p>$ {price}</p>
                    {/* <div className="card-actions">
                        <button className="btn bg-[#8EACCD] text-white">Details</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default PopularItem;