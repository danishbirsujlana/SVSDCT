import React, { useState } from 'react'
import orgLogo from "../assets/logo.png";
import { Link } from "react-router-dom";
import AuthStatus from "../service/AuthService";

function LinkN({ text, to }) {
    return (
        <div className='px-4 py-2 mx-2 rounded text-orange-600 hover:bg-orange-600 hover:text-white font-semibold transition duration-200 ease-in-out'>
            <Link to={to}>{text}</Link>
        </div>
    )
}

function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const token = AuthStatus.isAuthenticated();
    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    };
    return (
        <div className='bg-black px-3 py-1 flex flex-wrap items-center'>
            <div className='mb-2 md:mb-0'>
                <a href='/'>
                    <img src={orgLogo} alt="Organization Logo" className="w-16" />
                </a>
            </div>

            <div className='md:hidden flex items-center ml-auto'>
                <div className="relative">
                    <button className="text-white focus:outline-none me-3" onClick={toggleDropdown}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>

                    <div className={`absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden ${isDropdownOpen ? 'block' : 'hidden'}`}>
                        <LinkN text="Home" to="/ok1" dropdownItem={true} />
                        <LinkN text="Message" to="/ok2" dropdownItem={true} />
                        <LinkN text="About Us" to="/ok3" dropdownItem={true} />
                        <LinkN text="Events" to="/ok4" dropdownItem={true} />
                        <LinkN text="Help" to="/ok4" dropdownItem={true} />
                    </div>
                </div>
            </div>

            <div className='hidden md:flex-1 md:flex md:justify-center md:items-center'>
                <LinkN text="Home" to="/ok1" />
                <LinkN text="Message" to="/ok2" />
                <LinkN text="About Us" to="/ok3" />
                <LinkN text="Events" to="/ok4" />
                <LinkN text="Help" to="/ok4" />
            </div>

            <div className="flex items-center">
                <div className='rounded px-4 py-2 bg-neutral-50 transition duration-200 ease-in-out hover:bg-neutral-200'>
                    <Link to={!token ? "/login" : "/profile"} className="font-bold text-black">{!token ? "Login" : "Your Profile"}</Link>
                </div>
            </div>
        </div>

    )
}

export default Navbar;