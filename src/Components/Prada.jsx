import { Link } from 'react-router-dom';

const Prada = () => {
    return (
        <div>
            <Link>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img className="w-full h-60" src="https://i.ibb.co/hBzmQdT/brand2.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Prada</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Prada;