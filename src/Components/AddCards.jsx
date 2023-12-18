import { useLoaderData, useParams } from "react-router-dom";
import AddCard from "./AddCard";
import Navbar from "./Navbar/Navbar";
import Swal from "sweetalert2";


const AddCards = () => {
    const cards = useLoaderData();
    const { brand } = useParams();
    console.log(brand);
    const card = cards.filter(card => card.brand === brand);
    console.log(card);

    if (card.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Do not have any products here.....Sorry',
        })
    }


    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-4xl text-center font-semibold my-10">{brand}</h2>

            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/QdtPnH0/slider1.jpg" className="w-1/2 mx-auto" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/nrdj4vn/slider2.jpg" className="w-1/2 mx-auto" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/dKptyP9/slider3.jpg" className="w-1/2 mx-auto" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>

            <div className="ml-10 lg:ml-20 mt-14">
                {
                    card.map(acard => <AddCard key={acard._id} acard={acard}></AddCard>)
                }
            </div>
        </div>
    );
};

export default AddCards;