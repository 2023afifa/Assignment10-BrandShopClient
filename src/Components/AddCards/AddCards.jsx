import { useLoaderData, useParams } from "react-router-dom";
import AddCard from "./AddCard";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";


const AddCards = () => {
    const [brandCards, setBrandCards] = useState([]);
    const cards = useLoaderData();
    const { brand } = useParams();
    console.log(brand);
    const card = cards.filter(card => card.brand === brand);
    console.log(card);


    useEffect(() => {
        fetch("https://brand-server-nine.vercel.app/brandsName")
            .then(res => res.json())
            .then(data => setBrandCards(data))
    }, [])

    const brandCard = brandCards.filter(brandCard => brandCard.brand === brand);


    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-4xl text-center font-semibold mt-16 mb-3">{brand}</h2>
            <div>
                <div className="bg-black py-5">
                    {
                        brandCard.map(bCard => <div key={bCard.id}>
                            <div className="carousel">
                                <div className="carousel-item">
                                    <img className="w-[350px] h-[500px]" src={bCard.brandImage1} alt="Burger" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-[350px] h-[500px]" src={bCard.brandImage2} alt="Burger" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-[350px] h-[500px]" src={bCard.brandImage3} alt="Burger" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-[350px] h-[500px]" src={bCard.brandImage4} alt="Burger" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-[350px] h-[500px]" src={bCard.brandImage5} alt="Burger" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-[350px] h-[500px]" src={bCard.brandImage6} alt="Burger" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-[350px] h-[500px]" src={bCard.brandImage7} alt="Burger" />
                                </div>
                            </div>
                        </div>)
                    }
                </div>

                {
                    card.length === 0 ?
                        <>
                            <Navbar></Navbar>
                            <h3 className="text-center text-2xl mt-5 mb-10">Sorry, No product is available here right now</h3>
                            <Footer></Footer>
                        </>
                        :
                        <>
                            <h3 className="text-3xl text-center font-semibold mt-20">See The Available Products Here</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 m-10">
                                {
                                    card.map(c => <AddCard key={c._id} c={c}></AddCard>)
                                }
                            </div>
                        </>
                }

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddCards;