import { Link } from "react-router-dom";

const Dior = () => {
    return (
        <div>
            <Link>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img className="w-full h-60" src="https://i.ibb.co/6vSd44y/brand6.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Versace</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Dior;