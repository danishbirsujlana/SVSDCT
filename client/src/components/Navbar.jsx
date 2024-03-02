import React, { useState } from 'react'
import orgLogo from "../assets/logo.png";

function Link({ text, to }) {
    return (
        <div className='px-4 py-2 mx-2 rounded text-orange-600 hover:bg-orange-600 hover:text-white font-semibold transition duration-200 ease-in-out'>
            <a href={to}>{text}</a>
        </div>
    )
}

function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

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
                        <Link text="Home" to="#" dropdownItem={true} />
                        <Link text="Message" to="#" dropdownItem={true} />
                        <Link text="About Us" to="#" dropdownItem={true} />
                        <Link text="Help" to="#" dropdownItem={true} />
                    </div>
                </div>
            </div>

            <div className='hidden md:flex-1 md:flex md:justify-center md:items-center'>
                <Link text="Home" to="#" />
                <Link text="Message" to="#" />
                <Link text="About Us" to="#" />
                <Link text="Help" to="#" />
            </div>

            <div className="flex items-center">
                <div className='rounded px-4 py-2 bg-neutral-50 transition duration-200 ease-in-out hover:bg-neutral-200'>
                    <a href="#" className="font-bold text-black">Login</a>
                </div>
            </div>
        </div>

    )
}

export default Navbar;