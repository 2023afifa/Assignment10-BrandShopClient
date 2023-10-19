const Sale = () => {
    return (
        <div className="mt-20">
            <h2 className="text-3xl text-[#1F4172] text-center font-semibold mb-6">Sale!!!</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/nngM9b3/sale.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <p className="text-3xl font-semibold">Limited Time - Online only</p>
                        <h1 className="text-6xl font-bold">50% Off</h1>
                        <p className="text-2xl font-semibold mt-3">On all Crossbody bags</p>
                        <p className="py-6">Attention fashion enthusiasts! It's time to score big on crossbody bags. Take advantage of our exclusive 50% discount offer and find the perfect bag that fits your lifestyle and fashion sense. Limited stock, shop now!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sale;