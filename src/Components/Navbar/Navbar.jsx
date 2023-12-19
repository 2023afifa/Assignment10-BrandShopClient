import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("Logged out successfully");
            })
            .catch(error => {
                console.error(error);
            })
    }

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    const navLink = <>
        <li><NavLink className="mr-3" to="/">Home</NavLink></li>
        <li><NavLink className="mr-3" to="/addproduct">Add Product</NavLink></li>
        <li><NavLink className="mr-3" to="/mycart">My Cart</NavLink></li>
        <li><NavLink className="mr-3" to="/popular">Our Popular Products</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar absolute z-10 bg-transparent px-10 border-2 top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 navLink">
                            {navLink}
                        </ul>
                    </div>
                    <a className="text-2xl md:text-4xl font-extrabold ml-2 text-black">ClassyCloset</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-black navLink">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <input onClick={handleThemeSwitch} type="checkbox" className="toggle" />
                    {
                        user ?
                            <>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <span className="ml-1 mr-3 font-medium hidden md:block">{user.email}</span>
                                <button onClick={handleLogout} className="btn">Log Out</button>
                            </>
                            : <Link to="/login"><button className="btn bg-transparent border-none text-lg hover:bg-transparent hover:text-slate-300">Log In</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;