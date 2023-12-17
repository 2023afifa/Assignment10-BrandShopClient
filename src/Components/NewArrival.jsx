const NewArrival = ({ card }) => {
    const { id, name, price, image } = card;

    return (
        <div className="mx-auto">
            <h4 className="font-bold text-lg mb-2">{id}</h4>
            <img className="h-96 w-72 mb-5 shadow-xl rounded-md" src={image} alt="" />
            <p className="text-lg font-bold">{name}</p>
            <p className="text-2xl font-bold">$ {price}</p>
        </div>
    );
};

export default NewArrival;