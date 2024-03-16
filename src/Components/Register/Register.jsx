import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);

        setErrorMessage("");

        if (password.length < 6) {
            setErrorMessage("Password should be at least 6 characters");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorMessage("Password must contain at least one uppercase letter");
            return;
        }
        else if (!/[!@#$%^&*]/.test(password)) {
            setErrorMessage("Password must contain at least one special character");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast("Your registration is done successfully");

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        console.log("Profile updated");
                    })
                    .catch()
                const user = { email, name, photo };
                fetch("https://brand-server-nine.vercel.app/user", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            console.log("User added to database");
                            navigate(location?.state ? location?.state : "/");
                        }
                    })
            })
            .catch(error => {
                console.error(error);
                setErrorMessage(error.message);
            })
    }

    return (
        <div className='flex'>
            <div className='flex-1 bg-black'>
                <img className='max-h-screen mx-auto' src="https://i.ibb.co/z5RYdH6/register.jpg" alt="" />
            </div>
            <div className='flex-1'>
                <h2 className="text-3xl font-bold text-center mt-10">Please Register</h2>
                <form onSubmit={handleRegister} className="card-body lg:w-2/3 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter name" name="name" className="input input-bordered rounded-none" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="Enter photo" name="photo" className="input input-bordered rounded-none" required />
                    </div>
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
                        <button className="btn bg-black text-white rounded-none">Register</button>
                    </div>
                </form>
                <p className="text-center">Already have an account? Please <Link className="text-black font-bold" to="/login">Login</Link></p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;