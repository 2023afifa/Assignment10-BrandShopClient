const Message = () => {
    return (
        <div className="my-20">
            <div className="hero min-h-screen bg-[#8EACCD]">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/FV59G4t/message.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h2 className="text-3xl text-[#1F4172] font-semibold mb-2">Message From The Owner</h2>
                        <div className="italic">
                            <p className="py-6">"Welcome to ClassyCloset! As the founder and owner, I'm thrilled to have you here. Our journey began with a simple idea - to bring together fashion and elegance, making it accessible to everyone. At ClassyCloset, we curate styles that are not just about clothing; they're a reflection of your unique personality and inner confidence. </p>

                            <p className="py-6">Every item in our collection is handpicked to ensure the highest quality and latest trends. Whether you're looking for everyday wear, a special occasion outfit, or a statement piece, we have you covered. Our team is dedicated to providing exceptional customer service and a seamless shopping experience.</p>

                            <p className="py-6">Thank you for choosing us to be a part of your style journey. Explore our latest collections, find your perfect look, and remember, it's not just about what you wear, but how you wear it.</p>

                            <p className="py-6">Stay fashionable, stay confident, stay ClassyCloset!"</p>
                        </div>
                        <p className="text-xl font-semibold"> - Jennifer Smith</p>
                        <p className="font-medium">Owner, ClassyCloset</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;