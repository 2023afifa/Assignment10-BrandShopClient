const Sale = () => {
    return (
        <div className="my-20 bg-fixed" style={{backgroundImage: 'url(https://i.ibb.co/6wnQLwC/SaleBag.jpg)'}}>
            <div className="hero py-28">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-white text-center">
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