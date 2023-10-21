import { Link } from "react-router-dom";

const LV = () => {
    return (
        <div>
            <Link>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img className="w-full h-60" src="https://i.ibb.co/rQ6btKD/brand3.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Louis Vuitton</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default LV;