const StarRating = ({ rating }) => {
    const fullStar = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
        <div className="flex items-center">
            {[...Array(fullStar)].map((_, index) => (
                <span key={index} className={`text-3xl ${index < rating ? 'text-black' : 'text-gray-300'}`}>★</span>
            ))}
            {halfStar && <span className="text-3xl rating rating-half">★</span>}
        </div>
    );
};

export default StarRating;