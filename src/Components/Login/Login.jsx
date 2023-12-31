import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
    const { logInUser, logInUserGoogle } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErrorMessage("");

        logInUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location?.state : "/");
            })
            .catch(error => {
                console.error(error);
                setErrorMessage(error.message);
            })
    }

    const handleGoogleLogIn = () => {
        logInUserGoogle()
            .then(result => {
                console.log(result.user);
                if (result.data.success) {
                    navigate(location?.state ? location?.state : "/");
                }
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="flex">
            <div className="flex-1 bg-rose-100">
                <img className="max-h-screen mx-auto" src="https://i.ibb.co/bRnmZXX/login.jpg" alt="" />
            </div>
            <div className="flex-1">
                <h2 className="text-3xl font-bold text-center mt-24">Please Login</h2>
                <form onSubmit={handleLogin} className="card-body lg:w-2/3 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter email" name="email" className="input input-bordered rounded-none" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter password" name="password" className="input input-bordered rounded-none" required />
                    </div>
                    {
                        errorMessage && <p className="text-center text-red-500">{errorMessage}</p>
                    }
                    <div className="form-control mt-6">
                        <button className="btn bg-black text-white rounded-none">Login</button>
                    </div>
                </form>
                <p className="text-center">Do not have an account? Please <Link className="text-black font-bold" to="/register">Register</Link></p>
                <p className="text-center mt-3">You can login with <a onClick={handleGoogleLogIn} className="text-rose-300 font-bold">Google</a></p>
            </div>
        </div>
    );
};

export default Login;